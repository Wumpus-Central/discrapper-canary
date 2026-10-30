n.d(t, { D: () => j_ });
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
    x = n(550640),
    T = n(107384),
    p = n(477900),
    f = n(582128),
    _ = n(17928),
    I = n(652215),
    N = n(346055),
    C = n(297264),
    b = n(364522),
    y = n(97808),
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
let X = (0, h.zD)(S.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => V.intl.string(V.t.TZ2hZH),
        useSubtitle: () => V.intl.string(V.t.Q7wgHc),
        useValue: () => U.D_.useSetting(),
        setValue: (e) => U.D_.updateSetting(e),
    }),
    Y = (0, h.zD)(S.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
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
    let [e, t] = f.useState(!1);
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
            let e = (0, _.bG)([et.A], () => et.A.speechRate);
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
        usePredicate: () => H.$j,
    }),
    ea = (0, h.zZ)(S.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => V.intl.string(V.t.XVR0Rb),
        buildLayout: () => [er, Y, X],
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
    useValue: () => (0, _.bG)([O.Ay], () => O.Ay.desaturateUserColors),
    setValue: () => (0, ed.YV)(),
});
var eg = n(652525);
let em = (0, h.zD)(S.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => V.intl.string(V.t["+Isihb"]),
        useSubtitle: () => V.intl.string(V.t.nNZ1Tz),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.enableCustomCursor),
        setValue: (e) => (0, ed.ts)(e),
        usePredicate: () => (0, eg.t)("EnableCustomCursorSetting"),
    }),
    eA = (0, h.zD)(S.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => V.intl.string(V.t["S3z+pV"]),
        useSubtitle: () => V.intl.string(V.t["3QuI9+"]),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, ed.Gm)(e),
        hasIcon: !0,
    });
var eE = n(554146);
let eh = (0, h.zD)(S.X.HIGH_CONTRAST_MODE, {
    useTitle: () => V.intl.string(V.t.aZlePv),
    useSubtitle: () => V.intl.string(V.t["v2qF8+"]),
    useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, ed.uh)(e ? O._1.HIGH : O._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: T.Xi.NEW, dismissibleContent: eE.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var eS = n(406360),
    ex = n(964404);
let eT = (0, h.Qx)(S.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => V.intl.string(V.t.nemtgW),
        useSubtitle: () => V.intl.string(V.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: T.Xi.BETA }),
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
            return (0, eS.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, ed.FU)(e);
        },
        useValue: function () {
            return (0, _.bG)([ex.Ay], () => ex.Ay.hdrDynamicRange);
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
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.officialMessageStyle),
        setValue: (e) => (0, ed.w_)(e),
    }),
    ef = (0, h.Hn)(S.X.ROLE_STYLE, {
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
(0, h.Qx)(S.X.ROLE_STYLE, {
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
let e_ = (0, h.sN)(S.X.SATURATION, {
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
    eb = n(975571);
let ey = (0, eN.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    ev = (0, h.zD)(S.X.SYNC_FORCED_COLORS, {
        useTitle: () => V.intl.string(V.t.cguiec),
        useSubtitle: () => V.intl.format(V.t.GwEVE2, { learnMoreLink: eb.A.getArticleURL(I.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, _.bG)([O.Ay], () => O.Ay.syncForcedColors);
            return (
                (0, eI.Ay)(() => {
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
        usePredicate: () => (0, eC.D)(),
    }),
    ej = (0, h.zZ)(S.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => V.intl.string(V.t.JqvyiY),
        buildLayout: () => [e_, ec, eh, em, ev, eT, ef, ep, eA, eu],
    });
var eO = n(397438),
    eL = n(355097),
    eR = n(107406);
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
let eG = (0, h.zD)(S.X.ANIMATE_EMOJIS, {
        useTitle: () => V.intl.string(V.t.iIaOlc),
        useSubtitle: () => eD("animateEmoji"),
        useDisabled: () => eP("animateEmoji"),
        useValue: () => U.Sf.useSetting(),
        setValue: (e) => U.Sf.updateSetting(e),
    }),
    eM = (0, h.zD)(S.X.ANIMATE_GIFS, {
        useTitle: () => V.intl.string(V.t.wqsK7q),
        useSubtitle: () => eD("gifAutoPlay"),
        useDisabled: () => eP("gifAutoPlay"),
        useValue: () => U.kt.useSetting(),
        setValue: (e) => U.kt.updateSetting(e),
    });
var eU = n(823894);
let eV = (0, h.Qx)(S.X.ANIMATE_STICKERS, {
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
    ek = (0, h.zD)(S.X.REDUCED_MOTION, {
        useTitle: () => V.intl.string(V.t.b3XBzg),
        useSubtitle: () => V.intl.format(V.t.XqvxJc, { helpdeskArticle: eb.A.getArticleURL(I.MVz.REDUCED_MOTION) }),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.prefersReducedMotion),
        setValue: (e) => (0, ed.qz)(e ? "reduce" : "no-preference"),
    }),
    ew = (0, h.zD)(S.X.SYNC_REDUCED_MOTION, {
        useTitle: () => V.intl.string(V.t.oL55A6),
        useValue: () => (0, _.bG)([O.Ay], () => "auto" === O.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, ed.qz)(e ? "auto" : O.Ay.systemPrefersReducedMotion),
    });
function eF(e) {
    return V.intl.formatToPlainString(V.t.pyvjRp, { seconds: e });
}
let eB = (0, h.sN)(S.X.TOAST_DURATION, {
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
    ez = (0, h.zZ)(S.X.MOTION_CATEGORY, {
        useTitle: () => V.intl.string(V.t.e3TR1b),
        buildLayout: () => [ek, ew, eB, eM, eG, eV],
    });
var eX = n(688810),
    eY = n(259065),
    eH = n(872859);
let eW = (0, h.zD)(S.X.DISPLAY_NAME_STYLES, {
    useTitle: () => V.intl.string(eH.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eX.Ay)();
        return V.intl.format(eH.default.aEax6P, {
            onClickOpenModal() {
                (0, eY.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, _.bG)([O.Ay], () => O.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, ed.Dm)(e),
});
function eK(e) {
    return `${e.toFixed(0)}px`;
}
let eZ = (0, h.sN)(S.X.APPEARANCE_FONT_SCALING, {
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
    eq = (0, h.zD)(S.X.UNDERLINE_LINKS, {
        useTitle: () => V.intl.string(V.t.OLZFB8),
        useSubtitle: () => V.intl.string(V.t.DIX3ke),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.alwaysShowLinkDecorations),
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
    useDefaultValue: () => (U.hH.useSetting() ? e3.y5 : e3.ES),
    useExternalValue: () => (0, _.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
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
    e9 = (0, h.zZ)(S.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.VKYWk8),
        buildLayout: () => [e$, e2, e5, e7],
    }),
    te = (0, h.t_)(S.X.ACCESSIBILITY_PANEL, {
        useTitle: () => V.intl.string(V.t.G0neg7),
        buildLayout: () => [eQ, e9, ej, ez, ea],
        decoration: {
            type: T.t9.STRONGLY_DISCOURAGED_CUSTOM,
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
                return (0, p.jsx)(N.M, {
                    children: (0, p.jsxs)("section", {
                        "aria-label": V.intl.string(V.t.RC22qg),
                        children: [
                            (0, p.jsx)(C.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: k.Vf,
                                children: V.intl.string(V.t.RC22qg),
                            }),
                            (0, p.jsxs)(b.Ip, {
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
                                                        author: { ...(0, D.p_)(t), colorString: "#dd80f4" },
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
        icon: x.c,
        useMenu: z.A,
        buildLayout: () => [te],
    });
n(321073);
var tn = n(650809),
    ti = n(477782),
    tl = n(636537),
    ts = n(73153),
    tr = n(74396),
    ta = n(269880),
    to = n(55619),
    tu = n(351906),
    td = n(174459),
    tc = n(189081);
let tg = (0, h.zD)(S.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, _.bG)([tc.A], () => tc.A.hasLibraryApplication()),
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
function tx(e) {
    let { title: t } = e;
    return t;
}
function tT(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: l } = e,
        s = t();
    return "string" == typeof s ? i({ title: s, index: l, key: n }) : s;
}
function tp(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, p.jsx)(tT, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tf(e) {
    return e.type === tS.Z6.LIST;
}
function t_(e, t) {
    let { limit: n = 2, formatter: i = tx } = t ?? {};
    tE()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, th._)(),
        r = l.get(e) ?? s.get(e);
    tE()(
        null != r && (r.type === tS.Z6.ACCORDION || tf(r)),
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
var tI = n(951260);
let tN = (0, h.zD)(S.X.ENABLE_APPS_BUTTON, {
        useTitle: () => V.intl.string(V.t.ZTH4j4),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, ed.n8)({ appsButtonEnabled: e }),
    }),
    tC = {
        useTitle: () => V.intl.string(V.t["I/5LyL"]),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isSubmitButtonEnabled),
        setValue: () => (0, ed.Xt)(),
    },
    tb = (0, h.zD)(S.X.ENABLE_SEND_BUTTON, tC),
    ty = (0, h.zD)(S.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tC,
        usePredicate: () => !(0, tI.n)("EnableSendButtonOutsideExperiment"),
    }),
    tv = (0, h.zD)(S.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => V.intl.string(V.t.WggFoO),
        useSubtitle: () => V.intl.string(V.t.XpErGj),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, ed.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, _.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tj = (0, h.zD)(S.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => V.intl.string(V.t.YErWkD),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, ed.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, _.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tO = (0, h.zD)(S.X.ENABLE_GIF_BUTTON, {
        useTitle: () => V.intl.string(V.t.k7oNEz),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isGifButtonEnabled),
        setValue: (e) => (0, ed.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, _.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tL = (0, h.zD)(S.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => V.intl.string(V.t.Ar0krj),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, ed.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, _.bG)([O.Ay], () => O.Ay.expressionPickerFormat === O.IG.FLEXIBLE),
    }),
    tR = (0, h.Qx)(S.X.EXPRESSION_PICKER_FORMAT, {
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
    tD = (0, h.FW)(S.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => V.intl.string(V.t["V9/cNN"]),
        buildLayout: () => [tR, tv, tj, tO, tL],
    }),
    tP = (0, h.bd)(S.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? V.intl.string(V.t.IwVGQs) : V.intl.string(V.t.cFNDh5);
        },
        useCollapsedSubtitle: () => t_(S.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tI.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tb, tN, tD],
    });
var tG = n(788026);
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
            (td.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: I.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                U.SI.updateSetting(e));
        },
    });
var tk = n(793574);
let tw = (0, h.zD)(S.X.CHAT_STICKERS_AUTOCOMPLETE, {
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
    tF = (0, h.zZ)(S.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Ob7VMB),
        useSearchTerms: () => [V.intl.string(V.t.onqU6o)],
        buildLayout: () => [tV, tM, tw, tU, ty, tP],
    });
var tB = n(526162),
    tz = n(793943),
    tX = n(792656),
    tY = n(830543),
    tH = n(785007),
    tW = n(806932),
    tK = n(915089),
    tZ = n(10392),
    tq = n(82498),
    tQ = n(174197),
    tJ = n(202541);
let t$ = (0, h.E2)(S.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [V.intl.string(V.t.gnwxvT)],
    Component: function () {
        let e = (0, tK.GV)(),
            { ref: t, ...n } = (0, tH._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, _.bG)([tB.A], () => tB.A.isUpsellPreview);
        return (
            (0, Z.Ay)(() => {
                i &&
                    (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tJ.e.APP_ICON_UPSELL,
                        location_stack: [tk.A.USER_SETTINGS],
                    }),
                    (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, [tk.A.USER_SETTINGS], () =>
                        (0, tq.uq)(tJ.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, p.jsx)("div", {
                ...n,
                ref: t,
                children: (0, p.jsx)(q.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, p.jsx)(tW.m, { disabled: i, size: tQ.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function t0() {
    ((0, tz.nf)(tz.HP.APP_ICON), (0, tY.default)());
}
function t1() {
    return (0, p.jsx)(tX.A, {
        subscriptionTier: tJ.pe.TIER_2,
        defaultTextOverride: V.intl.string(V.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let t2 = (0, h.zZ)(S.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RPh2ou),
        useSubtitle: () => V.intl.string(V.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, _.bG)([tB.A], () => tB.A.isUpsellPreview);
            return f.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: T.UV.BUTTON,
                        text: V.intl.string(V.t["6acvnZ"]),
                        onClick: t0,
                    }),
                    e && t.push({ id: "upsell-button", type: T.UV.STRONGLY_DISCOURAGED_CUSTOM, button: t1 }),
                    { type: T.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [t$],
    }),
    t3 = (0, h.AK)(S.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.UDr3Iy),
        useSearchTerms: () => [V.intl.string(V.t.UDr3Iy)],
        destinationKey: S.X.ACCESSIBILITY_PANEL,
    }),
    t4 = (0, h.gN)(S.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [t3] });
var t5 = n(193249),
    t6 = n(16236),
    t8 = n(749884),
    t7 = n(760658);
let t9 = eb.A.getArticleURL(I.MVz.FAVORITES_GUILD),
    ne = (0, h.E2)(S.X.CHAT_FAVORITES_TOGGLE, {
        useSearchTerms: () => [V.intl.string(t7.default.OT1NK5)],
        Component: function () {
            let e = (0, t8.A)(!1);
            return (0, p.jsx)(t5.d, {
                checked: e,
                description: V.intl.format(t7.default.GR2KOG, { helpCenterLink: t9 }),
                onChange: t6.kG,
                label: V.intl.string(t7.default.OT1NK5),
                badge: "beta",
            });
        },
    }),
    nt = (0, h.zD)(S.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => V.intl.string(V.t.U47N1p),
        useValue: U.hD.useSetting,
        setValue: U.hD.updateSetting,
    }),
    nn = (0, h.zD)(S.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => V.intl.string(V.t.VP11No),
        useValue: U.X6.useSetting,
        setValue: U.X6.updateSetting,
    }),
    ni = (0, h.FW)(S.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => V.intl.string(V.t["9nyle0"]),
        buildLayout: () => [nt, nn],
    }),
    nl = (0, h.zD)(S.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => V.intl.string(V.t["5bK9vw"]),
        useValue: U.rs.useSetting,
        setValue: U.rs.updateSetting,
    }),
    ns = (0, h.zD)(S.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => V.intl.string(V.t["zge/fP"]),
        useValue: U.jW.useSetting,
        setValue: U.jW.updateSetting,
    });
var nr = n(28863),
    na = n(766075);
let no = (0, h.zD)(S.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => V.intl.string(V.t.JgjNG3),
        useSubtitle: () => {
            if (!U.hH.useSetting())
                return V.intl.format(V.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, p.jsx)(
                            nr.Anchor,
                            {
                                onClick: () => (0, na.openUserSettings)(S.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
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
    nu = (0, h.Hn)(S.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => V.intl.string(V.t.QgwmVz),
        useOptions: () => [
            { value: I.P6Q.ON_CLICK, id: I.P6Q.ON_CLICK, label: V.intl.string(V.t["KFH/me"]) },
            { value: I.P6Q.ALWAYS, id: I.P6Q.ALWAYS, label: V.intl.string(V.t.Pe1RbL) },
            { value: I.P6Q.IF_MODERATOR, id: I.P6Q.IF_MODERATOR, label: V.intl.string(V.t.K5VTBE) },
        ],
        useValue: U.gs.useSetting,
        setValue: U.gs.updateSetting,
    }),
    nd = (0, h.zD)(S.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => V.intl.string(V.t.AInv5m),
        useValue: U.SY.useSetting,
        setValue: U.SY.updateSetting,
    }),
    nc = (0, h.zZ)(S.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.OIgYlQ),
        useSearchTerms: () => [V.intl.string(V.t["/VQax8"])],
        buildLayout: () => [ni, nl, ns, nu, nd, no, ne, t4],
    });
var ng = n(753806),
    nm = n(145331);
let nA = (0, h.Qx)(S.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
    nE = (0, h.zZ)(S.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5h0QOP"]),
        buildLayout: () => [nA],
    });
var nh = n(574381);
let nS = (0, h.zD)(S.X.STREAMING_AUTO_STREAMER_MODE, {
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
    nx = (0, h.zD)(S.X.STREAMING_STREAMER_MODE, {
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
var nT = n(77729),
    np = n(589051),
    nf = n(81684),
    n_ = n(999834);
let nI = [],
    nN = (0, h.Hn)(S.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => V.intl.string(V.t.VCDSLW),
        useSearchTerms: () => [V.intl.string(V.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, n_.b_)(),
                t = (0, np.Mn)("StreamerModeSettings");
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
    nC = (0, h.zD)(S.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => V.intl.string(V.t.LSBUGR),
        useValue: () =>
            (0, _.bG)([tu.A], () => {
                let { hidePersonalInformation: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hidePersonalInformation: e }),
    }),
    nb = (0, h.zD)(S.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => V.intl.string(V.t.uWBOri),
        useValue: () =>
            (0, _.bG)([tu.A], () => {
                let { hideInstantInvites: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ hideInstantInvites: e }),
    }),
    ny = (0, h.zD)(S.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => V.intl.string(V.t.OrqYDP),
        useValue: () =>
            (0, _.bG)([tu.A], () => {
                let { disableSounds: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableSounds: e }),
    }),
    nv = (0, h.zD)(S.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sUAbLd),
        useValue: () =>
            (0, _.bG)([tu.A], () => {
                let { disableNotifications: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ disableNotifications: e }),
    }),
    nj = (0, h.zD)(S.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => V.intl.string(V.t["iA81+a"]),
        useSubtitle: () => V.intl.string(V.t.P4vj0h),
        useValue: () =>
            (0, _.bG)([tu.A], () => {
                let { enableContentProtection: e } = tu.A.getSettings();
                return e;
            }),
        setValue: (e) => to.A.update({ enableContentProtection: e }),
        usePredicate: () => nT.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nO = (0, h.FW)(S.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.xYhOEh),
        buildLayout: () => [nC, nb, ny, nv, nj, nN],
    }),
    nL = (0, h.zZ)(S.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.S5GfOW),
        buildLayout: () => [nx, nS, nO],
    });
var nR = n(147248),
    nD = n(141343),
    nP = n(665267),
    nG = n(414133),
    nM = n(103573);
let nU = (0, h.Hn)(S.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => V.intl.string(V.t.Q7mm4g),
        useSearchTerms: () => [V.intl.string(nM.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: V.intl.string(V.t["hrS/Pc"]), value: eJ.tI.GUILD },
            { id: "personal", label: V.intl.string(V.t.mlvXIq), value: eJ.tI.PERSONAL },
        ],
        useValue: () => U.zY.useSetting(),
        setValue: U.zY.updateSetting,
        usePredicate: () => (0, nG.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nV = (0, h.zD)(S.X.SYNC_PROFILE_THEMES, {
        useTitle: () => V.intl.string(V.t.C00w4l),
        useValue: () => (0, _.bG)([O.Ay], () => O.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, ed.M1)(),
    });
var nk = n(817281),
    nw = n(284016),
    nF = n(363195);
let nB = (0, h.zD)(S.X.APPEARANCE_SYNC_THEME, {
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
            l = U.eh.getSetting()?.customUserThemeSettings != null;
        ((t = I.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            ts.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            nk.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nz = n(393284);
let nX = (0, h.AK)(S.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.nhVQDJ),
        useSearchTerms: () => [V.intl.string(V.t.nhVQDJ)],
        destinationKey: S.X.ACCESSIBILITY_PANEL,
    }),
    nY = (0, h.gN)(S.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nX] }),
    nH = (0, h.zZ)(S.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, _.bG)([O.Ay], () => O.Ay.useForcedColors)
                ? {
                      type: T.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: (0, eC.D)()
                          ? V.intl.format(V.t.Jae48E, {
                                onClick: () => {
                                    (0, na.openUserSettings)(S.X.SYNC_FORCED_COLORS);
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
                      type: T.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: T.UV.BUTTON,
                              text: V.intl.string(V.t["E+COuA"]),
                              onClick: nP.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nz.k, nB, nV, nU, nY],
    }),
    nW = (0, h.t_)(S.X.APPEARANCE_PANEL, {
        initialize: function () {
            tr.A.isFetching() ||
                (ts.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                tl.Bo.get({ url: I.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
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
        buildLayout: () => [nH, t2, nc, tF, nE, nL, tm],
    }),
    nK = [{ badgeType: T.Xi.NEW, dismissibleContent: eE.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE }],
    nZ = (0, h.i4)(S.X.APPEARANCE_SIDEBAR_ITEM, {
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
                                  (td.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: I.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      U.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                s =
                    ((n = (0, _.bG)([tu.A], () => tu.A.enabled, [])),
                    (0, p.jsx)(ti.sL, {
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
                    null != l &&
                        e.push((0, p.jsx)(ti.rX, { label: V.intl.string(V.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, p.jsx)(ti.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [i, l, s]);
        },
        getDismissibleBadges: () => nK,
        buildLayout: () => [nW],
    });
var nq = n(37646),
    nQ = n(434404);
let nJ = (0, h.t_)(S.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => V.intl.string(V.t.KyFVyi),
        buildLayout: () => [nQ.F],
    }),
    n$ = (0, h.i4)(S.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: nq.U,
        useTitle: () => V.intl.string(V.t.KyFVyi),
        buildLayout: () => [nJ],
    });
var n0 = n(3137),
    n1 = n(661531),
    n2 = n(314116),
    n3 = n(270003),
    n4 = n(834730),
    n5 = n(939249),
    n6 = n(369606),
    n8 = n(320448),
    n7 = n(604121),
    n9 = n(725951),
    ie = n(400492),
    it = n(669067),
    ii = n(115063),
    il = n(754692),
    is = n(927018),
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
function iS(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, is.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = im()(n),
        m = null != o && l,
        A = m ? n5.D : "div";
    return (0, p.jsxs)(A, {
        className: ic()(ih.kL, m && ih.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, p.jsx)("div", {
                className: ih.zc,
                children: (0, p.jsx)(iE.A, { achievementId: t, size: iE.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, p.jsxs)("div", {
                className: ih.VW,
                children: [
                    null != n &&
                        (0, p.jsx)(n4.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ih.YR,
                            children: (0, iA.mk)(g),
                        }),
                    (0, p.jsx)(n4.E, { variant: "text-md/medium", color: d, children: s() }),
                    (0, p.jsx)(n4.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var ix = n(545744);
function iT(e) {
    let { onBackClick: t } = e,
        n = (0, _.bG)([iu.A], () => iu.A.getAllUnlockedAchievements()),
        i = f.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = f.useMemo(
            () =>
                Object.values(is.l0)
                    .filter(io.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(n5.D, {
                onClick: t,
                className: ix.vv,
                children: [
                    (0, p.jsx)(ia.A, { direction: ia.A.Directions.LEFT, className: ix.Kk }),
                    (0, p.jsx)(n4.E, {
                        variant: "text-lg/normal",
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
                            (0, p.jsx)(C.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: V.intl.string(V.t["6jI0hd"]),
                            }),
                            (0, p.jsx)(n4.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: V.intl.string(V.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, p.jsx)("div", {
                        className: ix.nr,
                        children: (0, p.jsx)(n6.TrophyIcon, {
                            size: "custom",
                            color: n1.A.unsafe_rawColors.ORANGE_345.css,
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
                            return (0, p.jsx)(iS, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, p.jsxs)("div", {
                    className: ix.yF,
                    children: [
                        (0, p.jsx)("div", {
                            className: ix.if,
                            children: (0, p.jsx)(n4.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: V.intl.string(V.t.GFyMg1),
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: ix.Eh,
                            children: l.map((e) => (0, p.jsx)(iS, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, p.jsx)("div", { className: ix.yF, children: (0, p.jsx)("div", { className: ix.F3 }) }),
        ],
    });
}
var ip = n(224964),
    i_ = n(31408),
    iI = n(368588);
let iN = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iC = (0, W.range)(0, 11),
    ib = (0, W.range)(0, 2.25, 0.25),
    iy = (0, W.range)(1, 11),
    iv = (0, W.range)(1, 26),
    ij = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iO(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, p.jsx)(
                t5.d,
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
    return (0, p.jsx)(n3.n, { label: V.intl.string(V.t.bWVN1D), children: s });
}
function iL(e) {
    let { children: t } = e;
    return (0, p.jsx)(n4.E, { className: iI.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function iR(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        l = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion);
    return (0, p.jsx)(t5.d, {
        label: V.intl.string(V.t.vuiXm9),
        description: V.intl.string(V.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, il._)(is.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, n2.A)({
                          title: l ? V.intl.string(V.t["FxT+p0"]) : V.intl.string(V.t.TAZ4F9),
                          subtitle: l ? V.intl.string(V.t.gmixrx) : V.intl.string(V.t.jN3t3K),
                          confirmText: V.intl.string(V.t.JFfins),
                          onConfirm: () => i(l ? iN : { enabled: !0, warningSeen: !0 }),
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
                confettiSize: l,
                confettiEnabledLocations: s,
            },
            updateSettings: r,
        } = e,
        a = !t || !n;
    return (0, p.jsxs)(n3.n, {
        label: V.intl.string(V.t.mqxwJO),
        children: [
            (0, p.jsx)(t5.d, {
                label: V.intl.string(V.t.s0KCgF),
                description: V.intl.string(V.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iI.KF,
                        children: V.intl.string(V.t.vd0D81),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t.a18Sug) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.vd0D81),
                        disabled: a,
                        marks: iy,
                        snapToMarks: !0,
                        minValue: iy[0],
                        maxValue: iy[iy.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => r({ confettiCount: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iI.KF,
                        children: V.intl.string(V.t.sPO3ij),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t.xoldVn) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.sPO3ij),
                        disabled: a,
                        marks: iv,
                        snapToMarks: !0,
                        minValue: iv[0],
                        maxValue: iv[iv.length - 1],
                        defaultValue: l,
                        onChangeEnd: (e) => r({ confettiSize: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsx)(iO, {
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
                settingsLocations: s,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function iP(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        r = !t || !n;
    return (0, p.jsxs)(n3.n, {
        label: V.intl.string(V.t.Xz0ole),
        children: [
            (0, p.jsx)(t5.d, {
                label: V.intl.string(V.t.o3iV7B),
                description: V.intl.string(V.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, p.jsx)(t5.d, {
                label: V.intl.string(V.t["Ax+IoW"]),
                description: V.intl.string(V.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: iI.KF,
                        children: V.intl.string(V.t.L0oQuh),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t["/OOFpL"]) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.L0oQuh),
                        disabled: r,
                        marks: iC,
                        snapToMarks: !0,
                        minValue: iC[0],
                        maxValue: iC[iC.length - 1],
                        defaultValue: l,
                        onChangeEnd: (e) => s({ combosRequiredCount: e }),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iG(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        r = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, p.jsxs)(n3.n, {
        label: V.intl.string(V.t.wVS5Sd),
        children: [
            (0, p.jsx)(t5.d, {
                label: V.intl.string(V.t.N004zO),
                description: r ? V.intl.string(V.t.GckHGw) : V.intl.string(V.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iI.KF,
                        children: V.intl.string(V.t.UxnnC4),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t.CEOEOb) }),
                    (0, p.jsx)(Q.A, {
                        "aria-label": V.intl.string(V.t.UxnnC4),
                        disabled: a,
                        marks: ib,
                        snapToMarks: !0,
                        minValue: ib[0],
                        maxValue: ib[ib.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, il._)(is.sn.MORE),
                                s(t, 1));
                        },
                        formatValue: (e) => (e === ib[ib.length - 1] ? V.intl.string(V.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, p.jsx)(iO, {
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
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function iM(e) {
    let { updateSettings: t } = e;
    return (0, p.jsx)(n3.n, {
        label: V.intl.string(V.t.EuXv2q),
        children: (0, p.jsxs)(q.B, {
            gap: 16,
            children: [
                (0, p.jsx)("div", { children: V.intl.string(V.t["1SLnki"]) }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: iI.hw,
                    children: (0, p.jsx)(j.$, {
                        variant: "primary",
                        size: "sm",
                        text: V.intl.string(V.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tY.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iU(e) {
    let { onChangePage: t } = e;
    return (0, p.jsxs)(n5.D, {
        onClick: function () {
            return t(1);
        },
        className: iI.Tq,
        children: [
            (0, p.jsx)("div", {
                className: iI.w1,
                children: (0, p.jsx)(n6.TrophyIcon, { size: "md", color: n1.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, p.jsxs)("div", {
                className: iI.qL,
                children: [
                    (0, p.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t["6jI0hd"]),
                    }),
                    (0, p.jsx)(n4.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: V.intl.string(V.t.GuUItX),
                    }),
                ],
            }),
            (0, p.jsx)(n8._, { size: "custom", color: "currentColor", width: 16, className: iI.nT }),
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
        [l, s] = f.useState({ x: 0, y: 0 }),
        r = (0, ip.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
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
            ((s = i.confettiEnabled), (a = e.confettiEnabled), (o = i.enabled), (u = e.enabled), (a ?? s) && (u ?? o));
        0 === t && A && r.fire(l.x, l.y, { settings: e });
        let E =
            ((d = i.screenshakeEnabled),
            (c = e.screenshakeEnabled),
            (g = i.enabled),
            (m = e.enabled),
            (c ?? d) && (m ?? g));
        1 === t && E && (0, ii.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        s({ x: e.clientX, y: e.clientY });
    }
    return (
        f.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, p.jsxs)(q.B, {
            gap: 24,
            children: [
                (0, p.jsx)(iR, { settings: i, updateSettings: a }),
                (0, p.jsx)(iU, { onChangePage: t }),
                (0, p.jsx)(iP, { settings: i, updateSettings: a }),
                (0, p.jsx)(iG, { settings: i, updateSettings: a }),
                (0, p.jsx)(iD, { settings: i, updateSettings: a }),
                (0, p.jsx)(iM, { updateSettings: a }),
            ],
        })
    );
}
function iw(e) {
    return 0 === e ? n9.f.LEFT : n9.f.RIGHT;
}
let iF = (0, h.E2)(S.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = f.useState(0),
                [n, i] = f.useState(iw(e)),
                [l, s] = f.useState(!1),
                r = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion),
                a = l && !r;
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
                    Math.random() > 0.99 && (0, il._)(is.sn.VISITOR_100);
                }, []),
                (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(n9.A, {
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
                                        return (0, p.jsx)(ik, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, p.jsx)(iT, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, p.jsx)("div", {
                            className: a ? iI.Sr : iI.IP,
                            children: (0, p.jsx)(n7.a, {
                                className: iI.gT,
                                importData: iV,
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
    iB = (0, h.zZ)(S.X.POGGERMODE_CATEGORY, { buildLayout: () => [iF] });
var iz = n(212043);
let iX = (0, h.t_)(S.X.POGGERMODE_PANEL, { useTitle: () => V.intl.string(V.t.AtCukI), buildLayout: () => [iB] }),
    iY = (0, h.i4)(S.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AtCukI),
        icon: () => (0, p.jsx)("img", { alt: "", src: n(724405), className: iz.$ }),
        usePredicate: () => (0, _.bG)([n0.A], () => n0.A.settingsVisible),
        buildLayout: () => [iX],
    });
var iH = n(307301),
    iW = n(410767),
    iK = n(683071),
    iZ = n(97260),
    iq = n(710195),
    iQ = n(57757),
    iJ = n(188321),
    i$ = n(695366),
    i0 = n(812729),
    i1 = n.n(i0),
    i2 = n(587895),
    i3 = n(429913),
    i4 = n(616356),
    i5 = n(952818);
function i6(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function i8() {
    let e = (0, _.bG)([i4.A], () => i4.A.getStreamerActiveStreamMetadata()),
        t = (0, _.bG)(
            [i5.Ay],
            () => {
                let e = i5.Ay.getVisibleGame();
                return null != e ? i5.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i1(),
        ),
        [n] = (0, i3.A)([i6(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i7 = n(769015),
    i9 = n(999926),
    le = n(935671),
    lt = n(435075);
function ln(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, p.jsx)("div", {
              className: lt.zc,
              children: (0, p.jsx)(i$.E, { size: "sm", color: n1.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, p.jsxs)("div", {
              className: lt.nt,
              children: [
                  (0, p.jsx)(i7.A, { game: n, pid: t.pid, size: i7.M.MEDIUM }),
                  (0, p.jsx)("div", {
                      className: lt.Am,
                      children: (0, p.jsx)(i$.E, { size: "sm", color: n1.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function li(e) {
    let t = (0, _.bG)([i9.Ay], () => i9.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = i8();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, le.NP)(),
        s = l && null != n && t === I.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function ll(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = li(n);
    return i
        ? (0, p.jsxs)("div", {
              className: ic()(lt.kL, t),
              children: [
                  (0, p.jsx)(ln, { game: l, application: s }),
                  (0, p.jsxs)("div", {
                      className: lt.FS,
                      children: [
                          (0, p.jsx)(n4.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? V.intl.string(V.t.vxfv7v)
                                      : null != l
                                        ? V.intl.string(V.t.fAYU2G)
                                        : V.intl.string(V.t["9V4X/c"]),
                          }),
                          (0, p.jsx)(n4.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: V.intl.format(V.t["/y6htt"], {
                                  helpCenterLink: eb.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      text: V.intl.string(V.t["1iI46O"]),
                      onClick: function () {
                          (0, le.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var ls = n(404778),
    lr = n(579370),
    la = n(532624),
    lo = n(691885),
    lu = n(452027),
    ld = n(408278),
    lc = n(241326),
    lg = n(866665),
    lm = n(140735),
    lA = n(489718),
    lE = n(827343),
    lh = n(635242),
    lS = n(350535),
    lx = n(189213),
    lT = n(192308),
    lp = n(95477),
    lf = n(320989),
    l_ = n(978263);
let lI = [];
var lN = n(235986),
    lC = n(484734),
    lb = n(734057),
    ly = n(808728),
    lv = n(71393),
    lj = n(967198),
    lO = n(926140),
    lL = n(847893);
function lR() {}
let lD = [lO.rD.VOICE_CHANNEL];
function lP(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function lG() {
    return (0, p.jsx)("div", {
        className: lL.i1,
        children: (0, p.jsx)(n4.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lL.GN,
            children: V.intl.string(V.t.zHjCd1),
        }),
    });
}
function lM(e) {
    let { keybind: t, className: n } = e,
        i = f.useRef(t);
    f.useEffect(() => {
        i.current = t;
    });
    let [l, s] = f.useState(t.params?.channelId ?? void 0),
        r = f.useCallback(() => {
            (0, lT.openModalLazy)(
                async () => (e) =>
                    (0, p.jsx)(lU, {
                        ...e,
                        onSelect: (e) => {
                            (s(e), iZ.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, p.jsx)("div", {
        className: ic()(lL.a8, n),
        children: (0, p.jsx)(lu.D, {
            label: V.intl.string(V.t.q4JpM8),
            children: (0, p.jsxs)(lN.A, {
                align: lN.A.Align.STRETCH,
                children: [
                    (0, p.jsx)("div", { className: lL.$X, children: (0, p.jsx)(lV, { channelId: l }) }),
                    (0, p.jsx)(lN.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, p.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lU(e) {
    let t,
        n,
        { transitionState: i, onClose: l, onSelect: s } = e,
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
                    autocompleterBeforeCreateSearchContext: l,
                } = e,
                [s, r] = f.useState(""),
                [a, o] = f.useState(lI),
                u = f.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lI) : o(e);
                }, []);
            f.useEffect(
                () =>
                    lf.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = f.useState(() => new l_.A(u, n, void 0, i));
            return (
                f.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: f.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lD, autocompleterBeforeCreateSearchContext: lP }),
        c =
            ((t = "" !== o),
            (n = (0, _.yK)(
                [ly.Ay, lb.A, lj.A],
                () => {
                    let e = lj.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of ly.Ay.getVocalChannelIds(e)) {
                        let e = lb.A.getChannel(t);
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
            if (e?.type === lO.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === lO.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? lb.A.getChannel(n.parent_id) : void 0,
                              r = lv.A.getGuild(n.guild_id);
                          return (0, p.jsx)(
                              lC.c3,
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
                : { sections: [1], renderRow: () => (0, p.jsx)(lG, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, p.jsx)(lx.a, {
        transitionState: i,
        onClose: l,
        title: V.intl.string(V.t.Dm8O4e),
        subtitle: V.intl.string(V.t.q4JpM8),
        actions: void 0,
        input: (0, p.jsx)(lp.k, {
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
                                if (e?.type === lO.rD.VOICE_CHANNEL) return e.record;
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
function lV(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, _.cf)([lb.A, lv.A], () => {
            let e = null != t ? lb.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lb.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? lv.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, p.jsx)(n4.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lL.GN,
              children: V.intl.string(V.t["/fYIK7"]),
          })
        : (0, p.jsx)(lC.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lR,
              onFocus: lR,
              onMouseEnter: lR,
              focused: !1,
              children: null != l ? (0, p.jsx)("div", { className: lL.J5, children: l.name }) : null,
          });
}
var lk = n(650583),
    lw = n(731854),
    lF = n(94451);
function lB(e) {
    let { keybind: t } = e,
        n = (0, _.bG)([la.Ay], () => la.Ay.isWaylandPortalActive()),
        i = (0, _.bG)([la.Ay], () => la.Ay.getWaylandPortalShortcutState(t.id));
    return n && 0 !== t.shortcut.length && t.enabled
        ? la.Ay.isWaylandPortalEligibleShortcut(t.shortcut)
            ? null == i
                ? null
                : i.bound
                  ? (0, lr.Rg)(i)
                      ? (0, p.jsx)("div", {
                            className: lF.$e,
                            children: (0, p.jsx)(iK.w, {
                                type: "info",
                                message: V.intl.format(V.t.wu2lqV, { trigger: i.triggerDescription }),
                                role: "status",
                            }),
                        })
                      : null
                  : (0, p.jsx)("div", {
                        className: lF.$e,
                        children: (0, p.jsx)(iK.w, {
                            type: "warning",
                            message: V.intl.string(V.t.PTCrUP),
                            role: "status",
                        }),
                    })
            : (0, p.jsx)("div", {
                  className: lF.$e,
                  children: (0, p.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t.J0m3aK), role: "status" }),
              })
        : null;
}
function lz(e) {
    let { keybind: t } = e,
        n = lS.dI(t.shortcut);
    return e6.A.hasBind(n)
        ? (0, p.jsx)("div", {
              className: lF.$e,
              children: (0, p.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t["7lQlw3"]), role: "status" }),
          })
        : lk.Yy.has(n)
          ? (0, p.jsx)("div", {
                className: lF.$e,
                children: (0, p.jsx)(iK.w, {
                    type: "warning",
                    message: V.intl.format(V.t.MOIaNd, {
                        keyboardNavArticle: eb.A.getArticleURL(I.MVz.KEYBOARD_NAVIGATION),
                    }),
                    role: "status",
                }),
            })
          : void 0;
}
function lX(e) {
    let { keybind: t } = e;
    return t.action === I.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, p.jsx)(lM, { keybind: t, className: lF._M }) : null;
}
let lY = f.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        l = f.useCallback((e) => iZ.A.setKeybind({ ...t, action: e }), [t]),
        s = f.useCallback(
            (e) => {
                if (
                    ((0, lr.uL)(t.id, t.shortcut, e, la.Ay.getWaylandPortalShortcutState(t.id)),
                    t.managed && t.action === I.hCu.PUSH_TO_TALK)
                ) {
                    let n = t.context ?? lw.x.DEFAULT;
                    lE.default.setMode(i9.Ay.getMode(n), { shortcut: e }, n);
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
    return (0, p.jsxs)("div", {
        className: lF.f_,
        children: [
            (0, p.jsx)(lz, { keybind: t }),
            (0, p.jsx)(lB, { keybind: t }),
            (0, p.jsx)("div", {
                className: lF.XI,
                children: (0, p.jsx)(lo.l, {
                    selectionMode: "single",
                    label: V.intl.string(V.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, p.jsx)("div", {
                className: lF.LE,
                children: (0, p.jsx)(lu.D, {
                    label: V.intl.string(V.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, p.jsx)(lh.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, p.jsxs)("div", {
                className: lF.ne,
                children: [
                    !t.managed &&
                        (0, p.jsx)(ld.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lc.TrashIcon,
                            "aria-label": V.intl.string(V.t.qEHmmB),
                        }),
                    (0, p.jsx)(lg.m, {
                        text: V.intl.string(t.enabled ? V.t.pNYGbx : V.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(lm.A, {
                                    id: o,
                                    children: V.intl.format(t.enabled ? V.t["myr/Y0"] : V.t.lYhtPO, { actionName: u }),
                                }),
                                (0, p.jsx)(lA.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, p.jsx)(n4.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: lF.h_,
                children: n[t.action],
            }),
            (0, p.jsx)(lX, { keybind: t }),
        ],
    });
});
var lH = n(938812),
    lW = n(734066),
    lK = n(880144),
    lZ = n(994778),
    lq = n(950869),
    lQ = n(603933);
function lJ() {
    let e = (0, _.bG)([la.Ay], () => la.Ay.isWaylandPortalActive()),
        t = f.useMemo(() => e && (0, lr.u)(), [e]);
    return e
        ? (0, p.jsx)(iK.w, {
              type: "info",
              message: V.intl.string(V.t.AcH7R7),
              role: "none",
              action: t ? { text: V.intl.string(V.t.ZPHaPE), onClick: lr.qM } : void 0,
          })
        : null;
}
let l$ = function () {
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
            } = ((e = (0, _.bG)([la.Ay], () => la.Ay.getState())),
            (t = (0, _.bG)([i9.Ay], () => (0, lK.A)(i9.Ay))),
            (n = (0, _.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.VIDEO))),
            (i = (0, _.bG)([lq.A], () => lq.A.isSupported)),
            (l = (0, lW.sw)()),
            (s = (0, lW.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: l } = e;
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
                        .reject((e) => !l && (e.action === I.hCu.SOUNDBOARD || e.action === I.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: l,
                    enableScreenshotKeybind: s,
                    allowSoundboard: (r = (0, e8.isWindows)()),
                }),
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
                            l &&
                                a.push(
                                    { id: "soundboard", value: I.hCu.SOUNDBOARD },
                                    { id: "soundboard-hold", value: I.hCu.SOUNDBOARD_HOLD },
                                ),
                            s &&
                                (a.push({ id: "save-clip", value: I.hCu.SAVE_CLIP }),
                                r && a.push({ id: "save-screenshot", value: I.hCu.SAVE_SCREENSHOT }))),
                        a.map((e) => {
                            let { id: t, value: n } = e;
                            return { id: t, value: n, label: (0, lZ.B)(n) ?? n };
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
                            l &&
                                ((r[I.hCu.SAVE_CLIP] = V.intl.string(V.t.z3Wbam)),
                                s && (r[I.hCu.SAVE_SCREENSHOT] = V.intl.string(V.t.m0zd57)))),
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
                      (0, p.jsx)(lJ, {}),
                      (0, p.jsx)(n4.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: V.intl.string(V.t.vyYgWp),
                      }),
                  ],
              })
            : (0, p.jsxs)(q.B, {
                  gap: 16,
                  children: [
                      (0, p.jsx)(lJ, {}),
                      (0, p.jsx)("div", {
                          className: lQ.A,
                          children: a.map((e, t) =>
                              (0, p.jsxs)(
                                  f.Fragment,
                                  {
                                      children: [
                                          (0, p.jsx)(lY, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                          t < a.length - 1 ? (0, p.jsx)(ls.c, { className: lQ.y, gap: 24 }) : null,
                                      ],
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  ],
              });
    },
    l0 = (0, h.E2)(S.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["069nVT"])],
        Component: function () {
            return nh.Av
                ? (0, p.jsx)(l$, {})
                : (0, p.jsx)(iK.w, {
                      type: "info",
                      message: V.intl.format(V.t.mPi3F3, { downloadLink: I.X7G.DOWNLOAD }),
                      role: "none",
                  });
        },
    });
var l1 = n(475358),
    l2 = n(28647),
    l3 = n(793650);
function l4(e) {
    let { children: t } = e;
    return t([lH.Q_.MESSAGE, lH.Q_.NAVIGATION, lH.Q_.DND, lH.Q_.CHAT, lH.Q_.VOICE_AND_VIDEO, lH.Q_.MISCELLANEOUS]);
}
function l5(e) {
    let { showHeader: t = !0 } = e,
        n = K()((0, lH.Bx)())
            .filter((e) => e.description !== V.intl.string(V.t.HnNtEI))
            .filter((e) => e.predicate?.() !== !1)
            .groupBy((e) => e.group)
            .value();
    return (0, p.jsxs)(q.B, {
        gap: 48,
        children: [
            (0, p.jsx)(n3.n, {
                label: t ? V.intl.string(V.t.Lz5KHI) : void 0,
                children: (0, p.jsx)("div", {
                    className: l3.jh,
                    children: (0, p.jsxs)("div", {
                        className: l3.yZ,
                        children: [
                            (0, p.jsx)(n4.E, { variant: "text-md/normal", children: V.intl.string(V.t.sMWLBj) }),
                            (0, p.jsx)("div", {
                                className: l3.DM,
                                children: (0, p.jsx)(l1.e, { shortcut: l2.z.binds["0"], className: l3.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, p.jsx)(l4, {
                children: (e) =>
                    (0, p.jsx)(p.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, lH.Gm)(e),
                                l = (0, lH.zF)(e),
                                s = n[e];
                            return (0, p.jsx)(
                                n3.n,
                                {
                                    label: i,
                                    description: l,
                                    children: (0, p.jsx)("div", {
                                        className: l3.jh,
                                        children: s.map((e, t) =>
                                            (0, p.jsxs)(
                                                f.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, p.jsx)(ls.c, {}),
                                                        (0, p.jsxs)("div", {
                                                            className: l3.yZ,
                                                            children: [
                                                                (0, p.jsx)(n4.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, p.jsx)("div", {
                                                                    className: l3.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, p.jsx)(
                                                                            l1.e,
                                                                            { shortcut: e, className: l3.LE },
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
let l6 = (0, h.E2)(S.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.Lz5KHI)],
        Component: () => (0, p.jsx)(l5, { showHeader: !1 }),
    }),
    l8 = (0, h.zD)(S.X.GAME_MODE_ENABLED_SETTING, {
        useTitle: () => V.intl.string(eR.default.rea2Ar),
        useSubtitle: () => V.intl.string(eR.default.DwBO0x),
        useValue: () => (0, _.bG)([iJ.A], () => iJ.A.isEnabledFor(!0)),
        setValue: (e) => {
            (td.default.track(I.HAw.GAME_MODE_TOGGLED, { enabled: e, running_game_id: iJ.A.runningGameId }),
                ts.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: e }));
        },
    });
var l7 = n(19575),
    l9 = n(546385);
let se = (0, h.E2)(S.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nh.Av && !(0, nh.cX)(),
    useSearchTerms: () => [V.intl.string(V.t["/HIxyY"]), V.intl.string(V.t.B0hqpb)],
    Component: function () {
        let [e] = f.useState(() => l7.Ay.getEnableHardwareAcceleration()),
            t = V.intl.string(V.t["/HIxyY"]),
            n = V.intl.string(V.t.B0hqpb);
        return (0, p.jsxs)(q.B, {
            children: [
                (0, p.jsx)(t5.d, { label: t, description: n, checked: e, onChange: st }),
                !e && (0, p.jsx)(l9.A, { look: l9.k.WARNING, children: V.intl.string(V.t.j7S6IX) }),
            ],
        });
    },
});
function st(e) {
    let t = e ? V.intl.format(V.t.LYXRxL, {}) : V.intl.format(V.t.uDP3Kz, {});
    (0, n2.A)({
        title: V.intl.string(V.t.aqpAvn),
        subtitle: t,
        confirmText: V.intl.string(V.t.vT7ckk),
        onConfirm: () => {
            l7.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sn = (0, eN.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function si() {
    let e = await l7.Ay.getOpenOnStart(),
        t = await l7.Ay.getSetting("START_MINIMIZED", !1),
        n = await l7.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    sn.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let sl = (0, h.zD)(S.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => V.intl.string(V.t["3BeZti"]),
        usePredicate: () => nh.Av && !(0, nh.cX)(),
        useValue: () => sn.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (sn.setState({ openOnStartup: e }), l7.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            l7.Ay.getOpenOnStart().then((e) => sn.setState({ openOnStartup: e }));
        },
    }),
    ss = (0, h.zD)(S.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => V.intl.string(V.t.dJ5MUh),
        useSubtitle: () => V.intl.string(V.t.nQavHr),
        usePredicate: () => nh.Av && !(0, nh.cX)(),
        useValue: () => sn.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (sn.setState({ minimizeToTray: e }), l7.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            l7.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => sn.setState({ minimizeToTray: e }));
        },
    }),
    sr = (0, h.zD)(S.X.OS_START_MINIMIZED, {
        useTitle: () => V.intl.string(V.t.GfBL83),
        useSubtitle: () => V.intl.string(V.t.XGyhhc),
        usePredicate: () => (0, nh.uF)(),
        useValue: () => sn.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (sn.setState({ startMinimized: e }), l7.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !sn.useState((e) => e.openOnStartup),
        initialize: () => {
            l7.Ay.getSetting("START_MINIMIZED", !1).then((e) => sn.setState({ startMinimized: e }));
        },
    });
var sa = n(61628);
let so = new Set(["failure", "unknown"]),
    su = (0, h.E2)(S.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [V.intl.string(V.t.roHq80)],
        Component: function () {
            let [e, t] = f.useState(!1),
                [n, i] = f.useState(() => (0, le.TC)()),
                l = (0, _.bG)([i5.Ay], () => i5.Ay.getSystemServiceStatus("input-service")),
                s = f.useCallback(async () => {
                    (t(!0),
                        n ? await (0, le.z8)("windows-settings") : await (0, le.sL)("windows-settings"),
                        t(!1),
                        i((0, le.TC)()));
                }, [n]);
            return (0, p.jsxs)("div", {
                className: sa.q,
                children: [
                    (0, p.jsxs)("div", {
                        className: sa.L,
                        children: [
                            (0, p.jsxs)(q.B, {
                                direction: "horizontal",
                                children: [
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: V.intl.string(V.t.roHq80),
                                    }),
                                    n &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(n4.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, p.jsx)(n4.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : so.has(l.state)
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
                                                    })(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, p.jsx)(n4.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: V.intl.format(V.t["8CAL+D"], {
                                    helpCenterLink: eb.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
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
        usePredicate: le.XQ,
    });
var sd = n(687813),
    sc = n(562708),
    sg = n(858899),
    sm = n(384077);
async function sA() {
    try {
        await sE();
    } catch {
        (0, sg.P0)({ text: V.intl.string(V.t["8ihs9i"]), variant: "critical" });
    }
}
async function sE() {
    var e;
    let t = nT.A.tracing;
    if (null == t) return;
    (0, sg.P0)({ text: V.intl.string(V.t.qGRW8d) });
    let [n, i, l] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nT.A.processUtils.getSystemInfo(),
            nT.A.processUtils.getSystemMetrics((0, sm.uD)()),
        ]),
        s = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, sc.getSuperProperties)(),
            native_build_number: nT.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: l,
            cumulativeCpuUsage: nT.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nT.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, sd._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, sd._u)(JSON.stringify(s, null, 2)),
        }),
        new Promise((t, n) => {
            (0, sd.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    (nT.A.fileManager.showItemInFolder(u), (0, sg.P0)({ text: V.intl.string(V.t.gpCRFS), variant: "success" }));
}
let sh = (0, h.Tf)(S.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => V.intl.string(V.t.o6Qr6n),
    useSubtitle: () => V.intl.string(V.t.OuGtH8),
    useLabel: () => V.intl.string(V.t.bm1WjO),
    usePredicate: () => nh.Av && nT.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n2.A)({
            title: V.intl.string(V.t.o6Qr6n),
            subtitle: V.intl.string(V.t.JEHHJ1),
            confirmText: V.intl.string(V.t.bm1WjO),
            onConfirm: () => {
                ((0, tY.default)(), sA());
            },
        });
    },
});
function sS() {
    ts.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var sx = n(287809);
let sT = (0, h.Tf)(S.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        sS();
    },
});
var sp = n(114129),
    sf = n(442325),
    s_ = n(858760);
let sI = (0, h.zD)(S.X.ENABLE_TABS_EXPERIENCE, {
    useTitle: () => "Enable tabs experience",
    useSubtitle: () => "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
    usePersistentBadge: () => ({ badgeType: T.Xi.BETA }),
    usePredicate: () => s_.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nh.xl)(),
    useValue: () => (0, _.bG)([sf.A], () => sf.A.isUserOptedIn()),
    setValue: sp.lj,
});
var sN = n(731699);
let sC = {};
var sb = n(735729),
    sy = n(146849);
let sv = (0, h.zD)(S.X.NATIVE_MARKDOWN, {
        useTitle: () => V.intl.string(V.t["5CIvT4"]),
        usePredicate: () => sy.wG.useConfig({ location: "NativeMarkdownSetting" }).enabled,
        useValue: () => (0, sb.A)(sy.XQ),
        setValue: (e) =>
            (function (e) {
                let { enabled: t = !sN.A.get(e) } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sC;
                ts.h.dispatch({ type: "LAB_FEATURE_TOGGLE", labFeature: e, enabled: t });
            })(sy.XQ, { enabled: e }),
    }),
    sj = (0, h.zZ)(S.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["8/udY0"]),
        buildLayout: () => [sT, sh, sI, sv],
    }),
    sO = (0, h.zZ)(S.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t.cg6ltt),
        buildLayout: () => [sl, sr, ss, se],
        usePredicate: () => nh.Av && ((0, nh.uF)() || (0, nh.j9)()),
        initialize: () => {
            si();
        },
    }),
    sL = (0, h.zZ)(S.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["069nVT"]),
        useSubtitle: () => V.intl.string(V.t.T4LZVL),
        buildLayout: () => [l0],
        initialize: () => (iZ.A.enableAll(!1), () => iZ.A.enableAll(!0)),
        useInlineNotice: function () {
            return nh.Av
                ? {
                      type: T.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, p.jsxs)(q.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, p.jsx)(iK.w, {
                                      type: "info",
                                      message: V.intl.string(V.t["5pkmHa"]),
                                      role: "none",
                                  }),
                                  (0, p.jsx)(ll, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nh.Av
                ? {
                      type: T.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: T.UV.BUTTON,
                              text: V.intl.string(V.t.zk6Xbs),
                              variant: "secondary",
                              icon: iH.j,
                              onClick: () => iZ.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    sR = (0, h.zZ)(S.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Lz5KHI),
        buildLayout: () => [l6],
    }),
    sD = (0, h.zZ)(S.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+XZgmA"]),
        usePredicate: () => nh.Av && ((0, nh.uF)() || (0, nh.j9)()),
        buildLayout: () => [su],
    }),
    sP = (0, h.zZ)(S.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => V.intl.string(eR.default.QG0axY),
        usePredicate: () =>
            (0, _.bG)(
                [iJ.A, iq.A],
                () =>
                    e8.isPlatformEmbedded &&
                    iJ.A.hasDetectedGame &&
                    (0, iQ.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [l8],
    }),
    sG = (0, h.t_)(S.X.SYSTEM_PANEL, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        buildLayout: () => [sO, sL, sR, sD, sP, sj],
    }),
    sM = (0, h.i4)(S.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["VJ/qKo"]),
        icon: iW.F,
        buildLayout: () => [sG],
    });
var sU = n(831544),
    sV = n(922795),
    sk = n(212245),
    sw = n(329551),
    sF = n(285918),
    sB = n(312987),
    sz = n(952572),
    sX = n(382003);
let sY = (0, h.E2)(S.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.lZTUPs)],
        usePredicate: sz.A,
        Component: function () {
            let e = (0, sk.p)(),
                t = f.useRef(!1),
                n = (0, _.bG)([i9.Ay], () => i9.Ay.getVideoDeviceId()),
                [i, l] = f.useState((0, sw.i)(sx.default.getCurrentUser())),
                s = f.useRef(i);
            return (
                f.useEffect(
                    () => () => {
                        t.current && (0, sF._C)(s.current);
                    },
                    [],
                ),
                (0, p.jsx)(sX.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (s.current = n), l(n), (0, sB.gB)(n, { location: e.location }).catch(I.tEg));
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
            (U.bm.updateSetting(e), td.default.track(I.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var sW = n(625841),
    sK = n(74848),
    sZ = n(204050);
let sq = (0, eN.D)(() => ({ previewEnabled: !1 })),
    sQ = (0, h.E2)(S.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.FsQ3OR)],
        Component: function () {
            let e = (0, _.bG)([i9.Ay], () => i9.Ay.isVideoAvailable()),
                { id: t } = (0, sK.x5)(lw.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eX.Ay)();
            return (0, p.jsx)(sW.U, {
                label: V.intl.string(V.t.FsQ3OR),
                deviceType: lw.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, sZ.p)()
                    ? V.intl.format(V.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (sq.setState({ previewEnabled: !1 }),
                                  window.open((0, sZ.i)(t)),
                                  td.default.track(I.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var sJ = n(745317),
    s$ = n(9219);
let s0 = (0, h.E2)(S.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [V.intl.string(V.t.JIf4v7)],
        Component: function () {
            let e = i9.Ay.getCameraComponent(),
                t = (0, _.bG)([i9.Ay], () => i9.Ay.getVideoDeviceId()),
                n = sq.useField("previewEnabled"),
                i = (0, _.bG)([i9.Ay], () => i9.Ay.isVideoAvailable());
            return ((0, eI.l0)(() => {
                sq.setState({ previewEnabled: !1 });
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
                                      (0, p.jsx)(sJ.kE, {}),
                                  ],
                              }),
                              (0, p.jsx)(sJ.eK, {}),
                          ],
                      }),
                  })
                : (0, p.jsx)("div", {
                      className: s$.T9,
                      children: (0, p.jsx)(lg.m, {
                          text: i ? null : V.intl.string(V.t["8jSzSe"]),
                          children: (0, p.jsx)(j.$, {
                              variant: "primary",
                              text: V.intl.string(V.t.JIf4v7),
                              onClick: () => sq.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    s1 = (0, h.zZ)(S.X.CAMERA_CATEGORY, {
        useTitle: () => V.intl.string(V.t.uje3P9),
        usePredicate: () => (0, _.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.VIDEO)),
        buildLayout: () => [s0, sH, sQ, sY],
    }),
    s2 = (0, h.zD)(S.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => V.intl.string(V.t.qFphsa),
        useSubtitle: () => V.intl.string(V.t.cQfwyY),
        usePredicate: function () {
            return (0, nh.j9)();
        },
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (lE.default.setOpenH264Enabled(e),
                (0, n2.A)({
                    title: V.intl.string(V.t["9jf31O"]),
                    subtitle: V.intl.string(V.t["J2wg+X"]),
                    confirmText: V.intl.string(V.t.BddRzS),
                    onConfirm: () => nT.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    s3 = (0, h.zD)(S.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => V.intl.string(V.t["r6K+TL"]),
        useSubtitle: () => V.intl.string(V.t["xl9+I6"]),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getAecDump());
        },
        setValue: lE.default.setAecDump,
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.isAecDumpSupported());
        },
    });
var s4 = n(139033),
    s5 = n(862482),
    s6 = n(640238),
    s8 = n(825484),
    s7 = n(108088),
    s9 = n(487329),
    re = n(353835);
let rt = (0, eN.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function rn() {
    let e = await nT.A.fileManager.getLogPath();
    nT.A.fileManager.showItemInFolder(e);
}
function ri(e) {
    (0, n2.A)({
        title: V.intl.string(V.t["7UXEF2"]),
        subtitle: V.intl.string(V.t.IYPrRl),
        confirmText: V.intl.string(V.t.BddRzS),
        onConfirm: () => lE.default.setDebugLogging(e),
    });
}
async function rl(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await i9.Ay.getMediaEngine().writeAudioDebugState(),
            await re.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, s7.a)(I.Umv.RTC),
            (e = V.intl.string(V.t["fKBB8+"])),
            (t = V.intl.string(V.t.BvyxE7)),
            (0, s4.A)({ title: e, subtitle: t }));
    } catch (s) {
        var i;
        let e, t, n, l;
        ((i = s.displayMessage),
            (e = V.intl.string(V.t.QZg0J7)),
            (t = i ?? V.intl.string(V.t.VzHcSm)),
            (n = (0, s9.B1)(s9.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = V.intl.formatToPlainString(V.t.ejOT95, { errorCode: n })),
            (0, lT.openModal)((n) =>
                (0, p.jsx)(s6.a, {
                    header: e,
                    confirmButtonColor: s5.$n.Colors.BRAND,
                    confirmText: V.intl.string(V.t.BddRzS),
                    ...n,
                    children: (0, p.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, p.jsx)(n4.E, { variant: "text-md/normal", children: t }),
                            (0, p.jsx)(n4.E, {
                                variant: "text-sm/semibold",
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
}
async function rs() {
    await rl({
        onUploadStart: () => rt.setState({ isUploading: !0 }),
        onUploadFinish: () => rt.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let rr = (0, h.E2)(S.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [V.intl.string(V.t["726JHL"]), V.intl.string(V.t.EbwFfR), V.intl.string(V.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, _.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.DEBUG_LOGGING));
        return nh.Av && e && null != nT.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, _.bG)([i9.Ay], () => i9.Ay.getDebugLogging()),
            t = rt.useField("isUploading"),
            n = rt.useField("isDisabled"),
            i = f.useId();
        return (0, p.jsxs)("fieldset", {
            children: [
                (0, p.jsx)(lm.A, { tag: "legend", id: i, children: V.intl.string(V.t["FjN+et"]) }),
                (0, p.jsxs)(q.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, p.jsx)(t5.d, {
                            label: V.intl.string(V.t["726JHL"]),
                            description: V.intl.string(V.t["/7ak9Q"]),
                            checked: e,
                            onChange: ri,
                        }),
                        (0, p.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, p.jsxs)(s8.e, {
                                children: [
                                    (0, p.jsx)(j.$, {
                                        variant: "secondary",
                                        text: V.intl.string(V.t.EbwFfR),
                                        onClick: rs,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": V.intl.string(V.t.aY1OH2),
                                    }),
                                    (0, p.jsx)(j.$, {
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
    return (0, _.bG)([sx.default, i9.Ay], () => {
        let e = sx.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === l7.Ay.releaseChannel || "development" === l7.Ay.releaseChannel,
            i = i9.Ay.supports(lw.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let rc = (0, h.zD)(S.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.U4FgFK),
        useSubtitle: () => V.intl.string(V.t.Lm72RU),
        useValue: function () {
            return (0, _.bG)([ru.Ay], () => ru.Ay.shouldRecordNextConnection());
        },
        setValue: ro.A,
        usePredicate: rd,
    }),
    rg = (0, h.Tf)(S.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => V.intl.string(V.t.nJnOHO),
        useLabel: () => V.intl.string(V.t["3xjX0U"]),
        onClick: ra.YW,
        usePredicate: rd,
    });
var rm = n(926919),
    rA = n(111162),
    rE = n(855302);
let rh = (0, h.zD)(S.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
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
    rS = (0, h.bd)(S.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t["/B4I8H"]) : V.intl.string(V.t.BTlsWH)),
        useCollapsedSubtitle: () => V.intl.string(V.t.la1Ys4),
        buildLayout: () => [rh, s3, rc, rg, rr],
    });
function rx(e, t, n) {
    (0, n2.A)({ title: e, subtitle: t, confirmText: V.intl.string(V.t.BddRzS), onConfirm: n });
}
let rT = (0, h.Tf)(S.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => V.intl.string(V.t.SXfv1v),
        useSubtitle: () => V.intl.string(V.t["buA5/q"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        onClick: function () {
            rx(V.intl.string(V.t["4iKQ/3"]), V.intl.string(V.t.sQ42iT), lE.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rp = (0, h.zZ)(S.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.UDAU9K),
        buildLayout: () => [s2, rS, rT],
    });
var rf = n(736056),
    r_ = n(360729),
    rI = n(446243),
    rN = n(558076),
    rC = n(618922);
let rb = (0, h.zD)(S.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => V.intl.string(rC.default.qYzpsI),
        useSubtitle: () => V.intl.string(rC.default["+vMoL1"]),
        useValue: () => (0, _.bG)([rN.A], () => rN.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rI.Ft)(e),
    }),
    ry = (0, h.zZ)(S.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => V.intl.string(rC.default.wRLmM0),
        usePredicate: function () {
            let e = (0, _.yK)([lv.A], () => lv.A.getGuildIds()),
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
        buildLayout: () => [rb],
    });
var rv = n(347481),
    rj = n(852712),
    rO = n(179172),
    rL = n(868162);
let rR = (0, h.zD)(S.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
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
    rD = (0, h.zD)(S.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => V.intl.string(V.t.cUMdH0),
        useSubtitle: () => V.intl.string(V.t["6EjbvA"]),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            lE.default.setAutomaticGainControl(e, {
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
    rP = (0, h.sN)(S.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => V.intl.string(V.t.AlybXj),
        setValue: (e) =>
            lE.default.setAttenuation(
                e,
                i9.Ay.getAttenuateWhileSpeakingSelf(),
                i9.Ay.getAttenuateWhileSpeakingOthers(),
            ),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i9.Ay.getAttenuation(),
    }),
    rG = (0, h.zD)(S.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => V.intl.string(V.t["9dHxRY"]),
        useValue: () => (0, _.bG)([i9.Ay], () => i9.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lE.default.setAttenuation(i9.Ay.getAttenuation(), e, i9.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rM = (0, h.zD)(S.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => V.intl.string(V.t.SMt0Gr),
        useValue: () => (0, _.bG)([i9.Ay], () => i9.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lE.default.setAttenuation(i9.Ay.getAttenuation(), i9.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rU = (0, h.FW)(S.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.oSdBvW),
        useSubtitle: () => V.intl.string(V.t["0A/8Rt"]),
        usePredicate: () => (0, _.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.ATTENUATION)),
        buildLayout: () => [rP, rG, rM],
    }),
    rV = (0, h.zD)(S.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => V.intl.string(V.t.DFPXIG),
        useSubtitle: () => V.intl.string(V.t["UyRX+C"]),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lE.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.showBypassSystemInputProcessing() && i9.Ay.isInputProfileCustom());
        },
    }),
    rk = (0, h.zD)(S.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => V.intl.string(V.t.jrWHD3),
        useSubtitle: () => V.intl.string(V.t.YCCMkJ),
        useValue: function () {
            return (0, _.bG)([ex.Ay], () => !ex.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, rE.A)("switch_channel_warning_enabled", e, !ex.Ay.disableVoiceChannelChangeAlert),
                nk.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rw = (0, h.zD)(S.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
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
            lE.default.setMode(t, { vadUseKrisp: e });
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
    rF = (0, h.Hn)(S.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => V.intl.string(V.t.wVBHr0),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rx(V.intl.string(V.t.uY7AcQ), V.intl.string(V.t.gBqik6), () => lE.default.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, _.cf)([i9.Ay], () => ({
                legacyAudioSubsystemSupported: i9.Ay.supports(lw.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i9.Ay.supports(lw.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i9.Ay.supports(lw.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return f.useMemo(() => {
                let i;
                return (
                    (i = [{ id: lw.rB.STANDARD, value: lw.rB.STANDARD, label: V.intl.string(V.t.dqb2JZ) }]),
                    e && i.push({ id: lw.rB.LEGACY, value: lw.rB.LEGACY, label: V.intl.string(V.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: lw.rB.EXPERIMENTAL, value: lw.rB.EXPERIMENTAL, label: V.intl.string(V.t.liQmtr) }),
                    n && i.push({ id: lw.rB.AUTOMATIC, value: lw.rB.AUTOMATIC, label: V.intl.string(V.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rB = (0, h.zD)(S.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => V.intl.string(V.t.uancuJ),
        useSubtitle: () => V.intl.string(V.t.I1Eoqq),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getQoS());
        },
        setValue: function (e) {
            lE.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.QOS));
        },
    }),
    rz = (0, h.zD)(S.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => V.intl.string(V.t["4rsOPQ"]),
        useSubtitle: () => V.intl.string(V.t.jtiiCw),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lE.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e8.isPlatformEmbedded;
        },
    }),
    rX = (0, h.bd)(S.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? V.intl.string(V.t.KHsSWK) : V.intl.string(V.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            t_(S.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, _.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rD, rw, rV, rR, rz, rk, rU, rF, rB],
    }),
    rY = (0, h.zD)(S.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => V.intl.string(V.t.iWTwu6),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lE.default.setEchoCancellation(e, { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO });
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
    rK = n(205513),
    rZ = n(475883),
    rq = n(303707);
let rQ = (0, tK.Ld)();
function rJ(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, p.jsx)("div", {
        role: "meter",
        className: ic()(rZ.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? V.intl.string(V.t.haLKZ0) : V.intl.string(V.t.X2hJL7),
        children: (0, p.jsx)("div", { className: ic()(rZ.Jx, rZ.NU, { [rZ.zY]: t && !r, [rZ.r9]: r }) }),
    });
}
function r$(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, _.cf)([i9.Ay], () => ({
            threshold: i9.Ay.getModeOptions().threshold,
            autoThreshold: i9.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, _.bG)([i9.Ay], () => i9.Ay.getMode());
    return (0, p.jsx)("section", {
        className: ic()(rZ.Mo, rZ.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, p.jsx)(rK.G, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lE.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n1.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n1.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rQ,
            disabled: s,
            children: (0, p.jsxs)("div", {
                className: ic()(rZ.NU, rZ.TL, rZ.Jx, rq.bar),
                children: [
                    (0, p.jsx)("div", { className: ic()(rZ.GS, rZ.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, p.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let r0 = (0, h.E2)(S.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [V.intl.string(V.t["sqUm+k"]), V.intl.string(V.t.I1Zuq0), V.intl.string(V.t.nuFtHH)],
    usePredicate: () => (0, _.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, _.cf)([i9.Ay], () => ({
                autoThreshold: i9.Ay.getModeOptions().autoThreshold,
                disabled: i9.Ay.getMode() !== lw.TB.VOICE_ACTIVITY,
            })),
            n = f.useCallback((e) => {
                let t = i9.Ay.getMode(),
                    { threshold: n } = i9.Ay.getModeOptions();
                lE.default.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, _.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = f.useState(-100),
                    [n, i] = f.useState(!1);
                function l(e, n) {
                    (t(e), i((n & lw.ME.VOICE) === lw.ME.VOICE));
                }
                return (
                    f.useEffect(() => {
                        let e = new rW.Ep();
                        return (
                            e.start(1e3, () => {
                                (i9.Ay.getMediaEngine().on(rH.bg.VoiceActivity, l), e.stop());
                            }),
                            () => {
                                (i9.Ay.getMediaEngine().removeListener(rH.bg.VoiceActivity, l), e.stop());
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
                    (0, p.jsx)("div", {
                        className: rZ.B4,
                        children: (0, p.jsx)(iK.w, {
                            type: "warning",
                            message: V.intl.format(V.t["O13I+O"], { onEnableClick: () => lE.default.enable(!0) }),
                            role: "status",
                        }),
                    }),
                [r],
            ),
            o = f.useMemo(() => (e ? V.intl.string(V.t.JsbzjA) : V.intl.string(V.t.MLmyMY)), [e]),
            u = f.useId(),
            d = f.useId();
        return i
            ? (0, p.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, p.jsx)(lm.A, { tag: "legend", id: u, children: V.intl.string(V.t.GByLar) }),
                      (0, p.jsx)(lm.A, { id: d, children: o }),
                      (0, p.jsxs)(q.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, p.jsx)(t5.d, {
                                  disabled: t,
                                  label: V.intl.string(V.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, p.jsx)(rJ, {
                                        isSpeaking: s,
                                        className: rZ.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(r$, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, p.jsxs)(q.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, p.jsx)(lu.D, {
                          label: V.intl.string(V.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, p.jsx)(rJ, {
                                        isSpeaking: s,
                                        className: rZ.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(r$, {
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
var r1 = n(366010);
let r2 = n(993830),
    r3 = n(413142),
    r4 = { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO };
function r5() {
    let e = (0, _.bG)([nF.A], () => (0, r1.q)(nF.A.theme));
    return (0, p.jsx)("img", { src: e ? r2 : r3, width: 48, height: 32, alt: "" });
}
let r6 = (0, h.E2)(S.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.t8Qhib), V.intl.string(V.t.hmfkCi)],
    usePredicate: function () {
        return (0, _.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom() && i9.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = f.useCallback((e) => {
                (lE.default.setNoiseCancellation("KRISP" === e, r4),
                    lE.default.setNoiseSuppression("STANDARD" === e, r4));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, _.cf)([i9.Ay], () => ({
                noiseCancellation: i9.Ay.getNoiseCancellation(),
                noiseSuppression: i9.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: i9.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: i9.Ay.isNoiseCancellationSupported(),
            })),
            s = f.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: V.intl.string(V.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: V.intl.string(V.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: V.intl.string(V.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, i]),
            r = l
                ? V.intl.format(V.t["1q5aTp"], { helpArticle: eb.A.getArticleURL(I.MVz.NOISE_SUPPRESSION) })
                : V.intl.string(V.t.OWKjw5);
        return (0, p.jsxs)(q.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, p.jsx)(lo.l, {
                    label: V.intl.string(V.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, p.jsx)(r5, {}),
            ],
        });
    },
});
var r8 = n(934729),
    r7 = n(621380);
let r9 = !nh.Av;
function ae() {
    return (0, _.bG)([i9.Ay], () => i9.Ay.getMode() === lw.TB.PUSH_TO_TALK);
}
let at = (0, h.zD)(S.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nh.Av ? V.intl.string(V.t.tG4Np5) : V.intl.string(V.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, _.bG)([i9.Ay], () => i9.Ay.getMode());
        return f.useMemo(() => {
            if (!nh.Av && e === lw.TB.PUSH_TO_TALK)
                return V.intl.format(V.t["VHI4+Y"], { onDownloadClick: () => (0, r8._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, _.bG)([i9.Ay], () => i9.Ay.getActiveInputProfile() !== r7.m.STUDIO);
    },
    useValue: function () {
        return (0, _.bG)([i9.Ay], () => i9.Ay.getMode() === lw.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? lw.TB.PUSH_TO_TALK : lw.TB.VOICE_ACTIVITY),
            (i = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lw.TB.PUSH_TO_TALK &&
                r9 &&
                (0, lT.openModalLazy)(async () => {
                    let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                    return (t) =>
                        (0, p.jsx)(e, {
                            title: V.intl.string(V.t.Kdt0Gb),
                            confirmText: V.intl.string(V.t["1WjMbC"]),
                            cancelText: V.intl.string(V.t.BddRzS),
                            onConfirm: () => (0, r8._)("PTT Limited Modal"),
                            body: V.intl.string(V.t.NIozvt),
                            ...t,
                        });
                }),
            lE.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
});
var an = n(484599);
function ai(e) {
    let { shortcut: t } = e,
        n = (0, _.bG)([la.Ay], () => la.Ay.isWaylandPortalActive()),
        i = (0, _.bG)([la.Ay], () => {
            let e = la.Ay.getKeybindForAction(I.hCu.PUSH_TO_TALK, !0);
            return null != e ? la.Ay.getWaylandPortalShortcutState(e.id) : null;
        });
    return n && 0 !== t.length
        ? la.Ay.isWaylandPortalEligibleShortcut(t)
            ? null == i || i.bound
                ? null
                : (0, p.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t.PTCrUP), role: "status" })
            : (0, p.jsx)(iK.w, { type: "warning", message: V.intl.string(V.t.J0m3aK), role: "status" })
        : null;
}
let al = (0, h.E2)(S.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        usePredicate: ae,
        Component: function () {
            let e = (0, _.bG)([i9.Ay], () => {
                    let { shortcut: e } = i9.Ay.getModeOptions();
                    return e;
                }),
                t = V.intl.format(V.t.HVvn5T, {
                    onClick: () => (0, na.openUserSettings)(S.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, p.jsx)(lu.D, {
                label: V.intl.string(V.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, p.jsxs)("div", {
                    className: an.e,
                    children: [
                        (0, p.jsx)(lh.A, {
                            defaultValue: e,
                            onChange: (e) => {
                                let t = la.Ay.getKeybindForAction(I.hCu.PUSH_TO_TALK, !0);
                                (null != t &&
                                    (0, lr.uL)(t.id, t.shortcut, e, la.Ay.getWaylandPortalShortcutState(t.id)),
                                    lE.default.setMode(I.TBI.PUSH_TO_TALK, { shortcut: e }));
                            },
                        }),
                        (0, p.jsx)(ai, { shortcut: e }),
                    ],
                }),
            });
        },
    }),
    as = (0, h.sN)(S.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => V.intl.string(V.t.GCNMM8),
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        setValue: function (e) {
            lE.default.setMode(I.TBI.PUSH_TO_TALK, { delay: e });
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
        usePredicate: ae,
    });
var ar = n(833473),
    aa = n(844981),
    ao = n(167326);
function au() {
    return (0, aa.Ay)("VoiceSettings");
}
let ad = (0, h.zD)(S.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => V.intl.string(ao.default.LGDPhA),
        useSubtitle: function () {
            let e = au();
            if ((0, aa.Xt)(e))
                return e === aa.L3.BLOCKED_MONO_OUTPUT
                    ? V.intl.string(ao.default.rOXfEw)
                    : V.intl.string(ao.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, _.bG)([ar.A], () => ar.A.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lE.default.setSpatialAudio(e, [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return au() !== aa.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, aa.Xt)(au());
        },
    }),
    ac = (0, h.Qx)(S.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => V.intl.string(V.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rj._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH), V.intl.string(V.t.VZPR0R), V.intl.string(V.t.cjPbpT)],
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getActiveInputProfile() ?? r7.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lE.default.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rj.d)({ location: "InputProfileCategory" });
            return [
                { value: r7.m.VOICE_ISOLATION, name: V.intl.string(V.t.cjPbpT), desc: V.intl.string(V.t.CzhvnE) },
                { value: r7.m.STUDIO, name: V.intl.string(V.t.VZPR0R), desc: V.intl.string(V.t.ZaJksS) },
                { value: r7.m.CUSTOM, name: V.intl.string(V.t["N/PQjv"]), desc: V.intl.string(V.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    ag = (0, h.zZ)(S.X.VOICE_INPUT_PROFILE_CATEGORY, {
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
                        type: T.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "status",
                        text: V.intl.string(V.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [ac, r0, r6, rY, ad, at, al, as, rX],
    });
var am = n(403581),
    aA = n(983851),
    aE = n(687021),
    ah = n(128450),
    aS = n(796774),
    ax = n(209932),
    aT = n(813564),
    ap = n(984813),
    af = n(265872),
    a_ = n(305866),
    aI = n(22231),
    aN = n(342073),
    aC = n(24482),
    ab = n(792348),
    ay = n(674168),
    av = n(340368),
    aj = n(754388),
    aO = n(805945),
    aL = n(647451);
function aR(e) {
    let { onSelect: t } = e,
        [n, i] = f.useState(!1),
        l = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        s = aC.Ay.canUseCustomCallSounds(l),
        r = f.useRef(null);
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
            return (0, p.jsx)(a_.l, {
                children: (0, p.jsx)(aj.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, p.jsx)(ay.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, p.jsx)(aO.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: V.intl.string(V.t.uOe0Az),
                children: (0, p.jsx)(aI.PencilIcon, { size: "md", color: "currentColor", className: aL.Wo }),
            }),
    });
}
function aD(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, ab.A)(t, null),
        i = (0, aT.wH)(),
        l = (0, av._)("SoundPreviewButton") ? aN.L : aA.H,
        s =
            0 === i
                ? V.intl.string(V.t.OASXjt)
                : V.intl.formatToPlainString(V.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, p.jsx)(aO.dT, {
        onClick: n,
        text: s,
        children: (0, p.jsx)(l, { size: "md", color: "currentColor", className: aL.wg }),
    });
}
function aP(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s),
        o = (0, av._)("SoundboardCustomCallSoundSettingsPreview") ? aN.L : aA.H;
    return (0, p.jsxs)("div", {
        className: aL.D6,
        children: [
            (0, p.jsxs)("div", {
                className: aL.kL,
                children: [
                    a && (0, p.jsx)(tG.A, { emojiId: s, emojiName: r, className: aL.Zg }),
                    (0, p.jsx)(n4.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: aL.dj,
                        children:
                            null == t
                                ? V.intl.string(V.t.PoWNfe)
                                : n
                                  ? V.intl.format(V.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, p.jsx)(n4.E, {
                                                variant: "text-xs/medium",
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
                        : (0, p.jsx)(o, { size: "md", color: "currentColor", className: aL.Gk }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: aL.kL,
                children: [
                    (0, p.jsx)(aR, { onSelect: i }),
                    l &&
                        !n &&
                        (0, p.jsx)(aO.dT, {
                            onClick: () => i(null),
                            text: V.intl.string(V.t.jmtcGA),
                            children: (0, p.jsx)(lc.TrashIcon, {
                                size: "md",
                                color: n1.A.unsafe_rawColors.RED_400.css,
                                className: aL.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var aG = n(617617);
n(980504);
var aM = n(806050);
function aU(e) {
    return (0, _.bG)([ax.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return ax.A.getSound("0" === t ? "0" : t, n);
    });
}
function aV(e) {
    let { guildId: t } = e,
        n = (0, _.bG)([aG.A], () => aG.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aU(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, p.jsxs)("div", {
        className: aM.Io,
        children: [
            r
                ? (0, p.jsx)(tG.A, { emojiId: l, emojiName: s, className: aM.nW })
                : (0, p.jsx)(aA.H, { size: "md", color: "currentColor", className: aM.nW }),
            (0, p.jsx)(n4.E, { className: aM.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let ak = (0, h.E2)(S.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eX.Ay)(),
            [t, n] = f.useState("0"),
            i = (0, ap.mz)(t),
            l = aU(i),
            s = i?.type === ap.PP.GLOBAL,
            r = (0, _.bG)([ax.A], () => ax.A.hasFetchedAllSounds()) && null != i && null == l;
        (f.useEffect(() => {
            r && (0, aT.ND)({ location: e });
        }, [r, e]),
            f.useEffect(() => {
                (0, aS.E7)();
            }, []));
        let a = f.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, p.jsx)(aV, { guildId: e.value }) : null;
        }, []);
        return (0, p.jsxs)(n3.n, {
            label: V.intl.string(V.t.nzUc3B),
            description: V.intl.format(V.t.u9RWmv, { helpdeskArticle: eb.A.getArticleURL(I.MVz.SOUNDBOARD) }),
            children: [
                (0, p.jsx)(aE.A, {
                    guildId: t,
                    className: aM.Dt,
                    globalOption: { label: V.intl.string(V.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, p.jsxs)(ah.A, {
                    title: V.intl.format(V.t.I2TsYN, {
                        nitroWheelHook: () => (0, p.jsx)(am.t, { size: "md", color: "currentColor", className: aM.ax }),
                    }),
                    children: [
                        (0, p.jsx)(aP, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, aT.Dv)(t, e) : (0, aT.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, p.jsx)("div", {
                                className: aM.lm,
                                children: (0, p.jsx)(iK.w, {
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
var aw = n(824744);
let aF = (0, h.sN)(S.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => V.intl.string(V.t.kbFsAD),
    useSubtitle: () => V.intl.format(V.t.BPbGq7, { helpCenterArticle: eb.A.getArticleURL(I.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aw.w)(e);
        (0, aS.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, aT.wH)();
        return (0, aw.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aB = n(864145);
let az = (0, h.sN)(S.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t["2JbvKw"]),
        useSubtitle: () => V.intl.string(V.t.INenzY),
        setValue: function (e) {
            let t = (0, aw.w)(e);
            U.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = U.HO.getSetting();
            return (0, aw.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aB.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aX = (0, h.zZ)(S.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ABjMWI),
        buildLayout: () => [aF, az, ak],
    });
var aY = n(803224),
    aH = n(552122);
let aW = (0, h.E2)(S.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [V.intl.string(V.t.fgSHf8)],
        usePredicate: () => null != aH.A.useHolidaySoundpack(),
        Component: () =>
            (0, p.jsx)(n4.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: V.intl.format(V.t.Eup6Wv, {
                    onClick: () => (0, na.openUserSettings)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aK = (0, h.AK)(S.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.eyGEE4),
        useSearchTerms: () => [V.intl.string(V.t.eyGEE4)],
        destinationKey: S.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aZ = (0, h.gN)(S.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aK] });
var aq = n(264686);
let aQ = (0, eN.D)(() => ({ currentPlayingSound: null }));
function aJ() {
    let e = aQ.getField("currentPlayingSound");
    (e?.stop(), aQ.setState({ currentPlayingSound: null }));
}
function a$(e) {
    let t = aQ.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ie.Ak)(e);
    aQ.setState({ currentPlayingSound: n });
}
function a0(e) {
    return (0, h.zD)(`${S.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
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
            (t || n.push(e.sound), aq.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, _.bG)([aY.A], () => aY.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let a1 = [
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
    a2 = (0, h.D1)(S.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? V.intl.formatToPlainString(V.t["0JYT98"], { count: t })
                : V.intl.formatToPlainString(V.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => t_(S.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aJ();
            };
        },
        buildLayout: () => a1.map((e) => a0(e)),
    }),
    a3 = (0, h.zZ)(S.X.SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, _.bG)([aY.A], () => aY.A.getDisableAllSounds());
            return f.useMemo(() => {
                if (e)
                    return {
                        type: T.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: V.intl.format(V.t.fRvixS, {
                            onClick: () => (0, na.openUserSettings)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [a2, aW, aZ],
    }),
    a4 = (0, h.zD)(S.X.STREAMING_SHOW_STREAM_PREVIEWS, {
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
    a5 = (0, h.zD)(S.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => V.intl.string(V.t.GmWk2E),
        useSearchTerms: () => [V.intl.string(V.t["Fj/xn1"])],
        useSubtitle: () => V.intl.string(V.t["Fj/xn1"]),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getVideoHook());
        },
        setValue: lE.default.setVideoHook,
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.supportsVideoHook());
        },
    }),
    a6 = (0, h.zD)(S.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => V.intl.string(V.t["4I0qzZ"]),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getExperimentalSoundshare());
        },
        setValue: lE.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => {
                let e = i9.Ay.supportsExperimentalSoundshare(),
                    t = i9.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    a8 = (0, h.zD)(S.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => V.intl.string(V.t["/jwMtn"]),
        useSubtitle: () => V.intl.string(V.t.zlA23F),
        useValue: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lE.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i9.Ay.supports(lw.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a7 = (0, h.sN)(S.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => V.intl.string(V.t.fhEzfj),
        setValue: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lE.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i9.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, _.bG)([i9.Ay], () => i9.Ay.getSidechainCompression());
            return i9.Ay.supports(lw.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    a9 = (0, h.zD)(S.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
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
                          (lE.default.setUseSystemScreensharePicker(e), nT.A.app.relaunch());
                      },
                      confirmText: V.intl.string(V.t.BddRzS),
                  })
                : lE.default.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, _.bG)([i9.Ay], () => i9.Ay.supportsSystemScreensharePicker() && (0, nh.cX)());
        },
    }),
    oe = (0, h.bd)(S.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t.qrMyvm) : V.intl.string(V.t.LEtTNl)),
        useCollapsedSubtitle: () => t_(S.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [a8, a7, a9, a6, a5],
    }),
    ot = (0, h.zZ)(S.X.STREAMING_CATEGORY, { useTitle: () => V.intl.string(V.t.KDdjou), buildLayout: () => [a4, oe] });
var on = n(106713);
let oi = (0, h.E2)(S.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = on.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, p.jsx)(sW.U, {
                label: V.intl.string(V.t.UTM8VP),
                deviceType: lw.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    ol = (0, h.E2)(S.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = on.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, p.jsx)(sW.U, {
                label: V.intl.string(V.t.xuYQ0n),
                deviceType: lw.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    os = (0, h.zC)(S.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [oi, ol] }),
    or = (0, h.sN)(S.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i9.Ay.getInputVolume();
            return (0, aw.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aw.w)(e);
            lE.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    oa = (0, h.sN)(S.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => V.intl.string(V.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i9.Ay.getOutputVolume();
            return (0, aw.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aw.w)(e);
            lE.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    oo = (0, h.zC)(S.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [or, oa] });
var ou = n(702841),
    od = n(152567),
    oc = n(804037);
let og = `${eb.A.getArticleURL(I.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    om = (0, h.E2)(S.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH)],
        usePredicate: function () {
            return (0, ou.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.LOOPBACK));
        },
        Component: function () {
            return (0, ou.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.LOOPBACK))
                ? (0, p.jsx)(od.A, {
                      size: "md",
                      notchBackground: od.V.GRAY,
                      captionVoice: V.intl.string(V.t.bp3JOV),
                      captionNoVoice: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(n4.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t.bgn75v),
                              }),
                              V.intl.string(V.t["MA+OZh"]),
                              (0, p.jsx)(nr.Anchor, {
                                  className: oc.X,
                                  href: eb.A.getArticleURL(I.MVz.NO_INPUT_DETECTED),
                                  children: V.intl.string(V.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: V.intl.format(V.t["V+B3FH"], { guideURL: og }),
                      buttonTest: V.intl.string(V.t.gyljWE),
                      buttonStop: V.intl.string(V.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    oA = e8.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function oE(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, p.jsxs)(q.B, {
        children: [
            n && (0, p.jsx)(ll, { sourcePage: "voice" }),
            t && (0, p.jsx)(l9.A, { look: l9.k.WARNING, children: V.intl.string(V.t.Ioz3gx) }),
        ],
    });
}
let oh = (0, h.zZ)(S.X.VOICE_CATEGORY, {
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
            let e = li("voice"),
                t = (0, sK.x5)(lw.oh.AUDIO_INPUT),
                n = (0, sK.x5)(lw.oh.AUDIO_OUTPUT),
                i = f.useMemo(() => {
                    let e = oA.some((e) => t?.hardwareId?.startsWith(e)),
                        i = oA.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return f.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: T.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, p.jsx)(oE, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [os, oo, om],
    }),
    oS = (0, h.t_)(S.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        buildLayout: () => [oh, ag, s1, ot, a3, aX, ry, rp],
    }),
    ox = (0, h.i4)(S.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        usePredicate: () => i9.Ay.isSupported(),
        icon: sU.MicrophoneIcon,
        useMenu: sV.A,
        buildLayout: () => [oS],
    }),
    oT = (0, h.WI)(S.X.APP_SECTION, {
        useTitle: () => V.intl.string(V.t.gcyH1J),
        buildLayout: () => [ox, nZ, tt, iY, sM, n$],
    });
var op = n(360669),
    of = n(643891),
    o_ = n(975807),
    oI = n(353795),
    oN = n(534247);
function oC(e) {
    let { title: t, children: n, actions: i, graphicSrc: l, graphicLottie: s, footnote: r, size: a = "default" } = e,
        o = "compact" === a;
    return (0, p.jsxs)("div", {
        className: ic()(oN.kL, { [oN.oE]: o }),
        children: [
            (0, p.jsxs)(q.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: o ? 24 : 16,
                fullWidth: !1,
                className: oN.Qs,
                children: [
                    (0, p.jsxs)(q.B, {
                        direction: "vertical",
                        align: "start",
                        gap: o ? 12 : 8,
                        children: [
                            (0, p.jsx)(C.D, {
                                variant: o ? "heading-lg/bold" : "heading-xl/bold",
                                color: "text-strong",
                                children: t,
                            }),
                            n,
                        ],
                    }),
                    (i.length > 0 || null != r) &&
                        (0, p.jsxs)(q.B, {
                            direction: "vertical",
                            align: "start",
                            gap: 12,
                            children: [
                                i.length > 0 &&
                                    (0, p.jsx)(q.B, {
                                        direction: "horizontal",
                                        gap: o ? 12 : 16,
                                        wrap: !0,
                                        fullWidth: !1,
                                        children: i.map((e) =>
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
                                null != r &&
                                    (0, p.jsx)(n4.E, { variant: "text-xxs/normal", color: "text-subtle", children: r }),
                            ],
                        }),
                ],
            }),
            null != s
                ? (0, p.jsx)("div", {
                      className: oN.yO,
                      children: (0, p.jsx)(oI.v, { type: "lottie", lottie: s, aspectRatio: "6/4" }),
                  })
                : (0, p.jsx)("img", { src: l, className: oN.fA, alt: "" }),
        ],
    });
}
var ob = n(425565),
    oy = n(158843),
    ov = n(936564),
    oj = n(417792),
    oO = n(423764),
    oL = n(289873),
    oR = n(132500),
    oD = n(465323),
    oP = n(37766),
    oG = n(194261),
    oM = n(391048),
    oU = n(277984),
    oV = n(99696),
    ok = n(202613),
    ow = n(615405),
    oF = n(83617),
    oB = n(935208),
    oz = n(607399),
    oX = n(993077),
    oY = n(150934),
    oH = n(256006),
    oW = n(198970),
    oK = n(71532);
let oZ = /[^0-9/]/g,
    oq = /[^0-9]/g;
class oQ extends f.PureComponent {
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
                ((i = (n = e.replace(oZ, "").split("/"))[0]),
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
            ? (u = u.replace(oq, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, p.jsx)(lp.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var oJ = n(832208),
    o$ = n(782328);
let o0 = [
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
                        getClassNameForLayout: () => o$.ep,
                        renderInput: (e) => (0, p.jsx)(oQ, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    o1 = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = f.useState(!1),
            [a, o] = f.useState(null),
            [u, d] = f.useState(i);
        return (
            f.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(oJ.A, {
                className: n,
                form: o0,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    (s || "" === e || r(!0),
                        (s && "" === e) || !(0, oK.So)(e) ? o(V.intl.string(V.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var o2 = n(219887),
    o3 = n(292856);
let o4 = "isDefault";
class o5 extends f.PureComponent {
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
            expiresMonth: t instanceof ok.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof ok.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ((0, oU.ey)(), (0, oU.tc)());
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
                      className: o3.zc,
                      children: (0, p.jsx)(iK.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: o3.zc,
                  children: (0, p.jsx)(iK.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oH.g)(n);
        return (0, p.jsxs)("div", {
            className: o3.yV,
            children: [
                (0, p.jsx)(n4.E, {
                    className: o3.bV,
                    variant: "text-sm/normal",
                    children: V.intl.string(V.t["50Auo2"]),
                }),
                (0, p.jsx)(oW.Ay, {
                    ...e,
                    mode: oW.Ay.Modes.EDIT,
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
            className: o3.yV,
            children: [
                (0, p.jsx)(n4.E, { className: o3.bV, variant: "text-sm/normal", children: V.intl.string(V.t.Fo2YP7) }),
                (0, p.jsx)(o1, {
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
            className: o3.AU,
            children: (0, p.jsxs)(q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(s8.e, {
                        children: (0, p.jsxs)("div", {
                            className: o3.lH,
                            children: [
                                n
                                    ? (0, p.jsx)(lg.m, {
                                          text: V.intl.string(V.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: o3.dm }),
                                      })
                                    : null,
                                (0, p.jsx)(j.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oz.Fr ? "sm" : "md",
                                    text: oz.Fr ? V.intl.string(V.t.oyYWHE) : V.intl.string(V.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, p.jsxs)(s8.e, {
                        children: [
                            (0, p.jsx)(j.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oz.Fr ? "sm" : "md",
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                            (0, p.jsx)(j.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: oz.Fr ? "sm" : "md",
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
            r = e instanceof ok.SJ;
        return (0, p.jsx)(oX.Z, {
            editable: !0,
            className: ic()(o3.Nr, i),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: o3.__invalid_paymentSection,
                        children: [
                            (0, p.jsx)(o2.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, p.jsx)("div", { className: o3.Um, children: V.intl.string(V.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: o3.Sv,
                                children: r
                                    ? V.intl.format(V.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : V.intl.string(V.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: o3.D5,
                        children: (0, p.jsx)(oY.S, {
                            value: o4,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, o4),
                            label: V.intl.string(V.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, p.jsx)(ls.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let o6 = _.Ay.connectStores([ow.A], () => ({ updateError: ow.A.editSourceError, removeError: ow.A.removeSourceError }))(
    o5,
);
var o8 = n(493364),
    o7 = n(849405),
    o9 = n(329693);
function ue() {
    (0, oV.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oR.A)() });
}
class ut extends f.PureComponent {
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
            ? (0, p.jsx)(o6, {
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
                      i ? null : (0, p.jsx)(ls.c, { className: o9.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: o9.Yb,
                          children: [
                              (0, p.jsx)(o2.A, {
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
let un = f.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = f.useState(null),
        o = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, _.bG)([ow.A], () => ow.A.ipCountryCode),
        d = f.useMemo(() => (0, oD.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        f.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oU.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                n ? null : (0, p.jsx)(ls.c, { className: o9.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: o9.Yb,
                    children: [
                        void 0 !== t
                            ? (0, p.jsx)(o2.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, p.jsxs)(lN.A, {
                                  align: lN.A.Align.CENTER,
                                  children: [
                                      (0, p.jsx)(oP._, { size: "lg" }),
                                      (0, p.jsx)(n4.E, {
                                          variant: "text-sm/medium",
                                          className: o7.Wi,
                                          children: V.intl.string(o8.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, p.jsxs)("div", {
                            className: o9.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: o9.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(oL.y, { type: oL.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(n4.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oD.$g)(e ?? 0, n, l, {
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
                                    text: V.intl.string(o8.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class ui extends f.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oU.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oU.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oU.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oF.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, lT.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, oM.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: o9.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: o9.z8,
                          children: [
                              (0, p.jsx)(n4.E, { variant: "text-sm/normal", children: V.intl.string(V.t.aRHpAB) }),
                              (0, p.jsx)(n4.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: o9.Sv,
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oB.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof ok.LQ)),
            c = u.filter((e) => e instanceof ok.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, p.jsx)(
                    ut,
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
                              un,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: ue,
                              },
                              e.id,
                          ),
                      )
                    : (0, p.jsx)(un, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: ue,
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(C.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(oG.LockIcon, { size: "sm", className: o9.hz }),
                                          " ",
                                          V.intl.string(V.t.W26xGQ),
                                      ],
                                  }),
                                  (0, p.jsx)(n4.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: V.intl.string(V.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, p.jsx)(ls.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var ul = n(459357),
    us = n(295405),
    ur = n(166403),
    ua = n(773669),
    uo = n(943009);
function uu() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, oO.Gw)(e.country) };
}
let ud = (0, h.E2)(S.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, _.bG)([ow.A], () => ow.A.isSyncing),
                i = (0, _.bG)([us.A], () => us.A.paymentSources),
                l = (0, _.bG)([us.A], () => us.A.defaultPaymentSourceId),
                s = (0, _.bG)([ua.default], () => ua.default.locale),
                r = (0, _.bG)([ur.A], () => ur.A.getPremiumTypeSubscription()),
                a = (0, _.bG)([ow.A], () => ow.A.isRemovingPaymentSource),
                o = (0, _.bG)([ow.A], () => ow.A.isUpdatingPaymentSource),
                { enabled: u } = (0, ul.c)({ location: "UserSettingsBilling" });
            return (f.useEffect(() => {
                (oU.$o(), oU.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, p.jsx)("div", { className: uo.o, children: (0, p.jsx)(oL.y, {}) })
                : (0, p.jsx)(ui, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== I.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: s,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.W26xGQ), V.intl.string(V.t["3pIjBH"])],
    }),
    uc = (0, h.E2)(S.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = f.useMemo(
                () => [
                    { text: V.intl.string(oy.default["6bWeWP"]), onClick: () => (0, o_.A)(ob.C) },
                    {
                        text: V.intl.string(oy.default.xYa9Y8),
                        onClick: () => (0, o_.A)(eb.A.getArticleURL(I.MVz.BUY_GIFT_CARDS)),
                    },
                ],
                [],
            );
            return (0, p.jsx)("div", {
                className: ov.k,
                children: (0, p.jsx)(oC, {
                    title: V.intl.string(oy.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: e,
                    children: (0, p.jsx)(n4.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: V.intl.string(oy.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, oj.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    ug = (0, h.zZ)(S.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.W26xGQ),
        useSubtitle: () => {
            let e = uu();
            return null != e ? V.intl.format(V.t.e2t1G5, { country: e.countryName }) : V.intl.string(V.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == uu()
                ? null
                : {
                      type: T.p3.INFO_POPOVER,
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
        buildLayout: () => [ud, uc],
    });
var um = n(837381),
    uA = n(689175),
    uE = n(928039),
    uh = n(921853),
    uS = n(22306);
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
                className: uS.v,
                children: (0, p.jsxs)("div", {
                    className: uS.U,
                    children: [
                        (0, p.jsx)(ld.K, {
                            variant: "icon-only",
                            icon: uh.n,
                            disabled: t <= 0,
                            onClick: () => i(t - 1),
                            "aria-label": V.intl.string(V.t.vgfxaA),
                        }),
                        (0, p.jsx)(n4.E, { variant: "text-sm/medium", children: u }),
                        (0, p.jsx)(ld.K, {
                            variant: "icon-only",
                            icon: n8._,
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
var uT = n(32731);
n(938796);
var up = n(334279),
    uf = n(122817),
    u_ = n(665260),
    uI = n(315069),
    uN = n(557009),
    uC = n(570221),
    ub = n(243217);
class uy extends uI.A {
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
        let t = null != e.payment_source ? ok.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? uT.A.createFromServer(e.sku) : null,
            i = null != e.subscription ? ub.A.createFromServer(e.subscription) : null;
        return new uy({
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
            entitlements: null != e.entitlements ? e.entitlements.map((e) => uN.A.createFromServer(e)) : void 0,
            invoice: null != e.invoice ? uC.Y.createFromServer(e.invoice) : null,
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
        return this.paymentGateway === I.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === I.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && tJ.JM.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return tJ.pW.has(t);
                })
        );
    }
    get isGift() {
        return u_.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && null != this.skuId && Object.values(tJ.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === I.EZt.GUILD_PRODUCT || u_.Lt(this.sku.flags, uf.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === I.EZt.COLLECTIBLES;
    }
    get isFractionalPremium() {
        return null != this.skuId && up.I.ALL.has(this.skuId);
    }
    get isShopPurchase() {
        return this.isCollectible || this.isFractionalPremium;
    }
}
var uv =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    uj =
        (((l = {})[(l.NITRO = 1)] = "NITRO"),
        (l[(l.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (l[(l.SHOP = 3)] = "SHOP"),
        (l[(l.APPLICATION = 4)] = "APPLICATION"),
        (l[(l.PRODUCT = 5)] = "PRODUCT"),
        l),
    uO =
        (((s = {})[(s.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (s[(s.REFUNDED = 2)] = "REFUNDED"),
        (s[(s.REVERSED = 3)] = "REVERSED"),
        s),
    uL =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    uR =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uD(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? ok.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? uT.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new uy({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uP = { receipts: [], cursor: null };
var uG = n(34188),
    uM = n(597770),
    uU = n(206828),
    uV = n(576243),
    uk = n(147925),
    uw = n(707554),
    uF = n(957565),
    uB = n(250627),
    uz = n(871109),
    uX = n(571654),
    uY = n(411342),
    uH = n(179499),
    uW = n(741231),
    uK = n(95035),
    uZ = n(317525),
    uq = n(460103);
function uQ(e) {
    let { description: t, detail: n } = e;
    return (0, p.jsx)("li", {
        className: uq.Iu,
        children: (0, p.jsxs)(lN.A, {
            justify: lN.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function uJ(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uB.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, uX.z)(i),
        s = (0, _.bG)([lv.A], () => lv.A.getGuild(t)),
        r = i?.role_id != null && i?.attachments_count === 0 ? V.intl.string(V.t.H11qcT) : l,
        a = f.useCallback(async () => {
            (s?.features.has(I.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, uW.A)(I.BVt.GUILD_PRODUCT(t, n))
                : await (0, uW.A)(I.BVt.CHANNEL(t)),
                (0, tY.default)());
        }, [s, t, n]);
    return (0, p.jsxs)(p.Fragment, {
        children: [
            null != r && (0, p.jsx)(uQ, { description: V.intl.string(V.t.lXPbJb), detail: r }),
            null != s &&
                (0, p.jsx)(uQ, {
                    description: V.intl.string(V.t.Wpn8z8),
                    detail: (0, p.jsx)(uK.A, { onClick: a, children: s.name }),
                }),
        ],
    });
}
function u$(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uB.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, _.bG)([uz.A], () => uz.A.getGuildProductFetchState(n) === uz.e.FETCHING),
        s = i?.role_id,
        r = (0, _.bG)([uZ.A], () => (null != s ? uZ.A.getRole(t, s) : void 0), [t, s]),
        a = (0, uH.A)({ guildId: t, productId: n }),
        o = (i?.attachments?.length ?? 0) > 0,
        u = null != r;
    return l
        ? (0, p.jsx)("div", { className: uq.hT, children: (0, p.jsx)(oL.y, {}) })
        : null != i && (o || u)
          ? (0, p.jsxs)("div", {
                className: uq.hT,
                children: [
                    o &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(n4.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: uq.yE,
                                    children: V.intl.string(V.t.hxawoy),
                                }),
                                (0, p.jsx)(j.$, { ...a }),
                            ],
                        }),
                    u &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                o && (0, p.jsx)("div", { className: uq.yF }),
                                (0, p.jsx)(n4.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: uq.yE,
                                    children: V.intl.string(V.t.gWBNet),
                                }),
                                (0, p.jsx)(uY.A, { role: r }),
                            ],
                        }),
                ],
            })
          : null;
}
let u0 = function (e, t) {
    (0, lT.openModalLazy)(async () => {
        let { default: i } = await n.e("234138").then(n.bind(n, 206049));
        return (n) => (0, p.jsx)(i, { payment: e, paymentSource: t, ...n });
    });
};
var u1 = n(818348);
async function u2(e) {
    try {
        return (
            await tl.Bo.get({
                url: I.Rsh.BILLING_INVOICE_BREAKDOWN,
                query: { payment_id: e },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        throw e;
    }
}
function u3(e) {
    let { payment: t } = e,
        [n, i] = f.useState(null),
        [l, s] = f.useState(null);
    async function r(e) {
        try {
            let n = await u2(t.id);
            i(n);
            let l = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
            (window.open(l, "_blank"), s(null));
        } catch (e) {
            s(e.body?.message);
        }
    }
    let a = null != t.paymentSource && t.status === u1.__.COMPLETED,
        o = n?.invoiceLink,
        u = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, p.jsxs)("div", {
              className: uq.It,
              children: [
                  (0, p.jsx)(nr.Anchor, { onClick: () => r(!1), children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, p.jsx)(nr.Anchor, {
                            className: uq.oe,
                            onClick: () => r(!0),
                            children: V.intl.formatToPlainString(V.t["3x6NGw"], {}),
                        })
                      : null,
                  null != l && "" !== l && (0, p.jsx)(iK.w, { type: "critical", message: l, role: "alert" }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, p.jsxs)("div", {
                className: uq.It,
                children: [
                    (0, p.jsx)(nr.Anchor, { href: o, children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                    null != u
                        ? u.map((e, t) =>
                              (0, p.jsx)(
                                  nr.Anchor,
                                  {
                                      className: uq.oe,
                                      href: e,
                                      children: V.intl.formatToPlainString(V.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != l && "" !== l && (0, p.jsx)(iK.w, { type: "critical", message: l, role: "alert" }),
                ],
            })
          : a
            ? (0, p.jsx)("div", {
                  className: uq.It,
                  children: (0, p.jsx)(nr.Anchor, {
                      onClick: () => {
                          var e;
                          ((e = t.paymentSource), u0(t, e));
                      },
                      children: V.intl.formatToPlainString(V.t.onRIxS, {}),
                  }),
              })
            : null;
}
var u4 = n(510022),
    u5 = n(427262),
    u6 = n(106799),
    u8 = n(580630);
let u7 = (e) => `https://${I.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function u9(e, t) {
    return t === u1.Yr.DISCORD_ORB
        ? (0, p.jsxs)("span", {
              className: uq.db,
              children: [
                  (0, p.jsx)(u6.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  V.intl.formatToPlainString(V.t.YMor7k, { count: e }),
              ],
          })
        : (0, u8.$g)(e, t);
}
function de(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: l } = e,
        { analyticsLocations: s } = (0, eX.Ay)(tk.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uR.REDEEMED
        ? null
        : n.status === uR.REFUNDED
          ? (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(uw.H, { className: uq.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                    (0, p.jsx)("div", {
                        className: uq.iL,
                        children:
                            null != o
                                ? V.intl.format(V.t.Q1K9eg, { username: u5.Ay.getName(o) })
                                : V.intl.format(V.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uR.CLAIMED || n.status === uR.UNCLAIMED
            ? (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(uw.H, { className: uq.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: uq.iL,
                          children:
                              null != o
                                  ? V.intl.format(V.t.vfUW65, { username: u5.Ay.getName(o) })
                                  : V.intl.string(V.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, p.jsx)("div", {
                              className: uq.TP,
                              children: (0, p.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t["jcSP+g"]),
                                  onClick: () => (0, na.openUserSettings)(S.X.GIFT_PANEL),
                              }),
                          }),
                  ],
              })
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(uw.H, { className: uq.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: uq.iL,
                          children: l
                              ? V.intl.format(V.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : V.intl.format(V.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, p.jsx)("div", {
                          className: uq.TP,
                          children: l
                              ? (0, p.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t.zoztQA),
                                    onClick: () => (0, o_.A)(u7(i)),
                                })
                              : (0, p.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t["jCqvk/"]),
                                    onClick: () => {
                                        null != r &&
                                            null != a &&
                                            (td.default.track(I.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
                                                sku_id: r.id,
                                                application_id: a.id,
                                                location_stack: s,
                                            }),
                                            (0, u4.n)({ sku: r, application: a, analyticsLocations: s }));
                                    },
                                }),
                      }),
                  ],
              });
}
var dt = n(933832),
    dn = n(789645);
function di(e) {
    let { refund: t, locale: n } = e,
        i = u7(n),
        l = t.eligible ? dt.CheckmarkLargeIcon : dn.P;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(uw.H, { className: uq.mW, children: V.intl.string(V.t["n/27pr"]) }),
            (0, p.jsxs)("div", {
                className: uq.iL,
                children: [
                    (0, p.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uL.IN_GAME_ITEM
                                    ? V.intl.format(V.t["5lvoVS"], { supportURL: t })
                                    : V.intl.string(V.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uL.PREMIUM:
                                    return e.eligible
                                        ? V.intl.format(V.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.dk7vyL, { dateLimit: n });
                                case uL.GIFT:
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
                    t.policy !== uL.IN_GAME_ITEM &&
                        (0, p.jsxs)("div", {
                            className: uq.My,
                            children: [
                                (0, p.jsx)("div", {
                                    className: uq.Kf,
                                    children:
                                        null != t.window &&
                                        (0, p.jsxs)("div", {
                                            className: uq._Z,
                                            children: [
                                                (0, p.jsx)(uw.H, {
                                                    className: uq.ud,
                                                    children: V.intl.string(V.t.H0RNz4),
                                                }),
                                                (0, p.jsxs)("div", {
                                                    className: uq.z9,
                                                    children: [
                                                        (0, p.jsx)(l, { className: uq.xb, color: "currentColor" }),
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
                                (0, p.jsx)(nr.Anchor, { href: i, children: V.intl.string(V.t.re5nOB) }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var dl = n(679897);
function ds(e) {
    let { description: t, cost: n } = e;
    return (0, p.jsx)("li", {
        className: uq.mg,
        children: (0, p.jsxs)(lN.A, {
            justify: lN.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function dr(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [l, s] = f.useState(!1),
        [r, a] = f.useState(!1);
    return (0, p.jsx)(lg.m, {
        forceOpen: r,
        text: l ? i : n,
        children: (0, p.jsx)(n5.D, {
            onMouseEnter: () => {
                l && s(!1);
            },
            onMouseLeave: () => {
                a(!1);
            },
            onClick: function () {
                (0, uF.C)(t, () => {
                    (a(!0), s(!0));
                });
            },
            children: (0, p.jsx)("div", { className: uq.l9, children: t }),
        }),
    });
}
function da(e) {
    let { paymentId: t } = e;
    return (0, p.jsx)("li", {
        className: uq.mg,
        children: (0, p.jsxs)("div", {
            className: uq.bx,
            children: [
                (0, p.jsx)("div", { children: V.intl.string(V.t["UQim+r"]) }),
                (0, p.jsx)(dr, {
                    value: t,
                    copyText: V.intl.string(V.t["Mdk9+A"]),
                    copyFeedbackText: V.intl.string(V.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function du(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === uO.REVERSED;
    return (0, p.jsxs)(n4.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: ic()(dl.XM, n ? dl.aB : dl.EN),
        children: [
            t === uO.REVERSED && V.intl.string(V.t.YQv9Li),
            t === uO.PARTIALLY_REFUNDED && V.intl.string(V.t.lYbZzz),
            t === uO.REFUNDED && V.intl.string(V.t.ZBb6NK),
        ],
    });
}
function dd(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === u1.kM.APPLE_PARTNER ? new ok.Pw({}) : null);
    return null == i
        ? null
        : (0, p.jsx)(o2.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: uq.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function dc(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, p.jsx)(dd, { payment: t.payments[0], locale: n })
            : null
        : (0, p.jsx)(q.B, {
              children: t.payments.map((e) =>
                  (0, p.jsxs)(
                      lN.A,
                      {
                          justify: lN.A.Justify.BETWEEN,
                          align: lN.A.Align.CENTER,
                          children: [
                              (0, p.jsx)(dd, { payment: e, locale: n }),
                              (0, p.jsxs)(q.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, p.jsx)(du, { tag: e.tag }),
                                      (0, p.jsx)(n4.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          children: u9(e.amount, t.currency),
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
function dg(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)("div", { className: uq.ts }),
            t.delisted
                ? (0, p.jsx)(iK.w, {
                      type: "warning",
                      message: V.intl.string(V.t["3AvulN"]),
                      role: "none",
                      action: { text: V.intl.string(V.t.zoztQA), onClick: () => (0, o_.A)(u7(n)) },
                  })
                : null != t.guild_id && (0, p.jsx)(u$, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function dm(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: l, guild_product: s, game_item: r, refund: a } = t;
    return (0, p.jsx)(n5.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, p.jsxs)("div", {
            className: uq.WI,
            children: [
                (0, p.jsx)(uw.H, { className: uq.mW, children: V.intl.string(V.t.nyzoFb) }),
                (0, p.jsxs)("div", {
                    className: ic()(uq.iL, uq.W),
                    children: [
                        (0, p.jsx)(dc, { receipt: t, locale: n }),
                        (0, p.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(ds, { description: t.description, cost: u9(t.subtotal, l) }),
                                            (0, p.jsx)(ds, {
                                                description: V.intl.string(V.t.QgWXht),
                                                cost: u9(t.tax, l),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(ds, { description: V.intl.string(V.t.txajQG), cost: u9(t.total, l) }),
                                t.amount_refunded > 0 &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(ds, {
                                                description: V.intl.string(V.t["A+I0AP"]),
                                                cost: u9(-t.amount_refunded, l),
                                            }),
                                            (0, p.jsx)(ds, {
                                                description: V.intl.string(V.t.xER6Wi),
                                                cost: u9(t.net, l),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(da, { paymentId: t.id }),
                                s?.guild_id != null &&
                                    (0, p.jsx)(uJ, { guildId: s.guild_id, guildProductListingId: s.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != s && (0, p.jsx)(dg, { guildProduct: s, locale: n }),
                (0, p.jsx)(u3, { payment: t.receipt_payment }),
                null != r && (0, p.jsx)(de, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, p.jsx)(di, { refund: a, locale: n }),
            ],
        }),
    });
}
function dA(e) {
    let { withGradient: t } = e;
    return t
        ? (0, p.jsx)(uV.A, { size: 24, iconSize: 16, color: n1.A.unsafe_rawColors.NEUTRAL_1, className: uq.Sy })
        : (0, p.jsx)("div", {
              className: ic()(uq.Sy, uq.uX, uq.Xr),
              children: (0, p.jsx)(am.t, { size: "custom", width: 16, height: 16, color: n1.A.colors.ICON_DEFAULT }),
          });
}
function dE(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, _.bG)([lv.A], () => lv.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uj.NITRO:
            return (0, p.jsx)(dA, { withGradient: !0 });
        case uj.NITRO_BASIC:
            return (0, p.jsx)(dA, { withGradient: !1 });
        case uj.SHOP:
            return (0, p.jsx)(uG.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uq.sV });
        case uj.APPLICATION:
        case uj.PRODUCT:
            return (0, p.jsx)(i7.A, {
                className: uq.Sy,
                guildClassName: uq.zA,
                game: t.icon === uj.APPLICATION ? n : void 0,
                guild: i,
                size: i7.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function dh(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uv.PAID)
        switch (i.status) {
            case uR.CLAIMED:
                return (0, p.jsx)("span", { className: uq.gD, children: V.intl.string(V.t.lIsIFo) });
            case uR.UNCLAIMED:
                return (0, p.jsx)("span", { className: uq.Tf, children: V.intl.string(V.t["+tqSi3"]) });
            case uR.REDEEMED:
                return (0, p.jsx)("span", { className: uq.gD, children: V.intl.string(V.t.Osji1u) });
            case uR.FAILED:
                return (0, p.jsx)("span", { className: uq.ob, children: V.intl.string(V.t.Yo4ru6) });
            default:
                return n
                    ? (0, p.jsx)("span", { className: uq.Tf, children: V.intl.string(V.t.y7F0Re) })
                    : (0, p.jsx)("span", { className: uq.Tf, children: V.intl.string(V.t.HHC5Z4) });
        }
    switch (t.status) {
        case uv.PENDING:
            return (0, p.jsx)("span", { className: uq.oE, children: V.intl.string(V.t.y7F0Re) });
        case uv.FAILED:
            return (0, p.jsx)("span", { className: uq.ob, children: V.intl.string(V.t.Yo4ru6) });
        case uv.REVERSED:
            return (0, p.jsx)("span", { className: uq.ob, children: V.intl.string(V.t.YQv9Li) });
        case uv.CANCELED:
            return (0, p.jsx)("span", { className: uq.ob, children: V.intl.string(V.t.ttkBhy) });
        case uv.PARTIALLY_REFUNDED:
            return (0, p.jsx)("span", { className: uq.gD, children: V.intl.string(V.t.lYbZzz) });
        case uv.REFUNDED:
            return (0, p.jsx)("span", { className: uq.gD, children: V.intl.string(V.t.ZBb6NK) });
        case uv.PAID:
            return null;
    }
}
function dS(e) {
    let { receipt: t, locale: n, className: i } = e,
        [l, s] = f.useState(!1),
        { hasAlreadyLinked: r } = (0, uU.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, p.jsx)(um.tG, {
        id: t.id,
        children: (e) =>
            (0, p.jsxs)(n5.D, {
                onClick: () => s(!l),
                "data-expanded": l,
                className: ic()(uq.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, p.jsxs)(lN.A, {
                        className: uq.J7,
                        align: lN.A.Align.CENTER,
                        "data-expanded": l,
                        children: [
                            (0, p.jsx)(n4.E, {
                                variant: "text-sm/normal",
                                className: uq.p6,
                                children: (0, iA.i$)(im()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, p.jsxs)("div", {
                                className: uq.h_,
                                children: [
                                    (0, p.jsx)(dE, { receipt: t }),
                                    (0, p.jsx)("div", {
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
                                                                      return (0, aC.xq)(t)
                                                                          ? aC.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${aC.Ay.getDisplayName(t, !1, i)}`;
                                                                  })
                                                                  .join(", ");
                                                          case I.rzx.GUILD:
                                                              if (null == t.plan_name) return null;
                                                              return V.intl.formatToPlainString(
                                                                  t.interval === tJ.WT.YEAR
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
                                        ? (0, p.jsx)(lg.m, {
                                              text: V.intl.string(V.t.QddTpm),
                                              children: (0, p.jsx)(uM.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uq.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, p.jsxs)("div", {
                                className: uq.vj,
                                children: [
                                    (0, p.jsx)(dh, { receipt: t, hasLinkedToApplication: r }),
                                    (0, p.jsx)("span", { className: uq.q9, children: u9(t.net, t.currency) }),
                                ],
                            }),
                            (0, p.jsx)(uk.A, {
                                className: uq.fT,
                                direction: l ? uk.A.Directions.UP : uk.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    l ? (0, p.jsx)(dm, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var dx = n(949779);
function dT(e) {
    let { receipts: t, locale: n, loadNextPage: i } = e,
        l = f.useRef(null),
        [s, r] = f.useState(0),
        a = Math.max(Math.ceil(t.length / 10), 1),
        o = t.slice(10 * s, (s + 1) * 10);
    f.useEffect(() => {
        l.current?.scrollTo({ to: 0 });
    }, [s]);
    let u = f.useCallback(
            (e) => {
                (r(e), e >= a - 2 && i());
            },
            [a, i],
        ),
        d = (0, uE.A)("billing-history", l);
    return (0, p.jsx)(um.hD, {
        navigator: d,
        children: (0, p.jsx)(um.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, p.jsx)(ux, {
                    className: dx.GD,
                    currentPageIndex: s,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, p.jsx)(uA.Ch, {
                        className: dx.Bd,
                        ref: l,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, p.jsx)(dS, { className: ic()(dx.Nj, dx.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function dp(e) {
    let { subscription: t } = e;
    return (
        tE()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, p.jsxs)(oX.Z, {
            className: dx.K1,
            children: [
                (0, p.jsx)("div", {
                    className: dx.BF,
                    children: V.intl.format(V.t["6mIX6s"], { paymentGatewayName: u1.qm[t.paymentGateway] }),
                }),
                (0, p.jsx)("div", {
                    className: dx.Q2,
                    children: V.intl.format(V.t.eG0uZB, {
                        paymentGatewayName: u1.qm[t.paymentGateway],
                        billingHistoryLink: (0, aC.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function df(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: l,
            loadNextPage: s,
        } = (function () {
            let [e, t] = f.useState(uP),
                [n, i] = f.useState(!1),
                [l, s] = f.useState(!1),
                [r, a] = f.useState(!1),
                o = f.useCallback((e, n) => {
                    tl.Bo.get({
                        url: I.Rsh.BILLING_HISTORY,
                        query: { before: e ?? void 0, limit: n },
                        rejectWithError: !0,
                    })
                        .then((n) => {
                            let { body: i } = n,
                                l = i.receipts.map(uD);
                            t((t) => ({ receipts: null == e ? l : [...t.receipts, ...l], cursor: i.cursor }));
                        })
                        .catch(() => {
                            null == e && s(!0);
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
            return { receipts: e.receipts, hasFetched: n, hasFailed: l, loadNextPage: u };
        })(),
        r = (0, _.bG)([ur.A], () => ur.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, p.jsxs)("div", {
              className: dx.GD,
              children: [
                  null != r && a ? (0, p.jsx)(dp, { subscription: r }) : null,
                  n.length > 0
                      ? (0, p.jsxs)("div", {
                            className: ic()(dx.PQ, dx.GD),
                            children: [
                                (0, p.jsx)("div", {
                                    className: ic()(dx.Nj, dx.Bd),
                                    children: (0, p.jsxs)(lN.A, {
                                        className: dx.Yi,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: uq.p6,
                                                children: V.intl.string(V.t["5t11BV"]),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: dx.Ir,
                                                children: V.intl.string(V.t.yAAPb2),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: uq.vj,
                                                children: V.intl.string(V.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, p.jsx)(dT, { receipts: n, locale: t, loadNextPage: s }),
                            ],
                        })
                      : l
                        ? (0, p.jsx)(n4.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: V.intl.string(V.t["fb3n+4"]),
                          })
                        : a
                          ? null
                          : (0, p.jsx)(n4.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: V.intl.string(V.t.GqvDkk),
                            }),
              ],
          })
        : (0, p.jsx)(oL.y, {});
}
var d_ = n(545075);
let dI = (0, h.E2)(S.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, _.bG)([ua.default], () => ua.default.locale);
            return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(d_.kb, {}), (0, p.jsx)(df, { locale: e })] });
        },
        useSearchTerms: () => [V.intl.string(V.t.obLrcK)],
    }),
    dN = (0, h.zZ)(S.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.obLrcK),
        buildLayout: () => [dI],
    }),
    dC = (0, h.t_)(S.X.BILLING_PANEL, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [ug, dN],
        useObscuredNotice: of.L,
    }),
    db = (0, h.i4)(S.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        icon: op.B,
        buildLayout: () => [dC],
    });
var dy = n(70283),
    dv = n(682618),
    dj = n(997101);
let dO = {
        [dj.d.US]: [
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
        [dj.d.IT]: [
            {
                id: "gamelife",
                name: "Gamelife",
                url: "https://www.gamelife.it/cava0261-discord-25-eur-codice-di-attivazione?attribute_values=4",
            },
        ],
    },
    dL = [];
function dR(e) {
    return null == e ? dL : (dO[e] ?? dL);
}
var dD = n(92202),
    dP = n(534284),
    dG = n(139486),
    dM = n(962644),
    dU = n(35587),
    dV = n(86379);
let dk = (0, h.E2)(S.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: d_.uK,
        usePredicate: () => (0, dV.Hp)(),
        useSearchTerms: () => [V.intl.string(V.t.vwMEHS)],
    }),
    dw = (0, h.zZ)(S.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dk] });
var dF = n(704333),
    dB = n(414499),
    dz = n(31300);
function dX(e) {
    let { enabled: t } = (0, dD.K)({ location: e }),
        n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.storeCountry?.country);
    return t && dR(n).length > 0;
}
var dY = n(178881);
function dH() {
    return n.e("5660").then(n.bind(n, 946647));
}
function dW(e) {
    let { icon: t, children: n } = e;
    return (0, p.jsxs)(n4.E, {
        variant: "text-xs/normal",
        color: "text-default",
        className: dY.A,
        children: [
            (0, p.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, p.jsx)("span", { children: n }),
        ],
    });
}
let dK = (0, h.zZ)(S.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dZ],
        usePredicate: () => dX("GiftInventoryMarketingBanner"),
    }),
    dZ = (0, h.E2)(S.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dX("GiftCardsGiftInventoryBanner"),
                t = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.storeCountry?.country),
                n = (function () {
                    let { analyticsLocations: e } = (0, eX.Ay)();
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
                        dR(t).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n(e), (0, o_.A)(e.url));
                            },
                        })),
                    [t, n],
                );
            return e
                ? (0, p.jsx)(oC, {
                      size: "compact",
                      title: V.intl.string(oy.default.Ja5Q8Z),
                      graphicLottie: dH,
                      actions: i,
                      children: (0, p.jsxs)(q.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, p.jsx)(dW, { icon: dF.B, children: V.intl.string(oy.default["9xo1g9"]) }),
                              (0, p.jsx)(dW, { icon: dB.h, children: V.intl.string(oy.default.I5UWh9) }),
                              (0, p.jsx)(dW, {
                                  icon: uM.GiftIcon,
                                  children: V.intl.format(oy.default.ZuneBP, {
                                      onBillingSettingsClick: () => (0, na.openUserSettings)(S.X.BILLING_PANEL),
                                  }),
                              }),
                              (0, p.jsx)(dW, {
                                  icon: dz.k,
                                  children: V.intl.format(oy.default.UwYHGm, { websiteUrl: ob.C }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var dq = n(982240),
    dQ = n(948518),
    dJ = n(914410),
    d$ = n(889158),
    d0 = n(573343);
function d1(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, p.jsxs)("div", {
        className: ic()(d0.fO, { [d0.bF]: i }),
        children: [
            null != n && (0, p.jsx)("img", { src: n, alt: "", className: d0.si }),
            (0, p.jsxs)("div", {
                className: d0.tc,
                children: [
                    (0, p.jsx)(n4.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, p.jsx)(n4.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: V.intl.format(d$.default.qvx9E4, { count: (0, dq.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function d2(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, p.jsx)("div", {
        className: d0.dw,
        children: t.map((e) => (0, p.jsx)(d1, { tier: e, iconUrl: (0, dG.Se)(e), active: e.key === n?.key }, e.key)),
    });
}
function d3(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eX.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, dQ.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, p.jsx)("div", {
        className: d0.NG,
        children: (0, p.jsx)(j.$, {
            variant: "primary",
            icon: uM.GiftIcon,
            text: V.intl.string(d$.default.DZnomS),
            onClick: l,
        }),
    });
}
function d4(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, dq.rL)(i),
        a = (0, dq.rL)(l),
        o = (0, dG.GZ)(n, i, l),
        u = (0, dG.Se)(i),
        d = (0, dG.Se)(l);
    return (
        (t =
            null != l
                ? V.intl.formatToPlainString(d$.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : V.intl.formatToPlainString(d$.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, p.jsxs)("div", {
            className: d0.mY,
            children: [
                null != u &&
                    (0, p.jsx)("div", {
                        className: d0.fC,
                        children: (0, p.jsx)("img", { src: u, alt: "", className: d0.qS }),
                    }),
                (0, p.jsxs)("div", {
                    className: d0.Qs,
                    children: [
                        (0, p.jsx)(n4.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, p.jsx)(dJ.Ay, { variant: dJ.qP.BLUE, weight: dJ.fh.MEDIUM, progress: o }),
                        (0, p.jsx)(n4.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: d0.qg,
                            children: V.intl.format(d$.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                null != d &&
                    (0, p.jsx)("div", {
                        className: d0.fC,
                        children: (0, p.jsx)("img", { src: d, alt: "", className: d0.qS }),
                    }),
            ],
        })
    );
}
function d5(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, _.cf)([dq.Ay], () => ({
            badgeProgress: dq.Ay.getSingleRequirementProgress(dy.$.GIFTING)?.current ?? 0,
            currentTier: dq.Ay.getCurrentTier(dy.$.GIFTING),
            nextTier: dq.Ay.getNextTier(dy.$.GIFTING),
            giftsRemaining: dq.Ay.getRemainingToNextTier(dy.$.GIFTING),
            tiers: dq.Ay.getBadgeById(dy.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, p.jsxs)("div", {
              className: d0.kL,
              children: [
                  (0, p.jsxs)("div", {
                      className: d0.Jo,
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
                                      (0, p.jsx)("div", { className: d0.yF }),
                                  ],
                              }),
                          (0, p.jsx)(d2, { tiers: r, currentTier: i }),
                          (0, p.jsx)(n4.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: d0.PJ,
                              children: V.intl.string(d$.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, p.jsx)(d3, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let d6 = (0, h.zZ)(S.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => V.intl.string(d$.default.sFokBp),
        buildLayout: () => [d8],
        usePredicate: () => {
            let e = (0, dG.F5)("gift_inventory"),
                t = (0, _.bG)([dq.Ay], () => dq.Ay.getBadgeById(dy.$.GIFTING));
            return e && null != t;
        },
    }),
    d8 = (0, h.E2)(S.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [V.intl.string(d$.default.sFokBp)],
        Component: () => (0, p.jsx)(d5, {}),
    });
var d7 = n(264779),
    d9 = n(412260),
    ce = n(555393),
    ct = n(725807),
    cn = n(212168),
    ci = n(976860),
    cl = n(469778),
    cs = n(45938),
    cr = n(109802),
    ca = n(869038),
    co = n(380856);
function cu(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, p.jsxs)(lN.A, {
        className: ic()(co.wx, n),
        align: lN.A.Align.CENTER,
        children: [
            (0, p.jsx)("div", { className: co.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function cd(e) {
    let { children: t, className: n } = e;
    return (0, p.jsx)("div", { className: ic()(co.rf, n), children: t });
}
class cc extends f.PureComponent {
    static Header = cu;
    static Body = cd;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, p.jsx)("div", { className: ic()(co.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var cg = n(180522),
    cm = n(871123),
    cA = n(366523),
    cE = n(280450),
    ch = n(30793),
    cS = n(97352),
    cx = n(67480),
    cT = n(615396),
    cp = n(274904);
class cf extends f.PureComponent {
    _copyModeTimeout = new rW.Ep();
    state = { copyMode: cr.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cr.q.SUCCESS:
                return V.intl.string(V.t.XVvPjU);
            case cr.q.ERROR:
                return V.intl.string(V.t.i4GM3L);
            default:
                return V.intl.string(V.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        ca.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, cs.AK)(t, n),
            (0, uF.C)(
                e,
                () => this.setState({ copyMode: cr.q.SUCCESS }),
                () => this.setState({ copyMode: cr.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cr.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, p.jsxs)(lN.A, {
            direction: lN.A.Direction.VERTICAL,
            className: cp.Gj,
            children: [
                (0, p.jsx)(cr.e, {
                    className: cp.ph,
                    value: (0, cs.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uF.p5,
                    hideMessage: e ? V.intl.string(V.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: s5.XD.BRAND,
                    buttonLook: s5.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: cp.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, p.jsxs)(f.Fragment, {
                                  children: [
                                      V.intl.format(V.t.ltVZcJ, { hours: t.expiresAt.diff(im()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, p.jsx)(n5.D, {
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
class c_ extends f.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await ca.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && ca.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, cm.bF)(e)
            ? (0, p.jsx)(cA.e, { shape: "square", sku: e, containerClassName: cp.ez })
            : null != t
              ? (0, p.jsx)(cg.A, { giftStyle: t, className: cp.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(i7.A, { game: n, size: i7.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, cm.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: ic()(cp.Oc, cp.ic),
                  children: [
                      (0, p.jsx)(i7.A, { game: n, size: i7.M.XSMALL, skuId: e.id, className: cp._u }),
                      V.intl.format(V.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: cp.Oc, children: V.intl.format(V.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tJ.FB
                    ? V.intl.string(V.t.odsU6W)
                    : i === tJ.Bu && null != n
                      ? V.intl.formatToPlainString(n.interval === tJ.WT.MONTH ? V.t.uZjpiJ : V.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : V.intl.formatToPlainString(n.interval === tJ.WT.MONTH ? V.t.rCJvqo : V.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, p.jsx)("div", { className: cp.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(lN.A, {
            justify: lN.A.Justify.BETWEEN,
            align: lN.A.Align.CENTER,
            className: cp.pe,
            children: [
                (0, p.jsx)(n4.E, { variant: "text-md/normal", children: V.intl.string(V.t.lELyPj) }),
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
        return (0, p.jsxs)(cc, {
            className: i,
            children: [
                (0, p.jsx)(n5.D, {
                    onClick: this.handleToggleOpen,
                    className: cp.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(cc.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: cp.MY,
                            children: [
                                (0, p.jsxs)(lN.A, {
                                    align: lN.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: cp.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(uk.A, {
                                    direction: a ? uk.A.Directions.UP : uk.A.Directions.DOWN,
                                    className: cp.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(cc.Body, {
                          children: s
                              ? (0, p.jsx)(oL.y, { className: cp.u1 })
                              : (0, p.jsxs)(f.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, p.jsx)(cf, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cI = _.Ay.connectStores([cx.A, tu.A, ch.A, i2.A, cS.A, cE.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = cx.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = ch.A.getForGifterSKUAndPlan(cE.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: tu.A.enabled,
        isFetching: ch.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: ch.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i2.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, cT.c9)(n) : null,
        giftCodes: s,
    };
})(c_);
var cN = n(725570),
    cC = n(736653),
    cb = n(46054);
let cy = im().duration(30, "days");
var cv = n(416052),
    cj = n(878309);
function cO(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, p.jsx)(lx.a, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: cj.aR }),
        onClose: async () => await t(),
        actions: [{ text: V.intl.string(V.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, p.jsxs)("div", {
            className: cj.t4,
            children: [
                (0, p.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t.iufib1) }),
                (0, p.jsx)(n4.E, { variant: "text-md/normal", className: cj.G3, children: V.intl.string(V.t.eAn6z2) }),
            ],
        }),
    });
}
let cL = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = f.useState(null),
        o = (0, tK.GV)(),
        { analyticsLocations: u } = (0, eX.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY);
    return (f.useEffect(() => {
        null == i &&
            (0, d7.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, p.jsx)(cO, { onClose: t, transitionState: s })
        : null == i
          ? (0, p.jsx)(oL.y, { className: cj.Lq })
          : (0, p.jsx)(lx.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: cj.N1,
                    children: [
                        (0, p.jsx)("div", { className: cj.Qw }),
                        (0, p.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t["23BfZh"]) }),
                        (0, p.jsx)(n4.E, {
                            variant: "text-md/normal",
                            className: cj.G3,
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
                            let e = (0, d7.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(ls.c, { className: cj.M5 }),
                        (0, p.jsx)(lu.D, {
                            label: V.intl.string(V.t.s9LFQh),
                            helperText: V.intl.string(V.t["F+nFTZ"]),
                            children: (0, p.jsx)(cv.A, {
                                value: i,
                                buttonColor: s5.$n.Colors.BRAND,
                                buttonLook: s5.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cR = n(136380);
function cD(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = f.useState(!1),
        [r, a] = f.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, cC.Ay)(),
        d = (0, d7.WD)(n.id, u),
        c = null != i,
        g = f.useMemo(
            () =>
                (0, iA.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? im()(n.outboundRedemptionEndDate)
                            : im()(n.endDate).add(cy)
                        : im()(n.endDate),
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
        A = (0, ce.N)()?.isEligible === !0,
        E = f.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: S } = n;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: cR.AX,
                children: [
                    (0, p.jsxs)("div", {
                        className: cR.Pg,
                        children: [
                            (0, p.jsxs)("div", {
                                className: cR.At,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: cR.$G,
                                        children: (0, p.jsx)("img", { alt: "", src: d, className: cR.IJ }),
                                    }),
                                    (0, p.jsxs)("div", {
                                        children: [
                                            (0, p.jsx)(C.D, { variant: "heading-md/semibold", children: h }),
                                            (0, p.jsx)(n4.E, {
                                                variant: "text-sm/normal",
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
                        (0, p.jsx)(n4.E, {
                            className: cR.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cb.A.parse(S, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, p.jsx)(cN.aF, {
                    renderModal: (e) =>
                        (0, p.jsx)(cL, {
                            ...e,
                            onClose: E,
                            onClaim: dM.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function cP(e) {
    let { redesign: t = !1 } = e,
        n = (0, _.yK)([cl.A], () => cl.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, ce.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, dU.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tJ.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tJ.Bu && !e.consumed) ?? [],
        [u, d] = K().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tJ.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = l.length + s.length > 0,
        g =
            t || !c
                ? null
                : (0, p.jsxs)("div", {
                      className: cR.N1,
                      children: [
                          (0, p.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.wFsj3B) }),
                          (0, p.jsx)(ls.c, { className: cR.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, p.jsxs)("div", {
                      className: cR.uo,
                      children: [
                          (0, p.jsx)(am.t, {
                              size: "md",
                              color: n1.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cR.PC,
                          }),
                          (0, p.jsx)(n4.E, {
                              variant: "text-md/normal",
                              className: cR.Qw,
                              children: V.intl.format(V.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tY.default)(), (0, ci.pX)(I.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, p.jsx)(ct.A, {
                              showGradient: !0,
                              className: cR.aA,
                              subscriptionTier: tJ.pe.TIER_2,
                              textOptions: { textOverride: V.intl.string(V.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, p.jsxs)("div", {
        children: [
            g,
            (0, p.jsx)(cn.A, {
                className: cR.Yj,
                isShown: !1 === i && c,
                type: cn.i.PREMIUM,
                hasBackground: !0,
                children: (0, p.jsxs)("div", {
                    className: cR.DE,
                    children: [
                        m,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, p.jsx)(cD, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, p.jsx)(cD, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, p.jsx)(
                                  cI,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tJ.FB,
                                  },
                                  (0, cs.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, p.jsx)(
                                  cI,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, cs.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, p.jsx)(
                                  cI,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, cs.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cG = (0, h.zZ)(S.X.MY_GIFTS_CATEGORY, {
        useTitle: cU,
        buildLayout: () => [cM],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, _.cf)(
                    [d9.A],
                    () => ({
                        claimedOutboundPromotionCodes: d9.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: d9.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, dU.T1)({ includeClaimedPromotions: !0 }),
                i = (0, d7.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    cM = (0, h.E2)(S.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cU()],
        Component: () => (0, p.jsx)(cP, { redesign: !0 }),
    });
function cU() {
    return V.intl.string(V.t.YzjdWJ);
}
var cV = n(339048),
    ck = (((o = {}).GIFT_INVENTORY = "gift_inventory"), o),
    cw = n(183636),
    cF = n(739508);
function cB() {
    var e, t;
    let n,
        i,
        l = (0, _.yK)([cl.A], () => cl.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        s = K().groupBy(l, (e) => (0, cs.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [r, a] = f.useState(!1);
    if (
        (f.useEffect(() => {
            (0, cV.XJ)().then(() => a(!0));
        }, []),
        (e = ck.GIFT_INVENTORY),
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
            let l = setTimeout(
                () => {
                    ((i.current = !0),
                        "focused" === cw.A.getState() &&
                            (0, cF.pM)(Error(`${e} load timed out`), {
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
        return (0, p.jsx)(oL.y, { className: cR.Lq });
    if (0 === Object.keys(s).length)
        return (0, p.jsxs)("div", {
            className: cR.p$,
            children: [
                (0, p.jsx)(uw.H, { className: cR.ks, children: V.intl.string(V.t.B1qgZn) }),
                (0, p.jsx)("p", {
                    className: cR.WO,
                    children: V.intl.format(V.t.HezvJ8, {
                        onClick: function () {
                            (0, na.openUserSettings)(S.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let o = K()
        .keys(s)
        .map((e) => {
            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, cs.X6)(e);
            return (0, p.jsx)(cI, { skuId: t, subscriptionPlanId: n, entitlements: s[e], giftStyle: i }, e);
        });
    return (0, p.jsx)(q.B, { gap: "lg", children: o });
}
let cz = (0, h.zZ)(S.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cY, buildLayout: () => [cX] }),
    cX = (0, h.E2)(S.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cY()], Component: () => (0, p.jsx)(cB, {}) });
function cY() {
    return V.intl.string(V.t.FWe6CP);
}
var cH = n(532446),
    cW = n(499454);
class cK extends f.Component {
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
                    (await (0, oV.Qp)(n),
                        (0, oV.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oR.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, cs.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await ca.Ay.resolveGiftCode(e);
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
                (0, cW.h)({ processedCode: e }),
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
        return (0, p.jsx)(n3.n, {
            label: e ? void 0 : V.intl.string(V.t["il+VCo"]),
            children: (0, p.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, p.jsxs)(cH.M, {
                    children: [
                        (0, p.jsx)(lp.k, {
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
function cZ(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, ul.c)({ location: "UserSettingsBilling" }),
        i = f.useContext(td.AnalyticsContext),
        l = (0, _.bG)([tu.A], () => tu.A.enabled);
    return (0, p.jsx)(cK, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let cq = (0, h.zZ)(S.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["il+VCo"]),
        buildLayout: () => [cQ],
        usePredicate: () => !(0, dV.Hp)(),
    }),
    cQ = (0, h.E2)(S.X.REDEEM_CODE_INPUT, {
        Component: () => (0, p.jsx)(cZ, { redesign: !0 }),
        useSearchTerms: () => [V.intl.string(V.t["jcSP+g"]), V.intl.string(V.t["il+VCo"])],
    }),
    cJ = (0, h.t_)(S.X.GIFT_PANEL, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        buildLayout: () => [dK, cq, cG, d6, cz, dw],
        initialize: () => {
            (dM.Ay.fetchClaimedOutboundPromotionCodes(), (0, dG.Ig)("gift_inventory") && (0, dv.o0)(dy.$.GIFTING));
        },
    }),
    c$ = (0, h.i4)(S.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        icon: uM.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, dU.IO)().length;
            return f.useMemo(() => ({ badgeType: T.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = ul.A.getConfig(e).enabled,
                n = dD.A.getConfig(e).enabled,
                i = dR(sx.default.getCurrentUser()?.storeCountry?.country).length > 0;
            return t && n && (0, dP.q)() && i
                ? [{ badgeType: T.Xi.NEW, dismissibleContent: eE.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }]
                : [];
        },
        buildLayout: () => [cJ],
    });
var c0 = n(659758),
    c1 = n(877607),
    c2 = n(877624),
    c3 = n(269115),
    c4 = n(462887),
    c5 = n(73825),
    c6 = n(531260),
    c8 = n(160946),
    c7 = n(721668),
    c9 = n(224016),
    ge = n(526292),
    gt = n(881489),
    gn = n(106512),
    gi = n(22118),
    gl = n(103411),
    gs = n(190187),
    gr = n(930861),
    ga = n(854627),
    go = n(889227),
    gu = n(326084),
    gd = n(851746),
    gc = n(664654),
    gg = n(912140),
    gm = n(953727);
let gA = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...l } = e;
        return (0, p.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gm.A)({ ...l }),
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
    gE = (e) => {
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
            ...(0, gm.A)({ ...i }),
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
var gh = n(387316),
    gS =
        (((u = {})[(u.NITRO_GEM = 0)] = "NITRO_GEM"),
        (u[(u.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (u[(u.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        u);
let gx = "url(#gradient)",
    gT = (e) => {
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
            [d, c] = f.useState(l);
        f.useEffect(() => {
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
                            return gx;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : gx;
                        default:
                            return;
                    }
                })(m, r);
        return (0, p.jsxs)("div", {
            className: gh.Ap,
            children: [
                (0, p.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: gh.fB,
                    children: [
                        (0, p.jsx)("circle", {
                            className: 0 === r || 2 === r ? gh.F3 : void 0,
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
                (0, p.jsx)("div", { className: gh.Vw, children: n }),
            ],
        });
    };
var gp = n(104773);
function gf(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        l = f.useMemo(() => (0, gg.A)({ legacyAssetId: t, skuId: n, size: v._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, p.jsx)("div", {
        className: gp.Q7,
        children: (0, p.jsx)("div", {
            className: gp.Nk,
            children: null != l && (0, p.jsx)("img", { className: gp.CH, alt: i, src: l }),
        }),
    });
}
let g_ = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: l,
            progressCircleStrokeSize: s,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = gS.NITRO_GEM,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: A,
            circleColor: E,
            circleStroke: h,
        } = e,
        S = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion),
        x = t && !S;
    return (0, p.jsx)("div", {
        className: ic()(gp.G3, n),
        children: (0, p.jsx)(gT, {
            animationClassName: ic()(gp._0, { [gp.uJ]: x, [A ?? ""]: x }),
            progressCircleStroke: h,
            progressCircleStrokeSize: s,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case gS.NITRO_GEM:
                        return (0, p.jsx)(gA, {
                            className: x ? gp.Ow : void 0,
                            backgroundColor: ic()(gp.vH, l),
                            backgroundCircleSize: r,
                        });
                    case gS.NITRO_LOGO:
                        return (0, p.jsx)(gE, { circleColor: E, ellipseOpacity: m });
                    case gS.AVATAR_DECO:
                        if (null != c)
                            return (0, p.jsx)(gf, {
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
var gI = n(14313);
function gN(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: l } = (0, ga.A)({ userId: t?.id, size: v._3.SIZE_32, animateOnHover: !0 }),
        s = null != t,
        r = s
            ? (0, p.jsx)(y.eu, { src: i, "aria-label": t.username, size: v._3.SIZE_32, ...l })
            : (0, p.jsx)(C.D, { variant: "heading-md/semibold", className: gI.n5, children: n });
    return (0, p.jsx)(lg.m, {
        text: V.intl.string(V.t.UnKHdo),
        shouldShow: !s,
        children: (0, p.jsx)("div", { className: gI.Lg, children: r }),
    });
}
function gC(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, p.jsxs)("div", {
        className: gI.Ip,
        children: [
            (0, p.jsx)("div", { className: gI.Ej }),
            (0, p.jsx)("div", { className: ic()({ [gI.ch]: t > n, [gI.q_]: t === n }) }),
        ],
    });
}
function gb(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        l = n < 2 ? null : t[1],
        s = n < 3 ? null : t[2];
    return (0, p.jsxs)("div", {
        className: gI.ZM,
        children: [
            (0, p.jsx)(gN, { userRecord: i, placement: 1 }),
            (0, p.jsx)(gC, { numSentReferrals: n, placement: 1 }),
            (0, p.jsx)(gN, { userRecord: l, placement: 2 }),
            (0, p.jsx)(gC, { numSentReferrals: n, placement: 2 }),
            (0, p.jsx)(gN, { userRecord: s, placement: 3 }),
        ],
    });
}
let gy = function () {
    let e = (0, _.bG)([gd.A], () => gd.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, gc.J)(),
        i = f.useMemo(() => t.map((e) => new go.A(e)), [t]),
        l = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === gu.aK.REDEEMED && l.redeemed++, e === gu.aK.CONVERTED && (l.redeemed++, l.converted++));
    });
    let s = l.sent === gc.Z,
        r = eb.A.getArticleURL(I.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, eX.Ay)(tk.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = f.useRef(null),
        u = (l.sent / gc.Z) * 100,
        d = (0, p.jsxs)("div", {
            className: gI.hE,
            children: [
                (0, p.jsx)(g_, { percentage: u, progressCircleVariation: gS.NITRO_LOGO, iconClassName: gI.ER }),
                (0, p.jsxs)("div", {
                    className: gI.Ns,
                    children: [
                        (0, p.jsx)(C.D, {
                            variant: "heading-xl/extrabold",
                            className: gI.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return V.intl.string(V.t.USo4s7);
                            })({ hasSentAll: s }),
                        }),
                        (0, p.jsx)(gb, { userRecords: i }),
                        (0, p.jsx)(n4.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? V.intl.format(V.t["TYu+MH"], { helpdeskArticle: i })
                                        : V.intl.format(V.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= gc.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: l }),
                        }),
                        (0, p.jsx)("div", {
                            className: gI.Fb,
                            children: (0, p.jsx)(gr.wL, {
                                "data-migration-pending": !0,
                                className: gI.r$,
                                color: s5.XD.CUSTOM,
                                onClick: () =>
                                    (function (e) {
                                        let { analyticsLocations: t } = e;
                                        (td.default.track(I.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                            location_stack: t,
                                        }),
                                            (0, lT.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("647658"),
                                                    n.e("618589"),
                                                ]).then(n.bind(n, 168457));
                                                return (n) => (0, p.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                            }));
                                    })({ analyticsLocations: a }),
                                onlyShineOnHover: !0,
                                children: (0, p.jsxs)("div", {
                                    className: gI.Zn,
                                    children: [
                                        (0, p.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: gI.QH,
                                        }),
                                        s ? V.intl.string(V.t.SY9tyI) : V.intl.string(V.t.Lm2nFc),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
        c = l.redeemed === gc.Z;
    return (0, p.jsx)(eX.f5, {
        value: a,
        children: (0, p.jsx)("div", {
            className: ic()(gI.kL, { [gI.AP]: c }),
            children: (0, p.jsx)("div", { ref: o, className: ic()(gI.d_, { [gI.kS]: c }), children: d }),
        }),
    });
};
var gv = n(194509),
    gj = n(465794),
    gO = n(774774),
    gL = n(156601),
    gR = n(543213),
    gD = n(88001),
    gP = n(899082),
    gG = n(487518);
let gM = "to_premium_home_button",
    gU = "premium home page";
function gV(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: l } = e,
        s = t.hasActiveTrial,
        r = t.planIdFromItems === tJ.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, c6.A)(),
        u = null != t.trialEndsAt ? im()(t.trialEndsAt).diff(im()(), "d") : 0,
        d = tJ.hd[t.planIdFromItems],
        c = aC.Ay.getDefaultPrice(d.id),
        g = aC.Ay.formatPriceString(c, d.interval);
    if (n || s) {
        let e = (0, c4.M)(l) ? gO.at.PREMIUM_TIER_2_WHITE_FILL : gO.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, p.jsxs)(p.Fragment, {
            children: [
                !s && (r || a)
                    ? (0, p.jsx)(gO.e4, { text: V.intl.string(V.t.EyjDRE), className: gG.LW, colorOptions: e })
                    : (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(gO.HU, {
                                  text: s ? V.intl.string(V.t.qYKftX) : V.intl.string(V.t.EyjDRE),
                                  className: gG.uS,
                                  colorOptions: e,
                              }),
                              (0, p.jsx)("div", { className: gG.on }),
                          ],
                      }),
                (0, p.jsx)(C.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: gG.KB,
                    children: (function () {
                        if (s) return V.intl.format(V.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, u8.$g)(c.amount, c.currency);
                            return V.intl.format(gP.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? V.intl.format(V.t.z2oQtA, {
                                  percent: i?.percentage ?? tJ.Cq,
                                  regularPrice: g,
                                  renewalDate: aC.Ay.getExpectedRenewalDate(t, o),
                              })
                            : V.intl.formatToPlainString(V.t["3ZiutU"], {
                                  percent: i?.percentage ?? tJ._$,
                                  regularPrice: g,
                                  numMonths: i?.duration ?? tJ.OJ,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, p.jsx)(gL.A, { variant: void 0, subscriptionTier: tJ.pe.TIER_2, interval: d.interval });
}
function gk() {
    let e = (0, ge.k5)(),
        t = (0, ge.nf)(),
        n = (0, cC.Ay)(),
        i = (0, _.bG)([ur.A], () => ur.A.getPremiumTypeSubscription()),
        l = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        s = l?.isPremiumWithPremiumGroup(),
        r = (0, c6.A)(),
        a = (0, gt.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !s) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, p.jsxs)("div", {
        className: ic()(gG.$Y, { [gG.J5]: e || d }),
        children: [
            (0, p.jsxs)("div", {
                className: gG.jp,
                children: [
                    s
                        ? (0, p.jsx)(C.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: gG._K,
                              children: (0, gD.DP)(),
                          })
                        : (0, p.jsx)(c9.A, { className: gG.TJ }),
                    s && !e
                        ? (0, p.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, p.jsxs)(p.Fragment, {
                                children: [
                                    (0, p.jsx)(gO.e4, {
                                        text: V.intl.string(V.t.uXF4c4),
                                        className: gG.LW,
                                        colorOptions: gO.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, p.jsx)(C.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: gG.sQ,
                                        children: V.intl.format(V.t.sK7fGl, {
                                            helpCenterLink: eb.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, p.jsx)(gV, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(gO.HU, {
                                            text: V.intl.string(V.t.qYKftX),
                                            className: gG.uS,
                                            colorOptions: (0, c4.M)(n)
                                                ? gO.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gO.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, p.jsx)(C.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: gG.KB,
                                            children: V.intl.format(V.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, p.jsx)(gR.ZP, {
                        featureSet: l?.isPremiumGroupPrimary()
                            ? gR.Nz.PREMIUM_GROUP_PRIMARY
                            : l?.isPremiumGroupMember()
                              ? gR.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? gR.Nz.FRACTIONAL_PREMIUM
                                : gR.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, p.jsxs)(s8.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, p.jsx)(gj.A, {
                                      defaultTextOverride: a ? V.intl.string(V.t.YScQSF) : V.intl.string(V.t["0b3YRn"]),
                                  }),
                                  (0, p.jsx)(j.$, {
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gM,
                                              target: gU,
                                          }),
                                              (0, tY.default)(),
                                              (0, ci.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: a ? V.intl.string(V.t.VR2iVB) : V.intl.string(V.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, p.jsxs)(s8.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, p.jsx)(j.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gM,
                                              target: gU,
                                          }),
                                              (0, tY.default)(),
                                              (0, ci.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      text: V.intl.string(V.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, p.jsx)(j.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, na.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL));
                                      },
                                      text: V.intl.string(V.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, p.jsx)("div", {
                className: gG.ah,
                children: (0, p.jsx)("img", { className: gG.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function gw() {
    return (0, p.jsxs)("div", {
        className: gG.T1,
        children: [
            (0, p.jsx)("img", { className: gG.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, p.jsxs)("div", {
                className: gG.b4,
                children: [
                    (0, p.jsx)(C.D, {
                        className: gG.Vz,
                        variant: "heading-xl/extrabold",
                        children: V.intl.string(V.t["3KomGa"]),
                    }),
                    (0, p.jsx)(n4.E, {
                        className: gG.Oi,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.yQ06u1),
                    }),
                    (0, p.jsx)(gv.A, {
                        className: ic()(gG.Tp, gG._c),
                        textOptions: { textOverride: V.intl.string(V.t.Ve9Ge6), textClassName: gG.VV },
                        color: s5.$n.Colors.CUSTOM,
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
let gF = function () {
        let e = (0, dV.Hp)(),
            { analyticsLocations: t } = (0, eX.Ay)(tk.A.PREMIUM_SETTINGS),
            n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
            i = (0, _.bG)([ur.A], () => ur.A.getPremiumTypeSubscription()),
            l = (0, _.bG)([ur.A], () => ur.A.hasFetchedSubscriptions()),
            s = (0, c8.Y)(tJ.T7),
            [r, a] = f.useState(!0),
            o = (0, c6.A)({ forceFetch: !0 }),
            u = (0, _.bG)([d9.A], () => {
                let e = d9.A.getMarketingComponentByType(c2.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oz.Fr || oz.v1) && null != u,
            c = f.useRef(null);
        (0, gs.i)();
        let g = (0, gl.m)();
        f.useEffect(() => {
            !(async function () {
                (e || (await Promise.all([oU.hP(), oU.$o(), (0, c5.zS)(null, null, I.tF5.DISCOVERY)])), a(!1));
            })();
        }, [e]);
        let [m, A] = f.useState(!1);
        if (e) return (0, p.jsx)(d_.uK, {});
        let E = l && null !== i && s,
            h = o.fetched && o.isFractionalPremiumActive,
            S = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !S) return (0, p.jsx)(c7.A, { title: V.intl.string(V.t.dyq9TR), note: null });
        if ((!E && !h && !S) || r) return (0, p.jsx)(oL.y, {});
        let x = !!i?.hasActiveTrial;
        return (0, p.jsx)(eX.f5, {
            value: t,
            children: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsxs)(q.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, p.jsx)(gn.m, { config: u }),
                            (0, p.jsx)(gk, {}),
                            g && (0, p.jsx)(gy, {}),
                            !d && (0, p.jsx)(gw, {}),
                            (0, p.jsx)(gi.A, {
                                hideCTAs: !0,
                                headingOverride: V.intl.string(V.t.dnVvQS),
                                hidePill: !x,
                                selectedPlanColumnClassName: gG.JG,
                                selectedPlanTier: tJ.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, p.jsx)(c3.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (td.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, p.jsx)("div", { ref: c, className: gG._Z }),
                    }),
                ],
            }),
        });
    },
    gB = (0, h.E2)(S.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return (0, aC.YE)(e, tJ.PremiumTypes.TIER_2) ? (0, p.jsx)(gF, {}) : (0, p.jsx)(c1.A, {});
        },
        useSearchTerms: () => [V.intl.string(V.t.Ipxkog)],
    }),
    gz = (0, h.zZ)(S.X.NITRO_CATEGORY, { buildLayout: () => [gB] }),
    gX = (0, h.t_)(S.X.NITRO_PANEL, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        useObscuredNotice: of.L,
        buildLayout: () => [gz],
    }),
    gY = (0, h.i4)(S.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        icon: am.t,
        usePersistentBadge: function (e) {
            let t = (0, c0.e)(e);
            return f.useMemo(() => ({ badgeType: T.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gX],
    });
var gH = n(104510),
    gW = n(820739),
    gK = n(859241),
    gZ = n(527113),
    gq = n(338548),
    gQ = n(776096),
    gJ = n(711014),
    g$ = n(178368),
    g0 = n(809545),
    g1 = n(168482);
function g2() {
    return (0, p.jsxs)("div", {
        className: g0.iE,
        children: [
            (0, p.jsx)("img", { className: g0.Kk, alt: "", src: g1 }),
            (0, p.jsxs)("div", {
                className: g0.pq,
                children: [
                    (0, p.jsx)(n4.E, { variant: "text-lg/bold", children: V.intl.string(V.t.ZHNSYf) }),
                    (0, p.jsx)(n4.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: V.intl.string(V.t.kCj5ps),
                    }),
                ],
            }),
            (0, p.jsx)(j.$, {
                variant: "secondary",
                text: V.intl.string(V.t.JFlifp),
                onClick: function () {
                    ((0, ci.pX)(I.BVt.GUILD_DISCOVERY), (0, tY.default)());
                },
            }),
        ],
    });
}
var g3 = n(365199),
    g4 = n(464120),
    g5 = n(443865),
    g6 = n(980707),
    g8 = n(473145);
function g7(e) {
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
        case I.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = V.intl.string(V.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case I.Dmq.PAUSE_PENDING:
        case I.Dmq.PAUSED:
            a === tJ.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = V.intl.string(V.t.LiLRRT)),
                (o.cancel.subtext = V.intl.string(V.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = f.useMemo(
        () =>
            s.isPausedOrPausePending && a === tJ.xc.NONE
                ? (0, p.jsx)(ti.Dr, {
                      id: "manage-subscription",
                      label: V.intl.string(V.t.obRG6Y),
                      action: () => (0, na.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: g5.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: g5.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, p.jsxs)(g6.W, {
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
                    (0, lT.openModalLazy)(async () => {
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
                            (0, p.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: I.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, g8.I5)(t)
                ? (0, p.jsx)(ti.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, lT.openModalLazy)(async () => {
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
                          (0, lT.openModalLazy)(async () => {
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
var g9 = n(545934),
    me = n(548118),
    mt = n(987144),
    mn = n(864310),
    mi = n(290413);
function ml(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, mn.A)(t.id);
    return (0, p.jsxs)("div", {
        className: n ?? mi.OA,
        children: [
            (0, p.jsx)(me.Ay, { className: mi.$f, guild: t, size: me.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: mi.gI,
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, p.jsxs)("div", {
                        className: mi.ew,
                        children: [
                            (0, p.jsxs)("div", {
                                className: mi.QW,
                                children: [
                                    (0, p.jsx)(gH._, {
                                        className: mi.Wz,
                                        color: n1.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== I.TVA.NONE &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)("div", { className: mi.zk }),
                                        (0, p.jsx)(n4.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, g8.gb)(t.premiumTier, { useLevels: !1 }),
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
function ms(e) {
    let { guildId: t } = e,
        n = (0, _.bG)([lv.A], () => lv.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: mi.Nr,
              children: [
                  (0, p.jsx)(ml, { guild: n }),
                  (0, p.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gH._,
                      text: V.intl.string(V.t.aBHecF),
                      onClick: () => {
                          (0, mt.g)({
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
var mr = n(747381);
let ma =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mo(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = f.useRef(null),
        a = (0, g8.I5)(t),
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, c6.A)(),
        c = f.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === I.TVA.NONE) return "";
                    let n = [
                        V.intl.formatToPlainString(V.t["dLlKX/"], { numEmojiSlots: tJ.TG[e].limits.emoji }),
                        V.intl.formatToPlainString(V.t["+ANIfv"], { numStickerSlots: tJ.TG[e].limits.stickers }),
                        V.intl.formatToPlainString(V.t["4gt60b"], {
                            numSoundboardSlots: tJ.TG[e].limits.soundboardSounds,
                        }),
                        V.intl.formatToPlainString(V.t.XahSjZ, {
                            resolution: tJ.TG[e].limits.screenShareQualityResolution,
                            framerate: tJ.TG[e].limits.screenShareQualityFramerate,
                        }),
                        V.intl.formatToPlainString(V.t.NbNs7S, { bitrate: tJ.TG[e].limits.bitrate / 1e3 }),
                        V.intl.formatToPlainString(V.t.VVKcpn, { filesize: tJ.TG[e].limits.fileSize / 1024 / 1024 }),
                        V.intl.formatToPlainString(V.t.TbpCvv, { numVideoStageSeats: tJ.TG[e].limits.stageVideoUsers }),
                        V.intl.string(V.t.LDyX3i),
                        V.intl.string(V.t.YtGlPW),
                    ];
                    (e >= I.TVA.TIER_2 && (n.push(V.intl.string(V.t.SztbtN)), n.push(V.intl.string(V.t["3GK91n"]))),
                        e >= I.TVA.TIER_3 && n.push(V.intl.string(V.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return V.intl.formatToPlainString(V.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        g = f.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? oB.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return V.intl.formatToPlainString(V.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = f.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, p.jsxs)("div", {
        className: ic()(mr.iq, { [mr.Mt]: s }),
        children: [
            (0, p.jsxs)("div", {
                className: mr.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mr.bB, src: ma }),
                    A
                        ? (0, p.jsx)(n4.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: V.intl.format(V.t.Z4ULRD, { date: m }),
                          })
                        : (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(n4.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: mr.zk }),
                                              (0, p.jsx)(n4.E, {
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
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: mr.zk }),
                                              (0, p.jsx)(n4.E, {
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
            (0, p.jsx)(af.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, p.jsx)(g7, {
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
                    (0, p.jsx)(n5.D, {
                        innerRef: r,
                        "aria-label": V.intl.string(V.t.PdRCRg),
                        className: mr.Mj,
                        ...e,
                        children: (0, p.jsx)(g3.MoreHorizontalIcon, {
                            size: "xs",
                            color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function mu(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, _.bG)([lv.A], () => lv.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: mr.Nr,
        children: [
            (0, p.jsx)("div", {
                className: mr.MY,
                children:
                    null != s
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(ml, { guild: s, className: mr.OA }),
                                  (0, p.jsx)(j.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: V.intl.string(V.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tY.default)(),
                                              (0, g4.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: I.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, p.jsx)("div", {
                              className: mr.OA,
                              children: (0, p.jsx)(C.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, p.jsx)(
                    mo,
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
function md(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = f.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                g9.A.createFromServer(
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
                if ((!(0, g8.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in s || (s[e] = []), s[e].push(i));
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > aC.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, p.jsx)("div", {
        className: mr.kR,
        children: oB.default
            .keys(s)
            .map((e) => (0, p.jsx)(mu, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var mc = n(502572),
    mg = n(983511),
    mm = n(342744),
    mA = n(496431);
let mE = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, mA.A)(n);
    return (0, p.jsx)(n4.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iA.uN)(i, { days: V.t.WUTPDc, hours: V.t.c1qodV, minutes: V.t["2+A3dv"] }),
    });
};
var mh = n(731536);
function mS(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, _.bG)([ur.A], () => ur.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = f.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, g8.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? aC.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === tJ.xc.NONE;
    return 0 === s.length
        ? null
        : (0, p.jsxs)("div", {
              className: mh.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: mh.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: mh._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: mh.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: mh.F8, src: ma }),
                                          (0, p.jsx)("div", {
                                              className: ic()(mh.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: mh.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: mh.Qp,
                                      children: [
                                          (0, p.jsx)(n4.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: V.intl.format(V.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, p.jsx)(n4.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: V.intl.format(V.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, p.jsx)(mc.A, {
                              shouldShow: o,
                              text: V.intl.string(V.t.mOWsF1),
                              "aria-label": V.intl.string(V.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(j.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gH._,
                                      text: V.intl.string(V.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, lT.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("378357"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, p.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, mt.g)({
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
                  s.map((e, t) =>
                      (0, p.jsx)(
                          mx,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, g8.I5)(e),
                              isCanceled: (0, g8.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mx(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = f.useRef(null),
        u = f.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = s ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, p.jsx)(mE, { cooldown: u.getTime() })
            : null != d
              ? (0, p.jsx)(n4.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: V.intl.format(V.t.Z4ULRD, { date: d }),
                })
              : (0, p.jsx)(n4.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: V.intl.string(V.t["2mcafz"]),
                });
    let c = l || s;
    return (0, p.jsxs)("div", {
        className: ic()(mh.iq, { [mh.Mt]: i }),
        children: [
            (0, p.jsxs)("div", {
                className: mh.kd,
                children: [(0, p.jsx)("img", { alt: "", className: mh.bB, src: ma }), t],
            }),
            c &&
                (0, p.jsx)(af.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsxs)(g6.W, {
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
                                                (0, lT.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(mg.default, { ...e, guildBoostSlot: n }),
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
                                                (0, lT.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(mm.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, p.jsx)(n5.D, {
                            innerRef: o,
                            "aria-label": V.intl.string(V.t["UKOtz+"]),
                            className: mh.Mj,
                            ...e,
                            children: (0, p.jsx)(g3.MoreHorizontalIcon, {
                                size: "xs",
                                color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var mT = n(834612);
function mp(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = eb.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && s !== tJ.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, p.jsxs)("div", {
              className: mT.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: mT.b,
                      children: [
                          (0, p.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.W5rDjW) }),
                          (0, p.jsx)(n4.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: V.intl.format(V.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(md, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, p.jsx)(mS, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var mf = n(333722),
    m_ = n(9146);
function mI() {
    return (0, p.jsxs)("div", {
        className: m_.iE,
        children: [
            (0, p.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: m_.kR,
                children: mf.s.map((e, t) => {
                    let n = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: m_.Nr,
                            children: [
                                (0, p.jsx)(n, { className: m_.Kk }),
                                (0, p.jsx)(n4.E, {
                                    className: m_.h_,
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
var mN = n(847374),
    mC = n(232122),
    mb = n(665984);
function my() {
    let [e, t] = f.useState(null),
        [n, i] = f.useState(null);
    return (0, p.jsxs)("div", {
        className: mb.iE,
        children: [
            (0, p.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: mb.p_,
                children: mC.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        n5.D,
                        {
                            tag: "li",
                            className: ic()(mb.Aw, { [mb.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: mb.k7,
                                    children: [
                                        (0, p.jsx)(n4.E, {
                                            className: mb.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, p.jsx)(mN.a, {
                                            size: "sm",
                                            color: n1.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mb.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(n4.E, {
                                        className: mb.ZF,
                                        color: "text-muted",
                                        variant: "text-sm/medium",
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
var mv = n(182859),
    mj = n(959456),
    mO = n(416763);
function mL() {
    let e = eb.A.getArticleURL(I.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: mO.wx,
        children: [
            (0, p.jsxs)("div", {
                className: mO.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: mO.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mO.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(mj.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, p.jsx)(n4.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: V.intl.format(V.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, p.jsx)(mv.A, {
                variant: "member",
                className: mO.iO,
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
var mR = n(315629),
    mD = n(87719),
    mP = n(961085);
function mG() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
    if (null == e || aC.Ay.hasFreeBoosts(e)) return null;
    let t = eb.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mR.h, {
        color: "nitro-pink",
        className: mP.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mP.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mP.q3, src: ma }),
                    (0, p.jsxs)("div", {
                        className: mP.Tm,
                        children: [
                            (0, p.jsx)(n4.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.Idh1Vs, { count: tJ.M4, boostCount: tJ.M4 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mP.xv,
                                children: [
                                    (0, p.jsx)(am.t, { className: mP.nE }),
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["6UAu+f"], {
                                            count: tJ.M4,
                                            boostCount: tJ.M4,
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
                icon: am.t,
                text: V.intl.string(V.t["8x0jKT"]),
                onClick: mD.e,
            }),
        ],
    });
}
var mM = n(532991);
function mU() {
    let e = (0, _.bG)([gQ.A], () => gQ.A.affinities),
        t = (0, _.bG)([gJ.Ay], () => gJ.Ay.getFlattenedGuildIds()),
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
        : (0, p.jsxs)("div", {
              className: mM.i,
              children: [
                  (0, p.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: mM.k, children: n.map((e) => (0, p.jsx)(ms, { guildId: e }, e)) }),
              ],
          });
}
var mV = n(967246);
function mk(e) {
    let { count: t } = e,
        i = eb.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mR.h, {
        color: "nitro-pink",
        className: mV.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mV.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mV.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mV.F8, src: ma }),
                            (0, p.jsx)("div", {
                                className: ic()(mV.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mV.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mV.Tm,
                        children: [
                            (0, p.jsx)(n4.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mV.xv,
                                children: [
                                    (0, p.jsx)(am.t, { className: mV.nE }),
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["6UAu+f"], {
                                            count: tJ.M4,
                                            boostCount: tJ.M4,
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
                icon: gH._,
                text: V.intl.string(V.t.BMx1iy),
                onClick: () => {
                    (0, lT.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, p.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, mt.g)({
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
var mw = n(89150);
function mF(e) {
    let { premiumSubscription: t } = e,
        n = (0, _.bG)([g$.A], () => g$.A.boostSlots),
        i = f.useMemo(() => Object.values(n), [n]),
        l = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        s = (0, _.bG)([gQ.A], () => gQ.A.affinities),
        r = (0, _.bG)([gJ.Ay], () => gJ.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = (0, _.bG)([gK.A], () => gK.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, c6.A)({ forceFetch: !0 }),
        d = l?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === tJ.xc.NONE,
        g = f.useMemo(() => {
            if (null == t || c) return 0;
            let e = aC.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, p.jsxs)("div", {
        className: mw.GO,
        children: [
            (0, p.jsx)(d_.kb, { className: mw.ek }),
            (0, p.jsx)(mL, {}),
            (0, p.jsx)(mG, {}),
            g > 0 && (0, p.jsx)(mk, { count: g }),
            d && (0, p.jsx)(gq.A, {}),
            !a && (0, p.jsx)(g2, {}),
            (0, p.jsxs)("div", {
                className: mw.C_,
                children: [
                    (0, p.jsx)(mp, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, p.jsx)(mU, {}),
                    (0, p.jsx)(gZ.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(mI, {}),
                    (0, p.jsx)(my, {}),
                ],
            }),
        ],
    });
}
var mB = n(819677);
let mz = (0, h.E2)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            f.useEffect(() => {
                (oU.hP(), oU.$o(), (0, gW.CD)(), (0, c5.zS)(null, null, I.tF5.DISCOVERY), (0, gW.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, _.cf)([ur.A], () => ({
                    hasFetchedSubscriptions: ur.A.hasFetchedSubscriptions(),
                    premiumSubscription: ur.A.getPremiumTypeSubscription(),
                })),
                n = (0, c8.Y)(),
                i = (0, _.bG)([us.A], () => us.A.hasFetchedPaymentSources),
                l = (0, _.bG)([gK.A], () => gK.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = f.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, p.jsx)("div", { className: ic()(mB.kL, mB.Lq), children: (0, p.jsx)(oL.y, {}) })
                : (0, p.jsxs)("div", {
                      className: mB.kL,
                      children: [
                          (0, p.jsx)("div", { className: mB.Tp }),
                          (0, p.jsx)("div", { className: mB.Qs, children: (0, p.jsx)(mF, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t["+CbP2v"]), V.intl.string(V.t.Nn1lJy)],
    }),
    mX = (0, h.zZ)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mz] }),
    mY = (0, h.t_)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        buildLayout: () => [mX],
    }),
    mH = (0, h.i4)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        icon: gH._,
        buildLayout: () => [mY],
    });
var mW = n(153659),
    mK = n(155984),
    mZ = n(357758),
    mq = n(262077),
    mQ = n(281445),
    mJ = n(624479),
    m$ = n(626584),
    m0 = n(131607),
    m1 = n(196736),
    m2 = n(685743),
    m3 = n(349085),
    m4 = n(342942),
    m5 = n(376205),
    m6 = n(252589),
    m8 = n(758836),
    m7 = n(49999),
    m9 = n(135570),
    Ae = n(439050);
let At = new m$.A("GameServerSubscriptionsSection");
function An(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function Ai(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let Al = f.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, m3.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, m0.kn)([eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = cE.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, m2.A)(c, t.id, tk.A.GAME_SERVER_PAGE, t.serverIp),
        A = f.useCallback(() => {
            (0, m4.A)({
                provider: mQ.X.SHOCKBYTE,
                onAccept: () => {
                    (u(m7.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: E,
            priceLabel: h,
            dateLabel: S,
            isCanceled: x,
            isDanger: T,
        } = (0, _.bG)(
            [ur.A, cS.A],
            () => {
                let e = null != s ? ur.A.getSubscriptionById(s) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? cS.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? V.intl.formatToPlainString(V.t.AbOLNu, { price: (0, u8.$g)(u, o.priceCurrency) })
                            : null,
                    c = An(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? V.intl.formatToPlainString(m9.default["3aEgK6"], { date: c })
                        : l
                          ? V.intl.formatToPlainString(m9.default.KFSA3M, { date: c })
                          : V.intl.formatToPlainString(m9.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, n, i],
            Ai,
        ),
        N = f.useCallback(() => {
            if (null == s) return;
            let e = ur.A.getSubscriptionById(s),
                t = null != e ? An(e.currentPeriodEnd) : "";
            (0, n2.A)({
                title: V.intl.string(m9.default.TEYPNR),
                subtitle: V.intl.formatToPlainString(m9.default.XR1WrB, { date: t }),
                confirmText: V.intl.string(V.t["cY+Oob"]),
                cancelText: V.intl.string(m9.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oU.M2(s, l), await oU.hP());
                    } catch (e) {
                        At.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        C = f.useCallback(() => {
            if (null == s) return;
            let e = ur.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? cS.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, u8.$g)(u, o.priceCurrency) : "",
                c = An(e.currentPeriodEnd);
            (0, n2.A)({
                title: V.intl.string(m9.default.o96qbc),
                subtitle: V.intl.formatToPlainString(m9.default["7n6Qq+"], { price: d, date: c }),
                confirmText: V.intl.string(V.t.iIvF2z),
                cancelText: V.intl.string(V.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, c5.ur)(r);
                        let t = e.items;
                        (await oU.nV(
                            e,
                            { status: I.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, aC.UC)(t, e.currency),
                            l,
                        ),
                            await oU.hP());
                    } catch (e) {
                        At.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, n, i]),
        b = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, p.jsxs)("div", {
        className: Ae.nM,
        children: [
            (0, p.jsxs)("div", {
                className: Ae.M4,
                children: [
                    (0, p.jsxs)("div", {
                        className: Ae.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, p.jsx)("img", { className: Ae.uP, src: a, alt: "" }),
                            (0, p.jsx)("div", { className: Ae.tw }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: Ae.CR,
                        children: [
                            (0, p.jsx)(n4.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, p.jsx)(n4.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            b &&
                                (d
                                    ? (0, p.jsxs)("div", {
                                          className: Ae.CQ,
                                          children: [
                                              (0, p.jsx)(n4.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, p.jsx)(n5.D, {
                                                  className: Ae.cL,
                                                  onClick: g,
                                                  "aria-label": V.intl.string(V.t.OpuAlK),
                                                  children: m
                                                      ? (0, p.jsx)(dt.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, p.jsx)(mJ.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, p.jsx)(uK.A, { onClick: A, children: V.intl.string(m9.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: Ae.Rd,
                children: [
                    (0, p.jsxs)("div", {
                        className: Ae.Ff,
                        children: [
                            null != h &&
                                (0, p.jsx)(n4.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: h,
                                }),
                            null != S &&
                                (T
                                    ? (0, p.jsxs)("div", {
                                          className: Ae.ez,
                                          children: [
                                              (0, p.jsx)(i$.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, p.jsx)(n4.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: S,
                                              }),
                                          ],
                                      })
                                    : (0, p.jsx)(n4.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: S,
                                      })),
                        ],
                    }),
                    E &&
                        (x
                            ? (0, p.jsx)(j.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: V.intl.string(V.t.iIvF2z),
                                  onClick: C,
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
function As(e) {
    let { servers: t } = e,
        n = (0, m1.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, m6.Y)(),
        l = (0, _.bG)([sx.default], () => aC.Ay.canUseShopDiscounts(sx.default.getCurrentUser())),
        s = f.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, _.yK)([ur.A], () => (0, m5.HY)(t, i, (e) => ur.A.getSubscriptionById(e)), [t, i]);
    f.useEffect(() => {
        let e = r.filter((e) => !cS.A.isLoadedForSKU(e) && !cS.A.isFetchingForSKU(e));
        e.length > 0 && (0, c5.jv)(e).catch(() => {});
    }, [r]);
    let a = f.useCallback(() => {
        ((0, tY.default)(), (0, ci.pX)(I.BVt.COLLECTIBLES_SHOP_WITH_TAB(m8.G2.GAME_SERVERS)));
    }, []);
    return (0, p.jsxs)("div", {
        className: Ae.uW,
        children: [
            (0, p.jsxs)("div", {
                className: Ae.wx,
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: V.intl.string(m9.default.vCzwM7),
                    }),
                    (0, p.jsxs)("div", {
                        className: Ae.h_,
                        children: [
                            (0, p.jsx)(n4.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.string(m9.default.y85Eg9),
                            }),
                            n &&
                                (0, p.jsx)(uK.A, {
                                    onClick: a,
                                    children: (0, p.jsx)(n4.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: V.intl.string(m9.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", {
                className: Ae.p_,
                children: t.map((e) =>
                    (0, p.jsx)(Al, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var Ar = n(55766),
    Aa = n(696986),
    Ao = n(364036);
function Au(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["KzCF/6"]) }),
            (0, p.jsx)(Aa.h, { size: 4 }),
            (0, p.jsx)(n4.E, { variant: "text-md/normal", className: Ao.yV, children: V.intl.string(V.t["3D7qCu"]) }),
            (0, p.jsx)(Aa.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: Ao.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: Ao.RI }),
                    (0, p.jsxs)("div", {
                        className: Ao.FS,
                        children: [
                            (0, p.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: Ao.wx,
                                children: V.intl.string(V.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(n4.E, {
                                variant: "text-md/normal",
                                className: Ao.h_,
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
var Ad = n(872351),
    Ac = n(9113),
    Ag = n(599941),
    Am = n(384684),
    AA = n(2242);
let AE = [];
var Ah = n(885574),
    AS = n(62010),
    Ax = n(912851),
    AT = n(182744);
let Ap = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, p.jsx)(n5.D, {
        onClick: i ? void 0 : n,
        className: AT.x6,
        children: (0, p.jsxs)("div", {
            className: AT.hQ,
            children: [
                i
                    ? (0, p.jsx)(oL.y, { type: oL.y.Type.PULSING_ELLIPSIS, className: AT.__invalid_spinner })
                    : (0, p.jsx)(n4.E, { variant: "text-md/medium", className: AT.Pf, children: t }),
                (0, p.jsx)(mN.a, { size: "md", color: "currentColor", className: AT.UE }),
            ],
        }),
    });
};
var Af = n(465932),
    A_ = n(543767),
    AI = n(951555),
    AN = n(790284),
    AC = n(636194),
    Ab = n(624456),
    Ay = n(710144),
    Av = n(815332),
    Aj = n(162093),
    AO = n(557506);
function AL(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: l, onClose: s } = e,
        r = (0, tK.GV)(),
        { analyticsLocations: a } = (0, eX.Ay)(tk.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = f.useState(!1),
                [i, l] = f.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return (n(!0), await oU.M2(t, e), !0);
                    } catch (e) {
                        l(e);
                    } finally {
                        n(!1);
                    }
                },
                error: i,
                submitting: t,
            };
        })(a);
    async function c() {
        (await o(l.id)) && s();
    }
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === AA.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === AA.bN.INTANGIBLE),
        A = im()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = V.intl.formatToPlainString(V.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, p.jsx)(lx.a, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: V.intl.string(V.t.EP6EPb), variant: "secondary", onClick: s },
            { variant: "critical-primary", text: V.intl.string(V.t.F6lUDF), onClick: c, loading: d },
        ],
        title: V.intl.string(V.t.O6l5tM),
        subtitle: E,
        onClose: s,
        children: (0, p.jsxs)(q.B, {
            gap: 8,
            children: [
                null != u ? (0, p.jsx)(iK.w, { type: "critical", message: u.message, role: "alert" }) : null,
                (0, p.jsx)(Aj.x, { listingId: i.id, guildId: n.guild_id, className: AO.P }),
            ],
        }),
    });
}
var AR = n(319225),
    AD = n(746080),
    AP = n(883616);
function AG(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, p.jsxs)("div", {
        className: AP.L0,
        children: [
            (0, p.jsxs)("div", {
                className: AP.a5,
                children: [
                    (0, p.jsx)(C.D, { variant: "heading-deprecated-12/semibold", className: AP.HU, children: t }),
                    i &&
                        (0, p.jsx)(lg.m, {
                            text: l,
                            children: (0, p.jsx)(Ah.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: AP.Mo,
                            }),
                        }),
                ],
            }),
            (0, p.jsx)(C.D, { variant: "heading-xl/semibold", className: AP.sx, children: n }),
        ],
    });
}
function AM(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eX.Ay)(),
        [i] = (0, A_.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tk.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [l, s] = (0, _.yK)([us.A], () => [us.A.hasFetchedPaymentSources, us.A.paymentSourceFetchError]);
    return null != i && (l || s)
        ? (0, p.jsx)(AI.A, { subscription: t, currentInvoicePreview: i })
        : (0, p.jsx)(oL.y, {});
}
function AU(e) {
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
        : (0, p.jsx)(lu.D, {
              label: V.intl.string(V.t["4neDM+"]),
              children: (0, p.jsx)("div", {
                  className: AP.__invalid_rowButtons,
                  children: n
                      ? (0, p.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.y3mAE4), onClick: r, loading: i })
                      : (0, p.jsxs)(p.Fragment, {
                            children: [
                                !t && !l && (0, p.jsx)(Ap, { label: V.intl.string(V.t.FRbWR8), onClick: a }),
                                (0, p.jsx)(Ap, { label: V.intl.string(V.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let AV = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, Ab.M)(e),
                n = (0, _.bG)([AC.A], () => AC.A.getSubscriptionListingForPlan(t)),
                i = (0, _.bG)([AC.A], () =>
                    null != n ? AC.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, _.bG)([lv.A], () => lv.A.getGuild(i?.guild_id)),
                [s, r] = f.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, Ag.XE)();
            f.useEffect(() => {
                s && null != l && null == AC.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = im()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, u8.$g)(t.price, t.currency) : "",
                              l = im()(t.createdAt).format("M/D/YY"),
                              s = t.status === I.Dmq.CANCELED,
                              r = t.status === I.Dmq.PAST_DUE,
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
        [o, u] = f.useState(!1),
        d = (0, tK.GV)(),
        { analyticsLocations: c } = (0, eX.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: g } = (0, Af.MH)(l?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await oU.QP(t, c),
                (0, AR.E)({ title: V.intl.string(V.t.oPV2cy), body: V.intl.string(V.t.DdRizV) }));
        } finally {
            u(!1);
        }
    }
    let {
            isCancelled: E,
            isPastDue: h,
            subscriptionPrice: x,
            memberSince: T,
            nextRenewalDate: N,
            nextRenewalLabel: C,
            isTrial: b,
        } = a,
        y = n.soft_deleted || null == l || m;
    return (0, p.jsxs)("div", {
        className: AP.kL,
        children: [
            (0, p.jsx)(Ay.A, {
                onClick: r,
                className: AP.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            null != l && (0, p.jsx)(me.Ay, { guild: l, active: !0, size: me.Ay.Sizes.MEDIUM }),
                            (0, p.jsxs)("div", {
                                className: AP.if,
                                children: [
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-md/medium",
                                        className: AP.J5,
                                        children: null != l ? l.name : V.intl.string(V.t["He+cmd"]),
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: AP.xp,
                                        children: [
                                            (0, p.jsx)(n4.E, {
                                                variant: "text-sm/normal",
                                                className: AP.KR,
                                                children: n.name,
                                            }),
                                            E
                                                ? (0, p.jsx)(AS.E, {
                                                      type: { text: V.intl.string(V.t["7uFZGt"]) },
                                                      variant: "critical",
                                                  })
                                                : b
                                                  ? (0, p.jsx)(AS.E, {
                                                        type: { text: V.intl.string(V.t["6anton"]) },
                                                        variant: "primary",
                                                    })
                                                  : h
                                                    ? (0, p.jsx)(lg.m, {
                                                          text: V.intl.string(V.t.eSuJE2),
                                                          children: (0, p.jsx)("div", {
                                                              className: AP.qc,
                                                              children: (0, p.jsx)(AS.E, {
                                                                  type: { text: V.intl.string(V.t.NrRwIl) },
                                                                  variant: "warning",
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            m
                                                ? (0, p.jsx)(lg.m, {
                                                      text: V.intl.string(V.t.nv1IqK),
                                                      children: (0, p.jsx)("div", {
                                                          className: AP.Bi,
                                                          children: (0, p.jsx)(AS.E, {
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
                            (0, p.jsx)(n5.D, {
                                onClick: i(r),
                                "aria-label": V.intl.string(V.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, p.jsx)(mN.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ic()(AP.D6, { [AP.S7]: s }),
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
                          (0, p.jsx)("div", { className: AP.yF }),
                          (0, p.jsx)(Av.A, { groupListingId: i.id, subscription: t, className: AP.kE }),
                          (0, p.jsxs)("div", {
                              className: AP.Zx,
                              children: [
                                  (0, p.jsx)(AG, { label: C, value: N }),
                                  (0, p.jsx)(AG, {
                                      label: V.intl.string(V.t.dltUMH),
                                      value: x,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? V.intl.string(V.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, p.jsx)(AG, { label: V.intl.string(V.t.AOcwWB), value: T }),
                              ],
                          }),
                          (0, p.jsx)(Aa.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, p.jsx)(lu.D, {
                                  label: V.intl.string(V.t.wmMFvA),
                                  children: (0, p.jsx)(AM, { subscription: t }),
                              }),
                          !y &&
                              (0, p.jsx)(AU, {
                                  isTrial: b,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, lT.openModal)((t) => (0, p.jsx)(AL, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, ci.pX)(I.BVt.CHANNEL(l.id, AD.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tY.default)(),
                                          Ax.A.show(
                                              I.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              V.intl.string(V.t.DvbaM4),
                                              () => {
                                                  (AN.A.setState({ subsection: eL.nR }),
                                                      (0, na.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL));
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
var Ak = n(661097);
let Aw = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, _.bG)([Am.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [Am.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? AA.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? AA.M_.NONE
                                  : AA.M_.IN_SUBSCRIPTION_SERVER;
                        })([Am.A]),
                    ) === AA.M_.SUBSCRIBED,
                n = (0, _.bG)([ur.A], () => ur.A.getActiveGuildSubscriptions()),
                i = f.useRef(!1);
            return (
                f.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = ur.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !ur.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oU.hP());
                }, [e, t]),
                n ?? AE
            );
        })(),
        { loading: i } = (0, Ag.eb)(n);
    return ((0, Ac.A)(oz.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, p.jsx)(oL.y, {})
        : 0 === n.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(j.$, { text: V.intl.string(V.t.hqyhKQ), icon: Ad.z, variant: "secondary", onClick: t }),
                    (0, p.jsx)(Aa.h, { size: 10 }),
                    (0, p.jsx)(n3.n, {
                        label: V.intl.string(V.t["KzCF/6"]),
                        description: V.intl.string(V.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: Ak.A,
                            children: n.map((e) => (0, p.jsx)(AV, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var AF = n(327479),
    AB = n(932012);
function Az(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["48ywCu"]) }),
            (0, p.jsx)(Aa.h, { size: 4 }),
            (0, p.jsx)(n4.E, { variant: "text-md/normal", className: AB.yV, children: V.intl.string(V.t.VWxmSo) }),
            (0, p.jsx)(Aa.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: AB.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AB._e }),
                    (0, p.jsxs)("div", {
                        className: AB.FS,
                        children: [
                            (0, p.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: AB.wx,
                                children: V.intl.string(V.t["48ywCu"]),
                            }),
                            (0, p.jsx)(n4.E, {
                                variant: "text-md/normal",
                                className: AB.h_,
                                children: V.intl.format(V.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(AF.A, { onClick: t, text: V.intl.string(V.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AX = n(548411),
    AY = n(417098),
    AH = n(143582),
    AW = n(915043),
    AK = n(631466);
function AZ(e) {
    let { className: t, header: n, headerClassName: i, children: l } = e,
        s = f.useMemo(() => {
            let e = !1;
            return (
                f.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, p.jsxs)("div", {
        className: ic()(AK.iE, t),
        children: [
            (0, p.jsx)("div", { className: ic()(AK.wx, i), children: n }),
            s && (0, p.jsx)("div", { className: AK.Qs, children: l }),
        ],
    });
}
var Aq = n(885996),
    AQ = n(144165),
    AJ = n(664121),
    A$ = n(950305),
    A0 = n(943775),
    A1 = n(123791),
    A2 = n(900797),
    A3 = n(611643);
let A4 = f.createContext({ isOpen: !1, toggleOpen: () => {} });
function A5(e) {
    let { children: t } = e,
        [n, i] = f.useReducer((e) => !e, !1),
        l = f.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, p.jsx)(A4.Provider, { value: l, children: t(n) });
}
A5.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = f.useContext(A4),
        s = i ? A2.t : mN.a,
        r = null != n ? n : i ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.XJuakA);
    return (0, p.jsxs)(n5.D, {
        className: ic()(A3.L, t),
        onClick: l,
        children: [
            (0, p.jsx)(n4.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var A6 = n(627363),
    A8 = n(328968),
    A7 = n(163437),
    A9 = n(3432);
function Ee(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var Et = n(562312),
    En = (((d = {})[(d.LOADING = 0)] = "LOADING"), (d[(d.DONE = 1)] = "DONE"), (d[(d.ERROR = 2)] = "ERROR"), d);
function Ei(e) {
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
        } = (0, _.cf)(
            [cS.A, cx.A, A8.A, lv.A],
            () => {
                let e,
                    n = cS.A.get(r),
                    i = null != n ? cx.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? A8.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, A7.PJ)(o.skuFlags),
                    d = u && null != l ? lv.A.getGuild(l) : void 0,
                    c = (0, A7.Uo)(t, i),
                    g = u && null != l && null == d;
                if (!1 === c && null != s && s.items.length > 0) {
                    let t = s.items[0];
                    e = cS.A.get(t.planId) ?? void 0;
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
        { data: h } = (0, A6.YY)(a),
        S = f.useMemo(() => (null != h ? (0, A0.A)(h, 100) : null), [h]),
        x = g?.deleted ?? !1,
        T = null != g && (0, A7.Se)(g),
        N = t.status === I.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eX.Ay)(),
        [y] = (0, A_.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tk.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = Ee(t.currentPeriodEnd),
        j = 0 === i;
    return (0, p.jsxs)(AZ, {
        headerClassName: Et.dL,
        header:
            !1 === j
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: Et.VW,
                              children: [
                                  null != S &&
                                      (0, p.jsx)(AQ._, { src: S.href, imageClassName: Et.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: Et.aF,
                                      children: [
                                          (0, p.jsx)(C.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: h?.name ?? V.intl.string(V.t["7kqy7W"]),
                                          }),
                                          (0, p.jsx)(n4.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? V.intl.string(V.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, p.jsx)("div", {
                              className: Et.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, p.jsx)(Eo, {
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
                : (0, p.jsx)(oL.y, { type: oL.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, p.jsx)(Ea, {
                    type: "warning",
                    title: T
                        ? V.intl.formatToPlainString(V.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : V.intl.formatToPlainString(V.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, p.jsx)(Ea, { type: "warning", title: V.intl.string(V.t.SmSP8Q) }),
            N && (0, p.jsx)(Ea, { type: "danger", title: V.intl.string(V.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: Et.zH,
                children: [
                    (0, p.jsx)(Er, {
                        title: V.intl.string(V.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: Et.yW,
                                          children: [(0, p.jsx)(AJ.R, { size: "xs" }), V.intl.string(V.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: Et._t,
                                              children: [
                                                  (0, p.jsx)(n4.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: V.intl.format(V.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(me.Ay, { guild: c, size: me.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: Et.yW,
                                  children: [(0, p.jsx)(A$.UserIcon, { size: "xs" }), V.intl.string(V.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(El, { invoicePreview: y, subscriptionPlan: o }),
                    (0, p.jsx)(Er, {
                        title: V.intl.string(V.t.dnUzb6),
                        content: Ee(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(Es, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(Ed, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: x,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(Eu, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function El(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, p.jsx)(Er, { title: V.intl.string(V.t.KI7ERx), content: "" });
    let i = (0, u8.CE)((0, u8.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, p.jsx)(Er, { title: V.intl.string(V.t.KI7ERx), content: i });
    let s = (0, u8.CE)((0, u8.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(Er, {
        title: V.intl.string(V.t.KI7ERx),
        content: (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(n4.E, { variant: "text-sm/semibold", children: s }),
                s !== i &&
                    (0, p.jsx)(lg.m, {
                        text: V.intl.format(V.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, p.jsx)(n4.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, p.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function Es(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, u8.CE)((0, u8.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, p.jsx)(Er, {
            title: V.intl.string(V.t.hIhAM3),
            content: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(n4.E, { variant: "text-sm/medium", children: n }),
                    (0, p.jsx)(n4.E, {
                        variant: "text-sm/normal",
                        children: V.intl.format(V.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, p.jsx)(Er, { title: t ? V.intl.string(V.t.enxcAl) : V.intl.string(V.t["Ms+6Zq"]), content: n });
}
function Er(e) {
    let { title: t, content: n } = e;
    return (0, p.jsxs)("div", {
        className: Et.nM,
        children: [
            (0, p.jsx)(n4.E, { variant: "text-sm/medium", children: t }),
            (0, p.jsx)(n4.E, { variant: "text-sm/medium", className: Et.u4, children: n }),
        ],
    });
}
function Ea(e) {
    let { type: t, title: n } = e;
    return (0, p.jsx)("div", {
        className: Et.Xm,
        children: (0, p.jsx)(iK.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function Eo(e) {
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
        c = (0, A7.Se)(l),
        { analyticsLocations: g } = (0, eX.Ay)(),
        [m, A] = f.useState(!1),
        E = (0, A1.C)(t.id),
        h = (0, _.bG)([cx.A], () => cx.A.getParentSKU(i.skuId), [i.skuId]),
        S = f.useMemo(() => {
            var e, t;
            let n;
            return null == h
                ? []
                : ((e = i.id),
                  (t = E.subscriptions),
                  (n = new Set(h.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, E, h]),
        x = 0 !== S.length;
    async function T() {
        try {
            A(!0);
            let { subscription: e } = await (0, oU.QP)(s, g);
            if (null == e) return;
            (0, lT.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, p.jsx)(t, { ...n, storeListing: i, subscription: ub.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, p.jsxs)("div", {
        className: Et.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, p.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t.QtMnkW),
                        onClick: T,
                        loading: m,
                    })
                  : (0, p.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t["E8G/tr"]),
                        onClick: function () {
                            (0, lT.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, p.jsx)(e, { ...n, application: t, storeListing: i, subscription: s, guild: o });
                            });
                        },
                    }),
            x &&
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
function Eu(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, p.jsx)(A5, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: Et.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: Et.wV,
                        children: [
                            e && (0, p.jsx)(n4.E, { variant: "text-sm/semibold", children: V.intl.string(V.t.mORL67) }),
                            (0, p.jsx)(A5.Toggle, {
                                className: Et.Bh,
                                text: e ? V.intl.string(V.t.gsbFAw) : V.intl.string(V.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, p.jsx)(Aq.FY, { header: i, icon: (0, A9.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function Ed(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, p.jsx)("div", {
                className: Et.Ji,
                children: (0, p.jsx)(lu.D, {
                    label: V.intl.string(V.t.azZaZa),
                    children: (0, p.jsx)(oL.y, { type: oL.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, p.jsx)("div", {
                  className: Et.Ji,
                  children: (0, p.jsxs)(AY.$T, {
                      color: AY.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          V.intl.format(V.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          V.intl.format(V.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: Et.Ji,
                  children: (0, p.jsx)(lu.D, {
                      label: V.intl.string(V.t.azZaZa),
                      children: (0, p.jsx)(AI.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var Ec = (((c = {}).HOME = "HOME"), (c.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), c),
    Eg = n(38405);
let Em = (0, _.UT)(cS.A, {
    getQueryId: I.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cS.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && Eg.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, c5.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var EA = n(240248),
    EE = n(237218),
    Eh = n(763064);
function ES(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = f.useState(!1),
        [r, a] = f.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: Eh.x6,
                onClick: () => s((e) => !e),
                children: (0, p.jsxs)(n4.E, {
                    className: Eh.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? V.intl.string(V.t["JQX/Pb"]) : V.intl.string(V.t.Fbrd8J),
                        l
                            ? (0, p.jsx)(A2.t, { color: n1.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, p.jsx)(mN.a, { color: n1.A.colors.TEXT_BRAND, size: "xs" }),
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
        null != r && (g = l ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, p.jsxs)("div", {
            children: [
                (0, p.jsx)(n4.E, {
                    ...i,
                    className: Eh.Qs,
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
var Ex = n(920352);
function ET(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = f.useMemo(() => (null == n.thumbnail ? null : (0, EE.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = Em(n.skuId),
        u = f.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, aC._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(AZ, {
              className: ic()(Ex.iE, i),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: Ex.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(AQ._, { src: a.href, imageClassName: Ex.rW, width: 48, height: 48 }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)(C.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, p.jsx)(n4.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, EA.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: Ex.h_,
                          children: (0, p.jsx)(ES, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, p.jsx)("div", {
                          className: Ex.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, p.jsx)(Aq.FY, { header: n, icon: (0, A9.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var Ep = n(185438),
    Ef = n(683380);
function E_(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, A0.A)(t, 100),
        u = (0, A7.PJ)(r.flags),
        d = u ? AJ.R : A$.UserIcon,
        c = u ? V.intl.string(V.t["46YF2D"]) : V.intl.string(V.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, _.bG)([lv.A], () => (u && null != g ? lv.A.getGuild(g) : void 0), [g, u]),
        A = (0, _.bG)(
            [cx.A],
            () => {
                if (null != a) return cx.A.get(a);
            },
            [a],
        ),
        E = Ee(n.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: Ef.wx,
                children: [
                    null != o && (0, p.jsx)(AQ._, { src: o.href, imageClassName: Ef.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(C.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: Ef.p4,
                                children: [
                                    (0, p.jsxs)(C.D, {
                                        variant: "heading-md/normal",
                                        className: Ef.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(n4.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, p.jsxs)("span", {
                                                    className: Ef.vP,
                                                    children: [
                                                        (0, p.jsx)(me.Ay, { guild: m, size: me.Ay.Sizes.SMOL }),
                                                        (0, p.jsx)(C.D, {
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
            (0, p.jsx)(A5, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: Ef._B,
                        children: [
                            (0, p.jsx)(n4.E, { variant: "text-md/normal", children: V.intl.string(V.t["goe+hk"]) }),
                            e &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(n4.E, {
                                            variant: "text-md/normal",
                                            children: V.intl.format(V.t["Q8qJ+5"], {}),
                                        }),
                                        (0, p.jsx)(n4.E, {
                                            variant: "text-md/normal",
                                            children: V.intl.format(V.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, p.jsx)(A5.Toggle, {
                                text: e ? V.intl.string(V.t["1Rkq/E"]) : V.intl.string(V.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: Ef.x0,
                children: [
                    (0, p.jsx)(ET, {
                        storeListing: i,
                        className: Ef.o3,
                        cta: (0, p.jsxs)("div", {
                            className: Ef.cJ,
                            children: [
                                (0, p.jsx)(n4.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: V.intl.string(V.t.fHIpOY),
                                }),
                                null != A &&
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    l.map((e) =>
                        e.skuId === a
                            ? (0, p.jsx)(
                                  ET,
                                  {
                                      storeListing: e,
                                      cta: (0, p.jsx)(n4.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: V.intl.format(V.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, p.jsx)(EI, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function EI(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, Ep.A)({
            analyticsLocation: I.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, p.jsx)(ET, {
        storeListing: t,
        cta: (0, p.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t["+KwmBt"]), onClick: l }),
    });
}
class EN extends f.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(AY.$T, {
                  color: AY.Hv.DANGER,
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
function EC(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = f.useState({ route: Ec.HOME }),
        { route: s } = i;
    function r() {
        l({ route: Ec.HOME });
    }
    let a = (e) => {
            (l({ route: Ec.SWITCH_APP_PLANS, ...e }), n(V.intl.string(V.t.VFqtkP), r));
        },
        [o, u] = f.useState({});
    f.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: En.LOADING })),
                (0, AH._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: En.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: En.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, AW.E)(),
        c = d !== AW.mJ.LOADED;
    switch (s) {
        case Ec.HOME:
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        EN,
                        {
                            subscription: e,
                            children: (0, p.jsx)(Ei, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? En.LOADING : (o[e.id] ?? En.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case Ec.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, p.jsx)(E_, { ...m, navigateToHome: r });
        default:
            (0, io.xb)(s);
    }
}
var Eb = n(707989);
function Ey(e) {
    let { onGoBack: t } = e,
        n = (0, _.yK)(
            [ur.A],
            () =>
                ur.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = f.useState();
    return (
        null == i && (i = (0, p.jsx)(Ev, { onBack: t, title: V.intl.string(V.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                i,
                (0, p.jsx)("div", {
                    className: Eb.A,
                    children: (0, p.jsx)(EC, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, p.jsx)(Ev, {
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
function Ev(e) {
    let { onBack: t, title: n } = e;
    return (0, p.jsxs)("div", {
        className: Eb.D,
        children: [
            (0, p.jsx)(ld.K, {
                "aria-label": V.intl.string(V.t["13/7kX"]),
                icon: () => (0, p.jsx)(AX.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(C.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var Ej = n(366999),
    EO = n(391659);
function EL(e) {
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
        ? ((t = V.intl.string(gP.default["/S02sx"])), (n = V.intl.string(gP.default.OPJNST)))
        : i
          ? ((t = V.intl.string(V.t["hT6i/0"])),
            (n = null != a ? V.intl.format(V.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = V.intl.string(V.t["3G0CTC"])),
            (n = r === tJ.xc.FP_SUB_PAUSED ? V.intl.format(V.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = ic()({ [EO.Hs]: i, [EO.mT]: !i }),
        d = ic()({ [EO.CQ]: i, [EO.ZM]: !i }),
        c = ic()({ [EO.EM]: !i });
    return (0, p.jsxs)("div", {
        className: EO.r6,
        children: [
            (0, p.jsxs)("div", {
                className: EO.Nv,
                children: [
                    (0, p.jsx)(C.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, p.jsx)(n4.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: EO.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(n4.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let ER = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, aC.kX)(t),
        r = s.length > 0,
        a = (0, Ej.Ay)(t.endsAt, Ej.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: ic()(n, EO.f8),
            children: [
                (0, p.jsx)("div", {
                    className: EO.J_,
                    children: (0, p.jsxs)("div", {
                        className: EO.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: EO.xt,
                                children: (0, p.jsx)(am.t, { size: "md", color: "white", className: EO.T8 }),
                            }),
                            (0, p.jsx)("div", {
                                className: EO.pt,
                                children: (0, p.jsx)(C.D, {
                                    variant: "heading-md/semibold",
                                    children: V.intl.string(V.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(n4.E, {
                                className: EO.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : V.intl.string(V.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(EL, {
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
var ED = n(983048);
function EP(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, _.yK)([cS.A], () => [cS.A.get(i), null != s ? cS.A.get(s.planId) : null]);
    if (null == o || aC.Ay.getInterval(i).intervalType !== tJ.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, aC.z4)(i),
        m = aC.Ay.getDisplayName(i);
    if (a) t = V.intl.string(gP.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === I.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, aC._e)(e, r);
        t = V.intl.formatToPlainString(V.t["5CNRRA"], { date: n ?? 0 });
    } else t = V.intl.formatToPlainString(V.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, p.jsxs)("div", {
        className: EO.Bh,
        children: [
            (0, p.jsx)("div", {
                className: ic()({
                    [EO.bY]: g,
                    [EO.sr]: o.skuId === tJ.pe.TIER_0,
                    [EO.lP]: o.skuId === tJ.pe.TIER_1,
                    [EO.eb]: o.skuId === tJ.pe.TIER_2,
                }),
                children: g
                    ? (0, p.jsx)(gH._, { size: "md", color: "currentColor", className: EO.Kk })
                    : (0, p.jsx)(am.t, { size: "md", color: "currentColor", className: EO.Kk }),
            }),
            (0, p.jsxs)("div", {
                className: EO.pt,
                children: [
                    (0, p.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        children: V.intl.format(V.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, p.jsx)(C.D, {
                            className: EO.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, p.jsx)(n4.E, {
                className: EO.PJ,
                variant: "text-md/semibold",
                children: V.intl.format(V.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let EG = function (e) {
    let { className: t, entitlements: n } = e,
        i = K()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, _.yK)([cl.A], () => cl.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, _.bG)([ur.A], () => ur.A.getPremiumSubscription()),
        r = (0, _.bG)([ur.A], () => null == ur.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tJ.gD.PREMIUM_MONTH_TIER_1),
        o = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)("div", {
                className: ic()(t, EO.xF, EO.J_),
                children: Object.keys(i).map((e) =>
                    (0, p.jsx)(
                        EP,
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
                        (0, p.jsx)(n4.E, {
                            className: EO.eT,
                            variant: "text-md/normal",
                            children: V.intl.string(V.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(ED.i, {}),
                    ],
                }),
        ],
    });
};
var EM = n(902782);
function EU(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        [s] = (0, A_.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tk.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? EM.r : EM.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, aC.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cS.A.get(o);
    tE()(null != u, "Missing plan");
    let d = (0, u8.$g)(s.total, s.currency);
    return (
        u.interval === tJ.WT.YEAR
            ? (t = V.intl.format(V.t["jPz/39"], {
                  price: d,
                  termsUrl: I.X7G.TERMS,
                  paidURL: I.X7G.PAID_TERMS,
                  privacyUrl: I.X7G.PRIVACY,
              }))
            : u.interval === tJ.WT.MONTH &&
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
        (0, p.jsx)(n4.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function EV(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === I.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(EU, { subscription: t, withOverheadSeparator: n });
}
var Ek = n(580892),
    Ew = n(689255);
let EF = { [eL.nR]: "role_subscriptions_panel", [eL.PZ]: "application_subscriptions_panel" };
function EB() {
    return (0, p.jsx)(oX.Z, {
        className: Ew.wb,
        type: oX.Z.Types.CUSTOM,
        children: (0, p.jsxs)(lN.A, {
            align: lN.A.Align.CENTER,
            children: [
                (0, p.jsx)(i7.A, { game: null, size: i7.M.SMALL, className: Ew.pV }),
                (0, p.jsx)("span", { className: Ew.O, children: V.intl.string(V.t["jy/hyj"]) }),
            ],
        }),
    });
}
function Ez(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mZ._)(e, t));
}
function EX() {
    let e = (0, _.bG)([cl.A], () => cl.A.getForApplication(tJ.tv), [], Ez);
    return (
        f.useEffect(() => {
            (0, cV.LM)(tJ.tv);
        }, []),
        (0, p.jsx)(n3.n, {
            label: V.intl.string(V.t["2GKrvn"]),
            description: V.intl.string(V.t.Z5b2Gf),
            children:
                null != e && aC.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(EG, { className: Ew.fX, entitlements: e })
                    : (0, p.jsx)(EB, {}),
        })
    );
}
function EY() {
    return (0, p.jsx)("hr", { className: Ew.hr });
}
let EH = function () {
        var e;
        let t = (0, _.bG)([ur.A], () => ur.A.getPremiumTypeSubscription()),
            n = (0, mq.A)({ subscriptionFilter: (e) => Ek.Hy.has(e.status) }),
            i = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, _.bG)(
                [us.A],
                () => (null != t && null != t.paymentSourceId ? us.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, _.bG)([ur.A], () => ur.A.hasFetchedSubscriptions()),
            a = (0, _.bG)([ow.A], () => ow.A.isBusy),
            o = (0, c8.Y)(),
            u = AN.A.useField("subsection"),
            d = AN.A.useField("scrollToGameServers"),
            c = f.useRef(null);
        f.useEffect(() => {
            (0, it._)(null != u ? EF[u] : S.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let g = (0, _.bG)([ur.A], () => ur.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, _.bG)(
                [ur.A],
                () =>
                    Object.values(ur.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === I.rzx.GUILD)
                        .filter((e) => e.status !== I.Dmq.ENDED).length,
            ),
            A = (0, _.bG)([ur.A], () =>
                Object.values(ur.A.getSubscriptions() ?? {}).some((e) => e.type === I.rzx.GAME_SERVER),
            ),
            { servers: E } = (0, Ar.f)({ enabled: A }),
            h = (0, _.yK)([ur.A], () => (0, m5.eP)(E, (e) => ur.A.getSubscriptionById(e)), [E]),
            x = (0, c6.A)({ forceFetch: !0 }),
            T = (0, gt.ds)(),
            N = null !== t ? t.currentPeriodEnd : void 0,
            b =
                !(T && !(x.unactivatedUnits.length > 0)) &&
                (x.fractionalState !== tJ.xc.NONE || x.unactivatedUnits.length > 0);
        return (f.useEffect(() => {
            d &&
                r &&
                o &&
                h.length > 0 &&
                (c.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                AN.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, h.length]),
        f.useEffect(
            () => (
                (0, c5.zS)(),
                oU.hP(),
                (0, gW.CD)(),
                oU.$o(),
                function () {
                    AN.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, p.jsx)(of.A, {})
            : r && o
              ? u === eL.nR
                  ? (0, p.jsx)(Aw, { onGoBack: () => AN.A.setState({ subsection: null }) })
                  : u === eL.PZ
                    ? (0, p.jsx)(Ey, { onGoBack: () => AN.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: Ew.kL,
                          children: (0, p.jsxs)("div", {
                              className: Ew.Qs,
                              children: [
                                  l ? (0, p.jsx)(Ek.Sb, {}) : null,
                                  null != t
                                      ? (0, p.jsx)(Ek.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, p.jsx)(Ek.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, p.jsxs)("section", {
                                          children: [
                                              (0, p.jsx)(C.D, {
                                                  variant: "heading-md/bold",
                                                  className: Ew.HL,
                                                  children: V.intl.string(V.t.Obre8v),
                                              }),
                                              (0, p.jsx)(n4.E, {
                                                  variant: "text-md/normal",
                                                  className: Ew.JU,
                                                  children: V.intl.format(V.t["7Zi06b"], {
                                                      helpCenterLink: eb.A.getArticleURL(
                                                          I.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, p.jsx)(ER, {
                                                  className: Ew.fX,
                                                  fractionalPremiumInfo: x,
                                                  activationDate: N,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, p.jsx)(EX, {}),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(EY, {}),
                                              (0, p.jsx)(Au, {
                                                  count: m,
                                                  onClickManageSubscription: () => AN.A.setState({ subsection: eL.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(EY, {}),
                                              (0, p.jsx)(Az, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (AN.A.setState({ subsection: eL.PZ }),
                                                          td.default.track(
                                                              I.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  h.length > 0 &&
                                      (0, p.jsxs)("div", {
                                          ref: c,
                                          children: [(0, p.jsx)(EY, {}), (0, p.jsx)(As, { servers: h })],
                                      }),
                                  (0, p.jsx)(EY, {}),
                                  null != t ? (0, p.jsx)(EV, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: ic()(Ew.kL, Ew.Lq), children: (0, p.jsx)(oL.y, {}) });
    },
    EW = (0, h.E2)(S.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        Component: () => (0, p.jsx)(EH, {}),
    }),
    EK = (0, h.zZ)(S.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        buildLayout: () => [EW],
    }),
    EZ = (0, h.t_)(S.X.SUBSCRIPTIONS_PANEL, { useTitle: () => V.intl.string(V.t.trSpHX), buildLayout: () => [EK] }),
    Eq = (0, h.i4)(S.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.trSpHX),
        icon: mW.L,
        usePersistentBadge: function () {
            let e = (0, mK.l)();
            return f.useMemo(
                () => ({
                    badgeType: T.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, p.jsx)(i$.E, { size: "xs", color: n1.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [EZ],
    }),
    EQ = (0, h.WI)(S.X.BILLING_SECTION, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [gY, mH, Eq, c$, db],
    });
var EJ = n(540999),
    E$ = n(306471),
    E0 = n(964355),
    E1 = n(172272);
let E2 = (0, h.zD)(S.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isAxeEnabled),
        setValue: (e) => (0, rm.x)({ axeEnabled: e }),
    }),
    E3 = (0, h.zD)(S.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rm.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var E4 = n(276086),
    E5 = n(354328);
let E6 = (0, h.zD)(S.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, E5.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, E4.L)("highlight_mana_components", e);
        },
    }),
    E8 = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, E5.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, E4.L)("highlight_mana_text_overrides", e);
        },
    }),
    E7 = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, E5.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, E4.L)("highlight_mana_text", e);
        },
    }),
    E9 = (0, h.zD)(S.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, E5.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, E4.L)("highlight_void_toggleables", e);
        },
    }),
    he = (0, h.sN)(S.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: E1.YR,
        markers: Array.from({ length: E1.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => E1.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            E1.Or.getState().setHorizontalSpacing(e);
        },
    }),
    ht = (0, h.zD)(S.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rm.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hn = (0, h.sN)(S.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: E1.YR,
        markers: Array.from({ length: E1.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => E1.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            E1.Or.getState().setVerticalSpacing(e);
        },
    }),
    hi = (0, h.zZ)(S.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [E3, ht, he, hn, E6, E7, E8, E9, E2],
    });
var hl = n(246605),
    hs = n(274184);
function hr(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = f.useState(l ?? ""),
        u = f.useRef(null),
        [d, c] = f.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        f.useEffect(() => g, []),
        (0, p.jsx)(lu.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, p.jsx)(lp.k, {
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
let ha = (0, h.E2)(S.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, _.bG)([hs.Ay], () => hs.Ay.getActionTriggeredSurveyOverride());
            return (0, p.jsx)(hr, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hl.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    ho = (0, h.zD)(S.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => U.HZ.useSetting(),
        setValue: (e) => {
            U.HZ.updateSetting(e);
        },
    });
var hu = n(396478),
    hd = n(173936),
    hc = n(103557),
    hg = n(414079),
    hm = n(148810),
    hA = n(380610),
    hE = n(986238),
    hh = n(428524),
    hS = n(252149),
    hx = n(221851);
let hT = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    hp = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function hf(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class h_ extends f.Component {
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
        let { project: e, overrideType: t, overrideId: n, disabled: i, error: l } = this.props;
        return (0, p.jsxs)(lN.A, {
            direction: lN.A.Direction.VERTICAL,
            className: ic()(hh.oS, hx.SX, hS.N, hh.nM),
            children: [
                (0, p.jsx)(hg.A, {
                    className: ic()(hh.lL, { [hh.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, p.jsxs)(lN.A, {
                    className: hx.QB,
                    children: [
                        (0, p.jsx)(lN.A.Child, {
                            basis: "50%",
                            children: (0, p.jsx)(lo.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: hp,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, p.jsx)(lN.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, p.jsx)(lp.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, p.jsxs)(lN.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, p.jsx)(n4.E, {
                                className: hh.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, p.jsxs)(n4.E, {
                            variant: "text-sm/normal",
                            className: hh.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, p.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class hI extends f.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, hA.bD)();
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
        return K().without(hT, ...t);
    }
    handleAddBuildOverride = (e) => {
        if (null == e) return;
        let t = { ...this.state.buildOverrides, [e]: { type: "branch", id: "" } };
        this.setState({ buildOverrides: t });
    };
    handleBuildOverrideUpdated = (e, t) => {
        let { buildOverrides: n } = this.state,
            i = { ...(null != n ? n[e] : {}), ...t },
            l = { ...this.state.buildOverrides, [e]: i };
        this.setState({ buildOverrides: l });
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
        let t = await (0, hm.Zk)(e);
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
        (0, lT.openModal)((t) => (0, p.jsx)(hN, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, p.jsx)(hu.pp, {
            theme: nF.A.theme,
            className: ic()(hx.eT, hx.SX),
            children: (0, p.jsx)(hu.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : K().map(e, (e, i) =>
                  (0, p.jsx)(
                      h_,
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
            : (0, p.jsx)(j.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, p.jsx)(lg.m, {
                  text: "Generate Public Link",
                  children: (0, p.jsx)(ld.K, {
                      variant: "secondary",
                      icon: hd.LinkIcon,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(j.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, p.jsx)(j.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: hf(t ?? {}),
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
            ? (0, p.jsx)(oL.y, { className: hx.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                hf(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, p.jsx)(n4.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, p.jsx)(n3.n, {
            children: (0, p.jsxs)(q.B, {
                gap: 16,
                children: [
                    (0, p.jsx)(lo.l, {
                        selectionMode: "single",
                        label: "Add Build Override",
                        placeholder: "discord_project",
                        description: "Select a project to create a build override for.",
                        layout: "horizontal-responsive",
                        value: void 0,
                        options: this.getAvailableProjects().map((e) => ({ id: e, label: e, value: e })),
                        onSelectionChange: this.handleAddBuildOverride,
                        disabled: !l,
                    }),
                    s,
                    e,
                    (0, p.jsxs)(s8.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class hN extends f.Component {
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
        e.key === lk.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, hm.SB)(e);
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
        return hf(this.props.buildOverrides ?? {});
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
            d = hE.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, p.jsxs)(q.B, {
            gap: 20,
            children: [
                (0, p.jsx)(lo.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hE.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(lo.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hE.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, p.jsxs)(q.B, {
                          gap: 20,
                          children: [
                              (0, p.jsx)(lp.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iH.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, p.jsx)(lo.l, {
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
                    : (0, p.jsx)(hc.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(hc.f, {
                          label: "Client Experiment Override",
                          description:
                              "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                          value: o,
                          error: u,
                          onChange: this.handleExperiments,
                          placeholder: '{"2022-01_threads":1}',
                      }),
                (0, p.jsx)(t5.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
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
        return (0, p.jsx)(iK.w, { type: n, message: e, role: "critical" === n ? "alert" : "status" });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, p.jsx)(lx.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, p.jsx)(cv.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let hC = (0, h.E2)(S.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: hI });
var hb = n(256311),
    hy = n(883600);
let hv = (0, h.E2)(S.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, _.bG)([hy.A], () => hy.A.overrideId());
        async function t(e) {
            let t = hy.A.getChangelog(e, "en-US");
            return null != t ? t : ((await hb.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, p.jsx)(hr, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hb.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hj = n(506774);
let hO = new Date("2018-01-01"),
    hL = (0, h.Tf)(S.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => U.pK.useSetting() === oB.default.fromTimestamp(hO.getTime()),
        onClick: () => (hj.w.set("lastChangeLogDate", hO), U.pK.updateSetting(oB.default.fromTimestamp(hO.getTime()))),
    }),
    hR = (0, h.zD)(S.X.DISABLE_APP_COLLECTIONS_CACHE, {
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
    hD = (0, h.zD)(S.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isForcedCanary),
        setValue: (e) => {
            (0, rm.x)({ canary: e });
        },
    }),
    hP = (0, h.zD)(S.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.sourceMapsEnabled),
        setValue: (e) => (0, rm.x)({ sourceMapsEnabled: e }),
    }),
    hG = (0, h.zD)(S.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rm.x)({ onlyShowPreviewAppCollections: e }),
    });
var hM = n(10094),
    hU = n(683760);
let hV = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tJ.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tJ.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tJ.PremiumTypes.TIER_2 },
    ],
    hk = (0, h.Hn)(S.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hV,
        clearable: !0,
        useValue: () =>
            (0, _.bG)([hU.A], () => {
                let e = hU.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hM.O)(null, void 0)
                : null === e
                  ? (0, hM.O)(void 0, void 0)
                  : (0, hM.O)(0 === e ? null : e, void 0);
        },
    });
var hw = n(374042);
let hF = (0, h.E2)(S.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, _.bG)([hs.Ay], () => hs.Ay.getSurveyOverride());
            return (0, p.jsx)(hr, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hl.xr(e),
                fetchOverride: (e) => (0, hw.B)(e, !0) ?? null,
            });
        },
    }),
    hB = (0, h.zZ)(S.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hk, hF, ha, hv, hL, hD, ho, hG, hR, hP, hC],
        useInlineNotice: () => ({
            type: T.lT.INLINE_NOTICE,
            noticeType: "info",
            role: "none",
            text: V.intl.format(V.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hz = (0, h.zD)(S.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rm.x)({ logAnalyticsEvents: e }),
    }),
    hX = (0, h.zD)(S.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rm.x)({ logGatewayEvents: e }),
    }),
    hY = (0, h.zD)(S.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.preventPopoutClose),
        setValue: (e) => (0, rm.x)({ preventPopoutClose: e }),
    }),
    hH = (0, h.zD)(S.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.logKeyboardMismatches),
        setValue: (e) => (0, rm.x)({ logKeyboardMismatches: e }),
    }),
    hW = (0, h.zD)(S.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rm.x)({ logOverlayEvents: e }),
    }),
    hK = (0, h.zD)(S.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingQuestEvents),
        setValue: (e) => (0, rm.x)({ logQuestEvents: e }),
    }),
    hZ = (0, h.zD)(S.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isTracingRequests),
        setValue: (e) => (0, rm.x)({ trace: e }),
    }),
    hq = (0, h.zZ)(S.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hX, hW, hZ, hz, hH, hY, hK] }),
    hQ = (0, h.t_)(S.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hB, hq, hi],
    }),
    hJ = (0, h.i4)(S.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: E$.V,
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
                } = (0, _.cf)([rA.default, EJ.A, sx.default], () => ({
                    layoutDebuggingEnabled: rA.default.layoutDebuggingEnabled,
                    isDeveloper: EJ.A.isDeveloper,
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
                    isStaff: sx.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, E1.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = E1.Or.getState(),
                h = U.HZ.useSetting();
            return t
                ? [
                      (0, p.jsxs)(
                          ti.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, na.openUserSettings)(S.X.DEV_OVERRIDES);
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
                                              (0, rm.x)({ canary: !r });
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
                                              (0, rm.x)({ onlyShowPreviewAppCollections: !u });
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
                                              (0, rm.x)({ disableAppCollectionsCache: !d });
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
                                  (0, na.openUserSettings)(S.X.LOGGING);
                              },
                              children: [
                                  (0, p.jsx)(
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
                                  (0, p.jsx)(
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
                                  (0, p.jsx)(
                                      ti.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, rm.x)({ logAnalyticsEvents: !l });
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
                                              (0, rm.x)({ trace: !s });
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
                                              (0, rm.x)({ preventPopoutClose: !o });
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
                                  (0, na.openUserSettings)(S.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, p.jsx)(
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
                                  (0, p.jsx)(
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
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(
                                                  ti.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, p.jsx)(E0.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: E1.YR,
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
                                                          (0, p.jsx)(E0.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: E1.YR,
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
                                { id: "discord-stats", label: "Discord Stats", action: () => sS() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [hQ],
    });
var h$ = n(127062),
    h0 = n(25044),
    h1 = n(80703),
    h2 = n(123292),
    h3 = n(683438),
    h4 = n(890856),
    h5 = n(100392),
    h6 = n(102609),
    h8 = n(271478),
    h7 = n(386976),
    h9 = n(257433),
    Se = n(32523),
    St = n(96919),
    Sn = n(688151),
    Si = n(863763);
function Sl(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = f.useState(l),
        [a, o] = f.useState(!1),
        u = f.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, _.bG)([cE.default], () => cE.default.getId()),
        c = (0, _.bG)([cE.default], () => {
            let e = cE.default.getInstallationForTracking();
            return null == e ? null : (0, h1.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, h9.iN)(t, g),
        A = (0, h9.Fm)(t, g),
        E = (0, _.yK)([rf.A], () =>
            K()
                .sortBy(rf.A.getRecentExposures(Sn.Vh.USER, n), (e) => {
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
                (0, uF.C)((0, h5.yA)(n), () => {
                    ((0, sg.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        S = (0, p.jsx)(h4.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(n4.E, {
                variant: "text-md/medium",
                className: Si.DD,
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
                                    uF.p5 &&
                                        (0, p.jsx)(n5.D, {
                                            onClick: h,
                                            children: (0, p.jsx)(hd.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, p.jsx)(n4.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: Si.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, p.jsx)("div", { className: Si.Os, children: S });
    let x = "";
    return (
        (x =
            t.system === h6.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? Sn.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: Si.Os,
            children: [
                S,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(h8.g, {
                        label: t.system === h6.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: x,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: Si.h_,
                    children:
                        null == A
                            ? (0, p.jsx)(n4.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, p.jsxs)("div", {
                          children: [
                              (0, p.jsx)(n4.E, {
                                  variant: "text-lg/medium",
                                  className: Si.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "code",
                                  className: Si.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "text-lg/medium",
                                  className: Si.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "code",
                                  className: Si.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "text-lg/medium",
                                  className: Si.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "code",
                                  className: Si.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: Si.id,
                          children: (0, p.jsx)(h2.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(ls.c, { className: Si.yF }),
            ],
        })
    );
}
function Ss(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = f.useState(null != i),
        [r, a] = f.useState(!1),
        o = f.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, _.bG)([rf.A], () => rf.A.getLoadedGuildExperiment(n)),
        d = (0, _.bG)([rf.A, lv.A, iq.A], () => {
            if (t.system === h6.l5.LEGACY) return null == rf.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lv.A.getGuildsArray().some((t) => null != iq.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, _.yK)([rf.A], () =>
            K()
                .sortBy(rf.A.getRecentExposures(Sn.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, _.yK)([cE.default, lv.A, rf.A, iq.A], () => {
            let e = t.system === h6.l5.LEGACY,
                i = t.name,
                l = cE.default.getId(),
                s = K().sortBy(lv.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (rf.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? Sn.RE.NOT_ELIGIBLE)
                    : (iq.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? Sn.RE.NOT_ELIGIBLE);
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
        A = t.system !== h6.l5.LEGACY,
        E = (0, _.yK)([lv.A], () => K().sortBy(lv.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, S] = f.useState(() => lj.A.getGuildId() ?? lj.A.getLastSelectedGuildId()),
        x = E.find((e) => e.id === h)?.name,
        T = (0, _.bG)(
            [iq.A],
            () => {
                if (A && null != h) return iq.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        I = (0, _.bG)([iq.A, cE.default], () => {
            if (!A) return;
            let e = cE.default.getId();
            return iq.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != I && (I.isOverride || I.useAsEligibility),
        C = (0, p.jsx)(n5.D, {
            onClick: o,
            children: (0, p.jsxs)(n4.E, {
                variant: "text-md/medium",
                className: Si.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(n4.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: Si.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, p.jsxs)("div", {
              className: Si.Os,
              children: [
                  C,
                  (0, p.jsx)(h8.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, p.jsx)("div", {
                          className: Si.h_,
                          children: (0, p.jsx)(lo.l, {
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
                      className: Si.h_,
                      children: d
                          ? (0, p.jsx)(n4.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === h6.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  A &&
                      (0, p.jsxs)("div", {
                          children: [
                              (0, p.jsxs)(n4.E, {
                                  variant: "text-lg/medium",
                                  className: Si.id,
                                  children: ["Server Descriptor", null != x ? ` (${x})` : ""],
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "code",
                                  className: Si.AS,
                                  children: null == T ? "None" : JSON.stringify(T, void 0, 2),
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "text-lg/medium",
                                  className: Si.id,
                                  children: "Client Eligibility",
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "code",
                                  className: Si.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(n4.E, {
                                    variant: "text-lg/medium",
                                    className: Si.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(n4.E, { variant: "code", className: Si.AS, children: g }),
                                t.system === h6.l5.LEGACY &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(n4.E, {
                                                variant: "text-lg/medium",
                                                className: Si.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, p.jsx)(n4.E, {
                                                variant: "code",
                                                className: Si.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(n4.E, {
                                    variant: "text-lg/medium",
                                    className: Si.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(n4.E, {
                                    variant: "code",
                                    className: Si.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(n4.E, {
                                    variant: "text-lg/medium",
                                    className: Si.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(n4.E, {
                                    variant: "code",
                                    className: Si.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: Si.id,
                            children: (0, p.jsx)(h2.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(ls.c, { className: Si.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: Si.Os, children: C });
}
let Sr = (0, h.E2)(S.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, h7.op)(),
                { experiments: n, overridesInfo: i } = (0, Se.hI)(),
                l = f.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = f.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, _.bG)([cE.default], () => {
                    let e = cE.default.getInstallationForTracking();
                    return null == e ? null : (0, h1.v)(e);
                }),
                [a, o] = f.useState(""),
                u = (0, St.oC)((0, St.R3)((0, St.Fm)(l), s), a);
            return (0, p.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, p.jsxs)(q.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, p.jsxs)(n4.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uF.p5 &&
                                    (0, p.jsx)(h2.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uF.C)(r, () => {
                                                (0, sg.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, p.jsx)(h3.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Ss : Sl;
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
                              className: Si.p$,
                              children: (0, p.jsx)(C.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    Sa = (0, h.zZ)(S.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Sr] }),
    So = (0, h.t_)(S.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Sa] }),
    Su = (0, h.i4)(S.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: h$.c,
        useMenu: h0.A,
        buildLayout: () => [So],
    }),
    Sd = (0, h.WI)(S.X.DEVELOPER_SECTION, {
        useTitle: () => V.intl.string(V.t["+gHUHA"]),
        usePredicate: () => EJ.A.isDeveloper,
        buildLayout: () => [Su, hJ],
    });
var Sc = n(682348),
    Sg = n(871633),
    Sm = n(751075),
    SA = n(843402);
let SE = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function Sh() {
    let e = (0, _.yK)([i5.Ay], () => i5.Ay.getGamesSeen(!1)),
        t = (0, _.bG)([i5.Ay], () => SE(...i5.Ay.getOverrides()));
    f.useEffect(() => {
        if (e8.isPlatformEmbedded) return ((0, SA.a2)(), SA.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = f.useMemo(
        () =>
            e.reduce((e, t) => ((0, Sg.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function SS(e) {
    let { gameHistory: t } = Sh();
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
function Sx(e) {
    let { namedGames: t, totalCount: n } = SS(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function ST() {
    let { namedGames: e } = SS(2),
        [t, n] = f.useMemo(() => e.map((e) => e.id), [e]);
    f.useEffect(() => {
        A6.Ay.fetchApplications([t, n].filter(io.Vq));
    }, [t, n]);
    let [i, l] = (0, _.yK)([i2.A], () => [t, n].map(i2.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, p.jsx)(i7.A, { game: i, size: i7.M.MEDIUM_LARGE }), shape: Sm.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, p.jsx)(i7.A, { game: l, size: i7.M.MEDIUM }), shape: Sm.e0.ROUNDED } : null,
          };
}
let Sp = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = Sx(2);
            return V.intl.format(V.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = ST();
            return { type: T.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, _.bG)([i5.Ay], () => i5.Ay.getGamesSeen(!1).some((e) => !(0, Sg.n1)(e))) && (0, nh.xl)(),
    }),
    Sf = (0, h.gN)(S.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [Sp] });
var S_ = n(533440),
    SI = n(406535),
    SN = n(450216);
let SC = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => V.intl.string(SN.default.A0FVCV),
        useSubtitle: () => V.intl.string(SN.default.vHX6RG),
        useValue: U.hV.useSetting,
        setValue: function (e) {
            (U.hV.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SI.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    Sb = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => V.intl.string(SN.default["9l5u6A"]),
        useSubtitle: () => V.intl.string(SN.default.QcmgBF),
        useValue: U.pR.useSetting,
        setValue: function (e) {
            (U.pR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SI.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    Sy = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => V.intl.string(V.t.WmsPis),
        useSearchTerms: () => [V.intl.string(V.t["8ka8li"])],
        buildLayout: () => [S_._, SC, Sb, Sf],
    }),
    Sv = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.J0SFL2),
        destinationKey: S.X.DATA_AND_PRIVACY_PANEL,
    }),
    Sj = (0, h.gN)(S.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [Sv] });
var SO = n(365258);
let SL = (0, h.Qx)(S.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => V.intl.string(SN.default["/LHVbt"]),
    useSubtitle: () => V.intl.string(V.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eJ.Qd.ACTIVITY_STATUS_OFF, name: V.intl.string(SN.default.m3oL7Q) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: V.intl.string(SN.default["5+lnTA"]) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON, name: V.intl.string(SN.default["egr+VZ"]) },
        ];
    },
    useValue: U._Z.useSetting,
    setValue: function (e) {
        let t = U._Z.getSetting();
        U._Z.updateSetting(e);
        let i = (0, SO.g8)(t, e);
        if (null == i) return;
        let l = (0, SO.Xc)(e);
        (0, lT.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("26411"), n.e("562041"), n.e("341996")]).then(n.bind(n, 32167));
            return (t) =>
                (0, p.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: l });
        });
    },
});
var SR = n(498642),
    SD = n(573435),
    SP = n(260509),
    SG = n(771810);
function SM(e) {
    let { guild: t, size: n } = e,
        i = (0, SP.Iv)(t, n, !1, !0),
        l = (0, SP.Rb)(t);
    return null != i
        ? (0, p.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, p.jsx)("div", {
              className: SG.F,
              children: (0, p.jsx)(n4.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
              }),
          });
}
function SU(e) {
    let { guild: t, size: n } = e;
    return (0, p.jsx)(SD.Ay, {
        className: SG.z,
        mask: SD.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, p.jsx)(SM, { guild: t, size: n }),
    });
}
var SV =
    (((g = {}).SERVER_ORDER = "server-order"),
    (g.RECENTLY_JOINED = "recently-joined"),
    (g.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (g.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    g);
let Sk = {
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
var Sw = n(618118);
function SF(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i, rowRef: l } = e,
        s = (0, _.bG)([SR.A], () => SR.A.getMemberCount(t.id));
    return (0, p.jsxs)(q.B, {
        as: "li",
        ref: l,
        tabIndex: null != l ? -1 : void 0,
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, p.jsx)("div", { className: Sw.FO, children: (0, p.jsx)(SU, { guild: t, size: 48 }) }),
            (0, p.jsx)("div", {
                className: Sw.QH,
                children: (0, p.jsx)(t5.d, {
                    label: t.name,
                    description: V.intl.format(SN.default.cI3aQA, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
function SB(e) {
    let { overflowGuilds: t } = e,
        n = (0, _.bG)([ua.default], () => ua.default.locale),
        i = t.length,
        l = i - 3,
        s = (0, f.useMemo)(() => {
            let e = t.slice(0, 3).map((e) => e.name);
            return (
                l > 0 && e.push(V.intl.formatToPlainString(SN.default.bAzBIf, { numServers: l })),
                new Intl.ListFormat(n).format(e)
            );
        }, [t, l, n]);
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(Sm.qP, {
                icons: {
                    frontIcon: { icon: (0, p.jsx)(SM, { guild: t[0], size: Sm.CD }), shape: Sm.e0.SQUIRCLE },
                    backIcon:
                        null != t[1]
                            ? { icon: (0, p.jsx)(SM, { guild: t[1], size: Sm.CD }), shape: Sm.e0.SQUIRCLE }
                            : null,
                },
            }),
            (0, p.jsxs)("div", {
                className: Sw.yW,
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "text-md/semibold",
                        className: Sw.Xc,
                        children: V.intl.format(SN.default.MEMaup, { count: i }),
                    }),
                    (0, p.jsx)(n4.E, { variant: "text-sm/normal", color: "text-muted", className: Sw.Xc, children: s }),
                ],
            }),
        ],
    });
}
function Sz() {
    return (0, p.jsx)("div", {
        className: Sw.yW,
        children: (0, p.jsx)(n4.E, {
            variant: "text-md/semibold",
            className: Sw.Xc,
            children: V.intl.string(SN.default.BRjBVV),
        }),
    });
}
function SX(e) {
    let { isExpanded: t, overflowGuilds: n, onToggle: i } = e,
        l = t ? V.intl.string(SN.default.BRjBVV) : V.intl.formatToPlainString(SN.default.MEMaup, { count: n.length });
    return (0, p.jsxs)(q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            t ? (0, p.jsx)(Sz, {}) : (0, p.jsx)(SB, { overflowGuilds: n }),
            (0, p.jsx)(ld.K, {
                variant: "secondary",
                size: "md",
                icon: t ? A2.t : mN.a,
                "aria-label": l,
                "aria-expanded": t,
                onClick: i,
            }),
        ],
    });
}
function SY(e) {
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
                [i, l] = (0, f.useState)(null),
                s = i === n,
                r = "" === n && t.length > 10,
                a = r && !s ? t.slice(0, 10) : t,
                o = r ? t.slice(10) : [],
                u = (0, f.useRef)(null),
                d = (0, f.useRef)(!1);
            return (
                (0, f.useEffect)(() => {
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
        className: Sw.X1,
        id: i,
        "aria-label": V.intl.string(V.t["7hB4kg"]),
        children: [
            0 === t.length &&
                (0, p.jsx)("div", {
                    className: Sw.pb,
                    children: (0, p.jsx)(n4.E, {
                        className: Sw.R$,
                        variant: "text-lg/medium",
                        children: V.intl.string(V.t["Xe+fJM"]),
                    }),
                }),
            o.map((e, t) =>
                (0, p.jsx)(
                    SF,
                    {
                        guild: e,
                        rowRef: r && a && 10 === t ? c : void 0,
                        isActivityRestricted: l(e.id),
                        onToggleActivityRestrictedGuild: s,
                    },
                    e.id,
                ),
            ),
            a && (0, p.jsx)(SX, { isExpanded: r, overflowGuilds: u, onToggle: d }),
        ],
    });
}
let SH = function (e) {
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
            let [e, t] = (0, f.useState)(""),
                [n, i] = (0, f.useState)("server-order"),
                l = (0, _.bG)([gJ.Ay], () => gJ.Ay.getFlattenedGuildIds()),
                s = (0, _.bG)([lv.A], () => lv.A.getGuilds()),
                r = l.map((e) => s[e]).filter(Boolean),
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
                [g, m] = (0, f.useState)(() => Sk[n](r, a)),
                A = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(Sk[e](r, a)), i(e));
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
        m = (0, f.useId)(),
        A = (0, f.useRef)(null),
        E = (0, f.useMemo)(
            () => [
                { id: SV.SERVER_ORDER, label: V.intl.string(V.t.STMPJ2), value: SV.SERVER_ORDER },
                { id: SV.RECENTLY_JOINED, label: V.intl.string(V.t.CbaapP), value: SV.RECENTLY_JOINED },
                { id: SV.ACTIVITY_SHARING_ON, label: V.intl.string(SN.default.ZI51JZ), value: SV.ACTIVITY_SHARING_ON },
                {
                    id: SV.ACTIVITY_SHARING_OFF,
                    label: V.intl.string(SN.default["+kxafn"]),
                    value: SV.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === s)?.label ?? "";
    return (0, p.jsxs)("div", {
        className: Sw.iE,
        children: [
            t,
            (0, p.jsxs)("div", {
                className: Sw.N1,
                children: [
                    (0, p.jsx)(h3.I, {
                        query: i,
                        onChange: l,
                        onClear: function () {
                            (td.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                l(""));
                        },
                        onFocus: () =>
                            td.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            td.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
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
                            className: Sw.gO,
                            children: [
                                (0, p.jsx)(af.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, p.jsx)(g6.W, {
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
                                        (0, p.jsxs)(n5.D, {
                                            ...e,
                                            innerRef: A,
                                            className: Sw.Ku,
                                            children: [
                                                (0, p.jsx)(n4.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, p.jsx)(mN.a, { size: "xs", color: n1.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(h2.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? V.intl.string(V.t["7lxcLO"]) : V.intl.string(V.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, p.jsx)(lm.A, {
                "aria-live": "polite",
                role: "region",
                children: V.intl.format(SN.default.EvzDff, { count: n.length }),
            }),
            (0, p.jsx)(SY, {
                guilds: n,
                searchQuery: i,
                listId: m,
                isActivityRestrictedForGuild: d,
                onToggleActivityRestrictedGuild: u,
            }),
        ],
    });
};
var SW = n(68322);
let SK = (0, h.E2)(S.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [V.intl.string(SN.default["/LHVbt"])],
        Component: function () {
            let e = U.tz.useSetting()
                ? null
                : (0, p.jsx)("div", {
                      className: SW.l,
                      children: (0, p.jsx)(iK.w, {
                          type: "warning",
                          message: V.intl.string(SN.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, p.jsx)(SH, { notice: e });
        },
    }),
    SZ = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bwqjL9),
        buildLayout: () => [SL, SK, Sj],
    }),
    Sq = (0, h.zD)(S.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => V.intl.string(SN.default.khuuzv),
        useSubtitle: () => V.intl.string(SN.default["8EWsJ8"]),
        useValue: () => U.e.useSetting(),
        setValue: (e) => U.e.updateSetting(e),
    }),
    SQ = (0, h.E2)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(n4.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, p.jsx)(
                            n4.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    SJ = (0, h.zD)(S.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => V.intl.string(SN.default.Uz5Ipi),
        useSubtitle: () => V.intl.string(SN.default.CZI2Gb),
        useValue: () => U.UM.useSetting(),
        setValue: (e) => U.UM.updateSetting(e),
    }),
    S$ = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => V.intl.string(SN.default["89YBr5"]),
        useSubtitle: () => V.intl.string(V.t.uGDpgH),
        buildLayout: () => [Sq, SJ, SQ],
        useSearchTerms: () => [V.intl.string(V.t.VOszPA)],
    }),
    S0 = (0, h.t_)(S.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        buildLayout: () => [Sy, SZ, S$],
    }),
    S1 = (0, h.i4)(S.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        icon: Sc._,
        buildLayout: () => [S0],
    });
var S2 = n(712440),
    S3 = n(370997);
let S4 = (0, h.E2)(S.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: S3.Ay,
    useSearchTerms: () => [V.intl.string(V.t["f6kk+r"])],
});
var S5 = n(478016),
    S6 = n(77468),
    S8 = n(289498),
    S7 = n(573648),
    S9 = n(874490),
    xe = n(370480),
    xt = n(968309);
let xn = new Set([I.fg2.XBOX, I.fg2.PLAYSTATION, I.fg2.PLAYSTATION_STAGING, I.fg2.CRUNCHYROLL]);
var xi = n(169869),
    xl = n(814925),
    xs = n(733110),
    xr = n(479785),
    xa = n(757036),
    xo = n(555837),
    xu = n(43990),
    xd = n(241524),
    xc = n(51965),
    xg = n(377368),
    xm = n(631368),
    xA = n(212739),
    xE = n(30370),
    xh = n(833159),
    xS = n(385740),
    xx = n(660594);
function xT() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, xm.$)()),
            (t = (0, xA.O)()),
            (l = null != (i = (0, _.bG)([xE.A], () => xE.A.getAccount(null, I.fg2.XBOX))) && !i.revoked),
            e === xm.C.NONE || t
                ? { variant: xm.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === xm.C.NO_ACCESS && !l }),
        { analyticsLocations: a } = (0, eX.Ay)(tk.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, xg.yW)(a),
        u = (0, xd.A)("(max-width: 485px)");
    if (s === xm.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (s) {
        case xm.C.HAS_ACCESS:
        case xm.C.BLOCK_CLAIM:
            ((c = V.intl.string(xS.default["7PdsMK"])),
                (g = (0, p.jsx)(xc.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: V.intl.string(xS.default.CubeLC),
                    onClick: () => {
                        (0, lT.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, p.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case xm.C.NO_ACCESS:
            ((c = V.intl.string(xS.default.NwkRTZ)),
                (g = (0, p.jsx)(tX.A, {
                    defaultTextOverride: V.intl.string(xS.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tJ.pe.TIER_2,
                })));
            break;
        default:
            (0, io.xb)(s);
    }
    return (0, p.jsxs)(eX.f5, {
        value: a,
        children: [
            (0, p.jsxs)("div", {
                className: xx.bV,
                children: [
                    (0, p.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t.NG1e6l),
                    }),
                    (0, p.jsx)(am.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, p.jsx)(xu.N, {
                theme: I.NJ8.DARK,
                children: (e) =>
                    (0, p.jsx)("div", {
                        className: e,
                        children: (0, p.jsxs)("div", {
                            className: xx.Nr,
                            children: [
                                (0, p.jsxs)("div", {
                                    className: xx.Tp,
                                    children: [
                                        (0, p.jsx)("div", {
                                            className: xx.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, p.jsx)("div", { className: xx.$h }),
                                        (0, p.jsx)("div", { className: xx.Rv }),
                                        (0, p.jsx)("div", { className: xx.Lw }),
                                    ],
                                }),
                                (0, p.jsxs)("div", {
                                    className: xx.Mn,
                                    children: [
                                        (0, p.jsxs)("div", {
                                            className: xx.mY,
                                            children: [
                                                (0, p.jsx)("img", {
                                                    className: xx.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, p.jsx)(n4.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: xx.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, p.jsx)("div", { className: xx.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)("div", { className: xx.yF }),
                                            (0, p.jsxs)("div", {
                                                className: xx.sQ,
                                                children: [
                                                    (0, p.jsx)(uM.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n1.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, p.jsx)(n4.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: V.intl.format(xh.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(xg.Hx.CONNECT),
                                                                    (0, xt.A)({
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
var xp = n(201718),
    xf = n(321078),
    x_ = n(672130),
    xI = n(379848),
    xN = n(688901);
function xC(e) {
    let { markAsDismissed: t } = e;
    return (
        f.useEffect(() => t(m7.i.AUTO_DISMISS), [t]),
        (0, p.jsx)("div", { className: xN.Ad, children: (0, p.jsx)(AS.E, { type: "new", variant: "primary" }) })
    );
}
function xb(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, p.jsxs)("div", {
        className: xN.kL,
        children: [
            i,
            (0, p.jsxs)("div", {
                className: xN.FS,
                children: [
                    (0, p.jsxs)("div", {
                        className: xN.TK,
                        children: [
                            (0, p.jsx)(xI.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, p.jsx)(xC, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, p.jsx)(n4.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, p.jsx)(n4.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, p.jsx)(j.$, { text: V.intl.string(V.t.vD60Pv), onClick: s }),
        ],
    });
}
function xy() {
    let e = eb.A.getArticleURL(I.MVz.PS_CONNECTION);
    return (0, p.jsx)(xb, {
        title: V.intl.string(V.t.v20wwm),
        body: V.intl.format(V.t.lTZBit, { help_article: e }),
        img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eE.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, xt.A)({ platformType: I.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let xv = "/assets/9df988a227916145.png";
function xj() {
    return (0, p.jsx)(xb, {
        title: V.intl.string(xh.default["9cLtDI"]),
        body: V.intl.format(xh.default["D+kUbg"], { learnMoreLink: eb.A.getArticleURL(I.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, p.jsx)("img", { src: xv, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, xt.A)({ platformType: I.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function xO() {
    let e = eb.A.getArticleURL(I.MVz.XBOX_CONNECTION);
    return (0, p.jsx)(xb, {
        title: V.intl.string(V.t["2okkZV"]),
        body: V.intl.format(V.t.OnERSS, { help_article: e }),
        img: (0, p.jsx)("img", { src: xv, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, xt.A)({ platformType: I.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var xL = n(783419),
    xR = n(534952),
    xD = n(176219),
    xP = n(247259);
function xG(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, _.cf)(
            [xE.A],
            () => ({
                isJoining: xE.A.isJoining(n.id),
                joinErrorMessage:
                    "" === xE.A.joinErrorMessage(n.id) ? V.intl.string(V.t.j2d6Km) : xE.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== xE.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, _.bG)([lv.A], () => lv.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, p.jsx)(j.$, {
                size: "sm",
                onClick: function () {
                    S6.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? V.intl.string(V.t.RXvQQu) : V.intl.string(V.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: xP.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: xP.XX,
                    children: [
                        (0, p.jsx)(me.Ay, { size: me.Ay.Sizes.SMALL, guild: n.guild, className: xP.$f }),
                        (0, p.jsxs)("div", {
                            className: xP.Vn,
                            children: [
                                (0, p.jsx)(n4.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, p.jsx)(nr.Anchor, {
                                    href: S7.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, p.jsx)(n4.E, {
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
                s &&
                    (0, p.jsx)(n4.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: xP.R,
                        children: l,
                    }),
            ],
        })
    );
}
function xM(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s = ((t = l.id), (n = (0, xo.G)()), (i = (0, xa.L)(tJ.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return l.type === I.fg2.XBOX && s
        ? (0, p.jsx)(xj, {})
        : l.twoWayLink
          ? null
          : l.type === I.fg2.XBOX
            ? (0, p.jsx)(xO, {})
            : l.type === I.fg2.PLAYSTATION
              ? (0, p.jsx)(xy, {})
              : null;
}
function xU(e) {
    let t,
        n,
        i,
        l,
        s,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = f.useState(u.friendSync),
        [A, E] = f.useState(u.visibility),
        [h, S] = f.useState(u.metadataVisibility),
        [x, T] = f.useState(u.showActivity),
        [_, N] = f.useState(null),
        [C, b] = f.useState(null),
        [y, v] = f.useState(!1),
        [O, L] = f.useState([]),
        R = (0, S9.ML)(u.type),
        D = S7.A.get(R);
    f.useEffect(() => {
        (m(u.friendSync), E(u.visibility), S(u.metadataVisibility), T(u.showActivity));
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
            (null != e && (E(e), S6.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (S(t), S6.A.setMetadataVisibility(u.type, u.id, t), b(null)));
        }, [u]),
        (0, p.jsxs)("div", {
            className: xP.FI,
            children: [
                ((t = S7.A.get(u.type)),
                (n = S7.A.get(R)),
                (i = "1" === (u.metadata ?? {})[xL.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === I.fg2.TWITTER &&
                    i &&
                    (l = (0, p.jsx)(lg.m, {
                        text: V.intl.string(V.t.Jebrww),
                        children: (0, p.jsx)(xl.A, {
                            color: n1.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, p.jsx)(S5.U, { size: "xs", color: n1.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, p.jsxs)("div", {
                    className: xP.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: n.name,
                            className: xP.gj,
                            src: (0, c4.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: xP.$p,
                                    children: [
                                        (0, p.jsx)(n4.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: xP.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, p.jsx)("div", { className: xP.cG, children: l }),
                                    ],
                                }),
                                (0, p.jsx)(n4.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: xP.Au,
                                    children:
                                        null != n.migrationData
                                            ? V.intl.format(xD.default.Glhokn, { platformName: n.name })
                                            : n.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(n5.D, {
                            className: xP.uH,
                            onClick: function () {
                                let e = S7.A.get(u.type);
                                (0, lT.openModal)((t) =>
                                    (0, p.jsx)(lx.a, {
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
                                            xn.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, p.jsx)(l9.A, {
                                                children: V.intl.format(V.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": V.intl.string(V.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(dn.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, p.jsx)(xM, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, xe.An)(t[xL.pK.CREATED_AT], c);
                    switch (e.type) {
                        case I.fg2.REDDIT:
                            n = (0, xi.xE)(t, xP.Nz);
                            break;
                        case I.fg2.STEAM:
                            n = (0, xi.dy)(t, xP.Nz);
                            break;
                        case I.fg2.LETTERBOXD:
                            n = (0, xi.uq)(t, xP.Nz);
                            break;
                        case I.fg2.BLUESKY:
                        case I.fg2.TWITTER:
                        case I.fg2.MASTODON:
                            n = (0, xi.ED)(t, xP.Nz);
                            break;
                        case I.fg2.EBAY:
                            n = (0, xi.ub)(t, xP.Nz);
                            break;
                        case I.fg2.PAYPAL:
                            n = (0, xi.gZ)(t, xP.Nz);
                            break;
                        case I.fg2.TIKTOK:
                            n = (0, xi.HU)(t, xP.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, p.jsx)(
                                n4.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: xP.M4,
                                    children: V.intl.format(V.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = V.intl.string(V.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== S7.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, p.jsx)(
                                    "div",
                                    {
                                        className: xP.Z3,
                                        children: (0, p.jsx)(AS.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, p.jsx)(
                                    n4.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: xP.vt,
                                        children: V.intl.format(V.t.Up2ni7, {
                                            helpdeskUrl: eb.A.getArticleURL(I.MVz.CONNECTION_DETAILS),
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
                                    className: xP.jy,
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
                                                      S6.A.refresh(e.type, e.id).finally(() => {
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
                        (0, p.jsx)("div", { className: xP.tJ, children: n })
                    );
                })(u),
                (I.txh.has(u.type) &&
                    (s = (0, p.jsx)(t5.d, {
                        label: V.intl.string(V.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), S6.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                I.ewM.has(u.type) &&
                    (r = (0, p.jsx)(t5.d, {
                        label: V.intl.format(V.t["6u6J0q"], { platform: D.name }),
                        checked: x,
                        onChange: function (e) {
                            (T(e), S6.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                S7.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(t5.d, {
                        label: V.intl.string(V.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (b(n), (0, xt.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (S(n), S6.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, p.jsxs)("div", {
                    className: xP.HZ,
                    children: [
                        (0, p.jsx)(t5.d, {
                            label: V.intl.string(V.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, xt.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), S6.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, p.jsx)(ls.c, {});
                })(),
                u.revoked
                    ? (0, p.jsx)(iK.w, {
                          type: "info",
                          message: V.intl.format(V.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, xt.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(lu.D, {
                            label: V.intl.string(V.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(xG, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, p.jsx)(xr.A, { partner: u.type }),
            ],
        })
    );
}
function xV(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: xP.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, p.jsxs)("div", {
                          className: xP.Il,
                          children: [
                              (0, p.jsx)("img", { alt: n.name, className: ic()(xP.gj, xP.sN), src: i }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: xP.$p,
                                          children: (0, p.jsx)(n4.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: xP.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(n4.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: xP.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(n5.D, {
                                  className: xP.uH,
                                  onClick: () =>
                                      (0, S3.d1)(n, t.scopes, () => {
                                          S2.A.delete(t.id);
                                      }),
                                  "aria-label": V.intl.string(V.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(dn.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, p.jsx)("div", {
                      className: xP.HZ,
                      children: (0, p.jsx)(t5.d, {
                          label: V.intl.string(V.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              xp.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function xk() {
    let e = (0, S9.gn)(),
        t = (0, i3.A)((0, xR.getMigratedApplicationIdentityConnectionsScreenApplications)());
    return (0, p.jsxs)("div", {
        className: xP.lA,
        children: [
            t.map((e) => null != e && (0, p.jsx)(x_.A, { application: e, innerClassName: xP.U$ }, e.id)),
            e.map((e) =>
                (0, p.jsx)(
                    S8.A,
                    { type: e.type, innerClassName: xP.U$, location: tk.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function xw(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = f.useMemo(() => i.filter((e) => S7.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, p.jsx)(oL.y, { type: oL.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, p.jsx)(hu.pp, {
                    theme: r,
                    className: xP.p$,
                    children: (0, p.jsx)(hu.SG, {
                        note: V.intl.string(V.t.WenGZ2),
                        children: V.intl.string(V.t.aoLS84),
                    }),
                })
              : (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(C.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: V.intl.format(V.t.AioIGb, { count: l.length + o.length }),
                        }),
                        l.map((e, t) =>
                            (0, p.jsx)(
                                xV,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, p.jsx)(
                                xU,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            S6.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, p.jsx)("div", { className: xP.V, children: t })
    );
}
let xF = (0, h.E2)(S.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, p.jsx)(lu.D, { label: V.intl.string(V.t["t+aGse"]), children: (0, p.jsx)(xk, {}) });
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
    xB = (0, h.E2)(S.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, _.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, _.bG)([xE.A], () => xE.A.isFetching()),
                n = (0, _.bG)([xE.A], () => xE.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, _.cf)([xs.default], () => ({
                    authorizedAppsFetchState: xs.default.getFetchState(),
                    authorizedApps: xs.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, xf.A)(sx.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cC.Ay)(),
                o = (0, _.bG)([ua.default], () => ua.default.locale);
            return (f.useEffect(() => {
                i === xs.FetchState.NOT_FETCHED && S2.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(xT, {}),
                          (0, p.jsx)(xw, {
                              fetching: t || s || (r.length > 0 && i !== xs.FetchState.FETCHED),
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
            S6.A.fetch();
        },
        useSearchTerms: () => [
            V.intl.string(V.t["+/hZM/"]),
            V.intl.string(V.t.bsbMVz),
            V.intl.string(V.t.f7yOAX),
            V.intl.string(V.t.FYKGsL),
            V.intl.string(V.t["+KCMSi"]),
        ],
    }),
    xz = (0, h.zZ)(S.X.CONNECTIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3fe7U5"]),
        useSubtitle: () => V.intl.string(V.t.U22vw6),
        buildLayout: () => [xF, xB],
    }),
    xX = (0, h.zZ)(S.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        useSubtitle: () => V.intl.string(V.t.G9JfLg),
        buildLayout: () => [S4],
        initialize: () => (
            S2.A.fetch(),
            () => {
                S3.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    xY = (0, h.t_)(S.X.CONNECTED_APPS_PANEL, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        useObscuredNotice: of.L,
        buildLayout: () => [xz, xX],
    }),
    xH = (0, h.i4)(S.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        icon: hd.LinkIcon,
        buildLayout: () => [xY],
    });
var xW = n(625657),
    xK = n(592598),
    xZ = n(773371),
    xq = n(532294),
    xQ = n(672396);
let xJ = x0(null);
function x$() {
    var e;
    let t = x0(xJ);
    ((e = xJ),
        K().isEqual(K().omit(t, "old_enabled"), K().omit(e, "old_enabled")) ||
            (td.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (xJ = t)));
}
function x0(e) {
    let t = xq.default.getNotificationPositionMode(),
        n = t !== I.G6Q.DISABLED,
        i = la.Ay.getOverlayKeybind(),
        l = la.Ay.getOverlayChatKeybind();
    return {
        enabled: xZ.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: xK.A.isNotificationDisabled(xQ.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, lS.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, lS.dI)(l.shortcut) : null,
        text_opacity_slider: xq.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? xZ.default.enabled,
    };
}
var x1 = n(237984),
    x2 = n(63035);
function x3(e) {
    (e.preventDefault(), e.stopPropagation());
}
function x4(e) {
    let { children: t } = e;
    return (0, p.jsx)("div", { onClick: x3, children: t });
}
function x5(e) {
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
        className: ic()(x2.HS, d),
        children: [
            (0, p.jsxs)(h4.s, {
                "aria-label": u,
                onClick: o,
                focusProps: { offset: 4 },
                children: [
                    null != t && (0, p.jsx)("div", { className: x2.x_, children: t }),
                    (0, p.jsxs)("div", {
                        className: x2.rN,
                        children: [
                            null != n && (0, p.jsx)("div", { className: x2.$t, children: n }),
                            (0, p.jsxs)("div", {
                                className: x2.c8,
                                children: [
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: x2.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, p.jsx)(n4.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, p.jsx)(n4.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, p.jsx)("div", { className: x2.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: x2.Om, children: a }),
        ],
    });
}
let x6 = (0, h.E2)(S.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, p.jsx)(x5, {
            title: V.intl.string(V.t["z4/l+V"]),
            description: V.intl.string(V.t["3aZq/0"]),
            action: (0, p.jsx)(j.$, {
                variant: "primary",
                text: V.intl.string(V.t.s2nVhG),
                onClick: () => {
                    (0, x1.b)(tk.A.USER_SETTINGS, I.BRT.APP);
                },
            }),
            "aria-label": V.intl.string(V.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [V.intl.string(V.t["z4/l+V"])],
});
var x8 = n(452295),
    x7 = n(684013),
    x9 = n(56562),
    Te = n(311043),
    Tt = n(454908),
    Tn = n(41984),
    Ti = n(918825),
    Tl = n(296027),
    Ts = n(562519);
let Tr = 5 * n(927813).A.Millis.DAY,
    Ta = new Ts.A("overlay_survey_timestamps");
function To(e, t) {
    let i, l;
    ((i = Date.now()),
        (null != (l = Array.from(Ta.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < Tr) ||
            Array.from(Ta.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, lT.openModalLazy)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), Ta.add(i), (n) => (0, p.jsx)(l, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function Tu() {
    (0, le.sL)("overlay-settings");
}
function Td(e) {
    let { className: t, game: n } = e;
    return (0, le.NP)() && null != n && n.elevated
        ? (0, p.jsx)("div", {
              className: t,
              children: (0, p.jsx)(iK.w, {
                  type: "warning",
                  message: V.intl.format(V.t["LJzl+0"], { helpCenterLink: eb.A.getArticleURL(I.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: V.intl.string(V.t["1iI46O"]), onClick: Tu },
              }),
          })
        : null;
}
var Tc = n(760751),
    Tg = n(9302),
    Tm = n(656513);
let TA = new Set([
    Tn.AR.INITIALIZING,
    Tn.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    Tn.AR.WAITING_FOR_MODULE_TRACKING,
    Tn.AR.WAITING_FOR_OVERLAY_OPEN,
    Tn.AR.WAITING_FOR_POPOUT_OPEN,
    Tn.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    Tn.AR.WAITING_FOR_REACT_INITIALIZATION,
    Tn.AR.WAITING_FOR_PID_FOCUS,
    Tn.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function TE(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = f.useState(!1);
    return (0, p.jsx)(Tm.N, {
        className: x2.uR,
        collapsibleContent: (0, p.jsx)("div", { className: x2.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, p.jsx)(x5, {
                ...l,
                onClick: (e) => {
                    var n;
                    (r((n = !s)), i?.(n), t?.(e));
                },
                className: ic()(x2.AC, n),
                action: (0, p.jsxs)("div", {
                    className: x2.rc,
                    children: [
                        l.action,
                        s
                            ? (0, p.jsx)(mN.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, p.jsx)(n8._, {
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
let Th = (0, h.E2)(S.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i8();
        (0, Tt.I)(e?.id);
        let n = e?.pid,
            i = (0, _.bG)(
                [Tl.default],
                () => (null == e || null == n ? null : Tl.default.getTrackedGameByPid(n)),
                [e, n],
                i1(),
            ),
            { data: l } = (0, Tt.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, _.cf)(
                [Tc.A, tc.A, Te.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i5.hw)(e, !1, [Tc.A, tc.A, Te.A]),
                [e, i],
            ),
            a = (0, _.bG)(
                [i5.Ay, Tc.A, tc.A, Te.A],
                () => (null == e ? null : (0, i5.xU)(e, i5.Ay, Tc.A, tc.A, Te.A)),
                [e],
                i1(),
            ),
            [o, u] = f.useState(r),
            [d, c] = f.useState(s),
            [g, m] = f.useState(!1);
        f.useEffect(() => {
            (u(r), c(s));
        }, [r, s]);
        let A = !(0, Tg.supportsLegacy)(),
            E = !(0, Tg.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: S } = (0, _.cf)([Tl.default], () => Tl.default.getGlobalEnabledStatus());
        function x(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case Ti.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), x8.A.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case Ti.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), x8.A.toggleOverlay(e, d, t), (l = !t && o));
                    break;
                case Ti.OverlayToggledClientSettingType.LEGACY:
                    (x7.A.setEnabled(t, S), (0, Ti.Q)(t, Ti.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case Ti.OverlayToggledClientSettingType.OOP:
                    (x7.A.setEnabled(h, t), (0, Ti.Q)(t, Ti.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || l) &&
                To(
                    i ? Ti.OverlayToggledClientSettingType.LEGACY_GAME : Ti.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let T = A && E,
            I = !h && !S,
            N = !o && !h && d && !A,
            C = !d && !S && o && !E,
            b = i?.overlayMethod === Tn.Ue.Disabled,
            y = i?.state === Tn.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && TA.has(i.state) && !b,
            j = i?.overlayMethod === Tn.Ue.OutOfProcess,
            O = i?.overlayMethod === Tn.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === Tn.Ue.Hook,
            R = i?.state === Tn.AR.OVERLAY_CRASHED || i?.state === Tn.AR.OVERLAY_CRASHED_DISABLED,
            D = !o && !d,
            [P, G] = (function () {
                switch (!0) {
                    case y && j:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        n4.E,
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
                    case y && O:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        n4.E,
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
                    case y && L:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        n4.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== x9.aI.BORDERLESS_FULLSCREEN:
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
                    case T:
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
                    case b: {
                        let e = i?.fullscreenType === x9.aI.FULLSCREEN ? V.intl.string(V.t.mJmbeC) : null;
                        return [V.intl.string(V.t.VPW4XY), e];
                    }
                    default:
                        return [V.intl.string(V.t.ONovP5), null];
                }
            })();
        (0, eI.Ay)(() => {
            x8.A.getDetectableGames();
        });
        let [M, U] = f.useMemo(
            () =>
                v
                    ? ["text-muted", n1.A.colors.TEXT_MUTED.css]
                    : y && O
                      ? ["text-feedback-warning", n1.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && j
                        ? ["text-feedback-positive", n1.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && L
                          ? ["text-strong", n1.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", n1.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, O, j, L],
        );
        return null == e
            ? null
            : (0, p.jsxs)(TE, {
                  onExpand: m,
                  className: g ? x2.tx : void 0,
                  title: (0, p.jsxs)(p.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, p.jsx)(lg.m, {
                                    text: V.intl.string(V.t["4PJP5p"]),
                                    children: (0, p.jsx)(xl.A, {
                                        size: 16,
                                        color: n1.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, p.jsx)(S5.U, {
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
                  header: (0, p.jsxs)(p.Fragment, {
                      children: [
                          y || v
                              ? (0, p.jsx)(dz.k, { size: "xxs", color: U })
                              : (0, p.jsx)("div", { className: x2.W4 }),
                          (0, p.jsx)(n4.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: V.intl.string(V.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, p.jsx)(i7.A, { game: t, pid: e?.pid, size: i7.M.MEDIUM }),
                  "aria-label": V.intl.string(V.t["87O5GC"]),
                  action: (0, p.jsx)(x4, {
                      children: (0, p.jsx)(t5.d, {
                          checked: (o && S) || (d && h),
                          disabled: T,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          (x8.A.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o));
                                          break;
                                      case "global":
                                          (x7.A.setEnabled(t, t), (i = !t && h), (l = !t && S));
                                          break;
                                      case "both":
                                          (x7.A.setEnabled(t, t),
                                              x8.A.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (l = (!t && S) || (!t && o)));
                                  }
                                  let s = null;
                                  (i
                                      ? (s =
                                            "game" === n
                                                ? Ti.OverlayToggledClientSettingType.LEGACY_GAME
                                                : Ti.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? Ti.OverlayToggledClientSettingType.OOP_GAME
                                                : Ti.OverlayToggledClientSettingType.OOP),
                                      null != s && To(s, e.id ?? null));
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
                  warning: (0, p.jsx)(Td, { className: x2.Hh, game: e }),
                  children: [
                      (0, p.jsx)(x5, {
                          title: V.intl.string(V.t["7BlVIs"]),
                          description: V.intl.string(V.t.ndgADE),
                          hint: S ? void 0 : V.intl.string(V.t.cAFVsL),
                          "aria-label": V.intl.string(V.t["7BlVIs"]),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(t5.d, {
                                      checked: o && S,
                                      disabled: E,
                                      onChange: (e) => {
                                          e && !S
                                              ? x(e, Ti.OverlayToggledClientSettingType.OOP)
                                              : x(e, Ti.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: x2.Kz }),
                              ],
                          }),
                      }),
                      (0, p.jsx)(x5, {
                          title: V.intl.string(V.t.BfFpW1),
                          description: V.intl.string(V.t.OzInYk),
                          hint: h ? void 0 : V.intl.string(V.t["3sYHXm"]),
                          "aria-label": V.intl.string(V.t.BfFpW1),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(t5.d, {
                                      checked: d && h,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !h
                                              ? x(e, Ti.OverlayToggledClientSettingType.LEGACY)
                                              : x(e, Ti.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: x2.Kz }),
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
var TS = n(206885);
function Tx(e) {
    let { game: t, gameApplication: n } = e,
        i = f.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, _.bG)([i2.A], () => (null != n ? n : i2.A.getApplication(t?.id)), [n, t]);
    return (0, p.jsx)(i7.A, { game: l, pid: i, size: i7.M.SMALL });
}
function TT(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, Tt.I)(t?.id);
    let o = (0, _.cf)([i5.Ay, Tc.A, tc.A, Te.A], () => (0, i5.xU)(t, i5.Ay, Tc.A, tc.A, Te.A)),
        u = (0, _.cf)([Tc.A, tc.A, Te.A], () => (0, i5.hw)(t, !1, [Tc.A, tc.A, Te.A]), [t]),
        d = l(u),
        [c, g] = f.useState(d);
    return (
        f.useEffect(() => {
            g(d);
        }, [d]),
        (0, p.jsx)(x5, {
            title: t.name,
            icon: (0, p.jsx)(Tx, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(t5.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), s(e, o, u), n && To(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, p.jsx)("div", { className: x2.Kz }),
                ],
            }),
        })
    );
}
let Tp = (0, h.E2)(S.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, _.cf)([Tl.default], () =>
                    Tl.default.getGlobalEnabledStatus(),
                ),
                l = (0, _.yK)([i5.Ay], () => i5.Ay.getGamesSeen(!0)).filter((e) => !(0, Sg.n1)(e)),
                s = (0, i3.A)(l.map((e) => e.id)),
                r = !(0, Tg.supportsLegacy)();
            function a(e) {
                x7.A.setEnabled(e, i);
                let t = i5.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, Ti.Q)(e, Ti.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && To(Ti.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                x8.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () =>
                    (0, Tg.supportsLegacy)()
                        ? r
                            ? V.intl.string(V.t.r9jEVw)
                            : V.intl.string(V.t.OzInYk)
                        : V.intl.string(V.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, p.jsx)(x5, {
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      className: x2.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(t5.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              TS.O && (0, p.jsx)("div", { className: x2.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(TE, {
                      onExpand: t,
                      className: e ? x2.tx : void 0,
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      action: (0, p.jsx)(x4, {
                          children: (0, p.jsx)(t5.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: x2.SC,
                              children: (0, p.jsx)(n4.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(b.Ip, {
                              className: x2.XG,
                              children: l.map((e, t) =>
                                  (0, p.jsx)(
                                      TT,
                                      {
                                          rawGame: e,
                                          clientSettingType: Ti.OverlayToggledClientSettingType.LEGACY_GAME,
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
    Tf = (0, h.E2)(S.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, _.cf)([Tl.default], () =>
                    Tl.default.getGlobalEnabledStatus(),
                ),
                l = !(0, Tg.supportsOutOfProcess)(),
                s = (0, _.yK)([i5.Ay], () => i5.Ay.getGamesSeen(!0)).filter((e) => !(0, Sg.n1)(e)),
                r = (0, i3.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                x7.A.setEnabled(i, e);
                let l = i5.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, Ti.Q)(e, Ti.OverlayToggledClientSettingType.OOP, l),
                    t && To(Ti.OverlayToggledClientSettingType.OOP, l));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                x8.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () => (TS.O ? (l ? V.intl.string(V.t.C7bLTQ) : V.intl.string(V.t.ndgADE)) : V.intl.string(V.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, p.jsx)(x5, {
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      className: x2.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(t5.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              TS.O && (0, p.jsx)("div", { className: x2.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(TE, {
                      onExpand: t,
                      className: e ? x2.tx : void 0,
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      action: (0, p.jsx)(x4, {
                          children: (0, p.jsx)(t5.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: x2.SC,
                              children: (0, p.jsx)(n4.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(b.Ip, {
                              className: x2.XG,
                              children: s.map((e, t) =>
                                  (0, p.jsx)(
                                      TT,
                                      {
                                          rawGame: e,
                                          clientSettingType: Ti.OverlayToggledClientSettingType.OOP_GAME,
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
    T_ = (0, h.zZ)(S.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [Th, Tf, Tp, x6],
    }),
    TI = (0, h.zD)(S.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, _.bG)([xq.default], () => !xq.default.disableClickableRegions),
        setValue: (e) => {
            x7.A.setDisableClickableRegions(!e);
        },
        useTitle: () => V.intl.string(V.t["+eFXxq"]),
        useSubtitle: () => V.intl.string(V.t.kivMAp),
    }),
    TN = (0, h.E2)(S.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, _.bG)([la.Ay], () => la.Ay.getOverlayKeybind()),
                t = !(0, Tg.supportsLegacy)(),
                n = !(0, Tg.supportsOutOfProcess)(),
                [i, l] = (0, _.yK)([i5.Ay], () => [i5.Ay.canShowAdminWarning, i5.Ay.getVisibleGame()], []),
                s = (0, le.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, la.DV)(e?.shortcut ?? []);
            return (0, p.jsx)("div", {
                className: x2.hc,
                children: (0, p.jsxs)("div", {
                    className: x2.eH,
                    children: [
                        (0, p.jsxs)("div", {
                            className: x2.Bu,
                            children: [
                                (0, p.jsx)(n4.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: V.intl.string(V.t.VsAZcC),
                                }),
                                r &&
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: x2.y7,
                                        children: V.intl.string(V.t.NsowVa),
                                    }),
                                a &&
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: x2.y7,
                                        children: V.intl.string(V.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, p.jsx)("div", {
                            className: x2.IH,
                            children: (0, p.jsx)(lh.A, {
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
var TC = n(515183),
    Tb = n(682763);
let Ty = (0, h.zD)(S.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i8();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i8();
            return null != e && (0, TC.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i8(),
                n = t?.id,
                i = (0, _.bG)([xK.A], () => xK.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, TC.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = i4.A.getStreamerActiveStreamMetadata()),
                    (l = i6(
                        t,
                        (i =
                            null != (n = i5.Ay.getVisibleGame())
                                ? i5.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: i2.A.getApplication(l) ?? void 0 });
            null != s && (0, Tb.x8)(s.id, e);
        },
        useTitle: () => V.intl.string(V.t.wgVQND),
        useSubtitle: () => V.intl.string(V.t["5SsyF5"]),
    }),
    Tv = (0, h.zZ)(S.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [TN, Ty, TI] });
var Tj = n(93465),
    TO = n(222407);
let TL = [
    {
        title: V.t.eVE4LX,
        description: V.t["72WNqk"],
        disabledSetting: Tj.M.TEXT_CHAT,
        key: S.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: V.t.oifnSh,
        description: V.t.bgU5r0,
        disabledSetting: Tj.M.WELCOME_GENERAL,
        key: S.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: V.t.hqsZJW,
        description: V.t.kHjdqc,
        disabledSetting: Tj.M.GO_LIVE_NUDGE,
        key: S.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: V.t.sop3rn,
        description: V.t.pjgffc,
        disabledSetting: Tj.M.GAME_ACTIVITY,
        key: S.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: V.t["2QVhbb"],
        description: V.t.wQ4ilB,
        disabledSetting: Tj.M.NOW_PLAYING,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: V.t.giM9fA,
        description: V.t.EhAfWj,
        disabledSetting: Tj.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, np.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, _.bG)([xK.A], () => xK.A.isNotificationDisabledBySetting(Tj.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function TR(e) {
    return (0, h.zD)(e.key, {
        useTitle: () => V.intl.string(e.title),
        useSubtitle: () => V.intl.string(e.description),
        useValue: () => !(0, _.bG)([xK.A], () => xK.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, TO.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let TD = (0, h.FW)(S.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => TL.map(TR),
    }),
    TP = (0, h.zZ)(S.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.xOE5bA),
        buildLayout: () => [TD],
    }),
    TG = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => V.intl.string(V.t.dnvZSg),
        useValue: () => (0, _.bG)([xq.default], () => xq.default.getAvatarSizeMode()),
        setValue: (e) => {
            x7.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: V.intl.string(V.t.YcOxtr), value: I.OSZ.LARGE },
            { id: "small", label: V.intl.string(V.t.BKIKqx), value: I.OSZ.SMALL },
        ],
    }),
    TM = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => V.intl.string(V.t.J0dpcB),
        useValue: () => (0, _.bG)([xq.default], () => xq.default.getDisplayNameMode()),
        setValue: (e) => {
            x7.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: I.pwA.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: I.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: V.intl.string(V.t.ekjlPL), value: I.pwA.NEVER },
        ],
    }),
    TU = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => V.intl.string(V.t.swsWWC),
        useValue: () => (0, _.bG)([xq.default], () => xq.default.getDisplayUserMode()),
        setValue: (e) => {
            x7.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: I.f5z.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: I.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var TV = n(391973),
    Tk = n(233741),
    Tw = n(897720),
    TF = n(32584);
function TB() {
    let e = Tk.A.getWidgetByType(I.uss.VOICE_V3);
    if (null == e) return null;
    let t = TF.A.getWidget(e.id);
    return null != t && (0, Tw.ZO)(t) ? t : null;
}
n(392164);
let Tz = (0, h.sN)(S.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => V.intl.string(V.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? V.intl.string(V.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = TB();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? V.intl.string(V.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = TB();
        null != t &&
            (e < 1
                ? (0, TV.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, TV.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var TX = n(450740),
    TY = n(968898),
    TH = n(288737);
function TW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new TH.A({
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
        user: new go.A({ id: l, username: e }),
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
let TK = (0, h.E2)(S.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, _.cf)([xq.default], () => ({
                    avatarSizeMode: xq.default.getAvatarSizeMode(),
                    displayNameMode: xq.default.getDisplayNameMode(),
                    displayUserMode: xq.default.getDisplayUserMode(),
                })),
                [s] = f.useState(() => [
                    TW(V.intl.string(V.t.C0ZDvo), !0, !1),
                    TW(V.intl.string(V.t.iOtj8E), !1, !1, !0),
                    TW(V.intl.string(V.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, _.bG)([Tk.A, TF.A], () => {
                    let e = Tk.A.getWidgetByType(I.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = TF.A.getWidget(e.id);
                    return null != t && (0, Tw.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = TW(t.username)).user = t), e) : null, ...s].filter(io.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, p.jsx)(xu.N, {
                    theme: I.NJ8.ONYX,
                    children: (e) =>
                        (0, p.jsxs)("div", {
                            className: ic()(x2.Y5, e),
                            children: [
                                (0, p.jsx)("div", {
                                    className: x2.kJ,
                                    children: (0, p.jsx)(TX.DH, {
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
                                        displayUserMode: l,
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
                                (0, p.jsxs)("div", {
                                    className: x2.R$,
                                    children: [
                                        (0, p.jsx)(TY.Pl, { children: V.intl.string(V.t.KNJ6Vq) }),
                                        (0, p.jsx)(TY.CS, {}),
                                        (0, p.jsx)(TY.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, p.jsx)("div", { className: x2.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    TZ = (0, h.zZ)(S.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => V.intl.string(V.t.r1TZfh),
        buildLayout: () => [TK, TG, TM, TU, Tz],
    });
var Tq = n(97005),
    TQ = n(667419),
    TJ = n(776162),
    T$ = n(114994),
    T0 = n(371169),
    T1 = n(254821);
let T2 = {
    [I.uss.VOICE_V3]: S.X.OVERLAY_WIDGETS_VOICE,
    [I.uss.QUICK_ACTIONS]: S.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
    [I.uss.NOTIFICATIONS]: S.X.OVERLAY_WIDGETS_NOTIFICATIONS,
    [I.uss.TEXT_CHAT_V3]: S.X.OVERLAY_WIDGETS_CHAT,
    [I.uss.FRIENDS]: S.X.OVERLAY_WIDGETS_FRIENDS,
    [I.uss.ACTIVITY]: S.X.OVERLAY_WIDGETS_ACTIVITY,
    [I.uss.VIDEO]: S.X.OVERLAY_WIDGETS_VIDEO,
    [I.uss.GO_LIVE]: S.X.OVERLAY_WIDGETS_STREAMS,
};
function T3(e) {
    let t = nf.A[e],
        n = T2[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: l, predicate: s } = t;
    return (0, h.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => l(),
        usePredicate: () => ((0, np.M8)("OverlayWidgetsCategory"), s?.() ?? !0),
        useValue: () => (0, _.bG)([TF.A], () => (0, TQ.$e)(e, TF.A), []),
        setValue: (t) => {
            ((0, TQ.j$)(), (0, TQ.JA)(e, !t));
        },
    });
}
let T4 = (0, h.FW)(S.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(T1.default["Qk/rJB"]),
        useSubtitle: () => V.intl.string(T1.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => TJ.t3.flatMap(T3),
    }),
    T5 = (0, h.E2)(S.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, _.bG)([T$.A], () => T$.A.getProjects());
            return (f.useEffect(() => {
                (0, T0.listProjects)();
            }, []),
            0 === e.length)
                ? null
                : (0, p.jsxs)(q.B, {
                      gap: 8,
                      children: [
                          (0, p.jsx)(C.D, {
                              variant: "heading-sm/semibold",
                              color: "text-muted",
                              children: V.intl.string(T1.default["pbu+Yx"]),
                          }),
                          e.map((e) => (0, p.jsx)(TJ.i2, { project: e }, e.id)),
                      ],
                  });
        },
        usePredicate: () => (0, Tq.TW)("overlay_settings_conjure_apps"),
        useSearchTerms: () => [V.intl.string(T1.default["pbu+Yx"])],
    }),
    T6 = (0, h.Tf)(S.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => V.intl.string(V.t["hW+EMu"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: TQ.eL,
    }),
    T8 = (0, h.zZ)(S.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => V.intl.string(T1.default["Qk/rJB"]),
        usePredicate: n_.b_,
        buildLayout: () => [T4, T5, T6],
    });
var T7 = n(54761);
function T9() {
    let [e, t] = (0, m0.kn)([eE.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, Z.Ay)(() => () => {
        t(m7.i.AUTO_DISMISS);
    }),
    e !== eE.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsxs)("div", {
                      className: T7.xC,
                      children: [
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: T7.tl,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsxs)("div", {
                                  className: T7.vJ,
                                  children: [
                                      (0, p.jsx)(C.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: V.intl.string(V.t.jzjJQg),
                                      }),
                                      (0, p.jsx)(n4.E, {
                                          variant: "text-md/normal",
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
                                  className: T7.lh,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: T7.VV,
                              children: (0, p.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t.Q26diF),
                                  onClick: () => void t(m7.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(ls.c, { className: T7.yF }),
              ],
          });
}
function pe() {
    let e = (0, _.bG)([tu.A], () => tu.A.enabled),
        t = (0, np.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsx)(iK.w, {
                      type: "warning",
                      message: V.intl.format(V.t.fuEX5B, {
                          onClick: function () {
                              return (0, na.openUserSettings)(S.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, p.jsx)(ls.c, { className: T7.yF }),
              ],
          })
        : null;
}
let pt = (0, h.t_)(S.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                x$(),
                la.Ay.addChangeListener(x$),
                xK.A.addChangeListener(x$),
                xq.default.addChangeListener(x$),
                xZ.default.addChangeListener(x$),
                e8.isPlatformEmbedded && (0, SA.a2)(),
                () => {
                    (la.Ay.removeChangeListener(x$),
                        xK.A.removeChangeListener(x$),
                        xq.default.removeChangeListener(x$),
                        xZ.default.removeChangeListener(x$),
                        e8.isPlatformEmbedded && (0, SA.e0)());
                }
            );
        },
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        decoration: {
            type: T.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(T9, {}), (0, p.jsx)(pe, {})] });
            },
        },
        buildLayout: () => [T_, Tv, T8, TZ, TP],
    }),
    pn = (0, h.i4)(S.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        icon: xW.l,
        usePredicate: n_.b_,
        buildLayout: () => [pt],
    });
var pi = n(687966);
let pl = (0, h.AK)(S.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.OYYY6q),
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    ps = (0, h.gN)(S.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [pl] });
var pr = n(227309),
    pa = n(29160),
    po = n(552366),
    pu = n(938442);
function pd(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, Tt.I)(t.id);
    let o = (0, _.cf)([i5.Ay, Tc.A, tc.A, Te.A], () => (0, i5.xU)(t, i5.Ay, Tc.A, tc.A, Te.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, _.cf)([i5.Ay], () => ({
            canToggleDetection: null == a || i5.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: i5.Ay.isDetectionEnabled(o),
        })),
        c = (0, _.bG)([i5.Ay], () => i5.Ay.getVisibleGame()),
        [g, m] = f.useState(!1),
        A = f.useRef(null),
        E = null != c && (0, i5.Es)(o) === (0, i5.Es)(c),
        h = !l && !g,
        S = !i && !E,
        x = h || S,
        T = f.useMemo(
            () =>
                (0, Sg.n1)(o)
                    ? r
                        ? o.gameName
                        : V.intl.formatToPlainString(V.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = f.useState(T ?? "???"),
        b = ic()(pu.tR, {
            [po.LO]: !i,
            [po.Rw]: i,
            [po.FB]: null != o && i,
            [po.xL]: r,
            [po.fG]: null != s && s.length > 0,
        });
    function y() {
        (x8.A.deleteEntry(o),
            s?.forEach((e) => {
                x8.A.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? Tc.A.getDetectableGame(o.id) : null;
        (td.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, Sg.n1)(o) ? o.gameName : o.name,
        }),
            (0, lT.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("568035"), n.e("627495")]).then(n.bind(n, 651930));
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
                className: b,
                children: [
                    (0, p.jsxs)("div", {
                        className: ic()(po.$K, pu.Vd),
                        children: [
                            null != o.processGame || (o.verified && !l)
                                ? (0, p.jsxs)("div", {
                                      className: po.HS,
                                      children: [
                                          (0, p.jsx)("div", { className: po.mO, children: T }),
                                          (0, p.jsx)(lg.m, {
                                              text: V.intl.string(V.t["4PJP5p"]),
                                              children: (0, p.jsx)(xl.A, {
                                                  className: po.qf,
                                                  size: 18,
                                                  color: n1.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, p.jsx)(S5.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n1.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, p.jsx)("input", {
                                      className: ic()(po.mO, po.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && x8.A.editName(o, N);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === lk.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => C(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || E
                                        ? (e = V.intl.string(V.t.VbV5dv))
                                        : null != n && "" !== n && (e = V.intl.format(V.t["gGeOE+"], { when: n })),
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: po.GN,
                                        children: (0, p.jsx)(pa.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
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
                    x &&
                        (0, p.jsx)(af.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, p.jsx)(g6.W, {
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
                                    className: ic()(po._Q, { [po.g9]: t.isShown }),
                                    children: (0, p.jsx)(lg.m, {
                                        text: V.intl.string(V.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, p.jsx)(ld.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: g3.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": V.intl.string(V.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, p.jsx)(lg.m, {
                        text: V.intl.string(V.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, p.jsx)(lA.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != s && s.length > 0 && d
                                    ? (0, lT.openModalLazy)(async () => {
                                          let { Modal: e } = await Promise.all([n.e("304823"), n.e("223976")]).then(
                                              n.bind(n, 732955),
                                          );
                                          return (t) =>
                                              (0, p.jsx)(e, {
                                                  ...t,
                                                  title: V.intl.formatToPlainString(V.t.PZ4fKc, { platform: T }),
                                                  subtitle: V.intl.formatToPlainString(V.t.ZIQbfb, { platform: T }),
                                                  actions: [
                                                      {
                                                          text: V.intl.string(V.t["ETE/oC"]),
                                                          onClick: () => t.onClose(),
                                                          variant: "secondary",
                                                      },
                                                      {
                                                          text: V.intl.string(V.t.Fmjztz),
                                                          onClick: () => {
                                                              (x8.A.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : x8.A.toggleDetection(o);
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
                    className: po.AQ,
                    children: s.map((e, t) =>
                        (0, p.jsxs)(
                            f.Fragment,
                            {
                                children: [
                                    (0, p.jsx)(pd, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, p.jsx)("div", { className: po.PQ }),
                                ],
                            },
                            (0, i5.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pc() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = Sh();
    return 0 === e.length
        ? null
        : (0, p.jsx)(q.B, {
              padding: { bottom: 32 },
              children: (0, p.jsx)(n3.n, {
                  children: (0, p.jsx)("div", {
                      children: e.map((e) =>
                          (0, p.jsx)(
                              pd,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === pr.a7 ? t : void 0 },
                              (0, i5.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let pg = (0, h.E2)(S.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, p.jsx)(pc, {}),
});
var pm = n(424994);
let pA = (0, h.zZ)(S.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [pg, ps],
    useTitle: () => V.intl.string(V.t.jCOdvx),
    useSubtitle: () =>
        (0, _.bG)([i5.Ay], () => i5.Ay.getGamesSeen(!1).some((e) => !(0, Sg.n1)(e)))
            ? V.intl.format(V.t.KPA3m9, { igdbLink: pm.s8 })
            : V.intl.string(V.t["1yiJwn"]),
});
var pE = n(890497),
    ph = n(853270),
    pS = n(969426);
function px(e) {
    let { onClose: t } = e,
        n = (0, _.bG)([i5.Ay], () => i5.Ay.getCandidateGames()),
        [i, l] = f.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, p.jsxs)(a_.l, {
        className: ic()(ph.H, pS.Y_),
        "aria-label": V.intl.string(V.t.GTCx0p),
        children: [
            (0, p.jsx)(pE.Z, {
                selectionMode: "single",
                placeholder: V.intl.string(V.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, p.jsxs)("div", {
                className: ic()(ph.o, pu.xM),
                children: [
                    (0, p.jsx)(h2.Q, { variant: "secondary", text: V.intl.string(V.t["ETE/oC"]), onClick: t }),
                    (0, p.jsx)(j.$, {
                        variant: "primary",
                        text: V.intl.string(V.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (x8.A.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var pT = n(475007);
function pp() {
    let e = f.useRef(null);
    return (0, p.jsxs)("div", {
        className: ic()(pT.a, hx.Gf),
        children: [
            (0, p.jsx)("span", { children: V.intl.string(V.t.xwhoqM) }),
            (0, p.jsx)(af.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, p.jsx)(px, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, p.jsx)(h2.Q, {
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
function pf() {
    return (0, p.jsx)("div", {
        className: ic()(pu.tR, po.eS, po.Rw),
        children: (0, p.jsxs)("div", {
            className: ic()(po.$K, pu.Vd),
            children: [
                (0, p.jsx)("div", { className: po.mO, children: V.intl.string(V.t.H68X9x) }),
                (0, p.jsx)(pp, {}),
            ],
        }),
    });
}
let p_ = (0, h.E2)(S.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = Sh(),
                n = (0, _.bG)([i5.Ay], () => i5.Ay.getVisibleGame());
            return null == n
                ? (0, p.jsx)(pf, {})
                : (0, p.jsxs)("div", {
                      className: ic()(pu.Vd, po.C2),
                      children: [
                          (0, p.jsx)(
                              pd,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === pr.a7 ? e : void 0,
                              },
                              (0, i5.Es)(n),
                          ),
                          (0, p.jsx)(pp, {}),
                      ],
                  });
        },
    }),
    pI = (0, h.zZ)(S.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => V.intl.string(V.t["MY9/Oe"]),
        buildLayout: () => [p_],
    }),
    pN = (0, h.t_)(S.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        buildLayout: () => [pI, pA],
    }),
    pC = (0, h.i4)(S.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        icon: pi.GameControllerIcon,
        usePredicate: n_.Pi,
        buildLayout: () => [pN],
    }),
    pb = (0, h.WI)(S.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => V.intl.string(V.t.BA9200),
        buildLayout: () => [pC, S1, pn, xH],
    });
var py = n(631670),
    pv = n(619499),
    pj = n(836602),
    pO = n(591179),
    pL = n(402860),
    pR = n(761508),
    pD = n(159001),
    pP = n(344346),
    pG = n(919395),
    pM = n(68750);
function pU(e) {
    let { title: t, children: n } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(C.D, { variant: "text-md/medium", className: pM.Vf, children: t }), n],
    });
}
function pV(e) {
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
        className: ic()(pM.UA, n),
        children: (0, p.jsxs)("div", {
            className: ic()(pM.yt, i),
            children: [
                (0, p.jsx)("div", {
                    className: ic()(pM.Fp, a && pM.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(pU, { title: s ?? V.intl.string(V.t.Zb06yP), children: l }),
                            null != r ? (0, p.jsx)(pU, { title: V.intl.string(V.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: pM.oB, children: t }),
            ],
        }),
    });
}
var pk = n(986687),
    pw = n(101058),
    pF = n(321191),
    pB = n(696451),
    pz = n(590941);
function pX() {
    return (0, p.jsxs)("div", {
        className: pz.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: pz.Sl }),
            (0, p.jsx)(C.D, { className: pz.h8, variant: "heading-lg/extrabold", children: V.intl.string(V.t.Z1OZCV) }),
            (0, p.jsx)(n4.E, { className: pz.h8, variant: "text-md/normal", children: V.intl.string(V.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: pz.h8,
                children: (0, p.jsx)(j.$, {
                    variant: "primary",
                    text: V.intl.string(V.t.jQ3pqt),
                    onClick: function () {
                        ((0, ci.pX)(I.BVt.GUILD_DISCOVERY), (0, tY.default)());
                    },
                }),
            }),
        ],
    });
}
var pY = n(81400),
    pH = n(450232),
    pW = n(252732),
    pK = n(355622),
    pZ = n(408018),
    pq = n(845207),
    pQ = n(290386),
    pJ = n(941933),
    p$ = n(486264);
let p0 = (0, tK.Ld)(),
    p1 = (0, G.createChannelRecord)({ id: "1", type: I.rbe.DM }),
    p2 = (0, tK.Ld)();
function p3(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, pQ.U)({ location: "profile_customization_about_me" }),
        [u, d] = f.useState(l ?? r),
        [c, g] = f.useState((0, pZ.x7)(u)),
        m = f.useRef(r),
        A = f.useRef(!1);
    return (
        f.useEffect(() => {
            if (m.current !== r) {
                let e = (0, pZ.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        f.useEffect(() => {
            void 0 !== l || u === r || A.current || (d(r), g((0, pZ.x7)(r)));
        }, [l, r, u]),
        (0, p.jsxs)(ah.A, {
            title: t,
            titleId: p0,
            description: V.intl.string(V.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, p.jsx)(pq.Ay, {
                    "aria-describedby": p2,
                    "aria-labelledby": p0,
                    className: p$.i,
                    innerClassName: p$.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: p1,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: pJ.y,
                    type: pK.oU.PROFILE_BIO_INPUT,
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
                (0, p.jsx)(lm.A, { id: p2, children: V.intl.format(V.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var p4 = n(821956),
    p5 = n(562819),
    p6 = n(84540),
    p8 = n(467690);
function p7(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eX.Ay)(),
        o = (0, pG.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, pG.CP)(n?.id),
        c = r ? gr.wL : s5.$n;
    return (0, p.jsx)(ah.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: p8.NC,
            children: [
                (0, p.jsx)(c, {
                    size: s5.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, p5.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ic()({ [p8.yj]: r }),
                    children: V.intl.string(V.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: p8.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, p4.uZ)(t, n) ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.OrokWm),
                            onClick: function () {
                                (0, p6.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var p9 = n(339984),
    fe = n(942132);
let ft = [{ name: "gif", extensions: ["gif"] }];
function fn(e) {
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
        { newestAnalyticsLocation: g } = (0, eX.Ay)(),
        m = c ? gr.wL : s5.$n,
        A = f.useCallback(() => {
            (0, pW.XD)({
                uploadType: p9.HL.AVATAR,
                analyticsSource: g,
                filters: u ? ft : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, p.jsx)(ah.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: fe.NC,
            children: [
                (0, p.jsx)(m, {
                    className: ic()({ [fe.yj]: c }),
                    size: s5.$n.Sizes.SMALL,
                    onClick: A,
                    children: s ?? V.intl.string(V.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: fe.DT,
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
var fi = n(810188);
function fl(e) {
    let { user: t, guildId: n, className: i } = e,
        l = aC.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, eX.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, pG.B0)(t, n),
        [d, c] = (0, m0.kn)([eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        g = d === eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        m = (0, f.useCallback)(() => {
            (c(m7.i.TAKE_ACTION),
                td.default.track(I.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eY.L)({ analyticsLocations: s, guildId: n }));
        }, [s, n, c]),
        A = (0, f.useCallback)(() => {
            ((0, p6.p)({ displayNameStyles: null }), td.default.track(I.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        E = (0, f.useCallback)(() => {
            (0, p6.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        h = void 0 !== o ? o : null != n ? a : r;
    return (0, p.jsx)(ah.A, {
        title: V.intl.string(eH.default["86GtGH"]),
        titleBadge: g
            ? (0, p.jsx)("div", { className: fi.A, children: (0, p.jsx)(AS.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: fi.N,
            children: [
                (0, p.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(eH.default.vJqrIg), onClick: m }),
                null == n &&
                    null != h &&
                    (0, p.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(eH.default.ymq8WQ),
                        onClick: A,
                    }),
                null != n &&
                    null != h &&
                    (0, p.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(eH.default["j/KRxc"]),
                        onClick: E,
                    }),
            ],
        }),
    });
}
var fs = n(637193),
    fr = n(622410);
function fa(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, pG.rv)(t, n?.id),
        d = f.useCallback(() => {
            (0, fs.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = f.useCallback(() => {
            (0, p6.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, p.jsx)(ah.A, {
        title: V.intl.string(V.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: fr.u,
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
var fo = n(88524);
function fu(e) {
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
        { newestAnalyticsLocation: c } = (0, eX.Ay)(),
        g = d ? gr.wL : s5.$n;
    return (0, p.jsx)(ah.A, {
        className: s,
        title: V.intl.string(V.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: fo.NC,
            children: [
                (0, p.jsx)(g, {
                    className: ic()({ [fo.yj]: d }),
                    size: s5.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, pW.XD)({ uploadType: p9.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: V.intl.string(V.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: fo.DT,
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
var fd = n(617061),
    fc = n(625613);
function fg(e) {
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
        { analyticsLocations: u } = (0, eX.Ay)(),
        d = aC.Ay.canUsePremiumProfileCustomization(t),
        c = (0, pG.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, pG.nZ)(n?.id);
    f.useEffect(() => {
        d &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tq.uq)(tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? gr.wL : s5.$n;
    return (0, p.jsx)(ah.A, {
        forcedDivider: r,
        borderType: cn.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, p.jsxs)("div", {
            className: fc.NC,
            children: [
                (0, p.jsx)(A, {
                    size: s5.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, fd.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ic()({ [fc.yj]: a }),
                    children: V.intl.string(V.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: fc.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.uMuafO),
                            onClick: function () {
                                (0, p6.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var fm = n(515727),
    fA = n(594401);
function fE(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        s = (0, pG.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, pG.Tu)(n?.id),
        [o, u] = (0, m0.kn)([eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, p.jsx)(ah.A, {
        showBorder: d,
        borderType: d ? cn.i.NEW_UPSELL : cn.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, p.jsx)("div", { className: fA.Ad, children: (0, p.jsx)(AS.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? V.intl.string(V.t.yMoMAt) : void 0,
        errors: a,
        children: (0, p.jsxs)("div", {
            className: fA.NC,
            children: [
                (0, p.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t["9/hmle"]),
                    onClick: function () {
                        ((0, fm.w)({ analyticsLocations: l, guild: n }), u(m7.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != s : null != r) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: fA.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.nQBruk),
                            onClick: function () {
                                (0, p6.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var fh = n(602853),
    fS = n(654107),
    fx = n(999291),
    fT = n(101928),
    fp = n(819169),
    ff = n(317097),
    f_ = n(508274),
    fI = n(379012);
function fN(e) {
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
        d = f.useRef(null),
        c = (0, fh.r)(n1.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n1.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, pW.sN)(i),
        A = (0, ff.Hl)(i),
        E = A === c ? g : A,
        h = m ? n1.A.unsafe_rawColors.WHITE.css : n1.A.unsafe_rawColors.PRIMARY_530.css,
        S = (0, fp.A)(a),
        x = (0, fp.A)(o),
        [T, _] = f.useState((0, oR.A)());
    return (
        f.useEffect(() => {
            (S !== a || x !== o) && _((0, oR.A)());
        }, [o, a, x, S]),
        (0, p.jsx)(af.Y, {
            targetElementRef: d,
            positionKey: T,
            renderPopout: (e) =>
                (0, p.jsx)(f_.VN, {
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
                    className: ic()(fI.oP, { [fI.r9]: s }),
                    children: [
                        (0, p.jsx)(n5.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? I.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: fI.nf,
                            "aria-label": V.intl.string(V.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(aI.PencilIcon, {
                                size: "custom",
                                className: fI.BW,
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
var fC = n(190377);
function fb(e) {
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
        c = (0, fx.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, fT.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = aC.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, fh.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        S = (0, fS.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, p.jsx)(ah.A, {
              title: V.intl.string(V.t.DMeO2X),
              disabled: !A && !s,
              className: ic()(fC.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, p.jsxs)("div", {
                  className: fC.hd,
                  children: [
                      (0, p.jsx)("div", {
                          className: fC.YX,
                          children: (0, p.jsx)(fN, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(n4.E, {
                                  className: fC.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, p.jsx)("div", {
                          className: fC.YX,
                          children: (0, p.jsx)(fN, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(n4.E, {
                                  className: fC.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: fC.WA,
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
function fy(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: l,
            placeholder: s,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tK.GV)();
    return (0, p.jsx)(ah.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, p.jsx)(lp.k, {
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
var fv = n(684732),
    fj = n(576705),
    fO = n(931175);
function fL(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, _.bG)([fj.A], () => fj.A.can(I.xBc.CHANGE_NICKNAME, r) || fj.A.can(I.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xa.L)(tJ.PremiumTypes.TIER_2);
    return (0, p.jsxs)(ah.A, {
        title: V.intl.string(V.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(lp.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: I.d0r,
                onChange: function (e) {
                    (0, p6.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : V.intl.string(V.t.gzjxQi),
            }),
            o && (0, p.jsx)(fl, { user: s, guildId: r.id, className: fO.F }),
        ],
    });
}
var fR = n(233454);
let fD = "/assets/b25da78aa7949feb.png";
function fP(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, cC.Ay)(),
        { analyticsLocations: s } = (0, eX.Ay)(tk.A.PREMIUM_UPSELL_OVERLAY);
    return (f.useEffect(() => {
        n &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: tJ.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                (0, tq.uq)(tJ.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, s]),
    n)
        ? (0, p.jsxs)("div", {
              className: fR.ry,
              children: [
                  (0, p.jsx)("div", { children: i }),
                  (0, p.jsxs)("div", {
                      className: fR.Wc,
                      children: [
                          (0, p.jsx)("img", {
                              className: fR.Tn,
                              alt: V.intl.string(V.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case I.NJ8.ASH:
                                      case I.NJ8.DARK:
                                      case I.NJ8.ONYX:
                                          return fD;
                                      case I.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return fD;
                                  }
                              })(l),
                          }),
                          (0, p.jsxs)("div", {
                              className: fR._9,
                              children: [
                                  (0, p.jsx)(n4.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.dMaDFX),
                                  }),
                                  (0, p.jsx)(n4.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, p.jsx)(ct.A, {
                              size: s5.$n.Sizes.LARGE,
                              color: s5.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: aC.Ay.isPremium(t)
                                      ? V.intl.string(V.t.AfRWI8)
                                      : V.intl.string(V.t.nkdUym),
                              },
                              subscriptionTier: tJ.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var fG = n(203164);
function fM() {
    let e = (0, _.bG)([sx.default], () => {
            let e = sx.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xa.L)(tJ.PremiumTypes.TIER_2),
        n = (0, _.bG)([pj.A, lv.A], () => lv.A.getGuild(pj.A.selectedGuildId));
    tE()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, _.cf)([pj.A], () => ({ ...pj.A.getPendingChanges(n.id), errors: pj.A.getErrors(n.id) })),
        d = (0, pw.V7)({ userId: e.id, image: i }),
        c = (0, pY.EC)(n.id),
        g = (0, _.bG)([pB.Ay], () => (null == n.id ? null : pB.Ay.getMember(n.id, e.id))),
        m = (0, _.bG)([pF.A], () => pF.A.getGuildMemberProfile(e.id, n.id)),
        A = aC.Ay.canUsePremiumProfileCustomization(e),
        E = (0, pG.z5)(i, g?.avatar),
        h = (0, pG.Ac)(s, m?.banner),
        S = (0, fv.l)(o, m?.themeColors),
        x = m?.bio ?? "",
        T = m?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: fG.Q,
        children: [
            (0, p.jsx)(
                fL,
                {
                    errors: u?.nick ?? c?.nick,
                    username: u5.Ay.getName(e),
                    pendingNick: l,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, p.jsx)(
                fy,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, p6.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: T,
                },
                "pronouns",
            ),
            (0, p.jsxs)(fP, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, p.jsx)(
                        fn,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.lqaIxI), (0, p.jsx)(pH.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, pW.rM)(e, g?.avatar, (e) => (0, p6.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, p.jsx)(
                        p7,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t["7v0T9P"]), (0, p.jsx)(pH.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, p.jsx)(fl, { user: e, guildId: n.id }),
                    (0, p.jsx)(
                        fa,
                        { user: e, guild: n, titleIcon: (0, p.jsx)(pH.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        fg,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.wR5wOo), (0, p.jsx)(pH.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(
                        fE,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.GWrZOd), (0, p.jsx)(pH.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, p.jsx)(
                        fu,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, pW.rM)(e, m?.banner, (e) => (0, p6.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, p.jsx)(fb, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, p6.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, p.jsx)(
                        p3,
                        {
                            placeholder: V.intl.string(V.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.ZzAR2Y), (0, p.jsx)(pH.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, p6.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: x,
                            disabled: !A,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var fU = n(832131);
function fV(e) {
    (0, lT.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, p.jsx)(t, { source: { ...e, page: I.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function fk(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eX.Ay)(tk.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, _.bG)([sx.default], () => {
            let e = sx.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        s = (0, _.bG)([pB.Ay], () => (null != t ? pB.Ay.getMember(t.id, l.id) : null)),
        r = (0, _.bG)([pF.A], () => !pF.A.isFetchingProfile(l.id, t?.id)),
        a = (0, _.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, _.cf)([pj.A], () => pj.A.getPendingChanges(t?.id)),
        c = (0, pw.V7)({ userId: l.id, image: o }),
        g = (0, pG.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, pG.B0)(l, t?.id);
    return (f.useEffect(() => pD.IM, []), a)
        ? (0, p.jsx)(of.A, {})
        : r
          ? (0, p.jsxs)(eX.f5, {
                value: i,
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "text-sm/normal",
                        children: V.intl.format(V.t["/PTB2E"], {
                            helpCenterLink: eb.A.getArticleURL(I.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(aE.A, { guildId: t.id, onChange: n }),
                                  (0, p.jsx)(pV, {
                                      profilePreviewTitle: (0, p.jsx)(C.D, {
                                          variant: "heading-md/medium",
                                          className: fU.YV,
                                          children: V.intl.formatToPlainString(V.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(pk.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: aC.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: fV,
                                          containerClassName: fU.ti,
                                      }),
                                      nameplatePreview: (0, p.jsx)(pP.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? fU.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(fM, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(pX, {}),
                ],
            })
          : (0, p.jsx)(oL.y, {});
}
var fw = n(903209),
    fF = n(641130);
function fB(e) {
    let { children: t, notice: n } = e;
    return (0, p.jsxs)("div", { className: fF.r, children: [n, (0, p.jsx)("div", { children: t })] });
}
var fz = n(823092),
    fX = n(815996),
    fY = n(379197),
    fH = n(488430),
    fW = n(457421),
    fK = n(940622),
    fZ = n(559474),
    fq = n(757993);
let fQ = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: l } = (0, eX.Ay)(tk.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = f.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, fK.mb)(fZ.RN.UPSELL_BANNER)),
        (t = (0, fK.mb)(fZ.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, _.bG)([fW.A], () => fW.A.getMarketingBySurface(fY.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: fH.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, fz.L_)();
    return (
        f.useEffect(() => {
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            }),
                (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                    (0, tq.uq)(tJ.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [l, d]),
        (0, p.jsxs)("div", {
            ref: s,
            className: fq.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: fq.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: fq.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: fq.Em,
                    children: [
                        (0, p.jsx)(C.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: fq.DD,
                            children: o,
                        }),
                        (0, p.jsx)(n4.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, p.jsx)(j.$, {
                    onClick: function () {
                        g(() =>
                            (0, fX.Cz)({
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
var fJ = n(451909),
    f$ = n(202639),
    f0 = n(285373),
    f1 = n(835071),
    f2 = n(724651),
    f3 = n(732280),
    f4 = n(590180),
    f5 = n(898461),
    f6 = n(469054),
    f8 = n(601298),
    f7 = n(207803),
    f9 = n(461797);
let _e = Object.keys(f9.jB);
function _t(e) {
    let t = null == e ? _e : _e.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var _n = n(201805),
    _i = n(221650);
function _l(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion),
        l = (0, _n.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = f.useMemo(() => {
            let e = (0, f9.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: _i.kL,
        children: [
            (0, p.jsx)(n5.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                className: _i.x6,
                "aria-label": V.intl.string(V.t["44yJxh"]),
                children: l.render(),
            }),
            (0, p.jsxs)(n5.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                "aria-label": `${s}: ${V.intl.string(V.t["44yJxh"])}`,
                className: _i.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: _i.L_ }),
                    (0, p.jsx)(n4.E, {
                        className: _i._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var _s = n(511484),
    _r = n(811611),
    _a = n(206697),
    _o = n(507553);
function _u(e, t) {
    let n = _o.A.useField("scrollPosition"),
        i = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion);
    (0, f.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            (l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), _o.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var _d = n(844222),
    _c = n(842092);
let _g = "/assets/d4955aabdcb5bdee.png",
    _m = { assetOrigin: f6.E.NEW_ASSET, imageUri: _g, staticImageUri: _g, description: "", originalAsset: void 0 };
function _A(e) {
    let { user: t } = e,
        { reducedMotion: n } = f.useContext(_d.C),
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
        } = (0, _.cf)([pj.A], () => {
            let e = pj.A.getPendingChanges(),
                t = pj.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, pw.V7)({ userId: t.id, image: g ?? i });
    return (0, p.jsx)(pk.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? l ?? _m,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : _c.WX,
        containerClassName: _c.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var _E = n(829497);
function _h(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = aC.Ay.isPremium(t),
        s = aC.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, _.cf)([pj.A], () => {
            let e = pj.A.getPendingChanges(),
                t = pj.A.getErrors(),
                n = pj.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, f.useState)(_t()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, f.useMemo)(() => {
                    let t = (0, f9.Wt)(e);
                    return {
                        banner: (0, f8.X)({
                            assetOrigin: f6.E.NEW_ASSET,
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
                r = (0, _.bG)([f4.A], () => {
                    let e = f4.A.getProduct(l);
                    return (0, f5.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, f.useEffect)(() => {
                (0, f7.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, f.useCallback)(() => {
                let n = _t(e);
                (t(n), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = f.useRef(null);
    _u(m, eL._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, eX.Ay)(tk.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, _a.T)(), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    f.useEffect(() => {
        n &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: I.liQ.USER_SETTINGS },
                location_stack: E,
            }),
            (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, tq.uq)(tJ.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [E, t, n]);
    let S = (0, f3.V)()?.subscriptionTrial?.skuId === tJ.pe.TIER_2,
        x = (0, f2.O)(),
        T = (0, _s.U9)(x, tJ.pe.TIER_2);
    return i
        ? (0, p.jsx)(eX.f5, {
              value: A,
              children: (0, p.jsxs)(cn.A, {
                  ref: m,
                  className: _E.MT,
                  type: cn.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(pV, {
                          stickyPreview: !1,
                          layoutClassName: _E.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(am.t, { size: "md", color: "currentColor", className: _E.PC }),
                                  V.intl.string(V.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(_l, { preset: c, onShuffle: g }), (0, p.jsx)(_A, { user: t })],
                          }),
                          children: (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsxs)("div", {
                                      children: [
                                          (0, p.jsx)(C.D, {
                                              variant: "heading-xl/extrabold",
                                              children: V.intl.string(V.t["2zGdAW"]),
                                          }),
                                          (0, p.jsx)(n4.E, {
                                              className: _E.h_,
                                              variant: "text-sm/normal",
                                              children: V.intl.string(V.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(fb, {
                                      className: _E.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, pw.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: f7.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(fu, {
                                      className: _E.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: f7.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, p.jsx)(fn, {
                                          className: _E.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: f7.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: V.intl.string(V.t["7z0D1c"]),
                                          sectionTitle: V.intl.string(V.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(fl, { user: t, className: _E.fz }),
                                  !S &&
                                      (0, p.jsx)(n4.E, {
                                          variant: "text-sm/normal",
                                          children: V.intl.string(V.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !S &&
                          (0, p.jsx)(f$.d, {
                              onSubscribeModalClose: h,
                              className: _E.Kv,
                              showUpsell: !0,
                              text: V.intl.format(V.t.TmfgI2, {
                                  onClick: () => {
                                      (0, f1.K)({ onSubscribeFinish: h });
                                  },
                              }),
                              button: l
                                  ? V.intl.string(V.t.AfRWI8)
                                  : T
                                    ? V.intl.formatToPlainString(V.t.bkQ4bH, { percent: x?.discount.amount })
                                    : V.intl.string(V.t.pj0XBN),
                              position: "inline",
                          }),
                      S &&
                          (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsx)("div", { className: _E.BU }),
                                  (0, p.jsx)(_r.Ay, {
                                      type: tJ.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tJ.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var _S = n(814390),
    _x = n(643056),
    _T = n(843282),
    _p = n(145497),
    _f = n(685073),
    __ = n(534400),
    _I = n(581781),
    _N = n(743981),
    _C = n(195801);
let _b = (0, tK.Ld)(),
    _y = f.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, _.cf)([sx.default], () => (0, _f.Zo)(sx.default.getCurrentUser()?.primaryGuild)),
            s = void 0 !== n ? n : (l.guildId ?? null),
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
            a = f.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = f.useCallback(
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
            u = f.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, p.jsx)(_p.j, {
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
                        : (0, p.jsx)(__.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: _N.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [r],
            ),
            c = f.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, p.jsx)(p.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = f.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = f.useCallback((e) => e === s, [s]),
            A = f.useCallback((e) => e, []),
            E = f.useCallback(() => {
                i?.(null);
            }, [i]),
            h = f.useRef(null);
        return (
            _u(h, eL._F.GUILD_TAG),
            (0, p.jsxs)(ah.A, {
                title: V.intl.string(V.t.Pdd1nd),
                titleId: _b,
                ref: h,
                children: [
                    (0, p.jsx)(n4.E, {
                        className: _C.VA,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(_T.Pw, {
                        className: _C.Lt,
                        optionClassName: _C.S0,
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
var _v = n(318785),
    _j = n(470739);
let _O = function () {
    return (0, _x.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, p.jsx)(ah.A, {
              title: V.intl.string(V.t.l6w3Vj),
              description: V.intl.string(V.t.joHqdj),
              children: (0, p.jsx)(j.$, {
                  text: V.intl.string(V.t.wRraFx),
                  onClick: () => {
                      (0, _j.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var _L = n(953726);
let _R = (0, tK.Ld)();
function _D(e) {
    let t = (0, xa.L)(tJ.PremiumTypes.TIER_2);
    return (0, p.jsxs)(ah.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: V.intl.string(V.t["9AjdkD"]),
        titleId: _R,
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(lp.k, {
                    "aria-labelledby": _R,
                    placeholder: e.placeholder,
                    maxLength: I.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(fl, { user: e.user, className: _L.F }),
        ],
    });
}
var _P = n(376626);
function _G(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = U.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, p.jsx)("div", {
        className: _P.u,
        children: (0, p.jsx)(t5.d, {
            label: V.intl.string(V.t["3cWDuO"]),
            description: l ? null : V.intl.formatToPlainString(V.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, py._e)() : (0, p6.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function _M(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, fh.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, fS.rh)(s, r, !1),
        o = (0, ff.LX)(a[0]);
    return (0, p.jsx)(ah.A, {
        title: V.intl.string(V.t["/X3fkf"]),
        children: (0, p.jsx)(fN, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var _U = n(518477);
let _V = function () {
    let e = (0, _.bG)([cE.default], () => cE.default.getId());
    return (0, p.jsx)(ah.A, {
        title: V.intl.string(V.t.Jzj9q4),
        children: (0, p.jsx)(j.$, {
            text: V.intl.string(V.t.Geikwq),
            onClick: () => {
                (0, pL.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tk.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: _U.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var _k = n(654910);
function _w() {
    let e = (0, _.bG)([sx.default], () => {
            let e = sx.default.getCurrentUser();
            return (tE()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, _.bG)([pF.A], () => pF.A.getUserProfile(e.id)),
        n = (0, _x.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, _.cf)([pj.A], () => {
            let e = pj.A.getPendingChanges(),
                t = pj.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, pw.V7)({ userId: e.id, image: i }),
        A = (0, pY.EC)(),
        E = aC.Ay.canUsePremiumProfileCustomization(e),
        h = (0, pG.z5)(i, e.avatar),
        S = (0, pG.Ac)(s, t?.banner),
        x = (0, fx.Ay)(e.id),
        T = x?.getLegacyUsername(),
        f = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        I = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, _v.b)(),
        C = null != (0, _f.Zo)(e.primaryGuild).guildId;
    return (0, p.jsxs)("div", {
        className: _k.Q,
        children: [
            (0, p.jsx)(_D, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: l,
                onGlobalNameChange: (e) => (0, p6.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                fy,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, p6.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(_V, {}),
            (0, p.jsx)(
                fn,
                {
                    onAvatarChange: (e) => {
                        ((0, p6.p)({ avatar: e }), (0, pG.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: V.intl.string(V.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, p.jsx)(p7, { user: e, sectionTitle: V.intl.string(V.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(fa, { user: e }),
            (0, p.jsx)(fg, { user: e, sectionTitle: V.intl.string(V.t.wR5wOo) }, "effect"),
            (0, p.jsx)(fE, { user: e, sectionTitle: V.intl.string(V.t.GWrZOd) }, "frame"),
            E
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              fu,
                              {
                                  showRemoveBannerButton: S,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, p6.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(fb, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, p6.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      _M,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, p6.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
                p3,
                {
                    sectionTitle: V.intl.string(V.t.ZzAR2Y),
                    errors: I,
                    onBioChange: (e) => (0, p6.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, p.jsx)(_y, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, p6.p)({ primaryGuildId: e }),
                }),
            null != T &&
                !n &&
                (0, p.jsx)(_G, { legacyUsername: T, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, p.jsx)(_O, {}, "badges"),
        ],
    });
}
function _F() {
    (0, lT.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("935205"), n.e("766901"), n.e("641704")]).then(n.bind(n, 562011));
        return (t) =>
            (0, p.jsx)(e, {
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
var _B = n(447080);
function _z() {
    let e = (0, _.bG)([sx.default], () => {
            let e = sx.default.getCurrentUser();
            return (tE()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, _.bG)([tu.A], () => tu.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, _.cf)([pj.A], () => ({ ...pj.A.getPendingChanges(), showNotice: pj.A.showNotice() })),
        a = (0, pw.V7)({ userId: e.id, image: i }),
        o = (0, pG.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, _S.A)() && null != n ? fJ.Ay.parse(void 0, n).content : n,
        d = aC.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eX.Ay)(tk.A.USER_SETTINGS_USER_PROFILE);
    f.useEffect(() => py.IM, []);
    let [g, m] = f.useState(!1),
        A = !d,
        E = f.useRef(null);
    return t
        ? (0, p.jsx)(of.A, {})
        : (0, p.jsxs)(eX.f5, {
              value: c,
              children: [
                  (0, p.jsx)(fQ, {}),
                  (0, p.jsx)(pV, {
                      profilePreview: (0, p.jsx)(pk.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: _F,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: _B.ti,
                      }),
                      nameplatePreview: (0, p.jsx)(pP.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? _B.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(_w, {}),
                  }),
                  (0, p.jsx)(c3.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, p.jsx)("div", {
                          ref: E,
                          children: (0, p.jsx)(_h, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !s &&
                      (0, p.jsx)(f$.d, {
                          className: _B.EL,
                          showUpsell: !g,
                          text: V.intl.format(V.t.TmfgI2, { onClick: () => (0, f1.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, p.jsx)(f0.l, {
                              size: "md",
                              location: tk.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, p.jsx)("div", {
                              className: _B.Xl,
                              children: (0, p.jsx)(j.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (td.default.track(I.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          E?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: V.intl.string(V.t.uw9zI7),
                                  icon: am.t,
                              }),
                          }),
                      }),
              ],
          });
}
var _X = n(625494);
n(46121);
var _Y = n(944983);
let _H = { [eL.Eq.USER_PROFILE]: "main_profile_tab", [eL.Eq.GUILD]: "guild_profile_tab" },
    _W = (0, h.E2)(S.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, _.bG)([lj.A, gJ.Ay, pj.A], () => {
                    let e = pj.A.selectedGuildId ?? lj.A.getGuildId();
                    return null == e || pj._.has(e) ? gJ.Ay.getFlattenedGuildIds().find((e) => !pj._.has(e)) : e;
                }),
                t = (0, _.bG)([lv.A], () => lv.A.getGuild(e)),
                n = (0, _.bG)([pj.A], () => pj.A.showNotice()),
                i = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
                l = _o.A.useField("subsection");
            return (
                f.useEffect(() => {
                    (0, it._)(_H[l]);
                }, [l]),
                f.useEffect(() => {
                    null != i && t?.id != null && (0, fw.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, p.jsx)(fB, {
                    children: (0, p.jsxs)(uw.F, {
                        component: (0, p.jsx)(lm.A, {
                            children: (0, p.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(V.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, p.jsxs)(pR.V, {
                                className: _Y.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                _X._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eL.Eq.GUILD && null != t && (0, pD.V2)(t.id),
                                            _o.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, p.jsx)(
                                        pR.V.Item,
                                        {
                                            className: _Y.YU,
                                            id: eL.Eq.USER_PROFILE,
                                            children: V.intl.string(V.t["2p07FR"]),
                                        },
                                        eL.Eq.USER_PROFILE,
                                    ),
                                    (0, p.jsx)(
                                        pR.V.Item,
                                        {
                                            className: ic()(_Y.YU, _Y.HY),
                                            "aria-label": V.intl.string(V.t.kPHroX),
                                            id: eL.Eq.GUILD,
                                            children: V.intl.string(V.t.kPHroX),
                                        },
                                        eL.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eL.Eq.GUILD
                                ? (0, p.jsx)(fk, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                  _X._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, pD.JJ)(e.id);
                                      },
                                  })
                                : (0, p.jsx)(_z, {}),
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
    _K = (0, h.zZ)(S.X.PROFILE_CATEGORY, { buildLayout: () => [_W] });
var _Z = n(379633);
function _q() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, ga.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return null == e
        ? null
        : (0, p.jsxs)("div", {
              className: _Z.a5,
              children: [
                  (0, p.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: v._3.SIZE_48,
                      "aria-label": V.intl.string(V.t.lqaIxI),
                  }),
                  (0, p.jsxs)("div", {
                      className: _Z.FS,
                      children: [
                          (0, p.jsx)(n4.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, p.jsxs)("div", {
                              className: _Z.Fk,
                              children: [
                                  (0, p.jsx)(n4.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: V.intl.string(V.t.Ip9nBS),
                                  }),
                                  (0, p.jsx)(aI.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let _Q = (0, h.t_)(S.X.PROFILE_PANEL, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        notice: { stores: [pj.A], element: pv.A },
        initialize: () => py.F7,
        buildLayout: () => [_K],
    }),
    _J = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _0,
        StronglyDiscouragedCustomComponent: _q,
        usePredicate: () => !(0, pO.X)("user_settings_sidebar"),
        buildLayout: () => [_Q],
    }),
    _$ = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _0,
        StronglyDiscouragedCustomComponent: _q,
        usePredicate: () => (0, pO.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cE.default.getId();
            (0, pL.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function _0() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, ga.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return (0, p.jsx)(y.eu, { src: t, avatarDecoration: n, size: v._3.SIZE_20, "aria-hidden": !0 });
}
let _1 = (0, h.WI)(S.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [_J, _$] });
var _2 = n(98207);
n(204925);
let _3 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, lT.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, p.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? u1.tE : null, onCloseCallback: t },
    );
};
var _4 = n(940856),
    _5 = n(506775),
    _6 = n(379257),
    _8 = n(121780),
    _7 = n(666113);
function _9() {
    let e = _8.A.getCountryCode(),
        t = null != e ? _7.IN[e.alpha2] : void 0;
    _6.A.openUrl(eb.A.getArticleURL(t ?? _7.k9));
}
var Ie = n(521169);
function It() {
    return (0, Ie.w)(_7.Vc);
}
var In = n(83154);
function Ii() {
    let e = It(),
        t = (0, _5.ZP)();
    if (!e) return null;
    switch (t) {
        case _5.M$.ADULT:
            return V.intl.format(In.default.gi4ulu, { handleOnAgeGatedContentHook: _5.M0 });
        case _5.M$.TEEN:
            return V.intl.format(In.default["221iML"], {
                handleOnAgeGatedContentHook: _5.M0,
                handleOnConfirmAgeHook: _5.aP,
            });
        case _5.M$.UNVERIFIED:
            return V.intl.format(In.default["W0/7DD"], {
                handleOnAgeGatedContentHook: _9,
                handleOnConfirmAgeHook: _5.aP,
            });
    }
}
var Il = n(26137),
    Is = n(957485);
function Ir() {
    let e = It(),
        t = (0, _5.ZP)();
    return e ? { icon: t === _5.M$.ADULT ? Il.r : Is.i, backgroundColor: n1.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function Ia() {
    let e = Ir();
    return null != e ? { type: T.hp.ICON, ...e } : null;
}
function Io() {
    return It() ? V.intl.string(V.t.piqs0o) : null;
}
var Iu = n(438140);
let Id = [{ badgeType: T.Xi.NEW, dismissibleContent: eE.M.TINY_BRONCO_SETTINGS }],
    Ic = [];
function Ig() {
    return (0, Iu.Wt)() ? Id : Ic;
}
var Im = n(36149),
    IA = n(207560),
    IE = (((m = {}).LEGACY = "legacy"), (m.TINY_BRONCO = "tinyBronco"), m),
    Ih = (((A = {}).VERIFY = "verify"), (A.EDIT = "edit"), (A.INFO = "info"), A);
function IS(e, t) {
    let n = (0, _.bG)([sx.default], () => null != sx.default.getCurrentUser()),
        i = (0, IA.fk)(),
        l = (0, _5.ZP)(),
        s = (0, Im.Y2)(),
        r = It();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (l) {
        case _5.M$.UNVERIFIED:
            return "verify" === e;
        case _5.M$.TEEN:
            return e === (r ? "info" : "verify");
        case _5.M$.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var Ix = n(418528);
function IT() {
    let e = (0, _5.hD)();
    return (0, p.jsxs)(n4.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, V.intl.format(Ix.default.WM5adV, { handleOnHelpUrlHook: _5.M0 })],
    });
}
let Ip = {
        useTitle: () => Io() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Ii,
        useVariant: () => "secondary",
        useLeadingDecoration: Ia,
        getDismissibleBadges: Ig,
        useTrailingDecoration: () => ({
            type: T.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: IT,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        onClick: function () {
            (0, lT.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    },
    If = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...Ip, usePredicate: () => IS(Ih.EDIT, IE.LEGACY) }),
    I_ = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...Ip,
        usePredicate: () => IS(Ih.EDIT, IE.TINY_BRONCO),
        useAriaLabel: () => V.intl.string(V.t.pBMSie),
    }),
    II = {
        useTitle: () => Io() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Ii,
        useLeadingDecoration: function () {
            let e = Ir();
            return null != e ? { type: T.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: Ig,
        useTrailingDecoration: () => ({ type: T.Ln.TEXT, text: (0, _5.hD)() }),
    },
    IN = (0, h.v_)(S.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...II, usePredicate: () => IS(Ih.INFO, IE.LEGACY) }),
    IC = (0, h.v_)(S.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...II,
        usePredicate: () => IS(Ih.INFO, IE.TINY_BRONCO),
    }),
    Ib = {
        useTitle: () => Io() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Ii,
        useVariant: () => "secondary",
        useLeadingDecoration: Ia,
        getDismissibleBadges: Ig,
        useTrailingDecoration: () => ({ type: T.fq.TEXT, text: (0, _5.hD)() }),
        useLabel: function () {
            return (0, Im.yM)() ? V.intl.string(V.t["9KiIz6"]) : V.intl.string(V.t.DVywUB);
        },
        onClick: _5.aP,
    },
    Iy = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...Ib, usePredicate: () => IS(Ih.VERIFY, IE.LEGACY) }),
    Iv = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...Ib,
        usePredicate: () => IS(Ih.VERIFY, IE.TINY_BRONCO),
    }),
    Ij = [Iy, If, IN],
    IO = [Iv, I_, IC],
    IL = (0, h.Tf)(S.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => V.intl.string(V.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: T.fq.TEXT, text: V.intl.string(V.t.qxk9zo) }),
        useLabel: () => V.intl.string(V.t.BleMPB),
        onClick: () => _3(),
    });
function IR(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function ID(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function IP(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = f.useState(!1),
        a = s ? t : n(t);
    return (0, p.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, p.jsx)(n4.E, { variant: "text-md/medium", children: a }),
            (0, p.jsx)(h2.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
            }),
        ],
    });
}
function IG() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(n4.E, { variant: "text-md/medium", children: V.intl.string(V.t["8SfTN/"]) })
        : (0, p.jsx)(IP, {
              text: e,
              censor: ID,
              revealLabel: V.intl.string(V.t["Zvx+yV"]),
              hideLabel: V.intl.string(V.t.nqTD4d),
          });
}
let IM = (0, h.Tf)(S.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: T.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: IG }),
    useLabel: function () {
        return null == (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.email)
            ? V.intl.string(V.t.OYkgVk)
            : V.intl.string(V.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.email)
            ? V.intl.string(V.t["pvBD+W"])
            : V.intl.string(V.t["8peUT0"]);
    },
    onClick: function () {
        (0, lT.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, p.jsx)(e, { ...t });
        });
    },
});
var IU = n(557722),
    IV = n(53516);
function Ik() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(n4.E, { variant: "text-md/medium", children: V.intl.string(V.t.I5kDqj) })
        : (0, p.jsx)(q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(IP, {
                  text: t,
                  censor: IR,
                  revealLabel: V.intl.string(V.t.eY3xlT),
                  hideLabel: V.intl.string(V.t["jllbv+"]),
              }),
          });
}
let Iw = (0, h.Tf)(S.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.kerONq),
    useAriaLabel: function () {
        return null == (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t["SfUuE+"])
            : V.intl.string(V.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: T.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: Ik }),
    useLabel: function () {
        return null == (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t.OYkgVk)
            : V.intl.string(V.t.bt75uw);
    },
    onClick: function () {
        null == sx.default.getCurrentUser()?.phone
            ? (0, lT.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, p.jsx)(e, { reason: IU.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: IV.V },
              )
            : (0, lT.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function IF() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function IB() {
    let e = (0, pY.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(n4.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, p.jsx)(lg.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, p.jsx)(i$.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n1.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let Iz = (0, h.Tf)(S.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => V.intl.string(V.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: T.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: IB,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        useAriaLabel: () => V.intl.string(V.t.JECa91),
        useSubtitle: () => (IF() ? V.intl.string(V.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: IF,
        onClick: function () {
            (0, lT.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    IX = (0, h.zZ)(S.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, _.bG)([sx.default], () => null != sx.default.getCurrentUser()),
        useTitle: () => V.intl.string(V.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: T.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            title: V.intl.string(V.t.tuGzBT),
                            text: V.intl.string(V.t.NAzplE),
                            button: { text: V.intl.string(V.t.lm1UKt), onClick: () => (0, _4.S)(e) },
                        }
                  : {
                        type: T.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
                        title: V.intl.string(V.t["/3qnL/"]),
                        text: V.intl.string(V.t.qKs3vg),
                        button: { text: V.intl.string(V.t["7psymi"]), onClick: () => _3() },
                    };
        },
        buildLayout: () => [Iz, IL, IM, Iw, ...Ij],
    });
var IY = n(398177);
let IH = (0, h.Tf)(S.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => V.intl.string(V.t["CIGa+7"]),
    useLabel: () => V.intl.string(V.t.bt75uw),
    useAriaLabel: () => V.intl.string(V.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, lT.openModal)((e) => (0, p.jsx)(IY.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var IW = n(200921);
let IK = [];
function IZ() {
    IK = [];
}
class Iq extends _.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return IK;
    }
}
let IQ = new Iq(ts.h, {
    LOGOUT: IZ,
    LOGIN_SUCCESS: IZ,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        IK = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...IK],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        IK = n;
    },
});
function IJ() {
    let e = (0, _.cf)([IQ], () => IQ.getSessions());
    return f.useMemo(() => {
        let t = [...e],
            n = null,
            i = cE.default.getAuthSessionIdHash();
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
function I$(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? V.intl.string(V.t.TXCmfL) : im()(e).fromNow();
}
var I0 = n(176524),
    I1 = n(646270),
    I2 = n(738678),
    I3 = n(489828);
function I4(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, p.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(I0.A, { icon: t, color: r ? n1.A.colors.ICON_MUTED : "currentColor" }),
            (0, p.jsxs)(q.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, p.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, p.jsx)(n4.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, p.jsx)(n4.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, p.jsx)(n4.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, p.jsx)(n4.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function I5(e) {
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
                            return { text: V.intl.string(V.t.cDHCNY), icon: dz.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: I1.u };
                        case "horizon os":
                            return { text: e, icon: I2.G };
                        default:
                            return { text: e, icon: dz.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : I$(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(io.Vq);
    return (0, p.jsx)(I4, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, p.jsx)(n5.D, {
                className: I3.X,
                onClick: () => (0, IW.U0)(t.id_hash),
                "aria-label": V.intl.string(V.t.E4MJNt),
                children: (0, p.jsx)(dn.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function I6(e) {
    let { title: t, children: n } = e,
        i = f.useId();
    return (0, p.jsxs)(q.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, p.jsx)(C.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, p.jsx)(q.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let I8 = (0, h.E2)(S.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = IJ();
            return null == e
                ? (0, p.jsx)(oL.y, {})
                : (0, p.jsx)(I6, {
                      title: V.intl.string(V.t.LLS19o),
                      children: (0, p.jsx)(I5, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    I7 = (0, h.E2)(S.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = IJ();
            return (0, p.jsx)(lu.D, {
                label: V.intl.string(V.t.Vij32M),
                description: V.intl.string(V.t.OTXyaf),
                children: (0, p.jsx)(j.$, {
                    onClick: () => (0, IW.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: V.intl.string(V.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = IJ();
            return e.length > 0;
        },
    });
var I9 = n(766928);
function Ne() {
    return (0, p.jsx)(I4, {
        icon: I9.W,
        label: V.intl.string(V.t.iUa0sn),
        description: V.intl.format(V.t["044+8i"], {
            onClick: () =>
                (0, na.openUserSettings)(S.X.ACCOUNT_PANEL, { analyticsLocations: [tk.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let Nt = (0, h.E2)(S.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = IJ(),
                t = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return (0, p.jsxs)(I6, {
                title: V.intl.string(V.t.xx1MWc),
                children: [
                    e.map((e) => (0, p.jsx)(I5, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, p.jsx)(Ne, {}),
                ],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = IJ(),
                t = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    Nn = (0, h.zZ)(S.X.SESSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useSubtitle: () => V.intl.string(V.t.b7ZpTM),
        initialize: () => {
            (0, IW.GY)();
        },
        buildLayout: () => [I8, Nt, I7],
        useSearchTerms: () => [
            V.intl.string(V.t["+1h0k/"]),
            V.intl.string(V.t.LLS19o),
            V.intl.string(V.t.xx1MWc),
            V.intl.string(V.t.lSWsrd),
        ],
    }),
    Ni = (0, h.t_)(S.X.SESSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useObscuredNotice: of.L,
        buildLayout: () => [Nn],
    }),
    Nl = (0, h.t0)(S.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [Ni],
        initialize: () => {
            (0, IW.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = IJ(),
                n = t.length + +(null != e);
            return {
                type: T.xn.TEXT,
                text: n > 0 ? V.intl.formatToPlainString(V.t.G7zwOk, { count: n }) : V.intl.string(V.t.MKDeyL),
            };
        },
    });
var Ns = n(464477);
function Nr(e) {
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
function Na() {
    return (0, ou.bG)([sx.default], () => {
        let e = sx.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var No =
    (((E = {}).AVAILABLE = "available"),
    (E.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (E.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    E);
function Nu() {
    let e = (0, ou.bG)([sx.default], () => sx.default.getCurrentUser()?.verified);
    return Ns.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function Nd() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, ou.bG)([lv.A, fj.A, sx.default], () =>
        sx.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? V.intl.string(V.t.hxf9fX)
                : V.intl.string(V.t["3iKih7"])
            : lv.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        fj.A.can(I.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? V.intl.string(V.t.OYTCUh)
                  : V.intl.string(V.t.HC8uSZ)
              : null,
    );
}
var Nc = n(466034),
    Ng = n(705147);
let Nm = (0, h.Tf)(S.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
    useTitle: () => V.intl.string(V.t.lQsY7B),
    useSubtitle: () => Nd(!0),
    useDisabled: () => null !== Nd(!0),
    useLabel: () => V.intl.string(V.t.N86XcP),
    useVariant: () => "critical-secondary",
    usePredicate: () => {
        let e = (0, _.bG)([cE.default], () => cE.default.hasTOTPEnabled()),
            t = Nu() === No.AVAILABLE;
        return e && t;
    },
    onClick: () => NA(),
});
async function NA() {
    let e = (await (0, Ng.k)("totp")) ? V.t.xlA7Tl : V.t.EA4ZEk;
    (0, n2.A)({
        title: V.intl.string(V.t["D+aE7g"]),
        subtitle: V.intl.string(e),
        variant: "critical",
        confirmText: V.intl.string(V.t.N86XcP),
        onConfirm: () => _2.A.disable(),
    });
}
let NE = (0, h.zZ)(S.X.AUTHENTICATOR_APP_CATEGORY, {
    useTitle: () => V.intl.string(V.t.RumMFo),
    useSubtitle: () => V.intl.string(V.t.iTbTo7),
    useHeaderDecoration: function () {
        let e = (0, _.bG)([cE.default], () => cE.default.hasTOTPEnabled()),
            t = Nu() === No.AVAILABLE;
        if (!e && t)
            return {
                type: T.WX.BUTTON_GROUP,
                buttons: [
                    {
                        type: T.UV.BUTTON,
                        id: "mfa-setup-button",
                        text: V.intl.string(V.t.cTNUeD),
                        onClick: Nc.Ay.enableMFA,
                    },
                ],
            };
    },
    useInlineNotice: function () {
        switch (Nu()) {
            case No.UNAVAILABLE_NO_CRYPTO:
                return { type: T.lT.INLINE_NOTICE, noticeType: "info", role: "none", text: V.intl.string(V.t.PhHhsj) };
            case No.UNAVAILABLE_UNVERIFIED:
                return {
                    type: T.lT.INLINE_NOTICE,
                    noticeType: "warning",
                    role: "none",
                    text: V.intl.string(V.t.uggF7o),
                };
            case No.AVAILABLE:
                return;
        }
    },
    collapseOnEmpty: !1,
    buildLayout: () => [Nm],
});
var Nh = n(670492),
    NS = n(32880),
    Nx = n(663417),
    NT = n(658675),
    Np = n(900686);
function Nf() {
    (0, lT.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    _2.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, lT.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e("514567"), n.e("96179")]).then(
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
var N_ = n(858487);
function NI(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function NN() {
    let e = Nh.A.getVerificationKey();
    if ("" === e) return void Nf();
    try {
        await _2.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, sg.P0)({ text: e.body?.message ?? V.intl.string(V.t.F8FvUy), variant: "critical" });
    }
}
function NC(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = NI(t),
        l = f.useRef(null),
        s = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(NT.P, { checked: n }), (0, p.jsx)(n4.E, { variant: "text-md/normal", children: i })],
        });
    return uF.p5
        ? (0, p.jsx)(n5.D, {
              tag: "li",
              className: ic()(N_.aY, N_.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uF.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  ((0, uF.C)(i), (0, sg.P0)({ text: V.intl.string(V.t.mGZ66D), variant: "success" }));
              },
              children: s,
          })
        : (0, p.jsx)("li", { className: N_.aY, children: s });
}
let Nb = (0, h.zZ)(S.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.fC9qV0),
        useSubtitle: () =>
            (0, _.bG)([Nh.A], () => Nh.A.getBackupCodes().length > 0)
                ? V.intl.format(V.t.tp7zEK, {})
                : V.intl.string(V.t.LoOi4S),
        usePredicate: Na,
        buildLayout: () => [Ny],
    }),
    Ny = (0, h.E2)(S.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.fC9qV0)],
        Component: function () {
            let e = (0, _.bG)([Nh.A], () => Nh.A.getBackupCodes()),
                t = f.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${NI(t)}` + (n ? ` (${V.intl.string(V.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(j.$, { text: V.intl.string(V.t.Jc2myK), size: "sm", variant: "secondary", onClick: Nf })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: N_.E5,
                              children: e.map((e) => (0, p.jsx)(NC, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(s8.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(Np.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(j.$, {
                                          text: V.intl.string(V.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: NS.DownloadIcon,
                                      }),
                                  }),
                                  (0, p.jsx)(j.$, {
                                      text: V.intl.string(V.t["3x962E"]),
                                      variant: "secondary",
                                      icon: Nx.RefreshIcon,
                                      onClick: NN,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    Nv = (0, h.Tf)(S.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = f.useState(!1),
                n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : V.intl.format(e ? V.t["xDBk/I"] : V.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, p.jsx)(h2.Q, {
                              text: e ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, lT.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        handleSubmit: _2.A.disableSMS,
                        title: V.intl.string(V.t.KLWnit),
                        children: V.intl.string(V.t["W0/Duf"]),
                    });
            }),
    }),
    Nj = (0, h.zZ)(S.X.SMS_AUTH_CATEGORY, {
        useTitle: () => V.intl.string(V.t.wuHuI5),
        useSubtitle: () => (0, _.bG)([sx.default], () => Nr(sx.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
                t = (0, _.bG)([sx.default], () => null != Nr(sx.default.getCurrentUser()));
            if (!e)
                return {
                    type: T.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: T.UV.BUTTON,
                            id: "sms-setup-button",
                            text: V.intl.string(V.t.Age7yU),
                            onClick: NO,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = Nu(),
                t = Na(),
                n = (0, _.bG)([cE.default], () => cE.default.hasTOTPEnabled());
            return e === No.AVAILABLE && t && n;
        },
        buildLayout: () => [Nv],
    });
function NO() {
    let e = sx.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: IU.d.USER_SETTINGS_UPDATE, onAddedPhone: _2.A.enableSMS }),
                (0, lT.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("590275"),
                            n.e("766806"),
                            n.e("989545"),
                            n.e("311493"),
                            n.e("84704"),
                            n.e("286197"),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, p.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: IV.V },
                ));
        } else _2.A.enableSMS();
}
var NL = n(665671),
    NR = n(442433),
    ND = n(917136),
    NP = n(976910),
    NG = n(267255);
function NM(e) {
    let { credential: t } = e;
    return (0, p.jsxs)("li", {
        className: NG.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n4.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(n4.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: V.intl.format(V.t["7JgxF5"], { lastUsed: I$(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(ld.K, {
                icon: g3.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": V.intl.string(V.t["+nrTbK"]),
                onClick: (e) => {
                    (0, NR.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, p.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let NU = (0, h.zZ)(S.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.IBq4Y3),
        useSubtitle: () => V.intl.string(V.t.yK9edS),
        useHeaderDecoration: function () {
            if (Nu() === No.AVAILABLE)
                return {
                    type: T.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: T.UV.BUTTON,
                            id: "add-security-key-button",
                            text: V.intl.string(V.t["Tzs/fw"]),
                            icon: iH.j,
                            onClick: NL.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (Nu()) {
                    case No.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: T.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: V.intl.string(V.t.bWCGI9),
                        };
                    case No.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: T.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: V.intl.string(V.t.uggF7o),
                        };
                    case No.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [NV],
    }),
    NV = (0, h.E2)(S.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [V.intl.string(V.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, _.cf)([NP.A], () => ({
                hasFetchedCredentials: NP.A.hasFetchedCredentials(),
                credentials: NP.A.getCredentials(),
            }));
            return (f.useEffect(() => {
                t || ND.JQ();
            }, [t]),
            t)
                ? (0, p.jsx)(q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(NM, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(oL.y, {});
        },
    }),
    Nk = (0, h.t_)(S.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => V.intl.string(V.t.m0FidJ),
        buildLayout: () => [NU, NE, Nj, Nb],
    }),
    Nw = (0, h.t0)(S.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = Na();
            return { type: T.xn.TEXT, text: e ? V.intl.string(V.t.lQsY7B) : V.intl.string(V.t.WsUuTt) };
        },
        buildLayout: () => [Nk],
    }),
    NF = (0, h.zZ)(S.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["0iH2vc"]),
        buildLayout: () => [IH, Nw, Nl],
    }),
    NB = { [_5.M$.ADULT]: In.default.PMznGO, [_5.M$.TEEN]: In.default.qSkhZH, [_5.M$.UNVERIFIED]: In.default.vGxRDB },
    Nz = [eE.M.TINY_BRONCO_NOTICE],
    NX = [];
function NY() {
    _6.A.openUrl(_7.m5);
}
var NH = n(308645),
    NW = n(555725),
    NK = n(855267);
let NZ = (0, h.E2)(S.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["16r9jm"])],
        Component: NK.A,
    }),
    Nq = (0, h.zZ)(S.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [NZ] }),
    NQ = (0, h.t_)(S.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        buildLayout: () => [Nq],
    }),
    NJ = (0, h.t0)(S.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        useSubtitle: NW.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, NW._k)();
            return { type: T.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: T.xn.TEXT, text: (0, NW.aO)() };
        },
        initialize: () => {
            NH.Yn();
        },
        buildLayout: () => [NQ],
    }),
    N$ = (0, h.zZ)(S.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (It() ? V.intl.string(V.t.GI2mea) : null) ?? V.intl.string(V.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, Iu.LH)(),
                t = (0, _5.ZP)(),
                [n, i] = (0, m0.kn)(e ? Nz : NX);
            return e && null != n
                ? {
                      type: T.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: V.intl.format(NB[t], { handleOnBlogHook: NY }),
                      onDismiss: () => i(m7.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...IO, NJ],
    });
var N0 = n(738188),
    N1 = n(834981),
    N2 = n(987197),
    N3 = n(822585),
    N4 = n(840387),
    N5 = n(41446),
    N6 = n(83152);
let N8 = (0, h.E2)(S.X.FAMILY_CENTER_SETTING, {
        Component: N5.p,
        useSearchTerms: () => [
            V.intl.string(N6.default.RZqaJn),
            V.intl.string(N6.default.bdBmqy),
            V.intl.string(N6.default["gVWG+6"]),
            V.intl.string(N6.default.ahKIJO),
            V.intl.string(N6.default["8SLtqb"]),
        ],
    }),
    N7 = (0, h.zZ)(S.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [N8] }),
    N9 = (0, h.t_)(S.X.FAMILY_CENTER_PANEL, {
        useTitle: () => V.intl.string(N6.default.RZqaJn),
        buildLayout: () => [N7],
    }),
    Ce = (0, h.zZ)(S.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => V.intl.string(N6.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, N2.f)(),
                t = (0, N3.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, N1.VT)();
            return f.useMemo(() => (n ? { badgeType: T.Xi.WARNING } : { badgeType: T.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [Ct],
    }),
    Ct = (0, h.t0)(S.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, N1.Li)() ? V.intl.string(N6.default.IcMQUP) : V.intl.string(N6.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, N4.Z)(),
                t = (0, N1.Li)();
            return e
                ? t
                    ? V.intl.string(N6.default.G8lHFU)
                    : V.intl.string(N6.default.uOLNEZ)
                : V.intl.string(N6.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, N2.f)(),
                t = (0, N3.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: T.Xy.ICON,
                      icon: N0.WarningIcon,
                      color: n1.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n1.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [N9],
    });
var Cn = n(425587),
    Ci = n(662758);
function Cl(e) {
    if (e.body.code === I.t02.INVALID_PASSWORD) throw e;
    (0, s4.A)({ title: V.intl.string(V.t.LX0nT8), subtitle: e.body.message });
}
async function Cs() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = sx.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await Cn.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, s4.A)({
              title: V.intl.string(V.t["Y++oNe"]),
              subtitle: V.intl.format(V.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : lv.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, s4.A)({ title: V.intl.string(V.t.vJiTOL), subtitle: V.intl.string(V.t.UyVVan) })
          : t.isClaimed()
            ? (0, lT.openModal)((t) =>
                  (0, p.jsx)(Ci.default, {
                      ...t,
                      handleSubmit: (t) => (0, py.U_)(t, e).then(I.tEg, Cl),
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
                  onConfirm: () => (0, py.U_)("", !0),
              });
}
let Cr = (0, h.Tf)(S.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => V.intl.string(V.t["gIpzR+"]),
        useSubtitle: () => V.intl.string(V.t.Bd6dOf),
        useLabel: () => V.intl.string(V.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Cs(!0),
    }),
    Ca = (0, h.Tf)(S.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => V.intl.string(V.t["p/Tjtp"]),
        useSubtitle: () => V.intl.string(V.t.YvDmKb),
        useLabel: () => V.intl.string(V.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Cs(!1),
        usePredicate: () => {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Co = (0, h.zZ)(S.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Ca, Cr] }),
    Cu = (0, h.t_)(S.X.ACCOUNT_PANEL, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (_2.A.clearBackupCodes(), (0, py.Uo)());
            };
        },
        useObscuredNotice: of.L,
        buildLayout: () => [IX, NF, N$, Ce, Co],
    }),
    Cd = (0, h.i4)(S.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        icon: A$.UserIcon,
        buildLayout: () => [Cu],
    });
var Cc = n(176781),
    Cg = n(341923),
    Cm = n(572164),
    CA = n(614584),
    CE = n(915725),
    Ch = n(185973);
let CS = (0, h.zD)(S.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => V.intl.string(Ch.default.j29uJx),
        useSubtitle: () => V.intl.format(Ch.default.UCzGcQ, { learnMoreLink: eb.A.getArticleURL(I.MVz.CLIPS) }),
        useValue: () => (0, _.bG)([CE.Ay], () => CE.Ay.getEnableAutoclipping()),
        setValue: CA.uL,
        useDisabled: () => !(0, Cm.E)(),
    }),
    Cx = (0, h.zY)(S.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [CS], headerSettingKey: CS.key }),
    CT = (0, h.zZ)(S.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => V.intl.string(Ch.default.XWkJoi),
        useSubtitle: () => V.intl.string(Ch.default["MJ/VsO"]),
        usePredicate: Cg.HN,
        usePersistentBadge: () => ({ badgeType: T.Xi.BETA }),
        useInlineNotice: () =>
            (0, Cm.E)()
                ? null
                : {
                      type: T.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "status",
                      text: V.intl.string(Ch.default.wUpqua),
                      button: {
                          text: V.intl.string(Ch.default.qGgW4M),
                          onClick: () => CA.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [Cx],
    });
var Cp = n(696016);
let Cf = [Cp.zq, 25, 50, Cp.Y2, Cp.rv],
    C_ = (0, h.sN)(S.X.CLIPS_BITRATE, {
        useTitle: () => V.intl.string(V.t["8bZyov"]),
        useSubtitle: () => V.intl.string(V.t["h8DSx/"]),
        minValue: Cp.zq,
        maxValue: Cp.rv,
        useDefaultValue: () => Cp.Y2,
        getInitialValue: () => CE.Ay.getSettings().clipsQuality.bitratePercent ?? Cp.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = CE.Ay.getSettings();
            CA.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: Cf,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, Cm.E)(),
    });
var CI = n(226640);
let CN = (0, h.Hn)(S.X.CLIPS_FRAME_RATE, {
        useTitle: () => V.intl.string(V.t["2wScL1"]),
        useSubtitle: () => V.intl.string(V.t["Rf9+fy"]),
        useValue: () => (0, _.bG)([CE.Ay], () => CE.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = CE.Ay.getSettings();
            CA.GS({ ...t, frameRate: e });
        },
        useOptions: CI.Fz,
        useDisabled: () => !(0, Cm.E)(),
    }),
    CC = (0, h.E2)(S.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [],
        usePredicate: () => (0, _.bG)([CE.Ay], () => CE.Ay.getHardwareClassification()) === Cp.k9.BELOW_MINIMUM,
        Component: () => (0, p.jsx)(l9.A, { look: l9.k.WARNING, children: V.intl.string(V.t.SIxrIF) }),
    }),
    Cb = (0, h.Hn)(S.X.CLIPS_LENGTH, {
        useTitle: () => V.intl.string(V.t.OgfUio),
        useSubtitle: () => V.intl.string(V.t.H7j4tY),
        useValue: () => (0, _.bG)([CE.Ay], () => CE.Ay.getSettings().clipsLength),
        setValue: (e) => CA.h$(e),
        useOptions: CI.Qu,
        useDisabled: () => !(0, Cm.E)(),
    }),
    Cy = (0, h.E2)(S.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [],
        Component: () => (0, p.jsx)(l9.A, { look: l9.k.INFO, children: V.intl.string(V.t["Z+MfqT"]) }),
    }),
    Cv = (0, h.Hn)(S.X.CLIPS_RESOLUTION, {
        useTitle: () => V.intl.string(V.t.aFudZJ),
        useSubtitle: () => V.intl.string(V.t.nIrkW5),
        useValue: () => (0, _.bG)([CE.Ay], () => CE.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = CE.Ay.getSettings();
            CA.GS({ ...t, resolution: e });
        },
        useOptions: CI.gF,
        useDisabled: () => !(0, Cm.E)(),
    }),
    Cj = (0, h.zD)(S.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => V.intl.string(V.t["3zwNf6"]),
        useSubtitle: () => V.intl.string(V.t.m4Cjj9),
        useValue: () => (0, _.bG)([CE.Ay], () => CE.Ay.getSettings().remindersEnabled),
        setValue: (e) => CA.Mt(e),
        useDisabled: () => !(0, Cm.E)(),
    }),
    CO = (0, h.zZ)(S.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => V.intl.string(Ch.default.TGwzMe),
        buildLayout: () => [CC, Cb, CN, Cv, C_, Cy, Cj],
    }),
    CL = (0, h.zD)(S.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, _.bG)([CE.Ay], () => CE.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => CA.YP(e),
    }),
    CR = (0, h.zD)(S.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, _.bG)([CE.Ay], () => CE.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => CA.Uh(e),
    }),
    CD = (0, h.zZ)(S.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, _.bG)([sx.default], () => {
                let e = sx.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [CL, CR],
    });
var CP = n(417270),
    CG = n(847825);
let CM = (0, h.E2)(S.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t.pf54EU), V.intl.string(V.t["QyB/jK"])],
        Component: () => {
            let e = (0, _.bG)([la.Ay], () => la.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0));
            tE()(null != e, "Save clip keybind unset");
            let t = !(0, Cm.E)(),
                n = f.useRef(null),
                i = f.useCallback(
                    (t) => {
                        iZ.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = f.useCallback(() => {
                    iZ.A.setKeybind({ ...e, shortcut: (0, lS.OH)(Cp.Ot) });
                }, [e]);
            return (0, p.jsx)(lu.D, {
                label: V.intl.string(V.t.pf54EU),
                description: V.intl.string(V.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, p.jsx)("div", {
                    className: CG.g,
                    children: (0, p.jsx)(lh.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(lg.m, {
                                    text: V.intl.string(Ch.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, p.jsx)(ld.K, {
                                        icon: iW.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(Ch.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, p.jsx)(lg.m, {
                                    text: V.intl.string(Ch.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, p.jsx)(ld.K, {
                                        icon: CP.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(Ch.default.Kyk1Tp),
                                        onClick: (e) => {
                                            (e.stopPropagation(), l());
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
    CU = (0, h.E2)(S.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t["0U/hj7"]), V.intl.string(V.t["5zxkdo"])],
        usePredicate: lW.BW,
        Component: () => {
            let e = (0, _.bG)([la.Ay], () => la.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0)),
                t = (0, _.bG)([la.Ay], () => la.Ay.getKeybindForAction(I.hCu.SAVE_SCREENSHOT, !0));
            (tE()(null != e, "Save clip keybind unset"), tE()(null != t, "Save screenshot keybind unset"));
            let n = f.useCallback(
                (e) => {
                    iZ.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, p.jsx)(lu.D, {
                label: V.intl.string(V.t["0U/hj7"]),
                description: V.intl.string(V.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, p.jsx)("div", {
                    className: CG.g,
                    children: (0, p.jsx)(lh.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    CV = (0, h.zD)(S.X.CLIPS_ENABLE, {
        useTitle: () => V.intl.string(V.t.h8rgrK),
        useSubtitle: () => V.intl.string(V.t["4Qw3NO"]),
        useValue: () => (0, Cm.E)(),
        setValue: (e) => CA.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    Ck = (0, h.zY)(S.X.CLIPS_GENERAL_CARD, { buildLayout: () => [CV, CM, CU], headerSettingKey: CV.key }),
    Cw = (0, h.zZ)(S.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["rWKv+e"]),
        useSubtitle: () => V.intl.format(Ch.default["dh7g+S"], { learnMoreLink: eb.A.getArticleURL(I.MVz.CLIPS) }),
        buildLayout: () => [Ck],
    }),
    CF = (0, h.E2)(S.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [V.intl.string(V.t.s4773E), V.intl.string(V.t.svjwGh)],
        Component: () => {
            let e = (0, _.bG)([CE.Ay], () => CE.Ay.getSettings().storageLocation),
                t = !(0, Cm.E)(),
                n = f.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nT.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && CA.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, p.jsx)(lu.D, {
                label: V.intl.string(V.t.s4773E),
                description: V.intl.string(V.t.svjwGh),
                layout: "vertical",
                children: (0, p.jsxs)(q.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, p.jsx)(lp.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": V.intl.formatToPlainString(V.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, p.jsx)(j.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: i,
                            text: V.intl.string(Ch.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    CB = (0, h.zZ)(S.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => V.intl.string(Ch.default["0Q+pdZ"]),
        buildLayout: () => [CF],
    }),
    Cz = (0, h.t_)(S.X.CLIPS_PANEL, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        usePredicate: lW.sw,
        buildLayout: () => [Cw, CT, CO, CB, CD],
    }),
    CX = (0, h.i4)(S.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        icon: Cc.x,
        buildLayout: () => [Cz],
    });
var CY = n(254138),
    CH = n(290595),
    CW = n(677166),
    CK = n(410310),
    CZ = n(405018),
    Cq = n(502209);
let CQ = "user_settings_data_usage",
    CJ = [
        (0, h.zD)("pinot_member_setting", {
            useTitle: () => V.intl.string(Cq.default.M33rl6),
            useSubtitle: () =>
                V.intl.format(Cq.default.V0EPTo, {
                    learnMoreURL: eb.A.getArticleURL(I.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            usePredicate: () => (0, CW.Zd)(CQ),
            useValue: () => !(0, CK.p)().optedOut,
            setValue: (e) => {
                CK.N.updateSetting(!e);
            },
            useDisabled: function () {
                return (0, CK.p)().locked;
            },
            useDisabledMessage: () =>
                V.intl.format(Cq.default.Z9bKIJ, {
                    learnMoreURL: eb.A.getArticleURL(I.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            disabledMessageType: "info",
            getDismissibleBadges: () =>
                !(0, CW.ws)(CQ, { autoTrackExposure: !1 }) || CZ.A.isLocked()
                    ? []
                    : [{ badgeType: T.Xi.NEW, dismissibleContent: eE.M.PINOT_MEMBER_SETTING_NEW_BADGE }],
        }),
    ];
var C$ = n(153488),
    C0 = n(171316),
    C1 = n(327919),
    C2 = n(558001);
n(866945);
var C3 = n(835002);
function C4() {
    let e = (0, C0.uM)(),
        t = (0, N1.vx)(),
        n = f.useCallback(() => {
            ((0, C1.A)(t, tY.default, () =>
                (0, sg.P0)({
                    text: V.intl.formatToPlainString(N6.default.D1BwNC, { count: t.length }),
                    variant: "critical",
                }),
            ),
                (0, C2.N)(C3.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, C3.YX.LEARN_MORE));
        }, [t]),
        i = f.useCallback(() => {
            (0, C2.N)(C3.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, C3.YX.VIEWED);
        }, []);
    return f.useMemo(() => {
        if (e)
            return {
                type: T.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: V.intl.format(N6.default.i284fU, {
                    hook: (e, t) => (0, p.jsx)(nr.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let C5 = (0, h.zD)(S.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => V.intl.string(V.t.AGDDkH),
    useSubtitle: () => V.intl.string(V.t.kyo3dJ),
    useValue: () => U.Q$.useSetting(),
    setValue: (e) => CA.eQ({ allowVoiceRecording: e }),
});
var C6 = n(157559),
    C8 = n(331887);
function C7() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        t = (0, _.bG)([C8.A], () => C8.A.harvestType),
        [n, i] = f.useState(() => Date.now()),
        l = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        s = f.useRef(null);
    return (f.useEffect(() => {
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
let C9 = (0, h.Tf)(S.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => V.intl.string(V.t.qfFFos),
        useSubtitle: function () {
            let e = C7();
            if (e.allowed) return V.intl.format(V.t.NRI6vt, { article: eb.A.getArticleURL(I.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return V.intl.string(V.t.hIbRso);
                case "not_verified":
                    return V.intl.format(V.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, p.jsx)(
                                n5.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, na.openUserSettings)(S.X.ACCOUNT_INFO_EMAIL_SETTING),
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
            (ts.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                tl.Bo.get({ url: I.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        ts.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        ts.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !C7().allowed,
        useLoading: () => (0, _.bG)([C8.A], () => C8.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => V.intl.string(V.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, lT.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, p.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, py.$I)(n)
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
                                            ? C6.A.show({
                                                  title: V.intl.string(V.t.i2iul5),
                                                  body: V.intl.string(V.t["6Nmv4i"]),
                                              })
                                            : C6.A.show({
                                                  title: V.intl.string(V.t.OjbtDm),
                                                  body: V.intl.string(V.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || V.intl.string(V.t["0F5Jyt"]);
                                        C6.A.show({ title: V.intl.string(V.t.OjbtDm), body: t });
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
    be = (0, h.v_)(S.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => V.intl.string(V.t.D60Gfj),
        useSubtitle: () =>
            V.intl.format(V.t.dszICC, {
                onClickDisable: () => (0, na.openUserSettings)(S.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, na.openUserSettings)(S.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var bt = n(641216),
    bn = n(945810);
let bi = (0, bn.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function bl() {
    let { enabled: e } = bi.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var bs = n(884705);
function br() {
    return (0, _.bG)([bs.A], () => bs.A.isTogglesDisabled());
}
function ba() {
    return !U.vf.useSetting();
}
function bo(e) {
    U.vf.updateSetting(!e);
}
function bu() {
    let e = br(),
        t = U.H1.useSetting(),
        n = (0, C0.uM)();
    return e || t || n;
}
let bd = (0, h.zD)(S.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["md5l4/"], { helpdeskArticle: eb.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !bl(),
        useValue: ba,
        setValue: bo,
        useDisabled: bu,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    }),
    bc = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["2QFDU/"], { helpdeskArticle: eb.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: bl,
        useValue: ba,
        setValue: bo,
        useDisabled: bu,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    });
function bg() {
    return !U.H1.useSetting();
}
function bm(e) {
    U.H1.updateSetting(!e);
}
function bA() {
    let e = br(),
        t = (0, C0.uM)();
    return e || t;
}
let bE = (0, h.zD)(S.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () => V.intl.string(V.t.w4fvxe),
        usePredicate: () => !bl(),
        useValue: bg,
        setValue: bm,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: bA,
    }),
    bh = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () =>
            V.intl.format(V.t.cf9mvV, { helpdeskArticle: eb.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: bl,
        useValue: bg,
        setValue: bm,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: bA,
    }),
    bS = (0, h.AK)(S.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = Sx(2);
            return V.intl.format(V.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = ST();
            return { type: T.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, _.bG)([i5.Ay], () => i5.Ay.getGamesSeen(!1).some((e) => !(0, Sg.n1)(e))) && (0, nh.xl)(),
    }),
    bx = (0, h.gN)(S.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [bS] });
var bT = n(972737);
let bp = (0, h.zD)(S.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => V.intl.string(V.t.XuADY2),
        useSubtitle: () =>
            V.intl.format(V.t.FNqmmX, { helpdeskArticle: eb.A.getArticleURL(I.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, _.bG)([C$.A], () => C$.A.hasConsented(I.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, CH.U)([I.YAq.USAGE_STATISTICS], []).catch(bT.i)
                : (0, bT.O)({
                      header: V.intl.string(V.t.OdPCbN),
                      body: V.intl.string(V.t.MGWabA),
                      confirmText: V.intl.string(V.t["D3+rU4"]),
                      cancelText: V.intl.string(V.t.kYpG0u),
                      onConfirm: () => (0, CH.U)([], [I.YAq.USAGE_STATISTICS]).catch(bT.i),
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.XuADY2)],
        useDisabled: C0.uM,
    }),
    bf = (0, h.zZ)(S.X.DATA_USAGE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.QDAriI),
        useInlineNotice: C4,
        initialize: () => {
            C$.A.fetchedConsents || (0, CH.Q)();
        },
        buildLayout: () => [be, bp, bt._, bE, bd, ...CJ, C5, C9, bx],
    });
var b_ = n(249097);
let bI = (0, h.zD)(S.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => V.intl.string(b_.default.F3llsQ),
    useSubtitle: () => V.intl.string(b_.default["6goWcz"]),
    useValue: U.Sy.useSetting,
    setValue: function (e) {
        (U.Sy.updateSetting(e),
            td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: SI.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function bN() {
    let e = U.JG.useSetting();
    return (0, _.yK)(
        [gJ.Ay, lv.A],
        () => {
            let t = new Set(e);
            return gJ.Ay.getFlattenedGuildIds().filter((e) => null != lv.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let bC = (0, h.AK)(S.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = bN();
            if (0 === e.length) return V.intl.format(V.t.QJIJ5p, {});
            let t = lv.A.getGuild(e[0]),
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
                    ((e = bN()),
                    0 ===
                    (t = (0, _.yK)(
                        [lv.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => lv.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, p.jsx)(SM, { guild: t[0], size: Sm.CD }),
                                    shape: Sm.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, p.jsx)(SM, { guild: t[1], size: Sm.CD }), shape: Sm.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, p.jsx)(SM, { guild: t[0], size: Sm.CD }),
                                    shape: Sm.e0.SQUIRCLE,
                                },
                            });
            return { type: T.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    bb = (0, h.gN)(S.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [bC] }),
    by = (0, h.Qx)(S.X.PROFILE_PRIVACY_SETTING, {
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
            let i = (0, SO.gS)(t, e);
            null != i &&
                (0, lT.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("26411"), n.e("562041"), n.e("763786")]).then(
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
    bv = (0, h.zZ)(S.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ul884f),
        useSubtitle: () =>
            V.intl.format(V.t.N4jSgR, {
                learnMoreUrl: eb.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [by, bI, bb],
    });
var bj = n(952270),
    bO = n(240901);
let bL = { [eJ.tR.REAL_MONEY_GAMING]: bO.default.pmIitA },
    bR = Object.keys(bL).map(Number),
    bD = (0, h.E2)(S.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [V.intl.string(bO.default.foQaI1)],
        usePredicate: bl,
        Component: function () {
            let e = f.useMemo(
                    () =>
                        bR.map((e) => ({
                            id: String(e),
                            value: e,
                            label: V.intl.string(bL[e]),
                            leading: bj.EyeSlashIcon,
                        })),
                    [],
                ),
                t = U.XZ.useSetting();
            return (0, p.jsx)(pE.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(U.XZ.getSetting());
                    for (let e of bR) t.has(e) ? n.add(e) : n.delete(e);
                    U.XZ.updateSetting([...n]);
                },
                label: V.intl.string(bO.default.foQaI1),
                description: V.intl.format(bO.default["z/MfaY"], {
                    helpdeskArticle: eb.A.getArticleURL(I.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: V.intl.string(bO.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    bP = (0, h.zZ)(S.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(bO.default.XUj46U),
        usePredicate: bl,
        buildLayout: () => [bh, bc, bD],
    });
var bG = n(714763),
    bM = n(814278),
    bU = n(730852),
    bV = n(913122),
    bk = n(977997),
    bw = n(144485);
async function bF(e, t) {
    if (e) {
        ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, bM.to)(1), t?.());
        } catch (t) {
            let e = new bV.LG(t);
            (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                C6.A.show({
                    title: V.intl.string(V.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? V.intl.string(V.t.eAn6z2),
                }));
        }
    } else (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function bB(e) {
    let t,
        n,
        i =
            ((t = bk.A.getVoiceStateForUser(cE.default.getId())),
            (n = lb.A.getChannel(t?.channelId)),
            cE.default.getSessionId() === t?.sessionId && null != n && n.type !== I.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? bw.A.openSecureFramesUpdateConfirmation({
              title: e ? V.intl.string(V.t.DRFN1B) : V.intl.string(V.t.q29xJz),
              subtitle: e ? V.intl.string(V.t.y015ZY) : V.intl.string(V.t.E66FQn),
              confirmText: V.intl.string(V.t.aTuFYT),
              onConfirm: async () => {
                  await bF(e, () => {
                      (bU.default.disconnect(), bU.default.selectVoiceChannel(i));
                  });
              },
          })
        : await bF(e);
}
n(603266);
let bz = (0, h.zD)(S.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => V.intl.string(V.t["opi/XK"]),
    useSubtitle: () => V.intl.format(V.t["/T+ZlP"], { helpArticle: (0, bM.Lu)() }),
    useValue: function () {
        return (0, _.bG)([bG.A], () => bG.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        bB(e);
    },
});
var bX = n(787392);
function bY() {
    return (0, _.yK)([bX.A], () => bX.A.getUserIds());
}
var bH = n(803306),
    bW = n(966327),
    bK = n(774156);
function bZ(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eX.Ay)(),
        l = (0, _.bG)([sx.default], () => sx.default.getUser(t)),
        s = u5.Ay.getFormattedName(l),
        r = f.useCallback(() => {
            (0, bM.kj)(t);
        }, [t]),
        a = f.useCallback(() => (0, pL.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        f.useEffect(() => {
            (0, bH.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: bK.uW,
            children: [
                null != l && (0, p.jsx)(bW.A, { className: bK.my, user: l, size: v._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: bK.Qq,
                    children: [
                        (0, p.jsx)(n5.D, {
                            className: bK.Xh,
                            onClick: a,
                            children: (0, p.jsx)(n4.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, p.jsx)(n4.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: V.intl.format(V.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, p.jsx)(n5.D, { onClick: r, className: bK.Qz, children: (0, p.jsx)(lc.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function bq(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, bM.tC)(i.timestamp),
        r = f.useCallback(() => {
            (0, bM.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: bK.Qq,
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: V.intl.format(V.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, p.jsx)(n4.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, p.jsx)(n5.D, {
                className: bK.Kk,
                onClick: r,
                children: (0, p.jsx)(dn.P, { size: "md", color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function bQ(e) {
    let { userId: t } = e,
        n = (0, _.yK)([bX.A], () =>
            K()(bX.A.getUserVerifiedKeys(t))
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
            (0, p.jsx)(bZ, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, p.jsxs)(
                    f.Fragment,
                    {
                        children: [
                            (0, p.jsx)(bq, { className: bK.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, p.jsx)("div", { className: bK.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var bJ = n(464946),
    b$ = n(492422);
let b0 = (0, h.E2)(S.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["5b3FNI"])],
        usePredicate: function () {
            let e = bY();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = bY();
            return (0, p.jsxs)(bJ.h, {
                children: [
                    (0, p.jsx)(bJ._, {
                        header: V.intl.string(V.t["5b3FNI"]),
                        description: V.intl.format(V.t.jrTSWU, { helpArticle: (0, bM.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: b$.A, children: (0, p.jsx)(bQ, { userId: e }) }, e)),
                ],
            });
        },
    }),
    b1 = (0, h.zZ)(S.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bTwjaz),
        usePredicate: () => (0, e8.isDesktop)(),
        buildLayout: () => [bz, b0],
    }),
    b2 = (0, h.t_)(S.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        buildLayout: () => [bf, bP, bv, b1],
    }),
    b3 = (0, h.i4)(S.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        icon: CY.m,
        buildLayout: () => [b2],
    });
var b4 = n(476713);
let b5 = (0, h.AK)(S.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.O65dzZ),
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        destinationKey: S.X.AUTHORIZED_APPS_CATEGORY,
    }),
    b6 = (0, h.gN)(S.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [b5] });
var b8 = n(875444);
function b7(e, t) {
    let n = (0, _.bG)([xs.default], () => xs.default.getFetchState()),
        i = (0, _.bG)([xs.default], () =>
            e ? xs.default.getNewestTokensForNonChildrenApplications() : xs.default.getNewestTokens(),
        ),
        l = f.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, b8.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        f.useEffect(() => {
            t || S2.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xs.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var b9 = n(514479);
function ye() {
    return (0, p.jsxs)("div", {
        className: b9.d,
        children: [
            (0, p.jsx)(n4.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: b9.x,
                children: V.intl.string(V.t["+0U77d"]),
            }),
            (0, p.jsx)(n4.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.V8wClM, {
                    helpdeskArticle: eb.A.getArticleURL(I.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let yt = (0, h.E2)(S.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = b7(!0, !0);
        return e ? (0, p.jsx)(oL.y, {}) : (0, p.jsx)(ye, {});
    },
    useSearchTerms: () => [V.intl.string(V.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = b7(!0, !0);
        return e || 0 === t.length;
    },
});
function yn() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = b7(!0, !0);
    return !e && t.length > 0;
}
let yi = (0, h.zD)(S.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t.W8JtfT),
        useSubtitle: () => V.intl.string(V.t.a99KKy),
        useSearchTerms: () => [V.intl.string(V.t["Uv/eTx"])],
        useValue: () => U.Zk.useSetting(),
        setValue: (e) => U.Zk.updateSetting(e),
        usePredicate: yn,
    }),
    yl = (0, h.Qx)(S.X.IN_GAME_DMS_SETTING, {
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
        usePredicate: yn,
    });
function ys() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = b7(!0, !0);
    return {
        sortedGames: f.useMemo(() => e.toSorted((e, t) => oB.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yr = n(306537);
function ya(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: l } = e;
    return (
        (0, eI.Ay)(() => {
            (0, C2.N)(l, C3.YX.VIEWED);
        }),
        (0, p.jsx)(iK.w, { type: "info", message: t, action: { text: n, onClick: i }, role: "none" })
    );
}
function yo(e, t) {
    return {
        handleLearnMore: f.useCallback(() => {
            (t(), (0, C2.N)(e, C3.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: f.useCallback(() => {
            (_6.A.showAgeVerificationGetStartedModal({ entryPoint: yr.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, C2.N)(e, C3.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yu() {
    let e,
        t = (0, C0.uM)(),
        n = (0, IA.fk)(),
        i = (0, Im.b8)(),
        l = (0, N4.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : l && (e = "teen"), null != e) && (0, Ie.n)(_7.Vc)) return e;
    }
}
var yd = n(687123),
    yc = n(444802);
function yg() {
    let e = (0, yc.WX)();
    f.useEffect(() => {
        (0, C2.N)(C3.YA.AGE_CONFIRMATION_NOTICE, C3.YX.VIEWED);
    }, []);
    let t = f.useCallback(() => {
            (window.open(eb.A.getArticleURL(e), "_blank"), (0, C2.N)(C3.YA.AGE_CONFIRMATION_NOTICE, C3.YX.LEARN_MORE));
        }, [e]),
        n = f.useCallback(() => {
            (_6.A.showAgeVerificationGetStartedModal({ entryPoint: yr.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, C2.N)(C3.YA.AGE_CONFIRMATION_NOTICE, C3.YX.CONFIRM_AGE));
        }, []);
    return (0, p.jsx)(iK.w, {
        type: "info",
        message: V.intl.format(V.t.mFgsfg, { hook: (e, n) => (0, p.jsx)(nr.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: V.intl.string(V.t.FDSSia), onClick: n },
    });
}
function ym() {
    let e = (0, IA.aX)(yd.t.REACTIVE_CHECK),
        t = (0, Im.b8)();
    return f.useMemo(() => {
        if (e && !t) return { type: T.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yg };
    }, [e, t]);
}
var yA = n(323073),
    yE = n(386171),
    yh = n(96607);
let yS = (0, h.zD)(S.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => V.intl.string(V.t.gvC6q7),
        useSubtitle: () => V.intl.string(V.t.zirUC1),
        useValue: yE.hT,
        useDisabled: function () {
            let e = (0, yh.A)() ?? !0,
                t = (0, yA.sP)(),
                n = (0, Im.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yA.p5)() && e
                ? _6.A.showAgeVerificationGetStartedModal({ entryPoint: yr.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : U.Qe.updateSetting(e);
        },
    }),
    yx = (0, h.zD)(S.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => V.intl.string(V.t["L+yTsa"]),
        useSubtitle: () => V.intl.string(V.t["t6i/jW"]),
        useValue: yE.tI,
        useDisabled: function () {
            let e = (0, yh.A)() ?? !0,
                t = (0, yA.sP)(),
                n = (0, Im.yM)();
            return f.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yA.p5)() && e
                ? _6.A.showAgeVerificationGetStartedModal({ entryPoint: yr.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : U.Kg.updateSetting(e);
        },
    }),
    yT = (0, h.AK)(S.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.hOXd45),
        destinationKey: S.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yp = (0, h.gN)(S.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yT] });
n(667532);
var yf = n(390248),
    y_ = n(632119),
    yI = n(945276),
    yN = n(389737),
    yC = n(566769);
function yb() {
    let e,
        t = (0, yI.A)() ?? !0,
        n = (0, C0.uM)(),
        i = (0, C0.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, ou.cf)([aG.A], () => aG.A.settings.textAndImages?.explicitContentSettings ?? (0, y_.C$)())),
        {
            explicitContentGuilds: (0, y_.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, y_.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, y_.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yf.hK)() && t.includes(eJ.TO.SHOW)
            ? _6.A.showAgeVerificationGetStartedModal({ entryPoint: yr.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, y_.Jz)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(N6.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yN.E, {
        description: V.intl.string(V.t.Wnojv1),
        children: [
            (0, p.jsx)(yC.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yC.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yC.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? V.intl.string(N6.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function yy() {
    let e,
        t = (0, yI.A)() ?? !0,
        n = (0, C0.uM)(),
        i = (0, C0.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, ou.cf)([aG.A], () => aG.A.settings.textAndImages?.goreContentSettings ?? (0, yc.T4)())),
        {
            goreContentGuilds: (0, yc.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yc.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yc.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yf.hK)() && t.includes(eJ.TO.SHOW)
            ? _6.A.showAgeVerificationGetStartedModal({ entryPoint: yr.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yc.qY)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(N6.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yN.E, {
        description: V.intl.string(V.t.XgH9eh),
        children: [
            (0, p.jsx)(yC.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yC.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yC.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? V.intl.string(N6.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var yv = n(875162),
    yj = n(636745);
let yO = (0, h.E2)(S.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yc.WX)(),
            t = f.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: V.intl.string(V.t.GYpoAq),
                        component: yb,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: V.intl.string(V.t["16/3Bi"]),
                        component: yy,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, p.jsxs)(bJ.h, {
            children: [
                (0, p.jsx)(bJ._, {
                    header: V.intl.string(V.t["Hj/But"]),
                    description: V.intl.format(V.t.dliU4j, { learnMoreLink: eb.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(yv.A, { tabs: t, orientation: "vertical", tabsClassName: yj.v }),
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
var yL = n(639555),
    yR = n(617641),
    yD = n(546140),
    yP = n(406935),
    yG = n(594061);
let yM = (0, h.zD)(S.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => V.intl.string(V.t.qFsx5q),
        useSubtitle: () => V.intl.format(V.t.lunaRv, { learnMoreLink: eb.A.getArticleURL(I.MVz.SAFETY_ALERTS) }),
        useValue: yD.L,
        setValue: function (e) {
            return yG.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = yP._t.create({ value: e });
                },
                yG.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, yR.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, yL.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yI.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    yU = (0, h.zZ)(S.X.CONTENT_CATEGORY, {
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
                S = C4(),
                x =
                    ((l = (0, C0.uM)()),
                    (s = (0, IA.fk)()),
                    (r = (0, Im.b8)()),
                    (a = (0, N4.Z)()),
                    (o = yo(C3.YA.AGE_CONFIRMATION_NOTICE, _9)),
                    (u = yo(C3.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _5.M0)),
                    (d = f.useCallback(() => {
                        (0, C2.N)(C3.YA.AGE_CONFIRMATION_NOTICE, C3.YX.VIEWED);
                    }, [])),
                    (c = f.useCallback(() => {
                        (0, C2.N)(C3.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, C3.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (!l && (0, Ie.n)(_7.Vc)) {
                            if (s && !r)
                                return {
                                    type: T.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: d,
                                    text: V.intl.format(In.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: V.intl.string(In.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: T.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: c,
                                    text: V.intl.format(In.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { text: V.intl.string(V.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [s, l, a, r, u, c, d, o])),
                _ =
                    ((e = (0, N4.Z)()),
                    (t = (0, yc.WX)()),
                    (n = f.useCallback(() => {
                        (window.open(eb.A.getArticleURL(t), "_blank"),
                            (0, C2.N)(C3.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, C3.YX.LEARN_MORE));
                    }, [t])),
                    (i = f.useCallback(() => {
                        (0, C2.N)(C3.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, C3.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (e)
                            return {
                                type: T.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: i,
                                text: V.intl.format(V.t.EUo0yj, {
                                    hook: (e, t) => (0, p.jsx)(nr.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                I =
                    ((g = (0, IA.SJ)()),
                    (m = (0, Im.b8)()),
                    (A = g && !m),
                    (E = f.useCallback(() => {
                        (_6.A.showAgeVerificationGetStartedModal({ entryPoint: yr.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, C2.N)(C3.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, C3.YX.LEARN_MORE));
                    }, [])),
                    (h = f.useCallback(() => {
                        (0, C2.N)(C3.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, C3.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (A)
                            return {
                                type: T.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: h,
                                text: V.intl.format(V.t.OX4ybh, {
                                    hook: (e, t) => (0, p.jsx)(nr.Anchor, { onClick: E, children: e }, t),
                                }),
                            };
                    }, [E, A, h])),
                N = ym();
            return S ?? x ?? N ?? I ?? _;
        },
        buildLayout: () => [yO, yM, yS, yx, yp],
    });
var yV = n(923457),
    yk = n(750714);
let yw = (0, h.Qx)(S.X.DM_SPAM_SETTING, {
        useTitle: () => V.intl.string(V.t.puwSkY),
        useSubtitle: () => V.intl.string(V.t["+sXN3T"]),
        useValue: function () {
            let e = U.he.useSetting(),
                t = U.cj.useSetting(),
                n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
                i = (0, IA.yv)(yV.p.SPAM_FILTERS);
            return e !== eJ.he.DEFAULT_UNSET
                ? e
                : n?.nsfwAllowed === !1 && i
                  ? eJ.he.FRIENDS_AND_NON_FRIENDS
                  : (yk.xY.get(t) ?? eJ.he.NON_FRIENDS);
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
    yF = (0, h.zD)(S.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => V.intl.string(V.t["7x9dyE"]),
        useValue: function () {
            let e = U.FA.useSetting();
            return f.useMemo(() => (0, ii.Lx)(e), [e]).all;
        },
        setValue: function (e) {
            U.FA.updateSetting(e ? I.yKI : I.yKI & ~I.dzt.NO_RELATION);
        },
        useDisabled: function () {
            return (0, C0.uM)();
        },
    }),
    yB = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => V.intl.string(V.t.NfeuZ3),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? u_.UI(t, I.dzt.MUTUAL_FRIENDS) : u_.iE(t, I.dzt.MUTUAL_FRIENDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, C0.uM)();
        },
    }),
    yz = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => V.intl.string(V.t.qsMfsH),
        useSubtitle: () => V.intl.string(V.t["6DqAp0"]),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? u_.UI(t, I.dzt.MUTUAL_GUILDS) : u_.iE(t, I.dzt.MUTUAL_GUILDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, C0.uM)();
        },
    }),
    yX = (0, h.FW)(S.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => V.intl.string(V.t.wTdS6S),
        buildLayout: () => [yF, yB, yz],
    });
var yY = n(420825);
let yH = (0, h.zD)(S.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => V.intl.string(V.t["jK+wdr"]),
        useSubtitle: () => V.intl.string(V.t["RYh/pW"]),
        useValue: () => !(0, yY.q)(),
        setValue: function (e) {
            U.Zd.updateSetting(!e);
        },
    }),
    yW = (0, h.zZ)(S.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5gxWrt"]),
        useSubtitle: () => V.intl.string(V.t.QVbF3l),
        useSubnavLabel: () => V.intl.string(V.t.fyA115),
        useInlineNotice: C4,
        buildLayout: () => [yX, yH],
    });
var yK = n(994500),
    yZ = n(428678),
    yq = n(49229),
    yQ = n(730134),
    yJ = n(276573);
function y$(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: yJ.wx,
        children: [
            (0, p.jsx)("div", {
                className: yJ.zc,
                children: i ? (0, p.jsx)(yZ.K, {}) : (0, p.jsx)(bj.EyeSlashIcon, {}),
            }),
            (0, p.jsxs)("div", {
                className: yJ.Qq,
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: V.intl.string(i ? V.t.PFOUKW : V.t["93ZDWE"]),
                    }),
                    (0, p.jsx)(n4.E, {
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
function y0(e) {
    let { userId: t, last: n } = e,
        i = (0, _.bG)([yK.A], () => yK.A.isBlocked(t)),
        l = (0, _.bG)([sx.default], () => sx.default.getUser(t)),
        [s, r] = f.useState(!1),
        a = f.useCallback(() => {
            (r(!0),
                i
                    ? yq.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : yq.A.unignoreUser(t, tk.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == l
        ? null
        : (0, p.jsxs)("div", {
              className: ic()(yJ.nM, { [yJ.fW]: n }),
              children: [
                  (0, p.jsxs)("div", {
                      className: yJ.eF,
                      children: [
                          (0, p.jsx)(yQ.A, { user: l, size: v._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: yJ.Qq,
                              children: [
                                  (0, p.jsx)(n4.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, p.jsx)(n4.E, {
                                      variant: "text-sm/medium",
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
function y1(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = f.useState(5);
    return (0, p.jsx)(bJ.h, {
        children: (0, p.jsxs)("div", {
            className: yJ.Nr,
            children: [
                (0, p.jsx)(y$, { listType: n, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: yJ.jS,
                    children: t.slice(0, i).map((e, n) => (0, p.jsx)(y0, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, p.jsx)("div", {
                          className: yJ.vM,
                          children: (0, p.jsx)(n5.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: yJ.Qf,
                              children: (0, p.jsx)(n4.E, {
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
let y2 = (0, h.E2)(S.X.BLOCKED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t.PFOUKW)],
        usePredicate: () => (0, _.bG)([yK.A], () => yK.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, _.yK)([yK.A], () => yK.A.getBlockedIDs());
            return (0, p.jsx)(y1, { userIds: e, listType: "blocked" });
        },
    }),
    y3 = (0, h.E2)(S.X.IGNORED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t["93ZDWE"])],
        usePredicate: () => (0, _.bG)([yK.A], () => yK.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, _.yK)([yK.A], () => yK.A.getIgnoredIDs());
            return (0, p.jsx)(y1, { userIds: e, listType: "ignored" });
        },
    }),
    y4 = (0, h.zZ)(S.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+Iryf3"]),
        useSubtitle: () =>
            V.intl.format(V.t["0aNQo9"], { helpArticle: eb.A.getArticleURL(I.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [y2, y3],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, _.cf)([yK.A], () => ({
                hasBlockedUsers: yK.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: yK.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var y5 = n(22385),
    y6 = n(556534),
    y8 = n(111159),
    y7 = n(152056),
    y9 = n(428031),
    ve = n(978433);
let vt = { label: () => V.intl.string(V.t["32u1Dx"]), value: y5.YG };
var vn = n(307863),
    vi = n(954225);
function vl() {
    return (0, vn.e)() ? V.intl.string(V.t.PMsfcH) : V.intl.string(V.t.RAQUSN);
}
function vs(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let vr = (0, h.zD)(S.X.PERMISSIONS_DMS_SETTING, {
    useTitle: vl,
    useSubtitle: function () {
        let e = (0, y6.Tx)(),
            t = (0, y6.q9)(),
            n = (0, vn.e)();
        return e === y5.YG
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
        let e = (0, y6.Tx)(),
            t = U.$s.useSetting().includes(e),
            n = (0, y9.K)();
        return e === y5.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, C0.uM)();
        return (0, y6.Tx)() === y5.YG && e;
    },
    setValue: function (e) {
        let t = y5.xk.getState().selectedGuildId;
        if (t === y5.YG) {
            var n;
            ((n = !e),
                (0, bT.O)({
                    header: V.intl.string(V.t["uUr+GR"]),
                    body: V.intl.string(V.t.hjGJBp),
                    confirmText: V.intl.string(V.t.gm1Vej),
                    cancelText: V.intl.string(V.t.p89ACt),
                    confirmButtonColor: s5.$n.Colors.BRAND,
                    onConfirm: function () {
                        (U.n6.updateSetting(n), vs(n, !1));
                    },
                    onCancel: function () {
                        (U.n6.updateSetting(n), U.$s.updateSetting(n ? lv.A.getGuildIds() : []), vs(n, !0));
                    },
                }));
        } else {
            let n = (0, ii.Tb)();
            (e ? n.delete(t) : n.add(t),
                U.$s.updateSetting(Array.from(n)),
                td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: vi.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var va = n(116774),
    vo = n(953298);
function vu(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function vd() {
    return V.intl.string(V.t["3o2ojh"]);
}
let vc = (0, h.zD)(S.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: vd,
        useSubtitle: function () {
            let e = (0, y6.q9)(),
                t = eb.A.getArticleURL(I.MVz.MESSAGE_REQUESTS);
            return e
                ? V.intl.format(V.t.WpnWLc, { helpdeskArticle: t })
                : V.intl.format(V.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, y6.Tx)(),
                t = (0, y9.K)(),
                n = U.$s.useSetting().includes(e),
                i = (0, va.s)(),
                l = (0, C0.uM)(),
                s = U.YX.useSetting(),
                r = U.Zr.useSetting().includes(e);
            return !!i || (e === y5.YG && l ? !s : e === y5.YG ? !t && !s : !n && !r);
        },
        useDisabled: function () {
            let e = (0, y6.Tx)(),
                t = (0, C0.uM)(),
                n = (0, y9.K)(),
                i = U.$s.useSetting().includes(e),
                l = (0, va.s)();
            return e === y5.YG ? n || t || l : i || l;
        },
        setValue: function (e) {
            let t = y5.xk.getState().selectedGuildId;
            if (!e && (0, vo.w)())
                return void _6.A.showAgeVerificationGetStartedModal({ entryPoint: yr.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === y5.YG) {
                var n;
                ((n = !e),
                    (0, bT.O)({
                        header: V.intl.string(V.t.yAfu1p),
                        body: V.intl.string(V.t.Ry2z74),
                        confirmText: V.intl.string(V.t.gm1Vej),
                        cancelText: V.intl.string(V.t.p89ACt),
                        confirmButtonColor: s5.$n.Colors.BRAND,
                        onConfirm: function () {
                            (U.YX.updateSetting(n), vu(n, !1));
                        },
                        onCancel: function () {
                            (U.YX.updateSetting(n), U.Zr.updateSetting(n ? lv.A.getGuildIds() : []), vu(n, !0));
                        },
                    }));
            } else {
                let n = (0, ii.xo)();
                (e ? n.delete(t) : n.add(t),
                    U.Zr.updateSetting(Array.from(n)),
                    td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: vi.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    vg = (0, h.E2)(S.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [vl(), vd()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, y5.xk)(),
                l = (0, _.bG)([gJ.Ay], () => gJ.Ay.getFlattenedGuildIds()),
                s = (0, _.bG)([lv.A], () => lv.A.getGuilds()),
                r =
                    ((e = U.$s.useSetting()),
                    (t = (0, y9.K)()),
                    (0, _.bG)(
                        [lv.A],
                        () => {
                            let n = new Set(e);
                            return lv.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = l[0];
            f.useEffect(
                () =>
                    y7.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = y5.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === y5.YG && null != a
                                ? i(a)
                                : "" === e && n !== y5.YG && i(y5.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = f.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...vt,
                            id: vt.value,
                            label: vt.label(),
                            leading: (0, p.jsx)("div", {
                                className: ve.KP,
                                children: (0, p.jsx)(y8.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: ve.cl,
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
                                    leading: (0, p.jsx)(me.Ay, {
                                        className: ve.cl,
                                        guild: n,
                                        size: me.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [l, s]),
                u = n === y5.YG && r > 0;
            return (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(pE.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    u &&
                        (0, p.jsx)(n4.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: ve.h_,
                            children: V.intl.format(V.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, p.jsx)(
                                        n4.E,
                                        { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    vm = (0, h.E2)(S.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, y6.Tx)(),
                t = yu();
            return e === y5.YG && null != t;
        },
        Component: function () {
            let e = yu(),
                t = yo(C3.YA.AGE_CONFIRMATION_NOTICE, _9),
                n = yo(C3.YA.CONTENT_AND_SOCIAL_NOTICE, _5.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, p.jsx)(ya, {
                        noticeType: C3.YA.AGE_CONFIRMATION_NOTICE,
                        body: V.intl.format(In.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: V.intl.string(In.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, p.jsx)(ya, {
                        noticeType: C3.YA.CONTENT_AND_SOCIAL_NOTICE,
                        body: V.intl.format(In.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: V.intl.string(V.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    vA = (0, h.zZ)(S.X.PERMISSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Y5GYcX),
        useSubnavLabel: () => V.intl.string(V.t.YUU0RF),
        useInlineNotice: function () {
            let e = C4(),
                t = ym();
            if ((0, y6.Tx)() === y5.YG) return e ?? t;
        },
        buildLayout: () => [vg, vr, vc, vm],
    }),
    vE = (0, h.zZ)(S.X.SPAM_FILTERS_CATEGORY, { useTitle: () => V.intl.string(V.t.Qwuoic), buildLayout: () => [yw] }),
    vh = (0, h.zZ)(S.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = ys();
            function t(e, t) {
                return (0, p.jsx)(
                    n4.E,
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
                let { sortedGames: e } = ys();
                return f.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, p.jsx)("img", {
                                src: M.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: Sm.CD,
                                height: Sm.CD,
                            }),
                            shape: Sm.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, p.jsx)("img", {
                                    src: M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: Sm.YP,
                                    height: Sm.YP,
                                }),
                                shape: Sm.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: T.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [V.intl.string(V.t.YpCiMt)],
        initialize: () => {
            S2.A.fetch();
        },
        buildLayout: () => [yi, yl, yt, b6],
    }),
    vS = (0, h.t_)(S.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        buildLayout: () => [yU, vE, vA, yW, vh, y4],
    }),
    vx = (0, h.i4)(S.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        icon: b4.l,
        buildLayout: () => [vS],
    });
var vT = n(782603),
    vp = n(899847),
    vf = n(695515);
let v_ = (0, h.Hn)(S.X.MOBILE_NOTIFICATION_DELAY, {
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
    vI = (0, h.zD)(S.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => V.intl.string(V.t["btbS+Z"]),
        useSubtitle: () =>
            V.intl.format(V.t.Q5crhR, { onClick: () => (0, na.openUserSettings)(S.X.TTS_PLAYBACK_RATE) }),
        useValue: U.on.useSetting,
        setValue: U.on.updateSetting,
    }),
    vN = (0, h.Qx)(S.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.JZxxGx),
        useSubtitle: () => V.intl.string(V.t.HDLtJl),
        useValue: () => (0, _.bG)([aY.A], () => aY.A.getTTSType()),
        setValue: (e) => aq.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: V.intl.string(V.t.B1AGeJ), value: I.aVn.ALL_CHANNELS },
                { name: V.intl.string(V.t.uzZg9e), value: I.aVn.SELECTED_CHANNEL },
                { name: V.intl.string(V.t.DYO5Oi), value: I.aVn.NEVER },
            ];
        },
        usePredicate: () => H.$j,
    }),
    vC = S.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    vb = (0, h.bd)(vC, {
        useTitle: (e) => (e ? V.intl.string(V.t.RyimDk) : V.intl.string(V.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return t_(vC, {
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
        buildLayout: () => [v_, vI, vN],
    }),
    vy = (0, h.zZ)(S.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["31DySj"]),
        buildLayout: () => [vb],
    }),
    vv = (0, h.zD)(S.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => V.intl.string(V.t.VH8AIJ),
        useSubtitle: () => V.intl.string(V.t["9K4qwX"]),
        useValue: function () {
            return (0, _.bG)([aY.A], () => !aY.A.getDisableUnreadBadge());
        },
        setValue: (e) => aq.default.setDisableUnreadBadge(!e),
    }),
    vj = (0, h.zZ)(S.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.l6w3Vj),
        buildLayout: () => [vv],
    });
var vO = n(840559),
    vL = n(997187);
let vR = (0, bn.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var vD = n(723923);
let vP = vD.px.map((e) =>
        (0, h.zD)(`${S.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, _.cf)([vL.A], () => vL.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, vO.CA)(e.category, t),
        }),
    ),
    vG = (0, h.Tf)(S.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => V.intl.string(V.t.Ra9Pwk),
        useSubtitle: () => V.intl.string(V.t.iYjQ8X),
        useLabel: () => V.intl.string(V.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, _.cf)([vL.A], () => vL.A.getEmailSettings());
            return vD.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, vO.NI)(),
        useVariant: () => "critical-secondary",
    }),
    vM = (0, h.zZ)(S.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = vR.useConfig({ location: "Email Settings Category" });
            return e ? V.intl.string(V.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = vL.A.getEmailSettings();
            e || (0, vO.cR)();
        },
        buildLayout: () => [...vP, vG],
    }),
    vU = (0, h.zD)(S.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["/0WCll"]),
        useSubtitle: () => V.intl.string(V.t.wF9ih3),
        useValue: function () {
            return (0, _.bG)([aY.A], () => aY.A.getDesktopType()) !== I.nRU.NEVER;
        },
        setValue: (e) => aq.default.setDesktopType(e ? I.nRU.ALL : I.nRU.NEVER),
    });
var vV = n(832712),
    vk = n(543465),
    vw = n(790782);
let vF = (0, h.zD)(S.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => V.intl.string(V.t["k6m/si"]),
    useSubtitle: () => V.intl.string(V.t.LGynPs),
    useValue: () => (0, _.bG)([vk.Ay], () => vk.Ay.useNewNotifications),
    setValue: function (e) {
        (vV.A.setAccountFlag(SI.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hj.w.set("turnedOffNewNotifications", !0),
                td.default.track(I.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lv.A.getGuildsArray().filter(
                        (e) => vk.Ay.resolveGuildUnreadSetting(e) === vw.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, _.bG)(
            [sx.default, vk.Ay],
            () =>
                sx.default.getCurrentUser()?.isStaff() ||
                sx.default.getCurrentUser()?.isStaffPersonal() ||
                vk.Ay.useNewNotifications,
        ),
});
var vB = n(534654);
let vz = (0, h.zD)(S.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => V.intl.string(V.t.z9h8Ym),
        useSubtitle: () => V.intl.string(V.t.TummoQ),
        useValue: () => (0, _.bG)([aY.A], () => aY.A.screenDowntimeReminder),
        setValue: (e) => aq.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, vB.A)(),
                t = (0, N1.Du)();
            return e && t;
        },
    }),
    vX = (0, h.zD)(S.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => V.intl.string(V.t.onrAy7),
        useSubtitle: () => V.intl.string(V.t["/071J7"]),
        useValue: U.gY.useSetting,
        setValue: (e) => U.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, vB.A)(),
                t = (0, N1.Du)();
            return e && t;
        },
    }),
    vY = (0, h.zD)(S.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.NjOMvh),
        useValue: U.oz.useSetting,
        setValue: function (e) {
            (U.oz.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SI.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [V.intl.string(V.t.hi4dSk)],
    }),
    vH = (0, h.zD)(S.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sQQgFj),
        useValue: U.NR.useSetting,
        setValue: function (e) {
            (U.NR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SI.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    vW = (0, h.zD)(S.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.FSNIvs),
        useValue: U.Yh.useSetting,
        setValue: function (e) {
            (U.Yh.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SI.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    vK = (0, h.zD)(S.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.xBLMhQ),
        useValue: U.T3.useSetting,
        setValue: function (e) {
            (U.T3.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SI.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var vZ = n(815807);
let vq = (0, h.Hn)(S.X.REACTION_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: V.intl.string(V.t["9x/RtT"]), value: eJ.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: V.intl.string(V.t.fJAbQd), value: eJ.Tz.ONLY_DMS },
            { id: "disabled", label: V.intl.string(V.t["xu+UDU"]), value: eJ.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: U.Zp.useSetting,
        setValue: (e) => (0, vZ.n4)(e, U.Zp.getSetting()),
    }),
    vQ = (0, h.zD)(S.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["k51K1+"]),
        useValue: U.Qr.useSetting,
        setValue: function (e) {
            (U.Qr.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SI.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    vJ = (0, bn.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    v$ = (0, h.zD)(S.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.G8NPz6),
        useValue: U.zS.useSetting,
        setValue: function (e) {
            (U.zS.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SI.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => vJ.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    v0 = (0, h.FW)(S.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.FEVRDV),
        buildLayout: () => [vW, vY, vH, vQ, v$, vK, vq],
    }),
    v1 = (0, h.zD)(S.X.TASK_BAR_FLASHING, {
        useTitle: () => V.intl.string(V.t.xSmFQG),
        useSubtitle: () => V.intl.string(V.t.bd4j4x),
        useValue: () => (0, _.bG)([aY.A], () => aY.A.taskbarFlash),
        setValue: (e) => aq.default.setTaskbarFlash(e),
        usePredicate: () => (0, nh.uF)(),
    }),
    v2 = (0, h.zZ)(S.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [vU, v1, v0, vF, vX, vz],
    });
var v3 = n(965957),
    v4 = n(312671),
    v5 = n(235079);
let v6 = (0, h.zD)(S.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aH.A.useHolidaySoundpack();
        return null == e ? "" : V.intl.format(V.t["E/OyBr"], { soundpack: V.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, _.bG)([v4.A], () => v4.A.getSoundpack()),
            t = aH.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aH.A.getHolidaySoundpack();
        (tE()(null != t, "predicate should fail if no soundpack is available"), (0, v3.p)(e ? t : v5.i.CLASSIC));
    },
    usePredicate: aH.A.useIsEligible,
});
var v8 = n(970931);
let v7 = {
        useTitle: () => V.intl.string(V.t.jD1qzM),
        sound: "message1",
        useDisabled: v8.kB,
        useDisabledMessage: () => ((0, v8.kB)() ? V.intl.string(V.t.cIRG0s) : void 0),
    },
    v9 = { useTitle: () => V.intl.string(V.t.XBrJT6), sound: "call_ringing" },
    je = (0, h.zD)(S.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.TzjwV9),
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => a$("message3") }),
        useValue: () =>
            (0, _.bG)([aY.A], () => aY.A.getNotifyMessagesInSelectedChannel() && !aY.A.getDisableAllSounds()),
        setValue: (e) => aq.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, _.bG)([aY.A], () => aY.A.getDisableAllSounds()),
    }),
    jt = (0, h.zD)(S.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => V.intl.string(V.t["2ZhCOd"]),
        useSubtitle: () => V.intl.string(V.t.EAKdPr),
        useValue: () => (0, _.bG)([aY.A], () => aY.A.getDisableAllSounds()),
        setValue: (e) => aq.default.toggleDisableAllSounds(e),
    }),
    jn = (0, h.D1)(S.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aJ();
            };
        },
        buildLayout: () => [a0(v7), je, a0(v9), jt],
    }),
    ji = (0, h.AK)(S.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t["MMy+lm"]),
        useSearchTerms: () => [V.intl.string(V.t["MMy+lm"])],
        destinationKey: S.X.SOUNDS_CATEGORY,
    }),
    jl = (0, h.gN)(S.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [ji] }),
    js = (0, h.zZ)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.LweOYy),
        buildLayout: () => [v6, jn, jl],
    }),
    jr = (0, h.t_)(S.X.NOTIFICATIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        initialize: () => {
            null != vf.A.getAgeGroup() || vf.A.isLoading() || (vf.A.canRefetch() && vp.Ay.initialPageLoad());
        },
        buildLayout: () => [v2, js, vj, vM, vy],
    }),
    ja = (0, h.i4)(S.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        icon: vT.BellIcon,
        buildLayout: () => [jr],
    }),
    jo = (0, h.WI)(S.X.USER_SECTION, {
        useTitle: () => V.intl.string(V.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Cd, b3, vx, ja, CX],
    });
var ju = n(387758),
    jd = n(271866),
    jc = n(147964),
    jg = n(868511);
let jm = (0, h.zD)(S.X.APPLICATION_TEST_MODE, {
        useTitle: () => V.intl.string(V.t.erOqlh),
        useSubtitle: () => V.intl.string(V.t["52hMnD"]),
        usePredicate: U.Q_.useSetting,
        useValue: () => (0, _.bG)([jc.A], () => null != jc.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, lT.openModal)((e) => (0, p.jsx)(jg.A, { ...e })) : jd.cL();
        },
    }),
    jA = (0, h.zD)(S.X.DEVELOPER_MODE, {
        useTitle: () => V.intl.string(V.t.ObIb1Q),
        useSubtitle: () => V.intl.format(V.t["CY6q/Q"], { apiDocsUrl: I.X7G.API_DOCS }),
        useValue: U.Q_.useSetting,
        setValue: U.Q_.updateSetting,
        usePredicate: () => uF.p5,
    }),
    jE = (0, h.zZ)(S.X.DEVELOPER_CATEGORY, { buildLayout: () => [jA, jm] }),
    jh = (0, h.t_)(S.X.DEVELOPER_PANEL, { useTitle: () => V.intl.string(V.t["0BRxRp"]), buildLayout: () => [jE] }),
    jS = (0, h.i4)(S.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: ju.G,
        useTitle: () => V.intl.string(V.t["0BRxRp"]),
        buildLayout: () => [jh],
    });
var jx = n(70688),
    jT = n(830215);
let jp = (0, h.i4)(S.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => V.intl.string(V.t["2jxGer"]),
        icon: jx.DoorExitIcon,
        onClick: () => {
            (0, n2.A)({
                title: V.intl.string(V.t["2jxGer"]),
                subtitle: V.intl.string(V.t.SUnWBB),
                confirmText: V.intl.string(V.t["2jxGer"]),
                onConfirm: () => {
                    jT.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    jf = (0, h.WI)(S.X.UTILITY_SECTION, {
        useTitle: () => V.intl.string(V.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [jS, jp],
    }),
    j_ = (0, h.Hr)({ buildLayout: () => [_1, jo, EQ, oT, pb, Sd, jf], analyticsKey: "user_settings" });
