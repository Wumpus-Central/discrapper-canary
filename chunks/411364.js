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
    E = n(582128),
    h = n(17928),
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
    Y = n(331322),
    X = n(299163),
    H = n(834730),
    K = n(113494),
    W = n(782134),
    Z = n(54570),
    q = n(8880),
    Q = n(75804);
let $ = B().debounce((e) => {
    (0, Z.zU)(e);
}, 250);
function J() {
    let [e, t] = E.useState(!1);
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
            let e = (0, h.bG)([q.A], () => q.A.speechRate);
            return (0, A.jsxs)(Y.B, {
                gap: 16,
                children: [
                    (0, A.jsx)(X.A, {
                        label: R.intl.string(R.t.lsW5Ev),
                        description: R.intl.string(R.t.Ci4wMS),
                        markers: Q.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: $,
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
                    (0, A.jsx)(J, {}),
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
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.desaturateUserColors),
    setValue: () => (0, es.YV)(),
});
var er = n(652525);
let ea = (0, d.zD)(c.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => R.intl.string(R.t["+Isihb"]),
        useSubtitle: () => R.intl.string(R.t.nNZ1Tz),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.enableCustomCursor),
        setValue: (e) => (0, es.ts)(e),
        usePredicate: () => (0, er.t)("EnableCustomCursorSetting"),
    }),
    eo = (0, d.zD)(c.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => R.intl.string(R.t["S3z+pV"]),
        useSubtitle: () => R.intl.string(R.t["3QuI9+"]),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, es.Gm)(e),
        hasIcon: !0,
    });
var eu = n(554146);
let ed = (0, d.zD)(c.X.HIGH_CONTRAST_MODE, {
    useTitle: () => R.intl.string(R.t.aZlePv),
    useSubtitle: () => R.intl.string(R.t["v2qF8+"]),
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isHighContrastModeEnabled),
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
            return E.useMemo(
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
            return (0, h.bG)([eg.Ay], () => eg.Ay.hdrDynamicRange);
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
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.officialMessageStyle),
        setValue: (e) => (0, es.w_)(e),
    }),
    eE = (0, d.Hn)(c.X.ROLE_STYLE, {
        useTitle: () => R.intl.string(R.t.uSOPWm),
        useSubtitle: () => R.intl.string(R.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: R.intl.string(R.t.eDdMzJ), value: "username" },
            { id: "dot", label: R.intl.string(R.t.rdmJp0), value: "dot" },
            { id: "hidden", label: R.intl.string(R.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.roleStyle),
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
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.roleStyle),
    setValue: (e) => (0, es.IX)(e),
});
let eh = (0, d.sN)(c.X.SATURATION, {
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
            let e = (0, h.bG)([N.Ay], () => N.Ay.syncForcedColors);
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
        buildLayout: () => [eh, el, ed, ea, eI, em, eE, eA, eo, ei],
    });
var eN = n(397438),
    eC = n(355097),
    eb = n(141531);
function ey(e) {
    return (0, h.bG)([eN.A], () =>
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
    return (0, h.bG)([eN.A], () => eN.A.getAppliedOverrideReasonKey(e) === eC._A.GAME_MODE);
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
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.prefersReducedMotion),
        setValue: (e) => (0, es.qz)(e ? "reduce" : "no-preference"),
    }),
    eP = (0, d.zD)(c.X.SYNC_REDUCED_MOTION, {
        useTitle: () => R.intl.string(R.t.oL55A6),
        useValue: () => (0, h.bG)([N.Ay], () => "auto" === N.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, es.qz)(e ? "auto" : N.Ay.systemPrefersReducedMotion),
    }),
    eG = (0, d.zZ)(c.X.MOTION_CATEGORY, {
        useTitle: () => R.intl.string(R.t.e3TR1b),
        buildLayout: () => [eD, eP, eO, ej, eR],
    });
var eM = n(688810),
    eU = n(259065),
    eV = n(701974);
let ek = (0, d.zD)(c.X.DISPLAY_NAME_STYLES, {
    useTitle: () => R.intl.string(eV.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eM.Ay)();
        return R.intl.format(eV.default.aEax6P, {
            onClickOpenModal() {
                (0, eU.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, es.Dm)(e),
});
function ew(e) {
    return `${e.toFixed(0)}px`;
}
let eF = (0, d.sN)(c.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => R.intl.string(R.t.rT3Pq5),
        useSubtitle: () => R.intl.string(R.t.LXUhen),
        markers: S.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: S.hH7.FONT_SIZES["0"],
        maxValue: S.hH7.FONT_SIZES[S.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => S.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => N.Ay.fontSize,
        onValueRender: ew,
        onMarkerRender: ew,
        asValueChanges: (e) => (0, es.XS)(e),
    }),
    eB = (0, d.zD)(c.X.UNDERLINE_LINKS, {
        useTitle: () => R.intl.string(R.t.OLZFB8),
        useSubtitle: () => R.intl.string(R.t.DIX3ke),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, es.kI)(e),
    }),
    ez = (0, d.zZ)(c.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["bxh/R7"]),
        buildLayout: () => [eF, eB, ek],
    });
var eY = n(873298);
let eX = (0, d.Qx)(c.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => R.intl.string(R.t["C/5V0A"]),
        useSubtitle: () => R.intl.string(R.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: R.intl.string(R.t["7iegX4"]), value: eY.NS.COMPACT },
            { name: R.intl.string(R.t.bBvAEH), value: eY.NS.DEFAULT },
            { name: R.intl.string(R.t["4cuYHx"]), value: eY.NS.COZY },
        ],
        useValue: () => L.Xi.useSetting(),
        setValue: (e) => {
            e !== eY.NS.UNSET_UI_DENSITY && L.Xi.updateSetting(e);
        },
    }),
    eH = "cozy",
    eK = "compact",
    eW = (0, d.Qx)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => R.intl.string(R.t.nKRoPv),
        useSubtitle: () => R.intl.string(R.t.QntEEG),
        useSearchTerms: () => [R.intl.string(R.t.ZEoGMd)],
        useOptions: () => [
            { name: R.intl.string(R.t.Jqj4cZ), value: eH },
            { name: R.intl.string(R.t["1JNcPS"]), value: eK },
        ],
        useValue: () => (L.hH.useSetting() ? eK : eH),
        setValue: (e) => {
            (L.hH.updateSetting(e === eK), (0, es.AC)());
        },
    });
var eZ = n(381941);
function eq(e) {
    return `${e.toFixed(0)}px`;
}
let eQ = (0, d.sN)(c.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => R.intl.string(R.t.Q6lKkg),
    useSubtitle: () => R.intl.string(R.t.p7eUrb),
    markers: eZ.qh,
    stickToMarkers: !0,
    minValue: eZ.qh["0"],
    maxValue: eZ.qh[eZ.qh.length - 1],
    useDefaultValue: () => (L.hH.useSetting() ? eZ.y5 : eZ.ES),
    useExternalValue: () => (0, h.bG)([N.Ay], () => N.Ay.messageGroupSpacing),
    getInitialValue: () => N.Ay.messageGroupSpacing,
    onValueRender: eq,
    onMarkerRender: eq,
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
var e$ = n(775121),
    eJ = n(723702);
let e0 = (0, d.sN)(c.X.APPEARANCE_ZOOM, {
        usePredicate: () => eJ.isPlatformEmbedded,
        useTitle: () => R.intl.string(R.t.i19n5L),
        useSubtitle: () => R.intl.format(R.t["x9PK/3"], { modKey: e$.A.modKey }),
        markers: S.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: S.hH7.ZOOM_SCALES["0"],
        maxValue: S.hH7.ZOOM_SCALES[S.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => S.hH7.ZOOM_DEFAULT,
        getInitialValue: () => N.Ay.zoom,
        useExternalValue: () => (0, h.bG)([N.Ay], () => N.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, es.Qp)(e),
        useSearchTerms: () => [R.intl.string(R.t.ip0uSf)],
    }),
    e1 = (0, d.zZ)(c.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.VKYWk8),
        buildLayout: () => [eX, eW, eQ, e0],
    }),
    e2 = (0, d.t_)(c.X.ACCESSIBILITY_PANEL, {
        useTitle: () => R.intl.string(R.t.G0neg7),
        buildLayout: () => [ez, e1, e_, eG, et],
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = L.hH.useSetting(),
                    t = L.jW.useSetting(),
                    n = E.useMemo(
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
                    i = (0, h.bG)([N.Ay], () => N.Ay.messageGroupSpacing);
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
    e3 = (0, d.i4)(c.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.G0neg7),
        icon: g.c,
        useMenu: U.A,
        buildLayout: () => [e2],
    });
n(321073);
var e5 = n(650809),
    e6 = n(477782),
    e4 = n(636537),
    e8 = n(228366),
    e7 = n(74396),
    e9 = n(93055),
    te = n(269880),
    tt = n(55619),
    tn = n(351906),
    ti = n(174459),
    ts = n(812993),
    tl = n(189081);
let tr = (0, d.zD)(c.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, h.bG)([tl.A], () => tl.A.hasLibraryApplication()),
        useTitle: () => R.intl.string(R.t.fi3UQN),
        useSubtitle: () => R.intl.string(R.t["8mYp37"]),
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
    }),
    ta = (0, d.zZ)(c.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["8/udY0"]),
        buildLayout: () => [tr],
    });
var to = n(284009),
    tu = n.n(to),
    td = n(199966),
    tc = n(963935);
function tg(e) {
    let { title: t } = e;
    return t;
}
function tm(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: s } = e,
        l = t();
    return "string" == typeof l ? i({ title: l, index: s, key: n }) : l;
}
function tA(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, A.jsx)(tm, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tE(e) {
    return e.type === tc.Z6.LIST;
}
function th(e, t) {
    let { limit: n = 2, formatter: i = tg } = t ?? {};
    tu()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, td._)(),
        r = s.get(e) ?? l.get(e);
    tu()(
        null != r && (r.type === tc.Z6.ACCORDION || tE(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tE(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return E.useMemo(() => {
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
                return R.intl.format(R.t["3H9tCW"], { settingOneHook: tA({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return R.intl.format(R.t.MWryo6, {
                    settingOneHook: tA({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tA({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return R.intl.format(R.t.a00b5G, {
                    settingOneHook: tA({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tA({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tA({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === s
            ? R.intl.format(R.t.O8vNbS, { settingOneHook: tA({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === s
              ? R.intl.format(R.t["acXG/W"], {
                    settingOneHook: tA({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tA({ setting: t[1], formatter: i, index: 1 }),
                })
              : R.intl.format(R.t["5+ldWc"], {
                    settingOneHook: tA({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tA({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tA({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tS = n(951260);
let tx = (0, d.zD)(c.X.ENABLE_APPS_BUTTON, {
        useTitle: () => R.intl.string(R.t.ZTH4j4),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, es.n8)({ appsButtonEnabled: e }),
    }),
    tp = {
        useTitle: () => R.intl.string(R.t["I/5LyL"]),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isSubmitButtonEnabled),
        setValue: () => (0, es.Xt)(),
    },
    tT = (0, d.zD)(c.X.ENABLE_SEND_BUTTON, tp),
    tf = (0, d.zD)(c.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tp,
        usePredicate: () => !(0, tS.n)("EnableSendButtonOutsideExperiment"),
    }),
    tI = (0, d.zD)(c.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => R.intl.string(R.t.WggFoO),
        useSubtitle: () => R.intl.string(R.t.XpErGj),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, es.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    t_ = (0, d.zD)(c.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => R.intl.string(R.t.YErWkD),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, es.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tN = (0, d.zD)(c.X.ENABLE_GIF_BUTTON, {
        useTitle: () => R.intl.string(R.t.k7oNEz),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isGifButtonEnabled),
        setValue: (e) => (0, es.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tC = (0, d.zD)(c.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => R.intl.string(R.t.Ar0krj),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, es.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tb = (0, d.Qx)(c.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => R.intl.string(R.t.AxRAWt),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat),
        setValue: (e) => (0, es.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.k86Soy), desc: R.intl.string(R.t.bSGTTZ), value: N.IG.FLEXIBLE },
                { name: R.intl.string(R.t.bjwSOn), desc: R.intl.string(R.t.We36HX), value: N.IG.CONDENSED },
                { name: R.intl.string(R.t.FDIKss), desc: R.intl.string(R.t["rclZL/"]), value: N.IG.HIDDEN },
            ];
        },
    }),
    ty = (0, d.FW)(c.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => R.intl.string(R.t["V9/cNN"]),
        buildLayout: () => [tb, tI, t_, tN, tC],
    }),
    tv = (0, d.bd)(c.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.IwVGQs) : R.intl.string(R.t.cFNDh5);
        },
        useCollapsedSubtitle: () => th(c.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tS.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tT, tx, ty],
    });
var tj = n(565645);
let tO = (0, d.zD)(c.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => R.intl.string(R.t["79qal8"]),
        useSubtitle: () =>
            R.intl.format(R.t.GejoQK, { emojiHook: (e, t) => (0, A.jsx)(tj.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: L.j7.useSetting,
        setValue: L.j7.updateSetting,
    }),
    tL = (0, d.zD)(c.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => R.intl.string(R.t.c0oFDw),
        useValue: L.BQ.useSetting,
        setValue: L.BQ.updateSetting,
    }),
    tR = (0, d.zD)(c.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => R.intl.string(R.t.AqGrEI),
        useValue: L.SI.useSetting,
        setValue: (e) => {
            (ti.default.track(S.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                L.SI.updateSetting(e));
        },
    });
var tD = n(793574);
let tP = (0, d.zD)(c.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => R.intl.string(R.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            (ti.default.track(S.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tD.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e));
        },
    }),
    tG = (0, d.zZ)(c.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Ob7VMB),
        useSearchTerms: () => [R.intl.string(R.t.onqU6o)],
        buildLayout: () => [tR, tO, tP, tL, tf, tv],
    });
var tM = n(526162),
    tU = n(793943),
    tV = n(792656),
    tk = n(830543),
    tw = n(785007),
    tF = n(806932),
    tB = n(915089),
    tz = n(10392),
    tY = n(82498),
    tX = n(174197),
    tH = n(202541);
let tK = (0, d.E2)(c.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [R.intl.string(R.t.gnwxvT)],
    Component: function () {
        let e = (0, tB.GV)(),
            { ref: t, ...n } = (0, tw._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, h.bG)([tM.A], () => tM.A.isUpsellPreview);
        return (
            (0, z.Ay)(() => {
                i &&
                    (ti.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tH.e.APP_ICON_UPSELL,
                        location_stack: [tD.A.USER_SETTINGS],
                    }),
                    (0, tz.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, [tD.A.USER_SETTINGS], () =>
                        (0, tY.uq)(tH.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, A.jsx)("div", {
                ...n,
                ref: t,
                children: (0, A.jsx)(Y.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, A.jsx)(tF.m, { disabled: i, size: tX.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function tW() {
    ((0, tU.nf)(tU.HP.APP_ICON), (0, tk.default)());
}
function tZ() {
    return (0, A.jsx)(tV.A, {
        subscriptionTier: tH.pe.TIER_2,
        defaultTextOverride: R.intl.string(R.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let tq = (0, d.zZ)(c.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RPh2ou),
        useSubtitle: () => R.intl.string(R.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, h.bG)([tM.A], () => tM.A.isUpsellPreview);
            return E.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: m.UV.BUTTON,
                        text: R.intl.string(R.t["6acvnZ"]),
                        onClick: tW,
                    }),
                    e && t.push({ id: "upsell-button", type: m.UV.STRONGLY_DISCOURAGED_CUSTOM, button: tZ }),
                    { type: m.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [tK],
    }),
    tQ = (0, d.AK)(c.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.UDr3Iy),
        useSearchTerms: () => [R.intl.string(R.t.UDr3Iy)],
        destinationKey: c.X.ACCESSIBILITY_PANEL,
    }),
    t$ = (0, d.gN)(c.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [tQ] });
var tJ = n(452027),
    t0 = n(193249),
    t1 = n(976860),
    t2 = n(16236),
    t3 = n(635233),
    t5 = n(749884),
    t6 = n(22277);
let t4 = eT.A.getArticleURL(S.MVz.FAVORITES_GUILD);
function t8() {
    let { analyticsLocations: e } = (0, eM.Ay)(tD.A.USER_SETTINGS_FAVORITES),
        t = E.useCallback(() => {
            ((0, t3.mv)("settings_page"), (0, t1.uh)(S.YYv), (0, tk.default)());
        }, []);
    return (0, A.jsx)(eM.f5, {
        value: e,
        children: (0, A.jsx)(tJ.D, {
            label: R.intl.string(t6.default.OT1NK5),
            description: R.intl.format(t6.default.GR2KOG, { helpCenterLink: t4 }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, A.jsxs)(Y.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, A.jsx)(_.$, { variant: "secondary", text: R.intl.string(t6.default["7WwLnr"]), onClick: t }),
                    (0, A.jsx)(tV.A, {
                        subscriptionTier: tH.pe.TIER_2,
                        defaultTextOverride: R.intl.string(t6.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let t7 = (0, d.E2)(c.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, e9.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [R.intl.string(t6.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, e9.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, t5.A)(!1);
            return e
                ? (0, A.jsx)(t0.d, {
                      checked: t,
                      description: R.intl.format(t6.default.GR2KOG, { helpCenterLink: t4 }),
                      onChange: t2.kG,
                      label: R.intl.string(t6.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, A.jsx)(t8, {});
        },
    }),
    t9 = (0, d.zD)(c.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => R.intl.string(R.t.U47N1p),
        useValue: L.hD.useSetting,
        setValue: L.hD.updateSetting,
    }),
    ne = (0, d.zD)(c.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => R.intl.string(R.t.VP11No),
        useValue: L.X6.useSetting,
        setValue: L.X6.updateSetting,
    }),
    nt = (0, d.FW)(c.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => R.intl.string(R.t["9nyle0"]),
        buildLayout: () => [t9, ne],
    }),
    nn = (0, d.zD)(c.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => R.intl.string(R.t["5bK9vw"]),
        useValue: L.rs.useSetting,
        setValue: L.rs.updateSetting,
    }),
    ni = (0, d.zD)(c.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => R.intl.string(R.t["zge/fP"]),
        useValue: L.jW.useSetting,
        setValue: L.jW.updateSetting,
    });
var ns = n(28863),
    nl = n(817281),
    nr = n(766075);
let na = (0, d.zD)(c.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => R.intl.string(R.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
                return R.intl.format(R.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, A.jsx)(
                            ns.Anchor,
                            {
                                onClick: () => (0, nr.openUserSettings)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !L.hH.useSetting(),
        useValue: () => {
            let e = (0, h.bG)([eg.Ay], () => eg.Ay.displayCompactAvatars);
            return !L.hH.useSetting() || e;
        },
        setValue: (e) => {
            nl.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    no = (0, d.Hn)(c.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => R.intl.string(R.t.QgwmVz),
        useOptions: () => [
            { value: S.P6Q.ON_CLICK, id: S.P6Q.ON_CLICK, label: R.intl.string(R.t["KFH/me"]) },
            { value: S.P6Q.ALWAYS, id: S.P6Q.ALWAYS, label: R.intl.string(R.t.Pe1RbL) },
            { value: S.P6Q.IF_MODERATOR, id: S.P6Q.IF_MODERATOR, label: R.intl.string(R.t.K5VTBE) },
        ],
        useValue: L.gs.useSetting,
        setValue: L.gs.updateSetting,
    }),
    nu = (0, d.zD)(c.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => R.intl.string(R.t.AInv5m),
        useValue: L.SY.useSetting,
        setValue: L.SY.updateSetting,
    }),
    nd = (0, d.zZ)(c.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.OIgYlQ),
        useSearchTerms: () => [R.intl.string(R.t["/VQax8"])],
        buildLayout: () => [nt, nn, ni, no, nu, na, t7, t$],
    });
var nc = n(753806),
    ng = n(145331);
let nm = (0, d.Qx)(c.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            (t ? nc.A.cleanUpPrivateChannelSearchState() : nc.A.cleanUpSearchState({ type: S.I4_.DMS }),
                (0, ng._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: ng.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t));
        },
    }),
    nA = (0, d.zZ)(c.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => R.intl.string(R.t["5h0QOP"]),
        buildLayout: () => [nm],
    });
var nE = n(574381);
let nh = (0, d.zD)(c.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => R.intl.string(R.t.IxjaoF),
        useValue: function () {
            return (0, h.bG)([tn.A], () => {
                let { autoToggle: e } = tn.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            tt.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nE.Av;
        },
    }),
    nS = (0, d.zD)(c.X.STREAMING_STREAMER_MODE, {
        useTitle: () => R.intl.string(R.t.TGNg6T),
        useSubtitle: () => R.intl.string(R.t["4nXLnE"]),
        useValue: function () {
            return (0, h.bG)([tn.A], () => {
                let { enabled: e } = tn.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            tt.A.update({ enabled: e });
        },
    });
var nx = n(77729),
    np = n(589051),
    nT = n(588857),
    nf = n(999834);
let nI = [],
    n_ = (0, d.Hn)(c.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => R.intl.string(R.t.VCDSLW),
        useSearchTerms: () => [R.intl.string(R.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nf.b_)(),
                t = (0, np.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return E.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(nT.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, h.bG)([tn.A], () => tn.A.getSettings().disabledOverlayWidgets ?? nI);
        },
        setValue: (e) => tt.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nN = (0, d.zD)(c.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => R.intl.string(R.t.LSBUGR),
        useValue: () =>
            (0, h.bG)([tn.A], () => {
                let { hidePersonalInformation: e } = tn.A.getSettings();
                return e;
            }),
        setValue: (e) => tt.A.update({ hidePersonalInformation: e }),
    }),
    nC = (0, d.zD)(c.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => R.intl.string(R.t.uWBOri),
        useValue: () =>
            (0, h.bG)([tn.A], () => {
                let { hideInstantInvites: e } = tn.A.getSettings();
                return e;
            }),
        setValue: (e) => tt.A.update({ hideInstantInvites: e }),
    }),
    nb = (0, d.zD)(c.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => R.intl.string(R.t.OrqYDP),
        useValue: () =>
            (0, h.bG)([tn.A], () => {
                let { disableSounds: e } = tn.A.getSettings();
                return e;
            }),
        setValue: (e) => tt.A.update({ disableSounds: e }),
    }),
    ny = (0, d.zD)(c.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.sUAbLd),
        useValue: () =>
            (0, h.bG)([tn.A], () => {
                let { disableNotifications: e } = tn.A.getSettings();
                return e;
            }),
        setValue: (e) => tt.A.update({ disableNotifications: e }),
    }),
    nv = (0, d.zD)(c.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => R.intl.string(R.t["iA81+a"]),
        useSubtitle: () => R.intl.string(R.t.P4vj0h),
        useValue: () =>
            (0, h.bG)([tn.A], () => {
                let { enableContentProtection: e } = tn.A.getSettings();
                return e;
            }),
        setValue: (e) => tt.A.update({ enableContentProtection: e }),
        usePredicate: () => nx.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nj = (0, d.FW)(c.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.xYhOEh),
        buildLayout: () => [nN, nC, nb, ny, nv, n_],
    }),
    nO = (0, d.zZ)(c.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.S5GfOW),
        buildLayout: () => [nS, nh, nj],
    });
var nL = n(147248),
    nR = n(141343),
    nD = n(665267),
    nP = n(414133),
    nG = n(98908);
let nM = (0, d.Hn)(c.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => R.intl.string(R.t.Q7mm4g),
        useSearchTerms: () => [R.intl.string(nG.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: R.intl.string(R.t["hrS/Pc"]), value: eY.tI.GUILD },
            { id: "personal", label: R.intl.string(R.t.mlvXIq), value: eY.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
        usePredicate: () => (0, nP.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nU = (0, d.zD)(c.X.SYNC_PROFILE_THEMES, {
        useTitle: () => R.intl.string(R.t.C00w4l),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, es.M1)(),
    });
var nV = n(284016),
    nk = n(363195);
let nw = (0, d.zD)(c.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => R.intl.string(R.t["/B+kEV"]),
    useSearchTerms: () => [R.intl.string(R.t.Ksh3ik)],
    useValue: function () {
        return (0, h.bG)([nV.A], () => !1 !== nV.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, h.bG)([nk.A], () => nk.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nk.A.theme,
            i = nL.A.gradientPreset?.id ?? null,
            s = L.eh.getSetting()?.customUserThemeSettings != null;
        ((t = S.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            e8.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: s },
            }),
            nl.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nF = n(393284);
let nB = (0, d.AK)(c.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.nhVQDJ),
        useSearchTerms: () => [R.intl.string(R.t.nhVQDJ)],
        destinationKey: c.X.ACCESSIBILITY_PANEL,
    }),
    nz = (0, d.gN)(c.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nB] }),
    nY = (0, d.zZ)(c.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, h.bG)([N.Ay], () => N.Ay.useForcedColors)
                ? {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: (0, ep.D)()
                          ? R.intl.format(R.t.Jae48E, {
                                onClick: () => {
                                    (0, nr.openUserSettings)(c.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : R.intl.string(R.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, h.bG)([nL.A, N.Ay], () => N.Ay.useForcedColors || nL.A.isPreview),
                t = (0, nR.V)();
            return e || t
                ? null
                : {
                      type: m.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: m.UV.BUTTON,
                              text: R.intl.string(R.t["E+COuA"]),
                              onClick: nD.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nF.k, nw, nU, nM, nz],
    }),
    nX = (0, d.t_)(c.X.APPEARANCE_PANEL, {
        initialize: function () {
            e7.A.isFetching() ||
                (e8.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                e4.Bo.get({ url: S.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        e8.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        e8.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => R.intl.string(R.t["iHH+ky"]),
        buildLayout: () => [nY, tq, nd, tG, nA, nO, ta],
    }),
    nH = [
        { badgeType: m.Xi.NEW, dismissibleContent: eu.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eu.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, A.jsx)(ts.JI, { text: R.intl.string(R.t.y2b7CA) });
            },
        },
    ],
    nK = (0, d.i4)(c.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["iHH+ky"]),
        icon: e5.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, te.A)(),
                s =
                    ((e = L.D_.useSetting()),
                    (t = L.SI.useSetting()),
                    e
                        ? null
                        : (0, A.jsx)(e6.sL, {
                              id: "preview-markdown-toggle",
                              label: R.intl.string(R.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  (ti.default.track(S.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: S.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      L.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                l =
                    ((n = (0, h.bG)([tn.A], () => tn.A.enabled, [])),
                    (0, A.jsx)(e6.sL, {
                        id: "streamer-mode-toggle",
                        label: R.intl.string(R.t.p9ZAJZ),
                        action: () => {
                            tt.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return E.useMemo(() => {
                let e = [...i];
                return (
                    null != s &&
                        e.push((0, A.jsx)(e6.rX, { label: R.intl.string(R.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, A.jsx)(e6.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [i, s, l]);
        },
        getDismissibleBadges: () =>
            (0, e9.ad)().isFreemium
                ? nH.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eu.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : nH,
        buildLayout: () => [nX],
    });
var nW = n(37646),
    nZ = n(434404);
let nq = (0, d.t_)(c.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => R.intl.string(R.t.KyFVyi),
        buildLayout: () => [nZ.F],
    }),
    nQ = (0, d.i4)(c.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: nW.U,
        useTitle: () => R.intl.string(R.t.KyFVyi),
        buildLayout: () => [nq],
    });
var n$ = n(3137),
    nJ = n(661531),
    n0 = n(314116),
    n1 = n(270003),
    n2 = n(939249),
    n3 = n(369606),
    n5 = n(320448),
    n6 = n(604121),
    n4 = n(725951),
    n8 = n(400492),
    n7 = n(669067),
    n9 = n(115063),
    ie = n(754692),
    it = n(927018),
    ii = n(512599),
    is = n(532197),
    il = n(403362),
    ir = n(874486),
    ia = n(503698),
    io = n.n(ia),
    iu = n(536637),
    id = n.n(iu),
    ic = n(58703),
    ig = n(906688),
    im = n(98705);
function iA(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, it.vM)(t);
    if (null == i) return null;
    let s = null != n,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = id()(n),
        m = null != o && s,
        E = m ? n2.D : "div";
    return (0, A.jsxs)(E, {
        className: io()(im.kL, m && im.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, A.jsx)("div", {
                className: im.zc,
                children: (0, A.jsx)(ig.A, { achievementId: t, size: ig.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, A.jsxs)("div", {
                className: im.VW,
                children: [
                    null != n &&
                        (0, A.jsx)(H.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: im.YR,
                            children: (0, ic.mk)(g),
                        }),
                    (0, A.jsx)(H.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, A.jsx)(H.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var iE = n(545744);
function ih(e) {
    let { onBackClick: t } = e,
        n = (0, h.bG)([ir.A], () => ir.A.getAllUnlockedAchievements()),
        i = E.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        s = E.useMemo(
            () =>
                Object.values(it.l0)
                    .filter(il.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)(n2.D, {
                onClick: t,
                className: iE.vv,
                children: [
                    (0, A.jsx)(is.A, { direction: is.A.Directions.LEFT, className: iE.Kk }),
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: R.intl.string(R.t["13/7kX"]),
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: iE.N1,
                children: [
                    (0, A.jsxs)("div", {
                        className: iE.if,
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
                        className: iE.nr,
                        children: (0, A.jsx)(n3.TrophyIcon, {
                            size: "custom",
                            color: nJ.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, A.jsx)("div", {
                    className: iE.yF,
                    children: (0, A.jsx)("div", {
                        className: iE.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, A.jsx)(iA, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, A.jsxs)("div", {
                    className: iE.yF,
                    children: [
                        (0, A.jsx)("div", {
                            className: iE.if,
                            children: (0, A.jsx)(H.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: R.intl.string(R.t.GFyMg1),
                            }),
                        }),
                        (0, A.jsx)("div", {
                            className: iE.Eh,
                            children: s.map((e) => (0, A.jsx)(iA, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, A.jsx)("div", { className: iE.yF, children: (0, A.jsx)("div", { className: iE.F3 }) }),
        ],
    });
}
var iS = n(224964),
    ix = n(31408),
    ip = n(368588);
let iT = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iI = (0, F.range)(0, 11),
    i_ = (0, F.range)(0, 2.25, 0.25),
    iN = (0, F.range)(1, 11),
    iC = (0, F.range)(1, 26),
    ib = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iy(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: s } = e,
        l = n.map((e) =>
            (0, A.jsx)(
                t0.d,
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
    return (0, A.jsx)(n1.n, { label: R.intl.string(R.t.bWVN1D), children: l });
}
function iv(e) {
    let { children: t } = e;
    return (0, A.jsx)(H.E, { className: ip.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function ij(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        s = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion);
    return (0, A.jsx)(t0.d, {
        label: R.intl.string(R.t.vuiXm9),
        description: R.intl.string(R.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, ie._)(it.sn.DISABLE_POGGERMODE),
                e && (!n || s)
                    ? (0, n0.A)({
                          title: s ? R.intl.string(R.t["FxT+p0"]) : R.intl.string(R.t.TAZ4F9),
                          subtitle: s ? R.intl.string(R.t.gmixrx) : R.intl.string(R.t.jN3t3K),
                          confirmText: R.intl.string(R.t.JFfins),
                          onConfirm: () => i(s ? iT : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iO(e) {
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
    return (0, A.jsxs)(n1.n, {
        label: R.intl.string(R.t.mqxwJO),
        children: [
            (0, A.jsx)(t0.d, {
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
                        className: ip.KF,
                        children: R.intl.string(R.t.vd0D81),
                    }),
                    (0, A.jsx)(iv, { children: R.intl.string(R.t.a18Sug) }),
                    (0, A.jsx)(X.A, {
                        disabled: a,
                        markers: iN,
                        stickToMarkers: !0,
                        minValue: iN[0],
                        maxValue: iN[iN.length - 1],
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
                        className: ip.KF,
                        children: R.intl.string(R.t.sPO3ij),
                    }),
                    (0, A.jsx)(iv, { children: R.intl.string(R.t.xoldVn) }),
                    (0, A.jsx)(X.A, {
                        disabled: a,
                        markers: iC,
                        stickToMarkers: !0,
                        minValue: iC[0],
                        maxValue: iC[iC.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, A.jsx)(iy, {
                disabled: a,
                locations: [
                    {
                        location: ix.k.CHAT_INPUT,
                        title: R.intl.string(R.t.elTtyz),
                        description: R.intl.string(R.t.HtKfMi),
                    },
                    {
                        location: ix.k.REACTION,
                        title: R.intl.string(R.t.Ik4VIa),
                        description: R.intl.string(R.t.y4rqK0),
                    },
                    {
                        location: ix.k.MEMBER_USER,
                        title: R.intl.string(R.t.ZXBlAn),
                        description: R.intl.string(R.t["m9RD+c"]),
                    },
                    {
                        location: ix.k.CALL_TILE,
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
function iL(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !n;
    return (0, A.jsxs)(n1.n, {
        label: R.intl.string(R.t.Xz0ole),
        children: [
            (0, A.jsx)(t0.d, {
                label: R.intl.string(R.t.o3iV7B),
                description: R.intl.string(R.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, A.jsx)(t0.d, {
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
                        className: ip.KF,
                        children: R.intl.string(R.t.L0oQuh),
                    }),
                    (0, A.jsx)(iv, { children: R.intl.string(R.t["/OOFpL"]) }),
                    (0, A.jsx)(X.A, {
                        disabled: r,
                        markers: iI,
                        stickToMarkers: !0,
                        minValue: iI[0],
                        maxValue: iI[iI.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iR(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, A.jsxs)(n1.n, {
        label: R.intl.string(R.t.wVS5Sd),
        children: [
            (0, A.jsx)(t0.d, {
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
                        className: ip.KF,
                        children: R.intl.string(R.t.UxnnC4),
                    }),
                    (0, A.jsx)(iv, { children: R.intl.string(R.t.CEOEOb) }),
                    (0, A.jsx)(X.A, {
                        disabled: a,
                        markers: i_,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: i_[0],
                        maxValue: i_[i_.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, ie._)(it.sn.MORE),
                                l(t, 1));
                        },
                        onMarkerRender: (e) => (e === i_[i_.length - 1] ? R.intl.string(R.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, A.jsx)(iy, {
                disabled: a,
                locations: [
                    {
                        location: ix.uD.CHAT_INPUT,
                        title: R.intl.string(R.t.vUcvPP),
                        description: R.intl.string(R.t.y00OrF),
                    },
                    {
                        location: ix.uD.VOICE_USER,
                        title: R.intl.string(R.t.TcRO54),
                        description: R.intl.string(R.t.YJCxVY),
                    },
                    {
                        location: ix.uD.MENTION,
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
function iD(e) {
    let { updateSettings: t } = e;
    return (0, A.jsx)(n1.n, {
        label: R.intl.string(R.t.EuXv2q),
        children: (0, A.jsxs)(Y.B, {
            gap: 16,
            children: [
                (0, A.jsx)("div", { children: R.intl.string(R.t["1SLnki"]) }),
                (0, A.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: ip.hw,
                    children: (0, A.jsx)(_.$, {
                        variant: "primary",
                        size: "sm",
                        text: R.intl.string(R.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tk.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iP(e) {
    let { onChangePage: t } = e;
    return (0, A.jsxs)(n2.D, {
        onClick: function () {
            return t(1);
        },
        className: ip.Tq,
        children: [
            (0, A.jsx)("div", {
                className: ip.w1,
                children: (0, A.jsx)(n3.TrophyIcon, { size: "md", color: nJ.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, A.jsxs)("div", {
                className: ip.qL,
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
            (0, A.jsx)(n5._, { size: "custom", color: "currentColor", width: 16, className: ip.nT }),
        ],
    });
}
function iG() {
    return n
        .e("504660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iM(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, h.cf)([n$.A], () => n$.A.getState()),
        [s, l] = E.useState({ x: 0, y: 0 }),
        r = (0, iS.A)();
    function a(e, t) {
        var l, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, n8.Ak)("poggermode_enabled"),
                (0, n9.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, ii.O9)(e),
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
        1 === t && E && (0, n9.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        l({ x: e.clientX, y: e.clientY });
    }
    return (
        E.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, A.jsxs)(Y.B, {
            gap: 24,
            children: [
                (0, A.jsx)(ij, { settings: i, updateSettings: a }),
                (0, A.jsx)(iP, { onChangePage: t }),
                (0, A.jsx)(iL, { settings: i, updateSettings: a }),
                (0, A.jsx)(iR, { settings: i, updateSettings: a }),
                (0, A.jsx)(iO, { settings: i, updateSettings: a }),
                (0, A.jsx)(iD, { updateSettings: a }),
            ],
        })
    );
}
function iU(e) {
    return 0 === e ? n4.f.LEFT : n4.f.RIGHT;
}
let iV = (0, d.E2)(c.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = E.useState(0),
                [n, i] = E.useState(iU(e)),
                [s, l] = E.useState(!1),
                r = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
                a = s && !r;
            return (
                E.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iU(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                E.useEffect(() => {
                    (0, n7._)(ib[e]);
                }, [e]),
                E.useEffect(() => {
                    Math.random() > 0.99 && (0, ie._)(it.sn.VISITOR_100);
                }, []),
                (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(n4.A, {
                            className: ip.l3,
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
                                        return (0, A.jsx)(iM, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, A.jsx)(ih, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, A.jsx)("div", {
                            className: a ? ip.Sr : ip.IP,
                            children: (0, A.jsx)(n6.a, {
                                className: ip.gT,
                                importData: iG,
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
    ik = (0, d.zZ)(c.X.POGGERMODE_CATEGORY, { buildLayout: () => [iV] });
var iw = n(212043);
let iF = (0, d.t_)(c.X.POGGERMODE_PANEL, { useTitle: () => R.intl.string(R.t.AtCukI), buildLayout: () => [ik] }),
    iB = (0, d.i4)(c.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AtCukI),
        icon: () => (0, A.jsx)("img", { alt: "", src: n(724405), className: iw.$ }),
        usePredicate: () => (0, h.bG)([n$.A], () => n$.A.settingsVisible),
        buildLayout: () => [iF],
    });
var iz = n(307301),
    iY = n(410767),
    iX = n(683071),
    iH = n(97260),
    iK = n(825502),
    iW = n(695366),
    iZ = n(812729),
    iq = n.n(iZ),
    iQ = n(587895),
    i$ = n(429913),
    iJ = n(616356),
    i0 = n(952818);
function i1(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function i2() {
    let e = (0, h.bG)([iJ.A], () => iJ.A.getStreamerActiveStreamMetadata()),
        t = (0, h.bG)(
            [i0.Ay],
            () => {
                let e = i0.Ay.getVisibleGame();
                return null != e ? i0.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            iq(),
        ),
        [n] = (0, i$.A)([i1(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i3 = n(769015),
    i5 = n(25578),
    i6 = n(935671),
    i4 = n(435075);
function i8(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, A.jsx)("div", {
              className: i4.zc,
              children: (0, A.jsx)(iW.E, { size: "sm", color: nJ.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, A.jsxs)("div", {
              className: i4.nt,
              children: [
                  (0, A.jsx)(i3.A, { game: n, pid: t.pid, size: i3.M.MEDIUM }),
                  (0, A.jsx)("div", {
                      className: i4.Am,
                      children: (0, A.jsx)(iW.E, { size: "sm", color: nJ.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function i7(e) {
    let t = (0, h.bG)([i5.Ay], () => i5.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = i2();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let s = (0, i6.NP)(),
        l = s && null != n && t === S.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: n, runningGameApplication: i };
}
function i9(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: s, runningGameApplication: l } = i7(n);
    return i
        ? (0, A.jsxs)("div", {
              className: io()(i4.kL, t),
              children: [
                  (0, A.jsx)(i8, { game: s, application: l }),
                  (0, A.jsxs)("div", {
                      className: i4.FS,
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
                          (0, i6.sL)(n + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var se = n(404778),
    st = n(691885),
    sn = n(408278),
    si = n(241326),
    ss = n(866665),
    sl = n(140735),
    sr = n(489718),
    sa = n(635242),
    so = n(350535),
    su = n(189213),
    sd = n(192308),
    sc = n(95477),
    sg = n(320989),
    sm = n(978263);
let sA = [];
var sE = n(235986),
    sh = n(484734),
    sS = n(734057),
    sx = n(808728),
    sp = n(71393),
    sT = n(967198),
    sf = n(926140),
    sI = n(847893);
function s_() {}
let sN = [sf.rD.VOICE_CHANNEL];
function sC(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function sb() {
    return (0, A.jsx)("div", {
        className: sI.i1,
        children: (0, A.jsx)(H.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sI.GN,
            children: R.intl.string(R.t.zHjCd1),
        }),
    });
}
function sy(e) {
    let { keybind: t, className: n } = e,
        i = E.useRef(t);
    E.useEffect(() => {
        i.current = t;
    });
    let [s, l] = E.useState(t.params?.channelId ?? void 0),
        r = E.useCallback(() => {
            (0, sd.openModalLazy)(
                async () => (e) =>
                    (0, A.jsx)(sv, {
                        ...e,
                        onSelect: (e) => {
                            (l(e), iH.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, A.jsx)("div", {
        className: io()(sI.a8, n),
        children: (0, A.jsx)(tJ.D, {
            label: R.intl.string(R.t.q4JpM8),
            children: (0, A.jsxs)(sE.A, {
                align: sE.A.Align.STRETCH,
                children: [
                    (0, A.jsx)("div", { className: sI.$X, children: (0, A.jsx)(sj, { channelId: s }) }),
                    (0, A.jsx)(sE.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function sv(e) {
    let t,
        n,
        { transitionState: i, onClose: s, onSelect: l } = e,
        r = E.useId(),
        a = E.useRef(null),
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
                [l, r] = E.useState(""),
                [a, o] = E.useState(sA),
                u = E.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(sA) : o(e);
                }, []);
            E.useEffect(
                () =>
                    sg.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = E.useState(() => new sm.A(u, n, void 0, i));
            return (
                E.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: E.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: sN, autocompleterBeforeCreateSearchContext: sC }),
        c =
            ((t = "" !== o),
            (n = (0, h.yK)(
                [sx.Ay, sS.A, sT.A],
                () => {
                    let e = sT.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of sx.Ay.getVocalChannelIds(e)) {
                        let e = sS.A.getChannel(t);
                        null != e && n.push(e);
                    }
                    return n;
                },
                [t],
            )),
            t ? null : n),
        { focusedIndex: g, setFocusedIndex: m } = (function (e) {
            let [t, n] = E.useState(0),
                i = E.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                E.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    E.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let S = null != c ? c.length : d.length,
        x = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === sf.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === sf.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? sS.A.getChannel(n.parent_id) : void 0,
                              r = sp.A.getGuild(n.guild_id);
                          return (0, A.jsx)(
                              sh.c3,
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
                                      null != r ? (0, A.jsx)("div", { className: sI.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, A.jsx)(sb, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, A.jsx)(su.a, {
        transitionState: i,
        onClose: s,
        title: R.intl.string(R.t.Dm8O4e),
        subtitle: R.intl.string(R.t.q4JpM8),
        actions: void 0,
        input: (0, A.jsx)(sc.k, {
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
                                if (e?.type === sf.rD.VOICE_CHANNEL) return e.record;
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
function sj(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: s,
        } = (0, h.cf)([sS.A, sp.A], () => {
            let e = null != t ? sS.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? sS.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? sp.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, A.jsx)(H.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sI.GN,
              children: R.intl.string(R.t["/fYIK7"]),
          })
        : (0, A.jsx)(sh.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: s_,
              onFocus: s_,
              onMouseEnter: s_,
              focused: !1,
              children: null != s ? (0, A.jsx)("div", { className: sI.J5, children: s.name }) : null,
          });
}
var sO = n(650583),
    sL = n(94451);
function sR(e) {
    let { keybind: t } = e,
        n = so.dI(t.shortcut);
    return e$.A.hasBind(n)
        ? (0, A.jsx)("div", {
              className: sL.$e,
              children: (0, A.jsx)(iX.w, { type: "warning", children: R.intl.string(R.t["7lQlw3"]) }),
          })
        : sO.Yy.has(n)
          ? (0, A.jsx)("div", {
                className: sL.$e,
                children: (0, A.jsx)(iX.w, {
                    type: "warning",
                    children: R.intl.format(R.t.MOIaNd, {
                        keyboardNavArticle: eT.A.getArticleURL(S.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function sD(e) {
    let { keybind: t } = e;
    return t.action === S.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, A.jsx)(sy, { keybind: t, className: sL._M }) : null;
}
let sP = E.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        s = E.useCallback((e) => iH.A.setKeybind({ ...t, action: e }), [t]),
        l = E.useCallback((e) => iH.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = E.useCallback(() => iH.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = E.useCallback(() => iH.A.deleteKeybind(t.id), [t.id]),
        o = E.useId(),
        u = E.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, A.jsxs)("div", {
        className: sL.f_,
        children: [
            (0, A.jsx)(sR, { keybind: t }),
            (0, A.jsx)("div", {
                className: sL.XI,
                children: (0, A.jsx)(st.l, {
                    selectionMode: "single",
                    label: R.intl.string(R.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, A.jsx)("div", {
                className: sL.LE,
                children: (0, A.jsx)(tJ.D, {
                    label: R.intl.string(R.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, A.jsx)(sa.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, A.jsxs)("div", {
                className: sL.ne,
                children: [
                    !t.managed &&
                        (0, A.jsx)(sn.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: si.TrashIcon,
                            "aria-label": R.intl.string(R.t.qEHmmB),
                        }),
                    (0, A.jsx)(ss.m, {
                        text: R.intl.string(t.enabled ? R.t.pNYGbx : R.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(sl.A, {
                                    id: o,
                                    children: R.intl.format(t.enabled ? R.t["myr/Y0"] : R.t.lYhtPO, { actionName: u }),
                                }),
                                (0, A.jsx)(sr.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, A.jsx)(H.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sL.h_,
                children: n[t.action],
            }),
            (0, A.jsx)(sD, { keybind: t }),
        ],
    });
});
var sG = n(696760),
    sM = n(734066),
    sU = n(880144),
    sV = n(614455),
    sk = n(532624),
    sw = n(731854),
    sF = n(603933);
let sB = function () {
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
            } = ((e = (0, h.bG)([sk.Ay], () => sk.Ay.getState())),
            (t = (0, h.bG)([i5.Ay], () => (0, sU.A)(i5.Ay))),
            (n = (0, h.bG)([i5.Ay], () => i5.Ay.supports(sw.O5.VIDEO))),
            (i = (0, h.bG)([sV.A], () => sV.A.isSupported)),
            (s = (0, sM.sw)()),
            (l = (0, sM.BW)()),
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
                    allowSoundboard: (r = (0, eJ.isWindows)()),
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
                            ((0, eJ.isWindows)() || i5.Ay.getUseSystemScreensharePicker()) &&
                            a.push({
                                id: "toggle-go-live-streaming",
                                value: S.hCu.TOGGLE_GO_LIVE_STREAMING,
                                label: R.intl.string(R.t.ybdjJD),
                            }),
                        (0, eJ.isDesktop)() &&
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
                        n && (0, eJ.isWindows)() && (r[S.hCu.TOGGLE_GO_LIVE_STREAMING] = R.intl.string(R.t.s4C238)),
                        (0, eJ.isDesktop)() &&
                            ((r[S.hCu.NAVIGATE_BACK] = R.intl.string(R.t.nKDlEt)),
                            (r[S.hCu.NAVIGATE_FORWARD] = R.intl.string(R.t.DK0FFk)),
                            (r[S.hCu.SOUNDBOARD] = (0, eJ.isWindows)()
                                ? R.intl.string(R.t["5wJefL"])
                                : R.intl.string(R.t.gzjsSP)),
                            (r[S.hCu.SOUNDBOARD_HOLD] = (0, eJ.isWindows)()
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
                  className: sF.A,
                  children: a.map((e, t) =>
                      (0, A.jsxs)(
                          E.Fragment,
                          {
                              children: [
                                  (0, A.jsx)(sP, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                  t < a.length - 1 ? (0, A.jsx)(se.c, { className: sF.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    sz = (0, d.E2)(c.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["069nVT"])],
        Component: function () {
            return nE.Av
                ? (0, A.jsx)(sB, {})
                : (0, A.jsx)(iX.w, {
                      type: "info",
                      children: R.intl.format(R.t.mPi3F3, { downloadLink: S.X7G.DOWNLOAD }),
                  });
        },
    });
var sY = n(475358),
    sX = n(28647),
    sH = n(793650);
function sK(e) {
    let { children: t } = e;
    return t([sG.Q_.MESSAGE, sG.Q_.NAVIGATION, sG.Q_.DND, sG.Q_.CHAT, sG.Q_.VOICE_AND_VIDEO, sG.Q_.MISCELLANEOUS]);
}
function sW(e) {
    let { showHeader: t = !0 } = e,
        n = B()((0, sG.Bx)())
            .filter((e) => e.description !== R.intl.string(R.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, A.jsxs)(Y.B, {
        gap: 48,
        children: [
            (0, A.jsx)(n1.n, {
                label: t ? R.intl.string(R.t.Lz5KHI) : void 0,
                children: (0, A.jsx)("div", {
                    className: sH.jh,
                    children: (0, A.jsxs)("div", {
                        className: sH.yZ,
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/normal", children: R.intl.string(R.t.sMWLBj) }),
                            (0, A.jsx)("div", {
                                className: sH.DM,
                                children: (0, A.jsx)(sY.e, { shortcut: sX.z.binds["0"], className: sH.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, A.jsx)(sK, {
                children: (e) =>
                    (0, A.jsx)(A.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, sG.Gm)(e),
                                s = (0, sG.zF)(e),
                                l = n[e];
                            return (0, A.jsx)(
                                n1.n,
                                {
                                    label: i,
                                    description: s,
                                    children: (0, A.jsx)("div", {
                                        className: sH.jh,
                                        children: l.map((e, t) =>
                                            (0, A.jsxs)(
                                                E.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, A.jsx)(se.c, {}),
                                                        (0, A.jsxs)("div", {
                                                            className: sH.yZ,
                                                            children: [
                                                                (0, A.jsx)(H.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, A.jsx)("div", {
                                                                    className: sH.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, A.jsx)(
                                                                            sY.e,
                                                                            { shortcut: e, className: sH.LE },
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
let sZ = (0, d.E2)(c.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.Lz5KHI)],
    Component: () => (0, A.jsx)(sW, { showHeader: !1 }),
});
var sq = n(744893),
    sQ = n(188321);
let s$ = (0, d.zD)(c.X.GAME_MODE_ENABLED_SETTING, {
    useTitle: () => R.intl.string(eb.default.rea2Ar),
    useSubtitle: () => R.intl.string(eb.default.DwBO0x),
    useValue: () => (0, h.bG)([sQ.A], () => sQ.A.enabled),
    setValue: (e) => sq.kv(e),
});
var sJ = n(19575),
    s0 = n(546385);
let s1 = (0, d.E2)(c.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nE.Av && !(0, nE.cX)(),
    useSearchTerms: () => [R.intl.string(R.t["/HIxyY"]), R.intl.string(R.t.B0hqpb)],
    Component: function () {
        let [e] = E.useState(() => sJ.Ay.getEnableHardwareAcceleration()),
            t = R.intl.string(R.t["/HIxyY"]),
            n = R.intl.string(R.t.B0hqpb);
        return (0, A.jsxs)(Y.B, {
            children: [
                (0, A.jsx)(t0.d, { label: t, description: n, checked: e, onChange: s2 }),
                !e && (0, A.jsx)(s0.A, { look: s0.k.WARNING, children: R.intl.string(R.t.j7S6IX) }),
            ],
        });
    },
});
function s2(e) {
    let t = e ? R.intl.format(R.t.LYXRxL, {}) : R.intl.format(R.t.uDP3Kz, {});
    (0, n0.A)({
        title: R.intl.string(R.t.aqpAvn),
        subtitle: t,
        confirmText: R.intl.string(R.t.vT7ckk),
        onConfirm: () => {
            sJ.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let s3 = (0, ex.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function s5() {
    let e = await sJ.Ay.getOpenOnStart(),
        t = await sJ.Ay.getSetting("START_MINIMIZED", !1),
        n = await sJ.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    s3.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let s6 = (0, d.zD)(c.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => R.intl.string(R.t["3BeZti"]),
        usePredicate: () => nE.Av && !(0, nE.cX)(),
        useValue: () => s3.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (s3.setState({ openOnStartup: e }), sJ.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            sJ.Ay.getOpenOnStart().then((e) => s3.setState({ openOnStartup: e }));
        },
    }),
    s4 = (0, d.zD)(c.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => R.intl.string(R.t.dJ5MUh),
        useSubtitle: () => R.intl.string(R.t.nQavHr),
        usePredicate: () => nE.Av && !(0, nE.cX)(),
        useValue: () => s3.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (s3.setState({ minimizeToTray: e }), sJ.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            sJ.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => s3.setState({ minimizeToTray: e }));
        },
    }),
    s8 = (0, d.zD)(c.X.OS_START_MINIMIZED, {
        useTitle: () => R.intl.string(R.t.GfBL83),
        useSubtitle: () => R.intl.string(R.t.XGyhhc),
        usePredicate: () => (0, nE.uF)(),
        useValue: () => s3.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (s3.setState({ startMinimized: e }), sJ.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !s3.useState((e) => e.openOnStartup),
        initialize: () => {
            sJ.Ay.getSetting("START_MINIMIZED", !1).then((e) => s3.setState({ startMinimized: e }));
        },
    });
var s7 = n(61628);
let s9 = new Set(["failure", "unknown"]),
    le = (0, d.E2)(c.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [R.intl.string(R.t.roHq80)],
        Component: function () {
            let [e, t] = E.useState(!1),
                [n, i] = E.useState(() => (0, i6.TC)()),
                s = (0, h.bG)([i0.Ay], () => i0.Ay.getSystemServiceStatus("input-service")),
                l = E.useCallback(async () => {
                    (t(!0),
                        n ? await (0, i6.z8)("windows-settings") : await (0, i6.sL)("windows-settings"),
                        t(!1),
                        i((0, i6.TC)()));
                }, [n]);
            return (0, A.jsxs)("div", {
                className: s7.q,
                children: [
                    (0, A.jsxs)("div", {
                        className: s7.L,
                        children: [
                            (0, A.jsxs)(Y.B, {
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
                                                            : s9.has(s.state)
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
                                                                (0, il.xb)(e.state);
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
        usePredicate: i6.XQ,
    });
var lt = n(687813),
    ln = n(562708),
    li = n(691540),
    ls = n(97483);
async function ll() {
    try {
        await lr();
    } catch {
        (0, li.P0)({ id: "performance-trace-failed", type: ls.Ck.FAILURE, message: R.intl.string(R.t["8ihs9i"]) });
    }
}
async function lr() {
    var e;
    let t = nx.A.tracing;
    if (null == t) return;
    (0, li.P0)({ id: "performance-trace-capturing", type: ls.Ck.MESSAGE, message: R.intl.string(R.t.qGRW8d) });
    let [n, i, s] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nx.A.processUtils.getSystemInfo(),
            nx.A.processUtils.getSystemMetrics(),
        ]),
        l = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, ln.getSuperProperties)(),
            native_build_number: nx.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: s,
            cumulativeCpuUsage: nx.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nx.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, lt._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, lt._u)(JSON.stringify(l, null, 2)),
        }),
        new Promise((t, n) => {
            (0, lt.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    (nx.A.fileManager.showItemInFolder(u),
        (0, li.P0)({ id: "performance-trace-saved", type: ls.Ck.SUCCESS, message: R.intl.string(R.t.gpCRFS) }));
}
let la = (0, d.Tf)(c.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => R.intl.string(R.t.o6Qr6n),
    useSubtitle: () => R.intl.string(R.t.OuGtH8),
    useLabel: () => R.intl.string(R.t.bm1WjO),
    usePredicate: () => nE.Av && nx.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, n0.A)({
            title: R.intl.string(R.t.o6Qr6n),
            subtitle: R.intl.string(R.t.JEHHJ1),
            confirmText: R.intl.string(R.t.bm1WjO),
            onConfirm: () => {
                ((0, tk.default)(), ll());
            },
        });
    },
});
function lo() {
    e8.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var lu = n(287809);
let ld = (0, d.Tf)(c.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        lo();
    },
});
var lc = n(114129),
    lg = n(442325),
    lm = n(858760);
let lA = (0, d.zD)(c.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        usePredicate: () => lm.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nE.xl)(),
        useValue: () => (0, h.bG)([lg.A], () => lg.A.isUserOptedIn()),
        setValue: lc.lj,
    }),
    lE = (0, d.zZ)(c.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["8/udY0"]),
        buildLayout: () => [ld, la, lA],
    }),
    lh = (0, d.zZ)(c.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t.cg6ltt),
        buildLayout: () => [s6, s8, s4, s1],
        usePredicate: () => nE.Av && ((0, nE.uF)() || (0, nE.j9)()),
        initialize: () => {
            s5();
        },
    }),
    lS = (0, d.zZ)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["069nVT"]),
        useSubtitle: () => R.intl.string(R.t.T4LZVL),
        buildLayout: () => [sz],
        initialize: () => (iH.A.enableAll(!1), () => iH.A.enableAll(!0)),
        useInlineNotice: function () {
            return nE.Av
                ? {
                      type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, A.jsxs)(Y.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, A.jsx)(iX.w, { type: "info", children: R.intl.string(R.t["5pkmHa"]) }),
                                  (0, A.jsx)(i9, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nE.Av
                ? {
                      type: m.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: m.UV.BUTTON,
                              text: R.intl.string(R.t.zk6Xbs),
                              variant: "secondary",
                              icon: iz.j,
                              onClick: () => iH.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    lx = (0, d.zZ)(c.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Lz5KHI),
        buildLayout: () => [sZ],
    }),
    lp = (0, d.zZ)(c.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+XZgmA"]),
        usePredicate: () => nE.Av && ((0, nE.uF)() || (0, nE.j9)()),
        buildLayout: () => [le],
    }),
    lT = (0, d.zZ)(c.X.SYSTEM_GAME_MODE_CATEGORY, {
        useTitle: () => R.intl.string(eb.default.QG0axY),
        usePredicate: () => (0, iK.W)("GameModeCategory"),
        buildLayout: () => [s$],
    }),
    lf = (0, d.t_)(c.X.SYSTEM_PANEL, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        buildLayout: () => [lh, lS, lx, lp, lT, lE],
    }),
    lI = (0, d.i4)(c.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        icon: iY.F,
        buildLayout: () => [lf],
    });
var l_ = n(831544),
    lN = n(922795),
    lC = n(212245),
    lb = n(329551),
    ly = n(285918),
    lv = n(712711),
    lj = n(952572),
    lO = n(382003);
let lL = (0, d.E2)(c.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.lZTUPs)],
        usePredicate: lj.A,
        Component: function () {
            let e = (0, lC.p)(),
                t = E.useRef(!1),
                n = (0, h.bG)([i5.Ay], () => i5.Ay.getVideoDeviceId()),
                [i, s] = E.useState((0, lb.i)(lu.default.getCurrentUser())),
                l = E.useRef(i);
            return (
                E.useEffect(
                    () => () => {
                        t.current && (0, ly._C)(l.current);
                    },
                    [],
                ),
                (0, A.jsx)(lO.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (l.current = n), s(n), (0, lv.gB)(n, { location: e.location }).catch(S.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    lR = (0, d.zD)(c.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => R.intl.string(R.t["3Ppr1h"]),
        useSubtitle: () => R.intl.string(R.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            (L.bm.updateSetting(e), ti.default.track(S.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var lD = n(625841),
    lP = n(74848),
    lG = n(204050);
let lM = (0, ex.D)(() => ({ previewEnabled: !1 })),
    lU = (0, d.E2)(c.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.FsQ3OR)],
        Component: function () {
            let e = (0, h.bG)([i5.Ay], () => i5.Ay.isVideoAvailable()),
                { id: t } = (0, lP.x5)(sw.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eM.Ay)();
            return (0, A.jsx)(lD.U, {
                label: R.intl.string(R.t.FsQ3OR),
                deviceType: sw.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, lG.p)()
                    ? R.intl.format(R.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (lM.setState({ previewEnabled: !1 }),
                                  window.open((0, lG.i)(t)),
                                  ti.default.track(S.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var lV = n(745317),
    lk = n(9219);
let lw = (0, d.E2)(c.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [R.intl.string(R.t.JIf4v7)],
        Component: function () {
            let e = i5.Ay.getCameraComponent(),
                t = (0, h.bG)([i5.Ay], () => i5.Ay.getVideoDeviceId()),
                n = lM.useField("previewEnabled"),
                i = (0, h.bG)([i5.Ay], () => i5.Ay.isVideoAvailable());
            return ((0, eS.l0)(() => {
                lM.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, A.jsx)("div", {
                      className: lk.T9,
                      children: (0, A.jsxs)("div", {
                          className: lk.Xi,
                          children: [
                              (0, A.jsxs)("div", {
                                  className: lk.UI,
                                  children: [
                                      (0, A.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, A.jsx)(lV.kE, {}),
                                  ],
                              }),
                              (0, A.jsx)(lV.eK, {}),
                          ],
                      }),
                  })
                : (0, A.jsx)("div", {
                      className: lk.T9,
                      children: (0, A.jsx)(ss.m, {
                          text: i ? null : R.intl.string(R.t["8jSzSe"]),
                          children: (0, A.jsx)(_.$, {
                              variant: "primary",
                              text: R.intl.string(R.t.JIf4v7),
                              onClick: () => lM.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    lF = (0, d.zZ)(c.X.CAMERA_CATEGORY, {
        useTitle: () => R.intl.string(R.t.uje3P9),
        usePredicate: () => (0, h.bG)([i5.Ay], () => i5.Ay.supports(sw.O5.VIDEO)),
        buildLayout: () => [lw, lR, lU, lL],
    });
var lB = n(827343);
let lz = (0, d.zD)(c.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => R.intl.string(R.t.qFphsa),
        useSubtitle: () => R.intl.string(R.t.cQfwyY),
        usePredicate: function () {
            return (0, nE.j9)();
        },
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (lB.A.setOpenH264Enabled(e),
                (0, n0.A)({
                    title: R.intl.string(R.t["9jf31O"]),
                    subtitle: R.intl.string(R.t["J2wg+X"]),
                    confirmText: R.intl.string(R.t.BddRzS),
                    onConfirm: () => nx.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    lY = (0, d.zD)(c.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => R.intl.string(R.t["r6K+TL"]),
        useSubtitle: () => R.intl.string(R.t["xl9+I6"]),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getAecDump());
        },
        setValue: lB.A.setAecDump,
        usePredicate: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.isAecDumpSupported());
        },
    });
var lX = n(139033),
    lH = n(862482),
    lK = n(640238),
    lW = n(825484),
    lZ = n(144009),
    lq = n(487329),
    lQ = n(353835);
let l$ = (0, ex.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function lJ() {
    let e = await nx.A.fileManager.getLogPath();
    nx.A.fileManager.showItemInFolder(e);
}
function l0(e) {
    (0, n0.A)({
        title: R.intl.string(R.t["7UXEF2"]),
        subtitle: R.intl.string(R.t.IYPrRl),
        confirmText: R.intl.string(R.t.BddRzS),
        onConfirm: () => lB.A.setDebugLogging(e),
    });
}
async function l1(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await i5.Ay.getMediaEngine().writeAudioDebugState(),
            await lQ.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, lZ.a)(S.Umv.RTC),
            (e = R.intl.string(R.t["fKBB8+"])),
            (t = R.intl.string(R.t.BvyxE7)),
            (0, lX.A)({ title: e, subtitle: t }));
    } catch (l) {
        var i;
        let e, t, n, s;
        ((i = l.displayMessage),
            (e = R.intl.string(R.t.QZg0J7)),
            (t = i ?? R.intl.string(R.t.VzHcSm)),
            (n = (0, lq.B1)(lq.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = R.intl.formatToPlainString(R.t.ejOT95, { errorCode: n })),
            (0, sd.openModal)((n) =>
                (0, A.jsx)(lK.a, {
                    header: e,
                    confirmButtonColor: lH.$n.Colors.BRAND,
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
async function l2() {
    await l1({
        onUploadStart: () => l$.setState({ isUploading: !0 }),
        onUploadFinish: () => l$.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let l3 = (0, d.E2)(c.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [R.intl.string(R.t["726JHL"]), R.intl.string(R.t.EbwFfR), R.intl.string(R.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, h.bG)([i5.Ay], () => i5.Ay.supports(sw.O5.DEBUG_LOGGING));
        return nE.Av && e && null != nx.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, h.bG)([i5.Ay], () => i5.Ay.getDebugLogging()),
            t = l$.useField("isUploading"),
            n = l$.useField("isDisabled"),
            i = E.useId();
        return (0, A.jsxs)("fieldset", {
            children: [
                (0, A.jsx)(sl.A, { tag: "legend", id: i, children: R.intl.string(R.t["FjN+et"]) }),
                (0, A.jsxs)(Y.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, A.jsx)(t0.d, {
                            label: R.intl.string(R.t["726JHL"]),
                            description: R.intl.string(R.t["/7ak9Q"]),
                            checked: e,
                            onChange: l0,
                        }),
                        (0, A.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, A.jsxs)(lW.e, {
                                children: [
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.EbwFfR),
                                        onClick: l2,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": R.intl.string(R.t.aY1OH2),
                                    }),
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.nuPtYi),
                                        onClick: lJ,
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
var l5 = n(233545),
    l6 = n(412780);
function l4() {
    return (0, h.bG)([lu.default, i5.Ay], () => {
        let e = lu.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === sJ.Ay.releaseChannel || "development" === sJ.Ay.releaseChannel,
            i = i5.Ay.supports(sw.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let l8 = (0, d.zD)(c.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.U4FgFK),
        useSubtitle: () => R.intl.string(R.t.Lm72RU),
        useValue: function () {
            return (0, h.bG)([l6.Ay], () => l6.Ay.shouldRecordNextConnection());
        },
        setValue: l5.Et,
        usePredicate: l4,
    }),
    l7 = (0, d.Tf)(c.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.nJnOHO),
        useLabel: () => R.intl.string(R.t["3xjX0U"]),
        onClick: l5.YW,
        usePredicate: l4,
    });
var l9 = n(926919),
    re = n(111162),
    rt = n(855302);
let rn = (0, d.zD)(c.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => R.intl.string(R.t["0CEP6e"]),
        useSubtitle: () => R.intl.string(R.t["kBXuW+"]),
        useValue: function () {
            return (0, h.bG)([re.default], () => re.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = re.default.isStreamInfoOverlayEnabled;
            ((0, rt.A)("stream_info_overlay_enabled", e, t), (0, l9.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    ri = (0, d.bd)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t["/B4I8H"]) : R.intl.string(R.t.BTlsWH)),
        useCollapsedSubtitle: () => R.intl.string(R.t.la1Ys4),
        buildLayout: () => [rn, lY, l8, l7, l3],
    });
function rs(e, t, n) {
    (0, n0.A)({ title: e, subtitle: t, confirmText: R.intl.string(R.t.BddRzS), onConfirm: n });
}
let rl = (0, d.Tf)(c.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => R.intl.string(R.t.SXfv1v),
        useSubtitle: () => R.intl.string(R.t["buA5/q"]),
        useLabel: () => R.intl.string(R.t.yBZMsQ),
        onClick: function () {
            rs(R.intl.string(R.t["4iKQ/3"]), R.intl.string(R.t.sQ42iT), lB.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rr = (0, d.zZ)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.UDAU9K),
        buildLayout: () => [lz, ri, rl],
    });
var ra = n(736056),
    ro = n(360729),
    ru = n(446243),
    rd = n(558076),
    rc = n(270103);
let rg = (0, d.zD)(c.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => R.intl.string(rc.default.qYzpsI),
        useSubtitle: () => R.intl.string(rc.default["+vMoL1"]),
        useValue: () => (0, h.bG)([rd.A], () => rd.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, ru.Ft)(e),
    }),
    rm = (0, d.zZ)(c.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => R.intl.string(rc.default.wRLmM0),
        usePredicate: function () {
            let e = (0, h.yK)([sp.A], () => sp.A.getGuildIds()),
                { loaded: t, override: n } = (0, h.cf)([ra.A], () => ({
                    loaded: ra.A.getLoadedGuildExperiment(ro.vJ),
                    override: ra.A.getExperimentOverrideDescriptor(ro.vJ),
                }));
            return (0, E.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, ro.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rg],
    });
var rA = n(347481),
    rE = n(852712),
    rh = n(179172),
    rS = n(868162);
let rx = (0, d.zD)(c.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => R.intl.string(R.t.gF8HJo),
        useSubtitle: () => R.intl.string(R.t.cfrfyZ),
        useValue: function () {
            return (0, h.bG)([rS.A], () => !0 !== rS.A.getState().neverShowModal);
        },
        setValue: function (e) {
            rh.Bv(!e);
        },
        usePredicate: function () {
            return eJ.isPlatformEmbedded;
        },
    }),
    rp = (0, d.zD)(c.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => R.intl.string(R.t.cUMdH0),
        useSubtitle: () => R.intl.string(R.t["6EjbvA"]),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            lB.A.setAutomaticGainControl(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, h.bG)([i5.Ay, rA.A], () => {
                let e = i5.Ay.getInputDeviceId();
                return rA.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.isAutomaticGainControlSupported() && i5.Ay.isInputProfileCustom());
        },
    }),
    rT = (0, d.sN)(c.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => R.intl.string(R.t.AlybXj),
        setValue: (e) =>
            lB.A.setAttenuation(e, i5.Ay.getAttenuateWhileSpeakingSelf(), i5.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i5.Ay.getAttenuation(),
    }),
    rf = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => R.intl.string(R.t["9dHxRY"]),
        useValue: () => (0, h.bG)([i5.Ay], () => i5.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lB.A.setAttenuation(i5.Ay.getAttenuation(), e, i5.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rI = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => R.intl.string(R.t.SMt0Gr),
        useValue: () => (0, h.bG)([i5.Ay], () => i5.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lB.A.setAttenuation(i5.Ay.getAttenuation(), i5.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    r_ = (0, d.FW)(c.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.oSdBvW),
        useSubtitle: () => R.intl.string(R.t["0A/8Rt"]),
        usePredicate: () => (0, h.bG)([i5.Ay], () => i5.Ay.supports(sw.O5.ATTENUATION)),
        buildLayout: () => [rT, rf, rI],
    }),
    rN = (0, d.zD)(c.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => R.intl.string(R.t.DFPXIG),
        useSubtitle: () => R.intl.string(R.t["UyRX+C"]),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lB.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.showBypassSystemInputProcessing() && i5.Ay.isInputProfileCustom());
        },
    }),
    rC = (0, d.zD)(c.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => R.intl.string(R.t.jrWHD3),
        useSubtitle: () => R.intl.string(R.t.YCCMkJ),
        useValue: function () {
            return (0, h.bG)([eg.Ay], () => !eg.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, rt.A)("switch_channel_warning_enabled", e, !eg.Ay.disableVoiceChannelChangeAlert),
                nl.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rb = (0, d.zD)(c.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => R.intl.string(R.t.BbESsg),
        useSubtitle: () => R.intl.string(R.t.LoOB1F),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => {
                let { vadUseKrisp: e } = i5.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = i5.Ay.getMode();
            lB.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, h.bG)(
                [i5.Ay],
                () => i5.Ay.getMode() !== S.TBI.VOICE_ACTIVITY || !i5.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.isAdvancedVoiceActivitySupported() && i5.Ay.isInputProfileCustom());
        },
    }),
    ry = (0, d.Hn)(c.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => R.intl.string(R.t.wVBHr0),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rs(R.intl.string(R.t.uY7AcQ), R.intl.string(R.t.gBqik6), () => lB.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, h.cf)([i5.Ay], () => ({
                legacyAudioSubsystemSupported: i5.Ay.supports(sw.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i5.Ay.supports(sw.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i5.Ay.supports(sw.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return E.useMemo(() => {
                let i;
                return (
                    (i = [{ id: sw.rB.STANDARD, value: sw.rB.STANDARD, label: R.intl.string(R.t.dqb2JZ) }]),
                    e && i.push({ id: sw.rB.LEGACY, value: sw.rB.LEGACY, label: R.intl.string(R.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: sw.rB.EXPERIMENTAL, value: sw.rB.EXPERIMENTAL, label: R.intl.string(R.t.liQmtr) }),
                    n && i.push({ id: sw.rB.AUTOMATIC, value: sw.rB.AUTOMATIC, label: R.intl.string(R.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rv = (0, d.zD)(c.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => R.intl.string(R.t.uancuJ),
        useSubtitle: () => R.intl.string(R.t.I1Eoqq),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getQoS());
        },
        setValue: function (e) {
            lB.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.supports(sw.O5.QOS));
        },
    }),
    rj = (0, d.zD)(c.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => R.intl.string(R.t["4rsOPQ"]),
        useSubtitle: () => R.intl.string(R.t.jtiiCw),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lB.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eJ.isPlatformEmbedded;
        },
    }),
    rO = (0, d.bd)(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.KHsSWK) : R.intl.string(R.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            th(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, h.bG)([i5.Ay], () => i5.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rp, rb, rN, rx, rj, rC, r_, ry, rv],
    }),
    rL = (0, d.zD)(c.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => R.intl.string(R.t.iWTwu6),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lB.A.setEchoCancellation(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, h.bG)([i5.Ay, rA.A], () => {
                let e = i5.Ay.getInputDeviceId();
                return rA.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.isInputProfileCustom());
        },
    });
var rR = n(459838),
    rD = n(451988),
    rP = n(475883),
    rG = n(9761);
let rM = (0, tB.Ld)();
function rU(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, A.jsx)("div", {
        role: "meter",
        className: io()(rP.$I, n),
        id: i,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? R.intl.string(R.t.haLKZ0) : R.intl.string(R.t.X2hJL7),
        children: (0, A.jsx)("div", { className: io()(rP.Jx, rP.NU, { [rP.zY]: t && !r, [rP.r9]: r }) }),
    });
}
function rV(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, h.cf)([i5.Ay], () => ({
            threshold: i5.Ay.getModeOptions().threshold,
            autoThreshold: i5.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, h.bG)([i5.Ay], () => i5.Ay.getMode());
    return (0, A.jsx)("section", {
        className: io()(rP.Mo, rP.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": s,
        children: (0, A.jsx)(X.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void lB.A.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: nJ.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: nJ.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rM,
            disabled: l,
            children: (0, A.jsxs)("div", {
                className: io()(rP.NU, rP.TL, rP.Jx, rG.bar),
                children: [
                    (0, A.jsx)("div", { className: io()(rP.GS, rP.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, A.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rk = (0, d.E2)(c.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [R.intl.string(R.t["sqUm+k"]), R.intl.string(R.t.I1Zuq0), R.intl.string(R.t.nuFtHH)],
    usePredicate: () => (0, h.bG)([i5.Ay], () => i5.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, h.cf)([i5.Ay], () => ({
                autoThreshold: i5.Ay.getModeOptions().autoThreshold,
                disabled: i5.Ay.getMode() !== sw.TB.VOICE_ACTIVITY,
            })),
            n = E.useCallback((e) => {
                let t = i5.Ay.getMode(),
                    { threshold: n } = i5.Ay.getModeOptions();
                lB.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, h.bG)([i5.Ay], () => i5.Ay.supports(sw.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = E.useState(-100),
                    [n, i] = E.useState(!1);
                function s(e, n) {
                    (t(e), i((n & sw.ME.VOICE) === sw.ME.VOICE));
                }
                return (
                    E.useEffect(() => {
                        let e = new rD.Ep();
                        return (
                            e.start(1e3, () => {
                                (i5.Ay.getMediaEngine().on(rR.bg.VoiceActivity, s), e.stop());
                            }),
                            () => {
                                (i5.Ay.getMediaEngine().removeListener(rR.bg.VoiceActivity, s), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, h.bG)([i5.Ay], () => i5.Ay.isEnabled()),
            a = E.useMemo(
                () =>
                    !r &&
                    (0, A.jsx)("div", {
                        className: rP.B4,
                        children: (0, A.jsx)(iX.w, {
                            type: "warning",
                            children: R.intl.format(R.t["O13I+O"], { onEnableClick: () => lB.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = E.useMemo(() => (e ? R.intl.string(R.t.JsbzjA) : R.intl.string(R.t.MLmyMY)), [e]),
            u = E.useId(),
            d = E.useId();
        return i
            ? (0, A.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, A.jsx)(sl.A, { tag: "legend", id: u, children: R.intl.string(R.t.GByLar) }),
                      (0, A.jsx)(sl.A, { id: d, children: o }),
                      (0, A.jsxs)(Y.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, A.jsx)(t0.d, {
                                  disabled: t,
                                  label: R.intl.string(R.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, A.jsx)(rU, {
                                        isSpeaking: l,
                                        className: rP.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rV, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, A.jsxs)(Y.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, A.jsx)(tJ.D, {
                          label: R.intl.string(R.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, A.jsx)(rU, {
                                        isSpeaking: l,
                                        className: rP.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rV, {
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
var rw = n(366010);
let rF = n(993830),
    rB = n(413142),
    rz = { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO };
function rY() {
    let e = (0, h.bG)([nk.A], () => (0, rw.q)(nk.A.theme));
    return (0, A.jsx)("img", { src: e ? rF : rB, width: 48, height: 32, alt: "" });
}
let rX = (0, d.E2)(c.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.t8Qhib), R.intl.string(R.t.hmfkCi)],
    usePredicate: function () {
        return (0, h.bG)([i5.Ay], () => i5.Ay.isInputProfileCustom() && i5.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = E.useCallback((e) => {
                (lB.A.setNoiseCancellation("KRISP" === e, rz), lB.A.setNoiseSuppression("STANDARD" === e, rz));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: s,
            } = (0, h.cf)([i5.Ay], () => ({
                noiseCancellation: i5.Ay.getNoiseCancellation(),
                noiseSuppression: i5.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: i5.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: i5.Ay.isNoiseCancellationSupported(),
            })),
            l = E.useMemo(() => {
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
        return (0, A.jsxs)(Y.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, A.jsx)(st.l, {
                    label: R.intl.string(R.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, A.jsx)(rY, {}),
            ],
        });
    },
});
var rH = n(934729),
    rK = n(621380);
let rW = !nE.Av;
function rZ() {
    return (0, h.bG)([i5.Ay], () => i5.Ay.getMode() === sw.TB.PUSH_TO_TALK);
}
let rq = (0, d.zD)(c.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nE.Av ? R.intl.string(R.t.tG4Np5) : R.intl.string(R.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, h.bG)([i5.Ay], () => i5.Ay.getMode());
        return E.useMemo(() => {
            if (!nE.Av && e === sw.TB.PUSH_TO_TALK)
                return R.intl.format(R.t["VHI4+Y"], { onDownloadClick: () => (0, rH._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, h.bG)([i5.Ay], () => i5.Ay.getActiveInputProfile() !== rK.m.STUDIO);
    },
    useValue: function () {
        return (0, h.bG)([i5.Ay], () => i5.Ay.getMode() === sw.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? sw.TB.PUSH_TO_TALK : sw.TB.VOICE_ACTIVITY),
            (i = [tD.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === sw.TB.PUSH_TO_TALK &&
                rW &&
                (0, sd.openModalLazy)(async () => {
                    let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(n.bind(n, 381512));
                    return (t) =>
                        (0, A.jsx)(e, {
                            title: R.intl.string(R.t.Kdt0Gb),
                            confirmText: R.intl.string(R.t["1WjMbC"]),
                            cancelText: R.intl.string(R.t.BddRzS),
                            onConfirm: () => (0, rH._)("PTT Limited Modal"),
                            body: R.intl.string(R.t.NIozvt),
                            ...t,
                        });
                }),
            lB.A.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
});
var rQ = n(484599);
let r$ = (0, d.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        usePredicate: rZ,
        Component: function () {
            let e = (0, h.bG)([i5.Ay], () => {
                    let { shortcut: e } = i5.Ay.getModeOptions();
                    return e;
                }),
                t = R.intl.format(R.t.HVvn5T, {
                    onClick: () => (0, nr.openUserSettings)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, A.jsx)(tJ.D, {
                label: R.intl.string(R.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: rQ.e,
                    children: (0, A.jsx)(sa.A, {
                        defaultValue: e,
                        onChange: (e) => lB.A.setMode(S.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    rJ = (0, d.sN)(c.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => R.intl.string(R.t.GCNMM8),
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        setValue: function (e) {
            lB.A.setMode(S.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: S.IjB,
        getInitialValue: function () {
            let { delay: e } = i5.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: rZ,
    });
var r0 = n(844981),
    r1 = n(943679);
function r2() {
    return (0, r0.Ay)("VoiceSettings");
}
let r3 = (0, d.zD)(c.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => R.intl.string(r1.default.LGDPhA),
        useSubtitle: function () {
            let e = r2();
            if ((0, r0.Xt)(e))
                return e === r0.L3.BLOCKED_MONO_OUTPUT
                    ? R.intl.string(r1.default.rOXfEw)
                    : R.intl.string(r1.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lB.A.setSpatialAudio(e, [tD.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return r2() !== r0.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, r0.Xt)(r2());
        },
    }),
    r5 = (0, d.Qx)(c.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => R.intl.string(R.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rE._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH), R.intl.string(R.t.VZPR0R), R.intl.string(R.t.cjPbpT)],
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getActiveInputProfile() ?? rK.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tD.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lB.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rE.d)({ location: "InputProfileCategory" });
            return [
                { value: rK.m.VOICE_ISOLATION, name: R.intl.string(R.t.cjPbpT), desc: R.intl.string(R.t.CzhvnE) },
                { value: rK.m.STUDIO, name: R.intl.string(R.t.VZPR0R), desc: R.intl.string(R.t.ZaJksS) },
                { value: rK.m.CUSTOM, name: R.intl.string(R.t["N/PQjv"]), desc: R.intl.string(R.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    r6 = (0, d.zZ)(c.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, h.bG)([rA.A, i5.Ay], () => {
                let e = i5.Ay.getInputDeviceId();
                return (
                    (rA.A.hasEchoCancellation(e) || rA.A.hasNoiseSuppression(e) || rA.A.hasAutomaticGainControl(e)) &&
                    i5.Ay.isInputProfileCustom()
                );
            });
            return E.useMemo(() => {
                if (e) return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [r5, rk, rX, rL, r3, rq, r$, rJ, rO],
    });
var r4 = n(403581),
    r8 = n(512950),
    r7 = n(983851),
    r9 = n(687021),
    ae = n(128450),
    at = n(796774),
    an = n(209932),
    ai = n(813564),
    as = n(984813),
    al = n(922016),
    ar = n(305866),
    aa = n(22231),
    ao = n(158045),
    au = n(792348),
    ad = n(674168),
    ac = n(511558),
    ag = n(817232),
    am = n(647451);
function aA(e) {
    let { onSelect: t } = e,
        [n, i] = E.useState(!1),
        s = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
        l = ao.Ay.canUseCustomCallSounds(s),
        r = E.useRef(null);
    function a(e) {
        l && (i(!1), t?.(e));
    }
    return (0, A.jsx)(al.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, A.jsx)(ar.l, {
                children: (0, A.jsx)(ac.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, A.jsx)(ad.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, A.jsx)(ag.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: R.intl.string(R.t.uOe0Az),
                children: (0, A.jsx)(aa.PencilIcon, { size: "md", color: "currentColor", className: am.Wo }),
            }),
    });
}
function aE(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, au.A)(t, null),
        i =
            0 === (0, ai.wH)()
                ? R.intl.string(R.t.OASXjt)
                : R.intl.formatToPlainString(R.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, A.jsx)(ag.dT, {
        onClick: n,
        text: i,
        children: (0, A.jsx)(r7.H, { size: "md", color: "currentColor", className: am.wg }),
    });
}
function ah(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, A.jsxs)("div", {
        className: am.D6,
        children: [
            (0, A.jsxs)("div", {
                className: am.kL,
                children: [
                    a && (0, A.jsx)(tj.A, { emojiId: l, emojiName: r, className: am.Zg }),
                    (0, A.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: am.dj,
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
                        ? (0, A.jsx)(aE, { sound: t })
                        : (0, A.jsx)(r7.H, { size: "md", color: "currentColor", className: am.Gk }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: am.kL,
                children: [
                    (0, A.jsx)(aA, { onSelect: i }),
                    s &&
                        !n &&
                        (0, A.jsx)(ag.dT, {
                            onClick: () => i(null),
                            text: R.intl.string(R.t.jmtcGA),
                            children: (0, A.jsx)(si.TrashIcon, {
                                size: "md",
                                color: nJ.A.unsafe_rawColors.RED_400.css,
                                className: am.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var aS = n(617617);
n(980504);
var ax = n(806050);
function ap(e) {
    return (0, h.bG)([an.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return an.A.getSound("0" === t ? "0" : t, n);
    });
}
function aT(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([aS.A], () => aS.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = ap(n);
    if (null == n || null == i) return null;
    let { emojiId: s, emojiName: l } = i,
        r = null != s || null != l;
    return (0, A.jsxs)("div", {
        className: ax.Io,
        children: [
            r
                ? (0, A.jsx)(tj.A, { emojiId: s, emojiName: l, className: ax.nW })
                : (0, A.jsx)(r7.H, { size: "md", color: "currentColor", className: ax.nW }),
            (0, A.jsx)(H.E, { className: ax.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let af = (0, d.E2)(c.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eM.Ay)(),
            [t, n] = E.useState("0"),
            i = (0, as.mz)(t),
            s = ap(i),
            l = i?.type === as.PP.GLOBAL,
            r = (0, h.bG)([an.A], () => an.A.hasFetchedAllSounds()) && null != i && null == s;
        (E.useEffect(() => {
            r && (0, ai.ND)({ location: e });
        }, [r, e]),
            E.useEffect(() => {
                (0, at.E7)();
            }, []));
        let a = E.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, A.jsx)(aT, { guildId: e.value }) : null;
        }, []);
        return (0, A.jsxs)(n1.n, {
            label: R.intl.string(R.t.nzUc3B),
            description: R.intl.format(R.t.u9RWmv, { helpdeskArticle: eT.A.getArticleURL(S.MVz.SOUNDBOARD) }),
            children: [
                (0, A.jsx)(r9.A, {
                    guildId: t,
                    className: ax.Dt,
                    globalOption: { label: R.intl.string(R.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, A.jsxs)(ae.A, {
                    title: R.intl.format(R.t.I2TsYN, {
                        nitroWheelHook: () => (0, A.jsx)(r4.t, { size: "md", color: "currentColor", className: ax.ax }),
                    }),
                    children: [
                        (0, A.jsx)(ah, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (n) => {
                                null == n ? (0, ai.Dv)(t, e) : (0, ai.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, A.jsx)(r8.p, {
                                className: ax.lm,
                                messageType: r8.Y.WARNING,
                                children: R.intl.string(R.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aI = n(824744);
let a_ = (0, d.sN)(c.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => R.intl.string(R.t.kbFsAD),
    useSubtitle: () => R.intl.format(R.t.BPbGq7, { helpCenterArticle: eT.A.getArticleURL(S.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tD.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aI.w)(e);
        (0, at.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, ai.wH)();
        return (0, aI.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aN = n(864145);
let aC = (0, d.sN)(c.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t["2JbvKw"]),
        useSubtitle: () => R.intl.string(R.t.INenzY),
        setValue: function (e) {
            let t = (0, aI.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, aI.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aN.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    ab = (0, d.zZ)(c.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ABjMWI),
        buildLayout: () => [a_, aC, af],
    });
var ay = n(803224),
    av = n(552122);
let aj = (0, d.E2)(c.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [R.intl.string(R.t.fgSHf8)],
        usePredicate: () => null != av.A.useHolidaySoundpack(),
        Component: () =>
            (0, A.jsx)(H.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: R.intl.format(R.t.Eup6Wv, {
                    onClick: () => (0, nr.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aO = (0, d.AK)(c.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.eyGEE4),
        useSearchTerms: () => [R.intl.string(R.t.eyGEE4)],
        destinationKey: c.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aL = (0, d.gN)(c.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aO] });
var aR = n(264686);
let aD = (0, ex.D)(() => ({ currentPlayingSound: null }));
function aP() {
    let e = aD.getField("currentPlayingSound");
    (e?.stop(), aD.setState({ currentPlayingSound: null }));
}
function aG(e) {
    let t = aD.getField("currentPlayingSound");
    t?.stop();
    let n = (0, n8.Ak)(e);
    aD.setState({ currentPlayingSound: n });
}
function aM(e) {
    return (0, d.zD)(`${c.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => aG(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, h.bG)([ay.A], () => ay.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = ay.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aR.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, h.bG)([ay.A], () => ay.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aU = [
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
    aV = (0, d.D1)(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? R.intl.formatToPlainString(R.t["0JYT98"], { count: t })
                : R.intl.formatToPlainString(R.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => th(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aP();
            };
        },
        buildLayout: () => aU.map((e) => aM(e)),
    }),
    ak = (0, d.zZ)(c.X.SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, h.bG)([ay.A], () => ay.A.getDisableAllSounds());
            return E.useMemo(() => {
                if (e)
                    return {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: R.intl.format(R.t.fRvixS, {
                            onClick: () => (0, nr.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aV, aj, aL],
    }),
    aw = (0, d.zD)(c.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => R.intl.string(R.t.e3Zz3F),
        useSubtitle: () => R.intl.string(R.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            ((0, rt.A)("stream_previews_disabled", !e, L.uh.getSetting(), [tD.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e));
        },
    }),
    aF = (0, d.zD)(c.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => R.intl.string(R.t.GmWk2E),
        useSearchTerms: () => [R.intl.string(R.t["Fj/xn1"])],
        useSubtitle: () => R.intl.string(R.t["Fj/xn1"]),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getVideoHook());
        },
        setValue: lB.A.setVideoHook,
        usePredicate: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.supportsVideoHook());
        },
    }),
    aB = (0, d.zD)(c.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => R.intl.string(R.t["4I0qzZ"]),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getExperimentalSoundshare());
        },
        setValue: lB.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, h.bG)([i5.Ay], () => {
                let e = i5.Ay.supportsExperimentalSoundshare(),
                    t = i5.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    az = (0, d.zD)(c.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => R.intl.string(R.t["/jwMtn"]),
        useSubtitle: () => R.intl.string(R.t.zlA23F),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tD.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lB.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i5.Ay.supports(sw.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    aY = (0, d.sN)(c.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => R.intl.string(R.t.fhEzfj),
        setValue: function (e) {
            let t = [tD.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lB.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i5.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, h.bG)([i5.Ay], () => i5.Ay.getSidechainCompression());
            return i5.Ay.supports(sw.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    aX = (0, d.zD)(c.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => R.intl.string(R.t.lt8rRx),
        useSubtitle: () => R.intl.string(R.t.ie1mgY),
        useValue: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nE.cX)() && e
                ? (0, n0.A)({
                      title: R.intl.string(R.t["9jf31O"]),
                      subtitle: R.intl.string(R.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (lB.A.setUseSystemScreensharePicker(e), nx.A.app.relaunch());
                      },
                      confirmText: R.intl.string(R.t.BddRzS),
                  })
                : lB.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i5.Ay], () => i5.Ay.supportsSystemScreensharePicker() && (0, nE.cX)());
        },
    }),
    aH = (0, d.bd)(c.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t.qrMyvm) : R.intl.string(R.t.LEtTNl)),
        useCollapsedSubtitle: () => th(c.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [az, aY, aX, aB, aF],
    }),
    aK = (0, d.zZ)(c.X.STREAMING_CATEGORY, { useTitle: () => R.intl.string(R.t.KDdjou), buildLayout: () => [aw, aH] });
var aW = n(106713);
let aZ = (0, d.E2)(c.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aW.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, A.jsx)(lD.U, {
                label: R.intl.string(R.t.UTM8VP),
                deviceType: sw.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aq = (0, d.E2)(c.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aW.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, A.jsx)(lD.U, {
                label: R.intl.string(R.t.xuYQ0n),
                deviceType: sw.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aQ = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [aZ, aq] }),
    a$ = (0, d.sN)(c.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i5.Ay.getInputVolume();
            return (0, aI.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tD.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aI.w)(e);
            lB.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    aJ = (0, d.sN)(c.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i5.Ay.getOutputVolume();
            return (0, aI.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tD.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aI.w)(e);
            lB.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    a0 = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [a$, aJ] });
var a1 = n(702841),
    a2 = n(152567),
    a3 = n(804037);
let a5 = `${eT.A.getArticleURL(S.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    a6 = (0, d.E2)(c.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH)],
        usePredicate: function () {
            return (0, a1.bG)([i5.Ay], () => i5.Ay.supports(sw.O5.LOOPBACK));
        },
        Component: function () {
            return (0, a1.bG)([i5.Ay], () => i5.Ay.supports(sw.O5.LOOPBACK))
                ? (0, A.jsx)(a2.A, {
                      size: "md",
                      notchBackground: a2.V.GRAY,
                      captionVoice: R.intl.string(R.t.bp3JOV),
                      captionNoVoice: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t.bgn75v),
                              }),
                              R.intl.string(R.t["MA+OZh"]),
                              (0, A.jsx)(ns.Anchor, {
                                  className: a3.X,
                                  href: eT.A.getArticleURL(S.MVz.NO_INPUT_DETECTED),
                                  children: R.intl.string(R.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: R.intl.format(R.t["V+B3FH"], { guideURL: a5 }),
                      buttonTest: R.intl.string(R.t.gyljWE),
                      buttonStop: R.intl.string(R.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    a4 = eJ.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function a8(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, A.jsxs)(Y.B, {
        children: [
            n && (0, A.jsx)(i9, { sourcePage: "voice" }),
            t && (0, A.jsx)(s0.A, { look: s0.k.WARNING, children: R.intl.string(R.t.Ioz3gx) }),
        ],
    });
}
let a7 = (0, d.zZ)(c.X.VOICE_CATEGORY, {
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
            let e = i7("voice"),
                t = (0, lP.x5)(sw.oh.AUDIO_INPUT),
                n = (0, lP.x5)(sw.oh.AUDIO_OUTPUT),
                i = E.useMemo(() => {
                    let e = a4.some((e) => t?.hardwareId?.startsWith(e)),
                        i = a4.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return E.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, A.jsx)(a8, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [aQ, a0, a6],
    }),
    a9 = (0, d.t_)(c.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        buildLayout: () => [a7, r6, lF, aK, ak, ab, rm, rr],
    }),
    oe = (0, d.i4)(c.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        usePredicate: () => i5.Ay.isSupported(),
        icon: l_.MicrophoneIcon,
        useMenu: lN.A,
        buildLayout: () => [a9],
    }),
    ot = (0, d.WI)(c.X.APP_SECTION, {
        useTitle: () => R.intl.string(R.t.gcyH1J),
        buildLayout: () => [oe, nK, e3, iB, lI, nQ],
    });
var on = n(360669),
    oi = n(974544),
    os = n(423764),
    ol = n(289873),
    or = n(132500),
    oa = n(465323),
    oo = n(37766),
    ou = n(194261),
    od = n(391048),
    oc = n(277984),
    og = n(99696),
    om = n(202613),
    oA = n(615405),
    oE = n(83617),
    oh = n(935208),
    oS = n(607399),
    ox = n(993077),
    op = n(150934),
    oT = n(256006),
    of = n(198970),
    oI = n(71532);
let o_ = /[^0-9/]/g,
    oN = /[^0-9]/g;
class oC extends E.PureComponent {
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
                ((i = (n = e.replace(o_, "").split("/"))[0]),
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
            ? (u = u.replace(oN, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, A.jsx)(sc.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var ob = n(832208),
    oy = n(782328);
let ov = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tB.Ld)(),
                        title: () => R.intl.string(R.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => R.intl.string(R.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => oy.ep,
                        renderInput: (e) => (0, A.jsx)(oC, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oj = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: s } = e,
            [l, r] = E.useState(!1),
            [a, o] = E.useState(null),
            [u, d] = E.useState(i);
        return (
            E.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, A.jsx)(ob.A, {
                className: n,
                form: ov,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    (l || "" === e || r(!0),
                        (l && "" === e) || !(0, oI.So)(e) ? o(R.intl.string(R.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oO = n(219887),
    oL = n(292856);
let oR = "isDefault";
class oD extends E.PureComponent {
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
            expiresMonth: t instanceof om.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof om.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        e8.h.wait(() => {
            ((0, oc.ey)(), (0, oc.tc)());
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(il.Vq).length))
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
                      className: oL.zc,
                      children: (0, A.jsx)(iX.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, A.jsx)("div", {
                  className: oL.zc,
                  children: (0, A.jsx)(iX.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oT.g)(n);
        return (0, A.jsxs)("div", {
            className: oL.yV,
            children: [
                (0, A.jsx)(H.E, {
                    className: oL.bV,
                    variant: "text-sm/normal",
                    children: R.intl.string(R.t["50Auo2"]),
                }),
                (0, A.jsx)(of.Ay, {
                    ...e,
                    mode: of.Ay.Modes.EDIT,
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
            className: oL.yV,
            children: [
                (0, A.jsx)(H.E, { className: oL.bV, variant: "text-sm/normal", children: R.intl.string(R.t.Fo2YP7) }),
                (0, A.jsx)(oj, {
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
            className: oL.AU,
            children: (0, A.jsxs)(Y.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, A.jsx)(lW.e, {
                        children: (0, A.jsxs)("div", {
                            className: oL.lH,
                            children: [
                                n
                                    ? (0, A.jsx)(ss.m, {
                                          text: R.intl.string(R.t["v6/z28"]),
                                          children: (0, A.jsx)("div", { "aria-hidden": !0, className: oL.dm }),
                                      })
                                    : null,
                                (0, A.jsx)(_.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oS.Fr ? "sm" : "md",
                                    text: oS.Fr ? R.intl.string(R.t.oyYWHE) : R.intl.string(R.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, A.jsxs)(lW.e, {
                        children: [
                            (0, A.jsx)(_.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oS.Fr ? "sm" : "md",
                                text: R.intl.string(R.t["ETE/oC"]),
                            }),
                            (0, A.jsx)(_.$, {
                                loading: e,
                                disabled: !i || t || !s,
                                type: "submit",
                                variant: "active",
                                size: oS.Fr ? "sm" : "md",
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
            r = e instanceof om.SJ;
        return (0, A.jsx)(ox.Z, {
            editable: !0,
            className: io()(oL.Nr, i),
            children: (0, A.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, A.jsxs)("div", {
                        className: oL.__invalid_paymentSection,
                        children: [
                            (0, A.jsx)(oO.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, A.jsx)("div", { className: oL.Um, children: R.intl.string(R.t["3R0U0b"]) })
                                : null,
                            (0, A.jsx)("div", {
                                className: oL.Sv,
                                children: r
                                    ? R.intl.format(R.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : R.intl.string(R.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, A.jsx)("div", {
                        className: oL.D5,
                        children: (0, A.jsx)(op.S, {
                            value: oR,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, oR),
                            label: R.intl.string(R.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, A.jsx)(se.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let oP = h.Ay.connectStores([oA.A], () => ({ updateError: oA.A.editSourceError, removeError: oA.A.removeSourceError }))(
    oD,
);
var oG = n(986485),
    oM = n(849405),
    oU = n(329693);
function oV() {
    (0, og.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, or.A)() });
}
class ok extends E.PureComponent {
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
            ? (0, A.jsx)(oP, {
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
                      i ? null : (0, A.jsx)(se.c, { className: oU.__invalid_sourceDivider }),
                      (0, A.jsxs)("div", {
                          className: oU.Yb,
                          children: [
                              (0, A.jsx)(oO.A, {
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
let ow = E.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: s, onRedeemClick: l } = e,
        [r, a] = E.useState(null),
        o = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, h.bG)([oA.A], () => oA.A.ipCountryCode),
        d = E.useMemo(() => (0, oa.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        E.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oc.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, A.jsxs)(A.Fragment, {
            children: [
                n ? null : (0, A.jsx)(se.c, { className: oU.__invalid_sourceDivider }),
                (0, A.jsxs)("div", {
                    className: oU.Yb,
                    children: [
                        void 0 !== t
                            ? (0, A.jsx)(oO.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, A.jsxs)(sE.A, {
                                  align: sE.A.Align.CENTER,
                                  children: [
                                      (0, A.jsx)(oo._, { size: "lg" }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/medium",
                                          className: oM.Wi,
                                          children: R.intl.string(oG.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, A.jsxs)("div", {
                            className: oU.zy,
                            children: [
                                (0, A.jsx)("div", {
                                    className: oU.Tq,
                                    children:
                                        null == r
                                            ? (0, A.jsx)(ol.y, { type: ol.y.Type.SPINNING_CIRCLE })
                                            : (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, oa.$g)(e ?? 0, n, s, {
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
                                    text: R.intl.string(oG.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class oF extends E.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oc.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oc.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oc.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oE.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, sd.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, A.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, od.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, A.jsxs)("div", {
            className: oU.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, A.jsxs)("div", {
                          className: oU.z8,
                          children: [
                              (0, A.jsx)(H.E, { variant: "text-sm/normal", children: R.intl.string(R.t.aRHpAB) }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: oU.Sv,
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oh.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof om.LQ)),
            c = u.filter((e) => e instanceof om.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            E = d.map((e, t) =>
                (0, A.jsx)(
                    ok,
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
                              ow,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: oV,
                              },
                              e.id,
                          ),
                      )
                    : (0, A.jsx)(ow, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: oV,
                      })),
            (0, A.jsxs)(A.Fragment, {
                children: [
                    t
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsxs)(p.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, A.jsx)(ou.LockIcon, { size: "sm", className: oU.hz }),
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
                    E,
                    o && e,
                    m !== d.length - 1 || (o && c.length > 0) ? (0, A.jsx)(se.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var oB = n(459357),
    oz = n(295405),
    oY = n(166403),
    oX = n(773669),
    oH = n(943009);
function oK() {
    let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, os.Gw)(e.country) };
}
let oW = (0, d.E2)(c.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, h.bG)([oA.A], () => oA.A.isSyncing),
                i = (0, h.bG)([oz.A], () => oz.A.paymentSources),
                s = (0, h.bG)([oz.A], () => oz.A.defaultPaymentSourceId),
                l = (0, h.bG)([oX.default], () => oX.default.locale),
                r = (0, h.bG)([oY.A], () => oY.A.getPremiumTypeSubscription()),
                a = (0, h.bG)([oA.A], () => oA.A.isRemovingPaymentSource),
                o = (0, h.bG)([oA.A], () => oA.A.isUpdatingPaymentSource),
                { enabled: u } = (0, oB.c)({ location: "UserSettingsBilling" });
            return (E.useEffect(() => {
                (oc.$o(), oc.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, A.jsx)("div", { className: oH.o, children: (0, A.jsx)(ol.y, {}) })
                : (0, A.jsx)(oF, {
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
    oZ = (0, d.zZ)(c.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.W26xGQ),
        useSubtitle: () => {
            let e = oK();
            return null != e ? R.intl.format(R.t.e2t1G5, { country: e.countryName }) : R.intl.string(R.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == oK()
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
        buildLayout: () => [oW],
    });
var oq = n(549363),
    oQ = n(545075);
let o$ = (0, d.E2)(c.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, h.bG)([oX.default], () => oX.default.locale);
            return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(oQ.kb, {}), (0, A.jsx)(oq.A, { locale: e })] });
        },
        useSearchTerms: () => [R.intl.string(R.t.obLrcK)],
    }),
    oJ = (0, d.zZ)(c.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.obLrcK),
        buildLayout: () => [o$],
    }),
    o0 = (0, d.t_)(c.X.BILLING_PANEL, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [oZ, oJ],
        useObscuredNotice: oi.L,
    }),
    o1 = (0, d.i4)(c.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        icon: on.B,
        buildLayout: () => [o0],
    });
var o2 = n(70283),
    o3 = n(597770),
    o5 = n(682618),
    o6 = n(859492),
    o4 = n(962644),
    o8 = n(35587),
    o7 = n(86379);
let o9 = (0, d.E2)(c.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: oQ.uK,
        usePredicate: () => (0, o7.Hp)(),
        useSearchTerms: () => [R.intl.string(R.t.vwMEHS)],
    }),
    ue = (0, d.zZ)(c.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [o9] });
var ut = n(982240),
    un = n(788833),
    ui = n(914410),
    us = n(556427),
    ul = n(573343);
let ur = "UserSettingsGiftingBadgeProgress";
function ua(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, A.jsxs)("div", {
        className: io()(ul.fO, { [ul.bF]: i }),
        children: [
            null != n && (0, A.jsx)("img", { src: n, alt: "", className: ul.si }),
            (0, A.jsxs)("div", {
                className: ul.tc,
                children: [
                    (0, A.jsx)(H.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, A.jsx)(H.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: R.intl.format(us.default.qvx9E4, { count: (0, ut.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function uo(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, o6.b9)(ur);
    return (0, A.jsx)("div", {
        className: ul.dw,
        children: t.map((e) => (0, A.jsx)(ua, { tier: e, iconUrl: (0, o6.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function uu(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eM.Ay)(tD.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, un.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, A.jsx)("div", {
        className: ul.NG,
        children: (0, A.jsx)(_.$, {
            variant: "primary",
            icon: o3.GiftIcon,
            text: R.intl.string(us.default.DZnomS),
            onClick: s,
        }),
    });
}
function ud(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: s, giftsRemaining: l } = e,
        r = (0, ut.rL)(i),
        a = (0, ut.rL)(s),
        o = (0, o6.GZ)(n, i, s),
        u = (0, o6.b9)(ur),
        d = (0, o6.Se)(i, u),
        c = (0, o6.Se)(s, u);
    return (
        (t =
            null != s
                ? R.intl.formatToPlainString(us.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : R.intl.formatToPlainString(us.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, A.jsxs)("div", {
            className: ul.mY,
            children: [
                null != d &&
                    (0, A.jsx)("div", {
                        className: ul.fC,
                        children: (0, A.jsx)("img", { src: d, alt: "", className: ul.qS }),
                    }),
                (0, A.jsxs)("div", {
                    className: ul.Qs,
                    children: [
                        (0, A.jsx)(H.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, A.jsx)(ui.Ay, { variant: ui.qP.BLUE, weight: ui.fh.MEDIUM, progress: o }),
                        (0, A.jsx)(H.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: ul.qg,
                            children: R.intl.format(us.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, A.jsx)("div", {
                        className: ul.fC,
                        children: (0, A.jsx)("img", { src: c, alt: "", className: ul.qS }),
                    }),
            ],
        })
    );
}
function uc(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, h.cf)([ut.Ay], () => ({
            badgeProgress: ut.Ay.getSingleRequirementProgress(o2.$.GIFTING)?.current ?? 0,
            currentTier: ut.Ay.getCurrentTier(o2.$.GIFTING),
            nextTier: ut.Ay.getNextTier(o2.$.GIFTING),
            giftsRemaining: ut.Ay.getRemainingToNextTier(o2.$.GIFTING),
            tiers: ut.Ay.getBadgeById(o2.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, A.jsxs)("div", {
              className: ul.kL,
              children: [
                  (0, A.jsxs)("div", {
                      className: ul.Jo,
                      children: [
                          n > 0 &&
                              (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsx)(ud, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, A.jsx)("div", { className: ul.yF }),
                                  ],
                              }),
                          (0, A.jsx)(uo, { tiers: r, currentTier: i }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: ul.PJ,
                              children: R.intl.string(us.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, A.jsx)(uu, { analyticsLocation: t, location: ur }),
              ],
          });
}
let ug = (0, d.zZ)(c.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => R.intl.string(us.default.sFokBp),
        buildLayout: () => [um],
        usePredicate: () => {
            let e = (0, o6.F5)("gift_inventory"),
                t = (0, h.bG)([ut.Ay], () => ut.Ay.getBadgeById(o2.$.GIFTING));
            return e && null != t;
        },
    }),
    um = (0, d.E2)(c.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [R.intl.string(us.default.sFokBp)],
        Component: () => (0, A.jsx)(uc, {}),
    });
var uA = n(264779),
    uE = n(412260),
    uh = n(555393),
    uS = n(725807),
    ux = n(212168),
    up = n(469778),
    uT = n(45938),
    uf = n(109802),
    uI = n(869038),
    u_ = n(380856);
function uN(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, A.jsxs)(sE.A, {
        className: io()(u_.wx, n),
        align: sE.A.Align.CENTER,
        children: [
            (0, A.jsx)("div", { className: u_.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function uC(e) {
    let { children: t, className: n } = e;
    return (0, A.jsx)("div", { className: io()(u_.rf, n), children: t });
}
class ub extends E.PureComponent {
    static Header = uN;
    static Body = uC;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, A.jsx)("div", { className: io()(u_.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var uy = n(165191),
    uv = n(871123),
    uj = n(366523),
    uO = n(280450),
    uL = n(30793),
    uR = n(97352),
    uD = n(67480),
    uP = n(147925),
    uG = n(957565),
    uM = n(615396),
    uU = n(274904);
class uV extends E.PureComponent {
    _copyModeTimeout = new rD.Ep();
    state = { copyMode: uf.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case uf.q.SUCCESS:
                return R.intl.string(R.t.XVvPjU);
            case uf.q.ERROR:
                return R.intl.string(R.t.i4GM3L);
            default:
                return R.intl.string(R.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        uI.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, uT.AK)(t, n),
            (0, uG.C)(
                e,
                () => this.setState({ copyMode: uf.q.SUCCESS }),
                () => this.setState({ copyMode: uf.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: uf.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, A.jsxs)(sE.A, {
            direction: sE.A.Direction.VERTICAL,
            className: uU.Gj,
            children: [
                (0, A.jsx)(uf.e, {
                    className: uU.ph,
                    value: (0, uT.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uG.p5,
                    hideMessage: e ? R.intl.string(R.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: lH.XD.BRAND,
                    buttonLook: lH.pR.FILLED,
                }),
                (0, A.jsxs)("div", {
                    className: uU.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, A.jsxs)(E.Fragment, {
                                  children: [
                                      R.intl.format(R.t.ltVZcJ, { hours: t.expiresAt.diff(id()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, A.jsx)(n2.D, {
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
class uk extends E.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await uI.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && uI.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, uv.bF)(e)
            ? (0, A.jsx)(uj.e, { shape: "square", sku: e, containerClassName: uU.ez })
            : null != t
              ? (0, A.jsx)(uy.A, { giftStyle: t, className: uU.ez, shouldAnimate: this.state.isHovered })
              : (0, A.jsx)(i3.A, { game: n, size: i3.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, uv.bF)(e)
            ? (0, A.jsxs)("div", {
                  className: io()(uU.Oc, uU.ic),
                  children: [
                      (0, A.jsx)(i3.A, { game: n, size: i3.M.XSMALL, skuId: e.id, className: uU._u }),
                      R.intl.format(R.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, A.jsx)("div", { className: uU.Oc, children: R.intl.format(R.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tH.FB
                    ? R.intl.string(R.t.odsU6W)
                    : i === tH.Bu && null != n
                      ? R.intl.formatToPlainString(n.interval === tH.WT.MONTH ? R.t.uZjpiJ : R.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : R.intl.formatToPlainString(n.interval === tH.WT.MONTH ? R.t.rCJvqo : R.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, A.jsx)("div", { className: uU.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, A.jsxs)(sE.A, {
            justify: sE.A.Justify.BETWEEN,
            align: sE.A.Align.CENTER,
            className: uU.pe,
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
        return (0, A.jsxs)(ub, {
            className: i,
            children: [
                (0, A.jsx)(n2.D, {
                    onClick: this.handleToggleOpen,
                    className: uU.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, A.jsx)(ub.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, A.jsxs)("div", {
                            className: uU.MY,
                            children: [
                                (0, A.jsxs)(sE.A, {
                                    align: sE.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, A.jsxs)("div", {
                                            className: uU.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, A.jsx)(uP.A, {
                                    direction: a ? uP.A.Directions.UP : uP.A.Directions.DOWN,
                                    className: uU.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, A.jsx)(ub.Body, {
                          children: l
                              ? (0, A.jsx)(ol.y, { className: uU.u1 })
                              : (0, A.jsxs)(E.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, A.jsx)(uV, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let uw = h.Ay.connectStores([uD.A, tn.A, uL.A, iQ.A, uR.A, uO.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = uD.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = uL.A.getForGifterSKUAndPlan(uO.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: tn.A.enabled,
        isFetching: uL.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: uL.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: iQ.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, uM.c9)(n) : null,
        giftCodes: l,
    };
})(uk);
var uF = n(725570),
    uB = n(736653),
    uz = n(46054);
let uY = id().duration(30, "days");
var uX = n(416052),
    uH = n(878309);
function uK(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, A.jsx)(su.a, {
        title: "",
        size: "md",
        input: (0, A.jsx)("div", { className: uH.aR }),
        onClose: async () => await t(),
        actions: [{ text: R.intl.string(R.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, A.jsxs)("div", {
            className: uH.t4,
            children: [
                (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t.iufib1) }),
                (0, A.jsx)(H.E, { variant: "text-md/normal", className: uH.G3, children: R.intl.string(R.t.eAn6z2) }),
            ],
        }),
    });
}
let uW = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: s, transitionState: l } = e,
        [r, a] = E.useState(null),
        o = (0, tB.GV)(),
        { analyticsLocations: u } = (0, eM.Ay)(tD.A.USER_SETTINGS_GIFT_INVENTORY);
    return (E.useEffect(() => {
        null == i &&
            (0, uA.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, s.id, s.outboundTitle, s.partnerId, n, u]),
    null != r)
        ? (0, A.jsx)(uK, { onClose: t, transitionState: l })
        : null == i
          ? (0, A.jsx)(ol.y, { className: uH.Lq })
          : (0, A.jsx)(su.a, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, A.jsxs)("div", {
                    className: uH.N1,
                    children: [
                        (0, A.jsx)("div", { className: uH.Qw }),
                        (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t["23BfZh"]) }),
                        (0, A.jsx)(H.E, {
                            variant: "text-md/normal",
                            className: uH.G3,
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
                            let e = (0, uA.kc)(i, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, A.jsxs)("div", {
                    children: [
                        (0, A.jsx)(se.c, { className: uH.M5 }),
                        (0, A.jsx)(tJ.D, {
                            label: R.intl.string(R.t.s9LFQh),
                            helperText: R.intl.string(R.t["F+nFTZ"]),
                            children: (0, A.jsx)(uX.A, {
                                value: i,
                                buttonColor: lH.$n.Colors.BRAND,
                                buttonLook: lH.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uZ = n(707554),
    uq = n(339048),
    uQ = n(136380);
function u$() {
    let e = (0, h.yK)([up.A], () => up.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = B().groupBy(e, (e) => (0, uT.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = E.useState(!1);
    if (
        (E.useEffect(() => {
            e8.h.wait(() => {
                (0, uq.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, A.jsx)(ol.y, { className: uQ.Lq });
    if (0 === Object.keys(t).length)
        return (0, A.jsxs)("div", {
            className: uQ.p$,
            children: [
                (0, A.jsx)("div", { className: uQ.QT }),
                (0, A.jsx)(uZ.H, { className: uQ.ks, children: R.intl.string(R.t.B1qgZn) }),
                (0, A.jsx)("p", {
                    className: uQ.WO,
                    children: R.intl.format(R.t.HezvJ8, {
                        onClick: function () {
                            (0, nr.openUserSettings)(c.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = B()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: s } = (0, uT.X6)(e);
            return (0, A.jsx)(uw, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, A.jsx)(Y.B, { gap: "lg", children: s });
}
function uJ(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [s, l] = E.useState(!1),
        [r, a] = E.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, uB.Ay)(),
        d = (0, uA.WD)(n.id, u),
        c = null != i,
        g = E.useMemo(
            () =>
                (0, ic.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? id()(n.outboundRedemptionEndDate)
                            : id()(n.endDate).add(uY)
                        : id()(n.endDate),
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
        h = (0, uh.N)()?.isEligible === !0,
        S = E.useCallback(() => a(!1), []),
        { outboundTitle: x, outboundTermsAndConditions: T } = n;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)("div", {
                className: uQ.AX,
                children: [
                    (0, A.jsxs)("div", {
                        className: uQ.Pg,
                        children: [
                            (0, A.jsxs)("div", {
                                className: uQ.At,
                                children: [
                                    (0, A.jsx)("div", {
                                        className: uQ.$G,
                                        children: (0, A.jsx)("img", { alt: "", src: d, className: uQ.IJ }),
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
                            (c || h) && (0, A.jsx)(_.$, { text: m, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    s &&
                        (0, A.jsx)(H.E, {
                            className: uQ.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: uz.A.parse(T, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, A.jsx)(uF.aF, {
                    renderModal: (e) =>
                        (0, A.jsx)(uW, {
                            ...e,
                            onClose: S,
                            onClaim: o4.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: S,
                }),
        ],
    });
}
function u0(e) {
    let { redesign: t = !1 } = e,
        n = (0, h.yK)([up.A], () => up.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, uh.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, o8.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tH.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tH.Bu && !e.consumed) ?? [],
        [u, d] = B().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tH.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = s.length + l.length > 0,
        g =
            t || !c
                ? null
                : (0, A.jsxs)("div", {
                      className: uQ.N1,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.wFsj3B) }),
                          (0, A.jsx)(se.c, { className: uQ.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, A.jsxs)("div", {
                      className: uQ.uo,
                      children: [
                          (0, A.jsx)(r4.t, {
                              size: "md",
                              color: nJ.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: uQ.PC,
                          }),
                          (0, A.jsx)(H.E, {
                              variant: "text-md/normal",
                              className: uQ.Qw,
                              children: R.intl.format(R.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tk.default)(), (0, t1.pX)(S.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, A.jsx)(uS.A, {
                              showGradient: !0,
                              className: uQ.aA,
                              subscriptionTier: tH.pe.TIER_2,
                              textOptions: { textOverride: R.intl.string(R.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, A.jsxs)("div", {
        children: [
            g,
            (0, A.jsx)(ux.A, {
                className: uQ.Yj,
                isShown: !1 === i && c,
                type: ux.i.PREMIUM,
                hasBackground: !0,
                children: (0, A.jsxs)("div", {
                    className: uQ.DE,
                    children: [
                        m,
                        l.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, A.jsx)(uJ, { outboundPromotion: n, code: t }, n.id);
                        }),
                        s.map((e) => (0, A.jsx)(uJ, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, A.jsx)(
                                  uw,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tH.FB,
                                  },
                                  (0, uT.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, A.jsx)(
                                  uw,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tH.Bu,
                                  },
                                  (0, uT.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, A.jsx)(
                                  uw,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tH.Bu,
                                  },
                                  (0, uT.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let u1 = (0, d.zZ)(c.X.MY_GIFTS_CATEGORY, {
        useTitle: u3,
        buildLayout: () => [u2],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, h.cf)(
                    [uE.A],
                    () => ({
                        claimedOutboundPromotionCodes: uE.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: uE.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, o8.T1)({ includeClaimedPromotions: !0 }),
                i = (0, uA.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    u2 = (0, d.E2)(c.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [u3()],
        Component: () => (0, A.jsx)(u0, { redesign: !0 }),
    });
function u3() {
    return R.intl.string(R.t.YzjdWJ);
}
let u5 = (0, d.zZ)(c.X.PURCHASED_GIFTS_CATEGORY, { useTitle: u4, buildLayout: () => [u6] }),
    u6 = (0, d.E2)(c.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [u4()], Component: () => (0, A.jsx)(u$, {}) });
function u4() {
    return R.intl.string(R.t.FWe6CP);
}
var u8 = n(532446),
    u7 = n(499454);
class u9 extends E.Component {
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
                    (await (0, og.Qp)(n),
                        (0, og.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, or.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, uT.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await uI.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (ti.default.track(S.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: S.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: S.ZSU.BUTTON_CTA,
                },
            }),
                (0, u7.h)({ processedCode: e }),
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
        return (0, A.jsx)(n1.n, {
            label: e ? void 0 : R.intl.string(R.t["il+VCo"]),
            children: (0, A.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, A.jsxs)(u8.M, {
                    children: [
                        (0, A.jsx)(sc.k, {
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
function de(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, oB.c)({ location: "UserSettingsBilling" }),
        i = E.useContext(ti.AnalyticsContext),
        s = (0, h.bG)([tn.A], () => tn.A.enabled);
    return (0, A.jsx)(u9, { analyticsContext: i, obscureInput: s, acceptGiftCardRedemption: n, redesign: t });
}
let dt = (0, d.zZ)(c.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["il+VCo"]),
        buildLayout: () => [dn],
        usePredicate: () => !(0, o7.Hp)(),
    }),
    dn = (0, d.E2)(c.X.REDEEM_CODE_INPUT, {
        Component: () => (0, A.jsx)(de, { redesign: !0 }),
        useSearchTerms: () => [R.intl.string(R.t["jcSP+g"]), R.intl.string(R.t["il+VCo"])],
    }),
    di = (0, d.t_)(c.X.GIFT_PANEL, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        buildLayout: () => [dt, u1, ug, u5, ue],
        initialize: () => {
            (o4.Ay.fetchClaimedOutboundPromotionCodes(), (0, o6.Ig)("gift_inventory") && (0, o5.o0)(o2.$.GIFTING));
        },
    }),
    ds = (0, d.i4)(c.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        icon: o3.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, o8.IO)().length;
            return E.useMemo(() => ({ badgeType: m.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [di],
    });
var dl = n(659758),
    dr = n(962766),
    da = n(877624),
    du = n(269115),
    dd = n(462887),
    dc = n(73825),
    dg = n(531260),
    dm = n(160946),
    dA = n(721668),
    dE = n(224016),
    dh = n(580630),
    dS = n(526292),
    dx = n(881489),
    dp = n(106512),
    dT = n(22118),
    df = n(103411),
    dI = n(190187),
    d_ = n(930861),
    dN = n(854627),
    dC = n(889227),
    db = n(326084),
    dy = n(851746),
    dv = n(664654),
    dj = n(912140),
    dO = n(953727);
let dL = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...s } = e;
        return (0, A.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, dO.A)({ ...s }),
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
    dR = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            s = (0, uB.Ay)(),
            l = (0, dd.q)(s),
            r = null != n ? n : l ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, A.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, dO.A)({ ...i }),
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
var dD = n(387316);
let dP = "url(#gradient)",
    dG = (e) => {
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
            [d, c] = E.useState(s);
        E.useEffect(() => {
            let e = setTimeout(() => {
                c(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let g = (0, uB.Ay)(),
            m = (0, dd.q)(g),
            h = (function (e) {
                switch (e) {
                    case dU.NITRO_GEM:
                    case dU.AVATAR_DECO:
                        return "var(--background-base-low)";
                    case dU.NITRO_LOGO:
                        return "var(--premium-tier-2-purple)";
                    default:
                        return;
                }
            })(r),
            S = (function (e, t) {
                switch (e) {
                    case dU.NITRO_LOGO:
                        return t ? "0.3" : "0.2";
                    case dU.NITRO_GEM:
                    case dU.AVATAR_DECO:
                    default:
                        return;
                }
            })(r, m),
            x =
                a ??
                (function (e, t) {
                    switch (t) {
                        case dU.NITRO_GEM:
                        case dU.AVATAR_DECO:
                            return dP;
                        case dU.NITRO_LOGO:
                            return e ? "url(#gradient_nitro_logo)" : dP;
                        default:
                            return;
                    }
                })(m, r);
        return (0, A.jsxs)("div", {
            className: dD.Ap,
            children: [
                (0, A.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: dD.fB,
                    children: [
                        (0, A.jsx)("circle", {
                            className: r === dU.NITRO_GEM || r === dU.AVATAR_DECO ? dD.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: l,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: h,
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
                (0, A.jsx)("div", { className: dD.Vw, children: n }),
            ],
        });
    };
var dM = n(104773),
    dU =
        (((i = {})[(i.NITRO_GEM = 0)] = "NITRO_GEM"),
        (i[(i.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (i[(i.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        i);
function dV(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        s = E.useMemo(() => (0, dj.A)({ legacyAssetId: t, skuId: n, size: I._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, A.jsx)("div", {
        className: dM.Q7,
        children: (0, A.jsx)("div", {
            className: dM.Nk,
            children: null != s && (0, A.jsx)("img", { className: dM.CH, alt: i, src: s }),
        }),
    });
}
let dk = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: s,
            progressCircleStrokeSize: l,
            backgroundCircleSize: r,
            percentage: a,
            initialPercentage: o,
            progressCircleVariation: u = 0,
            avatarDecorationLegacyAssetId: d,
            avatarDecorationSkuId: c,
            avatarDecoAssetDescription: g,
            ellipseOpacity: m,
            customAnimationClassName: E,
            circleColor: S,
            circleStroke: x,
        } = e,
        p = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        T = t && !p;
    return (0, A.jsx)("div", {
        className: io()(dM.G3, n),
        children: (0, A.jsx)(dG, {
            animationClassName: io()(dM._0, { [dM.uJ]: T, [E ?? ""]: T }),
            progressCircleStroke: x,
            progressCircleStrokeSize: l,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case 0:
                        return (0, A.jsx)(dL, {
                            className: T ? dM.Ow : void 0,
                            backgroundColor: io()(dM.vH, s),
                            backgroundCircleSize: r,
                        });
                    case 1:
                        return (0, A.jsx)(dR, { circleColor: S, ellipseOpacity: m });
                    case 2:
                        if (null != c)
                            return (0, A.jsx)(dV, {
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
var dw = n(14313);
function dF(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: s } = (0, dN.A)({ userId: t?.id, size: I._3.SIZE_32, animateOnHover: !0 }),
        l = null != t,
        r = l
            ? (0, A.jsx)(f.eu, { src: i, "aria-label": t.username, size: I._3.SIZE_32, ...s })
            : (0, A.jsx)(p.D, { variant: "heading-md/semibold", className: dw.n5, children: n });
    return (0, A.jsx)(ss.m, {
        text: R.intl.string(R.t.UnKHdo),
        shouldShow: !l,
        children: (0, A.jsx)("div", { className: dw.Lg, children: r }),
    });
}
function dB(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, A.jsxs)("div", {
        className: dw.Ip,
        children: [
            (0, A.jsx)("div", { className: dw.Ej }),
            (0, A.jsx)("div", { className: io()({ [dw.ch]: t > n, [dw.q_]: t === n }) }),
        ],
    });
}
function dz(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        s = n < 2 ? null : t[1],
        l = n < 3 ? null : t[2];
    return (0, A.jsxs)("div", {
        className: dw.ZM,
        children: [
            (0, A.jsx)(dF, { userRecord: i, placement: 1 }),
            (0, A.jsx)(dB, { numSentReferrals: n, placement: 1 }),
            (0, A.jsx)(dF, { userRecord: s, placement: 2 }),
            (0, A.jsx)(dB, { numSentReferrals: n, placement: 2 }),
            (0, A.jsx)(dF, { userRecord: l, placement: 3 }),
        ],
    });
}
let dY = function () {
    let e = (0, h.bG)([dy.A], () => dy.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, dv.J)(),
        i = E.useMemo(() => t.map((e) => new dC.A(e)), [t]),
        s = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === db.aK.REDEEMED && s.redeemed++, e === db.aK.CONVERTED && (s.redeemed++, s.converted++));
    });
    let l = s.sent === dv.Z,
        r = eT.A.getArticleURL(S.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, eM.Ay)(tD.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = E.useRef(null),
        u = (s.sent / dv.Z) * 100,
        d = (0, A.jsxs)("div", {
            className: dw.hE,
            children: [
                (0, A.jsx)(dk, { percentage: u, progressCircleVariation: dU.NITRO_LOGO, iconClassName: dw.ER }),
                (0, A.jsxs)("div", {
                    className: dw.Ns,
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-xl/extrabold",
                            className: dw.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return R.intl.string(R.t.USo4s7);
                            })({ hasSentAll: l }),
                        }),
                        (0, A.jsx)(dz, { userRecords: i }),
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? R.intl.format(R.t["TYu+MH"], { helpdeskArticle: i })
                                        : R.intl.format(R.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= dv.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: s }),
                        }),
                        (0, A.jsx)("div", {
                            className: dw.Fb,
                            children: (0, A.jsx)(d_.wL, {
                                "data-migration-pending": !0,
                                className: dw.r$,
                                color: lH.XD.CUSTOM,
                                onClick: () =>
                                    (function (e) {
                                        let { analyticsLocations: t } = e;
                                        (ti.default.track(S.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                            location_stack: t,
                                        }),
                                            (0, sd.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("647658"),
                                                    n.e("618589"),
                                                ]).then(n.bind(n, 168457));
                                                return (n) => (0, A.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                            }));
                                    })({ analyticsLocations: a }),
                                onlyShineOnHover: !0,
                                children: (0, A.jsxs)("div", {
                                    className: dw.Zn,
                                    children: [
                                        (0, A.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: dw.QH,
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
        c = s.redeemed === dv.Z;
    return (0, A.jsx)(eM.f5, {
        value: a,
        children: (0, A.jsx)("div", {
            className: io()(dw.kL, { [dw.AP]: c }),
            children: (0, A.jsx)("div", { ref: o, className: io()(dw.d_, { [dw.kS]: c }), children: d }),
        }),
    });
};
var dX = n(194509),
    dH = n(465794),
    dK = n(774774),
    dW = n(156601),
    dZ = n(297346),
    dq = n(88001),
    dQ = n(148155),
    d$ = n(487518);
let dJ = "to_premium_home_button",
    d0 = "premium home page";
function d1(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: s } = e,
        l = t.hasActiveTrial,
        r = t.planIdFromItems === tH.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, dg.A)(),
        u = null != t.trialEndsAt ? id()(t.trialEndsAt).diff(id()(), "d") : 0,
        d = tH.hd[t.planIdFromItems],
        c = ao.Ay.getDefaultPrice(d.id),
        g = ao.Ay.formatPriceString(c, d.interval);
    if (n || l) {
        let e = (0, dd.M)(s) ? dK.at.PREMIUM_TIER_2_WHITE_FILL : dK.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, A.jsxs)(A.Fragment, {
            children: [
                !l && (r || a)
                    ? (0, A.jsx)(dK.e4, { text: R.intl.string(R.t.EyjDRE), className: d$.LW, colorOptions: e })
                    : (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(dK.HU, {
                                  text: l ? R.intl.string(R.t.qYKftX) : R.intl.string(R.t.EyjDRE),
                                  className: d$.uS,
                                  colorOptions: e,
                              }),
                              (0, A.jsx)("div", { className: d$.on }),
                          ],
                      }),
                (0, A.jsx)(p.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: d$.KB,
                    children: (function () {
                        if (l) return R.intl.format(R.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, dh.$g)(c.amount, c.currency);
                            return R.intl.format(dQ.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? R.intl.format(R.t.z2oQtA, {
                                  percent: i?.percentage ?? tH.Cq,
                                  regularPrice: g,
                                  renewalDate: ao.Ay.getExpectedRenewalDate(t, o),
                              })
                            : R.intl.formatToPlainString(R.t["3ZiutU"], {
                                  percent: i?.percentage ?? tH._$,
                                  regularPrice: g,
                                  numMonths: i?.duration ?? tH.OJ,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, A.jsx)(dW.A, { variant: void 0, subscriptionTier: tH.pe.TIER_2, interval: d.interval });
}
function d2() {
    let e = (0, dS.k5)(),
        t = (0, dS.nf)(),
        n = (0, uB.Ay)(),
        i = (0, h.bG)([oY.A], () => oY.A.getPremiumTypeSubscription()),
        s = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
        l = s?.isPremiumWithPremiumGroup(),
        r = (0, dg.A)(),
        a = (0, dx.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !l) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, A.jsxs)("div", {
        className: io()(d$.$Y, { [d$.J5]: e || d }),
        children: [
            (0, A.jsxs)("div", {
                className: d$.jp,
                children: [
                    l
                        ? (0, A.jsx)(p.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: d$._K,
                              children: (0, dq.DP)(),
                          })
                        : (0, A.jsx)(dE.A, { className: d$.TJ }),
                    l && !e
                        ? (0, A.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, A.jsxs)(A.Fragment, {
                                children: [
                                    (0, A.jsx)(dK.e4, {
                                        text: R.intl.string(R.t.uXF4c4),
                                        className: d$.LW,
                                        colorOptions: dK.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, A.jsx)(p.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: d$.sQ,
                                        children: R.intl.format(R.t.sK7fGl, {
                                            helpCenterLink: eT.A.getArticleURL(S.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, A.jsx)(d1, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, A.jsxs)(A.Fragment, {
                                    children: [
                                        (0, A.jsx)(dK.HU, {
                                            text: R.intl.string(R.t.qYKftX),
                                            className: d$.uS,
                                            colorOptions: (0, dd.M)(n)
                                                ? dK.at.PREMIUM_TIER_2_WHITE_FILL
                                                : dK.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, A.jsx)(p.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: d$.KB,
                                            children: R.intl.format(R.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, A.jsx)(dZ.ZP, {
                        featureSet: s?.isPremiumGroupPrimary()
                            ? dZ.Nz.PREMIUM_GROUP_PRIMARY
                            : s?.isPremiumGroupMember()
                              ? dZ.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? dZ.Nz.FRACTIONAL_PREMIUM
                                : dZ.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, A.jsxs)(lW.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, A.jsx)(dH.A, {
                                      defaultTextOverride: a ? R.intl.string(R.t.YScQSF) : R.intl.string(R.t["0b3YRn"]),
                                  }),
                                  (0, A.jsx)(_.$, {
                                      onClick: () => {
                                          (ti.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: dJ,
                                              target: d0,
                                          }),
                                              (0, tk.default)(),
                                              (0, t1.pX)(S.BVt.APPLICATION_STORE));
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: a ? R.intl.string(R.t.VR2iVB) : R.intl.string(R.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, A.jsxs)(lW.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, A.jsx)(_.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (ti.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: dJ,
                                              target: d0,
                                          }),
                                              (0, tk.default)(),
                                              (0, t1.pX)(S.BVt.APPLICATION_STORE));
                                      },
                                      text: R.intl.string(R.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, A.jsx)(_.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          (ti.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, nr.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL));
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
                className: d$.ah,
                children: (0, A.jsx)("img", { className: d$.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function d3() {
    return (0, A.jsxs)("div", {
        className: d$.T1,
        children: [
            (0, A.jsx)("img", { className: d$.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, A.jsxs)("div", {
                className: d$.b4,
                children: [
                    (0, A.jsx)(p.D, {
                        className: d$.Vz,
                        variant: "heading-xl/extrabold",
                        children: R.intl.string(R.t["3KomGa"]),
                    }),
                    (0, A.jsx)(H.E, {
                        className: d$.Oi,
                        variant: "text-sm/normal",
                        children: R.intl.string(R.t.yQ06u1),
                    }),
                    (0, A.jsx)(dX.A, {
                        className: io()(d$.Tp, d$._c),
                        textOptions: { textOverride: R.intl.string(R.t.Ve9Ge6), textClassName: d$.VV },
                        color: lH.$n.Colors.CUSTOM,
                        onClick: () => {
                            ti.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
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
let d5 = function () {
        let e = (0, o7.Hp)(),
            { analyticsLocations: t } = (0, eM.Ay)(tD.A.PREMIUM_SETTINGS),
            n = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
            i = (0, h.bG)([oY.A], () => oY.A.getPremiumTypeSubscription()),
            s = (0, h.bG)([oY.A], () => oY.A.hasFetchedSubscriptions()),
            l = (0, dm.Y)(tH.T7),
            [r, a] = E.useState(!0),
            o = (0, dg.A)({ forceFetch: !0 }),
            u = (0, h.bG)([uE.A], () => {
                let e = uE.A.getMarketingComponentByType(da.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(oS.Fr || oS.v1) && null != u,
            c = E.useRef(null);
        (0, dI.i)();
        let g = (0, df.m)();
        E.useEffect(() => {
            e8.h.wait(async () => {
                (e || (await Promise.all([oc.hP(), oc.$o(), (0, dc.zS)(null, null, S.tF5.DISCOVERY)])), a(!1));
            });
        }, [e]);
        let [m, x] = E.useState(!1);
        if (e) return (0, A.jsx)(oQ.uK, {});
        let p = s && null !== i && l,
            T = o.fetched && o.isFractionalPremiumActive,
            f = n?.isPremiumWithPremiumGroup();
        if (!p && !T && !r && !f) return (0, A.jsx)(dA.A, { title: R.intl.string(R.t.dyq9TR), note: null });
        if ((!p && !T && !f) || r) return (0, A.jsx)(ol.y, {});
        let I = !!i?.hasActiveTrial;
        return (0, A.jsx)(eM.f5, {
            value: t,
            children: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsxs)(Y.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, A.jsx)(dp.m, { config: u }),
                            (0, A.jsx)(d2, {}),
                            g && (0, A.jsx)(dY, {}),
                            !d && (0, A.jsx)(d3, {}),
                            (0, A.jsx)(dT.A, {
                                hideCTAs: !0,
                                headingOverride: R.intl.string(R.t.dnVvQS),
                                hidePill: !I,
                                selectedPlanColumnClassName: d$.JG,
                                selectedPlanTier: tH.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, A.jsx)(du.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (ti.default.track(S.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                x(!0));
                        },
                        children: (0, A.jsx)("div", { ref: c, className: d$._Z }),
                    }),
                ],
            }),
        });
    },
    d6 = (0, d.E2)(c.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser());
            return (0, ao.YE)(e, tH.PremiumTypes.TIER_2) ? (0, A.jsx)(d5, {}) : (0, A.jsx)(dr.A, {});
        },
        useSearchTerms: () => [R.intl.string(R.t.Ipxkog)],
    }),
    d4 = (0, d.zZ)(c.X.NITRO_CATEGORY, { buildLayout: () => [d6] }),
    d8 = (0, d.t_)(c.X.NITRO_PANEL, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        useObscuredNotice: oi.L,
        buildLayout: () => [d4],
    }),
    d7 = (0, d.i4)(c.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        icon: r4.t,
        usePersistentBadge: function (e) {
            let t = (0, dl.e)(e);
            return E.useMemo(() => ({ badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [d8],
    });
var d9 = n(104510),
    ce = n(820739),
    ct = n(859241),
    cn = n(527113),
    ci = n(338548),
    cs = n(776096),
    cl = n(711014),
    cr = n(178368),
    ca = n(809545),
    co = n(168482);
function cu() {
    return (0, A.jsxs)("div", {
        className: ca.iE,
        children: [
            (0, A.jsx)("img", { className: ca.Kk, alt: "", src: co }),
            (0, A.jsxs)("div", {
                className: ca.pq,
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
                    ((0, t1.pX)(S.BVt.GUILD_DISCOVERY), (0, tk.default)());
                },
            }),
        ],
    });
}
var cd = n(365199),
    cc = n(878678),
    cg = n(443865),
    cm = n(980707),
    cA = n(473145);
function cE(e) {
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
            a === tH.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = R.intl.string(R.t.LiLRRT)),
                (o.cancel.subtext = R.intl.string(R.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = E.useMemo(
        () =>
            l.isPausedOrPausePending && a === tH.xc.NONE
                ? (0, A.jsx)(e6.Dr, {
                      id: "manage-subscription",
                      label: R.intl.string(R.t.obRG6Y),
                      action: () => (0, nr.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: cg.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: cg.LightbulbIcon },
                  })
                : null,
        [a, l],
    );
    return (0, A.jsxs)(cm.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": R.intl.string(R.t.ogxXGq),
        onClose: i,
        children: [
            (0, A.jsx)(e6.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, sd.openModalLazy)(async () => {
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
            (0, cA.I5)(t)
                ? (0, A.jsx)(e6.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, sd.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, A.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, A.jsx)(e6.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, sd.openModalLazy)(async () => {
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
var ch = n(545934),
    cS = n(548118),
    cx = n(987144),
    cp = n(864310),
    cT = n(290413);
function cf(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, cp.A)(t.id);
    return (0, A.jsxs)("div", {
        className: n ?? cT.OA,
        children: [
            (0, A.jsx)(cS.Ay, { className: cT.$f, guild: t, size: cS.Ay.Sizes.MEDIUM }),
            (0, A.jsxs)("div", {
                className: cT.gI,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, A.jsxs)("div", {
                        className: cT.ew,
                        children: [
                            (0, A.jsxs)("div", {
                                className: cT.QW,
                                children: [
                                    (0, A.jsx)(d9._, {
                                        className: cT.Wz,
                                        color: nJ.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
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
                                        (0, A.jsx)("div", { className: cT.zk }),
                                        (0, A.jsx)(H.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, cA.gb)(t.premiumTier, { useLevels: !1 }),
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
function cI(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([sp.A], () => sp.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: cT.Nr,
              children: [
                  (0, A.jsx)(cf, { guild: n }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: d9._,
                      text: R.intl.string(R.t.aBHecF),
                      onClick: () => {
                          (0, cx.g)({
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
var c_ = n(747381);
let cN =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function cC(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: s, isLast: l } = e,
        r = E.useRef(null),
        a = (0, cA.I5)(t),
        o = E.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, dg.A)(),
        c = E.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === S.TVA.NONE) return "";
                    let n = [
                        R.intl.formatToPlainString(R.t["dLlKX/"], { numEmojiSlots: tH.TG[e].limits.emoji }),
                        R.intl.formatToPlainString(R.t["+ANIfv"], { numStickerSlots: tH.TG[e].limits.stickers }),
                        R.intl.formatToPlainString(R.t["4gt60b"], {
                            numSoundboardSlots: tH.TG[e].limits.soundboardSounds,
                        }),
                        R.intl.formatToPlainString(R.t.XahSjZ, {
                            resolution: tH.TG[e].limits.screenShareQualityResolution,
                            framerate: tH.TG[e].limits.screenShareQualityFramerate,
                        }),
                        R.intl.formatToPlainString(R.t.NbNs7S, { bitrate: tH.TG[e].limits.bitrate / 1e3 }),
                        R.intl.formatToPlainString(R.t.VVKcpn, { filesize: tH.TG[e].limits.fileSize / 1024 / 1024 }),
                        R.intl.formatToPlainString(R.t.TbpCvv, { numVideoStageSeats: tH.TG[e].limits.stageVideoUsers }),
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
        g = E.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? oh.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return R.intl.formatToPlainString(R.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = E.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        );
    return (0, A.jsxs)("div", {
        className: io()(c_.iq, { [c_.Mt]: l }),
        children: [
            (0, A.jsxs)("div", {
                className: c_.kd,
                children: [
                    (0, A.jsx)("img", { alt: "", className: c_.bB, src: cN }),
                    a && null != m
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
                                              (0, A.jsx)("div", { className: c_.zk }),
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
                                              (0, A.jsx)("div", { className: c_.zk }),
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
            (0, A.jsx)(al.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, A.jsx)(cE, {
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
                    (0, A.jsx)(n2.D, {
                        innerRef: r,
                        "aria-label": R.intl.string(R.t.PdRCRg),
                        className: c_.Mj,
                        ...e,
                        children: (0, A.jsx)(cd.MoreHorizontalIcon, {
                            size: "xs",
                            color: nJ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function cb(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: s } = e,
        l = (0, h.bG)([sp.A], () => sp.A.getGuild(t), [t]);
    return (0, A.jsxs)("div", {
        className: c_.Nr,
        children: [
            (0, A.jsx)("div", {
                className: c_.MY,
                children:
                    null != l
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(cf, { guild: l, className: c_.OA }),
                                  (0, A.jsx)(_.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(R.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tk.default)(),
                                              (0, cc.K4)({
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
                              className: c_.OA,
                              children: (0, A.jsx)(p.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, A.jsx)(
                    cC,
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
function cy(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = E.useMemo(() => {
            if (s && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let s = n[e];
                            i[e] = s.map((n) =>
                                ch.A.createFromServer(
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
                if ((!(0, cA.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in l || (l[e] = []), l[e].push(i));
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, i, n]);
    if (null == n || 0 === Object.keys(l).length) return null;
    let a = r > ao.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, A.jsx)("div", {
        className: c_.kR,
        children: oh.default
            .keys(l)
            .map((e) => (0, A.jsx)(cb, { guildId: e, slots: l[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var cv = n(502572),
    cj = n(983511),
    cO = n(342744),
    cL = n(496431);
let cR = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, cL.A)(n);
    return (0, A.jsx)(H.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, ic.uN)(i, { days: R.t.WUTPDc, hours: R.t.c1qodV, minutes: R.t["2+A3dv"] }),
    });
};
var cD = n(731536);
function cP(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        s = (0, h.bG)([oY.A], () => oY.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = E.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, cA.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != s ? ao.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && i === tH.xc.NONE;
    return 0 === l.length
        ? null
        : (0, A.jsxs)("div", {
              className: cD.Nr,
              children: [
                  (0, A.jsxs)("div", {
                      className: cD.MY,
                      children: [
                          (0, A.jsxs)("div", {
                              className: cD._L,
                              children: [
                                  (0, A.jsxs)("div", {
                                      className: cD.MD,
                                      children: [
                                          (0, A.jsx)("img", { alt: "", className: cD.F8, src: cN }),
                                          (0, A.jsx)("div", {
                                              className: io()(cD.qS, "theme-dark"),
                                              children: (0, A.jsx)("span", { className: cD.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsxs)("div", {
                                      className: cD.Qp,
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
                          (0, A.jsx)(cv.A, {
                              shouldShow: o,
                              text: R.intl.string(R.t.mOWsF1),
                              "aria-label": R.intl.string(R.t.mOWsF1),
                              children: (e) =>
                                  (0, A.jsx)(_.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: d9._,
                                      text: R.intl.string(R.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, sd.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("677508"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, A.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, cx.g)({
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
                          cG,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, cA.I5)(e),
                              isCanceled: (0, cA.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function cG(e) {
    let t,
        { slot: n, isLast: i, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = E.useRef(null),
        u = E.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, A.jsx)(H.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: R.intl.format(R.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != u
              ? (0, A.jsx)(cR, { cooldown: u.getTime() })
              : (0, A.jsx)(H.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R.intl.string(R.t["2mcafz"]),
                });
    let d = s || l;
    return (0, A.jsxs)("div", {
        className: io()(cD.iq, { [cD.Mt]: i }),
        children: [
            (0, A.jsxs)("div", {
                className: cD.kd,
                children: [(0, A.jsx)("img", { alt: "", className: cD.bB, src: cN }), t],
            }),
            d &&
                (0, A.jsx)(al.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, A.jsxs)(cm.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": R.intl.string(R.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, A.jsx)(e6.Dr, {
                                        id: "cancel-boost",
                                        label: R.intl.string(R.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? R.intl.string(R.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sd.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(cj.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                l &&
                                    (0, A.jsx)(e6.Dr, {
                                        id: "uncancel-boost",
                                        label: R.intl.string(R.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? R.intl.string(R.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, sd.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(cO.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, A.jsx)(n2.D, {
                            innerRef: o,
                            "aria-label": R.intl.string(R.t["UKOtz+"]),
                            className: cD.Mj,
                            ...e,
                            children: (0, A.jsx)(cd.MoreHorizontalIcon, {
                                size: "xs",
                                color: nJ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var cM = n(834612);
function cU(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && l !== tH.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, A.jsxs)("div", {
              className: cM.i,
              children: [
                  (0, A.jsxs)("div", {
                      className: cM.b,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.W5rDjW) }),
                          (0, A.jsx)(H.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: R.intl.format(R.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(cy, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, A.jsx)(cP, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var cV = n(333722),
    ck = n(9146);
function cw() {
    return (0, A.jsxs)("div", {
        className: ck.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.IzKs3o) }),
            (0, A.jsx)("div", {
                className: ck.kR,
                children: cV.s.map((e, t) => {
                    let n = e.icon;
                    return (0, A.jsxs)(
                        "div",
                        {
                            className: ck.Nr,
                            children: [
                                (0, A.jsx)(n, { className: ck.Kk }),
                                (0, A.jsx)(H.E, {
                                    className: ck.h_,
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
var cF = n(847374),
    cB = n(232122),
    cz = n(665984);
function cY() {
    let [e, t] = E.useState(null),
        [n, i] = E.useState(null);
    return (0, A.jsxs)("div", {
        className: cz.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.HPJ6Nj) }),
            (0, A.jsx)("ul", {
                className: cz.p_,
                children: cB.m.map((s, l) => {
                    let r = e === l,
                        a = n === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, A.jsxs)(
                        n2.D,
                        {
                            tag: "li",
                            className: io()(cz.Aw, { [cz.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => i(l),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, A.jsxs)("div", {
                                    className: cz.k7,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            className: cz.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, A.jsx)(cF.a, {
                                            size: "sm",
                                            color: nJ.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: cz.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsx)(H.E, {
                                        className: cz.ZF,
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
var cX = n(182859),
    cH = n(25525),
    cK = n(416763);
function cW() {
    let e = eT.A.getArticleURL(S.MVz.GUILD_SUBSCRIPTIONS);
    return (0, A.jsxs)("div", {
        className: cK.wx,
        children: [
            (0, A.jsxs)("div", {
                className: cK.Qs,
                children: [
                    (0, A.jsxs)("div", {
                        className: cK.B5,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: cK.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(cH.default.hjvcLO),
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
            (0, A.jsx)(cX.A, {
                variant: "member",
                className: cK.iO,
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
var cZ = n(315629),
    cq = n(87719),
    cQ = n(961085);
function c$() {
    let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser());
    if (null == e || ao.Ay.hasFreeBoosts(e)) return null;
    let t = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(cZ.h, {
        color: "nitro-pink",
        className: cQ.vK,
        children: [
            (0, A.jsxs)("div", {
                className: cQ.nw,
                children: [
                    (0, A.jsx)("img", { alt: "", className: cQ.q3, src: cN }),
                    (0, A.jsxs)("div", {
                        className: cQ.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.Idh1Vs, { count: tH.M4, boostCount: tH.M4 }),
                            }),
                            (0, A.jsxs)("div", {
                                className: cQ.xv,
                                children: [
                                    (0, A.jsx)(r4.t, { className: cQ.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tH.M4,
                                            boostCount: tH.M4,
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
                icon: r4.t,
                text: R.intl.string(R.t["8x0jKT"]),
                onClick: cq.e,
            }),
        ],
    });
}
var cJ = n(532991);
function c0() {
    let e = (0, h.bG)([cs.A], () => cs.A.affinities),
        t = (0, h.bG)([cl.Ay], () => cl.Ay.getFlattenedGuildIds()),
        n = E.useMemo(() => {
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
              className: cJ.i,
              children: [
                  (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.r90Wgo) }),
                  (0, A.jsx)("div", { className: cJ.k, children: n.map((e) => (0, A.jsx)(cI, { guildId: e }, e)) }),
              ],
          });
}
var c1 = n(967246);
function c2(e) {
    let { count: t, disabledReason: i } = e,
        s = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(cZ.h, {
        color: "nitro-pink",
        className: c1.vK,
        children: [
            (0, A.jsxs)("div", {
                className: c1.nw,
                children: [
                    (0, A.jsxs)("div", {
                        className: c1.MD,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: c1.F8, src: cN }),
                            (0, A.jsx)("div", {
                                className: io()(c1.qS, "theme-dark"),
                                children: (0, A.jsx)("span", { className: c1.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: c1.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, A.jsxs)("div", {
                                className: c1.xv,
                                children: [
                                    (0, A.jsx)(r4.t, { className: c1.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tH.M4,
                                            boostCount: tH.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)(cv.A, {
                shouldShow: null != i,
                text: i ?? "",
                "aria-label": i,
                children: (e) =>
                    (0, A.jsx)(_.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: d9._,
                        text: R.intl.string(R.t.BMx1iy),
                        disabled: null != i,
                        onClick: () => {
                            (0, sd.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("677508"), n.e("418710")]).then(
                                    n.bind(n, 770101),
                                );
                                return (t) =>
                                    (0, A.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            (t.onClose(),
                                                (0, cx.g)({
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
    });
}
var c3 = n(89150);
function c5(e) {
    let { premiumSubscription: t } = e,
        n = (0, h.bG)([cr.A], () => cr.A.boostSlots),
        i = E.useMemo(() => Object.values(n), [n]),
        s = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
        l = (0, h.bG)([cs.A], () => cs.A.affinities),
        r = (0, h.bG)([cl.Ay], () => cl.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = E.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]).length,
        u = (0, h.bG)([ct.A], () => ct.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, dg.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        g = t?.isPausedOrPausePending === !0 && d === tH.xc.NONE,
        m = E.useMemo(() => i.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [i]),
        S = g ? R.intl.string(R.t.mOWsF1) : m ? void 0 : R.intl.string(R.t.xr4m5B),
        x = E.useMemo(() => {
            if (null == t) return 0;
            let e = ao.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : Math.max(0, e - o);
        }, [t, i.length, o]);
    return (0, A.jsxs)("div", {
        className: c3.GO,
        children: [
            (0, A.jsx)(oQ.kb, { className: c3.ek }),
            (0, A.jsx)(cW, {}),
            (0, A.jsx)(c$, {}),
            x > 0 && (0, A.jsx)(c2, { count: x, disabledReason: S }),
            c && (0, A.jsx)(ci.A, {}),
            !a && (0, A.jsx)(cu, {}),
            (0, A.jsxs)("div", {
                className: c3.C_,
                children: [
                    (0, A.jsx)(cU, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, A.jsx)(c0, {}),
                    (0, A.jsx)(cn.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, A.jsx)(cw, {}),
                    (0, A.jsx)(cY, {}),
                ],
            }),
        ],
    });
}
var c6 = n(819677);
let c4 = (0, d.E2)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            E.useEffect(() => {
                e8.h.wait(() => {
                    (oc.hP(), oc.$o(), (0, ce.CD)(), (0, dc.zS)(null, null, S.tF5.DISCOVERY), (0, ce.tO)(!0));
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, h.cf)([oY.A], () => ({
                    hasFetchedSubscriptions: oY.A.hasFetchedSubscriptions(),
                    premiumSubscription: oY.A.getPremiumTypeSubscription(),
                })),
                n = (0, dm.Y)(),
                i = (0, h.bG)([oz.A], () => oz.A.hasFetchedPaymentSources),
                s = (0, h.bG)([ct.A], () => ct.A.isFetchingCurrentUserAppliedBoosts),
                l = !e || !n || !i || s,
                [r, a] = E.useState(!1);
            return (l || r || a(!0), l && !r)
                ? (0, A.jsx)("div", { className: io()(c6.kL, c6.Lq), children: (0, A.jsx)(ol.y, {}) })
                : (0, A.jsxs)("div", {
                      className: c6.kL,
                      children: [
                          (0, A.jsx)("div", { className: c6.Tp }),
                          (0, A.jsx)("div", { className: c6.Qs, children: (0, A.jsx)(c5, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t["+CbP2v"]), R.intl.string(R.t.Nn1lJy)],
    }),
    c8 = (0, d.zZ)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [c4] }),
    c7 = (0, d.t_)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        buildLayout: () => [c8],
    }),
    c9 = (0, d.i4)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        icon: d9._,
        buildLayout: () => [c7],
    });
var ge = n(153659),
    gt = n(155984),
    gn = n(357758),
    gi = n(262077),
    gs = n(281445),
    gl = n(933832),
    gr = n(624479),
    ga = n(626584),
    go = n(131607),
    gu = n(95035),
    gd = n(196736),
    gc = n(685743),
    gg = n(349085),
    gm = n(342942),
    gA = n(376205),
    gE = n(252589),
    gh = n(758836),
    gS = n(49999),
    gx = n(394107),
    gp = n(439050);
let gT = new ga.A("GameServerSubscriptionsSection");
function gf(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function gI(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let g_ = E.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: s } = (0, eM.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, gg.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, go.kn)([eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = uO.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, gc.A)(c, t.id, tD.A.GAME_SERVER_PAGE, t.serverIp),
        x = E.useCallback(() => {
            (0, gm.A)({
                provider: gs.X.SHOCKBYTE,
                onAccept: () => {
                    (u(gS.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: p,
            priceLabel: T,
            dateLabel: f,
            isCanceled: I,
            isDanger: N,
        } = (0, h.bG)(
            [oY.A, uR.A],
            () => {
                let e = null != l ? oY.A.getSubscriptionById(l) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? uR.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? R.intl.formatToPlainString(R.t.AbOLNu, { price: (0, dh.$g)(u, o.priceCurrency) })
                            : null,
                    c = gf(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? R.intl.formatToPlainString(gx.default["3aEgK6"], { date: c })
                        : s
                          ? R.intl.formatToPlainString(gx.default.KFSA3M, { date: c })
                          : R.intl.formatToPlainString(gx.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, n, i],
            gI,
        ),
        C = E.useCallback(() => {
            if (null == l) return;
            let e = oY.A.getSubscriptionById(l),
                t = null != e ? gf(e.currentPeriodEnd) : "";
            (0, n0.A)({
                title: R.intl.string(gx.default.TEYPNR),
                subtitle: R.intl.formatToPlainString(gx.default.XR1WrB, { date: t }),
                confirmText: R.intl.string(R.t["cY+Oob"]),
                cancelText: R.intl.string(gx.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oc.M2(l, s), await oc.hP());
                    } catch (e) {
                        gT.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        b = E.useCallback(() => {
            if (null == l) return;
            let e = oY.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? uR.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, dh.$g)(u, o.priceCurrency) : "",
                c = gf(e.currentPeriodEnd);
            (0, n0.A)({
                title: R.intl.string(gx.default.o96qbc),
                subtitle: R.intl.formatToPlainString(gx.default["7n6Qq+"], { price: d, date: c }),
                confirmText: R.intl.string(R.t.iIvF2z),
                cancelText: R.intl.string(R.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, dc.ur)(r);
                        let t = e.items;
                        (await oc.nV(
                            e,
                            { status: S.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, ao.UC)(t, e.currency),
                            s,
                        ),
                            await oc.hP());
                    } catch (e) {
                        gT.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, A.jsxs)("div", {
        className: gp.nM,
        children: [
            (0, A.jsxs)("div", {
                className: gp.M4,
                children: [
                    (0, A.jsxs)("div", {
                        className: gp.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, A.jsx)("img", { className: gp.uP, src: a, alt: "" }),
                            (0, A.jsx)("div", { className: gp.tw }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: gp.CR,
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
                                          className: gp.CQ,
                                          children: [
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, A.jsx)(n2.D, {
                                                  className: gp.cL,
                                                  onClick: g,
                                                  "aria-label": R.intl.string(R.t.OpuAlK),
                                                  children: m
                                                      ? (0, A.jsx)(gl.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, A.jsx)(gr.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, A.jsx)(gu.A, { onClick: x, children: R.intl.string(gx.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: gp.Rd,
                children: [
                    (0, A.jsxs)("div", {
                        className: gp.Ff,
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
                                          className: gp.ez,
                                          children: [
                                              (0, A.jsx)(iW.E, { size: "xs", color: "text-feedback-critical" }),
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
function gN(e) {
    let { servers: t } = e,
        n = (0, gd.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, gE.Y)(),
        s = (0, h.bG)([lu.default], () => ao.Ay.canUseShopDiscounts(lu.default.getCurrentUser())),
        l = E.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, h.yK)([oY.A], () => (0, gA.HY)(t, i, (e) => oY.A.getSubscriptionById(e)), [t, i]);
    E.useEffect(() => {
        let e = r.filter((e) => !uR.A.isLoadedForSKU(e) && !uR.A.isFetchingForSKU(e));
        e.length > 0 && (0, dc.jv)(e).catch(() => {});
    }, [r]);
    let a = E.useCallback(() => {
        ((0, tk.default)(), (0, t1.pX)(S.BVt.COLLECTIBLES_SHOP_WITH_TAB(gh.G2.GAME_SERVERS)));
    }, []);
    return (0, A.jsxs)("div", {
        className: gp.uW,
        children: [
            (0, A.jsxs)("div", {
                className: gp.wx,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: R.intl.string(gx.default.vCzwM7),
                    }),
                    (0, A.jsxs)("div", {
                        className: gp.h_,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.string(gx.default.y85Eg9),
                            }),
                            n &&
                                (0, A.jsx)(gu.A, {
                                    onClick: a,
                                    children: (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: R.intl.string(gx.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", {
                className: gp.p_,
                children: t.map((e) =>
                    (0, A.jsx)(g_, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var gC = n(55766),
    gb = n(696986),
    gy = n(364036);
function gv(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["KzCF/6"]) }),
            (0, A.jsx)(gb.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: gy.yV, children: R.intl.string(R.t["3D7qCu"]) }),
            (0, A.jsx)(gb.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: gy.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: gy.RI }),
                    (0, A.jsxs)("div", {
                        className: gy.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: gy.wx,
                                children: R.intl.string(R.t["KzCF/6"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: gy.h_,
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
var gj = n(872351),
    gO = n(9113),
    gL = n(599941),
    gR = n(384684),
    gD = n(2242);
let gP = [];
var gG = n(885574),
    gM = n(912851),
    gU = n(182744);
let gV = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, A.jsx)(n2.D, {
        onClick: i ? void 0 : n,
        className: gU.x6,
        children: (0, A.jsxs)("div", {
            className: gU.hQ,
            children: [
                i
                    ? (0, A.jsx)(ol.y, { type: ol.y.Type.PULSING_ELLIPSIS, className: gU.__invalid_spinner })
                    : (0, A.jsx)(H.E, { variant: "text-md/medium", className: gU.Pf, children: t }),
                (0, A.jsx)(cF.a, { size: "md", color: "currentColor", className: gU.UE }),
            ],
        }),
    });
};
var gk = n(465932),
    gw = n(543767),
    gF = n(951555),
    gB = n(790284),
    gz = n(636194),
    gY = n(624456),
    gX = n(710144),
    gH = n(815332),
    gK = n(162093),
    gW = n(557506);
function gZ(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: s, onClose: l } = e,
        r = (0, tB.GV)(),
        { analyticsLocations: a } = (0, eM.Ay)(tD.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = E.useState(!1),
                [i, s] = E.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return (n(!0), await oc.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === gD.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === gD.bN.INTANGIBLE),
        h = id()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        S = R.intl.formatToPlainString(R.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: h,
        });
    return (0, A.jsx)(su.a, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: R.intl.string(R.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: R.intl.string(R.t.F6lUDF), onClick: c, loading: d },
        ],
        title: R.intl.string(R.t.O6l5tM),
        subtitle: S,
        onClose: l,
        children: (0, A.jsxs)(Y.B, {
            gap: 8,
            children: [
                null != u ? (0, A.jsx)(iX.w, { type: "critical", children: u.message }) : null,
                (0, A.jsx)(gK.x, { listingId: i.id, guildId: n.guild_id, className: gW.P }),
            ],
        }),
    });
}
var gq = n(319225),
    gQ = n(746080),
    g$ = n(883616);
function gJ(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
    return (0, A.jsxs)("div", {
        className: g$.L0,
        children: [
            (0, A.jsxs)("div", {
                className: g$.a5,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-deprecated-12/semibold", className: g$.HU, children: t }),
                    i &&
                        (0, A.jsx)(ss.m, {
                            text: s,
                            children: (0, A.jsx)(gG.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: g$.Mo,
                            }),
                        }),
                ],
            }),
            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", className: g$.sx, children: n }),
        ],
    });
}
function g0(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eM.Ay)(),
        [i] = (0, gw.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tD.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [s, l] = (0, h.yK)([oz.A], () => [oz.A.hasFetchedPaymentSources, oz.A.paymentSourceFetchError]);
    return null != i && (s || l)
        ? (0, A.jsx)(gF.A, { subscription: t, currentInvoicePreview: i })
        : (0, A.jsx)(ol.y, {});
}
function g1(e) {
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
        : (0, A.jsx)(tJ.D, {
              label: R.intl.string(R.t["4neDM+"]),
              children: (0, A.jsx)("div", {
                  className: g$.__invalid_rowButtons,
                  children: n
                      ? (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.y3mAE4), onClick: r, loading: i })
                      : (0, A.jsxs)(A.Fragment, {
                            children: [
                                !t && !s && (0, A.jsx)(gV, { label: R.intl.string(R.t.FRbWR8), onClick: a }),
                                (0, A.jsx)(gV, { label: R.intl.string(R.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let g2 = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, gY.M)(e),
                n = (0, h.bG)([gz.A], () => gz.A.getSubscriptionListingForPlan(t)),
                i = (0, h.bG)([gz.A], () =>
                    null != n ? gz.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                s = (0, h.bG)([sp.A], () => sp.A.getGuild(i?.guild_id)),
                [l, r] = E.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, gL.XE)();
            E.useEffect(() => {
                l && null != s && null == gz.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = id()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, dh.$g)(t.price, t.currency) : "",
                              s = id()(t.createdAt).format("M/D/YY"),
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
        [o, u] = E.useState(!1),
        d = (0, tB.GV)(),
        { analyticsLocations: g } = (0, eM.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: m } = (0, gk.MH)(s?.id),
        x = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function p() {
        try {
            (u(!0),
                await oc.QP(t, g),
                (0, gq.E)({ title: R.intl.string(R.t.oPV2cy), body: R.intl.string(R.t.DdRizV) }));
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
        className: g$.kL,
        children: [
            (0, A.jsx)(gX.A, {
                onClick: r,
                className: g$.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [
                            null != s && (0, A.jsx)(cS.Ay, { guild: s, active: !0, size: cS.Ay.Sizes.MEDIUM }),
                            (0, A.jsxs)("div", {
                                className: g$.if,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        className: g$.J5,
                                        children: null != s ? s.name : R.intl.string(R.t["He+cmd"]),
                                    }),
                                    (0, A.jsxs)("div", {
                                        className: g$.xp,
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-sm/normal",
                                                className: g$.KR,
                                                children: n.name,
                                            }),
                                            T
                                                ? (0, A.jsx)(ts.Lp, { text: R.intl.string(R.t["7uFZGt"]) })
                                                : b
                                                  ? (0, A.jsx)(ts.Lp, {
                                                        text: R.intl.string(R.t["6anton"]),
                                                        color: nJ.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : f
                                                    ? (0, A.jsx)(ss.m, {
                                                          text: R.intl.string(R.t.eSuJE2),
                                                          children: (0, A.jsx)("div", {
                                                              children: (0, A.jsx)(ts.Lp, {
                                                                  className: g$.qc,
                                                                  text: R.intl.string(R.t.NrRwIl),
                                                                  color: nJ.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            x
                                                ? (0, A.jsx)(ss.m, {
                                                      text: R.intl.string(R.t.nv1IqK),
                                                      children: (0, A.jsx)("div", {
                                                          children: (0, A.jsx)(ts.Lp, {
                                                              text: R.intl.string(R.t["sBl3X/"]),
                                                              color: nJ.A.colors.BACKGROUND_MOD_MUTED.css,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, A.jsx)(n2.D, {
                                onClick: i(r),
                                "aria-label": R.intl.string(R.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, A.jsx)(cF.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: io()(g$.D6, { [g$.S7]: l }),
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
                          (0, A.jsx)("div", { className: g$.yF }),
                          (0, A.jsx)(gH.A, { groupListingId: i.id, subscription: t, className: g$.kE }),
                          (0, A.jsxs)("div", {
                              className: g$.Zx,
                              children: [
                                  (0, A.jsx)(gJ, { label: C, value: N }),
                                  (0, A.jsx)(gJ, {
                                      label: R.intl.string(R.t.dltUMH),
                                      value: I,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? R.intl.string(R.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, A.jsx)(gJ, { label: R.intl.string(R.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, A.jsx)(gb.h, { size: 16 }),
                          !T &&
                              !x &&
                              (0, A.jsx)(tJ.D, {
                                  label: R.intl.string(R.t.wmMFvA),
                                  children: (0, A.jsx)(g0, { subscription: t }),
                              }),
                          !y &&
                              (0, A.jsx)(g1, {
                                  isTrial: b,
                                  isCancelled: T,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: m,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, sd.openModal)((t) => (0, A.jsx)(gZ, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, t1.pX)(S.BVt.CHANNEL(s.id, gQ.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tk.default)(),
                                          gM.A.show(
                                              S.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              R.intl.string(R.t.DvbaM4),
                                              () => {
                                                  (gB.A.setState({ subsection: eC.nR }),
                                                      (0, nr.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL));
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
var g3 = n(661097);
let g5 = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, h.bG)([gR.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [gR.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? gD.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? gD.M_.NONE
                                  : gD.M_.IN_SUBSCRIPTION_SERVER;
                        })([gR.A]),
                    ) === gD.M_.SUBSCRIBED,
                n = (0, h.bG)([oY.A], () => oY.A.getActiveGuildSubscriptions()),
                i = E.useRef(!1);
            return (
                E.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            s = oY.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !oY.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oc.hP());
                }, [e, t]),
                n ?? gP
            );
        })(),
        { loading: i } = (0, gL.eb)(n);
    return ((0, gO.A)(oS.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, A.jsx)(ol.y, {})
        : 0 === n.length
          ? null
          : (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(_.$, { text: R.intl.string(R.t.hqyhKQ), icon: gj.z, variant: "secondary", onClick: t }),
                    (0, A.jsx)(gb.h, { size: 10 }),
                    (0, A.jsx)(n1.n, {
                        label: R.intl.string(R.t["KzCF/6"]),
                        description: R.intl.string(R.t["Y+ucR7"]),
                        children: (0, A.jsx)("div", {
                            className: g3.A,
                            children: n.map((e) => (0, A.jsx)(g2, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var g6 = n(327479),
    g4 = n(932012);
function g8(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["48ywCu"]) }),
            (0, A.jsx)(gb.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: g4.yV, children: R.intl.string(R.t.VWxmSo) }),
            (0, A.jsx)(gb.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: g4.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: g4._e }),
                    (0, A.jsxs)("div", {
                        className: g4.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: g4.wx,
                                children: R.intl.string(R.t["48ywCu"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: g4.h_,
                                children: R.intl.format(R.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(g6.A, { onClick: t, text: R.intl.string(R.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var g7 = n(548411),
    g9 = n(417098),
    me = n(143582),
    mt = n(915043),
    mn = n(631466);
function mi(e) {
    let { className: t, header: n, headerClassName: i, children: s } = e,
        l = E.useMemo(() => {
            let e = !1;
            return (
                E.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, A.jsxs)("div", {
        className: io()(mn.iE, t),
        children: [
            (0, A.jsx)("div", { className: io()(mn.wx, i), children: n }),
            l && (0, A.jsx)("div", { className: mn.Qs, children: s }),
        ],
    });
}
var ms = n(885996),
    ml = n(144165),
    mr = n(664121),
    ma = n(950305),
    mo = n(943775),
    mu = n(123791),
    md = n(900797),
    mc = n(611643);
let mg = E.createContext({ isOpen: !1, toggleOpen: () => {} });
function mm(e) {
    let { children: t } = e,
        [n, i] = E.useReducer((e) => !e, !1),
        s = E.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, A.jsx)(mg.Provider, { value: s, children: t(n) });
}
mm.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: s } = E.useContext(mg),
        l = i ? md.t : cF.a,
        r = null != n ? n : i ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.XJuakA);
    return (0, A.jsxs)(n2.D, {
        className: io()(mc.L, t),
        onClick: s,
        children: [
            (0, A.jsx)(H.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, A.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var mA = n(627363),
    mE = n(243217),
    mh = n(328968),
    mS = n(163437),
    mx = n(3432);
function mp(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var mT = n(562312),
    mf = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function mI(e) {
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
        } = (0, h.cf)(
            [uR.A, uD.A, mh.A, sp.A],
            () => {
                let e,
                    n = uR.A.get(r),
                    i = null != n ? uD.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? mh.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, mS.PJ)(o.skuFlags),
                    d = u && null != s ? sp.A.getGuild(s) : void 0,
                    c = (0, mS.Uo)(t, i),
                    g = u && null != s && null == d;
                if (!1 === c && null != l && l.items.length > 0) {
                    let t = l.items[0];
                    e = uR.A.get(t.planId) ?? void 0;
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
        { data: f } = (0, mA.YY)(a),
        I = E.useMemo(() => (null != f ? (0, mo.A)(f, 100) : null), [f]),
        _ = g?.deleted ?? !1,
        N = null != g && (0, mS.Se)(g),
        C = t.status === S.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eM.Ay)(),
        [y] = (0, gw.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tD.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = mp(t.currentPeriodEnd),
        j = 0 === i;
    return (0, A.jsxs)(mi, {
        headerClassName: mT.dL,
        header:
            !1 === j
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsxs)("div", {
                              className: mT.VW,
                              children: [
                                  null != I &&
                                      (0, A.jsx)(ml._, { src: I.href, imageClassName: mT.Z2, width: 40, height: 40 }),
                                  (0, A.jsxs)("div", {
                                      className: mT.aF,
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
                              className: mT.Pz,
                              children:
                                  null != f &&
                                  null != u &&
                                  null != g &&
                                  (0, A.jsx)(my, {
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
                : (0, A.jsx)(ol.y, { type: ol.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, A.jsx)(mb, {
                    type: "warning",
                    title: N
                        ? R.intl.formatToPlainString(R.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : R.intl.formatToPlainString(R.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && x && (0, A.jsx)(mb, { type: "warning", title: R.intl.string(R.t.SmSP8Q) }),
            C && (0, A.jsx)(mb, { type: "danger", title: R.intl.string(R.t.fvOqBo) }),
            (0, A.jsxs)("div", {
                className: mT.zH,
                children: [
                    (0, A.jsx)(mC, {
                        title: R.intl.string(R.t["5D/KEH"]),
                        content: d
                            ? (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsxs)("span", {
                                          className: mT.yW,
                                          children: [(0, A.jsx)(mr.R, { size: "xs" }), R.intl.string(R.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, A.jsxs)("span", {
                                              className: mT._t,
                                              children: [
                                                  (0, A.jsx)(H.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: R.intl.format(R.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, A.jsx)(cS.Ay, { guild: c, size: cS.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, A.jsxs)("span", {
                                  className: mT.yW,
                                  children: [(0, A.jsx)(ma.UserIcon, { size: "xs" }), R.intl.string(R.t["6anEVv"])],
                              }),
                    }),
                    (0, A.jsx)(m_, { invoicePreview: y, subscriptionPlan: o }),
                    (0, A.jsx)(mC, {
                        title: R.intl.string(R.t.dnUzb6),
                        content: mp(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, A.jsx)(mN, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: T }),
                ],
            }),
            (0, A.jsx)(mj, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: _,
                isCancelled: m,
            }),
            null != f &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, A.jsx)(mv, { appId: f.id, listingBenefits: u.benefits }),
        ],
    });
}
function m_(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, A.jsx)(mC, { title: R.intl.string(R.t.KI7ERx), content: "" });
    let i = (0, dh.CE)((0, dh.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = n?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, A.jsx)(mC, { title: R.intl.string(R.t.KI7ERx), content: i });
    let l = (0, dh.CE)((0, dh.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, A.jsx)(mC, {
        title: R.intl.string(R.t.KI7ERx),
        content: (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: l }),
                l !== i &&
                    (0, A.jsx)(ss.m, {
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
function mN(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, dh.CE)((0, dh.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, A.jsx)(mC, {
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
    return (0, A.jsx)(mC, { title: t ? R.intl.string(R.t.enxcAl) : R.intl.string(R.t["Ms+6Zq"]), content: n });
}
function mC(e) {
    let { title: t, content: n } = e;
    return (0, A.jsxs)("div", {
        className: mT.nM,
        children: [
            (0, A.jsx)(H.E, { variant: "text-sm/medium", children: t }),
            (0, A.jsx)(H.E, { variant: "text-sm/medium", className: mT.u4, children: n }),
        ],
    });
}
function mb(e) {
    let { type: t, title: n } = e;
    return (0, A.jsx)(r8.p, {
        messageType: "warning" === t ? r8.Y.WARNING : r8.Y.ERROR,
        className: mT.Xm,
        children: (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
    });
}
function my(e) {
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
        c = (0, mS.Se)(s),
        { analyticsLocations: g } = (0, eM.Ay)(),
        [m, S] = E.useState(!1),
        x = (0, mu.C)(t.id),
        p = (0, h.bG)([uD.A], () => uD.A.getParentSKU(i.skuId), [i.skuId]),
        T = E.useMemo(() => {
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
            let { subscription: e } = await (0, oc.QP)(l, g);
            if (null == e) return;
            (0, sd.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, A.jsx)(t, { ...n, storeListing: i, subscription: mE.A.createFromServer(e) });
            });
        } finally {
            S(!1);
        }
    }
    return (0, A.jsxs)("div", {
        className: mT.fw,
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
                            (0, sd.openModalLazy)(async () => {
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
function mv(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, A.jsx)(mm, {
        children: (e) =>
            (0, A.jsxs)("div", {
                className: mT.PX,
                children: [
                    (0, A.jsxs)("div", {
                        className: mT.wV,
                        children: [
                            e && (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: R.intl.string(R.t.mORL67) }),
                            (0, A.jsx)(mm.Toggle, {
                                className: mT.Bh,
                                text: e ? R.intl.string(R.t.gsbFAw) : R.intl.string(R.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, A.jsx)(ms.FY, { header: i, icon: (0, mx.N)(t, l), description: s }, n);
                          })
                        : null,
                ],
            }),
    });
}
function mj(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: s, isCancelled: l } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, A.jsx)("div", {
                className: mT.Ji,
                children: (0, A.jsx)(tJ.D, {
                    label: R.intl.string(R.t.azZaZa),
                    children: (0, A.jsx)(ol.y, { type: ol.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, A.jsx)("div", {
                  className: mT.Ji,
                  children: (0, A.jsxs)(g9.$T, {
                      color: g9.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          R.intl.format(R.t.IIHUUF, { subscriptionId: t.id }),
                          (0, A.jsx)("br", {}),
                          R.intl.format(R.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, A.jsx)("div", {
                  className: mT.Ji,
                  children: (0, A.jsx)(tJ.D, {
                      label: R.intl.string(R.t.azZaZa),
                      children: (0, A.jsx)(gF.A, { subscription: t, currentInvoicePreview: n, disabled: s || l }),
                  }),
              });
}
var mO = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
n(938796);
var mL = n(38405);
let mR = (0, h.UT)(uR.A, {
    getQueryId: S.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = uR.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && mL.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, dc.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var mD = n(240248),
    mP = n(237218),
    mG = n(763064);
function mM(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [s, l] = E.useState(!1),
        [r, a] = E.useState(null),
        o =
            null != r &&
            (0, A.jsx)("button", {
                className: mG.x6,
                onClick: () => l((e) => !e),
                children: (0, A.jsxs)(H.E, {
                    className: mG.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? R.intl.string(R.t["JQX/Pb"]) : R.intl.string(R.t.Fbrd8J),
                        s
                            ? (0, A.jsx)(md.t, { color: nJ.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, A.jsx)(cF.a, { color: nJ.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = E.useState(null),
        c = E.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    E.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let g = "auto";
    return (
        null != r && (g = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, A.jsxs)("div", {
            children: [
                (0, A.jsx)(H.E, {
                    ...i,
                    className: mG.Qs,
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
var mU = n(920352);
function mV(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: s, benefits: l, description: r } = n,
        a = E.useMemo(() => (null == n.thumbnail ? null : (0, mP.t)(s, n.thumbnail, 256)), [s, n.thumbnail]),
        { data: o } = mR(n.skuId),
        u = E.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dh._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, A.jsxs)(mi, {
              className: io()(mU.iE, i),
              header: (0, A.jsxs)(A.Fragment, {
                  children: [
                      (0, A.jsxs)("div", {
                          className: mU.qd,
                          children: [
                              null != a &&
                                  (0, A.jsx)(ml._, { src: a.href, imageClassName: mU.rW, width: 48, height: 48 }),
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
                  !(0, mD.uJ)(r) &&
                      (0, A.jsx)("div", {
                          className: mU.h_,
                          children: (0, A.jsx)(mM, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, A.jsx)("div", {
                          className: mU.PX,
                          children: l.map((e) => {
                              let { id: t, name: n, description: i, icon: l } = e;
                              return (0, A.jsx)(ms.FY, { header: n, icon: (0, mx.N)(s, l), description: i }, t);
                          }),
                      }),
              ],
          });
}
var mk = n(185438),
    mw = n(683380);
function mF(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, mo.A)(t, 100),
        u = (0, mS.PJ)(r.flags),
        d = u ? mr.R : ma.UserIcon,
        c = u ? R.intl.string(R.t["46YF2D"]) : R.intl.string(R.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, h.bG)([sp.A], () => (u && null != g ? sp.A.getGuild(g) : void 0), [g, u]),
        E = (0, h.bG)(
            [uD.A],
            () => {
                if (null != a) return uD.A.get(a);
            },
            [a],
        ),
        S = mp(n.currentPeriodEnd);
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsxs)("div", {
                className: mw.wx,
                children: [
                    null != o && (0, A.jsx)(ml._, { src: o.href, imageClassName: mw.Z2, width: 48, height: 48 }),
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, A.jsxs)("div", {
                                className: mw.p4,
                                children: [
                                    (0, A.jsxs)(p.D, {
                                        variant: "heading-md/normal",
                                        className: mw.N4,
                                        children: [(0, A.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, A.jsxs)(A.Fragment, {
                                            children: [
                                                (0, A.jsx)(H.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, A.jsxs)("span", {
                                                    className: mw.vP,
                                                    children: [
                                                        (0, A.jsx)(cS.Ay, { guild: m, size: cS.Ay.Sizes.SMOL }),
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
            (0, A.jsx)(mm, {
                children: (e) =>
                    (0, A.jsxs)("div", {
                        className: mw._B,
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
                            (0, A.jsx)(mm.Toggle, {
                                text: e ? R.intl.string(R.t["1Rkq/E"]) : R.intl.string(R.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, A.jsxs)("div", {
                className: mw.x0,
                children: [
                    (0, A.jsx)(mV, {
                        storeListing: i,
                        className: mw.o3,
                        cta: (0, A.jsxs)("div", {
                            className: mw.cJ,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: R.intl.string(R.t.fHIpOY),
                                }),
                                null != E &&
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
                                  mV,
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
                            : (0, A.jsx)(mB, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function mB(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: s } = (0, mk.A)({
            analyticsLocation: S.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, A.jsx)(mV, {
        storeListing: t,
        cta: (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(R.t["+KwmBt"]), onClick: s }),
    });
}
class mz extends E.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, A.jsxs)(g9.$T, {
                  color: g9.Hv.DANGER,
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
function mY(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, s] = E.useState({ route: mO.HOME }),
        { route: l } = i;
    function r() {
        s({ route: mO.HOME });
    }
    let a = (e) => {
            (s({ route: mO.SWITCH_APP_PLANS, ...e }), n(R.intl.string(R.t.VFqtkP), r));
        },
        [o, u] = E.useState({});
    E.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: mf.LOADING })),
                (0, me._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: mf.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: mf.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, mt.E)(),
        c = d !== mt.mJ.LOADED;
    switch (l) {
        case mO.HOME:
            return (0, A.jsx)(A.Fragment, {
                children: t.map((e) =>
                    (0, A.jsx)(
                        mz,
                        {
                            subscription: e,
                            children: (0, A.jsx)(mI, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? mf.LOADING : (o[e.id] ?? mf.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case mO.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, A.jsx)(mF, { ...m, navigateToHome: r });
        default:
            (0, il.xb)(l);
    }
}
var mX = n(707989);
function mH(e) {
    let { onGoBack: t } = e,
        n = (0, h.yK)(
            [oY.A],
            () =>
                oY.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, s] = E.useState();
    return (
        null == i && (i = (0, A.jsx)(mK, { onBack: t, title: R.intl.string(R.t["DB/m9a"]) })),
        (0, A.jsxs)("div", {
            children: [
                i,
                (0, A.jsx)("div", {
                    className: mX.A,
                    children: (0, A.jsx)(mY, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            s(
                                (0, A.jsx)(mK, {
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
function mK(e) {
    let { onBack: t, title: n } = e;
    return (0, A.jsxs)("div", {
        className: mX.D,
        children: [
            (0, A.jsx)(sn.K, {
                "aria-label": R.intl.string(R.t["13/7kX"]),
                icon: () => (0, A.jsx)(g7.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, A.jsx)(p.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var mW = n(366999),
    mZ = n(391659);
function mq(e) {
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
        ? ((t = R.intl.string(dQ.default["/S02sx"])), (n = R.intl.string(dQ.default.OPJNST)))
        : i
          ? ((t = R.intl.string(R.t["hT6i/0"])),
            (n = null != a ? R.intl.format(R.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = R.intl.string(R.t["3G0CTC"])),
            (n = r === tH.xc.FP_SUB_PAUSED ? R.intl.format(R.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = io()({ [mZ.Hs]: i, [mZ.mT]: !i }),
        d = io()({ [mZ.CQ]: i, [mZ.ZM]: !i }),
        c = io()({ [mZ.EM]: !i });
    return (0, A.jsxs)("div", {
        className: mZ.r6,
        children: [
            (0, A.jsxs)("div", {
                className: mZ.Nv,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, A.jsx)("div", {
                    className: mZ.ZS,
                    children: (0, A.jsx)("div", {
                        className: u,
                        children: (0, A.jsx)(H.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let mQ = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: s } = e,
        l = (0, ao.kX)(t),
        r = l.length > 0,
        a = (0, mW.Ay)(t.endsAt, mW.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, A.jsx)("div", {
        children: (0, A.jsxs)("div", {
            className: io()(n, mZ.f8),
            children: [
                (0, A.jsx)("div", {
                    className: mZ.J_,
                    children: (0, A.jsxs)("div", {
                        className: mZ.Bh,
                        children: [
                            (0, A.jsx)("div", {
                                className: mZ.xt,
                                children: (0, A.jsx)(r4.t, { size: "md", color: "white", className: mZ.T8 }),
                            }),
                            (0, A.jsx)("div", {
                                className: mZ.pt,
                                children: (0, A.jsx)(p.D, {
                                    variant: "heading-md/semibold",
                                    children: R.intl.string(R.t.DFMPWS),
                                }),
                            }),
                            (0, A.jsx)(H.E, {
                                className: mZ.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : R.intl.string(R.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, A.jsx)(mq, {
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
var m$ = n(983048);
function mJ(e) {
    let t,
        {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, h.yK)([uR.A], () => [uR.A.get(i), null != l ? uR.A.get(l.planId) : null]);
    if (null == o || ao.Ay.getInterval(i).intervalType !== tH.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, ao.z4)(i),
        m = ao.Ay.getDisplayName(i);
    if (a) t = R.intl.string(dQ.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === S.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let n = (0, ao._e)(e, r);
        t = R.intl.formatToPlainString(R.t["5CNRRA"], { date: n ?? 0 });
    } else t = R.intl.formatToPlainString(R.t.eNXZ5O, { planName: m });
    let E = g || n.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, A.jsxs)("div", {
        className: mZ.Bh,
        children: [
            (0, A.jsx)("div", {
                className: io()({
                    [mZ.bY]: g,
                    [mZ.sr]: o.skuId === tH.pe.TIER_0,
                    [mZ.lP]: o.skuId === tH.pe.TIER_1,
                    [mZ.eb]: o.skuId === tH.pe.TIER_2,
                }),
                children: g
                    ? (0, A.jsx)(d9._, { size: "md", color: "currentColor", className: mZ.Kk })
                    : (0, A.jsx)(r4.t, { size: "md", color: "currentColor", className: mZ.Kk }),
            }),
            (0, A.jsxs)("div", {
                className: mZ.pt,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        children: R.intl.format(R.t.LzobT9, { planName: m }),
                    }),
                    !E &&
                        (0, A.jsx)(p.D, {
                            className: mZ.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, A.jsx)(H.E, {
                className: mZ.PJ,
                variant: "text-md/semibold",
                children: R.intl.format(R.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let m0 = function (e) {
    let { className: t, entitlements: n } = e,
        i = B()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, h.yK)([up.A], () => up.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, h.bG)([oY.A], () => oY.A.getPremiumSubscription()),
        r = (0, h.bG)([oY.A], () => null == oY.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tH.gD.PREMIUM_MONTH_TIER_1),
        o = (0, h.bG)([lu.default], () => lu.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)("div", {
                className: io()(t, mZ.xF, mZ.J_),
                children: Object.keys(i).map((e) =>
                    (0, A.jsx)(
                        mJ,
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
                            className: mZ.eT,
                            variant: "text-md/normal",
                            children: R.intl.string(R.t["VNr4+O"]),
                        }),
                        (0, A.jsx)(m$.i, {}),
                    ],
                }),
        ],
    });
};
var m1 = n(902782);
function m2(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: s } = (0, eM.Ay)(),
        [l] = (0, gw.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: tD.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = i ? m1.r : m1.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ao.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = uR.A.get(o);
    tu()(null != u, "Missing plan");
    let d = (0, dh.$g)(l.total, l.currency);
    return (
        u.interval === tH.WT.YEAR
            ? (t = R.intl.format(R.t["jPz/39"], {
                  price: d,
                  termsUrl: S.X7G.TERMS,
                  paidURL: S.X7G.PAID_TERMS,
                  privacyUrl: S.X7G.PRIVACY,
              }))
            : u.interval === tH.WT.MONTH &&
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
function m3(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === S.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, A.jsx)(m2, { subscription: t, withOverheadSeparator: n });
}
var m5 = n(963897),
    m6 = n(689255);
let m4 = { [eC.nR]: "role_subscriptions_panel", [eC.PZ]: "application_subscriptions_panel" };
function m8() {
    return (0, A.jsx)(ox.Z, {
        className: m6.wb,
        type: ox.Z.Types.CUSTOM,
        children: (0, A.jsxs)(sE.A, {
            align: sE.A.Align.CENTER,
            children: [
                (0, A.jsx)(i3.A, { game: null, size: i3.M.SMALL, className: m6.pV }),
                (0, A.jsx)("span", { className: m6.O, children: R.intl.string(R.t["jy/hyj"]) }),
            ],
        }),
    });
}
function m7(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, gn._)(e, t));
}
function m9() {
    let e = (0, h.bG)([up.A], () => up.A.getForApplication(tH.tv), [], m7);
    return (
        E.useEffect(() => {
            (0, uq.LM)(tH.tv);
        }, []),
        (0, A.jsx)(n1.n, {
            label: R.intl.string(R.t["2GKrvn"]),
            description: R.intl.string(R.t.Z5b2Gf),
            children:
                null != e && ao.Ay.hasAccountCredit(e)
                    ? (0, A.jsx)(m0, { className: m6.fX, entitlements: e })
                    : (0, A.jsx)(m8, {}),
        })
    );
}
function Ae() {
    return (0, A.jsx)("hr", { className: m6.hr });
}
let At = function () {
        var e;
        let t = (0, h.bG)([oY.A], () => oY.A.getPremiumTypeSubscription()),
            n = (0, gi.A)({ subscriptionFilter: (e) => m5.Hy.has(e.status) }),
            i = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
            s = n.length > 1,
            l = (0, h.bG)(
                [oz.A],
                () => (null != t && null != t.paymentSourceId ? oz.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, h.bG)([oY.A], () => oY.A.hasFetchedSubscriptions()),
            a = (0, h.bG)([oA.A], () => oA.A.isBusy),
            o = (0, dm.Y)(),
            u = gB.A.useField("subsection"),
            d = gB.A.useField("scrollToGameServers"),
            g = E.useRef(null);
        E.useEffect(() => {
            (0, n7._)(null != u ? m4[u] : c.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let m = (0, h.bG)([oY.A], () => oY.A.getActiveApplicationSubscriptions()?.length ?? 0),
            x = (0, h.bG)(
                [oY.A],
                () =>
                    Object.values(oY.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === S.rzx.GUILD)
                        .filter((e) => e.status !== S.Dmq.ENDED).length,
            ),
            T = (0, h.bG)([oY.A], () =>
                Object.values(oY.A.getSubscriptions() ?? {}).some((e) => e.type === S.rzx.GAME_SERVER),
            ),
            { servers: f } = (0, gC.f)({ enabled: T }),
            I = (0, h.yK)([oY.A], () => (0, gA.eP)(f, (e) => oY.A.getSubscriptionById(e)), [f]),
            _ = (0, dg.A)({ forceFetch: !0 }),
            N = (0, dx.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            b =
                !(N && !(_.unactivatedUnits.length > 0)) &&
                (_.fractionalState !== tH.xc.NONE || _.unactivatedUnits.length > 0);
        return (E.useEffect(() => {
            d &&
                r &&
                o &&
                I.length > 0 &&
                (g.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                gB.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, I.length]),
        E.useEffect(
            () => (
                e8.h.wait(() => {
                    ((0, dc.zS)(), oc.hP(), (0, ce.CD)(), oc.$o());
                }),
                function () {
                    gB.A.resetState();
                }
            ),
            [],
        ),
        tn.A.enabled)
            ? (0, A.jsx)(oi.A, {})
            : r && o
              ? u === eC.nR
                  ? (0, A.jsx)(g5, { onGoBack: () => gB.A.setState({ subsection: null }) })
                  : u === eC.PZ
                    ? (0, A.jsx)(mH, { onGoBack: () => gB.A.setState({ subsection: null }) })
                    : (0, A.jsx)("div", {
                          className: m6.kL,
                          children: (0, A.jsxs)("div", {
                              className: m6.Qs,
                              children: [
                                  s ? (0, A.jsx)(m5.Sb, {}) : null,
                                  null != t
                                      ? (0, A.jsx)(m5.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, A.jsx)(m5.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, A.jsxs)("section", {
                                          children: [
                                              (0, A.jsx)(p.D, {
                                                  variant: "heading-md/bold",
                                                  className: m6.HL,
                                                  children: R.intl.string(R.t.Obre8v),
                                              }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-md/normal",
                                                  className: m6.JU,
                                                  children: R.intl.format(R.t["7Zi06b"], {
                                                      helpCenterLink: eT.A.getArticleURL(
                                                          S.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, A.jsx)(mQ, {
                                                  className: m6.fX,
                                                  fractionalPremiumInfo: _,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, A.jsx)(m9, {}),
                                  x > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(Ae, {}),
                                              (0, A.jsx)(gv, {
                                                  count: x,
                                                  onClickManageSubscription: () => gB.A.setState({ subsection: eC.nR }),
                                              }),
                                          ],
                                      }),
                                  m > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(Ae, {}),
                                              (0, A.jsx)(g8, {
                                                  count: m,
                                                  onClickManageSubscription: () => {
                                                      (gB.A.setState({ subsection: eC.PZ }),
                                                          ti.default.track(
                                                              S.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  I.length > 0 &&
                                      (0, A.jsxs)("div", {
                                          ref: g,
                                          children: [(0, A.jsx)(Ae, {}), (0, A.jsx)(gN, { servers: I })],
                                      }),
                                  (0, A.jsx)(Ae, {}),
                                  null != t ? (0, A.jsx)(m3, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, A.jsx)("div", { className: io()(m6.kL, m6.Lq), children: (0, A.jsx)(ol.y, {}) });
    },
    An = (0, d.E2)(c.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        Component: () => (0, A.jsx)(At, {}),
    }),
    Ai = (0, d.zZ)(c.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        buildLayout: () => [An],
    }),
    As = (0, d.t_)(c.X.SUBSCRIPTIONS_PANEL, { useTitle: () => R.intl.string(R.t.trSpHX), buildLayout: () => [Ai] }),
    Al = (0, d.i4)(c.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.trSpHX),
        icon: ge.L,
        usePersistentBadge: function () {
            let e = (0, gt.l)();
            return E.useMemo(
                () => ({
                    badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, A.jsx)(iW.E, { size: "xs", color: nJ.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [As],
    }),
    Ar = (0, d.WI)(c.X.BILLING_SECTION, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [d7, c9, Al, ds, o1],
    });
var Aa = n(540999),
    Ao = n(306471),
    Au = n(964355),
    Ad = n(172272);
let Ac = (0, d.zD)(c.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, h.bG)([re.default], () => re.default.isAxeEnabled),
        setValue: (e) => (0, l9.x)({ axeEnabled: e }),
    }),
    Ag = (0, d.zD)(c.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, h.bG)([re.default], () => re.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, l9.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var Am = n(276086),
    AA = n(354328);
let AE = (0, d.zD)(c.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, AA.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, Am.L)("highlight_mana_components", e);
        },
    }),
    Ah = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, AA.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, Am.L)("highlight_mana_text_overrides", e);
        },
    }),
    AS = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, AA.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, Am.L)("highlight_mana_text", e);
        },
    }),
    Ax = (0, d.zD)(c.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, AA.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, Am.L)("highlight_void_toggleables", e);
        },
    }),
    Ap = (0, d.sN)(c.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, h.bG)([re.default], () => re.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ad.YR,
        markers: Array.from({ length: Ad.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ad.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            Ad.Or.getState().setHorizontalSpacing(e);
        },
    }),
    AT = (0, d.zD)(c.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, h.bG)([re.default], () => re.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, l9.x)({ layoutDebuggingEnabled: e });
        },
    }),
    Af = (0, d.sN)(c.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, h.bG)([re.default], () => re.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: Ad.YR,
        markers: Array.from({ length: Ad.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => Ad.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            Ad.Or.getState().setVerticalSpacing(e);
        },
    }),
    AI = (0, d.zZ)(c.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [Ag, AT, Ap, Af, AE, AS, Ah, Ax, Ac],
    });
var A_ = n(246605),
    AN = n(274184);
let AC = (0, d.E2)(c.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, h.bG)([AN.Ay], () => AN.Ay.getActionTriggeredSurveyOverride());
            return (0, A.jsx)(A6, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => A_.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    Ab = (0, d.zD)(c.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var Ay = n(396478),
    Av = n(173936),
    Aj = n(103557),
    AO = n(414079),
    AL = n(148810),
    AR = n(380610),
    AD = n(986238),
    AP = n(428524),
    AG = n(252149),
    AM = n(221851);
let AU = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    AV = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function Ak(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class Aw extends E.Component {
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
        return (0, A.jsxs)(sE.A, {
            direction: sE.A.Direction.VERTICAL,
            className: io()(AP.oS, AM.SX, AG.N, AP.nM),
            children: [
                (0, A.jsx)(AO.A, {
                    className: io()(AP.lL, { [AP.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, A.jsxs)(sE.A, {
                    className: AM.QB,
                    children: [
                        (0, A.jsx)(sE.A.Child, {
                            basis: "50%",
                            children: (0, A.jsx)(st.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: AV,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, A.jsx)(sE.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, A.jsx)(sc.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, A.jsxs)(sE.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, A.jsx)(H.E, {
                                className: AP.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, A.jsxs)(H.E, {
                            variant: "text-sm/normal",
                            className: AP.AS,
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
class AF extends E.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, AR.bD)();
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
        return B().without(AU, ...t);
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
        let t = await (0, AL.Zk)(e);
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
        (0, sd.openModal)((t) => (0, A.jsx)(AB, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, A.jsx)(Ay.pp, {
            theme: nk.A.theme,
            className: io()(AM.eT, AM.SX),
            children: (0, A.jsx)(Ay.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : B().map(e, (e, i) =>
                  (0, A.jsx)(
                      Aw,
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
            : (0, A.jsx)(ss.m, {
                  text: "Generate Public Link",
                  children: (0, A.jsx)(sn.K, {
                      variant: "secondary",
                      icon: Av.LinkIcon,
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
                    disabled: Ak(t ?? {}),
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
            ? (0, A.jsx)(ol.y, { className: AM.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                Ak(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, A.jsx)(H.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, A.jsx)(n1.n, {
            children: (0, A.jsxs)(Y.B, {
                gap: 16,
                children: [
                    (0, A.jsx)(st.l, {
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
                    (0, A.jsxs)(lW.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class AB extends E.Component {
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
        e.key === sO.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, AL.SB)(e);
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
        return Ak(this.props.buildOverrides ?? {});
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
            d = AD.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, A.jsxs)(Y.B, {
            gap: 20,
            children: [
                (0, A.jsx)(st.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: AD.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, A.jsx)(st.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: AD.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, A.jsxs)(Y.B, {
                          gap: 20,
                          children: [
                              (0, A.jsx)(sc.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iz.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, A.jsx)(st.l, {
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
                    : (0, A.jsx)(Aj.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, A.jsx)(Aj.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, A.jsx)(t0.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, A.jsx)("div", {});
        let n = r8.Y.INFO;
        switch (t) {
            case 0:
                n = r8.Y.ERROR;
                break;
            case 1:
                n = r8.Y.WARNING;
        }
        return (0, A.jsx)(r8.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, A.jsx)(su.a, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, A.jsx)(uX.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let Az = (0, d.E2)(c.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: AF });
var AY = n(256311),
    AX = n(883600);
let AH = (0, d.E2)(c.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, h.bG)([AX.A], () => AX.A.overrideId());
        async function t(e) {
            let t = AX.A.getChangelog(e, "en-US");
            return null != t ? t : ((await AY.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, A.jsx)(A6, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => AY.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var AK = n(506774);
let AW = new Date("2018-01-01"),
    AZ = (0, d.Tf)(c.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === oh.default.fromTimestamp(AW.getTime()),
        onClick: () => (AK.w.set("lastChangeLogDate", AW), L.pK.updateSetting(oh.default.fromTimestamp(AW.getTime()))),
    }),
    Aq = (0, d.zD)(c.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, h.bG)([re.default], () => re.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, h.bG)(
                [re.default],
                () => re.default.disableAppCollectionsCache || re.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, l9.x)({ disableAppCollectionsCache: e }),
    }),
    AQ = (0, d.zD)(c.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, h.bG)([re.default], () => re.default.isForcedCanary),
        setValue: (e) => {
            (0, l9.x)({ canary: e });
        },
    }),
    A$ = (0, d.zD)(c.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, h.bG)([re.default], () => re.default.sourceMapsEnabled),
        setValue: (e) => (0, l9.x)({ sourceMapsEnabled: e }),
    }),
    AJ = (0, d.zD)(c.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, h.bG)([re.default], () => re.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, l9.x)({ onlyShowPreviewAppCollections: e }),
    });
var A0 = n(10094),
    A1 = n(683760);
let A2 = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tH.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tH.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tH.PremiumTypes.TIER_2 },
    ],
    A3 = (0, d.Hn)(c.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => A2,
        clearable: !0,
        useValue: () =>
            (0, h.bG)([A1.A], () => {
                let e = A1.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, A0.O)(null, void 0)
                : null === e
                  ? (0, A0.O)(void 0, void 0)
                  : (0, A0.O)(0 === e ? null : e, void 0);
        },
    }),
    A5 = (0, d.E2)(c.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, h.bG)([AN.Ay], () => AN.Ay.getSurveyOverride());
            return (0, A.jsx)(A6, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => A_.xr(e),
                fetchOverride: (e) => A_.BC(e, !0) ?? null,
            });
        },
    });
function A6(e) {
    let { label: t, description: n, placeholder: i, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = E.useState(s ?? ""),
        u = E.useRef(null),
        [d, c] = E.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        E.useEffect(() => g, []),
        (0, A.jsx)(tJ.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, A.jsx)(sc.k, {
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
let A4 = (0, d.zZ)(c.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [A3, A5, AC, AH, AZ, AQ, Ab, AJ, Aq, A$, Az],
        useInlineNotice: () => ({
            type: m.lT.INLINE_NOTICE,
            noticeType: "info",
            text: R.intl.format(R.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    A8 = (0, d.zD)(c.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, h.bG)([re.default], () => re.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, l9.x)({ logAnalyticsEvents: e }),
    }),
    A7 = (0, d.zD)(c.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, h.bG)([re.default], () => re.default.isLoggingGatewayEvents),
        setValue: (e) => (0, l9.x)({ logGatewayEvents: e }),
    }),
    A9 = (0, d.zD)(c.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, h.bG)([re.default], () => re.default.preventPopoutClose),
        setValue: (e) => (0, l9.x)({ preventPopoutClose: e }),
    }),
    Ee = (0, d.zD)(c.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, h.bG)([re.default], () => re.default.logKeyboardMismatches),
        setValue: (e) => (0, l9.x)({ logKeyboardMismatches: e }),
    }),
    Et = (0, d.zD)(c.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, h.bG)([re.default], () => re.default.isLoggingOverlayEvents),
        setValue: (e) => (0, l9.x)({ logOverlayEvents: e }),
    }),
    En = (0, d.zD)(c.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, h.bG)([re.default], () => re.default.isLoggingQuestEvents),
        setValue: (e) => (0, l9.x)({ logQuestEvents: e }),
    }),
    Ei = (0, d.zD)(c.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, h.bG)([re.default], () => re.default.isTracingRequests),
        setValue: (e) => (0, l9.x)({ trace: e }),
    }),
    Es = (0, d.zZ)(c.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [A7, Et, Ei, A8, Ee, A9, En] }),
    El = (0, d.t_)(c.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [A4, Es, AI],
    }),
    Er = (0, d.i4)(c.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Ao.V,
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
                } = (0, h.cf)([re.default, Aa.A, lu.default], () => ({
                    layoutDebuggingEnabled: re.default.layoutDebuggingEnabled,
                    isDeveloper: Aa.A.isDeveloper,
                    isLoggingGatewayEvents: re.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: re.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: re.default.isLoggingAnalyticsEvents,
                    isTracingRequests: re.default.isTracingRequests,
                    isForcedCanary: re.default.isForcedCanary,
                    isSourceMapsEnabled: re.default.sourceMapsEnabled,
                    isAxeEnabled: re.default.isAxeEnabled,
                    preventPopoutClose: re.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: re.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: re.default.disableAppCollectionsCache,
                    isStaff: lu.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: m, verticalSpacing: E } = (0, Ad.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: x } = Ad.Or.getState(),
                p = L.HZ.useSetting();
            return t
                ? [
                      (0, A.jsxs)(
                          e6.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, nr.openUserSettings)(c.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e6.sL,
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
                                      e6.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, l9.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, A.jsx)(
                                      e6.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, l9.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, A.jsx)(
                                      e6.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: d,
                                          action: () => {
                                              (0, l9.x)({ disableAppCollectionsCache: !d });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, A.jsxs)(
                          e6.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, nr.openUserSettings)(c.X.LOGGING);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e6.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, l9.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, A.jsx)(
                                      e6.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, l9.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, A.jsx)(
                                      e6.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, l9.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, A.jsx)(
                                      e6.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, l9.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, A.jsx)(
                                      e6.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, l9.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, A.jsxs)(
                          e6.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, nr.openUserSettings)(c.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e6.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, l9.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, A.jsx)(
                                      e6.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, l9.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(
                                                  e6.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, A.jsx)(Au.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: Ad.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, A.jsx)(
                                                  e6.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, A.jsx)(Au.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: E,
                                                              minValue: 0,
                                                              maxValue: Ad.YR,
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
                                e6.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => lo() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [El],
    });
var Ea = n(127062),
    Eo = n(25044),
    Eu = n(80703),
    Ed = n(123292),
    Ec = n(857250),
    Eg = n(683438),
    Em = n(890856),
    EA = n(100392),
    EE = n(102609),
    Eh = n(271478),
    ES = n(710195),
    Ex = n(386976),
    Ep = n(257433),
    ET = n(32523),
    Ef = n(96919),
    EI = n(688151),
    E_ = n(863763);
function EN(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: s } = e,
        [l, r] = E.useState(s),
        [a, o] = E.useState(!1),
        u = E.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, h.bG)([uO.default], () => uO.default.getId()),
        c = (0, h.bG)([uO.default], () => {
            let e = uO.default.getInstallationForTracking();
            return null == e ? null : (0, Eu.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, Ep.iN)(t, g),
        S = (0, Ep.Fm)(t, g),
        x = (0, h.yK)([ra.A], () =>
            B()
                .sortBy(ra.A.getRecentExposures(EI.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        p = E.useCallback(
            (e) => {
                (0, uG.C)((0, EA.yA)(n), () => {
                    ((0, li.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: ls.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        T = (0, A.jsx)(Em.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: E_.DD,
                children: [
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsxs)(Y.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uG.p5 &&
                                        (0, A.jsx)(n2.D, {
                                            onClick: p,
                                            children: (0, A.jsx)(Av.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", {
                        className: E_.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, A.jsx)("div", { className: E_.Os, children: T });
    let f = "";
    return (
        (f =
            t.system === EE.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? EI.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, A.jsxs)("div", {
            className: E_.Os,
            children: [
                T,
                (0, A.jsx)("div", {
                    children: (0, A.jsx)(Eh.g, {
                        label: t.system === EE.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, A.jsx)("div", {
                    className: E_.h_,
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
                                  className: E_.id,
                                  children: "Server Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: E_.AS,
                                  children: null == S ? "None" : JSON.stringify(S, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: E_.id,
                                  children: "Override Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: E_.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: E_.id,
                                  children: "Recent Exposures",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: E_.AS,
                                  children: 0 === x.length ? "None" : x.join("\n"),
                              }),
                          ],
                      })
                    : (0, A.jsx)("div", {
                          className: E_.id,
                          children: (0, A.jsx)(Ed.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, A.jsx)(se.c, { className: E_.yF }),
            ],
        })
    );
}
function EC(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [s, l] = E.useState(null != i),
        [r, a] = E.useState(!1),
        o = E.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, h.bG)([ra.A], () => ra.A.getLoadedGuildExperiment(n)),
        d = (0, h.bG)([ra.A, sp.A, ES.A], () => {
            if (t.system === EE.l5.LEGACY) return null == ra.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !sp.A.getGuildsArray().some((t) => null != ES.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, h.yK)([ra.A], () =>
            B()
                .sortBy(ra.A.getRecentExposures(EI.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, h.yK)([uO.default, sp.A, ra.A, ES.A], () => {
            let e = t.system === EE.l5.LEGACY,
                i = t.name,
                s = uO.default.getId(),
                l = B().sortBy(sp.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (ra.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? EI.RE.NOT_ELIGIBLE)
                    : (ES.A.getEvaluationAndAssignment("guild", t.id, i, s)[1]?.variantId ?? EI.RE.NOT_ELIGIBLE);
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
        S = t.system !== EE.l5.LEGACY,
        x = (0, h.yK)([sp.A], () => B().sortBy(sp.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [p, T] = E.useState(() => sT.A.getGuildId() ?? sT.A.getLastSelectedGuildId()),
        f = x.find((e) => e.id === p)?.name,
        I = (0, h.bG)(
            [ES.A],
            () => {
                if (S && null != p) return ES.A.getServerAssignment("guild", p, t.name);
            },
            [S, p, t.name],
        ),
        _ = (0, h.bG)([ES.A, uO.default], () => {
            if (!S) return;
            let e = uO.default.getId();
            return ES.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, A.jsx)(n2.D, {
            onClick: o,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: E_.DD,
                children: [
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)("span", { children: t.title }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", { className: E_.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, A.jsxs)("div", {
              className: E_.Os,
              children: [
                  C,
                  (0, A.jsx)(Eh.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  S &&
                      x.length > 0 &&
                      (0, A.jsx)("div", {
                          className: E_.h_,
                          children: (0, A.jsx)(st.l, {
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
                      className: E_.h_,
                      children: d
                          ? (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === EE.l5.LEGACY
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
                                  className: E_.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: E_.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: E_.id,
                                  children: "Client Eligibility",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: E_.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: E_.id,
                                    children: "Guild Assignments",
                                }),
                                (0, A.jsx)(H.E, { variant: "code", className: E_.AS, children: g }),
                                t.system === EE.l5.LEGACY &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-lg/medium",
                                                className: E_.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, A.jsx)(H.E, {
                                                variant: "code",
                                                className: E_.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: E_.id,
                                    children: "Override Descriptor",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: E_.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: E_.id,
                                    children: "Recent Exposures",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: E_.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, A.jsx)("div", {
                            className: E_.id,
                            children: (0, A.jsx)(Ed.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, A.jsx)(se.c, { className: E_.yF }),
              ],
          })
        : (0, A.jsx)("div", { className: E_.Os, children: C });
}
let Eb = (0, d.E2)(c.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Ex.op)(),
                { experiments: n, overridesInfo: i } = (0, ET.hI)(),
                s = E.useMemo(() => ({ ...n, ...e }), [n, e]),
                l = E.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, h.bG)([uO.default], () => {
                    let e = uO.default.getInstallationForTracking();
                    return null == e ? null : (0, Eu.v)(e);
                }),
                [a, o] = E.useState(""),
                u = (0, Ef.oC)((0, Ef.R3)((0, Ef.Fm)(s), l), a);
            return (0, A.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, A.jsxs)(Y.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, A.jsxs)(H.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uG.p5 &&
                                    (0, A.jsx)(Ed.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uG.C)(r, () => {
                                                (0, li.P0)((0, Ec.o)("Installation ID copied!", ls.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, A.jsx)(Eg.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? EC : EN;
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
                              className: E_.p$,
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
    Ey = (0, d.zZ)(c.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Eb] }),
    Ev = (0, d.t_)(c.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Ey] }),
    Ej = (0, d.i4)(c.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Ea.c,
        useMenu: Eo.A,
        buildLayout: () => [Ev],
    }),
    EO = (0, d.WI)(c.X.DEVELOPER_SECTION, {
        useTitle: () => R.intl.string(R.t["+gHUHA"]),
        usePredicate: () => Aa.A.isDeveloper,
        buildLayout: () => [Ej, Er],
    });
var EL = n(682348),
    ER = n(871633),
    ED = n(751075),
    EP = n(843402);
let EG = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function EM() {
    let e = (0, h.yK)([i0.Ay], () => i0.Ay.getGamesSeen(!1)),
        t = (0, h.bG)([i0.Ay], () => EG(...i0.Ay.getOverrides()));
    E.useEffect(() => {
        if (eJ.isPlatformEmbedded) return ((0, EP.a2)(), EP.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = E.useMemo(
        () =>
            e.reduce((e, t) => ((0, ER.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function EU(e) {
    let { gameHistory: t } = EM();
    return {
        namedGames: E.useMemo(
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
function EV(e) {
    let { namedGames: t, totalCount: n } = EU(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function Ek() {
    let { namedGames: e } = EU(2),
        [t, n] = E.useMemo(() => e.map((e) => e.id), [e]);
    E.useEffect(() => {
        mA.Ay.fetchApplications([t, n].filter(il.Vq));
    }, [t, n]);
    let [i, s] = (0, h.yK)([iQ.A], () => [t, n].map(iQ.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, A.jsx)(i3.A, { game: i, size: i3.M.MEDIUM_LARGE }), shape: ED.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, A.jsx)(i3.A, { game: s, size: i3.M.MEDIUM }), shape: ED.e0.ROUNDED } : null,
          };
}
let Ew = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = EV(2);
            return R.intl.format(R.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = Ek();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, h.bG)([i0.Ay], () => i0.Ay.getGamesSeen(!1).some((e) => !(0, ER.n1)(e))) && (0, nE.xl)(),
    }),
    EF = (0, d.gN)(c.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [Ew] });
var EB = n(57129);
let Ez = (0, d.zD)(c.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => R.intl.string(EB.default.WhdCGP),
    useSubtitle: () => R.intl.string(EB.default.UQ9RHJ),
    useValue: L.tz.useSetting,
    setValue: L.tz.updateSetting,
});
var EY = n(406535);
let EX = (0, d.zD)(c.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => R.intl.string(EB.default.A0FVCV),
        useSubtitle: () => R.intl.string(EB.default.vHX6RG),
        useValue: L.hV.useSetting,
        setValue: function (e) {
            (L.hV.updateSetting(e),
                ti.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EY.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    EH = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => R.intl.string(R.t.WmsPis),
        useSearchTerms: () => [R.intl.string(R.t["8ka8li"])],
        buildLayout: () => [Ez, EX, EF],
    });
var EK = n(106531);
let EW = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.J0SFL2),
        destinationKey: c.X.DATA_AND_PRIVACY_PANEL,
    }),
    EZ = (0, d.gN)(c.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, EK.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [EW],
    });
var Eq = n(945810);
let EQ = (0, Eq.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
var E$ = n(365258);
let EJ = (0, d.Qx)(c.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => R.intl.string(EB.default["/LHVbt"]),
    useSubtitle: () => R.intl.string(R.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eY.Qd.ACTIVITY_STATUS_OFF, name: R.intl.string(EB.default.m3oL7Q) },
            { value: eY.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: R.intl.string(EB.default["5+lnTA"]) },
            { value: eY.Qd.ACTIVITY_STATUS_ON, name: R.intl.string(EB.default["egr+VZ"]) },
        ];
    },
    useValue: L._Z.useSetting,
    setValue: function (e) {
        var t;
        let i = L._Z.getSetting();
        if (
            (L._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, EK.W1)(t) && !EQ.getConfig({ location: t }).upsell)
        )
            return;
        let s = (0, E$.g8)(i, e);
        if (null == s) return;
        let l = (0, E$.Xc)(e);
        (0, sd.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, A.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
        });
    },
});
var E0 = n(498642),
    E1 = n(573435),
    E2 = n(260509),
    E3 = n(771810);
function E5(e) {
    let { guild: t, size: n } = e,
        i = (0, E2.Iv)(t, n, !1, !0),
        s = (0, E2.Rb)(t);
    return null != i
        ? (0, A.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, A.jsx)("div", {
              className: E3.F,
              children: (0, A.jsx)(H.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function E6(e) {
    let { guild: t, size: n } = e;
    return (0, A.jsx)(E1.Ay, {
        className: E3.z,
        mask: E1.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, A.jsx)(E5, { guild: t, size: n }),
    });
}
var E4 =
    (((r = {}).SERVER_ORDER = "server-order"),
    (r.RECENTLY_JOINED = "recently-joined"),
    (r.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (r.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    r);
let E8 = {
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
var E7 = n(618118);
function E9(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        s = (0, h.bG)([E0.A], () => E0.A.getMemberCount(t.id));
    return (0, A.jsxs)(Y.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, A.jsx)("div", { className: E7.FO, children: (0, A.jsx)(E6, { guild: t, size: 48 }) }),
            (0, A.jsx)("div", {
                className: E7.QH,
                children: (0, A.jsx)(t0.d, {
                    label: t.name,
                    description: R.intl.format(R.t.zRl6XR, { count: s ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let he = function (e) {
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
            let [e, t] = (0, E.useState)(""),
                [n, i] = (0, E.useState)("server-order"),
                s = (0, h.bG)([cl.Ay], () => cl.Ay.getFlattenedGuildIds()),
                l = (0, h.bG)([sp.A], () => sp.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = L.Pw.useSetting(),
                [o, u] = (0, E.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await L.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, E.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [g, m] = (0, E.useState)(() => E8[n](r, a)),
                A = g.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(E8[e](r, a)), i(e));
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
        m = (0, E.useId)(),
        x = (0, E.useRef)(null),
        p = (0, E.useMemo)(
            () => [
                { id: E4.SERVER_ORDER, label: R.intl.string(R.t.STMPJ2), value: E4.SERVER_ORDER },
                { id: E4.RECENTLY_JOINED, label: R.intl.string(R.t.CbaapP), value: E4.RECENTLY_JOINED },
                { id: E4.ACTIVITY_SHARING_ON, label: R.intl.string(EB.default.ZI51JZ), value: E4.ACTIVITY_SHARING_ON },
                {
                    id: E4.ACTIVITY_SHARING_OFF,
                    label: R.intl.string(EB.default["+kxafn"]),
                    value: E4.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        T = p.find((e) => e.value === l)?.label ?? "";
    return (0, A.jsxs)("div", {
        className: E7.iE,
        children: [
            t,
            (0, A.jsxs)("div", {
                className: E7.N1,
                children: [
                    (0, A.jsx)(Eg.I, {
                        query: i,
                        onChange: s,
                        onClear: function () {
                            (ti.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                s(""));
                        },
                        onFocus: () =>
                            ti.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            ti.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
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
                            className: E7.gO,
                            children: [
                                (0, A.jsx)(al.Y, {
                                    targetElementRef: x,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, A.jsx)(cm.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": R.intl.string(R.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, A.jsx)(e6.rX, {
                                                children: p.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, A.jsx)(
                                                        e6.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: l === i,
                                                            action: () => {
                                                                (ti.default.track(
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
                                        (0, A.jsxs)(n2.D, {
                                            ...e,
                                            innerRef: x,
                                            className: E7.Ku,
                                            children: [
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: T,
                                                }),
                                                (0, A.jsx)(cF.a, { size: "xs", color: nJ.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, A.jsx)(Ed.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? R.intl.string(R.t["7lxcLO"]) : R.intl.string(R.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, A.jsx)(sl.A, {
                "aria-live": "polite",
                role: "region",
                children: R.intl.format(EB.default.EvzDff, { count: n.length }),
            }),
            (0, A.jsxs)("ul", {
                className: E7.X1,
                id: m,
                "aria-label": R.intl.string(R.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, A.jsx)("div", {
                            className: E7.pb,
                            children: (0, A.jsx)(H.E, {
                                className: E7.R$,
                                variant: "text-lg/medium",
                                children: R.intl.string(R.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, A.jsx)(
                            E9,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var ht = n(68322);
let hn = (0, d.E2)(c.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [R.intl.string(EB.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, A.jsx)("div", {
                      className: ht.l,
                      children: (0, A.jsx)(iX.w, { type: "warning", children: R.intl.string(EB.default["xxI0/W"]) }),
                  });
            return (0, A.jsx)(he, { notice: e });
        },
    }),
    hi = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bwqjL9),
        buildLayout: () => [EJ, hn, EZ],
    }),
    hs = (0, d.zD)(c.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => R.intl.string(EB.default.khuuzv),
        useSubtitle: () => R.intl.string(EB.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    hl = (0, d.E2)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    hr = (0, d.zD)(c.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => R.intl.string(EB.default.Uz5Ipi),
        useSubtitle: () => R.intl.string(EB.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    ha = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => R.intl.string(EB.default["89YBr5"]),
        useSubtitle: () => R.intl.string(R.t.uGDpgH),
        buildLayout: () => [hs, hr, hl],
        useSearchTerms: () => [R.intl.string(R.t.VOszPA)],
    }),
    ho = (0, d.t_)(c.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        buildLayout: () => [EH, hi, ha],
    }),
    hu = (0, d.i4)(c.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        icon: EL._,
        buildLayout: () => [ho],
    });
var hd = n(712440),
    hc = n(370997);
let hg = (0, d.E2)(c.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: hc.Ay,
    useSearchTerms: () => [R.intl.string(R.t["f6kk+r"])],
});
var hm = n(478016),
    hA = n(789645),
    hE = n(559106),
    hh = n(77468),
    hS = n(289498),
    hx = n(573648),
    hp = n(874490),
    hT = n(370480),
    hf = n(968309);
let hI = new Set([S.fg2.XBOX, S.fg2.PLAYSTATION, S.fg2.PLAYSTATION_STAGING, S.fg2.CRUNCHYROLL]);
var h_ = n(169869),
    hN = n(814925),
    hC = n(733110),
    hb = n(479785),
    hy = n(757036),
    hv = n(555837),
    hj = n(43990),
    hO = n(241524),
    hL = n(51965),
    hR = n(377368),
    hD = n(631368),
    hP = n(212739),
    hG = n(30370),
    hM = n(181666),
    hU = n(553875),
    hV = n(660594);
function hk() {
    let e,
        t,
        i,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, hD.$)()),
            (t = (0, hP.O)()),
            (s = null != (i = (0, h.bG)([hG.A], () => hG.A.getAccount(null, S.fg2.XBOX))) && !i.revoked),
            e === hD.C.NONE || t
                ? { variant: hD.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === hD.C.NO_ACCESS && !s }),
        { analyticsLocations: a } = (0, eM.Ay)(tD.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, hR.yW)(a),
        u = (0, hO.A)("(max-width: 485px)");
    if (l === hD.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (l) {
        case hD.C.HAS_ACCESS:
        case hD.C.BLOCK_CLAIM:
            ((c = R.intl.string(hU.default["7PdsMK"])),
                (g = (0, A.jsx)(hL.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: R.intl.string(hU.default.CubeLC),
                    onClick: () => {
                        (0, sd.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, A.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case hD.C.NO_ACCESS:
            ((c = R.intl.string(hU.default.NwkRTZ)),
                (g = (0, A.jsx)(tV.A, {
                    defaultTextOverride: R.intl.string(hU.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tH.pe.TIER_2,
                })));
            break;
        default:
            (0, il.xb)(l);
    }
    return (0, A.jsxs)(eM.f5, {
        value: a,
        children: [
            (0, A.jsxs)("div", {
                className: hV.bV,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: R.intl.string(R.t.NG1e6l),
                    }),
                    (0, A.jsx)(r4.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, A.jsx)(hj.N, {
                theme: S.NJ8.DARK,
                children: (e) =>
                    (0, A.jsx)("div", {
                        className: e,
                        children: (0, A.jsxs)("div", {
                            className: hV.Nr,
                            children: [
                                (0, A.jsxs)("div", {
                                    className: hV.Tp,
                                    children: [
                                        (0, A.jsx)("div", {
                                            className: hV.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, A.jsx)("div", { className: hV.$h }),
                                        (0, A.jsx)("div", { className: hV.Rv }),
                                        (0, A.jsx)("div", { className: hV.Lw }),
                                    ],
                                }),
                                (0, A.jsxs)("div", {
                                    className: hV.Mn,
                                    children: [
                                        (0, A.jsxs)("div", {
                                            className: hV.mY,
                                            children: [
                                                (0, A.jsx)("img", {
                                                    className: hV.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: hV.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, A.jsx)("div", { className: hV.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)("div", { className: hV.yF }),
                                            (0, A.jsxs)("div", {
                                                className: hV.sQ,
                                                children: [
                                                    (0, A.jsx)(o3.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: nJ.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, A.jsx)(H.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: R.intl.format(hM.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(hR.Hx.CONNECT),
                                                                    (0, hf.A)({
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
var hw = n(201718),
    hF = n(321078),
    hB = n(672130),
    hz = n(379848),
    hY = n(688901);
function hX(e) {
    let { markAsDismissed: t } = e;
    return (
        E.useEffect(() => t(gS.i.AUTO_DISMISS), [t]),
        (0, A.jsx)(ts.Lp, { className: hY.Ad, text: R.intl.string(R.t.y2b7CA) })
    );
}
function hH(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, A.jsxs)("div", {
        className: hY.kL,
        children: [
            i,
            (0, A.jsxs)("div", {
                className: hY.FS,
                children: [
                    (0, A.jsxs)("div", {
                        className: hY.TK,
                        children: [
                            (0, A.jsx)(hz.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === s ? (0, A.jsx)(hX, { markAsDismissed: n }) : null;
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
function hK() {
    let e = eT.A.getArticleURL(S.MVz.PS_CONNECTION);
    return (0, A.jsx)(hH, {
        title: R.intl.string(R.t.v20wwm),
        body: R.intl.format(R.t.lTZBit, { help_article: e }),
        img: (0, A.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eu.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, hf.A)({ platformType: S.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let hW = "/assets/9df988a227916145.png";
function hZ() {
    return (0, A.jsx)(hH, {
        title: R.intl.string(hM.default["9cLtDI"]),
        body: R.intl.format(hM.default["D+kUbg"], { learnMoreLink: eT.A.getArticleURL(S.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, A.jsx)("img", { src: hW, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, hf.A)({ platformType: S.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function hq() {
    let e = eT.A.getArticleURL(S.MVz.XBOX_CONNECTION);
    return (0, A.jsx)(hH, {
        title: R.intl.string(R.t["2okkZV"]),
        body: R.intl.format(R.t.OnERSS, { help_article: e }),
        img: (0, A.jsx)("img", { src: hW, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, hf.A)({ platformType: S.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var hQ = n(783419),
    h$ = n(534952),
    hJ = n(211180),
    h0 = n(247259);
function h1(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, h.cf)(
            [hG.A],
            () => ({
                isJoining: hG.A.isJoining(n.id),
                joinErrorMessage:
                    "" === hG.A.joinErrorMessage(n.id) ? R.intl.string(R.t.j2d6Km) : hG.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== hG.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, h.bG)([sp.A], () => sp.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, A.jsx)(_.$, {
                size: "sm",
                onClick: function () {
                    hh.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? R.intl.string(R.t.RXvQQu) : R.intl.string(R.t.XpeFYr),
            })),
        (0, A.jsxs)("div", {
            className: h0.iA,
            children: [
                (0, A.jsxs)("div", {
                    className: h0.XX,
                    children: [
                        (0, A.jsx)(cS.Ay, { size: cS.Ay.Sizes.SMALL, guild: n.guild, className: h0.$f }),
                        (0, A.jsxs)("div", {
                            className: h0.Vn,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, A.jsx)(ns.Anchor, {
                                    href: hx.A.get(n.type)?.getPlatformUserUrl?.(n.account),
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
                        className: h0.R,
                        children: s,
                    }),
            ],
        })
    );
}
function h2(e) {
    var t;
    let n,
        i,
        { account: s } = e,
        l =
            ((t = s.id),
            (n = (0, hv.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (i = (0, hy.L)(tH.PremiumTypes.TIER_2)),
            !n && !i && !/^\d+$/.test(t));
    return s.type === S.fg2.XBOX && l
        ? (0, A.jsx)(hZ, {})
        : s.twoWayLink
          ? null
          : s.type === S.fg2.XBOX
            ? (0, A.jsx)(hq, {})
            : s.type === S.fg2.PLAYSTATION
              ? (0, A.jsx)(hK, {})
              : null;
}
function h3(e) {
    let t,
        n,
        i,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = E.useState(u.friendSync),
        [h, x] = E.useState(u.visibility),
        [p, T] = E.useState(u.metadataVisibility),
        [f, I] = E.useState(u.showActivity),
        [N, C] = E.useState(null),
        [b, y] = E.useState(null),
        [v, j] = E.useState(!1),
        [O, L] = E.useState([]),
        D = (0, hp.ML)(u.type),
        P = hx.A.get(D);
    E.useEffect(() => {
        (m(u.friendSync), x(u.visibility), T(u.metadataVisibility), I(u.showActivity));
    }, [u]);
    let G = { inProgressVisibility: N, inProgressMetadataVisibility: b },
        M = E.useRef(G);
    return (
        E.useEffect(() => {
            M.current = G;
        }),
        E.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = M.current;
            (null != e && (x(e), hh.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (T(t), hh.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, A.jsxs)("div", {
            className: h0.FI,
            children: [
                ((t = hx.A.get(u.type)),
                (n = hx.A.get(D)),
                (i = "1" === (u.metadata ?? {})[hQ.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === S.fg2.TWITTER &&
                    i &&
                    (s = (0, A.jsx)(ss.m, {
                        text: R.intl.string(R.t.Jebrww),
                        children: (0, A.jsx)(hN.A, {
                            color: nJ.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, A.jsx)(hm.U, { size: "xs", color: nJ.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, A.jsxs)("div", {
                    className: h0.Il,
                    children: [
                        (0, A.jsx)("img", {
                            alt: n.name,
                            className: h0.gj,
                            src: (0, dd.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsxs)("div", {
                                    className: h0.$p,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: h0.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, A.jsx)("div", { className: h0.cG, children: s }),
                                    ],
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: h0.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? R.intl.format(hJ.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, A.jsx)(n2.D, {
                            className: h0.uH,
                            onClick: function () {
                                let e = hx.A.get(u.type);
                                (0, sd.openModal)((t) =>
                                    (0, A.jsx)(su.a, {
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
                                            hI.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, A.jsx)(s0.A, {
                                                children: R.intl.format(R.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": R.intl.string(R.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, A.jsx)(hA.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, A.jsx)(h2, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, hT.An)(t[hQ.pK.CREATED_AT], c);
                    switch (e.type) {
                        case S.fg2.REDDIT:
                            n = (0, h_.xE)(t, h0.Nz);
                            break;
                        case S.fg2.STEAM:
                            n = (0, h_.dy)(t, h0.Nz);
                            break;
                        case S.fg2.BLUESKY:
                        case S.fg2.TWITTER:
                        case S.fg2.MASTODON:
                            n = (0, h_.ED)(t, h0.Nz);
                            break;
                        case S.fg2.EBAY:
                            n = (0, h_.ub)(t, h0.Nz);
                            break;
                        case S.fg2.PAYPAL:
                            n = (0, h_.gZ)(t, h0.Nz);
                            break;
                        case S.fg2.TIKTOK:
                            n = (0, h_.HU)(t, h0.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, A.jsx)(
                                H.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: h0.M4,
                                    children: R.intl.format(R.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = R.intl.string(R.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== hx.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, A.jsx)(ts.Lp, { className: h0.Z3, text: R.intl.string(R.t.y2b7CA) }, "badge"),
                                (0, A.jsx)(
                                    H.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: h0.vt,
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
                                    className: h0.jy,
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
                                                      hh.A.refresh(e.type, e.id).finally(() => {
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
                        (0, A.jsx)("div", { className: h0.tJ, children: n })
                    );
                })(u),
                (S.txh.has(u.type) &&
                    (l = (0, A.jsx)(t0.d, {
                        label: R.intl.string(R.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), hh.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                S.ewM.has(u.type) &&
                    (r = (0, A.jsx)(t0.d, {
                        label: R.intl.format(R.t["6u6J0q"], { platform: P.name }),
                        checked: f,
                        onChange: function (e) {
                            (I(e), hh.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                hx.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, A.jsx)(t0.d, {
                        label: R.intl.string(R.t.FYKGsL),
                        checked: 1 === p,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, hf.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (T(n), hh.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, A.jsxs)("div", {
                    className: h0.HZ,
                    children: [
                        (0, A.jsx)(t0.d, {
                            label: R.intl.string(R.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (C(n), (0, hf.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (x(n), hh.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, A.jsx)(se.c, {});
                })(),
                u.revoked
                    ? (0, A.jsx)(r8.p, {
                          messageType: r8.Y.INFO,
                          children: R.intl.format(R.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, hf.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, A.jsx)(tJ.D, {
                            label: R.intl.string(R.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, A.jsx)(h1, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, A.jsx)(hb.A, { partner: u.type }),
            ],
        })
    );
}
function h5(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: h0.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, A.jsxs)("div", {
                          className: h0.Il,
                          children: [
                              (0, A.jsx)("img", { alt: n.name, className: io()(h0.gj, h0.sN), src: i }),
                              (0, A.jsxs)("div", {
                                  children: [
                                      (0, A.jsx)("div", {
                                          className: h0.$p,
                                          children: (0, A.jsx)(H.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: h0.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: h0.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, A.jsx)(n2.D, {
                                  className: h0.uH,
                                  onClick: () =>
                                      (0, hc.d1)(n, t.scopes, () => {
                                          hd.A.delete(t.id);
                                      }),
                                  "aria-label": R.intl.string(R.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, A.jsx)(hA.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, A.jsx)("div", {
                      className: h0.HZ,
                      children: (0, A.jsx)(t0.d, {
                          label: R.intl.string(R.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              hw.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function h6(e) {
    let t = hx.A.get(e);
    ((0, hf.A)({ platformType: t.type }),
        ti.default.track(S.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function h4() {
    let e = (0, hp.gn)(),
        t = (0, i$.A)((0, h$.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, A.jsxs)("div", {
        className: h0.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, A.jsx)(
                        hB.A,
                        { application: e, className: h0.__invalid_accountButton, innerClassName: h0.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, A.jsx)(
                        hS.A,
                        { type: e.type, className: h0.__invalid_accountButton, innerClassName: h0.U$ },
                        e.type,
                    ),
                ),
            (0, A.jsx)(ss.m, {
                text: R.intl.string(R.t.QqTz8b),
                children: (0, A.jsx)("div", {
                    className: io()(h0.ej, h0.__invalid_accountButton),
                    children: (0, A.jsx)(hE.vN, {
                        children: (0, A.jsx)("button", {
                            className: io()(h0.R8, h0.U$),
                            type: "button",
                            onClick: function () {
                                e8.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: h6 });
                            },
                            "aria-label": R.intl.string(R.t.Zhcj9X),
                            children: (0, A.jsx)(n5._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": R.intl.string(R.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function h8(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = E.useMemo(() => i.filter((e) => hx.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, A.jsx)(ol.y, { type: ol.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === s.length
              ? (0, A.jsx)(Ay.pp, {
                    theme: r,
                    className: h0.p$,
                    children: (0, A.jsx)(Ay.SG, {
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
                                h5,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, A.jsx)(
                                h3,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            hh.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, A.jsx)("div", { className: h0.V, children: t })
    );
}
let h7 = (0, d.E2)(c.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, A.jsx)(tJ.D, { label: R.intl.string(R.t["t+aGse"]), children: (0, A.jsx)(h4, {}) });
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
    h9 = (0, d.E2)(c.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, h.bG)([tn.A], () => tn.A.hidePersonalInformation),
                t = (0, h.bG)([hG.A], () => hG.A.isFetching()),
                n = (0, h.bG)([hG.A], () => hG.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: s } = (0, h.cf)([hC.default], () => ({
                    authorizedAppsFetchState: hC.default.getFetchState(),
                    authorizedApps: hC.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, hF.A)(lu.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, uB.Ay)(),
                o = (0, h.bG)([oX.default], () => oX.default.locale);
            return (E.useEffect(() => {
                i === hC.FetchState.NOT_FETCHED && hd.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(hk, {}),
                          (0, A.jsx)(h8, {
                              fetching: t || l || (r.length > 0 && i !== hC.FetchState.FETCHED),
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
            hh.A.fetch();
        },
        useSearchTerms: () => [
            R.intl.string(R.t["+/hZM/"]),
            R.intl.string(R.t.bsbMVz),
            R.intl.string(R.t.f7yOAX),
            R.intl.string(R.t.FYKGsL),
            R.intl.string(R.t["+KCMSi"]),
        ],
    });
var Se = n(206828);
let St = (0, d.zZ)(c.X.CONNECTIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3fe7U5"]),
        useSubtitle: () => R.intl.string(R.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, h.bG)([hG.A], () => hG.A.getAccounts()),
                t = E.useMemo(
                    () =>
                        hx.A.filter(
                            (e) =>
                                e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") ===
                                !0,
                        ).filter((t) => e.some((e) => e.type === t.type)),
                    [e],
                ),
                [n, i] = E.useState(0),
                [s, l] = E.useState(t),
                r = t !== s;
            r && (l(t), i(0));
            let a = E.useMemo(() => t[n], [t, n]),
                o = (0, i$.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, Se.RD)(o),
                g =
                    a?.type === S.fg2.RIOT_GAMES || a?.type === S.fg2.LEAGUE_OF_LEGENDS
                        ? R.intl.string(hJ.default["1S6oAo"])
                        : o?.name,
                A = null != a && c,
                x = A && !d && u && o?.connectionEntrypointUrl != null;
            return (
                r || !A || x || i((e) => e + 1),
                E.useMemo(
                    () =>
                        x
                            ? {
                                  type: m.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: R.intl.format(hJ.default.wUXupS, {
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
        buildLayout: () => [h7, h9],
    }),
    Sn = (0, d.zZ)(c.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        useSubtitle: () => R.intl.string(R.t.G9JfLg),
        buildLayout: () => [hg],
        initialize: () => (
            hd.A.fetch(),
            () => {
                hc.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Si = (0, d.t_)(c.X.CONNECTED_APPS_PANEL, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        useObscuredNotice: oi.L,
        buildLayout: () => [St, Sn],
    }),
    Ss = (0, d.i4)(c.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        icon: Av.LinkIcon,
        buildLayout: () => [Si],
    });
var Sl = n(625657),
    Sr = n(592598),
    Sa = n(773371),
    So = n(184809),
    Su = n(672396);
let Sd = Sg(null);
function Sc() {
    var e;
    let t = Sg(Sd);
    ((e = Sd),
        B().isEqual(B().omit(t, "old_enabled"), B().omit(e, "old_enabled")) ||
            (ti.default.track(S.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (Sd = t)));
}
function Sg(e) {
    let t = So.default.getNotificationPositionMode(),
        n = t !== S.G6Q.DISABLED,
        i = sk.Ay.getOverlayKeybind(),
        s = sk.Ay.getOverlayChatKeybind();
    return {
        enabled: Sa.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: Sr.A.isNotificationDisabled(Su.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, so.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, so.dI)(s.shortcut) : null,
        text_opacity_slider: So.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? Sa.default.enabled,
    };
}
var Sm = n(237984),
    SA = n(63035);
function SE(e) {
    (e.preventDefault(), e.stopPropagation());
}
function Sh(e) {
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
        className: io()(SA.HS, d),
        children: [
            (0, A.jsxs)(Em.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, A.jsx)("div", { className: SA.x_, children: t }),
                    (0, A.jsxs)("div", {
                        className: SA.rN,
                        children: [
                            null != n && (0, A.jsx)("div", { className: SA.$t, children: n }),
                            (0, A.jsxs)("div", {
                                className: SA.c8,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: SA.SZ,
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
                            (0, A.jsx)("div", { className: SA.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", { className: SA.Om, children: a }),
        ],
    });
}
let SS = (0, d.E2)(c.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, A.jsx)(Sh, {
            title: R.intl.string(R.t["z4/l+V"]),
            description: R.intl.string(R.t["3aZq/0"]),
            action: (0, A.jsx)(_.$, {
                variant: "primary",
                text: R.intl.string(R.t.s2nVhG),
                onClick: () => {
                    (0, Sm.b)(tD.A.USER_SETTINGS, S.BRT.APP);
                },
            }),
            "aria-label": R.intl.string(R.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [R.intl.string(R.t["z4/l+V"])],
});
var Sx = n(31300),
    Sp = n(780907),
    ST = n(684013),
    Sf = n(56562),
    SI = n(311043),
    S_ = n(569926),
    SN = n(810412),
    SC = n(41984),
    Sb = n(296027),
    Sy = n(562519);
let Sv = 5 * n(927813).A.Millis.DAY,
    Sj = new Sy.A("overlay_survey_timestamps");
function SO(e, t) {
    let i, s;
    ((i = Date.now()),
        (null != (s = Array.from(Sj.values()).reduce((e, t) => Math.max(e, t), 0)) && i - s < Sv) ||
            Array.from(Sj.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, sd.openModalLazy)(async () => {
                let i,
                    { default: s } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), Sj.add(i), (n) => (0, A.jsx)(s, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function SL() {
    (0, i6.sL)("overlay-settings");
}
function SR(e) {
    let { className: t, game: n } = e;
    return (0, i6.NP)() && null != n && n.elevated
        ? (0, A.jsx)("div", {
              className: t,
              children: (0, A.jsx)(r8.p, {
                  messageType: r8.Y.WARNING,
                  action: (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      text: R.intl.string(R.t["1iI46O"]),
                      onClick: SL,
                  }),
                  children: R.intl.format(R.t["LJzl+0"], { helpCenterLink: eT.A.getArticleURL(S.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var SD = n(760751),
    SP = n(9302),
    SG = n(656513);
let SM = new Set([
    SC.AR.INITIALIZING,
    SC.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    SC.AR.WAITING_FOR_MODULE_TRACKING,
    SC.AR.WAITING_FOR_OVERLAY_OPEN,
    SC.AR.WAITING_FOR_POPOUT_OPEN,
    SC.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    SC.AR.WAITING_FOR_REACT_INITIALIZATION,
    SC.AR.WAITING_FOR_PID_FOCUS,
    SC.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function SU(e) {
    let { children: t, className: n, onExpand: i, ...s } = e,
        [l, r] = E.useState(!1);
    return (0, A.jsx)(SG.N, {
        className: SA.uR,
        collapsibleContent: (0, A.jsx)("div", { className: SA.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, A.jsx)(Sh, {
                ...s,
                onClick: (e) => {
                    var n;
                    (r((n = !l)), i?.(n), t?.(e));
                },
                className: io()(SA.AC, n),
                action: (0, A.jsxs)("div", {
                    className: SA.rc,
                    children: [
                        s.action,
                        l
                            ? (0, A.jsx)(cF.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, A.jsx)(n5._, {
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
let SV = (0, d.E2)(c.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i2();
        (0, S_.I)(e?.id);
        let n = e?.pid,
            i = (0, h.bG)(
                [Sb.default],
                () => (null == e || null == n ? null : Sb.default.getTrackedGameByPid(n)),
                [e, n],
                iq(),
            ),
            { data: s } = (0, S_.I)(i?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, h.cf)(
                [SD.A, tl.A, SI.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, i0.hw)(e, !1, [SD.A, tl.A, SI.A]),
                [e, i],
            ),
            a = (0, h.bG)(
                [i0.Ay, SD.A, tl.A, SI.A],
                () => (null == e ? null : (0, i0.xU)(e, i0.Ay, SD.A, tl.A, SI.A)),
                [e],
                iq(),
            ),
            [o, u] = E.useState(r),
            [d, c] = E.useState(l),
            [g, m] = E.useState(!1);
        E.useEffect(() => {
            (u(r), c(l));
        }, [r, l]);
        let S = !(0, SP.supportsLegacy)(),
            x = !(0, SP.supportsOutOfProcess)(),
            { legacyEnabled: p, oopEnabled: T } = (0, h.cf)([Sb.default], () => Sb.default.getGlobalEnabledStatus());
        function f(t, n) {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case SN.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), Sp.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case SN.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), Sp.Ay.toggleOverlay(e, d, t), (s = !t && o));
                    break;
                case SN.OverlayToggledClientSettingType.LEGACY:
                    (ST.A.setEnabled(t, T), (0, SN.Q3)(t, SN.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case SN.OverlayToggledClientSettingType.OOP:
                    (ST.A.setEnabled(p, t), (0, SN.Q3)(t, SN.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || s) &&
                SO(
                    i ? SN.OverlayToggledClientSettingType.LEGACY_GAME : SN.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = S && x,
            _ = !p && !T,
            N = !o && !p && d && !S,
            C = !d && !T && o && !x,
            b = i?.overlayMethod === SC.Ue.Disabled,
            y = i?.state === SC.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && SM.has(i.state) && !b,
            j = i?.overlayMethod === SC.Ue.OutOfProcess,
            O = i?.overlayMethod === SC.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === SC.Ue.Hook,
            D = i?.state === SC.AR.OVERLAY_CRASHED || i?.state === SC.AR.OVERLAY_CRASHED_DISABLED,
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
                                    case i?.fullscreenType !== Sf.aI.BORDERLESS_FULLSCREEN:
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
                        let e = i?.fullscreenType === Sf.aI.FULLSCREEN ? R.intl.string(R.t.mJmbeC) : null;
                        return [R.intl.string(R.t.VPW4XY), e];
                    }
                    default:
                        return [R.intl.string(R.t.ONovP5), null];
                }
            })();
        (0, eS.Ay)(() => {
            Sp.Ay.getDetectableGames();
        });
        let [U, V] = E.useMemo(
            () =>
                v
                    ? ["text-muted", nJ.A.colors.TEXT_MUTED.css]
                    : y && O
                      ? ["text-feedback-warning", nJ.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && j
                        ? ["text-feedback-positive", nJ.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && L
                          ? ["text-strong", nJ.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", nJ.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, O, j, L],
        );
        return null == e
            ? null
            : (0, A.jsxs)(SU, {
                  onExpand: m,
                  className: g ? SA.tx : void 0,
                  title: (0, A.jsxs)(A.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, A.jsx)(ss.m, {
                                    text: R.intl.string(R.t["4PJP5p"]),
                                    children: (0, A.jsx)(hN.A, {
                                        size: 16,
                                        color: nJ.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, A.jsx)(hm.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: nJ.A.colors.WHITE.css,
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
                              ? (0, A.jsx)(Sx.k, { size: "xxs", color: V })
                              : (0, A.jsx)("div", { className: SA.W4 }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/semibold",
                              color: U,
                              children: R.intl.string(R.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, A.jsx)(i3.A, { game: t, pid: e?.pid, size: i3.M.MEDIUM }),
                  "aria-label": R.intl.string(R.t["87O5GC"]),
                  action: (0, A.jsx)(n2.D, {
                      onClick: (e) => SE(e),
                      children: (0, A.jsx)(t0.d, {
                          checked: (o && T) || (d && p),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      s = !1;
                                  switch (n) {
                                      case "game":
                                          (Sp.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (s = !t && o));
                                          break;
                                      case "global":
                                          (ST.A.setEnabled(t, t), (i = !t && p), (s = !t && T));
                                          break;
                                      case "both":
                                          (ST.A.setEnabled(t, t),
                                              Sp.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && p) || (!t && d)),
                                              (s = (!t && T) || (!t && o)));
                                  }
                                  let l = null;
                                  (i
                                      ? (l =
                                            "game" === n
                                                ? SN.OverlayToggledClientSettingType.LEGACY_GAME
                                                : SN.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === n
                                                ? SN.OverlayToggledClientSettingType.OOP_GAME
                                                : SN.OverlayToggledClientSettingType.OOP),
                                      null != l && SO(l, e.id ?? null));
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
                  warning: (0, A.jsx)(SR, { className: SA.Hh, game: e }),
                  children: [
                      (0, A.jsx)(Sh, {
                          title: R.intl.string(R.t["7BlVIs"]),
                          description: R.intl.string(R.t.ndgADE),
                          hint: T ? void 0 : R.intl.string(R.t.cAFVsL),
                          "aria-label": R.intl.string(R.t["7BlVIs"]),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(t0.d, {
                                      checked: o && T,
                                      disabled: x,
                                      onChange: (e) => {
                                          e && !T
                                              ? f(e, SN.OverlayToggledClientSettingType.OOP)
                                              : f(e, SN.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: SA.Kz }),
                              ],
                          }),
                      }),
                      (0, A.jsx)(Sh, {
                          title: R.intl.string(R.t.BfFpW1),
                          description: R.intl.string(R.t.OzInYk),
                          hint: p ? void 0 : R.intl.string(R.t["3sYHXm"]),
                          "aria-label": R.intl.string(R.t.BfFpW1),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(t0.d, {
                                      checked: d && p,
                                      disabled: S,
                                      onChange: (e) => {
                                          e && !p
                                              ? f(e, SN.OverlayToggledClientSettingType.LEGACY)
                                              : f(e, SN.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: SA.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = i2();
        return null != e;
    },
    useSearchTerms: () => [R.intl.string(R.t["9cb1Uz"])],
});
var Sk = n(206885);
function Sw(e) {
    let { game: t, gameApplication: n } = e,
        i = E.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, h.bG)([iQ.A], () => (null != n ? n : iQ.A.getApplication(t?.id)), [n, t]);
    return (0, A.jsx)(i3.A, { game: s, pid: i, size: i3.M.SMALL });
}
function SF(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, S_.I)(t?.id);
    let o = (0, h.cf)([i0.Ay, SD.A, tl.A, SI.A], () => (0, i0.xU)(t, i0.Ay, SD.A, tl.A, SI.A)),
        u = (0, h.cf)([SD.A, tl.A, SI.A], () => (0, i0.hw)(t, !1, [SD.A, tl.A, SI.A]), [t]),
        d = s(u),
        [c, g] = E.useState(d);
    return (
        E.useEffect(() => {
            g(d);
        }, [d]),
        (0, A.jsx)(Sh, {
            title: t.name,
            icon: (0, A.jsx)(Sw, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(t0.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), l(e, o, u), n && SO(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, A.jsx)("div", { className: SA.Kz }),
                ],
            }),
        })
    );
}
let SB = (0, d.E2)(c.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, h.cf)([Sb.default], () =>
                    Sb.default.getGlobalEnabledStatus(),
                ),
                s = (0, h.yK)([i0.Ay], () => i0.Ay.getGamesSeen(!0)).filter((e) => !(0, ER.n1)(e)),
                l = (0, i$.A)(s.map((e) => e.id)),
                r = !(0, SP.supportsLegacy)();
            function a(e) {
                ST.A.setEnabled(e, i);
                let t = i0.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SN.Q3)(e, SN.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && SO(SN.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                Sp.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () =>
                    (0, SP.supportsLegacy)()
                        ? r
                            ? R.intl.string(R.t.r9jEVw)
                            : R.intl.string(R.t.OzInYk)
                        : R.intl.string(R.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, A.jsx)(Sh, {
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      className: SA.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(t0.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              Sk.O && (0, A.jsx)("div", { className: SA.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(SU, {
                      onExpand: t,
                      className: e ? SA.tx : void 0,
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      action: (0, A.jsx)(n2.D, {
                          onClick: (e) => SE(e),
                          children: (0, A.jsx)(t0.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: SA.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(T.Ip, {
                              className: SA.XG,
                              children: s.map((e, t) =>
                                  (0, A.jsx)(
                                      SF,
                                      {
                                          rawGame: e,
                                          clientSettingType: SN.OverlayToggledClientSettingType.LEGACY_GAME,
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
    Sz = (0, d.E2)(c.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, h.cf)([Sb.default], () =>
                    Sb.default.getGlobalEnabledStatus(),
                ),
                s = !(0, SP.supportsOutOfProcess)(),
                l = (0, h.yK)([i0.Ay], () => i0.Ay.getGamesSeen(!0)).filter((e) => !(0, ER.n1)(e)),
                r = (0, i$.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                ST.A.setEnabled(i, e);
                let s = i0.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, SN.Q3)(e, SN.OverlayToggledClientSettingType.OOP, s),
                    t && SO(SN.OverlayToggledClientSettingType.OOP, s));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                Sp.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () => (Sk.O ? (s ? R.intl.string(R.t.C7bLTQ) : R.intl.string(R.t.ndgADE)) : R.intl.string(R.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, A.jsx)(Sh, {
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      className: SA.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(t0.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                              Sk.O && (0, A.jsx)("div", { className: SA.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(SU, {
                      onExpand: t,
                      className: e ? SA.tx : void 0,
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      action: (0, A.jsx)(n2.D, {
                          onClick: (e) => SE(e),
                          children: (0, A.jsx)(t0.d, { checked: n, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: SA.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(T.Ip, {
                              className: SA.XG,
                              children: l.map((e, t) =>
                                  (0, A.jsx)(
                                      SF,
                                      {
                                          rawGame: e,
                                          clientSettingType: SN.OverlayToggledClientSettingType.OOP_GAME,
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
    SY = (0, d.zZ)(c.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [SV, Sz, SB, SS],
    }),
    SX = (0, d.zD)(c.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, h.bG)([So.default], () => !So.default.disableClickableRegions),
        setValue: (e) => {
            ST.A.setDisableClickableRegions(!e);
        },
        useTitle: () => R.intl.string(R.t["+eFXxq"]),
        useSubtitle: () => R.intl.string(R.t.kivMAp),
    }),
    SH = (0, d.E2)(c.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, h.bG)([sk.Ay], () => sk.Ay.getOverlayKeybind()),
                t = !(0, SP.supportsLegacy)(),
                n = !(0, SP.supportsOutOfProcess)(),
                [i, s] = (0, h.yK)([i0.Ay], () => [i0.Ay.canShowAdminWarning, i0.Ay.getVisibleGame()], []),
                l = (0, i6.NP)(),
                r = null != s && s.elevated && i && !l,
                a = !(0, sk.DV)(e?.shortcut ?? []);
            return (0, A.jsx)("div", {
                className: SA.hc,
                children: (0, A.jsxs)("div", {
                    className: SA.eH,
                    children: [
                        (0, A.jsxs)("div", {
                            className: SA.Bu,
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
                                        className: SA.y7,
                                        children: R.intl.string(R.t.NsowVa),
                                    }),
                                a &&
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: SA.y7,
                                        children: R.intl.string(R.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, A.jsx)("div", {
                            className: SA.IH,
                            children: (0, A.jsx)(sa.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (tu()(null != e, "Keybind should never be undefined"),
                                        iH.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.VsAZcC)],
    });
var SK = n(515183),
    SW = n(682763);
let SZ = (0, d.zD)(c.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i2();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i2();
            return null != e && (0, SK.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i2(),
                n = t?.id,
                i = (0, h.bG)([Sr.A], () => Sr.A.isLimitedInteractionOverrideEnabled(n)),
                s = null != e && (0, SK.qJ)(e.pid);
            return i || s;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                s,
                { runningGameApplication: l } =
                    ((t = iJ.A.getStreamerActiveStreamMetadata()),
                    (s = i1(
                        t,
                        (i =
                            null != (n = i0.Ay.getVisibleGame())
                                ? i0.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: iQ.A.getApplication(s) ?? void 0 });
            null != l && (0, SW.x8)(l.id, e);
        },
        useTitle: () => R.intl.string(R.t.wgVQND),
        useSubtitle: () => R.intl.string(R.t["5SsyF5"]),
    }),
    Sq = (0, d.zZ)(c.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [SH, SZ, SX] });
var SQ = n(93465);
let S$ = [
    {
        title: R.t.eVE4LX,
        description: R.t["72WNqk"],
        disabledSetting: SQ.M.TEXT_CHAT,
        key: c.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: R.t.oifnSh,
        description: R.t.bgU5r0,
        disabledSetting: SQ.M.WELCOME_GENERAL,
        key: c.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: R.t.hqsZJW,
        description: R.t.kHjdqc,
        disabledSetting: SQ.M.GO_LIVE_NUDGE,
        key: c.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: R.t.sop3rn,
        description: R.t.pjgffc,
        disabledSetting: SQ.M.GAME_ACTIVITY,
        key: c.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: R.t["2QVhbb"],
        description: R.t.wQ4ilB,
        disabledSetting: SQ.M.NOW_PLAYING,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: R.t.giM9fA,
        description: R.t.EhAfWj,
        disabledSetting: SQ.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, np.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, h.bG)([Sr.A], () => Sr.A.isNotificationDisabledBySetting(SQ.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function SJ(e) {
    return (0, d.zD)(e.key, {
        useTitle: () => R.intl.string(e.title),
        useSubtitle: () => R.intl.string(e.description),
        useValue: () => !(0, h.bG)([Sr.A], () => Sr.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            ST.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let S0 = (0, d.FW)(c.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => S$.map(SJ),
    }),
    S1 = (0, d.zZ)(c.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.xOE5bA),
        buildLayout: () => [S0],
    }),
    S2 = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => R.intl.string(R.t.dnvZSg),
        useValue: () => (0, h.bG)([So.default], () => So.default.getAvatarSizeMode()),
        setValue: (e) => {
            ST.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: R.intl.string(R.t.YcOxtr), value: S.OSZ.LARGE },
            { id: "small", label: R.intl.string(R.t.BKIKqx), value: S.OSZ.SMALL },
        ],
    }),
    S3 = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => R.intl.string(R.t.J0dpcB),
        useValue: () => (0, h.bG)([So.default], () => So.default.getDisplayNameMode()),
        setValue: (e) => {
            ST.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.pwA.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: R.intl.string(R.t.ekjlPL), value: S.pwA.NEVER },
        ],
    }),
    S5 = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => R.intl.string(R.t.swsWWC),
        useValue: () => (0, h.bG)([So.default], () => So.default.getDisplayUserMode()),
        setValue: (e) => {
            ST.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.f5z.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var S6 = n(391973),
    S4 = n(489277),
    S8 = n(897720),
    S7 = n(38502);
function S9() {
    let e = S4.A.getWidgetByType(S.uss.VOICE_V3);
    if (null == e) return null;
    let t = S7.A.getWidget(e.id);
    return null != t && (0, S8.ZO)(t) ? t : null;
}
n(392164);
let xe = (0, d.sN)(c.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => R.intl.string(R.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? R.intl.string(R.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = S9();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? R.intl.string(R.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = S9();
        null != t &&
            (e < 1
                ? (0, S6.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, S6.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var xt = n(450740),
    xn = n(968898),
    xi = n(288737);
function xs(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new xi.A({
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
        user: new dC.A({ id: s, username: e }),
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
let xl = (0, d.E2)(c.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: s,
                } = (0, h.cf)([So.default], () => ({
                    avatarSizeMode: So.default.getAvatarSizeMode(),
                    displayNameMode: So.default.getDisplayNameMode(),
                    displayUserMode: So.default.getDisplayUserMode(),
                })),
                [l] = E.useState(() => [
                    xs(R.intl.string(R.t.C0ZDvo), !0, !1),
                    xs(R.intl.string(R.t.iOtj8E), !1, !1, !0),
                    xs(R.intl.string(R.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, h.bG)([S4.A, S7.A], () => {
                    let e = S4.A.getWidgetByType(S.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = S7.A.getWidget(e.id);
                    return null != t && (0, S8.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = xs(t.username)).user = t), e) : null, ...l].filter(il.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, A.jsx)(hj.N, {
                    theme: S.NJ8.ONYX,
                    children: (e) =>
                        (0, A.jsxs)("div", {
                            className: io()(SA.Y5, e),
                            children: [
                                (0, A.jsx)("div", {
                                    className: SA.kJ,
                                    children: (0, A.jsx)(xt.DH, {
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
                                    className: SA.R$,
                                    children: [
                                        (0, A.jsx)(xn.Pl, { children: R.intl.string(R.t.KNJ6Vq) }),
                                        (0, A.jsx)(xn.CS, {}),
                                        (0, A.jsx)(xn.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, A.jsx)("div", { className: SA.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    xr = (0, d.zZ)(c.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => R.intl.string(R.t.r1TZfh),
        buildLayout: () => [xl, S2, S3, S5, xe],
    });
var xa = n(54761);
function xo() {
    let [e, t] = (0, go.kn)([eu.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, z.Ay)(() => () => {
        t(gS.i.AUTO_DISMISS);
    }),
    e !== eu.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsxs)("div", {
                      className: xa.xC,
                      children: [
                          (0, A.jsx)("div", {
                              children: (0, A.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: R.intl.string(R.t.mdXZh1),
                                  className: xa.tl,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              children: (0, A.jsxs)("div", {
                                  className: xa.vJ,
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
                                  className: xa.lh,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xa.VV,
                              children: (0, A.jsx)(_.$, {
                                  variant: "primary",
                                  text: R.intl.string(R.t.Q26diF),
                                  onClick: () => void t(gS.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(se.c, { className: xa.yF }),
              ],
          });
}
function xu() {
    let e = (0, h.bG)([tn.A], () => tn.A.enabled),
        t = (0, np.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsx)(iX.w, {
                      type: "warning",
                      children: R.intl.format(R.t.fuEX5B, {
                          onClick: function () {
                              return (0, nr.openUserSettings)(c.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, A.jsx)(se.c, { className: xa.yF }),
              ],
          })
        : null;
}
let xd = (0, d.t_)(c.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                Sc(),
                sk.Ay.addChangeListener(Sc),
                Sr.A.addChangeListener(Sc),
                So.default.addChangeListener(Sc),
                Sa.default.addChangeListener(Sc),
                eJ.isPlatformEmbedded && (0, EP.a2)(),
                () => {
                    (sk.Ay.removeChangeListener(Sc),
                        Sr.A.removeChangeListener(Sc),
                        So.default.removeChangeListener(Sc),
                        Sa.default.removeChangeListener(Sc),
                        eJ.isPlatformEmbedded && (0, EP.e0)());
                }
            );
        },
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(xo, {}), (0, A.jsx)(xu, {})] });
            },
        },
        buildLayout: () => [SY, Sq, xr, S1],
    }),
    xc = (0, d.i4)(c.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        icon: Sl.l,
        usePredicate: nf.b_,
        buildLayout: () => [xd],
    });
var xg = n(687966);
let xm = (0, d.AK)(c.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.OYYY6q),
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    xA = (0, d.gN)(c.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [xm] });
var xE = n(227309),
    xh = n(29160),
    xS = n(552366),
    xx = n(938442);
function xp(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, S_.I)(t.id);
    let o = (0, h.cf)([i0.Ay, SD.A, tl.A, SI.A], () => (0, i0.xU)(t, i0.Ay, SD.A, tl.A, SI.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, h.cf)([i0.Ay], () => ({
            canToggleDetection: null == a || i0.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: i0.Ay.isDetectionEnabled(o),
        })),
        c = (0, h.bG)([i0.Ay], () => i0.Ay.getVisibleGame()),
        [g, m] = E.useState(!1),
        x = E.useRef(null),
        p = null != c && (0, i0.Es)(o) === (0, i0.Es)(c),
        T = !s && !g,
        f = !i && !p,
        I = T || f,
        _ = E.useMemo(
            () =>
                (0, ER.n1)(o)
                    ? r
                        ? o.gameName
                        : R.intl.formatToPlainString(R.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = E.useState(_ ?? "???"),
        b = io()(xx.tR, {
            [xS.LO]: !i,
            [xS.Rw]: i,
            [xS.FB]: null != o && i,
            [xS.xL]: r,
            [xS.fG]: null != l && l.length > 0,
        });
    function y() {
        (Sp.Ay.deleteEntry(o),
            l?.forEach((e) => {
                Sp.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? SD.A.getDetectableGame(o.id) : null;
        (ti.default.track(S.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, ER.n1)(o) ? o.gameName : o.name,
        }),
            (0, sd.openModalLazy)(async () => {
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
                        className: io()(xS.$K, xx.Vd),
                        children: [
                            o.verified && !s
                                ? (0, A.jsxs)("div", {
                                      className: xS.HS,
                                      children: [
                                          (0, A.jsx)("div", { className: xS.mO, children: _ }),
                                          (0, A.jsx)(ss.m, {
                                              text: R.intl.string(R.t["4PJP5p"]),
                                              children: (0, A.jsx)(hN.A, {
                                                  className: xS.qf,
                                                  size: 18,
                                                  color: nJ.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, A.jsx)(hm.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: nJ.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, A.jsx)("input", {
                                      className: io()(xS.mO, xS.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && Sp.Ay.editName(o, N);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === sO.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
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
                                        className: xS.GN,
                                        children: (0, A.jsx)(xh.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, eJ.isWindows)() && (t = t.toUpperCase()),
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
                        (0, A.jsx)(al.Y, {
                            targetElementRef: x,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, A.jsx)(cm.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": R.intl.string(R.t["UKOtz+"]),
                                    children: (0, A.jsxs)(e6.rX, {
                                        children: [
                                            T &&
                                                (0, A.jsx)(e6.Dr, {
                                                    id: "report",
                                                    label: R.intl.string(R.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            f &&
                                                (0, A.jsx)(e6.Dr, {
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
                                    className: io()(xS._Q, { [xS.g9]: t.isShown }),
                                    children: (0, A.jsx)(ss.m, {
                                        text: R.intl.string(R.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, A.jsx)(sn.K, {
                                            ...e,
                                            buttonRef: x,
                                            icon: cd.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": R.intl.string(R.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, A.jsx)(ss.m, {
                        text: R.intl.string(R.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, A.jsx)(sr.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != l && l.length > 0 && d
                                    ? (0, sd.openModalLazy)(async () => {
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
                                                              (Sp.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : Sp.Ay.toggleDetection(o);
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
                    className: xS.AQ,
                    children: l.map((e, t) =>
                        (0, A.jsxs)(
                            E.Fragment,
                            {
                                children: [
                                    (0, A.jsx)(xp, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, A.jsx)("div", { className: xS.PQ }),
                                ],
                            },
                            (0, i0.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function xT() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = EM();
    return 0 === e.length
        ? null
        : (0, A.jsx)(Y.B, {
              padding: { bottom: 32 },
              children: (0, A.jsx)(n1.n, {
                  children: (0, A.jsx)("div", {
                      children: e.map((e) =>
                          (0, A.jsx)(
                              xp,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === xE.a7 ? t : void 0 },
                              (0, i0.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let xf = (0, d.E2)(c.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, A.jsx)(xT, {}),
});
var xI = n(424994);
let x_ = (0, d.zZ)(c.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [xf, xA],
    useTitle: () => R.intl.string(R.t.jCOdvx),
    useSubtitle: () =>
        (0, h.bG)([i0.Ay], () => i0.Ay.getGamesSeen(!1).some((e) => !(0, ER.n1)(e)))
            ? R.intl.format(R.t.KPA3m9, { igdbLink: xI.s8 })
            : R.intl.string(R.t["1yiJwn"]),
});
var xN = n(890497),
    xC = n(853270),
    xb = n(969426);
function xy(e) {
    let { onClose: t } = e,
        n = (0, h.bG)([i0.Ay], () => i0.Ay.getCandidateGames()),
        [i, s] = E.useState(null),
        l = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, A.jsxs)(ar.l, {
        className: io()(xC.H, xb.Y_),
        "aria-label": R.intl.string(R.t.GTCx0p),
        children: [
            (0, A.jsx)(xN.Z, {
                selectionMode: "single",
                placeholder: R.intl.string(R.t.XqMe3N),
                value: i,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, A.jsxs)("div", {
                className: io()(xC.o, xx.xM),
                children: [
                    (0, A.jsx)(Ed.Q, { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: t }),
                    (0, A.jsx)(_.$, {
                        variant: "primary",
                        text: R.intl.string(R.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (Sp.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var xv = n(475007);
function xj() {
    let e = E.useRef(null);
    return (0, A.jsxs)("div", {
        className: io()(xv.a, AM.Gf),
        children: [
            (0, A.jsx)("span", { children: R.intl.string(R.t.xwhoqM) }),
            (0, A.jsx)(al.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, A.jsx)(xy, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, A.jsx)(Ed.Q, {
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
function xO() {
    return (0, A.jsx)("div", {
        className: io()(xx.tR, xS.eS, xS.Rw),
        children: (0, A.jsxs)("div", {
            className: io()(xS.$K, xx.Vd),
            children: [
                (0, A.jsx)("div", { className: xS.mO, children: R.intl.string(R.t.H68X9x) }),
                (0, A.jsx)(xj, {}),
            ],
        }),
    });
}
let xL = (0, d.E2)(c.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = EM(),
                n = (0, h.bG)([i0.Ay], () => i0.Ay.getVisibleGame());
            return null == n
                ? (0, A.jsx)(xO, {})
                : (0, A.jsxs)("div", {
                      className: io()(xx.Vd, xS.C2),
                      children: [
                          (0, A.jsx)(
                              xp,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === xE.a7 ? e : void 0,
                              },
                              (0, i0.Es)(n),
                          ),
                          (0, A.jsx)(xj, {}),
                      ],
                  });
        },
    }),
    xR = (0, d.zZ)(c.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => R.intl.string(R.t["MY9/Oe"]),
        buildLayout: () => [xL],
    }),
    xD = (0, d.t_)(c.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        buildLayout: () => [xR, x_],
    }),
    xP = (0, d.i4)(c.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        icon: xg.GameControllerIcon,
        usePredicate: nf.Pi,
        buildLayout: () => [xD],
    }),
    xG = (0, d.WI)(c.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => R.intl.string(R.t.BA9200),
        buildLayout: () => [xP, hu, xc, Ss],
    });
var xM = n(631670),
    xU = n(619499),
    xV = n(836602),
    xk = n(591179),
    xw = n(402860),
    xF = n(761508),
    xB = n(159001),
    xz = n(344346),
    xY = n(919395),
    xX = n(68750);
function xH(e) {
    let { title: t, children: n } = e;
    return (0, A.jsxs)("div", {
        children: [(0, A.jsx)(p.D, { variant: "text-md/medium", className: xX.Vf, children: t }), n],
    });
}
function xK(e) {
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
        className: io()(xX.UA, n),
        children: (0, A.jsxs)("div", {
            className: io()(xX.yt, i),
            children: [
                (0, A.jsx)("div", {
                    className: io()(xX.Fp, a && xX.Oz),
                    children: (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)(xH, { title: l ?? R.intl.string(R.t.Zb06yP), children: s }),
                            null != r ? (0, A.jsx)(xH, { title: R.intl.string(R.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, A.jsx)("div", { className: xX.oB, children: t }),
            ],
        }),
    });
}
var xW = n(986687),
    xZ = n(101058),
    xq = n(321191),
    xQ = n(696451),
    x$ = n(590941);
function xJ() {
    return (0, A.jsxs)("div", {
        className: x$.p$,
        children: [
            (0, A.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: x$.Sl }),
            (0, A.jsx)(p.D, { className: x$.h8, variant: "heading-lg/extrabold", children: R.intl.string(R.t.Z1OZCV) }),
            (0, A.jsx)(H.E, { className: x$.h8, variant: "text-md/normal", children: R.intl.string(R.t.ZSt4Tt) }),
            (0, A.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: x$.h8,
                children: (0, A.jsx)(_.$, {
                    variant: "primary",
                    text: R.intl.string(R.t.jQ3pqt),
                    onClick: function () {
                        ((0, t1.pX)(S.BVt.GUILD_DISCOVERY), (0, tk.default)());
                    },
                }),
            }),
        ],
    });
}
var x0 = n(81400),
    x1 = n(450232),
    x2 = n(252732),
    x3 = n(355622),
    x5 = n(408018),
    x6 = n(959070),
    x4 = n(290386),
    x8 = n(486264);
let x7 = (0, tB.Ld)(),
    x9 = (0, j.createChannelRecord)({ id: "1", type: S.rbe.DM }),
    pe = (0, tB.Ld)();
function pt(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, x4.U)({ location: "profile_customization_about_me" }),
        [u, d] = E.useState(s ?? r),
        [c, g] = E.useState((0, x5.x7)(u)),
        m = E.useRef(r),
        h = E.useRef(!1);
    return (
        E.useEffect(() => {
            if (m.current !== r) {
                let e = (0, x5.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        E.useEffect(() => {
            void 0 !== s || u === r || h.current || (d(r), g((0, x5.x7)(r)));
        }, [s, r, u]),
        (0, A.jsxs)(ae.A, {
            title: t,
            titleId: x7,
            description: R.intl.string(R.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, A.jsx)(x6.Ay, {
                    "aria-describedby": pe,
                    "aria-labelledby": x7,
                    className: x8.i,
                    innerClassName: x8.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: l,
                    channel: x9,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: nr.USER_SETTINGS_MODAL_KEY,
                    type: x3.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        h.current = !1;
                    },
                    onFocus: () => {
                        h.current = !0;
                    },
                    focused: h.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, A.jsx)(sl.A, { id: pe, children: R.intl.format(R.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var pn = n(821956),
    pi = n(562819),
    ps = n(84540),
    pl = n(467690);
function pr(e) {
    let { user: t, guild: n, className: i, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eM.Ay)(),
        o = (0, xY.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, xY.CP)(n?.id),
        c = r ? d_.wL : lH.$n;
    return (0, A.jsx)(ae.A, {
        className: i,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, A.jsxs)("div", {
            className: pl.NC,
            children: [
                (0, A.jsx)(c, {
                    size: lH.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, pi.L)({ analyticsLocations: a, guild: n });
                    },
                    className: io()({ [pl.yj]: r }),
                    children: R.intl.string(R.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: pl.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, pn.uZ)(t, n) ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.OrokWm),
                            onClick: function () {
                                (0, ps.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var pa = n(339984),
    po = n(942132);
let pu = [{ name: "gif", extensions: ["gif"] }];
function pd(e) {
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
        { newestAnalyticsLocation: g } = (0, eM.Ay)(),
        m = c ? d_.wL : lH.$n,
        h = E.useCallback(() => {
            (0, x2.XD)({
                uploadType: pa.HL.AVATAR,
                analyticsSource: g,
                filters: u ? pu : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, A.jsx)(ae.A, {
        className: a,
        title: s,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, A.jsxs)("div", {
            className: po.NC,
            children: [
                (0, A.jsx)(m, {
                    className: io()({ [po.yj]: c }),
                    size: lH.$n.Sizes.SMALL,
                    onClick: h,
                    children: l ?? R.intl.string(R.t["4OynCD"]),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: po.DT,
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
var pc = n(248778),
    pg = n(810188);
function pm(e) {
    let { user: t, guildId: n, className: i } = e,
        s = ao.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, eM.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, xY.B0)(t, n),
        d = (0, pc.ux)("DisplayNameStylesSection"),
        [c, g] = (0, go.kn)(d ? [eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        h = (0, E.useCallback)(() => {
            (g(gS.i.TAKE_ACTION),
                ti.default.track(S.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eU.L)({ analyticsLocations: l, guildId: n }));
        }, [l, n, g]),
        x = (0, E.useCallback)(() => {
            ((0, ps.p)({ displayNameStyles: null }), ti.default.track(S.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        p = (0, E.useCallback)(() => {
            (0, ps.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        T = void 0 !== o ? o : null != n ? a : r;
    return (0, A.jsx)(ae.A, {
        title: R.intl.string(eV.default["86GtGH"]),
        titleBadge: m ? (0, A.jsx)(ts.Lp, { text: R.intl.string(R.t.y2b7CA), className: pg.A }) : void 0,
        className: i,
        showPremiumIcon: s,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: pg.N,
            children: [
                (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(eV.default.vJqrIg), onClick: h }),
                null == n &&
                    null != T &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eV.default.ymq8WQ),
                        onClick: x,
                    }),
                null != n &&
                    null != T &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eV.default["j/KRxc"]),
                        onClick: p,
                    }),
            ],
        }),
    });
}
var pA = n(637193),
    pE = n(622410);
function ph(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: s } = (0, eM.Ay)(),
        l = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, xY.rv)(t, n?.id),
        d = E.useCallback(() => {
            (0, pA.p)({ analyticsLocations: s, guildId: n?.id });
        }, [s, n?.id]),
        c = E.useCallback(() => {
            (0, ps.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, A.jsx)(ae.A, {
        title: R.intl.string(R.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: pE.u,
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
var pS = n(88524);
function px(e) {
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
        { newestAnalyticsLocation: c } = (0, eM.Ay)(),
        g = d ? d_.wL : lH.$n;
    return (0, A.jsx)(ae.A, {
        className: l,
        title: R.intl.string(R.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, A.jsxs)("div", {
            className: pS.NC,
            children: [
                (0, A.jsx)(g, {
                    className: io()({ [pS.yj]: d }),
                    size: lH.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, x2.XD)({ uploadType: pa.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: R.intl.string(R.t.N0bC3P),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: pS.DT,
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
var pp = n(617061),
    pT = n(625613);
function pf(e) {
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
        { analyticsLocations: u } = (0, eM.Ay)(),
        d = ao.Ay.canUsePremiumProfileCustomization(t),
        c = (0, xY.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, xY.nZ)(n?.id);
    E.useEffect(() => {
        d &&
            (ti.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tH.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tz.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tY.uq)(tH.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let h = a ? d_.wL : lH.$n;
    return (0, A.jsx)(ae.A, {
        forcedDivider: r,
        borderType: ux.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: m,
        className: s,
        children: (0, A.jsxs)("div", {
            className: pT.NC,
            children: [
                (0, A.jsx)(h, {
                    size: lH.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, pp.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: io()({ [pT.yj]: a }),
                    children: R.intl.string(R.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: pT.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.uMuafO),
                            onClick: function () {
                                (0, ps.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var pI = n(515727),
    p_ = n(594401);
function pN(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: s } = (0, eM.Ay)(),
        l = (0, xY.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, xY.Tu)(n?.id),
        [o, u] = (0, go.kn)([eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, A.jsx)(ae.A, {
        showBorder: d,
        borderType: d ? ux.i.NEW_UPSELL : ux.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d ? (0, A.jsx)(ts.Lp, { text: R.intl.string(R.t.y2b7CA), className: p_.Ad }) : void 0,
        description: d ? R.intl.string(R.t.yMoMAt) : void 0,
        errors: a,
        children: (0, A.jsxs)("div", {
            className: p_.NC,
            children: [
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t["9/hmle"]),
                    onClick: function () {
                        ((0, pI.w)({ analyticsLocations: s, guild: n }), u(gS.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != l : null != r) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: p_.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.nQBruk),
                            onClick: function () {
                                (0, ps.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var pC = n(602853),
    pb = n(654107),
    py = n(999291),
    pv = n(101928),
    pj = n(819169),
    pO = n(317097),
    pL = n(508274),
    pR = n(379012);
function pD(e) {
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
        d = E.useRef(null),
        c = (0, pC.r)(nJ.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = nJ.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, x2.sN)(i),
        h = (0, pO.Hl)(i),
        x = h === c ? g : h,
        p = m ? nJ.A.unsafe_rawColors.WHITE.css : nJ.A.unsafe_rawColors.PRIMARY_530.css,
        T = (0, pj.A)(a),
        f = (0, pj.A)(o),
        [I, _] = E.useState((0, or.A)());
    return (
        E.useEffect(() => {
            (T !== a || f !== o) && _((0, or.A)());
        }, [o, a, f, T]),
        (0, A.jsx)(al.Y, {
            targetElementRef: d,
            positionKey: I,
            renderPopout: (e) =>
                (0, A.jsx)(pL.VN, {
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
                    className: io()(pR.oP, { [pR.r9]: l }),
                    children: [
                        (0, A.jsx)(n2.D, {
                            ...n,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? S.tEg : t,
                            style: { backgroundColor: h, borderColor: x },
                            className: pR.nf,
                            "aria-label": R.intl.string(R.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, A.jsx)(aa.PencilIcon, {
                                size: "custom",
                                className: pR.BW,
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
var pP = n(190377);
function pG(e) {
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
        c = (0, py.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, pv.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        E = ao.Ay.canUsePremiumProfileCustomization(t),
        h = null != n ? n : t.getAvatarURL(r, 80),
        S = (0, pC.r)(nJ.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, pb.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, A.jsx)(ae.A, {
              title: R.intl.string(R.t.DMeO2X),
              disabled: !E && !l,
              className: io()(pP.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, A.jsxs)("div", {
                  className: pP.hd,
                  children: [
                      (0, A.jsx)("div", {
                          className: pP.YX,
                          children: (0, A.jsx)(pD, {
                              onChange: (e) => s([e, m]),
                              color: g,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: pP.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: R.intl.string(R.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, A.jsx)("div", {
                          className: pP.YX,
                          children: (0, A.jsx)(pD, {
                              onChange: (e) => s([g, e]),
                              color: m,
                              suggestedColors: x,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: pP.yz,
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
                              className: pP.WA,
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
function pM(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tB.GV)();
    return (0, A.jsx)(ae.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, A.jsx)(sc.k, {
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
var pU = n(427262),
    pV = n(684732),
    pk = n(576705),
    pw = n(931175);
function pF(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: s, user: l, guild: r } = e,
        a = (0, h.bG)([pk.A], () => pk.A.can(S.xBc.CHANGE_NICKNAME, r) || pk.A.can(S.xBc.MANAGE_NICKNAMES, r)),
        o = (0, hy.L)(tH.PremiumTypes.TIER_2);
    return (0, A.jsxs)(ae.A, {
        title: R.intl.string(R.t.me1lRk),
        errors: t,
        children: [
            (0, A.jsx)(sc.k, {
                value: n ?? i ?? "",
                placeholder: s,
                maxLength: S.d0r,
                onChange: function (e) {
                    (0, ps.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : R.intl.string(R.t.gzjxQi),
            }),
            o && (0, A.jsx)(pm, { user: l, guildId: r.id, className: pw.F }),
        ],
    });
}
var pB = n(233454);
let pz = "/assets/b25da78aa7949feb.png";
function pY(e) {
    let { user: t, showOverlay: n, children: i } = e,
        s = (0, uB.Ay)(),
        { analyticsLocations: l } = (0, eM.Ay)(tD.A.PREMIUM_UPSELL_OVERLAY);
    return (E.useEffect(() => {
        n &&
            (ti.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: tH.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tz.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                (0, tY.uq)(tH.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, l]),
    n)
        ? (0, A.jsxs)("div", {
              className: pB.ry,
              children: [
                  (0, A.jsx)("div", { children: i }),
                  (0, A.jsxs)("div", {
                      className: pB.Wc,
                      children: [
                          (0, A.jsx)("img", {
                              className: pB.Tn,
                              alt: R.intl.string(R.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case S.NJ8.ASH:
                                      case S.NJ8.DARK:
                                      case S.NJ8.ONYX:
                                          return pz;
                                      case S.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return pz;
                                  }
                              })(s),
                          }),
                          (0, A.jsxs)("div", {
                              className: pB._9,
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
                          (0, A.jsx)(uS.A, {
                              size: lH.$n.Sizes.LARGE,
                              color: lH.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ao.Ay.isPremium(t)
                                      ? R.intl.string(R.t.AfRWI8)
                                      : R.intl.string(R.t.nkdUym),
                              },
                              subscriptionTier: tH.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var pX = n(203164);
function pH() {
    let e = (0, h.bG)([lu.default], () => {
            let e = lu.default.getCurrentUser();
            return (tu()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, hy.L)(tH.PremiumTypes.TIER_2),
        n = (0, h.bG)([xV.A, sp.A], () => sp.A.getGuild(xV.A.selectedGuildId));
    tu()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, h.cf)([xV.A], () => ({ ...xV.A.getPendingChanges(n.id), errors: xV.A.getErrors(n.id) })),
        d = (0, xZ.V7)({ userId: e.id, image: i }),
        c = (0, x0.EC)(n.id),
        g = (0, h.bG)([xQ.Ay], () => (null == n.id ? null : xQ.Ay.getMember(n.id, e.id))),
        m = (0, h.bG)([xq.A], () => xq.A.getGuildMemberProfile(e.id, n.id)),
        E = ao.Ay.canUsePremiumProfileCustomization(e),
        S = (0, xY.z5)(i, g?.avatar),
        x = (0, xY.Ac)(l, m?.banner),
        p = (0, pV.l)(o, m?.themeColors),
        T = m?.bio ?? "",
        f = m?.pronouns ?? "";
    return (0, A.jsxs)("div", {
        className: pX.Q,
        children: [
            (0, A.jsx)(
                pF,
                {
                    errors: u?.nick ?? c?.nick,
                    username: pU.Ay.getName(e),
                    pendingNick: s,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, A.jsx)(
                pM,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, ps.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, A.jsxs)(pY, {
                user: e,
                showOverlay: !E,
                children: [
                    (0, A.jsx)(
                        pd,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.lqaIxI), (0, A.jsx)(x1.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, x2.rM)(e, g?.avatar, (e) => (0, ps.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, A.jsx)(
                        pr,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t["7v0T9P"]), (0, A.jsx)(x1.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, A.jsx)(pm, { user: e, guildId: n.id }),
                    (0, A.jsx)(
                        ph,
                        { user: e, guild: n, titleIcon: (0, A.jsx)(x1.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, A.jsx)(
                        pf,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.wR5wOo), (0, A.jsx)(x1.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, A.jsx)(
                        pN,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.GWrZOd), (0, A.jsx)(x1.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, A.jsx)(
                        px,
                        {
                            showRemoveBannerButton: x,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, x2.rM)(e, m?.banner, (e) => (0, ps.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, A.jsx)(pG, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, ps.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: p,
                    }),
                    (0, A.jsx)(
                        pt,
                        {
                            placeholder: R.intl.string(R.t["/7NKgv"]),
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.ZzAR2Y), (0, A.jsx)(x1.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, ps.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: T,
                            disabled: !E,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var pK = n(832131);
function pW(e) {
    (0, sd.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, A.jsx)(t, { source: { ...e, page: S.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function pZ(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eM.Ay)(tD.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, h.bG)([lu.default], () => {
            let e = lu.default.getCurrentUser();
            return (tu()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        l = (0, h.bG)([xQ.Ay], () => (null != t ? xQ.Ay.getMember(t.id, s.id) : null)),
        r = (0, h.bG)([xq.A], () => !xq.A.isFetchingProfile(s.id, t?.id)),
        a = (0, h.bG)([tn.A], () => tn.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, h.cf)([xV.A], () => xV.A.getPendingChanges(t?.id)),
        c = (0, xZ.V7)({ userId: s.id, image: o }),
        g = (0, xY.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, xY.B0)(s, t?.id);
    return (E.useEffect(() => () => e8.h.wait(xB.IM), []), a)
        ? (0, A.jsx)(oi.A, {})
        : r
          ? (0, A.jsxs)(eM.f5, {
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
                                  (0, A.jsx)(r9.A, { guildId: t.id, onChange: n }),
                                  (0, A.jsx)(xK, {
                                      profilePreviewTitle: (0, A.jsx)(p.D, {
                                          variant: "heading-md/medium",
                                          className: pK.YV,
                                          children: R.intl.formatToPlainString(R.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, A.jsx)(xW.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: ao.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: pW,
                                          containerClassName: pK.ti,
                                      }),
                                      nameplatePreview: (0, A.jsx)(xz.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? pK.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, A.jsx)(pH, {}),
                                  }),
                              ],
                          })
                        : (0, A.jsx)(xJ, {}),
                ],
            })
          : (0, A.jsx)(ol.y, {});
}
var pq = n(903209),
    pQ = n(641130);
function p$(e) {
    let { children: t, notice: n } = e;
    return (0, A.jsxs)("div", { className: pQ.r, children: [n, (0, A.jsx)("div", { children: t })] });
}
var pJ = n(823092),
    p0 = n(839534),
    p1 = n(379197),
    p2 = n(488430),
    p3 = n(457421),
    p5 = n(940622),
    p6 = n(25176),
    p4 = n(757993);
let p8 = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: s } = (0, eM.Ay)(tD.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = E.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, p5.mb)(p6.RN.UPSELL_BANNER)),
        (t = (0, p5.mb)(p6.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, h.bG)([p3.A], () => p3.A.getMarketingBySurface(p1.R.EDIT_PROFILE_SETTINGS))),
        (i = E.useMemo(
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
        E.useMemo(
            () => ({ ...i, type: p2.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, pJ.L_)();
    return (
        E.useEffect(() => {
            (ti.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tH.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            }),
                (0, tz.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                    (0, tY.uq)(tH.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
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
                            (0, p0.Cz)({
                                analyticsLocations: s,
                                analyticsSource: tD.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
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
var p7 = n(451909),
    p9 = n(202639),
    Te = n(285373),
    Tt = n(835071),
    Tn = n(724651),
    Ti = n(732280),
    Ts = n(590180),
    Tl = n(898461),
    Tr = n(469054),
    Ta = n(601298),
    To = n(207803),
    Tu = n(461797);
let Td = Object.keys(Tu.jB);
function Tc(e) {
    let t = null == e ? Td : Td.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var Tg = n(201805),
    Tm = n(221650);
function TA(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        s = (0, Tg.Xf)({ useReducedMotion: i }),
        { name: l, header: r } = E.useMemo(() => {
            let e = (0, Tu.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, A.jsxs)("div", {
        className: Tm.kL,
        children: [
            (0, A.jsx)(n2.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                className: Tm.x6,
                "aria-label": R.intl.string(R.t["44yJxh"]),
                children: s.render(),
            }),
            (0, A.jsxs)(n2.D, {
                onClick: () => {
                    (n(), s.startAnimation(!1));
                },
                "aria-label": `${l}: ${R.intl.string(R.t["44yJxh"])}`,
                className: Tm.Lt,
                children: [
                    (0, A.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: Tm.L_ }),
                    (0, A.jsx)(H.E, {
                        className: Tm._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var TE = n(511484),
    Th = n(811611),
    TS = n(206697),
    Tx = n(507553);
function Tp(e, t) {
    let n = Tx.A.useField("scrollPosition"),
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion);
    (0, E.useEffect)(() => {
        let s = e.current;
        if (null == s || n !== t) return;
        let l = requestAnimationFrame(() => {
            (s.scrollIntoView({ behavior: i ? "auto" : "smooth" }), Tx.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, n, i]);
}
var TT = n(844222),
    Tf = n(842092);
let TI = "/assets/d4955aabdcb5bdee.png",
    T_ = { assetOrigin: Tr.E.NEW_ASSET, imageUri: TI, staticImageUri: TI, description: "", originalAsset: void 0 };
function TN(e) {
    let { user: t } = e,
        { reducedMotion: n } = E.useContext(TT.C),
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
        } = (0, h.cf)([xV.A], () => {
            let e = xV.A.getPendingChanges(),
                t = xV.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, xZ.V7)({ userId: t.id, image: g ?? i });
    return (0, A.jsx)(xW.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? s ?? T_,
        pendingDisplayNameStyles: x ?? a,
        pendingAvatar: p,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== S ? S : l,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : Tf.WX,
        containerClassName: Tf.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var TC = n(829497);
function Tb(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        s = ao.Ay.isPremium(t),
        l = ao.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, h.cf)([xV.A], () => {
            let e = xV.A.getPendingChanges(),
                t = xV.A.getErrors(),
                n = xV.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, E.useState)(Tc()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, E.useMemo)(() => {
                    let t = (0, Tu.Wt)(e);
                    return {
                        banner: (0, Ta.X)({
                            assetOrigin: Tr.E.NEW_ASSET,
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
                r = (0, h.bG)([Ts.A], () => {
                    let e = Ts.A.getProduct(s);
                    return (0, Tl.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, E.useEffect)(() => {
                (0, To.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: l });
            }, [n, i, r, l]);
            let a = (0, E.useCallback)(() => {
                let n = Tc(e);
                (t(n), ti.default.track(S.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = E.useRef(null);
    Tp(m, eC._F.TRY_IT_OUT);
    let { analyticsLocations: x, sourceAnalyticsLocations: T } = (0, eM.Ay)(tD.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function f(e) {
        e && ((0, TS.T)(), ti.default.track(S.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    E.useEffect(() => {
        n &&
            (ti.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tH.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: S.liQ.USER_SETTINGS },
                location_stack: T,
            }),
            (0, tz.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, T, () => (0, tY.uq)(tH.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [T, t, n]);
    let I = (0, Ti.V)()?.subscriptionTrial?.skuId === tH.pe.TIER_2,
        _ = (0, Tn.O)(),
        N = (0, TE.U9)(_, tH.pe.TIER_2);
    return i
        ? (0, A.jsx)(eM.f5, {
              value: x,
              children: (0, A.jsxs)(ux.A, {
                  ref: m,
                  className: TC.MT,
                  type: ux.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, A.jsx)(xK, {
                          stickyPreview: !1,
                          layoutClassName: TC.th,
                          profilePreviewTitle: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(r4.t, { size: "md", color: "currentColor", className: TC.PC }),
                                  R.intl.string(R.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, A.jsxs)(A.Fragment, {
                              children: [(0, A.jsx)(TA, { preset: c, onShuffle: g }), (0, A.jsx)(TN, { user: t })],
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
                                              className: TC.h_,
                                              variant: "text-sm/normal",
                                              children: R.intl.string(R.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsx)(pG, {
                                      className: TC.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, xZ.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: To.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, A.jsx)(px, {
                                      className: TC.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: To.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, A.jsx)(pd, {
                                          className: TC.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: To.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: R.intl.string(R.t["7z0D1c"]),
                                          sectionTitle: R.intl.string(R.t.vtFfPX),
                                      }),
                                  (0, A.jsx)(pm, { user: t, className: TC.fz }),
                                  !I &&
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/normal",
                                          children: R.intl.string(R.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !I &&
                          (0, A.jsx)(p9.d, {
                              onSubscribeModalClose: f,
                              className: TC.Kv,
                              showUpsell: !0,
                              text: R.intl.format(R.t.TmfgI2, {
                                  onClick: () => {
                                      (0, Tt.K)({ onSubscribeFinish: f });
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
                                  (0, A.jsx)("div", { className: TC.BU }),
                                  (0, A.jsx)(Th.Ay, {
                                      type: tH.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tH.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var Ty = n(814390),
    Tv = n(643056),
    Tj = n(843282),
    TO = n(145497),
    TL = n(685073),
    TR = n(534400),
    TD = n(581781),
    TP = n(743981),
    TG = n(195801);
let TM = (0, tB.Ld)(),
    TU = E.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            s = (0, h.cf)([lu.default], () => (0, TL.Zo)(lu.default.getCurrentUser()?.primaryGuild)),
            l = void 0 !== n ? n : (s.guildId ?? null),
            r = E.useMemo(() => {
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
            a = E.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = E.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, A.jsx)(TD.A, {
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
            u = E.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, A.jsx)(TO.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [r],
            ),
            d = E.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, A.jsx)(TR.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: TP.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [r],
            ),
            c = E.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, A.jsx)(A.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = E.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = E.useCallback((e) => e === l, [l]),
            S = E.useCallback((e) => e, []),
            x = E.useCallback(() => {
                i?.(null);
            }, [i]),
            p = E.useRef(null);
        return (
            Tp(p, eC._F.GUILD_TAG),
            (0, A.jsxs)(ae.A, {
                title: R.intl.string(R.t.Pdd1nd),
                titleId: TM,
                ref: p,
                children: [
                    (0, A.jsx)(H.E, {
                        className: TG.VA,
                        variant: "text-sm/normal",
                        children: R.intl.string(R.t.mlZ6Jx),
                    }),
                    (0, A.jsx)(Tj.Pw, {
                        className: TG.Lt,
                        optionClassName: TG.S0,
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
var TV = n(318785),
    Tk = n(992526),
    Tw = n(470739);
let TF = function () {
    return (0, Tk.J)({ location: "UserSettingsProfileCustomization" })
        ? (0, A.jsx)(ae.A, {
              title: R.intl.string(R.t.l6w3Vj),
              description: R.intl.string(R.t.joHqdj),
              children: (0, A.jsx)(_.$, {
                  text: R.intl.string(R.t.wRraFx),
                  onClick: () => {
                      (0, Tw._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var TB = n(953726);
let Tz = (0, tB.Ld)();
function TY(e) {
    let t = (0, hy.L)(tH.PremiumTypes.TIER_2);
    return (0, A.jsxs)(ae.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: R.intl.string(R.t["9AjdkD"]),
        titleId: Tz,
        children: [
            (0, A.jsx)("div", {
                children: (0, A.jsx)(sc.k, {
                    "aria-labelledby": Tz,
                    placeholder: e.placeholder,
                    maxLength: S.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, A.jsx)(pm, { user: e.user, className: TB.F }),
        ],
    });
}
var TX = n(376626);
function TH(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = L.m$.useSetting(),
        s = void 0 !== n ? n : i;
    return (0, A.jsx)("div", {
        className: TX.u,
        children: (0, A.jsx)(t0.d, {
            label: R.intl.string(R.t["3cWDuO"]),
            description: s ? null : R.intl.formatToPlainString(R.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === i ? (0, xM._e)() : (0, ps.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function TK(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, pC.r)(nJ.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, pb.rh)(l, r, !1),
        o = (0, pO.LX)(a[0]);
    return (0, A.jsx)(ae.A, {
        title: R.intl.string(R.t["/X3fkf"]),
        children: (0, A.jsx)(pD, { onChange: (e) => s(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var TW = n(518477);
let TZ = function () {
    let e = (0, h.bG)([uO.default], () => uO.default.getId());
    return (0, A.jsx)(ae.A, {
        title: R.intl.string(R.t.Jzj9q4),
        children: (0, A.jsx)(_.$, {
            text: R.intl.string(R.t.Geikwq),
            onClick: () => {
                (0, xw.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tD.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: TW.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var Tq = n(654910);
function TQ() {
    let e = (0, h.bG)([lu.default], () => {
            let e = lu.default.getCurrentUser();
            return (tu()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, h.bG)([xq.A], () => xq.A.getUserProfile(e.id)),
        n = (0, Tv.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, h.cf)([xV.A], () => {
            let e = xV.A.getPendingChanges(),
                t = xV.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, xZ.V7)({ userId: e.id, image: i }),
        E = (0, x0.EC)(),
        S = ao.Ay.canUsePremiumProfileCustomization(e),
        x = (0, xY.z5)(i, e.avatar),
        p = (0, xY.Ac)(l, t?.banner),
        T = (0, py.Ay)(e.id),
        f = T?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (E?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (E?.bio ?? []),
        N = (0, TV.b)(),
        C = null != (0, TL.Zo)(e.primaryGuild).guildId;
    return (0, A.jsxs)("div", {
        className: Tq.Q,
        children: [
            (0, A.jsx)(TY, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: s,
                onGlobalNameChange: (e) => (0, ps.p)({ globalName: e }),
                user: e,
            }),
            (0, A.jsx)(
                pM,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, ps.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, A.jsx)(TZ, {}),
            (0, A.jsx)(
                pd,
                {
                    onAvatarChange: (e) => {
                        ((0, ps.p)({ avatar: e }), (0, xY.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: x,
                    errors: g.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, A.jsx)(pr, { user: e, sectionTitle: R.intl.string(R.t["7v0T9P"]) }, "decoration"),
            (0, A.jsx)(ph, { user: e }),
            (0, A.jsx)(pf, { user: e, sectionTitle: R.intl.string(R.t.wR5wOo) }, "effect"),
            (0, A.jsx)(pN, { user: e, sectionTitle: R.intl.string(R.t.GWrZOd) }, "frame"),
            S
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(
                              px,
                              {
                                  showRemoveBannerButton: p,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, ps.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, A.jsx)(pG, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, ps.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, A.jsx)(
                      TK,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, ps.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, A.jsx)(
                pt,
                {
                    sectionTitle: R.intl.string(R.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, ps.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, A.jsx)(TU, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, ps.p)({ primaryGuildId: e }),
                }),
            null != f &&
                !n &&
                (0, A.jsx)(TH, { legacyUsername: f, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, A.jsx)(TF, {}, "badges"),
        ],
    });
}
function T$() {
    (0, sd.openModalLazy)(async () => {
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
function T0() {
    let e = (0, h.bG)([lu.default], () => {
            let e = lu.default.getCurrentUser();
            return (tu()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, h.bG)([tn.A], () => tn.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, h.cf)([xV.A], () => ({ ...xV.A.getPendingChanges(), showNotice: xV.A.showNotice() })),
        a = (0, xZ.V7)({ userId: e.id, image: i }),
        o = (0, xY.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, Ty.A)() && null != n ? p7.Ay.parse(void 0, n).content : n,
        d = ao.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eM.Ay)(tD.A.USER_SETTINGS_USER_PROFILE);
    E.useEffect(() => () => e8.h.wait(xM.IM), []);
    let [g, m] = E.useState(!1),
        x = !d,
        p = E.useRef(null);
    return t
        ? (0, A.jsx)(oi.A, {})
        : (0, A.jsxs)(eM.f5, {
              value: c,
              children: [
                  (0, A.jsx)(p8, {}),
                  (0, A.jsx)(xK, {
                      profilePreview: (0, A.jsx)(xW.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: T$,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: TJ.ti,
                      }),
                      nameplatePreview: (0, A.jsx)(xz.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? TJ.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, A.jsx)(TQ, {}),
                  }),
                  (0, A.jsx)(du.L, {
                      innerRef: p,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: x,
                      children: (0, A.jsx)("div", {
                          ref: p,
                          children: (0, A.jsx)(Tb, { user: e, shouldShow: x, isVisible: g }),
                      }),
                  }),
                  x &&
                      !l &&
                      (0, A.jsx)(p9.d, {
                          className: TJ.EL,
                          showUpsell: !g,
                          text: R.intl.format(R.t.TmfgI2, { onClick: () => (0, Tt.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, A.jsx)(Te.l, {
                              size: "md",
                              location: tD.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, A.jsx)("div", {
                              className: TJ.Xl,
                              children: (0, A.jsx)(_.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (ti.default.track(S.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          p?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: R.intl.string(R.t.uw9zI7),
                                  icon: r4.t,
                              }),
                          }),
                      }),
              ],
          });
}
var T1 = n(625494);
n(46121);
var T2 = n(944983);
let T3 = { [eC.Eq.USER_PROFILE]: "main_profile_tab", [eC.Eq.GUILD]: "guild_profile_tab" },
    T5 = (0, d.E2)(c.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, h.bG)([sT.A, cl.Ay, xV.A], () => {
                    let e = xV.A.selectedGuildId ?? sT.A.getGuildId();
                    return null == e || xV._.has(e) ? cl.Ay.getFlattenedGuildIds().find((e) => !xV._.has(e)) : e;
                }),
                t = (0, h.bG)([sp.A], () => sp.A.getGuild(e)),
                n = (0, h.bG)([xV.A], () => xV.A.showNotice()),
                i = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
                s = Tx.A.useField("subsection");
            return (
                E.useEffect(() => {
                    (0, n7._)(T3[s]);
                }, [s]),
                E.useEffect(() => {
                    null != i && t?.id != null && (0, pq.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, A.jsx)(p$, {
                    children: (0, A.jsxs)(uZ.F, {
                        component: (0, A.jsx)(sl.A, {
                            children: (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(R.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, A.jsxs)(xF.V, {
                                className: T2.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (n) {
                                            ((0, n9.fO)({ duration: 300, intensity: 1.4 }),
                                                T1._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eC.Eq.GUILD && null != t && (0, xB.V2)(t.id),
                                            Tx.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, A.jsx)(
                                        xF.V.Item,
                                        {
                                            className: T2.YU,
                                            id: eC.Eq.USER_PROFILE,
                                            children: R.intl.string(R.t["2p07FR"]),
                                        },
                                        eC.Eq.USER_PROFILE,
                                    ),
                                    (0, A.jsx)(
                                        xF.V.Item,
                                        {
                                            className: io()(T2.YU, T2.HY),
                                            "aria-label": R.intl.string(R.t.kPHroX),
                                            id: eC.Eq.GUILD,
                                            children: R.intl.string(R.t.kPHroX),
                                        },
                                        eC.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eC.Eq.GUILD
                                ? (0, A.jsx)(pZ, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, n9.fO)({ duration: 300, intensity: 1.4 }),
                                                  T1._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, xB.JJ)(e.id);
                                      },
                                  })
                                : (0, A.jsx)(T0, {}),
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
    T6 = (0, d.zZ)(c.X.PROFILE_CATEGORY, { buildLayout: () => [T5] });
var T4 = n(379633);
function T8() {
    let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, dN.A)({ userId: e?.id, size: I._3.SIZE_48 });
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
                                  (0, A.jsx)(aa.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let T7 = (0, d.t_)(c.X.PROFILE_PANEL, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        notice: { stores: [xV.A], element: xU.A },
        initialize: () => () =>
            e8.h.wait(() => {
                (0, xM.F7)();
            }),
        buildLayout: () => [T6],
    }),
    T9 = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: ft,
        StronglyDiscouragedCustomComponent: T8,
        usePredicate: () => !(0, xk.X)("user_settings_sidebar"),
        buildLayout: () => [T7],
    }),
    fe = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: ft,
        StronglyDiscouragedCustomComponent: T8,
        usePredicate: () => (0, xk.X)("user_settings_sidebar"),
        onClick: () => {
            let e = uO.default.getId();
            (0, xw.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function ft() {
    let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, dN.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return (0, A.jsx)(f.eu, { src: t, avatarDecoration: n, size: I._3.SIZE_20, "aria-hidden": !0 });
}
let fn = (0, d.WI)(c.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [T9, fe] });
var fi = n(98207),
    fs = (n(204925), n(818348));
let fl = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, sd.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 888363),
            );
            return (n) => (0, A.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? fs.tE : null, onCloseCallback: t },
    );
};
var fr = n(940856),
    fa = n(506775),
    fo = n(379257),
    fu = n(121780),
    fd = n(666113);
function fc() {
    let e = fu.A.getCountryCode(),
        t = null != e ? fd.IN[e.alpha2] : void 0;
    fo.A.openUrl(eT.A.getArticleURL(t ?? fd.k9));
}
var fg = n(521169);
function fm() {
    return (0, fg.w)(fd.Vc);
}
var fA = n(680091);
function fE() {
    let e = fm(),
        t = (0, fa.ZP)();
    if (!e) return null;
    switch (t) {
        case fa.M$.ADULT:
            return R.intl.format(fA.default.gi4ulu, { handleOnAgeGatedContentHook: fa.M0 });
        case fa.M$.TEEN:
            return R.intl.format(fA.default["221iML"], {
                handleOnAgeGatedContentHook: fa.M0,
                handleOnConfirmAgeHook: fa.aP,
            });
        case fa.M$.UNVERIFIED:
            return R.intl.format(fA.default["W0/7DD"], {
                handleOnAgeGatedContentHook: fc,
                handleOnConfirmAgeHook: fa.aP,
            });
    }
}
var fh = n(26137),
    fS = n(957485);
function fx() {
    let e = fm(),
        t = (0, fa.ZP)();
    return e ? { icon: t === fa.M$.ADULT ? fh.r : fS.i, backgroundColor: nJ.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function fp() {
    let e = fx();
    return null != e ? { type: m.hp.ICON, ...e } : null;
}
function fT() {
    return fm() ? R.intl.string(R.t.piqs0o) : null;
}
var ff = n(438140);
let fI = [{ badgeType: m.Xi.NEW, dismissibleContent: eu.M.TINY_BRONCO_SETTINGS }],
    f_ = [];
function fN() {
    return (0, ff.Wt)() ? fI : f_;
}
var fC = n(36149),
    fb = n(207560),
    fy = (((a = {}).LEGACY = "legacy"), (a.TINY_BRONCO = "tinyBronco"), a),
    fv = (((o = {}).VERIFY = "verify"), (o.EDIT = "edit"), (o.INFO = "info"), o);
function fj(e, t) {
    let n = (0, h.bG)([lu.default], () => null != lu.default.getCurrentUser()),
        i = (0, fb.fk)(),
        s = (0, fa.ZP)(),
        l = (0, fC.Y2)(),
        r = fm();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (s) {
        case fa.M$.UNVERIFIED:
            return "verify" === e;
        case fa.M$.TEEN:
            return e === (r ? "info" : "verify");
        case fa.M$.ADULT:
            return e === (l ? "edit" : "info");
    }
}
var fO = n(841365);
function fL() {
    let e = (0, fa.hD)();
    return (0, A.jsxs)(H.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, R.intl.format(fO.default.WM5adV, { handleOnHelpUrlHook: fa.M0 })],
    });
}
let fR = {
        useTitle: () => fT() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fE,
        useVariant: () => "secondary",
        useLeadingDecoration: fp,
        getDismissibleBadges: fN,
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fL,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        onClick: function () {
            (0, sd.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    },
    fD = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...fR, usePredicate: () => fj(fv.EDIT, fy.LEGACY) }),
    fP = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...fR,
        usePredicate: () => fj(fv.EDIT, fy.TINY_BRONCO),
        useAriaLabel: () => R.intl.string(R.t.pBMSie),
    }),
    fG = {
        useTitle: () => fT() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fE,
        useLeadingDecoration: function () {
            let e = fx();
            return null != e ? { type: m.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: fN,
        useTrailingDecoration: () => ({ type: m.Ln.TEXT, text: (0, fa.hD)() }),
    },
    fM = (0, d.v_)(c.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...fG, usePredicate: () => fj(fv.INFO, fy.LEGACY) }),
    fU = (0, d.v_)(c.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...fG,
        usePredicate: () => fj(fv.INFO, fy.TINY_BRONCO),
    }),
    fV = {
        useTitle: () => fT() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fE,
        useVariant: () => "secondary",
        useLeadingDecoration: fp,
        getDismissibleBadges: fN,
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: (0, fa.hD)() }),
        useLabel: function () {
            return (0, fC.yM)() ? R.intl.string(R.t["9KiIz6"]) : R.intl.string(R.t.DVywUB);
        },
        onClick: fa.aP,
    },
    fk = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...fV, usePredicate: () => fj(fv.VERIFY, fy.LEGACY) }),
    fw = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...fV,
        usePredicate: () => fj(fv.VERIFY, fy.TINY_BRONCO),
    }),
    fF = [fk, fD, fM],
    fB = [fw, fP, fU],
    fz = (0, d.Tf)(c.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => R.intl.string(R.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: R.intl.string(R.t.qxk9zo) }),
        useLabel: () => R.intl.string(R.t.BleMPB),
        onClick: () => fl(),
    });
function fY(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fX(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function fH(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: s } = e,
        [l, r] = E.useState(!1),
        a = l ? t : n(t);
    return (0, A.jsxs)(Y.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: a }),
            (0, A.jsx)(Ed.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : i,
                onClick: () => r(!l),
                text: l ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
            }),
        ],
    });
}
function fK() {
    let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.email);
    return null == e
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t["8SfTN/"]) })
        : (0, A.jsx)(fH, {
              text: e,
              censor: fX,
              revealLabel: R.intl.string(R.t["Zvx+yV"]),
              hideLabel: R.intl.string(R.t.nqTD4d),
          });
}
let fW = (0, d.Tf)(c.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fK }),
    useLabel: function () {
        return null == (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.email)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.email)
            ? R.intl.string(R.t["pvBD+W"])
            : R.intl.string(R.t["8peUT0"]);
    },
    onClick: function () {
        (0, sd.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, A.jsx)(e, { ...t });
        });
    },
});
var fZ = n(557722),
    fq = n(53516);
function fQ() {
    let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t.I5kDqj) })
        : (0, A.jsx)(Y.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, A.jsx)(fH, {
                  text: t,
                  censor: fY,
                  revealLabel: R.intl.string(R.t.eY3xlT),
                  hideLabel: R.intl.string(R.t["jllbv+"]),
              }),
          });
}
let f$ = (0, d.Tf)(c.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.kerONq),
    useAriaLabel: function () {
        return null == (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t["SfUuE+"])
            : R.intl.string(R.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fQ }),
    useLabel: function () {
        return null == (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    onClick: function () {
        null == lu.default.getCurrentUser()?.phone
            ? (0, sd.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, A.jsx)(e, { reason: fZ.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fq.V },
              )
            : (0, sd.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, A.jsx)(e, { ...t });
              });
    },
});
function fJ() {
    let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function f0() {
    let e = (0, x0.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, h.bG)([lu.default], () => lu.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, A.jsx)(ss.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, A.jsx)(iW.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: nJ.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let f1 = (0, d.Tf)(c.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => R.intl.string(R.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: f0,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        useAriaLabel: () => R.intl.string(R.t.JECa91),
        useSubtitle: () => (fJ() ? R.intl.string(R.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fJ,
        onClick: function () {
            (0, sd.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    }),
    f2 = (0, d.zZ)(c.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, h.bG)([lu.default], () => null != lu.default.getCurrentUser()),
        useTitle: () => R.intl.string(R.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser());
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
                            button: { text: R.intl.string(R.t.lm1UKt), onClick: () => (0, fr.S)(e) },
                        }
                  : {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: R.intl.string(R.t["/3qnL/"]),
                        text: R.intl.string(R.t.qKs3vg),
                        button: { text: R.intl.string(R.t["7psymi"]), onClick: () => fl() },
                    };
        },
        buildLayout: () => [f1, fz, fW, f$, ...fF],
    });
var f3 = n(398177);
let f5 = (0, d.Tf)(c.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => R.intl.string(R.t["CIGa+7"]),
    useLabel: () => R.intl.string(R.t.bt75uw),
    useAriaLabel: () => R.intl.string(R.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, sd.openModal)((e) => (0, A.jsx)(f3.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var f6 = n(200921);
let f4 = [];
function f8() {
    f4 = [];
}
class f7 extends h.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return f4;
    }
}
let f9 = new f7(e8.h, {
    LOGOUT: f8,
    LOGIN_SUCCESS: f8,
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
function Ie() {
    let e = (0, h.cf)([f9], () => f9.getSessions());
    return E.useMemo(() => {
        let t = [...e],
            n = null,
            i = uO.default.getAuthSessionIdHash();
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
function It(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? R.intl.string(R.t.TXCmfL) : id()(e).fromNow();
}
var In = n(176524),
    Ii = n(646270),
    Is = n(738678),
    Il = n(489828);
function Ir(e) {
    let { icon: t, label: n, subLabel: i, description: s, children: l, muted: r } = e;
    return (0, A.jsxs)(Y.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, A.jsx)(In.A, { icon: t, color: r ? nJ.A.colors.ICON_MUTED : "currentColor" }),
            (0, A.jsxs)(Y.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, A.jsxs)(Y.B, {
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
function Ia(e) {
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
                            return { text: R.intl.string(R.t.cDHCNY), icon: Sx.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: Ii.u };
                        case "horizon os":
                            return { text: e, icon: Is.G };
                        default:
                            return { text: e, icon: Sx.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: s, Icon: l, lastActive: t ? null : It(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(il.Vq);
    return (0, A.jsx)(Ir, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, A.jsx)(n2.D, {
                className: Il.X,
                onClick: () => (0, f6.U0)(t.id_hash),
                "aria-label": R.intl.string(R.t.E4MJNt),
                children: (0, A.jsx)(hA.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function Io(e) {
    let { title: t, children: n } = e,
        i = E.useId();
    return (0, A.jsxs)(Y.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, A.jsx)(p.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, A.jsx)(Y.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let Iu = (0, d.E2)(c.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = Ie();
            return null == e
                ? (0, A.jsx)(ol.y, {})
                : (0, A.jsx)(Io, {
                      title: R.intl.string(R.t.LLS19o),
                      children: (0, A.jsx)(Ia, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    Id = (0, d.E2)(c.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = Ie();
            return (0, A.jsx)(tJ.D, {
                label: R.intl.string(R.t.Vij32M),
                description: R.intl.string(R.t.OTXyaf),
                children: (0, A.jsx)(_.$, {
                    onClick: () => (0, f6.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: R.intl.string(R.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = Ie();
            return e.length > 0;
        },
    });
var Ic = n(766928);
function Ig() {
    return (0, A.jsx)(Ir, {
        icon: Ic.W,
        label: R.intl.string(R.t.iUa0sn),
        description: R.intl.format(R.t["044+8i"], {
            onClick: () =>
                (0, nr.openUserSettings)(c.X.ACCOUNT_PANEL, { analyticsLocations: [tD.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let Im = (0, d.E2)(c.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = Ie(),
                t = (0, h.bG)([lu.default], () => lu.default.getCurrentUser());
            return (0, A.jsxs)(Io, {
                title: R.intl.string(R.t.xx1MWc),
                children: [
                    e.map((e) => (0, A.jsx)(Ia, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, A.jsx)(Ig, {}),
                ],
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = Ie(),
                t = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    IA = (0, d.zZ)(c.X.SESSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useSubtitle: () => R.intl.string(R.t.b7ZpTM),
        initialize: () => {
            (0, f6.GY)();
        },
        buildLayout: () => [Iu, Im, Id],
        useSearchTerms: () => [
            R.intl.string(R.t["+1h0k/"]),
            R.intl.string(R.t.LLS19o),
            R.intl.string(R.t.xx1MWc),
            R.intl.string(R.t.lSWsrd),
        ],
    }),
    IE = (0, d.t_)(c.X.SESSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useObscuredNotice: oi.L,
        buildLayout: () => [IA],
    }),
    Ih = (0, d.t0)(c.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [IE],
        initialize: () => {
            (0, f6.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = Ie(),
                n = t.length + +(null != e);
            return {
                type: m.xn.TEXT,
                text: n > 0 ? R.intl.formatToPlainString(R.t.G7zwOk, { count: n }) : R.intl.string(R.t.MKDeyL),
            };
        },
    });
var IS = n(464477);
function Ix(e) {
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
function Ip() {
    return (0, a1.bG)([lu.default], () => {
        let e = lu.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var IT =
    (((u = {}).AVAILABLE = "available"),
    (u.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (u.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    u);
function If() {
    let e = (0, a1.bG)([lu.default], () => lu.default.getCurrentUser()?.verified);
    return IS.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function II() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, a1.bG)([sp.A, pk.A, lu.default], () =>
        lu.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? R.intl.string(R.t.hxf9fX)
                : R.intl.string(R.t["3iKih7"])
            : sp.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        pk.A.can(S.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? R.intl.string(R.t.OYTCUh)
                  : R.intl.string(R.t.HC8uSZ)
              : null,
    );
}
var I_ = n(466034);
let IN = (0, d.Tf)(c.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: () => II(!0),
        useDisabled: () => null !== II(!0),
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, h.bG)([uO.default], () => uO.default.hasTOTPEnabled()),
                t = If() === IT.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n0.A)({
                title: R.intl.string(R.t["D+aE7g"]),
                subtitle: R.intl.string(R.t.EA4ZEk),
                variant: "critical",
                confirmText: R.intl.string(R.t.N86XcP),
                onConfirm: () => fi.A.disable(),
            }),
    }),
    IC = (0, d.zZ)(c.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RumMFo),
        useSubtitle: () => R.intl.string(R.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, h.bG)([uO.default], () => uO.default.hasTOTPEnabled()),
                t = If() === IT.AVAILABLE;
            if (!e && t)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: R.intl.string(R.t.cTNUeD),
                            onClick: I_.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (If()) {
                case IT.UNAVAILABLE_NO_CRYPTO:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.PhHhsj) };
                case IT.UNAVAILABLE_UNVERIFIED:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                case IT.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [IN],
    });
var Ib = n(670492),
    Iy = n(32880),
    Iv = n(663417),
    Ij = n(658675),
    IO = n(900686);
function IL() {
    (0, sd.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, A.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    fi.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, sd.openModalLazy)(
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
var IR = n(858487);
function ID(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function IP() {
    let e = Ib.A.getVerificationKey();
    try {
        await fi.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, li.P0)({
            message: e.body?.message ?? R.intl.string(R.t.F8FvUy),
            type: ls.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function IG(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = ID(t),
        s = E.useRef(null),
        l = (0, A.jsxs)(A.Fragment, {
            children: [(0, A.jsx)(Ij.P, { checked: n }), (0, A.jsx)(H.E, { variant: "text-md/normal", children: i })],
        });
    return uG.p5
        ? (0, A.jsx)(n2.D, {
              tag: "li",
              className: io()(IR.aY, IR.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uG.C)(i), s?.current?.focus());
              },
              onClick: function () {
                  ((0, uG.C)(i),
                      (0, li.P0)({
                          message: R.intl.string(R.t.mGZ66D),
                          type: ls.Ck.SUCCESS,
                          id: "backup-code-copied",
                      }));
              },
              children: l,
          })
        : (0, A.jsx)("li", { className: IR.aY, children: l });
}
let IM = (0, d.zZ)(c.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.fC9qV0),
        useSubtitle: () =>
            (0, h.bG)([Ib.A], () => Ib.A.getBackupCodes().length > 0)
                ? R.intl.format(R.t.tp7zEK, {})
                : R.intl.string(R.t.LoOi4S),
        usePredicate: Ip,
        buildLayout: () => [IU],
    }),
    IU = (0, d.E2)(c.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.fC9qV0)],
        Component: function () {
            let e = (0, h.bG)([Ib.A], () => Ib.A.getBackupCodes()),
                t = E.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${ID(t)}` + (n ? ` (${R.intl.string(R.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, A.jsx)(_.$, { text: R.intl.string(R.t.Jc2myK), size: "sm", variant: "secondary", onClick: IL })
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)("ul", {
                              className: IR.E5,
                              children: e.map((e) => (0, A.jsx)(IG, { code: e }, e.code)),
                          }),
                          (0, A.jsxs)(lW.e, {
                              size: "sm",
                              children: [
                                  (0, A.jsx)(IO.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, A.jsx)(_.$, {
                                          text: R.intl.string(R.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: Iy.DownloadIcon,
                                      }),
                                  }),
                                  (0, A.jsx)(_.$, {
                                      text: R.intl.string(R.t["3x962E"]),
                                      variant: "secondary",
                                      icon: Iv.RefreshIcon,
                                      onClick: IP,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    IV = (0, d.Tf)(c.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = E.useState(!1),
                n = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : R.intl.format(e ? R.t["xDBk/I"] : R.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, A.jsx)(Ed.Q, {
                              text: e ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, sd.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, A.jsx)(e, {
                        ...t,
                        handleSubmit: fi.A.disableSMS,
                        title: R.intl.string(R.t.KLWnit),
                        children: R.intl.string(R.t["W0/Duf"]),
                    });
            }),
    }),
    Ik = (0, d.zZ)(c.X.SMS_AUTH_CATEGORY, {
        useTitle: () => R.intl.string(R.t.wuHuI5),
        useSubtitle: () => (0, h.bG)([lu.default], () => Ix(lu.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
                t = (0, h.bG)([lu.default], () => null != Ix(lu.default.getCurrentUser()));
            if (!e)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "sms-setup-button",
                            text: R.intl.string(R.t.Age7yU),
                            onClick: Iw,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = If(),
                t = Ip(),
                n = (0, h.bG)([uO.default], () => uO.default.hasTOTPEnabled());
            return e === IT.AVAILABLE && t && n;
        },
        buildLayout: () => [IV],
    });
function Iw() {
    let e = lu.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: fZ.d.USER_SETTINGS_UPDATE, onAddedPhone: fi.A.enableSMS }),
                (0, sd.openModalLazy)(
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
                    { modalKey: fq.V },
                ));
        } else fi.A.enableSMS();
}
var IF = n(665671),
    IB = n(442433),
    Iz = n(917136),
    IY = n(976910),
    IX = n(267255);
function IH(e) {
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
                            children: R.intl.format(R.t["7JgxF5"], { lastUsed: It(t.last_used) }),
                        }),
                ],
            }),
            (0, A.jsx)(sn.K, {
                icon: cd.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": R.intl.string(R.t["+nrTbK"]),
                onClick: (e) => {
                    (0, IB.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, A.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let IK = (0, d.zZ)(c.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.IBq4Y3),
        useSubtitle: () => R.intl.string(R.t.yK9edS),
        useHeaderDecoration: function () {
            if (If() === IT.AVAILABLE)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "add-security-key-button",
                            text: R.intl.string(R.t["Tzs/fw"]),
                            icon: iz.j,
                            onClick: IF.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (If()) {
                    case IT.UNAVAILABLE_NO_CRYPTO:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.bWCGI9) };
                    case IT.UNAVAILABLE_UNVERIFIED:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                    case IT.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [IW],
    }),
    IW = (0, d.E2)(c.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [R.intl.string(R.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, h.cf)([IY.A], () => ({
                hasFetchedCredentials: IY.A.hasFetchedCredentials(),
                credentials: IY.A.getCredentials(),
            }));
            return (E.useEffect(() => {
                t || Iz.JQ();
            }, [t]),
            t)
                ? (0, A.jsx)(Y.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, A.jsx)(IH, { credential: e }, e.id)),
                  })
                : (0, A.jsx)(ol.y, {});
        },
    }),
    IZ = (0, d.t_)(c.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => R.intl.string(R.t.m0FidJ),
        buildLayout: () => [IK, IC, Ik, IM],
    }),
    Iq = (0, d.t0)(c.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = Ip();
            return { type: m.xn.TEXT, text: e ? R.intl.string(R.t.lQsY7B) : R.intl.string(R.t.WsUuTt) };
        },
        buildLayout: () => [IZ],
    }),
    IQ = (0, d.zZ)(c.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["0iH2vc"]),
        buildLayout: () => [f5, Iq, Ih],
    }),
    I$ = { [fa.M$.ADULT]: fA.default.PMznGO, [fa.M$.TEEN]: fA.default.qSkhZH, [fa.M$.UNVERIFIED]: fA.default.vGxRDB },
    IJ = [eu.M.TINY_BRONCO_NOTICE],
    I0 = [];
function I1() {
    fo.A.openUrl(fd.m5);
}
var I2 = n(308645),
    I3 = n(555725),
    I5 = n(855267);
let I6 = (0, d.E2)(c.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["16r9jm"])],
        Component: I5.A,
    }),
    I4 = (0, d.zZ)(c.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [I6] }),
    I8 = (0, d.t_)(c.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        buildLayout: () => [I4],
    }),
    I7 = (0, d.t0)(c.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        useSubtitle: I3.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, I3._k)();
            return { type: m.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: m.xn.TEXT, text: (0, I3.aO)() };
        },
        initialize: () => {
            I2.Yn();
        },
        buildLayout: () => [I8],
    }),
    I9 = (0, d.zZ)(c.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (fm() ? R.intl.string(R.t.GI2mea) : null) ?? R.intl.string(R.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, ff.LH)(),
                t = (0, fa.ZP)(),
                [n, i] = (0, go.kn)(e ? IJ : I0);
            return e && null != n
                ? {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "start",
                      text: R.intl.format(I$[t], { handleOnBlogHook: I1 }),
                      onDismiss: () => i(gS.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...fB, I7],
    });
var _e = n(738188),
    _t = n(834981),
    _n = n(987197),
    _i = n(822585),
    _s = n(840387),
    _l = n(465558),
    _r = n(513687);
let _a = (0, d.E2)(c.X.FAMILY_CENTER_SETTING, {
        Component: _l.p,
        useSearchTerms: () => [
            R.intl.string(_r.default.RZqaJn),
            R.intl.string(_r.default.bdBmqy),
            R.intl.string(_r.default["gVWG+6"]),
            R.intl.string(_r.default.ahKIJO),
            R.intl.string(_r.default["8SLtqb"]),
        ],
    }),
    _o = (0, d.zZ)(c.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [_a] }),
    _u = (0, d.t_)(c.X.FAMILY_CENTER_PANEL, {
        useTitle: () => R.intl.string(_r.default.RZqaJn),
        buildLayout: () => [_o],
    }),
    _d = (0, d.zZ)(c.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => R.intl.string(_r.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, _n.f)(),
                t = (0, _i.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, _t.VT)();
            return E.useMemo(() => (n ? { badgeType: m.Xi.WARNING } : { badgeType: m.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [_c],
    }),
    _c = (0, d.t0)(c.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, _t.Li)() ? R.intl.string(_r.default.IcMQUP) : R.intl.string(_r.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, _s.Z)(),
                t = (0, _t.Li)();
            return e
                ? t
                    ? R.intl.string(_r.default.G8lHFU)
                    : R.intl.string(_r.default.uOLNEZ)
                : R.intl.string(_r.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, _n.f)(),
                t = (0, _i.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: m.Xy.ICON,
                      icon: _e.WarningIcon,
                      color: nJ.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: nJ.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [_u],
    });
var _g = n(425587),
    _m = n(662758);
function _A(e) {
    if (e.body.code === S.t02.INVALID_PASSWORD) throw e;
    (0, lX.A)({ title: R.intl.string(R.t.LX0nT8), subtitle: e.body.message });
}
async function _E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = lu.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await _g.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, lX.A)({
              title: R.intl.string(R.t["Y++oNe"]),
              subtitle: R.intl.format(R.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : sp.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, lX.A)({ title: R.intl.string(R.t.vJiTOL), subtitle: R.intl.string(R.t.UyVVan) })
          : t.isClaimed()
            ? (0, sd.openModal)((t) =>
                  (0, A.jsx)(_m.default, {
                      ...t,
                      handleSubmit: (t) => (0, xM.U_)(t, e).then(S.tEg, _A),
                      title: e ? R.intl.string(R.t.xca2ts) : R.intl.string(R.t.goXv9g),
                      actionText: e ? R.intl.string(R.t["8lQ2rR"]) : R.intl.string(R.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? R.intl.string(R.t.FB4H1D) : R.intl.string(R.t.gk7h32),
                  }),
              )
            : (0, n0.A)({
                  title: R.intl.string(R.t.xca2ts),
                  subtitle: R.intl.string(R.t.FB4H1D),
                  confirmText: R.intl.string(R.t["8lQ2rR"]),
                  onConfirm: () => (0, xM.U_)("", !0),
              });
}
let _h = (0, d.Tf)(c.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => R.intl.string(R.t["gIpzR+"]),
        useSubtitle: () => R.intl.string(R.t.Bd6dOf),
        useLabel: () => R.intl.string(R.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => _E(!0),
    }),
    _S = (0, d.Tf)(c.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => R.intl.string(R.t["p/Tjtp"]),
        useSubtitle: () => R.intl.string(R.t.YvDmKb),
        useLabel: () => R.intl.string(R.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => _E(!1),
        usePredicate: () => {
            let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    _x = (0, d.zZ)(c.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [_S, _h] }),
    _p = (0, d.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (fi.A.clearBackupCodes(), (0, xM.Uo)());
            };
        },
        useObscuredNotice: oi.L,
        buildLayout: () => [f2, IQ, I9, _d, _x],
    }),
    _T = (0, d.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        icon: ma.UserIcon,
        buildLayout: () => [_p],
    });
var _f = n(176781),
    _I = n(341923),
    __ = n(572164),
    _N = n(614584),
    _C = n(915725),
    _b = n(268378);
let _y = (0, d.zD)(c.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => R.intl.string(_b.default.j29uJx),
        useSubtitle: () => R.intl.format(_b.default.UCzGcQ, { learnMoreLink: eT.A.getArticleURL(S.MVz.CLIPS) }),
        useValue: () => (0, h.bG)([_C.Ay], () => _C.Ay.getEnableAutoclipping()),
        setValue: _N.uL,
        useDisabled: () => !(0, __.E)(),
    }),
    _v = (0, d.zY)(c.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [_y], headerSettingKey: _y.key }),
    _j = (0, d.zZ)(c.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => R.intl.string(_b.default.XWkJoi),
        useSubtitle: () => R.intl.string(_b.default["MJ/VsO"]),
        usePredicate: _I.HN,
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        useInlineNotice: () =>
            (0, __.E)()
                ? null
                : {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: R.intl.string(_b.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: R.intl.string(_b.default.qGgW4M),
                          onClick: () => _N.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [_v],
    });
var _O = n(696016);
let _L = [_O.zq, 25, 50, _O.Y2, _O.rv],
    _R = (0, d.sN)(c.X.CLIPS_BITRATE, {
        useTitle: () => R.intl.string(R.t["8bZyov"]),
        useSubtitle: () => R.intl.string(R.t["h8DSx/"]),
        minValue: _O.zq,
        maxValue: _O.rv,
        useDefaultValue: () => _O.Y2,
        getInitialValue: () => _C.Ay.getSettings().clipsQuality.bitratePercent ?? _O.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = _C.Ay.getSettings();
            _N.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: _L,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, __.E)(),
    });
var _D = n(226640);
let _P = (0, d.Hn)(c.X.CLIPS_FRAME_RATE, {
        useTitle: () => R.intl.string(R.t["2wScL1"]),
        useSubtitle: () => R.intl.string(R.t["Rf9+fy"]),
        useValue: () => (0, h.bG)([_C.Ay], () => _C.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = _C.Ay.getSettings();
            _N.GS({ ...t, frameRate: e });
        },
        useOptions: _D.Fz,
        useDisabled: () => !(0, __.E)(),
    }),
    _G = (0, d.E2)(c.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [R.intl.string(R.t.SIxrIF)],
        usePredicate: () => (0, h.bG)([_C.Ay], () => _C.Ay.getHardwareClassification()) === _O.k9.BELOW_MINIMUM,
        Component: () => (0, A.jsx)(s0.A, { look: s0.k.WARNING, children: R.intl.string(R.t.SIxrIF) }),
    }),
    _M = (0, d.Hn)(c.X.CLIPS_LENGTH, {
        useTitle: () => R.intl.string(R.t.OgfUio),
        useSubtitle: () => R.intl.string(R.t.H7j4tY),
        useValue: () => (0, h.bG)([_C.Ay], () => _C.Ay.getSettings().clipsLength),
        setValue: (e) => _N.h$(e),
        useOptions: _D.Qu,
        useDisabled: () => !(0, __.E)(),
    }),
    _U = (0, d.E2)(c.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [R.intl.string(R.t["Z+MfqT"])],
        Component: () => (0, A.jsx)(s0.A, { look: s0.k.INFO, children: R.intl.string(R.t["Z+MfqT"]) }),
    }),
    _V = (0, d.Hn)(c.X.CLIPS_RESOLUTION, {
        useTitle: () => R.intl.string(R.t.aFudZJ),
        useSubtitle: () => R.intl.string(R.t.nIrkW5),
        useValue: () => (0, h.bG)([_C.Ay], () => _C.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = _C.Ay.getSettings();
            _N.GS({ ...t, resolution: e });
        },
        useOptions: _D.gF,
        useDisabled: () => !(0, __.E)(),
    }),
    _k = (0, d.zD)(c.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => R.intl.string(R.t["3zwNf6"]),
        useSubtitle: () => R.intl.string(R.t.m4Cjj9),
        useValue: () => (0, h.bG)([_C.Ay], () => _C.Ay.getSettings().remindersEnabled),
        setValue: (e) => _N.Mt(e),
        useDisabled: () => !(0, __.E)(),
    }),
    _w = (0, d.zZ)(c.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => R.intl.string(_b.default.TGwzMe),
        buildLayout: () => [_G, _M, _P, _V, _R, _U, _k],
    }),
    _F = (0, d.zD)(c.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, h.bG)([_C.Ay], () => _C.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => _N.YP(e),
    }),
    _B = (0, d.zD)(c.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, h.bG)([_C.Ay], () => _C.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => _N.Uh(e),
    }),
    _z = (0, d.zZ)(c.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, h.bG)([lu.default], () => {
                let e = lu.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [_F, _B],
    });
var _Y = n(417270),
    _X = n(847825);
let _H = (0, d.E2)(c.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t.pf54EU), R.intl.string(R.t["QyB/jK"])],
        Component: () => {
            let e = (0, h.bG)([sk.Ay], () => sk.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0));
            tu()(null != e, "Save clip keybind unset");
            let t = !(0, __.E)(),
                n = E.useRef(null),
                i = E.useCallback(
                    (t) => {
                        iH.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = E.useCallback(() => {
                    iH.A.setKeybind({ ...e, shortcut: (0, so.OH)(_O.Ot) });
                }, [e]);
            return (0, A.jsx)(tJ.D, {
                label: R.intl.string(R.t.pf54EU),
                description: R.intl.string(R.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: _X.g,
                    children: (0, A.jsx)(sa.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, A.jsxs)(A.Fragment, {
                            children: [
                                (0, A.jsx)(ss.m, {
                                    text: R.intl.string(_b.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(sn.K, {
                                        icon: iY.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(_b.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, A.jsx)(ss.m, {
                                    text: R.intl.string(_b.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(sn.K, {
                                        icon: _Y.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(_b.default.Kyk1Tp),
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
    _K = (0, d.E2)(c.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t["0U/hj7"]), R.intl.string(R.t["5zxkdo"])],
        usePredicate: sM.BW,
        Component: () => {
            let e = (0, h.bG)([sk.Ay], () => sk.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0)),
                t = (0, h.bG)([sk.Ay], () => sk.Ay.getKeybindForAction(S.hCu.SAVE_SCREENSHOT, !0));
            (tu()(null != e, "Save clip keybind unset"), tu()(null != t, "Save screenshot keybind unset"));
            let n = E.useCallback(
                (e) => {
                    iH.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, A.jsx)(tJ.D, {
                label: R.intl.string(R.t["0U/hj7"]),
                description: R.intl.string(R.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, A.jsx)("div", {
                    className: _X.g,
                    children: (0, A.jsx)(sa.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    _W = (0, d.zD)(c.X.CLIPS_ENABLE, {
        useTitle: () => R.intl.string(R.t.h8rgrK),
        useSubtitle: () => R.intl.string(R.t["4Qw3NO"]),
        useValue: () => (0, __.E)(),
        setValue: (e) => _N.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    _Z = (0, d.zY)(c.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_W, _H, _K], headerSettingKey: _W.key }),
    _q = (0, d.zZ)(c.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["rWKv+e"]),
        useSubtitle: () => R.intl.format(_b.default["dh7g+S"], { learnMoreLink: eT.A.getArticleURL(S.MVz.CLIPS) }),
        buildLayout: () => [_Z],
    }),
    _Q = (0, d.E2)(c.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [R.intl.string(R.t.s4773E), R.intl.string(R.t.svjwGh)],
        Component: () => {
            let e = (0, h.bG)([_C.Ay], () => _C.Ay.getSettings().storageLocation),
                t = !(0, __.E)(),
                n = E.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nx.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && _N.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, A.jsx)(tJ.D, {
                label: R.intl.string(R.t.s4773E),
                description: R.intl.string(R.t.svjwGh),
                layout: "vertical",
                children: (0, A.jsxs)(Y.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, A.jsx)(sc.k, {
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
                            text: R.intl.string(_b.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _$ = (0, d.zZ)(c.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => R.intl.string(_b.default["0Q+pdZ"]),
        buildLayout: () => [_Q],
    }),
    _J = (0, d.t_)(c.X.CLIPS_PANEL, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        usePredicate: sM.sw,
        buildLayout: () => [_q, _j, _w, _$, _z],
    }),
    _0 = (0, d.i4)(c.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        icon: _f.x,
        buildLayout: () => [_J],
    });
var _1 = n(254138),
    _2 = n(290595),
    _3 = n(153488),
    _5 = n(308528),
    _6 = n(171316),
    _4 = n(558001);
n(866945);
var _8 = n(835002);
function _7() {
    let e = (0, _6.uM)(),
        t = (0, _t.vx)(),
        n = E.useCallback(() => {
            ((0, tk.default)(),
                _5.A.openPrivateChannel({ recipientIds: t }),
                (0, _4.N)(_8.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _8.YX.LEARN_MORE));
        }, [t]),
        i = E.useCallback(() => {
            (0, _4.N)(_8.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _8.YX.VIEWED);
        }, []);
    return E.useMemo(() => {
        if (e)
            return {
                type: m.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: R.intl.format(_r.default.i284fU, {
                    hook: (e, t) => (0, A.jsx)(ns.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let _9 = (0, d.zD)(c.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => R.intl.string(R.t.AGDDkH),
    useSubtitle: () => R.intl.string(R.t.kyo3dJ),
    useValue: () => L.Q$.useSetting(),
    setValue: (e) => _N.eQ({ allowVoiceRecording: e }),
});
var Ne = n(157559),
    Nt = n(331887);
function Nn() {
    let e = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
        t = (0, h.bG)([Nt.A], () => Nt.A.harvestType),
        [n, i] = E.useState(() => Date.now()),
        s = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        l = E.useRef(null);
    return (E.useEffect(() => {
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
let Ni = (0, d.Tf)(c.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => R.intl.string(R.t.qfFFos),
        useSubtitle: function () {
            let e = Nn();
            if (e.allowed) return R.intl.format(R.t.NRI6vt, { article: eT.A.getArticleURL(S.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return R.intl.string(R.t.hIbRso);
                case "not_verified":
                    return R.intl.format(R.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, A.jsx)(
                                n2.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, nr.openUserSettings)(c.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = id()(e.nextAllowed).format("MMMM Do YYYY");
                    return R.intl.format(R.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (e8.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                e4.Bo.get({ url: S.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        e8.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        e8.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !Nn().allowed,
        useLoading: () => (0, h.bG)([Nt.A], () => Nt.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => R.intl.string(R.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, sd.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, A.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, xM.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            e8.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? Ne.A.show({
                                                  title: R.intl.string(R.t.i2iul5),
                                                  body: R.intl.string(R.t["6Nmv4i"]),
                                              })
                                            : Ne.A.show({
                                                  title: R.intl.string(R.t.OjbtDm),
                                                  body: R.intl.string(R.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || R.intl.string(R.t["0F5Jyt"]);
                                        Ne.A.show({ title: R.intl.string(R.t.OjbtDm), body: t });
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
    Ns = (0, d.v_)(c.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => R.intl.string(R.t.D60Gfj),
        useSubtitle: () =>
            R.intl.format(R.t.dszICC, {
                onClickDisable: () => (0, nr.openUserSettings)(c.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, nr.openUserSettings)(c.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var Nl = n(972737);
let Nr = (0, d.zD)(c.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => R.intl.string(R.t.MNKzyg),
        useSubtitle: () =>
            R.intl.format(R.t["2SiYln"], { helpdeskArticle: eT.A.getArticleURL(S.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, h.bG)([_3.A], () => _3.A.hasConsented(S.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, _2.U)([S.YAq.PERSONALIZATION], []).catch(Nl.i)
                : (0, Nl.O)({
                      header: R.intl.string(R.t["9SNpzv"]),
                      confirmText: R.intl.string(R.t["9g5UGw"]),
                      cancelText: R.intl.string(R.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, _2.U)([], [S.YAq.PERSONALIZATION]).catch(Nl.i);
                      },
                      body: R.intl.string(R.t.gJvDDh),
                  });
        },
        useDisabled: _6.uM,
    }),
    Na = (0, Eq.mj)({
        kind: "user",
        name: "2026-08-ad-topic-opt-out-client",
        defaultConfig: { enabled: !1 },
        variations: {
            1: { enabled: !1 },
            2: { enabled: !0 },
            3: { enabled: !0 },
            4: { enabled: !0 },
            5: { enabled: !0 },
        },
    });
function No() {
    let { enabled: e } = Na.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var Nu = n(884705);
function Nd() {
    return (0, h.bG)([Nu.A], () => Nu.A.isTogglesDisabled());
}
function Nc() {
    return !L.vf.useSetting();
}
function Ng(e) {
    L.vf.updateSetting(!e);
}
function Nm() {
    let e = Nd(),
        t = L.H1.useSetting(),
        n = (0, _6.uM)();
    return e || t || n;
}
let NA = (0, d.zD)(c.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["md5l4/"], { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !No(),
        useValue: Nc,
        setValue: Ng,
        useDisabled: Nm,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    }),
    NE = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["2QFDU/"], { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: No,
        useValue: Nc,
        setValue: Ng,
        useDisabled: Nm,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    });
function Nh() {
    return !L.H1.useSetting();
}
function NS(e) {
    L.H1.updateSetting(!e);
}
function Nx() {
    let e = Nd(),
        t = (0, _6.uM)();
    return e || t;
}
let Np = (0, d.zD)(c.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () => R.intl.string(R.t.w4fvxe),
        usePredicate: () => !No(),
        useValue: Nh,
        setValue: NS,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: Nx,
    }),
    NT = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () =>
            R.intl.format(R.t.cf9mvV, { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: No,
        useValue: Nh,
        setValue: NS,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: Nx,
    }),
    Nf = (0, d.AK)(c.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = EV(2);
            return R.intl.format(R.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = Ek();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, h.bG)([i0.Ay], () => i0.Ay.getGamesSeen(!1).some((e) => !(0, ER.n1)(e))) && (0, nE.xl)(),
    }),
    NI = (0, d.gN)(c.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Nf] }),
    N_ = (0, d.zD)(c.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => R.intl.string(R.t.XuADY2),
        useSubtitle: () =>
            R.intl.format(R.t.FNqmmX, { helpdeskArticle: eT.A.getArticleURL(S.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, h.bG)([_3.A], () => _3.A.hasConsented(S.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, _2.U)([S.YAq.USAGE_STATISTICS], []).catch(Nl.i)
                : (0, Nl.O)({
                      header: R.intl.string(R.t.OdPCbN),
                      body: R.intl.string(R.t.MGWabA),
                      confirmText: R.intl.string(R.t["D3+rU4"]),
                      cancelText: R.intl.string(R.t.kYpG0u),
                      onConfirm: () => (0, _2.U)([], [S.YAq.USAGE_STATISTICS]).catch(Nl.i),
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.XuADY2)],
        useDisabled: _6.uM,
    }),
    NN = (0, d.zZ)(c.X.DATA_USAGE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.QDAriI),
        useInlineNotice: _7,
        initialize: () => {
            _3.A.fetchedConsents || (0, _2.Q)();
        },
        buildLayout: () => [Ns, N_, Nr, Np, NA, _9, Ni, NI],
    });
var NC = n(15762);
let Nb = (0, d.zD)(c.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => R.intl.string(NC.default.F3llsQ),
    useSubtitle: () => R.intl.string(NC.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        (L.Sy.updateSetting(e),
            ti.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: EY.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function Ny() {
    let e = L.JG.useSetting();
    return (0, h.yK)(
        [cl.Ay, sp.A],
        () => {
            let t = new Set(e);
            return cl.Ay.getFlattenedGuildIds().filter((e) => null != sp.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let Nv = (0, d.AK)(c.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Ny();
            if (0 === e.length) return R.intl.format(R.t.QJIJ5p, {});
            let t = sp.A.getGuild(e[0]),
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
                    (t = (0, h.yK)(
                        [sp.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => sp.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, A.jsx)(E5, { guild: t[0], size: ED.CD }),
                                    shape: ED.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, A.jsx)(E5, { guild: t[1], size: ED.CD }), shape: ED.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, A.jsx)(E5, { guild: t[0], size: ED.CD }),
                                    shape: ED.e0.SQUIRCLE,
                                },
                            });
            return { type: m.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Nj = (0, d.gN)(c.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, EK.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [Nv],
    }),
    NO = (0, d.Qx)(c.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, EK.lX)("ProfilePrivacySetting"),
        useTitle: () => R.intl.string(R.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: R.intl.string(R.t.Boxc8R),
                    desc: R.intl.string(R.t["nLj+nc"]),
                    value: eY.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: R.intl.string(R.t.YOIKBt),
                    desc: R.intl.string(R.t.y0JZ4s),
                    value: eY.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: R.intl.string(R.t.u0nlJv), desc: R.intl.string(R.t["4jnKHu"]), value: eY.KP.FRIENDS_ONLY },
            ];
        },
        useValue: L.KP.useSetting,
        setValue: function (e) {
            let t = L.KP.getSetting();
            if ((L.KP.updateSetting(e), !(0, EK.W1)("ProfilePrivacySetting"))) return;
            let i = (0, E$.gS)(t, e);
            null != i &&
                (0, sd.openModalLazy)(async () => {
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
let NP = { [eY.tR.REAL_MONEY_GAMING]: ND.default.pmIitA },
    NG = Object.keys(NP).map(Number),
    NM = (0, d.E2)(c.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [R.intl.string(ND.default.foQaI1)],
        usePredicate: No,
        Component: function () {
            let e = E.useMemo(
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
            return (0, A.jsx)(xN.Z, {
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
        usePredicate: No,
        buildLayout: () => [NT, NE, NM],
    });
var NV = n(936388),
    Nk = n(714763),
    Nw = n(814278);
let NF = (0, d.zD)(c.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => R.intl.string(R.t["opi/XK"]),
    useSubtitle: () => R.intl.format(R.t["/T+ZlP"], { helpArticle: (0, Nw.Lu)() }),
    useValue: function () {
        return (0, h.bG)([Nk.A], () => Nk.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        NV.A.updatePersistentCodesEnabled(e);
    },
});
var NB = n(787392);
function Nz() {
    return (0, h.yK)([NB.A], () => NB.A.getUserIds());
}
var NY = n(803306),
    NX = n(966327),
    NH = n(774156);
function NK(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eM.Ay)(),
        s = (0, h.bG)([lu.default], () => lu.default.getUser(t)),
        l = pU.Ay.getFormattedName(s),
        r = E.useCallback(() => {
            (0, Nw.kj)(t);
        }, [t]),
        a = E.useCallback(() => (0, xw.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        E.useEffect(() => {
            (0, NY.wz)(t);
        }, [t]),
        (0, A.jsxs)("div", {
            className: NH.uW,
            children: [
                null != s && (0, A.jsx)(NX.A, { className: NH.my, user: s, size: I._3.SIZE_40 }),
                (0, A.jsxs)("div", {
                    className: NH.Qq,
                    children: [
                        (0, A.jsx)(n2.D, {
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
                (0, A.jsx)(n2.D, { onClick: r, className: NH.Qz, children: (0, A.jsx)(si.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function NW(e) {
    let { className: t, userId: n, verification: i, index: s } = e,
        l = (0, Nw.tC)(i.timestamp),
        r = E.useCallback(() => {
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
            (0, A.jsx)(n2.D, {
                className: NH.Kk,
                onClick: r,
                children: (0, A.jsx)(hA.P, { size: "md", color: nJ.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function NZ(e) {
    let { userId: t } = e,
        n = (0, h.yK)([NB.A], () =>
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
                    E.Fragment,
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
let N$ = (0, d.E2)(c.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
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
    NJ = (0, d.zZ)(c.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bTwjaz),
        usePredicate: () => (0, eJ.isDesktop)(),
        buildLayout: () => [NF, N$],
    }),
    N0 = (0, d.t_)(c.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        buildLayout: () => [NN, NU, NL, NJ],
    }),
    N1 = (0, d.i4)(c.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        icon: _1.m,
        buildLayout: () => [N0],
    });
var N2 = n(476713);
let N3 = (0, d.AK)(c.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.O65dzZ),
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        destinationKey: c.X.AUTHORIZED_APPS_CATEGORY,
    }),
    N5 = (0, d.gN)(c.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [N3] });
var N6 = n(875444);
function N4(e, t) {
    let n = (0, h.bG)([hC.default], () => hC.default.getFetchState()),
        i = (0, h.bG)([hC.default], () =>
            e ? hC.default.getNewestTokensForNonChildrenApplications() : hC.default.getNewestTokens(),
        ),
        s = E.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, N6.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        E.useEffect(() => {
            t || hd.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== hC.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: s }
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
        let { showLoadingIndicator: e } = N4(!0, !0);
        return e ? (0, A.jsx)(ol.y, {}) : (0, A.jsx)(N7, {});
    },
    useSearchTerms: () => [R.intl.string(R.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = N4(!0, !0);
        return e || 0 === t.length;
    },
});
function Ce() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = N4(!0, !0);
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
                { name: R.intl.string(R.t.JIFnN9), value: eY.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: R.intl.string(R.t.rRdsk1), value: eY.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: R.intl.string(R.t.IVRPMX), value: eY.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = L.TA.useSetting();
            return e === eY.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? eY.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => L.TA.updateSetting(e),
        usePredicate: Ce,
    });
function Ci() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = N4(!0, !0);
    return {
        sortedGames: E.useMemo(() => e.toSorted((e, t) => oh.default.compare(t.id, e.id)), [e]),
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
            (0, _4.N)(s, _8.YX.VIEWED);
        }),
        (0, A.jsx)(iX.w, {
            type: "info",
            iconAlign: l,
            children: (0, A.jsxs)(Y.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: "xs",
                children: [
                    (0, A.jsx)("span", { className: Cl.r, children: t }),
                    (0, A.jsx)(Y.B, {
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
        handleLearnMore: E.useCallback(() => {
            (t(), (0, _4.N)(e, _8.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: E.useCallback(() => {
            (fo.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _4.N)(e, _8.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function Co() {
    let e,
        t = (0, _6.uM)(),
        n = (0, fb.fk)(),
        i = (0, fC.b8)(),
        s = (0, _s.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : s && (e = "teen"), null != e) && (0, fg.n)(fd.Vc)) return e;
    }
}
var Cu = n(687123),
    Cd = n(444802);
function Cc() {
    let e = (0, Cd.WX)();
    E.useEffect(() => {
        (0, _4.N)(_8.YA.AGE_CONFIRMATION_NOTICE, _8.YX.VIEWED);
    }, []);
    let t = E.useCallback(() => {
            (window.open(eT.A.getArticleURL(e), "_blank"), (0, _4.N)(_8.YA.AGE_CONFIRMATION_NOTICE, _8.YX.LEARN_MORE));
        }, [e]),
        n = E.useCallback(() => {
            (fo.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _4.N)(_8.YA.AGE_CONFIRMATION_NOTICE, _8.YX.CONFIRM_AGE));
        }, []);
    return (0, A.jsx)(r8.p, {
        messageType: r8.Y.INFO,
        action: (0, A.jsx)(Ed.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: R.intl.string(R.t.FDSSia),
            onClick: n,
        }),
        children: R.intl.format(R.t.mFgsfg, { hook: (e, n) => (0, A.jsx)(ns.Anchor, { onClick: t, children: e }, n) }),
    });
}
function Cg() {
    let e = (0, fb.aX)(Cu.t.REACTIVE_CHECK),
        t = (0, fC.b8)();
    return E.useMemo(() => {
        if (e && !t) return { type: m.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: Cc };
    }, [e, t]);
}
var Cm = n(323073),
    CA = n(386171),
    CE = n(96607);
let Ch = (0, d.zD)(c.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => R.intl.string(R.t.gvC6q7),
        useSubtitle: () => R.intl.string(R.t.zirUC1),
        useValue: CA.hT,
        useDisabled: function () {
            let e = (0, CE.A)() ?? !0,
                t = (0, Cm.sP)(),
                n = (0, fC.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, Cm.p5)() && e
                ? fo.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    CS = (0, d.zD)(c.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => R.intl.string(R.t["L+yTsa"]),
        useSubtitle: () => R.intl.string(R.t["t6i/jW"]),
        useValue: CA.tI,
        useDisabled: function () {
            let e = (0, CE.A)() ?? !0,
                t = (0, Cm.sP)(),
                n = (0, fC.yM)();
            return E.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, Cm.p5)() && e
                ? fo.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
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
        n = (0, _6.uM)(),
        i = (0, _6.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, a1.cf)([aS.A], () => aS.A.settings.textAndImages?.explicitContentSettings ?? (0, Cf.C$)())),
        {
            explicitContentGuilds: (0, Cf.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, Cf.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, Cf.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, CT.hK)() && t.includes(eY.TO.SHOW)
            ? fo.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, Cf.Jz)(e);
    }
    let o = [
            { value: eY.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eY.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eY.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eY.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(_r.default["6Af/cw"]) : void 0 };
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
                tooltipText: n ? R.intl.string(_r.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function Cb() {
    let e,
        t = (0, CI.A)() ?? !0,
        n = (0, _6.uM)(),
        i = (0, _6.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, a1.cf)([aS.A], () => aS.A.settings.textAndImages?.goreContentSettings ?? (0, Cd.T4)())),
        {
            goreContentGuilds: (0, Cd.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, Cd.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, Cd.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, CT.hK)() && t.includes(eY.TO.SHOW)
            ? fo.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, Cd.qY)(e);
    }
    let o = [
            { value: eY.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eY.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eY.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eY.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(_r.default["6Af/cw"]) : void 0 };
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
                tooltipText: n ? R.intl.string(_r.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var Cy = n(875162),
    Cv = n(636745);
let Cj = (0, d.E2)(c.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, Cd.WX)(),
            t = E.useMemo(
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
                h,
                S,
                x,
                p,
                T = _7(),
                f =
                    ((s = (0, _6.uM)()),
                    (l = (0, fb.fk)()),
                    (r = (0, fC.b8)()),
                    (a = (0, _s.Z)()),
                    (o = Ca(_8.YA.AGE_CONFIRMATION_NOTICE, fc)),
                    (u = Ca(_8.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, fa.M0)),
                    (d = E.useCallback(() => {
                        (0, _4.N)(_8.YA.AGE_CONFIRMATION_NOTICE, _8.YX.VIEWED);
                    }, [])),
                    (c = E.useCallback(() => {
                        (0, _4.N)(_8.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _8.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (!s && (0, fg.n)(fd.Vc)) {
                            if (l && !r)
                                return {
                                    type: m.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "center",
                                    trackView: d,
                                    text: R.intl.format(fA.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: {
                                        size: "sm",
                                        text: R.intl.string(fA.default["cI+bc/"]),
                                        onClick: o.handleConfirmAge,
                                    },
                                };
                            if (a)
                                return {
                                    type: m.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "start",
                                    trackView: c,
                                    text: R.intl.format(fA.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { size: "sm", text: R.intl.string(R.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [l, s, a, r, u, c, d, o])),
                I =
                    ((e = (0, _s.Z)()),
                    (t = (0, Cd.WX)()),
                    (n = E.useCallback(() => {
                        (window.open(eT.A.getArticleURL(t), "_blank"),
                            (0, _4.N)(_8.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _8.YX.LEARN_MORE));
                    }, [t])),
                    (i = E.useCallback(() => {
                        (0, _4.N)(_8.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _8.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (e)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                text: R.intl.format(R.t.EUo0yj, {
                                    hook: (e, t) => (0, A.jsx)(ns.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                _ =
                    ((g = (0, fb.SJ)()),
                    (h = (0, fC.b8)()),
                    (S = g && !h),
                    (x = E.useCallback(() => {
                        (fo.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _4.N)(_8.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _8.YX.LEARN_MORE));
                    }, [])),
                    (p = E.useCallback(() => {
                        (0, _4.N)(_8.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _8.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (S)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: p,
                                text: R.intl.format(R.t.OX4ybh, {
                                    hook: (e, t) => (0, A.jsx)(ns.Anchor, { onClick: x, children: e }, t),
                                }),
                            };
                    }, [x, S, p])),
                N = Cg();
            return T ?? f ?? N ?? _ ?? I;
        },
        buildLayout: () => [Cj, CG, Ch, CS, Cp],
    });
var CU = n(923457),
    CV = n(750714);
let Ck = (0, d.Qx)(c.X.DM_SPAM_SETTING, {
    useTitle: () => R.intl.string(R.t.puwSkY),
    useSubtitle: () => R.intl.string(R.t["+sXN3T"]),
    useValue: function () {
        let e = L.he.useSetting(),
            t = L.cj.useSetting(),
            n = (0, h.bG)([lu.default], () => lu.default.getCurrentUser()),
            i = (0, fb.yv)(CU.p.SPAM_FILTERS);
        return e !== eY.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eY.he.FRIENDS_AND_NON_FRIENDS
              : (CV.xY.get(t) ?? eY.he.NON_FRIENDS);
    },
    setValue: (e) => L.he.updateSetting(e),
    useOptions: function () {
        return [
            { name: R.intl.string(R.t["+w5yKk"]), value: eY.he.FRIENDS_AND_NON_FRIENDS },
            { name: R.intl.string(R.t.yAPg6r), value: eY.he.NON_FRIENDS },
            { name: R.intl.string(R.t.FEXKsv), value: eY.he.DISABLED },
        ];
    },
    useSearchTerms: () => [R.intl.string(R.t.JzaP4h), R.intl.string(R.t.H9XOl3), R.intl.string(R.t.k4W40P)],
});
var Cw = n(189883);
let CF = (0, d.zD)(c.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => R.intl.string(R.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return E.useMemo(() => (0, n9.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? S.yKI : S.yKI & ~S.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _6.uM)();
    },
});
var CB = n(665260);
let Cz = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => R.intl.string(R.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n9.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? CB.UI(t, S.dzt.MUTUAL_FRIENDS) : CB.iE(t, S.dzt.MUTUAL_FRIENDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _6.uM)();
        },
    }),
    CY = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => R.intl.string(R.t.qsMfsH),
        useSubtitle: () => R.intl.string(R.t["6DqAp0"]),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n9.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? CB.UI(t, S.dzt.MUTUAL_GUILDS) : CB.iE(t, S.dzt.MUTUAL_GUILDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _6.uM)();
        },
    }),
    CX = (0, d.FW)(c.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => R.intl.string(R.t.wTdS6S),
        buildLayout: () => [CF, Cz, CY],
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
        useInlineNotice: _7,
        buildLayout: () => [CX, CK],
    });
var CZ = n(994500),
    Cq = n(428678),
    CQ = n(717398),
    C$ = n(730134),
    CJ = n(276573);
function C0(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, A.jsxs)("div", {
        className: CJ.wx,
        children: [
            (0, A.jsx)("div", {
                className: CJ.zc,
                children: i ? (0, A.jsx)(Cq.K, {}) : (0, A.jsx)(NR.EyeSlashIcon, {}),
            }),
            (0, A.jsxs)("div", {
                className: CJ.Qq,
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
        i = (0, h.bG)([CZ.A], () => CZ.A.isBlocked(t)),
        s = (0, h.bG)([lu.default], () => lu.default.getUser(t)),
        [l, r] = E.useState(!1),
        a = E.useCallback(() => {
            (r(!0),
                i
                    ? CQ.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : CQ.A.unignoreUser(t, tD.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == s
        ? null
        : (0, A.jsxs)("div", {
              className: io()(CJ.nM, { [CJ.fW]: n }),
              children: [
                  (0, A.jsxs)("div", {
                      className: CJ.eF,
                      children: [
                          (0, A.jsx)(C$.A, { user: s, size: I._3.SIZE_40 }),
                          (0, A.jsxs)("div", {
                              className: CJ.Qq,
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
        [i, s] = E.useState(5);
    return (0, A.jsx)(Nq.h, {
        children: (0, A.jsxs)("div", {
            className: CJ.Nr,
            children: [
                (0, A.jsx)(C0, { listType: n, numberOfUsers: t.length }),
                (0, A.jsx)("div", {
                    className: CJ.jS,
                    children: t.slice(0, i).map((e, n) => (0, A.jsx)(C1, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, A.jsx)("div", {
                          className: CJ.vM,
                          children: (0, A.jsx)(n2.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: CJ.Qf,
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
        usePredicate: () => (0, h.bG)([CZ.A], () => CZ.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([CZ.A], () => CZ.A.getBlockedIDs());
            return (0, A.jsx)(C2, { userIds: e, listType: "blocked" });
        },
    }),
    C5 = (0, d.E2)(c.X.IGNORED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t["93ZDWE"])],
        usePredicate: () => (0, h.bG)([CZ.A], () => CZ.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([CZ.A], () => CZ.A.getIgnoredIDs());
            return (0, A.jsx)(C2, { userIds: e, listType: "ignored" });
        },
    }),
    C6 = (0, d.zZ)(c.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+Iryf3"]),
        useSubtitle: () =>
            R.intl.format(R.t["0aNQo9"], { helpArticle: eT.A.getArticleURL(S.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [C3, C5],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, h.cf)([CZ.A], () => ({
                hasBlockedUsers: CZ.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: CZ.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var C4 = n(22385),
    C8 = n(556534),
    C7 = n(111159),
    C9 = n(152056),
    be = n(428031),
    bt = n(978433);
let bn = { label: () => R.intl.string(R.t["32u1Dx"]), value: C4.YG };
var bi = n(307863),
    bs = n(954225);
function bl() {
    return (0, bi.e)() ? R.intl.string(R.t.PMsfcH) : R.intl.string(R.t.RAQUSN);
}
function br(e, t) {
    ti.default.track(S.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let ba = (0, d.zD)(c.X.PERMISSIONS_DMS_SETTING, {
    useTitle: bl,
    useSubtitle: function () {
        let e = (0, C8.Tx)(),
            t = (0, C8.q9)(),
            n = (0, bi.e)();
        return e === C4.YG
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
        return e === C4.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, _6.uM)();
        return (0, C8.Tx)() === C4.YG && e;
    },
    setValue: function (e) {
        let t = C4.xk.getState().selectedGuildId;
        if (t === C4.YG) {
            var n;
            ((n = !e),
                (0, Nl.O)({
                    header: R.intl.string(R.t["uUr+GR"]),
                    body: R.intl.string(R.t.hjGJBp),
                    confirmText: R.intl.string(R.t.gm1Vej),
                    cancelText: R.intl.string(R.t.p89ACt),
                    confirmButtonColor: lH.$n.Colors.BRAND,
                    onConfirm: function () {
                        (L.n6.updateSetting(n), br(n, !1));
                    },
                    onCancel: function () {
                        (L.n6.updateSetting(n), L.$s.updateSetting(n ? sp.A.getGuildIds() : []), br(n, !0));
                    },
                }));
        } else {
            let n = (0, n9.Tb)();
            (e ? n.delete(t) : n.add(t),
                L.$s.updateSetting(Array.from(n)),
                ti.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
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
    ti.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
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
                s = (0, _6.uM)(),
                l = L.YX.useSetting(),
                r = L.Zr.useSetting().includes(e);
            return !!i || (e === C4.YG && s ? !l : e === C4.YG ? !t && !l : !n && !r);
        },
        useDisabled: function () {
            let e = (0, C8.Tx)(),
                t = (0, _6.uM)(),
                n = (0, be.K)(),
                i = L.$s.useSetting().includes(e),
                s = (0, bo.s)();
            return e === C4.YG ? n || t || s : i || s;
        },
        setValue: function (e) {
            let t = C4.xk.getState().selectedGuildId;
            if (!e && (0, bu.w)())
                return void fo.A.showAgeVerificationGetStartedModal({ entryPoint: Cs.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === C4.YG) {
                var n;
                ((n = !e),
                    (0, Nl.O)({
                        header: R.intl.string(R.t.yAfu1p),
                        body: R.intl.string(R.t.Ry2z74),
                        confirmText: R.intl.string(R.t.gm1Vej),
                        cancelText: R.intl.string(R.t.p89ACt),
                        confirmButtonColor: lH.$n.Colors.BRAND,
                        onConfirm: function () {
                            (L.YX.updateSetting(n), bd(n, !1));
                        },
                        onCancel: function () {
                            (L.YX.updateSetting(n), L.Zr.updateSetting(n ? sp.A.getGuildIds() : []), bd(n, !0));
                        },
                    }));
            } else {
                let n = (0, n9.xo)();
                (e ? n.delete(t) : n.add(t),
                    L.Zr.updateSetting(Array.from(n)),
                    ti.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
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
                { selectedGuildId: n, setSelectedGuildId: i } = (0, C4.xk)(),
                s = (0, h.bG)([cl.Ay], () => cl.Ay.getFlattenedGuildIds()),
                l = (0, h.bG)([sp.A], () => sp.A.getGuilds()),
                r =
                    ((e = L.$s.useSetting()),
                    (t = (0, be.K)()),
                    (0, h.bG)(
                        [sp.A],
                        () => {
                            let n = new Set(e);
                            return sp.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = s[0];
            E.useEffect(
                () =>
                    C9.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = C4.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === C4.YG && null != a
                                ? i(a)
                                : "" === e && n !== C4.YG && i(C4.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = E.useMemo(() => {
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
                                    leading: (0, A.jsx)(cS.Ay, {
                                        className: bt.cl,
                                        guild: n,
                                        size: cS.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [s, l]),
                u = n === C4.YG && r > 0;
            return (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(xN.Z, {
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
            return e === C4.YG && null != t;
        },
        Component: function () {
            let e = Co(),
                t = Ca(_8.YA.AGE_CONFIRMATION_NOTICE, fc),
                n = Ca(_8.YA.CONTENT_AND_SOCIAL_NOTICE, fa.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, A.jsx)(Cr, {
                        noticeType: _8.YA.AGE_CONFIRMATION_NOTICE,
                        iconAlign: "center",
                        body: R.intl.format(fA.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: R.intl.string(fA.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, A.jsx)(Cr, {
                        noticeType: _8.YA.CONTENT_AND_SOCIAL_NOTICE,
                        iconAlign: "start",
                        body: R.intl.format(fA.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: R.intl.string(R.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    bE = (0, d.zZ)(c.X.PERMISSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Y5GYcX),
        useSubnavLabel: () => R.intl.string(R.t.YUU0RF),
        useInlineNotice: function () {
            let e = _7(),
                t = Cg();
            if ((0, C8.Tx)() === C4.YG) return e ?? t;
        },
        buildLayout: () => [bm, ba, bg, bA],
    }),
    bh = (0, d.zZ)(c.X.SPAM_FILTERS_CATEGORY, { useTitle: () => R.intl.string(R.t.Qwuoic), buildLayout: () => [Ck] }),
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
                return E.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, A.jsx)("img", {
                                src: O.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: ED.CD,
                                height: ED.CD,
                            }),
                            shape: ED.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, A.jsx)("img", {
                                    src: O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: ED.YP,
                                    height: ED.YP,
                                }),
                                shape: ED.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: m.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [R.intl.string(R.t.YpCiMt)],
        initialize: () => {
            hd.A.fetch();
        },
        buildLayout: () => [Ct, Cn, N9, N5],
    }),
    bx = (0, d.t_)(c.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        buildLayout: () => [CM, bh, bE, CW, bS, C6],
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
            R.intl.format(R.t.Q5crhR, { onClick: () => (0, nr.openUserSettings)(c.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    bC = (0, d.Qx)(c.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.JZxxGx),
        useSubtitle: () => R.intl.string(R.t.HDLtJl),
        useValue: () => (0, h.bG)([ay.A], () => ay.A.getTTSType()),
        setValue: (e) => aR.default.setTTSType(e),
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
            return th(bb, {
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
            return (0, h.bG)([ay.A], () => !ay.A.getDisableUnreadBadge());
        },
        setValue: (e) => aR.default.setDisableUnreadBadge(!e),
    }),
    bO = (0, d.zZ)(c.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.l6w3Vj),
        buildLayout: () => [bj],
    });
var bL = n(840559),
    bR = n(997187);
let bD = (0, Eq.mj)({
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
                    let { categories: t } = (0, h.cf)([bR.A], () => bR.A.getEmailSettings());
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
            let { categories: e } = (0, h.cf)([bR.A], () => bR.A.getEmailSettings());
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
            return (0, h.bG)([ay.A], () => ay.A.getDesktopType()) !== S.nRU.NEVER;
        },
        setValue: (e) => aR.default.setDesktopType(e ? S.nRU.ALL : S.nRU.NEVER),
    });
var bk = n(832712),
    bw = n(543465),
    bF = n(790782);
let bB = (0, d.zD)(c.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => R.intl.string(R.t["k6m/si"]),
    useSubtitle: () => R.intl.string(R.t.LGynPs),
    useValue: () => (0, h.bG)([bw.Ay], () => bw.Ay.useNewNotifications),
    setValue: function (e) {
        (bk.A.setAccountFlag(EY.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (AK.w.set("turnedOffNewNotifications", !0),
                ti.default.track(S.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sp.A.getGuildsArray().filter(
                        (e) => bw.Ay.resolveGuildUnreadSetting(e) === bF.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, h.bG)(
            [lu.default, bw.Ay],
            () =>
                lu.default.getCurrentUser()?.isStaff() ||
                lu.default.getCurrentUser()?.isStaffPersonal() ||
                bw.Ay.useNewNotifications,
        ),
});
var bz = n(534654);
let bY = (0, d.zD)(c.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => R.intl.string(R.t.z9h8Ym),
        useSubtitle: () => R.intl.string(R.t.TummoQ),
        useValue: () => (0, h.bG)([ay.A], () => ay.A.screenDowntimeReminder),
        setValue: (e) => aR.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, bz.A)(),
                t = (0, _t.Du)();
            return e && t;
        },
    }),
    bX = (0, d.zD)(c.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => R.intl.string(R.t.onrAy7),
        useSubtitle: () => R.intl.string(R.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, bz.A)(),
                t = (0, _t.Du)();
            return e && t;
        },
    }),
    bH = (0, d.zD)(c.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.NjOMvh),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            (L.oz.updateSetting(e),
                ti.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EY.Y.ACCOUNT,
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
                ti.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EY.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    bW = (0, d.zD)(c.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            (L.Yh.updateSetting(e),
                ti.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EY.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    bZ = (0, d.zD)(c.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            (L.T3.updateSetting(e),
                ti.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EY.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var bq = n(815807);
let bQ = (0, d.Hn)(c.X.REACTION_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: R.intl.string(R.t["9x/RtT"]), value: eY.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: R.intl.string(R.t.fJAbQd), value: eY.Tz.ONLY_DMS },
            { id: "disabled", label: R.intl.string(R.t["xu+UDU"]), value: eY.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, bq.n4)(e, L.Zp.getSetting()),
    }),
    b$ = (0, d.zD)(c.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["k51K1+"]),
        useValue: L.Qr.useSetting,
        setValue: function (e) {
            (L.Qr.updateSetting(e),
                ti.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EY.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    bJ = (0, Eq.mj)({
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
                ti.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: EY.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => bJ.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    b1 = (0, d.FW)(c.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.FEVRDV),
        buildLayout: () => [bW, bH, bK, b$, b0, bZ, bQ],
    }),
    b2 = (0, d.zD)(c.X.TASK_BAR_FLASHING, {
        useTitle: () => R.intl.string(R.t.xSmFQG),
        useSubtitle: () => R.intl.string(R.t.bd4j4x),
        useValue: () => (0, h.bG)([ay.A], () => ay.A.taskbarFlash),
        setValue: (e) => aR.default.setTaskbarFlash(e),
        usePredicate: () => (0, nE.uF)(),
    }),
    b3 = (0, d.zZ)(c.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [bV, b2, b1, bB, bX, bY],
    });
var b5 = n(965957),
    b6 = n(312671),
    b4 = n(235079);
let b8 = (0, d.zD)(c.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = av.A.useHolidaySoundpack();
        return null == e ? "" : R.intl.format(R.t["E/OyBr"], { soundpack: R.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, h.bG)([b6.A], () => b6.A.getSoundpack()),
            t = av.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = av.A.getHolidaySoundpack();
        (tu()(null != t, "predicate should fail if no soundpack is available"), (0, b5.p)(e ? t : b4.i.CLASSIC));
    },
    usePredicate: av.A.useIsEligible,
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
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => aG("message3") }),
        useValue: () =>
            (0, h.bG)([ay.A], () => ay.A.getNotifyMessagesInSelectedChannel() && !ay.A.getDisableAllSounds()),
        setValue: (e) => aR.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, h.bG)([ay.A], () => ay.A.getDisableAllSounds()),
    }),
    yn = (0, d.zD)(c.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => R.intl.string(R.t["2ZhCOd"]),
        useSubtitle: () => R.intl.string(R.t.EAKdPr),
        useValue: () => (0, h.bG)([ay.A], () => ay.A.getDisableAllSounds()),
        setValue: (e) => aR.default.toggleDisableAllSounds(e),
    }),
    yi = (0, d.D1)(c.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aP();
            };
        },
        buildLayout: () => [aM(b9), yt, aM(ye), yn],
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
        buildLayout: () => [_T, N1, bp, yo, _0],
    });
var yd = n(387758),
    yc = n(271866),
    yg = n(147964),
    ym = n(868511);
let yA = (0, d.zD)(c.X.APPLICATION_TEST_MODE, {
        useTitle: () => R.intl.string(R.t.erOqlh),
        useSubtitle: () => R.intl.string(R.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, h.bG)([yg.A], () => null != yg.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, sd.openModal)((e) => (0, A.jsx)(ym.A, { ...e })) : yc.cL();
        },
    }),
    yE = (0, d.zD)(c.X.DEVELOPER_MODE, {
        useTitle: () => R.intl.string(R.t.ObIb1Q),
        useSubtitle: () => R.intl.format(R.t["CY6q/Q"], { apiDocsUrl: S.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => uG.p5,
    }),
    yh = (0, d.zZ)(c.X.DEVELOPER_CATEGORY, { buildLayout: () => [yE, yA] }),
    yS = (0, d.t_)(c.X.DEVELOPER_PANEL, { useTitle: () => R.intl.string(R.t["0BRxRp"]), buildLayout: () => [yh] }),
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
            (0, n0.A)({
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
    y_ = (0, d.Hr)({ buildLayout: () => [fn, yu, Ar, ot, xG, EO, yI], analyticsKey: "user_settings" });
