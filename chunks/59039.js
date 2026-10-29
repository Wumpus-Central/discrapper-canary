n.d(t, { D: () => jA });
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
    Q = n(205513),
    J = n(834730),
    $ = n(113494),
    ee = n(782134),
    et = n(54570),
    en = n(8880),
    ei = n(75804);
let el = K().debounce((e) => {
    (0, et.zU)(e);
}, 250);
function es() {
    let [e, t] = f.useState(!1);
    return (
        (0, Z.l0)(() => (0, et.pr)()),
        (0, p.jsx)(j.$, {
            text: V.intl.string(V.t.SKNnqq),
            icon: e ? $.PauseIcon : ee.PlayIcon,
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
let er = (0, h.E2)(S.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [V.intl.string(V.t.lsW5Ev)],
        Component: function () {
            let e = (0, _.bG)([en.A], () => en.A.speechRate);
            return (0, p.jsxs)(q.B, {
                gap: 16,
                children: [
                    (0, p.jsx)(Q.G, {
                        label: V.intl.string(V.t.lsW5Ev),
                        description: V.intl.string(V.t.Ci4wMS),
                        markers: ei.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: el,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, p.jsx)(J.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: V.intl.string(V.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, p.jsx)(J.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: V.intl.string(V.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, p.jsx)(J.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
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
    eH = n(701974);
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
    t7 = n(22277);
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
    nM = n(98908);
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
    n4 = n(893007),
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
                        (0, p.jsx)(J.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ih.YR,
                            children: (0, iA.mk)(g),
                        }),
                    (0, p.jsx)(J.E, { variant: "text-md/medium", color: d, children: s() }),
                    (0, p.jsx)(J.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
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
                    (0, p.jsx)(J.E, {
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
                            (0, p.jsx)(J.E, {
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
                            children: (0, p.jsx)(J.E, {
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
    return (0, p.jsx)(J.E, { className: iI.iF, variant: "text-sm/normal", color: "text-default", children: t });
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
                    (0, p.jsx)(J.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iI.KF,
                        children: V.intl.string(V.t.vd0D81),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t.a18Sug) }),
                    (0, p.jsx)(n4.A, {
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
                    (0, p.jsx)(J.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iI.KF,
                        children: V.intl.string(V.t.sPO3ij),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t.xoldVn) }),
                    (0, p.jsx)(n4.A, {
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
                    (0, p.jsx)(J.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: iI.KF,
                        children: V.intl.string(V.t.L0oQuh),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t["/OOFpL"]) }),
                    (0, p.jsx)(n4.A, {
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
                    (0, p.jsx)(J.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iI.KF,
                        children: V.intl.string(V.t.UxnnC4),
                    }),
                    (0, p.jsx)(iL, { children: V.intl.string(V.t.CEOEOb) }),
                    (0, p.jsx)(n4.A, {
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
                    (0, p.jsx)(J.E, {
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
    i9 = n(360906),
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
                          (0, p.jsx)(J.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? V.intl.string(V.t.vxfv7v)
                                      : null != l
                                        ? V.intl.string(V.t.fAYU2G)
                                        : V.intl.string(V.t["9V4X/c"]),
                          }),
                          (0, p.jsx)(J.E, {
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
        children: (0, p.jsx)(J.E, {
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
        ? (0, p.jsx)(J.E, {
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
            (0, p.jsx)(J.E, {
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
                      (0, p.jsx)(J.E, {
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
                            (0, p.jsx)(J.E, { variant: "text-md/normal", children: V.intl.string(V.t.sMWLBj) }),
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
                                                                (0, p.jsx)(J.E, {
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
                                    (0, p.jsx)(J.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: V.intl.string(V.t.roHq80),
                                    }),
                                    n &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(J.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, p.jsx)(J.E, {
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
                            (0, p.jsx)(J.E, {
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
                            (0, p.jsx)(J.E, { variant: "text-md/normal", children: t }),
                            (0, p.jsx)(J.E, {
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
    rC = n(270103);
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
    rK = n(475883),
    rZ = n(303707);
let rq = (0, tK.Ld)();
function rQ(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, p.jsx)("div", {
        role: "meter",
        className: ic()(rK.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? V.intl.string(V.t.haLKZ0) : V.intl.string(V.t.X2hJL7),
        children: (0, p.jsx)("div", { className: ic()(rK.Jx, rK.NU, { [rK.zY]: t && !r, [rK.r9]: r }) }),
    });
}
function rJ(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, _.cf)([i9.Ay], () => ({
            threshold: i9.Ay.getModeOptions().threshold,
            autoThreshold: i9.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, _.bG)([i9.Ay], () => i9.Ay.getMode());
    return (0, p.jsx)("section", {
        className: ic()(rK.Mo, rK.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, p.jsx)(Q.G, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lE.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n1.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n1.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rq,
            disabled: s,
            children: (0, p.jsxs)("div", {
                className: ic()(rK.NU, rK.TL, rK.Jx, rZ.bar),
                children: [
                    (0, p.jsx)("div", { className: ic()(rK.GS, rK.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, p.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let r$ = (0, h.E2)(S.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
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
                        className: rK.B4,
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
                                  ? (0, p.jsx)(rQ, {
                                        isSpeaking: s,
                                        className: rK.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(rJ, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
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
                                  ? (0, p.jsx)(rQ, {
                                        isSpeaking: s,
                                        className: rK.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(rJ, {
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
var r0 = n(366010);
let r1 = n(993830),
    r2 = n(413142),
    r3 = { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO };
function r4() {
    let e = (0, _.bG)([nF.A], () => (0, r0.q)(nF.A.theme));
    return (0, p.jsx)("img", { src: e ? r1 : r2, width: 48, height: 32, alt: "" });
}
let r5 = (0, h.E2)(S.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.t8Qhib), V.intl.string(V.t.hmfkCi)],
    usePredicate: function () {
        return (0, _.bG)([i9.Ay], () => i9.Ay.isInputProfileCustom() && i9.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = f.useCallback((e) => {
                (lE.default.setNoiseCancellation("KRISP" === e, r3),
                    lE.default.setNoiseSuppression("STANDARD" === e, r3));
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
                l && (0, p.jsx)(r4, {}),
            ],
        });
    },
});
var r6 = n(934729),
    r8 = n(621380);
let r7 = !nh.Av;
function r9() {
    return (0, _.bG)([i9.Ay], () => i9.Ay.getMode() === lw.TB.PUSH_TO_TALK);
}
let ae = (0, h.zD)(S.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nh.Av ? V.intl.string(V.t.tG4Np5) : V.intl.string(V.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, _.bG)([i9.Ay], () => i9.Ay.getMode());
        return f.useMemo(() => {
            if (!nh.Av && e === lw.TB.PUSH_TO_TALK)
                return V.intl.format(V.t["VHI4+Y"], { onDownloadClick: () => (0, r6._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, _.bG)([i9.Ay], () => i9.Ay.getActiveInputProfile() !== r8.m.STUDIO);
    },
    useValue: function () {
        return (0, _.bG)([i9.Ay], () => i9.Ay.getMode() === lw.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? lw.TB.PUSH_TO_TALK : lw.TB.VOICE_ACTIVITY),
            (i = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lw.TB.PUSH_TO_TALK &&
                r7 &&
                (0, lT.openModalLazy)(async () => {
                    let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                    return (t) =>
                        (0, p.jsx)(e, {
                            title: V.intl.string(V.t.Kdt0Gb),
                            confirmText: V.intl.string(V.t["1WjMbC"]),
                            cancelText: V.intl.string(V.t.BddRzS),
                            onConfirm: () => (0, r6._)("PTT Limited Modal"),
                            body: V.intl.string(V.t.NIozvt),
                            ...t,
                        });
                }),
            lE.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
});
var at = n(484599);
function an(e) {
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
let ai = (0, h.E2)(S.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["pS+K2L"]), V.intl.string(V.t.nuFtHH)],
        usePredicate: r9,
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
                    className: at.e,
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
                        (0, p.jsx)(an, { shortcut: e }),
                    ],
                }),
            });
        },
    }),
    al = (0, h.sN)(S.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
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
        usePredicate: r9,
    });
var as = n(833473),
    ar = n(844981),
    aa = n(943679);
function ao() {
    return (0, ar.Ay)("VoiceSettings");
}
let au = (0, h.zD)(S.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => V.intl.string(aa.default.LGDPhA),
        useSubtitle: function () {
            let e = ao();
            if ((0, ar.Xt)(e))
                return e === ar.L3.BLOCKED_MONO_OUTPUT
                    ? V.intl.string(aa.default.rOXfEw)
                    : V.intl.string(aa.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, _.bG)([as.A], () => as.A.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lE.default.setSpatialAudio(e, [tk.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return ao() !== ar.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, ar.Xt)(ao());
        },
    }),
    ad = (0, h.Qx)(S.X.VOICE_INPUT_PROFILE_SETTING, {
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
            lE.default.setActiveInputProfile(e, { analyticsLocations: t });
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
    ac = (0, h.zZ)(S.X.VOICE_INPUT_PROFILE_CATEGORY, {
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
        buildLayout: () => [ad, r$, r5, rY, au, ae, ai, al, rX],
    });
var ag = n(403581),
    am = n(983851),
    aA = n(687021),
    aE = n(128450),
    ah = n(796774),
    aS = n(209932),
    ax = n(813564),
    aT = n(984813),
    ap = n(265872),
    af = n(305866),
    a_ = n(22231),
    aI = n(342073),
    aN = n(24482),
    aC = n(792348),
    ab = n(674168),
    ay = n(340368),
    av = n(754388),
    aj = n(805945),
    aO = n(647451);
function aL(e) {
    let { onSelect: t } = e,
        [n, i] = f.useState(!1),
        l = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        s = aN.Ay.canUseCustomCallSounds(l),
        r = f.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, p.jsx)(ap.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, p.jsx)(af.l, {
                children: (0, p.jsx)(av.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, p.jsx)(ab.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, p.jsx)(aj.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: V.intl.string(V.t.uOe0Az),
                children: (0, p.jsx)(a_.PencilIcon, { size: "md", color: "currentColor", className: aO.Wo }),
            }),
    });
}
function aR(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, aC.A)(t, null),
        i = (0, ax.wH)(),
        l = (0, ay._)("SoundPreviewButton") ? aI.L : am.H,
        s =
            0 === i
                ? V.intl.string(V.t.OASXjt)
                : V.intl.formatToPlainString(V.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, p.jsx)(aj.dT, {
        onClick: n,
        text: s,
        children: (0, p.jsx)(l, { size: "md", color: "currentColor", className: aO.wg }),
    });
}
function aD(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s),
        o = (0, ay._)("SoundboardCustomCallSoundSettingsPreview") ? aI.L : am.H;
    return (0, p.jsxs)("div", {
        className: aO.D6,
        children: [
            (0, p.jsxs)("div", {
                className: aO.kL,
                children: [
                    a && (0, p.jsx)(tG.A, { emojiId: s, emojiName: r, className: aO.Zg }),
                    (0, p.jsx)(J.E, {
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
                                            return (0, p.jsx)(J.E, {
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
                        ? (0, p.jsx)(aR, { sound: t })
                        : (0, p.jsx)(o, { size: "md", color: "currentColor", className: aO.Gk }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: aO.kL,
                children: [
                    (0, p.jsx)(aL, { onSelect: i }),
                    l &&
                        !n &&
                        (0, p.jsx)(aj.dT, {
                            onClick: () => i(null),
                            text: V.intl.string(V.t.jmtcGA),
                            children: (0, p.jsx)(lc.TrashIcon, {
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
    return (0, _.bG)([aS.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return aS.A.getSound("0" === t ? "0" : t, n);
    });
}
function aU(e) {
    let { guildId: t } = e,
        n = (0, _.bG)([aP.A], () => aP.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aM(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, p.jsxs)("div", {
        className: aG.Io,
        children: [
            r
                ? (0, p.jsx)(tG.A, { emojiId: l, emojiName: s, className: aG.nW })
                : (0, p.jsx)(am.H, { size: "md", color: "currentColor", className: aG.nW }),
            (0, p.jsx)(J.E, { className: aG.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aV = (0, h.E2)(S.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [V.intl.string(V.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eX.Ay)(),
            [t, n] = f.useState("0"),
            i = (0, aT.mz)(t),
            l = aM(i),
            s = i?.type === aT.PP.GLOBAL,
            r = (0, _.bG)([aS.A], () => aS.A.hasFetchedAllSounds()) && null != i && null == l;
        (f.useEffect(() => {
            r && (0, ax.ND)({ location: e });
        }, [r, e]),
            f.useEffect(() => {
                (0, ah.E7)();
            }, []));
        let a = f.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, p.jsx)(aU, { guildId: e.value }) : null;
        }, []);
        return (0, p.jsxs)(n3.n, {
            label: V.intl.string(V.t.nzUc3B),
            description: V.intl.format(V.t.u9RWmv, { helpdeskArticle: eb.A.getArticleURL(I.MVz.SOUNDBOARD) }),
            children: [
                (0, p.jsx)(aA.A, {
                    guildId: t,
                    className: aG.Dt,
                    globalOption: { label: V.intl.string(V.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, p.jsxs)(aE.A, {
                    title: V.intl.format(V.t.I2TsYN, {
                        nitroWheelHook: () => (0, p.jsx)(ag.t, { size: "md", color: "currentColor", className: aG.ax }),
                    }),
                    children: [
                        (0, p.jsx)(aD, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, ax.Dv)(t, e) : (0, ax.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, p.jsx)("div", {
                                className: aG.lm,
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
var ak = n(824744);
let aw = (0, h.sN)(S.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => V.intl.string(V.t.kbFsAD),
    useSubtitle: () => V.intl.format(V.t.BPbGq7, { helpCenterArticle: eb.A.getArticleURL(I.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tk.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, ak.w)(e);
        (0, ah.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, ax.wH)();
        return (0, ak.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aF = n(864145);
let aB = (0, h.sN)(S.X.SOUNDMOJI_VOLUME_SETTING, {
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
    az = (0, h.zZ)(S.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ABjMWI),
        buildLayout: () => [aw, aB, aV],
    });
var aX = n(803224),
    aY = n(552122);
let aH = (0, h.E2)(S.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [V.intl.string(V.t.fgSHf8)],
        usePredicate: () => null != aY.A.useHolidaySoundpack(),
        Component: () =>
            (0, p.jsx)(J.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: V.intl.format(V.t.Eup6Wv, {
                    onClick: () => (0, na.openUserSettings)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aW = (0, h.AK)(S.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.eyGEE4),
        useSearchTerms: () => [V.intl.string(V.t.eyGEE4)],
        destinationKey: S.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aK = (0, h.gN)(S.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aW] });
var aZ = n(264686);
let aq = (0, eN.D)(() => ({ currentPlayingSound: null }));
function aQ() {
    let e = aq.getField("currentPlayingSound");
    (e?.stop(), aq.setState({ currentPlayingSound: null }));
}
function aJ(e) {
    let t = aq.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ie.Ak)(e);
    aq.setState({ currentPlayingSound: n });
}
function a$(e) {
    return (0, h.zD)(`${S.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => aJ(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, _.bG)([aX.A], () => aX.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aX.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aZ.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, _.bG)([aX.A], () => aX.A.getDisableAllSounds());
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
    a1 = (0, h.D1)(S.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? V.intl.formatToPlainString(V.t["0JYT98"], { count: t })
                : V.intl.formatToPlainString(V.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => t_(S.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aQ();
            };
        },
        buildLayout: () => a0.map((e) => a$(e)),
    }),
    a2 = (0, h.zZ)(S.X.SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, _.bG)([aX.A], () => aX.A.getDisableAllSounds());
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
        buildLayout: () => [a1, aH, aK],
    }),
    a3 = (0, h.zD)(S.X.STREAMING_SHOW_STREAM_PREVIEWS, {
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
    a4 = (0, h.zD)(S.X.STREAMING_ADVANCED_SCREENSHARE, {
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
    a5 = (0, h.zD)(S.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
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
    a6 = (0, h.zD)(S.X.STREAMING_STREAM_ATTENUATION, {
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
    a8 = (0, h.sN)(S.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
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
    a7 = (0, h.zD)(S.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
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
    a9 = (0, h.bd)(S.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? V.intl.string(V.t.qrMyvm) : V.intl.string(V.t.LEtTNl)),
        useCollapsedSubtitle: () => t_(S.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [a6, a8, a7, a5, a4],
    }),
    oe = (0, h.zZ)(S.X.STREAMING_CATEGORY, { useTitle: () => V.intl.string(V.t.KDdjou), buildLayout: () => [a3, a9] });
var ot = n(106713);
let on = (0, h.E2)(S.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = ot.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, p.jsx)(sW.U, {
                label: V.intl.string(V.t.UTM8VP),
                deviceType: lw.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    oi = (0, h.E2)(S.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = ot.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, p.jsx)(sW.U, {
                label: V.intl.string(V.t.xuYQ0n),
                deviceType: lw.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    ol = (0, h.zC)(S.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [on, oi] }),
    os = (0, h.sN)(S.X.VOICE_INPUT_VOLUME_SETTING, {
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
            lE.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    or = (0, h.sN)(S.X.VOICE_OUTPUT_VOLUME_SETTING, {
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
            lE.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    oa = (0, h.zC)(S.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [os, or] });
var oo = n(702841),
    ou = n(152567),
    od = n(804037);
let oc = `${eb.A.getArticleURL(I.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    og = (0, h.E2)(S.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.nuFtHH)],
        usePredicate: function () {
            return (0, oo.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.LOOPBACK));
        },
        Component: function () {
            return (0, oo.bG)([i9.Ay], () => i9.Ay.supports(lw.O5.LOOPBACK))
                ? (0, p.jsx)(ou.A, {
                      size: "md",
                      notchBackground: ou.V.GRAY,
                      captionVoice: V.intl.string(V.t.bp3JOV),
                      captionNoVoice: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(J.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t.bgn75v),
                              }),
                              V.intl.string(V.t["MA+OZh"]),
                              (0, p.jsx)(nr.Anchor, {
                                  className: od.X,
                                  href: eb.A.getArticleURL(I.MVz.NO_INPUT_DETECTED),
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
    return (0, p.jsxs)(q.B, {
        children: [
            n && (0, p.jsx)(ll, { sourcePage: "voice" }),
            t && (0, p.jsx)(l9.A, { look: l9.k.WARNING, children: V.intl.string(V.t.Ioz3gx) }),
        ],
    });
}
let oE = (0, h.zZ)(S.X.VOICE_CATEGORY, {
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
                    let e = om.some((e) => t?.hardwareId?.startsWith(e)),
                        i = om.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return f.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: T.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, p.jsx)(oA, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [ol, oa, og],
    }),
    oh = (0, h.t_)(S.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        buildLayout: () => [oE, ac, s1, oe, a2, az, ry, rp],
    }),
    oS = (0, h.i4)(S.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.B1fFpf),
        usePredicate: () => i9.Ay.isSupported(),
        icon: sU.MicrophoneIcon,
        useMenu: sV.A,
        buildLayout: () => [oh],
    }),
    ox = (0, h.WI)(S.X.APP_SECTION, {
        useTitle: () => V.intl.string(V.t.gcyH1J),
        buildLayout: () => [oS, nZ, tt, iY, sM, n$],
    });
var oT = n(360669),
    op = n(643891),
    of = n(975807),
    o_ = n(353795),
    oI = n(534247);
function oN(e) {
    let { title: t, children: n, actions: i, graphicSrc: l, graphicLottie: s, footnote: r, size: a = "default" } = e,
        o = "compact" === a;
    return (0, p.jsxs)("div", {
        className: ic()(oI.kL, { [oI.oE]: o }),
        children: [
            (0, p.jsxs)(q.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: o ? 24 : 16,
                fullWidth: !1,
                className: oI.Qs,
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
                                    (0, p.jsx)(J.E, { variant: "text-xxs/normal", color: "text-subtle", children: r }),
                            ],
                        }),
                ],
            }),
            null != s
                ? (0, p.jsx)("div", {
                      className: oI.yO,
                      children: (0, p.jsx)(o_.v, { type: "lottie", lottie: s, aspectRatio: "6/4" }),
                  })
                : (0, p.jsx)("img", { src: l, className: oI.fA, alt: "" }),
        ],
    });
}
var oC = n(425565),
    ob = n(745188),
    oy = n(936564),
    ov = n(417792),
    oj = n(423764),
    oO = n(289873),
    oL = n(132500),
    oR = n(465323),
    oD = n(37766),
    oP = n(194261),
    oG = n(391048),
    oM = n(277984),
    oU = n(99696),
    oV = n(202613),
    ok = n(615405),
    ow = n(83617),
    oF = n(935208),
    oB = n(607399),
    oz = n(993077),
    oX = n(150934),
    oY = n(256006),
    oH = n(198970),
    oW = n(71532);
let oK = /[^0-9/]/g,
    oZ = /[^0-9]/g;
class oq extends f.PureComponent {
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
                ((i = (n = e.replace(oK, "").split("/"))[0]),
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
            ? (u = u.replace(oZ, ""))
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
var oQ = n(832208),
    oJ = n(782328);
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
                        getClassNameForLayout: () => oJ.ep,
                        renderInput: (e) => (0, p.jsx)(oq, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    o0 = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = f.useState(!1),
            [a, o] = f.useState(null),
            [u, d] = f.useState(i);
        return (
            f.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(oQ.A, {
                className: n,
                form: o$,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    (s || "" === e || r(!0),
                        (s && "" === e) || !(0, oW.So)(e) ? o(V.intl.string(V.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var o1 = n(219887),
    o2 = n(292856);
let o3 = "isDefault";
class o4 extends f.PureComponent {
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
            expiresMonth: t instanceof oV.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oV.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ((0, oM.ey)(), (0, oM.tc)());
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
                      className: o2.zc,
                      children: (0, p.jsx)(iK.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: o2.zc,
                  children: (0, p.jsx)(iK.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oY.g)(n);
        return (0, p.jsxs)("div", {
            className: o2.yV,
            children: [
                (0, p.jsx)(J.E, {
                    className: o2.bV,
                    variant: "text-sm/normal",
                    children: V.intl.string(V.t["50Auo2"]),
                }),
                (0, p.jsx)(oH.Ay, {
                    ...e,
                    mode: oH.Ay.Modes.EDIT,
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
            className: o2.yV,
            children: [
                (0, p.jsx)(J.E, { className: o2.bV, variant: "text-sm/normal", children: V.intl.string(V.t.Fo2YP7) }),
                (0, p.jsx)(o0, {
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
            className: o2.AU,
            children: (0, p.jsxs)(q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(s8.e, {
                        children: (0, p.jsxs)("div", {
                            className: o2.lH,
                            children: [
                                n
                                    ? (0, p.jsx)(lg.m, {
                                          text: V.intl.string(V.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: o2.dm }),
                                      })
                                    : null,
                                (0, p.jsx)(j.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oB.Fr ? "sm" : "md",
                                    text: oB.Fr ? V.intl.string(V.t.oyYWHE) : V.intl.string(V.t.yk5qfb),
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
                                size: oB.Fr ? "sm" : "md",
                                text: V.intl.string(V.t["ETE/oC"]),
                            }),
                            (0, p.jsx)(j.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: oB.Fr ? "sm" : "md",
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
            r = e instanceof oV.SJ;
        return (0, p.jsx)(oz.Z, {
            editable: !0,
            className: ic()(o2.Nr, i),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: o2.__invalid_paymentSection,
                        children: [
                            (0, p.jsx)(o1.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, p.jsx)("div", { className: o2.Um, children: V.intl.string(V.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: o2.Sv,
                                children: r
                                    ? V.intl.format(V.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : V.intl.string(V.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: o2.D5,
                        children: (0, p.jsx)(oX.S, {
                            value: o3,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, o3),
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
let o5 = _.Ay.connectStores([ok.A], () => ({ updateError: ok.A.editSourceError, removeError: ok.A.removeSourceError }))(
    o4,
);
var o6 = n(986485),
    o8 = n(849405),
    o7 = n(329693);
function o9() {
    (0, oU.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oL.A)() });
}
class ue extends f.PureComponent {
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
            ? (0, p.jsx)(o5, {
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
                      i ? null : (0, p.jsx)(ls.c, { className: o7.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: o7.Yb,
                          children: [
                              (0, p.jsx)(o1.A, {
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
let ut = f.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = f.useState(null),
        o = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, _.bG)([ok.A], () => ok.A.ipCountryCode),
        d = f.useMemo(() => (0, oR.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        f.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oM.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                n ? null : (0, p.jsx)(ls.c, { className: o7.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: o7.Yb,
                    children: [
                        void 0 !== t
                            ? (0, p.jsx)(o1.A, {
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
                                      (0, p.jsx)(oD._, { size: "lg" }),
                                      (0, p.jsx)(J.E, {
                                          variant: "text-sm/medium",
                                          className: o8.Wi,
                                          children: V.intl.string(o6.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, p.jsxs)("div", {
                            className: o7.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: o7.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(oO.y, { type: oO.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(J.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oR.$g)(e ?? 0, n, l, {
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
                                    text: V.intl.string(o6.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class un extends f.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oM.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oM.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oM.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, ow.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, lT.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, oG.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: o7.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: o7.z8,
                          children: [
                              (0, p.jsx)(J.E, { variant: "text-sm/normal", children: V.intl.string(V.t.aRHpAB) }),
                              (0, p.jsx)(J.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: o7.Sv,
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oF.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oV.LQ)),
            c = u.filter((e) => e instanceof oV.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, p.jsx)(
                    ue,
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
                              ut,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: o9,
                              },
                              e.id,
                          ),
                      )
                    : (0, p.jsx)(ut, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: o9,
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(C.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(oP.LockIcon, { size: "sm", className: o7.hz }),
                                          " ",
                                          V.intl.string(V.t.W26xGQ),
                                      ],
                                  }),
                                  (0, p.jsx)(J.E, {
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
var ui = n(459357),
    ul = n(295405),
    us = n(166403),
    ur = n(773669),
    ua = n(943009);
function uo() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, oj.Gw)(e.country) };
}
let uu = (0, h.E2)(S.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, _.bG)([ok.A], () => ok.A.isSyncing),
                i = (0, _.bG)([ul.A], () => ul.A.paymentSources),
                l = (0, _.bG)([ul.A], () => ul.A.defaultPaymentSourceId),
                s = (0, _.bG)([ur.default], () => ur.default.locale),
                r = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
                a = (0, _.bG)([ok.A], () => ok.A.isRemovingPaymentSource),
                o = (0, _.bG)([ok.A], () => ok.A.isUpdatingPaymentSource),
                { enabled: u } = (0, ui.c)({ location: "UserSettingsBilling" });
            return (f.useEffect(() => {
                (oM.$o(), oM.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, p.jsx)("div", { className: ua.o, children: (0, p.jsx)(oO.y, {}) })
                : (0, p.jsx)(un, {
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
    ud = (0, h.E2)(S.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = f.useMemo(
                () => [
                    { text: V.intl.string(ob.default["6bWeWP"]), onClick: () => (0, of.A)(oC.C) },
                    {
                        text: V.intl.string(ob.default.xYa9Y8),
                        onClick: () => (0, of.A)(eb.A.getArticleURL(I.MVz.BUY_GIFT_CARDS)),
                    },
                ],
                [],
            );
            return (0, p.jsx)("div", {
                className: oy.k,
                children: (0, p.jsx)(oN, {
                    title: V.intl.string(ob.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: e,
                    children: (0, p.jsx)(J.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: V.intl.string(ob.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, ov.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !1, canFetchPaymentSources: !1 }),
    }),
    uc = (0, h.zZ)(S.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.W26xGQ),
        useSubtitle: () => {
            let e = uo();
            return null != e ? V.intl.format(V.t.e2t1G5, { country: e.countryName }) : V.intl.string(V.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == uo()
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
        buildLayout: () => [uu, ud],
    });
var ug = n(837381),
    um = n(689175),
    uA = n(928039),
    uE = n(921853),
    uh = n(22306);
function uS(e) {
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
                className: uh.v,
                children: (0, p.jsxs)("div", {
                    className: uh.U,
                    children: [
                        (0, p.jsx)(ld.K, {
                            variant: "icon-only",
                            icon: uE.n,
                            disabled: t <= 0,
                            onClick: () => i(t - 1),
                            "aria-label": V.intl.string(V.t.vgfxaA),
                        }),
                        (0, p.jsx)(J.E, { variant: "text-sm/medium", children: u }),
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
var ux = n(32731);
n(938796);
var uT = n(334279),
    up = n(122817),
    uf = n(665260),
    u_ = n(315069),
    uI = n(557009),
    uN = n(570221),
    uC = n(243217);
class ub extends u_.A {
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
        let t = null != e.payment_source ? oV.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? ux.A.createFromServer(e.sku) : null,
            i = null != e.subscription ? uC.A.createFromServer(e.subscription) : null;
        return new ub({
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
            entitlements: null != e.entitlements ? e.entitlements.map((e) => uI.A.createFromServer(e)) : void 0,
            invoice: null != e.invoice ? uN.Y.createFromServer(e.invoice) : null,
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
        return uf.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && null != this.skuId && Object.values(tJ.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === I.EZt.GUILD_PRODUCT || uf.Lt(this.sku.flags, up.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === I.EZt.COLLECTIBLES;
    }
    get isFractionalPremium() {
        return null != this.skuId && uT.I.ALL.has(this.skuId);
    }
    get isShopPurchase() {
        return this.isCollectible || this.isFractionalPremium;
    }
}
var uy =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    uv =
        (((l = {})[(l.NITRO = 1)] = "NITRO"),
        (l[(l.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (l[(l.SHOP = 3)] = "SHOP"),
        (l[(l.APPLICATION = 4)] = "APPLICATION"),
        (l[(l.PRODUCT = 5)] = "PRODUCT"),
        l),
    uj =
        (((s = {})[(s.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (s[(s.REFUNDED = 2)] = "REFUNDED"),
        (s[(s.REVERSED = 3)] = "REVERSED"),
        s),
    uO =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    uL =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uR(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? oV.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? ux.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new ub({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uD = { receipts: [], cursor: null };
var uP = n(34188),
    uG = n(597770),
    uM = n(206828),
    uU = n(576243),
    uV = n(147925),
    uk = n(707554),
    uw = n(957565),
    uF = n(250627),
    uB = n(871109),
    uz = n(571654),
    uX = n(411342),
    uY = n(179499),
    uH = n(741231),
    uW = n(95035),
    uK = n(317525),
    uZ = n(460103);
function uq(e) {
    let { description: t, detail: n } = e;
    return (0, p.jsx)("li", {
        className: uZ.Iu,
        children: (0, p.jsxs)(lN.A, {
            justify: lN.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function uQ(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uF.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, uz.z)(i),
        s = (0, _.bG)([lv.A], () => lv.A.getGuild(t)),
        r = i?.role_id != null && i?.attachments_count === 0 ? V.intl.string(V.t.H11qcT) : l,
        a = f.useCallback(async () => {
            (s?.features.has(I.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, uH.A)(I.BVt.GUILD_PRODUCT(t, n))
                : await (0, uH.A)(I.BVt.CHANNEL(t)),
                (0, tY.default)());
        }, [s, t, n]);
    return (0, p.jsxs)(p.Fragment, {
        children: [
            null != r && (0, p.jsx)(uq, { description: V.intl.string(V.t.lXPbJb), detail: r }),
            null != s &&
                (0, p.jsx)(uq, {
                    description: V.intl.string(V.t.Wpn8z8),
                    detail: (0, p.jsx)(uW.A, { onClick: a, children: s.name }),
                }),
        ],
    });
}
function uJ(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uF.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, _.bG)([uB.A], () => uB.A.getGuildProductFetchState(n) === uB.e.FETCHING),
        s = i?.role_id,
        r = (0, _.bG)([uK.A], () => (null != s ? uK.A.getRole(t, s) : void 0), [t, s]),
        a = (0, uY.A)({ guildId: t, productId: n }),
        o = (i?.attachments?.length ?? 0) > 0,
        u = null != r;
    return l
        ? (0, p.jsx)("div", { className: uZ.hT, children: (0, p.jsx)(oO.y, {}) })
        : null != i && (o || u)
          ? (0, p.jsxs)("div", {
                className: uZ.hT,
                children: [
                    o &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(J.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: uZ.yE,
                                    children: V.intl.string(V.t.hxawoy),
                                }),
                                (0, p.jsx)(j.$, { ...a }),
                            ],
                        }),
                    u &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                o && (0, p.jsx)("div", { className: uZ.yF }),
                                (0, p.jsx)(J.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: uZ.yE,
                                    children: V.intl.string(V.t.gWBNet),
                                }),
                                (0, p.jsx)(uX.A, { role: r }),
                            ],
                        }),
                ],
            })
          : null;
}
let u$ = function (e, t) {
    (0, lT.openModalLazy)(async () => {
        let { default: i } = await n.e("234138").then(n.bind(n, 206049));
        return (n) => (0, p.jsx)(i, { payment: e, paymentSource: t, ...n });
    });
};
var u0 = n(818348);
async function u1(e) {
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
function u2(e) {
    let { payment: t } = e,
        [n, i] = f.useState(null),
        [l, s] = f.useState(null);
    async function r(e) {
        try {
            let n = await u1(t.id);
            i(n);
            let l = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
            (window.open(l, "_blank"), s(null));
        } catch (e) {
            s(e.body?.message);
        }
    }
    let a = null != t.paymentSource && t.status === u0.__.COMPLETED,
        o = n?.invoiceLink,
        u = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, p.jsxs)("div", {
              className: uZ.It,
              children: [
                  (0, p.jsx)(nr.Anchor, { onClick: () => r(!1), children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, p.jsx)(nr.Anchor, {
                            className: uZ.oe,
                            onClick: () => r(!0),
                            children: V.intl.formatToPlainString(V.t["3x6NGw"], {}),
                        })
                      : null,
                  null != l && "" !== l && (0, p.jsx)(iK.w, { type: "critical", message: l, role: "alert" }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, p.jsxs)("div", {
                className: uZ.It,
                children: [
                    (0, p.jsx)(nr.Anchor, { href: o, children: V.intl.formatToPlainString(V.t.R0xzCN, {}) }),
                    null != u
                        ? u.map((e, t) =>
                              (0, p.jsx)(
                                  nr.Anchor,
                                  {
                                      className: uZ.oe,
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
                  className: uZ.It,
                  children: (0, p.jsx)(nr.Anchor, {
                      onClick: () => {
                          var e;
                          ((e = t.paymentSource), u$(t, e));
                      },
                      children: V.intl.formatToPlainString(V.t.onRIxS, {}),
                  }),
              })
            : null;
}
var u3 = n(510022),
    u4 = n(427262),
    u5 = n(106799),
    u6 = n(580630);
let u8 = (e) => `https://${I.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function u7(e, t) {
    return t === u0.Yr.DISCORD_ORB
        ? (0, p.jsxs)("span", {
              className: uZ.db,
              children: [
                  (0, p.jsx)(u5.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  V.intl.formatToPlainString(V.t.YMor7k, { count: e }),
              ],
          })
        : (0, u6.$g)(e, t);
}
function u9(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: l } = e,
        { analyticsLocations: s } = (0, eX.Ay)(tk.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uL.REDEEMED
        ? null
        : n.status === uL.REFUNDED
          ? (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(uk.H, { className: uZ.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                    (0, p.jsx)("div", {
                        className: uZ.iL,
                        children:
                            null != o
                                ? V.intl.format(V.t.Q1K9eg, { username: u4.Ay.getName(o) })
                                : V.intl.format(V.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uL.CLAIMED || n.status === uL.UNCLAIMED
            ? (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(uk.H, { className: uZ.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: uZ.iL,
                          children:
                              null != o
                                  ? V.intl.format(V.t.vfUW65, { username: u4.Ay.getName(o) })
                                  : V.intl.string(V.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, p.jsx)("div", {
                              className: uZ.TP,
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
                      (0, p.jsx)(uk.H, { className: uZ.mW, children: V.intl.string(V.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: uZ.iL,
                          children: l
                              ? V.intl.format(V.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : V.intl.format(V.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, p.jsx)("div", {
                          className: uZ.TP,
                          children: l
                              ? (0, p.jsx)(j.$, {
                                    variant: "primary",
                                    text: V.intl.string(V.t.zoztQA),
                                    onClick: () => (0, of.A)(u8(i)),
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
                                            (0, u3.n)({ sku: r, application: a, analyticsLocations: s }));
                                    },
                                }),
                      }),
                  ],
              });
}
var de = n(933832),
    dt = n(789645);
function dn(e) {
    let { refund: t, locale: n } = e,
        i = u8(n),
        l = t.eligible ? de.CheckmarkLargeIcon : dt.P;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(uk.H, { className: uZ.mW, children: V.intl.string(V.t["n/27pr"]) }),
            (0, p.jsxs)("div", {
                className: uZ.iL,
                children: [
                    (0, p.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uO.IN_GAME_ITEM
                                    ? V.intl.format(V.t["5lvoVS"], { supportURL: t })
                                    : V.intl.string(V.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uO.PREMIUM:
                                    return e.eligible
                                        ? V.intl.format(V.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : V.intl.formatToPlainString(V.t.dk7vyL, { dateLimit: n });
                                case uO.GIFT:
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
                    t.policy !== uO.IN_GAME_ITEM &&
                        (0, p.jsxs)("div", {
                            className: uZ.My,
                            children: [
                                (0, p.jsx)("div", {
                                    className: uZ.Kf,
                                    children:
                                        null != t.window &&
                                        (0, p.jsxs)("div", {
                                            className: uZ._Z,
                                            children: [
                                                (0, p.jsx)(uk.H, {
                                                    className: uZ.ud,
                                                    children: V.intl.string(V.t.H0RNz4),
                                                }),
                                                (0, p.jsxs)("div", {
                                                    className: uZ.z9,
                                                    children: [
                                                        (0, p.jsx)(l, { className: uZ.xb, color: "currentColor" }),
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
var di = n(679897);
function dl(e) {
    let { description: t, cost: n } = e;
    return (0, p.jsx)("li", {
        className: uZ.mg,
        children: (0, p.jsxs)(lN.A, {
            justify: lN.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function ds(e) {
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
                (0, uw.C)(t, () => {
                    (a(!0), s(!0));
                });
            },
            children: (0, p.jsx)("div", { className: uZ.l9, children: t }),
        }),
    });
}
function dr(e) {
    let { paymentId: t } = e;
    return (0, p.jsx)("li", {
        className: uZ.mg,
        children: (0, p.jsxs)("div", {
            className: uZ.bx,
            children: [
                (0, p.jsx)("div", { children: V.intl.string(V.t["UQim+r"]) }),
                (0, p.jsx)(ds, {
                    value: t,
                    copyText: V.intl.string(V.t["Mdk9+A"]),
                    copyFeedbackText: V.intl.string(V.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function da(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === uj.REVERSED;
    return (0, p.jsxs)(J.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: ic()(di.XM, n ? di.aB : di.EN),
        children: [
            t === uj.REVERSED && V.intl.string(V.t.YQv9Li),
            t === uj.PARTIALLY_REFUNDED && V.intl.string(V.t.lYbZzz),
            t === uj.REFUNDED && V.intl.string(V.t.ZBb6NK),
        ],
    });
}
function du(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === u0.kM.APPLE_PARTNER ? new oV.Pw({}) : null);
    return null == i
        ? null
        : (0, p.jsx)(o1.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: uZ.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function dd(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, p.jsx)(du, { payment: t.payments[0], locale: n })
            : null
        : (0, p.jsx)(q.B, {
              children: t.payments.map((e) =>
                  (0, p.jsxs)(
                      lN.A,
                      {
                          justify: lN.A.Justify.BETWEEN,
                          align: lN.A.Align.CENTER,
                          children: [
                              (0, p.jsx)(du, { payment: e, locale: n }),
                              (0, p.jsxs)(q.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, p.jsx)(da, { tag: e.tag }),
                                      (0, p.jsx)(J.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          children: u7(e.amount, t.currency),
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
function dc(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)("div", { className: uZ.ts }),
            t.delisted
                ? (0, p.jsx)(iK.w, {
                      type: "warning",
                      message: V.intl.string(V.t["3AvulN"]),
                      role: "none",
                      action: { text: V.intl.string(V.t.zoztQA), onClick: () => (0, of.A)(u8(n)) },
                  })
                : null != t.guild_id && (0, p.jsx)(uJ, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function dg(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: l, guild_product: s, game_item: r, refund: a } = t;
    return (0, p.jsx)(n5.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, p.jsxs)("div", {
            className: uZ.WI,
            children: [
                (0, p.jsx)(uk.H, { className: uZ.mW, children: V.intl.string(V.t.nyzoFb) }),
                (0, p.jsxs)("div", {
                    className: ic()(uZ.iL, uZ.W),
                    children: [
                        (0, p.jsx)(dd, { receipt: t, locale: n }),
                        (0, p.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(dl, { description: t.description, cost: u7(t.subtotal, l) }),
                                            (0, p.jsx)(dl, {
                                                description: V.intl.string(V.t.QgWXht),
                                                cost: u7(t.tax, l),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(dl, { description: V.intl.string(V.t.txajQG), cost: u7(t.total, l) }),
                                t.amount_refunded > 0 &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(dl, {
                                                description: V.intl.string(V.t["A+I0AP"]),
                                                cost: u7(-t.amount_refunded, l),
                                            }),
                                            (0, p.jsx)(dl, {
                                                description: V.intl.string(V.t.xER6Wi),
                                                cost: u7(t.net, l),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(dr, { paymentId: t.id }),
                                s?.guild_id != null &&
                                    (0, p.jsx)(uQ, { guildId: s.guild_id, guildProductListingId: s.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != s && (0, p.jsx)(dc, { guildProduct: s, locale: n }),
                (0, p.jsx)(u2, { payment: t.receipt_payment }),
                null != r && (0, p.jsx)(u9, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, p.jsx)(dn, { refund: a, locale: n }),
            ],
        }),
    });
}
function dm(e) {
    let { withGradient: t } = e;
    return t
        ? (0, p.jsx)(uU.A, { size: 24, iconSize: 16, color: n1.A.unsafe_rawColors.NEUTRAL_1, className: uZ.Sy })
        : (0, p.jsx)("div", {
              className: ic()(uZ.Sy, uZ.uX, uZ.Xr),
              children: (0, p.jsx)(ag.t, { size: "custom", width: 16, height: 16, color: n1.A.colors.ICON_DEFAULT }),
          });
}
function dA(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, _.bG)([lv.A], () => lv.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uv.NITRO:
            return (0, p.jsx)(dm, { withGradient: !0 });
        case uv.NITRO_BASIC:
            return (0, p.jsx)(dm, { withGradient: !1 });
        case uv.SHOP:
            return (0, p.jsx)(uP.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uZ.sV });
        case uv.APPLICATION:
        case uv.PRODUCT:
            return (0, p.jsx)(i7.A, {
                className: uZ.Sy,
                guildClassName: uZ.zA,
                game: t.icon === uv.APPLICATION ? n : void 0,
                guild: i,
                size: i7.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function dE(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uy.PAID)
        switch (i.status) {
            case uL.CLAIMED:
                return (0, p.jsx)("span", { className: uZ.gD, children: V.intl.string(V.t.lIsIFo) });
            case uL.UNCLAIMED:
                return (0, p.jsx)("span", { className: uZ.Tf, children: V.intl.string(V.t["+tqSi3"]) });
            case uL.REDEEMED:
                return (0, p.jsx)("span", { className: uZ.gD, children: V.intl.string(V.t.Osji1u) });
            case uL.FAILED:
                return (0, p.jsx)("span", { className: uZ.ob, children: V.intl.string(V.t.Yo4ru6) });
            default:
                return n
                    ? (0, p.jsx)("span", { className: uZ.Tf, children: V.intl.string(V.t.y7F0Re) })
                    : (0, p.jsx)("span", { className: uZ.Tf, children: V.intl.string(V.t.HHC5Z4) });
        }
    switch (t.status) {
        case uy.PENDING:
            return (0, p.jsx)("span", { className: uZ.oE, children: V.intl.string(V.t.y7F0Re) });
        case uy.FAILED:
            return (0, p.jsx)("span", { className: uZ.ob, children: V.intl.string(V.t.Yo4ru6) });
        case uy.REVERSED:
            return (0, p.jsx)("span", { className: uZ.ob, children: V.intl.string(V.t.YQv9Li) });
        case uy.CANCELED:
            return (0, p.jsx)("span", { className: uZ.ob, children: V.intl.string(V.t.ttkBhy) });
        case uy.PARTIALLY_REFUNDED:
            return (0, p.jsx)("span", { className: uZ.gD, children: V.intl.string(V.t.lYbZzz) });
        case uy.REFUNDED:
            return (0, p.jsx)("span", { className: uZ.gD, children: V.intl.string(V.t.ZBb6NK) });
        case uy.PAID:
            return null;
    }
}
function dh(e) {
    let { receipt: t, locale: n, className: i } = e,
        [l, s] = f.useState(!1),
        { hasAlreadyLinked: r } = (0, uM.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, p.jsx)(ug.tG, {
        id: t.id,
        children: (e) =>
            (0, p.jsxs)(n5.D, {
                onClick: () => s(!l),
                "data-expanded": l,
                className: ic()(uZ.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, p.jsxs)(lN.A, {
                        className: uZ.J7,
                        align: lN.A.Align.CENTER,
                        "data-expanded": l,
                        children: [
                            (0, p.jsx)(J.E, {
                                variant: "text-sm/normal",
                                className: uZ.p6,
                                children: (0, iA.i$)(im()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, p.jsxs)("div", {
                                className: uZ.h_,
                                children: [
                                    (0, p.jsx)(dA, { receipt: t }),
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
                                                                      return (0, aN.xq)(t)
                                                                          ? aN.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${aN.Ay.getDisplayName(t, !1, i)}`;
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
                                              children: (0, p.jsx)(uG.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uZ.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, p.jsxs)("div", {
                                className: uZ.vj,
                                children: [
                                    (0, p.jsx)(dE, { receipt: t, hasLinkedToApplication: r }),
                                    (0, p.jsx)("span", { className: uZ.q9, children: u7(t.net, t.currency) }),
                                ],
                            }),
                            (0, p.jsx)(uV.A, {
                                className: uZ.fT,
                                direction: l ? uV.A.Directions.UP : uV.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    l ? (0, p.jsx)(dg, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var dS = n(949779);
function dx(e) {
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
        d = (0, uA.A)("billing-history", l);
    return (0, p.jsx)(ug.hD, {
        navigator: d,
        children: (0, p.jsx)(ug.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, p.jsx)(uS, {
                    className: dS.GD,
                    currentPageIndex: s,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, p.jsx)(um.Ch, {
                        className: dS.Bd,
                        ref: l,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, p.jsx)(dh, { className: ic()(dS.Nj, dS.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function dT(e) {
    let { subscription: t } = e;
    return (
        tE()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, p.jsxs)(oz.Z, {
            className: dS.K1,
            children: [
                (0, p.jsx)("div", {
                    className: dS.BF,
                    children: V.intl.format(V.t["6mIX6s"], { paymentGatewayName: u0.qm[t.paymentGateway] }),
                }),
                (0, p.jsx)("div", {
                    className: dS.Q2,
                    children: V.intl.format(V.t.eG0uZB, {
                        paymentGatewayName: u0.qm[t.paymentGateway],
                        billingHistoryLink: (0, aN.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function dp(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: l,
            loadNextPage: s,
        } = (function () {
            let [e, t] = f.useState(uD),
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
                                l = i.receipts.map(uR);
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
        r = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, p.jsxs)("div", {
              className: dS.GD,
              children: [
                  null != r && a ? (0, p.jsx)(dT, { subscription: r }) : null,
                  n.length > 0
                      ? (0, p.jsxs)("div", {
                            className: ic()(dS.PQ, dS.GD),
                            children: [
                                (0, p.jsx)("div", {
                                    className: ic()(dS.Nj, dS.Bd),
                                    children: (0, p.jsxs)(lN.A, {
                                        className: dS.Yi,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: uZ.p6,
                                                children: V.intl.string(V.t["5t11BV"]),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: dS.Ir,
                                                children: V.intl.string(V.t.yAAPb2),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: uZ.vj,
                                                children: V.intl.string(V.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, p.jsx)(dx, { receipts: n, locale: t, loadNextPage: s }),
                            ],
                        })
                      : l
                        ? (0, p.jsx)(J.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: V.intl.string(V.t["fb3n+4"]),
                          })
                        : a
                          ? null
                          : (0, p.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: V.intl.string(V.t.GqvDkk),
                            }),
              ],
          })
        : (0, p.jsx)(oO.y, {});
}
var df = n(545075);
let d_ = (0, h.E2)(S.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, _.bG)([ur.default], () => ur.default.locale);
            return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(df.kb, {}), (0, p.jsx)(dp, { locale: e })] });
        },
        useSearchTerms: () => [V.intl.string(V.t.obLrcK)],
    }),
    dI = (0, h.zZ)(S.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.obLrcK),
        buildLayout: () => [d_],
    }),
    dN = (0, h.t_)(S.X.BILLING_PANEL, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [uc, dI],
        useObscuredNotice: op.L,
    }),
    dC = (0, h.i4)(S.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        icon: oT.B,
        buildLayout: () => [dN],
    });
var db = n(70283),
    dy = n(682618),
    dv = n(92202),
    dj = n(534284),
    dO = n(139486),
    dL = n(962644),
    dR = n(35587),
    dD = n(86379);
let dP = (0, h.E2)(S.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: df.uK,
        usePredicate: () => (0, dD.Hp)(),
        useSearchTerms: () => [V.intl.string(V.t.vwMEHS)],
    }),
    dG = (0, h.zZ)(S.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dP] });
var dM = n(704333),
    dU = n(414499),
    dV = n(31300),
    dk = n(997101);
let dw = {
        [dk.d.US]: [
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
        [dk.d.IT]: [
            {
                id: "gamelife",
                name: "Gamelife",
                url: "https://www.gamelife.it/cava0261-discord-25-eur-codice-di-attivazione?attribute_values=4",
            },
        ],
    },
    dF = [];
function dB(e) {
    return null == e ? dF : (dw[e] ?? dF);
}
function dz(e) {
    let { enabled: t } = (0, dv.K)({ location: e }),
        n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.storeCountry?.country);
    return t && dB(n).length > 0;
}
var dX = n(178881);
function dY() {
    return n.e("5660").then(n.bind(n, 946647));
}
function dH(e) {
    let { icon: t, children: n } = e;
    return (0, p.jsxs)(J.E, {
        variant: "text-xs/normal",
        color: "text-default",
        className: dX.A,
        children: [
            (0, p.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, p.jsx)("span", { children: n }),
        ],
    });
}
let dW = (0, h.zZ)(S.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dK],
        usePredicate: () => dz("GiftInventoryMarketingBanner"),
    }),
    dK = (0, h.E2)(S.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dz("GiftCardsGiftInventoryBanner"),
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
                        dB(t).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n(e), (0, of.A)(e.url));
                            },
                        })),
                    [t, n],
                );
            return e
                ? (0, p.jsx)(oN, {
                      size: "compact",
                      title: V.intl.string(ob.default.Ja5Q8Z),
                      graphicLottie: dY,
                      actions: i,
                      children: (0, p.jsxs)(q.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, p.jsx)(dH, { icon: dM.B, children: V.intl.string(ob.default["9xo1g9"]) }),
                              (0, p.jsx)(dH, { icon: dU.h, children: V.intl.string(ob.default.I5UWh9) }),
                              (0, p.jsx)(dH, {
                                  icon: uG.GiftIcon,
                                  children: V.intl.format(ob.default.ZuneBP, {
                                      onBillingSettingsClick: () => (0, na.openUserSettings)(S.X.BILLING_PANEL),
                                  }),
                              }),
                              (0, p.jsx)(dH, {
                                  icon: dV.k,
                                  children: V.intl.format(ob.default.UwYHGm, { websiteUrl: oC.C }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var dZ = n(982240),
    dq = n(948518),
    dQ = n(914410),
    dJ = n(556427),
    d$ = n(573343);
function d0(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, p.jsxs)("div", {
        className: ic()(d$.fO, { [d$.bF]: i }),
        children: [
            null != n && (0, p.jsx)("img", { src: n, alt: "", className: d$.si }),
            (0, p.jsxs)("div", {
                className: d$.tc,
                children: [
                    (0, p.jsx)(J.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, p.jsx)(J.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: V.intl.format(dJ.default.qvx9E4, { count: (0, dZ.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function d1(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, p.jsx)("div", {
        className: d$.dw,
        children: t.map((e) => (0, p.jsx)(d0, { tier: e, iconUrl: (0, dO.Se)(e), active: e.key === n?.key }, e.key)),
    });
}
function d2(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eX.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, dq.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, p.jsx)("div", {
        className: d$.NG,
        children: (0, p.jsx)(j.$, {
            variant: "primary",
            icon: uG.GiftIcon,
            text: V.intl.string(dJ.default.DZnomS),
            onClick: l,
        }),
    });
}
function d3(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, dZ.rL)(i),
        a = (0, dZ.rL)(l),
        o = (0, dO.GZ)(n, i, l),
        u = (0, dO.Se)(i),
        d = (0, dO.Se)(l);
    return (
        (t =
            null != l
                ? V.intl.formatToPlainString(dJ.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : V.intl.formatToPlainString(dJ.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, p.jsxs)("div", {
            className: d$.mY,
            children: [
                null != u &&
                    (0, p.jsx)("div", {
                        className: d$.fC,
                        children: (0, p.jsx)("img", { src: u, alt: "", className: d$.qS }),
                    }),
                (0, p.jsxs)("div", {
                    className: d$.Qs,
                    children: [
                        (0, p.jsx)(J.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, p.jsx)(dQ.Ay, { variant: dQ.qP.BLUE, weight: dQ.fh.MEDIUM, progress: o }),
                        (0, p.jsx)(J.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: d$.qg,
                            children: V.intl.format(dJ.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                null != d &&
                    (0, p.jsx)("div", {
                        className: d$.fC,
                        children: (0, p.jsx)("img", { src: d, alt: "", className: d$.qS }),
                    }),
            ],
        })
    );
}
function d4(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, _.cf)([dZ.Ay], () => ({
            badgeProgress: dZ.Ay.getSingleRequirementProgress(db.$.GIFTING)?.current ?? 0,
            currentTier: dZ.Ay.getCurrentTier(db.$.GIFTING),
            nextTier: dZ.Ay.getNextTier(db.$.GIFTING),
            giftsRemaining: dZ.Ay.getRemainingToNextTier(db.$.GIFTING),
            tiers: dZ.Ay.getBadgeById(db.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, p.jsxs)("div", {
              className: d$.kL,
              children: [
                  (0, p.jsxs)("div", {
                      className: d$.Jo,
                      children: [
                          n > 0 &&
                              (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsx)(d3, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, p.jsx)("div", { className: d$.yF }),
                                  ],
                              }),
                          (0, p.jsx)(d1, { tiers: r, currentTier: i }),
                          (0, p.jsx)(J.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: d$.PJ,
                              children: V.intl.string(dJ.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, p.jsx)(d2, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let d5 = (0, h.zZ)(S.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => V.intl.string(dJ.default.sFokBp),
        buildLayout: () => [d6],
        usePredicate: () => {
            let e = (0, dO.F5)("gift_inventory"),
                t = (0, _.bG)([dZ.Ay], () => dZ.Ay.getBadgeById(db.$.GIFTING));
            return e && null != t;
        },
    }),
    d6 = (0, h.E2)(S.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [V.intl.string(dJ.default.sFokBp)],
        Component: () => (0, p.jsx)(d4, {}),
    });
var d8 = n(264779),
    d7 = n(412260),
    d9 = n(555393),
    ce = n(725807),
    ct = n(212168),
    cn = n(976860),
    ci = n(469778),
    cl = n(45938),
    cs = n(109802),
    cr = n(869038),
    ca = n(380856);
function co(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, p.jsxs)(lN.A, {
        className: ic()(ca.wx, n),
        align: lN.A.Align.CENTER,
        children: [
            (0, p.jsx)("div", { className: ca.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function cu(e) {
    let { children: t, className: n } = e;
    return (0, p.jsx)("div", { className: ic()(ca.rf, n), children: t });
}
class cd extends f.PureComponent {
    static Header = co;
    static Body = cu;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, p.jsx)("div", { className: ic()(ca.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var cc = n(180522),
    cg = n(871123),
    cm = n(366523),
    cA = n(280450),
    cE = n(30793),
    ch = n(97352),
    cS = n(67480),
    cx = n(615396),
    cT = n(274904);
class cp extends f.PureComponent {
    _copyModeTimeout = new rW.Ep();
    state = { copyMode: cs.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cs.q.SUCCESS:
                return V.intl.string(V.t.XVvPjU);
            case cs.q.ERROR:
                return V.intl.string(V.t.i4GM3L);
            default:
                return V.intl.string(V.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        cr.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, cl.AK)(t, n),
            (0, uw.C)(
                e,
                () => this.setState({ copyMode: cs.q.SUCCESS }),
                () => this.setState({ copyMode: cs.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cs.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, p.jsxs)(lN.A, {
            direction: lN.A.Direction.VERTICAL,
            className: cT.Gj,
            children: [
                (0, p.jsx)(cs.e, {
                    className: cT.ph,
                    value: (0, cl.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uw.p5,
                    hideMessage: e ? V.intl.string(V.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: s5.XD.BRAND,
                    buttonLook: s5.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: cT.KB,
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
class cf extends f.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await cr.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && cr.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, cg.bF)(e)
            ? (0, p.jsx)(cm.e, { shape: "square", sku: e, containerClassName: cT.ez })
            : null != t
              ? (0, p.jsx)(cc.A, { giftStyle: t, className: cT.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(i7.A, { game: n, size: i7.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, cg.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: ic()(cT.Oc, cT.ic),
                  children: [
                      (0, p.jsx)(i7.A, { game: n, size: i7.M.XSMALL, skuId: e.id, className: cT._u }),
                      V.intl.format(V.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: cT.Oc, children: V.intl.format(V.t.zMcvcA, { copies: t.length }) });
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
            (0, p.jsx)("div", { className: cT.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(lN.A, {
            justify: lN.A.Justify.BETWEEN,
            align: lN.A.Align.CENTER,
            className: cT.pe,
            children: [
                (0, p.jsx)(J.E, { variant: "text-md/normal", children: V.intl.string(V.t.lELyPj) }),
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
        return (0, p.jsxs)(cd, {
            className: i,
            children: [
                (0, p.jsx)(n5.D, {
                    onClick: this.handleToggleOpen,
                    className: cT.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(cd.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: cT.MY,
                            children: [
                                (0, p.jsxs)(lN.A, {
                                    align: lN.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: cT.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(uV.A, {
                                    direction: a ? uV.A.Directions.UP : uV.A.Directions.DOWN,
                                    className: cT.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(cd.Body, {
                          children: s
                              ? (0, p.jsx)(oO.y, { className: cT.u1 })
                              : (0, p.jsxs)(f.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, p.jsx)(cp, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let c_ = _.Ay.connectStores([cS.A, tu.A, cE.A, i2.A, ch.A, cA.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = cS.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = cE.A.getForGifterSKUAndPlan(cA.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: tu.A.enabled,
        isFetching: cE.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: cE.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i2.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, cx.c9)(n) : null,
        giftCodes: s,
    };
})(cf);
var cI = n(725570),
    cN = n(736653),
    cC = n(46054);
let cb = im().duration(30, "days");
var cy = n(416052),
    cv = n(878309);
function cj(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, p.jsx)(lx.a, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: cv.aR }),
        onClose: async () => await t(),
        actions: [{ text: V.intl.string(V.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, p.jsxs)("div", {
            className: cv.t4,
            children: [
                (0, p.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t.iufib1) }),
                (0, p.jsx)(J.E, { variant: "text-md/normal", className: cv.G3, children: V.intl.string(V.t.eAn6z2) }),
            ],
        }),
    });
}
let cO = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = f.useState(null),
        o = (0, tK.GV)(),
        { analyticsLocations: u } = (0, eX.Ay)(tk.A.USER_SETTINGS_GIFT_INVENTORY);
    return (f.useEffect(() => {
        null == i &&
            (0, d8.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, p.jsx)(cj, { onClose: t, transitionState: s })
        : null == i
          ? (0, p.jsx)(oO.y, { className: cv.Lq })
          : (0, p.jsx)(lx.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: cv.N1,
                    children: [
                        (0, p.jsx)("div", { className: cv.Qw }),
                        (0, p.jsx)(C.D, { variant: "heading-xl/semibold", children: V.intl.string(V.t["23BfZh"]) }),
                        (0, p.jsx)(J.E, {
                            variant: "text-md/normal",
                            className: cv.G3,
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
                            let e = (0, d8.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(ls.c, { className: cv.M5 }),
                        (0, p.jsx)(lu.D, {
                            label: V.intl.string(V.t.s9LFQh),
                            helperText: V.intl.string(V.t["F+nFTZ"]),
                            children: (0, p.jsx)(cy.A, {
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
var cL = n(136380);
function cR(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = f.useState(!1),
        [r, a] = f.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, cN.Ay)(),
        d = (0, d8.WD)(n.id, u),
        c = null != i,
        g = f.useMemo(
            () =>
                (0, iA.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? im()(n.outboundRedemptionEndDate)
                            : im()(n.endDate).add(cb)
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
        A = (0, d9.N)()?.isEligible === !0,
        E = f.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: S } = n;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: cL.AX,
                children: [
                    (0, p.jsxs)("div", {
                        className: cL.Pg,
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
                                            (0, p.jsx)(C.D, { variant: "heading-md/semibold", children: h }),
                                            (0, p.jsx)(J.E, {
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
                        (0, p.jsx)(J.E, {
                            className: cL.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: cC.A.parse(S, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, p.jsx)(cI.aF, {
                    renderModal: (e) =>
                        (0, p.jsx)(cO, {
                            ...e,
                            onClose: E,
                            onClaim: dL.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function cD(e) {
    let { redesign: t = !1 } = e,
        n = (0, _.yK)([ci.A], () => ci.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, d9.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, dR.y7)(),
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
                      className: cL.N1,
                      children: [
                          (0, p.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.wFsj3B) }),
                          (0, p.jsx)(ls.c, { className: cL.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, p.jsxs)("div", {
                      className: cL.uo,
                      children: [
                          (0, p.jsx)(ag.t, {
                              size: "md",
                              color: n1.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cL.PC,
                          }),
                          (0, p.jsx)(J.E, {
                              variant: "text-md/normal",
                              className: cL.Qw,
                              children: V.intl.format(V.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tY.default)(), (0, cn.pX)(I.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, p.jsx)(ce.A, {
                              showGradient: !0,
                              className: cL.aA,
                              subscriptionTier: tJ.pe.TIER_2,
                              textOptions: { textOverride: V.intl.string(V.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, p.jsxs)("div", {
        children: [
            g,
            (0, p.jsx)(ct.A, {
                className: cL.Yj,
                isShown: !1 === i && c,
                type: ct.i.PREMIUM,
                hasBackground: !0,
                children: (0, p.jsxs)("div", {
                    className: cL.DE,
                    children: [
                        m,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, p.jsx)(cR, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, p.jsx)(cR, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, p.jsx)(
                                  c_,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tJ.FB,
                                  },
                                  (0, cl.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, p.jsx)(
                                  c_,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, cl.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, p.jsx)(
                                  c_,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tJ.Bu,
                                  },
                                  (0, cl.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cP = (0, h.zZ)(S.X.MY_GIFTS_CATEGORY, {
        useTitle: cM,
        buildLayout: () => [cG],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, _.cf)(
                    [d7.A],
                    () => ({
                        claimedOutboundPromotionCodes: d7.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: d7.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, dR.T1)({ includeClaimedPromotions: !0 }),
                i = (0, d8.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    cG = (0, h.E2)(S.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cM()],
        Component: () => (0, p.jsx)(cD, { redesign: !0 }),
    });
function cM() {
    return V.intl.string(V.t.YzjdWJ);
}
var cU = n(339048),
    cV = (((o = {}).GIFT_INVENTORY = "gift_inventory"), o),
    ck = n(183636),
    cw = n(739508);
function cF() {
    var e, t;
    let n,
        i,
        l = (0, _.yK)([ci.A], () => ci.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        s = K().groupBy(l, (e) => (0, cl.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [r, a] = f.useState(!1);
    if (
        (f.useEffect(() => {
            (0, cU.XJ)().then(() => a(!0));
        }, []),
        (e = cV.GIFT_INVENTORY),
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
                        "focused" === ck.A.getState() &&
                            (0, cw.pM)(Error(`${e} load timed out`), {
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
        return (0, p.jsx)(oO.y, { className: cL.Lq });
    if (0 === Object.keys(s).length)
        return (0, p.jsxs)("div", {
            className: cL.p$,
            children: [
                (0, p.jsx)(uk.H, { className: cL.ks, children: V.intl.string(V.t.B1qgZn) }),
                (0, p.jsx)("p", {
                    className: cL.WO,
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
            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, cl.X6)(e);
            return (0, p.jsx)(c_, { skuId: t, subscriptionPlanId: n, entitlements: s[e], giftStyle: i }, e);
        });
    return (0, p.jsx)(q.B, { gap: "lg", children: o });
}
let cB = (0, h.zZ)(S.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cX, buildLayout: () => [cz] }),
    cz = (0, h.E2)(S.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cX()], Component: () => (0, p.jsx)(cF, {}) });
function cX() {
    return V.intl.string(V.t.FWe6CP);
}
var cY = n(532446),
    cH = n(499454);
class cW extends f.Component {
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
                    (await (0, oU.Qp)(n),
                        (0, oU.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oL.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, cl.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await cr.Ay.resolveGiftCode(e);
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
                (0, cH.h)({ processedCode: e }),
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
                children: (0, p.jsxs)(cY.M, {
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
function cK(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, ui.c)({ location: "UserSettingsBilling" }),
        i = f.useContext(td.AnalyticsContext),
        l = (0, _.bG)([tu.A], () => tu.A.enabled);
    return (0, p.jsx)(cW, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let cZ = (0, h.zZ)(S.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => V.intl.string(V.t["il+VCo"]),
        buildLayout: () => [cq],
        usePredicate: () => !(0, dD.Hp)(),
    }),
    cq = (0, h.E2)(S.X.REDEEM_CODE_INPUT, {
        Component: () => (0, p.jsx)(cK, { redesign: !0 }),
        useSearchTerms: () => [V.intl.string(V.t["jcSP+g"]), V.intl.string(V.t["il+VCo"])],
    }),
    cQ = (0, h.t_)(S.X.GIFT_PANEL, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        buildLayout: () => [dW, cZ, cP, d5, cB, dG],
        initialize: () => {
            (dL.Ay.fetchClaimedOutboundPromotionCodes(), (0, dO.Ig)("gift_inventory") && (0, dy.o0)(db.$.GIFTING));
        },
    }),
    cJ = (0, h.i4)(S.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["jcSP+g"]),
        icon: uG.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, dR.IO)().length;
            return f.useMemo(() => ({ badgeType: T.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = ui.A.getConfig(e).enabled,
                n = dv.A.getConfig(e).enabled;
            return t && n && (0, dj.q)()
                ? [{ badgeType: T.Xi.NEW, dismissibleContent: eE.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }]
                : [];
        },
        buildLayout: () => [cQ],
    });
var c$ = n(659758),
    c0 = n(877607),
    c1 = n(877624),
    c2 = n(269115),
    c3 = n(462887),
    c4 = n(73825),
    c5 = n(531260),
    c6 = n(160946),
    c8 = n(721668),
    c7 = n(224016),
    c9 = n(526292),
    ge = n(881489),
    gt = n(106512),
    gn = n(22118),
    gi = n(103411),
    gl = n(190187),
    gs = n(930861),
    gr = n(854627),
    ga = n(889227),
    go = n(326084),
    gu = n(851746),
    gd = n(664654),
    gc = n(912140),
    gg = n(953727);
let gm = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...l } = e;
        return (0, p.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gg.A)({ ...l }),
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
    gA = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            l = (0, cN.Ay)(),
            s = (0, c3.q)(l),
            r = null != n ? n : s ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, p.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gg.A)({ ...i }),
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
var gE = n(387316),
    gh =
        (((u = {})[(u.NITRO_GEM = 0)] = "NITRO_GEM"),
        (u[(u.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (u[(u.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        u);
let gS = "url(#gradient)",
    gx = (e) => {
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
        let g = (0, cN.Ay)(),
            m = (0, c3.q)(g),
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
                            return gS;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : gS;
                        default:
                            return;
                    }
                })(m, r);
        return (0, p.jsxs)("div", {
            className: gE.Ap,
            children: [
                (0, p.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: gE.fB,
                    children: [
                        (0, p.jsx)("circle", {
                            className: 0 === r || 2 === r ? gE.F3 : void 0,
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
                (0, p.jsx)("div", { className: gE.Vw, children: n }),
            ],
        });
    };
var gT = n(104773);
function gp(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        l = f.useMemo(() => (0, gc.A)({ legacyAssetId: t, skuId: n, size: v._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, p.jsx)("div", {
        className: gT.Q7,
        children: (0, p.jsx)("div", {
            className: gT.Nk,
            children: null != l && (0, p.jsx)("img", { className: gT.CH, alt: i, src: l }),
        }),
    });
}
let gf = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: l,
            progressCircleStrokeSize: s,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = gh.NITRO_GEM,
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
        className: ic()(gT.G3, n),
        children: (0, p.jsx)(gx, {
            animationClassName: ic()(gT._0, { [gT.uJ]: x, [A ?? ""]: x }),
            progressCircleStroke: h,
            progressCircleStrokeSize: s,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case gh.NITRO_GEM:
                        return (0, p.jsx)(gm, {
                            className: x ? gT.Ow : void 0,
                            backgroundColor: ic()(gT.vH, l),
                            backgroundCircleSize: r,
                        });
                    case gh.NITRO_LOGO:
                        return (0, p.jsx)(gA, { circleColor: E, ellipseOpacity: m });
                    case gh.AVATAR_DECO:
                        if (null != c)
                            return (0, p.jsx)(gp, {
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
var g_ = n(14313);
function gI(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: l } = (0, gr.A)({ userId: t?.id, size: v._3.SIZE_32, animateOnHover: !0 }),
        s = null != t,
        r = s
            ? (0, p.jsx)(y.eu, { src: i, "aria-label": t.username, size: v._3.SIZE_32, ...l })
            : (0, p.jsx)(C.D, { variant: "heading-md/semibold", className: g_.n5, children: n });
    return (0, p.jsx)(lg.m, {
        text: V.intl.string(V.t.UnKHdo),
        shouldShow: !s,
        children: (0, p.jsx)("div", { className: g_.Lg, children: r }),
    });
}
function gN(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, p.jsxs)("div", {
        className: g_.Ip,
        children: [
            (0, p.jsx)("div", { className: g_.Ej }),
            (0, p.jsx)("div", { className: ic()({ [g_.ch]: t > n, [g_.q_]: t === n }) }),
        ],
    });
}
function gC(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        l = n < 2 ? null : t[1],
        s = n < 3 ? null : t[2];
    return (0, p.jsxs)("div", {
        className: g_.ZM,
        children: [
            (0, p.jsx)(gI, { userRecord: i, placement: 1 }),
            (0, p.jsx)(gN, { numSentReferrals: n, placement: 1 }),
            (0, p.jsx)(gI, { userRecord: l, placement: 2 }),
            (0, p.jsx)(gN, { numSentReferrals: n, placement: 2 }),
            (0, p.jsx)(gI, { userRecord: s, placement: 3 }),
        ],
    });
}
let gb = function () {
    let e = (0, _.bG)([gu.A], () => gu.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, gd.J)(),
        i = f.useMemo(() => t.map((e) => new ga.A(e)), [t]),
        l = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === go.aK.REDEEMED && l.redeemed++, e === go.aK.CONVERTED && (l.redeemed++, l.converted++));
    });
    let s = l.sent === gd.Z,
        r = eb.A.getArticleURL(I.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, eX.Ay)(tk.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = f.useRef(null),
        u = (l.sent / gd.Z) * 100,
        d = (0, p.jsxs)("div", {
            className: g_.hE,
            children: [
                (0, p.jsx)(gf, { percentage: u, progressCircleVariation: gh.NITRO_LOGO, iconClassName: g_.ER }),
                (0, p.jsxs)("div", {
                    className: g_.Ns,
                    children: [
                        (0, p.jsx)(C.D, {
                            variant: "heading-xl/extrabold",
                            className: g_.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return V.intl.string(V.t.USo4s7);
                            })({ hasSentAll: s }),
                        }),
                        (0, p.jsx)(gC, { userRecords: i }),
                        (0, p.jsx)(J.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? V.intl.format(V.t["TYu+MH"], { helpdeskArticle: i })
                                        : V.intl.format(V.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= gd.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: l }),
                        }),
                        (0, p.jsx)("div", {
                            className: g_.Fb,
                            children: (0, p.jsx)(gs.wL, {
                                "data-migration-pending": !0,
                                className: g_.r$,
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
                                    className: g_.Zn,
                                    children: [
                                        (0, p.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: g_.QH,
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
        c = l.redeemed === gd.Z;
    return (0, p.jsx)(eX.f5, {
        value: a,
        children: (0, p.jsx)("div", {
            className: ic()(g_.kL, { [g_.AP]: c }),
            children: (0, p.jsx)("div", { ref: o, className: ic()(g_.d_, { [g_.kS]: c }), children: d }),
        }),
    });
};
var gy = n(194509),
    gv = n(465794),
    gj = n(774774),
    gO = n(156601),
    gL = n(543213),
    gR = n(88001),
    gD = n(148155),
    gP = n(487518);
let gG = "to_premium_home_button",
    gM = "premium home page";
function gU(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: l } = e,
        s = t.hasActiveTrial,
        r = t.planIdFromItems === tJ.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, c5.A)(),
        u = null != t.trialEndsAt ? im()(t.trialEndsAt).diff(im()(), "d") : 0,
        d = tJ.hd[t.planIdFromItems],
        c = aN.Ay.getDefaultPrice(d.id),
        g = aN.Ay.formatPriceString(c, d.interval);
    if (n || s) {
        let e = (0, c3.M)(l) ? gj.at.PREMIUM_TIER_2_WHITE_FILL : gj.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, p.jsxs)(p.Fragment, {
            children: [
                !s && (r || a)
                    ? (0, p.jsx)(gj.e4, { text: V.intl.string(V.t.EyjDRE), className: gP.LW, colorOptions: e })
                    : (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(gj.HU, {
                                  text: s ? V.intl.string(V.t.qYKftX) : V.intl.string(V.t.EyjDRE),
                                  className: gP.uS,
                                  colorOptions: e,
                              }),
                              (0, p.jsx)("div", { className: gP.on }),
                          ],
                      }),
                (0, p.jsx)(C.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: gP.KB,
                    children: (function () {
                        if (s) return V.intl.format(V.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, u6.$g)(c.amount, c.currency);
                            return V.intl.format(gD.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? V.intl.format(V.t.z2oQtA, {
                                  percent: i?.percentage ?? tJ.Cq,
                                  regularPrice: g,
                                  renewalDate: aN.Ay.getExpectedRenewalDate(t, o),
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
    return (0, p.jsx)(gO.A, { variant: void 0, subscriptionTier: tJ.pe.TIER_2, interval: d.interval });
}
function gV() {
    let e = (0, c9.k5)(),
        t = (0, c9.nf)(),
        n = (0, cN.Ay)(),
        i = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
        l = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        s = l?.isPremiumWithPremiumGroup(),
        r = (0, c5.A)(),
        a = (0, ge.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !s) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, p.jsxs)("div", {
        className: ic()(gP.$Y, { [gP.J5]: e || d }),
        children: [
            (0, p.jsxs)("div", {
                className: gP.jp,
                children: [
                    s
                        ? (0, p.jsx)(C.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: gP._K,
                              children: (0, gR.DP)(),
                          })
                        : (0, p.jsx)(c7.A, { className: gP.TJ }),
                    s && !e
                        ? (0, p.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, p.jsxs)(p.Fragment, {
                                children: [
                                    (0, p.jsx)(gj.e4, {
                                        text: V.intl.string(V.t.uXF4c4),
                                        className: gP.LW,
                                        colorOptions: gj.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, p.jsx)(C.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: gP.sQ,
                                        children: V.intl.format(V.t.sK7fGl, {
                                            helpCenterLink: eb.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, p.jsx)(gU, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(gj.HU, {
                                            text: V.intl.string(V.t.qYKftX),
                                            className: gP.uS,
                                            colorOptions: (0, c3.M)(n)
                                                ? gj.at.PREMIUM_TIER_2_WHITE_FILL
                                                : gj.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, p.jsx)(C.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: gP.KB,
                                            children: V.intl.format(V.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, p.jsx)(gL.ZP, {
                        featureSet: l?.isPremiumGroupPrimary()
                            ? gL.Nz.PREMIUM_GROUP_PRIMARY
                            : l?.isPremiumGroupMember()
                              ? gL.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? gL.Nz.FRACTIONAL_PREMIUM
                                : gL.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, p.jsxs)(s8.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, p.jsx)(gv.A, {
                                      defaultTextOverride: a ? V.intl.string(V.t.YScQSF) : V.intl.string(V.t["0b3YRn"]),
                                  }),
                                  (0, p.jsx)(j.$, {
                                      onClick: () => {
                                          (td.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gG,
                                              target: gM,
                                          }),
                                              (0, tY.default)(),
                                              (0, cn.pX)(I.BVt.APPLICATION_STORE));
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
                                              cta_type: gG,
                                              target: gM,
                                          }),
                                              (0, tY.default)(),
                                              (0, cn.pX)(I.BVt.APPLICATION_STORE));
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
                className: gP.ah,
                children: (0, p.jsx)("img", { className: gP.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function gk() {
    return (0, p.jsxs)("div", {
        className: gP.T1,
        children: [
            (0, p.jsx)("img", { className: gP.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, p.jsxs)("div", {
                className: gP.b4,
                children: [
                    (0, p.jsx)(C.D, {
                        className: gP.Vz,
                        variant: "heading-xl/extrabold",
                        children: V.intl.string(V.t["3KomGa"]),
                    }),
                    (0, p.jsx)(J.E, {
                        className: gP.Oi,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.yQ06u1),
                    }),
                    (0, p.jsx)(gy.A, {
                        className: ic()(gP.Tp, gP._c),
                        textOptions: { textOverride: V.intl.string(V.t.Ve9Ge6), textClassName: gP.VV },
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
let gw = function () {
        let e = (0, dD.Hp)(),
            { analyticsLocations: t } = (0, eX.Ay)(tk.A.PREMIUM_SETTINGS),
            n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
            i = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
            l = (0, _.bG)([us.A], () => us.A.hasFetchedSubscriptions()),
            s = (0, c6.Y)(tJ.T7),
            [r, a] = f.useState(!0),
            o = (0, c5.A)({ forceFetch: !0 }),
            u = (0, _.bG)([d7.A], () => {
                let e = d7.A.getMarketingComponentByType(c1.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oB.Fr || oB.v1) && null != u,
            c = f.useRef(null);
        (0, gl.i)();
        let g = (0, gi.m)();
        f.useEffect(() => {
            !(async function () {
                (e || (await Promise.all([oM.hP(), oM.$o(), (0, c4.zS)(null, null, I.tF5.DISCOVERY)])), a(!1));
            })();
        }, [e]);
        let [m, A] = f.useState(!1);
        if (e) return (0, p.jsx)(df.uK, {});
        let E = l && null !== i && s,
            h = o.fetched && o.isFractionalPremiumActive,
            S = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !S) return (0, p.jsx)(c8.A, { title: V.intl.string(V.t.dyq9TR), note: null });
        if ((!E && !h && !S) || r) return (0, p.jsx)(oO.y, {});
        let x = !!i?.hasActiveTrial;
        return (0, p.jsx)(eX.f5, {
            value: t,
            children: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsxs)(q.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, p.jsx)(gt.m, { config: u }),
                            (0, p.jsx)(gV, {}),
                            g && (0, p.jsx)(gb, {}),
                            !d && (0, p.jsx)(gk, {}),
                            (0, p.jsx)(gn.A, {
                                hideCTAs: !0,
                                headingOverride: V.intl.string(V.t.dnVvQS),
                                hidePill: !x,
                                selectedPlanColumnClassName: gP.JG,
                                selectedPlanTier: tJ.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, p.jsx)(c2.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (td.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, p.jsx)("div", { ref: c, className: gP._Z }),
                    }),
                ],
            }),
        });
    },
    gF = (0, h.E2)(S.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return (0, aN.YE)(e, tJ.PremiumTypes.TIER_2) ? (0, p.jsx)(gw, {}) : (0, p.jsx)(c0.A, {});
        },
        useSearchTerms: () => [V.intl.string(V.t.Ipxkog)],
    }),
    gB = (0, h.zZ)(S.X.NITRO_CATEGORY, { buildLayout: () => [gF] }),
    gz = (0, h.t_)(S.X.NITRO_PANEL, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        useObscuredNotice: op.L,
        buildLayout: () => [gB],
    }),
    gX = (0, h.i4)(S.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Ipxkog),
        icon: ag.t,
        usePersistentBadge: function (e) {
            let t = (0, c$.e)(e);
            return f.useMemo(() => ({ badgeType: T.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gz],
    });
var gY = n(104510),
    gH = n(820739),
    gW = n(859241),
    gK = n(527113),
    gZ = n(338548),
    gq = n(776096),
    gQ = n(711014),
    gJ = n(178368),
    g$ = n(809545),
    g0 = n(168482);
function g1() {
    return (0, p.jsxs)("div", {
        className: g$.iE,
        children: [
            (0, p.jsx)("img", { className: g$.Kk, alt: "", src: g0 }),
            (0, p.jsxs)("div", {
                className: g$.pq,
                children: [
                    (0, p.jsx)(J.E, { variant: "text-lg/bold", children: V.intl.string(V.t.ZHNSYf) }),
                    (0, p.jsx)(J.E, {
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
                    ((0, cn.pX)(I.BVt.GUILD_DISCOVERY), (0, tY.default)());
                },
            }),
        ],
    });
}
var g2 = n(365199),
    g3 = n(464120),
    g4 = n(443865),
    g5 = n(980707),
    g6 = n(473145);
function g8(e) {
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
                      iconLeft: g4.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: g4.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, p.jsxs)(g5.W, {
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
            (0, g6.I5)(t)
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
var g7 = n(545934),
    g9 = n(548118),
    me = n(987144),
    mt = n(864310),
    mn = n(290413);
function mi(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, mt.A)(t.id);
    return (0, p.jsxs)("div", {
        className: n ?? mn.OA,
        children: [
            (0, p.jsx)(g9.Ay, { className: mn.$f, guild: t, size: g9.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: mn.gI,
                children: [
                    (0, p.jsx)(J.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, p.jsxs)("div", {
                        className: mn.ew,
                        children: [
                            (0, p.jsxs)("div", {
                                className: mn.QW,
                                children: [
                                    (0, p.jsx)(gY._, {
                                        className: mn.Wz,
                                        color: n1.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, p.jsx)(J.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== I.TVA.NONE &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)("div", { className: mn.zk }),
                                        (0, p.jsx)(J.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, g6.gb)(t.premiumTier, { useLevels: !1 }),
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
function ml(e) {
    let { guildId: t } = e,
        n = (0, _.bG)([lv.A], () => lv.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: mn.Nr,
              children: [
                  (0, p.jsx)(mi, { guild: n }),
                  (0, p.jsx)(j.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gY._,
                      text: V.intl.string(V.t.aBHecF),
                      onClick: () => {
                          (0, me.g)({
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
var ms = n(747381);
let mr =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function ma(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = f.useRef(null),
        a = (0, g6.I5)(t),
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, c5.A)(),
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
            let e = null != t.premiumGuildSubscription ? oF.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return V.intl.formatToPlainString(V.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = f.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, p.jsxs)("div", {
        className: ic()(ms.iq, { [ms.Mt]: s }),
        children: [
            (0, p.jsxs)("div", {
                className: ms.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: ms.bB, src: mr }),
                    A
                        ? (0, p.jsx)(J.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: V.intl.format(V.t.Z4ULRD, { date: m }),
                          })
                        : (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(J.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: ms.zk }),
                                              (0, p.jsx)(J.E, {
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
                                              (0, p.jsx)("div", { className: ms.zk }),
                                              (0, p.jsx)(J.E, {
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
            (0, p.jsx)(ap.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, p.jsx)(g8, {
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
                        className: ms.Mj,
                        ...e,
                        children: (0, p.jsx)(g2.MoreHorizontalIcon, {
                            size: "xs",
                            color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function mo(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, _.bG)([lv.A], () => lv.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: ms.Nr,
        children: [
            (0, p.jsx)("div", {
                className: ms.MY,
                children:
                    null != s
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(mi, { guild: s, className: ms.OA }),
                                  (0, p.jsx)(j.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: V.intl.string(V.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tY.default)(),
                                              (0, g3.K4)({
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
                              className: ms.OA,
                              children: (0, p.jsx)(C.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: V.intl.string(V.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, p.jsx)(
                    ma,
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
function mu(e) {
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
                                g7.A.createFromServer(
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
                if ((!(0, g6.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in s || (s[e] = []), s[e].push(i));
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > aN.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, p.jsx)("div", {
        className: ms.kR,
        children: oF.default
            .keys(s)
            .map((e) => (0, p.jsx)(mo, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var md = n(502572),
    mc = n(983511),
    mg = n(342744),
    mm = n(496431);
let mA = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, mm.A)(n);
    return (0, p.jsx)(J.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iA.uN)(i, { days: V.t.WUTPDc, hours: V.t.c1qodV, minutes: V.t["2+A3dv"] }),
    });
};
var mE = n(731536);
function mh(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = f.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, g6.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? aN.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === tJ.xc.NONE;
    return 0 === s.length
        ? null
        : (0, p.jsxs)("div", {
              className: mE.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: mE.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: mE._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: mE.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: mE.F8, src: mr }),
                                          (0, p.jsx)("div", {
                                              className: ic()(mE.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: mE.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: mE.Qp,
                                      children: [
                                          (0, p.jsx)(J.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: V.intl.format(V.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, p.jsx)(J.E, {
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
                          (0, p.jsx)(md.A, {
                              shouldShow: o,
                              text: V.intl.string(V.t.mOWsF1),
                              "aria-label": V.intl.string(V.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(j.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gY._,
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
                                                              (0, me.g)({
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
                          mS,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, g6.I5)(e),
                              isCanceled: (0, g6.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mS(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = f.useRef(null),
        u = f.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = s ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, p.jsx)(mA, { cooldown: u.getTime() })
            : null != d
              ? (0, p.jsx)(J.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: V.intl.format(V.t.Z4ULRD, { date: d }),
                })
              : (0, p.jsx)(J.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: V.intl.string(V.t["2mcafz"]),
                });
    let c = l || s;
    return (0, p.jsxs)("div", {
        className: ic()(mE.iq, { [mE.Mt]: i }),
        children: [
            (0, p.jsxs)("div", {
                className: mE.kd,
                children: [(0, p.jsx)("img", { alt: "", className: mE.bB, src: mr }), t],
            }),
            c &&
                (0, p.jsx)(ap.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsxs)(g5.W, {
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
                                                        (0, p.jsx)(mc.default, { ...e, guildBoostSlot: n }),
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
                                                        (0, p.jsx)(mg.default, { ...e, guildBoostSlotId: n.id }),
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
                            className: mE.Mj,
                            ...e,
                            children: (0, p.jsx)(g2.MoreHorizontalIcon, {
                                size: "xs",
                                color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var mx = n(834612);
function mT(e) {
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
              className: mx.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: mx.b,
                      children: [
                          (0, p.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.W5rDjW) }),
                          (0, p.jsx)(J.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: V.intl.format(V.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(mu, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, p.jsx)(mh, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var mp = n(333722),
    mf = n(9146);
function m_() {
    return (0, p.jsxs)("div", {
        className: mf.iE,
        children: [
            (0, p.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: mf.kR,
                children: mp.s.map((e, t) => {
                    let n = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: mf.Nr,
                            children: [
                                (0, p.jsx)(n, { className: mf.Kk }),
                                (0, p.jsx)(J.E, {
                                    className: mf.h_,
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
var mI = n(847374),
    mN = n(232122),
    mC = n(665984);
function mb() {
    let [e, t] = f.useState(null),
        [n, i] = f.useState(null);
    return (0, p.jsxs)("div", {
        className: mC.iE,
        children: [
            (0, p.jsx)(C.D, { variant: "heading-xl/normal", children: V.intl.string(V.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: mC.p_,
                children: mN.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        n5.D,
                        {
                            tag: "li",
                            className: ic()(mC.Aw, { [mC.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: mC.k7,
                                    children: [
                                        (0, p.jsx)(J.E, {
                                            className: mC.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, p.jsx)(mI.a, {
                                            size: "sm",
                                            color: n1.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mC.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(J.E, {
                                        className: mC.ZF,
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
var my = n(182859),
    mv = n(25525),
    mj = n(416763);
function mO() {
    let e = eb.A.getArticleURL(I.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: mj.wx,
        children: [
            (0, p.jsxs)("div", {
                className: mj.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: mj.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mj.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(mv.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, p.jsx)(J.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: V.intl.format(V.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, p.jsx)(my.A, {
                variant: "member",
                className: mj.iO,
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
var mL = n(315629),
    mR = n(87719),
    mD = n(961085);
function mP() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
    if (null == e || aN.Ay.hasFreeBoosts(e)) return null;
    let t = eb.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mL.h, {
        color: "nitro-pink",
        className: mD.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mD.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mD.q3, src: mr }),
                    (0, p.jsxs)("div", {
                        className: mD.Tm,
                        children: [
                            (0, p.jsx)(J.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.Idh1Vs, { count: tJ.M4, boostCount: tJ.M4 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mD.xv,
                                children: [
                                    (0, p.jsx)(ag.t, { className: mD.nE }),
                                    (0, p.jsx)(J.E, {
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
                icon: ag.t,
                text: V.intl.string(V.t["8x0jKT"]),
                onClick: mR.e,
            }),
        ],
    });
}
var mG = n(532991);
function mM() {
    let e = (0, _.bG)([gq.A], () => gq.A.affinities),
        t = (0, _.bG)([gQ.Ay], () => gQ.Ay.getFlattenedGuildIds()),
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
              className: mG.i,
              children: [
                  (0, p.jsx)(C.D, { variant: "heading-md/semibold", children: V.intl.string(V.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: mG.k, children: n.map((e) => (0, p.jsx)(ml, { guildId: e }, e)) }),
              ],
          });
}
var mU = n(967246);
function mV(e) {
    let { count: t } = e,
        i = eb.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mL.h, {
        color: "nitro-pink",
        className: mU.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mU.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mU.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mU.F8, src: mr }),
                            (0, p.jsx)("div", {
                                className: ic()(mU.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mU.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mU.Tm,
                        children: [
                            (0, p.jsx)(J.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.format(V.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mU.xv,
                                children: [
                                    (0, p.jsx)(ag.t, { className: mU.nE }),
                                    (0, p.jsx)(J.E, {
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
                icon: gY._,
                text: V.intl.string(V.t.BMx1iy),
                onClick: () => {
                    (0, lT.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, p.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, me.g)({
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
var mk = n(89150);
function mw(e) {
    let { premiumSubscription: t } = e,
        n = (0, _.bG)([gJ.A], () => gJ.A.boostSlots),
        i = f.useMemo(() => Object.values(n), [n]),
        l = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        s = (0, _.bG)([gq.A], () => gq.A.affinities),
        r = (0, _.bG)([gQ.Ay], () => gQ.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = (0, _.bG)([gW.A], () => gW.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, c5.A)({ forceFetch: !0 }),
        d = l?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === tJ.xc.NONE,
        g = f.useMemo(() => {
            if (null == t || c) return 0;
            let e = aN.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, p.jsxs)("div", {
        className: mk.GO,
        children: [
            (0, p.jsx)(df.kb, { className: mk.ek }),
            (0, p.jsx)(mO, {}),
            (0, p.jsx)(mP, {}),
            g > 0 && (0, p.jsx)(mV, { count: g }),
            d && (0, p.jsx)(gZ.A, {}),
            !a && (0, p.jsx)(g1, {}),
            (0, p.jsxs)("div", {
                className: mk.C_,
                children: [
                    (0, p.jsx)(mT, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, p.jsx)(mM, {}),
                    (0, p.jsx)(gK.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(m_, {}),
                    (0, p.jsx)(mb, {}),
                ],
            }),
        ],
    });
}
var mF = n(819677);
let mB = (0, h.E2)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            f.useEffect(() => {
                (oM.hP(), oM.$o(), (0, gH.CD)(), (0, c4.zS)(null, null, I.tF5.DISCOVERY), (0, gH.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, _.cf)([us.A], () => ({
                    hasFetchedSubscriptions: us.A.hasFetchedSubscriptions(),
                    premiumSubscription: us.A.getPremiumTypeSubscription(),
                })),
                n = (0, c6.Y)(),
                i = (0, _.bG)([ul.A], () => ul.A.hasFetchedPaymentSources),
                l = (0, _.bG)([gW.A], () => gW.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = f.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, p.jsx)("div", { className: ic()(mF.kL, mF.Lq), children: (0, p.jsx)(oO.y, {}) })
                : (0, p.jsxs)("div", {
                      className: mF.kL,
                      children: [
                          (0, p.jsx)("div", { className: mF.Tp }),
                          (0, p.jsx)("div", { className: mF.Qs, children: (0, p.jsx)(mw, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t["+CbP2v"]), V.intl.string(V.t.Nn1lJy)],
    }),
    mz = (0, h.zZ)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mB] }),
    mX = (0, h.t_)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        buildLayout: () => [mz],
    }),
    mY = (0, h.i4)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["+CbP2v"]),
        icon: gY._,
        buildLayout: () => [mX],
    });
var mH = n(153659),
    mW = n(155984),
    mK = n(357758),
    mZ = n(262077),
    mq = n(281445),
    mQ = n(624479),
    mJ = n(626584),
    m$ = n(131607),
    m0 = n(196736),
    m1 = n(685743),
    m2 = n(349085),
    m3 = n(342942),
    m4 = n(376205),
    m5 = n(252589),
    m6 = n(758836),
    m8 = n(49999),
    m7 = n(394107),
    m9 = n(439050);
let Ae = new mJ.A("GameServerSubscriptionsSection");
function At(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function An(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let Ai = f.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, m2.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, m$.kn)([eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eE.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = cA.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, m1.A)(c, t.id, tk.A.GAME_SERVER_PAGE, t.serverIp),
        A = f.useCallback(() => {
            (0, m3.A)({
                provider: mq.X.SHOCKBYTE,
                onAccept: () => {
                    (u(m8.i.TAKE_ACTION), g());
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
            [us.A, ch.A],
            () => {
                let e = null != s ? us.A.getSubscriptionById(s) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? ch.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? V.intl.formatToPlainString(V.t.AbOLNu, { price: (0, u6.$g)(u, o.priceCurrency) })
                            : null,
                    c = At(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? V.intl.formatToPlainString(m7.default["3aEgK6"], { date: c })
                        : l
                          ? V.intl.formatToPlainString(m7.default.KFSA3M, { date: c })
                          : V.intl.formatToPlainString(m7.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, n, i],
            An,
        ),
        N = f.useCallback(() => {
            if (null == s) return;
            let e = us.A.getSubscriptionById(s),
                t = null != e ? At(e.currentPeriodEnd) : "";
            (0, n2.A)({
                title: V.intl.string(m7.default.TEYPNR),
                subtitle: V.intl.formatToPlainString(m7.default.XR1WrB, { date: t }),
                confirmText: V.intl.string(V.t["cY+Oob"]),
                cancelText: V.intl.string(m7.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oM.M2(s, l), await oM.hP());
                    } catch (e) {
                        Ae.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        C = f.useCallback(() => {
            if (null == s) return;
            let e = us.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? ch.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, u6.$g)(u, o.priceCurrency) : "",
                c = At(e.currentPeriodEnd);
            (0, n2.A)({
                title: V.intl.string(m7.default.o96qbc),
                subtitle: V.intl.formatToPlainString(m7.default["7n6Qq+"], { price: d, date: c }),
                confirmText: V.intl.string(V.t.iIvF2z),
                cancelText: V.intl.string(V.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, c4.ur)(r);
                        let t = e.items;
                        (await oM.nV(
                            e,
                            { status: I.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, aN.UC)(t, e.currency),
                            l,
                        ),
                            await oM.hP());
                    } catch (e) {
                        Ae.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, n, i]),
        b = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, p.jsxs)("div", {
        className: m9.nM,
        children: [
            (0, p.jsxs)("div", {
                className: m9.M4,
                children: [
                    (0, p.jsxs)("div", {
                        className: m9.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, p.jsx)("img", { className: m9.uP, src: a, alt: "" }),
                            (0, p.jsx)("div", { className: m9.tw }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: m9.CR,
                        children: [
                            (0, p.jsx)(J.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, p.jsx)(J.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            b &&
                                (d
                                    ? (0, p.jsxs)("div", {
                                          className: m9.CQ,
                                          children: [
                                              (0, p.jsx)(J.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, p.jsx)(n5.D, {
                                                  className: m9.cL,
                                                  onClick: g,
                                                  "aria-label": V.intl.string(V.t.OpuAlK),
                                                  children: m
                                                      ? (0, p.jsx)(de.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, p.jsx)(mQ.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, p.jsx)(uW.A, { onClick: A, children: V.intl.string(m7.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: m9.Rd,
                children: [
                    (0, p.jsxs)("div", {
                        className: m9.Ff,
                        children: [
                            null != h &&
                                (0, p.jsx)(J.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: h,
                                }),
                            null != S &&
                                (T
                                    ? (0, p.jsxs)("div", {
                                          className: m9.ez,
                                          children: [
                                              (0, p.jsx)(i$.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, p.jsx)(J.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: S,
                                              }),
                                          ],
                                      })
                                    : (0, p.jsx)(J.E, {
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
function Al(e) {
    let { servers: t } = e,
        n = (0, m0.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, m5.Y)(),
        l = (0, _.bG)([sx.default], () => aN.Ay.canUseShopDiscounts(sx.default.getCurrentUser())),
        s = f.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, _.yK)([us.A], () => (0, m4.HY)(t, i, (e) => us.A.getSubscriptionById(e)), [t, i]);
    f.useEffect(() => {
        let e = r.filter((e) => !ch.A.isLoadedForSKU(e) && !ch.A.isFetchingForSKU(e));
        e.length > 0 && (0, c4.jv)(e).catch(() => {});
    }, [r]);
    let a = f.useCallback(() => {
        ((0, tY.default)(), (0, cn.pX)(I.BVt.COLLECTIBLES_SHOP_WITH_TAB(m6.G2.GAME_SERVERS)));
    }, []);
    return (0, p.jsxs)("div", {
        className: m9.uW,
        children: [
            (0, p.jsxs)("div", {
                className: m9.wx,
                children: [
                    (0, p.jsx)(J.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: V.intl.string(m7.default.vCzwM7),
                    }),
                    (0, p.jsxs)("div", {
                        className: m9.h_,
                        children: [
                            (0, p.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: V.intl.string(m7.default.y85Eg9),
                            }),
                            n &&
                                (0, p.jsx)(uW.A, {
                                    onClick: a,
                                    children: (0, p.jsx)(J.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: V.intl.string(m7.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", {
                className: m9.p_,
                children: t.map((e) =>
                    (0, p.jsx)(Ai, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var As = n(55766),
    Ar = n(696986),
    Aa = n(364036);
function Ao(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["KzCF/6"]) }),
            (0, p.jsx)(Ar.h, { size: 4 }),
            (0, p.jsx)(J.E, { variant: "text-md/normal", className: Aa.yV, children: V.intl.string(V.t["3D7qCu"]) }),
            (0, p.jsx)(Ar.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: Aa.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: Aa.RI }),
                    (0, p.jsxs)("div", {
                        className: Aa.FS,
                        children: [
                            (0, p.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: Aa.wx,
                                children: V.intl.string(V.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(J.E, {
                                variant: "text-md/normal",
                                className: Aa.h_,
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
var Au = n(872351),
    Ad = n(9113),
    Ac = n(599941),
    Ag = n(384684),
    Am = n(2242);
let AA = [];
var AE = n(885574),
    Ah = n(62010),
    AS = n(912851),
    Ax = n(182744);
let AT = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, p.jsx)(n5.D, {
        onClick: i ? void 0 : n,
        className: Ax.x6,
        children: (0, p.jsxs)("div", {
            className: Ax.hQ,
            children: [
                i
                    ? (0, p.jsx)(oO.y, { type: oO.y.Type.PULSING_ELLIPSIS, className: Ax.__invalid_spinner })
                    : (0, p.jsx)(J.E, { variant: "text-md/medium", className: Ax.Pf, children: t }),
                (0, p.jsx)(mI.a, { size: "md", color: "currentColor", className: Ax.UE }),
            ],
        }),
    });
};
var Ap = n(465932),
    Af = n(543767),
    A_ = n(951555),
    AI = n(790284),
    AN = n(636194),
    AC = n(624456),
    Ab = n(710144),
    Ay = n(815332),
    Av = n(162093),
    Aj = n(557506);
function AO(e) {
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
                        return (n(!0), await oM.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === Am.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === Am.bN.INTANGIBLE),
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
                (0, p.jsx)(Av.x, { listingId: i.id, guildId: n.guild_id, className: Aj.P }),
            ],
        }),
    });
}
var AL = n(319225),
    AR = n(746080),
    AD = n(883616);
function AP(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, p.jsxs)("div", {
        className: AD.L0,
        children: [
            (0, p.jsxs)("div", {
                className: AD.a5,
                children: [
                    (0, p.jsx)(C.D, { variant: "heading-deprecated-12/semibold", className: AD.HU, children: t }),
                    i &&
                        (0, p.jsx)(lg.m, {
                            text: l,
                            children: (0, p.jsx)(AE.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: AD.Mo,
                            }),
                        }),
                ],
            }),
            (0, p.jsx)(C.D, { variant: "heading-xl/semibold", className: AD.sx, children: n }),
        ],
    });
}
function AG(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eX.Ay)(),
        [i] = (0, Af.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tk.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [l, s] = (0, _.yK)([ul.A], () => [ul.A.hasFetchedPaymentSources, ul.A.paymentSourceFetchError]);
    return null != i && (l || s)
        ? (0, p.jsx)(A_.A, { subscription: t, currentInvoicePreview: i })
        : (0, p.jsx)(oO.y, {});
}
function AM(e) {
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
                  className: AD.__invalid_rowButtons,
                  children: n
                      ? (0, p.jsx)(j.$, { variant: "primary", text: V.intl.string(V.t.y3mAE4), onClick: r, loading: i })
                      : (0, p.jsxs)(p.Fragment, {
                            children: [
                                !t && !l && (0, p.jsx)(AT, { label: V.intl.string(V.t.FRbWR8), onClick: a }),
                                (0, p.jsx)(AT, { label: V.intl.string(V.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let AU = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, AC.M)(e),
                n = (0, _.bG)([AN.A], () => AN.A.getSubscriptionListingForPlan(t)),
                i = (0, _.bG)([AN.A], () =>
                    null != n ? AN.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, _.bG)([lv.A], () => lv.A.getGuild(i?.guild_id)),
                [s, r] = f.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, Ac.XE)();
            f.useEffect(() => {
                s && null != l && null == AN.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = im()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, u6.$g)(t.price, t.currency) : "",
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
        { shouldHideGuildPurchaseEntryPoints: g } = (0, Ap.MH)(l?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await oM.QP(t, c),
                (0, AL.E)({ title: V.intl.string(V.t.oPV2cy), body: V.intl.string(V.t.DdRizV) }));
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
        className: AD.kL,
        children: [
            (0, p.jsx)(Ab.A, {
                onClick: r,
                className: AD.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            null != l && (0, p.jsx)(g9.Ay, { guild: l, active: !0, size: g9.Ay.Sizes.MEDIUM }),
                            (0, p.jsxs)("div", {
                                className: AD.if,
                                children: [
                                    (0, p.jsx)(J.E, {
                                        variant: "text-md/medium",
                                        className: AD.J5,
                                        children: null != l ? l.name : V.intl.string(V.t["He+cmd"]),
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: AD.xp,
                                        children: [
                                            (0, p.jsx)(J.E, {
                                                variant: "text-sm/normal",
                                                className: AD.KR,
                                                children: n.name,
                                            }),
                                            E
                                                ? (0, p.jsx)(Ah.E, {
                                                      type: { text: V.intl.string(V.t["7uFZGt"]) },
                                                      variant: "critical",
                                                  })
                                                : b
                                                  ? (0, p.jsx)(Ah.E, {
                                                        type: { text: V.intl.string(V.t["6anton"]) },
                                                        variant: "primary",
                                                    })
                                                  : h
                                                    ? (0, p.jsx)(lg.m, {
                                                          text: V.intl.string(V.t.eSuJE2),
                                                          children: (0, p.jsx)("div", {
                                                              className: AD.qc,
                                                              children: (0, p.jsx)(Ah.E, {
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
                                                          className: AD.Bi,
                                                          children: (0, p.jsx)(Ah.E, {
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
                                children: (0, p.jsx)(mI.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ic()(AD.D6, { [AD.S7]: s }),
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
                          (0, p.jsx)("div", { className: AD.yF }),
                          (0, p.jsx)(Ay.A, { groupListingId: i.id, subscription: t, className: AD.kE }),
                          (0, p.jsxs)("div", {
                              className: AD.Zx,
                              children: [
                                  (0, p.jsx)(AP, { label: C, value: N }),
                                  (0, p.jsx)(AP, {
                                      label: V.intl.string(V.t.dltUMH),
                                      value: x,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? V.intl.string(V.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, p.jsx)(AP, { label: V.intl.string(V.t.AOcwWB), value: T }),
                              ],
                          }),
                          (0, p.jsx)(Ar.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, p.jsx)(lu.D, {
                                  label: V.intl.string(V.t.wmMFvA),
                                  children: (0, p.jsx)(AG, { subscription: t }),
                              }),
                          !y &&
                              (0, p.jsx)(AM, {
                                  isTrial: b,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, lT.openModal)((t) => (0, p.jsx)(AO, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, cn.pX)(I.BVt.CHANNEL(l.id, AR.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tY.default)(),
                                          AS.A.show(
                                              I.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              V.intl.string(V.t.DvbaM4),
                                              () => {
                                                  (AI.A.setState({ subsection: eL.nR }),
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
var AV = n(661097);
let Ak = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, _.bG)([Ag.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [Ag.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? Am.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? Am.M_.NONE
                                  : Am.M_.IN_SUBSCRIPTION_SERVER;
                        })([Ag.A]),
                    ) === Am.M_.SUBSCRIBED,
                n = (0, _.bG)([us.A], () => us.A.getActiveGuildSubscriptions()),
                i = f.useRef(!1);
            return (
                f.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = us.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !us.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oM.hP());
                }, [e, t]),
                n ?? AA
            );
        })(),
        { loading: i } = (0, Ac.eb)(n);
    return ((0, Ad.A)(oB.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, p.jsx)(oO.y, {})
        : 0 === n.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(j.$, { text: V.intl.string(V.t.hqyhKQ), icon: Au.z, variant: "secondary", onClick: t }),
                    (0, p.jsx)(Ar.h, { size: 10 }),
                    (0, p.jsx)(n3.n, {
                        label: V.intl.string(V.t["KzCF/6"]),
                        description: V.intl.string(V.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: AV.A,
                            children: n.map((e) => (0, p.jsx)(AU, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Aw = n(327479),
    AF = n(932012);
function AB(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(C.D, { variant: "heading-md/bold", children: V.intl.string(V.t["48ywCu"]) }),
            (0, p.jsx)(Ar.h, { size: 4 }),
            (0, p.jsx)(J.E, { variant: "text-md/normal", className: AF.yV, children: V.intl.string(V.t.VWxmSo) }),
            (0, p.jsx)(Ar.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: AF.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AF._e }),
                    (0, p.jsxs)("div", {
                        className: AF.FS,
                        children: [
                            (0, p.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: AF.wx,
                                children: V.intl.string(V.t["48ywCu"]),
                            }),
                            (0, p.jsx)(J.E, {
                                variant: "text-md/normal",
                                className: AF.h_,
                                children: V.intl.format(V.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(Aw.A, { onClick: t, text: V.intl.string(V.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var Az = n(548411),
    AX = n(417098),
    AY = n(143582),
    AH = n(915043),
    AW = n(631466);
function AK(e) {
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
        className: ic()(AW.iE, t),
        children: [
            (0, p.jsx)("div", { className: ic()(AW.wx, i), children: n }),
            s && (0, p.jsx)("div", { className: AW.Qs, children: l }),
        ],
    });
}
var AZ = n(885996),
    Aq = n(144165),
    AQ = n(664121),
    AJ = n(950305),
    A$ = n(943775),
    A0 = n(123791),
    A1 = n(900797),
    A2 = n(611643);
let A3 = f.createContext({ isOpen: !1, toggleOpen: () => {} });
function A4(e) {
    let { children: t } = e,
        [n, i] = f.useReducer((e) => !e, !1),
        l = f.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, p.jsx)(A3.Provider, { value: l, children: t(n) });
}
A4.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = f.useContext(A3),
        s = i ? A1.t : mI.a,
        r = null != n ? n : i ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.XJuakA);
    return (0, p.jsxs)(n5.D, {
        className: ic()(A2.L, t),
        onClick: l,
        children: [
            (0, p.jsx)(J.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var A5 = n(627363),
    A6 = n(328968),
    A8 = n(163437),
    A7 = n(3432);
function A9(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var Ee = n(562312),
    Et = (((d = {})[(d.LOADING = 0)] = "LOADING"), (d[(d.DONE = 1)] = "DONE"), (d[(d.ERROR = 2)] = "ERROR"), d);
function En(e) {
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
            [ch.A, cS.A, A6.A, lv.A],
            () => {
                let e,
                    n = ch.A.get(r),
                    i = null != n ? cS.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? A6.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, A8.PJ)(o.skuFlags),
                    d = u && null != l ? lv.A.getGuild(l) : void 0,
                    c = (0, A8.Uo)(t, i),
                    g = u && null != l && null == d;
                if (!1 === c && null != s && s.items.length > 0) {
                    let t = s.items[0];
                    e = ch.A.get(t.planId) ?? void 0;
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
        { data: h } = (0, A5.YY)(a),
        S = f.useMemo(() => (null != h ? (0, A$.A)(h, 100) : null), [h]),
        x = g?.deleted ?? !1,
        T = null != g && (0, A8.Se)(g),
        N = t.status === I.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eX.Ay)(),
        [y] = (0, Af.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tk.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = A9(t.currentPeriodEnd),
        j = 0 === i;
    return (0, p.jsxs)(AK, {
        headerClassName: Ee.dL,
        header:
            !1 === j
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: Ee.VW,
                              children: [
                                  null != S &&
                                      (0, p.jsx)(Aq._, { src: S.href, imageClassName: Ee.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: Ee.aF,
                                      children: [
                                          (0, p.jsx)(C.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: h?.name ?? V.intl.string(V.t["7kqy7W"]),
                                          }),
                                          (0, p.jsx)(J.E, {
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
                              className: Ee.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, p.jsx)(Ea, {
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
                : (0, p.jsx)(oO.y, { type: oO.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, p.jsx)(Er, {
                    type: "warning",
                    title: T
                        ? V.intl.formatToPlainString(V.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : V.intl.formatToPlainString(V.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, p.jsx)(Er, { type: "warning", title: V.intl.string(V.t.SmSP8Q) }),
            N && (0, p.jsx)(Er, { type: "danger", title: V.intl.string(V.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: Ee.zH,
                children: [
                    (0, p.jsx)(Es, {
                        title: V.intl.string(V.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: Ee.yW,
                                          children: [(0, p.jsx)(AQ.R, { size: "xs" }), V.intl.string(V.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: Ee._t,
                                              children: [
                                                  (0, p.jsx)(J.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: V.intl.format(V.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(g9.Ay, { guild: c, size: g9.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: Ee.yW,
                                  children: [(0, p.jsx)(AJ.UserIcon, { size: "xs" }), V.intl.string(V.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(Ei, { invoicePreview: y, subscriptionPlan: o }),
                    (0, p.jsx)(Es, {
                        title: V.intl.string(V.t.dnUzb6),
                        content: A9(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(El, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(Eu, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: x,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(Eo, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function Ei(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, p.jsx)(Es, { title: V.intl.string(V.t.KI7ERx), content: "" });
    let i = (0, u6.CE)((0, u6.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, p.jsx)(Es, { title: V.intl.string(V.t.KI7ERx), content: i });
    let s = (0, u6.CE)((0, u6.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(Es, {
        title: V.intl.string(V.t.KI7ERx),
        content: (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(J.E, { variant: "text-sm/semibold", children: s }),
                s !== i &&
                    (0, p.jsx)(lg.m, {
                        text: V.intl.format(V.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, p.jsx)(J.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, p.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function El(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, u6.CE)((0, u6.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, p.jsx)(Es, {
            title: V.intl.string(V.t.hIhAM3),
            content: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(J.E, { variant: "text-sm/medium", children: n }),
                    (0, p.jsx)(J.E, {
                        variant: "text-sm/normal",
                        children: V.intl.format(V.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, p.jsx)(Es, { title: t ? V.intl.string(V.t.enxcAl) : V.intl.string(V.t["Ms+6Zq"]), content: n });
}
function Es(e) {
    let { title: t, content: n } = e;
    return (0, p.jsxs)("div", {
        className: Ee.nM,
        children: [
            (0, p.jsx)(J.E, { variant: "text-sm/medium", children: t }),
            (0, p.jsx)(J.E, { variant: "text-sm/medium", className: Ee.u4, children: n }),
        ],
    });
}
function Er(e) {
    let { type: t, title: n } = e;
    return (0, p.jsx)("div", {
        className: Ee.Xm,
        children: (0, p.jsx)(iK.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function Ea(e) {
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
        c = (0, A8.Se)(l),
        { analyticsLocations: g } = (0, eX.Ay)(),
        [m, A] = f.useState(!1),
        E = (0, A0.C)(t.id),
        h = (0, _.bG)([cS.A], () => cS.A.getParentSKU(i.skuId), [i.skuId]),
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
            let { subscription: e } = await (0, oM.QP)(s, g);
            if (null == e) return;
            (0, lT.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, p.jsx)(t, { ...n, storeListing: i, subscription: uC.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, p.jsxs)("div", {
        className: Ee.fw,
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
function Eo(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, p.jsx)(A4, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: Ee.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: Ee.wV,
                        children: [
                            e && (0, p.jsx)(J.E, { variant: "text-sm/semibold", children: V.intl.string(V.t.mORL67) }),
                            (0, p.jsx)(A4.Toggle, {
                                className: Ee.Bh,
                                text: e ? V.intl.string(V.t.gsbFAw) : V.intl.string(V.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, p.jsx)(AZ.FY, { header: i, icon: (0, A7.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function Eu(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, p.jsx)("div", {
                className: Ee.Ji,
                children: (0, p.jsx)(lu.D, {
                    label: V.intl.string(V.t.azZaZa),
                    children: (0, p.jsx)(oO.y, { type: oO.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, p.jsx)("div", {
                  className: Ee.Ji,
                  children: (0, p.jsxs)(AX.$T, {
                      color: AX.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          V.intl.format(V.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          V.intl.format(V.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: Ee.Ji,
                  children: (0, p.jsx)(lu.D, {
                      label: V.intl.string(V.t.azZaZa),
                      children: (0, p.jsx)(A_.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var Ed = (((c = {}).HOME = "HOME"), (c.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), c),
    Ec = n(38405);
let Eg = (0, _.UT)(ch.A, {
    getQueryId: I.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = ch.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && Ec.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, c4.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var Em = n(240248),
    EA = n(237218),
    EE = n(763064);
function Eh(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = f.useState(!1),
        [r, a] = f.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: EE.x6,
                onClick: () => s((e) => !e),
                children: (0, p.jsxs)(J.E, {
                    className: EE.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? V.intl.string(V.t["JQX/Pb"]) : V.intl.string(V.t.Fbrd8J),
                        l
                            ? (0, p.jsx)(A1.t, { color: n1.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, p.jsx)(mI.a, { color: n1.A.colors.TEXT_BRAND, size: "xs" }),
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
                (0, p.jsx)(J.E, {
                    ...i,
                    className: EE.Qs,
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
var ES = n(920352);
function Ex(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = f.useMemo(() => (null == n.thumbnail ? null : (0, EA.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = Eg(n.skuId),
        u = f.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, aN._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(AK, {
              className: ic()(ES.iE, i),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: ES.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(Aq._, { src: a.href, imageClassName: ES.rW, width: 48, height: 48 }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)(C.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, p.jsx)(J.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, Em.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: ES.h_,
                          children: (0, p.jsx)(Eh, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, p.jsx)("div", {
                          className: ES.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, p.jsx)(AZ.FY, { header: n, icon: (0, A7.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var ET = n(185438),
    Ep = n(683380);
function Ef(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, A$.A)(t, 100),
        u = (0, A8.PJ)(r.flags),
        d = u ? AQ.R : AJ.UserIcon,
        c = u ? V.intl.string(V.t["46YF2D"]) : V.intl.string(V.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, _.bG)([lv.A], () => (u && null != g ? lv.A.getGuild(g) : void 0), [g, u]),
        A = (0, _.bG)(
            [cS.A],
            () => {
                if (null != a) return cS.A.get(a);
            },
            [a],
        ),
        E = A9(n.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: Ep.wx,
                children: [
                    null != o && (0, p.jsx)(Aq._, { src: o.href, imageClassName: Ep.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(C.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: Ep.p4,
                                children: [
                                    (0, p.jsxs)(C.D, {
                                        variant: "heading-md/normal",
                                        className: Ep.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(J.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, p.jsxs)("span", {
                                                    className: Ep.vP,
                                                    children: [
                                                        (0, p.jsx)(g9.Ay, { guild: m, size: g9.Ay.Sizes.SMOL }),
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
            (0, p.jsx)(A4, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: Ep._B,
                        children: [
                            (0, p.jsx)(J.E, { variant: "text-md/normal", children: V.intl.string(V.t["goe+hk"]) }),
                            e &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(J.E, {
                                            variant: "text-md/normal",
                                            children: V.intl.format(V.t["Q8qJ+5"], {}),
                                        }),
                                        (0, p.jsx)(J.E, {
                                            variant: "text-md/normal",
                                            children: V.intl.format(V.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, p.jsx)(A4.Toggle, {
                                text: e ? V.intl.string(V.t["1Rkq/E"]) : V.intl.string(V.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: Ep.x0,
                children: [
                    (0, p.jsx)(Ex, {
                        storeListing: i,
                        className: Ep.o3,
                        cta: (0, p.jsxs)("div", {
                            className: Ep.cJ,
                            children: [
                                (0, p.jsx)(J.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: V.intl.string(V.t.fHIpOY),
                                }),
                                null != A &&
                                    (0, p.jsx)(J.E, {
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
                                  Ex,
                                  {
                                      storeListing: e,
                                      cta: (0, p.jsx)(J.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: V.intl.format(V.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, p.jsx)(E_, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function E_(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, ET.A)({
            analyticsLocation: I.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, p.jsx)(Ex, {
        storeListing: t,
        cta: (0, p.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(V.t["+KwmBt"]), onClick: l }),
    });
}
class EI extends f.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(AX.$T, {
                  color: AX.Hv.DANGER,
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
function EN(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = f.useState({ route: Ed.HOME }),
        { route: s } = i;
    function r() {
        l({ route: Ed.HOME });
    }
    let a = (e) => {
            (l({ route: Ed.SWITCH_APP_PLANS, ...e }), n(V.intl.string(V.t.VFqtkP), r));
        },
        [o, u] = f.useState({});
    f.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: Et.LOADING })),
                (0, AY._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: Et.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: Et.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, AH.E)(),
        c = d !== AH.mJ.LOADED;
    switch (s) {
        case Ed.HOME:
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        EI,
                        {
                            subscription: e,
                            children: (0, p.jsx)(En, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? Et.LOADING : (o[e.id] ?? Et.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case Ed.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, p.jsx)(Ef, { ...m, navigateToHome: r });
        default:
            (0, io.xb)(s);
    }
}
var EC = n(707989);
function Eb(e) {
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
        [i, l] = f.useState();
    return (
        null == i && (i = (0, p.jsx)(Ey, { onBack: t, title: V.intl.string(V.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                i,
                (0, p.jsx)("div", {
                    className: EC.A,
                    children: (0, p.jsx)(EN, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, p.jsx)(Ey, {
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
function Ey(e) {
    let { onBack: t, title: n } = e;
    return (0, p.jsxs)("div", {
        className: EC.D,
        children: [
            (0, p.jsx)(ld.K, {
                "aria-label": V.intl.string(V.t["13/7kX"]),
                icon: () => (0, p.jsx)(Az.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(C.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var Ev = n(366999),
    Ej = n(391659);
function EO(e) {
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
        ? ((t = V.intl.string(gD.default["/S02sx"])), (n = V.intl.string(gD.default.OPJNST)))
        : i
          ? ((t = V.intl.string(V.t["hT6i/0"])),
            (n = null != a ? V.intl.format(V.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = V.intl.string(V.t["3G0CTC"])),
            (n = r === tJ.xc.FP_SUB_PAUSED ? V.intl.format(V.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = ic()({ [Ej.Hs]: i, [Ej.mT]: !i }),
        d = ic()({ [Ej.CQ]: i, [Ej.ZM]: !i }),
        c = ic()({ [Ej.EM]: !i });
    return (0, p.jsxs)("div", {
        className: Ej.r6,
        children: [
            (0, p.jsxs)("div", {
                className: Ej.Nv,
                children: [
                    (0, p.jsx)(C.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, p.jsx)(J.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: Ej.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(J.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let EL = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, aN.kX)(t),
        r = s.length > 0,
        a = (0, Ev.Ay)(t.endsAt, Ev.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: ic()(n, Ej.f8),
            children: [
                (0, p.jsx)("div", {
                    className: Ej.J_,
                    children: (0, p.jsxs)("div", {
                        className: Ej.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: Ej.xt,
                                children: (0, p.jsx)(ag.t, { size: "md", color: "white", className: Ej.T8 }),
                            }),
                            (0, p.jsx)("div", {
                                className: Ej.pt,
                                children: (0, p.jsx)(C.D, {
                                    variant: "heading-md/semibold",
                                    children: V.intl.string(V.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(J.E, {
                                className: Ej.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : V.intl.string(V.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(EO, {
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
var ER = n(983048);
function ED(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, _.yK)([ch.A], () => [ch.A.get(i), null != s ? ch.A.get(s.planId) : null]);
    if (null == o || aN.Ay.getInterval(i).intervalType !== tJ.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, aN.z4)(i),
        m = aN.Ay.getDisplayName(i);
    if (a) t = V.intl.string(gD.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === I.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, aN._e)(e, r);
        t = V.intl.formatToPlainString(V.t["5CNRRA"], { date: n ?? 0 });
    } else t = V.intl.formatToPlainString(V.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, p.jsxs)("div", {
        className: Ej.Bh,
        children: [
            (0, p.jsx)("div", {
                className: ic()({
                    [Ej.bY]: g,
                    [Ej.sr]: o.skuId === tJ.pe.TIER_0,
                    [Ej.lP]: o.skuId === tJ.pe.TIER_1,
                    [Ej.eb]: o.skuId === tJ.pe.TIER_2,
                }),
                children: g
                    ? (0, p.jsx)(gY._, { size: "md", color: "currentColor", className: Ej.Kk })
                    : (0, p.jsx)(ag.t, { size: "md", color: "currentColor", className: Ej.Kk }),
            }),
            (0, p.jsxs)("div", {
                className: Ej.pt,
                children: [
                    (0, p.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        children: V.intl.format(V.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, p.jsx)(C.D, {
                            className: Ej.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, p.jsx)(J.E, {
                className: Ej.PJ,
                variant: "text-md/semibold",
                children: V.intl.format(V.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let EP = function (e) {
    let { className: t, entitlements: n } = e,
        i = K()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, _.yK)([ci.A], () => ci.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, _.bG)([us.A], () => us.A.getPremiumSubscription()),
        r = (0, _.bG)([us.A], () => null == us.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tJ.gD.PREMIUM_MONTH_TIER_1),
        o = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)("div", {
                className: ic()(t, Ej.xF, Ej.J_),
                children: Object.keys(i).map((e) =>
                    (0, p.jsx)(
                        ED,
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
                        (0, p.jsx)(J.E, {
                            className: Ej.eT,
                            variant: "text-md/normal",
                            children: V.intl.string(V.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(ER.i, {}),
                    ],
                }),
        ],
    });
};
var EG = n(902782);
function EM(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        [s] = (0, Af.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tk.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? EG.r : EG.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, aN.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = ch.A.get(o);
    tE()(null != u, "Missing plan");
    let d = (0, u6.$g)(s.total, s.currency);
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
        (0, p.jsx)(J.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function EU(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === I.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(EM, { subscription: t, withOverheadSeparator: n });
}
var EV = n(580892),
    Ek = n(689255);
let Ew = { [eL.nR]: "role_subscriptions_panel", [eL.PZ]: "application_subscriptions_panel" };
function EF() {
    return (0, p.jsx)(oz.Z, {
        className: Ek.wb,
        type: oz.Z.Types.CUSTOM,
        children: (0, p.jsxs)(lN.A, {
            align: lN.A.Align.CENTER,
            children: [
                (0, p.jsx)(i7.A, { game: null, size: i7.M.SMALL, className: Ek.pV }),
                (0, p.jsx)("span", { className: Ek.O, children: V.intl.string(V.t["jy/hyj"]) }),
            ],
        }),
    });
}
function EB(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mK._)(e, t));
}
function Ez() {
    let e = (0, _.bG)([ci.A], () => ci.A.getForApplication(tJ.tv), [], EB);
    return (
        f.useEffect(() => {
            (0, cU.LM)(tJ.tv);
        }, []),
        (0, p.jsx)(n3.n, {
            label: V.intl.string(V.t["2GKrvn"]),
            description: V.intl.string(V.t.Z5b2Gf),
            children:
                null != e && aN.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(EP, { className: Ek.fX, entitlements: e })
                    : (0, p.jsx)(EF, {}),
        })
    );
}
function EX() {
    return (0, p.jsx)("hr", { className: Ek.hr });
}
let EY = function () {
        var e;
        let t = (0, _.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
            n = (0, mZ.A)({ subscriptionFilter: (e) => EV.Hy.has(e.status) }),
            i = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, _.bG)(
                [ul.A],
                () => (null != t && null != t.paymentSourceId ? ul.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, _.bG)([us.A], () => us.A.hasFetchedSubscriptions()),
            a = (0, _.bG)([ok.A], () => ok.A.isBusy),
            o = (0, c6.Y)(),
            u = AI.A.useField("subsection"),
            d = AI.A.useField("scrollToGameServers"),
            c = f.useRef(null);
        f.useEffect(() => {
            (0, it._)(null != u ? Ew[u] : S.X.SUBSCRIPTIONS_PANEL);
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
            { servers: E } = (0, As.f)({ enabled: A }),
            h = (0, _.yK)([us.A], () => (0, m4.eP)(E, (e) => us.A.getSubscriptionById(e)), [E]),
            x = (0, c5.A)({ forceFetch: !0 }),
            T = (0, ge.ds)(),
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
                AI.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, h.length]),
        f.useEffect(
            () => (
                (0, c4.zS)(),
                oM.hP(),
                (0, gH.CD)(),
                oM.$o(),
                function () {
                    AI.A.resetState();
                }
            ),
            [],
        ),
        tu.A.enabled)
            ? (0, p.jsx)(op.A, {})
            : r && o
              ? u === eL.nR
                  ? (0, p.jsx)(Ak, { onGoBack: () => AI.A.setState({ subsection: null }) })
                  : u === eL.PZ
                    ? (0, p.jsx)(Eb, { onGoBack: () => AI.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: Ek.kL,
                          children: (0, p.jsxs)("div", {
                              className: Ek.Qs,
                              children: [
                                  l ? (0, p.jsx)(EV.Sb, {}) : null,
                                  null != t
                                      ? (0, p.jsx)(EV.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, p.jsx)(EV.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, p.jsxs)("section", {
                                          children: [
                                              (0, p.jsx)(C.D, {
                                                  variant: "heading-md/bold",
                                                  className: Ek.HL,
                                                  children: V.intl.string(V.t.Obre8v),
                                              }),
                                              (0, p.jsx)(J.E, {
                                                  variant: "text-md/normal",
                                                  className: Ek.JU,
                                                  children: V.intl.format(V.t["7Zi06b"], {
                                                      helpCenterLink: eb.A.getArticleURL(
                                                          I.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, p.jsx)(EL, {
                                                  className: Ek.fX,
                                                  fractionalPremiumInfo: x,
                                                  activationDate: N,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, p.jsx)(Ez, {}),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(EX, {}),
                                              (0, p.jsx)(Ao, {
                                                  count: m,
                                                  onClickManageSubscription: () => AI.A.setState({ subsection: eL.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(EX, {}),
                                              (0, p.jsx)(AB, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (AI.A.setState({ subsection: eL.PZ }),
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
                                          children: [(0, p.jsx)(EX, {}), (0, p.jsx)(Al, { servers: h })],
                                      }),
                                  (0, p.jsx)(EX, {}),
                                  null != t ? (0, p.jsx)(EU, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: ic()(Ek.kL, Ek.Lq), children: (0, p.jsx)(oO.y, {}) });
    },
    EH = (0, h.E2)(S.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        Component: () => (0, p.jsx)(EY, {}),
    }),
    EW = (0, h.zZ)(S.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [V.intl.string(V.t.trSpHX), V.intl.string(V.t["2GKrvn"])],
        buildLayout: () => [EH],
    }),
    EK = (0, h.t_)(S.X.SUBSCRIPTIONS_PANEL, { useTitle: () => V.intl.string(V.t.trSpHX), buildLayout: () => [EW] }),
    EZ = (0, h.i4)(S.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.trSpHX),
        icon: mH.L,
        usePersistentBadge: function () {
            let e = (0, mW.l)();
            return f.useMemo(
                () => ({
                    badgeType: T.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, p.jsx)(i$.E, { size: "xs", color: n1.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [EK],
    }),
    Eq = (0, h.WI)(S.X.BILLING_SECTION, {
        useTitle: () => V.intl.string(V.t.oeUm2s),
        buildLayout: () => [gX, mY, EZ, cJ, dC],
    });
var EQ = n(540999),
    EJ = n(306471),
    E$ = n(964355),
    E0 = n(172272);
let E1 = (0, h.zD)(S.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isAxeEnabled),
        setValue: (e) => (0, rm.x)({ axeEnabled: e }),
    }),
    E2 = (0, h.zD)(S.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rm.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var E3 = n(276086),
    E4 = n(354328);
let E5 = (0, h.zD)(S.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, E4.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, E3.L)("highlight_mana_components", e);
        },
    }),
    E6 = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, E4.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, E3.L)("highlight_mana_text_overrides", e);
        },
    }),
    E8 = (0, h.zD)(S.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, E4.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, E3.L)("highlight_mana_text", e);
        },
    }),
    E7 = (0, h.zD)(S.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, E4.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, E3.L)("highlight_void_toggleables", e);
        },
    }),
    E9 = (0, h.sN)(S.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: E0.YR,
        markers: Array.from({ length: E0.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => E0.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            E0.Or.getState().setHorizontalSpacing(e);
        },
    }),
    he = (0, h.zD)(S.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rm.x)({ layoutDebuggingEnabled: e });
        },
    }),
    ht = (0, h.sN)(S.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, _.bG)([rA.default], () => rA.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: E0.YR,
        markers: Array.from({ length: E0.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => E0.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            E0.Or.getState().setVerticalSpacing(e);
        },
    }),
    hn = (0, h.zZ)(S.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [E2, he, E9, ht, E5, E8, E6, E7, E1],
    });
var hi = n(246605),
    hl = n(274184);
function hs(e) {
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
let hr = (0, h.E2)(S.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, _.bG)([hl.Ay], () => hl.Ay.getActionTriggeredSurveyOverride());
            return (0, p.jsx)(hs, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hi.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    ha = (0, h.zD)(S.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => U.HZ.useSetting(),
        setValue: (e) => {
            U.HZ.updateSetting(e);
        },
    });
var ho = n(396478),
    hu = n(173936),
    hd = n(103557),
    hc = n(414079),
    hg = n(148810),
    hm = n(380610),
    hA = n(986238),
    hE = n(428524),
    hh = n(252149),
    hS = n(221851);
let hx = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    hT = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function hp(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class hf extends f.Component {
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
            className: ic()(hE.oS, hS.SX, hh.N, hE.nM),
            children: [
                (0, p.jsx)(hc.A, {
                    className: ic()(hE.lL, { [hE.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, p.jsxs)(lN.A, {
                    className: hS.QB,
                    children: [
                        (0, p.jsx)(lN.A.Child, {
                            basis: "50%",
                            children: (0, p.jsx)(lo.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: hT,
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
                            (0, p.jsx)(J.E, {
                                className: hE.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, p.jsxs)(J.E, {
                            variant: "text-sm/normal",
                            className: hE.AS,
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
class h_ extends f.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, hm.bD)();
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
        return K().without(hx, ...t);
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
        let t = await (0, hg.Zk)(e);
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
        (0, lT.openModal)((t) => (0, p.jsx)(hI, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, p.jsx)(ho.pp, {
            theme: nF.A.theme,
            className: ic()(hS.eT, hS.SX),
            children: (0, p.jsx)(ho.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : K().map(e, (e, i) =>
                  (0, p.jsx)(
                      hf,
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
                      icon: hu.LinkIcon,
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
                    disabled: hp(t ?? {}),
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
            ? (0, p.jsx)(oO.y, { className: hS.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                hp(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, p.jsx)(J.E, {
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
class hI extends f.Component {
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
            t = await (0, hg.SB)(e);
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
        return hp(this.props.buildOverrides ?? {});
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
            d = hA.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, p.jsxs)(q.B, {
            gap: 20,
            children: [
                (0, p.jsx)(lo.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hA.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(lo.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hA.VP,
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
            actionBarInput: (0, p.jsx)(cy.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let hN = (0, h.E2)(S.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: h_ });
var hC = n(256311),
    hb = n(883600);
let hy = (0, h.E2)(S.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, _.bG)([hb.A], () => hb.A.overrideId());
        async function t(e) {
            let t = hb.A.getChangelog(e, "en-US");
            return null != t ? t : ((await hC.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, p.jsx)(hs, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hC.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hv = n(506774);
let hj = new Date("2018-01-01"),
    hO = (0, h.Tf)(S.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => U.pK.useSetting() === oF.default.fromTimestamp(hj.getTime()),
        onClick: () => (hv.w.set("lastChangeLogDate", hj), U.pK.updateSetting(oF.default.fromTimestamp(hj.getTime()))),
    }),
    hL = (0, h.zD)(S.X.DISABLE_APP_COLLECTIONS_CACHE, {
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
    hR = (0, h.zD)(S.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isForcedCanary),
        setValue: (e) => {
            (0, rm.x)({ canary: e });
        },
    }),
    hD = (0, h.zD)(S.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.sourceMapsEnabled),
        setValue: (e) => (0, rm.x)({ sourceMapsEnabled: e }),
    }),
    hP = (0, h.zD)(S.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rm.x)({ onlyShowPreviewAppCollections: e }),
    });
var hG = n(10094),
    hM = n(683760);
let hU = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tJ.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tJ.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tJ.PremiumTypes.TIER_2 },
    ],
    hV = (0, h.Hn)(S.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hU,
        clearable: !0,
        useValue: () =>
            (0, _.bG)([hM.A], () => {
                let e = hM.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hG.O)(null, void 0)
                : null === e
                  ? (0, hG.O)(void 0, void 0)
                  : (0, hG.O)(0 === e ? null : e, void 0);
        },
    });
var hk = n(374042);
let hw = (0, h.E2)(S.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, _.bG)([hl.Ay], () => hl.Ay.getSurveyOverride());
            return (0, p.jsx)(hs, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => hi.xr(e),
                fetchOverride: (e) => (0, hk.B)(e, !0) ?? null,
            });
        },
    }),
    hF = (0, h.zZ)(S.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hV, hw, hr, hy, hO, hR, ha, hP, hL, hD, hN],
        useInlineNotice: () => ({
            type: T.lT.INLINE_NOTICE,
            noticeType: "info",
            role: "none",
            text: V.intl.format(V.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hB = (0, h.zD)(S.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rm.x)({ logAnalyticsEvents: e }),
    }),
    hz = (0, h.zD)(S.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rm.x)({ logGatewayEvents: e }),
    }),
    hX = (0, h.zD)(S.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.preventPopoutClose),
        setValue: (e) => (0, rm.x)({ preventPopoutClose: e }),
    }),
    hY = (0, h.zD)(S.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.logKeyboardMismatches),
        setValue: (e) => (0, rm.x)({ logKeyboardMismatches: e }),
    }),
    hH = (0, h.zD)(S.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rm.x)({ logOverlayEvents: e }),
    }),
    hW = (0, h.zD)(S.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isLoggingQuestEvents),
        setValue: (e) => (0, rm.x)({ logQuestEvents: e }),
    }),
    hK = (0, h.zD)(S.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, _.bG)([rA.default], () => rA.default.isTracingRequests),
        setValue: (e) => (0, rm.x)({ trace: e }),
    }),
    hZ = (0, h.zZ)(S.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hz, hH, hK, hB, hY, hX, hW] }),
    hq = (0, h.t_)(S.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hF, hZ, hn],
    }),
    hQ = (0, h.i4)(S.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: EJ.V,
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
                } = (0, _.cf)([rA.default, EQ.A, sx.default], () => ({
                    layoutDebuggingEnabled: rA.default.layoutDebuggingEnabled,
                    isDeveloper: EQ.A.isDeveloper,
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
                { horizontalSpacing: g, verticalSpacing: m } = (0, E0.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = E0.Or.getState(),
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
                                                          (0, p.jsx)(E$.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: g,
                                                              minValue: 0,
                                                              maxValue: E0.YR,
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
                                                          (0, p.jsx)(E$.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: E0.YR,
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
        buildLayout: () => [hq],
    });
var hJ = n(127062),
    h$ = n(25044),
    h0 = n(80703),
    h1 = n(123292),
    h2 = n(683438),
    h3 = n(890856),
    h4 = n(100392),
    h5 = n(102609),
    h6 = n(271478),
    h8 = n(386976),
    h7 = n(257433),
    h9 = n(32523),
    Se = n(96919),
    St = n(688151),
    Sn = n(863763);
function Si(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = f.useState(l),
        [a, o] = f.useState(!1),
        u = f.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, _.bG)([cA.default], () => cA.default.getId()),
        c = (0, _.bG)([cA.default], () => {
            let e = cA.default.getInstallationForTracking();
            return null == e ? null : (0, h0.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, h7.iN)(t, g),
        A = (0, h7.Fm)(t, g),
        E = (0, _.yK)([rf.A], () =>
            K()
                .sortBy(rf.A.getRecentExposures(St.Vh.USER, n), (e) => {
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
                (0, uw.C)((0, h4.yA)(n), () => {
                    ((0, sg.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        S = (0, p.jsx)(h3.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(J.E, {
                variant: "text-md/medium",
                className: Sn.DD,
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
                                    uw.p5 &&
                                        (0, p.jsx)(n5.D, {
                                            onClick: h,
                                            children: (0, p.jsx)(hu.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, p.jsx)(J.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: Sn.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, p.jsx)("div", { className: Sn.Os, children: S });
    let x = "";
    return (
        (x =
            t.system === h5.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? St.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: Sn.Os,
            children: [
                S,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(h6.g, {
                        label: t.system === h5.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: x,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: Sn.h_,
                    children:
                        null == A
                            ? (0, p.jsx)(J.E, {
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
                              (0, p.jsx)(J.E, {
                                  variant: "text-lg/medium",
                                  className: Sn.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(J.E, {
                                  variant: "code",
                                  className: Sn.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, p.jsx)(J.E, {
                                  variant: "text-lg/medium",
                                  className: Sn.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(J.E, {
                                  variant: "code",
                                  className: Sn.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(J.E, {
                                  variant: "text-lg/medium",
                                  className: Sn.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(J.E, {
                                  variant: "code",
                                  className: Sn.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: Sn.id,
                          children: (0, p.jsx)(h1.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(ls.c, { className: Sn.yF }),
            ],
        })
    );
}
function Sl(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = f.useState(null != i),
        [r, a] = f.useState(!1),
        o = f.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, _.bG)([rf.A], () => rf.A.getLoadedGuildExperiment(n)),
        d = (0, _.bG)([rf.A, lv.A, iq.A], () => {
            if (t.system === h5.l5.LEGACY) return null == rf.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lv.A.getGuildsArray().some((t) => null != iq.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, _.yK)([rf.A], () =>
            K()
                .sortBy(rf.A.getRecentExposures(St.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, _.yK)([cA.default, lv.A, rf.A, iq.A], () => {
            let e = t.system === h5.l5.LEGACY,
                i = t.name,
                l = cA.default.getId(),
                s = K().sortBy(lv.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (rf.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? St.RE.NOT_ELIGIBLE)
                    : (iq.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? St.RE.NOT_ELIGIBLE);
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
        A = t.system !== h5.l5.LEGACY,
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
        I = (0, _.bG)([iq.A, cA.default], () => {
            if (!A) return;
            let e = cA.default.getId();
            return iq.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != I && (I.isOverride || I.useAsEligibility),
        C = (0, p.jsx)(n5.D, {
            onClick: o,
            children: (0, p.jsxs)(J.E, {
                variant: "text-md/medium",
                className: Sn.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(J.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: Sn.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, p.jsxs)("div", {
              className: Sn.Os,
              children: [
                  C,
                  (0, p.jsx)(h6.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, p.jsx)("div", {
                          className: Sn.h_,
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
                      className: Sn.h_,
                      children: d
                          ? (0, p.jsx)(J.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === h5.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  A &&
                      (0, p.jsxs)("div", {
                          children: [
                              (0, p.jsxs)(J.E, {
                                  variant: "text-lg/medium",
                                  className: Sn.id,
                                  children: ["Server Descriptor", null != x ? ` (${x})` : ""],
                              }),
                              (0, p.jsx)(J.E, {
                                  variant: "code",
                                  className: Sn.AS,
                                  children: null == T ? "None" : JSON.stringify(T, void 0, 2),
                              }),
                              (0, p.jsx)(J.E, {
                                  variant: "text-lg/medium",
                                  className: Sn.id,
                                  children: "Client Eligibility",
                              }),
                              (0, p.jsx)(J.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, p.jsx)(J.E, {
                                  variant: "code",
                                  className: Sn.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(J.E, {
                                    variant: "text-lg/medium",
                                    className: Sn.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(J.E, { variant: "code", className: Sn.AS, children: g }),
                                t.system === h5.l5.LEGACY &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(J.E, {
                                                variant: "text-lg/medium",
                                                className: Sn.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, p.jsx)(J.E, {
                                                variant: "code",
                                                className: Sn.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(J.E, {
                                    variant: "text-lg/medium",
                                    className: Sn.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(J.E, {
                                    variant: "code",
                                    className: Sn.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(J.E, {
                                    variant: "text-lg/medium",
                                    className: Sn.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(J.E, {
                                    variant: "code",
                                    className: Sn.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: Sn.id,
                            children: (0, p.jsx)(h1.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(ls.c, { className: Sn.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: Sn.Os, children: C });
}
let Ss = (0, h.E2)(S.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, h8.op)(),
                { experiments: n, overridesInfo: i } = (0, h9.hI)(),
                l = f.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = f.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, _.bG)([cA.default], () => {
                    let e = cA.default.getInstallationForTracking();
                    return null == e ? null : (0, h0.v)(e);
                }),
                [a, o] = f.useState(""),
                u = (0, Se.oC)((0, Se.R3)((0, Se.Fm)(l), s), a);
            return (0, p.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, p.jsxs)(q.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, p.jsxs)(J.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uw.p5 &&
                                    (0, p.jsx)(h1.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uw.C)(r, () => {
                                                (0, sg.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, p.jsx)(h2.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Sl : Si;
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
                              className: Sn.p$,
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
    Sr = (0, h.zZ)(S.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Ss] }),
    Sa = (0, h.t_)(S.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Sr] }),
    So = (0, h.i4)(S.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: hJ.c,
        useMenu: h$.A,
        buildLayout: () => [Sa],
    }),
    Su = (0, h.WI)(S.X.DEVELOPER_SECTION, {
        useTitle: () => V.intl.string(V.t["+gHUHA"]),
        usePredicate: () => EQ.A.isDeveloper,
        buildLayout: () => [So, hQ],
    });
var Sd = n(682348),
    Sc = n(871633),
    Sg = n(751075),
    Sm = n(843402);
let SA = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function SE() {
    let e = (0, _.yK)([i5.Ay], () => i5.Ay.getGamesSeen(!1)),
        t = (0, _.bG)([i5.Ay], () => SA(...i5.Ay.getOverrides()));
    f.useEffect(() => {
        if (e8.isPlatformEmbedded) return ((0, Sm.a2)(), Sm.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = f.useMemo(
        () =>
            e.reduce((e, t) => ((0, Sc.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function Sh(e) {
    let { gameHistory: t } = SE();
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
function SS(e) {
    let { namedGames: t, totalCount: n } = Sh(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function Sx() {
    let { namedGames: e } = Sh(2),
        [t, n] = f.useMemo(() => e.map((e) => e.id), [e]);
    f.useEffect(() => {
        A5.Ay.fetchApplications([t, n].filter(io.Vq));
    }, [t, n]);
    let [i, l] = (0, _.yK)([i2.A], () => [t, n].map(i2.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, p.jsx)(i7.A, { game: i, size: i7.M.MEDIUM_LARGE }), shape: Sg.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, p.jsx)(i7.A, { game: l, size: i7.M.MEDIUM }), shape: Sg.e0.ROUNDED } : null,
          };
}
let ST = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = SS(2);
            return V.intl.format(V.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = Sx();
            return { type: T.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, _.bG)([i5.Ay], () => i5.Ay.getGamesSeen(!1).some((e) => !(0, Sc.n1)(e))) && (0, nh.xl)(),
    }),
    Sp = (0, h.gN)(S.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [ST] });
var Sf = n(533440),
    S_ = n(406535),
    SI = n(57129);
let SN = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => V.intl.string(SI.default.A0FVCV),
        useSubtitle: () => V.intl.string(SI.default.vHX6RG),
        useValue: U.hV.useSetting,
        setValue: function (e) {
            (U.hV.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S_.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    SC = (0, h.zD)(S.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => V.intl.string(SI.default["9l5u6A"]),
        useSubtitle: () => V.intl.string(SI.default.QcmgBF),
        useValue: U.pR.useSetting,
        setValue: function (e) {
            (U.pR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S_.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    Sb = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => V.intl.string(V.t.WmsPis),
        useSearchTerms: () => [V.intl.string(V.t["8ka8li"])],
        buildLayout: () => [Sf._, SN, SC, Sp],
    }),
    Sy = (0, h.AK)(S.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.J0SFL2),
        destinationKey: S.X.DATA_AND_PRIVACY_PANEL,
    }),
    Sv = (0, h.gN)(S.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [Sy] });
var Sj = n(365258);
let SO = (0, h.Qx)(S.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => V.intl.string(SI.default["/LHVbt"]),
    useSubtitle: () => V.intl.string(V.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eJ.Qd.ACTIVITY_STATUS_OFF, name: V.intl.string(SI.default.m3oL7Q) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: V.intl.string(SI.default["5+lnTA"]) },
            { value: eJ.Qd.ACTIVITY_STATUS_ON, name: V.intl.string(SI.default["egr+VZ"]) },
        ];
    },
    useValue: U._Z.useSetting,
    setValue: function (e) {
        let t = U._Z.getSetting();
        U._Z.updateSetting(e);
        let i = (0, Sj.g8)(t, e);
        if (null == i) return;
        let l = (0, Sj.Xc)(e);
        (0, lT.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, p.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: l });
        });
    },
});
var SL = n(498642),
    SR = n(573435),
    SD = n(260509),
    SP = n(771810);
function SG(e) {
    let { guild: t, size: n } = e,
        i = (0, SD.Iv)(t, n, !1, !0),
        l = (0, SD.Rb)(t);
    return null != i
        ? (0, p.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, p.jsx)("div", {
              className: SP.F,
              children: (0, p.jsx)(J.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
              }),
          });
}
function SM(e) {
    let { guild: t, size: n } = e;
    return (0, p.jsx)(SR.Ay, {
        className: SP.z,
        mask: SR.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, p.jsx)(SG, { guild: t, size: n }),
    });
}
var SU =
    (((g = {}).SERVER_ORDER = "server-order"),
    (g.RECENTLY_JOINED = "recently-joined"),
    (g.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (g.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    g);
let SV = {
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
var Sk = n(618118);
function Sw(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, _.bG)([SL.A], () => SL.A.getMemberCount(t.id));
    return (0, p.jsxs)(q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, p.jsx)("div", { className: Sk.FO, children: (0, p.jsx)(SM, { guild: t, size: 48 }) }),
            (0, p.jsx)("div", {
                className: Sk.QH,
                children: (0, p.jsx)(t5.d, {
                    label: t.name,
                    description: V.intl.format(V.t.zRl6XR, { count: l ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let SF = function (e) {
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
                l = (0, _.bG)([gQ.Ay], () => gQ.Ay.getFlattenedGuildIds()),
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
                [g, m] = (0, f.useState)(() => SV[n](r, a)),
                A = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(SV[e](r, a)), i(e));
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
                { id: SU.SERVER_ORDER, label: V.intl.string(V.t.STMPJ2), value: SU.SERVER_ORDER },
                { id: SU.RECENTLY_JOINED, label: V.intl.string(V.t.CbaapP), value: SU.RECENTLY_JOINED },
                { id: SU.ACTIVITY_SHARING_ON, label: V.intl.string(SI.default.ZI51JZ), value: SU.ACTIVITY_SHARING_ON },
                {
                    id: SU.ACTIVITY_SHARING_OFF,
                    label: V.intl.string(SI.default["+kxafn"]),
                    value: SU.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === s)?.label ?? "";
    return (0, p.jsxs)("div", {
        className: Sk.iE,
        children: [
            t,
            (0, p.jsxs)("div", {
                className: Sk.N1,
                children: [
                    (0, p.jsx)(h2.I, {
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
                            className: Sk.gO,
                            children: [
                                (0, p.jsx)(ap.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, p.jsx)(g5.W, {
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
                                            className: Sk.Ku,
                                            children: [
                                                (0, p.jsx)(J.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, p.jsx)(mI.a, { size: "xs", color: n1.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(h1.Q, {
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
                children: V.intl.format(SI.default.EvzDff, { count: n.length }),
            }),
            (0, p.jsxs)("ul", {
                className: Sk.X1,
                id: m,
                "aria-label": V.intl.string(V.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, p.jsx)("div", {
                            className: Sk.pb,
                            children: (0, p.jsx)(J.E, {
                                className: Sk.R$,
                                variant: "text-lg/medium",
                                children: V.intl.string(V.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, p.jsx)(
                            Sw,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var SB = n(68322);
let Sz = (0, h.E2)(S.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [V.intl.string(SI.default["/LHVbt"])],
        Component: function () {
            let e = U.tz.useSetting()
                ? null
                : (0, p.jsx)("div", {
                      className: SB.l,
                      children: (0, p.jsx)(iK.w, {
                          type: "warning",
                          message: V.intl.string(SI.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, p.jsx)(SF, { notice: e });
        },
    }),
    SX = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bwqjL9),
        buildLayout: () => [SO, Sz, Sv],
    }),
    SY = (0, h.zD)(S.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => V.intl.string(SI.default.khuuzv),
        useSubtitle: () => V.intl.string(SI.default["8EWsJ8"]),
        useValue: () => U.e.useSetting(),
        setValue: (e) => U.e.updateSetting(e),
    }),
    SH = (0, h.E2)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(J.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, p.jsx)(
                            J.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    SW = (0, h.zD)(S.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => V.intl.string(SI.default.Uz5Ipi),
        useSubtitle: () => V.intl.string(SI.default.CZI2Gb),
        useValue: () => U.UM.useSetting(),
        setValue: (e) => U.UM.updateSetting(e),
    }),
    SK = (0, h.zZ)(S.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => V.intl.string(SI.default["89YBr5"]),
        useSubtitle: () => V.intl.string(V.t.uGDpgH),
        buildLayout: () => [SY, SW, SH],
        useSearchTerms: () => [V.intl.string(V.t.VOszPA)],
    }),
    SZ = (0, h.t_)(S.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        buildLayout: () => [Sb, SX, SK],
    }),
    Sq = (0, h.i4)(S.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cq98yL),
        icon: Sd._,
        buildLayout: () => [SZ],
    });
var SQ = n(712440),
    SJ = n(370997);
let S$ = (0, h.E2)(S.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: SJ.Ay,
    useSearchTerms: () => [V.intl.string(V.t["f6kk+r"])],
});
var S0 = n(478016),
    S1 = n(77468),
    S2 = n(289498),
    S3 = n(573648),
    S4 = n(874490),
    S5 = n(370480),
    S6 = n(968309);
let S8 = new Set([I.fg2.XBOX, I.fg2.PLAYSTATION, I.fg2.PLAYSTATION_STAGING, I.fg2.CRUNCHYROLL]);
var S7 = n(169869),
    S9 = n(814925),
    xe = n(733110),
    xt = n(479785),
    xn = n(757036),
    xi = n(555837),
    xl = n(43990),
    xs = n(241524),
    xr = n(51965),
    xa = n(377368),
    xo = n(631368),
    xu = n(212739),
    xd = n(30370),
    xc = n(181666),
    xg = n(553875),
    xm = n(660594);
function xA() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, xo.$)()),
            (t = (0, xu.O)()),
            (l = null != (i = (0, _.bG)([xd.A], () => xd.A.getAccount(null, I.fg2.XBOX))) && !i.revoked),
            e === xo.C.NONE || t
                ? { variant: xo.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === xo.C.NO_ACCESS && !l }),
        { analyticsLocations: a } = (0, eX.Ay)(tk.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, xa.yW)(a),
        u = (0, xs.A)("(max-width: 485px)");
    if (s === xo.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (s) {
        case xo.C.HAS_ACCESS:
        case xo.C.BLOCK_CLAIM:
            ((c = V.intl.string(xg.default["7PdsMK"])),
                (g = (0, p.jsx)(xr.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: V.intl.string(xg.default.CubeLC),
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
        case xo.C.NO_ACCESS:
            ((c = V.intl.string(xg.default.NwkRTZ)),
                (g = (0, p.jsx)(tX.A, {
                    defaultTextOverride: V.intl.string(xg.default["0vY+ie"]),
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
                className: xm.bV,
                children: [
                    (0, p.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: V.intl.string(V.t.NG1e6l),
                    }),
                    (0, p.jsx)(ag.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, p.jsx)(xl.N, {
                theme: I.NJ8.DARK,
                children: (e) =>
                    (0, p.jsx)("div", {
                        className: e,
                        children: (0, p.jsxs)("div", {
                            className: xm.Nr,
                            children: [
                                (0, p.jsxs)("div", {
                                    className: xm.Tp,
                                    children: [
                                        (0, p.jsx)("div", {
                                            className: xm.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, p.jsx)("div", { className: xm.$h }),
                                        (0, p.jsx)("div", { className: xm.Rv }),
                                        (0, p.jsx)("div", { className: xm.Lw }),
                                    ],
                                }),
                                (0, p.jsxs)("div", {
                                    className: xm.Mn,
                                    children: [
                                        (0, p.jsxs)("div", {
                                            className: xm.mY,
                                            children: [
                                                (0, p.jsx)("img", {
                                                    className: xm.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, p.jsx)(J.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: xm.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, p.jsx)("div", { className: xm.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)("div", { className: xm.yF }),
                                            (0, p.jsxs)("div", {
                                                className: xm.sQ,
                                                children: [
                                                    (0, p.jsx)(uG.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n1.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, p.jsx)(J.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: V.intl.format(xc.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(xa.Hx.CONNECT),
                                                                    (0, S6.A)({
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
var xE = n(201718),
    xh = n(321078),
    xS = n(672130),
    xx = n(379848),
    xT = n(688901);
function xp(e) {
    let { markAsDismissed: t } = e;
    return (
        f.useEffect(() => t(m8.i.AUTO_DISMISS), [t]),
        (0, p.jsx)("div", { className: xT.Ad, children: (0, p.jsx)(Ah.E, { type: "new", variant: "primary" }) })
    );
}
function xf(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, p.jsxs)("div", {
        className: xT.kL,
        children: [
            i,
            (0, p.jsxs)("div", {
                className: xT.FS,
                children: [
                    (0, p.jsxs)("div", {
                        className: xT.TK,
                        children: [
                            (0, p.jsx)(xx.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, p.jsx)(xp, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, p.jsx)(J.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, p.jsx)(J.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, p.jsx)(j.$, { text: V.intl.string(V.t.vD60Pv), onClick: s }),
        ],
    });
}
function x_() {
    let e = eb.A.getArticleURL(I.MVz.PS_CONNECTION);
    return (0, p.jsx)(xf, {
        title: V.intl.string(V.t.v20wwm),
        body: V.intl.format(V.t.lTZBit, { help_article: e }),
        img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eE.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, S6.A)({ platformType: I.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let xI = "/assets/9df988a227916145.png";
function xN() {
    return (0, p.jsx)(xf, {
        title: V.intl.string(xc.default["9cLtDI"]),
        body: V.intl.format(xc.default["D+kUbg"], { learnMoreLink: eb.A.getArticleURL(I.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, p.jsx)("img", { src: xI, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, S6.A)({ platformType: I.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function xC() {
    let e = eb.A.getArticleURL(I.MVz.XBOX_CONNECTION);
    return (0, p.jsx)(xf, {
        title: V.intl.string(V.t["2okkZV"]),
        body: V.intl.format(V.t.OnERSS, { help_article: e }),
        img: (0, p.jsx)("img", { src: xI, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eE.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, S6.A)({ platformType: I.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var xb = n(783419),
    xy = n(534952),
    xv = n(211180),
    xj = n(247259);
function xO(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, _.cf)(
            [xd.A],
            () => ({
                isJoining: xd.A.isJoining(n.id),
                joinErrorMessage:
                    "" === xd.A.joinErrorMessage(n.id) ? V.intl.string(V.t.j2d6Km) : xd.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== xd.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, _.bG)([lv.A], () => lv.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, p.jsx)(j.$, {
                size: "sm",
                onClick: function () {
                    S1.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? V.intl.string(V.t.RXvQQu) : V.intl.string(V.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: xj.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: xj.XX,
                    children: [
                        (0, p.jsx)(g9.Ay, { size: g9.Ay.Sizes.SMALL, guild: n.guild, className: xj.$f }),
                        (0, p.jsxs)("div", {
                            className: xj.Vn,
                            children: [
                                (0, p.jsx)(J.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, p.jsx)(nr.Anchor, {
                                    href: S3.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, p.jsx)(J.E, {
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
                    (0, p.jsx)(J.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: xj.R,
                        children: l,
                    }),
            ],
        })
    );
}
function xL(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s = ((t = l.id), (n = (0, xi.G)()), (i = (0, xn.L)(tJ.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return l.type === I.fg2.XBOX && s
        ? (0, p.jsx)(xN, {})
        : l.twoWayLink
          ? null
          : l.type === I.fg2.XBOX
            ? (0, p.jsx)(xC, {})
            : l.type === I.fg2.PLAYSTATION
              ? (0, p.jsx)(x_, {})
              : null;
}
function xR(e) {
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
        R = (0, S4.ML)(u.type),
        D = S3.A.get(R);
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
            (null != e && (E(e), S1.A.setVisibility(u.type, u.id, e), N(null)),
                null != t && (S(t), S1.A.setMetadataVisibility(u.type, u.id, t), b(null)));
        }, [u]),
        (0, p.jsxs)("div", {
            className: xj.FI,
            children: [
                ((t = S3.A.get(u.type)),
                (n = S3.A.get(R)),
                (i = "1" === (u.metadata ?? {})[xb.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === I.fg2.TWITTER &&
                    i &&
                    (l = (0, p.jsx)(lg.m, {
                        text: V.intl.string(V.t.Jebrww),
                        children: (0, p.jsx)(S9.A, {
                            color: n1.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, p.jsx)(S0.U, { size: "xs", color: n1.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, p.jsxs)("div", {
                    className: xj.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: n.name,
                            className: xj.gj,
                            src: (0, c3.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: xj.$p,
                                    children: [
                                        (0, p.jsx)(J.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: xj.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, p.jsx)("div", { className: xj.cG, children: l }),
                                    ],
                                }),
                                (0, p.jsx)(J.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: xj.Au,
                                    children:
                                        null != n.migrationData
                                            ? V.intl.format(xv.default.Glhokn, { platformName: n.name })
                                            : n.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(n5.D, {
                            className: xj.uH,
                            onClick: function () {
                                let e = S3.A.get(u.type);
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
                                            S8.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, p.jsx)(l9.A, {
                                                children: V.intl.format(V.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": V.intl.string(V.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(dt.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, p.jsx)(xL, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, S5.An)(t[xb.pK.CREATED_AT], c);
                    switch (e.type) {
                        case I.fg2.REDDIT:
                            n = (0, S7.xE)(t, xj.Nz);
                            break;
                        case I.fg2.STEAM:
                            n = (0, S7.dy)(t, xj.Nz);
                            break;
                        case I.fg2.LETTERBOXD:
                            n = (0, S7.uq)(t, xj.Nz);
                            break;
                        case I.fg2.BLUESKY:
                        case I.fg2.TWITTER:
                        case I.fg2.MASTODON:
                            n = (0, S7.ED)(t, xj.Nz);
                            break;
                        case I.fg2.EBAY:
                            n = (0, S7.ub)(t, xj.Nz);
                            break;
                        case I.fg2.PAYPAL:
                            n = (0, S7.gZ)(t, xj.Nz);
                            break;
                        case I.fg2.TIKTOK:
                            n = (0, S7.HU)(t, xj.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, p.jsx)(
                                J.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: xj.M4,
                                    children: V.intl.format(V.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = V.intl.string(V.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== S3.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, p.jsx)(
                                    "div",
                                    {
                                        className: xj.Z3,
                                        children: (0, p.jsx)(Ah.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, p.jsx)(
                                    J.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: xj.vt,
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
                                    className: xj.jy,
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
                                                      S1.A.refresh(e.type, e.id).finally(() => {
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
                        (0, p.jsx)("div", { className: xj.tJ, children: n })
                    );
                })(u),
                (I.txh.has(u.type) &&
                    (s = (0, p.jsx)(t5.d, {
                        label: V.intl.string(V.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), S1.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                I.ewM.has(u.type) &&
                    (r = (0, p.jsx)(t5.d, {
                        label: V.intl.format(V.t["6u6J0q"], { platform: D.name }),
                        checked: x,
                        onChange: function (e) {
                            (T(e), S1.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                S3.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(t5.d, {
                        label: V.intl.string(V.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (b(n), (0, S6.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (S(n), S1.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, p.jsxs)("div", {
                    className: xj.HZ,
                    children: [
                        (0, p.jsx)(t5.d, {
                            label: V.intl.string(V.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (N(n), (0, S6.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), S1.A.setVisibility(u.type, u.id, n));
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
                                  (0, S6.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(lu.D, {
                            label: V.intl.string(V.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(xO, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, p.jsx)(xt.A, { partner: u.type }),
            ],
        })
    );
}
function xD(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: xj.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, p.jsxs)("div", {
                          className: xj.Il,
                          children: [
                              (0, p.jsx)("img", { alt: n.name, className: ic()(xj.gj, xj.sN), src: i }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: xj.$p,
                                          children: (0, p.jsx)(J.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: xj.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(J.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: xj.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(n5.D, {
                                  className: xj.uH,
                                  onClick: () =>
                                      (0, SJ.d1)(n, t.scopes, () => {
                                          SQ.A.delete(t.id);
                                      }),
                                  "aria-label": V.intl.string(V.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(dt.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, p.jsx)("div", {
                      className: xj.HZ,
                      children: (0, p.jsx)(t5.d, {
                          label: V.intl.string(V.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              xE.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function xP() {
    let e = (0, S4.gn)(),
        t = (0, i3.A)((0, xy.getMigratedApplicationIdentityConnectionsScreenApplications)());
    return (0, p.jsxs)("div", {
        className: xj.lA,
        children: [
            t.map((e) => null != e && (0, p.jsx)(xS.A, { application: e, innerClassName: xj.U$ }, e.id)),
            e.map((e) =>
                (0, p.jsx)(
                    S2.A,
                    { type: e.type, innerClassName: xj.U$, location: tk.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function xG(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = f.useMemo(() => i.filter((e) => S3.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, p.jsx)(oO.y, { type: oO.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, p.jsx)(ho.pp, {
                    theme: r,
                    className: xj.p$,
                    children: (0, p.jsx)(ho.SG, {
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
                                xD,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, p.jsx)(
                                xR,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            S1.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, p.jsx)("div", { className: xj.V, children: t })
    );
}
let xM = (0, h.E2)(S.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, p.jsx)(lu.D, { label: V.intl.string(V.t["t+aGse"]), children: (0, p.jsx)(xP, {}) });
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
    xU = (0, h.E2)(S.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, _.bG)([tu.A], () => tu.A.hidePersonalInformation),
                t = (0, _.bG)([xd.A], () => xd.A.isFetching()),
                n = (0, _.bG)([xd.A], () => xd.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, _.cf)([xe.default], () => ({
                    authorizedAppsFetchState: xe.default.getFetchState(),
                    authorizedApps: xe.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, xh.A)(sx.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cN.Ay)(),
                o = (0, _.bG)([ur.default], () => ur.default.locale);
            return (f.useEffect(() => {
                i === xe.FetchState.NOT_FETCHED && SQ.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(xA, {}),
                          (0, p.jsx)(xG, {
                              fetching: t || s || (r.length > 0 && i !== xe.FetchState.FETCHED),
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
            S1.A.fetch();
        },
        useSearchTerms: () => [
            V.intl.string(V.t["+/hZM/"]),
            V.intl.string(V.t.bsbMVz),
            V.intl.string(V.t.f7yOAX),
            V.intl.string(V.t.FYKGsL),
            V.intl.string(V.t["+KCMSi"]),
        ],
    }),
    xV = (0, h.zZ)(S.X.CONNECTIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["3fe7U5"]),
        useSubtitle: () => V.intl.string(V.t.U22vw6),
        buildLayout: () => [xM, xU],
    }),
    xk = (0, h.zZ)(S.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        useSubtitle: () => V.intl.string(V.t.G9JfLg),
        buildLayout: () => [S$],
        initialize: () => (
            SQ.A.fetch(),
            () => {
                SJ.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    xw = (0, h.t_)(S.X.CONNECTED_APPS_PANEL, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        useObscuredNotice: op.L,
        buildLayout: () => [xV, xk],
    }),
    xF = (0, h.i4)(S.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.lrVuZO),
        icon: hu.LinkIcon,
        buildLayout: () => [xw],
    });
var xB = n(625657),
    xz = n(592598),
    xX = n(773371),
    xY = n(532294),
    xH = n(672396);
let xW = xZ(null);
function xK() {
    var e;
    let t = xZ(xW);
    ((e = xW),
        K().isEqual(K().omit(t, "old_enabled"), K().omit(e, "old_enabled")) ||
            (td.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (xW = t)));
}
function xZ(e) {
    let t = xY.default.getNotificationPositionMode(),
        n = t !== I.G6Q.DISABLED,
        i = la.Ay.getOverlayKeybind(),
        l = la.Ay.getOverlayChatKeybind();
    return {
        enabled: xX.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: xz.A.isNotificationDisabled(xH.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, lS.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, lS.dI)(l.shortcut) : null,
        text_opacity_slider: xY.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? xX.default.enabled,
    };
}
var xq = n(237984),
    xQ = n(63035);
function xJ(e) {
    (e.preventDefault(), e.stopPropagation());
}
function x$(e) {
    let { children: t } = e;
    return (0, p.jsx)("div", { onClick: xJ, children: t });
}
function x0(e) {
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
        className: ic()(xQ.HS, d),
        children: [
            (0, p.jsxs)(h3.s, {
                "aria-label": u,
                onClick: o,
                focusProps: { offset: 4 },
                children: [
                    null != t && (0, p.jsx)("div", { className: xQ.x_, children: t }),
                    (0, p.jsxs)("div", {
                        className: xQ.rN,
                        children: [
                            null != n && (0, p.jsx)("div", { className: xQ.$t, children: n }),
                            (0, p.jsxs)("div", {
                                className: xQ.c8,
                                children: [
                                    (0, p.jsx)(J.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: xQ.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, p.jsx)(J.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, p.jsx)(J.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, p.jsx)("div", { className: xQ.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: xQ.Om, children: a }),
        ],
    });
}
let x1 = (0, h.E2)(S.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, p.jsx)(x0, {
            title: V.intl.string(V.t["z4/l+V"]),
            description: V.intl.string(V.t["3aZq/0"]),
            action: (0, p.jsx)(j.$, {
                variant: "primary",
                text: V.intl.string(V.t.s2nVhG),
                onClick: () => {
                    (0, xq.b)(tk.A.USER_SETTINGS, I.BRT.APP);
                },
            }),
            "aria-label": V.intl.string(V.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [V.intl.string(V.t["z4/l+V"])],
});
var x2 = n(452295),
    x3 = n(684013),
    x4 = n(56562),
    x5 = n(311043),
    x6 = n(454908),
    x8 = n(41984),
    x7 = n(918825),
    x9 = n(296027),
    Te = n(562519);
let Tt = 5 * n(927813).A.Millis.DAY,
    Tn = new Te.A("overlay_survey_timestamps");
function Ti(e, t) {
    let i, l;
    ((i = Date.now()),
        (null != (l = Array.from(Tn.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < Tt) ||
            Array.from(Tn.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, lT.openModalLazy)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), Tn.add(i), (n) => (0, p.jsx)(l, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function Tl() {
    (0, le.sL)("overlay-settings");
}
function Ts(e) {
    let { className: t, game: n } = e;
    return (0, le.NP)() && null != n && n.elevated
        ? (0, p.jsx)("div", {
              className: t,
              children: (0, p.jsx)(iK.w, {
                  type: "warning",
                  message: V.intl.format(V.t["LJzl+0"], { helpCenterLink: eb.A.getArticleURL(I.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: V.intl.string(V.t["1iI46O"]), onClick: Tl },
              }),
          })
        : null;
}
var Tr = n(760751),
    Ta = n(9302),
    To = n(656513);
let Tu = new Set([
    x8.AR.INITIALIZING,
    x8.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    x8.AR.WAITING_FOR_MODULE_TRACKING,
    x8.AR.WAITING_FOR_OVERLAY_OPEN,
    x8.AR.WAITING_FOR_POPOUT_OPEN,
    x8.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    x8.AR.WAITING_FOR_REACT_INITIALIZATION,
    x8.AR.WAITING_FOR_PID_FOCUS,
    x8.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function Td(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = f.useState(!1);
    return (0, p.jsx)(To.N, {
        className: xQ.uR,
        collapsibleContent: (0, p.jsx)("div", { className: xQ.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, p.jsx)(x0, {
                ...l,
                onClick: (e) => {
                    var n;
                    (r((n = !s)), i?.(n), t?.(e));
                },
                className: ic()(xQ.AC, n),
                action: (0, p.jsxs)("div", {
                    className: xQ.rc,
                    children: [
                        l.action,
                        s
                            ? (0, p.jsx)(mI.a, {
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
let Tc = (0, h.E2)(S.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i8();
        (0, x6.I)(e?.id);
        let n = e?.pid,
            i = (0, _.bG)(
                [x9.default],
                () => (null == e || null == n ? null : x9.default.getTrackedGameByPid(n)),
                [e, n],
                i1(),
            ),
            { data: l } = (0, x6.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, _.cf)(
                [Tr.A, tc.A, x5.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i5.hw)(e, !1, [Tr.A, tc.A, x5.A]),
                [e, i],
            ),
            a = (0, _.bG)(
                [i5.Ay, Tr.A, tc.A, x5.A],
                () => (null == e ? null : (0, i5.xU)(e, i5.Ay, Tr.A, tc.A, x5.A)),
                [e],
                i1(),
            ),
            [o, u] = f.useState(r),
            [d, c] = f.useState(s),
            [g, m] = f.useState(!1);
        f.useEffect(() => {
            (u(r), c(s));
        }, [r, s]);
        let A = !(0, Ta.supportsLegacy)(),
            E = !(0, Ta.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: S } = (0, _.cf)([x9.default], () => x9.default.getGlobalEnabledStatus());
        function x(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case x7.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), x2.A.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case x7.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), x2.A.toggleOverlay(e, d, t), (l = !t && o));
                    break;
                case x7.OverlayToggledClientSettingType.LEGACY:
                    (x3.A.setEnabled(t, S), (0, x7.Q)(t, x7.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case x7.OverlayToggledClientSettingType.OOP:
                    (x3.A.setEnabled(h, t), (0, x7.Q)(t, x7.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || l) &&
                Ti(
                    i ? x7.OverlayToggledClientSettingType.LEGACY_GAME : x7.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let T = A && E,
            I = !h && !S,
            N = !o && !h && d && !A,
            C = !d && !S && o && !E,
            b = i?.overlayMethod === x8.Ue.Disabled,
            y = i?.state === x8.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && Tu.has(i.state) && !b,
            j = i?.overlayMethod === x8.Ue.OutOfProcess,
            O = i?.overlayMethod === x8.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === x8.Ue.Hook,
            R = i?.state === x8.AR.OVERLAY_CRASHED || i?.state === x8.AR.OVERLAY_CRASHED_DISABLED,
            D = !o && !d,
            [P, G] = (function () {
                switch (!0) {
                    case y && j:
                        return [
                            V.intl.format(V.t.hFVBIg, {
                                overlayMethod: V.intl.string(V.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        J.E,
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
                                        J.E,
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
                                        J.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== x4.aI.BORDERLESS_FULLSCREEN:
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
                        let e = i?.fullscreenType === x4.aI.FULLSCREEN ? V.intl.string(V.t.mJmbeC) : null;
                        return [V.intl.string(V.t.VPW4XY), e];
                    }
                    default:
                        return [V.intl.string(V.t.ONovP5), null];
                }
            })();
        (0, eI.Ay)(() => {
            x2.A.getDetectableGames();
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
            : (0, p.jsxs)(Td, {
                  onExpand: m,
                  className: g ? xQ.tx : void 0,
                  title: (0, p.jsxs)(p.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, p.jsx)(lg.m, {
                                    text: V.intl.string(V.t["4PJP5p"]),
                                    children: (0, p.jsx)(S9.A, {
                                        size: 16,
                                        color: n1.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, p.jsx)(S0.U, {
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
                              ? (0, p.jsx)(dV.k, { size: "xxs", color: U })
                              : (0, p.jsx)("div", { className: xQ.W4 }),
                          (0, p.jsx)(J.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: V.intl.string(V.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, p.jsx)(i7.A, { game: t, pid: e?.pid, size: i7.M.MEDIUM }),
                  "aria-label": V.intl.string(V.t["87O5GC"]),
                  action: (0, p.jsx)(x$, {
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
                                          (x2.A.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o));
                                          break;
                                      case "global":
                                          (x3.A.setEnabled(t, t), (i = !t && h), (l = !t && S));
                                          break;
                                      case "both":
                                          (x3.A.setEnabled(t, t),
                                              x2.A.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (l = (!t && S) || (!t && o)));
                                  }
                                  let s = null;
                                  (i
                                      ? (s =
                                            "game" === n
                                                ? x7.OverlayToggledClientSettingType.LEGACY_GAME
                                                : x7.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? x7.OverlayToggledClientSettingType.OOP_GAME
                                                : x7.OverlayToggledClientSettingType.OOP),
                                      null != s && Ti(s, e.id ?? null));
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
                  warning: (0, p.jsx)(Ts, { className: xQ.Hh, game: e }),
                  children: [
                      (0, p.jsx)(x0, {
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
                                              ? x(e, x7.OverlayToggledClientSettingType.OOP)
                                              : x(e, x7.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: xQ.Kz }),
                              ],
                          }),
                      }),
                      (0, p.jsx)(x0, {
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
                                              ? x(e, x7.OverlayToggledClientSettingType.LEGACY)
                                              : x(e, x7.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: xQ.Kz }),
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
var Tg = n(206885);
function Tm(e) {
    let { game: t, gameApplication: n } = e,
        i = f.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, _.bG)([i2.A], () => (null != n ? n : i2.A.getApplication(t?.id)), [n, t]);
    return (0, p.jsx)(i7.A, { game: l, pid: i, size: i7.M.SMALL });
}
function TA(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, x6.I)(t?.id);
    let o = (0, _.cf)([i5.Ay, Tr.A, tc.A, x5.A], () => (0, i5.xU)(t, i5.Ay, Tr.A, tc.A, x5.A)),
        u = (0, _.cf)([Tr.A, tc.A, x5.A], () => (0, i5.hw)(t, !1, [Tr.A, tc.A, x5.A]), [t]),
        d = l(u),
        [c, g] = f.useState(d);
    return (
        f.useEffect(() => {
            g(d);
        }, [d]),
        (0, p.jsx)(x0, {
            title: t.name,
            icon: (0, p.jsx)(Tm, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(t5.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), s(e, o, u), n && Ti(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, p.jsx)("div", { className: xQ.Kz }),
                ],
            }),
        })
    );
}
let TE = (0, h.E2)(S.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, _.cf)([x9.default], () =>
                    x9.default.getGlobalEnabledStatus(),
                ),
                l = (0, _.yK)([i5.Ay], () => i5.Ay.getGamesSeen(!0)).filter((e) => !(0, Sc.n1)(e)),
                s = (0, i3.A)(l.map((e) => e.id)),
                r = !(0, Ta.supportsLegacy)();
            function a(e) {
                x3.A.setEnabled(e, i);
                let t = i5.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, x7.Q)(e, x7.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && Ti(x7.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                x2.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () =>
                    (0, Ta.supportsLegacy)()
                        ? r
                            ? V.intl.string(V.t.r9jEVw)
                            : V.intl.string(V.t.OzInYk)
                        : V.intl.string(V.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, p.jsx)(x0, {
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      className: xQ.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(t5.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              Tg.O && (0, p.jsx)("div", { className: xQ.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(Td, {
                      onExpand: t,
                      className: e ? xQ.tx : void 0,
                      title: V.intl.string(V.t.BfFpW1),
                      description: u,
                      "aria-label": V.intl.string(V.t.BfFpW1),
                      action: (0, p.jsx)(x$, {
                          children: (0, p.jsx)(t5.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: xQ.SC,
                              children: (0, p.jsx)(J.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(b.Ip, {
                              className: xQ.XG,
                              children: l.map((e, t) =>
                                  (0, p.jsx)(
                                      TA,
                                      {
                                          rawGame: e,
                                          clientSettingType: x7.OverlayToggledClientSettingType.LEGACY_GAME,
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
    Th = (0, h.E2)(S.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, _.cf)([x9.default], () =>
                    x9.default.getGlobalEnabledStatus(),
                ),
                l = !(0, Ta.supportsOutOfProcess)(),
                s = (0, _.yK)([i5.Ay], () => i5.Ay.getGamesSeen(!0)).filter((e) => !(0, Sc.n1)(e)),
                r = (0, i3.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                x3.A.setEnabled(i, e);
                let l = i5.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, x7.Q)(e, x7.OverlayToggledClientSettingType.OOP, l),
                    t && Ti(x7.OverlayToggledClientSettingType.OOP, l));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                x2.A.toggleOverlay(t, e, i);
            }
            let u = f.useMemo(
                () => (Tg.O ? (l ? V.intl.string(V.t.C7bLTQ) : V.intl.string(V.t.ndgADE)) : V.intl.string(V.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, p.jsx)(x0, {
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      className: xQ.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(t5.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              Tg.O && (0, p.jsx)("div", { className: xQ.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(Td, {
                      onExpand: t,
                      className: e ? xQ.tx : void 0,
                      title: V.intl.string(V.t["7BlVIs"]),
                      description: u,
                      "aria-label": V.intl.string(V.t["7BlVIs"]),
                      action: (0, p.jsx)(x$, {
                          children: (0, p.jsx)(t5.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: xQ.SC,
                              children: (0, p.jsx)(J.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: V.intl.string(V.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(b.Ip, {
                              className: xQ.XG,
                              children: s.map((e, t) =>
                                  (0, p.jsx)(
                                      TA,
                                      {
                                          rawGame: e,
                                          clientSettingType: x7.OverlayToggledClientSettingType.OOP_GAME,
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
    TS = (0, h.zZ)(S.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [Tc, Th, TE, x1],
    }),
    Tx = (0, h.zD)(S.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, _.bG)([xY.default], () => !xY.default.disableClickableRegions),
        setValue: (e) => {
            x3.A.setDisableClickableRegions(!e);
        },
        useTitle: () => V.intl.string(V.t["+eFXxq"]),
        useSubtitle: () => V.intl.string(V.t.kivMAp),
    }),
    TT = (0, h.E2)(S.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, _.bG)([la.Ay], () => la.Ay.getOverlayKeybind()),
                t = !(0, Ta.supportsLegacy)(),
                n = !(0, Ta.supportsOutOfProcess)(),
                [i, l] = (0, _.yK)([i5.Ay], () => [i5.Ay.canShowAdminWarning, i5.Ay.getVisibleGame()], []),
                s = (0, le.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, la.DV)(e?.shortcut ?? []);
            return (0, p.jsx)("div", {
                className: xQ.hc,
                children: (0, p.jsxs)("div", {
                    className: xQ.eH,
                    children: [
                        (0, p.jsxs)("div", {
                            className: xQ.Bu,
                            children: [
                                (0, p.jsx)(J.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: V.intl.string(V.t.VsAZcC),
                                }),
                                r &&
                                    (0, p.jsx)(J.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: xQ.y7,
                                        children: V.intl.string(V.t.NsowVa),
                                    }),
                                a &&
                                    (0, p.jsx)(J.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: xQ.y7,
                                        children: V.intl.string(V.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, p.jsx)("div", {
                            className: xQ.IH,
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
var Tp = n(515183),
    Tf = n(682763);
let T_ = (0, h.zD)(S.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i8();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i8();
            return null != e && (0, Tp.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i8(),
                n = t?.id,
                i = (0, _.bG)([xz.A], () => xz.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, Tp.qJ)(e.pid);
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
            null != s && (0, Tf.x8)(s.id, e);
        },
        useTitle: () => V.intl.string(V.t.wgVQND),
        useSubtitle: () => V.intl.string(V.t["5SsyF5"]),
    }),
    TI = (0, h.zZ)(S.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [TT, T_, Tx] });
var TN = n(93465),
    TC = n(222407);
let Tb = [
    {
        title: V.t.eVE4LX,
        description: V.t["72WNqk"],
        disabledSetting: TN.M.TEXT_CHAT,
        key: S.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: V.t.oifnSh,
        description: V.t.bgU5r0,
        disabledSetting: TN.M.WELCOME_GENERAL,
        key: S.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: V.t.hqsZJW,
        description: V.t.kHjdqc,
        disabledSetting: TN.M.GO_LIVE_NUDGE,
        key: S.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: V.t.sop3rn,
        description: V.t.pjgffc,
        disabledSetting: TN.M.GAME_ACTIVITY,
        key: S.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: V.t["2QVhbb"],
        description: V.t.wQ4ilB,
        disabledSetting: TN.M.NOW_PLAYING,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: V.t.giM9fA,
        description: V.t.EhAfWj,
        disabledSetting: TN.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: S.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, np.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, _.bG)([xz.A], () => xz.A.isNotificationDisabledBySetting(TN.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function Ty(e) {
    return (0, h.zD)(e.key, {
        useTitle: () => V.intl.string(e.title),
        useSubtitle: () => V.intl.string(e.description),
        useValue: () => !(0, _.bG)([xz.A], () => xz.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, TC.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let Tv = (0, h.FW)(S.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => Tb.map(Ty),
    }),
    Tj = (0, h.zZ)(S.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.xOE5bA),
        buildLayout: () => [Tv],
    }),
    TO = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => V.intl.string(V.t.dnvZSg),
        useValue: () => (0, _.bG)([xY.default], () => xY.default.getAvatarSizeMode()),
        setValue: (e) => {
            x3.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: V.intl.string(V.t.YcOxtr), value: I.OSZ.LARGE },
            { id: "small", label: V.intl.string(V.t.BKIKqx), value: I.OSZ.SMALL },
        ],
    }),
    TL = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => V.intl.string(V.t.J0dpcB),
        useValue: () => (0, _.bG)([xY.default], () => xY.default.getDisplayNameMode()),
        setValue: (e) => {
            x3.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: I.pwA.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: I.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: V.intl.string(V.t.ekjlPL), value: I.pwA.NEVER },
        ],
    }),
    TR = (0, h.Hn)(S.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => V.intl.string(V.t.swsWWC),
        useValue: () => (0, _.bG)([xY.default], () => xY.default.getDisplayUserMode()),
        setValue: (e) => {
            x3.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: V.intl.string(V.t.nBmDrT), value: I.f5z.ALWAYS },
            { id: "speaking", label: V.intl.string(V.t["2OvIZY"]), value: I.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var TD = n(391973),
    TP = n(233741),
    TG = n(897720),
    TM = n(32584);
function TU() {
    let e = TP.A.getWidgetByType(I.uss.VOICE_V3);
    if (null == e) return null;
    let t = TM.A.getWidget(e.id);
    return null != t && (0, TG.ZO)(t) ? t : null;
}
n(392164);
let TV = (0, h.sN)(S.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => V.intl.string(V.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? V.intl.string(V.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = TU();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? V.intl.string(V.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = TU();
        null != t &&
            (e < 1
                ? (0, TD.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, TD.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var Tk = n(450740),
    Tw = n(968898),
    TF = n(288737);
function TB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new TF.A({
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
        user: new ga.A({ id: l, username: e }),
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
let Tz = (0, h.E2)(S.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, _.cf)([xY.default], () => ({
                    avatarSizeMode: xY.default.getAvatarSizeMode(),
                    displayNameMode: xY.default.getDisplayNameMode(),
                    displayUserMode: xY.default.getDisplayUserMode(),
                })),
                [s] = f.useState(() => [
                    TB(V.intl.string(V.t.C0ZDvo), !0, !1),
                    TB(V.intl.string(V.t.iOtj8E), !1, !1, !0),
                    TB(V.intl.string(V.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, _.bG)([TP.A, TM.A], () => {
                    let e = TP.A.getWidgetByType(I.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = TM.A.getWidget(e.id);
                    return null != t && (0, TG.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = TB(t.username)).user = t), e) : null, ...s].filter(io.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, p.jsx)(xl.N, {
                    theme: I.NJ8.ONYX,
                    children: (e) =>
                        (0, p.jsxs)("div", {
                            className: ic()(xQ.Y5, e),
                            children: [
                                (0, p.jsx)("div", {
                                    className: xQ.kJ,
                                    children: (0, p.jsx)(Tk.DH, {
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
                                    className: xQ.R$,
                                    children: [
                                        (0, p.jsx)(Tw.Pl, { children: V.intl.string(V.t.KNJ6Vq) }),
                                        (0, p.jsx)(Tw.CS, {}),
                                        (0, p.jsx)(Tw.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, p.jsx)("div", { className: xQ.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    TX = (0, h.zZ)(S.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => V.intl.string(V.t.r1TZfh),
        buildLayout: () => [Tz, TO, TL, TR, TV],
    });
var TY = n(97005),
    TH = n(667419),
    TW = n(776162),
    TK = n(114994),
    TZ = n(371169),
    Tq = n(671210);
let TQ = {
    [I.uss.VOICE_V3]: S.X.OVERLAY_WIDGETS_VOICE,
    [I.uss.QUICK_ACTIONS]: S.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
    [I.uss.NOTIFICATIONS]: S.X.OVERLAY_WIDGETS_NOTIFICATIONS,
    [I.uss.TEXT_CHAT_V3]: S.X.OVERLAY_WIDGETS_CHAT,
    [I.uss.FRIENDS]: S.X.OVERLAY_WIDGETS_FRIENDS,
    [I.uss.ACTIVITY]: S.X.OVERLAY_WIDGETS_ACTIVITY,
    [I.uss.VIDEO]: S.X.OVERLAY_WIDGETS_VIDEO,
    [I.uss.GO_LIVE]: S.X.OVERLAY_WIDGETS_STREAMS,
};
function TJ(e) {
    let t = nf.A[e],
        n = TQ[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: l, predicate: s } = t;
    return (0, h.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => l(),
        usePredicate: () => ((0, np.M8)("OverlayWidgetsCategory"), s?.() ?? !0),
        useValue: () => (0, _.bG)([TM.A], () => (0, TH.$e)(e, TM.A), []),
        setValue: (t) => {
            ((0, TH.j$)(), (0, TH.JA)(e, !t));
        },
    });
}
let T$ = (0, h.FW)(S.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => V.intl.string(Tq.default["Qk/rJB"]),
        useSubtitle: () => V.intl.string(Tq.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => TW.t3.flatMap(TJ),
    }),
    T0 = (0, h.E2)(S.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, _.bG)([TK.A], () => TK.A.getProjects());
            return (f.useEffect(() => {
                (0, TZ.hF)();
            }, []),
            0 === e.length)
                ? null
                : (0, p.jsxs)(q.B, {
                      gap: 8,
                      children: [
                          (0, p.jsx)(C.D, {
                              variant: "heading-sm/semibold",
                              color: "text-muted",
                              children: V.intl.string(Tq.default["pbu+Yx"]),
                          }),
                          e.map((e) => (0, p.jsx)(TW.i2, { project: e }, e.id)),
                      ],
                  });
        },
        usePredicate: () => (0, TY.TW)("overlay_settings_conjure_apps"),
        useSearchTerms: () => [V.intl.string(Tq.default["pbu+Yx"])],
    }),
    T1 = (0, h.Tf)(S.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => V.intl.string(V.t["hW+EMu"]),
        useLabel: () => V.intl.string(V.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: TH.eL,
    }),
    T2 = (0, h.zZ)(S.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => V.intl.string(Tq.default["Qk/rJB"]),
        usePredicate: n_.b_,
        buildLayout: () => [T$, T0, T1],
    });
var T3 = n(54761);
function T4() {
    let [e, t] = (0, m$.kn)([eE.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, Z.Ay)(() => () => {
        t(m8.i.AUTO_DISMISS);
    }),
    e !== eE.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsxs)("div", {
                      className: T3.xC,
                      children: [
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: V.intl.string(V.t.mdXZh1),
                                  className: T3.tl,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsxs)("div", {
                                  className: T3.vJ,
                                  children: [
                                      (0, p.jsx)(C.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: V.intl.string(V.t.jzjJQg),
                                      }),
                                      (0, p.jsx)(J.E, {
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
                                  className: T3.lh,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: T3.VV,
                              children: (0, p.jsx)(j.$, {
                                  variant: "primary",
                                  text: V.intl.string(V.t.Q26diF),
                                  onClick: () => void t(m8.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(ls.c, { className: T3.yF }),
              ],
          });
}
function T5() {
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
                  (0, p.jsx)(ls.c, { className: T3.yF }),
              ],
          })
        : null;
}
let T6 = (0, h.t_)(S.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                xK(),
                la.Ay.addChangeListener(xK),
                xz.A.addChangeListener(xK),
                xY.default.addChangeListener(xK),
                xX.default.addChangeListener(xK),
                e8.isPlatformEmbedded && (0, Sm.a2)(),
                () => {
                    (la.Ay.removeChangeListener(xK),
                        xz.A.removeChangeListener(xK),
                        xY.default.removeChangeListener(xK),
                        xX.default.removeChangeListener(xK),
                        e8.isPlatformEmbedded && (0, Sm.e0)());
                }
            );
        },
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        decoration: {
            type: T.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(T4, {}), (0, p.jsx)(T5, {})] });
            },
        },
        buildLayout: () => [TS, TI, T2, TX, Tj],
    }),
    T8 = (0, h.i4)(S.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["9cb1Uz"]),
        icon: xB.l,
        usePredicate: n_.b_,
        buildLayout: () => [T6],
    });
var T7 = n(687966);
let T9 = (0, h.AK)(S.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.OYYY6q),
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    pe = (0, h.gN)(S.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [T9] });
var pt = n(227309),
    pn = n(29160),
    pi = n(552366),
    pl = n(938442);
function ps(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, x6.I)(t.id);
    let o = (0, _.cf)([i5.Ay, Tr.A, tc.A, x5.A], () => (0, i5.xU)(t, i5.Ay, Tr.A, tc.A, x5.A)),
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
                (0, Sc.n1)(o)
                    ? r
                        ? o.gameName
                        : V.intl.formatToPlainString(V.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = f.useState(T ?? "???"),
        b = ic()(pl.tR, {
            [pi.LO]: !i,
            [pi.Rw]: i,
            [pi.FB]: null != o && i,
            [pi.xL]: r,
            [pi.fG]: null != s && s.length > 0,
        });
    function y() {
        (x2.A.deleteEntry(o),
            s?.forEach((e) => {
                x2.A.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? Tr.A.getDetectableGame(o.id) : null;
        (td.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, Sc.n1)(o) ? o.gameName : o.name,
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
                        className: ic()(pi.$K, pl.Vd),
                        children: [
                            null != o.processGame || (o.verified && !l)
                                ? (0, p.jsxs)("div", {
                                      className: pi.HS,
                                      children: [
                                          (0, p.jsx)("div", { className: pi.mO, children: T }),
                                          (0, p.jsx)(lg.m, {
                                              text: V.intl.string(V.t["4PJP5p"]),
                                              children: (0, p.jsx)(S9.A, {
                                                  className: pi.qf,
                                                  size: 18,
                                                  color: n1.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, p.jsx)(S0.U, {
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
                                      className: ic()(pi.mO, pi.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && x2.A.editName(o, N);
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
                                    (0, p.jsx)(J.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: pi.GN,
                                        children: (0, p.jsx)(pn.A, {
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
                        (0, p.jsx)(ap.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, p.jsx)(g5.W, {
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
                                    className: ic()(pi._Q, { [pi.g9]: t.isShown }),
                                    children: (0, p.jsx)(lg.m, {
                                        text: V.intl.string(V.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, p.jsx)(ld.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: g2.MoreHorizontalIcon,
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
                                                              (x2.A.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : x2.A.toggleDetection(o);
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
                    className: pi.AQ,
                    children: s.map((e, t) =>
                        (0, p.jsxs)(
                            f.Fragment,
                            {
                                children: [
                                    (0, p.jsx)(ps, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, p.jsx)("div", { className: pi.PQ }),
                                ],
                            },
                            (0, i5.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pr() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = SE();
    return 0 === e.length
        ? null
        : (0, p.jsx)(q.B, {
              padding: { bottom: 32 },
              children: (0, p.jsx)(n3.n, {
                  children: (0, p.jsx)("div", {
                      children: e.map((e) =>
                          (0, p.jsx)(
                              ps,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === pt.a7 ? t : void 0 },
                              (0, i5.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let pa = (0, h.E2)(S.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, p.jsx)(pr, {}),
});
var po = n(424994);
let pu = (0, h.zZ)(S.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [pa, pe],
    useTitle: () => V.intl.string(V.t.jCOdvx),
    useSubtitle: () =>
        (0, _.bG)([i5.Ay], () => i5.Ay.getGamesSeen(!1).some((e) => !(0, Sc.n1)(e)))
            ? V.intl.format(V.t.KPA3m9, { igdbLink: po.s8 })
            : V.intl.string(V.t["1yiJwn"]),
});
var pd = n(890497),
    pc = n(853270),
    pg = n(969426);
function pm(e) {
    let { onClose: t } = e,
        n = (0, _.bG)([i5.Ay], () => i5.Ay.getCandidateGames()),
        [i, l] = f.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, p.jsxs)(af.l, {
        className: ic()(pc.H, pg.Y_),
        "aria-label": V.intl.string(V.t.GTCx0p),
        children: [
            (0, p.jsx)(pd.Z, {
                selectionMode: "single",
                placeholder: V.intl.string(V.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, p.jsxs)("div", {
                className: ic()(pc.o, pl.xM),
                children: [
                    (0, p.jsx)(h1.Q, { variant: "secondary", text: V.intl.string(V.t["ETE/oC"]), onClick: t }),
                    (0, p.jsx)(j.$, {
                        variant: "primary",
                        text: V.intl.string(V.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (x2.A.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var pA = n(475007);
function pE() {
    let e = f.useRef(null);
    return (0, p.jsxs)("div", {
        className: ic()(pA.a, hS.Gf),
        children: [
            (0, p.jsx)("span", { children: V.intl.string(V.t.xwhoqM) }),
            (0, p.jsx)(ap.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, p.jsx)(pm, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, p.jsx)(h1.Q, {
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
function ph() {
    return (0, p.jsx)("div", {
        className: ic()(pl.tR, pi.eS, pi.Rw),
        children: (0, p.jsxs)("div", {
            className: ic()(pi.$K, pl.Vd),
            children: [
                (0, p.jsx)("div", { className: pi.mO, children: V.intl.string(V.t.H68X9x) }),
                (0, p.jsx)(pE, {}),
            ],
        }),
    });
}
let pS = (0, h.E2)(S.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = SE(),
                n = (0, _.bG)([i5.Ay], () => i5.Ay.getVisibleGame());
            return null == n
                ? (0, p.jsx)(ph, {})
                : (0, p.jsxs)("div", {
                      className: ic()(pl.Vd, pi.C2),
                      children: [
                          (0, p.jsx)(
                              ps,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === pt.a7 ? e : void 0,
                              },
                              (0, i5.Es)(n),
                          ),
                          (0, p.jsx)(pE, {}),
                      ],
                  });
        },
    }),
    px = (0, h.zZ)(S.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => V.intl.string(V.t["MY9/Oe"]),
        buildLayout: () => [pS],
    }),
    pT = (0, h.t_)(S.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        buildLayout: () => [px, pu],
    }),
    pp = (0, h.i4)(S.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.AVDyEj),
        icon: T7.GameControllerIcon,
        usePredicate: n_.Pi,
        buildLayout: () => [pT],
    }),
    pf = (0, h.WI)(S.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => V.intl.string(V.t.BA9200),
        buildLayout: () => [pp, Sq, T8, xF],
    });
var p_ = n(631670),
    pI = n(619499),
    pN = n(836602),
    pC = n(591179),
    pb = n(402860),
    py = n(761508),
    pv = n(159001),
    pj = n(344346),
    pO = n(919395),
    pL = n(68750);
function pR(e) {
    let { title: t, children: n } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(C.D, { variant: "text-md/medium", className: pL.Vf, children: t }), n],
    });
}
function pD(e) {
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
        className: ic()(pL.UA, n),
        children: (0, p.jsxs)("div", {
            className: ic()(pL.yt, i),
            children: [
                (0, p.jsx)("div", {
                    className: ic()(pL.Fp, a && pL.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(pR, { title: s ?? V.intl.string(V.t.Zb06yP), children: l }),
                            null != r ? (0, p.jsx)(pR, { title: V.intl.string(V.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: pL.oB, children: t }),
            ],
        }),
    });
}
var pP = n(986687),
    pG = n(101058),
    pM = n(321191),
    pU = n(696451),
    pV = n(590941);
function pk() {
    return (0, p.jsxs)("div", {
        className: pV.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: pV.Sl }),
            (0, p.jsx)(C.D, { className: pV.h8, variant: "heading-lg/extrabold", children: V.intl.string(V.t.Z1OZCV) }),
            (0, p.jsx)(J.E, { className: pV.h8, variant: "text-md/normal", children: V.intl.string(V.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: pV.h8,
                children: (0, p.jsx)(j.$, {
                    variant: "primary",
                    text: V.intl.string(V.t.jQ3pqt),
                    onClick: function () {
                        ((0, cn.pX)(I.BVt.GUILD_DISCOVERY), (0, tY.default)());
                    },
                }),
            }),
        ],
    });
}
var pw = n(81400),
    pF = n(450232),
    pB = n(252732),
    pz = n(355622),
    pX = n(408018),
    pY = n(845207),
    pH = n(290386),
    pW = n(941933),
    pK = n(486264);
let pZ = (0, tK.Ld)(),
    pq = (0, G.createChannelRecord)({ id: "1", type: I.rbe.DM }),
    pQ = (0, tK.Ld)();
function pJ(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, pH.U)({ location: "profile_customization_about_me" }),
        [u, d] = f.useState(l ?? r),
        [c, g] = f.useState((0, pX.x7)(u)),
        m = f.useRef(r),
        A = f.useRef(!1);
    return (
        f.useEffect(() => {
            if (m.current !== r) {
                let e = (0, pX.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        f.useEffect(() => {
            void 0 !== l || u === r || A.current || (d(r), g((0, pX.x7)(r)));
        }, [l, r, u]),
        (0, p.jsxs)(aE.A, {
            title: t,
            titleId: pZ,
            description: V.intl.string(V.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, p.jsx)(pY.Ay, {
                    "aria-describedby": pQ,
                    "aria-labelledby": pZ,
                    className: pK.i,
                    innerClassName: pK.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: pq,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: pW.y,
                    type: pz.oU.PROFILE_BIO_INPUT,
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
                (0, p.jsx)(lm.A, { id: pQ, children: V.intl.format(V.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var p$ = n(821956),
    p0 = n(562819),
    p1 = n(84540),
    p2 = n(467690);
function p3(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eX.Ay)(),
        o = (0, pO.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, pO.CP)(n?.id),
        c = r ? gs.wL : s5.$n;
    return (0, p.jsx)(aE.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: p2.NC,
            children: [
                (0, p.jsx)(c, {
                    size: s5.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, p0.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ic()({ [p2.yj]: r }),
                    children: V.intl.string(V.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: p2.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, p$.uZ)(t, n) ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.OrokWm),
                            onClick: function () {
                                (0, p1.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var p4 = n(339984),
    p5 = n(942132);
let p6 = [{ name: "gif", extensions: ["gif"] }];
function p8(e) {
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
        m = c ? gs.wL : s5.$n,
        A = f.useCallback(() => {
            (0, pB.XD)({
                uploadType: p4.HL.AVATAR,
                analyticsSource: g,
                filters: u ? p6 : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, p.jsx)(aE.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: p5.NC,
            children: [
                (0, p.jsx)(m, {
                    className: ic()({ [p5.yj]: c }),
                    size: s5.$n.Sizes.SMALL,
                    onClick: A,
                    children: s ?? V.intl.string(V.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: p5.DT,
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
var p7 = n(248778),
    p9 = n(810188);
function fe(e) {
    let { user: t, guildId: n, className: i } = e,
        l = aN.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, eX.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, pO.B0)(t, n),
        d = (0, p7.u)("DisplayNameStylesSection"),
        [c, g] = (0, m$.kn)(d ? [eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eE.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, f.useCallback)(() => {
            (g(m8.i.TAKE_ACTION),
                td.default.track(I.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eY.L)({ analyticsLocations: s, guildId: n }));
        }, [s, n, g]),
        E = (0, f.useCallback)(() => {
            ((0, p1.p)({ displayNameStyles: null }), td.default.track(I.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        h = (0, f.useCallback)(() => {
            (0, p1.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        S = void 0 !== o ? o : null != n ? a : r;
    return (0, p.jsx)(aE.A, {
        title: V.intl.string(eH.default["86GtGH"]),
        titleBadge: m
            ? (0, p.jsx)("div", { className: p9.A, children: (0, p.jsx)(Ah.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: p9.N,
            children: [
                (0, p.jsx)(j.$, { variant: "primary", size: "sm", text: V.intl.string(eH.default.vJqrIg), onClick: A }),
                null == n &&
                    null != S &&
                    (0, p.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(eH.default.ymq8WQ),
                        onClick: E,
                    }),
                null != n &&
                    null != S &&
                    (0, p.jsx)(j.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(eH.default["j/KRxc"]),
                        onClick: h,
                    }),
            ],
        }),
    });
}
var ft = n(637193),
    fn = n(622410);
function fi(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, pO.rv)(t, n?.id),
        d = f.useCallback(() => {
            (0, ft.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = f.useCallback(() => {
            (0, p1.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, p.jsx)(aE.A, {
        title: V.intl.string(V.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: fn.u,
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
var fl = n(88524);
function fs(e) {
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
        g = d ? gs.wL : s5.$n;
    return (0, p.jsx)(aE.A, {
        className: s,
        title: V.intl.string(V.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: fl.NC,
            children: [
                (0, p.jsx)(g, {
                    className: ic()({ [fl.yj]: d }),
                    size: s5.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, pB.XD)({ uploadType: p4.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: V.intl.string(V.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: fl.DT,
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
var fr = n(617061),
    fa = n(625613);
function fo(e) {
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
        d = aN.Ay.canUsePremiumProfileCustomization(t),
        c = (0, pO.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, pO.nZ)(n?.id);
    f.useEffect(() => {
        d &&
            (td.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tZ.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tq.uq)(tJ.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? gs.wL : s5.$n;
    return (0, p.jsx)(aE.A, {
        forcedDivider: r,
        borderType: ct.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, p.jsxs)("div", {
            className: fa.NC,
            children: [
                (0, p.jsx)(A, {
                    size: s5.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, fr.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ic()({ [fa.yj]: a }),
                    children: V.intl.string(V.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: fa.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.uMuafO),
                            onClick: function () {
                                (0, p1.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var fu = n(515727),
    fd = n(594401);
function fc(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, eX.Ay)(),
        s = (0, pO.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, pO.Tu)(n?.id),
        [o, u] = (0, m$.kn)([eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eE.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, p.jsx)(aE.A, {
        showBorder: d,
        borderType: d ? ct.i.NEW_UPSELL : ct.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, p.jsx)("div", { className: fd.Ad, children: (0, p.jsx)(Ah.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? V.intl.string(V.t.yMoMAt) : void 0,
        errors: a,
        children: (0, p.jsxs)("div", {
            className: fd.NC,
            children: [
                (0, p.jsx)(j.$, {
                    variant: "primary",
                    size: "sm",
                    text: V.intl.string(V.t["9/hmle"]),
                    onClick: function () {
                        ((0, fu.w)({ analyticsLocations: l, guild: n }), u(m8.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != s : null != r) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: fd.DT,
                        children: (0, p.jsx)(j.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? V.intl.string(V.t.CHf9iJ) : V.intl.string(V.t.nQBruk),
                            onClick: function () {
                                (0, p1.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var fg = n(602853),
    fm = n(654107),
    fA = n(999291),
    fE = n(101928),
    fh = n(819169),
    fS = n(317097),
    fx = n(508274),
    fT = n(379012);
function fp(e) {
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
        c = (0, fg.r)(n1.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n1.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, pB.sN)(i),
        A = (0, fS.Hl)(i),
        E = A === c ? g : A,
        h = m ? n1.A.unsafe_rawColors.WHITE.css : n1.A.unsafe_rawColors.PRIMARY_530.css,
        S = (0, fh.A)(a),
        x = (0, fh.A)(o),
        [T, _] = f.useState((0, oL.A)());
    return (
        f.useEffect(() => {
            (S !== a || x !== o) && _((0, oL.A)());
        }, [o, a, x, S]),
        (0, p.jsx)(ap.Y, {
            targetElementRef: d,
            positionKey: T,
            renderPopout: (e) =>
                (0, p.jsx)(fx.VN, {
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
                    className: ic()(fT.oP, { [fT.r9]: s }),
                    children: [
                        (0, p.jsx)(n5.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? I.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: fT.nf,
                            "aria-label": V.intl.string(V.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(a_.PencilIcon, {
                                size: "custom",
                                className: fT.BW,
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
var ff = n(190377);
function f_(e) {
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
        c = (0, fA.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, fE.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = aN.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, fg.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        S = (0, fm.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, p.jsx)(aE.A, {
              title: V.intl.string(V.t.DMeO2X),
              disabled: !A && !s,
              className: ic()(ff.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, p.jsxs)("div", {
                  className: ff.hd,
                  children: [
                      (0, p.jsx)("div", {
                          className: ff.YX,
                          children: (0, p.jsx)(fp, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(J.E, {
                                  className: ff.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: V.intl.string(V.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, p.jsx)("div", {
                          className: ff.YX,
                          children: (0, p.jsx)(fp, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(J.E, {
                                  className: ff.yz,
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
                              className: ff.WA,
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
function fI(e) {
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
    return (0, p.jsx)(aE.A, {
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
var fN = n(684732),
    fC = n(576705),
    fb = n(931175);
function fy(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, _.bG)([fC.A], () => fC.A.can(I.xBc.CHANGE_NICKNAME, r) || fC.A.can(I.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xn.L)(tJ.PremiumTypes.TIER_2);
    return (0, p.jsxs)(aE.A, {
        title: V.intl.string(V.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(lp.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: I.d0r,
                onChange: function (e) {
                    (0, p1.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : V.intl.string(V.t.gzjxQi),
            }),
            o && (0, p.jsx)(fe, { user: s, guildId: r.id, className: fb.F }),
        ],
    });
}
var fv = n(233454);
let fj = "/assets/b25da78aa7949feb.png";
function fO(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, cN.Ay)(),
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
              className: fv.ry,
              children: [
                  (0, p.jsx)("div", { children: i }),
                  (0, p.jsxs)("div", {
                      className: fv.Wc,
                      children: [
                          (0, p.jsx)("img", {
                              className: fv.Tn,
                              alt: V.intl.string(V.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case I.NJ8.ASH:
                                      case I.NJ8.DARK:
                                      case I.NJ8.ONYX:
                                          return fj;
                                      case I.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return fj;
                                  }
                              })(l),
                          }),
                          (0, p.jsxs)("div", {
                              className: fv._9,
                              children: [
                                  (0, p.jsx)(J.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.dMaDFX),
                                  }),
                                  (0, p.jsx)(J.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: V.intl.string(V.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, p.jsx)(ce.A, {
                              size: s5.$n.Sizes.LARGE,
                              color: s5.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: aN.Ay.isPremium(t)
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
var fL = n(203164);
function fR() {
    let e = (0, _.bG)([sx.default], () => {
            let e = sx.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xn.L)(tJ.PremiumTypes.TIER_2),
        n = (0, _.bG)([pN.A, lv.A], () => lv.A.getGuild(pN.A.selectedGuildId));
    tE()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, _.cf)([pN.A], () => ({ ...pN.A.getPendingChanges(n.id), errors: pN.A.getErrors(n.id) })),
        d = (0, pG.V7)({ userId: e.id, image: i }),
        c = (0, pw.EC)(n.id),
        g = (0, _.bG)([pU.Ay], () => (null == n.id ? null : pU.Ay.getMember(n.id, e.id))),
        m = (0, _.bG)([pM.A], () => pM.A.getGuildMemberProfile(e.id, n.id)),
        A = aN.Ay.canUsePremiumProfileCustomization(e),
        E = (0, pO.z5)(i, g?.avatar),
        h = (0, pO.Ac)(s, m?.banner),
        S = (0, fN.l)(o, m?.themeColors),
        x = m?.bio ?? "",
        T = m?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: fL.Q,
        children: [
            (0, p.jsx)(
                fy,
                {
                    errors: u?.nick ?? c?.nick,
                    username: u4.Ay.getName(e),
                    pendingNick: l,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, p.jsx)(
                fI,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, p1.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: T,
                },
                "pronouns",
            ),
            (0, p.jsxs)(fO, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, p.jsx)(
                        p8,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.lqaIxI), (0, p.jsx)(pF.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, pB.rM)(e, g?.avatar, (e) => (0, p1.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, p.jsx)(
                        p3,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t["7v0T9P"]), (0, p.jsx)(pF.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, p.jsx)(fe, { user: e, guildId: n.id }),
                    (0, p.jsx)(
                        fi,
                        { user: e, guild: n, titleIcon: (0, p.jsx)(pF.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        fo,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.wR5wOo), (0, p.jsx)(pF.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(
                        fc,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.GWrZOd), (0, p.jsx)(pF.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, p.jsx)(
                        fs,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, pB.rM)(e, m?.banner, (e) => (0, p1.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, p.jsx)(f_, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, p1.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, p.jsx)(
                        pJ,
                        {
                            placeholder: V.intl.string(V.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [V.intl.string(V.t.ZzAR2Y), (0, p.jsx)(pF.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, p1.p)({ guildId: n.id, bio: e }),
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
var fD = n(832131);
function fP(e) {
    (0, lT.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, p.jsx)(t, { source: { ...e, page: I.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function fG(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eX.Ay)(tk.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, _.bG)([sx.default], () => {
            let e = sx.default.getCurrentUser();
            return (tE()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        s = (0, _.bG)([pU.Ay], () => (null != t ? pU.Ay.getMember(t.id, l.id) : null)),
        r = (0, _.bG)([pM.A], () => !pM.A.isFetchingProfile(l.id, t?.id)),
        a = (0, _.bG)([tu.A], () => tu.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, _.cf)([pN.A], () => pN.A.getPendingChanges(t?.id)),
        c = (0, pG.V7)({ userId: l.id, image: o }),
        g = (0, pO.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, pO.B0)(l, t?.id);
    return (f.useEffect(() => pv.IM, []), a)
        ? (0, p.jsx)(op.A, {})
        : r
          ? (0, p.jsxs)(eX.f5, {
                value: i,
                children: [
                    (0, p.jsx)(J.E, {
                        variant: "text-sm/normal",
                        children: V.intl.format(V.t["/PTB2E"], {
                            helpCenterLink: eb.A.getArticleURL(I.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(aA.A, { guildId: t.id, onChange: n }),
                                  (0, p.jsx)(pD, {
                                      profilePreviewTitle: (0, p.jsx)(C.D, {
                                          variant: "heading-md/medium",
                                          className: fD.YV,
                                          children: V.intl.formatToPlainString(V.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(pP.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: aN.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: fP,
                                          containerClassName: fD.ti,
                                      }),
                                      nameplatePreview: (0, p.jsx)(pj.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? fD.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(fR, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(pk, {}),
                ],
            })
          : (0, p.jsx)(oO.y, {});
}
var fM = n(903209),
    fU = n(641130);
function fV(e) {
    let { children: t, notice: n } = e;
    return (0, p.jsxs)("div", { className: fU.r, children: [n, (0, p.jsx)("div", { children: t })] });
}
var fk = n(823092),
    fw = n(815996),
    fF = n(379197),
    fB = n(488430),
    fz = n(457421),
    fX = n(940622),
    fY = n(559474),
    fH = n(757993);
let fW = function () {
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
        } = ((e = (0, fX.mb)(fY.RN.UPSELL_BANNER)),
        (t = (0, fX.mb)(fY.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, _.bG)([fz.A], () => fz.A.getMarketingBySurface(fF.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: fB.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, fk.L_)();
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
            className: fH.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: fH.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: fH.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: fH.Em,
                    children: [
                        (0, p.jsx)(C.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: fH.DD,
                            children: o,
                        }),
                        (0, p.jsx)(J.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, p.jsx)(j.$, {
                    onClick: function () {
                        g(() =>
                            (0, fw.Cz)({
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
var fK = n(451909),
    fZ = n(202639),
    fq = n(285373),
    fQ = n(835071),
    fJ = n(724651),
    f$ = n(732280),
    f0 = n(590180),
    f1 = n(898461),
    f2 = n(469054),
    f3 = n(601298),
    f4 = n(207803),
    f5 = n(461797);
let f6 = Object.keys(f5.jB);
function f8(e) {
    let t = null == e ? f6 : f6.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var f7 = n(201805),
    f9 = n(221650);
function _e(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion),
        l = (0, f7.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = f.useMemo(() => {
            let e = (0, f5.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: f9.kL,
        children: [
            (0, p.jsx)(n5.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                className: f9.x6,
                "aria-label": V.intl.string(V.t["44yJxh"]),
                children: l.render(),
            }),
            (0, p.jsxs)(n5.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                "aria-label": `${s}: ${V.intl.string(V.t["44yJxh"])}`,
                className: f9.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: f9.L_ }),
                    (0, p.jsx)(J.E, {
                        className: f9._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var _t = n(511484),
    _n = n(811611),
    _i = n(206697),
    _l = n(507553);
function _s(e, t) {
    let n = _l.A.useField("scrollPosition"),
        i = (0, _.bG)([O.Ay], () => O.Ay.useReducedMotion);
    (0, f.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            (l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), _l.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var _r = n(844222),
    _a = n(842092);
let _o = "/assets/d4955aabdcb5bdee.png",
    _u = { assetOrigin: f2.E.NEW_ASSET, imageUri: _o, staticImageUri: _o, description: "", originalAsset: void 0 };
function _d(e) {
    let { user: t } = e,
        { reducedMotion: n } = f.useContext(_r.C),
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
        } = (0, _.cf)([pN.A], () => {
            let e = pN.A.getPendingChanges(),
                t = pN.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, pG.V7)({ userId: t.id, image: g ?? i });
    return (0, p.jsx)(pP.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? l ?? _u,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : _a.WX,
        containerClassName: _a.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var _c = n(829497);
function _g(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = aN.Ay.isPremium(t),
        s = aN.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, _.cf)([pN.A], () => {
            let e = pN.A.getPendingChanges(),
                t = pN.A.getErrors(),
                n = pN.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, f.useState)(f8()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, f.useMemo)(() => {
                    let t = (0, f5.Wt)(e);
                    return {
                        banner: (0, f3.X)({
                            assetOrigin: f2.E.NEW_ASSET,
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
                r = (0, _.bG)([f0.A], () => {
                    let e = f0.A.getProduct(l);
                    return (0, f1.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, f.useEffect)(() => {
                (0, f4.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, f.useCallback)(() => {
                let n = f8(e);
                (t(n), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = f.useRef(null);
    _s(m, eL._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, eX.Ay)(tk.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, _i.T)(), td.default.track(I.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
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
    let S = (0, f$.V)()?.subscriptionTrial?.skuId === tJ.pe.TIER_2,
        x = (0, fJ.O)(),
        T = (0, _t.U9)(x, tJ.pe.TIER_2);
    return i
        ? (0, p.jsx)(eX.f5, {
              value: A,
              children: (0, p.jsxs)(ct.A, {
                  ref: m,
                  className: _c.MT,
                  type: ct.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(pD, {
                          stickyPreview: !1,
                          layoutClassName: _c.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(ag.t, { size: "md", color: "currentColor", className: _c.PC }),
                                  V.intl.string(V.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(_e, { preset: c, onShuffle: g }), (0, p.jsx)(_d, { user: t })],
                          }),
                          children: (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsxs)("div", {
                                      children: [
                                          (0, p.jsx)(C.D, {
                                              variant: "heading-xl/extrabold",
                                              children: V.intl.string(V.t["2zGdAW"]),
                                          }),
                                          (0, p.jsx)(J.E, {
                                              className: _c.h_,
                                              variant: "text-sm/normal",
                                              children: V.intl.string(V.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(f_, {
                                      className: _c.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, pG.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: f4.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(fs, {
                                      className: _c.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: f4.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, p.jsx)(p8, {
                                          className: _c.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: f4.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: V.intl.string(V.t["7z0D1c"]),
                                          sectionTitle: V.intl.string(V.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(fe, { user: t, className: _c.fz }),
                                  !S &&
                                      (0, p.jsx)(J.E, {
                                          variant: "text-sm/normal",
                                          children: V.intl.string(V.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !S &&
                          (0, p.jsx)(fZ.d, {
                              onSubscribeModalClose: h,
                              className: _c.Kv,
                              showUpsell: !0,
                              text: V.intl.format(V.t.TmfgI2, {
                                  onClick: () => {
                                      (0, fQ.K)({ onSubscribeFinish: h });
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
                                  (0, p.jsx)("div", { className: _c.BU }),
                                  (0, p.jsx)(_n.Ay, {
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
var _m = n(814390),
    _A = n(643056),
    _E = n(843282),
    _h = n(145497),
    _S = n(685073),
    _x = n(534400),
    _T = n(581781),
    _p = n(743981),
    _f = n(195801);
let __ = (0, tK.Ld)(),
    _I = f.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, _.cf)([sx.default], () => (0, _S.Zo)(sx.default.getCurrentUser()?.primaryGuild)),
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
                        : (0, p.jsx)(_T.A, {
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
                        : (0, p.jsx)(_h.j, {
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
                        : (0, p.jsx)(_x.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: _p.Sl.SIZE_16,
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
            _s(h, eL._F.GUILD_TAG),
            (0, p.jsxs)(aE.A, {
                title: V.intl.string(V.t.Pdd1nd),
                titleId: __,
                ref: h,
                children: [
                    (0, p.jsx)(J.E, {
                        className: _f.VA,
                        variant: "text-sm/normal",
                        children: V.intl.string(V.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(_E.Pw, {
                        className: _f.Lt,
                        optionClassName: _f.S0,
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
var _N = n(318785),
    _C = n(470739);
let _b = function () {
    return (0, _A.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, p.jsx)(aE.A, {
              title: V.intl.string(V.t.l6w3Vj),
              description: V.intl.string(V.t.joHqdj),
              children: (0, p.jsx)(j.$, {
                  text: V.intl.string(V.t.wRraFx),
                  onClick: () => {
                      (0, _C.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var _y = n(953726);
let _v = (0, tK.Ld)();
function _j(e) {
    let t = (0, xn.L)(tJ.PremiumTypes.TIER_2);
    return (0, p.jsxs)(aE.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: V.intl.string(V.t["9AjdkD"]),
        titleId: _v,
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(lp.k, {
                    "aria-labelledby": _v,
                    placeholder: e.placeholder,
                    maxLength: I.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(fe, { user: e.user, className: _y.F }),
        ],
    });
}
var _O = n(376626);
function _L(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = U.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, p.jsx)("div", {
        className: _O.u,
        children: (0, p.jsx)(t5.d, {
            label: V.intl.string(V.t["3cWDuO"]),
            description: l ? null : V.intl.formatToPlainString(V.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, p_._e)() : (0, p1.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function _R(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, fg.r)(n1.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, fm.rh)(s, r, !1),
        o = (0, fS.LX)(a[0]);
    return (0, p.jsx)(aE.A, {
        title: V.intl.string(V.t["/X3fkf"]),
        children: (0, p.jsx)(fp, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var _D = n(518477);
let _P = function () {
    let e = (0, _.bG)([cA.default], () => cA.default.getId());
    return (0, p.jsx)(aE.A, {
        title: V.intl.string(V.t.Jzj9q4),
        children: (0, p.jsx)(j.$, {
            text: V.intl.string(V.t.Geikwq),
            onClick: () => {
                (0, pb.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tk.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: _D.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var _G = n(654910);
function _M() {
    let e = (0, _.bG)([sx.default], () => {
            let e = sx.default.getCurrentUser();
            return (tE()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, _.bG)([pM.A], () => pM.A.getUserProfile(e.id)),
        n = (0, _A.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, _.cf)([pN.A], () => {
            let e = pN.A.getPendingChanges(),
                t = pN.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, pG.V7)({ userId: e.id, image: i }),
        A = (0, pw.EC)(),
        E = aN.Ay.canUsePremiumProfileCustomization(e),
        h = (0, pO.z5)(i, e.avatar),
        S = (0, pO.Ac)(s, t?.banner),
        x = (0, fA.Ay)(e.id),
        T = x?.getLegacyUsername(),
        f = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        I = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, _N.b)(),
        C = null != (0, _S.Zo)(e.primaryGuild).guildId;
    return (0, p.jsxs)("div", {
        className: _G.Q,
        children: [
            (0, p.jsx)(_j, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: l,
                onGlobalNameChange: (e) => (0, p1.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                fI,
                {
                    sectionTitle: V.intl.string(V.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, p1.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(_P, {}),
            (0, p.jsx)(
                p8,
                {
                    onAvatarChange: (e) => {
                        ((0, p1.p)({ avatar: e }), (0, pO.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: V.intl.string(V.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, p.jsx)(p3, { user: e, sectionTitle: V.intl.string(V.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(fi, { user: e }),
            (0, p.jsx)(fo, { user: e, sectionTitle: V.intl.string(V.t.wR5wOo) }, "effect"),
            (0, p.jsx)(fc, { user: e, sectionTitle: V.intl.string(V.t.GWrZOd) }, "frame"),
            E
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              fs,
                              {
                                  showRemoveBannerButton: S,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, p1.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(f_, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, p1.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      _R,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, p1.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
                pJ,
                {
                    sectionTitle: V.intl.string(V.t.ZzAR2Y),
                    errors: I,
                    onBioChange: (e) => (0, p1.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, p.jsx)(_I, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, p1.p)({ primaryGuildId: e }),
                }),
            null != T &&
                !n &&
                (0, p.jsx)(_L, { legacyUsername: T, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, p.jsx)(_b, {}, "badges"),
        ],
    });
}
function _U() {
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
var _V = n(447080);
function _k() {
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
        } = (0, _.cf)([pN.A], () => ({ ...pN.A.getPendingChanges(), showNotice: pN.A.showNotice() })),
        a = (0, pG.V7)({ userId: e.id, image: i }),
        o = (0, pO.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, _m.A)() && null != n ? fK.Ay.parse(void 0, n).content : n,
        d = aN.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eX.Ay)(tk.A.USER_SETTINGS_USER_PROFILE);
    f.useEffect(() => p_.IM, []);
    let [g, m] = f.useState(!1),
        A = !d,
        E = f.useRef(null);
    return t
        ? (0, p.jsx)(op.A, {})
        : (0, p.jsxs)(eX.f5, {
              value: c,
              children: [
                  (0, p.jsx)(fW, {}),
                  (0, p.jsx)(pD, {
                      profilePreview: (0, p.jsx)(pP.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: _U,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: _V.ti,
                      }),
                      nameplatePreview: (0, p.jsx)(pj.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? _V.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(_M, {}),
                  }),
                  (0, p.jsx)(c2.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, p.jsx)("div", {
                          ref: E,
                          children: (0, p.jsx)(_g, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !s &&
                      (0, p.jsx)(fZ.d, {
                          className: _V.EL,
                          showUpsell: !g,
                          text: V.intl.format(V.t.TmfgI2, { onClick: () => (0, fQ.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, p.jsx)(fq.l, {
                              size: "md",
                              location: tk.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, p.jsx)("div", {
                              className: _V.Xl,
                              children: (0, p.jsx)(j.$, {
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
var _w = n(625494);
n(46121);
var _F = n(944983);
let _B = { [eL.Eq.USER_PROFILE]: "main_profile_tab", [eL.Eq.GUILD]: "guild_profile_tab" },
    _z = (0, h.E2)(S.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, _.bG)([lj.A, gQ.Ay, pN.A], () => {
                    let e = pN.A.selectedGuildId ?? lj.A.getGuildId();
                    return null == e || pN._.has(e) ? gQ.Ay.getFlattenedGuildIds().find((e) => !pN._.has(e)) : e;
                }),
                t = (0, _.bG)([lv.A], () => lv.A.getGuild(e)),
                n = (0, _.bG)([pN.A], () => pN.A.showNotice()),
                i = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
                l = _l.A.useField("subsection");
            return (
                f.useEffect(() => {
                    (0, it._)(_B[l]);
                }, [l]),
                f.useEffect(() => {
                    null != i && t?.id != null && (0, fM.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, p.jsx)(fV, {
                    children: (0, p.jsxs)(uk.F, {
                        component: (0, p.jsx)(lm.A, {
                            children: (0, p.jsx)(C.D, {
                                variant: "heading-xl/normal",
                                children: V.intl.string(V.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, p.jsxs)(py.V, {
                                className: _F.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                _w._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eL.Eq.GUILD && null != t && (0, pv.V2)(t.id),
                                            _l.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, p.jsx)(
                                        py.V.Item,
                                        {
                                            className: _F.YU,
                                            id: eL.Eq.USER_PROFILE,
                                            children: V.intl.string(V.t["2p07FR"]),
                                        },
                                        eL.Eq.USER_PROFILE,
                                    ),
                                    (0, p.jsx)(
                                        py.V.Item,
                                        {
                                            className: ic()(_F.YU, _F.HY),
                                            "aria-label": V.intl.string(V.t.kPHroX),
                                            id: eL.Eq.GUILD,
                                            children: V.intl.string(V.t.kPHroX),
                                        },
                                        eL.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eL.Eq.GUILD
                                ? (0, p.jsx)(fG, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                  _w._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, pv.JJ)(e.id);
                                      },
                                  })
                                : (0, p.jsx)(_k, {}),
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
    _X = (0, h.zZ)(S.X.PROFILE_CATEGORY, { buildLayout: () => [_z] });
var _Y = n(379633);
function _H() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, gr.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return null == e
        ? null
        : (0, p.jsxs)("div", {
              className: _Y.a5,
              children: [
                  (0, p.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: v._3.SIZE_48,
                      "aria-label": V.intl.string(V.t.lqaIxI),
                  }),
                  (0, p.jsxs)("div", {
                      className: _Y.FS,
                      children: [
                          (0, p.jsx)(J.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, p.jsxs)("div", {
                              className: _Y.Fk,
                              children: [
                                  (0, p.jsx)(J.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: V.intl.string(V.t.Ip9nBS),
                                  }),
                                  (0, p.jsx)(a_.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let _W = (0, h.t_)(S.X.PROFILE_PANEL, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        notice: { stores: [pN.A], element: pI.A },
        initialize: () => p_.F7,
        buildLayout: () => [_X],
    }),
    _K = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _q,
        StronglyDiscouragedCustomComponent: _H,
        usePredicate: () => !(0, pC.X)("user_settings_sidebar"),
        buildLayout: () => [_W],
    }),
    _Z = (0, h.i4)(S.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => V.intl.string(V.t["vi7f+q"]),
        icon: _q,
        StronglyDiscouragedCustomComponent: _H,
        usePredicate: () => (0, pC.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cA.default.getId();
            (0, pb.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function _q() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, gr.A)({ userId: e?.id, size: v._3.SIZE_48 });
    return (0, p.jsx)(y.eu, { src: t, avatarDecoration: n, size: v._3.SIZE_20, "aria-hidden": !0 });
}
let _Q = (0, h.WI)(S.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [_K, _Z] });
var _J = n(98207);
n(204925);
let _$ = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, lT.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, p.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? u0.tE : null, onCloseCallback: t },
    );
};
var _0 = n(940856),
    _1 = n(506775),
    _2 = n(379257),
    _3 = n(121780),
    _4 = n(666113);
function _5() {
    let e = _3.A.getCountryCode(),
        t = null != e ? _4.IN[e.alpha2] : void 0;
    _2.A.openUrl(eb.A.getArticleURL(t ?? _4.k9));
}
var _6 = n(521169);
function _8() {
    return (0, _6.w)(_4.Vc);
}
var _7 = n(680091);
function _9() {
    let e = _8(),
        t = (0, _1.ZP)();
    if (!e) return null;
    switch (t) {
        case _1.M$.ADULT:
            return V.intl.format(_7.default.gi4ulu, { handleOnAgeGatedContentHook: _1.M0 });
        case _1.M$.TEEN:
            return V.intl.format(_7.default["221iML"], {
                handleOnAgeGatedContentHook: _1.M0,
                handleOnConfirmAgeHook: _1.aP,
            });
        case _1.M$.UNVERIFIED:
            return V.intl.format(_7.default["W0/7DD"], {
                handleOnAgeGatedContentHook: _5,
                handleOnConfirmAgeHook: _1.aP,
            });
    }
}
var Ie = n(26137),
    It = n(957485);
function In() {
    let e = _8(),
        t = (0, _1.ZP)();
    return e ? { icon: t === _1.M$.ADULT ? Ie.r : It.i, backgroundColor: n1.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function Ii() {
    let e = In();
    return null != e ? { type: T.hp.ICON, ...e } : null;
}
function Il() {
    return _8() ? V.intl.string(V.t.piqs0o) : null;
}
var Is = n(438140);
let Ir = [{ badgeType: T.Xi.NEW, dismissibleContent: eE.M.TINY_BRONCO_SETTINGS }],
    Ia = [];
function Io() {
    return (0, Is.Wt)() ? Ir : Ia;
}
var Iu = n(36149),
    Id = n(207560),
    Ic = (((m = {}).LEGACY = "legacy"), (m.TINY_BRONCO = "tinyBronco"), m),
    Ig = (((A = {}).VERIFY = "verify"), (A.EDIT = "edit"), (A.INFO = "info"), A);
function Im(e, t) {
    let n = (0, _.bG)([sx.default], () => null != sx.default.getCurrentUser()),
        i = (0, Id.fk)(),
        l = (0, _1.ZP)(),
        s = (0, Iu.Y2)(),
        r = _8();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (l) {
        case _1.M$.UNVERIFIED:
            return "verify" === e;
        case _1.M$.TEEN:
            return e === (r ? "info" : "verify");
        case _1.M$.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var IA = n(841365);
function IE() {
    let e = (0, _1.hD)();
    return (0, p.jsxs)(J.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, V.intl.format(IA.default.WM5adV, { handleOnHelpUrlHook: _1.M0 })],
    });
}
let Ih = {
        useTitle: () => Il() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: _9,
        useVariant: () => "secondary",
        useLeadingDecoration: Ii,
        getDismissibleBadges: Io,
        useTrailingDecoration: () => ({
            type: T.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: IE,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        onClick: function () {
            (0, lT.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    },
    IS = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...Ih, usePredicate: () => Im(Ig.EDIT, Ic.LEGACY) }),
    Ix = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...Ih,
        usePredicate: () => Im(Ig.EDIT, Ic.TINY_BRONCO),
        useAriaLabel: () => V.intl.string(V.t.pBMSie),
    }),
    IT = {
        useTitle: () => Il() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: _9,
        useLeadingDecoration: function () {
            let e = In();
            return null != e ? { type: T.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: Io,
        useTrailingDecoration: () => ({ type: T.Ln.TEXT, text: (0, _1.hD)() }),
    },
    Ip = (0, h.v_)(S.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...IT, usePredicate: () => Im(Ig.INFO, Ic.LEGACY) }),
    If = (0, h.v_)(S.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...IT,
        usePredicate: () => Im(Ig.INFO, Ic.TINY_BRONCO),
    }),
    I_ = {
        useTitle: () => Il() ?? V.intl.string(V.t["/52UYy"]),
        useSubtitle: _9,
        useVariant: () => "secondary",
        useLeadingDecoration: Ii,
        getDismissibleBadges: Io,
        useTrailingDecoration: () => ({ type: T.fq.TEXT, text: (0, _1.hD)() }),
        useLabel: function () {
            return (0, Iu.yM)() ? V.intl.string(V.t["9KiIz6"]) : V.intl.string(V.t.DVywUB);
        },
        onClick: _1.aP,
    },
    II = (0, h.Tf)(S.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...I_, usePredicate: () => Im(Ig.VERIFY, Ic.LEGACY) }),
    IN = (0, h.Tf)(S.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...I_,
        usePredicate: () => Im(Ig.VERIFY, Ic.TINY_BRONCO),
    }),
    IC = [II, IS, Ip],
    Ib = [IN, Ix, If],
    Iy = (0, h.Tf)(S.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => V.intl.string(V.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: T.fq.TEXT, text: V.intl.string(V.t.qxk9zo) }),
        useLabel: () => V.intl.string(V.t.BleMPB),
        onClick: () => _$(),
    });
function Iv(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function Ij(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function IO(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = f.useState(!1),
        a = s ? t : n(t);
    return (0, p.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, p.jsx)(J.E, { variant: "text-md/medium", children: a }),
            (0, p.jsx)(h1.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
            }),
        ],
    });
}
function IL() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(J.E, { variant: "text-md/medium", children: V.intl.string(V.t["8SfTN/"]) })
        : (0, p.jsx)(IO, {
              text: e,
              censor: Ij,
              revealLabel: V.intl.string(V.t["Zvx+yV"]),
              hideLabel: V.intl.string(V.t.nqTD4d),
          });
}
let IR = (0, h.Tf)(S.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: T.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: IL }),
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
var ID = n(557722),
    IP = n(53516);
function IG() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(J.E, { variant: "text-md/medium", children: V.intl.string(V.t.I5kDqj) })
        : (0, p.jsx)(q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(IO, {
                  text: t,
                  censor: Iv,
                  revealLabel: V.intl.string(V.t.eY3xlT),
                  hideLabel: V.intl.string(V.t["jllbv+"]),
              }),
          });
}
let IM = (0, h.Tf)(S.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => V.intl.string(V.t.kerONq),
    useAriaLabel: function () {
        return null == (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.phone)
            ? V.intl.string(V.t["SfUuE+"])
            : V.intl.string(V.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: T.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: IG }),
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
                      return (t) => (0, p.jsx)(e, { reason: ID.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: IP.V },
              )
            : (0, lT.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function IU() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function IV() {
    let e = (0, pw.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(J.E, { variant: "text-md/medium", children: i }),
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
let Ik = (0, h.Tf)(S.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => V.intl.string(V.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: T.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: IV,
        }),
        useLabel: () => V.intl.string(V.t.bt75uw),
        useAriaLabel: () => V.intl.string(V.t.JECa91),
        useSubtitle: () => (IU() ? V.intl.string(V.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: IU,
        onClick: function () {
            (0, lT.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    Iw = (0, h.zZ)(S.X.ACCOUNT_INFO_CATEGORY, {
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
                            button: { text: V.intl.string(V.t.lm1UKt), onClick: () => (0, _0.S)(e) },
                        }
                  : {
                        type: T.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
                        title: V.intl.string(V.t["/3qnL/"]),
                        text: V.intl.string(V.t.qKs3vg),
                        button: { text: V.intl.string(V.t["7psymi"]), onClick: () => _$() },
                    };
        },
        buildLayout: () => [Ik, Iy, IR, IM, ...IC],
    });
var IF = n(398177);
let IB = (0, h.Tf)(S.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => V.intl.string(V.t["CIGa+7"]),
    useLabel: () => V.intl.string(V.t.bt75uw),
    useAriaLabel: () => V.intl.string(V.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, lT.openModal)((e) => (0, p.jsx)(IF.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var Iz = n(200921);
let IX = [];
function IY() {
    IX = [];
}
class IH extends _.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return IX;
    }
}
let IW = new IH(ts.h, {
    LOGOUT: IY,
    LOGIN_SUCCESS: IY,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        IX = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...IX],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        IX = n;
    },
});
function IK() {
    let e = (0, _.cf)([IW], () => IW.getSessions());
    return f.useMemo(() => {
        let t = [...e],
            n = null,
            i = cA.default.getAuthSessionIdHash();
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
function IZ(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? V.intl.string(V.t.TXCmfL) : im()(e).fromNow();
}
var Iq = n(176524),
    IQ = n(646270),
    IJ = n(738678),
    I$ = n(489828);
function I0(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, p.jsxs)(q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(Iq.A, { icon: t, color: r ? n1.A.colors.ICON_MUTED : "currentColor" }),
            (0, p.jsxs)(q.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, p.jsxs)(q.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, p.jsx)(J.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, p.jsx)(J.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, p.jsx)(J.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, p.jsx)(J.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function I1(e) {
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
                            return { text: V.intl.string(V.t.cDHCNY), icon: dV.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: IQ.u };
                        case "horizon os":
                            return { text: e, icon: IJ.G };
                        default:
                            return { text: e, icon: dV.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : IZ(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(io.Vq);
    return (0, p.jsx)(I0, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, p.jsx)(n5.D, {
                className: I$.X,
                onClick: () => (0, Iz.U0)(t.id_hash),
                "aria-label": V.intl.string(V.t.E4MJNt),
                children: (0, p.jsx)(dt.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function I2(e) {
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
let I3 = (0, h.E2)(S.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = IK();
            return null == e
                ? (0, p.jsx)(oO.y, {})
                : (0, p.jsx)(I2, {
                      title: V.intl.string(V.t.LLS19o),
                      children: (0, p.jsx)(I1, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    I4 = (0, h.E2)(S.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = IK();
            return (0, p.jsx)(lu.D, {
                label: V.intl.string(V.t.Vij32M),
                description: V.intl.string(V.t.OTXyaf),
                children: (0, p.jsx)(j.$, {
                    onClick: () => (0, Iz.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: V.intl.string(V.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = IK();
            return e.length > 0;
        },
    });
var I5 = n(766928);
function I6() {
    return (0, p.jsx)(I0, {
        icon: I5.W,
        label: V.intl.string(V.t.iUa0sn),
        description: V.intl.format(V.t["044+8i"], {
            onClick: () =>
                (0, na.openUserSettings)(S.X.ACCOUNT_PANEL, { analyticsLocations: [tk.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let I8 = (0, h.E2)(S.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = IK(),
                t = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return (0, p.jsxs)(I2, {
                title: V.intl.string(V.t.xx1MWc),
                children: [
                    e.map((e) => (0, p.jsx)(I1, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, p.jsx)(I6, {}),
                ],
            });
        },
        useSearchTerms: () => [V.intl.string(V.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = IK(),
                t = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    I7 = (0, h.zZ)(S.X.SESSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useSubtitle: () => V.intl.string(V.t.b7ZpTM),
        initialize: () => {
            (0, Iz.GY)();
        },
        buildLayout: () => [I3, I8, I4],
        useSearchTerms: () => [
            V.intl.string(V.t["+1h0k/"]),
            V.intl.string(V.t.LLS19o),
            V.intl.string(V.t.xx1MWc),
            V.intl.string(V.t.lSWsrd),
        ],
    }),
    I9 = (0, h.t_)(S.X.SESSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.mEndXM),
        useObscuredNotice: op.L,
        buildLayout: () => [I7],
    }),
    Ne = (0, h.t0)(S.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [I9],
        initialize: () => {
            (0, Iz.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = IK(),
                n = t.length + +(null != e);
            return {
                type: T.xn.TEXT,
                text: n > 0 ? V.intl.formatToPlainString(V.t.G7zwOk, { count: n }) : V.intl.string(V.t.MKDeyL),
            };
        },
    });
var Nt = n(464477);
function Nn(e) {
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
function Ni() {
    return (0, oo.bG)([sx.default], () => {
        let e = sx.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var Nl =
    (((E = {}).AVAILABLE = "available"),
    (E.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (E.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    E);
function Ns() {
    let e = (0, oo.bG)([sx.default], () => sx.default.getCurrentUser()?.verified);
    return Nt.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function Nr() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, oo.bG)([lv.A, fC.A, sx.default], () =>
        sx.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? V.intl.string(V.t.hxf9fX)
                : V.intl.string(V.t["3iKih7"])
            : lv.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        fC.A.can(I.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? V.intl.string(V.t.OYTCUh)
                  : V.intl.string(V.t.HC8uSZ)
              : null,
    );
}
var Na = n(466034);
let No = (0, h.Tf)(S.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: () => Nr(!0),
        useDisabled: () => null !== Nr(!0),
        useLabel: () => V.intl.string(V.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, _.bG)([cA.default], () => cA.default.hasTOTPEnabled()),
                t = Ns() === Nl.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n2.A)({
                title: V.intl.string(V.t["D+aE7g"]),
                subtitle: V.intl.string(V.t.EA4ZEk),
                variant: "critical",
                confirmText: V.intl.string(V.t.N86XcP),
                onConfirm: () => _J.A.disable(),
            }),
    }),
    Nu = (0, h.zZ)(S.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RumMFo),
        useSubtitle: () => V.intl.string(V.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, _.bG)([cA.default], () => cA.default.hasTOTPEnabled()),
                t = Ns() === Nl.AVAILABLE;
            if (!e && t)
                return {
                    type: T.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: T.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: V.intl.string(V.t.cTNUeD),
                            onClick: Na.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (Ns()) {
                case Nl.UNAVAILABLE_NO_CRYPTO:
                    return {
                        type: T.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "none",
                        text: V.intl.string(V.t.PhHhsj),
                    };
                case Nl.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: T.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: V.intl.string(V.t.uggF7o),
                    };
                case Nl.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [No],
    });
var Nd = n(670492),
    Nc = n(32880),
    Ng = n(663417),
    Nm = n(658675),
    NA = n(900686);
function NE() {
    (0, lT.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    _J.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
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
var Nh = n(858487);
function NS(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function Nx() {
    let e = Nd.A.getVerificationKey();
    if ("" === e) return void NE();
    try {
        await _J.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, sg.P0)({ text: e.body?.message ?? V.intl.string(V.t.F8FvUy), variant: "critical" });
    }
}
function NT(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = NS(t),
        l = f.useRef(null),
        s = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(Nm.P, { checked: n }), (0, p.jsx)(J.E, { variant: "text-md/normal", children: i })],
        });
    return uw.p5
        ? (0, p.jsx)(n5.D, {
              tag: "li",
              className: ic()(Nh.aY, Nh.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uw.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  ((0, uw.C)(i), (0, sg.P0)({ text: V.intl.string(V.t.mGZ66D), variant: "success" }));
              },
              children: s,
          })
        : (0, p.jsx)("li", { className: Nh.aY, children: s });
}
let Np = (0, h.zZ)(S.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.fC9qV0),
        useSubtitle: () =>
            (0, _.bG)([Nd.A], () => Nd.A.getBackupCodes().length > 0)
                ? V.intl.format(V.t.tp7zEK, {})
                : V.intl.string(V.t.LoOi4S),
        usePredicate: Ni,
        buildLayout: () => [Nf],
    }),
    Nf = (0, h.E2)(S.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t.fC9qV0)],
        Component: function () {
            let e = (0, _.bG)([Nd.A], () => Nd.A.getBackupCodes()),
                t = f.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${NS(t)}` + (n ? ` (${V.intl.string(V.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(j.$, { text: V.intl.string(V.t.Jc2myK), size: "sm", variant: "secondary", onClick: NE })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: Nh.E5,
                              children: e.map((e) => (0, p.jsx)(NT, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(s8.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(NA.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(j.$, {
                                          text: V.intl.string(V.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: Nc.DownloadIcon,
                                      }),
                                  }),
                                  (0, p.jsx)(j.$, {
                                      text: V.intl.string(V.t["3x962E"]),
                                      variant: "secondary",
                                      icon: Ng.RefreshIcon,
                                      onClick: Nx,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    N_ = (0, h.Tf)(S.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => V.intl.string(V.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = f.useState(!1),
                n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : V.intl.format(e ? V.t["xDBk/I"] : V.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, p.jsx)(h1.Q, {
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
                        handleSubmit: _J.A.disableSMS,
                        title: V.intl.string(V.t.KLWnit),
                        children: V.intl.string(V.t["W0/Duf"]),
                    });
            }),
    }),
    NI = (0, h.zZ)(S.X.SMS_AUTH_CATEGORY, {
        useTitle: () => V.intl.string(V.t.wuHuI5),
        useSubtitle: () => (0, _.bG)([sx.default], () => Nn(sx.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
                t = (0, _.bG)([sx.default], () => null != Nn(sx.default.getCurrentUser()));
            if (!e)
                return {
                    type: T.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: T.UV.BUTTON,
                            id: "sms-setup-button",
                            text: V.intl.string(V.t.Age7yU),
                            onClick: NN,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = Ns(),
                t = Ni(),
                n = (0, _.bG)([cA.default], () => cA.default.hasTOTPEnabled());
            return e === Nl.AVAILABLE && t && n;
        },
        buildLayout: () => [N_],
    });
function NN() {
    let e = sx.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: ID.d.USER_SETTINGS_UPDATE, onAddedPhone: _J.A.enableSMS }),
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
                    { modalKey: IP.V },
                ));
        } else _J.A.enableSMS();
}
var NC = n(665671),
    Nb = n(442433),
    Ny = n(917136),
    Nv = n(976910),
    Nj = n(267255);
function NO(e) {
    let { credential: t } = e;
    return (0, p.jsxs)("li", {
        className: Nj.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(J.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(J.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: V.intl.format(V.t["7JgxF5"], { lastUsed: IZ(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(ld.K, {
                icon: g2.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": V.intl.string(V.t["+nrTbK"]),
                onClick: (e) => {
                    (0, Nb.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, p.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let NL = (0, h.zZ)(S.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.IBq4Y3),
        useSubtitle: () => V.intl.string(V.t.yK9edS),
        useHeaderDecoration: function () {
            if (Ns() === Nl.AVAILABLE)
                return {
                    type: T.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: T.UV.BUTTON,
                            id: "add-security-key-button",
                            text: V.intl.string(V.t["Tzs/fw"]),
                            icon: iH.j,
                            onClick: NC.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (Ns()) {
                    case Nl.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: T.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: V.intl.string(V.t.bWCGI9),
                        };
                    case Nl.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: T.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: V.intl.string(V.t.uggF7o),
                        };
                    case Nl.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [NR],
    }),
    NR = (0, h.E2)(S.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [V.intl.string(V.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, _.cf)([Nv.A], () => ({
                hasFetchedCredentials: Nv.A.hasFetchedCredentials(),
                credentials: Nv.A.getCredentials(),
            }));
            return (f.useEffect(() => {
                t || Ny.JQ();
            }, [t]),
            t)
                ? (0, p.jsx)(q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(NO, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(oO.y, {});
        },
    }),
    ND = (0, h.t_)(S.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => V.intl.string(V.t.m0FidJ),
        buildLayout: () => [NL, Nu, NI, Np],
    }),
    NP = (0, h.t0)(S.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = Ni();
            return { type: T.xn.TEXT, text: e ? V.intl.string(V.t.lQsY7B) : V.intl.string(V.t.WsUuTt) };
        },
        buildLayout: () => [ND],
    }),
    NG = (0, h.zZ)(S.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t["0iH2vc"]),
        buildLayout: () => [IB, NP, Ne],
    }),
    NM = { [_1.M$.ADULT]: _7.default.PMznGO, [_1.M$.TEEN]: _7.default.qSkhZH, [_1.M$.UNVERIFIED]: _7.default.vGxRDB },
    NU = [eE.M.TINY_BRONCO_NOTICE],
    NV = [];
function Nk() {
    _2.A.openUrl(_4.m5);
}
var Nw = n(308645),
    NF = n(555725),
    NB = n(855267);
let Nz = (0, h.E2)(S.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["16r9jm"])],
        Component: NB.A,
    }),
    NX = (0, h.zZ)(S.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Nz] }),
    NY = (0, h.t_)(S.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        buildLayout: () => [NX],
    }),
    NH = (0, h.t0)(S.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => V.intl.string(V.t["16r9jm"]),
        useSubtitle: NF.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, NF._k)();
            return { type: T.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: T.xn.TEXT, text: (0, NF.aO)() };
        },
        initialize: () => {
            Nw.Yn();
        },
        buildLayout: () => [NY],
    }),
    NW = (0, h.zZ)(S.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (_8() ? V.intl.string(V.t.GI2mea) : null) ?? V.intl.string(V.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, Is.LH)(),
                t = (0, _1.ZP)(),
                [n, i] = (0, m$.kn)(e ? NU : NV);
            return e && null != n
                ? {
                      type: T.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: V.intl.format(NM[t], { handleOnBlogHook: Nk }),
                      onDismiss: () => i(m8.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...Ib, NH],
    });
var NK = n(738188),
    NZ = n(834981),
    Nq = n(987197),
    NQ = n(822585),
    NJ = n(840387),
    N$ = n(961526),
    N0 = n(513687);
let N1 = (0, h.E2)(S.X.FAMILY_CENTER_SETTING, {
        Component: N$.p,
        useSearchTerms: () => [
            V.intl.string(N0.default.RZqaJn),
            V.intl.string(N0.default.bdBmqy),
            V.intl.string(N0.default["gVWG+6"]),
            V.intl.string(N0.default.ahKIJO),
            V.intl.string(N0.default["8SLtqb"]),
        ],
    }),
    N2 = (0, h.zZ)(S.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [N1] }),
    N3 = (0, h.t_)(S.X.FAMILY_CENTER_PANEL, {
        useTitle: () => V.intl.string(N0.default.RZqaJn),
        buildLayout: () => [N2],
    }),
    N4 = (0, h.zZ)(S.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => V.intl.string(N0.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, Nq.f)(),
                t = (0, NQ.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, NZ.VT)();
            return f.useMemo(() => (n ? { badgeType: T.Xi.WARNING } : { badgeType: T.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [N5],
    }),
    N5 = (0, h.t0)(S.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, NZ.Li)() ? V.intl.string(N0.default.IcMQUP) : V.intl.string(N0.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, NJ.Z)(),
                t = (0, NZ.Li)();
            return e
                ? t
                    ? V.intl.string(N0.default.G8lHFU)
                    : V.intl.string(N0.default.uOLNEZ)
                : V.intl.string(N0.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, Nq.f)(),
                t = (0, NQ.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: T.Xy.ICON,
                      icon: NK.WarningIcon,
                      color: n1.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n1.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [N3],
    });
var N6 = n(425587),
    N8 = n(662758);
function N7(e) {
    if (e.body.code === I.t02.INVALID_PASSWORD) throw e;
    (0, s4.A)({ title: V.intl.string(V.t.LX0nT8), subtitle: e.body.message });
}
async function N9() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = sx.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await N6.A.fetchTeams(!0)).body;
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
                  (0, p.jsx)(N8.default, {
                      ...t,
                      handleSubmit: (t) => (0, p_.U_)(t, e).then(I.tEg, N7),
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
                  onConfirm: () => (0, p_.U_)("", !0),
              });
}
let Ce = (0, h.Tf)(S.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => V.intl.string(V.t["gIpzR+"]),
        useSubtitle: () => V.intl.string(V.t.Bd6dOf),
        useLabel: () => V.intl.string(V.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => N9(!0),
    }),
    Ct = (0, h.Tf)(S.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => V.intl.string(V.t["p/Tjtp"]),
        useSubtitle: () => V.intl.string(V.t.YvDmKb),
        useLabel: () => V.intl.string(V.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => N9(!1),
        usePredicate: () => {
            let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Cn = (0, h.zZ)(S.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Ct, Ce] }),
    Ci = (0, h.t_)(S.X.ACCOUNT_PANEL, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (_J.A.clearBackupCodes(), (0, p_.Uo)());
            };
        },
        useObscuredNotice: op.L,
        buildLayout: () => [Iw, NG, NW, N4, Cn],
    }),
    Cl = (0, h.i4)(S.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t["ldCE/p"]),
        icon: AJ.UserIcon,
        buildLayout: () => [Ci],
    });
var Cs = n(176781),
    Cr = n(274372),
    Ca = n(572164),
    Co = n(614584),
    Cu = n(696016);
let Cd = [Cu.zq, 25, 50, Cu.Y2, Cu.rv],
    Cc = (0, h.sN)(S.X.CLIPS_BITRATE, {
        useTitle: () => V.intl.string(V.t["8bZyov"]),
        useSubtitle: () => V.intl.string(V.t["h8DSx/"]),
        minValue: Cu.zq,
        maxValue: Cu.rv,
        useDefaultValue: () => Cu.Y2,
        getInitialValue: () => Cr.Ay.getSettings().clipsQuality.bitratePercent ?? Cu.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = Cr.Ay.getSettings();
            Co.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: Cd,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, Ca.E)(),
    });
var Cg = n(226640);
let Cm = (0, h.Hn)(S.X.CLIPS_FRAME_RATE, {
        useTitle: () => V.intl.string(V.t["2wScL1"]),
        useSubtitle: () => V.intl.string(V.t["Rf9+fy"]),
        useValue: () => (0, _.bG)([Cr.Ay], () => Cr.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = Cr.Ay.getSettings();
            Co.GS({ ...t, frameRate: e });
        },
        useOptions: Cg.Fz,
        useDisabled: () => !(0, Ca.E)(),
    }),
    CA = (0, h.E2)(S.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [],
        usePredicate: () => (0, _.bG)([Cr.Ay], () => Cr.Ay.getHardwareClassification()) === Cu.k9.BELOW_MINIMUM,
        Component: () => (0, p.jsx)(l9.A, { look: l9.k.WARNING, children: V.intl.string(V.t.SIxrIF) }),
    }),
    CE = (0, h.Hn)(S.X.CLIPS_LENGTH, {
        useTitle: () => V.intl.string(V.t.OgfUio),
        useSubtitle: () => V.intl.string(V.t.H7j4tY),
        useValue: () => (0, _.bG)([Cr.Ay], () => Cr.Ay.getSettings().clipsLength),
        setValue: (e) => Co.h$(e),
        useOptions: Cg.Qu,
        useDisabled: () => !(0, Ca.E)(),
    }),
    Ch = (0, h.E2)(S.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [],
        Component: () => (0, p.jsx)(l9.A, { look: l9.k.INFO, children: V.intl.string(V.t["Z+MfqT"]) }),
    }),
    CS = (0, h.Hn)(S.X.CLIPS_RESOLUTION, {
        useTitle: () => V.intl.string(V.t.aFudZJ),
        useSubtitle: () => V.intl.string(V.t.nIrkW5),
        useValue: () => (0, _.bG)([Cr.Ay], () => Cr.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Cr.Ay.getSettings();
            Co.GS({ ...t, resolution: e });
        },
        useOptions: Cg.gF,
        useDisabled: () => !(0, Ca.E)(),
    }),
    Cx = (0, h.zD)(S.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => V.intl.string(V.t["3zwNf6"]),
        useSubtitle: () => V.intl.string(V.t.m4Cjj9),
        useValue: () => (0, _.bG)([Cr.Ay], () => Cr.Ay.getSettings().remindersEnabled),
        setValue: (e) => Co.Mt(e),
        useDisabled: () => !(0, Ca.E)(),
    });
var CT = n(268378);
let Cp = (0, h.zZ)(S.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => V.intl.string(CT.default.TGwzMe),
        buildLayout: () => [CA, CE, Cm, CS, Cc, Ch, Cx],
    }),
    Cf = (0, h.zD)(S.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, _.bG)([Cr.Ay], () => Cr.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => Co.YP(e),
    }),
    C_ = (0, h.zD)(S.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, _.bG)([Cr.Ay], () => Cr.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => Co.Uh(e),
    }),
    CI = (0, h.zZ)(S.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, _.bG)([sx.default], () => {
                let e = sx.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [Cf, C_],
    });
var CN = n(417270),
    CC = n(847825);
let Cb = (0, h.E2)(S.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [V.intl.string(V.t.pf54EU), V.intl.string(V.t["QyB/jK"])],
        Component: () => {
            let e = (0, _.bG)([la.Ay], () => la.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0));
            tE()(null != e, "Save clip keybind unset");
            let t = !(0, Ca.E)(),
                n = f.useRef(null),
                i = f.useCallback(
                    (t) => {
                        iZ.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = f.useCallback(() => {
                    iZ.A.setKeybind({ ...e, shortcut: (0, lS.OH)(Cu.Ot) });
                }, [e]);
            return (0, p.jsx)(lu.D, {
                label: V.intl.string(V.t.pf54EU),
                description: V.intl.string(V.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, p.jsx)("div", {
                    className: CC.g,
                    children: (0, p.jsx)(lh.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(lg.m, {
                                    text: V.intl.string(CT.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, p.jsx)(ld.K, {
                                        icon: iW.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(CT.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, p.jsx)(lg.m, {
                                    text: V.intl.string(CT.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, p.jsx)(ld.K, {
                                        icon: CN.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": V.intl.string(CT.default.Kyk1Tp),
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
    Cy = (0, h.E2)(S.X.CLIPS_SCREENSHOT_KEYBIND, {
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
                    className: CC.g,
                    children: (0, p.jsx)(lh.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    Cv = (0, h.zD)(S.X.CLIPS_ENABLE, {
        useTitle: () => V.intl.string(V.t.h8rgrK),
        useSubtitle: () => V.intl.string(V.t["4Qw3NO"]),
        useValue: () => (0, Ca.E)(),
        setValue: (e) => Co.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    Cj = (0, h.zY)(S.X.CLIPS_GENERAL_CARD, { buildLayout: () => [Cv, Cb, Cy], headerSettingKey: Cv.key }),
    CO = (0, h.zZ)(S.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["rWKv+e"]),
        useSubtitle: () => V.intl.format(CT.default["dh7g+S"], { learnMoreLink: eb.A.getArticleURL(I.MVz.CLIPS) }),
        buildLayout: () => [Cj],
    }),
    CL = (0, h.E2)(S.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [V.intl.string(V.t.s4773E), V.intl.string(V.t.svjwGh)],
        Component: () => {
            let e = (0, _.bG)([Cr.Ay], () => Cr.Ay.getSettings().storageLocation),
                t = !(0, Ca.E)(),
                n = f.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nT.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && Co.HU(e[0]);
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
                            text: V.intl.string(CT.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    CR = (0, h.zZ)(S.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => V.intl.string(CT.default["0Q+pdZ"]),
        buildLayout: () => [CL],
    }),
    CD = (0, h.t_)(S.X.CLIPS_PANEL, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        usePredicate: lW.sw,
        buildLayout: () => [CO, Cp, CR, CI],
    }),
    CP = (0, h.i4)(S.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.z2jK6X),
        icon: Cs.x,
        buildLayout: () => [CD],
    });
var CG = n(254138),
    CM = n(290595),
    CU = n(677166),
    CV = n(406935),
    Ck = n(646769),
    Cw = n(405018);
let CF = (0, Ck.c$)(
    "privacy",
    "swpMessagePromotionOptedOut",
    (e) => e?.value ?? null,
    (e) => (null != e ? CV._t.create({ value: e }) : void 0),
);
function CB() {
    let e = CF.useSetting(),
        { locked: t, defaultOptedOut: n } = (0, _.cf)([Cw.A], () => ({
            locked: Cw.A.isLocked(),
            defaultOptedOut: Cw.A.defaultsToOptedOut(),
        }));
    return { locked: t, optedOut: t || (e ?? n) };
}
var Cz = n(804422);
let CX = "user_settings_data_usage",
    CY = [
        (0, h.zD)("pinot_member_setting", {
            useTitle: () => V.intl.string(Cz.default.M33rl6),
            useSubtitle: () =>
                V.intl.format(Cz.default.V0EPTo, { learnMoreURL: eb.A.getArticleURL(I.MVz.SERVER_WEB_PAGES) }),
            usePredicate: () => (0, CU.Zd)(CX),
            useValue: () => !CB().optedOut,
            setValue: (e) => {
                CF.updateSetting(!e);
            },
            useDisabled: function () {
                return CB().locked;
            },
            useDisabledMessage: () =>
                V.intl.format(Cz.default.Z9bKIJ, { learnMoreURL: eb.A.getArticleURL(I.MVz.SERVER_WEB_PAGES) }),
            disabledMessageType: "info",
            getDismissibleBadges: () =>
                !(0, CU.ws)(CX, { autoTrackExposure: !1 }) || Cw.A.isLocked()
                    ? []
                    : [{ badgeType: T.Xi.NEW, dismissibleContent: eE.M.PINOT_MEMBER_SETTING_NEW_BADGE }],
        }),
    ];
var CH = n(153488),
    CW = n(171316),
    CK = n(327919),
    CZ = n(558001);
n(866945);
var Cq = n(835002);
function CQ() {
    let e = (0, CW.uM)(),
        t = (0, NZ.vx)(),
        n = f.useCallback(() => {
            ((0, CK.A)(t, tY.default, () =>
                (0, sg.P0)({
                    text: V.intl.formatToPlainString(N0.default.D1BwNC, { count: t.length }),
                    variant: "critical",
                }),
            ),
                (0, CZ.N)(Cq.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cq.YX.LEARN_MORE));
        }, [t]),
        i = f.useCallback(() => {
            (0, CZ.N)(Cq.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cq.YX.VIEWED);
        }, []);
    return f.useMemo(() => {
        if (e)
            return {
                type: T.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: V.intl.format(N0.default.i284fU, {
                    hook: (e, t) => (0, p.jsx)(nr.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let CJ = (0, h.zD)(S.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => V.intl.string(V.t.AGDDkH),
    useSubtitle: () => V.intl.string(V.t.kyo3dJ),
    useValue: () => U.Q$.useSetting(),
    setValue: (e) => Co.eQ({ allowVoiceRecording: e }),
});
var C$ = n(157559),
    C0 = n(331887);
function C1() {
    let e = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
        t = (0, _.bG)([C0.A], () => C0.A.harvestType),
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
let C2 = (0, h.Tf)(S.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => V.intl.string(V.t.qfFFos),
        useSubtitle: function () {
            let e = C1();
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
        useDisabled: () => !C1().allowed,
        useLoading: () => (0, _.bG)([C0.A], () => C0.A.requestingHarvest),
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
                            (0, p_.$I)(n)
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
                                            ? C$.A.show({
                                                  title: V.intl.string(V.t.i2iul5),
                                                  body: V.intl.string(V.t["6Nmv4i"]),
                                              })
                                            : C$.A.show({
                                                  title: V.intl.string(V.t.OjbtDm),
                                                  body: V.intl.string(V.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || V.intl.string(V.t["0F5Jyt"]);
                                        C$.A.show({ title: V.intl.string(V.t.OjbtDm), body: t });
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
    C3 = (0, h.v_)(S.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => V.intl.string(V.t.D60Gfj),
        useSubtitle: () =>
            V.intl.format(V.t.dszICC, {
                onClickDisable: () => (0, na.openUserSettings)(S.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, na.openUserSettings)(S.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var C4 = n(641216),
    C5 = n(945810);
let C6 = (0, C5.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function C8() {
    let { enabled: e } = C6.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var C7 = n(884705);
function C9() {
    return (0, _.bG)([C7.A], () => C7.A.isTogglesDisabled());
}
function be() {
    return !U.vf.useSetting();
}
function bt(e) {
    U.vf.updateSetting(!e);
}
function bn() {
    let e = C9(),
        t = U.H1.useSetting(),
        n = (0, CW.uM)();
    return e || t || n;
}
let bi = (0, h.zD)(S.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["md5l4/"], { helpdeskArticle: eb.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !C8(),
        useValue: be,
        setValue: bt,
        useDisabled: bn,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    }),
    bl = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => V.intl.string(V.t.CyLYKZ),
        useSubtitle: () =>
            V.intl.format(V.t["2QFDU/"], { helpdeskArticle: eb.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: C8,
        useValue: be,
        setValue: bt,
        useDisabled: bn,
        useSearchTerms: () => [V.intl.string(V.t.CyLYKZ)],
    });
function bs() {
    return !U.H1.useSetting();
}
function br(e) {
    U.H1.updateSetting(!e);
}
function ba() {
    let e = C9(),
        t = (0, CW.uM)();
    return e || t;
}
let bo = (0, h.zD)(S.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () => V.intl.string(V.t.w4fvxe),
        usePredicate: () => !C8(),
        useValue: bs,
        setValue: br,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: ba,
    }),
    bu = (0, h.zD)(S.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => V.intl.string(V.t.sJYh5t),
        useSubtitle: () =>
            V.intl.format(V.t.cf9mvV, { helpdeskArticle: eb.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: C8,
        useValue: bs,
        setValue: br,
        useSearchTerms: () => [V.intl.string(V.t.VkS7Yd)],
        useDisabled: ba,
    }),
    bd = (0, h.AK)(S.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: S.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = SS(2);
            return V.intl.format(V.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = Sx();
            return { type: T.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, _.bG)([i5.Ay], () => i5.Ay.getGamesSeen(!1).some((e) => !(0, Sc.n1)(e))) && (0, nh.xl)(),
    }),
    bc = (0, h.gN)(S.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [bd] });
var bg = n(972737);
let bm = (0, h.zD)(S.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => V.intl.string(V.t.XuADY2),
        useSubtitle: () =>
            V.intl.format(V.t.FNqmmX, { helpdeskArticle: eb.A.getArticleURL(I.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, _.bG)([CH.A], () => CH.A.hasConsented(I.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, CM.U)([I.YAq.USAGE_STATISTICS], []).catch(bg.i)
                : (0, bg.O)({
                      header: V.intl.string(V.t.OdPCbN),
                      body: V.intl.string(V.t.MGWabA),
                      confirmText: V.intl.string(V.t["D3+rU4"]),
                      cancelText: V.intl.string(V.t.kYpG0u),
                      onConfirm: () => (0, CM.U)([], [I.YAq.USAGE_STATISTICS]).catch(bg.i),
                  });
        },
        useSearchTerms: () => [V.intl.string(V.t.XuADY2)],
        useDisabled: CW.uM,
    }),
    bA = (0, h.zZ)(S.X.DATA_USAGE_CATEGORY, {
        useTitle: () => V.intl.string(V.t.QDAriI),
        useInlineNotice: CQ,
        initialize: () => {
            CH.A.fetchedConsents || (0, CM.Q)();
        },
        buildLayout: () => [C3, bm, C4._, bo, bi, ...CY, CJ, C2, bc],
    });
var bE = n(15762);
let bh = (0, h.zD)(S.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => V.intl.string(bE.default.F3llsQ),
    useSubtitle: () => V.intl.string(bE.default["6goWcz"]),
    useValue: U.Sy.useSetting,
    setValue: function (e) {
        (U.Sy.updateSetting(e),
            td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: S_.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function bS() {
    let e = U.JG.useSetting();
    return (0, _.yK)(
        [gQ.Ay, lv.A],
        () => {
            let t = new Set(e);
            return gQ.Ay.getFlattenedGuildIds().filter((e) => null != lv.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let bx = (0, h.AK)(S.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = bS();
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
                    ((e = bS()),
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
                                    icon: (0, p.jsx)(SG, { guild: t[0], size: Sg.CD }),
                                    shape: Sg.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, p.jsx)(SG, { guild: t[1], size: Sg.CD }), shape: Sg.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, p.jsx)(SG, { guild: t[0], size: Sg.CD }),
                                    shape: Sg.e0.SQUIRCLE,
                                },
                            });
            return { type: T.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: S.X.ACTIVITY_PRIVACY_PANEL,
    }),
    bT = (0, h.gN)(S.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [bx] }),
    bp = (0, h.Qx)(S.X.PROFILE_PRIVACY_SETTING, {
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
            let i = (0, Sj.gS)(t, e);
            null != i &&
                (0, lT.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("763786")]).then(
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
    bf = (0, h.zZ)(S.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.ul884f),
        useSubtitle: () =>
            V.intl.format(V.t.N4jSgR, {
                learnMoreUrl: eb.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [bp, bh, bT],
    });
var b_ = n(952270),
    bI = n(678538);
let bN = { [eJ.tR.REAL_MONEY_GAMING]: bI.default.pmIitA },
    bC = Object.keys(bN).map(Number),
    bb = (0, h.E2)(S.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [V.intl.string(bI.default.foQaI1)],
        usePredicate: C8,
        Component: function () {
            let e = f.useMemo(
                    () =>
                        bC.map((e) => ({
                            id: String(e),
                            value: e,
                            label: V.intl.string(bN[e]),
                            leading: b_.EyeSlashIcon,
                        })),
                    [],
                ),
                t = U.XZ.useSetting();
            return (0, p.jsx)(pd.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(U.XZ.getSetting());
                    for (let e of bC) t.has(e) ? n.add(e) : n.delete(e);
                    U.XZ.updateSetting([...n]);
                },
                label: V.intl.string(bI.default.foQaI1),
                description: V.intl.format(bI.default["z/MfaY"], {
                    helpdeskArticle: eb.A.getArticleURL(I.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: V.intl.string(bI.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    by = (0, h.zZ)(S.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => V.intl.string(bI.default.XUj46U),
        usePredicate: C8,
        buildLayout: () => [bu, bl, bb],
    });
var bv = n(714763),
    bj = n(814278),
    bO = n(730852),
    bL = n(913122),
    bR = n(977997),
    bD = n(144485);
async function bP(e, t) {
    if (e) {
        ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, bj.to)(1), t?.());
        } catch (t) {
            let e = new bL.LG(t);
            (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                C$.A.show({
                    title: V.intl.string(V.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? V.intl.string(V.t.eAn6z2),
                }));
        }
    } else (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function bG(e) {
    let t,
        n,
        i =
            ((t = bR.A.getVoiceStateForUser(cA.default.getId())),
            (n = lb.A.getChannel(t?.channelId)),
            cA.default.getSessionId() === t?.sessionId && null != n && n.type !== I.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? bD.A.openSecureFramesUpdateConfirmation({
              title: e ? V.intl.string(V.t.DRFN1B) : V.intl.string(V.t.q29xJz),
              subtitle: e ? V.intl.string(V.t.y015ZY) : V.intl.string(V.t.E66FQn),
              confirmText: V.intl.string(V.t.aTuFYT),
              onConfirm: async () => {
                  await bP(e, () => {
                      (bO.default.disconnect(), bO.default.selectVoiceChannel(i));
                  });
              },
          })
        : await bP(e);
}
n(603266);
let bM = (0, h.zD)(S.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => V.intl.string(V.t["opi/XK"]),
    useSubtitle: () => V.intl.format(V.t["/T+ZlP"], { helpArticle: (0, bj.Lu)() }),
    useValue: function () {
        return (0, _.bG)([bv.A], () => bv.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        bG(e);
    },
});
var bU = n(787392);
function bV() {
    return (0, _.yK)([bU.A], () => bU.A.getUserIds());
}
var bk = n(803306),
    bw = n(966327),
    bF = n(774156);
function bB(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eX.Ay)(),
        l = (0, _.bG)([sx.default], () => sx.default.getUser(t)),
        s = u4.Ay.getFormattedName(l),
        r = f.useCallback(() => {
            (0, bj.kj)(t);
        }, [t]),
        a = f.useCallback(() => (0, pb.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        f.useEffect(() => {
            (0, bk.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: bF.uW,
            children: [
                null != l && (0, p.jsx)(bw.A, { className: bF.my, user: l, size: v._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: bF.Qq,
                    children: [
                        (0, p.jsx)(n5.D, {
                            className: bF.Xh,
                            onClick: a,
                            children: (0, p.jsx)(J.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, p.jsx)(J.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: V.intl.format(V.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, p.jsx)(n5.D, { onClick: r, className: bF.Qz, children: (0, p.jsx)(lc.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function bz(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, bj.tC)(i.timestamp),
        r = f.useCallback(() => {
            (0, bj.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: bF.Qq,
                children: [
                    (0, p.jsx)(J.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: V.intl.format(V.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, p.jsx)(J.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, p.jsx)(n5.D, {
                className: bF.Kk,
                onClick: r,
                children: (0, p.jsx)(dt.P, { size: "md", color: n1.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function bX(e) {
    let { userId: t } = e,
        n = (0, _.yK)([bU.A], () =>
            K()(bU.A.getUserVerifiedKeys(t))
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
            (0, p.jsx)(bB, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, p.jsxs)(
                    f.Fragment,
                    {
                        children: [
                            (0, p.jsx)(bz, { className: bF.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, p.jsx)("div", { className: bF.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var bY = n(464946),
    bH = n(492422);
let bW = (0, h.E2)(S.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [V.intl.string(V.t["5b3FNI"])],
        usePredicate: function () {
            let e = bV();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = bV();
            return (0, p.jsxs)(bY.h, {
                children: [
                    (0, p.jsx)(bY._, {
                        header: V.intl.string(V.t["5b3FNI"]),
                        description: V.intl.format(V.t.jrTSWU, { helpArticle: (0, bj.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: bH.A, children: (0, p.jsx)(bX, { userId: e }) }, e)),
                ],
            });
        },
    }),
    bK = (0, h.zZ)(S.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => V.intl.string(V.t.bTwjaz),
        usePredicate: () => (0, e8.isDesktop)(),
        buildLayout: () => [bM, bW],
    }),
    bZ = (0, h.t_)(S.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        buildLayout: () => [bA, by, bf, bK],
    }),
    bq = (0, h.i4)(S.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.OAuOHD),
        icon: CG.m,
        buildLayout: () => [bZ],
    });
var bQ = n(476713);
let bJ = (0, h.AK)(S.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.O65dzZ),
        useTitle: () => V.intl.string(V.t["f6kk+r"]),
        destinationKey: S.X.AUTHORIZED_APPS_CATEGORY,
    }),
    b$ = (0, h.gN)(S.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [bJ] });
var b0 = n(875444);
function b1(e, t) {
    let n = (0, _.bG)([xe.default], () => xe.default.getFetchState()),
        i = (0, _.bG)([xe.default], () =>
            e ? xe.default.getNewestTokensForNonChildrenApplications() : xe.default.getNewestTokens(),
        ),
        l = f.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, b0.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        f.useEffect(() => {
            t || SQ.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xe.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var b2 = n(514479);
function b3() {
    return (0, p.jsxs)("div", {
        className: b2.d,
        children: [
            (0, p.jsx)(J.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: b2.x,
                children: V.intl.string(V.t["+0U77d"]),
            }),
            (0, p.jsx)(J.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.format(V.t.V8wClM, {
                    helpdeskArticle: eb.A.getArticleURL(I.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let b4 = (0, h.E2)(S.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = b1(!0, !0);
        return e ? (0, p.jsx)(oO.y, {}) : (0, p.jsx)(b3, {});
    },
    useSearchTerms: () => [V.intl.string(V.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = b1(!0, !0);
        return e || 0 === t.length;
    },
});
function b5() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = b1(!0, !0);
    return !e && t.length > 0;
}
let b6 = (0, h.zD)(S.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => V.intl.string(V.t.W8JtfT),
        useSubtitle: () => V.intl.string(V.t.a99KKy),
        useSearchTerms: () => [V.intl.string(V.t["Uv/eTx"])],
        useValue: () => U.Zk.useSetting(),
        setValue: (e) => U.Zk.updateSetting(e),
        usePredicate: b5,
    }),
    b8 = (0, h.Qx)(S.X.IN_GAME_DMS_SETTING, {
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
        usePredicate: b5,
    });
function b7() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = b1(!0, !0);
    return {
        sortedGames: f.useMemo(() => e.toSorted((e, t) => oF.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var b9 = n(306537);
function ye(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: l } = e;
    return (
        (0, eI.Ay)(() => {
            (0, CZ.N)(l, Cq.YX.VIEWED);
        }),
        (0, p.jsx)(iK.w, { type: "info", message: t, action: { text: n, onClick: i }, role: "none" })
    );
}
function yt(e, t) {
    return {
        handleLearnMore: f.useCallback(() => {
            (t(), (0, CZ.N)(e, Cq.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: f.useCallback(() => {
            (_2.A.showAgeVerificationGetStartedModal({ entryPoint: b9.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, CZ.N)(e, Cq.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yn() {
    let e,
        t = (0, CW.uM)(),
        n = (0, Id.fk)(),
        i = (0, Iu.b8)(),
        l = (0, NJ.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : l && (e = "teen"), null != e) && (0, _6.n)(_4.Vc)) return e;
    }
}
var yi = n(687123),
    yl = n(444802);
function ys() {
    let e = (0, yl.WX)();
    f.useEffect(() => {
        (0, CZ.N)(Cq.YA.AGE_CONFIRMATION_NOTICE, Cq.YX.VIEWED);
    }, []);
    let t = f.useCallback(() => {
            (window.open(eb.A.getArticleURL(e), "_blank"), (0, CZ.N)(Cq.YA.AGE_CONFIRMATION_NOTICE, Cq.YX.LEARN_MORE));
        }, [e]),
        n = f.useCallback(() => {
            (_2.A.showAgeVerificationGetStartedModal({ entryPoint: b9.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, CZ.N)(Cq.YA.AGE_CONFIRMATION_NOTICE, Cq.YX.CONFIRM_AGE));
        }, []);
    return (0, p.jsx)(iK.w, {
        type: "info",
        message: V.intl.format(V.t.mFgsfg, { hook: (e, n) => (0, p.jsx)(nr.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: V.intl.string(V.t.FDSSia), onClick: n },
    });
}
function yr() {
    let e = (0, Id.aX)(yi.t.REACTIVE_CHECK),
        t = (0, Iu.b8)();
    return f.useMemo(() => {
        if (e && !t) return { type: T.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: ys };
    }, [e, t]);
}
var ya = n(323073),
    yo = n(386171),
    yu = n(96607);
let yd = (0, h.zD)(S.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => V.intl.string(V.t.gvC6q7),
        useSubtitle: () => V.intl.string(V.t.zirUC1),
        useValue: yo.hT,
        useDisabled: function () {
            let e = (0, yu.A)() ?? !0,
                t = (0, ya.sP)(),
                n = (0, Iu.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, ya.p5)() && e
                ? _2.A.showAgeVerificationGetStartedModal({ entryPoint: b9.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : U.Qe.updateSetting(e);
        },
    }),
    yc = (0, h.zD)(S.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => V.intl.string(V.t["L+yTsa"]),
        useSubtitle: () => V.intl.string(V.t["t6i/jW"]),
        useValue: yo.tI,
        useDisabled: function () {
            let e = (0, yu.A)() ?? !0,
                t = (0, ya.sP)(),
                n = (0, Iu.yM)();
            return f.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, ya.p5)() && e
                ? _2.A.showAgeVerificationGetStartedModal({ entryPoint: b9.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : U.Kg.updateSetting(e);
        },
    }),
    yg = (0, h.AK)(S.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t.hOXd45),
        destinationKey: S.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    ym = (0, h.gN)(S.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yg] });
n(667532);
var yA = n(390248),
    yE = n(632119),
    yh = n(945276),
    yS = n(389737),
    yx = n(566769);
function yT() {
    let e,
        t = (0, yh.A)() ?? !0,
        n = (0, CW.uM)(),
        i = (0, CW.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, oo.cf)([aP.A], () => aP.A.settings.textAndImages?.explicitContentSettings ?? (0, yE.C$)())),
        {
            explicitContentGuilds: (0, yE.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, yE.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, yE.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yA.hK)() && t.includes(eJ.TO.SHOW)
            ? _2.A.showAgeVerificationGetStartedModal({ entryPoint: b9.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yE.Jz)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(N0.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yS.E, {
        description: V.intl.string(V.t.Wnojv1),
        children: [
            (0, p.jsx)(yx.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yx.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yx.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? V.intl.string(N0.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function yp() {
    let e,
        t = (0, yh.A)() ?? !0,
        n = (0, CW.uM)(),
        i = (0, CW.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, oo.cf)([aP.A], () => aP.A.settings.textAndImages?.goreContentSettings ?? (0, yl.T4)())),
        {
            goreContentGuilds: (0, yl.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yl.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yl.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yA.hK)() && t.includes(eJ.TO.SHOW)
            ? _2.A.showAgeVerificationGetStartedModal({ entryPoint: b9.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yl.qY)(e);
    }
    let o = [
            { value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) },
            { value: eJ.TO.BLOCK, label: V.intl.string(V.t["D/157Y"]) },
        ],
        u = [{ value: eJ.TO.BLUR, label: V.intl.string(V.t.S49Uad) }],
        d = { value: eJ.TO.SHOW, label: V.intl.string(V.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? V.intl.string(N0.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yS.E, {
        description: V.intl.string(V.t.XgH9eh),
        children: [
            (0, p.jsx)(yx.A, {
                title: V.intl.string(V.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yx.A, {
                title: V.intl.string(V.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yx.A, {
                title: V.intl.string(V.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? V.intl.string(N0.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var yf = n(875162),
    y_ = n(636745);
let yI = (0, h.E2)(S.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yl.WX)(),
            t = f.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: V.intl.string(V.t.GYpoAq),
                        component: yT,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: V.intl.string(V.t["16/3Bi"]),
                        component: yp,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, p.jsxs)(bY.h, {
            children: [
                (0, p.jsx)(bY._, {
                    header: V.intl.string(V.t["Hj/But"]),
                    description: V.intl.format(V.t.dliU4j, { learnMoreLink: eb.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(yf.A, { tabs: t, orientation: "vertical", tabsClassName: y_.v }),
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
var yN = n(639555),
    yC = n(617641),
    yb = n(546140),
    yy = n(594061);
let yv = (0, h.zD)(S.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => V.intl.string(V.t.qFsx5q),
        useSubtitle: () => V.intl.format(V.t.lunaRv, { learnMoreLink: eb.A.getArticleURL(I.MVz.SAFETY_ALERTS) }),
        useValue: yb.L,
        setValue: function (e) {
            return yy.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = CV._t.create({ value: e });
                },
                yy.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, yC.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, yN.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yh.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    yj = (0, h.zZ)(S.X.CONTENT_CATEGORY, {
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
                S = CQ(),
                x =
                    ((l = (0, CW.uM)()),
                    (s = (0, Id.fk)()),
                    (r = (0, Iu.b8)()),
                    (a = (0, NJ.Z)()),
                    (o = yt(Cq.YA.AGE_CONFIRMATION_NOTICE, _5)),
                    (u = yt(Cq.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _1.M0)),
                    (d = f.useCallback(() => {
                        (0, CZ.N)(Cq.YA.AGE_CONFIRMATION_NOTICE, Cq.YX.VIEWED);
                    }, [])),
                    (c = f.useCallback(() => {
                        (0, CZ.N)(Cq.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cq.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (!l && (0, _6.n)(_4.Vc)) {
                            if (s && !r)
                                return {
                                    type: T.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: d,
                                    text: V.intl.format(_7.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: V.intl.string(_7.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: T.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: c,
                                    text: V.intl.format(_7.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { text: V.intl.string(V.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [s, l, a, r, u, c, d, o])),
                _ =
                    ((e = (0, NJ.Z)()),
                    (t = (0, yl.WX)()),
                    (n = f.useCallback(() => {
                        (window.open(eb.A.getArticleURL(t), "_blank"),
                            (0, CZ.N)(Cq.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cq.YX.LEARN_MORE));
                    }, [t])),
                    (i = f.useCallback(() => {
                        (0, CZ.N)(Cq.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cq.YX.VIEWED);
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
                    ((g = (0, Id.SJ)()),
                    (m = (0, Iu.b8)()),
                    (A = g && !m),
                    (E = f.useCallback(() => {
                        (_2.A.showAgeVerificationGetStartedModal({ entryPoint: b9.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, CZ.N)(Cq.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cq.YX.LEARN_MORE));
                    }, [])),
                    (h = f.useCallback(() => {
                        (0, CZ.N)(Cq.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cq.YX.VIEWED);
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
                N = yr();
            return S ?? x ?? N ?? I ?? _;
        },
        buildLayout: () => [yI, yv, yd, yc, ym],
    });
var yO = n(923457),
    yL = n(750714);
let yR = (0, h.Qx)(S.X.DM_SPAM_SETTING, {
        useTitle: () => V.intl.string(V.t.puwSkY),
        useSubtitle: () => V.intl.string(V.t["+sXN3T"]),
        useValue: function () {
            let e = U.he.useSetting(),
                t = U.cj.useSetting(),
                n = (0, _.bG)([sx.default], () => sx.default.getCurrentUser()),
                i = (0, Id.yv)(yO.p.SPAM_FILTERS);
            return e !== eJ.he.DEFAULT_UNSET
                ? e
                : n?.nsfwAllowed === !1 && i
                  ? eJ.he.FRIENDS_AND_NON_FRIENDS
                  : (yL.xY.get(t) ?? eJ.he.NON_FRIENDS);
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
    yD = (0, h.zD)(S.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => V.intl.string(V.t["7x9dyE"]),
        useValue: function () {
            let e = U.FA.useSetting();
            return f.useMemo(() => (0, ii.Lx)(e), [e]).all;
        },
        setValue: function (e) {
            U.FA.updateSetting(e ? I.yKI : I.yKI & ~I.dzt.NO_RELATION);
        },
        useDisabled: function () {
            return (0, CW.uM)();
        },
    }),
    yP = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => V.intl.string(V.t.NfeuZ3),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? uf.UI(t, I.dzt.MUTUAL_FRIENDS) : uf.iE(t, I.dzt.MUTUAL_FRIENDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, CW.uM)();
        },
    }),
    yG = (0, h.zD)(S.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => V.intl.string(V.t.qsMfsH),
        useSubtitle: () => V.intl.string(V.t["6DqAp0"]),
        useValue: function () {
            let e = U.FA.useSetting(),
                t = f.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = U.FA.getSetting();
            U.FA.updateSetting(e ? uf.UI(t, I.dzt.MUTUAL_GUILDS) : uf.iE(t, I.dzt.MUTUAL_GUILDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, CW.uM)();
        },
    }),
    yM = (0, h.FW)(S.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => V.intl.string(V.t.wTdS6S),
        buildLayout: () => [yD, yP, yG],
    });
var yU = n(420825);
let yV = (0, h.zD)(S.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => V.intl.string(V.t["jK+wdr"]),
        useSubtitle: () => V.intl.string(V.t["RYh/pW"]),
        useValue: () => !(0, yU.q)(),
        setValue: function (e) {
            U.Zd.updateSetting(!e);
        },
    }),
    yk = (0, h.zZ)(S.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["5gxWrt"]),
        useSubtitle: () => V.intl.string(V.t.QVbF3l),
        useSubnavLabel: () => V.intl.string(V.t.fyA115),
        useInlineNotice: CQ,
        buildLayout: () => [yM, yV],
    });
var yw = n(994500),
    yF = n(428678),
    yB = n(49229),
    yz = n(730134),
    yX = n(276573);
function yY(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: yX.wx,
        children: [
            (0, p.jsx)("div", {
                className: yX.zc,
                children: i ? (0, p.jsx)(yF.K, {}) : (0, p.jsx)(b_.EyeSlashIcon, {}),
            }),
            (0, p.jsxs)("div", {
                className: yX.Qq,
                children: [
                    (0, p.jsx)(J.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: V.intl.string(i ? V.t.PFOUKW : V.t["93ZDWE"]),
                    }),
                    (0, p.jsx)(J.E, {
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
function yH(e) {
    let { userId: t, last: n } = e,
        i = (0, _.bG)([yw.A], () => yw.A.isBlocked(t)),
        l = (0, _.bG)([sx.default], () => sx.default.getUser(t)),
        [s, r] = f.useState(!1),
        a = f.useCallback(() => {
            (r(!0),
                i
                    ? yB.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : yB.A.unignoreUser(t, tk.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == l
        ? null
        : (0, p.jsxs)("div", {
              className: ic()(yX.nM, { [yX.fW]: n }),
              children: [
                  (0, p.jsxs)("div", {
                      className: yX.eF,
                      children: [
                          (0, p.jsx)(yz.A, { user: l, size: v._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: yX.Qq,
                              children: [
                                  (0, p.jsx)(J.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, p.jsx)(J.E, {
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
function yW(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = f.useState(5);
    return (0, p.jsx)(bY.h, {
        children: (0, p.jsxs)("div", {
            className: yX.Nr,
            children: [
                (0, p.jsx)(yY, { listType: n, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: yX.jS,
                    children: t.slice(0, i).map((e, n) => (0, p.jsx)(yH, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, p.jsx)("div", {
                          className: yX.vM,
                          children: (0, p.jsx)(n5.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: yX.Qf,
                              children: (0, p.jsx)(J.E, {
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
let yK = (0, h.E2)(S.X.BLOCKED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t.PFOUKW)],
        usePredicate: () => (0, _.bG)([yw.A], () => yw.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, _.yK)([yw.A], () => yw.A.getBlockedIDs());
            return (0, p.jsx)(yW, { userIds: e, listType: "blocked" });
        },
    }),
    yZ = (0, h.E2)(S.X.IGNORED_USERS, {
        useSearchTerms: () => [V.intl.string(V.t["93ZDWE"])],
        usePredicate: () => (0, _.bG)([yw.A], () => yw.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, _.yK)([yw.A], () => yw.A.getIgnoredIDs());
            return (0, p.jsx)(yW, { userIds: e, listType: "ignored" });
        },
    }),
    yq = (0, h.zZ)(S.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => V.intl.string(V.t["+Iryf3"]),
        useSubtitle: () =>
            V.intl.format(V.t["0aNQo9"], { helpArticle: eb.A.getArticleURL(I.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [yK, yZ],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, _.cf)([yw.A], () => ({
                hasBlockedUsers: yw.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: yw.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var yQ = n(22385),
    yJ = n(556534),
    y$ = n(111159),
    y0 = n(152056),
    y1 = n(428031),
    y2 = n(978433);
let y3 = { label: () => V.intl.string(V.t["32u1Dx"]), value: yQ.YG };
var y4 = n(307863),
    y5 = n(954225);
function y6() {
    return (0, y4.e)() ? V.intl.string(V.t.PMsfcH) : V.intl.string(V.t.RAQUSN);
}
function y8(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let y7 = (0, h.zD)(S.X.PERMISSIONS_DMS_SETTING, {
    useTitle: y6,
    useSubtitle: function () {
        let e = (0, yJ.Tx)(),
            t = (0, yJ.q9)(),
            n = (0, y4.e)();
        return e === yQ.YG
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
        let e = (0, yJ.Tx)(),
            t = U.$s.useSetting().includes(e),
            n = (0, y1.K)();
        return e === yQ.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, CW.uM)();
        return (0, yJ.Tx)() === yQ.YG && e;
    },
    setValue: function (e) {
        let t = yQ.xk.getState().selectedGuildId;
        if (t === yQ.YG) {
            var n;
            ((n = !e),
                (0, bg.O)({
                    header: V.intl.string(V.t["uUr+GR"]),
                    body: V.intl.string(V.t.hjGJBp),
                    confirmText: V.intl.string(V.t.gm1Vej),
                    cancelText: V.intl.string(V.t.p89ACt),
                    confirmButtonColor: s5.$n.Colors.BRAND,
                    onConfirm: function () {
                        (U.n6.updateSetting(n), y8(n, !1));
                    },
                    onCancel: function () {
                        (U.n6.updateSetting(n), U.$s.updateSetting(n ? lv.A.getGuildIds() : []), y8(n, !0));
                    },
                }));
        } else {
            let n = (0, ii.Tb)();
            (e ? n.delete(t) : n.add(t),
                U.$s.updateSetting(Array.from(n)),
                td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: y5.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var y9 = n(116774),
    ve = n(953298);
function vt(e, t) {
    td.default.track(I.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function vn() {
    return V.intl.string(V.t["3o2ojh"]);
}
let vi = (0, h.zD)(S.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: vn,
        useSubtitle: function () {
            let e = (0, yJ.q9)(),
                t = eb.A.getArticleURL(I.MVz.MESSAGE_REQUESTS);
            return e
                ? V.intl.format(V.t.WpnWLc, { helpdeskArticle: t })
                : V.intl.format(V.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, yJ.Tx)(),
                t = (0, y1.K)(),
                n = U.$s.useSetting().includes(e),
                i = (0, y9.s)(),
                l = (0, CW.uM)(),
                s = U.YX.useSetting(),
                r = U.Zr.useSetting().includes(e);
            return !!i || (e === yQ.YG && l ? !s : e === yQ.YG ? !t && !s : !n && !r);
        },
        useDisabled: function () {
            let e = (0, yJ.Tx)(),
                t = (0, CW.uM)(),
                n = (0, y1.K)(),
                i = U.$s.useSetting().includes(e),
                l = (0, y9.s)();
            return e === yQ.YG ? n || t || l : i || l;
        },
        setValue: function (e) {
            let t = yQ.xk.getState().selectedGuildId;
            if (!e && (0, ve.w)())
                return void _2.A.showAgeVerificationGetStartedModal({ entryPoint: b9.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === yQ.YG) {
                var n;
                ((n = !e),
                    (0, bg.O)({
                        header: V.intl.string(V.t.yAfu1p),
                        body: V.intl.string(V.t.Ry2z74),
                        confirmText: V.intl.string(V.t.gm1Vej),
                        cancelText: V.intl.string(V.t.p89ACt),
                        confirmButtonColor: s5.$n.Colors.BRAND,
                        onConfirm: function () {
                            (U.YX.updateSetting(n), vt(n, !1));
                        },
                        onCancel: function () {
                            (U.YX.updateSetting(n), U.Zr.updateSetting(n ? lv.A.getGuildIds() : []), vt(n, !0));
                        },
                    }));
            } else {
                let n = (0, ii.xo)();
                (e ? n.delete(t) : n.add(t),
                    U.Zr.updateSetting(Array.from(n)),
                    td.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: y5.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eL.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    vl = (0, h.E2)(S.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [y6(), vn()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, yQ.xk)(),
                l = (0, _.bG)([gQ.Ay], () => gQ.Ay.getFlattenedGuildIds()),
                s = (0, _.bG)([lv.A], () => lv.A.getGuilds()),
                r =
                    ((e = U.$s.useSetting()),
                    (t = (0, y1.K)()),
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
                    y0.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = yQ.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === yQ.YG && null != a
                                ? i(a)
                                : "" === e && n !== yQ.YG && i(yQ.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = f.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...y3,
                            id: y3.value,
                            label: y3.label(),
                            leading: (0, p.jsx)("div", {
                                className: y2.KP,
                                children: (0, p.jsx)(y$.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: y2.cl,
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
                                    leading: (0, p.jsx)(g9.Ay, {
                                        className: y2.cl,
                                        guild: n,
                                        size: g9.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [l, s]),
                u = n === yQ.YG && r > 0;
            return (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(pd.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    u &&
                        (0, p.jsx)(J.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: y2.h_,
                            children: V.intl.format(V.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, p.jsx)(
                                        J.E,
                                        { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    vs = (0, h.E2)(S.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, yJ.Tx)(),
                t = yn();
            return e === yQ.YG && null != t;
        },
        Component: function () {
            let e = yn(),
                t = yt(Cq.YA.AGE_CONFIRMATION_NOTICE, _5),
                n = yt(Cq.YA.CONTENT_AND_SOCIAL_NOTICE, _1.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, p.jsx)(ye, {
                        noticeType: Cq.YA.AGE_CONFIRMATION_NOTICE,
                        body: V.intl.format(_7.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: V.intl.string(_7.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, p.jsx)(ye, {
                        noticeType: Cq.YA.CONTENT_AND_SOCIAL_NOTICE,
                        body: V.intl.format(_7.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: V.intl.string(V.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    vr = (0, h.zZ)(S.X.PERMISSIONS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.Y5GYcX),
        useSubnavLabel: () => V.intl.string(V.t.YUU0RF),
        useInlineNotice: function () {
            let e = CQ(),
                t = yr();
            if ((0, yJ.Tx)() === yQ.YG) return e ?? t;
        },
        buildLayout: () => [vl, y7, vi, vs],
    }),
    va = (0, h.zZ)(S.X.SPAM_FILTERS_CATEGORY, { useTitle: () => V.intl.string(V.t.Qwuoic), buildLayout: () => [yR] }),
    vo = (0, h.zZ)(S.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = b7();
            function t(e, t) {
                return (0, p.jsx)(
                    J.E,
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
                let { sortedGames: e } = b7();
                return f.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, p.jsx)("img", {
                                src: M.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: Sg.CD,
                                height: Sg.CD,
                            }),
                            shape: Sg.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, p.jsx)("img", {
                                    src: M.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: Sg.YP,
                                    height: Sg.YP,
                                }),
                                shape: Sg.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: T.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [V.intl.string(V.t.YpCiMt)],
        initialize: () => {
            SQ.A.fetch();
        },
        buildLayout: () => [b6, b8, b4, b$],
    }),
    vu = (0, h.t_)(S.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        buildLayout: () => [yj, va, vr, yk, vo, yq],
    }),
    vd = (0, h.i4)(S.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.Cz07t8),
        icon: bQ.l,
        buildLayout: () => [vu],
    });
var vc = n(782603),
    vg = n(899847),
    vm = n(695515);
let vA = (0, h.Hn)(S.X.MOBILE_NOTIFICATION_DELAY, {
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
    vE = (0, h.zD)(S.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => V.intl.string(V.t["btbS+Z"]),
        useSubtitle: () =>
            V.intl.format(V.t.Q5crhR, { onClick: () => (0, na.openUserSettings)(S.X.TTS_PLAYBACK_RATE) }),
        useValue: U.on.useSetting,
        setValue: U.on.updateSetting,
    }),
    vh = (0, h.Qx)(S.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.JZxxGx),
        useSubtitle: () => V.intl.string(V.t.HDLtJl),
        useValue: () => (0, _.bG)([aX.A], () => aX.A.getTTSType()),
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
    vS = S.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    vx = (0, h.bd)(vS, {
        useTitle: (e) => (e ? V.intl.string(V.t.RyimDk) : V.intl.string(V.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return t_(vS, {
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
        buildLayout: () => [vA, vE, vh],
    }),
    vT = (0, h.zZ)(S.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => V.intl.string(V.t["31DySj"]),
        buildLayout: () => [vx],
    }),
    vp = (0, h.zD)(S.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => V.intl.string(V.t.VH8AIJ),
        useSubtitle: () => V.intl.string(V.t["9K4qwX"]),
        useValue: function () {
            return (0, _.bG)([aX.A], () => !aX.A.getDisableUnreadBadge());
        },
        setValue: (e) => aZ.default.setDisableUnreadBadge(!e),
    }),
    vf = (0, h.zZ)(S.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => V.intl.string(V.t.l6w3Vj),
        buildLayout: () => [vp],
    });
var v_ = n(840559),
    vI = n(997187);
let vN = (0, C5.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var vC = n(723923);
let vb = vC.px.map((e) =>
        (0, h.zD)(`${S.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, _.cf)([vI.A], () => vI.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, v_.CA)(e.category, t),
        }),
    ),
    vy = (0, h.Tf)(S.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => V.intl.string(V.t.Ra9Pwk),
        useSubtitle: () => V.intl.string(V.t.iYjQ8X),
        useLabel: () => V.intl.string(V.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, _.cf)([vI.A], () => vI.A.getEmailSettings());
            return vC.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, v_.NI)(),
        useVariant: () => "critical-secondary",
    }),
    vv = (0, h.zZ)(S.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => V.intl.string(V.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = vN.useConfig({ location: "Email Settings Category" });
            return e ? V.intl.string(V.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = vI.A.getEmailSettings();
            e || (0, v_.cR)();
        },
        buildLayout: () => [...vb, vy],
    }),
    vj = (0, h.zD)(S.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["/0WCll"]),
        useSubtitle: () => V.intl.string(V.t.wF9ih3),
        useValue: function () {
            return (0, _.bG)([aX.A], () => aX.A.getDesktopType()) !== I.nRU.NEVER;
        },
        setValue: (e) => aZ.default.setDesktopType(e ? I.nRU.ALL : I.nRU.NEVER),
    });
var vO = n(832712),
    vL = n(543465),
    vR = n(790782);
let vD = (0, h.zD)(S.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => V.intl.string(V.t["k6m/si"]),
    useSubtitle: () => V.intl.string(V.t.LGynPs),
    useValue: () => (0, _.bG)([vL.Ay], () => vL.Ay.useNewNotifications),
    setValue: function (e) {
        (vO.A.setAccountFlag(S_.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hv.w.set("turnedOffNewNotifications", !0),
                td.default.track(I.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lv.A.getGuildsArray().filter(
                        (e) => vL.Ay.resolveGuildUnreadSetting(e) === vR.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, _.bG)(
            [sx.default, vL.Ay],
            () =>
                sx.default.getCurrentUser()?.isStaff() ||
                sx.default.getCurrentUser()?.isStaffPersonal() ||
                vL.Ay.useNewNotifications,
        ),
});
var vP = n(534654);
let vG = (0, h.zD)(S.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => V.intl.string(V.t.z9h8Ym),
        useSubtitle: () => V.intl.string(V.t.TummoQ),
        useValue: () => (0, _.bG)([aX.A], () => aX.A.screenDowntimeReminder),
        setValue: (e) => aZ.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, vP.A)(),
                t = (0, NZ.Du)();
            return e && t;
        },
    }),
    vM = (0, h.zD)(S.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => V.intl.string(V.t.onrAy7),
        useSubtitle: () => V.intl.string(V.t["/071J7"]),
        useValue: U.gY.useSetting,
        setValue: (e) => U.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, vP.A)(),
                t = (0, NZ.Du)();
            return e && t;
        },
    }),
    vU = (0, h.zD)(S.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.NjOMvh),
        useValue: U.oz.useSetting,
        setValue: function (e) {
            (U.oz.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S_.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [V.intl.string(V.t.hi4dSk)],
    }),
    vV = (0, h.zD)(S.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.sQQgFj),
        useValue: U.NR.useSetting,
        setValue: function (e) {
            (U.NR.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S_.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    vk = (0, h.zD)(S.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.FSNIvs),
        useValue: U.Yh.useSetting,
        setValue: function (e) {
            (U.Yh.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S_.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    vw = (0, h.zD)(S.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.xBLMhQ),
        useValue: U.T3.useSetting,
        setValue: function (e) {
            (U.T3.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S_.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var vF = n(815807);
let vB = (0, h.Hn)(S.X.REACTION_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: V.intl.string(V.t["9x/RtT"]), value: eJ.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: V.intl.string(V.t.fJAbQd), value: eJ.Tz.ONLY_DMS },
            { id: "disabled", label: V.intl.string(V.t["xu+UDU"]), value: eJ.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: U.Zp.useSetting,
        setValue: (e) => (0, vF.n4)(e, U.Zp.getSetting()),
    }),
    vz = (0, h.zD)(S.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t["k51K1+"]),
        useValue: U.Qr.useSetting,
        setValue: function (e) {
            (U.Qr.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S_.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    vX = (0, C5.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    vY = (0, h.zD)(S.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.G8NPz6),
        useValue: U.zS.useSetting,
        setValue: function (e) {
            (U.zS.updateSetting(e),
                td.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S_.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => vX.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    vH = (0, h.FW)(S.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => V.intl.string(V.t.FEVRDV),
        buildLayout: () => [vk, vU, vV, vz, vY, vw, vB],
    }),
    vW = (0, h.zD)(S.X.TASK_BAR_FLASHING, {
        useTitle: () => V.intl.string(V.t.xSmFQG),
        useSubtitle: () => V.intl.string(V.t.bd4j4x),
        useValue: () => (0, _.bG)([aX.A], () => aX.A.taskbarFlash),
        setValue: (e) => aZ.default.setTaskbarFlash(e),
        usePredicate: () => (0, nh.uF)(),
    }),
    vK = (0, h.zZ)(S.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => V.intl.string(V.t["/dp6yY"]),
        buildLayout: () => [vj, vW, vH, vD, vM, vG],
    });
var vZ = n(965957),
    vq = n(312671),
    vQ = n(235079);
let vJ = (0, h.zD)(S.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aY.A.useHolidaySoundpack();
        return null == e ? "" : V.intl.format(V.t["E/OyBr"], { soundpack: V.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, _.bG)([vq.A], () => vq.A.getSoundpack()),
            t = aY.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aY.A.getHolidaySoundpack();
        (tE()(null != t, "predicate should fail if no soundpack is available"), (0, vZ.p)(e ? t : vQ.i.CLASSIC));
    },
    usePredicate: aY.A.useIsEligible,
});
var v$ = n(970931);
let v0 = {
        useTitle: () => V.intl.string(V.t.jD1qzM),
        sound: "message1",
        useDisabled: v$.kB,
        useDisabledMessage: () => ((0, v$.kB)() ? V.intl.string(V.t.cIRG0s) : void 0),
    },
    v1 = { useTitle: () => V.intl.string(V.t.XBrJT6), sound: "call_ringing" },
    v2 = (0, h.zD)(S.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => V.intl.string(V.t.TzjwV9),
        useSubtitle: () => V.intl.format(V.t.OOiGCM, { onClick: () => aJ("message3") }),
        useValue: () =>
            (0, _.bG)([aX.A], () => aX.A.getNotifyMessagesInSelectedChannel() && !aX.A.getDisableAllSounds()),
        setValue: (e) => aZ.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, _.bG)([aX.A], () => aX.A.getDisableAllSounds()),
    }),
    v3 = (0, h.zD)(S.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => V.intl.string(V.t["2ZhCOd"]),
        useSubtitle: () => V.intl.string(V.t.EAKdPr),
        useValue: () => (0, _.bG)([aX.A], () => aX.A.getDisableAllSounds()),
        setValue: (e) => aZ.default.toggleDisableAllSounds(e),
    }),
    v4 = (0, h.D1)(S.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aQ();
            };
        },
        buildLayout: () => [a$(v0), v2, a$(v1), v3],
    }),
    v5 = (0, h.AK)(S.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => V.intl.string(V.t["MMy+lm"]),
        useSearchTerms: () => [V.intl.string(V.t["MMy+lm"])],
        destinationKey: S.X.SOUNDS_CATEGORY,
    }),
    v6 = (0, h.gN)(S.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [v5] }),
    v8 = (0, h.zZ)(S.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => V.intl.string(V.t.LweOYy),
        buildLayout: () => [vJ, v4, v6],
    }),
    v7 = (0, h.t_)(S.X.NOTIFICATIONS_PANEL, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        initialize: () => {
            null != vm.A.getAgeGroup() || vm.A.isLoading() || (vm.A.canRefetch() && vg.Ay.initialPageLoad());
        },
        buildLayout: () => [vK, v8, vf, vv, vT],
    }),
    v9 = (0, h.i4)(S.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => V.intl.string(V.t.HcoRu0),
        icon: vc.BellIcon,
        buildLayout: () => [v7],
    }),
    je = (0, h.WI)(S.X.USER_SECTION, {
        useTitle: () => V.intl.string(V.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Cl, bq, vd, v9, CP],
    });
var jt = n(387758),
    jn = n(271866),
    ji = n(147964),
    jl = n(868511);
let js = (0, h.zD)(S.X.APPLICATION_TEST_MODE, {
        useTitle: () => V.intl.string(V.t.erOqlh),
        useSubtitle: () => V.intl.string(V.t["52hMnD"]),
        usePredicate: U.Q_.useSetting,
        useValue: () => (0, _.bG)([ji.A], () => null != ji.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, lT.openModal)((e) => (0, p.jsx)(jl.A, { ...e })) : jn.cL();
        },
    }),
    jr = (0, h.zD)(S.X.DEVELOPER_MODE, {
        useTitle: () => V.intl.string(V.t.ObIb1Q),
        useSubtitle: () => V.intl.format(V.t["CY6q/Q"], { apiDocsUrl: I.X7G.API_DOCS }),
        useValue: U.Q_.useSetting,
        setValue: U.Q_.updateSetting,
        usePredicate: () => uw.p5,
    }),
    ja = (0, h.zZ)(S.X.DEVELOPER_CATEGORY, { buildLayout: () => [jr, js] }),
    jo = (0, h.t_)(S.X.DEVELOPER_PANEL, { useTitle: () => V.intl.string(V.t["0BRxRp"]), buildLayout: () => [ja] }),
    ju = (0, h.i4)(S.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: jt.G,
        useTitle: () => V.intl.string(V.t["0BRxRp"]),
        buildLayout: () => [jo],
    });
var jd = n(70688),
    jc = n(830215);
let jg = (0, h.i4)(S.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => V.intl.string(V.t["2jxGer"]),
        icon: jd.DoorExitIcon,
        onClick: () => {
            (0, n2.A)({
                title: V.intl.string(V.t["2jxGer"]),
                subtitle: V.intl.string(V.t.SUnWBB),
                confirmText: V.intl.string(V.t["2jxGer"]),
                onConfirm: () => {
                    jc.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    jm = (0, h.WI)(S.X.UTILITY_SECTION, {
        useTitle: () => V.intl.string(V.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [ju, jg],
    }),
    jA = (0, h.Hr)({ buildLayout: () => [_Q, je, Eq, ox, pf, Su, jm], analyticsKey: "user_settings" });
