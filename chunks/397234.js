n.d(t, { D: () => jN });
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
    oN = n(139286),
    oC = n(534247);
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
        { analyticsLocations: u } = (0, eX.Ay)();
    (0, oN.A)(
        {
            name: sc.ImpressionNames.GIFT_CARDS_MARKETING_BANNER,
            type: sc.ImpressionTypes.VIEW,
            properties: { surface: t, location_stack: u },
        },
        { trackOnInitialLoad: !0 },
    );
    let d = "compact" === o;
    return (0, p.jsxs)("div", {
        className: ic()(oC.kL, { [oC.oE]: d }),
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
                            (0, p.jsx)(C.D, {
                                variant: d ? "heading-lg/bold" : "heading-xl/bold",
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
                                    (0, p.jsx)(n4.E, { variant: "text-xxs/normal", color: "text-subtle", children: a }),
                            ],
                        }),
                ],
            }),
            null != r
                ? (0, p.jsx)("div", {
                      className: oC.yO,
                      children: (0, p.jsx)(oI.v, { type: "lottie", lottie: r, aspectRatio: "6/4" }),
                  })
                : (0, p.jsx)("img", { src: s, className: oC.fA, alt: "" }),
        ],
    });
}
function oy(e) {
    let { analyticsLocations: t } = (0, eX.Ay)();
    return f.useCallback(
        (n, i) => {
            td.default.track(I.HAw.GIFT_CARDS_MARKETING_BANNER_CTA_CLICKED, {
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
var ov = n(425565),
    oj = n(158843),
    oO = n(936564),
    oL = n(417792),
    oR = n(423764),
    oD = n(289873),
    oP = n(132500),
    oG = n(465323),
    oM = n(37766),
    oU = n(194261),
    oV = n(391048),
    ok = n(277984),
    ow = n(99696),
    oF = n(202613),
    oB = n(615405),
    oz = n(83617),
    oX = n(935208),
    oY = n(607399),
    oH = n(993077),
    oW = n(150934),
    oK = n(256006),
    oZ = n(198970),
    oq = n(71532);
let oQ = /[^0-9/]/g,
    oJ = /[^0-9]/g;
class o$ extends f.PureComponent {
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
                ((i = (n = e.replace(oQ, "").split("/"))[0]),
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
            ? (u = u.replace(oJ, ""))
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
var o0 = n(832208),
    o1 = n(782328);
let o2 = [
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
                        getClassNameForLayout: () => o1.ep,
                        renderInput: (e) => (0, p.jsx)(o$, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    o3 = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = f.useState(!1),
            [a, o] = f.useState(null),
            [u, d] = f.useState(i);
        return (
            f.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(o0.A, {
                className: n,
                form: o2,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    (s || "" === e || r(!0),
                        (s && "" === e) || !(0, oq.So)(e) ? o(V.intl.string(V.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var o4 = n(219887),
    o5 = n(292856);
let o6 = "isDefault";
class o8 extends f.PureComponent {
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
            expiresMonth: t instanceof oF.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oF.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ((0, ok.ey)(), (0, ok.tc)());
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
                      className: o5.zc,
                      children: (0, p.jsx)(iK.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: o5.zc,
                  children: (0, p.jsx)(iK.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oK.g)(n);
        return (0, p.jsxs)("div", {
            className: o5.yV,
            children: [
                (0, p.jsx)(n4.E, {
                    className: o5.bV,
                    variant: "text-sm/normal",
                    children: V.intl.string(V.t["50Auo2"]),
                }),
                (0, p.jsx)(oZ.Ay, {
                    ...e,
                    mode: oZ.Ay.Modes.EDIT,
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
            className: o5.yV,
            children: [
                (0, p.jsx)(n4.E, { className: o5.bV, variant: "text-sm/normal", children: V.intl.string(V.t.Fo2YP7) }),
                (0, p.jsx)(o3, {
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
            className: o5.AU,
            children: (0, p.jsxs)(q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(s8.e, {
                        children: (0, p.jsxs)("div", {
                            className: o5.lH,
                            children: [
                                n
                                    ? (0, p.jsx)(lg.m, {
                                          text: V.intl.string(V.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: o5.dm }),
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
                    (0, p.jsxs)(s8.e, {
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
            r = e instanceof oF.SJ;
        return (0, p.jsx)(oH.Z, {
            editable: !0,
            className: ic()(o5.Nr, i),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: o5.__invalid_paymentSection,
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
                                ? (0, p.jsx)("div", { className: o5.Um, children: V.intl.string(V.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: o5.Sv,
                                children: r
                                    ? V.intl.format(V.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : V.intl.string(V.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: o5.D5,
                        children: (0, p.jsx)(oW.S, {
                            value: o6,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, o6),
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
let o7 = _.Ay.connectStores([oB.A], () => ({ updateError: oB.A.editSourceError, removeError: oB.A.removeSourceError }))(
    o8,
);
var o9 = n(493364),
    ue = n(849405),
    ut = n(329693);
function un() {
    (0, ow.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oP.A)() });
}
class ui extends f.PureComponent {
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
            ? (0, p.jsx)(o7, {
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
                      i ? null : (0, p.jsx)(ls.c, { className: ut.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: ut.Yb,
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
let ul = f.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = f.useState(null),
        o = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, _.bG)([oB.A], () => oB.A.ipCountryCode),
        d = f.useMemo(() => (0, oG.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        f.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : ok.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                n ? null : (0, p.jsx)(ls.c, { className: ut.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: ut.Yb,
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
                            : (0, p.jsxs)(lN.A, {
                                  align: lN.A.Align.CENTER,
                                  children: [
                                      (0, p.jsx)(oM._, { size: "lg" }),
                                      (0, p.jsx)(n4.E, {
                                          variant: "text-sm/medium",
                                          className: ue.Wi,
                                          children: V.intl.string(o9.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, p.jsxs)("div", {
                            className: ut.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: ut.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(oD.y, { type: oD.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(n4.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oG.$g)(e ?? 0, n, l, {
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
                                    text: V.intl.string(o9.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class us extends f.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await ok.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await ok.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await ok.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oz.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, lT.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, oV.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: ut.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: ut.z8,
                          children: [
                              (0, p.jsx)(n4.E, { variant: "text-sm/normal", children: V.intl.string(V.t.aRHpAB) }),
                              (0, p.jsx)(n4.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: ut.Sv,
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oX.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oF.LQ)),
            c = u.filter((e) => e instanceof oF.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, p.jsx)(
                    ui,
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
                              ul,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: un,
                              },
                              e.id,
                          ),
                      )
                    : (0, p.jsx)(ul, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: un,
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(C.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(oU.LockIcon, { size: "sm", className: ut.hz }),
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
var ur = n(459357),
    ua = n(295405),
    uo = n(166403),
    uu = n(773669),
    ud = n(943009);
function uc() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, oR.Gw)(e.country) };
}
let ug = (0, h.E2)(S.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, _.bG)([oB.A], () => oB.A.isSyncing),
                i = (0, _.bG)([ua.A], () => ua.A.paymentSources),
                l = (0, _.bG)([ua.A], () => ua.A.defaultPaymentSourceId),
                s = (0, _.bG)([uu.default], () => uu.default.locale),
                r = (0, _.bG)([uo.A], () => uo.A.getPremiumTypeSubscription()),
                a = (0, _.bG)([oB.A], () => oB.A.isRemovingPaymentSource),
                o = (0, _.bG)([oB.A], () => oB.A.isUpdatingPaymentSource),
                { enabled: u } = (0, ur.c)({ location: "UserSettingsBilling" });
            return (f.useEffect(() => {
                (ok.$o(), ok.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, p.jsx)("div", { className: ud.o, children: (0, p.jsx)(oD.y, {}) })
                : (0, p.jsx)(us, {
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
    um = (0, h.E2)(S.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = oy("billing_banner"),
                t = f.useMemo(
                    () => [
                        {
                            text: V.intl.string(oj.default["6bWeWP"]),
                            onClick: () => {
                                (e("learn_more", { url: ov.C }), (0, o_.A)(ov.C));
                            },
                        },
                        {
                            text: V.intl.string(oj.default.xYa9Y8),
                            onClick: () => {
                                let t = eb.A.getArticleURL(I.MVz.BUY_GIFT_CARDS);
                                (e("where_to_buy", { url: t }), (0, o_.A)(t));
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
                    children: (0, p.jsx)(n4.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: V.intl.string(oj.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, oL.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    uA = (0, h.zZ)(S.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.W26xGQ),
        useSubtitle: () => {
            let e = uc();
            return null != e ? V.intl.format(V.t.e2t1G5, { country: e.countryName }) : V.intl.string(V.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == uc()
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
        buildLayout: () => [ug, um],
    });
var uE = n(837381),
    uh = n(689175),
    uS = n(928039),
    ux = n(921853),
    uT = n(22306);
function up(e) {
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
                className: uT.v,
                children: (0, p.jsxs)("div", {
                    className: uT.U,
                    children: [
                        (0, p.jsx)(ld.K, {
                            variant: "icon-only",
                            icon: ux.n,
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
var uf = n(32731);
n(938796);
var u_ = n(334279),
    uI = n(122817),
    uN = n(665260),
    uC = n(315069),
    ub = n(557009),
    uy = n(570221),
    uv = n(243217);
class uj extends uC.A {
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
        let t = null != e.payment_source ? oF.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? uf.A.createFromServer(e.sku) : null,
            i = null != e.subscription ? uv.A.createFromServer(e.subscription) : null;
        return new uj({
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
            entitlements: null != e.entitlements ? e.entitlements.map((e) => ub.A.createFromServer(e)) : void 0,
            invoice: null != e.invoice ? uy.Y.createFromServer(e.invoice) : null,
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
        return uN.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && null != this.skuId && Object.values(tJ.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === I.EZt.GUILD_PRODUCT || uN.Lt(this.sku.flags, uI.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === I.EZt.COLLECTIBLES;
    }
    get isFractionalPremium() {
        return null != this.skuId && u_.I.ALL.has(this.skuId);
    }
    get isShopPurchase() {
        return this.isCollectible || this.isFractionalPremium;
    }
}
var uO =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    uL =
        (((l = {})[(l.NITRO = 1)] = "NITRO"),
        (l[(l.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (l[(l.SHOP = 3)] = "SHOP"),
        (l[(l.APPLICATION = 4)] = "APPLICATION"),
        (l[(l.PRODUCT = 5)] = "PRODUCT"),
        l),
    uR =
        (((s = {})[(s.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (s[(s.REFUNDED = 2)] = "REFUNDED"),
        (s[(s.REVERSED = 3)] = "REVERSED"),
        s),
    uD =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    uP =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uG(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? oF.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? uf.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new uj({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uM = { receipts: [], cursor: null };
var uU = n(34188),
    uV = n(597770),
    uk = n(206828),
    uw = n(576243),
    uF = n(147925),
    uB = n(707554),
    uz = n(957565),
    uX = n(250627),
    uY = n(871109),
    uH = n(571654),
    uW = n(411342),
    uK = n(179499),
    uZ = n(741231),
    uq = n(95035),
    uQ = n(317525),
    uJ = n(460103);
function u$(e) {
    let { description: t, detail: n } = e;
    return (0, p.jsx)("li", {
        className: uJ.Iu,
        children: (0, p.jsxs)(lN.A, {
            justify: lN.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function u0(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uX.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, uH.z)(i),
        s = (0, _.bG)([lv.A], () => lv.A.getGuild(t)),
        r = i?.role_id != null && i?.attachments_count === 0 ? V.intl.string(V.t.H11qcT) : l,
        a = f.useCallback(async () => {
            (s?.features.has(I.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, uZ.A)(I.BVt.GUILD_PRODUCT(t, n))
                : await (0, uZ.A)(I.BVt.CHANNEL(t)),
                (0, tY.default)());
        }, [s, t, n]);
    return (0, p.jsxs)(p.Fragment, {
        children: [
            null != r && (0, p.jsx)(u$, { description: V.intl.string(V.t.lXPbJb), detail: r }),
            null != s &&
                (0, p.jsx)(u$, {
                    description: V.intl.string(V.t.Wpn8z8),
                    detail: (0, p.jsx)(uq.A, { onClick: a, children: s.name }),
                }),
        ],
    });
}
function u1(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uX.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, _.bG)([uY.A], () => uY.A.getGuildProductFetchState(n) === uY.e.FETCHING),
        s = i?.role_id,
        r = (0, _.bG)([uQ.A], () => (null != s ? uQ.A.getRole(t, s) : void 0), [t, s]),
        a = (0, uK.A)({ guildId: t, productId: n }),
        o = (i?.attachments?.length ?? 0) > 0,
        u = null != r;
    return l
        ? (0, p.jsx)("div", { className: uJ.hT, children: (0, p.jsx)(oD.y, {}) })
        : null != i && (o || u)
          ? (0, p.jsxs)("div", {
                className: uJ.hT,
                children: [
                    o &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(n4.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: uJ.yE,
                                    children: V.intl.string(V.t.hxawoy),
                                }),
                                (0, p.jsx)(j.$, { ...a }),
                            ],
                        }),
                    u &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                o && (0, p.jsx)("div", { className: uJ.yF }),
                                (0, p.jsx)(n4.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: uJ.yE,
                                    children: V.intl.string(V.t.gWBNet),
                                }),
                                (0, p.jsx)(uW.A, { role: r }),
                            ],
                        }),
                ],
            })
          : null;
}
let u2 = function (e, t) {
    (0, lT.openModalLazy)(async () => {
        let { default: i } = await n.e("234138").then(n.bind(n, 206049));
        return (n) => (0, p.jsx)(i, { payment: e, paymentSource: t, ...n });
    });
};
var u3 = n(818348);
async function u4(e) {
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
function u5(e) {
    let { payment: t } = e,
        [n, i] = f.useState(null),
        [l, s] = f.useState(null);
    async function r(e) {
        try {
            let n = await u4(t.id);
            i(n);
            let l = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
            (window.open(l, "_blank"), s(null));
        } catch (e) {
            s(e.body?.message);
        }
    }
    let a = null != t.paymentSource && t.status === u3.__.COMPLETED,
        o = n?.invoiceLink,
        u = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, p.jsxs)("div", {
              className: uJ.It,
              children: [
                  (0, p.jsx)(nr.Anchor, { onClick: () => r(!1), children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, p.jsx)(nr.Anchor, {
                            className: uJ.oe,
                            onClick: () => r(!0),
                            children: V.intl.formatToPlainString(V.t["3x6NGw"], {}),
                        })
                      : null,
                  null != l && "" !== l && (0, p.jsx)(iK.w, { type: "critical", message: l, role: "alert" }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, p.jsxs)("div", {
                className: uJ.It,
                children: [
                    (0, p.jsx)(nr.Anchor, { href: o, children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                    null != u
                        ? u.map((e, t) =>
                              (0, p.jsx)(
                                  nr.Anchor,
                                  {
                                      className: uJ.oe,
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
                  className: uJ.It,
                  children: (0, p.jsx)(nr.Anchor, {
                      onClick: () => {
                          var e;
                          ((e = t.paymentSource), u2(t, e));
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
let de = (e) => `https://${I.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function dt(e, t) {
    return t === u3.Yr.DISCORD_ORB
        ? (0, p.jsxs)("span", {
              className: uJ.db,
              children: [
                  (0, p.jsx)(u7.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  V.intl.formatToPlainString(V.t.YMor7k, { count: e }),
              ],
          })
        : (0, u9.$g)(e, t);
}
function dn(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: l } = e,
        { analyticsLocations: s } = (0, eX.Ay)(tk.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uP.REDEEMED
        ? null
        : n.status === uP.REFUNDED
          ? (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(uB.H, { className: uJ.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                    (0, p.jsx)("div", {
                        className: uJ.iL,
                        children:
                            null != o
                                ? V.intl.format(V.t.Q1K9eg, { username: u8.Ay.getName(o) })
                                : V.intl.format(V.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uP.CLAIMED || n.status === uP.UNCLAIMED
            ? (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(uB.H, { className: uJ.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: uJ.iL,
                          children:
                              null != o
                                  ? V.intl.format(V.t.vfUW65, { username: u8.Ay.getName(o) })
                                  : V.intl.string(V.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, p.jsx)("div", {
                              className: uJ.TP,
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
                      (0, p.jsx)(uB.H, { className: uJ.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: uJ.iL,
                          children: l
                              ? V.intl.format(V.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : V.intl.format(V.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, p.jsx)("div", {
                          className: uJ.TP,
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
                                            (td.default.track(I.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
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
        l = t.eligible ? di.CheckmarkLargeIcon : dl.P;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(uB.H, { className: uJ.mW, children: V.intl.string(V.t["n/27pr"]) }),
            (0, p.jsxs)("div", {
                className: uJ.iL,
                children: [
                    (0, p.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uD.IN_GAME_ITEM
                                    ? V.intl.format(V.t["5lvoVS"], { supportURL: t })
                                    : V.intl.string(V.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uD.PREMIUM:
                                    return e.eligible
                                        ? V.intl.format(V.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.dk7vyL, { dateLimit: n });
                                case uD.GIFT:
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
                    t.policy !== uD.IN_GAME_ITEM &&
                        (0, p.jsxs)("div", {
                            className: uJ.My,
                            children: [
                                (0, p.jsx)("div", {
                                    className: uJ.Kf,
                                    children:
                                        null != t.window &&
                                        (0, p.jsxs)("div", {
                                            className: uJ._Z,
                                            children: [
                                                (0, p.jsx)(uB.H, {
                                                    className: uJ.ud,
                                                    children: V.intl.string(V.t.H0RNz4),
                                                }),
                                                (0, p.jsxs)("div", {
                                                    className: uJ.z9,
                                                    children: [
                                                        (0, p.jsx)(l, { className: uJ.xb, color: "currentColor" }),
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
var dr = n(679897);
function da(e) {
    let { description: t, cost: n } = e;
    return (0, p.jsx)("li", {
        className: uJ.mg,
        children: (0, p.jsxs)(lN.A, {
            justify: lN.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function du(e) {
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
                (0, uz.C)(t, () => {
                    (a(!0), s(!0));
                });
            },
            children: (0, p.jsx)("div", { className: uJ.l9, children: t }),
        }),
    });
}
function dd(e) {
    let { paymentId: t } = e;
    return (0, p.jsx)("li", {
        className: uJ.mg,
        children: (0, p.jsxs)("div", {
            className: uJ.bx,
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
    let n = t === uR.REVERSED;
    return (0, p.jsxs)(n4.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: ic()(dr.XM, n ? dr.aB : dr.EN),
        children: [
            t === uR.REVERSED && V.intl.string(V.t.YQv9Li),
            t === uR.PARTIALLY_REFUNDED && V.intl.string(V.t.lYbZzz),
            t === uR.REFUNDED && V.intl.string(V.t.ZBb6NK),
        ],
    });
}
function dg(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === u3.kM.APPLE_PARTNER ? new oF.Pw({}) : null);
    return null == i
        ? null
        : (0, p.jsx)(o4.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: uJ.iL,
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
                      lN.A,
                      {
                          justify: lN.A.Justify.BETWEEN,
                          align: lN.A.Align.CENTER,
                          children: [
                              (0, p.jsx)(dg, { payment: e, locale: n }),
                              (0, p.jsxs)(q.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, p.jsx)(dc, { tag: e.tag }),
                                      (0, p.jsx)(n4.E, {
                                          variant: "text-md/normal",
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
            (0, p.jsx)("div", { className: uJ.ts }),
            t.delisted
                ? (0, p.jsx)(iK.w, {
                      type: "warning",
                      message: V.intl.string(V.t["3AvulN"]),
                      role: "none",
                      action: { text: V.intl.string(V.t.zoztQA), onClick: () => (0, o_.A)(de(n)) },
                  })
                : null != t.guild_id && (0, p.jsx)(u1, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function dE(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: l, guild_product: s, game_item: r, refund: a } = t;
    return (0, p.jsx)(n5.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, p.jsxs)("div", {
            className: uJ.WI,
            children: [
                (0, p.jsx)(uB.H, { className: uJ.mW, children: V.intl.string(V.t.nyzoFb) }),
                (0, p.jsxs)("div", {
                    className: ic()(uJ.iL, uJ.W),
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
                                    (0, p.jsx)(u0, { guildId: s.guild_id, guildProductListingId: s.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != s && (0, p.jsx)(dA, { guildProduct: s, locale: n }),
                (0, p.jsx)(u5, { payment: t.receipt_payment }),
                null != r && (0, p.jsx)(dn, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, p.jsx)(ds, { refund: a, locale: n }),
            ],
        }),
    });
}
function dh(e) {
    let { withGradient: t } = e;
    return t
        ? (0, p.jsx)(uw.A, { size: 24, iconSize: 16, color: n1.A.unsafe_rawColors.NEUTRAL_1, className: uJ.Sy })
        : (0, p.jsx)("div", {
              className: ic()(uJ.Sy, uJ.uX, uJ.Xr),
              children: (0, p.jsx)(am.t, { size: "custom", width: 16, height: 16, color: n1.A.colors.ICON_DEFAULT }),
          });
}
function dS(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, _.bG)([lv.A], () => lv.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uL.NITRO:
            return (0, p.jsx)(dh, { withGradient: !0 });
        case uL.NITRO_BASIC:
            return (0, p.jsx)(dh, { withGradient: !1 });
        case uL.SHOP:
            return (0, p.jsx)(uU.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uJ.sV });
        case uL.APPLICATION:
        case uL.PRODUCT:
            return (0, p.jsx)(i7.A, {
                className: uJ.Sy,
                guildClassName: uJ.zA,
                game: t.icon === uL.APPLICATION ? n : void 0,
                guild: i,
                size: i7.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function dx(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uO.PAID)
        switch (i.status) {
            case uP.CLAIMED:
                return (0, p.jsx)("span", { className: uJ.gD, children: V.intl.string(V.t.lIsIFo) });
            case uP.UNCLAIMED:
                return (0, p.jsx)("span", { className: uJ.Tf, children: V.intl.string(V.t["+tqSi3"]) });
            case uP.REDEEMED:
                return (0, p.jsx)("span", { className: uJ.gD, children: V.intl.string(V.t.Osji1u) });
            case uP.FAILED:
                return (0, p.jsx)("span", { className: uJ.ob, children: V.intl.string(V.t.Yo4ru6) });
            default:
                return n
                    ? (0, p.jsx)("span", { className: uJ.Tf, children: V.intl.string(V.t.y7F0Re) })
                    : (0, p.jsx)("span", { className: uJ.Tf, children: V.intl.string(V.t.HHC5Z4) });
        }
    switch (t.status) {
        case uO.PENDING:
            return (0, p.jsx)("span", { className: uJ.oE, children: V.intl.string(V.t.y7F0Re) });
        case uO.FAILED:
            return (0, p.jsx)("span", { className: uJ.ob, children: V.intl.string(V.t.Yo4ru6) });
        case uO.REVERSED:
            return (0, p.jsx)("span", { className: uJ.ob, children: V.intl.string(V.t.YQv9Li) });
        case uO.CANCELED:
            return (0, p.jsx)("span", { className: uJ.ob, children: V.intl.string(V.t.ttkBhy) });
        case uO.PARTIALLY_REFUNDED:
            return (0, p.jsx)("span", { className: uJ.gD, children: V.intl.string(V.t.lYbZzz) });
        case uO.REFUNDED:
            return (0, p.jsx)("span", { className: uJ.gD, children: V.intl.string(V.t.ZBb6NK) });
        case uO.PAID:
            return null;
    }
}
function dT(e) {
    let { receipt: t, locale: n, className: i } = e,
        [l, s] = f.useState(!1),
        { hasAlreadyLinked: r } = (0, uk.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, p.jsx)(uE.tG, {
        id: t.id,
        children: (e) =>
            (0, p.jsxs)(n5.D, {
                onClick: () => s(!l),
                "data-expanded": l,
                className: ic()(uJ.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, p.jsxs)(lN.A, {
                        className: uJ.J7,
                        align: lN.A.Align.CENTER,
                        "data-expanded": l,
                        children: [
                            (0, p.jsx)(n4.E, {
                                variant: "text-sm/normal",
                                className: uJ.p6,
                                children: (0, iA.i$)(im()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, p.jsxs)("div", {
                                className: uJ.h_,
                                children: [
                                    (0, p.jsx)(dS, { receipt: t }),
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
                                              children: (0, p.jsx)(uV.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uJ.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, p.jsxs)("div", {
                                className: uJ.vj,
                                children: [
                                    (0, p.jsx)(dx, { receipt: t, hasLinkedToApplication: r }),
                                    (0, p.jsx)("span", { className: uJ.q9, children: dt(t.net, t.currency) }),
                                ],
                            }),
                            (0, p.jsx)(uF.A, {
                                className: uJ.fT,
                                direction: l ? uF.A.Directions.UP : uF.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    l ? (0, p.jsx)(dE, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var dp = n(949779);
function df(e) {
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
        d = (0, uS.A)("billing-history", l);
    return (0, p.jsx)(uE.hD, {
        navigator: d,
        children: (0, p.jsx)(uE.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, p.jsx)(up, {
                    className: dp.GD,
                    currentPageIndex: s,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, p.jsx)(uh.Ch, {
                        className: dp.Bd,
                        ref: l,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, p.jsx)(dT, { className: ic()(dp.Nj, dp.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function d_(e) {
    let { subscription: t } = e;
    return (
        tE()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, p.jsxs)(oH.Z, {
            className: dp.K1,
            children: [
                (0, p.jsx)("div", {
                    className: dp.BF,
                    children: V.intl.format(V.t["6mIX6s"], { paymentGatewayName: u3.qm[t.paymentGateway] }),
                }),
                (0, p.jsx)("div", {
                    className: dp.Q2,
                    children: V.intl.format(V.t.eG0uZB, {
                        paymentGatewayName: u3.qm[t.paymentGateway],
                        billingHistoryLink: (0, aC.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function dI(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: l,
            loadNextPage: s,
        } = (function () {
            let [e, t] = f.useState(uM),
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
                                l = i.receipts.map(uG);
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
        r = (0, _.bG)([uo.A], () => uo.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, p.jsxs)("div", {
              className: dp.GD,
              children: [
                  null != r && a ? (0, p.jsx)(d_, { subscription: r }) : null,
                  n.length > 0
                      ? (0, p.jsxs)("div", {
                            className: ic()(dp.PQ, dp.GD),
                            children: [
                                (0, p.jsx)("div", {
                                    className: ic()(dp.Nj, dp.Bd),
                                    children: (0, p.jsxs)(lN.A, {
                                        className: dp.Yi,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: uJ.p6,
                                                children: V.intl.string(V.t["5t11BV"]),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: dp.Ir,
                                                children: V.intl.string(V.t.yAAPb2),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: uJ.vj,
                                                children: V.intl.string(V.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, p.jsx)(df, { receipts: n, locale: t, loadNextPage: s }),
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
        : (0, p.jsx)(oD.y, {});
}
var dN = n(545075);
let dC = (0, h.E2)(S.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, _.bG)([uu.default], () => uu.default.locale);
            return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(dN.kb, {}), (0, p.jsx)(dI, { locale: e })] });
        },
        useSearchTerms: () => [V.intl.string(V.t.obLrcK)],
    }),
    db = (0, h.zZ)(S.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.obLrcK),
        buildLayout: () => [dC],
    }),
    dy = (0, h.t_)(S.X.BILLING_PANEL, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [uA, db],
        useObscuredNotice: of.L,
    }),
    dv = (0, h.i4)(S.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        icon: op.B,
        buildLayout: () => [dy],
    });
var dj = n(70283),
    dO = n(682618),
    dL = n(997101);
let dR = {
        [dL.d.US]: [
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
        [dL.d.IT]: [
            {
                id: "gamelife",
                name: "Gamelife",
                url: "https://www.gamelife.it/cava0261-discord-25-eur-codice-di-attivazione?attribute_values=4",
            },
        ],
    },
    dD = [];
function dP(e) {
    return null == e ? dD : (dR[e] ?? dD);
}
var dG = n(92202),
    dM = n(534284),
    dU = n(139486),
    dV = n(962644),
    dk = n(35587),
    dw = n(86379);
let dF = (0, h.E2)(S.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dN.uK,
        usePredicate: () => (0, dw.Hp)(),
        useSearchTerms: () => [V.intl.string(V.t.vwMEHS)],
    }),
    dB = (0, h.zZ)(S.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dF] });
var dz = n(704333),
    dX = n(414499),
    dY = n(31300);
function dH(e) {
    let { enabled: t } = (0, dG.K)({ location: e }),
        n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.storeCountry?.country);
    return t && dP(n).length > 0;
}
var dW = n(178881);
function dK() {
    return n.e("5660").then(n.bind(n, 946647));
}
function dZ(e) {
    let { icon: t, children: n } = e;
    return (0, p.jsxs)(n4.E, {
        variant: "text-xs/normal",
        color: "text-default",
        className: dW.A,
        children: [
            (0, p.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, p.jsx)("span", { children: n }),
        ],
    });
}
let dq = (0, h.zZ)(S.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dQ],
        usePredicate: () => dH("GiftInventoryMarketingBanner"),
    }),
    dQ = (0, h.E2)(S.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dH("GiftCardsGiftInventoryBanner"),
                t = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.storeCountry?.country),
                n = oy("gift_inventory_banner"),
                i = f.useMemo(
                    () =>
                        dP(t).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n("retailer", { partner: e.id, url: e.url }), (0, o_.A)(e.url));
                            },
                        })),
                    [t, n],
                ),
                l = f.useCallback(() => {
                    (n("billing_settings"), (0, na.openUserSettings)(S.X.BILLING_PANEL));
                }, [n]),
                s = f.useCallback(() => {
                    (n("learn_more", { url: ov.C }), (0, o_.A)(ov.C));
                }, [n]);
            return e
                ? (0, p.jsx)(ob, {
                      surface: "gift_inventory_banner",
                      size: "compact",
                      title: V.intl.string(oj.default.Ja5Q8Z),
                      graphicLottie: dK,
                      actions: i,
                      children: (0, p.jsxs)(q.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, p.jsx)(dZ, { icon: dz.B, children: V.intl.string(oj.default["9xo1g9"]) }),
                              (0, p.jsx)(dZ, { icon: dX.h, children: V.intl.string(oj.default.I5UWh9) }),
                              (0, p.jsx)(dZ, {
                                  icon: uV.GiftIcon,
                                  children: V.intl.format(oj.default.ZuneBP, { onBillingSettingsClick: l }),
                              }),
                              (0, p.jsx)(dZ, {
                                  icon: dY.k,
                                  children: V.intl.format(oj.default.UwYHGm, { websiteUrl: s }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var dJ = n(982240),
    d$ = n(948518),
    d0 = n(914410),
    d1 = n(889158),
    d2 = n(573343);
function d3(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, p.jsxs)("div", {
        className: ic()(d2.fO, { [d2.bF]: i }),
        children: [
            null != n && (0, p.jsx)("img", { src: n, alt: "", className: d2.si }),
            (0, p.jsxs)("div", {
                className: d2.tc,
                children: [
                    (0, p.jsx)(n4.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, p.jsx)(n4.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: V.intl.format(d1.default.qvx9E4, { count: (0, dJ.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function d4(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, p.jsx)("div", {
        className: d2.dw,
        children: t.map((e) => (0, p.jsx)(d3, { tier: e, iconUrl: (0, dU.Se)(e), active: e.key === n?.key }, e.key)),
    });
}
function d5(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eX.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, d$.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, p.jsx)("div", {
        className: d2.NG,
        children: (0, p.jsx)(j.$, {
            variant: "primary",
            icon: uV.GiftIcon,
            text: V.intl.string(d1.default.DZnomS),
            onClick: l,
        }),
    });
}
function d6(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, dJ.rL)(i),
        a = (0, dJ.rL)(l),
        o = (0, dU.GZ)(n, i, l),
        u = (0, dU.Se)(i),
        d = (0, dU.Se)(l);
    return (
        (t =
            null != l
                ? V.intl.formatToPlainString(d1.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : V.intl.formatToPlainString(d1.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, p.jsxs)("div", {
            className: d2.mY,
            children: [
                null != u &&
                    (0, p.jsx)("div", {
                        className: d2.fC,
                        children: (0, p.jsx)("img", { src: u, alt: "", className: d2.qS }),
                    }),
                (0, p.jsxs)("div", {
                    className: d2.Qs,
                    children: [
                        (0, p.jsx)(n4.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, p.jsx)(d0.Ay, { variant: d0.qP.BLUE, weight: d0.fh.MEDIUM, progress: o }),
                        (0, p.jsx)(n4.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: d2.qg,
                            children: V.intl.format(d1.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                null != d &&
                    (0, p.jsx)("div", {
                        className: d2.fC,
                        children: (0, p.jsx)("img", { src: d, alt: "", className: d2.qS }),
                    }),
            ],
        })
    );
}
function d8(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, _.cf)([dJ.Ay], () => ({
            badgeProgress: dJ.Ay.getSingleRequirementProgress(dj.$.GIFTING)?.current ?? 0,
            currentTier: dJ.Ay.getCurrentTier(dj.$.GIFTING),
            nextTier: dJ.Ay.getNextTier(dj.$.GIFTING),
            giftsRemaining: dJ.Ay.getRemainingToNextTier(dj.$.GIFTING),
            tiers: dJ.Ay.getBadgeById(dj.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, p.jsxs)("div", {
              className: d2.kL,
              children: [
                  (0, p.jsxs)("div", {
                      className: d2.Jo,
                      children: [
                          n > 0 &&
                              (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsx)(d6, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, p.jsx)("div", { className: d2.yF }),
                                  ],
                              }),
                          (0, p.jsx)(d4, { tiers: r, currentTier: i }),
                          (0, p.jsx)(n4.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: d2.PJ,
                              children: V.intl.string(d1.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, p.jsx)(d5, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let d7 = (0, h.zZ)(S.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => V.intl.string(d1.default.sFokBp),
        buildLayout: () => [d9],
        usePredicate: () => {
            let e = (0, dU.F5)("gift_inventory"),
                t = (0, _.bG)([dJ.Ay], () => dJ.Ay.getBadgeById(dj.$.GIFTING));
            return e && null != t;
        },
    }),
    d9 = (0, h.E2)(S.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [V.intl.string(d1.default.sFokBp)],
        Component: () => (0, p.jsx)(d8, {}),
    });
var ce = n(264779),
    ct = n(412260),
    cn = n(555393),
    ci = n(725807),
    cl = n(212168),
    cs = n(976860),
    cr = n(469778),
    ca = n(45938),
    co = n(109802),
    cu = n(869038),
    cd = n(380856);
function cc(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, p.jsxs)(lN.A, {
        className: ic()(cd.wx, n),
        align: lN.A.Align.CENTER,
        children: [
            (0, p.jsx)("div", { className: cd.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function cg(e) {
    let { children: t, className: n } = e;
    return (0, p.jsx)("div", { className: ic()(cd.rf, n), children: t });
}
class cm extends f.PureComponent {
    static Header = cc;
    static Body = cg;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, p.jsx)("div", { className: ic()(cd.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var cA = n(180522),
    cE = n(871123),
    ch = n(366523),
    cS = n(280450),
    cx = n(30793),
    cT = n(97352),
    cp = n(67480),
    cf = n(615396),
    c_ = n(274904);
class cI extends f.PureComponent {
    _copyModeTimeout = new rW.Ep();
    state = { copyMode: co.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case co.q.SUCCESS:
                return V.intl.string(V.t.XVvPjU);
            case co.q.ERROR:
                return V.intl.string(V.t.i4GM3L);
            default:
                return V.intl.string(V.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        cu.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, ca.AK)(t, n),
            (0, uz.C)(
                e,
                () => this.setState({ copyMode: co.q.SUCCESS }),
                () => this.setState({ copyMode: co.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: co.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, p.jsxs)(lN.A, {
            direction: lN.A.Direction.VERTICAL,
            className: c_.Gj,
            children: [
                (0, p.jsx)(co.e, {
                    className: c_.ph,
                    value: (0, ca.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uz.p5,
                    hideMessage: e ? V.intl.string(V.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: s5.XD.BRAND,
                    buttonLook: s5.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: c_.KB,
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
class cN extends f.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await cu.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && cu.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, cE.bF)(e)
            ? (0, p.jsx)(ch.e, { shape: "square", sku: e, containerClassName: c_.ez })
            : null != t
              ? (0, p.jsx)(cA.A, { giftStyle: t, className: c_.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(i7.A, { game: n, size: i7.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, cE.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: ic()(c_.Oc, c_.ic),
                  children: [
                      (0, p.jsx)(i7.A, { game: n, size: i7.M.XSMALL, skuId: e.id, className: c_._u }),
                      V.intl.format(V.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: c_.Oc, children: V.intl.format(V.t.zMcvcA, { copies: t.length }) });
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
            (0, p.jsx)("div", { className: c_.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(lN.A, {
            justify: lN.A.Justify.BETWEEN,
            align: lN.A.Align.CENTER,
            className: c_.pe,
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
        return (0, p.jsxs)(cm, {
            className: i,
            children: [
                (0, p.jsx)(n5.D, {
                    onClick: this.handleToggleOpen,
                    className: c_.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(cm.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: c_.MY,
                            children: [
                                (0, p.jsxs)(lN.A, {
                                    align: lN.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: c_.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(uF.A, {
                                    direction: a ? uF.A.Directions.UP : uF.A.Directions.DOWN,
                                    className: c_.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(cm.Body, {
                          children: s
                              ? (0, p.jsx)(oD.y, { className: c_.u1 })
                              : (0, p.jsxs)(f.Fragment, {
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
let cC = _.Ay.connectStores([cp.A, tu.A, cx.A, i2.A, cT.A, cS.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = cp.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = cx.A.getForGifterSKUAndPlan(cS.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: tu.A.enabled,
        isFetching: cx.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: cx.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i2.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, cf.c9)(n) : null,
        giftCodes: s,
    };
})(cN);
var cb = n(725570),
    cy = n(736653),
    cv = n(46054);
let cj = im().duration(30, "days");
var cO = n(416052),
    cL = n(878309);
function cR(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, p.jsx)(lx.a, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: cL.aR }),
        onClose: async () => await t(),
        actions: [{ text: V.intl.string(V.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, p.jsxs)("div", {
            className: cL.t4,
            children: [
                (0, p.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t.iufib1) }),
                (0, p.jsx)(n4.E, { variant: "text-md/normal", className: cL.G3, children: V.intl.string(V.t.eAn6z2) }),
            ],
        }),
    });
}
let cD = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = f.useState(null),
        o = (0, tK.GV)(),
        { analyticsLocations: u } = (0, eX.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY);
    return (f.useEffect(() => {
        null == i &&
            (0, ce.kd)({
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
          ? (0, p.jsx)(oD.y, { className: cL.Lq })
          : (0, p.jsx)(lx.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: cL.N1,
                    children: [
                        (0, p.jsx)("div", { className: cL.Qw }),
                        (0, p.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t["23BfZh"]) }),
                        (0, p.jsx)(n4.E, {
                            variant: "text-md/normal",
                            className: cL.G3,
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
                            let e = (0, ce.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(ls.c, { className: cL.M5 }),
                        (0, p.jsx)(lu.D, {
                            label: V.intl.string(V.t.s9LFQh),
                            helperText: V.intl.string(V.t["F+nFTZ"]),
                            children: (0, p.jsx)(cO.A, {
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
var cP = n(136380);
function cG(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = f.useState(!1),
        [r, a] = f.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, cy.Ay)(),
        d = (0, ce.WD)(n.id, u),
        c = null != i,
        g = f.useMemo(
            () =>
                (0, iA.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? im()(n.outboundRedemptionEndDate)
                            : im()(n.endDate).add(cj)
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
        A = (0, cn.N)()?.isEligible === !0,
        E = f.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: S } = n;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: cP.AX,
                children: [
                    (0, p.jsxs)("div", {
                        className: cP.Pg,
                        children: [
                            (0, p.jsxs)("div", {
                                className: cP.At,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: cP.$G,
                                        children: (0, p.jsx)("img", { alt: "", src: d, className: cP.IJ }),
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
                            className: cP.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cv.A.parse(S, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, p.jsx)(cb.aF, {
                    renderModal: (e) =>
                        (0, p.jsx)(cD, {
                            ...e,
                            onClose: E,
                            onClaim: dV.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function cM(e) {
    let { redesign: t = !1 } = e,
        n = (0, _.yK)([cr.A], () => cr.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, cn.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, dk.y7)(),
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
                      className: cP.N1,
                      children: [
                          (0, p.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.wFsj3B) }),
                          (0, p.jsx)(ls.c, { className: cP.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, p.jsxs)("div", {
                      className: cP.uo,
                      children: [
                          (0, p.jsx)(am.t, {
                              size: "md",
                              color: n1.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cP.PC,
                          }),
                          (0, p.jsx)(n4.E, {
                              variant: "text-md/normal",
                              className: cP.Qw,
                              children: V.intl.format(V.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tY.default)(), (0, cs.pX)(I.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, p.jsx)(ci.A, {
                              showGradient: !0,
                              className: cP.aA,
                              subscriptionTier: tJ.pe.TIER_2,
                              textOptions: { textOverride: V.intl.string(V.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, p.jsxs)("div", {
        children: [
            g,
            (0, p.jsx)(cl.A, {
                className: cP.Yj,
                isShown: !1 === i && c,
                type: cl.i.PREMIUM,
                hasBackground: !0,
                children: (0, p.jsxs)("div", {
                    className: cP.DE,
                    children: [
                        m,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, p.jsx)(cG, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, p.jsx)(cG, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, p.jsx)(
                                  cC,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tJ.FB,
                                  },
                                  (0, ca.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, p.jsx)(
                                  cC,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, ca.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, p.jsx)(
                                  cC,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, ca.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cU = (0, h.zZ)(S.X.MY_GIFTS_CATEGORY, {
        useTitle: ck,
        buildLayout: () => [cV],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, _.cf)(
                    [ct.A],
                    () => ({
                        claimedOutboundPromotionCodes: ct.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: ct.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, dk.T1)({ includeClaimedPromotions: !0 }),
                i = (0, ce.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    cV = (0, h.E2)(S.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [ck()],
        Component: () => (0, p.jsx)(cM, { redesign: !0 }),
    });
function ck() {
    return V.intl.string(V.t.YzjdWJ);
}
var cw = n(339048),
    cF = (((o = {}).GIFT_INVENTORY = "gift_inventory"), o),
    cB = n(183636),
    cz = n(739508);
function cX() {
    var e, t;
    let n,
        i,
        l = (0, _.yK)([cr.A], () => cr.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        s = K().groupBy(l, (e) => (0, ca.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [r, a] = f.useState(!1);
    if (
        (f.useEffect(() => {
            (0, cw.XJ)().then(() => a(!0));
        }, []),
        (e = cF.GIFT_INVENTORY),
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
                        "focused" === cB.A.getState() &&
                            (0, cz.pM)(Error(`${e} load timed out`), {
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
        return (0, p.jsx)(oD.y, { className: cP.Lq });
    if (0 === Object.keys(s).length)
        return (0, p.jsxs)("div", {
            className: cP.p$,
            children: [
                (0, p.jsx)(uB.H, { className: cP.ks, children: V.intl.string(V.t.B1qgZn) }),
                (0, p.jsx)("p", {
                    className: cP.WO,
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
            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, ca.X6)(e);
            return (0, p.jsx)(cC, { skuId: t, subscriptionPlanId: n, entitlements: s[e], giftStyle: i }, e);
        });
    return (0, p.jsx)(q.B, { gap: "lg", children: o });
}
let cY = (0, h.zZ)(S.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cW, buildLayout: () => [cH] }),
    cH = (0, h.E2)(S.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cW()], Component: () => (0, p.jsx)(cX, {}) });
function cW() {
    return V.intl.string(V.t.FWe6CP);
}
var cK = n(532446),
    cZ = n(499454);
class cq extends f.Component {
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
                    (await (0, ow.Qp)(n),
                        (0, ow.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oP.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, ca.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await cu.Ay.resolveGiftCode(e);
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
                (0, cZ.h)({ processedCode: e }),
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
                children: (0, p.jsxs)(cK.M, {
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
function cQ(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, ur.c)({ location: "UserSettingsBilling" }),
        i = f.useContext(td.AnalyticsContext),
        l = (0, _.bG)([tu.A], () => tu.A.enabled);
    return (0, p.jsx)(cq, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let cJ = (0, h.zZ)(S.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["il+VCo"]),
        buildLayout: () => [c$],
        usePredicate: () => !(0, dw.Hp)(),
    }),
    c$ = (0, h.E2)(S.X.REDEEM_CODE_INPUT, {
        Component: () => (0, p.jsx)(cQ, { redesign: !0 }),
        useSearchTerms: () => [V.intl.string(V.t["jcSP+g"]), V.intl.string(V.t["il+VCo"])],
    }),
    c0 = (0, h.t_)(S.X.GIFT_PANEL, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        buildLayout: () => [dq, cJ, cU, d7, cY, dB],
        initialize: () => {
            (dV.Ay.fetchClaimedOutboundPromotionCodes(), (0, dU.Ig)("gift_inventory") && (0, dO.o0)(dj.$.GIFTING));
        },
    }),
    c1 = (0, h.i4)(S.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        icon: uV.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, dk.IO)().length;
            return f.useMemo(() => ({ badgeType: T.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = ur.A.getConfig(e).enabled,
                n = dG.A.getConfig(e).enabled,
                i = dP(sx.default.getCurrentUser()?.storeCountry?.country).length > 0;
            return t && n && (0, dM.q)() && i
                ? [{ badgeType: T.Xi.NEW, dismissibleContent: eE.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }]
                : [];
        },
        buildLayout: () => [c0],
    });
var c2 = n(659758),
    c3 = n(129134),
    c4 = n(877624),
    c5 = n(269115),
    c6 = n(462887),
    c8 = n(73825),
    c7 = n(531260),
    c9 = n(160946),
    ge = n(721668),
    gt = n(224016),
    gn = n(526292),
    gi = n(881489),
    gl = n(106512),
    gs = n(22118),
    gr = n(103411),
    ga = n(190187),
    go = n(930861),
    gu = n(854627),
    gd = n(889227),
    gc = n(326084),
    gg = n(851746),
    gm = n(664654),
    gA = n(912140),
    gE = n(953727);
let gh = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...l } = e;
        return (0, p.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gE.A)({ ...l }),
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
    gS = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            l = (0, cy.Ay)(),
            s = (0, c6.q)(l),
            r = null != n ? n : s ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, p.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gE.A)({ ...i }),
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
    gT =
        (((u = {})[(u.NITRO_GEM = 0)] = "NITRO_GEM"),
        (u[(u.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (u[(u.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        u);
let gp = "url(#gradient)",
    gf = (e) => {
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
        let g = (0, cy.Ay)(),
            m = (0, c6.q)(g),
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
                            return gp;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : gp;
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
var g_ = n(104773);
function gI(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        l = f.useMemo(() => (0, gA.A)({ legacyAssetId: t, skuId: n, size: v._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, p.jsx)("div", {
        className: g_.Q7,
        children: (0, p.jsx)("div", {
            className: g_.Nk,
            children: null != l && (0, p.jsx)("img", { className: g_.CH, alt: i, src: l }),
        }),
    });
}
let gN = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: l,
            progressCircleStrokeSize: s,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = gT.NITRO_GEM,
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
        className: ic()(g_.G3, n),
        children: (0, p.jsx)(gf, {
            animationClassName: ic()(g_._0, { [g_.uJ]: x, [A ?? ""]: x }),
            progressCircleStroke: h,
            progressCircleStrokeSize: s,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case gT.NITRO_GEM:
                        return (0, p.jsx)(gh, {
                            className: x ? g_.Ow : void 0,
                            backgroundColor: ic()(g_.vH, l),
                            backgroundCircleSize: r,
                        });
                    case gT.NITRO_LOGO:
                        return (0, p.jsx)(gS, { circleColor: E, ellipseOpacity: m });
                    case gT.AVATAR_DECO:
                        if (null != c)
                            return (0, p.jsx)(gI, {
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
var gC = n(14313);
function gb(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: l } = (0, gu.A)({ userId: t?.id, size: v._3.SIZE_32, animateOnHover: !0 }),
        s = null != t,
        r = s
            ? (0, p.jsx)(y.eu, { src: i, "aria-label": t.username, size: v._3.SIZE_32, ...l })
            : (0, p.jsx)(C.D, { variant: "heading-md/semibold", className: gC.n5, children: n });
    return (0, p.jsx)(lg.m, {
        text: V.intl.string(V.t.UnKHdo),
        shouldShow: !s,
        children: (0, p.jsx)("div", { className: gC.Lg, children: r }),
    });
}
function gy(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, p.jsxs)("div", {
        className: gC.Ip,
        children: [
            (0, p.jsx)("div", { className: gC.Ej }),
            (0, p.jsx)("div", { className: ic()({ [gC.ch]: t > n, [gC.q_]: t === n }) }),
        ],
    });
}
function gv(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        l = n < 2 ? null : t[1],
        s = n < 3 ? null : t[2];
    return (0, p.jsxs)("div", {
        className: gC.ZM,
        children: [
            (0, p.jsx)(gb, { userRecord: i, placement: 1 }),
            (0, p.jsx)(gy, { numSentReferrals: n, placement: 1 }),
            (0, p.jsx)(gb, { userRecord: l, placement: 2 }),
            (0, p.jsx)(gy, { numSentReferrals: n, placement: 2 }),
            (0, p.jsx)(gb, { userRecord: s, placement: 3 }),
        ],
    });
}
let gj = function () {
    let e = (0, _.bG)([gg.A], () => gg.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, gm.J)(),
        i = f.useMemo(() => t.map((e) => new gd.A(e)), [t]),
        l = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === gc.aK.REDEEMED && l.redeemed++, e === gc.aK.CONVERTED && (l.redeemed++, l.converted++));
    });
    let s = l.sent === gm.Z,
        r = eb.A.getArticleURL(I.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, eX.Ay)(tk.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = f.useRef(null),
        u = (l.sent / gm.Z) * 100,
        d = (0, p.jsxs)("div", {
            className: gC.hE,
            children: [
                (0, p.jsx)(gN, { percentage: u, progressCircleVariation: gT.NITRO_LOGO, iconClassName: gC.ER }),
                (0, p.jsxs)("div", {
                    className: gC.Ns,
                    children: [
                        (0, p.jsx)(C.D, {
                            variant: "heading-xl/extrabold",
                            className: gC.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return V.intl.string(V.t.USo4s7);
                            })({ hasSentAll: s }),
                        }),
                        (0, p.jsx)(gv, { userRecords: i }),
                        (0, p.jsx)(n4.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? V.intl.format(V.t["TYu+MH"], { helpdeskArticle: i })
                                        : V.intl.format(V.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= gm.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: l }),
                        }),
                        (0, p.jsx)("div", {
                            className: gC.Fb,
                            children: (0, p.jsx)(go.wL, {
                                "data-migration-pending": !0,
                                className: gC.r$,
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
                                    className: gC.Zn,
                                    children: [
                                        (0, p.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: gC.QH,
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
        c = l.redeemed === gm.Z;
    return (0, p.jsx)(eX.f5, {
        value: a,
        children: (0, p.jsx)("div", {
            className: ic()(gC.kL, { [gC.AP]: c }),
            children: (0, p.jsx)("div", { ref: o, className: ic()(gC.d_, { [gC.kS]: c }), children: d }),
        }),
    });
};
var gO = n(194509),
    gL = n(465794),
    gR = n(774774),
    gD = n(156601),
    gP = n(543213),
    gG = n(88001),
    gM = n(899082),
    gU = n(487518);
let gV = "to_premium_home_button",
    gk = "premium home page";
function gw(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: l } = e,
        s = t.hasActiveTrial,
        r = t.planIdFromItems === tJ.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, c7.A)(),
        u = null != t.trialEndsAt ? im()(t.trialEndsAt).diff(im()(), "d") : 0,
        d = tJ.hd[t.planIdFromItems],
        c = aC.Ay.getDefaultPrice(d.id),
        g = aC.Ay.formatPriceString(c, d.interval);
    if (n || s) {
        let e = (0, c6.M)(l) ? gR.at.PREMIUM_TIER_2_WHITE_FILL : gR.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, p.jsxs)(p.Fragment, {
            children: [
                !s && (r || a)
                    ? (0, p.jsx)(gR.e4, { text: V.intl.string(V.t.EyjDRE), className: gU.LW, colorOptions: e })
                    : (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(gR.HU, {
                                  text: s ? V.intl.string(V.t.qYKftX) : V.intl.string(V.t.EyjDRE),
                                  className: gU.uS,
                                  colorOptions: e,
                              }),
                              (0, p.jsx)("div", { className: gU.on }),
                          ],
                      }),
                (0, p.jsx)(C.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: gU.KB,
                    children: (function () {
                        if (s) return V.intl.format(V.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, u9.$g)(c.amount, c.currency);
                            return V.intl.format(gM.default.FwjZzr, {
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
    return (0, p.jsx)(gD.A, { variant: void 0, subscriptionTier: tJ.pe.TIER_2, interval: d.interval });
}
function gF() {
    let e = (0, gn.k5)(),
        t = (0, gn.nf)(),
        n = (0, cy.Ay)(),
        i = (0, _.bG)([uo.A], () => uo.A.getPremiumTypeSubscription()),
        l = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        s = l?.isPremiumWithPremiumGroup(),
        r = (0, c7.A)(),
        a = (0, gi.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !s) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, p.jsxs)("div", {
        className: ic()(gU.$Y, { [gU.J5]: e || d }),
        children: [
            (0, p.jsxs)("div", {
                className: gU.jp,
                children: [
                    s
                        ? (0, p.jsx)(C.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: gU._K,
                              children: (0, gG.DP)(),
                          })
                        : (0, p.jsx)(gt.A, { className: gU.TJ }),
                    s && !e
                        ? (0, p.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, p.jsxs)(p.Fragment, {
                                children: [
                                    (0, p.jsx)(gR.e4, {
                                        text: V.intl.string(V.t.uXF4c4),
                                        className: gU.LW,
                                        colorOptions: gR.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, p.jsx)(C.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: gU.sQ,
                                        children: V.intl.format(V.t.sK7fGl, {
                                            helpCenterLink: eb.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, p.jsx)(gw, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(gR.HU, {
                                            text: V.intl.string(V.t.qYKftX),
                                            className: gU.uS,
                                            colorOptions: (0, c6.M)(n)
                                                ? gR.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gR.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, p.jsx)(C.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: gU.KB,
                                            children: V.intl.format(V.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, p.jsx)(gP.ZP, {
                        featureSet: l?.isPremiumGroupPrimary()
                            ? gP.Nz.PREMIUM_GROUP_PRIMARY
                            : l?.isPremiumGroupMember()
                              ? gP.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? gP.Nz.FRACTIONAL_PREMIUM
                                : gP.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, p.jsxs)(s8.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, p.jsx)(gL.A, {
                                      defaultTextOverride: a ? V.intl.string(V.t.YScQSF) : V.intl.string(V.t["0b3YRn"]),
                                  }),
                                  (0, p.jsx)(j.$, {
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gV,
                                              target: gk,
                                          }),
                                              (0, tY.default)(),
                                              (0, cs.pX)(I.BVt.APPLICATION_STORE));
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
                                              cta_type: gV,
                                              target: gk,
                                          }),
                                              (0, tY.default)(),
                                              (0, cs.pX)(I.BVt.APPLICATION_STORE));
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
                className: gU.ah,
                children: (0, p.jsx)("img", { className: gU.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function gB() {
    return (0, p.jsxs)("div", {
        className: gU.T1,
        children: [
            (0, p.jsx)("img", { className: gU.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, p.jsxs)("div", {
                className: gU.b4,
                children: [
                    (0, p.jsx)(C.D, {
                        className: gU.Vz,
                        variant: "heading-xl/extrabold",
                        children: V.intl.string(V.t["3KomGa"]),
                    }),
                    (0, p.jsx)(n4.E, {
                        className: gU.Oi,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.yQ06u1),
                    }),
                    (0, p.jsx)(gO.A, {
                        className: ic()(gU.Tp, gU._c),
                        textOptions: { textOverride: V.intl.string(V.t.Ve9Ge6), textClassName: gU.VV },
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
let gz = function () {
        let e = (0, dw.Hp)(),
            { analyticsLocations: t } = (0, eX.Ay)(tk.A.PREMIUM_SETTINGS),
            n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
            i = (0, _.bG)([uo.A], () => uo.A.getPremiumTypeSubscription()),
            l = (0, _.bG)([uo.A], () => uo.A.hasFetchedSubscriptions()),
            s = (0, c9.Y)(tJ.T7),
            [r, a] = f.useState(!0),
            o = (0, c7.A)({ forceFetch: !0 }),
            u = (0, _.bG)([ct.A], () => {
                let e = ct.A.getMarketingComponentByType(c4.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oY.Fr || oY.v1) && null != u,
            c = f.useRef(null);
        (0, ga.i)();
        let g = (0, gr.m)();
        f.useEffect(() => {
            !(async function () {
                (e || (await Promise.all([ok.hP(), ok.$o(), (0, c8.zS)(null, null, I.tF5.DISCOVERY)])), a(!1));
            })();
        }, [e]);
        let [m, A] = f.useState(!1);
        if (e) return (0, p.jsx)(dN.uK, {});
        let E = l && null !== i && s,
            h = o.fetched && o.isFractionalPremiumActive,
            S = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !S) return (0, p.jsx)(ge.A, { title: V.intl.string(V.t.dyq9TR), note: null });
        if ((!E && !h && !S) || r) return (0, p.jsx)(oD.y, {});
        let x = !!i?.hasActiveTrial;
        return (0, p.jsx)(eX.f5, {
            value: t,
            children: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsxs)(q.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, p.jsx)(gl.m, { config: u }),
                            (0, p.jsx)(gF, {}),
                            g && (0, p.jsx)(gj, {}),
                            !d && (0, p.jsx)(gB, {}),
                            (0, p.jsx)(gs.A, {
                                hideCTAs: !0,
                                headingOverride: V.intl.string(V.t.dnVvQS),
                                hidePill: !x,
                                selectedPlanColumnClassName: gU.JG,
                                selectedPlanTier: tJ.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, p.jsx)(c5.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (td.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, p.jsx)("div", { ref: c, className: gU._Z }),
                    }),
                ],
            }),
        });
    },
    gX = (0, h.E2)(S.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return (0, aC.YE)(e, tJ.PremiumTypes.TIER_2) ? (0, p.jsx)(gz, {}) : (0, p.jsx)(c3.A, {});
        },
        useSearchTerms: () => [V.intl.string(V.t.Ipxkog)],
    }),
    gY = (0, h.zZ)(S.X.NITRO_CATEGORY, { buildLayout: () => [gX] }),
    gH = (0, h.t_)(S.X.NITRO_PANEL, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        useObscuredNotice: of.L,
        buildLayout: () => [gY],
    }),
    gW = (0, h.i4)(S.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        icon: am.t,
        usePersistentBadge: function (e) {
            let t = (0, c2.e)(e);
            return f.useMemo(() => ({ badgeType: T.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gH],
    });
var gK = n(104510),
    gZ = n(820739),
    gq = n(859241),
    gQ = n(527113),
    gJ = n(338548),
    g$ = n(776096),
    g0 = n(711014),
    g1 = n(178368),
    g2 = n(809545),
    g3 = n(168482);
function g4() {
    return (0, p.jsxs)("div", {
        className: g2.iE,
        children: [
            (0, p.jsx)("img", { className: g2.Kk, alt: "", src: g3 }),
            (0, p.jsxs)("div", {
                className: g2.pq,
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
                    ((0, cs.pX)(I.BVt.GUILD_DISCOVERY), (0, tY.default)());
                },
            }),
        ],
    });
}
var g5 = n(365199),
    g6 = n(464120),
    g8 = n(443865),
    g7 = n(980707),
    g9 = n(473145);
function me(e) {
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
                      iconLeft: g8.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: g8.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, p.jsxs)(g7.W, {
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
            (0, g9.I5)(t)
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
var mt = n(545934),
    mn = n(548118),
    mi = n(987144),
    ml = n(864310),
    ms = n(290413);
function mr(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, ml.A)(t.id);
    return (0, p.jsxs)("div", {
        className: n ?? ms.OA,
        children: [
            (0, p.jsx)(mn.Ay, { className: ms.$f, guild: t, size: mn.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: ms.gI,
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, p.jsxs)("div", {
                        className: ms.ew,
                        children: [
                            (0, p.jsxs)("div", {
                                className: ms.QW,
                                children: [
                                    (0, p.jsx)(gK._, {
                                        className: ms.Wz,
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
                                        (0, p.jsx)("div", { className: ms.zk }),
                                        (0, p.jsx)(n4.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, g9.gb)(t.premiumTier, { useLevels: !1 }),
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
function ma(e) {
    let { guildId: t } = e,
        n = (0, _.bG)([lv.A], () => lv.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: ms.Nr,
              children: [
                  (0, p.jsx)(mr, { guild: n }),
                  (0, p.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gK._,
                      text: V.intl.string(V.t.aBHecF),
                      onClick: () => {
                          (0, mi.g)({
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
var mo = n(747381);
let mu =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function md(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = f.useRef(null),
        a = (0, g9.I5)(t),
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, c7.A)(),
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
            let e = null != t.premiumGuildSubscription ? oX.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return V.intl.formatToPlainString(V.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = f.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, p.jsxs)("div", {
        className: ic()(mo.iq, { [mo.Mt]: s }),
        children: [
            (0, p.jsxs)("div", {
                className: mo.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mo.bB, src: mu }),
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
                                              (0, p.jsx)("div", { className: mo.zk }),
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
                                              (0, p.jsx)("div", { className: mo.zk }),
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
                    return (0, p.jsx)(me, {
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
                        className: mo.Mj,
                        ...e,
                        children: (0, p.jsx)(g5.MoreHorizontalIcon, {
                            size: "xs",
                            color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function mc(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, _.bG)([lv.A], () => lv.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: mo.Nr,
        children: [
            (0, p.jsx)("div", {
                className: mo.MY,
                children:
                    null != s
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(mr, { guild: s, className: mo.OA }),
                                  (0, p.jsx)(j.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: V.intl.string(V.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tY.default)(),
                                              (0, g6.K4)({
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
                              className: mo.OA,
                              children: (0, p.jsx)(C.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, p.jsx)(
                    md,
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
function mg(e) {
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
                                mt.A.createFromServer(
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
                if ((!(0, g9.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in s || (s[e] = []), s[e].push(i));
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > aC.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, p.jsx)("div", {
        className: mo.kR,
        children: oX.default
            .keys(s)
            .map((e) => (0, p.jsx)(mc, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var mm = n(502572),
    mA = n(983511),
    mE = n(342744),
    mh = n(496431);
let mS = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, mh.A)(n);
    return (0, p.jsx)(n4.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iA.uN)(i, { days: V.t.WUTPDc, hours: V.t.c1qodV, minutes: V.t["2+A3dv"] }),
    });
};
var mx = n(731536);
function mT(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, _.bG)([uo.A], () => uo.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = f.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, g9.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? aC.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === tJ.xc.NONE;
    return 0 === s.length
        ? null
        : (0, p.jsxs)("div", {
              className: mx.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: mx.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: mx._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: mx.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: mx.F8, src: mu }),
                                          (0, p.jsx)("div", {
                                              className: ic()(mx.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: mx.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: mx.Qp,
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
                          (0, p.jsx)(mm.A, {
                              shouldShow: o,
                              text: V.intl.string(V.t.mOWsF1),
                              "aria-label": V.intl.string(V.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(j.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gK._,
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
                                                              (0, mi.g)({
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
                          mp,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, g9.I5)(e),
                              isCanceled: (0, g9.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mp(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = f.useRef(null),
        u = f.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = s ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, p.jsx)(mS, { cooldown: u.getTime() })
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
        className: ic()(mx.iq, { [mx.Mt]: i }),
        children: [
            (0, p.jsxs)("div", {
                className: mx.kd,
                children: [(0, p.jsx)("img", { alt: "", className: mx.bB, src: mu }), t],
            }),
            c &&
                (0, p.jsx)(af.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsxs)(g7.W, {
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
                                                        (0, p.jsx)(mA.default, { ...e, guildBoostSlot: n }),
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
                                                        (0, p.jsx)(mE.default, { ...e, guildBoostSlotId: n.id }),
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
                            className: mx.Mj,
                            ...e,
                            children: (0, p.jsx)(g5.MoreHorizontalIcon, {
                                size: "xs",
                                color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var mf = n(834612);
function m_(e) {
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
              className: mf.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: mf.b,
                      children: [
                          (0, p.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.W5rDjW) }),
                          (0, p.jsx)(n4.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: V.intl.format(V.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(mg, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, p.jsx)(mT, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var mI = n(333722),
    mN = n(9146);
function mC() {
    return (0, p.jsxs)("div", {
        className: mN.iE,
        children: [
            (0, p.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: mN.kR,
                children: mI.s.map((e, t) => {
                    let n = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: mN.Nr,
                            children: [
                                (0, p.jsx)(n, { className: mN.Kk }),
                                (0, p.jsx)(n4.E, {
                                    className: mN.h_,
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
var mb = n(847374),
    my = n(232122),
    mv = n(665984);
function mj() {
    let [e, t] = f.useState(null),
        [n, i] = f.useState(null);
    return (0, p.jsxs)("div", {
        className: mv.iE,
        children: [
            (0, p.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: mv.p_,
                children: my.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        n5.D,
                        {
                            tag: "li",
                            className: ic()(mv.Aw, { [mv.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: mv.k7,
                                    children: [
                                        (0, p.jsx)(n4.E, {
                                            className: mv.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, p.jsx)(mb.a, {
                                            size: "sm",
                                            color: n1.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mv.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(n4.E, {
                                        className: mv.ZF,
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
var mO = n(182859),
    mL = n(959456),
    mR = n(416763);
function mD() {
    let e = eb.A.getArticleURL(I.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: mR.wx,
        children: [
            (0, p.jsxs)("div", {
                className: mR.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: mR.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mR.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(mL.default.hjvcLO),
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
            (0, p.jsx)(mO.A, {
                variant: "member",
                className: mR.iO,
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
var mP = n(315629),
    mG = n(87719),
    mM = n(961085);
function mU() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
    if (null == e || aC.Ay.hasFreeBoosts(e)) return null;
    let t = eb.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mP.h, {
        color: "nitro-pink",
        className: mM.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mM.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mM.q3, src: mu }),
                    (0, p.jsxs)("div", {
                        className: mM.Tm,
                        children: [
                            (0, p.jsx)(n4.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.Idh1Vs, { count: tJ.M4, boostCount: tJ.M4 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mM.xv,
                                children: [
                                    (0, p.jsx)(am.t, { className: mM.nE }),
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
                onClick: mG.e,
            }),
        ],
    });
}
var mV = n(532991);
function mk() {
    let e = (0, _.bG)([g$.A], () => g$.A.affinities),
        t = (0, _.bG)([g0.Ay], () => g0.Ay.getFlattenedGuildIds()),
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
              className: mV.i,
              children: [
                  (0, p.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: mV.k, children: n.map((e) => (0, p.jsx)(ma, { guildId: e }, e)) }),
              ],
          });
}
var mw = n(967246);
function mF(e) {
    let { count: t } = e,
        i = eb.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mP.h, {
        color: "nitro-pink",
        className: mw.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mw.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mw.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mw.F8, src: mu }),
                            (0, p.jsx)("div", {
                                className: ic()(mw.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mw.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mw.Tm,
                        children: [
                            (0, p.jsx)(n4.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mw.xv,
                                children: [
                                    (0, p.jsx)(am.t, { className: mw.nE }),
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
                icon: gK._,
                text: V.intl.string(V.t.BMx1iy),
                onClick: () => {
                    (0, lT.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, p.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, mi.g)({
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
var mB = n(89150);
function mz(e) {
    let { premiumSubscription: t } = e,
        n = (0, _.bG)([g1.A], () => g1.A.boostSlots),
        i = f.useMemo(() => Object.values(n), [n]),
        l = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        s = (0, _.bG)([g$.A], () => g$.A.affinities),
        r = (0, _.bG)([g0.Ay], () => g0.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = (0, _.bG)([gq.A], () => gq.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, c7.A)({ forceFetch: !0 }),
        d = l?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === tJ.xc.NONE,
        g = f.useMemo(() => {
            if (null == t || c) return 0;
            let e = aC.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, p.jsxs)("div", {
        className: mB.GO,
        children: [
            (0, p.jsx)(dN.kb, { className: mB.ek }),
            (0, p.jsx)(mD, {}),
            (0, p.jsx)(mU, {}),
            g > 0 && (0, p.jsx)(mF, { count: g }),
            d && (0, p.jsx)(gJ.A, {}),
            !a && (0, p.jsx)(g4, {}),
            (0, p.jsxs)("div", {
                className: mB.C_,
                children: [
                    (0, p.jsx)(m_, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, p.jsx)(mk, {}),
                    (0, p.jsx)(gQ.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(mC, {}),
                    (0, p.jsx)(mj, {}),
                ],
            }),
        ],
    });
}
var mX = n(819677);
let mY = (0, h.E2)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            f.useEffect(() => {
                (ok.hP(), ok.$o(), (0, gZ.CD)(), (0, c8.zS)(null, null, I.tF5.DISCOVERY), (0, gZ.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, _.cf)([uo.A], () => ({
                    hasFetchedSubscriptions: uo.A.hasFetchedSubscriptions(),
                    premiumSubscription: uo.A.getPremiumTypeSubscription(),
                })),
                n = (0, c9.Y)(),
                i = (0, _.bG)([ua.A], () => ua.A.hasFetchedPaymentSources),
                l = (0, _.bG)([gq.A], () => gq.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = f.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, p.jsx)("div", { className: ic()(mX.kL, mX.Lq), children: (0, p.jsx)(oD.y, {}) })
                : (0, p.jsxs)("div", {
                      className: mX.kL,
                      children: [
                          (0, p.jsx)("div", { className: mX.Tp }),
                          (0, p.jsx)("div", { className: mX.Qs, children: (0, p.jsx)(mz, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t["+CbP2v"]), V.intl.string(V.t.Nn1lJy)],
    }),
    mH = (0, h.zZ)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mY] }),
    mW = (0, h.t_)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        buildLayout: () => [mH],
    }),
    mK = (0, h.i4)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        icon: gK._,
        buildLayout: () => [mW],
    });
var mZ = n(153659),
    mq = n(155984),
    mQ = n(357758),
    mJ = n(262077),
    m$ = n(281445),
    m0 = n(624479),
    m1 = n(626584),
    m2 = n(131607),
    m3 = n(196736),
    m4 = n(685743),
    m5 = n(349085),
    m6 = n(342942),
    m8 = n(376205),
    m7 = n(252589),
    m9 = n(758836),
    Ae = n(49999),
    At = n(135570),
    An = n(439050);
let Ai = new m1.A("GameServerSubscriptionsSection");
function Al(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function As(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let Ar = f.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, m5.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, m2.kn)([eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = cS.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, m4.A)(c, t.id, tk.A.GAME_SERVER_PAGE, t.serverIp),
        A = f.useCallback(() => {
            (0, m6.A)({
                provider: m$.X.SHOCKBYTE,
                onAccept: () => {
                    (u(Ae.i.TAKE_ACTION), g());
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
            [uo.A, cT.A],
            () => {
                let e = null != s ? uo.A.getSubscriptionById(s) : null;
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
                    c = Al(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? V.intl.formatToPlainString(At.default["3aEgK6"], { date: c })
                        : l
                          ? V.intl.formatToPlainString(At.default.KFSA3M, { date: c })
                          : V.intl.formatToPlainString(At.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, n, i],
            As,
        ),
        N = f.useCallback(() => {
            if (null == s) return;
            let e = uo.A.getSubscriptionById(s),
                t = null != e ? Al(e.currentPeriodEnd) : "";
            (0, n2.A)({
                title: V.intl.string(At.default.TEYPNR),
                subtitle: V.intl.formatToPlainString(At.default.XR1WrB, { date: t }),
                confirmText: V.intl.string(V.t["cY+Oob"]),
                cancelText: V.intl.string(At.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await ok.M2(s, l), await ok.hP());
                    } catch (e) {
                        Ai.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        C = f.useCallback(() => {
            if (null == s) return;
            let e = uo.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? cT.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, u9.$g)(u, o.priceCurrency) : "",
                c = Al(e.currentPeriodEnd);
            (0, n2.A)({
                title: V.intl.string(At.default.o96qbc),
                subtitle: V.intl.formatToPlainString(At.default["7n6Qq+"], { price: d, date: c }),
                confirmText: V.intl.string(V.t.iIvF2z),
                cancelText: V.intl.string(V.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, c8.ur)(r);
                        let t = e.items;
                        (await ok.nV(
                            e,
                            { status: I.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, aC.UC)(t, e.currency),
                            l,
                        ),
                            await ok.hP());
                    } catch (e) {
                        Ai.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, n, i]),
        b = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, p.jsxs)("div", {
        className: An.nM,
        children: [
            (0, p.jsxs)("div", {
                className: An.M4,
                children: [
                    (0, p.jsxs)("div", {
                        className: An.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, p.jsx)("img", { className: An.uP, src: a, alt: "" }),
                            (0, p.jsx)("div", { className: An.tw }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: An.CR,
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
                                          className: An.CQ,
                                          children: [
                                              (0, p.jsx)(n4.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, p.jsx)(n5.D, {
                                                  className: An.cL,
                                                  onClick: g,
                                                  "aria-label": V.intl.string(V.t.OpuAlK),
                                                  children: m
                                                      ? (0, p.jsx)(di.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, p.jsx)(m0.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, p.jsx)(uq.A, { onClick: A, children: V.intl.string(At.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: An.Rd,
                children: [
                    (0, p.jsxs)("div", {
                        className: An.Ff,
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
                                          className: An.ez,
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
function Aa(e) {
    let { servers: t } = e,
        n = (0, m3.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, m7.Y)(),
        l = (0, _.bG)([sx.default], () => aC.Ay.canUseShopDiscounts(sx.default.getCurrentUser())),
        s = f.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, _.yK)([uo.A], () => (0, m8.HY)(t, i, (e) => uo.A.getSubscriptionById(e)), [t, i]);
    f.useEffect(() => {
        let e = r.filter((e) => !cT.A.isLoadedForSKU(e) && !cT.A.isFetchingForSKU(e));
        e.length > 0 && (0, c8.jv)(e).catch(() => {});
    }, [r]);
    let a = f.useCallback(() => {
        ((0, tY.default)(), (0, cs.pX)(I.BVt.COLLECTIBLES_SHOP_WITH_TAB(m9.G2.GAME_SERVERS)));
    }, []);
    return (0, p.jsxs)("div", {
        className: An.uW,
        children: [
            (0, p.jsxs)("div", {
                className: An.wx,
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: V.intl.string(At.default.vCzwM7),
                    }),
                    (0, p.jsxs)("div", {
                        className: An.h_,
                        children: [
                            (0, p.jsx)(n4.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.string(At.default.y85Eg9),
                            }),
                            n &&
                                (0, p.jsx)(uq.A, {
                                    onClick: a,
                                    children: (0, p.jsx)(n4.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: V.intl.string(At.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", {
                className: An.p_,
                children: t.map((e) =>
                    (0, p.jsx)(Ar, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var Ao = n(55766),
    Au = n(696986),
    Ad = n(364036);
function Ac(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["KzCF/6"]) }),
            (0, p.jsx)(Au.h, { size: 4 }),
            (0, p.jsx)(n4.E, { variant: "text-md/normal", className: Ad.yV, children: V.intl.string(V.t["3D7qCu"]) }),
            (0, p.jsx)(Au.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: Ad.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: Ad.RI }),
                    (0, p.jsxs)("div", {
                        className: Ad.FS,
                        children: [
                            (0, p.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: Ad.wx,
                                children: V.intl.string(V.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(n4.E, {
                                variant: "text-md/normal",
                                className: Ad.h_,
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
var Ag = n(872351),
    Am = n(9113),
    AA = n(599941),
    AE = n(384684),
    Ah = n(2242);
let AS = [];
var Ax = n(885574),
    AT = n(62010),
    Ap = n(912851),
    Af = n(182744);
let A_ = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, p.jsx)(n5.D, {
        onClick: i ? void 0 : n,
        className: Af.x6,
        children: (0, p.jsxs)("div", {
            className: Af.hQ,
            children: [
                i
                    ? (0, p.jsx)(oD.y, { type: oD.y.Type.PULSING_ELLIPSIS, className: Af.__invalid_spinner })
                    : (0, p.jsx)(n4.E, { variant: "text-md/medium", className: Af.Pf, children: t }),
                (0, p.jsx)(mb.a, { size: "md", color: "currentColor", className: Af.UE }),
            ],
        }),
    });
};
var AI = n(465932),
    AN = n(543767),
    AC = n(951555),
    Ab = n(790284),
    Ay = n(636194),
    Av = n(624456),
    Aj = n(710144),
    AO = n(815332),
    AL = n(162093),
    AR = n(557506);
function AD(e) {
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
                        return (n(!0), await ok.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === Ah.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === Ah.bN.INTANGIBLE),
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
                (0, p.jsx)(AL.x, { listingId: i.id, guildId: n.guild_id, className: AR.P }),
            ],
        }),
    });
}
var AP = n(319225),
    AG = n(746080),
    AM = n(883616);
function AU(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, p.jsxs)("div", {
        className: AM.L0,
        children: [
            (0, p.jsxs)("div", {
                className: AM.a5,
                children: [
                    (0, p.jsx)(C.D, { variant: "heading-deprecated-12/semibold", className: AM.HU, children: t }),
                    i &&
                        (0, p.jsx)(lg.m, {
                            text: l,
                            children: (0, p.jsx)(Ax.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: AM.Mo,
                            }),
                        }),
                ],
            }),
            (0, p.jsx)(C.D, { variant: "heading-xl/semibold", className: AM.sx, children: n }),
        ],
    });
}
function AV(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eX.Ay)(),
        [i] = (0, AN.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tk.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [l, s] = (0, _.yK)([ua.A], () => [ua.A.hasFetchedPaymentSources, ua.A.paymentSourceFetchError]);
    return null != i && (l || s)
        ? (0, p.jsx)(AC.A, { subscription: t, currentInvoicePreview: i })
        : (0, p.jsx)(oD.y, {});
}
function Ak(e) {
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
                  className: AM.__invalid_rowButtons,
                  children: n
                      ? (0, p.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.y3mAE4), onClick: r, loading: i })
                      : (0, p.jsxs)(p.Fragment, {
                            children: [
                                !t && !l && (0, p.jsx)(A_, { label: V.intl.string(V.t.FRbWR8), onClick: a }),
                                (0, p.jsx)(A_, { label: V.intl.string(V.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let Aw = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, Av.M)(e),
                n = (0, _.bG)([Ay.A], () => Ay.A.getSubscriptionListingForPlan(t)),
                i = (0, _.bG)([Ay.A], () =>
                    null != n ? Ay.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, _.bG)([lv.A], () => lv.A.getGuild(i?.guild_id)),
                [s, r] = f.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, AA.XE)();
            f.useEffect(() => {
                s && null != l && null == Ay.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = im()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, u9.$g)(t.price, t.currency) : "",
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
        { shouldHideGuildPurchaseEntryPoints: g } = (0, AI.MH)(l?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await ok.QP(t, c),
                (0, AP.E)({ title: V.intl.string(V.t.oPV2cy), body: V.intl.string(V.t.DdRizV) }));
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
        className: AM.kL,
        children: [
            (0, p.jsx)(Aj.A, {
                onClick: r,
                className: AM.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            null != l && (0, p.jsx)(mn.Ay, { guild: l, active: !0, size: mn.Ay.Sizes.MEDIUM }),
                            (0, p.jsxs)("div", {
                                className: AM.if,
                                children: [
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-md/medium",
                                        className: AM.J5,
                                        children: null != l ? l.name : V.intl.string(V.t["He+cmd"]),
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: AM.xp,
                                        children: [
                                            (0, p.jsx)(n4.E, {
                                                variant: "text-sm/normal",
                                                className: AM.KR,
                                                children: n.name,
                                            }),
                                            E
                                                ? (0, p.jsx)(AT.E, {
                                                      type: { text: V.intl.string(V.t["7uFZGt"]) },
                                                      variant: "critical",
                                                  })
                                                : b
                                                  ? (0, p.jsx)(AT.E, {
                                                        type: { text: V.intl.string(V.t["6anton"]) },
                                                        variant: "primary",
                                                    })
                                                  : h
                                                    ? (0, p.jsx)(lg.m, {
                                                          text: V.intl.string(V.t.eSuJE2),
                                                          children: (0, p.jsx)("div", {
                                                              className: AM.qc,
                                                              children: (0, p.jsx)(AT.E, {
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
                                                          className: AM.Bi,
                                                          children: (0, p.jsx)(AT.E, {
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
                                children: (0, p.jsx)(mb.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ic()(AM.D6, { [AM.S7]: s }),
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
                          (0, p.jsx)("div", { className: AM.yF }),
                          (0, p.jsx)(AO.A, { groupListingId: i.id, subscription: t, className: AM.kE }),
                          (0, p.jsxs)("div", {
                              className: AM.Zx,
                              children: [
                                  (0, p.jsx)(AU, { label: C, value: N }),
                                  (0, p.jsx)(AU, {
                                      label: V.intl.string(V.t.dltUMH),
                                      value: x,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? V.intl.string(V.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, p.jsx)(AU, { label: V.intl.string(V.t.AOcwWB), value: T }),
                              ],
                          }),
                          (0, p.jsx)(Au.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, p.jsx)(lu.D, {
                                  label: V.intl.string(V.t.wmMFvA),
                                  children: (0, p.jsx)(AV, { subscription: t }),
                              }),
                          !y &&
                              (0, p.jsx)(Ak, {
                                  isTrial: b,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, lT.openModal)((t) => (0, p.jsx)(AD, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, cs.pX)(I.BVt.CHANNEL(l.id, AG.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tY.default)(),
                                          Ap.A.show(
                                              I.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              V.intl.string(V.t.DvbaM4),
                                              () => {
                                                  (Ab.A.setState({ subsection: eL.nR }),
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
var AF = n(661097);
let AB = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, _.bG)([AE.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [AE.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? Ah.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? Ah.M_.NONE
                                  : Ah.M_.IN_SUBSCRIPTION_SERVER;
                        })([AE.A]),
                    ) === Ah.M_.SUBSCRIBED,
                n = (0, _.bG)([uo.A], () => uo.A.getActiveGuildSubscriptions()),
                i = f.useRef(!1);
            return (
                f.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = uo.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !uo.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), ok.hP());
                }, [e, t]),
                n ?? AS
            );
        })(),
        { loading: i } = (0, AA.eb)(n);
    return ((0, Am.A)(oY.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, p.jsx)(oD.y, {})
        : 0 === n.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(j.$, { text: V.intl.string(V.t.hqyhKQ), icon: Ag.z, variant: "secondary", onClick: t }),
                    (0, p.jsx)(Au.h, { size: 10 }),
                    (0, p.jsx)(n3.n, {
                        label: V.intl.string(V.t["KzCF/6"]),
                        description: V.intl.string(V.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: AF.A,
                            children: n.map((e) => (0, p.jsx)(Aw, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Az = n(327479),
    AX = n(932012);
function AY(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["48ywCu"]) }),
            (0, p.jsx)(Au.h, { size: 4 }),
            (0, p.jsx)(n4.E, { variant: "text-md/normal", className: AX.yV, children: V.intl.string(V.t.VWxmSo) }),
            (0, p.jsx)(Au.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: AX.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AX._e }),
                    (0, p.jsxs)("div", {
                        className: AX.FS,
                        children: [
                            (0, p.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: AX.wx,
                                children: V.intl.string(V.t["48ywCu"]),
                            }),
                            (0, p.jsx)(n4.E, {
                                variant: "text-md/normal",
                                className: AX.h_,
                                children: V.intl.format(V.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(Az.A, { onClick: t, text: V.intl.string(V.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AH = n(548411),
    AW = n(417098),
    AK = n(143582),
    AZ = n(915043),
    Aq = n(631466);
function AQ(e) {
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
        className: ic()(Aq.iE, t),
        children: [
            (0, p.jsx)("div", { className: ic()(Aq.wx, i), children: n }),
            s && (0, p.jsx)("div", { className: Aq.Qs, children: l }),
        ],
    });
}
var AJ = n(885996),
    A$ = n(144165),
    A0 = n(664121),
    A1 = n(950305),
    A2 = n(943775),
    A3 = n(123791),
    A4 = n(900797),
    A5 = n(611643);
let A6 = f.createContext({ isOpen: !1, toggleOpen: () => {} });
function A8(e) {
    let { children: t } = e,
        [n, i] = f.useReducer((e) => !e, !1),
        l = f.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, p.jsx)(A6.Provider, { value: l, children: t(n) });
}
A8.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = f.useContext(A6),
        s = i ? A4.t : mb.a,
        r = null != n ? n : i ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.XJuakA);
    return (0, p.jsxs)(n5.D, {
        className: ic()(A5.L, t),
        onClick: l,
        children: [
            (0, p.jsx)(n4.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var A7 = n(627363),
    A9 = n(328968),
    Ee = n(163437),
    Et = n(3432);
function En(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var Ei = n(562312),
    El = (((d = {})[(d.LOADING = 0)] = "LOADING"), (d[(d.DONE = 1)] = "DONE"), (d[(d.ERROR = 2)] = "ERROR"), d);
function Es(e) {
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
            [cT.A, cp.A, A9.A, lv.A],
            () => {
                let e,
                    n = cT.A.get(r),
                    i = null != n ? cp.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? A9.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, Ee.PJ)(o.skuFlags),
                    d = u && null != l ? lv.A.getGuild(l) : void 0,
                    c = (0, Ee.Uo)(t, i),
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
        { data: h } = (0, A7.YY)(a),
        S = f.useMemo(() => (null != h ? (0, A2.A)(h, 100) : null), [h]),
        x = g?.deleted ?? !1,
        T = null != g && (0, Ee.Se)(g),
        N = t.status === I.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eX.Ay)(),
        [y] = (0, AN.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tk.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = En(t.currentPeriodEnd),
        j = 0 === i;
    return (0, p.jsxs)(AQ, {
        headerClassName: Ei.dL,
        header:
            !1 === j
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: Ei.VW,
                              children: [
                                  null != S &&
                                      (0, p.jsx)(A$._, { src: S.href, imageClassName: Ei.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: Ei.aF,
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
                              className: Ei.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, p.jsx)(Ed, {
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
                : (0, p.jsx)(oD.y, { type: oD.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, p.jsx)(Eu, {
                    type: "warning",
                    title: T
                        ? V.intl.formatToPlainString(V.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : V.intl.formatToPlainString(V.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, p.jsx)(Eu, { type: "warning", title: V.intl.string(V.t.SmSP8Q) }),
            N && (0, p.jsx)(Eu, { type: "danger", title: V.intl.string(V.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: Ei.zH,
                children: [
                    (0, p.jsx)(Eo, {
                        title: V.intl.string(V.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: Ei.yW,
                                          children: [(0, p.jsx)(A0.R, { size: "xs" }), V.intl.string(V.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: Ei._t,
                                              children: [
                                                  (0, p.jsx)(n4.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: V.intl.format(V.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(mn.Ay, { guild: c, size: mn.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: Ei.yW,
                                  children: [(0, p.jsx)(A1.UserIcon, { size: "xs" }), V.intl.string(V.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(Er, { invoicePreview: y, subscriptionPlan: o }),
                    (0, p.jsx)(Eo, {
                        title: V.intl.string(V.t.dnUzb6),
                        content: En(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(Ea, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(Eg, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: x,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(Ec, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function Er(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, p.jsx)(Eo, { title: V.intl.string(V.t.KI7ERx), content: "" });
    let i = (0, u9.CE)((0, u9.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, p.jsx)(Eo, { title: V.intl.string(V.t.KI7ERx), content: i });
    let s = (0, u9.CE)((0, u9.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(Eo, {
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
function Ea(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, u9.CE)((0, u9.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, p.jsx)(Eo, {
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
    return (0, p.jsx)(Eo, { title: t ? V.intl.string(V.t.enxcAl) : V.intl.string(V.t["Ms+6Zq"]), content: n });
}
function Eo(e) {
    let { title: t, content: n } = e;
    return (0, p.jsxs)("div", {
        className: Ei.nM,
        children: [
            (0, p.jsx)(n4.E, { variant: "text-sm/medium", children: t }),
            (0, p.jsx)(n4.E, { variant: "text-sm/medium", className: Ei.u4, children: n }),
        ],
    });
}
function Eu(e) {
    let { type: t, title: n } = e;
    return (0, p.jsx)("div", {
        className: Ei.Xm,
        children: (0, p.jsx)(iK.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function Ed(e) {
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
        c = (0, Ee.Se)(l),
        { analyticsLocations: g } = (0, eX.Ay)(),
        [m, A] = f.useState(!1),
        E = (0, A3.C)(t.id),
        h = (0, _.bG)([cp.A], () => cp.A.getParentSKU(i.skuId), [i.skuId]),
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
            let { subscription: e } = await (0, ok.QP)(s, g);
            if (null == e) return;
            (0, lT.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, p.jsx)(t, { ...n, storeListing: i, subscription: uv.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, p.jsxs)("div", {
        className: Ei.fw,
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
function Ec(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, p.jsx)(A8, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: Ei.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: Ei.wV,
                        children: [
                            e && (0, p.jsx)(n4.E, { variant: "text-sm/semibold", children: V.intl.string(V.t.mORL67) }),
                            (0, p.jsx)(A8.Toggle, {
                                className: Ei.Bh,
                                text: e ? V.intl.string(V.t.gsbFAw) : V.intl.string(V.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, p.jsx)(AJ.FY, { header: i, icon: (0, Et.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function Eg(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, p.jsx)("div", {
                className: Ei.Ji,
                children: (0, p.jsx)(lu.D, {
                    label: V.intl.string(V.t.azZaZa),
                    children: (0, p.jsx)(oD.y, { type: oD.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, p.jsx)("div", {
                  className: Ei.Ji,
                  children: (0, p.jsxs)(AW.$T, {
                      color: AW.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          V.intl.format(V.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          V.intl.format(V.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: Ei.Ji,
                  children: (0, p.jsx)(lu.D, {
                      label: V.intl.string(V.t.azZaZa),
                      children: (0, p.jsx)(AC.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var Em = (((c = {}).HOME = "HOME"), (c.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), c),
    EA = n(38405);
let EE = (0, _.UT)(cT.A, {
    getQueryId: I.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cT.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && EA.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, c8.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var Eh = n(240248),
    ES = n(237218),
    Ex = n(763064);
function ET(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = f.useState(!1),
        [r, a] = f.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: Ex.x6,
                onClick: () => s((e) => !e),
                children: (0, p.jsxs)(n4.E, {
                    className: Ex.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? V.intl.string(V.t["JQX/Pb"]) : V.intl.string(V.t.Fbrd8J),
                        l
                            ? (0, p.jsx)(A4.t, { color: n1.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, p.jsx)(mb.a, { color: n1.A.colors.TEXT_BRAND, size: "xs" }),
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
                    className: Ex.Qs,
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
var Ep = n(920352);
function Ef(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = f.useMemo(() => (null == n.thumbnail ? null : (0, ES.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = EE(n.skuId),
        u = f.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, aC._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(AQ, {
              className: ic()(Ep.iE, i),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: Ep.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(A$._, { src: a.href, imageClassName: Ep.rW, width: 48, height: 48 }),
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
                  !(0, Eh.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: Ep.h_,
                          children: (0, p.jsx)(ET, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, p.jsx)("div", {
                          className: Ep.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, p.jsx)(AJ.FY, { header: n, icon: (0, Et.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var E_ = n(185438),
    EI = n(683380);
function EN(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, A2.A)(t, 100),
        u = (0, Ee.PJ)(r.flags),
        d = u ? A0.R : A1.UserIcon,
        c = u ? V.intl.string(V.t["46YF2D"]) : V.intl.string(V.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, _.bG)([lv.A], () => (u && null != g ? lv.A.getGuild(g) : void 0), [g, u]),
        A = (0, _.bG)(
            [cp.A],
            () => {
                if (null != a) return cp.A.get(a);
            },
            [a],
        ),
        E = En(n.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: EI.wx,
                children: [
                    null != o && (0, p.jsx)(A$._, { src: o.href, imageClassName: EI.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(C.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: EI.p4,
                                children: [
                                    (0, p.jsxs)(C.D, {
                                        variant: "heading-md/normal",
                                        className: EI.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(n4.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, p.jsxs)("span", {
                                                    className: EI.vP,
                                                    children: [
                                                        (0, p.jsx)(mn.Ay, { guild: m, size: mn.Ay.Sizes.SMOL }),
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
            (0, p.jsx)(A8, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: EI._B,
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
                            (0, p.jsx)(A8.Toggle, {
                                text: e ? V.intl.string(V.t["1Rkq/E"]) : V.intl.string(V.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: EI.x0,
                children: [
                    (0, p.jsx)(Ef, {
                        storeListing: i,
                        className: EI.o3,
                        cta: (0, p.jsxs)("div", {
                            className: EI.cJ,
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
                                  Ef,
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
                            : (0, p.jsx)(EC, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function EC(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, E_.A)({
            analyticsLocation: I.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, p.jsx)(Ef, {
        storeListing: t,
        cta: (0, p.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t["+KwmBt"]), onClick: l }),
    });
}
class Eb extends f.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(AW.$T, {
                  color: AW.Hv.DANGER,
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
function Ey(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = f.useState({ route: Em.HOME }),
        { route: s } = i;
    function r() {
        l({ route: Em.HOME });
    }
    let a = (e) => {
            (l({ route: Em.SWITCH_APP_PLANS, ...e }), n(V.intl.string(V.t.VFqtkP), r));
        },
        [o, u] = f.useState({});
    f.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: El.LOADING })),
                (0, AK._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: El.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: El.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, AZ.E)(),
        c = d !== AZ.mJ.LOADED;
    switch (s) {
        case Em.HOME:
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        Eb,
                        {
                            subscription: e,
                            children: (0, p.jsx)(Es, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? El.LOADING : (o[e.id] ?? El.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case Em.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, p.jsx)(EN, { ...m, navigateToHome: r });
        default:
            (0, io.xb)(s);
    }
}
var Ev = n(707989);
function Ej(e) {
    let { onGoBack: t } = e,
        n = (0, _.yK)(
            [uo.A],
            () =>
                uo.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = f.useState();
    return (
        null == i && (i = (0, p.jsx)(EO, { onBack: t, title: V.intl.string(V.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                i,
                (0, p.jsx)("div", {
                    className: Ev.A,
                    children: (0, p.jsx)(Ey, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, p.jsx)(EO, {
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
function EO(e) {
    let { onBack: t, title: n } = e;
    return (0, p.jsxs)("div", {
        className: Ev.D,
        children: [
            (0, p.jsx)(ld.K, {
                "aria-label": V.intl.string(V.t["13/7kX"]),
                icon: () => (0, p.jsx)(AH.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(C.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var EL = n(366999),
    ER = n(391659);
function ED(e) {
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
        ? ((t = V.intl.string(gM.default["/S02sx"])), (n = V.intl.string(gM.default.OPJNST)))
        : i
          ? ((t = V.intl.string(V.t["hT6i/0"])),
            (n = null != a ? V.intl.format(V.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = V.intl.string(V.t["3G0CTC"])),
            (n = r === tJ.xc.FP_SUB_PAUSED ? V.intl.format(V.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = ic()({ [ER.Hs]: i, [ER.mT]: !i }),
        d = ic()({ [ER.CQ]: i, [ER.ZM]: !i }),
        c = ic()({ [ER.EM]: !i });
    return (0, p.jsxs)("div", {
        className: ER.r6,
        children: [
            (0, p.jsxs)("div", {
                className: ER.Nv,
                children: [
                    (0, p.jsx)(C.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, p.jsx)(n4.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: ER.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(n4.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let EP = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, aC.kX)(t),
        r = s.length > 0,
        a = (0, EL.Ay)(t.endsAt, EL.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: ic()(n, ER.f8),
            children: [
                (0, p.jsx)("div", {
                    className: ER.J_,
                    children: (0, p.jsxs)("div", {
                        className: ER.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: ER.xt,
                                children: (0, p.jsx)(am.t, { size: "md", color: "white", className: ER.T8 }),
                            }),
                            (0, p.jsx)("div", {
                                className: ER.pt,
                                children: (0, p.jsx)(C.D, {
                                    variant: "heading-md/semibold",
                                    children: V.intl.string(V.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(n4.E, {
                                className: ER.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : V.intl.string(V.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(ED, {
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
var EG = n(983048);
function EM(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, _.yK)([cT.A], () => [cT.A.get(i), null != s ? cT.A.get(s.planId) : null]);
    if (null == o || aC.Ay.getInterval(i).intervalType !== tJ.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, aC.z4)(i),
        m = aC.Ay.getDisplayName(i);
    if (a) t = V.intl.string(gM.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === I.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, aC._e)(e, r);
        t = V.intl.formatToPlainString(V.t["5CNRRA"], { date: n ?? 0 });
    } else t = V.intl.formatToPlainString(V.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, p.jsxs)("div", {
        className: ER.Bh,
        children: [
            (0, p.jsx)("div", {
                className: ic()({
                    [ER.bY]: g,
                    [ER.sr]: o.skuId === tJ.pe.TIER_0,
                    [ER.lP]: o.skuId === tJ.pe.TIER_1,
                    [ER.eb]: o.skuId === tJ.pe.TIER_2,
                }),
                children: g
                    ? (0, p.jsx)(gK._, { size: "md", color: "currentColor", className: ER.Kk })
                    : (0, p.jsx)(am.t, { size: "md", color: "currentColor", className: ER.Kk }),
            }),
            (0, p.jsxs)("div", {
                className: ER.pt,
                children: [
                    (0, p.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        children: V.intl.format(V.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, p.jsx)(C.D, {
                            className: ER.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, p.jsx)(n4.E, {
                className: ER.PJ,
                variant: "text-md/semibold",
                children: V.intl.format(V.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let EU = function (e) {
    let { className: t, entitlements: n } = e,
        i = K()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, _.yK)([cr.A], () => cr.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, _.bG)([uo.A], () => uo.A.getPremiumSubscription()),
        r = (0, _.bG)([uo.A], () => null == uo.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tJ.gD.PREMIUM_MONTH_TIER_1),
        o = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)("div", {
                className: ic()(t, ER.xF, ER.J_),
                children: Object.keys(i).map((e) =>
                    (0, p.jsx)(
                        EM,
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
                            className: ER.eT,
                            variant: "text-md/normal",
                            children: V.intl.string(V.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(EG.i, {}),
                    ],
                }),
        ],
    });
};
var EV = n(902782);
function Ek(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        [s] = (0, AN.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tk.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? EV.r : EV.a,
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
function Ew(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === I.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(Ek, { subscription: t, withOverheadSeparator: n });
}
var EF = n(580892),
    EB = n(689255);
let Ez = { [eL.nR]: "role_subscriptions_panel", [eL.PZ]: "application_subscriptions_panel" };
function EX() {
    return (0, p.jsx)(oH.Z, {
        className: EB.wb,
        type: oH.Z.Types.CUSTOM,
        children: (0, p.jsxs)(lN.A, {
            align: lN.A.Align.CENTER,
            children: [
                (0, p.jsx)(i7.A, { game: null, size: i7.M.SMALL, className: EB.pV }),
                (0, p.jsx)("span", { className: EB.O, children: V.intl.string(V.t["jy/hyj"]) }),
            ],
        }),
    });
}
function EY(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mQ._)(e, t));
}
function EH() {
    let e = (0, _.bG)([cr.A], () => cr.A.getForApplication(tJ.tv), [], EY);
    return (
        f.useEffect(() => {
            (0, cw.LM)(tJ.tv);
        }, []),
        (0, p.jsx)(n3.n, {
            label: V.intl.string(V.t["2GKrvn"]),
            description: V.intl.string(V.t.Z5b2Gf),
            children:
                null != e && aC.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(EU, { className: EB.fX, entitlements: e })
                    : (0, p.jsx)(EX, {}),
        })
    );
}
function EW() {
    return (0, p.jsx)("hr", { className: EB.hr });
}
let EK = function () {
        var e;
        let t = (0, _.bG)([uo.A], () => uo.A.getPremiumTypeSubscription()),
            n = (0, mJ.A)({ subscriptionFilter: (e) => EF.Hy.has(e.status) }),
            i = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, _.bG)(
                [ua.A],
                () => (null != t && null != t.paymentSourceId ? ua.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, _.bG)([uo.A], () => uo.A.hasFetchedSubscriptions()),
            a = (0, _.bG)([oB.A], () => oB.A.isBusy),
            o = (0, c9.Y)(),
            u = Ab.A.useField("subsection"),
            d = Ab.A.useField("scrollToGameServers"),
            c = f.useRef(null);
        f.useEffect(() => {
            (0, it._)(null != u ? Ez[u] : S.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let g = (0, _.bG)([uo.A], () => uo.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, _.bG)(
                [uo.A],
                () =>
                    Object.values(uo.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === I.rzx.GUILD)
                        .filter((e) => e.status !== I.Dmq.ENDED).length,
            ),
            A = (0, _.bG)([uo.A], () =>
                Object.values(uo.A.getSubscriptions() ?? {}).some((e) => e.type === I.rzx.GAME_SERVER),
            ),
            { servers: E } = (0, Ao.f)({ enabled: A }),
            h = (0, _.yK)([uo.A], () => (0, m8.eP)(E, (e) => uo.A.getSubscriptionById(e)), [E]),
            x = (0, c7.A)({ forceFetch: !0 }),
            T = (0, gi.ds)(),
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
                Ab.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, h.length]),
        f.useEffect(
            () => (
                (0, c8.zS)(),
                ok.hP(),
                (0, gZ.CD)(),
                ok.$o(),
                function () {
                    Ab.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, p.jsx)(of.A, {})
            : r && o
              ? u === eL.nR
                  ? (0, p.jsx)(AB, { onGoBack: () => Ab.A.setState({ subsection: null }) })
                  : u === eL.PZ
                    ? (0, p.jsx)(Ej, { onGoBack: () => Ab.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: EB.kL,
                          children: (0, p.jsxs)("div", {
                              className: EB.Qs,
                              children: [
                                  l ? (0, p.jsx)(EF.Sb, {}) : null,
                                  null != t
                                      ? (0, p.jsx)(EF.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, p.jsx)(EF.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, p.jsxs)("section", {
                                          children: [
                                              (0, p.jsx)(C.D, {
                                                  variant: "heading-md/bold",
                                                  className: EB.HL,
                                                  children: V.intl.string(V.t.Obre8v),
                                              }),
                                              (0, p.jsx)(n4.E, {
                                                  variant: "text-md/normal",
                                                  className: EB.JU,
                                                  children: V.intl.format(V.t["7Zi06b"], {
                                                      helpCenterLink: eb.A.getArticleURL(
                                                          I.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, p.jsx)(EP, {
                                                  className: EB.fX,
                                                  fractionalPremiumInfo: x,
                                                  activationDate: N,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, p.jsx)(EH, {}),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(EW, {}),
                                              (0, p.jsx)(Ac, {
                                                  count: m,
                                                  onClickManageSubscription: () => Ab.A.setState({ subsection: eL.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(EW, {}),
                                              (0, p.jsx)(AY, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (Ab.A.setState({ subsection: eL.PZ }),
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
                                          children: [(0, p.jsx)(EW, {}), (0, p.jsx)(Aa, { servers: h })],
                                      }),
                                  (0, p.jsx)(EW, {}),
                                  null != t ? (0, p.jsx)(Ew, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: ic()(EB.kL, EB.Lq), children: (0, p.jsx)(oD.y, {}) });
    },
    EZ = (0, h.E2)(S.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        Component: () => (0, p.jsx)(EK, {}),
    }),
    Eq = (0, h.zZ)(S.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        buildLayout: () => [EZ],
    }),
    EQ = (0, h.t_)(S.X.SUBSCRIPTIONS_PANEL, { useTitle: () => V.intl.string(V.t.trSpHX), buildLayout: () => [Eq] }),
    EJ = (0, h.i4)(S.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.trSpHX),
        icon: mZ.L,
        usePersistentBadge: function () {
            let e = (0, mq.l)();
            return f.useMemo(
                () => ({
                    badgeType: T.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, p.jsx)(i$.E, { size: "xs", color: n1.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [EQ],
    }),
    E$ = (0, h.WI)(S.X.BILLING_SECTION, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [gW, mK, EJ, c1, dv],
    });
var E0 = n(540999),
    E1 = n(306471),
    E2 = n(964355),
    E3 = n(172272);
let E4 = (0, h.zD)(S.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isAxeEnabled),
        setValue: (e) => (0, rm.x)({ axeEnabled: e }),
    }),
    E5 = (0, h.zD)(S.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rm.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var E6 = n(276086),
    E8 = n(354328);
let E7 = (0, h.zD)(S.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, E8.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, E6.L)("highlight_mana_components", e);
        },
    }),
    E9 = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, E8.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, E6.L)("highlight_mana_text_overrides", e);
        },
    }),
    he = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, E8.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, E6.L)("highlight_mana_text", e);
        },
    }),
    ht = (0, h.zD)(S.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, E8.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, E6.L)("highlight_void_toggleables", e);
        },
    }),
    hn = (0, h.sN)(S.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: E3.YR,
        markers: Array.from({ length: E3.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => E3.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            E3.Or.getState().setHorizontalSpacing(e);
        },
    }),
    hi = (0, h.zD)(S.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rm.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hl = (0, h.sN)(S.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: E3.YR,
        markers: Array.from({ length: E3.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => E3.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            E3.Or.getState().setVerticalSpacing(e);
        },
    }),
    hs = (0, h.zZ)(S.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [E5, hi, hn, hl, E7, he, E9, ht, E4],
    });
var hr = n(246605),
    ha = n(274184);
function ho(e) {
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
let hu = (0, h.E2)(S.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, _.bG)([ha.Ay], () => ha.Ay.getActionTriggeredSurveyOverride());
            return (0, p.jsx)(ho, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hr.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    hd = (0, h.zD)(S.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => U.HZ.useSetting(),
        setValue: (e) => {
            U.HZ.updateSetting(e);
        },
    });
var hc = n(396478),
    hg = n(173936),
    hm = n(103557),
    hA = n(414079),
    hE = n(148810),
    hh = n(380610),
    hS = n(986238),
    hx = n(428524),
    hT = n(252149),
    hp = n(221851);
let hf = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    h_ = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function hI(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class hN extends f.Component {
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
            className: ic()(hx.oS, hp.SX, hT.N, hx.nM),
            children: [
                (0, p.jsx)(hA.A, {
                    className: ic()(hx.lL, { [hx.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, p.jsxs)(lN.A, {
                    className: hp.QB,
                    children: [
                        (0, p.jsx)(lN.A.Child, {
                            basis: "50%",
                            children: (0, p.jsx)(lo.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: h_,
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
                                className: hx.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, p.jsxs)(n4.E, {
                            variant: "text-sm/normal",
                            className: hx.AS,
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
class hC extends f.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, hh.bD)();
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
        return K().without(hf, ...t);
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
        let t = await (0, hE.Zk)(e);
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
        (0, lT.openModal)((t) => (0, p.jsx)(hb, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, p.jsx)(hc.pp, {
            theme: nF.A.theme,
            className: ic()(hp.eT, hp.SX),
            children: (0, p.jsx)(hc.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : K().map(e, (e, i) =>
                  (0, p.jsx)(
                      hN,
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
                      icon: hg.LinkIcon,
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
                    disabled: hI(t ?? {}),
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
            ? (0, p.jsx)(oD.y, { className: hp.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                hI(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
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
class hb extends f.Component {
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
            t = await (0, hE.SB)(e);
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
        return hI(this.props.buildOverrides ?? {});
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
                (0, p.jsx)(lo.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hS.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(lo.l, {
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
                    : (0, p.jsx)(hm.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(hm.f, {
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
            actionBarInput: (0, p.jsx)(cO.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let hy = (0, h.E2)(S.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: hC });
var hv = n(256311),
    hj = n(883600);
let hO = (0, h.E2)(S.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, _.bG)([hj.A], () => hj.A.overrideId());
        async function t(e) {
            let t = hj.A.getChangelog(e, "en-US");
            return null != t ? t : ((await hv.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, p.jsx)(ho, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hv.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hL = n(506774);
let hR = new Date("2018-01-01"),
    hD = (0, h.Tf)(S.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => U.pK.useSetting() === oX.default.fromTimestamp(hR.getTime()),
        onClick: () => (hL.w.set("lastChangeLogDate", hR), U.pK.updateSetting(oX.default.fromTimestamp(hR.getTime()))),
    }),
    hP = (0, h.zD)(S.X.DISABLE_APP_COLLECTIONS_CACHE, {
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
    hG = (0, h.zD)(S.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isForcedCanary),
        setValue: (e) => {
            (0, rm.x)({ canary: e });
        },
    }),
    hM = (0, h.zD)(S.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.sourceMapsEnabled),
        setValue: (e) => (0, rm.x)({ sourceMapsEnabled: e }),
    }),
    hU = (0, h.zD)(S.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rm.x)({ onlyShowPreviewAppCollections: e }),
    });
var hV = n(10094),
    hk = n(683760);
let hw = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tJ.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tJ.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tJ.PremiumTypes.TIER_2 },
    ],
    hF = (0, h.Hn)(S.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hw,
        clearable: !0,
        useValue: () =>
            (0, _.bG)([hk.A], () => {
                let e = hk.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hV.O)(null, void 0)
                : null === e
                  ? (0, hV.O)(void 0, void 0)
                  : (0, hV.O)(0 === e ? null : e, void 0);
        },
    });
var hB = n(374042);
let hz = (0, h.E2)(S.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, _.bG)([ha.Ay], () => ha.Ay.getSurveyOverride());
            return (0, p.jsx)(ho, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hr.xr(e),
                fetchOverride: (e) => (0, hB.B)(e, !0) ?? null,
            });
        },
    }),
    hX = (0, h.zZ)(S.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hF, hz, hu, hO, hD, hG, hd, hU, hP, hM, hy],
        useInlineNotice: () => ({
            type: T.lT.INLINE_NOTICE,
            noticeType: "info",
            role: "none",
            text: V.intl.format(V.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hY = (0, h.zD)(S.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rm.x)({ logAnalyticsEvents: e }),
    }),
    hH = (0, h.zD)(S.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rm.x)({ logGatewayEvents: e }),
    }),
    hW = (0, h.zD)(S.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.preventPopoutClose),
        setValue: (e) => (0, rm.x)({ preventPopoutClose: e }),
    }),
    hK = (0, h.zD)(S.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.logKeyboardMismatches),
        setValue: (e) => (0, rm.x)({ logKeyboardMismatches: e }),
    }),
    hZ = (0, h.zD)(S.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rm.x)({ logOverlayEvents: e }),
    }),
    hq = (0, h.zD)(S.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingQuestEvents),
        setValue: (e) => (0, rm.x)({ logQuestEvents: e }),
    }),
    hQ = (0, h.zD)(S.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isTracingRequests),
        setValue: (e) => (0, rm.x)({ trace: e }),
    }),
    hJ = (0, h.zZ)(S.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hH, hZ, hQ, hY, hK, hW, hq] }),
    h$ = (0, h.t_)(S.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hX, hJ, hs],
    }),
    h0 = (0, h.i4)(S.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: E1.V,
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
                } = (0, _.cf)([rA.default, E0.A, sx.default], () => ({
                    layoutDebuggingEnabled: rA.default.layoutDebuggingEnabled,
                    isDeveloper: E0.A.isDeveloper,
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
                { horizontalSpacing: g, verticalSpacing: m } = (0, E3.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = E3.Or.getState(),
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
                                                          (0, p.jsx)(E2.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: E3.YR,
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
                                                          (0, p.jsx)(E2.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: E3.YR,
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
        buildLayout: () => [h$],
    });
var h1 = n(127062),
    h2 = n(25044),
    h3 = n(80703),
    h4 = n(123292),
    h5 = n(683438),
    h6 = n(890856),
    h8 = n(100392),
    h7 = n(102609),
    h9 = n(271478),
    Se = n(386976),
    St = n(257433),
    Sn = n(32523),
    Si = n(96919),
    Sl = n(688151),
    Ss = n(863763);
function Sr(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = f.useState(l),
        [a, o] = f.useState(!1),
        u = f.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, _.bG)([cS.default], () => cS.default.getId()),
        c = (0, _.bG)([cS.default], () => {
            let e = cS.default.getInstallationForTracking();
            return null == e ? null : (0, h3.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, St.iN)(t, g),
        A = (0, St.Fm)(t, g),
        E = (0, _.yK)([rf.A], () =>
            K()
                .sortBy(rf.A.getRecentExposures(Sl.Vh.USER, n), (e) => {
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
                (0, uz.C)((0, h8.yA)(n), () => {
                    ((0, sg.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        S = (0, p.jsx)(h6.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(n4.E, {
                variant: "text-md/medium",
                className: Ss.DD,
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
                                        (0, p.jsx)(n5.D, {
                                            onClick: h,
                                            children: (0, p.jsx)(hg.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, p.jsx)(n4.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: Ss.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, p.jsx)("div", { className: Ss.Os, children: S });
    let x = "";
    return (
        (x =
            t.system === h7.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? Sl.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: Ss.Os,
            children: [
                S,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(h9.g, {
                        label: t.system === h7.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: x,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: Ss.h_,
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
                                  className: Ss.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "code",
                                  className: Ss.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "text-lg/medium",
                                  className: Ss.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "code",
                                  className: Ss.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "text-lg/medium",
                                  className: Ss.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "code",
                                  className: Ss.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: Ss.id,
                          children: (0, p.jsx)(h4.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(ls.c, { className: Ss.yF }),
            ],
        })
    );
}
function Sa(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = f.useState(null != i),
        [r, a] = f.useState(!1),
        o = f.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, _.bG)([rf.A], () => rf.A.getLoadedGuildExperiment(n)),
        d = (0, _.bG)([rf.A, lv.A, iq.A], () => {
            if (t.system === h7.l5.LEGACY) return null == rf.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lv.A.getGuildsArray().some((t) => null != iq.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, _.yK)([rf.A], () =>
            K()
                .sortBy(rf.A.getRecentExposures(Sl.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, _.yK)([cS.default, lv.A, rf.A, iq.A], () => {
            let e = t.system === h7.l5.LEGACY,
                i = t.name,
                l = cS.default.getId(),
                s = K().sortBy(lv.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (rf.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? Sl.RE.NOT_ELIGIBLE)
                    : (iq.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? Sl.RE.NOT_ELIGIBLE);
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
        A = t.system !== h7.l5.LEGACY,
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
        I = (0, _.bG)([iq.A, cS.default], () => {
            if (!A) return;
            let e = cS.default.getId();
            return iq.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != I && (I.isOverride || I.useAsEligibility),
        C = (0, p.jsx)(n5.D, {
            onClick: o,
            children: (0, p.jsxs)(n4.E, {
                variant: "text-md/medium",
                className: Ss.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(n4.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: Ss.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, p.jsxs)("div", {
              className: Ss.Os,
              children: [
                  C,
                  (0, p.jsx)(h9.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, p.jsx)("div", {
                          className: Ss.h_,
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
                      className: Ss.h_,
                      children: d
                          ? (0, p.jsx)(n4.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === h7.l5.LEGACY
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
                                  className: Ss.id,
                                  children: ["Server Descriptor", null != x ? ` (${x})` : ""],
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "code",
                                  className: Ss.AS,
                                  children: null == T ? "None" : JSON.stringify(T, void 0, 2),
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "text-lg/medium",
                                  className: Ss.id,
                                  children: "Client Eligibility",
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, p.jsx)(n4.E, {
                                  variant: "code",
                                  className: Ss.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(n4.E, {
                                    variant: "text-lg/medium",
                                    className: Ss.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(n4.E, { variant: "code", className: Ss.AS, children: g }),
                                t.system === h7.l5.LEGACY &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(n4.E, {
                                                variant: "text-lg/medium",
                                                className: Ss.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, p.jsx)(n4.E, {
                                                variant: "code",
                                                className: Ss.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(n4.E, {
                                    variant: "text-lg/medium",
                                    className: Ss.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(n4.E, {
                                    variant: "code",
                                    className: Ss.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(n4.E, {
                                    variant: "text-lg/medium",
                                    className: Ss.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(n4.E, {
                                    variant: "code",
                                    className: Ss.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: Ss.id,
                            children: (0, p.jsx)(h4.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(ls.c, { className: Ss.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: Ss.Os, children: C });
}
let So = (0, h.E2)(S.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Se.op)(),
                { experiments: n, overridesInfo: i } = (0, Sn.hI)(),
                l = f.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = f.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, _.bG)([cS.default], () => {
                    let e = cS.default.getInstallationForTracking();
                    return null == e ? null : (0, h3.v)(e);
                }),
                [a, o] = f.useState(""),
                u = (0, Si.oC)((0, Si.R3)((0, Si.Fm)(l), s), a);
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
                                uz.p5 &&
                                    (0, p.jsx)(h4.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uz.C)(r, () => {
                                                (0, sg.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, p.jsx)(h5.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Sa : Sr;
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
                              className: Ss.p$,
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
    Su = (0, h.zZ)(S.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [So] }),
    Sd = (0, h.t_)(S.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Su] }),
    Sc = (0, h.i4)(S.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: h1.c,
        useMenu: h2.A,
        buildLayout: () => [Sd],
    }),
    Sg = (0, h.WI)(S.X.DEVELOPER_SECTION, {
        useTitle: () => V.intl.string(V.t["+gHUHA"]),
        usePredicate: () => E0.A.isDeveloper,
        buildLayout: () => [Sc, h0],
    });
var Sm = n(682348),
    SA = n(871633),
    SE = n(751075),
    Sh = n(843402);
let SS = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function Sx() {
    let e = (0, _.yK)([i5.Ay], () => i5.Ay.getGamesSeen(!1)),
        t = (0, _.bG)([i5.Ay], () => SS(...i5.Ay.getOverrides()));
    f.useEffect(() => {
        if (e8.isPlatformEmbedded) return ((0, Sh.a2)(), Sh.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = f.useMemo(
        () =>
            e.reduce((e, t) => ((0, SA.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function ST(e) {
    let { gameHistory: t } = Sx();
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
function Sp(e) {
    let { namedGames: t, totalCount: n } = ST(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function Sf() {
    let { namedGames: e } = ST(2),
        [t, n] = f.useMemo(() => e.map((e) => e.id), [e]);
    f.useEffect(() => {
        A7.Ay.fetchApplications([t, n].filter(io.Vq));
    }, [t, n]);
    let [i, l] = (0, _.yK)([i2.A], () => [t, n].map(i2.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, p.jsx)(i7.A, { game: i, size: i7.M.MEDIUM_LARGE }), shape: SE.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, p.jsx)(i7.A, { game: l, size: i7.M.MEDIUM }), shape: SE.e0.ROUNDED } : null,
          };
}
let S_ = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = Sp(2);
            return V.intl.format(V.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = Sf();
            return { type: T.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, _.bG)([i5.Ay], () => i5.Ay.getGamesSeen(!1).some((e) => !(0, SA.n1)(e))) && (0, nh.xl)(),
    }),
    SI = (0, h.gN)(S.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [S_] });
var SN = n(533440),
    SC = n(406535),
    Sb = n(450216);
let Sy = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => V.intl.string(Sb.default.A0FVCV),
        useSubtitle: () => V.intl.string(Sb.default.vHX6RG),
        useValue: U.hV.useSetting,
        setValue: function (e) {
            (U.hV.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SC.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    Sv = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => V.intl.string(Sb.default["9l5u6A"]),
        useSubtitle: () => V.intl.string(Sb.default.QcmgBF),
        useValue: U.pR.useSetting,
        setValue: function (e) {
            (U.pR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SC.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    Sj = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => V.intl.string(V.t.WmsPis),
        useSearchTerms: () => [V.intl.string(V.t["8ka8li"])],
        buildLayout: () => [SN._, Sy, Sv, SI],
    }),
    SO = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.J0SFL2),
        destinationKey: S.X.DATA_AND_PRIVACY_PANEL,
    }),
    SL = (0, h.gN)(S.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [SO] });
var SR = n(365258);
let SD = (0, h.Qx)(S.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => V.intl.string(Sb.default["/LHVbt"]),
    useSubtitle: () => V.intl.string(V.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eJ.Qd.ACTIVITY_STATUS_OFF, name: V.intl.string(Sb.default.m3oL7Q) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: V.intl.string(Sb.default["5+lnTA"]) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON, name: V.intl.string(Sb.default["egr+VZ"]) },
        ];
    },
    useValue: U._Z.useSetting,
    setValue: function (e) {
        let t = U._Z.getSetting();
        U._Z.updateSetting(e);
        let i = (0, SR.g8)(t, e);
        if (null == i) return;
        let l = (0, SR.Xc)(e);
        (0, lT.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("26411"), n.e("562041"), n.e("341996")]).then(n.bind(n, 32167));
            return (t) =>
                (0, p.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: l });
        });
    },
});
var SP = n(498642),
    SG = n(573435),
    SM = n(260509),
    SU = n(771810);
function SV(e) {
    let { guild: t, size: n } = e,
        i = (0, SM.Iv)(t, n, !1, !0),
        l = (0, SM.Rb)(t);
    return null != i
        ? (0, p.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, p.jsx)("div", {
              className: SU.F,
              children: (0, p.jsx)(n4.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
              }),
          });
}
function Sk(e) {
    let { guild: t, size: n } = e;
    return (0, p.jsx)(SG.Ay, {
        className: SU.z,
        mask: SG.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, p.jsx)(SV, { guild: t, size: n }),
    });
}
var Sw =
    (((g = {}).SERVER_ORDER = "server-order"),
    (g.RECENTLY_JOINED = "recently-joined"),
    (g.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (g.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    g);
let SF = {
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
var SB = n(618118);
function Sz(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i, rowRef: l } = e,
        s = (0, _.bG)([SP.A], () => SP.A.getMemberCount(t.id));
    return (0, p.jsxs)(q.B, {
        as: "li",
        ref: l,
        tabIndex: null != l ? -1 : void 0,
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, p.jsx)("div", { className: SB.FO, children: (0, p.jsx)(Sk, { guild: t, size: 48 }) }),
            (0, p.jsx)("div", {
                className: SB.QH,
                children: (0, p.jsx)(t5.d, {
                    label: t.name,
                    description: V.intl.format(Sb.default.cI3aQA, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
function SX(e) {
    let { overflowGuilds: t } = e,
        n = (0, _.bG)([uu.default], () => uu.default.locale),
        i = t.length,
        l = i - 3,
        s = (0, f.useMemo)(() => {
            let e = t.slice(0, 3).map((e) => e.name);
            return (
                l > 0 && e.push(V.intl.formatToPlainString(Sb.default.bAzBIf, { numServers: l })),
                new Intl.ListFormat(n).format(e)
            );
        }, [t, l, n]);
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(SE.qP, {
                icons: {
                    frontIcon: { icon: (0, p.jsx)(SV, { guild: t[0], size: SE.CD }), shape: SE.e0.SQUIRCLE },
                    backIcon:
                        null != t[1]
                            ? { icon: (0, p.jsx)(SV, { guild: t[1], size: SE.CD }), shape: SE.e0.SQUIRCLE }
                            : null,
                },
            }),
            (0, p.jsxs)("div", {
                className: SB.yW,
                children: [
                    (0, p.jsx)(n4.E, {
                        variant: "text-md/semibold",
                        className: SB.Xc,
                        children: V.intl.format(Sb.default.MEMaup, { count: i }),
                    }),
                    (0, p.jsx)(n4.E, { variant: "text-sm/normal", color: "text-muted", className: SB.Xc, children: s }),
                ],
            }),
        ],
    });
}
function SY() {
    return (0, p.jsx)("div", {
        className: SB.yW,
        children: (0, p.jsx)(n4.E, {
            variant: "text-md/semibold",
            className: SB.Xc,
            children: V.intl.string(Sb.default.BRjBVV),
        }),
    });
}
function SH(e) {
    let { isExpanded: t, overflowGuilds: n, onToggle: i } = e,
        l = t ? V.intl.string(Sb.default.BRjBVV) : V.intl.formatToPlainString(Sb.default.MEMaup, { count: n.length });
    return (0, p.jsxs)(q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            t ? (0, p.jsx)(SY, {}) : (0, p.jsx)(SX, { overflowGuilds: n }),
            (0, p.jsx)(ld.K, {
                variant: "secondary",
                size: "md",
                icon: t ? A4.t : mb.a,
                "aria-label": l,
                "aria-expanded": t,
                onClick: i,
            }),
        ],
    });
}
function SW(e) {
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
        className: SB.X1,
        id: i,
        "aria-label": V.intl.string(V.t["7hB4kg"]),
        children: [
            0 === t.length &&
                (0, p.jsx)("div", {
                    className: SB.pb,
                    children: (0, p.jsx)(n4.E, {
                        className: SB.R$,
                        variant: "text-lg/medium",
                        children: V.intl.string(V.t["Xe+fJM"]),
                    }),
                }),
            o.map((e, t) =>
                (0, p.jsx)(
                    Sz,
                    {
                        guild: e,
                        rowRef: r && a && 10 === t ? c : void 0,
                        isActivityRestricted: l(e.id),
                        onToggleActivityRestrictedGuild: s,
                    },
                    e.id,
                ),
            ),
            a && (0, p.jsx)(SH, { isExpanded: r, overflowGuilds: u, onToggle: d }),
        ],
    });
}
let SK = function (e) {
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
                l = (0, _.bG)([g0.Ay], () => g0.Ay.getFlattenedGuildIds()),
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
                [g, m] = (0, f.useState)(() => SF[n](r, a)),
                A = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(SF[e](r, a)), i(e));
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
                { id: Sw.SERVER_ORDER, label: V.intl.string(V.t.STMPJ2), value: Sw.SERVER_ORDER },
                { id: Sw.RECENTLY_JOINED, label: V.intl.string(V.t.CbaapP), value: Sw.RECENTLY_JOINED },
                { id: Sw.ACTIVITY_SHARING_ON, label: V.intl.string(Sb.default.ZI51JZ), value: Sw.ACTIVITY_SHARING_ON },
                {
                    id: Sw.ACTIVITY_SHARING_OFF,
                    label: V.intl.string(Sb.default["+kxafn"]),
                    value: Sw.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === s)?.label ?? "";
    return (0, p.jsxs)("div", {
        className: SB.iE,
        children: [
            t,
            (0, p.jsxs)("div", {
                className: SB.N1,
                children: [
                    (0, p.jsx)(h5.I, {
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
                            className: SB.gO,
                            children: [
                                (0, p.jsx)(af.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, p.jsx)(g7.W, {
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
                                            className: SB.Ku,
                                            children: [
                                                (0, p.jsx)(n4.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, p.jsx)(mb.a, { size: "xs", color: n1.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(h4.Q, {
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
                children: V.intl.format(Sb.default.EvzDff, { count: n.length }),
            }),
            (0, p.jsx)(SW, {
                guilds: n,
                searchQuery: i,
                listId: m,
                isActivityRestrictedForGuild: d,
                onToggleActivityRestrictedGuild: u,
            }),
        ],
    });
};
var SZ = n(68322);
let Sq = (0, h.E2)(S.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [V.intl.string(Sb.default["/LHVbt"])],
        Component: function () {
            let e = U.tz.useSetting()
                ? null
                : (0, p.jsx)("div", {
                      className: SZ.l,
                      children: (0, p.jsx)(iK.w, {
                          type: "warning",
                          message: V.intl.string(Sb.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, p.jsx)(SK, { notice: e });
        },
    }),
    SQ = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bwqjL9),
        buildLayout: () => [SD, Sq, SL],
    }),
    SJ = (0, h.zD)(S.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => V.intl.string(Sb.default.khuuzv),
        useSubtitle: () => V.intl.string(Sb.default["8EWsJ8"]),
        useValue: () => U.e.useSetting(),
        setValue: (e) => U.e.updateSetting(e),
    }),
    S$ = (0, h.E2)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    S0 = (0, h.zD)(S.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => V.intl.string(Sb.default.Uz5Ipi),
        useSubtitle: () => V.intl.string(Sb.default.CZI2Gb),
        useValue: () => U.UM.useSetting(),
        setValue: (e) => U.UM.updateSetting(e),
    }),
    S1 = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => V.intl.string(Sb.default["89YBr5"]),
        useSubtitle: () => V.intl.string(V.t.uGDpgH),
        buildLayout: () => [SJ, S0, S$],
        useSearchTerms: () => [V.intl.string(V.t.VOszPA)],
    }),
    S2 = (0, h.t_)(S.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        buildLayout: () => [Sj, SQ, S1],
    }),
    S3 = (0, h.i4)(S.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        icon: Sm._,
        buildLayout: () => [S2],
    });
var S4 = n(712440),
    S5 = n(370997);
let S6 = (0, h.E2)(S.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: S5.Ay,
    useSearchTerms: () => [V.intl.string(V.t["f6kk+r"])],
});
var S8 = n(478016),
    S7 = n(77468),
    S9 = n(289498),
    xe = n(573648),
    xt = n(874490),
    xn = n(370480),
    xi = n(968309);
let xl = new Set([I.fg2.XBOX, I.fg2.PLAYSTATION, I.fg2.PLAYSTATION_STAGING, I.fg2.CRUNCHYROLL]);
var xs = n(169869),
    xr = n(814925),
    xa = n(733110),
    xo = n(479785),
    xu = n(757036),
    xd = n(555837),
    xc = n(43990),
    xg = n(241524),
    xm = n(51965),
    xA = n(377368),
    xE = n(631368),
    xh = n(212739),
    xS = n(30370),
    xx = n(833159),
    xT = n(385740),
    xp = n(660594);
function xf() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, xE.$)()),
            (t = (0, xh.O)()),
            (l = null != (i = (0, _.bG)([xS.A], () => xS.A.getAccount(null, I.fg2.XBOX))) && !i.revoked),
            e === xE.C.NONE || t
                ? { variant: xE.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === xE.C.NO_ACCESS && !l }),
        { analyticsLocations: a } = (0, eX.Ay)(tk.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, xA.yW)(a),
        u = (0, xg.A)("(max-width: 485px)");
    if (s === xE.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (s) {
        case xE.C.HAS_ACCESS:
        case xE.C.BLOCK_CLAIM:
            ((c = V.intl.string(xT.default["7PdsMK"])),
                (g = (0, p.jsx)(xm.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: V.intl.string(xT.default.CubeLC),
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
        case xE.C.NO_ACCESS:
            ((c = V.intl.string(xT.default.NwkRTZ)),
                (g = (0, p.jsx)(tX.A, {
                    defaultTextOverride: V.intl.string(xT.default["0vY+ie"]),
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
                className: xp.bV,
                children: [
                    (0, p.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t.NG1e6l),
                    }),
                    (0, p.jsx)(am.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, p.jsx)(xc.N, {
                theme: I.NJ8.DARK,
                children: (e) =>
                    (0, p.jsx)("div", {
                        className: e,
                        children: (0, p.jsxs)("div", {
                            className: xp.Nr,
                            children: [
                                (0, p.jsxs)("div", {
                                    className: xp.Tp,
                                    children: [
                                        (0, p.jsx)("div", {
                                            className: xp.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, p.jsx)("div", { className: xp.$h }),
                                        (0, p.jsx)("div", { className: xp.Rv }),
                                        (0, p.jsx)("div", { className: xp.Lw }),
                                    ],
                                }),
                                (0, p.jsxs)("div", {
                                    className: xp.Mn,
                                    children: [
                                        (0, p.jsxs)("div", {
                                            className: xp.mY,
                                            children: [
                                                (0, p.jsx)("img", {
                                                    className: xp.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, p.jsx)(n4.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: xp.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, p.jsx)("div", { className: xp.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)("div", { className: xp.yF }),
                                            (0, p.jsxs)("div", {
                                                className: xp.sQ,
                                                children: [
                                                    (0, p.jsx)(uV.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n1.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, p.jsx)(n4.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: V.intl.format(xx.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(xA.Hx.CONNECT),
                                                                    (0, xi.A)({
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
var x_ = n(201718),
    xI = n(321078),
    xN = n(672130),
    xC = n(379848),
    xb = n(688901);
function xy(e) {
    let { markAsDismissed: t } = e;
    return (
        f.useEffect(() => t(Ae.i.AUTO_DISMISS), [t]),
        (0, p.jsx)("div", { className: xb.Ad, children: (0, p.jsx)(AT.E, { type: "new", variant: "primary" }) })
    );
}
function xv(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, p.jsxs)("div", {
        className: xb.kL,
        children: [
            i,
            (0, p.jsxs)("div", {
                className: xb.FS,
                children: [
                    (0, p.jsxs)("div", {
                        className: xb.TK,
                        children: [
                            (0, p.jsx)(xC.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, p.jsx)(xy, { markAsDismissed: n }) : null;
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
function xj() {
    let e = eb.A.getArticleURL(I.MVz.PS_CONNECTION);
    return (0, p.jsx)(xv, {
        title: V.intl.string(V.t.v20wwm),
        body: V.intl.format(V.t.lTZBit, { help_article: e }),
        img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eE.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, xi.A)({ platformType: I.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let xO = "/assets/9df988a227916145.png";
function xL() {
    return (0, p.jsx)(xv, {
        title: V.intl.string(xx.default["9cLtDI"]),
        body: V.intl.format(xx.default["D+kUbg"], { learnMoreLink: eb.A.getArticleURL(I.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, p.jsx)("img", { src: xO, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, xi.A)({ platformType: I.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function xR() {
    let e = eb.A.getArticleURL(I.MVz.XBOX_CONNECTION);
    return (0, p.jsx)(xv, {
        title: V.intl.string(V.t["2okkZV"]),
        body: V.intl.format(V.t.OnERSS, { help_article: e }),
        img: (0, p.jsx)("img", { src: xO, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, xi.A)({ platformType: I.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var xD = n(783419),
    xP = n(534952),
    xG = n(176219),
    xM = n(247259);
function xU(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, _.cf)(
            [xS.A],
            () => ({
                isJoining: xS.A.isJoining(n.id),
                joinErrorMessage:
                    "" === xS.A.joinErrorMessage(n.id) ? V.intl.string(V.t.j2d6Km) : xS.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== xS.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, _.bG)([lv.A], () => lv.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, p.jsx)(j.$, {
                size: "sm",
                onClick: function () {
                    S7.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? V.intl.string(V.t.RXvQQu) : V.intl.string(V.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: xM.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: xM.XX,
                    children: [
                        (0, p.jsx)(mn.Ay, { size: mn.Ay.Sizes.SMALL, guild: n.guild, className: xM.$f }),
                        (0, p.jsxs)("div", {
                            className: xM.Vn,
                            children: [
                                (0, p.jsx)(n4.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, p.jsx)(nr.Anchor, {
                                    href: xe.A.get(n.type)?.getPlatformUserUrl?.(n.account),
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
                        className: xM.R,
                        children: l,
                    }),
            ],
        })
    );
}
function xV(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s = ((t = l.id), (n = (0, xd.G)()), (i = (0, xu.L)(tJ.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return l.type === I.fg2.XBOX && s
        ? (0, p.jsx)(xL, {})
        : l.twoWayLink
          ? null
          : l.type === I.fg2.XBOX
            ? (0, p.jsx)(xR, {})
            : l.type === I.fg2.PLAYSTATION
              ? (0, p.jsx)(xj, {})
              : null;
}
function xk(e) {
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
        R = (0, xt.ML)(u.type),
        D = xe.A.get(R);
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
            (null != e && (E(e), S7.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (S(t), S7.A.setMetadataVisibility(u.type, u.id, t), b(null)));
        }, [u]),
        (0, p.jsxs)("div", {
            className: xM.FI,
            children: [
                ((t = xe.A.get(u.type)),
                (n = xe.A.get(R)),
                (i = "1" === (u.metadata ?? {})[xD.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === I.fg2.TWITTER &&
                    i &&
                    (l = (0, p.jsx)(lg.m, {
                        text: V.intl.string(V.t.Jebrww),
                        children: (0, p.jsx)(xr.A, {
                            color: n1.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, p.jsx)(S8.U, { size: "xs", color: n1.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, p.jsxs)("div", {
                    className: xM.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: n.name,
                            className: xM.gj,
                            src: (0, c6.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: xM.$p,
                                    children: [
                                        (0, p.jsx)(n4.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: xM.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, p.jsx)("div", { className: xM.cG, children: l }),
                                    ],
                                }),
                                (0, p.jsx)(n4.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: xM.Au,
                                    children:
                                        null != n.migrationData
                                            ? V.intl.format(xG.default.Glhokn, { platformName: n.name })
                                            : n.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(n5.D, {
                            className: xM.uH,
                            onClick: function () {
                                let e = xe.A.get(u.type);
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
                                            xl.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, p.jsx)(l9.A, {
                                                children: V.intl.format(V.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": V.intl.string(V.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(dl.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, p.jsx)(xV, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, xn.An)(t[xD.pK.CREATED_AT], c);
                    switch (e.type) {
                        case I.fg2.REDDIT:
                            n = (0, xs.xE)(t, xM.Nz);
                            break;
                        case I.fg2.STEAM:
                            n = (0, xs.dy)(t, xM.Nz);
                            break;
                        case I.fg2.LETTERBOXD:
                            n = (0, xs.uq)(t, xM.Nz);
                            break;
                        case I.fg2.BLUESKY:
                        case I.fg2.TWITTER:
                        case I.fg2.MASTODON:
                            n = (0, xs.ED)(t, xM.Nz);
                            break;
                        case I.fg2.EBAY:
                            n = (0, xs.ub)(t, xM.Nz);
                            break;
                        case I.fg2.PAYPAL:
                            n = (0, xs.gZ)(t, xM.Nz);
                            break;
                        case I.fg2.TIKTOK:
                            n = (0, xs.HU)(t, xM.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, p.jsx)(
                                n4.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: xM.M4,
                                    children: V.intl.format(V.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = V.intl.string(V.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== xe.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, p.jsx)(
                                    "div",
                                    {
                                        className: xM.Z3,
                                        children: (0, p.jsx)(AT.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, p.jsx)(
                                    n4.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: xM.vt,
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
                                    className: xM.jy,
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
                                                      S7.A.refresh(e.type, e.id).finally(() => {
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
                        (0, p.jsx)("div", { className: xM.tJ, children: n })
                    );
                })(u),
                (I.txh.has(u.type) &&
                    (s = (0, p.jsx)(t5.d, {
                        label: V.intl.string(V.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), S7.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                I.ewM.has(u.type) &&
                    (r = (0, p.jsx)(t5.d, {
                        label: V.intl.format(V.t["6u6J0q"], { platform: D.name }),
                        checked: x,
                        onChange: function (e) {
                            (T(e), S7.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                xe.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(t5.d, {
                        label: V.intl.string(V.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (b(n), (0, xi.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (S(n), S7.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, p.jsxs)("div", {
                    className: xM.HZ,
                    children: [
                        (0, p.jsx)(t5.d, {
                            label: V.intl.string(V.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, xi.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), S7.A.setVisibility(u.type, u.id, n));
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
                                  (0, xi.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(lu.D, {
                            label: V.intl.string(V.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(xU, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, p.jsx)(xo.A, { partner: u.type }),
            ],
        })
    );
}
function xw(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: xM.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, p.jsxs)("div", {
                          className: xM.Il,
                          children: [
                              (0, p.jsx)("img", { alt: n.name, className: ic()(xM.gj, xM.sN), src: i }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: xM.$p,
                                          children: (0, p.jsx)(n4.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: xM.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(n4.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: xM.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(n5.D, {
                                  className: xM.uH,
                                  onClick: () =>
                                      (0, S5.d1)(n, t.scopes, () => {
                                          S4.A.delete(t.id);
                                      }),
                                  "aria-label": V.intl.string(V.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(dl.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, p.jsx)("div", {
                      className: xM.HZ,
                      children: (0, p.jsx)(t5.d, {
                          label: V.intl.string(V.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              x_.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function xF() {
    let e = (0, xt.gn)(),
        t = (0, i3.A)((0, xP.getMigratedApplicationIdentityConnectionsScreenApplications)());
    return (0, p.jsxs)("div", {
        className: xM.lA,
        children: [
            t.map((e) => null != e && (0, p.jsx)(xN.A, { application: e, innerClassName: xM.U$ }, e.id)),
            e.map((e) =>
                (0, p.jsx)(
                    S9.A,
                    { type: e.type, innerClassName: xM.U$, location: tk.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function xB(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = f.useMemo(() => i.filter((e) => xe.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, p.jsx)(oD.y, { type: oD.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, p.jsx)(hc.pp, {
                    theme: r,
                    className: xM.p$,
                    children: (0, p.jsx)(hc.SG, {
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
                                xw,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, p.jsx)(
                                xk,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            S7.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, p.jsx)("div", { className: xM.V, children: t })
    );
}
let xz = (0, h.E2)(S.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, p.jsx)(lu.D, { label: V.intl.string(V.t["t+aGse"]), children: (0, p.jsx)(xF, {}) });
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
    xX = (0, h.E2)(S.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, _.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, _.bG)([xS.A], () => xS.A.isFetching()),
                n = (0, _.bG)([xS.A], () => xS.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, _.cf)([xa.default], () => ({
                    authorizedAppsFetchState: xa.default.getFetchState(),
                    authorizedApps: xa.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, xI.A)(sx.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cy.Ay)(),
                o = (0, _.bG)([uu.default], () => uu.default.locale);
            return (f.useEffect(() => {
                i === xa.FetchState.NOT_FETCHED && S4.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(xf, {}),
                          (0, p.jsx)(xB, {
                              fetching: t || s || (r.length > 0 && i !== xa.FetchState.FETCHED),
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
            S7.A.fetch();
        },
        useSearchTerms: () => [
            V.intl.string(V.t["+/hZM/"]),
            V.intl.string(V.t.bsbMVz),
            V.intl.string(V.t.f7yOAX),
            V.intl.string(V.t.FYKGsL),
            V.intl.string(V.t["+KCMSi"]),
        ],
    }),
    xY = (0, h.zZ)(S.X.CONNECTIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3fe7U5"]),
        useSubtitle: () => V.intl.string(V.t.U22vw6),
        buildLayout: () => [xz, xX],
    }),
    xH = (0, h.zZ)(S.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        useSubtitle: () => V.intl.string(V.t.G9JfLg),
        buildLayout: () => [S6],
        initialize: () => (
            S4.A.fetch(),
            () => {
                S5.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    xW = (0, h.t_)(S.X.CONNECTED_APPS_PANEL, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        useObscuredNotice: of.L,
        buildLayout: () => [xY, xH],
    }),
    xK = (0, h.i4)(S.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        icon: hg.LinkIcon,
        buildLayout: () => [xW],
    });
var xZ = n(625657),
    xq = n(592598),
    xQ = n(773371),
    xJ = n(532294),
    x$ = n(672396);
let x0 = x2(null);
function x1() {
    var e;
    let t = x2(x0);
    ((e = x0),
        K().isEqual(K().omit(t, "old_enabled"), K().omit(e, "old_enabled")) ||
            (td.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (x0 = t)));
}
function x2(e) {
    let t = xJ.default.getNotificationPositionMode(),
        n = t !== I.G6Q.DISABLED,
        i = la.Ay.getOverlayKeybind(),
        l = la.Ay.getOverlayChatKeybind();
    return {
        enabled: xQ.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: xq.A.isNotificationDisabled(x$.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, lS.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, lS.dI)(l.shortcut) : null,
        text_opacity_slider: xJ.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? xQ.default.enabled,
    };
}
var x3 = n(237984),
    x4 = n(63035);
function x5(e) {
    (e.preventDefault(), e.stopPropagation());
}
function x6(e) {
    let { children: t } = e;
    return (0, p.jsx)("div", { onClick: x5, children: t });
}
function x8(e) {
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
        className: ic()(x4.HS, d),
        children: [
            (0, p.jsxs)(h6.s, {
                "aria-label": u,
                onClick: o,
                focusProps: { offset: 4 },
                children: [
                    null != t && (0, p.jsx)("div", { className: x4.x_, children: t }),
                    (0, p.jsxs)("div", {
                        className: x4.rN,
                        children: [
                            null != n && (0, p.jsx)("div", { className: x4.$t, children: n }),
                            (0, p.jsxs)("div", {
                                className: x4.c8,
                                children: [
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: x4.SZ,
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
                            (0, p.jsx)("div", { className: x4.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: x4.Om, children: a }),
        ],
    });
}
let x7 = (0, h.E2)(S.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, p.jsx)(x8, {
            title: V.intl.string(V.t["z4/l+V"]),
            description: V.intl.string(V.t["3aZq/0"]),
            action: (0, p.jsx)(j.$, {
                variant: "primary",
                text: V.intl.string(V.t.s2nVhG),
                onClick: () => {
                    (0, x3.b)(tk.A.USER_SETTINGS, I.BRT.APP);
                },
            }),
            "aria-label": V.intl.string(V.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [V.intl.string(V.t["z4/l+V"])],
});
var x9 = n(452295),
    Te = n(684013),
    Tt = n(56562),
    Tn = n(311043),
    Ti = n(454908),
    Tl = n(41984),
    Ts = n(918825),
    Tr = n(296027),
    Ta = n(562519);
let To = 5 * n(927813).A.Millis.DAY,
    Tu = new Ta.A("overlay_survey_timestamps");
function Td(e, t) {
    let i, l;
    ((i = Date.now()),
        (null != (l = Array.from(Tu.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < To) ||
            Array.from(Tu.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, lT.openModalLazy)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), Tu.add(i), (n) => (0, p.jsx)(l, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function Tc() {
    (0, le.sL)("overlay-settings");
}
function Tg(e) {
    let { className: t, game: n } = e;
    return (0, le.NP)() && null != n && n.elevated
        ? (0, p.jsx)("div", {
              className: t,
              children: (0, p.jsx)(iK.w, {
                  type: "warning",
                  message: V.intl.format(V.t["LJzl+0"], { helpCenterLink: eb.A.getArticleURL(I.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: V.intl.string(V.t["1iI46O"]), onClick: Tc },
              }),
          })
        : null;
}
var Tm = n(760751),
    TA = n(9302),
    TE = n(656513);
let Th = new Set([
    Tl.AR.INITIALIZING,
    Tl.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    Tl.AR.WAITING_FOR_MODULE_TRACKING,
    Tl.AR.WAITING_FOR_OVERLAY_OPEN,
    Tl.AR.WAITING_FOR_POPOUT_OPEN,
    Tl.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    Tl.AR.WAITING_FOR_REACT_INITIALIZATION,
    Tl.AR.WAITING_FOR_PID_FOCUS,
    Tl.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function TS(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = f.useState(!1);
    return (0, p.jsx)(TE.N, {
        className: x4.uR,
        collapsibleContent: (0, p.jsx)("div", { className: x4.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, p.jsx)(x8, {
                ...l,
                onClick: (e) => {
                    var n;
                    (r((n = !s)), i?.(n), t?.(e));
                },
                className: ic()(x4.AC, n),
                action: (0, p.jsxs)("div", {
                    className: x4.rc,
                    children: [
                        l.action,
                        s
                            ? (0, p.jsx)(mb.a, {
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
let Tx = (0, h.E2)(S.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i8();
        (0, Ti.I)(e?.id);
        let n = e?.pid,
            i = (0, _.bG)(
                [Tr.default],
                () => (null == e || null == n ? null : Tr.default.getTrackedGameByPid(n)),
                [e, n],
                i1(),
            ),
            { data: l } = (0, Ti.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, _.cf)(
                [Tm.A, tc.A, Tn.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i5.hw)(e, !1, [Tm.A, tc.A, Tn.A]),
                [e, i],
            ),
            a = (0, _.bG)(
                [i5.Ay, Tm.A, tc.A, Tn.A],
                () => (null == e ? null : (0, i5.xU)(e, i5.Ay, Tm.A, tc.A, Tn.A)),
                [e],
                i1(),
            ),
            [o, u] = f.useState(r),
            [d, c] = f.useState(s),
            [g, m] = f.useState(!1);
        f.useEffect(() => {
            (u(r), c(s));
        }, [r, s]);
        let A = !(0, TA.supportsLegacy)(),
            E = !(0, TA.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: S } = (0, _.cf)([Tr.default], () => Tr.default.getGlobalEnabledStatus());
        function x(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case Ts.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), x9.A.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case Ts.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), x9.A.toggleOverlay(e, d, t), (l = !t && o));
                    break;
                case Ts.OverlayToggledClientSettingType.LEGACY:
                    (Te.A.setEnabled(t, S), (0, Ts.Q)(t, Ts.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case Ts.OverlayToggledClientSettingType.OOP:
                    (Te.A.setEnabled(h, t), (0, Ts.Q)(t, Ts.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || l) &&
                Td(
                    i ? Ts.OverlayToggledClientSettingType.LEGACY_GAME : Ts.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let T = A && E,
            I = !h && !S,
            N = !o && !h && d && !A,
            C = !d && !S && o && !E,
            b = i?.overlayMethod === Tl.Ue.Disabled,
            y = i?.state === Tl.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && Th.has(i.state) && !b,
            j = i?.overlayMethod === Tl.Ue.OutOfProcess,
            O = i?.overlayMethod === Tl.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === Tl.Ue.Hook,
            R = i?.state === Tl.AR.OVERLAY_CRASHED || i?.state === Tl.AR.OVERLAY_CRASHED_DISABLED,
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
                                    case i?.fullscreenType !== Tt.aI.BORDERLESS_FULLSCREEN:
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
                        let e = i?.fullscreenType === Tt.aI.FULLSCREEN ? V.intl.string(V.t.mJmbeC) : null;
                        return [V.intl.string(V.t.VPW4XY), e];
                    }
                    default:
                        return [V.intl.string(V.t.ONovP5), null];
                }
            })();
        (0, eI.Ay)(() => {
            x9.A.getDetectableGames();
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
            : (0, p.jsxs)(TS, {
                  onExpand: m,
                  className: g ? x4.tx : void 0,
                  title: (0, p.jsxs)(p.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, p.jsx)(lg.m, {
                                    text: V.intl.string(V.t["4PJP5p"]),
                                    children: (0, p.jsx)(xr.A, {
                                        size: 16,
                                        color: n1.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, p.jsx)(S8.U, {
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
                              ? (0, p.jsx)(dY.k, { size: "xxs", color: U })
                              : (0, p.jsx)("div", { className: x4.W4 }),
                          (0, p.jsx)(n4.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: V.intl.string(V.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, p.jsx)(i7.A, { game: t, pid: e?.pid, size: i7.M.MEDIUM }),
                  "aria-label": V.intl.string(V.t["87O5GC"]),
                  action: (0, p.jsx)(x6, {
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
                                          (x9.A.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o));
                                          break;
                                      case "global":
                                          (Te.A.setEnabled(t, t), (i = !t && h), (l = !t && S));
                                          break;
                                      case "both":
                                          (Te.A.setEnabled(t, t),
                                              x9.A.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (l = (!t && S) || (!t && o)));
                                  }
                                  let s = null;
                                  (i
                                      ? (s =
                                            "game" === n
                                                ? Ts.OverlayToggledClientSettingType.LEGACY_GAME
                                                : Ts.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? Ts.OverlayToggledClientSettingType.OOP_GAME
                                                : Ts.OverlayToggledClientSettingType.OOP),
                                      null != s && Td(s, e.id ?? null));
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
                  warning: (0, p.jsx)(Tg, { className: x4.Hh, game: e }),
                  children: [
                      (0, p.jsx)(x8, {
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
                                              ? x(e, Ts.OverlayToggledClientSettingType.OOP)
                                              : x(e, Ts.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: x4.Kz }),
                              ],
                          }),
                      }),
                      (0, p.jsx)(x8, {
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
                                              ? x(e, Ts.OverlayToggledClientSettingType.LEGACY)
                                              : x(e, Ts.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: x4.Kz }),
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
var TT = n(206885);
function Tp(e) {
    let { game: t, gameApplication: n } = e,
        i = f.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, _.bG)([i2.A], () => (null != n ? n : i2.A.getApplication(t?.id)), [n, t]);
    return (0, p.jsx)(i7.A, { game: l, pid: i, size: i7.M.SMALL });
}
function Tf(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, Ti.I)(t?.id);
    let o = (0, _.cf)([i5.Ay, Tm.A, tc.A, Tn.A], () => (0, i5.xU)(t, i5.Ay, Tm.A, tc.A, Tn.A)),
        u = (0, _.cf)([Tm.A, tc.A, Tn.A], () => (0, i5.hw)(t, !1, [Tm.A, tc.A, Tn.A]), [t]),
        d = l(u),
        [c, g] = f.useState(d);
    return (
        f.useEffect(() => {
            g(d);
        }, [d]),
        (0, p.jsx)(x8, {
            title: t.name,
            icon: (0, p.jsx)(Tp, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(t5.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), s(e, o, u), n && Td(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, p.jsx)("div", { className: x4.Kz }),
                ],
            }),
        })
    );
}
let T_ = (0, h.E2)(S.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, _.cf)([Tr.default], () =>
                    Tr.default.getGlobalEnabledStatus(),
                ),
                l = (0, _.yK)([i5.Ay], () => i5.Ay.getGamesSeen(!0)).filter((e) => !(0, SA.n1)(e)),
                s = (0, i3.A)(l.map((e) => e.id)),
                r = !(0, TA.supportsLegacy)();
            function a(e) {
                Te.A.setEnabled(e, i);
                let t = i5.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, Ts.Q)(e, Ts.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && Td(Ts.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                x9.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () =>
                    (0, TA.supportsLegacy)()
                        ? r
                            ? V.intl.string(V.t.r9jEVw)
                            : V.intl.string(V.t.OzInYk)
                        : V.intl.string(V.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, p.jsx)(x8, {
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      className: x4.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(t5.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              TT.O && (0, p.jsx)("div", { className: x4.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(TS, {
                      onExpand: t,
                      className: e ? x4.tx : void 0,
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      action: (0, p.jsx)(x6, {
                          children: (0, p.jsx)(t5.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: x4.SC,
                              children: (0, p.jsx)(n4.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(b.Ip, {
                              className: x4.XG,
                              children: l.map((e, t) =>
                                  (0, p.jsx)(
                                      Tf,
                                      {
                                          rawGame: e,
                                          clientSettingType: Ts.OverlayToggledClientSettingType.LEGACY_GAME,
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
    TI = (0, h.E2)(S.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, _.cf)([Tr.default], () =>
                    Tr.default.getGlobalEnabledStatus(),
                ),
                l = !(0, TA.supportsOutOfProcess)(),
                s = (0, _.yK)([i5.Ay], () => i5.Ay.getGamesSeen(!0)).filter((e) => !(0, SA.n1)(e)),
                r = (0, i3.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                Te.A.setEnabled(i, e);
                let l = i5.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, Ts.Q)(e, Ts.OverlayToggledClientSettingType.OOP, l),
                    t && Td(Ts.OverlayToggledClientSettingType.OOP, l));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                x9.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () => (TT.O ? (l ? V.intl.string(V.t.C7bLTQ) : V.intl.string(V.t.ndgADE)) : V.intl.string(V.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, p.jsx)(x8, {
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      className: x4.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(t5.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              TT.O && (0, p.jsx)("div", { className: x4.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(TS, {
                      onExpand: t,
                      className: e ? x4.tx : void 0,
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      action: (0, p.jsx)(x6, {
                          children: (0, p.jsx)(t5.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: x4.SC,
                              children: (0, p.jsx)(n4.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(b.Ip, {
                              className: x4.XG,
                              children: s.map((e, t) =>
                                  (0, p.jsx)(
                                      Tf,
                                      {
                                          rawGame: e,
                                          clientSettingType: Ts.OverlayToggledClientSettingType.OOP_GAME,
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
    TN = (0, h.zZ)(S.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [Tx, TI, T_, x7],
    }),
    TC = (0, h.zD)(S.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, _.bG)([xJ.default], () => !xJ.default.disableClickableRegions),
        setValue: (e) => {
            Te.A.setDisableClickableRegions(!e);
        },
        useTitle: () => V.intl.string(V.t["+eFXxq"]),
        useSubtitle: () => V.intl.string(V.t.kivMAp),
    }),
    Tb = (0, h.E2)(S.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, _.bG)([la.Ay], () => la.Ay.getOverlayKeybind()),
                t = !(0, TA.supportsLegacy)(),
                n = !(0, TA.supportsOutOfProcess)(),
                [i, l] = (0, _.yK)([i5.Ay], () => [i5.Ay.canShowAdminWarning, i5.Ay.getVisibleGame()], []),
                s = (0, le.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, la.DV)(e?.shortcut ?? []);
            return (0, p.jsx)("div", {
                className: x4.hc,
                children: (0, p.jsxs)("div", {
                    className: x4.eH,
                    children: [
                        (0, p.jsxs)("div", {
                            className: x4.Bu,
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
                                        className: x4.y7,
                                        children: V.intl.string(V.t.NsowVa),
                                    }),
                                a &&
                                    (0, p.jsx)(n4.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: x4.y7,
                                        children: V.intl.string(V.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, p.jsx)("div", {
                            className: x4.IH,
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
var Ty = n(515183),
    Tv = n(682763);
let Tj = (0, h.zD)(S.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i8();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i8();
            return null != e && (0, Ty.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i8(),
                n = t?.id,
                i = (0, _.bG)([xq.A], () => xq.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, Ty.qJ)(e.pid);
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
            null != s && (0, Tv.x8)(s.id, e);
        },
        useTitle: () => V.intl.string(V.t.wgVQND),
        useSubtitle: () => V.intl.string(V.t["5SsyF5"]),
    }),
    TO = (0, h.zZ)(S.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [Tb, Tj, TC] });
var TL = n(93465),
    TR = n(222407);
let TD = [
    {
        title: V.t.eVE4LX,
        description: V.t["72WNqk"],
        disabledSetting: TL.M.TEXT_CHAT,
        key: S.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: V.t.oifnSh,
        description: V.t.bgU5r0,
        disabledSetting: TL.M.WELCOME_GENERAL,
        key: S.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: V.t.hqsZJW,
        description: V.t.kHjdqc,
        disabledSetting: TL.M.GO_LIVE_NUDGE,
        key: S.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: V.t.sop3rn,
        description: V.t.pjgffc,
        disabledSetting: TL.M.GAME_ACTIVITY,
        key: S.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: V.t["2QVhbb"],
        description: V.t.wQ4ilB,
        disabledSetting: TL.M.NOW_PLAYING,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: V.t.giM9fA,
        description: V.t.EhAfWj,
        disabledSetting: TL.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, np.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, _.bG)([xq.A], () => xq.A.isNotificationDisabledBySetting(TL.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function TP(e) {
    return (0, h.zD)(e.key, {
        useTitle: () => V.intl.string(e.title),
        useSubtitle: () => V.intl.string(e.description),
        useValue: () => !(0, _.bG)([xq.A], () => xq.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, TR.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let TG = (0, h.FW)(S.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => TD.map(TP),
    }),
    TM = (0, h.zZ)(S.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.xOE5bA),
        buildLayout: () => [TG],
    }),
    TU = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => V.intl.string(V.t.dnvZSg),
        useValue: () => (0, _.bG)([xJ.default], () => xJ.default.getAvatarSizeMode()),
        setValue: (e) => {
            Te.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: V.intl.string(V.t.YcOxtr), value: I.OSZ.LARGE },
            { id: "small", label: V.intl.string(V.t.BKIKqx), value: I.OSZ.SMALL },
        ],
    }),
    TV = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => V.intl.string(V.t.J0dpcB),
        useValue: () => (0, _.bG)([xJ.default], () => xJ.default.getDisplayNameMode()),
        setValue: (e) => {
            Te.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: I.pwA.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: I.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: V.intl.string(V.t.ekjlPL), value: I.pwA.NEVER },
        ],
    }),
    Tk = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => V.intl.string(V.t.swsWWC),
        useValue: () => (0, _.bG)([xJ.default], () => xJ.default.getDisplayUserMode()),
        setValue: (e) => {
            Te.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: I.f5z.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: I.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var Tw = n(391973),
    TF = n(233741),
    TB = n(897720),
    Tz = n(32584);
function TX() {
    let e = TF.A.getWidgetByType(I.uss.VOICE_V3);
    if (null == e) return null;
    let t = Tz.A.getWidget(e.id);
    return null != t && (0, TB.ZO)(t) ? t : null;
}
n(392164);
let TY = (0, h.sN)(S.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => V.intl.string(V.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? V.intl.string(V.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = TX();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? V.intl.string(V.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = TX();
        null != t &&
            (e < 1
                ? (0, Tw.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, Tw.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var TH = n(450740),
    TW = n(968898),
    TK = n(288737);
function TZ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new TK.A({
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
        user: new gd.A({ id: l, username: e }),
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
let Tq = (0, h.E2)(S.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, _.cf)([xJ.default], () => ({
                    avatarSizeMode: xJ.default.getAvatarSizeMode(),
                    displayNameMode: xJ.default.getDisplayNameMode(),
                    displayUserMode: xJ.default.getDisplayUserMode(),
                })),
                [s] = f.useState(() => [
                    TZ(V.intl.string(V.t.C0ZDvo), !0, !1),
                    TZ(V.intl.string(V.t.iOtj8E), !1, !1, !0),
                    TZ(V.intl.string(V.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, _.bG)([TF.A, Tz.A], () => {
                    let e = TF.A.getWidgetByType(I.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = Tz.A.getWidget(e.id);
                    return null != t && (0, TB.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = TZ(t.username)).user = t), e) : null, ...s].filter(io.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, p.jsx)(xc.N, {
                    theme: I.NJ8.ONYX,
                    children: (e) =>
                        (0, p.jsxs)("div", {
                            className: ic()(x4.Y5, e),
                            children: [
                                (0, p.jsx)("div", {
                                    className: x4.kJ,
                                    children: (0, p.jsx)(TH.DH, {
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
                                    className: x4.R$,
                                    children: [
                                        (0, p.jsx)(TW.Pl, { children: V.intl.string(V.t.KNJ6Vq) }),
                                        (0, p.jsx)(TW.CS, {}),
                                        (0, p.jsx)(TW.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, p.jsx)("div", { className: x4.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    TQ = (0, h.zZ)(S.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => V.intl.string(V.t.r1TZfh),
        buildLayout: () => [Tq, TU, TV, Tk, TY],
    });
var TJ = n(97005),
    T$ = n(667419),
    T0 = n(776162),
    T1 = n(114994),
    T2 = n(371169),
    T3 = n(254821);
let T4 = {
    [I.uss.VOICE_V3]: S.X.OVERLAY_WIDGETS_VOICE,
    [I.uss.QUICK_ACTIONS]: S.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
    [I.uss.NOTIFICATIONS]: S.X.OVERLAY_WIDGETS_NOTIFICATIONS,
    [I.uss.TEXT_CHAT_V3]: S.X.OVERLAY_WIDGETS_CHAT,
    [I.uss.FRIENDS]: S.X.OVERLAY_WIDGETS_FRIENDS,
    [I.uss.ACTIVITY]: S.X.OVERLAY_WIDGETS_ACTIVITY,
    [I.uss.VIDEO]: S.X.OVERLAY_WIDGETS_VIDEO,
    [I.uss.GO_LIVE]: S.X.OVERLAY_WIDGETS_STREAMS,
};
function T5(e) {
    let t = nf.A[e],
        n = T4[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: l, predicate: s } = t;
    return (0, h.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => l(),
        usePredicate: () => ((0, np.M8)("OverlayWidgetsCategory"), s?.() ?? !0),
        useValue: () => (0, _.bG)([Tz.A], () => (0, T$.$e)(e, Tz.A), []),
        setValue: (t) => {
            ((0, T$.j$)(), (0, T$.JA)(e, !t));
        },
    });
}
let T6 = (0, h.FW)(S.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(T3.default["Qk/rJB"]),
        useSubtitle: () => V.intl.string(T3.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => T0.t3.flatMap(T5),
    }),
    T8 = (0, h.E2)(S.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, _.bG)([T1.A], () => T1.A.getProjects());
            return (f.useEffect(() => {
                (0, T2.listProjects)();
            }, []),
            0 === e.length)
                ? null
                : (0, p.jsxs)(q.B, {
                      gap: 8,
                      children: [
                          (0, p.jsx)(C.D, {
                              variant: "heading-sm/semibold",
                              color: "text-muted",
                              children: V.intl.string(T3.default["pbu+Yx"]),
                          }),
                          e.map((e) => (0, p.jsx)(T0.i2, { project: e }, e.id)),
                      ],
                  });
        },
        usePredicate: () => (0, TJ.TW)("overlay_settings_conjure_apps"),
        useSearchTerms: () => [V.intl.string(T3.default["pbu+Yx"])],
    }),
    T7 = (0, h.Tf)(S.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => V.intl.string(V.t["hW+EMu"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: T$.eL,
    }),
    T9 = (0, h.zZ)(S.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => V.intl.string(T3.default["Qk/rJB"]),
        usePredicate: n_.b_,
        buildLayout: () => [T6, T8, T7],
    });
var pe = n(54761);
function pt() {
    let [e, t] = (0, m2.kn)([eE.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, Z.Ay)(() => () => {
        t(Ae.i.AUTO_DISMISS);
    }),
    e !== eE.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsxs)("div", {
                      className: pe.xC,
                      children: [
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: pe.tl,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsxs)("div", {
                                  className: pe.vJ,
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
                                  className: pe.lh,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pe.VV,
                              children: (0, p.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t.Q26diF),
                                  onClick: () => void t(Ae.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(ls.c, { className: pe.yF }),
              ],
          });
}
function pn() {
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
                  (0, p.jsx)(ls.c, { className: pe.yF }),
              ],
          })
        : null;
}
let pi = (0, h.t_)(S.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                x1(),
                la.Ay.addChangeListener(x1),
                xq.A.addChangeListener(x1),
                xJ.default.addChangeListener(x1),
                xQ.default.addChangeListener(x1),
                e8.isPlatformEmbedded && (0, Sh.a2)(),
                () => {
                    (la.Ay.removeChangeListener(x1),
                        xq.A.removeChangeListener(x1),
                        xJ.default.removeChangeListener(x1),
                        xQ.default.removeChangeListener(x1),
                        e8.isPlatformEmbedded && (0, Sh.e0)());
                }
            );
        },
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        decoration: {
            type: T.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(pt, {}), (0, p.jsx)(pn, {})] });
            },
        },
        buildLayout: () => [TN, TO, T9, TQ, TM],
    }),
    pl = (0, h.i4)(S.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        icon: xZ.l,
        usePredicate: n_.b_,
        buildLayout: () => [pi],
    });
var ps = n(687966);
let pr = (0, h.AK)(S.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.OYYY6q),
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    pa = (0, h.gN)(S.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [pr] });
var po = n(227309),
    pu = n(29160),
    pd = n(552366),
    pc = n(938442);
function pg(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, Ti.I)(t.id);
    let o = (0, _.cf)([i5.Ay, Tm.A, tc.A, Tn.A], () => (0, i5.xU)(t, i5.Ay, Tm.A, tc.A, Tn.A)),
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
                (0, SA.n1)(o)
                    ? r
                        ? o.gameName
                        : V.intl.formatToPlainString(V.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = f.useState(T ?? "???"),
        b = ic()(pc.tR, {
            [pd.LO]: !i,
            [pd.Rw]: i,
            [pd.FB]: null != o && i,
            [pd.xL]: r,
            [pd.fG]: null != s && s.length > 0,
        });
    function y() {
        (x9.A.deleteEntry(o),
            s?.forEach((e) => {
                x9.A.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? Tm.A.getDetectableGame(o.id) : null;
        (td.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, SA.n1)(o) ? o.gameName : o.name,
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
                        className: ic()(pd.$K, pc.Vd),
                        children: [
                            null != o.processGame || (o.verified && !l)
                                ? (0, p.jsxs)("div", {
                                      className: pd.HS,
                                      children: [
                                          (0, p.jsx)("div", { className: pd.mO, children: T }),
                                          (0, p.jsx)(lg.m, {
                                              text: V.intl.string(V.t["4PJP5p"]),
                                              children: (0, p.jsx)(xr.A, {
                                                  className: pd.qf,
                                                  size: 18,
                                                  color: n1.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, p.jsx)(S8.U, {
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
                                      className: ic()(pd.mO, pd.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && x9.A.editName(o, N);
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
                                        className: pd.GN,
                                        children: (0, p.jsx)(pu.A, {
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
                                return (0, p.jsx)(g7.W, {
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
                                    className: ic()(pd._Q, { [pd.g9]: t.isShown }),
                                    children: (0, p.jsx)(lg.m, {
                                        text: V.intl.string(V.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, p.jsx)(ld.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: g5.MoreHorizontalIcon,
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
                                                              (x9.A.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : x9.A.toggleDetection(o);
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
                    className: pd.AQ,
                    children: s.map((e, t) =>
                        (0, p.jsxs)(
                            f.Fragment,
                            {
                                children: [
                                    (0, p.jsx)(pg, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, p.jsx)("div", { className: pd.PQ }),
                                ],
                            },
                            (0, i5.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pm() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = Sx();
    return 0 === e.length
        ? null
        : (0, p.jsx)(q.B, {
              padding: { bottom: 32 },
              children: (0, p.jsx)(n3.n, {
                  children: (0, p.jsx)("div", {
                      children: e.map((e) =>
                          (0, p.jsx)(
                              pg,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === po.a7 ? t : void 0 },
                              (0, i5.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let pA = (0, h.E2)(S.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, p.jsx)(pm, {}),
});
var pE = n(424994);
let ph = (0, h.zZ)(S.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [pA, pa],
    useTitle: () => V.intl.string(V.t.jCOdvx),
    useSubtitle: () =>
        (0, _.bG)([i5.Ay], () => i5.Ay.getGamesSeen(!1).some((e) => !(0, SA.n1)(e)))
            ? V.intl.format(V.t.KPA3m9, { igdbLink: pE.s8 })
            : V.intl.string(V.t["1yiJwn"]),
});
var pS = n(890497),
    px = n(853270),
    pT = n(969426);
function pp(e) {
    let { onClose: t } = e,
        n = (0, _.bG)([i5.Ay], () => i5.Ay.getCandidateGames()),
        [i, l] = f.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, p.jsxs)(a_.l, {
        className: ic()(px.H, pT.Y_),
        "aria-label": V.intl.string(V.t.GTCx0p),
        children: [
            (0, p.jsx)(pS.Z, {
                selectionMode: "single",
                placeholder: V.intl.string(V.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, p.jsxs)("div", {
                className: ic()(px.o, pc.xM),
                children: [
                    (0, p.jsx)(h4.Q, { variant: "secondary", text: V.intl.string(V.t["ETE/oC"]), onClick: t }),
                    (0, p.jsx)(j.$, {
                        variant: "primary",
                        text: V.intl.string(V.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (x9.A.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var pf = n(475007);
function p_() {
    let e = f.useRef(null);
    return (0, p.jsxs)("div", {
        className: ic()(pf.a, hp.Gf),
        children: [
            (0, p.jsx)("span", { children: V.intl.string(V.t.xwhoqM) }),
            (0, p.jsx)(af.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, p.jsx)(pp, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, p.jsx)(h4.Q, {
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
function pI() {
    return (0, p.jsx)("div", {
        className: ic()(pc.tR, pd.eS, pd.Rw),
        children: (0, p.jsxs)("div", {
            className: ic()(pd.$K, pc.Vd),
            children: [
                (0, p.jsx)("div", { className: pd.mO, children: V.intl.string(V.t.H68X9x) }),
                (0, p.jsx)(p_, {}),
            ],
        }),
    });
}
let pN = (0, h.E2)(S.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = Sx(),
                n = (0, _.bG)([i5.Ay], () => i5.Ay.getVisibleGame());
            return null == n
                ? (0, p.jsx)(pI, {})
                : (0, p.jsxs)("div", {
                      className: ic()(pc.Vd, pd.C2),
                      children: [
                          (0, p.jsx)(
                              pg,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === po.a7 ? e : void 0,
                              },
                              (0, i5.Es)(n),
                          ),
                          (0, p.jsx)(p_, {}),
                      ],
                  });
        },
    }),
    pC = (0, h.zZ)(S.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => V.intl.string(V.t["MY9/Oe"]),
        buildLayout: () => [pN],
    }),
    pb = (0, h.t_)(S.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        buildLayout: () => [pC, ph],
    }),
    py = (0, h.i4)(S.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        icon: ps.GameControllerIcon,
        usePredicate: n_.Pi,
        buildLayout: () => [pb],
    }),
    pv = (0, h.WI)(S.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => V.intl.string(V.t.BA9200),
        buildLayout: () => [py, S3, pl, xK],
    });
var pj = n(631670),
    pO = n(619499),
    pL = n(836602),
    pR = n(591179),
    pD = n(402860),
    pP = n(761508),
    pG = n(159001),
    pM = n(344346),
    pU = n(919395),
    pV = n(68750);
function pk(e) {
    let { title: t, children: n } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(C.D, { variant: "text-md/medium", className: pV.Vf, children: t }), n],
    });
}
function pw(e) {
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
        className: ic()(pV.UA, n),
        children: (0, p.jsxs)("div", {
            className: ic()(pV.yt, i),
            children: [
                (0, p.jsx)("div", {
                    className: ic()(pV.Fp, a && pV.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(pk, { title: s ?? V.intl.string(V.t.Zb06yP), children: l }),
                            null != r ? (0, p.jsx)(pk, { title: V.intl.string(V.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: pV.oB, children: t }),
            ],
        }),
    });
}
var pF = n(986687),
    pB = n(101058),
    pz = n(321191),
    pX = n(696451),
    pY = n(590941);
function pH() {
    return (0, p.jsxs)("div", {
        className: pY.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: pY.Sl }),
            (0, p.jsx)(C.D, { className: pY.h8, variant: "heading-lg/extrabold", children: V.intl.string(V.t.Z1OZCV) }),
            (0, p.jsx)(n4.E, { className: pY.h8, variant: "text-md/normal", children: V.intl.string(V.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: pY.h8,
                children: (0, p.jsx)(j.$, {
                    variant: "primary",
                    text: V.intl.string(V.t.jQ3pqt),
                    onClick: function () {
                        ((0, cs.pX)(I.BVt.GUILD_DISCOVERY), (0, tY.default)());
                    },
                }),
            }),
        ],
    });
}
var pW = n(81400),
    pK = n(450232),
    pZ = n(252732),
    pq = n(355622),
    pQ = n(408018),
    pJ = n(845207),
    p$ = n(290386),
    p0 = n(941933),
    p1 = n(486264);
let p2 = (0, tK.Ld)(),
    p3 = (0, G.createChannelRecord)({ id: "1", type: I.rbe.DM }),
    p4 = (0, tK.Ld)();
function p5(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, p$.U)({ location: "profile_customization_about_me" }),
        [u, d] = f.useState(l ?? r),
        [c, g] = f.useState((0, pQ.x7)(u)),
        m = f.useRef(r),
        A = f.useRef(!1);
    return (
        f.useEffect(() => {
            if (m.current !== r) {
                let e = (0, pQ.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        f.useEffect(() => {
            void 0 !== l || u === r || A.current || (d(r), g((0, pQ.x7)(r)));
        }, [l, r, u]),
        (0, p.jsxs)(ah.A, {
            title: t,
            titleId: p2,
            description: V.intl.string(V.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, p.jsx)(pJ.Ay, {
                    "aria-describedby": p4,
                    "aria-labelledby": p2,
                    className: p1.i,
                    innerClassName: p1.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: p3,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: p0.y,
                    type: pq.oU.PROFILE_BIO_INPUT,
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
                (0, p.jsx)(lm.A, { id: p4, children: V.intl.format(V.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var p6 = n(821956),
    p8 = n(562819),
    p7 = n(84540),
    p9 = n(467690);
function fe(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eX.Ay)(),
        o = (0, pU.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, pU.CP)(n?.id),
        c = r ? go.wL : s5.$n;
    return (0, p.jsx)(ah.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: p9.NC,
            children: [
                (0, p.jsx)(c, {
                    size: s5.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, p8.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ic()({ [p9.yj]: r }),
                    children: V.intl.string(V.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: p9.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, p6.uZ)(t, n) ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.OrokWm),
                            onClick: function () {
                                (0, p7.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var ft = n(339984),
    fn = n(942132);
let fi = [{ name: "gif", extensions: ["gif"] }];
function fl(e) {
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
        m = c ? go.wL : s5.$n,
        A = f.useCallback(() => {
            (0, pZ.XD)({
                uploadType: ft.HL.AVATAR,
                analyticsSource: g,
                filters: u ? fi : void 0,
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
            className: fn.NC,
            children: [
                (0, p.jsx)(m, {
                    className: ic()({ [fn.yj]: c }),
                    size: s5.$n.Sizes.SMALL,
                    onClick: A,
                    children: s ?? V.intl.string(V.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: fn.DT,
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
var fs = n(810188);
function fr(e) {
    let { user: t, guildId: n, className: i } = e,
        l = aC.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, eX.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, pU.B0)(t, n),
        [d, c] = (0, m2.kn)([eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        g = d === eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        m = (0, f.useCallback)(() => {
            (c(Ae.i.TAKE_ACTION),
                td.default.track(I.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eY.L)({ analyticsLocations: s, guildId: n }));
        }, [s, n, c]),
        A = (0, f.useCallback)(() => {
            ((0, p7.p)({ displayNameStyles: null }), td.default.track(I.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        E = (0, f.useCallback)(() => {
            (0, p7.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        h = void 0 !== o ? o : null != n ? a : r;
    return (0, p.jsx)(ah.A, {
        title: V.intl.string(eH.default["86GtGH"]),
        titleBadge: g
            ? (0, p.jsx)("div", { className: fs.A, children: (0, p.jsx)(AT.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: fs.N,
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
var fa = n(637193),
    fo = n(622410);
function fu(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, pU.rv)(t, n?.id),
        d = f.useCallback(() => {
            (0, fa.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = f.useCallback(() => {
            (0, p7.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, p.jsx)(ah.A, {
        title: V.intl.string(V.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: fo.u,
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
var fd = n(88524);
function fc(e) {
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
        g = d ? go.wL : s5.$n;
    return (0, p.jsx)(ah.A, {
        className: s,
        title: V.intl.string(V.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: fd.NC,
            children: [
                (0, p.jsx)(g, {
                    className: ic()({ [fd.yj]: d }),
                    size: s5.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, pZ.XD)({ uploadType: ft.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: V.intl.string(V.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: fd.DT,
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
var fg = n(617061),
    fm = n(625613);
function fA(e) {
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
        c = (0, pU.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, pU.nZ)(n?.id);
    f.useEffect(() => {
        d &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tq.uq)(tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? go.wL : s5.$n;
    return (0, p.jsx)(ah.A, {
        forcedDivider: r,
        borderType: cl.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, p.jsxs)("div", {
            className: fm.NC,
            children: [
                (0, p.jsx)(A, {
                    size: s5.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, fg.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ic()({ [fm.yj]: a }),
                    children: V.intl.string(V.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: fm.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.uMuafO),
                            onClick: function () {
                                (0, p7.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var fE = n(515727),
    fh = n(594401);
function fS(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        s = (0, pU.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, pU.Tu)(n?.id),
        [o, u] = (0, m2.kn)([eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, p.jsx)(ah.A, {
        showBorder: d,
        borderType: d ? cl.i.NEW_UPSELL : cl.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, p.jsx)("div", { className: fh.Ad, children: (0, p.jsx)(AT.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? V.intl.string(V.t.yMoMAt) : void 0,
        errors: a,
        children: (0, p.jsxs)("div", {
            className: fh.NC,
            children: [
                (0, p.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t["9/hmle"]),
                    onClick: function () {
                        ((0, fE.w)({ analyticsLocations: l, guild: n }), u(Ae.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != s : null != r) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: fh.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.nQBruk),
                            onClick: function () {
                                (0, p7.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var fx = n(602853),
    fT = n(654107),
    fp = n(999291),
    ff = n(101928),
    f_ = n(819169),
    fI = n(317097),
    fN = n(508274),
    fC = n(379012);
function fb(e) {
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
        c = (0, fx.r)(n1.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n1.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, pZ.sN)(i),
        A = (0, fI.Hl)(i),
        E = A === c ? g : A,
        h = m ? n1.A.unsafe_rawColors.WHITE.css : n1.A.unsafe_rawColors.PRIMARY_530.css,
        S = (0, f_.A)(a),
        x = (0, f_.A)(o),
        [T, _] = f.useState((0, oP.A)());
    return (
        f.useEffect(() => {
            (S !== a || x !== o) && _((0, oP.A)());
        }, [o, a, x, S]),
        (0, p.jsx)(af.Y, {
            targetElementRef: d,
            positionKey: T,
            renderPopout: (e) =>
                (0, p.jsx)(fN.VN, {
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
                    className: ic()(fC.oP, { [fC.r9]: s }),
                    children: [
                        (0, p.jsx)(n5.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? I.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: fC.nf,
                            "aria-label": V.intl.string(V.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(aI.PencilIcon, {
                                size: "custom",
                                className: fC.BW,
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
var fy = n(190377);
function fv(e) {
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
        c = (0, fp.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, ff.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = aC.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, fx.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        S = (0, fT.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, p.jsx)(ah.A, {
              title: V.intl.string(V.t.DMeO2X),
              disabled: !A && !s,
              className: ic()(fy.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, p.jsxs)("div", {
                  className: fy.hd,
                  children: [
                      (0, p.jsx)("div", {
                          className: fy.YX,
                          children: (0, p.jsx)(fb, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(n4.E, {
                                  className: fy.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, p.jsx)("div", {
                          className: fy.YX,
                          children: (0, p.jsx)(fb, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(n4.E, {
                                  className: fy.yz,
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
                              className: fy.WA,
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
function fj(e) {
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
var fO = n(684732),
    fL = n(576705),
    fR = n(931175);
function fD(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, _.bG)([fL.A], () => fL.A.can(I.xBc.CHANGE_NICKNAME, r) || fL.A.can(I.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xu.L)(tJ.PremiumTypes.TIER_2);
    return (0, p.jsxs)(ah.A, {
        title: V.intl.string(V.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(lp.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: I.d0r,
                onChange: function (e) {
                    (0, p7.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : V.intl.string(V.t.gzjxQi),
            }),
            o && (0, p.jsx)(fr, { user: s, guildId: r.id, className: fR.F }),
        ],
    });
}
var fP = n(233454);
let fG = "/assets/b25da78aa7949feb.png";
function fM(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, cy.Ay)(),
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
              className: fP.ry,
              children: [
                  (0, p.jsx)("div", { children: i }),
                  (0, p.jsxs)("div", {
                      className: fP.Wc,
                      children: [
                          (0, p.jsx)("img", {
                              className: fP.Tn,
                              alt: V.intl.string(V.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case I.NJ8.ASH:
                                      case I.NJ8.DARK:
                                      case I.NJ8.ONYX:
                                          return fG;
                                      case I.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return fG;
                                  }
                              })(l),
                          }),
                          (0, p.jsxs)("div", {
                              className: fP._9,
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
                          (0, p.jsx)(ci.A, {
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
var fU = n(203164);
function fV() {
    let e = (0, _.bG)([sx.default], () => {
            let e = sx.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xu.L)(tJ.PremiumTypes.TIER_2),
        n = (0, _.bG)([pL.A, lv.A], () => lv.A.getGuild(pL.A.selectedGuildId));
    tE()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, _.cf)([pL.A], () => ({ ...pL.A.getPendingChanges(n.id), errors: pL.A.getErrors(n.id) })),
        d = (0, pB.V7)({ userId: e.id, image: i }),
        c = (0, pW.EC)(n.id),
        g = (0, _.bG)([pX.Ay], () => (null == n.id ? null : pX.Ay.getMember(n.id, e.id))),
        m = (0, _.bG)([pz.A], () => pz.A.getGuildMemberProfile(e.id, n.id)),
        A = aC.Ay.canUsePremiumProfileCustomization(e),
        E = (0, pU.z5)(i, g?.avatar),
        h = (0, pU.Ac)(s, m?.banner),
        S = (0, fO.l)(o, m?.themeColors),
        x = m?.bio ?? "",
        T = m?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: fU.Q,
        children: [
            (0, p.jsx)(
                fD,
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
                fj,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, p7.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: T,
                },
                "pronouns",
            ),
            (0, p.jsxs)(fM, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, p.jsx)(
                        fl,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.lqaIxI), (0, p.jsx)(pK.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, pZ.rM)(e, g?.avatar, (e) => (0, p7.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, p.jsx)(
                        fe,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t["7v0T9P"]), (0, p.jsx)(pK.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, p.jsx)(fr, { user: e, guildId: n.id }),
                    (0, p.jsx)(
                        fu,
                        { user: e, guild: n, titleIcon: (0, p.jsx)(pK.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        fA,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.wR5wOo), (0, p.jsx)(pK.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(
                        fS,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.GWrZOd), (0, p.jsx)(pK.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, p.jsx)(
                        fc,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, pZ.rM)(e, m?.banner, (e) => (0, p7.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, p.jsx)(fv, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, p7.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, p.jsx)(
                        p5,
                        {
                            placeholder: V.intl.string(V.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.ZzAR2Y), (0, p.jsx)(pK.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, p7.p)({ guildId: n.id, bio: e }),
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
var fk = n(832131);
function fw(e) {
    (0, lT.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, p.jsx)(t, { source: { ...e, page: I.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function fF(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eX.Ay)(tk.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, _.bG)([sx.default], () => {
            let e = sx.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        s = (0, _.bG)([pX.Ay], () => (null != t ? pX.Ay.getMember(t.id, l.id) : null)),
        r = (0, _.bG)([pz.A], () => !pz.A.isFetchingProfile(l.id, t?.id)),
        a = (0, _.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, _.cf)([pL.A], () => pL.A.getPendingChanges(t?.id)),
        c = (0, pB.V7)({ userId: l.id, image: o }),
        g = (0, pU.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, pU.B0)(l, t?.id);
    return (f.useEffect(() => pG.IM, []), a)
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
                                  (0, p.jsx)(pw, {
                                      profilePreviewTitle: (0, p.jsx)(C.D, {
                                          variant: "heading-md/medium",
                                          className: fk.YV,
                                          children: V.intl.formatToPlainString(V.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(pF.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: aC.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: fw,
                                          containerClassName: fk.ti,
                                      }),
                                      nameplatePreview: (0, p.jsx)(pM.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? fk.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(fV, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(pH, {}),
                ],
            })
          : (0, p.jsx)(oD.y, {});
}
var fB = n(903209),
    fz = n(641130);
function fX(e) {
    let { children: t, notice: n } = e;
    return (0, p.jsxs)("div", { className: fz.r, children: [n, (0, p.jsx)("div", { children: t })] });
}
var fY = n(823092),
    fH = n(815996),
    fW = n(379197),
    fK = n(488430),
    fZ = n(457421),
    fq = n(940622),
    fQ = n(559474),
    fJ = n(757993);
let f$ = function () {
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
        } = ((e = (0, fq.mb)(fQ.RN.UPSELL_BANNER)),
        (t = (0, fq.mb)(fQ.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, _.bG)([fZ.A], () => fZ.A.getMarketingBySurface(fW.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: fK.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, fY.L_)();
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
            className: fJ.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: fJ.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: fJ.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: fJ.Em,
                    children: [
                        (0, p.jsx)(C.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: fJ.DD,
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
                            (0, fH.Cz)({
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
var f0 = n(451909),
    f1 = n(202639),
    f2 = n(285373),
    f3 = n(835071),
    f4 = n(724651),
    f5 = n(732280),
    f6 = n(590180),
    f8 = n(898461),
    f7 = n(469054),
    f9 = n(601298),
    _e = n(207803),
    _t = n(461797);
let _n = Object.keys(_t.jB);
function _i(e) {
    let t = null == e ? _n : _n.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var _l = n(201805),
    _s = n(221650);
function _r(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion),
        l = (0, _l.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = f.useMemo(() => {
            let e = (0, _t.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: _s.kL,
        children: [
            (0, p.jsx)(n5.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                className: _s.x6,
                "aria-label": V.intl.string(V.t["44yJxh"]),
                children: l.render(),
            }),
            (0, p.jsxs)(n5.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                "aria-label": `${s}: ${V.intl.string(V.t["44yJxh"])}`,
                className: _s.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: _s.L_ }),
                    (0, p.jsx)(n4.E, {
                        className: _s._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var _a = n(511484),
    _o = n(811611),
    _u = n(206697),
    _d = n(507553);
function _c(e, t) {
    let n = _d.A.useField("scrollPosition"),
        i = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion);
    (0, f.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            (l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), _d.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var _g = n(844222),
    _m = n(842092);
let _A = "/assets/d4955aabdcb5bdee.png",
    _E = { assetOrigin: f7.E.NEW_ASSET, imageUri: _A, staticImageUri: _A, description: "", originalAsset: void 0 };
function _h(e) {
    let { user: t } = e,
        { reducedMotion: n } = f.useContext(_g.C),
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
        } = (0, _.cf)([pL.A], () => {
            let e = pL.A.getPendingChanges(),
                t = pL.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, pB.V7)({ userId: t.id, image: g ?? i });
    return (0, p.jsx)(pF.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? l ?? _E,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : _m.WX,
        containerClassName: _m.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var _S = n(829497);
function _x(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = aC.Ay.isPremium(t),
        s = aC.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, _.cf)([pL.A], () => {
            let e = pL.A.getPendingChanges(),
                t = pL.A.getErrors(),
                n = pL.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, f.useState)(_i()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, f.useMemo)(() => {
                    let t = (0, _t.Wt)(e);
                    return {
                        banner: (0, f9.X)({
                            assetOrigin: f7.E.NEW_ASSET,
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
                r = (0, _.bG)([f6.A], () => {
                    let e = f6.A.getProduct(l);
                    return (0, f8.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, f.useEffect)(() => {
                (0, _e.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, f.useCallback)(() => {
                let n = _i(e);
                (t(n), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = f.useRef(null);
    _c(m, eL._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, eX.Ay)(tk.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, _u.T)(), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
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
    let S = (0, f5.V)()?.subscriptionTrial?.skuId === tJ.pe.TIER_2,
        x = (0, f4.O)(),
        T = (0, _a.U9)(x, tJ.pe.TIER_2);
    return i
        ? (0, p.jsx)(eX.f5, {
              value: A,
              children: (0, p.jsxs)(cl.A, {
                  ref: m,
                  className: _S.MT,
                  type: cl.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(pw, {
                          stickyPreview: !1,
                          layoutClassName: _S.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(am.t, { size: "md", color: "currentColor", className: _S.PC }),
                                  V.intl.string(V.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(_r, { preset: c, onShuffle: g }), (0, p.jsx)(_h, { user: t })],
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
                                              className: _S.h_,
                                              variant: "text-sm/normal",
                                              children: V.intl.string(V.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(fv, {
                                      className: _S.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, pB.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: _e.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(fc, {
                                      className: _S.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: _e.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, p.jsx)(fl, {
                                          className: _S.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: _e.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: V.intl.string(V.t["7z0D1c"]),
                                          sectionTitle: V.intl.string(V.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(fr, { user: t, className: _S.fz }),
                                  !S &&
                                      (0, p.jsx)(n4.E, {
                                          variant: "text-sm/normal",
                                          children: V.intl.string(V.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !S &&
                          (0, p.jsx)(f1.d, {
                              onSubscribeModalClose: h,
                              className: _S.Kv,
                              showUpsell: !0,
                              text: V.intl.format(V.t.TmfgI2, {
                                  onClick: () => {
                                      (0, f3.K)({ onSubscribeFinish: h });
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
                                  (0, p.jsx)("div", { className: _S.BU }),
                                  (0, p.jsx)(_o.Ay, {
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
var _T = n(814390),
    _p = n(643056),
    _f = n(843282),
    __ = n(145497),
    _I = n(685073),
    _N = n(534400),
    _C = n(581781),
    _b = n(743981),
    _y = n(195801);
let _v = (0, tK.Ld)(),
    _j = f.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, _.cf)([sx.default], () => (0, _I.Zo)(sx.default.getCurrentUser()?.primaryGuild)),
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
                        : (0, p.jsx)(_C.A, {
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
                        : (0, p.jsx)(__.j, {
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
                        : (0, p.jsx)(_N.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: _b.Sl.SIZE_16,
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
            _c(h, eL._F.GUILD_TAG),
            (0, p.jsxs)(ah.A, {
                title: V.intl.string(V.t.Pdd1nd),
                titleId: _v,
                ref: h,
                children: [
                    (0, p.jsx)(n4.E, {
                        className: _y.VA,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(_f.Pw, {
                        className: _y.Lt,
                        optionClassName: _y.S0,
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
var _O = n(318785),
    _L = n(470739);
let _R = function () {
    return (0, _p.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, p.jsx)(ah.A, {
              title: V.intl.string(V.t.l6w3Vj),
              description: V.intl.string(V.t.joHqdj),
              children: (0, p.jsx)(j.$, {
                  text: V.intl.string(V.t.wRraFx),
                  onClick: () => {
                      (0, _L.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var _D = n(953726);
let _P = (0, tK.Ld)();
function _G(e) {
    let t = (0, xu.L)(tJ.PremiumTypes.TIER_2);
    return (0, p.jsxs)(ah.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: V.intl.string(V.t["9AjdkD"]),
        titleId: _P,
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(lp.k, {
                    "aria-labelledby": _P,
                    placeholder: e.placeholder,
                    maxLength: I.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(fr, { user: e.user, className: _D.F }),
        ],
    });
}
var _M = n(376626);
function _U(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = U.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, p.jsx)("div", {
        className: _M.u,
        children: (0, p.jsx)(t5.d, {
            label: V.intl.string(V.t["3cWDuO"]),
            description: l ? null : V.intl.formatToPlainString(V.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, pj._e)() : (0, p7.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function _V(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, fx.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, fT.rh)(s, r, !1),
        o = (0, fI.LX)(a[0]);
    return (0, p.jsx)(ah.A, {
        title: V.intl.string(V.t["/X3fkf"]),
        children: (0, p.jsx)(fb, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var _k = n(518477);
let _w = function () {
    let e = (0, _.bG)([cS.default], () => cS.default.getId());
    return (0, p.jsx)(ah.A, {
        title: V.intl.string(V.t.Jzj9q4),
        children: (0, p.jsx)(j.$, {
            text: V.intl.string(V.t.Geikwq),
            onClick: () => {
                (0, pD.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tk.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: _k.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var _F = n(654910);
function _B() {
    let e = (0, _.bG)([sx.default], () => {
            let e = sx.default.getCurrentUser();
            return (tE()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, _.bG)([pz.A], () => pz.A.getUserProfile(e.id)),
        n = (0, _p.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, _.cf)([pL.A], () => {
            let e = pL.A.getPendingChanges(),
                t = pL.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, pB.V7)({ userId: e.id, image: i }),
        A = (0, pW.EC)(),
        E = aC.Ay.canUsePremiumProfileCustomization(e),
        h = (0, pU.z5)(i, e.avatar),
        S = (0, pU.Ac)(s, t?.banner),
        x = (0, fp.Ay)(e.id),
        T = x?.getLegacyUsername(),
        f = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        I = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, _O.b)(),
        C = null != (0, _I.Zo)(e.primaryGuild).guildId;
    return (0, p.jsxs)("div", {
        className: _F.Q,
        children: [
            (0, p.jsx)(_G, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: l,
                onGlobalNameChange: (e) => (0, p7.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                fj,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, p7.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(_w, {}),
            (0, p.jsx)(
                fl,
                {
                    onAvatarChange: (e) => {
                        ((0, p7.p)({ avatar: e }), (0, pU.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: V.intl.string(V.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, p.jsx)(fe, { user: e, sectionTitle: V.intl.string(V.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(fu, { user: e }),
            (0, p.jsx)(fA, { user: e, sectionTitle: V.intl.string(V.t.wR5wOo) }, "effect"),
            (0, p.jsx)(fS, { user: e, sectionTitle: V.intl.string(V.t.GWrZOd) }, "frame"),
            E
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              fc,
                              {
                                  showRemoveBannerButton: S,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, p7.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(fv, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, p7.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      _V,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, p7.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
                p5,
                {
                    sectionTitle: V.intl.string(V.t.ZzAR2Y),
                    errors: I,
                    onBioChange: (e) => (0, p7.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, p.jsx)(_j, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, p7.p)({ primaryGuildId: e }),
                }),
            null != T &&
                !n &&
                (0, p.jsx)(_U, { legacyUsername: T, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, p.jsx)(_R, {}, "badges"),
        ],
    });
}
function _z() {
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
var _X = n(447080);
function _Y() {
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
        } = (0, _.cf)([pL.A], () => ({ ...pL.A.getPendingChanges(), showNotice: pL.A.showNotice() })),
        a = (0, pB.V7)({ userId: e.id, image: i }),
        o = (0, pU.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, _T.A)() && null != n ? f0.Ay.parse(void 0, n).content : n,
        d = aC.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eX.Ay)(tk.A.USER_SETTINGS_USER_PROFILE);
    f.useEffect(() => pj.IM, []);
    let [g, m] = f.useState(!1),
        A = !d,
        E = f.useRef(null);
    return t
        ? (0, p.jsx)(of.A, {})
        : (0, p.jsxs)(eX.f5, {
              value: c,
              children: [
                  (0, p.jsx)(f$, {}),
                  (0, p.jsx)(pw, {
                      profilePreview: (0, p.jsx)(pF.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: _z,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: _X.ti,
                      }),
                      nameplatePreview: (0, p.jsx)(pM.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? _X.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(_B, {}),
                  }),
                  (0, p.jsx)(c5.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, p.jsx)("div", {
                          ref: E,
                          children: (0, p.jsx)(_x, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !s &&
                      (0, p.jsx)(f1.d, {
                          className: _X.EL,
                          showUpsell: !g,
                          text: V.intl.format(V.t.TmfgI2, { onClick: () => (0, f3.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, p.jsx)(f2.l, {
                              size: "md",
                              location: tk.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, p.jsx)("div", {
                              className: _X.Xl,
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
var _H = n(625494);
n(46121);
var _W = n(944983);
let _K = { [eL.Eq.USER_PROFILE]: "main_profile_tab", [eL.Eq.GUILD]: "guild_profile_tab" },
    _Z = (0, h.E2)(S.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, _.bG)([lj.A, g0.Ay, pL.A], () => {
                    let e = pL.A.selectedGuildId ?? lj.A.getGuildId();
                    return null == e || pL._.has(e) ? g0.Ay.getFlattenedGuildIds().find((e) => !pL._.has(e)) : e;
                }),
                t = (0, _.bG)([lv.A], () => lv.A.getGuild(e)),
                n = (0, _.bG)([pL.A], () => pL.A.showNotice()),
                i = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
                l = _d.A.useField("subsection");
            return (
                f.useEffect(() => {
                    (0, it._)(_K[l]);
                }, [l]),
                f.useEffect(() => {
                    null != i && t?.id != null && (0, fB.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, p.jsx)(fX, {
                    children: (0, p.jsxs)(uB.F, {
                        component: (0, p.jsx)(lm.A, {
                            children: (0, p.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(V.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, p.jsxs)(pP.V, {
                                className: _W.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                _H._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eL.Eq.GUILD && null != t && (0, pG.V2)(t.id),
                                            _d.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, p.jsx)(
                                        pP.V.Item,
                                        {
                                            className: _W.YU,
                                            id: eL.Eq.USER_PROFILE,
                                            children: V.intl.string(V.t["2p07FR"]),
                                        },
                                        eL.Eq.USER_PROFILE,
                                    ),
                                    (0, p.jsx)(
                                        pP.V.Item,
                                        {
                                            className: ic()(_W.YU, _W.HY),
                                            "aria-label": V.intl.string(V.t.kPHroX),
                                            id: eL.Eq.GUILD,
                                            children: V.intl.string(V.t.kPHroX),
                                        },
                                        eL.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eL.Eq.GUILD
                                ? (0, p.jsx)(fF, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                  _H._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, pG.JJ)(e.id);
                                      },
                                  })
                                : (0, p.jsx)(_Y, {}),
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
    _q = (0, h.zZ)(S.X.PROFILE_CATEGORY, { buildLayout: () => [_Z] });
var _Q = n(379633);
function _J() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, gu.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return null == e
        ? null
        : (0, p.jsxs)("div", {
              className: _Q.a5,
              children: [
                  (0, p.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: v._3.SIZE_48,
                      "aria-label": V.intl.string(V.t.lqaIxI),
                  }),
                  (0, p.jsxs)("div", {
                      className: _Q.FS,
                      children: [
                          (0, p.jsx)(n4.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, p.jsxs)("div", {
                              className: _Q.Fk,
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
let _$ = (0, h.t_)(S.X.PROFILE_PANEL, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        notice: { stores: [pL.A], element: pO.A },
        initialize: () => pj.F7,
        buildLayout: () => [_q],
    }),
    _0 = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _2,
        StronglyDiscouragedCustomComponent: _J,
        usePredicate: () => !(0, pR.X)("user_settings_sidebar"),
        buildLayout: () => [_$],
    }),
    _1 = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _2,
        StronglyDiscouragedCustomComponent: _J,
        usePredicate: () => (0, pR.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cS.default.getId();
            (0, pD.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function _2() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, gu.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return (0, p.jsx)(y.eu, { src: t, avatarDecoration: n, size: v._3.SIZE_20, "aria-hidden": !0 });
}
let _3 = (0, h.WI)(S.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [_0, _1] });
var _4 = n(98207);
n(204925);
let _5 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, lT.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, p.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? u3.tE : null, onCloseCallback: t },
    );
};
var _6 = n(940856),
    _8 = n(506775),
    _7 = n(379257),
    _9 = n(121780),
    Ie = n(666113);
function It() {
    let e = _9.A.getCountryCode(),
        t = null != e ? Ie.IN[e.alpha2] : void 0;
    _7.A.openUrl(eb.A.getArticleURL(t ?? Ie.k9));
}
var In = n(521169);
function Ii() {
    return (0, In.w)(Ie.Vc);
}
var Il = n(83154);
function Is() {
    let e = Ii(),
        t = (0, _8.ZP)();
    if (!e) return null;
    switch (t) {
        case _8.M$.ADULT:
            return V.intl.format(Il.default.gi4ulu, { handleOnAgeGatedContentHook: _8.M0 });
        case _8.M$.TEEN:
            return V.intl.format(Il.default["221iML"], {
                handleOnAgeGatedContentHook: _8.M0,
                handleOnConfirmAgeHook: _8.aP,
            });
        case _8.M$.UNVERIFIED:
            return V.intl.format(Il.default["W0/7DD"], {
                handleOnAgeGatedContentHook: It,
                handleOnConfirmAgeHook: _8.aP,
            });
    }
}
var Ir = n(26137),
    Ia = n(957485);
function Io() {
    let e = Ii(),
        t = (0, _8.ZP)();
    return e ? { icon: t === _8.M$.ADULT ? Ir.r : Ia.i, backgroundColor: n1.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function Iu() {
    let e = Io();
    return null != e ? { type: T.hp.ICON, ...e } : null;
}
function Id() {
    return Ii() ? V.intl.string(V.t.piqs0o) : null;
}
var Ic = n(438140);
let Ig = [{ badgeType: T.Xi.NEW, dismissibleContent: eE.M.TINY_BRONCO_SETTINGS }],
    Im = [];
function IA() {
    return (0, Ic.Wt)() ? Ig : Im;
}
var IE = n(36149),
    Ih = n(207560),
    IS = (((m = {}).LEGACY = "legacy"), (m.TINY_BRONCO = "tinyBronco"), m),
    Ix = (((A = {}).VERIFY = "verify"), (A.EDIT = "edit"), (A.INFO = "info"), A);
function IT(e, t) {
    let n = (0, _.bG)([sx.default], () => null != sx.default.getCurrentUser()),
        i = (0, Ih.fk)(),
        l = (0, _8.ZP)(),
        s = (0, IE.Y2)(),
        r = Ii();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (l) {
        case _8.M$.UNVERIFIED:
            return "verify" === e;
        case _8.M$.TEEN:
            return e === (r ? "info" : "verify");
        case _8.M$.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var Ip = n(418528);
function If() {
    let e = (0, _8.hD)();
    return (0, p.jsxs)(n4.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, V.intl.format(Ip.default.WM5adV, { handleOnHelpUrlHook: _8.M0 })],
    });
}
let I_ = {
        useTitle: () => Id() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Is,
        useVariant: () => "secondary",
        useLeadingDecoration: Iu,
        getDismissibleBadges: IA,
        useTrailingDecoration: () => ({
            type: T.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: If,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        onClick: function () {
            (0, lT.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    },
    II = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...I_, usePredicate: () => IT(Ix.EDIT, IS.LEGACY) }),
    IN = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...I_,
        usePredicate: () => IT(Ix.EDIT, IS.TINY_BRONCO),
        useAriaLabel: () => V.intl.string(V.t.pBMSie),
    }),
    IC = {
        useTitle: () => Id() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Is,
        useLeadingDecoration: function () {
            let e = Io();
            return null != e ? { type: T.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: IA,
        useTrailingDecoration: () => ({ type: T.Ln.TEXT, text: (0, _8.hD)() }),
    },
    Ib = (0, h.v_)(S.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...IC, usePredicate: () => IT(Ix.INFO, IS.LEGACY) }),
    Iy = (0, h.v_)(S.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...IC,
        usePredicate: () => IT(Ix.INFO, IS.TINY_BRONCO),
    }),
    Iv = {
        useTitle: () => Id() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: Is,
        useVariant: () => "secondary",
        useLeadingDecoration: Iu,
        getDismissibleBadges: IA,
        useTrailingDecoration: () => ({ type: T.fq.TEXT, text: (0, _8.hD)() }),
        useLabel: function () {
            return (0, IE.yM)() ? V.intl.string(V.t["9KiIz6"]) : V.intl.string(V.t.DVywUB);
        },
        onClick: _8.aP,
    },
    Ij = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...Iv, usePredicate: () => IT(Ix.VERIFY, IS.LEGACY) }),
    IO = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...Iv,
        usePredicate: () => IT(Ix.VERIFY, IS.TINY_BRONCO),
    }),
    IL = [Ij, II, Ib],
    IR = [IO, IN, Iy],
    ID = (0, h.Tf)(S.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => V.intl.string(V.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: T.fq.TEXT, text: V.intl.string(V.t.qxk9zo) }),
        useLabel: () => V.intl.string(V.t.BleMPB),
        onClick: () => _5(),
    });
function IP(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function IG(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function IM(e) {
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
            (0, p.jsx)(h4.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
            }),
        ],
    });
}
function IU() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(n4.E, { variant: "text-md/medium", children: V.intl.string(V.t["8SfTN/"]) })
        : (0, p.jsx)(IM, {
              text: e,
              censor: IG,
              revealLabel: V.intl.string(V.t["Zvx+yV"]),
              hideLabel: V.intl.string(V.t.nqTD4d),
          });
}
let IV = (0, h.Tf)(S.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: T.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: IU }),
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
var Ik = n(557722),
    Iw = n(53516);
function IF() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(n4.E, { variant: "text-md/medium", children: V.intl.string(V.t.I5kDqj) })
        : (0, p.jsx)(q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(IM, {
                  text: t,
                  censor: IP,
                  revealLabel: V.intl.string(V.t.eY3xlT),
                  hideLabel: V.intl.string(V.t["jllbv+"]),
              }),
          });
}
let IB = (0, h.Tf)(S.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.kerONq),
    useAriaLabel: function () {
        return null == (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t["SfUuE+"])
            : V.intl.string(V.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: T.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: IF }),
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
                      return (t) => (0, p.jsx)(e, { reason: Ik.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: Iw.V },
              )
            : (0, lT.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function Iz() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function IX() {
    let e = (0, pW.EC)(),
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
let IY = (0, h.Tf)(S.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => V.intl.string(V.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: T.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: IX,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        useAriaLabel: () => V.intl.string(V.t.JECa91),
        useSubtitle: () => (Iz() ? V.intl.string(V.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: Iz,
        onClick: function () {
            (0, lT.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    IH = (0, h.zZ)(S.X.ACCOUNT_INFO_CATEGORY, {
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
                            button: { text: V.intl.string(V.t.lm1UKt), onClick: () => (0, _6.S)(e) },
                        }
                  : {
                        type: T.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
                        title: V.intl.string(V.t["/3qnL/"]),
                        text: V.intl.string(V.t.qKs3vg),
                        button: { text: V.intl.string(V.t["7psymi"]), onClick: () => _5() },
                    };
        },
        buildLayout: () => [IY, ID, IV, IB, ...IL],
    });
var IW = n(398177);
let IK = (0, h.Tf)(S.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => V.intl.string(V.t["CIGa+7"]),
    useLabel: () => V.intl.string(V.t.bt75uw),
    useAriaLabel: () => V.intl.string(V.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, lT.openModal)((e) => (0, p.jsx)(IW.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var IZ = n(200921);
let Iq = [];
function IQ() {
    Iq = [];
}
class IJ extends _.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return Iq;
    }
}
let I$ = new IJ(ts.h, {
    LOGOUT: IQ,
    LOGIN_SUCCESS: IQ,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        Iq = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...Iq],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        Iq = n;
    },
});
function I0() {
    let e = (0, _.cf)([I$], () => I$.getSessions());
    return f.useMemo(() => {
        let t = [...e],
            n = null,
            i = cS.default.getAuthSessionIdHash();
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
function I1(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? V.intl.string(V.t.TXCmfL) : im()(e).fromNow();
}
var I2 = n(176524),
    I3 = n(646270),
    I4 = n(738678),
    I5 = n(489828);
function I6(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, p.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(I2.A, { icon: t, color: r ? n1.A.colors.ICON_MUTED : "currentColor" }),
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
function I8(e) {
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
                            return { text: V.intl.string(V.t.cDHCNY), icon: dY.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: I3.u };
                        case "horizon os":
                            return { text: e, icon: I4.G };
                        default:
                            return { text: e, icon: dY.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : I1(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(io.Vq);
    return (0, p.jsx)(I6, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, p.jsx)(n5.D, {
                className: I5.X,
                onClick: () => (0, IZ.U0)(t.id_hash),
                "aria-label": V.intl.string(V.t.E4MJNt),
                children: (0, p.jsx)(dl.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function I7(e) {
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
let I9 = (0, h.E2)(S.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = I0();
            return null == e
                ? (0, p.jsx)(oD.y, {})
                : (0, p.jsx)(I7, {
                      title: V.intl.string(V.t.LLS19o),
                      children: (0, p.jsx)(I8, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    Ne = (0, h.E2)(S.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = I0();
            return (0, p.jsx)(lu.D, {
                label: V.intl.string(V.t.Vij32M),
                description: V.intl.string(V.t.OTXyaf),
                children: (0, p.jsx)(j.$, {
                    onClick: () => (0, IZ.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: V.intl.string(V.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = I0();
            return e.length > 0;
        },
    });
var Nt = n(766928);
function Nn() {
    return (0, p.jsx)(I6, {
        icon: Nt.W,
        label: V.intl.string(V.t.iUa0sn),
        description: V.intl.format(V.t["044+8i"], {
            onClick: () =>
                (0, na.openUserSettings)(S.X.ACCOUNT_PANEL, { analyticsLocations: [tk.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let Ni = (0, h.E2)(S.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = I0(),
                t = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return (0, p.jsxs)(I7, {
                title: V.intl.string(V.t.xx1MWc),
                children: [
                    e.map((e) => (0, p.jsx)(I8, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, p.jsx)(Nn, {}),
                ],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = I0(),
                t = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    Nl = (0, h.zZ)(S.X.SESSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useSubtitle: () => V.intl.string(V.t.b7ZpTM),
        initialize: () => {
            (0, IZ.GY)();
        },
        buildLayout: () => [I9, Ni, Ne],
        useSearchTerms: () => [
            V.intl.string(V.t["+1h0k/"]),
            V.intl.string(V.t.LLS19o),
            V.intl.string(V.t.xx1MWc),
            V.intl.string(V.t.lSWsrd),
        ],
    }),
    Ns = (0, h.t_)(S.X.SESSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useObscuredNotice: of.L,
        buildLayout: () => [Nl],
    }),
    Nr = (0, h.t0)(S.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [Ns],
        initialize: () => {
            (0, IZ.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = I0(),
                n = t.length + +(null != e);
            return {
                type: T.xn.TEXT,
                text: n > 0 ? V.intl.formatToPlainString(V.t.G7zwOk, { count: n }) : V.intl.string(V.t.MKDeyL),
            };
        },
    });
var Na = n(464477);
function No(e) {
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
function Nu() {
    return (0, ou.bG)([sx.default], () => {
        let e = sx.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var Nd =
    (((E = {}).AVAILABLE = "available"),
    (E.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (E.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    E);
function Nc() {
    let e = (0, ou.bG)([sx.default], () => sx.default.getCurrentUser()?.verified);
    return Na.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function Ng() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, ou.bG)([lv.A, fL.A, sx.default], () =>
        sx.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? V.intl.string(V.t.hxf9fX)
                : V.intl.string(V.t["3iKih7"])
            : lv.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        fL.A.can(I.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? V.intl.string(V.t.OYTCUh)
                  : V.intl.string(V.t.HC8uSZ)
              : null,
    );
}
var Nm = n(466034),
    NA = n(705147);
let NE = (0, h.Tf)(S.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
    useTitle: () => V.intl.string(V.t.lQsY7B),
    useSubtitle: () => Ng(!0),
    useDisabled: () => null !== Ng(!0),
    useLabel: () => V.intl.string(V.t.N86XcP),
    useVariant: () => "critical-secondary",
    usePredicate: () => {
        let e = (0, _.bG)([cS.default], () => cS.default.hasTOTPEnabled()),
            t = Nc() === Nd.AVAILABLE;
        return e && t;
    },
    onClick: () => Nh(),
});
async function Nh() {
    let e = (await (0, NA.k)("totp")) ? V.t.xlA7Tl : V.t.EA4ZEk;
    (0, n2.A)({
        title: V.intl.string(V.t["D+aE7g"]),
        subtitle: V.intl.string(e),
        variant: "critical",
        confirmText: V.intl.string(V.t.N86XcP),
        onConfirm: () => _4.A.disable(),
    });
}
let NS = (0, h.zZ)(S.X.AUTHENTICATOR_APP_CATEGORY, {
    useTitle: () => V.intl.string(V.t.RumMFo),
    useSubtitle: () => V.intl.string(V.t.iTbTo7),
    useHeaderDecoration: function () {
        let e = (0, _.bG)([cS.default], () => cS.default.hasTOTPEnabled()),
            t = Nc() === Nd.AVAILABLE;
        if (!e && t)
            return {
                type: T.WX.BUTTON_GROUP,
                buttons: [
                    {
                        type: T.UV.BUTTON,
                        id: "mfa-setup-button",
                        text: V.intl.string(V.t.cTNUeD),
                        onClick: Nm.Ay.enableMFA,
                    },
                ],
            };
    },
    useInlineNotice: function () {
        switch (Nc()) {
            case Nd.UNAVAILABLE_NO_CRYPTO:
                return { type: T.lT.INLINE_NOTICE, noticeType: "info", role: "none", text: V.intl.string(V.t.PhHhsj) };
            case Nd.UNAVAILABLE_UNVERIFIED:
                return {
                    type: T.lT.INLINE_NOTICE,
                    noticeType: "warning",
                    role: "none",
                    text: V.intl.string(V.t.uggF7o),
                };
            case Nd.AVAILABLE:
                return;
        }
    },
    collapseOnEmpty: !1,
    buildLayout: () => [NE],
});
var Nx = n(670492),
    NT = n(32880),
    Np = n(663417),
    Nf = n(658675),
    N_ = n(900686);
function NI() {
    (0, lT.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    _4.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
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
var NN = n(858487);
function NC(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function Nb() {
    let e = Nx.A.getVerificationKey();
    if ("" === e) return void NI();
    try {
        await _4.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, sg.P0)({ text: e.body?.message ?? V.intl.string(V.t.F8FvUy), variant: "critical" });
    }
}
function Ny(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = NC(t),
        l = f.useRef(null),
        s = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(Nf.P, { checked: n }), (0, p.jsx)(n4.E, { variant: "text-md/normal", children: i })],
        });
    return uz.p5
        ? (0, p.jsx)(n5.D, {
              tag: "li",
              className: ic()(NN.aY, NN.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uz.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  ((0, uz.C)(i), (0, sg.P0)({ text: V.intl.string(V.t.mGZ66D), variant: "success" }));
              },
              children: s,
          })
        : (0, p.jsx)("li", { className: NN.aY, children: s });
}
let Nv = (0, h.zZ)(S.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.fC9qV0),
        useSubtitle: () =>
            (0, _.bG)([Nx.A], () => Nx.A.getBackupCodes().length > 0)
                ? V.intl.format(V.t.tp7zEK, {})
                : V.intl.string(V.t.LoOi4S),
        usePredicate: Nu,
        buildLayout: () => [Nj],
    }),
    Nj = (0, h.E2)(S.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.fC9qV0)],
        Component: function () {
            let e = (0, _.bG)([Nx.A], () => Nx.A.getBackupCodes()),
                t = f.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${NC(t)}` + (n ? ` (${V.intl.string(V.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(j.$, { text: V.intl.string(V.t.Jc2myK), size: "sm", variant: "secondary", onClick: NI })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: NN.E5,
                              children: e.map((e) => (0, p.jsx)(Ny, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(s8.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(N_.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(j.$, {
                                          text: V.intl.string(V.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: NT.DownloadIcon,
                                      }),
                                  }),
                                  (0, p.jsx)(j.$, {
                                      text: V.intl.string(V.t["3x962E"]),
                                      variant: "secondary",
                                      icon: Np.RefreshIcon,
                                      onClick: Nb,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    NO = (0, h.Tf)(S.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = f.useState(!1),
                n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : V.intl.format(e ? V.t["xDBk/I"] : V.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, p.jsx)(h4.Q, {
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
                        handleSubmit: _4.A.disableSMS,
                        title: V.intl.string(V.t.KLWnit),
                        children: V.intl.string(V.t["W0/Duf"]),
                    });
            }),
    }),
    NL = (0, h.zZ)(S.X.SMS_AUTH_CATEGORY, {
        useTitle: () => V.intl.string(V.t.wuHuI5),
        useSubtitle: () => (0, _.bG)([sx.default], () => No(sx.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
                t = (0, _.bG)([sx.default], () => null != No(sx.default.getCurrentUser()));
            if (!e)
                return {
                    type: T.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: T.UV.BUTTON,
                            id: "sms-setup-button",
                            text: V.intl.string(V.t.Age7yU),
                            onClick: NR,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = Nc(),
                t = Nu(),
                n = (0, _.bG)([cS.default], () => cS.default.hasTOTPEnabled());
            return e === Nd.AVAILABLE && t && n;
        },
        buildLayout: () => [NO],
    });
function NR() {
    let e = sx.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: Ik.d.USER_SETTINGS_UPDATE, onAddedPhone: _4.A.enableSMS }),
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
                    { modalKey: Iw.V },
                ));
        } else _4.A.enableSMS();
}
var ND = n(665671),
    NP = n(442433),
    NG = n(917136),
    NM = n(976910),
    NU = n(267255);
function NV(e) {
    let { credential: t } = e;
    return (0, p.jsxs)("li", {
        className: NU.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(n4.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(n4.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: V.intl.format(V.t["7JgxF5"], { lastUsed: I1(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(ld.K, {
                icon: g5.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": V.intl.string(V.t["+nrTbK"]),
                onClick: (e) => {
                    (0, NP.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, p.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let Nk = (0, h.zZ)(S.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.IBq4Y3),
        useSubtitle: () => V.intl.string(V.t.yK9edS),
        useHeaderDecoration: function () {
            if (Nc() === Nd.AVAILABLE)
                return {
                    type: T.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: T.UV.BUTTON,
                            id: "add-security-key-button",
                            text: V.intl.string(V.t["Tzs/fw"]),
                            icon: iH.j,
                            onClick: ND.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (Nc()) {
                    case Nd.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: T.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: V.intl.string(V.t.bWCGI9),
                        };
                    case Nd.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: T.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: V.intl.string(V.t.uggF7o),
                        };
                    case Nd.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Nw],
    }),
    Nw = (0, h.E2)(S.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [V.intl.string(V.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, _.cf)([NM.A], () => ({
                hasFetchedCredentials: NM.A.hasFetchedCredentials(),
                credentials: NM.A.getCredentials(),
            }));
            return (f.useEffect(() => {
                t || NG.JQ();
            }, [t]),
            t)
                ? (0, p.jsx)(q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(NV, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(oD.y, {});
        },
    }),
    NF = (0, h.t_)(S.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => V.intl.string(V.t.m0FidJ),
        buildLayout: () => [Nk, NS, NL, Nv],
    }),
    NB = (0, h.t0)(S.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = Nu();
            return { type: T.xn.TEXT, text: e ? V.intl.string(V.t.lQsY7B) : V.intl.string(V.t.WsUuTt) };
        },
        buildLayout: () => [NF],
    }),
    Nz = (0, h.zZ)(S.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["0iH2vc"]),
        buildLayout: () => [IK, NB, Nr],
    }),
    NX = { [_8.M$.ADULT]: Il.default.PMznGO, [_8.M$.TEEN]: Il.default.qSkhZH, [_8.M$.UNVERIFIED]: Il.default.vGxRDB },
    NY = [eE.M.TINY_BRONCO_NOTICE],
    NH = [];
function NW() {
    _7.A.openUrl(Ie.m5);
}
var NK = n(308645),
    NZ = n(555725),
    Nq = n(855267);
let NQ = (0, h.E2)(S.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["16r9jm"])],
        Component: Nq.A,
    }),
    NJ = (0, h.zZ)(S.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [NQ] }),
    N$ = (0, h.t_)(S.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        buildLayout: () => [NJ],
    }),
    N0 = (0, h.t0)(S.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        useSubtitle: NZ.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, NZ._k)();
            return { type: T.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: T.xn.TEXT, text: (0, NZ.aO)() };
        },
        initialize: () => {
            NK.Yn();
        },
        buildLayout: () => [N$],
    }),
    N1 = (0, h.zZ)(S.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (Ii() ? V.intl.string(V.t.GI2mea) : null) ?? V.intl.string(V.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, Ic.LH)(),
                t = (0, _8.ZP)(),
                [n, i] = (0, m2.kn)(e ? NY : NH);
            return e && null != n
                ? {
                      type: T.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: V.intl.format(NX[t], { handleOnBlogHook: NW }),
                      onDismiss: () => i(Ae.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...IR, N0],
    });
var N2 = n(738188),
    N3 = n(834981),
    N4 = n(987197),
    N5 = n(822585),
    N6 = n(840387),
    N8 = n(41446),
    N7 = n(83152);
let N9 = (0, h.E2)(S.X.FAMILY_CENTER_SETTING, {
        Component: N8.p,
        useSearchTerms: () => [
            V.intl.string(N7.default.RZqaJn),
            V.intl.string(N7.default.bdBmqy),
            V.intl.string(N7.default["gVWG+6"]),
            V.intl.string(N7.default.ahKIJO),
            V.intl.string(N7.default["8SLtqb"]),
        ],
    }),
    Ce = (0, h.zZ)(S.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [N9] }),
    Ct = (0, h.t_)(S.X.FAMILY_CENTER_PANEL, {
        useTitle: () => V.intl.string(N7.default.RZqaJn),
        buildLayout: () => [Ce],
    }),
    Cn = (0, h.zZ)(S.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => V.intl.string(N7.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, N4.f)(),
                t = (0, N5.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, N3.VT)();
            return f.useMemo(() => (n ? { badgeType: T.Xi.WARNING } : { badgeType: T.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [Ci],
    }),
    Ci = (0, h.t0)(S.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, N3.Li)() ? V.intl.string(N7.default.IcMQUP) : V.intl.string(N7.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, N6.Z)(),
                t = (0, N3.Li)();
            return e
                ? t
                    ? V.intl.string(N7.default.G8lHFU)
                    : V.intl.string(N7.default.uOLNEZ)
                : V.intl.string(N7.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, N4.f)(),
                t = (0, N5.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: T.Xy.ICON,
                      icon: N2.WarningIcon,
                      color: n1.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n1.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [Ct],
    });
var Cl = n(425587),
    Cs = n(662758);
function Cr(e) {
    if (e.body.code === I.t02.INVALID_PASSWORD) throw e;
    (0, s4.A)({ title: V.intl.string(V.t.LX0nT8), subtitle: e.body.message });
}
async function Ca() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = sx.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await Cl.A.fetchTeams(!0)).body;
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
                  (0, p.jsx)(Cs.default, {
                      ...t,
                      handleSubmit: (t) => (0, pj.U_)(t, e).then(I.tEg, Cr),
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
                  onConfirm: () => (0, pj.U_)("", !0),
              });
}
let Co = (0, h.Tf)(S.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => V.intl.string(V.t["gIpzR+"]),
        useSubtitle: () => V.intl.string(V.t.Bd6dOf),
        useLabel: () => V.intl.string(V.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Ca(!0),
    }),
    Cu = (0, h.Tf)(S.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => V.intl.string(V.t["p/Tjtp"]),
        useSubtitle: () => V.intl.string(V.t.YvDmKb),
        useLabel: () => V.intl.string(V.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Ca(!1),
        usePredicate: () => {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Cd = (0, h.zZ)(S.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Cu, Co] }),
    Cc = (0, h.t_)(S.X.ACCOUNT_PANEL, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (_4.A.clearBackupCodes(), (0, pj.Uo)());
            };
        },
        useObscuredNotice: of.L,
        buildLayout: () => [IH, Nz, N1, Cn, Cd],
    }),
    Cg = (0, h.i4)(S.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        icon: A1.UserIcon,
        buildLayout: () => [Cc],
    });
var Cm = n(176781),
    CA = n(341923),
    CE = n(572164),
    Ch = n(614584),
    CS = n(738935),
    Cx = n(185973);
let CT = (0, h.zD)(S.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => V.intl.string(Cx.default.j29uJx),
        useSubtitle: () => V.intl.format(Cx.default.UCzGcQ, { learnMoreLink: eb.A.getArticleURL(I.MVz.CLIPS) }),
        useValue: () => (0, _.bG)([CS.Ay], () => CS.Ay.getEnableAutoclipping()),
        setValue: Ch.uL,
        useDisabled: () => !(0, CE.E)(),
    }),
    Cp = (0, h.zY)(S.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [CT], headerSettingKey: CT.key }),
    Cf = (0, h.zZ)(S.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => V.intl.string(Cx.default.XWkJoi),
        useSubtitle: () => V.intl.string(Cx.default["MJ/VsO"]),
        usePredicate: CA.HN,
        usePersistentBadge: () => ({ badgeType: T.Xi.BETA }),
        useInlineNotice: () =>
            (0, CE.E)()
                ? null
                : {
                      type: T.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "status",
                      text: V.intl.string(Cx.default.wUpqua),
                      button: {
                          text: V.intl.string(Cx.default.qGgW4M),
                          onClick: () => Ch.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [Cp],
    });
var C_ = n(696016);
let CI = [C_.zq, 25, 50, C_.Y2, C_.rv],
    CN = (0, h.sN)(S.X.CLIPS_BITRATE, {
        useTitle: () => V.intl.string(V.t["8bZyov"]),
        useSubtitle: () => V.intl.string(V.t["h8DSx/"]),
        minValue: C_.zq,
        maxValue: C_.rv,
        useDefaultValue: () => C_.Y2,
        getInitialValue: () => CS.Ay.getSettings().clipsQuality.bitratePercent ?? C_.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = CS.Ay.getSettings();
            Ch.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: CI,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, CE.E)(),
    });
var CC = n(226640);
let Cb = (0, h.Hn)(S.X.CLIPS_FRAME_RATE, {
        useTitle: () => V.intl.string(V.t["2wScL1"]),
        useSubtitle: () => V.intl.string(V.t["Rf9+fy"]),
        useValue: () => (0, _.bG)([CS.Ay], () => CS.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = CS.Ay.getSettings();
            Ch.GS({ ...t, frameRate: e });
        },
        useOptions: CC.Fz,
        useDisabled: () => !(0, CE.E)(),
    }),
    Cy = (0, h.E2)(S.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [],
        usePredicate: () => (0, _.bG)([CS.Ay], () => CS.Ay.getHardwareClassification()) === C_.k9.BELOW_MINIMUM,
        Component: () => (0, p.jsx)(l9.A, { look: l9.k.WARNING, children: V.intl.string(V.t.SIxrIF) }),
    }),
    Cv = (0, h.Hn)(S.X.CLIPS_LENGTH, {
        useTitle: () => V.intl.string(V.t.OgfUio),
        useSubtitle: () => V.intl.string(V.t.H7j4tY),
        useValue: () => (0, _.bG)([CS.Ay], () => CS.Ay.getSettings().clipsLength),
        setValue: (e) => Ch.h$(e),
        useOptions: CC.Qu,
        useDisabled: () => !(0, CE.E)(),
    }),
    Cj = (0, h.E2)(S.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [],
        Component: () => (0, p.jsx)(l9.A, { look: l9.k.INFO, children: V.intl.string(V.t["Z+MfqT"]) }),
    }),
    CO = (0, h.Hn)(S.X.CLIPS_RESOLUTION, {
        useTitle: () => V.intl.string(V.t.aFudZJ),
        useSubtitle: () => V.intl.string(V.t.nIrkW5),
        useValue: () => (0, _.bG)([CS.Ay], () => CS.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = CS.Ay.getSettings();
            Ch.GS({ ...t, resolution: e });
        },
        useOptions: CC.gF,
        useDisabled: () => !(0, CE.E)(),
    }),
    CL = (0, h.zD)(S.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => V.intl.string(V.t["3zwNf6"]),
        useSubtitle: () => V.intl.string(V.t.m4Cjj9),
        useValue: () => (0, _.bG)([CS.Ay], () => CS.Ay.getSettings().remindersEnabled),
        setValue: (e) => Ch.Mt(e),
        useDisabled: () => !(0, CE.E)(),
    }),
    CR = (0, h.zZ)(S.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => V.intl.string(Cx.default.TGwzMe),
        buildLayout: () => [Cy, Cv, Cb, CO, CN, Cj, CL],
    }),
    CD = (0, h.zD)(S.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, _.bG)([CS.Ay], () => CS.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => Ch.YP(e),
    }),
    CP = (0, h.zD)(S.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, _.bG)([CS.Ay], () => CS.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => Ch.Uh(e),
    }),
    CG = (0, h.zZ)(S.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, _.bG)([sx.default], () => {
                let e = sx.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [CD, CP],
    });
var CM = n(417270),
    CU = n(847825);
let CV = (0, h.E2)(S.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t.pf54EU), V.intl.string(V.t["QyB/jK"])],
        Component: () => {
            let e = (0, _.bG)([la.Ay], () => la.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0));
            tE()(null != e, "Save clip keybind unset");
            let t = !(0, CE.E)(),
                n = f.useRef(null),
                i = f.useCallback(
                    (t) => {
                        iZ.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = f.useCallback(() => {
                    iZ.A.setKeybind({ ...e, shortcut: (0, lS.OH)(C_.Ot) });
                }, [e]);
            return (0, p.jsx)(lu.D, {
                label: V.intl.string(V.t.pf54EU),
                description: V.intl.string(V.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, p.jsx)("div", {
                    className: CU.g,
                    children: (0, p.jsx)(lh.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(lg.m, {
                                    text: V.intl.string(Cx.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, p.jsx)(ld.K, {
                                        icon: iW.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(Cx.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, p.jsx)(lg.m, {
                                    text: V.intl.string(Cx.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, p.jsx)(ld.K, {
                                        icon: CM.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(Cx.default.Kyk1Tp),
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
    Ck = (0, h.E2)(S.X.CLIPS_SCREENSHOT_KEYBIND, {
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
                    className: CU.g,
                    children: (0, p.jsx)(lh.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    Cw = (0, h.zD)(S.X.CLIPS_ENABLE, {
        useTitle: () => V.intl.string(V.t.h8rgrK),
        useSubtitle: () => V.intl.string(V.t["4Qw3NO"]),
        useValue: () => (0, CE.E)(),
        setValue: (e) => Ch.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    CF = (0, h.zY)(S.X.CLIPS_GENERAL_CARD, { buildLayout: () => [Cw, CV, Ck], headerSettingKey: Cw.key }),
    CB = (0, h.zZ)(S.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["rWKv+e"]),
        useSubtitle: () => V.intl.format(Cx.default["dh7g+S"], { learnMoreLink: eb.A.getArticleURL(I.MVz.CLIPS) }),
        buildLayout: () => [CF],
    }),
    Cz = (0, h.E2)(S.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [V.intl.string(V.t.s4773E), V.intl.string(V.t.svjwGh)],
        Component: () => {
            let e = (0, _.bG)([CS.Ay], () => CS.Ay.getSettings().storageLocation),
                t = !(0, CE.E)(),
                n = f.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nT.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && Ch.HU(e[0]);
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
                            text: V.intl.string(Cx.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    CX = (0, h.zZ)(S.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => V.intl.string(Cx.default["0Q+pdZ"]),
        buildLayout: () => [Cz],
    }),
    CY = (0, h.t_)(S.X.CLIPS_PANEL, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        usePredicate: lW.sw,
        buildLayout: () => [CB, Cf, CR, CX, CG],
    }),
    CH = (0, h.i4)(S.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        icon: Cm.x,
        buildLayout: () => [CY],
    });
var CW = n(254138),
    CK = n(290595),
    CZ = n(677166),
    Cq = n(410310),
    CQ = n(405018),
    CJ = n(502209);
let C$ = "user_settings_data_usage",
    C0 = [
        (0, h.zD)("pinot_member_setting", {
            useTitle: () => V.intl.string(CJ.default.M33rl6),
            useSubtitle: () =>
                V.intl.format(CJ.default.V0EPTo, {
                    learnMoreURL: eb.A.getArticleURL(I.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            usePredicate: () => (0, CZ.Zd)(C$),
            useValue: () => !(0, Cq.p)().optedOut,
            setValue: (e) => {
                Cq.N.updateSetting(!e);
            },
            useDisabled: function () {
                return (0, Cq.p)().locked;
            },
            useDisabledMessage: () =>
                V.intl.format(CJ.default.Z9bKIJ, {
                    learnMoreURL: eb.A.getArticleURL(I.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            disabledMessageType: "info",
            getDismissibleBadges: () =>
                !(0, CZ.ws)(C$, { autoTrackExposure: !1 }) || CQ.A.isLocked()
                    ? []
                    : [{ badgeType: T.Xi.NEW, dismissibleContent: eE.M.PINOT_MEMBER_SETTING_NEW_BADGE }],
        }),
    ];
var C1 = n(153488),
    C2 = n(171316),
    C3 = n(327919),
    C4 = n(558001);
n(866945);
var C5 = n(835002);
function C6() {
    let e = (0, C2.uM)(),
        t = (0, N3.vx)(),
        n = f.useCallback(() => {
            ((0, C3.A)(t, tY.default, () =>
                (0, sg.P0)({
                    text: V.intl.formatToPlainString(N7.default.D1BwNC, { count: t.length }),
                    variant: "critical",
                }),
            ),
                (0, C4.N)(C5.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, C5.YX.LEARN_MORE));
        }, [t]),
        i = f.useCallback(() => {
            (0, C4.N)(C5.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, C5.YX.VIEWED);
        }, []);
    return f.useMemo(() => {
        if (e)
            return {
                type: T.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: V.intl.format(N7.default.i284fU, {
                    hook: (e, t) => (0, p.jsx)(nr.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let C8 = (0, h.zD)(S.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => V.intl.string(V.t.AGDDkH),
    useSubtitle: () => V.intl.string(V.t.kyo3dJ),
    useValue: () => U.Q$.useSetting(),
    setValue: (e) => Ch.eQ({ allowVoiceRecording: e }),
});
var C7 = n(157559),
    C9 = n(331887);
function be() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        t = (0, _.bG)([C9.A], () => C9.A.harvestType),
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
let bt = (0, h.Tf)(S.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => V.intl.string(V.t.qfFFos),
        useSubtitle: function () {
            let e = be();
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
        useDisabled: () => !be().allowed,
        useLoading: () => (0, _.bG)([C9.A], () => C9.A.requestingHarvest),
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
                            (0, pj.$I)(n)
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
                                            ? C7.A.show({
                                                  title: V.intl.string(V.t.i2iul5),
                                                  body: V.intl.string(V.t["6Nmv4i"]),
                                              })
                                            : C7.A.show({
                                                  title: V.intl.string(V.t.OjbtDm),
                                                  body: V.intl.string(V.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || V.intl.string(V.t["0F5Jyt"]);
                                        C7.A.show({ title: V.intl.string(V.t.OjbtDm), body: t });
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
    bn = (0, h.v_)(S.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => V.intl.string(V.t.D60Gfj),
        useSubtitle: () =>
            V.intl.format(V.t.dszICC, {
                onClickDisable: () => (0, na.openUserSettings)(S.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, na.openUserSettings)(S.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var bi = n(641216),
    bl = n(945810);
let bs = (0, bl.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function br() {
    let { enabled: e } = bs.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var ba = n(884705);
function bo() {
    return (0, _.bG)([ba.A], () => ba.A.isTogglesDisabled());
}
function bu() {
    return !U.vf.useSetting();
}
function bd(e) {
    U.vf.updateSetting(!e);
}
function bc() {
    let e = bo(),
        t = U.H1.useSetting(),
        n = (0, C2.uM)();
    return e || t || n;
}
let bg = (0, h.zD)(S.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["md5l4/"], { helpdeskArticle: eb.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !br(),
        useValue: bu,
        setValue: bd,
        useDisabled: bc,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    }),
    bm = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["2QFDU/"], { helpdeskArticle: eb.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: br,
        useValue: bu,
        setValue: bd,
        useDisabled: bc,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    });
function bA() {
    return !U.H1.useSetting();
}
function bE(e) {
    U.H1.updateSetting(!e);
}
function bh() {
    let e = bo(),
        t = (0, C2.uM)();
    return e || t;
}
let bS = (0, h.zD)(S.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () => V.intl.string(V.t.w4fvxe),
        usePredicate: () => !br(),
        useValue: bA,
        setValue: bE,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: bh,
    }),
    bx = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () =>
            V.intl.format(V.t.cf9mvV, { helpdeskArticle: eb.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: br,
        useValue: bA,
        setValue: bE,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: bh,
    }),
    bT = (0, h.AK)(S.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = Sp(2);
            return V.intl.format(V.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = Sf();
            return { type: T.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, _.bG)([i5.Ay], () => i5.Ay.getGamesSeen(!1).some((e) => !(0, SA.n1)(e))) && (0, nh.xl)(),
    }),
    bp = (0, h.gN)(S.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [bT] });
var bf = n(972737);
let b_ = (0, h.zD)(S.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => V.intl.string(V.t.XuADY2),
        useSubtitle: () =>
            V.intl.format(V.t.FNqmmX, { helpdeskArticle: eb.A.getArticleURL(I.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, _.bG)([C1.A], () => C1.A.hasConsented(I.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, CK.U)([I.YAq.USAGE_STATISTICS], []).catch(bf.i)
                : (0, bf.O)({
                      header: V.intl.string(V.t.OdPCbN),
                      body: V.intl.string(V.t.MGWabA),
                      confirmText: V.intl.string(V.t["D3+rU4"]),
                      cancelText: V.intl.string(V.t.kYpG0u),
                      onConfirm: () => (0, CK.U)([], [I.YAq.USAGE_STATISTICS]).catch(bf.i),
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.XuADY2)],
        useDisabled: C2.uM,
    }),
    bI = (0, h.zZ)(S.X.DATA_USAGE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.QDAriI),
        useInlineNotice: C6,
        initialize: () => {
            C1.A.fetchedConsents || (0, CK.Q)();
        },
        buildLayout: () => [bn, b_, bi._, bS, bg, ...C0, C8, bt, bp],
    });
var bN = n(249097);
let bC = (0, h.zD)(S.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => V.intl.string(bN.default.F3llsQ),
    useSubtitle: () => V.intl.string(bN.default["6goWcz"]),
    useValue: U.Sy.useSetting,
    setValue: function (e) {
        (U.Sy.updateSetting(e),
            td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: SC.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function bb() {
    let e = U.JG.useSetting();
    return (0, _.yK)(
        [g0.Ay, lv.A],
        () => {
            let t = new Set(e);
            return g0.Ay.getFlattenedGuildIds().filter((e) => null != lv.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let by = (0, h.AK)(S.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = bb();
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
                    ((e = bb()),
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
                                    icon: (0, p.jsx)(SV, { guild: t[0], size: SE.CD }),
                                    shape: SE.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, p.jsx)(SV, { guild: t[1], size: SE.CD }), shape: SE.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, p.jsx)(SV, { guild: t[0], size: SE.CD }),
                                    shape: SE.e0.SQUIRCLE,
                                },
                            });
            return { type: T.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    bv = (0, h.gN)(S.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [by] }),
    bj = (0, h.Qx)(S.X.PROFILE_PRIVACY_SETTING, {
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
            let i = (0, SR.gS)(t, e);
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
    bO = (0, h.zZ)(S.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ul884f),
        useSubtitle: () =>
            V.intl.format(V.t.N4jSgR, {
                learnMoreUrl: eb.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [bj, bC, bv],
    });
var bL = n(952270),
    bR = n(240901);
let bD = { [eJ.tR.REAL_MONEY_GAMING]: bR.default.pmIitA },
    bP = Object.keys(bD).map(Number),
    bG = (0, h.E2)(S.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [V.intl.string(bR.default.foQaI1)],
        usePredicate: br,
        Component: function () {
            let e = f.useMemo(
                    () =>
                        bP.map((e) => ({
                            id: String(e),
                            value: e,
                            label: V.intl.string(bD[e]),
                            leading: bL.EyeSlashIcon,
                        })),
                    [],
                ),
                t = U.XZ.useSetting();
            return (0, p.jsx)(pS.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(U.XZ.getSetting());
                    for (let e of bP) t.has(e) ? n.add(e) : n.delete(e);
                    U.XZ.updateSetting([...n]);
                },
                label: V.intl.string(bR.default.foQaI1),
                description: V.intl.format(bR.default["z/MfaY"], {
                    helpdeskArticle: eb.A.getArticleURL(I.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: V.intl.string(bR.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    bM = (0, h.zZ)(S.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(bR.default.XUj46U),
        usePredicate: br,
        buildLayout: () => [bx, bm, bG],
    });
var bU = n(714763),
    bV = n(814278),
    bk = n(730852),
    bw = n(913122),
    bF = n(977997),
    bB = n(144485);
async function bz(e, t) {
    if (e) {
        ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, bV.to)(1), t?.());
        } catch (t) {
            let e = new bw.LG(t);
            (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                C7.A.show({
                    title: V.intl.string(V.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? V.intl.string(V.t.eAn6z2),
                }));
        }
    } else (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function bX(e) {
    let t,
        n,
        i =
            ((t = bF.A.getVoiceStateForUser(cS.default.getId())),
            (n = lb.A.getChannel(t?.channelId)),
            cS.default.getSessionId() === t?.sessionId && null != n && n.type !== I.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? bB.A.openSecureFramesUpdateConfirmation({
              title: e ? V.intl.string(V.t.DRFN1B) : V.intl.string(V.t.q29xJz),
              subtitle: e ? V.intl.string(V.t.y015ZY) : V.intl.string(V.t.E66FQn),
              confirmText: V.intl.string(V.t.aTuFYT),
              onConfirm: async () => {
                  await bz(e, () => {
                      (bk.default.disconnect(), bk.default.selectVoiceChannel(i));
                  });
              },
          })
        : await bz(e);
}
n(603266);
let bY = (0, h.zD)(S.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => V.intl.string(V.t["opi/XK"]),
    useSubtitle: () => V.intl.format(V.t["/T+ZlP"], { helpArticle: (0, bV.Lu)() }),
    useValue: function () {
        return (0, _.bG)([bU.A], () => bU.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        bX(e);
    },
});
var bH = n(787392);
function bW() {
    return (0, _.yK)([bH.A], () => bH.A.getUserIds());
}
var bK = n(803306),
    bZ = n(966327),
    bq = n(774156);
function bQ(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eX.Ay)(),
        l = (0, _.bG)([sx.default], () => sx.default.getUser(t)),
        s = u8.Ay.getFormattedName(l),
        r = f.useCallback(() => {
            (0, bV.kj)(t);
        }, [t]),
        a = f.useCallback(() => (0, pD.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        f.useEffect(() => {
            (0, bK.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: bq.uW,
            children: [
                null != l && (0, p.jsx)(bZ.A, { className: bq.my, user: l, size: v._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: bq.Qq,
                    children: [
                        (0, p.jsx)(n5.D, {
                            className: bq.Xh,
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
                (0, p.jsx)(n5.D, { onClick: r, className: bq.Qz, children: (0, p.jsx)(lc.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function bJ(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, bV.tC)(i.timestamp),
        r = f.useCallback(() => {
            (0, bV.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: bq.Qq,
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
                className: bq.Kk,
                onClick: r,
                children: (0, p.jsx)(dl.P, { size: "md", color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function b$(e) {
    let { userId: t } = e,
        n = (0, _.yK)([bH.A], () =>
            K()(bH.A.getUserVerifiedKeys(t))
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
            (0, p.jsx)(bQ, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, p.jsxs)(
                    f.Fragment,
                    {
                        children: [
                            (0, p.jsx)(bJ, { className: bq.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, p.jsx)("div", { className: bq.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var b0 = n(464946),
    b1 = n(492422);
let b2 = (0, h.E2)(S.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["5b3FNI"])],
        usePredicate: function () {
            let e = bW();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = bW();
            return (0, p.jsxs)(b0.h, {
                children: [
                    (0, p.jsx)(b0._, {
                        header: V.intl.string(V.t["5b3FNI"]),
                        description: V.intl.format(V.t.jrTSWU, { helpArticle: (0, bV.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: b1.A, children: (0, p.jsx)(b$, { userId: e }) }, e)),
                ],
            });
        },
    }),
    b3 = (0, h.zZ)(S.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bTwjaz),
        usePredicate: () => (0, e8.isDesktop)(),
        buildLayout: () => [bY, b2],
    }),
    b4 = (0, h.t_)(S.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        buildLayout: () => [bI, bM, bO, b3],
    }),
    b5 = (0, h.i4)(S.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        icon: CW.m,
        buildLayout: () => [b4],
    });
var b6 = n(476713);
let b8 = (0, h.AK)(S.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.O65dzZ),
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        destinationKey: S.X.AUTHORIZED_APPS_CATEGORY,
    }),
    b7 = (0, h.gN)(S.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [b8] });
var b9 = n(875444);
function ye(e, t) {
    let n = (0, _.bG)([xa.default], () => xa.default.getFetchState()),
        i = (0, _.bG)([xa.default], () =>
            e ? xa.default.getNewestTokensForNonChildrenApplications() : xa.default.getNewestTokens(),
        ),
        l = f.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, b9.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        f.useEffect(() => {
            t || S4.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xa.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var yt = n(514479);
function yn() {
    return (0, p.jsxs)("div", {
        className: yt.d,
        children: [
            (0, p.jsx)(n4.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: yt.x,
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
let yi = (0, h.E2)(S.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = ye(!0, !0);
        return e ? (0, p.jsx)(oD.y, {}) : (0, p.jsx)(yn, {});
    },
    useSearchTerms: () => [V.intl.string(V.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = ye(!0, !0);
        return e || 0 === t.length;
    },
});
function yl() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = ye(!0, !0);
    return !e && t.length > 0;
}
let ys = (0, h.zD)(S.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t.W8JtfT),
        useSubtitle: () => V.intl.string(V.t.a99KKy),
        useSearchTerms: () => [V.intl.string(V.t["Uv/eTx"])],
        useValue: () => U.Zk.useSetting(),
        setValue: (e) => U.Zk.updateSetting(e),
        usePredicate: yl,
    }),
    yr = (0, h.Qx)(S.X.IN_GAME_DMS_SETTING, {
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
        usePredicate: yl,
    });
function ya() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = ye(!0, !0);
    return {
        sortedGames: f.useMemo(() => e.toSorted((e, t) => oX.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yo = n(306537);
function yu(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: l } = e;
    return (
        (0, eI.Ay)(() => {
            (0, C4.N)(l, C5.YX.VIEWED);
        }),
        (0, p.jsx)(iK.w, { type: "info", message: t, action: { text: n, onClick: i }, role: "none" })
    );
}
function yd(e, t) {
    return {
        handleLearnMore: f.useCallback(() => {
            (t(), (0, C4.N)(e, C5.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: f.useCallback(() => {
            (_7.A.showAgeVerificationGetStartedModal({ entryPoint: yo.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, C4.N)(e, C5.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yc() {
    let e,
        t = (0, C2.uM)(),
        n = (0, Ih.fk)(),
        i = (0, IE.b8)(),
        l = (0, N6.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : l && (e = "teen"), null != e) && (0, In.n)(Ie.Vc)) return e;
    }
}
var yg = n(687123),
    ym = n(444802);
function yA() {
    let e = (0, ym.WX)();
    f.useEffect(() => {
        (0, C4.N)(C5.YA.AGE_CONFIRMATION_NOTICE, C5.YX.VIEWED);
    }, []);
    let t = f.useCallback(() => {
            (window.open(eb.A.getArticleURL(e), "_blank"), (0, C4.N)(C5.YA.AGE_CONFIRMATION_NOTICE, C5.YX.LEARN_MORE));
        }, [e]),
        n = f.useCallback(() => {
            (_7.A.showAgeVerificationGetStartedModal({ entryPoint: yo.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, C4.N)(C5.YA.AGE_CONFIRMATION_NOTICE, C5.YX.CONFIRM_AGE));
        }, []);
    return (0, p.jsx)(iK.w, {
        type: "info",
        message: V.intl.format(V.t.mFgsfg, { hook: (e, n) => (0, p.jsx)(nr.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: V.intl.string(V.t.FDSSia), onClick: n },
    });
}
function yE() {
    let e = (0, Ih.aX)(yg.t.REACTIVE_CHECK),
        t = (0, IE.b8)();
    return f.useMemo(() => {
        if (e && !t) return { type: T.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yA };
    }, [e, t]);
}
var yh = n(323073),
    yS = n(386171),
    yx = n(96607);
let yT = (0, h.zD)(S.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => V.intl.string(V.t.gvC6q7),
        useSubtitle: () => V.intl.string(V.t.zirUC1),
        useValue: yS.hT,
        useDisabled: function () {
            let e = (0, yx.A)() ?? !0,
                t = (0, yh.sP)(),
                n = (0, IE.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yh.p5)() && e
                ? _7.A.showAgeVerificationGetStartedModal({ entryPoint: yo.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : U.Qe.updateSetting(e);
        },
    }),
    yp = (0, h.zD)(S.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => V.intl.string(V.t["L+yTsa"]),
        useSubtitle: () => V.intl.string(V.t["t6i/jW"]),
        useValue: yS.tI,
        useDisabled: function () {
            let e = (0, yx.A)() ?? !0,
                t = (0, yh.sP)(),
                n = (0, IE.yM)();
            return f.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yh.p5)() && e
                ? _7.A.showAgeVerificationGetStartedModal({ entryPoint: yo.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : U.Kg.updateSetting(e);
        },
    }),
    yf = (0, h.AK)(S.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.hOXd45),
        destinationKey: S.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    y_ = (0, h.gN)(S.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yf] });
n(667532);
var yI = n(390248),
    yN = n(632119),
    yC = n(945276),
    yb = n(389737),
    yy = n(566769);
function yv() {
    let e,
        t = (0, yC.A)() ?? !0,
        n = (0, C2.uM)(),
        i = (0, C2.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, ou.cf)([aG.A], () => aG.A.settings.textAndImages?.explicitContentSettings ?? (0, yN.C$)())),
        {
            explicitContentGuilds: (0, yN.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, yN.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, yN.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yI.hK)() && t.includes(eJ.TO.SHOW)
            ? _7.A.showAgeVerificationGetStartedModal({ entryPoint: yo.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yN.Jz)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(N7.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yb.E, {
        description: V.intl.string(V.t.Wnojv1),
        children: [
            (0, p.jsx)(yy.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yy.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yy.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? V.intl.string(N7.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function yj() {
    let e,
        t = (0, yC.A)() ?? !0,
        n = (0, C2.uM)(),
        i = (0, C2.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, ou.cf)([aG.A], () => aG.A.settings.textAndImages?.goreContentSettings ?? (0, ym.T4)())),
        {
            goreContentGuilds: (0, ym.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, ym.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, ym.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yI.hK)() && t.includes(eJ.TO.SHOW)
            ? _7.A.showAgeVerificationGetStartedModal({ entryPoint: yo.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, ym.qY)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(N7.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yb.E, {
        description: V.intl.string(V.t.XgH9eh),
        children: [
            (0, p.jsx)(yy.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yy.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yy.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? V.intl.string(N7.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var yO = n(875162),
    yL = n(636745);
let yR = (0, h.E2)(S.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, ym.WX)(),
            t = f.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: V.intl.string(V.t.GYpoAq),
                        component: yv,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: V.intl.string(V.t["16/3Bi"]),
                        component: yj,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, p.jsxs)(b0.h, {
            children: [
                (0, p.jsx)(b0._, {
                    header: V.intl.string(V.t["Hj/But"]),
                    description: V.intl.format(V.t.dliU4j, { learnMoreLink: eb.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(yO.A, { tabs: t, orientation: "vertical", tabsClassName: yL.v }),
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
var yD = n(639555),
    yP = n(617641),
    yG = n(546140),
    yM = n(406935),
    yU = n(594061);
let yV = (0, h.zD)(S.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => V.intl.string(V.t.qFsx5q),
        useSubtitle: () => V.intl.format(V.t.lunaRv, { learnMoreLink: eb.A.getArticleURL(I.MVz.SAFETY_ALERTS) }),
        useValue: yG.L,
        setValue: function (e) {
            return yU.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = yM._t.create({ value: e });
                },
                yU.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, yP.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, yD.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yC.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    yk = (0, h.zZ)(S.X.CONTENT_CATEGORY, {
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
                S = C6(),
                x =
                    ((l = (0, C2.uM)()),
                    (s = (0, Ih.fk)()),
                    (r = (0, IE.b8)()),
                    (a = (0, N6.Z)()),
                    (o = yd(C5.YA.AGE_CONFIRMATION_NOTICE, It)),
                    (u = yd(C5.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _8.M0)),
                    (d = f.useCallback(() => {
                        (0, C4.N)(C5.YA.AGE_CONFIRMATION_NOTICE, C5.YX.VIEWED);
                    }, [])),
                    (c = f.useCallback(() => {
                        (0, C4.N)(C5.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, C5.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (!l && (0, In.n)(Ie.Vc)) {
                            if (s && !r)
                                return {
                                    type: T.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: d,
                                    text: V.intl.format(Il.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: V.intl.string(Il.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: T.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: c,
                                    text: V.intl.format(Il.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { text: V.intl.string(V.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [s, l, a, r, u, c, d, o])),
                _ =
                    ((e = (0, N6.Z)()),
                    (t = (0, ym.WX)()),
                    (n = f.useCallback(() => {
                        (window.open(eb.A.getArticleURL(t), "_blank"),
                            (0, C4.N)(C5.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, C5.YX.LEARN_MORE));
                    }, [t])),
                    (i = f.useCallback(() => {
                        (0, C4.N)(C5.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, C5.YX.VIEWED);
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
                    ((g = (0, Ih.SJ)()),
                    (m = (0, IE.b8)()),
                    (A = g && !m),
                    (E = f.useCallback(() => {
                        (_7.A.showAgeVerificationGetStartedModal({ entryPoint: yo.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, C4.N)(C5.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, C5.YX.LEARN_MORE));
                    }, [])),
                    (h = f.useCallback(() => {
                        (0, C4.N)(C5.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, C5.YX.VIEWED);
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
                N = yE();
            return S ?? x ?? N ?? I ?? _;
        },
        buildLayout: () => [yR, yV, yT, yp, y_],
    });
var yw = n(923457),
    yF = n(750714);
let yB = (0, h.Qx)(S.X.DM_SPAM_SETTING, {
        useTitle: () => V.intl.string(V.t.puwSkY),
        useSubtitle: () => V.intl.string(V.t["+sXN3T"]),
        useValue: function () {
            let e = U.he.useSetting(),
                t = U.cj.useSetting(),
                n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
                i = (0, Ih.yv)(yw.p.SPAM_FILTERS);
            return e !== eJ.he.DEFAULT_UNSET
                ? e
                : n?.nsfwAllowed === !1 && i
                  ? eJ.he.FRIENDS_AND_NON_FRIENDS
                  : (yF.xY.get(t) ?? eJ.he.NON_FRIENDS);
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
    yz = (0, h.zD)(S.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => V.intl.string(V.t["7x9dyE"]),
        useValue: function () {
            let e = U.FA.useSetting();
            return f.useMemo(() => (0, ii.Lx)(e), [e]).all;
        },
        setValue: function (e) {
            U.FA.updateSetting(e ? I.yKI : I.yKI & ~I.dzt.NO_RELATION);
        },
        useDisabled: function () {
            return (0, C2.uM)();
        },
    }),
    yX = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => V.intl.string(V.t.NfeuZ3),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? uN.UI(t, I.dzt.MUTUAL_FRIENDS) : uN.iE(t, I.dzt.MUTUAL_FRIENDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, C2.uM)();
        },
    }),
    yY = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => V.intl.string(V.t.qsMfsH),
        useSubtitle: () => V.intl.string(V.t["6DqAp0"]),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? uN.UI(t, I.dzt.MUTUAL_GUILDS) : uN.iE(t, I.dzt.MUTUAL_GUILDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, C2.uM)();
        },
    }),
    yH = (0, h.FW)(S.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => V.intl.string(V.t.wTdS6S),
        buildLayout: () => [yz, yX, yY],
    });
var yW = n(420825);
let yK = (0, h.zD)(S.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => V.intl.string(V.t["jK+wdr"]),
        useSubtitle: () => V.intl.string(V.t["RYh/pW"]),
        useValue: () => !(0, yW.q)(),
        setValue: function (e) {
            U.Zd.updateSetting(!e);
        },
    }),
    yZ = (0, h.zZ)(S.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5gxWrt"]),
        useSubtitle: () => V.intl.string(V.t.QVbF3l),
        useSubnavLabel: () => V.intl.string(V.t.fyA115),
        useInlineNotice: C6,
        buildLayout: () => [yH, yK],
    });
var yq = n(994500),
    yQ = n(428678),
    yJ = n(49229),
    y$ = n(730134),
    y0 = n(276573);
function y1(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: y0.wx,
        children: [
            (0, p.jsx)("div", {
                className: y0.zc,
                children: i ? (0, p.jsx)(yQ.K, {}) : (0, p.jsx)(bL.EyeSlashIcon, {}),
            }),
            (0, p.jsxs)("div", {
                className: y0.Qq,
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
function y2(e) {
    let { userId: t, last: n } = e,
        i = (0, _.bG)([yq.A], () => yq.A.isBlocked(t)),
        l = (0, _.bG)([sx.default], () => sx.default.getUser(t)),
        [s, r] = f.useState(!1),
        a = f.useCallback(() => {
            (r(!0),
                i
                    ? yJ.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : yJ.A.unignoreUser(t, tk.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == l
        ? null
        : (0, p.jsxs)("div", {
              className: ic()(y0.nM, { [y0.fW]: n }),
              children: [
                  (0, p.jsxs)("div", {
                      className: y0.eF,
                      children: [
                          (0, p.jsx)(y$.A, { user: l, size: v._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: y0.Qq,
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
function y3(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = f.useState(5);
    return (0, p.jsx)(b0.h, {
        children: (0, p.jsxs)("div", {
            className: y0.Nr,
            children: [
                (0, p.jsx)(y1, { listType: n, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: y0.jS,
                    children: t.slice(0, i).map((e, n) => (0, p.jsx)(y2, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, p.jsx)("div", {
                          className: y0.vM,
                          children: (0, p.jsx)(n5.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: y0.Qf,
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
let y4 = (0, h.E2)(S.X.BLOCKED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t.PFOUKW)],
        usePredicate: () => (0, _.bG)([yq.A], () => yq.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, _.yK)([yq.A], () => yq.A.getBlockedIDs());
            return (0, p.jsx)(y3, { userIds: e, listType: "blocked" });
        },
    }),
    y5 = (0, h.E2)(S.X.IGNORED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t["93ZDWE"])],
        usePredicate: () => (0, _.bG)([yq.A], () => yq.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, _.yK)([yq.A], () => yq.A.getIgnoredIDs());
            return (0, p.jsx)(y3, { userIds: e, listType: "ignored" });
        },
    }),
    y6 = (0, h.zZ)(S.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+Iryf3"]),
        useSubtitle: () =>
            V.intl.format(V.t["0aNQo9"], { helpArticle: eb.A.getArticleURL(I.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [y4, y5],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, _.cf)([yq.A], () => ({
                hasBlockedUsers: yq.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: yq.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var y8 = n(22385),
    y7 = n(556534),
    y9 = n(111159),
    ve = n(152056),
    vt = n(428031),
    vn = n(978433);
let vi = { label: () => V.intl.string(V.t["32u1Dx"]), value: y8.YG };
var vl = n(307863),
    vs = n(954225);
function vr() {
    return (0, vl.e)() ? V.intl.string(V.t.PMsfcH) : V.intl.string(V.t.RAQUSN);
}
function va(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let vo = (0, h.zD)(S.X.PERMISSIONS_DMS_SETTING, {
    useTitle: vr,
    useSubtitle: function () {
        let e = (0, y7.Tx)(),
            t = (0, y7.q9)(),
            n = (0, vl.e)();
        return e === y8.YG
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
        let e = (0, y7.Tx)(),
            t = U.$s.useSetting().includes(e),
            n = (0, vt.K)();
        return e === y8.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, C2.uM)();
        return (0, y7.Tx)() === y8.YG && e;
    },
    setValue: function (e) {
        let t = y8.xk.getState().selectedGuildId;
        if (t === y8.YG) {
            var n;
            ((n = !e),
                (0, bf.O)({
                    header: V.intl.string(V.t["uUr+GR"]),
                    body: V.intl.string(V.t.hjGJBp),
                    confirmText: V.intl.string(V.t.gm1Vej),
                    cancelText: V.intl.string(V.t.p89ACt),
                    confirmButtonColor: s5.$n.Colors.BRAND,
                    onConfirm: function () {
                        (U.n6.updateSetting(n), va(n, !1));
                    },
                    onCancel: function () {
                        (U.n6.updateSetting(n), U.$s.updateSetting(n ? lv.A.getGuildIds() : []), va(n, !0));
                    },
                }));
        } else {
            let n = (0, ii.Tb)();
            (e ? n.delete(t) : n.add(t),
                U.$s.updateSetting(Array.from(n)),
                td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: vs.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var vu = n(116774),
    vd = n(953298);
function vc(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function vg() {
    return V.intl.string(V.t["3o2ojh"]);
}
let vm = (0, h.zD)(S.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: vg,
        useSubtitle: function () {
            let e = (0, y7.q9)(),
                t = eb.A.getArticleURL(I.MVz.MESSAGE_REQUESTS);
            return e
                ? V.intl.format(V.t.WpnWLc, { helpdeskArticle: t })
                : V.intl.format(V.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, y7.Tx)(),
                t = (0, vt.K)(),
                n = U.$s.useSetting().includes(e),
                i = (0, vu.s)(),
                l = (0, C2.uM)(),
                s = U.YX.useSetting(),
                r = U.Zr.useSetting().includes(e);
            return !!i || (e === y8.YG && l ? !s : e === y8.YG ? !t && !s : !n && !r);
        },
        useDisabled: function () {
            let e = (0, y7.Tx)(),
                t = (0, C2.uM)(),
                n = (0, vt.K)(),
                i = U.$s.useSetting().includes(e),
                l = (0, vu.s)();
            return e === y8.YG ? n || t || l : i || l;
        },
        setValue: function (e) {
            let t = y8.xk.getState().selectedGuildId;
            if (!e && (0, vd.w)())
                return void _7.A.showAgeVerificationGetStartedModal({ entryPoint: yo.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === y8.YG) {
                var n;
                ((n = !e),
                    (0, bf.O)({
                        header: V.intl.string(V.t.yAfu1p),
                        body: V.intl.string(V.t.Ry2z74),
                        confirmText: V.intl.string(V.t.gm1Vej),
                        cancelText: V.intl.string(V.t.p89ACt),
                        confirmButtonColor: s5.$n.Colors.BRAND,
                        onConfirm: function () {
                            (U.YX.updateSetting(n), vc(n, !1));
                        },
                        onCancel: function () {
                            (U.YX.updateSetting(n), U.Zr.updateSetting(n ? lv.A.getGuildIds() : []), vc(n, !0));
                        },
                    }));
            } else {
                let n = (0, ii.xo)();
                (e ? n.delete(t) : n.add(t),
                    U.Zr.updateSetting(Array.from(n)),
                    td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: vs.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    vA = (0, h.E2)(S.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [vr(), vg()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, y8.xk)(),
                l = (0, _.bG)([g0.Ay], () => g0.Ay.getFlattenedGuildIds()),
                s = (0, _.bG)([lv.A], () => lv.A.getGuilds()),
                r =
                    ((e = U.$s.useSetting()),
                    (t = (0, vt.K)()),
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
                    ve.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = y8.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === y8.YG && null != a
                                ? i(a)
                                : "" === e && n !== y8.YG && i(y8.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = f.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...vi,
                            id: vi.value,
                            label: vi.label(),
                            leading: (0, p.jsx)("div", {
                                className: vn.KP,
                                children: (0, p.jsx)(y9.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: vn.cl,
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
                                    leading: (0, p.jsx)(mn.Ay, {
                                        className: vn.cl,
                                        guild: n,
                                        size: mn.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [l, s]),
                u = n === y8.YG && r > 0;
            return (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(pS.Z, {
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
                            className: vn.h_,
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
    vE = (0, h.E2)(S.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, y7.Tx)(),
                t = yc();
            return e === y8.YG && null != t;
        },
        Component: function () {
            let e = yc(),
                t = yd(C5.YA.AGE_CONFIRMATION_NOTICE, It),
                n = yd(C5.YA.CONTENT_AND_SOCIAL_NOTICE, _8.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, p.jsx)(yu, {
                        noticeType: C5.YA.AGE_CONFIRMATION_NOTICE,
                        body: V.intl.format(Il.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: V.intl.string(Il.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, p.jsx)(yu, {
                        noticeType: C5.YA.CONTENT_AND_SOCIAL_NOTICE,
                        body: V.intl.format(Il.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: V.intl.string(V.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    vh = (0, h.zZ)(S.X.PERMISSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Y5GYcX),
        useSubnavLabel: () => V.intl.string(V.t.YUU0RF),
        useInlineNotice: function () {
            let e = C6(),
                t = yE();
            if ((0, y7.Tx)() === y8.YG) return e ?? t;
        },
        buildLayout: () => [vA, vo, vm, vE],
    }),
    vS = (0, h.zZ)(S.X.SPAM_FILTERS_CATEGORY, { useTitle: () => V.intl.string(V.t.Qwuoic), buildLayout: () => [yB] }),
    vx = (0, h.zZ)(S.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = ya();
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
                let { sortedGames: e } = ya();
                return f.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, p.jsx)("img", {
                                src: M.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: SE.CD,
                                height: SE.CD,
                            }),
                            shape: SE.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, p.jsx)("img", {
                                    src: M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: SE.YP,
                                    height: SE.YP,
                                }),
                                shape: SE.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: T.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [V.intl.string(V.t.YpCiMt)],
        initialize: () => {
            S4.A.fetch();
        },
        buildLayout: () => [ys, yr, yi, b7],
    }),
    vT = (0, h.t_)(S.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        buildLayout: () => [yk, vS, vh, yZ, vx, y6],
    }),
    vp = (0, h.i4)(S.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        icon: b6.l,
        buildLayout: () => [vT],
    });
var vf = n(782603),
    v_ = n(899847),
    vI = n(695515);
let vN = (0, h.Hn)(S.X.MOBILE_NOTIFICATION_DELAY, {
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
    vC = (0, h.zD)(S.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => V.intl.string(V.t["btbS+Z"]),
        useSubtitle: () =>
            V.intl.format(V.t.Q5crhR, { onClick: () => (0, na.openUserSettings)(S.X.TTS_PLAYBACK_RATE) }),
        useValue: U.on.useSetting,
        setValue: U.on.updateSetting,
    }),
    vb = (0, h.Qx)(S.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
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
    vy = S.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    vv = (0, h.bd)(vy, {
        useTitle: (e) => (e ? V.intl.string(V.t.RyimDk) : V.intl.string(V.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return t_(vy, {
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
        buildLayout: () => [vN, vC, vb],
    }),
    vj = (0, h.zZ)(S.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["31DySj"]),
        buildLayout: () => [vv],
    }),
    vO = (0, h.zD)(S.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => V.intl.string(V.t.VH8AIJ),
        useSubtitle: () => V.intl.string(V.t["9K4qwX"]),
        useValue: function () {
            return (0, _.bG)([aY.A], () => !aY.A.getDisableUnreadBadge());
        },
        setValue: (e) => aq.default.setDisableUnreadBadge(!e),
    }),
    vL = (0, h.zZ)(S.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.l6w3Vj),
        buildLayout: () => [vO],
    });
var vR = n(840559),
    vD = n(997187);
let vP = (0, bl.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var vG = n(723923);
let vM = vG.px.map((e) =>
        (0, h.zD)(`${S.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, _.cf)([vD.A], () => vD.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, vR.CA)(e.category, t),
        }),
    ),
    vU = (0, h.Tf)(S.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => V.intl.string(V.t.Ra9Pwk),
        useSubtitle: () => V.intl.string(V.t.iYjQ8X),
        useLabel: () => V.intl.string(V.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, _.cf)([vD.A], () => vD.A.getEmailSettings());
            return vG.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, vR.NI)(),
        useVariant: () => "critical-secondary",
    }),
    vV = (0, h.zZ)(S.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = vP.useConfig({ location: "Email Settings Category" });
            return e ? V.intl.string(V.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = vD.A.getEmailSettings();
            e || (0, vR.cR)();
        },
        buildLayout: () => [...vM, vU],
    }),
    vk = (0, h.zD)(S.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["/0WCll"]),
        useSubtitle: () => V.intl.string(V.t.wF9ih3),
        useValue: function () {
            return (0, _.bG)([aY.A], () => aY.A.getDesktopType()) !== I.nRU.NEVER;
        },
        setValue: (e) => aq.default.setDesktopType(e ? I.nRU.ALL : I.nRU.NEVER),
    });
var vw = n(832712),
    vF = n(543465),
    vB = n(790782);
let vz = (0, h.zD)(S.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => V.intl.string(V.t["k6m/si"]),
    useSubtitle: () => V.intl.string(V.t.LGynPs),
    useValue: () => (0, _.bG)([vF.Ay], () => vF.Ay.useNewNotifications),
    setValue: function (e) {
        (vw.A.setAccountFlag(SC.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hL.w.set("turnedOffNewNotifications", !0),
                td.default.track(I.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lv.A.getGuildsArray().filter(
                        (e) => vF.Ay.resolveGuildUnreadSetting(e) === vB.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, _.bG)(
            [sx.default, vF.Ay],
            () =>
                sx.default.getCurrentUser()?.isStaff() ||
                sx.default.getCurrentUser()?.isStaffPersonal() ||
                vF.Ay.useNewNotifications,
        ),
});
var vX = n(534654);
let vY = (0, h.zD)(S.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => V.intl.string(V.t.z9h8Ym),
        useSubtitle: () => V.intl.string(V.t.TummoQ),
        useValue: () => (0, _.bG)([aY.A], () => aY.A.screenDowntimeReminder),
        setValue: (e) => aq.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, vX.A)(),
                t = (0, N3.Du)();
            return e && t;
        },
    }),
    vH = (0, h.zD)(S.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => V.intl.string(V.t.onrAy7),
        useSubtitle: () => V.intl.string(V.t["/071J7"]),
        useValue: U.gY.useSetting,
        setValue: (e) => U.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, vX.A)(),
                t = (0, N3.Du)();
            return e && t;
        },
    }),
    vW = (0, h.zD)(S.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.NjOMvh),
        useValue: U.oz.useSetting,
        setValue: function (e) {
            (U.oz.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SC.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [V.intl.string(V.t.hi4dSk)],
    }),
    vK = (0, h.zD)(S.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sQQgFj),
        useValue: U.NR.useSetting,
        setValue: function (e) {
            (U.NR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SC.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    vZ = (0, h.zD)(S.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.FSNIvs),
        useValue: U.Yh.useSetting,
        setValue: function (e) {
            (U.Yh.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SC.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    vq = (0, h.zD)(S.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.xBLMhQ),
        useValue: U.T3.useSetting,
        setValue: function (e) {
            (U.T3.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SC.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var vQ = n(815807);
let vJ = (0, h.Hn)(S.X.REACTION_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: V.intl.string(V.t["9x/RtT"]), value: eJ.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: V.intl.string(V.t.fJAbQd), value: eJ.Tz.ONLY_DMS },
            { id: "disabled", label: V.intl.string(V.t["xu+UDU"]), value: eJ.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: U.Zp.useSetting,
        setValue: (e) => (0, vQ.n4)(e, U.Zp.getSetting()),
    }),
    v$ = (0, h.zD)(S.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["k51K1+"]),
        useValue: U.Qr.useSetting,
        setValue: function (e) {
            (U.Qr.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SC.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    v0 = (0, bl.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    v1 = (0, h.zD)(S.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.G8NPz6),
        useValue: U.zS.useSetting,
        setValue: function (e) {
            (U.zS.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: SC.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => v0.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    v2 = (0, h.FW)(S.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.FEVRDV),
        buildLayout: () => [vZ, vW, vK, v$, v1, vq, vJ],
    }),
    v3 = (0, h.zD)(S.X.TASK_BAR_FLASHING, {
        useTitle: () => V.intl.string(V.t.xSmFQG),
        useSubtitle: () => V.intl.string(V.t.bd4j4x),
        useValue: () => (0, _.bG)([aY.A], () => aY.A.taskbarFlash),
        setValue: (e) => aq.default.setTaskbarFlash(e),
        usePredicate: () => (0, nh.uF)(),
    }),
    v4 = (0, h.zZ)(S.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [vk, v3, v2, vz, vH, vY],
    });
var v5 = n(965957),
    v6 = n(312671),
    v8 = n(235079);
let v7 = (0, h.zD)(S.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aH.A.useHolidaySoundpack();
        return null == e ? "" : V.intl.format(V.t["E/OyBr"], { soundpack: V.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, _.bG)([v6.A], () => v6.A.getSoundpack()),
            t = aH.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aH.A.getHolidaySoundpack();
        (tE()(null != t, "predicate should fail if no soundpack is available"), (0, v5.p)(e ? t : v8.i.CLASSIC));
    },
    usePredicate: aH.A.useIsEligible,
});
var v9 = n(970931);
let je = {
        useTitle: () => V.intl.string(V.t.jD1qzM),
        sound: "message1",
        useDisabled: v9.kB,
        useDisabledMessage: () => ((0, v9.kB)() ? V.intl.string(V.t.cIRG0s) : void 0),
    },
    jt = { useTitle: () => V.intl.string(V.t.XBrJT6), sound: "call_ringing" },
    jn = (0, h.zD)(S.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.TzjwV9),
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => a$("message3") }),
        useValue: () =>
            (0, _.bG)([aY.A], () => aY.A.getNotifyMessagesInSelectedChannel() && !aY.A.getDisableAllSounds()),
        setValue: (e) => aq.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, _.bG)([aY.A], () => aY.A.getDisableAllSounds()),
    }),
    ji = (0, h.zD)(S.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => V.intl.string(V.t["2ZhCOd"]),
        useSubtitle: () => V.intl.string(V.t.EAKdPr),
        useValue: () => (0, _.bG)([aY.A], () => aY.A.getDisableAllSounds()),
        setValue: (e) => aq.default.toggleDisableAllSounds(e),
    }),
    jl = (0, h.D1)(S.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aJ();
            };
        },
        buildLayout: () => [a0(je), jn, a0(jt), ji],
    }),
    js = (0, h.AK)(S.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t["MMy+lm"]),
        useSearchTerms: () => [V.intl.string(V.t["MMy+lm"])],
        destinationKey: S.X.SOUNDS_CATEGORY,
    }),
    jr = (0, h.gN)(S.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [js] }),
    ja = (0, h.zZ)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.LweOYy),
        buildLayout: () => [v7, jl, jr],
    }),
    jo = (0, h.t_)(S.X.NOTIFICATIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        initialize: () => {
            null != vI.A.getAgeGroup() || vI.A.isLoading() || (vI.A.canRefetch() && v_.Ay.initialPageLoad());
        },
        buildLayout: () => [v4, ja, vL, vV, vj],
    }),
    ju = (0, h.i4)(S.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        icon: vf.BellIcon,
        buildLayout: () => [jo],
    }),
    jd = (0, h.WI)(S.X.USER_SECTION, {
        useTitle: () => V.intl.string(V.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Cg, b5, vp, ju, CH],
    });
var jc = n(387758),
    jg = n(271866),
    jm = n(147964),
    jA = n(868511);
let jE = (0, h.zD)(S.X.APPLICATION_TEST_MODE, {
        useTitle: () => V.intl.string(V.t.erOqlh),
        useSubtitle: () => V.intl.string(V.t["52hMnD"]),
        usePredicate: U.Q_.useSetting,
        useValue: () => (0, _.bG)([jm.A], () => null != jm.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, lT.openModal)((e) => (0, p.jsx)(jA.A, { ...e })) : jg.cL();
        },
    }),
    jh = (0, h.zD)(S.X.DEVELOPER_MODE, {
        useTitle: () => V.intl.string(V.t.ObIb1Q),
        useSubtitle: () => V.intl.format(V.t["CY6q/Q"], { apiDocsUrl: I.X7G.API_DOCS }),
        useValue: U.Q_.useSetting,
        setValue: U.Q_.updateSetting,
        usePredicate: () => uz.p5,
    }),
    jS = (0, h.zZ)(S.X.DEVELOPER_CATEGORY, { buildLayout: () => [jh, jE] }),
    jx = (0, h.t_)(S.X.DEVELOPER_PANEL, { useTitle: () => V.intl.string(V.t["0BRxRp"]), buildLayout: () => [jS] }),
    jT = (0, h.i4)(S.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: jc.G,
        useTitle: () => V.intl.string(V.t["0BRxRp"]),
        buildLayout: () => [jx],
    });
var jp = n(70688),
    jf = n(830215);
let j_ = (0, h.i4)(S.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => V.intl.string(V.t["2jxGer"]),
        icon: jp.DoorExitIcon,
        onClick: () => {
            (0, n2.A)({
                title: V.intl.string(V.t["2jxGer"]),
                subtitle: V.intl.string(V.t.SUnWBB),
                confirmText: V.intl.string(V.t["2jxGer"]),
                onConfirm: () => {
                    jf.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    jI = (0, h.WI)(S.X.UTILITY_SECTION, {
        useTitle: () => V.intl.string(V.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [jT, j_],
    }),
    jN = (0, h.Hr)({ buildLayout: () => [_3, jd, E$, oT, pv, Sg, jI], analyticsKey: "user_settings" });
