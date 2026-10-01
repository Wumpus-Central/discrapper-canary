n.d(t, { D: () => y_ });
var i,
    s,
    l,
    r,
    a,
    o,
    u,
    d = n(419954),
    c = n(780964),
    g = n(550640),
    m = n(107384),
    A = n(477900),
    h = n(582128),
    E = n(17928),
    S = n(652215),
    x = n(346055),
    p = n(297264),
    T = n(364522),
    f = n(97808),
    I = n(778712),
    _ = n(821609),
    N = n(775602),
    C = n(320095),
    b = n(963852),
    y = n(763754),
    v = n(20851),
    j = n(95701),
    O = n(486020),
    L = n(885386),
    R = n(375708),
    D = n(345016);
let P = new j.nA({ id: "1337", guild_id: "1337", type: S.rbe.GUILD_TEXT, name: "preview" }),
    G = [
        { status: S.clD.IDLE, discriminator: "2" },
        { status: S.clD.DND, discriminator: "3" },
        { status: S.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, C.rh)({ ...(0, b.Ay)({ channelId: P.id, content: e }), state: S.cmJ.SENT, reactions: t });
}
var U = n(856488);
let V = (0, d.zD)(c.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => R.intl.string(R.t.TZ2hZH),
        useSubtitle: () => R.intl.string(R.t.Q7wgHc),
        useValue: () => L.D_.useSetting(),
        setValue: (e) => L.D_.updateSetting(e),
    }),
    k = (0, d.zD)(c.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => R.intl.string(R.t.XYvMIX),
        useSubtitle: () => R.intl.string(R.t.T0rbtM),
        useValue: L._z.useSetting,
        setValue: L._z.updateSetting,
    });
var w = n(100767),
    F = n(435558),
    B = n.n(F),
    z = n(935399),
    X = n(331322),
    Y = n(299163),
    H = n(834730),
    K = n(113494),
    W = n(782134),
    Z = n(54570),
    q = n(8880),
    Q = n(75804);
let J = B().debounce((e) => {
    (0, Z.zU)(e);
}, 250);
function $() {
    let [e, t] = h.useState(!1);
    return (
        (0, z.l0)(() => (0, Z.pr)()),
        (0, A.jsx)(_.$, {
            text: R.intl.string(R.t.SKNnqq),
            icon: e ? K.PauseIcon : W.PlayIcon,
            size: "sm",
            onClick: function () {
                if (e) {
                    ((0, Z.pr)(), t(!1));
                    return;
                }
                ((0, Z.AU)(
                    R.intl.string(R.t.PKaNJL),
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
let ee = (0, d.E2)(c.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [R.intl.string(R.t.lsW5Ev)],
        Component: function () {
            let e = (0, E.bG)([q.A], () => q.A.speechRate);
            return (0, A.jsxs)(X.B, {
                gap: 16,
                children: [
                    (0, A.jsx)(Y.A, {
                        label: R.intl.string(R.t.lsW5Ev),
                        description: R.intl.string(R.t.Ci4wMS),
                        markers: Q.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: J,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, A.jsx)(H.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: R.intl.string(R.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, A.jsx)(H.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: R.intl.string(R.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, A.jsx)(H.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, A.jsx)($, {}),
                ],
            });
        },
        usePredicate: () => w.$j,
    }),
    et = (0, d.zZ)(c.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => R.intl.string(R.t.XVR0Rb),
        buildLayout: () => [ee, k, V],
    }),
    en = (0, d.AK)(c.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.aTfeGK),
        destinationKey: c.X.APPEARANCE_PANEL,
    }),
    ei = (0, d.gN)(c.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [en] });
var es = n(955572);
let el = (0, d.zD)(c.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => R.intl.string(R.t.OCJg5f),
    useSubtitle: () => R.intl.string(R.t.HEO0s3),
    useValue: () => (0, E.bG)([N.Ay], () => N.Ay.desaturateUserColors),
    setValue: () => (0, es.YV)(),
});
var er = n(652525);
let ea = (0, d.zD)(c.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => R.intl.string(R.t["+Isihb"]),
        useSubtitle: () => R.intl.string(R.t.nNZ1Tz),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.enableCustomCursor),
        setValue: (e) => (0, es.ts)(e),
        usePredicate: () => (0, er.t)("EnableCustomCursorSetting"),
    }),
    eo = (0, d.zD)(c.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => R.intl.string(R.t["S3z+pV"]),
        useSubtitle: () => R.intl.string(R.t["3QuI9+"]),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, es.Gm)(e),
        hasIcon: !0,
    });
var eu = n(554146);
let ed = (0, d.zD)(c.X.HIGH_CONTRAST_MODE, {
    useTitle: () => R.intl.string(R.t.aZlePv),
    useSubtitle: () => R.intl.string(R.t["v2qF8+"]),
    useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, es.uh)(e ? N._1.HIGH : N._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: m.Xi.NEW, dismissibleContent: eu.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var ec = n(406360),
    eg = n(742023);
let em = (0, d.Qx)(c.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => R.intl.string(R.t.nemtgW),
        useSubtitle: () => R.intl.string(R.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        useOptions: function () {
            return h.useMemo(
                () => [
                    { name: R.intl.string(R.t.D5Fma9), desc: R.intl.string(R.t.Qj75ck), value: "no-limit" },
                    { name: R.intl.string(R.t.ldcGIH), desc: R.intl.string(R.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, ec.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, es.FU)(e);
        },
        useValue: function () {
            return (0, E.bG)([eg.Ay], () => eg.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", R.intl.string(R.t["O/Gjvn"])],
    }),
    eA = (0, d.Hn)(c.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => R.intl.string(R.t.nC2XBl),
        useSubtitle: () => R.intl.string(R.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: R.intl.string(R.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: R.intl.string(R.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: R.intl.string(R.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: R.intl.string(R.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.officialMessageStyle),
        setValue: (e) => (0, es.w_)(e),
    }),
    eh = (0, d.Hn)(c.X.ROLE_STYLE, {
        useTitle: () => R.intl.string(R.t.uSOPWm),
        useSubtitle: () => R.intl.string(R.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: R.intl.string(R.t.eDdMzJ), value: "username" },
            { id: "dot", label: R.intl.string(R.t.rdmJp0), value: "dot" },
            { id: "hidden", label: R.intl.string(R.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.roleStyle),
        setValue: (e) => (0, es.IX)(e),
    });
(0, d.Qx)(c.X.ROLE_STYLE, {
    useTitle: () => R.intl.string(R.t.uSOPWm),
    useSubtitle: () => R.intl.string(R.t["86hjzQ"]),
    useOptions: () => [
        { name: R.intl.string(R.t.YEOEi6), value: "username" },
        { name: R.intl.string(R.t.mQaro3), value: "dot" },
        { name: R.intl.string(R.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, E.bG)([N.Ay], () => N.Ay.roleStyle),
    setValue: (e) => (0, es.IX)(e),
});
let eE = (0, d.sN)(c.X.SATURATION, {
    useTitle: () => R.intl.string(R.t["5PWWCY"]),
    useSubtitle: () => R.intl.string(R.t.xf5S6P),
    markers: S.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => N.Ay.saturation,
    asValueChanges: (e) => (0, es.HU)(e),
});
var eS = n(964486),
    ex = n(839214),
    ep = n(502229),
    eT = n(975571);
let ef = (0, ex.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    eI = (0, d.zD)(c.X.SYNC_FORCED_COLORS, {
        useTitle: () => R.intl.string(R.t.cguiec),
        useSubtitle: () => R.intl.format(R.t.GwEVE2, { learnMoreLink: eT.A.getArticleURL(S.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, E.bG)([N.Ay], () => N.Ay.syncForcedColors);
            return (
                (0, eS.Ay)(() => {
                    ef.setState({ syncEnabled: N.Ay.syncForcedColors });
                }),
                ef.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = ef.getState();
            if (null != t) {
                (clearTimeout(t), ef.setState({ syncEnabled: e, updateTimeout: null }));
                return;
            }
            if (e === N.Ay.syncForcedColors) return void ef.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                ((0, es.D3)(e), ef.setState({ updateTimeout: null }));
            }, 150);
            ef.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, ep.D)(),
    }),
    e_ = (0, d.zZ)(c.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => R.intl.string(R.t.JqvyiY),
        buildLayout: () => [eE, el, ed, ea, eI, em, eh, eA, eo, ei],
    });
var eN = n(397438),
    eC = n(355097),
    eb = n(141531);
function ey(e) {
    return (0, E.bG)([eN.A], () =>
        (function (e) {
            switch (e) {
                case eC._A.REDUCED_MOTION:
                    return R.intl.format(R.t["1dT9V4"], {});
                case eC._A.REDUCED_MOTION_STICKERS:
                    return R.intl.string(R.t["2ExvRu"]);
                case eC._A.GAME_MODE:
                    return R.intl.string(eb.default.VGcdxP);
                default:
                    return;
            }
        })(eN.A.getAppliedOverrideReasonKey(e)),
    );
}
function ev(e) {
    return (0, E.bG)([eN.A], () => eN.A.getAppliedOverrideReasonKey(e) === eC._A.GAME_MODE);
}
let ej = (0, d.zD)(c.X.ANIMATE_EMOJIS, {
        useTitle: () => R.intl.string(R.t.iIaOlc),
        useSubtitle: () => ey("animateEmoji"),
        useDisabled: () => ev("animateEmoji"),
        useValue: () => L.Sf.useSetting(),
        setValue: (e) => L.Sf.updateSetting(e),
    }),
    eO = (0, d.zD)(c.X.ANIMATE_GIFS, {
        useTitle: () => R.intl.string(R.t.wqsK7q),
        useSubtitle: () => ey("gifAutoPlay"),
        useDisabled: () => ev("gifAutoPlay"),
        useValue: () => L.kt.useSetting(),
        setValue: (e) => L.kt.updateSetting(e),
    });
var eL = n(823894);
let eR = (0, d.Qx)(c.X.ANIMATE_STICKERS, {
        useTitle: () => R.intl.string(R.t.sBHIh0),
        useSubtitle: () => ey("animateStickers"),
        useDisabled: () => ev("animateStickers"),
        useOptions: () => [
            { name: R.intl.string(R.t["Xp+X2U"]), value: eL.BJ.ALWAYS_ANIMATE },
            { name: R.intl.string(R.t.IlLT7e), desc: R.intl.string(R.t.bIW9Tl), value: eL.BJ.ANIMATE_ON_INTERACTION },
            { name: R.intl.string(R.t.IGu8x3), value: eL.BJ.NEVER_ANIMATE },
        ],
        useValue: () => L.S0.useSetting(),
        setValue: (e) => L.S0.updateSetting(e),
    }),
    eD = (0, d.zD)(c.X.REDUCED_MOTION, {
        useTitle: () => R.intl.string(R.t.b3XBzg),
        useSubtitle: () => R.intl.format(R.t.XqvxJc, { helpdeskArticle: eT.A.getArticleURL(S.MVz.REDUCED_MOTION) }),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.prefersReducedMotion),
        setValue: (e) => (0, es.qz)(e ? "reduce" : "no-preference"),
    }),
    eP = (0, d.zD)(c.X.SYNC_REDUCED_MOTION, {
        useTitle: () => R.intl.string(R.t.oL55A6),
        useValue: () => (0, E.bG)([N.Ay], () => "auto" === N.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, es.qz)(e ? "auto" : N.Ay.systemPrefersReducedMotion),
    });
var eG = n(973283);
function eM(e) {
    return R.intl.formatToPlainString(R.t.pyvjRp, { seconds: e });
}
let eU = (0, d.sN)(c.X.TOAST_DURATION, {
        useTitle: () => R.intl.string(R.t["3oxlia"]),
        useSubtitle: () => R.intl.string(R.t.CZ3jxp),
        usePredicate: () => (0, eG.D2)("ToastDurationSetting"),
        markers: S.hH7.TOAST_DURATION_SECOND_INCREMENTS,
        onMarkerRender: (e) =>
            e % 5 == 0 || e === S.hH7.TOAST_DURATION_MIN_SECONDS || e === S.hH7.TOAST_DURATION_MAX_SECONDS
                ? eM(e)
                : void 0,
        onValueRender: eM,
        stickToMarkers: !0,
        minValue: S.hH7.TOAST_DURATION_MIN_SECONDS,
        maxValue: S.hH7.TOAST_DURATION_MAX_SECONDS,
        useDefaultValue: () => S.hH7.TOAST_DURATION_DEFAULT_MS / 1e3,
        getInitialValue: () => N.Ay.minToastDurationMs / 1e3,
        asValueChanges: (e) => (0, es.E7)(1e3 * e),
    }),
    eV = (0, d.zZ)(c.X.MOTION_CATEGORY, {
        useTitle: () => R.intl.string(R.t.e3TR1b),
        buildLayout: () => [eD, eP, eU, eO, ej, eR],
    });
var ek = n(688810),
    ew = n(259065),
    eF = n(701974);
let eB = (0, d.zD)(c.X.DISPLAY_NAME_STYLES, {
    useTitle: () => R.intl.string(eF.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, ek.Ay)();
        return R.intl.format(eF.default.aEax6P, {
            onClickOpenModal() {
                (0, ew.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, E.bG)([N.Ay], () => N.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, es.Dm)(e),
});
function ez(e) {
    return `${e.toFixed(0)}px`;
}
let eX = (0, d.sN)(c.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => R.intl.string(R.t.rT3Pq5),
        useSubtitle: () => R.intl.string(R.t.LXUhen),
        markers: S.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: S.hH7.FONT_SIZES["0"],
        maxValue: S.hH7.FONT_SIZES[S.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => S.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => N.Ay.fontSize,
        onValueRender: ez,
        onMarkerRender: ez,
        asValueChanges: (e) => (0, es.XS)(e),
    }),
    eY = (0, d.zD)(c.X.UNDERLINE_LINKS, {
        useTitle: () => R.intl.string(R.t.OLZFB8),
        useSubtitle: () => R.intl.string(R.t.DIX3ke),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, es.kI)(e),
    }),
    eH = (0, d.zZ)(c.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["bxh/R7"]),
        buildLayout: () => [eX, eY, eB],
    });
var eK = n(873298);
let eW = (0, d.Qx)(c.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => R.intl.string(R.t["C/5V0A"]),
        useSubtitle: () => R.intl.string(R.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: R.intl.string(R.t["7iegX4"]), value: eK.NS.COMPACT },
            { name: R.intl.string(R.t.bBvAEH), value: eK.NS.DEFAULT },
            { name: R.intl.string(R.t["4cuYHx"]), value: eK.NS.COZY },
        ],
        useValue: () => L.Xi.useSetting(),
        setValue: (e) => {
            e !== eK.NS.UNSET_UI_DENSITY && L.Xi.updateSetting(e);
        },
    }),
    eZ = "cozy",
    eq = "compact",
    eQ = (0, d.Qx)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => R.intl.string(R.t.nKRoPv),
        useSubtitle: () => R.intl.string(R.t.QntEEG),
        useSearchTerms: () => [R.intl.string(R.t.ZEoGMd)],
        useOptions: () => [
            { name: R.intl.string(R.t.Jqj4cZ), value: eZ },
            { name: R.intl.string(R.t["1JNcPS"]), value: eq },
        ],
        useValue: () => (L.hH.useSetting() ? eq : eZ),
        setValue: (e) => {
            (L.hH.updateSetting(e === eq), (0, es.AC)());
        },
    });
var eJ = n(381941);
function e$(e) {
    return `${e.toFixed(0)}px`;
}
let e0 = (0, d.sN)(c.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => R.intl.string(R.t.Q6lKkg),
    useSubtitle: () => R.intl.string(R.t.p7eUrb),
    markers: eJ.qh,
    stickToMarkers: !0,
    minValue: eJ.qh["0"],
    maxValue: eJ.qh[eJ.qh.length - 1],
    useDefaultValue: () => (L.hH.useSetting() ? eJ.y5 : eJ.ES),
    useExternalValue: () => (0, E.bG)([N.Ay], () => N.Ay.messageGroupSpacing),
    getInitialValue: () => N.Ay.messageGroupSpacing,
    onValueRender: e$,
    onMarkerRender: e$,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, es.AC)(e);
        }
    },
});
var e1 = n(775121),
    e2 = n(723702);
let e3 = (0, d.sN)(c.X.APPEARANCE_ZOOM, {
        usePredicate: () => e2.isPlatformEmbedded,
        useTitle: () => R.intl.string(R.t.i19n5L),
        useSubtitle: () => R.intl.format(R.t["x9PK/3"], { modKey: e1.A.modKey }),
        markers: S.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: S.hH7.ZOOM_SCALES["0"],
        maxValue: S.hH7.ZOOM_SCALES[S.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => S.hH7.ZOOM_DEFAULT,
        getInitialValue: () => N.Ay.zoom,
        useExternalValue: () => (0, E.bG)([N.Ay], () => N.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, es.Qp)(e),
        useSearchTerms: () => [R.intl.string(R.t.ip0uSf)],
    }),
    e5 = (0, d.zZ)(c.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.VKYWk8),
        buildLayout: () => [eW, eQ, e0, e3],
    }),
    e4 = (0, d.t_)(c.X.ACCESSIBILITY_PANEL, {
        useTitle: () => R.intl.string(R.t.G0neg7),
        buildLayout: () => [eH, e5, e_, eV, et],
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = L.hH.useSetting(),
                    t = L.jW.useSetting(),
                    n = h.useMemo(
                        () => [
                            M(
                                R.intl.formatToPlainString(R.t.BknJRT, {}),
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
                            M(R.intl.formatToPlainString(R.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, E.bG)([N.Ay], () => N.Ay.messageGroupSpacing);
                return (0, A.jsx)(x.M, {
                    children: (0, A.jsxs)("section", {
                        "aria-label": R.intl.string(R.t.RC22qg),
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: D.Vf,
                                children: R.intl.string(R.t.RC22qg),
                            }),
                            (0, A.jsxs)(T.Ip, {
                                className: D.VH,
                                children: [
                                    (0, A.jsx)("ol", {
                                        className: D.DZ,
                                        style: { gap: i },
                                        "aria-label": R.intl.string(R.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, A.jsx)(
                                                "li",
                                                {
                                                    children: (0, A.jsx)(v.A, {
                                                        message: t,
                                                        channel: P,
                                                        compact: e,
                                                        author: { ...(0, y.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, A.jsxs)("div", {
                                        className: D.Jb,
                                        children: [
                                            (0, A.jsx)("div", {
                                                className: D.HD,
                                                children: G.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, A.jsx)(
                                                        f.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: I._3.SIZE_32,
                                                            src: O.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": R.intl.string(R.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, A.jsx)(_.$, {
                                                text: R.intl.string(R.t["2RHHgz"]),
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
    e6 = (0, d.i4)(c.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.G0neg7),
        icon: g.c,
        useMenu: U.A,
        buildLayout: () => [e4],
    });
n(321073);
var e8 = n(650809),
    e7 = n(477782),
    e9 = n(636537),
    te = n(228366),
    tt = n(74396),
    tn = n(93055),
    ti = n(269880),
    ts = n(55619),
    tl = n(351906),
    tr = n(174459),
    ta = n(812993),
    to = n(189081);
let tu = (0, d.zD)(c.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, E.bG)([to.A], () => to.A.hasLibraryApplication()),
        useTitle: () => R.intl.string(R.t.fi3UQN),
        useSubtitle: () => R.intl.string(R.t["8mYp37"]),
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
    }),
    td = (0, d.zZ)(c.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["8/udY0"]),
        buildLayout: () => [tu],
    });
var tc = n(284009),
    tg = n.n(tc),
    tm = n(199966),
    tA = n(963935);
function th(e) {
    let { title: t } = e;
    return t;
}
function tE(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: s } = e,
        l = t();
    return "string" == typeof l ? i({ title: l, index: s, key: n }) : l;
}
function tS(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, A.jsx)(tE, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tx(e) {
    return e.type === tA.Z6.LIST;
}
function tp(e, t) {
    let { limit: n = 2, formatter: i = th } = t ?? {};
    tg()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, tm._)(),
        r = s.get(e) ?? l.get(e);
    tg()(
        null != r && (r.type === tA.Z6.ACCORDION || tx(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tx(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return h.useMemo(() => {
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
                return R.intl.format(R.t["3H9tCW"], { settingOneHook: tS({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return R.intl.format(R.t.MWryo6, {
                    settingOneHook: tS({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tS({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return R.intl.format(R.t.a00b5G, {
                    settingOneHook: tS({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tS({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tS({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === s
            ? R.intl.format(R.t.O8vNbS, { settingOneHook: tS({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === s
              ? R.intl.format(R.t["acXG/W"], {
                    settingOneHook: tS({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tS({ setting: t[1], formatter: i, index: 1 }),
                })
              : R.intl.format(R.t["5+ldWc"], {
                    settingOneHook: tS({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tS({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tS({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tT = n(951260);
let tf = (0, d.zD)(c.X.ENABLE_APPS_BUTTON, {
        useTitle: () => R.intl.string(R.t.ZTH4j4),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, es.n8)({ appsButtonEnabled: e }),
    }),
    tI = {
        useTitle: () => R.intl.string(R.t["I/5LyL"]),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isSubmitButtonEnabled),
        setValue: () => (0, es.Xt)(),
    },
    t_ = (0, d.zD)(c.X.ENABLE_SEND_BUTTON, tI),
    tN = (0, d.zD)(c.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tI,
        usePredicate: () => !(0, tT.n)("EnableSendButtonOutsideExperiment"),
    }),
    tC = (0, d.zD)(c.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => R.intl.string(R.t.WggFoO),
        useSubtitle: () => R.intl.string(R.t.XpErGj),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, es.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, E.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tb = (0, d.zD)(c.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => R.intl.string(R.t.YErWkD),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, es.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, E.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    ty = (0, d.zD)(c.X.ENABLE_GIF_BUTTON, {
        useTitle: () => R.intl.string(R.t.k7oNEz),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isGifButtonEnabled),
        setValue: (e) => (0, es.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, E.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tv = (0, d.zD)(c.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => R.intl.string(R.t.Ar0krj),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, es.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, E.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tj = (0, d.Qx)(c.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => R.intl.string(R.t.AxRAWt),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.expressionPickerFormat),
        setValue: (e) => (0, es.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.k86Soy), desc: R.intl.string(R.t.bSGTTZ), value: N.IG.FLEXIBLE },
                { name: R.intl.string(R.t.bjwSOn), desc: R.intl.string(R.t.We36HX), value: N.IG.CONDENSED },
                { name: R.intl.string(R.t.FDIKss), desc: R.intl.string(R.t["rclZL/"]), value: N.IG.HIDDEN },
            ];
        },
    }),
    tO = (0, d.FW)(c.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => R.intl.string(R.t["V9/cNN"]),
        buildLayout: () => [tj, tC, tb, ty, tv],
    }),
    tL = (0, d.bd)(c.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.IwVGQs) : R.intl.string(R.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tp(c.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tT.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [t_, tf, tO],
    });
var tR = n(565645);
let tD = (0, d.zD)(c.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => R.intl.string(R.t["79qal8"]),
        useSubtitle: () =>
            R.intl.format(R.t.GejoQK, { emojiHook: (e, t) => (0, A.jsx)(tR.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: L.j7.useSetting,
        setValue: L.j7.updateSetting,
    }),
    tP = (0, d.zD)(c.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => R.intl.string(R.t.c0oFDw),
        useValue: L.BQ.useSetting,
        setValue: L.BQ.updateSetting,
    }),
    tG = (0, d.zD)(c.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => R.intl.string(R.t.AqGrEI),
        useValue: L.SI.useSetting,
        setValue: (e) => {
            (tr.default.track(S.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                L.SI.updateSetting(e));
        },
    });
var tM = n(793574);
let tU = (0, d.zD)(c.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => R.intl.string(R.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            (tr.default.track(S.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tM.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e));
        },
    }),
    tV = (0, d.zZ)(c.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Ob7VMB),
        useSearchTerms: () => [R.intl.string(R.t.onqU6o)],
        buildLayout: () => [tG, tD, tU, tP, tN, tL],
    });
var tk = n(526162),
    tw = n(793943),
    tF = n(792656),
    tB = n(830543),
    tz = n(785007),
    tX = n(806932),
    tY = n(915089),
    tH = n(10392),
    tK = n(82498),
    tW = n(174197),
    tZ = n(202541);
let tq = (0, d.E2)(c.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [R.intl.string(R.t.gnwxvT)],
    Component: function () {
        let e = (0, tY.GV)(),
            { ref: t, ...n } = (0, tz._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, E.bG)([tk.A], () => tk.A.isUpsellPreview);
        return (
            (0, z.Ay)(() => {
                i &&
                    (tr.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tZ.e.APP_ICON_UPSELL,
                        location_stack: [tM.A.USER_SETTINGS],
                    }),
                    (0, tH.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, [tM.A.USER_SETTINGS], () =>
                        (0, tK.uq)(tZ.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, A.jsx)("div", {
                ...n,
                ref: t,
                children: (0, A.jsx)(X.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, A.jsx)(tX.m, { disabled: i, size: tW.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function tQ() {
    ((0, tw.nf)(tw.HP.APP_ICON), (0, tB.default)());
}
function tJ() {
    return (0, A.jsx)(tF.A, {
        subscriptionTier: tZ.pe.TIER_2,
        defaultTextOverride: R.intl.string(R.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let t$ = (0, d.zZ)(c.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RPh2ou),
        useSubtitle: () => R.intl.string(R.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, E.bG)([tk.A], () => tk.A.isUpsellPreview);
            return h.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: m.UV.BUTTON,
                        text: R.intl.string(R.t["6acvnZ"]),
                        onClick: tQ,
                    }),
                    e && t.push({ id: "upsell-button", type: m.UV.STRONGLY_DISCOURAGED_CUSTOM, button: tJ }),
                    { type: m.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [tq],
    }),
    t0 = (0, d.AK)(c.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.UDr3Iy),
        useSearchTerms: () => [R.intl.string(R.t.UDr3Iy)],
        destinationKey: c.X.ACCESSIBILITY_PANEL,
    }),
    t1 = (0, d.gN)(c.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [t0] });
var t2 = n(452027),
    t3 = n(193249),
    t5 = n(976860),
    t4 = n(16236),
    t6 = n(635233),
    t8 = n(749884),
    t7 = n(22277);
let t9 = eT.A.getArticleURL(S.MVz.FAVORITES_GUILD);
function ne() {
    let { analyticsLocations: e } = (0, ek.Ay)(tM.A.USER_SETTINGS_FAVORITES),
        t = h.useCallback(() => {
            ((0, t6.mv)("settings_page"), (0, t5.uh)(S.YYv), (0, tB.default)());
        }, []);
    return (0, A.jsx)(ek.f5, {
        value: e,
        children: (0, A.jsx)(t2.D, {
            label: R.intl.string(t7.default.OT1NK5),
            description: R.intl.format(t7.default.GR2KOG, { helpCenterLink: t9 }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, A.jsxs)(X.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, A.jsx)(_.$, { variant: "secondary", text: R.intl.string(t7.default["7WwLnr"]), onClick: t }),
                    (0, A.jsx)(tF.A, {
                        subscriptionTier: tZ.pe.TIER_2,
                        defaultTextOverride: R.intl.string(t7.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let nt = (0, d.E2)(c.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, tn.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [R.intl.string(t7.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, tn.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, t8.A)(!1);
            return e
                ? (0, A.jsx)(t3.d, {
                      checked: t,
                      description: R.intl.format(t7.default.GR2KOG, { helpCenterLink: t9 }),
                      onChange: t4.kG,
                      label: R.intl.string(t7.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, A.jsx)(ne, {});
        },
    }),
    nn = (0, d.zD)(c.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => R.intl.string(R.t.U47N1p),
        useValue: L.hD.useSetting,
        setValue: L.hD.updateSetting,
    }),
    ni = (0, d.zD)(c.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => R.intl.string(R.t.VP11No),
        useValue: L.X6.useSetting,
        setValue: L.X6.updateSetting,
    }),
    ns = (0, d.FW)(c.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => R.intl.string(R.t["9nyle0"]),
        buildLayout: () => [nn, ni],
    }),
    nl = (0, d.zD)(c.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => R.intl.string(R.t["5bK9vw"]),
        useValue: L.rs.useSetting,
        setValue: L.rs.updateSetting,
    }),
    nr = (0, d.zD)(c.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => R.intl.string(R.t["zge/fP"]),
        useValue: L.jW.useSetting,
        setValue: L.jW.updateSetting,
    });
var na = n(28863),
    no = n(766075);
let nu = (0, d.zD)(c.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => R.intl.string(R.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
                return R.intl.format(R.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, A.jsx)(
                            na.Anchor,
                            {
                                onClick: () => (0, no.openUserSettings)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !L.hH.useSetting(),
        useValue: () => {
            let e = L.aM.useSetting();
            return !L.hH.useSetting() || e;
        },
        setValue: (e) => {
            L.aM.updateSetting(e);
        },
    }),
    nd = (0, d.Hn)(c.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => R.intl.string(R.t.QgwmVz),
        useOptions: () => [
            { value: S.P6Q.ON_CLICK, id: S.P6Q.ON_CLICK, label: R.intl.string(R.t["KFH/me"]) },
            { value: S.P6Q.ALWAYS, id: S.P6Q.ALWAYS, label: R.intl.string(R.t.Pe1RbL) },
            { value: S.P6Q.IF_MODERATOR, id: S.P6Q.IF_MODERATOR, label: R.intl.string(R.t.K5VTBE) },
        ],
        useValue: L.gs.useSetting,
        setValue: L.gs.updateSetting,
    }),
    nc = (0, d.zD)(c.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => R.intl.string(R.t.AInv5m),
        useValue: L.SY.useSetting,
        setValue: L.SY.updateSetting,
    }),
    ng = (0, d.zZ)(c.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.OIgYlQ),
        useSearchTerms: () => [R.intl.string(R.t["/VQax8"])],
        buildLayout: () => [ns, nl, nr, nd, nc, nu, nt, t1],
    });
var nm = n(753806),
    nA = n(145331);
let nh = (0, d.Qx)(c.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => R.intl.string(R.t.VkoLsy),
        useSearchTerms: () => [R.intl.string(R.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.E9JM4J), value: 0 },
                { name: R.intl.string(R.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!L.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            (t ? nm.A.cleanUpPrivateChannelSearchState() : nm.A.cleanUpSearchState({ type: S.I4_.DMS }),
                (0, nA._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: nA.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t));
        },
    }),
    nE = (0, d.zZ)(c.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => R.intl.string(R.t["5h0QOP"]),
        buildLayout: () => [nh],
    });
var nS = n(574381);
let nx = (0, d.zD)(c.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => R.intl.string(R.t.IxjaoF),
        useValue: function () {
            return (0, E.bG)([tl.A], () => {
                let { autoToggle: e } = tl.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            ts.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nS.Av;
        },
    }),
    np = (0, d.zD)(c.X.STREAMING_STREAMER_MODE, {
        useTitle: () => R.intl.string(R.t.TGNg6T),
        useSubtitle: () => R.intl.string(R.t["4nXLnE"]),
        useValue: function () {
            return (0, E.bG)([tl.A], () => {
                let { enabled: e } = tl.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            ts.A.update({ enabled: e });
        },
    });
var nT = n(77729),
    nf = n(589051),
    nI = n(588857),
    n_ = n(999834);
let nN = [],
    nC = (0, d.Hn)(c.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => R.intl.string(R.t.VCDSLW),
        useSearchTerms: () => [R.intl.string(R.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, n_.b_)(),
                t = (0, nf.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return h.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(nI.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, E.bG)([tl.A], () => tl.A.getSettings().disabledOverlayWidgets ?? nN);
        },
        setValue: (e) => ts.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nb = (0, d.zD)(c.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => R.intl.string(R.t.LSBUGR),
        useValue: () =>
            (0, E.bG)([tl.A], () => {
                let { hidePersonalInformation: e } = tl.A.getSettings();
                return e;
            }),
        setValue: (e) => ts.A.update({ hidePersonalInformation: e }),
    }),
    ny = (0, d.zD)(c.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => R.intl.string(R.t.uWBOri),
        useValue: () =>
            (0, E.bG)([tl.A], () => {
                let { hideInstantInvites: e } = tl.A.getSettings();
                return e;
            }),
        setValue: (e) => ts.A.update({ hideInstantInvites: e }),
    }),
    nv = (0, d.zD)(c.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => R.intl.string(R.t.OrqYDP),
        useValue: () =>
            (0, E.bG)([tl.A], () => {
                let { disableSounds: e } = tl.A.getSettings();
                return e;
            }),
        setValue: (e) => ts.A.update({ disableSounds: e }),
    }),
    nj = (0, d.zD)(c.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.sUAbLd),
        useValue: () =>
            (0, E.bG)([tl.A], () => {
                let { disableNotifications: e } = tl.A.getSettings();
                return e;
            }),
        setValue: (e) => ts.A.update({ disableNotifications: e }),
    }),
    nO = (0, d.zD)(c.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => R.intl.string(R.t["iA81+a"]),
        useSubtitle: () => R.intl.string(R.t.P4vj0h),
        useValue: () =>
            (0, E.bG)([tl.A], () => {
                let { enableContentProtection: e } = tl.A.getSettings();
                return e;
            }),
        setValue: (e) => ts.A.update({ enableContentProtection: e }),
        usePredicate: () => nT.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nL = (0, d.FW)(c.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.xYhOEh),
        buildLayout: () => [nb, ny, nv, nj, nO, nC],
    }),
    nR = (0, d.zZ)(c.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.S5GfOW),
        buildLayout: () => [np, nx, nL],
    });
var nD = n(147248),
    nP = n(141343),
    nG = n(665267),
    nM = n(414133),
    nU = n(98908);
let nV = (0, d.Hn)(c.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => R.intl.string(R.t.Q7mm4g),
        useSearchTerms: () => [R.intl.string(nU.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: R.intl.string(R.t["hrS/Pc"]), value: eK.tI.GUILD },
            { id: "personal", label: R.intl.string(R.t.mlvXIq), value: eK.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
        usePredicate: () => (0, nM.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nk = (0, d.zD)(c.X.SYNC_PROFILE_THEMES, {
        useTitle: () => R.intl.string(R.t.C00w4l),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, es.M1)(),
    });
var nw = n(817281),
    nF = n(284016),
    nB = n(363195);
let nz = (0, d.zD)(c.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => R.intl.string(R.t["/B+kEV"]),
    useSearchTerms: () => [R.intl.string(R.t.Ksh3ik)],
    useValue: function () {
        return (0, E.bG)([nF.A], () => !1 !== nF.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, E.bG)([nB.A], () => nB.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nB.A.theme,
            i = nD.A.gradientPreset?.id ?? null,
            s = L.eh.getSetting()?.customUserThemeSettings != null;
        ((t = S.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            te.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: s },
            }),
            nw.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nX = n(393284);
let nY = (0, d.AK)(c.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.nhVQDJ),
        useSearchTerms: () => [R.intl.string(R.t.nhVQDJ)],
        destinationKey: c.X.ACCESSIBILITY_PANEL,
    }),
    nH = (0, d.gN)(c.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nY] }),
    nK = (0, d.zZ)(c.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, E.bG)([N.Ay], () => N.Ay.useForcedColors)
                ? {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: (0, ep.D)()
                          ? R.intl.format(R.t.Jae48E, {
                                onClick: () => {
                                    (0, no.openUserSettings)(c.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : R.intl.string(R.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, E.bG)([nD.A, N.Ay], () => N.Ay.useForcedColors || nD.A.isPreview),
                t = (0, nP.V)();
            return e || t
                ? null
                : {
                      type: m.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: m.UV.BUTTON,
                              text: R.intl.string(R.t["E+COuA"]),
                              onClick: nG.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nX.k, nz, nk, nV, nH],
    }),
    nW = (0, d.t_)(c.X.APPEARANCE_PANEL, {
        initialize: function () {
            tt.A.isFetching() ||
                (te.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                e9.Bo.get({ url: S.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        te.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        te.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => R.intl.string(R.t["iHH+ky"]),
        buildLayout: () => [nK, t$, ng, tV, nE, nR, td],
    }),
    nZ = [
        { badgeType: m.Xi.NEW, dismissibleContent: eu.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eu.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, A.jsx)(ta.JI, { text: R.intl.string(R.t.y2b7CA) });
            },
        },
    ],
    nq = (0, d.i4)(c.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["iHH+ky"]),
        icon: e8.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, ti.A)(),
                s =
                    ((e = L.D_.useSetting()),
                    (t = L.SI.useSetting()),
                    e
                        ? null
                        : (0, A.jsx)(e7.sL, {
                              id: "preview-markdown-toggle",
                              label: R.intl.string(R.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  (tr.default.track(S.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: S.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      L.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                l =
                    ((n = (0, E.bG)([tl.A], () => tl.A.enabled, [])),
                    (0, A.jsx)(e7.sL, {
                        id: "streamer-mode-toggle",
                        label: R.intl.string(R.t.p9ZAJZ),
                        action: () => {
                            ts.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return h.useMemo(() => {
                let e = [...i];
                return (
                    null != s &&
                        e.push((0, A.jsx)(e7.rX, { label: R.intl.string(R.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, A.jsx)(e7.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [i, s, l]);
        },
        getDismissibleBadges: () =>
            (0, tn.ad)().isFreemium
                ? nZ.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eu.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : nZ,
        buildLayout: () => [nW],
    });
var nQ = n(37646),
    nJ = n(434404);
let n$ = (0, d.t_)(c.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => R.intl.string(R.t.KyFVyi),
        buildLayout: () => [nJ.F],
    }),
    n0 = (0, d.i4)(c.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: nQ.U,
        useTitle: () => R.intl.string(R.t.KyFVyi),
        buildLayout: () => [n$],
    });
var n1 = n(3137),
    n2 = n(661531),
    n3 = n(314116),
    n5 = n(270003),
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
    ih = n(906688),
    iE = n(98705);
function iS(e) {
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
        h = m ? n4.D : "div";
    return (0, A.jsxs)(h, {
        className: ic()(iE.kL, m && iE.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, A.jsx)("div", {
                className: iE.zc,
                children: (0, A.jsx)(ih.A, { achievementId: t, size: ih.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, A.jsxs)("div", {
                className: iE.VW,
                children: [
                    null != n &&
                        (0, A.jsx)(H.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: iE.YR,
                            children: (0, iA.mk)(g),
                        }),
                    (0, A.jsx)(H.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, A.jsx)(H.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var ix = n(545744);
function ip(e) {
    let { onBackClick: t } = e,
        n = (0, E.bG)([iu.A], () => iu.A.getAllUnlockedAchievements()),
        i = h.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        s = h.useMemo(
            () =>
                Object.values(il.l0)
                    .filter(io.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)(n4.D, {
                onClick: t,
                className: ix.vv,
                children: [
                    (0, A.jsx)(ia.A, { direction: ia.A.Directions.LEFT, className: ix.Kk }),
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: R.intl.string(R.t["13/7kX"]),
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: ix.N1,
                children: [
                    (0, A.jsxs)("div", {
                        className: ix.if,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: R.intl.string(R.t["6jI0hd"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: R.intl.string(R.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, A.jsx)("div", {
                        className: ix.nr,
                        children: (0, A.jsx)(n6.TrophyIcon, {
                            size: "custom",
                            color: n2.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, A.jsx)("div", {
                    className: ix.yF,
                    children: (0, A.jsx)("div", {
                        className: ix.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, A.jsx)(iS, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, A.jsxs)("div", {
                    className: ix.yF,
                    children: [
                        (0, A.jsx)("div", {
                            className: ix.if,
                            children: (0, A.jsx)(H.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: R.intl.string(R.t.GFyMg1),
                            }),
                        }),
                        (0, A.jsx)("div", {
                            className: ix.Eh,
                            children: s.map((e) => (0, A.jsx)(iS, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, A.jsx)("div", { className: ix.yF, children: (0, A.jsx)("div", { className: ix.F3 }) }),
        ],
    });
}
var iT = n(224964),
    iI = n(31408),
    i_ = n(368588);
let iN = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iC = (0, F.range)(0, 11),
    ib = (0, F.range)(0, 2.25, 0.25),
    iy = (0, F.range)(1, 11),
    iv = (0, F.range)(1, 26),
    ij = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iO(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: s } = e,
        l = n.map((e) =>
            (0, A.jsx)(
                t3.d,
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
    return (0, A.jsx)(n5.n, { label: R.intl.string(R.t.bWVN1D), children: l });
}
function iL(e) {
    let { children: t } = e;
    return (0, A.jsx)(H.E, { className: i_.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function iR(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        s = (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion);
    return (0, A.jsx)(t3.d, {
        label: R.intl.string(R.t.vuiXm9),
        description: R.intl.string(R.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, is._)(il.sn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, n3.A)({
                          title: s ? R.intl.string(R.t["FxT+p0"]) : R.intl.string(R.t.TAZ4F9),
                          subtitle: s ? R.intl.string(R.t.gmixrx) : R.intl.string(R.t.jN3t3K),
                          confirmText: R.intl.string(R.t.JFfins),
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
    return (0, A.jsxs)(n5.n, {
        label: R.intl.string(R.t.mqxwJO),
        children: [
            (0, A.jsx)(t3.d, {
                label: R.intl.string(R.t.s0KCgF),
                description: R.intl.string(R.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: R.intl.string(R.t.vd0D81),
                    }),
                    (0, A.jsx)(iL, { children: R.intl.string(R.t.a18Sug) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: iy,
                        stickToMarkers: !0,
                        minValue: iy[0],
                        maxValue: iy[iy.length - 1],
                        initialValue: i,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: R.intl.string(R.t.sPO3ij),
                    }),
                    (0, A.jsx)(iL, { children: R.intl.string(R.t.xoldVn) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: iv,
                        stickToMarkers: !0,
                        minValue: iv[0],
                        maxValue: iv[iv.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, A.jsx)(iO, {
                disabled: a,
                locations: [
                    {
                        location: iI.k.CHAT_INPUT,
                        title: R.intl.string(R.t.elTtyz),
                        description: R.intl.string(R.t.HtKfMi),
                    },
                    {
                        location: iI.k.REACTION,
                        title: R.intl.string(R.t.Ik4VIa),
                        description: R.intl.string(R.t.y4rqK0),
                    },
                    {
                        location: iI.k.MEMBER_USER,
                        title: R.intl.string(R.t.ZXBlAn),
                        description: R.intl.string(R.t["m9RD+c"]),
                    },
                    {
                        location: iI.k.CALL_TILE,
                        title: R.intl.string(R.t.V66giQ),
                        description: R.intl.string(R.t.fiHV7u),
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
    return (0, A.jsxs)(n5.n, {
        label: R.intl.string(R.t.Xz0ole),
        children: [
            (0, A.jsx)(t3.d, {
                label: R.intl.string(R.t.o3iV7B),
                description: R.intl.string(R.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, A.jsx)(t3.d, {
                label: R.intl.string(R.t["Ax+IoW"]),
                description: R.intl.string(R.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: R.intl.string(R.t.L0oQuh),
                    }),
                    (0, A.jsx)(iL, { children: R.intl.string(R.t["/OOFpL"]) }),
                    (0, A.jsx)(Y.A, {
                        disabled: r,
                        markers: iC,
                        stickToMarkers: !0,
                        minValue: iC[0],
                        maxValue: iC[iC.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
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
        r = (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, A.jsxs)(n5.n, {
        label: R.intl.string(R.t.wVS5Sd),
        children: [
            (0, A.jsx)(t3.d, {
                label: R.intl.string(R.t.N004zO),
                description: r ? R.intl.string(R.t.GckHGw) : R.intl.string(R.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: i_.KF,
                        children: R.intl.string(R.t.UxnnC4),
                    }),
                    (0, A.jsx)(iL, { children: R.intl.string(R.t.CEOEOb) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: ib,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: ib[0],
                        maxValue: ib[ib.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, is._)(il.sn.MORE),
                                l(t, 1));
                        },
                        onMarkerRender: (e) => (e === ib[ib.length - 1] ? R.intl.string(R.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, A.jsx)(iO, {
                disabled: a,
                locations: [
                    {
                        location: iI.uD.CHAT_INPUT,
                        title: R.intl.string(R.t.vUcvPP),
                        description: R.intl.string(R.t.y00OrF),
                    },
                    {
                        location: iI.uD.VOICE_USER,
                        title: R.intl.string(R.t.TcRO54),
                        description: R.intl.string(R.t.YJCxVY),
                    },
                    {
                        location: iI.uD.MENTION,
                        title: R.intl.string(R.t.oW4shO),
                        description: R.intl.string(R.t["mqfw/H"]),
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
    return (0, A.jsx)(n5.n, {
        label: R.intl.string(R.t.EuXv2q),
        children: (0, A.jsxs)(X.B, {
            gap: 16,
            children: [
                (0, A.jsx)("div", { children: R.intl.string(R.t["1SLnki"]) }),
                (0, A.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: i_.hw,
                    children: (0, A.jsx)(_.$, {
                        variant: "primary",
                        size: "sm",
                        text: R.intl.string(R.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tB.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iU(e) {
    let { onChangePage: t } = e;
    return (0, A.jsxs)(n4.D, {
        onClick: function () {
            return t(1);
        },
        className: i_.Tq,
        children: [
            (0, A.jsx)("div", {
                className: i_.w1,
                children: (0, A.jsx)(n6.TrophyIcon, { size: "md", color: n2.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, A.jsxs)("div", {
                className: i_.qL,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: R.intl.string(R.t["6jI0hd"]),
                    }),
                    (0, A.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: R.intl.string(R.t.GuUItX),
                    }),
                ],
            }),
            (0, A.jsx)(n8._, { size: "custom", color: "currentColor", width: 16, className: i_.nT }),
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
        i = (0, E.cf)([n1.A], () => n1.A.getState()),
        [s, l] = h.useState({ x: 0, y: 0 }),
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
        let h =
            ((d = i.screenshakeEnabled),
            (c = e.screenshakeEnabled),
            (g = i.enabled),
            (m = e.enabled),
            (c ?? d) && (m ?? g));
        1 === t && h && (0, ii.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        l({ x: e.clientX, y: e.clientY });
    }
    return (
        h.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, A.jsxs)(X.B, {
            gap: 24,
            children: [
                (0, A.jsx)(iR, { settings: i, updateSettings: a }),
                (0, A.jsx)(iU, { onChangePage: t }),
                (0, A.jsx)(iP, { settings: i, updateSettings: a }),
                (0, A.jsx)(iG, { settings: i, updateSettings: a }),
                (0, A.jsx)(iD, { settings: i, updateSettings: a }),
                (0, A.jsx)(iM, { updateSettings: a }),
            ],
        })
    );
}
function iw(e) {
    return 0 === e ? n9.f.LEFT : n9.f.RIGHT;
}
let iF = (0, d.E2)(c.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = h.useState(0),
                [n, i] = h.useState(iw(e)),
                [s, l] = h.useState(!1),
                r = (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion),
                a = s && !r;
            return (
                h.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iw(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                h.useEffect(() => {
                    (0, it._)(ij[e]);
                }, [e]),
                h.useEffect(() => {
                    Math.random() > 0.99 && (0, is._)(il.sn.VISITOR_100);
                }, []),
                (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(n9.A, {
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
                                        return (0, A.jsx)(ik, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, A.jsx)(ip, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, A.jsx)("div", {
                            className: a ? i_.Sr : i_.IP,
                            children: (0, A.jsx)(n7.a, {
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
            R.intl.string(R.t.AtCukI),
            R.intl.string(R.t.mqxwJO),
            R.intl.string(R.t.wVS5Sd),
            R.intl.string(R.t.Xz0ole),
            R.intl.string(R.t["Ax+IoW"]),
            R.intl.string(R.t["6jI0hd"]),
            R.intl.string(R.t.s0KCgF),
        ],
    }),
    iB = (0, d.zZ)(c.X.POGGERMODE_CATEGORY, { buildLayout: () => [iF] });
var iz = n(212043);
let iX = (0, d.t_)(c.X.POGGERMODE_PANEL, { useTitle: () => R.intl.string(R.t.AtCukI), buildLayout: () => [iB] }),
    iY = (0, d.i4)(c.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AtCukI),
        icon: () => (0, A.jsx)("img", { alt: "", src: n(724405), className: iz.$ }),
        usePredicate: () => (0, E.bG)([n1.A], () => n1.A.settingsVisible),
        buildLayout: () => [iX],
    });
var iH = n(307301),
    iK = n(410767),
    iW = n(683071),
    iZ = n(97260),
    iq = n(825502),
    iQ = n(695366),
    iJ = n(812729),
    i$ = n.n(iJ),
    i0 = n(587895),
    i1 = n(429913),
    i2 = n(616356),
    i3 = n(952818);
function i5(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function i4() {
    let e = (0, E.bG)([i2.A], () => i2.A.getStreamerActiveStreamMetadata()),
        t = (0, E.bG)(
            [i3.Ay],
            () => {
                let e = i3.Ay.getVisibleGame();
                return null != e ? i3.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            i$(),
        ),
        [n] = (0, i1.A)([i5(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i6 = n(769015),
    i8 = n(25578),
    i7 = n(935671),
    i9 = n(435075);
function se(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, A.jsx)("div", {
              className: i9.zc,
              children: (0, A.jsx)(iQ.E, { size: "sm", color: n2.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, A.jsxs)("div", {
              className: i9.nt,
              children: [
                  (0, A.jsx)(i6.A, { game: n, pid: t.pid, size: i6.M.MEDIUM }),
                  (0, A.jsx)("div", {
                      className: i9.Am,
                      children: (0, A.jsx)(iQ.E, { size: "sm", color: n2.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function st(e) {
    let t = (0, E.bG)([i8.Ay], () => i8.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = i4();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, i7.NP)(),
        l = s && null != n && t === S.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: n, runningGameApplication: i };
}
function sn(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: s, runningGameApplication: l } = st(n);
    return i
        ? (0, A.jsxs)("div", {
              className: ic()(i9.kL, t),
              children: [
                  (0, A.jsx)(se, { game: s, application: l }),
                  (0, A.jsxs)("div", {
                      className: i9.FS,
                      children: [
                          (0, A.jsx)(H.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? R.intl.string(R.t.vxfv7v)
                                      : null != s
                                        ? R.intl.string(R.t.fAYU2G)
                                        : R.intl.string(R.t["9V4X/c"]),
                          }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: R.intl.format(R.t["/y6htt"], {
                                  helpCenterLink: eT.A.getArticleURL(S.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      text: R.intl.string(R.t["1iI46O"]),
                      onClick: function () {
                          (0, i7.sL)(n + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var si = n(404778),
    ss = n(691885),
    sl = n(408278),
    sr = n(241326),
    sa = n(866665),
    so = n(140735),
    su = n(489718),
    sd = n(635242),
    sc = n(350535),
    sg = n(189213),
    sm = n(192308),
    sA = n(95477),
    sh = n(320989),
    sE = n(978263);
let sS = [];
var sx = n(235986),
    sp = n(484734),
    sT = n(734057),
    sf = n(808728),
    sI = n(71393),
    s_ = n(967198),
    sN = n(926140),
    sC = n(847893);
function sb() {}
let sy = [sN.rD.VOICE_CHANNEL];
function sv(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function sj() {
    return (0, A.jsx)("div", {
        className: sC.i1,
        children: (0, A.jsx)(H.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sC.GN,
            children: R.intl.string(R.t.zHjCd1),
        }),
    });
}
function sO(e) {
    let { keybind: t, className: n } = e,
        i = h.useRef(t);
    h.useEffect(() => {
        i.current = t;
    });
    let [s, l] = h.useState(t.params?.channelId ?? void 0),
        r = h.useCallback(() => {
            (0, sm.openModalLazy)(
                async () => (e) =>
                    (0, A.jsx)(sL, {
                        ...e,
                        onSelect: (e) => {
                            (l(e), iZ.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, A.jsx)("div", {
        className: ic()(sC.a8, n),
        children: (0, A.jsx)(t2.D, {
            label: R.intl.string(R.t.q4JpM8),
            children: (0, A.jsxs)(sx.A, {
                align: sx.A.Align.STRETCH,
                children: [
                    (0, A.jsx)("div", { className: sC.$X, children: (0, A.jsx)(sR, { channelId: s }) }),
                    (0, A.jsx)(sx.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function sL(e) {
    let t,
        n,
        { transitionState: i, onClose: s, onSelect: l } = e,
        r = h.useId(),
        a = h.useRef(null),
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
                [l, r] = h.useState(""),
                [a, o] = h.useState(sS),
                u = h.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(sS) : o(e);
                }, []);
            h.useEffect(
                () =>
                    sh.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = h.useState(() => new sE.A(u, n, void 0, i));
            return (
                h.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: h.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: sy, autocompleterBeforeCreateSearchContext: sv }),
        c =
            ((t = "" !== o),
            (n = (0, E.yK)(
                [sf.Ay, sT.A, s_.A],
                () => {
                    let e = s_.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of sf.Ay.getVocalChannelIds(e)) {
                        let e = sT.A.getChannel(t);
                        null != e && n.push(e);
                    }
                    return n;
                },
                [t],
            )),
            t ? null : n),
        { focusedIndex: g, setFocusedIndex: m } = (function (e) {
            let [t, n] = h.useState(0),
                i = h.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                h.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    h.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let S = null != c ? c.length : d.length,
        x = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === sN.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        p =
            S > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: R.intl.string(R.t["+N3fW7"]),
                      ref: a,
                      sections: [S],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === sN.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? sT.A.getChannel(n.parent_id) : void 0,
                              r = sI.A.getGuild(n.guild_id);
                          return (0, A.jsx)(
                              sp.c3,
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
                                      null != r ? (0, A.jsx)("div", { className: sC.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, A.jsx)(sj, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, A.jsx)(sg.a, {
        transitionState: i,
        onClose: s,
        title: R.intl.string(R.t.Dm8O4e),
        subtitle: R.intl.string(R.t.q4JpM8),
        actions: void 0,
        input: (0, A.jsx)(sA.k, {
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
                                if (e?.type === sN.rD.VOICE_CHANNEL) return e.record;
                            })();
                            (null == e ? l(void 0) : l(e.id), s());
                            break;
                        }
                        case "arrowup":
                            0 === g ? m(S - 1) : m(g - 1);
                            break;
                        case "arrowdown":
                            g >= S - 1 ? m(0) : m(g + 1);
                    }
            },
            placeholder: R.intl.string(R.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": S > 0,
            "aria-activedescendant": S > 0 && null != x ? x : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: p,
    });
}
function sR(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: s,
        } = (0, E.cf)([sT.A, sI.A], () => {
            let e = null != t ? sT.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? sT.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? sI.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, A.jsx)(H.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sC.GN,
              children: R.intl.string(R.t["/fYIK7"]),
          })
        : (0, A.jsx)(sp.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: sb,
              onFocus: sb,
              onMouseEnter: sb,
              focused: !1,
              children: null != s ? (0, A.jsx)("div", { className: sC.J5, children: s.name }) : null,
          });
}
var sD = n(650583),
    sP = n(94451);
function sG(e) {
    let { keybind: t } = e,
        n = sc.dI(t.shortcut);
    return e1.A.hasBind(n)
        ? (0, A.jsx)("div", {
              className: sP.$e,
              children: (0, A.jsx)(iW.w, { type: "warning", children: R.intl.string(R.t["7lQlw3"]) }),
          })
        : sD.Yy.has(n)
          ? (0, A.jsx)("div", {
                className: sP.$e,
                children: (0, A.jsx)(iW.w, {
                    type: "warning",
                    children: R.intl.format(R.t.MOIaNd, {
                        keyboardNavArticle: eT.A.getArticleURL(S.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function sM(e) {
    let { keybind: t } = e;
    return t.action === S.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, A.jsx)(sO, { keybind: t, className: sP._M }) : null;
}
let sU = h.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        s = h.useCallback((e) => iZ.A.setKeybind({ ...t, action: e }), [t]),
        l = h.useCallback((e) => iZ.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = h.useCallback(() => iZ.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = h.useCallback(() => iZ.A.deleteKeybind(t.id), [t.id]),
        o = h.useId(),
        u = h.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, A.jsxs)("div", {
        className: sP.f_,
        children: [
            (0, A.jsx)(sG, { keybind: t }),
            (0, A.jsx)("div", {
                className: sP.XI,
                children: (0, A.jsx)(ss.l, {
                    selectionMode: "single",
                    label: R.intl.string(R.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, A.jsx)("div", {
                className: sP.LE,
                children: (0, A.jsx)(t2.D, {
                    label: R.intl.string(R.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, A.jsx)(sd.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, A.jsxs)("div", {
                className: sP.ne,
                children: [
                    !t.managed &&
                        (0, A.jsx)(sl.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: sr.TrashIcon,
                            "aria-label": R.intl.string(R.t.qEHmmB),
                        }),
                    (0, A.jsx)(sa.m, {
                        text: R.intl.string(t.enabled ? R.t.pNYGbx : R.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(so.A, {
                                    id: o,
                                    children: R.intl.format(t.enabled ? R.t["myr/Y0"] : R.t.lYhtPO, { actionName: u }),
                                }),
                                (0, A.jsx)(su.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, A.jsx)(H.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sP.h_,
                children: n[t.action],
            }),
            (0, A.jsx)(sM, { keybind: t }),
        ],
    });
});
var sV = n(696760),
    sk = n(734066),
    sw = n(880144),
    sF = n(614455),
    sB = n(532624),
    sz = n(731854),
    sX = n(603933);
let sY = function () {
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
            } = ((e = (0, E.bG)([sB.Ay], () => sB.Ay.getState())),
            (t = (0, E.bG)([i8.Ay], () => (0, sw.A)(i8.Ay))),
            (n = (0, E.bG)([i8.Ay], () => i8.Ay.supports(sz.O5.VIDEO))),
            (i = (0, E.bG)([sF.A], () => sF.A.isSupported)),
            (s = (0, sk.sw)()),
            (l = (0, sk.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: s } = e;
                    return B()(t)
                        .reject(
                            (e) =>
                                e.managed &&
                                ![
                                    S.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                    S.hCu.SAVE_CLIP,
                                    S.hCu.SAVE_SCREENSHOT,
                                ].includes(e.action),
                        )
                        .reject((e) => !n && (e.action === S.hCu.SAVE_CLIP || e.action === S.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !i && e.action === S.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !s && (e.action === S.hCu.SOUNDBOARD || e.action === S.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: s,
                    enableScreenshotKeybind: l,
                    allowSoundboard: (r = (0, e2.isWindows)()),
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
                            { id: "unassigned", value: S.hCu.UNASSIGNED, label: R.intl.string(R.t["0Uh579"]) },
                            { id: "push-to-talk", value: S.hCu.PUSH_TO_TALK, label: R.intl.string(R.t.Y5lgTP) },
                            {
                                id: "push-to-talk-priority",
                                value: S.hCu.PUSH_TO_TALK_PRIORITY,
                                label: R.intl.string(R.t.DkSwJ2),
                            },
                            { id: "push-to-mute", value: S.hCu.PUSH_TO_MUTE, label: R.intl.string(R.t.hSCRqd) },
                            { id: "vad-priority", value: S.hCu.VAD_PRIORITY, label: R.intl.string(R.t["49d6Nd"]) },
                            { id: "toggle-mute", value: S.hCu.TOGGLE_MUTE, label: R.intl.string(R.t.PlkYKD) },
                            { id: "toggle-deafen", value: S.hCu.TOGGLE_DEAFEN, label: R.intl.string(R.t.NvGq1K) },
                            {
                                id: "toggle-voice-mode",
                                value: S.hCu.TOGGLE_VOICE_MODE,
                                label: R.intl.string(R.t.Wa5H9S),
                            },
                            {
                                id: "toggle-streamer-mode",
                                value: S.hCu.TOGGLE_STREAMER_MODE,
                                label: R.intl.string(R.t.BK0Ncc),
                            },
                            {
                                id: "toggle-voice-channel-chat",
                                value: S.hCu.TOGGLE_VOICE_CHANNEL_CHAT,
                                label: R.intl.string(R.t.YeqEjm),
                            },
                        ];
                    return (
                        i &&
                            a.push({
                                id: "toggle-camera",
                                value: S.hCu.TOGGLE_CAMERA,
                                label: R.intl.string(R.t.hf8JVT),
                            }),
                        t &&
                            (a.push({
                                id: "toggle-overlay-input-lock",
                                value: S.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                                label: R.intl.string(R.t.VsAZcC),
                            }),
                            a.push({
                                id: "activate-overlay-region-text-widget",
                                value: S.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                label: R.intl.string(R.t.hurHWo),
                            })),
                        n &&
                            ((0, e2.isWindows)() || i8.Ay.getUseSystemScreensharePicker()) &&
                            a.push({
                                id: "toggle-go-live-streaming",
                                value: S.hCu.TOGGLE_GO_LIVE_STREAMING,
                                label: R.intl.string(R.t.ybdjJD),
                            }),
                        (0, e2.isDesktop)() &&
                            (a.push(
                                { id: "navigate-back", value: S.hCu.NAVIGATE_BACK, label: R.intl.string(R.t.gRSaOa) },
                                {
                                    id: "navigate-forward",
                                    value: S.hCu.NAVIGATE_FORWARD,
                                    label: R.intl.string(R.t.zOXpjU),
                                },
                                {
                                    id: "switch-to-voice-channel",
                                    value: S.hCu.SWITCH_TO_VOICE_CHANNEL,
                                    label: R.intl.string(R.t.ty7Lxy),
                                },
                                {
                                    id: "disconnect-from-voice-channel",
                                    value: S.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                                    label: R.intl.string(R.t.CV7mT7),
                                },
                            ),
                            s &&
                                a.push(
                                    { id: "soundboard", value: S.hCu.SOUNDBOARD, label: R.intl.string(R.t.yPH4xm) },
                                    {
                                        id: "soundboard-hold",
                                        value: S.hCu.SOUNDBOARD_HOLD,
                                        label: R.intl.string(R.t["1xFbP/"]),
                                    },
                                ),
                            l &&
                                (a.push({ id: "save-clip", value: S.hCu.SAVE_CLIP, label: R.intl.string(R.t.U4URzP) }),
                                r &&
                                    a.push({
                                        id: "save-screenshot",
                                        value: S.hCu.SAVE_SCREENSHOT,
                                        label: R.intl.string(R.t["+WloFH"]),
                                    }))),
                        a
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
                            [S.hCu.UNASSIGNED]: R.intl.string(R.t.rvlNLv),
                            [S.hCu.PUSH_TO_MUTE]: R.intl.string(R.t.xtESim),
                            [S.hCu.PUSH_TO_TALK]: R.intl.string(R.t.wTcBSy),
                            [S.hCu.PUSH_TO_TALK_PRIORITY]: R.intl.string(R.t.FhHvWH),
                            [S.hCu.TOGGLE_MUTE]: R.intl.string(R.t.X2fbUm),
                            [S.hCu.TOGGLE_DEAFEN]: R.intl.string(R.t.MjREZV),
                            [S.hCu.TOGGLE_VOICE_MODE]: R.intl.string(R.t.snm5YW),
                            [S.hCu.TOGGLE_STREAMER_MODE]: R.intl.string(R.t.YszLLx),
                            [S.hCu.VAD_PRIORITY]: R.intl.string(R.t.rSe8IZ),
                            [S.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: R.intl.string(R.t.desfB4),
                        };
                    return (
                        i && (r[S.hCu.TOGGLE_CAMERA] = R.intl.string(R.t.v1JBtL)),
                        t && (r[S.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = R.intl.string(R.t.IoP5vc)),
                        n && (0, e2.isWindows)() && (r[S.hCu.TOGGLE_GO_LIVE_STREAMING] = R.intl.string(R.t.s4C238)),
                        (0, e2.isDesktop)() &&
                            ((r[S.hCu.NAVIGATE_BACK] = R.intl.string(R.t.nKDlEt)),
                            (r[S.hCu.NAVIGATE_FORWARD] = R.intl.string(R.t.DK0FFk)),
                            (r[S.hCu.SOUNDBOARD] = (0, e2.isWindows)()
                                ? R.intl.string(R.t["5wJefL"])
                                : R.intl.string(R.t.gzjsSP)),
                            (r[S.hCu.SOUNDBOARD_HOLD] = (0, e2.isWindows)()
                                ? R.intl.string(R.t.RRkZc9)
                                : R.intl.string(R.t.laNlTl)),
                            s &&
                                ((r[S.hCu.SAVE_CLIP] = R.intl.string(R.t.z3Wbam)),
                                l && (r[S.hCu.SAVE_SCREENSHOT] = R.intl.string(R.t.m0zd57)))),
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
            ? (0, A.jsx)(H.E, { variant: "text-sm/normal", color: "text-subtle", children: R.intl.string(R.t.vyYgWp) })
            : (0, A.jsx)("div", {
                  className: sX.A,
                  children: a.map((e, t) =>
                      (0, A.jsxs)(
                          h.Fragment,
                          {
                              children: [
                                  (0, A.jsx)(sU, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                  t < a.length - 1 ? (0, A.jsx)(si.c, { className: sX.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    sH = (0, d.E2)(c.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["069nVT"])],
        Component: function () {
            return nS.Av
                ? (0, A.jsx)(sY, {})
                : (0, A.jsx)(iW.w, {
                      type: "info",
                      children: R.intl.format(R.t.mPi3F3, { downloadLink: S.X7G.DOWNLOAD }),
                  });
        },
    });
var sK = n(475358),
    sW = n(28647),
    sZ = n(793650);
function sq(e) {
    let { children: t } = e;
    return t([sV.Q_.MESSAGE, sV.Q_.NAVIGATION, sV.Q_.DND, sV.Q_.CHAT, sV.Q_.VOICE_AND_VIDEO, sV.Q_.MISCELLANEOUS]);
}
function sQ(e) {
    let { showHeader: t = !0 } = e,
        n = B()((0, sV.Bx)())
            .filter((e) => e.description !== R.intl.string(R.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, A.jsxs)(X.B, {
        gap: 48,
        children: [
            (0, A.jsx)(n5.n, {
                label: t ? R.intl.string(R.t.Lz5KHI) : void 0,
                children: (0, A.jsx)("div", {
                    className: sZ.jh,
                    children: (0, A.jsxs)("div", {
                        className: sZ.yZ,
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/normal", children: R.intl.string(R.t.sMWLBj) }),
                            (0, A.jsx)("div", {
                                className: sZ.DM,
                                children: (0, A.jsx)(sK.e, { shortcut: sW.z.binds["0"], className: sZ.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, A.jsx)(sq, {
                children: (e) =>
                    (0, A.jsx)(A.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, sV.Gm)(e),
                                s = (0, sV.zF)(e),
                                l = n[e];
                            return (0, A.jsx)(
                                n5.n,
                                {
                                    label: i,
                                    description: s,
                                    children: (0, A.jsx)("div", {
                                        className: sZ.jh,
                                        children: l.map((e, t) =>
                                            (0, A.jsxs)(
                                                h.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, A.jsx)(si.c, {}),
                                                        (0, A.jsxs)("div", {
                                                            className: sZ.yZ,
                                                            children: [
                                                                (0, A.jsx)(H.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, A.jsx)("div", {
                                                                    className: sZ.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, A.jsx)(
                                                                            sK.e,
                                                                            { shortcut: e, className: sZ.LE },
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
let sJ = (0, d.E2)(c.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.Lz5KHI)],
    Component: () => (0, A.jsx)(sQ, { showHeader: !1 }),
});
var s$ = n(744893),
    s0 = n(188321);
let s1 = (0, d.zD)(c.X.GAME_MODE_ENABLED_SETTING, {
    useTitle: () => R.intl.string(eb.default.rea2Ar),
    useSubtitle: () => R.intl.string(eb.default.DwBO0x),
    useValue: () => (0, E.bG)([s0.A], () => s0.A.enabled),
    setValue: (e) => s$.kv(e),
});
var s2 = n(19575),
    s3 = n(546385);
let s5 = (0, d.E2)(c.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nS.Av && !(0, nS.cX)(),
    useSearchTerms: () => [R.intl.string(R.t["/HIxyY"]), R.intl.string(R.t.B0hqpb)],
    Component: function () {
        let [e] = h.useState(() => s2.Ay.getEnableHardwareAcceleration()),
            t = R.intl.string(R.t["/HIxyY"]),
            n = R.intl.string(R.t.B0hqpb);
        return (0, A.jsxs)(X.B, {
            children: [
                (0, A.jsx)(t3.d, { label: t, description: n, checked: e, onChange: s4 }),
                !e && (0, A.jsx)(s3.A, { look: s3.k.WARNING, children: R.intl.string(R.t.j7S6IX) }),
            ],
        });
    },
});
function s4(e) {
    let t = e ? R.intl.format(R.t.LYXRxL, {}) : R.intl.format(R.t.uDP3Kz, {});
    (0, n3.A)({
        title: R.intl.string(R.t.aqpAvn),
        subtitle: t,
        confirmText: R.intl.string(R.t.vT7ckk),
        onConfirm: () => {
            s2.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let s6 = (0, ex.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function s8() {
    let e = await s2.Ay.getOpenOnStart(),
        t = await s2.Ay.getSetting("START_MINIMIZED", !1),
        n = await s2.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    s6.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let s7 = (0, d.zD)(c.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => R.intl.string(R.t["3BeZti"]),
        usePredicate: () => nS.Av && !(0, nS.cX)(),
        useValue: () => s6.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (s6.setState({ openOnStartup: e }), s2.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            s2.Ay.getOpenOnStart().then((e) => s6.setState({ openOnStartup: e }));
        },
    }),
    s9 = (0, d.zD)(c.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => R.intl.string(R.t.dJ5MUh),
        useSubtitle: () => R.intl.string(R.t.nQavHr),
        usePredicate: () => nS.Av && !(0, nS.cX)(),
        useValue: () => s6.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (s6.setState({ minimizeToTray: e }), s2.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            s2.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => s6.setState({ minimizeToTray: e }));
        },
    }),
    le = (0, d.zD)(c.X.OS_START_MINIMIZED, {
        useTitle: () => R.intl.string(R.t.GfBL83),
        useSubtitle: () => R.intl.string(R.t.XGyhhc),
        usePredicate: () => (0, nS.uF)(),
        useValue: () => s6.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (s6.setState({ startMinimized: e }), s2.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !s6.useState((e) => e.openOnStartup),
        initialize: () => {
            s2.Ay.getSetting("START_MINIMIZED", !1).then((e) => s6.setState({ startMinimized: e }));
        },
    });
var lt = n(61628);
let ln = new Set(["failure", "unknown"]),
    li = (0, d.E2)(c.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [R.intl.string(R.t.roHq80)],
        Component: function () {
            let [e, t] = h.useState(!1),
                [n, i] = h.useState(() => (0, i7.TC)()),
                s = (0, E.bG)([i3.Ay], () => i3.Ay.getSystemServiceStatus("input-service")),
                l = h.useCallback(async () => {
                    (t(!0),
                        n ? await (0, i7.z8)("windows-settings") : await (0, i7.sL)("windows-settings"),
                        t(!1),
                        i((0, i7.TC)()));
                }, [n]);
            return (0, A.jsxs)("div", {
                className: lt.q,
                children: [
                    (0, A.jsxs)("div", {
                        className: lt.L,
                        children: [
                            (0, A.jsxs)(X.B, {
                                direction: "horizontal",
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: R.intl.string(R.t.roHq80),
                                    }),
                                    n &&
                                        (0, A.jsxs)(A.Fragment, {
                                            children: [
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === s.state
                                                            ? "text-feedback-positive"
                                                            : ln.has(s.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: (function (e) {
                                                        switch (e.state) {
                                                            case "unknown":
                                                                return R.intl.string(R.t["KW+nqT"]);
                                                            case "disabled":
                                                                return R.intl.string(R.t["Q/wAF7"]);
                                                            case "disconnected":
                                                                return R.intl.string(R.t.Xvs9IM);
                                                            case "initializing":
                                                                return R.intl.string(R.t.h4qz8W);
                                                            case "connecting":
                                                                return R.intl.string(R.t.fSu9XF);
                                                            case "handshaking":
                                                                return R.intl.string(R.t["00aYLJ"]);
                                                            case "running":
                                                                return R.intl.string(R.t["54TB7Z"]);
                                                            case "waiting-for-retry":
                                                                return R.intl.string(R.t["0FONwi"]);
                                                            case "failure":
                                                                return R.intl.string(R.t.Ic0nkd);
                                                            default:
                                                                (0, io.xb)(e.state);
                                                        }
                                                    })(s),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: R.intl.format(R.t["8CAL+D"], {
                                    helpCenterLink: eT.A.getArticleURL(S.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(_.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: l,
                        text: n ? R.intl.string(R.t.pAwbdL) : R.intl.string(R.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: i7.XQ,
    });
var ls = n(687813),
    ll = n(562708),
    lr = n(376357),
    la = n(97483);
async function lo() {
    try {
        await lu();
    } catch {
        (0, lr.P)({ id: "performance-trace-failed", type: la.Ck.FAILURE, message: R.intl.string(R.t["8ihs9i"]) });
    }
}
async function lu() {
    var e;
    let t = nT.A.tracing;
    if (null == t) return;
    (0, lr.P)({ id: "performance-trace-capturing", type: la.Ck.MESSAGE, message: R.intl.string(R.t.qGRW8d) });
    let [n, i, s] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nT.A.processUtils.getSystemInfo(),
            nT.A.processUtils.getSystemMetrics(),
        ]),
        l = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, ll.getSuperProperties)(),
            native_build_number: nT.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: s,
            cumulativeCpuUsage: nT.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nT.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, ls._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, ls._u)(JSON.stringify(l, null, 2)),
        }),
        new Promise((t, n) => {
            (0, ls.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    (nT.A.fileManager.showItemInFolder(u),
        (0, lr.P)({ id: "performance-trace-saved", type: la.Ck.SUCCESS, message: R.intl.string(R.t.gpCRFS) }));
}
let ld = (0, d.Tf)(c.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => R.intl.string(R.t.o6Qr6n),
    useSubtitle: () => R.intl.string(R.t.OuGtH8),
    useLabel: () => R.intl.string(R.t.bm1WjO),
    usePredicate: () => nS.Av && nT.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n3.A)({
            title: R.intl.string(R.t.o6Qr6n),
            subtitle: R.intl.string(R.t.JEHHJ1),
            confirmText: R.intl.string(R.t.bm1WjO),
            onConfirm: () => {
                ((0, tB.default)(), lo());
            },
        });
    },
});
function lc() {
    te.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var lg = n(287809);
let lm = (0, d.Tf)(c.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        lc();
    },
});
var lA = n(114129),
    lh = n(442325),
    lE = n(858760);
let lS = (0, d.zD)(c.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        usePredicate: () => lE.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nS.xl)(),
        useValue: () => (0, E.bG)([lh.A], () => lh.A.isUserOptedIn()),
        setValue: lA.lj,
    }),
    lx = (0, d.zZ)(c.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["8/udY0"]),
        buildLayout: () => [lm, ld, lS],
    }),
    lp = (0, d.zZ)(c.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t.cg6ltt),
        buildLayout: () => [s7, le, s9, s5],
        usePredicate: () => nS.Av && ((0, nS.uF)() || (0, nS.j9)()),
        initialize: () => {
            s8();
        },
    }),
    lT = (0, d.zZ)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["069nVT"]),
        useSubtitle: () => R.intl.string(R.t.T4LZVL),
        buildLayout: () => [sH],
        initialize: () => (iZ.A.enableAll(!1), () => iZ.A.enableAll(!0)),
        useInlineNotice: function () {
            return nS.Av
                ? {
                      type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, A.jsxs)(X.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, A.jsx)(iW.w, { type: "info", children: R.intl.string(R.t["5pkmHa"]) }),
                                  (0, A.jsx)(sn, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nS.Av
                ? {
                      type: m.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: m.UV.BUTTON,
                              text: R.intl.string(R.t.zk6Xbs),
                              variant: "secondary",
                              icon: iH.j,
                              onClick: () => iZ.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    lf = (0, d.zZ)(c.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Lz5KHI),
        buildLayout: () => [sJ],
    }),
    lI = (0, d.zZ)(c.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+XZgmA"]),
        usePredicate: () => nS.Av && ((0, nS.uF)() || (0, nS.j9)()),
        buildLayout: () => [li],
    }),
    l_ = (0, d.zZ)(c.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => R.intl.string(eb.default.QG0axY),
        usePredicate: () => (0, iq.W)("GameModeCategory"),
        buildLayout: () => [s1],
    }),
    lN = (0, d.t_)(c.X.SYSTEM_PANEL, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        buildLayout: () => [lp, lT, lf, lI, l_, lx],
    }),
    lC = (0, d.i4)(c.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        icon: iK.F,
        buildLayout: () => [lN],
    });
var lb = n(831544),
    ly = n(922795),
    lv = n(212245),
    lj = n(329551),
    lO = n(285918),
    lL = n(712711),
    lR = n(952572),
    lD = n(382003);
let lP = (0, d.E2)(c.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.lZTUPs)],
        usePredicate: lR.A,
        Component: function () {
            let e = (0, lv.p)(),
                t = h.useRef(!1),
                n = (0, E.bG)([i8.Ay], () => i8.Ay.getVideoDeviceId()),
                [i, s] = h.useState((0, lj.i)(lg.default.getCurrentUser())),
                l = h.useRef(i);
            return (
                h.useEffect(
                    () => () => {
                        t.current && (0, lO._C)(l.current);
                    },
                    [],
                ),
                (0, A.jsx)(lD.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (l.current = n), s(n), (0, lL.gB)(n, { location: e.location }).catch(S.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    lG = (0, d.zD)(c.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => R.intl.string(R.t["3Ppr1h"]),
        useSubtitle: () => R.intl.string(R.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            (L.bm.updateSetting(e), tr.default.track(S.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var lM = n(625841),
    lU = n(74848),
    lV = n(204050);
let lk = (0, ex.D)(() => ({ previewEnabled: !1 })),
    lw = (0, d.E2)(c.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.FsQ3OR)],
        Component: function () {
            let e = (0, E.bG)([i8.Ay], () => i8.Ay.isVideoAvailable()),
                { id: t } = (0, lU.x5)(sz.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, ek.Ay)();
            return (0, A.jsx)(lM.U, {
                label: R.intl.string(R.t.FsQ3OR),
                deviceType: sz.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, lV.p)()
                    ? R.intl.format(R.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (lk.setState({ previewEnabled: !1 }),
                                  window.open((0, lV.i)(t)),
                                  tr.default.track(S.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var lF = n(745317),
    lB = n(9219);
let lz = (0, d.E2)(c.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [R.intl.string(R.t.JIf4v7)],
        Component: function () {
            let e = i8.Ay.getCameraComponent(),
                t = (0, E.bG)([i8.Ay], () => i8.Ay.getVideoDeviceId()),
                n = lk.useField("previewEnabled"),
                i = (0, E.bG)([i8.Ay], () => i8.Ay.isVideoAvailable());
            return ((0, eS.l0)(() => {
                lk.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, A.jsx)("div", {
                      className: lB.T9,
                      children: (0, A.jsxs)("div", {
                          className: lB.Xi,
                          children: [
                              (0, A.jsxs)("div", {
                                  className: lB.UI,
                                  children: [
                                      (0, A.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, A.jsx)(lF.kE, {}),
                                  ],
                              }),
                              (0, A.jsx)(lF.eK, {}),
                          ],
                      }),
                  })
                : (0, A.jsx)("div", {
                      className: lB.T9,
                      children: (0, A.jsx)(sa.m, {
                          text: i ? null : R.intl.string(R.t["8jSzSe"]),
                          children: (0, A.jsx)(_.$, {
                              variant: "primary",
                              text: R.intl.string(R.t.JIf4v7),
                              onClick: () => lk.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    lX = (0, d.zZ)(c.X.CAMERA_CATEGORY, {
        useTitle: () => R.intl.string(R.t.uje3P9),
        usePredicate: () => (0, E.bG)([i8.Ay], () => i8.Ay.supports(sz.O5.VIDEO)),
        buildLayout: () => [lz, lG, lw, lP],
    });
var lY = n(827343);
let lH = (0, d.zD)(c.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => R.intl.string(R.t.qFphsa),
        useSubtitle: () => R.intl.string(R.t.cQfwyY),
        usePredicate: function () {
            return (0, nS.j9)();
        },
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (lY.A.setOpenH264Enabled(e),
                (0, n3.A)({
                    title: R.intl.string(R.t["9jf31O"]),
                    subtitle: R.intl.string(R.t["J2wg+X"]),
                    confirmText: R.intl.string(R.t.BddRzS),
                    onConfirm: () => nT.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    lK = (0, d.zD)(c.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => R.intl.string(R.t["r6K+TL"]),
        useSubtitle: () => R.intl.string(R.t["xl9+I6"]),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getAecDump());
        },
        setValue: lY.A.setAecDump,
        usePredicate: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.isAecDumpSupported());
        },
    });
var lW = n(139033),
    lZ = n(862482),
    lq = n(640238),
    lQ = n(825484),
    lJ = n(144009),
    l$ = n(487329),
    l0 = n(353835);
let l1 = (0, ex.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function l2() {
    let e = await nT.A.fileManager.getLogPath();
    nT.A.fileManager.showItemInFolder(e);
}
function l3(e) {
    (0, n3.A)({
        title: R.intl.string(R.t["7UXEF2"]),
        subtitle: R.intl.string(R.t.IYPrRl),
        confirmText: R.intl.string(R.t.BddRzS),
        onConfirm: () => lY.A.setDebugLogging(e),
    });
}
async function l5(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await i8.Ay.getMediaEngine().writeAudioDebugState(),
            await l0.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, lJ.a)(S.Umv.RTC),
            (e = R.intl.string(R.t["fKBB8+"])),
            (t = R.intl.string(R.t.BvyxE7)),
            (0, lW.A)({ title: e, subtitle: t }));
    } catch (l) {
        var i;
        let e, t, n, s;
        ((i = l.displayMessage),
            (e = R.intl.string(R.t.QZg0J7)),
            (t = i ?? R.intl.string(R.t.VzHcSm)),
            (n = (0, l$.B1)(l$.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = R.intl.formatToPlainString(R.t.ejOT95, { errorCode: n })),
            (0, sm.openModal)((n) =>
                (0, A.jsx)(lq.a, {
                    header: e,
                    confirmButtonColor: lZ.$n.Colors.BRAND,
                    confirmText: R.intl.string(R.t.BddRzS),
                    ...n,
                    children: (0, A.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/normal", children: t }),
                            (0, A.jsx)(H.E, {
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
async function l4() {
    await l5({
        onUploadStart: () => l1.setState({ isUploading: !0 }),
        onUploadFinish: () => l1.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let l6 = (0, d.E2)(c.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [R.intl.string(R.t["726JHL"]), R.intl.string(R.t.EbwFfR), R.intl.string(R.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, E.bG)([i8.Ay], () => i8.Ay.supports(sz.O5.DEBUG_LOGGING));
        return nS.Av && e && null != nT.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, E.bG)([i8.Ay], () => i8.Ay.getDebugLogging()),
            t = l1.useField("isUploading"),
            n = l1.useField("isDisabled"),
            i = h.useId();
        return (0, A.jsxs)("fieldset", {
            children: [
                (0, A.jsx)(so.A, { tag: "legend", id: i, children: R.intl.string(R.t["FjN+et"]) }),
                (0, A.jsxs)(X.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, A.jsx)(t3.d, {
                            label: R.intl.string(R.t["726JHL"]),
                            description: R.intl.string(R.t["/7ak9Q"]),
                            checked: e,
                            onChange: l3,
                        }),
                        (0, A.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, A.jsxs)(lQ.e, {
                                children: [
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.EbwFfR),
                                        onClick: l4,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": R.intl.string(R.t.aY1OH2),
                                    }),
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.nuPtYi),
                                        onClick: l2,
                                        "aria-label": R.intl.string(R.t["L/hFOe"]),
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
var l8 = n(233545),
    l7 = n(412780);
function l9() {
    return (0, E.bG)([lg.default, i8.Ay], () => {
        let e = lg.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === s2.Ay.releaseChannel || "development" === s2.Ay.releaseChannel,
            i = i8.Ay.supports(sz.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let re = (0, d.zD)(c.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.U4FgFK),
        useSubtitle: () => R.intl.string(R.t.Lm72RU),
        useValue: function () {
            return (0, E.bG)([l7.Ay], () => l7.Ay.shouldRecordNextConnection());
        },
        setValue: l8.Et,
        usePredicate: l9,
    }),
    rt = (0, d.Tf)(c.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.nJnOHO),
        useLabel: () => R.intl.string(R.t["3xjX0U"]),
        onClick: l8.YW,
        usePredicate: l9,
    });
var rn = n(926919),
    ri = n(111162),
    rs = n(855302);
let rl = (0, d.zD)(c.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => R.intl.string(R.t["0CEP6e"]),
        useSubtitle: () => R.intl.string(R.t["kBXuW+"]),
        useValue: function () {
            return (0, E.bG)([ri.default], () => ri.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = ri.default.isStreamInfoOverlayEnabled;
            ((0, rs.A)("stream_info_overlay_enabled", e, t), (0, rn.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    rr = (0, d.bd)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t["/B4I8H"]) : R.intl.string(R.t.BTlsWH)),
        useCollapsedSubtitle: () => R.intl.string(R.t.la1Ys4),
        buildLayout: () => [rl, lK, re, rt, l6],
    });
function ra(e, t, n) {
    (0, n3.A)({ title: e, subtitle: t, confirmText: R.intl.string(R.t.BddRzS), onConfirm: n });
}
let ro = (0, d.Tf)(c.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => R.intl.string(R.t.SXfv1v),
        useSubtitle: () => R.intl.string(R.t["buA5/q"]),
        useLabel: () => R.intl.string(R.t.yBZMsQ),
        onClick: function () {
            ra(R.intl.string(R.t["4iKQ/3"]), R.intl.string(R.t.sQ42iT), lY.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    ru = (0, d.zZ)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.UDAU9K),
        buildLayout: () => [lH, rr, ro],
    });
var rd = n(736056),
    rc = n(360729),
    rg = n(446243),
    rm = n(558076),
    rA = n(270103);
let rh = (0, d.zD)(c.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => R.intl.string(rA.default.qYzpsI),
        useSubtitle: () => R.intl.string(rA.default["+vMoL1"]),
        useValue: () => (0, E.bG)([rm.A], () => rm.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rg.Ft)(e),
    }),
    rE = (0, d.zZ)(c.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => R.intl.string(rA.default.wRLmM0),
        usePredicate: function () {
            let e = (0, E.yK)([sI.A], () => sI.A.getGuildIds()),
                { loaded: t, override: n } = (0, E.cf)([rd.A], () => ({
                    loaded: rd.A.getLoadedGuildExperiment(rc.vJ),
                    override: rd.A.getExperimentOverrideDescriptor(rc.vJ),
                }));
            return (0, h.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, rc.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rh],
    });
var rS = n(347481),
    rx = n(852712),
    rp = n(179172),
    rT = n(868162);
let rf = (0, d.zD)(c.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => R.intl.string(R.t.gF8HJo),
        useSubtitle: () => R.intl.string(R.t.cfrfyZ),
        useValue: function () {
            return (0, E.bG)([rT.A], () => !0 !== rT.A.getState().neverShowModal);
        },
        setValue: function (e) {
            rp.Bv(!e);
        },
        usePredicate: function () {
            return e2.isPlatformEmbedded;
        },
    }),
    rI = (0, d.zD)(c.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => R.intl.string(R.t.cUMdH0),
        useSubtitle: () => R.intl.string(R.t["6EjbvA"]),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            lY.A.setAutomaticGainControl(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, E.bG)([i8.Ay, rS.A], () => {
                let e = i8.Ay.getInputDeviceId();
                return rS.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.isAutomaticGainControlSupported() && i8.Ay.isInputProfileCustom());
        },
    }),
    r_ = (0, d.sN)(c.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => R.intl.string(R.t.AlybXj),
        setValue: (e) =>
            lY.A.setAttenuation(e, i8.Ay.getAttenuateWhileSpeakingSelf(), i8.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i8.Ay.getAttenuation(),
    }),
    rN = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => R.intl.string(R.t["9dHxRY"]),
        useValue: () => (0, E.bG)([i8.Ay], () => i8.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lY.A.setAttenuation(i8.Ay.getAttenuation(), e, i8.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rC = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => R.intl.string(R.t.SMt0Gr),
        useValue: () => (0, E.bG)([i8.Ay], () => i8.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lY.A.setAttenuation(i8.Ay.getAttenuation(), i8.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rb = (0, d.FW)(c.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.oSdBvW),
        useSubtitle: () => R.intl.string(R.t["0A/8Rt"]),
        usePredicate: () => (0, E.bG)([i8.Ay], () => i8.Ay.supports(sz.O5.ATTENUATION)),
        buildLayout: () => [r_, rN, rC],
    }),
    ry = (0, d.zD)(c.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => R.intl.string(R.t.DFPXIG),
        useSubtitle: () => R.intl.string(R.t["UyRX+C"]),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lY.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.showBypassSystemInputProcessing() && i8.Ay.isInputProfileCustom());
        },
    }),
    rv = (0, d.zD)(c.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => R.intl.string(R.t.jrWHD3),
        useSubtitle: () => R.intl.string(R.t.YCCMkJ),
        useValue: function () {
            return (0, E.bG)([eg.Ay], () => !eg.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, rs.A)("switch_channel_warning_enabled", e, !eg.Ay.disableVoiceChannelChangeAlert),
                nw.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rj = (0, d.zD)(c.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => R.intl.string(R.t.BbESsg),
        useSubtitle: () => R.intl.string(R.t.LoOB1F),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => {
                let { vadUseKrisp: e } = i8.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = i8.Ay.getMode();
            lY.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, E.bG)(
                [i8.Ay],
                () => i8.Ay.getMode() !== S.TBI.VOICE_ACTIVITY || !i8.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.isAdvancedVoiceActivitySupported() && i8.Ay.isInputProfileCustom());
        },
    }),
    rO = (0, d.Hn)(c.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => R.intl.string(R.t.wVBHr0),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            ra(R.intl.string(R.t.uY7AcQ), R.intl.string(R.t.gBqik6), () => lY.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, E.cf)([i8.Ay], () => ({
                legacyAudioSubsystemSupported: i8.Ay.supports(sz.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i8.Ay.supports(sz.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i8.Ay.supports(sz.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return h.useMemo(() => {
                let i;
                return (
                    (i = [{ id: sz.rB.STANDARD, value: sz.rB.STANDARD, label: R.intl.string(R.t.dqb2JZ) }]),
                    e && i.push({ id: sz.rB.LEGACY, value: sz.rB.LEGACY, label: R.intl.string(R.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: sz.rB.EXPERIMENTAL, value: sz.rB.EXPERIMENTAL, label: R.intl.string(R.t.liQmtr) }),
                    n && i.push({ id: sz.rB.AUTOMATIC, value: sz.rB.AUTOMATIC, label: R.intl.string(R.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rL = (0, d.zD)(c.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => R.intl.string(R.t.uancuJ),
        useSubtitle: () => R.intl.string(R.t.I1Eoqq),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getQoS());
        },
        setValue: function (e) {
            lY.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.supports(sz.O5.QOS));
        },
    }),
    rR = (0, d.zD)(c.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => R.intl.string(R.t["4rsOPQ"]),
        useSubtitle: () => R.intl.string(R.t.jtiiCw),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lY.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return e2.isPlatformEmbedded;
        },
    }),
    rD = (0, d.bd)(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.KHsSWK) : R.intl.string(R.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tp(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, E.bG)([i8.Ay], () => i8.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rI, rj, ry, rf, rR, rv, rb, rO, rL],
    }),
    rP = (0, d.zD)(c.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => R.intl.string(R.t.iWTwu6),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lY.A.setEchoCancellation(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, E.bG)([i8.Ay, rS.A], () => {
                let e = i8.Ay.getInputDeviceId();
                return rS.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.isInputProfileCustom());
        },
    });
var rG = n(459838),
    rM = n(451988),
    rU = n(475883),
    rV = n(9761);
let rk = (0, tY.Ld)();
function rw(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, A.jsx)("div", {
        role: "meter",
        className: ic()(rU.$I, n),
        id: i,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? R.intl.string(R.t.haLKZ0) : R.intl.string(R.t.X2hJL7),
        children: (0, A.jsx)("div", { className: ic()(rU.Jx, rU.NU, { [rU.zY]: t && !r, [rU.r9]: r }) }),
    });
}
function rF(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, E.cf)([i8.Ay], () => ({
            threshold: i8.Ay.getModeOptions().threshold,
            autoThreshold: i8.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, E.bG)([i8.Ay], () => i8.Ay.getMode());
    return (0, A.jsx)("section", {
        className: ic()(rU.Mo, rU.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": s,
        children: (0, A.jsx)(Y.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lY.A.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: n2.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: n2.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rk,
            disabled: l,
            children: (0, A.jsxs)("div", {
                className: ic()(rU.NU, rU.TL, rU.Jx, rV.bar),
                children: [
                    (0, A.jsx)("div", { className: ic()(rU.GS, rU.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, A.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rB = (0, d.E2)(c.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [R.intl.string(R.t["sqUm+k"]), R.intl.string(R.t.I1Zuq0), R.intl.string(R.t.nuFtHH)],
    usePredicate: () => (0, E.bG)([i8.Ay], () => i8.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, E.cf)([i8.Ay], () => ({
                autoThreshold: i8.Ay.getModeOptions().autoThreshold,
                disabled: i8.Ay.getMode() !== sz.TB.VOICE_ACTIVITY,
            })),
            n = h.useCallback((e) => {
                let t = i8.Ay.getMode(),
                    { threshold: n } = i8.Ay.getModeOptions();
                lY.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, E.bG)([i8.Ay], () => i8.Ay.supports(sz.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = h.useState(-100),
                    [n, i] = h.useState(!1);
                function s(e, n) {
                    (t(e), i((n & sz.ME.VOICE) === sz.ME.VOICE));
                }
                return (
                    h.useEffect(() => {
                        let e = new rM.Ep();
                        return (
                            e.start(1e3, () => {
                                (i8.Ay.getMediaEngine().on(rG.bg.VoiceActivity, s), e.stop());
                            }),
                            () => {
                                (i8.Ay.getMediaEngine().removeListener(rG.bg.VoiceActivity, s), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, E.bG)([i8.Ay], () => i8.Ay.isEnabled()),
            a = h.useMemo(
                () =>
                    !r &&
                    (0, A.jsx)("div", {
                        className: rU.B4,
                        children: (0, A.jsx)(iW.w, {
                            type: "warning",
                            children: R.intl.format(R.t["O13I+O"], { onEnableClick: () => lY.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = h.useMemo(() => (e ? R.intl.string(R.t.JsbzjA) : R.intl.string(R.t.MLmyMY)), [e]),
            u = h.useId(),
            d = h.useId();
        return i
            ? (0, A.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, A.jsx)(so.A, { tag: "legend", id: u, children: R.intl.string(R.t.GByLar) }),
                      (0, A.jsx)(so.A, { id: d, children: o }),
                      (0, A.jsxs)(X.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, A.jsx)(t3.d, {
                                  disabled: t,
                                  label: R.intl.string(R.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, A.jsx)(rw, {
                                        isSpeaking: l,
                                        className: rU.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rF, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, A.jsxs)(X.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, A.jsx)(t2.D, {
                          label: R.intl.string(R.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, A.jsx)(rw, {
                                        isSpeaking: l,
                                        className: rU.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rF, {
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
var rz = n(366010);
let rX = n(993830),
    rY = n(413142),
    rH = { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO };
function rK() {
    let e = (0, E.bG)([nB.A], () => (0, rz.q)(nB.A.theme));
    return (0, A.jsx)("img", { src: e ? rX : rY, width: 48, height: 32, alt: "" });
}
let rW = (0, d.E2)(c.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.t8Qhib), R.intl.string(R.t.hmfkCi)],
    usePredicate: function () {
        return (0, E.bG)([i8.Ay], () => i8.Ay.isInputProfileCustom() && i8.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = h.useCallback((e) => {
                (lY.A.setNoiseCancellation("KRISP" === e, rH), lY.A.setNoiseSuppression("STANDARD" === e, rH));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: s,
            } = (0, E.cf)([i8.Ay], () => ({
                noiseCancellation: i8.Ay.getNoiseCancellation(),
                noiseSuppression: i8.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: i8.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: i8.Ay.isNoiseCancellationSupported(),
            })),
            l = h.useMemo(() => {
                let e = [];
                return (
                    s && e.push({ id: "krisp", label: R.intl.string(R.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: R.intl.string(R.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: R.intl.string(R.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [s, i]),
            r = s
                ? R.intl.format(R.t["1q5aTp"], { helpArticle: eT.A.getArticleURL(S.MVz.NOISE_SUPPRESSION) })
                : R.intl.string(R.t.OWKjw5);
        return (0, A.jsxs)(X.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, A.jsx)(ss.l, {
                    label: R.intl.string(R.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, A.jsx)(rK, {}),
            ],
        });
    },
});
var rZ = n(934729),
    rq = n(621380);
let rQ = !nS.Av;
function rJ() {
    return (0, E.bG)([i8.Ay], () => i8.Ay.getMode() === sz.TB.PUSH_TO_TALK);
}
let r$ = (0, d.zD)(c.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nS.Av ? R.intl.string(R.t.tG4Np5) : R.intl.string(R.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, E.bG)([i8.Ay], () => i8.Ay.getMode());
        return h.useMemo(() => {
            if (!nS.Av && e === sz.TB.PUSH_TO_TALK)
                return R.intl.format(R.t["VHI4+Y"], { onDownloadClick: () => (0, rZ._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, E.bG)([i8.Ay], () => i8.Ay.getActiveInputProfile() !== rq.m.STUDIO);
    },
    useValue: function () {
        return (0, E.bG)([i8.Ay], () => i8.Ay.getMode() === sz.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? sz.TB.PUSH_TO_TALK : sz.TB.VOICE_ACTIVITY),
            (i = [tM.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === sz.TB.PUSH_TO_TALK &&
                rQ &&
                (0, sm.openModalLazy)(async () => {
                    let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                    return (t) =>
                        (0, A.jsx)(e, {
                            title: R.intl.string(R.t.Kdt0Gb),
                            confirmText: R.intl.string(R.t["1WjMbC"]),
                            cancelText: R.intl.string(R.t.BddRzS),
                            onConfirm: () => (0, rZ._)("PTT Limited Modal"),
                            body: R.intl.string(R.t.NIozvt),
                            ...t,
                        });
                }),
            lY.A.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
});
var r0 = n(484599);
let r1 = (0, d.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        usePredicate: rJ,
        Component: function () {
            let e = (0, E.bG)([i8.Ay], () => {
                    let { shortcut: e } = i8.Ay.getModeOptions();
                    return e;
                }),
                t = R.intl.format(R.t.HVvn5T, {
                    onClick: () => (0, no.openUserSettings)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, A.jsx)(t2.D, {
                label: R.intl.string(R.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: r0.e,
                    children: (0, A.jsx)(sd.A, {
                        defaultValue: e,
                        onChange: (e) => lY.A.setMode(S.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    r2 = (0, d.sN)(c.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => R.intl.string(R.t.GCNMM8),
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        setValue: function (e) {
            lY.A.setMode(S.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: S.IjB,
        getInitialValue: function () {
            let { delay: e } = i8.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: rJ,
    });
var r3 = n(844981),
    r5 = n(943679);
function r4() {
    return (0, r3.Ay)("VoiceSettings");
}
let r6 = (0, d.zD)(c.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => R.intl.string(r5.default.LGDPhA),
        useSubtitle: function () {
            let e = r4();
            if ((0, r3.Xt)(e))
                return e === r3.L3.BLOCKED_MONO_OUTPUT
                    ? R.intl.string(r5.default.rOXfEw)
                    : R.intl.string(r5.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lY.A.setSpatialAudio(e, [tM.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return r4() !== r3.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, r3.Xt)(r4());
        },
    }),
    r8 = (0, d.Qx)(c.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => R.intl.string(R.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rx._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH), R.intl.string(R.t.VZPR0R), R.intl.string(R.t.cjPbpT)],
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getActiveInputProfile() ?? rq.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lY.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rx.d)({ location: "InputProfileCategory" });
            return [
                { value: rq.m.VOICE_ISOLATION, name: R.intl.string(R.t.cjPbpT), desc: R.intl.string(R.t.CzhvnE) },
                { value: rq.m.STUDIO, name: R.intl.string(R.t.VZPR0R), desc: R.intl.string(R.t.ZaJksS) },
                { value: rq.m.CUSTOM, name: R.intl.string(R.t["N/PQjv"]), desc: R.intl.string(R.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    r7 = (0, d.zZ)(c.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, E.bG)([rS.A, i8.Ay], () => {
                let e = i8.Ay.getInputDeviceId();
                return (
                    (rS.A.hasEchoCancellation(e) || rS.A.hasNoiseSuppression(e) || rS.A.hasAutomaticGainControl(e)) &&
                    i8.Ay.isInputProfileCustom()
                );
            });
            return h.useMemo(() => {
                if (e) return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [r8, rB, rW, rP, r6, r$, r1, r2, rD],
    });
var r9 = n(403581),
    ae = n(512950),
    at = n(983851),
    an = n(687021),
    ai = n(128450),
    as = n(796774),
    al = n(209932),
    ar = n(813564),
    aa = n(984813),
    ao = n(922016),
    au = n(305866),
    ad = n(22231),
    ac = n(158045),
    ag = n(792348),
    am = n(674168),
    aA = n(511558),
    ah = n(817232),
    aE = n(647451);
function aS(e) {
    let { onSelect: t } = e,
        [n, i] = h.useState(!1),
        s = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
        l = ac.Ay.canUseCustomCallSounds(s),
        r = h.useRef(null);
    function a(e) {
        l && (i(!1), t?.(e));
    }
    return (0, A.jsx)(ao.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, A.jsx)(au.l, {
                children: (0, A.jsx)(aA.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, A.jsx)(am.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, A.jsx)(ah.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: R.intl.string(R.t.uOe0Az),
                children: (0, A.jsx)(ad.PencilIcon, { size: "md", color: "currentColor", className: aE.Wo }),
            }),
    });
}
function ax(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, ag.A)(t, null),
        i =
            0 === (0, ar.wH)()
                ? R.intl.string(R.t.OASXjt)
                : R.intl.formatToPlainString(R.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, A.jsx)(ah.dT, {
        onClick: n,
        text: i,
        children: (0, A.jsx)(at.H, { size: "md", color: "currentColor", className: aE.wg }),
    });
}
function ap(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, A.jsxs)("div", {
        className: aE.D6,
        children: [
            (0, A.jsxs)("div", {
                className: aE.kL,
                children: [
                    a && (0, A.jsx)(tR.A, { emojiId: l, emojiName: r, className: aE.Zg }),
                    (0, A.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: aE.dj,
                        children:
                            null == t
                                ? R.intl.string(R.t.PoWNfe)
                                : n
                                  ? R.intl.format(R.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, A.jsx)(H.E, {
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
                        ? (0, A.jsx)(ax, { sound: t })
                        : (0, A.jsx)(at.H, { size: "md", color: "currentColor", className: aE.Gk }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: aE.kL,
                children: [
                    (0, A.jsx)(aS, { onSelect: i }),
                    s &&
                        !n &&
                        (0, A.jsx)(ah.dT, {
                            onClick: () => i(null),
                            text: R.intl.string(R.t.jmtcGA),
                            children: (0, A.jsx)(sr.TrashIcon, {
                                size: "md",
                                color: n2.A.unsafe_rawColors.RED_400.css,
                                className: aE.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var aT = n(617617);
n(980504);
var af = n(806050);
function aI(e) {
    return (0, E.bG)([al.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return al.A.getSound("0" === t ? "0" : t, n);
    });
}
function a_(e) {
    let { guildId: t } = e,
        n = (0, E.bG)([aT.A], () => aT.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aI(n);
    if (null == n || null == i) return null;
    let { emojiId: s, emojiName: l } = i,
        r = null != s || null != l;
    return (0, A.jsxs)("div", {
        className: af.Io,
        children: [
            r
                ? (0, A.jsx)(tR.A, { emojiId: s, emojiName: l, className: af.nW })
                : (0, A.jsx)(at.H, { size: "md", color: "currentColor", className: af.nW }),
            (0, A.jsx)(H.E, { className: af.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aN = (0, d.E2)(c.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, ek.Ay)(),
            [t, n] = h.useState("0"),
            i = (0, aa.mz)(t),
            s = aI(i),
            l = i?.type === aa.PP.GLOBAL,
            r = (0, E.bG)([al.A], () => al.A.hasFetchedAllSounds()) && null != i && null == s;
        (h.useEffect(() => {
            r && (0, ar.ND)({ location: e });
        }, [r, e]),
            h.useEffect(() => {
                (0, as.E7)();
            }, []));
        let a = h.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, A.jsx)(a_, { guildId: e.value }) : null;
        }, []);
        return (0, A.jsxs)(n5.n, {
            label: R.intl.string(R.t.nzUc3B),
            description: R.intl.format(R.t.u9RWmv, { helpdeskArticle: eT.A.getArticleURL(S.MVz.SOUNDBOARD) }),
            children: [
                (0, A.jsx)(an.A, {
                    guildId: t,
                    className: af.Dt,
                    globalOption: { label: R.intl.string(R.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, A.jsxs)(ai.A, {
                    title: R.intl.format(R.t.I2TsYN, {
                        nitroWheelHook: () => (0, A.jsx)(r9.t, { size: "md", color: "currentColor", className: af.ax }),
                    }),
                    children: [
                        (0, A.jsx)(ap, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, ar.Dv)(t, e) : (0, ar.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, A.jsx)(ae.p, {
                                className: af.lm,
                                messageType: ae.Y.WARNING,
                                children: R.intl.string(R.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aC = n(824744);
let ab = (0, d.sN)(c.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => R.intl.string(R.t.kbFsAD),
    useSubtitle: () => R.intl.format(R.t.BPbGq7, { helpCenterArticle: eT.A.getArticleURL(S.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tM.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aC.w)(e);
        (0, as.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, ar.wH)();
        return (0, aC.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var ay = n(864145);
let av = (0, d.sN)(c.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t["2JbvKw"]),
        useSubtitle: () => R.intl.string(R.t.INenzY),
        setValue: function (e) {
            let t = (0, aC.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, aC.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, ay.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aj = (0, d.zZ)(c.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ABjMWI),
        buildLayout: () => [ab, av, aN],
    });
var aO = n(803224),
    aL = n(552122);
let aR = (0, d.E2)(c.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [R.intl.string(R.t.fgSHf8)],
        usePredicate: () => null != aL.A.useHolidaySoundpack(),
        Component: () =>
            (0, A.jsx)(H.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: R.intl.format(R.t.Eup6Wv, {
                    onClick: () => (0, no.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aD = (0, d.AK)(c.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.eyGEE4),
        useSearchTerms: () => [R.intl.string(R.t.eyGEE4)],
        destinationKey: c.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aP = (0, d.gN)(c.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aD] });
var aG = n(264686);
let aM = (0, ex.D)(() => ({ currentPlayingSound: null }));
function aU() {
    let e = aM.getField("currentPlayingSound");
    (e?.stop(), aM.setState({ currentPlayingSound: null }));
}
function aV(e) {
    let t = aM.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ie.Ak)(e);
    aM.setState({ currentPlayingSound: n });
}
function ak(e) {
    return (0, d.zD)(`${c.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => aV(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, E.bG)([aO.A], () => aO.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aO.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aG.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, E.bG)([aO.A], () => aO.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aw = [
        { useTitle: () => R.intl.string(R.t.hK51Yg), sound: "deafen" },
        { useTitle: () => R.intl.string(R.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => R.intl.string(R.t.w4m945), sound: "mute" },
        { useTitle: () => R.intl.string(R.t.YqAjXy), sound: "unmute" },
        { useTitle: () => R.intl.string(R.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => R.intl.string(R.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => R.intl.string(R.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => R.intl.string(R.t.x98vQq),
            useSearchTerms: () => [R.intl.string(R.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => R.intl.string(R.t["1HjRqC"]),
            useSearchTerms: () => [R.intl.string(R.t.Q8gkVL)],
            sound: "ptt_stop",
        },
        { useTitle: () => R.intl.string(R.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => R.intl.string(R.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => R.intl.string(R.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => R.intl.string(R.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => R.intl.string(R.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => R.intl.string(R.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => R.intl.string(R.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => R.intl.string(R.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => R.intl.string(R.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => R.intl.string(R.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => R.intl.string(R.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => R.intl.string(R.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => R.intl.string(R.t.CP3DC3), sound: "reconnect" },
    ],
    aF = (0, d.D1)(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? R.intl.formatToPlainString(R.t["0JYT98"], { count: t })
                : R.intl.formatToPlainString(R.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tp(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aU();
            };
        },
        buildLayout: () => aw.map((e) => ak(e)),
    }),
    aB = (0, d.zZ)(c.X.SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, E.bG)([aO.A], () => aO.A.getDisableAllSounds());
            return h.useMemo(() => {
                if (e)
                    return {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: R.intl.format(R.t.fRvixS, {
                            onClick: () => (0, no.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aF, aR, aP],
    }),
    az = (0, d.zD)(c.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => R.intl.string(R.t.e3Zz3F),
        useSubtitle: () => R.intl.string(R.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            ((0, rs.A)("stream_previews_disabled", !e, L.uh.getSetting(), [tM.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e));
        },
    }),
    aX = (0, d.zD)(c.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => R.intl.string(R.t.GmWk2E),
        useSearchTerms: () => [R.intl.string(R.t["Fj/xn1"])],
        useSubtitle: () => R.intl.string(R.t["Fj/xn1"]),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getVideoHook());
        },
        setValue: lY.A.setVideoHook,
        usePredicate: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.supportsVideoHook());
        },
    }),
    aY = (0, d.zD)(c.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => R.intl.string(R.t["4I0qzZ"]),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getExperimentalSoundshare());
        },
        setValue: lY.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, E.bG)([i8.Ay], () => {
                let e = i8.Ay.supportsExperimentalSoundshare(),
                    t = i8.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    aH = (0, d.zD)(c.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => R.intl.string(R.t["/jwMtn"]),
        useSubtitle: () => R.intl.string(R.t.zlA23F),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lY.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i8.Ay.supports(sz.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    aK = (0, d.sN)(c.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => R.intl.string(R.t.fhEzfj),
        setValue: function (e) {
            let t = [tM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lY.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i8.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, E.bG)([i8.Ay], () => i8.Ay.getSidechainCompression());
            return i8.Ay.supports(sz.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    aW = (0, d.zD)(c.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => R.intl.string(R.t.lt8rRx),
        useSubtitle: () => R.intl.string(R.t.ie1mgY),
        useValue: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nS.cX)() && e
                ? (0, n3.A)({
                      title: R.intl.string(R.t["9jf31O"]),
                      subtitle: R.intl.string(R.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (lY.A.setUseSystemScreensharePicker(e), nT.A.app.relaunch());
                      },
                      confirmText: R.intl.string(R.t.BddRzS),
                  })
                : lY.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, E.bG)([i8.Ay], () => i8.Ay.supportsSystemScreensharePicker() && (0, nS.cX)());
        },
    }),
    aZ = (0, d.bd)(c.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t.qrMyvm) : R.intl.string(R.t.LEtTNl)),
        useCollapsedSubtitle: () => tp(c.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aH, aK, aW, aY, aX],
    }),
    aq = (0, d.zZ)(c.X.STREAMING_CATEGORY, { useTitle: () => R.intl.string(R.t.KDdjou), buildLayout: () => [az, aZ] });
var aQ = n(106713);
let aJ = (0, d.E2)(c.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aQ.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, A.jsx)(lM.U, {
                label: R.intl.string(R.t.UTM8VP),
                deviceType: sz.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a$ = (0, d.E2)(c.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aQ.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, A.jsx)(lM.U, {
                label: R.intl.string(R.t.xuYQ0n),
                deviceType: sz.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    a0 = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [aJ, a$] }),
    a1 = (0, d.sN)(c.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i8.Ay.getInputVolume();
            return (0, aC.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tM.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aC.w)(e);
            lY.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    a2 = (0, d.sN)(c.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i8.Ay.getOutputVolume();
            return (0, aC.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tM.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aC.w)(e);
            lY.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    a3 = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [a1, a2] });
var a5 = n(702841),
    a4 = n(152567),
    a6 = n(804037);
let a8 = `${eT.A.getArticleURL(S.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    a7 = (0, d.E2)(c.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH)],
        usePredicate: function () {
            return (0, a5.bG)([i8.Ay], () => i8.Ay.supports(sz.O5.LOOPBACK));
        },
        Component: function () {
            return (0, a5.bG)([i8.Ay], () => i8.Ay.supports(sz.O5.LOOPBACK))
                ? (0, A.jsx)(a4.A, {
                      size: "md",
                      notchBackground: a4.V.GRAY,
                      captionVoice: R.intl.string(R.t.bp3JOV),
                      captionNoVoice: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t.bgn75v),
                              }),
                              R.intl.string(R.t["MA+OZh"]),
                              (0, A.jsx)(na.Anchor, {
                                  className: a6.X,
                                  href: eT.A.getArticleURL(S.MVz.NO_INPUT_DETECTED),
                                  children: R.intl.string(R.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: R.intl.format(R.t["V+B3FH"], { guideURL: a8 }),
                      buttonTest: R.intl.string(R.t.gyljWE),
                      buttonStop: R.intl.string(R.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    a9 = e2.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function oe(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, A.jsxs)(X.B, {
        children: [
            n && (0, A.jsx)(sn, { sourcePage: "voice" }),
            t && (0, A.jsx)(s3.A, { look: s3.k.WARNING, children: R.intl.string(R.t.Ioz3gx) }),
        ],
    });
}
let ot = (0, d.zZ)(c.X.VOICE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.K3lovD),
        useSearchTerms: () => [
            R.intl.string(R.t.hHMYbb),
            R.intl.string(R.t.nuFtHH),
            R.intl.string(R.t.dl18zb),
            R.intl.string(R.t["3182VD"]),
            R.intl.string(R.t["DGq/PR"]),
            R.intl.string(R.t.eATD2B),
            R.intl.string(R.t.Rtsr6w),
            R.intl.string(R.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = st("voice"),
                t = (0, lU.x5)(sz.oh.AUDIO_INPUT),
                n = (0, lU.x5)(sz.oh.AUDIO_OUTPUT),
                i = h.useMemo(() => {
                    let e = a9.some((e) => t?.hardwareId?.startsWith(e)),
                        i = a9.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return h.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, A.jsx)(oe, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [a0, a3, a7],
    }),
    on = (0, d.t_)(c.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        buildLayout: () => [ot, r7, lX, aq, aB, aj, rE, ru],
    }),
    oi = (0, d.i4)(c.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        usePredicate: () => i8.Ay.isSupported(),
        icon: lb.MicrophoneIcon,
        useMenu: ly.A,
        buildLayout: () => [on],
    }),
    os = (0, d.WI)(c.X.APP_SECTION, {
        useTitle: () => R.intl.string(R.t.gcyH1J),
        buildLayout: () => [oi, nq, e6, iY, lC, n0],
    });
var ol = n(360669),
    or = n(974544),
    oa = n(423764),
    oo = n(289873),
    ou = n(132500),
    od = n(465323),
    oc = n(37766),
    og = n(194261),
    om = n(391048),
    oA = n(277984),
    oh = n(99696),
    oE = n(202613),
    oS = n(615405),
    ox = n(83617),
    op = n(935208),
    oT = n(607399),
    of = n(993077),
    oI = n(150934),
    o_ = n(256006),
    oN = n(198970),
    oC = n(71532);
let ob = /[^0-9/]/g,
    oy = /[^0-9]/g;
class ov extends h.PureComponent {
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
                ((i = (n = e.replace(ob, "").split("/"))[0]),
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
            ? (u = u.replace(oy, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, A.jsx)(sA.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var oj = n(832208),
    oO = n(782328);
let oL = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tY.Ld)(),
                        title: () => R.intl.string(R.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => R.intl.string(R.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => oO.ep,
                        renderInput: (e) => (0, A.jsx)(ov, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oR = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: s } = e,
            [l, r] = h.useState(!1),
            [a, o] = h.useState(null),
            [u, d] = h.useState(i);
        return (
            h.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, A.jsx)(oj.A, {
                className: n,
                form: oL,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    (l || "" === e || r(!0),
                        (l && "" === e) || !(0, oC.So)(e) ? o(R.intl.string(R.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oD = n(219887),
    oP = n(292856);
let oG = "isDefault";
class oM extends h.PureComponent {
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
            expiresMonth: t instanceof oE.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oE.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        te.h.wait(() => {
            ((0, oA.ey)(), (0, oA.tc)());
        });
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
                ? (0, A.jsx)("div", {
                      className: oP.zc,
                      children: (0, A.jsx)(iW.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, A.jsx)("div", {
                  className: oP.zc,
                  children: (0, A.jsx)(iW.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, o_.g)(n);
        return (0, A.jsxs)("div", {
            className: oP.yV,
            children: [
                (0, A.jsx)(H.E, {
                    className: oP.bV,
                    variant: "text-sm/normal",
                    children: R.intl.string(R.t["50Auo2"]),
                }),
                (0, A.jsx)(oN.Ay, {
                    ...e,
                    mode: oN.Ay.Modes.EDIT,
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
        return (0, A.jsxs)("div", {
            className: oP.yV,
            children: [
                (0, A.jsx)(H.E, { className: oP.bV, variant: "text-sm/normal", children: R.intl.string(R.t.Fo2YP7) }),
                (0, A.jsx)(oR, {
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
        return (0, A.jsx)("div", {
            className: oP.AU,
            children: (0, A.jsxs)(X.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, A.jsx)(lQ.e, {
                        children: (0, A.jsxs)("div", {
                            className: oP.lH,
                            children: [
                                n
                                    ? (0, A.jsx)(sa.m, {
                                          text: R.intl.string(R.t["v6/z28"]),
                                          children: (0, A.jsx)("div", { "aria-hidden": !0, className: oP.dm }),
                                      })
                                    : null,
                                (0, A.jsx)(_.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oT.Fr ? "sm" : "md",
                                    text: oT.Fr ? R.intl.string(R.t.oyYWHE) : R.intl.string(R.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, A.jsxs)(lQ.e, {
                        children: [
                            (0, A.jsx)(_.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oT.Fr ? "sm" : "md",
                                text: R.intl.string(R.t["ETE/oC"]),
                            }),
                            (0, A.jsx)(_.$, {
                                loading: e,
                                disabled: !i || t || !s,
                                type: "submit",
                                variant: "active",
                                size: oT.Fr ? "sm" : "md",
                                text: R.intl.string(R.t["R3BPH+"]),
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
            r = e instanceof oE.SJ;
        return (0, A.jsx)(of.Z, {
            editable: !0,
            className: ic()(oP.Nr, i),
            children: (0, A.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, A.jsxs)("div", {
                        className: oP.__invalid_paymentSection,
                        children: [
                            (0, A.jsx)(oD.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, A.jsx)("div", { className: oP.Um, children: R.intl.string(R.t["3R0U0b"]) })
                                : null,
                            (0, A.jsx)("div", {
                                className: oP.Sv,
                                children: r
                                    ? R.intl.format(R.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : R.intl.string(R.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, A.jsx)("div", {
                        className: oP.D5,
                        children: (0, A.jsx)(oI.S, {
                            value: oG,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, oG),
                            label: R.intl.string(R.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, A.jsx)(si.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let oU = E.Ay.connectStores([oS.A], () => ({ updateError: oS.A.editSourceError, removeError: oS.A.removeSourceError }))(
    oM,
);
var oV = n(986485),
    ok = n(849405),
    ow = n(329693);
function oF() {
    (0, oh.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, ou.A)() });
}
class oB extends h.PureComponent {
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
            ? (0, A.jsx)(oU, {
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
            : (0, A.jsxs)(A.Fragment, {
                  children: [
                      i ? null : (0, A.jsx)(si.c, { className: ow.__invalid_sourceDivider }),
                      (0, A.jsxs)("div", {
                          className: ow.Yb,
                          children: [
                              (0, A.jsx)(oD.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, A.jsx)(_.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: R.intl.string(R.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let oz = h.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: s, onRedeemClick: l } = e,
        [r, a] = h.useState(null),
        o = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, E.bG)([oS.A], () => oS.A.ipCountryCode),
        d = h.useMemo(() => (0, od.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        h.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oA.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, A.jsxs)(A.Fragment, {
            children: [
                n ? null : (0, A.jsx)(si.c, { className: ow.__invalid_sourceDivider }),
                (0, A.jsxs)("div", {
                    className: ow.Yb,
                    children: [
                        void 0 !== t
                            ? (0, A.jsx)(oD.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, A.jsxs)(sx.A, {
                                  align: sx.A.Align.CENTER,
                                  children: [
                                      (0, A.jsx)(oc._, { size: "lg" }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/medium",
                                          className: ok.Wi,
                                          children: R.intl.string(oV.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, A.jsxs)("div", {
                            className: ow.zy,
                            children: [
                                (0, A.jsx)("div", {
                                    className: ow.Tq,
                                    children:
                                        null == r
                                            ? (0, A.jsx)(oo.y, { type: oo.y.Type.SPINNING_CIRCLE })
                                            : (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, od.$g)(e ?? 0, n, s, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${String(n).toUpperCase()} ${i}`;
                                                  })(),
                                              }),
                                }),
                                (0, A.jsx)(_.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: R.intl.string(oV.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class oX extends h.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oA.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oA.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oA.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, ox.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, sm.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, A.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, om.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, A.jsxs)("div", {
            className: ow.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, A.jsxs)("div", {
                          className: ow.z8,
                          children: [
                              (0, A.jsx)(H.E, { variant: "text-sm/normal", children: R.intl.string(R.t.aRHpAB) }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: ow.Sv,
                                  children: R.intl.string(R.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, A.jsx)(_.$, { onClick: this.handleAddPaymentMethod, text: R.intl.string(R.t.CpOiEO) }),
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
            u = B()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : op.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oE.LQ)),
            c = u.filter((e) => e instanceof oE.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            h = d.map((e, t) =>
                (0, A.jsx)(
                    oB,
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
                          (0, A.jsx)(
                              oz,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: oF,
                              },
                              e.id,
                          ),
                      )
                    : (0, A.jsx)(oz, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: oF,
                      })),
            (0, A.jsxs)(A.Fragment, {
                children: [
                    t
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsxs)(p.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, A.jsx)(og.LockIcon, { size: "sm", className: ow.hz }),
                                          " ",
                                          R.intl.string(R.t.W26xGQ),
                                      ],
                                  }),
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: R.intl.string(R.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    h,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, A.jsx)(si.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var oY = n(459357),
    oH = n(295405),
    oK = n(166403),
    oW = n(773669),
    oZ = n(943009);
function oq() {
    let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, oa.Gw)(e.country) };
}
let oQ = (0, d.E2)(c.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, E.bG)([oS.A], () => oS.A.isSyncing),
                i = (0, E.bG)([oH.A], () => oH.A.paymentSources),
                s = (0, E.bG)([oH.A], () => oH.A.defaultPaymentSourceId),
                l = (0, E.bG)([oW.default], () => oW.default.locale),
                r = (0, E.bG)([oK.A], () => oK.A.getPremiumTypeSubscription()),
                a = (0, E.bG)([oS.A], () => oS.A.isRemovingPaymentSource),
                o = (0, E.bG)([oS.A], () => oS.A.isUpdatingPaymentSource),
                { enabled: u } = (0, oY.c)({ location: "UserSettingsBilling" });
            return (h.useEffect(() => {
                (oA.$o(), oA.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, A.jsx)("div", { className: oZ.o, children: (0, A.jsx)(oo.y, {}) })
                : (0, A.jsx)(oX, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== S.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.W26xGQ), R.intl.string(R.t["3pIjBH"])],
    }),
    oJ = (0, d.zZ)(c.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.W26xGQ),
        useSubtitle: () => {
            let e = oq();
            return null != e ? R.intl.format(R.t.e2t1G5, { country: e.countryName }) : R.intl.string(R.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == oq()
                ? null
                : {
                      type: m.p3.INFO_POPOVER,
                      ariaLabel: R.intl.string(R.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: R.intl.string(R.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: R.intl.string(R.t.PuB1W7),
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
        buildLayout: () => [oQ],
    });
var o$ = n(549363),
    o0 = n(545075);
let o1 = (0, d.E2)(c.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, E.bG)([oW.default], () => oW.default.locale);
            return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(o0.kb, {}), (0, A.jsx)(o$.A, { locale: e })] });
        },
        useSearchTerms: () => [R.intl.string(R.t.obLrcK)],
    }),
    o2 = (0, d.zZ)(c.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.obLrcK),
        buildLayout: () => [o1],
    }),
    o3 = (0, d.t_)(c.X.BILLING_PANEL, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [oJ, o2],
        useObscuredNotice: or.L,
    }),
    o5 = (0, d.i4)(c.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        icon: ol.B,
        buildLayout: () => [o3],
    });
var o4 = n(70283),
    o6 = n(597770),
    o8 = n(682618),
    o7 = n(859492),
    o9 = n(962644),
    ue = n(35587),
    ut = n(86379);
let un = (0, d.E2)(c.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: o0.uK,
        usePredicate: () => (0, ut.Hp)(),
        useSearchTerms: () => [R.intl.string(R.t.vwMEHS)],
    }),
    ui = (0, d.zZ)(c.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [un] });
var us = n(982240),
    ul = n(5755),
    ur = n(914410),
    ua = n(556427),
    uo = n(573343);
let uu = "UserSettingsGiftingBadgeProgress";
function ud(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, A.jsxs)("div", {
        className: ic()(uo.fO, { [uo.bF]: i }),
        children: [
            null != n && (0, A.jsx)("img", { src: n, alt: "", className: uo.si }),
            (0, A.jsxs)("div", {
                className: uo.tc,
                children: [
                    (0, A.jsx)(H.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, A.jsx)(H.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: R.intl.format(ua.default.qvx9E4, { count: (0, us.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function uc(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, o7.b9)(uu);
    return (0, A.jsx)("div", {
        className: uo.dw,
        children: t.map((e) => (0, A.jsx)(ud, { tier: e, iconUrl: (0, o7.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function ug(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, ek.Ay)(tM.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, ul.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, A.jsx)("div", {
        className: uo.NG,
        children: (0, A.jsx)(_.$, {
            variant: "primary",
            icon: o6.GiftIcon,
            text: R.intl.string(ua.default.DZnomS),
            onClick: s,
        }),
    });
}
function um(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, us.rL)(i),
        a = (0, us.rL)(s),
        o = (0, o7.GZ)(n, i, s),
        u = (0, o7.b9)(uu),
        d = (0, o7.Se)(i, u),
        c = (0, o7.Se)(s, u);
    return (
        (t =
            null != s
                ? R.intl.formatToPlainString(ua.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : R.intl.formatToPlainString(ua.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, A.jsxs)("div", {
            className: uo.mY,
            children: [
                null != d &&
                    (0, A.jsx)("div", {
                        className: uo.fC,
                        children: (0, A.jsx)("img", { src: d, alt: "", className: uo.qS }),
                    }),
                (0, A.jsxs)("div", {
                    className: uo.Qs,
                    children: [
                        (0, A.jsx)(H.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, A.jsx)(ur.Ay, { variant: ur.qP.BLUE, weight: ur.fh.MEDIUM, progress: o }),
                        (0, A.jsx)(H.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: uo.qg,
                            children: R.intl.format(ua.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, A.jsx)("div", {
                        className: uo.fC,
                        children: (0, A.jsx)("img", { src: c, alt: "", className: uo.qS }),
                    }),
            ],
        })
    );
}
function uA(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, E.cf)([us.Ay], () => ({
            badgeProgress: us.Ay.getSingleRequirementProgress(o4.$.GIFTING)?.current ?? 0,
            currentTier: us.Ay.getCurrentTier(o4.$.GIFTING),
            nextTier: us.Ay.getNextTier(o4.$.GIFTING),
            giftsRemaining: us.Ay.getRemainingToNextTier(o4.$.GIFTING),
            tiers: us.Ay.getBadgeById(o4.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, A.jsxs)("div", {
              className: uo.kL,
              children: [
                  (0, A.jsxs)("div", {
                      className: uo.Jo,
                      children: [
                          n > 0 &&
                              (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsx)(um, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, A.jsx)("div", { className: uo.yF }),
                                  ],
                              }),
                          (0, A.jsx)(uc, { tiers: r, currentTier: i }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: uo.PJ,
                              children: R.intl.string(ua.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, A.jsx)(ug, { analyticsLocation: t, location: uu }),
              ],
          });
}
let uh = (0, d.zZ)(c.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => R.intl.string(ua.default.sFokBp),
        buildLayout: () => [uE],
        usePredicate: () => {
            let e = (0, o7.F5)("gift_inventory"),
                t = (0, E.bG)([us.Ay], () => us.Ay.getBadgeById(o4.$.GIFTING));
            return e && null != t;
        },
    }),
    uE = (0, d.E2)(c.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [R.intl.string(ua.default.sFokBp)],
        Component: () => (0, A.jsx)(uA, {}),
    });
var uS = n(264779),
    ux = n(412260),
    up = n(555393),
    uT = n(725807),
    uf = n(212168),
    uI = n(469778),
    u_ = n(45938),
    uN = n(109802),
    uC = n(869038),
    ub = n(380856);
function uy(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, A.jsxs)(sx.A, {
        className: ic()(ub.wx, n),
        align: sx.A.Align.CENTER,
        children: [
            (0, A.jsx)("div", { className: ub.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function uv(e) {
    let { children: t, className: n } = e;
    return (0, A.jsx)("div", { className: ic()(ub.rf, n), children: t });
}
class uj extends h.PureComponent {
    static Header = uy;
    static Body = uv;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, A.jsx)("div", { className: ic()(ub.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var uO = n(180522),
    uL = n(871123),
    uR = n(366523),
    uD = n(280450),
    uP = n(30793),
    uG = n(97352),
    uM = n(67480),
    uU = n(147925),
    uV = n(957565),
    uk = n(615396),
    uw = n(274904);
class uF extends h.PureComponent {
    _copyModeTimeout = new rM.Ep();
    state = { copyMode: uN.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case uN.q.SUCCESS:
                return R.intl.string(R.t.XVvPjU);
            case uN.q.ERROR:
                return R.intl.string(R.t.i4GM3L);
            default:
                return R.intl.string(R.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        uC.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, u_.AK)(t, n),
            (0, uV.C)(
                e,
                () => this.setState({ copyMode: uN.q.SUCCESS }),
                () => this.setState({ copyMode: uN.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: uN.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, A.jsxs)(sx.A, {
            direction: sx.A.Direction.VERTICAL,
            className: uw.Gj,
            children: [
                (0, A.jsx)(uN.e, {
                    className: uw.ph,
                    value: (0, u_.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uV.p5,
                    hideMessage: e ? R.intl.string(R.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: lZ.XD.BRAND,
                    buttonLook: lZ.pR.FILLED,
                }),
                (0, A.jsxs)("div", {
                    className: uw.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, A.jsxs)(h.Fragment, {
                                  children: [
                                      R.intl.format(R.t.ltVZcJ, { hours: t.expiresAt.diff(im()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, A.jsx)(n4.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: R.intl.string(R.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class uB extends h.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await uC.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && uC.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, uL.bF)(e)
            ? (0, A.jsx)(uR.e, { shape: "square", sku: e, containerClassName: uw.ez })
            : null != t
              ? (0, A.jsx)(uO.A, { giftStyle: t, className: uw.ez, shouldAnimate: this.state.isHovered })
              : (0, A.jsx)(i6.A, { game: n, size: i6.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, uL.bF)(e)
            ? (0, A.jsxs)("div", {
                  className: ic()(uw.Oc, uw.ic),
                  children: [
                      (0, A.jsx)(i6.A, { game: n, size: i6.M.XSMALL, skuId: e.id, className: uw._u }),
                      R.intl.format(R.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, A.jsx)("div", { className: uw.Oc, children: R.intl.format(R.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tZ.FB
                    ? R.intl.string(R.t.odsU6W)
                    : i === tZ.Bu && null != n
                      ? R.intl.formatToPlainString(n.interval === tZ.WT.MONTH ? R.t.uZjpiJ : R.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : R.intl.formatToPlainString(n.interval === tZ.WT.MONTH ? R.t.rCJvqo : R.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, A.jsx)("div", { className: uw.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, A.jsxs)(sx.A, {
            justify: sx.A.Justify.BETWEEN,
            align: sx.A.Align.CENTER,
            className: uw.pe,
            children: [
                (0, A.jsx)(H.E, { variant: "text-md/normal", children: R.intl.string(R.t.lELyPj) }),
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t.Q3Qguo),
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
        return (0, A.jsxs)(uj, {
            className: i,
            children: [
                (0, A.jsx)(n4.D, {
                    onClick: this.handleToggleOpen,
                    className: uw.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, A.jsx)(uj.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, A.jsxs)("div", {
                            className: uw.MY,
                            children: [
                                (0, A.jsxs)(sx.A, {
                                    align: sx.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, A.jsxs)("div", {
                                            className: uw.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, A.jsx)(uU.A, {
                                    direction: a ? uU.A.Directions.UP : uU.A.Directions.DOWN,
                                    className: uw.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, A.jsx)(uj.Body, {
                          children: l
                              ? (0, A.jsx)(oo.y, { className: uw.u1 })
                              : (0, A.jsxs)(h.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, A.jsx)(uF, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let uz = E.Ay.connectStores([uM.A, tl.A, uP.A, i0.A, uG.A, uD.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = uM.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = uP.A.getForGifterSKUAndPlan(uD.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: tl.A.enabled,
        isFetching: uP.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: uP.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: i0.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, uk.c9)(n) : null,
        giftCodes: l,
    };
})(uB);
var uX = n(725570),
    uY = n(736653),
    uH = n(46054);
let uK = im().duration(30, "days");
var uW = n(416052),
    uZ = n(878309);
function uq(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, A.jsx)(sg.a, {
        title: "",
        size: "md",
        input: (0, A.jsx)("div", { className: uZ.aR }),
        onClose: async () => await t(),
        actions: [{ text: R.intl.string(R.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, A.jsxs)("div", {
            className: uZ.t4,
            children: [
                (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t.iufib1) }),
                (0, A.jsx)(H.E, { variant: "text-md/normal", className: uZ.G3, children: R.intl.string(R.t.eAn6z2) }),
            ],
        }),
    });
}
let uQ = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = h.useState(null),
        o = (0, tY.GV)(),
        { analyticsLocations: u } = (0, ek.Ay)(tM.A.USER_SETTINGS_GIFT_INVENTORY);
    return (h.useEffect(() => {
        null == i &&
            (0, uS.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, s.id, s.outboundTitle, s.partnerId, n, u]),
    null != r)
        ? (0, A.jsx)(uq, { onClose: t, transitionState: l })
        : null == i
          ? (0, A.jsx)(oo.y, { className: uZ.Lq })
          : (0, A.jsx)(sg.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, A.jsxs)("div", {
                    className: uZ.N1,
                    children: [
                        (0, A.jsx)("div", { className: uZ.Qw }),
                        (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t["23BfZh"]) }),
                        (0, A.jsx)(H.E, {
                            variant: "text-md/normal",
                            className: uZ.G3,
                            children: s.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: R.intl.string(R.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: R.intl.string(R.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, uS.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, A.jsxs)("div", {
                    children: [
                        (0, A.jsx)(si.c, { className: uZ.M5 }),
                        (0, A.jsx)(t2.D, {
                            label: R.intl.string(R.t.s9LFQh),
                            helperText: R.intl.string(R.t["F+nFTZ"]),
                            children: (0, A.jsx)(uW.A, {
                                value: i,
                                buttonColor: lZ.$n.Colors.BRAND,
                                buttonLook: lZ.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uJ = n(707554),
    u$ = n(339048),
    u0 = n(136380);
function u1() {
    let e = (0, E.yK)([uI.A], () => uI.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = B().groupBy(e, (e) => (0, u_.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = h.useState(!1);
    if (
        (h.useEffect(() => {
            te.h.wait(() => {
                (0, u$.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, A.jsx)(oo.y, { className: u0.Lq });
    if (0 === Object.keys(t).length)
        return (0, A.jsxs)("div", {
            className: u0.p$,
            children: [
                (0, A.jsx)("div", { className: u0.QT }),
                (0, A.jsx)(uJ.H, { className: u0.ks, children: R.intl.string(R.t.B1qgZn) }),
                (0, A.jsx)("p", {
                    className: u0.WO,
                    children: R.intl.format(R.t.HezvJ8, {
                        onClick: function () {
                            (0, no.openUserSettings)(c.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = B()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: s } = (0, u_.X6)(e);
            return (0, A.jsx)(uz, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, A.jsx)(X.B, { gap: "lg", children: s });
}
function u2(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = h.useState(!1),
        [r, a] = h.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, uY.Ay)(),
        d = (0, uS.WD)(n.id, u),
        c = null != i,
        g = h.useMemo(
            () =>
                (0, iA.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? im()(n.outboundRedemptionEndDate)
                            : im()(n.endDate).add(uK)
                        : im()(n.endDate),
                    "LL",
                ),
            [n, c],
        );
    c && s
        ? (t = R.intl.format(R.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !s
          ? (t = R.intl.format(R.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && s
            ? (t = R.intl.format(R.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || s || (t = R.intl.format(R.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? R.intl.string(R.t["2cHUti"]) : R.intl.string(R.t.O13yhz),
        E = (0, up.N)()?.isEligible === !0,
        S = h.useCallback(() => a(!1), []),
        { outboundTitle: x, outboundTermsAndConditions: T } = n;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)("div", {
                className: u0.AX,
                children: [
                    (0, A.jsxs)("div", {
                        className: u0.Pg,
                        children: [
                            (0, A.jsxs)("div", {
                                className: u0.At,
                                children: [
                                    (0, A.jsx)("div", {
                                        className: u0.$G,
                                        children: (0, A.jsx)("img", { alt: "", src: d, className: u0.IJ }),
                                    }),
                                    (0, A.jsxs)("div", {
                                        children: [
                                            (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: x }),
                                            (0, A.jsx)(H.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || E) && (0, A.jsx)(_.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    s &&
                        (0, A.jsx)(H.E, {
                            className: u0.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: uH.A.parse(T, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, A.jsx)(uX.aF, {
                    renderModal: (e) =>
                        (0, A.jsx)(uQ, {
                            ...e,
                            onClose: S,
                            onClaim: o9.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: S,
                }),
        ],
    });
}
function u3(e) {
    let { redesign: t = !1 } = e,
        n = (0, E.yK)([uI.A], () => uI.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, up.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, ue.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tZ.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tZ.Bu && !e.consumed) ?? [],
        [u, d] = B().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tZ.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        g =
            t || !c
                ? null
                : (0, A.jsxs)("div", {
                      className: u0.N1,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.wFsj3B) }),
                          (0, A.jsx)(si.c, { className: u0.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, A.jsxs)("div", {
                      className: u0.uo,
                      children: [
                          (0, A.jsx)(r9.t, {
                              size: "md",
                              color: n2.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: u0.PC,
                          }),
                          (0, A.jsx)(H.E, {
                              variant: "text-md/normal",
                              className: u0.Qw,
                              children: R.intl.format(R.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tB.default)(), (0, t5.pX)(S.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, A.jsx)(uT.A, {
                              showGradient: !0,
                              className: u0.aA,
                              subscriptionTier: tZ.pe.TIER_2,
                              textOptions: { textOverride: R.intl.string(R.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, A.jsxs)("div", {
        children: [
            g,
            (0, A.jsx)(uf.A, {
                className: u0.Yj,
                isShown: !1 === i && c,
                type: uf.i.PREMIUM,
                hasBackground: !0,
                children: (0, A.jsxs)("div", {
                    className: u0.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, A.jsx)(u2, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, A.jsx)(u2, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, A.jsx)(
                                  uz,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tZ.FB,
                                  },
                                  (0, u_.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, A.jsx)(
                                  uz,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tZ.Bu,
                                  },
                                  (0, u_.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, A.jsx)(
                                  uz,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tZ.Bu,
                                  },
                                  (0, u_.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let u5 = (0, d.zZ)(c.X.MY_GIFTS_CATEGORY, {
        useTitle: u6,
        buildLayout: () => [u4],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, E.cf)(
                    [ux.A],
                    () => ({
                        claimedOutboundPromotionCodes: ux.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: ux.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, ue.T1)({ includeClaimedPromotions: !0 }),
                i = (0, uS.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    u4 = (0, d.E2)(c.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [u6()],
        Component: () => (0, A.jsx)(u3, { redesign: !0 }),
    });
function u6() {
    return R.intl.string(R.t.YzjdWJ);
}
let u8 = (0, d.zZ)(c.X.PURCHASED_GIFTS_CATEGORY, { useTitle: u9, buildLayout: () => [u7] }),
    u7 = (0, d.E2)(c.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [u9()], Component: () => (0, A.jsx)(u1, {}) });
function u9() {
    return R.intl.string(R.t.FWe6CP);
}
var de = n(532446),
    dt = n(499454);
class dn extends h.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: S.ZSU.BUTTON_CTA };
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
                    (await (0, oh.Qp)(n),
                        (0, oh.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, ou.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, u_.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await uC.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (tr.default.track(S.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: S.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: S.ZSU.BUTTON_CTA,
                },
            }),
                (0, dt.h)({ processedCode: e }),
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
            r = e ? R.intl.string(R.t["hVEn/j"]) : R.intl.string(R.t.SeKIoS),
            a = e ? R.intl.string(R.t.epHMtp) : void 0;
        return (0, A.jsx)(n5.n, {
            label: e ? void 0 : R.intl.string(R.t["il+VCo"]),
            children: (0, A.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, A.jsxs)(de.M, {
                    children: [
                        (0, A.jsx)(sA.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && s ? R.intl.string(R.t.Y11a2u) : null,
                            helperText: l
                                ? R.intl.format(R.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${n}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, A.jsx)(_.$, {
                            variant: "primary",
                            text: R.intl.string(R.t.KIpp7M),
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
function di(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, oY.c)({ location: "UserSettingsBilling" }),
        i = h.useContext(tr.AnalyticsContext),
        s = (0, E.bG)([tl.A], () => tl.A.enabled);
    return (0, A.jsx)(dn, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let ds = (0, d.zZ)(c.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["il+VCo"]),
        buildLayout: () => [dl],
        usePredicate: () => !(0, ut.Hp)(),
    }),
    dl = (0, d.E2)(c.X.REDEEM_CODE_INPUT, {
        Component: () => (0, A.jsx)(di, { redesign: !0 }),
        useSearchTerms: () => [R.intl.string(R.t["jcSP+g"]), R.intl.string(R.t["il+VCo"])],
    }),
    dr = (0, d.t_)(c.X.GIFT_PANEL, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        buildLayout: () => [ds, u5, uh, u8, ui],
        initialize: () => {
            (o9.Ay.fetchClaimedOutboundPromotionCodes(), (0, o7.Ig)("gift_inventory") && (0, o8.o0)(o4.$.GIFTING));
        },
    }),
    da = (0, d.i4)(c.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        icon: o6.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, ue.IO)().length;
            return h.useMemo(() => ({ badgeType: m.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [dr],
    });
var du = n(659758),
    dd = n(740526),
    dc = n(877624),
    dg = n(269115),
    dm = n(462887),
    dA = n(73825),
    dh = n(531260),
    dE = n(160946),
    dS = n(721668),
    dx = n(224016),
    dp = n(580630),
    dT = n(526292),
    df = n(881489),
    dI = n(106512),
    d_ = n(22118),
    dN = n(103411),
    dC = n(190187),
    db = n(930861),
    dy = n(854627),
    dv = n(889227),
    dj = n(326084),
    dO = n(851746),
    dL = n(664654),
    dR = n(912140),
    dD = n(953727);
let dP = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, A.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, dD.A)({ ...s }),
            children: [
                (0, A.jsx)("circle", { r: i ?? "40%", cx: "50%", cy: "50%", className: n }),
                (0, A.jsxs)("g", {
                    transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                    children: [
                        (0, A.jsx)("path", {
                            d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                            fill: "#FF6BFA",
                            className: t,
                        }),
                        (0, A.jsx)("path", {
                            d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                            fill: "#FFDEF9",
                        }),
                        (0, A.jsx)("path", {
                            d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                            fill: "#FFB0FF",
                        }),
                    ],
                }),
            ],
        });
    },
    dG = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, uY.Ay)(),
            l = (0, dm.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, A.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, dD.A)({ ...i }),
            children: [
                (0, A.jsxs)("svg", {
                    width: "100",
                    height: "100",
                    viewBox: "0 0 114 114",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, A.jsxs)("defs", {
                            children: [
                                (0, A.jsxs)("linearGradient", {
                                    id: "purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        (0, A.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "#E2C7FA", stopOpacity: 1 },
                                        }),
                                        (0, A.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "#F3D3DE", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                                (0, A.jsxs)("linearGradient", {
                                    id: "dark-purple-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        (0, A.jsx)("stop", {
                                            offset: "0%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                        (0, A.jsx)("stop", {
                                            offset: "100%",
                                            style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, A.jsx)("ellipse", {
                            cx: "57.2768",
                            cy: "57.0796",
                            rx: "56.3726",
                            ry: "56.3726",
                            fill: null != n ? n : r,
                            fillOpacity: null != t ? t : l ? 0.5 : 0.2,
                        }),
                        (0, A.jsxs)("g", {
                            width: "65",
                            transform: "translate(50, 50) scale(.7) translate(-10, -39)",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                (0, A.jsx)("path", {
                                    d: "M42.0084 14.8866L33.7687 17.7832C33.3446 17.9281 32.9766 18.2015 32.7161 18.565C32.4555 18.9285 32.3154 19.3641 32.3154 19.8109C32.3154 20.2576 32.4555 20.6932 32.7161 21.0567C32.9766 21.4203 33.3446 21.6936 33.7687 21.8385L42.0084 24.7351C42.3147 24.8404 42.593 25.0138 42.8221 25.2422C43.0512 25.4705 43.2252 25.7478 43.3309 26.053L46.2373 34.2649C46.3827 34.6875 46.657 35.0543 47.0217 35.3139C47.3865 35.5736 47.8236 35.7132 48.2718 35.7132C48.7201 35.7132 49.1572 35.5736 49.522 35.3139C49.8867 35.0543 50.161 34.6875 50.3064 34.2649L53.2128 26.053C53.3204 25.7488 53.495 25.4725 53.7239 25.2444C53.9528 25.0164 54.23 24.8423 54.5353 24.7351L62.7896 21.8385C63.2136 21.6936 63.5817 21.4203 63.8422 21.0567C64.1028 20.6932 64.2428 20.2576 64.2428 19.8109C64.2428 19.3641 64.1028 18.9285 63.8422 18.565C63.5817 18.2015 63.2136 17.9281 62.7896 17.7832L54.5353 14.8866C54.2315 14.7767 53.9557 14.6018 53.7272 14.374C53.4987 14.1463 53.3231 13.8714 53.2128 13.5687L50.3064 5.34234C50.161 4.91974 49.8867 4.55297 49.522 4.2933C49.1572 4.03363 48.7201 3.89404 48.2718 3.89404C47.8236 3.89404 47.3865 4.03363 47.0217 4.2933C46.657 4.55297 46.3827 4.91974 46.2373 5.34234L43.3309 13.5687C43.2233 13.8729 43.0487 14.1492 42.8198 14.3773C42.591 14.6054 42.3137 14.7794 42.0084 14.8866Z",
                                    fill: "white",
                                    fillOpacity: l ? "0.6" : "0.4",
                                }),
                                (0, A.jsx)("path", {
                                    d: "M34.0878 3.57968L33.0393 0.634802C32.9888 0.483384 32.8917 0.351665 32.7618 0.258321C32.6319 0.164978 32.4759 0.114746 32.3158 0.114746C32.1556 0.114746 31.9996 0.164978 31.8697 0.258321C31.7398 0.351665 31.6427 0.483384 31.5922 0.634802L30.6217 3.57968C30.5838 3.68745 30.5221 3.78534 30.4411 3.86607C30.3601 3.94681 30.2619 4.00831 30.1538 4.04602L27.1555 5.02189C27.0067 5.07415 26.8777 5.17117 26.7865 5.29956C26.6953 5.42795 26.6464 5.58137 26.6464 5.73868C26.6464 5.89598 26.6953 6.04941 26.7865 6.17779C26.8777 6.30618 27.0067 6.4032 27.1555 6.45547L30.0758 7.47451C30.1839 7.51222 30.2821 7.57373 30.3631 7.65446C30.4441 7.7352 30.5059 7.83308 30.5437 7.94085L31.5575 10.8426C31.6081 10.994 31.7052 11.1257 31.835 11.219C31.9649 11.3124 32.121 11.3626 32.2811 11.3626C32.4412 11.3626 32.5973 11.3124 32.7271 11.219C32.857 11.1257 32.9541 10.994 33.0047 10.8426L34.0878 7.94085C34.1257 7.83308 34.1874 7.7352 34.2684 7.65446C34.3494 7.57373 34.4476 7.51222 34.5558 7.47451L37.476 6.45547C37.6249 6.4032 37.7538 6.30618 37.845 6.17779C37.9362 6.04941 37.9852 5.89598 37.9852 5.73868C37.9852 5.58137 37.9362 5.42795 37.845 5.29956C37.7538 5.17117 37.6249 5.07415 37.476 5.02189L34.5211 4.00284C34.4237 3.9656 34.3349 3.90883 34.2604 3.83604C34.1859 3.76326 34.1271 3.676 34.0878 3.57968Z",
                                    fill: "white",
                                    fillOpacity: "0.8",
                                }),
                            ],
                        }),
                    ],
                }),
                (0, A.jsxs)("defs", {
                    children: [
                        (0, A.jsxs)("filter", {
                            id: "filter0_d_1282_11577",
                            x: "-6.55945",
                            y: "0.382812",
                            width: "89.2926",
                            height: "70.3945",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, A.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                (0, A.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, A.jsx)("feOffset", { dy: "4" }),
                                (0, A.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                                (0, A.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
                                (0, A.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                                }),
                                (0, A.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_1282_11577",
                                }),
                                (0, A.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_1282_11577",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint2_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint1_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint1_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint2_linear_1282_11577",
                            x1: "3.44055",
                            y1: "31.5801",
                            x2: "72.7332",
                            y2: "31.5801",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_1986_8686",
                            x1: "3.44073",
                            y1: "43.8345",
                            x2: "72.7334",
                            y2: "43.8345",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_1282_11557",
                            x1: "0.904297",
                            y1: "56.5004",
                            x2: "113.649",
                            y2: "56.5004",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_684_72736",
                            x1: "0.904236",
                            y1: "57.0796",
                            x2: "113.649",
                            y2: "57.0796",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83179",
                            x1: "0.904236",
                            y1: "56.5005",
                            x2: "113.649",
                            y2: "56.5005",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "paint0_linear_1055_83268",
                            x1: "0.904236",
                            y1: "57.2461",
                            x2: "113.649",
                            y2: "57.2461",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#B473F5" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                            ],
                        }),
                    ],
                }),
                (0, A.jsxs)("g", {
                    filter: l ? void 0 : "url(#filter0_d_1282_11577)",
                    transform: "translate(50, 50) scale(.8) translate(-44, -30)",
                    children: [
                        (0, A.jsx)("path", {
                            d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                            fill: l ? "url(#paint2_linear_1986_8686)" : "url(#paint0_linear_1282_11577)",
                        }),
                        (0, A.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                            fill: l ? "url(#paint1_linear_1986_8686)" : "url(#paint1_linear_1282_11577)",
                        }),
                        (0, A.jsx)("path", {
                            d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                            fill: l ? "url(#paint0_linear_1986_8686)" : "url(#paint2_linear_1282_11577)",
                        }),
                    ],
                }),
                (0, A.jsx)("g", {
                    width: "65",
                    transform: "translate(50, 50) scale(0.81) translate(-26, -42)",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, A.jsx)("path", {
                        d: "M12.6686 60.7298L10.9101 55.7911C10.8254 55.5372 10.6626 55.3163 10.4448 55.1597C10.227 55.0032 9.96524 54.9189 9.69671 54.9189C9.42818 54.9189 9.16646 55.0032 8.94866 55.1597C8.73086 55.3163 8.56804 55.5372 8.48326 55.7911L6.85565 60.7298C6.7922 60.9105 6.6887 61.0747 6.55284 61.2101C6.41699 61.3455 6.25226 61.4487 6.07091 61.5119L1.04275 63.1485C0.793091 63.2361 0.576874 63.3988 0.423928 63.6141C0.270981 63.8294 0.188843 64.0868 0.188843 64.3506C0.188843 64.6144 0.270981 64.8717 0.423928 65.087C0.576874 65.3023 0.793091 65.465 1.04275 65.5527L5.94012 67.2616C6.12147 67.3249 6.2862 67.428 6.42205 67.5634C6.55791 67.6988 6.66141 67.863 6.72486 68.0437L8.42513 72.91C8.50991 73.1639 8.67273 73.3848 8.89053 73.5414C9.10833 73.6979 9.37005 73.7822 9.63858 73.7822C9.90711 73.7822 10.1688 73.6979 10.3866 73.5414C10.6044 73.3848 10.7672 73.1639 10.852 72.91L12.6686 68.0437C12.732 67.863 12.8355 67.6988 12.9714 67.5634C13.1072 67.428 13.2719 67.3249 13.4533 67.2616L18.3507 65.5527C18.6003 65.465 18.8165 65.3023 18.9695 65.087C19.1224 64.8717 19.2046 64.6144 19.2046 64.3506C19.2046 64.0868 19.1224 63.8294 18.9695 63.6141C18.8165 63.3988 18.6003 63.2361 18.3507 63.1485L13.3952 61.4395C13.2318 61.377 13.083 61.2818 12.958 61.1598C12.833 61.0377 12.7345 60.8914 12.6686 60.7298Z",
                        fill: "white",
                        fillOpacity: "0.8",
                    }),
                }),
            ],
        });
    };
var dM = n(387316),
    dU =
        (((i = {})[(i.NITRO_GEM = 0)] = "NITRO_GEM"),
        (i[(i.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (i[(i.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        i);
let dV = "url(#gradient)",
    dk = (e) => {
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
            [d, c] = h.useState(s);
        h.useEffect(() => {
            let e = setTimeout(() => {
                c(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let g = (0, uY.Ay)(),
            m = (0, dm.q)(g),
            E = (function (e) {
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
            S = 1 === r ? (m ? "0.3" : "0.2") : void 0,
            x =
                a ??
                (function (e, t) {
                    switch (t) {
                        case 0:
                        case 2:
                            return dV;
                        case 1:
                            return e ? "url(#gradient_nitro_logo)" : dV;
                        default:
                            return;
                    }
                })(m, r);
        return (0, A.jsxs)("div", {
            className: dM.Ap,
            children: [
                (0, A.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: dM.fB,
                    children: [
                        (0, A.jsx)("circle", {
                            className: 0 === r || 2 === r ? dM.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: l,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: E,
                            strokeOpacity: S,
                        }),
                        (0, A.jsx)("circle", {
                            stroke: x,
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
                (0, A.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, A.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, A.jsx)("stop", { offset: "0%", style: { stopColor: "#FFBDF2" } }),
                                (0, A.jsx)("stop", { offset: "100%", style: { stopColor: "#E742E1" } }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, A.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, A.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                            ],
                        }),
                        (0, A.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, A.jsx)("stop", { offset: "0%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                                (0, A.jsx)("stop", { offset: "100%", style: { stopColor: "#241731", stopOpacity: 1 } }),
                            ],
                        }),
                    ],
                }),
                (0, A.jsx)("div", { className: dM.Vw, children: n }),
            ],
        });
    };
var dw = n(104773);
function dF(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = h.useMemo(() => (0, dR.A)({ legacyAssetId: t, skuId: n, size: I._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, A.jsx)("div", {
        className: dw.Q7,
        children: (0, A.jsx)("div", {
            className: dw.Nk,
            children: null != s && (0, A.jsx)("img", { className: dw.CH, alt: i, src: s }),
        }),
    });
}
let dB = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = dU.NITRO_GEM,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: h,
            circleColor: S,
            circleStroke: x,
        } = e,
        p = (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion),
        T = t && !p;
    return (0, A.jsx)("div", {
        className: ic()(dw.G3, n),
        children: (0, A.jsx)(dk, {
            animationClassName: ic()(dw._0, { [dw.uJ]: T, [h ?? ""]: T }),
            progressCircleStroke: x,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case dU.NITRO_GEM:
                        return (0, A.jsx)(dP, {
                            className: T ? dw.Ow : void 0,
                            backgroundColor: ic()(dw.vH, s),
                            backgroundCircleSize: r,
                        });
                    case dU.NITRO_LOGO:
                        return (0, A.jsx)(dG, { circleColor: S, ellipseOpacity: m });
                    case dU.AVATAR_DECO:
                        if (null != c)
                            return (0, A.jsx)(dF, {
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
var dz = n(14313);
function dX(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, dy.A)({ userId: t?.id, size: I._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, A.jsx)(f.eu, { src: i, "aria-label": t.username, size: I._3.SIZE_32, ...s })
            : (0, A.jsx)(p.D, { variant: "heading-md/semibold", className: dz.n5, children: n });
    return (0, A.jsx)(sa.m, {
        text: R.intl.string(R.t.UnKHdo),
        shouldShow: !l,
        children: (0, A.jsx)("div", { className: dz.Lg, children: r }),
    });
}
function dY(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, A.jsxs)("div", {
        className: dz.Ip,
        children: [
            (0, A.jsx)("div", { className: dz.Ej }),
            (0, A.jsx)("div", { className: ic()({ [dz.ch]: t > n, [dz.q_]: t === n }) }),
        ],
    });
}
function dH(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, A.jsxs)("div", {
        className: dz.ZM,
        children: [
            (0, A.jsx)(dX, { userRecord: i, placement: 1 }),
            (0, A.jsx)(dY, { numSentReferrals: n, placement: 1 }),
            (0, A.jsx)(dX, { userRecord: s, placement: 2 }),
            (0, A.jsx)(dY, { numSentReferrals: n, placement: 2 }),
            (0, A.jsx)(dX, { userRecord: l, placement: 3 }),
        ],
    });
}
let dK = function () {
    let e = (0, E.bG)([dO.A], () => dO.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, dL.J)(),
        i = h.useMemo(() => t.map((e) => new dv.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === dj.aK.REDEEMED && s.redeemed++, e === dj.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === dL.Z,
        r = eT.A.getArticleURL(S.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, ek.Ay)(tM.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = h.useRef(null),
        u = (s.sent / dL.Z) * 100,
        d = (0, A.jsxs)("div", {
            className: dz.hE,
            children: [
                (0, A.jsx)(dB, { percentage: u, progressCircleVariation: dU.NITRO_LOGO, iconClassName: dz.ER }),
                (0, A.jsxs)("div", {
                    className: dz.Ns,
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-xl/extrabold",
                            className: dz.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return R.intl.string(R.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, A.jsx)(dH, { userRecords: i }),
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? R.intl.format(R.t["TYu+MH"], { helpdeskArticle: i })
                                        : R.intl.format(R.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= dL.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, A.jsx)("div", {
                            className: dz.Fb,
                            children: (0, A.jsx)(db.wL, {
                                "data-migration-pending": !0,
                                className: dz.r$,
                                color: lZ.XD.CUSTOM,
                                onClick: () =>
                                    (function (e) {
                                        let { analyticsLocations: t } = e;
                                        (tr.default.track(S.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                            location_stack: t,
                                        }),
                                            (0, sm.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("647658"),
                                                    n.e("618589"),
                                                ]).then(n.bind(n, 168457));
                                                return (n) => (0, A.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                            }));
                                    })({ analyticsLocations: a }),
                                onlyShineOnHover: !0,
                                children: (0, A.jsxs)("div", {
                                    className: dz.Zn,
                                    children: [
                                        (0, A.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: dz.QH,
                                        }),
                                        l ? R.intl.string(R.t.SY9tyI) : R.intl.string(R.t.Lm2nFc),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
        c = s.redeemed === dL.Z;
    return (0, A.jsx)(ek.f5, {
        value: a,
        children: (0, A.jsx)("div", {
            className: ic()(dz.kL, { [dz.AP]: c }),
            children: (0, A.jsx)("div", { ref: o, className: ic()(dz.d_, { [dz.kS]: c }), children: d }),
        }),
    });
};
var dW = n(194509),
    dZ = n(465794),
    dq = n(774774),
    dQ = n(156601),
    dJ = n(297346),
    d$ = n(88001),
    d0 = n(148155),
    d1 = n(487518);
let d2 = "to_premium_home_button",
    d3 = "premium home page";
function d5(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === tZ.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, dh.A)(),
        u = null != t.trialEndsAt ? im()(t.trialEndsAt).diff(im()(), "d") : 0,
        d = tZ.hd[t.planIdFromItems],
        c = ac.Ay.getDefaultPrice(d.id),
        g = ac.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, dm.M)(s) ? dq.at.PREMIUM_TIER_2_WHITE_FILL : dq.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, A.jsxs)(A.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, A.jsx)(dq.e4, { text: R.intl.string(R.t.EyjDRE), className: d1.LW, colorOptions: e })
                    : (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(dq.HU, {
                                  text: l ? R.intl.string(R.t.qYKftX) : R.intl.string(R.t.EyjDRE),
                                  className: d1.uS,
                                  colorOptions: e,
                              }),
                              (0, A.jsx)("div", { className: d1.on }),
                          ],
                      }),
                (0, A.jsx)(p.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: d1.KB,
                    children: (function () {
                        if (l) return R.intl.format(R.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, dp.$g)(c.amount, c.currency);
                            return R.intl.format(d0.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? R.intl.format(R.t.z2oQtA, {
                                  percent: i?.percentage ?? tZ.Cq,
                                  regularPrice: g,
                                  renewalDate: ac.Ay.getExpectedRenewalDate(t, o),
                              })
                            : R.intl.formatToPlainString(R.t["3ZiutU"], {
                                  percent: i?.percentage ?? tZ._$,
                                  regularPrice: g,
                                  numMonths: i?.duration ?? tZ.OJ,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, A.jsx)(dQ.A, { variant: void 0, subscriptionTier: tZ.pe.TIER_2, interval: d.interval });
}
function d4() {
    let e = (0, dT.k5)(),
        t = (0, dT.nf)(),
        n = (0, uY.Ay)(),
        i = (0, E.bG)([oK.A], () => oK.A.getPremiumTypeSubscription()),
        s = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, dh.A)(),
        a = (0, df.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, A.jsxs)("div", {
        className: ic()(d1.$Y, { [d1.J5]: e || d }),
        children: [
            (0, A.jsxs)("div", {
                className: d1.jp,
                children: [
                    l
                        ? (0, A.jsx)(p.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: d1._K,
                              children: (0, d$.DP)(),
                          })
                        : (0, A.jsx)(dx.A, { className: d1.TJ }),
                    l && !e
                        ? (0, A.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, A.jsxs)(A.Fragment, {
                                children: [
                                    (0, A.jsx)(dq.e4, {
                                        text: R.intl.string(R.t.uXF4c4),
                                        className: d1.LW,
                                        colorOptions: dq.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, A.jsx)(p.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: d1.sQ,
                                        children: R.intl.format(R.t.sK7fGl, {
                                            helpCenterLink: eT.A.getArticleURL(S.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, A.jsx)(d5, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, A.jsxs)(A.Fragment, {
                                    children: [
                                        (0, A.jsx)(dq.HU, {
                                            text: R.intl.string(R.t.qYKftX),
                                            className: d1.uS,
                                            colorOptions: (0, dm.M)(n)
                                                ? dq.at.PREMIUM_TIER_2_WHITE_FILL
                                                : dq.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, A.jsx)(p.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: d1.KB,
                                            children: R.intl.format(R.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, A.jsx)(dJ.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? dJ.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? dJ.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? dJ.Nz.FRACTIONAL_PREMIUM
                                : dJ.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, A.jsxs)(lQ.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, A.jsx)(dZ.A, {
                                      defaultTextOverride: a ? R.intl.string(R.t.YScQSF) : R.intl.string(R.t["0b3YRn"]),
                                  }),
                                  (0, A.jsx)(_.$, {
                                      onClick: () => {
                                          (tr.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: d2,
                                              target: d3,
                                          }),
                                              (0, tB.default)(),
                                              (0, t5.pX)(S.BVt.APPLICATION_STORE));
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: a ? R.intl.string(R.t.VR2iVB) : R.intl.string(R.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, A.jsxs)(lQ.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, A.jsx)(_.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (tr.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: d2,
                                              target: d3,
                                          }),
                                              (0, tB.default)(),
                                              (0, t5.pX)(S.BVt.APPLICATION_STORE));
                                      },
                                      text: R.intl.string(R.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, A.jsx)(_.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          (tr.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, no.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL));
                                      },
                                      text: R.intl.string(R.t["9uDy6C"]),
                                      fullWidth: !0,
                                      size: "md",
                                  }),
                              ],
                          }),
                ],
            }),
            (0, A.jsx)("div", {
                className: d1.ah,
                children: (0, A.jsx)("img", { className: d1.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function d6() {
    return (0, A.jsxs)("div", {
        className: d1.T1,
        children: [
            (0, A.jsx)("img", { className: d1.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, A.jsxs)("div", {
                className: d1.b4,
                children: [
                    (0, A.jsx)(p.D, {
                        className: d1.Vz,
                        variant: "heading-xl/extrabold",
                        children: R.intl.string(R.t["3KomGa"]),
                    }),
                    (0, A.jsx)(H.E, {
                        className: d1.Oi,
                        variant: "text-sm/normal",
                        children: R.intl.string(R.t.yQ06u1),
                    }),
                    (0, A.jsx)(dW.A, {
                        className: ic()(d1.Tp, d1._c),
                        textOptions: { textOverride: R.intl.string(R.t.Ve9Ge6), textClassName: d1.VV },
                        color: lZ.$n.Colors.CUSTOM,
                        onClick: () => {
                            tr.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
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
let d8 = function () {
        let e = (0, ut.Hp)(),
            { analyticsLocations: t } = (0, ek.Ay)(tM.A.PREMIUM_SETTINGS),
            n = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
            i = (0, E.bG)([oK.A], () => oK.A.getPremiumTypeSubscription()),
            s = (0, E.bG)([oK.A], () => oK.A.hasFetchedSubscriptions()),
            l = (0, dE.Y)(tZ.T7),
            [r, a] = h.useState(!0),
            o = (0, dh.A)({ forceFetch: !0 }),
            u = (0, E.bG)([ux.A], () => {
                let e = ux.A.getMarketingComponentByType(dc.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oT.Fr || oT.v1) && null != u,
            c = h.useRef(null);
        (0, dC.i)();
        let g = (0, dN.m)();
        h.useEffect(() => {
            te.h.wait(async () => {
                (e || (await Promise.all([oA.hP(), oA.$o(), (0, dA.zS)(null, null, S.tF5.DISCOVERY)])), a(!1));
            });
        }, [e]);
        let [m, x] = h.useState(!1);
        if (e) return (0, A.jsx)(o0.uK, {});
        let p = s && null !== i && l,
            T = o.fetched && o.isFractionalPremiumActive,
            f = n?.isPremiumWithPremiumGroup();
        if (!p && !T && !r && !f) return (0, A.jsx)(dS.A, { title: R.intl.string(R.t.dyq9TR), note: null });
        if ((!p && !T && !f) || r) return (0, A.jsx)(oo.y, {});
        let I = !!i?.hasActiveTrial;
        return (0, A.jsx)(ek.f5, {
            value: t,
            children: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsxs)(X.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, A.jsx)(dI.m, { config: u }),
                            (0, A.jsx)(d4, {}),
                            g && (0, A.jsx)(dK, {}),
                            !d && (0, A.jsx)(d6, {}),
                            (0, A.jsx)(d_.A, {
                                hideCTAs: !0,
                                headingOverride: R.intl.string(R.t.dnVvQS),
                                hidePill: !I,
                                selectedPlanColumnClassName: d1.JG,
                                selectedPlanTier: tZ.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, A.jsx)(dg.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (tr.default.track(S.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                x(!0));
                        },
                        children: (0, A.jsx)("div", { ref: c, className: d1._Z }),
                    }),
                ],
            }),
        });
    },
    d7 = (0, d.E2)(c.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser());
            return (0, ac.YE)(e, tZ.PremiumTypes.TIER_2) ? (0, A.jsx)(d8, {}) : (0, A.jsx)(dd.A, {});
        },
        useSearchTerms: () => [R.intl.string(R.t.Ipxkog)],
    }),
    d9 = (0, d.zZ)(c.X.NITRO_CATEGORY, { buildLayout: () => [d7] }),
    ce = (0, d.t_)(c.X.NITRO_PANEL, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        useObscuredNotice: or.L,
        buildLayout: () => [d9],
    }),
    ct = (0, d.i4)(c.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        icon: r9.t,
        usePersistentBadge: function (e) {
            let t = (0, du.e)(e);
            return h.useMemo(() => ({ badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [ce],
    });
var cn = n(104510),
    ci = n(820739),
    cs = n(859241),
    cl = n(527113),
    cr = n(338548),
    ca = n(776096),
    co = n(711014),
    cu = n(178368),
    cd = n(809545),
    cc = n(168482);
function cg() {
    return (0, A.jsxs)("div", {
        className: cd.iE,
        children: [
            (0, A.jsx)("img", { className: cd.Kk, alt: "", src: cc }),
            (0, A.jsxs)("div", {
                className: cd.pq,
                children: [
                    (0, A.jsx)(H.E, { variant: "text-lg/bold", children: R.intl.string(R.t.ZHNSYf) }),
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: R.intl.string(R.t.kCj5ps),
                    }),
                ],
            }),
            (0, A.jsx)(_.$, {
                variant: "secondary",
                text: R.intl.string(R.t.JFlifp),
                onClick: function () {
                    ((0, t5.pX)(S.BVt.GUILD_DISCOVERY), (0, tB.default)());
                },
            }),
        ],
    });
}
var cm = n(365199),
    cA = n(878678),
    ch = n(443865),
    cE = n(980707),
    cS = n(473145);
function cx(e) {
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
                label: null != t.premiumGuildSubscription ? R.intl.string(R.t["PR0n//"]) : R.intl.string(R.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? R.intl.string(R.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: R.intl.string(R.t.twFU3R), subtext: s ? null : R.intl.string(R.t.oQ9lOh), disabled: !s },
            uncancel: { label: R.intl.string(R.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (l.status) {
        case S.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = R.intl.string(R.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case S.Dmq.PAUSE_PENDING:
        case S.Dmq.PAUSED:
            a === tZ.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = R.intl.string(R.t.LiLRRT)),
                (o.cancel.subtext = R.intl.string(R.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = h.useMemo(
        () =>
            l.isPausedOrPausePending && a === tZ.xc.NONE
                ? (0, A.jsx)(e7.Dr, {
                      id: "manage-subscription",
                      label: R.intl.string(R.t.obRG6Y),
                      action: () => (0, no.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: ch.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: ch.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, A.jsxs)(cE.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": R.intl.string(R.t.ogxXGq),
        onClose: i,
        children: [
            (0, A.jsx)(e7.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, sm.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("203112"),
                            n.e("647367"),
                            n.e("677508"),
                            n.e("889002"),
                            n.e("610943"),
                            n.e("534428"),
                            n.e("693173"),
                            n.e("418710"),
                            n.e("238249"),
                        ]).then(n.bind(n, 724624));
                        return (n) =>
                            (0, A.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: S.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, cS.I5)(t)
                ? (0, A.jsx)(e7.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, sm.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, A.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, A.jsx)(e7.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, sm.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, A.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var cp = n(545934),
    cT = n(548118),
    cf = n(987144),
    cI = n(864310),
    c_ = n(290413);
function cN(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, cI.A)(t.id);
    return (0, A.jsxs)("div", {
        className: n ?? c_.OA,
        children: [
            (0, A.jsx)(cT.Ay, { className: c_.$f, guild: t, size: cT.Ay.Sizes.MEDIUM }),
            (0, A.jsxs)("div", {
                className: c_.gI,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, A.jsxs)("div", {
                        className: c_.ew,
                        children: [
                            (0, A.jsxs)("div", {
                                className: c_.QW,
                                children: [
                                    (0, A.jsx)(cn._, {
                                        className: c_.Wz,
                                        color: n2.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== S.TVA.NONE &&
                                (0, A.jsxs)(A.Fragment, {
                                    children: [
                                        (0, A.jsx)("div", { className: c_.zk }),
                                        (0, A.jsx)(H.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, cS.gb)(t.premiumTier, { useLevels: !1 }),
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
function cC(e) {
    let { guildId: t } = e,
        n = (0, E.bG)([sI.A], () => sI.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: c_.Nr,
              children: [
                  (0, A.jsx)(cN, { guild: n }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: cn._,
                      text: R.intl.string(R.t.aBHecF),
                      onClick: () => {
                          (0, cf.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: S.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: S.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: S.ZSU.BUTTON_CTA,
                                  objectType: S.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var cb = n(747381);
let cy =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function cv(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = h.useRef(null),
        a = (0, cS.I5)(t),
        o = h.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, dh.A)(),
        c = h.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === S.TVA.NONE) return "";
                    let n = [
                        R.intl.formatToPlainString(R.t["dLlKX/"], { numEmojiSlots: tZ.TG[e].limits.emoji }),
                        R.intl.formatToPlainString(R.t["+ANIfv"], { numStickerSlots: tZ.TG[e].limits.stickers }),
                        R.intl.formatToPlainString(R.t["4gt60b"], {
                            numSoundboardSlots: tZ.TG[e].limits.soundboardSounds,
                        }),
                        R.intl.formatToPlainString(R.t.XahSjZ, {
                            resolution: tZ.TG[e].limits.screenShareQualityResolution,
                            framerate: tZ.TG[e].limits.screenShareQualityFramerate,
                        }),
                        R.intl.formatToPlainString(R.t.NbNs7S, { bitrate: tZ.TG[e].limits.bitrate / 1e3 }),
                        R.intl.formatToPlainString(R.t.VVKcpn, { filesize: tZ.TG[e].limits.fileSize / 1024 / 1024 }),
                        R.intl.formatToPlainString(R.t.TbpCvv, { numVideoStageSeats: tZ.TG[e].limits.stageVideoUsers }),
                        R.intl.string(R.t.LDyX3i),
                        R.intl.string(R.t.YtGlPW),
                    ];
                    (e >= S.TVA.TIER_2 && (n.push(R.intl.string(R.t.SztbtN)), n.push(R.intl.string(R.t["3GK91n"]))),
                        e >= S.TVA.TIER_3 && n.push(R.intl.string(R.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let s = n[Math.abs(i) % n.length];
                    return R.intl.formatToPlainString(R.t["/dOAmQ"], { perk: s });
                })(n, t.id),
            [n, t.id],
        ),
        g = h.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? op.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return R.intl.formatToPlainString(R.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = h.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        ),
        E = null != m && !(u && null != o && o < m);
    return (0, A.jsxs)("div", {
        className: ic()(cb.iq, { [cb.Mt]: l }),
        children: [
            (0, A.jsxs)("div", {
                className: cb.kd,
                children: [
                    (0, A.jsx)("img", { alt: "", className: cb.bB, src: cy }),
                    E
                        ? (0, A.jsx)(H.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: R.intl.format(R.t.Z4ULRD, { date: m }),
                          })
                        : (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(H.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)("div", { className: cb.zk }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: R.intl.formatToPlainString(R.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != i.trialEndsAt &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)("div", { className: cb.zk }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: R.intl.formatToPlainString(R.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, A.jsx)(ao.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, A.jsx)(cx, {
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
                    (0, A.jsx)(n4.D, {
                        innerRef: r,
                        "aria-label": R.intl.string(R.t.PdRCRg),
                        className: cb.Mj,
                        ...e,
                        children: (0, A.jsx)(cm.MoreHorizontalIcon, {
                            size: "xs",
                            color: n2.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function cj(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, E.bG)([sI.A], () => sI.A.getGuild(t), [t]);
    return (0, A.jsxs)("div", {
        className: cb.Nr,
        children: [
            (0, A.jsx)("div", {
                className: cb.MY,
                children:
                    null != l
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(cN, { guild: l, className: cb.OA }),
                                  (0, A.jsx)(_.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(R.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tB.default)(),
                                              (0, cA.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: S.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, A.jsx)("div", {
                              className: cb.OA,
                              children: (0, A.jsx)(p.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, A.jsx)(
                    cv,
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
function cO(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = h.useMemo(() => {
            if (s && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let s = n[e];
                            i[e] = s.map((n) =>
                                cp.A.createFromServer(
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
                if ((!(0, cS.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > ac.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, A.jsx)("div", {
        className: cb.kR,
        children: op.default
            .keys(l)
            .map((e) => (0, A.jsx)(cj, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var cL = n(502572),
    cR = n(983511),
    cD = n(342744),
    cP = n(496431);
let cG = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, cP.A)(n);
    return (0, A.jsx)(H.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iA.uN)(i, { days: R.t.WUTPDc, hours: R.t.c1qodV, minutes: R.t["2+A3dv"] }),
    });
};
var cM = n(731536);
function cU(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, E.bG)([oK.A], () => oK.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = h.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, cS.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? ac.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === tZ.xc.NONE;
    return 0 === l.length
        ? null
        : (0, A.jsxs)("div", {
              className: cM.Nr,
              children: [
                  (0, A.jsxs)("div", {
                      className: cM.MY,
                      children: [
                          (0, A.jsxs)("div", {
                              className: cM._L,
                              children: [
                                  (0, A.jsxs)("div", {
                                      className: cM.MD,
                                      children: [
                                          (0, A.jsx)("img", { alt: "", className: cM.F8, src: cy }),
                                          (0, A.jsx)("div", {
                                              className: ic()(cM.qS, "theme-dark"),
                                              children: (0, A.jsx)("span", { className: cM.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsxs)("div", {
                                      className: cM.Qp,
                                      children: [
                                          (0, A.jsx)(H.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: R.intl.format(R.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, A.jsx)(H.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: R.intl.format(R.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, A.jsx)(cL.A, {
                              shouldShow: o,
                              text: R.intl.string(R.t.mOWsF1),
                              "aria-label": R.intl.string(R.t.mOWsF1),
                              children: (e) =>
                                  (0, A.jsx)(_.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: cn._,
                                      text: R.intl.string(R.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, sm.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("677508"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, A.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, cf.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: S.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: S.JJy.SETTINGS_PREMIUM,
                                                                      object: S.ZSU.BUTTON_CTA,
                                                                      objectType: S.AnalyticsObjectTypes.BUY,
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
                      (0, A.jsx)(
                          cV,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, cS.I5)(e),
                              isCanceled: (0, cS.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function cV(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = h.useRef(null),
        u = h.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]),
        d = l ? r?.currentPeriodEnd : null;
    t =
        n.isOnCooldown() && null != u && (null == d || u < d)
            ? (0, A.jsx)(cG, { cooldown: u.getTime() })
            : null != d
              ? (0, A.jsx)(H.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R.intl.format(R.t.Z4ULRD, { date: d }),
                })
              : (0, A.jsx)(H.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R.intl.string(R.t["2mcafz"]),
                });
    let c = s || l;
    return (0, A.jsxs)("div", {
        className: ic()(cM.iq, { [cM.Mt]: i }),
        children: [
            (0, A.jsxs)("div", {
                className: cM.kd,
                children: [(0, A.jsx)("img", { alt: "", className: cM.bB, src: cy }), t],
            }),
            c &&
                (0, A.jsx)(ao.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, A.jsxs)(cE.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": R.intl.string(R.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, A.jsx)(e7.Dr, {
                                        id: "cancel-boost",
                                        label: R.intl.string(R.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? R.intl.string(R.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sm.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(cR.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                l &&
                                    (0, A.jsx)(e7.Dr, {
                                        id: "uncancel-boost",
                                        label: R.intl.string(R.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? R.intl.string(R.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sm.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(cD.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, A.jsx)(n4.D, {
                            innerRef: o,
                            "aria-label": R.intl.string(R.t["UKOtz+"]),
                            className: cM.Mj,
                            ...e,
                            children: (0, A.jsx)(cm.MoreHorizontalIcon, {
                                size: "xs",
                                color: n2.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var ck = n(834612);
function cw(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && l !== tZ.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, A.jsxs)("div", {
              className: ck.i,
              children: [
                  (0, A.jsxs)("div", {
                      className: ck.b,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.W5rDjW) }),
                          (0, A.jsx)(H.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: R.intl.format(R.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(cO, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, A.jsx)(cU, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var cF = n(333722),
    cB = n(9146);
function cz() {
    return (0, A.jsxs)("div", {
        className: cB.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.IzKs3o) }),
            (0, A.jsx)("div", {
                className: cB.kR,
                children: cF.s.map((e, t) => {
                    let n = e.icon;
                    return (0, A.jsxs)(
                        "div",
                        {
                            className: cB.Nr,
                            children: [
                                (0, A.jsx)(n, { className: cB.Kk }),
                                (0, A.jsx)(H.E, {
                                    className: cB.h_,
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
var cX = n(847374),
    cY = n(232122),
    cH = n(665984);
function cK() {
    let [e, t] = h.useState(null),
        [n, i] = h.useState(null);
    return (0, A.jsxs)("div", {
        className: cH.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.HPJ6Nj) }),
            (0, A.jsx)("ul", {
                className: cH.p_,
                children: cY.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, A.jsxs)(
                        n4.D,
                        {
                            tag: "li",
                            className: ic()(cH.Aw, { [cH.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, A.jsxs)("div", {
                                    className: cH.k7,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            className: cH.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, A.jsx)(cX.a, {
                                            size: "sm",
                                            color: n2.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: cH.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsx)(H.E, {
                                        className: cH.ZF,
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
var cW = n(182859),
    cZ = n(25525),
    cq = n(416763);
function cQ() {
    let e = eT.A.getArticleURL(S.MVz.GUILD_SUBSCRIPTIONS);
    return (0, A.jsxs)("div", {
        className: cq.wx,
        children: [
            (0, A.jsxs)("div", {
                className: cq.Qs,
                children: [
                    (0, A.jsxs)("div", {
                        className: cq.B5,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: cq.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(cZ.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.format(R.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, A.jsx)(cW.A, {
                variant: "member",
                className: cq.iO,
                analyticsLocation: {
                    page: S.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: S.JJy.HERO,
                    object: S.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var cJ = n(315629),
    c$ = n(87719),
    c0 = n(961085);
function c1() {
    let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser());
    if (null == e || ac.Ay.hasFreeBoosts(e)) return null;
    let t = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(cJ.h, {
        color: "nitro-pink",
        className: c0.vK,
        children: [
            (0, A.jsxs)("div", {
                className: c0.nw,
                children: [
                    (0, A.jsx)("img", { alt: "", className: c0.q3, src: cy }),
                    (0, A.jsxs)("div", {
                        className: c0.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.Idh1Vs, { count: tZ.M4, boostCount: tZ.M4 }),
                            }),
                            (0, A.jsxs)("div", {
                                className: c0.xv,
                                children: [
                                    (0, A.jsx)(r9.t, { className: c0.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tZ.M4,
                                            boostCount: tZ.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)(_.$, {
                variant: "expressive",
                size: "sm",
                icon: r9.t,
                text: R.intl.string(R.t["8x0jKT"]),
                onClick: c$.e,
            }),
        ],
    });
}
var c2 = n(532991);
function c3() {
    let e = (0, E.bG)([ca.A], () => ca.A.affinities),
        t = (0, E.bG)([co.Ay], () => co.Ay.getFlattenedGuildIds()),
        n = h.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, A.jsxs)("div", {
              className: c2.i,
              children: [
                  (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.r90Wgo) }),
                  (0, A.jsx)("div", { className: c2.k, children: n.map((e) => (0, A.jsx)(cC, { guildId: e }, e)) }),
              ],
          });
}
var c5 = n(967246);
function c4(e) {
    let { count: t } = e,
        i = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(cJ.h, {
        color: "nitro-pink",
        className: c5.vK,
        children: [
            (0, A.jsxs)("div", {
                className: c5.nw,
                children: [
                    (0, A.jsxs)("div", {
                        className: c5.MD,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: c5.F8, src: cy }),
                            (0, A.jsx)("div", {
                                className: ic()(c5.qS, "theme-dark"),
                                children: (0, A.jsx)("span", { className: c5.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: c5.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, A.jsxs)("div", {
                                className: c5.xv,
                                children: [
                                    (0, A.jsx)(r9.t, { className: c5.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tZ.M4,
                                            boostCount: tZ.M4,
                                            helpdeskArticle: i,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)(_.$, {
                variant: "primary",
                size: "sm",
                icon: cn._,
                text: R.intl.string(R.t.BMx1iy),
                onClick: () => {
                    (0, sm.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("677508"), n.e("418710")]).then(n.bind(n, 770101));
                        return (t) =>
                            (0, A.jsx)(e, {
                                ...t,
                                onSelectGuild: (e) => {
                                    (t.onClose(),
                                        (0, cf.g)({
                                            analyticsLocations: [],
                                            analyticsLocation: {
                                                page: S.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                section: S.JJy.SETTINGS_PREMIUM,
                                                object: S.ZSU.BUTTON_CTA,
                                                objectType: S.AnalyticsObjectTypes.BUY,
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
var c6 = n(89150);
function c8(e) {
    let { premiumSubscription: t } = e,
        n = (0, E.bG)([cu.A], () => cu.A.boostSlots),
        i = h.useMemo(() => Object.values(n), [n]),
        s = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
        l = (0, E.bG)([ca.A], () => ca.A.affinities),
        r = (0, E.bG)([co.Ay], () => co.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = (0, E.bG)([cs.A], () => cs.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, dh.A)({ forceFetch: !0 }),
        d = s?.isPremiumGroupMember(),
        c = t?.isPausedOrPausePending === !0 && u === tZ.xc.NONE,
        g = h.useMemo(() => {
            if (null == t || c) return 0;
            let e = ac.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : i.filter((e) => e.isAvailable()).length;
        }, [t, c, i]);
    return (0, A.jsxs)("div", {
        className: c6.GO,
        children: [
            (0, A.jsx)(o0.kb, { className: c6.ek }),
            (0, A.jsx)(cQ, {}),
            (0, A.jsx)(c1, {}),
            g > 0 && (0, A.jsx)(c4, { count: g }),
            d && (0, A.jsx)(cr.A, {}),
            !a && (0, A.jsx)(cg, {}),
            (0, A.jsxs)("div", {
                className: c6.C_,
                children: [
                    (0, A.jsx)(cw, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: o,
                        fractionalPremiumState: u,
                    }),
                    (0, A.jsx)(c3, {}),
                    (0, A.jsx)(cl.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, A.jsx)(cz, {}),
                    (0, A.jsx)(cK, {}),
                ],
            }),
        ],
    });
}
var c7 = n(819677);
let c9 = (0, d.E2)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            h.useEffect(() => {
                te.h.wait(() => {
                    (oA.hP(), oA.$o(), (0, ci.CD)(), (0, dA.zS)(null, null, S.tF5.DISCOVERY), (0, ci.tO)(!0));
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, E.cf)([oK.A], () => ({
                    hasFetchedSubscriptions: oK.A.hasFetchedSubscriptions(),
                    premiumSubscription: oK.A.getPremiumTypeSubscription(),
                })),
                n = (0, dE.Y)(),
                i = (0, E.bG)([oH.A], () => oH.A.hasFetchedPaymentSources),
                s = (0, E.bG)([cs.A], () => cs.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = h.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, A.jsx)("div", { className: ic()(c7.kL, c7.Lq), children: (0, A.jsx)(oo.y, {}) })
                : (0, A.jsxs)("div", {
                      className: c7.kL,
                      children: [
                          (0, A.jsx)("div", { className: c7.Tp }),
                          (0, A.jsx)("div", { className: c7.Qs, children: (0, A.jsx)(c8, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t["+CbP2v"]), R.intl.string(R.t.Nn1lJy)],
    }),
    ge = (0, d.zZ)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [c9] }),
    gt = (0, d.t_)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        buildLayout: () => [ge],
    }),
    gn = (0, d.i4)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        icon: cn._,
        buildLayout: () => [gt],
    });
var gi = n(153659),
    gs = n(155984),
    gl = n(357758),
    gr = n(262077),
    ga = n(281445),
    go = n(933832),
    gu = n(624479),
    gd = n(626584),
    gc = n(131607),
    gg = n(95035),
    gm = n(196736),
    gA = n(685743),
    gh = n(349085),
    gE = n(342942),
    gS = n(376205),
    gx = n(252589),
    gp = n(758836),
    gT = n(49999),
    gf = n(394107),
    gI = n(439050);
let g_ = new gd.A("GameServerSubscriptionsSection");
function gN(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function gC(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let gb = h.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, ek.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, gh.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, gc.kn)([eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = uD.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, gA.A)(c, t.id, tM.A.GAME_SERVER_PAGE, t.serverIp),
        x = h.useCallback(() => {
            (0, gE.A)({
                provider: ga.X.SHOCKBYTE,
                onAccept: () => {
                    (u(gT.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: p,
            priceLabel: T,
            dateLabel: f,
            isCanceled: I,
            isDanger: N,
        } = (0, E.bG)(
            [oK.A, uG.A],
            () => {
                let e = null != l ? oK.A.getSubscriptionById(l) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? uG.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? R.intl.formatToPlainString(R.t.AbOLNu, { price: (0, dp.$g)(u, o.priceCurrency) })
                            : null,
                    c = gN(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? R.intl.formatToPlainString(gf.default["3aEgK6"], { date: c })
                        : s
                          ? R.intl.formatToPlainString(gf.default.KFSA3M, { date: c })
                          : R.intl.formatToPlainString(gf.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            gC,
        ),
        C = h.useCallback(() => {
            if (null == l) return;
            let e = oK.A.getSubscriptionById(l),
                t = null != e ? gN(e.currentPeriodEnd) : "";
            (0, n3.A)({
                title: R.intl.string(gf.default.TEYPNR),
                subtitle: R.intl.formatToPlainString(gf.default.XR1WrB, { date: t }),
                confirmText: R.intl.string(R.t["cY+Oob"]),
                cancelText: R.intl.string(gf.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oA.M2(l, s), await oA.hP());
                    } catch (e) {
                        g_.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        b = h.useCallback(() => {
            if (null == l) return;
            let e = oK.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? uG.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, dp.$g)(u, o.priceCurrency) : "",
                c = gN(e.currentPeriodEnd);
            (0, n3.A)({
                title: R.intl.string(gf.default.o96qbc),
                subtitle: R.intl.formatToPlainString(gf.default["7n6Qq+"], { price: d, date: c }),
                confirmText: R.intl.string(R.t.iIvF2z),
                cancelText: R.intl.string(R.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, dA.ur)(r);
                        let t = e.items;
                        (await oA.nV(
                            e,
                            { status: S.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, ac.UC)(t, e.currency),
                            s,
                        ),
                            await oA.hP());
                    } catch (e) {
                        g_.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, A.jsxs)("div", {
        className: gI.nM,
        children: [
            (0, A.jsxs)("div", {
                className: gI.M4,
                children: [
                    (0, A.jsxs)("div", {
                        className: gI.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, A.jsx)("img", { className: gI.uP, src: a, alt: "" }),
                            (0, A.jsx)("div", { className: gI.tw }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: gI.CR,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            y &&
                                (d
                                    ? (0, A.jsxs)("div", {
                                          className: gI.CQ,
                                          children: [
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, A.jsx)(n4.D, {
                                                  className: gI.cL,
                                                  onClick: g,
                                                  "aria-label": R.intl.string(R.t.OpuAlK),
                                                  children: m
                                                      ? (0, A.jsx)(go.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, A.jsx)(gu.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, A.jsx)(gg.A, { onClick: x, children: R.intl.string(gf.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: gI.Rd,
                children: [
                    (0, A.jsxs)("div", {
                        className: gI.Ff,
                        children: [
                            null != T &&
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: T,
                                }),
                            null != f &&
                                (N
                                    ? (0, A.jsxs)("div", {
                                          className: gI.ez,
                                          children: [
                                              (0, A.jsx)(iQ.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: f,
                                              }),
                                          ],
                                      })
                                    : (0, A.jsx)(H.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: f,
                                      })),
                        ],
                    }),
                    p &&
                        (I
                            ? (0, A.jsx)(_.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: R.intl.string(R.t.iIvF2z),
                                  onClick: b,
                              })
                            : (0, A.jsx)(_.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: R.intl.string(R.t["ETE/oC"]),
                                  onClick: C,
                              })),
                ],
            }),
        ],
    });
});
function gy(e) {
    let { servers: t } = e,
        n = (0, gm.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, gx.Y)(),
        s = (0, E.bG)([lg.default], () => ac.Ay.canUseShopDiscounts(lg.default.getCurrentUser())),
        l = h.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, E.yK)([oK.A], () => (0, gS.HY)(t, i, (e) => oK.A.getSubscriptionById(e)), [t, i]);
    h.useEffect(() => {
        let e = r.filter((e) => !uG.A.isLoadedForSKU(e) && !uG.A.isFetchingForSKU(e));
        e.length > 0 && (0, dA.jv)(e).catch(() => {});
    }, [r]);
    let a = h.useCallback(() => {
        ((0, tB.default)(), (0, t5.pX)(S.BVt.COLLECTIBLES_SHOP_WITH_TAB(gp.G2.GAME_SERVERS)));
    }, []);
    return (0, A.jsxs)("div", {
        className: gI.uW,
        children: [
            (0, A.jsxs)("div", {
                className: gI.wx,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: R.intl.string(gf.default.vCzwM7),
                    }),
                    (0, A.jsxs)("div", {
                        className: gI.h_,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.string(gf.default.y85Eg9),
                            }),
                            n &&
                                (0, A.jsx)(gg.A, {
                                    onClick: a,
                                    children: (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: R.intl.string(gf.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", {
                className: gI.p_,
                children: t.map((e) =>
                    (0, A.jsx)(gb, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var gv = n(55766),
    gj = n(696986),
    gO = n(364036);
function gL(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["KzCF/6"]) }),
            (0, A.jsx)(gj.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: gO.yV, children: R.intl.string(R.t["3D7qCu"]) }),
            (0, A.jsx)(gj.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: gO.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: gO.RI }),
                    (0, A.jsxs)("div", {
                        className: gO.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: gO.wx,
                                children: R.intl.string(R.t["KzCF/6"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: gO.h_,
                                children: R.intl.format(R.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(_.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: R.intl.string(R.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var gR = n(872351),
    gD = n(9113),
    gP = n(599941),
    gG = n(384684),
    gM = n(2242);
let gU = [];
var gV = n(885574),
    gk = n(912851),
    gw = n(182744);
let gF = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, A.jsx)(n4.D, {
        onClick: i ? void 0 : n,
        className: gw.x6,
        children: (0, A.jsxs)("div", {
            className: gw.hQ,
            children: [
                i
                    ? (0, A.jsx)(oo.y, { type: oo.y.Type.PULSING_ELLIPSIS, className: gw.__invalid_spinner })
                    : (0, A.jsx)(H.E, { variant: "text-md/medium", className: gw.Pf, children: t }),
                (0, A.jsx)(cX.a, { size: "md", color: "currentColor", className: gw.UE }),
            ],
        }),
    });
};
var gB = n(465932),
    gz = n(543767),
    gX = n(951555),
    gY = n(790284),
    gH = n(636194),
    gK = n(624456),
    gW = n(710144),
    gZ = n(815332),
    gq = n(162093),
    gQ = n(557506);
function gJ(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: s, onClose: l } = e,
        r = (0, tY.GV)(),
        { analyticsLocations: a } = (0, ek.Ay)(tM.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = h.useState(!1),
                [i, s] = h.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return (n(!0), await oA.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === gM.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === gM.bN.INTANGIBLE),
        E = im()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        S = R.intl.formatToPlainString(R.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: E,
        });
    return (0, A.jsx)(sg.a, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: R.intl.string(R.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: R.intl.string(R.t.F6lUDF), onClick: c, loading: d },
        ],
        title: R.intl.string(R.t.O6l5tM),
        subtitle: S,
        onClose: l,
        children: (0, A.jsxs)(X.B, {
            gap: 8,
            children: [
                null != u ? (0, A.jsx)(iW.w, { type: "critical", children: u.message }) : null,
                (0, A.jsx)(gq.x, { listingId: i.id, guildId: n.guild_id, className: gQ.P }),
            ],
        }),
    });
}
var g$ = n(319225),
    g0 = n(746080),
    g1 = n(883616);
function g2(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, A.jsxs)("div", {
        className: g1.L0,
        children: [
            (0, A.jsxs)("div", {
                className: g1.a5,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-deprecated-12/semibold", className: g1.HU, children: t }),
                    i &&
                        (0, A.jsx)(sa.m, {
                            text: s,
                            children: (0, A.jsx)(gV.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: g1.Mo,
                            }),
                        }),
                ],
            }),
            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", className: g1.sx, children: n }),
        ],
    });
}
function g3(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, ek.Ay)(),
        [i] = (0, gz.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tM.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, E.yK)([oH.A], () => [oH.A.hasFetchedPaymentSources, oH.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, A.jsx)(gX.A, { subscription: t, currentInvoicePreview: i })
        : (0, A.jsx)(oo.y, {});
}
function g5(e) {
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
        : (0, A.jsx)(t2.D, {
              label: R.intl.string(R.t["4neDM+"]),
              children: (0, A.jsx)("div", {
                  className: g1.__invalid_rowButtons,
                  children: n
                      ? (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.y3mAE4), onClick: r, loading: i })
                      : (0, A.jsxs)(A.Fragment, {
                            children: [
                                !t && !s && (0, A.jsx)(gF, { label: R.intl.string(R.t.FRbWR8), onClick: a }),
                                (0, A.jsx)(gF, { label: R.intl.string(R.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let g4 = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, gK.M)(e),
                n = (0, E.bG)([gH.A], () => gH.A.getSubscriptionListingForPlan(t)),
                i = (0, E.bG)([gH.A], () =>
                    null != n ? gH.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, E.bG)([sI.A], () => sI.A.getGuild(i?.guild_id)),
                [l, r] = h.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, gP.XE)();
            h.useEffect(() => {
                l && null != s && null == gH.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = im()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, dp.$g)(t.price, t.currency) : "",
                              s = im()(t.createdAt).format("M/D/YY"),
                              l = t.status === S.Dmq.CANCELED,
                              r = t.status === S.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: s,
                              nextRenewalDate: n,
                              nextRenewalLabel: l ? R.intl.string(R.t.UAfot2) : R.intl.string(R.t.CVjLcM),
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
        [o, u] = h.useState(!1),
        d = (0, tY.GV)(),
        { analyticsLocations: g } = (0, ek.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: m } = (0, gB.MH)(s?.id),
        x = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function p() {
        try {
            (u(!0),
                await oA.QP(t, g),
                (0, g$.E)({ title: R.intl.string(R.t.oPV2cy), body: R.intl.string(R.t.DdRizV) }));
        } finally {
            u(!1);
        }
    }
    let {
            isCancelled: T,
            isPastDue: f,
            subscriptionPrice: I,
            memberSince: _,
            nextRenewalDate: N,
            nextRenewalLabel: C,
            isTrial: b,
        } = a,
        y = n.soft_deleted || null == s || x;
    return (0, A.jsxs)("div", {
        className: g1.kL,
        children: [
            (0, A.jsx)(gW.A, {
                onClick: r,
                className: g1.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [
                            null != s && (0, A.jsx)(cT.Ay, { guild: s, active: !0, size: cT.Ay.Sizes.MEDIUM }),
                            (0, A.jsxs)("div", {
                                className: g1.if,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        className: g1.J5,
                                        children: null != s ? s.name : R.intl.string(R.t["He+cmd"]),
                                    }),
                                    (0, A.jsxs)("div", {
                                        className: g1.xp,
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-sm/normal",
                                                className: g1.KR,
                                                children: n.name,
                                            }),
                                            T
                                                ? (0, A.jsx)(ta.Lp, { text: R.intl.string(R.t["7uFZGt"]) })
                                                : b
                                                  ? (0, A.jsx)(ta.Lp, {
                                                        text: R.intl.string(R.t["6anton"]),
                                                        color: n2.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : f
                                                    ? (0, A.jsx)(sa.m, {
                                                          text: R.intl.string(R.t.eSuJE2),
                                                          children: (0, A.jsx)("div", {
                                                              children: (0, A.jsx)(ta.Lp, {
                                                                  className: g1.qc,
                                                                  text: R.intl.string(R.t.NrRwIl),
                                                                  color: n2.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            x
                                                ? (0, A.jsx)(sa.m, {
                                                      text: R.intl.string(R.t.nv1IqK),
                                                      children: (0, A.jsx)("div", {
                                                          children: (0, A.jsx)(ta.Lp, {
                                                              text: R.intl.string(R.t["sBl3X/"]),
                                                              color: n2.A.colors.BACKGROUND_MOD_MUTED.css,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, A.jsx)(n4.D, {
                                onClick: i(r),
                                "aria-label": R.intl.string(R.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, A.jsx)(cX.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ic()(g1.D6, { [g1.S7]: l }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && l
                ? (0, A.jsxs)("div", {
                      id: d,
                      children: [
                          (0, A.jsx)("div", { className: g1.yF }),
                          (0, A.jsx)(gZ.A, { groupListingId: i.id, subscription: t, className: g1.kE }),
                          (0, A.jsxs)("div", {
                              className: g1.Zx,
                              children: [
                                  (0, A.jsx)(g2, { label: C, value: N }),
                                  (0, A.jsx)(g2, {
                                      label: R.intl.string(R.t.dltUMH),
                                      value: I,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? R.intl.string(R.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, A.jsx)(g2, { label: R.intl.string(R.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, A.jsx)(gj.h, { size: 16 }),
                          !T &&
                              !x &&
                              (0, A.jsx)(t2.D, {
                                  label: R.intl.string(R.t.wmMFvA),
                                  children: (0, A.jsx)(g3, { subscription: t }),
                              }),
                          !y &&
                              (0, A.jsx)(g5, {
                                  isTrial: b,
                                  isCancelled: T,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: m,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sm.openModal)((t) => (0, A.jsx)(gJ, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, t5.pX)(S.BVt.CHANNEL(s.id, g0.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tB.default)(),
                                          gk.A.show(
                                              S.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              R.intl.string(R.t.DvbaM4),
                                              () => {
                                                  (gY.A.setState({ subsection: eC.nR }),
                                                      (0, no.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL));
                                              },
                                          ));
                                  },
                                  onResubscribeClick: p,
                              }),
                      ],
                  })
                : null,
        ],
    });
};
var g6 = n(661097);
let g8 = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, E.bG)([gG.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [gG.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? gM.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? gM.M_.NONE
                                  : gM.M_.IN_SUBSCRIPTION_SERVER;
                        })([gG.A]),
                    ) === gM.M_.SUBSCRIBED,
                n = (0, E.bG)([oK.A], () => oK.A.getActiveGuildSubscriptions()),
                i = h.useRef(!1);
            return (
                h.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            s = oK.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !oK.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oA.hP());
                }, [e, t]),
                n ?? gU
            );
        })(),
        { loading: i } = (0, gP.eb)(n);
    return ((0, gD.A)(oT.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, A.jsx)(oo.y, {})
        : 0 === n.length
          ? null
          : (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(_.$, { text: R.intl.string(R.t.hqyhKQ), icon: gR.z, variant: "secondary", onClick: t }),
                    (0, A.jsx)(gj.h, { size: 10 }),
                    (0, A.jsx)(n5.n, {
                        label: R.intl.string(R.t["KzCF/6"]),
                        description: R.intl.string(R.t["Y+ucR7"]),
                        children: (0, A.jsx)("div", {
                            className: g6.A,
                            children: n.map((e) => (0, A.jsx)(g4, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var g7 = n(327479),
    g9 = n(932012);
function me(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["48ywCu"]) }),
            (0, A.jsx)(gj.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: g9.yV, children: R.intl.string(R.t.VWxmSo) }),
            (0, A.jsx)(gj.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: g9.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: g9._e }),
                    (0, A.jsxs)("div", {
                        className: g9.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: g9.wx,
                                children: R.intl.string(R.t["48ywCu"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: g9.h_,
                                children: R.intl.format(R.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(g7.A, { onClick: t, text: R.intl.string(R.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var mt = n(548411),
    mn = n(417098),
    mi = n(143582),
    ms = n(915043),
    ml = n(631466);
function mr(e) {
    let { className: t, header: n, headerClassName: i, children: s } = e,
        l = h.useMemo(() => {
            let e = !1;
            return (
                h.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, A.jsxs)("div", {
        className: ic()(ml.iE, t),
        children: [
            (0, A.jsx)("div", { className: ic()(ml.wx, i), children: n }),
            l && (0, A.jsx)("div", { className: ml.Qs, children: s }),
        ],
    });
}
var ma = n(885996),
    mo = n(144165),
    mu = n(664121),
    md = n(950305),
    mc = n(943775),
    mg = n(123791),
    mm = n(900797),
    mA = n(611643);
let mh = h.createContext({ isOpen: !1, toggleOpen: () => {} });
function mE(e) {
    let { children: t } = e,
        [n, i] = h.useReducer((e) => !e, !1),
        s = h.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, A.jsx)(mh.Provider, { value: s, children: t(n) });
}
mE.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = h.useContext(mh),
        l = i ? mm.t : cX.a,
        r = null != n ? n : i ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.XJuakA);
    return (0, A.jsxs)(n4.D, {
        className: ic()(mA.L, t),
        onClick: s,
        children: [
            (0, A.jsx)(H.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, A.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var mS = n(627363),
    mx = n(243217),
    mp = n(328968),
    mT = n(163437),
    mf = n(3432);
function mI(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var m_ = n(562312),
    mN = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function mC(e) {
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
            isOrphanedGuildSubscription: x,
            renewalPlan: T,
        } = (0, E.cf)(
            [uG.A, uM.A, mp.A, sI.A],
            () => {
                let e,
                    n = uG.A.get(r),
                    i = null != n ? uM.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? mp.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, mT.PJ)(o.skuFlags),
                    d = u && null != s ? sI.A.getGuild(s) : void 0,
                    c = (0, mT.Uo)(t, i),
                    g = u && null != s && null == d;
                if (!1 === c && null != l && l.items.length > 0) {
                    let t = l.items[0];
                    e = uG.A.get(t.planId) ?? void 0;
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
        { data: f } = (0, mS.YY)(a),
        I = h.useMemo(() => (null != f ? (0, mc.A)(f, 100) : null), [f]),
        _ = g?.deleted ?? !1,
        N = null != g && (0, mT.Se)(g),
        C = t.status === S.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, ek.Ay)(),
        [y] = (0, gz.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tM.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = mI(t.currentPeriodEnd),
        j = 0 === i;
    return (0, A.jsxs)(mr, {
        headerClassName: m_.dL,
        header:
            !1 === j
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsxs)("div", {
                              className: m_.VW,
                              children: [
                                  null != I &&
                                      (0, A.jsx)(mo._, { src: I.href, imageClassName: m_.Z2, width: 40, height: 40 }),
                                  (0, A.jsxs)("div", {
                                      className: m_.aF,
                                      children: [
                                          (0, A.jsx)(p.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: f?.name ?? R.intl.string(R.t["7kqy7W"]),
                                          }),
                                          (0, A.jsx)(H.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? R.intl.string(R.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, A.jsx)("div", {
                              className: m_.Pz,
                              children:
                                  null != f &&
                                  null != u &&
                                  null != g &&
                                  (0, A.jsx)(mO, {
                                      subscription: t,
                                      app: f,
                                      guild: c,
                                      sku: g,
                                      storeListing: u,
                                      isCancelled: m,
                                      isOrphanedGuildSubscription: x,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: T?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, A.jsx)(oo.y, { type: oo.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, A.jsx)(mj, {
                    type: "warning",
                    title: N
                        ? R.intl.formatToPlainString(R.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : R.intl.formatToPlainString(R.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && x && (0, A.jsx)(mj, { type: "warning", title: R.intl.string(R.t.SmSP8Q) }),
            C && (0, A.jsx)(mj, { type: "danger", title: R.intl.string(R.t.fvOqBo) }),
            (0, A.jsxs)("div", {
                className: m_.zH,
                children: [
                    (0, A.jsx)(mv, {
                        title: R.intl.string(R.t["5D/KEH"]),
                        content: d
                            ? (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsxs)("span", {
                                          className: m_.yW,
                                          children: [(0, A.jsx)(mu.R, { size: "xs" }), R.intl.string(R.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, A.jsxs)("span", {
                                              className: m_._t,
                                              children: [
                                                  (0, A.jsx)(H.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: R.intl.format(R.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, A.jsx)(cT.Ay, { guild: c, size: cT.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, A.jsxs)("span", {
                                  className: m_.yW,
                                  children: [(0, A.jsx)(md.UserIcon, { size: "xs" }), R.intl.string(R.t["6anEVv"])],
                              }),
                    }),
                    (0, A.jsx)(mb, { invoicePreview: y, subscriptionPlan: o }),
                    (0, A.jsx)(mv, {
                        title: R.intl.string(R.t.dnUzb6),
                        content: mI(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, A.jsx)(my, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: T }),
                ],
            }),
            (0, A.jsx)(mR, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: _,
                isCancelled: m,
            }),
            null != f &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, A.jsx)(mL, { appId: f.id, listingBenefits: u.benefits }),
        ],
    });
}
function mb(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, A.jsx)(mv, { title: R.intl.string(R.t.KI7ERx), content: "" });
    let i = (0, dp.CE)((0, dp.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, A.jsx)(mv, { title: R.intl.string(R.t.KI7ERx), content: i });
    let l = (0, dp.CE)((0, dp.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, A.jsx)(mv, {
        title: R.intl.string(R.t.KI7ERx),
        content: (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: l }),
                l !== i &&
                    (0, A.jsx)(sa.m, {
                        text: R.intl.format(R.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, A.jsx)(H.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, A.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function my(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, dp.CE)((0, dp.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, A.jsx)(mv, {
            title: R.intl.string(R.t.hIhAM3),
            content: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(H.E, { variant: "text-sm/medium", children: n }),
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/normal",
                        children: R.intl.format(R.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, A.jsx)(mv, { title: t ? R.intl.string(R.t.enxcAl) : R.intl.string(R.t["Ms+6Zq"]), content: n });
}
function mv(e) {
    let { title: t, content: n } = e;
    return (0, A.jsxs)("div", {
        className: m_.nM,
        children: [
            (0, A.jsx)(H.E, { variant: "text-sm/medium", children: t }),
            (0, A.jsx)(H.E, { variant: "text-sm/medium", className: m_.u4, children: n }),
        ],
    });
}
function mj(e) {
    let { type: t, title: n } = e;
    return (0, A.jsx)(ae.p, {
        messageType: "warning" === t ? ae.Y.WARNING : ae.Y.ERROR,
        className: m_.Xm,
        children: (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
    });
}
function mO(e) {
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
        c = (0, mT.Se)(s),
        { analyticsLocations: g } = (0, ek.Ay)(),
        [m, S] = h.useState(!1),
        x = (0, mg.C)(t.id),
        p = (0, E.bG)([uM.A], () => uM.A.getParentSKU(i.skuId), [i.skuId]),
        T = h.useMemo(() => {
            var e, t;
            let n;
            return null == p
                ? []
                : ((e = i.id),
                  (t = x.subscriptions),
                  (n = new Set(p.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, x, p]),
        f = 0 !== T.length;
    async function I() {
        try {
            S(!0);
            let { subscription: e } = await (0, oA.QP)(l, g);
            if (null == e) return;
            (0, sm.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, A.jsx)(t, { ...n, storeListing: i, subscription: mx.A.createFromServer(e) });
            });
        } finally {
            S(!1);
        }
    }
    return (0, A.jsxs)("div", {
        className: m_.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(R.t.QtMnkW),
                        onClick: I,
                        loading: m,
                    })
                  : (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(R.t["E8G/tr"]),
                        onClick: function () {
                            (0, sm.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, A.jsx)(e, { ...n, application: t, storeListing: i, subscription: l, guild: o });
                            });
                        },
                    }),
            f &&
                null != p &&
                !1 === r &&
                !1 === a &&
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: l,
                            alternativeListings: T,
                            app: t,
                            subscriptionGroup: p,
                            currentListing: i,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function mL(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, A.jsx)(mE, {
        children: (e) =>
            (0, A.jsxs)("div", {
                className: m_.PX,
                children: [
                    (0, A.jsxs)("div", {
                        className: m_.wV,
                        children: [
                            e && (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: R.intl.string(R.t.mORL67) }),
                            (0, A.jsx)(mE.Toggle, {
                                className: m_.Bh,
                                text: e ? R.intl.string(R.t.gsbFAw) : R.intl.string(R.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, A.jsx)(ma.FY, { header: i, icon: (0, mf.N)(t, l), description: s }, n);
                          })
                        : null,
                ],
            }),
    });
}
function mR(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: s, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, A.jsx)("div", {
                className: m_.Ji,
                children: (0, A.jsx)(t2.D, {
                    label: R.intl.string(R.t.azZaZa),
                    children: (0, A.jsx)(oo.y, { type: oo.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, A.jsx)("div", {
                  className: m_.Ji,
                  children: (0, A.jsxs)(mn.$T, {
                      color: mn.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          R.intl.format(R.t.IIHUUF, { subscriptionId: t.id }),
                          (0, A.jsx)("br", {}),
                          R.intl.format(R.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, A.jsx)("div", {
                  className: m_.Ji,
                  children: (0, A.jsx)(t2.D, {
                      label: R.intl.string(R.t.azZaZa),
                      children: (0, A.jsx)(gX.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
                  }),
              });
}
var mD = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
n(938796);
var mP = n(38405);
let mG = (0, E.UT)(uG.A, {
    getQueryId: S.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = uG.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && mP.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, dA.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var mM = n(240248),
    mU = n(237218),
    mV = n(763064);
function mk(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = h.useState(!1),
        [r, a] = h.useState(null),
        o =
            null != r &&
            (0, A.jsx)("button", {
                className: mV.x6,
                onClick: () => l((e) => !e),
                children: (0, A.jsxs)(H.E, {
                    className: mV.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? R.intl.string(R.t["JQX/Pb"]) : R.intl.string(R.t.Fbrd8J),
                        s
                            ? (0, A.jsx)(mm.t, { color: n2.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, A.jsx)(cX.a, { color: n2.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = h.useState(null),
        c = h.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    h.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let g = "auto";
    return (
        null != r && (g = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, A.jsxs)("div", {
            children: [
                (0, A.jsx)(H.E, {
                    ...i,
                    className: mV.Qs,
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
var mw = n(920352);
function mF(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = h.useMemo(() => (null == n.thumbnail ? null : (0, mU.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = mG(n.skuId),
        u = h.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dp._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, A.jsxs)(mr, {
              className: ic()(mw.iE, i),
              header: (0, A.jsxs)(A.Fragment, {
                  children: [
                      (0, A.jsxs)("div", {
                          className: mw.qd,
                          children: [
                              null != a &&
                                  (0, A.jsx)(mo._, { src: a.href, imageClassName: mw.rW, width: 48, height: 48 }),
                              (0, A.jsxs)("div", {
                                  children: [
                                      (0, A.jsx)(p.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, A.jsx)(H.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, mM.uJ)(r) &&
                      (0, A.jsx)("div", {
                          className: mw.h_,
                          children: (0, A.jsx)(mk, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, A.jsx)("div", {
                          className: mw.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, A.jsx)(ma.FY, { header: n, icon: (0, mf.N)(s, l), description: i }, t);
                          }),
                      }),
              ],
          });
}
var mB = n(185438),
    mz = n(683380);
function mX(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, mc.A)(t, 100),
        u = (0, mT.PJ)(r.flags),
        d = u ? mu.R : md.UserIcon,
        c = u ? R.intl.string(R.t["46YF2D"]) : R.intl.string(R.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, E.bG)([sI.A], () => (u && null != g ? sI.A.getGuild(g) : void 0), [g, u]),
        h = (0, E.bG)(
            [uM.A],
            () => {
                if (null != a) return uM.A.get(a);
            },
            [a],
        ),
        S = mI(n.currentPeriodEnd);
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsxs)("div", {
                className: mz.wx,
                children: [
                    null != o && (0, A.jsx)(mo._, { src: o.href, imageClassName: mz.Z2, width: 48, height: 48 }),
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, A.jsxs)("div", {
                                className: mz.p4,
                                children: [
                                    (0, A.jsxs)(p.D, {
                                        variant: "heading-md/normal",
                                        className: mz.N4,
                                        children: [(0, A.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, A.jsxs)(A.Fragment, {
                                            children: [
                                                (0, A.jsx)(H.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, A.jsxs)("span", {
                                                    className: mz.vP,
                                                    children: [
                                                        (0, A.jsx)(cT.Ay, { guild: m, size: cT.Ay.Sizes.SMOL }),
                                                        (0, A.jsx)(p.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: R.intl.format(R.t["7ZD8p1"], {
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
            (0, A.jsx)(mE, {
                children: (e) =>
                    (0, A.jsxs)("div", {
                        className: mz._B,
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/normal", children: R.intl.string(R.t["goe+hk"]) }),
                            e &&
                                (0, A.jsxs)(A.Fragment, {
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            variant: "text-md/normal",
                                            children: R.intl.format(R.t["Q8qJ+5"], {}),
                                        }),
                                        (0, A.jsx)(H.E, {
                                            variant: "text-md/normal",
                                            children: R.intl.format(R.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, A.jsx)(mE.Toggle, {
                                text: e ? R.intl.string(R.t["1Rkq/E"]) : R.intl.string(R.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, A.jsxs)("div", {
                className: mz.x0,
                children: [
                    (0, A.jsx)(mF, {
                        storeListing: i,
                        className: mz.o3,
                        cta: (0, A.jsxs)("div", {
                            className: mz.cJ,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: R.intl.string(R.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, A.jsx)(H.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["OQk+jr"], { endDate: S }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, A.jsx)(
                                  mF,
                                  {
                                      storeListing: e,
                                      cta: (0, A.jsx)(H.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: R.intl.format(R.t.nn88hB, { startDate: S }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, A.jsx)(mY, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function mY(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: s } = (0, mB.A)({
            analyticsLocation: S.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, A.jsx)(mF, {
        storeListing: t,
        cta: (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(R.t["+KwmBt"]), onClick: s }),
    });
}
class mH extends h.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, A.jsxs)(mn.$T, {
                  color: mn.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      R.intl.format(R.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      R.intl.format(R.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function mK(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, s] = h.useState({ route: mD.HOME }),
        { route: l } = i;
    function r() {
        s({ route: mD.HOME });
    }
    let a = (e) => {
            (s({ route: mD.SWITCH_APP_PLANS, ...e }), n(R.intl.string(R.t.VFqtkP), r));
        },
        [o, u] = h.useState({});
    h.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: mN.LOADING })),
                (0, mi._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: mN.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: mN.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, ms.E)(),
        c = d !== ms.mJ.LOADED;
    switch (l) {
        case mD.HOME:
            return (0, A.jsx)(A.Fragment, {
                children: t.map((e) =>
                    (0, A.jsx)(
                        mH,
                        {
                            subscription: e,
                            children: (0, A.jsx)(mC, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? mN.LOADING : (o[e.id] ?? mN.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case mD.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, A.jsx)(mX, { ...m, navigateToHome: r });
        default:
            (0, io.xb)(l);
    }
}
var mW = n(707989);
function mZ(e) {
    let { onGoBack: t } = e,
        n = (0, E.yK)(
            [oK.A],
            () =>
                oK.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, s] = h.useState();
    return (
        null == i && (i = (0, A.jsx)(mq, { onBack: t, title: R.intl.string(R.t["DB/m9a"]) })),
        (0, A.jsxs)("div", {
            children: [
                i,
                (0, A.jsx)("div", {
                    className: mW.A,
                    children: (0, A.jsx)(mK, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, A.jsx)(mq, {
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
function mq(e) {
    let { onBack: t, title: n } = e;
    return (0, A.jsxs)("div", {
        className: mW.D,
        children: [
            (0, A.jsx)(sl.K, {
                "aria-label": R.intl.string(R.t["13/7kX"]),
                icon: () => (0, A.jsx)(mt.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, A.jsx)(p.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var mQ = n(366999),
    mJ = n(391659);
function m$(e) {
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
        ? ((t = R.intl.string(d0.default["/S02sx"])), (n = R.intl.string(d0.default.OPJNST)))
        : i
          ? ((t = R.intl.string(R.t["hT6i/0"])),
            (n = null != a ? R.intl.format(R.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = R.intl.string(R.t["3G0CTC"])),
            (n = r === tZ.xc.FP_SUB_PAUSED ? R.intl.format(R.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ic()({ [mJ.Hs]: i, [mJ.mT]: !i }),
        d = ic()({ [mJ.CQ]: i, [mJ.ZM]: !i }),
        c = ic()({ [mJ.EM]: !i });
    return (0, A.jsxs)("div", {
        className: mJ.r6,
        children: [
            (0, A.jsxs)("div", {
                className: mJ.Nv,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, A.jsx)("div", {
                    className: mJ.ZS,
                    children: (0, A.jsx)("div", {
                        className: u,
                        children: (0, A.jsx)(H.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let m0 = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, ac.kX)(t),
        r = l.length > 0,
        a = (0, mQ.Ay)(t.endsAt, mQ.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, A.jsx)("div", {
        children: (0, A.jsxs)("div", {
            className: ic()(n, mJ.f8),
            children: [
                (0, A.jsx)("div", {
                    className: mJ.J_,
                    children: (0, A.jsxs)("div", {
                        className: mJ.Bh,
                        children: [
                            (0, A.jsx)("div", {
                                className: mJ.xt,
                                children: (0, A.jsx)(r9.t, { size: "md", color: "white", className: mJ.T8 }),
                            }),
                            (0, A.jsx)("div", {
                                className: mJ.pt,
                                children: (0, A.jsx)(p.D, {
                                    variant: "heading-md/semibold",
                                    children: R.intl.string(R.t.DFMPWS),
                                }),
                            }),
                            (0, A.jsx)(H.E, {
                                className: mJ.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : R.intl.string(R.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, A.jsx)(m$, {
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
var m1 = n(983048);
function m2(e) {
    let t,
        {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, E.yK)([uG.A], () => [uG.A.get(i), null != l ? uG.A.get(l.planId) : null]);
    if (null == o || ac.Ay.getInterval(i).intervalType !== tZ.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, ac.z4)(i),
        m = ac.Ay.getDisplayName(i);
    if (a) t = R.intl.string(d0.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === S.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, ac._e)(e, r);
        t = R.intl.formatToPlainString(R.t["5CNRRA"], { date: n ?? 0 });
    } else t = R.intl.formatToPlainString(R.t.eNXZ5O, { planName: m });
    let h = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, A.jsxs)("div", {
        className: mJ.Bh,
        children: [
            (0, A.jsx)("div", {
                className: ic()({
                    [mJ.bY]: g,
                    [mJ.sr]: o.skuId === tZ.pe.TIER_0,
                    [mJ.lP]: o.skuId === tZ.pe.TIER_1,
                    [mJ.eb]: o.skuId === tZ.pe.TIER_2,
                }),
                children: g
                    ? (0, A.jsx)(cn._, { size: "md", color: "currentColor", className: mJ.Kk })
                    : (0, A.jsx)(r9.t, { size: "md", color: "currentColor", className: mJ.Kk }),
            }),
            (0, A.jsxs)("div", {
                className: mJ.pt,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        children: R.intl.format(R.t.LzobT9, { planName: m }),
                    }),
                    !h &&
                        (0, A.jsx)(p.D, {
                            className: mJ.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, A.jsx)(H.E, {
                className: mJ.PJ,
                variant: "text-md/semibold",
                children: R.intl.format(R.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let m3 = function (e) {
    let { className: t, entitlements: n } = e,
        i = B()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, E.yK)([uI.A], () => uI.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, E.bG)([oK.A], () => oK.A.getPremiumSubscription()),
        r = (0, E.bG)([oK.A], () => null == oK.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tZ.gD.PREMIUM_MONTH_TIER_1),
        o = (0, E.bG)([lg.default], () => lg.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)("div", {
                className: ic()(t, mJ.xF, mJ.J_),
                children: Object.keys(i).map((e) =>
                    (0, A.jsx)(
                        m2,
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
                (0, A.jsxs)("div", {
                    children: [
                        (0, A.jsx)(H.E, {
                            className: mJ.eT,
                            variant: "text-md/normal",
                            children: R.intl.string(R.t["VNr4+O"]),
                        }),
                        (0, A.jsx)(m1.i, {}),
                    ],
                }),
        ],
    });
};
var m5 = n(902782);
function m4(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: s } = (0, ek.Ay)(),
        [l] = (0, gz.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: tM.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? m5.r : m5.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ac.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = uG.A.get(o);
    tg()(null != u, "Missing plan");
    let d = (0, dp.$g)(l.total, l.currency);
    return (
        u.interval === tZ.WT.YEAR
            ? (t = R.intl.format(R.t["jPz/39"], {
                  price: d,
                  termsUrl: S.X7G.TERMS,
                  paidURL: S.X7G.PAID_TERMS,
                  privacyUrl: S.X7G.PRIVACY,
              }))
            : u.interval === tZ.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? R.intl.format(R.t.m27GpI, {
                            price: d,
                            termsUrl: S.X7G.TERMS,
                            paidURL: S.X7G.PAID_TERMS,
                            privacyUrl: S.X7G.PRIVACY,
                        })
                      : R.intl.format(R.t["9xf5Vx"], {
                            price: d,
                            termsUrl: S.X7G.TERMS,
                            paidURL: S.X7G.PAID_TERMS,
                            privacyUrl: S.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, A.jsx)(H.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function m6(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === S.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, A.jsx)(m4, { subscription: t, withOverheadSeparator: n });
}
var m8 = n(963897),
    m7 = n(689255);
let m9 = { [eC.nR]: "role_subscriptions_panel", [eC.PZ]: "application_subscriptions_panel" };
function Ae() {
    return (0, A.jsx)(of.Z, {
        className: m7.wb,
        type: of.Z.Types.CUSTOM,
        children: (0, A.jsxs)(sx.A, {
            align: sx.A.Align.CENTER,
            children: [
                (0, A.jsx)(i6.A, { game: null, size: i6.M.SMALL, className: m7.pV }),
                (0, A.jsx)("span", { className: m7.O, children: R.intl.string(R.t["jy/hyj"]) }),
            ],
        }),
    });
}
function At(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, gl._)(e, t));
}
function An() {
    let e = (0, E.bG)([uI.A], () => uI.A.getForApplication(tZ.tv), [], At);
    return (
        h.useEffect(() => {
            (0, u$.LM)(tZ.tv);
        }, []),
        (0, A.jsx)(n5.n, {
            label: R.intl.string(R.t["2GKrvn"]),
            description: R.intl.string(R.t.Z5b2Gf),
            children:
                null != e && ac.Ay.hasAccountCredit(e)
                    ? (0, A.jsx)(m3, { className: m7.fX, entitlements: e })
                    : (0, A.jsx)(Ae, {}),
        })
    );
}
function Ai() {
    return (0, A.jsx)("hr", { className: m7.hr });
}
let As = function () {
        var e;
        let t = (0, E.bG)([oK.A], () => oK.A.getPremiumTypeSubscription()),
            n = (0, gr.A)({ subscriptionFilter: (e) => m8.Hy.has(e.status) }),
            i = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, E.bG)(
                [oH.A],
                () => (null != t && null != t.paymentSourceId ? oH.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, E.bG)([oK.A], () => oK.A.hasFetchedSubscriptions()),
            a = (0, E.bG)([oS.A], () => oS.A.isBusy),
            o = (0, dE.Y)(),
            u = gY.A.useField("subsection"),
            d = gY.A.useField("scrollToGameServers"),
            g = h.useRef(null);
        h.useEffect(() => {
            (0, it._)(null != u ? m9[u] : c.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let m = (0, E.bG)([oK.A], () => oK.A.getActiveApplicationSubscriptions()?.length ?? 0),
            x = (0, E.bG)(
                [oK.A],
                () =>
                    Object.values(oK.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === S.rzx.GUILD)
                        .filter((e) => e.status !== S.Dmq.ENDED).length,
            ),
            T = (0, E.bG)([oK.A], () =>
                Object.values(oK.A.getSubscriptions() ?? {}).some((e) => e.type === S.rzx.GAME_SERVER),
            ),
            { servers: f } = (0, gv.f)({ enabled: T }),
            I = (0, E.yK)([oK.A], () => (0, gS.eP)(f, (e) => oK.A.getSubscriptionById(e)), [f]),
            _ = (0, dh.A)({ forceFetch: !0 }),
            N = (0, df.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            b =
                !(N && !(_.unactivatedUnits.length > 0)) &&
                (_.fractionalState !== tZ.xc.NONE || _.unactivatedUnits.length > 0);
        return (h.useEffect(() => {
            d &&
                r &&
                o &&
                I.length > 0 &&
                (g.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                gY.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, I.length]),
        h.useEffect(
            () => (
                te.h.wait(() => {
                    ((0, dA.zS)(), oA.hP(), (0, ci.CD)(), oA.$o());
                }),
                function () {
                    gY.A.resetState();
                }
            ),
            [],
        ),
        tl.A.enabled)
            ? (0, A.jsx)(or.A, {})
            : r && o
              ? u === eC.nR
                  ? (0, A.jsx)(g8, { onGoBack: () => gY.A.setState({ subsection: null }) })
                  : u === eC.PZ
                    ? (0, A.jsx)(mZ, { onGoBack: () => gY.A.setState({ subsection: null }) })
                    : (0, A.jsx)("div", {
                          className: m7.kL,
                          children: (0, A.jsxs)("div", {
                              className: m7.Qs,
                              children: [
                                  s ? (0, A.jsx)(m8.Sb, {}) : null,
                                  null != t
                                      ? (0, A.jsx)(m8.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, A.jsx)(m8.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, A.jsxs)("section", {
                                          children: [
                                              (0, A.jsx)(p.D, {
                                                  variant: "heading-md/bold",
                                                  className: m7.HL,
                                                  children: R.intl.string(R.t.Obre8v),
                                              }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-md/normal",
                                                  className: m7.JU,
                                                  children: R.intl.format(R.t["7Zi06b"], {
                                                      helpCenterLink: eT.A.getArticleURL(
                                                          S.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, A.jsx)(m0, {
                                                  className: m7.fX,
                                                  fractionalPremiumInfo: _,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, A.jsx)(An, {}),
                                  x > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(Ai, {}),
                                              (0, A.jsx)(gL, {
                                                  count: x,
                                                  onClickManageSubscription: () => gY.A.setState({ subsection: eC.nR }),
                                              }),
                                          ],
                                      }),
                                  m > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(Ai, {}),
                                              (0, A.jsx)(me, {
                                                  count: m,
                                                  onClickManageSubscription: () => {
                                                      (gY.A.setState({ subsection: eC.PZ }),
                                                          tr.default.track(
                                                              S.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  I.length > 0 &&
                                      (0, A.jsxs)("div", {
                                          ref: g,
                                          children: [(0, A.jsx)(Ai, {}), (0, A.jsx)(gy, { servers: I })],
                                      }),
                                  (0, A.jsx)(Ai, {}),
                                  null != t ? (0, A.jsx)(m6, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, A.jsx)("div", { className: ic()(m7.kL, m7.Lq), children: (0, A.jsx)(oo.y, {}) });
    },
    Al = (0, d.E2)(c.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        Component: () => (0, A.jsx)(As, {}),
    }),
    Ar = (0, d.zZ)(c.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        buildLayout: () => [Al],
    }),
    Aa = (0, d.t_)(c.X.SUBSCRIPTIONS_PANEL, { useTitle: () => R.intl.string(R.t.trSpHX), buildLayout: () => [Ar] }),
    Ao = (0, d.i4)(c.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.trSpHX),
        icon: gi.L,
        usePersistentBadge: function () {
            let e = (0, gs.l)();
            return h.useMemo(
                () => ({
                    badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, A.jsx)(iQ.E, { size: "xs", color: n2.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [Aa],
    }),
    Au = (0, d.WI)(c.X.BILLING_SECTION, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [ct, gn, Ao, da, o5],
    });
var Ad = n(540999),
    Ac = n(306471),
    Ag = n(964355),
    Am = n(172272);
let AA = (0, d.zD)(c.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, E.bG)([ri.default], () => ri.default.isAxeEnabled),
        setValue: (e) => (0, rn.x)({ axeEnabled: e }),
    }),
    Ah = (0, d.zD)(c.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rn.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var AE = n(276086),
    AS = n(354328);
let Ax = (0, d.zD)(c.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, AS.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, AE.L)("highlight_mana_components", e);
        },
    }),
    Ap = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, AS.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, AE.L)("highlight_mana_text_overrides", e);
        },
    }),
    AT = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, AS.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, AE.L)("highlight_mana_text", e);
        },
    }),
    Af = (0, d.zD)(c.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, AS.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, AE.L)("highlight_void_toggleables", e);
        },
    }),
    AI = (0, d.sN)(c.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, E.bG)([ri.default], () => ri.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Am.YR,
        markers: Array.from({ length: Am.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Am.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            Am.Or.getState().setHorizontalSpacing(e);
        },
    }),
    A_ = (0, d.zD)(c.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rn.x)({ layoutDebuggingEnabled: e });
        },
    }),
    AN = (0, d.sN)(c.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, E.bG)([ri.default], () => ri.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Am.YR,
        markers: Array.from({ length: Am.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Am.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            Am.Or.getState().setVerticalSpacing(e);
        },
    }),
    AC = (0, d.zZ)(c.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [Ah, A_, AI, AN, Ax, AT, Ap, Af, AA],
    });
var Ab = n(246605),
    Ay = n(274184);
let Av = (0, d.E2)(c.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, E.bG)([Ay.Ay], () => Ay.Ay.getActionTriggeredSurveyOverride());
            return (0, A.jsx)(A7, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ab.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    Aj = (0, d.zD)(c.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var AO = n(396478),
    AL = n(173936),
    AR = n(103557),
    AD = n(414079),
    AP = n(148810),
    AG = n(380610),
    AM = n(986238),
    AU = n(428524),
    AV = n(252149),
    Ak = n(221851);
let Aw = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    AF = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function AB(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class Az extends h.Component {
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
        return (0, A.jsxs)(sx.A, {
            direction: sx.A.Direction.VERTICAL,
            className: ic()(AU.oS, Ak.SX, AV.N, AU.nM),
            children: [
                (0, A.jsx)(AD.A, {
                    className: ic()(AU.lL, { [AU.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, A.jsxs)(sx.A, {
                    className: Ak.QB,
                    children: [
                        (0, A.jsx)(sx.A.Child, {
                            basis: "50%",
                            children: (0, A.jsx)(ss.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: AF,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, A.jsx)(sx.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, A.jsx)(sA.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, A.jsxs)(sx.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, A.jsx)(H.E, {
                                className: AU.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, A.jsxs)(H.E, {
                            variant: "text-sm/normal",
                            className: AU.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, A.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class AX extends h.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, AG.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: B().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !B().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return B().without(Aw, ...t);
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
        this.setState({ buildOverrides: B().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, AP.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: B().cloneDeep(e),
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
        (0, sm.openModal)((t) => (0, A.jsx)(AY, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, A.jsx)(AO.pp, {
            theme: nB.A.theme,
            className: ic()(Ak.eT, Ak.SX),
            children: (0, A.jsx)(AO.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : B().map(e, (e, i) =>
                  (0, A.jsx)(
                      Az,
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
            : (0, A.jsx)(_.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, A.jsx)(sa.m, {
                  text: "Generate Public Link",
                  children: (0, A.jsx)(sl.K, {
                      variant: "secondary",
                      icon: AL.LinkIcon,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(_.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: AB(t ?? {}),
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
            ? (0, A.jsx)(oo.y, { className: Ak.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                AB(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, A.jsx)(H.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, A.jsx)(n5.n, {
            children: (0, A.jsxs)(X.B, {
                gap: 16,
                children: [
                    (0, A.jsx)(ss.l, {
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
                    (0, A.jsxs)(lQ.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class AY extends h.Component {
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
        e.key === sD.dh.ENTER && this.handleAddAllowedVersion();
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
            experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments),
        },
    });
    handleGenerateLink = async () => {
        if (this.isMobile() && 0 === this.state.allowedVersions.length)
            return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
        this.setStatusMessage(null);
        let e = this.generatePayload(),
            t = await (0, AP.SB)(e);
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
        return AB(this.props.buildOverrides ?? {});
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
            d = AM.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, A.jsxs)(X.B, {
            gap: 20,
            children: [
                (0, A.jsx)(ss.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: AM.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, A.jsx)(ss.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: AM.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, A.jsxs)(X.B, {
                          gap: 20,
                          children: [
                              (0, A.jsx)(sA.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iH.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, A.jsx)(ss.l, {
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
                    : (0, A.jsx)(AR.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, A.jsx)(AR.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, A.jsx)(t3.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, A.jsx)("div", {});
        let n = ae.Y.INFO;
        switch (t) {
            case 0:
                n = ae.Y.ERROR;
                break;
            case 1:
                n = ae.Y.WARNING;
        }
        return (0, A.jsx)(ae.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, A.jsx)(sg.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, A.jsx)(uW.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let AH = (0, d.E2)(c.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: AX });
var AK = n(256311),
    AW = n(883600);
let AZ = (0, d.E2)(c.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, E.bG)([AW.A], () => AW.A.overrideId());
        async function t(e) {
            let t = AW.A.getChangelog(e, "en-US");
            return null != t ? t : ((await AK.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, A.jsx)(A7, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => AK.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var Aq = n(506774);
let AQ = new Date("2018-01-01"),
    AJ = (0, d.Tf)(c.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === op.default.fromTimestamp(AQ.getTime()),
        onClick: () => (Aq.w.set("lastChangeLogDate", AQ), L.pK.updateSetting(op.default.fromTimestamp(AQ.getTime()))),
    }),
    A$ = (0, d.zD)(c.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, E.bG)([ri.default], () => ri.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, E.bG)(
                [ri.default],
                () => ri.default.disableAppCollectionsCache || ri.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, rn.x)({ disableAppCollectionsCache: e }),
    }),
    A0 = (0, d.zD)(c.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.isForcedCanary),
        setValue: (e) => {
            (0, rn.x)({ canary: e });
        },
    }),
    A1 = (0, d.zD)(c.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.sourceMapsEnabled),
        setValue: (e) => (0, rn.x)({ sourceMapsEnabled: e }),
    }),
    A2 = (0, d.zD)(c.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rn.x)({ onlyShowPreviewAppCollections: e }),
    });
var A3 = n(10094),
    A5 = n(683760);
let A4 = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tZ.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tZ.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tZ.PremiumTypes.TIER_2 },
    ],
    A6 = (0, d.Hn)(c.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => A4,
        clearable: !0,
        useValue: () =>
            (0, E.bG)([A5.A], () => {
                let e = A5.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, A3.O)(null, void 0)
                : null === e
                  ? (0, A3.O)(void 0, void 0)
                  : (0, A3.O)(0 === e ? null : e, void 0);
        },
    }),
    A8 = (0, d.E2)(c.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, E.bG)([Ay.Ay], () => Ay.Ay.getSurveyOverride());
            return (0, A.jsx)(A7, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ab.xr(e),
                fetchOverride: (e) => Ab.BC(e, !0) ?? null,
            });
        },
    });
function A7(e) {
    let { label: t, description: n, placeholder: i, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = h.useState(s ?? ""),
        u = h.useRef(null),
        [d, c] = h.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        h.useEffect(() => g, []),
        (0, A.jsx)(t2.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, A.jsx)(sA.k, {
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
let A9 = (0, d.zZ)(c.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [A6, A8, Av, AZ, AJ, A0, Aj, A2, A$, A1, AH],
        useInlineNotice: () => ({
            type: m.lT.INLINE_NOTICE,
            noticeType: "info",
            text: R.intl.format(R.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    he = (0, d.zD)(c.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rn.x)({ logAnalyticsEvents: e }),
    }),
    ht = (0, d.zD)(c.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rn.x)({ logGatewayEvents: e }),
    }),
    hn = (0, d.zD)(c.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.preventPopoutClose),
        setValue: (e) => (0, rn.x)({ preventPopoutClose: e }),
    }),
    hi = (0, d.zD)(c.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.logKeyboardMismatches),
        setValue: (e) => (0, rn.x)({ logKeyboardMismatches: e }),
    }),
    hs = (0, d.zD)(c.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rn.x)({ logOverlayEvents: e }),
    }),
    hl = (0, d.zD)(c.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.isLoggingQuestEvents),
        setValue: (e) => (0, rn.x)({ logQuestEvents: e }),
    }),
    hr = (0, d.zD)(c.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, E.bG)([ri.default], () => ri.default.isTracingRequests),
        setValue: (e) => (0, rn.x)({ trace: e }),
    }),
    ha = (0, d.zZ)(c.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [ht, hs, hr, he, hi, hn, hl] }),
    ho = (0, d.t_)(c.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [A9, ha, AC],
    }),
    hu = (0, d.i4)(c.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Ac.V,
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
                    isStaff: g,
                } = (0, E.cf)([ri.default, Ad.A, lg.default], () => ({
                    layoutDebuggingEnabled: ri.default.layoutDebuggingEnabled,
                    isDeveloper: Ad.A.isDeveloper,
                    isLoggingGatewayEvents: ri.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: ri.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: ri.default.isLoggingAnalyticsEvents,
                    isTracingRequests: ri.default.isTracingRequests,
                    isForcedCanary: ri.default.isForcedCanary,
                    isSourceMapsEnabled: ri.default.sourceMapsEnabled,
                    isAxeEnabled: ri.default.isAxeEnabled,
                    preventPopoutClose: ri.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: ri.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: ri.default.disableAppCollectionsCache,
                    isStaff: lg.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: m, verticalSpacing: h } = (0, Am.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: x } = Am.Or.getState(),
                p = L.HZ.useSetting();
            return t
                ? [
                      (0, A.jsxs)(
                          e7.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, no.openUserSettings)(c.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e7.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: p,
                                          action: () => {
                                              L.HZ.updateSetting(!p);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, A.jsx)(
                                      e7.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, rn.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, A.jsx)(
                                      e7.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, rn.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, A.jsx)(
                                      e7.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: d,
                                          action: () => {
                                              (0, rn.x)({ disableAppCollectionsCache: !d });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, A.jsxs)(
                          e7.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, no.openUserSettings)(c.X.LOGGING);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e7.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, rn.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, A.jsx)(
                                      e7.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, rn.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, A.jsx)(
                                      e7.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, rn.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, A.jsx)(
                                      e7.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, rn.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, A.jsx)(
                                      e7.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, rn.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, A.jsxs)(
                          e7.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, no.openUserSettings)(c.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e7.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, rn.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, A.jsx)(
                                      e7.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, rn.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(
                                                  e7.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, A.jsx)(Ag.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: Am.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, A.jsx)(
                                                  e7.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, A.jsx)(Ag.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: Am.YR,
                                                              onChange: (e) => x(e),
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
                      g
                          ? (0, A.jsx)(
                                e7.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => lc() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [ho],
    });
var hd = n(127062),
    hc = n(25044),
    hg = n(80703),
    hm = n(123292),
    hA = n(857250),
    hh = n(683438),
    hE = n(890856),
    hS = n(100392),
    hx = n(102609),
    hp = n(271478),
    hT = n(710195),
    hf = n(386976),
    hI = n(257433),
    h_ = n(32523),
    hN = n(96919),
    hC = n(688151),
    hb = n(863763);
function hy(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: s } = e,
        [l, r] = h.useState(s),
        [a, o] = h.useState(!1),
        u = h.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, E.bG)([uD.default], () => uD.default.getId()),
        c = (0, E.bG)([uD.default], () => {
            let e = uD.default.getInstallationForTracking();
            return null == e ? null : (0, hg.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, hI.iN)(t, g),
        S = (0, hI.Fm)(t, g),
        x = (0, E.yK)([rd.A], () =>
            B()
                .sortBy(rd.A.getRecentExposures(hC.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        p = h.useCallback(
            (e) => {
                (0, uV.C)((0, hS.yA)(n), () => {
                    ((0, lr.P)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: la.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        T = (0, A.jsx)(hE.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: hb.DD,
                children: [
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsxs)(X.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uV.p5 &&
                                        (0, A.jsx)(n4.D, {
                                            onClick: p,
                                            children: (0, A.jsx)(AL.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", {
                        className: hb.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, A.jsx)("div", { className: hb.Os, children: T });
    let f = "";
    return (
        (f =
            t.system === hx.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? hC.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, A.jsxs)("div", {
            className: hb.Os,
            children: [
                T,
                (0, A.jsx)("div", {
                    children: (0, A.jsx)(hp.g, {
                        label: t.system === hx.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, A.jsx)("div", {
                    className: hb.h_,
                    children:
                        null == S
                            ? (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, A.jsxs)("div", {
                          children: [
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: hb.id,
                                  children: "Server Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: hb.AS,
                                  children: null == S ? "None" : JSON.stringify(S, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: hb.id,
                                  children: "Override Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: hb.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: hb.id,
                                  children: "Recent Exposures",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: hb.AS,
                                  children: 0 === x.length ? "None" : x.join("\n"),
                              }),
                          ],
                      })
                    : (0, A.jsx)("div", {
                          className: hb.id,
                          children: (0, A.jsx)(hm.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, A.jsx)(si.c, { className: hb.yF }),
            ],
        })
    );
}
function hv(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [s, l] = h.useState(null != i),
        [r, a] = h.useState(!1),
        o = h.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, E.bG)([rd.A], () => rd.A.getLoadedGuildExperiment(n)),
        d = (0, E.bG)([rd.A, sI.A, hT.A], () => {
            if (t.system === hx.l5.LEGACY) return null == rd.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sI.A.getGuildsArray().some((t) => null != hT.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, E.yK)([rd.A], () =>
            B()
                .sortBy(rd.A.getRecentExposures(hC.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, E.yK)([uD.default, sI.A, rd.A, hT.A], () => {
            let e = t.system === hx.l5.LEGACY,
                i = t.name,
                s = uD.default.getId(),
                l = B().sortBy(sI.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (rd.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? hC.RE.NOT_ELIGIBLE)
                    : (hT.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? hC.RE.NOT_ELIGIBLE);
                (l in r || (r[l] = 0), r[l]++, a.push(`${t.name}: ${l}`));
            }
            let o = B()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        S = t.system !== hx.l5.LEGACY,
        x = (0, E.yK)([sI.A], () => B().sortBy(sI.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [p, T] = h.useState(() => s_.A.getGuildId() ?? s_.A.getLastSelectedGuildId()),
        f = x.find((e) => e.id === p)?.name,
        I = (0, E.bG)(
            [hT.A],
            () => {
                if (S && null != p) return hT.A.getServerAssignment("guild", p, t.name);
            },
            [S, p, t.name],
        ),
        _ = (0, E.bG)([hT.A, uD.default], () => {
            if (!S) return;
            let e = uD.default.getId();
            return hT.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, A.jsx)(n4.D, {
            onClick: o,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: hb.DD,
                children: [
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)("span", { children: t.title }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", { className: hb.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, A.jsxs)("div", {
              className: hb.Os,
              children: [
                  C,
                  (0, A.jsx)(hp.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  S &&
                      x.length > 0 &&
                      (0, A.jsx)("div", {
                          className: hb.h_,
                          children: (0, A.jsx)(ss.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: p ?? void 0,
                              options: x.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => T(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, A.jsx)("div", {
                      className: hb.h_,
                      children: d
                          ? (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === hx.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  S &&
                      (0, A.jsxs)("div", {
                          children: [
                              (0, A.jsxs)(H.E, {
                                  variant: "text-lg/medium",
                                  className: hb.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: hb.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: hb.id,
                                  children: "Client Eligibility",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: hb.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: hb.id,
                                    children: "Guild Assignments",
                                }),
                                (0, A.jsx)(H.E, { variant: "code", className: hb.AS, children: g }),
                                t.system === hx.l5.LEGACY &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-lg/medium",
                                                className: hb.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, A.jsx)(H.E, {
                                                variant: "code",
                                                className: hb.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: hb.id,
                                    children: "Override Descriptor",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: hb.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: hb.id,
                                    children: "Recent Exposures",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: hb.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, A.jsx)("div", {
                            className: hb.id,
                            children: (0, A.jsx)(hm.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, A.jsx)(si.c, { className: hb.yF }),
              ],
          })
        : (0, A.jsx)("div", { className: hb.Os, children: C });
}
let hj = (0, d.E2)(c.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, hf.op)(),
                { experiments: n, overridesInfo: i } = (0, h_.hI)(),
                s = h.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = h.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, E.bG)([uD.default], () => {
                    let e = uD.default.getInstallationForTracking();
                    return null == e ? null : (0, hg.v)(e);
                }),
                [a, o] = h.useState(""),
                u = (0, hN.oC)((0, hN.R3)((0, hN.Fm)(s), l), a);
            return (0, A.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, A.jsxs)(X.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, A.jsxs)(H.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uV.p5 &&
                                    (0, A.jsx)(hm.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uV.C)(r, () => {
                                                (0, lr.P)((0, hA.o)("Installation ID copied!", la.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, A.jsx)(hh.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? hv : hy;
                              return (0, A.jsx)(
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
                        : (0, A.jsx)("div", {
                              className: hb.p$,
                              children: (0, A.jsx)(p.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    hO = (0, d.zZ)(c.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [hj] }),
    hL = (0, d.t_)(c.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [hO] }),
    hR = (0, d.i4)(c.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: hd.c,
        useMenu: hc.A,
        buildLayout: () => [hL],
    }),
    hD = (0, d.WI)(c.X.DEVELOPER_SECTION, {
        useTitle: () => R.intl.string(R.t["+gHUHA"]),
        usePredicate: () => Ad.A.isDeveloper,
        buildLayout: () => [hR, hu],
    });
var hP = n(682348),
    hG = n(871633),
    hM = n(751075),
    hU = n(843402);
let hV = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function hk() {
    let e = (0, E.yK)([i3.Ay], () => i3.Ay.getGamesSeen(!1)),
        t = (0, E.bG)([i3.Ay], () => hV(...i3.Ay.getOverrides()));
    h.useEffect(() => {
        if (e2.isPlatformEmbedded) return ((0, hU.a2)(), hU.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = h.useMemo(
        () =>
            e.reduce((e, t) => ((0, hG.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function hw(e) {
    let { gameHistory: t } = hk();
    return {
        namedGames: h.useMemo(
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
function hF(e) {
    let { namedGames: t, totalCount: n } = hw(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function hB() {
    let { namedGames: e } = hw(2),
        [t, n] = h.useMemo(() => e.map((e) => e.id), [e]);
    h.useEffect(() => {
        mS.Ay.fetchApplications([t, n].filter(io.Vq));
    }, [t, n]);
    let [i, s] = (0, E.yK)([i0.A], () => [t, n].map(i0.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, A.jsx)(i6.A, { game: i, size: i6.M.MEDIUM_LARGE }), shape: hM.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, A.jsx)(i6.A, { game: s, size: i6.M.MEDIUM }), shape: hM.e0.ROUNDED } : null,
          };
}
let hz = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = hF(2);
            return R.intl.format(R.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = hB();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, E.bG)([i3.Ay], () => i3.Ay.getGamesSeen(!1).some((e) => !(0, hG.n1)(e))) && (0, nS.xl)(),
    }),
    hX = (0, d.gN)(c.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [hz] });
var hY = n(311059),
    hH = n(406535),
    hK = n(57129);
let hW = (0, d.zD)(c.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => R.intl.string(hK.default.A0FVCV),
        useSubtitle: () => R.intl.string(hK.default.vHX6RG),
        useValue: L.hV.useSetting,
        setValue: function (e) {
            (L.hV.updateSetting(e),
                tr.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hH.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    hZ = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => R.intl.string(R.t.WmsPis),
        useSearchTerms: () => [R.intl.string(R.t["8ka8li"])],
        buildLayout: () => [hY._, hW, hX],
    }),
    hq = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.J0SFL2),
        destinationKey: c.X.DATA_AND_PRIVACY_PANEL,
    }),
    hQ = (0, d.gN)(c.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [hq] });
var hJ = n(365258);
let h$ = (0, d.Qx)(c.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => R.intl.string(hK.default["/LHVbt"]),
    useSubtitle: () => R.intl.string(R.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eK.Qd.ACTIVITY_STATUS_OFF, name: R.intl.string(hK.default.m3oL7Q) },
            { value: eK.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: R.intl.string(hK.default["5+lnTA"]) },
            { value: eK.Qd.ACTIVITY_STATUS_ON, name: R.intl.string(hK.default["egr+VZ"]) },
        ];
    },
    useValue: L._Z.useSetting,
    setValue: function (e) {
        let t = L._Z.getSetting();
        L._Z.updateSetting(e);
        let i = (0, hJ.g8)(t, e);
        if (null == i) return;
        let s = (0, hJ.Xc)(e);
        (0, sm.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, A.jsx)(e, { ...t, direction: i.direction, affectedGuildIds: i.affectedGuildIds, settingName: s });
        });
    },
});
var h0 = n(498642),
    h1 = n(573435),
    h2 = n(260509),
    h3 = n(771810);
function h5(e) {
    let { guild: t, size: n } = e,
        i = (0, h2.Iv)(t, n, !1, !0),
        s = (0, h2.Rb)(t);
    return null != i
        ? (0, A.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, A.jsx)("div", {
              className: h3.F,
              children: (0, A.jsx)(H.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function h4(e) {
    let { guild: t, size: n } = e;
    return (0, A.jsx)(h1.Ay, {
        className: h3.z,
        mask: h1.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, A.jsx)(h5, { guild: t, size: n }),
    });
}
var h6 =
    (((r = {}).SERVER_ORDER = "server-order"),
    (r.RECENTLY_JOINED = "recently-joined"),
    (r.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (r.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    r);
let h8 = {
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
var h7 = n(618118);
function h9(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        s = (0, E.bG)([h0.A], () => h0.A.getMemberCount(t.id));
    return (0, A.jsxs)(X.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, A.jsx)("div", { className: h7.FO, children: (0, A.jsx)(h4, { guild: t, size: 48 }) }),
            (0, A.jsx)("div", {
                className: h7.QH,
                children: (0, A.jsx)(t3.d, {
                    label: t.name,
                    description: R.intl.format(R.t.zRl6XR, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let Ee = function (e) {
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
            let [e, t] = (0, h.useState)(""),
                [n, i] = (0, h.useState)("server-order"),
                s = (0, E.bG)([co.Ay], () => co.Ay.getFlattenedGuildIds()),
                l = (0, E.bG)([sI.A], () => sI.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = L.Pw.useSetting(),
                [o, u] = (0, h.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await L.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, h.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [g, m] = (0, h.useState)(() => h8[n](r, a)),
                A = g.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(h8[e](r, a)), i(e));
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
        m = (0, h.useId)(),
        x = (0, h.useRef)(null),
        p = (0, h.useMemo)(
            () => [
                { id: h6.SERVER_ORDER, label: R.intl.string(R.t.STMPJ2), value: h6.SERVER_ORDER },
                { id: h6.RECENTLY_JOINED, label: R.intl.string(R.t.CbaapP), value: h6.RECENTLY_JOINED },
                { id: h6.ACTIVITY_SHARING_ON, label: R.intl.string(hK.default.ZI51JZ), value: h6.ACTIVITY_SHARING_ON },
                {
                    id: h6.ACTIVITY_SHARING_OFF,
                    label: R.intl.string(hK.default["+kxafn"]),
                    value: h6.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        T = p.find((e) => e.value === l)?.label ?? "";
    return (0, A.jsxs)("div", {
        className: h7.iE,
        children: [
            t,
            (0, A.jsxs)("div", {
                className: h7.N1,
                children: [
                    (0, A.jsx)(hh.I, {
                        query: i,
                        onChange: s,
                        onClear: function () {
                            (tr.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                s(""));
                        },
                        onFocus: () =>
                            tr.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            tr.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        placeholder: R.intl.string(R.t["H+nRYw"]),
                        "aria-label": R.intl.string(R.t["5h0QOP"]),
                        inputProps: { "aria-controls": m, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, A.jsxs)("div", {
                            className: h7.gO,
                            children: [
                                (0, A.jsx)(ao.Y, {
                                    targetElementRef: x,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, A.jsx)(cE.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": R.intl.string(R.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, A.jsx)(e7.rX, {
                                                children: p.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, A.jsx)(
                                                        e7.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: l === i,
                                                            action: () => {
                                                                (tr.default.track(
                                                                    S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
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
                                        (0, A.jsxs)(n4.D, {
                                            ...e,
                                            innerRef: x,
                                            className: h7.Ku,
                                            children: [
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: T,
                                                }),
                                                (0, A.jsx)(cX.a, { size: "xs", color: n2.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, A.jsx)(hm.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? R.intl.string(R.t["7lxcLO"]) : R.intl.string(R.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, A.jsx)(so.A, {
                "aria-live": "polite",
                role: "region",
                children: R.intl.format(hK.default.EvzDff, { count: n.length }),
            }),
            (0, A.jsxs)("ul", {
                className: h7.X1,
                id: m,
                "aria-label": R.intl.string(R.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, A.jsx)("div", {
                            className: h7.pb,
                            children: (0, A.jsx)(H.E, {
                                className: h7.R$,
                                variant: "text-lg/medium",
                                children: R.intl.string(R.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, A.jsx)(
                            h9,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var Et = n(68322);
let En = (0, d.E2)(c.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [R.intl.string(hK.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, A.jsx)("div", {
                      className: Et.l,
                      children: (0, A.jsx)(iW.w, { type: "warning", children: R.intl.string(hK.default["xxI0/W"]) }),
                  });
            return (0, A.jsx)(Ee, { notice: e });
        },
    }),
    Ei = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bwqjL9),
        buildLayout: () => [h$, En, hQ],
    }),
    Es = (0, d.zD)(c.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => R.intl.string(hK.default.khuuzv),
        useSubtitle: () => R.intl.string(hK.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    El = (0, d.E2)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, A.jsx)(H.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: R.intl.format(R.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, A.jsx)(
                            H.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    Er = (0, d.zD)(c.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => R.intl.string(hK.default.Uz5Ipi),
        useSubtitle: () => R.intl.string(hK.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    Ea = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => R.intl.string(hK.default["89YBr5"]),
        useSubtitle: () => R.intl.string(R.t.uGDpgH),
        buildLayout: () => [Es, Er, El],
        useSearchTerms: () => [R.intl.string(R.t.VOszPA)],
    }),
    Eo = (0, d.t_)(c.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        buildLayout: () => [hZ, Ei, Ea],
    }),
    Eu = (0, d.i4)(c.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        icon: hP._,
        buildLayout: () => [Eo],
    });
var Ed = n(712440),
    Ec = n(370997);
let Eg = (0, d.E2)(c.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Ec.Ay,
    useSearchTerms: () => [R.intl.string(R.t["f6kk+r"])],
});
var Em = n(478016),
    EA = n(789645),
    Eh = n(77468),
    EE = n(289498),
    ES = n(573648),
    Ex = n(874490),
    Ep = n(370480),
    ET = n(968309);
let Ef = new Set([S.fg2.XBOX, S.fg2.PLAYSTATION, S.fg2.PLAYSTATION_STAGING, S.fg2.CRUNCHYROLL]);
var EI = n(169869),
    E_ = n(814925),
    EN = n(733110),
    EC = n(479785),
    Eb = n(757036),
    Ey = n(555837),
    Ev = n(43990),
    Ej = n(241524),
    EO = n(51965),
    EL = n(377368),
    ER = n(631368),
    ED = n(212739),
    EP = n(30370),
    EG = n(181666),
    EM = n(553875),
    EU = n(660594);
function EV() {
    let e,
        t,
        i,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, ER.$)()),
            (t = (0, ED.O)()),
            (s = null != (i = (0, E.bG)([EP.A], () => EP.A.getAccount(null, S.fg2.XBOX))) && !i.revoked),
            e === ER.C.NONE || t
                ? { variant: ER.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === ER.C.NO_ACCESS && !s }),
        { analyticsLocations: a } = (0, ek.Ay)(tM.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, EL.yW)(a),
        u = (0, Ej.A)("(max-width: 485px)");
    if (l === ER.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (l) {
        case ER.C.HAS_ACCESS:
        case ER.C.BLOCK_CLAIM:
            ((c = R.intl.string(EM.default["7PdsMK"])),
                (g = (0, A.jsx)(EO.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: R.intl.string(EM.default.CubeLC),
                    onClick: () => {
                        (0, sm.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, A.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case ER.C.NO_ACCESS:
            ((c = R.intl.string(EM.default.NwkRTZ)),
                (g = (0, A.jsx)(tF.A, {
                    defaultTextOverride: R.intl.string(EM.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tZ.pe.TIER_2,
                })));
            break;
        default:
            (0, io.xb)(l);
    }
    return (0, A.jsxs)(ek.f5, {
        value: a,
        children: [
            (0, A.jsxs)("div", {
                className: EU.bV,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: R.intl.string(R.t.NG1e6l),
                    }),
                    (0, A.jsx)(r9.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, A.jsx)(Ev.N, {
                theme: S.NJ8.DARK,
                children: (e) =>
                    (0, A.jsx)("div", {
                        className: e,
                        children: (0, A.jsxs)("div", {
                            className: EU.Nr,
                            children: [
                                (0, A.jsxs)("div", {
                                    className: EU.Tp,
                                    children: [
                                        (0, A.jsx)("div", {
                                            className: EU.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, A.jsx)("div", { className: EU.$h }),
                                        (0, A.jsx)("div", { className: EU.Rv }),
                                        (0, A.jsx)("div", { className: EU.Lw }),
                                    ],
                                }),
                                (0, A.jsxs)("div", {
                                    className: EU.Mn,
                                    children: [
                                        (0, A.jsxs)("div", {
                                            className: EU.mY,
                                            children: [
                                                (0, A.jsx)("img", {
                                                    className: EU.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: EU.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, A.jsx)("div", { className: EU.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)("div", { className: EU.yF }),
                                            (0, A.jsxs)("div", {
                                                className: EU.sQ,
                                                children: [
                                                    (0, A.jsx)(o6.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: n2.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, A.jsx)(H.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: R.intl.format(EG.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(EL.Hx.CONNECT),
                                                                    (0, ET.A)({
                                                                        platformType: S.fg2.XBOX,
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
var Ek = n(201718),
    Ew = n(321078),
    EF = n(672130),
    EB = n(379848),
    Ez = n(688901);
function EX(e) {
    let { markAsDismissed: t } = e;
    return (
        h.useEffect(() => t(gT.i.AUTO_DISMISS), [t]),
        (0, A.jsx)(ta.Lp, { className: Ez.Ad, text: R.intl.string(R.t.y2b7CA) })
    );
}
function EY(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, A.jsxs)("div", {
        className: Ez.kL,
        children: [
            i,
            (0, A.jsxs)("div", {
                className: Ez.FS,
                children: [
                    (0, A.jsxs)("div", {
                        className: Ez.TK,
                        children: [
                            (0, A.jsx)(EB.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, A.jsx)(EX, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, A.jsx)(H.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, A.jsx)(H.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, A.jsx)(_.$, { text: R.intl.string(R.t.vD60Pv), onClick: l }),
        ],
    });
}
function EH() {
    let e = eT.A.getArticleURL(S.MVz.PS_CONNECTION);
    return (0, A.jsx)(EY, {
        title: R.intl.string(R.t.v20wwm),
        body: R.intl.format(R.t.lTZBit, { help_article: e }),
        img: (0, A.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eu.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, ET.A)({ platformType: S.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let EK = "/assets/9df988a227916145.png";
function EW() {
    return (0, A.jsx)(EY, {
        title: R.intl.string(EG.default["9cLtDI"]),
        body: R.intl.format(EG.default["D+kUbg"], { learnMoreLink: eT.A.getArticleURL(S.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, A.jsx)("img", { src: EK, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, ET.A)({ platformType: S.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function EZ() {
    let e = eT.A.getArticleURL(S.MVz.XBOX_CONNECTION);
    return (0, A.jsx)(EY, {
        title: R.intl.string(R.t["2okkZV"]),
        body: R.intl.format(R.t.OnERSS, { help_article: e }),
        img: (0, A.jsx)("img", { src: EK, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, ET.A)({ platformType: S.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var Eq = n(783419),
    EQ = n(534952),
    EJ = n(211180),
    E$ = n(247259);
function E0(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, E.cf)(
            [EP.A],
            () => ({
                isJoining: EP.A.isJoining(n.id),
                joinErrorMessage:
                    "" === EP.A.joinErrorMessage(n.id) ? R.intl.string(R.t.j2d6Km) : EP.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== EP.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, E.bG)([sI.A], () => sI.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, A.jsx)(_.$, {
                size: "sm",
                onClick: function () {
                    Eh.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? R.intl.string(R.t.RXvQQu) : R.intl.string(R.t.XpeFYr),
            })),
        (0, A.jsxs)("div", {
            className: E$.iA,
            children: [
                (0, A.jsxs)("div", {
                    className: E$.XX,
                    children: [
                        (0, A.jsx)(cT.Ay, { size: cT.Ay.Sizes.SMALL, guild: n.guild, className: E$.$f }),
                        (0, A.jsxs)("div", {
                            className: E$.Vn,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, A.jsx)(na.Anchor, {
                                    href: ES.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, A.jsx)(H.E, {
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
                    (0, A.jsx)(H.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: E$.R,
                        children: s,
                    }),
            ],
        })
    );
}
function E1(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l =
            ((t = s.id),
            (n = (0, Ey.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (i = (0, Eb.L)(tZ.PremiumTypes.TIER_2)),
            !n && !i && !/^\d+$/.test(t));
    return s.type === S.fg2.XBOX && l
        ? (0, A.jsx)(EW, {})
        : s.twoWayLink
          ? null
          : s.type === S.fg2.XBOX
            ? (0, A.jsx)(EZ, {})
            : s.type === S.fg2.PLAYSTATION
              ? (0, A.jsx)(EH, {})
              : null;
}
function E2(e) {
    let t,
        n,
        i,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = h.useState(u.friendSync),
        [E, x] = h.useState(u.visibility),
        [p, T] = h.useState(u.metadataVisibility),
        [f, I] = h.useState(u.showActivity),
        [N, C] = h.useState(null),
        [b, y] = h.useState(null),
        [v, j] = h.useState(!1),
        [O, L] = h.useState([]),
        D = (0, Ex.ML)(u.type),
        P = ES.A.get(D);
    h.useEffect(() => {
        (m(u.friendSync), x(u.visibility), T(u.metadataVisibility), I(u.showActivity));
    }, [u]);
    let G = { inProgressVisibility: N, inProgressMetadataVisibility: b },
        M = h.useRef(G);
    return (
        h.useEffect(() => {
            M.current = G;
        }),
        h.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = M.current;
            (null != e && (x(e), Eh.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (T(t), Eh.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, A.jsxs)("div", {
            className: E$.FI,
            children: [
                ((t = ES.A.get(u.type)),
                (n = ES.A.get(D)),
                (i = "1" === (u.metadata ?? {})[Eq.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === S.fg2.TWITTER &&
                    i &&
                    (s = (0, A.jsx)(sa.m, {
                        text: R.intl.string(R.t.Jebrww),
                        children: (0, A.jsx)(E_.A, {
                            color: n2.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, A.jsx)(Em.U, { size: "xs", color: n2.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, A.jsxs)("div", {
                    className: E$.Il,
                    children: [
                        (0, A.jsx)("img", {
                            alt: n.name,
                            className: E$.gj,
                            src: (0, dm.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsxs)("div", {
                                    className: E$.$p,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: E$.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, A.jsx)("div", { className: E$.cG, children: s }),
                                    ],
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: E$.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? R.intl.format(EJ.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, A.jsx)(n4.D, {
                            className: E$.uH,
                            onClick: function () {
                                let e = ES.A.get(u.type);
                                (0, sm.openModal)((t) =>
                                    (0, A.jsx)(sg.a, {
                                        title: R.intl.formatToPlainString(R.t.U5x12f, { name: e.name }),
                                        subtitle: R.intl.format(R.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: R.intl.string(R.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: R.intl.string(R.t.bsbMVz),
                                                onClick: () => {
                                                    (o(), t.onClose());
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            Ef.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, A.jsx)(s3.A, {
                                                children: R.intl.format(R.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": R.intl.string(R.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, A.jsx)(EA.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, A.jsx)(E1, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, Ep.An)(t[Eq.pK.CREATED_AT], c);
                    switch (e.type) {
                        case S.fg2.REDDIT:
                            n = (0, EI.xE)(t, E$.Nz);
                            break;
                        case S.fg2.STEAM:
                            n = (0, EI.dy)(t, E$.Nz);
                            break;
                        case S.fg2.BLUESKY:
                        case S.fg2.TWITTER:
                        case S.fg2.MASTODON:
                            n = (0, EI.ED)(t, E$.Nz);
                            break;
                        case S.fg2.EBAY:
                            n = (0, EI.ub)(t, E$.Nz);
                            break;
                        case S.fg2.PAYPAL:
                            n = (0, EI.gZ)(t, E$.Nz);
                            break;
                        case S.fg2.TIKTOK:
                            n = (0, EI.HU)(t, E$.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, A.jsx)(
                                H.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: E$.M4,
                                    children: R.intl.format(R.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = R.intl.string(R.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== ES.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, A.jsx)(ta.Lp, { className: E$.Z3, text: R.intl.string(R.t.y2b7CA) }, "badge"),
                                (0, A.jsx)(
                                    H.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: E$.vt,
                                        children: R.intl.format(R.t.Up2ni7, {
                                            helpdeskUrl: eT.A.getArticleURL(S.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = R.intl.string(R.t["LVh3/5"])));
                    return (
                        s && (l = R.intl.string(R.t.i4jeWR)),
                        n.push(
                            (0, A.jsx)(
                                "div",
                                {
                                    className: E$.jy,
                                    children: (0, A.jsx)(_.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: v,
                                        disabled: s,
                                        "aria-label": R.intl.string(R.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  (j(!0),
                                                      Eh.A.refresh(e.type, e.id).finally(() => {
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
                        (0, A.jsx)("div", { className: E$.tJ, children: n })
                    );
                })(u),
                (S.txh.has(u.type) &&
                    (l = (0, A.jsx)(t3.d, {
                        label: R.intl.string(R.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), Eh.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                S.ewM.has(u.type) &&
                    (r = (0, A.jsx)(t3.d, {
                        label: R.intl.format(R.t["6u6J0q"], { platform: P.name }),
                        checked: f,
                        onChange: function (e) {
                            (I(e), Eh.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                ES.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, A.jsx)(t3.d, {
                        label: R.intl.string(R.t.FYKGsL),
                        checked: 1 === p,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, ET.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (T(n), Eh.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== E || null == u.metadata,
                    })),
                (0, A.jsxs)("div", {
                    className: E$.HZ,
                    children: [
                        (0, A.jsx)(t3.d, {
                            label: R.intl.string(R.t.f7yOAX),
                            checked: 1 === E,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (C(n), (0, ET.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (x(n), Eh.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, A.jsx)(si.c, {});
                })(),
                u.revoked
                    ? (0, A.jsx)(ae.p, {
                          messageType: ae.Y.INFO,
                          children: R.intl.format(R.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, ET.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, A.jsx)(t2.D, {
                            label: R.intl.string(R.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, A.jsx)(E0, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, A.jsx)(EC.A, { partner: u.type }),
            ],
        })
    );
}
function E3(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: E$.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, A.jsxs)("div", {
                          className: E$.Il,
                          children: [
                              (0, A.jsx)("img", { alt: n.name, className: ic()(E$.gj, E$.sN), src: i }),
                              (0, A.jsxs)("div", {
                                  children: [
                                      (0, A.jsx)("div", {
                                          className: E$.$p,
                                          children: (0, A.jsx)(H.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: E$.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: E$.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, A.jsx)(n4.D, {
                                  className: E$.uH,
                                  onClick: () =>
                                      (0, Ec.d1)(n, t.scopes, () => {
                                          Ed.A.delete(t.id);
                                      }),
                                  "aria-label": R.intl.string(R.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, A.jsx)(EA.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, A.jsx)("div", {
                      className: E$.HZ,
                      children: (0, A.jsx)(t3.d, {
                          label: R.intl.string(R.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              Ek.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function E5() {
    let e = (0, Ex.gn)(),
        t = (0, i1.A)((0, EQ.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, A.jsxs)("div", {
        className: E$.lA,
        children: [
            t.map((e) => null != e && (0, A.jsx)(EF.A, { application: e, innerClassName: E$.U$ }, e.id)),
            e.map((e) =>
                (0, A.jsx)(
                    EE.A,
                    { type: e.type, innerClassName: E$.U$, location: tM.A.USER_SETTINGS_CONNECTIONS },
                    e.type,
                ),
            ),
        ],
    });
}
function E4(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = h.useMemo(() => i.filter((e) => ES.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, A.jsx)(oo.y, { type: oo.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, A.jsx)(AO.pp, {
                    theme: r,
                    className: E$.p$,
                    children: (0, A.jsx)(AO.SG, {
                        note: R.intl.string(R.t.WenGZ2),
                        children: R.intl.string(R.t.aoLS84),
                    }),
                })
              : (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: R.intl.format(R.t.AioIGb, { count: s.length + o.length }),
                        }),
                        s.map((e, t) =>
                            (0, A.jsx)(
                                E3,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, A.jsx)(
                                E2,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            Eh.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, A.jsx)("div", { className: E$.V, children: t })
    );
}
let E6 = (0, d.E2)(c.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, A.jsx)(t2.D, { label: R.intl.string(R.t["t+aGse"]), children: (0, A.jsx)(E5, {}) });
        },
        useSearchTerms: () => [
            R.intl.string(R.t.Zhcj9X),
            R.intl.string(R.t.QqTz8b),
            R.intl.string(R.t["+/hZM/"]),
            R.intl.string(R.t.bsbMVz),
            R.intl.string(R.t.f7yOAX),
            R.intl.string(R.t.FYKGsL),
            R.intl.string(R.t["+KCMSi"]),
        ],
    }),
    E8 = (0, d.E2)(c.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, E.bG)([tl.A], () => tl.A.hidePersonalInformation),
                t = (0, E.bG)([EP.A], () => EP.A.isFetching()),
                n = (0, E.bG)([EP.A], () => EP.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, E.cf)([EN.default], () => ({
                    authorizedAppsFetchState: EN.default.getFetchState(),
                    authorizedApps: EN.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, Ew.A)(lg.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, uY.Ay)(),
                o = (0, E.bG)([oW.default], () => oW.default.locale);
            return (h.useEffect(() => {
                i === EN.FetchState.NOT_FETCHED && Ed.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(EV, {}),
                          (0, A.jsx)(E4, {
                              fetching: t || l || (r.length > 0 && i !== EN.FetchState.FETCHED),
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
            Eh.A.fetch();
        },
        useSearchTerms: () => [
            R.intl.string(R.t["+/hZM/"]),
            R.intl.string(R.t.bsbMVz),
            R.intl.string(R.t.f7yOAX),
            R.intl.string(R.t.FYKGsL),
            R.intl.string(R.t["+KCMSi"]),
        ],
    });
var E7 = n(206828);
let E9 = (0, d.zZ)(c.X.CONNECTIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3fe7U5"]),
        useSubtitle: () => R.intl.string(R.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, E.bG)([EP.A], () => EP.A.getAccounts()),
                t = h.useMemo(
                    () =>
                        ES.A.filter(
                            (e) =>
                                e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") ===
                                !0,
                        ).filter((t) => e.some((e) => e.type === t.type)),
                    [e],
                ),
                [n, i] = h.useState(0),
                [s, l] = h.useState(t),
                r = t !== s;
            r && (l(t), i(0));
            let a = h.useMemo(() => t[n], [t, n]),
                o = (0, i1.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, E7.RD)(o),
                g =
                    a?.type === S.fg2.RIOT_GAMES || a?.type === S.fg2.LEAGUE_OF_LEGENDS
                        ? R.intl.string(EJ.default["1S6oAo"])
                        : o?.name,
                A = null != a && c,
                x = A && !d && u && o?.connectionEntrypointUrl != null;
            return (
                r || !A || x || i((e) => e + 1),
                h.useMemo(
                    () =>
                        x
                            ? {
                                  type: m.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: R.intl.format(EJ.default.wUXupS, {
                                      connectionName: a.name,
                                      applicationName: g,
                                      connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                      helpCenterLink:
                                          a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                                  }),
                              }
                            : null,
                    [a, g, o, x],
                )
            );
        },
        buildLayout: () => [E6, E8],
    }),
    Se = (0, d.zZ)(c.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        useSubtitle: () => R.intl.string(R.t.G9JfLg),
        buildLayout: () => [Eg],
        initialize: () => (
            Ed.A.fetch(),
            () => {
                Ec.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    St = (0, d.t_)(c.X.CONNECTED_APPS_PANEL, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        useObscuredNotice: or.L,
        buildLayout: () => [E9, Se],
    }),
    Sn = (0, d.i4)(c.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        icon: AL.LinkIcon,
        buildLayout: () => [St],
    });
var Si = n(625657),
    Ss = n(592598),
    Sl = n(773371),
    Sr = n(309913),
    Sa = n(672396);
let So = Sd(null);
function Su() {
    var e;
    let t = Sd(So);
    ((e = So),
        B().isEqual(B().omit(t, "old_enabled"), B().omit(e, "old_enabled")) ||
            (tr.default.track(S.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (So = t)));
}
function Sd(e) {
    let t = Sr.default.getNotificationPositionMode(),
        n = t !== S.G6Q.DISABLED,
        i = sB.Ay.getOverlayKeybind(),
        s = sB.Ay.getOverlayChatKeybind();
    return {
        enabled: Sl.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: Ss.A.isNotificationDisabled(Sa.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, sc.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, sc.dI)(s.shortcut) : null,
        text_opacity_slider: Sr.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? Sl.default.enabled,
    };
}
var Sc = n(237984),
    Sg = n(63035);
function Sm(e) {
    (e.preventDefault(), e.stopPropagation());
}
function SA(e) {
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
    return (0, A.jsxs)("div", {
        className: ic()(Sg.HS, d),
        children: [
            (0, A.jsxs)(hE.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, A.jsx)("div", { className: Sg.x_, children: t }),
                    (0, A.jsxs)("div", {
                        className: Sg.rN,
                        children: [
                            null != n && (0, A.jsx)("div", { className: Sg.$t, children: n }),
                            (0, A.jsxs)("div", {
                                className: Sg.c8,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: Sg.SZ,
                                        children: i,
                                    }),
                                    null != s &&
                                        (0, A.jsx)(H.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, A.jsx)(H.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, A.jsx)("div", { className: Sg.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", { className: Sg.Om, children: a }),
        ],
    });
}
let Sh = (0, d.E2)(c.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, A.jsx)(SA, {
            title: R.intl.string(R.t["z4/l+V"]),
            description: R.intl.string(R.t["3aZq/0"]),
            action: (0, A.jsx)(_.$, {
                variant: "primary",
                text: R.intl.string(R.t.s2nVhG),
                onClick: () => {
                    (0, Sc.b)(tM.A.USER_SETTINGS, S.BRT.APP);
                },
            }),
            "aria-label": R.intl.string(R.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [R.intl.string(R.t["z4/l+V"])],
});
var SE = n(31300),
    SS = n(780907),
    Sx = n(684013),
    Sp = n(56562),
    ST = n(311043),
    Sf = n(569926),
    SI = n(810412),
    S_ = n(41984),
    SN = n(296027),
    SC = n(562519);
let Sb = 5 * n(927813).A.Millis.DAY,
    Sy = new SC.A("overlay_survey_timestamps");
function Sv(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(Sy.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < Sb) ||
            Array.from(Sy.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sm.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), Sy.add(i), (n) => (0, A.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function Sj() {
    (0, i7.sL)("overlay-settings");
}
function SO(e) {
    let { className: t, game: n } = e;
    return (0, i7.NP)() && null != n && n.elevated
        ? (0, A.jsx)("div", {
              className: t,
              children: (0, A.jsx)(ae.p, {
                  messageType: ae.Y.WARNING,
                  action: (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      text: R.intl.string(R.t["1iI46O"]),
                      onClick: Sj,
                  }),
                  children: R.intl.format(R.t["LJzl+0"], { helpCenterLink: eT.A.getArticleURL(S.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var SL = n(760751),
    SR = n(9302),
    SD = n(656513);
let SP = new Set([
    S_.AR.INITIALIZING,
    S_.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    S_.AR.WAITING_FOR_MODULE_TRACKING,
    S_.AR.WAITING_FOR_OVERLAY_OPEN,
    S_.AR.WAITING_FOR_POPOUT_OPEN,
    S_.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    S_.AR.WAITING_FOR_REACT_INITIALIZATION,
    S_.AR.WAITING_FOR_PID_FOCUS,
    S_.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function SG(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = h.useState(!1);
    return (0, A.jsx)(SD.N, {
        className: Sg.uR,
        collapsibleContent: (0, A.jsx)("div", { className: Sg.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, A.jsx)(SA, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: ic()(Sg.AC, n),
                action: (0, A.jsxs)("div", {
                    className: Sg.rc,
                    children: [
                        s.action,
                        l
                            ? (0, A.jsx)(cX.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, A.jsx)(n8._, {
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
let SM = (0, d.E2)(c.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i4();
        (0, Sf.I)(e?.id);
        let n = e?.pid,
            i = (0, E.bG)(
                [SN.default],
                () => (null == e || null == n ? null : SN.default.getTrackedGameByPid(n)),
                [e, n],
                i$(),
            ),
            { data: s } = (0, Sf.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, E.cf)(
                [SL.A, to.A, ST.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i3.hw)(e, !1, [SL.A, to.A, ST.A]),
                [e, i],
            ),
            a = (0, E.bG)(
                [i3.Ay, SL.A, to.A, ST.A],
                () => (null == e ? null : (0, i3.xU)(e, i3.Ay, SL.A, to.A, ST.A)),
                [e],
                i$(),
            ),
            [o, u] = h.useState(r),
            [d, c] = h.useState(l),
            [g, m] = h.useState(!1);
        h.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let S = !(0, SR.supportsLegacy)(),
            x = !(0, SR.supportsOutOfProcess)(),
            { legacyEnabled: p, oopEnabled: T } = (0, E.cf)([SN.default], () => SN.default.getGlobalEnabledStatus());
        function f(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case SI.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), SS.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case SI.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), SS.Ay.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case SI.OverlayToggledClientSettingType.LEGACY:
                    (Sx.A.setEnabled(t, T), (0, SI.Q3)(t, SI.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case SI.OverlayToggledClientSettingType.OOP:
                    (Sx.A.setEnabled(p, t), (0, SI.Q3)(t, SI.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                Sv(
                    i ? SI.OverlayToggledClientSettingType.LEGACY_GAME : SI.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = S && x,
            _ = !p && !T,
            N = !o && !p && d && !S,
            C = !d && !T && o && !x,
            b = i?.overlayMethod === S_.Ue.Disabled,
            y = i?.state === S_.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && SP.has(i.state) && !b,
            j = i?.overlayMethod === S_.Ue.OutOfProcess,
            O = i?.overlayMethod === S_.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === S_.Ue.Hook,
            D = i?.state === S_.AR.OVERLAY_CRASHED || i?.state === S_.AR.OVERLAY_CRASHED_DISABLED,
            P = !o && !d,
            [G, M] = (function () {
                switch (!0) {
                    case y && j:
                        return [
                            R.intl.format(R.t.hFVBIg, {
                                overlayMethod: R.intl.string(R.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, A.jsx)(
                                        H.E,
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
                            R.intl.format(R.t.hFVBIg, {
                                overlayMethod: R.intl.string(R.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, A.jsx)(
                                        H.E,
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
                            R.intl.format(R.t.hFVBIg, {
                                overlayMethod: R.intl.string(R.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, A.jsx)(
                                        H.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== Sp.aI.BORDERLESS_FULLSCREEN:
                                        return R.intl.string(R.t.mJmbeC);
                                    case x:
                                        return R.intl.string(R.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return R.intl.string(R.t.WiY24u);
                                    case !T:
                                        return R.intl.string(R.t.cAFVsL);
                                    case !(s?.supportsOutOfProcessOverlay ?? !0):
                                        return R.intl.string(R.t.XcGEcs);
                                    default:
                                        return R.intl.string(R.t.bJXH2v);
                                }
                            })(),
                        ];
                    case D:
                        return [R.intl.string(R.t.OFC2aw), null];
                    case I:
                        return [R.intl.string(R.t.m7X4az), null];
                    case _:
                        return [R.intl.string(R.t["9DUS5l"]), null];
                    case P:
                        return [R.intl.string(R.t.nQ9EdJ), null];
                    case N:
                    case C:
                        return [R.intl.string(R.t.VWUn0a), null];
                    case v:
                        if (j) return [R.intl.string(R.t["s8+CFq"]), null];
                        if (L) return [R.intl.string(R.t.JEEdqt), null];
                        if (O) return [R.intl.string(R.t.pzBMwY), null];
                        return [R.intl.string(R.t["2Xhy9k"]), null];
                    case null == i:
                        return [R.intl.string(R.t.vwHPRi), null];
                    case b: {
                        let e = i?.fullscreenType === Sp.aI.FULLSCREEN ? R.intl.string(R.t.mJmbeC) : null;
                        return [R.intl.string(R.t.VPW4XY), e];
                    }
                    default:
                        return [R.intl.string(R.t.ONovP5), null];
                }
            })();
        (0, eS.Ay)(() => {
            SS.Ay.getDetectableGames();
        });
        let [U, V] = h.useMemo(
            () =>
                v
                    ? ["text-muted", n2.A.colors.TEXT_MUTED.css]
                    : y && O
                      ? ["text-feedback-warning", n2.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && j
                        ? ["text-feedback-positive", n2.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && L
                          ? ["text-strong", n2.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", n2.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, O, j, L],
        );
        return null == e
            ? null
            : (0, A.jsxs)(SG, {
                  onExpand: m,
                  className: g ? Sg.tx : void 0,
                  title: (0, A.jsxs)(A.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, A.jsx)(sa.m, {
                                    text: R.intl.string(R.t["4PJP5p"]),
                                    children: (0, A.jsx)(E_.A, {
                                        size: 16,
                                        color: n2.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, A.jsx)(Em.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: n2.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: G,
                  hint: null != M ? M : void 0,
                  header: (0, A.jsxs)(A.Fragment, {
                      children: [
                          y || v
                              ? (0, A.jsx)(SE.k, { size: "xxs", color: V })
                              : (0, A.jsx)("div", { className: Sg.W4 }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/semibold",
                              color: U,
                              children: R.intl.string(R.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, A.jsx)(i6.A, { game: t, pid: e?.pid, size: i6.M.MEDIUM }),
                  "aria-label": R.intl.string(R.t["87O5GC"]),
                  action: (0, A.jsx)(n4.D, {
                      onClick: (e) => Sm(e),
                      children: (0, A.jsx)(t3.d, {
                          checked: (o && T) || (d && p),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      s = !1;
                                  switch (n) {
                                      case "game":
                                          (SS.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (Sx.A.setEnabled(t, t), (i = !t && p), (s = !t && T));
                                          break;
                                      case "both":
                                          (Sx.A.setEnabled(t, t),
                                              SS.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && p) || (!t && d)),
                                              (s = (!t && T) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? SI.OverlayToggledClientSettingType.LEGACY_GAME
                                                : SI.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? SI.OverlayToggledClientSettingType.OOP_GAME
                                                : SI.OverlayToggledClientSettingType.OOP),
                                      null != l && Sv(l, e.id ?? null));
                              })(
                                  t,
                                  (function (e, t) {
                                      let n = !t && e,
                                          i = !T && o,
                                          s = !p && d,
                                          l = !o && T,
                                          r = !d && p;
                                      switch (!0) {
                                          case n && (i || s) && (l || r):
                                              return "both";
                                          case n && (i || s):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && T) || (d && p)),
                              );
                          },
                      }),
                  }),
                  warning: (0, A.jsx)(SO, { className: Sg.Hh, game: e }),
                  children: [
                      (0, A.jsx)(SA, {
                          title: R.intl.string(R.t["7BlVIs"]),
                          description: R.intl.string(R.t.ndgADE),
                          hint: T ? void 0 : R.intl.string(R.t.cAFVsL),
                          "aria-label": R.intl.string(R.t["7BlVIs"]),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(t3.d, {
                                      checked: o && T,
                                      disabled: x,
                                      onChange: (e) => {
                                          e && !T
                                              ? f(e, SI.OverlayToggledClientSettingType.OOP)
                                              : f(e, SI.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: Sg.Kz }),
                              ],
                          }),
                      }),
                      (0, A.jsx)(SA, {
                          title: R.intl.string(R.t.BfFpW1),
                          description: R.intl.string(R.t.OzInYk),
                          hint: p ? void 0 : R.intl.string(R.t["3sYHXm"]),
                          "aria-label": R.intl.string(R.t.BfFpW1),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(t3.d, {
                                      checked: d && p,
                                      disabled: S,
                                      onChange: (e) => {
                                          e && !p
                                              ? f(e, SI.OverlayToggledClientSettingType.LEGACY)
                                              : f(e, SI.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: Sg.Kz }),
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
    useSearchTerms: () => [R.intl.string(R.t["9cb1Uz"])],
});
var SU = n(206885);
function SV(e) {
    let { game: t, gameApplication: n } = e,
        i = h.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, E.bG)([i0.A], () => (null != n ? n : i0.A.getApplication(t?.id)), [n, t]);
    return (0, A.jsx)(i6.A, { game: s, pid: i, size: i6.M.SMALL });
}
function Sk(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, Sf.I)(t?.id);
    let o = (0, E.cf)([i3.Ay, SL.A, to.A, ST.A], () => (0, i3.xU)(t, i3.Ay, SL.A, to.A, ST.A)),
        u = (0, E.cf)([SL.A, to.A, ST.A], () => (0, i3.hw)(t, !1, [SL.A, to.A, ST.A]), [t]),
        d = s(u),
        [c, g] = h.useState(d);
    return (
        h.useEffect(() => {
            g(d);
        }, [d]),
        (0, A.jsx)(SA, {
            title: t.name,
            icon: (0, A.jsx)(SV, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(t3.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && Sv(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, A.jsx)("div", { className: Sg.Kz }),
                ],
            }),
        })
    );
}
let Sw = (0, d.E2)(c.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = h.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, E.cf)([SN.default], () =>
                    SN.default.getGlobalEnabledStatus(),
                ),
                s = (0, E.yK)([i3.Ay], () => i3.Ay.getGamesSeen(!0)).filter((e) => !(0, hG.n1)(e)),
                l = (0, i1.A)(s.map((e) => e.id)),
                r = !(0, SR.supportsLegacy)();
            function a(e) {
                Sx.A.setEnabled(e, i);
                let t = i3.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SI.Q3)(e, SI.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && Sv(SI.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                SS.Ay.toggleOverlay(t, e, i);
            }
            let u = h.useMemo(
                () =>
                    (0, SR.supportsLegacy)()
                        ? r
                            ? R.intl.string(R.t.r9jEVw)
                            : R.intl.string(R.t.OzInYk)
                        : R.intl.string(R.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, A.jsx)(SA, {
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      className: Sg.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(t3.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              SU.O && (0, A.jsx)("div", { className: Sg.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(SG, {
                      onExpand: t,
                      className: e ? Sg.tx : void 0,
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      action: (0, A.jsx)(n4.D, {
                          onClick: (e) => Sm(e),
                          children: (0, A.jsx)(t3.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: Sg.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(T.Ip, {
                              className: Sg.XG,
                              children: s.map((e, t) =>
                                  (0, A.jsx)(
                                      Sk,
                                      {
                                          rawGame: e,
                                          clientSettingType: SI.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: l[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: R.intl.format(R.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.BfFpW1)],
    }),
    SF = (0, d.E2)(c.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = h.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, E.cf)([SN.default], () =>
                    SN.default.getGlobalEnabledStatus(),
                ),
                s = !(0, SR.supportsOutOfProcess)(),
                l = (0, E.yK)([i3.Ay], () => i3.Ay.getGamesSeen(!0)).filter((e) => !(0, hG.n1)(e)),
                r = (0, i1.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                Sx.A.setEnabled(i, e);
                let s = i3.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SI.Q3)(e, SI.OverlayToggledClientSettingType.OOP, s),
                    t && Sv(SI.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                SS.Ay.toggleOverlay(t, e, i);
            }
            let u = h.useMemo(
                () => (SU.O ? (s ? R.intl.string(R.t.C7bLTQ) : R.intl.string(R.t.ndgADE)) : R.intl.string(R.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, A.jsx)(SA, {
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      className: Sg.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(t3.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              SU.O && (0, A.jsx)("div", { className: Sg.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(SG, {
                      onExpand: t,
                      className: e ? Sg.tx : void 0,
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      action: (0, A.jsx)(n4.D, {
                          onClick: (e) => Sm(e),
                          children: (0, A.jsx)(t3.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: Sg.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(T.Ip, {
                              className: Sg.XG,
                              children: l.map((e, t) =>
                                  (0, A.jsx)(
                                      Sk,
                                      {
                                          rawGame: e,
                                          clientSettingType: SI.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: s,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: R.intl.format(R.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t["7BlVIs"])],
    }),
    SB = (0, d.zZ)(c.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [SM, SF, Sw, Sh],
    }),
    Sz = (0, d.zD)(c.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, E.bG)([Sr.default], () => !Sr.default.disableClickableRegions),
        setValue: (e) => {
            Sx.A.setDisableClickableRegions(!e);
        },
        useTitle: () => R.intl.string(R.t["+eFXxq"]),
        useSubtitle: () => R.intl.string(R.t.kivMAp),
    }),
    SX = (0, d.E2)(c.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, E.bG)([sB.Ay], () => sB.Ay.getOverlayKeybind()),
                t = !(0, SR.supportsLegacy)(),
                n = !(0, SR.supportsOutOfProcess)(),
                [i, s] = (0, E.yK)([i3.Ay], () => [i3.Ay.canShowAdminWarning, i3.Ay.getVisibleGame()], []),
                l = (0, i7.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sB.DV)(e?.shortcut ?? []);
            return (0, A.jsx)("div", {
                className: Sg.hc,
                children: (0, A.jsxs)("div", {
                    className: Sg.eH,
                    children: [
                        (0, A.jsxs)("div", {
                            className: Sg.Bu,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: R.intl.string(R.t.VsAZcC),
                                }),
                                r &&
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: Sg.y7,
                                        children: R.intl.string(R.t.NsowVa),
                                    }),
                                a &&
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: Sg.y7,
                                        children: R.intl.string(R.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, A.jsx)("div", {
                            className: Sg.IH,
                            children: (0, A.jsx)(sd.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (tg()(null != e, "Keybind should never be undefined"),
                                        iZ.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.VsAZcC)],
    });
var SY = n(515183),
    SH = n(682763);
let SK = (0, d.zD)(c.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i4();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i4();
            return null != e && (0, SY.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i4(),
                n = t?.id,
                i = (0, E.bG)([Ss.A], () => Ss.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, SY.qJ)(e.pid);
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
            null != l && (0, SH.x8)(l.id, e);
        },
        useTitle: () => R.intl.string(R.t.wgVQND),
        useSubtitle: () => R.intl.string(R.t["5SsyF5"]),
    }),
    SW = (0, d.zZ)(c.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [SX, SK, Sz] });
var SZ = n(93465);
let Sq = [
    {
        title: R.t.eVE4LX,
        description: R.t["72WNqk"],
        disabledSetting: SZ.M.TEXT_CHAT,
        key: c.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: R.t.oifnSh,
        description: R.t.bgU5r0,
        disabledSetting: SZ.M.WELCOME_GENERAL,
        key: c.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: R.t.hqsZJW,
        description: R.t.kHjdqc,
        disabledSetting: SZ.M.GO_LIVE_NUDGE,
        key: c.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: R.t.sop3rn,
        description: R.t.pjgffc,
        disabledSetting: SZ.M.GAME_ACTIVITY,
        key: c.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: R.t["2QVhbb"],
        description: R.t.wQ4ilB,
        disabledSetting: SZ.M.NOW_PLAYING,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: R.t.giM9fA,
        description: R.t.EhAfWj,
        disabledSetting: SZ.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nf.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, E.bG)([Ss.A], () => Ss.A.isNotificationDisabledBySetting(SZ.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function SQ(e) {
    return (0, d.zD)(e.key, {
        useTitle: () => R.intl.string(e.title),
        useSubtitle: () => R.intl.string(e.description),
        useValue: () => !(0, E.bG)([Ss.A], () => Ss.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            Sx.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let SJ = (0, d.FW)(c.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => Sq.map(SQ),
    }),
    S$ = (0, d.zZ)(c.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.xOE5bA),
        buildLayout: () => [SJ],
    }),
    S0 = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => R.intl.string(R.t.dnvZSg),
        useValue: () => (0, E.bG)([Sr.default], () => Sr.default.getAvatarSizeMode()),
        setValue: (e) => {
            Sx.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: R.intl.string(R.t.YcOxtr), value: S.OSZ.LARGE },
            { id: "small", label: R.intl.string(R.t.BKIKqx), value: S.OSZ.SMALL },
        ],
    }),
    S1 = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => R.intl.string(R.t.J0dpcB),
        useValue: () => (0, E.bG)([Sr.default], () => Sr.default.getDisplayNameMode()),
        setValue: (e) => {
            Sx.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.pwA.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: R.intl.string(R.t.ekjlPL), value: S.pwA.NEVER },
        ],
    }),
    S2 = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => R.intl.string(R.t.swsWWC),
        useValue: () => (0, E.bG)([Sr.default], () => Sr.default.getDisplayUserMode()),
        setValue: (e) => {
            Sx.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.f5z.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var S3 = n(391973),
    S5 = n(489277),
    S4 = n(897720),
    S6 = n(38502);
function S8() {
    let e = S5.A.getWidgetByType(S.uss.VOICE_V3);
    if (null == e) return null;
    let t = S6.A.getWidget(e.id);
    return null != t && (0, S4.ZO)(t) ? t : null;
}
n(392164);
let S7 = (0, d.sN)(c.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => R.intl.string(R.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? R.intl.string(R.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = S8();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? R.intl.string(R.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = S8();
        null != t &&
            (e < 1
                ? (0, S3.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, S3.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var S9 = n(450740),
    xe = n(968898),
    xt = n(288737);
function xn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new xt.A({
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
        user: new dv.A({ id: s, username: e }),
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
let xi = (0, d.E2)(c.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, E.cf)([Sr.default], () => ({
                    avatarSizeMode: Sr.default.getAvatarSizeMode(),
                    displayNameMode: Sr.default.getDisplayNameMode(),
                    displayUserMode: Sr.default.getDisplayUserMode(),
                })),
                [l] = h.useState(() => [
                    xn(R.intl.string(R.t.C0ZDvo), !0, !1),
                    xn(R.intl.string(R.t.iOtj8E), !1, !1, !0),
                    xn(R.intl.string(R.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, E.bG)([S5.A, S6.A], () => {
                    let e = S5.A.getWidgetByType(S.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = S6.A.getWidget(e.id);
                    return null != t && (0, S4.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = xn(t.username)).user = t), e) : null, ...l].filter(io.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, A.jsx)(Ev.N, {
                    theme: S.NJ8.ONYX,
                    children: (e) =>
                        (0, A.jsxs)("div", {
                            className: ic()(Sg.Y5, e),
                            children: [
                                (0, A.jsx)("div", {
                                    className: Sg.kJ,
                                    children: (0, A.jsx)(S9.DH, {
                                        id: "voice-widget",
                                        title: R.intl.string(R.t.KNJ6Vq),
                                        channel: (0, j.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: S.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: i,
                                        displayUserMode: s,
                                        avatarSizeMode: n,
                                        widget: S.uss.VOICE,
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
                                (0, A.jsxs)("div", {
                                    className: Sg.R$,
                                    children: [
                                        (0, A.jsx)(xe.Pl, { children: R.intl.string(R.t.KNJ6Vq) }),
                                        (0, A.jsx)(xe.CS, {}),
                                        (0, A.jsx)(xe.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, A.jsx)("div", { className: Sg.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    xs = (0, d.zZ)(c.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => R.intl.string(R.t.r1TZfh),
        buildLayout: () => [xi, S0, S1, S2, S7],
    });
var xl = n(54761);
function xr() {
    let [e, t] = (0, gc.kn)([eu.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, z.Ay)(() => () => {
        t(gT.i.AUTO_DISMISS);
    }),
    e !== eu.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsxs)("div", {
                      className: xl.xC,
                      children: [
                          (0, A.jsx)("div", {
                              children: (0, A.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: R.intl.string(R.t.mdXZh1),
                                  className: xl.tl,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              children: (0, A.jsxs)("div", {
                                  className: xl.vJ,
                                  children: [
                                      (0, A.jsx)(p.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: R.intl.string(R.t.jzjJQg),
                                      }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: R.intl.string(R.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, A.jsx)("div", {
                              children: (0, A.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: R.intl.string(R.t.mdXZh1),
                                  className: xl.lh,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xl.VV,
                              children: (0, A.jsx)(_.$, {
                                  variant: "primary",
                                  text: R.intl.string(R.t.Q26diF),
                                  onClick: () => void t(gT.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(si.c, { className: xl.yF }),
              ],
          });
}
function xa() {
    let e = (0, E.bG)([tl.A], () => tl.A.enabled),
        t = (0, nf.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsx)(iW.w, {
                      type: "warning",
                      children: R.intl.format(R.t.fuEX5B, {
                          onClick: function () {
                              return (0, no.openUserSettings)(c.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, A.jsx)(si.c, { className: xl.yF }),
              ],
          })
        : null;
}
let xo = (0, d.t_)(c.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                Su(),
                sB.Ay.addChangeListener(Su),
                Ss.A.addChangeListener(Su),
                Sr.default.addChangeListener(Su),
                Sl.default.addChangeListener(Su),
                e2.isPlatformEmbedded && (0, hU.a2)(),
                () => {
                    (sB.Ay.removeChangeListener(Su),
                        Ss.A.removeChangeListener(Su),
                        Sr.default.removeChangeListener(Su),
                        Sl.default.removeChangeListener(Su),
                        e2.isPlatformEmbedded && (0, hU.e0)());
                }
            );
        },
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(xr, {}), (0, A.jsx)(xa, {})] });
            },
        },
        buildLayout: () => [SB, SW, xs, S$],
    }),
    xu = (0, d.i4)(c.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        icon: Si.l,
        usePredicate: n_.b_,
        buildLayout: () => [xo],
    });
var xd = n(687966);
let xc = (0, d.AK)(c.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.OYYY6q),
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    xg = (0, d.gN)(c.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [xc] });
var xm = n(227309),
    xA = n(29160),
    xh = n(552366),
    xE = n(938442);
function xS(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, Sf.I)(t.id);
    let o = (0, E.cf)([i3.Ay, SL.A, to.A, ST.A], () => (0, i3.xU)(t, i3.Ay, SL.A, to.A, ST.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, E.cf)([i3.Ay], () => ({
            canToggleDetection: null == a || i3.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: i3.Ay.isDetectionEnabled(o),
        })),
        c = (0, E.bG)([i3.Ay], () => i3.Ay.getVisibleGame()),
        [g, m] = h.useState(!1),
        x = h.useRef(null),
        p = null != c && (0, i3.Es)(o) === (0, i3.Es)(c),
        T = !s && !g,
        f = !i && !p,
        I = T || f,
        _ = h.useMemo(
            () =>
                (0, hG.n1)(o)
                    ? r
                        ? o.gameName
                        : R.intl.formatToPlainString(R.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = h.useState(_ ?? "???"),
        b = ic()(xE.tR, {
            [xh.LO]: !i,
            [xh.Rw]: i,
            [xh.FB]: null != o && i,
            [xh.xL]: r,
            [xh.fG]: null != l && l.length > 0,
        });
    function y() {
        (SS.Ay.deleteEntry(o),
            l?.forEach((e) => {
                SS.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? SL.A.getDetectableGame(o.id) : null;
        (tr.default.track(S.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, hG.n1)(o) ? o.gameName : o.name,
        }),
            (0, sm.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("568035"), n.e("627495")]).then(n.bind(n, 651930));
                return (n) =>
                    (0, A.jsx)(t, {
                        ...n,
                        detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                        onSubmitted: () => m(!0),
                    });
            }));
    }
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)("div", {
                className: b,
                children: [
                    (0, A.jsxs)("div", {
                        className: ic()(xh.$K, xE.Vd),
                        children: [
                            o.verified && !s
                                ? (0, A.jsxs)("div", {
                                      className: xh.HS,
                                      children: [
                                          (0, A.jsx)("div", { className: xh.mO, children: _ }),
                                          (0, A.jsx)(sa.m, {
                                              text: R.intl.string(R.t["4PJP5p"]),
                                              children: (0, A.jsx)(E_.A, {
                                                  className: xh.qf,
                                                  size: 18,
                                                  color: n2.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, A.jsx)(Em.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: n2.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, A.jsx)("input", {
                                      className: ic()(xh.mO, xh.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && SS.Ay.editName(o, N);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === sD.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => C(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: s } = o;
                                return (
                                    i || p
                                        ? (e = R.intl.string(R.t.VbV5dv))
                                        : null != n && "" !== n && (e = R.intl.format(R.t["gGeOE+"], { when: n })),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: xh.GN,
                                        children: (0, A.jsx)(xA.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, e2.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    I &&
                        (0, A.jsx)(ao.Y, {
                            targetElementRef: x,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, A.jsx)(cE.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": R.intl.string(R.t["UKOtz+"]),
                                    children: (0, A.jsxs)(e7.rX, {
                                        children: [
                                            T &&
                                                (0, A.jsx)(e7.Dr, {
                                                    id: "report",
                                                    label: R.intl.string(R.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            f &&
                                                (0, A.jsx)(e7.Dr, {
                                                    id: "remove",
                                                    label: R.intl.string(R.t.N86XcP),
                                                    color: "danger",
                                                    action: y,
                                                }),
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) =>
                                (0, A.jsx)("div", {
                                    className: ic()(xh._Q, { [xh.g9]: t.isShown }),
                                    children: (0, A.jsx)(sa.m, {
                                        text: R.intl.string(R.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, A.jsx)(sl.K, {
                                            ...e,
                                            buttonRef: x,
                                            icon: cm.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": R.intl.string(R.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, A.jsx)(sa.m, {
                        text: R.intl.string(R.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, A.jsx)(su.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != l && l.length > 0 && d
                                    ? (0, sm.openModalLazy)(async () => {
                                          let { Modal: e } = await Promise.all([n.e("304823"), n.e("223976")]).then(
                                              n.bind(n, 732955),
                                          );
                                          return (t) =>
                                              (0, A.jsx)(e, {
                                                  ...t,
                                                  title: R.intl.formatToPlainString(R.t.PZ4fKc, { platform: _ }),
                                                  subtitle: R.intl.formatToPlainString(R.t.ZIQbfb, { platform: _ }),
                                                  actions: [
                                                      {
                                                          text: R.intl.string(R.t["ETE/oC"]),
                                                          onClick: () => t.onClose(),
                                                          variant: "secondary",
                                                      },
                                                      {
                                                          text: R.intl.string(R.t.Fmjztz),
                                                          onClick: () => {
                                                              (SS.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : SS.Ay.toggleDetection(o);
                            },
                            "aria-label": R.intl.string(R.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !i &&
                (0, A.jsx)("div", {
                    className: xh.AQ,
                    children: l.map((e, t) =>
                        (0, A.jsxs)(
                            h.Fragment,
                            {
                                children: [
                                    (0, A.jsx)(xS, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, A.jsx)("div", { className: xh.PQ }),
                                ],
                            },
                            (0, i3.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function xx() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = hk();
    return 0 === e.length
        ? null
        : (0, A.jsx)(X.B, {
              padding: { bottom: 32 },
              children: (0, A.jsx)(n5.n, {
                  children: (0, A.jsx)("div", {
                      children: e.map((e) =>
                          (0, A.jsx)(
                              xS,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === xm.a7 ? t : void 0 },
                              (0, i3.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let xp = (0, d.E2)(c.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, A.jsx)(xx, {}),
});
var xT = n(424994);
let xf = (0, d.zZ)(c.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [xp, xg],
    useTitle: () => R.intl.string(R.t.jCOdvx),
    useSubtitle: () =>
        (0, E.bG)([i3.Ay], () => i3.Ay.getGamesSeen(!1).some((e) => !(0, hG.n1)(e)))
            ? R.intl.format(R.t.KPA3m9, { igdbLink: xT.s8 })
            : R.intl.string(R.t["1yiJwn"]),
});
var xI = n(890497),
    x_ = n(853270),
    xN = n(969426);
function xC(e) {
    let { onClose: t } = e,
        n = (0, E.bG)([i3.Ay], () => i3.Ay.getCandidateGames()),
        [i, s] = h.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, A.jsxs)(au.l, {
        className: ic()(x_.H, xN.Y_),
        "aria-label": R.intl.string(R.t.GTCx0p),
        children: [
            (0, A.jsx)(xI.Z, {
                selectionMode: "single",
                placeholder: R.intl.string(R.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, A.jsxs)("div", {
                className: ic()(x_.o, xE.xM),
                children: [
                    (0, A.jsx)(hm.Q, { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: t }),
                    (0, A.jsx)(_.$, {
                        variant: "primary",
                        text: R.intl.string(R.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (SS.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var xb = n(475007);
function xy() {
    let e = h.useRef(null);
    return (0, A.jsxs)("div", {
        className: ic()(xb.a, Ak.Gf),
        children: [
            (0, A.jsx)("span", { children: R.intl.string(R.t.xwhoqM) }),
            (0, A.jsx)(ao.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, A.jsx)(xC, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, A.jsx)(hm.Q, {
                        ...t,
                        buttonRef: e,
                        variant: "primary",
                        textVariant: "text-sm/medium",
                        text: R.intl.string(R.t.GjgdXe),
                    }),
            }),
        ],
    });
}
function xv() {
    return (0, A.jsx)("div", {
        className: ic()(xE.tR, xh.eS, xh.Rw),
        children: (0, A.jsxs)("div", {
            className: ic()(xh.$K, xE.Vd),
            children: [
                (0, A.jsx)("div", { className: xh.mO, children: R.intl.string(R.t.H68X9x) }),
                (0, A.jsx)(xy, {}),
            ],
        }),
    });
}
let xj = (0, d.E2)(c.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = hk(),
                n = (0, E.bG)([i3.Ay], () => i3.Ay.getVisibleGame());
            return null == n
                ? (0, A.jsx)(xv, {})
                : (0, A.jsxs)("div", {
                      className: ic()(xE.Vd, xh.C2),
                      children: [
                          (0, A.jsx)(
                              xS,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === xm.a7 ? e : void 0,
                              },
                              (0, i3.Es)(n),
                          ),
                          (0, A.jsx)(xy, {}),
                      ],
                  });
        },
    }),
    xO = (0, d.zZ)(c.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => R.intl.string(R.t["MY9/Oe"]),
        buildLayout: () => [xj],
    }),
    xL = (0, d.t_)(c.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        buildLayout: () => [xO, xf],
    }),
    xR = (0, d.i4)(c.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        icon: xd.GameControllerIcon,
        usePredicate: n_.Pi,
        buildLayout: () => [xL],
    }),
    xD = (0, d.WI)(c.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => R.intl.string(R.t.BA9200),
        buildLayout: () => [xR, Eu, xu, Sn],
    });
var xP = n(631670),
    xG = n(619499),
    xM = n(836602),
    xU = n(591179),
    xV = n(402860),
    xk = n(761508),
    xw = n(159001),
    xF = n(344346),
    xB = n(919395),
    xz = n(68750);
function xX(e) {
    let { title: t, children: n } = e;
    return (0, A.jsxs)("div", {
        children: [(0, A.jsx)(p.D, { variant: "text-md/medium", className: xz.Vf, children: t }), n],
    });
}
function xY(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, A.jsx)("div", {
        className: ic()(xz.UA, n),
        children: (0, A.jsxs)("div", {
            className: ic()(xz.yt, i),
            children: [
                (0, A.jsx)("div", {
                    className: ic()(xz.Fp, a && xz.Oz),
                    children: (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)(xX, { title: l ?? R.intl.string(R.t.Zb06yP), children: s }),
                            null != r ? (0, A.jsx)(xX, { title: R.intl.string(R.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, A.jsx)("div", { className: xz.oB, children: t }),
            ],
        }),
    });
}
var xH = n(986687),
    xK = n(101058),
    xW = n(321191),
    xZ = n(696451),
    xq = n(590941);
function xQ() {
    return (0, A.jsxs)("div", {
        className: xq.p$,
        children: [
            (0, A.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: xq.Sl }),
            (0, A.jsx)(p.D, { className: xq.h8, variant: "heading-lg/extrabold", children: R.intl.string(R.t.Z1OZCV) }),
            (0, A.jsx)(H.E, { className: xq.h8, variant: "text-md/normal", children: R.intl.string(R.t.ZSt4Tt) }),
            (0, A.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: xq.h8,
                children: (0, A.jsx)(_.$, {
                    variant: "primary",
                    text: R.intl.string(R.t.jQ3pqt),
                    onClick: function () {
                        ((0, t5.pX)(S.BVt.GUILD_DISCOVERY), (0, tB.default)());
                    },
                }),
            }),
        ],
    });
}
var xJ = n(81400),
    x$ = n(450232),
    x0 = n(252732),
    x1 = n(355622),
    x2 = n(408018),
    x3 = n(959070),
    x5 = n(290386),
    x4 = n(941933),
    x6 = n(486264);
let x8 = (0, tY.Ld)(),
    x7 = (0, j.createChannelRecord)({ id: "1", type: S.rbe.DM }),
    x9 = (0, tY.Ld)();
function pe(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, x5.U)({ location: "profile_customization_about_me" }),
        [u, d] = h.useState(s ?? r),
        [c, g] = h.useState((0, x2.x7)(u)),
        m = h.useRef(r),
        E = h.useRef(!1);
    return (
        h.useEffect(() => {
            if (m.current !== r) {
                let e = (0, x2.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        h.useEffect(() => {
            void 0 !== s || u === r || E.current || (d(r), g((0, x2.x7)(r)));
        }, [s, r, u]),
        (0, A.jsxs)(ai.A, {
            title: t,
            titleId: x8,
            description: R.intl.string(R.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, A.jsx)(x3.Ay, {
                    "aria-describedby": x9,
                    "aria-labelledby": x8,
                    className: x6.i,
                    innerClassName: x6.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: l,
                    channel: x7,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: x4.y,
                    type: x1.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        E.current = !1;
                    },
                    onFocus: () => {
                        E.current = !0;
                    },
                    focused: E.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, A.jsx)(so.A, { id: x9, children: R.intl.format(R.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var pt = n(821956),
    pn = n(562819),
    pi = n(84540),
    ps = n(467690);
function pl(e) {
    let { user: t, guild: n, className: i, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, ek.Ay)(),
        o = (0, xB.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, xB.CP)(n?.id),
        c = r ? db.wL : lZ.$n;
    return (0, A.jsx)(ai.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, A.jsxs)("div", {
            className: ps.NC,
            children: [
                (0, A.jsx)(c, {
                    size: lZ.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, pn.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ic()({ [ps.yj]: r }),
                    children: R.intl.string(R.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ps.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, pt.uZ)(t, n) ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.OrokWm),
                            onClick: function () {
                                (0, pi.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var pr = n(339984),
    pa = n(942132);
let po = [{ name: "gif", extensions: ["gif"] }];
function pu(e) {
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
        { newestAnalyticsLocation: g } = (0, ek.Ay)(),
        m = c ? db.wL : lZ.$n,
        E = h.useCallback(() => {
            (0, x0.XD)({
                uploadType: pr.HL.AVATAR,
                analyticsSource: g,
                filters: u ? po : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, A.jsx)(ai.A, {
        className: a,
        title: s,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, A.jsxs)("div", {
            className: pa.NC,
            children: [
                (0, A.jsx)(m, {
                    className: ic()({ [pa.yj]: c }),
                    size: lZ.$n.Sizes.SMALL,
                    onClick: E,
                    children: l ?? R.intl.string(R.t["4OynCD"]),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: pa.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? R.intl.string(R.t.TDjKDm) : R.intl.string(R.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var pd = n(248778),
    pc = n(810188);
function pg(e) {
    let { user: t, guildId: n, className: i } = e,
        s = ac.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, ek.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, xB.B0)(t, n),
        d = (0, pd.ux)("DisplayNameStylesSection"),
        [c, g] = (0, gc.kn)(d ? [eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        E = (0, h.useCallback)(() => {
            (g(gT.i.TAKE_ACTION),
                tr.default.track(S.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, ew.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        x = (0, h.useCallback)(() => {
            ((0, pi.p)({ displayNameStyles: null }), tr.default.track(S.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        p = (0, h.useCallback)(() => {
            (0, pi.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        T = void 0 !== o ? o : null != n ? a : r;
    return (0, A.jsx)(ai.A, {
        title: R.intl.string(eF.default["86GtGH"]),
        titleBadge: m ? (0, A.jsx)(ta.Lp, { text: R.intl.string(R.t.y2b7CA), className: pc.A }) : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: pc.N,
            children: [
                (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(eF.default.vJqrIg), onClick: E }),
                null == n &&
                    null != T &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eF.default.ymq8WQ),
                        onClick: x,
                    }),
                null != n &&
                    null != T &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eF.default["j/KRxc"]),
                        onClick: p,
                    }),
            ],
        }),
    });
}
var pm = n(637193),
    pA = n(622410);
function ph(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: s } = (0, ek.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, xB.rv)(t, n?.id),
        d = h.useCallback(() => {
            (0, pm.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = h.useCallback(() => {
            (0, pi.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, A.jsx)(ai.A, {
        title: R.intl.string(R.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: pA.u,
            children: [
                (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(R.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var pE = n(88524);
function pS(e) {
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
        { newestAnalyticsLocation: c } = (0, ek.Ay)(),
        g = d ? db.wL : lZ.$n;
    return (0, A.jsx)(ai.A, {
        className: l,
        title: R.intl.string(R.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, A.jsxs)("div", {
            className: pE.NC,
            children: [
                (0, A.jsx)(g, {
                    className: ic()({ [pE.yj]: d }),
                    size: lZ.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, x0.XD)({ uploadType: pr.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: R.intl.string(R.t.N0bC3P),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: pE.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != s ? R.intl.string(R.t.jHlJNS) : R.intl.string(R.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var px = n(617061),
    pp = n(625613);
function pT(e) {
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
        { analyticsLocations: u } = (0, ek.Ay)(),
        d = ac.Ay.canUsePremiumProfileCustomization(t),
        c = (0, xB.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, xB.nZ)(n?.id);
    h.useEffect(() => {
        d &&
            (tr.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tZ.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tH.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tK.uq)(tZ.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let E = a ? db.wL : lZ.$n;
    return (0, A.jsx)(ai.A, {
        forcedDivider: r,
        borderType: uf.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, A.jsxs)("div", {
            className: pp.NC,
            children: [
                (0, A.jsx)(E, {
                    size: lZ.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, px.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ic()({ [pp.yj]: a }),
                    children: R.intl.string(R.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: pp.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.uMuafO),
                            onClick: function () {
                                (0, pi.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var pf = n(515727),
    pI = n(594401);
function p_(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: s } = (0, ek.Ay)(),
        l = (0, xB.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, xB.Tu)(n?.id),
        [o, u] = (0, gc.kn)([eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, A.jsx)(ai.A, {
        showBorder: d,
        borderType: d ? uf.i.NEW_UPSELL : uf.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d ? (0, A.jsx)(ta.Lp, { text: R.intl.string(R.t.y2b7CA), className: pI.Ad }) : void 0,
        description: d ? R.intl.string(R.t.yMoMAt) : void 0,
        errors: a,
        children: (0, A.jsxs)("div", {
            className: pI.NC,
            children: [
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t["9/hmle"]),
                    onClick: function () {
                        ((0, pf.w)({ analyticsLocations: s, guild: n }), u(gT.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: pI.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.nQBruk),
                            onClick: function () {
                                (0, pi.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var pN = n(602853),
    pC = n(654107),
    pb = n(999291),
    py = n(101928),
    pv = n(819169),
    pj = n(317097),
    pO = n(508274),
    pL = n(379012);
function pR(e) {
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
        d = h.useRef(null),
        c = (0, pN.r)(n2.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = n2.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, x0.sN)(i),
        E = (0, pj.Hl)(i),
        x = E === c ? g : E,
        p = m ? n2.A.unsafe_rawColors.WHITE.css : n2.A.unsafe_rawColors.PRIMARY_530.css,
        T = (0, pv.A)(a),
        f = (0, pv.A)(o),
        [I, _] = h.useState((0, ou.A)());
    return (
        h.useEffect(() => {
            (T !== a || f !== o) && _((0, ou.A)());
        }, [o, a, f, T]),
        (0, A.jsx)(ao.Y, {
            targetElementRef: d,
            positionKey: I,
            renderPopout: (e) =>
                (0, A.jsx)(pO.VN, {
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
                return (0, A.jsxs)("div", {
                    ref: d,
                    className: ic()(pL.oP, { [pL.r9]: l }),
                    children: [
                        (0, A.jsx)(n4.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? S.tEg : t,
                            style: { backgroundColor: E, borderColor: x },
                            className: pL.nf,
                            "aria-label": R.intl.string(R.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, A.jsx)(ad.PencilIcon, {
                                size: "custom",
                                className: pL.BW,
                                width: 14,
                                height: 14,
                                color: p,
                            }),
                        }),
                        r,
                    ],
                });
            },
        })
    );
}
var pD = n(190377);
function pP(e) {
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
        c = (0, pb.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, py.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        h = ac.Ay.canUsePremiumProfileCustomization(t),
        E = null != n ? n : t.getAvatarURL(r, 80),
        S = (0, pN.r)(n2.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, pC.rh)(E, S, !1);
    return null == g || null == m
        ? null
        : (0, A.jsx)(ai.A, {
              title: R.intl.string(R.t.DMeO2X),
              disabled: !h && !l,
              className: ic()(pD.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, A.jsxs)("div", {
                  className: pD.hd,
                  children: [
                      (0, A.jsx)("div", {
                          className: pD.YX,
                          children: (0, A.jsx)(pR, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: pD.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: R.intl.string(R.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, A.jsx)("div", {
                          className: pD.YX,
                          children: (0, A.jsx)(pR, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: pD.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: R.intl.string(R.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, A.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pD.WA,
                              children: (0, A.jsx)(_.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: R.intl.string(R.t["L+GmoR"]),
                                  onClick: () => s([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function pG(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tY.GV)();
    return (0, A.jsx)(ai.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, A.jsx)(sA.k, {
            "aria-labelledby": o,
            placeholder: l ?? R.intl.string(R.t.NPEUUu),
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
var pM = n(427262),
    pU = n(684732),
    pV = n(576705),
    pk = n(931175);
function pw(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, E.bG)([pV.A], () => pV.A.can(S.xBc.CHANGE_NICKNAME, r) || pV.A.can(S.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Eb.L)(tZ.PremiumTypes.TIER_2);
    return (0, A.jsxs)(ai.A, {
        title: R.intl.string(R.t.me1lRk),
        errors: t,
        children: [
            (0, A.jsx)(sA.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: S.d0r,
                onChange: function (e) {
                    (0, pi.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : R.intl.string(R.t.gzjxQi),
            }),
            o && (0, A.jsx)(pg, { user: l, guildId: r.id, className: pk.F }),
        ],
    });
}
var pF = n(233454);
let pB = "/assets/b25da78aa7949feb.png";
function pz(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, uY.Ay)(),
        { analyticsLocations: l } = (0, ek.Ay)(tM.A.PREMIUM_UPSELL_OVERLAY);
    return (h.useEffect(() => {
        n &&
            (tr.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: tZ.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tH.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                (0, tK.uq)(tZ.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, l]),
    n)
        ? (0, A.jsxs)("div", {
              className: pF.ry,
              children: [
                  (0, A.jsx)("div", { children: i }),
                  (0, A.jsxs)("div", {
                      className: pF.Wc,
                      children: [
                          (0, A.jsx)("img", {
                              className: pF.Tn,
                              alt: R.intl.string(R.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case S.NJ8.ASH:
                                      case S.NJ8.DARK:
                                      case S.NJ8.ONYX:
                                          return pB;
                                      case S.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return pB;
                                  }
                              })(s),
                          }),
                          (0, A.jsxs)("div", {
                              className: pF._9,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: R.intl.string(R.t.dMaDFX),
                                  }),
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: R.intl.string(R.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, A.jsx)(uT.A, {
                              size: lZ.$n.Sizes.LARGE,
                              color: lZ.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ac.Ay.isPremium(t)
                                      ? R.intl.string(R.t.AfRWI8)
                                      : R.intl.string(R.t.nkdUym),
                              },
                              subscriptionTier: tZ.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var pX = n(203164);
function pY() {
    let e = (0, E.bG)([lg.default], () => {
            let e = lg.default.getCurrentUser();
            return (tg()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, Eb.L)(tZ.PremiumTypes.TIER_2),
        n = (0, E.bG)([xM.A, sI.A], () => sI.A.getGuild(xM.A.selectedGuildId));
    tg()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, E.cf)([xM.A], () => ({ ...xM.A.getPendingChanges(n.id), errors: xM.A.getErrors(n.id) })),
        d = (0, xK.V7)({ userId: e.id, image: i }),
        c = (0, xJ.EC)(n.id),
        g = (0, E.bG)([xZ.Ay], () => (null == n.id ? null : xZ.Ay.getMember(n.id, e.id))),
        m = (0, E.bG)([xW.A], () => xW.A.getGuildMemberProfile(e.id, n.id)),
        h = ac.Ay.canUsePremiumProfileCustomization(e),
        S = (0, xB.z5)(i, g?.avatar),
        x = (0, xB.Ac)(l, m?.banner),
        p = (0, pU.l)(o, m?.themeColors),
        T = m?.bio ?? "",
        f = m?.pronouns ?? "";
    return (0, A.jsxs)("div", {
        className: pX.Q,
        children: [
            (0, A.jsx)(
                pw,
                {
                    errors: u?.nick ?? c?.nick,
                    username: pM.Ay.getName(e),
                    pendingNick: s,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, A.jsx)(
                pG,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, pi.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, A.jsxs)(pz, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, A.jsx)(
                        pu,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.lqaIxI), (0, A.jsx)(x$.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, x0.rM)(e, g?.avatar, (e) => (0, pi.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, A.jsx)(
                        pl,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t["7v0T9P"]), (0, A.jsx)(x$.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, A.jsx)(pg, { user: e, guildId: n.id }),
                    (0, A.jsx)(
                        ph,
                        { user: e, guild: n, titleIcon: (0, A.jsx)(x$.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, A.jsx)(
                        pT,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.wR5wOo), (0, A.jsx)(x$.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, A.jsx)(
                        p_,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.GWrZOd), (0, A.jsx)(x$.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, A.jsx)(
                        pS,
                        {
                            showRemoveBannerButton: x,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, x0.rM)(e, m?.banner, (e) => (0, pi.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, A.jsx)(pP, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, pi.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: p,
                    }),
                    (0, A.jsx)(
                        pe,
                        {
                            placeholder: R.intl.string(R.t["/7NKgv"]),
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.ZzAR2Y), (0, A.jsx)(x$.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, pi.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: T,
                            disabled: !h,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var pH = n(832131);
function pK(e) {
    (0, sm.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, A.jsx)(t, { source: { ...e, page: S.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function pW(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, ek.Ay)(tM.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, E.bG)([lg.default], () => {
            let e = lg.default.getCurrentUser();
            return (tg()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, E.bG)([xZ.Ay], () => (null != t ? xZ.Ay.getMember(t.id, s.id) : null)),
        r = (0, E.bG)([xW.A], () => !xW.A.isFetchingProfile(s.id, t?.id)),
        a = (0, E.bG)([tl.A], () => tl.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, E.cf)([xM.A], () => xM.A.getPendingChanges(t?.id)),
        c = (0, xK.V7)({ userId: s.id, image: o }),
        g = (0, xB.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, xB.B0)(s, t?.id);
    return (h.useEffect(() => () => te.h.wait(xw.IM), []), a)
        ? (0, A.jsx)(or.A, {})
        : r
          ? (0, A.jsxs)(ek.f5, {
                value: i,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/normal",
                        children: R.intl.format(R.t["/PTB2E"], {
                            helpCenterLink: eT.A.getArticleURL(S.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(an.A, { guildId: t.id, onChange: n }),
                                  (0, A.jsx)(xY, {
                                      profilePreviewTitle: (0, A.jsx)(p.D, {
                                          variant: "heading-md/medium",
                                          className: pH.YV,
                                          children: R.intl.formatToPlainString(R.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, A.jsx)(xH.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: ac.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: pK,
                                          containerClassName: pH.ti,
                                      }),
                                      nameplatePreview: (0, A.jsx)(xF.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? pH.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, A.jsx)(pY, {}),
                                  }),
                              ],
                          })
                        : (0, A.jsx)(xQ, {}),
                ],
            })
          : (0, A.jsx)(oo.y, {});
}
var pZ = n(903209),
    pq = n(641130);
function pQ(e) {
    let { children: t, notice: n } = e;
    return (0, A.jsxs)("div", { className: pq.r, children: [n, (0, A.jsx)("div", { children: t })] });
}
var pJ = n(823092),
    p$ = n(815996),
    p0 = n(379197),
    p1 = n(488430),
    p2 = n(457421),
    p3 = n(940622),
    p5 = n(25176),
    p4 = n(757993);
let p6 = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: s } = (0, ek.Ay)(tM.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = h.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, p3.mb)(p5.RN.UPSELL_BANNER)),
        (t = (0, p3.mb)(p5.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, E.bG)([p2.A], () => p2.A.getMarketingBySurface(p0.R.EDIT_PROFILE_SETTINGS))),
        (i = h.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: R.intl.string(R.t.QZVVBh),
                          body: R.intl.string(R.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        h.useMemo(
            () => ({ ...i, type: p1.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, pJ.L_)();
    return (
        h.useEffect(() => {
            (tr.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tZ.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            }),
                (0, tH.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                    (0, tK.uq)(tZ.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [s, d]),
        (0, A.jsxs)("div", {
            ref: l,
            className: p4.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, A.jsx)("div", {
                    className: p4.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, A.jsx)("img", { src: a, className: p4.Qw, alt: "" }),
                }),
                (0, A.jsxs)("div", {
                    className: p4.Em,
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: p4.DD,
                            children: o,
                        }),
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, A.jsx)(_.$, {
                    onClick: function () {
                        g(() =>
                            (0, p$.Cz)({
                                analyticsLocations: s,
                                analyticsSource: tM.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: R.intl.string(R.t.fYfGgK),
                }),
            ],
        })
    );
};
var p8 = n(451909),
    p7 = n(202639),
    p9 = n(285373),
    Te = n(835071),
    Tt = n(724651),
    Tn = n(732280),
    Ti = n(590180),
    Ts = n(898461),
    Tl = n(469054),
    Tr = n(601298),
    Ta = n(207803),
    To = n(461797);
let Tu = Object.keys(To.jB);
function Td(e) {
    let t = null == e ? Tu : Tu.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var Tc = n(201805),
    Tg = n(221650);
function Tm(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion),
        s = (0, Tc.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = h.useMemo(() => {
            let e = (0, To.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, A.jsxs)("div", {
        className: Tg.kL,
        children: [
            (0, A.jsx)(n4.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: Tg.x6,
                "aria-label": R.intl.string(R.t["44yJxh"]),
                children: s.render(),
            }),
            (0, A.jsxs)(n4.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${R.intl.string(R.t["44yJxh"])}`,
                className: Tg.Lt,
                children: [
                    (0, A.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: Tg.L_ }),
                    (0, A.jsx)(H.E, {
                        className: Tg._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var TA = n(511484),
    Th = n(811611),
    TE = n(206697),
    TS = n(507553);
function Tx(e, t) {
    let n = TS.A.useField("scrollPosition"),
        i = (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion);
    (0, h.useEffect)(() => {
        let s = e.current;
        if (null == s || n !== t) return;
        let l = requestAnimationFrame(() => {
            (s.scrollIntoView({ behavior: i ? "auto" : "smooth" }), TS.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n, i]);
}
var Tp = n(844222),
    TT = n(842092);
let Tf = "/assets/d4955aabdcb5bdee.png",
    TI = { assetOrigin: Tl.E.NEW_ASSET, imageUri: Tf, staticImageUri: Tf, description: "", originalAsset: void 0 };
function T_(e) {
    let { user: t } = e,
        { reducedMotion: n } = h.useContext(Tp.C),
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
            tryItOutAvatarDecoration: S,
            tryItOutDisplayNameStyles: x,
        } = (0, E.cf)([xM.A], () => {
            let e = xM.A.getPendingChanges(),
                t = xM.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, xK.V7)({ userId: t.id, image: g ?? i });
    return (0, A.jsx)(xH.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? s ?? TI,
        pendingDisplayNameStyles: x ?? a,
        pendingAvatar: p,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== S ? S : l,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : TT.WX,
        containerClassName: TT.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var TN = n(829497);
function TC(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        s = ac.Ay.isPremium(t),
        l = ac.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, E.cf)([xM.A], () => {
            let e = xM.A.getPendingChanges(),
                t = xM.A.getErrors(),
                n = xM.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, h.useState)(Td()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, h.useMemo)(() => {
                    let t = (0, To.Wt)(e);
                    return {
                        banner: (0, Tr.X)({
                            assetOrigin: Tl.E.NEW_ASSET,
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
                r = (0, E.bG)([Ti.A], () => {
                    let e = Ti.A.getProduct(s);
                    return (0, Ts.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, h.useEffect)(() => {
                (0, Ta.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: l });
            }, [n, i, r, l]);
            let a = (0, h.useCallback)(() => {
                let n = Td(e);
                (t(n), tr.default.track(S.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = h.useRef(null);
    Tx(m, eC._F.TRY_IT_OUT);
    let { analyticsLocations: x, sourceAnalyticsLocations: T } = (0, ek.Ay)(tM.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function f(e) {
        e && ((0, TE.T)(), tr.default.track(S.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    h.useEffect(() => {
        n &&
            (tr.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tZ.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: S.liQ.USER_SETTINGS },
                location_stack: T,
            }),
            (0, tH.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, T, () => (0, tK.uq)(tZ.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [T, t, n]);
    let I = (0, Tn.V)()?.subscriptionTrial?.skuId === tZ.pe.TIER_2,
        _ = (0, Tt.O)(),
        N = (0, TA.U9)(_, tZ.pe.TIER_2);
    return i
        ? (0, A.jsx)(ek.f5, {
              value: x,
              children: (0, A.jsxs)(uf.A, {
                  ref: m,
                  className: TN.MT,
                  type: uf.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, A.jsx)(xY, {
                          stickyPreview: !1,
                          layoutClassName: TN.th,
                          profilePreviewTitle: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(r9.t, { size: "md", color: "currentColor", className: TN.PC }),
                                  R.intl.string(R.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, A.jsxs)(A.Fragment, {
                              children: [(0, A.jsx)(Tm, { preset: c, onShuffle: g }), (0, A.jsx)(T_, { user: t })],
                          }),
                          children: (0, A.jsxs)("div", {
                              children: [
                                  (0, A.jsxs)("div", {
                                      children: [
                                          (0, A.jsx)(p.D, {
                                              variant: "heading-xl/extrabold",
                                              children: R.intl.string(R.t["2zGdAW"]),
                                          }),
                                          (0, A.jsx)(H.E, {
                                              className: TN.h_,
                                              variant: "text-sm/normal",
                                              children: R.intl.string(R.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsx)(pP, {
                                      className: TN.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, xK.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: Ta.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, A.jsx)(pS, {
                                      className: TN.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: Ta.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, A.jsx)(pu, {
                                          className: TN.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: Ta.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: R.intl.string(R.t["7z0D1c"]),
                                          sectionTitle: R.intl.string(R.t.vtFfPX),
                                      }),
                                  (0, A.jsx)(pg, { user: t, className: TN.fz }),
                                  !I &&
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/normal",
                                          children: R.intl.string(R.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !I &&
                          (0, A.jsx)(p7.d, {
                              onSubscribeModalClose: f,
                              className: TN.Kv,
                              showUpsell: !0,
                              text: R.intl.format(R.t.TmfgI2, {
                                  onClick: () => {
                                      (0, Te.K)({ onSubscribeFinish: f });
                                  },
                              }),
                              button: s
                                  ? R.intl.string(R.t.AfRWI8)
                                  : N
                                    ? R.intl.formatToPlainString(R.t.bkQ4bH, { percent: _?.discount.amount })
                                    : R.intl.string(R.t.pj0XBN),
                              position: "inline",
                          }),
                      I &&
                          (0, A.jsxs)("div", {
                              children: [
                                  (0, A.jsx)("div", { className: TN.BU }),
                                  (0, A.jsx)(Th.Ay, {
                                      type: tZ.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tZ.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var Tb = n(814390),
    Ty = n(643056),
    Tv = n(843282),
    Tj = n(145497),
    TO = n(685073),
    TL = n(534400),
    TR = n(581781),
    TD = n(743981),
    TP = n(195801);
let TG = (0, tY.Ld)(),
    TM = h.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, E.cf)([lg.default], () => (0, TO.Zo)(lg.default.getCurrentUser()?.primaryGuild)),
            l = void 0 !== n ? n : (s.guildId ?? null),
            r = h.useMemo(() => {
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
                        e.set(n, { id: n, name: R.intl.string(R.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, s, l]),
            a = h.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = h.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, A.jsx)(TR.A, {
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
            u = h.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, A.jsx)(Tj.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [r],
            ),
            d = h.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, A.jsx)(TL.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: TD.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [r],
            ),
            c = h.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, A.jsx)(A.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = h.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = h.useCallback((e) => e === l, [l]),
            S = h.useCallback((e) => e, []),
            x = h.useCallback(() => {
                i?.(null);
            }, [i]),
            p = h.useRef(null);
        return (
            Tx(p, eC._F.GUILD_TAG),
            (0, A.jsxs)(ai.A, {
                title: R.intl.string(R.t.Pdd1nd),
                titleId: TG,
                ref: p,
                children: [
                    (0, A.jsx)(H.E, {
                        className: TP.VA,
                        variant: "text-sm/normal",
                        children: R.intl.string(R.t.mlZ6Jx),
                    }),
                    (0, A.jsx)(Tv.Pw, {
                        className: TP.Lt,
                        optionClassName: TP.S0,
                        isSelected: m,
                        options: a,
                        select: g,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: S,
                        clear: x,
                        clearable: null != l,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var TU = n(318785),
    TV = n(992526),
    Tk = n(470739);
let Tw = function () {
    return (0, TV.J)({ location: "UserSettingsProfileCustomization" })
        ? (0, A.jsx)(ai.A, {
              title: R.intl.string(R.t.l6w3Vj),
              description: R.intl.string(R.t.joHqdj),
              children: (0, A.jsx)(_.$, {
                  text: R.intl.string(R.t.wRraFx),
                  onClick: () => {
                      (0, Tk._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var TF = n(953726);
let TB = (0, tY.Ld)();
function Tz(e) {
    let t = (0, Eb.L)(tZ.PremiumTypes.TIER_2);
    return (0, A.jsxs)(ai.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: R.intl.string(R.t["9AjdkD"]),
        titleId: TB,
        children: [
            (0, A.jsx)("div", {
                children: (0, A.jsx)(sA.k, {
                    "aria-labelledby": TB,
                    placeholder: e.placeholder,
                    maxLength: S.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, A.jsx)(pg, { user: e.user, className: TF.F }),
        ],
    });
}
var TX = n(376626);
function TY(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = L.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, A.jsx)("div", {
        className: TX.u,
        children: (0, A.jsx)(t3.d, {
            label: R.intl.string(R.t["3cWDuO"]),
            description: s ? null : R.intl.formatToPlainString(R.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, xP._e)() : (0, pi.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function TH(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, pN.r)(n2.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, pC.rh)(l, r, !1),
        o = (0, pj.LX)(a[0]);
    return (0, A.jsx)(ai.A, {
        title: R.intl.string(R.t["/X3fkf"]),
        children: (0, A.jsx)(pR, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var TK = n(518477);
let TW = function () {
    let e = (0, E.bG)([uD.default], () => uD.default.getId());
    return (0, A.jsx)(ai.A, {
        title: R.intl.string(R.t.Jzj9q4),
        children: (0, A.jsx)(_.$, {
            text: R.intl.string(R.t.Geikwq),
            onClick: () => {
                (0, xV.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tM.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: TK.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var TZ = n(654910);
function Tq() {
    let e = (0, E.bG)([lg.default], () => {
            let e = lg.default.getCurrentUser();
            return (tg()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, E.bG)([xW.A], () => xW.A.getUserProfile(e.id)),
        n = (0, Ty.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, E.cf)([xM.A], () => {
            let e = xM.A.getPendingChanges(),
                t = xM.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, xK.V7)({ userId: e.id, image: i }),
        h = (0, xJ.EC)(),
        S = ac.Ay.canUsePremiumProfileCustomization(e),
        x = (0, xB.z5)(i, e.avatar),
        p = (0, xB.Ac)(l, t?.banner),
        T = (0, pb.Ay)(e.id),
        f = T?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (h?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (h?.bio ?? []),
        N = (0, TU.b)(),
        C = null != (0, TO.Zo)(e.primaryGuild).guildId;
    return (0, A.jsxs)("div", {
        className: TZ.Q,
        children: [
            (0, A.jsx)(Tz, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, pi.p)({ globalName: e }),
                user: e,
            }),
            (0, A.jsx)(
                pG,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, pi.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, A.jsx)(TW, {}),
            (0, A.jsx)(
                pu,
                {
                    onAvatarChange: (e) => {
                        ((0, pi.p)({ avatar: e }), (0, xB.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: x,
                    errors: g.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, A.jsx)(pl, { user: e, sectionTitle: R.intl.string(R.t["7v0T9P"]) }, "decoration"),
            (0, A.jsx)(ph, { user: e }),
            (0, A.jsx)(pT, { user: e, sectionTitle: R.intl.string(R.t.wR5wOo) }, "effect"),
            (0, A.jsx)(p_, { user: e, sectionTitle: R.intl.string(R.t.GWrZOd) }, "frame"),
            S
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(
                              pS,
                              {
                                  showRemoveBannerButton: p,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, pi.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, A.jsx)(pP, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, pi.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, A.jsx)(
                      TH,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, pi.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, A.jsx)(
                pe,
                {
                    sectionTitle: R.intl.string(R.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, pi.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, A.jsx)(TM, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, pi.p)({ primaryGuildId: e }),
                }),
            null != f &&
                !n &&
                (0, A.jsx)(TY, { legacyUsername: f, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, A.jsx)(Tw, {}, "badges"),
        ],
    });
}
function TQ() {
    (0, sm.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("935205"), n.e("766901"), n.e("641704")]).then(n.bind(n, 562011));
        return (t) =>
            (0, A.jsx)(e, {
                ...t,
                source: {
                    page: S.liQ.USER_SETTINGS,
                    section: S.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: S.ZSU.BUTTON_CTA,
                    type: S.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var TJ = n(447080);
function T$() {
    let e = (0, E.bG)([lg.default], () => {
            let e = lg.default.getCurrentUser();
            return (tg()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, E.bG)([tl.A], () => tl.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, E.cf)([xM.A], () => ({ ...xM.A.getPendingChanges(), showNotice: xM.A.showNotice() })),
        a = (0, xK.V7)({ userId: e.id, image: i }),
        o = (0, xB.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, Tb.A)() && null != n ? p8.Ay.parse(void 0, n).content : n,
        d = ac.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, ek.Ay)(tM.A.USER_SETTINGS_USER_PROFILE);
    h.useEffect(() => () => te.h.wait(xP.IM), []);
    let [g, m] = h.useState(!1),
        x = !d,
        p = h.useRef(null);
    return t
        ? (0, A.jsx)(or.A, {})
        : (0, A.jsxs)(ek.f5, {
              value: c,
              children: [
                  (0, A.jsx)(p6, {}),
                  (0, A.jsx)(xY, {
                      profilePreview: (0, A.jsx)(xH.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: TQ,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: TJ.ti,
                      }),
                      nameplatePreview: (0, A.jsx)(xF.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? TJ.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, A.jsx)(Tq, {}),
                  }),
                  (0, A.jsx)(dg.L, {
                      innerRef: p,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: x,
                      children: (0, A.jsx)("div", {
                          ref: p,
                          children: (0, A.jsx)(TC, { user: e, shouldShow: x, isVisible: g }),
                      }),
                  }),
                  x &&
                      !l &&
                      (0, A.jsx)(p7.d, {
                          className: TJ.EL,
                          showUpsell: !g,
                          text: R.intl.format(R.t.TmfgI2, { onClick: () => (0, Te.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, A.jsx)(p9.l, {
                              size: "md",
                              location: tM.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, A.jsx)("div", {
                              className: TJ.Xl,
                              children: (0, A.jsx)(_.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (tr.default.track(S.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          p?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: R.intl.string(R.t.uw9zI7),
                                  icon: r9.t,
                              }),
                          }),
                      }),
              ],
          });
}
var T0 = n(625494);
n(46121);
var T1 = n(944983);
let T2 = { [eC.Eq.USER_PROFILE]: "main_profile_tab", [eC.Eq.GUILD]: "guild_profile_tab" },
    T3 = (0, d.E2)(c.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, E.bG)([s_.A, co.Ay, xM.A], () => {
                    let e = xM.A.selectedGuildId ?? s_.A.getGuildId();
                    return null == e || xM._.has(e) ? co.Ay.getFlattenedGuildIds().find((e) => !xM._.has(e)) : e;
                }),
                t = (0, E.bG)([sI.A], () => sI.A.getGuild(e)),
                n = (0, E.bG)([xM.A], () => xM.A.showNotice()),
                i = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
                s = TS.A.useField("subsection");
            return (
                h.useEffect(() => {
                    (0, it._)(T2[s]);
                }, [s]),
                h.useEffect(() => {
                    null != i && t?.id != null && (0, pZ.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, A.jsx)(pQ, {
                    children: (0, A.jsxs)(uJ.F, {
                        component: (0, A.jsx)(so.A, {
                            children: (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(R.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, A.jsxs)(xk.V, {
                                className: T1.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                T0._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eC.Eq.GUILD && null != t && (0, xw.V2)(t.id),
                                            TS.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, A.jsx)(
                                        xk.V.Item,
                                        {
                                            className: T1.YU,
                                            id: eC.Eq.USER_PROFILE,
                                            children: R.intl.string(R.t["2p07FR"]),
                                        },
                                        eC.Eq.USER_PROFILE,
                                    ),
                                    (0, A.jsx)(
                                        xk.V.Item,
                                        {
                                            className: ic()(T1.YU, T1.HY),
                                            "aria-label": R.intl.string(R.t.kPHroX),
                                            id: eC.Eq.GUILD,
                                            children: R.intl.string(R.t.kPHroX),
                                        },
                                        eC.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eC.Eq.GUILD
                                ? (0, A.jsx)(pW, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, ii.fO)({ duration: 300, intensity: 1.4 }),
                                                  T0._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, xw.JJ)(e.id);
                                      },
                                  })
                                : (0, A.jsx)(T$, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            R.intl.string(R.t["vi7f+q"]),
            R.intl.string(R.t.Ip9nBS),
            R.intl.string(R.t["2p07FR"]),
            R.intl.string(R.t["7vhiqk"]),
            R.intl.string(R.t.kPHroX),
            R.intl.string(R.t.lqaIxI),
            R.intl.string(R.t.Vgdusv),
            R.intl.string(R.t.DMeO2X),
        ],
    }),
    T5 = (0, d.zZ)(c.X.PROFILE_CATEGORY, { buildLayout: () => [T3] });
var T4 = n(379633);
function T6() {
    let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, dy.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return null == e
        ? null
        : (0, A.jsxs)("div", {
              className: T4.a5,
              children: [
                  (0, A.jsx)(f.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: I._3.SIZE_48,
                      "aria-label": R.intl.string(R.t.lqaIxI),
                  }),
                  (0, A.jsxs)("div", {
                      className: T4.FS,
                      children: [
                          (0, A.jsx)(H.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, A.jsxs)("div", {
                              className: T4.Fk,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: R.intl.string(R.t.Ip9nBS),
                                  }),
                                  (0, A.jsx)(ad.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let T8 = (0, d.t_)(c.X.PROFILE_PANEL, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        notice: { stores: [xM.A], element: xG.A },
        initialize: () => () =>
            te.h.wait(() => {
                (0, xP.F7)();
            }),
        buildLayout: () => [T5],
    }),
    T7 = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: fe,
        StronglyDiscouragedCustomComponent: T6,
        usePredicate: () => !(0, xU.X)("user_settings_sidebar"),
        buildLayout: () => [T8],
    }),
    T9 = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: fe,
        StronglyDiscouragedCustomComponent: T6,
        usePredicate: () => (0, xU.X)("user_settings_sidebar"),
        onClick: () => {
            let e = uD.default.getId();
            (0, xV.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function fe() {
    let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, dy.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return (0, A.jsx)(f.eu, { src: t, avatarDecoration: n, size: I._3.SIZE_20, "aria-hidden": !0 });
}
let ft = (0, d.WI)(c.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [T7, T9] });
var fn = n(98207),
    fi = (n(204925), n(818348));
let fs = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sm.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 888363),
            );
            return (n) => (0, A.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? fi.tE : null, onCloseCallback: t },
    );
};
var fl = n(940856),
    fr = n(506775),
    fa = n(379257),
    fo = n(121780),
    fu = n(666113);
function fd() {
    let e = fo.A.getCountryCode(),
        t = null != e ? fu.IN[e.alpha2] : void 0;
    fa.A.openUrl(eT.A.getArticleURL(t ?? fu.k9));
}
var fc = n(521169);
function fg() {
    return (0, fc.w)(fu.Vc);
}
var fm = n(680091);
function fA() {
    let e = fg(),
        t = (0, fr.ZP)();
    if (!e) return null;
    switch (t) {
        case fr.M$.ADULT:
            return R.intl.format(fm.default.gi4ulu, { handleOnAgeGatedContentHook: fr.M0 });
        case fr.M$.TEEN:
            return R.intl.format(fm.default["221iML"], {
                handleOnAgeGatedContentHook: fr.M0,
                handleOnConfirmAgeHook: fr.aP,
            });
        case fr.M$.UNVERIFIED:
            return R.intl.format(fm.default["W0/7DD"], {
                handleOnAgeGatedContentHook: fd,
                handleOnConfirmAgeHook: fr.aP,
            });
    }
}
var fh = n(26137),
    fE = n(957485);
function fS() {
    let e = fg(),
        t = (0, fr.ZP)();
    return e ? { icon: t === fr.M$.ADULT ? fh.r : fE.i, backgroundColor: n2.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function fx() {
    let e = fS();
    return null != e ? { type: m.hp.ICON, ...e } : null;
}
function fp() {
    return fg() ? R.intl.string(R.t.piqs0o) : null;
}
var fT = n(438140);
let ff = [{ badgeType: m.Xi.NEW, dismissibleContent: eu.M.TINY_BRONCO_SETTINGS }],
    fI = [];
function f_() {
    return (0, fT.Wt)() ? ff : fI;
}
var fN = n(36149),
    fC = n(207560),
    fb = (((a = {}).LEGACY = "legacy"), (a.TINY_BRONCO = "tinyBronco"), a),
    fy = (((o = {}).VERIFY = "verify"), (o.EDIT = "edit"), (o.INFO = "info"), o);
function fv(e, t) {
    let n = (0, E.bG)([lg.default], () => null != lg.default.getCurrentUser()),
        i = (0, fC.fk)(),
        s = (0, fr.ZP)(),
        l = (0, fN.Y2)(),
        r = fg();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (s) {
        case fr.M$.UNVERIFIED:
            return "verify" === e;
        case fr.M$.TEEN:
            return e === (r ? "info" : "verify");
        case fr.M$.ADULT:
            return e === (l ? "edit" : "info");
    }
}
var fj = n(841365);
function fO() {
    let e = (0, fr.hD)();
    return (0, A.jsxs)(H.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, R.intl.format(fj.default.WM5adV, { handleOnHelpUrlHook: fr.M0 })],
    });
}
let fL = {
        useTitle: () => fp() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fA,
        useVariant: () => "secondary",
        useLeadingDecoration: fx,
        getDismissibleBadges: f_,
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fO,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        onClick: function () {
            (0, sm.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    },
    fR = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...fL, usePredicate: () => fv(fy.EDIT, fb.LEGACY) }),
    fD = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...fL,
        usePredicate: () => fv(fy.EDIT, fb.TINY_BRONCO),
        useAriaLabel: () => R.intl.string(R.t.pBMSie),
    }),
    fP = {
        useTitle: () => fp() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fA,
        useLeadingDecoration: function () {
            let e = fS();
            return null != e ? { type: m.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: f_,
        useTrailingDecoration: () => ({ type: m.Ln.TEXT, text: (0, fr.hD)() }),
    },
    fG = (0, d.v_)(c.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...fP, usePredicate: () => fv(fy.INFO, fb.LEGACY) }),
    fM = (0, d.v_)(c.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...fP,
        usePredicate: () => fv(fy.INFO, fb.TINY_BRONCO),
    }),
    fU = {
        useTitle: () => fp() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fA,
        useVariant: () => "secondary",
        useLeadingDecoration: fx,
        getDismissibleBadges: f_,
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: (0, fr.hD)() }),
        useLabel: function () {
            return (0, fN.yM)() ? R.intl.string(R.t["9KiIz6"]) : R.intl.string(R.t.DVywUB);
        },
        onClick: fr.aP,
    },
    fV = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...fU, usePredicate: () => fv(fy.VERIFY, fb.LEGACY) }),
    fk = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...fU,
        usePredicate: () => fv(fy.VERIFY, fb.TINY_BRONCO),
    }),
    fw = [fV, fR, fG],
    fF = [fk, fD, fM],
    fB = (0, d.Tf)(c.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => R.intl.string(R.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: R.intl.string(R.t.qxk9zo) }),
        useLabel: () => R.intl.string(R.t.BleMPB),
        onClick: () => fs(),
    });
function fz(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fX(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function fY(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: s } = e,
        [l, r] = h.useState(!1),
        a = l ? t : n(t);
    return (0, A.jsxs)(X.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: a }),
            (0, A.jsx)(hm.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : i,
                onClick: () => r(!l),
                text: l ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
            }),
        ],
    });
}
function fH() {
    let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.email);
    return null == e
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t["8SfTN/"]) })
        : (0, A.jsx)(fY, {
              text: e,
              censor: fX,
              revealLabel: R.intl.string(R.t["Zvx+yV"]),
              hideLabel: R.intl.string(R.t.nqTD4d),
          });
}
let fK = (0, d.Tf)(c.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fH }),
    useLabel: function () {
        return null == (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.email)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.email)
            ? R.intl.string(R.t["pvBD+W"])
            : R.intl.string(R.t["8peUT0"]);
    },
    onClick: function () {
        (0, sm.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, A.jsx)(e, { ...t });
        });
    },
});
var fW = n(557722),
    fZ = n(53516);
function fq() {
    let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t.I5kDqj) })
        : (0, A.jsx)(X.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, A.jsx)(fY, {
                  text: t,
                  censor: fz,
                  revealLabel: R.intl.string(R.t.eY3xlT),
                  hideLabel: R.intl.string(R.t["jllbv+"]),
              }),
          });
}
let fQ = (0, d.Tf)(c.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.kerONq),
    useAriaLabel: function () {
        return null == (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t["SfUuE+"])
            : R.intl.string(R.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fq }),
    useLabel: function () {
        return null == (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    onClick: function () {
        null == lg.default.getCurrentUser()?.phone
            ? (0, sm.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, A.jsx)(e, { reason: fW.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fZ.V },
              )
            : (0, sm.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, A.jsx)(e, { ...t });
              });
    },
});
function fJ() {
    let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function f$() {
    let e = (0, xJ.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, E.bG)([lg.default], () => lg.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, A.jsx)(sa.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, A.jsx)(iQ.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: n2.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let f0 = (0, d.Tf)(c.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => R.intl.string(R.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: f$,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        useAriaLabel: () => R.intl.string(R.t.JECa91),
        useSubtitle: () => (fJ() ? R.intl.string(R.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fJ,
        onClick: function () {
            (0, sm.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    }),
    f1 = (0, d.zZ)(c.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, E.bG)([lg.default], () => null != lg.default.getCurrentUser()),
        useTitle: () => R.intl.string(R.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: m.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            title: R.intl.string(R.t.tuGzBT),
                            text: R.intl.string(R.t.NAzplE),
                            button: { text: R.intl.string(R.t.lm1UKt), onClick: () => (0, fl.S)(e) },
                        }
                  : {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: R.intl.string(R.t["/3qnL/"]),
                        text: R.intl.string(R.t.qKs3vg),
                        button: { text: R.intl.string(R.t["7psymi"]), onClick: () => fs() },
                    };
        },
        buildLayout: () => [f0, fB, fK, fQ, ...fw],
    });
var f2 = n(398177);
let f3 = (0, d.Tf)(c.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => R.intl.string(R.t["CIGa+7"]),
    useLabel: () => R.intl.string(R.t.bt75uw),
    useAriaLabel: () => R.intl.string(R.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, sm.openModal)((e) => (0, A.jsx)(f2.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var f5 = n(200921);
let f4 = [];
function f6() {
    f4 = [];
}
class f8 extends E.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return f4;
    }
}
let f7 = new f8(te.h, {
    LOGOUT: f6,
    LOGIN_SUCCESS: f6,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        f4 = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...f4],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        f4 = n;
    },
});
function f9() {
    let e = (0, E.cf)([f7], () => f7.getSessions());
    return h.useMemo(() => {
        let t = [...e],
            n = null,
            i = uD.default.getAuthSessionIdHash();
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
function Ie(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? R.intl.string(R.t.TXCmfL) : im()(e).fromNow();
}
var It = n(176524),
    In = n(646270),
    Ii = n(738678),
    Is = n(489828);
function Il(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, A.jsxs)(X.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, A.jsx)(It.A, { icon: t, color: r ? n2.A.colors.ICON_MUTED : "currentColor" }),
            (0, A.jsxs)(X.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, A.jsxs)(X.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, A.jsx)(H.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, A.jsx)(H.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function Ir(e) {
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
                            return { text: R.intl.string(R.t.cDHCNY), icon: SE.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: In.u };
                        case "horizon os":
                            return { text: e, icon: Ii.G };
                        default:
                            return { text: e, icon: SE.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : Ie(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(io.Vq);
    return (0, A.jsx)(Il, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, A.jsx)(n4.D, {
                className: Is.X,
                onClick: () => (0, f5.U0)(t.id_hash),
                "aria-label": R.intl.string(R.t.E4MJNt),
                children: (0, A.jsx)(EA.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function Ia(e) {
    let { title: t, children: n } = e,
        i = h.useId();
    return (0, A.jsxs)(X.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, A.jsx)(p.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, A.jsx)(X.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let Io = (0, d.E2)(c.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = f9();
            return null == e
                ? (0, A.jsx)(oo.y, {})
                : (0, A.jsx)(Ia, {
                      title: R.intl.string(R.t.LLS19o),
                      children: (0, A.jsx)(Ir, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    Iu = (0, d.E2)(c.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = f9();
            return (0, A.jsx)(t2.D, {
                label: R.intl.string(R.t.Vij32M),
                description: R.intl.string(R.t.OTXyaf),
                children: (0, A.jsx)(_.$, {
                    onClick: () => (0, f5.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: R.intl.string(R.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = f9();
            return e.length > 0;
        },
    });
var Id = n(766928);
function Ic() {
    return (0, A.jsx)(Il, {
        icon: Id.W,
        label: R.intl.string(R.t.iUa0sn),
        description: R.intl.format(R.t["044+8i"], {
            onClick: () =>
                (0, no.openUserSettings)(c.X.ACCOUNT_PANEL, { analyticsLocations: [tM.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let Ig = (0, d.E2)(c.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = f9(),
                t = (0, E.bG)([lg.default], () => lg.default.getCurrentUser());
            return (0, A.jsxs)(Ia, {
                title: R.intl.string(R.t.xx1MWc),
                children: [
                    e.map((e) => (0, A.jsx)(Ir, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, A.jsx)(Ic, {}),
                ],
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = f9(),
                t = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    Im = (0, d.zZ)(c.X.SESSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useSubtitle: () => R.intl.string(R.t.b7ZpTM),
        initialize: () => {
            (0, f5.GY)();
        },
        buildLayout: () => [Io, Ig, Iu],
        useSearchTerms: () => [
            R.intl.string(R.t["+1h0k/"]),
            R.intl.string(R.t.LLS19o),
            R.intl.string(R.t.xx1MWc),
            R.intl.string(R.t.lSWsrd),
        ],
    }),
    IA = (0, d.t_)(c.X.SESSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useObscuredNotice: or.L,
        buildLayout: () => [Im],
    }),
    Ih = (0, d.t0)(c.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [IA],
        initialize: () => {
            (0, f5.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = f9(),
                n = t.length + +(null != e);
            return {
                type: m.xn.TEXT,
                text: n > 0 ? R.intl.formatToPlainString(R.t.G7zwOk, { count: n }) : R.intl.string(R.t.MKDeyL),
            };
        },
    });
var IE = n(464477);
function IS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? R.intl.string(R.t.YJGvuD)
              : R.intl.string(R.t["3iKih7"])
          : e.hasFlag(S.nhx.PARTNER)
            ? t
                ? R.intl.string(R.t["9UucjT"])
                : R.intl.string(R.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? R.intl.string(R.t["9VWpT9"])
                  : R.intl.string(R.t.LfCBZG)
              : null;
}
function Ix() {
    return (0, a5.bG)([lg.default], () => {
        let e = lg.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var Ip =
    (((u = {}).AVAILABLE = "available"),
    (u.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (u.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    u);
function IT() {
    let e = (0, a5.bG)([lg.default], () => lg.default.getCurrentUser()?.verified);
    return IE.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function If() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, a5.bG)([sI.A, pV.A, lg.default], () =>
        lg.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? R.intl.string(R.t.hxf9fX)
                : R.intl.string(R.t["3iKih7"])
            : sI.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        pV.A.can(S.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? R.intl.string(R.t.OYTCUh)
                  : R.intl.string(R.t.HC8uSZ)
              : null,
    );
}
var II = n(466034);
let I_ = (0, d.Tf)(c.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: () => If(!0),
        useDisabled: () => null !== If(!0),
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, E.bG)([uD.default], () => uD.default.hasTOTPEnabled()),
                t = IT() === Ip.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n3.A)({
                title: R.intl.string(R.t["D+aE7g"]),
                subtitle: R.intl.string(R.t.EA4ZEk),
                variant: "critical",
                confirmText: R.intl.string(R.t.N86XcP),
                onConfirm: () => fn.A.disable(),
            }),
    }),
    IN = (0, d.zZ)(c.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RumMFo),
        useSubtitle: () => R.intl.string(R.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, E.bG)([uD.default], () => uD.default.hasTOTPEnabled()),
                t = IT() === Ip.AVAILABLE;
            if (!e && t)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: R.intl.string(R.t.cTNUeD),
                            onClick: II.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (IT()) {
                case Ip.UNAVAILABLE_NO_CRYPTO:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.PhHhsj) };
                case Ip.UNAVAILABLE_UNVERIFIED:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                case Ip.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [I_],
    });
var IC = n(670492),
    Ib = n(32880),
    Iy = n(663417),
    Iv = n(658675),
    Ij = n(900686);
function IO() {
    (0, sm.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, A.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    fn.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, sm.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e("514567"), n.e("96179")]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, A.jsx)(e, { ...n, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: R.intl.string(R.t.PsQmzU),
                actionText: R.intl.string(R.t.ajkYcF),
            });
    });
}
var IL = n(858487);
function IR(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function ID() {
    let e = IC.A.getVerificationKey();
    if ("" === e) return void IO();
    try {
        await fn.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, lr.P)({
            message: e.body?.message ?? R.intl.string(R.t.F8FvUy),
            type: la.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function IP(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = IR(t),
        s = h.useRef(null),
        l = (0, A.jsxs)(A.Fragment, {
            children: [(0, A.jsx)(Iv.P, { checked: n }), (0, A.jsx)(H.E, { variant: "text-md/normal", children: i })],
        });
    return uV.p5
        ? (0, A.jsx)(n4.D, {
              tag: "li",
              className: ic()(IL.aY, IL.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uV.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, uV.C)(i),
                      (0, lr.P)({ message: R.intl.string(R.t.mGZ66D), type: la.Ck.SUCCESS, id: "backup-code-copied" }));
              },
              children: l,
          })
        : (0, A.jsx)("li", { className: IL.aY, children: l });
}
let IG = (0, d.zZ)(c.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.fC9qV0),
        useSubtitle: () =>
            (0, E.bG)([IC.A], () => IC.A.getBackupCodes().length > 0)
                ? R.intl.format(R.t.tp7zEK, {})
                : R.intl.string(R.t.LoOi4S),
        usePredicate: Ix,
        buildLayout: () => [IM],
    }),
    IM = (0, d.E2)(c.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.fC9qV0)],
        Component: function () {
            let e = (0, E.bG)([IC.A], () => IC.A.getBackupCodes()),
                t = h.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${IR(t)}` + (n ? ` (${R.intl.string(R.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, A.jsx)(_.$, { text: R.intl.string(R.t.Jc2myK), size: "sm", variant: "secondary", onClick: IO })
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)("ul", {
                              className: IL.E5,
                              children: e.map((e) => (0, A.jsx)(IP, { code: e }, e.code)),
                          }),
                          (0, A.jsxs)(lQ.e, {
                              size: "sm",
                              children: [
                                  (0, A.jsx)(Ij.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, A.jsx)(_.$, {
                                          text: R.intl.string(R.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: Ib.DownloadIcon,
                                      }),
                                  }),
                                  (0, A.jsx)(_.$, {
                                      text: R.intl.string(R.t["3x962E"]),
                                      variant: "secondary",
                                      icon: Iy.RefreshIcon,
                                      onClick: ID,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    IU = (0, d.Tf)(c.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = h.useState(!1),
                n = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : R.intl.format(e ? R.t["xDBk/I"] : R.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, A.jsx)(hm.Q, {
                              text: e ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, sm.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, A.jsx)(e, {
                        ...t,
                        handleSubmit: fn.A.disableSMS,
                        title: R.intl.string(R.t.KLWnit),
                        children: R.intl.string(R.t["W0/Duf"]),
                    });
            }),
    }),
    IV = (0, d.zZ)(c.X.SMS_AUTH_CATEGORY, {
        useTitle: () => R.intl.string(R.t.wuHuI5),
        useSubtitle: () => (0, E.bG)([lg.default], () => IS(lg.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
                t = (0, E.bG)([lg.default], () => null != IS(lg.default.getCurrentUser()));
            if (!e)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "sms-setup-button",
                            text: R.intl.string(R.t.Age7yU),
                            onClick: Ik,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = IT(),
                t = Ix(),
                n = (0, E.bG)([uD.default], () => uD.default.hasTOTPEnabled());
            return e === Ip.AVAILABLE && t && n;
        },
        buildLayout: () => [IU],
    });
function Ik() {
    let e = lg.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: fW.d.USER_SETTINGS_UPDATE, onAddedPhone: fn.A.enableSMS }),
                (0, sm.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("590275"),
                            n.e("766806"),
                            n.e("989545"),
                            n.e("311493"),
                            n.e("84704"),
                            n.e("286197"),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, A.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: fZ.V },
                ));
        } else fn.A.enableSMS();
}
var Iw = n(665671),
    IF = n(442433),
    IB = n(917136),
    Iz = n(976910),
    IX = n(267255);
function IY(e) {
    let { credential: t } = e;
    return (0, A.jsxs)("li", {
        className: IX.e,
        children: [
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: R.intl.format(R.t["7JgxF5"], { lastUsed: Ie(t.last_used) }),
                        }),
                ],
            }),
            (0, A.jsx)(sl.K, {
                icon: cm.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": R.intl.string(R.t["+nrTbK"]),
                onClick: (e) => {
                    (0, IF.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, A.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let IH = (0, d.zZ)(c.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.IBq4Y3),
        useSubtitle: () => R.intl.string(R.t.yK9edS),
        useHeaderDecoration: function () {
            if (IT() === Ip.AVAILABLE)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "add-security-key-button",
                            text: R.intl.string(R.t["Tzs/fw"]),
                            icon: iH.j,
                            onClick: Iw.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (IT()) {
                    case Ip.UNAVAILABLE_NO_CRYPTO:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.bWCGI9) };
                    case Ip.UNAVAILABLE_UNVERIFIED:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                    case Ip.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [IK],
    }),
    IK = (0, d.E2)(c.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [R.intl.string(R.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, E.cf)([Iz.A], () => ({
                hasFetchedCredentials: Iz.A.hasFetchedCredentials(),
                credentials: Iz.A.getCredentials(),
            }));
            return (h.useEffect(() => {
                t || IB.JQ();
            }, [t]),
            t)
                ? (0, A.jsx)(X.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, A.jsx)(IY, { credential: e }, e.id)),
                  })
                : (0, A.jsx)(oo.y, {});
        },
    }),
    IW = (0, d.t_)(c.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => R.intl.string(R.t.m0FidJ),
        buildLayout: () => [IH, IN, IV, IG],
    }),
    IZ = (0, d.t0)(c.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = Ix();
            return { type: m.xn.TEXT, text: e ? R.intl.string(R.t.lQsY7B) : R.intl.string(R.t.WsUuTt) };
        },
        buildLayout: () => [IW],
    }),
    Iq = (0, d.zZ)(c.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["0iH2vc"]),
        buildLayout: () => [f3, IZ, Ih],
    }),
    IQ = { [fr.M$.ADULT]: fm.default.PMznGO, [fr.M$.TEEN]: fm.default.qSkhZH, [fr.M$.UNVERIFIED]: fm.default.vGxRDB },
    IJ = [eu.M.TINY_BRONCO_NOTICE],
    I$ = [];
function I0() {
    fa.A.openUrl(fu.m5);
}
var I1 = n(308645),
    I2 = n(555725),
    I3 = n(855267);
let I5 = (0, d.E2)(c.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["16r9jm"])],
        Component: I3.A,
    }),
    I4 = (0, d.zZ)(c.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [I5] }),
    I6 = (0, d.t_)(c.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        buildLayout: () => [I4],
    }),
    I8 = (0, d.t0)(c.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        useSubtitle: I2.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, I2._k)();
            return { type: m.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: m.xn.TEXT, text: (0, I2.aO)() };
        },
        initialize: () => {
            I1.Yn();
        },
        buildLayout: () => [I6],
    }),
    I7 = (0, d.zZ)(c.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (fg() ? R.intl.string(R.t.GI2mea) : null) ?? R.intl.string(R.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, fT.LH)(),
                t = (0, fr.ZP)(),
                [n, i] = (0, gc.kn)(e ? IJ : I$);
            return e && null != n
                ? {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "start",
                      text: R.intl.format(IQ[t], { handleOnBlogHook: I0 }),
                      onDismiss: () => i(gT.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...fF, I8],
    });
var I9 = n(738188),
    _e = n(834981),
    _t = n(987197),
    _n = n(822585),
    _i = n(840387),
    _s = n(465558),
    _l = n(513687);
let _r = (0, d.E2)(c.X.FAMILY_CENTER_SETTING, {
        Component: _s.p,
        useSearchTerms: () => [
            R.intl.string(_l.default.RZqaJn),
            R.intl.string(_l.default.bdBmqy),
            R.intl.string(_l.default["gVWG+6"]),
            R.intl.string(_l.default.ahKIJO),
            R.intl.string(_l.default["8SLtqb"]),
        ],
    }),
    _a = (0, d.zZ)(c.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [_r] }),
    _o = (0, d.t_)(c.X.FAMILY_CENTER_PANEL, {
        useTitle: () => R.intl.string(_l.default.RZqaJn),
        buildLayout: () => [_a],
    }),
    _u = (0, d.zZ)(c.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => R.intl.string(_l.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, _t.f)(),
                t = (0, _n.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, _e.VT)();
            return h.useMemo(() => (n ? { badgeType: m.Xi.WARNING } : { badgeType: m.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [_d],
    }),
    _d = (0, d.t0)(c.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, _e.Li)() ? R.intl.string(_l.default.IcMQUP) : R.intl.string(_l.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, _i.Z)(),
                t = (0, _e.Li)();
            return e
                ? t
                    ? R.intl.string(_l.default.G8lHFU)
                    : R.intl.string(_l.default.uOLNEZ)
                : R.intl.string(_l.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, _t.f)(),
                t = (0, _n.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: m.Xy.ICON,
                      icon: I9.WarningIcon,
                      color: n2.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: n2.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [_o],
    });
var _c = n(425587),
    _g = n(662758);
function _m(e) {
    if (e.body.code === S.t02.INVALID_PASSWORD) throw e;
    (0, lW.A)({ title: R.intl.string(R.t.LX0nT8), subtitle: e.body.message });
}
async function _A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = lg.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await _c.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, lW.A)({
              title: R.intl.string(R.t["Y++oNe"]),
              subtitle: R.intl.format(R.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : sI.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, lW.A)({ title: R.intl.string(R.t.vJiTOL), subtitle: R.intl.string(R.t.UyVVan) })
          : t.isClaimed()
            ? (0, sm.openModal)((t) =>
                  (0, A.jsx)(_g.default, {
                      ...t,
                      handleSubmit: (t) => (0, xP.U_)(t, e).then(S.tEg, _m),
                      title: e ? R.intl.string(R.t.xca2ts) : R.intl.string(R.t.goXv9g),
                      actionText: e ? R.intl.string(R.t["8lQ2rR"]) : R.intl.string(R.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? R.intl.string(R.t.FB4H1D) : R.intl.string(R.t.gk7h32),
                  }),
              )
            : (0, n3.A)({
                  title: R.intl.string(R.t.xca2ts),
                  subtitle: R.intl.string(R.t.FB4H1D),
                  confirmText: R.intl.string(R.t["8lQ2rR"]),
                  onConfirm: () => (0, xP.U_)("", !0),
              });
}
let _h = (0, d.Tf)(c.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => R.intl.string(R.t["gIpzR+"]),
        useSubtitle: () => R.intl.string(R.t.Bd6dOf),
        useLabel: () => R.intl.string(R.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => _A(!0),
    }),
    _E = (0, d.Tf)(c.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => R.intl.string(R.t["p/Tjtp"]),
        useSubtitle: () => R.intl.string(R.t.YvDmKb),
        useLabel: () => R.intl.string(R.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => _A(!1),
        usePredicate: () => {
            let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    _S = (0, d.zZ)(c.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [_E, _h] }),
    _x = (0, d.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (fn.A.clearBackupCodes(), (0, xP.Uo)());
            };
        },
        useObscuredNotice: or.L,
        buildLayout: () => [f1, Iq, I7, _u, _S],
    }),
    _p = (0, d.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        icon: md.UserIcon,
        buildLayout: () => [_x],
    });
var _T = n(176781),
    _f = n(341923),
    _I = n(572164),
    __ = n(614584),
    _N = n(915725),
    _C = n(268378);
let _b = (0, d.zD)(c.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => R.intl.string(_C.default.j29uJx),
        useSubtitle: () => R.intl.format(_C.default.UCzGcQ, { learnMoreLink: eT.A.getArticleURL(S.MVz.CLIPS) }),
        useValue: () => (0, E.bG)([_N.Ay], () => _N.Ay.getEnableAutoclipping()),
        setValue: __.uL,
        useDisabled: () => !(0, _I.E)(),
    }),
    _y = (0, d.zY)(c.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [_b], headerSettingKey: _b.key }),
    _v = (0, d.zZ)(c.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => R.intl.string(_C.default.XWkJoi),
        useSubtitle: () => R.intl.string(_C.default["MJ/VsO"]),
        usePredicate: _f.HN,
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        useInlineNotice: () =>
            (0, _I.E)()
                ? null
                : {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: R.intl.string(_C.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: R.intl.string(_C.default.qGgW4M),
                          onClick: () => __.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [_y],
    });
var _j = n(696016);
let _O = [_j.zq, 25, 50, _j.Y2, _j.rv],
    _L = (0, d.sN)(c.X.CLIPS_BITRATE, {
        useTitle: () => R.intl.string(R.t["8bZyov"]),
        useSubtitle: () => R.intl.string(R.t["h8DSx/"]),
        minValue: _j.zq,
        maxValue: _j.rv,
        useDefaultValue: () => _j.Y2,
        getInitialValue: () => _N.Ay.getSettings().clipsQuality.bitratePercent ?? _j.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = _N.Ay.getSettings();
            __.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: _O,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, _I.E)(),
    });
var _R = n(226640);
let _D = (0, d.Hn)(c.X.CLIPS_FRAME_RATE, {
        useTitle: () => R.intl.string(R.t["2wScL1"]),
        useSubtitle: () => R.intl.string(R.t["Rf9+fy"]),
        useValue: () => (0, E.bG)([_N.Ay], () => _N.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = _N.Ay.getSettings();
            __.GS({ ...t, frameRate: e });
        },
        useOptions: _R.Fz,
        useDisabled: () => !(0, _I.E)(),
    }),
    _P = (0, d.E2)(c.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [R.intl.string(R.t.SIxrIF)],
        usePredicate: () => (0, E.bG)([_N.Ay], () => _N.Ay.getHardwareClassification()) === _j.k9.BELOW_MINIMUM,
        Component: () => (0, A.jsx)(s3.A, { look: s3.k.WARNING, children: R.intl.string(R.t.SIxrIF) }),
    }),
    _G = (0, d.Hn)(c.X.CLIPS_LENGTH, {
        useTitle: () => R.intl.string(R.t.OgfUio),
        useSubtitle: () => R.intl.string(R.t.H7j4tY),
        useValue: () => (0, E.bG)([_N.Ay], () => _N.Ay.getSettings().clipsLength),
        setValue: (e) => __.h$(e),
        useOptions: _R.Qu,
        useDisabled: () => !(0, _I.E)(),
    }),
    _M = (0, d.E2)(c.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [R.intl.string(R.t["Z+MfqT"])],
        Component: () => (0, A.jsx)(s3.A, { look: s3.k.INFO, children: R.intl.string(R.t["Z+MfqT"]) }),
    }),
    _U = (0, d.Hn)(c.X.CLIPS_RESOLUTION, {
        useTitle: () => R.intl.string(R.t.aFudZJ),
        useSubtitle: () => R.intl.string(R.t.nIrkW5),
        useValue: () => (0, E.bG)([_N.Ay], () => _N.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = _N.Ay.getSettings();
            __.GS({ ...t, resolution: e });
        },
        useOptions: _R.gF,
        useDisabled: () => !(0, _I.E)(),
    }),
    _V = (0, d.zD)(c.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => R.intl.string(R.t["3zwNf6"]),
        useSubtitle: () => R.intl.string(R.t.m4Cjj9),
        useValue: () => (0, E.bG)([_N.Ay], () => _N.Ay.getSettings().remindersEnabled),
        setValue: (e) => __.Mt(e),
        useDisabled: () => !(0, _I.E)(),
    }),
    _k = (0, d.zZ)(c.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => R.intl.string(_C.default.TGwzMe),
        buildLayout: () => [_P, _G, _D, _U, _L, _M, _V],
    }),
    _w = (0, d.zD)(c.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, E.bG)([_N.Ay], () => _N.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => __.YP(e),
    }),
    _F = (0, d.zD)(c.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, E.bG)([_N.Ay], () => _N.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => __.Uh(e),
    }),
    _B = (0, d.zZ)(c.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, E.bG)([lg.default], () => {
                let e = lg.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [_w, _F],
    });
var _z = n(417270),
    _X = n(847825);
let _Y = (0, d.E2)(c.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t.pf54EU), R.intl.string(R.t["QyB/jK"])],
        Component: () => {
            let e = (0, E.bG)([sB.Ay], () => sB.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0));
            tg()(null != e, "Save clip keybind unset");
            let t = !(0, _I.E)(),
                n = h.useRef(null),
                i = h.useCallback(
                    (t) => {
                        iZ.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = h.useCallback(() => {
                    iZ.A.setKeybind({ ...e, shortcut: (0, sc.OH)(_j.Ot) });
                }, [e]);
            return (0, A.jsx)(t2.D, {
                label: R.intl.string(R.t.pf54EU),
                description: R.intl.string(R.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: _X.g,
                    children: (0, A.jsx)(sd.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, A.jsxs)(A.Fragment, {
                            children: [
                                (0, A.jsx)(sa.m, {
                                    text: R.intl.string(_C.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(sl.K, {
                                        icon: iK.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(_C.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, A.jsx)(sa.m, {
                                    text: R.intl.string(_C.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(sl.K, {
                                        icon: _z.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(_C.default.Kyk1Tp),
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
    _H = (0, d.E2)(c.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t["0U/hj7"]), R.intl.string(R.t["5zxkdo"])],
        usePredicate: sk.BW,
        Component: () => {
            let e = (0, E.bG)([sB.Ay], () => sB.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0)),
                t = (0, E.bG)([sB.Ay], () => sB.Ay.getKeybindForAction(S.hCu.SAVE_SCREENSHOT, !0));
            (tg()(null != e, "Save clip keybind unset"), tg()(null != t, "Save screenshot keybind unset"));
            let n = h.useCallback(
                (e) => {
                    iZ.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, A.jsx)(t2.D, {
                label: R.intl.string(R.t["0U/hj7"]),
                description: R.intl.string(R.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, A.jsx)("div", {
                    className: _X.g,
                    children: (0, A.jsx)(sd.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    _K = (0, d.zD)(c.X.CLIPS_ENABLE, {
        useTitle: () => R.intl.string(R.t.h8rgrK),
        useSubtitle: () => R.intl.string(R.t["4Qw3NO"]),
        useValue: () => (0, _I.E)(),
        setValue: (e) => __.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    _W = (0, d.zY)(c.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_K, _Y, _H], headerSettingKey: _K.key }),
    _Z = (0, d.zZ)(c.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["rWKv+e"]),
        useSubtitle: () => R.intl.format(_C.default["dh7g+S"], { learnMoreLink: eT.A.getArticleURL(S.MVz.CLIPS) }),
        buildLayout: () => [_W],
    }),
    _q = (0, d.E2)(c.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [R.intl.string(R.t.s4773E), R.intl.string(R.t.svjwGh)],
        Component: () => {
            let e = (0, E.bG)([_N.Ay], () => _N.Ay.getSettings().storageLocation),
                t = !(0, _I.E)(),
                n = h.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nT.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && __.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, A.jsx)(t2.D, {
                label: R.intl.string(R.t.s4773E),
                description: R.intl.string(R.t.svjwGh),
                layout: "vertical",
                children: (0, A.jsxs)(X.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, A.jsx)(sA.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": R.intl.formatToPlainString(R.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, A.jsx)(_.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: i,
                            text: R.intl.string(_C.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _Q = (0, d.zZ)(c.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => R.intl.string(_C.default["0Q+pdZ"]),
        buildLayout: () => [_q],
    }),
    _J = (0, d.t_)(c.X.CLIPS_PANEL, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        usePredicate: sk.sw,
        buildLayout: () => [_Z, _v, _k, _Q, _B],
    }),
    _$ = (0, d.i4)(c.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        icon: _T.x,
        buildLayout: () => [_J],
    });
var _0 = n(254138),
    _1 = n(290595),
    _2 = n(153488),
    _3 = n(308528),
    _5 = n(171316),
    _4 = n(558001);
n(866945);
var _6 = n(835002);
function _8() {
    let e = (0, _5.uM)(),
        t = (0, _e.vx)(),
        n = h.useCallback(() => {
            ((0, tB.default)(),
                _3.A.openPrivateChannel({ recipientIds: t }),
                (0, _4.N)(_6.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _6.YX.LEARN_MORE));
        }, [t]),
        i = h.useCallback(() => {
            (0, _4.N)(_6.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _6.YX.VIEWED);
        }, []);
    return h.useMemo(() => {
        if (e)
            return {
                type: m.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: R.intl.format(_l.default.i284fU, {
                    hook: (e, t) => (0, A.jsx)(na.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let _7 = (0, d.zD)(c.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => R.intl.string(R.t.AGDDkH),
    useSubtitle: () => R.intl.string(R.t.kyo3dJ),
    useValue: () => L.Q$.useSetting(),
    setValue: (e) => __.eQ({ allowVoiceRecording: e }),
});
var _9 = n(157559),
    Ne = n(331887);
function Nt() {
    let e = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
        t = (0, E.bG)([Ne.A], () => Ne.A.harvestType),
        [n, i] = h.useState(() => Date.now()),
        s = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        l = h.useRef(null);
    return (h.useEffect(() => {
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
let Nn = (0, d.Tf)(c.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => R.intl.string(R.t.qfFFos),
        useSubtitle: function () {
            let e = Nt();
            if (e.allowed) return R.intl.format(R.t.NRI6vt, { article: eT.A.getArticleURL(S.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return R.intl.string(R.t.hIbRso);
                case "not_verified":
                    return R.intl.format(R.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, A.jsx)(
                                n4.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, no.openUserSettings)(c.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = im()(e.nextAllowed).format("MMMM Do YYYY");
                    return R.intl.format(R.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (te.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                e9.Bo.get({ url: S.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        te.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        te.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !Nt().allowed,
        useLoading: () => (0, E.bG)([Ne.A], () => Ne.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => R.intl.string(R.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, sm.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, A.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, xP.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            te.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? _9.A.show({
                                                  title: R.intl.string(R.t.i2iul5),
                                                  body: R.intl.string(R.t["6Nmv4i"]),
                                              })
                                            : _9.A.show({
                                                  title: R.intl.string(R.t.OjbtDm),
                                                  body: R.intl.string(R.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || R.intl.string(R.t["0F5Jyt"]);
                                        _9.A.show({ title: R.intl.string(R.t.OjbtDm), body: t });
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
    Ni = (0, d.v_)(c.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => R.intl.string(R.t.D60Gfj),
        useSubtitle: () =>
            R.intl.format(R.t.dszICC, {
                onClickDisable: () => (0, no.openUserSettings)(c.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, no.openUserSettings)(c.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var Ns = n(641216),
    Nl = n(945810);
let Nr = (0, Nl.mj)({
    kind: "user",
    name: "2026-08-ad-topic-opt-out-client",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 }, 3: { enabled: !0 }, 4: { enabled: !0 }, 5: { enabled: !0 } },
});
function Na() {
    let { enabled: e } = Nr.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var No = n(884705);
function Nu() {
    return (0, E.bG)([No.A], () => No.A.isTogglesDisabled());
}
function Nd() {
    return !L.vf.useSetting();
}
function Nc(e) {
    L.vf.updateSetting(!e);
}
function Ng() {
    let e = Nu(),
        t = L.H1.useSetting(),
        n = (0, _5.uM)();
    return e || t || n;
}
let Nm = (0, d.zD)(c.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["md5l4/"], { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !Na(),
        useValue: Nd,
        setValue: Nc,
        useDisabled: Ng,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    }),
    NA = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["2QFDU/"], { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Na,
        useValue: Nd,
        setValue: Nc,
        useDisabled: Ng,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    });
function Nh() {
    return !L.H1.useSetting();
}
function NE(e) {
    L.H1.updateSetting(!e);
}
function NS() {
    let e = Nu(),
        t = (0, _5.uM)();
    return e || t;
}
let Nx = (0, d.zD)(c.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () => R.intl.string(R.t.w4fvxe),
        usePredicate: () => !Na(),
        useValue: Nh,
        setValue: NE,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: NS,
    }),
    Np = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () =>
            R.intl.format(R.t.cf9mvV, { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Na,
        useValue: Nh,
        setValue: NE,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: NS,
    }),
    NT = (0, d.AK)(c.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = hF(2);
            return R.intl.format(R.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = hB();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, E.bG)([i3.Ay], () => i3.Ay.getGamesSeen(!1).some((e) => !(0, hG.n1)(e))) && (0, nS.xl)(),
    }),
    Nf = (0, d.gN)(c.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [NT] });
var NI = n(972737);
let N_ = (0, d.zD)(c.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => R.intl.string(R.t.XuADY2),
        useSubtitle: () =>
            R.intl.format(R.t.FNqmmX, { helpdeskArticle: eT.A.getArticleURL(S.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, E.bG)([_2.A], () => _2.A.hasConsented(S.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, _1.U)([S.YAq.USAGE_STATISTICS], []).catch(NI.i)
                : (0, NI.O)({
                      header: R.intl.string(R.t.OdPCbN),
                      body: R.intl.string(R.t.MGWabA),
                      confirmText: R.intl.string(R.t["D3+rU4"]),
                      cancelText: R.intl.string(R.t.kYpG0u),
                      onConfirm: () => (0, _1.U)([], [S.YAq.USAGE_STATISTICS]).catch(NI.i),
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.XuADY2)],
        useDisabled: _5.uM,
    }),
    NN = (0, d.zZ)(c.X.DATA_USAGE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.QDAriI),
        useInlineNotice: _8,
        initialize: () => {
            _2.A.fetchedConsents || (0, _1.Q)();
        },
        buildLayout: () => [Ni, N_, Ns._, Nx, Nm, _7, Nn, Nf],
    });
var NC = n(15762);
let Nb = (0, d.zD)(c.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => R.intl.string(NC.default.F3llsQ),
    useSubtitle: () => R.intl.string(NC.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        (L.Sy.updateSetting(e),
            tr.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: hH.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function Ny() {
    let e = L.JG.useSetting();
    return (0, E.yK)(
        [co.Ay, sI.A],
        () => {
            let t = new Set(e);
            return co.Ay.getFlattenedGuildIds().filter((e) => null != sI.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let Nv = (0, d.AK)(c.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Ny();
            if (0 === e.length) return R.intl.format(R.t.QJIJ5p, {});
            let t = sI.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? R.intl.format(R.t["T+8J4A"], { guildName: n })
                : R.intl.format(R.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                n =
                    ((e = Ny()),
                    0 ===
                    (t = (0, E.yK)(
                        [sI.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => sI.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, A.jsx)(h5, { guild: t[0], size: hM.CD }),
                                    shape: hM.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, A.jsx)(h5, { guild: t[1], size: hM.CD }), shape: hM.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, A.jsx)(h5, { guild: t[0], size: hM.CD }),
                                    shape: hM.e0.SQUIRCLE,
                                },
                            });
            return { type: m.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Nj = (0, d.gN)(c.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [Nv] }),
    NO = (0, d.Qx)(c.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => R.intl.string(R.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: R.intl.string(R.t.Boxc8R),
                    desc: R.intl.string(R.t["nLj+nc"]),
                    value: eK.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: R.intl.string(R.t.YOIKBt),
                    desc: R.intl.string(R.t.y0JZ4s),
                    value: eK.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: R.intl.string(R.t.u0nlJv), desc: R.intl.string(R.t["4jnKHu"]), value: eK.KP.FRIENDS_ONLY },
            ];
        },
        useValue: L.KP.useSetting,
        setValue: function (e) {
            let t = L.KP.getSetting();
            L.KP.updateSetting(e);
            let i = (0, hJ.gS)(t, e);
            null != i &&
                (0, sm.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("763786")]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, A.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [R.intl.string(R.t.Qnf32C)],
    }),
    NL = (0, d.zZ)(c.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ul884f),
        useSubtitle: () =>
            R.intl.format(R.t.N4jSgR, {
                learnMoreUrl: eT.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [NO, Nb, Nj],
    });
var NR = n(952270),
    ND = n(678538);
let NP = { [eK.tR.REAL_MONEY_GAMING]: ND.default.pmIitA },
    NG = Object.keys(NP).map(Number),
    NM = (0, d.E2)(c.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [R.intl.string(ND.default.foQaI1)],
        usePredicate: Na,
        Component: function () {
            let e = h.useMemo(
                    () =>
                        NG.map((e) => ({
                            id: String(e),
                            value: e,
                            label: R.intl.string(NP[e]),
                            leading: NR.EyeSlashIcon,
                        })),
                    [],
                ),
                t = L.XZ.useSetting();
            return (0, A.jsx)(xI.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(L.XZ.getSetting());
                    for (let e of NG) t.has(e) ? n.add(e) : n.delete(e);
                    L.XZ.updateSetting([...n]);
                },
                label: R.intl.string(ND.default.foQaI1),
                description: R.intl.format(ND.default["z/MfaY"], {
                    helpdeskArticle: eT.A.getArticleURL(S.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: R.intl.string(ND.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    NU = (0, d.zZ)(c.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => R.intl.string(ND.default.XUj46U),
        usePredicate: Na,
        buildLayout: () => [Np, NA, NM],
    });
var NV = n(936388),
    Nk = n(714763),
    Nw = n(814278);
let NF = (0, d.zD)(c.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => R.intl.string(R.t["opi/XK"]),
    useSubtitle: () => R.intl.format(R.t["/T+ZlP"], { helpArticle: (0, Nw.Lu)() }),
    useValue: function () {
        return (0, E.bG)([Nk.A], () => Nk.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        NV.A.updatePersistentCodesEnabled(e);
    },
});
var NB = n(787392);
function Nz() {
    return (0, E.yK)([NB.A], () => NB.A.getUserIds());
}
var NX = n(803306),
    NY = n(966327),
    NH = n(774156);
function NK(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, ek.Ay)(),
        s = (0, E.bG)([lg.default], () => lg.default.getUser(t)),
        l = pM.Ay.getFormattedName(s),
        r = h.useCallback(() => {
            (0, Nw.kj)(t);
        }, [t]),
        a = h.useCallback(() => (0, xV.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        h.useEffect(() => {
            (0, NX.wz)(t);
        }, [t]),
        (0, A.jsxs)("div", {
            className: NH.uW,
            children: [
                null != s && (0, A.jsx)(NY.A, { className: NH.my, user: s, size: I._3.SIZE_40 }),
                (0, A.jsxs)("div", {
                    className: NH.Qq,
                    children: [
                        (0, A.jsx)(n4.D, {
                            className: NH.Xh,
                            onClick: a,
                            children: (0, A.jsx)(H.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, A.jsx)(H.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: R.intl.format(R.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, A.jsx)(n4.D, { onClick: r, className: NH.Qz, children: (0, A.jsx)(sr.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function NW(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, Nw.tC)(i.timestamp),
        r = h.useCallback(() => {
            (0, Nw.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, A.jsxs)("div", {
        className: t,
        children: [
            (0, A.jsxs)("div", {
                className: NH.Qq,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: R.intl.format(R.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, A.jsx)(H.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, A.jsx)(n4.D, {
                className: NH.Kk,
                onClick: r,
                children: (0, A.jsx)(EA.P, { size: "md", color: n2.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function NZ(e) {
    let { userId: t } = e,
        n = (0, E.yK)([NB.A], () =>
            B()(NB.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsx)(NK, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, A.jsxs)(
                    h.Fragment,
                    {
                        children: [
                            (0, A.jsx)(NW, { className: NH.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, A.jsx)("div", { className: NH.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var Nq = n(464946),
    NQ = n(492422);
let NJ = (0, d.E2)(c.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["5b3FNI"])],
        usePredicate: function () {
            let e = Nz();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = Nz();
            return (0, A.jsxs)(Nq.h, {
                children: [
                    (0, A.jsx)(Nq._, {
                        header: R.intl.string(R.t["5b3FNI"]),
                        description: R.intl.format(R.t.jrTSWU, { helpArticle: (0, Nw.dc)() }),
                    }),
                    e.map((e) => (0, A.jsx)("div", { className: NQ.A, children: (0, A.jsx)(NZ, { userId: e }) }, e)),
                ],
            });
        },
    }),
    N$ = (0, d.zZ)(c.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bTwjaz),
        usePredicate: () => (0, e2.isDesktop)(),
        buildLayout: () => [NF, NJ],
    }),
    N0 = (0, d.t_)(c.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        buildLayout: () => [NN, NU, NL, N$],
    }),
    N1 = (0, d.i4)(c.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        icon: _0.m,
        buildLayout: () => [N0],
    });
var N2 = n(476713);
let N3 = (0, d.AK)(c.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.O65dzZ),
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        destinationKey: c.X.AUTHORIZED_APPS_CATEGORY,
    }),
    N5 = (0, d.gN)(c.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [N3] });
var N4 = n(875444);
function N6(e, t) {
    let n = (0, E.bG)([EN.default], () => EN.default.getFetchState()),
        i = (0, E.bG)([EN.default], () =>
            e ? EN.default.getNewestTokensForNonChildrenApplications() : EN.default.getNewestTokens(),
        ),
        s = h.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, N4.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        h.useEffect(() => {
            t || Ed.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== EN.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
    );
}
var N8 = n(514479);
function N7() {
    return (0, A.jsxs)("div", {
        className: N8.d,
        children: [
            (0, A.jsx)(H.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: N8.x,
                children: R.intl.string(R.t["+0U77d"]),
            }),
            (0, A.jsx)(H.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: R.intl.format(R.t.V8wClM, {
                    helpdeskArticle: eT.A.getArticleURL(S.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let N9 = (0, d.E2)(c.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = N6(!0, !0);
        return e ? (0, A.jsx)(oo.y, {}) : (0, A.jsx)(N7, {});
    },
    useSearchTerms: () => [R.intl.string(R.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = N6(!0, !0);
        return e || 0 === t.length;
    },
});
function Ce() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = N6(!0, !0);
    return !e && t.length > 0;
}
let Ct = (0, d.zD)(c.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => R.intl.string(R.t.W8JtfT),
        useSubtitle: () => R.intl.string(R.t.a99KKy),
        useSearchTerms: () => [R.intl.string(R.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: Ce,
    }),
    Cn = (0, d.Qx)(c.X.IN_GAME_DMS_SETTING, {
        useTitle: () => R.intl.string(R.t["ms+Tme"]),
        useSubtitle: () => R.intl.string(R.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.JIFnN9), value: eK.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: R.intl.string(R.t.rRdsk1), value: eK.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: R.intl.string(R.t.IVRPMX), value: eK.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = L.TA.useSetting();
            return e === eK.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? eK.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => L.TA.updateSetting(e),
        usePredicate: Ce,
    });
function Ci() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = N6(!0, !0);
    return {
        sortedGames: h.useMemo(() => e.toSorted((e, t) => op.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var Cs = n(306537),
    Cl = n(40957);
function Cr(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: s, iconAlign: l } = e;
    return (
        (0, eS.Ay)(() => {
            (0, _4.N)(s, _6.YX.VIEWED);
        }),
        (0, A.jsx)(iW.w, {
            type: "info",
            iconAlign: l,
            children: (0, A.jsxs)(X.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: "xs",
                children: [
                    (0, A.jsx)("span", { className: Cl.r, children: t }),
                    (0, A.jsx)(X.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: "xs",
                        fullWidth: !1,
                        children: (0, A.jsx)(_.$, { variant: "secondary", size: "sm", text: n, onClick: i }),
                    }),
                ],
            }),
        })
    );
}
function Ca(e, t) {
    return {
        handleLearnMore: h.useCallback(() => {
            (t(), (0, _4.N)(e, _6.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: h.useCallback(() => {
            (fa.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _4.N)(e, _6.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function Co() {
    let e,
        t = (0, _5.uM)(),
        n = (0, fC.fk)(),
        i = (0, fN.b8)(),
        s = (0, _i.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, fc.n)(fu.Vc)) return e;
    }
}
var Cu = n(687123),
    Cd = n(444802);
function Cc() {
    let e = (0, Cd.WX)();
    h.useEffect(() => {
        (0, _4.N)(_6.YA.AGE_CONFIRMATION_NOTICE, _6.YX.VIEWED);
    }, []);
    let t = h.useCallback(() => {
            (window.open(eT.A.getArticleURL(e), "_blank"), (0, _4.N)(_6.YA.AGE_CONFIRMATION_NOTICE, _6.YX.LEARN_MORE));
        }, [e]),
        n = h.useCallback(() => {
            (fa.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _4.N)(_6.YA.AGE_CONFIRMATION_NOTICE, _6.YX.CONFIRM_AGE));
        }, []);
    return (0, A.jsx)(ae.p, {
        messageType: ae.Y.INFO,
        action: (0, A.jsx)(hm.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: R.intl.string(R.t.FDSSia),
            onClick: n,
        }),
        children: R.intl.format(R.t.mFgsfg, { hook: (e, n) => (0, A.jsx)(na.Anchor, { onClick: t, children: e }, n) }),
    });
}
function Cg() {
    let e = (0, fC.aX)(Cu.t.REACTIVE_CHECK),
        t = (0, fN.b8)();
    return h.useMemo(() => {
        if (e && !t) return { type: m.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: Cc };
    }, [e, t]);
}
var Cm = n(323073),
    CA = n(386171),
    Ch = n(96607);
let CE = (0, d.zD)(c.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => R.intl.string(R.t.gvC6q7),
        useSubtitle: () => R.intl.string(R.t.zirUC1),
        useValue: CA.hT,
        useDisabled: function () {
            let e = (0, Ch.A)() ?? !0,
                t = (0, Cm.sP)(),
                n = (0, fN.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, Cm.p5)() && e
                ? fa.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    CS = (0, d.zD)(c.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => R.intl.string(R.t["L+yTsa"]),
        useSubtitle: () => R.intl.string(R.t["t6i/jW"]),
        useValue: CA.tI,
        useDisabled: function () {
            let e = (0, Ch.A)() ?? !0,
                t = (0, Cm.sP)(),
                n = (0, fN.yM)();
            return h.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, Cm.p5)() && e
                ? fa.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    Cx = (0, d.AK)(c.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.hOXd45),
        destinationKey: c.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    Cp = (0, d.gN)(c.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [Cx] });
n(667532);
var CT = n(390248),
    Cf = n(632119),
    CI = n(945276),
    C_ = n(389737),
    CN = n(566769);
function CC() {
    let e,
        t = (0, CI.A)() ?? !0,
        n = (0, _5.uM)(),
        i = (0, _5.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, a5.cf)([aT.A], () => aT.A.settings.textAndImages?.explicitContentSettings ?? (0, Cf.C$)())),
        {
            explicitContentGuilds: (0, Cf.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, Cf.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, Cf.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, CT.hK)() && t.includes(eK.TO.SHOW)
            ? fa.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, Cf.Jz)(e);
    }
    let o = [
            { value: eK.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eK.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eK.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eK.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(_l.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(C_.E, {
        description: R.intl.string(R.t.Wnojv1),
        children: [
            (0, A.jsx)(CN.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(CN.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(CN.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? R.intl.string(_l.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function Cb() {
    let e,
        t = (0, CI.A)() ?? !0,
        n = (0, _5.uM)(),
        i = (0, _5.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, a5.cf)([aT.A], () => aT.A.settings.textAndImages?.goreContentSettings ?? (0, Cd.T4)())),
        {
            goreContentGuilds: (0, Cd.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, Cd.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, Cd.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, CT.hK)() && t.includes(eK.TO.SHOW)
            ? fa.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, Cd.qY)(e);
    }
    let o = [
            { value: eK.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eK.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eK.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eK.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(_l.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(C_.E, {
        description: R.intl.string(R.t.XgH9eh),
        children: [
            (0, A.jsx)(CN.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(CN.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(CN.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? R.intl.string(_l.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var Cy = n(875162),
    Cv = n(636745);
let Cj = (0, d.E2)(c.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, Cd.WX)(),
            t = h.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: R.intl.string(R.t.GYpoAq),
                        component: CC,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: R.intl.string(R.t["16/3Bi"]),
                        component: Cb,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, A.jsxs)(Nq.h, {
            children: [
                (0, A.jsx)(Nq._, {
                    header: R.intl.string(R.t["Hj/But"]),
                    description: R.intl.format(R.t.dliU4j, { learnMoreLink: eT.A.getArticleURL(e) }),
                }),
                (0, A.jsx)(Cy.A, { tabs: t, orientation: "vertical", tabsClassName: Cv.v }),
            ],
        });
    },
    useSearchTerms: () => [
        R.intl.string(R.t["Hj/But"]),
        R.intl.string(R.t["N/oRI+"]),
        R.intl.string(R.t.QVdYsK),
        R.intl.string(R.t["aWD+tu"]),
        R.intl.string(R.t["5mnTa7"]),
        R.intl.string(R.t["K0OWP+"]),
    ],
});
var CO = n(639555),
    CL = n(617641),
    CR = n(546140),
    CD = n(406935),
    CP = n(594061);
let CG = (0, d.zD)(c.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => R.intl.string(R.t.qFsx5q),
        useSubtitle: () => R.intl.format(R.t.lunaRv, { learnMoreLink: eT.A.getArticleURL(S.MVz.SAFETY_ALERTS) }),
        useValue: CR.L,
        setValue: function (e) {
            return CP.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = CD._t.create({ value: e });
                },
                CP.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, CL.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, CO.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, CI.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    CM = (0, d.zZ)(c.X.CONTENT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3upKU8"]),
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
                E,
                S,
                x,
                p,
                T = _8(),
                f =
                    ((s = (0, _5.uM)()),
                    (l = (0, fC.fk)()),
                    (r = (0, fN.b8)()),
                    (a = (0, _i.Z)()),
                    (o = Ca(_6.YA.AGE_CONFIRMATION_NOTICE, fd)),
                    (u = Ca(_6.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, fr.M0)),
                    (d = h.useCallback(() => {
                        (0, _4.N)(_6.YA.AGE_CONFIRMATION_NOTICE, _6.YX.VIEWED);
                    }, [])),
                    (c = h.useCallback(() => {
                        (0, _4.N)(_6.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _6.YX.VIEWED);
                    }, [])),
                    h.useMemo(() => {
                        if (!s && (0, fc.n)(fu.Vc)) {
                            if (l && !r)
                                return {
                                    type: m.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "center",
                                    trackView: d,
                                    text: R.intl.format(fm.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: {
                                        size: "sm",
                                        text: R.intl.string(fm.default["cI+bc/"]),
                                        onClick: o.handleConfirmAge,
                                    },
                                };
                            if (a)
                                return {
                                    type: m.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "start",
                                    trackView: c,
                                    text: R.intl.format(fm.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { size: "sm", text: R.intl.string(R.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                I =
                    ((e = (0, _i.Z)()),
                    (t = (0, Cd.WX)()),
                    (n = h.useCallback(() => {
                        (window.open(eT.A.getArticleURL(t), "_blank"),
                            (0, _4.N)(_6.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _6.YX.LEARN_MORE));
                    }, [t])),
                    (i = h.useCallback(() => {
                        (0, _4.N)(_6.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _6.YX.VIEWED);
                    }, [])),
                    h.useMemo(() => {
                        if (e)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                text: R.intl.format(R.t.EUo0yj, {
                                    hook: (e, t) => (0, A.jsx)(na.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                _ =
                    ((g = (0, fC.SJ)()),
                    (E = (0, fN.b8)()),
                    (S = g && !E),
                    (x = h.useCallback(() => {
                        (fa.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _4.N)(_6.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _6.YX.LEARN_MORE));
                    }, [])),
                    (p = h.useCallback(() => {
                        (0, _4.N)(_6.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _6.YX.VIEWED);
                    }, [])),
                    h.useMemo(() => {
                        if (S)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: p,
                                text: R.intl.format(R.t.OX4ybh, {
                                    hook: (e, t) => (0, A.jsx)(na.Anchor, { onClick: x, children: e }, t),
                                }),
                            };
                    }, [x, S, p])),
                N = Cg();
            return T ?? f ?? N ?? _ ?? I;
        },
        buildLayout: () => [Cj, CG, CE, CS, Cp],
    });
var CU = n(923457),
    CV = n(750714);
let Ck = (0, d.Qx)(c.X.DM_SPAM_SETTING, {
    useTitle: () => R.intl.string(R.t.puwSkY),
    useSubtitle: () => R.intl.string(R.t["+sXN3T"]),
    useValue: function () {
        let e = L.he.useSetting(),
            t = L.cj.useSetting(),
            n = (0, E.bG)([lg.default], () => lg.default.getCurrentUser()),
            i = (0, fC.yv)(CU.p.SPAM_FILTERS);
        return e !== eK.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eK.he.FRIENDS_AND_NON_FRIENDS
              : (CV.xY.get(t) ?? eK.he.NON_FRIENDS);
    },
    setValue: (e) => L.he.updateSetting(e),
    useOptions: function () {
        return [
            { name: R.intl.string(R.t["+w5yKk"]), value: eK.he.FRIENDS_AND_NON_FRIENDS },
            { name: R.intl.string(R.t.yAPg6r), value: eK.he.NON_FRIENDS },
            { name: R.intl.string(R.t.FEXKsv), value: eK.he.DISABLED },
        ];
    },
    useSearchTerms: () => [R.intl.string(R.t.JzaP4h), R.intl.string(R.t.H9XOl3), R.intl.string(R.t.k4W40P)],
});
var Cw = n(189883);
let CF = (0, d.zD)(c.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => R.intl.string(R.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return h.useMemo(() => (0, ii.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? S.yKI : S.yKI & ~S.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _5.uM)();
    },
});
var CB = n(665260);
let Cz = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => R.intl.string(R.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = h.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? CB.UI(t, S.dzt.MUTUAL_FRIENDS) : CB.iE(t, S.dzt.MUTUAL_FRIENDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _5.uM)();
        },
    }),
    CX = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => R.intl.string(R.t.qsMfsH),
        useSubtitle: () => R.intl.string(R.t["6DqAp0"]),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = h.useMemo(() => (0, ii.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? CB.UI(t, S.dzt.MUTUAL_GUILDS) : CB.iE(t, S.dzt.MUTUAL_GUILDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _5.uM)();
        },
    }),
    CY = (0, d.FW)(c.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => R.intl.string(R.t.wTdS6S),
        buildLayout: () => [CF, Cz, CX],
    });
var CH = n(420825);
let CK = (0, d.zD)(c.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => R.intl.string(R.t["jK+wdr"]),
        useSubtitle: () => R.intl.string(R.t["RYh/pW"]),
        useValue: () => !(0, CH.q)(),
        setValue: function (e) {
            L.Zd.updateSetting(!e);
        },
    }),
    CW = (0, d.zZ)(c.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = Cw.A.useConfig({ location: "Friend Request Setting" });
            return e ? R.intl.string(R.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => R.intl.string(R.t.fyA115),
        useInlineNotice: _8,
        buildLayout: () => [CY, CK],
    });
var CZ = n(994500),
    Cq = n(428678),
    CQ = n(717398),
    CJ = n(730134),
    C$ = n(276573);
function C0(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, A.jsxs)("div", {
        className: C$.wx,
        children: [
            (0, A.jsx)("div", {
                className: C$.zc,
                children: i ? (0, A.jsx)(Cq.K, {}) : (0, A.jsx)(NR.EyeSlashIcon, {}),
            }),
            (0, A.jsxs)("div", {
                className: C$.Qq,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: R.intl.string(i ? R.t.PFOUKW : R.t["93ZDWE"]),
                    }),
                    (0, A.jsx)(H.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: i
                            ? R.intl.format(R.t["r91W/h"], { numberOfBlockedUsers: n })
                            : R.intl.format(R.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function C1(e) {
    let { userId: t, last: n } = e,
        i = (0, E.bG)([CZ.A], () => CZ.A.isBlocked(t)),
        s = (0, E.bG)([lg.default], () => lg.default.getUser(t)),
        [l, r] = h.useState(!1),
        a = h.useCallback(() => {
            (r(!0),
                i
                    ? CQ.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : CQ.A.unignoreUser(t, tM.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, A.jsxs)("div", {
              className: ic()(C$.nM, { [C$.fW]: n }),
              children: [
                  (0, A.jsxs)("div", {
                      className: C$.eF,
                      children: [
                          (0, A.jsx)(CJ.A, { user: s, size: I._3.SIZE_40 }),
                          (0, A.jsxs)("div", {
                              className: C$.Qq,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      text: R.intl.string(i ? R.t.XyHpKH : R.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function C2(e) {
    let { userIds: t, listType: n } = e,
        [i, s] = h.useState(5);
    return (0, A.jsx)(Nq.h, {
        children: (0, A.jsxs)("div", {
            className: C$.Nr,
            children: [
                (0, A.jsx)(C0, { listType: n, numberOfUsers: t.length }),
                (0, A.jsx)("div", {
                    className: C$.jS,
                    children: t.slice(0, i).map((e, n) => (0, A.jsx)(C1, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, A.jsx)("div", {
                          className: C$.vM,
                          children: (0, A.jsx)(n4.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: C$.Qf,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: R.intl.format(R.t.jULEDr, {
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
let C3 = (0, d.E2)(c.X.BLOCKED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t.PFOUKW)],
        usePredicate: () => (0, E.bG)([CZ.A], () => CZ.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, E.yK)([CZ.A], () => CZ.A.getBlockedIDs());
            return (0, A.jsx)(C2, { userIds: e, listType: "blocked" });
        },
    }),
    C5 = (0, d.E2)(c.X.IGNORED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t["93ZDWE"])],
        usePredicate: () => (0, E.bG)([CZ.A], () => CZ.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, E.yK)([CZ.A], () => CZ.A.getIgnoredIDs());
            return (0, A.jsx)(C2, { userIds: e, listType: "ignored" });
        },
    }),
    C4 = (0, d.zZ)(c.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+Iryf3"]),
        useSubtitle: () =>
            R.intl.format(R.t["0aNQo9"], { helpArticle: eT.A.getArticleURL(S.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [C3, C5],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, E.cf)([CZ.A], () => ({
                hasBlockedUsers: CZ.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: CZ.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var C6 = n(22385),
    C8 = n(556534),
    C7 = n(111159),
    C9 = n(152056),
    be = n(428031),
    bt = n(978433);
let bn = { label: () => R.intl.string(R.t["32u1Dx"]), value: C6.YG };
var bi = n(307863),
    bs = n(954225);
function bl() {
    return (0, bi.e)() ? R.intl.string(R.t.PMsfcH) : R.intl.string(R.t.RAQUSN);
}
function br(e, t) {
    tr.default.track(S.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let ba = (0, d.zD)(c.X.PERMISSIONS_DMS_SETTING, {
    useTitle: bl,
    useSubtitle: function () {
        let e = (0, C8.Tx)(),
            t = (0, C8.q9)(),
            n = (0, bi.e)();
        return e === C6.YG
            ? n
                ? R.intl.string(R.t.XXGmuB)
                : R.intl.string(R.t.wbYDfT)
            : t
              ? R.intl.string(R.t.V0ka0Q)
              : n
                ? R.intl.string(R.t.F9WY3f)
                : R.intl.string(R.t.G7c3Xo);
    },
    useValue: function () {
        let e = (0, C8.Tx)(),
            t = L.$s.useSetting().includes(e),
            n = (0, be.K)();
        return e === C6.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, _5.uM)();
        return (0, C8.Tx)() === C6.YG && e;
    },
    setValue: function (e) {
        let t = C6.xk.getState().selectedGuildId;
        if (t === C6.YG) {
            var n;
            ((n = !e),
                (0, NI.O)({
                    header: R.intl.string(R.t["uUr+GR"]),
                    body: R.intl.string(R.t.hjGJBp),
                    confirmText: R.intl.string(R.t.gm1Vej),
                    cancelText: R.intl.string(R.t.p89ACt),
                    confirmButtonColor: lZ.$n.Colors.BRAND,
                    onConfirm: function () {
                        (L.n6.updateSetting(n), br(n, !1));
                    },
                    onCancel: function () {
                        (L.n6.updateSetting(n), L.$s.updateSetting(n ? sI.A.getGuildIds() : []), br(n, !0));
                    },
                }));
        } else {
            let n = (0, ii.Tb)();
            (e ? n.delete(t) : n.add(t),
                L.$s.updateSetting(Array.from(n)),
                tr.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: bs.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var bo = n(116774),
    bu = n(953298);
function bd(e, t) {
    tr.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function bc() {
    return R.intl.string(R.t["3o2ojh"]);
}
let bg = (0, d.zD)(c.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: bc,
        useSubtitle: function () {
            let e = (0, C8.q9)(),
                t = eT.A.getArticleURL(S.MVz.MESSAGE_REQUESTS);
            return e
                ? R.intl.format(R.t.WpnWLc, { helpdeskArticle: t })
                : R.intl.format(R.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, C8.Tx)(),
                t = (0, be.K)(),
                n = L.$s.useSetting().includes(e),
                i = (0, bo.s)(),
                s = (0, _5.uM)(),
                l = L.YX.useSetting(),
                r = L.Zr.useSetting().includes(e);
            return !!i || (e === C6.YG && s ? !l : e === C6.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, C8.Tx)(),
                t = (0, _5.uM)(),
                n = (0, be.K)(),
                i = L.$s.useSetting().includes(e),
                s = (0, bo.s)();
            return e === C6.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = C6.xk.getState().selectedGuildId;
            if (!e && (0, bu.w)())
                return void fa.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === C6.YG) {
                var n;
                ((n = !e),
                    (0, NI.O)({
                        header: R.intl.string(R.t.yAfu1p),
                        body: R.intl.string(R.t.Ry2z74),
                        confirmText: R.intl.string(R.t.gm1Vej),
                        cancelText: R.intl.string(R.t.p89ACt),
                        confirmButtonColor: lZ.$n.Colors.BRAND,
                        onConfirm: function () {
                            (L.YX.updateSetting(n), bd(n, !1));
                        },
                        onCancel: function () {
                            (L.YX.updateSetting(n), L.Zr.updateSetting(n ? sI.A.getGuildIds() : []), bd(n, !0));
                        },
                    }));
            } else {
                let n = (0, ii.xo)();
                (e ? n.delete(t) : n.add(t),
                    L.Zr.updateSetting(Array.from(n)),
                    tr.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bs.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    bm = (0, d.E2)(c.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [bl(), bc()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, C6.xk)(),
                s = (0, E.bG)([co.Ay], () => co.Ay.getFlattenedGuildIds()),
                l = (0, E.bG)([sI.A], () => sI.A.getGuilds()),
                r =
                    ((e = L.$s.useSetting()),
                    (t = (0, be.K)()),
                    (0, E.bG)(
                        [sI.A],
                        () => {
                            let n = new Set(e);
                            return sI.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = s[0];
            h.useEffect(
                () =>
                    C9.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = C6.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === C6.YG && null != a
                                ? i(a)
                                : "" === e && n !== C6.YG && i(C6.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = h.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...bn,
                            id: bn.value,
                            label: bn.label(),
                            leading: (0, A.jsx)("div", {
                                className: bt.KP,
                                children: (0, A.jsx)(C7.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: bt.cl,
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
                                    leading: (0, A.jsx)(cT.Ay, {
                                        className: bt.cl,
                                        guild: n,
                                        size: cT.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === C6.YG && r > 0;
            return (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(xI.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    u &&
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: bt.h_,
                            children: R.intl.format(R.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, A.jsx)(
                                        H.E,
                                        { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    bA = (0, d.E2)(c.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, C8.Tx)(),
                t = Co();
            return e === C6.YG && null != t;
        },
        Component: function () {
            let e = Co(),
                t = Ca(_6.YA.AGE_CONFIRMATION_NOTICE, fd),
                n = Ca(_6.YA.CONTENT_AND_SOCIAL_NOTICE, fr.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, A.jsx)(Cr, {
                        noticeType: _6.YA.AGE_CONFIRMATION_NOTICE,
                        iconAlign: "center",
                        body: R.intl.format(fm.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: R.intl.string(fm.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, A.jsx)(Cr, {
                        noticeType: _6.YA.CONTENT_AND_SOCIAL_NOTICE,
                        iconAlign: "start",
                        body: R.intl.format(fm.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: R.intl.string(R.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    bh = (0, d.zZ)(c.X.PERMISSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Y5GYcX),
        useSubnavLabel: () => R.intl.string(R.t.YUU0RF),
        useInlineNotice: function () {
            let e = _8(),
                t = Cg();
            if ((0, C8.Tx)() === C6.YG) return e ?? t;
        },
        buildLayout: () => [bm, ba, bg, bA],
    }),
    bE = (0, d.zZ)(c.X.SPAM_FILTERS_CATEGORY, { useTitle: () => R.intl.string(R.t.Qwuoic), buildLayout: () => [Ck] }),
    bS = (0, d.zZ)(c.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = Ci();
            function t(e, t) {
                return (0, A.jsx)(
                    H.E,
                    { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? R.intl.string(R.t.Amr1IZ)
                : 1 === e.length
                  ? R.intl.format(R.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? R.intl.format(R.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : R.intl.format(R.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => R.intl.string(R.t.YpCiMt),
        useHeaderDecoration: () => {
            let e = (function () {
                let { sortedGames: e } = Ci();
                return h.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, A.jsx)("img", {
                                src: O.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: hM.CD,
                                height: hM.CD,
                            }),
                            shape: hM.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, A.jsx)("img", {
                                    src: O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: hM.YP,
                                    height: hM.YP,
                                }),
                                shape: hM.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: m.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [R.intl.string(R.t.YpCiMt)],
        initialize: () => {
            Ed.A.fetch();
        },
        buildLayout: () => [Ct, Cn, N9, N5],
    }),
    bx = (0, d.t_)(c.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        buildLayout: () => [CM, bE, bh, CW, bS, C4],
    }),
    bp = (0, d.i4)(c.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        icon: N2.l,
        buildLayout: () => [bx],
    });
var bT = n(782603),
    bf = n(899847),
    bI = n(695515);
let b_ = (0, d.Hn)(c.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => R.intl.string(R.t["8rHeOr"]),
        useSubtitle: () => R.intl.string(R.t["eJE6+J"]),
        useValue: L.cU.useSetting,
        setValue: L.cU.updateSetting,
        useOptions: () =>
            F.range(1, 11).map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: R.intl.formatToPlainString(R.t.iXLF9W, { minutes: e }),
            })),
    }),
    bN = (0, d.zD)(c.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => R.intl.string(R.t["btbS+Z"]),
        useSubtitle: () =>
            R.intl.format(R.t.Q5crhR, { onClick: () => (0, no.openUserSettings)(c.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    bC = (0, d.Qx)(c.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.JZxxGx),
        useSubtitle: () => R.intl.string(R.t.HDLtJl),
        useValue: () => (0, E.bG)([aO.A], () => aO.A.getTTSType()),
        setValue: (e) => aG.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.B1AGeJ), value: S.aVn.ALL_CHANNELS },
                { name: R.intl.string(R.t.uzZg9e), value: S.aVn.SELECTED_CHANNEL },
                { name: R.intl.string(R.t.DYO5Oi), value: S.aVn.NEVER },
            ];
        },
        usePredicate: () => w.$j,
    }),
    bb = c.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    by = (0, d.bd)(bb, {
        useTitle: (e) => (e ? R.intl.string(R.t.RyimDk) : R.intl.string(R.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tp(bb, {
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
        buildLayout: () => [b_, bN, bC],
    }),
    bv = (0, d.zZ)(c.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["31DySj"]),
        buildLayout: () => [by],
    }),
    bj = (0, d.zD)(c.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => R.intl.string(R.t.VH8AIJ),
        useSubtitle: () => R.intl.string(R.t["9K4qwX"]),
        useValue: function () {
            return (0, E.bG)([aO.A], () => !aO.A.getDisableUnreadBadge());
        },
        setValue: (e) => aG.default.setDisableUnreadBadge(!e),
    }),
    bO = (0, d.zZ)(c.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.l6w3Vj),
        buildLayout: () => [bj],
    });
var bL = n(840559),
    bR = n(997187);
let bD = (0, Nl.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var bP = n(723923);
let bG = bP.px.map((e) =>
        (0, d.zD)(`${c.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, E.cf)([bR.A], () => bR.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, bL.CA)(e.category, t),
        }),
    ),
    bM = (0, d.Tf)(c.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => R.intl.string(R.t.Ra9Pwk),
        useSubtitle: () => R.intl.string(R.t.iYjQ8X),
        useLabel: () => R.intl.string(R.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, E.cf)([bR.A], () => bR.A.getEmailSettings());
            return bP.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, bL.NI)(),
        useVariant: () => "critical-secondary",
    }),
    bU = (0, d.zZ)(c.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = bD.useConfig({ location: "Email Settings Category" });
            return e ? R.intl.string(R.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = bR.A.getEmailSettings();
            e || (0, bL.cR)();
        },
        buildLayout: () => [...bG, bM],
    }),
    bV = (0, d.zD)(c.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["/0WCll"]),
        useSubtitle: () => R.intl.string(R.t.wF9ih3),
        useValue: function () {
            return (0, E.bG)([aO.A], () => aO.A.getDesktopType()) !== S.nRU.NEVER;
        },
        setValue: (e) => aG.default.setDesktopType(e ? S.nRU.ALL : S.nRU.NEVER),
    });
var bk = n(832712),
    bw = n(543465),
    bF = n(790782);
let bB = (0, d.zD)(c.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => R.intl.string(R.t["k6m/si"]),
    useSubtitle: () => R.intl.string(R.t.LGynPs),
    useValue: () => (0, E.bG)([bw.Ay], () => bw.Ay.useNewNotifications),
    setValue: function (e) {
        (bk.A.setAccountFlag(hH.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (Aq.w.set("turnedOffNewNotifications", !0),
                tr.default.track(S.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sI.A.getGuildsArray().filter(
                        (e) => bw.Ay.resolveGuildUnreadSetting(e) === bF.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, E.bG)(
            [lg.default, bw.Ay],
            () =>
                lg.default.getCurrentUser()?.isStaff() ||
                lg.default.getCurrentUser()?.isStaffPersonal() ||
                bw.Ay.useNewNotifications,
        ),
});
var bz = n(534654);
let bX = (0, d.zD)(c.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => R.intl.string(R.t.z9h8Ym),
        useSubtitle: () => R.intl.string(R.t.TummoQ),
        useValue: () => (0, E.bG)([aO.A], () => aO.A.screenDowntimeReminder),
        setValue: (e) => aG.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, bz.A)(),
                t = (0, _e.Du)();
            return e && t;
        },
    }),
    bY = (0, d.zD)(c.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => R.intl.string(R.t.onrAy7),
        useSubtitle: () => R.intl.string(R.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, bz.A)(),
                t = (0, _e.Du)();
            return e && t;
        },
    }),
    bH = (0, d.zD)(c.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.NjOMvh),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            (L.oz.updateSetting(e),
                tr.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hH.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [R.intl.string(R.t.hi4dSk)],
    }),
    bK = (0, d.zD)(c.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            (L.NR.updateSetting(e),
                tr.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hH.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    bW = (0, d.zD)(c.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            (L.Yh.updateSetting(e),
                tr.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hH.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    bZ = (0, d.zD)(c.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            (L.T3.updateSetting(e),
                tr.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hH.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var bq = n(815807);
let bQ = (0, d.Hn)(c.X.REACTION_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: R.intl.string(R.t["9x/RtT"]), value: eK.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: R.intl.string(R.t.fJAbQd), value: eK.Tz.ONLY_DMS },
            { id: "disabled", label: R.intl.string(R.t["xu+UDU"]), value: eK.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, bq.n4)(e, L.Zp.getSetting()),
    }),
    bJ = (0, d.zD)(c.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["k51K1+"]),
        useValue: L.Qr.useSetting,
        setValue: function (e) {
            (L.Qr.updateSetting(e),
                tr.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hH.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    b$ = (0, Nl.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    b0 = (0, d.zD)(c.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            (L.zS.updateSetting(e),
                tr.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hH.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => b$.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    b1 = (0, d.FW)(c.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.FEVRDV),
        buildLayout: () => [bW, bH, bK, bJ, b0, bZ, bQ],
    }),
    b2 = (0, d.zD)(c.X.TASK_BAR_FLASHING, {
        useTitle: () => R.intl.string(R.t.xSmFQG),
        useSubtitle: () => R.intl.string(R.t.bd4j4x),
        useValue: () => (0, E.bG)([aO.A], () => aO.A.taskbarFlash),
        setValue: (e) => aG.default.setTaskbarFlash(e),
        usePredicate: () => (0, nS.uF)(),
    }),
    b3 = (0, d.zZ)(c.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [bV, b2, b1, bB, bY, bX],
    });
var b5 = n(965957),
    b4 = n(312671),
    b6 = n(235079);
let b8 = (0, d.zD)(c.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aL.A.useHolidaySoundpack();
        return null == e ? "" : R.intl.format(R.t["E/OyBr"], { soundpack: R.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, E.bG)([b4.A], () => b4.A.getSoundpack()),
            t = aL.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aL.A.getHolidaySoundpack();
        (tg()(null != t, "predicate should fail if no soundpack is available"), (0, b5.p)(e ? t : b6.i.CLASSIC));
    },
    usePredicate: aL.A.useIsEligible,
});
var b7 = n(970931);
let b9 = {
        useTitle: () => R.intl.string(R.t.jD1qzM),
        sound: "message1",
        useDisabled: b7.kB,
        useDisabledMessage: () => ((0, b7.kB)() ? R.intl.string(R.t.cIRG0s) : void 0),
    },
    ye = { useTitle: () => R.intl.string(R.t.XBrJT6), sound: "call_ringing" },
    yt = (0, d.zD)(c.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.TzjwV9),
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => aV("message3") }),
        useValue: () =>
            (0, E.bG)([aO.A], () => aO.A.getNotifyMessagesInSelectedChannel() && !aO.A.getDisableAllSounds()),
        setValue: (e) => aG.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, E.bG)([aO.A], () => aO.A.getDisableAllSounds()),
    }),
    yn = (0, d.zD)(c.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => R.intl.string(R.t["2ZhCOd"]),
        useSubtitle: () => R.intl.string(R.t.EAKdPr),
        useValue: () => (0, E.bG)([aO.A], () => aO.A.getDisableAllSounds()),
        setValue: (e) => aG.default.toggleDisableAllSounds(e),
    }),
    yi = (0, d.D1)(c.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aU();
            };
        },
        buildLayout: () => [ak(b9), yt, ak(ye), yn],
    }),
    ys = (0, d.AK)(c.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t["MMy+lm"]),
        useSearchTerms: () => [R.intl.string(R.t["MMy+lm"])],
        destinationKey: c.X.SOUNDS_CATEGORY,
    }),
    yl = (0, d.gN)(c.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [ys] }),
    yr = (0, d.zZ)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.LweOYy),
        buildLayout: () => [b8, yi, yl],
    }),
    ya = (0, d.t_)(c.X.NOTIFICATIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.HcoRu0),
        initialize: () => {
            null != bI.A.getAgeGroup() || bI.A.isLoading() || (bI.A.canRefetch() && bf.Ay.initialPageLoad());
        },
        buildLayout: () => [b3, yr, bO, bU, bv],
    }),
    yo = (0, d.i4)(c.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.HcoRu0),
        icon: bT.BellIcon,
        buildLayout: () => [ya],
    }),
    yu = (0, d.WI)(c.X.USER_SECTION, {
        useTitle: () => R.intl.string(R.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [_p, N1, bp, yo, _$],
    });
var yd = n(387758),
    yc = n(271866),
    yg = n(147964),
    ym = n(868511);
let yA = (0, d.zD)(c.X.APPLICATION_TEST_MODE, {
        useTitle: () => R.intl.string(R.t.erOqlh),
        useSubtitle: () => R.intl.string(R.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, E.bG)([yg.A], () => null != yg.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sm.openModal)((e) => (0, A.jsx)(ym.A, { ...e })) : yc.cL();
        },
    }),
    yh = (0, d.zD)(c.X.DEVELOPER_MODE, {
        useTitle: () => R.intl.string(R.t.ObIb1Q),
        useSubtitle: () => R.intl.format(R.t["CY6q/Q"], { apiDocsUrl: S.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => uV.p5,
    }),
    yE = (0, d.zZ)(c.X.DEVELOPER_CATEGORY, { buildLayout: () => [yh, yA] }),
    yS = (0, d.t_)(c.X.DEVELOPER_PANEL, { useTitle: () => R.intl.string(R.t["0BRxRp"]), buildLayout: () => [yE] }),
    yx = (0, d.i4)(c.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: yd.G,
        useTitle: () => R.intl.string(R.t["0BRxRp"]),
        buildLayout: () => [yS],
    });
var yp = n(70688),
    yT = n(830215);
let yf = (0, d.i4)(c.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => R.intl.string(R.t["2jxGer"]),
        icon: yp.DoorExitIcon,
        onClick: () => {
            (0, n3.A)({
                title: R.intl.string(R.t["2jxGer"]),
                subtitle: R.intl.string(R.t.SUnWBB),
                confirmText: R.intl.string(R.t["2jxGer"]),
                onConfirm: () => {
                    yT.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    yI = (0, d.WI)(c.X.UTILITY_SECTION, {
        useTitle: () => R.intl.string(R.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [yx, yf],
    }),
    y_ = (0, d.Hr)({ buildLayout: () => [ft, yu, Au, os, xD, hD, yI], analyticsKey: "user_settings" });
