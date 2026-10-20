n.d(t, { D: () => vY });
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
    S = n(107384),
    p = n(477900),
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
    U = n(105292),
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
    q = n(205513),
    Q = n(834730),
    $ = n(113494),
    J = n(782134),
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
        (0, p.jsx)(v.$, {
            text: U.intl.string(U.t.SKNnqq),
            icon: e ? $.PauseIcon : J.PlayIcon,
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
            return (0, p.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, p.jsx)(q.G, {
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
                                ? (0, p.jsx)(Q.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: U.intl.string(U.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, p.jsx)(Q.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: U.intl.string(U.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, p.jsx)(Q.E, {
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
        { badgeType: S.Xi.NEW, dismissibleContent: eA.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var eh = n(406360),
    ex = n(964404);
let eS = (0, E.Qx)(h.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => U.intl.string(U.t.nemtgW),
        useSubtitle: () => U.intl.string(U.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: S.Xi.BETA }),
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
    ep = (0, E.Hn)(h.X.OFFICIAL_MESSAGE_STYLE, {
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
        buildLayout: () => [ef, ed, eE, eg, eb, eS, eT, ep, em, eo],
    });
var ej = n(397438),
    eO = n(355097),
    eL = n(964549);
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
    eX = n(763052);
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
let e$ = (0, E.Qx)(h.X.APPEARANCE_UI_DENSITY, {
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
    eJ = "cozy",
    e0 = "compact",
    e1 = (0, E.Qx)(h.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => U.intl.string(U.t.nKRoPv),
        useSubtitle: () => U.intl.string(U.t.QntEEG),
        useSearchTerms: () => [U.intl.string(U.t.ZEoGMd)],
        useOptions: () => [
            { name: U.intl.string(U.t.Jqj4cZ), value: eJ },
            { name: U.intl.string(U.t["1JNcPS"]), value: e0 },
        ],
        useValue: () => (M.hH.useSetting() ? e0 : eJ),
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
var e4 = n(775121),
    e6 = n(723702);
let e8 = (0, E.sN)(h.X.APPEARANCE_ZOOM, {
        usePredicate: () => e6.isPlatformEmbedded,
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
    e7 = (0, E.zZ)(h.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.VKYWk8),
        buildLayout: () => [e$, e1, e5, e8],
    }),
    e9 = (0, E.t_)(h.X.ACCESSIBILITY_PANEL, {
        useTitle: () => U.intl.string(U.t.G0neg7),
        buildLayout: () => [eq, e7, ev, eB, er],
        decoration: {
            type: S.t9.STRONGLY_DISCOURAGED_CUSTOM,
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
                return (0, p.jsx)(_.M, {
                    children: (0, p.jsxs)("section", {
                        "aria-label": U.intl.string(U.t.RC22qg),
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: V.Vf,
                                children: U.intl.string(U.t.RC22qg),
                            }),
                            (0, p.jsxs)(C.Ip, {
                                className: V.VH,
                                children: [
                                    (0, p.jsx)("ol", {
                                        className: V.DZ,
                                        style: { gap: i },
                                        "aria-label": U.intl.string(U.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, p.jsx)(
                                                "li",
                                                {
                                                    children: (0, p.jsx)(D.A, {
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
                                    (0, p.jsxs)("div", {
                                        className: V.Jb,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: V.HD,
                                                children: w.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, p.jsx)(
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
                                            (0, p.jsx)(v.$, {
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
    tr = n(269880),
    ta = n(55619),
    to = n(351906),
    tu = n(174459),
    td = n(189081);
let tc = (0, E.zD)(h.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, f.bG)([td.A], () => td.A.hasLibraryApplication()),
        useTitle: () => U.intl.string(U.t.fi3UQN),
        useSubtitle: () => U.intl.string(U.t["8mYp37"]),
        useValue: () => !M.l_.useSetting(),
        setValue: (e) => M.l_.updateSetting(!e),
    }),
    tg = (0, E.zZ)(h.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["8/udY0"]),
        buildLayout: () => [tc],
    });
var tm = n(284009),
    tA = n.n(tm),
    tE = n(199966),
    th = n(963935);
function tx(e) {
    let { title: t } = e;
    return t;
}
function tS(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: s } = e,
        l = t();
    return "string" == typeof l ? i({ title: l, index: s, key: n }) : l;
}
function tp(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, p.jsx)(tS, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tT(e) {
    return e.type === th.Z6.LIST;
}
function tf(e, t) {
    let { limit: n = 2, formatter: i = tx } = t ?? {};
    tA()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, tE._)(),
        r = s.get(e) ?? l.get(e);
    tA()(
        null != r && (r.type === th.Z6.ACCORDION || tT(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tT(r) ? (r.collapseAfter ?? 0) : 0,
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
                return U.intl.format(U.t["3H9tCW"], { settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return U.intl.format(U.t.MWryo6, {
                    settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tp({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return U.intl.format(U.t.a00b5G, {
                    settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tp({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tp({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === s
            ? U.intl.format(U.t.O8vNbS, { settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === s
              ? U.intl.format(U.t["acXG/W"], {
                    settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tp({ setting: t[1], formatter: i, index: 1 }),
                })
              : U.intl.format(U.t["5+ldWc"], {
                    settingOneHook: tp({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tp({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tp({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tI = n(951260);
let t_ = (0, E.zD)(h.X.ENABLE_APPS_BUTTON, {
        useTitle: () => U.intl.string(U.t.ZTH4j4),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, eu.n8)({ appsButtonEnabled: e }),
    }),
    tN = {
        useTitle: () => U.intl.string(U.t["I/5LyL"]),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isSubmitButtonEnabled),
        setValue: () => (0, eu.Xt)(),
    },
    tC = (0, E.zD)(h.X.ENABLE_SEND_BUTTON, tN),
    ty = (0, E.zD)(h.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tN,
        usePredicate: () => !(0, tI.n)("EnableSendButtonOutsideExperiment"),
    }),
    tb = (0, E.zD)(h.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => U.intl.string(U.t.WggFoO),
        useSubtitle: () => U.intl.string(U.t.XpErGj),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, eu.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tv = (0, E.zD)(h.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => U.intl.string(U.t.YErWkD),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, eu.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tj = (0, E.zD)(h.X.ENABLE_GIF_BUTTON, {
        useTitle: () => U.intl.string(U.t.k7oNEz),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isGifButtonEnabled),
        setValue: (e) => (0, eu.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tO = (0, E.zD)(h.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => U.intl.string(U.t.Ar0krj),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, eu.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, f.bG)([j.Ay], () => j.Ay.expressionPickerFormat === j.IG.FLEXIBLE),
    }),
    tL = (0, E.Qx)(h.X.EXPRESSION_PICKER_FORMAT, {
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
    tR = (0, E.FW)(h.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => U.intl.string(U.t["V9/cNN"]),
        buildLayout: () => [tL, tb, tv, tj, tO],
    }),
    tD = (0, E.bd)(h.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? U.intl.string(U.t.IwVGQs) : U.intl.string(U.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tf(h.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tI.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tC, t_, tR],
    });
var tP = n(565645);
let tG = (0, E.zD)(h.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => U.intl.string(U.t["79qal8"]),
        useSubtitle: () =>
            U.intl.format(U.t.GejoQK, { emojiHook: (e, t) => (0, p.jsx)(tP.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: M.j7.useSetting,
        setValue: M.j7.updateSetting,
    }),
    tM = (0, E.zD)(h.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => U.intl.string(U.t.c0oFDw),
        useValue: M.BQ.useSetting,
        setValue: M.BQ.updateSetting,
    }),
    tU = (0, E.zD)(h.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => U.intl.string(U.t.AqGrEI),
        useValue: M.SI.useSetting,
        setValue: (e) => {
            (tu.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: I.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                M.SI.updateSetting(e));
        },
    });
var tV = n(793574);
let tk = (0, E.zD)(h.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => U.intl.string(U.t["d+It2U"]),
        useValue: M.ML.useSetting,
        setValue: (e) => {
            (tu.default.track(I.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: I.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tV.A.TEXT_AND_IMAGES],
            }),
                M.ML.updateSetting(e));
        },
    }),
    tw = (0, E.zZ)(h.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Ob7VMB),
        useSearchTerms: () => [U.intl.string(U.t.onqU6o)],
        buildLayout: () => [tU, tG, tk, tM, ty, tD],
    });
var tF = n(526162),
    tB = n(793943),
    tz = n(792656),
    tY = n(830543),
    tX = n(785007),
    tH = n(806932),
    tW = n(915089),
    tK = n(10392),
    tZ = n(82498),
    tq = n(174197),
    tQ = n(202541);
let t$ = (0, E.E2)(h.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [U.intl.string(U.t.gnwxvT)],
    Component: function () {
        let e = (0, tW.GV)(),
            { ref: t, ...n } = (0, tX._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, f.bG)([tF.A], () => tF.A.isUpsellPreview);
        return (
            (0, K.Ay)(() => {
                i &&
                    (tu.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tQ.e.APP_ICON_UPSELL,
                        location_stack: [tV.A.USER_SETTINGS],
                    }),
                    (0, tK.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, [tV.A.USER_SETTINGS], () =>
                        (0, tZ.uq)(tQ.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, p.jsx)("div", {
                ...n,
                ref: t,
                children: (0, p.jsx)(Z.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, p.jsx)(tH.m, { disabled: i, size: tq.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function tJ() {
    ((0, tB.nf)(tB.HP.APP_ICON), (0, tY.default)());
}
function t0() {
    return (0, p.jsx)(tz.A, {
        subscriptionTier: tQ.pe.TIER_2,
        defaultTextOverride: U.intl.string(U.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let t1 = (0, E.zZ)(h.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RPh2ou),
        useSubtitle: () => U.intl.string(U.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, f.bG)([tF.A], () => tF.A.isUpsellPreview);
            return T.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: S.UV.BUTTON,
                        text: U.intl.string(U.t["6acvnZ"]),
                        onClick: tJ,
                    }),
                    e && t.push({ id: "upsell-button", type: S.UV.STRONGLY_DISCOURAGED_CUSTOM, button: t0 }),
                    { type: S.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [t$],
    }),
    t2 = (0, E.AK)(h.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.UDr3Iy),
        useSearchTerms: () => [U.intl.string(U.t.UDr3Iy)],
        destinationKey: h.X.ACCESSIBILITY_PANEL,
    }),
    t3 = (0, E.gN)(h.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [t2] });
var t5 = n(193249),
    t4 = n(16236),
    t6 = n(749884),
    t8 = n(384539);
let t7 = eC.A.getArticleURL(I.MVz.FAVORITES_GUILD),
    t9 = (0, E.E2)(h.X.CHAT_FAVORITES_TOGGLE, {
        useSearchTerms: () => [U.intl.string(t8.default.OT1NK5)],
        Component: function () {
            let e = (0, t6.A)(!1);
            return (0, p.jsx)(t5.d, {
                checked: e,
                description: U.intl.format(t8.default.GR2KOG, { helpCenterLink: t7 }),
                onChange: t4.kG,
                label: U.intl.string(t8.default.OT1NK5),
                badge: "beta",
            });
        },
    }),
    ne = (0, E.zD)(h.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => U.intl.string(U.t.U47N1p),
        useValue: M.hD.useSetting,
        setValue: M.hD.updateSetting,
    }),
    nt = (0, E.zD)(h.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => U.intl.string(U.t.VP11No),
        useValue: M.X6.useSetting,
        setValue: M.X6.updateSetting,
    }),
    nn = (0, E.FW)(h.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => U.intl.string(U.t["9nyle0"]),
        buildLayout: () => [ne, nt],
    }),
    ni = (0, E.zD)(h.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => U.intl.string(U.t["5bK9vw"]),
        useValue: M.rs.useSetting,
        setValue: M.rs.updateSetting,
    }),
    ns = (0, E.zD)(h.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => U.intl.string(U.t["zge/fP"]),
        useValue: M.jW.useSetting,
        setValue: M.jW.updateSetting,
    });
var nl = n(28863),
    nr = n(766075);
let na = (0, E.zD)(h.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => U.intl.string(U.t.JgjNG3),
        useSubtitle: () => {
            if (!M.hH.useSetting())
                return U.intl.format(U.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, p.jsx)(
                            nl.Anchor,
                            {
                                onClick: () => (0, nr.openUserSettings)(h.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
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
    no = (0, E.Hn)(h.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => U.intl.string(U.t.QgwmVz),
        useOptions: () => [
            { value: I.P6Q.ON_CLICK, id: I.P6Q.ON_CLICK, label: U.intl.string(U.t["KFH/me"]) },
            { value: I.P6Q.ALWAYS, id: I.P6Q.ALWAYS, label: U.intl.string(U.t.Pe1RbL) },
            { value: I.P6Q.IF_MODERATOR, id: I.P6Q.IF_MODERATOR, label: U.intl.string(U.t.K5VTBE) },
        ],
        useValue: M.gs.useSetting,
        setValue: M.gs.updateSetting,
    }),
    nu = (0, E.zD)(h.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => U.intl.string(U.t.AInv5m),
        useValue: M.SY.useSetting,
        setValue: M.SY.updateSetting,
    }),
    nd = (0, E.zZ)(h.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.OIgYlQ),
        useSearchTerms: () => [U.intl.string(U.t["/VQax8"])],
        buildLayout: () => [nn, ni, ns, no, nu, na, t9, t3],
    });
var nc = n(753806),
    ng = n(145331);
let nm = (0, E.Qx)(h.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            (t ? nc.A.cleanUpPrivateChannelSearchState() : nc.A.cleanUpSearchState({ type: I.I4_.DMS }),
                (0, ng._k)({
                    prevIsCrossDMSettingEnabled: M.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: ng.vy.USER_SETTINGS,
                }),
                M.Hu.updateSetting(t));
        },
    }),
    nA = (0, E.zZ)(h.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => U.intl.string(U.t["5h0QOP"]),
        buildLayout: () => [nm],
    });
var nE = n(574381);
let nh = (0, E.zD)(h.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => U.intl.string(U.t.IxjaoF),
        useValue: function () {
            return (0, f.bG)([to.A], () => {
                let { autoToggle: e } = to.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            ta.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nE.Av;
        },
    }),
    nx = (0, E.zD)(h.X.STREAMING_STREAMER_MODE, {
        useTitle: () => U.intl.string(U.t.TGNg6T),
        useSubtitle: () => U.intl.string(U.t["4nXLnE"]),
        useValue: function () {
            return (0, f.bG)([to.A], () => {
                let { enabled: e } = to.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            ta.A.update({ enabled: e });
        },
    });
var nS = n(77729),
    np = n(589051),
    nT = n(85395),
    nf = n(999834);
let nI = [],
    n_ = (0, E.Hn)(h.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => U.intl.string(U.t.VCDSLW),
        useSearchTerms: () => [U.intl.string(U.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nf.b_)(),
                t = (0, np.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return T.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(nT.A))
                    !0 === n.hideableInStreamerMode &&
                        null != n.label &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.label() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, f.bG)([to.A], () => to.A.getSettings().disabledOverlayWidgets ?? nI);
        },
        setValue: (e) => ta.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nN = (0, E.zD)(h.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => U.intl.string(U.t.LSBUGR),
        useValue: () =>
            (0, f.bG)([to.A], () => {
                let { hidePersonalInformation: e } = to.A.getSettings();
                return e;
            }),
        setValue: (e) => ta.A.update({ hidePersonalInformation: e }),
    }),
    nC = (0, E.zD)(h.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => U.intl.string(U.t.uWBOri),
        useValue: () =>
            (0, f.bG)([to.A], () => {
                let { hideInstantInvites: e } = to.A.getSettings();
                return e;
            }),
        setValue: (e) => ta.A.update({ hideInstantInvites: e }),
    }),
    ny = (0, E.zD)(h.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => U.intl.string(U.t.OrqYDP),
        useValue: () =>
            (0, f.bG)([to.A], () => {
                let { disableSounds: e } = to.A.getSettings();
                return e;
            }),
        setValue: (e) => ta.A.update({ disableSounds: e }),
    }),
    nb = (0, E.zD)(h.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.sUAbLd),
        useValue: () =>
            (0, f.bG)([to.A], () => {
                let { disableNotifications: e } = to.A.getSettings();
                return e;
            }),
        setValue: (e) => ta.A.update({ disableNotifications: e }),
    }),
    nv = (0, E.zD)(h.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => U.intl.string(U.t["iA81+a"]),
        useSubtitle: () => U.intl.string(U.t.P4vj0h),
        useValue: () =>
            (0, f.bG)([to.A], () => {
                let { enableContentProtection: e } = to.A.getSettings();
                return e;
            }),
        setValue: (e) => ta.A.update({ enableContentProtection: e }),
        usePredicate: () => nS.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nj = (0, E.FW)(h.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.xYhOEh),
        buildLayout: () => [nN, nC, ny, nb, nv, n_],
    }),
    nO = (0, E.zZ)(h.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.S5GfOW),
        buildLayout: () => [nx, nh, nj],
    });
var nL = n(147248),
    nR = n(141343),
    nD = n(665267),
    nP = n(414133),
    nG = n(376134);
let nM = (0, E.Hn)(h.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => U.intl.string(U.t.Q7mm4g),
        useSearchTerms: () => [U.intl.string(nG.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: U.intl.string(U.t["hrS/Pc"]), value: eQ.tI.GUILD },
            { id: "personal", label: U.intl.string(U.t.mlvXIq), value: eQ.tI.PERSONAL },
        ],
        useValue: () => M.zY.useSetting(),
        setValue: M.zY.updateSetting,
        usePredicate: () => (0, nP.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nU = (0, E.zD)(h.X.SYNC_PROFILE_THEMES, {
        useTitle: () => U.intl.string(U.t.C00w4l),
        useValue: () => (0, f.bG)([j.Ay], () => j.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, eu.M1)(),
    });
var nV = n(817281),
    nk = n(284016),
    nw = n(363195);
let nF = (0, E.zD)(h.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => U.intl.string(U.t["/B+kEV"]),
    useSearchTerms: () => [U.intl.string(U.t.Ksh3ik)],
    useValue: function () {
        return (0, f.bG)([nk.A], () => !1 !== nk.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, f.bG)([nw.A], () => nw.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nw.A.theme,
            i = nL.A.gradientPreset?.id ?? null,
            s = M.eh.getSetting()?.customUserThemeSettings != null;
        ((t = I.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            ts.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: s },
            }),
            nV.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nB = n(393284);
let nz = (0, E.AK)(h.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.nhVQDJ),
        useSearchTerms: () => [U.intl.string(U.t.nhVQDJ)],
        destinationKey: h.X.ACCESSIBILITY_PANEL,
    }),
    nY = (0, E.gN)(h.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nz] }),
    nX = (0, E.zZ)(h.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, f.bG)([j.Ay], () => j.Ay.useForcedColors)
                ? {
                      type: S.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: (0, eN.D)()
                          ? U.intl.format(U.t.Jae48E, {
                                onClick: () => {
                                    (0, nr.openUserSettings)(h.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : U.intl.string(U.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, f.bG)([nL.A, j.Ay], () => j.Ay.useForcedColors || nL.A.isPreview),
                t = (0, nR.V)();
            return e || t
                ? null
                : {
                      type: S.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: S.UV.BUTTON,
                              text: U.intl.string(U.t["E+COuA"]),
                              onClick: nD.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nB.k, nF, nU, nM, nY],
    }),
    nH = (0, E.t_)(h.X.APPEARANCE_PANEL, {
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
        buildLayout: () => [nX, t1, nd, tw, nA, nO, tg],
    }),
    nW = [{ badgeType: S.Xi.NEW, dismissibleContent: eA.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE }],
    nK = (0, E.i4)(h.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["iHH+ky"]),
        icon: tt.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, tr.A)(),
                s =
                    ((e = M.D_.useSetting()),
                    (t = M.SI.useSetting()),
                    e
                        ? null
                        : (0, p.jsx)(tn.sL, {
                              id: "preview-markdown-toggle",
                              label: U.intl.string(U.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  (tu.default.track(I.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: I.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      M.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                l =
                    ((n = (0, f.bG)([to.A], () => to.A.enabled, [])),
                    (0, p.jsx)(tn.sL, {
                        id: "streamer-mode-toggle",
                        label: U.intl.string(U.t.p9ZAJZ),
                        action: () => {
                            ta.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return T.useMemo(() => {
                let e = [...i];
                return (
                    null != s &&
                        e.push((0, p.jsx)(tn.rX, { label: U.intl.string(U.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, p.jsx)(tn.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [i, s, l]);
        },
        getDismissibleBadges: () => nW,
        buildLayout: () => [nH],
    });
var nZ = n(37646),
    nq = n(434404);
let nQ = (0, E.t_)(h.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => U.intl.string(U.t.KyFVyi),
        buildLayout: () => [nq.F],
    }),
    n$ = (0, E.i4)(h.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: nZ.U,
        useTitle: () => U.intl.string(U.t.KyFVyi),
        buildLayout: () => [nQ],
    });
var nJ = n(3137),
    n0 = n(661531),
    n1 = n(314116),
    n2 = n(270003),
    n3 = n(939249),
    n5 = n(369606),
    n4 = n(320448),
    n6 = n(604121),
    n8 = n(725951),
    n7 = n(400492),
    n9 = n(669067),
    ie = n(115063),
    it = n(754692),
    ii = n(927018),
    is = n(512599),
    il = n(532197),
    ir = n(403362),
    ia = n(874486),
    io = n(503698),
    iu = n.n(io),
    id = n(536637),
    ic = n.n(id),
    ig = n(58703),
    im = n(906688),
    iA = n(98705);
function iE(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, ii.vM)(t);
    if (null == i) return null;
    let s = null != n,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = ic()(n),
        m = null != o && s,
        A = m ? n3.D : "div";
    return (0, p.jsxs)(A, {
        className: iu()(iA.kL, m && iA.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, p.jsx)("div", {
                className: iA.zc,
                children: (0, p.jsx)(im.A, { achievementId: t, size: im.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, p.jsxs)("div", {
                className: iA.VW,
                children: [
                    null != n &&
                        (0, p.jsx)(Q.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: iA.YR,
                            children: (0, ig.mk)(g),
                        }),
                    (0, p.jsx)(Q.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, p.jsx)(Q.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var ih = n(545744);
function ix(e) {
    let { onBackClick: t } = e,
        n = (0, f.bG)([ia.A], () => ia.A.getAllUnlockedAchievements()),
        i = T.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        s = T.useMemo(
            () =>
                Object.values(ii.l0)
                    .filter(ir.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(n3.D, {
                onClick: t,
                className: ih.vv,
                children: [
                    (0, p.jsx)(il.A, { direction: il.A.Directions.LEFT, className: ih.Kk }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: U.intl.string(U.t["13/7kX"]),
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: ih.N1,
                children: [
                    (0, p.jsxs)("div", {
                        className: ih.if,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: U.intl.string(U.t["6jI0hd"]),
                            }),
                            (0, p.jsx)(Q.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: U.intl.string(U.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, p.jsx)("div", {
                        className: ih.nr,
                        children: (0, p.jsx)(n5.TrophyIcon, {
                            size: "custom",
                            color: n0.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, p.jsx)("div", {
                    className: ih.yF,
                    children: (0, p.jsx)("div", {
                        className: ih.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, p.jsx)(iE, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, p.jsxs)("div", {
                    className: ih.yF,
                    children: [
                        (0, p.jsx)("div", {
                            className: ih.if,
                            children: (0, p.jsx)(Q.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: U.intl.string(U.t.GFyMg1),
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: ih.Eh,
                            children: s.map((e) => (0, p.jsx)(iE, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, p.jsx)("div", { className: ih.yF, children: (0, p.jsx)("div", { className: ih.F3 }) }),
        ],
    });
}
var iS = n(224964),
    ip = n(31408),
    iT = n(368588);
let iI = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    i_ = (0, H.range)(0, 11),
    iN = (0, H.range)(0, 2.25, 0.25),
    iC = (0, H.range)(1, 11),
    iy = (0, H.range)(1, 26),
    ib = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iv(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: s } = e,
        l = n.map((e) =>
            (0, p.jsx)(
                t5.d,
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
    return (0, p.jsx)(n2.n, { label: U.intl.string(U.t.bWVN1D), children: l });
}
function ij(e) {
    let { children: t } = e;
    return (0, p.jsx)(Q.E, { className: iT.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function iO(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        s = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion);
    return (0, p.jsx)(t5.d, {
        label: U.intl.string(U.t.vuiXm9),
        description: U.intl.string(U.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, it._)(ii.sn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, n1.A)({
                          title: s ? U.intl.string(U.t["FxT+p0"]) : U.intl.string(U.t.TAZ4F9),
                          subtitle: s ? U.intl.string(U.t.gmixrx) : U.intl.string(U.t.jN3t3K),
                          confirmText: U.intl.string(U.t.JFfins),
                          onConfirm: () => i(s ? iI : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iL(e) {
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
    return (0, p.jsxs)(n2.n, {
        label: U.intl.string(U.t.mqxwJO),
        children: [
            (0, p.jsx)(t5.d, {
                label: U.intl.string(U.t.s0KCgF),
                description: U.intl.string(U.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iT.KF,
                        children: U.intl.string(U.t.vd0D81),
                    }),
                    (0, p.jsx)(ij, { children: U.intl.string(U.t.a18Sug) }),
                    (0, p.jsx)(q.G, {
                        disabled: a,
                        markers: iC,
                        stickToMarkers: !0,
                        minValue: iC[0],
                        maxValue: iC[iC.length - 1],
                        initialValue: i,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iT.KF,
                        children: U.intl.string(U.t.sPO3ij),
                    }),
                    (0, p.jsx)(ij, { children: U.intl.string(U.t.xoldVn) }),
                    (0, p.jsx)(q.G, {
                        disabled: a,
                        markers: iy,
                        stickToMarkers: !0,
                        minValue: iy[0],
                        maxValue: iy[iy.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsx)(iv, {
                disabled: a,
                locations: [
                    {
                        location: ip.k.CHAT_INPUT,
                        title: U.intl.string(U.t.elTtyz),
                        description: U.intl.string(U.t.HtKfMi),
                    },
                    {
                        location: ip.k.REACTION,
                        title: U.intl.string(U.t.Ik4VIa),
                        description: U.intl.string(U.t.y4rqK0),
                    },
                    {
                        location: ip.k.MEMBER_USER,
                        title: U.intl.string(U.t.ZXBlAn),
                        description: U.intl.string(U.t["m9RD+c"]),
                    },
                    {
                        location: ip.k.CALL_TILE,
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
function iR(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !n;
    return (0, p.jsxs)(n2.n, {
        label: U.intl.string(U.t.Xz0ole),
        children: [
            (0, p.jsx)(t5.d, {
                label: U.intl.string(U.t.o3iV7B),
                description: U.intl.string(U.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, p.jsx)(t5.d, {
                label: U.intl.string(U.t["Ax+IoW"]),
                description: U.intl.string(U.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: iT.KF,
                        children: U.intl.string(U.t.L0oQuh),
                    }),
                    (0, p.jsx)(ij, { children: U.intl.string(U.t["/OOFpL"]) }),
                    (0, p.jsx)(q.G, {
                        disabled: r,
                        markers: i_,
                        stickToMarkers: !0,
                        minValue: i_[0],
                        maxValue: i_[i_.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iD(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, p.jsxs)(n2.n, {
        label: U.intl.string(U.t.wVS5Sd),
        children: [
            (0, p.jsx)(t5.d, {
                label: U.intl.string(U.t.N004zO),
                description: r ? U.intl.string(U.t.GckHGw) : U.intl.string(U.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iT.KF,
                        children: U.intl.string(U.t.UxnnC4),
                    }),
                    (0, p.jsx)(ij, { children: U.intl.string(U.t.CEOEOb) }),
                    (0, p.jsx)(q.G, {
                        disabled: a,
                        markers: iN,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: iN[0],
                        maxValue: iN[iN.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, it._)(ii.sn.MORE),
                                l(t, 1));
                        },
                        onMarkerRender: (e) => (e === iN[iN.length - 1] ? U.intl.string(U.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, p.jsx)(iv, {
                disabled: a,
                locations: [
                    {
                        location: ip.uD.CHAT_INPUT,
                        title: U.intl.string(U.t.vUcvPP),
                        description: U.intl.string(U.t.y00OrF),
                    },
                    {
                        location: ip.uD.VOICE_USER,
                        title: U.intl.string(U.t.TcRO54),
                        description: U.intl.string(U.t.YJCxVY),
                    },
                    {
                        location: ip.uD.MENTION,
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
function iP(e) {
    let { updateSettings: t } = e;
    return (0, p.jsx)(n2.n, {
        label: U.intl.string(U.t.EuXv2q),
        children: (0, p.jsxs)(Z.B, {
            gap: 16,
            children: [
                (0, p.jsx)("div", { children: U.intl.string(U.t["1SLnki"]) }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: iT.hw,
                    children: (0, p.jsx)(v.$, {
                        variant: "primary",
                        size: "sm",
                        text: U.intl.string(U.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tY.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iG(e) {
    let { onChangePage: t } = e;
    return (0, p.jsxs)(n3.D, {
        onClick: function () {
            return t(1);
        },
        className: iT.Tq,
        children: [
            (0, p.jsx)("div", {
                className: iT.w1,
                children: (0, p.jsx)(n5.TrophyIcon, { size: "md", color: n0.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, p.jsxs)("div", {
                className: iT.qL,
                children: [
                    (0, p.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t["6jI0hd"]),
                    }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: U.intl.string(U.t.GuUItX),
                    }),
                ],
            }),
            (0, p.jsx)(n4._, { size: "custom", color: "currentColor", width: 16, className: iT.nT }),
        ],
    });
}
function iM() {
    return n
        .e("504660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iU(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, f.cf)([nJ.A], () => nJ.A.getState()),
        [s, l] = T.useState({ x: 0, y: 0 }),
        r = (0, iS.A)();
    function a(e, t) {
        var l, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, n7.Ak)("poggermode_enabled"),
                (0, ie.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, is.O9)(e),
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
        1 === t && E && (0, ie.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        l({ x: e.clientX, y: e.clientY });
    }
    return (
        T.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, p.jsxs)(Z.B, {
            gap: 24,
            children: [
                (0, p.jsx)(iO, { settings: i, updateSettings: a }),
                (0, p.jsx)(iG, { onChangePage: t }),
                (0, p.jsx)(iR, { settings: i, updateSettings: a }),
                (0, p.jsx)(iD, { settings: i, updateSettings: a }),
                (0, p.jsx)(iL, { settings: i, updateSettings: a }),
                (0, p.jsx)(iP, { updateSettings: a }),
            ],
        })
    );
}
function iV(e) {
    return 0 === e ? n8.f.LEFT : n8.f.RIGHT;
}
let ik = (0, E.E2)(h.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = T.useState(0),
                [n, i] = T.useState(iV(e)),
                [s, l] = T.useState(!1),
                r = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
                a = s && !r;
            return (
                T.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iV(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                T.useEffect(() => {
                    (0, n9._)(ib[e]);
                }, [e]),
                T.useEffect(() => {
                    Math.random() > 0.99 && (0, it._)(ii.sn.VISITOR_100);
                }, []),
                (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(n8.A, {
                            className: iT.l3,
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
                                        return (0, p.jsx)(iU, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, p.jsx)(ix, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, p.jsx)("div", {
                            className: a ? iT.Sr : iT.IP,
                            children: (0, p.jsx)(n6.a, {
                                className: iT.gT,
                                importData: iM,
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
    iw = (0, E.zZ)(h.X.POGGERMODE_CATEGORY, { buildLayout: () => [ik] });
var iF = n(212043);
let iB = (0, E.t_)(h.X.POGGERMODE_PANEL, { useTitle: () => U.intl.string(U.t.AtCukI), buildLayout: () => [iw] }),
    iz = (0, E.i4)(h.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.AtCukI),
        icon: () => (0, p.jsx)("img", { alt: "", src: n(724405), className: iF.$ }),
        usePredicate: () => (0, f.bG)([nJ.A], () => nJ.A.settingsVisible),
        buildLayout: () => [iB],
    });
var iY = n(307301),
    iX = n(410767),
    iH = n(683071),
    iW = n(97260),
    iK = n(710195),
    iZ = n(57757),
    iq = n(188321),
    iQ = n(695366),
    i$ = n(812729),
    iJ = n.n(i$),
    i0 = n(587895),
    i1 = n(429913),
    i2 = n(616356),
    i3 = n(952818);
function i5(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function i4() {
    let e = (0, f.bG)([i2.A], () => i2.A.getStreamerActiveStreamMetadata()),
        t = (0, f.bG)(
            [i3.Ay],
            () => {
                let e = i3.Ay.getVisibleGame();
                return null != e ? i3.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            iJ(),
        ),
        [n] = (0, i1.A)([i5(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i6 = n(769015),
    i8 = n(360906),
    i7 = n(935671),
    i9 = n(435075);
function se(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, p.jsx)("div", {
              className: i9.zc,
              children: (0, p.jsx)(iQ.E, { size: "sm", color: n0.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, p.jsxs)("div", {
              className: i9.nt,
              children: [
                  (0, p.jsx)(i6.A, { game: n, pid: t.pid, size: i6.M.MEDIUM }),
                  (0, p.jsx)("div", {
                      className: i9.Am,
                      children: (0, p.jsx)(iQ.E, { size: "sm", color: n0.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function st(e) {
    let t = (0, f.bG)([i8.Ay], () => i8.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = i4();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, i7.NP)(),
        l = s && null != n && t === I.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: n, runningGameApplication: i };
}
function sn(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: s, runningGameApplication: l } = st(n);
    return i
        ? (0, p.jsxs)("div", {
              className: iu()(i9.kL, t),
              children: [
                  (0, p.jsx)(se, { game: s, application: l }),
                  (0, p.jsxs)("div", {
                      className: i9.FS,
                      children: [
                          (0, p.jsx)(Q.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? U.intl.string(U.t.vxfv7v)
                                      : null != s
                                        ? U.intl.string(U.t.fAYU2G)
                                        : U.intl.string(U.t["9V4X/c"]),
                          }),
                          (0, p.jsx)(Q.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: U.intl.format(U.t["/y6htt"], {
                                  helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      text: U.intl.string(U.t["1iI46O"]),
                      onClick: function () {
                          (0, i7.sL)(n + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var si = n(404778),
    ss = n(579370),
    sl = n(532624),
    sr = n(691885),
    sa = n(452027),
    so = n(408278),
    su = n(241326),
    sd = n(866665),
    sc = n(140735),
    sg = n(489718),
    sm = n(827343),
    sA = n(635242),
    sE = n(350535),
    sh = n(189213),
    sx = n(192308),
    sS = n(95477),
    sp = n(320989),
    sT = n(978263);
let sf = [];
var sI = n(235986),
    s_ = n(484734),
    sN = n(734057),
    sC = n(808728),
    sy = n(71393),
    sb = n(967198),
    sv = n(926140),
    sj = n(847893);
function sO() {}
let sL = [sv.rD.VOICE_CHANNEL];
function sR(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function sD() {
    return (0, p.jsx)("div", {
        className: sj.i1,
        children: (0, p.jsx)(Q.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sj.GN,
            children: U.intl.string(U.t.zHjCd1),
        }),
    });
}
function sP(e) {
    let { keybind: t, className: n } = e,
        i = T.useRef(t);
    T.useEffect(() => {
        i.current = t;
    });
    let [s, l] = T.useState(t.params?.channelId ?? void 0),
        r = T.useCallback(() => {
            (0, sx.openModalLazy)(
                async () => (e) =>
                    (0, p.jsx)(sG, {
                        ...e,
                        onSelect: (e) => {
                            (l(e), iW.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, p.jsx)("div", {
        className: iu()(sj.a8, n),
        children: (0, p.jsx)(sa.D, {
            label: U.intl.string(U.t.q4JpM8),
            children: (0, p.jsxs)(sI.A, {
                align: sI.A.Align.STRETCH,
                children: [
                    (0, p.jsx)("div", { className: sj.$X, children: (0, p.jsx)(sM, { channelId: s }) }),
                    (0, p.jsx)(sI.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, p.jsx)(v.$, { variant: "primary", text: U.intl.string(U.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function sG(e) {
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
                [a, o] = T.useState(sf),
                u = T.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(sf) : o(e);
                }, []);
            T.useEffect(
                () =>
                    sp.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = T.useState(() => new sT.A(u, n, void 0, i));
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
        })({ visible: !0, autocompleterResultTypes: sL, autocompleterBeforeCreateSearchContext: sR }),
        c =
            ((t = "" !== o),
            (n = (0, f.yK)(
                [sC.Ay, sN.A, sb.A],
                () => {
                    let e = sb.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of sC.Ay.getVocalChannelIds(e)) {
                        let e = sN.A.getChannel(t);
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
            if (e?.type === sv.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === sv.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? sN.A.getChannel(n.parent_id) : void 0,
                              r = sy.A.getGuild(n.guild_id);
                          return (0, p.jsx)(
                              s_.c3,
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
                                      null != r ? (0, p.jsx)("div", { className: sj.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, p.jsx)(sD, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, p.jsx)(sh.a, {
        transitionState: i,
        onClose: s,
        title: U.intl.string(U.t.Dm8O4e),
        subtitle: U.intl.string(U.t.q4JpM8),
        actions: void 0,
        input: (0, p.jsx)(sS.k, {
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
                                if (e?.type === sv.rD.VOICE_CHANNEL) return e.record;
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
function sM(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: s,
        } = (0, f.cf)([sN.A, sy.A], () => {
            let e = null != t ? sN.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? sN.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? sy.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, p.jsx)(Q.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sj.GN,
              children: U.intl.string(U.t["/fYIK7"]),
          })
        : (0, p.jsx)(s_.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: sO,
              onFocus: sO,
              onMouseEnter: sO,
              focused: !1,
              children: null != s ? (0, p.jsx)("div", { className: sj.J5, children: s.name }) : null,
          });
}
var sU = n(650583),
    sV = n(731854),
    sk = n(94451);
function sw(e) {
    let { keybind: t } = e,
        n = (0, f.bG)([sl.Ay], () => sl.Ay.isWaylandPortalActive()),
        i = (0, f.bG)([sl.Ay], () => sl.Ay.getWaylandPortalShortcutState(t.id));
    return n && 0 !== t.shortcut.length && t.enabled
        ? sl.Ay.isWaylandPortalEligibleShortcut(t.shortcut)
            ? null == i
                ? null
                : i.bound
                  ? (0, ss.Rg)(i)
                      ? (0, p.jsx)("div", {
                            className: sk.$e,
                            children: (0, p.jsx)(iH.w, {
                                type: "info",
                                message: U.intl.format(U.t.wu2lqV, { trigger: i.triggerDescription }),
                                role: "status",
                            }),
                        })
                      : null
                  : (0, p.jsx)("div", {
                        className: sk.$e,
                        children: (0, p.jsx)(iH.w, {
                            type: "warning",
                            message: U.intl.string(U.t.PTCrUP),
                            role: "status",
                        }),
                    })
            : (0, p.jsx)("div", {
                  className: sk.$e,
                  children: (0, p.jsx)(iH.w, { type: "warning", message: U.intl.string(U.t.J0m3aK), role: "status" }),
              })
        : null;
}
function sF(e) {
    let { keybind: t } = e,
        n = sE.dI(t.shortcut);
    return e4.A.hasBind(n)
        ? (0, p.jsx)("div", {
              className: sk.$e,
              children: (0, p.jsx)(iH.w, { type: "warning", message: U.intl.string(U.t["7lQlw3"]), role: "status" }),
          })
        : sU.Yy.has(n)
          ? (0, p.jsx)("div", {
                className: sk.$e,
                children: (0, p.jsx)(iH.w, {
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
    return t.action === I.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, p.jsx)(sP, { keybind: t, className: sk._M }) : null;
}
let sz = T.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        s = T.useCallback((e) => iW.A.setKeybind({ ...t, action: e }), [t]),
        l = T.useCallback(
            (e) => {
                if (
                    ((0, ss.uL)(t.id, t.shortcut, e, sl.Ay.getWaylandPortalShortcutState(t.id)),
                    t.managed && t.action === I.hCu.PUSH_TO_TALK)
                ) {
                    let n = t.context ?? sV.x.DEFAULT;
                    sm.default.setMode(i8.Ay.getMode(n), { shortcut: e }, n);
                    return;
                }
                iW.A.setKeybind({ ...t, shortcut: e });
            },
            [t],
        ),
        r = T.useCallback(() => iW.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = T.useCallback(() => iW.A.deleteKeybind(t.id), [t.id]),
        o = T.useId(),
        u = T.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, p.jsxs)("div", {
        className: sk.f_,
        children: [
            (0, p.jsx)(sF, { keybind: t }),
            (0, p.jsx)(sw, { keybind: t }),
            (0, p.jsx)("div", {
                className: sk.XI,
                children: (0, p.jsx)(sr.l, {
                    selectionMode: "single",
                    label: U.intl.string(U.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, p.jsx)("div", {
                className: sk.LE,
                children: (0, p.jsx)(sa.D, {
                    label: U.intl.string(U.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, p.jsx)(sA.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, p.jsxs)("div", {
                className: sk.ne,
                children: [
                    !t.managed &&
                        (0, p.jsx)(so.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: su.TrashIcon,
                            "aria-label": U.intl.string(U.t.qEHmmB),
                        }),
                    (0, p.jsx)(sd.m, {
                        text: U.intl.string(t.enabled ? U.t.pNYGbx : U.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(sc.A, {
                                    id: o,
                                    children: U.intl.format(t.enabled ? U.t["myr/Y0"] : U.t.lYhtPO, { actionName: u }),
                                }),
                                (0, p.jsx)(sg.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, p.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sk.h_,
                children: n[t.action],
            }),
            (0, p.jsx)(sB, { keybind: t }),
        ],
    });
});
var sY = n(938812),
    sX = n(734066),
    sH = n(880144),
    sW = n(994778),
    sK = n(950869),
    sZ = n(603933);
function sq() {
    let e = (0, f.bG)([sl.Ay], () => sl.Ay.isWaylandPortalActive()),
        t = T.useMemo(() => e && (0, ss.u)(), [e]);
    return e
        ? (0, p.jsx)(iH.w, {
              type: "info",
              message: U.intl.string(U.t.AcH7R7),
              role: "none",
              action: t ? { text: U.intl.string(U.t.ZPHaPE), onClick: ss.qM } : void 0,
          })
        : null;
}
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
            } = ((e = (0, f.bG)([sl.Ay], () => sl.Ay.getState())),
            (t = (0, f.bG)([i8.Ay], () => (0, sH.A)(i8.Ay))),
            (n = (0, f.bG)([i8.Ay], () => i8.Ay.supports(sV.O5.VIDEO))),
            (i = (0, f.bG)([sK.A], () => sK.A.isSupported)),
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
                    allowSoundboard: (r = (0, e6.isWindows)()),
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
                            ((0, e6.isWindows)() || i8.Ay.getUseSystemScreensharePicker()) &&
                            a.push({ id: "toggle-go-live-streaming", value: I.hCu.TOGGLE_GO_LIVE_STREAMING }),
                        (0, e6.isDesktop)() &&
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
                            return { id: t, value: n, label: (0, sW.B)(n) ?? n };
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
                        n && (0, e6.isWindows)() && (r[I.hCu.TOGGLE_GO_LIVE_STREAMING] = U.intl.string(U.t.s4C238)),
                        (0, e6.isDesktop)() &&
                            ((r[I.hCu.NAVIGATE_BACK] = U.intl.string(U.t.nKDlEt)),
                            (r[I.hCu.NAVIGATE_FORWARD] = U.intl.string(U.t.DK0FFk)),
                            (r[I.hCu.SOUNDBOARD] = (0, e6.isWindows)()
                                ? U.intl.string(U.t["5wJefL"])
                                : U.intl.string(U.t.gzjsSP)),
                            (r[I.hCu.SOUNDBOARD_HOLD] = (0, e6.isWindows)()
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
            ? (0, p.jsxs)(Z.B, {
                  gap: 16,
                  children: [
                      (0, p.jsx)(sq, {}),
                      (0, p.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: U.intl.string(U.t.vyYgWp),
                      }),
                  ],
              })
            : (0, p.jsxs)(Z.B, {
                  gap: 16,
                  children: [
                      (0, p.jsx)(sq, {}),
                      (0, p.jsx)("div", {
                          className: sZ.A,
                          children: a.map((e, t) =>
                              (0, p.jsxs)(
                                  T.Fragment,
                                  {
                                      children: [
                                          (0, p.jsx)(sz, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                          t < a.length - 1 ? (0, p.jsx)(si.c, { className: sZ.y, gap: 24 }) : null,
                                      ],
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  ],
              });
    },
    s$ = (0, E.E2)(h.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["069nVT"])],
        Component: function () {
            return nE.Av
                ? (0, p.jsx)(sQ, {})
                : (0, p.jsx)(iH.w, {
                      type: "info",
                      message: U.intl.format(U.t.mPi3F3, { downloadLink: I.X7G.DOWNLOAD }),
                      role: "none",
                  });
        },
    });
var sJ = n(475358),
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
            .filter((e) => e.predicate?.() !== !1)
            .groupBy((e) => e.group)
            .value();
    return (0, p.jsxs)(Z.B, {
        gap: 48,
        children: [
            (0, p.jsx)(n2.n, {
                label: t ? U.intl.string(U.t.Lz5KHI) : void 0,
                children: (0, p.jsx)("div", {
                    className: s1.jh,
                    children: (0, p.jsxs)("div", {
                        className: s1.yZ,
                        children: [
                            (0, p.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t.sMWLBj) }),
                            (0, p.jsx)("div", {
                                className: s1.DM,
                                children: (0, p.jsx)(sJ.e, { shortcut: s0.z.binds["0"], className: s1.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, p.jsx)(s2, {
                children: (e) =>
                    (0, p.jsx)(p.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, sY.Gm)(e),
                                s = (0, sY.zF)(e),
                                l = n[e];
                            return (0, p.jsx)(
                                n2.n,
                                {
                                    label: i,
                                    description: s,
                                    children: (0, p.jsx)("div", {
                                        className: s1.jh,
                                        children: l.map((e, t) =>
                                            (0, p.jsxs)(
                                                T.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, p.jsx)(si.c, {}),
                                                        (0, p.jsxs)("div", {
                                                            className: s1.yZ,
                                                            children: [
                                                                (0, p.jsx)(Q.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, p.jsx)("div", {
                                                                    className: s1.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, p.jsx)(
                                                                            sJ.e,
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
        Component: () => (0, p.jsx)(s3, { showHeader: !1 }),
    }),
    s4 = (0, E.zD)(h.X.GAME_MODE_ENABLED_SETTING, {
        useTitle: () => U.intl.string(eL.default.rea2Ar),
        useSubtitle: () => U.intl.string(eL.default.DwBO0x),
        useValue: () => (0, f.bG)([iq.A], () => iq.A.isEnabledFor(!0)),
        setValue: (e) => {
            (tu.default.track(I.HAw.GAME_MODE_TOGGLED, { enabled: e, running_game_id: iq.A.runningGameId }),
                ts.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: e }));
        },
    });
var s6 = n(19575),
    s8 = n(546385);
let s7 = (0, E.E2)(h.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nE.Av && !(0, nE.cX)(),
    useSearchTerms: () => [U.intl.string(U.t["/HIxyY"]), U.intl.string(U.t.B0hqpb)],
    Component: function () {
        let [e] = T.useState(() => s6.Ay.getEnableHardwareAcceleration()),
            t = U.intl.string(U.t["/HIxyY"]),
            n = U.intl.string(U.t.B0hqpb);
        return (0, p.jsxs)(Z.B, {
            children: [
                (0, p.jsx)(t5.d, { label: t, description: n, checked: e, onChange: s9 }),
                !e && (0, p.jsx)(s8.A, { look: s8.k.WARNING, children: U.intl.string(U.t.j7S6IX) }),
            ],
        });
    },
});
function s9(e) {
    let t = e ? U.intl.format(U.t.LYXRxL, {}) : U.intl.format(U.t.uDP3Kz, {});
    (0, n1.A)({
        title: U.intl.string(U.t.aqpAvn),
        subtitle: t,
        confirmText: U.intl.string(U.t.vT7ckk),
        onConfirm: () => {
            s6.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let le = (0, e_.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function lt() {
    let e = await s6.Ay.getOpenOnStart(),
        t = await s6.Ay.getSetting("START_MINIMIZED", !1),
        n = await s6.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    le.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let ln = (0, E.zD)(h.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => U.intl.string(U.t["3BeZti"]),
        usePredicate: () => nE.Av && !(0, nE.cX)(),
        useValue: () => le.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (le.setState({ openOnStartup: e }), s6.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            s6.Ay.getOpenOnStart().then((e) => le.setState({ openOnStartup: e }));
        },
    }),
    li = (0, E.zD)(h.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => U.intl.string(U.t.dJ5MUh),
        useSubtitle: () => U.intl.string(U.t.nQavHr),
        usePredicate: () => nE.Av && !(0, nE.cX)(),
        useValue: () => le.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (le.setState({ minimizeToTray: e }), s6.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            s6.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => le.setState({ minimizeToTray: e }));
        },
    }),
    ls = (0, E.zD)(h.X.OS_START_MINIMIZED, {
        useTitle: () => U.intl.string(U.t.GfBL83),
        useSubtitle: () => U.intl.string(U.t.XGyhhc),
        usePredicate: () => (0, nE.uF)(),
        useValue: () => le.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (le.setState({ startMinimized: e }), s6.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !le.useState((e) => e.openOnStartup),
        initialize: () => {
            s6.Ay.getSetting("START_MINIMIZED", !1).then((e) => le.setState({ startMinimized: e }));
        },
    });
var ll = n(61628);
let lr = new Set(["failure", "unknown"]),
    la = (0, E.E2)(h.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [U.intl.string(U.t.roHq80)],
        Component: function () {
            let [e, t] = T.useState(!1),
                [n, i] = T.useState(() => (0, i7.TC)()),
                s = (0, f.bG)([i3.Ay], () => i3.Ay.getSystemServiceStatus("input-service")),
                l = T.useCallback(async () => {
                    (t(!0),
                        n ? await (0, i7.z8)("windows-settings") : await (0, i7.sL)("windows-settings"),
                        t(!1),
                        i((0, i7.TC)()));
                }, [n]);
            return (0, p.jsxs)("div", {
                className: ll.q,
                children: [
                    (0, p.jsxs)("div", {
                        className: ll.L,
                        children: [
                            (0, p.jsxs)(Z.B, {
                                direction: "horizontal",
                                children: [
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: U.intl.string(U.t.roHq80),
                                    }),
                                    n &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(Q.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, p.jsx)(Q.E, {
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
                                                                (0, ir.xb)(e.state);
                                                        }
                                                    })(s),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, p.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: U.intl.format(U.t["8CAL+D"], {
                                    helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(v.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: l,
                        text: n ? U.intl.string(U.t.pAwbdL) : U.intl.string(U.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: i7.XQ,
    });
var lo = n(687813),
    lu = n(562708),
    ld = n(858899),
    lc = n(384077);
async function lg() {
    try {
        await lm();
    } catch {
        (0, ld.P0)({ text: U.intl.string(U.t["8ihs9i"]), variant: "critical" });
    }
}
async function lm() {
    var e;
    let t = nS.A.tracing;
    if (null == t) return;
    (0, ld.P0)({ text: U.intl.string(U.t.qGRW8d) });
    let [n, i, s] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nS.A.processUtils.getSystemInfo(),
            nS.A.processUtils.getSystemMetrics((0, lc.u)()),
        ]),
        l = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, lu.getSuperProperties)(),
            native_build_number: nS.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: s,
            cumulativeCpuUsage: nS.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nS.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
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
    (nS.A.fileManager.showItemInFolder(u), (0, ld.P0)({ text: U.intl.string(U.t.gpCRFS), variant: "success" }));
}
let lA = (0, E.Tf)(h.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => U.intl.string(U.t.o6Qr6n),
    useSubtitle: () => U.intl.string(U.t.OuGtH8),
    useLabel: () => U.intl.string(U.t.bm1WjO),
    usePredicate: () => nE.Av && nS.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n1.A)({
            title: U.intl.string(U.t.o6Qr6n),
            subtitle: U.intl.string(U.t.JEHHJ1),
            confirmText: U.intl.string(U.t.bm1WjO),
            onConfirm: () => {
                ((0, tY.default)(), lg());
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
var lS = n(114129),
    lp = n(442325),
    lT = n(858760);
let lf = (0, E.zD)(h.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: S.Xi.BETA }),
        usePredicate: () => lT.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nE.xl)(),
        useValue: () => (0, f.bG)([lp.A], () => lp.A.isUserOptedIn()),
        setValue: lS.lj,
    }),
    lI = (0, E.zZ)(h.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["8/udY0"]),
        buildLayout: () => [lx, lA, lf],
    }),
    l_ = (0, E.zZ)(h.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => U.intl.string(U.t.cg6ltt),
        buildLayout: () => [ln, ls, li, s7],
        usePredicate: () => nE.Av && ((0, nE.uF)() || (0, nE.j9)()),
        initialize: () => {
            lt();
        },
    }),
    lN = (0, E.zZ)(h.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["069nVT"]),
        useSubtitle: () => U.intl.string(U.t.T4LZVL),
        buildLayout: () => [s$],
        initialize: () => (iW.A.enableAll(!1), () => iW.A.enableAll(!0)),
        useInlineNotice: function () {
            return nE.Av
                ? {
                      type: S.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, p.jsxs)(Z.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, p.jsx)(iH.w, {
                                      type: "info",
                                      message: U.intl.string(U.t["5pkmHa"]),
                                      role: "none",
                                  }),
                                  (0, p.jsx)(sn, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nE.Av
                ? {
                      type: S.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: S.UV.BUTTON,
                              text: U.intl.string(U.t.zk6Xbs),
                              variant: "secondary",
                              icon: iY.j,
                              onClick: () => iW.A.addKeybind(),
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
        usePredicate: () => nE.Av && ((0, nE.uF)() || (0, nE.j9)()),
        buildLayout: () => [la],
    }),
    lb = (0, E.zZ)(h.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => U.intl.string(eL.default.QG0axY),
        usePredicate: () =>
            (0, f.bG)(
                [iq.A, iK.A],
                () =>
                    e6.isPlatformEmbedded &&
                    iq.A.hasDetectedGame &&
                    (0, iZ.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [s4],
    }),
    lv = (0, E.t_)(h.X.SYSTEM_PANEL, {
        useTitle: () => U.intl.string(U.t["VJ/qKo"]),
        buildLayout: () => [l_, lN, lC, ly, lb, lI],
    }),
    lj = (0, E.i4)(h.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["VJ/qKo"]),
        icon: iX.F,
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
                n = (0, f.bG)([i8.Ay], () => i8.Ay.getVideoDeviceId()),
                [i, s] = T.useState((0, lD.i)(lh.default.getCurrentUser())),
                l = T.useRef(i);
            return (
                T.useEffect(
                    () => () => {
                        t.current && (0, lP._C)(l.current);
                    },
                    [],
                ),
                (0, p.jsx)(lU.A, {
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
            (M.bm.updateSetting(e), tu.default.track(I.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var lw = n(625841),
    lF = n(74848),
    lB = n(204050);
let lz = (0, e_.D)(() => ({ previewEnabled: !1 })),
    lY = (0, E.E2)(h.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.FsQ3OR)],
        Component: function () {
            let e = (0, f.bG)([i8.Ay], () => i8.Ay.isVideoAvailable()),
                { id: t } = (0, lF.x5)(sV.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, ez.Ay)();
            return (0, p.jsx)(lw.U, {
                label: U.intl.string(U.t.FsQ3OR),
                deviceType: sV.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, lB.p)()
                    ? U.intl.format(U.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (lz.setState({ previewEnabled: !1 }),
                                  window.open((0, lB.i)(t)),
                                  tu.default.track(I.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
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
            let e = i8.Ay.getCameraComponent(),
                t = (0, f.bG)([i8.Ay], () => i8.Ay.getVideoDeviceId()),
                n = lz.useField("previewEnabled"),
                i = (0, f.bG)([i8.Ay], () => i8.Ay.isVideoAvailable());
            return ((0, eI.l0)(() => {
                lz.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, p.jsx)("div", {
                      className: lH.T9,
                      children: (0, p.jsxs)("div", {
                          className: lH.Xi,
                          children: [
                              (0, p.jsxs)("div", {
                                  className: lH.UI,
                                  children: [
                                      (0, p.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, p.jsx)(lX.kE, {}),
                                  ],
                              }),
                              (0, p.jsx)(lX.eK, {}),
                          ],
                      }),
                  })
                : (0, p.jsx)("div", {
                      className: lH.T9,
                      children: (0, p.jsx)(sd.m, {
                          text: i ? null : U.intl.string(U.t["8jSzSe"]),
                          children: (0, p.jsx)(v.$, {
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
        usePredicate: () => (0, f.bG)([i8.Ay], () => i8.Ay.supports(sV.O5.VIDEO)),
        buildLayout: () => [lW, lk, lY, lV],
    }),
    lZ = (0, E.zD)(h.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => U.intl.string(U.t.qFphsa),
        useSubtitle: () => U.intl.string(U.t.cQfwyY),
        usePredicate: function () {
            return (0, nE.j9)();
        },
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (sm.default.setOpenH264Enabled(e),
                (0, n1.A)({
                    title: U.intl.string(U.t["9jf31O"]),
                    subtitle: U.intl.string(U.t["J2wg+X"]),
                    confirmText: U.intl.string(U.t.BddRzS),
                    onConfirm: () => nS.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    lq = (0, E.zD)(h.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => U.intl.string(U.t["r6K+TL"]),
        useSubtitle: () => U.intl.string(U.t["xl9+I6"]),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getAecDump());
        },
        setValue: sm.default.setAecDump,
        usePredicate: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.isAecDumpSupported());
        },
    });
var lQ = n(139033),
    l$ = n(862482),
    lJ = n(640238),
    l0 = n(825484),
    l1 = n(108088),
    l2 = n(487329),
    l3 = n(353835);
let l5 = (0, e_.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function l4() {
    let e = await nS.A.fileManager.getLogPath();
    nS.A.fileManager.showItemInFolder(e);
}
function l6(e) {
    (0, n1.A)({
        title: U.intl.string(U.t["7UXEF2"]),
        subtitle: U.intl.string(U.t.IYPrRl),
        confirmText: U.intl.string(U.t.BddRzS),
        onConfirm: () => sm.default.setDebugLogging(e),
    });
}
async function l8(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await i8.Ay.getMediaEngine().writeAudioDebugState(),
            await l3.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, l1.a)(I.Umv.RTC),
            (e = U.intl.string(U.t["fKBB8+"])),
            (t = U.intl.string(U.t.BvyxE7)),
            (0, lQ.A)({ title: e, subtitle: t }));
    } catch (l) {
        var i;
        let e, t, n, s;
        ((i = l.displayMessage),
            (e = U.intl.string(U.t.QZg0J7)),
            (t = i ?? U.intl.string(U.t.VzHcSm)),
            (n = (0, l2.B1)(l2.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = U.intl.formatToPlainString(U.t.ejOT95, { errorCode: n })),
            (0, sx.openModal)((n) =>
                (0, p.jsx)(lJ.a, {
                    header: e,
                    confirmButtonColor: l$.$n.Colors.BRAND,
                    confirmText: U.intl.string(U.t.BddRzS),
                    ...n,
                    children: (0, p.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, p.jsx)(Q.E, { variant: "text-md/normal", children: t }),
                            (0, p.jsx)(Q.E, {
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
async function l7() {
    await l8({
        onUploadStart: () => l5.setState({ isUploading: !0 }),
        onUploadFinish: () => l5.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let l9 = (0, E.E2)(h.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [U.intl.string(U.t["726JHL"]), U.intl.string(U.t.EbwFfR), U.intl.string(U.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, f.bG)([i8.Ay], () => i8.Ay.supports(sV.O5.DEBUG_LOGGING));
        return nE.Av && e && null != nS.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, f.bG)([i8.Ay], () => i8.Ay.getDebugLogging()),
            t = l5.useField("isUploading"),
            n = l5.useField("isDisabled"),
            i = T.useId();
        return (0, p.jsxs)("fieldset", {
            children: [
                (0, p.jsx)(sc.A, { tag: "legend", id: i, children: U.intl.string(U.t["FjN+et"]) }),
                (0, p.jsxs)(Z.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, p.jsx)(t5.d, {
                            label: U.intl.string(U.t["726JHL"]),
                            description: U.intl.string(U.t["/7ak9Q"]),
                            checked: e,
                            onChange: l6,
                        }),
                        (0, p.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, p.jsxs)(l0.e, {
                                children: [
                                    (0, p.jsx)(v.$, {
                                        variant: "secondary",
                                        text: U.intl.string(U.t.EbwFfR),
                                        onClick: l7,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": U.intl.string(U.t.aY1OH2),
                                    }),
                                    (0, p.jsx)(v.$, {
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
var re = n(233545),
    rt = n(58663),
    rn = n(412780);
function ri() {
    return (0, f.bG)([lh.default, i8.Ay], () => {
        let e = lh.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === s6.Ay.releaseChannel || "development" === s6.Ay.releaseChannel,
            i = i8.Ay.supports(sV.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let rs = (0, E.zD)(h.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => U.intl.string(U.t.U4FgFK),
        useSubtitle: () => U.intl.string(U.t.Lm72RU),
        useValue: function () {
            return (0, f.bG)([rn.Ay], () => rn.Ay.shouldRecordNextConnection());
        },
        setValue: rt.A,
        usePredicate: ri,
    }),
    rl = (0, E.Tf)(h.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => U.intl.string(U.t.nJnOHO),
        useLabel: () => U.intl.string(U.t["3xjX0U"]),
        onClick: re.YW,
        usePredicate: ri,
    });
var rr = n(926919),
    ra = n(111162),
    ro = n(855302);
let ru = (0, E.zD)(h.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => U.intl.string(U.t["0CEP6e"]),
        useSubtitle: () => U.intl.string(U.t["kBXuW+"]),
        useValue: function () {
            return (0, f.bG)([ra.default], () => ra.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = ra.default.isStreamInfoOverlayEnabled;
            ((0, ro.A)("stream_info_overlay_enabled", e, t), (0, rr.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return M.Q_.useSetting();
        },
    }),
    rd = (0, E.bd)(h.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? U.intl.string(U.t["/B4I8H"]) : U.intl.string(U.t.BTlsWH)),
        useCollapsedSubtitle: () => U.intl.string(U.t.la1Ys4),
        buildLayout: () => [ru, lq, rs, rl, l9],
    });
function rc(e, t, n) {
    (0, n1.A)({ title: e, subtitle: t, confirmText: U.intl.string(U.t.BddRzS), onConfirm: n });
}
let rg = (0, E.Tf)(h.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => U.intl.string(U.t.SXfv1v),
        useSubtitle: () => U.intl.string(U.t["buA5/q"]),
        useLabel: () => U.intl.string(U.t.yBZMsQ),
        onClick: function () {
            rc(U.intl.string(U.t["4iKQ/3"]), U.intl.string(U.t.sQ42iT), sm.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rm = (0, E.zZ)(h.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.UDAU9K),
        buildLayout: () => [lZ, rd, rg],
    });
var rA = n(736056),
    rE = n(360729),
    rh = n(446243),
    rx = n(558076),
    rS = n(977241);
let rp = (0, E.zD)(h.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => U.intl.string(rS.default.qYzpsI),
        useSubtitle: () => U.intl.string(rS.default["+vMoL1"]),
        useValue: () => (0, f.bG)([rx.A], () => rx.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rh.Ft)(e),
    }),
    rT = (0, E.zZ)(h.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => U.intl.string(rS.default.wRLmM0),
        usePredicate: function () {
            let e = (0, f.yK)([sy.A], () => sy.A.getGuildIds()),
                { loaded: t, override: n } = (0, f.cf)([rA.A], () => ({
                    loaded: rA.A.getLoadedGuildExperiment(rE.vJ),
                    override: rA.A.getExperimentOverrideDescriptor(rE.vJ),
                }));
            return (0, T.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, rE.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rp],
    });
var rf = n(347481),
    rI = n(852712),
    r_ = n(179172),
    rN = n(868162);
let rC = (0, E.zD)(h.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => U.intl.string(U.t.gF8HJo),
        useSubtitle: () => U.intl.string(U.t.cfrfyZ),
        useValue: function () {
            return (0, f.bG)([rN.A], () => !0 !== rN.A.getState().neverShowModal);
        },
        setValue: function (e) {
            r_.Bv(!e);
        },
        usePredicate: function () {
            return e6.isPlatformEmbedded;
        },
    }),
    ry = (0, E.zD)(h.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => U.intl.string(U.t.cUMdH0),
        useSubtitle: () => U.intl.string(U.t["6EjbvA"]),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            sm.default.setAutomaticGainControl(e, {
                page: I.liQ.USER_SETTINGS,
                section: I.JJy.SETTINGS_VOICE_AND_VIDEO,
            });
        },
        useDisabled: function () {
            return (0, f.bG)([i8.Ay, rf.A], () => {
                let e = i8.Ay.getInputDeviceId();
                return rf.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.isAutomaticGainControlSupported() && i8.Ay.isInputProfileCustom());
        },
    }),
    rb = (0, E.sN)(h.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => U.intl.string(U.t.AlybXj),
        setValue: (e) =>
            sm.default.setAttenuation(
                e,
                i8.Ay.getAttenuateWhileSpeakingSelf(),
                i8.Ay.getAttenuateWhileSpeakingOthers(),
            ),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i8.Ay.getAttenuation(),
    }),
    rv = (0, E.zD)(h.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => U.intl.string(U.t["9dHxRY"]),
        useValue: () => (0, f.bG)([i8.Ay], () => i8.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => sm.default.setAttenuation(i8.Ay.getAttenuation(), e, i8.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rj = (0, E.zD)(h.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => U.intl.string(U.t.SMt0Gr),
        useValue: () => (0, f.bG)([i8.Ay], () => i8.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sm.default.setAttenuation(i8.Ay.getAttenuation(), i8.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rO = (0, E.FW)(h.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.oSdBvW),
        useSubtitle: () => U.intl.string(U.t["0A/8Rt"]),
        usePredicate: () => (0, f.bG)([i8.Ay], () => i8.Ay.supports(sV.O5.ATTENUATION)),
        buildLayout: () => [rb, rv, rj],
    }),
    rL = (0, E.zD)(h.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => U.intl.string(U.t.DFPXIG),
        useSubtitle: () => U.intl.string(U.t["UyRX+C"]),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            sm.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.showBypassSystemInputProcessing() && i8.Ay.isInputProfileCustom());
        },
    }),
    rR = (0, E.zD)(h.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => U.intl.string(U.t.jrWHD3),
        useSubtitle: () => U.intl.string(U.t.YCCMkJ),
        useValue: function () {
            return (0, f.bG)([ex.Ay], () => !ex.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, ro.A)("switch_channel_warning_enabled", e, !ex.Ay.disableVoiceChannelChangeAlert),
                nV.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rD = (0, E.zD)(h.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => U.intl.string(U.t.BbESsg),
        useSubtitle: () => U.intl.string(U.t.LoOB1F),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => {
                let { vadUseKrisp: e } = i8.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = i8.Ay.getMode();
            sm.default.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, f.bG)(
                [i8.Ay],
                () => i8.Ay.getMode() !== I.TBI.VOICE_ACTIVITY || !i8.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.isAdvancedVoiceActivitySupported() && i8.Ay.isInputProfileCustom());
        },
    }),
    rP = (0, E.Hn)(h.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => U.intl.string(U.t.wVBHr0),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rc(U.intl.string(U.t.uY7AcQ), U.intl.string(U.t.gBqik6), () => sm.default.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, f.cf)([i8.Ay], () => ({
                legacyAudioSubsystemSupported: i8.Ay.supports(sV.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i8.Ay.supports(sV.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i8.Ay.supports(sV.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return T.useMemo(() => {
                let i;
                return (
                    (i = [{ id: sV.rB.STANDARD, value: sV.rB.STANDARD, label: U.intl.string(U.t.dqb2JZ) }]),
                    e && i.push({ id: sV.rB.LEGACY, value: sV.rB.LEGACY, label: U.intl.string(U.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: sV.rB.EXPERIMENTAL, value: sV.rB.EXPERIMENTAL, label: U.intl.string(U.t.liQmtr) }),
                    n && i.push({ id: sV.rB.AUTOMATIC, value: sV.rB.AUTOMATIC, label: U.intl.string(U.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rG = (0, E.zD)(h.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => U.intl.string(U.t.uancuJ),
        useSubtitle: () => U.intl.string(U.t.I1Eoqq),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getQoS());
        },
        setValue: function (e) {
            sm.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.supports(sV.O5.QOS));
        },
    }),
    rM = (0, E.zD)(h.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => U.intl.string(U.t["4rsOPQ"]),
        useSubtitle: () => U.intl.string(U.t.jtiiCw),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            sm.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e6.isPlatformEmbedded;
        },
    }),
    rU = (0, E.bd)(h.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? U.intl.string(U.t.KHsSWK) : U.intl.string(U.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tf(h.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, f.bG)([i8.Ay], () => i8.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [ry, rD, rL, rC, rM, rR, rO, rP, rG],
    }),
    rV = (0, E.zD)(h.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => U.intl.string(U.t.iWTwu6),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            sm.default.setEchoCancellation(e, { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, f.bG)([i8.Ay, rf.A], () => {
                let e = i8.Ay.getInputDeviceId();
                return rf.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.isInputProfileCustom());
        },
    });
var rk = n(205693),
    rw = n(451988),
    rF = n(475883),
    rB = n(303707);
let rz = (0, tW.Ld)();
function rY(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, p.jsx)("div", {
        role: "meter",
        className: iu()(rF.$I, n),
        id: i,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? U.intl.string(U.t.haLKZ0) : U.intl.string(U.t.X2hJL7),
        children: (0, p.jsx)("div", { className: iu()(rF.Jx, rF.NU, { [rF.zY]: t && !r, [rF.r9]: r }) }),
    });
}
function rX(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, f.cf)([i8.Ay], () => ({
            threshold: i8.Ay.getModeOptions().threshold,
            autoThreshold: i8.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, f.bG)([i8.Ay], () => i8.Ay.getMode());
    return (0, p.jsx)("section", {
        className: iu()(rF.Mo, rF.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": s,
        children: (0, p.jsx)(q.G, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void sm.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n0.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n0.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rz,
            disabled: l,
            children: (0, p.jsxs)("div", {
                className: iu()(rF.NU, rF.TL, rF.Jx, rB.bar),
                children: [
                    (0, p.jsx)("div", { className: iu()(rF.GS, rF.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, p.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rH = (0, E.E2)(h.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [U.intl.string(U.t["sqUm+k"]), U.intl.string(U.t.I1Zuq0), U.intl.string(U.t.nuFtHH)],
    usePredicate: () => (0, f.bG)([i8.Ay], () => i8.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, f.cf)([i8.Ay], () => ({
                autoThreshold: i8.Ay.getModeOptions().autoThreshold,
                disabled: i8.Ay.getMode() !== sV.TB.VOICE_ACTIVITY,
            })),
            n = T.useCallback((e) => {
                let t = i8.Ay.getMode(),
                    { threshold: n } = i8.Ay.getModeOptions();
                sm.default.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, f.bG)([i8.Ay], () => i8.Ay.supports(sV.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = T.useState(-100),
                    [n, i] = T.useState(!1);
                function s(e, n) {
                    (t(e), i((n & sV.ME.VOICE) === sV.ME.VOICE));
                }
                return (
                    T.useEffect(() => {
                        let e = new rw.Ep();
                        return (
                            e.start(1e3, () => {
                                (i8.Ay.getMediaEngine().on(rk.bg.VoiceActivity, s), e.stop());
                            }),
                            () => {
                                (i8.Ay.getMediaEngine().removeListener(rk.bg.VoiceActivity, s), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, f.bG)([i8.Ay], () => i8.Ay.isEnabled()),
            a = T.useMemo(
                () =>
                    !r &&
                    (0, p.jsx)("div", {
                        className: rF.B4,
                        children: (0, p.jsx)(iH.w, {
                            type: "warning",
                            message: U.intl.format(U.t["O13I+O"], { onEnableClick: () => sm.default.enable(!0) }),
                            role: "status",
                        }),
                    }),
                [r],
            ),
            o = T.useMemo(() => (e ? U.intl.string(U.t.JsbzjA) : U.intl.string(U.t.MLmyMY)), [e]),
            u = T.useId(),
            d = T.useId();
        return i
            ? (0, p.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, p.jsx)(sc.A, { tag: "legend", id: u, children: U.intl.string(U.t.GByLar) }),
                      (0, p.jsx)(sc.A, { id: d, children: o }),
                      (0, p.jsxs)(Z.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, p.jsx)(t5.d, {
                                  disabled: t,
                                  label: U.intl.string(U.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, p.jsx)(rY, {
                                        isSpeaking: l,
                                        className: rF.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(rX, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, p.jsxs)(Z.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, p.jsx)(sa.D, {
                          label: U.intl.string(U.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, p.jsx)(rY, {
                                        isSpeaking: l,
                                        className: rF.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(rX, {
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
var rW = n(366010);
let rK = n(993830),
    rZ = n(413142),
    rq = { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO };
function rQ() {
    let e = (0, f.bG)([nw.A], () => (0, rW.q)(nw.A.theme));
    return (0, p.jsx)("img", { src: e ? rK : rZ, width: 48, height: 32, alt: "" });
}
let r$ = (0, E.E2)(h.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [U.intl.string(U.t.t8Qhib), U.intl.string(U.t.hmfkCi)],
    usePredicate: function () {
        return (0, f.bG)([i8.Ay], () => i8.Ay.isInputProfileCustom() && i8.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = T.useCallback((e) => {
                (sm.default.setNoiseCancellation("KRISP" === e, rq),
                    sm.default.setNoiseSuppression("STANDARD" === e, rq));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: s,
            } = (0, f.cf)([i8.Ay], () => ({
                noiseCancellation: i8.Ay.getNoiseCancellation(),
                noiseSuppression: i8.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: i8.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: i8.Ay.isNoiseCancellationSupported(),
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
        return (0, p.jsxs)(Z.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, p.jsx)(sr.l, {
                    label: U.intl.string(U.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, p.jsx)(rQ, {}),
            ],
        });
    },
});
var rJ = n(934729),
    r0 = n(621380);
let r1 = !nE.Av;
function r2() {
    return (0, f.bG)([i8.Ay], () => i8.Ay.getMode() === sV.TB.PUSH_TO_TALK);
}
let r3 = (0, E.zD)(h.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nE.Av ? U.intl.string(U.t.tG4Np5) : U.intl.string(U.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, f.bG)([i8.Ay], () => i8.Ay.getMode());
        return T.useMemo(() => {
            if (!nE.Av && e === sV.TB.PUSH_TO_TALK)
                return U.intl.format(U.t["VHI4+Y"], { onDownloadClick: () => (0, rJ._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, f.bG)([i8.Ay], () => i8.Ay.getActiveInputProfile() !== r0.m.STUDIO);
    },
    useValue: function () {
        return (0, f.bG)([i8.Ay], () => i8.Ay.getMode() === sV.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? sV.TB.PUSH_TO_TALK : sV.TB.VOICE_ACTIVITY),
            (i = [tV.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === sV.TB.PUSH_TO_TALK &&
                r1 &&
                (0, sx.openModalLazy)(async () => {
                    let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                    return (t) =>
                        (0, p.jsx)(e, {
                            title: U.intl.string(U.t.Kdt0Gb),
                            confirmText: U.intl.string(U.t["1WjMbC"]),
                            cancelText: U.intl.string(U.t.BddRzS),
                            onConfirm: () => (0, rJ._)("PTT Limited Modal"),
                            body: U.intl.string(U.t.NIozvt),
                            ...t,
                        });
                }),
            sm.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
});
var r5 = n(484599);
function r4(e) {
    let { shortcut: t } = e,
        n = (0, f.bG)([sl.Ay], () => sl.Ay.isWaylandPortalActive()),
        i = (0, f.bG)([sl.Ay], () => {
            let e = sl.Ay.getKeybindForAction(I.hCu.PUSH_TO_TALK, !0);
            return null != e ? sl.Ay.getWaylandPortalShortcutState(e.id) : null;
        });
    return n && 0 !== t.length
        ? sl.Ay.isWaylandPortalEligibleShortcut(t)
            ? null == i || i.bound
                ? null
                : (0, p.jsx)(iH.w, { type: "warning", message: U.intl.string(U.t.PTCrUP), role: "status" })
            : (0, p.jsx)(iH.w, { type: "warning", message: U.intl.string(U.t.J0m3aK), role: "status" })
        : null;
}
let r6 = (0, E.E2)(h.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
        usePredicate: r2,
        Component: function () {
            let e = (0, f.bG)([i8.Ay], () => {
                    let { shortcut: e } = i8.Ay.getModeOptions();
                    return e;
                }),
                t = U.intl.format(U.t.HVvn5T, {
                    onClick: () => (0, nr.openUserSettings)(h.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, p.jsx)(sa.D, {
                label: U.intl.string(U.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, p.jsxs)("div", {
                    className: r5.e,
                    children: [
                        (0, p.jsx)(sA.A, {
                            defaultValue: e,
                            onChange: (e) => {
                                let t = sl.Ay.getKeybindForAction(I.hCu.PUSH_TO_TALK, !0);
                                (null != t &&
                                    (0, ss.uL)(t.id, t.shortcut, e, sl.Ay.getWaylandPortalShortcutState(t.id)),
                                    sm.default.setMode(I.TBI.PUSH_TO_TALK, { shortcut: e }));
                            },
                        }),
                        (0, p.jsx)(r4, { shortcut: e }),
                    ],
                }),
            });
        },
    }),
    r8 = (0, E.sN)(h.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => U.intl.string(U.t.GCNMM8),
        useSearchTerms: () => [U.intl.string(U.t["pS+K2L"]), U.intl.string(U.t.nuFtHH)],
        setValue: function (e) {
            sm.default.setMode(I.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: I.IjB,
        getInitialValue: function () {
            let { delay: e } = i8.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: r2,
    });
var r7 = n(833473),
    r9 = n(844981),
    ae = n(798705);
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
            sm.default.setSpatialAudio(e, [tV.A.USER_SETTINGS_VOICE_AND_VIDEO]);
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
            let { enabledInputProfiles: e } = (0, rI._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [U.intl.string(U.t.nuFtHH), U.intl.string(U.t.VZPR0R), U.intl.string(U.t.cjPbpT)],
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getActiveInputProfile() ?? r0.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sm.default.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rI.d)({ location: "InputProfileCategory" });
            return [
                { value: r0.m.VOICE_ISOLATION, name: U.intl.string(U.t.cjPbpT), desc: U.intl.string(U.t.CzhvnE) },
                { value: r0.m.STUDIO, name: U.intl.string(U.t.VZPR0R), desc: U.intl.string(U.t.ZaJksS) },
                { value: r0.m.CUSTOM, name: U.intl.string(U.t["N/PQjv"]), desc: U.intl.string(U.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    as = (0, E.zZ)(h.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, f.bG)([rf.A, i8.Ay], () => {
                let e = i8.Ay.getInputDeviceId();
                return (
                    (rf.A.hasEchoCancellation(e) || rf.A.hasNoiseSuppression(e) || rf.A.hasAutomaticGainControl(e)) &&
                    i8.Ay.isInputProfileCustom()
                );
            });
            return T.useMemo(() => {
                if (e)
                    return {
                        type: S.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "status",
                        text: U.intl.string(U.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [ai, rH, r$, rV, an, r3, r6, r8, rU],
    });
var al = n(403581),
    ar = n(983851),
    aa = n(687021),
    ao = n(128450),
    au = n(796774),
    ad = n(209932),
    ac = n(813564),
    ag = n(984813),
    am = n(265872),
    aA = n(305866),
    aE = n(22231),
    ah = n(158045),
    ax = n(792348),
    aS = n(674168),
    ap = n(476254),
    aT = n(817232),
    af = n(647451);
function aI(e) {
    let { onSelect: t } = e,
        [n, i] = T.useState(!1),
        s = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        l = ah.Ay.canUseCustomCallSounds(s),
        r = T.useRef(null);
    function a(e) {
        l && (i(!1), t?.(e));
    }
    return (0, p.jsx)(am.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, p.jsx)(aA.l, {
                children: (0, p.jsx)(ap.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, p.jsx)(aS.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, p.jsx)(aT.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: U.intl.string(U.t.uOe0Az),
                children: (0, p.jsx)(aE.PencilIcon, { size: "md", color: "currentColor", className: af.Wo }),
            }),
    });
}
function a_(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, ax.A)(t, null),
        i =
            0 === (0, ac.wH)()
                ? U.intl.string(U.t.OASXjt)
                : U.intl.formatToPlainString(U.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, p.jsx)(aT.dT, {
        onClick: n,
        text: i,
        children: (0, p.jsx)(ar.H, { size: "md", color: "currentColor", className: af.wg }),
    });
}
function aN(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, p.jsxs)("div", {
        className: af.D6,
        children: [
            (0, p.jsxs)("div", {
                className: af.kL,
                children: [
                    a && (0, p.jsx)(tP.A, { emojiId: l, emojiName: r, className: af.Zg }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: af.dj,
                        children:
                            null == t
                                ? U.intl.string(U.t.PoWNfe)
                                : n
                                  ? U.intl.format(U.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, p.jsx)(Q.E, {
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
                        ? (0, p.jsx)(a_, { sound: t })
                        : (0, p.jsx)(ar.H, { size: "md", color: "currentColor", className: af.Gk }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: af.kL,
                children: [
                    (0, p.jsx)(aI, { onSelect: i }),
                    s &&
                        !n &&
                        (0, p.jsx)(aT.dT, {
                            onClick: () => i(null),
                            text: U.intl.string(U.t.jmtcGA),
                            children: (0, p.jsx)(su.TrashIcon, {
                                size: "md",
                                color: n0.A.unsafe_rawColors.RED_400.css,
                                className: af.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var aC = n(617617);
n(980504);
var ay = n(806050);
function ab(e) {
    return (0, f.bG)([ad.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return ad.A.getSound("0" === t ? "0" : t, n);
    });
}
function av(e) {
    let { guildId: t } = e,
        n = (0, f.bG)([aC.A], () => aC.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = ab(n);
    if (null == n || null == i) return null;
    let { emojiId: s, emojiName: l } = i,
        r = null != s || null != l;
    return (0, p.jsxs)("div", {
        className: ay.Io,
        children: [
            r
                ? (0, p.jsx)(tP.A, { emojiId: s, emojiName: l, className: ay.nW })
                : (0, p.jsx)(ar.H, { size: "md", color: "currentColor", className: ay.nW }),
            (0, p.jsx)(Q.E, { className: ay.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aj = (0, E.E2)(h.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [U.intl.string(U.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, ez.Ay)(),
            [t, n] = T.useState("0"),
            i = (0, ag.mz)(t),
            s = ab(i),
            l = i?.type === ag.PP.GLOBAL,
            r = (0, f.bG)([ad.A], () => ad.A.hasFetchedAllSounds()) && null != i && null == s;
        (T.useEffect(() => {
            r && (0, ac.ND)({ location: e });
        }, [r, e]),
            T.useEffect(() => {
                (0, au.E7)();
            }, []));
        let a = T.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, p.jsx)(av, { guildId: e.value }) : null;
        }, []);
        return (0, p.jsxs)(n2.n, {
            label: U.intl.string(U.t.nzUc3B),
            description: U.intl.format(U.t.u9RWmv, { helpdeskArticle: eC.A.getArticleURL(I.MVz.SOUNDBOARD) }),
            children: [
                (0, p.jsx)(aa.A, {
                    guildId: t,
                    className: ay.Dt,
                    globalOption: { label: U.intl.string(U.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, p.jsxs)(ao.A, {
                    title: U.intl.format(U.t.I2TsYN, {
                        nitroWheelHook: () => (0, p.jsx)(al.t, { size: "md", color: "currentColor", className: ay.ax }),
                    }),
                    children: [
                        (0, p.jsx)(aN, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, ac.Dv)(t, e) : (0, ac.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, p.jsx)("div", {
                                className: ay.lm,
                                children: (0, p.jsx)(iH.w, {
                                    type: "warning",
                                    message: U.intl.string(U.t.WkPsFR),
                                    role: "status",
                                }),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aO = n(824744);
let aL = (0, E.sN)(h.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => U.intl.string(U.t.kbFsAD),
    useSubtitle: () => U.intl.format(U.t.BPbGq7, { helpCenterArticle: eC.A.getArticleURL(I.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tV.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aO.w)(e);
        (0, au.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, ac.wH)();
        return (0, aO.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aR = n(864145);
let aD = (0, E.sN)(h.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t["2JbvKw"]),
        useSubtitle: () => U.intl.string(U.t.INenzY),
        setValue: function (e) {
            let t = (0, aO.w)(e);
            M.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = M.HO.getSetting();
            return (0, aO.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aR.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aP = (0, E.zZ)(h.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => U.intl.string(U.t.ABjMWI),
        buildLayout: () => [aL, aD, aj],
    });
var aG = n(803224),
    aM = n(552122);
let aU = (0, E.E2)(h.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [U.intl.string(U.t.fgSHf8)],
        usePredicate: () => null != aM.A.useHolidaySoundpack(),
        Component: () =>
            (0, p.jsx)(Q.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: U.intl.format(U.t.Eup6Wv, {
                    onClick: () => (0, nr.openUserSettings)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aV = (0, E.AK)(h.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.eyGEE4),
        useSearchTerms: () => [U.intl.string(U.t.eyGEE4)],
        destinationKey: h.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    ak = (0, E.gN)(h.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aV] });
var aw = n(264686);
let aF = (0, e_.D)(() => ({ currentPlayingSound: null }));
function aB() {
    let e = aF.getField("currentPlayingSound");
    (e?.stop(), aF.setState({ currentPlayingSound: null }));
}
function az(e) {
    let t = aF.getField("currentPlayingSound");
    t?.stop();
    let n = (0, n7.Ak)(e);
    aF.setState({ currentPlayingSound: n });
}
function aY(e) {
    return (0, E.zD)(`${h.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => U.intl.format(U.t.OOiGCM, { onClick: () => az(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, f.bG)([aG.A], () => aG.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aG.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aw.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, f.bG)([aG.A], () => aG.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aX = [
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
    aH = (0, E.D1)(h.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? U.intl.formatToPlainString(U.t["0JYT98"], { count: t })
                : U.intl.formatToPlainString(U.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tf(h.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aB();
            };
        },
        buildLayout: () => aX.map((e) => aY(e)),
    }),
    aW = (0, E.zZ)(h.X.SOUNDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, f.bG)([aG.A], () => aG.A.getDisableAllSounds());
            return T.useMemo(() => {
                if (e)
                    return {
                        type: S.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: U.intl.format(U.t.fRvixS, {
                            onClick: () => (0, nr.openUserSettings)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aH, aU, ak],
    }),
    aK = (0, E.zD)(h.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => U.intl.string(U.t.e3Zz3F),
        useSubtitle: () => U.intl.string(U.t.RztTjP),
        useValue: function () {
            return !M.uh.useSetting();
        },
        setValue: function (e) {
            ((0, ro.A)("stream_previews_disabled", !e, M.uh.getSetting(), [tV.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                M.uh.updateSetting(!e));
        },
    }),
    aZ = (0, E.zD)(h.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => U.intl.string(U.t.GmWk2E),
        useSearchTerms: () => [U.intl.string(U.t["Fj/xn1"])],
        useSubtitle: () => U.intl.string(U.t["Fj/xn1"]),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getVideoHook());
        },
        setValue: sm.default.setVideoHook,
        usePredicate: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.supportsVideoHook());
        },
    }),
    aq = (0, E.zD)(h.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => U.intl.string(U.t["4I0qzZ"]),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getExperimentalSoundshare());
        },
        setValue: sm.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, f.bG)([i8.Ay], () => {
                let e = i8.Ay.supportsExperimentalSoundshare(),
                    t = i8.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    aQ = (0, E.zD)(h.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => U.intl.string(U.t["/jwMtn"]),
        useSubtitle: () => U.intl.string(U.t.zlA23F),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sm.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i8.Ay.supports(sV.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a$ = (0, E.sN)(h.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => U.intl.string(U.t.fhEzfj),
        setValue: function (e) {
            let t = [tV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sm.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i8.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, f.bG)([i8.Ay], () => i8.Ay.getSidechainCompression());
            return i8.Ay.supports(sV.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    aJ = (0, E.zD)(h.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => U.intl.string(U.t.lt8rRx),
        useSubtitle: () => U.intl.string(U.t.ie1mgY),
        useValue: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nE.cX)() && e
                ? (0, n1.A)({
                      title: U.intl.string(U.t["9jf31O"]),
                      subtitle: U.intl.string(U.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (sm.default.setUseSystemScreensharePicker(e), nS.A.app.relaunch());
                      },
                      confirmText: U.intl.string(U.t.BddRzS),
                  })
                : sm.default.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, f.bG)([i8.Ay], () => i8.Ay.supportsSystemScreensharePicker() && (0, nE.cX)());
        },
    }),
    a0 = (0, E.bd)(h.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? U.intl.string(U.t.qrMyvm) : U.intl.string(U.t.LEtTNl)),
        useCollapsedSubtitle: () => tf(h.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aQ, a$, aJ, aq, aZ],
    }),
    a1 = (0, E.zZ)(h.X.STREAMING_CATEGORY, { useTitle: () => U.intl.string(U.t.KDdjou), buildLayout: () => [aK, a0] });
var a2 = n(106713);
let a3 = (0, E.E2)(h.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a2.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, p.jsx)(lw.U, {
                label: U.intl.string(U.t.UTM8VP),
                deviceType: sV.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a5 = (0, E.E2)(h.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = a2.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, p.jsx)(lw.U, {
                label: U.intl.string(U.t.xuYQ0n),
                deviceType: sV.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a4 = (0, E.zC)(h.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [a3, a5] }),
    a6 = (0, E.sN)(h.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i8.Ay.getInputVolume();
            return (0, aO.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tV.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aO.w)(e);
            sm.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    a8 = (0, E.sN)(h.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => U.intl.string(U.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i8.Ay.getOutputVolume();
            return (0, aO.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tV.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aO.w)(e);
            sm.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    a7 = (0, E.zC)(h.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [a6, a8] });
var a9 = n(702841),
    oe = n(152567),
    ot = n(804037);
let on = `${eC.A.getArticleURL(I.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    oi = (0, E.E2)(h.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t.nuFtHH)],
        usePredicate: function () {
            return (0, a9.bG)([i8.Ay], () => i8.Ay.supports(sV.O5.LOOPBACK));
        },
        Component: function () {
            return (0, a9.bG)([i8.Ay], () => i8.Ay.supports(sV.O5.LOOPBACK))
                ? (0, p.jsx)(oe.A, {
                      size: "md",
                      notchBackground: oe.V.GRAY,
                      captionVoice: U.intl.string(U.t.bp3JOV),
                      captionNoVoice: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: U.intl.string(U.t.bgn75v),
                              }),
                              U.intl.string(U.t["MA+OZh"]),
                              (0, p.jsx)(nl.Anchor, {
                                  className: ot.X,
                                  href: eC.A.getArticleURL(I.MVz.NO_INPUT_DETECTED),
                                  children: U.intl.string(U.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: U.intl.format(U.t["V+B3FH"], { guideURL: on }),
                      buttonTest: U.intl.string(U.t.gyljWE),
                      buttonStop: U.intl.string(U.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: I.liQ.USER_SETTINGS, section: I.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    os = e6.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function ol(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, p.jsxs)(Z.B, {
        children: [
            n && (0, p.jsx)(sn, { sourcePage: "voice" }),
            t && (0, p.jsx)(s8.A, { look: s8.k.WARNING, children: U.intl.string(U.t.Ioz3gx) }),
        ],
    });
}
let or = (0, E.zZ)(h.X.VOICE_CATEGORY, {
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
            let e = st("voice"),
                t = (0, lF.x5)(sV.oh.AUDIO_INPUT),
                n = (0, lF.x5)(sV.oh.AUDIO_OUTPUT),
                i = T.useMemo(() => {
                    let e = os.some((e) => t?.hardwareId?.startsWith(e)),
                        i = os.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return T.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: S.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, p.jsx)(ol, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [a4, a7, oi],
    }),
    oa = (0, E.t_)(h.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => U.intl.string(U.t.B1fFpf),
        buildLayout: () => [or, as, lK, a1, aW, aP, rT, rm],
    }),
    oo = (0, E.i4)(h.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.B1fFpf),
        usePredicate: () => i8.Ay.isSupported(),
        icon: lO.MicrophoneIcon,
        useMenu: lL.A,
        buildLayout: () => [oa],
    }),
    ou = (0, E.WI)(h.X.APP_SECTION, {
        useTitle: () => U.intl.string(U.t.gcyH1J),
        buildLayout: () => [oo, nK, te, iz, lj, n$],
    });
var od = n(360669),
    oc = n(974544),
    og = n(975807),
    om = n(534247);
function oA(e) {
    let { title: t, children: n, actions: i, graphicSrc: s, footnote: l, size: r = "default" } = e,
        a = "compact" === r;
    return (0, p.jsxs)("div", {
        className: iu()(om.kL, { [om.oE]: a }),
        children: [
            (0, p.jsxs)(Z.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: a ? 24 : 16,
                fullWidth: !1,
                className: om.Qs,
                children: [
                    (0, p.jsxs)(Z.B, {
                        direction: "vertical",
                        align: "start",
                        gap: a ? 12 : 8,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: a ? "heading-lg/bold" : "heading-xl/bold",
                                color: "text-strong",
                                children: t,
                            }),
                            n,
                        ],
                    }),
                    (i.length > 0 || null != l) &&
                        (0, p.jsxs)(Z.B, {
                            direction: "vertical",
                            align: "start",
                            gap: 12,
                            children: [
                                i.length > 0 &&
                                    (0, p.jsx)(Z.B, {
                                        direction: "horizontal",
                                        gap: a ? 12 : 16,
                                        wrap: !0,
                                        fullWidth: !1,
                                        children: i.map((e) =>
                                            (0, p.jsx)(
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
                                    (0, p.jsx)(Q.E, { variant: "text-xxs/normal", color: "text-subtle", children: l }),
                            ],
                        }),
                ],
            }),
            (0, p.jsx)("img", { src: s, className: om.fA, alt: "" }),
        ],
    });
}
var oE = n(425565),
    oh = n(891262),
    ox = n(936564),
    oS = n(417792),
    op = n(423764),
    oT = n(289873),
    of = n(132500),
    oI = n(465323),
    o_ = n(37766),
    oN = n(194261),
    oC = n(391048),
    oy = n(277984),
    ob = n(99696),
    ov = n(202613),
    oj = n(615405),
    oO = n(83617),
    oL = n(935208),
    oR = n(607399),
    oD = n(993077),
    oP = n(150934),
    oG = n(256006),
    oM = n(198970),
    oU = n(71532);
let oV = /[^0-9/]/g,
    ok = /[^0-9]/g;
class ow extends T.PureComponent {
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
                ((i = (n = e.replace(oV, "").split("/"))[0]),
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
            ? (u = u.replace(ok, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, p.jsx)(sS.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var oF = n(832208),
    oB = n(782328);
let oz = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tW.Ld)(),
                        title: () => U.intl.string(U.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => U.intl.string(U.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => oB.ep,
                        renderInput: (e) => (0, p.jsx)(ow, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oY = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: s } = e,
            [l, r] = T.useState(!1),
            [a, o] = T.useState(null),
            [u, d] = T.useState(i);
        return (
            T.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(oF.A, {
                className: n,
                form: oz,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    (l || "" === e || r(!0),
                        (l && "" === e) || !(0, oU.So)(e) ? o(U.intl.string(U.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oX = n(219887),
    oH = n(292856);
let oW = "isDefault";
class oK extends T.PureComponent {
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
            expiresMonth: t instanceof ov.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof ov.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ((0, oy.ey)(), (0, oy.tc)());
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(ir.Vq).length))
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
                ? (0, p.jsx)("div", {
                      className: oH.zc,
                      children: (0, p.jsx)(iH.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: oH.zc,
                  children: (0, p.jsx)(iH.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oG.g)(n);
        return (0, p.jsxs)("div", {
            className: oH.yV,
            children: [
                (0, p.jsx)(Q.E, {
                    className: oH.bV,
                    variant: "text-sm/normal",
                    children: U.intl.string(U.t["50Auo2"]),
                }),
                (0, p.jsx)(oM.Ay, {
                    ...e,
                    mode: oM.Ay.Modes.EDIT,
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
            className: oH.yV,
            children: [
                (0, p.jsx)(Q.E, { className: oH.bV, variant: "text-sm/normal", children: U.intl.string(U.t.Fo2YP7) }),
                (0, p.jsx)(oY, {
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
        return (0, p.jsx)("div", {
            className: oH.AU,
            children: (0, p.jsxs)(Z.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(l0.e, {
                        children: (0, p.jsxs)("div", {
                            className: oH.lH,
                            children: [
                                n
                                    ? (0, p.jsx)(sd.m, {
                                          text: U.intl.string(U.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: oH.dm }),
                                      })
                                    : null,
                                (0, p.jsx)(v.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oR.Fr ? "sm" : "md",
                                    text: oR.Fr ? U.intl.string(U.t.oyYWHE) : U.intl.string(U.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, p.jsxs)(l0.e, {
                        children: [
                            (0, p.jsx)(v.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oR.Fr ? "sm" : "md",
                                text: U.intl.string(U.t["ETE/oC"]),
                            }),
                            (0, p.jsx)(v.$, {
                                loading: e,
                                disabled: !i || t || !s,
                                type: "submit",
                                variant: "active",
                                size: oR.Fr ? "sm" : "md",
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
            r = e instanceof ov.SJ;
        return (0, p.jsx)(oD.Z, {
            editable: !0,
            className: iu()(oH.Nr, i),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: oH.__invalid_paymentSection,
                        children: [
                            (0, p.jsx)(oX.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, p.jsx)("div", { className: oH.Um, children: U.intl.string(U.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: oH.Sv,
                                children: r
                                    ? U.intl.format(U.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : U.intl.string(U.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: oH.D5,
                        children: (0, p.jsx)(oP.S, {
                            value: oW,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, oW),
                            label: U.intl.string(U.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, p.jsx)(si.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let oZ = f.Ay.connectStores([oj.A], () => ({ updateError: oj.A.editSourceError, removeError: oj.A.removeSourceError }))(
    oK,
);
var oq = n(693351),
    oQ = n(849405),
    o$ = n(329693);
function oJ() {
    (0, ob.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, of.A)() });
}
class o0 extends T.PureComponent {
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
            ? (0, p.jsx)(oZ, {
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
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      i ? null : (0, p.jsx)(si.c, { className: o$.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: o$.Yb,
                          children: [
                              (0, p.jsx)(oX.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, p.jsx)(v.$, {
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
let o1 = T.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: s, onRedeemClick: l } = e,
        [r, a] = T.useState(null),
        o = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, f.bG)([oj.A], () => oj.A.ipCountryCode),
        d = T.useMemo(() => (0, oI.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        T.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oy.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                n ? null : (0, p.jsx)(si.c, { className: o$.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: o$.Yb,
                    children: [
                        void 0 !== t
                            ? (0, p.jsx)(oX.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, p.jsxs)(sI.A, {
                                  align: sI.A.Align.CENTER,
                                  children: [
                                      (0, p.jsx)(o_._, { size: "lg" }),
                                      (0, p.jsx)(Q.E, {
                                          variant: "text-sm/medium",
                                          className: oQ.Wi,
                                          children: U.intl.string(oq.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, p.jsxs)("div", {
                            className: o$.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: o$.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(oT.y, { type: oT.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oI.$g)(e ?? 0, n, s, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${String(n).toUpperCase()} ${i}`;
                                                  })(),
                                              }),
                                }),
                                (0, p.jsx)(v.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: U.intl.string(oq.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class o2 extends T.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oy.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oy.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oy.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oO.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, sx.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, oC.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: o$.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: o$.z8,
                          children: [
                              (0, p.jsx)(Q.E, { variant: "text-sm/normal", children: U.intl.string(U.t.aRHpAB) }),
                              (0, p.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: o$.Sv,
                                  children: U.intl.string(U.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, p.jsx)(v.$, { onClick: this.handleAddPaymentMethod, text: U.intl.string(U.t.CpOiEO) }),
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oL.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof ov.LQ)),
            c = u.filter((e) => e instanceof ov.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, p.jsx)(
                    o0,
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
                          (0, p.jsx)(
                              o1,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: oJ,
                              },
                              e.id,
                          ),
                      )
                    : (0, p.jsx)(o1, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: oJ,
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(N.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(oN.LockIcon, { size: "sm", className: o$.hz }),
                                          " ",
                                          U.intl.string(U.t.W26xGQ),
                                      ],
                                  }),
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: U.intl.string(U.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, p.jsx)(si.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var o3 = n(459357),
    o5 = n(295405),
    o4 = n(166403),
    o6 = n(773669),
    o8 = n(943009);
function o7() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, op.Gw)(e.country) };
}
let o9 = (0, E.E2)(h.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, f.bG)([oj.A], () => oj.A.isSyncing),
                i = (0, f.bG)([o5.A], () => o5.A.paymentSources),
                s = (0, f.bG)([o5.A], () => o5.A.defaultPaymentSourceId),
                l = (0, f.bG)([o6.default], () => o6.default.locale),
                r = (0, f.bG)([o4.A], () => o4.A.getPremiumTypeSubscription()),
                a = (0, f.bG)([oj.A], () => oj.A.isRemovingPaymentSource),
                o = (0, f.bG)([oj.A], () => oj.A.isUpdatingPaymentSource),
                { enabled: u } = (0, o3.c)({ location: "UserSettingsBilling" });
            return (T.useEffect(() => {
                (oy.$o(), oy.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, p.jsx)("div", { className: o8.o, children: (0, p.jsx)(oT.y, {}) })
                : (0, p.jsx)(o2, {
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
    ue = (0, E.E2)(h.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = T.useMemo(
                () => [
                    { text: U.intl.string(oh.default["6bWeWP"]), onClick: () => (0, og.A)(oE.C1) },
                    {
                        text: U.intl.string(oh.default.xYa9Y8),
                        onClick: () => (0, og.A)(eC.A.getArticleURL(I.MVz.BUY_GIFT_CARDS)),
                    },
                ],
                [],
            );
            return (0, p.jsx)("div", {
                className: ox.k,
                children: (0, p.jsx)(oA, {
                    title: U.intl.string(oh.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: e,
                    children: (0, p.jsx)(Q.E, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: U.intl.string(oh.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (0, oS.y)({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    ut = (0, E.zZ)(h.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.W26xGQ),
        useSubtitle: () => {
            let e = o7();
            return null != e ? U.intl.format(U.t.e2t1G5, { country: e.countryName }) : U.intl.string(U.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == o7()
                ? null
                : {
                      type: S.p3.INFO_POPOVER,
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
        buildLayout: () => [o9, ue],
    });
var un = n(662490),
    ui = n(945810);
let us = (0, ui.mj)({
    name: "2026-10-purchase-history",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ul = n(837381),
    ur = n(689175),
    ua = n(928039),
    uo = n(39190),
    uu = n(32731),
    ud = n(380098),
    uc =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    ug =
        (((s = {})[(s.NITRO = 1)] = "NITRO"),
        (s[(s.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (s[(s.SHOP = 3)] = "SHOP"),
        (s[(s.APPLICATION = 4)] = "APPLICATION"),
        (s[(s.PRODUCT = 5)] = "PRODUCT"),
        s),
    um =
        (((l = {})[(l.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (l[(l.REFUNDED = 2)] = "REFUNDED"),
        (l[(l.REVERSED = 3)] = "REVERSED"),
        l),
    uA =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    uE =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uh(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? ov.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? uu.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new ud.A({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let ux = { receipts: [], cursor: null };
var uS = n(34188),
    up = n(597770),
    uT = n(206828),
    uf = n(576243),
    uI = n(147925),
    u_ = n(707554),
    uN = n(957565),
    uC = n(458790),
    uy = n(39209),
    ub = n(510022),
    uv = n(427262),
    uj = n(106799),
    uO = n(580630),
    uL = n(818348),
    uR = n(460103);
let uD = (e) => `https://${I.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function uP(e, t) {
    return t === uL.Yr.DISCORD_ORB
        ? (0, p.jsxs)("span", {
              className: uR.db,
              children: [
                  (0, p.jsx)(uj.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  U.intl.formatToPlainString(U.t.YMor7k, { count: e }),
              ],
          })
        : (0, uO.$g)(e, t);
}
function uG(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: s } = e,
        { analyticsLocations: l } = (0, ez.Ay)(tV.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uE.REDEEMED
        ? null
        : n.status === uE.REFUNDED
          ? (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(u_.H, { className: uR.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                    (0, p.jsx)("div", {
                        className: uR.iL,
                        children:
                            null != o
                                ? U.intl.format(U.t.Q1K9eg, { username: uv.Ay.getName(o) })
                                : U.intl.format(U.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uE.CLAIMED || n.status === uE.UNCLAIMED
            ? (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(u_.H, { className: uR.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: uR.iL,
                          children:
                              null != o
                                  ? U.intl.format(U.t.vfUW65, { username: uv.Ay.getName(o) })
                                  : U.intl.string(U.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, p.jsx)("div", {
                              className: uR.TP,
                              children: (0, p.jsx)(v.$, {
                                  variant: "primary",
                                  text: U.intl.string(U.t["jcSP+g"]),
                                  onClick: () => (0, nr.openUserSettings)(h.X.GIFT_PANEL),
                              }),
                          }),
                  ],
              })
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(u_.H, { className: uR.mW, children: U.intl.string(U.t["gIGB/A"]) }),
                      (0, p.jsx)("div", {
                          className: uR.iL,
                          children: s
                              ? U.intl.format(U.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : U.intl.format(U.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, p.jsx)("div", {
                          className: uR.TP,
                          children: s
                              ? (0, p.jsx)(v.$, {
                                    variant: "primary",
                                    text: U.intl.string(U.t.zoztQA),
                                    onClick: () => (0, og.A)(uD(i)),
                                })
                              : (0, p.jsx)(v.$, {
                                    variant: "primary",
                                    text: U.intl.string(U.t["jCqvk/"]),
                                    onClick: () => {
                                        null != r &&
                                            null != a &&
                                            (tu.default.track(I.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
                                                sku_id: r.id,
                                                application_id: a.id,
                                                location_stack: l,
                                            }),
                                            (0, ub.n)({ sku: r, application: a, analyticsLocations: l }));
                                    },
                                }),
                      }),
                  ],
              });
}
var uM = n(933832),
    uU = n(789645);
function uV(e) {
    let { refund: t, locale: n } = e,
        i = uD(n),
        s = t.eligible ? uM.CheckmarkLargeIcon : uU.P;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(u_.H, { className: uR.mW, children: U.intl.string(U.t["n/27pr"]) }),
            (0, p.jsxs)("div", {
                className: uR.iL,
                children: [
                    (0, p.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uA.IN_GAME_ITEM
                                    ? U.intl.format(U.t["5lvoVS"], { supportURL: t })
                                    : U.intl.string(U.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uA.PREMIUM:
                                    return e.eligible
                                        ? U.intl.format(U.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : U.intl.formatToPlainString(U.t.dk7vyL, { dateLimit: n });
                                case uA.GIFT:
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
                    t.policy !== uA.IN_GAME_ITEM &&
                        (0, p.jsxs)("div", {
                            className: uR.My,
                            children: [
                                (0, p.jsx)("div", {
                                    className: uR.Kf,
                                    children:
                                        null != t.window &&
                                        (0, p.jsxs)("div", {
                                            className: uR._Z,
                                            children: [
                                                (0, p.jsx)(u_.H, {
                                                    className: uR.ud,
                                                    children: U.intl.string(U.t.H0RNz4),
                                                }),
                                                (0, p.jsxs)("div", {
                                                    className: uR.z9,
                                                    children: [
                                                        (0, p.jsx)(s, { className: uR.xb, color: "currentColor" }),
                                                        (0, p.jsx)("div", {
                                                            children: U.intl.formatToPlainString(U.t["7dtXa/"], {
                                                                daysSincePurchase: t.window.days_since_purchase,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(nl.Anchor, { href: i, children: U.intl.string(U.t.re5nOB) }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var uk = n(679897);
function uw(e) {
    let { description: t, cost: n } = e;
    return (0, p.jsx)("li", {
        className: uR.mg,
        children: (0, p.jsxs)(sI.A, {
            justify: sI.A.Justify.BETWEEN,
            children: [(0, p.jsx)("div", { children: t }), (0, p.jsx)("div", { children: n })],
        }),
    });
}
function uF(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(!1);
    return (0, p.jsx)(sd.m, {
        forceOpen: r,
        text: s ? i : n,
        children: (0, p.jsx)(n3.D, {
            onMouseEnter: () => {
                s && l(!1);
            },
            onMouseLeave: () => {
                a(!1);
            },
            onClick: function () {
                (0, uN.C)(t, () => {
                    (a(!0), l(!0));
                });
            },
            children: (0, p.jsx)("div", { className: uR.l9, children: t }),
        }),
    });
}
function uB(e) {
    let { paymentId: t } = e;
    return (0, p.jsx)("li", {
        className: uR.mg,
        children: (0, p.jsxs)("div", {
            className: uR.bx,
            children: [
                (0, p.jsx)("div", { children: U.intl.string(U.t["UQim+r"]) }),
                (0, p.jsx)(uF, {
                    value: t,
                    copyText: U.intl.string(U.t["Mdk9+A"]),
                    copyFeedbackText: U.intl.string(U.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function uz(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === um.REVERSED;
    return (0, p.jsxs)(Q.E, {
        variant: "text-xxs/semibold",
        color: "none",
        tag: "span",
        className: iu()(uk.XM, n ? uk.aB : uk.EN),
        children: [
            t === um.REVERSED && U.intl.string(U.t.YQv9Li),
            t === um.PARTIALLY_REFUNDED && U.intl.string(U.t.lYbZzz),
            t === um.REFUNDED && U.intl.string(U.t.ZBb6NK),
        ],
    });
}
function uY(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === uL.kM.APPLE_PARTNER ? new ov.Pw({}) : null);
    return null == i
        ? null
        : (0, p.jsx)(oX.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: uR.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function uX(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, p.jsx)(uY, { payment: t.payments[0], locale: n })
            : null
        : (0, p.jsx)(Z.B, {
              children: t.payments.map((e) =>
                  (0, p.jsxs)(
                      sI.A,
                      {
                          justify: sI.A.Justify.BETWEEN,
                          align: sI.A.Align.CENTER,
                          children: [
                              (0, p.jsx)(uY, { payment: e, locale: n }),
                              (0, p.jsxs)(Z.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, p.jsx)(uz, { tag: e.tag }),
                                      (0, p.jsx)(Q.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          children: uP(e.amount, t.currency),
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
function uH(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)("div", { className: uR.ts }),
            t.delisted
                ? (0, p.jsx)(iH.w, {
                      type: "warning",
                      message: U.intl.string(U.t["3AvulN"]),
                      role: "none",
                      action: { text: U.intl.string(U.t.zoztQA), onClick: () => (0, og.A)(uD(n)) },
                  })
                : null != t.guild_id && (0, p.jsx)(uC.Q, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function uW(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: s, guild_product: l, game_item: r, refund: a } = t;
    return (0, p.jsx)(n3.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, p.jsxs)("div", {
            className: uR.WI,
            children: [
                (0, p.jsx)(u_.H, { className: uR.mW, children: U.intl.string(U.t.nyzoFb) }),
                (0, p.jsxs)("div", {
                    className: iu()(uR.iL, uR.W),
                    children: [
                        (0, p.jsx)(uX, { receipt: t, locale: n }),
                        (0, p.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(uw, { description: t.description, cost: uP(t.subtotal, s) }),
                                            (0, p.jsx)(uw, {
                                                description: U.intl.string(U.t.QgWXht),
                                                cost: uP(t.tax, s),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(uw, { description: U.intl.string(U.t.txajQG), cost: uP(t.total, s) }),
                                t.amount_refunded > 0 &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(uw, {
                                                description: U.intl.string(U.t["A+I0AP"]),
                                                cost: uP(-t.amount_refunded, s),
                                            }),
                                            (0, p.jsx)(uw, {
                                                description: U.intl.string(U.t.xER6Wi),
                                                cost: uP(t.net, s),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(uB, { paymentId: t.id }),
                                l?.guild_id != null &&
                                    (0, p.jsx)(uC.u, { guildId: l.guild_id, guildProductListingId: l.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != l && (0, p.jsx)(uH, { guildProduct: l, locale: n }),
                (0, p.jsx)(uy.A, { payment: t.receipt_payment }),
                null != r && (0, p.jsx)(uG, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, p.jsx)(uV, { refund: a, locale: n }),
            ],
        }),
    });
}
function uK(e) {
    let { withGradient: t } = e;
    return t
        ? (0, p.jsx)(uf.A, { size: 24, iconSize: 16, color: n0.A.unsafe_rawColors.NEUTRAL_1, className: uR.Sy })
        : (0, p.jsx)("div", {
              className: iu()(uR.Sy, uR.uX, uR.Xr),
              children: (0, p.jsx)(al.t, { size: "custom", width: 16, height: 16, color: n0.A.colors.ICON_DEFAULT }),
          });
}
function uZ(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, f.bG)([sy.A], () => sy.A.getGuild(n?.guildId));
    switch (t.icon) {
        case ug.NITRO:
            return (0, p.jsx)(uK, { withGradient: !0 });
        case ug.NITRO_BASIC:
            return (0, p.jsx)(uK, { withGradient: !1 });
        case ug.SHOP:
            return (0, p.jsx)(uS.U, { size: "custom", width: 23, height: 23, color: "currentColor", className: uR.sV });
        case ug.APPLICATION:
        case ug.PRODUCT:
            return (0, p.jsx)(i6.A, {
                className: uR.Sy,
                guildClassName: uR.zA,
                game: t.icon === ug.APPLICATION ? n : void 0,
                guild: i,
                size: i6.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function uq(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uc.PAID)
        switch (i.status) {
            case uE.CLAIMED:
                return (0, p.jsx)("span", { className: uR.gD, children: U.intl.string(U.t.lIsIFo) });
            case uE.UNCLAIMED:
                return (0, p.jsx)("span", { className: uR.Tf, children: U.intl.string(U.t["+tqSi3"]) });
            case uE.REDEEMED:
                return (0, p.jsx)("span", { className: uR.gD, children: U.intl.string(U.t.Osji1u) });
            case uE.FAILED:
                return (0, p.jsx)("span", { className: uR.ob, children: U.intl.string(U.t.Yo4ru6) });
            default:
                return n
                    ? (0, p.jsx)("span", { className: uR.Tf, children: U.intl.string(U.t.y7F0Re) })
                    : (0, p.jsx)("span", { className: uR.Tf, children: U.intl.string(U.t.HHC5Z4) });
        }
    switch (t.status) {
        case uc.PENDING:
            return (0, p.jsx)("span", { className: uR.Xg, children: U.intl.string(U.t.y7F0Re) });
        case uc.FAILED:
            return (0, p.jsx)("span", { className: uR.ob, children: U.intl.string(U.t.Yo4ru6) });
        case uc.REVERSED:
            return (0, p.jsx)("span", { className: uR.ob, children: U.intl.string(U.t.YQv9Li) });
        case uc.CANCELED:
            return (0, p.jsx)("span", { className: uR.ob, children: U.intl.string(U.t.ttkBhy) });
        case uc.PARTIALLY_REFUNDED:
            return (0, p.jsx)("span", { className: uR.gD, children: U.intl.string(U.t.lYbZzz) });
        case uc.REFUNDED:
            return (0, p.jsx)("span", { className: uR.gD, children: U.intl.string(U.t.ZBb6NK) });
        case uc.PAID:
            return null;
    }
}
function uQ(e) {
    let { receipt: t, locale: n, className: i } = e,
        [s, l] = T.useState(!1),
        { hasAlreadyLinked: r } = (0, uT.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, p.jsx)(ul.tG, {
        id: t.id,
        children: (e) =>
            (0, p.jsxs)(n3.D, {
                onClick: () => l(!s),
                "data-expanded": s,
                className: iu()(uR.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, p.jsxs)(sI.A, {
                        className: uR.J7,
                        align: sI.A.Align.CENTER,
                        "data-expanded": s,
                        children: [
                            (0, p.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                className: uR.p6,
                                children: (0, ig.i$)(ic()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, p.jsxs)("div", {
                                className: uR.h_,
                                children: [
                                    (0, p.jsx)(uZ, { receipt: t }),
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
                                                                      return (0, ah.xq)(t)
                                                                          ? ah.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${ah.Ay.getDisplayName(t, !1, i)}`;
                                                                  })
                                                                  .join(", ");
                                                          case I.rzx.GUILD:
                                                              if (null == t.plan_name) return null;
                                                              return U.intl.formatToPlainString(
                                                                  t.interval === tQ.WT.YEAR
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
                                        ? (0, p.jsx)(sd.m, {
                                              text: U.intl.string(U.t.QddTpm),
                                              children: (0, p.jsx)(up.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: uR.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, p.jsxs)("div", {
                                className: uR.vj,
                                children: [
                                    (0, p.jsx)(uq, { receipt: t, hasLinkedToApplication: r }),
                                    (0, p.jsx)("span", { className: uR.q9, children: uP(t.net, t.currency) }),
                                ],
                            }),
                            (0, p.jsx)(uI.A, {
                                className: uR.fT,
                                direction: s ? uI.A.Directions.UP : uI.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    s ? (0, p.jsx)(uW, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var u$ = n(949779);
function uJ(e) {
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
        d = (0, ua.A)("billing-history", s);
    return (0, p.jsx)(ul.hD, {
        navigator: d,
        children: (0, p.jsx)(ul.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, p.jsx)(uo.A, {
                    className: u$.GD,
                    currentPageIndex: l,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, p.jsx)(ur.Ch, {
                        className: u$.Bd,
                        ref: s,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, p.jsx)(uQ, { className: iu()(u$.Nj, u$.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function u0(e) {
    let { subscription: t } = e;
    return (
        tA()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, p.jsxs)(oD.Z, {
            className: u$.K1,
            children: [
                (0, p.jsx)("div", {
                    className: u$.BF,
                    children: U.intl.format(U.t["6mIX6s"], { paymentGatewayName: uL.qm[t.paymentGateway] }),
                }),
                (0, p.jsx)("div", {
                    className: u$.Q2,
                    children: U.intl.format(U.t.eG0uZB, {
                        paymentGatewayName: uL.qm[t.paymentGateway],
                        billingHistoryLink: (0, ah.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function u1(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: s,
            loadNextPage: l,
        } = (function () {
            let [e, t] = T.useState(ux),
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
                                s = i.receipts.map(uh);
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
        r = (0, f.bG)([o4.A], () => o4.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, p.jsxs)("div", {
              className: u$.GD,
              children: [
                  null != r && a ? (0, p.jsx)(u0, { subscription: r }) : null,
                  n.length > 0
                      ? (0, p.jsxs)("div", {
                            className: iu()(u$.PQ, u$.GD),
                            children: [
                                (0, p.jsx)("div", {
                                    className: iu()(u$.Nj, u$.Bd),
                                    children: (0, p.jsxs)(sI.A, {
                                        className: u$.Yi,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: uR.p6,
                                                children: U.intl.string(U.t["5t11BV"]),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: u$.Ir,
                                                children: U.intl.string(U.t.yAAPb2),
                                            }),
                                            (0, p.jsx)("div", {
                                                className: uR.vj,
                                                children: U.intl.string(U.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, p.jsx)(uJ, { receipts: n, locale: t, loadNextPage: l }),
                            ],
                        })
                      : s
                        ? (0, p.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: U.intl.string(U.t["fb3n+4"]),
                          })
                        : a
                          ? null
                          : (0, p.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: U.intl.string(U.t.GqvDkk),
                            }),
              ],
          })
        : (0, p.jsx)(oT.y, {});
}
var u2 = n(545075);
let u3 = (0, E.E2)(h.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            var e;
            let t = (0, f.bG)([o6.default], () => o6.default.locale),
                { enabled: n } = ((e = { location: "TransactionHistory" }), { enabled: us.useConfig(e).enabled });
            return (0, p.jsxs)(p.Fragment, {
                children: [(0, p.jsx)(u2.kb, {}), n ? (0, p.jsx)(u1, { locale: t }) : (0, p.jsx)(un.A, { locale: t })],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.obLrcK)],
    }),
    u5 = (0, E.zZ)(h.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.obLrcK),
        buildLayout: () => [u3],
    }),
    u4 = (0, E.t_)(h.X.BILLING_PANEL, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [ut, u5],
        useObscuredNotice: oc.L,
    }),
    u6 = (0, E.i4)(h.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        icon: od.B,
        buildLayout: () => [u4],
    });
var u8 = n(70283),
    u7 = n(682618),
    u9 = n(92202),
    de = n(139486),
    dt = n(962644),
    dn = n(35587),
    di = n(86379);
let ds = (0, E.E2)(h.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: u2.uK,
        usePredicate: () => (0, di.Hp)(),
        useSearchTerms: () => [U.intl.string(U.t.vwMEHS)],
    }),
    dl = (0, E.zZ)(h.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [ds] });
var dr = n(704333),
    da = n(414499),
    du = n(31300),
    dd = n(997101);
let dc = "https://discord.com",
    dg = {
        [dd.d.US]: [
            { id: "walmart", name: "Walmart", url: dc },
            { id: "target", name: "Target", url: dc },
            { id: "amazon", name: "Amazon", url: dc },
            { id: "best_buy", name: "Best Buy", url: dc },
        ],
        [dd.d.GB]: [
            { id: "tesco", name: "Tesco", url: dc },
            { id: "smyths_toys", name: "Smythstoys", url: dc },
            { id: "sainsburys", name: "Sainsbury\u2019s", url: dc },
            { id: "asda", name: "Asda", url: dc },
        ],
        [dd.d.CA]: [{ id: "eb_games", name: "EBGames", url: dc }],
        [dd.d.IT]: [{ id: "gamelife", name: "Gamelife", url: dc }],
        [dd.d.ES]: [{ id: "game", name: "GAME", url: dc }],
        [dd.d.FR]: [{ id: "micromania", name: "Micromania", url: dc }],
    },
    dm = [],
    dA = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="216" height="162"><rect x="1" y="1" width="214" height="160" fill="none" stroke="hotpink" stroke-width="2"/></svg>')}`;
var dE = n(534284);
function dh(e) {
    let { enabled: t } = (0, u9.K)({ location: e }),
        n = (0, dE.P)(),
        i = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.storeCountry?.country);
    return t && n && null != i && oE.ob.has(i);
}
var dx = n(178881);
function dS(e) {
    let { icon: t, children: n } = e;
    return (0, p.jsxs)(Q.E, {
        variant: "text-xs/normal",
        color: "text-default",
        className: dx.A,
        children: [
            (0, p.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, p.jsx)("span", { children: n }),
        ],
    });
}
let dp = (0, E.zZ)(h.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [dT],
        usePredicate: () => dh("GiftInventoryMarketingBanner"),
    }),
    dT = (0, E.E2)(h.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dh("GiftCardsGiftInventoryBanner"),
                t = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.storeCountry?.country),
                n = (function () {
                    let { analyticsLocations: e } = (0, ez.Ay)();
                    return T.useCallback(
                        (t) => {
                            tu.default.track(I.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
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
                        (null == t ? dm : (dg[t] ?? dm)).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n(e), (0, og.A)(e.url));
                            },
                        })),
                    [t, n],
                );
            return e
                ? (0, p.jsx)(oA, {
                      size: "compact",
                      title: U.intl.string(oh.default.Ja5Q8Z),
                      graphicSrc: dA,
                      actions: i,
                      children: (0, p.jsxs)(Z.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, p.jsx)(dS, { icon: dr.B, children: U.intl.string(oh.default["9xo1g9"]) }),
                              (0, p.jsx)(dS, { icon: da.h, children: U.intl.string(oh.default.I5UWh9) }),
                              (0, p.jsx)(dS, {
                                  icon: up.GiftIcon,
                                  children: U.intl.format(oh.default.ZuneBP, {
                                      onBillingSettingsClick: () => (0, nr.openUserSettings)(h.X.BILLING_PANEL),
                                  }),
                              }),
                              (0, p.jsx)(dS, {
                                  icon: du.k,
                                  children: U.intl.format(oh.default.UwYHGm, { websiteUrl: oE.C1 }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var df = n(982240),
    dI = n(5755),
    d_ = n(914410),
    dN = n(95769),
    dC = n(573343);
function dy(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, p.jsxs)("div", {
        className: iu()(dC.fO, { [dC.bF]: i }),
        children: [
            null != n && (0, p.jsx)("img", { src: n, alt: "", className: dC.si }),
            (0, p.jsxs)("div", {
                className: dC.tc,
                children: [
                    (0, p.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: U.intl.format(dN.default.qvx9E4, { count: (0, df.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function db(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, p.jsx)("div", {
        className: dC.dw,
        children: t.map((e) => (0, p.jsx)(dy, { tier: e, iconUrl: (0, de.Se)(e), active: e.key === n?.key }, e.key)),
    });
}
function dv(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tV.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, dI.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: I.ZSU.BUTTON_CTA, objectType: I.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, p.jsx)("div", {
        className: dC.NG,
        children: (0, p.jsx)(v.$, {
            variant: "primary",
            icon: up.GiftIcon,
            text: U.intl.string(dN.default.DZnomS),
            onClick: s,
        }),
    });
}
function dj(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, df.rL)(i),
        a = (0, df.rL)(s),
        o = (0, de.GZ)(n, i, s),
        u = (0, de.Se)(i),
        d = (0, de.Se)(s);
    return (
        (t =
            null != s
                ? U.intl.formatToPlainString(dN.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : U.intl.formatToPlainString(dN.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, p.jsxs)("div", {
            className: dC.mY,
            children: [
                null != u &&
                    (0, p.jsx)("div", {
                        className: dC.fC,
                        children: (0, p.jsx)("img", { src: u, alt: "", className: dC.qS }),
                    }),
                (0, p.jsxs)("div", {
                    className: dC.Qs,
                    children: [
                        (0, p.jsx)(Q.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, p.jsx)(d_.Ay, { variant: d_.qP.BLUE, weight: d_.fh.MEDIUM, progress: o }),
                        (0, p.jsx)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: dC.qg,
                            children: U.intl.format(dN.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != d &&
                    (0, p.jsx)("div", {
                        className: dC.fC,
                        children: (0, p.jsx)("img", { src: d, alt: "", className: dC.qS }),
                    }),
            ],
        })
    );
}
function dO(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, f.cf)([df.Ay], () => ({
            badgeProgress: df.Ay.getSingleRequirementProgress(u8.$.GIFTING)?.current ?? 0,
            currentTier: df.Ay.getCurrentTier(u8.$.GIFTING),
            nextTier: df.Ay.getNextTier(u8.$.GIFTING),
            giftsRemaining: df.Ay.getRemainingToNextTier(u8.$.GIFTING),
            tiers: df.Ay.getBadgeById(u8.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, p.jsxs)("div", {
              className: dC.kL,
              children: [
                  (0, p.jsxs)("div", {
                      className: dC.Jo,
                      children: [
                          n > 0 &&
                              (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsx)(dj, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, p.jsx)("div", { className: dC.yF }),
                                  ],
                              }),
                          (0, p.jsx)(db, { tiers: r, currentTier: i }),
                          (0, p.jsx)(Q.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: dC.PJ,
                              children: U.intl.string(dN.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, p.jsx)(dv, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let dL = (0, E.zZ)(h.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => U.intl.string(dN.default.sFokBp),
        buildLayout: () => [dR],
        usePredicate: () => {
            let e = (0, de.F5)("gift_inventory"),
                t = (0, f.bG)([df.Ay], () => df.Ay.getBadgeById(u8.$.GIFTING));
            return e && null != t;
        },
    }),
    dR = (0, E.E2)(h.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [U.intl.string(dN.default.sFokBp)],
        Component: () => (0, p.jsx)(dO, {}),
    });
var dD = n(264779),
    dP = n(412260),
    dG = n(555393),
    dM = n(725807),
    dU = n(212168),
    dV = n(976860),
    dk = n(469778),
    dw = n(45938),
    dF = n(109802),
    dB = n(869038),
    dz = n(380856);
function dY(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, p.jsxs)(sI.A, {
        className: iu()(dz.wx, n),
        align: sI.A.Align.CENTER,
        children: [
            (0, p.jsx)("div", { className: dz.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function dX(e) {
    let { children: t, className: n } = e;
    return (0, p.jsx)("div", { className: iu()(dz.rf, n), children: t });
}
class dH extends T.PureComponent {
    static Header = dY;
    static Body = dX;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, p.jsx)("div", { className: iu()(dz.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var dW = n(180522),
    dK = n(871123),
    dZ = n(366523),
    dq = n(280450),
    dQ = n(30793),
    d$ = n(97352),
    dJ = n(67480),
    d0 = n(615396),
    d1 = n(274904);
class d2 extends T.PureComponent {
    _copyModeTimeout = new rw.Ep();
    state = { copyMode: dF.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case dF.q.SUCCESS:
                return U.intl.string(U.t.XVvPjU);
            case dF.q.ERROR:
                return U.intl.string(U.t.i4GM3L);
            default:
                return U.intl.string(U.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dB.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, dw.AK)(t, n),
            (0, uN.C)(
                e,
                () => this.setState({ copyMode: dF.q.SUCCESS }),
                () => this.setState({ copyMode: dF.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: dF.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, p.jsxs)(sI.A, {
            direction: sI.A.Direction.VERTICAL,
            className: d1.Gj,
            children: [
                (0, p.jsx)(dF.e, {
                    className: d1.ph,
                    value: (0, dw.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uN.p5,
                    hideMessage: e ? U.intl.string(U.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: l$.XD.BRAND,
                    buttonLook: l$.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: d1.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, p.jsxs)(T.Fragment, {
                                  children: [
                                      U.intl.format(U.t.ltVZcJ, { hours: t.expiresAt.diff(ic()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, p.jsx)(n3.D, {
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
class d3 extends T.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await dB.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && dB.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, dK.bF)(e)
            ? (0, p.jsx)(dZ.e, { shape: "square", sku: e, containerClassName: d1.ez })
            : null != t
              ? (0, p.jsx)(dW.A, { giftStyle: t, className: d1.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(i6.A, { game: n, size: i6.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, dK.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: iu()(d1.Oc, d1.ic),
                  children: [
                      (0, p.jsx)(i6.A, { game: n, size: i6.M.XSMALL, skuId: e.id, className: d1._u }),
                      U.intl.format(U.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: d1.Oc, children: U.intl.format(U.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tQ.FB
                    ? U.intl.string(U.t.odsU6W)
                    : i === tQ.Bu && null != n
                      ? U.intl.formatToPlainString(n.interval === tQ.WT.MONTH ? U.t.uZjpiJ : U.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : U.intl.formatToPlainString(n.interval === tQ.WT.MONTH ? U.t.rCJvqo : U.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, p.jsx)("div", { className: d1.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(sI.A, {
            justify: sI.A.Justify.BETWEEN,
            align: sI.A.Align.CENTER,
            className: d1.pe,
            children: [
                (0, p.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t.lELyPj) }),
                (0, p.jsx)(v.$, {
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
        return (0, p.jsxs)(dH, {
            className: i,
            children: [
                (0, p.jsx)(n3.D, {
                    onClick: this.handleToggleOpen,
                    className: d1.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(dH.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: d1.MY,
                            children: [
                                (0, p.jsxs)(sI.A, {
                                    align: sI.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: d1.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(uI.A, {
                                    direction: a ? uI.A.Directions.UP : uI.A.Directions.DOWN,
                                    className: d1.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(dH.Body, {
                          children: l
                              ? (0, p.jsx)(oT.y, { className: d1.u1 })
                              : (0, p.jsxs)(T.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, p.jsx)(d2, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let d5 = f.Ay.connectStores([dJ.A, to.A, dQ.A, i0.A, d$.A, dq.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = dJ.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = dQ.A.getForGifterSKUAndPlan(dq.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: to.A.enabled,
        isFetching: dQ.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: dQ.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i0.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, d0.c9)(n) : null,
        giftCodes: l,
    };
})(d3);
var d4 = n(725570),
    d6 = n(736653),
    d8 = n(46054);
let d7 = ic().duration(30, "days");
var d9 = n(416052),
    ce = n(878309);
function ct(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, p.jsx)(sh.a, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: ce.aR }),
        onClose: async () => await t(),
        actions: [{ text: U.intl.string(U.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, p.jsxs)("div", {
            className: ce.t4,
            children: [
                (0, p.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.iufib1) }),
                (0, p.jsx)(Q.E, { variant: "text-md/normal", className: ce.G3, children: U.intl.string(U.t.eAn6z2) }),
            ],
        }),
    });
}
let cn = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = T.useState(null),
        o = (0, tW.GV)(),
        { analyticsLocations: u } = (0, ez.Ay)(tV.A.USER_SETTINGS_GIFT_INVENTORY);
    return (T.useEffect(() => {
        null == i &&
            (0, dD.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, s.id, s.outboundTitle, s.partnerId, n, u]),
    null != r)
        ? (0, p.jsx)(ct, { onClose: t, transitionState: l })
        : null == i
          ? (0, p.jsx)(oT.y, { className: ce.Lq })
          : (0, p.jsx)(sh.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: ce.N1,
                    children: [
                        (0, p.jsx)("div", { className: ce.Qw }),
                        (0, p.jsx)(N.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t["23BfZh"]) }),
                        (0, p.jsx)(Q.E, {
                            variant: "text-md/normal",
                            className: ce.G3,
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
                            let e = (0, dD.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(si.c, { className: ce.M5 }),
                        (0, p.jsx)(sa.D, {
                            label: U.intl.string(U.t.s9LFQh),
                            helperText: U.intl.string(U.t["F+nFTZ"]),
                            children: (0, p.jsx)(d9.A, {
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
var ci = n(136380);
function cs(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, d6.Ay)(),
        d = (0, dD.WD)(n.id, u),
        c = null != i,
        g = T.useMemo(
            () =>
                (0, ig.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? ic()(n.outboundRedemptionEndDate)
                            : ic()(n.endDate).add(d7)
                        : ic()(n.endDate),
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
        A = (0, dG.N)()?.isEligible === !0,
        E = T.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: x } = n;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: ci.AX,
                children: [
                    (0, p.jsxs)("div", {
                        className: ci.Pg,
                        children: [
                            (0, p.jsxs)("div", {
                                className: ci.At,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: ci.$G,
                                        children: (0, p.jsx)("img", { alt: "", src: d, className: ci.IJ }),
                                    }),
                                    (0, p.jsxs)("div", {
                                        children: [
                                            (0, p.jsx)(N.D, { variant: "heading-md/semibold", children: h }),
                                            (0, p.jsx)(Q.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || A) && (0, p.jsx)(v.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    s &&
                        (0, p.jsx)(Q.E, {
                            className: ci.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: d8.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, p.jsx)(d4.aF, {
                    renderModal: (e) =>
                        (0, p.jsx)(cn, {
                            ...e,
                            onClose: E,
                            onClaim: dt.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function cl(e) {
    let { redesign: t = !1 } = e,
        n = (0, f.yK)([dk.A], () => dk.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, dG.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, dn.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tQ.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tQ.Bu && !e.consumed) ?? [],
        [u, d] = W().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tQ.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        g =
            t || !c
                ? null
                : (0, p.jsxs)("div", {
                      className: ci.N1,
                      children: [
                          (0, p.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.wFsj3B) }),
                          (0, p.jsx)(si.c, { className: ci.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, p.jsxs)("div", {
                      className: ci.uo,
                      children: [
                          (0, p.jsx)(al.t, {
                              size: "md",
                              color: n0.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: ci.PC,
                          }),
                          (0, p.jsx)(Q.E, {
                              variant: "text-md/normal",
                              className: ci.Qw,
                              children: U.intl.format(U.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tY.default)(), (0, dV.pX)(I.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, p.jsx)(dM.A, {
                              showGradient: !0,
                              className: ci.aA,
                              subscriptionTier: tQ.pe.TIER_2,
                              textOptions: { textOverride: U.intl.string(U.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, p.jsxs)("div", {
        children: [
            g,
            (0, p.jsx)(dU.A, {
                className: ci.Yj,
                isShown: !1 === i && c,
                type: dU.i.PREMIUM,
                hasBackground: !0,
                children: (0, p.jsxs)("div", {
                    className: ci.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, p.jsx)(cs, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, p.jsx)(cs, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, p.jsx)(
                                  d5,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tQ.FB,
                                  },
                                  (0, dw.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, p.jsx)(
                                  d5,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tQ.Bu,
                                  },
                                  (0, dw.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, p.jsx)(
                                  d5,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tQ.Bu,
                                  },
                                  (0, dw.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cr = (0, E.zZ)(h.X.MY_GIFTS_CATEGORY, {
        useTitle: co,
        buildLayout: () => [ca],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, f.cf)(
                    [dP.A],
                    () => ({
                        claimedOutboundPromotionCodes: dP.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: dP.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, dn.T1)({ includeClaimedPromotions: !0 }),
                i = (0, dD.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    ca = (0, E.E2)(h.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [co()],
        Component: () => (0, p.jsx)(cl, { redesign: !0 }),
    });
function co() {
    return U.intl.string(U.t.YzjdWJ);
}
var cu = n(339048);
function cd() {
    let e = (0, f.yK)([dk.A], () => dk.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = W().groupBy(e, (e) => (0, dw.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = T.useState(!1);
    if (
        (T.useEffect(() => {
            (0, cu.XJ)().then(() => i(!0));
        }, []),
        !n)
    )
        return (0, p.jsx)(oT.y, { className: ci.Lq });
    if (0 === Object.keys(t).length)
        return (0, p.jsxs)("div", {
            className: ci.p$,
            children: [
                (0, p.jsx)(u_.H, { className: ci.ks, children: U.intl.string(U.t.B1qgZn) }),
                (0, p.jsx)("p", {
                    className: ci.WO,
                    children: U.intl.format(U.t.HezvJ8, {
                        onClick: function () {
                            (0, nr.openUserSettings)(h.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = W()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: s } = (0, dw.X6)(e);
            return (0, p.jsx)(d5, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, p.jsx)(Z.B, { gap: "lg", children: s });
}
let cc = (0, E.zZ)(h.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cm, buildLayout: () => [cg] }),
    cg = (0, E.E2)(h.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cm()], Component: () => (0, p.jsx)(cd, {}) });
function cm() {
    return U.intl.string(U.t.FWe6CP);
}
var cA = n(532446),
    cE = n(499454);
class ch extends T.Component {
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
                    (await (0, ob.Qp)(n),
                        (0, ob.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, of.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, dw.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await dB.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (tu.default.track(I.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: I.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: I.ZSU.BUTTON_CTA,
                },
            }),
                (0, cE.h)({ processedCode: e }),
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
        return (0, p.jsx)(n2.n, {
            label: e ? void 0 : U.intl.string(U.t["il+VCo"]),
            children: (0, p.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, p.jsxs)(cA.M, {
                    children: [
                        (0, p.jsx)(sS.k, {
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
                        (0, p.jsx)(v.$, {
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
function cx(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, o3.c)({ location: "UserSettingsBilling" }),
        i = T.useContext(tu.AnalyticsContext),
        s = (0, f.bG)([to.A], () => to.A.enabled);
    return (0, p.jsx)(ch, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let cS = (0, E.zZ)(h.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => U.intl.string(U.t["il+VCo"]),
        buildLayout: () => [cp],
        usePredicate: () => !(0, di.Hp)(),
    }),
    cp = (0, E.E2)(h.X.REDEEM_CODE_INPUT, {
        Component: () => (0, p.jsx)(cx, { redesign: !0 }),
        useSearchTerms: () => [U.intl.string(U.t["jcSP+g"]), U.intl.string(U.t["il+VCo"])],
    }),
    cT = (0, E.t_)(h.X.GIFT_PANEL, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        buildLayout: () => [dp, cS, cr, dL, cc, dl],
        initialize: () => {
            (dt.Ay.fetchClaimedOutboundPromotionCodes(), (0, de.Ig)("gift_inventory") && (0, u7.o0)(u8.$.GIFTING));
        },
    }),
    cf = (0, E.i4)(h.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["jcSP+g"]),
        icon: up.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, dn.IO)().length;
            return T.useMemo(() => ({ badgeType: S.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = o3.A.getConfig(e).enabled,
                n = u9.A.getConfig(e).enabled;
            return t && n ? [{ badgeType: S.Xi.NEW, dismissibleContent: eA.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }] : [];
        },
        buildLayout: () => [cT],
    });
var cI = n(659758),
    c_ = n(281906),
    cN = n(877624),
    cC = n(269115),
    cy = n(462887),
    cb = n(73825),
    cv = n(531260),
    cj = n(160946),
    cO = n(721668),
    cL = n(224016),
    cR = n(526292),
    cD = n(881489),
    cP = n(106512),
    cG = n(22118),
    cM = n(103411),
    cU = n(190187),
    cV = n(930861),
    ck = n(854627),
    cw = n(889227),
    cF = n(326084),
    cB = n(851746),
    cz = n(664654),
    cY = n(912140),
    cX = n(953727);
let cH = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, p.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cX.A)({ ...s }),
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
    cW = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, d6.Ay)(),
            l = (0, cy.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, p.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, cX.A)({ ...i }),
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
                            fillOpacity: null != t ? t : l ? 0.5 : 0.2,
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
                                    fillOpacity: l ? "0.6" : "0.4",
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
                    filter: l ? void 0 : "url(#filter0_d_1282_11577)",
                    transform: "translate(50, 50) scale(.8) translate(-44, -30)",
                    children: [
                        (0, p.jsx)("path", {
                            d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                            fill: l ? "url(#paint2_linear_1986_8686)" : "url(#paint0_linear_1282_11577)",
                        }),
                        (0, p.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                            fill: l ? "url(#paint1_linear_1986_8686)" : "url(#paint1_linear_1282_11577)",
                        }),
                        (0, p.jsx)("path", {
                            d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                            fill: l ? "url(#paint0_linear_1986_8686)" : "url(#paint2_linear_1282_11577)",
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
var cK = n(387316),
    cZ =
        (((o = {})[(o.NITRO_GEM = 0)] = "NITRO_GEM"),
        (o[(o.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (o[(o.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        o);
let cq = "url(#gradient)",
    cQ = (e) => {
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
        let g = (0, d6.Ay)(),
            m = (0, cy.q)(g),
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
                            return cq;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : cq;
                        default:
                            return;
                    }
                })(m, r);
        return (0, p.jsxs)("div", {
            className: cK.Ap,
            children: [
                (0, p.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: cK.fB,
                    children: [
                        (0, p.jsx)("circle", {
                            className: 0 === r || 2 === r ? cK.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: l,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: A,
                            strokeOpacity: E,
                        }),
                        (0, p.jsx)("circle", {
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
                (0, p.jsx)("div", { className: cK.Vw, children: n }),
            ],
        });
    };
var c$ = n(104773);
function cJ(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = T.useMemo(() => (0, cY.A)({ legacyAssetId: t, skuId: n, size: b._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, p.jsx)("div", {
        className: c$.Q7,
        children: (0, p.jsx)("div", {
            className: c$.Nk,
            children: null != s && (0, p.jsx)("img", { className: c$.CH, alt: i, src: s }),
        }),
    });
}
let c0 = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = cZ.NITRO_GEM,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: A,
            circleColor: E,
            circleStroke: h,
        } = e,
        x = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        S = t && !x;
    return (0, p.jsx)("div", {
        className: iu()(c$.G3, n),
        children: (0, p.jsx)(cQ, {
            animationClassName: iu()(c$._0, { [c$.uJ]: S, [A ?? ""]: S }),
            progressCircleStroke: h,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case cZ.NITRO_GEM:
                        return (0, p.jsx)(cH, {
                            className: S ? c$.Ow : void 0,
                            backgroundColor: iu()(c$.vH, s),
                            backgroundCircleSize: r,
                        });
                    case cZ.NITRO_LOGO:
                        return (0, p.jsx)(cW, { circleColor: E, ellipseOpacity: m });
                    case cZ.AVATAR_DECO:
                        if (null != c)
                            return (0, p.jsx)(cJ, {
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
var c1 = n(14313);
function c2(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, ck.A)({ userId: t?.id, size: b._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, p.jsx)(y.eu, { src: i, "aria-label": t.username, size: b._3.SIZE_32, ...s })
            : (0, p.jsx)(N.D, { variant: "heading-md/semibold", className: c1.n5, children: n });
    return (0, p.jsx)(sd.m, {
        text: U.intl.string(U.t.UnKHdo),
        shouldShow: !l,
        children: (0, p.jsx)("div", { className: c1.Lg, children: r }),
    });
}
function c3(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, p.jsxs)("div", {
        className: c1.Ip,
        children: [
            (0, p.jsx)("div", { className: c1.Ej }),
            (0, p.jsx)("div", { className: iu()({ [c1.ch]: t > n, [c1.q_]: t === n }) }),
        ],
    });
}
function c5(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, p.jsxs)("div", {
        className: c1.ZM,
        children: [
            (0, p.jsx)(c2, { userRecord: i, placement: 1 }),
            (0, p.jsx)(c3, { numSentReferrals: n, placement: 1 }),
            (0, p.jsx)(c2, { userRecord: s, placement: 2 }),
            (0, p.jsx)(c3, { numSentReferrals: n, placement: 2 }),
            (0, p.jsx)(c2, { userRecord: l, placement: 3 }),
        ],
    });
}
let c4 = function () {
    let e = (0, f.bG)([cB.A], () => cB.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, cz.J)(),
        i = T.useMemo(() => t.map((e) => new cw.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === cF.aK.REDEEMED && s.redeemed++, e === cF.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === cz.Z,
        r = eC.A.getArticleURL(I.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, ez.Ay)(tV.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = T.useRef(null),
        u = (s.sent / cz.Z) * 100,
        d = (0, p.jsxs)("div", {
            className: c1.hE,
            children: [
                (0, p.jsx)(c0, { percentage: u, progressCircleVariation: cZ.NITRO_LOGO, iconClassName: c1.ER }),
                (0, p.jsxs)("div", {
                    className: c1.Ns,
                    children: [
                        (0, p.jsx)(N.D, {
                            variant: "heading-xl/extrabold",
                            className: c1.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return U.intl.string(U.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, p.jsx)(c5, { userRecords: i }),
                        (0, p.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? U.intl.format(U.t["TYu+MH"], { helpdeskArticle: i })
                                        : U.intl.format(U.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= cz.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, p.jsx)("div", {
                            className: c1.Fb,
                            children: (0, p.jsx)(cV.wL, {
                                "data-migration-pending": !0,
                                className: c1.r$,
                                color: l$.XD.CUSTOM,
                                onClick: () =>
                                    (function (e) {
                                        let { analyticsLocations: t } = e;
                                        (tu.default.track(I.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                            location_stack: t,
                                        }),
                                            (0, sx.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("647658"),
                                                    n.e("618589"),
                                                ]).then(n.bind(n, 168457));
                                                return (n) => (0, p.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                            }));
                                    })({ analyticsLocations: a }),
                                onlyShineOnHover: !0,
                                children: (0, p.jsxs)("div", {
                                    className: c1.Zn,
                                    children: [
                                        (0, p.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: c1.QH,
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
        c = s.redeemed === cz.Z;
    return (0, p.jsx)(ez.f5, {
        value: a,
        children: (0, p.jsx)("div", {
            className: iu()(c1.kL, { [c1.AP]: c }),
            children: (0, p.jsx)("div", { ref: o, className: iu()(c1.d_, { [c1.kS]: c }), children: d }),
        }),
    });
};
var c6 = n(194509),
    c8 = n(465794),
    c7 = n(774774),
    c9 = n(156601),
    ge = n(543213),
    gt = n(88001),
    gn = n(259589),
    gi = n(487518);
let gs = "to_premium_home_button",
    gl = "premium home page";
function gr(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === tQ.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, cv.A)(),
        u = null != t.trialEndsAt ? ic()(t.trialEndsAt).diff(ic()(), "d") : 0,
        d = tQ.hd[t.planIdFromItems],
        c = ah.Ay.getDefaultPrice(d.id),
        g = ah.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, cy.M)(s) ? c7.at.PREMIUM_TIER_2_WHITE_FILL : c7.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, p.jsxs)(p.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, p.jsx)(c7.e4, { text: U.intl.string(U.t.EyjDRE), className: gi.LW, colorOptions: e })
                    : (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(c7.HU, {
                                  text: l ? U.intl.string(U.t.qYKftX) : U.intl.string(U.t.EyjDRE),
                                  className: gi.uS,
                                  colorOptions: e,
                              }),
                              (0, p.jsx)("div", { className: gi.on }),
                          ],
                      }),
                (0, p.jsx)(N.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: gi.KB,
                    children: (function () {
                        if (l) return U.intl.format(U.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, uO.$g)(c.amount, c.currency);
                            return U.intl.format(gn.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? U.intl.format(U.t.z2oQtA, {
                                  percent: i?.percentage ?? tQ.Cq,
                                  regularPrice: g,
                                  renewalDate: ah.Ay.getExpectedRenewalDate(t, o),
                              })
                            : U.intl.formatToPlainString(U.t["3ZiutU"], {
                                  percent: i?.percentage ?? tQ._$,
                                  regularPrice: g,
                                  numMonths: i?.duration ?? tQ.OJ,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, p.jsx)(c9.A, { variant: void 0, subscriptionTier: tQ.pe.TIER_2, interval: d.interval });
}
function ga() {
    let e = (0, cR.k5)(),
        t = (0, cR.nf)(),
        n = (0, d6.Ay)(),
        i = (0, f.bG)([o4.A], () => o4.A.getPremiumTypeSubscription()),
        s = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, cv.A)(),
        a = (0, cD.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, p.jsxs)("div", {
        className: iu()(gi.$Y, { [gi.J5]: e || d }),
        children: [
            (0, p.jsxs)("div", {
                className: gi.jp,
                children: [
                    l
                        ? (0, p.jsx)(N.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: gi._K,
                              children: (0, gt.DP)(),
                          })
                        : (0, p.jsx)(cL.A, { className: gi.TJ }),
                    l && !e
                        ? (0, p.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, p.jsxs)(p.Fragment, {
                                children: [
                                    (0, p.jsx)(c7.e4, {
                                        text: U.intl.string(U.t.uXF4c4),
                                        className: gi.LW,
                                        colorOptions: c7.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, p.jsx)(N.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: gi.sQ,
                                        children: U.intl.format(U.t.sK7fGl, {
                                            helpCenterLink: eC.A.getArticleURL(I.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, p.jsx)(gr, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(c7.HU, {
                                            text: U.intl.string(U.t.qYKftX),
                                            className: gi.uS,
                                            colorOptions: (0, cy.M)(n)
                                                ? c7.at.PREMIUM_TIER_2_WHITE_FILL
                                                : c7.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, p.jsx)(N.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: gi.KB,
                                            children: U.intl.format(U.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, p.jsx)(ge.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? ge.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? ge.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? ge.Nz.FRACTIONAL_PREMIUM
                                : ge.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, p.jsxs)(l0.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, p.jsx)(c8.A, {
                                      defaultTextOverride: a ? U.intl.string(U.t.YScQSF) : U.intl.string(U.t["0b3YRn"]),
                                  }),
                                  (0, p.jsx)(v.$, {
                                      onClick: () => {
                                          (tu.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gs,
                                              target: gl,
                                          }),
                                              (0, tY.default)(),
                                              (0, dV.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: a ? U.intl.string(U.t.VR2iVB) : U.intl.string(U.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, p.jsxs)(l0.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, p.jsx)(v.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (tu.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: gs,
                                              target: gl,
                                          }),
                                              (0, tY.default)(),
                                              (0, dV.pX)(I.BVt.APPLICATION_STORE));
                                      },
                                      text: U.intl.string(U.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, p.jsx)(v.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          (tu.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, nr.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL));
                                      },
                                      text: U.intl.string(U.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, p.jsx)("div", {
                className: gi.ah,
                children: (0, p.jsx)("img", { className: gi.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function go() {
    return (0, p.jsxs)("div", {
        className: gi.T1,
        children: [
            (0, p.jsx)("img", { className: gi.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, p.jsxs)("div", {
                className: gi.b4,
                children: [
                    (0, p.jsx)(N.D, {
                        className: gi.Vz,
                        variant: "heading-xl/extrabold",
                        children: U.intl.string(U.t["3KomGa"]),
                    }),
                    (0, p.jsx)(Q.E, {
                        className: gi.Oi,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.yQ06u1),
                    }),
                    (0, p.jsx)(c6.A, {
                        className: iu()(gi.Tp, gi._c),
                        textOptions: { textOverride: U.intl.string(U.t.Ve9Ge6), textClassName: gi.VV },
                        color: l$.$n.Colors.CUSTOM,
                        onClick: () => {
                            tu.default.track(I.HAw.PREMIUM_SETTINGS_INTERACTED, {
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
let gu = function () {
        let e = (0, di.Hp)(),
            { analyticsLocations: t } = (0, ez.Ay)(tV.A.PREMIUM_SETTINGS),
            n = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
            i = (0, f.bG)([o4.A], () => o4.A.getPremiumTypeSubscription()),
            s = (0, f.bG)([o4.A], () => o4.A.hasFetchedSubscriptions()),
            l = (0, cj.Y)(tQ.T7),
            [r, a] = T.useState(!0),
            o = (0, cv.A)({ forceFetch: !0 }),
            u = (0, f.bG)([dP.A], () => {
                let e = dP.A.getMarketingComponentByType(cN.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oR.Fr || oR.v1) && null != u,
            c = T.useRef(null);
        (0, cU.i)();
        let g = (0, cM.m)();
        T.useEffect(() => {
            !(async function () {
                (e || (await Promise.all([oy.hP(), oy.$o(), (0, cb.zS)(null, null, I.tF5.DISCOVERY)])), a(!1));
            })();
        }, [e]);
        let [m, A] = T.useState(!1);
        if (e) return (0, p.jsx)(u2.uK, {});
        let E = s && null !== i && l,
            h = o.fetched && o.isFractionalPremiumActive,
            x = n?.isPremiumWithPremiumGroup();
        if (!E && !h && !r && !x) return (0, p.jsx)(cO.A, { title: U.intl.string(U.t.dyq9TR), note: null });
        if ((!E && !h && !x) || r) return (0, p.jsx)(oT.y, {});
        let S = !!i?.hasActiveTrial;
        return (0, p.jsx)(ez.f5, {
            value: t,
            children: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsxs)(Z.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, p.jsx)(cP.m, { config: u }),
                            (0, p.jsx)(ga, {}),
                            g && (0, p.jsx)(c4, {}),
                            !d && (0, p.jsx)(go, {}),
                            (0, p.jsx)(cG.A, {
                                hideCTAs: !0,
                                headingOverride: U.intl.string(U.t.dnVvQS),
                                hidePill: !S,
                                selectedPlanColumnClassName: gi.JG,
                                selectedPlanTier: tQ.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, p.jsx)(cC.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (tu.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                A(!0));
                        },
                        children: (0, p.jsx)("div", { ref: c, className: gi._Z }),
                    }),
                ],
            }),
        });
    },
    gd = (0, E.E2)(h.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
            return (0, ah.YE)(e, tQ.PremiumTypes.TIER_2) ? (0, p.jsx)(gu, {}) : (0, p.jsx)(c_.A, {});
        },
        useSearchTerms: () => [U.intl.string(U.t.Ipxkog)],
    }),
    gc = (0, E.zZ)(h.X.NITRO_CATEGORY, { buildLayout: () => [gd] }),
    gg = (0, E.t_)(h.X.NITRO_PANEL, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        useObscuredNotice: oc.L,
        buildLayout: () => [gc],
    }),
    gm = (0, E.i4)(h.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Ipxkog),
        icon: al.t,
        usePersistentBadge: function (e) {
            let t = (0, cI.e)(e);
            return T.useMemo(() => ({ badgeType: S.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [gg],
    });
var gA = n(104510),
    gE = n(820739),
    gh = n(859241),
    gx = n(527113),
    gS = n(338548),
    gp = n(776096),
    gT = n(711014),
    gf = n(178368),
    gI = n(809545),
    g_ = n(168482);
function gN() {
    return (0, p.jsxs)("div", {
        className: gI.iE,
        children: [
            (0, p.jsx)("img", { className: gI.Kk, alt: "", src: g_ }),
            (0, p.jsxs)("div", {
                className: gI.pq,
                children: [
                    (0, p.jsx)(Q.E, { variant: "text-lg/bold", children: U.intl.string(U.t.ZHNSYf) }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: U.intl.string(U.t.kCj5ps),
                    }),
                ],
            }),
            (0, p.jsx)(v.$, {
                variant: "secondary",
                text: U.intl.string(U.t.JFlifp),
                onClick: function () {
                    ((0, dV.pX)(I.BVt.GUILD_DISCOVERY), (0, tY.default)());
                },
            }),
        ],
    });
}
var gC = n(365199),
    gy = n(878678),
    gb = n(443865),
    gv = n(980707),
    gj = n(473145);
function gO(e) {
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
            a === tQ.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = U.intl.string(U.t.LiLRRT)),
                (o.cancel.subtext = U.intl.string(U.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = T.useMemo(
        () =>
            l.isPausedOrPausePending && a === tQ.xc.NONE
                ? (0, p.jsx)(tn.Dr, {
                      id: "manage-subscription",
                      label: U.intl.string(U.t.obRG6Y),
                      action: () => (0, nr.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gb.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: gb.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, p.jsxs)(gv.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": U.intl.string(U.t.ogxXGq),
        onClose: i,
        children: [
            (0, p.jsx)(tn.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, sx.openModalLazy)(async () => {
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
            (0, gj.I5)(t)
                ? (0, p.jsx)(tn.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, sx.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, p.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, p.jsx)(tn.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, sx.openModalLazy)(async () => {
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
var gL = n(545934),
    gR = n(548118),
    gD = n(987144),
    gP = n(864310),
    gG = n(290413);
function gM(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, gP.A)(t.id);
    return (0, p.jsxs)("div", {
        className: n ?? gG.OA,
        children: [
            (0, p.jsx)(gR.Ay, { className: gG.$f, guild: t, size: gR.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: gG.gI,
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, p.jsxs)("div", {
                        className: gG.ew,
                        children: [
                            (0, p.jsxs)("div", {
                                className: gG.QW,
                                children: [
                                    (0, p.jsx)(gA._, {
                                        className: gG.Wz,
                                        color: n0.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== I.TVA.NONE &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)("div", { className: gG.zk }),
                                        (0, p.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gj.gb)(t.premiumTier, { useLevels: !1 }),
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
function gU(e) {
    let { guildId: t } = e,
        n = (0, f.bG)([sy.A], () => sy.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: gG.Nr,
              children: [
                  (0, p.jsx)(gM, { guild: n }),
                  (0, p.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: gA._,
                      text: U.intl.string(U.t.aBHecF),
                      onClick: () => {
                          (0, gD.g)({
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
var gV = n(747381);
let gk =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gw(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = T.useRef(null),
        a = (0, gj.I5)(t),
        o = T.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cv.A)(),
        c = T.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === I.TVA.NONE) return "";
                    let n = [
                        U.intl.formatToPlainString(U.t["dLlKX/"], { numEmojiSlots: tQ.TG[e].limits.emoji }),
                        U.intl.formatToPlainString(U.t["+ANIfv"], { numStickerSlots: tQ.TG[e].limits.stickers }),
                        U.intl.formatToPlainString(U.t["4gt60b"], {
                            numSoundboardSlots: tQ.TG[e].limits.soundboardSounds,
                        }),
                        U.intl.formatToPlainString(U.t.XahSjZ, {
                            resolution: tQ.TG[e].limits.screenShareQualityResolution,
                            framerate: tQ.TG[e].limits.screenShareQualityFramerate,
                        }),
                        U.intl.formatToPlainString(U.t.NbNs7S, { bitrate: tQ.TG[e].limits.bitrate / 1e3 }),
                        U.intl.formatToPlainString(U.t.VVKcpn, { filesize: tQ.TG[e].limits.fileSize / 1024 / 1024 }),
                        U.intl.formatToPlainString(U.t.TbpCvv, { numVideoStageSeats: tQ.TG[e].limits.stageVideoUsers }),
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
            let e = null != t.premiumGuildSubscription ? oL.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return U.intl.formatToPlainString(U.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = T.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, p.jsxs)("div", {
        className: iu()(gV.iq, { [gV.Mt]: l }),
        children: [
            (0, p.jsxs)("div", {
                className: gV.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: gV.bB, src: gk }),
                    A
                        ? (0, p.jsx)(Q.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: U.intl.format(U.t.Z4ULRD, { date: m }),
                          })
                        : (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(Q.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: gV.zk }),
                                              (0, p.jsx)(Q.E, {
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
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: gV.zk }),
                                              (0, p.jsx)(Q.E, {
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
            (0, p.jsx)(am.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, p.jsx)(gO, {
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
                    (0, p.jsx)(n3.D, {
                        innerRef: r,
                        "aria-label": U.intl.string(U.t.PdRCRg),
                        className: gV.Mj,
                        ...e,
                        children: (0, p.jsx)(gC.MoreHorizontalIcon, {
                            size: "xs",
                            color: n0.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function gF(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, f.bG)([sy.A], () => sy.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: gV.Nr,
        children: [
            (0, p.jsx)("div", {
                className: gV.MY,
                children:
                    null != l
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(gM, { guild: l, className: gV.OA }),
                                  (0, p.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: U.intl.string(U.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tY.default)(),
                                              (0, gy.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: I.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, p.jsx)("div", {
                              className: gV.OA,
                              children: (0, p.jsx)(N.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: U.intl.string(U.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, p.jsx)(
                    gw,
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
function gB(e) {
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
                                gL.A.createFromServer(
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
                if ((!(0, gj.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > ah.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, p.jsx)("div", {
        className: gV.kR,
        children: oL.default
            .keys(l)
            .map((e) => (0, p.jsx)(gF, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var gz = n(502572),
    gY = n(983511),
    gX = n(342744),
    gH = n(496431);
let gW = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, gH.A)(n);
    return (0, p.jsx)(Q.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, ig.uN)(i, { days: U.t.WUTPDc, hours: U.t.c1qodV, minutes: U.t["2+A3dv"] }),
    });
};
var gK = n(731536);
function gZ(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, f.bG)([o4.A], () => o4.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = T.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, gj.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? ah.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === tQ.xc.NONE;
    return 0 === l.length
        ? null
        : (0, p.jsxs)("div", {
              className: gK.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: gK.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: gK._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: gK.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: gK.F8, src: gk }),
                                          (0, p.jsx)("div", {
                                              className: iu()(gK.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: gK.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: gK.Qp,
                                      children: [
                                          (0, p.jsx)(Q.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: U.intl.format(U.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, p.jsx)(Q.E, {
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
                          (0, p.jsx)(gz.A, {
                              shouldShow: o,
                              text: U.intl.string(U.t.mOWsF1),
                              "aria-label": U.intl.string(U.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(v.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: gA._,
                                      text: U.intl.string(U.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, sx.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("378357"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, p.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, gD.g)({
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
                      (0, p.jsx)(
                          gq,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gj.I5)(e),
                              isCanceled: (0, gj.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function gq(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = T.useRef(null),
        u = T.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = l ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, p.jsx)(gW, { cooldown: u.getTime() })
            : null != d
              ? (0, p.jsx)(Q.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: U.intl.format(U.t.Z4ULRD, { date: d }),
                })
              : (0, p.jsx)(Q.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: U.intl.string(U.t["2mcafz"]),
                });
    let c = s || l;
    return (0, p.jsxs)("div", {
        className: iu()(gK.iq, { [gK.Mt]: i }),
        children: [
            (0, p.jsxs)("div", {
                className: gK.kd,
                children: [(0, p.jsx)("img", { alt: "", className: gK.bB, src: gk }), t],
            }),
            c &&
                (0, p.jsx)(am.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsxs)(gv.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": U.intl.string(U.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, p.jsx)(tn.Dr, {
                                        id: "cancel-boost",
                                        label: U.intl.string(U.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? U.intl.string(U.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sx.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(gY.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                l &&
                                    (0, p.jsx)(tn.Dr, {
                                        id: "uncancel-boost",
                                        label: U.intl.string(U.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? U.intl.string(U.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sx.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(gX.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, p.jsx)(n3.D, {
                            innerRef: o,
                            "aria-label": U.intl.string(U.t["UKOtz+"]),
                            className: gK.Mj,
                            ...e,
                            children: (0, p.jsx)(gC.MoreHorizontalIcon, {
                                size: "xs",
                                color: n0.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var gQ = n(834612);
function g$(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && l !== tQ.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, p.jsxs)("div", {
              className: gQ.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: gQ.b,
                      children: [
                          (0, p.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.W5rDjW) }),
                          (0, p.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: U.intl.format(U.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(gB, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, p.jsx)(gZ, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var gJ = n(333722),
    g0 = n(9146);
function g1() {
    return (0, p.jsxs)("div", {
        className: g0.iE,
        children: [
            (0, p.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: g0.kR,
                children: gJ.s.map((e, t) => {
                    let n = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: g0.Nr,
                            children: [
                                (0, p.jsx)(n, { className: g0.Kk }),
                                (0, p.jsx)(Q.E, {
                                    className: g0.h_,
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
var g2 = n(847374),
    g3 = n(232122),
    g5 = n(665984);
function g4() {
    let [e, t] = T.useState(null),
        [n, i] = T.useState(null);
    return (0, p.jsxs)("div", {
        className: g5.iE,
        children: [
            (0, p.jsx)(N.D, { variant: "heading-xl/normal", children: U.intl.string(U.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: g5.p_,
                children: g3.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        n3.D,
                        {
                            tag: "li",
                            className: iu()(g5.Aw, { [g5.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: g5.k7,
                                    children: [
                                        (0, p.jsx)(Q.E, {
                                            className: g5.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, p.jsx)(g2.a, {
                                            size: "sm",
                                            color: n0.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: g5.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(Q.E, {
                                        className: g5.ZF,
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
var g6 = n(182859),
    g8 = n(356863),
    g7 = n(416763);
function g9() {
    let e = eC.A.getArticleURL(I.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: g7.wx,
        children: [
            (0, p.jsxs)("div", {
                className: g7.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: g7.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: g7.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(g8.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: U.intl.format(U.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, p.jsx)(g6.A, {
                variant: "member",
                className: g7.iO,
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
var me = n(315629),
    mt = n(87719),
    mn = n(961085);
function mi() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
    if (null == e || ah.Ay.hasFreeBoosts(e)) return null;
    let t = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(me.h, {
        color: "nitro-pink",
        className: mn.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mn.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mn.q3, src: gk }),
                    (0, p.jsxs)("div", {
                        className: mn.Tm,
                        children: [
                            (0, p.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.Idh1Vs, { count: tQ.M4, boostCount: tQ.M4 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mn.xv,
                                children: [
                                    (0, p.jsx)(al.t, { className: mn.nE }),
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["6UAu+f"], {
                                            count: tQ.M4,
                                            boostCount: tQ.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(v.$, {
                variant: "expressive",
                size: "sm",
                icon: al.t,
                text: U.intl.string(U.t["8x0jKT"]),
                onClick: mt.e,
            }),
        ],
    });
}
var ms = n(532991);
function ml() {
    let e = (0, f.bG)([gp.A], () => gp.A.affinities),
        t = (0, f.bG)([gT.Ay], () => gT.Ay.getFlattenedGuildIds()),
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
        : (0, p.jsxs)("div", {
              className: ms.i,
              children: [
                  (0, p.jsx)(N.D, { variant: "heading-md/semibold", children: U.intl.string(U.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: ms.k, children: n.map((e) => (0, p.jsx)(gU, { guildId: e }, e)) }),
              ],
          });
}
var mr = n(967246);
function ma(e) {
    let { count: t } = e,
        i = eC.A.getArticleURL(I.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(me.h, {
        color: "nitro-pink",
        className: mr.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mr.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mr.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mr.F8, src: gk }),
                            (0, p.jsx)("div", {
                                className: iu()(mr.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mr.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mr.Tm,
                        children: [
                            (0, p.jsx)(Q.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.format(U.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mr.xv,
                                children: [
                                    (0, p.jsx)(al.t, { className: mr.nE }),
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["6UAu+f"], {
                                            count: tQ.M4,
                                            boostCount: tQ.M4,
                                            helpdeskArticle: i,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(v.$, {
                variant: "primary",
                size: "sm",
                icon: gA._,
                text: U.intl.string(U.t.BMx1iy),
                onClick: () => {
                    (0, sx.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, p.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, gD.g)({
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
var mo = n(89150);
function mu(e) {
    let { premiumSubscription: t } = e,
        n = (0, f.bG)([gf.A], () => gf.A.boostSlots),
        i = T.useMemo(() => Object.values(n), [n]),
        s = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        l = (0, f.bG)([gp.A], () => gp.A.affinities),
        r = (0, f.bG)([gT.Ay], () => gT.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = (0, f.bG)([gh.A], () => gh.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, cv.A)({ forceFetch: !0 }),
        d = s?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === tQ.xc.NONE,
        g = T.useMemo(() => {
            if (null == t || c) return 0;
            let e = ah.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, p.jsxs)("div", {
        className: mo.GO,
        children: [
            (0, p.jsx)(u2.kb, { className: mo.ek }),
            (0, p.jsx)(g9, {}),
            (0, p.jsx)(mi, {}),
            g > 0 && (0, p.jsx)(ma, { count: g }),
            d && (0, p.jsx)(gS.A, {}),
            !a && (0, p.jsx)(gN, {}),
            (0, p.jsxs)("div", {
                className: mo.C_,
                children: [
                    (0, p.jsx)(g$, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, p.jsx)(ml, {}),
                    (0, p.jsx)(gx.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(g1, {}),
                    (0, p.jsx)(g4, {}),
                ],
            }),
        ],
    });
}
var md = n(819677);
let mc = (0, E.E2)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            T.useEffect(() => {
                (oy.hP(), oy.$o(), (0, gE.CD)(), (0, cb.zS)(null, null, I.tF5.DISCOVERY), (0, gE.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, f.cf)([o4.A], () => ({
                    hasFetchedSubscriptions: o4.A.hasFetchedSubscriptions(),
                    premiumSubscription: o4.A.getPremiumTypeSubscription(),
                })),
                n = (0, cj.Y)(),
                i = (0, f.bG)([o5.A], () => o5.A.hasFetchedPaymentSources),
                s = (0, f.bG)([gh.A], () => gh.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = T.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, p.jsx)("div", { className: iu()(md.kL, md.Lq), children: (0, p.jsx)(oT.y, {}) })
                : (0, p.jsxs)("div", {
                      className: md.kL,
                      children: [
                          (0, p.jsx)("div", { className: md.Tp }),
                          (0, p.jsx)("div", { className: md.Qs, children: (0, p.jsx)(mu, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t["+CbP2v"]), U.intl.string(U.t.Nn1lJy)],
    }),
    mg = (0, E.zZ)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mc] }),
    mm = (0, E.t_)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        buildLayout: () => [mg],
    }),
    mA = (0, E.i4)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["+CbP2v"]),
        icon: gA._,
        buildLayout: () => [mm],
    });
var mE = n(153659),
    mh = n(155984),
    mx = n(357758),
    mS = n(262077),
    mp = n(281445),
    mT = n(624479),
    mf = n(626584),
    mI = n(131607),
    m_ = n(95035),
    mN = n(196736),
    mC = n(685743),
    my = n(349085),
    mb = n(342942),
    mv = n(376205),
    mj = n(252589),
    mO = n(758836),
    mL = n(49999),
    mR = n(344045),
    mD = n(439050);
let mP = new mf.A("GameServerSubscriptionsSection");
function mG(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function mM(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let mU = T.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, my.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, mI.kn)([eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eA.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = dq.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, mC.A)(c, t.id, tV.A.GAME_SERVER_PAGE, t.serverIp),
        A = T.useCallback(() => {
            (0, mb.A)({
                provider: mp.X.SHOCKBYTE,
                onAccept: () => {
                    (u(mL.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: E,
            priceLabel: h,
            dateLabel: x,
            isCanceled: S,
            isDanger: _,
        } = (0, f.bG)(
            [o4.A, d$.A],
            () => {
                let e = null != l ? o4.A.getSubscriptionById(l) : null;
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
                            ? U.intl.formatToPlainString(U.t.AbOLNu, { price: (0, uO.$g)(u, o.priceCurrency) })
                            : null,
                    c = mG(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? U.intl.formatToPlainString(mR.default["3aEgK6"], { date: c })
                        : s
                          ? U.intl.formatToPlainString(mR.default.KFSA3M, { date: c })
                          : U.intl.formatToPlainString(mR.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            mM,
        ),
        N = T.useCallback(() => {
            if (null == l) return;
            let e = o4.A.getSubscriptionById(l),
                t = null != e ? mG(e.currentPeriodEnd) : "";
            (0, n1.A)({
                title: U.intl.string(mR.default.TEYPNR),
                subtitle: U.intl.formatToPlainString(mR.default.XR1WrB, { date: t }),
                confirmText: U.intl.string(U.t["cY+Oob"]),
                cancelText: U.intl.string(mR.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oy.M2(l, s), await oy.hP());
                    } catch (e) {
                        mP.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        C = T.useCallback(() => {
            if (null == l) return;
            let e = o4.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? d$.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, uO.$g)(u, o.priceCurrency) : "",
                c = mG(e.currentPeriodEnd);
            (0, n1.A)({
                title: U.intl.string(mR.default.o96qbc),
                subtitle: U.intl.formatToPlainString(mR.default["7n6Qq+"], { price: d, date: c }),
                confirmText: U.intl.string(U.t.iIvF2z),
                cancelText: U.intl.string(U.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, cb.ur)(r);
                        let t = e.items;
                        (await oy.nV(
                            e,
                            { status: I.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, ah.UC)(t, e.currency),
                            s,
                        ),
                            await oy.hP());
                    } catch (e) {
                        mP.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, p.jsxs)("div", {
        className: mD.nM,
        children: [
            (0, p.jsxs)("div", {
                className: mD.M4,
                children: [
                    (0, p.jsxs)("div", {
                        className: mD.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, p.jsx)("img", { className: mD.uP, src: a, alt: "" }),
                            (0, p.jsx)("div", { className: mD.tw }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mD.CR,
                        children: [
                            (0, p.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, p.jsx)(Q.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            y &&
                                (d
                                    ? (0, p.jsxs)("div", {
                                          className: mD.CQ,
                                          children: [
                                              (0, p.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, p.jsx)(n3.D, {
                                                  className: mD.cL,
                                                  onClick: g,
                                                  "aria-label": U.intl.string(U.t.OpuAlK),
                                                  children: m
                                                      ? (0, p.jsx)(uM.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, p.jsx)(mT.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, p.jsx)(m_.A, { onClick: A, children: U.intl.string(mR.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: mD.Rd,
                children: [
                    (0, p.jsxs)("div", {
                        className: mD.Ff,
                        children: [
                            null != h &&
                                (0, p.jsx)(Q.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: h,
                                }),
                            null != x &&
                                (_
                                    ? (0, p.jsxs)("div", {
                                          className: mD.ez,
                                          children: [
                                              (0, p.jsx)(iQ.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, p.jsx)(Q.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: x,
                                              }),
                                          ],
                                      })
                                    : (0, p.jsx)(Q.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: x,
                                      })),
                        ],
                    }),
                    E &&
                        (S
                            ? (0, p.jsx)(v.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: U.intl.string(U.t.iIvF2z),
                                  onClick: C,
                              })
                            : (0, p.jsx)(v.$, {
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
function mV(e) {
    let { servers: t } = e,
        n = (0, mN.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, mj.Y)(),
        s = (0, f.bG)([lh.default], () => ah.Ay.canUseShopDiscounts(lh.default.getCurrentUser())),
        l = T.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, f.yK)([o4.A], () => (0, mv.HY)(t, i, (e) => o4.A.getSubscriptionById(e)), [t, i]);
    T.useEffect(() => {
        let e = r.filter((e) => !d$.A.isLoadedForSKU(e) && !d$.A.isFetchingForSKU(e));
        e.length > 0 && (0, cb.jv)(e).catch(() => {});
    }, [r]);
    let a = T.useCallback(() => {
        ((0, tY.default)(), (0, dV.pX)(I.BVt.COLLECTIBLES_SHOP_WITH_TAB(mO.G2.GAME_SERVERS)));
    }, []);
    return (0, p.jsxs)("div", {
        className: mD.uW,
        children: [
            (0, p.jsxs)("div", {
                className: mD.wx,
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: U.intl.string(mR.default.vCzwM7),
                    }),
                    (0, p.jsxs)("div", {
                        className: mD.h_,
                        children: [
                            (0, p.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: U.intl.string(mR.default.y85Eg9),
                            }),
                            n &&
                                (0, p.jsx)(m_.A, {
                                    onClick: a,
                                    children: (0, p.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: U.intl.string(mR.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", {
                className: mD.p_,
                children: t.map((e) =>
                    (0, p.jsx)(mU, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var mk = n(55766),
    mw = n(696986),
    mF = n(364036);
function mB(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["KzCF/6"]) }),
            (0, p.jsx)(mw.h, { size: 4 }),
            (0, p.jsx)(Q.E, { variant: "text-md/normal", className: mF.yV, children: U.intl.string(U.t["3D7qCu"]) }),
            (0, p.jsx)(mw.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: mF.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mF.RI }),
                    (0, p.jsxs)("div", {
                        className: mF.FS,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: mF.wx,
                                children: U.intl.string(U.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: mF.h_,
                                children: U.intl.format(U.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(v.$, {
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
var mz = n(872351),
    mY = n(9113),
    mX = n(599941),
    mH = n(384684),
    mW = n(2242);
let mK = [];
var mZ = n(885574),
    mq = n(812993),
    mQ = n(62010),
    m$ = n(912851),
    mJ = n(182744);
let m0 = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, p.jsx)(n3.D, {
        onClick: i ? void 0 : n,
        className: mJ.x6,
        children: (0, p.jsxs)("div", {
            className: mJ.hQ,
            children: [
                i
                    ? (0, p.jsx)(oT.y, { type: oT.y.Type.PULSING_ELLIPSIS, className: mJ.__invalid_spinner })
                    : (0, p.jsx)(Q.E, { variant: "text-md/medium", className: mJ.Pf, children: t }),
                (0, p.jsx)(g2.a, { size: "md", color: "currentColor", className: mJ.UE }),
            ],
        }),
    });
};
var m1 = n(465932),
    m2 = n(543767),
    m3 = n(951555),
    m5 = n(790284),
    m4 = n(636194),
    m6 = n(624456),
    m8 = n(710144),
    m7 = n(815332),
    m9 = n(162093),
    Ae = n(557506);
function At(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: s, onClose: l } = e,
        r = (0, tW.GV)(),
        { analyticsLocations: a } = (0, ez.Ay)(tV.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
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
                        return (n(!0), await oy.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === mW.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === mW.bN.INTANGIBLE),
        A = ic()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = U.intl.formatToPlainString(U.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: A,
        });
    return (0, p.jsx)(sh.a, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: U.intl.string(U.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: U.intl.string(U.t.F6lUDF), onClick: c, loading: d },
        ],
        title: U.intl.string(U.t.O6l5tM),
        subtitle: E,
        onClose: l,
        children: (0, p.jsxs)(Z.B, {
            gap: 8,
            children: [
                null != u ? (0, p.jsx)(iH.w, { type: "critical", message: u.message, role: "alert" }) : null,
                (0, p.jsx)(m9.x, { listingId: i.id, guildId: n.guild_id, className: Ae.P }),
            ],
        }),
    });
}
var An = n(319225),
    Ai = n(746080),
    As = n(883616);
function Al(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, p.jsxs)("div", {
        className: As.L0,
        children: [
            (0, p.jsxs)("div", {
                className: As.a5,
                children: [
                    (0, p.jsx)(N.D, { variant: "heading-deprecated-12/semibold", className: As.HU, children: t }),
                    i &&
                        (0, p.jsx)(sd.m, {
                            text: s,
                            children: (0, p.jsx)(mZ.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: As.Mo,
                            }),
                        }),
                ],
            }),
            (0, p.jsx)(N.D, { variant: "heading-xl/semibold", className: As.sx, children: n }),
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
            analyticsLocation: tV.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, f.yK)([o5.A], () => [o5.A.hasFetchedPaymentSources, o5.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, p.jsx)(m3.A, { subscription: t, currentInvoicePreview: i })
        : (0, p.jsx)(oT.y, {});
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
        : (0, p.jsx)(sa.D, {
              label: U.intl.string(U.t["4neDM+"]),
              children: (0, p.jsx)("div", {
                  className: As.__invalid_rowButtons,
                  children: n
                      ? (0, p.jsx)(v.$, { variant: "primary", text: U.intl.string(U.t.y3mAE4), onClick: r, loading: i })
                      : (0, p.jsxs)(p.Fragment, {
                            children: [
                                !t && !s && (0, p.jsx)(m0, { label: U.intl.string(U.t.FRbWR8), onClick: a }),
                                (0, p.jsx)(m0, { label: U.intl.string(U.t.Dx0lF7), onClick: l }),
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
            let t = (0, m6.M)(e),
                n = (0, f.bG)([m4.A], () => m4.A.getSubscriptionListingForPlan(t)),
                i = (0, f.bG)([m4.A], () =>
                    null != n ? m4.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, f.bG)([sy.A], () => sy.A.getGuild(i?.guild_id)),
                [l, r] = T.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, mX.XE)();
            T.useEffect(() => {
                l && null != s && null == m4.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = ic()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, uO.$g)(t.price, t.currency) : "",
                              s = ic()(t.createdAt).format("M/D/YY"),
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
        d = (0, tW.GV)(),
        { analyticsLocations: c } = (0, ez.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: g } = (0, m1.MH)(s?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function A() {
        try {
            (u(!0),
                await oy.QP(t, c),
                (0, An.E)({ title: U.intl.string(U.t.oPV2cy), body: U.intl.string(U.t.DdRizV) }));
        } finally {
            u(!1);
        }
    }
    let {
            isCancelled: E,
            isPastDue: x,
            subscriptionPrice: S,
            memberSince: _,
            nextRenewalDate: N,
            nextRenewalLabel: C,
            isTrial: y,
        } = a,
        b = n.soft_deleted || null == s || m;
    return (0, p.jsxs)("div", {
        className: As.kL,
        children: [
            (0, p.jsx)(m8.A, {
                onClick: r,
                className: As.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, p.jsxs)(p.Fragment, {
                        children: [
                            null != s && (0, p.jsx)(gR.Ay, { guild: s, active: !0, size: gR.Ay.Sizes.MEDIUM }),
                            (0, p.jsxs)("div", {
                                className: As.if,
                                children: [
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        className: As.J5,
                                        children: null != s ? s.name : U.intl.string(U.t["He+cmd"]),
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: As.xp,
                                        children: [
                                            (0, p.jsx)(Q.E, {
                                                variant: "text-sm/normal",
                                                className: As.KR,
                                                children: n.name,
                                            }),
                                            E
                                                ? (0, p.jsx)(mq.Lp, { text: U.intl.string(U.t["7uFZGt"]) })
                                                : y
                                                  ? (0, p.jsx)(mq.Lp, {
                                                        text: U.intl.string(U.t["6anton"]),
                                                        color: n0.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : x
                                                    ? (0, p.jsx)(sd.m, {
                                                          text: U.intl.string(U.t.eSuJE2),
                                                          children: (0, p.jsx)("div", {
                                                              children: (0, p.jsx)(mq.Lp, {
                                                                  className: As.qc,
                                                                  text: U.intl.string(U.t.NrRwIl),
                                                                  color: n0.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            m
                                                ? (0, p.jsx)(sd.m, {
                                                      text: U.intl.string(U.t.nv1IqK),
                                                      children: (0, p.jsx)("div", {
                                                          className: As.Bi,
                                                          children: (0, p.jsx)(mQ.E, {
                                                              type: { text: U.intl.string(U.t["sBl3X/"]) },
                                                              variant: "secondary",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, p.jsx)(n3.D, {
                                onClick: i(r),
                                "aria-label": U.intl.string(U.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, p.jsx)(g2.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: iu()(As.D6, { [As.S7]: l }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && l
                ? (0, p.jsxs)("div", {
                      id: d,
                      children: [
                          (0, p.jsx)("div", { className: As.yF }),
                          (0, p.jsx)(m7.A, { groupListingId: i.id, subscription: t, className: As.kE }),
                          (0, p.jsxs)("div", {
                              className: As.Zx,
                              children: [
                                  (0, p.jsx)(Al, { label: C, value: N }),
                                  (0, p.jsx)(Al, {
                                      label: U.intl.string(U.t.dltUMH),
                                      value: S,
                                      showInfoIcon: y,
                                      infoIconTooltipText: y ? U.intl.string(U.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, p.jsx)(Al, { label: U.intl.string(U.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, p.jsx)(mw.h, { size: 16 }),
                          !E &&
                              !m &&
                              (0, p.jsx)(sa.D, {
                                  label: U.intl.string(U.t.wmMFvA),
                                  children: (0, p.jsx)(Ar, { subscription: t }),
                              }),
                          !b &&
                              (0, p.jsx)(Aa, {
                                  isTrial: y,
                                  isCancelled: E,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sx.openModal)((t) => (0, p.jsx)(At, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, dV.pX)(I.BVt.CHANNEL(s.id, Ai.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tY.default)(),
                                          m$.A.show(
                                              I.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              U.intl.string(U.t.DvbaM4),
                                              () => {
                                                  (m5.A.setState({ subsection: eO.nR }),
                                                      (0, nr.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL));
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
                    (0, f.bG)([mH.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [mH.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? mW.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? mW.M_.NONE
                                  : mW.M_.IN_SUBSCRIPTION_SERVER;
                        })([mH.A]),
                    ) === mW.M_.SUBSCRIBED,
                n = (0, f.bG)([o4.A], () => o4.A.getActiveGuildSubscriptions()),
                i = T.useRef(!1);
            return (
                T.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            s = o4.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !o4.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oy.hP());
                }, [e, t]),
                n ?? mK
            );
        })(),
        { loading: i } = (0, mX.eb)(n);
    return ((0, mY.A)(oR.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, p.jsx)(oT.y, {})
        : 0 === n.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(v.$, { text: U.intl.string(U.t.hqyhKQ), icon: mz.z, variant: "secondary", onClick: t }),
                    (0, p.jsx)(mw.h, { size: 10 }),
                    (0, p.jsx)(n2.n, {
                        label: U.intl.string(U.t["KzCF/6"]),
                        description: U.intl.string(U.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: Au.A,
                            children: n.map((e) => (0, p.jsx)(Ao, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Ac = n(327479),
    Ag = n(932012);
function Am(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(N.D, { variant: "heading-md/bold", children: U.intl.string(U.t["48ywCu"]) }),
            (0, p.jsx)(mw.h, { size: 4 }),
            (0, p.jsx)(Q.E, { variant: "text-md/normal", className: Ag.yV, children: U.intl.string(U.t.VWxmSo) }),
            (0, p.jsx)(mw.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: Ag.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: Ag._e }),
                    (0, p.jsxs)("div", {
                        className: Ag.FS,
                        children: [
                            (0, p.jsx)(N.D, {
                                variant: "heading-xl/semibold",
                                className: Ag.wx,
                                children: U.intl.string(U.t["48ywCu"]),
                            }),
                            (0, p.jsx)(Q.E, {
                                variant: "text-md/normal",
                                className: Ag.h_,
                                children: U.intl.format(U.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(Ac.A, { onClick: t, text: U.intl.string(U.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AA = n(548411),
    AE = n(417098),
    Ah = n(143582),
    Ax = n(915043),
    AS = n(631466);
function Ap(e) {
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
    return (0, p.jsxs)("div", {
        className: iu()(AS.iE, t),
        children: [
            (0, p.jsx)("div", { className: iu()(AS.wx, i), children: n }),
            l && (0, p.jsx)("div", { className: AS.Qs, children: s }),
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
    return (0, p.jsx)(Av.Provider, { value: s, children: t(n) });
}
Aj.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = T.useContext(Av),
        l = i ? Ay.t : g2.a,
        r = null != n ? n : i ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.XJuakA);
    return (0, p.jsxs)(n3.D, {
        className: iu()(Ab.L, t),
        onClick: s,
        children: [
            (0, p.jsx)(Q.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(l, { size: "sm", color: "currentColor" }),
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
            [d$.A, dJ.A, AR.A, sy.A],
            () => {
                let e,
                    n = d$.A.get(r),
                    i = null != n ? dJ.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? AR.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, AD.PJ)(o.skuFlags),
                    d = u && null != s ? sy.A.getGuild(s) : void 0,
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
        S = g?.deleted ?? !1,
        _ = null != g && (0, AD.Se)(g),
        C = t.status === I.Dmq.PAST_DUE,
        { analyticsLocations: y } = (0, ez.Ay)(),
        [b] = (0, m2.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: y,
            analyticsLocation: tV.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = AG(t.currentPeriodEnd),
        j = 0 === i;
    return (0, p.jsxs)(Ap, {
        headerClassName: AM.dL,
        header:
            !1 === j
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: AM.VW,
                              children: [
                                  null != x &&
                                      (0, p.jsx)(Af._, { src: x.href, imageClassName: AM.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: AM.aF,
                                      children: [
                                          (0, p.jsx)(N.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: h?.name ?? U.intl.string(U.t["7kqy7W"]),
                                          }),
                                          (0, p.jsx)(Q.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? U.intl.string(U.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, p.jsx)("div", {
                              className: AM.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, p.jsx)(Az, {
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
                : (0, p.jsx)(oT.y, { type: oT.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, p.jsx)(AB, {
                    type: "warning",
                    title: _
                        ? U.intl.formatToPlainString(U.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : U.intl.formatToPlainString(U.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, p.jsx)(AB, { type: "warning", title: U.intl.string(U.t.SmSP8Q) }),
            C && (0, p.jsx)(AB, { type: "danger", title: U.intl.string(U.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: AM.zH,
                children: [
                    (0, p.jsx)(AF, {
                        title: U.intl.string(U.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: AM.yW,
                                          children: [(0, p.jsx)(AI.R, { size: "xs" }), U.intl.string(U.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: AM._t,
                                              children: [
                                                  (0, p.jsx)(Q.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: U.intl.format(U.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(gR.Ay, { guild: c, size: gR.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: AM.yW,
                                  children: [(0, p.jsx)(A_.UserIcon, { size: "xs" }), U.intl.string(U.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(Ak, { invoicePreview: b, subscriptionPlan: o }),
                    (0, p.jsx)(AF, {
                        title: U.intl.string(U.t.dnUzb6),
                        content: AG(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(Aw, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(AX, {
                subscription: t,
                currentInvoicePreview: b,
                loadingState: i,
                isDeleted: S,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(AY, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function Ak(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, p.jsx)(AF, { title: U.intl.string(U.t.KI7ERx), content: "" });
    let i = (0, uO.CE)((0, uO.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, p.jsx)(AF, { title: U.intl.string(U.t.KI7ERx), content: i });
    let l = (0, uO.CE)((0, uO.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(AF, {
        title: U.intl.string(U.t.KI7ERx),
        content: (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(Q.E, { variant: "text-sm/semibold", children: l }),
                l !== i &&
                    (0, p.jsx)(sd.m, {
                        text: U.intl.format(U.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, p.jsx)(Q.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, p.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function Aw(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, uO.CE)((0, uO.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, p.jsx)(AF, {
            title: U.intl.string(U.t.hIhAM3),
            content: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(Q.E, { variant: "text-sm/medium", children: n }),
                    (0, p.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        children: U.intl.format(U.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, p.jsx)(AF, { title: t ? U.intl.string(U.t.enxcAl) : U.intl.string(U.t["Ms+6Zq"]), content: n });
}
function AF(e) {
    let { title: t, content: n } = e;
    return (0, p.jsxs)("div", {
        className: AM.nM,
        children: [
            (0, p.jsx)(Q.E, { variant: "text-sm/medium", children: t }),
            (0, p.jsx)(Q.E, { variant: "text-sm/medium", className: AM.u4, children: n }),
        ],
    });
}
function AB(e) {
    let { type: t, title: n } = e;
    return (0, p.jsx)("div", {
        className: AM.Xm,
        children: (0, p.jsx)(iH.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
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
        h = (0, f.bG)([dJ.A], () => dJ.A.getParentSKU(i.skuId), [i.skuId]),
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
        S = 0 !== x.length;
    async function I() {
        try {
            A(!0);
            let { subscription: e } = await (0, oy.QP)(l, g);
            if (null == e) return;
            (0, sx.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, p.jsx)(t, { ...n, storeListing: i, subscription: AL.A.createFromServer(e) });
            });
        } finally {
            A(!1);
        }
    }
    return (0, p.jsxs)("div", {
        className: AM.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, p.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(U.t.QtMnkW),
                        onClick: I,
                        loading: m,
                    })
                  : (0, p.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(U.t["E8G/tr"]),
                        onClick: function () {
                            (0, sx.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, p.jsx)(e, { ...n, application: t, storeListing: i, subscription: l, guild: o });
                            });
                        },
                    }),
            S &&
                null != h &&
                !1 === r &&
                !1 === a &&
                (0, p.jsx)(v.$, {
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
    return (0, p.jsx)(Aj, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: AM.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: AM.wV,
                        children: [
                            e && (0, p.jsx)(Q.E, { variant: "text-sm/semibold", children: U.intl.string(U.t.mORL67) }),
                            (0, p.jsx)(Aj.Toggle, {
                                className: AM.Bh,
                                text: e ? U.intl.string(U.t.gsbFAw) : U.intl.string(U.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, p.jsx)(AT.FY, { header: i, icon: (0, AP.N)(t, l), description: s }, n);
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
          ? (0, p.jsx)("div", {
                className: AM.Ji,
                children: (0, p.jsx)(sa.D, {
                    label: U.intl.string(U.t.azZaZa),
                    children: (0, p.jsx)(oT.y, { type: oT.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, p.jsx)("div", {
                  className: AM.Ji,
                  children: (0, p.jsxs)(AE.$T, {
                      color: AE.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          U.intl.format(U.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          U.intl.format(U.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: AM.Ji,
                  children: (0, p.jsx)(sa.D, {
                      label: U.intl.string(U.t.azZaZa),
                      children: (0, p.jsx)(m3.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
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
        null != e ? (0, cb.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var AZ = n(240248),
    Aq = n(237218),
    AQ = n(763064);
function A$(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = T.useState(!1),
        [r, a] = T.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: AQ.x6,
                onClick: () => l((e) => !e),
                children: (0, p.jsxs)(Q.E, {
                    className: AQ.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? U.intl.string(U.t["JQX/Pb"]) : U.intl.string(U.t.Fbrd8J),
                        s
                            ? (0, p.jsx)(Ay.t, { color: n0.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, p.jsx)(g2.a, { color: n0.A.colors.TEXT_BRAND, size: "xs" }),
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
        (0, p.jsxs)("div", {
            children: [
                (0, p.jsx)(Q.E, {
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
var AJ = n(920352);
function A0(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = T.useMemo(() => (null == n.thumbnail ? null : (0, Aq.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = AK(n.skuId),
        u = T.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, ah._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(Ap, {
              className: iu()(AJ.iE, i),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: AJ.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(Af._, { src: a.href, imageClassName: AJ.rW, width: 48, height: 48 }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)(N.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, p.jsx)(Q.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, AZ.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: AJ.h_,
                          children: (0, p.jsx)(A$, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, p.jsx)("div", {
                          className: AJ.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, p.jsx)(AT.FY, { header: n, icon: (0, AP.N)(s, l), description: i }, t);
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
        m = (0, f.bG)([sy.A], () => (u && null != g ? sy.A.getGuild(g) : void 0), [g, u]),
        A = (0, f.bG)(
            [dJ.A],
            () => {
                if (null != a) return dJ.A.get(a);
            },
            [a],
        ),
        E = AG(n.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: A2.wx,
                children: [
                    null != o && (0, p.jsx)(Af._, { src: o.href, imageClassName: A2.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(N.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: A2.p4,
                                children: [
                                    (0, p.jsxs)(N.D, {
                                        variant: "heading-md/normal",
                                        className: A2.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(Q.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, p.jsxs)("span", {
                                                    className: A2.vP,
                                                    children: [
                                                        (0, p.jsx)(gR.Ay, { guild: m, size: gR.Ay.Sizes.SMOL }),
                                                        (0, p.jsx)(N.D, {
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
            (0, p.jsx)(Aj, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: A2._B,
                        children: [
                            (0, p.jsx)(Q.E, { variant: "text-md/normal", children: U.intl.string(U.t["goe+hk"]) }),
                            e &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(Q.E, {
                                            variant: "text-md/normal",
                                            children: U.intl.format(U.t["Q8qJ+5"], {}),
                                        }),
                                        (0, p.jsx)(Q.E, {
                                            variant: "text-md/normal",
                                            children: U.intl.format(U.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, p.jsx)(Aj.Toggle, {
                                text: e ? U.intl.string(U.t["1Rkq/E"]) : U.intl.string(U.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: A2.x0,
                children: [
                    (0, p.jsx)(A0, {
                        storeListing: i,
                        className: A2.o3,
                        cta: (0, p.jsxs)("div", {
                            className: A2.cJ,
                            children: [
                                (0, p.jsx)(Q.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: U.intl.string(U.t.fHIpOY),
                                }),
                                null != A &&
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: U.intl.format(U.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, p.jsx)(
                                  A0,
                                  {
                                      storeListing: e,
                                      cta: (0, p.jsx)(Q.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: U.intl.format(U.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, p.jsx)(A5, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
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
    return (0, p.jsx)(A0, {
        storeListing: t,
        cta: (0, p.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(U.t["+KwmBt"]), onClick: s }),
    });
}
class A4 extends T.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(AE.$T, {
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
function A6(e) {
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
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        A4,
                        {
                            subscription: e,
                            children: (0, p.jsx)(AV, {
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
            return (0, p.jsx)(A3, { ...m, navigateToHome: r });
        default:
            (0, ir.xb)(l);
    }
}
var A8 = n(707989);
function A7(e) {
    let { onGoBack: t } = e,
        n = (0, f.yK)(
            [o4.A],
            () =>
                o4.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, s] = T.useState();
    return (
        null == i && (i = (0, p.jsx)(A9, { onBack: t, title: U.intl.string(U.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                i,
                (0, p.jsx)("div", {
                    className: A8.A,
                    children: (0, p.jsx)(A6, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, p.jsx)(A9, {
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
    return (0, p.jsxs)("div", {
        className: A8.D,
        children: [
            (0, p.jsx)(so.K, {
                "aria-label": U.intl.string(U.t["13/7kX"]),
                icon: () => (0, p.jsx)(AA.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(N.D, { variant: "heading-lg/semibold", children: n }),
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
        ? ((t = U.intl.string(gn.default["/S02sx"])), (n = U.intl.string(gn.default.OPJNST)))
        : i
          ? ((t = U.intl.string(U.t["hT6i/0"])),
            (n = null != a ? U.intl.format(U.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = U.intl.string(U.t["3G0CTC"])),
            (n = r === tQ.xc.FP_SUB_PAUSED ? U.intl.format(U.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = iu()({ [Et.Hs]: i, [Et.mT]: !i }),
        d = iu()({ [Et.CQ]: i, [Et.ZM]: !i }),
        c = iu()({ [Et.EM]: !i });
    return (0, p.jsxs)("div", {
        className: Et.r6,
        children: [
            (0, p.jsxs)("div", {
                className: Et.Nv,
                children: [
                    (0, p.jsx)(N.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, p.jsx)(Q.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: Et.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(Q.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let Ei = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, ah.kX)(t),
        r = l.length > 0,
        a = (0, Ee.Ay)(t.endsAt, Ee.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: iu()(n, Et.f8),
            children: [
                (0, p.jsx)("div", {
                    className: Et.J_,
                    children: (0, p.jsxs)("div", {
                        className: Et.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: Et.xt,
                                children: (0, p.jsx)(al.t, { size: "md", color: "white", className: Et.T8 }),
                            }),
                            (0, p.jsx)("div", {
                                className: Et.pt,
                                children: (0, p.jsx)(N.D, {
                                    variant: "heading-md/semibold",
                                    children: U.intl.string(U.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(Q.E, {
                                className: Et.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : U.intl.string(U.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(En, {
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
    if (null == o || ah.Ay.getInterval(i).intervalType !== tQ.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, ah.z4)(i),
        m = ah.Ay.getDisplayName(i);
    if (a) t = U.intl.string(gn.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === I.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, ah._e)(e, r);
        t = U.intl.formatToPlainString(U.t["5CNRRA"], { date: n ?? 0 });
    } else t = U.intl.formatToPlainString(U.t.eNXZ5O, { planName: m });
    let A = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, p.jsxs)("div", {
        className: Et.Bh,
        children: [
            (0, p.jsx)("div", {
                className: iu()({
                    [Et.bY]: g,
                    [Et.sr]: o.skuId === tQ.pe.TIER_0,
                    [Et.lP]: o.skuId === tQ.pe.TIER_1,
                    [Et.eb]: o.skuId === tQ.pe.TIER_2,
                }),
                children: g
                    ? (0, p.jsx)(gA._, { size: "md", color: "currentColor", className: Et.Kk })
                    : (0, p.jsx)(al.t, { size: "md", color: "currentColor", className: Et.Kk }),
            }),
            (0, p.jsxs)("div", {
                className: Et.pt,
                children: [
                    (0, p.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        children: U.intl.format(U.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, p.jsx)(N.D, {
                            className: Et.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, p.jsx)(Q.E, {
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
        s = (0, f.yK)([dk.A], () => dk.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, f.bG)([o4.A], () => o4.A.getPremiumSubscription()),
        r = (0, f.bG)([o4.A], () => null == o4.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tQ.gD.PREMIUM_MONTH_TIER_1),
        o = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)("div", {
                className: iu()(t, Et.xF, Et.J_),
                children: Object.keys(i).map((e) =>
                    (0, p.jsx)(
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
                (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(Q.E, {
                            className: Et.eT,
                            variant: "text-md/normal",
                            children: U.intl.string(U.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(Es.i, {}),
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
            analyticsLocation: tV.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? Ea.r : Ea.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ah.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = d$.A.get(o);
    tA()(null != u, "Missing plan");
    let d = (0, uO.$g)(l.total, l.currency);
    return (
        u.interval === tQ.WT.YEAR
            ? (t = U.intl.format(U.t["jPz/39"], {
                  price: d,
                  termsUrl: I.X7G.TERMS,
                  paidURL: I.X7G.PAID_TERMS,
                  privacyUrl: I.X7G.PRIVACY,
              }))
            : u.interval === tQ.WT.MONTH &&
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
        (0, p.jsx)(Q.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function Eu(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === I.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(Eo, { subscription: t, withOverheadSeparator: n });
}
var Ed = n(580892),
    Ec = n(689255);
let Eg = { [eO.nR]: "role_subscriptions_panel", [eO.PZ]: "application_subscriptions_panel" };
function Em() {
    return (0, p.jsx)(oD.Z, {
        className: Ec.wb,
        type: oD.Z.Types.CUSTOM,
        children: (0, p.jsxs)(sI.A, {
            align: sI.A.Align.CENTER,
            children: [
                (0, p.jsx)(i6.A, { game: null, size: i6.M.SMALL, className: Ec.pV }),
                (0, p.jsx)("span", { className: Ec.O, children: U.intl.string(U.t["jy/hyj"]) }),
            ],
        }),
    });
}
function EA(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mx._)(e, t));
}
function EE() {
    let e = (0, f.bG)([dk.A], () => dk.A.getForApplication(tQ.tv), [], EA);
    return (
        T.useEffect(() => {
            (0, cu.LM)(tQ.tv);
        }, []),
        (0, p.jsx)(n2.n, {
            label: U.intl.string(U.t["2GKrvn"]),
            description: U.intl.string(U.t.Z5b2Gf),
            children:
                null != e && ah.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(Er, { className: Ec.fX, entitlements: e })
                    : (0, p.jsx)(Em, {}),
        })
    );
}
function Eh() {
    return (0, p.jsx)("hr", { className: Ec.hr });
}
let Ex = function () {
        var e;
        let t = (0, f.bG)([o4.A], () => o4.A.getPremiumTypeSubscription()),
            n = (0, mS.A)({ subscriptionFilter: (e) => Ed.Hy.has(e.status) }),
            i = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, f.bG)(
                [o5.A],
                () => (null != t && null != t.paymentSourceId ? o5.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, f.bG)([o4.A], () => o4.A.hasFetchedSubscriptions()),
            a = (0, f.bG)([oj.A], () => oj.A.isBusy),
            o = (0, cj.Y)(),
            u = m5.A.useField("subsection"),
            d = m5.A.useField("scrollToGameServers"),
            c = T.useRef(null);
        T.useEffect(() => {
            (0, n9._)(null != u ? Eg[u] : h.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let g = (0, f.bG)([o4.A], () => o4.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, f.bG)(
                [o4.A],
                () =>
                    Object.values(o4.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === I.rzx.GUILD)
                        .filter((e) => e.status !== I.Dmq.ENDED).length,
            ),
            A = (0, f.bG)([o4.A], () =>
                Object.values(o4.A.getSubscriptions() ?? {}).some((e) => e.type === I.rzx.GAME_SERVER),
            ),
            { servers: E } = (0, mk.f)({ enabled: A }),
            x = (0, f.yK)([o4.A], () => (0, mv.eP)(E, (e) => o4.A.getSubscriptionById(e)), [E]),
            S = (0, cv.A)({ forceFetch: !0 }),
            _ = (0, cD.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            y =
                !(_ && !(S.unactivatedUnits.length > 0)) &&
                (S.fractionalState !== tQ.xc.NONE || S.unactivatedUnits.length > 0);
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
                (0, cb.zS)(),
                oy.hP(),
                (0, gE.CD)(),
                oy.$o(),
                function () {
                    m5.A.resetState();
                }
            ),
            [],
        ),
        to.A.enabled)
            ? (0, p.jsx)(oc.A, {})
            : r && o
              ? u === eO.nR
                  ? (0, p.jsx)(Ad, { onGoBack: () => m5.A.setState({ subsection: null }) })
                  : u === eO.PZ
                    ? (0, p.jsx)(A7, { onGoBack: () => m5.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: Ec.kL,
                          children: (0, p.jsxs)("div", {
                              className: Ec.Qs,
                              children: [
                                  s ? (0, p.jsx)(Ed.Sb, {}) : null,
                                  null != t
                                      ? (0, p.jsx)(Ed.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, p.jsx)(Ed.TC, {}),
                                  y &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, p.jsxs)("section", {
                                          children: [
                                              (0, p.jsx)(N.D, {
                                                  variant: "heading-md/bold",
                                                  className: Ec.HL,
                                                  children: U.intl.string(U.t.Obre8v),
                                              }),
                                              (0, p.jsx)(Q.E, {
                                                  variant: "text-md/normal",
                                                  className: Ec.JU,
                                                  children: U.intl.format(U.t["7Zi06b"], {
                                                      helpCenterLink: eC.A.getArticleURL(
                                                          I.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, p.jsx)(Ei, {
                                                  className: Ec.fX,
                                                  fractionalPremiumInfo: S,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, p.jsx)(EE, {}),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(Eh, {}),
                                              (0, p.jsx)(mB, {
                                                  count: m,
                                                  onClickManageSubscription: () => m5.A.setState({ subsection: eO.nR }),
                                              }),
                                          ],
                                      }),
                                  g > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(Eh, {}),
                                              (0, p.jsx)(Am, {
                                                  count: g,
                                                  onClickManageSubscription: () => {
                                                      (m5.A.setState({ subsection: eO.PZ }),
                                                          tu.default.track(
                                                              I.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  x.length > 0 &&
                                      (0, p.jsxs)("div", {
                                          ref: c,
                                          children: [(0, p.jsx)(Eh, {}), (0, p.jsx)(mV, { servers: x })],
                                      }),
                                  (0, p.jsx)(Eh, {}),
                                  null != t ? (0, p.jsx)(Eu, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: iu()(Ec.kL, Ec.Lq), children: (0, p.jsx)(oT.y, {}) });
    },
    ES = (0, E.E2)(h.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        Component: () => (0, p.jsx)(Ex, {}),
    }),
    Ep = (0, E.zZ)(h.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [U.intl.string(U.t.trSpHX), U.intl.string(U.t["2GKrvn"])],
        buildLayout: () => [ES],
    }),
    ET = (0, E.t_)(h.X.SUBSCRIPTIONS_PANEL, { useTitle: () => U.intl.string(U.t.trSpHX), buildLayout: () => [Ep] }),
    Ef = (0, E.i4)(h.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.trSpHX),
        icon: mE.L,
        usePersistentBadge: function () {
            let e = (0, mh.l)();
            return T.useMemo(
                () => ({
                    badgeType: S.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, p.jsx)(iQ.E, { size: "xs", color: n0.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [ET],
    }),
    EI = (0, E.WI)(h.X.BILLING_SECTION, {
        useTitle: () => U.intl.string(U.t.oeUm2s),
        buildLayout: () => [gm, mA, Ef, cf, u6],
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
        useValue: () => (0, f.bG)([ra.default], () => ra.default.isAxeEnabled),
        setValue: (e) => (0, rr.x)({ axeEnabled: e }),
    }),
    Ev = (0, E.zD)(h.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, f.bG)([ra.default], () => ra.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rr.x)({ cssDebuggingEnabled: e }).then(() => {
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
        usePredicate: () => (0, f.bG)([ra.default], () => ra.default.layoutDebuggingEnabled),
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
        useValue: () => (0, f.bG)([ra.default], () => ra.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rr.x)({ layoutDebuggingEnabled: e });
        },
    }),
    EU = (0, E.sN)(h.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, f.bG)([ra.default], () => ra.default.layoutDebuggingEnabled),
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
        (0, p.jsx)(sa.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, p.jsx)(sS.k, {
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
            return (0, p.jsx)(EF, {
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
    E$ = n(252149),
    EJ = n(221851);
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
        return (0, p.jsxs)(sI.A, {
            direction: sI.A.Direction.VERTICAL,
            className: iu()(EQ.oS, EJ.SX, E$.N, EQ.nM),
            children: [
                (0, p.jsx)(EW.A, {
                    className: iu()(EQ.lL, { [EQ.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, p.jsxs)(sI.A, {
                    className: EJ.QB,
                    children: [
                        (0, p.jsx)(sI.A.Child, {
                            basis: "50%",
                            children: (0, p.jsx)(sr.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: E1,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, p.jsx)(sI.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, p.jsx)(sS.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, p.jsxs)(sI.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, p.jsx)(Q.E, {
                                className: EQ.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, p.jsxs)(Q.E, {
                            variant: "text-sm/normal",
                            className: EQ.AS,
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
        (0, sx.openModal)((t) => (0, p.jsx)(E4, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, p.jsx)(EY.pp, {
            theme: nw.A.theme,
            className: iu()(EJ.eT, EJ.SX),
            children: (0, p.jsx)(EY.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : W().map(e, (e, i) =>
                  (0, p.jsx)(
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
            : (0, p.jsx)(v.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, p.jsx)(sd.m, {
                  text: "Generate Public Link",
                  children: (0, p.jsx)(so.K, {
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
        return (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(v.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, p.jsx)(v.$, {
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
            ? (0, p.jsx)(oT.y, { className: EJ.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                E2(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, p.jsx)(Q.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, p.jsx)(n2.n, {
            children: (0, p.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, p.jsx)(sr.l, {
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
                    (0, p.jsxs)(l0.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class E4 extends T.Component {
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
        e.key === sU.dh.ENTER && this.handleAddAllowedVersion();
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
        return (0, p.jsxs)(Z.B, {
            gap: 20,
            children: [
                (0, p.jsx)(sr.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Eq.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(sr.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Eq.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, p.jsxs)(Z.B, {
                          gap: 20,
                          children: [
                              (0, p.jsx)(sS.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iY.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, p.jsx)(sr.l, {
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
                    : (0, p.jsx)(EH.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(EH.f, {
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
        return (0, p.jsx)(iH.w, { type: n, message: e, role: "critical" === n ? "alert" : "status" });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, p.jsx)(sh.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, p.jsx)(d9.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let E6 = (0, E.E2)(h.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: E5 });
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
        return (0, p.jsx)(EF, {
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
        useDisabled: () => M.pK.useSetting() === oL.default.fromTimestamp(ht.getTime()),
        onClick: () => (he.w.set("lastChangeLogDate", ht), M.pK.updateSetting(oL.default.fromTimestamp(ht.getTime()))),
    }),
    hi = (0, E.zD)(h.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, f.bG)([ra.default], () => ra.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, f.bG)(
                [ra.default],
                () => ra.default.disableAppCollectionsCache || ra.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, rr.x)({ disableAppCollectionsCache: e }),
    }),
    hs = (0, E.zD)(h.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, f.bG)([ra.default], () => ra.default.isForcedCanary),
        setValue: (e) => {
            (0, rr.x)({ canary: e });
        },
    }),
    hl = (0, E.zD)(h.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, f.bG)([ra.default], () => ra.default.sourceMapsEnabled),
        setValue: (e) => (0, rr.x)({ sourceMapsEnabled: e }),
    }),
    hr = (0, E.zD)(h.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, f.bG)([ra.default], () => ra.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rr.x)({ onlyShowPreviewAppCollections: e }),
    });
var ha = n(10094),
    ho = n(683760);
let hu = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tQ.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tQ.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tQ.PremiumTypes.TIER_2 },
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
            return (0, p.jsx)(EF, {
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
        buildLayout: () => [hd, hg, EB, E9, hn, hs, Ez, hr, hi, hl, E6],
        useInlineNotice: () => ({
            type: S.lT.INLINE_NOTICE,
            noticeType: "info",
            role: "none",
            text: U.intl.format(U.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hA = (0, E.zD)(h.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, f.bG)([ra.default], () => ra.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rr.x)({ logAnalyticsEvents: e }),
    }),
    hE = (0, E.zD)(h.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, f.bG)([ra.default], () => ra.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rr.x)({ logGatewayEvents: e }),
    }),
    hh = (0, E.zD)(h.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, f.bG)([ra.default], () => ra.default.preventPopoutClose),
        setValue: (e) => (0, rr.x)({ preventPopoutClose: e }),
    }),
    hx = (0, E.zD)(h.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, f.bG)([ra.default], () => ra.default.logKeyboardMismatches),
        setValue: (e) => (0, rr.x)({ logKeyboardMismatches: e }),
    }),
    hS = (0, E.zD)(h.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, f.bG)([ra.default], () => ra.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rr.x)({ logOverlayEvents: e }),
    }),
    hp = (0, E.zD)(h.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, f.bG)([ra.default], () => ra.default.isLoggingQuestEvents),
        setValue: (e) => (0, rr.x)({ logQuestEvents: e }),
    }),
    hT = (0, E.zD)(h.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, f.bG)([ra.default], () => ra.default.isTracingRequests),
        setValue: (e) => (0, rr.x)({ trace: e }),
    }),
    hf = (0, E.zZ)(h.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hE, hS, hT, hA, hx, hh, hp] }),
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
                } = (0, f.cf)([ra.default, E_.A, lh.default], () => ({
                    layoutDebuggingEnabled: ra.default.layoutDebuggingEnabled,
                    isDeveloper: E_.A.isDeveloper,
                    isLoggingGatewayEvents: ra.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: ra.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: ra.default.isLoggingAnalyticsEvents,
                    isTracingRequests: ra.default.isTracingRequests,
                    isForcedCanary: ra.default.isForcedCanary,
                    isSourceMapsEnabled: ra.default.sourceMapsEnabled,
                    isAxeEnabled: ra.default.isAxeEnabled,
                    preventPopoutClose: ra.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: ra.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: ra.default.disableAppCollectionsCache,
                    isStaff: lh.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, Ey.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = Ey.Or.getState(),
                x = M.HZ.useSetting();
            return t
                ? [
                      (0, p.jsxs)(
                          tn.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, nr.openUserSettings)(h.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, p.jsx)(
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
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, rr.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, rr.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: d,
                                          action: () => {
                                              (0, rr.x)({ disableAppCollectionsCache: !d });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, p.jsxs)(
                          tn.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, nr.openUserSettings)(h.X.LOGGING);
                              },
                              children: [
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, rr.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, rr.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, rr.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, rr.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, rr.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, p.jsxs)(
                          tn.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, nr.openUserSettings)(h.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, rr.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, p.jsx)(
                                      tn.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, rr.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(
                                                  tn.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, p.jsx)(EC.i, {
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
                                              (0, p.jsx)(
                                                  tn.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, p.jsx)(EC.i, {
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
                          ? (0, p.jsx)(
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
        d = (0, f.bG)([dq.default], () => dq.default.getId()),
        c = (0, f.bG)([dq.default], () => {
            let e = dq.default.getInstallationForTracking();
            return null == e ? null : (0, hy.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, hP.iN)(t, g),
        A = (0, hP.Fm)(t, g),
        E = (0, f.yK)([rA.A], () =>
            W()
                .sortBy(rA.A.getRecentExposures(hU.Vh.USER, n), (e) => {
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
                (0, uN.C)((0, hO.yA)(n), () => {
                    ((0, ld.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        x = (0, p.jsx)(hj.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hV.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsxs)(Z.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uN.p5 &&
                                        (0, p.jsx)(n3.D, {
                                            onClick: h,
                                            children: (0, p.jsx)(EX.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, p.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: hV.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, p.jsx)("div", { className: hV.Os, children: x });
    let S = "";
    return (
        (S =
            t.system === hL.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? hU.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: hV.Os,
            children: [
                x,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(hR.g, {
                        label: t.system === hL.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: S,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: hV.h_,
                    children:
                        null == A
                            ? (0, p.jsx)(Q.E, {
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
                              (0, p.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hV.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "code",
                                  className: hV.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hV.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "code",
                                  className: hV.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hV.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "code",
                                  className: hV.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: hV.id,
                          children: (0, p.jsx)(hb.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(si.c, { className: hV.yF }),
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
        u = (0, f.bG)([rA.A], () => rA.A.getLoadedGuildExperiment(n)),
        d = (0, f.bG)([rA.A, sy.A, iK.A], () => {
            if (t.system === hL.l5.LEGACY) return null == rA.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sy.A.getGuildsArray().some((t) => null != iK.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, f.yK)([rA.A], () =>
            W()
                .sortBy(rA.A.getRecentExposures(hU.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, f.yK)([dq.default, sy.A, rA.A, iK.A], () => {
            let e = t.system === hL.l5.LEGACY,
                i = t.name,
                s = dq.default.getId(),
                l = W().sortBy(sy.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (rA.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? hU.RE.NOT_ELIGIBLE)
                    : (iK.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? hU.RE.NOT_ELIGIBLE);
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
        E = (0, f.yK)([sy.A], () => W().sortBy(sy.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, x] = T.useState(() => sb.A.getGuildId() ?? sb.A.getLastSelectedGuildId()),
        S = E.find((e) => e.id === h)?.name,
        I = (0, f.bG)(
            [iK.A],
            () => {
                if (A && null != h) return iK.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        _ = (0, f.bG)([iK.A, dq.default], () => {
            if (!A) return;
            let e = dq.default.getId();
            return iK.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, p.jsx)(n3.D, {
            onClick: o,
            children: (0, p.jsxs)(Q.E, {
                variant: "text-md/medium",
                className: hV.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(Q.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: hV.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, p.jsxs)("div", {
              className: hV.Os,
              children: [
                  C,
                  (0, p.jsx)(hR.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, p.jsx)("div", {
                          className: hV.h_,
                          children: (0, p.jsx)(sr.l, {
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
                  (0, p.jsx)("div", {
                      className: hV.h_,
                      children: d
                          ? (0, p.jsx)(Q.E, {
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
                      (0, p.jsxs)("div", {
                          children: [
                              (0, p.jsxs)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hV.id,
                                  children: ["Server Descriptor", null != S ? ` (${S})` : ""],
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "code",
                                  className: hV.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "text-lg/medium",
                                  className: hV.id,
                                  children: "Client Eligibility",
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, p.jsx)(Q.E, {
                                  variant: "code",
                                  className: hV.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hV.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(Q.E, { variant: "code", className: hV.AS, children: g }),
                                t.system === hL.l5.LEGACY &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)(Q.E, {
                                                variant: "text-lg/medium",
                                                className: hV.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, p.jsx)(Q.E, {
                                                variant: "code",
                                                className: hV.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, p.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hV.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(Q.E, {
                                    variant: "code",
                                    className: hV.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(Q.E, {
                                    variant: "text-lg/medium",
                                    className: hV.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(Q.E, {
                                    variant: "code",
                                    className: hV.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: hV.id,
                            children: (0, p.jsx)(hb.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(si.c, { className: hV.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: hV.Os, children: C });
}
let hF = (0, E.E2)(h.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, hD.op)(),
                { experiments: n, overridesInfo: i } = (0, hG.hI)(),
                s = T.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = T.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, f.bG)([dq.default], () => {
                    let e = dq.default.getInstallationForTracking();
                    return null == e ? null : (0, hy.v)(e);
                }),
                [a, o] = T.useState(""),
                u = (0, hM.oC)((0, hM.R3)((0, hM.Fm)(s), l), a);
            return (0, p.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, p.jsxs)(Z.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, p.jsxs)(Q.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uN.p5 &&
                                    (0, p.jsx)(hb.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uN.C)(r, () => {
                                                (0, ld.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, p.jsx)(hv.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? hw : hk;
                              return (0, p.jsx)(
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
                        : (0, p.jsx)("div", {
                              className: hV.p$,
                              children: (0, p.jsx)(N.D, {
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
    let e = (0, f.yK)([i3.Ay], () => i3.Ay.getGamesSeen(!1)),
        t = (0, f.bG)([i3.Ay], () => hq(...i3.Ay.getOverrides()));
    T.useEffect(() => {
        if (e6.isPlatformEmbedded) return ((0, hZ.a2)(), hZ.e0);
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
function h$(e) {
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
function hJ(e) {
    let { namedGames: t, totalCount: n } = h$(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function h0() {
    let { namedGames: e } = h$(2),
        [t, n] = T.useMemo(() => e.map((e) => e.id), [e]);
    T.useEffect(() => {
        AO.Ay.fetchApplications([t, n].filter(ir.Vq));
    }, [t, n]);
    let [i, s] = (0, f.yK)([i0.A], () => [t, n].map(i0.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, p.jsx)(i6.A, { game: i, size: i6.M.MEDIUM_LARGE }), shape: hK.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, p.jsx)(i6.A, { game: s, size: i6.M.MEDIUM }), shape: hK.e0.ROUNDED } : null,
          };
}
let h1 = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = hJ(2);
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
            return { type: S.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, f.bG)([i3.Ay], () => i3.Ay.getGamesSeen(!1).some((e) => !(0, hW.n1)(e))) && (0, nE.xl)(),
    }),
    h2 = (0, E.gN)(h.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [h1] });
var h3 = n(533440),
    h5 = n(406535),
    h4 = n(968987);
let h6 = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => U.intl.string(h4.default.A0FVCV),
        useSubtitle: () => U.intl.string(h4.default.vHX6RG),
        useValue: M.hV.useSetting,
        setValue: function (e) {
            (M.hV.updateSetting(e),
                tu.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    h8 = (0, E.zD)(h.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => U.intl.string(h4.default["9l5u6A"]),
        useSubtitle: () => U.intl.string(h4.default.QcmgBF),
        useValue: M.pR.useSetting,
        setValue: function (e) {
            (M.pR.updateSetting(e),
                tu.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    h7 = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => U.intl.string(U.t.WmsPis),
        useSearchTerms: () => [U.intl.string(U.t["8ka8li"])],
        buildLayout: () => [h3._, h6, h8, h2],
    }),
    h9 = (0, E.AK)(h.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.J0SFL2),
        destinationKey: h.X.DATA_AND_PRIVACY_PANEL,
    }),
    xe = (0, E.gN)(h.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [h9] });
var xt = n(365258);
let xn = (0, E.Qx)(h.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => U.intl.string(h4.default["/LHVbt"]),
    useSubtitle: () => U.intl.string(U.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eQ.Qd.ACTIVITY_STATUS_OFF, name: U.intl.string(h4.default.m3oL7Q) },
            { value: eQ.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: U.intl.string(h4.default["5+lnTA"]) },
            { value: eQ.Qd.ACTIVITY_STATUS_ON, name: U.intl.string(h4.default["egr+VZ"]) },
        ];
    },
    useValue: M._Z.useSetting,
    setValue: function (e) {
        let t = M._Z.getSetting();
        M._Z.updateSetting(e);
        let i = (0, xt.g8)(t, e);
        if (null == i) return;
        let s = (0, xt.Xc)(e);
        (0, sx.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, p.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: s });
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
        ? (0, p.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, p.jsx)("div", {
              className: xr.F,
              children: (0, p.jsx)(Q.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function xo(e) {
    let { guild: t, size: n } = e;
    return (0, p.jsx)(xs.Ay, {
        className: xr.z,
        mask: xs.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, p.jsx)(xa, { guild: t, size: n }),
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
    return (0, p.jsxs)(Z.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, p.jsx)("div", { className: xc.FO, children: (0, p.jsx)(xo, { guild: t, size: 48 }) }),
            (0, p.jsx)("div", {
                className: xc.QH,
                children: (0, p.jsx)(t5.d, {
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
                s = (0, f.bG)([gT.Ay], () => gT.Ay.getFlattenedGuildIds()),
                l = (0, f.bG)([sy.A], () => sy.A.getGuilds()),
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
                { id: xu.ACTIVITY_SHARING_ON, label: U.intl.string(h4.default.ZI51JZ), value: xu.ACTIVITY_SHARING_ON },
                {
                    id: xu.ACTIVITY_SHARING_OFF,
                    label: U.intl.string(h4.default["+kxafn"]),
                    value: xu.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === l)?.label ?? "";
    return (0, p.jsxs)("div", {
        className: xc.iE,
        children: [
            t,
            (0, p.jsxs)("div", {
                className: xc.N1,
                children: [
                    (0, p.jsx)(hv.I, {
                        query: i,
                        onChange: s,
                        onClear: function () {
                            (tu.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                s(""));
                        },
                        onFocus: () =>
                            tu.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            tu.default.track(I.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
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
                        (0, p.jsxs)("div", {
                            className: xc.gO,
                            children: [
                                (0, p.jsx)(am.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, p.jsx)(gv.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": U.intl.string(U.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, p.jsx)(tn.rX, {
                                                children: E.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, p.jsx)(
                                                        tn.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: l === i,
                                                            action: () => {
                                                                (tu.default.track(
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
                                        (0, p.jsxs)(n3.D, {
                                            ...e,
                                            innerRef: A,
                                            className: xc.Ku,
                                            children: [
                                                (0, p.jsx)(Q.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, p.jsx)(g2.a, { size: "xs", color: n0.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(hb.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? U.intl.string(U.t["7lxcLO"]) : U.intl.string(U.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, p.jsx)(sc.A, {
                "aria-live": "polite",
                role: "region",
                children: U.intl.format(h4.default.EvzDff, { count: n.length }),
            }),
            (0, p.jsxs)("ul", {
                className: xc.X1,
                id: m,
                "aria-label": U.intl.string(U.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, p.jsx)("div", {
                            className: xc.pb,
                            children: (0, p.jsx)(Q.E, {
                                className: xc.R$,
                                variant: "text-lg/medium",
                                children: U.intl.string(U.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, p.jsx)(
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
        useSearchTerms: () => [U.intl.string(h4.default["/LHVbt"])],
        Component: function () {
            let e = M.tz.useSetting()
                ? null
                : (0, p.jsx)("div", {
                      className: xA.l,
                      children: (0, p.jsx)(iH.w, {
                          type: "warning",
                          message: U.intl.string(h4.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, p.jsx)(xm, { notice: e });
        },
    }),
    xh = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bwqjL9),
        buildLayout: () => [xn, xE, xe],
    }),
    xx = (0, E.zD)(h.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => U.intl.string(h4.default.khuuzv),
        useSubtitle: () => U.intl.string(h4.default["8EWsJ8"]),
        useValue: () => M.e.useSetting(),
        setValue: (e) => M.e.updateSetting(e),
    }),
    xS = (0, E.E2)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: U.intl.format(U.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, p.jsx)(
                            Q.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    xp = (0, E.zD)(h.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => U.intl.string(h4.default.Uz5Ipi),
        useSubtitle: () => U.intl.string(h4.default.CZI2Gb),
        useValue: () => M.UM.useSetting(),
        setValue: (e) => M.UM.updateSetting(e),
    }),
    xT = (0, E.zZ)(h.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => U.intl.string(h4.default["89YBr5"]),
        useSubtitle: () => U.intl.string(U.t.uGDpgH),
        buildLayout: () => [xx, xp, xS],
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
    xW = n(182732),
    xK = n(428685),
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
        { analyticsLocations: a } = (0, ez.Ay)(tV.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
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
                (g = (0, p.jsx)(xB.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: U.intl.string(xK.default.CubeLC),
                    onClick: () => {
                        (0, sx.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, p.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case xY.C.NO_ACCESS:
            ((c = U.intl.string(xK.default.NwkRTZ)),
                (g = (0, p.jsx)(tz.A, {
                    defaultTextOverride: U.intl.string(xK.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tQ.pe.TIER_2,
                })));
            break;
        default:
            (0, ir.xb)(l);
    }
    return (0, p.jsxs)(ez.f5, {
        value: a,
        children: [
            (0, p.jsxs)("div", {
                className: xZ.bV,
                children: [
                    (0, p.jsx)(N.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t.NG1e6l),
                    }),
                    (0, p.jsx)(al.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, p.jsx)(xw.N, {
                theme: I.NJ8.DARK,
                children: (e) =>
                    (0, p.jsx)("div", {
                        className: e,
                        children: (0, p.jsxs)("div", {
                            className: xZ.Nr,
                            children: [
                                (0, p.jsxs)("div", {
                                    className: xZ.Tp,
                                    children: [
                                        (0, p.jsx)("div", {
                                            className: xZ.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, p.jsx)("div", { className: xZ.$h }),
                                        (0, p.jsx)("div", { className: xZ.Rv }),
                                        (0, p.jsx)("div", { className: xZ.Lw }),
                                    ],
                                }),
                                (0, p.jsxs)("div", {
                                    className: xZ.Mn,
                                    children: [
                                        (0, p.jsxs)("div", {
                                            className: xZ.mY,
                                            children: [
                                                (0, p.jsx)("img", {
                                                    className: xZ.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, p.jsx)(Q.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: xZ.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, p.jsx)("div", { className: xZ.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)("div", { className: xZ.yF }),
                                            (0, p.jsxs)("div", {
                                                className: xZ.sQ,
                                                children: [
                                                    (0, p.jsx)(up.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n0.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, p.jsx)(Q.E, {
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
    x$ = n(321078),
    xJ = n(672130),
    x0 = n(379848),
    x1 = n(688901);
function x2(e) {
    let { markAsDismissed: t } = e;
    return (
        T.useEffect(() => t(mL.i.AUTO_DISMISS), [t]),
        (0, p.jsx)("div", { className: x1.Ad, children: (0, p.jsx)(mQ.E, { type: "new", variant: "primary" }) })
    );
}
function x3(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, p.jsxs)("div", {
        className: x1.kL,
        children: [
            i,
            (0, p.jsxs)("div", {
                className: x1.FS,
                children: [
                    (0, p.jsxs)("div", {
                        className: x1.TK,
                        children: [
                            (0, p.jsx)(x0.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, p.jsx)(x2, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, p.jsx)(Q.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, p.jsx)(Q.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, p.jsx)(v.$, { text: U.intl.string(U.t.vD60Pv), onClick: l }),
        ],
    });
}
function x5() {
    let e = eC.A.getArticleURL(I.MVz.PS_CONNECTION);
    return (0, p.jsx)(x3, {
        title: U.intl.string(U.t.v20wwm),
        body: U.intl.format(U.t.lTZBit, { help_article: e }),
        img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eA.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, xR.A)({ platformType: I.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let x4 = "/assets/9df988a227916145.png";
function x6() {
    return (0, p.jsx)(x3, {
        title: U.intl.string(xW.default["9cLtDI"]),
        body: U.intl.format(xW.default["D+kUbg"], { learnMoreLink: eC.A.getArticleURL(I.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, p.jsx)("img", { src: x4, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, xR.A)({ platformType: I.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function x8() {
    let e = eC.A.getArticleURL(I.MVz.XBOX_CONNECTION);
    return (0, p.jsx)(x3, {
        title: U.intl.string(U.t["2okkZV"]),
        body: U.intl.format(U.t.OnERSS, { help_article: e }),
        img: (0, p.jsx)("img", { src: x4, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eA.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, xR.A)({ platformType: I.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var x7 = n(783419),
    x9 = n(534952),
    Se = n(121286),
    St = n(247259);
function Sn(e) {
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
        null != (0, f.bG)([sy.A], () => sy.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, p.jsx)(v.$, {
                size: "sm",
                onClick: function () {
                    xb.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? U.intl.string(U.t.RXvQQu) : U.intl.string(U.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: St.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: St.XX,
                    children: [
                        (0, p.jsx)(gR.Ay, { size: gR.Ay.Sizes.SMALL, guild: n.guild, className: St.$f }),
                        (0, p.jsxs)("div", {
                            className: St.Vn,
                            children: [
                                (0, p.jsx)(Q.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, p.jsx)(nl.Anchor, {
                                    href: xj.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, p.jsx)(Q.E, {
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
                    (0, p.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: St.R,
                        children: s,
                    }),
            ],
        })
    );
}
function Si(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l = ((t = s.id), (n = (0, xk.G)()), (i = (0, xV.L)(tQ.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return s.type === I.fg2.XBOX && l
        ? (0, p.jsx)(x6, {})
        : s.twoWayLink
          ? null
          : s.type === I.fg2.XBOX
            ? (0, p.jsx)(x8, {})
            : s.type === I.fg2.PLAYSTATION
              ? (0, p.jsx)(x5, {})
              : null;
}
function Ss(e) {
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
        [S, f] = T.useState(u.showActivity),
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
        (0, p.jsxs)("div", {
            className: St.FI,
            children: [
                ((t = xj.A.get(u.type)),
                (n = xj.A.get(R)),
                (i = "1" === (u.metadata ?? {})[x7.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === I.fg2.TWITTER &&
                    i &&
                    (s = (0, p.jsx)(sd.m, {
                        text: U.intl.string(U.t.Jebrww),
                        children: (0, p.jsx)(xG.A, {
                            color: n0.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, p.jsx)(xy.U, { size: "xs", color: n0.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, p.jsxs)("div", {
                    className: St.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: n.name,
                            className: St.gj,
                            src: (0, cy.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: St.$p,
                                    children: [
                                        (0, p.jsx)(Q.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: St.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, p.jsx)("div", { className: St.cG, children: s }),
                                    ],
                                }),
                                (0, p.jsx)(Q.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: St.Au,
                                    children:
                                        null != n.migrationData
                                            ? U.intl.format(Se.default.Glhokn, { platformName: n.name })
                                            : n.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(n3.D, {
                            className: St.uH,
                            onClick: function () {
                                let e = xj.A.get(u.type);
                                (0, sx.openModal)((t) =>
                                    (0, p.jsx)(sh.a, {
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
                                            (0, p.jsx)(s8.A, {
                                                children: U.intl.format(U.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": U.intl.string(U.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(uU.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, p.jsx)(Si, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, xL.An)(t[x7.pK.CREATED_AT], c);
                    switch (e.type) {
                        case I.fg2.REDDIT:
                            n = (0, xP.xE)(t, St.Nz);
                            break;
                        case I.fg2.STEAM:
                            n = (0, xP.dy)(t, St.Nz);
                            break;
                        case I.fg2.BLUESKY:
                        case I.fg2.TWITTER:
                        case I.fg2.MASTODON:
                            n = (0, xP.ED)(t, St.Nz);
                            break;
                        case I.fg2.EBAY:
                            n = (0, xP.ub)(t, St.Nz);
                            break;
                        case I.fg2.PAYPAL:
                            n = (0, xP.gZ)(t, St.Nz);
                            break;
                        case I.fg2.TIKTOK:
                            n = (0, xP.HU)(t, St.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, p.jsx)(
                                Q.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: St.M4,
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
                                (0, p.jsx)(
                                    "div",
                                    {
                                        className: St.Z3,
                                        children: (0, p.jsx)(mQ.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, p.jsx)(
                                    Q.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: St.vt,
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
                            (0, p.jsx)(
                                "div",
                                {
                                    className: St.jy,
                                    children: (0, p.jsx)(v.$, {
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
                        (0, p.jsx)("div", { className: St.tJ, children: n })
                    );
                })(u),
                (I.txh.has(u.type) &&
                    (l = (0, p.jsx)(t5.d, {
                        label: U.intl.string(U.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), xb.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                I.ewM.has(u.type) &&
                    (r = (0, p.jsx)(t5.d, {
                        label: U.intl.format(U.t["6u6J0q"], { platform: D.name }),
                        checked: S,
                        onChange: function (e) {
                            (f(e), xb.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                xj.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(t5.d, {
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
                (0, p.jsxs)("div", {
                    className: St.HZ,
                    children: [
                        (0, p.jsx)(t5.d, {
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
                    if (u.revoked || u.integrations.length > 0) return (0, p.jsx)(si.c, {});
                })(),
                u.revoked
                    ? (0, p.jsx)(iH.w, {
                          type: "info",
                          message: U.intl.format(U.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, xR.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(sa.D, {
                            label: U.intl.string(U.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(Sn, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, p.jsx)(xU.A, { partner: u.type }),
            ],
        })
    );
}
function Sl(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, p.jsxs)("div", {
              className: St.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = G.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, p.jsxs)("div", {
                          className: St.Il,
                          children: [
                              (0, p.jsx)("img", { alt: n.name, className: iu()(St.gj, St.sN), src: i }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: St.$p,
                                          children: (0, p.jsx)(Q.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: St.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(Q.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: St.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(n3.D, {
                                  className: St.uH,
                                  onClick: () =>
                                      (0, xN.d1)(n, t.scopes, () => {
                                          x_.A.delete(t.id);
                                      }),
                                  "aria-label": U.intl.string(U.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(uU.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, p.jsx)("div", {
                      className: St.HZ,
                      children: (0, p.jsx)(t5.d, {
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
function Sr() {
    let e = (0, xO.gn)(),
        t = (0, i1.A)((0, x9.getMigratedApplicationIdentityConnectionsScreenApplications)());
    return (0, p.jsxs)("div", {
        className: St.lA,
        children: [
            t.map((e) => null != e && (0, p.jsx)(xJ.A, { application: e, innerClassName: St.U$ }, e.id)),
            e.map((e) =>
                (0, p.jsx)(
                    xv.A,
                    { type: e.type, innerClassName: St.U$, location: tV.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function Sa(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = T.useMemo(() => i.filter((e) => xj.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, p.jsx)(oT.y, { type: oT.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, p.jsx)(EY.pp, {
                    theme: r,
                    className: St.p$,
                    children: (0, p.jsx)(EY.SG, {
                        note: U.intl.string(U.t.WenGZ2),
                        children: U.intl.string(U.t.aoLS84),
                    }),
                })
              : (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(N.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: U.intl.format(U.t.AioIGb, { count: s.length + o.length }),
                        }),
                        s.map((e, t) =>
                            (0, p.jsx)(
                                Sl,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, p.jsx)(
                                Ss,
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
        (0, p.jsx)("div", { className: St.V, children: t })
    );
}
let So = (0, E.E2)(h.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, p.jsx)(sa.D, { label: U.intl.string(U.t["t+aGse"]), children: (0, p.jsx)(Sr, {}) });
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
    Su = (0, E.E2)(h.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, f.bG)([to.A], () => to.A.hidePersonalInformation),
                t = (0, f.bG)([xH.A], () => xH.A.isFetching()),
                n = (0, f.bG)([xH.A], () => xH.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, f.cf)([xM.default], () => ({
                    authorizedAppsFetchState: xM.default.getFetchState(),
                    authorizedApps: xM.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, x$.A)(lh.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, d6.Ay)(),
                o = (0, f.bG)([o6.default], () => o6.default.locale);
            return (T.useEffect(() => {
                i === xM.FetchState.NOT_FETCHED && x_.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(xq, {}),
                          (0, p.jsx)(Sa, {
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
    Sd = (0, E.zZ)(h.X.CONNECTIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["3fe7U5"]),
        useSubtitle: () => U.intl.string(U.t.U22vw6),
        buildLayout: () => [So, Su],
    }),
    Sc = (0, E.zZ)(h.X.AUTHORIZED_APPS_CATEGORY, {
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
    Sg = (0, E.t_)(h.X.CONNECTED_APPS_PANEL, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        useObscuredNotice: oc.L,
        buildLayout: () => [Sd, Sc],
    }),
    Sm = (0, E.i4)(h.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.lrVuZO),
        icon: EX.LinkIcon,
        buildLayout: () => [Sg],
    });
var SA = n(625657),
    SE = n(592598),
    Sh = n(773371),
    Sx = n(532294),
    SS = n(672396);
let Sp = Sf(null);
function ST() {
    var e;
    let t = Sf(Sp);
    ((e = Sp),
        W().isEqual(W().omit(t, "old_enabled"), W().omit(e, "old_enabled")) ||
            (tu.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (Sp = t)));
}
function Sf(e) {
    let t = Sx.default.getNotificationPositionMode(),
        n = t !== I.G6Q.DISABLED,
        i = sl.Ay.getOverlayKeybind(),
        s = sl.Ay.getOverlayChatKeybind();
    return {
        enabled: Sh.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: SE.A.isNotificationDisabled(SS.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, sE.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, sE.dI)(s.shortcut) : null,
        text_opacity_slider: Sx.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? Sh.default.enabled,
    };
}
var SI = n(237984),
    S_ = n(63035);
function SN(e) {
    (e.preventDefault(), e.stopPropagation());
}
function SC(e) {
    let { children: t } = e;
    return (0, p.jsx)("div", { onClick: SN, children: t });
}
function Sy(e) {
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
    return (0, p.jsxs)("div", {
        className: iu()(S_.HS, d),
        children: [
            (0, p.jsxs)(hj.s, {
                "aria-label": u,
                onClick: o,
                focusProps: { offset: 4 },
                children: [
                    null != t && (0, p.jsx)("div", { className: S_.x_, children: t }),
                    (0, p.jsxs)("div", {
                        className: S_.rN,
                        children: [
                            null != n && (0, p.jsx)("div", { className: S_.$t, children: n }),
                            (0, p.jsxs)("div", {
                                className: S_.c8,
                                children: [
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: S_.SZ,
                                        children: i,
                                    }),
                                    null != s &&
                                        (0, p.jsx)(Q.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, p.jsx)(Q.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, p.jsx)("div", { className: S_.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: S_.Om, children: a }),
        ],
    });
}
let Sb = (0, E.E2)(h.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, p.jsx)(Sy, {
            title: U.intl.string(U.t["z4/l+V"]),
            description: U.intl.string(U.t["3aZq/0"]),
            action: (0, p.jsx)(v.$, {
                variant: "primary",
                text: U.intl.string(U.t.s2nVhG),
                onClick: () => {
                    (0, SI.b)(tV.A.USER_SETTINGS, I.BRT.APP);
                },
            }),
            "aria-label": U.intl.string(U.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [U.intl.string(U.t["z4/l+V"])],
});
var Sv = n(780907),
    Sj = n(684013),
    SO = n(56562),
    SL = n(311043),
    SR = n(454908),
    SD = n(41984),
    SP = n(918825),
    SG = n(296027),
    SM = n(562519);
let SU = 5 * n(927813).A.Millis.DAY,
    SV = new SM.A("overlay_survey_timestamps");
function Sk(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(SV.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < SU) ||
            Array.from(SV.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sx.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), SV.add(i), (n) => (0, p.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function Sw() {
    (0, i7.sL)("overlay-settings");
}
function SF(e) {
    let { className: t, game: n } = e;
    return (0, i7.NP)() && null != n && n.elevated
        ? (0, p.jsx)("div", {
              className: t,
              children: (0, p.jsx)(iH.w, {
                  type: "warning",
                  message: U.intl.format(U.t["LJzl+0"], { helpCenterLink: eC.A.getArticleURL(I.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: U.intl.string(U.t["1iI46O"]), onClick: Sw },
              }),
          })
        : null;
}
var SB = n(760751),
    Sz = n(9302),
    SY = n(656513);
let SX = new Set([
    SD.AR.INITIALIZING,
    SD.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    SD.AR.WAITING_FOR_MODULE_TRACKING,
    SD.AR.WAITING_FOR_OVERLAY_OPEN,
    SD.AR.WAITING_FOR_POPOUT_OPEN,
    SD.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    SD.AR.WAITING_FOR_REACT_INITIALIZATION,
    SD.AR.WAITING_FOR_PID_FOCUS,
    SD.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function SH(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = T.useState(!1);
    return (0, p.jsx)(SY.N, {
        className: S_.uR,
        collapsibleContent: (0, p.jsx)("div", { className: S_.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, p.jsx)(Sy, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: iu()(S_.AC, n),
                action: (0, p.jsxs)("div", {
                    className: S_.rc,
                    children: [
                        s.action,
                        l
                            ? (0, p.jsx)(g2.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, p.jsx)(n4._, {
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
let SW = (0, E.E2)(h.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i4();
        (0, SR.I)(e?.id);
        let n = e?.pid,
            i = (0, f.bG)(
                [SG.default],
                () => (null == e || null == n ? null : SG.default.getTrackedGameByPid(n)),
                [e, n],
                iJ(),
            ),
            { data: s } = (0, SR.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, f.cf)(
                [SB.A, td.A, SL.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i3.hw)(e, !1, [SB.A, td.A, SL.A]),
                [e, i],
            ),
            a = (0, f.bG)(
                [i3.Ay, SB.A, td.A, SL.A],
                () => (null == e ? null : (0, i3.xU)(e, i3.Ay, SB.A, td.A, SL.A)),
                [e],
                iJ(),
            ),
            [o, u] = T.useState(r),
            [d, c] = T.useState(l),
            [g, m] = T.useState(!1);
        T.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let A = !(0, Sz.supportsLegacy)(),
            E = !(0, Sz.supportsOutOfProcess)(),
            { legacyEnabled: h, oopEnabled: x } = (0, f.cf)([SG.default], () => SG.default.getGlobalEnabledStatus());
        function S(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case SP.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), Sv.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case SP.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), Sv.Ay.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case SP.OverlayToggledClientSettingType.LEGACY:
                    (Sj.A.setEnabled(t, x), (0, SP.Q)(t, SP.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case SP.OverlayToggledClientSettingType.OOP:
                    (Sj.A.setEnabled(h, t), (0, SP.Q)(t, SP.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                Sk(
                    i ? SP.OverlayToggledClientSettingType.LEGACY_GAME : SP.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = A && E,
            _ = !h && !x,
            N = !o && !h && d && !A,
            C = !d && !x && o && !E,
            y = i?.overlayMethod === SD.Ue.Disabled,
            b = i?.state === SD.AR.OVERLAY_RENDERING && !y,
            v = i?.state != null && SX.has(i.state) && !y,
            j = i?.overlayMethod === SD.Ue.OutOfProcess,
            O = i?.overlayMethod === SD.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === SD.Ue.Hook,
            R = i?.state === SD.AR.OVERLAY_CRASHED || i?.state === SD.AR.OVERLAY_CRASHED_DISABLED,
            D = !o && !d,
            [P, G] = (function () {
                switch (!0) {
                    case b && j:
                        return [
                            U.intl.format(U.t.hFVBIg, {
                                overlayMethod: U.intl.string(U.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
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
                                    return (0, p.jsx)(
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
                                    return (0, p.jsx)(
                                        Q.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== SO.aI.BORDERLESS_FULLSCREEN:
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
                        let e = i?.fullscreenType === SO.aI.FULLSCREEN ? U.intl.string(U.t.mJmbeC) : null;
                        return [U.intl.string(U.t.VPW4XY), e];
                    }
                    default:
                        return [U.intl.string(U.t.ONovP5), null];
                }
            })();
        (0, eI.Ay)(() => {
            Sv.Ay.getDetectableGames();
        });
        let [M, V] = T.useMemo(
            () =>
                v
                    ? ["text-muted", n0.A.colors.TEXT_MUTED.css]
                    : b && O
                      ? ["text-feedback-warning", n0.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : b && j
                        ? ["text-feedback-positive", n0.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : b && L
                          ? ["text-strong", n0.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", n0.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, b, O, j, L],
        );
        return null == e
            ? null
            : (0, p.jsxs)(SH, {
                  onExpand: m,
                  className: g ? S_.tx : void 0,
                  title: (0, p.jsxs)(p.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, p.jsx)(sd.m, {
                                    text: U.intl.string(U.t["4PJP5p"]),
                                    children: (0, p.jsx)(xG.A, {
                                        size: 16,
                                        color: n0.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, p.jsx)(xy.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: n0.A.colors.WHITE.css,
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
                          b || v
                              ? (0, p.jsx)(du.k, { size: "xxs", color: V })
                              : (0, p.jsx)("div", { className: S_.W4 }),
                          (0, p.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: U.intl.string(U.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, p.jsx)(i6.A, { game: t, pid: e?.pid, size: i6.M.MEDIUM }),
                  "aria-label": U.intl.string(U.t["87O5GC"]),
                  action: (0, p.jsx)(SC, {
                      children: (0, p.jsx)(t5.d, {
                          checked: (o && x) || (d && h),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      s = !1;
                                  switch (n) {
                                      case "game":
                                          (Sv.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (Sj.A.setEnabled(t, t), (i = !t && h), (s = !t && x));
                                          break;
                                      case "both":
                                          (Sj.A.setEnabled(t, t),
                                              Sv.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (s = (!t && x) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? SP.OverlayToggledClientSettingType.LEGACY_GAME
                                                : SP.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? SP.OverlayToggledClientSettingType.OOP_GAME
                                                : SP.OverlayToggledClientSettingType.OOP),
                                      null != l && Sk(l, e.id ?? null));
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
                  warning: (0, p.jsx)(SF, { className: S_.Hh, game: e }),
                  children: [
                      (0, p.jsx)(Sy, {
                          title: U.intl.string(U.t["7BlVIs"]),
                          description: U.intl.string(U.t.ndgADE),
                          hint: x ? void 0 : U.intl.string(U.t.cAFVsL),
                          "aria-label": U.intl.string(U.t["7BlVIs"]),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(t5.d, {
                                      checked: o && x,
                                      disabled: E,
                                      onChange: (e) => {
                                          e && !x
                                              ? S(e, SP.OverlayToggledClientSettingType.OOP)
                                              : S(e, SP.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: S_.Kz }),
                              ],
                          }),
                      }),
                      (0, p.jsx)(Sy, {
                          title: U.intl.string(U.t.BfFpW1),
                          description: U.intl.string(U.t.OzInYk),
                          hint: h ? void 0 : U.intl.string(U.t["3sYHXm"]),
                          "aria-label": U.intl.string(U.t.BfFpW1),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(t5.d, {
                                      checked: d && h,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !h
                                              ? S(e, SP.OverlayToggledClientSettingType.LEGACY)
                                              : S(e, SP.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: S_.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = i4();
        return null != e;
    },
    useSearchTerms: () => [U.intl.string(U.t["9cb1Uz"])],
});
var SK = n(206885);
function SZ(e) {
    let { game: t, gameApplication: n } = e,
        i = T.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, f.bG)([i0.A], () => (null != n ? n : i0.A.getApplication(t?.id)), [n, t]);
    return (0, p.jsx)(i6.A, { game: s, pid: i, size: i6.M.SMALL });
}
function Sq(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, SR.I)(t?.id);
    let o = (0, f.cf)([i3.Ay, SB.A, td.A, SL.A], () => (0, i3.xU)(t, i3.Ay, SB.A, td.A, SL.A)),
        u = (0, f.cf)([SB.A, td.A, SL.A], () => (0, i3.hw)(t, !1, [SB.A, td.A, SL.A]), [t]),
        d = s(u),
        [c, g] = T.useState(d);
    return (
        T.useEffect(() => {
            g(d);
        }, [d]),
        (0, p.jsx)(Sy, {
            title: t.name,
            icon: (0, p.jsx)(SZ, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(t5.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && Sk(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, p.jsx)("div", { className: S_.Kz }),
                ],
            }),
        })
    );
}
let SQ = (0, E.E2)(h.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, f.cf)([SG.default], () =>
                    SG.default.getGlobalEnabledStatus(),
                ),
                s = (0, f.yK)([i3.Ay], () => i3.Ay.getGamesSeen(!0)).filter((e) => !(0, hW.n1)(e)),
                l = (0, i1.A)(s.map((e) => e.id)),
                r = !(0, Sz.supportsLegacy)();
            function a(e) {
                Sj.A.setEnabled(e, i);
                let t = i3.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SP.Q)(e, SP.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && Sk(SP.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                Sv.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () =>
                    (0, Sz.supportsLegacy)()
                        ? r
                            ? U.intl.string(U.t.r9jEVw)
                            : U.intl.string(U.t.OzInYk)
                        : U.intl.string(U.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, p.jsx)(Sy, {
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      className: S_.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(t5.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              SK.O && (0, p.jsx)("div", { className: S_.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(SH, {
                      onExpand: t,
                      className: e ? S_.tx : void 0,
                      title: U.intl.string(U.t.BfFpW1),
                      description: u,
                      "aria-label": U.intl.string(U.t.BfFpW1),
                      action: (0, p.jsx)(SC, {
                          children: (0, p.jsx)(t5.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: S_.SC,
                              children: (0, p.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(C.Ip, {
                              className: S_.XG,
                              children: s.map((e, t) =>
                                  (0, p.jsx)(
                                      Sq,
                                      {
                                          rawGame: e,
                                          clientSettingType: SP.OverlayToggledClientSettingType.LEGACY_GAME,
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
    S$ = (0, E.E2)(h.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = T.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, f.cf)([SG.default], () =>
                    SG.default.getGlobalEnabledStatus(),
                ),
                s = !(0, Sz.supportsOutOfProcess)(),
                l = (0, f.yK)([i3.Ay], () => i3.Ay.getGamesSeen(!0)).filter((e) => !(0, hW.n1)(e)),
                r = (0, i1.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                Sj.A.setEnabled(i, e);
                let s = i3.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SP.Q)(e, SP.OverlayToggledClientSettingType.OOP, s),
                    t && Sk(SP.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                Sv.Ay.toggleOverlay(t, e, i);
            }
            let u = T.useMemo(
                () => (SK.O ? (s ? U.intl.string(U.t.C7bLTQ) : U.intl.string(U.t.ndgADE)) : U.intl.string(U.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, p.jsx)(Sy, {
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      className: S_.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(t5.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              SK.O && (0, p.jsx)("div", { className: S_.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(SH, {
                      onExpand: t,
                      className: e ? S_.tx : void 0,
                      title: U.intl.string(U.t["7BlVIs"]),
                      description: u,
                      "aria-label": U.intl.string(U.t["7BlVIs"]),
                      action: (0, p.jsx)(SC, {
                          children: (0, p.jsx)(t5.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: S_.SC,
                              children: (0, p.jsx)(Q.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: U.intl.string(U.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(C.Ip, {
                              className: S_.XG,
                              children: l.map((e, t) =>
                                  (0, p.jsx)(
                                      Sq,
                                      {
                                          rawGame: e,
                                          clientSettingType: SP.OverlayToggledClientSettingType.OOP_GAME,
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
    SJ = (0, E.zZ)(h.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [SW, S$, SQ, Sb],
    }),
    S0 = (0, E.zD)(h.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, f.bG)([Sx.default], () => !Sx.default.disableClickableRegions),
        setValue: (e) => {
            Sj.A.setDisableClickableRegions(!e);
        },
        useTitle: () => U.intl.string(U.t["+eFXxq"]),
        useSubtitle: () => U.intl.string(U.t.kivMAp),
    }),
    S1 = (0, E.E2)(h.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sl.Ay], () => sl.Ay.getOverlayKeybind()),
                t = !(0, Sz.supportsLegacy)(),
                n = !(0, Sz.supportsOutOfProcess)(),
                [i, s] = (0, f.yK)([i3.Ay], () => [i3.Ay.canShowAdminWarning, i3.Ay.getVisibleGame()], []),
                l = (0, i7.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sl.DV)(e?.shortcut ?? []);
            return (0, p.jsx)("div", {
                className: S_.hc,
                children: (0, p.jsxs)("div", {
                    className: S_.eH,
                    children: [
                        (0, p.jsxs)("div", {
                            className: S_.Bu,
                            children: [
                                (0, p.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: U.intl.string(U.t.VsAZcC),
                                }),
                                r &&
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: S_.y7,
                                        children: U.intl.string(U.t.NsowVa),
                                    }),
                                a &&
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: S_.y7,
                                        children: U.intl.string(U.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, p.jsx)("div", {
                            className: S_.IH,
                            children: (0, p.jsx)(sA.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (tA()(null != e, "Keybind should never be undefined"),
                                        iW.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.VsAZcC)],
    });
var S2 = n(515183),
    S3 = n(682763);
let S5 = (0, E.zD)(h.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i4();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i4();
            return null != e && (0, S2.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i4(),
                n = t?.id,
                i = (0, f.bG)([SE.A], () => SE.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, S2.qJ)(e.pid);
            return i || s;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                s,
                { runningGameApplication: l } =
                    ((t = i2.A.getStreamerActiveStreamMetadata()),
                    (s = i5(
                        t,
                        (i =
                            null != (n = i3.Ay.getVisibleGame())
                                ? i3.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: i0.A.getApplication(s) ?? void 0 });
            null != l && (0, S3.x8)(l.id, e);
        },
        useTitle: () => U.intl.string(U.t.wgVQND),
        useSubtitle: () => U.intl.string(U.t["5SsyF5"]),
    }),
    S4 = (0, E.zZ)(h.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [S1, S5, S0] });
var S6 = n(93465),
    S8 = n(222407);
let S7 = [
    {
        title: U.t.eVE4LX,
        description: U.t["72WNqk"],
        disabledSetting: S6.M.TEXT_CHAT,
        key: h.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: U.t.oifnSh,
        description: U.t.bgU5r0,
        disabledSetting: S6.M.WELCOME_GENERAL,
        key: h.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: U.t.hqsZJW,
        description: U.t.kHjdqc,
        disabledSetting: S6.M.GO_LIVE_NUDGE,
        key: h.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: U.t.sop3rn,
        description: U.t.pjgffc,
        disabledSetting: S6.M.GAME_ACTIVITY,
        key: h.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: U.t["2QVhbb"],
        description: U.t.wQ4ilB,
        disabledSetting: S6.M.NOW_PLAYING,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: U.t.giM9fA,
        description: U.t.EhAfWj,
        disabledSetting: S6.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: h.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, np.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, f.bG)([SE.A], () => SE.A.isNotificationDisabledBySetting(S6.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function S9(e) {
    return (0, E.zD)(e.key, {
        useTitle: () => U.intl.string(e.title),
        useSubtitle: () => U.intl.string(e.description),
        useValue: () => !(0, f.bG)([SE.A], () => SE.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, S8.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let pe = (0, E.FW)(h.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => S7.map(S9),
    }),
    pt = (0, E.zZ)(h.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.xOE5bA),
        buildLayout: () => [pe],
    }),
    pn = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => U.intl.string(U.t.dnvZSg),
        useValue: () => (0, f.bG)([Sx.default], () => Sx.default.getAvatarSizeMode()),
        setValue: (e) => {
            Sj.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: U.intl.string(U.t.YcOxtr), value: I.OSZ.LARGE },
            { id: "small", label: U.intl.string(U.t.BKIKqx), value: I.OSZ.SMALL },
        ],
    }),
    pi = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => U.intl.string(U.t.J0dpcB),
        useValue: () => (0, f.bG)([Sx.default], () => Sx.default.getDisplayNameMode()),
        setValue: (e) => {
            Sj.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.pwA.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: U.intl.string(U.t.ekjlPL), value: I.pwA.NEVER },
        ],
    }),
    ps = (0, E.Hn)(h.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => U.intl.string(U.t.swsWWC),
        useValue: () => (0, f.bG)([Sx.default], () => Sx.default.getDisplayUserMode()),
        setValue: (e) => {
            Sj.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: U.intl.string(U.t.nBmDrT), value: I.f5z.ALWAYS },
            { id: "speaking", label: U.intl.string(U.t["2OvIZY"]), value: I.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var pl = n(391973),
    pr = n(233741),
    pa = n(897720),
    po = n(32584);
function pu() {
    let e = pr.A.getWidgetByType(I.uss.VOICE_V3);
    if (null == e) return null;
    let t = po.A.getWidget(e.id);
    return null != t && (0, pa.ZO)(t) ? t : null;
}
n(392164);
let pd = (0, E.sN)(h.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => U.intl.string(U.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? U.intl.string(U.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = pu();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? U.intl.string(U.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = pu();
        null != t &&
            (e < 1
                ? (0, pl.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, pl.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var pc = n(450740),
    pg = n(968898),
    pm = n(288737);
function pA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new pm.A({
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
        user: new cw.A({ id: s, username: e }),
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
let pE = (0, E.E2)(h.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, f.cf)([Sx.default], () => ({
                    avatarSizeMode: Sx.default.getAvatarSizeMode(),
                    displayNameMode: Sx.default.getDisplayNameMode(),
                    displayUserMode: Sx.default.getDisplayUserMode(),
                })),
                [l] = T.useState(() => [
                    pA(U.intl.string(U.t.C0ZDvo), !0, !1),
                    pA(U.intl.string(U.t.iOtj8E), !1, !1, !0),
                    pA(U.intl.string(U.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, f.bG)([pr.A, po.A], () => {
                    let e = pr.A.getWidgetByType(I.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = po.A.getWidget(e.id);
                    return null != t && (0, pa.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = pA(t.username)).user = t), e) : null, ...l].filter(ir.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, p.jsx)(xw.N, {
                    theme: I.NJ8.ONYX,
                    children: (e) =>
                        (0, p.jsxs)("div", {
                            className: iu()(S_.Y5, e),
                            children: [
                                (0, p.jsx)("div", {
                                    className: S_.kJ,
                                    children: (0, p.jsx)(pc.DH, {
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
                                (0, p.jsxs)("div", {
                                    className: S_.R$,
                                    children: [
                                        (0, p.jsx)(pg.Pl, { children: U.intl.string(U.t.KNJ6Vq) }),
                                        (0, p.jsx)(pg.CS, {}),
                                        (0, p.jsx)(pg.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, p.jsx)("div", { className: S_.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    ph = (0, E.zZ)(h.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => U.intl.string(U.t.r1TZfh),
        buildLayout: () => [pE, pn, pi, ps, pd],
    });
var px = n(793480),
    pS = n(667419),
    pp = n(776162),
    pT = n(114994),
    pf = n(371169),
    pI = n(25448);
let p_ = {
    [I.uss.VOICE_V3]: h.X.OVERLAY_WIDGETS_VOICE,
    [I.uss.QUICK_ACTIONS]: h.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
    [I.uss.NOTIFICATIONS]: h.X.OVERLAY_WIDGETS_NOTIFICATIONS,
    [I.uss.TEXT_CHAT_V3]: h.X.OVERLAY_WIDGETS_CHAT,
    [I.uss.FRIENDS]: h.X.OVERLAY_WIDGETS_FRIENDS,
    [I.uss.ACTIVITY]: h.X.OVERLAY_WIDGETS_ACTIVITY,
    [I.uss.VIDEO]: h.X.OVERLAY_WIDGETS_VIDEO,
    [I.uss.GO_LIVE]: h.X.OVERLAY_WIDGETS_STREAMS,
};
function pN(e) {
    let t = nT.A[e],
        n = p_[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: s, predicate: l } = t;
    return (0, E.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => s(),
        usePredicate: () => ((0, np.M8)("OverlayWidgetsCategory"), l?.() ?? !0),
        useValue: () => (0, f.bG)([po.A], () => (0, pS.$e)(e, po.A), []),
        setValue: (t) => {
            ((0, pS.j$)(), (0, pS.JA)(e, !t));
        },
    });
}
let pC = (0, E.FW)(h.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => U.intl.string(pI.default["Qk/rJB"]),
        useSubtitle: () => U.intl.string(pI.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => pp.t3.flatMap(pN),
    }),
    py = (0, E.E2)(h.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, f.bG)([pT.A], () => pT.A.getProjects());
            return (T.useEffect(() => {
                (0, pf.hF)();
            }, []),
            0 === e.length)
                ? null
                : (0, p.jsxs)(Z.B, {
                      gap: 8,
                      children: [
                          (0, p.jsx)(N.D, {
                              variant: "heading-sm/semibold",
                              color: "text-muted",
                              children: U.intl.string(pI.default["pbu+Yx"]),
                          }),
                          e.map((e) => (0, p.jsx)(pp.i2, { project: e }, e.id)),
                      ],
                  });
        },
        usePredicate: () => (0, px.TW)("overlay_settings_conjure_apps"),
        useSearchTerms: () => [U.intl.string(pI.default["pbu+Yx"])],
    }),
    pb = (0, E.Tf)(h.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => U.intl.string(U.t["hW+EMu"]),
        useLabel: () => U.intl.string(U.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: pS.eL,
    }),
    pv = (0, E.zZ)(h.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => U.intl.string(pI.default["Qk/rJB"]),
        usePredicate: nf.b_,
        buildLayout: () => [pC, py, pb],
    });
var pj = n(54761);
function pO() {
    let [e, t] = (0, mI.kn)([eA.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, K.Ay)(() => () => {
        t(mL.i.AUTO_DISMISS);
    }),
    e !== eA.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsxs)("div", {
                      className: pj.xC,
                      children: [
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: U.intl.string(U.t.mdXZh1),
                                  className: pj.tl,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsxs)("div", {
                                  className: pj.vJ,
                                  children: [
                                      (0, p.jsx)(N.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: U.intl.string(U.t.jzjJQg),
                                      }),
                                      (0, p.jsx)(Q.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: U.intl.string(U.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, p.jsx)("div", {
                              children: (0, p.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: U.intl.string(U.t.mdXZh1),
                                  className: pj.lh,
                              }),
                          }),
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pj.VV,
                              children: (0, p.jsx)(v.$, {
                                  variant: "primary",
                                  text: U.intl.string(U.t.Q26diF),
                                  onClick: () => void t(mL.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(si.c, { className: pj.yF }),
              ],
          });
}
function pL() {
    let e = (0, f.bG)([to.A], () => to.A.enabled),
        t = (0, np.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsx)(iH.w, {
                      type: "warning",
                      message: U.intl.format(U.t.fuEX5B, {
                          onClick: function () {
                              return (0, nr.openUserSettings)(h.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, p.jsx)(si.c, { className: pj.yF }),
              ],
          })
        : null;
}
let pR = (0, E.t_)(h.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                ST(),
                sl.Ay.addChangeListener(ST),
                SE.A.addChangeListener(ST),
                Sx.default.addChangeListener(ST),
                Sh.default.addChangeListener(ST),
                e6.isPlatformEmbedded && (0, hZ.a2)(),
                () => {
                    (sl.Ay.removeChangeListener(ST),
                        SE.A.removeChangeListener(ST),
                        Sx.default.removeChangeListener(ST),
                        Sh.default.removeChangeListener(ST),
                        e6.isPlatformEmbedded && (0, hZ.e0)());
                }
            );
        },
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        decoration: {
            type: S.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(pO, {}), (0, p.jsx)(pL, {})] });
            },
        },
        buildLayout: () => [SJ, S4, pv, ph, pt],
    }),
    pD = (0, E.i4)(h.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["9cb1Uz"]),
        icon: SA.l,
        usePredicate: nf.b_,
        buildLayout: () => [pR],
    });
var pP = n(687966);
let pG = (0, E.AK)(h.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.OYYY6q),
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    pM = (0, E.gN)(h.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [pG] });
var pU = n(227309),
    pV = n(29160),
    pk = n(552366),
    pw = n(938442);
function pF(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, SR.I)(t.id);
    let o = (0, f.cf)([i3.Ay, SB.A, td.A, SL.A], () => (0, i3.xU)(t, i3.Ay, SB.A, td.A, SL.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, f.cf)([i3.Ay], () => ({
            canToggleDetection: null == a || i3.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: i3.Ay.isDetectionEnabled(o),
        })),
        c = (0, f.bG)([i3.Ay], () => i3.Ay.getVisibleGame()),
        [g, m] = T.useState(!1),
        A = T.useRef(null),
        E = null != c && (0, i3.Es)(o) === (0, i3.Es)(c),
        h = !s && !g,
        x = !i && !E,
        S = h || x,
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
        y = iu()(pw.tR, {
            [pk.LO]: !i,
            [pk.Rw]: i,
            [pk.FB]: null != o && i,
            [pk.xL]: r,
            [pk.fG]: null != l && l.length > 0,
        });
    function b() {
        (Sv.Ay.deleteEntry(o),
            l?.forEach((e) => {
                Sv.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? SB.A.getDetectableGame(o.id) : null;
        (tu.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, hW.n1)(o) ? o.gameName : o.name,
        }),
            (0, sx.openModalLazy)(async () => {
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
                className: y,
                children: [
                    (0, p.jsxs)("div", {
                        className: iu()(pk.$K, pw.Vd),
                        children: [
                            null != o.processGame || (o.verified && !s)
                                ? (0, p.jsxs)("div", {
                                      className: pk.HS,
                                      children: [
                                          (0, p.jsx)("div", { className: pk.mO, children: _ }),
                                          (0, p.jsx)(sd.m, {
                                              text: U.intl.string(U.t["4PJP5p"]),
                                              children: (0, p.jsx)(xG.A, {
                                                  className: pk.qf,
                                                  size: 18,
                                                  color: n0.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, p.jsx)(xy.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n0.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, p.jsx)("input", {
                                      className: iu()(pk.mO, pk.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && Sv.Ay.editName(o, N);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === sU.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
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
                                    (0, p.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: pk.GN,
                                        children: (0, p.jsx)(pV.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, e6.isWindows)() && (t = t.toUpperCase()),
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
                        (0, p.jsx)(am.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, p.jsx)(gv.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": U.intl.string(U.t["UKOtz+"]),
                                    children: (0, p.jsxs)(tn.rX, {
                                        children: [
                                            h &&
                                                (0, p.jsx)(tn.Dr, {
                                                    id: "report",
                                                    label: U.intl.string(U.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            x &&
                                                (0, p.jsx)(tn.Dr, {
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
                                (0, p.jsx)("div", {
                                    className: iu()(pk._Q, { [pk.g9]: t.isShown }),
                                    children: (0, p.jsx)(sd.m, {
                                        text: U.intl.string(U.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, p.jsx)(so.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: gC.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": U.intl.string(U.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, p.jsx)(sd.m, {
                        text: U.intl.string(U.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, p.jsx)(sg.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != l && l.length > 0 && d
                                    ? (0, sx.openModalLazy)(async () => {
                                          let { Modal: e } = await Promise.all([n.e("304823"), n.e("223976")]).then(
                                              n.bind(n, 732955),
                                          );
                                          return (t) =>
                                              (0, p.jsx)(e, {
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
                                                              (Sv.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : Sv.Ay.toggleDetection(o);
                            },
                            "aria-label": U.intl.string(U.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !i &&
                (0, p.jsx)("div", {
                    className: pk.AQ,
                    children: l.map((e, t) =>
                        (0, p.jsxs)(
                            T.Fragment,
                            {
                                children: [
                                    (0, p.jsx)(pF, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, p.jsx)("div", { className: pk.PQ }),
                                ],
                            },
                            (0, i3.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pB() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = hQ();
    return 0 === e.length
        ? null
        : (0, p.jsx)(Z.B, {
              padding: { bottom: 32 },
              children: (0, p.jsx)(n2.n, {
                  children: (0, p.jsx)("div", {
                      children: e.map((e) =>
                          (0, p.jsx)(
                              pF,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === pU.a7 ? t : void 0 },
                              (0, i3.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let pz = (0, E.E2)(h.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, p.jsx)(pB, {}),
});
var pY = n(424994);
let pX = (0, E.zZ)(h.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [pz, pM],
    useTitle: () => U.intl.string(U.t.jCOdvx),
    useSubtitle: () =>
        (0, f.bG)([i3.Ay], () => i3.Ay.getGamesSeen(!1).some((e) => !(0, hW.n1)(e)))
            ? U.intl.format(U.t.KPA3m9, { igdbLink: pY.s8 })
            : U.intl.string(U.t["1yiJwn"]),
});
var pH = n(890497),
    pW = n(853270),
    pK = n(969426);
function pZ(e) {
    let { onClose: t } = e,
        n = (0, f.bG)([i3.Ay], () => i3.Ay.getCandidateGames()),
        [i, s] = T.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, p.jsxs)(aA.l, {
        className: iu()(pW.H, pK.Y_),
        "aria-label": U.intl.string(U.t.GTCx0p),
        children: [
            (0, p.jsx)(pH.Z, {
                selectionMode: "single",
                placeholder: U.intl.string(U.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, p.jsxs)("div", {
                className: iu()(pW.o, pw.xM),
                children: [
                    (0, p.jsx)(hb.Q, { variant: "secondary", text: U.intl.string(U.t["ETE/oC"]), onClick: t }),
                    (0, p.jsx)(v.$, {
                        variant: "primary",
                        text: U.intl.string(U.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (Sv.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var pq = n(475007);
function pQ() {
    let e = T.useRef(null);
    return (0, p.jsxs)("div", {
        className: iu()(pq.a, EJ.Gf),
        children: [
            (0, p.jsx)("span", { children: U.intl.string(U.t.xwhoqM) }),
            (0, p.jsx)(am.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, p.jsx)(pZ, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, p.jsx)(hb.Q, {
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
function p$() {
    return (0, p.jsx)("div", {
        className: iu()(pw.tR, pk.eS, pk.Rw),
        children: (0, p.jsxs)("div", {
            className: iu()(pk.$K, pw.Vd),
            children: [
                (0, p.jsx)("div", { className: pk.mO, children: U.intl.string(U.t.H68X9x) }),
                (0, p.jsx)(pQ, {}),
            ],
        }),
    });
}
let pJ = (0, E.E2)(h.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = hQ(),
                n = (0, f.bG)([i3.Ay], () => i3.Ay.getVisibleGame());
            return null == n
                ? (0, p.jsx)(p$, {})
                : (0, p.jsxs)("div", {
                      className: iu()(pw.Vd, pk.C2),
                      children: [
                          (0, p.jsx)(
                              pF,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === pU.a7 ? e : void 0,
                              },
                              (0, i3.Es)(n),
                          ),
                          (0, p.jsx)(pQ, {}),
                      ],
                  });
        },
    }),
    p0 = (0, E.zZ)(h.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => U.intl.string(U.t["MY9/Oe"]),
        buildLayout: () => [pJ],
    }),
    p1 = (0, E.t_)(h.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        buildLayout: () => [p0, pX],
    }),
    p2 = (0, E.i4)(h.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.AVDyEj),
        icon: pP.GameControllerIcon,
        usePredicate: nf.Pi,
        buildLayout: () => [p1],
    }),
    p3 = (0, E.WI)(h.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => U.intl.string(U.t.BA9200),
        buildLayout: () => [p2, xI, pD, Sm],
    });
var p5 = n(631670),
    p4 = n(619499),
    p6 = n(836602),
    p8 = n(591179),
    p7 = n(402860),
    p9 = n(761508),
    Te = n(159001),
    Tt = n(344346),
    Tn = n(919395),
    Ti = n(68750);
function Ts(e) {
    let { title: t, children: n } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(N.D, { variant: "text-md/medium", className: Ti.Vf, children: t }), n],
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
    return (0, p.jsx)("div", {
        className: iu()(Ti.UA, n),
        children: (0, p.jsxs)("div", {
            className: iu()(Ti.yt, i),
            children: [
                (0, p.jsx)("div", {
                    className: iu()(Ti.Fp, a && Ti.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(Ts, { title: l ?? U.intl.string(U.t.Zb06yP), children: s }),
                            null != r ? (0, p.jsx)(Ts, { title: U.intl.string(U.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: Ti.oB, children: t }),
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
    return (0, p.jsxs)("div", {
        className: Td.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Td.Sl }),
            (0, p.jsx)(N.D, { className: Td.h8, variant: "heading-lg/extrabold", children: U.intl.string(U.t.Z1OZCV) }),
            (0, p.jsx)(Q.E, { className: Td.h8, variant: "text-md/normal", children: U.intl.string(U.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Td.h8,
                children: (0, p.jsx)(v.$, {
                    variant: "primary",
                    text: U.intl.string(U.t.jQ3pqt),
                    onClick: function () {
                        ((0, dV.pX)(I.BVt.GUILD_DISCOVERY), (0, tY.default)());
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
    Tx = n(845207),
    TS = n(290386),
    Tp = n(941933),
    TT = n(486264);
let Tf = (0, tW.Ld)(),
    TI = (0, P.createChannelRecord)({ id: "1", type: I.rbe.DM }),
    T_ = (0, tW.Ld)();
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
        o = (0, TS.U)({ location: "profile_customization_about_me" }),
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
        (0, p.jsxs)(ao.A, {
            title: t,
            titleId: Tf,
            description: U.intl.string(U.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, p.jsx)(Tx.Ay, {
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
                    parentModalKey: Tp.y,
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
                (0, p.jsx)(sc.A, { id: T_, children: U.intl.format(U.t["+DFxLc"], { maxLength: o }) }),
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
        { analyticsLocations: a } = (0, ez.Ay)(),
        o = (0, Tn.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Tn.CP)(n?.id),
        c = r ? cV.wL : l$.$n;
    return (0, p.jsx)(ao.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: Tv.NC,
            children: [
                (0, p.jsx)(c, {
                    size: l$.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Ty.L)({ analyticsLocations: a, guild: n });
                    },
                    className: iu()({ [Tv.yj]: r }),
                    children: U.intl.string(U.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tv.DT,
                        children: (0, p.jsx)(v.$, {
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
        { newestAnalyticsLocation: g } = (0, ez.Ay)(),
        m = c ? cV.wL : l$.$n,
        A = T.useCallback(() => {
            (0, TA.XD)({
                uploadType: TO.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TR : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, p.jsx)(ao.A, {
        className: a,
        title: s,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: TL.NC,
            children: [
                (0, p.jsx)(m, {
                    className: iu()({ [TL.yj]: c }),
                    size: l$.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? U.intl.string(U.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TL.DT,
                        children: (0, p.jsx)(v.$, {
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
        s = ah.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, ez.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Tn.B0)(t, n),
        d = (0, TP.u)("DisplayNameStylesSection"),
        [c, g] = (0, mI.kn)(d ? [eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eA.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        A = (0, T.useCallback)(() => {
            (g(mL.i.TAKE_ACTION),
                tu.default.track(I.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eY.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        E = (0, T.useCallback)(() => {
            ((0, Tb.p)({ displayNameStyles: null }), tu.default.track(I.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        h = (0, T.useCallback)(() => {
            (0, Tb.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, p.jsx)(ao.A, {
        title: U.intl.string(eX.default["86GtGH"]),
        titleBadge: m
            ? (0, p.jsx)("div", { className: TG.A, children: (0, p.jsx)(mQ.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: TG.N,
            children: [
                (0, p.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(eX.default.vJqrIg), onClick: A }),
                null == n &&
                    null != x &&
                    (0, p.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(eX.default.ymq8WQ),
                        onClick: E,
                    }),
                null != n &&
                    null != x &&
                    (0, p.jsx)(v.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(eX.default["j/KRxc"]),
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
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Tn.rv)(t, n?.id),
        d = T.useCallback(() => {
            (0, TU.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = T.useCallback(() => {
            (0, Tb.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, p.jsx)(ao.A, {
        title: U.intl.string(U.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: TV.u,
            children: [
                (0, p.jsx)(v.$, { variant: "primary", size: "sm", text: U.intl.string(U.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, p.jsx)(v.$, {
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
        { newestAnalyticsLocation: c } = (0, ez.Ay)(),
        g = d ? cV.wL : l$.$n;
    return (0, p.jsx)(ao.A, {
        className: l,
        title: U.intl.string(U.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: Tw.NC,
            children: [
                (0, p.jsx)(g, {
                    className: iu()({ [Tw.yj]: d }),
                    size: l$.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TA.XD)({ uploadType: TO.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: U.intl.string(U.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tw.DT,
                        children: (0, p.jsx)(v.$, {
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
        { analyticsLocations: u } = (0, ez.Ay)(),
        d = ah.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Tn.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Tn.nZ)(n?.id);
    T.useEffect(() => {
        d &&
            (tu.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tQ.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tK.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tZ.uq)(tQ.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? cV.wL : l$.$n;
    return (0, p.jsx)(ao.A, {
        forcedDivider: r,
        borderType: dU.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, p.jsxs)("div", {
            className: Tz.NC,
            children: [
                (0, p.jsx)(A, {
                    size: l$.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TB.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: iu()({ [Tz.yj]: a }),
                    children: U.intl.string(U.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tz.DT,
                        children: (0, p.jsx)(v.$, {
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
        { analyticsLocations: s } = (0, ez.Ay)(),
        l = (0, Tn.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, Tn.Tu)(n?.id),
        [o, u] = (0, mI.kn)([eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eA.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, p.jsx)(ao.A, {
        showBorder: d,
        borderType: d ? dU.i.NEW_UPSELL : dU.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, p.jsx)("div", { className: TH.Ad, children: (0, p.jsx)(mQ.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? U.intl.string(U.t.yMoMAt) : void 0,
        errors: a,
        children: (0, p.jsxs)("div", {
            className: TH.NC,
            children: [
                (0, p.jsx)(v.$, {
                    variant: "primary",
                    size: "sm",
                    text: U.intl.string(U.t["9/hmle"]),
                    onClick: function () {
                        ((0, TX.w)({ analyticsLocations: s, guild: n }), u(mL.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TH.DT,
                        children: (0, p.jsx)(v.$, {
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
    T$ = n(819169),
    TJ = n(317097),
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
        c = (0, TK.r)(n0.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n0.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, TA.sN)(i),
        A = (0, TJ.Hl)(i),
        E = A === c ? g : A,
        h = m ? n0.A.unsafe_rawColors.WHITE.css : n0.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, T$.A)(a),
        S = (0, T$.A)(o),
        [f, _] = T.useState((0, of.A)());
    return (
        T.useEffect(() => {
            (x !== a || S !== o) && _((0, of.A)());
        }, [o, a, S, x]),
        (0, p.jsx)(am.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, p.jsx)(T0.VN, {
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
                return (0, p.jsxs)("div", {
                    ref: d,
                    className: iu()(T1.oP, { [T1.r9]: l }),
                    children: [
                        (0, p.jsx)(n3.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? I.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: T1.nf,
                            "aria-label": U.intl.string(U.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(aE.PencilIcon, {
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
        A = ah.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, TK.r)(n0.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, TZ.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, p.jsx)(ao.A, {
              title: U.intl.string(U.t.DMeO2X),
              disabled: !A && !l,
              className: iu()(T3.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, p.jsxs)("div", {
                  className: T3.hd,
                  children: [
                      (0, p.jsx)("div", {
                          className: T3.YX,
                          children: (0, p.jsx)(T2, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(Q.E, {
                                  className: T3.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: U.intl.string(U.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, p.jsx)("div", {
                          className: T3.YX,
                          children: (0, p.jsx)(T2, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, p.jsx)(Q.E, {
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
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: T3.WA,
                              children: (0, p.jsx)(v.$, {
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
function T4(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tW.GV)();
    return (0, p.jsx)(ao.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, p.jsx)(sS.k, {
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
var T6 = n(684732),
    T8 = n(576705),
    T7 = n(931175);
function T9(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, f.bG)([T8.A], () => T8.A.can(I.xBc.CHANGE_NICKNAME, r) || T8.A.can(I.xBc.MANAGE_NICKNAMES, r)),
        o = (0, xV.L)(tQ.PremiumTypes.TIER_2);
    return (0, p.jsxs)(ao.A, {
        title: U.intl.string(U.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(sS.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: I.d0r,
                onChange: function (e) {
                    (0, Tb.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : U.intl.string(U.t.gzjxQi),
            }),
            o && (0, p.jsx)(TM, { user: l, guildId: r.id, className: T7.F }),
        ],
    });
}
var fe = n(233454);
let ft = "/assets/b25da78aa7949feb.png";
function fn(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, d6.Ay)(),
        { analyticsLocations: l } = (0, ez.Ay)(tV.A.PREMIUM_UPSELL_OVERLAY);
    return (T.useEffect(() => {
        n &&
            (tu.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: tQ.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tK.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                (0, tZ.uq)(tQ.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, l]),
    n)
        ? (0, p.jsxs)("div", {
              className: fe.ry,
              children: [
                  (0, p.jsx)("div", { children: i }),
                  (0, p.jsxs)("div", {
                      className: fe.Wc,
                      children: [
                          (0, p.jsx)("img", {
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
                          (0, p.jsxs)("div", {
                              className: fe._9,
                              children: [
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: U.intl.string(U.t.dMaDFX),
                                  }),
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: U.intl.string(U.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, p.jsx)(dM.A, {
                              size: l$.$n.Sizes.LARGE,
                              color: l$.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ah.Ay.isPremium(t)
                                      ? U.intl.string(U.t.AfRWI8)
                                      : U.intl.string(U.t.nkdUym),
                              },
                              subscriptionTier: tQ.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var fi = n(203164);
function fs() {
    let e = (0, f.bG)([lh.default], () => {
            let e = lh.default.getCurrentUser();
            return (tA()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, xV.L)(tQ.PremiumTypes.TIER_2),
        n = (0, f.bG)([p6.A, sy.A], () => sy.A.getGuild(p6.A.selectedGuildId));
    tA()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, f.cf)([p6.A], () => ({ ...p6.A.getPendingChanges(n.id), errors: p6.A.getErrors(n.id) })),
        d = (0, Ta.V7)({ userId: e.id, image: i }),
        c = (0, Tg.EC)(n.id),
        g = (0, f.bG)([Tu.Ay], () => (null == n.id ? null : Tu.Ay.getMember(n.id, e.id))),
        m = (0, f.bG)([To.A], () => To.A.getGuildMemberProfile(e.id, n.id)),
        A = ah.Ay.canUsePremiumProfileCustomization(e),
        E = (0, Tn.z5)(i, g?.avatar),
        h = (0, Tn.Ac)(l, m?.banner),
        x = (0, T6.l)(o, m?.themeColors),
        S = m?.bio ?? "",
        T = m?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: fi.Q,
        children: [
            (0, p.jsx)(
                T9,
                {
                    errors: u?.nick ?? c?.nick,
                    username: uv.Ay.getName(e),
                    pendingNick: s,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, p.jsx)(
                T4,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, Tb.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: T,
                },
                "pronouns",
            ),
            (0, p.jsxs)(fn, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, p.jsx)(
                        TD,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [U.intl.string(U.t.lqaIxI), (0, p.jsx)(Tm.A, { size: "xs", inline: !0 })],
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
                    (0, p.jsx)(
                        Tj,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [U.intl.string(U.t["7v0T9P"]), (0, p.jsx)(Tm.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, p.jsx)(TM, { user: e, guildId: n.id }),
                    (0, p.jsx)(
                        Tk,
                        { user: e, guild: n, titleIcon: (0, p.jsx)(Tm.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        TY,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [U.intl.string(U.t.wR5wOo), (0, p.jsx)(Tm.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(
                        TW,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [U.intl.string(U.t.GWrZOd), (0, p.jsx)(Tm.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, p.jsx)(
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
                    (0, p.jsx)(T5, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, Tb.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, p.jsx)(
                        TN,
                        {
                            placeholder: U.intl.string(U.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [U.intl.string(U.t.ZzAR2Y), (0, p.jsx)(Tm.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, Tb.p)({ guildId: n.id, bio: e }),
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
var fl = n(832131);
function fr(e) {
    (0, sx.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, p.jsx)(t, { source: { ...e, page: I.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function fa(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(tV.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, f.bG)([lh.default], () => {
            let e = lh.default.getCurrentUser();
            return (tA()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, f.bG)([Tu.Ay], () => (null != t ? Tu.Ay.getMember(t.id, s.id) : null)),
        r = (0, f.bG)([To.A], () => !To.A.isFetchingProfile(s.id, t?.id)),
        a = (0, f.bG)([to.A], () => to.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, f.cf)([p6.A], () => p6.A.getPendingChanges(t?.id)),
        c = (0, Ta.V7)({ userId: s.id, image: o }),
        g = (0, Tn.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, Tn.B0)(s, t?.id);
    return (T.useEffect(() => Te.IM, []), a)
        ? (0, p.jsx)(oc.A, {})
        : r
          ? (0, p.jsxs)(ez.f5, {
                value: i,
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        children: U.intl.format(U.t["/PTB2E"], {
                            helpCenterLink: eC.A.getArticleURL(I.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(aa.A, { guildId: t.id, onChange: n }),
                                  (0, p.jsx)(Tl, {
                                      profilePreviewTitle: (0, p.jsx)(N.D, {
                                          variant: "heading-md/medium",
                                          className: fl.YV,
                                          children: U.intl.formatToPlainString(U.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(Tr.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: ah.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: fr,
                                          containerClassName: fl.ti,
                                      }),
                                      nameplatePreview: (0, p.jsx)(Tt.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? fl.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(fs, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(Tc, {}),
                ],
            })
          : (0, p.jsx)(oT.y, {});
}
var fo = n(903209),
    fu = n(641130);
function fd(e) {
    let { children: t, notice: n } = e;
    return (0, p.jsxs)("div", { className: fu.r, children: [n, (0, p.jsx)("div", { children: t })] });
}
var fc = n(823092),
    fg = n(815996),
    fm = n(379197),
    fA = n(488430),
    fE = n(457421),
    fh = n(940622),
    fx = n(559474),
    fS = n(757993);
let fp = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: s } = (0, ez.Ay)(tV.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
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
            (tu.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tQ.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            }),
                (0, tK.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                    (0, tZ.uq)(tQ.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [s, d]),
        (0, p.jsxs)("div", {
            ref: l,
            className: fS.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: fS.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: fS.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: fS.Em,
                    children: [
                        (0, p.jsx)(N.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: fS.DD,
                            children: o,
                        }),
                        (0, p.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, p.jsx)(v.$, {
                    onClick: function () {
                        g(() =>
                            (0, fg.Cz)({
                                analyticsLocations: s,
                                analyticsSource: tV.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
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
var fP = n(201805),
    fG = n(221650);
function fM(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, f.bG)([j.Ay], () => j.Ay.useReducedMotion),
        s = (0, fP.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = T.useMemo(() => {
            let e = (0, fL.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: fG.kL,
        children: [
            (0, p.jsx)(n3.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: fG.x6,
                "aria-label": U.intl.string(U.t["44yJxh"]),
                children: s.render(),
            }),
            (0, p.jsxs)(n3.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${U.intl.string(U.t["44yJxh"])}`,
                className: fG.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: fG.L_ }),
                    (0, p.jsx)(Q.E, {
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
        } = (0, f.cf)([p6.A], () => {
            let e = p6.A.getPendingChanges(),
                t = p6.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, Ta.V7)({ userId: t.id, image: g ?? i });
    return (0, p.jsx)(Tr.A, {
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
        s = ah.Ay.isPremium(t),
        l = ah.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, f.cf)([p6.A], () => {
            let e = p6.A.getPendingChanges(),
                t = p6.A.getErrors(),
                n = p6.A.getTryItOutChanges();
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
                (t(n), tu.default.track(I.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = T.useRef(null);
    fF(m, eO._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, ez.Ay)(tV.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, fk.T)(), tu.default.track(I.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    T.useEffect(() => {
        n &&
            (tu.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tQ.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: I.liQ.USER_SETTINGS },
                location_stack: E,
            }),
            (0, tK.sq)(I.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, tZ.uq)(tQ.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [E, t, n]);
    let x = (0, fC.V)()?.subscriptionTrial?.skuId === tQ.pe.TIER_2,
        S = (0, fN.O)(),
        _ = (0, fU.U9)(S, tQ.pe.TIER_2);
    return i
        ? (0, p.jsx)(ez.f5, {
              value: A,
              children: (0, p.jsxs)(dU.A, {
                  ref: m,
                  className: fW.MT,
                  type: dU.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(Tl, {
                          stickyPreview: !1,
                          layoutClassName: fW.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(al.t, { size: "md", color: "currentColor", className: fW.PC }),
                                  U.intl.string(U.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(fM, { preset: c, onShuffle: g }), (0, p.jsx)(fH, { user: t })],
                          }),
                          children: (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsxs)("div", {
                                      children: [
                                          (0, p.jsx)(N.D, {
                                              variant: "heading-xl/extrabold",
                                              children: U.intl.string(U.t["2zGdAW"]),
                                          }),
                                          (0, p.jsx)(Q.E, {
                                              className: fW.h_,
                                              variant: "text-sm/normal",
                                              children: U.intl.string(U.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(T5, {
                                      className: fW.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Ta.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: fO.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(TF, {
                                      className: fW.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: fO.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, p.jsx)(TD, {
                                          className: fW.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: fO.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: U.intl.string(U.t["7z0D1c"]),
                                          sectionTitle: U.intl.string(U.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(TM, { user: t, className: fW.fz }),
                                  !x &&
                                      (0, p.jsx)(Q.E, {
                                          variant: "text-sm/normal",
                                          children: U.intl.string(U.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !x &&
                          (0, p.jsx)(ff.d, {
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
                                    ? U.intl.formatToPlainString(U.t.bkQ4bH, { percent: S?.discount.amount })
                                    : U.intl.string(U.t.pj0XBN),
                              position: "inline",
                          }),
                      x &&
                          (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsx)("div", { className: fW.BU }),
                                  (0, p.jsx)(fV.Ay, {
                                      type: tQ.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tQ.pe.TIER_2,
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
    f$ = n(145497),
    fJ = n(685073),
    f0 = n(534400),
    f1 = n(581781),
    f2 = n(743981),
    f3 = n(195801);
let f5 = (0, tW.Ld)(),
    f4 = T.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, f.cf)([lh.default], () => (0, fJ.Zo)(lh.default.getCurrentUser()?.primaryGuild)),
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
                        : (0, p.jsx)(f1.A, {
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
                        : (0, p.jsx)(f$.j, {
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
                        : (0, p.jsx)(f0.o9, {
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
                    return null == t ? null : (0, p.jsx)(p.Fragment, { children: o(t) });
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
            (0, p.jsxs)(ao.A, {
                title: U.intl.string(U.t.Pdd1nd),
                titleId: f5,
                ref: h,
                children: [
                    (0, p.jsx)(Q.E, {
                        className: f3.VA,
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(fQ.Pw, {
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
var f6 = n(318785),
    f8 = n(470739);
let f7 = function () {
    return (0, fq.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, p.jsx)(ao.A, {
              title: U.intl.string(U.t.l6w3Vj),
              description: U.intl.string(U.t.joHqdj),
              children: (0, p.jsx)(v.$, {
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
let Ie = (0, tW.Ld)();
function It(e) {
    let t = (0, xV.L)(tQ.PremiumTypes.TIER_2);
    return (0, p.jsxs)(ao.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: U.intl.string(U.t["9AjdkD"]),
        titleId: Ie,
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(sS.k, {
                    "aria-labelledby": Ie,
                    placeholder: e.placeholder,
                    maxLength: I.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(TM, { user: e.user, className: f9.F }),
        ],
    });
}
var In = n(376626);
function Ii(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = M.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, p.jsx)("div", {
        className: In.u,
        children: (0, p.jsx)(t5.d, {
            label: U.intl.string(U.t["3cWDuO"]),
            description: s ? null : U.intl.formatToPlainString(U.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, p5._e)() : (0, Tb.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function Is(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, TK.r)(n0.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TZ.rh)(l, r, !1),
        o = (0, TJ.LX)(a[0]);
    return (0, p.jsx)(ao.A, {
        title: U.intl.string(U.t["/X3fkf"]),
        children: (0, p.jsx)(T2, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var Il = n(518477);
let Ir = function () {
    let e = (0, f.bG)([dq.default], () => dq.default.getId());
    return (0, p.jsx)(ao.A, {
        title: U.intl.string(U.t.Jzj9q4),
        children: (0, p.jsx)(v.$, {
            text: U.intl.string(U.t.Geikwq),
            onClick: () => {
                (0, p7.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tV.A.USER_SETTINGS_USER_PROFILE],
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
    let e = (0, f.bG)([lh.default], () => {
            let e = lh.default.getCurrentUser();
            return (tA()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
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
        } = (0, f.cf)([p6.A], () => {
            let e = p6.A.getPendingChanges(),
                t = p6.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Ta.V7)({ userId: e.id, image: i }),
        A = (0, Tg.EC)(),
        E = ah.Ay.canUsePremiumProfileCustomization(e),
        h = (0, Tn.z5)(i, e.avatar),
        x = (0, Tn.Ac)(l, t?.banner),
        S = (0, Tq.Ay)(e.id),
        T = S?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        N = (0, f6.b)(),
        C = null != (0, fJ.Zo)(e.primaryGuild).guildId;
    return (0, p.jsxs)("div", {
        className: Ia.Q,
        children: [
            (0, p.jsx)(It, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, Tb.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                T4,
                {
                    sectionTitle: U.intl.string(U.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, Tb.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(Ir, {}),
            (0, p.jsx)(
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
            (0, p.jsx)(Tj, { user: e, sectionTitle: U.intl.string(U.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(Tk, { user: e }),
            (0, p.jsx)(TY, { user: e, sectionTitle: U.intl.string(U.t.wR5wOo) }, "effect"),
            (0, p.jsx)(TW, { user: e, sectionTitle: U.intl.string(U.t.GWrZOd) }, "frame"),
            E
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              TF,
                              {
                                  showRemoveBannerButton: x,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, Tb.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(T5, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, Tb.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      Is,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, Tb.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
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
                (0, p.jsx)(f4, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, Tb.p)({ primaryGuildId: e }),
                }),
            null != T &&
                !n &&
                (0, p.jsx)(Ii, { legacyUsername: T, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, p.jsx)(f7, {}, "badges"),
        ],
    });
}
function Iu() {
    (0, sx.openModalLazy)(async () => {
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
var Id = n(447080);
function Ic() {
    let e = (0, f.bG)([lh.default], () => {
            let e = lh.default.getCurrentUser();
            return (tA()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, f.bG)([to.A], () => to.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, f.cf)([p6.A], () => ({ ...p6.A.getPendingChanges(), showNotice: p6.A.showNotice() })),
        a = (0, Ta.V7)({ userId: e.id, image: i }),
        o = (0, Tn.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, fZ.A)() && null != n ? fT.Ay.parse(void 0, n).content : n,
        d = ah.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, ez.Ay)(tV.A.USER_SETTINGS_USER_PROFILE);
    T.useEffect(() => p5.IM, []);
    let [g, m] = T.useState(!1),
        A = !d,
        E = T.useRef(null);
    return t
        ? (0, p.jsx)(oc.A, {})
        : (0, p.jsxs)(ez.f5, {
              value: c,
              children: [
                  (0, p.jsx)(fp, {}),
                  (0, p.jsx)(Tl, {
                      profilePreview: (0, p.jsx)(Tr.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: Iu,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: Id.ti,
                      }),
                      nameplatePreview: (0, p.jsx)(Tt.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? Id.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(Io, {}),
                  }),
                  (0, p.jsx)(cC.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, p.jsx)("div", {
                          ref: E,
                          children: (0, p.jsx)(fK, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !l &&
                      (0, p.jsx)(ff.d, {
                          className: Id.EL,
                          showUpsell: !g,
                          text: U.intl.format(U.t.TmfgI2, { onClick: () => (0, f_.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, p.jsx)(fI.l, {
                              size: "md",
                              location: tV.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, p.jsx)("div", {
                              className: Id.Xl,
                              children: (0, p.jsx)(v.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (tu.default.track(I.HAw.TRY_IT_OUT_PRESET_CLICKED, {
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
var Ig = n(625494);
n(46121);
var Im = n(944983);
let IA = { [eO.Eq.USER_PROFILE]: "main_profile_tab", [eO.Eq.GUILD]: "guild_profile_tab" },
    IE = (0, E.E2)(h.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, f.bG)([sb.A, gT.Ay, p6.A], () => {
                    let e = p6.A.selectedGuildId ?? sb.A.getGuildId();
                    return null == e || p6._.has(e) ? gT.Ay.getFlattenedGuildIds().find((e) => !p6._.has(e)) : e;
                }),
                t = (0, f.bG)([sy.A], () => sy.A.getGuild(e)),
                n = (0, f.bG)([p6.A], () => p6.A.showNotice()),
                i = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
                s = fw.A.useField("subsection");
            return (
                T.useEffect(() => {
                    (0, n9._)(IA[s]);
                }, [s]),
                T.useEffect(() => {
                    null != i && t?.id != null && (0, fo.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, p.jsx)(fd, {
                    children: (0, p.jsxs)(u_.F, {
                        component: (0, p.jsx)(sc.A, {
                            children: (0, p.jsx)(N.D, {
                                variant: "heading-xl/normal",
                                children: U.intl.string(U.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, p.jsxs)(p9.V, {
                                className: Im.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, ie.fO)({ duration: 300, intensity: 1.4 }),
                                                Ig._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eO.Eq.GUILD && null != t && (0, Te.V2)(t.id),
                                            fw.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, p.jsx)(
                                        p9.V.Item,
                                        {
                                            className: Im.YU,
                                            id: eO.Eq.USER_PROFILE,
                                            children: U.intl.string(U.t["2p07FR"]),
                                        },
                                        eO.Eq.USER_PROFILE,
                                    ),
                                    (0, p.jsx)(
                                        p9.V.Item,
                                        {
                                            className: iu()(Im.YU, Im.HY),
                                            "aria-label": U.intl.string(U.t.kPHroX),
                                            id: eO.Eq.GUILD,
                                            children: U.intl.string(U.t.kPHroX),
                                        },
                                        eO.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eO.Eq.GUILD
                                ? (0, p.jsx)(fa, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ie.fO)({ duration: 300, intensity: 1.4 }),
                                                  Ig._.dispatch(I.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, Te.JJ)(e.id);
                                      },
                                  })
                                : (0, p.jsx)(Ic, {}),
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
function IS() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, ck.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return null == e
        ? null
        : (0, p.jsxs)("div", {
              className: Ix.a5,
              children: [
                  (0, p.jsx)(y.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: b._3.SIZE_48,
                      "aria-label": U.intl.string(U.t.lqaIxI),
                  }),
                  (0, p.jsxs)("div", {
                      className: Ix.FS,
                      children: [
                          (0, p.jsx)(Q.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, p.jsxs)("div", {
                              className: Ix.Fk,
                              children: [
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: U.intl.string(U.t.Ip9nBS),
                                  }),
                                  (0, p.jsx)(aE.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let Ip = (0, E.t_)(h.X.PROFILE_PANEL, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        notice: { stores: [p6.A], element: p4.A },
        initialize: () => p5.F7,
        buildLayout: () => [Ih],
    }),
    IT = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: II,
        StronglyDiscouragedCustomComponent: IS,
        usePredicate: () => !(0, p8.X)("user_settings_sidebar"),
        buildLayout: () => [Ip],
    }),
    If = (0, E.i4)(h.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => U.intl.string(U.t["vi7f+q"]),
        icon: II,
        StronglyDiscouragedCustomComponent: IS,
        usePredicate: () => (0, p8.X)("user_settings_sidebar"),
        onClick: () => {
            let e = dq.default.getId();
            (0, p7.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function II() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, ck.A)({ userId: e?.id, size: b._3.SIZE_48 });
    return (0, p.jsx)(y.eu, { src: t, avatarDecoration: n, size: b._3.SIZE_20, "aria-hidden": !0 });
}
let I_ = (0, E.WI)(h.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [IT, If] });
var IN = n(98207);
n(204925);
let IC = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sx.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 110744),
            );
            return (n) => (0, p.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? uL.tE : null, onCloseCallback: t },
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
var IP = n(737117);
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
    return e ? { icon: t === Ib.M$.ADULT ? IM.r : IU.i, backgroundColor: n0.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function Ik() {
    let e = IV();
    return null != e ? { type: S.hp.ICON, ...e } : null;
}
function Iw() {
    return ID() ? U.intl.string(U.t.piqs0o) : null;
}
var IF = n(438140);
let IB = [{ badgeType: S.Xi.NEW, dismissibleContent: eA.M.TINY_BRONCO_SETTINGS }],
    Iz = [];
function IY() {
    return (0, IF.Wt)() ? IB : Iz;
}
var IX = n(36149),
    IH = n(207560),
    IW = (((g = {}).LEGACY = "legacy"), (g.TINY_BRONCO = "tinyBronco"), g),
    IK = (((m = {}).VERIFY = "verify"), (m.EDIT = "edit"), (m.INFO = "info"), m);
function IZ(e, t) {
    let n = (0, f.bG)([lh.default], () => null != lh.default.getCurrentUser()),
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
var Iq = n(799719);
function IQ() {
    let e = (0, Ib.hD)();
    return (0, p.jsxs)(Q.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, U.intl.format(Iq.default.WM5adV, { handleOnHelpUrlHook: Ib.M0 })],
    });
}
let I$ = {
        useTitle: () => Iw() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: IG,
        useVariant: () => "secondary",
        useLeadingDecoration: Ik,
        getDismissibleBadges: IY,
        useTrailingDecoration: () => ({
            type: S.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: IQ,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        onClick: function () {
            (0, sx.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    },
    IJ = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...I$, usePredicate: () => IZ(IK.EDIT, IW.LEGACY) }),
    I0 = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...I$,
        usePredicate: () => IZ(IK.EDIT, IW.TINY_BRONCO),
        useAriaLabel: () => U.intl.string(U.t.pBMSie),
    }),
    I1 = {
        useTitle: () => Iw() ?? U.intl.string(U.t["/52UYy"]),
        useSubtitle: IG,
        useLeadingDecoration: function () {
            let e = IV();
            return null != e ? { type: S.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: IY,
        useTrailingDecoration: () => ({ type: S.Ln.TEXT, text: (0, Ib.hD)() }),
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
        useTrailingDecoration: () => ({ type: S.fq.TEXT, text: (0, Ib.hD)() }),
        useLabel: function () {
            return (0, IX.yM)() ? U.intl.string(U.t["9KiIz6"]) : U.intl.string(U.t.DVywUB);
        },
        onClick: Ib.aP,
    },
    I4 = (0, E.Tf)(h.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...I5, usePredicate: () => IZ(IK.VERIFY, IW.LEGACY) }),
    I6 = (0, E.Tf)(h.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...I5,
        usePredicate: () => IZ(IK.VERIFY, IW.TINY_BRONCO),
    }),
    I8 = [I4, IJ, I2],
    I7 = [I6, I0, I3],
    I9 = (0, E.Tf)(h.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => U.intl.string(U.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: S.fq.TEXT, text: U.intl.string(U.t.qxk9zo) }),
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
    return (0, p.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, p.jsx)(Q.E, { variant: "text-md/medium", children: a }),
            (0, p.jsx)(hb.Q, {
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
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t["8SfTN/"]) })
        : (0, p.jsx)(_n, {
              text: e,
              censor: _t,
              revealLabel: U.intl.string(U.t["Zvx+yV"]),
              hideLabel: U.intl.string(U.t.nqTD4d),
          });
}
let _s = (0, E.Tf)(h.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: S.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _i }),
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
        (0, sx.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, p.jsx)(e, { ...t });
        });
    },
});
var _l = n(557722),
    _r = n(53516);
function _a() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(Q.E, { variant: "text-md/medium", children: U.intl.string(U.t.I5kDqj) })
        : (0, p.jsx)(Z.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(_n, {
                  text: t,
                  censor: _e,
                  revealLabel: U.intl.string(U.t.eY3xlT),
                  hideLabel: U.intl.string(U.t["jllbv+"]),
              }),
          });
}
let _o = (0, E.Tf)(h.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => U.intl.string(U.t.kerONq),
    useAriaLabel: function () {
        return null == (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.phone)
            ? U.intl.string(U.t["SfUuE+"])
            : U.intl.string(U.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: S.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _a }),
    useLabel: function () {
        return null == (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.phone)
            ? U.intl.string(U.t.OYkgVk)
            : U.intl.string(U.t.bt75uw);
    },
    onClick: function () {
        null == lh.default.getCurrentUser()?.phone
            ? (0, sx.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, p.jsx)(e, { reason: _l.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: _r.V },
              )
            : (0, sx.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function _u() {
    let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function _d() {
    let e = (0, Tg.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(Q.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, p.jsx)(sd.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, p.jsx)(iQ.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n0.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let _c = (0, E.Tf)(h.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => U.intl.string(U.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: S.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: _d,
        }),
        useLabel: () => U.intl.string(U.t.bt75uw),
        useAriaLabel: () => U.intl.string(U.t.JECa91),
        useSubtitle: () => (_u() ? U.intl.string(U.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: _u,
        onClick: function () {
            (0, sx.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    _g = (0, E.zZ)(h.X.ACCOUNT_INFO_CATEGORY, {
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
                            type: S.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            title: U.intl.string(U.t.tuGzBT),
                            text: U.intl.string(U.t.NAzplE),
                            button: { text: U.intl.string(U.t.lm1UKt), onClick: () => (0, Iy.S)(e) },
                        }
                  : {
                        type: S.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
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
        (0, sx.openModal)((e) => (0, p.jsx)(_m.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var _E = n(200921);
let _h = [];
function _x() {
    _h = [];
}
class _S extends f.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return _h;
    }
}
let _p = new _S(ts.h, {
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
    let e = (0, f.cf)([_p], () => _p.getSessions());
    return T.useMemo(() => {
        let t = [...e],
            n = null,
            i = dq.default.getAuthSessionIdHash();
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
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? U.intl.string(U.t.TXCmfL) : ic()(e).fromNow();
}
var _I = n(176524),
    __ = n(646270),
    _N = n(738678),
    _C = n(489828);
function _y(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, p.jsxs)(Z.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(_I.A, { icon: t, color: r ? n0.A.colors.ICON_MUTED : "currentColor" }),
            (0, p.jsxs)(Z.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, p.jsxs)(Z.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, p.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, p.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, p.jsx)(Q.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, p.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
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
                            return { text: U.intl.string(U.t.cDHCNY), icon: du.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: __.u };
                        case "horizon os":
                            return { text: e, icon: _N.G };
                        default:
                            return { text: e, icon: du.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : _f(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(ir.Vq);
    return (0, p.jsx)(_y, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, p.jsx)(n3.D, {
                className: _C.X,
                onClick: () => (0, _E.U0)(t.id_hash),
                "aria-label": U.intl.string(U.t.E4MJNt),
                children: (0, p.jsx)(uU.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function _v(e) {
    let { title: t, children: n } = e,
        i = T.useId();
    return (0, p.jsxs)(Z.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, p.jsx)(N.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, p.jsx)(Z.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let _j = (0, E.E2)(h.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = _T();
            return null == e
                ? (0, p.jsx)(oT.y, {})
                : (0, p.jsx)(_v, {
                      title: U.intl.string(U.t.LLS19o),
                      children: (0, p.jsx)(_b, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    _O = (0, E.E2)(h.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _T();
            return (0, p.jsx)(sa.D, {
                label: U.intl.string(U.t.Vij32M),
                description: U.intl.string(U.t.OTXyaf),
                children: (0, p.jsx)(v.$, {
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
    return (0, p.jsx)(_y, {
        icon: _L.W,
        label: U.intl.string(U.t.iUa0sn),
        description: U.intl.format(U.t["044+8i"], {
            onClick: () =>
                (0, nr.openUserSettings)(h.X.ACCOUNT_PANEL, { analyticsLocations: [tV.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let _D = (0, E.E2)(h.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = _T(),
                t = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
            return (0, p.jsxs)(_v, {
                title: U.intl.string(U.t.xx1MWc),
                children: [
                    e.map((e) => (0, p.jsx)(_b, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, p.jsx)(_R, {}),
                ],
            });
        },
        useSearchTerms: () => [U.intl.string(U.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = _T(),
                t = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.mfaEnabled);
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
        useObscuredNotice: oc.L,
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
                type: S.xn.TEXT,
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
    return (0, a9.bG)([lh.default], () => {
        let e = lh.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var _w =
    (((A = {}).AVAILABLE = "available"),
    (A.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (A.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    A);
function _F() {
    let e = (0, a9.bG)([lh.default], () => lh.default.getCurrentUser()?.verified);
    return _U.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function _B() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, a9.bG)([sy.A, T8.A, lh.default], () =>
        lh.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? U.intl.string(U.t.hxf9fX)
                : U.intl.string(U.t["3iKih7"])
            : sy.A.getGuildsArray().some(
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
            let e = (0, f.bG)([dq.default], () => dq.default.hasTOTPEnabled()),
                t = _F() === _w.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n1.A)({
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
            let e = (0, f.bG)([dq.default], () => dq.default.hasTOTPEnabled()),
                t = _F() === _w.AVAILABLE;
            if (!e && t)
                return {
                    type: S.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: S.UV.BUTTON,
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
                    return {
                        type: S.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "none",
                        text: U.intl.string(U.t.PhHhsj),
                    };
                case _w.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: S.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: U.intl.string(U.t.uggF7o),
                    };
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
    (0, sx.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    IN.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, sx.openModalLazy)(
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
                title: U.intl.string(U.t.PsQmzU),
                actionText: U.intl.string(U.t.ajkYcF),
            });
    });
}
var _$ = n(858487);
function _J(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function _0() {
    let e = _H.A.getVerificationKey();
    if ("" === e) return void _Q();
    try {
        await IN.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, ld.P0)({ text: e.body?.message ?? U.intl.string(U.t.F8FvUy), variant: "critical" });
    }
}
function _1(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = _J(t),
        s = T.useRef(null),
        l = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(_Z.P, { checked: n }), (0, p.jsx)(Q.E, { variant: "text-md/normal", children: i })],
        });
    return uN.p5
        ? (0, p.jsx)(n3.D, {
              tag: "li",
              className: iu()(_$.aY, _$.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uN.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, uN.C)(i), (0, ld.P0)({ text: U.intl.string(U.t.mGZ66D), variant: "success" }));
              },
              children: l,
          })
        : (0, p.jsx)("li", { className: _$.aY, children: l });
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
                                return `* ${_J(t)}` + (n ? ` (${U.intl.string(U.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(v.$, { text: U.intl.string(U.t.Jc2myK), size: "sm", variant: "secondary", onClick: _Q })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: _$.E5,
                              children: e.map((e) => (0, p.jsx)(_1, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(l0.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(_q.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(v.$, {
                                          text: U.intl.string(U.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: _W.DownloadIcon,
                                      }),
                                  }),
                                  (0, p.jsx)(v.$, {
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
                n = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : U.intl.format(e ? U.t["xDBk/I"] : U.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, p.jsx)(hb.Q, {
                              text: e ? U.intl.string(U.t.fgq1gs) : U.intl.string(U.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => U.intl.string(U.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, sx.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        handleSubmit: IN.A.disableSMS,
                        title: U.intl.string(U.t.KLWnit),
                        children: U.intl.string(U.t["W0/Duf"]),
                    });
            }),
    }),
    _4 = (0, E.zZ)(h.X.SMS_AUTH_CATEGORY, {
        useTitle: () => U.intl.string(U.t.wuHuI5),
        useSubtitle: () => (0, f.bG)([lh.default], () => _V(lh.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()?.hasFlag(I.nhx.MFA_SMS) ?? !1),
                t = (0, f.bG)([lh.default], () => null != _V(lh.default.getCurrentUser()));
            if (!e)
                return {
                    type: S.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: S.UV.BUTTON,
                            id: "sms-setup-button",
                            text: U.intl.string(U.t.Age7yU),
                            onClick: _6,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = _F(),
                t = _k(),
                n = (0, f.bG)([dq.default], () => dq.default.hasTOTPEnabled());
            return e === _w.AVAILABLE && t && n;
        },
        buildLayout: () => [_5],
    });
function _6() {
    let e = lh.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: _l.d.USER_SETTINGS_UPDATE, onAddedPhone: IN.A.enableSMS }),
                (0, sx.openModalLazy)(
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
    return (0, p.jsxs)("li", {
        className: Nt.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(Q.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: U.intl.format(U.t["7JgxF5"], { lastUsed: _f(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(so.K, {
                icon: gC.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": U.intl.string(U.t["+nrTbK"]),
                onClick: (e) => {
                    (0, _7.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, p.jsx)(e, { credential: t, ...n });
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
                    type: S.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: S.UV.BUTTON,
                            id: "add-security-key-button",
                            text: U.intl.string(U.t["Tzs/fw"]),
                            icon: iY.j,
                            onClick: _8.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (_F()) {
                    case _w.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: S.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: U.intl.string(U.t.bWCGI9),
                        };
                    case _w.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: S.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: U.intl.string(U.t.uggF7o),
                        };
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
                ? (0, p.jsx)(Z.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(Nn, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(oT.y, {});
        },
    }),
    Nl = (0, E.t_)(h.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => U.intl.string(U.t.m0FidJ),
        buildLayout: () => [Ni, _X, _4, _2],
    }),
    Nr = (0, E.t0)(h.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = _k();
            return { type: S.xn.TEXT, text: e ? U.intl.string(U.t.lQsY7B) : U.intl.string(U.t.WsUuTt) };
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
    NS = (0, E.t0)(h.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => U.intl.string(U.t["16r9jm"]),
        useSubtitle: Nm.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Nm._k)();
            return { type: S.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: S.xn.TEXT, text: (0, Nm.aO)() };
        },
        initialize: () => {
            Ng.Yn();
        },
        buildLayout: () => [Nx],
    }),
    Np = (0, E.zZ)(h.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (ID() ? U.intl.string(U.t.GI2mea) : null) ?? U.intl.string(U.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, IF.LH)(),
                t = (0, Ib.ZP)(),
                [n, i] = (0, mI.kn)(e ? Nu : Nd);
            return e && null != n
                ? {
                      type: S.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      iconAlign: "start",
                      text: U.intl.format(No[t], { handleOnBlogHook: Nc }),
                      onDismiss: () => i(mL.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...I7, NS],
    });
var NT = n(738188),
    Nf = n(834981),
    NI = n(987197),
    N_ = n(822585),
    NN = n(840387),
    NC = n(961526),
    Ny = n(273665);
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
            return T.useMemo(() => (n ? { badgeType: S.Xi.WARNING } : { badgeType: S.Xi.COUNT, count: i }), [n, i]);
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
                      type: S.Xy.ICON,
                      icon: NT.WarningIcon,
                      color: n0.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n0.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [Nj],
    });
var NR = n(425587),
    ND = n(662758);
function NP(e) {
    if (e.body.code === I.t02.INVALID_PASSWORD) throw e;
    (0, lQ.A)({ title: U.intl.string(U.t.LX0nT8), subtitle: e.body.message });
}
async function NG() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = lh.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await NR.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, lQ.A)({
              title: U.intl.string(U.t["Y++oNe"]),
              subtitle: U.intl.format(U.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : sy.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, lQ.A)({ title: U.intl.string(U.t.vJiTOL), subtitle: U.intl.string(U.t.UyVVan) })
          : t.isClaimed()
            ? (0, sx.openModal)((t) =>
                  (0, p.jsx)(ND.default, {
                      ...t,
                      handleSubmit: (t) => (0, p5.U_)(t, e).then(I.tEg, NP),
                      title: e ? U.intl.string(U.t.xca2ts) : U.intl.string(U.t.goXv9g),
                      actionText: e ? U.intl.string(U.t["8lQ2rR"]) : U.intl.string(U.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? U.intl.string(U.t.FB4H1D) : U.intl.string(U.t.gk7h32),
                  }),
              )
            : (0, n1.A)({
                  title: U.intl.string(U.t.xca2ts),
                  subtitle: U.intl.string(U.t.FB4H1D),
                  confirmText: U.intl.string(U.t["8lQ2rR"]),
                  onConfirm: () => (0, p5.U_)("", !0),
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
            let e = (0, f.bG)([lh.default], () => lh.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    NV = (0, E.zZ)(h.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NU, NM] }),
    Nk = (0, E.t_)(h.X.ACCOUNT_PANEL, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (IN.A.clearBackupCodes(), (0, p5.Uo)());
            };
        },
        useObscuredNotice: oc.L,
        buildLayout: () => [_g, Na, Np, NO, NV],
    }),
    Nw = (0, E.i4)(h.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t["ldCE/p"]),
        icon: A_.UserIcon,
        buildLayout: () => [Nk],
    });
var NF = n(176781),
    NB = n(274372),
    Nz = n(572164),
    NY = n(614584),
    NX = n(696016);
let NH = [NX.zq, 25, 50, NX.Y2, NX.rv],
    NW = (0, E.sN)(h.X.CLIPS_BITRATE, {
        useTitle: () => U.intl.string(U.t["8bZyov"]),
        useSubtitle: () => U.intl.string(U.t["h8DSx/"]),
        minValue: NX.zq,
        maxValue: NX.rv,
        useDefaultValue: () => NX.Y2,
        getInitialValue: () => NB.Ay.getSettings().clipsQuality.bitratePercent ?? NX.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = NB.Ay.getSettings();
            NY.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: NH,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, Nz.E)(),
    });
var NK = n(226640);
let NZ = (0, E.Hn)(h.X.CLIPS_FRAME_RATE, {
        useTitle: () => U.intl.string(U.t["2wScL1"]),
        useSubtitle: () => U.intl.string(U.t["Rf9+fy"]),
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = NB.Ay.getSettings();
            NY.GS({ ...t, frameRate: e });
        },
        useOptions: NK.Fz,
        useDisabled: () => !(0, Nz.E)(),
    }),
    Nq = (0, E.E2)(h.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [],
        usePredicate: () => (0, f.bG)([NB.Ay], () => NB.Ay.getHardwareClassification()) === NX.k9.BELOW_MINIMUM,
        Component: () => (0, p.jsx)(s8.A, { look: s8.k.WARNING, children: U.intl.string(U.t.SIxrIF) }),
    }),
    NQ = (0, E.Hn)(h.X.CLIPS_LENGTH, {
        useTitle: () => U.intl.string(U.t.OgfUio),
        useSubtitle: () => U.intl.string(U.t.H7j4tY),
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().clipsLength),
        setValue: (e) => NY.h$(e),
        useOptions: NK.Qu,
        useDisabled: () => !(0, Nz.E)(),
    }),
    N$ = (0, E.E2)(h.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [],
        Component: () => (0, p.jsx)(s8.A, { look: s8.k.INFO, children: U.intl.string(U.t["Z+MfqT"]) }),
    }),
    NJ = (0, E.Hn)(h.X.CLIPS_RESOLUTION, {
        useTitle: () => U.intl.string(U.t.aFudZJ),
        useSubtitle: () => U.intl.string(U.t.nIrkW5),
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NB.Ay.getSettings();
            NY.GS({ ...t, resolution: e });
        },
        useOptions: NK.gF,
        useDisabled: () => !(0, Nz.E)(),
    }),
    N0 = (0, E.zD)(h.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => U.intl.string(U.t["3zwNf6"]),
        useSubtitle: () => U.intl.string(U.t.m4Cjj9),
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().remindersEnabled),
        setValue: (e) => NY.Mt(e),
        useDisabled: () => !(0, Nz.E)(),
    });
var N1 = n(704796);
let N2 = (0, E.zZ)(h.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => U.intl.string(N1.default.TGwzMe),
        buildLayout: () => [Nq, NQ, NZ, NJ, NW, N$, N0],
    }),
    N3 = (0, E.zD)(h.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NY.YP(e),
    }),
    N5 = (0, E.zD)(h.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => NY.Uh(e),
    }),
    N4 = (0, E.zZ)(h.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, f.bG)([lh.default], () => {
                let e = lh.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [N3, N5],
    });
var N6 = n(417270),
    N8 = n(847825);
let N7 = (0, E.E2)(h.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [U.intl.string(U.t.pf54EU), U.intl.string(U.t["QyB/jK"])],
        Component: () => {
            let e = (0, f.bG)([sl.Ay], () => sl.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0));
            tA()(null != e, "Save clip keybind unset");
            let t = !(0, Nz.E)(),
                n = T.useRef(null),
                i = T.useCallback(
                    (t) => {
                        iW.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = T.useCallback(() => {
                    iW.A.setKeybind({ ...e, shortcut: (0, sE.OH)(NX.Ot) });
                }, [e]);
            return (0, p.jsx)(sa.D, {
                label: U.intl.string(U.t.pf54EU),
                description: U.intl.string(U.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, p.jsx)("div", {
                    className: N8.g,
                    children: (0, p.jsx)(sA.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(sd.m, {
                                    text: U.intl.string(N1.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, p.jsx)(so.K, {
                                        icon: iX.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(N1.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, p.jsx)(sd.m, {
                                    text: U.intl.string(N1.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, p.jsx)(so.K, {
                                        icon: N6.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": U.intl.string(N1.default.Kyk1Tp),
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
    N9 = (0, E.E2)(h.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [U.intl.string(U.t["0U/hj7"]), U.intl.string(U.t["5zxkdo"])],
        usePredicate: sX.BW,
        Component: () => {
            let e = (0, f.bG)([sl.Ay], () => sl.Ay.getKeybindForAction(I.hCu.SAVE_CLIP, !0)),
                t = (0, f.bG)([sl.Ay], () => sl.Ay.getKeybindForAction(I.hCu.SAVE_SCREENSHOT, !0));
            (tA()(null != e, "Save clip keybind unset"), tA()(null != t, "Save screenshot keybind unset"));
            let n = T.useCallback(
                (e) => {
                    iW.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, p.jsx)(sa.D, {
                label: U.intl.string(U.t["0U/hj7"]),
                description: U.intl.string(U.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, p.jsx)("div", {
                    className: N8.g,
                    children: (0, p.jsx)(sA.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    Ce = (0, E.zD)(h.X.CLIPS_ENABLE, {
        useTitle: () => U.intl.string(U.t.h8rgrK),
        useSubtitle: () => U.intl.string(U.t["4Qw3NO"]),
        useValue: () => (0, Nz.E)(),
        setValue: (e) => NY.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    Ct = (0, E.zY)(h.X.CLIPS_GENERAL_CARD, { buildLayout: () => [Ce, N7, N9], headerSettingKey: Ce.key }),
    Cn = (0, E.zZ)(h.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["rWKv+e"]),
        useSubtitle: () => U.intl.format(N1.default["dh7g+S"], { learnMoreLink: eC.A.getArticleURL(I.MVz.CLIPS) }),
        buildLayout: () => [Ct],
    }),
    Ci = (0, E.E2)(h.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [U.intl.string(U.t.s4773E), U.intl.string(U.t.svjwGh)],
        Component: () => {
            let e = (0, f.bG)([NB.Ay], () => NB.Ay.getSettings().storageLocation),
                t = !(0, Nz.E)(),
                n = T.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nS.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && NY.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, p.jsx)(sa.D, {
                label: U.intl.string(U.t.s4773E),
                description: U.intl.string(U.t.svjwGh),
                layout: "vertical",
                children: (0, p.jsxs)(Z.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, p.jsx)(sS.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": U.intl.formatToPlainString(U.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, p.jsx)(v.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: i,
                            text: U.intl.string(N1.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    Cs = (0, E.zZ)(h.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => U.intl.string(N1.default["0Q+pdZ"]),
        buildLayout: () => [Ci],
    }),
    Cl = (0, E.t_)(h.X.CLIPS_PANEL, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        usePredicate: sX.sw,
        buildLayout: () => [Cn, N2, Cs, N4],
    }),
    Cr = (0, E.i4)(h.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.z2jK6X),
        icon: NF.x,
        buildLayout: () => [Cl],
    });
var Ca = n(254138),
    Co = n(290595);
let Cu = [];
var Cd = n(153488),
    Cc = n(308528),
    Cg = n(171316),
    Cm = n(558001);
n(866945);
var CA = n(835002);
function CE() {
    let e = (0, Cg.uM)(),
        t = (0, Nf.vx)(),
        n = T.useCallback(() => {
            ((0, tY.default)(),
                Cc.A.openPrivateChannel({ recipientIds: t }),
                (0, Cm.N)(CA.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CA.YX.LEARN_MORE));
        }, [t]),
        i = T.useCallback(() => {
            (0, Cm.N)(CA.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, CA.YX.VIEWED);
        }, []);
    return T.useMemo(() => {
        if (e)
            return {
                type: S.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: U.intl.format(Ny.default.i284fU, {
                    hook: (e, t) => (0, p.jsx)(nl.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let Ch = (0, E.zD)(h.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => U.intl.string(U.t.AGDDkH),
    useSubtitle: () => U.intl.string(U.t.kyo3dJ),
    useValue: () => M.Q$.useSetting(),
    setValue: (e) => NY.eQ({ allowVoiceRecording: e }),
});
var Cx = n(157559),
    CS = n(331887);
function Cp() {
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
let CT = (0, E.Tf)(h.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => U.intl.string(U.t.qfFFos),
        useSubtitle: function () {
            let e = Cp();
            if (e.allowed) return U.intl.format(U.t.NRI6vt, { article: eC.A.getArticleURL(I.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return U.intl.string(U.t.hIbRso);
                case "not_verified":
                    return U.intl.format(U.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, p.jsx)(
                                n3.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, nr.openUserSettings)(h.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = ic()(e.nextAllowed).format("MMMM Do YYYY");
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
        useDisabled: () => !Cp().allowed,
        useLoading: () => (0, f.bG)([CS.A], () => CS.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => U.intl.string(U.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, sx.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, p.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, p5.$I)(n)
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
                                            ? Cx.A.show({
                                                  title: U.intl.string(U.t.i2iul5),
                                                  body: U.intl.string(U.t["6Nmv4i"]),
                                              })
                                            : Cx.A.show({
                                                  title: U.intl.string(U.t.OjbtDm),
                                                  body: U.intl.string(U.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || U.intl.string(U.t["0F5Jyt"]);
                                        Cx.A.show({ title: U.intl.string(U.t.OjbtDm), body: t });
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
    Cf = (0, E.v_)(h.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => U.intl.string(U.t.D60Gfj),
        useSubtitle: () =>
            U.intl.format(U.t.dszICC, {
                onClickDisable: () => (0, nr.openUserSettings)(h.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, nr.openUserSettings)(h.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var CI = n(641216);
let C_ = (0, ui.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function CN() {
    let { enabled: e } = C_.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var CC = n(884705);
function Cy() {
    return (0, f.bG)([CC.A], () => CC.A.isTogglesDisabled());
}
function Cb() {
    return !M.vf.useSetting();
}
function Cv(e) {
    M.vf.updateSetting(!e);
}
function Cj() {
    let e = Cy(),
        t = M.H1.useSetting(),
        n = (0, Cg.uM)();
    return e || t || n;
}
let CO = (0, E.zD)(h.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["md5l4/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !CN(),
        useValue: Cb,
        setValue: Cv,
        useDisabled: Cj,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    }),
    CL = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => U.intl.string(U.t.CyLYKZ),
        useSubtitle: () =>
            U.intl.format(U.t["2QFDU/"], { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: CN,
        useValue: Cb,
        setValue: Cv,
        useDisabled: Cj,
        useSearchTerms: () => [U.intl.string(U.t.CyLYKZ)],
    });
function CR() {
    return !M.H1.useSetting();
}
function CD(e) {
    M.H1.updateSetting(!e);
}
function CP() {
    let e = Cy(),
        t = (0, Cg.uM)();
    return e || t;
}
let CG = (0, E.zD)(h.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () => U.intl.string(U.t.w4fvxe),
        usePredicate: () => !CN(),
        useValue: CR,
        setValue: CD,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: CP,
    }),
    CM = (0, E.zD)(h.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => U.intl.string(U.t.sJYh5t),
        useSubtitle: () =>
            U.intl.format(U.t.cf9mvV, { helpdeskArticle: eC.A.getArticleURL(I.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: CN,
        useValue: CR,
        setValue: CD,
        useSearchTerms: () => [U.intl.string(U.t.VkS7Yd)],
        useDisabled: CP,
    }),
    CU = (0, E.AK)(h.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: h.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = hJ(2);
            return U.intl.format(U.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = h0();
            return { type: S.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, f.bG)([i3.Ay], () => i3.Ay.getGamesSeen(!1).some((e) => !(0, hW.n1)(e))) && (0, nE.xl)(),
    }),
    CV = (0, E.gN)(h.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [CU] });
var Ck = n(972737);
let Cw = (0, E.zD)(h.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => U.intl.string(U.t.XuADY2),
        useSubtitle: () =>
            U.intl.format(U.t.FNqmmX, { helpdeskArticle: eC.A.getArticleURL(I.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, f.bG)([Cd.A], () => Cd.A.hasConsented(I.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Co.U)([I.YAq.USAGE_STATISTICS], []).catch(Ck.i)
                : (0, Ck.O)({
                      header: U.intl.string(U.t.OdPCbN),
                      body: U.intl.string(U.t.MGWabA),
                      confirmText: U.intl.string(U.t["D3+rU4"]),
                      cancelText: U.intl.string(U.t.kYpG0u),
                      onConfirm: () => (0, Co.U)([], [I.YAq.USAGE_STATISTICS]).catch(Ck.i),
                  });
        },
        useSearchTerms: () => [U.intl.string(U.t.XuADY2)],
        useDisabled: Cg.uM,
    }),
    CF = (0, E.zZ)(h.X.DATA_USAGE_CATEGORY, {
        useTitle: () => U.intl.string(U.t.QDAriI),
        useInlineNotice: CE,
        initialize: () => {
            Cd.A.fetchedConsents || (0, Co.Q)();
        },
        buildLayout: () => [Cf, Cw, CI._, CG, CO, ...Cu, Ch, CT, CV],
    });
var CB = n(63928);
let Cz = (0, E.zD)(h.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => U.intl.string(CB.default.F3llsQ),
    useSubtitle: () => U.intl.string(CB.default["6goWcz"]),
    useValue: M.Sy.useSetting,
    setValue: function (e) {
        (M.Sy.updateSetting(e),
            tu.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: h5.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function CY() {
    let e = M.JG.useSetting();
    return (0, f.yK)(
        [gT.Ay, sy.A],
        () => {
            let t = new Set(e);
            return gT.Ay.getFlattenedGuildIds().filter((e) => null != sy.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let CX = (0, E.AK)(h.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CY();
            if (0 === e.length) return U.intl.format(U.t.QJIJ5p, {});
            let t = sy.A.getGuild(e[0]),
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
                    ((e = CY()),
                    0 ===
                    (t = (0, f.yK)(
                        [sy.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => sy.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, p.jsx)(xa, { guild: t[0], size: hK.CD }),
                                    shape: hK.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, p.jsx)(xa, { guild: t[1], size: hK.CD }), shape: hK.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, p.jsx)(xa, { guild: t[0], size: hK.CD }),
                                    shape: hK.e0.SQUIRCLE,
                                },
                            });
            return { type: S.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: h.X.ACTIVITY_PRIVACY_PANEL,
    }),
    CH = (0, E.gN)(h.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [CX] }),
    CW = (0, E.Qx)(h.X.PROFILE_PRIVACY_SETTING, {
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
                (0, sx.openModalLazy)(async () => {
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
        useSearchTerms: () => [U.intl.string(U.t.Qnf32C)],
    }),
    CK = (0, E.zZ)(h.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.ul884f),
        useSubtitle: () =>
            U.intl.format(U.t.N4jSgR, {
                learnMoreUrl: eC.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CW, Cz, CH],
    });
var CZ = n(952270),
    Cq = n(48448);
let CQ = { [eQ.tR.REAL_MONEY_GAMING]: Cq.default.pmIitA },
    C$ = Object.keys(CQ).map(Number),
    CJ = (0, E.E2)(h.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [U.intl.string(Cq.default.foQaI1)],
        usePredicate: CN,
        Component: function () {
            let e = T.useMemo(
                    () =>
                        C$.map((e) => ({
                            id: String(e),
                            value: e,
                            label: U.intl.string(CQ[e]),
                            leading: CZ.EyeSlashIcon,
                        })),
                    [],
                ),
                t = M.XZ.useSetting();
            return (0, p.jsx)(pH.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(M.XZ.getSetting());
                    for (let e of C$) t.has(e) ? n.add(e) : n.delete(e);
                    M.XZ.updateSetting([...n]);
                },
                label: U.intl.string(Cq.default.foQaI1),
                description: U.intl.format(Cq.default["z/MfaY"], {
                    helpdeskArticle: eC.A.getArticleURL(I.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: U.intl.string(Cq.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    C0 = (0, E.zZ)(h.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => U.intl.string(Cq.default.XUj46U),
        usePredicate: CN,
        buildLayout: () => [CM, CL, CJ],
    });
var C1 = n(714763),
    C2 = n(814278),
    C3 = n(730852),
    C5 = n(913122),
    C4 = n(977997),
    C6 = n(144485);
async function C8(e, t) {
    if (e) {
        ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, C2.to)(1), t?.());
        } catch (t) {
            let e = new C5.LG(t);
            (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                Cx.A.show({
                    title: U.intl.string(U.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? U.intl.string(U.t.eAn6z2),
                }));
        }
    } else (ts.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
async function C7(e) {
    let t,
        n,
        i =
            ((t = C4.A.getVoiceStateForUser(dq.default.getId())),
            (n = sN.A.getChannel(t?.channelId)),
            dq.default.getSessionId() === t?.sessionId && null != n && n.type !== I.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
    null != i
        ? C6.A.openSecureFramesUpdateConfirmation({
              title: e ? U.intl.string(U.t.DRFN1B) : U.intl.string(U.t.q29xJz),
              subtitle: e ? U.intl.string(U.t.y015ZY) : U.intl.string(U.t.E66FQn),
              confirmText: U.intl.string(U.t.aTuFYT),
              onConfirm: async () => {
                  await C8(e, () => {
                      (C3.default.disconnect(), C3.default.selectVoiceChannel(i));
                  });
              },
          })
        : await C8(e);
}
n(603266);
let C9 = (0, E.zD)(h.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => U.intl.string(U.t["opi/XK"]),
    useSubtitle: () => U.intl.format(U.t["/T+ZlP"], { helpArticle: (0, C2.Lu)() }),
    useValue: function () {
        return (0, f.bG)([C1.A], () => C1.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        C7(e);
    },
});
var ye = n(787392);
function yt() {
    return (0, f.yK)([ye.A], () => ye.A.getUserIds());
}
var yn = n(803306),
    yi = n(966327),
    ys = n(774156);
function yl(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, ez.Ay)(),
        s = (0, f.bG)([lh.default], () => lh.default.getUser(t)),
        l = uv.Ay.getFormattedName(s),
        r = T.useCallback(() => {
            (0, C2.kj)(t);
        }, [t]),
        a = T.useCallback(() => (0, p7.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        T.useEffect(() => {
            (0, yn.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: ys.uW,
            children: [
                null != s && (0, p.jsx)(yi.A, { className: ys.my, user: s, size: b._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: ys.Qq,
                    children: [
                        (0, p.jsx)(n3.D, {
                            className: ys.Xh,
                            onClick: a,
                            children: (0, p.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, p.jsx)(Q.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: U.intl.format(U.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, p.jsx)(n3.D, { onClick: r, className: ys.Qz, children: (0, p.jsx)(su.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function yr(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, C2.tC)(i.timestamp),
        r = T.useCallback(() => {
            (0, C2.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: ys.Qq,
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: U.intl.format(U.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, p.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, p.jsx)(n3.D, {
                className: ys.Kk,
                onClick: r,
                children: (0, p.jsx)(uU.P, { size: "md", color: n0.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function ya(e) {
    let { userId: t } = e,
        n = (0, f.yK)([ye.A], () =>
            W()(ye.A.getUserVerifiedKeys(t))
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
            (0, p.jsx)(yl, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, p.jsxs)(
                    T.Fragment,
                    {
                        children: [
                            (0, p.jsx)(yr, { className: ys.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, p.jsx)("div", { className: ys.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var yo = n(464946),
    yu = n(492422);
let yd = (0, E.E2)(h.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [U.intl.string(U.t["5b3FNI"])],
        usePredicate: function () {
            let e = yt();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = yt();
            return (0, p.jsxs)(yo.h, {
                children: [
                    (0, p.jsx)(yo._, {
                        header: U.intl.string(U.t["5b3FNI"]),
                        description: U.intl.format(U.t.jrTSWU, { helpArticle: (0, C2.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: yu.A, children: (0, p.jsx)(ya, { userId: e }) }, e)),
                ],
            });
        },
    }),
    yc = (0, E.zZ)(h.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => U.intl.string(U.t.bTwjaz),
        usePredicate: () => (0, e6.isDesktop)(),
        buildLayout: () => [C9, yd],
    }),
    yg = (0, E.t_)(h.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        buildLayout: () => [CF, C0, CK, yc],
    }),
    ym = (0, E.i4)(h.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.OAuOHD),
        icon: Ca.m,
        buildLayout: () => [yg],
    });
var yA = n(476713);
let yE = (0, E.AK)(h.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.O65dzZ),
        useTitle: () => U.intl.string(U.t["f6kk+r"]),
        destinationKey: h.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yh = (0, E.gN)(h.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [yE] });
var yx = n(875444);
function yS(e, t) {
    let n = (0, f.bG)([xM.default], () => xM.default.getFetchState()),
        i = (0, f.bG)([xM.default], () =>
            e ? xM.default.getNewestTokensForNonChildrenApplications() : xM.default.getNewestTokens(),
        ),
        s = T.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, yx.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        T.useEffect(() => {
            t || x_.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== xM.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
    );
}
var yp = n(514479);
function yT() {
    return (0, p.jsxs)("div", {
        className: yp.d,
        children: [
            (0, p.jsx)(Q.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: yp.x,
                children: U.intl.string(U.t["+0U77d"]),
            }),
            (0, p.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: U.intl.format(U.t.V8wClM, {
                    helpdeskArticle: eC.A.getArticleURL(I.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let yf = (0, E.E2)(h.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = yS(!0, !0);
        return e ? (0, p.jsx)(oT.y, {}) : (0, p.jsx)(yT, {});
    },
    useSearchTerms: () => [U.intl.string(U.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = yS(!0, !0);
        return e || 0 === t.length;
    },
});
function yI() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = yS(!0, !0);
    return !e && t.length > 0;
}
let y_ = (0, E.zD)(h.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => U.intl.string(U.t.W8JtfT),
        useSubtitle: () => U.intl.string(U.t.a99KKy),
        useSearchTerms: () => [U.intl.string(U.t["Uv/eTx"])],
        useValue: () => M.Zk.useSetting(),
        setValue: (e) => M.Zk.updateSetting(e),
        usePredicate: yI,
    }),
    yN = (0, E.Qx)(h.X.IN_GAME_DMS_SETTING, {
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
        usePredicate: yI,
    });
function yC() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = yS(!0, !0);
    return {
        sortedGames: T.useMemo(() => e.toSorted((e, t) => oL.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yy = n(306537);
function yb(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: s, iconAlign: l } = e;
    return (
        (0, eI.Ay)(() => {
            (0, Cm.N)(s, CA.YX.VIEWED);
        }),
        (0, p.jsx)(iH.w, { type: "info", iconAlign: l, message: t, action: { text: n, onClick: i }, role: "none" })
    );
}
function yv(e, t) {
    return {
        handleLearnMore: T.useCallback(() => {
            (t(), (0, Cm.N)(e, CA.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: T.useCallback(() => {
            (Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yy.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cm.N)(e, CA.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function yj() {
    let e,
        t = (0, Cg.uM)(),
        n = (0, IH.fk)(),
        i = (0, IX.b8)(),
        s = (0, NN.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, IR.n)(IO.Vc)) return e;
    }
}
var yO = n(687123),
    yL = n(444802);
function yR() {
    let e = (0, yL.WX)();
    T.useEffect(() => {
        (0, Cm.N)(CA.YA.AGE_CONFIRMATION_NOTICE, CA.YX.VIEWED);
    }, []);
    let t = T.useCallback(() => {
            (window.open(eC.A.getArticleURL(e), "_blank"), (0, Cm.N)(CA.YA.AGE_CONFIRMATION_NOTICE, CA.YX.LEARN_MORE));
        }, [e]),
        n = T.useCallback(() => {
            (Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yy.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Cm.N)(CA.YA.AGE_CONFIRMATION_NOTICE, CA.YX.CONFIRM_AGE));
        }, []);
    return (0, p.jsx)(iH.w, {
        type: "info",
        message: U.intl.format(U.t.mFgsfg, { hook: (e, n) => (0, p.jsx)(nl.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: U.intl.string(U.t.FDSSia), onClick: n },
    });
}
function yD() {
    let e = (0, IH.aX)(yO.t.REACTIVE_CHECK),
        t = (0, IX.b8)();
    return T.useMemo(() => {
        if (e && !t) return { type: S.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: yR };
    }, [e, t]);
}
var yP = n(323073),
    yG = n(386171),
    yM = n(96607);
let yU = (0, E.zD)(h.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => U.intl.string(U.t.gvC6q7),
        useSubtitle: () => U.intl.string(U.t.zirUC1),
        useValue: yG.hT,
        useDisabled: function () {
            let e = (0, yM.A)() ?? !0,
                t = (0, yP.sP)(),
                n = (0, IX.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, yP.p5)() && e
                ? Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yy.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : M.Qe.updateSetting(e);
        },
    }),
    yV = (0, E.zD)(h.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => U.intl.string(U.t["L+yTsa"]),
        useSubtitle: () => U.intl.string(U.t["t6i/jW"]),
        useValue: yG.tI,
        useDisabled: function () {
            let e = (0, yM.A)() ?? !0,
                t = (0, yP.sP)(),
                n = (0, IX.yM)();
            return T.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, yP.p5)() && e
                ? Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yy.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : M.Kg.updateSetting(e);
        },
    }),
    yk = (0, E.AK)(h.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t.hOXd45),
        destinationKey: h.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    yw = (0, E.gN)(h.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [yk] });
n(667532);
var yF = n(390248),
    yB = n(632119),
    yz = n(945276),
    yY = n(389737),
    yX = n(566769);
function yH() {
    let e,
        t = (0, yz.A)() ?? !0,
        n = (0, Cg.uM)(),
        i = (0, Cg.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, a9.cf)([aC.A], () => aC.A.settings.textAndImages?.explicitContentSettings ?? (0, yB.C$)())),
        {
            explicitContentGuilds: (0, yB.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, yB.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, yB.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yF.hK)() && t.includes(eQ.TO.SHOW)
            ? Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yy.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yB.Jz)(e);
    }
    let o = [
            { value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: eQ.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: eQ.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(Ny.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yY.E, {
        description: U.intl.string(U.t.Wnojv1),
        children: [
            (0, p.jsx)(yX.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yX.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yX.A, {
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
function yW() {
    let e,
        t = (0, yz.A)() ?? !0,
        n = (0, Cg.uM)(),
        i = (0, Cg.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, a9.cf)([aC.A], () => aC.A.settings.textAndImages?.goreContentSettings ?? (0, yL.T4)())),
        {
            goreContentGuilds: (0, yL.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, yL.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, yL.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, yF.hK)() && t.includes(eQ.TO.SHOW)
            ? Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yy.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, yL.qY)(e);
    }
    let o = [
            { value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) },
            { value: eQ.TO.BLOCK, label: U.intl.string(U.t["D/157Y"]) },
        ],
        u = [{ value: eQ.TO.BLUR, label: U.intl.string(U.t.S49Uad) }],
        d = { value: eQ.TO.SHOW, label: U.intl.string(U.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? U.intl.string(Ny.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(yY.E, {
        description: U.intl.string(U.t.XgH9eh),
        children: [
            (0, p.jsx)(yX.A, {
                title: U.intl.string(U.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yX.A, {
                title: U.intl.string(U.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(yX.A, {
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
var yK = n(875162),
    yZ = n(636745);
let yq = (0, E.E2)(h.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, yL.WX)(),
            t = T.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: U.intl.string(U.t.GYpoAq),
                        component: yH,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: U.intl.string(U.t["16/3Bi"]),
                        component: yW,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, p.jsxs)(yo.h, {
            children: [
                (0, p.jsx)(yo._, {
                    header: U.intl.string(U.t["Hj/But"]),
                    description: U.intl.format(U.t.dliU4j, { learnMoreLink: eC.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(yK.A, { tabs: t, orientation: "vertical", tabsClassName: yZ.v }),
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
var yQ = n(639555),
    y$ = n(617641),
    yJ = n(546140),
    y0 = n(406935),
    y1 = n(594061);
let y2 = (0, E.zD)(h.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => U.intl.string(U.t.qFsx5q),
        useSubtitle: () => U.intl.format(U.t.lunaRv, { learnMoreLink: eC.A.getArticleURL(I.MVz.SAFETY_ALERTS) }),
        useValue: yJ.L,
        setValue: function (e) {
            return y1.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = y0._t.create({ value: e });
                },
                y1.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, y$.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, yQ.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, yz.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    y3 = (0, E.zZ)(h.X.CONTENT_CATEGORY, {
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
                x = CE(),
                f =
                    ((s = (0, Cg.uM)()),
                    (l = (0, IH.fk)()),
                    (r = (0, IX.b8)()),
                    (a = (0, NN.Z)()),
                    (o = yv(CA.YA.AGE_CONFIRMATION_NOTICE, IL)),
                    (u = yv(CA.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Ib.M0)),
                    (d = T.useCallback(() => {
                        (0, Cm.N)(CA.YA.AGE_CONFIRMATION_NOTICE, CA.YX.VIEWED);
                    }, [])),
                    (c = T.useCallback(() => {
                        (0, Cm.N)(CA.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CA.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (!s && (0, IR.n)(IO.Vc)) {
                            if (l && !r)
                                return {
                                    type: S.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    iconAlign: "center",
                                    trackView: d,
                                    text: U.intl.format(IP.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: U.intl.string(IP.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: S.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    iconAlign: "start",
                                    trackView: c,
                                    text: U.intl.format(IP.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { text: U.intl.string(U.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                I =
                    ((e = (0, NN.Z)()),
                    (t = (0, yL.WX)()),
                    (n = T.useCallback(() => {
                        (window.open(eC.A.getArticleURL(t), "_blank"),
                            (0, Cm.N)(CA.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CA.YX.LEARN_MORE));
                    }, [t])),
                    (i = T.useCallback(() => {
                        (0, Cm.N)(CA.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, CA.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (e)
                            return {
                                type: S.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: i,
                                text: U.intl.format(U.t.EUo0yj, {
                                    hook: (e, t) => (0, p.jsx)(nl.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                _ =
                    ((g = (0, IH.SJ)()),
                    (m = (0, IX.b8)()),
                    (A = g && !m),
                    (E = T.useCallback(() => {
                        (Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yy.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, Cm.N)(CA.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CA.YX.LEARN_MORE));
                    }, [])),
                    (h = T.useCallback(() => {
                        (0, Cm.N)(CA.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, CA.YX.VIEWED);
                    }, [])),
                    T.useMemo(() => {
                        if (A)
                            return {
                                type: S.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: h,
                                text: U.intl.format(U.t.OX4ybh, {
                                    hook: (e, t) => (0, p.jsx)(nl.Anchor, { onClick: E, children: e }, t),
                                }),
                            };
                    }, [E, A, h])),
                N = yD();
            return x ?? f ?? N ?? _ ?? I;
        },
        buildLayout: () => [yq, y2, yU, yV, yw],
    });
var y5 = n(923457),
    y4 = n(750714);
let y6 = (0, E.Qx)(h.X.DM_SPAM_SETTING, {
    useTitle: () => U.intl.string(U.t.puwSkY),
    useSubtitle: () => U.intl.string(U.t["+sXN3T"]),
    useValue: function () {
        let e = M.he.useSetting(),
            t = M.cj.useSetting(),
            n = (0, f.bG)([lh.default], () => lh.default.getCurrentUser()),
            i = (0, IH.yv)(y5.p.SPAM_FILTERS);
        return e !== eQ.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eQ.he.FRIENDS_AND_NON_FRIENDS
              : (y4.xY.get(t) ?? eQ.he.NON_FRIENDS);
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
var y8 = n(189883);
let y7 = (0, E.zD)(h.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => U.intl.string(U.t["7x9dyE"]),
    useValue: function () {
        let e = M.FA.useSetting();
        return T.useMemo(() => (0, ie.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        M.FA.updateSetting(e ? I.yKI : I.yKI & ~I.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, Cg.uM)();
    },
});
var y9 = n(665260);
let be = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => U.intl.string(U.t.NfeuZ3),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, ie.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? y9.UI(t, I.dzt.MUTUAL_FRIENDS) : y9.iE(t, I.dzt.MUTUAL_FRIENDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Cg.uM)();
        },
    }),
    bt = (0, E.zD)(h.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => U.intl.string(U.t.qsMfsH),
        useSubtitle: () => U.intl.string(U.t["6DqAp0"]),
        useValue: function () {
            let e = M.FA.useSetting(),
                t = T.useMemo(() => (0, ie.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = M.FA.getSetting();
            M.FA.updateSetting(e ? y9.UI(t, I.dzt.MUTUAL_GUILDS) : y9.iE(t, I.dzt.MUTUAL_GUILDS, I.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, Cg.uM)();
        },
    }),
    bn = (0, E.FW)(h.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => U.intl.string(U.t.wTdS6S),
        buildLayout: () => [y7, be, bt],
    });
var bi = n(420825);
let bs = (0, E.zD)(h.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => U.intl.string(U.t["jK+wdr"]),
        useSubtitle: () => U.intl.string(U.t["RYh/pW"]),
        useValue: () => !(0, bi.q)(),
        setValue: function (e) {
            M.Zd.updateSetting(!e);
        },
    }),
    bl = (0, E.zZ)(h.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = y8.A.useConfig({ location: "Friend Request Setting" });
            return e ? U.intl.string(U.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => U.intl.string(U.t.fyA115),
        useInlineNotice: CE,
        buildLayout: () => [bn, bs],
    });
var br = n(994500),
    ba = n(428678),
    bo = n(49229),
    bu = n(730134),
    bd = n(276573);
function bc(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: bd.wx,
        children: [
            (0, p.jsx)("div", {
                className: bd.zc,
                children: i ? (0, p.jsx)(ba.K, {}) : (0, p.jsx)(CZ.EyeSlashIcon, {}),
            }),
            (0, p.jsxs)("div", {
                className: bd.Qq,
                children: [
                    (0, p.jsx)(Q.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: U.intl.string(i ? U.t.PFOUKW : U.t["93ZDWE"]),
                    }),
                    (0, p.jsx)(Q.E, {
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
function bg(e) {
    let { userId: t, last: n } = e,
        i = (0, f.bG)([br.A], () => br.A.isBlocked(t)),
        s = (0, f.bG)([lh.default], () => lh.default.getUser(t)),
        [l, r] = T.useState(!1),
        a = T.useCallback(() => {
            (r(!0),
                i
                    ? bo.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : bo.A.unignoreUser(t, tV.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, p.jsxs)("div", {
              className: iu()(bd.nM, { [bd.fW]: n }),
              children: [
                  (0, p.jsxs)("div", {
                      className: bd.eF,
                      children: [
                          (0, p.jsx)(bu.A, { user: s, size: b._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: bd.Qq,
                              children: [
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, p.jsx)(Q.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, p.jsx)(v.$, {
                      variant: "secondary",
                      text: U.intl.string(i ? U.t.XyHpKH : U.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function bm(e) {
    let { userIds: t, listType: n } = e,
        [i, s] = T.useState(5);
    return (0, p.jsx)(yo.h, {
        children: (0, p.jsxs)("div", {
            className: bd.Nr,
            children: [
                (0, p.jsx)(bc, { listType: n, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: bd.jS,
                    children: t.slice(0, i).map((e, n) => (0, p.jsx)(bg, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, p.jsx)("div", {
                          className: bd.vM,
                          children: (0, p.jsx)(n3.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: bd.Qf,
                              children: (0, p.jsx)(Q.E, {
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
let bA = (0, E.E2)(h.X.BLOCKED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t.PFOUKW)],
        usePredicate: () => (0, f.bG)([br.A], () => br.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([br.A], () => br.A.getBlockedIDs());
            return (0, p.jsx)(bm, { userIds: e, listType: "blocked" });
        },
    }),
    bE = (0, E.E2)(h.X.IGNORED_USERS, {
        useSearchTerms: () => [U.intl.string(U.t["93ZDWE"])],
        usePredicate: () => (0, f.bG)([br.A], () => br.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, f.yK)([br.A], () => br.A.getIgnoredIDs());
            return (0, p.jsx)(bm, { userIds: e, listType: "ignored" });
        },
    }),
    bh = (0, E.zZ)(h.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => U.intl.string(U.t["+Iryf3"]),
        useSubtitle: () =>
            U.intl.format(U.t["0aNQo9"], { helpArticle: eC.A.getArticleURL(I.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [bA, bE],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, f.cf)([br.A], () => ({
                hasBlockedUsers: br.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: br.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var bx = n(22385),
    bS = n(556534),
    bp = n(111159),
    bT = n(152056),
    bf = n(428031),
    bI = n(978433);
let b_ = { label: () => U.intl.string(U.t["32u1Dx"]), value: bx.YG };
var bN = n(307863),
    bC = n(954225);
function by() {
    return (0, bN.e)() ? U.intl.string(U.t.PMsfcH) : U.intl.string(U.t.RAQUSN);
}
function bb(e, t) {
    tu.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let bv = (0, E.zD)(h.X.PERMISSIONS_DMS_SETTING, {
    useTitle: by,
    useSubtitle: function () {
        let e = (0, bS.Tx)(),
            t = (0, bS.q9)(),
            n = (0, bN.e)();
        return e === bx.YG
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
        let e = (0, bS.Tx)(),
            t = M.$s.useSetting().includes(e),
            n = (0, bf.K)();
        return e === bx.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, Cg.uM)();
        return (0, bS.Tx)() === bx.YG && e;
    },
    setValue: function (e) {
        let t = bx.xk.getState().selectedGuildId;
        if (t === bx.YG) {
            var n;
            ((n = !e),
                (0, Ck.O)({
                    header: U.intl.string(U.t["uUr+GR"]),
                    body: U.intl.string(U.t.hjGJBp),
                    confirmText: U.intl.string(U.t.gm1Vej),
                    cancelText: U.intl.string(U.t.p89ACt),
                    confirmButtonColor: l$.$n.Colors.BRAND,
                    onConfirm: function () {
                        (M.n6.updateSetting(n), bb(n, !1));
                    },
                    onCancel: function () {
                        (M.n6.updateSetting(n), M.$s.updateSetting(n ? sy.A.getGuildIds() : []), bb(n, !0));
                    },
                }));
        } else {
            let n = (0, ie.Tb)();
            (e ? n.delete(t) : n.add(t),
                M.$s.updateSetting(Array.from(n)),
                tu.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: bC.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var bj = n(116774),
    bO = n(953298);
function bL(e, t) {
    tu.default.track(I.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function bR() {
    return U.intl.string(U.t["3o2ojh"]);
}
let bD = (0, E.zD)(h.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bR,
        useSubtitle: function () {
            let e = (0, bS.q9)(),
                t = eC.A.getArticleURL(I.MVz.MESSAGE_REQUESTS);
            return e
                ? U.intl.format(U.t.WpnWLc, { helpdeskArticle: t })
                : U.intl.format(U.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, bS.Tx)(),
                t = (0, bf.K)(),
                n = M.$s.useSetting().includes(e),
                i = (0, bj.s)(),
                s = (0, Cg.uM)(),
                l = M.YX.useSetting(),
                r = M.Zr.useSetting().includes(e);
            return !!i || (e === bx.YG && s ? !l : e === bx.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, bS.Tx)(),
                t = (0, Cg.uM)(),
                n = (0, bf.K)(),
                i = M.$s.useSetting().includes(e),
                s = (0, bj.s)();
            return e === bx.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = bx.xk.getState().selectedGuildId;
            if (!e && (0, bO.w)())
                return void Iv.A.showAgeVerificationGetStartedModal({ entryPoint: yy.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === bx.YG) {
                var n;
                ((n = !e),
                    (0, Ck.O)({
                        header: U.intl.string(U.t.yAfu1p),
                        body: U.intl.string(U.t.Ry2z74),
                        confirmText: U.intl.string(U.t.gm1Vej),
                        cancelText: U.intl.string(U.t.p89ACt),
                        confirmButtonColor: l$.$n.Colors.BRAND,
                        onConfirm: function () {
                            (M.YX.updateSetting(n), bL(n, !1));
                        },
                        onCancel: function () {
                            (M.YX.updateSetting(n), M.Zr.updateSetting(n ? sy.A.getGuildIds() : []), bL(n, !0));
                        },
                    }));
            } else {
                let n = (0, ie.xo)();
                (e ? n.delete(t) : n.add(t),
                    M.Zr.updateSetting(Array.from(n)),
                    tu.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bC.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eO.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    bP = (0, E.E2)(h.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [by(), bR()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, bx.xk)(),
                s = (0, f.bG)([gT.Ay], () => gT.Ay.getFlattenedGuildIds()),
                l = (0, f.bG)([sy.A], () => sy.A.getGuilds()),
                r =
                    ((e = M.$s.useSetting()),
                    (t = (0, bf.K)()),
                    (0, f.bG)(
                        [sy.A],
                        () => {
                            let n = new Set(e);
                            return sy.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = s[0];
            T.useEffect(
                () =>
                    bT.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = bx.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === bx.YG && null != a
                                ? i(a)
                                : "" === e && n !== bx.YG && i(bx.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = T.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...b_,
                            id: b_.value,
                            label: b_.label(),
                            leading: (0, p.jsx)("div", {
                                className: bI.KP,
                                children: (0, p.jsx)(bp.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: bI.cl,
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
                                    leading: (0, p.jsx)(gR.Ay, {
                                        className: bI.cl,
                                        guild: n,
                                        size: gR.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === bx.YG && r > 0;
            return (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(pH.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    u &&
                        (0, p.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: bI.h_,
                            children: U.intl.format(U.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, p.jsx)(
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
    bG = (0, E.E2)(h.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, bS.Tx)(),
                t = yj();
            return e === bx.YG && null != t;
        },
        Component: function () {
            let e = yj(),
                t = yv(CA.YA.AGE_CONFIRMATION_NOTICE, IL),
                n = yv(CA.YA.CONTENT_AND_SOCIAL_NOTICE, Ib.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, p.jsx)(yb, {
                        noticeType: CA.YA.AGE_CONFIRMATION_NOTICE,
                        iconAlign: "center",
                        body: U.intl.format(IP.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: U.intl.string(IP.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, p.jsx)(yb, {
                        noticeType: CA.YA.CONTENT_AND_SOCIAL_NOTICE,
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
    bM = (0, E.zZ)(h.X.PERMISSIONS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.Y5GYcX),
        useSubnavLabel: () => U.intl.string(U.t.YUU0RF),
        useInlineNotice: function () {
            let e = CE(),
                t = yD();
            if ((0, bS.Tx)() === bx.YG) return e ?? t;
        },
        buildLayout: () => [bP, bv, bD, bG],
    }),
    bU = (0, E.zZ)(h.X.SPAM_FILTERS_CATEGORY, { useTitle: () => U.intl.string(U.t.Qwuoic), buildLayout: () => [y6] }),
    bV = (0, E.zZ)(h.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = yC();
            function t(e, t) {
                return (0, p.jsx)(
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
                let { sortedGames: e } = yC();
                return T.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, p.jsx)("img", {
                                src: G.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: hK.CD,
                                height: hK.CD,
                            }),
                            shape: hK.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, p.jsx)("img", {
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
            return { type: S.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [U.intl.string(U.t.YpCiMt)],
        initialize: () => {
            x_.A.fetch();
        },
        buildLayout: () => [y_, yN, yf, yh],
    }),
    bk = (0, E.t_)(h.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        buildLayout: () => [y3, bU, bM, bl, bV, bh],
    }),
    bw = (0, E.i4)(h.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.Cz07t8),
        icon: yA.l,
        buildLayout: () => [bk],
    });
var bF = n(782603),
    bB = n(899847),
    bz = n(695515);
let bY = (0, E.Hn)(h.X.MOBILE_NOTIFICATION_DELAY, {
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
    bX = (0, E.zD)(h.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => U.intl.string(U.t["btbS+Z"]),
        useSubtitle: () =>
            U.intl.format(U.t.Q5crhR, { onClick: () => (0, nr.openUserSettings)(h.X.TTS_PLAYBACK_RATE) }),
        useValue: M.on.useSetting,
        setValue: M.on.updateSetting,
    }),
    bH = (0, E.Qx)(h.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.JZxxGx),
        useSubtitle: () => U.intl.string(U.t.HDLtJl),
        useValue: () => (0, f.bG)([aG.A], () => aG.A.getTTSType()),
        setValue: (e) => aw.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: U.intl.string(U.t.B1AGeJ), value: I.aVn.ALL_CHANNELS },
                { name: U.intl.string(U.t.uzZg9e), value: I.aVn.SELECTED_CHANNEL },
                { name: U.intl.string(U.t.DYO5Oi), value: I.aVn.NEVER },
            ];
        },
        usePredicate: () => X.$j,
    }),
    bW = h.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    bK = (0, E.bd)(bW, {
        useTitle: (e) => (e ? U.intl.string(U.t.RyimDk) : U.intl.string(U.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tf(bW, {
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
        buildLayout: () => [bY, bX, bH],
    }),
    bZ = (0, E.zZ)(h.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => U.intl.string(U.t["31DySj"]),
        buildLayout: () => [bK],
    }),
    bq = (0, E.zD)(h.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => U.intl.string(U.t.VH8AIJ),
        useSubtitle: () => U.intl.string(U.t["9K4qwX"]),
        useValue: function () {
            return (0, f.bG)([aG.A], () => !aG.A.getDisableUnreadBadge());
        },
        setValue: (e) => aw.default.setDisableUnreadBadge(!e),
    }),
    bQ = (0, E.zZ)(h.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => U.intl.string(U.t.l6w3Vj),
        buildLayout: () => [bq],
    });
var b$ = n(840559),
    bJ = n(997187);
let b0 = (0, ui.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var b1 = n(723923);
let b2 = b1.px.map((e) =>
        (0, E.zD)(`${h.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, f.cf)([bJ.A], () => bJ.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, b$.CA)(e.category, t),
        }),
    ),
    b3 = (0, E.Tf)(h.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => U.intl.string(U.t.Ra9Pwk),
        useSubtitle: () => U.intl.string(U.t.iYjQ8X),
        useLabel: () => U.intl.string(U.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, f.cf)([bJ.A], () => bJ.A.getEmailSettings());
            return b1.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, b$.NI)(),
        useVariant: () => "critical-secondary",
    }),
    b5 = (0, E.zZ)(h.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => U.intl.string(U.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = b0.useConfig({ location: "Email Settings Category" });
            return e ? U.intl.string(U.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = bJ.A.getEmailSettings();
            e || (0, b$.cR)();
        },
        buildLayout: () => [...b2, b3],
    }),
    b4 = (0, E.zD)(h.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["/0WCll"]),
        useSubtitle: () => U.intl.string(U.t.wF9ih3),
        useValue: function () {
            return (0, f.bG)([aG.A], () => aG.A.getDesktopType()) !== I.nRU.NEVER;
        },
        setValue: (e) => aw.default.setDesktopType(e ? I.nRU.ALL : I.nRU.NEVER),
    });
var b6 = n(832712),
    b8 = n(543465),
    b7 = n(790782);
let b9 = (0, E.zD)(h.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => U.intl.string(U.t["k6m/si"]),
    useSubtitle: () => U.intl.string(U.t.LGynPs),
    useValue: () => (0, f.bG)([b8.Ay], () => b8.Ay.useNewNotifications),
    setValue: function (e) {
        (b6.A.setAccountFlag(h5.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (he.w.set("turnedOffNewNotifications", !0),
                tu.default.track(I.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sy.A.getGuildsArray().filter(
                        (e) => b8.Ay.resolveGuildUnreadSetting(e) === b7.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, f.bG)(
            [lh.default, b8.Ay],
            () =>
                lh.default.getCurrentUser()?.isStaff() ||
                lh.default.getCurrentUser()?.isStaffPersonal() ||
                b8.Ay.useNewNotifications,
        ),
});
var ve = n(534654);
let vt = (0, E.zD)(h.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => U.intl.string(U.t.z9h8Ym),
        useSubtitle: () => U.intl.string(U.t.TummoQ),
        useValue: () => (0, f.bG)([aG.A], () => aG.A.screenDowntimeReminder),
        setValue: (e) => aw.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, ve.A)(),
                t = (0, Nf.Du)();
            return e && t;
        },
    }),
    vn = (0, E.zD)(h.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => U.intl.string(U.t.onrAy7),
        useSubtitle: () => U.intl.string(U.t["/071J7"]),
        useValue: M.gY.useSetting,
        setValue: (e) => M.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, ve.A)(),
                t = (0, Nf.Du)();
            return e && t;
        },
    }),
    vi = (0, E.zD)(h.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.NjOMvh),
        useValue: M.oz.useSetting,
        setValue: function (e) {
            (M.oz.updateSetting(e),
                tu.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [U.intl.string(U.t.hi4dSk)],
    }),
    vs = (0, E.zD)(h.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.sQQgFj),
        useValue: M.NR.useSetting,
        setValue: function (e) {
            (M.NR.updateSetting(e),
                tu.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    vl = (0, E.zD)(h.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.FSNIvs),
        useValue: M.Yh.useSetting,
        setValue: function (e) {
            (M.Yh.updateSetting(e),
                tu.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    vr = (0, E.zD)(h.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.xBLMhQ),
        useValue: M.T3.useSetting,
        setValue: function (e) {
            (M.T3.updateSetting(e),
                tu.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var va = n(815807);
let vo = (0, E.Hn)(h.X.REACTION_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: U.intl.string(U.t["9x/RtT"]), value: eQ.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: U.intl.string(U.t.fJAbQd), value: eQ.Tz.ONLY_DMS },
            { id: "disabled", label: U.intl.string(U.t["xu+UDU"]), value: eQ.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: M.Zp.useSetting,
        setValue: (e) => (0, va.n4)(e, M.Zp.getSetting()),
    }),
    vu = (0, E.zD)(h.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t["k51K1+"]),
        useValue: M.Qr.useSetting,
        setValue: function (e) {
            (M.Qr.updateSetting(e),
                tu.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    vd = (0, ui.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    vc = (0, E.zD)(h.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.G8NPz6),
        useValue: M.zS.useSetting,
        setValue: function (e) {
            (M.zS.updateSetting(e),
                tu.default.track(I.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: h5.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => vd.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    vg = (0, E.FW)(h.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => U.intl.string(U.t.FEVRDV),
        buildLayout: () => [vl, vi, vs, vu, vc, vr, vo],
    }),
    vm = (0, E.zD)(h.X.TASK_BAR_FLASHING, {
        useTitle: () => U.intl.string(U.t.xSmFQG),
        useSubtitle: () => U.intl.string(U.t.bd4j4x),
        useValue: () => (0, f.bG)([aG.A], () => aG.A.taskbarFlash),
        setValue: (e) => aw.default.setTaskbarFlash(e),
        usePredicate: () => (0, nE.uF)(),
    }),
    vA = (0, E.zZ)(h.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => U.intl.string(U.t["/dp6yY"]),
        buildLayout: () => [b4, vm, vg, b9, vn, vt],
    });
var vE = n(965957),
    vh = n(312671),
    vx = n(235079);
let vS = (0, E.zD)(h.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aM.A.useHolidaySoundpack();
        return null == e ? "" : U.intl.format(U.t["E/OyBr"], { soundpack: U.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, f.bG)([vh.A], () => vh.A.getSoundpack()),
            t = aM.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aM.A.getHolidaySoundpack();
        (tA()(null != t, "predicate should fail if no soundpack is available"), (0, vE.p)(e ? t : vx.i.CLASSIC));
    },
    usePredicate: aM.A.useIsEligible,
});
var vp = n(970931);
let vT = {
        useTitle: () => U.intl.string(U.t.jD1qzM),
        sound: "message1",
        useDisabled: vp.kB,
        useDisabledMessage: () => ((0, vp.kB)() ? U.intl.string(U.t.cIRG0s) : void 0),
    },
    vf = { useTitle: () => U.intl.string(U.t.XBrJT6), sound: "call_ringing" },
    vI = (0, E.zD)(h.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => U.intl.string(U.t.TzjwV9),
        useSubtitle: () => U.intl.format(U.t.OOiGCM, { onClick: () => az("message3") }),
        useValue: () =>
            (0, f.bG)([aG.A], () => aG.A.getNotifyMessagesInSelectedChannel() && !aG.A.getDisableAllSounds()),
        setValue: (e) => aw.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, f.bG)([aG.A], () => aG.A.getDisableAllSounds()),
    }),
    v_ = (0, E.zD)(h.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => U.intl.string(U.t["2ZhCOd"]),
        useSubtitle: () => U.intl.string(U.t.EAKdPr),
        useValue: () => (0, f.bG)([aG.A], () => aG.A.getDisableAllSounds()),
        setValue: (e) => aw.default.toggleDisableAllSounds(e),
    }),
    vN = (0, E.D1)(h.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aB();
            };
        },
        buildLayout: () => [aY(vT), vI, aY(vf), v_],
    }),
    vC = (0, E.AK)(h.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => U.intl.string(U.t["MMy+lm"]),
        useSearchTerms: () => [U.intl.string(U.t["MMy+lm"])],
        destinationKey: h.X.SOUNDS_CATEGORY,
    }),
    vy = (0, E.gN)(h.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [vC] }),
    vb = (0, E.zZ)(h.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => U.intl.string(U.t.LweOYy),
        buildLayout: () => [vS, vN, vy],
    }),
    vv = (0, E.t_)(h.X.NOTIFICATIONS_PANEL, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        initialize: () => {
            null != bz.A.getAgeGroup() || bz.A.isLoading() || (bz.A.canRefetch() && bB.Ay.initialPageLoad());
        },
        buildLayout: () => [vA, vb, bQ, b5, bZ],
    }),
    vj = (0, E.i4)(h.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => U.intl.string(U.t.HcoRu0),
        icon: bF.BellIcon,
        buildLayout: () => [vv],
    }),
    vO = (0, E.WI)(h.X.USER_SECTION, {
        useTitle: () => U.intl.string(U.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Nw, ym, bw, vj, Cr],
    });
var vL = n(387758),
    vR = n(271866),
    vD = n(147964),
    vP = n(868511);
let vG = (0, E.zD)(h.X.APPLICATION_TEST_MODE, {
        useTitle: () => U.intl.string(U.t.erOqlh),
        useSubtitle: () => U.intl.string(U.t["52hMnD"]),
        usePredicate: M.Q_.useSetting,
        useValue: () => (0, f.bG)([vD.A], () => null != vD.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sx.openModal)((e) => (0, p.jsx)(vP.A, { ...e })) : vR.cL();
        },
    }),
    vM = (0, E.zD)(h.X.DEVELOPER_MODE, {
        useTitle: () => U.intl.string(U.t.ObIb1Q),
        useSubtitle: () => U.intl.format(U.t["CY6q/Q"], { apiDocsUrl: I.X7G.API_DOCS }),
        useValue: M.Q_.useSetting,
        setValue: M.Q_.updateSetting,
        usePredicate: () => uN.p5,
    }),
    vU = (0, E.zZ)(h.X.DEVELOPER_CATEGORY, { buildLayout: () => [vM, vG] }),
    vV = (0, E.t_)(h.X.DEVELOPER_PANEL, { useTitle: () => U.intl.string(U.t["0BRxRp"]), buildLayout: () => [vU] }),
    vk = (0, E.i4)(h.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: vL.G,
        useTitle: () => U.intl.string(U.t["0BRxRp"]),
        buildLayout: () => [vV],
    });
var vw = n(70688),
    vF = n(830215);
let vB = (0, E.i4)(h.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => U.intl.string(U.t["2jxGer"]),
        icon: vw.DoorExitIcon,
        onClick: () => {
            (0, n1.A)({
                title: U.intl.string(U.t["2jxGer"]),
                subtitle: U.intl.string(U.t.SUnWBB),
                confirmText: U.intl.string(U.t["2jxGer"]),
                onConfirm: () => {
                    vF.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    vz = (0, E.WI)(h.X.UTILITY_SECTION, {
        useTitle: () => U.intl.string(U.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [vk, vB],
    }),
    vY = (0, E.Hr)({ buildLayout: () => [I_, vO, EI, ou, p3, hX, vz], analyticsKey: "user_settings" });
