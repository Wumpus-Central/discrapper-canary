n.d(t, { D: () => On });
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
    h,
    S = n(419954),
    T = n(780964),
    f = n(550640),
    p = n(374193),
    x = n(477900),
    I = n(582128),
    _ = n(855986),
    b = n(652215),
    N = n(346055),
    C = n(534514),
    y = n(95362),
    v = n(97808),
    j = n(778712),
    O = n(821609),
    D = n(775602),
    R = n(432005),
    L = n(963852),
    P = n(763754),
    G = n(20851),
    M = n(95701),
    U = n(486020),
    V = n(253932),
    k = n(792996),
    w = n(345016);
let F = new M.nA({ id: "1337", guild_id: "1337", type: b.rbe.GUILD_TEXT, name: "preview" }),
    B = [
        { status: b.clD.IDLE, discriminator: "2" },
        { status: b.clD.DND, discriminator: "3" },
        { status: b.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function X(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, R.rh)({ ...(0, L.Ay)({ channelId: F.id, content: e }), state: b.cmJ.SENT, reactions: t });
}
var z = n(471245);
let H = (0, S.zD)(T.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => k.intl.string(k.t.TZ2hZH),
        useSubtitle: () => k.intl.string(k.t.Q7wgHc),
        useValue: () => V.D_.useSetting(),
        setValue: (e) => V.D_.updateSetting(e),
    }),
    Y = (0, S.zD)(T.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => k.intl.string(k.t.XYvMIX),
        useSubtitle: () => k.intl.string(k.t.T0rbtM),
        useValue: V._z.useSetting,
        setValue: V._z.updateSetting,
    });
var W = n(100767),
    K = n(435558),
    Z = n.n(K),
    q = n(935399),
    Q = n(331322),
    J = n(893007),
    $ = n(113494),
    ee = n(782134),
    et = n(54570),
    en = n(8880),
    ei = n(75804);
let el = Z().debounce((e) => {
    (0, et.zU)(e);
}, 250);
function es(e) {
    return 0 === e
        ? { value: e, label: k.intl.string(k.t["493lwX"]) }
        : 10 === e
          ? { value: e, label: k.intl.string(k.t.ZSZEdS) }
          : 1 === e
            ? { value: e, label: "x1.0" }
            : { value: e, label: e % 1 == 0 ? "" : void 0 };
}
function er() {
    let [e, t] = I.useState(!1);
    return (
        (0, q.l0)(() => (0, et.pr)()),
        (0, x.jsx)(O.$, {
            text: k.intl.string(k.t.SKNnqq),
            icon: e ? $.PauseIcon : ee.PlayIcon,
            size: "sm",
            onClick: function () {
                if (e) {
                    ((0, et.pr)(), t(!1));
                    return;
                }
                ((0, et.AU)(
                    k.intl.string(k.t.PKaNJL),
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
let ea = (0, S.E2)(T.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [k.intl.string(k.t.lsW5Ev)],
        Component: function () {
            let e = (0, _.bG)([en.A], () => en.A.speechRate);
            return (0, x.jsxs)(Q.B, {
                gap: 16,
                children: [
                    (0, x.jsx)(J.A, {
                        label: k.intl.string(k.t.lsW5Ev),
                        description: k.intl.string(k.t.Ci4wMS),
                        marks: ei.P.map(es),
                        defaultValue: e,
                        defaultMark: 1,
                        snapToMarks: !0,
                        minValue: ei.P["0"],
                        maxValue: ei.P[ei.P.length - 1],
                        onChangeEnd: el,
                        formatValue: (e) => `x${e.toFixed(2)}`,
                    }),
                    (0, x.jsx)(er, {}),
                ],
            });
        },
        usePredicate: () => W.$j,
    }),
    eo = (0, S.zZ)(T.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => k.intl.string(k.t.XVR0Rb),
        buildLayout: () => [ea, Y, H],
    }),
    eu = (0, S.AK)(T.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => k.intl.string(k.t.aTfeGK),
        destinationKey: T.X.APPEARANCE_PANEL,
    }),
    ed = (0, S.gN)(T.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [eu] });
var ec = n(955572);
let eg = (0, S.zD)(T.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => k.intl.string(k.t.OCJg5f),
    useSubtitle: () => k.intl.string(k.t.HEO0s3),
    useValue: () => (0, _.bG)([D.Ay], () => D.Ay.desaturateUserColors),
    setValue: () => (0, ec.YV)(),
});
var em = n(652525);
let eA = (0, S.zD)(T.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => k.intl.string(k.t["+Isihb"]),
        useSubtitle: () => k.intl.string(k.t.nNZ1Tz),
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.enableCustomCursor),
        setValue: (e) => (0, ec.ts)(e),
        usePredicate: () => (0, em.t)("EnableCustomCursorSetting"),
    }),
    eE = (0, S.zD)(T.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => k.intl.string(k.t["S3z+pV"]),
        useSubtitle: () => k.intl.string(k.t["3QuI9+"]),
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, ec.Gm)(e),
        hasIcon: !0,
    });
var eh = n(554146);
let eS = (0, S.zD)(T.X.HIGH_CONTRAST_MODE, {
    useTitle: () => k.intl.string(k.t.aZlePv),
    useSubtitle: () => k.intl.string(k.t["v2qF8+"]),
    useValue: () => (0, _.bG)([D.Ay], () => D.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, ec.uh)(e ? D._1.HIGH : D._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: p.Xi.NEW, dismissibleContent: eh.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var eT = n(406360),
    ef = n(964404);
let ep = (0, S.Qx)(T.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => k.intl.string(k.t.nemtgW),
        useSubtitle: () => k.intl.string(k.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
        useOptions: function () {
            return I.useMemo(
                () => [
                    { name: k.intl.string(k.t.D5Fma9), desc: k.intl.string(k.t.Qj75ck), value: "no-limit" },
                    { name: k.intl.string(k.t.ldcGIH), desc: k.intl.string(k.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, eT.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, ec.FU)(e);
        },
        useValue: function () {
            return (0, _.bG)([ef.Ay], () => ef.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", k.intl.string(k.t["O/Gjvn"])],
    }),
    ex = (0, S.Hn)(T.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => k.intl.string(k.t.nC2XBl),
        useSubtitle: () => k.intl.string(k.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: k.intl.string(k.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: k.intl.string(k.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: k.intl.string(k.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: k.intl.string(k.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.officialMessageStyle),
        setValue: (e) => (0, ec.w_)(e),
    }),
    eI = (0, S.Hn)(T.X.ROLE_STYLE, {
        useTitle: () => k.intl.string(k.t.uSOPWm),
        useSubtitle: () => k.intl.string(k.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: k.intl.string(k.t.eDdMzJ), value: "username" },
            { id: "dot", label: k.intl.string(k.t.rdmJp0), value: "dot" },
            { id: "hidden", label: k.intl.string(k.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.roleStyle),
        setValue: (e) => (0, ec.IX)(e),
    });
(0, S.Qx)(T.X.ROLE_STYLE, {
    useTitle: () => k.intl.string(k.t.uSOPWm),
    useSubtitle: () => k.intl.string(k.t["86hjzQ"]),
    useOptions: () => [
        { name: k.intl.string(k.t.YEOEi6), value: "username" },
        { name: k.intl.string(k.t.mQaro3), value: "dot" },
        { name: k.intl.string(k.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, _.bG)([D.Ay], () => D.Ay.roleStyle),
    setValue: (e) => (0, ec.IX)(e),
});
let e_ = (0, S.sN)(T.X.SATURATION, {
    useTitle: () => k.intl.string(k.t["5PWWCY"]),
    useSubtitle: () => k.intl.string(k.t.xf5S6P),
    markers: b.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => D.Ay.saturation,
    asValueChanges: (e) => (0, ec.HU)(e),
});
var eb = n(964486),
    eN = n(839214),
    eC = n(502229),
    ey = n(975571);
let ev = (0, eN.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    ej = (0, S.zD)(T.X.SYNC_FORCED_COLORS, {
        useTitle: () => k.intl.string(k.t.cguiec),
        useSubtitle: () => k.intl.format(k.t.GwEVE2, { learnMoreLink: ey.A.getArticleURL(b.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, _.bG)([D.Ay], () => D.Ay.syncForcedColors);
            return (
                (0, eb.Ay)(() => {
                    ev.setState({ syncEnabled: D.Ay.syncForcedColors });
                }),
                ev.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = ev.getState();
            if (null != t) {
                (clearTimeout(t), ev.setState({ syncEnabled: e, updateTimeout: null }));
                return;
            }
            if (e === D.Ay.syncForcedColors) return void ev.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                ((0, ec.D3)(e), ev.setState({ updateTimeout: null }));
            }, 150);
            ev.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, eC.D)(),
    }),
    eO = (0, S.zZ)(T.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => k.intl.string(k.t.JqvyiY),
        buildLayout: () => [e_, eg, eS, eA, ej, ep, eI, ex, eE, ed],
    });
var eD = n(397438),
    eR = n(355097),
    eL = n(571674);
function eP(e) {
    return (0, _.bG)([eD.A], () =>
        (function (e) {
            switch (e) {
                case eR._A.REDUCED_MOTION:
                    return k.intl.format(k.t["1dT9V4"], {});
                case eR._A.REDUCED_MOTION_STICKERS:
                    return k.intl.string(k.t["2ExvRu"]);
                case eR._A.GAME_MODE:
                    return k.intl.string(eL.default.VGcdxP);
                default:
                    return;
            }
        })(eD.A.getAppliedOverrideReasonKey(e)),
    );
}
function eG(e) {
    return (0, _.bG)([eD.A], () => eD.A.getAppliedOverrideReasonKey(e) === eR._A.GAME_MODE);
}
let eM = (0, S.zD)(T.X.ANIMATE_EMOJIS, {
        useTitle: () => k.intl.string(k.t.iIaOlc),
        useSubtitle: () => eP("animateEmoji"),
        useDisabled: () => eG("animateEmoji"),
        useValue: () => V.Sf.useSetting(),
        setValue: (e) => V.Sf.updateSetting(e),
    }),
    eU = (0, S.zD)(T.X.ANIMATE_GIFS, {
        useTitle: () => k.intl.string(k.t.wqsK7q),
        useSubtitle: () => eP("gifAutoPlay"),
        useDisabled: () => eG("gifAutoPlay"),
        useValue: () => V.kt.useSetting(),
        setValue: (e) => V.kt.updateSetting(e),
    });
var eV = n(823894);
let ek = (0, S.Qx)(T.X.ANIMATE_STICKERS, {
        useTitle: () => k.intl.string(k.t.sBHIh0),
        useSubtitle: () => eP("animateStickers"),
        useDisabled: () => eG("animateStickers"),
        useOptions: () => [
            { name: k.intl.string(k.t["Xp+X2U"]), value: eV.BJ.ALWAYS_ANIMATE },
            { name: k.intl.string(k.t.IlLT7e), desc: k.intl.string(k.t.bIW9Tl), value: eV.BJ.ANIMATE_ON_INTERACTION },
            { name: k.intl.string(k.t.IGu8x3), value: eV.BJ.NEVER_ANIMATE },
        ],
        useValue: () => V.S0.useSetting(),
        setValue: (e) => V.S0.updateSetting(e),
    }),
    ew = (0, S.zD)(T.X.REDUCED_MOTION, {
        useTitle: () => k.intl.string(k.t.b3XBzg),
        useSubtitle: () => k.intl.format(k.t.XqvxJc, { helpdeskArticle: ey.A.getArticleURL(b.MVz.REDUCED_MOTION) }),
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.prefersReducedMotion),
        setValue: (e) => (0, ec.qz)(e ? "reduce" : "no-preference"),
    }),
    eF = (0, S.zD)(T.X.SYNC_REDUCED_MOTION, {
        useTitle: () => k.intl.string(k.t.oL55A6),
        useValue: () => (0, _.bG)([D.Ay], () => "auto" === D.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, ec.qz)(e ? "auto" : D.Ay.systemPrefersReducedMotion),
    });
function eB(e) {
    return k.intl.formatToPlainString(k.t.pyvjRp, { seconds: e });
}
let eX = (0, S.sN)(T.X.TOAST_DURATION, {
        useTitle: () => k.intl.string(k.t["3oxlia"]),
        useSubtitle: () => k.intl.string(k.t.CZ3jxp),
        markers: b.hH7.TOAST_DURATION_SECOND_INCREMENTS,
        onMarkerRender: (e) =>
            e % 5 == 0 || e === b.hH7.TOAST_DURATION_MIN_SECONDS || e === b.hH7.TOAST_DURATION_MAX_SECONDS
                ? eB(e)
                : void 0,
        onValueRender: eB,
        stickToMarkers: !0,
        minValue: b.hH7.TOAST_DURATION_MIN_SECONDS,
        maxValue: b.hH7.TOAST_DURATION_MAX_SECONDS,
        useDefaultValue: () => b.hH7.TOAST_DURATION_DEFAULT_MS / 1e3,
        getInitialValue: () => D.Ay.minToastDurationMs / 1e3,
        asValueChanges: (e) => (0, ec.E7)(1e3 * e),
    }),
    ez = (0, S.zZ)(T.X.MOTION_CATEGORY, {
        useTitle: () => k.intl.string(k.t.e3TR1b),
        buildLayout: () => [ew, eF, eX, eU, eM, ek],
    });
var eH = n(688810),
    eY = n(259065),
    eW = n(842671);
let eK = (0, S.zD)(T.X.DISPLAY_NAME_STYLES, {
    useTitle: () => k.intl.string(eW.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eH.Ay)();
        return k.intl.format(eW.default.aEax6P, {
            onClickOpenModal() {
                (0, eY.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, _.bG)([D.Ay], () => D.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, ec.Dm)(e),
});
function eZ(e) {
    return `${e.toFixed(0)}px`;
}
let eq = (0, S.sN)(T.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => k.intl.string(k.t.rT3Pq5),
        useSubtitle: () => k.intl.string(k.t.LXUhen),
        markers: b.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: b.hH7.FONT_SIZES["0"],
        maxValue: b.hH7.FONT_SIZES[b.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => b.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => D.Ay.fontSize,
        onValueRender: eZ,
        onMarkerRender: eZ,
        asValueChanges: (e) => (0, ec.XS)(e),
    }),
    eQ = (0, S.zD)(T.X.UNDERLINE_LINKS, {
        useTitle: () => k.intl.string(k.t.OLZFB8),
        useSubtitle: () => k.intl.string(k.t.DIX3ke),
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, ec.kI)(e),
    }),
    eJ = (0, S.zZ)(T.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => k.intl.string(k.t["bxh/R7"]),
        buildLayout: () => [eq, eQ, eK],
    });
var e$ = n(873298);
let e0 = (0, S.Qx)(T.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => k.intl.string(k.t["C/5V0A"]),
        useSubtitle: () => k.intl.string(k.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: k.intl.string(k.t["7iegX4"]), value: e$.NS.COMPACT },
            { name: k.intl.string(k.t.bBvAEH), value: e$.NS.DEFAULT },
            { name: k.intl.string(k.t["4cuYHx"]), value: e$.NS.COZY },
        ],
        useValue: () => V.Xi.useSetting(),
        setValue: (e) => {
            e !== e$.NS.UNSET_UI_DENSITY && V.Xi.updateSetting(e);
        },
    }),
    e1 = "cozy",
    e2 = "compact",
    e3 = (0, S.Qx)(T.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => k.intl.string(k.t.nKRoPv),
        useSubtitle: () => k.intl.string(k.t.QntEEG),
        useSearchTerms: () => [k.intl.string(k.t.ZEoGMd)],
        useOptions: () => [
            { name: k.intl.string(k.t.Jqj4cZ), value: e1 },
            { name: k.intl.string(k.t["1JNcPS"]), value: e2 },
        ],
        useValue: () => (V.hH.useSetting() ? e2 : e1),
        setValue: (e) => {
            (V.hH.updateSetting(e === e2), (0, ec.AC)());
        },
    });
var e4 = n(381941);
function e5(e) {
    return `${e.toFixed(0)}px`;
}
let e6 = (0, S.sN)(T.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => k.intl.string(k.t.Q6lKkg),
    useSubtitle: () => k.intl.string(k.t.p7eUrb),
    markers: e4.qh,
    stickToMarkers: !0,
    minValue: e4.qh["0"],
    maxValue: e4.qh[e4.qh.length - 1],
    useDefaultValue: () => 16 * !V.hH.useSetting(),
    useExternalValue: () => (0, _.bG)([D.Ay], () => D.Ay.messageGroupSpacing),
    getInitialValue: () => D.Ay.messageGroupSpacing,
    onValueRender: e5,
    onMarkerRender: e5,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, ec.AC)(e);
        }
    },
});
var e8 = n(775121),
    e7 = n(723702);
let e9 = (0, S.sN)(T.X.APPEARANCE_ZOOM, {
        usePredicate: () => e7.isPlatformEmbedded,
        useTitle: () => k.intl.string(k.t.i19n5L),
        useSubtitle: () => k.intl.format(k.t["x9PK/3"], { modKey: e8.A.modKey }),
        markers: b.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: b.hH7.ZOOM_SCALES["0"],
        maxValue: b.hH7.ZOOM_SCALES[b.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => b.hH7.ZOOM_DEFAULT,
        getInitialValue: () => D.Ay.zoom,
        useExternalValue: () => (0, _.bG)([D.Ay], () => D.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, ec.Qp)(e),
        useSearchTerms: () => [k.intl.string(k.t.ip0uSf)],
    }),
    te = (0, S.zZ)(T.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => k.intl.string(k.t.VKYWk8),
        buildLayout: () => [e0, e3, e6, e9],
    }),
    tt = (0, S.t_)(T.X.ACCESSIBILITY_PANEL, {
        useTitle: () => k.intl.string(k.t.G0neg7),
        buildLayout: () => [eJ, te, eO, ez, eo],
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = V.hH.useSetting(),
                    t = V.jW.useSetting(),
                    n = I.useMemo(
                        () => [
                            X(
                                k.intl.formatToPlainString(k.t.BknJRT, {}),
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
                            X(k.intl.formatToPlainString(k.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, _.bG)([D.Ay], () => D.Ay.messageGroupSpacing);
                return (0, x.jsx)(N.M, {
                    children: (0, x.jsxs)("section", {
                        "aria-label": k.intl.string(k.t.RC22qg),
                        children: [
                            (0, x.jsx)(C.D, {
                                variant: "body-md/medium",
                                color: "text-muted",
                                className: w.Vf,
                                children: k.intl.string(k.t.RC22qg),
                            }),
                            (0, x.jsxs)(y.Ip, {
                                className: w.VH,
                                children: [
                                    (0, x.jsx)("ol", {
                                        className: w.DZ,
                                        style: { gap: i },
                                        "aria-label": k.intl.string(k.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, x.jsx)(
                                                "li",
                                                {
                                                    children: (0, x.jsx)(G.A, {
                                                        message: t,
                                                        channel: F,
                                                        compact: e,
                                                        author: { ...(0, P.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, x.jsxs)("div", {
                                        className: w.Jb,
                                        children: [
                                            (0, x.jsx)("div", {
                                                className: w.HD,
                                                children: B.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, x.jsx)(
                                                        v.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: j._3.SIZE_32,
                                                            src: U.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": k.intl.string(k.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, x.jsx)(O.$, {
                                                text: k.intl.string(k.t["2RHHgz"]),
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
    tn = (0, S.i4)(T.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.G0neg7),
        icon: f.AccessibilityIcon,
        useMenu: z.A,
        buildLayout: () => [tt],
    });
n(321073);
var ti = n(650809),
    tl = n(477782),
    ts = n(620632),
    tr = n(73153),
    ta = n(74396),
    to = n(269880),
    tu = n(55619),
    td = n(351906),
    tc = n(129230),
    tg = n(189081);
let tm = (0, S.zD)(T.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, _.bG)([tg.A], () => tg.A.hasLibraryApplication()),
        useTitle: () => k.intl.string(k.t.fi3UQN),
        useSubtitle: () => k.intl.string(k.t["8mYp37"]),
        useValue: () => !V.l_.useSetting(),
        setValue: (e) => V.l_.updateSetting(!e),
    }),
    tA = (0, S.zZ)(T.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => k.intl.string(k.t["8/udY0"]),
        buildLayout: () => [tm],
    });
var tE = n(284009),
    th = n.n(tE),
    tS = n(199966),
    tT = n(963935);
function tf(e) {
    let { title: t } = e;
    return t;
}
function tp(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: l } = e,
        s = t();
    return "string" == typeof s ? i({ title: s, index: l, key: n }) : s;
}
function tx(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, x.jsx)(tp, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tI(e) {
    return e.type === tT.Z6.LIST;
}
function t_(e, t) {
    let { limit: n = 2, formatter: i = tf } = t ?? {};
    th()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, tS._)(),
        r = l.get(e) ?? s.get(e);
    th()(
        null != r && (r.type === tT.Z6.ACCORDION || tI(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tI(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return I.useMemo(() => {
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
                return k.intl.format(k.t["3H9tCW"], { settingOneHook: tx({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return k.intl.format(k.t.MWryo6, {
                    settingOneHook: tx({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tx({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return k.intl.format(k.t.a00b5G, {
                    settingOneHook: tx({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tx({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tx({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === l
            ? k.intl.format(k.t.O8vNbS, { settingOneHook: tx({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === l
              ? k.intl.format(k.t["acXG/W"], {
                    settingOneHook: tx({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tx({ setting: t[1], formatter: i, index: 1 }),
                })
              : k.intl.format(k.t["5+ldWc"], {
                    settingOneHook: tx({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tx({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tx({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tb = n(951260);
let tN = (0, S.zD)(T.X.ENABLE_APPS_BUTTON, {
        useTitle: () => k.intl.string(k.t.ZTH4j4),
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, ec.n8)({ appsButtonEnabled: e }),
    }),
    tC = {
        useTitle: () => k.intl.string(k.t["I/5LyL"]),
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.isSubmitButtonEnabled),
        setValue: () => (0, ec.Xt)(),
    },
    ty = (0, S.zD)(T.X.ENABLE_SEND_BUTTON, tC),
    tv = (0, S.zD)(T.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tC,
        usePredicate: () => !(0, tb.n)("EnableSendButtonOutsideExperiment"),
    }),
    tj = (0, S.zD)(T.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => k.intl.string(k.t.WggFoO),
        useSubtitle: () => k.intl.string(k.t.XpErGj),
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, ec.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, _.bG)([D.Ay], () => D.Ay.expressionPickerFormat === D.IG.FLEXIBLE),
    }),
    tO = (0, S.zD)(T.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => k.intl.string(k.t.YErWkD),
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, ec.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, _.bG)([D.Ay], () => D.Ay.expressionPickerFormat === D.IG.FLEXIBLE),
    }),
    tD = (0, S.zD)(T.X.ENABLE_GIF_BUTTON, {
        useTitle: () => k.intl.string(k.t.k7oNEz),
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.isGifButtonEnabled),
        setValue: (e) => (0, ec.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, _.bG)([D.Ay], () => D.Ay.expressionPickerFormat === D.IG.FLEXIBLE),
    }),
    tR = (0, S.zD)(T.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => k.intl.string(k.t.Ar0krj),
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, ec.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, _.bG)([D.Ay], () => D.Ay.expressionPickerFormat === D.IG.FLEXIBLE),
    }),
    tL = (0, S.Qx)(T.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => k.intl.string(k.t.AxRAWt),
        useValue: () => (0, _.bG)([D.Ay], () => D.Ay.expressionPickerFormat),
        setValue: (e) => (0, ec.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: k.intl.string(k.t.k86Soy), desc: k.intl.string(k.t.bSGTTZ), value: D.IG.FLEXIBLE },
                { name: k.intl.string(k.t.bjwSOn), desc: k.intl.string(k.t.We36HX), value: D.IG.CONDENSED },
                { name: k.intl.string(k.t.FDIKss), desc: k.intl.string(k.t["rclZL/"]), value: D.IG.HIDDEN },
            ];
        },
    }),
    tP = (0, S.FW)(T.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => k.intl.string(k.t["V9/cNN"]),
        buildLayout: () => [tL, tj, tO, tD, tR],
    }),
    tG = (0, S.bd)(T.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? k.intl.string(k.t.IwVGQs) : k.intl.string(k.t.cFNDh5);
        },
        useCollapsedSubtitle: () => t_(T.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tb.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [ty, tN, tP],
    });
var tM = n(565645);
let tU = (0, S.zD)(T.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => k.intl.string(k.t["79qal8"]),
        useSubtitle: () =>
            k.intl.format(k.t.GejoQK, { emojiHook: (e, t) => (0, x.jsx)(tM.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: V.j7.useSetting,
        setValue: V.j7.updateSetting,
    }),
    tV = (0, S.zD)(T.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => k.intl.string(k.t.c0oFDw),
        useValue: V.BQ.useSetting,
        setValue: V.BQ.updateSetting,
    }),
    tk = (0, S.zD)(T.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => k.intl.string(k.t.AqGrEI),
        useValue: V.SI.useSetting,
        setValue: (e) => {
            (tc.default.track(b.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: b.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                V.SI.updateSetting(e));
        },
    });
var tw = n(793574);
let tF = (0, S.zD)(T.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => k.intl.string(k.t["d+It2U"]),
        useValue: V.ML.useSetting,
        setValue: (e) => {
            (tc.default.track(b.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: b.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tw.A.TEXT_AND_IMAGES],
            }),
                V.ML.updateSetting(e));
        },
    }),
    tB = (0, S.zZ)(T.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => k.intl.string(k.t.Ob7VMB),
        useSearchTerms: () => [k.intl.string(k.t.onqU6o)],
        buildLayout: () => [tk, tU, tF, tV, tv, tG],
    });
var tX = n(526162),
    tz = n(793943),
    tH = n(792656),
    tY = n(830543),
    tW = n(145359),
    tK = n(161368),
    tZ = n(236814),
    tq = n(211824),
    tQ = n(701256);
let tJ = (0, S.E2)(T.X.APPEARANCE_HEXAGON_CAMPAIGN_APP_ICON, {
    useSearchTerms: () => [k.intl.string(k.t.gnwxvT), k.intl.string(tQ.default.EWenaG)],
    Component: function () {
        return (0, x.jsx)(tK.A, { type: "settings", iconSize: tZ.N8.SIZE_48 });
    },
    usePredicate: () => (0, tW.Lz)(tq.vB.APP_ICON, "HexagonCampaignAppIconSetting") !== tq.S9.HIDDEN,
});
var t$ = n(785007),
    t0 = n(848971),
    t1 = n(915089),
    t2 = n(739053),
    t3 = n(82498),
    t4 = n(682901);
let t5 = (0, S.E2)(T.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [k.intl.string(k.t.gnwxvT)],
    Component: function () {
        let e = (0, t1.GV)(),
            { ref: t, ...n } = (0, t$._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, _.bG)([tX.A], () => tX.A.isUpsellPreview);
        return (
            (0, q.Ay)(() => {
                i &&
                    (tc.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: t4.e.APP_ICON_UPSELL,
                        location_stack: [tw.A.USER_SETTINGS],
                    }),
                    (0, t2.sq)(b.U7l.PREMIUM_UPSELL_VIEWED, [tw.A.USER_SETTINGS], () =>
                        (0, t3.uq)(t4.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, x.jsx)("div", {
                ...n,
                ref: t,
                children: (0, x.jsx)(Q.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, x.jsx)(t0.m, { disabled: i, size: tZ.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function t6() {
    ((0, tz.nf)(tz.HP.APP_ICON), (0, tY.default)());
}
function t8() {
    return (0, x.jsx)(tH.A, {
        subscriptionTier: t4.pe.TIER_2,
        defaultTextOverride: k.intl.string(k.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: b.ZSU.BUTTON_CTA, objectType: b.btD.BUY },
        fullWidth: !0,
    });
}
let t7 = (0, S.zZ)(T.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => k.intl.string(k.t.RPh2ou),
        useSubtitle: () => k.intl.string(k.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, _.bG)([tX.A], () => tX.A.isUpsellPreview);
            return I.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: p.UV.BUTTON,
                        text: k.intl.string(k.t["6acvnZ"]),
                        onClick: t6,
                    }),
                    e && t.push({ id: "upsell-button", type: p.UV.STRONGLY_DISCOURAGED_CUSTOM, button: t8 }),
                    { type: p.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [t5, tJ],
    }),
    t9 = (0, S.AK)(T.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => k.intl.string(k.t.UDr3Iy),
        useSearchTerms: () => [k.intl.string(k.t.UDr3Iy)],
        destinationKey: T.X.ACCESSIBILITY_PANEL,
    }),
    ne = (0, S.gN)(T.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [t9] });
var nt = n(143129),
    nn = n(794412),
    ni = n(749884),
    nl = n(708526);
let ns = ey.A.getArticleURL(b.MVz.FAVORITES_GUILD),
    nr = (0, S.E2)(T.X.CHAT_FAVORITES_TOGGLE, {
        useSearchTerms: () => [k.intl.string(nl.default.OT1NK5)],
        Component: function () {
            let e = (0, ni.A)(!1);
            return (0, x.jsx)(nt.d, {
                checked: e,
                description: k.intl.format(nl.default.GR2KOG, { helpCenterLink: ns }),
                onChange: nn.kG,
                label: k.intl.string(nl.default.OT1NK5),
                badge: "beta",
            });
        },
    }),
    na = (0, S.zD)(T.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => k.intl.string(k.t.U47N1p),
        useValue: V.hD.useSetting,
        setValue: V.hD.updateSetting,
    }),
    no = (0, S.zD)(T.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => k.intl.string(k.t.VP11No),
        useValue: V.X6.useSetting,
        setValue: V.X6.updateSetting,
    }),
    nu = (0, S.FW)(T.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => k.intl.string(k.t["9nyle0"]),
        buildLayout: () => [na, no],
    }),
    nd = (0, S.zD)(T.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => k.intl.string(k.t["5bK9vw"]),
        useValue: V.rs.useSetting,
        setValue: V.rs.updateSetting,
    }),
    nc = (0, S.zD)(T.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => k.intl.string(k.t["zge/fP"]),
        useValue: V.jW.useSetting,
        setValue: V.jW.updateSetting,
    });
var ng = n(28863),
    nm = n(766075);
let nA = (0, S.zD)(T.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => k.intl.string(k.t.JgjNG3),
        useSubtitle: () => {
            if (!V.hH.useSetting())
                return k.intl.format(k.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, x.jsx)(
                            ng.Anchor,
                            {
                                onClick: () => (0, nm.openUserSettings)(T.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !V.hH.useSetting(),
        useValue: () => {
            let e = V.aM.useSetting();
            return !V.hH.useSetting() || e;
        },
        setValue: (e) => {
            V.aM.updateSetting(e);
        },
    }),
    nE = (0, S.Hn)(T.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => k.intl.string(k.t.QgwmVz),
        useOptions: () => [
            { value: b.P6Q.ON_CLICK, id: b.P6Q.ON_CLICK, label: k.intl.string(k.t["KFH/me"]) },
            { value: b.P6Q.ALWAYS, id: b.P6Q.ALWAYS, label: k.intl.string(k.t.Pe1RbL) },
            { value: b.P6Q.IF_MODERATOR, id: b.P6Q.IF_MODERATOR, label: k.intl.string(k.t.K5VTBE) },
        ],
        useValue: V.gs.useSetting,
        setValue: V.gs.updateSetting,
    }),
    nh = (0, S.zD)(T.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => k.intl.string(k.t.AInv5m),
        useValue: V.SY.useSetting,
        setValue: V.SY.updateSetting,
    }),
    nS = (0, S.zZ)(T.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => k.intl.string(k.t.OIgYlQ),
        useSearchTerms: () => [k.intl.string(k.t["/VQax8"])],
        buildLayout: () => [nu, nd, nc, nE, nh, nA, nr, ne],
    });
var nT = n(753806),
    nf = n(145331);
let np = (0, S.Qx)(T.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => k.intl.string(k.t.VkoLsy),
        useSearchTerms: () => [k.intl.string(k.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: k.intl.string(k.t.E9JM4J), value: 0 },
                { name: k.intl.string(k.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!V.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            (t ? nT.A.cleanUpPrivateChannelSearchState() : nT.A.cleanUpSearchState({ type: b.I4_.DMS }),
                (0, nf._k)({
                    prevIsCrossDMSettingEnabled: V.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: nf.vy.USER_SETTINGS,
                }),
                V.Hu.updateSetting(t));
        },
    }),
    nx = (0, S.zZ)(T.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => k.intl.string(k.t["5h0QOP"]),
        buildLayout: () => [np],
    });
var nI = n(574381);
let n_ = (0, S.zD)(T.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => k.intl.string(k.t.IxjaoF),
        useValue: function () {
            return (0, _.bG)([td.A], () => {
                let { autoToggle: e } = td.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            tu.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nI.Av;
        },
    }),
    nb = (0, S.zD)(T.X.STREAMING_STREAMER_MODE, {
        useTitle: () => k.intl.string(k.t.TGNg6T),
        useSubtitle: () => k.intl.string(k.t["4nXLnE"]),
        useValue: function () {
            return (0, _.bG)([td.A], () => {
                let { enabled: e } = td.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            tu.A.update({ enabled: e });
        },
    });
var nN = n(77729),
    nC = n(589051),
    ny = n(415173),
    nv = n(999834);
let nj = [],
    nO = (0, S.Hn)(T.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => k.intl.string(k.t.VCDSLW),
        useSearchTerms: () => [k.intl.string(k.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nv.b_)(),
                t = (0, nC.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return I.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(ny.A))
                    !0 === n.hideableInStreamerMode &&
                        null != n.label &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.label() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, _.bG)([td.A], () => td.A.getSettings().disabledOverlayWidgets ?? nj);
        },
        setValue: (e) => tu.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nD = (0, S.zD)(T.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => k.intl.string(k.t.LSBUGR),
        useValue: () =>
            (0, _.bG)([td.A], () => {
                let { hidePersonalInformation: e } = td.A.getSettings();
                return e;
            }),
        setValue: (e) => tu.A.update({ hidePersonalInformation: e }),
    }),
    nR = (0, S.zD)(T.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => k.intl.string(k.t.uWBOri),
        useValue: () =>
            (0, _.bG)([td.A], () => {
                let { hideInstantInvites: e } = td.A.getSettings();
                return e;
            }),
        setValue: (e) => tu.A.update({ hideInstantInvites: e }),
    }),
    nL = (0, S.zD)(T.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => k.intl.string(k.t.OrqYDP),
        useValue: () =>
            (0, _.bG)([td.A], () => {
                let { disableSounds: e } = td.A.getSettings();
                return e;
            }),
        setValue: (e) => tu.A.update({ disableSounds: e }),
    }),
    nP = (0, S.zD)(T.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => k.intl.string(k.t.sUAbLd),
        useValue: () =>
            (0, _.bG)([td.A], () => {
                let { disableNotifications: e } = td.A.getSettings();
                return e;
            }),
        setValue: (e) => tu.A.update({ disableNotifications: e }),
    }),
    nG = (0, S.zD)(T.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => k.intl.string(k.t["iA81+a"]),
        useSubtitle: () => k.intl.string(k.t.P4vj0h),
        useValue: () =>
            (0, _.bG)([td.A], () => {
                let { enableContentProtection: e } = td.A.getSettings();
                return e;
            }),
        setValue: (e) => tu.A.update({ enableContentProtection: e }),
        usePredicate: () => nN.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nM = (0, S.FW)(T.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => k.intl.string(k.t.xYhOEh),
        buildLayout: () => [nD, nR, nL, nP, nG, nO],
    }),
    nU = (0, S.zZ)(T.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => k.intl.string(k.t.S5GfOW),
        buildLayout: () => [nb, n_, nM],
    });
var nV = n(47671),
    nk = n(141343),
    nw = n(665267);
let nF = (0, S.zD)(T.X.SYNC_PROFILE_THEMES, {
    useTitle: () => k.intl.string(k.t.C00w4l),
    useValue: () => (0, _.bG)([D.Ay], () => D.Ay.syncProfileThemeWithUserTheme),
    setValue: () => (0, ec.M1)(),
});
var nB = n(817281),
    nX = n(284016),
    nz = n(413599);
let nH = (0, S.zD)(T.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => k.intl.string(k.t["/B+kEV"]),
    useSearchTerms: () => [k.intl.string(k.t.Ksh3ik)],
    useValue: function () {
        return (0, _.bG)([nX.A], () => !1 !== nX.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, _.bG)([nz.A], () => nz.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nz.A.theme,
            i = nV.A.gradientPreset?.id ?? null,
            l = V.eh.getSetting()?.customUserThemeSettings != null;
        ((t = b.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            tr.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            nB.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nY = n(714907);
let nW = (0, S.AK)(T.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => k.intl.string(k.t.nhVQDJ),
        useSearchTerms: () => [k.intl.string(k.t.nhVQDJ)],
        destinationKey: T.X.ACCESSIBILITY_PANEL,
    }),
    nK = (0, S.gN)(T.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nW] }),
    nZ = (0, S.zZ)(T.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => k.intl.string(k.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, _.bG)([D.Ay], () => D.Ay.useForcedColors)
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: (0, eC.D)()
                          ? k.intl.format(k.t.Jae48E, {
                                onClick: () => {
                                    (0, nm.openUserSettings)(T.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : k.intl.string(k.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, _.bG)([nV.A, D.Ay], () => D.Ay.useForcedColors || nV.A.isPreview),
                t = (0, nk.V)();
            return e || t
                ? null
                : {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: p.UV.BUTTON,
                              text: k.intl.string(k.t["E+COuA"]),
                              onClick: nw.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nY.k, nH, nF, nK],
    }),
    nq = (0, S.t_)(T.X.APPEARANCE_PANEL, {
        initialize: function () {
            ta.A.isFetching() ||
                (tr.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                ts.Bo.get({ url: b.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        tr.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        tr.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => k.intl.string(k.t["iHH+ky"]),
        buildLayout: () => [nZ, t7, nS, tB, nx, nU, tA],
    }),
    nQ = [{ badgeType: p.Xi.NEW, dismissibleContent: eh.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE }],
    nJ = (0, S.i4)(T.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t["iHH+ky"]),
        icon: ti.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, to.A)(),
                l =
                    ((e = V.D_.useSetting()),
                    (t = V.SI.useSetting()),
                    e
                        ? null
                        : (0, x.jsx)(tl.sL, {
                              id: "preview-markdown-toggle",
                              label: k.intl.string(k.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  (tc.default.track(b.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: b.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      V.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                s =
                    ((n = (0, _.bG)([td.A], () => td.A.enabled, [])),
                    (0, x.jsx)(tl.sL, {
                        id: "streamer-mode-toggle",
                        label: k.intl.string(k.t.p9ZAJZ),
                        action: () => {
                            tu.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return I.useMemo(() => {
                let e = [...i];
                return (
                    null != l &&
                        e.push((0, x.jsx)(tl.rX, { label: k.intl.string(k.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, x.jsx)(tl.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [i, l, s]);
        },
        getDismissibleBadges: () => nQ,
        buildLayout: () => [nq],
    });
var n$ = n(37646),
    n0 = n(172471);
let n1 = (0, S.t_)(T.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => k.intl.string(k.t.KyFVyi),
        buildLayout: () => [n0.F],
    }),
    n2 = (0, S.i4)(T.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: n$.LanguageIcon,
        useTitle: () => k.intl.string(k.t.KyFVyi),
        buildLayout: () => [n1],
    });
var n3 = n(3137),
    n4 = n(646514),
    n5 = n(314116),
    n6 = n(270003),
    n8 = n(834730),
    n7 = n(939249),
    n9 = n(369606),
    ie = n(320448),
    it = n(604121),
    ii = n(725951),
    il = n(400492),
    is = n(669067),
    ir = n(115063),
    ia = n(415677),
    io = n(927018),
    iu = n(591563),
    id = n(532197),
    ic = n(403362),
    ig = n(874486),
    im = n(503698),
    iA = n.n(im),
    iE = n(536637),
    ih = n.n(iE),
    iS = n(5377),
    iT = n(906688),
    ip = n(98705);
function ix(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, io.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = ih()(n),
        m = null != o && l,
        A = m ? n7.D : "div";
    return (0, x.jsxs)(A, {
        className: iA()(ip.kL, m && ip.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, x.jsx)("div", {
                className: ip.zc,
                children: (0, x.jsx)(iT.A, { achievementId: t, size: iT.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, x.jsxs)("div", {
                className: ip.VW,
                children: [
                    null != n &&
                        (0, x.jsx)(n8.E, {
                            variant: "footnote/semibold",
                            color: "text-muted",
                            className: ip.YR,
                            children: (0, iS.mk)(g),
                        }),
                    (0, x.jsx)(n8.E, { variant: "body-md/medium", color: d, children: s() }),
                    (0, x.jsx)(n8.E, { variant: "body-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var iI = n(545744);
function i_(e) {
    let { onBackClick: t } = e,
        n = (0, _.bG)([ig.A], () => ig.A.getAllUnlockedAchievements()),
        i = I.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = I.useMemo(
            () =>
                Object.values(io.l0)
                    .filter(ic.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsxs)(n7.D, {
                onClick: t,
                className: iI.vv,
                children: [
                    (0, x.jsx)(id.A, { direction: id.A.Directions.LEFT, className: iI.Kk }),
                    (0, x.jsx)(n8.E, {
                        variant: "body-lg/normal",
                        color: "text-default",
                        children: k.intl.string(k.t["13/7kX"]),
                    }),
                ],
            }),
            (0, x.jsxs)("div", {
                className: iI.N1,
                children: [
                    (0, x.jsxs)("div", {
                        className: iI.if,
                        children: [
                            (0, x.jsx)(C.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: k.intl.string(k.t["6jI0hd"]),
                            }),
                            (0, x.jsx)(n8.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                children: k.intl.string(k.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, x.jsx)("div", {
                        className: iI.nr,
                        children: (0, x.jsx)(n9.TrophyIcon, {
                            size: "custom",
                            color: n4.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, x.jsx)("div", {
                    className: iI.yF,
                    children: (0, x.jsx)("div", {
                        className: iI.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, x.jsx)(ix, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, x.jsxs)("div", {
                    className: iI.yF,
                    children: [
                        (0, x.jsx)("div", {
                            className: iI.if,
                            children: (0, x.jsx)(n8.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                children: k.intl.string(k.t.GFyMg1),
                            }),
                        }),
                        (0, x.jsx)("div", {
                            className: iI.Eh,
                            children: l.map((e) => (0, x.jsx)(ix, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, x.jsx)("div", { className: iI.yF, children: (0, x.jsx)("div", { className: iI.F3 }) }),
        ],
    });
}
var ib = n(224964),
    iN = n(31408),
    iC = n(368588);
let iy = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iv = (0, K.range)(0, 11),
    ij = (0, K.range)(0, 2.25, 0.25),
    iO = (0, K.range)(1, 11),
    iD = (0, K.range)(1, 26),
    iR = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iL(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, x.jsx)(
                nt.d,
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
    return (0, x.jsx)(n6.n, { label: k.intl.string(k.t.bWVN1D), children: s });
}
function iP(e) {
    let { children: t } = e;
    return (0, x.jsx)(n8.E, { className: iC.iF, variant: "body-sm/normal", color: "text-default", children: t });
}
function iG(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        l = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion);
    return (0, x.jsx)(nt.d, {
        label: k.intl.string(k.t.vuiXm9),
        description: k.intl.string(k.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, ia._)(io.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, n5.A)({
                          title: l ? k.intl.string(k.t["FxT+p0"]) : k.intl.string(k.t.TAZ4F9),
                          subtitle: l ? k.intl.string(k.t.gmixrx) : k.intl.string(k.t.jN3t3K),
                          confirmText: k.intl.string(k.t.JFfins),
                          onConfirm: () => i(l ? iy : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iM(e) {
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
    return (0, x.jsxs)(n6.n, {
        label: k.intl.string(k.t.mqxwJO),
        children: [
            (0, x.jsx)(nt.d, {
                label: k.intl.string(k.t.s0KCgF),
                description: k.intl.string(k.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(n8.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iC.KF,
                        children: k.intl.string(k.t.vd0D81),
                    }),
                    (0, x.jsx)(iP, { children: k.intl.string(k.t.a18Sug) }),
                    (0, x.jsx)(J.A, {
                        "aria-label": k.intl.string(k.t.vd0D81),
                        disabled: a,
                        marks: iO,
                        snapToMarks: !0,
                        minValue: iO[0],
                        maxValue: iO[iO.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => r({ confettiCount: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(n8.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iC.KF,
                        children: k.intl.string(k.t.sPO3ij),
                    }),
                    (0, x.jsx)(iP, { children: k.intl.string(k.t.xoldVn) }),
                    (0, x.jsx)(J.A, {
                        "aria-label": k.intl.string(k.t.sPO3ij),
                        disabled: a,
                        marks: iD,
                        snapToMarks: !0,
                        minValue: iD[0],
                        maxValue: iD[iD.length - 1],
                        defaultValue: l,
                        onChangeEnd: (e) => r({ confettiSize: e }, 0),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
            (0, x.jsx)(iL, {
                disabled: a,
                locations: [
                    {
                        location: iN.k.CHAT_INPUT,
                        title: k.intl.string(k.t.elTtyz),
                        description: k.intl.string(k.t.HtKfMi),
                    },
                    {
                        location: iN.k.REACTION,
                        title: k.intl.string(k.t.Ik4VIa),
                        description: k.intl.string(k.t.y4rqK0),
                    },
                    {
                        location: iN.k.MEMBER_USER,
                        title: k.intl.string(k.t.ZXBlAn),
                        description: k.intl.string(k.t["m9RD+c"]),
                    },
                    {
                        location: iN.k.CALL_TILE,
                        title: k.intl.string(k.t.V66giQ),
                        description: k.intl.string(k.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function iU(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        r = !t || !n;
    return (0, x.jsxs)(n6.n, {
        label: k.intl.string(k.t.Xz0ole),
        children: [
            (0, x.jsx)(nt.d, {
                label: k.intl.string(k.t.o3iV7B),
                description: k.intl.string(k.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, x.jsx)(nt.d, {
                label: k.intl.string(k.t["Ax+IoW"]),
                description: k.intl.string(k.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(n8.E, {
                        variant: "body-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: iC.KF,
                        children: k.intl.string(k.t.L0oQuh),
                    }),
                    (0, x.jsx)(iP, { children: k.intl.string(k.t["/OOFpL"]) }),
                    (0, x.jsx)(J.A, {
                        "aria-label": k.intl.string(k.t.L0oQuh),
                        disabled: r,
                        marks: iv,
                        snapToMarks: !0,
                        minValue: iv[0],
                        maxValue: iv[iv.length - 1],
                        defaultValue: l,
                        onChangeEnd: (e) => s({ combosRequiredCount: e }),
                        formatValue: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iV(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        r = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, x.jsxs)(n6.n, {
        label: k.intl.string(k.t.wVS5Sd),
        children: [
            (0, x.jsx)(nt.d, {
                label: k.intl.string(k.t.N004zO),
                description: r ? k.intl.string(k.t.GckHGw) : k.intl.string(k.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(n8.E, {
                        variant: "body-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iC.KF,
                        children: k.intl.string(k.t.UxnnC4),
                    }),
                    (0, x.jsx)(iP, { children: k.intl.string(k.t.CEOEOb) }),
                    (0, x.jsx)(J.A, {
                        "aria-label": k.intl.string(k.t.UxnnC4),
                        disabled: a,
                        marks: ij,
                        snapToMarks: !0,
                        minValue: ij[0],
                        maxValue: ij[ij.length - 1],
                        defaultValue: i,
                        onChangeEnd: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, ia._)(io.sn.MORE),
                                s(t, 1));
                        },
                        formatValue: (e) => (e === ij[ij.length - 1] ? k.intl.string(k.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, x.jsx)(iL, {
                disabled: a,
                locations: [
                    {
                        location: iN.uD.CHAT_INPUT,
                        title: k.intl.string(k.t.vUcvPP),
                        description: k.intl.string(k.t.y00OrF),
                    },
                    {
                        location: iN.uD.VOICE_USER,
                        title: k.intl.string(k.t.TcRO54),
                        description: k.intl.string(k.t.YJCxVY),
                    },
                    {
                        location: iN.uD.MENTION,
                        title: k.intl.string(k.t.oW4shO),
                        description: k.intl.string(k.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function ik(e) {
    let { updateSettings: t } = e;
    return (0, x.jsx)(n6.n, {
        label: k.intl.string(k.t.EuXv2q),
        children: (0, x.jsxs)(Q.B, {
            gap: 16,
            children: [
                (0, x.jsx)("div", { children: k.intl.string(k.t["1SLnki"]) }),
                (0, x.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: iC.hw,
                    children: (0, x.jsx)(O.$, {
                        variant: "primary",
                        size: "sm",
                        text: k.intl.string(k.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tY.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iw(e) {
    let { onChangePage: t } = e;
    return (0, x.jsxs)(n7.D, {
        onClick: function () {
            return t(1);
        },
        className: iC.Tq,
        children: [
            (0, x.jsx)("div", {
                className: iC.w1,
                children: (0, x.jsx)(n9.TrophyIcon, { size: "md", color: n4.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, x.jsxs)("div", {
                className: iC.qL,
                children: [
                    (0, x.jsx)(C.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: k.intl.string(k.t["6jI0hd"]),
                    }),
                    (0, x.jsx)(n8.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        children: k.intl.string(k.t.GuUItX),
                    }),
                ],
            }),
            (0, x.jsx)(ie.ChevronSmallRightIcon, {
                size: "custom",
                color: "currentColor",
                width: 16,
                className: iC.nT,
            }),
        ],
    });
}
function iF() {
    return n
        .e(504660)
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iB(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, _.cf)([n3.A], () => n3.A.getState()),
        [l, s] = I.useState({ x: 0, y: 0 }),
        r = (0, ib.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, il.Ak)("poggermode_enabled"),
                (0, ir.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, iu.O9)(e),
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
        1 === t && E && (0, ir.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        s({ x: e.clientX, y: e.clientY });
    }
    return (
        I.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, x.jsxs)(Q.B, {
            gap: 24,
            children: [
                (0, x.jsx)(iG, { settings: i, updateSettings: a }),
                (0, x.jsx)(iw, { onChangePage: t }),
                (0, x.jsx)(iU, { settings: i, updateSettings: a }),
                (0, x.jsx)(iV, { settings: i, updateSettings: a }),
                (0, x.jsx)(iM, { settings: i, updateSettings: a }),
                (0, x.jsx)(ik, { updateSettings: a }),
            ],
        })
    );
}
function iX(e) {
    return 0 === e ? ii.f.LEFT : ii.f.RIGHT;
}
let iz = (0, S.E2)(T.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = I.useState(0),
                [n, i] = I.useState(iX(e)),
                [l, s] = I.useState(!1),
                r = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion),
                a = l && !r;
            return (
                I.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iX(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                I.useEffect(() => {
                    (0, is._)(iR[e]);
                }, [e]),
                I.useEffect(() => {
                    Math.random() > 0.99 && (0, ia._)(io.sn.VISITOR_100);
                }, []),
                (0, x.jsxs)(x.Fragment, {
                    children: [
                        (0, x.jsx)(ii.A, {
                            className: iC.l3,
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
                                        return (0, x.jsx)(iB, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, x.jsx)(i_, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, x.jsx)("div", {
                            className: a ? iC.Sr : iC.IP,
                            children: (0, x.jsx)(it.a, {
                                className: iC.gT,
                                importData: iF,
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
            k.intl.string(k.t.AtCukI),
            k.intl.string(k.t.mqxwJO),
            k.intl.string(k.t.wVS5Sd),
            k.intl.string(k.t.Xz0ole),
            k.intl.string(k.t["Ax+IoW"]),
            k.intl.string(k.t["6jI0hd"]),
            k.intl.string(k.t.s0KCgF),
        ],
    }),
    iH = (0, S.zZ)(T.X.POGGERMODE_CATEGORY, { buildLayout: () => [iz] });
var iY = n(212043);
let iW = (0, S.t_)(T.X.POGGERMODE_PANEL, { useTitle: () => k.intl.string(k.t.AtCukI), buildLayout: () => [iH] }),
    iK = (0, S.i4)(T.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.AtCukI),
        icon: () => (0, x.jsx)("img", { alt: "", src: n(724405), className: iY.$ }),
        usePredicate: () => (0, _.bG)([n3.A], () => n3.A.settingsVisible),
        buildLayout: () => [iW],
    });
var iZ = n(307301),
    iq = n(410767),
    iQ = n(683071),
    iJ = n(97260),
    i$ = n(340344),
    i0 = n(57757),
    i1 = n(188321),
    i2 = n(695366),
    i3 = n(812729),
    i4 = n.n(i3),
    i5 = n(587895),
    i6 = n(429913),
    i8 = n(616356),
    i7 = n(644727);
function i9(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function le() {
    let e = (0, _.bG)([i8.A], () => i8.A.getStreamerActiveStreamMetadata()),
        t = (0, _.bG)(
            [i7.Ay],
            () => {
                let e = i7.Ay.getVisibleGame();
                return null != e ? i7.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i4(),
        ),
        [n] = (0, i6.A)([i9(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var lt = n(769015),
    ln = n(988468),
    li = n(526919),
    ll = n(435075);
function ls(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, x.jsx)("div", {
              className: ll.zc,
              children: (0, x.jsx)(i2.CircleErrorIcon, { size: "sm", color: n4.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, x.jsxs)("div", {
              className: ll.nt,
              children: [
                  (0, x.jsx)(lt.A, { game: n, pid: t.pid, size: lt.M.MEDIUM }),
                  (0, x.jsx)("div", {
                      className: ll.Am,
                      children: (0, x.jsx)(i2.CircleErrorIcon, {
                          size: "sm",
                          color: n4.A.colors.TEXT_FEEDBACK_WARNING,
                      }),
                  }),
              ],
          });
}
function lr(e) {
    let t = (0, _.bG)([ln.Ay], () => ln.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = le();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, li.NP)(),
        s = l && null != n && t === b.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function la(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = lr(n);
    return i
        ? (0, x.jsxs)("div", {
              className: iA()(ll.kL, t),
              children: [
                  (0, x.jsx)(ls, { game: l, application: s }),
                  (0, x.jsxs)("div", {
                      className: ll.FS,
                      children: [
                          (0, x.jsx)(n8.E, {
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? k.intl.string(k.t.vxfv7v)
                                      : null != l
                                        ? k.intl.string(k.t.fAYU2G)
                                        : k.intl.string(k.t["9V4X/c"]),
                          }),
                          (0, x.jsx)(n8.E, {
                              variant: "body-xs/medium",
                              color: "text-muted",
                              children: k.intl.format(k.t["/y6htt"], {
                                  helpCenterLink: ey.A.getArticleURL(b.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, x.jsx)(O.$, {
                      variant: "secondary",
                      size: "sm",
                      text: k.intl.string(k.t["1iI46O"]),
                      onClick: function () {
                          (0, li.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var lo = n(404778),
    lu = n(579370),
    ld = n(532624),
    lc = n(691885),
    lg = n(452027),
    lm = n(408278),
    lA = n(241326),
    lE = n(866665),
    lh = n(140735),
    lS = n(489718),
    lT = n(827343),
    lf = n(368484),
    lp = n(350535),
    lx = n(189213),
    lI = n(192308),
    l_ = n(95477),
    lb = n(128376),
    lN = n(290676);
let lC = [];
var ly = n(235986),
    lv = n(320264),
    lj = n(734057),
    lO = n(808728),
    lD = n(71393),
    lR = n(967198),
    lL = n(926140),
    lP = n(847893);
function lG() {}
let lM = [lL.rD.VOICE_CHANNEL];
function lU(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function lV() {
    return (0, x.jsx)("div", {
        className: lP.i1,
        children: (0, x.jsx)(n8.E, {
            variant: "body-md/medium",
            color: "text-muted",
            className: lP.GN,
            children: k.intl.string(k.t.zHjCd1),
        }),
    });
}
function lk(e) {
    let { keybind: t, className: n } = e,
        i = I.useRef(t);
    I.useEffect(() => {
        i.current = t;
    });
    let [l, s] = I.useState(t.params?.channelId ?? void 0),
        r = I.useCallback(() => {
            (0, lI.mM)(
                async () => (e) =>
                    (0, x.jsx)(lw, {
                        ...e,
                        onSelect: (e) => {
                            (s(e), iJ.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, x.jsx)("div", {
        className: iA()(lP.a8, n),
        children: (0, x.jsx)(lg.D, {
            label: k.intl.string(k.t.q4JpM8),
            children: (0, x.jsxs)(ly.A, {
                align: ly.A.Align.STRETCH,
                children: [
                    (0, x.jsx)("div", { className: lP.$X, children: (0, x.jsx)(lF, { channelId: l }) }),
                    (0, x.jsx)(ly.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, x.jsx)(O.$, { variant: "primary", text: k.intl.string(k.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lw(e) {
    let t,
        n,
        { transitionState: i, onClose: l, onSelect: s } = e,
        r = I.useId(),
        a = I.useRef(null),
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
                [s, r] = I.useState(""),
                [a, o] = I.useState(lC),
                u = I.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lC) : o(e);
                }, []);
            I.useEffect(
                () =>
                    lb.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = I.useState(() => new lN.A(u, n, void 0, i));
            return (
                I.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: I.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lM, autocompleterBeforeCreateSearchContext: lU }),
        c =
            ((t = "" !== o),
            (n = (0, _.yK)(
                [lO.A, lj.A, lR.A],
                () => {
                    let e = lR.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of lO.A.getVocalChannelIds(e)) {
                        let e = lj.A.getChannel(t);
                        null != e && n.push(e);
                    }
                    return n;
                },
                [t],
            )),
            t ? null : n),
        { focusedIndex: g, setFocusedIndex: m } = (function (e) {
            let [t, n] = I.useState(0),
                i = I.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                I.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    I.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let A = null != c ? c.length : d.length,
        E = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === lL.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        h =
            A > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: k.intl.string(k.t["+N3fW7"]),
                      ref: a,
                      sections: [A],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === lL.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? lj.A.getChannel(n.parent_id) : void 0,
                              r = lD.A.getGuild(n.guild_id);
                          return (0, x.jsx)(
                              lv.c3,
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
                                      null != r ? (0, x.jsx)("div", { className: lP.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, x.jsx)(lV, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, x.jsx)(lx.a, {
        transitionState: i,
        onClose: l,
        title: k.intl.string(k.t.Dm8O4e),
        subtitle: k.intl.string(k.t.q4JpM8),
        actions: void 0,
        input: (0, x.jsx)(l_.k, {
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
                                if (e?.type === lL.rD.VOICE_CHANNEL) return e.record;
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
            placeholder: k.intl.string(k.t.tG0r7g),
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
function lF(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, _.cf)([lj.A, lD.A], () => {
            let e = null != t ? lj.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lj.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? lD.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, x.jsx)(n8.E, {
              variant: "body-md/medium",
              color: "text-muted",
              className: lP.GN,
              children: k.intl.string(k.t["/fYIK7"]),
          })
        : (0, x.jsx)(lv.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lG,
              onFocus: lG,
              onMouseEnter: lG,
              focused: !1,
              children: null != l ? (0, x.jsx)("div", { className: lP.J5, children: l.name }) : null,
          });
}
var lB = n(650583),
    lX = n(731854),
    lz = n(94451);
function lH(e) {
    let { keybind: t } = e,
        n = (0, _.bG)([ld.Ay], () => ld.Ay.isWaylandPortalActive()),
        i = (0, _.bG)([ld.Ay], () => ld.Ay.getWaylandPortalShortcutState(t.id));
    return n && 0 !== t.shortcut.length && t.enabled
        ? ld.Ay.isWaylandPortalEligibleShortcut(t.shortcut)
            ? null == i
                ? null
                : i.bound
                  ? (0, lu.Rg)(i)
                      ? (0, x.jsx)("div", {
                            className: lz.$e,
                            children: (0, x.jsx)(iQ.w, {
                                type: "info",
                                message: k.intl.format(k.t.wu2lqV, { trigger: i.triggerDescription }),
                                role: "status",
                            }),
                        })
                      : null
                  : (0, x.jsx)("div", {
                        className: lz.$e,
                        children: (0, x.jsx)(iQ.w, {
                            type: "warning",
                            message: k.intl.string(k.t.PTCrUP),
                            role: "status",
                        }),
                    })
            : (0, x.jsx)("div", {
                  className: lz.$e,
                  children: (0, x.jsx)(iQ.w, { type: "warning", message: k.intl.string(k.t.J0m3aK), role: "status" }),
              })
        : null;
}
function lY(e) {
    let { keybind: t } = e,
        n = lp.dI(t.shortcut);
    return e8.A.hasBind(n)
        ? (0, x.jsx)("div", {
              className: lz.$e,
              children: (0, x.jsx)(iQ.w, { type: "warning", message: k.intl.string(k.t["7lQlw3"]), role: "status" }),
          })
        : lB.Yy.has(n)
          ? (0, x.jsx)("div", {
                className: lz.$e,
                children: (0, x.jsx)(iQ.w, {
                    type: "warning",
                    message: k.intl.format(k.t.MOIaNd, {
                        keyboardNavArticle: ey.A.getArticleURL(b.MVz.KEYBOARD_NAVIGATION),
                    }),
                    role: "status",
                }),
            })
          : void 0;
}
function lW(e) {
    let { keybind: t } = e;
    return t.action === b.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, x.jsx)(lk, { keybind: t, className: lz._M }) : null;
}
let lK = I.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        l = I.useCallback((e) => iJ.A.setKeybind({ ...t, action: e }), [t]),
        s = I.useCallback(
            (e) => {
                if (
                    ((0, lu.uL)(t.id, t.shortcut, e, ld.Ay.getWaylandPortalShortcutState(t.id)),
                    t.managed && t.action === b.hCu.PUSH_TO_TALK)
                ) {
                    let n = t.context ?? lX.x.DEFAULT;
                    lT.default.setMode(ln.Ay.getMode(n), { shortcut: e }, n);
                    return;
                }
                iJ.A.setKeybind({ ...t, shortcut: e });
            },
            [t],
        ),
        r = I.useCallback(() => iJ.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = I.useCallback(() => iJ.A.deleteKeybind(t.id), [t.id]),
        o = I.useId(),
        u = I.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, x.jsxs)("div", {
        className: lz.f_,
        children: [
            (0, x.jsx)(lY, { keybind: t }),
            (0, x.jsx)(lH, { keybind: t }),
            (0, x.jsx)("div", {
                className: lz.XI,
                children: (0, x.jsx)(lc.l, {
                    selectionMode: "single",
                    label: k.intl.string(k.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, x.jsx)("div", {
                className: lz.LE,
                children: (0, x.jsx)(lg.D, {
                    label: k.intl.string(k.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, x.jsx)(lf.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, x.jsxs)("div", {
                className: lz.ne,
                children: [
                    !t.managed &&
                        (0, x.jsx)(lm.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lA.TrashIcon,
                            "aria-label": k.intl.string(k.t.qEHmmB),
                        }),
                    (0, x.jsx)(lE.m, {
                        text: k.intl.string(t.enabled ? k.t.pNYGbx : k.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, x.jsxs)("div", {
                            children: [
                                (0, x.jsx)(lh.A, {
                                    id: o,
                                    children: k.intl.format(t.enabled ? k.t["myr/Y0"] : k.t.lYhtPO, { actionName: u }),
                                }),
                                (0, x.jsx)(lS.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, x.jsx)(n8.E, {
                variant: "body-xs/normal",
                color: "text-subtle",
                className: lz.h_,
                children: n[t.action],
            }),
            (0, x.jsx)(lW, { keybind: t }),
        ],
    });
});
var lZ = n(426819),
    lq = n(734066),
    lQ = n(880144),
    lJ = n(994778),
    l$ = n(244055),
    l0 = n(603933);
function l1() {
    let e = (0, _.bG)([ld.Ay], () => ld.Ay.isWaylandPortalActive()),
        t = I.useMemo(() => e && (0, lu.u)(), [e]);
    return e
        ? (0, x.jsx)(iQ.w, {
              type: "info",
              message: k.intl.string(k.t.AcH7R7),
              role: "none",
              action: t ? { text: k.intl.string(k.t.ZPHaPE), onClick: lu.qM } : void 0,
          })
        : null;
}
let l2 = function () {
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
            } = ((e = (0, _.bG)([ld.Ay], () => ld.Ay.getState())),
            (t = (0, _.bG)([ln.Ay], () => (0, lQ.A)(ln.Ay))),
            (n = (0, _.bG)([ln.Ay], () => ln.Ay.supports(lX.O5.VIDEO))),
            (i = (0, _.bG)([l$.A], () => l$.A.isSupported)),
            (l = (0, lq.sw)()),
            (s = (0, lq.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: l } = e;
                    return Z()(t)
                        .reject(
                            (e) =>
                                e.managed &&
                                ![
                                    b.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                    b.hCu.SAVE_CLIP,
                                    b.hCu.SAVE_SCREENSHOT,
                                ].includes(e.action),
                        )
                        .reject((e) => !n && (e.action === b.hCu.SAVE_CLIP || e.action === b.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !i && e.action === b.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !l && (e.action === b.hCu.SOUNDBOARD || e.action === b.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({ keybinds: e, enableClips: l, enableScreenshotKeybind: s, allowSoundboard: (r = (0, e7.uF)()) }),
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
                            { id: "unassigned", value: b.hCu.UNASSIGNED },
                            { id: "push-to-talk", value: b.hCu.PUSH_TO_TALK },
                            { id: "push-to-talk-priority", value: b.hCu.PUSH_TO_TALK_PRIORITY },
                            { id: "push-to-mute", value: b.hCu.PUSH_TO_MUTE },
                            { id: "vad-priority", value: b.hCu.VAD_PRIORITY },
                            { id: "toggle-mute", value: b.hCu.TOGGLE_MUTE },
                            { id: "toggle-deafen", value: b.hCu.TOGGLE_DEAFEN },
                            { id: "toggle-voice-mode", value: b.hCu.TOGGLE_VOICE_MODE },
                            { id: "toggle-streamer-mode", value: b.hCu.TOGGLE_STREAMER_MODE },
                            { id: "toggle-voice-channel-chat", value: b.hCu.TOGGLE_VOICE_CHANNEL_CHAT },
                        ];
                    return (
                        i && a.push({ id: "toggle-camera", value: b.hCu.TOGGLE_CAMERA }),
                        t &&
                            (a.push({ id: "toggle-overlay-input-lock", value: b.hCu.TOGGLE_OVERLAY_INPUT_LOCK }),
                            a.push({
                                id: "activate-overlay-region-text-widget",
                                value: b.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                            })),
                        n &&
                            ((0, e7.uF)() || ln.Ay.getUseSystemScreensharePicker()) &&
                            a.push({ id: "toggle-go-live-streaming", value: b.hCu.TOGGLE_GO_LIVE_STREAMING }),
                        (0, e7.xl)() &&
                            (a.push(
                                { id: "navigate-back", value: b.hCu.NAVIGATE_BACK },
                                { id: "navigate-forward", value: b.hCu.NAVIGATE_FORWARD },
                                { id: "switch-to-voice-channel", value: b.hCu.SWITCH_TO_VOICE_CHANNEL },
                                { id: "disconnect-from-voice-channel", value: b.hCu.DISCONNECT_FROM_VOICE_CHANNEL },
                            ),
                            l &&
                                a.push(
                                    { id: "soundboard", value: b.hCu.SOUNDBOARD },
                                    { id: "soundboard-hold", value: b.hCu.SOUNDBOARD_HOLD },
                                ),
                            s &&
                                (a.push({ id: "save-clip", value: b.hCu.SAVE_CLIP }),
                                r && a.push({ id: "save-screenshot", value: b.hCu.SAVE_SCREENSHOT }))),
                        a.map((e) => {
                            let { id: t, value: n } = e;
                            return { id: t, value: n, label: (0, lJ.B)(n) ?? n };
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
                            [b.hCu.UNASSIGNED]: k.intl.string(k.t.rvlNLv),
                            [b.hCu.PUSH_TO_MUTE]: k.intl.string(k.t.xtESim),
                            [b.hCu.PUSH_TO_TALK]: k.intl.string(k.t.wTcBSy),
                            [b.hCu.PUSH_TO_TALK_PRIORITY]: k.intl.string(k.t.FhHvWH),
                            [b.hCu.TOGGLE_MUTE]: k.intl.string(k.t.X2fbUm),
                            [b.hCu.TOGGLE_DEAFEN]: k.intl.string(k.t.MjREZV),
                            [b.hCu.TOGGLE_VOICE_MODE]: k.intl.string(k.t.snm5YW),
                            [b.hCu.TOGGLE_STREAMER_MODE]: k.intl.string(k.t.YszLLx),
                            [b.hCu.VAD_PRIORITY]: k.intl.string(k.t.rSe8IZ),
                            [b.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: k.intl.string(k.t.desfB4),
                        };
                    return (
                        i && (r[b.hCu.TOGGLE_CAMERA] = k.intl.string(k.t.v1JBtL)),
                        t && (r[b.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = k.intl.string(k.t.IoP5vc)),
                        n && (0, e7.uF)() && (r[b.hCu.TOGGLE_GO_LIVE_STREAMING] = k.intl.string(k.t.s4C238)),
                        (0, e7.xl)() &&
                            ((r[b.hCu.NAVIGATE_BACK] = k.intl.string(k.t.nKDlEt)),
                            (r[b.hCu.NAVIGATE_FORWARD] = k.intl.string(k.t.DK0FFk)),
                            (r[b.hCu.SOUNDBOARD] = (0, e7.uF)()
                                ? k.intl.string(k.t["5wJefL"])
                                : k.intl.string(k.t.gzjsSP)),
                            (r[b.hCu.SOUNDBOARD_HOLD] = (0, e7.uF)()
                                ? k.intl.string(k.t.RRkZc9)
                                : k.intl.string(k.t.laNlTl)),
                            l &&
                                ((r[b.hCu.SAVE_CLIP] = k.intl.string(k.t.z3Wbam)),
                                s && (r[b.hCu.SAVE_SCREENSHOT] = k.intl.string(k.t.m0zd57)))),
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
            ? (0, x.jsxs)(Q.B, {
                  gap: 16,
                  children: [
                      (0, x.jsx)(l1, {}),
                      (0, x.jsx)(n8.E, {
                          variant: "body-sm/normal",
                          color: "text-subtle",
                          children: k.intl.string(k.t.vyYgWp),
                      }),
                  ],
              })
            : (0, x.jsxs)(Q.B, {
                  gap: 16,
                  children: [
                      (0, x.jsx)(l1, {}),
                      (0, x.jsx)("div", {
                          className: l0.A,
                          children: a.map((e, t) =>
                              (0, x.jsxs)(
                                  I.Fragment,
                                  {
                                      children: [
                                          (0, x.jsx)(lK, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                          t < a.length - 1 ? (0, x.jsx)(lo.c, { className: l0.y, gap: 24 }) : null,
                                      ],
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  ],
              });
    },
    l3 = (0, S.E2)(T.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [k.intl.string(k.t["069nVT"])],
        Component: function () {
            return nI.Av
                ? (0, x.jsx)(l2, {})
                : (0, x.jsx)(iQ.w, {
                      type: "info",
                      message: k.intl.format(k.t.mPi3F3, { downloadLink: b.X7G.DOWNLOAD }),
                      role: "none",
                  });
        },
    });
var l4 = n(475358),
    l5 = n(552992),
    l6 = n(793650);
function l8(e) {
    let { children: t } = e;
    return t([lZ.Q_.MESSAGE, lZ.Q_.NAVIGATION, lZ.Q_.DND, lZ.Q_.CHAT, lZ.Q_.VOICE_AND_VIDEO, lZ.Q_.MISCELLANEOUS]);
}
function l7(e) {
    let { showHeader: t = !0 } = e,
        n = Z()((0, lZ.Bx)())
            .filter((e) => e.description !== k.intl.string(k.t.HnNtEI))
            .filter((e) => e.predicate?.() !== !1)
            .groupBy((e) => e.group)
            .value();
    return (0, x.jsxs)(Q.B, {
        gap: 48,
        children: [
            (0, x.jsx)(n6.n, {
                label: t ? k.intl.string(k.t.Lz5KHI) : void 0,
                children: (0, x.jsx)("div", {
                    className: l6.jh,
                    children: (0, x.jsxs)("div", {
                        className: l6.yZ,
                        children: [
                            (0, x.jsx)(n8.E, { variant: "body-md/normal", children: k.intl.string(k.t.sMWLBj) }),
                            (0, x.jsx)("div", {
                                className: l6.DM,
                                children: (0, x.jsx)(l4.e, { shortcut: l5.z.binds["0"], className: l6.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, x.jsx)(l8, {
                children: (e) =>
                    (0, x.jsx)(x.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, lZ.Gm)(e),
                                l = (0, lZ.zF)(e),
                                s = n[e];
                            return (0, x.jsx)(
                                n6.n,
                                {
                                    label: i,
                                    description: l,
                                    children: (0, x.jsx)("div", {
                                        className: l6.jh,
                                        children: s.map((e, t) =>
                                            (0, x.jsxs)(
                                                I.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, x.jsx)(lo.c, {}),
                                                        (0, x.jsxs)("div", {
                                                            className: l6.yZ,
                                                            children: [
                                                                (0, x.jsx)(n8.E, {
                                                                    variant: "body-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, x.jsx)("div", {
                                                                    className: l6.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, x.jsx)(
                                                                            l4.e,
                                                                            { shortcut: e, className: l6.LE },
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
let l9 = (0, S.E2)(T.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [k.intl.string(k.t.Lz5KHI)],
        Component: () => (0, x.jsx)(l7, { showHeader: !1 }),
    }),
    se = (0, S.zD)(T.X.GAME_MODE_ENABLED_SETTING, {
        useTitle: () => k.intl.string(eL.default.rea2Ar),
        useSubtitle: () => k.intl.string(eL.default.DwBO0x),
        useValue: () => (0, _.bG)([i1.A], () => i1.A.isEnabledFor(!0)),
        setValue: (e) => {
            (tc.default.track(b.HAw.GAME_MODE_TOGGLED, { enabled: e, running_game_id: i1.A.runningGameId }),
                tr.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: e }));
        },
    });
var st = n(253400),
    sn = n(546385);
let si = (0, S.E2)(T.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nI.Av && !(0, nI.cX)(),
    useSearchTerms: () => [k.intl.string(k.t["/HIxyY"]), k.intl.string(k.t.B0hqpb)],
    Component: function () {
        let [e] = I.useState(() => st.Ay.getEnableHardwareAcceleration()),
            t = k.intl.string(k.t["/HIxyY"]),
            n = k.intl.string(k.t.B0hqpb);
        return (0, x.jsxs)(Q.B, {
            children: [
                (0, x.jsx)(nt.d, { label: t, description: n, checked: e, onChange: sl }),
                !e && (0, x.jsx)(sn.A, { look: sn.k.WARNING, children: k.intl.string(k.t.j7S6IX) }),
            ],
        });
    },
});
function sl(e) {
    let t = e ? k.intl.format(k.t.LYXRxL, {}) : k.intl.format(k.t.uDP3Kz, {});
    (0, n5.A)({
        title: k.intl.string(k.t.aqpAvn),
        subtitle: t,
        confirmText: k.intl.string(k.t.vT7ckk),
        onConfirm: () => {
            st.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let ss = (0, eN.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 })),
    sr = (0, S.zD)(T.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => k.intl.string(k.t["3BeZti"]),
        usePredicate: () => nI.Av && !(0, nI.cX)(),
        useValue: () => ss.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (ss.setState({ openOnStartup: e }), st.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            st.Ay.getOpenOnStart().then((e) => ss.setState({ openOnStartup: e }));
        },
    }),
    sa = (0, S.zD)(T.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => k.intl.string(k.t.dJ5MUh),
        useSubtitle: () => k.intl.string(k.t.nQavHr),
        usePredicate: () => nI.Av && !(0, nI.cX)(),
        useValue: () => ss.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (ss.setState({ minimizeToTray: e }), st.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            st.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => ss.setState({ minimizeToTray: e }));
        },
    }),
    so = (0, S.zD)(T.X.OS_START_MINIMIZED, {
        useTitle: () => k.intl.string(k.t.GfBL83),
        useSubtitle: () => k.intl.string(k.t.XGyhhc),
        usePredicate: () => (0, nI.uF)(),
        useValue: () => ss.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (ss.setState({ startMinimized: e }), st.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !ss.useState((e) => e.openOnStartup),
        initialize: () => {
            st.Ay.getSetting("START_MINIMIZED", !1).then((e) => ss.setState({ startMinimized: e }));
        },
    });
var su = n(61628);
let sd = new Set(["failure", "unknown"]),
    sc = (0, S.E2)(T.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [k.intl.string(k.t.roHq80)],
        Component: function () {
            let [e, t] = I.useState(!1),
                [n, i] = I.useState(() => (0, li.TC)()),
                l = (0, _.bG)([i7.Ay], () => i7.Ay.getSystemServiceStatus("input-service")),
                s = I.useCallback(async () => {
                    (t(!0),
                        n ? await (0, li.z8)("windows-settings") : await (0, li.sL)("windows-settings"),
                        t(!1),
                        i((0, li.TC)()));
                }, [n]);
            return (0, x.jsxs)("div", {
                className: su.q,
                children: [
                    (0, x.jsxs)("div", {
                        className: su.L,
                        children: [
                            (0, x.jsxs)(Q.B, {
                                direction: "horizontal",
                                children: [
                                    (0, x.jsx)(n8.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        children: k.intl.string(k.t.roHq80),
                                    }),
                                    n &&
                                        (0, x.jsxs)(x.Fragment, {
                                            children: [
                                                (0, x.jsx)(n8.E, {
                                                    variant: "body-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, x.jsx)(n8.E, {
                                                    variant: "body-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : sd.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: (function (e) {
                                                        switch (e.state) {
                                                            case "unknown":
                                                                return k.intl.string(k.t["KW+nqT"]);
                                                            case "disabled":
                                                                return k.intl.string(k.t["Q/wAF7"]);
                                                            case "disconnected":
                                                                return k.intl.string(k.t.Xvs9IM);
                                                            case "initializing":
                                                                return k.intl.string(k.t.h4qz8W);
                                                            case "connecting":
                                                                return k.intl.string(k.t.fSu9XF);
                                                            case "handshaking":
                                                                return k.intl.string(k.t["00aYLJ"]);
                                                            case "running":
                                                                return k.intl.string(k.t["54TB7Z"]);
                                                            case "waiting-for-retry":
                                                                return k.intl.string(k.t["0FONwi"]);
                                                            case "failure":
                                                                return k.intl.string(k.t.Ic0nkd);
                                                            default:
                                                                (0, ic.xb)(e.state);
                                                        }
                                                    })(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, x.jsx)(n8.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: k.intl.format(k.t["8CAL+D"], {
                                    helpCenterLink: ey.A.getArticleURL(b.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, x.jsx)(O.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: s,
                        text: n ? k.intl.string(k.t.pAwbdL) : k.intl.string(k.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: li.XQ,
    });
var sg = n(687813),
    sm = n(613412),
    sA = n(858899),
    sE = n(384077);
let sh = (0, S.Tf)(T.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => k.intl.string(k.t.o6Qr6n),
    useSubtitle: () => k.intl.string(k.t.OuGtH8),
    useLabel: () => k.intl.string(k.t.bm1WjO),
    usePredicate: () => nI.Av && nN.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n5.A)({
            title: k.intl.string(k.t.o6Qr6n),
            subtitle: k.intl.string(k.t.JEHHJ1),
            confirmText: k.intl.string(k.t.bm1WjO),
            onConfirm: () => {
                ((0, tY.default)(),
                    (async function () {
                        try {
                            await (async function () {
                                var e;
                                let t = nN.A.tracing;
                                if (null == t) return;
                                (0, sA.P0)({ text: k.intl.string(k.t.qGRW8d) });
                                let [n, i, l] = await Promise.all([
                                        t.capturePerformanceTrace({ durationMs: 3e4 }),
                                        nN.A.processUtils.getSystemInfo(),
                                        nN.A.processUtils.getSystemMetrics((0, sE.uD)()),
                                    ]),
                                    s = {
                                        captured_at: n.startedAtISO,
                                        duration_ms: n.durationMs,
                                        categories: n.categories,
                                        ...(0, sm.getSuperProperties)(),
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
                                        "system_info.json": (0, sg._u)(JSON.stringify(r, null, 2)),
                                        "metadata.json": (0, sg._u)(JSON.stringify(s, null, 2)),
                                    }),
                                    new Promise((t, n) => {
                                        (0, sg.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
                                    })),
                                    o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
                                    { filePath: u } = await t.saveTraceToDownloads(a, o);
                                (nN.A.fileManager.showItemInFolder(u),
                                    (0, sA.P0)({ text: k.intl.string(k.t.gpCRFS), variant: "success" }));
                            })();
                        } catch {
                            (0, sA.P0)({ text: k.intl.string(k.t["8ihs9i"]), variant: "critical" });
                        }
                    })());
            },
        });
    },
});
function sS() {
    tr.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var sT = n(287809);
let sf = (0, S.Tf)(T.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        sS();
    },
});
var sp = n(114129),
    sx = n(442325),
    sI = n(858760);
let s_ = (0, S.zD)(T.X.ENABLE_TABS_EXPERIENCE, {
    useTitle: () => "Enable tabs experience",
    useSubtitle: () => "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
    usePersistentBadge: () => ({ badgeType: p.Xi.BETA }),
    usePredicate: () => sI.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nI.xl)(),
    useValue: () => (0, _.bG)([sx.A], () => sx.A.isUserOptedIn()),
    setValue: sp.lj,
});
var sb = n(813645);
let sN = {};
var sC = n(735729),
    sy = n(146849);
let sv = (0, S.zD)(T.X.NATIVE_MARKDOWN, {
        useTitle: () => k.intl.string(k.t["5CIvT4"]),
        usePredicate: () => sy.wG.useConfig({ location: "NativeMarkdownSetting" }).enabled,
        useValue: () => (0, sC.A)(sy.XQ),
        setValue: (e) =>
            (function (e) {
                let { enabled: t = !sb.A.get(e) } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sN;
                tr.h.dispatch({ type: "LAB_FEATURE_TOGGLE", labFeature: e, enabled: t });
            })(sy.XQ, { enabled: e }),
    }),
    sj = (0, S.zZ)(T.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => k.intl.string(k.t["8/udY0"]),
        buildLayout: () => [sf, sh, s_, sv],
    }),
    sO = (0, S.zZ)(T.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => k.intl.string(k.t.cg6ltt),
        buildLayout: () => [sr, so, sa, si],
        usePredicate: () => nI.Av && ((0, nI.uF)() || (0, nI.j9)()),
        initialize: () => {
            !(async function () {
                let e = await st.Ay.getOpenOnStart(),
                    t = await st.Ay.getSetting("START_MINIMIZED", !1),
                    n = await st.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
                ss.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
            })();
        },
    }),
    sD = (0, S.zZ)(T.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => k.intl.string(k.t["069nVT"]),
        useSubtitle: () => k.intl.string(k.t.T4LZVL),
        buildLayout: () => [l3],
        initialize: () => (iJ.A.enableAll(!1), () => iJ.A.enableAll(!0)),
        useInlineNotice: function () {
            return nI.Av
                ? {
                      type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, x.jsxs)(Q.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, x.jsx)(iQ.w, {
                                      type: "info",
                                      message: k.intl.string(k.t["5pkmHa"]),
                                      role: "none",
                                  }),
                                  (0, x.jsx)(la, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nI.Av
                ? {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: p.UV.BUTTON,
                              text: k.intl.string(k.t.zk6Xbs),
                              variant: "secondary",
                              icon: iZ.PlusSmallIcon,
                              onClick: () => iJ.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    sR = (0, S.zZ)(T.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => k.intl.string(k.t.Lz5KHI),
        buildLayout: () => [l9],
    }),
    sL = (0, S.zZ)(T.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => k.intl.string(k.t["+XZgmA"]),
        usePredicate: () => nI.Av && ((0, nI.uF)() || (0, nI.j9)()),
        buildLayout: () => [sc],
    }),
    sP = (0, S.zZ)(T.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => k.intl.string(eL.default.QG0axY),
        usePredicate: () =>
            (0, _.bG)(
                [i1.A, i$.A],
                () =>
                    e7.isPlatformEmbedded &&
                    i1.A.hasDetectedGame &&
                    (0, i0.v)({ location: "GameModeCategory" }).enabled,
            ),
        buildLayout: () => [se],
    }),
    sG = (0, S.t_)(T.X.SYSTEM_PANEL, {
        useTitle: () => k.intl.string(k.t["VJ/qKo"]),
        buildLayout: () => [sO, sD, sR, sL, sP, sj],
    }),
    sM = (0, S.i4)(T.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t["VJ/qKo"]),
        icon: iq.KeyboardIcon,
        buildLayout: () => [sG],
    });
var sU = n(831544),
    sV = n(922795),
    sk = n(212245),
    sw = n(329551),
    sF = n(352430),
    sB = n(854325),
    sX = n(952572),
    sz = n(717359);
let sH = (0, S.E2)(T.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [k.intl.string(k.t.lZTUPs)],
        usePredicate: sX.A,
        Component: function () {
            let e = (0, sk.p)(),
                t = I.useRef(!1),
                n = (0, _.bG)([ln.Ay], () => ln.Ay.getVideoDeviceId()),
                [i, l] = I.useState((0, sw.i)(sT.default.getCurrentUser())),
                s = I.useRef(i);
            return (
                I.useEffect(
                    () => () => {
                        t.current && (0, sF._C)(s.current);
                    },
                    [],
                ),
                (0, x.jsx)(sz.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (s.current = n), l(n), (0, sB.gB)(n, { location: e.location }).catch(b.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    sY = (0, S.zD)(T.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => k.intl.string(k.t["3Ppr1h"]),
        useSubtitle: () => k.intl.string(k.t.WNbX4O),
        useValue: V.bm.useSetting,
        setValue: (e) => {
            (V.bm.updateSetting(e), tc.default.track(b.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var sW = n(625841),
    sK = n(74848),
    sZ = n(204050);
let sq = (0, eN.D)(() => ({ previewEnabled: !1 })),
    sQ = (0, S.E2)(T.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [k.intl.string(k.t.FsQ3OR)],
        Component: function () {
            let e = (0, _.bG)([ln.Ay], () => ln.Ay.isVideoAvailable()),
                { id: t } = (0, sK.x5)(lX.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eH.Ay)();
            return (0, x.jsx)(sW.U, {
                label: k.intl.string(k.t.FsQ3OR),
                deviceType: lX.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, sZ.p)()
                    ? k.intl.format(k.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (sq.setState({ previewEnabled: !1 }),
                                  window.open((0, sZ.i)(t)),
                                  tc.default.track(b.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var sJ = n(745317),
    s$ = n(9219);
let s0 = (0, S.E2)(T.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [k.intl.string(k.t.JIf4v7)],
        Component: function () {
            let e = ln.Ay.getCameraComponent(),
                t = (0, _.bG)([ln.Ay], () => ln.Ay.getVideoDeviceId()),
                n = sq.useField("previewEnabled"),
                i = (0, _.bG)([ln.Ay], () => ln.Ay.isVideoAvailable());
            return ((0, eb.l0)(() => {
                sq.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, x.jsx)("div", {
                      className: s$.T9,
                      children: (0, x.jsxs)("div", {
                          className: s$.Xi,
                          children: [
                              (0, x.jsxs)("div", {
                                  className: s$.UI,
                                  children: [
                                      (0, x.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, x.jsx)(sJ.kE, {}),
                                  ],
                              }),
                              (0, x.jsx)(sJ.eK, {}),
                          ],
                      }),
                  })
                : (0, x.jsx)("div", {
                      className: s$.T9,
                      children: (0, x.jsx)(lE.m, {
                          text: i ? null : k.intl.string(k.t["8jSzSe"]),
                          children: (0, x.jsx)(O.$, {
                              variant: "primary",
                              text: k.intl.string(k.t.JIf4v7),
                              onClick: () => sq.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    s1 = (0, S.zZ)(T.X.CAMERA_CATEGORY, {
        useTitle: () => k.intl.string(k.t.uje3P9),
        usePredicate: () => (0, _.bG)([ln.Ay], () => ln.Ay.supports(lX.O5.VIDEO)),
        buildLayout: () => [s0, sY, sQ, sH],
    }),
    s2 = (0, S.zD)(T.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => k.intl.string(k.t.qFphsa),
        useSubtitle: () => k.intl.string(k.t.cQfwyY),
        usePredicate: function () {
            return (0, nI.j9)();
        },
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (lT.default.setOpenH264Enabled(e),
                (0, n5.A)({
                    title: k.intl.string(k.t["9jf31O"]),
                    subtitle: k.intl.string(k.t["J2wg+X"]),
                    confirmText: k.intl.string(k.t.BddRzS),
                    onConfirm: () => nN.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    s3 = (0, S.zD)(T.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => k.intl.string(k.t["r6K+TL"]),
        useSubtitle: () => k.intl.string(k.t["xl9+I6"]),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getAecDump());
        },
        setValue: lT.default.setAecDump,
        usePredicate: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.isAecDumpSupported());
        },
    });
var s4 = n(139033),
    s5 = n(862482),
    s6 = n(640238),
    s8 = n(825484),
    s7 = n(497029),
    s9 = n(487329),
    re = n(353835);
let rt = (0, eN.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function rn() {
    let e = await nN.A.fileManager.getLogPath();
    nN.A.fileManager.showItemInFolder(e);
}
function ri(e) {
    (0, n5.A)({
        title: k.intl.string(k.t["7UXEF2"]),
        subtitle: k.intl.string(k.t.IYPrRl),
        confirmText: k.intl.string(k.t.BddRzS),
        onConfirm: () => lT.default.setDebugLogging(e),
    });
}
async function rl() {
    await (async function (e) {
        let { onUploadStart: t, onUploadFinish: n } = e;
        t?.();
        try {
            let e, t;
            (await ln.Ay.getMediaEngine().writeAudioDebugState(),
                await re.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
                await (0, s7.a)(b.Umv.RTC),
                (e = k.intl.string(k.t["fKBB8+"])),
                (t = k.intl.string(k.t.BvyxE7)),
                (0, s4.A)({ title: e, subtitle: t }));
        } catch (s) {
            var i;
            let e, t, n, l;
            ((i = s.displayMessage),
                (e = k.intl.string(k.t.QZg0J7)),
                (t = i ?? k.intl.string(k.t.VzHcSm)),
                (n = (0, s9.B1)(s9.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
                (l = k.intl.formatToPlainString(k.t.ejOT95, { errorCode: n })),
                (0, lI.qf)((n) =>
                    (0, x.jsx)(s6.a, {
                        header: e,
                        confirmButtonColor: s5.$n.Colors.BRAND,
                        confirmText: k.intl.string(k.t.BddRzS),
                        ...n,
                        children: (0, x.jsxs)("div", {
                            style: { display: "flex", flexDirection: "column", height: "100%" },
                            children: [
                                (0, x.jsx)(n8.E, { variant: "body-md/normal", children: t }),
                                (0, x.jsx)(n8.E, {
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
        onUploadStart: () => rt.setState({ isUploading: !0 }),
        onUploadFinish: () => rt.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let rs = (0, S.E2)(T.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [k.intl.string(k.t["726JHL"]), k.intl.string(k.t.EbwFfR), k.intl.string(k.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, _.bG)([ln.Ay], () => ln.Ay.supports(lX.O5.DEBUG_LOGGING));
        return nI.Av && e && null != nN.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, _.bG)([ln.Ay], () => ln.Ay.getDebugLogging()),
            t = rt.useField("isUploading"),
            n = rt.useField("isDisabled"),
            i = I.useId();
        return (0, x.jsxs)("fieldset", {
            children: [
                (0, x.jsx)(lh.A, { tag: "legend", id: i, children: k.intl.string(k.t["FjN+et"]) }),
                (0, x.jsxs)(Q.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, x.jsx)(nt.d, {
                            label: k.intl.string(k.t["726JHL"]),
                            description: k.intl.string(k.t["/7ak9Q"]),
                            checked: e,
                            onChange: ri,
                        }),
                        (0, x.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, x.jsxs)(s8.e, {
                                children: [
                                    (0, x.jsx)(O.$, {
                                        variant: "secondary",
                                        text: k.intl.string(k.t.EbwFfR),
                                        onClick: rl,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": k.intl.string(k.t.aY1OH2),
                                    }),
                                    (0, x.jsx)(O.$, {
                                        variant: "secondary",
                                        text: k.intl.string(k.t.nuPtYi),
                                        onClick: rn,
                                        "aria-label": k.intl.string(k.t["L/hFOe"]),
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
var rr = n(233545),
    ra = n(58663),
    ro = n(412780);
function ru() {
    return (0, _.bG)([sT.default, ln.Ay], () => {
        let e = sT.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === st.Ay.releaseChannel || "development" === st.Ay.releaseChannel,
            i = ln.Ay.supports(lX.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let rd = (0, S.zD)(T.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => k.intl.string(k.t.U4FgFK),
        useSubtitle: () => k.intl.string(k.t.Lm72RU),
        useValue: function () {
            return (0, _.bG)([ro.Ay], () => ro.Ay.shouldRecordNextConnection());
        },
        setValue: ra.A,
        usePredicate: ru,
    }),
    rc = (0, S.Tf)(T.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => k.intl.string(k.t.nJnOHO),
        useLabel: () => k.intl.string(k.t["3xjX0U"]),
        onClick: rr.YW,
        usePredicate: ru,
    });
var rg = n(926919),
    rm = n(111162),
    rA = n(855302);
let rE = (0, S.zD)(T.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => k.intl.string(k.t["0CEP6e"]),
        useSubtitle: () => k.intl.string(k.t["kBXuW+"]),
        useValue: function () {
            return (0, _.bG)([rm.default], () => rm.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = rm.default.isStreamInfoOverlayEnabled;
            ((0, rA.A)("stream_info_overlay_enabled", e, t), (0, rg.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return V.Q_.useSetting();
        },
    }),
    rh = (0, S.bd)(T.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? k.intl.string(k.t["/B4I8H"]) : k.intl.string(k.t.BTlsWH)),
        useCollapsedSubtitle: () => k.intl.string(k.t.la1Ys4),
        buildLayout: () => [rE, s3, rd, rc, rs],
    });
function rS(e, t, n) {
    (0, n5.A)({ title: e, subtitle: t, confirmText: k.intl.string(k.t.BddRzS), onConfirm: n });
}
let rT = (0, S.Tf)(T.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => k.intl.string(k.t.SXfv1v),
        useSubtitle: () => k.intl.string(k.t["buA5/q"]),
        useLabel: () => k.intl.string(k.t.yBZMsQ),
        onClick: function () {
            rS(k.intl.string(k.t["4iKQ/3"]), k.intl.string(k.t.sQ42iT), lT.default.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rf = (0, S.zZ)(T.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => k.intl.string(k.t.UDAU9K),
        buildLayout: () => [s2, rh, rT],
    });
var rp = n(343446),
    rx = n(360729),
    rI = n(303227),
    r_ = n(558076),
    rb = n(687782);
let rN = (0, S.zD)(T.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => k.intl.string(rb.default.qYzpsI),
        useSubtitle: () => k.intl.string(rb.default["+vMoL1"]),
        useValue: () => (0, _.bG)([r_.A], () => r_.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rI.Ft)(e),
    }),
    rC = (0, S.zZ)(T.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => k.intl.string(rb.default.wRLmM0),
        usePredicate: function () {
            let e = (0, _.yK)([lD.A], () => lD.A.getGuildIds()),
                { loaded: t, override: n } = (0, _.cf)([rp.A], () => ({
                    loaded: rp.A.getLoadedGuildExperiment(rx.vJ),
                    override: rp.A.getExperimentOverrideDescriptor(rx.vJ),
                }));
            return (0, I.useMemo)(
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
        buildLayout: () => [rN],
    });
var ry = n(347481),
    rv = n(852712),
    rj = n(179172),
    rO = n(868162);
let rD = (0, S.zD)(T.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => k.intl.string(k.t.gF8HJo),
        useSubtitle: () => k.intl.string(k.t.cfrfyZ),
        useValue: function () {
            return (0, _.bG)([rO.A], () => !0 !== rO.A.getState().neverShowModal);
        },
        setValue: function (e) {
            rj.Bv(!e);
        },
        usePredicate: function () {
            return e7.isPlatformEmbedded;
        },
    }),
    rR = (0, S.zD)(T.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => k.intl.string(k.t.cUMdH0),
        useSubtitle: () => k.intl.string(k.t["6EjbvA"]),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            lT.default.setAutomaticGainControl(e, {
                page: b.liQ.USER_SETTINGS,
                section: b.JJy.SETTINGS_VOICE_AND_VIDEO,
            });
        },
        useDisabled: function () {
            return (0, _.bG)([ln.Ay, ry.A], () => {
                let e = ln.Ay.getInputDeviceId();
                return ry.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.isAutomaticGainControlSupported() && ln.Ay.isInputProfileCustom());
        },
    }),
    rL = (0, S.sN)(T.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => k.intl.string(k.t.AlybXj),
        setValue: (e) =>
            lT.default.setAttenuation(
                e,
                ln.Ay.getAttenuateWhileSpeakingSelf(),
                ln.Ay.getAttenuateWhileSpeakingOthers(),
            ),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => ln.Ay.getAttenuation(),
    }),
    rP = (0, S.zD)(T.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => k.intl.string(k.t["9dHxRY"]),
        useValue: () => (0, _.bG)([ln.Ay], () => ln.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lT.default.setAttenuation(ln.Ay.getAttenuation(), e, ln.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rG = (0, S.zD)(T.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => k.intl.string(k.t.SMt0Gr),
        useValue: () => (0, _.bG)([ln.Ay], () => ln.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lT.default.setAttenuation(ln.Ay.getAttenuation(), ln.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rM = (0, S.FW)(T.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => k.intl.string(k.t.oSdBvW),
        useSubtitle: () => k.intl.string(k.t["0A/8Rt"]),
        usePredicate: () => (0, _.bG)([ln.Ay], () => ln.Ay.supports(lX.O5.ATTENUATION)),
        buildLayout: () => [rL, rP, rG],
    }),
    rU = (0, S.zD)(T.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => k.intl.string(k.t.DFPXIG),
        useSubtitle: () => k.intl.string(k.t["UyRX+C"]),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lT.default.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.showBypassSystemInputProcessing() && ln.Ay.isInputProfileCustom());
        },
    }),
    rV = (0, S.zD)(T.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => k.intl.string(k.t.jrWHD3),
        useSubtitle: () => k.intl.string(k.t.YCCMkJ),
        useValue: function () {
            return (0, _.bG)([ef.Ay], () => !ef.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, rA.A)("switch_channel_warning_enabled", e, !ef.Ay.disableVoiceChannelChangeAlert),
                nB.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rk = (0, S.zD)(T.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => k.intl.string(k.t.BbESsg),
        useSubtitle: () => k.intl.string(k.t.LoOB1F),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => {
                let { vadUseKrisp: e } = ln.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = ln.Ay.getMode();
            lT.default.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, _.bG)(
                [ln.Ay],
                () => ln.Ay.getMode() !== b.TBI.VOICE_ACTIVITY || !ln.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.isAdvancedVoiceActivitySupported() && ln.Ay.isInputProfileCustom());
        },
    }),
    rw = (0, S.Hn)(T.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => k.intl.string(k.t.wVBHr0),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rS(k.intl.string(k.t.uY7AcQ), k.intl.string(k.t.gBqik6), () => lT.default.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, _.cf)([ln.Ay], () => ({
                legacyAudioSubsystemSupported: ln.Ay.supports(lX.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: ln.Ay.supports(lX.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: ln.Ay.supports(lX.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return I.useMemo(() => {
                let i;
                return (
                    (i = [{ id: lX.rB.STANDARD, value: lX.rB.STANDARD, label: k.intl.string(k.t.dqb2JZ) }]),
                    e && i.push({ id: lX.rB.LEGACY, value: lX.rB.LEGACY, label: k.intl.string(k.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: lX.rB.EXPERIMENTAL, value: lX.rB.EXPERIMENTAL, label: k.intl.string(k.t.liQmtr) }),
                    n && i.push({ id: lX.rB.AUTOMATIC, value: lX.rB.AUTOMATIC, label: k.intl.string(k.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rF = (0, S.zD)(T.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => k.intl.string(k.t.uancuJ),
        useSubtitle: () => k.intl.string(k.t.I1Eoqq),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getQoS());
        },
        setValue: function (e) {
            lT.default.setQoS(e);
        },
        usePredicate: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.supports(lX.O5.QOS));
        },
    }),
    rB = (0, S.zD)(T.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => k.intl.string(k.t["4rsOPQ"]),
        useSubtitle: () => k.intl.string(k.t.jtiiCw),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lT.default.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e7.isPlatformEmbedded;
        },
    }),
    rX = (0, S.bd)(T.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? k.intl.string(k.t.KHsSWK) : k.intl.string(k.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            t_(T.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, _.bG)([ln.Ay], () => ln.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rR, rk, rU, rD, rB, rV, rM, rw, rF],
    }),
    rz = (0, S.zD)(T.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => k.intl.string(k.t.iWTwu6),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lT.default.setEchoCancellation(e, { page: b.liQ.USER_SETTINGS, section: b.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, _.bG)([ln.Ay, ry.A], () => {
                let e = ln.Ay.getInputDeviceId();
                return ry.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.isInputProfileCustom());
        },
    });
var rH = n(205693),
    rY = n(451988),
    rW = n(205513),
    rK = n(475883),
    rZ = n(303707);
let rq = (0, t1.Ld)();
function rQ(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, x.jsx)("div", {
        role: "meter",
        className: iA()(rK.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? k.intl.string(k.t.haLKZ0) : k.intl.string(k.t.X2hJL7),
        children: (0, x.jsx)("div", { className: iA()(rK.Jx, rK.NU, { [rK.zY]: t && !r, [rK.r9]: r }) }),
    });
}
function rJ(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, _.cf)([ln.Ay], () => ({
            threshold: ln.Ay.getModeOptions().threshold,
            autoThreshold: ln.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, _.bG)([ln.Ay], () => ln.Ay.getMode());
    return (0, x.jsx)("section", {
        className: iA()(rK.Mo, rK.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, x.jsx)(rW.G, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lT.default.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n4.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n4.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rq,
            disabled: s,
            children: (0, x.jsxs)("div", {
                className: iA()(rK.NU, rK.TL, rK.Jx, rZ.bar),
                children: [
                    (0, x.jsx)("div", { className: iA()(rK.GS, rK.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, x.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let r$ = (0, S.E2)(T.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [k.intl.string(k.t["sqUm+k"]), k.intl.string(k.t.I1Zuq0), k.intl.string(k.t.nuFtHH)],
    usePredicate: () => (0, _.bG)([ln.Ay], () => ln.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, _.cf)([ln.Ay], () => ({
                autoThreshold: ln.Ay.getModeOptions().autoThreshold,
                disabled: ln.Ay.getMode() !== lX.TB.VOICE_ACTIVITY,
            })),
            n = I.useCallback((e) => {
                let t = ln.Ay.getMode(),
                    { threshold: n } = ln.Ay.getModeOptions();
                lT.default.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, _.bG)([ln.Ay], () => ln.Ay.supports(lX.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = I.useState(-100),
                    [n, i] = I.useState(!1);
                function l(e, n) {
                    (t(e), i((n & lX.ME.VOICE) === lX.ME.VOICE));
                }
                return (
                    I.useEffect(() => {
                        let e = new rY.Ep();
                        return (
                            e.start(1e3, () => {
                                (ln.Ay.getMediaEngine().on(rH.bg.VoiceActivity, l), e.stop());
                            }),
                            () => {
                                (ln.Ay.getMediaEngine().removeListener(rH.bg.VoiceActivity, l), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, _.bG)([ln.Ay], () => ln.Ay.isEnabled()),
            a = I.useMemo(
                () =>
                    !r &&
                    (0, x.jsx)("div", {
                        className: rK.B4,
                        children: (0, x.jsx)(iQ.w, {
                            type: "warning",
                            message: k.intl.format(k.t["O13I+O"], { onEnableClick: () => lT.default.enable(!0) }),
                            role: "status",
                        }),
                    }),
                [r],
            ),
            o = I.useMemo(() => (e ? k.intl.string(k.t.JsbzjA) : k.intl.string(k.t.MLmyMY)), [e]),
            u = I.useId(),
            d = I.useId();
        return i
            ? (0, x.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, x.jsx)(lh.A, { tag: "legend", id: u, children: k.intl.string(k.t.GByLar) }),
                      (0, x.jsx)(lh.A, { id: d, children: o }),
                      (0, x.jsxs)(Q.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, x.jsx)(nt.d, {
                                  disabled: t,
                                  label: k.intl.string(k.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, x.jsx)(rQ, {
                                        isSpeaking: s,
                                        className: rK.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, x.jsx)(rJ, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, x.jsxs)(Q.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, x.jsx)(lg.D, {
                          label: k.intl.string(k.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, x.jsx)(rQ, {
                                        isSpeaking: s,
                                        className: rK.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, x.jsx)(rJ, {
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
    r3 = { page: b.liQ.USER_SETTINGS, section: b.JJy.SETTINGS_VOICE_AND_VIDEO };
function r4() {
    let e = (0, _.bG)([nz.A], () => (0, r0.q)(nz.A.theme));
    return (0, x.jsx)("img", { src: e ? r1 : r2, width: 48, height: 32, alt: "" });
}
let r5 = (0, S.E2)(T.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [k.intl.string(k.t.t8Qhib), k.intl.string(k.t.hmfkCi)],
    usePredicate: function () {
        return (0, _.bG)([ln.Ay], () => ln.Ay.isInputProfileCustom() && ln.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = I.useCallback((e) => {
                (lT.default.setNoiseCancellation("KRISP" === e, r3),
                    lT.default.setNoiseSuppression("STANDARD" === e, r3));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, _.cf)([ln.Ay], () => ({
                noiseCancellation: ln.Ay.getNoiseCancellation(),
                noiseSuppression: ln.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: ln.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: ln.Ay.isNoiseCancellationSupported(),
            })),
            s = I.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: k.intl.string(k.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: k.intl.string(k.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: k.intl.string(k.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, i]),
            r = l
                ? k.intl.format(k.t["1q5aTp"], { helpArticle: ey.A.getArticleURL(b.MVz.NOISE_SUPPRESSION) })
                : k.intl.string(k.t.OWKjw5);
        return (0, x.jsxs)(Q.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, x.jsx)(lc.l, {
                    label: k.intl.string(k.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, x.jsx)(r4, {}),
            ],
        });
    },
});
var r6 = n(934729),
    r8 = n(621380);
let r7 = !nI.Av;
function r9() {
    return (0, _.bG)([ln.Ay], () => ln.Ay.getMode() === lX.TB.PUSH_TO_TALK);
}
let ae = (0, S.zD)(T.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nI.Av ? k.intl.string(k.t.tG4Np5) : k.intl.string(k.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, _.bG)([ln.Ay], () => ln.Ay.getMode());
        return I.useMemo(() => {
            if (!nI.Av && e === lX.TB.PUSH_TO_TALK)
                return k.intl.format(k.t["VHI4+Y"], { onDownloadClick: () => (0, r6._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, _.bG)([ln.Ay], () => ln.Ay.getActiveInputProfile() !== r8.m.STUDIO);
    },
    useValue: function () {
        return (0, _.bG)([ln.Ay], () => ln.Ay.getMode() === lX.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? lX.TB.PUSH_TO_TALK : lX.TB.VOICE_ACTIVITY),
            (i = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lX.TB.PUSH_TO_TALK &&
                r7 &&
                (0, lI.mM)(async () => {
                    let { Alert: e } = await Promise.all([n.e(844331), n.e(542369)]).then(n.bind(n, 291064));
                    return (t) =>
                        (0, x.jsx)(e, {
                            title: k.intl.string(k.t.Kdt0Gb),
                            confirmText: k.intl.string(k.t["1WjMbC"]),
                            cancelText: k.intl.string(k.t.BddRzS),
                            onConfirm: () => (0, r6._)("PTT Limited Modal"),
                            body: k.intl.string(k.t.NIozvt),
                            ...t,
                        });
                }),
            lT.default.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [k.intl.string(k.t["pS+K2L"]), k.intl.string(k.t.nuFtHH)],
});
var at = n(484599);
function an(e) {
    let t,
        { shortcut: n } = e,
        i = (0, _.bG)([ld.Ay], () => ld.Ay.isWaylandPortalActive()),
        l = (0, _.bG)([ld.Ay], () => {
            let e = ld.Ay.getKeybindForAction(b.hCu.PUSH_TO_TALK, !0);
            return null != e ? ld.Ay.getWaylandPortalShortcutState(e.id) : null;
        });
    return i && 0 !== n.length
        ? ld.Ay.isWaylandPortalEligibleShortcut(n)
            ? null == l || l.bound
                ? null != (t = st.Ay.getCrashReporterMetadata()?.wm) && /\bKDE\b/i.test(t)
                    ? (0, x.jsx)(iQ.w, {
                          type: "info",
                          message: k.intl.format(k.t.e8TotY, {
                              kdeFixUrl: "https://invent.kde.org/plasma/kglobalacceld/-/merge_requests/130",
                          }),
                          role: "none",
                      })
                    : null
                : (0, x.jsx)(iQ.w, { type: "warning", message: k.intl.string(k.t.PTCrUP), role: "status" })
            : (0, x.jsx)(iQ.w, { type: "warning", message: k.intl.string(k.t.J0m3aK), role: "status" })
        : null;
}
let ai = (0, S.E2)(T.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [k.intl.string(k.t["pS+K2L"]), k.intl.string(k.t.nuFtHH)],
        usePredicate: r9,
        Component: function () {
            let e = (0, _.bG)([ln.Ay], () => {
                    let { shortcut: e } = ln.Ay.getModeOptions();
                    return e;
                }),
                t = k.intl.format(k.t.HVvn5T, {
                    onClick: () => (0, nm.openUserSettings)(T.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, x.jsx)(lg.D, {
                label: k.intl.string(k.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, x.jsxs)("div", {
                    className: at.e,
                    children: [
                        (0, x.jsx)(lf.A, {
                            defaultValue: e,
                            onChange: (e) => {
                                let t = ld.Ay.getKeybindForAction(b.hCu.PUSH_TO_TALK, !0);
                                (null != t &&
                                    (0, lu.uL)(t.id, t.shortcut, e, ld.Ay.getWaylandPortalShortcutState(t.id)),
                                    lT.default.setMode(b.TBI.PUSH_TO_TALK, { shortcut: e }));
                            },
                        }),
                        (0, x.jsx)(an, { shortcut: e }),
                    ],
                }),
            });
        },
    }),
    al = (0, S.sN)(T.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => k.intl.string(k.t.GCNMM8),
        useSearchTerms: () => [k.intl.string(k.t["pS+K2L"]), k.intl.string(k.t.nuFtHH)],
        setValue: function (e) {
            lT.default.setMode(b.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: 2e3,
        getInitialValue: function () {
            let { delay: e } = ln.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: r9,
    });
var as = n(833473),
    ar = n(844981),
    aa = n(610234);
function ao() {
    return (0, ar.Ay)("VoiceSettings");
}
let au = (0, S.zD)(T.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => k.intl.string(aa.default.LGDPhA),
        useSubtitle: function () {
            let e = ao();
            if ((0, ar.Xt)(e))
                return e === ar.L3.BLOCKED_MONO_OUTPUT
                    ? k.intl.string(aa.default.rOXfEw)
                    : k.intl.string(aa.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, _.bG)([as.A], () => as.A.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lT.default.setSpatialAudio(e, [tw.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return ao() !== ar.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, ar.Xt)(ao());
        },
    }),
    ad = (0, S.Qx)(T.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => k.intl.string(k.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rv._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [k.intl.string(k.t.nuFtHH), k.intl.string(k.t.VZPR0R), k.intl.string(k.t.cjPbpT)],
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getActiveInputProfile() ?? r8.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lT.default.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rv.d)({ location: "InputProfileCategory" });
            return [
                { value: r8.m.VOICE_ISOLATION, name: k.intl.string(k.t.cjPbpT), desc: k.intl.string(k.t.CzhvnE) },
                { value: r8.m.STUDIO, name: k.intl.string(k.t.VZPR0R), desc: k.intl.string(k.t.ZaJksS) },
                { value: r8.m.CUSTOM, name: k.intl.string(k.t["N/PQjv"]), desc: k.intl.string(k.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    ac = (0, S.zZ)(T.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, _.bG)([ry.A, ln.Ay], () => {
                let e = ln.Ay.getInputDeviceId();
                return (
                    (ry.A.hasEchoCancellation(e) || ry.A.hasNoiseSuppression(e) || ry.A.hasAutomaticGainControl(e)) &&
                    ln.Ay.isInputProfileCustom()
                );
            });
            return I.useMemo(() => {
                if (e)
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "status",
                        text: k.intl.string(k.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [ad, r$, r5, rz, au, ae, ai, al, rX],
    });
var ag = n(403581),
    am = n(983851),
    aA = n(687021),
    aE = n(128450),
    ah = n(796774),
    aS = n(209932),
    aT = n(458976),
    af = n(984813),
    ap = n(265872),
    ax = n(305866),
    aI = n(22231),
    a_ = n(342073),
    ab = n(448645),
    aN = n(792348),
    aC = n(233324),
    ay = n(340368),
    av = n(327289),
    aj = n(533491),
    aO = n(647451);
function aD(e) {
    let { onSelect: t } = e,
        [n, i] = I.useState(!1),
        l = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
        s = ab.Ay.canUseCustomCallSounds(l),
        r = I.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, x.jsx)(ap.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, x.jsx)(ax.l, {
                children: (0, x.jsx)(av.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, x.jsx)(aC.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, x.jsx)(aj.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: k.intl.string(k.t.uOe0Az),
                children: (0, x.jsx)(aI.PencilIcon, { size: "md", color: "currentColor", className: aO.Wo }),
            }),
    });
}
function aR(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, aN.A)(t, null),
        i = (0, aT.wH)(),
        l = (0, ay._)("SoundPreviewButton") ? a_.WaveformIcon : am.VoiceNormalIcon,
        s =
            0 === i
                ? k.intl.string(k.t.OASXjt)
                : k.intl.formatToPlainString(k.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, x.jsx)(aj.dT, {
        onClick: n,
        text: s,
        children: (0, x.jsx)(l, { size: "md", color: "currentColor", className: aO.wg }),
    });
}
function aL(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s),
        o = (0, ay._)("SoundboardCustomCallSoundSettingsPreview") ? a_.WaveformIcon : am.VoiceNormalIcon;
    return (0, x.jsxs)("div", {
        className: aO.D6,
        children: [
            (0, x.jsxs)("div", {
                className: aO.kL,
                children: [
                    a && (0, x.jsx)(tM.A, { emojiId: s, emojiName: r, className: aO.Zg }),
                    (0, x.jsx)(n8.E, {
                        variant: "body-md/normal",
                        color: "text-strong",
                        className: aO.dj,
                        children:
                            null == t
                                ? k.intl.string(k.t.PoWNfe)
                                : n
                                  ? k.intl.format(k.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, x.jsx)(n8.E, {
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
                        ? (0, x.jsx)(aR, { sound: t })
                        : (0, x.jsx)(o, { size: "md", color: "currentColor", className: aO.Gk }),
                ],
            }),
            (0, x.jsxs)("div", {
                className: aO.kL,
                children: [
                    (0, x.jsx)(aD, { onSelect: i }),
                    l &&
                        !n &&
                        (0, x.jsx)(aj.dT, {
                            onClick: () => i(null),
                            text: k.intl.string(k.t.jmtcGA),
                            children: (0, x.jsx)(lA.TrashIcon, {
                                size: "md",
                                color: n4.A.unsafe_rawColors.RED_400.css,
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
    return (0, x.jsxs)("div", {
        className: aG.Io,
        children: [
            r
                ? (0, x.jsx)(tM.A, { emojiId: l, emojiName: s, className: aG.nW })
                : (0, x.jsx)(am.VoiceNormalIcon, { size: "md", color: "currentColor", className: aG.nW }),
            (0, x.jsx)(n8.E, { className: aG.dK, variant: "body-xs/medium", children: i.name }),
        ],
    });
}
let aV = (0, S.E2)(T.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [k.intl.string(k.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eH.Ay)(),
            [t, n] = I.useState("0"),
            i = (0, af.mz)(t),
            l = aM(i),
            s = i?.type === af.PP.GLOBAL,
            r = (0, _.bG)([aS.A], () => aS.A.hasFetchedAllSounds()) && null != i && null == l;
        (I.useEffect(() => {
            r && (0, aT.ND)({ location: e });
        }, [r, e]),
            I.useEffect(() => {
                (0, ah.E7)();
            }, []));
        let a = I.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, x.jsx)(aU, { guildId: e.value }) : null;
        }, []);
        return (0, x.jsxs)(n6.n, {
            label: k.intl.string(k.t.nzUc3B),
            description: k.intl.format(k.t.u9RWmv, { helpdeskArticle: ey.A.getArticleURL(b.MVz.SOUNDBOARD) }),
            children: [
                (0, x.jsx)(aA.A, {
                    guildId: t,
                    className: aG.Dt,
                    globalOption: { label: k.intl.string(k.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, x.jsxs)(aE.A, {
                    title: k.intl.format(k.t.I2TsYN, {
                        nitroWheelHook: () =>
                            (0, x.jsx)(ag.NitroWheelIcon, { size: "md", color: "currentColor", className: aG.ax }),
                    }),
                    children: [
                        (0, x.jsx)(aL, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, aT.Dv)(t, e) : (0, aT.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, x.jsx)("div", {
                                className: aG.lm,
                                children: (0, x.jsx)(iQ.w, {
                                    type: "warning",
                                    message: k.intl.string(k.t.WkPsFR),
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
let aw = (0, S.sN)(T.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => k.intl.string(k.t.kbFsAD),
    useSubtitle: () => k.intl.format(k.t.BPbGq7, { helpCenterArticle: ey.A.getArticleURL(b.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, ak.w)(e);
        (0, ah.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, aT.wH)();
        return (0, ak.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aF = n(864145);
let aB = (0, S.sN)(T.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => k.intl.string(k.t["2JbvKw"]),
        useSubtitle: () => k.intl.string(k.t.INenzY),
        setValue: function (e) {
            let t = (0, ak.w)(e);
            V.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = V.HO.getSetting();
            return (0, ak.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aF.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aX = (0, S.zZ)(T.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => k.intl.string(k.t.ABjMWI),
        buildLayout: () => [aw, aB, aV],
    });
var az = n(803224),
    aH = n(552122);
let aY = (0, S.E2)(T.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [k.intl.string(k.t.fgSHf8)],
        usePredicate: () => null != aH.A.useHolidaySoundpack(),
        Component: () =>
            (0, x.jsx)(n8.E, {
                variant: "body-md/normal",
                color: "text-subtle",
                children: k.intl.format(k.t.Eup6Wv, {
                    onClick: () => (0, nm.openUserSettings)(T.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aW = (0, S.AK)(T.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => k.intl.string(k.t.eyGEE4),
        useSearchTerms: () => [k.intl.string(k.t.eyGEE4)],
        destinationKey: T.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aK = (0, S.gN)(T.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aW] });
var aZ = n(264686);
let aq = (0, eN.D)(() => ({ currentPlayingSound: null }));
function aQ() {
    let e = aq.getField("currentPlayingSound");
    (e?.stop(), aq.setState({ currentPlayingSound: null }));
}
function aJ(e) {
    let t = aq.getField("currentPlayingSound");
    t?.stop();
    let n = (0, il.Ak)(e);
    aq.setState({ currentPlayingSound: n });
}
function a$(e) {
    return (0, S.zD)(`${T.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => k.intl.format(k.t.OOiGCM, { onClick: () => aJ(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, _.bG)([az.A], () => az.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = az.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aZ.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, _.bG)([az.A], () => az.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let a0 = [
        { useTitle: () => k.intl.string(k.t.hK51Yg), sound: "deafen" },
        { useTitle: () => k.intl.string(k.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => k.intl.string(k.t.w4m945), sound: "mute" },
        { useTitle: () => k.intl.string(k.t.YqAjXy), sound: "unmute" },
        { useTitle: () => k.intl.string(k.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => k.intl.string(k.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => k.intl.string(k.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => k.intl.string(k.t.x98vQq),
            useSearchTerms: () => [k.intl.string(k.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => k.intl.string(k.t["1HjRqC"]),
            useSearchTerms: () => [k.intl.string(k.t.Q8gkVL)],
            sound: "ptt_stop",
        },
        { useTitle: () => k.intl.string(k.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => k.intl.string(k.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => k.intl.string(k.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => k.intl.string(k.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => k.intl.string(k.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => k.intl.string(k.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => k.intl.string(k.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => k.intl.string(k.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => k.intl.string(k.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => k.intl.string(k.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => k.intl.string(k.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => k.intl.string(k.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => k.intl.string(k.t.CP3DC3), sound: "reconnect" },
    ],
    a1 = (0, S.D1)(T.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? k.intl.formatToPlainString(k.t["0JYT98"], { count: t })
                : k.intl.formatToPlainString(k.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => t_(T.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aQ();
            };
        },
        buildLayout: () => a0.map((e) => a$(e)),
    }),
    a2 = (0, S.zZ)(T.X.SOUNDS_CATEGORY, {
        useTitle: () => k.intl.string(k.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, _.bG)([az.A], () => az.A.getDisableAllSounds());
            return I.useMemo(() => {
                if (e)
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: k.intl.format(k.t.fRvixS, {
                            onClick: () => (0, nm.openUserSettings)(T.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [a1, aY, aK],
    }),
    a3 = (0, S.zD)(T.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => k.intl.string(k.t.e3Zz3F),
        useSubtitle: () => k.intl.string(k.t.RztTjP),
        useValue: function () {
            return !V.uh.useSetting();
        },
        setValue: function (e) {
            ((0, rA.A)("stream_previews_disabled", !e, V.uh.getSetting(), [tw.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                V.uh.updateSetting(!e));
        },
    }),
    a4 = (0, S.zD)(T.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => k.intl.string(k.t.GmWk2E),
        useSearchTerms: () => [k.intl.string(k.t["Fj/xn1"])],
        useSubtitle: () => k.intl.string(k.t["Fj/xn1"]),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getVideoHook());
        },
        setValue: lT.default.setVideoHook,
        usePredicate: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.supportsVideoHook());
        },
    }),
    a5 = (0, S.zD)(T.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => k.intl.string(k.t["4I0qzZ"]),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getExperimentalSoundshare());
        },
        setValue: lT.default.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, _.bG)([ln.Ay], () => {
                let e = ln.Ay.supportsExperimentalSoundshare(),
                    t = ln.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    a6 = (0, S.zD)(T.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => k.intl.string(k.t["/jwMtn"]),
        useSubtitle: () => k.intl.string(k.t.zlA23F),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lT.default.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return ln.Ay.supports(lX.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    a8 = (0, S.sN)(T.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => k.intl.string(k.t.fhEzfj),
        setValue: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lT.default.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: ln.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, _.bG)([ln.Ay], () => ln.Ay.getSidechainCompression());
            return ln.Ay.supports(lX.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    a7 = (0, S.zD)(T.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => k.intl.string(k.t.lt8rRx),
        useSubtitle: () => k.intl.string(k.t.ie1mgY),
        useValue: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nI.cX)() && e
                ? (0, n5.A)({
                      title: k.intl.string(k.t["9jf31O"]),
                      subtitle: k.intl.string(k.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (lT.default.setUseSystemScreensharePicker(e), nN.A.app.relaunch());
                      },
                      confirmText: k.intl.string(k.t.BddRzS),
                  })
                : lT.default.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, _.bG)([ln.Ay], () => ln.Ay.supportsSystemScreensharePicker() && (0, nI.cX)());
        },
    }),
    a9 = (0, S.bd)(T.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? k.intl.string(k.t.qrMyvm) : k.intl.string(k.t.LEtTNl)),
        useCollapsedSubtitle: () => t_(T.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [a6, a8, a7, a5, a4],
    }),
    oe = (0, S.zZ)(T.X.STREAMING_CATEGORY, { useTitle: () => k.intl.string(k.t.KDdjou), buildLayout: () => [a3, a9] });
var ot = n(106713);
let on = (0, S.E2)(T.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = ot.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, x.jsx)(sW.U, {
                label: k.intl.string(k.t.UTM8VP),
                deviceType: lX.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    oi = (0, S.E2)(T.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = ot.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, x.jsx)(sW.U, {
                label: k.intl.string(k.t.xuYQ0n),
                deviceType: lX.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    ol = (0, S.zC)(T.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [on, oi] }),
    os = (0, S.sN)(T.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => k.intl.string(k.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = ln.Ay.getInputVolume();
            return (0, ak.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, ak.w)(e);
            lT.default.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    or = (0, S.sN)(T.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => k.intl.string(k.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = ln.Ay.getOutputVolume();
            return (0, ak.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tw.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, ak.w)(e);
            lT.default.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    oa = (0, S.zC)(T.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [os, or] });
var oo = n(164636),
    ou = n(782600),
    od = n(804037);
let oc = `${ey.A.getArticleURL(b.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    og = (0, S.E2)(T.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [k.intl.string(k.t.nuFtHH)],
        usePredicate: function () {
            return (0, oo.bG)([ln.Ay], () => ln.Ay.supports(lX.O5.LOOPBACK));
        },
        Component: function () {
            return (0, oo.bG)([ln.Ay], () => ln.Ay.supports(lX.O5.LOOPBACK))
                ? (0, x.jsx)(ou.A, {
                      size: "md",
                      notchBackground: ou.V.GRAY,
                      captionVoice: k.intl.string(k.t.bp3JOV),
                      captionNoVoice: (0, x.jsxs)(x.Fragment, {
                          children: [
                              (0, x.jsx)(n8.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-default",
                                  children: k.intl.string(k.t.bgn75v),
                              }),
                              k.intl.string(k.t["MA+OZh"]),
                              (0, x.jsx)(ng.Anchor, {
                                  className: od.X,
                                  href: ey.A.getArticleURL(b.MVz.NO_INPUT_DETECTED),
                                  children: k.intl.string(k.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: k.intl.format(k.t["V+B3FH"], { guideURL: oc }),
                      buttonTest: k.intl.string(k.t.gyljWE),
                      buttonStop: k.intl.string(k.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: b.liQ.USER_SETTINGS, section: b.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    om = e7.uF() ? ["BTHENUM", "BTHHFENUM"] : [];
function oA(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, x.jsxs)(Q.B, {
        children: [
            n && (0, x.jsx)(la, { sourcePage: "voice" }),
            t && (0, x.jsx)(sn.A, { look: sn.k.WARNING, children: k.intl.string(k.t.Ioz3gx) }),
        ],
    });
}
let oE = (0, S.zZ)(T.X.VOICE_CATEGORY, {
        useTitle: () => k.intl.string(k.t.K3lovD),
        useSearchTerms: () => [
            k.intl.string(k.t.hHMYbb),
            k.intl.string(k.t.nuFtHH),
            k.intl.string(k.t.dl18zb),
            k.intl.string(k.t["3182VD"]),
            k.intl.string(k.t["DGq/PR"]),
            k.intl.string(k.t.eATD2B),
            k.intl.string(k.t.Rtsr6w),
            k.intl.string(k.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = lr("voice"),
                t = (0, sK.x5)(lX.oh.AUDIO_INPUT),
                n = (0, sK.x5)(lX.oh.AUDIO_OUTPUT),
                i = I.useMemo(() => {
                    let e = om.some((e) => t?.hardwareId?.startsWith(e)),
                        i = om.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return I.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: p.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, x.jsx)(oA, {
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
    oh = (0, S.t_)(T.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => k.intl.string(k.t.B1fFpf),
        buildLayout: () => [oE, ac, s1, oe, a2, aX, rC, rf],
    }),
    oS = (0, S.i4)(T.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.B1fFpf),
        usePredicate: () => ln.Ay.isSupported(),
        icon: sU.MicrophoneIcon,
        useMenu: sV.A,
        buildLayout: () => [oh],
    }),
    oT = (0, S.WI)(T.X.APP_SECTION, {
        useTitle: () => k.intl.string(k.t.gcyH1J),
        buildLayout: () => [oS, nJ, tn, iK, sM, n2],
    });
var of = n(360669),
    op = n(369143),
    ox = n(975807),
    oI = n(566345),
    o_ = n(139286),
    ob = n(534247);
function oN(e) {
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
        { analyticsLocations: u } = (0, eH.Ay)();
    (0, o_.A)(
        {
            name: sm.ImpressionNames.GIFT_CARDS_MARKETING_BANNER,
            type: sm.ImpressionTypes.VIEW,
            properties: { surface: t, location_stack: u },
        },
        { trackOnInitialLoad: !0 },
    );
    let d = "compact" === o;
    return (0, x.jsxs)("div", {
        className: iA()(ob.kL, { [ob.oE]: d }),
        children: [
            (0, x.jsxs)(Q.B, {
                direction: "vertical",
                align: "start",
                justify: "center",
                gap: d ? 24 : 16,
                fullWidth: !1,
                className: ob.Qs,
                children: [
                    (0, x.jsxs)(Q.B, {
                        direction: "vertical",
                        align: "start",
                        gap: d ? 12 : 8,
                        children: [
                            (0, x.jsx)(C.D, {
                                variant: d ? "heading-lg/semibold" : "heading-xl/semibold",
                                color: "text-strong",
                                children: n,
                            }),
                            i,
                        ],
                    }),
                    (l.length > 0 || null != a) &&
                        (0, x.jsxs)(Q.B, {
                            direction: "vertical",
                            align: "start",
                            gap: 12,
                            children: [
                                l.length > 0 &&
                                    (0, x.jsx)(Q.B, {
                                        direction: "horizontal",
                                        gap: d ? 12 : 16,
                                        wrap: !0,
                                        fullWidth: !1,
                                        children: l.map((e) =>
                                            (0, x.jsx)(
                                                O.$,
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
                                    (0, x.jsx)(n8.E, { variant: "footnote/normal", color: "text-subtle", children: a }),
                            ],
                        }),
                ],
            }),
            null != r
                ? (0, x.jsx)("div", {
                      className: ob.yO,
                      children: (0, x.jsx)(oI.v, { type: "lottie", lottie: r, aspectRatio: "6/4" }),
                  })
                : (0, x.jsx)("img", { src: s, className: ob.fA, alt: "" }),
        ],
    });
}
function oC(e) {
    let { analyticsLocations: t } = (0, eH.Ay)();
    return I.useCallback(
        (n, i) => {
            tc.default.track(b.HAw.GIFT_CARDS_MARKETING_BANNER_CTA_CLICKED, {
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
var oy = n(927813);
let ov = `${window.GLOBAL_ENV.MARKETING_ENDPOINT}/gift-cards`,
    oj = 3 * oy.A.Millis.DAYS_30;
var oO = n(321671),
    oD = n(936564),
    oR = n(669815),
    oL = n(46653),
    oP = n(615405),
    oG = n(295405),
    oM = n(945810);
let oU = (0, oM.mj)({
    name: "2026-10-gift-cards-in-app-marketing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function oV(e) {
    return { enabled: oU.useConfig(e).enabled };
}
var ok = n(811091);
let ow = null,
    oF = null;
var oB = n(956956),
    oX = n(289873),
    oz = n(115560),
    oH = n(465323),
    oY = n(37766),
    oW = n(194261),
    oK = n(391048),
    oZ = n(99696),
    oq = n(202613),
    oQ = n(83617),
    oJ = n(607399),
    o$ = n(993077),
    o0 = n(150934),
    o1 = n(256006),
    o2 = n(718718),
    o3 = n(558740);
let o4 = /[^0-9/]/g,
    o5 = /[^0-9]/g;
class o6 extends I.PureComponent {
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
                ((i = (n = e.replace(o4, "").split("/"))[0]),
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
            ? (u = u.replace(o5, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, x.jsx)(l_.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var o8 = n(832208),
    o7 = n(782328);
let o9 = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, t1.Ld)(),
                        title: () => k.intl.string(k.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => k.intl.string(k.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => o7.ep,
                        renderInput: (e) => (0, x.jsx)(o6, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    ue = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = I.useState(!1),
            [a, o] = I.useState(null),
            [u, d] = I.useState(i);
        return (
            I.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, x.jsx)(o8.A, {
                className: n,
                form: o9,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    (s || "" === e || r(!0),
                        (s && "" === e) || !(0, o3.So)(e) ? o(k.intl.string(k.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var ut = n(219887),
    un = n(292856);
let ui = "isDefault";
class ul extends I.PureComponent {
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
            expiresMonth: t instanceof oq.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oq.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        ((0, oR.ey)(), (0, oR.tc)());
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(ic.Vq).length))
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
                ? (0, x.jsx)("div", {
                      className: un.zc,
                      children: (0, x.jsx)(iQ.w, { type: "critical", message: t.message, role: "alert" }),
                  })
                : null
            : (0, x.jsx)("div", {
                  className: un.zc,
                  children: (0, x.jsx)(iQ.w, { type: "critical", message: e.message, role: "alert" }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, o1.g)(n);
        return (0, x.jsxs)("div", {
            className: un.yV,
            children: [
                (0, x.jsx)(n8.E, {
                    className: un.bV,
                    variant: "body-sm/normal",
                    children: k.intl.string(k.t["50Auo2"]),
                }),
                (0, x.jsx)(o2.Ay, {
                    ...e,
                    mode: o2.Ay.Modes.EDIT,
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
        return (0, x.jsxs)("div", {
            className: un.yV,
            children: [
                (0, x.jsx)(n8.E, { className: un.bV, variant: "body-sm/normal", children: k.intl.string(k.t.Fo2YP7) }),
                (0, x.jsx)(ue, {
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
        return (0, x.jsx)("div", {
            className: un.AU,
            children: (0, x.jsxs)(Q.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, x.jsx)(s8.e, {
                        children: (0, x.jsxs)("div", {
                            className: un.lH,
                            children: [
                                n
                                    ? (0, x.jsx)(lE.m, {
                                          text: k.intl.string(k.t["v6/z28"]),
                                          children: (0, x.jsx)("div", { "aria-hidden": !0, className: un.dm }),
                                      })
                                    : null,
                                (0, x.jsx)(O.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oJ.Fr ? "sm" : "md",
                                    text: oJ.Fr ? k.intl.string(k.t.oyYWHE) : k.intl.string(k.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, x.jsxs)(s8.e, {
                        children: [
                            (0, x.jsx)(O.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oJ.Fr ? "sm" : "md",
                                text: k.intl.string(k.t["ETE/oC"]),
                            }),
                            (0, x.jsx)(O.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: oJ.Fr ? "sm" : "md",
                                text: k.intl.string(k.t["R3BPH+"]),
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
            r = e instanceof oq.SJ;
        return (0, x.jsx)(o$.Z, {
            editable: !0,
            className: iA()(un.Nr, i),
            children: (0, x.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, x.jsxs)("div", {
                        className: un.__invalid_paymentSection,
                        children: [
                            (0, x.jsx)(ut.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, x.jsx)("div", { className: un.Um, children: k.intl.string(k.t["3R0U0b"]) })
                                : null,
                            (0, x.jsx)("div", {
                                className: un.Sv,
                                children: r
                                    ? k.intl.format(k.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : k.intl.string(k.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, x.jsx)("div", {
                        className: un.D5,
                        children: (0, x.jsx)(o0.S, {
                            value: ui,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, ui),
                            label: k.intl.string(k.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, x.jsx)(lo.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let us = _.Ay.connectStores([oP.A], () => ({ updateError: oP.A.editSourceError, removeError: oP.A.removeSourceError }))(
    ul,
);
var ur = n(140624),
    ua = n(849405),
    uo = n(329693);
function uu() {
    (0, oZ.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oz.A)() });
}
class ud extends I.PureComponent {
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
            ? (0, x.jsx)(us, {
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
            : (0, x.jsxs)(x.Fragment, {
                  children: [
                      i ? null : (0, x.jsx)(lo.c, { className: uo.__invalid_sourceDivider }),
                      (0, x.jsxs)("div", {
                          className: uo.Yb,
                          children: [
                              (0, x.jsx)(ut.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, x.jsx)(O.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: k.intl.string(k.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let uc = I.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = I.useState(null),
        o = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, _.bG)([oP.A], () => oP.A.ipCountryCode),
        d = I.useMemo(() => (0, oH.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        I.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oR.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, x.jsxs)(x.Fragment, {
            children: [
                n ? null : (0, x.jsx)(lo.c, { className: uo.__invalid_sourceDivider }),
                (0, x.jsxs)("div", {
                    className: uo.Yb,
                    children: [
                        void 0 !== t
                            ? (0, x.jsx)(ut.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, x.jsxs)(ly.A, {
                                  align: ly.A.Align.CENTER,
                                  children: [
                                      (0, x.jsx)(oY.PaymentTypeGiftCardIcon, { size: "lg" }),
                                      (0, x.jsx)(n8.E, {
                                          variant: "body-sm/medium",
                                          className: ua.Wi,
                                          children: k.intl.string(ur.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, x.jsxs)("div", {
                            className: uo.zy,
                            children: [
                                (0, x.jsx)("div", {
                                    className: uo.Tq,
                                    children:
                                        null == r
                                            ? (0, x.jsx)(oX.y, { type: oX.y.Type.SPINNING_CIRCLE })
                                            : (0, x.jsx)(n8.E, {
                                                  variant: "body-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oH.$g)(e ?? 0, n, l, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${String(n).toUpperCase()} ${i}`;
                                                  })(),
                                              }),
                                }),
                                (0, x.jsx)(O.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: k.intl.string(ur.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class ug extends I.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oR.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oR.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oR.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oQ.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, lI.mM)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, x.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, oK.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, x.jsxs)("div", {
            className: uo.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, x.jsxs)("div", {
                          className: uo.z8,
                          children: [
                              (0, x.jsx)(n8.E, { variant: "body-sm/normal", children: k.intl.string(k.t.aRHpAB) }),
                              (0, x.jsx)(n8.E, {
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  className: uo.Sv,
                                  children: k.intl.string(k.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, x.jsx)(O.$, { onClick: this.handleAddPaymentMethod, text: k.intl.string(k.t.CpOiEO) }),
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
            u = Z()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : ok.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oq.LQ)),
            c = u.filter((e) => e instanceof oq.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            A = d.map((e, t) =>
                (0, x.jsx)(
                    ud,
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
                          (0, x.jsx)(
                              uc,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: uu,
                              },
                              e.id,
                          ),
                      )
                    : (0, x.jsx)(uc, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: uu,
                      })),
            (0, x.jsxs)(x.Fragment, {
                children: [
                    t
                        ? (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsxs)(C.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, x.jsx)(oW.LockIcon, { size: "sm", className: uo.hz }),
                                          " ",
                                          k.intl.string(k.t.W26xGQ),
                                      ],
                                  }),
                                  (0, x.jsx)(n8.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      children: k.intl.string(k.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    A,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, x.jsx)(lo.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var um = n(459357),
    uA = n(166403),
    uE = n(773669),
    uh = n(943009);
function uS() {
    let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, oB.Gw)(e.country) };
}
let uT = (0, S.E2)(T.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, _.bG)([oP.A], () => oP.A.isSyncing),
                i = (0, _.bG)([oG.A], () => oG.A.paymentSources),
                l = (0, _.bG)([oG.A], () => oG.A.defaultPaymentSourceId),
                s = (0, _.bG)([uE.default], () => uE.default.locale),
                r = (0, _.bG)([uA.A], () => uA.A.getPremiumTypeSubscription()),
                a = (0, _.bG)([oP.A], () => oP.A.isRemovingPaymentSource),
                o = (0, _.bG)([oP.A], () => oP.A.isUpdatingPaymentSource),
                { enabled: u } = (0, um.c)({ location: "UserSettingsBilling" });
            return (I.useEffect(() => {
                (oR.$o(), oR.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, x.jsx)("div", { className: uh.o, children: (0, x.jsx)(oX.y, {}) })
                : (0, x.jsx)(ug, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== b.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: s,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [k.intl.string(k.t.W26xGQ), k.intl.string(k.t["3pIjBH"])],
    }),
    uf = (0, S.E2)(T.X.BILLING_GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = oC("billing_banner"),
                t = I.useMemo(
                    () => [
                        {
                            text: k.intl.string(oO.default["6bWeWP"]),
                            onClick: () => {
                                (e("learn_more", { url: ov }), (0, ox.A)(ov));
                            },
                        },
                        {
                            text: k.intl.string(oO.default.xYa9Y8),
                            onClick: () => {
                                let t = ey.A.getArticleURL(b.MVz.BUY_GIFT_CARDS);
                                (e("where_to_buy", { url: t }), (0, ox.A)(t));
                            },
                        },
                    ],
                    [e],
                );
            return (0, x.jsx)("div", {
                className: oD.k,
                children: (0, x.jsx)(oN, {
                    surface: "billing_banner",
                    title: k.intl.string(oO.default.w8gzZb),
                    graphicSrc:
                        "https://cdn.discordapp.com/assets/content/ee0bcc3ecc6d909365f70b4692752f0ac9c8a2e49c47afac16e7dbd31efe360f.png",
                    actions: t,
                    children: (0, x.jsx)(n8.E, {
                        variant: "body-md/medium",
                        color: "text-subtle",
                        children: k.intl.string(oO.default.qtKobx),
                    }),
                }),
            });
        },
        useSearchTerms: () => [],
        usePredicate: () =>
            (function (e) {
                var t;
                let { location: n, countGiftCardWallet: i, canFetchPaymentSources: l = !0 } = e,
                    { enabled: s } = oV({ location: n }),
                    r = (0, _.bG)([oL.default], () => oL.default.getId()),
                    a = null != (t = (0, _.bG)([oL.default], () => oL.default.getId())) && ok.default.age(t) >= oj,
                    { hasFetchedPaymentSources: o, hasValidPaymentMethod: u } = (0, _.cf)(
                        [oG.A],
                        () => ({
                            hasFetchedPaymentSources: oG.A.hasFetchedPaymentSources,
                            hasValidPaymentMethod: (function (e, t) {
                                let { countGiftCardWallet: n } = t;
                                return Object.values(e).some(
                                    (e) => !e.invalid && e.type !== b.hes.UNKNOWN && (n || e.type !== b.hes.TDS_WALLET),
                                );
                            })(oG.A.paymentSources, { countGiftCardWallet: i }),
                        }),
                        [i],
                    ),
                    d = s && a,
                    c = d && l;
                return (
                    I.useEffect(() => {
                        !c ||
                            ow === r ||
                            oG.A.hasFetchedPaymentSources ||
                            oP.A.isPaymentSourceFetching ||
                            ((ow = r),
                            oR.$o().then((e) => {
                                null == e && (oF = r);
                            }));
                    }, [c, r]),
                    d && oF !== r && o && !u
                );
            })({ location: "BillingMarketingBanner", countGiftCardWallet: !0, canFetchPaymentSources: !1 }),
    }),
    up = (0, S.zZ)(T.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => k.intl.string(k.t.W26xGQ),
        useSubtitle: () => {
            let e = uS();
            return null != e ? k.intl.format(k.t.e2t1G5, { country: e.countryName }) : k.intl.string(k.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == uS()
                ? null
                : {
                      type: p.p3.INFO_POPOVER,
                      ariaLabel: k.intl.string(k.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: k.intl.string(k.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: k.intl.string(k.t.PuB1W7),
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
        buildLayout: () => [uT, uf],
    });
var ux = n(837381),
    uI = n(516521),
    u_ = n(928039),
    ub = n(921853),
    uN = n(22306);
function uC(e) {
    let { currentPageIndex: t, numPages: n, onChangePage: i, children: l, showPageCount: s = !0, ref: r, ...a } = e,
        o = t >= n - 1,
        u = s
            ? k.intl.format(k.t.MtpIwg, { currentPage: t + 1, numPages: n })
            : k.intl.format(k.t.bKI77c, { currentPage: t + 1 });
    return (0, x.jsxs)("div", {
        ref: r,
        ...a,
        children: [
            l,
            (0, x.jsx)("div", {
                className: uN.v,
                children: (0, x.jsxs)("div", {
                    className: uN.U,
                    children: [
                        (0, x.jsx)(lm.K, {
                            variant: "icon-only",
                            icon: ub.ChevronSmallLeftIcon,
                            disabled: t <= 0,
                            onClick: () => i(t - 1),
                            "aria-label": k.intl.string(k.t.vgfxaA),
                        }),
                        (0, x.jsx)(n8.E, { variant: "body-sm/medium", children: u }),
                        (0, x.jsx)(lm.K, {
                            variant: "icon-only",
                            icon: ie.ChevronSmallRightIcon,
                            disabled: o,
                            onClick: () => i(t + 1),
                            "aria-label": k.intl.string(k.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
}
var uy = n(431955);
n(938796);
var uv = n(334279),
    uj = n(122817),
    uO = n(665260),
    uD = n(315069),
    uR = n(557009),
    uL = n(570221),
    uP = n(191115);
class uG extends uD.A {
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
        let t = null != e.payment_source ? oq.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? uy.A.createFromServer(e.sku) : null,
            i = null != e.subscription ? uP.A.createFromServer(e.subscription) : null;
        return new uG({
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
            entitlements: null != e.entitlements ? e.entitlements.map((e) => uR.A.createFromServer(e)) : void 0,
            invoice: null != e.invoice ? uL.Y.createFromServer(e.invoice) : null,
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
        return this.paymentGateway === b.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === b.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && t4.JM.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return t4.pW.has(t);
                })
        );
    }
    get isGift() {
        return uO.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && null != this.skuId && Object.values(t4.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === b.EZt.GUILD_PRODUCT || uO.Lt(this.sku.flags, uj.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === b.EZt.COLLECTIBLES;
    }
    get isFractionalPremium() {
        return null != this.skuId && uv.I.ALL.has(this.skuId);
    }
    get isShopPurchase() {
        return this.isCollectible || this.isFractionalPremium;
    }
}
var uM =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.PAID = 2)] = "PAID"),
        (i[(i.FAILED = 3)] = "FAILED"),
        (i[(i.CANCELED = 4)] = "CANCELED"),
        (i[(i.PARTIALLY_REFUNDED = 5)] = "PARTIALLY_REFUNDED"),
        (i[(i.REFUNDED = 6)] = "REFUNDED"),
        (i[(i.REVERSED = 7)] = "REVERSED"),
        i),
    uU =
        (((l = {})[(l.NITRO = 1)] = "NITRO"),
        (l[(l.NITRO_BASIC = 2)] = "NITRO_BASIC"),
        (l[(l.SHOP = 3)] = "SHOP"),
        (l[(l.APPLICATION = 4)] = "APPLICATION"),
        (l[(l.PRODUCT = 5)] = "PRODUCT"),
        l),
    uV =
        (((s = {})[(s.PARTIALLY_REFUNDED = 1)] = "PARTIALLY_REFUNDED"),
        (s[(s.REFUNDED = 2)] = "REFUNDED"),
        (s[(s.REVERSED = 3)] = "REVERSED"),
        s),
    uk =
        (((r = {})[(r.PREMIUM = 1)] = "PREMIUM"),
        (r[(r.GIFT = 2)] = "GIFT"),
        (r[(r.APPLICATION = 3)] = "APPLICATION"),
        (r[(r.COLLECTIBLE = 4)] = "COLLECTIBLE"),
        (r[(r.IN_GAME_ITEM = 5)] = "IN_GAME_ITEM"),
        r),
    uw =
        (((a = {})[(a.CLAIMED = 1)] = "CLAIMED"),
        (a[(a.UNCLAIMED = 2)] = "UNCLAIMED"),
        (a[(a.REDEEMED = 3)] = "REDEEMED"),
        (a[(a.FAILED = 4)] = "FAILED"),
        (a[(a.UNREDEEMED = 5)] = "UNREDEEMED"),
        (a[(a.REFUNDED = 6)] = "REFUNDED"),
        a);
function uF(e) {
    let t = e.payments.map((e) => ({
            ...e,
            payment_source: null != e.payment_source ? oq.Ay.createFromServer(e.payment_source) : null,
        })),
        n = t.find((t) => t.id === e.id);
    return {
        ...e,
        sku: null != e.sku ? uy.A.createFromServer(e.sku) : null,
        payments: t,
        receipt_payment: new uG({
            id: e.id,
            status: n?.status,
            paymentSource: n?.payment_source,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
        }),
    };
}
let uB = { receipts: [], cursor: null };
var uX = n(34188),
    uz = n(597770),
    uH = n(660298),
    uY = n(371710),
    uW = n(291322),
    uK = n(147925),
    uZ = n(707554),
    uq = n(957565),
    uQ = n(250627),
    uJ = n(871109),
    u$ = n(571654),
    u0 = n(411342),
    u1 = n(179499),
    u2 = n(362280),
    u3 = n(95035),
    u4 = n(317525),
    u5 = n(460103);
function u6(e) {
    let { description: t, detail: n } = e;
    return (0, x.jsx)("li", {
        className: u5.Iu,
        children: (0, x.jsxs)(ly.A, {
            justify: ly.A.Justify.BETWEEN,
            children: [(0, x.jsx)("div", { children: t }), (0, x.jsx)("div", { children: n })],
        }),
    });
}
function u8(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uQ.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, u$.z)(i),
        s = (0, _.bG)([lD.A], () => lD.A.getGuild(t)),
        r = i?.role_id != null && i?.attachments_count === 0 ? k.intl.string(k.t.H11qcT) : l,
        a = I.useCallback(async () => {
            (s?.features.has(b.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, u2.A)(b.BVt.GUILD_PRODUCT(t, n))
                : await (0, u2.A)(b.BVt.CHANNEL(t)),
                (0, tY.default)());
        }, [s, t, n]);
    return (0, x.jsxs)(x.Fragment, {
        children: [
            null != r && (0, x.jsx)(u6, { description: k.intl.string(k.t.lXPbJb), detail: r }),
            null != s &&
                (0, x.jsx)(u6, {
                    description: k.intl.string(k.t.Wpn8z8),
                    detail: (0, x.jsx)(u3.A, { onClick: a, children: s.name }),
                }),
        ],
    });
}
function u7(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, uQ.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, _.bG)([uJ.A], () => uJ.A.getGuildProductFetchState(n) === uJ.e.FETCHING),
        s = i?.role_id,
        r = (0, _.bG)([u4.A], () => (null != s ? u4.A.getRole(t, s) : void 0), [t, s]),
        a = (0, u1.A)({ guildId: t, productId: n }),
        o = (i?.attachments?.length ?? 0) > 0,
        u = null != r;
    return l
        ? (0, x.jsx)("div", { className: u5.hT, children: (0, x.jsx)(oX.y, {}) })
        : null != i && (o || u)
          ? (0, x.jsxs)("div", {
                className: u5.hT,
                children: [
                    o &&
                        (0, x.jsxs)(x.Fragment, {
                            children: [
                                (0, x.jsx)(n8.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-default",
                                    className: u5.yE,
                                    children: k.intl.string(k.t.hxawoy),
                                }),
                                (0, x.jsx)(O.$, { ...a }),
                            ],
                        }),
                    u &&
                        (0, x.jsxs)(x.Fragment, {
                            children: [
                                o && (0, x.jsx)("div", { className: u5.yF }),
                                (0, x.jsx)(n8.E, {
                                    variant: "body-xs/semibold",
                                    color: "text-default",
                                    className: u5.yE,
                                    children: k.intl.string(k.t.gWBNet),
                                }),
                                (0, x.jsx)(u0.A, { role: r }),
                            ],
                        }),
                ],
            })
          : null;
}
let u9 = function (e, t) {
    (0, lI.mM)(async () => {
        let { default: i } = await n.e(234138).then(n.bind(n, 206049));
        return (n) => (0, x.jsx)(i, { payment: e, paymentSource: t, ...n });
    });
};
var de = n(818348);
function dt(e) {
    let { payment: t } = e,
        [n, i] = I.useState(null),
        [l, s] = I.useState(null);
    async function r(e) {
        try {
            let n = await (async function (e) {
                try {
                    return (
                        await ts.Bo.get({
                            url: b.Rsh.BILLING_INVOICE_BREAKDOWN,
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
    let a = null != t.paymentSource && t.status === de.__.COMPLETED,
        o = n?.invoiceLink,
        u = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, x.jsxs)("div", {
              className: u5.It,
              children: [
                  (0, x.jsx)(ng.Anchor, { onClick: () => r(!1), children: k.intl.formatToPlainString(k.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, x.jsx)(ng.Anchor, {
                            className: u5.oe,
                            onClick: () => r(!0),
                            children: k.intl.formatToPlainString(k.t["3x6NGw"], {}),
                        })
                      : null,
                  null != l && "" !== l && (0, x.jsx)(iQ.w, { type: "critical", message: l, role: "alert" }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, x.jsxs)("div", {
                className: u5.It,
                children: [
                    (0, x.jsx)(ng.Anchor, { href: o, children: k.intl.formatToPlainString(k.t.R0xzCN, {}) }),
                    null != u
                        ? u.map((e, t) =>
                              (0, x.jsx)(
                                  ng.Anchor,
                                  {
                                      className: u5.oe,
                                      href: e,
                                      children: k.intl.formatToPlainString(k.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != l && "" !== l && (0, x.jsx)(iQ.w, { type: "critical", message: l, role: "alert" }),
                ],
            })
          : a
            ? (0, x.jsx)("div", {
                  className: u5.It,
                  children: (0, x.jsx)(ng.Anchor, {
                      onClick: () => {
                          var e;
                          ((e = t.paymentSource), u9(t, e));
                      },
                      children: k.intl.formatToPlainString(k.t.onRIxS, {}),
                  }),
              })
            : null;
}
var dn = n(510022),
    di = n(427262),
    dl = n(106799),
    ds = n(580630);
let dr = (e) => `https://${b.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`;
function da(e, t) {
    return t === de.Yr.DISCORD_ORB
        ? (0, x.jsxs)("span", {
              className: u5.db,
              children: [
                  (0, x.jsx)(dl.A, { customSize: 16, shouldUseThemeColor: !0 }),
                  k.intl.formatToPlainString(k.t.YMor7k, { count: e }),
              ],
          })
        : (0, ds.$g)(e, t);
}
function du(e) {
    let { receipt: t, gameItem: n, locale: i, hasLinkedToApplication: l } = e,
        { analyticsLocations: s } = (0, eH.Ay)(tw.A.BILLING_SETTINGS_BILLING),
        { sku: r } = t,
        a = r?.application,
        o = n.gift_recipient;
    return n.status === uw.REDEEMED
        ? null
        : n.status === uw.REFUNDED
          ? (0, x.jsxs)(x.Fragment, {
                children: [
                    (0, x.jsx)(uZ.H, { className: u5.mW, children: k.intl.string(k.t["gIGB/A"]) }),
                    (0, x.jsx)("div", {
                        className: u5.iL,
                        children:
                            null != o
                                ? k.intl.format(k.t.Q1K9eg, { username: di.Ay.getName(o) })
                                : k.intl.format(k.t.IBtGwC, { applicationName: a?.name }),
                    }),
                ],
            })
          : n.status === uw.CLAIMED || n.status === uw.UNCLAIMED
            ? (0, x.jsxs)(x.Fragment, {
                  children: [
                      (0, x.jsx)(uZ.H, { className: u5.mW, children: k.intl.string(k.t["gIGB/A"]) }),
                      (0, x.jsx)("div", {
                          className: u5.iL,
                          children:
                              null != o
                                  ? k.intl.format(k.t.vfUW65, { username: di.Ay.getName(o) })
                                  : k.intl.string(k.t["18wIqp"]),
                      }),
                      null == o &&
                          (0, x.jsx)("div", {
                              className: u5.TP,
                              children: (0, x.jsx)(O.$, {
                                  variant: "primary",
                                  text: k.intl.string(k.t["jcSP+g"]),
                                  onClick: () => (0, nm.openUserSettings)(T.X.GIFT_PANEL),
                              }),
                          }),
                  ],
              })
            : (0, x.jsxs)(x.Fragment, {
                  children: [
                      (0, x.jsx)(uZ.H, { className: u5.mW, children: k.intl.string(k.t["gIGB/A"]) }),
                      (0, x.jsx)("div", {
                          className: u5.iL,
                          children: l
                              ? k.intl.format(k.t.DQQCAw, { applicationName: a?.name, skuName: r?.name })
                              : k.intl.format(k.t.ED2BqF, { applicationName: a?.name, skuName: r?.name }),
                      }),
                      (0, x.jsx)("div", {
                          className: u5.TP,
                          children: l
                              ? (0, x.jsx)(O.$, {
                                    variant: "primary",
                                    text: k.intl.string(k.t.zoztQA),
                                    onClick: () => (0, ox.A)(dr(i)),
                                })
                              : (0, x.jsx)(O.$, {
                                    variant: "primary",
                                    text: k.intl.string(k.t["jCqvk/"]),
                                    onClick: () => {
                                        null != r &&
                                            null != a &&
                                            (tc.default.track(b.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
                                                sku_id: r.id,
                                                application_id: a.id,
                                                location_stack: s,
                                            }),
                                            (0, dn.n)({ sku: r, application: a, analyticsLocations: s }));
                                    },
                                }),
                      }),
                  ],
              });
}
var dd = n(933832),
    dc = n(789645);
function dg(e) {
    let { refund: t, locale: n } = e,
        i = dr(n),
        l = t.eligible ? dd.CheckmarkLargeIcon : dc.XSmallIcon;
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsx)(uZ.H, { className: u5.mW, children: k.intl.string(k.t["n/27pr"]) }),
            (0, x.jsxs)("div", {
                className: u5.iL,
                children: [
                    (0, x.jsx)("div", {
                        children: (function (e, t) {
                            if (null == e.window)
                                return e.policy === uk.IN_GAME_ITEM
                                    ? k.intl.format(k.t["5lvoVS"], { supportURL: t })
                                    : k.intl.string(k.t.s9TZM1);
                            let n = e.window.days;
                            switch (e.policy) {
                                case uk.PREMIUM:
                                    return e.eligible
                                        ? k.intl.format(k.t.EPYteX, { dateLimit: n, supportURL: t })
                                        : k.intl.formatToPlainString(k.t.dk7vyL, { dateLimit: n });
                                case uk.GIFT:
                                    return e.eligible
                                        ? k.intl.format(k.t["16eP/L"], { dateLimit: n, supportURL: t })
                                        : k.intl.formatToPlainString(k.t.owlOWc, { dateLimit: n });
                                default:
                                    return e.eligible
                                        ? k.intl.format(k.t["8uEuEe"], { dateLimit: n, supportURL: t })
                                        : k.intl.formatToPlainString(k.t.dt2jVC, { dateLimit: n });
                            }
                        })(t, i),
                    }),
                    t.policy !== uk.IN_GAME_ITEM &&
                        (0, x.jsxs)("div", {
                            className: u5.My,
                            children: [
                                (0, x.jsx)("div", {
                                    className: u5.Kf,
                                    children:
                                        null != t.window &&
                                        (0, x.jsxs)("div", {
                                            className: u5._Z,
                                            children: [
                                                (0, x.jsx)(uZ.H, {
                                                    className: u5.ud,
                                                    children: k.intl.string(k.t.H0RNz4),
                                                }),
                                                (0, x.jsxs)("div", {
                                                    className: u5.z9,
                                                    children: [
                                                        (0, x.jsx)(l, { className: u5.xb, color: "currentColor" }),
                                                        (0, x.jsx)("div", {
                                                            children: k.intl.formatToPlainString(k.t["7dtXa/"], {
                                                                daysSincePurchase: t.window.days_since_purchase,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                }),
                                (0, x.jsx)(ng.Anchor, { href: i, children: k.intl.string(k.t.re5nOB) }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var dm = n(679897);
function dA(e) {
    let { description: t, cost: n } = e;
    return (0, x.jsx)("li", {
        className: u5.mg,
        children: (0, x.jsxs)(ly.A, {
            justify: ly.A.Justify.BETWEEN,
            children: [(0, x.jsx)("div", { children: t }), (0, x.jsx)("div", { children: n })],
        }),
    });
}
function dE(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [l, s] = I.useState(!1),
        [r, a] = I.useState(!1);
    return (0, x.jsx)(lE.m, {
        forceOpen: r,
        text: l ? i : n,
        children: (0, x.jsx)(n7.D, {
            onMouseEnter: () => {
                l && s(!1);
            },
            onMouseLeave: () => {
                a(!1);
            },
            onClick: function () {
                (0, uq.C)(t, () => {
                    (a(!0), s(!0));
                });
            },
            children: (0, x.jsx)("div", { className: u5.l9, children: t }),
        }),
    });
}
function dh(e) {
    let { paymentId: t } = e;
    return (0, x.jsx)("li", {
        className: u5.mg,
        children: (0, x.jsxs)("div", {
            className: u5.bx,
            children: [
                (0, x.jsx)("div", { children: k.intl.string(k.t["UQim+r"]) }),
                (0, x.jsx)(dE, {
                    value: t,
                    copyText: k.intl.string(k.t["Mdk9+A"]),
                    copyFeedbackText: k.intl.string(k.t["7eIrA2"]),
                }),
            ],
        }),
    });
}
function dS(e) {
    let { tag: t } = e;
    if (null == t) return null;
    let n = t === uV.REVERSED;
    return (0, x.jsxs)(n8.E, {
        variant: "footnote/semibold",
        color: "none",
        tag: "span",
        className: iA()(dm.XM, n ? dm.aB : dm.EN),
        children: [
            t === uV.REVERSED && k.intl.string(k.t.YQv9Li),
            t === uV.PARTIALLY_REFUNDED && k.intl.string(k.t.lYbZzz),
            t === uV.REFUNDED && k.intl.string(k.t.ZBb6NK),
        ],
    });
}
function dT(e) {
    let { payment: t, locale: n } = e,
        i = t.payment_source ?? (t.payment_gateway === de.kM.APPLE_PARTNER ? new oq.Pw({}) : null);
    return null == i
        ? null
        : (0, x.jsx)(ut.A, {
              paymentSource: i,
              locale: n,
              descriptionClassName: u5.iL,
              showLabels: !0,
              showPaymentSourceIcon: !0,
          });
}
function df(e) {
    let { receipt: t, locale: n } = e;
    return t.payments.length <= 1
        ? 1 === t.payments.length
            ? (0, x.jsx)(dT, { payment: t.payments[0], locale: n })
            : null
        : (0, x.jsx)(Q.B, {
              children: t.payments.map((e) =>
                  (0, x.jsxs)(
                      ly.A,
                      {
                          justify: ly.A.Justify.BETWEEN,
                          align: ly.A.Align.CENTER,
                          children: [
                              (0, x.jsx)(dT, { payment: e, locale: n }),
                              (0, x.jsxs)(Q.B, {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 8,
                                  fullWidth: !1,
                                  children: [
                                      (0, x.jsx)(dS, { tag: e.tag }),
                                      (0, x.jsx)(n8.E, {
                                          variant: "body-md/normal",
                                          color: "text-subtle",
                                          children: da(e.amount, t.currency),
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
function dp(e) {
    let { guildProduct: t, locale: n } = e;
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsx)("div", { className: u5.ts }),
            t.delisted
                ? (0, x.jsx)(iQ.w, {
                      type: "warning",
                      message: k.intl.string(k.t["3AvulN"]),
                      role: "none",
                      action: { text: k.intl.string(k.t.zoztQA), onClick: () => (0, ox.A)(dr(n)) },
                  })
                : null != t.guild_id && (0, x.jsx)(u7, { guildId: t.guild_id, guildProductListingId: t.listing_id }),
        ],
    });
}
function dx(e) {
    let { receipt: t, locale: n, hasLinkedToApplication: i } = e,
        { currency: l, guild_product: s, game_item: r, refund: a } = t;
    return (0, x.jsx)(n7.D, {
        onClick: (e) => e.stopPropagation(),
        children: (0, x.jsxs)("div", {
            className: u5.WI,
            children: [
                (0, x.jsx)(uZ.H, { className: u5.mW, children: k.intl.string(k.t.nyzoFb) }),
                (0, x.jsxs)("div", {
                    className: iA()(u5.iL, u5.W),
                    children: [
                        (0, x.jsx)(df, { receipt: t, locale: n }),
                        (0, x.jsxs)("ul", {
                            children: [
                                null != t.subtotal &&
                                    (0, x.jsxs)(x.Fragment, {
                                        children: [
                                            (0, x.jsx)(dA, { description: t.description, cost: da(t.subtotal, l) }),
                                            (0, x.jsx)(dA, {
                                                description: k.intl.string(k.t.QgWXht),
                                                cost: da(t.tax, l),
                                            }),
                                        ],
                                    }),
                                (0, x.jsx)(dA, { description: k.intl.string(k.t.txajQG), cost: da(t.total, l) }),
                                t.amount_refunded > 0 &&
                                    (0, x.jsxs)(x.Fragment, {
                                        children: [
                                            (0, x.jsx)(dA, {
                                                description: k.intl.string(k.t["A+I0AP"]),
                                                cost: da(-t.amount_refunded, l),
                                            }),
                                            (0, x.jsx)(dA, {
                                                description: k.intl.string(k.t.xER6Wi),
                                                cost: da(t.net, l),
                                            }),
                                        ],
                                    }),
                                (0, x.jsx)(dh, { paymentId: t.id }),
                                s?.guild_id != null &&
                                    (0, x.jsx)(u8, { guildId: s.guild_id, guildProductListingId: s.listing_id }),
                            ],
                        }),
                    ],
                }),
                null != s && (0, x.jsx)(dp, { guildProduct: s, locale: n }),
                (0, x.jsx)(dt, { payment: t.receipt_payment }),
                null != r && (0, x.jsx)(du, { receipt: t, gameItem: r, locale: n, hasLinkedToApplication: i }),
                null != a && (0, x.jsx)(dg, { refund: a, locale: n }),
            ],
        }),
    });
}
function dI(e) {
    let { withGradient: t } = e;
    return t
        ? (0, x.jsx)(uW.A, { size: 24, iconSize: 16, color: n4.A.unsafe_rawColors.NEUTRAL_1, className: u5.Sy })
        : (0, x.jsx)("div", {
              className: iA()(u5.Sy, u5.uX, u5.Xr),
              children: (0, x.jsx)(ag.NitroWheelIcon, {
                  size: "custom",
                  width: 16,
                  height: 16,
                  color: n4.A.colors.ICON_DEFAULT,
              }),
          });
}
function d_(e) {
    let { receipt: t } = e,
        n = t.sku?.application,
        i = (0, _.bG)([lD.A], () => lD.A.getGuild(n?.guildId));
    switch (t.icon) {
        case uU.NITRO:
            return (0, x.jsx)(dI, { withGradient: !0 });
        case uU.NITRO_BASIC:
            return (0, x.jsx)(dI, { withGradient: !1 });
        case uU.SHOP:
            return (0, x.jsx)(uX.ShopIcon, {
                size: "custom",
                width: 23,
                height: 23,
                color: "currentColor",
                className: u5.sV,
            });
        case uU.APPLICATION:
        case uU.PRODUCT:
            return (0, x.jsx)(lt.A, {
                className: u5.Sy,
                guildClassName: u5.zA,
                game: t.icon === uU.APPLICATION ? n : void 0,
                guild: i,
                size: lt.M.XSMALL,
                skuId: t.sku?.id,
            });
    }
}
function db(e) {
    let { receipt: t, hasLinkedToApplication: n } = e,
        { game_item: i } = t;
    if (null != i && t.status === uM.PAID)
        switch (i.status) {
            case uw.CLAIMED:
                return (0, x.jsx)("span", { className: u5.gD, children: k.intl.string(k.t.lIsIFo) });
            case uw.UNCLAIMED:
                return (0, x.jsx)("span", { className: u5.Tf, children: k.intl.string(k.t["+tqSi3"]) });
            case uw.REDEEMED:
                return (0, x.jsx)("span", { className: u5.gD, children: k.intl.string(k.t.Osji1u) });
            case uw.FAILED:
                return (0, x.jsx)("span", { className: u5.ob, children: k.intl.string(k.t.Yo4ru6) });
            default:
                return n
                    ? (0, x.jsx)("span", { className: u5.Tf, children: k.intl.string(k.t.y7F0Re) })
                    : (0, x.jsx)("span", { className: u5.Tf, children: k.intl.string(k.t.HHC5Z4) });
        }
    switch (t.status) {
        case uM.PENDING:
            return (0, x.jsx)("span", { className: u5.oE, children: k.intl.string(k.t.y7F0Re) });
        case uM.FAILED:
            return (0, x.jsx)("span", { className: u5.ob, children: k.intl.string(k.t.Yo4ru6) });
        case uM.REVERSED:
            return (0, x.jsx)("span", { className: u5.ob, children: k.intl.string(k.t.YQv9Li) });
        case uM.CANCELED:
            return (0, x.jsx)("span", { className: u5.ob, children: k.intl.string(k.t.ttkBhy) });
        case uM.PARTIALLY_REFUNDED:
            return (0, x.jsx)("span", { className: u5.gD, children: k.intl.string(k.t.lYbZzz) });
        case uM.REFUNDED:
            return (0, x.jsx)("span", { className: u5.gD, children: k.intl.string(k.t.ZBb6NK) });
        case uM.PAID:
            return null;
    }
}
function dN(e) {
    let { receipt: t, locale: n, className: i } = e,
        [l, s] = I.useState(!1),
        { hasAlreadyLinked: r } = (0, uH.RD)(null != t.game_item ? t.sku?.application : void 0);
    return (0, x.jsx)(ux.tG, {
        id: t.id,
        children: (e) =>
            (0, x.jsxs)(n7.D, {
                onClick: () => s(!l),
                "data-expanded": l,
                className: iA()(u5.Ji, i),
                focusProps: { offset: 4 },
                ...e,
                children: [
                    (0, x.jsxs)(ly.A, {
                        className: u5.J7,
                        align: ly.A.Align.CENTER,
                        "data-expanded": l,
                        children: [
                            (0, x.jsx)(n8.E, {
                                variant: "body-sm/normal",
                                className: u5.p6,
                                children: (0, iS.i$)(ih()(t.created_at), "MM/DD/YYYY"),
                            }),
                            (0, x.jsxs)("div", {
                                className: u5.h_,
                                children: [
                                    (0, x.jsx)(d_, { receipt: t }),
                                    (0, x.jsx)("div", {
                                        children:
                                            null != t.subscription
                                                ? ((function (e, t) {
                                                      let { paymentSource: n } = e.receipt_payment,
                                                          i = null != n && b.AD1.has(n.type);
                                                      switch (t.type) {
                                                          case b.rzx.PREMIUM:
                                                              return t.plans
                                                                  .map((e) => {
                                                                      let { plan_id: t, quantity: n } = e;
                                                                      return (0, ab.xq)(t)
                                                                          ? ab.Ay.getDisplayName(t, !1, i)
                                                                          : `${n > 1 ? `${n}x ` : ""}${ab.Ay.getDisplayName(t, !1, i)}`;
                                                                  })
                                                                  .join(", ");
                                                          case b.rzx.GIFT: {
                                                              let e = t.plans
                                                                  .map((e) => {
                                                                      let { plan_id: t } = e;
                                                                      return (0, uY.t$)(t);
                                                                  })
                                                                  .filter((e) => null != e);
                                                              if (0 === e.length) return null;
                                                              return e
                                                                  .map((e) => ab.Ay.getDisplayName(e, !1, i))
                                                                  .join(", ");
                                                          }
                                                          case b.rzx.GUILD:
                                                              if (null == t.plan_name) return null;
                                                              return k.intl.formatToPlainString(
                                                                  t.interval === t4.WT.YEAR
                                                                      ? k.t.V6UFQM
                                                                      : k.t["6oq128"],
                                                                  { planName: t.plan_name },
                                                              );
                                                          case b.rzx.APPLICATION:
                                                              return e.sku?.application != null
                                                                  ? k.intl.formatToPlainString(k.t["0wL/VI"], {
                                                                        tier: e.sku.name,
                                                                    })
                                                                  : k.intl.string(k.t["9czSYu"]);
                                                          default:
                                                              return null;
                                                      }
                                                  })(t, t.subscription) ?? t.description)
                                                : t.guild_product?.delisted === !0
                                                  ? k.intl.string(k.t.O7uLmw)
                                                  : t.description,
                                    }),
                                    t.is_gift || t.subscription?.type === b.rzx.GIFT
                                        ? (0, x.jsx)(lE.m, {
                                              text: k.intl.string(k.t.QddTpm),
                                              children: (0, x.jsx)(uz.GiftIcon, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: u5.ez,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, x.jsxs)("div", {
                                className: u5.vj,
                                children: [
                                    (0, x.jsx)(db, { receipt: t, hasLinkedToApplication: r }),
                                    (0, x.jsx)("span", { className: u5.q9, children: da(t.net, t.currency) }),
                                ],
                            }),
                            (0, x.jsx)(uK.A, {
                                className: u5.fT,
                                direction: l ? uK.A.Directions.UP : uK.A.Directions.DOWN,
                            }),
                        ],
                    }),
                    l ? (0, x.jsx)(dx, { receipt: t, locale: n, hasLinkedToApplication: r }) : null,
                ],
            }),
    });
}
var dC = n(949779);
function dy(e) {
    let { receipts: t, locale: n, loadNextPage: i } = e,
        l = I.useRef(null),
        [s, r] = I.useState(0),
        a = Math.max(Math.ceil(t.length / 10), 1),
        o = t.slice(10 * s, (s + 1) * 10);
    I.useEffect(() => {
        l.current?.scrollTo({ to: 0 });
    }, [s]);
    let u = I.useCallback(
            (e) => {
                (r(e), e >= a - 2 && i());
            },
            [a, i],
        ),
        d = (0, u_.A)("billing-history", l);
    return (0, x.jsx)(ux.hD, {
        navigator: d,
        children: (0, x.jsx)(ux.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, x.jsx)(uC, {
                    className: dC.GD,
                    currentPageIndex: s,
                    onChangePage: u,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, x.jsx)(uI.Ch, {
                        className: dC.Bd,
                        ref: l,
                        overflow: "auto",
                        children: o.map((e) =>
                            (0, x.jsx)(dN, { className: iA()(dC.Nj, dC.Bd), receipt: e, locale: n }, e.id),
                        ),
                    }),
                });
            },
        }),
    });
}
function dv(e) {
    let { subscription: t } = e;
    return (
        th()(null != t.paymentGateway, "Expected payment gateway when rendering for external subscription"),
        (0, x.jsxs)(o$.Z, {
            className: dC.K1,
            children: [
                (0, x.jsx)("div", {
                    className: dC.BF,
                    children: k.intl.format(k.t["6mIX6s"], { paymentGatewayName: de.qm[t.paymentGateway] }),
                }),
                (0, x.jsx)("div", {
                    className: dC.Q2,
                    children: k.intl.format(k.t.eG0uZB, {
                        paymentGatewayName: de.qm[t.paymentGateway],
                        billingHistoryLink: (0, ab.tW)(t.paymentGateway, "BILLING_HISTORY"),
                    }),
                }),
            ],
        })
    );
}
function dj(e) {
    let { locale: t } = e,
        {
            receipts: n,
            hasFetched: i,
            hasFailed: l,
            loadNextPage: s,
        } = (function () {
            let [e, t] = I.useState(uB),
                [n, i] = I.useState(!1),
                [l, s] = I.useState(!1),
                [r, a] = I.useState(!1),
                o = I.useCallback((e, n) => {
                    ts.Bo.get({
                        url: b.Rsh.BILLING_HISTORY,
                        query: { before: e ?? void 0, limit: n },
                        rejectWithError: !0,
                    })
                        .then((n) => {
                            let { body: i } = n,
                                l = i.receipts.map(uF);
                            t((t) => ({ receipts: null == e ? l : [...t.receipts, ...l], cursor: i.cursor }));
                        })
                        .catch(() => {
                            null == e && s(!0);
                        })
                        .finally(() => {
                            (i(!0), a(!1));
                        });
                }, []);
            I.useEffect(() => {
                o(null, 30);
            }, [o]);
            let u = I.useCallback(() => {
                r || null == e.cursor || (a(!0), o(e.cursor, 10));
            }, [r, o, e.cursor]);
            return { receipts: e.receipts, hasFetched: n, hasFailed: l, loadNextPage: u };
        })(),
        r = (0, _.bG)([uA.A], () => uA.A.getPremiumTypeSubscription()),
        a = null != r && r.isPurchasedExternally;
    return i
        ? (0, x.jsxs)("div", {
              className: dC.GD,
              children: [
                  null != r && a ? (0, x.jsx)(dv, { subscription: r }) : null,
                  n.length > 0
                      ? (0, x.jsxs)("div", {
                            className: iA()(dC.PQ, dC.GD),
                            children: [
                                (0, x.jsx)("div", {
                                    className: iA()(dC.Nj, dC.Bd),
                                    children: (0, x.jsxs)(ly.A, {
                                        className: dC.Yi,
                                        children: [
                                            (0, x.jsx)("div", {
                                                className: u5.p6,
                                                children: k.intl.string(k.t["5t11BV"]),
                                            }),
                                            (0, x.jsx)("div", {
                                                className: dC.Ir,
                                                children: k.intl.string(k.t.yAAPb2),
                                            }),
                                            (0, x.jsx)("div", {
                                                className: u5.vj,
                                                children: k.intl.string(k.t["6MqHXV"]),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, x.jsx)(dy, { receipts: n, locale: t, loadNextPage: s }),
                            ],
                        })
                      : l
                        ? (0, x.jsx)(n8.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              children: k.intl.string(k.t["fb3n+4"]),
                          })
                        : a
                          ? null
                          : (0, x.jsx)(n8.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: k.intl.string(k.t.GqvDkk),
                            }),
              ],
          })
        : (0, x.jsx)(oX.y, {});
}
var dO = n(500597);
let dD = (0, S.E2)(T.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, _.bG)([uE.default], () => uE.default.locale);
            return (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(dO.kb, {}), (0, x.jsx)(dj, { locale: e })] });
        },
        useSearchTerms: () => [k.intl.string(k.t.obLrcK)],
    }),
    dR = (0, S.zZ)(T.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => k.intl.string(k.t.obLrcK),
        buildLayout: () => [dD],
    }),
    dL = (0, S.t_)(T.X.BILLING_PANEL, {
        useTitle: () => k.intl.string(k.t.oeUm2s),
        buildLayout: () => [up, dR],
        useObscuredNotice: op.L,
    }),
    dP = (0, S.i4)(T.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.oeUm2s),
        icon: of.CreditCardIcon,
        buildLayout: () => [dL],
    });
var dG = n(70283),
    dM = n(682618),
    dU = n(997101);
let dV = {
        [dU.d.US]: [
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
        [dU.d.IT]: [
            {
                id: "gamelife",
                name: "Gamelife",
                url: "https://www.gamelife.it/cava0261-discord-25-eur-codice-di-attivazione?attribute_values=4",
            },
        ],
        [dU.d.FR]: [
            {
                id: "micromania",
                name: "Micromania",
                url: "https://www.micromania.fr/p/carte-discord-25-euros-166241.html",
            },
        ],
    },
    dk = [];
function dw(e) {
    return null == e ? dk : (dV[e] ?? dk);
}
var dF = n(597758),
    dB = n(35587),
    dX = n(86379);
let dz = (0, S.E2)(T.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dO.uK,
        usePredicate: () => (0, dX.Hp)(),
        useSearchTerms: () => [k.intl.string(k.t.vwMEHS)],
    }),
    dH = (0, S.zZ)(T.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dz] });
var dY = n(704333),
    dW = n(414499),
    dK = n(31300);
function dZ(e) {
    let { enabled: t } = oV({ location: e }),
        n = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.storeCountry?.country);
    return t && dw(n).length > 0;
}
var dq = n(178881);
function dQ() {
    return n.e(5660).then(n.bind(n, 946647));
}
function dJ(e) {
    let { icon: t, children: n } = e;
    return (0, x.jsxs)(n8.E, {
        variant: "body-xs/normal",
        color: "text-default",
        className: dq.A,
        children: [
            (0, x.jsx)(t, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, x.jsx)("span", { children: n }),
        ],
    });
}
let d$ = (0, S.zZ)(T.X.GIFT_CARDS_MARKETING_BANNER_CATEGORY, {
        buildLayout: () => [d0],
        usePredicate: () => dZ("GiftInventoryMarketingBanner"),
    }),
    d0 = (0, S.E2)(T.X.GIFT_CARDS_MARKETING_BANNER, {
        Component: function () {
            let e = dZ("GiftCardsGiftInventoryBanner"),
                t = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.storeCountry?.country),
                n = oC("gift_inventory_banner"),
                i = I.useMemo(
                    () =>
                        dw(t).map((e) => ({
                            text: e.name,
                            onClick: () => {
                                (n("retailer", { partner: e.id, url: e.url }), (0, ox.A)(e.url));
                            },
                        })),
                    [t, n],
                ),
                l = I.useCallback(() => {
                    (n("billing_settings"), (0, nm.openUserSettings)(T.X.BILLING_PANEL));
                }, [n]),
                s = I.useCallback(() => {
                    (n("learn_more", { url: ov }), (0, ox.A)(ov));
                }, [n]);
            return e
                ? (0, x.jsx)(oN, {
                      surface: "gift_inventory_banner",
                      size: "compact",
                      title: k.intl.string(oO.default.Ja5Q8Z),
                      graphicLottie: dQ,
                      actions: i,
                      children: (0, x.jsxs)(Q.B, {
                          direction: "vertical",
                          align: "start",
                          gap: 8,
                          children: [
                              (0, x.jsx)(dJ, {
                                  icon: dY.ServerGridIcon,
                                  children: k.intl.string(oO.default["9xo1g9"]),
                              }),
                              (0, x.jsx)(dJ, { icon: dW.CloudIcon, children: k.intl.string(oO.default.I5UWh9) }),
                              (0, x.jsx)(dJ, {
                                  icon: uz.GiftIcon,
                                  children: k.intl.format(oO.default.ZuneBP, { onBillingSettingsClick: l }),
                              }),
                              (0, x.jsx)(dJ, {
                                  icon: dK.ScreenIcon,
                                  children: k.intl.format(oO.default.UwYHGm, { websiteUrl: s }),
                              }),
                          ],
                      }),
                  })
                : null;
        },
        useSearchTerms: () => [],
    });
var d1 = n(982240),
    d2 = n(45052),
    d3 = n(620301),
    d4 = n(914410),
    d5 = n(339514),
    d6 = n(573343);
function d8(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, x.jsxs)("div", {
        className: iA()(d6.fO, { [d6.bF]: i }),
        children: [
            null != n && (0, x.jsx)("img", { src: n, alt: "", className: d6.si }),
            (0, x.jsxs)("div", {
                className: d6.tc,
                children: [
                    (0, x.jsx)(n8.E, { variant: "body-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, x.jsx)(n8.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: k.intl.format(d5.default.qvx9E4, { count: (0, d1.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function d7(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, x.jsx)("div", {
        className: d6.dw,
        children: t.map((e) => (0, x.jsx)(d8, { tier: e, iconUrl: (0, d2.Se)(e), active: e.key === n?.key }, e.key)),
    });
}
function d9(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eH.Ay)(tw.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, d3.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: b.ZSU.BUTTON_CTA, objectType: b.btD.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, x.jsx)("div", {
        className: d6.NG,
        children: (0, x.jsx)(O.$, {
            variant: "primary",
            icon: uz.GiftIcon,
            text: k.intl.string(d5.default.DZnomS),
            onClick: l,
        }),
    });
}
function ce(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, d1.rL)(i),
        a = (0, d1.rL)(l),
        o = (0, d2.GZ)(n, i, l),
        u = (0, d2.Se)(i),
        d = (0, d2.Se)(l);
    return (
        (t =
            null != l
                ? k.intl.formatToPlainString(d5.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : k.intl.formatToPlainString(d5.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, x.jsxs)("div", {
            className: d6.mY,
            children: [
                null != u &&
                    (0, x.jsx)("div", {
                        className: d6.fC,
                        children: (0, x.jsx)("img", { src: u, alt: "", className: d6.qS }),
                    }),
                (0, x.jsxs)("div", {
                    className: d6.Qs,
                    children: [
                        (0, x.jsx)(n8.E, { variant: "body-md/medium", color: "text-strong", children: t }),
                        (0, x.jsx)(d4.Ay, { variant: d4.qP.BLUE, weight: d4.fh.MEDIUM, progress: o }),
                        (0, x.jsx)(n8.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            className: d6.qg,
                            children: k.intl.format(d5.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                null != d &&
                    (0, x.jsx)("div", {
                        className: d6.fC,
                        children: (0, x.jsx)("img", { src: d, alt: "", className: d6.qS }),
                    }),
            ],
        })
    );
}
function ct(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, _.cf)([d1.Ay], () => ({
            badgeProgress: d1.Ay.getSingleRequirementProgress(dG.$.GIFTING)?.current ?? 0,
            currentTier: d1.Ay.getCurrentTier(dG.$.GIFTING),
            nextTier: d1.Ay.getNextTier(dG.$.GIFTING),
            giftsRemaining: d1.Ay.getRemainingToNextTier(dG.$.GIFTING),
            tiers: d1.Ay.getBadgeById(dG.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, x.jsxs)("div", {
              className: d6.kL,
              children: [
                  (0, x.jsxs)("div", {
                      className: d6.Jo,
                      children: [
                          n > 0 &&
                              (0, x.jsxs)(x.Fragment, {
                                  children: [
                                      (0, x.jsx)(ce, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, x.jsx)("div", { className: d6.yF }),
                                  ],
                              }),
                          (0, x.jsx)(d7, { tiers: r, currentTier: i }),
                          (0, x.jsx)(n8.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: d6.PJ,
                              children: k.intl.string(d5.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, x.jsx)(d9, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let cn = (0, S.zZ)(T.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => k.intl.string(d5.default.sFokBp),
        buildLayout: () => [ci],
        usePredicate: () => null != (0, _.bG)([d1.Ay], () => d1.Ay.getBadgeById(dG.$.GIFTING)),
    }),
    ci = (0, S.E2)(T.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [k.intl.string(d5.default.sFokBp)],
        Component: () => (0, x.jsx)(ct, {}),
    });
var cl = n(264779),
    cs = n(412260),
    cr = n(555393),
    ca = n(725807),
    co = n(212168),
    cu = n(976860),
    cd = n(469778),
    cc = n(45938),
    cg = n(109802),
    cm = n(869038),
    cA = n(380856);
function cE(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, x.jsxs)(ly.A, {
        className: iA()(cA.wx, n),
        align: ly.A.Align.CENTER,
        children: [
            (0, x.jsx)("div", { className: cA.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function ch(e) {
    let { children: t, className: n } = e;
    return (0, x.jsx)("div", { className: iA()(cA.rf, n), children: t });
}
class cS extends I.PureComponent {
    static Header = cE;
    static Body = ch;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, x.jsx)("div", { className: iA()(cA.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var cT = n(153626),
    cf = n(446263),
    cp = n(871123),
    cx = n(366523),
    cI = n(30793),
    c_ = n(97352),
    cb = n(67480),
    cN = n(615396),
    cC = n(274904);
class cy extends I.PureComponent {
    _copyModeTimeout = new rY.Ep();
    state = { copyMode: cg.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cg.q.SUCCESS:
                return k.intl.string(k.t.XVvPjU);
            case cg.q.ERROR:
                return k.intl.string(k.t.i4GM3L);
            default:
                return k.intl.string(k.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        cm.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, cc.AK)(t, n),
            (0, uq.C)(
                e,
                () => this.setState({ copyMode: cg.q.SUCCESS }),
                () => this.setState({ copyMode: cg.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cg.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t, canRevoke: n } = this.props,
            { copyMode: i } = this.state;
        return (0, x.jsxs)(ly.A, {
            direction: ly.A.Direction.VERTICAL,
            className: cC.Gj,
            children: [
                (0, x.jsx)(cg.e, {
                    className: cC.ph,
                    value: (0, cc.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: uq.p5,
                    hideMessage: e ? k.intl.string(k.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: s5.XD.BRAND,
                    buttonLook: s5.pR.FILLED,
                }),
                (0, x.jsxs)("div", {
                    className: cC.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, x.jsxs)(I.Fragment, {
                                  children: [
                                      k.intl.format(k.t.ltVZcJ, { hours: t.expiresAt.diff(ih()(), "h") }),
                                      n ? (0, x.jsx)(I.Fragment, { children: " \u2014\xa0" }) : null,
                                  ],
                              })
                            : null,
                        n
                            ? (0, x.jsx)(n7.D, {
                                  tag: "a",
                                  onClick: () => this.handleRevoke(t.code),
                                  children: k.intl.string(k.t.v6Yazx),
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
}
class cv extends I.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await cm.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && cm.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, cp.bF)(e)
            ? (0, x.jsx)(cx.e, { shape: "square", sku: e, containerClassName: cC.ez })
            : null != t
              ? (0, x.jsx)(cf.A, { giftStyle: t, className: cC.ez, shouldAnimate: this.state.isHovered })
              : (0, x.jsx)(lt.A, { game: n, size: lt.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, cp.bF)(e)
            ? (0, x.jsxs)("div", {
                  className: iA()(cC.Oc, cC.ic),
                  children: [
                      (0, x.jsx)(lt.A, { game: n, size: lt.M.XSMALL, skuId: e.id, className: cC._u }),
                      k.intl.format(k.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, x.jsx)("div", { className: cC.Oc, children: k.intl.format(k.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === t4.FB
                    ? k.intl.string(k.t.odsU6W)
                    : i === t4.Bu && null != n
                      ? k.intl.formatToPlainString(n.interval === t4.WT.MONTH ? k.t.uZjpiJ : k.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : k.intl.formatToPlainString(n.interval === t4.WT.MONTH ? k.t.rCJvqo : k.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, x.jsx)("div", { className: cC.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, x.jsxs)(ly.A, {
            justify: ly.A.Justify.BETWEEN,
            align: ly.A.Align.CENTER,
            className: cC.pe,
            children: [
                (0, x.jsx)(n8.E, { variant: "body-md/normal", children: k.intl.string(k.t.lELyPj) }),
                (0, x.jsx)(O.$, {
                    variant: "primary",
                    size: "sm",
                    text: k.intl.string(k.t.Q3Qguo),
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
        return (0, x.jsxs)(cS, {
            className: i,
            children: [
                (0, x.jsx)(n7.D, {
                    onClick: this.handleToggleOpen,
                    className: cC.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, x.jsx)(cS.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, x.jsxs)("div", {
                            className: cC.MY,
                            children: [
                                (0, x.jsxs)(ly.A, {
                                    align: ly.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, x.jsxs)("div", {
                                            className: cC.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, x.jsx)(uK.A, {
                                    direction: a ? uK.A.Directions.UP : uK.A.Directions.DOWN,
                                    className: cC.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, x.jsx)(cS.Body, {
                          children: s
                              ? (0, x.jsx)(oX.y, { className: cC.u1 })
                              : (0, x.jsxs)(I.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) =>
                                            (0, x.jsx)(
                                                cy,
                                                { giftCode: e, sku: l, hideCode: r, canRevoke: !(0, cT.m)(e) },
                                                e.code,
                                            ),
                                        ),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cj = _.Ay.connectStores([cb.A, td.A, cI.A, i5.A, c_.A, oL.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i, excludedGiftCodes: l } = e,
        s = cb.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let r = cI.A.getForGifterSKUAndPlan(oL.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i)
        .filter((e) => l?.has(e.code) !== !0);
    return {
        sku: s,
        hideCodes: td.A.enabled,
        isFetching: cI.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: cI.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i5.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, cN.c9)(n) : null,
        giftCodes: r,
    };
})(cv);
var cO = n(725570),
    cD = n(736653),
    cR = n(46054);
let cL = ih().duration(30, "days");
var cP = n(416052),
    cG = n(878309);
function cM(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, x.jsx)(lx.a, {
        title: "",
        size: "md",
        input: (0, x.jsx)("div", { className: cG.aR }),
        onClose: async () => await t(),
        actions: [{ text: k.intl.string(k.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, x.jsxs)("div", {
            className: cG.t4,
            children: [
                (0, x.jsx)(C.D, { variant: "heading-xl/semibold", children: k.intl.string(k.t.iufib1) }),
                (0, x.jsx)(n8.E, { variant: "body-md/normal", className: cG.G3, children: k.intl.string(k.t.eAn6z2) }),
            ],
        }),
    });
}
let cU = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = I.useState(null),
        o = (0, t1.GV)(),
        { analyticsLocations: u } = (0, eH.Ay)(tw.A.USER_SETTINGS_GIFT_INVENTORY);
    return (I.useEffect(() => {
        null == i &&
            (0, cl.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, x.jsx)(cM, { onClose: t, transitionState: s })
        : null == i
          ? (0, x.jsx)(oX.y, { className: cG.Lq })
          : (0, x.jsx)(lx.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, x.jsxs)("div", {
                    className: cG.N1,
                    children: [
                        (0, x.jsx)("div", { className: cG.Qw }),
                        (0, x.jsx)(C.D, { variant: "heading-xl/semibold", children: k.intl.string(k.t["23BfZh"]) }),
                        (0, x.jsx)(n8.E, {
                            variant: "body-md/normal",
                            className: cG.G3,
                            children: l.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: k.intl.string(k.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: k.intl.string(k.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, cl.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, x.jsxs)("div", {
                    children: [
                        (0, x.jsx)(lo.c, { className: cG.M5 }),
                        (0, x.jsx)(lg.D, {
                            label: k.intl.string(k.t.s9LFQh),
                            helperText: k.intl.string(k.t["F+nFTZ"]),
                            children: (0, x.jsx)(cP.A, {
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
var cV = n(136380);
function ck(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = I.useState(!1),
        [r, a] = I.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, cD.Ay)(),
        d = (0, cl.WD)(n.id, u),
        c = null != i,
        g = I.useMemo(
            () =>
                (0, iS.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? ih()(n.outboundRedemptionEndDate)
                            : ih()(n.endDate).add(cL)
                        : ih()(n.endDate),
                    "LL",
                ),
            [n, c],
        );
    c && l
        ? (t = k.intl.format(k.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !l
          ? (t = k.intl.format(k.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && l
            ? (t = k.intl.format(k.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || l || (t = k.intl.format(k.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? k.intl.string(k.t["2cHUti"]) : k.intl.string(k.t.O13yhz),
        A = (0, cr.N)()?.isEligible === !0,
        E = I.useCallback(() => a(!1), []),
        { outboundTitle: h, outboundTermsAndConditions: S } = n;
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsxs)("div", {
                className: cV.AX,
                children: [
                    (0, x.jsxs)("div", {
                        className: cV.gE,
                        children: [
                            (0, x.jsxs)("div", {
                                className: cV.At,
                                children: [
                                    (0, x.jsx)("div", {
                                        className: cV.$G,
                                        children: (0, x.jsx)("img", { alt: "", src: d, className: cV.IJ }),
                                    }),
                                    (0, x.jsxs)("div", {
                                        children: [
                                            (0, x.jsx)(C.D, { variant: "heading-sm/semibold", children: h }),
                                            (0, x.jsx)(n8.E, {
                                                variant: "body-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || A) && (0, x.jsx)(O.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, x.jsx)(n8.E, {
                            className: cV.GL,
                            variant: "body-xs/normal",
                            color: "text-default",
                            children: cR.A.parse(S, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, x.jsx)(cO.aF, {
                    renderModal: (e) =>
                        (0, x.jsx)(cU, {
                            ...e,
                            onClose: E,
                            onClaim: dF.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
function cw(e) {
    let { redesign: t = !1 } = e,
        n = (0, _.yK)([cd.A], () => cd.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, cr.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, dB.y7)(),
        a = n.find((e) => e.giftCodeBatchId === t4.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === t4.Bu && !e.consumed) ?? [],
        [u, d] = Z().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === t4.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = l.length + s.length > 0,
        g =
            t || !c
                ? null
                : (0, x.jsxs)("div", {
                      className: cV.N1,
                      children: [
                          (0, x.jsx)(C.D, { variant: "heading-sm/semibold", children: k.intl.string(k.t.wFsj3B) }),
                          (0, x.jsx)(lo.c, { className: cV.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, x.jsxs)("div", {
                      className: cV.uo,
                      children: [
                          (0, x.jsx)(ag.NitroWheelIcon, {
                              size: "md",
                              color: n4.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cV.PC,
                          }),
                          (0, x.jsx)(n8.E, {
                              variant: "body-md/normal",
                              className: cV.Qw,
                              children: k.intl.format(k.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tY.default)(), (0, cu.pX)(b.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, x.jsx)(ca.A, {
                              showGradient: !0,
                              className: cV.aA,
                              subscriptionTier: t4.pe.TIER_2,
                              textOptions: { textOverride: k.intl.string(k.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, x.jsxs)("div", {
        children: [
            g,
            (0, x.jsx)(co.A, {
                className: cV.Yj,
                isShown: !1 === i && c,
                type: co.i.PREMIUM,
                hasBackground: !0,
                children: (0, x.jsxs)("div", {
                    className: cV.DE,
                    children: [
                        m,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, x.jsx)(ck, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, x.jsx)(ck, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, x.jsx)(
                                  cj,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: t4.FB,
                                  },
                                  (0, cc.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, x.jsx)(
                                  cj,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: t4.Bu,
                                  },
                                  (0, cc.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, x.jsx)(
                                  cj,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: t4.Bu,
                                  },
                                  (0, cc.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let cF = (0, S.zZ)(T.X.MY_GIFTS_CATEGORY, {
        useTitle: cX,
        buildLayout: () => [cB],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, _.cf)(
                    [cs.A],
                    () => ({
                        claimedOutboundPromotionCodes: cs.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: cs.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, dB.T1)({ includeClaimedPromotions: !0 }),
                i = (0, cl.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    cB = (0, S.E2)(T.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cX()],
        Component: () => (0, x.jsx)(cw, { redesign: !0 }),
    });
function cX() {
    return k.intl.string(k.t.YzjdWJ);
}
var cz = (((o = {})[(o.PENDING = 1)] = "PENDING"), (o[(o.ACTIVE = 2)] = "ACTIVE"), (o[(o.ENDED = 3)] = "ENDED"), o);
function cH(e) {
    return e.type === b.rzx.GIFT && null != e.giftSubscription && e.status !== b.Dmq.ENDED;
}
function cY(e) {
    return Array.from(e)
        .filter(cH)
        .sort((e, t) => ok.default.compare(t.id, e.id));
}
function cW(e) {
    let { giftSubscription: t, status: n, canceledAt: i, currentPeriodEnd: l } = e,
        { recipientUserId: s } = t;
    return t.status === cz.PENDING
        ? { kind: "pending", expiresAt: t.acceptanceExpiresAt }
        : n === b.Dmq.PAST_DUE || n === b.Dmq.BILLING_RETRY
          ? { kind: "payment_failed", recipientUserId: s }
          : null != i || t.status === cz.ENDED
            ? { kind: "canceled", recipientUserId: s }
            : { kind: "active", renewsAt: l, recipientUserId: s };
}
var cK = n(339048),
    cZ = (((u = {}).GIFT_INVENTORY = "gift_inventory"), u),
    cq = n(183636),
    cQ = n(949192),
    cJ = n(379912),
    c$ = n(50302);
function c0(e) {
    let t = k.intl.string(k.t.lG6a5x),
        n = (function (e) {
            switch (e) {
                case t4.MM.PREMIUM_GIFT_MONTH_TIER_2:
                    return { interval: t4.WT.MONTH, intervalCount: 1 };
                case t4.MM.PREMIUM_GIFT_YEAR_TIER_2:
                    return { interval: t4.WT.YEAR, intervalCount: 1 };
                default:
                    return null;
            }
        })(e.planId);
    return null == n
        ? t
        : k.intl.formatToPlainString(n.interval === t4.WT.MONTH ? k.t.rCJvqo : k.t.Vd3Iu8, {
              skuName: t,
              intervalCount: n.intervalCount,
          });
}
function c1(e) {
    let { giftStyle: t, shouldAnimate: n } = e;
    return null != t
        ? (0, x.jsx)(cf.A, { giftStyle: t, className: cC.ez, shouldAnimate: n })
        : (0, x.jsx)(lt.A, { game: null, skuId: t4.pe.TIER_2, size: lt.M.MEDIUM });
}
function c2(e) {
    let { icon: t, title: n, subtitle: i, caret: l } = e,
        s = (0, _.bG)([i5.A], () => i5.A.getApplication(t4.tv)?.getSplashURL(512));
    return (0, x.jsx)(cS.Header, {
        splashArtURL: s,
        children: (0, x.jsxs)("div", {
            className: cC.MY,
            children: [
                (0, x.jsxs)(ly.A, {
                    align: ly.A.Align.CENTER,
                    children: [
                        t,
                        (0, x.jsxs)("div", {
                            className: cC.TK,
                            children: [
                                (0, x.jsx)("div", { className: cC.mO, children: n }),
                                (0, x.jsx)("div", { className: cC.Oc, children: i }),
                            ],
                        }),
                    ],
                }),
                l,
            ],
        }),
    });
}
function c3(e) {
    let { subscription: t, expiresAt: n } = e,
        { initialGiftCode: i, initialEntitlementId: l } = t.giftSubscription,
        s = (0, _.bG)([cd.A], () => (null != l ? cd.A.getGiftable().find((e) => e.id === l) : void 0)),
        r = (0, _.bG)([cb.A], () => (null != s ? cb.A.get(s.skuId) : null)),
        {
            giftCode: a,
            isFetching: o,
            loadedAt: u,
            hideCode: d,
        } = (0, _.cf)([cI.A, td.A], () => ({
            giftCode: null != i ? cI.A.get(i) : null,
            isFetching: null != s && cI.A.getUserGiftCodesFetchingForSKUAndPlan(s.skuId, s.subscriptionPlanId),
            loadedAt: null != s ? cI.A.getUserGiftCodesLoadedAtForSKUAndPlan(s.skuId, s.subscriptionPlanId) : null,
            hideCode: td.A.enabled,
        })),
        [c] = I.useState(Date.now),
        [g, m] = I.useState(!1),
        [A, E] = I.useState(!1),
        h = Math.max(0, Math.floor((n.getTime() - c) / oy.A.Millis.HOUR)),
        S = (0, x.jsx)(c2, {
            icon: (0, x.jsx)(c1, { giftStyle: s?.giftStyle, shouldAnimate: A }),
            title: c0(t),
            subtitle: k.intl.format(k.t.ltVZcJ, { hours: h }),
            caret:
                null != s && null != r
                    ? (0, x.jsx)(uK.A, { direction: g ? uK.A.Directions.UP : uK.A.Directions.DOWN, className: cC.eO })
                    : null,
        });
    if (null == s || null == r) return (0, x.jsx)(cS, { children: S });
    let { skuId: T, subscriptionPlanId: f } = s;
    return (0, x.jsxs)(cS, {
        onMouseEnter: () => E(!0),
        onMouseLeave: () => E(!1),
        children: [
            (0, x.jsx)(n7.D, {
                onClick: function () {
                    let e = !g;
                    (e && (null == u || u < c) && cm.Ay.fetchUserGiftCodesForSKU(T, f), m(e));
                },
                className: cC.Nr,
                "aria-expanded": g,
                children: S,
            }),
            g
                ? (0, x.jsxs)(cS.Body, {
                      children: [
                          o ? (0, x.jsx)(oX.y, { className: cC.u1 }) : null,
                          o || null == a ? null : (0, x.jsx)(cy, { giftCode: a, sku: r, hideCode: d, canRevoke: !1 }),
                      ],
                  })
                : null,
        ],
    });
}
let c4 = I.memo(function (e) {
    let { subscription: t } = e,
        n = cW(t);
    return "pending" === n.kind
        ? (0, x.jsx)(c3, { subscription: t, expiresAt: n.expiresAt })
        : (0, x.jsx)(cS, {
              children: (0, x.jsx)(c2, {
                  icon: (0, x.jsx)(c1, { giftStyle: null, shouldAnimate: !1 }),
                  title: c0(t),
                  subtitle: (function (e) {
                      switch (e.kind) {
                          case "active":
                              return k.intl.format(cJ.default.MR4VnX, { renewalDate: e.renewsAt });
                          case "canceled":
                              return k.intl.string(c$.default.bWW0Gp);
                          case "payment_failed":
                              return k.intl.string(c$.default.nZIlOV);
                      }
                  })(n),
              }),
          });
});
function c5() {
    var e, t;
    let n,
        i,
        l = (0, _.yK)([cd.A], () => cd.A.getGiftable()),
        s = (0, _.yK)([uA.A], () => cY(Object.values(uA.A.getSubscriptions() ?? {}))),
        r = I.useMemo(
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let { giftSubscription: i } of e)
                        i.status === cz.PENDING &&
                            (null != i.initialGiftCode && t.add(i.initialGiftCode),
                            null != i.initialEntitlementId && n.add(i.initialEntitlementId));
                    return { giftCodes: t, entitlementIds: n };
                })(s),
            [s],
        ),
        a = l.filter((e) => {
            let { id: t, giftCodeBatchId: n } = e;
            return null == n && !r.entitlementIds.has(t);
        }),
        o = Z().groupBy(a, (e) => (0, cc.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [u, d] = I.useState(!1),
        [c, g] = I.useState(!1);
    I.useEffect(() => {
        (!(async function () {
            (await (0, cK.XJ)(), d(!0));
        })(),
            (async function () {
                try {
                    await (0, oR.hP)();
                } finally {
                    g(!0);
                }
            })());
    }, []);
    let m = u && c;
    if (
        ((e = cZ.GIFT_INVENTORY),
        (t = !m),
        (n = I.useRef(null)),
        (i = I.useRef(!1)),
        I.useEffect(() => {
            if (i.current) return;
            if (!t) {
                i.current = !0;
                return;
            }
            n.current ??= performance.now();
            let l = setTimeout(
                () => {
                    ((i.current = !0),
                        "focused" === cq.A.getState() &&
                            (0, cQ.pM)(Error(`${e} load timed out`), {
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
        !m)
    )
        return (0, x.jsx)(oX.y, { className: cV.Lq });
    if (0 === Object.keys(o).length && 0 === s.length)
        return (0, x.jsxs)("div", {
            className: cV.p$,
            children: [
                (0, x.jsx)(uZ.H, { className: cV.ks, children: k.intl.string(k.t.B1qgZn) }),
                (0, x.jsx)("p", {
                    className: cV.WO,
                    children: k.intl.format(k.t.HezvJ8, {
                        onClick: function () {
                            (0, nm.openUserSettings)(T.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let A = Z()
        .keys(o)
        .map((e) => {
            let { skuId: t, subscriptionPlanId: n, giftStyle: i } = (0, cc.X6)(e);
            return (0, x.jsx)(
                cj,
                { skuId: t, subscriptionPlanId: n, entitlements: o[e], giftStyle: i, excludedGiftCodes: r.giftCodes },
                e,
            );
        });
    if (0 === s.length) return (0, x.jsx)(Q.B, { gap: "lg", children: A });
    let E = Z().sortBy(s, (e) => +("pending" !== cW(e).kind));
    return (0, x.jsxs)(Q.B, {
        gap: 32,
        children: [
            (0, x.jsxs)(Q.B, {
                gap: 12,
                children: [
                    (0, x.jsx)(C.D, { variant: "heading-sm/medium", children: k.intl.string(k.t.trSpHX) }),
                    (0, x.jsx)(Q.B, { gap: "lg", children: E.map((e) => (0, x.jsx)(c4, { subscription: e }, e.id)) }),
                ],
            }),
            A.length > 0
                ? (0, x.jsxs)(Q.B, {
                      gap: 12,
                      children: [
                          (0, x.jsx)(C.D, { variant: "heading-sm/medium", children: k.intl.string(c$.default.LO0a0F) }),
                          (0, x.jsx)(Q.B, { gap: "lg", children: A }),
                      ],
                  })
                : null,
        ],
    });
}
let c6 = (0, S.zZ)(T.X.PURCHASED_GIFTS_CATEGORY, {
        useTitle: c7,
        useHeaderDecoration: function () {
            return (0, _.bG)([uA.A], () => cY(Object.values(uA.A.getSubscriptions() ?? {})).length > 0)
                ? {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "manage-gifted-subscriptions-button",
                              type: p.UV.BUTTON,
                              text: k.intl.string(c$.default["KILp6/"]),
                              onClick: () => (0, nm.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL),
                          },
                      ],
                  }
                : null;
        },
        buildLayout: () => [c8],
    }),
    c8 = (0, S.E2)(T.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [c7()], Component: () => (0, x.jsx)(c5, {}) });
function c7() {
    return k.intl.string(k.t.FWe6CP);
}
var c9 = n(532446),
    ge = n(499454);
class gt extends I.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: b.ZSU.BUTTON_CTA };
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
                    (await (0, oZ.Qp)(n),
                        (0, oZ.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oz.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, cc.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await cm.Ay.resolveGiftCode(e, { withSubscriptionPlan: !0, withGiftSubscriptionAgreement: !0 });
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (tc.default.track(b.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: b.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: b.ZSU.BUTTON_CTA,
                },
            }),
                (0, ge.h)({ processedCode: e }),
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
            r = e ? k.intl.string(k.t["hVEn/j"]) : k.intl.string(k.t.SeKIoS),
            a = e ? k.intl.string(k.t.epHMtp) : void 0;
        return (0, x.jsx)(n6.n, {
            label: e ? void 0 : k.intl.string(k.t["il+VCo"]),
            children: (0, x.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, x.jsxs)(c9.M, {
                    children: [
                        (0, x.jsx)(l_.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !s && l ? k.intl.string(k.t.Y11a2u) : null,
                            helperText: s
                                ? k.intl.format(k.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${n}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, x.jsx)(O.$, {
                            variant: "primary",
                            text: k.intl.string(k.t.KIpp7M),
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
function gn(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, um.c)({ location: "UserSettingsBilling" }),
        i = I.useContext(tc.Ig),
        l = (0, _.bG)([td.A], () => td.A.enabled);
    return (0, x.jsx)(gt, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let gi = (0, S.zZ)(T.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => k.intl.string(k.t["il+VCo"]),
        buildLayout: () => [gl],
        usePredicate: () => !(0, dX.Hp)(),
    }),
    gl = (0, S.E2)(T.X.REDEEM_CODE_INPUT, {
        Component: () => (0, x.jsx)(gn, { redesign: !0 }),
        useSearchTerms: () => [k.intl.string(k.t["jcSP+g"]), k.intl.string(k.t["il+VCo"])],
    }),
    gs = (0, S.t_)(T.X.GIFT_PANEL, {
        useTitle: () => k.intl.string(k.t["jcSP+g"]),
        buildLayout: () => [d$, gi, cF, cn, c6, dH],
        initialize: () => {
            (dF.Ay.fetchClaimedOutboundPromotionCodes(), (0, dM.o0)(dG.$.GIFTING));
        },
    }),
    gr = (0, S.i4)(T.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t["jcSP+g"]),
        icon: uz.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, dB.IO)().length;
            return I.useMemo(() => ({ badgeType: p.Xi.COUNT, count: e }), [e]);
        },
        getDismissibleBadges: () => {
            let e = { location: "UserSettingsGiftInventory" },
                t = um.A.getConfig(e).enabled,
                n = oU.getConfig(e).enabled,
                i = dw(sT.default.getCurrentUser()?.storeCountry?.country).length > 0;
            return t && n && i
                ? [{ badgeType: p.Xi.NEW, dismissibleContent: eh.M.GIFT_INVENTORY_SETTINGS_NEW_BADGE }]
                : [];
        },
        buildLayout: () => [gs],
    });
var ga = n(659758),
    go = n(177993),
    gu = n(517352),
    gd = n(831259),
    gc = n(462887),
    gg = n(73825),
    gm = n(531260),
    gA = n(160946),
    gE = n(721668),
    gh = n(224016),
    gS = n(526292),
    gT = n(881489),
    gf = n(300349),
    gp = n(106512),
    gx = n(175020),
    gI = n(403227),
    g_ = n(812537),
    gb = n(103411),
    gN = n(190187),
    gC = n(930861),
    gy = n(854627),
    gv = n(619019),
    gj = n(326084),
    gO = n(851746),
    gD = n(664654),
    gR = n(610709),
    gL = n(912140),
    gP = n(953727);
let gG = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...l } = e;
        return (0, x.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gP.A)({ ...l }),
            children: [
                (0, x.jsx)("circle", { r: i ?? "40%", cx: "50%", cy: "50%", className: n }),
                (0, x.jsxs)("g", {
                    transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                    children: [
                        (0, x.jsx)("path", {
                            d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                            fill: "#FF6BFA",
                            className: t,
                        }),
                        (0, x.jsx)("path", {
                            d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                            fill: "#FFDEF9",
                        }),
                        (0, x.jsx)("path", {
                            d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                            fill: "#FFB0FF",
                        }),
                    ],
                }),
            ],
        });
    },
    gM = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            l = (0, cD.Ay)(),
            s = (0, gc.q)(l),
            r = null != n ? n : s ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, x.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, gP.A)({ ...i }),
            children: [
                (0, x.jsxs)("svg", {
                    width: "100",
                    height: "100",
                    viewBox: "0 0 114 114",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, x.jsxs)("defs", {
                            children: [
                                (0, x.jsxs)("linearGradient", {
                                    id: "purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        (0, x.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "#E2C7FA", stopOpacity: 1 },
                                        }),
                                        (0, x.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "#F3D3DE", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                                (0, x.jsxs)("linearGradient", {
                                    id: "dark-purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        (0, x.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                        (0, x.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, x.jsx)("ellipse", {
                            cx: "57.2768",
                            cy: "57.0796",
                            rx: "56.3726",
                            ry: "56.3726",
                            fill: null != n ? n : r,
                            fillOpacity: null != t ? t : s ? 0.5 : 0.2,
                        }),
                        (0, x.jsxs)("g", {
                            width: "65",
                            transform: "translate(50, 50) scale(.7) translate(-10, -39)",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                (0, x.jsx)("path", {
                                    d: "M42.0084 14.8866L33.7687 17.7832C33.3446 17.9281 32.9766 18.2015 32.7161 18.565C32.4555 18.9285 32.3154 19.3641 32.3154 19.8109C32.3154 20.2576 32.4555 20.6932 32.7161 21.0567C32.9766 21.4203 33.3446 21.6936 33.7687 21.8385L42.0084 24.7351C42.3147 24.8404 42.593 25.0138 42.8221 25.2422C43.0512 25.4705 43.2252 25.7478 43.3309 26.053L46.2373 34.2649C46.3827 34.6875 46.657 35.0543 47.0217 35.3139C47.3865 35.5736 47.8236 35.7132 48.2718 35.7132C48.7201 35.7132 49.1572 35.5736 49.522 35.3139C49.8867 35.0543 50.161 34.6875 50.3064 34.2649L53.2128 26.053C53.3204 25.7488 53.495 25.4725 53.7239 25.2444C53.9528 25.0164 54.23 24.8423 54.5353 24.7351L62.7896 21.8385C63.2136 21.6936 63.5817 21.4203 63.8422 21.0567C64.1028 20.6932 64.2428 20.2576 64.2428 19.8109C64.2428 19.3641 64.1028 18.9285 63.8422 18.565C63.5817 18.2015 63.2136 17.9281 62.7896 17.7832L54.5353 14.8866C54.2315 14.7767 53.9557 14.6018 53.7272 14.374C53.4987 14.1463 53.3231 13.8714 53.2128 13.5687L50.3064 5.34234C50.161 4.91974 49.8867 4.55297 49.522 4.2933C49.1572 4.03363 48.7201 3.89404 48.2718 3.89404C47.8236 3.89404 47.3865 4.03363 47.0217 4.2933C46.657 4.55297 46.3827 4.91974 46.2373 5.34234L43.3309 13.5687C43.2233 13.8729 43.0487 14.1492 42.8198 14.3773C42.591 14.6054 42.3137 14.7794 42.0084 14.8866Z",
                                    fill: "white",
                                    fillOpacity: s ? "0.6" : "0.4",
                                }),
                                (0, x.jsx)("path", {
                                    d: "M34.0878 3.57968L33.0393 0.634802C32.9888 0.483384 32.8917 0.351665 32.7618 0.258321C32.6319 0.164978 32.4759 0.114746 32.3158 0.114746C32.1556 0.114746 31.9996 0.164978 31.8697 0.258321C31.7398 0.351665 31.6427 0.483384 31.5922 0.634802L30.6217 3.57968C30.5838 3.68745 30.5221 3.78534 30.4411 3.86607C30.3601 3.94681 30.2619 4.00831 30.1538 4.04602L27.1555 5.02189C27.0067 5.07415 26.8777 5.17117 26.7865 5.29956C26.6953 5.42795 26.6464 5.58137 26.6464 5.73868C26.6464 5.89598 26.6953 6.04941 26.7865 6.17779C26.8777 6.30618 27.0067 6.4032 27.1555 6.45547L30.0758 7.47451C30.1839 7.51222 30.2821 7.57373 30.3631 7.65446C30.4441 7.7352 30.5059 7.83308 30.5437 7.94085L31.5575 10.8426C31.6081 10.994 31.7052 11.1257 31.835 11.219C31.9649 11.3124 32.121 11.3626 32.2811 11.3626C32.4412 11.3626 32.5973 11.3124 32.7271 11.219C32.857 11.1257 32.9541 10.994 33.0047 10.8426L34.0878 7.94085C34.1257 7.83308 34.1874 7.7352 34.2684 7.65446C34.3494 7.57373 34.4476 7.51222 34.5558 7.47451L37.476 6.45547C37.6249 6.4032 37.7538 6.30618 37.845 6.17779C37.9362 6.04941 37.9852 5.89598 37.9852 5.73868C37.9852 5.58137 37.9362 5.42795 37.845 5.29956C37.7538 5.17117 37.6249 5.07415 37.476 5.02189L34.5211 4.00284C34.4237 3.9656 34.3349 3.90883 34.2604 3.83604C34.1859 3.76326 34.1271 3.676 34.0878 3.57968Z",
                                    fill: "white",
                                    fillOpacity: "0.8",
                                }),
                            ],
                        }),
                    ],
                }),
                (0, x.jsxs)("defs", {
                    children: [
                        (0, x.jsxs)("filter", {
                            id: "filter0_d_1282_11577",
                            x: "-6.55945",
                            y: "0.382812",
                            width: "89.2926",
                            height: "70.3945",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, x.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, x.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, x.jsx)("feOffset", { dy: "4" }),
                                (0, x.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                                (0, x.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                (0, x.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                }),
                                (0, x.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1282_11577",
                                }),
                                (0, x.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_1282_11577",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, x.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, x.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "paint2_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, x.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, x.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "paint1_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, x.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, x.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "paint1_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, x.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, x.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "paint2_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, x.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, x.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "paint0_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, x.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, x.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11557",
                            x1: "0.904297",
                            y1: "56.5004",
                            x2: "113.649",
                            y2: "56.5004",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, x.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, x.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "paint0_linear_684_72736",
                            x1: "0.904236",
                            y1: "57.0796",
                            x2: "113.649",
                            y2: "57.0796",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, x.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, x.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83179",
                            x1: "0.904236",
                            y1: "56.5005",
                            x2: "113.649",
                            y2: "56.5005",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, x.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, x.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83268",
                            x1: "0.904236",
                            y1: "57.2461",
                            x2: "113.649",
                            y2: "57.2461",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, x.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, x.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                    ],
                }),
                (0, x.jsxs)("g", {
                    filter: s ? void 0 : "url(#filter0_d_1282_11577)",
                    transform: "translate(50, 50) scale(.8) translate(-44, -30)",
                    children: [
                        (0, x.jsx)("path", {
                            d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                            fill: s ? "url(#paint2_linear_1986_8686)" : "url(#paint0_linear_1282_11577)",
                        }),
                        (0, x.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                            fill: s ? "url(#paint1_linear_1986_8686)" : "url(#paint1_linear_1282_11577)",
                        }),
                        (0, x.jsx)("path", {
                            d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                            fill: s ? "url(#paint0_linear_1986_8686)" : "url(#paint2_linear_1282_11577)",
                        }),
                    ],
                }),
                (0, x.jsx)("g", {
                    width: "65",
                    transform: "translate(50, 50) scale(0.81) translate(-26, -42)",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, x.jsx)("path", {
                        d: "M12.6686 60.7298L10.9101 55.7911C10.8254 55.5372 10.6626 55.3163 10.4448 55.1597C10.227 55.0032 9.96524 54.9189 9.69671 54.9189C9.42818 54.9189 9.16646 55.0032 8.94866 55.1597C8.73086 55.3163 8.56804 55.5372 8.48326 55.7911L6.85565 60.7298C6.7922 60.9105 6.6887 61.0747 6.55284 61.2101C6.41699 61.3455 6.25226 61.4487 6.07091 61.5119L1.04275 63.1485C0.793091 63.2361 0.576874 63.3988 0.423928 63.6141C0.270981 63.8294 0.188843 64.0868 0.188843 64.3506C0.188843 64.6144 0.270981 64.8717 0.423928 65.087C0.576874 65.3023 0.793091 65.465 1.04275 65.5527L5.94012 67.2616C6.12147 67.3249 6.2862 67.428 6.42205 67.5634C6.55791 67.6988 6.66141 67.863 6.72486 68.0437L8.42513 72.91C8.50991 73.1639 8.67273 73.3848 8.89053 73.5414C9.10833 73.6979 9.37005 73.7822 9.63858 73.7822C9.90711 73.7822 10.1688 73.6979 10.3866 73.5414C10.6044 73.3848 10.7672 73.1639 10.852 72.91L12.6686 68.0437C12.732 67.863 12.8355 67.6988 12.9714 67.5634C13.1072 67.428 13.2719 67.3249 13.4533 67.2616L18.3507 65.5527C18.6003 65.465 18.8165 65.3023 18.9695 65.087C19.1224 64.8717 19.2046 64.6144 19.2046 64.3506C19.2046 64.0868 19.1224 63.8294 18.9695 63.6141C18.8165 63.3988 18.6003 63.2361 18.3507 63.1485L13.3952 61.4395C13.2318 61.377 13.083 61.2818 12.958 61.1598C12.833 61.0377 12.7345 60.8914 12.6686 60.7298Z",
                        fill: "white",
                        fillOpacity: "0.8",
                    }),
                }),
            ],
        });
    };
var gU = n(387316),
    gV =
        (((d = {})[(d.NITRO_GEM = 0)] = "NITRO_GEM"),
        (d[(d.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (d[(d.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        d);
let gk = "url(#gradient)",
    gw = (e) => {
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
            [d, c] = I.useState(l);
        I.useEffect(() => {
            let e = setTimeout(() => {
                c(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let g = (0, cD.Ay)(),
            m = (0, gc.q)(g),
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
                            return gk;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : gk;
                        default:
                            return;
                    }
                })(m, r);
        return (0, x.jsxs)("div", {
            className: gU.Ap,
            children: [
                (0, x.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: gU.fB,
                    children: [
                        (0, x.jsx)("circle", {
                            className: 0 === r || 2 === r ? gU.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: s,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: A,
                            strokeOpacity: E,
                        }),
                        (0, x.jsx)("circle", {
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
                (0, x.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, x.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, x.jsx)("stop", { offset: "0%", style: { stopColor: "#FFBDF2" } }),
                                (0, x.jsx)("stop", { offset: "100%", style: { stopColor: "#E742E1" } }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, x.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, x.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                            ],
                        }),
                        (0, x.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, x.jsx)("stop", { offset: "0%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                                (0, x.jsx)("stop", { offset: "100%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                            ],
                        }),
                    ],
                }),
                (0, x.jsx)("div", { className: gU.Vw, children: n }),
            ],
        });
    };
var gF = n(104773);
function gB(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        l = I.useMemo(() => (0, gL.A)({ legacyAssetId: t, skuId: n, size: j._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, x.jsx)("div", {
        className: gF.Q7,
        children: (0, x.jsx)("div", {
            className: gF.Nk,
            children: null != l && (0, x.jsx)("img", { className: gF.CH, alt: i, src: l }),
        }),
    });
}
let gX = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: l,
            progressCircleStrokeSize: s,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = gV.NITRO_GEM,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: A,
            circleColor: E,
            circleStroke: h,
        } = e,
        S = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion),
        T = t && !S;
    return (0, x.jsx)("div", {
        className: iA()(gF.G3, n),
        children: (0, x.jsx)(gw, {
            animationClassName: iA()(gF._0, { [gF.uJ]: T, [A ?? ""]: T }),
            progressCircleStroke: h,
            progressCircleStrokeSize: s,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case gV.NITRO_GEM:
                        return (0, x.jsx)(gG, {
                            className: T ? gF.Ow : void 0,
                            backgroundColor: iA()(gF.vH, l),
                            backgroundCircleSize: r,
                        });
                    case gV.NITRO_LOGO:
                        return (0, x.jsx)(gM, { circleColor: E, ellipseOpacity: m });
                    case gV.AVATAR_DECO:
                        if (null != c)
                            return (0, x.jsx)(gB, {
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
function gz(e) {
    let { hasSentAll: t } = e;
    return k.intl.string(k.t.USo4s7);
}
function gH(e) {
    let { helpdeskArticle: t, referralsStatuses: n } = e;
    return (function (e) {
        let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
        return t
            ? k.intl.format(k.t["TYu+MH"], { helpdeskArticle: i })
            : k.intl.format(k.t["omMr+V"], { helpdeskArticle: i });
    })({ hasSentAll: n.sent >= 3, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
}
var gY = n(14313);
function gW(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: l } = (0, gy.A)({ userId: t?.id, size: j._3.SIZE_32, animateOnHover: !0 }),
        s = null != t,
        r = s
            ? (0, x.jsx)(v.eu, { src: i, "aria-label": t.username, size: j._3.SIZE_32, ...l })
            : (0, x.jsx)(C.D, { variant: "heading-sm/semibold", className: gY.n5, children: n });
    return (0, x.jsx)(lE.m, {
        text: k.intl.string(k.t.UnKHdo),
        shouldShow: !s,
        children: (0, x.jsx)("div", { className: gY.Lg, children: r }),
    });
}
function gK(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, x.jsxs)("div", {
        className: gY.Ip,
        children: [
            (0, x.jsx)("div", { className: gY.Ej }),
            (0, x.jsx)("div", { className: iA()({ [gY.ch]: t > n, [gY.q_]: t === n }) }),
        ],
    });
}
function gZ(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        l = n < 2 ? null : t[1],
        s = n < 3 ? null : t[2];
    return (0, x.jsxs)("div", {
        className: gY.ZM,
        children: [
            (0, x.jsx)(gW, { userRecord: i, placement: 1 }),
            (0, x.jsx)(gK, { numSentReferrals: n, placement: 1 }),
            (0, x.jsx)(gW, { userRecord: l, placement: 2 }),
            (0, x.jsx)(gK, { numSentReferrals: n, placement: 2 }),
            (0, x.jsx)(gW, { userRecord: s, placement: 3 }),
        ],
    });
}
function gq(e) {
    let { analyticsLocations: t } = e;
    (tc.default.track(b.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
        (0, lI.mM)(async () => {
            let { default: e } = await Promise.all([n.e(647658), n.e(228304)]).then(n.bind(n, 581846));
            return (n) => (0, x.jsx)(e, { ...n, sourceAnalyticsLocations: t });
        }));
}
let gQ = function (e) {
    let { variant: t = "default" } = e,
        n = (0, _.bG)([gO.A], () => gO.A.getRecipientStatus()),
        { referralSentUsers: i } = (0, gD.J)(),
        l = I.useMemo(() => i.map((e) => new gv.A(e)), [i]),
        s = { redeemed: 0, converted: 0, sent: n.size };
    n.forEach((e) => {
        (e === gj.aK.REDEEMED && s.redeemed++, e === gj.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let r = 3 === s.sent,
        a = ey.A.getArticleURL(b.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: o } = (0, eH.Ay)(tw.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        u = I.useRef(null),
        d = (s.sent / 3) * 100;
    if ("settings" === t)
        return (0, x.jsx)(eH.f5, {
            value: o,
            children: (0, x.jsxs)("div", {
                className: gY.W0,
                children: [
                    (0, x.jsx)("div", {
                        className: gY.xh,
                        children: (0, x.jsx)(gR.fx, { nReferralsSent: s.sent, imageSize: 56 }),
                    }),
                    (0, x.jsxs)("div", {
                        className: gY.z1,
                        children: [
                            (0, x.jsx)(C.D, { variant: "heading-lg/semibold", children: gz({ hasSentAll: r }) }),
                            (0, x.jsx)(n8.E, {
                                variant: "body-sm/normal",
                                children: gH({ helpdeskArticle: a, referralsStatuses: s }),
                            }),
                            (0, x.jsx)(gR.ZP, { referralSentUsers: l, className: gY.D1 }),
                        ],
                    }),
                    (0, x.jsx)(O.$, {
                        variant: "expressive",
                        text: k.intl.string(r ? k.t.SY9tyI : k.t.Lm2nFc),
                        onClick: () => gq({ analyticsLocations: o }),
                    }),
                ],
            }),
        });
    let c = (0, x.jsxs)("div", {
            className: gY.hE,
            children: [
                (0, x.jsx)(gX, { percentage: d, progressCircleVariation: gV.NITRO_LOGO, iconClassName: gY.ER }),
                (0, x.jsxs)("div", {
                    className: gY.Ns,
                    children: [
                        (0, x.jsx)(C.D, {
                            variant: "heading-xl/semibold",
                            className: gY.R0,
                            children: gz({ hasSentAll: r }),
                        }),
                        (0, x.jsx)(gZ, { userRecords: l }),
                        (0, x.jsx)(n8.E, {
                            variant: "body-sm/normal",
                            children: gH({ helpdeskArticle: a, referralsStatuses: s }),
                        }),
                        (0, x.jsx)("div", {
                            className: gY.Fb,
                            children: (0, x.jsx)(gC.wL, {
                                "data-migration-pending": !0,
                                className: gY.r$,
                                color: s5.XD.CUSTOM,
                                onClick: () => gq({ analyticsLocations: o }),
                                onlyShineOnHover: !0,
                                children: (0, x.jsxs)("div", {
                                    className: gY.Zn,
                                    children: [
                                        (0, x.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: gY.QH,
                                        }),
                                        r ? k.intl.string(k.t.SY9tyI) : k.intl.string(k.t.Lm2nFc),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
        g = 3 === s.redeemed;
    return (0, x.jsx)(eH.f5, {
        value: o,
        children: (0, x.jsx)("div", {
            className: iA()(gY.kL, { [gY.AP]: g }),
            children: (0, x.jsx)("div", { ref: u, className: iA()(gY.d_, { [gY.kS]: g }), children: c }),
        }),
    });
};
var gJ = n(194509),
    g$ = n(465794),
    g0 = n(774774),
    g1 = n(156601),
    g2 = n(926239),
    g3 = n(88001),
    g4 = n(107198),
    g5 = n(487518),
    g6 = n(956537),
    g8 = n(185062);
let g7 = "to_premium_home_button",
    g9 = "premium home page";
function me(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: l } = e,
        { enabled: s } = gf.A.useConfig({ location: "PremiumManagementSettings" }),
        r = s && (0, gc.q)(l) ? "text-strong" : "text-overlay-light",
        a = t.hasActiveTrial,
        o = t.planIdFromItems === t4.gD.PREMIUM_YEAR_TIER_2,
        u = t.hasAnyPremiumGroup,
        d = (0, gm.A)(),
        c = null != t.trialEndsAt ? ih()(t.trialEndsAt).diff(ih()(), "d") : 0,
        g = t4.hd[t.planIdFromItems],
        m = ab.Ay.getDefaultPrice(g.id),
        A = ab.Ay.formatPriceString(m, g.interval);
    if (n || a) {
        let e = (0, gc.M)(l) ? g0.at.PREMIUM_TIER_2_WHITE_FILL : g0.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, x.jsxs)(x.Fragment, {
            children: [
                !a && (o || u)
                    ? (0, x.jsx)(g0.e4, { text: k.intl.string(k.t.EyjDRE), className: g5.LW, colorOptions: e })
                    : (0, x.jsxs)(x.Fragment, {
                          children: [
                              (0, x.jsx)(g0.HU, {
                                  text: a ? k.intl.string(k.t.qYKftX) : k.intl.string(k.t.EyjDRE),
                                  className: g5.uS,
                                  colorOptions: e,
                              }),
                              (0, x.jsx)("div", { className: g5.on }),
                          ],
                      }),
                (0, x.jsx)(C.D, {
                    variant: "heading-sm/medium",
                    color: r,
                    className: g5.KB,
                    children: (function () {
                        if (a) return k.intl.format(k.t["2CGBri"], { remainingTime: c, price: A });
                        if (u && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, ds.$g)(m.amount, m.currency);
                            return k.intl.format(g4.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return o
                            ? k.intl.format(k.t.z2oQtA, {
                                  percent: i?.percentage ?? 20,
                                  regularPrice: A,
                                  renewalDate: ab.Ay.getExpectedRenewalDate(t, d),
                              })
                            : k.intl.formatToPlainString(k.t["3ZiutU"], {
                                  percent: i?.percentage ?? 30,
                                  regularPrice: A,
                                  numMonths: i?.duration ?? 1,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, x.jsx)(g1.A, {
        color: r,
        variant: s ? "body-sm/medium" : void 0,
        className: s ? g5.rf : void 0,
        subscriptionTier: t4.pe.TIER_2,
        interval: g.interval,
    });
}
function mt() {
    let { enabled: e } = gf.A.useConfig({ location: "PremiumManagementSettings" }),
        t = (0, gS.k5)(),
        n = (0, gS.nf)(),
        i = (0, cD.Ay)(),
        l = e && (0, gc.q)(i),
        s = l ? "text-strong" : "text-overlay-light",
        r = (0, _.bG)([uA.A], () => uA.A.getPremiumTypeSubscription()),
        a = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
        o = a?.isPremiumWithPremiumGroup(),
        u = (0, gm.A)(),
        d = (0, gT.ds)(),
        c = null !== r && null !== r.planIdFromItems;
    if (!c && !u.isFractionalPremiumActive && !o) return null;
    let g = u.isFractionalPremiumActive,
        m = null !== r && r.hasActiveTrial,
        A = (0, x.jsx)(g2.ZP, {
            featureSet: a?.isPremiumGroupPrimary()
                ? g2.Nz.PREMIUM_GROUP_PRIMARY
                : a?.isPremiumGroupMember()
                  ? g2.Nz.PREMIUM_GROUP_MEMBER
                  : g
                    ? g2.Nz.FRACTIONAL_PREMIUM
                    : g2.Nz.DEFAULT,
            enablePremiumBrandRefresh: e,
            textVariant: e ? "body-sm/medium" : void 0,
        });
    return (0, x.jsxs)("div", {
        className: iA()(g5.$Y, { [g5.J5]: t || m, [g5.gd]: e }),
        children: [
            (0, x.jsxs)("div", {
                className: g5.jp,
                children: [
                    o
                        ? (0, x.jsx)(C.D, { variant: "nitro-md", color: s, className: g5._K, children: (0, g3.DP)() })
                        : (0, x.jsx)(gh.A, { className: g5.TJ, color: l ? "var(--text-strong)" : void 0 }),
                    o && !t
                        ? (0, x.jsx)("div", { style: { marginBottom: "6px" } })
                        : g && !d
                          ? (0, x.jsxs)(x.Fragment, {
                                children: [
                                    (0, x.jsx)(g0.e4, {
                                        text: k.intl.string(k.t.uXF4c4),
                                        className: g5.LW,
                                        colorOptions: g0.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, x.jsx)(C.D, {
                                        variant: "heading-sm/medium",
                                        color: s,
                                        className: g5.sQ,
                                        children: k.intl.format(k.t.sK7fGl, {
                                            helpCenterLink: ey.A.getArticleURL(b.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : c
                            ? (0, x.jsx)(me, {
                                  premiumSubscription: r,
                                  isDiscountApplied: t,
                                  activeDiscountInfo: n,
                                  theme: i,
                              })
                            : d
                              ? (0, x.jsxs)(x.Fragment, {
                                    children: [
                                        (0, x.jsx)(g0.HU, {
                                            text: k.intl.string(k.t.qYKftX),
                                            className: g5.uS,
                                            colorOptions: (0, gc.M)(i)
                                                ? g0.at.PREMIUM_TIER_2_WHITE_FILL
                                                : g0.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, x.jsx)(C.D, {
                                            variant: "heading-sm/medium",
                                            color: s,
                                            className: g5.KB,
                                            children: k.intl.format(k.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    e ? (0, x.jsx)(Q.B, { direction: "vertical", gap: 12, className: g5.bY, children: A }) : A,
                    g && !c
                        ? (0, x.jsxs)(s8.e, {
                              fullWidth: !e,
                              direction: e ? "horizontal" : "vertical",
                              padding: { top: e ? 32 : 16 },
                              children: [
                                  (0, x.jsx)(g$.A, {
                                      defaultTextOverride: d ? k.intl.string(k.t.YScQSF) : k.intl.string(k.t["0b3YRn"]),
                                  }),
                                  (0, x.jsx)(O.$, {
                                      onClick: () => {
                                          (tc.default.track(b.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: g7,
                                              target: g9,
                                          }),
                                              (0, tY.default)(),
                                              (0, cu.pX)(b.BVt.APPLICATION_STORE));
                                      },
                                      variant: e ? "secondary" : "overlay-secondary",
                                      fullWidth: !e,
                                      size: "md",
                                      text: d ? k.intl.string(k.t.VR2iVB) : k.intl.string(k.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, x.jsxs)(s8.e, {
                              fullWidth: !e,
                              direction: e ? "horizontal" : "vertical",
                              padding: { top: e ? 32 : 16 },
                              children: [
                                  (0, x.jsx)(O.$, {
                                      variant: l ? "primary" : "overlay-primary",
                                      fullWidth: !e,
                                      onClick: () => {
                                          (tc.default.track(b.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: g7,
                                              target: g9,
                                          }),
                                              (0, tY.default)(),
                                              (0, cu.pX)(b.BVt.APPLICATION_STORE));
                                      },
                                      text: k.intl.string(e ? k.t.rVjt5j : k.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, x.jsx)(O.$, {
                                      variant: e ? "secondary" : "overlay-secondary",
                                      onClick: () => {
                                          (tc.default.track(b.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, nm.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL));
                                      },
                                      text: k.intl.string(e ? k.t.FVEaqm : k.t["9uDy6C"]),
                                      fullWidth: !e,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, x.jsx)("div", {
                className: g5.ah,
                children: (0, x.jsx)("img", {
                    className: g5.ah,
                    alt: "",
                    src: e ? g8.A : "/assets/3aaa2c2d1874c196.svg",
                }),
            }),
        ],
    });
}
function mn() {
    let { enabled: e } = gf.A.useConfig({ location: "PremiumManagementSettings" });
    function t() {
        tc.default.track(b.HAw.PREMIUM_SETTINGS_INTERACTED, { cta_type: "gifting_button", target: "payment modal" });
    }
    return e
        ? (0, x.jsx)(gx.A, {
              variant: "settings",
              location: tw.A.PREMIUM_SETTINGS,
              analyticsLocation: {},
              onGiftClick: t,
          })
        : (0, x.jsxs)("div", {
              className: g5.T1,
              children: [
                  (0, x.jsx)("img", { className: g5.GY, alt: "", src: g6 }),
                  (0, x.jsxs)("div", {
                      className: g5.b4,
                      children: [
                          (0, x.jsx)(C.D, {
                              className: g5.Vz,
                              variant: "heading-xl/semibold",
                              children: k.intl.string(k.t["3KomGa"]),
                          }),
                          (0, x.jsx)(n8.E, {
                              className: g5.Oi,
                              variant: "body-sm/normal",
                              children: k.intl.string(k.t.yQ06u1),
                          }),
                          (0, x.jsx)(gJ.A, {
                              className: iA()(g5.Tp, g5._c),
                              textOptions: { textOverride: k.intl.string(k.t.Ve9Ge6), textClassName: g5.VV },
                              color: s5.$n.Colors.CUSTOM,
                              onClick: t,
                          }),
                      ],
                  }),
              ],
          });
}
function mi(e) {
    let { premiumSubscription: t, giftPromotion: n, showReferral: i } = e,
        { enabled: l } = gf.A.useConfig({ location: "PremiumManagementSettings" }),
        { analyticsLocations: s } = (0, eH.Ay)(),
        r = I.useRef(null),
        [a, o] = I.useState(!1),
        u = !!t?.hasActiveTrial;
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsxs)(Q.B, {
                direction: "vertical",
                gap: l ? 24 : 40,
                className: l ? g5.W0 : void 0,
                children: [
                    n,
                    (0, x.jsx)(mt, {}),
                    i && (0, x.jsx)(gQ, { variant: l ? "settings" : "default" }),
                    null == n && (0, x.jsx)(mn, {}),
                    l
                        ? (0, x.jsx)(g_.A, {
                              variant: "settings",
                              className: g5.hM,
                              headingOverride: k.intl.string(k.t.dnVvQS),
                              hidePill: !u,
                              selectedPlanTier: t4.PremiumTypes.TIER_2,
                          })
                        : (0, x.jsx)(gI.A, {
                              hideCTAs: !0,
                              headingOverride: k.intl.string(k.t.dnVvQS),
                              hidePill: !u,
                              selectedPlanColumnClassName: g5.JG,
                              selectedPlanTier: t4.PremiumTypes.TIER_2,
                          }),
                ],
            }),
            (0, x.jsx)(gd.L, {
                innerRef: r,
                onChange: (e) => {
                    e &&
                        !a &&
                        (tc.default.track(b.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: s }),
                        o(!0));
                },
                children: (0, x.jsx)("div", { ref: r, className: g5._Z }),
            }),
        ],
    });
}
let ml = function () {
        let e = (0, dX.Hp)(),
            { analyticsLocations: t } = (0, eH.Ay)(tw.A.PREMIUM_SETTINGS),
            n = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
            i = (0, _.bG)([uA.A], () => uA.A.getPremiumTypeSubscription()),
            l = (0, _.bG)([uA.A], () => uA.A.hasFetchedSubscriptions()),
            s = (0, gA.Y)(t4.T7),
            [r, a] = I.useState(!0),
            o = (0, gm.A)({ forceFetch: !0 }),
            u = (0, _.bG)([cs.A], () => {
                let e = cs.A.getMarketingComponentBySurface(gu.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return e?.surface ?? null;
            }),
            d = !(oJ.Fr || oJ.v1) && null != u;
        (0, gN.i)();
        let c = (0, gb.m)();
        if (
            (I.useEffect(() => {
                !(async function () {
                    (e || (await Promise.all([oR.hP(), oR.$o(), (0, gg.zS)(null, null, b.tF5.DISCOVERY)])), a(!1));
                })();
            }, [e]),
            e)
        )
            return (0, x.jsx)(dO.uK, {});
        let g = l && null !== i && s,
            m = o.fetched && o.isFractionalPremiumActive,
            A = n?.isPremiumWithPremiumGroup();
        return g || m || r || A
            ? null != n && (g || m || A) && !r
                ? (0, x.jsx)(eH.f5, {
                      value: t,
                      children: (0, x.jsx)(mi, {
                          premiumSubscription: i,
                          giftPromotion: d ? (0, x.jsx)(gp.m, { config: u }) : null,
                          showReferral: c,
                      }),
                  })
                : (0, x.jsx)(oX.y, {})
            : (0, x.jsx)(gE.A, { title: k.intl.string(k.t.dyq9TR), note: null });
    },
    ms = (0, S.E2)(T.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser());
            return (0, ab.YE)(e, t4.PremiumTypes.TIER_2) ? (0, x.jsx)(ml, {}) : (0, x.jsx)(go.A, {});
        },
        useSearchTerms: () => [k.intl.string(k.t.Ipxkog)],
    }),
    mr = (0, S.zZ)(T.X.NITRO_CATEGORY, { buildLayout: () => [ms] }),
    ma = (0, S.t_)(T.X.NITRO_PANEL, {
        useTitle: () => k.intl.string(k.t.Ipxkog),
        useObscuredNotice: op.L,
        buildLayout: () => [mr],
    }),
    mo = (0, S.i4)(T.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.Ipxkog),
        icon: ag.NitroWheelIcon,
        usePersistentBadge: function (e) {
            let t = (0, ga.e)(e);
            return I.useMemo(() => ({ badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [ma],
    });
var mu = n(104510),
    md = n(559201),
    mc = n(859241),
    mg = n(527113),
    mm = n(338548),
    mA = n(504047),
    mE = n(711014),
    mh = n(178368),
    mS = n(809545),
    mT = n(168482);
function mf() {
    return (0, x.jsxs)("div", {
        className: mS.iE,
        children: [
            (0, x.jsx)("img", { className: mS.Kk, alt: "", src: mT }),
            (0, x.jsxs)("div", {
                className: mS.pq,
                children: [
                    (0, x.jsx)(n8.E, { variant: "body-lg/semibold", children: k.intl.string(k.t.ZHNSYf) }),
                    (0, x.jsx)(n8.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: k.intl.string(k.t.kCj5ps),
                    }),
                ],
            }),
            (0, x.jsx)(O.$, {
                variant: "secondary",
                text: k.intl.string(k.t.JFlifp),
                onClick: function () {
                    ((0, cu.pX)(b.BVt.GUILD_DISCOVERY), (0, tY.default)());
                },
            }),
        ],
    });
}
var mp = n(365199),
    mx = n(233824),
    mI = n(443865),
    m_ = n(165862),
    mb = n(473145);
function mN(e) {
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
                label: null != t.premiumGuildSubscription ? k.intl.string(k.t["PR0n//"]) : k.intl.string(k.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? k.intl.string(k.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: k.intl.string(k.t.twFU3R), subtext: l ? null : k.intl.string(k.t.oQ9lOh), disabled: !l },
            uncancel: { label: k.intl.string(k.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (s.status) {
        case b.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = k.intl.string(k.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case b.Dmq.PAUSE_PENDING:
        case b.Dmq.PAUSED:
            a === t4.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = k.intl.string(k.t.LiLRRT)),
                (o.cancel.subtext = k.intl.string(k.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = I.useMemo(
        () =>
            s.isPausedOrPausePending && a === t4.xc.NONE
                ? (0, x.jsx)(tl.Dr, {
                      id: "manage-subscription",
                      label: k.intl.string(k.t.obRG6Y),
                      action: () => (0, nm.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: mI.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: mI.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, x.jsxs)(m_.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": k.intl.string(k.t.ogxXGq),
        onClose: i,
        children: [
            (0, x.jsx)(tl.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, lI.mM)(async () => {
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
                            (0, x.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: b.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, mb.I5)(t)
                ? (0, x.jsx)(tl.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, lI.mM)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, x.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, x.jsx)(tl.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, lI.mM)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, x.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var mC = n(545934),
    my = n(682163),
    mv = n(987144),
    mj = n(864310),
    mO = n(290413);
function mD(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, mj.A)(t.id);
    return (0, x.jsxs)("div", {
        className: n ?? mO.OA,
        children: [
            (0, x.jsx)(my.Ay, { className: mO.$f, guild: t, size: my.Ay.Sizes.MEDIUM }),
            (0, x.jsxs)("div", {
                className: mO.gI,
                children: [
                    (0, x.jsx)(n8.E, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, x.jsxs)("div", {
                        className: mO.ew,
                        children: [
                            (0, x.jsxs)("div", {
                                className: mO.QW,
                                children: [
                                    (0, x.jsx)(mu.BoostGemIcon, {
                                        className: mO.Wz,
                                        color: n4.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, x.jsx)(n8.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: k.intl.format(k.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== b.TVA.NONE &&
                                (0, x.jsxs)(x.Fragment, {
                                    children: [
                                        (0, x.jsx)("div", { className: mO.zk }),
                                        (0, x.jsx)(n8.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, mb.gb)(t.premiumTier, { useLevels: !1 }),
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
function mR(e) {
    let { guildId: t } = e,
        n = (0, _.bG)([lD.A], () => lD.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, x.jsxs)("div", {
              className: mO.Nr,
              children: [
                  (0, x.jsx)(mD, { guild: n }),
                  (0, x.jsx)(O.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: mu.BoostGemIcon,
                      text: k.intl.string(k.t.aBHecF),
                      onClick: () => {
                          (0, mv.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: b.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: b.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: b.ZSU.BUTTON_CTA,
                                  objectType: b.btD.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var mL = n(747381);
let mP =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mG(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = I.useRef(null),
        a = (0, mb.I5)(t),
        o = I.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, gm.A)(),
        c = I.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === b.TVA.NONE) return "";
                    let n = [
                        k.intl.formatToPlainString(k.t["dLlKX/"], { numEmojiSlots: t4.TG[e].limits.emoji }),
                        k.intl.formatToPlainString(k.t["+ANIfv"], { numStickerSlots: t4.TG[e].limits.stickers }),
                        k.intl.formatToPlainString(k.t["4gt60b"], {
                            numSoundboardSlots: t4.TG[e].limits.soundboardSounds,
                        }),
                        k.intl.formatToPlainString(k.t.XahSjZ, {
                            resolution: t4.TG[e].limits.screenShareQualityResolution,
                            framerate: t4.TG[e].limits.screenShareQualityFramerate,
                        }),
                        k.intl.formatToPlainString(k.t.NbNs7S, { bitrate: t4.TG[e].limits.bitrate / 1e3 }),
                        k.intl.formatToPlainString(k.t.VVKcpn, { filesize: t4.TG[e].limits.fileSize / 1024 / 1024 }),
                        k.intl.formatToPlainString(k.t.TbpCvv, { numVideoStageSeats: t4.TG[e].limits.stageVideoUsers }),
                        k.intl.string(k.t.LDyX3i),
                        k.intl.string(k.t.YtGlPW),
                    ];
                    (e >= b.TVA.TIER_2 && (n.push(k.intl.string(k.t.SztbtN)), n.push(k.intl.string(k.t["3GK91n"]))),
                        e >= b.TVA.TIER_3 && n.push(k.intl.string(k.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return k.intl.formatToPlainString(k.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        g = I.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? ok.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return k.intl.formatToPlainString(k.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = I.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        A = null != m && !(u && null != o && o < m);
    return (0, x.jsxs)("div", {
        className: iA()(mL.iq, { [mL.Mt]: s }),
        children: [
            (0, x.jsxs)("div", {
                className: mL.kd,
                children: [
                    (0, x.jsx)("img", { alt: "", className: mL.bB, src: mP }),
                    A
                        ? (0, x.jsx)(n8.E, {
                              variant: "body-sm/medium",
                              color: "text-subtle",
                              children: k.intl.format(k.t.Z4ULRD, { date: m }),
                          })
                        : (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(n8.E, { variant: "body-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, x.jsxs)(x.Fragment, {
                                          children: [
                                              (0, x.jsx)("div", { className: mL.zk }),
                                              (0, x.jsx)(n8.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: k.intl.formatToPlainString(k.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != i.trialEndsAt &&
                                      (0, x.jsxs)(x.Fragment, {
                                          children: [
                                              (0, x.jsx)("div", { className: mL.zk }),
                                              (0, x.jsx)(n8.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: k.intl.formatToPlainString(k.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, x.jsx)(ap.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, x.jsx)(mN, {
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
                    (0, x.jsx)(n7.D, {
                        innerRef: r,
                        "aria-label": k.intl.string(k.t.PdRCRg),
                        className: mL.Mj,
                        ...e,
                        children: (0, x.jsx)(mp.MoreHorizontalIcon, {
                            size: "xs",
                            color: n4.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function mM(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, _.bG)([lD.A], () => lD.A.getGuild(t), [t]);
    return (0, x.jsxs)("div", {
        className: mL.Nr,
        children: [
            (0, x.jsx)("div", {
                className: mL.MY,
                children:
                    null != s
                        ? (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(mD, { guild: s, className: mL.OA }),
                                  (0, x.jsx)(O.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: k.intl.string(k.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tY.default)(),
                                              (0, mx.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: b.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, x.jsx)("div", {
                              className: mL.OA,
                              children: (0, x.jsx)(C.D, {
                                  variant: "heading-sm/semibold",
                                  color: "text-default",
                                  children: k.intl.string(k.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, x.jsx)(
                    mG,
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
function mU(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = I.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                mC.A.createFromServer(
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
                if ((!(0, mb.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in s || (s[e] = []), s[e].push(i));
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > ab.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, x.jsx)("div", {
        className: mL.kR,
        children: ok.default
            .keys(s)
            .map((e) => (0, x.jsx)(mM, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var mV = n(502572),
    mk = n(983511),
    mw = n(342744),
    mF = n(496431);
let mB = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, mF.A)(n);
    return (0, x.jsx)(n8.E, {
        className: t,
        variant: "body-sm/medium",
        color: "text-muted",
        children: (0, iS.uN)(i, { days: k.t.WUTPDc, hours: k.t.c1qodV, minutes: k.t["2+A3dv"] }),
    });
};
var mX = n(731536);
function mz(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, _.bG)([uA.A], () => uA.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = I.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, mb.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? ab.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === t4.xc.NONE;
    return 0 === s.length
        ? null
        : (0, x.jsxs)("div", {
              className: mX.Nr,
              children: [
                  (0, x.jsxs)("div", {
                      className: mX.MY,
                      children: [
                          (0, x.jsxs)("div", {
                              className: mX._L,
                              children: [
                                  (0, x.jsxs)("div", {
                                      className: mX.MD,
                                      children: [
                                          (0, x.jsx)("img", { alt: "", className: mX.F8, src: mP }),
                                          (0, x.jsx)("div", {
                                              className: iA()(mX.qS, "theme-dark"),
                                              children: (0, x.jsx)("span", { className: mX.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, x.jsxs)("div", {
                                      className: mX.Qp,
                                      children: [
                                          (0, x.jsx)(n8.E, {
                                              variant: "heading-sm/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: k.intl.format(k.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, x.jsx)(n8.E, {
                                              variant: "body-xs/semibold",
                                              color: "text-subtle",
                                              children: k.intl.format(k.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, x.jsx)(mV.A, {
                              shouldShow: o,
                              text: k.intl.string(k.t.mOWsF1),
                              "aria-label": k.intl.string(k.t.mOWsF1),
                              children: (e) =>
                                  (0, x.jsx)(O.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: mu.BoostGemIcon,
                                      text: k.intl.string(k.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, lI.mM)(async () => {
                                              let { default: e } = await Promise.all([n.e(378357), n.e(418710)]).then(
                                                  n.bind(n, 770101),
                                              );
                                              return (t) =>
                                                  (0, x.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, mv.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: b.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: b.JJy.SETTINGS_PREMIUM,
                                                                      object: b.ZSU.BUTTON_CTA,
                                                                      objectType: b.btD.BUY,
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
                      (0, x.jsx)(
                          mH,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, mb.I5)(e),
                              isCanceled: (0, mb.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mH(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = I.useRef(null),
        u = I.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = s ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, x.jsx)(mB, { cooldown: u.getTime() })
            : null != d
              ? (0, x.jsx)(n8.E, {
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: k.intl.format(k.t.Z4ULRD, { date: d }),
                })
              : (0, x.jsx)(n8.E, {
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: k.intl.string(k.t["2mcafz"]),
                });
    let c = l || s;
    return (0, x.jsxs)("div", {
        className: iA()(mX.iq, { [mX.Mt]: i }),
        children: [
            (0, x.jsxs)("div", {
                className: mX.kd,
                children: [(0, x.jsx)("img", { alt: "", className: mX.bB, src: mP }), t],
            }),
            c &&
                (0, x.jsx)(ap.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, x.jsxs)(m_.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": k.intl.string(k.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                l &&
                                    (0, x.jsx)(tl.Dr, {
                                        id: "cancel-boost",
                                        label: k.intl.string(k.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? k.intl.string(k.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, lI.mM)(
                                                    async () => (e) =>
                                                        (0, x.jsx)(mk.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                s &&
                                    (0, x.jsx)(tl.Dr, {
                                        id: "uncancel-boost",
                                        label: k.intl.string(k.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? k.intl.string(k.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, lI.mM)(
                                                    async () => (e) =>
                                                        (0, x.jsx)(mw.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, x.jsx)(n7.D, {
                            innerRef: o,
                            "aria-label": k.intl.string(k.t["UKOtz+"]),
                            className: mX.Mj,
                            ...e,
                            children: (0, x.jsx)(mp.MoreHorizontalIcon, {
                                size: "xs",
                                color: n4.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var mY = n(834612);
function mW(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = ey.A.getArticleURL(b.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && s !== t4.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, x.jsxs)("div", {
              className: mY.i,
              children: [
                  (0, x.jsxs)("div", {
                      className: mY.b,
                      children: [
                          (0, x.jsx)(C.D, { variant: "heading-sm/semibold", children: k.intl.string(k.t.W5rDjW) }),
                          (0, x.jsx)(n8.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: k.intl.format(k.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, x.jsx)(mU, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, x.jsx)(mz, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var mK = n(414184),
    mZ = n(9146);
function mq() {
    return (0, x.jsxs)("div", {
        className: mZ.iE,
        children: [
            (0, x.jsx)(C.D, { variant: "heading-xl/medium", children: k.intl.string(k.t.IzKs3o) }),
            (0, x.jsx)("div", {
                className: mZ.kR,
                children: mK.s.map((e, t) => {
                    let n = e.icon;
                    return (0, x.jsxs)(
                        "div",
                        {
                            className: mZ.Nr,
                            children: [
                                (0, x.jsx)(n, { className: mZ.Kk }),
                                (0, x.jsx)(n8.E, {
                                    className: mZ.h_,
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
var mQ = n(847374),
    mJ = n(232122),
    m$ = n(665984);
function m0() {
    let [e, t] = I.useState(null),
        [n, i] = I.useState(null);
    return (0, x.jsxs)("div", {
        className: m$.iE,
        children: [
            (0, x.jsx)(C.D, { variant: "heading-xl/medium", children: k.intl.string(k.t.HPJ6Nj) }),
            (0, x.jsx)("ul", {
                className: m$.p_,
                children: mJ.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, x.jsxs)(
                        n7.D,
                        {
                            tag: "li",
                            className: iA()(m$.Aw, { [m$.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, x.jsxs)("div", {
                                    className: m$.k7,
                                    children: [
                                        (0, x.jsx)(n8.E, {
                                            className: m$.b1,
                                            color: o,
                                            variant: "heading-sm/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, x.jsx)(mQ.ChevronSmallDownIcon, {
                                            size: "sm",
                                            color: n4.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: m$.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, x.jsx)(n8.E, {
                                        className: m$.ZF,
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
var m1 = n(182859),
    m2 = n(586428),
    m3 = n(416763);
function m4() {
    let e = ey.A.getArticleURL(b.MVz.GUILD_SUBSCRIPTIONS);
    return (0, x.jsxs)("div", {
        className: m3.wx,
        children: [
            (0, x.jsxs)("div", {
                className: m3.Qs,
                children: [
                    (0, x.jsxs)("div", {
                        className: m3.B5,
                        children: [
                            (0, x.jsx)("img", { alt: "", className: m3.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, x.jsx)(C.D, {
                                variant: "heading-xl/medium",
                                children: k.intl.string(m2.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, x.jsx)(n8.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: k.intl.format(k.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, x.jsx)(m1.A, {
                variant: "member",
                className: m3.iO,
                analyticsLocation: {
                    page: b.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: b.JJy.HERO,
                    object: b.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var m5 = n(315629),
    m6 = n(87719),
    m8 = n(961085);
function m7() {
    let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser());
    if (null == e || ab.Ay.hasFreeBoosts(e)) return null;
    let t = ey.A.getArticleURL(b.MVz.GUILD_BOOSTING_FAQ);
    return (0, x.jsxs)(m5.h, {
        color: "nitro-pink",
        className: m8.vK,
        children: [
            (0, x.jsxs)("div", {
                className: m8.nw,
                children: [
                    (0, x.jsx)("img", { alt: "", className: m8.q3, src: mP }),
                    (0, x.jsxs)("div", {
                        className: m8.Tm,
                        children: [
                            (0, x.jsx)(n8.E, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                children: k.intl.format(k.t.Idh1Vs, { count: 2, boostCount: 2 }),
                            }),
                            (0, x.jsxs)("div", {
                                className: m8.xv,
                                children: [
                                    (0, x.jsx)(ag.NitroWheelIcon, { className: m8.nE }),
                                    (0, x.jsx)(n8.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: k.intl.format(k.t["6UAu+f"], {
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
            (0, x.jsx)(O.$, {
                variant: "expressive",
                size: "sm",
                icon: ag.NitroWheelIcon,
                text: k.intl.string(k.t["8x0jKT"]),
                onClick: m6.e,
            }),
        ],
    });
}
var m9 = n(532991);
function Ae() {
    let e = (0, _.bG)([mA.A], () => mA.A.affinities),
        t = (0, _.bG)([mE.Ay], () => mE.Ay.getFlattenedGuildIds()),
        n = I.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, x.jsxs)("div", {
              className: m9.i,
              children: [
                  (0, x.jsx)(C.D, { variant: "heading-sm/semibold", children: k.intl.string(k.t.r90Wgo) }),
                  (0, x.jsx)("div", { className: m9.k, children: n.map((e) => (0, x.jsx)(mR, { guildId: e }, e)) }),
              ],
          });
}
var At = n(967246);
function An(e) {
    let { count: t } = e,
        i = ey.A.getArticleURL(b.MVz.GUILD_BOOSTING_FAQ);
    return (0, x.jsxs)(m5.h, {
        color: "nitro-pink",
        className: At.vK,
        children: [
            (0, x.jsxs)("div", {
                className: At.nw,
                children: [
                    (0, x.jsxs)("div", {
                        className: At.MD,
                        children: [
                            (0, x.jsx)("img", { alt: "", className: At.F8, src: mP }),
                            (0, x.jsx)("div", {
                                className: iA()(At.qS, "theme-dark"),
                                children: (0, x.jsx)("span", { className: At.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, x.jsxs)("div", {
                        className: At.Tm,
                        children: [
                            (0, x.jsx)(n8.E, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                tag: "span",
                                children: k.intl.format(k.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, x.jsxs)("div", {
                                className: At.xv,
                                children: [
                                    (0, x.jsx)(ag.NitroWheelIcon, { className: At.nE }),
                                    (0, x.jsx)(n8.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: k.intl.format(k.t["6UAu+f"], {
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
            (0, x.jsx)(O.$, {
                variant: "primary",
                size: "sm",
                icon: mu.BoostGemIcon,
                text: k.intl.string(k.t.BMx1iy),
                onClick: () => {
                    (0, lI.mM)(async () => {
                        let { default: e } = await Promise.all([n.e(378357), n.e(418710)]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, x.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, mv.g)({
                                            analyticsLocations: [],
                                            analyticsLocation: {
                                                page: b.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                section: b.JJy.SETTINGS_PREMIUM,
                                                object: b.ZSU.BUTTON_CTA,
                                                objectType: b.btD.BUY,
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
var Ai = n(89150);
function Al(e) {
    let { premiumSubscription: t } = e,
        n = (0, _.bG)([mh.A], () => mh.A.boostSlots),
        i = I.useMemo(() => Object.values(n), [n]),
        l = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
        s = (0, _.bG)([mA.A], () => mA.A.affinities),
        r = (0, _.bG)([mE.Ay], () => mE.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = (0, _.bG)([mc.A], () => mc.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, gm.A)({ forceFetch: !0 }),
        d = l?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === t4.xc.NONE,
        g = I.useMemo(() => {
            if (null == t || c) return 0;
            let e = ab.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, x.jsxs)("div", {
        className: Ai.GO,
        children: [
            (0, x.jsx)(dO.kb, { className: Ai.ek }),
            (0, x.jsx)(m4, {}),
            (0, x.jsx)(m7, {}),
            g > 0 && (0, x.jsx)(An, { count: g }),
            d && (0, x.jsx)(mm.A, {}),
            !a && (0, x.jsx)(mf, {}),
            (0, x.jsxs)("div", {
                className: Ai.C_,
                children: [
                    (0, x.jsx)(mW, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, x.jsx)(Ae, {}),
                    (0, x.jsx)(mg.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, x.jsx)(mq, {}),
                    (0, x.jsx)(m0, {}),
                ],
            }),
        ],
    });
}
var As = n(819677);
let Ar = (0, S.E2)(T.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            I.useEffect(() => {
                (oR.hP(), oR.$o(), (0, md.CD)(), (0, gg.zS)(null, null, b.tF5.DISCOVERY), (0, md.tO)(!0));
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, _.cf)([uA.A], () => ({
                    hasFetchedSubscriptions: uA.A.hasFetchedSubscriptions(),
                    premiumSubscription: uA.A.getPremiumTypeSubscription(),
                })),
                n = (0, gA.Y)(),
                i = (0, _.bG)([oG.A], () => oG.A.hasFetchedPaymentSources),
                l = (0, _.bG)([mc.A], () => mc.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = I.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, x.jsx)("div", { className: iA()(As.kL, As.Lq), children: (0, x.jsx)(oX.y, {}) })
                : (0, x.jsxs)("div", {
                      className: As.kL,
                      children: [
                          (0, x.jsx)("div", { className: As.Tp }),
                          (0, x.jsx)("div", { className: As.Qs, children: (0, x.jsx)(Al, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [k.intl.string(k.t["+CbP2v"]), k.intl.string(k.t.Nn1lJy)],
    }),
    Aa = (0, S.zZ)(T.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [Ar] }),
    Ao = (0, S.t_)(T.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => k.intl.string(k.t["+CbP2v"]),
        buildLayout: () => [Aa],
    }),
    Au = (0, S.i4)(T.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t["+CbP2v"]),
        icon: mu.BoostGemIcon,
        buildLayout: () => [Ao],
    });
var Ad = n(153659),
    Ac = n(155984),
    Ag = n(357758),
    Am = n(262077),
    AA = n(281445),
    AE = n(624479),
    Ah = n(626584),
    AS = n(263775);
let AT = (0, oM.mj)({
    name: "2026-10-gsh-change-payment-method",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var Af = n(196736),
    Ap = n(685743),
    Ax = n(349085),
    AI = n(342942),
    A_ = n(376205),
    Ab = n(269249),
    AN = n(758836),
    AC = n(49999),
    Ay = n(105518),
    Av = n(439050);
let Aj = new Ah.A("GameServerSubscriptionsSection");
function AO(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function AD(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let AR = (e) => {
        let { subscriptionId: t, skuId: i } = e,
            { analyticsLocations: l } = (0, eH.Ay)(),
            s = (function (e) {
                let { location: t } = e;
                return AT.useConfig({ location: t }).enabled;
            })({ location: "user_settings_subscriptions" }),
            r = I.useCallback(() => {
                var e;
                ((e = { subscriptionId: t, skuId: i, analyticsLocations: l }),
                    (0, lI.mM)(async () => {
                        let { default: t } = await n.e(498934).then(n.bind(n, 592149));
                        return (n) => (0, x.jsx)(t, { ...n, ...e });
                    }));
            }, [t, i, l]);
        return s
            ? (0, x.jsx)(O.$, { variant: "secondary", size: "sm", text: k.intl.string(k.t.SgX7Ra), onClick: r })
            : null;
    },
    AL = I.memo(function (e) {
        let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
            { analyticsLocations: l } = (0, eH.Ay)(),
            s = t.instance.subscriptionId,
            r = t.instance.planId,
            a = (0, Ax.A)(t.gameId, "cover") ?? t.coverUrl,
            [o, u] = (0, AS.kn)([eh.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
            d = o !== eh.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
            c = oL.default.getId() ?? "0",
            { handleCopyServerIp: g, animateCopyIcon: m } = (0, Ap.A)(c, t.id, tw.A.GAME_SERVER_PAGE, t.serverIp),
            A = I.useCallback(() => {
                (0, AI.A)({
                    provider: AA.X.SHOCKBYTE,
                    onAccept: () => {
                        (u(AC.i.TAKE_ACTION), g());
                    },
                });
            }, [u, g]),
            {
                hasSubscription: E,
                priceLabel: h,
                dateLabel: S,
                isCanceled: T,
                isDanger: f,
            } = (0, _.bG)(
                [uA.A, c_.A],
                () => {
                    let e = null != s ? uA.A.getSubscriptionById(s) : null;
                    if (null == e)
                        return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                    let t = null != e.canceledAt,
                        l = !t && null != e.renewalMutations,
                        r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                        a = null != r ? c_.A.get(r) : null,
                        o = null != a ? n.get(a.skuId) : null,
                        u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                        d =
                            null != u && o?.priceCurrency != null
                                ? k.intl.formatToPlainString(k.t.AbOLNu, { price: (0, ds.$g)(u, o.priceCurrency) })
                                : null,
                        c = AO(e.currentPeriodEnd);
                    return {
                        hasSubscription: !0,
                        priceLabel: d,
                        dateLabel: t
                            ? k.intl.formatToPlainString(Ay.default["3aEgK6"], { date: c })
                            : l
                              ? k.intl.formatToPlainString(Ay.default.KFSA3M, { date: c })
                              : k.intl.formatToPlainString(Ay.default["9A6cRW"], { date: c }),
                        isCanceled: t,
                        isDanger: t || l,
                    };
                },
                [s, n, i],
                AD,
            ),
            p = I.useCallback(() => {
                if (null == s) return;
                let e = uA.A.getSubscriptionById(s),
                    t = null != e ? AO(e.currentPeriodEnd) : "";
                (0, n5.A)({
                    title: k.intl.string(Ay.default.TEYPNR),
                    subtitle: k.intl.formatToPlainString(Ay.default.XR1WrB, { date: t }),
                    confirmText: k.intl.string(k.t["cY+Oob"]),
                    cancelText: k.intl.string(Ay.default.zjfaGH),
                    variant: "critical",
                    onConfirm: async () => {
                        try {
                            (await oR.M2(s, l), await oR.hP());
                        } catch (e) {
                            Aj.error("Failed to cancel game server subscription", e);
                        }
                    },
                });
            }, [s, l]),
            N = I.useCallback(() => {
                if (null == s) return;
                let e = uA.A.getSubscriptionById(s);
                if (null == e) return;
                let t = e.items[0]?.planId,
                    a = null != t ? c_.A.get(t) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d = null != u && o?.priceCurrency != null ? (0, ds.$g)(u, o.priceCurrency) : "",
                    c = AO(e.currentPeriodEnd);
                (0, n5.A)({
                    title: k.intl.string(Ay.default.o96qbc),
                    subtitle: k.intl.formatToPlainString(Ay.default["7n6Qq+"], { price: d, date: c }),
                    confirmText: k.intl.string(k.t.iIvF2z),
                    cancelText: k.intl.string(k.t["ETE/oC"]),
                    variant: "primary",
                    onConfirm: async () => {
                        try {
                            await (0, gg.ur)(r);
                            let t = e.items;
                            (await oR.nV(
                                e,
                                { status: b.Dmq.ACTIVE, items: t, currency: e.currency },
                                { amount: 0, currency: e.currency },
                                (0, ab.UC)(t, e.currency),
                                l,
                            ),
                                await oR.hP());
                        } catch (e) {
                            Aj.error("Failed to re-subscribe to game server subscription", e);
                        }
                    },
                });
            }, [s, r, l, n, i]),
            C = "" !== t.serverIp && ":" !== t.serverIp;
        return (0, x.jsxs)("div", {
            className: Av.nM,
            children: [
                (0, x.jsxs)("div", {
                    className: Av.M4,
                    children: [
                        (0, x.jsxs)("div", {
                            className: Av.Vs,
                            "aria-hidden": !0,
                            children: [
                                null != a && (0, x.jsx)("img", { className: Av.uP, src: a, alt: "" }),
                                (0, x.jsx)("div", { className: Av.tw }),
                            ],
                        }),
                        (0, x.jsxs)("div", {
                            className: Av.CR,
                            children: [
                                (0, x.jsx)(n8.E, {
                                    variant: "body-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    lineClamp: 1,
                                    children: t.serverName,
                                }),
                                (0, x.jsx)(n8.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    tag: "span",
                                    lineClamp: 1,
                                    children: `${t.gameName}  \u{2022}  ${t.planName}`,
                                }),
                                C &&
                                    (d
                                        ? (0, x.jsxs)("div", {
                                              className: Av.CQ,
                                              children: [
                                                  (0, x.jsx)(n8.E, {
                                                      variant: "body-sm/medium",
                                                      color: "text-muted",
                                                      tag: "span",
                                                      lineClamp: 1,
                                                      children: t.serverIp,
                                                  }),
                                                  (0, x.jsx)(n7.D, {
                                                      className: Av.cL,
                                                      onClick: g,
                                                      "aria-label": k.intl.string(k.t.OpuAlK),
                                                      children: m
                                                          ? (0, x.jsx)(dd.CheckmarkLargeIcon, {
                                                                size: "custom",
                                                                width: 16,
                                                                height: 16,
                                                                color: "currentColor",
                                                            })
                                                          : (0, x.jsx)(AE.CopyIcon, {
                                                                size: "custom",
                                                                width: 16,
                                                                height: 16,
                                                                color: "currentColor",
                                                            }),
                                                  }),
                                              ],
                                          })
                                        : (0, x.jsx)(u3.A, {
                                              onClick: A,
                                              children: k.intl.string(Ay.default["f+F7H3"]),
                                          })),
                            ],
                        }),
                    ],
                }),
                (0, x.jsxs)("div", {
                    className: Av.Rd,
                    children: [
                        (0, x.jsxs)("div", {
                            className: Av.Ff,
                            children: [
                                null != h &&
                                    (0, x.jsx)(n8.E, {
                                        variant: "body-md/semibold",
                                        color: "text-default",
                                        tag: "span",
                                        children: h,
                                    }),
                                null != S &&
                                    (f
                                        ? (0, x.jsxs)("div", {
                                              className: Av.ez,
                                              children: [
                                                  (0, x.jsx)(i2.CircleErrorIcon, {
                                                      size: "xs",
                                                      color: "text-feedback-critical",
                                                  }),
                                                  (0, x.jsx)(n8.E, {
                                                      variant: "body-sm/medium",
                                                      color: "text-feedback-critical",
                                                      tag: "span",
                                                      children: S,
                                                  }),
                                              ],
                                          })
                                        : (0, x.jsx)(n8.E, {
                                              variant: "body-sm/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: S,
                                          })),
                            ],
                        }),
                        E && !T && null != s && (0, x.jsx)(AR, { subscriptionId: s, skuId: r }),
                        E &&
                            (T
                                ? (0, x.jsx)(O.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: k.intl.string(k.t.iIvF2z),
                                      onClick: N,
                                  })
                                : (0, x.jsx)(O.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: k.intl.string(k.t["ETE/oC"]),
                                      onClick: p,
                                  })),
                    ],
                }),
            ],
        });
    });
function AP(e) {
    let { servers: t } = e,
        n = (0, Af.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, Ab.Y)(),
        l = (0, _.bG)([sT.default], () => ab.Ay.canUseShopDiscounts(sT.default.getCurrentUser())),
        s = I.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, _.yK)([uA.A], () => (0, A_.HY)(t, i, (e) => uA.A.getSubscriptionById(e)), [t, i]);
    I.useEffect(() => {
        let e = r.filter((e) => !c_.A.isLoadedForSKU(e) && !c_.A.isFetchingForSKU(e));
        e.length > 0 && (0, gg.jv)(e).catch(() => {});
    }, [r]);
    let a = I.useCallback(() => {
        ((0, tY.default)(), (0, cu.pX)(b.BVt.COLLECTIBLES_SHOP_WITH_TAB(AN.G2.GAME_SERVERS)));
    }, []);
    return (0, x.jsxs)("div", {
        className: Av.uW,
        children: [
            (0, x.jsxs)("div", {
                className: Av.wx,
                children: [
                    (0, x.jsx)(n8.E, {
                        variant: "body-lg/medium",
                        color: "text-strong",
                        children: k.intl.string(Ay.default.vCzwM7),
                    }),
                    (0, x.jsxs)("div", {
                        className: Av.h_,
                        children: [
                            (0, x.jsx)(n8.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: k.intl.string(Ay.default.y85Eg9),
                            }),
                            n &&
                                (0, x.jsx)(u3.A, {
                                    onClick: a,
                                    children: (0, x.jsx)(n8.E, {
                                        variant: "body-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: k.intl.string(Ay.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, x.jsx)("div", {
                className: Av.p_,
                children: t.map((e) =>
                    (0, x.jsx)(AL, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var AG = n(55766),
    AM = n(696986),
    AU = n(364036);
function AV(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, x.jsxs)("div", {
        children: [
            (0, x.jsx)(C.D, { variant: "heading-sm/semibold", children: k.intl.string(k.t["KzCF/6"]) }),
            (0, x.jsx)(AM.h, { size: 4 }),
            (0, x.jsx)(n8.E, { variant: "body-md/normal", className: AU.yV, children: k.intl.string(k.t["3D7qCu"]) }),
            (0, x.jsx)(AM.h, { size: 24 }),
            (0, x.jsxs)("div", {
                className: AU.Nr,
                children: [
                    (0, x.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: AU.RI }),
                    (0, x.jsxs)("div", {
                        className: AU.FS,
                        children: [
                            (0, x.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: AU.wx,
                                children: k.intl.string(k.t["KzCF/6"]),
                            }),
                            (0, x.jsx)(n8.E, {
                                variant: "body-md/normal",
                                className: AU.h_,
                                children: k.intl.format(k.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, x.jsx)(O.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: k.intl.string(k.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var Ak = n(872351),
    Aw = n(9113),
    AF = n(599941),
    AB = n(384684),
    AX = n(2242);
let Az = [];
var AH = n(885574),
    AY = n(805251),
    AW = n(912851),
    AK = n(182744);
let AZ = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, x.jsx)(n7.D, {
        onClick: i ? void 0 : n,
        className: AK.x6,
        children: (0, x.jsxs)("div", {
            className: AK.hQ,
            children: [
                i
                    ? (0, x.jsx)(oX.y, { type: oX.y.Type.PULSING_ELLIPSIS, className: AK.__invalid_spinner })
                    : (0, x.jsx)(n8.E, { variant: "body-md/medium", className: AK.Pf, children: t }),
                (0, x.jsx)(mQ.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: AK.UE }),
            ],
        }),
    });
};
var Aq = n(465932),
    AQ = n(543767),
    AJ = n(590885),
    A$ = n(790284),
    A0 = n(636194),
    A1 = n(624456),
    A2 = n(710144),
    A3 = n(815332),
    A4 = n(31637),
    A5 = n(557506);
function A6(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: l, onClose: s } = e,
        r = (0, t1.GV)(),
        { analyticsLocations: a } = (0, eH.Ay)(tw.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = I.useState(!1),
                [i, l] = I.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return (n(!0), await oR.M2(t, e), !0);
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
        c = i.role_benefits.benefits.filter((e) => e.ref_type === AX.bN.CHANNEL),
        g = i.role_benefits.benefits.filter((e) => e.ref_type === AX.bN.INTANGIBLE),
        m = ih()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        A = k.intl.formatToPlainString(k.t.KsMRP5, {
            numChannels: c.length,
            numAdditionalBenefits: g.length,
            subscriptionEndDate: m,
        });
    return (0, x.jsx)(lx.a, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: k.intl.string(k.t.EP6EPb), variant: "secondary", onClick: s },
            {
                variant: "critical-primary",
                text: k.intl.string(k.t.F6lUDF),
                onClick: async function () {
                    (await o(l.id)) && s();
                },
                loading: d,
            },
        ],
        title: k.intl.string(k.t.O6l5tM),
        subtitle: A,
        onClose: s,
        children: (0, x.jsxs)(Q.B, {
            gap: 8,
            children: [
                null != u ? (0, x.jsx)(iQ.w, { type: "critical", message: u.message, role: "alert" }) : null,
                (0, x.jsx)(A4.x, { listingId: i.id, guildId: n.guild_id, className: A5.P }),
            ],
        }),
    });
}
var A8 = n(319225),
    A7 = n(746080),
    A9 = n(883616);
function Ee(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, x.jsxs)("div", {
        className: A9.L0,
        children: [
            (0, x.jsxs)("div", {
                className: A9.a5,
                children: [
                    (0, x.jsx)(C.D, { variant: "body-xs/semibold", className: A9.HU, children: t }),
                    i &&
                        (0, x.jsx)(lE.m, {
                            text: l,
                            children: (0, x.jsx)(AH.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: A9.Mo,
                            }),
                        }),
                ],
            }),
            (0, x.jsx)(C.D, { variant: "heading-xl/semibold", className: A9.sx, children: n }),
        ],
    });
}
function Et(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eH.Ay)(),
        [i] = (0, AQ.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tw.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [l, s] = (0, _.yK)([oG.A], () => [oG.A.hasFetchedPaymentSources, oG.A.paymentSourceFetchError]);
    return null != i && (l || s)
        ? (0, x.jsx)(AJ.A, { subscription: t, currentInvoicePreview: i })
        : (0, x.jsx)(oX.y, {});
}
function En(e) {
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
        : (0, x.jsx)(lg.D, {
              label: k.intl.string(k.t["4neDM+"]),
              children: (0, x.jsx)("div", {
                  className: A9.__invalid_rowButtons,
                  children: n
                      ? (0, x.jsx)(O.$, { variant: "primary", text: k.intl.string(k.t.y3mAE4), onClick: r, loading: i })
                      : (0, x.jsxs)(x.Fragment, {
                            children: [
                                !t && !l && (0, x.jsx)(AZ, { label: k.intl.string(k.t.FRbWR8), onClick: a }),
                                (0, x.jsx)(AZ, { label: k.intl.string(k.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let Ei = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, A1.M)(e),
                n = (0, _.bG)([A0.A], () => A0.A.getSubscriptionListingForPlan(t)),
                i = (0, _.bG)([A0.A], () =>
                    null != n ? A0.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, _.bG)([lD.A], () => lD.A.getGuild(i?.guild_id)),
                [s, r] = I.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, AF.XE)();
            I.useEffect(() => {
                s && null != l && null == A0.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = ih()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, ds.$g)(t.price, t.currency) : "",
                              l = ih()(t.createdAt).format("M/D/YY"),
                              s = t.status === b.Dmq.CANCELED,
                              r = t.status === b.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: l,
                              nextRenewalDate: n,
                              nextRenewalLabel: s ? k.intl.string(k.t.UAfot2) : k.intl.string(k.t.CVjLcM),
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
        [o, u] = I.useState(!1),
        d = (0, t1.GV)(),
        { analyticsLocations: c } = (0, eH.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: g } = (0, Aq.MH)(l?.id),
        m = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    let {
            isCancelled: A,
            isPastDue: E,
            subscriptionPrice: h,
            memberSince: S,
            nextRenewalDate: f,
            nextRenewalLabel: p,
            isTrial: N,
        } = a,
        C = n.soft_deleted || null == l || m;
    return (0, x.jsxs)("div", {
        className: A9.kL,
        children: [
            (0, x.jsx)(A2.A, {
                onClick: r,
                className: A9.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, x.jsxs)(x.Fragment, {
                        children: [
                            null != l && (0, x.jsx)(my.Ay, { guild: l, active: !0, size: my.Ay.Sizes.MEDIUM }),
                            (0, x.jsxs)("div", {
                                className: A9.if,
                                children: [
                                    (0, x.jsx)(n8.E, {
                                        variant: "body-md/medium",
                                        className: A9.J5,
                                        children: null != l ? l.name : k.intl.string(k.t["He+cmd"]),
                                    }),
                                    (0, x.jsxs)("div", {
                                        className: A9.xp,
                                        children: [
                                            (0, x.jsx)(n8.E, {
                                                variant: "body-sm/normal",
                                                className: A9.KR,
                                                children: n.name,
                                            }),
                                            A
                                                ? (0, x.jsx)(AY.E, {
                                                      type: { text: k.intl.string(k.t["7uFZGt"]) },
                                                      variant: "critical",
                                                  })
                                                : N
                                                  ? (0, x.jsx)(AY.E, {
                                                        type: { text: k.intl.string(k.t["6anton"]) },
                                                        variant: "primary",
                                                    })
                                                  : E
                                                    ? (0, x.jsx)(lE.m, {
                                                          text: k.intl.string(k.t.eSuJE2),
                                                          children: (0, x.jsx)("div", {
                                                              className: A9.qc,
                                                              children: (0, x.jsx)(AY.E, {
                                                                  type: { text: k.intl.string(k.t.NrRwIl) },
                                                                  variant: "warning",
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            m
                                                ? (0, x.jsx)(lE.m, {
                                                      text: k.intl.string(k.t.nv1IqK),
                                                      children: (0, x.jsx)("div", {
                                                          className: A9.Bi,
                                                          children: (0, x.jsx)(AY.E, {
                                                              type: { text: k.intl.string(k.t["sBl3X/"]) },
                                                              variant: "secondary",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, x.jsx)(n7.D, {
                                onClick: i(r),
                                "aria-label": k.intl.string(k.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, x.jsx)(mQ.ChevronSmallDownIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: iA()(A9.D6, { [A9.S7]: s }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && s
                ? (0, x.jsxs)("div", {
                      id: d,
                      children: [
                          (0, x.jsx)("div", { className: A9.yF }),
                          (0, x.jsx)(A3.A, { groupListingId: i.id, subscription: t, className: A9.kE }),
                          (0, x.jsxs)("div", {
                              className: A9.Zx,
                              children: [
                                  (0, x.jsx)(Ee, { label: p, value: f }),
                                  (0, x.jsx)(Ee, {
                                      label: k.intl.string(k.t.dltUMH),
                                      value: h,
                                      showInfoIcon: N,
                                      infoIconTooltipText: N ? k.intl.string(k.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, x.jsx)(Ee, { label: k.intl.string(k.t.AOcwWB), value: S }),
                              ],
                          }),
                          (0, x.jsx)(AM.h, { size: 16 }),
                          !A &&
                              !m &&
                              (0, x.jsx)(lg.D, {
                                  label: k.intl.string(k.t.wmMFvA),
                                  children: (0, x.jsx)(Et, { subscription: t }),
                              }),
                          !C &&
                              (0, x.jsx)(En, {
                                  isTrial: N,
                                  isCancelled: A,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: g,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, lI.qf)((t) => (0, x.jsx)(A6, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, cu.pX)(b.BVt.CHANNEL(l.id, A7.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tY.default)(),
                                          AW.A.show(
                                              b.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              k.intl.string(k.t.DvbaM4),
                                              () => {
                                                  (A$.A.setState({ subsection: eR.nR }),
                                                      (0, nm.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL));
                                              },
                                          ));
                                  },
                                  onResubscribeClick: async function () {
                                      try {
                                          (u(!0),
                                              await oR.QP(t, c),
                                              (0, A8.E)({
                                                  title: k.intl.string(k.t.oPV2cy),
                                                  body: k.intl.string(k.t.DdRizV),
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
var El = n(661097);
let Es = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, _.bG)([AB.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [AB.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? AX.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? AX.M_.NONE
                                  : AX.M_.IN_SUBSCRIPTION_SERVER;
                        })([AB.A]),
                    ) === AX.M_.SUBSCRIBED,
                n = (0, _.bG)([uA.A], () => uA.A.getActiveGuildSubscriptions()),
                i = I.useRef(!1);
            return (
                I.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = uA.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !uA.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oR.hP());
                }, [e, t]),
                n ?? Az
            );
        })(),
        { loading: i } = (0, AF.eb)(n);
    return ((0, Aw.A)(oJ.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, x.jsx)(oX.y, {})
        : 0 === n.length
          ? null
          : (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(O.$, {
                        text: k.intl.string(k.t.hqyhKQ),
                        icon: Ak.ArrowSmallUpIcon,
                        variant: "secondary",
                        onClick: t,
                    }),
                    (0, x.jsx)(AM.h, { size: 10 }),
                    (0, x.jsx)(n6.n, {
                        label: k.intl.string(k.t["KzCF/6"]),
                        description: k.intl.string(k.t["Y+ucR7"]),
                        children: (0, x.jsx)("div", {
                            className: El.A,
                            children: n.map((e) => (0, x.jsx)(Ei, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Er = n(327479),
    Ea = n(932012);
function Eo(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, x.jsxs)("div", {
        children: [
            (0, x.jsx)(C.D, { variant: "heading-sm/semibold", children: k.intl.string(k.t["48ywCu"]) }),
            (0, x.jsx)(AM.h, { size: 4 }),
            (0, x.jsx)(n8.E, { variant: "body-md/normal", className: Ea.yV, children: k.intl.string(k.t.VWxmSo) }),
            (0, x.jsx)(AM.h, { size: 24 }),
            (0, x.jsxs)("div", {
                className: Ea.Nr,
                children: [
                    (0, x.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: Ea._e }),
                    (0, x.jsxs)("div", {
                        className: Ea.FS,
                        children: [
                            (0, x.jsx)(C.D, {
                                variant: "heading-xl/semibold",
                                className: Ea.wx,
                                children: k.intl.string(k.t["48ywCu"]),
                            }),
                            (0, x.jsx)(n8.E, {
                                variant: "body-md/normal",
                                className: Ea.h_,
                                children: k.intl.format(k.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, x.jsx)(Er.A, { onClick: t, text: k.intl.string(k.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var Eu = n(548411),
    Ed = n(417098),
    Ec = n(143582),
    Eg = n(915043),
    Em = n(631466);
function EA(e) {
    let { className: t, header: n, headerClassName: i, children: l } = e,
        s = I.useMemo(() => {
            let e = !1;
            return (
                I.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, x.jsxs)("div", {
        className: iA()(Em.iE, t),
        children: [
            (0, x.jsx)("div", { className: iA()(Em.wx, i), children: n }),
            s && (0, x.jsx)("div", { className: Em.Qs, children: l }),
        ],
    });
}
var EE = n(885996),
    Eh = n(251843),
    ES = n(664121),
    ET = n(950305),
    Ef = n(943775),
    Ep = n(123791),
    Ex = n(900797),
    EI = n(611643);
let E_ = I.createContext({ isOpen: !1, toggleOpen: () => {} });
function Eb(e) {
    let { children: t } = e,
        [n, i] = I.useReducer((e) => !e, !1),
        l = I.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, x.jsx)(E_.Provider, { value: l, children: t(n) });
}
Eb.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = I.useContext(E_),
        s = i ? Ex.ChevronSmallUpIcon : mQ.ChevronSmallDownIcon,
        r = null != n ? n : i ? k.intl.string(k.t.fgq1gs) : k.intl.string(k.t.XJuakA);
    return (0, x.jsxs)(n7.D, {
        className: iA()(EI.L, t),
        onClick: l,
        children: [
            (0, x.jsx)(n8.E, { variant: "heading-xs/semibold", tag: "div", color: "currentColor", children: r }),
            (0, x.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var EN = n(627363),
    EC = n(328968),
    Ey = n(163437),
    Ev = n(3432);
function Ej(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var EO = n(562312),
    ED = (((c = {})[(c.LOADING = 0)] = "LOADING"), (c[(c.DONE = 1)] = "DONE"), (c[(c.ERROR = 2)] = "ERROR"), c);
function ER(e) {
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
            [c_.A, cb.A, EC.A, lD.A],
            () => {
                let e,
                    n = c_.A.get(r),
                    i = null != n ? cb.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? EC.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, Ey.PJ)(o.skuFlags),
                    d = u && null != l ? lD.A.getGuild(l) : void 0,
                    c = (0, Ey.Uo)(t, i),
                    g = u && null != l && null == d;
                if (!1 === c && null != s && s.items.length > 0) {
                    let t = s.items[0];
                    e = c_.A.get(t.planId) ?? void 0;
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
        { data: h } = (0, EN.YY)(a),
        S = I.useMemo(() => (null != h ? (0, Ef.A)(h, 100) : null), [h]),
        T = g?.deleted ?? !1,
        f = null != g && (0, Ey.Se)(g),
        p = t.status === b.Dmq.PAST_DUE,
        { analyticsLocations: N } = (0, eH.Ay)(),
        [y] = (0, AQ.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: N,
            analyticsLocation: tw.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = Ej(t.currentPeriodEnd),
        j = 0 === i;
    return (0, x.jsxs)(EA, {
        headerClassName: EO.dL,
        header:
            !1 === j
                ? (0, x.jsxs)(x.Fragment, {
                      children: [
                          (0, x.jsxs)("div", {
                              className: EO.VW,
                              children: [
                                  null != S &&
                                      (0, x.jsx)(Eh._, { src: S.href, imageClassName: EO.Z2, width: 40, height: 40 }),
                                  (0, x.jsxs)("div", {
                                      className: EO.aF,
                                      children: [
                                          (0, x.jsx)(C.D, {
                                              variant: "heading-sm/semibold",
                                              lineClamp: 1,
                                              children: h?.name ?? k.intl.string(k.t["7kqy7W"]),
                                          }),
                                          (0, x.jsx)(n8.E, {
                                              variant: "body-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? k.intl.string(k.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, x.jsx)("div", {
                              className: EO.Pz,
                              children:
                                  null != h &&
                                  null != u &&
                                  null != g &&
                                  (0, x.jsx)(EU, {
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
                : (0, x.jsx)(oX.y, { type: oX.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, x.jsx)(EM, {
                    type: "warning",
                    title: f
                        ? k.intl.formatToPlainString(k.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : k.intl.formatToPlainString(k.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && A && (0, x.jsx)(EM, { type: "warning", title: k.intl.string(k.t.SmSP8Q) }),
            p && (0, x.jsx)(EM, { type: "danger", title: k.intl.string(k.t.fvOqBo) }),
            (0, x.jsxs)("div", {
                className: EO.zH,
                children: [
                    (0, x.jsx)(EG, {
                        title: k.intl.string(k.t["5D/KEH"]),
                        content: d
                            ? (0, x.jsxs)(x.Fragment, {
                                  children: [
                                      (0, x.jsxs)("span", {
                                          className: EO.yW,
                                          children: [
                                              (0, x.jsx)(ES.ServerIcon, { size: "xs" }),
                                              k.intl.string(k.t.QjL3vn),
                                          ],
                                      }),
                                      null != c &&
                                          (0, x.jsxs)("span", {
                                              className: EO._t,
                                              children: [
                                                  (0, x.jsx)(n8.E, {
                                                      variant: "body-sm/normal",
                                                      color: "text-muted",
                                                      children: k.intl.format(k.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, x.jsx)(my.Ay, { guild: c, size: my.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, x.jsxs)("span", {
                                  className: EO.yW,
                                  children: [(0, x.jsx)(ET.UserIcon, { size: "xs" }), k.intl.string(k.t["6anEVv"])],
                              }),
                    }),
                    (0, x.jsx)(EL, { invoicePreview: y, subscriptionPlan: o }),
                    (0, x.jsx)(EG, {
                        title: k.intl.string(k.t.dnUzb6),
                        content: Ej(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, x.jsx)(EP, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: E }),
                ],
            }),
            (0, x.jsx)(Ek, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: T,
                isCancelled: m,
            }),
            null != h &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, x.jsx)(EV, { appId: h.id, listingBenefits: u.benefits }),
        ],
    });
}
function EL(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, x.jsx)(EG, { title: k.intl.string(k.t.KI7ERx), content: "" });
    let i = (0, ds.CE)((0, ds.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, x.jsx)(EG, { title: k.intl.string(k.t.KI7ERx), content: i });
    let s = (0, ds.CE)((0, ds.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, x.jsx)(EG, {
        title: k.intl.string(k.t.KI7ERx),
        content: (0, x.jsxs)(x.Fragment, {
            children: [
                (0, x.jsx)(n8.E, { variant: "body-sm/semibold", children: s }),
                s !== i &&
                    (0, x.jsx)(lE.m, {
                        text: k.intl.format(k.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, x.jsx)(n8.E, {
                            variant: "body-xs/medium",
                            color: "text-muted",
                            children: (0, x.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function EP(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, ds.CE)((0, ds.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, x.jsx)(EG, {
            title: k.intl.string(k.t.hIhAM3),
            content: (0, x.jsxs)(x.Fragment, {
                children: [
                    (0, x.jsx)(n8.E, { variant: "body-sm/medium", children: n }),
                    (0, x.jsx)(n8.E, {
                        variant: "body-sm/normal",
                        children: k.intl.format(k.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, x.jsx)(EG, { title: t ? k.intl.string(k.t.enxcAl) : k.intl.string(k.t["Ms+6Zq"]), content: n });
}
function EG(e) {
    let { title: t, content: n } = e;
    return (0, x.jsxs)("div", {
        className: EO.nM,
        children: [
            (0, x.jsx)(n8.E, { variant: "body-sm/medium", children: t }),
            (0, x.jsx)(n8.E, { variant: "body-sm/medium", className: EO.u4, children: n }),
        ],
    });
}
function EM(e) {
    let { type: t, title: n } = e;
    return (0, x.jsx)("div", {
        className: EO.Xm,
        children: (0, x.jsx)(iQ.w, { type: "warning" === t ? "warning" : "critical", message: n, role: "status" }),
    });
}
function EU(e) {
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
        c = (0, Ey.Se)(l),
        { analyticsLocations: g } = (0, eH.Ay)(),
        [m, A] = I.useState(!1),
        E = (0, Ep.C)(t.id),
        h = (0, _.bG)([cb.A], () => cb.A.getParentSKU(i.skuId), [i.skuId]),
        S = I.useMemo(() => {
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
    return (0, x.jsxs)("div", {
        className: EO.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, x.jsx)(O.$, {
                        variant: "secondary",
                        size: "sm",
                        text: k.intl.string(k.t.QtMnkW),
                        onClick: async function () {
                            try {
                                A(!0);
                                let { subscription: e } = await (0, oR.QP)(s, g);
                                if (null == e) return;
                                (0, lI.mM)(async () => {
                                    let { default: t } = await Promise.all([n.e(888454), n.e(52396)]).then(
                                        n.bind(n, 115623),
                                    );
                                    return (n) =>
                                        (0, x.jsx)(t, {
                                            ...n,
                                            storeListing: i,
                                            subscription: uP.A.createFromServer(e),
                                        });
                                });
                            } finally {
                                A(!1);
                            }
                        },
                        loading: m,
                    })
                  : (0, x.jsx)(O.$, {
                        variant: "secondary",
                        size: "sm",
                        text: k.intl.string(k.t["E8G/tr"]),
                        onClick: function () {
                            (0, lI.mM)(async () => {
                                let { default: e } = await Promise.all([n.e(509032), n.e(299523)]).then(
                                    n.bind(n, 548750),
                                );
                                return (n) =>
                                    (0, x.jsx)(e, { ...n, application: t, storeListing: i, subscription: s, guild: o });
                            });
                        },
                    }),
            T &&
                null != h &&
                !1 === r &&
                !1 === a &&
                (0, x.jsx)(O.$, {
                    variant: "primary",
                    size: "sm",
                    text: k.intl.string(k.t.R74ZBR),
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
function EV(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, x.jsx)(Eb, {
        children: (e) =>
            (0, x.jsxs)("div", {
                className: EO.PX,
                children: [
                    (0, x.jsxs)("div", {
                        className: EO.wV,
                        children: [
                            e && (0, x.jsx)(n8.E, { variant: "body-sm/semibold", children: k.intl.string(k.t.mORL67) }),
                            (0, x.jsx)(Eb.Toggle, {
                                className: EO.Bh,
                                text: e ? k.intl.string(k.t.gsbFAw) : k.intl.string(k.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, x.jsx)(EE.F, { header: i, icon: (0, Ev.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function Ek(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, x.jsx)("div", {
                className: EO.Ji,
                children: (0, x.jsx)(lg.D, {
                    label: k.intl.string(k.t.azZaZa),
                    children: (0, x.jsx)(oX.y, { type: oX.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, x.jsx)("div", {
                  className: EO.Ji,
                  children: (0, x.jsxs)(Ed.$T, {
                      color: Ed.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          k.intl.format(k.t.IIHUUF, { subscriptionId: t.id }),
                          (0, x.jsx)("br", {}),
                          k.intl.format(k.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, x.jsx)("div", {
                  className: EO.Ji,
                  children: (0, x.jsx)(lg.D, {
                      label: k.intl.string(k.t.azZaZa),
                      children: (0, x.jsx)(AJ.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var Ew = (((g = {}).HOME = "HOME"), (g.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), g),
    EF = n(856383);
let EB = (0, _.UT)(c_.A, {
    getQueryId: b.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = c_.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && EF.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, gg.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var EX = n(240248),
    Ez = n(237218),
    EH = n(763064);
function EY(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = I.useState(!1),
        [r, a] = I.useState(null),
        o =
            null != r &&
            (0, x.jsx)("button", {
                className: EH.x6,
                onClick: () => s((e) => !e),
                children: (0, x.jsxs)(n8.E, {
                    className: EH.B0,
                    variant: "body-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? k.intl.string(k.t["JQX/Pb"]) : k.intl.string(k.t.Fbrd8J),
                        l
                            ? (0, x.jsx)(Ex.ChevronSmallUpIcon, { color: n4.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, x.jsx)(mQ.ChevronSmallDownIcon, { color: n4.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = I.useState(null),
        c = I.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    I.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let g = "auto";
    return (
        null != r && (g = l ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, x.jsxs)("div", {
            children: [
                (0, x.jsx)(n8.E, {
                    ...i,
                    className: EH.Qs,
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
var EW = n(920352);
function EK(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = I.useMemo(() => (null == n.thumbnail ? null : (0, Ez.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = EB(n.skuId),
        u = I.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, ab._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, x.jsxs)(EA, {
              className: iA()(EW.iE, i),
              header: (0, x.jsxs)(x.Fragment, {
                  children: [
                      (0, x.jsxs)("div", {
                          className: EW.qd,
                          children: [
                              null != a &&
                                  (0, x.jsx)(Eh._, { src: a.href, imageClassName: EW.rW, width: 48, height: 48 }),
                              (0, x.jsxs)("div", {
                                  children: [
                                      (0, x.jsx)(C.D, { variant: "heading-sm/semibold", children: n.summary }),
                                      (0, x.jsx)(n8.E, { variant: "body-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, EX.uJ)(r) &&
                      (0, x.jsx)("div", {
                          className: EW.h_,
                          children: (0, x.jsx)(EY, { variant: "body-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, x.jsx)("div", {
                          className: EW.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, x.jsx)(EE.F, { header: n, icon: (0, Ev.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var EZ = n(185438),
    Eq = n(683380);
function EQ(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, Ef.A)(t, 100),
        u = (0, Ey.PJ)(r.flags),
        d = u ? ES.ServerIcon : ET.UserIcon,
        c = u ? k.intl.string(k.t["46YF2D"]) : k.intl.string(k.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, _.bG)([lD.A], () => (u && null != g ? lD.A.getGuild(g) : void 0), [g, u]),
        A = (0, _.bG)(
            [cb.A],
            () => {
                if (null != a) return cb.A.get(a);
            },
            [a],
        ),
        E = Ej(n.currentPeriodEnd);
    return (0, x.jsxs)("div", {
        children: [
            (0, x.jsxs)("div", {
                className: Eq.wx,
                children: [
                    null != o && (0, x.jsx)(Eh._, { src: o.href, imageClassName: Eq.Z2, width: 48, height: 48 }),
                    (0, x.jsxs)("div", {
                        children: [
                            (0, x.jsx)(C.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, x.jsxs)("div", {
                                className: Eq.p4,
                                children: [
                                    (0, x.jsxs)(C.D, {
                                        variant: "heading-sm/medium",
                                        className: Eq.N4,
                                        children: [(0, x.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, x.jsxs)(x.Fragment, {
                                            children: [
                                                (0, x.jsx)(n8.E, { variant: "body-md/normal", children: "\u2022" }),
                                                (0, x.jsxs)("span", {
                                                    className: Eq.vP,
                                                    children: [
                                                        (0, x.jsx)(my.Ay, { guild: m, size: my.Ay.Sizes.SMOL }),
                                                        (0, x.jsx)(C.D, {
                                                            variant: "heading-sm/semibold",
                                                            color: "text-muted",
                                                            children: k.intl.format(k.t["7ZD8p1"], {
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
            (0, x.jsx)(Eb, {
                children: (e) =>
                    (0, x.jsxs)("div", {
                        className: Eq._B,
                        children: [
                            (0, x.jsx)(n8.E, { variant: "body-md/normal", children: k.intl.string(k.t["goe+hk"]) }),
                            e &&
                                (0, x.jsxs)(x.Fragment, {
                                    children: [
                                        (0, x.jsx)(n8.E, {
                                            variant: "body-md/normal",
                                            children: k.intl.format(k.t["Q8qJ+5"], {}),
                                        }),
                                        (0, x.jsx)(n8.E, {
                                            variant: "body-md/normal",
                                            children: k.intl.format(k.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, x.jsx)(Eb.Toggle, {
                                text: e ? k.intl.string(k.t["1Rkq/E"]) : k.intl.string(k.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, x.jsxs)("div", {
                className: Eq.x0,
                children: [
                    (0, x.jsx)(EK, {
                        storeListing: i,
                        className: Eq.o3,
                        cta: (0, x.jsxs)("div", {
                            className: Eq.cJ,
                            children: [
                                (0, x.jsx)(n8.E, {
                                    variant: "body-sm/medium",
                                    color: "text-brand",
                                    children: k.intl.string(k.t.fHIpOY),
                                }),
                                null != A &&
                                    (0, x.jsx)(n8.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-subtle",
                                        children: k.intl.format(k.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    l.map((e) =>
                        e.skuId === a
                            ? (0, x.jsx)(
                                  EK,
                                  {
                                      storeListing: e,
                                      cta: (0, x.jsx)(n8.E, {
                                          variant: "body-sm/semibold",
                                          color: "text-subtle",
                                          children: k.intl.format(k.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, x.jsx)(EJ, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function EJ(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, EZ.A)({
            analyticsLocation: b.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, x.jsx)(EK, {
        storeListing: t,
        cta: (0, x.jsx)(O.$, { variant: "primary", size: "sm", text: k.intl.string(k.t["+KwmBt"]), onClick: l }),
    });
}
class E$ extends I.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, x.jsxs)(Ed.$T, {
                  color: Ed.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      k.intl.format(k.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      k.intl.format(k.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function E0(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = I.useState({ route: Ew.HOME }),
        { route: s } = i;
    function r() {
        l({ route: Ew.HOME });
    }
    let a = (e) => {
            (l({ route: Ew.SWITCH_APP_PLANS, ...e }), n(k.intl.string(k.t.VFqtkP), r));
        },
        [o, u] = I.useState({});
    I.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: ED.LOADING })),
                (0, Ec._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: ED.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: ED.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, Eg.E)(),
        c = d !== Eg.mJ.LOADED;
    switch (s) {
        case Ew.HOME:
            return (0, x.jsx)(x.Fragment, {
                children: t.map((e) =>
                    (0, x.jsx)(
                        E$,
                        {
                            subscription: e,
                            children: (0, x.jsx)(ER, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? ED.LOADING : (o[e.id] ?? ED.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case Ew.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, x.jsx)(EQ, { ...m, navigateToHome: r });
        default:
            (0, ic.xb)(s);
    }
}
var E1 = n(707989);
function E2(e) {
    let { onGoBack: t } = e,
        n = (0, _.yK)(
            [uA.A],
            () =>
                uA.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = I.useState();
    return (
        null == i && (i = (0, x.jsx)(E3, { onBack: t, title: k.intl.string(k.t["DB/m9a"]) })),
        (0, x.jsxs)("div", {
            children: [
                i,
                (0, x.jsx)("div", {
                    className: E1.A,
                    children: (0, x.jsx)(E0, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, x.jsx)(E3, {
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
function E3(e) {
    let { onBack: t, title: n } = e;
    return (0, x.jsxs)("div", {
        className: E1.D,
        children: [
            (0, x.jsx)(lm.K, {
                "aria-label": k.intl.string(k.t["13/7kX"]),
                icon: () => (0, x.jsx)(Eu.ArrowLargeLeftIcon, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, x.jsx)(C.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
let E4 = (0, oM.mj)({
    kind: "user",
    name: "2026-11-subscription-management-settings-brand-refresh",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var E5 = n(366999),
    E6 = n(391659);
function E8(e) {
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
        ? ((t = k.intl.string(g4.default["/S02sx"])), (n = k.intl.string(g4.default.OPJNST)))
        : i
          ? ((t = k.intl.string(k.t["hT6i/0"])),
            (n = null != a ? k.intl.format(k.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = k.intl.string(k.t["3G0CTC"])),
            (n = r === t4.xc.FP_SUB_PAUSED ? k.intl.format(k.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = iA()({ [E6.Hs]: i, [E6.mT]: !i }),
        d = iA()({ [E6.CQ]: i, [E6.ZM]: !i }),
        c = iA()({ [E6.EM]: !i });
    return (0, x.jsxs)("div", {
        className: E6.r6,
        children: [
            (0, x.jsxs)("div", {
                className: E6.Nv,
                children: [
                    (0, x.jsx)(C.D, { variant: "heading-sm/semibold", className: c, children: t }),
                    null !== n && (0, x.jsx)(n8.E, { variant: "body-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, x.jsx)("div", {
                    className: E6.ZS,
                    children: (0, x.jsx)("div", {
                        className: u,
                        children: (0, x.jsx)(n8.E, { variant: "body-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let E7 = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, ab.kX)(t),
        r = s.length > 0,
        a = (0, E5.Ay)(t.endsAt, E5.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, x.jsx)("div", {
        children: (0, x.jsxs)("div", {
            className: iA()(n, E6.f8),
            children: [
                (0, x.jsx)("div", {
                    className: E6.J_,
                    children: (0, x.jsxs)("div", {
                        className: E6.Bh,
                        children: [
                            (0, x.jsx)("div", {
                                className: E6.xt,
                                children: (0, x.jsx)(ag.NitroWheelIcon, {
                                    size: "md",
                                    color: "white",
                                    className: E6.T8,
                                }),
                            }),
                            (0, x.jsx)("div", {
                                className: E6.pt,
                                children: (0, x.jsx)(C.D, {
                                    variant: "heading-sm/semibold",
                                    children: k.intl.string(k.t.DFMPWS),
                                }),
                            }),
                            (0, x.jsx)(n8.E, {
                                className: E6.PJ,
                                variant: "body-md/semibold",
                                children: s.length > 0 ? s : k.intl.string(k.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, x.jsx)(E8, {
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
var E9 = n(447732),
    he = n(803306),
    ht = n(358787);
function hn(e) {
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
        [u, d] = (0, _.yK)([c_.A], () => [c_.A.get(n), null != l ? c_.A.get(l.planId) : null]),
        c = (0, _.bG)([sT.default], () => (null != o ? sT.default.getUser(o) : null)),
        g = (0, di.xG)(c, { decoration: "auto" });
    if (null == u || ab.Ay.getInterval(n).intervalType !== t4.WT.MONTH) return null;
    let m = null != d ? d.skuId : null,
        A = u.skuId === m,
        E = (0, ab.z4)(n),
        h = ab.Ay.getDisplayName(n),
        S = null;
    if (r) S = k.intl.string(g4.default["5asczk"]);
    else if (A && null != l) {
        if (a) {
            let e;
            e = new Date(l.status === b.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
            let t = (0, ab._e)(e, s);
            S = k.intl.formatToPlainString(k.t["5CNRRA"], { date: t ?? 0 });
        }
    } else S = k.intl.formatToPlainString(k.t.eNXZ5O, { planName: h });
    let T = E || t.hasFreePremium() || (null != l && l.isPurchasedExternally) ? null : S;
    return (
        null != c &&
            (T =
                null != T
                    ? k.intl.formatToPlainString(c$.default.SDm5sW, { username: g, detail: T })
                    : k.intl.formatToPlainString(c$.default.Dvld9i, { username: g })),
        (0, x.jsxs)("div", {
            className: E6.Bh,
            children: [
                (0, x.jsx)("div", {
                    className: iA()({
                        [E6.bY]: E,
                        [E6.sr]: u.skuId === t4.pe.TIER_0,
                        [E6.lP]: u.skuId === t4.pe.TIER_1,
                        [E6.eb]: u.skuId === t4.pe.TIER_2,
                    }),
                    children: E
                        ? (0, x.jsx)(mu.BoostGemIcon, { size: "md", color: "currentColor", className: E6.Kk })
                        : (0, x.jsx)(ag.NitroWheelIcon, { size: "md", color: "currentColor", className: E6.Kk }),
                }),
                (0, x.jsxs)("div", {
                    className: E6.pt,
                    children: [
                        (0, x.jsx)(C.D, {
                            variant: "heading-sm/semibold",
                            children:
                                null != o
                                    ? k.intl.string(c$.default.ydxNPG)
                                    : k.intl.format(k.t.LzobT9, { planName: h }),
                        }),
                        null != T &&
                            (0, x.jsx)(C.D, {
                                className: E6.gj,
                                variant: "heading-xs/semibold",
                                color: "text-default",
                                children: T,
                            }),
                    ],
                }),
                (0, x.jsx)(n8.E, {
                    className: E6.PJ,
                    variant: "body-md/semibold",
                    children: k.intl.format(k.t["ess/xl"], { count: i }),
                }),
            ],
        })
    );
}
let hi = function (e) {
    let t,
        n,
        i,
        { className: l, entitlements: s } = e,
        r =
            ((t = I.useMemo(
                () =>
                    (function (e) {
                        let t = {},
                            n = new Map();
                        for (let i of e) {
                            let { subscriptionPlanId: e, parentId: l, consumed: s, gifterId: r, sourceType: a } = i;
                            if (null != e && null != l && !0 !== s)
                                if (null != r && a === E9.G.GIFT_SUBSCRIPTION_GRANT) {
                                    let t = `${r}:${e}`,
                                        l = n.get(t);
                                    null == l
                                        ? n.set(t, { key: t, gifterId: r, planId: e, entitlements: [i] })
                                        : l.entitlements.push(i);
                                } else (t[e] ??= []).push(i);
                        }
                        let i = Array.from(n.values());
                        for (let e of i) e.entitlements.sort((e, t) => ok.default.compare(e.id, t.id));
                        return (
                            i.sort((e, t) => ok.default.compare(e.entitlements[0].id, t.entitlements[0].id)),
                            { planCredits: t, giftedSubscriptionCredits: i }
                        );
                    })(s),
                [s],
            )),
            (n = I.useMemo(
                () =>
                    Z().uniq(
                        t.giftedSubscriptionCredits.map((e) => {
                            let { gifterId: t } = e;
                            return t;
                        }),
                    ),
                [t],
            )),
            (i = I.useRef(new Set())),
            I.useEffect(() => {
                for (let e of n)
                    i.current.has(e) ||
                        (i.current.add(e),
                        (async function (e) {
                            try {
                                await (0, he.wz)(e);
                            } catch {}
                        })(e));
            }, [n]),
            t),
        { planCredits: a, giftedSubscriptionCredits: o } = r,
        u = (0, _.yK)([cd.A], () => cd.A.getUnactivatedFractionalPremiumUnits()),
        d = (0, _.bG)([uA.A], () => uA.A.getPremiumSubscription()),
        c = (0, _.bG)([c_.A], () => (null != d ? c_.A.get(d.planId) : null)),
        g = I.useMemo(
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
                                  .sort((e, t) => ok.default.compare(e.id, t.id)),
                              r = new Set(),
                              a = new Map();
                          for (let { id: e, skuId: n } of s) {
                              let i = a.get(n) ?? 0;
                              i < t && (r.add(e), a.set(n, i + 1));
                          }
                          return r;
                      })(r, ab.Ay.getIntervalMonths(c.interval, c.intervalCount))
                    : new Set(),
            [r, c],
        ),
        m = (0, _.bG)([uA.A], () => null == uA.A.getPremiumTypeSubscription()),
        A =
            null != a[t4.gD.PREMIUM_MONTH_TIER_1] ||
            o.some((e) => {
                let { planId: t } = e;
                return t === t4.gD.PREMIUM_MONTH_TIER_1;
            }),
        E = (0, _.bG)([sT.default], () => sT.default.getCurrentUser());
    if (null == E) return null;
    let h = E.isPremiumWithPremiumGroup();
    return (0, x.jsxs)("div", {
        children: [
            (0, x.jsxs)("div", {
                className: iA()(l, E6.xF, E6.J_),
                children: [
                    Object.keys(a).map((e) =>
                        (0, x.jsx)(
                            hn,
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
                        return (0, x.jsx)(
                            hn,
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
                (0, x.jsxs)("div", {
                    children: [
                        (0, x.jsx)(n8.E, {
                            className: E6.eT,
                            variant: "body-md/normal",
                            children: k.intl.string(k.t["VNr4+O"]),
                        }),
                        (0, x.jsx)(ht.iE, {}),
                    ],
                }),
        ],
    });
};
var hl = n(902782);
function hs(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, eH.Ay)(),
        [s] = (0, AQ.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tw.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? hl.r : hl.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ab.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = c_.A.get(o);
    th()(null != u, "Missing plan");
    let d = (0, ds.$g)(s.total, s.currency);
    return (
        u.interval === t4.WT.YEAR
            ? (t = k.intl.format(k.t["jPz/39"], {
                  price: d,
                  termsUrl: b.X7G.TERMS,
                  paidURL: b.X7G.PAID_TERMS,
                  privacyUrl: b.X7G.PRIVACY,
              }))
            : u.interval === t4.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? k.intl.format(k.t.m27GpI, {
                            price: d,
                            termsUrl: b.X7G.TERMS,
                            paidURL: b.X7G.PAID_TERMS,
                            privacyUrl: b.X7G.PRIVACY,
                        })
                      : k.intl.format(k.t["9xf5Vx"], {
                            price: d,
                            termsUrl: b.X7G.TERMS,
                            paidURL: b.X7G.PAID_TERMS,
                            privacyUrl: b.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, x.jsx)(n8.E, { color: "text-muted", className: r, variant: "body-xs/normal", children: t })
    );
}
function hr(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === b.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, x.jsx)(hs, { subscription: t, withOverheadSeparator: n });
}
var ha = n(488110),
    ho = n(689255);
let hu = { [eR.nR]: "role_subscriptions_panel", [eR.PZ]: "application_subscriptions_panel" };
function hd() {
    return (0, x.jsx)(o$.Z, {
        className: ho.wb,
        type: o$.Z.Types.CUSTOM,
        children: (0, x.jsxs)(ly.A, {
            align: ly.A.Align.CENTER,
            children: [
                (0, x.jsx)(lt.A, { game: null, size: lt.M.SMALL, className: ho.pV }),
                (0, x.jsx)("span", { className: ho.O, children: k.intl.string(k.t["jy/hyj"]) }),
            ],
        }),
    });
}
function hc(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, Ag._)(e, t));
}
function hg() {
    let e = (0, _.bG)([cd.A], () => cd.A.getForApplication(t4.tv), [], hc);
    return (
        I.useEffect(() => {
            (0, cK.LM)(t4.tv);
        }, []),
        (0, x.jsx)(n6.n, {
            label: k.intl.string(k.t["2GKrvn"]),
            description: k.intl.string(k.t.Z5b2Gf),
            children:
                null != e && ab.Ay.hasAccountCredit(e)
                    ? (0, x.jsx)(hi, { className: ho.fX, entitlements: e })
                    : (0, x.jsx)(hd, {}),
        })
    );
}
function hm() {
    return (0, x.jsx)("hr", { className: ho.hr });
}
let hA = function () {
        var e;
        let { enabled: t } = E4.useConfig({ location: "subscription_management_settings" }),
            n = (0, _.bG)([uA.A], () => uA.A.getPremiumTypeSubscription()),
            i = (0, Am.A)({ subscriptionFilter: (e) => ha.Hy.has(e.status) }),
            l = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
            s = i.length > 1,
            r = (0, _.bG)(
                [oG.A],
                () => (null != n && null != n.paymentSourceId ? oG.A.getPaymentSource(n.paymentSourceId) : null),
                [n],
            ),
            a = (0, _.bG)([uA.A], () => uA.A.hasFetchedSubscriptions()),
            o = (0, _.bG)([oP.A], () => oP.A.isBusy),
            u = (0, gA.Y)(),
            d = A$.A.useField("subsection"),
            c = A$.A.useField("scrollToGameServers"),
            g = I.useRef(null);
        I.useEffect(() => {
            (0, is._)(null != d ? hu[d] : T.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let m = (0, _.bG)([uA.A], () => uA.A.getActiveApplicationSubscriptions()?.length ?? 0),
            A = (0, _.bG)(
                [uA.A],
                () =>
                    Object.values(uA.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === b.rzx.GUILD)
                        .filter((e) => e.status !== b.Dmq.ENDED).length,
            ),
            E = (0, _.bG)([uA.A], () =>
                Object.values(uA.A.getSubscriptions() ?? {}).some((e) => e.type === b.rzx.GAME_SERVER),
            ),
            { servers: h } = (0, AG.f)({ enabled: E }),
            S = (0, _.yK)([uA.A], () => (0, A_.eP)(h, (e) => uA.A.getSubscriptionById(e)), [h]),
            f = (0, gm.A)({ forceFetch: !0 }),
            p = (0, gT.ds)(),
            N = null !== n ? n.currentPeriodEnd : void 0,
            y =
                !(p && !(f.unactivatedUnits.length > 0)) &&
                (f.fractionalState !== t4.xc.NONE || f.unactivatedUnits.length > 0);
        return (I.useEffect(() => {
            c &&
                a &&
                u &&
                S.length > 0 &&
                (g.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                A$.A.setState({ scrollToGameServers: !1 }));
        }, [c, a, u, S.length]),
        I.useEffect(
            () => (
                (0, gg.zS)(),
                oR.hP(),
                (0, md.CD)(),
                oR.$o(),
                function () {
                    A$.A.resetState();
                }
            ),
            [],
        ),
        td.A.enabled)
            ? (0, x.jsx)(op.A, {})
            : a && u
              ? d === eR.nR
                  ? (0, x.jsx)(Es, { onGoBack: () => A$.A.setState({ subsection: null }) })
                  : d === eR.PZ
                    ? (0, x.jsx)(E2, { onGoBack: () => A$.A.setState({ subsection: null }) })
                    : (0, x.jsx)("div", {
                          className: ho.kL,
                          children: (0, x.jsxs)("div", {
                              className: ho.Qs,
                              children: [
                                  t
                                      ? null
                                      : (0, x.jsxs)(x.Fragment, {
                                            children: [
                                                s ? (0, x.jsx)(ha.Sb, {}) : null,
                                                null != n
                                                    ? (0, x.jsx)(ha.Ay, {
                                                          subscription: n,
                                                          paymentSource: r,
                                                          busy: o,
                                                          subscriptions: i,
                                                      })
                                                    : (0, x.jsx)(ha.TC, {}),
                                                y &&
                                                    ((e = !!l?.isPremiumWithPremiumGroup()),
                                                    (0, x.jsxs)("section", {
                                                        children: [
                                                            (0, x.jsx)(C.D, {
                                                                variant: "heading-sm/semibold",
                                                                className: ho.HL,
                                                                children: k.intl.string(k.t.Obre8v),
                                                            }),
                                                            (0, x.jsx)(n8.E, {
                                                                variant: "body-md/normal",
                                                                className: ho.JU,
                                                                children: k.intl.format(k.t["7Zi06b"], {
                                                                    helpCenterLink: ey.A.getArticleURL(
                                                                        b.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                                    ),
                                                                }),
                                                            }),
                                                            (0, x.jsx)(E7, {
                                                                className: ho.fX,
                                                                fractionalPremiumInfo: f,
                                                                activationDate: N,
                                                                hasPremiumGroup: e,
                                                            }),
                                                        ],
                                                    })),
                                                (0, x.jsx)(hg, {}),
                                            ],
                                        }),
                                  A > 0 &&
                                      (0, x.jsxs)(x.Fragment, {
                                          children: [
                                              (0, x.jsx)(hm, {}),
                                              (0, x.jsx)(AV, {
                                                  count: A,
                                                  onClickManageSubscription: () => A$.A.setState({ subsection: eR.nR }),
                                              }),
                                          ],
                                      }),
                                  m > 0 &&
                                      (0, x.jsxs)(x.Fragment, {
                                          children: [
                                              (0, x.jsx)(hm, {}),
                                              (0, x.jsx)(Eo, {
                                                  count: m,
                                                  onClickManageSubscription: () => {
                                                      (A$.A.setState({ subsection: eR.PZ }),
                                                          tc.default.track(
                                                              b.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  S.length > 0 &&
                                      (0, x.jsxs)("div", {
                                          ref: g,
                                          children: [(0, x.jsx)(hm, {}), (0, x.jsx)(AP, { servers: S })],
                                      }),
                                  (0, x.jsx)(hm, {}),
                                  null != n ? (0, x.jsx)(hr, { subscription: n, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, x.jsx)("div", { className: iA()(ho.kL, ho.Lq), children: (0, x.jsx)(oX.y, {}) });
    },
    hE = (0, S.E2)(T.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [k.intl.string(k.t.trSpHX), k.intl.string(k.t["2GKrvn"])],
        Component: () => (0, x.jsx)(hA, {}),
    }),
    hh = (0, S.zZ)(T.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [k.intl.string(k.t.trSpHX), k.intl.string(k.t["2GKrvn"])],
        buildLayout: () => [hE],
    }),
    hS = (0, S.t_)(T.X.SUBSCRIPTIONS_PANEL, { useTitle: () => k.intl.string(k.t.trSpHX), buildLayout: () => [hh] }),
    hT = (0, S.i4)(T.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.trSpHX),
        icon: Ad.SubscriptionIcon,
        usePersistentBadge: function () {
            let e = (0, Ac.l)();
            return I.useMemo(
                () => ({
                    badgeType: p.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e
                        ? (0, x.jsx)(i2.CircleErrorIcon, { size: "xs", color: n4.A.unsafe_rawColors.YELLOW_300 })
                        : null,
                }),
                [e],
            );
        },
        buildLayout: () => [hS],
    }),
    hf = (0, S.WI)(T.X.BILLING_SECTION, {
        useTitle: () => k.intl.string(k.t.oeUm2s),
        buildLayout: () => [mo, Au, hT, gr, dP],
    });
var hp = n(540999),
    hx = n(663417),
    hI = n(148810),
    h_ = n(521502),
    hb = n(380610),
    hN = n(390486),
    hC = n(611677),
    hy = n(103557),
    hv = n(986238);
class hj extends I.Component {
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
        e.key === lB.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, hI.SB)(e);
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
            d = hv.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, x.jsxs)(Q.B, {
            gap: 20,
            children: [
                (0, x.jsx)(lc.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hv.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, x.jsx)(lc.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hv.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, x.jsxs)(Q.B, {
                          gap: 20,
                          children: [
                              (0, x.jsx)(l_.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: {
                                      icon: iZ.PlusSmallIcon,
                                      onClick: this.handleAddAllowedVersion,
                                      "aria-label": "Add",
                                  },
                              }),
                              (0, x.jsx)(lc.l, {
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
                    : (0, x.jsx)(hy.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                this.isMobile()
                    ? null
                    : (0, x.jsx)(hy.f, {
                          label: "Client Experiment Override",
                          description:
                              "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                          value: o,
                          error: u,
                          onChange: this.handleExperiments,
                          placeholder: '{"2022-01_threads":1}',
                      }),
                (0, x.jsx)(nt.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, x.jsx)("div", {});
        let n = "info";
        switch (t) {
            case 0:
                n = "critical";
                break;
            case 1:
                n = "warning";
        }
        return (0, x.jsx)(iQ.w, { type: n, message: e, role: "critical" === n ? "alert" : "status" });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, x.jsx)(lx.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, x.jsx)(cP.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
var hO = n(428524);
let hD = [
        { id: "discord_web", value: "discord_web", label: "Discord web / desktop" },
        { id: "discord_marketing", value: "discord_marketing", label: "Marketing website" },
        { id: "discord_developers", value: "discord_developers", label: "Developer portal" },
        { id: "discord_ios", value: "discord_ios", label: "Discord iOS" },
        { id: "discord_android", value: "discord_android", label: "Discord Android" },
    ],
    hR = [
        { id: "branch", value: "branch", label: "Branch name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ],
    hL = { type: "branch", id: "" },
    hP = (0, S.E2)(T.X.BUILD_OVERRIDES, {
        useSearchTerms: () => ["build override", "build overrides", "branch", "commit"],
        Component: function () {
            let e = (0, _.bG)([h_.A], () =>
                    (0, hb.kK)() ? h_.A.getCurrentBuildOverride().overrides?.discord_web : null,
                ),
                [t] = I.useState(hN.HP),
                [n, i] = I.useState(),
                [l, s] = I.useState("discord_web"),
                [r, a] = I.useState(hL),
                [o, u] = I.useState(!1),
                [d, c] = I.useState(!1),
                [g, m] = I.useState(),
                [A, E] = I.useState(!1),
                h = void 0 === n,
                S = d || o || h,
                T = n?.[l],
                f = r.id.trim(),
                p = null != T ? r.id !== T.id || r.type !== T.type : "" !== r.id,
                b = "discord_ios" === l || "discord_android" === l,
                N = b ? ("" !== f ? { ...r, id: f } : null) : p ? null : T;
            async function y() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (null != n) {
                    (u(!0), m(void 0), E(!1));
                    try {
                        let t = { ...n };
                        e ? delete t[l] : (t[l] = { ...r, id: f });
                        let s = await (0, hI.Zk)(t);
                        if (200 !== s.status)
                            return void m(
                                400 === s.status
                                    ? String(s.body[l] ?? "Unable to save this override.")
                                    : "Unable to save this override. Try again.",
                            );
                        (i(t), a(t[l] ?? hL), E(!0));
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
                I.useEffect(() => {
                    let e = !1;
                    return (
                        !(async function () {
                            let t = await (0, hb.bD)();
                            e || (i(t ?? null), null != t && a(t.discord_web ?? hL));
                        })(),
                        () => {
                            e = !0;
                        }
                    );
                }, []),
                (0, x.jsxs)(Q.B, {
                    gap: 32,
                    children: [
                        (0, x.jsx)("section", {
                            children: (0, x.jsxs)(Q.B, {
                                gap: 12,
                                children: [
                                    (0, x.jsx)(C.D, { variant: "heading-md/semibold", children: "Current build" }),
                                    (0, x.jsxs)("div", {
                                        className: hO.n,
                                        children: [
                                            (0, x.jsxs)(Q.B, {
                                                gap: 4,
                                                children: [
                                                    (0, x.jsx)(n8.E, {
                                                        variant: "body-md/medium",
                                                        children: null != e ? e.id : "Default build",
                                                    }),
                                                    (0, x.jsx)(n8.E, {
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
                                                (0, x.jsx)(O.$, {
                                                    variant: "critical-secondary",
                                                    text: "Clear override",
                                                    disabled: S || p,
                                                    onClick: () => v(async () => (await (0, hI.iD)()).ok),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, x.jsx)(hC.l, {
                            onSubmit: (e) => {
                                (e.preventDefault(), y());
                            },
                            children: (0, x.jsxs)(n6.n, {
                                label: "Manual override",
                                description:
                                    "Choose a project and a branch or commit. Other project overrides are kept when you save.",
                                children: [
                                    (0, x.jsx)(lc.l, {
                                        selectionMode: "single",
                                        label: "Project",
                                        options: hD,
                                        value: l,
                                        onSelectionChange: function (e) {
                                            (s(e), a(n?.[e] ?? hL), m(void 0), E(!1));
                                        },
                                        disabled: S || p,
                                    }),
                                    (0, x.jsxs)("div", {
                                        className: hO.O,
                                        children: [
                                            (0, x.jsx)(lc.l, {
                                                selectionMode: "single",
                                                label: "Target type",
                                                options: hR,
                                                value: r.type,
                                                onSelectionChange: (e) => {
                                                    (a({ type: e, id: "" }), E(!1));
                                                },
                                                disabled: S,
                                            }),
                                            (0, x.jsx)(l_.k, {
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
                                    h && (0, x.jsx)(oX.y, {}),
                                    null === n &&
                                        (0, x.jsx)(iQ.w, {
                                            role: "alert",
                                            type: "critical",
                                            message:
                                                "Unable to load overrides, so saving is off. Try opening this page again.",
                                        }),
                                    b &&
                                        (0, x.jsx)(iQ.w, {
                                            role: "status",
                                            type: "info",
                                            message:
                                                "Use a public link to apply mobile builds. Create one below, then open it on the matching device.",
                                        }),
                                    b &&
                                        "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL &&
                                        (0, x.jsx)(iQ.w, {
                                            role: "status",
                                            type: "warning",
                                            message:
                                                "Generate mobile build override links from the stable web or desktop client.",
                                        }),
                                    A &&
                                        (0, x.jsx)(iQ.w, {
                                            role: "status",
                                            type: "info",
                                            message: "Saved. Reload the app to run the selected build.",
                                        }),
                                    (0, x.jsxs)(s8.e, {
                                        justify: "start",
                                        children: [
                                            (0, x.jsx)(O.$, {
                                                type: "submit",
                                                text: "Save override",
                                                disabled: S || null == n || "" === f || b,
                                                loading: o,
                                            }),
                                            p &&
                                                (0, x.jsx)(O.$, {
                                                    variant: "secondary",
                                                    text: "Discard changes",
                                                    disabled: S,
                                                    onClick: () => {
                                                        (a(T ?? hL), m(void 0));
                                                    },
                                                }),
                                            null != T &&
                                                !b &&
                                                (0, x.jsx)(O.$, {
                                                    variant: "critical-secondary",
                                                    text: "Remove target",
                                                    onClick: () => y(!0),
                                                    disabled: S,
                                                }),
                                            A &&
                                                (0, x.jsx)(O.$, {
                                                    variant: "secondary",
                                                    text: "Reload app",
                                                    onClick: () => window.location.reload(),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, x.jsx)("section", {
                            children: (0, x.jsxs)(Q.B, {
                                gap: 12,
                                children: [
                                    (0, x.jsxs)(Q.B, {
                                        gap: 4,
                                        children: [
                                            (0, x.jsx)(C.D, {
                                                variant: "heading-md/semibold",
                                                children: "Recent builds",
                                            }),
                                            (0, x.jsx)(n8.E, {
                                                variant: "body-sm/normal",
                                                color: "text-subtle",
                                                children: "Return to a web build you used on this device.",
                                            }),
                                        ],
                                    }),
                                    0 === t.length
                                        ? (0, x.jsx)(n8.E, {
                                              variant: "body-md/normal",
                                              color: "text-subtle",
                                              children:
                                                  "Your recent builds will appear here after you apply an override.",
                                          })
                                        : t.map((t) =>
                                              (0, x.jsxs)(
                                                  "div",
                                                  {
                                                      className: hO.n,
                                                      children: [
                                                          (0, x.jsxs)(Q.B, {
                                                              gap: 4,
                                                              children: [
                                                                  (0, x.jsx)(n8.E, {
                                                                      variant: "body-md/medium",
                                                                      children: t.id,
                                                                  }),
                                                                  (0, x.jsx)(n8.E, {
                                                                      variant: "body-sm/normal",
                                                                      color: "text-subtle",
                                                                      children: "id" === t.type ? "Commit" : "Branch",
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, x.jsx)(O.$, {
                                                              variant: "secondary",
                                                              size: "sm",
                                                              text: t.id === e?.id ? "Active" : "Reapply",
                                                              disabled: S || p || t.id === e?.id,
                                                              onClick: () => v(() => (0, hN.mk)(t)),
                                                          }),
                                                      ],
                                                  },
                                                  t.id,
                                              ),
                                          ),
                                ],
                            }),
                        }),
                        (0, x.jsx)("section", {
                            children: (0, x.jsxs)(Q.B, {
                                gap: 12,
                                children: [
                                    (0, x.jsxs)(Q.B, {
                                        gap: 4,
                                        children: [
                                            (0, x.jsx)(C.D, {
                                                variant: "heading-md/semibold",
                                                children: "Share an override",
                                            }),
                                            (0, x.jsx)(n8.E, {
                                                variant: "body-sm/normal",
                                                color: "text-subtle",
                                                children:
                                                    "Create a public link for the selected project. Choose who can use it and when it expires.",
                                            }),
                                        ],
                                    }),
                                    (0, x.jsx)(s8.e, {
                                        justify: "start",
                                        children: (0, x.jsx)(O.$, {
                                            variant: "secondary",
                                            text: "Generate public link",
                                            disabled: S || null == N,
                                            onClick: function () {
                                                null != N &&
                                                    (0, lI.qf)((e) =>
                                                        (0, x.jsx)(hj, { ...e, buildOverrides: { [l]: N } }),
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
    hG = (0, S.zZ)(T.X.BUILD_OVERRIDES_CATEGORY, {
        useTitle: () => "Build Overrides",
        useSubtitle: () => "Choose the build this client runs, or share an override with someone else.",
        buildLayout: () => [hP],
    }),
    hM = (0, S.t_)(T.X.BUILD_OVERRIDES_PANEL, { useTitle: () => "Build Overrides", buildLayout: () => [hG] }),
    hU = (0, S.i4)(T.X.BUILD_OVERRIDES_SIDEBAR_ITEM, {
        useTitle: () => "Build Overrides",
        icon: hx.RefreshIcon,
        useMenu: function () {
            let e = (0, _.bG)([h_.A], () =>
                    (0, hb.kK)() ? h_.A.getCurrentBuildOverride().overrides?.discord_web : null,
                ),
                t = (0, _.bG)([hp.A], () => hp.A.isDeveloper),
                [n] = I.useState(hN.HP),
                [i, l] = I.useState(!1),
                s = I.useMemo(
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
            return (0, x.jsxs)(x.Fragment, {
                children: [
                    s.length > 0 &&
                        (0, x.jsx)(tl.rX, {
                            children: s.map((t) =>
                                (0, x.jsx)(
                                    tl.iD,
                                    {
                                        id: `build-override-${t.id.replaceAll("--", "__")}`,
                                        label: t.id,
                                        subtext: t.id === e?.id ? "Active" : void 0,
                                        group: "build-overrides",
                                        checked: t.id === e?.id,
                                        disabled: i,
                                        action: () =>
                                            (function (t) {
                                                if (t.id !== e?.id) return r(() => (0, hN.mk)(t));
                                            })(t),
                                    },
                                    t.id,
                                ),
                            ),
                        }),
                    (0, x.jsx)(tl.rX, {
                        children: (0, x.jsx)(tl.Dr, {
                            id: "clear-build-override",
                            label: k.intl.string(k.t["/Nz9rY"]),
                            disabled: i || null == e,
                            action: function () {
                                if (null != e) return r(async () => (await (0, hI.iD)()).ok);
                            },
                        }),
                    }),
                ],
            });
        },
        buildLayout: () => [hM],
    });
var hV = n(306471),
    hk = n(964355),
    hw = n(172272);
let hF = (0, S.zD)(T.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, _.bG)([rm.default], () => rm.default.isAxeEnabled),
        setValue: (e) => (0, rg.x)({ axeEnabled: e }),
    }),
    hB = (0, S.zD)(T.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rg.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hX = n(276086),
    hz = n(354328);
let hH = (0, S.zD)(T.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hz.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hX.L)("highlight_mana_components", e);
        },
    }),
    hY = (0, S.zD)(T.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, hz.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, hX.L)("highlight_mana_text_overrides", e);
        },
    }),
    hW = (0, S.zD)(T.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, hz.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, hX.L)("highlight_mana_text", e);
        },
    }),
    hK = (0, S.zD)(T.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hz.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hX.L)("highlight_void_toggleables", e);
        },
    }),
    hZ = (0, S.sN)(T.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, _.bG)([rm.default], () => rm.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: 64,
        markers: Array.from({ length: 65 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hw.O.getState().horizontalSpacing,
        asValueChanges: (e) => {
            hw.O.getState().setHorizontalSpacing(e);
        },
    }),
    hq = (0, S.zD)(T.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rg.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hQ = (0, S.sN)(T.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, _.bG)([rm.default], () => rm.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: 64,
        markers: Array.from({ length: 65 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hw.O.getState().verticalSpacing,
        asValueChanges: (e) => {
            hw.O.getState().setVerticalSpacing(e);
        },
    }),
    hJ = (0, S.zZ)(T.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hB, hq, hZ, hQ, hH, hW, hY, hK, hF],
    });
var h$ = n(246605),
    h0 = n(274184);
function h1(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = I.useState(l ?? ""),
        u = I.useRef(null),
        [d, c] = I.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        I.useEffect(() => g, []),
        (0, x.jsx)(lg.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, x.jsx)(l_.k, {
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
let h2 = (0, S.E2)(T.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, _.bG)([h0.Ay], () => h0.Ay.getActionTriggeredSurveyOverride());
            return (0, x.jsx)(h1, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => h$.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    h3 = (0, S.zD)(T.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => V.HZ.useSetting(),
        setValue: (e) => {
            V.HZ.updateSetting(e);
        },
    });
var h4 = n(256311),
    h5 = n(883600);
let h6 = (0, S.E2)(T.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, _.bG)([h5.A], () => h5.A.overrideId());
        return (0, x.jsx)(h1, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => h4.A.setChangelogOverride(e),
            fetchOverride: async function (e) {
                let t = h5.A.getChangelog(e, "en-US");
                return null != t ? t : ((await h4.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            },
        });
    },
});
var h8 = n(506774);
let h7 = new Date("2018-01-01"),
    h9 = (0, S.Tf)(T.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => V.pK.useSetting() === ok.default.fromTimestamp(h7.getTime()),
        onClick: () => (h8.w.set("lastChangeLogDate", h7), V.pK.updateSetting(ok.default.fromTimestamp(h7.getTime()))),
    }),
    Se = (0, S.zD)(T.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, _.bG)([rm.default], () => rm.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, _.bG)(
                [rm.default],
                () => rm.default.disableAppCollectionsCache || rm.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, rg.x)({ disableAppCollectionsCache: e }),
    }),
    St = (0, S.zD)(T.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.isForcedCanary),
        setValue: (e) => {
            (0, rg.x)({ canary: e });
        },
    }),
    Sn = (0, S.zD)(T.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.sourceMapsEnabled),
        setValue: (e) => (0, rg.x)({ sourceMapsEnabled: e }),
    }),
    Si = (0, S.zD)(T.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rg.x)({ onlyShowPreviewAppCollections: e }),
    });
var Sl = n(10094),
    Ss = n(683760);
let Sr = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: t4.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: t4.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: t4.PremiumTypes.TIER_2 },
    ],
    Sa = (0, S.Hn)(T.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => Sr,
        clearable: !0,
        useValue: () =>
            (0, _.bG)([Ss.A], () => {
                let e = Ss.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, Sl.O)(null, void 0)
                : null === e
                  ? (0, Sl.O)(void 0, void 0)
                  : (0, Sl.O)(0 === e ? null : e, void 0);
        },
    });
var So = n(374042);
let Su = (0, S.E2)(T.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, _.bG)([h0.Ay], () => h0.Ay.getSurveyOverride());
            return (0, x.jsx)(h1, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => h$.xr(e),
                fetchOverride: (e) => (0, So.B)(e, !0) ?? null,
            });
        },
    }),
    Sd = (0, S.zZ)(T.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [Sa, Su, h2, h6, h9, St, h3, Si, Se, Sn],
    }),
    Sc = (0, S.zD)(T.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rg.x)({ logAnalyticsEvents: e }),
    }),
    Sg = (0, S.zD)(T.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rg.x)({ logGatewayEvents: e }),
    }),
    Sm = (0, S.zD)(T.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.preventPopoutClose),
        setValue: (e) => (0, rg.x)({ preventPopoutClose: e }),
    }),
    SA = (0, S.zD)(T.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.logKeyboardMismatches),
        setValue: (e) => (0, rg.x)({ logKeyboardMismatches: e }),
    }),
    SE = (0, S.zD)(T.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rg.x)({ logOverlayEvents: e }),
    }),
    Sh = (0, S.zD)(T.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.isLoggingQuestEvents),
        setValue: (e) => (0, rg.x)({ logQuestEvents: e }),
    }),
    SS = (0, S.zD)(T.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, _.bG)([rm.default], () => rm.default.isTracingRequests),
        setValue: (e) => (0, rg.x)({ trace: e }),
    }),
    ST = (0, S.zZ)(T.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [Sg, SE, SS, Sc, SA, Sm, Sh] }),
    Sf = (0, S.t_)(T.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Sd, ST, hJ],
    }),
    Sp = (0, S.i4)(T.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: hV.StaffBadgeIcon,
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
                } = (0, _.cf)([rm.default, hp.A, sT.default], () => ({
                    layoutDebuggingEnabled: rm.default.layoutDebuggingEnabled,
                    isDeveloper: hp.A.isDeveloper,
                    isLoggingGatewayEvents: rm.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: rm.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: rm.default.isLoggingAnalyticsEvents,
                    isTracingRequests: rm.default.isTracingRequests,
                    isForcedCanary: rm.default.isForcedCanary,
                    isSourceMapsEnabled: rm.default.sourceMapsEnabled,
                    isAxeEnabled: rm.default.isAxeEnabled,
                    preventPopoutClose: rm.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: rm.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: rm.default.disableAppCollectionsCache,
                    isStaff: sT.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: g, verticalSpacing: m } = (0, hw.O)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = hw.O.getState(),
                h = V.HZ.useSetting();
            return t
                ? [
                      (0, x.jsxs)(
                          tl.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, nm.openUserSettings)(T.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, x.jsx)(
                                      tl.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: h,
                                          action: () => {
                                              V.HZ.updateSetting(!h);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, x.jsx)(
                                      tl.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, rg.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, x.jsx)(
                                      tl.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, rg.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, x.jsx)(
                                      tl.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: d,
                                          action: () => {
                                              (0, rg.x)({ disableAppCollectionsCache: !d });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, x.jsxs)(
                          tl.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, nm.openUserSettings)(T.X.LOGGING);
                              },
                              children: [
                                  (0, x.jsx)(
                                      tl.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, rg.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, x.jsx)(
                                      tl.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, rg.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, x.jsx)(
                                      tl.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, rg.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, x.jsx)(
                                      tl.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, rg.x)({ trace: !s });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, x.jsx)(
                                      tl.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, rg.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, x.jsxs)(
                          tl.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, nm.openUserSettings)(T.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, x.jsx)(
                                      tl.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, rg.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, x.jsx)(
                                      tl.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, rg.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, x.jsxs)(x.Fragment, {
                                          children: [
                                              (0, x.jsx)(
                                                  tl.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, x.jsx)(hk.i, {
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
                                              (0, x.jsx)(
                                                  tl.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, x.jsx)(hk.i, {
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
                          ? (0, x.jsx)(
                                tl.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => sS() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [Sf],
    });
var Sx = n(127062),
    SI = n(25044),
    S_ = n(80703),
    Sb = n(123292),
    SN = n(683438),
    SC = n(890856),
    Sy = n(173936),
    Sv = n(100392),
    Sj = n(102609),
    SO = n(271478),
    SD = n(386976),
    SR = n(257433),
    SL = n(32523),
    SP = n(96919),
    SG = n(688151),
    SM = n(863763);
function SU(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = I.useState(l),
        [a, o] = I.useState(!1),
        u = I.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, _.bG)([oL.default], () => oL.default.getId()),
        c = (0, _.bG)([oL.default], () => {
            let e = oL.default.getInstallationForTracking();
            return null == e ? null : (0, S_.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, SR.iN)(t, g),
        A = (0, SR.Fm)(t, g),
        E = (0, _.yK)([rp.A], () =>
            Z()
                .sortBy(rp.A.getRecentExposures(SG.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        h = I.useCallback(
            (e) => {
                (0, uq.C)((0, Sv.yA)(n), () => {
                    ((0, sA.P0)({ text: "Copied experiment link", variant: "success" }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        S = (0, x.jsx)(SC.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, x.jsxs)(n8.E, {
                variant: "body-md/medium",
                className: SM.DD,
                children: [
                    (0, x.jsxs)("div", {
                        children: [
                            (0, x.jsxs)(Q.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uq.p5 &&
                                        (0, x.jsx)(n7.D, {
                                            onClick: h,
                                            children: (0, x.jsx)(Sy.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, x.jsx)(n8.E, { color: "text-muted", variant: "body-sm/normal", children: n }),
                        ],
                    }),
                    (0, x.jsx)("span", {
                        className: SM.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, x.jsx)("div", { className: SM.Os, children: S });
    let T = "";
    return (
        (T =
            t.system === Sj.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? SG.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, x.jsxs)("div", {
            className: SM.Os,
            children: [
                S,
                (0, x.jsx)("div", {
                    children: (0, x.jsx)(SO.g, {
                        label: t.system === Sj.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: T,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, x.jsx)("div", {
                    className: SM.h_,
                    children:
                        null == A
                            ? (0, x.jsx)(n8.E, {
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, x.jsxs)("div", {
                          children: [
                              (0, x.jsx)(n8.E, {
                                  variant: "body-lg/medium",
                                  className: SM.id,
                                  children: "Server Descriptor",
                              }),
                              (0, x.jsx)(n8.E, {
                                  variant: "mono-md/bold",
                                  className: SM.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, x.jsx)(n8.E, {
                                  variant: "body-lg/medium",
                                  className: SM.id,
                                  children: "Override Descriptor",
                              }),
                              (0, x.jsx)(n8.E, {
                                  variant: "mono-md/bold",
                                  className: SM.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, x.jsx)(n8.E, {
                                  variant: "body-lg/medium",
                                  className: SM.id,
                                  children: "Recent Exposures",
                              }),
                              (0, x.jsx)(n8.E, {
                                  variant: "mono-md/bold",
                                  className: SM.AS,
                                  children: 0 === E.length ? "None" : E.join("\n"),
                              }),
                          ],
                      })
                    : (0, x.jsx)("div", {
                          className: SM.id,
                          children: (0, x.jsx)(Sb.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, x.jsx)(lo.c, { className: SM.yF }),
            ],
        })
    );
}
function SV(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = I.useState(null != i),
        [r, a] = I.useState(!1),
        o = I.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, _.bG)([rp.A], () => rp.A.getLoadedGuildExperiment(n)),
        d = (0, _.bG)([rp.A, lD.A, i$.A], () => {
            if (t.system === Sj.l5.LEGACY) return null == rp.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lD.A.getGuildsArray().some((t) => null != i$.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, _.yK)([rp.A], () =>
            Z()
                .sortBy(rp.A.getRecentExposures(SG.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, _.yK)([oL.default, lD.A, rp.A, i$.A], () => {
            let e = t.system === Sj.l5.LEGACY,
                i = t.name,
                l = oL.default.getId(),
                s = Z().sortBy(lD.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (rp.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? SG.RE.NOT_ELIGIBLE)
                    : (i$.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? SG.RE.NOT_ELIGIBLE);
                (s in r || (r[s] = 0), r[s]++, a.push(`${t.name}: ${s}`));
            }
            let o = Z()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        A = t.system !== Sj.l5.LEGACY,
        E = (0, _.yK)([lD.A], () => Z().sortBy(lD.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [h, S] = I.useState(() => lR.A.getGuildId() ?? lR.A.getLastSelectedGuildId()),
        T = E.find((e) => e.id === h)?.name,
        f = (0, _.bG)(
            [i$.A],
            () => {
                if (A && null != h) return i$.A.getServerAssignment("guild", h, t.name);
            },
            [A, h, t.name],
        ),
        p = (0, _.bG)([i$.A, oL.default], () => {
            if (!A) return;
            let e = oL.default.getId();
            return i$.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        b = null != p && (p.isOverride || p.useAsEligibility),
        N = (0, x.jsx)(n7.D, {
            onClick: o,
            children: (0, x.jsxs)(n8.E, {
                variant: "body-md/medium",
                className: SM.DD,
                children: [
                    (0, x.jsxs)("div", {
                        children: [
                            (0, x.jsx)("span", { children: t.title }),
                            (0, x.jsx)(n8.E, { color: "text-muted", variant: "body-sm/normal", children: n }),
                        ],
                    }),
                    (0, x.jsx)("span", { className: SM.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, x.jsxs)("div", {
              className: SM.Os,
              children: [
                  N,
                  (0, x.jsx)(SO.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  A &&
                      E.length > 0 &&
                      (0, x.jsx)("div", {
                          className: SM.h_,
                          children: (0, x.jsx)(lc.l, {
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
                  (0, x.jsx)("div", {
                      className: SM.h_,
                      children: d
                          ? (0, x.jsx)(n8.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Sj.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  A &&
                      (0, x.jsxs)("div", {
                          children: [
                              (0, x.jsxs)(n8.E, {
                                  variant: "body-lg/medium",
                                  className: SM.id,
                                  children: ["Server Descriptor", null != T ? ` (${T})` : ""],
                              }),
                              (0, x.jsx)(n8.E, {
                                  variant: "mono-md/bold",
                                  className: SM.AS,
                                  children: null == f ? "None" : JSON.stringify(f, void 0, 2),
                              }),
                              (0, x.jsx)(n8.E, {
                                  variant: "body-lg/medium",
                                  className: SM.id,
                                  children: "Client Eligibility",
                              }),
                              (0, x.jsx)(n8.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: b ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, x.jsx)(n8.E, {
                                  variant: "mono-md/bold",
                                  className: SM.AS,
                                  children: null == p ? "None" : JSON.stringify(p, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, x.jsxs)("div", {
                            children: [
                                (0, x.jsx)(n8.E, {
                                    variant: "body-lg/medium",
                                    className: SM.id,
                                    children: "Guild Assignments",
                                }),
                                (0, x.jsx)(n8.E, { variant: "mono-md/bold", className: SM.AS, children: g }),
                                t.system === Sj.l5.LEGACY &&
                                    (0, x.jsxs)(x.Fragment, {
                                        children: [
                                            (0, x.jsx)(n8.E, {
                                                variant: "body-lg/medium",
                                                className: SM.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, x.jsx)(n8.E, {
                                                variant: "mono-md/bold",
                                                className: SM.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, x.jsx)(n8.E, {
                                    variant: "body-lg/medium",
                                    className: SM.id,
                                    children: "Override Descriptor",
                                }),
                                (0, x.jsx)(n8.E, {
                                    variant: "mono-md/bold",
                                    className: SM.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, x.jsx)(n8.E, {
                                    variant: "body-lg/medium",
                                    className: SM.id,
                                    children: "Recent Exposures",
                                }),
                                (0, x.jsx)(n8.E, {
                                    variant: "mono-md/bold",
                                    className: SM.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, x.jsx)("div", {
                            className: SM.id,
                            children: (0, x.jsx)(Sb.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, x.jsx)(lo.c, { className: SM.yF }),
              ],
          })
        : (0, x.jsx)("div", { className: SM.Os, children: N });
}
let Sk = (0, S.E2)(T.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, SD.op)(),
                { experiments: n, overridesInfo: i } = (0, SL.hI)(),
                l = I.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = I.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, _.bG)([oL.default], () => {
                    let e = oL.default.getInstallationForTracking();
                    return null == e ? null : (0, S_.v)(e);
                }),
                [a, o] = I.useState(""),
                u = (0, SP.oC)((0, SP.R3)((0, SP.Fm)(l), s), a);
            return (0, x.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, x.jsxs)(Q.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, x.jsxs)(n8.E, {
                                    variant: "body-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uq.p5 &&
                                    (0, x.jsx)(Sb.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uq.C)(r, () => {
                                                (0, sA.P0)({ text: "Installation ID copied!", variant: "success" });
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, x.jsx)(SN.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? SV : SU;
                              return (0, x.jsx)(
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
                        : (0, x.jsx)("div", {
                              className: SM.p$,
                              children: (0, x.jsx)(C.D, {
                                  variant: "heading-sm/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    Sw = (0, S.zZ)(T.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Sk] }),
    SF = (0, S.t_)(T.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Sw] }),
    SB = (0, S.i4)(T.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Sx.BeakerIcon,
        useMenu: SI.A,
        buildLayout: () => [SF],
    }),
    SX = (0, S.WI)(T.X.DEVELOPER_SECTION, {
        useTitle: () => k.intl.string(k.t["+gHUHA"]),
        usePredicate: () => hp.A.isDeveloper,
        buildLayout: () => [SB, hU, Sp],
    });
var Sz = n(682348),
    SH = n(977556),
    SY = n(751075),
    SW = n(843402);
let SK = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function SZ() {
    let e = (0, _.yK)([i7.Ay], () => i7.Ay.getGamesSeen(!1)),
        t = (0, _.bG)([i7.Ay], () => SK(...i7.Ay.getOverrides()));
    I.useEffect(() => {
        if (e7.isPlatformEmbedded) return ((0, SW.a2)(), SW.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = I.useMemo(
        () =>
            e.reduce((e, t) => ((0, SH.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function Sq(e) {
    let { gameHistory: t } = SZ();
    return {
        namedGames: I.useMemo(
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
function SQ(e) {
    let { namedGames: t, totalCount: n } = Sq(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function SJ() {
    let { namedGames: e } = Sq(2),
        [t, n] = I.useMemo(() => e.map((e) => e.id), [e]);
    I.useEffect(() => {
        EN.Ay.fetchApplications([t, n].filter(ic.Vq));
    }, [t, n]);
    let [i, l] = (0, _.yK)([i5.A], () => [t, n].map(i5.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, x.jsx)(lt.A, { game: i, size: lt.M.MEDIUM_LARGE }), shape: SY.e.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, x.jsx)(lt.A, { game: l, size: lt.M.MEDIUM }), shape: SY.e.ROUNDED } : null,
          };
}
let S$ = (0, S.AK)(T.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = SQ(2);
            return k.intl.format(k.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = SJ();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: T.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, _.bG)([i7.Ay], () => i7.Ay.getGamesSeen(!1).some((e) => !(0, SH.n1)(e))) && (0, nI.xl)(),
    }),
    S0 = (0, S.gN)(T.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [S$] });
var S1 = n(533440),
    S2 = n(406535),
    S3 = n(966756);
let S4 = (0, S.zD)(T.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => k.intl.string(S3.default.A0FVCV),
        useSubtitle: () => k.intl.string(S3.default.vHX6RG),
        useValue: V.hV.useSetting,
        setValue: function (e) {
            (V.hV.updateSetting(e),
                tc.default.track(b.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S2.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    S5 = (0, oM.mj)({
        kind: "user",
        name: "2026-11-notify-friends-on-custom-status-update",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    S6 = (0, S.zD)(T.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ON_CUSTOM_STATUS_UPDATE_SETTING, {
        useTitle: () => k.intl.string(S3.default.AOUyrx),
        useSubtitle: () => k.intl.string(S3.default.bZ094C),
        useValue: V.Eb.useSetting,
        setValue: function (e) {
            (V.Eb.updateSetting(e),
                tc.default.track(b.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S2.Y.ACCOUNT,
                    notify_friends_on_custom_status_update: e,
                }));
        },
        usePredicate: () => S5.useConfig({ location: "NotifyFriendsOnCustomStatusUpdateSetting" }).enabled,
    }),
    S8 = (0, S.zD)(T.X.ACTIVITY_PRIVACY_NOTIFY_SERVER_MEMBERS_ON_GO_LIVE_SETTING, {
        useTitle: () => k.intl.string(S3.default["9l5u6A"]),
        useSubtitle: () => k.intl.string(S3.default.QcmgBF),
        useValue: V.pR.useSetting,
        setValue: function (e) {
            (V.pR.updateSetting(e),
                tc.default.track(b.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S2.Y.ACCOUNT,
                    notify_server_members_on_go_live: e,
                }));
        },
    }),
    S7 = (0, S.zZ)(T.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => k.intl.string(k.t.WmsPis),
        useSearchTerms: () => [k.intl.string(k.t["8ka8li"])],
        buildLayout: () => [S1._, S4, S6, S8, S0],
    }),
    S9 = (0, S.AK)(T.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => k.intl.string(k.t.J0SFL2),
        destinationKey: T.X.DATA_AND_PRIVACY_PANEL,
    }),
    Te = (0, S.gN)(T.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [S9] });
var Tt = n(365258);
let Tn = (0, S.Qx)(T.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => k.intl.string(S3.default["/LHVbt"]),
    useSubtitle: () => k.intl.string(k.t.L5IdzV),
    useOptions: function () {
        return [
            { value: e$.Qd.ACTIVITY_STATUS_OFF, name: k.intl.string(S3.default.m3oL7Q) },
            { value: e$.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: k.intl.string(S3.default["5+lnTA"]) },
            { value: e$.Qd.ACTIVITY_STATUS_ON, name: k.intl.string(S3.default["egr+VZ"]) },
        ];
    },
    useValue: V._Z.useSetting,
    setValue: function (e) {
        let t = V._Z.getSetting();
        V._Z.updateSetting(e);
        let i = (0, Tt.g8)(t, e);
        if (null == i) return;
        let l = (0, Tt.Xc)(e);
        (0, lI.mM)(async () => {
            let { default: e } = await Promise.all([n.e(462955), n.e(562041), n.e(341996)]).then(n.bind(n, 32167));
            return (t) =>
                (0, x.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: l });
        });
    },
});
var Ti = n(498642),
    Tl = n(573435),
    Ts = n(260509),
    Tr = n(771810);
function Ta(e) {
    let { guild: t, size: n } = e,
        i = (0, Ts.Iv)(t, n, !1, !0),
        l = (0, Ts.Rb)(t);
    return null != i
        ? (0, x.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, x.jsx)("div", {
              className: Tr.F,
              children: (0, x.jsx)(n8.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "body-md/semibold" : "footnote/semibold",
                  children: l,
              }),
          });
}
function To(e) {
    let { guild: t, size: n } = e;
    return (0, x.jsx)(Tl.Ay, {
        className: Tr.z,
        mask: Tl.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, x.jsx)(Ta, { guild: t, size: n }),
    });
}
var Tu =
    (((m = {}).SERVER_ORDER = "server-order"),
    (m.RECENTLY_JOINED = "recently-joined"),
    (m.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (m.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    m);
let Td = {
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
var Tc = n(618118);
function Tg(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i, rowRef: l } = e,
        s = (0, _.bG)([Ti.A], () => Ti.A.getMemberCount(t.id));
    return (0, x.jsxs)(Q.B, {
        as: "li",
        ref: l,
        tabIndex: null != l ? -1 : void 0,
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, x.jsx)("div", { className: Tc.FO, children: (0, x.jsx)(To, { guild: t, size: 48 }) }),
            (0, x.jsx)("div", {
                className: Tc.QH,
                children: (0, x.jsx)(nt.d, {
                    label: t.name,
                    description: k.intl.format(S3.default.cI3aQA, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
function Tm(e) {
    let { overflowGuilds: t } = e,
        n = (0, _.bG)([uE.default], () => uE.default.locale),
        i = t.length,
        l = i - 3,
        s = (0, I.useMemo)(() => {
            let e = t.slice(0, 3).map((e) => e.name);
            return (
                l > 0 && e.push(k.intl.formatToPlainString(S3.default.bAzBIf, { numServers: l })),
                new Intl.ListFormat(n).format(e)
            );
        }, [t, l, n]);
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsx)(SY.q, {
                icons: {
                    frontIcon: { icon: (0, x.jsx)(Ta, { guild: t[0], size: 48 }), shape: SY.e.SQUIRCLE },
                    backIcon:
                        null != t[1] ? { icon: (0, x.jsx)(Ta, { guild: t[1], size: 48 }), shape: SY.e.SQUIRCLE } : null,
                },
            }),
            (0, x.jsxs)("div", {
                className: Tc.yW,
                children: [
                    (0, x.jsx)(n8.E, {
                        variant: "body-md/semibold",
                        className: Tc.Xc,
                        children: k.intl.format(S3.default.MEMaup, { count: i }),
                    }),
                    (0, x.jsx)(n8.E, { variant: "body-sm/normal", color: "text-muted", className: Tc.Xc, children: s }),
                ],
            }),
        ],
    });
}
function TA() {
    return (0, x.jsx)("div", {
        className: Tc.yW,
        children: (0, x.jsx)(n8.E, {
            variant: "body-md/semibold",
            className: Tc.Xc,
            children: k.intl.string(S3.default.BRjBVV),
        }),
    });
}
function TE(e) {
    let { isExpanded: t, overflowGuilds: n, onToggle: i } = e,
        l = t ? k.intl.string(S3.default.BRjBVV) : k.intl.formatToPlainString(S3.default.MEMaup, { count: n.length });
    return (0, x.jsxs)(Q.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            t ? (0, x.jsx)(TA, {}) : (0, x.jsx)(Tm, { overflowGuilds: n }),
            (0, x.jsx)(lm.K, {
                variant: "secondary",
                size: "md",
                icon: t ? Ex.ChevronSmallUpIcon : mQ.ChevronSmallDownIcon,
                "aria-label": l,
                "aria-expanded": t,
                onClick: i,
            }),
        ],
    });
}
function Th(e) {
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
                [i, l] = (0, I.useState)(null),
                s = i === n,
                r = "" === n && t.length > 10,
                a = r && !s ? t.slice(0, 10) : t,
                o = r ? t.slice(10) : [],
                u = (0, I.useRef)(null),
                d = (0, I.useRef)(!1);
            return (
                (0, I.useEffect)(() => {
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
    return (0, x.jsxs)("ul", {
        className: Tc.X1,
        id: i,
        "aria-label": k.intl.string(k.t["7hB4kg"]),
        children: [
            0 === t.length &&
                (0, x.jsx)("div", {
                    className: Tc.pb,
                    children: (0, x.jsx)(n8.E, {
                        className: Tc.R$,
                        variant: "body-lg/medium",
                        children: k.intl.string(k.t["Xe+fJM"]),
                    }),
                }),
            o.map((e, t) =>
                (0, x.jsx)(
                    Tg,
                    {
                        guild: e,
                        rowRef: r && a && 10 === t ? c : void 0,
                        isActivityRestricted: l(e.id),
                        onToggleActivityRestrictedGuild: s,
                    },
                    e.id,
                ),
            ),
            a && (0, x.jsx)(TE, { isExpanded: r, overflowGuilds: u, onToggle: d }),
        ],
    });
}
let TS = function (e) {
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
            let [e, t] = (0, I.useState)(""),
                [n, i] = (0, I.useState)("server-order"),
                l = (0, _.bG)([mE.Ay], () => mE.Ay.getFlattenedGuildIds()),
                s = (0, _.bG)([lD.A], () => lD.A.getGuilds()),
                r = l.map((e) => s[e]).filter(Boolean),
                a = V.Pw.useSetting(),
                [o, u] = (0, I.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await V.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, I.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [g, m] = (0, I.useState)(() => Td[n](r, a)),
                A = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(Td[e](r, a)), i(e));
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
        m = (0, I.useId)(),
        A = (0, I.useRef)(null),
        E = (0, I.useMemo)(
            () => [
                { id: Tu.SERVER_ORDER, label: k.intl.string(k.t.STMPJ2), value: Tu.SERVER_ORDER },
                { id: Tu.RECENTLY_JOINED, label: k.intl.string(k.t.CbaapP), value: Tu.RECENTLY_JOINED },
                { id: Tu.ACTIVITY_SHARING_ON, label: k.intl.string(S3.default.ZI51JZ), value: Tu.ACTIVITY_SHARING_ON },
                {
                    id: Tu.ACTIVITY_SHARING_OFF,
                    label: k.intl.string(S3.default["+kxafn"]),
                    value: Tu.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        h = E.find((e) => e.value === s)?.label ?? "";
    return (0, x.jsxs)("div", {
        className: Tc.iE,
        children: [
            t,
            (0, x.jsxs)("div", {
                className: Tc.N1,
                children: [
                    (0, x.jsx)(SN.I, {
                        query: i,
                        onChange: l,
                        onClear: function () {
                            (tc.default.track(b.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                l(""));
                        },
                        onFocus: () =>
                            tc.default.track(b.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            tc.default.track(b.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        placeholder: k.intl.string(k.t["H+nRYw"]),
                        "aria-label": k.intl.string(k.t["5h0QOP"]),
                        inputProps: { "aria-controls": m, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, x.jsxs)("div", {
                            className: Tc.gO,
                            children: [
                                (0, x.jsx)(ap.Y, {
                                    targetElementRef: A,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, x.jsx)(m_.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": k.intl.string(k.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, x.jsx)(tl.rX, {
                                                children: E.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, x.jsx)(
                                                        tl.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: s === i,
                                                            action: () => {
                                                                (tc.default.track(
                                                                    b.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
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
                                        (0, x.jsxs)(n7.D, {
                                            ...e,
                                            innerRef: A,
                                            className: Tc.Ku,
                                            children: [
                                                (0, x.jsx)(n8.E, {
                                                    variant: "body-sm/medium",
                                                    color: "text-subtle",
                                                    children: h,
                                                }),
                                                (0, x.jsx)(mQ.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: n4.A.colors.TEXT_SUBTLE,
                                                }),
                                            ],
                                        }),
                                }),
                                (0, x.jsx)(Sb.Q, {
                                    variant: "primary",
                                    textVariant: "body-sm/medium",
                                    onClick: o,
                                    text: a ? k.intl.string(k.t["7lxcLO"]) : k.intl.string(k.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, x.jsx)(lh.A, {
                "aria-live": "polite",
                role: "region",
                children: k.intl.format(S3.default.EvzDff, { count: n.length }),
            }),
            (0, x.jsx)(Th, {
                guilds: n,
                searchQuery: i,
                listId: m,
                isActivityRestrictedForGuild: d,
                onToggleActivityRestrictedGuild: u,
            }),
        ],
    });
};
var TT = n(68322);
let Tf = (0, S.E2)(T.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [k.intl.string(S3.default["/LHVbt"])],
        Component: function () {
            let e = V.tz.useSetting()
                ? null
                : (0, x.jsx)("div", {
                      className: TT.l,
                      children: (0, x.jsx)(iQ.w, {
                          type: "warning",
                          message: k.intl.string(S3.default["xxI0/W"]),
                          role: "status",
                      }),
                  });
            return (0, x.jsx)(TS, { notice: e });
        },
    }),
    Tp = (0, S.zZ)(T.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => k.intl.string(k.t.bwqjL9),
        buildLayout: () => [Tn, Tf, Te],
    }),
    Tx = (0, S.zD)(T.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => k.intl.string(S3.default.khuuzv),
        useSubtitle: () => k.intl.string(S3.default["8EWsJ8"]),
        useValue: () => V.e.useSetting(),
        setValue: (e) => V.e.updateSetting(e),
    }),
    TI = (0, S.E2)(T.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, x.jsx)(n8.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: k.intl.format(k.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, x.jsx)(
                            n8.E,
                            { tag: "span", variant: "body-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    T_ = (0, S.zD)(T.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => k.intl.string(S3.default.Uz5Ipi),
        useSubtitle: () => k.intl.string(S3.default.CZI2Gb),
        useValue: () => V.UM.useSetting(),
        setValue: (e) => V.UM.updateSetting(e),
    }),
    Tb = (0, S.zZ)(T.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => k.intl.string(S3.default["89YBr5"]),
        useSubtitle: () => k.intl.string(k.t.uGDpgH),
        buildLayout: () => [Tx, T_, TI],
        useSearchTerms: () => [k.intl.string(k.t.VOszPA)],
    }),
    TN = (0, S.t_)(T.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => k.intl.string(k.t.Cq98yL),
        buildLayout: () => [S7, Tp, Tb],
    }),
    TC = (0, S.i4)(T.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.Cq98yL),
        icon: Sz.UserPlatformIcon,
        buildLayout: () => [TN],
    });
var Ty = n(712440),
    Tv = n(361328);
let Tj = (0, S.E2)(T.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Tv.Ay,
    useSearchTerms: () => [k.intl.string(k.t["f6kk+r"])],
});
var TO = n(478016),
    TD = n(396478),
    TR = n(77468),
    TL = n(289498),
    TP = n(573648),
    TG = n(643068),
    TM = n(370480),
    TU = n(522978);
let TV = new Set([b.fg2.XBOX, b.fg2.PLAYSTATION, b.fg2.PLAYSTATION_STAGING, b.fg2.CRUNCHYROLL]);
var Tk = n(169869),
    Tw = n(152578),
    TF = n(733110),
    TB = n(744813),
    TX = n(757036),
    Tz = n(555837),
    TH = n(43990),
    TY = n(241524),
    TW = n(51965),
    TK = n(377368),
    TZ = n(631368),
    Tq = n(212739),
    TQ = n(417869),
    TJ = n(337091),
    T$ = n(831768),
    T0 = n(660594);
function T1() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, TZ.$)()),
            (t = (0, Tq.O)()),
            (l = null != (i = (0, _.bG)([TQ.A], () => TQ.A.getAccount(null, b.fg2.XBOX))) && !i.revoked),
            e === TZ.C.NONE || t
                ? { variant: TZ.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === TZ.C.NO_ACCESS && !l }),
        { analyticsLocations: a } = (0, eH.Ay)(tw.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, TK.yW)(a),
        u = (0, TY.A)("(max-width: 485px)");
    if (s === TZ.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (s) {
        case TZ.C.HAS_ACCESS:
        case TZ.C.BLOCK_CLAIM:
            ((c = k.intl.string(T$.default["7PdsMK"])),
                (g = (0, x.jsx)(TW.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: k.intl.string(T$.default.CubeLC),
                    onClick: () => {
                        (0, lI.mM)(async () => {
                            let { default: e } = await Promise.all([n.e(878140), n.e(532203)]).then(n.bind(n, 15654));
                            return (t) => (0, x.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case TZ.C.NO_ACCESS:
            ((c = k.intl.string(T$.default.NwkRTZ)),
                (g = (0, x.jsx)(tH.A, {
                    defaultTextOverride: k.intl.string(T$.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: t4.pe.TIER_2,
                })));
            break;
        default:
            (0, ic.xb)(s);
    }
    return (0, x.jsxs)(eH.f5, {
        value: a,
        children: [
            (0, x.jsxs)("div", {
                className: T0.bV,
                children: [
                    (0, x.jsx)(C.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: k.intl.string(k.t.NG1e6l),
                    }),
                    (0, x.jsx)(ag.NitroWheelIcon, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, x.jsx)(TH.N, {
                theme: b.NJ8.DARK,
                children: (e) =>
                    (0, x.jsx)("div", {
                        className: e,
                        children: (0, x.jsxs)("div", {
                            className: T0.Nr,
                            children: [
                                (0, x.jsxs)("div", {
                                    className: T0.Tp,
                                    children: [
                                        (0, x.jsx)("div", {
                                            className: T0.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, x.jsx)("div", { className: T0.$h }),
                                        (0, x.jsx)("div", { className: T0.Rv }),
                                        (0, x.jsx)("div", { className: T0.Lw }),
                                    ],
                                }),
                                (0, x.jsxs)("div", {
                                    className: T0.Mn,
                                    children: [
                                        (0, x.jsxs)("div", {
                                            className: T0.mY,
                                            children: [
                                                (0, x.jsx)("img", {
                                                    className: T0.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, x.jsx)(n8.E, {
                                                    variant: "body-lg/semibold",
                                                    color: "text-strong",
                                                    className: T0.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, x.jsx)("div", { className: T0.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, x.jsxs)(x.Fragment, {
                                        children: [
                                            (0, x.jsx)("div", { className: T0.yF }),
                                            (0, x.jsxs)("div", {
                                                className: T0.sQ,
                                                children: [
                                                    (0, x.jsx)(uz.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n4.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, x.jsx)(n8.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-default",
                                                        children: k.intl.format(TJ.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(TK.Hx.CONNECT),
                                                                    (0, TU.A)({
                                                                        platformType: b.fg2.XBOX,
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
var T2 = n(201718),
    T3 = n(321078),
    T4 = n(672130),
    T5 = n(379848),
    T6 = n(688901);
function T8(e) {
    let { markAsDismissed: t } = e;
    return (
        I.useEffect(() => t(AC.i.AUTO_DISMISS), [t]),
        (0, x.jsx)("div", { className: T6.Ad, children: (0, x.jsx)(AY.E, { type: "new", variant: "primary" }) })
    );
}
function T7(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, x.jsxs)("div", {
        className: T6.kL,
        children: [
            i,
            (0, x.jsxs)("div", {
                className: T6.FS,
                children: [
                    (0, x.jsxs)("div", {
                        className: T6.TK,
                        children: [
                            (0, x.jsx)(T5.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, x.jsx)(T8, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, x.jsx)(n8.E, { variant: "body-md/semibold", children: t }),
                        ],
                    }),
                    (0, x.jsx)(n8.E, { variant: "body-xs/normal", children: n }),
                ],
            }),
            (0, x.jsx)(O.$, { text: k.intl.string(k.t.vD60Pv), onClick: s }),
        ],
    });
}
function T9() {
    let e = ey.A.getArticleURL(b.MVz.PS_CONNECTION);
    return (0, x.jsx)(T7, {
        title: k.intl.string(k.t.v20wwm),
        body: k.intl.format(k.t.lTZBit, { help_article: e }),
        img: (0, x.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eh.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, TU.A)({ platformType: b.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let fe = "/assets/9df988a227916145.png";
function ft() {
    return (0, x.jsx)(T7, {
        title: k.intl.string(TJ.default["9cLtDI"]),
        body: k.intl.format(TJ.default["D+kUbg"], { learnMoreLink: ey.A.getArticleURL(b.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, x.jsx)("img", { src: fe, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eh.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, TU.A)({ platformType: b.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function fn() {
    let e = ey.A.getArticleURL(b.MVz.XBOX_CONNECTION);
    return (0, x.jsx)(T7, {
        title: k.intl.string(k.t["2okkZV"]),
        body: k.intl.format(k.t.OnERSS, { help_article: e }),
        img: (0, x.jsx)("img", { src: fe, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eh.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, TU.A)({ platformType: b.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var fi = n(783419),
    fl = n(534952),
    fs = n(705799),
    fr = n(247259);
function fa(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, _.cf)(
            [TQ.A],
            () => ({
                isJoining: TQ.A.isJoining(n.id),
                joinErrorMessage:
                    "" === TQ.A.joinErrorMessage(n.id) ? k.intl.string(k.t.j2d6Km) : TQ.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== TQ.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, _.bG)([lD.A], () => lD.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, x.jsx)(O.$, {
                size: "sm",
                onClick: function () {
                    TR.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? k.intl.string(k.t.RXvQQu) : k.intl.string(k.t.XpeFYr),
            })),
        (0, x.jsxs)("div", {
            className: fr.iA,
            children: [
                (0, x.jsxs)("div", {
                    className: fr.XX,
                    children: [
                        (0, x.jsx)(my.Ay, { size: my.Ay.Sizes.SMALL, guild: n.guild, className: fr.$f }),
                        (0, x.jsxs)("div", {
                            className: fr.Vn,
                            children: [
                                (0, x.jsx)(n8.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, x.jsx)(ng.Anchor, {
                                    href: TP.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, x.jsx)(n8.E, {
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
                    (0, x.jsx)(n8.E, {
                        variant: "body-xs/normal",
                        color: "text-feedback-critical",
                        className: fr.R,
                        children: l,
                    }),
            ],
        })
    );
}
function fo(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s = ((t = l.id), (n = (0, Tz.G)()), (i = (0, TX.L)(t4.PremiumTypes.TIER_2)), !n && !i && !/^\d+$/.test(t));
    return l.type === b.fg2.XBOX && s
        ? (0, x.jsx)(ft, {})
        : l.twoWayLink
          ? null
          : l.type === b.fg2.XBOX
            ? (0, x.jsx)(fn, {})
            : l.type === b.fg2.PLAYSTATION
              ? (0, x.jsx)(T9, {})
              : null;
}
function fu(e) {
    let t,
        n,
        i,
        l,
        s,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = I.useState(u.friendSync),
        [A, E] = I.useState(u.visibility),
        [h, S] = I.useState(u.metadataVisibility),
        [T, f] = I.useState(u.showActivity),
        [p, _] = I.useState(null),
        [N, C] = I.useState(null),
        [y, v] = I.useState(!1),
        [j, D] = I.useState([]),
        R = (0, TG.ML)(u.type),
        L = TP.A.get(R);
    I.useEffect(() => {
        (m(u.friendSync), E(u.visibility), S(u.metadataVisibility), f(u.showActivity));
    }, [u]);
    let P = { inProgressVisibility: p, inProgressMetadataVisibility: N },
        G = I.useRef(P);
    return (
        I.useEffect(() => {
            G.current = P;
        }),
        I.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = G.current;
            (null != e && (E(e), TR.A.setVisibility(u.type, u.id, e), _(null)),
                null != t && (S(t), TR.A.setMetadataVisibility(u.type, u.id, t), C(null)));
        }, [u]),
        (0, x.jsxs)("div", {
            className: fr.FI,
            children: [
                ((t = TP.A.get(u.type)),
                (n = TP.A.get(R)),
                (i = "1" === (u.metadata ?? {})[fi.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === b.fg2.TWITTER &&
                    i &&
                    (l = (0, x.jsx)(lE.m, {
                        text: k.intl.string(k.t.Jebrww),
                        children: (0, x.jsx)(Tw.A, {
                            color: n4.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, x.jsx)(TO.CheckmarkSmallIcon, {
                                size: "xs",
                                color: n4.A.unsafe_rawColors.WHITE.css,
                            }),
                        }),
                    })),
                (0, x.jsxs)("div", {
                    className: fr.Il,
                    children: [
                        (0, x.jsx)("img", {
                            alt: n.name,
                            className: fr.gj,
                            src: (0, gc.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, x.jsxs)("div", {
                            children: [
                                (0, x.jsxs)("div", {
                                    className: fr.$p,
                                    children: [
                                        (0, x.jsx)(n8.E, {
                                            color: "text-strong",
                                            variant: "body-md/semibold",
                                            className: fr.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, x.jsx)("div", { className: fr.cG, children: l }),
                                    ],
                                }),
                                (0, x.jsx)(n8.E, {
                                    variant: "body-xs/normal",
                                    color: "text-default",
                                    className: fr.Au,
                                    children:
                                        null != n.migrationData
                                            ? k.intl.format(fs.default.Glhokn, { platformName: n.name })
                                            : n.name,
                                }),
                            ],
                        }),
                        (0, x.jsx)(n7.D, {
                            className: fr.uH,
                            onClick: function () {
                                let e = TP.A.get(u.type);
                                (0, lI.qf)((t) =>
                                    (0, x.jsx)(lx.a, {
                                        title: k.intl.formatToPlainString(k.t.U5x12f, { name: e.name }),
                                        subtitle: k.intl.format(k.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: k.intl.string(k.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: k.intl.string(k.t.bsbMVz),
                                                onClick: () => {
                                                    (o(), t.onClose());
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            TV.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, x.jsx)(sn.A, {
                                                children: k.intl.format(k.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": k.intl.string(k.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, x.jsx)(dc.XSmallIcon, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, x.jsx)(fo, { account: u }),
                (function (e) {
                    if (e.revoked) return null;
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, TM.An)(t[fi.pK.CREATED_AT], c);
                    switch (e.type) {
                        case b.fg2.REDDIT:
                            n = (0, Tk.xE)(t, fr.Nz);
                            break;
                        case b.fg2.STEAM:
                            n = (0, Tk.dy)(t, fr.Nz);
                            break;
                        case b.fg2.LETTERBOXD:
                            n = (0, Tk.uq)(t, fr.Nz);
                            break;
                        case b.fg2.BLUESKY:
                        case b.fg2.TWITTER:
                        case b.fg2.MASTODON:
                            n = (0, Tk.ED)(t, fr.Nz);
                            break;
                        case b.fg2.EBAY:
                            n = (0, Tk.ub)(t, fr.Nz);
                            break;
                        case b.fg2.PAYPAL:
                            n = (0, Tk.gZ)(t, fr.Nz);
                            break;
                        case b.fg2.TIKTOK:
                            n = (0, Tk.HU)(t, fr.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, x.jsx)(
                                n8.E,
                                {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    className: fr.M4,
                                    children: k.intl.format(k.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = j.includes(e.id),
                        s = k.intl.string(k.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== TP.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, x.jsx)(
                                    "div",
                                    {
                                        className: fr.Z3,
                                        children: (0, x.jsx)(AY.E, { type: "new", variant: "primary" }),
                                    },
                                    "badge",
                                ),
                                (0, x.jsx)(
                                    n8.E,
                                    {
                                        variant: "body-xs/normal",
                                        className: fr.vt,
                                        children: k.intl.format(k.t.Up2ni7, {
                                            helpdeskUrl: ey.A.getArticleURL(b.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = k.intl.string(k.t["LVh3/5"])));
                    return (
                        l && (s = k.intl.string(k.t.i4jeWR)),
                        n.push(
                            (0, x.jsx)(
                                "div",
                                {
                                    className: fr.jy,
                                    children: (0, x.jsx)(O.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: y,
                                        disabled: l,
                                        "aria-label": k.intl.string(k.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  (v(!0),
                                                      TR.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              (j.push(e.id), D(j), v(!1));
                                                          }, 2e3);
                                                      }));
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, x.jsx)("div", { className: fr.tJ, children: n })
                    );
                })(u),
                (b.txh.has(u.type) &&
                    (s = (0, x.jsx)(nt.d, {
                        label: k.intl.string(k.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), TR.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                b.ewM.has(u.type) &&
                    (r = (0, x.jsx)(nt.d, {
                        label: k.intl.format(k.t["6u6J0q"], { platform: L.name }),
                        checked: T,
                        onChange: function (e) {
                            (f(e), TR.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                TP.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, x.jsx)(nt.d, {
                        label: k.intl.string(k.t.FYKGsL),
                        checked: 1 === h,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (C(n), (0, TU.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (S(n), TR.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, x.jsxs)("div", {
                    className: fr.HZ,
                    children: [
                        (0, x.jsx)(nt.d, {
                            label: k.intl.string(k.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (_(n), (0, TU.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (E(n), TR.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, x.jsx)(lo.c, {});
                })(),
                u.revoked
                    ? (0, x.jsx)(iQ.w, {
                          type: "info",
                          message: k.intl.format(k.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, TU.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                          role: "none",
                      })
                    : u.integrations.length > 0
                      ? (0, x.jsx)(lg.D, {
                            label: k.intl.string(k.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, x.jsx)(fa, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, x.jsx)(TB.A, { partner: u.type }),
            ],
        })
    );
}
function fd(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, x.jsxs)("div", {
              className: fr.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = U.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, x.jsxs)("div", {
                          className: fr.Il,
                          children: [
                              (0, x.jsx)("img", { alt: n.name, className: iA()(fr.gj, fr.sN), src: i }),
                              (0, x.jsxs)("div", {
                                  children: [
                                      (0, x.jsx)("div", {
                                          className: fr.$p,
                                          children: (0, x.jsx)(n8.E, {
                                              color: "text-strong",
                                              variant: "body-md/semibold",
                                              className: fr.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, x.jsx)(n8.E, {
                                          variant: "body-xs/normal",
                                          color: "text-strong",
                                          className: fr.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, x.jsx)(n7.D, {
                                  className: fr.uH,
                                  onClick: () =>
                                      (0, Tv.d1)(n, t.scopes, () => {
                                          Ty.A.delete(t.id);
                                      }),
                                  "aria-label": k.intl.string(k.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, x.jsx)(dc.XSmallIcon, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, x.jsx)("div", {
                      className: fr.HZ,
                      children: (0, x.jsx)(nt.d, {
                          label: k.intl.string(k.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              T2.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function fc() {
    let e = (0, TG.gn)(),
        t = (0, i6.A)((0, fl.Gl)());
    return (0, x.jsxs)("div", {
        className: fr.lA,
        children: [
            t.map((e) => null != e && (0, x.jsx)(T4.A, { application: e, innerClassName: fr.U$ }, e.id)),
            e.map((e) =>
                (0, x.jsx)(
                    TL.A,
                    { type: e.type, innerClassName: fr.U$, location: tw.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function fg(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = I.useMemo(() => i.filter((e) => TP.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, x.jsx)(oX.y, { type: oX.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, x.jsx)(TD.pp, {
                    theme: r,
                    className: fr.p$,
                    children: (0, x.jsx)(TD.SG, {
                        note: k.intl.string(k.t.WenGZ2),
                        children: k.intl.string(k.t.aoLS84),
                    }),
                })
              : (0, x.jsxs)(x.Fragment, {
                    children: [
                        (0, x.jsx)(C.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            children: k.intl.format(k.t.AioIGb, { count: l.length + o.length }),
                        }),
                        l.map((e, t) =>
                            (0, x.jsx)(
                                fd,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, x.jsx)(
                                fu,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            TR.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, x.jsx)("div", { className: fr.V, children: t })
    );
}
let fm = (0, S.E2)(T.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, x.jsx)(lg.D, { label: k.intl.string(k.t["t+aGse"]), children: (0, x.jsx)(fc, {}) });
        },
        useSearchTerms: () => [
            k.intl.string(k.t.Zhcj9X),
            k.intl.string(k.t.QqTz8b),
            k.intl.string(k.t["+/hZM/"]),
            k.intl.string(k.t.bsbMVz),
            k.intl.string(k.t.f7yOAX),
            k.intl.string(k.t.FYKGsL),
            k.intl.string(k.t["+KCMSi"]),
        ],
    }),
    fA = (0, S.E2)(T.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, _.bG)([td.A], () => td.A.hidePersonalInformation),
                t = (0, _.bG)([TQ.A], () => TQ.A.isFetching()),
                n = (0, _.bG)([TQ.A], () => TQ.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, _.cf)([TF.A], () => ({
                    authorizedAppsFetchState: TF.A.getFetchState(),
                    authorizedApps: TF.A.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, T3.A)(sT.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, cD.Ay)(),
                o = (0, _.bG)([uE.default], () => uE.default.locale);
            return (I.useEffect(() => {
                i === TF.FetchState.NOT_FETCHED && Ty.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, x.jsxs)(x.Fragment, {
                      children: [
                          (0, x.jsx)(T1, {}),
                          (0, x.jsx)(fg, {
                              fetching: t || s || (r.length > 0 && i !== TF.FetchState.FETCHED),
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
            TR.A.fetch();
        },
        useSearchTerms: () => [
            k.intl.string(k.t["+/hZM/"]),
            k.intl.string(k.t.bsbMVz),
            k.intl.string(k.t.f7yOAX),
            k.intl.string(k.t.FYKGsL),
            k.intl.string(k.t["+KCMSi"]),
        ],
    }),
    fE = (0, S.zZ)(T.X.CONNECTIONS_CATEGORY, {
        useTitle: () => k.intl.string(k.t["3fe7U5"]),
        useSubtitle: () => k.intl.string(k.t.U22vw6),
        buildLayout: () => [fm, fA],
    }),
    fh = (0, S.zZ)(T.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => k.intl.string(k.t["f6kk+r"]),
        useSubtitle: () => k.intl.string(k.t.G9JfLg),
        buildLayout: () => [Tj],
        initialize: () => (
            Ty.A.fetch(),
            () => {
                Tv.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    fS = (0, S.t_)(T.X.CONNECTED_APPS_PANEL, {
        useTitle: () => k.intl.string(k.t.lrVuZO),
        useObscuredNotice: op.L,
        buildLayout: () => [fE, fh],
    }),
    fT = (0, S.i4)(T.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.lrVuZO),
        icon: Sy.LinkIcon,
        buildLayout: () => [fS],
    });
var ff = n(625657),
    fp = n(592598),
    fx = n(228342),
    fI = n(373954),
    f_ = n(672396);
let fb = fC(null);
function fN() {
    var e;
    let t = fC(fb);
    ((e = fb),
        Z().isEqual(Z().omit(t, "old_enabled"), Z().omit(e, "old_enabled")) ||
            (tc.default.track(b.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (fb = t)));
}
function fC(e) {
    let t = fI.default.getNotificationPositionMode(),
        n = t !== b.G6Q.DISABLED,
        i = ld.Ay.getOverlayKeybind(),
        l = ld.Ay.getOverlayChatKeybind();
    return {
        enabled: fx.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: fp.A.isNotificationDisabled(f_.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, lp.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, lp.dI)(l.shortcut) : null,
        text_opacity_slider: fI.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? fx.default.enabled,
    };
}
var fy = n(237984),
    fv = n(63035);
function fj(e) {
    (e.preventDefault(), e.stopPropagation());
}
function fO(e) {
    let { children: t } = e;
    return (0, x.jsx)("div", { onClick: fj, children: t });
}
function fD(e) {
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
    return (0, x.jsxs)("div", {
        className: iA()(fv.HS, d),
        children: [
            (0, x.jsxs)(SC.s, {
                "aria-label": u,
                onClick: o,
                focusProps: { offset: 4 },
                children: [
                    null != t && (0, x.jsx)("div", { className: fv.x_, children: t }),
                    (0, x.jsxs)("div", {
                        className: fv.rN,
                        children: [
                            null != n && (0, x.jsx)("div", { className: fv.$t, children: n }),
                            (0, x.jsxs)("div", {
                                className: fv.c8,
                                children: [
                                    (0, x.jsx)(n8.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        className: fv.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, x.jsx)(n8.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, x.jsx)(n8.E, {
                                            variant: "footnote/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, x.jsx)("div", { className: fv.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, x.jsx)("div", { className: fv.Om, children: a }),
        ],
    });
}
let fR = (0, S.E2)(T.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, x.jsx)(fD, {
            title: k.intl.string(k.t["z4/l+V"]),
            description: k.intl.string(k.t["3aZq/0"]),
            action: (0, x.jsx)(O.$, {
                variant: "primary",
                text: k.intl.string(k.t.s2nVhG),
                onClick: () => {
                    (0, fy.b)(tw.A.USER_SETTINGS, b.BRT.APP);
                },
            }),
            "aria-label": k.intl.string(k.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [k.intl.string(k.t["z4/l+V"])],
});
var fL = n(273626),
    fP = n(684013),
    fG = n(56562),
    fM = n(311043),
    fU = n(454908),
    fV = n(41984),
    fk = n(918825),
    fw = n(861862),
    fF = n(562519);
let fB = 5 * oy.A.Millis.DAY,
    fX = new fF.A("overlay_survey_timestamps");
function fz(e, t) {
    let i, l;
    ((i = Date.now()),
        (null != (l = Array.from(fX.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < fB) ||
            Array.from(fX.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, lI.mM)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e(914052), n.e(82318)]).then(n.bind(n, 387101));
                return ((i = Date.now()), fX.add(i), (n) => (0, x.jsx)(l, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function fH() {
    (0, li.sL)("overlay-settings");
}
function fY(e) {
    let { className: t, game: n } = e;
    return (0, li.NP)() && null != n && n.elevated
        ? (0, x.jsx)("div", {
              className: t,
              children: (0, x.jsx)(iQ.w, {
                  type: "warning",
                  message: k.intl.format(k.t["LJzl+0"], { helpCenterLink: ey.A.getArticleURL(b.MVz.SYSTEM_SERVICE) }),
                  role: "status",
                  action: { text: k.intl.string(k.t["1iI46O"]), onClick: fH },
              }),
          })
        : null;
}
var fW = n(760751),
    fK = n(9302),
    fZ = n(656513);
let fq = new Set([
    fV.AR.INITIALIZING,
    fV.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    fV.AR.WAITING_FOR_MODULE_TRACKING,
    fV.AR.WAITING_FOR_OVERLAY_OPEN,
    fV.AR.WAITING_FOR_POPOUT_OPEN,
    fV.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    fV.AR.WAITING_FOR_REACT_INITIALIZATION,
    fV.AR.WAITING_FOR_PID_FOCUS,
    fV.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function fQ(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = I.useState(!1);
    return (0, x.jsx)(fZ.N, {
        className: fv.uR,
        collapsibleContent: (0, x.jsx)("div", { className: fv.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, x.jsx)(fD, {
                ...l,
                onClick: (e) => {
                    var n;
                    (r((n = !s)), i?.(n), t?.(e));
                },
                className: iA()(fv.AC, n),
                action: (0, x.jsxs)("div", {
                    className: fv.rc,
                    children: [
                        l.action,
                        s
                            ? (0, x.jsx)(mQ.ChevronSmallDownIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, x.jsx)(ie.ChevronSmallRightIcon, {
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
let fJ = (0, S.E2)(T.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = le();
        (0, fU.I)(e?.id);
        let n = e?.pid,
            i = (0, _.bG)(
                [fw.default],
                () => (null == e || null == n ? null : fw.default.getTrackedGameByPid(n)),
                [e, n],
                i4(),
            ),
            { data: l } = (0, fU.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, _.cf)(
                [fW.A, tg.A, fM.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i7.hw)(e, !1, [fW.A, tg.A, fM.A]),
                [e, i],
            ),
            a = (0, _.bG)(
                [i7.Ay, fW.A, tg.A, fM.A],
                () => (null == e ? null : (0, i7.xU)(e, i7.Ay, fW.A, tg.A, fM.A)),
                [e],
                i4(),
            ),
            [o, u] = I.useState(r),
            [d, c] = I.useState(s),
            [g, m] = I.useState(!1);
        I.useEffect(() => {
            (u(r), c(s));
        }, [r, s]);
        let A = !(0, fK.kA)(),
            E = !(0, fK.T6)(),
            { legacyEnabled: h, oopEnabled: S } = (0, _.cf)([fw.default], () => fw.default.getGlobalEnabledStatus());
        function T(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case fk.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), fL.A.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case fk.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), fL.A.toggleOverlay(e, d, t), (l = !t && o));
                    break;
                case fk.OverlayToggledClientSettingType.LEGACY:
                    (fP.A.setEnabled(t, S), (0, fk.Q)(t, fk.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case fk.OverlayToggledClientSettingType.OOP:
                    (fP.A.setEnabled(h, t), (0, fk.Q)(t, fk.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || l) &&
                fz(
                    i ? fk.OverlayToggledClientSettingType.LEGACY_GAME : fk.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let f = A && E,
            p = !h && !S,
            b = !o && !h && d && !A,
            N = !d && !S && o && !E,
            C = i?.overlayMethod === fV.Ue.Disabled,
            y = i?.state === fV.AR.OVERLAY_RENDERING && !C,
            v = i?.state != null && fq.has(i.state) && !C,
            j = i?.overlayMethod === fV.Ue.OutOfProcess,
            O = i?.overlayMethod === fV.Ue.OutOfProcessLimitedInteraction,
            D = i?.overlayMethod === fV.Ue.Hook,
            R = i?.state === fV.AR.OVERLAY_CRASHED || i?.state === fV.AR.OVERLAY_CRASHED_DISABLED,
            L = !o && !d,
            [P, G] = (function () {
                switch (!0) {
                    case y && j:
                        return [
                            k.intl.format(k.t.hFVBIg, {
                                overlayMethod: k.intl.string(k.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, x.jsx)(
                                        n8.E,
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
                            k.intl.format(k.t.hFVBIg, {
                                overlayMethod: k.intl.string(k.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, x.jsx)(
                                        n8.E,
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
                            k.intl.format(k.t.hFVBIg, {
                                overlayMethod: k.intl.string(k.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, x.jsx)(
                                        n8.E,
                                        { tag: "span", variant: "body-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== fG.aI.BORDERLESS_FULLSCREEN:
                                        return k.intl.string(k.t.mJmbeC);
                                    case E:
                                        return k.intl.string(k.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return k.intl.string(k.t.WiY24u);
                                    case !S:
                                        return k.intl.string(k.t.cAFVsL);
                                    case !(l?.supportsOutOfProcessOverlay ?? !0):
                                        return k.intl.string(k.t.XcGEcs);
                                    default:
                                        return k.intl.string(k.t.bJXH2v);
                                }
                            })(),
                        ];
                    case R:
                        return [k.intl.string(k.t.OFC2aw), null];
                    case f:
                        return [k.intl.string(k.t.m7X4az), null];
                    case p:
                        return [k.intl.string(k.t["9DUS5l"]), null];
                    case L:
                        return [k.intl.string(k.t.nQ9EdJ), null];
                    case b:
                    case N:
                        return [k.intl.string(k.t.VWUn0a), null];
                    case v:
                        if (j) return [k.intl.string(k.t["s8+CFq"]), null];
                        if (D) return [k.intl.string(k.t.JEEdqt), null];
                        if (O) return [k.intl.string(k.t.pzBMwY), null];
                        return [k.intl.string(k.t["2Xhy9k"]), null];
                    case null == i:
                        return [k.intl.string(k.t.vwHPRi), null];
                    case C: {
                        let e = i?.fullscreenType === fG.aI.FULLSCREEN ? k.intl.string(k.t.mJmbeC) : null;
                        return [k.intl.string(k.t.VPW4XY), e];
                    }
                    default:
                        return [k.intl.string(k.t.ONovP5), null];
                }
            })();
        (0, eb.Ay)(() => {
            fL.A.getDetectableGames();
        });
        let [M, U] = I.useMemo(
            () =>
                v
                    ? ["text-muted", n4.A.colors.TEXT_MUTED.css]
                    : y && O
                      ? ["text-feedback-warning", n4.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && j
                        ? ["text-feedback-positive", n4.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && D
                          ? ["text-strong", n4.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", n4.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, O, j, D],
        );
        return null == e
            ? null
            : (0, x.jsxs)(fQ, {
                  onExpand: m,
                  className: g ? fv.tx : void 0,
                  title: (0, x.jsxs)(x.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, x.jsx)(lE.m, {
                                    text: k.intl.string(k.t["4PJP5p"]),
                                    children: (0, x.jsx)(Tw.A, {
                                        size: 16,
                                        color: n4.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, x.jsx)(TO.CheckmarkSmallIcon, {
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
                  header: (0, x.jsxs)(x.Fragment, {
                      children: [
                          y || v
                              ? (0, x.jsx)(dK.ScreenIcon, { size: "xxs", color: U })
                              : (0, x.jsx)("div", { className: fv.W4 }),
                          (0, x.jsx)(n8.E, {
                              variant: "body-xs/semibold",
                              color: M,
                              children: k.intl.string(k.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, x.jsx)(lt.A, { game: t, pid: e?.pid, size: lt.M.MEDIUM }),
                  "aria-label": k.intl.string(k.t["87O5GC"]),
                  action: (0, x.jsx)(fO, {
                      children: (0, x.jsx)(nt.d, {
                          checked: (o && S) || (d && h),
                          disabled: f,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          (fL.A.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o));
                                          break;
                                      case "global":
                                          (fP.A.setEnabled(t, t), (i = !t && h), (l = !t && S));
                                          break;
                                      case "both":
                                          (fP.A.setEnabled(t, t),
                                              fL.A.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && h) || (!t && d)),
                                              (l = (!t && S) || (!t && o)));
                                  }
                                  let s = null;
                                  (i
                                      ? (s =
                                            "game" === n
                                                ? fk.OverlayToggledClientSettingType.LEGACY_GAME
                                                : fk.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? fk.OverlayToggledClientSettingType.OOP_GAME
                                                : fk.OverlayToggledClientSettingType.OOP),
                                      null != s && fz(s, e.id ?? null));
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
                  warning: (0, x.jsx)(fY, { className: fv.Hh, game: e }),
                  children: [
                      (0, x.jsx)(fD, {
                          title: k.intl.string(k.t["7BlVIs"]),
                          description: k.intl.string(k.t.ndgADE),
                          hint: S ? void 0 : k.intl.string(k.t.cAFVsL),
                          "aria-label": k.intl.string(k.t["7BlVIs"]),
                          action: (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(nt.d, {
                                      checked: o && S,
                                      disabled: E,
                                      onChange: (e) => {
                                          e && !S
                                              ? T(e, fk.OverlayToggledClientSettingType.OOP)
                                              : T(e, fk.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, x.jsx)("div", { className: fv.Kz }),
                              ],
                          }),
                      }),
                      (0, x.jsx)(fD, {
                          title: k.intl.string(k.t.BfFpW1),
                          description: k.intl.string(k.t.OzInYk),
                          hint: h ? void 0 : k.intl.string(k.t["3sYHXm"]),
                          "aria-label": k.intl.string(k.t.BfFpW1),
                          action: (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(nt.d, {
                                      checked: d && h,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !h
                                              ? T(e, fk.OverlayToggledClientSettingType.LEGACY)
                                              : T(e, fk.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, x.jsx)("div", { className: fv.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = le();
        return null != e;
    },
    useSearchTerms: () => [k.intl.string(k.t["9cb1Uz"])],
});
var f$ = n(206885);
function f0(e) {
    let { game: t, gameApplication: n } = e,
        i = I.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, _.bG)([i5.A], () => (null != n ? n : i5.A.getApplication(t?.id)), [n, t]);
    return (0, x.jsx)(lt.A, { game: l, pid: i, size: lt.M.SMALL });
}
function f1(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, fU.I)(t?.id);
    let o = (0, _.cf)([i7.Ay, fW.A, tg.A, fM.A], () => (0, i7.xU)(t, i7.Ay, fW.A, tg.A, fM.A)),
        u = (0, _.cf)([fW.A, tg.A, fM.A], () => (0, i7.hw)(t, !1, [fW.A, tg.A, fM.A]), [t]),
        d = l(u),
        [c, g] = I.useState(d);
    return (
        I.useEffect(() => {
            g(d);
        }, [d]),
        (0, x.jsx)(fD, {
            title: t.name,
            icon: (0, x.jsx)(f0, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, x.jsxs)(x.Fragment, {
                children: [
                    (0, x.jsx)(nt.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), s(e, o, u), n && fz(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, x.jsx)("div", { className: fv.Kz }),
                ],
            }),
        })
    );
}
let f2 = (0, S.E2)(T.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = I.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, _.cf)([fw.default], () =>
                    fw.default.getGlobalEnabledStatus(),
                ),
                l = (0, _.yK)([i7.Ay], () => i7.Ay.getGamesSeen(!0)).filter((e) => !(0, SH.n1)(e)),
                s = (0, i6.A)(l.map((e) => e.id)),
                r = !(0, fK.kA)();
            function a(e) {
                fP.A.setEnabled(e, i);
                let t = i7.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, fk.Q)(e, fk.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && fz(fk.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                fL.A.toggleOverlay(t, e, i);
            }
            let u = I.useMemo(
                () =>
                    (0, fK.kA)()
                        ? r
                            ? k.intl.string(k.t.r9jEVw)
                            : k.intl.string(k.t.OzInYk)
                        : k.intl.string(k.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, x.jsx)(fD, {
                      title: k.intl.string(k.t.BfFpW1),
                      description: u,
                      "aria-label": k.intl.string(k.t.BfFpW1),
                      className: fv.dA,
                      action: (0, x.jsxs)(x.Fragment, {
                          children: [
                              (0, x.jsx)(nt.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              f$.O && (0, x.jsx)("div", { className: fv.Kz }),
                          ],
                      }),
                  })
                : (0, x.jsxs)(fQ, {
                      onExpand: t,
                      className: e ? fv.tx : void 0,
                      title: k.intl.string(k.t.BfFpW1),
                      description: u,
                      "aria-label": k.intl.string(k.t.BfFpW1),
                      action: (0, x.jsx)(fO, {
                          children: (0, x.jsx)(nt.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, x.jsx)("div", {
                              className: fv.SC,
                              children: (0, x.jsx)(n8.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-muted",
                                  children: k.intl.string(k.t.FzoWRo),
                              }),
                          }),
                          (0, x.jsx)(y.Ip, {
                              className: fv.XG,
                              children: l.map((e, t) =>
                                  (0, x.jsx)(
                                      f1,
                                      {
                                          rawGame: e,
                                          clientSettingType: fk.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: s[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: k.intl.format(k.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [k.intl.string(k.t.BfFpW1)],
    }),
    f3 = (0, S.E2)(T.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = I.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, _.cf)([fw.default], () =>
                    fw.default.getGlobalEnabledStatus(),
                ),
                l = !(0, fK.T6)(),
                s = (0, _.yK)([i7.Ay], () => i7.Ay.getGamesSeen(!0)).filter((e) => !(0, SH.n1)(e)),
                r = (0, i6.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                fP.A.setEnabled(i, e);
                let l = i7.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, fk.Q)(e, fk.OverlayToggledClientSettingType.OOP, l),
                    t && fz(fk.OverlayToggledClientSettingType.OOP, l));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                fL.A.toggleOverlay(t, e, i);
            }
            let u = I.useMemo(
                () => (f$.O ? (l ? k.intl.string(k.t.C7bLTQ) : k.intl.string(k.t.ndgADE)) : k.intl.string(k.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, x.jsx)(fD, {
                      title: k.intl.string(k.t["7BlVIs"]),
                      description: u,
                      "aria-label": k.intl.string(k.t["7BlVIs"]),
                      className: fv.dA,
                      action: (0, x.jsxs)(x.Fragment, {
                          children: [
                              (0, x.jsx)(nt.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              f$.O && (0, x.jsx)("div", { className: fv.Kz }),
                          ],
                      }),
                  })
                : (0, x.jsxs)(fQ, {
                      onExpand: t,
                      className: e ? fv.tx : void 0,
                      title: k.intl.string(k.t["7BlVIs"]),
                      description: u,
                      "aria-label": k.intl.string(k.t["7BlVIs"]),
                      action: (0, x.jsx)(fO, {
                          children: (0, x.jsx)(nt.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, x.jsx)("div", {
                              className: fv.SC,
                              children: (0, x.jsx)(n8.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-muted",
                                  children: k.intl.string(k.t.FzoWRo),
                              }),
                          }),
                          (0, x.jsx)(y.Ip, {
                              className: fv.XG,
                              children: s.map((e, t) =>
                                  (0, x.jsx)(
                                      f1,
                                      {
                                          rawGame: e,
                                          clientSettingType: fk.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: l,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: k.intl.format(k.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [k.intl.string(k.t["7BlVIs"])],
    }),
    f4 = (0, S.zZ)(T.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => k.intl.string(k.t["/dp6yY"]),
        buildLayout: () => [fJ, f3, f2, fR],
    }),
    f5 = (0, S.zD)(T.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, _.bG)([fI.default], () => !fI.default.disableClickableRegions),
        setValue: (e) => {
            fP.A.setDisableClickableRegions(!e);
        },
        useTitle: () => k.intl.string(k.t["+eFXxq"]),
        useSubtitle: () => k.intl.string(k.t.kivMAp),
    }),
    f6 = (0, S.E2)(T.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, _.bG)([ld.Ay], () => ld.Ay.getOverlayKeybind()),
                t = !(0, fK.kA)(),
                n = !(0, fK.T6)(),
                [i, l] = (0, _.yK)([i7.Ay], () => [i7.Ay.canShowAdminWarning, i7.Ay.getVisibleGame()], []),
                s = (0, li.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, ld.DV)(e?.shortcut ?? []);
            return (0, x.jsx)("div", {
                className: fv.hc,
                children: (0, x.jsxs)("div", {
                    className: fv.eH,
                    children: [
                        (0, x.jsxs)("div", {
                            className: fv.Bu,
                            children: [
                                (0, x.jsx)(n8.E, {
                                    variant: "body-md/medium",
                                    color: "text-strong",
                                    children: k.intl.string(k.t.VsAZcC),
                                }),
                                r &&
                                    (0, x.jsx)(n8.E, {
                                        variant: "body-xs/normal",
                                        color: "text-feedback-warning",
                                        className: fv.y7,
                                        children: k.intl.string(k.t.NsowVa),
                                    }),
                                a &&
                                    (0, x.jsx)(n8.E, {
                                        variant: "body-xs/normal",
                                        color: "text-feedback-warning",
                                        className: fv.y7,
                                        children: k.intl.string(k.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, x.jsx)("div", {
                            className: fv.IH,
                            children: (0, x.jsx)(lf.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (th()(null != e, "Keybind should never be undefined"),
                                        iJ.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [k.intl.string(k.t.VsAZcC)],
    });
var f8 = n(515183),
    f7 = n(682763);
let f9 = (0, S.zD)(T.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = le();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = le();
            return null != e && (0, f8.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = le(),
                n = t?.id,
                i = (0, _.bG)([fp.A], () => fp.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, f8.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = i8.A.getStreamerActiveStreamMetadata()),
                    (l = i9(
                        t,
                        (i =
                            null != (n = i7.Ay.getVisibleGame())
                                ? i7.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: i5.A.getApplication(l) ?? void 0 });
            null != s && (0, f7.x8)(s.id, e);
        },
        useTitle: () => k.intl.string(k.t.wgVQND),
        useSubtitle: () => k.intl.string(k.t["5SsyF5"]),
    }),
    pe = (0, S.zZ)(T.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [f6, f9, f5] });
var pt = n(93465),
    pn = n(222407);
let pi = [
    {
        title: k.t.eVE4LX,
        description: k.t["72WNqk"],
        disabledSetting: pt.M.TEXT_CHAT,
        key: T.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: k.t.oifnSh,
        description: k.t.bgU5r0,
        disabledSetting: pt.M.WELCOME_GENERAL,
        key: T.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: k.t.hqsZJW,
        description: k.t.kHjdqc,
        disabledSetting: pt.M.GO_LIVE_NUDGE,
        key: T.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: k.t.sop3rn,
        description: k.t.pjgffc,
        disabledSetting: pt.M.GAME_ACTIVITY,
        key: T.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: k.t["2QVhbb"],
        description: k.t.wQ4ilB,
        disabledSetting: pt.M.NOW_PLAYING,
        key: T.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: k.t.giM9fA,
        description: k.t.EhAfWj,
        disabledSetting: pt.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: T.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nC.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, _.bG)([fp.A], () => fp.A.isNotificationDisabledBySetting(pt.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function pl(e) {
    return (0, S.zD)(e.key, {
        useTitle: () => k.intl.string(e.title),
        useSubtitle: () => k.intl.string(e.description),
        useValue: () => !(0, _.bG)([fp.A], () => fp.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            (0, pn.I)(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let ps = (0, S.FW)(T.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => k.intl.string(k.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => pi.map(pl),
    }),
    pr = (0, S.zZ)(T.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => k.intl.string(k.t.xOE5bA),
        buildLayout: () => [ps],
    }),
    pa = (0, S.Hn)(T.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => k.intl.string(k.t.dnvZSg),
        useValue: () => (0, _.bG)([fI.default], () => fI.default.getAvatarSizeMode()),
        setValue: (e) => {
            fP.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: k.intl.string(k.t.YcOxtr), value: b.OSZ.LARGE },
            { id: "small", label: k.intl.string(k.t.BKIKqx), value: b.OSZ.SMALL },
        ],
    }),
    po = (0, S.Hn)(T.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => k.intl.string(k.t.J0dpcB),
        useValue: () => (0, _.bG)([fI.default], () => fI.default.getDisplayNameMode()),
        setValue: (e) => {
            fP.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: k.intl.string(k.t.nBmDrT), value: b.pwA.ALWAYS },
            { id: "speaking", label: k.intl.string(k.t["2OvIZY"]), value: b.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: k.intl.string(k.t.ekjlPL), value: b.pwA.NEVER },
        ],
    }),
    pu = (0, S.Hn)(T.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => k.intl.string(k.t.swsWWC),
        useValue: () => (0, _.bG)([fI.default], () => fI.default.getDisplayUserMode()),
        setValue: (e) => {
            fP.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: k.intl.string(k.t.nBmDrT), value: b.f5z.ALWAYS },
            { id: "speaking", label: k.intl.string(k.t["2OvIZY"]), value: b.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var pd = n(391973),
    pc = n(887287),
    pg = n(897720),
    pm = n(83880);
function pA() {
    let e = pc.A.getWidgetByType(b.uss.VOICE_V3);
    if (null == e) return null;
    let t = pm.A.getWidget(e.id);
    return null != t && (0, pg.ZO)(t) ? t : null;
}
n(392164);
let pE = (0, S.sN)(T.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => k.intl.string(k.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? k.intl.string(k.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = pA();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? k.intl.string(k.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = pA();
        null != t &&
            (e < 1
                ? (0, pd.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, pd.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var ph = n(502812),
    pS = n(968898),
    pT = n(288737);
function pf(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new pT.A({
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
        user: new gv.A({ id: l, username: e }),
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
let pp = (0, S.E2)(T.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, _.cf)([fI.default], () => ({
                    avatarSizeMode: fI.default.getAvatarSizeMode(),
                    displayNameMode: fI.default.getDisplayNameMode(),
                    displayUserMode: fI.default.getDisplayUserMode(),
                })),
                [s] = I.useState(() => [
                    pf(k.intl.string(k.t.C0ZDvo), !0, !1),
                    pf(k.intl.string(k.t.iOtj8E), !1, !1, !0),
                    pf(k.intl.string(k.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, _.bG)([pc.A, pm.A], () => {
                    let e = pc.A.getWidgetByType(b.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = pm.A.getWidget(e.id);
                    return null != t && (0, pg.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = pf(t.username)).user = t), e) : null, ...s].filter(ic.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, x.jsx)(TH.N, {
                    theme: b.NJ8.ONYX,
                    children: (e) =>
                        (0, x.jsxs)("div", {
                            className: iA()(fv.Y5, e),
                            children: [
                                (0, x.jsx)("div", {
                                    className: fv.kJ,
                                    children: (0, x.jsx)(ph.DH, {
                                        id: "voice-widget",
                                        title: k.intl.string(k.t.KNJ6Vq),
                                        channel: (0, M.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: b.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: i,
                                        displayUserMode: l,
                                        avatarSizeMode: n,
                                        widget: b.uss.VOICE,
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
                                (0, x.jsxs)("div", {
                                    className: fv.R$,
                                    children: [
                                        (0, x.jsx)(pS.Pl, { children: k.intl.string(k.t.KNJ6Vq) }),
                                        (0, x.jsx)(pS.CS, {}),
                                        (0, x.jsx)(pS.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, x.jsx)("div", { className: fv.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    px = (0, S.zZ)(T.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => k.intl.string(k.t.r1TZfh),
        buildLayout: () => [pp, pa, po, pu, pE],
    });
var pI = n(667419),
    p_ = n(776162),
    pb = n(499466),
    pN = n(934058),
    pC = n(630398),
    py = n(233470),
    pv = n(361729);
let pj = [],
    pO = {
        [b.uss.VOICE_V3]: T.X.OVERLAY_WIDGETS_VOICE,
        [b.uss.QUICK_ACTIONS]: T.X.OVERLAY_WIDGETS_QUICK_ACTIONS,
        [b.uss.NOTIFICATIONS]: T.X.OVERLAY_WIDGETS_NOTIFICATIONS,
        [b.uss.TEXT_CHAT_V3]: T.X.OVERLAY_WIDGETS_CHAT,
        [b.uss.FRIENDS]: T.X.OVERLAY_WIDGETS_FRIENDS,
        [b.uss.ACTIVITY]: T.X.OVERLAY_WIDGETS_ACTIVITY,
        [b.uss.VIDEO]: T.X.OVERLAY_WIDGETS_VIDEO,
        [b.uss.GO_LIVE]: T.X.OVERLAY_WIDGETS_STREAMS,
    };
function pD(e) {
    let t = ny.A[e],
        n = pO[e];
    if (t?.label == null || null == t.description || null == n) return [];
    let { label: i, description: l, predicate: s } = t;
    return (0, S.zD)(n, {
        useTitle: () => i(),
        useSubtitle: () => l(),
        usePredicate: () => ((0, nC.M8)("OverlayWidgetsCategory"), s?.() ?? !0),
        useValue: () => (0, _.bG)([pm.A], () => (0, pI.$e)(e, pm.A), []),
        setValue: (t) => {
            ((0, pI.j$)(), (0, pI.JA)(e, !t));
        },
    });
}
let pR = (0, S.FW)(T.X.OVERLAY_WIDGETS_LIST, {
        variant: "compact",
        useTitle: () => k.intl.string(pv.default["Qk/rJB"]),
        useSubtitle: () => k.intl.string(pv.default.HUjIgu),
        isTitleHiddenVisually: !0,
        buildLayout: () => p_.t3.flatMap(pD),
    }),
    pL = (0, S.E2)(T.X.OVERLAY_WIDGETS_APPS, {
        Component: function () {
            let e = (0, _.bG)([pN.A], () => pN.A.getOwnedProjects()),
                t = (0, pb.TW)("overlay_settings_conjure_apps"),
                n = (0, _.bG)([pN.A], () => pN.A.getServerProjects());
            (I.useEffect(() => {
                t && (0, py.listProjects)();
            }, [t]),
                (0, pC.A)({ refetchOnMount: !0 }));
            let i = t ? e : pj;
            return 0 === i.length && 0 === n.length
                ? null
                : (0, x.jsxs)(Q.B, {
                      gap: 16,
                      children: [
                          i.length > 0
                              ? (0, x.jsxs)(Q.B, {
                                    gap: 8,
                                    children: [
                                        (0, x.jsx)(C.D, {
                                            variant: "heading-xs/semibold",
                                            color: "text-muted",
                                            children: k.intl.string(pv.default["pbu+Yx"]),
                                        }),
                                        i.map((e) => (0, x.jsx)(p_.i2, { project: e }, e.id)),
                                    ],
                                })
                              : null,
                          (0, x.jsx)(p_.R, { projects: n }),
                      ],
                  });
        },
        useSearchTerms: () => [k.intl.string(pv.default["pbu+Yx"])],
    }),
    pP = (0, S.Tf)(T.X.OVERLAY_WIDGETS_RESET, {
        useTitle: () => k.intl.string(k.t["hW+EMu"]),
        useLabel: () => k.intl.string(k.t.yBZMsQ),
        useVariant: () => "secondary",
        onClick: pI.eL,
    }),
    pG = (0, S.zZ)(T.X.OVERLAY_WIDGETS_CATEGORY, {
        useTitle: () => k.intl.string(pv.default["Qk/rJB"]),
        usePredicate: nv.b_,
        buildLayout: () => [pR, pL, pP],
    });
var pM = n(54761);
function pU() {
    let [e, t] = (0, AS.kn)([eh.M.OVERLAY_OOP_SETTINGS_NUX], { bypassAutoDismiss: !0 });
    return ((0, q.Ay)(() => () => {
        t(AC.i.AUTO_DISMISS);
    }),
    e !== eh.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, x.jsxs)(x.Fragment, {
              children: [
                  (0, x.jsxs)("div", {
                      className: pM.xC,
                      children: [
                          (0, x.jsx)("div", {
                              children: (0, x.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: k.intl.string(k.t.mdXZh1),
                                  className: pM.tl,
                              }),
                          }),
                          (0, x.jsx)("div", {
                              children: (0, x.jsxs)("div", {
                                  className: pM.vJ,
                                  children: [
                                      (0, x.jsx)(C.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: k.intl.string(k.t.jzjJQg),
                                      }),
                                      (0, x.jsx)(n8.E, {
                                          variant: "body-md/normal",
                                          color: "text-muted",
                                          children: k.intl.string(k.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, x.jsx)("div", {
                              children: (0, x.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: k.intl.string(k.t.mdXZh1),
                                  className: pM.lh,
                              }),
                          }),
                          (0, x.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pM.VV,
                              children: (0, x.jsx)(O.$, {
                                  variant: "primary",
                                  text: k.intl.string(k.t.Q26diF),
                                  onClick: () => void t(AC.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, x.jsx)(lo.c, { className: pM.yF }),
              ],
          });
}
function pV() {
    let e = (0, _.bG)([td.A], () => td.A.enabled),
        t = (0, nC.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, x.jsxs)(x.Fragment, {
              children: [
                  (0, x.jsx)(iQ.w, {
                      type: "warning",
                      message: k.intl.format(k.t.fuEX5B, {
                          onClick: function () {
                              return (0, nm.openUserSettings)(T.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                      role: "status",
                  }),
                  (0, x.jsx)(lo.c, { className: pM.yF }),
              ],
          })
        : null;
}
let pk = (0, S.t_)(T.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                fN(),
                ld.Ay.addChangeListener(fN),
                fp.A.addChangeListener(fN),
                fI.default.addChangeListener(fN),
                fx.default.addChangeListener(fN),
                e7.isPlatformEmbedded && (0, SW.a2)(),
                () => {
                    (ld.Ay.removeChangeListener(fN),
                        fp.A.removeChangeListener(fN),
                        fI.default.removeChangeListener(fN),
                        fx.default.removeChangeListener(fN),
                        e7.isPlatformEmbedded && (0, SW.e0)());
                }
            );
        },
        useTitle: () => k.intl.string(k.t["9cb1Uz"]),
        decoration: {
            type: p.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(pU, {}), (0, x.jsx)(pV, {})] });
            },
        },
        buildLayout: () => [f4, pe, pG, px, pr],
    }),
    pw = (0, S.i4)(T.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t["9cb1Uz"]),
        icon: ff.WindowTopOutlineIcon,
        usePredicate: nv.b_,
        buildLayout: () => [pk],
    });
var pF = n(687966);
let pB = (0, S.AK)(T.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => k.intl.string(k.t.OYYY6q),
        destinationKey: T.X.ACTIVITY_PRIVACY_PANEL,
    }),
    pX = (0, S.gN)(T.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [pB] });
var pz = n(227309),
    pH = n(29160),
    pY = n(552366),
    pW = n(938442);
function pK(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, fU.I)(t.id);
    let o = (0, _.cf)([i7.Ay, fW.A, tg.A, fM.A], () => (0, i7.xU)(t, i7.Ay, fW.A, tg.A, fM.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, _.cf)([i7.Ay], () => ({
            canToggleDetection: null == a || i7.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: i7.Ay.isDetectionEnabled(o),
        })),
        c = (0, _.bG)([i7.Ay], () => i7.Ay.getVisibleGame()),
        [g, m] = I.useState(!1),
        A = I.useRef(null),
        E = null != c && (0, i7.Es)(o) === (0, i7.Es)(c),
        h = !l && !g,
        S = !i && !E,
        T = h || S,
        f = I.useMemo(
            () =>
                (0, SH.n1)(o)
                    ? r
                        ? o.gameName
                        : k.intl.formatToPlainString(k.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [p, N] = I.useState(f ?? "???"),
        C = iA()(pW.tR, {
            [pY.LO]: !i,
            [pY.Rw]: i,
            [pY.FB]: null != o && i,
            [pY.xL]: r,
            [pY.fG]: null != s && s.length > 0,
        });
    function y() {
        (fL.A.deleteEntry(o),
            s?.forEach((e) => {
                fL.A.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? fW.A.getDetectableGame(o.id) : null;
        (tc.default.track(b.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, SH.n1)(o) ? o.gameName : o.name,
        }),
            (0, lI.mM)(async () => {
                let { default: t } = await Promise.all([n.e(568035), n.e(627495)]).then(n.bind(n, 651930));
                return (n) =>
                    (0, x.jsx)(t, {
                        ...n,
                        detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                        onSubmitted: () => m(!0),
                    });
            }));
    }
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsxs)("div", {
                className: C,
                children: [
                    (0, x.jsxs)("div", {
                        className: iA()(pY.$K, pW.Vd),
                        children: [
                            null != o.processGame || (o.verified && !l)
                                ? (0, x.jsxs)("div", {
                                      className: pY.HS,
                                      children: [
                                          (0, x.jsx)("div", { className: pY.mO, children: f }),
                                          (0, x.jsx)(lE.m, {
                                              text: k.intl.string(k.t["4PJP5p"]),
                                              children: (0, x.jsx)(Tw.A, {
                                                  className: pY.qf,
                                                  size: 18,
                                                  color: n4.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, x.jsx)(TO.CheckmarkSmallIcon, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n4.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, x.jsx)("input", {
                                      className: iA()(pY.mO, pY.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: p,
                                      onBlur: function () {
                                          o.name !== p && fL.A.editName(o, p);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === lB.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => N(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || E
                                        ? (e = k.intl.string(k.t.VbV5dv))
                                        : null != n && "" !== n && (e = k.intl.format(k.t["gGeOE+"], { when: n })),
                                    (0, x.jsx)(n8.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        className: pY.GN,
                                        children: (0, x.jsx)(pH.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
                                                      (0, e7.uF)() && (t = t.toUpperCase()),
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
                        (0, x.jsx)(ap.Y, {
                            targetElementRef: A,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, x.jsx)(m_.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": k.intl.string(k.t["UKOtz+"]),
                                    children: (0, x.jsxs)(tl.rX, {
                                        children: [
                                            h &&
                                                (0, x.jsx)(tl.Dr, {
                                                    id: "report",
                                                    label: k.intl.string(k.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            S &&
                                                (0, x.jsx)(tl.Dr, {
                                                    id: "remove",
                                                    label: k.intl.string(k.t.N86XcP),
                                                    color: "danger",
                                                    action: y,
                                                }),
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) =>
                                (0, x.jsx)("div", {
                                    className: iA()(pY._Q, { [pY.g9]: t.isShown }),
                                    children: (0, x.jsx)(lE.m, {
                                        text: k.intl.string(k.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, x.jsx)(lm.K, {
                                            ...e,
                                            buttonRef: A,
                                            icon: mp.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": k.intl.string(k.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, x.jsx)(lE.m, {
                        text: k.intl.string(k.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, x.jsx)(lS.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != s && s.length > 0 && d
                                    ? (0, lI.mM)(async () => {
                                          let { Modal: e } = await Promise.all([n.e(304823), n.e(223976)]).then(
                                              n.bind(n, 732955),
                                          );
                                          return (t) =>
                                              (0, x.jsx)(e, {
                                                  ...t,
                                                  title: k.intl.formatToPlainString(k.t.PZ4fKc, { platform: f }),
                                                  subtitle: k.intl.formatToPlainString(k.t.ZIQbfb, { platform: f }),
                                                  actions: [
                                                      {
                                                          text: k.intl.string(k.t["ETE/oC"]),
                                                          onClick: () => t.onClose(),
                                                          variant: "secondary",
                                                      },
                                                      {
                                                          text: k.intl.string(k.t.Fmjztz),
                                                          onClick: () => {
                                                              (fL.A.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : fL.A.toggleDetection(o);
                            },
                            "aria-label": k.intl.string(k.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !i &&
                (0, x.jsx)("div", {
                    className: pY.AQ,
                    children: s.map((e, t) =>
                        (0, x.jsxs)(
                            I.Fragment,
                            {
                                children: [
                                    (0, x.jsx)(pK, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, x.jsx)("div", { className: pY.PQ }),
                                ],
                            },
                            (0, i7.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pZ() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = SZ();
    return 0 === e.length
        ? null
        : (0, x.jsx)(Q.B, {
              padding: { bottom: 32 },
              children: (0, x.jsx)(n6.n, {
                  children: (0, x.jsx)("div", {
                      children: e.map((e) =>
                          (0, x.jsx)(
                              pK,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === pz.a7 ? t : void 0 },
                              (0, i7.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let pq = (0, S.E2)(T.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, x.jsx)(pZ, {}),
});
var pQ = n(424994);
let pJ = (0, S.zZ)(T.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [pq, pX],
    useTitle: () => k.intl.string(k.t.jCOdvx),
    useSubtitle: () =>
        (0, _.bG)([i7.Ay], () => i7.Ay.getGamesSeen(!1).some((e) => !(0, SH.n1)(e)))
            ? k.intl.format(k.t.KPA3m9, { igdbLink: pQ.s8 })
            : k.intl.string(k.t["1yiJwn"]),
});
var p$ = n(890497),
    p0 = n(853270),
    p1 = n(969426);
function p2(e) {
    let { onClose: t } = e,
        n = (0, _.bG)([i7.Ay], () => i7.Ay.getCandidateGames()),
        [i, l] = I.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, x.jsxs)(ax.l, {
        className: iA()(p0.H, p1.Y_),
        "aria-label": k.intl.string(k.t.GTCx0p),
        children: [
            (0, x.jsx)(p$.Z, {
                selectionMode: "single",
                placeholder: k.intl.string(k.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, x.jsxs)("div", {
                className: iA()(p0.o, pW.xM),
                children: [
                    (0, x.jsx)(Sb.Q, { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: t }),
                    (0, x.jsx)(O.$, {
                        variant: "primary",
                        text: k.intl.string(k.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (fL.A.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var p3 = n(475007),
    p4 = n(221851);
function p5() {
    let e = I.useRef(null);
    return (0, x.jsxs)("div", {
        className: iA()(p3.a, p4.Gf),
        children: [
            (0, x.jsx)("span", { children: k.intl.string(k.t.xwhoqM) }),
            (0, x.jsx)(ap.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, x.jsx)(p2, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, x.jsx)(Sb.Q, {
                        ...t,
                        buttonRef: e,
                        variant: "primary",
                        textVariant: "body-sm/medium",
                        text: k.intl.string(k.t.GjgdXe),
                    }),
            }),
        ],
    });
}
function p6() {
    return (0, x.jsx)("div", {
        className: iA()(pW.tR, pY.eS, pY.Rw),
        children: (0, x.jsxs)("div", {
            className: iA()(pY.$K, pW.Vd),
            children: [
                (0, x.jsx)("div", { className: pY.mO, children: k.intl.string(k.t.H68X9x) }),
                (0, x.jsx)(p5, {}),
            ],
        }),
    });
}
let p8 = (0, S.E2)(T.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [k.intl.string(k.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = SZ(),
                n = (0, _.bG)([i7.Ay], () => i7.Ay.getVisibleGame());
            return null == n
                ? (0, x.jsx)(p6, {})
                : (0, x.jsxs)("div", {
                      className: iA()(pW.Vd, pY.C2),
                      children: [
                          (0, x.jsx)(
                              pK,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === pz.a7 ? e : void 0,
                              },
                              (0, i7.Es)(n),
                          ),
                          (0, x.jsx)(p5, {}),
                      ],
                  });
        },
    }),
    p7 = (0, S.zZ)(T.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => k.intl.string(k.t["MY9/Oe"]),
        buildLayout: () => [p8],
    }),
    p9 = (0, S.t_)(T.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => k.intl.string(k.t.AVDyEj),
        buildLayout: () => [p7, pJ],
    }),
    xe = (0, S.i4)(T.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.AVDyEj),
        icon: pF.GameControllerIcon,
        usePredicate: nv.Pi,
        buildLayout: () => [p9],
    });
var xt = n(176781),
    xn = n(341923),
    xi = n(419490),
    xl = n(572164),
    xs = n(489496),
    xr = n(696016),
    xa = n(683825);
let xo = (0, S.sN)(T.X.CLIPS_BITRATE, {
    useTitle: () => k.intl.string((0, xn.H)() ? xa.default.i2xEfm : k.t["8bZyov"]),
    useSubtitle: () => k.intl.string((0, xn.H)() ? xa.default.sY70pa : k.t["h8DSx/"]),
    minValue: 10,
    maxValue: 100,
    useDefaultValue: () => 75,
    getInitialValue: () => xi.Ay.getSettings().clipsQuality.bitratePercent ?? 75,
    onValueRender: (e) => `${Math.round(e)}%`,
    setValue: (e) => {
        let { clipsQuality: t } = xi.Ay.getSettings();
        xs.GS({ ...t, bitratePercent: Math.round(e) });
    },
    markers: [10, 25, 50, 75, 100],
    onMarkerRender: (e) => `${Math.round(e)}%`,
    useDisabled: () => !(0, xl.E)(),
});
var xu = n(226640);
let xd = (0, S.Hn)(T.X.CLIPS_FRAME_RATE, {
        useTitle: () => k.intl.string((0, xn.H)() ? xa.default.juVL76 : k.t["2wScL1"]),
        useSubtitle: () => k.intl.string((0, xn.H)() ? xa.default.n6Ts7o : k.t["Rf9+fy"]),
        useValue: () => (0, _.bG)([xi.Ay], () => xi.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = xi.Ay.getSettings();
            xs.GS({ ...t, frameRate: e });
        },
        useOptions: xu.Fz,
        useDisabled: () => !(0, xl.E)(),
    }),
    xc = (0, S.E2)(T.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [],
        usePredicate: () => (0, _.bG)([xi.Ay], () => xi.Ay.getHardwareClassification()) === xr.k9.BELOW_MINIMUM,
        Component: () => (0, x.jsx)(sn.A, { look: sn.k.WARNING, children: k.intl.string(k.t.SIxrIF) }),
    }),
    xg = (0, S.Hn)(T.X.CLIPS_LENGTH, {
        useTitle: () => k.intl.string((0, xn.H)() ? xa.default.CnXTMY : k.t.OgfUio),
        useSubtitle: () => ((0, xn.H)() ? null : k.intl.string(k.t.H7j4tY)),
        useValue: () => (0, _.bG)([xi.Ay], () => xi.Ay.getSettings().clipsLength),
        setValue: (e) => xs.h$(e),
        useOptions: xu.Qu,
        useDisabled: () => !(0, xl.E)(),
    }),
    xm = (0, S.E2)(T.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, xn.H)()
                ? (0, x.jsx)(iQ.w, { type: "info", role: "none", message: k.intl.string(xa.default["1C6Gea"]) })
                : (0, x.jsx)(sn.A, { look: sn.k.INFO, children: k.intl.string(k.t["Z+MfqT"]) });
        },
    }),
    xA = (0, S.Hn)(T.X.CLIPS_RESOLUTION, {
        useTitle: () => k.intl.string((0, xn.H)() ? xa.default["82AJHx"] : k.t.aFudZJ),
        useSubtitle: () => k.intl.string((0, xn.H)() ? xa.default["0Y9r0P"] : k.t.nIrkW5),
        useValue: () => (0, _.bG)([xi.Ay], () => xi.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = xi.Ay.getSettings();
            xs.GS({ ...t, resolution: e });
        },
        useOptions: xu.gF,
        useDisabled: () => !(0, xl.E)(),
    }),
    xE = (0, S.zD)(T.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => k.intl.string((0, xn.H)() ? xa.default.nvHjmr : k.t["3zwNf6"]),
        useSubtitle: () => k.intl.string((0, xn.H)() ? xa.default.HzqWWF : k.t.m4Cjj9),
        useValue: () => (0, _.bG)([xi.Ay], () => xi.Ay.getSettings().remindersEnabled),
        setValue: (e) => xs.Mt(e),
        useDisabled: () => !(0, xl.E)(),
    });
n(51318);
let xh = (0, S.zZ)(T.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => k.intl.string((0, xn.H)() ? xa.default.E6QvLy : xa.default.TGwzMe),
        buildLayout: () => [xc, xg, xd, xA, xo, xm, xE],
    }),
    xS = (0, S.zD)(T.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => ((0, xn.H)() ? k.intl.string(xa.default.Oh9NEy) : "Show clips debug tooltips"),
        useSubtitle: () =>
            (0, xn.H)()
                ? k.intl.string(xa.default.XoptI1)
                : "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, _.bG)([xi.Ay], () => xi.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => xs.YP(e),
    }),
    xT = (0, S.zD)(T.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => ((0, xn.H)() ? k.intl.string(xa.default["Pm/g4t"]) : "Show POV clips in Gallery"),
        useSubtitle: () =>
            (0, xn.H)()
                ? k.intl.string(xa.default.aSPNgv)
                : "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, _.bG)([xi.Ay], () => xi.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => xs.Uh(e),
    }),
    xf = (0, S.zZ)(T.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, _.bG)([sT.default], () => {
                let e = sT.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [xS, xT],
    });
var xp = n(80802),
    xx = n(271597),
    xI = n(417270),
    x_ = n(847825);
let xb = (e) => {
        let { keycaps: t } = e,
            n = (0, _.bG)([ld.Ay], () => ld.Ay.getKeybindForAction(b.hCu.SAVE_CLIP, !0));
        th()(null != n, "Save clip keybind unset");
        let i = !(0, xl.E)(),
            l = (0, xn.H)(),
            s = (0, lp.Xt)(n.shortcut, (0, lp.OH)("alt+c")),
            r = I.useRef(null),
            a = I.useCallback(
                (e) => {
                    iJ.A.setKeybind({ ...n, shortcut: e });
                },
                [n],
            ),
            o = I.useCallback(() => {
                iJ.A.setKeybind({ ...n, shortcut: (0, lp.OH)("alt+c") });
            }, [n]);
        return (0, x.jsx)(lg.D, {
            label: k.intl.string(l ? xa.default["8Cx5u+"] : k.t.pf54EU),
            description: k.intl.string(l ? xa.default.sved3b : k.t["QyB/jK"]),
            layout: "horizontal-responsive",
            children: (0, x.jsx)("div", {
                className: x_.g,
                children: (0, x.jsx)(lf.A, {
                    ref: r,
                    disabled: i,
                    defaultValue: n.shortcut,
                    onChange: a,
                    keycaps: t,
                    trailingActions: (0, x.jsxs)(x.Fragment, {
                        children: [
                            (0, x.jsx)(lE.m, {
                                text: k.intl.string(xa.default.bUtubv),
                                position: "top",
                                ariaHidden: !0,
                                children: (0, x.jsx)(lm.K, {
                                    icon: iq.KeyboardIcon,
                                    size: "sm",
                                    variant: "secondary",
                                    disabled: i,
                                    "aria-label": k.intl.string(xa.default.bUtubv),
                                    onClick: (e) => {
                                        (e.stopPropagation(), r.current?.toggleRecordMode());
                                    },
                                }),
                            }),
                            (0, x.jsx)(lE.m, {
                                text: k.intl.string(xa.default.Kyk1Tp),
                                position: "top",
                                ariaHidden: !0,
                                children: (0, x.jsx)(lm.K, {
                                    icon: xI.RetryIcon,
                                    size: "sm",
                                    variant: "secondary",
                                    disabled: i || (l && s),
                                    "aria-label": k.intl.string(xa.default.Kyk1Tp),
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
    xN = (0, S.E2)(T.X.CLIPS_KEYBIND, {
        useSearchTerms: () =>
            (0, xn.H)()
                ? [k.intl.string(xa.default["8Cx5u+"]), k.intl.string(xa.default.sved3b)]
                : [k.intl.string(k.t.pf54EU), k.intl.string(k.t["QyB/jK"])],
        usePredicate: () => (0, _.bG)([ld.Ay], () => null != ld.Ay.getKeybindForAction(b.hCu.SAVE_CLIP, !0)),
        Component: xb,
    }),
    xC = (0, S.E2)(T.X.CLIPS_MANUAL_KEYBIND, {
        usePredicate: () => {
            let e = (0, xn.H)(),
                t = (0, _.bG)([ld.Ay], () => null != ld.Ay.getKeybindForAction(b.hCu.SAVE_CLIP, !0));
            return e && t;
        },
        useSearchTerms: xN.useSearchTerms,
        Component: () => (0, x.jsx)(xb, { keycaps: !0 }),
    }),
    xy = (e) => {
        let { keycaps: t } = e,
            n = (0, _.bG)([ld.Ay], () => ld.Ay.getKeybindForAction(b.hCu.SAVE_CLIP, !0)),
            i = (0, _.bG)([ld.Ay], () => ld.Ay.getKeybindForAction(b.hCu.SAVE_SCREENSHOT, !0));
        (th()(null != n, "Save clip keybind unset"), th()(null != i, "Save screenshot keybind unset"));
        let l = I.useCallback(
            (e) => {
                iJ.A.setKeybind({ ...i, shortcut: e });
            },
            [i],
        );
        return (0, x.jsx)(lg.D, {
            label: k.intl.string(k.t["0U/hj7"]),
            description: k.intl.string(k.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, x.jsx)("div", {
                className: x_.g,
                children: (0, x.jsx)(lf.A, { defaultValue: i.shortcut, onChange: l, keycaps: t }),
            }),
        });
    },
    xv = (0, S.E2)(T.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [k.intl.string(k.t["0U/hj7"]), k.intl.string(k.t["5zxkdo"])],
        usePredicate: lq.BW,
        Component: xy,
    }),
    xj = (0, S.E2)(T.X.CLIPS_MANUAL_SCREENSHOT_KEYBIND, {
        useSearchTerms: xv.useSearchTerms,
        usePredicate: () => {
            let e = (0, xn.H)(),
                t = (0, lq.BW)(),
                n = (0, _.bG)(
                    [ld.Ay],
                    () =>
                        null != ld.Ay.getKeybindForAction(b.hCu.SAVE_CLIP, !0) &&
                        null != ld.Ay.getKeybindForAction(b.hCu.SAVE_SCREENSHOT, !0),
                );
            return e && t && n;
        },
        Component: () => (0, x.jsx)(xy, { keycaps: !0 }),
    }),
    xO = (0, S.zD)(T.X.CLIPS_ENABLE, {
        useTitle: () => k.intl.string(k.t.h8rgrK),
        useSubtitle: () => k.intl.string(k.t["4Qw3NO"]),
        useValue: () => (0, xl.E)(),
        setValue: (e) => xs.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    xD = (0, S.zY)(T.X.CLIPS_GENERAL_CARD, {
        usePredicate: () => !(0, xn.H)(),
        buildLayout: () => [xO, xN, xv],
        headerSettingKey: xO.key,
    }),
    xR = (0, S.AK)(T.X.CLIPS_VOICE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => k.intl.string(xa.default.ArBuEu),
        destinationKey: T.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING,
    }),
    xL = (0, S.gN)(T.X.CLIPS_RELATED_SETTINGS, { usePredicate: xn.H, buildLayout: () => [xR] });
var xP = n(428678),
    xG = n(650684),
    xM = n(439408),
    xU = n(464132),
    xV = n(791498);
let xk = (0, S.E2)(T.X.CLIPS_CAPTURE_MODE, {
        usePredicate: () => {
            let e = (0, lq.sw)(),
                t = (0, xn.H)();
            return e && t;
        },
        useSearchTerms: () => [
            k.intl.string(xa.default["n+Htm0"]),
            k.intl.string(xa.default["uO/2T5"]),
            k.intl.string(xa.default["2Uh8Zr"]),
            k.intl.string(xa.default.uEs0uv),
        ],
        Component: function () {
            let e,
                { value: t, onChange: n } = (0, xU.U)(),
                i = (0, xV.q)(xk);
            return (0, x.jsx)(xM.u, {
                label: k.intl.string(xa.default["n+Htm0"]),
                options:
                    ((e = (0, _.bG)([ld.Ay], () =>
                        (0, lp.dI)(ld.Ay.getKeybindForAction(b.hCu.SAVE_CLIP, !0)?.shortcut ?? (0, lp.OH)("alt+c"), !0),
                    )),
                    [
                        { value: "off", title: k.intl.string(xa.default["uO/2T5"]), icon: xP.DenyIcon },
                        {
                            value: "manual",
                            title: k.intl.string(xa.default["2Uh8Zr"]),
                            description:
                                e.length > 0
                                    ? k.intl.formatToPlainString(xa.default["qYS+JH"], { keybind: e })
                                    : k.intl.string(xa.default.VfTZ7q),
                            icon: xt.ClipsIcon,
                        },
                        {
                            value: "auto",
                            title: k.intl.string(xa.default.uEs0uv),
                            description: k.intl.string(xa.default.MRWtw9),
                            icon: xG.ClipsAutoIcon,
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
    xw = (0, S.zZ)(T.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => k.intl.string(k.t["rWKv+e"]),
        useSubtitle: () =>
            k.intl.format((0, xn.H)() ? xa.default["6C94PY"] : xa.default["dh7g+S"], {
                learnMoreLink: ey.A.getArticleURL(b.MVz.CLIPS),
            }),
        useHeaderDecoration: () =>
            (0, xn.H)()
                ? {
                      type: p.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              type: p.UV.BUTTON,
                              id: "clips-library",
                              text: k.intl.string(xa.default["5pE8FG"]),
                              variant: "secondary",
                              onClick: () => void ((0, lI.kB)(xr.nm) ? (0, xp.g)() : (0, xx.p)()),
                          },
                      ],
                  }
                : void 0,
        buildLayout: () => [xk, xD, xC, xj, xL],
    }),
    xF = (0, S.E2)(T.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () =>
            (0, xn.H)()
                ? [k.intl.string(xa.default.DonDIR), k.intl.string(xa.default.qiqPrh)]
                : [k.intl.string(k.t.s4773E), k.intl.string(k.t.svjwGh)],
        Component: () => {
            let e = (0, _.bG)([xi.Ay], () => xi.Ay.getSettings().storageLocation),
                t = !(0, xl.E)() || !(0, lq.ri)(ln.Ay),
                n = (0, xn.H)(),
                i = I.useRef(!1);
            return (0, x.jsx)(lg.D, {
                label: k.intl.string(n ? xa.default.DonDIR : k.t.s4773E),
                description: k.intl.string(n ? xa.default.qiqPrh : k.t.svjwGh),
                layout: "vertical",
                children: (0, x.jsxs)(Q.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, x.jsx)(l_.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": k.intl.formatToPlainString(k.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, x.jsx)(O.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: async function () {
                                if (!t && !i.current) {
                                    i.current = !0;
                                    try {
                                        let e = await nN.A.fileManager.showOpenDialog({
                                            properties: ["openDirectory", "createDirectory"],
                                        });
                                        e.length > 0 && xs.HU(e[0]);
                                    } finally {
                                        i.current = !1;
                                    }
                                }
                            },
                            text: k.intl.string(xa.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    xB = (0, S.zZ)(T.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => k.intl.string(xa.default["0Q+pdZ"]),
        buildLayout: () => [xF],
    }),
    xX = (0, S.t_)(T.X.CLIPS_PANEL, {
        useTitle: () => k.intl.string(k.t.z2jK6X),
        usePredicate: lq.sw,
        usePersistentBadge: () =>
            (0, xn.H)() ? { badgeType: p.Xi.EARLY_ACCESS } : { badgeType: p.Xi.COUNT, count: 0 },
        buildLayout: () => [xw, xh, xB, xf],
    }),
    xz = (0, S.i4)(T.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.z2jK6X),
        icon: xt.ClipsIcon,
        buildLayout: () => [xX],
    }),
    xH = (0, S.WI)(T.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => k.intl.string(k.t.BA9200),
        buildLayout: () => [xe, TC, xz, pw, fT],
    });
var xY = n(631670),
    xW = n(974504),
    xK = n(836602),
    xZ = n(591179),
    xq = n(100663),
    xQ = n(761508),
    xJ = n(159001),
    x$ = n(872200),
    x0 = n(919395),
    x1 = n(68750);
function x2(e) {
    let { title: t, children: n } = e;
    return (0, x.jsxs)("div", {
        children: [(0, x.jsx)(C.D, { variant: "body-md/medium", className: x1.Vf, children: t }), n],
    });
}
function x3(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, x.jsx)("div", {
        className: iA()(x1.UA, n),
        children: (0, x.jsxs)("div", {
            className: iA()(x1.yt, i),
            children: [
                (0, x.jsx)("div", {
                    className: iA()(x1.Fp, a && x1.Oz),
                    children: (0, x.jsxs)(x.Fragment, {
                        children: [
                            (0, x.jsx)(x2, { title: s ?? k.intl.string(k.t.Zb06yP), children: l }),
                            null != r ? (0, x.jsx)(x2, { title: k.intl.string(k.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, x.jsx)("div", { className: x1.oB, children: t }),
            ],
        }),
    });
}
var x4 = n(641318),
    x5 = n(101058),
    x6 = n(851767),
    x8 = n(696451),
    x7 = n(590941);
function x9() {
    return (0, x.jsxs)("div", {
        className: x7.p$,
        children: [
            (0, x.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: x7.Sl }),
            (0, x.jsx)(C.D, { className: x7.h8, variant: "heading-lg/semibold", children: k.intl.string(k.t.Z1OZCV) }),
            (0, x.jsx)(n8.E, { className: x7.h8, variant: "body-md/normal", children: k.intl.string(k.t.ZSt4Tt) }),
            (0, x.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: x7.h8,
                children: (0, x.jsx)(O.$, {
                    variant: "primary",
                    text: k.intl.string(k.t.jQ3pqt),
                    onClick: function () {
                        ((0, cu.pX)(b.BVt.GUILD_DISCOVERY), (0, tY.default)());
                    },
                }),
            }),
        ],
    });
}
var Ie = n(81400),
    It = n(450232),
    In = n(468450),
    Ii = n(355622),
    Il = n(408018),
    Is = n(989161),
    Ir = n(290386),
    Ia = n(941933),
    Io = n(486264);
let Iu = (0, t1.Ld)(),
    Id = (0, M.createChannelRecord)({ id: "1", type: b.rbe.DM }),
    Ic = (0, t1.Ld)();
function Ig(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, Ir.U)({ location: "profile_customization_about_me" }),
        [u, d] = I.useState(l ?? r),
        [c, g] = I.useState((0, Il.x7)(u)),
        m = I.useRef(r),
        A = I.useRef(!1);
    return (
        I.useEffect(() => {
            if (m.current !== r) {
                let e = (0, Il.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        I.useEffect(() => {
            void 0 !== l || u === r || A.current || (d(r), g((0, Il.x7)(r)));
        }, [l, r, u]),
        (0, x.jsxs)(aE.A, {
            title: t,
            titleId: Iu,
            description: k.intl.string(k.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, x.jsx)(Is.Ay, {
                    "aria-describedby": Ic,
                    "aria-labelledby": Iu,
                    className: Io.i,
                    innerClassName: Io.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: Id,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: Ia.y,
                    type: Ii.oU.PROFILE_BIO_INPUT,
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
                (0, x.jsx)(lh.A, { id: Ic, children: k.intl.format(k.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var Im = n(821956),
    IA = n(562819),
    IE = n(84540),
    Ih = n(467690);
function IS(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eH.Ay)(),
        o = (0, x0.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, x0.CP)(n?.id),
        c = r ? gC.wL : s5.$n;
    return (0, x.jsx)(aE.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, x.jsxs)("div", {
            className: Ih.NC,
            children: [
                (0, x.jsx)(c, {
                    size: s5.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, IA.L)({ analyticsLocations: a, guild: n });
                    },
                    className: iA()({ [Ih.yj]: r }),
                    children: k.intl.string(k.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, x.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ih.DT,
                        children: (0, x.jsx)(O.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, Im.uZ)(t, n) ? k.intl.string(k.t.CHf9iJ) : k.intl.string(k.t.OrokWm),
                            onClick: function () {
                                (0, IE.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var IT = n(339984),
    If = n(942132);
let Ip = [{ name: "gif", extensions: ["gif"] }];
function Ix(e) {
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
        { newestAnalyticsLocation: g } = (0, eH.Ay)(),
        m = c ? gC.wL : s5.$n,
        A = I.useCallback(() => {
            (0, In.XD)({
                uploadType: IT.HL.AVATAR,
                analyticsSource: g,
                filters: u ? Ip : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, x.jsx)(aE.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, x.jsxs)("div", {
            className: If.NC,
            children: [
                (0, x.jsx)(m, {
                    className: iA()({ [If.yj]: c }),
                    size: s5.$n.Sizes.SMALL,
                    onClick: A,
                    children: s ?? k.intl.string(k.t["4OynCD"]),
                }),
                t &&
                    (0, x.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: If.DT,
                        children: (0, x.jsx)(O.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? k.intl.string(k.t.TDjKDm) : k.intl.string(k.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var II = n(810188);
function I_(e) {
    let { user: t, guildId: n, className: i } = e,
        l = ab.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, eH.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, x0.B0)(t, n),
        [d, c] = (0, AS.kn)([eh.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        g = d === eh.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        m = (0, I.useCallback)(() => {
            (c(AC.i.TAKE_ACTION),
                tc.default.track(b.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eY.L)({ analyticsLocations: s, guildId: n }));
        }, [s, n, c]),
        A = (0, I.useCallback)(() => {
            ((0, IE.p)({ displayNameStyles: null }), tc.default.track(b.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        E = (0, I.useCallback)(() => {
            (0, IE.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        h = void 0 !== o ? o : null != n ? a : r;
    return (0, x.jsx)(aE.A, {
        title: k.intl.string(eW.default["86GtGH"]),
        titleBadge: g
            ? (0, x.jsx)("div", { className: II.A, children: (0, x.jsx)(AY.E, { type: "new", variant: "primary" }) })
            : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, x.jsxs)("div", {
            className: II.N,
            children: [
                (0, x.jsx)(O.$, { variant: "primary", size: "sm", text: k.intl.string(eW.default.vJqrIg), onClick: m }),
                null == n &&
                    null != h &&
                    (0, x.jsx)(O.$, {
                        variant: "secondary",
                        size: "sm",
                        text: k.intl.string(eW.default.ymq8WQ),
                        onClick: A,
                    }),
                null != n &&
                    null != h &&
                    (0, x.jsx)(O.$, {
                        variant: "secondary",
                        size: "sm",
                        text: k.intl.string(eW.default["j/KRxc"]),
                        onClick: E,
                    }),
            ],
        }),
    });
}
var Ib = n(637193),
    IN = n(622410);
function IC(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, eH.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, x0.rv)(t, n?.id),
        d = I.useCallback(() => {
            (0, Ib.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = I.useCallback(() => {
            (0, IE.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, x.jsx)(aE.A, {
        title: k.intl.string(k.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, x.jsxs)("div", {
            className: IN.u,
            children: [
                (0, x.jsx)(O.$, { variant: "primary", size: "sm", text: k.intl.string(k.t.BwdeM1), onClick: d }),
                (void 0 === o ? (s ? a : r) != null : null != o) &&
                    (0, x.jsx)(O.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? k.intl.string(k.t.CHf9iJ) : k.intl.string(k.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var Iy = n(88524);
function Iv(e) {
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
        { newestAnalyticsLocation: c } = (0, eH.Ay)(),
        g = d ? gC.wL : s5.$n;
    return (0, x.jsx)(aE.A, {
        className: s,
        title: k.intl.string(k.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, x.jsxs)("div", {
            className: Iy.NC,
            children: [
                (0, x.jsx)(g, {
                    className: iA()({ [Iy.yj]: d }),
                    size: s5.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, In.XD)({ uploadType: IT.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: k.intl.string(k.t.N0bC3P),
                }),
                t &&
                    (0, x.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Iy.DT,
                        children: (0, x.jsx)(O.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? k.intl.string(k.t.jHlJNS) : k.intl.string(k.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var Ij = n(617061),
    IO = n(625613);
function ID(e) {
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
        { analyticsLocations: u } = (0, eH.Ay)(),
        d = ab.Ay.canUsePremiumProfileCustomization(t),
        c = (0, x0.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, x0.nZ)(n?.id);
    I.useEffect(() => {
        d &&
            (tc.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t4.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, t2.sq)(b.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, t3.uq)(t4.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let A = a ? gC.wL : s5.$n;
    return (0, x.jsx)(aE.A, {
        forcedDivider: r,
        borderType: co.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, x.jsxs)("div", {
            className: IO.NC,
            children: [
                (0, x.jsx)(A, {
                    size: s5.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Ij.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: iA()({ [IO.yj]: a }),
                    children: k.intl.string(k.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, x.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: IO.DT,
                        children: (0, x.jsx)(O.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? k.intl.string(k.t.CHf9iJ) : k.intl.string(k.t.uMuafO),
                            onClick: function () {
                                (0, IE.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var IR = n(515727),
    IL = n(594401);
function IP(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, eH.Ay)(),
        s = (0, x0.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, x0.Tu)(n?.id),
        [o, u] = (0, AS.kn)([eh.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eh.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, x.jsx)(aE.A, {
        showBorder: d,
        borderType: d ? co.i.NEW_UPSELL : co.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d
            ? (0, x.jsx)("div", { className: IL.Ad, children: (0, x.jsx)(AY.E, { type: "new", variant: "primary" }) })
            : void 0,
        description: d ? k.intl.string(k.t.yMoMAt) : void 0,
        errors: a,
        children: (0, x.jsxs)("div", {
            className: IL.NC,
            children: [
                (0, x.jsx)(O.$, {
                    variant: "primary",
                    size: "sm",
                    text: k.intl.string(k.t["9/hmle"]),
                    onClick: function () {
                        ((0, IR.w)({ analyticsLocations: l, guild: n }), u(AC.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != s : null != r) &&
                    (0, x.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: IL.DT,
                        children: (0, x.jsx)(O.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? k.intl.string(k.t.CHf9iJ) : k.intl.string(k.t.nQBruk),
                            onClick: function () {
                                (0, IE.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var IG = n(602853),
    IM = n(654107),
    IU = n(527212),
    IV = n(101928),
    Ik = n(819169),
    Iw = n(317097),
    IF = n(508274),
    IB = n(379012);
function IX(e) {
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
        d = I.useRef(null),
        c = (0, IG.r)(n4.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n4.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, In.sN)(i),
        A = (0, Iw.Hl)(i),
        E = A === c ? g : A,
        h = m ? n4.A.unsafe_rawColors.WHITE.css : n4.A.unsafe_rawColors.PRIMARY_530.css,
        S = (0, Ik.A)(a),
        T = (0, Ik.A)(o),
        [f, p] = I.useState((0, oz.A)());
    return (
        I.useEffect(() => {
            (S !== a || T !== o) && p((0, oz.A)());
        }, [o, a, T, S]),
        (0, x.jsx)(ap.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, x.jsx)(IF.VN, {
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
                return (0, x.jsxs)("div", {
                    ref: d,
                    className: iA()(IB.oP, { [IB.r9]: s }),
                    children: [
                        (0, x.jsx)(n7.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? b.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: IB.nf,
                            "aria-label": k.intl.string(k.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, x.jsx)(aI.PencilIcon, {
                                size: "custom",
                                className: IB.BW,
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
var Iz = n(190377);
function IH(e) {
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
        c = (0, IU.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, IV.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = ab.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        h = (0, IG.r)(n4.A.unsafe_rawColors.PRIMARY_530).hex(),
        S = (0, IM.rh)(E, h, !1);
    return null == g || null == m
        ? null
        : (0, x.jsx)(aE.A, {
              title: k.intl.string(k.t.DMeO2X),
              disabled: !A && !s,
              className: iA()(Iz.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, x.jsxs)("div", {
                  className: Iz.hd,
                  children: [
                      (0, x.jsx)("div", {
                          className: Iz.YX,
                          children: (0, x.jsx)(IX, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, x.jsx)(n8.E, {
                                  className: Iz.yz,
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  "aria-hidden": !0,
                                  children: k.intl.string(k.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, x.jsx)("div", {
                          className: Iz.YX,
                          children: (0, x.jsx)(IX, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: S,
                              showEyeDropper: !0,
                              label: (0, x.jsx)(n8.E, {
                                  className: Iz.yz,
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  "aria-hidden": !0,
                                  children: k.intl.string(k.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, x.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Iz.WA,
                              children: (0, x.jsx)(O.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: k.intl.string(k.t["L+GmoR"]),
                                  onClick: () => l([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function IY(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: l,
            placeholder: s,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, t1.GV)();
    return (0, x.jsx)(aE.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, x.jsx)(l_.k, {
            "aria-labelledby": o,
            placeholder: s ?? k.intl.string(k.t.NPEUUu),
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
var IW = n(684732),
    IK = n(576705),
    IZ = n(931175);
function Iq(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, _.bG)([IK.A], () => IK.A.can(b.xBc.CHANGE_NICKNAME, r) || IK.A.can(b.xBc.MANAGE_NICKNAMES, r)),
        o = (0, TX.L)(t4.PremiumTypes.TIER_2);
    return (0, x.jsxs)(aE.A, {
        title: k.intl.string(k.t.me1lRk),
        errors: t,
        children: [
            (0, x.jsx)(l_.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: 32,
                onChange: function (e) {
                    (0, IE.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : k.intl.string(k.t.gzjxQi),
            }),
            o && (0, x.jsx)(I_, { user: s, guildId: r.id, className: IZ.F }),
        ],
    });
}
var IQ = n(233454);
let IJ = "/assets/b25da78aa7949feb.png";
function I$(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, cD.Ay)(),
        { analyticsLocations: s } = (0, eH.Ay)(tw.A.PREMIUM_UPSELL_OVERLAY);
    return (I.useEffect(() => {
        n &&
            (tc.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: t4.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, t2.sq)(b.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                (0, t3.uq)(t4.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, s]),
    n)
        ? (0, x.jsxs)("div", {
              className: IQ.ry,
              children: [
                  (0, x.jsx)("div", { children: i }),
                  (0, x.jsxs)("div", {
                      className: IQ.Wc,
                      children: [
                          (0, x.jsx)("img", {
                              className: IQ.Tn,
                              alt: k.intl.string(k.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case b.NJ8.ASH:
                                      case b.NJ8.DARK:
                                      case b.NJ8.ONYX:
                                          return IJ;
                                      case b.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return IJ;
                                  }
                              })(l),
                          }),
                          (0, x.jsxs)("div", {
                              className: IQ._9,
                              children: [
                                  (0, x.jsx)(n8.E, {
                                      variant: "body-lg/semibold",
                                      color: "text-overlay-light",
                                      children: k.intl.string(k.t.dMaDFX),
                                  }),
                                  (0, x.jsx)(n8.E, {
                                      variant: "body-sm/normal",
                                      color: "text-overlay-light",
                                      children: k.intl.string(k.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, x.jsx)(ca.A, {
                              size: s5.$n.Sizes.LARGE,
                              color: s5.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ab.Ay.isPremium(t)
                                      ? k.intl.string(k.t.AfRWI8)
                                      : k.intl.string(k.t.nkdUym),
                              },
                              subscriptionTier: t4.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var I0 = n(203164);
function I1() {
    let e = (0, _.bG)([sT.default], () => {
            let e = sT.default.getCurrentUser();
            return (th()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, TX.L)(t4.PremiumTypes.TIER_2),
        n = (0, _.bG)([xK.A, lD.A], () => lD.A.getGuild(xK.A.selectedGuildId));
    th()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, _.cf)([xK.A], () => ({ ...xK.A.getPendingChanges(n.id), errors: xK.A.getErrors(n.id) })),
        d = (0, x5.V7)({ userId: e.id, image: i }),
        c = (0, Ie.EC)(n.id),
        g = (0, _.bG)([x8.Ay], () => (null == n.id ? null : x8.Ay.getMember(n.id, e.id))),
        m = (0, _.bG)([x6.A], () => x6.A.getGuildMemberProfile(e.id, n.id)),
        A = ab.Ay.canUsePremiumProfileCustomization(e),
        E = (0, x0.z5)(i, g?.avatar),
        h = (0, x0.Ac)(s, m?.banner),
        S = (0, IW.l)(o, m?.themeColors),
        T = m?.bio ?? "",
        f = m?.pronouns ?? "";
    return (0, x.jsxs)("div", {
        className: I0.Q,
        children: [
            (0, x.jsx)(
                Iq,
                {
                    errors: u?.nick ?? c?.nick,
                    username: di.Ay.getName(e),
                    pendingNick: l,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, x.jsx)(
                IY,
                {
                    sectionTitle: k.intl.string(k.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, IE.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, x.jsxs)(I$, {
                user: e,
                showOverlay: !A,
                children: [
                    (0, x.jsx)(
                        Ix,
                        {
                            sectionTitle: (0, x.jsxs)(x.Fragment, {
                                children: [k.intl.string(k.t.lqaIxI), (0, x.jsx)(It.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, In.rM)(e, g?.avatar, (e) => (0, IE.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, x.jsx)(
                        IS,
                        {
                            sectionTitle: (0, x.jsxs)(x.Fragment, {
                                children: [k.intl.string(k.t["7v0T9P"]), (0, x.jsx)(It.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, x.jsx)(I_, { user: e, guildId: n.id }),
                    (0, x.jsx)(
                        IC,
                        { user: e, guild: n, titleIcon: (0, x.jsx)(It.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, x.jsx)(
                        ID,
                        {
                            sectionTitle: (0, x.jsxs)(x.Fragment, {
                                children: [k.intl.string(k.t.wR5wOo), (0, x.jsx)(It.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, x.jsx)(
                        IP,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, x.jsxs)(x.Fragment, {
                                children: [k.intl.string(k.t.GWrZOd), (0, x.jsx)(It.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, x.jsx)(
                        Iv,
                        {
                            showRemoveBannerButton: h,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, In.rM)(e, m?.banner, (e) => (0, IE.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, x.jsx)(IH, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, IE.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, x.jsx)(
                        Ig,
                        {
                            placeholder: k.intl.string(k.t["/7NKgv"]),
                            sectionTitle: (0, x.jsxs)(x.Fragment, {
                                children: [k.intl.string(k.t.ZzAR2Y), (0, x.jsx)(It.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, IE.p)({ guildId: n.id, bio: e }),
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
var I2 = n(832131);
function I3(e) {
    (0, lI.mM)(async () => {
        let { default: t } = await Promise.all([n.e(935205), n.e(843117), n.e(596202)]).then(n.bind(n, 63473));
        return (n) => (0, x.jsx)(t, { source: { ...e, page: b.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function I4(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eH.Ay)(tw.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, _.bG)([sT.default], () => {
            let e = sT.default.getCurrentUser();
            return (th()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        s = (0, _.bG)([x8.Ay], () => (null != t ? x8.Ay.getMember(t.id, l.id) : null)),
        r = (0, _.bG)([x6.A], () => !x6.A.isFetchingProfile(l.id, t?.id)),
        a = (0, _.bG)([td.A], () => td.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, _.cf)([xK.A], () => xK.A.getPendingChanges(t?.id)),
        c = (0, x5.V7)({ userId: l.id, image: o }),
        g = (0, x0.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, x0.B0)(l, t?.id);
    return (I.useEffect(() => xJ.IM, []), a)
        ? (0, x.jsx)(op.A, {})
        : r
          ? (0, x.jsxs)(eH.f5, {
                value: i,
                children: [
                    (0, x.jsx)(n8.E, {
                        variant: "body-sm/normal",
                        children: k.intl.format(k.t["/PTB2E"], {
                            helpCenterLink: ey.A.getArticleURL(b.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(aA.A, { guildId: t.id, onChange: n }),
                                  (0, x.jsx)(x3, {
                                      profilePreviewTitle: (0, x.jsx)(C.D, {
                                          variant: "heading-sm/medium",
                                          className: I2.YV,
                                          children: k.intl.formatToPlainString(k.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, x.jsx)(x4.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: ab.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: I3,
                                          containerClassName: I2.ti,
                                      }),
                                      nameplatePreview: (0, x.jsx)(x$.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? I2.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, x.jsx)(I1, {}),
                                  }),
                              ],
                          })
                        : (0, x.jsx)(x9, {}),
                ],
            })
          : (0, x.jsx)(oX.y, {});
}
var I5 = n(917445),
    I6 = n(641130);
function I8(e) {
    let { children: t, notice: n } = e;
    return (0, x.jsxs)("div", { className: I6.r, children: [n, (0, x.jsx)("div", { children: t })] });
}
var I7 = n(823092),
    I9 = n(969935),
    _e = n(379197),
    _t = n(488430),
    _n = n(457421),
    _i = n(940622),
    _l = n(559474),
    _s = n(757993);
let _r = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: l } = (0, eH.Ay)(tw.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = I.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, _i.mb)(_l.RN.UPSELL_BANNER)),
        (t = (0, _i.mb)(_l.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, _.bG)([_n.A], () => _n.A.getMarketingBySurface(_e.R.EDIT_PROFILE_SETTINGS))),
        (i = I.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: k.intl.string(k.t.QZVVBh),
                          body: k.intl.string(k.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        I.useMemo(
            () => ({ ...i, type: _t.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, I7.L_)();
    return (
        I.useEffect(() => {
            (tc.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t4.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            }),
                (0, t2.sq)(b.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                    (0, t3.uq)(t4.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [l, d]),
        (0, x.jsxs)("div", {
            ref: s,
            className: _s.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, x.jsx)("div", {
                    className: _s.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, x.jsx)("img", { src: a, className: _s.Qw, alt: "" }),
                }),
                (0, x.jsxs)("div", {
                    className: _s.Em,
                    children: [
                        (0, x.jsx)(C.D, {
                            variant: "heading-lg/semibold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: _s.DD,
                            children: o,
                        }),
                        (0, x.jsx)(n8.E, {
                            variant: "body-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, x.jsx)(O.$, {
                    onClick: function () {
                        g(() =>
                            (0, I9.Cz)({
                                analyticsLocations: l,
                                analyticsSource: tw.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: k.intl.string(k.t.fYfGgK),
                }),
            ],
        })
    );
};
var _a = n(451909),
    _o = n(202639),
    _u = n(521440),
    _d = n(536015),
    _c = n(423814),
    _g = n(77528),
    _m = n(590180),
    _A = n(898461),
    _E = n(469054),
    _h = n(601298),
    _S = n(207803),
    _T = n(461797);
let _f = Object.keys(_T.jB);
function _p(e) {
    let t = null == e ? _f : _f.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var _x = n(201805),
    _I = n(221650);
function __(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion),
        l = (0, _x.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = I.useMemo(() => {
            let e = (0, _T.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, x.jsxs)("div", {
        className: _I.kL,
        children: [
            (0, x.jsx)(n7.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                className: _I.x6,
                "aria-label": k.intl.string(k.t["44yJxh"]),
                children: l.render(),
            }),
            (0, x.jsxs)(n7.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                "aria-label": `${s}: ${k.intl.string(k.t["44yJxh"])}`,
                className: _I.Lt,
                children: [
                    (0, x.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: _I.L_ }),
                    (0, x.jsx)(n8.E, {
                        className: _I._e,
                        variant: "body-sm/semibold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var _b = n(511484),
    _N = n(811611),
    _C = n(206697),
    _y = n(729934);
function _v(e, t) {
    let n = _y.A.useField("scrollPosition"),
        i = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion);
    (0, I.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            (l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), _y.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var _j = n(844222),
    _O = n(842092);
let _D = "/assets/d4955aabdcb5bdee.png",
    _R = { assetOrigin: _E.E.NEW_ASSET, imageUri: _D, staticImageUri: _D, description: "", originalAsset: void 0 };
function _L(e) {
    let { user: t } = e,
        { reducedMotion: n } = I.useContext(_j.C),
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
        } = (0, _.cf)([xK.A], () => {
            let e = xK.A.getPendingChanges(),
                t = xK.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        h = (0, x5.V7)({ userId: t.id, image: g ?? i });
    return (0, x.jsx)(x4.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? l ?? _R,
        pendingDisplayNameStyles: E ?? a,
        pendingAvatar: h,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== A ? A : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : _O.WX,
        containerClassName: _O.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var _P = n(829497);
function _G(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = ab.Ay.isPremium(t),
        s = ab.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, _.cf)([xK.A], () => {
            let e = xK.A.getPendingChanges(),
                t = xK.A.getErrors(),
                n = xK.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, I.useState)(_p()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, I.useMemo)(() => {
                    let t = (0, _T.Wt)(e);
                    return {
                        banner: (0, _h.X)({
                            assetOrigin: _E.E.NEW_ASSET,
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
                r = (0, _.bG)([_m.A], () => {
                    let e = _m.A.getProduct(l);
                    return (0, _A.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, I.useEffect)(() => {
                (0, _S.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, I.useCallback)(() => {
                let n = _p(e);
                (t(n), tc.default.track(b.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = I.useRef(null);
    _v(m, eR._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, eH.Ay)(tw.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function h(e) {
        e && ((0, _C.T)(), tc.default.track(b.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    I.useEffect(() => {
        n &&
            (tc.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t4.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: b.liQ.USER_SETTINGS },
                location_stack: E,
            }),
            (0, t2.sq)(b.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, t3.uq)(t4.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [E, t, n]);
    let S = (0, _g.V)()?.subscriptionTrial?.skuId === t4.pe.TIER_2,
        T = (0, _c.O)(),
        f = (0, _b.U9)(T, t4.pe.TIER_2);
    return i
        ? (0, x.jsx)(eH.f5, {
              value: A,
              children: (0, x.jsxs)(co.A, {
                  ref: m,
                  className: _P.MT,
                  type: co.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, x.jsx)(x3, {
                          stickyPreview: !1,
                          layoutClassName: _P.th,
                          profilePreviewTitle: (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(ag.NitroWheelIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: _P.PC,
                                  }),
                                  k.intl.string(k.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, x.jsxs)(x.Fragment, {
                              children: [(0, x.jsx)(__, { preset: c, onShuffle: g }), (0, x.jsx)(_L, { user: t })],
                          }),
                          children: (0, x.jsxs)("div", {
                              children: [
                                  (0, x.jsxs)("div", {
                                      children: [
                                          (0, x.jsx)(C.D, {
                                              variant: "heading-xl/semibold",
                                              children: k.intl.string(k.t["2zGdAW"]),
                                          }),
                                          (0, x.jsx)(n8.E, {
                                              className: _P.h_,
                                              variant: "body-sm/normal",
                                              children: k.intl.string(k.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, x.jsx)(IH, {
                                      className: _P.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, x5.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: _S.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, x.jsx)(Iv, {
                                      className: _P.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: _S.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, x.jsx)(Ix, {
                                          className: _P.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: _S.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: k.intl.string(k.t["7z0D1c"]),
                                          sectionTitle: k.intl.string(k.t.vtFfPX),
                                      }),
                                  (0, x.jsx)(I_, { user: t, className: _P.fz }),
                                  !S &&
                                      (0, x.jsx)(n8.E, {
                                          variant: "body-sm/normal",
                                          children: k.intl.string(k.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !S &&
                          (0, x.jsx)(_o.d, {
                              onSubscribeModalClose: h,
                              className: _P.Kv,
                              showUpsell: !0,
                              text: k.intl.format(k.t.TmfgI2, {
                                  onClick: () => {
                                      (0, _d.K)({ onSubscribeFinish: h });
                                  },
                              }),
                              button: l
                                  ? k.intl.string(k.t.AfRWI8)
                                  : f
                                    ? k.intl.formatToPlainString(k.t.bkQ4bH, { percent: T?.discount.amount })
                                    : k.intl.string(k.t.pj0XBN),
                              position: "inline",
                          }),
                      S &&
                          (0, x.jsxs)("div", {
                              children: [
                                  (0, x.jsx)("div", { className: _P.BU }),
                                  (0, x.jsx)(_N.Ay, {
                                      type: t4.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: t4.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var _M = n(814390),
    _U = n(643056),
    _V = n(843282),
    _k = n(145497),
    _w = n(685073),
    _F = n(534400),
    _B = n(581781),
    _X = n(743981),
    _z = n(195801);
let _H = (0, t1.Ld)(),
    _Y = I.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, _.cf)([sT.default], () => (0, _w.Zo)(sT.default.getCurrentUser()?.primaryGuild)),
            s = void 0 !== n ? n : (l.guildId ?? null),
            r = I.useMemo(() => {
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
                        e.set(n, { id: n, name: k.intl.string(k.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, l, s]),
            a = I.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = I.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, x.jsx)(_B.A, {
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
            u = I.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, x.jsx)(_k.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [r],
            ),
            d = I.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, x.jsx)(_F.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: _X.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "body-sm/semibold",
                          });
                },
                [r],
            ),
            c = I.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, x.jsx)(x.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = I.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = I.useCallback((e) => e === s, [s]),
            A = I.useCallback((e) => e, []),
            E = I.useCallback(() => {
                i?.(null);
            }, [i]),
            h = I.useRef(null);
        return (
            _v(h, eR._F.GUILD_TAG),
            (0, x.jsxs)(aE.A, {
                title: k.intl.string(k.t.Pdd1nd),
                titleId: _H,
                ref: h,
                children: [
                    (0, x.jsx)(n8.E, {
                        className: _z.VA,
                        variant: "body-sm/normal",
                        children: k.intl.string(k.t.mlZ6Jx),
                    }),
                    (0, x.jsx)(_V.Pw, {
                        className: _z.Lt,
                        optionClassName: _z.S0,
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
var _W = n(318785),
    _K = n(470739);
let _Z = function () {
    return (0, _U.d)({ location: "UserSettingsProfileCustomization" })
        ? (0, x.jsx)(aE.A, {
              title: k.intl.string(k.t.l6w3Vj),
              description: k.intl.string(k.t.joHqdj),
              children: (0, x.jsx)(O.$, {
                  text: k.intl.string(k.t.wRraFx),
                  onClick: () => {
                      (0, _K.openBadgeDirectoryModal)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var _q = n(953726);
let _Q = (0, t1.Ld)();
function _J(e) {
    let t = (0, TX.L)(t4.PremiumTypes.TIER_2);
    return (0, x.jsxs)(aE.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: k.intl.string(k.t["9AjdkD"]),
        titleId: _Q,
        children: [
            (0, x.jsx)("div", {
                children: (0, x.jsx)(l_.k, {
                    "aria-labelledby": _Q,
                    placeholder: e.placeholder,
                    maxLength: 32,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, x.jsx)(I_, { user: e.user, className: _q.F }),
        ],
    });
}
var _$ = n(376626);
function _0(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = V.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, x.jsx)("div", {
        className: _$.u,
        children: (0, x.jsx)(nt.d, {
            label: k.intl.string(k.t["3cWDuO"]),
            description: l ? null : k.intl.formatToPlainString(k.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, xY._e)() : (0, IE.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function _1(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, IG.r)(n4.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, IM.rh)(s, r, !1),
        o = (0, Iw.LX)(a[0]);
    return (0, x.jsx)(aE.A, {
        title: k.intl.string(k.t["/X3fkf"]),
        children: (0, x.jsx)(IX, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var _2 = n(518477);
let _3 = function () {
    let e = (0, _.bG)([oL.default], () => oL.default.getId());
    return (0, x.jsx)(aE.A, {
        title: k.intl.string(k.t.Jzj9q4),
        children: (0, x.jsx)(O.$, {
            text: k.intl.string(k.t.Geikwq),
            onClick: () => {
                (0, xq.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tw.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: _2.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var _4 = n(654910);
function _5() {
    let e = (0, _.bG)([sT.default], () => {
            let e = sT.default.getCurrentUser();
            return (th()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, _.bG)([x6.A], () => x6.A.getUserProfile(e.id)),
        n = (0, _U.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, _.cf)([xK.A], () => {
            let e = xK.A.getPendingChanges(),
                t = xK.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, x5.V7)({ userId: e.id, image: i }),
        A = (0, Ie.EC)(),
        E = ab.Ay.canUsePremiumProfileCustomization(e),
        h = (0, x0.z5)(i, e.avatar),
        S = (0, x0.Ac)(s, t?.banner),
        T = (0, IU.Ay)(e.id),
        f = T?.getLegacyUsername(),
        p = (g.global_name?.length ?? 0) > 0 ? g.global_name : (A?.nick ?? []),
        I = (g.bio?.length ?? 0) > 0 ? g.bio : (A?.bio ?? []),
        b = (0, _W.b)(),
        N = null != (0, _w.Zo)(e.primaryGuild).guildId;
    return (0, x.jsxs)("div", {
        className: _4.Q,
        children: [
            (0, x.jsx)(_J, {
                placeholder: e.username,
                errors: p,
                currentGlobalName: e.globalName,
                pendingGlobalName: l,
                onGlobalNameChange: (e) => (0, IE.p)({ globalName: e }),
                user: e,
            }),
            (0, x.jsx)(
                IY,
                {
                    sectionTitle: k.intl.string(k.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, IE.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, x.jsx)(_3, {}),
            (0, x.jsx)(
                Ix,
                {
                    onAvatarChange: (e) => {
                        ((0, IE.p)({ avatar: e }), (0, x0.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: h,
                    errors: g.avatar,
                    sectionTitle: k.intl.string(k.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, x.jsx)(IS, { user: e, sectionTitle: k.intl.string(k.t["7v0T9P"]) }, "decoration"),
            (0, x.jsx)(IC, { user: e }),
            (0, x.jsx)(ID, { user: e, sectionTitle: k.intl.string(k.t.wR5wOo) }, "effect"),
            (0, x.jsx)(IP, { user: e, sectionTitle: k.intl.string(k.t.GWrZOd) }, "frame"),
            E
                ? (0, x.jsxs)(x.Fragment, {
                      children: [
                          (0, x.jsx)(
                              Iv,
                              {
                                  showRemoveBannerButton: S,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, IE.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, x.jsx)(IH, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, IE.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, x.jsx)(
                      _1,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, IE.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, x.jsx)(
                Ig,
                {
                    sectionTitle: k.intl.string(k.t.ZzAR2Y),
                    errors: I,
                    onBioChange: (e) => (0, IE.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (b.length > 0 || N) &&
                (0, x.jsx)(_Y, {
                    availablePrimaryGuilds: b,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, IE.p)({ primaryGuildId: e }),
                }),
            null != f &&
                !n &&
                (0, x.jsx)(_0, { legacyUsername: f, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, x.jsx)(_Z, {}, "badges"),
        ],
    });
}
function _6() {
    (0, lI.mM)(async () => {
        let { default: e } = await Promise.all([n.e(935205), n.e(843117), n.e(113210)]).then(n.bind(n, 192641));
        return (t) =>
            (0, x.jsx)(e, {
                ...t,
                source: {
                    page: b.liQ.USER_SETTINGS,
                    section: b.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: b.ZSU.BUTTON_CTA,
                    type: b.btD.BUY,
                },
            });
    });
}
var _8 = n(447080);
function _7() {
    let e = (0, _.bG)([sT.default], () => {
            let e = sT.default.getCurrentUser();
            return (th()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, _.bG)([td.A], () => td.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, _.cf)([xK.A], () => ({ ...xK.A.getPendingChanges(), showNotice: xK.A.showNotice() })),
        a = (0, x5.V7)({ userId: e.id, image: i }),
        o = (0, x0.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, _M.A)() && null != n ? _a.Ay.parse(void 0, n).content : n,
        d = ab.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eH.Ay)(tw.A.USER_SETTINGS_USER_PROFILE);
    I.useEffect(() => xY.IM, []);
    let [g, m] = I.useState(!1),
        A = !d,
        E = I.useRef(null);
    return t
        ? (0, x.jsx)(op.A, {})
        : (0, x.jsxs)(eH.f5, {
              value: c,
              children: [
                  (0, x.jsx)(_r, {}),
                  (0, x.jsx)(x3, {
                      profilePreview: (0, x.jsx)(x4.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: _6,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: _8.ti,
                      }),
                      nameplatePreview: (0, x.jsx)(x$.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? _8.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, x.jsx)(_5, {}),
                  }),
                  (0, x.jsx)(gd.L, {
                      innerRef: E,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, x.jsx)("div", {
                          ref: E,
                          children: (0, x.jsx)(_G, { user: e, shouldShow: A, isVisible: g }),
                      }),
                  }),
                  A &&
                      !s &&
                      (0, x.jsx)(_o.d, {
                          className: _8.EL,
                          showUpsell: !g,
                          text: k.intl.format(k.t.TmfgI2, { onClick: () => (0, _d.K)({}) }),
                          textVariant: "heading-sm/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, x.jsx)(_u.l, {
                              size: "md",
                              location: tw.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, x.jsx)("div", {
                              className: _8.Xl,
                              children: (0, x.jsx)(O.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (tc.default.track(b.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          E?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: k.intl.string(k.t.uw9zI7),
                                  icon: ag.NitroWheelIcon,
                              }),
                          }),
                      }),
              ],
          });
}
var _9 = n(188567);
n(46121);
var be = n(944983);
let bt = { [eR.Eq.USER_PROFILE]: "main_profile_tab", [eR.Eq.GUILD]: "guild_profile_tab" },
    bn = (0, S.E2)(T.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, _.bG)([lR.A, mE.Ay, xK.A], () => {
                    let e = xK.A.selectedGuildId ?? lR.A.getGuildId();
                    return null == e || xK._.has(e) ? mE.Ay.getFlattenedGuildIds().find((e) => !xK._.has(e)) : e;
                }),
                t = (0, _.bG)([lD.A], () => lD.A.getGuild(e)),
                n = (0, _.bG)([xK.A], () => xK.A.showNotice()),
                i = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
                l = _y.A.useField("subsection");
            return (
                I.useEffect(() => {
                    (0, is._)(bt[l]);
                }, [l]),
                I.useEffect(() => {
                    null != i && t?.id != null && (0, I5.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, x.jsx)(I8, {
                    children: (0, x.jsxs)(uZ.F, {
                        component: (0, x.jsx)(lh.A, {
                            children: (0, x.jsx)(C.D, {
                                variant: "heading-xl/medium",
                                children: k.intl.string(k.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, x.jsxs)(xQ.V, {
                                className: be.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            ((0, ir.fO)({ duration: 300, intensity: 1.4 }),
                                                _9._.dispatch(b.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eR.Eq.GUILD && null != t && (0, xJ.V2)(t.id),
                                            _y.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, x.jsx)(
                                        xQ.V.Item,
                                        {
                                            className: be.YU,
                                            id: eR.Eq.USER_PROFILE,
                                            children: k.intl.string(k.t["2p07FR"]),
                                        },
                                        eR.Eq.USER_PROFILE,
                                    ),
                                    (0, x.jsx)(
                                        xQ.V.Item,
                                        {
                                            className: iA()(be.YU, be.HY),
                                            "aria-label": k.intl.string(k.t.kPHroX),
                                            id: eR.Eq.GUILD,
                                            children: k.intl.string(k.t.kPHroX),
                                        },
                                        eR.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eR.Eq.GUILD
                                ? (0, x.jsx)(I4, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ir.fO)({ duration: 300, intensity: 1.4 }),
                                                  _9._.dispatch(b.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, xJ.JJ)(e.id);
                                      },
                                  })
                                : (0, x.jsx)(_7, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            k.intl.string(k.t["vi7f+q"]),
            k.intl.string(k.t.Ip9nBS),
            k.intl.string(k.t["2p07FR"]),
            k.intl.string(k.t["7vhiqk"]),
            k.intl.string(k.t.kPHroX),
            k.intl.string(k.t.lqaIxI),
            k.intl.string(k.t.Vgdusv),
            k.intl.string(k.t.DMeO2X),
        ],
    }),
    bi = (0, S.zZ)(T.X.PROFILE_CATEGORY, { buildLayout: () => [bn] });
var bl = n(379633);
function bs() {
    let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, gy.A)({ userId: e?.id, size: j._3.SIZE_48 });
    return null == e
        ? null
        : (0, x.jsxs)("div", {
              className: bl.a5,
              children: [
                  (0, x.jsx)(v.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: j._3.SIZE_48,
                      "aria-label": k.intl.string(k.t.lqaIxI),
                  }),
                  (0, x.jsxs)("div", {
                      className: bl.FS,
                      children: [
                          (0, x.jsx)(n8.E, {
                              color: "text-strong",
                              variant: "body-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, x.jsxs)("div", {
                              className: bl.Fk,
                              children: [
                                  (0, x.jsx)(n8.E, {
                                      variant: "body-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: k.intl.string(k.t.Ip9nBS),
                                  }),
                                  (0, x.jsx)(aI.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let br = (0, S.t_)(T.X.PROFILE_PANEL, {
        useTitle: () => k.intl.string(k.t["vi7f+q"]),
        notice: { stores: [xK.A], element: xW.A },
        initialize: () => xY.F7,
        buildLayout: () => [bi],
    }),
    ba = (0, S.i4)(T.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t["vi7f+q"]),
        icon: bu,
        StronglyDiscouragedCustomComponent: bs,
        usePredicate: () => !(0, xZ.X)("user_settings_sidebar"),
        buildLayout: () => [br],
    }),
    bo = (0, S.i4)(T.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => k.intl.string(k.t["vi7f+q"]),
        icon: bu,
        StronglyDiscouragedCustomComponent: bs,
        usePredicate: () => (0, xZ.X)("user_settings_sidebar"),
        onClick: () => {
            let e = oL.default.getId();
            (0, xq.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function bu() {
    let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, gy.A)({ userId: e?.id, size: j._3.SIZE_48 });
    return (0, x.jsx)(v.eu, { src: t, avatarDecoration: n, size: j._3.SIZE_20, "aria-hidden": !0 });
}
let bd = (0, S.WI)(T.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [ba, bo] });
var bc = n(98207);
n(204925);
let bg = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, lI.mM)(
        async () => {
            let { default: t } = await Promise.all([n.e(213042), n.e(319623), n.e(121007)]).then(n.bind(n, 110744));
            return (n) => (0, x.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? de.tE : null, onCloseCallback: t },
    );
};
var bm = n(940856),
    bA = n(506775),
    bE = n(121780),
    bh = n(871309),
    bS = n(961943);
function bT() {
    let e = bE.A.getCountryCode(),
        t = null != e ? bS.q5[e.alpha2] : void 0;
    bh.A.openUrl(ey.A.getArticleURL(t ?? bS.GF));
}
var bf = n(484051);
function bp() {
    return (0, bf.a)(bS.LI);
}
var bx = n(124616);
function bI() {
    let e = bp(),
        t = (0, bA.ZP)();
    if (!e) return null;
    switch (t) {
        case bA.M$.ADULT:
            return k.intl.format(bx.default.gi4ulu, { handleOnAgeGatedContentHook: bA.M0 });
        case bA.M$.TEEN:
            return k.intl.format(bx.default["221iML"], {
                handleOnAgeGatedContentHook: bA.M0,
                handleOnConfirmAgeHook: bA.aP,
            });
        case bA.M$.UNVERIFIED:
            return k.intl.format(bx.default["W0/7DD"], {
                handleOnAgeGatedContentHook: bT,
                handleOnConfirmAgeHook: bA.aP,
            });
    }
}
var b_ = n(26137),
    bb = n(957485);
function bN() {
    let e = bp(),
        t = (0, bA.ZP)();
    return e
        ? {
              icon: t === bA.M$.ADULT ? b_.UserCircleIcon : bb.ShieldUserIcon,
              backgroundColor: n4.A.colors.BACKGROUND_MOD_SUBTLE,
          }
        : null;
}
function bC() {
    let e = bN();
    return null != e ? { type: p.hp.ICON, ...e } : null;
}
function by() {
    return bp() ? k.intl.string(k.t.piqs0o) : null;
}
var bv = n(160808);
let bj = [{ badgeType: p.Xi.NEW, dismissibleContent: eh.M.TINY_BRONCO_SETTINGS }],
    bO = [];
function bD() {
    return (0, bv.Wt)() ? bj : bO;
}
var bR = n(36149),
    bL = n(207560),
    bP = (((A = {}).LEGACY = "legacy"), (A.AGE_NOTICE = "ageNotice"), A),
    bG = (((E = {}).VERIFY = "verify"), (E.EDIT = "edit"), (E.INFO = "info"), E);
function bM(e, t) {
    let n = (0, _.bG)([sT.default], () => null != sT.default.getCurrentUser()),
        i = (0, bL.fk)(),
        l = (0, bA.ZP)(),
        s = (0, bR.Y2)(),
        r = bp();
    if (!n || (!i && !r) || t !== (r ? "ageNotice" : "legacy")) return !1;
    switch (l) {
        case bA.M$.UNVERIFIED:
            return "verify" === e;
        case bA.M$.TEEN:
            return e === (r ? "info" : "verify");
        case bA.M$.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var bU = n(664188);
function bV() {
    let e = (0, bA.hD)();
    return (0, x.jsxs)(n8.E, {
        variant: "body-md/medium",
        children: [`${e} \u{2022} `, k.intl.format(bU.default.WM5adV, { handleOnHelpUrlHook: bA.M0 })],
    });
}
let bk = {
        useTitle: () => by() ?? k.intl.string(k.t["/52UYy"]),
        useSubtitle: bI,
        useVariant: () => "secondary",
        useLeadingDecoration: bC,
        getDismissibleBadges: bD,
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: bV,
        }),
        useLabel: () => k.intl.string(k.t.bt75uw),
        onClick: function () {
            (0, lI.mM)(async () => {
                let { default: e } = await n.e(145361).then(n.bind(n, 151080));
                return (t) => (0, x.jsx)(e, { ...t });
            });
        },
    },
    bw = (0, S.Tf)(T.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...bk, usePredicate: () => bM(bG.EDIT, bP.LEGACY) }),
    bF = (0, S.Tf)(T.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...bk,
        usePredicate: () => bM(bG.EDIT, bP.AGE_NOTICE),
        useAriaLabel: () => k.intl.string(k.t.pBMSie),
    }),
    bB = {
        useTitle: () => by() ?? k.intl.string(k.t["/52UYy"]),
        useSubtitle: bI,
        useLeadingDecoration: function () {
            let e = bN();
            return null != e ? { type: p.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: bD,
        useTrailingDecoration: () => ({ type: p.Ln.TEXT, text: (0, bA.hD)() }),
    },
    bX = (0, S.v_)(T.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...bB, usePredicate: () => bM(bG.INFO, bP.LEGACY) }),
    bz = (0, S.v_)(T.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...bB,
        usePredicate: () => bM(bG.INFO, bP.AGE_NOTICE),
    }),
    bH = {
        useTitle: () => by() ?? k.intl.string(k.t["/52UYy"]),
        useSubtitle: bI,
        useVariant: () => "secondary",
        useLeadingDecoration: bC,
        getDismissibleBadges: bD,
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: (0, bA.hD)() }),
        useLabel: function () {
            return (0, bR.yM)() ? k.intl.string(k.t["9KiIz6"]) : k.intl.string(k.t.DVywUB);
        },
        onClick: bA.aP,
    },
    bY = (0, S.Tf)(T.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...bH, usePredicate: () => bM(bG.VERIFY, bP.LEGACY) }),
    bW = (0, S.Tf)(T.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...bH,
        usePredicate: () => bM(bG.VERIFY, bP.AGE_NOTICE),
    }),
    bK = [bY, bw, bX],
    bZ = [bW, bF, bz],
    bq = (0, S.Tf)(T.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => k.intl.string(k.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: p.fq.TEXT, text: k.intl.string(k.t.qxk9zo) }),
        useLabel: () => k.intl.string(k.t.BleMPB),
        onClick: () => bg(),
    });
function bQ(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function bJ(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function b$(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = I.useState(!1),
        a = s ? t : n(t);
    return (0, x.jsxs)(Q.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, x.jsx)(n8.E, { variant: "body-md/medium", children: a }),
            (0, x.jsx)(Sb.Q, {
                variant: "primary",
                textVariant: "body-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? k.intl.string(k.t.fgq1gs) : k.intl.string(k.t.dcztdU),
            }),
        ],
    });
}
function b0() {
    let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.email);
    return null == e
        ? (0, x.jsx)(n8.E, { variant: "body-md/medium", children: k.intl.string(k.t["8SfTN/"]) })
        : (0, x.jsx)(b$, {
              text: e,
              censor: bJ,
              revealLabel: k.intl.string(k.t["Zvx+yV"]),
              hideLabel: k.intl.string(k.t.nqTD4d),
          });
}
let b1 = (0, S.Tf)(T.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => k.intl.string(k.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: b0 }),
    useLabel: function () {
        return null == (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.email)
            ? k.intl.string(k.t.OYkgVk)
            : k.intl.string(k.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.email)
            ? k.intl.string(k.t["pvBD+W"])
            : k.intl.string(k.t["8peUT0"]);
    },
    onClick: function () {
        (0, lI.mM)(async () => {
            let { default: e } = await Promise.all([n.e(279385), n.e(420577), n.e(553207)]).then(n.bind(n, 162282));
            return (t) => (0, x.jsx)(e, { ...t });
        });
    },
});
var b2 = n(557722),
    b3 = n(53516);
function b4() {
    let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, x.jsx)(n8.E, { variant: "body-md/medium", children: k.intl.string(k.t.I5kDqj) })
        : (0, x.jsx)(Q.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, x.jsx)(b$, {
                  text: t,
                  censor: bQ,
                  revealLabel: k.intl.string(k.t.eY3xlT),
                  hideLabel: k.intl.string(k.t["jllbv+"]),
              }),
          });
}
let b5 = (0, S.Tf)(T.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => k.intl.string(k.t.kerONq),
    useAriaLabel: function () {
        return null == (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.phone)
            ? k.intl.string(k.t["SfUuE+"])
            : k.intl.string(k.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: p.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: b4 }),
    useLabel: function () {
        return null == (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.phone)
            ? k.intl.string(k.t.OYkgVk)
            : k.intl.string(k.t.bt75uw);
    },
    onClick: function () {
        null == sT.default.getCurrentUser()?.phone
            ? (0, lI.mM)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e(590275),
                          n.e(766806),
                          n.e(989545),
                          n.e(757786),
                          n.e(84704),
                          n.e(286197),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, x.jsx)(e, { reason: b2.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: b3.V },
              )
            : (0, lI.mM)(async () => {
                  let { default: e } = await Promise.all([n.e(911837), n.e(840933)]).then(n.bind(n, 660740));
                  return (t) => (0, x.jsx)(e, { ...t });
              });
    },
});
function b6() {
    let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function b8() {
    let e = (0, Ie.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, _.bG)([sT.default], () => sT.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsx)(n8.E, { variant: "body-md/medium", children: i }),
            null != t &&
                (0, x.jsx)(lE.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, x.jsx)(i2.CircleErrorIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n4.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let b7 = (0, S.Tf)(T.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => k.intl.string(k.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: p.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: b8,
        }),
        useLabel: () => k.intl.string(k.t.bt75uw),
        useAriaLabel: () => k.intl.string(k.t.JECa91),
        useSubtitle: () => (b6() ? k.intl.string(k.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: b6,
        onClick: function () {
            (0, lI.mM)(async () => {
                let { default: e } = await Promise.all([n.e(745281), n.e(329995), n.e(820969)]).then(n.bind(n, 667792));
                return (t) => (0, x.jsx)(e, { ...t });
            });
        },
    }),
    b9 = (0, S.zZ)(T.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, _.bG)([sT.default], () => null != sT.default.getCurrentUser()),
        useTitle: () => k.intl.string(k.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            title: k.intl.string(k.t.tuGzBT),
                            text: k.intl.string(k.t.NAzplE),
                            button: { text: k.intl.string(k.t.lm1UKt), onClick: () => (0, bm.S)(e) },
                        }
                  : {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        role: "none",
                        title: k.intl.string(k.t["/3qnL/"]),
                        text: k.intl.string(k.t.qKs3vg),
                        button: { text: k.intl.string(k.t["7psymi"]), onClick: () => bg() },
                    };
        },
        buildLayout: () => [b7, bq, b1, b5, ...bK],
    });
var Ne = n(398177);
let Nt = (0, S.Tf)(T.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => k.intl.string(k.t["CIGa+7"]),
    useLabel: () => k.intl.string(k.t.bt75uw),
    useAriaLabel: () => k.intl.string(k.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, lI.qf)((e) => (0, x.jsx)(Ne.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var Nn = n(200921);
let Ni = [];
function Nl() {
    Ni = [];
}
class Ns extends _.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return Ni;
    }
}
let Nr = new Ns(tr.h, {
    LOGOUT: Nl,
    LOGIN_SUCCESS: Nl,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        Ni = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...Ni],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        Ni = n;
    },
});
function Na() {
    let e = (0, _.cf)([Nr], () => Nr.getSessions());
    return I.useMemo(() => {
        let t = [...e],
            n = null,
            i = oL.default.getAuthSessionIdHash();
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
function No(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? k.intl.string(k.t.TXCmfL) : ih()(e).fromNow();
}
var Nu = n(176524),
    Nd = n(646270),
    Nc = n(738678),
    Ng = n(489828);
function Nm(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, x.jsxs)(Q.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, x.jsx)(Nu.A, { icon: t, color: r ? n4.A.colors.ICON_MUTED : "currentColor" }),
            (0, x.jsxs)(Q.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, x.jsxs)(Q.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, x.jsx)(n8.E, { variant: "body-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, x.jsx)(n8.E, {
                                    variant: "body-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, x.jsx)(n8.E, { variant: "body-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, x.jsx)(n8.E, { variant: "body-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function NA(e) {
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
                            return { text: k.intl.string(k.t.cDHCNY), icon: dK.ScreenIcon };
                        case "ios":
                        case "android":
                            return { text: e, icon: Nd.MobilePhoneIcon };
                        case "horizon os":
                            return { text: e, icon: Nc.VrHeadsetIcon };
                        default:
                            return { text: e, icon: dK.ScreenIcon };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : No(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(ic.Vq);
    return (0, x.jsx)(Nm, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, x.jsx)(n7.D, {
                className: Ng.X,
                onClick: () => (0, Nn.U0)(t.id_hash),
                "aria-label": k.intl.string(k.t.E4MJNt),
                children: (0, x.jsx)(dc.XSmallIcon, { size: "md", color: "currentColor" }),
            }),
    });
}
function NE(e) {
    let { title: t, children: n } = e,
        i = I.useId();
    return (0, x.jsxs)(Q.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, x.jsx)(C.D, { id: i, variant: "heading-sm/semibold", color: "text-muted", children: t }),
            (0, x.jsx)(Q.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let Nh = (0, S.E2)(T.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = Na();
            return null == e
                ? (0, x.jsx)(oX.y, {})
                : (0, x.jsx)(NE, {
                      title: k.intl.string(k.t.LLS19o),
                      children: (0, x.jsx)(NA, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    NS = (0, S.E2)(T.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = Na();
            return (0, x.jsx)(lg.D, {
                label: k.intl.string(k.t.Vij32M),
                description: k.intl.string(k.t.OTXyaf),
                children: (0, x.jsx)(O.$, {
                    onClick: () => (0, Nn.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: k.intl.string(k.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [k.intl.string(k.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = Na();
            return e.length > 0;
        },
    });
var NT = n(766928);
function Nf() {
    return (0, x.jsx)(Nm, {
        icon: NT.LaptopPhoneIcon,
        label: k.intl.string(k.t.iUa0sn),
        description: k.intl.format(k.t["044+8i"], {
            onClick: () =>
                (0, nm.openUserSettings)(T.X.ACCOUNT_PANEL, { analyticsLocations: [tw.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let Np = (0, S.E2)(T.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = Na(),
                t = (0, _.bG)([sT.default], () => sT.default.getCurrentUser());
            return (0, x.jsxs)(NE, {
                title: k.intl.string(k.t.xx1MWc),
                children: [
                    e.map((e) => (0, x.jsx)(NA, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, x.jsx)(Nf, {}),
                ],
            });
        },
        useSearchTerms: () => [k.intl.string(k.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = Na(),
                t = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    Nx = (0, S.zZ)(T.X.SESSIONS_CATEGORY, {
        useTitle: () => k.intl.string(k.t.mEndXM),
        useSubtitle: () => k.intl.string(k.t.b7ZpTM),
        initialize: () => {
            (0, Nn.GY)();
        },
        buildLayout: () => [Nh, Np, NS],
        useSearchTerms: () => [
            k.intl.string(k.t["+1h0k/"]),
            k.intl.string(k.t.LLS19o),
            k.intl.string(k.t.xx1MWc),
            k.intl.string(k.t.lSWsrd),
        ],
    }),
    NI = (0, S.t_)(T.X.SESSIONS_PANEL, {
        useTitle: () => k.intl.string(k.t.mEndXM),
        useObscuredNotice: op.L,
        buildLayout: () => [Nx],
    }),
    N_ = (0, S.t0)(T.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [NI],
        initialize: () => {
            (0, Nn.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = Na(),
                n = t.length + +(null != e);
            return {
                type: p.xn.TEXT,
                text: n > 0 ? k.intl.formatToPlainString(k.t.G7zwOk, { count: n }) : k.intl.string(k.t.MKDeyL),
            };
        },
    });
var Nb = n(464477);
function NN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? k.intl.string(k.t.YJGvuD)
              : k.intl.string(k.t["3iKih7"])
          : e.hasFlag(b.nhx.PARTNER)
            ? t
                ? k.intl.string(k.t["9UucjT"])
                : k.intl.string(k.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? k.intl.string(k.t["9VWpT9"])
                  : k.intl.string(k.t.LfCBZG)
              : null;
}
function NC() {
    return (0, oo.bG)([sT.default], () => {
        let e = sT.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var Ny =
    (((h = {}).AVAILABLE = "available"),
    (h.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (h.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    h);
function Nv() {
    let e = (0, oo.bG)([sT.default], () => sT.default.getCurrentUser()?.verified);
    return Nb.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function Nj() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, oo.bG)([lD.A, IK.A, sT.default], () =>
        sT.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? k.intl.string(k.t.hxf9fX)
                : k.intl.string(k.t["3iKih7"])
            : lD.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(b.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        IK.A.can(b.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? k.intl.string(k.t.OYTCUh)
                  : k.intl.string(k.t.HC8uSZ)
              : null,
    );
}
var NO = n(466034),
    ND = n(705147);
let NR = (0, S.Tf)(T.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => k.intl.string(k.t.lQsY7B),
        useSubtitle: () => Nj(!0),
        useDisabled: () => null !== Nj(!0),
        useLabel: () => k.intl.string(k.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, _.bG)([oL.default], () => oL.default.hasTOTPEnabled()),
                t = Nv() === Ny.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            (async function () {
                let e = (await (0, ND.k)("totp")) ? k.t.xlA7Tl : k.t.EA4ZEk;
                (0, n5.A)({
                    title: k.intl.string(k.t["D+aE7g"]),
                    subtitle: k.intl.string(e),
                    variant: "critical",
                    confirmText: k.intl.string(k.t.N86XcP),
                    onConfirm: () => bc.A.disable(),
                });
            })(),
    }),
    NL = (0, S.zZ)(T.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => k.intl.string(k.t.RumMFo),
        useSubtitle: () => k.intl.string(k.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, _.bG)([oL.default], () => oL.default.hasTOTPEnabled()),
                t = Nv() === Ny.AVAILABLE;
            if (!e && t)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: k.intl.string(k.t.cTNUeD),
                            onClick: NO.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (Nv()) {
                case Ny.UNAVAILABLE_NO_CRYPTO:
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "info",
                        role: "none",
                        text: k.intl.string(k.t.PhHhsj),
                    };
                case Ny.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: p.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        role: "none",
                        text: k.intl.string(k.t.uggF7o),
                    };
                case Ny.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [NR],
    });
var NP = n(670492),
    NG = n(32880),
    NM = n(658675),
    NU = n(900686);
function NV() {
    (0, lI.mM)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, x.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    bc.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, lI.mM)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e(514567), n.e(96179)]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, x.jsx)(e, { ...n, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: k.intl.string(k.t.PsQmzU),
                actionText: k.intl.string(k.t.ajkYcF),
            });
    });
}
var Nk = n(858487);
function Nw(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function NF() {
    let e = NP.A.getVerificationKey();
    if ("" === e) return void NV();
    try {
        await bc.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, sA.P0)({ text: e.body?.message ?? k.intl.string(k.t.F8FvUy), variant: "critical" });
    }
}
function NB(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = Nw(t),
        l = I.useRef(null),
        s = (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(NM.P, { checked: n }), (0, x.jsx)(n8.E, { variant: "body-md/normal", children: i })],
        });
    return uq.p5
        ? (0, x.jsx)(n7.D, {
              tag: "li",
              className: iA()(Nk.aY, Nk.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uq.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  ((0, uq.C)(i), (0, sA.P0)({ text: k.intl.string(k.t.mGZ66D), variant: "success" }));
              },
              children: s,
          })
        : (0, x.jsx)("li", { className: Nk.aY, children: s });
}
let NX = (0, S.zZ)(T.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => k.intl.string(k.t.fC9qV0),
        useSubtitle: () =>
            (0, _.bG)([NP.A], () => NP.A.getBackupCodes().length > 0)
                ? k.intl.format(k.t.tp7zEK, {})
                : k.intl.string(k.t.LoOi4S),
        usePredicate: NC,
        buildLayout: () => [Nz],
    }),
    Nz = (0, S.E2)(T.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [k.intl.string(k.t.fC9qV0)],
        Component: function () {
            let e = (0, _.bG)([NP.A], () => NP.A.getBackupCodes()),
                t = I.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${Nw(t)}` + (n ? ` (${k.intl.string(k.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, x.jsx)(O.$, { text: k.intl.string(k.t.Jc2myK), size: "sm", variant: "secondary", onClick: NV })
                : (0, x.jsxs)(x.Fragment, {
                      children: [
                          (0, x.jsx)("ul", {
                              className: Nk.E5,
                              children: e.map((e) => (0, x.jsx)(NB, { code: e }, e.code)),
                          }),
                          (0, x.jsxs)(s8.e, {
                              size: "sm",
                              children: [
                                  (0, x.jsx)(NU.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, x.jsx)(O.$, {
                                          text: k.intl.string(k.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: NG.DownloadIcon,
                                      }),
                                  }),
                                  (0, x.jsx)(O.$, {
                                      text: k.intl.string(k.t["3x962E"]),
                                      variant: "secondary",
                                      icon: hx.RefreshIcon,
                                      onClick: NF,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    NH = (0, S.Tf)(T.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => k.intl.string(k.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = I.useState(!1),
                n = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : k.intl.format(e ? k.t["xDBk/I"] : k.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, x.jsx)(Sb.Q, {
                              text: e ? k.intl.string(k.t.fgq1gs) : k.intl.string(k.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => k.intl.string(k.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.hasFlag(b.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, lI.mM)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, x.jsx)(e, {
                        ...t,
                        handleSubmit: bc.A.disableSMS,
                        title: k.intl.string(k.t.KLWnit),
                        children: k.intl.string(k.t["W0/Duf"]),
                    });
            }),
    }),
    NY = (0, S.zZ)(T.X.SMS_AUTH_CATEGORY, {
        useTitle: () => k.intl.string(k.t.wuHuI5),
        useSubtitle: () => (0, _.bG)([sT.default], () => NN(sT.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()?.hasFlag(b.nhx.MFA_SMS) ?? !1),
                t = (0, _.bG)([sT.default], () => null != NN(sT.default.getCurrentUser()));
            if (!e)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "sms-setup-button",
                            text: k.intl.string(k.t.Age7yU),
                            onClick: NW,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = Nv(),
                t = NC(),
                n = (0, _.bG)([oL.default], () => oL.default.hasTOTPEnabled());
            return e === Ny.AVAILABLE && t && n;
        },
        buildLayout: () => [NH],
    });
function NW() {
    let e = sT.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: b2.d.USER_SETTINGS_UPDATE, onAddedPhone: bc.A.enableSMS }),
                (0, lI.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(590275),
                            n.e(766806),
                            n.e(989545),
                            n.e(757786),
                            n.e(84704),
                            n.e(286197),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, x.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: b3.V },
                ));
        } else bc.A.enableSMS();
}
var NK = n(665671),
    NZ = n(442433),
    Nq = n(917136),
    NQ = n(976910),
    NJ = n(267255);
function N$(e) {
    let { credential: t } = e;
    return (0, x.jsxs)("li", {
        className: NJ.e,
        children: [
            (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(n8.E, { variant: "body-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, x.jsx)(n8.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: k.intl.format(k.t["7JgxF5"], { lastUsed: No(t.last_used) }),
                        }),
                ],
            }),
            (0, x.jsx)(lm.K, {
                icon: mp.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": k.intl.string(k.t["+nrTbK"]),
                onClick: (e) => {
                    (0, NZ.L3)(e, async () => {
                        let { default: e } = await n.e(32529).then(n.bind(n, 41e3));
                        return (n) => (0, x.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let N0 = (0, S.zZ)(T.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => k.intl.string(k.t.IBq4Y3),
        useSubtitle: () => k.intl.string(k.t.yK9edS),
        useHeaderDecoration: function () {
            if (Nv() === Ny.AVAILABLE)
                return {
                    type: p.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: p.UV.BUTTON,
                            id: "add-security-key-button",
                            text: k.intl.string(k.t["Tzs/fw"]),
                            icon: iZ.PlusSmallIcon,
                            onClick: NK.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (Nv()) {
                    case Ny.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "info",
                            role: "none",
                            text: k.intl.string(k.t.bWCGI9),
                        };
                    case Ny.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: p.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            role: "none",
                            text: k.intl.string(k.t.uggF7o),
                        };
                    case Ny.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [N1],
    }),
    N1 = (0, S.E2)(T.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [k.intl.string(k.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, _.cf)([NQ.A], () => ({
                hasFetchedCredentials: NQ.A.hasFetchedCredentials(),
                credentials: NQ.A.getCredentials(),
            }));
            return (I.useEffect(() => {
                t || Nq.JQ();
            }, [t]),
            t)
                ? (0, x.jsx)(Q.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, x.jsx)(N$, { credential: e }, e.id)),
                  })
                : (0, x.jsx)(oX.y, {});
        },
    }),
    N2 = (0, S.t_)(T.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => k.intl.string(k.t.m0FidJ),
        buildLayout: () => [N0, NL, NY, NX],
    }),
    N3 = (0, S.t0)(T.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = NC();
            return { type: p.xn.TEXT, text: e ? k.intl.string(k.t.lQsY7B) : k.intl.string(k.t.WsUuTt) };
        },
        buildLayout: () => [N2],
    }),
    N4 = (0, S.zZ)(T.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => k.intl.string(k.t["0iH2vc"]),
        buildLayout: () => [Nt, N3, N_],
    }),
    N5 = { [bA.M$.ADULT]: bx.default.PMznGO, [bA.M$.TEEN]: bx.default.qSkhZH, [bA.M$.UNVERIFIED]: bx.default.vGxRDB },
    N6 = [eh.M.TINY_BRONCO_NOTICE],
    N8 = [];
function N7() {
    bh.A.openUrl(bS.M1);
}
var N9 = n(308645),
    Ce = n(881979),
    Ct = n(37380);
let Cn = (0, S.E2)(T.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [k.intl.string(k.t["16r9jm"])],
        Component: Ct.A,
    }),
    Ci = (0, S.zZ)(T.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Cn] }),
    Cl = (0, S.t_)(T.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => k.intl.string(k.t["16r9jm"]),
        buildLayout: () => [Ci],
    }),
    Cs = (0, S.t0)(T.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => k.intl.string(k.t["16r9jm"]),
        useSubtitle: Ce.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Ce._k)();
            return { type: p.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: p.xn.TEXT, text: (0, Ce.aO)() };
        },
        initialize: () => {
            N9.Yn();
        },
        buildLayout: () => [Cl],
    }),
    Cr = (0, S.zZ)(T.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (bp() ? k.intl.string(k.t.GI2mea) : null) ?? k.intl.string(k.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, bv.LH)(),
                t = (0, bA.ZP)(),
                [n, i] = (0, AS.kn)(e ? N6 : N8);
            return e && null != n
                ? {
                      type: p.lT.INLINE_NOTICE,
                      noticeType: "info",
                      role: "none",
                      text: k.intl.format(N5[t], { handleOnBlogHook: N7 }),
                      onDismiss: () => i(AC.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...bZ, Cs],
    });
var Ca = n(738188),
    Co = n(834981),
    Cu = n(987197),
    Cd = n(822585),
    Cc = n(840387),
    Cg = n(281906),
    Cm = n(665956);
let CA = (0, S.E2)(T.X.FAMILY_CENTER_SETTING, {
        Component: Cg.p,
        useSearchTerms: () => [
            k.intl.string(Cm.default.RZqaJn),
            k.intl.string(Cm.default.bdBmqy),
            k.intl.string(Cm.default["gVWG+6"]),
            k.intl.string(Cm.default.ahKIJO),
            k.intl.string(Cm.default["8SLtqb"]),
        ],
    }),
    CE = (0, S.zZ)(T.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [CA] }),
    Ch = (0, S.t_)(T.X.FAMILY_CENTER_PANEL, {
        useTitle: () => k.intl.string(Cm.default.RZqaJn),
        buildLayout: () => [CE],
    }),
    CS = (0, S.zZ)(T.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => k.intl.string(Cm.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, Cu.f)(),
                t = (0, Cd.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, Co.VT)();
            return I.useMemo(() => (n ? { badgeType: p.Xi.WARNING } : { badgeType: p.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [CT],
    }),
    CT = (0, S.t0)(T.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Co.Li)() ? k.intl.string(Cm.default.IcMQUP) : k.intl.string(Cm.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Cc.Z)(),
                t = (0, Co.Li)();
            return e
                ? t
                    ? k.intl.string(Cm.default.G8lHFU)
                    : k.intl.string(Cm.default.uOLNEZ)
                : k.intl.string(Cm.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, Cu.f)(),
                t = (0, Cd.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: p.Xy.ICON,
                      icon: Ca.WarningIcon,
                      color: n4.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n4.A.colors.BACKGROUND_FEEDBACK_MOD_WARNING,
                  };
        },
        buildLayout: () => [Ch],
    });
var Cf = n(425587),
    Cp = n(662758);
function Cx(e) {
    if (e.body.code === b.t02.INVALID_PASSWORD) throw e;
    (0, s4.A)({ title: k.intl.string(k.t.LX0nT8), subtitle: e.body.message });
}
async function CI() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = sT.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await Cf.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, s4.A)({
              title: k.intl.string(k.t["Y++oNe"]),
              subtitle: k.intl.format(k.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : lD.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, s4.A)({ title: k.intl.string(k.t.vJiTOL), subtitle: k.intl.string(k.t.UyVVan) })
          : t.isClaimed()
            ? (0, lI.qf)((t) =>
                  (0, x.jsx)(Cp.default, {
                      ...t,
                      handleSubmit: (t) => (0, xY.U_)(t, e).then(b.tEg, Cx),
                      title: e ? k.intl.string(k.t.xca2ts) : k.intl.string(k.t.goXv9g),
                      actionText: e ? k.intl.string(k.t["8lQ2rR"]) : k.intl.string(k.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? k.intl.string(k.t.FB4H1D) : k.intl.string(k.t.gk7h32),
                  }),
              )
            : (0, n5.A)({
                  title: k.intl.string(k.t.xca2ts),
                  subtitle: k.intl.string(k.t.FB4H1D),
                  confirmText: k.intl.string(k.t["8lQ2rR"]),
                  onConfirm: () => (0, xY.U_)("", !0),
              });
}
let C_ = (0, S.Tf)(T.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => k.intl.string(k.t["gIpzR+"]),
        useSubtitle: () => k.intl.string(k.t.Bd6dOf),
        useLabel: () => k.intl.string(k.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => CI(!0),
    }),
    Cb = (0, S.Tf)(T.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => k.intl.string(k.t["p/Tjtp"]),
        useSubtitle: () => k.intl.string(k.t.YvDmKb),
        useLabel: () => k.intl.string(k.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => CI(!1),
        usePredicate: () => {
            let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    CN = (0, S.zZ)(T.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Cb, C_] }),
    CC = (0, S.t_)(T.X.ACCOUNT_PANEL, {
        useTitle: () => k.intl.string(k.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (bc.A.clearBackupCodes(), (0, xY.Uo)());
            };
        },
        useObscuredNotice: op.L,
        buildLayout: () => [b9, N4, Cr, CS, CN],
    }),
    Cy = (0, S.i4)(T.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t["ldCE/p"]),
        icon: ET.UserIcon,
        buildLayout: () => [CC],
    });
var Cv = n(254138),
    Cj = n(290595),
    CO = n(677166),
    CD = n(410310),
    CR = n(405018),
    CL = n(137005);
let CP = "user_settings_data_usage",
    CG = [
        (0, S.zD)("pinot_member_setting", {
            useTitle: () => k.intl.string(CL.default.M33rl6),
            useSubtitle: () =>
                k.intl.format(CL.default.V0EPTo, {
                    learnMoreURL: ey.A.getArticleURL(b.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            usePredicate: () => (0, CO.Zd)(CP),
            useValue: () => !(0, CD.p)().optedOut,
            setValue: (e) => {
                CD.N.updateSetting(!e);
            },
            useDisabled: function () {
                return (0, CD.p)().locked;
            },
            useDisabledMessage: () =>
                k.intl.format(CL.default.Z9bKIJ, {
                    learnMoreURL: ey.A.getArticleURL(b.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            disabledMessageType: "info",
            getDismissibleBadges: () =>
                !(0, CO.ws)(CP, { autoTrackExposure: !1 }) || CR.A.isLocked()
                    ? []
                    : [{ badgeType: p.Xi.NEW, dismissibleContent: eh.M.PINOT_MEMBER_SETTING_NEW_BADGE }],
        }),
    ];
var CM = n(153488),
    CU = n(171316),
    CV = n(327919),
    Ck = n(558001);
n(866945);
var Cw = n(835002);
function CF() {
    let e = (0, CU.uM)(),
        t = (0, Co.vx)(),
        n = I.useCallback(() => {
            ((0, CV.A)(t, tY.default, () =>
                (0, sA.P0)({
                    text: k.intl.formatToPlainString(Cm.default.D1BwNC, { count: t.length }),
                    variant: "critical",
                }),
            ),
                (0, Ck.N)(Cw.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cw.YX.LEARN_MORE));
        }, [t]),
        i = I.useCallback(() => {
            (0, Ck.N)(Cw.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Cw.YX.VIEWED);
        }, []);
    return I.useMemo(() => {
        if (e)
            return {
                type: p.lT.INLINE_NOTICE,
                noticeType: "info",
                role: "none",
                trackView: i,
                text: k.intl.format(Cm.default.i284fU, {
                    hook: (e, t) => (0, x.jsx)(ng.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let CB = (0, S.zD)(T.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => k.intl.string((0, xn.H)() ? xa.default["IxZyA+"] : k.t.AGDDkH),
    useSubtitle: () => k.intl.string((0, xn.H)() ? xa.default.GjNXmw : k.t.kyo3dJ),
    useValue: () => V.Q$.useSetting(),
    setValue: (e) => xs.eQ({ allowVoiceRecording: e }),
});
var CX = n(157559),
    Cz = n(331887);
function CH() {
    let e = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
        t = (0, _.bG)([Cz.A], () => Cz.A.harvestType),
        [n, i] = I.useState(() => Date.now()),
        l = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        s = I.useRef(null);
    return (I.useEffect(() => {
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
let CY = (0, S.Tf)(T.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => k.intl.string(k.t.qfFFos),
        useSubtitle: function () {
            let e = CH();
            if (e.allowed) return k.intl.format(k.t.NRI6vt, { article: ey.A.getArticleURL(b.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return k.intl.string(k.t.hIbRso);
                case "not_verified":
                    return k.intl.format(k.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, x.jsx)(
                                n7.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, nm.openUserSettings)(T.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = ih()(e.nextAllowed).format("MMMM Do YYYY");
                    return k.intl.format(k.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (tr.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                ts.Bo.get({ url: b.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        tr.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        tr.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !CH().allowed,
        useLoading: () => (0, _.bG)([Cz.A], () => Cz.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => k.intl.string(k.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, lI.mM)(async () => {
                        let { default: e } = await n.e(292063).then(n.bind(n, 970018));
                        return (n) => (0, x.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, xY.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            tr.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? CX.A.show({
                                                  title: k.intl.string(k.t.i2iul5),
                                                  body: k.intl.string(k.t["6Nmv4i"]),
                                              })
                                            : CX.A.show({
                                                  title: k.intl.string(k.t.OjbtDm),
                                                  body: k.intl.string(k.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || k.intl.string(k.t["0F5Jyt"]);
                                        CX.A.show({ title: k.intl.string(k.t.OjbtDm), body: t });
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
    CW = (0, S.v_)(T.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => k.intl.string(k.t.D60Gfj),
        useSubtitle: () =>
            k.intl.format(k.t.dszICC, {
                onClickDisable: () => (0, nm.openUserSettings)(T.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, nm.openUserSettings)(T.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var CK = n(641216);
let CZ = (0, oM.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function Cq() {
    let { enabled: e } = CZ.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var CQ = n(884705);
function CJ() {
    return (0, _.bG)([CQ.A], () => CQ.A.isTogglesDisabled());
}
function C$() {
    return !V.vf.useSetting();
}
function C0(e) {
    V.vf.updateSetting(!e);
}
function C1() {
    let e = CJ(),
        t = V.H1.useSetting(),
        n = (0, CU.uM)();
    return e || t || n;
}
let C2 = (0, S.zD)(T.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => k.intl.string(k.t.CyLYKZ),
        useSubtitle: () =>
            k.intl.format(k.t["md5l4/"], { helpdeskArticle: ey.A.getArticleURL(b.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !Cq(),
        useValue: C$,
        setValue: C0,
        useDisabled: C1,
        useSearchTerms: () => [k.intl.string(k.t.CyLYKZ)],
    }),
    C3 = (0, S.zD)(T.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => k.intl.string(k.t.CyLYKZ),
        useSubtitle: () =>
            k.intl.format(k.t["2QFDU/"], { helpdeskArticle: ey.A.getArticleURL(b.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cq,
        useValue: C$,
        setValue: C0,
        useDisabled: C1,
        useSearchTerms: () => [k.intl.string(k.t.CyLYKZ)],
    });
function C4() {
    return !V.H1.useSetting();
}
function C5(e) {
    V.H1.updateSetting(!e);
}
function C6() {
    let e = CJ(),
        t = (0, CU.uM)();
    return e || t;
}
let C8 = (0, S.zD)(T.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => k.intl.string(k.t.sJYh5t),
        useSubtitle: () => k.intl.string(k.t.w4fvxe),
        usePredicate: () => !Cq(),
        useValue: C4,
        setValue: C5,
        useSearchTerms: () => [k.intl.string(k.t.VkS7Yd)],
        useDisabled: C6,
    }),
    C7 = (0, S.zD)(T.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => k.intl.string(k.t.sJYh5t),
        useSubtitle: () =>
            k.intl.format(k.t.cf9mvV, { helpdeskArticle: ey.A.getArticleURL(b.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Cq,
        useValue: C4,
        setValue: C5,
        useSearchTerms: () => [k.intl.string(k.t.VkS7Yd)],
        useDisabled: C6,
    }),
    C9 = (0, S.AK)(T.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: T.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = SQ(2);
            return k.intl.format(k.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = SJ();
            return { type: p.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, _.bG)([i7.Ay], () => i7.Ay.getGamesSeen(!1).some((e) => !(0, SH.n1)(e))) && (0, nI.xl)(),
    }),
    ye = (0, S.gN)(T.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [C9] });
var yt = n(972737);
let yn = (0, S.zD)(T.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => k.intl.string(k.t.XuADY2),
        useSubtitle: () =>
            k.intl.format(k.t.FNqmmX, { helpdeskArticle: ey.A.getArticleURL(b.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, _.bG)([CM.A], () => CM.A.hasConsented(b.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Cj.U)([b.YAq.USAGE_STATISTICS], []).catch(yt.i)
                : (0, yt.O)({
                      header: k.intl.string(k.t.OdPCbN),
                      body: k.intl.string(k.t.MGWabA),
                      confirmText: k.intl.string(k.t["D3+rU4"]),
                      cancelText: k.intl.string(k.t.kYpG0u),
                      onConfirm: () => (0, Cj.U)([], [b.YAq.USAGE_STATISTICS]).catch(yt.i),
                  });
        },
        useSearchTerms: () => [k.intl.string(k.t.XuADY2)],
        useDisabled: CU.uM,
    }),
    yi = (0, S.zZ)(T.X.DATA_USAGE_CATEGORY, {
        useTitle: () => k.intl.string(k.t.QDAriI),
        useInlineNotice: CF,
        initialize: () => {
            CM.A.fetchedConsents || (0, Cj.Q)();
        },
        buildLayout: () => [CW, yn, CK._, C8, C2, ...CG, CB, CY, ye],
    });
var yl = n(870549);
let ys = (0, S.zD)(T.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => k.intl.string(yl.default.F3llsQ),
    useSubtitle: () => k.intl.string(yl.default["6goWcz"]),
    useValue: V.Sy.useSetting,
    setValue: function (e) {
        (V.Sy.updateSetting(e),
            tc.default.track(b.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: S2.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function yr() {
    let e = V.JG.useSetting();
    return (0, _.yK)(
        [mE.Ay, lD.A],
        () => {
            let t = new Set(e);
            return mE.Ay.getFlattenedGuildIds().filter((e) => null != lD.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let ya = (0, S.AK)(T.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = yr();
            if (0 === e.length) return k.intl.format(k.t.QJIJ5p, {});
            let t = lD.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? k.intl.format(k.t["T+8J4A"], { guildName: n })
                : k.intl.format(k.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                n =
                    ((e = yr()),
                    0 ===
                    (t = (0, _.yK)(
                        [lD.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => lD.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: { icon: (0, x.jsx)(Ta, { guild: t[0], size: 48 }), shape: SY.e.SQUIRCLE },
                                backIcon: { icon: (0, x.jsx)(Ta, { guild: t[1], size: 48 }), shape: SY.e.SQUIRCLE },
                            }
                          : { frontIcon: { icon: (0, x.jsx)(Ta, { guild: t[0], size: 48 }), shape: SY.e.SQUIRCLE } });
            return { type: p.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: T.X.ACTIVITY_PRIVACY_PANEL,
    }),
    yo = (0, S.gN)(T.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [ya] }),
    yu = (0, S.Qx)(T.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => k.intl.string(k.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: k.intl.string(k.t.Boxc8R),
                    desc: k.intl.string(k.t["nLj+nc"]),
                    value: e$.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: k.intl.string(k.t.YOIKBt),
                    desc: k.intl.string(k.t.y0JZ4s),
                    value: e$.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: k.intl.string(k.t.u0nlJv), desc: k.intl.string(k.t["4jnKHu"]), value: e$.KP.FRIENDS_ONLY },
            ];
        },
        useValue: V.KP.useSetting,
        setValue: function (e) {
            let t = V.KP.getSetting();
            V.KP.updateSetting(e);
            let i = (0, Tt.gS)(t, e);
            null != i &&
                (0, lI.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(462955), n.e(562041), n.e(763786)]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, x.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [k.intl.string(k.t.Qnf32C)],
    }),
    yd = (0, S.zZ)(T.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => k.intl.string(k.t.ul884f),
        useSubtitle: () =>
            k.intl.format(k.t.N4jSgR, {
                learnMoreUrl: ey.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [yu, ys, yo],
    });
var yc = n(952270),
    yg = n(609649);
let ym = { [e$.tR.REAL_MONEY_GAMING]: yg.default.pmIitA },
    yA = Object.keys(ym).map(Number),
    yE = (0, S.E2)(T.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [k.intl.string(yg.default.foQaI1)],
        usePredicate: Cq,
        Component: function () {
            let e = I.useMemo(
                    () =>
                        yA.map((e) => ({
                            id: String(e),
                            value: e,
                            label: k.intl.string(ym[e]),
                            leading: yc.EyeSlashIcon,
                        })),
                    [],
                ),
                t = V.XZ.useSetting();
            return (0, x.jsx)(p$.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(V.XZ.getSetting());
                    for (let e of yA) t.has(e) ? n.add(e) : n.delete(e);
                    V.XZ.updateSetting([...n]);
                },
                label: k.intl.string(yg.default.foQaI1),
                description: k.intl.format(yg.default["z/MfaY"], {
                    helpdeskArticle: ey.A.getArticleURL(b.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: k.intl.string(yg.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    yh = (0, S.zZ)(T.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => k.intl.string(yg.default.XUj46U),
        usePredicate: Cq,
        buildLayout: () => [C7, C3, yE],
    });
var yS = n(714763),
    yT = n(814278),
    yf = n(597798),
    yp = n(627784),
    yx = n(977997),
    yI = n(144485);
async function y_(e, t) {
    if (e) {
        tr.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            (await (0, yT.to)(1), t?.());
        } catch (t) {
            let e = new yp.LG(t);
            (tr.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                CX.A.show({
                    title: k.intl.string(k.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? k.intl.string(k.t.eAn6z2),
                }));
        }
    } else (tr.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.());
}
n(603266);
let yb = (0, S.zD)(T.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => k.intl.string(k.t["opi/XK"]),
    useSubtitle: () => k.intl.format(k.t["/T+ZlP"], { helpArticle: (0, yT.Lu)() }),
    useValue: function () {
        return (0, _.bG)([yS.A], () => yS.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        !(async function (e) {
            let t,
                n,
                i =
                    ((t = yx.A.getVoiceStateForUser(oL.default.getId())),
                    (n = lj.A.getChannel(t?.channelId)),
                    oL.default.getSessionId() === t?.sessionId && null != n && n.type !== b.rbe.GUILD_STAGE_VOICE
                        ? n.id
                        : null);
            null != i
                ? yI.A.openSecureFramesUpdateConfirmation({
                      title: e ? k.intl.string(k.t.DRFN1B) : k.intl.string(k.t.q29xJz),
                      subtitle: e ? k.intl.string(k.t.y015ZY) : k.intl.string(k.t.E66FQn),
                      confirmText: k.intl.string(k.t.aTuFYT),
                      onConfirm: async () => {
                          await y_(e, () => {
                              (yf.default.disconnect(), yf.default.selectVoiceChannel(i));
                          });
                      },
                  })
                : await y_(e);
        })(e);
    },
});
var yN = n(787392);
function yC() {
    return (0, _.yK)([yN.A], () => yN.A.getUserIds());
}
var yy = n(966327),
    yv = n(774156);
function yj(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eH.Ay)(),
        l = (0, _.bG)([sT.default], () => sT.default.getUser(t)),
        s = di.Ay.getFormattedName(l),
        r = I.useCallback(() => {
            (0, yT.kj)(t);
        }, [t]),
        a = I.useCallback(() => (0, xq.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        I.useEffect(() => {
            (0, he.wz)(t);
        }, [t]),
        (0, x.jsxs)("div", {
            className: yv.uW,
            children: [
                null != l && (0, x.jsx)(yy.A, { className: yv.my, user: l, size: j._3.SIZE_40 }),
                (0, x.jsxs)("div", {
                    className: yv.Qq,
                    children: [
                        (0, x.jsx)(n7.D, {
                            className: yv.Xh,
                            onClick: a,
                            children: (0, x.jsx)(n8.E, {
                                variant: "body-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, x.jsx)(n8.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            children: k.intl.format(k.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, x.jsx)(n7.D, { onClick: r, className: yv.Qz, children: (0, x.jsx)(lA.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function yO(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, yT.tC)(i.timestamp),
        r = I.useCallback(() => {
            (0, yT.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, x.jsxs)("div", {
        className: t,
        children: [
            (0, x.jsxs)("div", {
                className: yv.Qq,
                children: [
                    (0, x.jsx)(n8.E, {
                        variant: "body-sm/semibold",
                        color: "interactive-text-active",
                        children: k.intl.format(k.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, x.jsx)(n8.E, { variant: "body-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, x.jsx)(n7.D, {
                className: yv.Kk,
                onClick: r,
                children: (0, x.jsx)(dc.XSmallIcon, { size: "md", color: n4.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function yD(e) {
    let { userId: t } = e,
        n = (0, _.yK)([yN.A], () =>
            Z()(yN.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsx)(yj, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, x.jsxs)(
                    I.Fragment,
                    {
                        children: [
                            (0, x.jsx)(yO, { className: yv.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, x.jsx)("div", { className: yv.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var yR = n(464946),
    yL = n(492422);
let yP = (0, S.E2)(T.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [k.intl.string(k.t["5b3FNI"])],
        usePredicate: function () {
            let e = yC();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = yC();
            return (0, x.jsxs)(yR.h, {
                children: [
                    (0, x.jsx)(yR._, {
                        header: k.intl.string(k.t["5b3FNI"]),
                        description: k.intl.format(k.t.jrTSWU, { helpArticle: (0, yT.dc)() }),
                    }),
                    e.map((e) => (0, x.jsx)("div", { className: yL.A, children: (0, x.jsx)(yD, { userId: e }) }, e)),
                ],
            });
        },
    }),
    yG = (0, S.zZ)(T.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => k.intl.string(k.t.bTwjaz),
        usePredicate: () => (0, e7.xl)(),
        buildLayout: () => [yb, yP],
    }),
    yM = (0, S.t_)(T.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => k.intl.string(k.t.OAuOHD),
        buildLayout: () => [yi, yh, yd, yG],
    }),
    yU = (0, S.i4)(T.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.OAuOHD),
        icon: Cv.ShieldLockIcon,
        buildLayout: () => [yM],
    });
var yV = n(476713);
let yk = (0, S.AK)(T.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => k.intl.string(k.t.O65dzZ),
        useTitle: () => k.intl.string(k.t["f6kk+r"]),
        destinationKey: T.X.AUTHORIZED_APPS_CATEGORY,
    }),
    yw = (0, S.gN)(T.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [yk] });
var yF = n(875444);
function yB(e, t) {
    let n = (0, _.bG)([TF.A], () => TF.A.getFetchState()),
        i = (0, _.bG)([TF.A], () => (e ? TF.A.getNewestTokensForNonChildrenApplications() : TF.A.getNewestTokens())),
        l = I.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, yF.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        I.useEffect(() => {
            t || Ty.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== TF.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var yX = n(514479);
function yz() {
    return (0, x.jsxs)("div", {
        className: yX.d,
        children: [
            (0, x.jsx)(n8.E, {
                variant: "body-md/medium",
                color: "text-strong",
                className: yX.x,
                children: k.intl.string(k.t["+0U77d"]),
            }),
            (0, x.jsx)(n8.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: k.intl.format(k.t.V8wClM, {
                    helpdeskArticle: ey.A.getArticleURL(b.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let yH = (0, S.E2)(T.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = yB(!0, !0);
        return e ? (0, x.jsx)(oX.y, {}) : (0, x.jsx)(yz, {});
    },
    useSearchTerms: () => [k.intl.string(k.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = yB(!0, !0);
        return e || 0 === t.length;
    },
});
function yY() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = yB(!0, !0);
    return !e && t.length > 0;
}
let yW = (0, S.zD)(T.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => k.intl.string(k.t.W8JtfT),
        useSubtitle: () => k.intl.string(k.t.a99KKy),
        useSearchTerms: () => [k.intl.string(k.t["Uv/eTx"])],
        useValue: () => V.Zk.useSetting(),
        setValue: (e) => V.Zk.updateSetting(e),
        usePredicate: yY,
    }),
    yK = (0, S.Qx)(T.X.IN_GAME_DMS_SETTING, {
        useTitle: () => k.intl.string(k.t["ms+Tme"]),
        useSubtitle: () => k.intl.string(k.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: k.intl.string(k.t.JIFnN9), value: e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: k.intl.string(k.t.rRdsk1), value: e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: k.intl.string(k.t.IVRPMX), value: e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = V.TA.useSetting();
            return e === e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? e$.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => V.TA.updateSetting(e),
        usePredicate: yY,
    });
function yZ() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = yB(!0, !0);
    return {
        sortedGames: I.useMemo(() => e.toSorted((e, t) => ok.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var yq = n(171576);
function yQ(e) {
    let { body: t, button: n, noticeType: i } = e;
    return (
        (0, eb.Ay)(() => {
            (0, Ck.N)(i, Cw.YX.VIEWED);
        }),
        (0, x.jsx)(iQ.w, { type: "info", message: t, action: n, role: "none" })
    );
}
function yJ(e, t) {
    return I.useCallback(() => {
        (t(), (0, Ck.N)(e, Cw.YX.LEARN_MORE));
    }, [e, t]);
}
function y$(e, t) {
    return {
        handleLearnMore: yJ(e, t),
        handleConfirmAge: I.useCallback(() => {
            (bh.A.showAgeVerificationGetStartedModal({ entryPoint: yq.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Ck.N)(e, Cw.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function y0() {
    let e,
        t = (0, CU.uM)(),
        n = (0, bL.fk)(),
        i = (0, bR.b8)(),
        l = (0, Cc.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : l && (e = "teen"), null != e) && (0, bf.x)(bS.LI)) return e;
    }
}
var y1 = n(687123),
    y2 = n(444802);
function y3() {
    let e = (0, y2.WX)();
    I.useEffect(() => {
        (0, Ck.N)(Cw.YA.AGE_CONFIRMATION_NOTICE, Cw.YX.VIEWED);
    }, []);
    let t = I.useCallback(() => {
            (window.open(ey.A.getArticleURL(e), "_blank"), (0, Ck.N)(Cw.YA.AGE_CONFIRMATION_NOTICE, Cw.YX.LEARN_MORE));
        }, [e]),
        n = I.useCallback(() => {
            (bh.A.showAgeVerificationGetStartedModal({ entryPoint: yq.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Ck.N)(Cw.YA.AGE_CONFIRMATION_NOTICE, Cw.YX.CONFIRM_AGE));
        }, []);
    return (0, x.jsx)(iQ.w, {
        type: "info",
        message: k.intl.format(k.t.mFgsfg, { hook: (e, n) => (0, x.jsx)(ng.Anchor, { onClick: t, children: e }, n) }),
        role: "status",
        action: { text: k.intl.string(k.t.FDSSia), onClick: n },
    });
}
function y4() {
    let e = (0, bL.aX)(y1.t.REACTIVE_CHECK),
        t = (0, bR.b8)();
    return I.useMemo(() => {
        if (e && !t) return { type: p.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: y3 };
    }, [e, t]);
}
var y5 = n(323073),
    y6 = n(386171),
    y8 = n(96607);
let y7 = (0, S.zD)(T.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => k.intl.string(k.t.gvC6q7),
        useSubtitle: () => k.intl.string(k.t.zirUC1),
        useValue: y6.hT,
        useDisabled: function () {
            let e = (0, y8.A)() ?? !0,
                t = (0, y5.sP)(),
                n = (0, bR.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, y5.p5)() && e
                ? bh.A.showAgeVerificationGetStartedModal({ entryPoint: yq.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : V.Qe.updateSetting(e);
        },
    }),
    y9 = (0, S.zD)(T.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => k.intl.string(k.t["L+yTsa"]),
        useSubtitle: () => k.intl.string(k.t["t6i/jW"]),
        useValue: y6.tI,
        useDisabled: function () {
            let e = (0, y8.A)() ?? !0,
                t = (0, y5.sP)(),
                n = (0, bR.yM)();
            return I.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, y5.p5)() && e
                ? bh.A.showAgeVerificationGetStartedModal({ entryPoint: yq.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : V.Kg.updateSetting(e);
        },
    }),
    ve = (0, S.AK)(T.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => k.intl.string(k.t.hOXd45),
        destinationKey: T.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    vt = (0, S.gN)(T.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [ve] });
n(667532);
var vn = n(390248),
    vi = n(632119),
    vl = n(945276),
    vs = n(389737),
    vr = n(523009);
function va() {
    let e,
        t = (0, vl.A)() ?? !0,
        n = (0, CU.uM)(),
        i = (0, CU.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, oo.cf)([aP.A], () => aP.A.settings.textAndImages?.explicitContentSettings ?? (0, vi.C$)())),
        {
            explicitContentGuilds: (0, vi.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, vi.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, vi.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, vn.hK)() && t.includes(e$.TO.SHOW)
            ? bh.A.showAgeVerificationGetStartedModal({ entryPoint: yq.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, vi.Jz)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: k.intl.string(k.t.S49Uad) },
            { value: e$.TO.BLOCK, label: k.intl.string(k.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: k.intl.string(k.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: k.intl.string(k.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? k.intl.string(Cm.default["6Af/cw"]) : void 0 };
    return (0, x.jsxs)(vs.E, {
        description: k.intl.string(k.t.Wnojv1),
        children: [
            (0, x.jsx)(vr.A, {
                title: k.intl.string(k.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, x.jsx)(vr.A, {
                title: k.intl.string(k.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, x.jsx)(vr.A, {
                title: k.intl.string(k.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? k.intl.string(Cm.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function vo() {
    let e,
        t = (0, vl.A)() ?? !0,
        n = (0, CU.uM)(),
        i = (0, CU.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, oo.cf)([aP.A], () => aP.A.settings.textAndImages?.goreContentSettings ?? (0, y2.T4)())),
        {
            goreContentGuilds: (0, y2.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, y2.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, y2.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, vn.hK)() && t.includes(e$.TO.SHOW)
            ? bh.A.showAgeVerificationGetStartedModal({ entryPoint: yq.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, y2.qY)(e);
    }
    let o = [
            { value: e$.TO.BLUR, label: k.intl.string(k.t.S49Uad) },
            { value: e$.TO.BLOCK, label: k.intl.string(k.t["D/157Y"]) },
        ],
        u = [{ value: e$.TO.BLUR, label: k.intl.string(k.t.S49Uad) }],
        d = { value: e$.TO.SHOW, label: k.intl.string(k.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? k.intl.string(Cm.default["6Af/cw"]) : void 0 };
    return (0, x.jsxs)(vs.E, {
        description: k.intl.string(k.t.XgH9eh),
        children: [
            (0, x.jsx)(vr.A, {
                title: k.intl.string(k.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, x.jsx)(vr.A, {
                title: k.intl.string(k.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, x.jsx)(vr.A, {
                title: k.intl.string(k.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? k.intl.string(Cm.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var vu = n(875162),
    vd = n(636745);
let vc = (0, S.E2)(T.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, y2.WX)(),
            t = I.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: k.intl.string(k.t.GYpoAq),
                        component: va,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: k.intl.string(k.t["16/3Bi"]),
                        component: vo,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, x.jsxs)(yR.h, {
            children: [
                (0, x.jsx)(yR._, {
                    header: k.intl.string(k.t["Hj/But"]),
                    description: k.intl.format(k.t.dliU4j, { learnMoreLink: ey.A.getArticleURL(e) }),
                }),
                (0, x.jsx)(vu.A, { tabs: t, orientation: "vertical", tabsClassName: vd.v }),
            ],
        });
    },
    useSearchTerms: () => [
        k.intl.string(k.t["Hj/But"]),
        k.intl.string(k.t["N/oRI+"]),
        k.intl.string(k.t.QVdYsK),
        k.intl.string(k.t["aWD+tu"]),
        k.intl.string(k.t["5mnTa7"]),
        k.intl.string(k.t["K0OWP+"]),
    ],
});
var vg = n(639555),
    vm = n(617641),
    vA = n(546140),
    vE = n(406935),
    vh = n(594061);
let vS = (0, S.zD)(T.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => k.intl.string(k.t.qFsx5q),
        useSubtitle: () => k.intl.format(k.t.lunaRv, { learnMoreLink: ey.A.getArticleURL(b.MVz.SAFETY_ALERTS) }),
        useValue: vA.L,
        setValue: function (e) {
            return vh.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = vE._t.create({ value: e });
                },
                vh.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, vm.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, vg.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, vl.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    vT = (0, S.zZ)(T.X.CONTENT_CATEGORY, {
        useTitle: () => k.intl.string(k.t["3upKU8"]),
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
                S = CF(),
                T =
                    ((l = (0, CU.uM)()),
                    (s = (0, bL.fk)()),
                    (r = (0, bR.b8)()),
                    (a = (0, Cc.Z)()),
                    (o = y$(Cw.YA.AGE_CONFIRMATION_NOTICE, bT)),
                    (u = yJ(Cw.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, bA.M0)),
                    (d = I.useCallback(() => {
                        (0, Ck.N)(Cw.YA.AGE_CONFIRMATION_NOTICE, Cw.YX.VIEWED);
                    }, [])),
                    (c = I.useCallback(() => {
                        (0, Ck.N)(Cw.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cw.YX.VIEWED);
                    }, [])),
                    I.useMemo(() => {
                        if (!l && (0, bf.x)(bS.LI)) {
                            if (s && !r)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: d,
                                    text: k.intl.format(bx.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: { text: k.intl.string(bx.default["cI+bc/"]), onClick: o.handleConfirmAge },
                                };
                            if (a)
                                return {
                                    type: p.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    role: "none",
                                    trackView: c,
                                    text: k.intl.format(bx.default.HBnyJM, { handleOnAgeGatedContentHook: u }),
                                };
                        }
                    }, [s, l, a, r, u, c, d, o])),
                f =
                    ((e = (0, Cc.Z)()),
                    (t = (0, y2.WX)()),
                    (n = I.useCallback(() => {
                        (window.open(ey.A.getArticleURL(t), "_blank"),
                            (0, Ck.N)(Cw.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cw.YX.LEARN_MORE));
                    }, [t])),
                    (i = I.useCallback(() => {
                        (0, Ck.N)(Cw.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Cw.YX.VIEWED);
                    }, [])),
                    I.useMemo(() => {
                        if (e)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: i,
                                text: k.intl.format(k.t.EUo0yj, {
                                    hook: (e, t) => (0, x.jsx)(ng.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                _ =
                    ((g = (0, bL.SJ)()),
                    (m = (0, bR.b8)()),
                    (A = g && !m),
                    (E = I.useCallback(() => {
                        (bh.A.showAgeVerificationGetStartedModal({ entryPoint: yq.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, Ck.N)(Cw.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cw.YX.LEARN_MORE));
                    }, [])),
                    (h = I.useCallback(() => {
                        (0, Ck.N)(Cw.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Cw.YX.VIEWED);
                    }, [])),
                    I.useMemo(() => {
                        if (A)
                            return {
                                type: p.lT.INLINE_NOTICE,
                                noticeType: "info",
                                role: "none",
                                trackView: h,
                                text: k.intl.format(k.t.OX4ybh, {
                                    hook: (e, t) => (0, x.jsx)(ng.Anchor, { onClick: E, children: e }, t),
                                }),
                            };
                    }, [E, A, h])),
                b = y4();
            return S ?? T ?? b ?? _ ?? f;
        },
        buildLayout: () => [vc, vS, y7, y9, vt],
    });
var vf = n(923457),
    vp = n(750714);
let vx = (0, S.Qx)(T.X.DM_SPAM_SETTING, {
        useTitle: () => k.intl.string(k.t.puwSkY),
        useSubtitle: () => k.intl.string(k.t["+sXN3T"]),
        useValue: function () {
            let e = V.he.useSetting(),
                t = V.cj.useSetting(),
                n = (0, _.bG)([sT.default], () => sT.default.getCurrentUser()),
                i = (0, bL.yv)(vf.p.SPAM_FILTERS);
            return e !== e$.he.DEFAULT_UNSET
                ? e
                : n?.nsfwAllowed === !1 && i
                  ? e$.he.FRIENDS_AND_NON_FRIENDS
                  : (vp.xY.get(t) ?? e$.he.NON_FRIENDS);
        },
        setValue: (e) => V.he.updateSetting(e),
        useOptions: function () {
            return [
                { name: k.intl.string(k.t["+w5yKk"]), value: e$.he.FRIENDS_AND_NON_FRIENDS },
                { name: k.intl.string(k.t.yAPg6r), value: e$.he.NON_FRIENDS },
                { name: k.intl.string(k.t.FEXKsv), value: e$.he.DISABLED },
            ];
        },
        useSearchTerms: () => [k.intl.string(k.t.JzaP4h), k.intl.string(k.t.H9XOl3), k.intl.string(k.t.k4W40P)],
    }),
    vI = (0, S.zD)(T.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => k.intl.string(k.t["7x9dyE"]),
        useValue: function () {
            let e = V.FA.useSetting();
            return I.useMemo(() => (0, ir.Lx)(e), [e]).all;
        },
        setValue: function (e) {
            V.FA.updateSetting(e ? 14 : 14 & ~b.dzt.NO_RELATION);
        },
        useDisabled: function () {
            return (0, CU.uM)();
        },
    }),
    v_ = (0, S.zD)(T.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => k.intl.string(k.t.NfeuZ3),
        useValue: function () {
            let e = V.FA.useSetting(),
                t = I.useMemo(() => (0, ir.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = V.FA.getSetting();
            V.FA.updateSetting(e ? uO.UI(t, b.dzt.MUTUAL_FRIENDS) : uO.iE(t, b.dzt.MUTUAL_FRIENDS, b.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, CU.uM)();
        },
    }),
    vb = (0, S.zD)(T.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => k.intl.string(k.t.qsMfsH),
        useSubtitle: () => k.intl.string(k.t["6DqAp0"]),
        useValue: function () {
            let e = V.FA.useSetting(),
                t = I.useMemo(() => (0, ir.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = V.FA.getSetting();
            V.FA.updateSetting(e ? uO.UI(t, b.dzt.MUTUAL_GUILDS) : uO.iE(t, b.dzt.MUTUAL_GUILDS, b.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, CU.uM)();
        },
    }),
    vN = (0, S.FW)(T.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => k.intl.string(k.t.wTdS6S),
        buildLayout: () => [vI, v_, vb],
    });
var vC = n(420825);
let vy = (0, S.zD)(T.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => k.intl.string(k.t["jK+wdr"]),
        useSubtitle: () => k.intl.string(k.t["RYh/pW"]),
        useValue: () => !(0, vC.q)(),
        setValue: function (e) {
            V.Zd.updateSetting(!e);
        },
    }),
    vv = (0, S.zZ)(T.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => k.intl.string(k.t["5gxWrt"]),
        useSubtitle: () => k.intl.string(k.t.QVbF3l),
        useSubnavLabel: () => k.intl.string(k.t.fyA115),
        useInlineNotice: CF,
        buildLayout: () => [vN, vy],
    });
var vj = n(994500),
    vO = n(49229),
    vD = n(730134),
    vR = n(276573);
function vL(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, x.jsxs)("div", {
        className: vR.wx,
        children: [
            (0, x.jsx)("div", {
                className: vR.zc,
                children: i ? (0, x.jsx)(xP.DenyIcon, {}) : (0, x.jsx)(yc.EyeSlashIcon, {}),
            }),
            (0, x.jsxs)("div", {
                className: vR.Qq,
                children: [
                    (0, x.jsx)(n8.E, {
                        variant: "body-md/semibold",
                        color: "interactive-text-active",
                        children: k.intl.string(i ? k.t.PFOUKW : k.t["93ZDWE"]),
                    }),
                    (0, x.jsx)(n8.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: i
                            ? k.intl.format(k.t["r91W/h"], { numberOfBlockedUsers: n })
                            : k.intl.format(k.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function vP(e) {
    let { userId: t, last: n } = e,
        i = (0, _.bG)([vj.A], () => vj.A.isBlocked(t)),
        l = (0, _.bG)([sT.default], () => sT.default.getUser(t)),
        [s, r] = I.useState(!1),
        a = I.useCallback(() => {
            (r(!0),
                i
                    ? vO.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : vO.A.unignoreUser(t, tw.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == l
        ? null
        : (0, x.jsxs)("div", {
              className: iA()(vR.nM, { [vR.fW]: n }),
              children: [
                  (0, x.jsxs)("div", {
                      className: vR.eF,
                      children: [
                          (0, x.jsx)(vD.A, { user: l, size: j._3.SIZE_40 }),
                          (0, x.jsxs)("div", {
                              className: vR.Qq,
                              children: [
                                  (0, x.jsx)(n8.E, {
                                      variant: "body-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, x.jsx)(n8.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, x.jsx)(O.$, {
                      variant: "secondary",
                      text: k.intl.string(i ? k.t.XyHpKH : k.t["8wXU9B"]),
                      onClick: a,
                      loading: s,
                  }),
              ],
          });
}
function vG(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = I.useState(5);
    return (0, x.jsx)(yR.h, {
        children: (0, x.jsxs)("div", {
            className: vR.Nr,
            children: [
                (0, x.jsx)(vL, { listType: n, numberOfUsers: t.length }),
                (0, x.jsx)("div", {
                    className: vR.jS,
                    children: t.slice(0, i).map((e, n) => (0, x.jsx)(vP, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, x.jsx)("div", {
                          className: vR.vM,
                          children: (0, x.jsx)(n7.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: vR.Qf,
                              children: (0, x.jsx)(n8.E, {
                                  variant: "body-sm/semibold",
                                  color: "text-default",
                                  children: k.intl.format(k.t.jULEDr, {
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
let vM = (0, S.E2)(T.X.BLOCKED_USERS, {
        useSearchTerms: () => [k.intl.string(k.t.PFOUKW)],
        usePredicate: () => (0, _.bG)([vj.A], () => vj.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, _.yK)([vj.A], () => vj.A.getBlockedIDs());
            return (0, x.jsx)(vG, { userIds: e, listType: "blocked" });
        },
    }),
    vU = (0, S.E2)(T.X.IGNORED_USERS, {
        useSearchTerms: () => [k.intl.string(k.t["93ZDWE"])],
        usePredicate: () => (0, _.bG)([vj.A], () => vj.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, _.yK)([vj.A], () => vj.A.getIgnoredIDs());
            return (0, x.jsx)(vG, { userIds: e, listType: "ignored" });
        },
    }),
    vV = (0, S.zZ)(T.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => k.intl.string(k.t["+Iryf3"]),
        useSubtitle: () =>
            k.intl.format(k.t["0aNQo9"], { helpArticle: ey.A.getArticleURL(b.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [vM, vU],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, _.cf)([vj.A], () => ({
                hasBlockedUsers: vj.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: vj.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var vk = n(22385),
    vw = n(556534),
    vF = n(111159),
    vB = n(152056),
    vX = n(428031),
    vz = n(978433);
let vH = { label: () => k.intl.string(k.t["32u1Dx"]), value: "0" };
var vY = n(307863),
    vW = n(954225);
function vK() {
    return (0, vY.e)() ? k.intl.string(k.t.PMsfcH) : k.intl.string(k.t.RAQUSN);
}
function vZ(e, t) {
    tc.default.track(b.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let vq = (0, S.zD)(T.X.PERMISSIONS_DMS_SETTING, {
    useTitle: vK,
    useSubtitle: function () {
        let e = (0, vw.Tx)(),
            t = (0, vw.q9)(),
            n = (0, vY.e)();
        return "0" === e
            ? n
                ? k.intl.string(k.t.XXGmuB)
                : k.intl.string(k.t.wbYDfT)
            : t
              ? k.intl.string(k.t.V0ka0Q)
              : n
                ? k.intl.string(k.t.F9WY3f)
                : k.intl.string(k.t.G7c3Xo);
    },
    useValue: function () {
        let e = (0, vw.Tx)(),
            t = V.$s.useSetting().includes(e),
            n = (0, vX.K)();
        return "0" === e ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, CU.uM)();
        return "0" === (0, vw.Tx)() && e;
    },
    setValue: function (e) {
        let t = vk.xk.getState().selectedGuildId;
        if ("0" === t) {
            var n;
            ((n = !e),
                (0, yt.O)({
                    header: k.intl.string(k.t["uUr+GR"]),
                    body: k.intl.string(k.t.hjGJBp),
                    confirmText: k.intl.string(k.t.gm1Vej),
                    cancelText: k.intl.string(k.t.p89ACt),
                    confirmButtonColor: s5.$n.Colors.BRAND,
                    onConfirm: function () {
                        (V.n6.updateSetting(n), vZ(n, !1));
                    },
                    onCancel: function () {
                        (V.n6.updateSetting(n), V.$s.updateSetting(n ? lD.A.getGuildIds() : []), vZ(n, !0));
                    },
                }));
        } else {
            let n = (0, ir.Tb)();
            (e ? n.delete(t) : n.add(t),
                V.$s.updateSetting(Array.from(n)),
                tc.default.track(b.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: vW.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eR.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var vQ = n(116774),
    vJ = n(953298);
function v$(e, t) {
    tc.default.track(b.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function v0() {
    return k.intl.string(k.t["3o2ojh"]);
}
let v1 = (0, S.zD)(T.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: v0,
        useSubtitle: function () {
            let e = (0, vw.q9)(),
                t = ey.A.getArticleURL(b.MVz.MESSAGE_REQUESTS);
            return e
                ? k.intl.format(k.t.WpnWLc, { helpdeskArticle: t })
                : k.intl.format(k.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, vw.Tx)(),
                t = (0, vX.K)(),
                n = V.$s.useSetting().includes(e),
                i = (0, vQ.s)(),
                l = (0, CU.uM)(),
                s = V.YX.useSetting(),
                r = V.Zr.useSetting().includes(e);
            return !!i || ("0" === e && l ? !s : "0" === e ? !t && !s : !n && !r);
        },
        useDisabled: function () {
            let e = (0, vw.Tx)(),
                t = (0, CU.uM)(),
                n = (0, vX.K)(),
                i = V.$s.useSetting().includes(e),
                l = (0, vQ.s)();
            return "0" === e ? n || t || l : i || l;
        },
        setValue: function (e) {
            let t = vk.xk.getState().selectedGuildId;
            if (!e && (0, vJ.w)())
                return void bh.A.showAgeVerificationGetStartedModal({ entryPoint: yq.q1.MESSAGE_REQUESTS_SETTINGS });
            if ("0" === t) {
                var n;
                ((n = !e),
                    (0, yt.O)({
                        header: k.intl.string(k.t.yAfu1p),
                        body: k.intl.string(k.t.Ry2z74),
                        confirmText: k.intl.string(k.t.gm1Vej),
                        cancelText: k.intl.string(k.t.p89ACt),
                        confirmButtonColor: s5.$n.Colors.BRAND,
                        onConfirm: function () {
                            (V.YX.updateSetting(n), v$(n, !1));
                        },
                        onCancel: function () {
                            (V.YX.updateSetting(n), V.Zr.updateSetting(n ? lD.A.getGuildIds() : []), v$(n, !0));
                        },
                    }));
            } else {
                let n = (0, ir.xo)();
                (e ? n.delete(t) : n.add(t),
                    V.Zr.updateSetting(Array.from(n)),
                    tc.default.track(b.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: vW.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eR.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    v2 = (0, S.E2)(T.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [vK(), v0()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, vk.xk)(),
                l = (0, _.bG)([mE.Ay], () => mE.Ay.getFlattenedGuildIds()),
                s = (0, _.bG)([lD.A], () => lD.A.getGuilds()),
                r =
                    ((e = V.$s.useSetting()),
                    (t = (0, vX.K)()),
                    (0, _.bG)(
                        [lD.A],
                        () => {
                            let n = new Set(e);
                            return lD.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = l[0];
            I.useEffect(
                () =>
                    vB.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = vk.xk.getState().selectedGuildId;
                            "" === t && "" !== e && "0" === n && null != a ? i(a) : "" === e && "0" !== n && i("0");
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = I.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...vH,
                        id: vH.value,
                        label: vH.label(),
                        leading: (0, x.jsx)("div", {
                            className: vz.KP,
                            children: (0, x.jsx)(vF.ClydeIcon, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: vz.cl,
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
                                leading: (0, x.jsx)(my.Ay, {
                                    className: vz.cl,
                                    guild: n,
                                    size: my.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [l, s]);
            return (0, x.jsxs)(x.Fragment, {
                children: [
                    (0, x.jsx)(p$.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    "0" === n &&
                        r > 0 &&
                        (0, x.jsx)(n8.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            className: vz.h_,
                            children: k.intl.format(k.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, x.jsx)(
                                        n8.E,
                                        { tag: "span", variant: "body-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    v3 = (0, S.E2)(T.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, vw.Tx)(),
                t = y0();
            return "0" === e && null != t;
        },
        Component: function () {
            let e = y0(),
                t = y$(Cw.YA.AGE_CONFIRMATION_NOTICE, bT),
                n = yJ(Cw.YA.CONTENT_AND_SOCIAL_NOTICE, bA.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, x.jsx)(yQ, {
                        noticeType: Cw.YA.AGE_CONFIRMATION_NOTICE,
                        body: k.intl.format(bx.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        button: { text: k.intl.string(bx.default["cI+bc/"]), onClick: t.handleConfirmAge },
                    });
                case "teen":
                    return (0, x.jsx)(yQ, {
                        noticeType: Cw.YA.CONTENT_AND_SOCIAL_NOTICE,
                        body: k.intl.format(bx.default["5KHq55"], { handleOnAgeGatedContentHook: n }),
                    });
                case void 0:
                    return null;
            }
        },
    }),
    v4 = (0, S.zZ)(T.X.PERMISSIONS_CATEGORY, {
        useTitle: () => k.intl.string(k.t.Y5GYcX),
        useSubnavLabel: () => k.intl.string(k.t.YUU0RF),
        useInlineNotice: function () {
            let e = CF(),
                t = y4();
            if ("0" === (0, vw.Tx)()) return e ?? t;
        },
        buildLayout: () => [v2, vq, v1, v3],
    }),
    v5 = (0, S.zZ)(T.X.SPAM_FILTERS_CATEGORY, { useTitle: () => k.intl.string(k.t.Qwuoic), buildLayout: () => [vx] }),
    v6 = (0, S.zZ)(T.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => k.intl.string(k.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = yZ();
            function t(e, t) {
                return (0, x.jsx)(
                    n8.E,
                    { tag: "span", variant: "body-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? k.intl.string(k.t.Amr1IZ)
                : 1 === e.length
                  ? k.intl.format(k.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? k.intl.format(k.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : k.intl.format(k.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => k.intl.string(k.t.YpCiMt),
        useHeaderDecoration: () => {
            let e = (function () {
                let { sortedGames: e } = yZ();
                return I.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, x.jsx)("img", {
                                src: U.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: 48,
                                height: 48,
                            }),
                            shape: SY.e.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, x.jsx)("img", {
                                    src: U.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: 40,
                                    height: 40,
                                }),
                                shape: SY.e.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: p.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [k.intl.string(k.t.YpCiMt)],
        initialize: () => {
            Ty.A.fetch();
        },
        buildLayout: () => [yW, yK, yH, yw],
    }),
    v8 = (0, S.t_)(T.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => k.intl.string(k.t.Cz07t8),
        buildLayout: () => [vT, v5, v4, vv, v6, vV],
    }),
    v7 = (0, S.i4)(T.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.Cz07t8),
        icon: yV.ChatShieldIcon,
        buildLayout: () => [v8],
    });
var v9 = n(782603),
    je = n(899847),
    jt = n(695515);
let jn = (0, S.Hn)(T.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => k.intl.string(k.t["8rHeOr"]),
        useSubtitle: () => k.intl.string(k.t["eJE6+J"]),
        useValue: V.cU.useSetting,
        setValue: V.cU.updateSetting,
        useOptions: () =>
            K.range(1, 11).map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: k.intl.formatToPlainString(k.t.iXLF9W, { minutes: e }),
            })),
    }),
    ji = (0, S.zD)(T.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => k.intl.string(k.t["btbS+Z"]),
        useSubtitle: () =>
            k.intl.format(k.t.Q5crhR, { onClick: () => (0, nm.openUserSettings)(T.X.TTS_PLAYBACK_RATE) }),
        useValue: V.on.useSetting,
        setValue: V.on.updateSetting,
    }),
    jl = (0, S.Qx)(T.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => k.intl.string(k.t.JZxxGx),
        useSubtitle: () => k.intl.string(k.t.HDLtJl),
        useValue: () => (0, _.bG)([az.A], () => az.A.getTTSType()),
        setValue: (e) => aZ.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: k.intl.string(k.t.B1AGeJ), value: b.aVn.ALL_CHANNELS },
                { name: k.intl.string(k.t.uzZg9e), value: b.aVn.SELECTED_CHANNEL },
                { name: k.intl.string(k.t.DYO5Oi), value: b.aVn.NEVER },
            ];
        },
        usePredicate: () => W.$j,
    }),
    js = T.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    jr = (0, S.bd)(js, {
        useTitle: (e) => (e ? k.intl.string(k.t.RyimDk) : k.intl.string(k.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return t_(js, {
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
        buildLayout: () => [jn, ji, jl],
    }),
    ja = (0, S.zZ)(T.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => k.intl.string(k.t["31DySj"]),
        buildLayout: () => [jr],
    }),
    jo = (0, S.zD)(T.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => k.intl.string(k.t.VH8AIJ),
        useSubtitle: () => k.intl.string(k.t["9K4qwX"]),
        useValue: function () {
            return (0, _.bG)([az.A], () => !az.A.getDisableUnreadBadge());
        },
        setValue: (e) => aZ.default.setDisableUnreadBadge(!e),
    }),
    ju = (0, S.zZ)(T.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => k.intl.string(k.t.l6w3Vj),
        buildLayout: () => [jo],
    });
var jd = n(840559),
    jc = n(997187);
let jg = (0, oM.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var jm = n(723923);
let jA = jm.px.map((e) =>
        (0, S.zD)(`${T.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, _.cf)([jc.A], () => jc.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, jd.CA)(e.category, t),
        }),
    ),
    jE = (0, S.Tf)(T.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => k.intl.string(k.t.Ra9Pwk),
        useLabel: () => k.intl.string(k.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, _.cf)([jc.A], () => jc.A.getEmailSettings());
            return jm.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, jd.NI)(),
        useVariant: () => "critical-secondary",
    }),
    jh = (0, S.zZ)(T.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => k.intl.string(k.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = jg.useConfig({ location: "Email Settings Category" });
            return e ? k.intl.string(k.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = jc.A.getEmailSettings();
            e || (0, jd.cR)();
        },
        buildLayout: () => [...jA, jE],
    }),
    jS = (0, S.zD)(T.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => k.intl.string(k.t["/0WCll"]),
        useSubtitle: () => k.intl.string(k.t.wF9ih3),
        useValue: function () {
            return (0, _.bG)([az.A], () => az.A.getDesktopType()) !== b.nRU.NEVER;
        },
        setValue: (e) => aZ.default.setDesktopType(e ? b.nRU.ALL : b.nRU.NEVER),
    });
var jT = n(832712),
    jf = n(543465),
    jp = n(790782);
let jx = (0, S.zD)(T.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => k.intl.string(k.t["k6m/si"]),
    useSubtitle: () => k.intl.string(k.t.LGynPs),
    useValue: () => (0, _.bG)([jf.Ay], () => jf.Ay.useNewNotifications),
    setValue: function (e) {
        (jT.A.setAccountFlag(S2.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (h8.w.set("turnedOffNewNotifications", !0),
                tc.default.track(b.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lD.A.getGuildsArray().filter(
                        (e) => jf.Ay.resolveGuildUnreadSetting(e) === jp.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, _.bG)(
            [sT.default, jf.Ay],
            () =>
                sT.default.getCurrentUser()?.isStaff() ||
                sT.default.getCurrentUser()?.isStaffPersonal() ||
                jf.Ay.useNewNotifications,
        ),
});
var jI = n(534654);
let j_ = (0, S.zD)(T.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => k.intl.string(k.t.z9h8Ym),
        useSubtitle: () => k.intl.string(k.t.TummoQ),
        useValue: () => (0, _.bG)([az.A], () => az.A.screenDowntimeReminder),
        setValue: (e) => aZ.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, jI.A)(),
                t = (0, Co.Du)();
            return e && t;
        },
    }),
    jb = (0, S.zD)(T.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => k.intl.string(k.t.onrAy7),
        useSubtitle: () => k.intl.string(k.t["/071J7"]),
        useValue: V.gY.useSetting,
        setValue: (e) => V.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, jI.A)(),
                t = (0, Co.Du)();
            return e && t;
        },
    }),
    jN = (0, S.zD)(T.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => k.intl.string(k.t.NjOMvh),
        useValue: V.oz.useSetting,
        setValue: function (e) {
            (V.oz.updateSetting(e),
                tc.default.track(b.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S2.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [k.intl.string(k.t.hi4dSk)],
    }),
    jC = (0, S.zD)(T.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => k.intl.string(k.t.sQQgFj),
        useValue: V.NR.useSetting,
        setValue: function (e) {
            (V.NR.updateSetting(e),
                tc.default.track(b.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S2.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    jy = (0, S.zD)(T.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => k.intl.string(k.t.FSNIvs),
        useValue: V.Yh.useSetting,
        setValue: function (e) {
            (V.Yh.updateSetting(e),
                tc.default.track(b.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S2.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    jv = (0, S.zD)(T.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => k.intl.string(k.t.xBLMhQ),
        useValue: V.T3.useSetting,
        setValue: function (e) {
            (V.T3.updateSetting(e),
                tc.default.track(b.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S2.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var jj = n(815807);
let jO = (0, S.Hn)(T.X.REACTION_NOTIFICATIONS, {
        useTitle: () => k.intl.string(k.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: k.intl.string(k.t["9x/RtT"]), value: e$.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: k.intl.string(k.t.fJAbQd), value: e$.Tz.ONLY_DMS },
            { id: "disabled", label: k.intl.string(k.t["xu+UDU"]), value: e$.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: V.Zp.useSetting,
        setValue: (e) => (0, jj.n4)(e, V.Zp.getSetting()),
    }),
    jD = (0, S.zD)(T.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => k.intl.string(k.t["k51K1+"]),
        useValue: V.Qr.useSetting,
        setValue: function (e) {
            (V.Qr.updateSetting(e),
                tc.default.track(b.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S2.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    jR = (0, oM.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    jL = (0, S.zD)(T.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => k.intl.string(k.t.G8NPz6),
        useValue: V.zS.useSetting,
        setValue: function (e) {
            (V.zS.updateSetting(e),
                tc.default.track(b.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: S2.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => jR.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    jP = (0, S.FW)(T.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => k.intl.string(k.t.FEVRDV),
        buildLayout: () => [jy, jN, jC, jD, jL, jv, jO],
    }),
    jG = (0, S.zD)(T.X.TASK_BAR_FLASHING, {
        useTitle: () => k.intl.string(k.t.xSmFQG),
        useSubtitle: () => k.intl.string(k.t.bd4j4x),
        useValue: () => (0, _.bG)([az.A], () => az.A.taskbarFlash),
        setValue: (e) => aZ.default.setTaskbarFlash(e),
        usePredicate: () => (0, nI.uF)(),
    }),
    jM = (0, S.zZ)(T.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => k.intl.string(k.t["/dp6yY"]),
        buildLayout: () => [jS, jG, jP, jx, jb, j_],
    });
var jU = n(965957),
    jV = n(312671),
    jk = n(235079);
let jw = (0, S.zD)(T.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aH.A.useHolidaySoundpack();
        return null == e ? "" : k.intl.format(k.t["E/OyBr"], { soundpack: k.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, _.bG)([jV.A], () => jV.A.getSoundpack()),
            t = aH.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aH.A.getHolidaySoundpack();
        (th()(null != t, "predicate should fail if no soundpack is available"), (0, jU.p)(e ? t : jk.i.CLASSIC));
    },
    usePredicate: aH.A.useIsEligible,
});
var jF = n(970931);
let jB = {
        useTitle: () => k.intl.string(k.t.jD1qzM),
        sound: "message1",
        useDisabled: jF.kB,
        useDisabledMessage: () => ((0, jF.kB)() ? k.intl.string(k.t.cIRG0s) : void 0),
    },
    jX = { useTitle: () => k.intl.string(k.t.XBrJT6), sound: "call_ringing" },
    jz = (0, S.zD)(T.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => k.intl.string(k.t.TzjwV9),
        useSubtitle: () => k.intl.format(k.t.OOiGCM, { onClick: () => aJ("message3") }),
        useValue: () =>
            (0, _.bG)([az.A], () => az.A.getNotifyMessagesInSelectedChannel() && !az.A.getDisableAllSounds()),
        setValue: (e) => aZ.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, _.bG)([az.A], () => az.A.getDisableAllSounds()),
    }),
    jH = (0, S.zD)(T.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => k.intl.string(k.t["2ZhCOd"]),
        useSubtitle: () => k.intl.string(k.t.EAKdPr),
        useValue: () => (0, _.bG)([az.A], () => az.A.getDisableAllSounds()),
        setValue: (e) => aZ.default.toggleDisableAllSounds(e),
    }),
    jY = (0, S.D1)(T.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aQ();
            };
        },
        buildLayout: () => [a$(jB), jz, a$(jX), jH],
    }),
    jW = (0, S.AK)(T.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => k.intl.string(k.t["MMy+lm"]),
        useSearchTerms: () => [k.intl.string(k.t["MMy+lm"])],
        destinationKey: T.X.SOUNDS_CATEGORY,
    }),
    jK = (0, S.gN)(T.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [jW] }),
    jZ = (0, S.zZ)(T.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => k.intl.string(k.t.LweOYy),
        buildLayout: () => [jw, jY, jK],
    }),
    jq = (0, S.t_)(T.X.NOTIFICATIONS_PANEL, {
        useTitle: () => k.intl.string(k.t.HcoRu0),
        initialize: () => {
            null != jt.A.getAgeGroup() || jt.A.isLoading() || (jt.A.canRefetch() && je.Ay.initialPageLoad());
        },
        buildLayout: () => [jM, jZ, ju, jh, ja],
    }),
    jQ = (0, S.i4)(T.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => k.intl.string(k.t.HcoRu0),
        icon: v9.BellIcon,
        buildLayout: () => [jq],
    }),
    jJ = (0, S.WI)(T.X.USER_SECTION, {
        useTitle: () => k.intl.string(k.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Cy, yU, v7, jQ],
    });
var j$ = n(387758),
    j0 = n(271866),
    j1 = n(147964),
    j2 = n(868511);
let j3 = (0, S.zD)(T.X.APPLICATION_TEST_MODE, {
        useTitle: () => k.intl.string(k.t.erOqlh),
        useSubtitle: () => k.intl.string(k.t["52hMnD"]),
        usePredicate: V.Q_.useSetting,
        useValue: () => (0, _.bG)([j1.A], () => null != j1.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, lI.qf)((e) => (0, x.jsx)(j2.A, { ...e })) : j0.cL();
        },
    }),
    j4 = (0, S.zD)(T.X.DEVELOPER_MODE, {
        useTitle: () => k.intl.string(k.t.ObIb1Q),
        useSubtitle: () => k.intl.format(k.t["CY6q/Q"], { apiDocsUrl: b.X7G.API_DOCS }),
        useValue: V.Q_.useSetting,
        setValue: V.Q_.updateSetting,
        usePredicate: () => uq.p5,
    }),
    j5 = (0, S.zZ)(T.X.DEVELOPER_CATEGORY, { buildLayout: () => [j4, j3] }),
    j6 = (0, S.t_)(T.X.DEVELOPER_PANEL, { useTitle: () => k.intl.string(k.t["0BRxRp"]), buildLayout: () => [j5] }),
    j8 = (0, S.i4)(T.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: j$.AngleBracketsIcon,
        useTitle: () => k.intl.string(k.t["0BRxRp"]),
        buildLayout: () => [j6],
    });
var j7 = n(70688),
    j9 = n(830215);
let Oe = (0, S.i4)(T.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => k.intl.string(k.t["2jxGer"]),
        icon: j7.DoorExitIcon,
        onClick: () => {
            (0, n5.A)({
                title: k.intl.string(k.t["2jxGer"]),
                subtitle: k.intl.string(k.t.SUnWBB),
                confirmText: k.intl.string(k.t["2jxGer"]),
                onConfirm: () => {
                    j9.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    Ot = (0, S.WI)(T.X.UTILITY_SECTION, {
        useTitle: () => k.intl.string(k.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [j8, Oe],
    }),
    On = (0, S.Hr)({ buildLayout: () => [bd, jJ, hf, oT, xH, SX, Ot], analyticsKey: "user_settings" });
