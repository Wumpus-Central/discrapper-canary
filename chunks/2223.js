n.d(t, { D: () => bL });
var i,
    l,
    s,
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
    T = n(346055),
    p = n(297264),
    x = n(364522),
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
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, C.rh)({ ...(0, b.Ay)({ channelId: P.id, content: e }), state: S.cmJ.SENT, reactions: t });
}
var M = n(856488);
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
var el = n(955572);
let es = (0, d.zD)(c.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => R.intl.string(R.t.OCJg5f),
    useSubtitle: () => R.intl.string(R.t.HEO0s3),
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.desaturateUserColors),
    setValue: () => (0, el.YV)(),
});
var er = n(652525);
let ea = (0, d.zD)(c.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => R.intl.string(R.t["+Isihb"]),
        useSubtitle: () => R.intl.string(R.t.nNZ1Tz),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.enableCustomCursor),
        setValue: (e) => (0, el.ts)(e),
        usePredicate: () => (0, er.t)("EnableCustomCursorSetting"),
    }),
    eo = (0, d.zD)(c.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => R.intl.string(R.t["S3z+pV"]),
        useSubtitle: () => R.intl.string(R.t["3QuI9+"]),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, el.Gm)(e),
        hasIcon: !0,
    });
var eu = n(554146);
let ed = (0, d.zD)(c.X.HIGH_CONTRAST_MODE, {
    useTitle: () => R.intl.string(R.t.aZlePv),
    useSubtitle: () => R.intl.string(R.t["v2qF8+"]),
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, el.uh)(e ? N._1.HIGH : N._1.DEFAULT),
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
            (0, el.FU)(e);
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
        setValue: (e) => (0, el.w_)(e),
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
        setValue: (e) => (0, el.IX)(e),
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
    setValue: (e) => (0, el.IX)(e),
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
    asValueChanges: (e) => (0, el.HU)(e),
});
var eS = n(964486),
    eT = n(839214),
    ep = n(502229),
    ex = n(975571);
let ef = (0, eT.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    eI = (0, d.zD)(c.X.SYNC_FORCED_COLORS, {
        useTitle: () => R.intl.string(R.t.cguiec),
        useSubtitle: () => R.intl.format(R.t.GwEVE2, { learnMoreLink: ex.A.getArticleURL(S.MVz.FORCED_COLORS) }),
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
                ((0, el.D3)(e), ef.setState({ updateTimeout: null }));
            }, 150);
            ef.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, ep.D)(),
    }),
    e_ = (0, d.zZ)(c.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => R.intl.string(R.t.JqvyiY),
        buildLayout: () => [eh, es, ed, ea, eI, em, eE, eA, eo, ei],
    });
var eN = n(397438),
    eC = n(355097);
function eb(e) {
    return (0, h.bG)([eN.A], () =>
        (function (e) {
            switch (e) {
                case eC._A.REDUCED_MOTION:
                    return R.intl.format(R.t["1dT9V4"], {});
                case eC._A.REDUCED_MOTION_STICKERS:
                    return R.intl.string(R.t["2ExvRu"]);
                default:
                    return;
            }
        })(eN.A.getAppliedOverrideReasonKey(e)),
    );
}
let ey = (0, d.zD)(c.X.ANIMATE_EMOJIS, {
        useTitle: () => R.intl.string(R.t.iIaOlc),
        useSubtitle: () => eb("animateEmoji"),
        useValue: () => L.Sf.useSetting(),
        setValue: (e) => L.Sf.updateSetting(e),
    }),
    ev = (0, d.zD)(c.X.ANIMATE_GIFS, {
        useTitle: () => R.intl.string(R.t.wqsK7q),
        useSubtitle: () => eb("gifAutoPlay"),
        useValue: () => L.kt.useSetting(),
        setValue: (e) => L.kt.updateSetting(e),
    });
var ej = n(823894);
let eO = (0, d.Qx)(c.X.ANIMATE_STICKERS, {
        useTitle: () => R.intl.string(R.t.sBHIh0),
        useSubtitle: () => eb("animateStickers"),
        useOptions: () => [
            { name: R.intl.string(R.t["Xp+X2U"]), value: ej.BJ.ALWAYS_ANIMATE },
            { name: R.intl.string(R.t.IlLT7e), desc: R.intl.string(R.t.bIW9Tl), value: ej.BJ.ANIMATE_ON_INTERACTION },
            { name: R.intl.string(R.t.IGu8x3), value: ej.BJ.NEVER_ANIMATE },
        ],
        useValue: () => L.S0.useSetting(),
        setValue: (e) => L.S0.updateSetting(e),
    }),
    eL = (0, d.zD)(c.X.REDUCED_MOTION, {
        useTitle: () => R.intl.string(R.t.b3XBzg),
        useSubtitle: () => R.intl.format(R.t.XqvxJc, { helpdeskArticle: ex.A.getArticleURL(S.MVz.REDUCED_MOTION) }),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        setValue: (e) => (0, el.qz)(e ? "reduce" : "no-preference"),
    }),
    eR = (0, d.zD)(c.X.SYNC_REDUCED_MOTION, {
        useTitle: () => R.intl.string(R.t.oL55A6),
        useValue: () => (0, h.bG)([N.Ay], () => "auto" === N.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, el.qz)(e ? "auto" : N.Ay.systemPrefersReducedMotion),
    }),
    eD = (0, d.zZ)(c.X.MOTION_CATEGORY, {
        useTitle: () => R.intl.string(R.t.e3TR1b),
        buildLayout: () => [eL, eR, ev, ey, eO],
    });
var eP = n(688810),
    eG = n(259065),
    eU = n(701974);
let eM = (0, d.zD)(c.X.DISPLAY_NAME_STYLES, {
    useTitle: () => R.intl.string(eU.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eP.Ay)();
        return R.intl.format(eU.default.aEax6P, {
            onClickOpenModal() {
                (0, eG.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, h.bG)([N.Ay], () => N.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, el.Dm)(e),
});
function eV(e) {
    return `${e.toFixed(0)}px`;
}
let ek = (0, d.sN)(c.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => R.intl.string(R.t.rT3Pq5),
        useSubtitle: () => R.intl.string(R.t.LXUhen),
        markers: S.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: S.hH7.FONT_SIZES["0"],
        maxValue: S.hH7.FONT_SIZES[S.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => S.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => N.Ay.fontSize,
        onValueRender: eV,
        onMarkerRender: eV,
        asValueChanges: (e) => (0, el.XS)(e),
    }),
    ew = (0, d.zD)(c.X.UNDERLINE_LINKS, {
        useTitle: () => R.intl.string(R.t.OLZFB8),
        useSubtitle: () => R.intl.string(R.t.DIX3ke),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, el.kI)(e),
    }),
    eF = (0, d.zZ)(c.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["bxh/R7"]),
        buildLayout: () => [ek, ew, eM],
    });
var eB = n(873298);
let ez = (0, d.Qx)(c.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => R.intl.string(R.t["C/5V0A"]),
        useSubtitle: () => R.intl.string(R.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: R.intl.string(R.t["7iegX4"]), value: eB.NS.COMPACT },
            { name: R.intl.string(R.t.bBvAEH), value: eB.NS.DEFAULT },
            { name: R.intl.string(R.t["4cuYHx"]), value: eB.NS.COZY },
        ],
        useValue: () => L.Xi.useSetting(),
        setValue: (e) => {
            e !== eB.NS.UNSET_UI_DENSITY && L.Xi.updateSetting(e);
        },
    }),
    eX = "cozy",
    eY = "compact",
    eH = (0, d.Qx)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => R.intl.string(R.t.nKRoPv),
        useSubtitle: () => R.intl.string(R.t.QntEEG),
        useSearchTerms: () => [R.intl.string(R.t.ZEoGMd)],
        useOptions: () => [
            { name: R.intl.string(R.t.Jqj4cZ), value: eX },
            { name: R.intl.string(R.t["1JNcPS"]), value: eY },
        ],
        useValue: () => (L.hH.useSetting() ? eY : eX),
        setValue: (e) => {
            (L.hH.updateSetting(e === eY), (0, el.AC)());
        },
    });
var eK = n(381941);
function eW(e) {
    return `${e.toFixed(0)}px`;
}
let eZ = (0, d.sN)(c.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => R.intl.string(R.t.Q6lKkg),
    useSubtitle: () => R.intl.string(R.t.p7eUrb),
    markers: eK.qh,
    stickToMarkers: !0,
    minValue: eK.qh["0"],
    maxValue: eK.qh[eK.qh.length - 1],
    useDefaultValue: () => (L.hH.useSetting() ? eK.y5 : eK.ES),
    useExternalValue: () => (0, h.bG)([N.Ay], () => N.Ay.messageGroupSpacing),
    getInitialValue: () => N.Ay.messageGroupSpacing,
    onValueRender: eW,
    onMarkerRender: eW,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, el.AC)(e);
        }
    },
});
var eq = n(775121),
    eQ = n(723702);
let eJ = (0, d.sN)(c.X.APPEARANCE_ZOOM, {
        usePredicate: () => eQ.isPlatformEmbedded,
        useTitle: () => R.intl.string(R.t.i19n5L),
        useSubtitle: () => R.intl.format(R.t["x9PK/3"], { modKey: eq.A.modKey }),
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
        setValue: (e) => (0, el.Qp)(e),
        useSearchTerms: () => [R.intl.string(R.t.ip0uSf)],
    }),
    e$ = (0, d.zZ)(c.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.VKYWk8),
        buildLayout: () => [ez, eH, eZ, eJ],
    }),
    e0 = (0, d.t_)(c.X.ACCESSIBILITY_PANEL, {
        useTitle: () => R.intl.string(R.t.G0neg7),
        buildLayout: () => [eF, e$, e_, eD, et],
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = L.hH.useSetting(),
                    t = L.jW.useSetting(),
                    n = E.useMemo(
                        () => [
                            U(
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
                            U(R.intl.formatToPlainString(R.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, h.bG)([N.Ay], () => N.Ay.messageGroupSpacing);
                return (0, A.jsx)(T.M, {
                    children: (0, A.jsxs)("section", {
                        "aria-label": R.intl.string(R.t.RC22qg),
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: D.Vf,
                                children: R.intl.string(R.t.RC22qg),
                            }),
                            (0, A.jsxs)(x.Ip, {
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
    e1 = (0, d.i4)(c.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.G0neg7),
        icon: g.c,
        useMenu: M.A,
        buildLayout: () => [e0],
    });
n(321073);
var e2 = n(650809),
    e3 = n(477782),
    e6 = n(636537),
    e5 = n(228366),
    e4 = n(74396),
    e8 = n(93055),
    e7 = n(269880),
    e9 = n(55619),
    te = n(351906),
    tt = n(174459),
    tn = n(812993),
    ti = n(189081);
let tl = (0, d.zD)(c.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, h.bG)([ti.A], () => ti.A.hasLibraryApplication()),
        useTitle: () => R.intl.string(R.t.fi3UQN),
        useSubtitle: () => R.intl.string(R.t["8mYp37"]),
        useValue: () => !L.l_.useSetting(),
        setValue: (e) => L.l_.updateSetting(!e),
    }),
    ts = (0, d.zZ)(c.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["8/udY0"]),
        buildLayout: () => [tl],
    });
var tr = n(284009),
    ta = n.n(tr),
    to = n(199966),
    tu = n(963935);
function td(e) {
    let { title: t } = e;
    return t;
}
function tc(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: l } = e,
        s = t();
    return "string" == typeof s ? i({ title: s, index: l, key: n }) : s;
}
function tg(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, A.jsx)(tc, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tm(e) {
    return e.type === tu.Z6.LIST;
}
function tA(e, t) {
    let { limit: n = 2, formatter: i = td } = t ?? {};
    ta()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, to._)(),
        r = l.get(e) ?? s.get(e);
    ta()(
        null != r && (r.type === tu.Z6.ACCORDION || tm(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tm(r) ? (r.collapseAfter ?? 0) : 0,
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
        let l = Math.min(n, 3);
        if (t.length <= l)
            if (1 === t.length)
                return R.intl.format(R.t["3H9tCW"], { settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return R.intl.format(R.t.MWryo6, {
                    settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tg({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return R.intl.format(R.t.a00b5G, {
                    settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tg({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tg({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === l
            ? R.intl.format(R.t.O8vNbS, { settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === l
              ? R.intl.format(R.t["acXG/W"], {
                    settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tg({ setting: t[1], formatter: i, index: 1 }),
                })
              : R.intl.format(R.t["5+ldWc"], {
                    settingOneHook: tg({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tg({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tg({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tE = n(951260);
let th = (0, d.zD)(c.X.ENABLE_APPS_BUTTON, {
        useTitle: () => R.intl.string(R.t.ZTH4j4),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, el.n8)({ appsButtonEnabled: e }),
    }),
    tS = {
        useTitle: () => R.intl.string(R.t["I/5LyL"]),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isSubmitButtonEnabled),
        setValue: () => (0, el.Xt)(),
    },
    tT = (0, d.zD)(c.X.ENABLE_SEND_BUTTON, tS),
    tp = (0, d.zD)(c.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tS,
        usePredicate: () => !(0, tE.n)("EnableSendButtonOutsideExperiment"),
    }),
    tx = (0, d.zD)(c.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => R.intl.string(R.t.WggFoO),
        useSubtitle: () => R.intl.string(R.t.XpErGj),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, el.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tf = (0, d.zD)(c.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => R.intl.string(R.t.YErWkD),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, el.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tI = (0, d.zD)(c.X.ENABLE_GIF_BUTTON, {
        useTitle: () => R.intl.string(R.t.k7oNEz),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isGifButtonEnabled),
        setValue: (e) => (0, el.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    t_ = (0, d.zD)(c.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => R.intl.string(R.t.Ar0krj),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, el.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tN = (0, d.Qx)(c.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => R.intl.string(R.t.AxRAWt),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.expressionPickerFormat),
        setValue: (e) => (0, el.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.k86Soy), desc: R.intl.string(R.t.bSGTTZ), value: N.IG.FLEXIBLE },
                { name: R.intl.string(R.t.bjwSOn), desc: R.intl.string(R.t.We36HX), value: N.IG.CONDENSED },
                { name: R.intl.string(R.t.FDIKss), desc: R.intl.string(R.t["rclZL/"]), value: N.IG.HIDDEN },
            ];
        },
    }),
    tC = (0, d.FW)(c.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => R.intl.string(R.t["V9/cNN"]),
        buildLayout: () => [tN, tx, tf, tI, t_],
    }),
    tb = (0, d.bd)(c.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.IwVGQs) : R.intl.string(R.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tA(c.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tE.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tT, th, tC],
    });
var ty = n(565645);
let tv = (0, d.zD)(c.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => R.intl.string(R.t["79qal8"]),
        useSubtitle: () =>
            R.intl.format(R.t.GejoQK, { emojiHook: (e, t) => (0, A.jsx)(ty.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: L.j7.useSetting,
        setValue: L.j7.updateSetting,
    }),
    tj = (0, d.zD)(c.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => R.intl.string(R.t.c0oFDw),
        useValue: L.BQ.useSetting,
        setValue: L.BQ.updateSetting,
    }),
    tO = (0, d.zD)(c.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => R.intl.string(R.t.AqGrEI),
        useValue: L.SI.useSetting,
        setValue: (e) => {
            (tt.default.track(S.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                L.SI.updateSetting(e));
        },
    });
var tL = n(793574);
let tR = (0, d.zD)(c.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => R.intl.string(R.t["d+It2U"]),
        useValue: L.ML.useSetting,
        setValue: (e) => {
            (tt.default.track(S.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: S.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tL.A.TEXT_AND_IMAGES],
            }),
                L.ML.updateSetting(e));
        },
    }),
    tD = (0, d.zZ)(c.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Ob7VMB),
        useSearchTerms: () => [R.intl.string(R.t.onqU6o)],
        buildLayout: () => [tO, tv, tR, tj, tp, tb],
    });
var tP = n(526162),
    tG = n(793943),
    tU = n(792656),
    tM = n(830543),
    tV = n(785007),
    tk = n(806932),
    tw = n(915089),
    tF = n(10392),
    tB = n(82498),
    tz = n(174197),
    tX = n(202541);
let tY = (0, d.E2)(c.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [R.intl.string(R.t.gnwxvT)],
    Component: function () {
        let e = (0, tw.GV)(),
            { ref: t, ...n } = (0, tV._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, h.bG)([tP.A], () => tP.A.isUpsellPreview);
        return (
            (0, z.Ay)(() => {
                i &&
                    (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tX.e.APP_ICON_UPSELL,
                        location_stack: [tL.A.USER_SETTINGS],
                    }),
                    (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, [tL.A.USER_SETTINGS], () =>
                        (0, tB.uq)(tX.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, A.jsx)("div", {
                ...n,
                ref: t,
                children: (0, A.jsx)(X.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, A.jsx)(tk.m, { disabled: i, size: tz.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function tH() {
    ((0, tG.nf)(tG.HP.APP_ICON), (0, tM.default)());
}
function tK() {
    return (0, A.jsx)(tU.A, {
        subscriptionTier: tX.pe.TIER_2,
        defaultTextOverride: R.intl.string(R.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let tW = (0, d.zZ)(c.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RPh2ou),
        useSubtitle: () => R.intl.string(R.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, h.bG)([tP.A], () => tP.A.isUpsellPreview);
            return E.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: m.UV.BUTTON,
                        text: R.intl.string(R.t["6acvnZ"]),
                        onClick: tH,
                    }),
                    e && t.push({ id: "upsell-button", type: m.UV.STRONGLY_DISCOURAGED_CUSTOM, button: tK }),
                    { type: m.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [tY],
    }),
    tZ = (0, d.AK)(c.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.UDr3Iy),
        useSearchTerms: () => [R.intl.string(R.t.UDr3Iy)],
        destinationKey: c.X.ACCESSIBILITY_PANEL,
    }),
    tq = (0, d.gN)(c.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [tZ] });
var tQ = n(452027),
    tJ = n(243721),
    t$ = n(976860),
    t0 = n(16236),
    t1 = n(635233),
    t2 = n(749884),
    t3 = n(22277);
let t6 = ex.A.getArticleURL(S.MVz.FAVORITES_GUILD);
function t5() {
    let { analyticsLocations: e } = (0, eP.Ay)(tL.A.USER_SETTINGS_FAVORITES),
        t = E.useCallback(() => {
            ((0, t1.mv)("settings_page"), (0, t$.uh)(S.YYv), (0, tM.default)());
        }, []);
    return (0, A.jsx)(eP.f5, {
        value: e,
        children: (0, A.jsx)(tQ.D, {
            label: R.intl.string(t3.default.OT1NK5),
            description: R.intl.format(t3.default.GR2KOG, { helpCenterLink: t6 }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, A.jsxs)(X.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, A.jsx)(_.$, { variant: "secondary", text: R.intl.string(t3.default["7WwLnr"]), onClick: t }),
                    (0, A.jsx)(tU.A, {
                        subscriptionTier: tX.pe.TIER_2,
                        defaultTextOverride: R.intl.string(t3.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let t4 = (0, d.E2)(c.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, e8.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [R.intl.string(t3.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, e8.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, t2.A)(!1);
            return e
                ? (0, A.jsx)(tJ.d, {
                      checked: t,
                      description: R.intl.format(t3.default.GR2KOG, { helpCenterLink: t6 }),
                      onChange: t0.kG,
                      label: R.intl.string(t3.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, A.jsx)(t5, {});
        },
    }),
    t8 = (0, d.zD)(c.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => R.intl.string(R.t.U47N1p),
        useValue: L.hD.useSetting,
        setValue: L.hD.updateSetting,
    }),
    t7 = (0, d.zD)(c.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => R.intl.string(R.t.VP11No),
        useValue: L.X6.useSetting,
        setValue: L.X6.updateSetting,
    }),
    t9 = (0, d.FW)(c.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => R.intl.string(R.t["9nyle0"]),
        buildLayout: () => [t8, t7],
    }),
    ne = (0, d.zD)(c.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => R.intl.string(R.t["5bK9vw"]),
        useValue: L.rs.useSetting,
        setValue: L.rs.updateSetting,
    }),
    nt = (0, d.zD)(c.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => R.intl.string(R.t["zge/fP"]),
        useValue: L.jW.useSetting,
        setValue: L.jW.updateSetting,
    });
var nn = n(28863),
    ni = n(817281),
    nl = n(766075);
let ns = (0, d.zD)(c.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => R.intl.string(R.t.JgjNG3),
        useSubtitle: () => {
            if (!L.hH.useSetting())
                return R.intl.format(R.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, A.jsx)(
                            nn.Anchor,
                            {
                                onClick: () => (0, nl.openUserSettings)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
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
            ni.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    nr = (0, d.Hn)(c.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => R.intl.string(R.t.QgwmVz),
        useOptions: () => [
            { value: S.P6Q.ON_CLICK, id: S.P6Q.ON_CLICK, label: R.intl.string(R.t["KFH/me"]) },
            { value: S.P6Q.ALWAYS, id: S.P6Q.ALWAYS, label: R.intl.string(R.t.Pe1RbL) },
            { value: S.P6Q.IF_MODERATOR, id: S.P6Q.IF_MODERATOR, label: R.intl.string(R.t.K5VTBE) },
        ],
        useValue: L.gs.useSetting,
        setValue: L.gs.updateSetting,
    }),
    na = (0, d.zD)(c.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => R.intl.string(R.t.AInv5m),
        useValue: L.SY.useSetting,
        setValue: L.SY.updateSetting,
    }),
    no = (0, d.zZ)(c.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.OIgYlQ),
        useSearchTerms: () => [R.intl.string(R.t["/VQax8"])],
        buildLayout: () => [t9, ne, nt, nr, na, ns, t4, tq],
    });
var nu = n(753806),
    nd = n(145331);
let nc = (0, d.Qx)(c.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            (t ? nu.A.cleanUpPrivateChannelSearchState() : nu.A.cleanUpSearchState({ type: S.I4_.DMS }),
                (0, nd._k)({
                    prevIsCrossDMSettingEnabled: L.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: nd.vy.USER_SETTINGS,
                }),
                L.Hu.updateSetting(t));
        },
    }),
    ng = (0, d.zZ)(c.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => R.intl.string(R.t["5h0QOP"]),
        buildLayout: () => [nc],
    });
var nm = n(574381);
let nA = (0, d.zD)(c.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => R.intl.string(R.t.IxjaoF),
        useValue: function () {
            return (0, h.bG)([te.A], () => {
                let { autoToggle: e } = te.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e9.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nm.Av;
        },
    }),
    nE = (0, d.zD)(c.X.STREAMING_STREAMER_MODE, {
        useTitle: () => R.intl.string(R.t.TGNg6T),
        useSubtitle: () => R.intl.string(R.t["4nXLnE"]),
        useValue: function () {
            return (0, h.bG)([te.A], () => {
                let { enabled: e } = te.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e9.A.update({ enabled: e });
        },
    });
var nh = n(77729),
    nS = n(589051),
    nT = n(588857),
    np = n(999834);
let nx = [],
    nf = (0, d.Hn)(c.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => R.intl.string(R.t.VCDSLW),
        useSearchTerms: () => [R.intl.string(R.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, np.b_)(),
                t = (0, nS.Mn)("StreamerModeSettings");
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
            return (0, h.bG)([te.A], () => te.A.getSettings().disabledOverlayWidgets ?? nx);
        },
        setValue: (e) => e9.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nI = (0, d.zD)(c.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => R.intl.string(R.t.LSBUGR),
        useValue: () =>
            (0, h.bG)([te.A], () => {
                let { hidePersonalInformation: e } = te.A.getSettings();
                return e;
            }),
        setValue: (e) => e9.A.update({ hidePersonalInformation: e }),
    }),
    n_ = (0, d.zD)(c.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => R.intl.string(R.t.uWBOri),
        useValue: () =>
            (0, h.bG)([te.A], () => {
                let { hideInstantInvites: e } = te.A.getSettings();
                return e;
            }),
        setValue: (e) => e9.A.update({ hideInstantInvites: e }),
    }),
    nN = (0, d.zD)(c.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => R.intl.string(R.t.OrqYDP),
        useValue: () =>
            (0, h.bG)([te.A], () => {
                let { disableSounds: e } = te.A.getSettings();
                return e;
            }),
        setValue: (e) => e9.A.update({ disableSounds: e }),
    }),
    nC = (0, d.zD)(c.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.sUAbLd),
        useValue: () =>
            (0, h.bG)([te.A], () => {
                let { disableNotifications: e } = te.A.getSettings();
                return e;
            }),
        setValue: (e) => e9.A.update({ disableNotifications: e }),
    }),
    nb = (0, d.zD)(c.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => R.intl.string(R.t["iA81+a"]),
        useSubtitle: () => R.intl.string(R.t.P4vj0h),
        useValue: () =>
            (0, h.bG)([te.A], () => {
                let { enableContentProtection: e } = te.A.getSettings();
                return e;
            }),
        setValue: (e) => e9.A.update({ enableContentProtection: e }),
        usePredicate: () => nh.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    ny = (0, d.FW)(c.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.xYhOEh),
        buildLayout: () => [nI, n_, nN, nC, nb, nf],
    }),
    nv = (0, d.zZ)(c.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.S5GfOW),
        buildLayout: () => [nE, nA, ny],
    });
var nj = n(147248),
    nO = n(141343),
    nL = n(665267),
    nR = n(414133),
    nD = n(98908);
let nP = (0, d.Hn)(c.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => R.intl.string(R.t.Q7mm4g),
        useSearchTerms: () => [R.intl.string(nD.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: R.intl.string(R.t["hrS/Pc"]), value: eB.tI.GUILD },
            { id: "personal", label: R.intl.string(R.t.mlvXIq), value: eB.tI.PERSONAL },
        ],
        useValue: () => L.zY.useSetting(),
        setValue: L.zY.updateSetting,
        usePredicate: () => (0, nR.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nG = (0, d.zD)(c.X.SYNC_PROFILE_THEMES, {
        useTitle: () => R.intl.string(R.t.C00w4l),
        useValue: () => (0, h.bG)([N.Ay], () => N.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, el.M1)(),
    });
var nU = n(284016),
    nM = n(363195);
let nV = (0, d.zD)(c.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => R.intl.string(R.t["/B+kEV"]),
    useSearchTerms: () => [R.intl.string(R.t.Ksh3ik)],
    useValue: function () {
        return (0, h.bG)([nU.A], () => !1 !== nU.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, h.bG)([nM.A], () => nM.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nM.A.theme,
            i = nj.A.gradientPreset?.id ?? null,
            l = L.eh.getSetting()?.customUserThemeSettings != null;
        ((t = S.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            e5.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            ni.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nk = n(393284);
let nw = (0, d.AK)(c.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.nhVQDJ),
        useSearchTerms: () => [R.intl.string(R.t.nhVQDJ)],
        destinationKey: c.X.ACCESSIBILITY_PANEL,
    }),
    nF = (0, d.gN)(c.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nw] }),
    nB = (0, d.zZ)(c.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, h.bG)([N.Ay], () => N.Ay.useForcedColors)
                ? {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: (0, ep.D)()
                          ? R.intl.format(R.t.Jae48E, {
                                onClick: () => {
                                    (0, nl.openUserSettings)(c.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : R.intl.string(R.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, h.bG)([nj.A, N.Ay], () => N.Ay.useForcedColors || nj.A.isPreview),
                t = (0, nO.V)();
            return e || t
                ? null
                : {
                      type: m.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: m.UV.BUTTON,
                              text: R.intl.string(R.t["E+COuA"]),
                              onClick: nL.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nk.k, nV, nG, nP, nF],
    }),
    nz = (0, d.t_)(c.X.APPEARANCE_PANEL, {
        initialize: function () {
            e4.A.isFetching() ||
                (e5.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                e6.Bo.get({ url: S.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        e5.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        e5.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => R.intl.string(R.t["iHH+ky"]),
        buildLayout: () => [nB, tW, no, tD, ng, nv, ts],
    }),
    nX = [
        { badgeType: m.Xi.NEW, dismissibleContent: eu.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eu.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, A.jsx)(tn.JI, { text: R.intl.string(R.t.y2b7CA) });
            },
        },
    ],
    nY = (0, d.i4)(c.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["iHH+ky"]),
        icon: e2.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, e7.A)(),
                l =
                    ((e = L.D_.useSetting()),
                    (t = L.SI.useSetting()),
                    e
                        ? null
                        : (0, A.jsx)(e3.sL, {
                              id: "preview-markdown-toggle",
                              label: R.intl.string(R.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  (tt.default.track(S.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: S.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      L.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                s =
                    ((n = (0, h.bG)([te.A], () => te.A.enabled, [])),
                    (0, A.jsx)(e3.sL, {
                        id: "streamer-mode-toggle",
                        label: R.intl.string(R.t.p9ZAJZ),
                        action: () => {
                            e9.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return E.useMemo(() => {
                let e = [...i];
                return (
                    null != l &&
                        e.push((0, A.jsx)(e3.rX, { label: R.intl.string(R.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, A.jsx)(e3.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [i, l, s]);
        },
        getDismissibleBadges: () =>
            (0, e8.ad)().isFreemium
                ? nX.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eu.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : nX,
        buildLayout: () => [nz],
    });
var nH = n(37646),
    nK = n(434404);
let nW = (0, d.t_)(c.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => R.intl.string(R.t.KyFVyi),
        buildLayout: () => [nK.F],
    }),
    nZ = (0, d.i4)(c.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: nH.U,
        useTitle: () => R.intl.string(R.t.KyFVyi),
        buildLayout: () => [nW],
    });
var nq = n(3137),
    nQ = n(661531),
    nJ = n(314116),
    n$ = n(270003),
    n0 = n(939249),
    n1 = n(369606),
    n2 = n(320448),
    n3 = n(604121),
    n6 = n(725951),
    n5 = n(400492),
    n4 = n(669067),
    n8 = n(115063),
    n7 = n(754692),
    n9 = n(927018),
    ie = n(512599),
    it = n(532197),
    ii = n(403362),
    il = n(874486),
    is = n(503698),
    ir = n.n(is),
    ia = n(536637),
    io = n.n(ia),
    iu = n(58703),
    id = n(906688),
    ic = n(98705);
function ig(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, n9.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = io()(n),
        m = null != o && l,
        E = m ? n0.D : "div";
    return (0, A.jsxs)(E, {
        className: ir()(ic.kL, m && ic.b),
        onClick: function () {
            m && o();
        },
        children: [
            (0, A.jsx)("div", {
                className: ic.zc,
                children: (0, A.jsx)(id.A, { achievementId: t, size: id.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, A.jsxs)("div", {
                className: ic.VW,
                children: [
                    null != n &&
                        (0, A.jsx)(H.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ic.YR,
                            children: (0, iu.mk)(g),
                        }),
                    (0, A.jsx)(H.E, { variant: "text-md/medium", color: d, children: s() }),
                    (0, A.jsx)(H.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var im = n(545744);
function iA(e) {
    let { onBackClick: t } = e,
        n = (0, h.bG)([il.A], () => il.A.getAllUnlockedAchievements()),
        i = E.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = E.useMemo(
            () =>
                Object.values(n9.l0)
                    .filter(ii.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)(n0.D, {
                onClick: t,
                className: im.vv,
                children: [
                    (0, A.jsx)(it.A, { direction: it.A.Directions.LEFT, className: im.Kk }),
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: R.intl.string(R.t["13/7kX"]),
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: im.N1,
                children: [
                    (0, A.jsxs)("div", {
                        className: im.if,
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
                        className: im.nr,
                        children: (0, A.jsx)(n1.TrophyIcon, {
                            size: "custom",
                            color: nQ.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, A.jsx)("div", {
                    className: im.yF,
                    children: (0, A.jsx)("div", {
                        className: im.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, A.jsx)(ig, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, A.jsxs)("div", {
                    className: im.yF,
                    children: [
                        (0, A.jsx)("div", {
                            className: im.if,
                            children: (0, A.jsx)(H.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: R.intl.string(R.t.GFyMg1),
                            }),
                        }),
                        (0, A.jsx)("div", {
                            className: im.Eh,
                            children: l.map((e) => (0, A.jsx)(ig, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, A.jsx)("div", { className: im.yF, children: (0, A.jsx)("div", { className: im.F3 }) }),
        ],
    });
}
var iE = n(224964),
    ih = n(31408),
    iS = n(368588);
let iT = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    ip = (0, F.range)(0, 11),
    ix = (0, F.range)(0, 2.25, 0.25),
    iI = (0, F.range)(1, 11),
    i_ = (0, F.range)(1, 26),
    iN = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iC(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, A.jsx)(
                tJ.d,
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
    return (0, A.jsx)(n$.n, { label: R.intl.string(R.t.bWVN1D), children: s });
}
function ib(e) {
    let { children: t } = e;
    return (0, A.jsx)(H.E, { className: iS.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function iy(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        l = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion);
    return (0, A.jsx)(tJ.d, {
        label: R.intl.string(R.t.vuiXm9),
        description: R.intl.string(R.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, n7._)(n9.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, nJ.A)({
                          title: l ? R.intl.string(R.t["FxT+p0"]) : R.intl.string(R.t.TAZ4F9),
                          subtitle: l ? R.intl.string(R.t.gmixrx) : R.intl.string(R.t.jN3t3K),
                          confirmText: R.intl.string(R.t.JFfins),
                          onConfirm: () => i(l ? iT : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iv(e) {
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
    return (0, A.jsxs)(n$.n, {
        label: R.intl.string(R.t.mqxwJO),
        children: [
            (0, A.jsx)(tJ.d, {
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
                        className: iS.KF,
                        children: R.intl.string(R.t.vd0D81),
                    }),
                    (0, A.jsx)(ib, { children: R.intl.string(R.t.a18Sug) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: iI,
                        stickToMarkers: !0,
                        minValue: iI[0],
                        maxValue: iI[iI.length - 1],
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
                        className: iS.KF,
                        children: R.intl.string(R.t.sPO3ij),
                    }),
                    (0, A.jsx)(ib, { children: R.intl.string(R.t.xoldVn) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: i_,
                        stickToMarkers: !0,
                        minValue: i_[0],
                        maxValue: i_[i_.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, A.jsx)(iC, {
                disabled: a,
                locations: [
                    {
                        location: ih.k.CHAT_INPUT,
                        title: R.intl.string(R.t.elTtyz),
                        description: R.intl.string(R.t.HtKfMi),
                    },
                    {
                        location: ih.k.REACTION,
                        title: R.intl.string(R.t.Ik4VIa),
                        description: R.intl.string(R.t.y4rqK0),
                    },
                    {
                        location: ih.k.MEMBER_USER,
                        title: R.intl.string(R.t.ZXBlAn),
                        description: R.intl.string(R.t["m9RD+c"]),
                    },
                    {
                        location: ih.k.CALL_TILE,
                        title: R.intl.string(R.t.V66giQ),
                        description: R.intl.string(R.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function ij(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        r = !t || !n;
    return (0, A.jsxs)(n$.n, {
        label: R.intl.string(R.t.Xz0ole),
        children: [
            (0, A.jsx)(tJ.d, {
                label: R.intl.string(R.t.o3iV7B),
                description: R.intl.string(R.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, A.jsx)(tJ.d, {
                label: R.intl.string(R.t["Ax+IoW"]),
                description: R.intl.string(R.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: iS.KF,
                        children: R.intl.string(R.t.L0oQuh),
                    }),
                    (0, A.jsx)(ib, { children: R.intl.string(R.t["/OOFpL"]) }),
                    (0, A.jsx)(Y.A, {
                        disabled: r,
                        markers: ip,
                        stickToMarkers: !0,
                        minValue: ip[0],
                        maxValue: ip[ip.length - 1],
                        initialValue: l,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iO(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        r = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, A.jsxs)(n$.n, {
        label: R.intl.string(R.t.wVS5Sd),
        children: [
            (0, A.jsx)(tJ.d, {
                label: R.intl.string(R.t.N004zO),
                description: r ? R.intl.string(R.t.GckHGw) : R.intl.string(R.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: iS.KF,
                        children: R.intl.string(R.t.UxnnC4),
                    }),
                    (0, A.jsx)(ib, { children: R.intl.string(R.t.CEOEOb) }),
                    (0, A.jsx)(Y.A, {
                        disabled: a,
                        markers: ix,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: ix[0],
                        maxValue: ix[ix.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, n7._)(n9.sn.MORE),
                                s(t, 1));
                        },
                        onMarkerRender: (e) => (e === ix[ix.length - 1] ? R.intl.string(R.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, A.jsx)(iC, {
                disabled: a,
                locations: [
                    {
                        location: ih.uD.CHAT_INPUT,
                        title: R.intl.string(R.t.vUcvPP),
                        description: R.intl.string(R.t.y00OrF),
                    },
                    {
                        location: ih.uD.VOICE_USER,
                        title: R.intl.string(R.t.TcRO54),
                        description: R.intl.string(R.t.YJCxVY),
                    },
                    {
                        location: ih.uD.MENTION,
                        title: R.intl.string(R.t.oW4shO),
                        description: R.intl.string(R.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function iL(e) {
    let { updateSettings: t } = e;
    return (0, A.jsx)(n$.n, {
        label: R.intl.string(R.t.EuXv2q),
        children: (0, A.jsxs)(X.B, {
            gap: 16,
            children: [
                (0, A.jsx)("div", { children: R.intl.string(R.t["1SLnki"]) }),
                (0, A.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: iS.hw,
                    children: (0, A.jsx)(_.$, {
                        variant: "primary",
                        size: "sm",
                        text: R.intl.string(R.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tM.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iR(e) {
    let { onChangePage: t } = e;
    return (0, A.jsxs)(n0.D, {
        onClick: function () {
            return t(1);
        },
        className: iS.Tq,
        children: [
            (0, A.jsx)("div", {
                className: iS.w1,
                children: (0, A.jsx)(n1.TrophyIcon, { size: "md", color: nQ.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, A.jsxs)("div", {
                className: iS.qL,
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
            (0, A.jsx)(n2._, { size: "custom", color: "currentColor", width: 16, className: iS.nT }),
        ],
    });
}
function iD() {
    return n
        .e("504660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iP(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, h.cf)([nq.A], () => nq.A.getState()),
        [l, s] = E.useState({ x: 0, y: 0 }),
        r = (0, iE.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, n5.Ak)("poggermode_enabled"),
                (0, n8.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, ie.O9)(e),
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
        1 === t && E && (0, n8.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        s({ x: e.clientX, y: e.clientY });
    }
    return (
        E.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, A.jsxs)(X.B, {
            gap: 24,
            children: [
                (0, A.jsx)(iy, { settings: i, updateSettings: a }),
                (0, A.jsx)(iR, { onChangePage: t }),
                (0, A.jsx)(ij, { settings: i, updateSettings: a }),
                (0, A.jsx)(iO, { settings: i, updateSettings: a }),
                (0, A.jsx)(iv, { settings: i, updateSettings: a }),
                (0, A.jsx)(iL, { updateSettings: a }),
            ],
        })
    );
}
function iG(e) {
    return 0 === e ? n6.f.LEFT : n6.f.RIGHT;
}
let iU = (0, d.E2)(c.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = E.useState(0),
                [n, i] = E.useState(iG(e)),
                [l, s] = E.useState(!1),
                r = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
                a = l && !r;
            return (
                E.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iG(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                E.useEffect(() => {
                    (0, n4._)(iN[e]);
                }, [e]),
                E.useEffect(() => {
                    Math.random() > 0.99 && (0, n7._)(n9.sn.VISITOR_100);
                }, []),
                (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(n6.A, {
                            className: iS.l3,
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
                                        return (0, A.jsx)(iP, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, A.jsx)(iA, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, A.jsx)("div", {
                            className: a ? iS.Sr : iS.IP,
                            children: (0, A.jsx)(n3.a, {
                                className: iS.gT,
                                importData: iD,
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
            R.intl.string(R.t.AtCukI),
            R.intl.string(R.t.mqxwJO),
            R.intl.string(R.t.wVS5Sd),
            R.intl.string(R.t.Xz0ole),
            R.intl.string(R.t["Ax+IoW"]),
            R.intl.string(R.t["6jI0hd"]),
            R.intl.string(R.t.s0KCgF),
        ],
    }),
    iM = (0, d.zZ)(c.X.POGGERMODE_CATEGORY, { buildLayout: () => [iU] });
var iV = n(212043);
let ik = (0, d.t_)(c.X.POGGERMODE_PANEL, { useTitle: () => R.intl.string(R.t.AtCukI), buildLayout: () => [iM] }),
    iw = (0, d.i4)(c.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AtCukI),
        icon: () => (0, A.jsx)("img", { alt: "", src: n(724405), className: iV.$ }),
        usePredicate: () => (0, h.bG)([nq.A], () => nq.A.settingsVisible),
        buildLayout: () => [ik],
    });
var iF = n(307301),
    iB = n(410767),
    iz = n(683071),
    iX = n(97260),
    iY = n(695366),
    iH = n(812729),
    iK = n.n(iH),
    iW = n(587895),
    iZ = n(429913),
    iq = n(616356),
    iQ = n(952818);
function iJ(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function i$() {
    let e = (0, h.bG)([iq.A], () => iq.A.getStreamerActiveStreamMetadata()),
        t = (0, h.bG)(
            [iQ.Ay],
            () => {
                let e = iQ.Ay.getVisibleGame();
                return null != e ? iQ.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            iK(),
        ),
        [n] = (0, iZ.A)([iJ(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i0 = n(769015),
    i1 = n(544576),
    i2 = n(935671),
    i3 = n(435075);
function i6(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, A.jsx)("div", {
              className: i3.zc,
              children: (0, A.jsx)(iY.E, { size: "sm", color: nQ.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, A.jsxs)("div", {
              className: i3.nt,
              children: [
                  (0, A.jsx)(i0.A, { game: n, pid: t.pid, size: i0.M.MEDIUM }),
                  (0, A.jsx)("div", {
                      className: i3.Am,
                      children: (0, A.jsx)(iY.E, { size: "sm", color: nQ.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function i5(e) {
    let t = (0, h.bG)([i1.Ay], () => i1.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = i$();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, i2.NP)(),
        s = l && null != n && t === S.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function i4(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = i5(n);
    return i
        ? (0, A.jsxs)("div", {
              className: ir()(i3.kL, t),
              children: [
                  (0, A.jsx)(i6, { game: l, application: s }),
                  (0, A.jsxs)("div", {
                      className: i3.FS,
                      children: [
                          (0, A.jsx)(H.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? R.intl.string(R.t.vxfv7v)
                                      : null != l
                                        ? R.intl.string(R.t.fAYU2G)
                                        : R.intl.string(R.t["9V4X/c"]),
                          }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: R.intl.format(R.t["/y6htt"], {
                                  helpCenterLink: ex.A.getArticleURL(S.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      text: R.intl.string(R.t["1iI46O"]),
                      onClick: function () {
                          (0, i2.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var i8 = n(404778),
    i7 = n(691885),
    i9 = n(408278),
    le = n(241326),
    lt = n(866665),
    ln = n(140735),
    li = n(489718),
    ll = n(635242),
    ls = n(350535),
    lr = n(189213),
    la = n(192308),
    lo = n(95477),
    lu = n(320989),
    ld = n(978263);
let lc = [];
var lg = n(235986),
    lm = n(484734),
    lA = n(734057),
    lE = n(808728),
    lh = n(71393),
    lS = n(967198),
    lT = n(926140),
    lp = n(847893);
function lx() {}
let lf = [lT.rD.VOICE_CHANNEL];
function lI(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function l_() {
    return (0, A.jsx)("div", {
        className: lp.i1,
        children: (0, A.jsx)(H.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lp.GN,
            children: R.intl.string(R.t.zHjCd1),
        }),
    });
}
function lN(e) {
    let { keybind: t, className: n } = e,
        i = E.useRef(t);
    E.useEffect(() => {
        i.current = t;
    });
    let [l, s] = E.useState(t.params?.channelId ?? void 0),
        r = E.useCallback(() => {
            (0, la.openModalLazy)(
                async () => (e) =>
                    (0, A.jsx)(lC, {
                        ...e,
                        onSelect: (e) => {
                            (s(e), iX.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, A.jsx)("div", {
        className: ir()(lp.a8, n),
        children: (0, A.jsx)(tQ.D, {
            label: R.intl.string(R.t.q4JpM8),
            children: (0, A.jsxs)(lg.A, {
                align: lg.A.Align.STRETCH,
                children: [
                    (0, A.jsx)("div", { className: lp.$X, children: (0, A.jsx)(lb, { channelId: l }) }),
                    (0, A.jsx)(lg.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lC(e) {
    let t,
        n,
        { transitionState: i, onClose: l, onSelect: s } = e,
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
                    autocompleterBeforeCreateSearchContext: l,
                } = e,
                [s, r] = E.useState(""),
                [a, o] = E.useState(lc),
                u = E.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lc) : o(e);
                }, []);
            E.useEffect(
                () =>
                    lu.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = E.useState(() => new ld.A(u, n, void 0, i));
            return (
                E.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: E.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lf, autocompleterBeforeCreateSearchContext: lI }),
        c =
            ((t = "" !== o),
            (n = (0, h.yK)(
                [lE.Ay, lA.A, lS.A],
                () => {
                    let e = lS.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of lE.Ay.getVocalChannelIds(e)) {
                        let e = lA.A.getChannel(t);
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
        T = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === lT.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === lT.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? lA.A.getChannel(n.parent_id) : void 0,
                              r = lh.A.getGuild(n.guild_id);
                          return (0, A.jsx)(
                              lm.c3,
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
                                      null != r ? (0, A.jsx)("div", { className: lp.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, A.jsx)(l_, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, A.jsx)(lr.Modal, {
        transitionState: i,
        onClose: l,
        title: R.intl.string(R.t.Dm8O4e),
        subtitle: R.intl.string(R.t.q4JpM8),
        actions: void 0,
        input: (0, A.jsx)(lo.k, {
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
                                if (e?.type === lT.rD.VOICE_CHANNEL) return e.record;
                            })();
                            (null == e ? s(void 0) : s(e.id), l());
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
            "aria-activedescendant": S > 0 && null != T ? T : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: p,
    });
}
function lb(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, h.cf)([lA.A, lh.A], () => {
            let e = null != t ? lA.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lA.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? lh.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, A.jsx)(H.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lp.GN,
              children: R.intl.string(R.t["/fYIK7"]),
          })
        : (0, A.jsx)(lm.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lx,
              onFocus: lx,
              onMouseEnter: lx,
              focused: !1,
              children: null != l ? (0, A.jsx)("div", { className: lp.J5, children: l.name }) : null,
          });
}
var ly = n(650583),
    lv = n(94451);
function lj(e) {
    let { keybind: t } = e,
        n = ls.dI(t.shortcut);
    return eq.A.hasBind(n)
        ? (0, A.jsx)("div", {
              className: lv.$e,
              children: (0, A.jsx)(iz.w, { type: "warning", children: R.intl.string(R.t["7lQlw3"]) }),
          })
        : ly.Yy.has(n)
          ? (0, A.jsx)("div", {
                className: lv.$e,
                children: (0, A.jsx)(iz.w, {
                    type: "warning",
                    children: R.intl.format(R.t.MOIaNd, {
                        keyboardNavArticle: ex.A.getArticleURL(S.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function lO(e) {
    let { keybind: t } = e;
    return t.action === S.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, A.jsx)(lN, { keybind: t, className: lv._M }) : null;
}
let lL = E.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        l = E.useCallback((e) => iX.A.setKeybind({ ...t, action: e }), [t]),
        s = E.useCallback((e) => iX.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = E.useCallback(() => iX.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = E.useCallback(() => iX.A.deleteKeybind(t.id), [t.id]),
        o = E.useId(),
        u = E.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, A.jsxs)("div", {
        className: lv.f_,
        children: [
            (0, A.jsx)(lj, { keybind: t }),
            (0, A.jsx)("div", {
                className: lv.XI,
                children: (0, A.jsx)(i7.l, {
                    selectionMode: "single",
                    label: R.intl.string(R.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, A.jsx)("div", {
                className: lv.LE,
                children: (0, A.jsx)(tQ.D, {
                    label: R.intl.string(R.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, A.jsx)(ll.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, A.jsxs)("div", {
                className: lv.ne,
                children: [
                    !t.managed &&
                        (0, A.jsx)(i9.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: le.TrashIcon,
                            "aria-label": R.intl.string(R.t.qEHmmB),
                        }),
                    (0, A.jsx)(lt.m, {
                        text: R.intl.string(t.enabled ? R.t.pNYGbx : R.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(ln.A, {
                                    id: o,
                                    children: R.intl.format(t.enabled ? R.t["myr/Y0"] : R.t.lYhtPO, { actionName: u }),
                                }),
                                (0, A.jsx)(li.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, A.jsx)(H.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: lv.h_,
                children: n[t.action],
            }),
            (0, A.jsx)(lO, { keybind: t }),
        ],
    });
});
var lR = n(367385),
    lD = n(734066),
    lP = n(880144),
    lG = n(614455),
    lU = n(532624),
    lM = n(731854),
    lV = n(603933);
let lk = function () {
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
            } = ((e = (0, h.bG)([lU.Ay], () => lU.Ay.getState())),
            (t = (0, h.bG)([i1.Ay], () => (0, lP.A)(i1.Ay))),
            (n = (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.VIDEO))),
            (i = (0, h.bG)([lG.A], () => lG.A.isSupported)),
            (l = (0, lD.sw)()),
            (s = (0, lD.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: l } = e;
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
                        .reject((e) => !l && (e.action === S.hCu.SOUNDBOARD || e.action === S.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: l,
                    enableScreenshotKeybind: s,
                    allowSoundboard: (r = (0, eQ.isWindows)()),
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
                            ((0, eQ.isWindows)() || i1.Ay.getUseSystemScreensharePicker()) &&
                            a.push({
                                id: "toggle-go-live-streaming",
                                value: S.hCu.TOGGLE_GO_LIVE_STREAMING,
                                label: R.intl.string(R.t.ybdjJD),
                            }),
                        (0, eQ.isDesktop)() &&
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
                            l &&
                                a.push(
                                    { id: "soundboard", value: S.hCu.SOUNDBOARD, label: R.intl.string(R.t.yPH4xm) },
                                    {
                                        id: "soundboard-hold",
                                        value: S.hCu.SOUNDBOARD_HOLD,
                                        label: R.intl.string(R.t["1xFbP/"]),
                                    },
                                ),
                            s &&
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
                        n && (0, eQ.isWindows)() && (r[S.hCu.TOGGLE_GO_LIVE_STREAMING] = R.intl.string(R.t.s4C238)),
                        (0, eQ.isDesktop)() &&
                            ((r[S.hCu.NAVIGATE_BACK] = R.intl.string(R.t.nKDlEt)),
                            (r[S.hCu.NAVIGATE_FORWARD] = R.intl.string(R.t.DK0FFk)),
                            (r[S.hCu.SOUNDBOARD] = (0, eQ.isWindows)()
                                ? R.intl.string(R.t["5wJefL"])
                                : R.intl.string(R.t.gzjsSP)),
                            (r[S.hCu.SOUNDBOARD_HOLD] = (0, eQ.isWindows)()
                                ? R.intl.string(R.t.RRkZc9)
                                : R.intl.string(R.t.laNlTl)),
                            l &&
                                ((r[S.hCu.SAVE_CLIP] = R.intl.string(R.t.z3Wbam)),
                                s && (r[S.hCu.SAVE_SCREENSHOT] = R.intl.string(R.t.m0zd57)))),
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
            ? (0, A.jsx)(H.E, { variant: "text-sm/normal", color: "text-subtle", children: R.intl.string(R.t.vyYgWp) })
            : (0, A.jsx)("div", {
                  className: lV.A,
                  children: a.map((e, t) =>
                      (0, A.jsxs)(
                          E.Fragment,
                          {
                              children: [
                                  (0, A.jsx)(lL, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                  t < a.length - 1 ? (0, A.jsx)(i8.c, { className: lV.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    lw = (0, d.E2)(c.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["069nVT"])],
        Component: function () {
            return nm.Av
                ? (0, A.jsx)(lk, {})
                : (0, A.jsx)(iz.w, {
                      type: "info",
                      children: R.intl.format(R.t.mPi3F3, { downloadLink: S.X7G.DOWNLOAD }),
                  });
        },
    });
var lF = n(475358),
    lB = n(28647),
    lz = n(793650);
function lX(e) {
    let { children: t } = e;
    return t([lR.Q_.MESSAGE, lR.Q_.NAVIGATION, lR.Q_.DND, lR.Q_.CHAT, lR.Q_.VOICE_AND_VIDEO, lR.Q_.MISCELLANEOUS]);
}
function lY(e) {
    let { showHeader: t = !0 } = e,
        n = B()((0, lR.Bx)())
            .filter((e) => e.description !== R.intl.string(R.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, A.jsxs)(X.B, {
        gap: 48,
        children: [
            (0, A.jsx)(n$.n, {
                label: t ? R.intl.string(R.t.Lz5KHI) : void 0,
                children: (0, A.jsx)("div", {
                    className: lz.jh,
                    children: (0, A.jsxs)("div", {
                        className: lz.yZ,
                        children: [
                            (0, A.jsx)(H.E, { variant: "text-md/normal", children: R.intl.string(R.t.sMWLBj) }),
                            (0, A.jsx)("div", {
                                className: lz.DM,
                                children: (0, A.jsx)(lF.e, { shortcut: lB.z.binds["0"], className: lz.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, A.jsx)(lX, {
                children: (e) =>
                    (0, A.jsx)(A.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, lR.Gm)(e),
                                l = (0, lR.zF)(e),
                                s = n[e];
                            return (0, A.jsx)(
                                n$.n,
                                {
                                    label: i,
                                    description: l,
                                    children: (0, A.jsx)("div", {
                                        className: lz.jh,
                                        children: s.map((e, t) =>
                                            (0, A.jsxs)(
                                                E.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, A.jsx)(i8.c, {}),
                                                        (0, A.jsxs)("div", {
                                                            className: lz.yZ,
                                                            children: [
                                                                (0, A.jsx)(H.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, A.jsx)("div", {
                                                                    className: lz.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, A.jsx)(
                                                                            lF.e,
                                                                            { shortcut: e, className: lz.LE },
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
let lH = (0, d.E2)(c.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.Lz5KHI)],
    Component: () => (0, A.jsx)(lY, { showHeader: !1 }),
});
var lK = n(19575),
    lW = n(546385);
let lZ = (0, d.E2)(c.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nm.Av && !(0, nm.cX)(),
    useSearchTerms: () => [R.intl.string(R.t["/HIxyY"]), R.intl.string(R.t.B0hqpb)],
    Component: function () {
        let [e] = E.useState(() => lK.Ay.getEnableHardwareAcceleration()),
            t = R.intl.string(R.t["/HIxyY"]),
            n = R.intl.string(R.t.B0hqpb);
        return (0, A.jsxs)(X.B, {
            children: [
                (0, A.jsx)(tJ.d, { label: t, description: n, checked: e, onChange: lq }),
                !e && (0, A.jsx)(lW.A, { look: lW.k.WARNING, children: R.intl.string(R.t.j7S6IX) }),
            ],
        });
    },
});
function lq(e) {
    let t = e ? R.intl.format(R.t.LYXRxL, {}) : R.intl.format(R.t.uDP3Kz, {});
    (0, nJ.A)({
        title: R.intl.string(R.t.aqpAvn),
        subtitle: t,
        confirmText: R.intl.string(R.t.vT7ckk),
        onConfirm: () => {
            lK.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let lQ = (0, eT.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function lJ() {
    let e = await lK.Ay.getOpenOnStart(),
        t = await lK.Ay.getSetting("START_MINIMIZED", !1),
        n = await lK.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    lQ.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let l$ = (0, d.zD)(c.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => R.intl.string(R.t["3BeZti"]),
        usePredicate: () => nm.Av && !(0, nm.cX)(),
        useValue: () => lQ.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (lQ.setState({ openOnStartup: e }), lK.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            lK.Ay.getOpenOnStart().then((e) => lQ.setState({ openOnStartup: e }));
        },
    }),
    l0 = (0, d.zD)(c.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => R.intl.string(R.t.dJ5MUh),
        useSubtitle: () => R.intl.string(R.t.nQavHr),
        usePredicate: () => nm.Av && !(0, nm.cX)(),
        useValue: () => lQ.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (lQ.setState({ minimizeToTray: e }), lK.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            lK.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => lQ.setState({ minimizeToTray: e }));
        },
    }),
    l1 = (0, d.zD)(c.X.OS_START_MINIMIZED, {
        useTitle: () => R.intl.string(R.t.GfBL83),
        useSubtitle: () => R.intl.string(R.t.XGyhhc),
        usePredicate: () => (0, nm.uF)(),
        useValue: () => lQ.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (lQ.setState({ startMinimized: e }), lK.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !lQ.useState((e) => e.openOnStartup),
        initialize: () => {
            lK.Ay.getSetting("START_MINIMIZED", !1).then((e) => lQ.setState({ startMinimized: e }));
        },
    });
var l2 = n(61628);
let l3 = new Set(["failure", "unknown"]),
    l6 = (0, d.E2)(c.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [R.intl.string(R.t.roHq80)],
        Component: function () {
            let [e, t] = E.useState(!1),
                [n, i] = E.useState(() => (0, i2.TC)()),
                l = (0, h.bG)([iQ.Ay], () => iQ.Ay.getSystemServiceStatus("input-service")),
                s = E.useCallback(async () => {
                    (t(!0),
                        n ? await (0, i2.z8)("windows-settings") : await (0, i2.sL)("windows-settings"),
                        t(!1),
                        i((0, i2.TC)()));
                }, [n]);
            return (0, A.jsxs)("div", {
                className: l2.q,
                children: [
                    (0, A.jsxs)("div", {
                        className: l2.L,
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
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : l3.has(l.state)
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
                                                                (0, ii.xb)(e.state);
                                                        }
                                                    })(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: R.intl.format(R.t["8CAL+D"], {
                                    helpCenterLink: ex.A.getArticleURL(S.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(_.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: s,
                        text: n ? R.intl.string(R.t.pAwbdL) : R.intl.string(R.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: i2.XQ,
    });
var l5 = n(687813),
    l4 = n(562708),
    l8 = n(691540),
    l7 = n(97483);
async function l9() {
    try {
        await se();
    } catch {
        (0, l8.P0)({ id: "performance-trace-failed", type: l7.Ck.FAILURE, message: R.intl.string(R.t["8ihs9i"]) });
    }
}
async function se() {
    var e;
    let t = nh.A.tracing;
    if (null == t) return;
    (0, l8.P0)({ id: "performance-trace-capturing", type: l7.Ck.MESSAGE, message: R.intl.string(R.t.qGRW8d) });
    let [n, i, l] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nh.A.processUtils.getSystemInfo(),
            nh.A.processUtils.getSystemMetrics(),
        ]),
        s = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, l4.getSuperProperties)(),
            native_build_number: nh.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: l,
            cumulativeCpuUsage: nh.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nh.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, l5._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, l5._u)(JSON.stringify(s, null, 2)),
        }),
        new Promise((t, n) => {
            (0, l5.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    (nh.A.fileManager.showItemInFolder(u),
        (0, l8.P0)({ id: "performance-trace-saved", type: l7.Ck.SUCCESS, message: R.intl.string(R.t.gpCRFS) }));
}
let st = (0, d.Tf)(c.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => R.intl.string(R.t.o6Qr6n),
    useSubtitle: () => R.intl.string(R.t.OuGtH8),
    useLabel: () => R.intl.string(R.t.bm1WjO),
    usePredicate: () => nm.Av && nh.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, nJ.A)({
            title: R.intl.string(R.t.o6Qr6n),
            subtitle: R.intl.string(R.t.JEHHJ1),
            confirmText: R.intl.string(R.t.bm1WjO),
            onConfirm: () => {
                ((0, tM.default)(), l9());
            },
        });
    },
});
function sn() {
    e5.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var si = n(287809);
let sl = (0, d.Tf)(c.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, h.bG)([si.default], () => si.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        sn();
    },
});
var ss = n(114129),
    sr = n(442325),
    sa = n(858760);
let so = (0, d.zD)(c.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        usePredicate: () => sa.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nm.xl)(),
        useValue: () => (0, h.bG)([sr.A], () => sr.A.isUserOptedIn()),
        setValue: ss.lj,
    }),
    su = (0, d.zZ)(c.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["8/udY0"]),
        buildLayout: () => [sl, st, so],
    }),
    sd = (0, d.zZ)(c.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t.cg6ltt),
        buildLayout: () => [l$, l1, l0, lZ],
        usePredicate: () => nm.Av && ((0, nm.uF)() || (0, nm.j9)()),
        initialize: () => {
            lJ();
        },
    }),
    sc = (0, d.zZ)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["069nVT"]),
        useSubtitle: () => R.intl.string(R.t.T4LZVL),
        buildLayout: () => [lw],
        initialize: () => (iX.A.enableAll(!1), () => iX.A.enableAll(!0)),
        useInlineNotice: function () {
            return nm.Av
                ? {
                      type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, A.jsxs)(X.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, A.jsx)(iz.w, { type: "info", children: R.intl.string(R.t["5pkmHa"]) }),
                                  (0, A.jsx)(i4, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nm.Av
                ? {
                      type: m.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: m.UV.BUTTON,
                              text: R.intl.string(R.t.zk6Xbs),
                              variant: "secondary",
                              icon: iF.j,
                              onClick: () => iX.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    sg = (0, d.zZ)(c.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Lz5KHI),
        buildLayout: () => [lH],
    }),
    sm = (0, d.zZ)(c.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+XZgmA"]),
        usePredicate: () => nm.Av && ((0, nm.uF)() || (0, nm.j9)()),
        buildLayout: () => [l6],
    }),
    sA = (0, d.t_)(c.X.SYSTEM_PANEL, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        buildLayout: () => [sd, sc, sg, sm, su],
    }),
    sE = (0, d.i4)(c.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["VJ/qKo"]),
        icon: iB.F,
        buildLayout: () => [sA],
    });
var sh = n(831544),
    sS = n(922795),
    sT = n(212245),
    sp = n(329551),
    sx = n(285918),
    sf = n(712711),
    sI = n(952572),
    s_ = n(382003);
let sN = (0, d.E2)(c.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.lZTUPs)],
        usePredicate: sI.A,
        Component: function () {
            let e = (0, sT.p)(),
                t = E.useRef(!1),
                n = (0, h.bG)([i1.Ay], () => i1.Ay.getVideoDeviceId()),
                [i, l] = E.useState((0, sp.i)(si.default.getCurrentUser())),
                s = E.useRef(i);
            return (
                E.useEffect(
                    () => () => {
                        t.current && (0, sx._C)(s.current);
                    },
                    [],
                ),
                (0, A.jsx)(s_.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (s.current = n), l(n), (0, sf.gB)(n, { location: e.location }).catch(S.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    sC = (0, d.zD)(c.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => R.intl.string(R.t["3Ppr1h"]),
        useSubtitle: () => R.intl.string(R.t.WNbX4O),
        useValue: L.bm.useSetting,
        setValue: (e) => {
            (L.bm.updateSetting(e), tt.default.track(S.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var sb = n(625841),
    sy = n(74848),
    sv = n(204050);
let sj = (0, eT.D)(() => ({ previewEnabled: !1 })),
    sO = (0, d.E2)(c.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.FsQ3OR)],
        Component: function () {
            let e = (0, h.bG)([i1.Ay], () => i1.Ay.isVideoAvailable()),
                { id: t } = (0, sy.x5)(lM.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eP.Ay)();
            return (0, A.jsx)(sb.U, {
                label: R.intl.string(R.t.FsQ3OR),
                deviceType: lM.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, sv.p)()
                    ? R.intl.format(R.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (sj.setState({ previewEnabled: !1 }),
                                  window.open((0, sv.i)(t)),
                                  tt.default.track(S.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var sL = n(745317),
    sR = n(9219);
let sD = (0, d.E2)(c.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [R.intl.string(R.t.JIf4v7)],
        Component: function () {
            let e = i1.Ay.getCameraComponent(),
                t = (0, h.bG)([i1.Ay], () => i1.Ay.getVideoDeviceId()),
                n = sj.useField("previewEnabled"),
                i = (0, h.bG)([i1.Ay], () => i1.Ay.isVideoAvailable());
            return ((0, eS.l0)(() => {
                sj.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, A.jsx)("div", {
                      className: sR.T9,
                      children: (0, A.jsxs)("div", {
                          className: sR.Xi,
                          children: [
                              (0, A.jsxs)("div", {
                                  className: sR.UI,
                                  children: [
                                      (0, A.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, A.jsx)(sL.kE, {}),
                                  ],
                              }),
                              (0, A.jsx)(sL.eK, {}),
                          ],
                      }),
                  })
                : (0, A.jsx)("div", {
                      className: sR.T9,
                      children: (0, A.jsx)(lt.m, {
                          text: i ? null : R.intl.string(R.t["8jSzSe"]),
                          children: (0, A.jsx)(_.$, {
                              variant: "primary",
                              text: R.intl.string(R.t.JIf4v7),
                              onClick: () => sj.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    sP = (0, d.zZ)(c.X.CAMERA_CATEGORY, {
        useTitle: () => R.intl.string(R.t.uje3P9),
        usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.VIDEO)),
        buildLayout: () => [sD, sC, sO, sN],
    });
var sG = n(827343);
let sU = (0, d.zD)(c.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => R.intl.string(R.t.qFphsa),
        useSubtitle: () => R.intl.string(R.t.cQfwyY),
        usePredicate: function () {
            return (0, nm.j9)();
        },
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (sG.A.setOpenH264Enabled(e),
                (0, nJ.A)({
                    title: R.intl.string(R.t["9jf31O"]),
                    subtitle: R.intl.string(R.t["J2wg+X"]),
                    confirmText: R.intl.string(R.t.BddRzS),
                    onConfirm: () => nh.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    sM = (0, d.zD)(c.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => R.intl.string(R.t["r6K+TL"]),
        useSubtitle: () => R.intl.string(R.t["xl9+I6"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getAecDump());
        },
        setValue: sG.A.setAecDump,
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isAecDumpSupported());
        },
    });
var sV = n(139033),
    sk = n(862482),
    sw = n(640238),
    sF = n(825484),
    sB = n(144009),
    sz = n(487329),
    sX = n(353835);
let sY = (0, eT.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function sH() {
    let e = await nh.A.fileManager.getLogPath();
    nh.A.fileManager.showItemInFolder(e);
}
function sK(e) {
    (0, nJ.A)({
        title: R.intl.string(R.t["7UXEF2"]),
        subtitle: R.intl.string(R.t.IYPrRl),
        confirmText: R.intl.string(R.t.BddRzS),
        onConfirm: () => sG.A.setDebugLogging(e),
    });
}
async function sW(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await i1.Ay.getMediaEngine().writeAudioDebugState(),
            await sX.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, sB.a)(S.Umv.RTC),
            (e = R.intl.string(R.t["fKBB8+"])),
            (t = R.intl.string(R.t.BvyxE7)),
            (0, sV.A)({ title: e, subtitle: t }));
    } catch (s) {
        var i;
        let e, t, n, l;
        ((i = s.displayMessage),
            (e = R.intl.string(R.t.QZg0J7)),
            (t = i ?? R.intl.string(R.t.VzHcSm)),
            (n = (0, sz.B1)(sz.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = R.intl.formatToPlainString(R.t.ejOT95, { errorCode: n })),
            (0, la.openModal)((n) =>
                (0, A.jsx)(sw.a, {
                    header: e,
                    confirmButtonColor: sk.$n.Colors.BRAND,
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
async function sZ() {
    await sW({
        onUploadStart: () => sY.setState({ isUploading: !0 }),
        onUploadFinish: () => sY.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let sq = (0, d.E2)(c.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [R.intl.string(R.t["726JHL"]), R.intl.string(R.t.EbwFfR), R.intl.string(R.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.DEBUG_LOGGING));
        return nm.Av && e && null != nh.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.getDebugLogging()),
            t = sY.useField("isUploading"),
            n = sY.useField("isDisabled"),
            i = E.useId();
        return (0, A.jsxs)("fieldset", {
            children: [
                (0, A.jsx)(ln.A, { tag: "legend", id: i, children: R.intl.string(R.t["FjN+et"]) }),
                (0, A.jsxs)(X.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, A.jsx)(tJ.d, {
                            label: R.intl.string(R.t["726JHL"]),
                            description: R.intl.string(R.t["/7ak9Q"]),
                            checked: e,
                            onChange: sK,
                        }),
                        (0, A.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, A.jsxs)(sF.e, {
                                children: [
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.EbwFfR),
                                        onClick: sZ,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": R.intl.string(R.t.aY1OH2),
                                    }),
                                    (0, A.jsx)(_.$, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.nuPtYi),
                                        onClick: sH,
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
var sQ = n(233545),
    sJ = n(412780);
function s$() {
    return (0, h.bG)([si.default, i1.Ay], () => {
        let e = si.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === lK.Ay.releaseChannel || "development" === lK.Ay.releaseChannel,
            i = i1.Ay.supports(lM.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let s0 = (0, d.zD)(c.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.U4FgFK),
        useSubtitle: () => R.intl.string(R.t.Lm72RU),
        useValue: function () {
            return (0, h.bG)([sJ.Ay], () => sJ.Ay.shouldRecordNextConnection());
        },
        setValue: sQ.Et,
        usePredicate: s$,
    }),
    s1 = (0, d.Tf)(c.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.nJnOHO),
        useLabel: () => R.intl.string(R.t["3xjX0U"]),
        onClick: sQ.YW,
        usePredicate: s$,
    });
var s2 = n(926919),
    s3 = n(111162),
    s6 = n(855302);
let s5 = (0, d.zD)(c.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => R.intl.string(R.t["0CEP6e"]),
        useSubtitle: () => R.intl.string(R.t["kBXuW+"]),
        useValue: function () {
            return (0, h.bG)([s3.default], () => s3.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = s3.default.isStreamInfoOverlayEnabled;
            ((0, s6.A)("stream_info_overlay_enabled", e, t), (0, s2.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    s4 = (0, d.bd)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t["/B4I8H"]) : R.intl.string(R.t.BTlsWH)),
        useCollapsedSubtitle: () => R.intl.string(R.t.la1Ys4),
        buildLayout: () => [s5, sM, s0, s1, sq],
    });
function s8(e, t, n) {
    (0, nJ.A)({ title: e, subtitle: t, confirmText: R.intl.string(R.t.BddRzS), onConfirm: n });
}
let s7 = (0, d.Tf)(c.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => R.intl.string(R.t.SXfv1v),
        useSubtitle: () => R.intl.string(R.t["buA5/q"]),
        useLabel: () => R.intl.string(R.t.yBZMsQ),
        onClick: function () {
            s8(R.intl.string(R.t["4iKQ/3"]), R.intl.string(R.t.sQ42iT), sG.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    s9 = (0, d.zZ)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.UDAU9K),
        buildLayout: () => [sU, s4, s7],
    });
var re = n(736056),
    rt = n(360729),
    rn = n(446243),
    ri = n(558076),
    rl = n(270103);
let rs = (0, d.zD)(c.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => R.intl.string(rl.default.qYzpsI),
        useSubtitle: () => R.intl.string(rl.default["+vMoL1"]),
        useValue: () => (0, h.bG)([ri.A], () => ri.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rn.Ft)(e),
    }),
    rr = (0, d.zZ)(c.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => R.intl.string(rl.default.wRLmM0),
        usePredicate: function () {
            let e = (0, h.yK)([lh.A], () => lh.A.getGuildIds()),
                { loaded: t, override: n } = (0, h.cf)([re.A], () => ({
                    loaded: re.A.getLoadedGuildExperiment(rt.vJ),
                    override: re.A.getExperimentOverrideDescriptor(rt.vJ),
                }));
            return (0, E.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, rt.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rs],
    });
var ra = n(347481),
    ro = n(852712);
let ru = (0, d.zD)(c.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => R.intl.string(R.t.cUMdH0),
        useSubtitle: () => R.intl.string(R.t["6EjbvA"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            sG.A.setAutomaticGainControl(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, h.bG)([i1.Ay, ra.A], () => {
                let e = i1.Ay.getInputDeviceId();
                return ra.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isAutomaticGainControlSupported() && i1.Ay.isInputProfileCustom());
        },
    }),
    rd = (0, d.sN)(c.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => R.intl.string(R.t.AlybXj),
        setValue: (e) =>
            sG.A.setAttenuation(e, i1.Ay.getAttenuateWhileSpeakingSelf(), i1.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i1.Ay.getAttenuation(),
    }),
    rc = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => R.intl.string(R.t["9dHxRY"]),
        useValue: () => (0, h.bG)([i1.Ay], () => i1.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => sG.A.setAttenuation(i1.Ay.getAttenuation(), e, i1.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rg = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => R.intl.string(R.t.SMt0Gr),
        useValue: () => (0, h.bG)([i1.Ay], () => i1.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sG.A.setAttenuation(i1.Ay.getAttenuation(), i1.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rm = (0, d.FW)(c.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.oSdBvW),
        useSubtitle: () => R.intl.string(R.t["0A/8Rt"]),
        usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.ATTENUATION)),
        buildLayout: () => [rd, rc, rg],
    });
var rA = n(801644);
let rE = (0, d.zD)(c.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => R.intl.string(R.t.pZ0vr4),
        useSubtitle: () => R.intl.string(R.t.tVbzoZ),
        useValue: function () {
            return (0, h.bG)([eg.Ay], () => !eg.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            ((0, s6.A)("hardware_mute_silence_alert_enabled", e, !eg.Ay.disableHardwareMuteSilenceAlert),
                ni.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e }));
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = rA.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    rh = (0, d.zD)(c.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => R.intl.string(R.t.DFPXIG),
        useSubtitle: () => R.intl.string(R.t["UyRX+C"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            sG.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.showBypassSystemInputProcessing() && i1.Ay.isInputProfileCustom());
        },
    }),
    rS = (0, d.zD)(c.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => R.intl.string(R.t.jrWHD3),
        useSubtitle: () => R.intl.string(R.t.YCCMkJ),
        useValue: function () {
            return (0, h.bG)([eg.Ay], () => !eg.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, s6.A)("switch_channel_warning_enabled", e, !eg.Ay.disableVoiceChannelChangeAlert),
                ni.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rT = (0, d.zD)(c.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => R.intl.string(R.t.BbESsg),
        useSubtitle: () => R.intl.string(R.t.LoOB1F),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => {
                let { vadUseKrisp: e } = i1.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = i1.Ay.getMode();
            sG.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, h.bG)(
                [i1.Ay],
                () => i1.Ay.getMode() !== S.TBI.VOICE_ACTIVITY || !i1.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isAdvancedVoiceActivitySupported() && i1.Ay.isInputProfileCustom());
        },
    }),
    rp = (0, d.Hn)(c.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => R.intl.string(R.t.wVBHr0),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            s8(R.intl.string(R.t.uY7AcQ), R.intl.string(R.t.gBqik6), () => sG.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, h.cf)([i1.Ay], () => ({
                legacyAudioSubsystemSupported: i1.Ay.supports(lM.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i1.Ay.supports(lM.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i1.Ay.supports(lM.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return E.useMemo(() => {
                let i;
                return (
                    (i = [{ id: lM.rB.STANDARD, value: lM.rB.STANDARD, label: R.intl.string(R.t.dqb2JZ) }]),
                    e && i.push({ id: lM.rB.LEGACY, value: lM.rB.LEGACY, label: R.intl.string(R.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: lM.rB.EXPERIMENTAL, value: lM.rB.EXPERIMENTAL, label: R.intl.string(R.t.liQmtr) }),
                    n && i.push({ id: lM.rB.AUTOMATIC, value: lM.rB.AUTOMATIC, label: R.intl.string(R.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rx = (0, d.zD)(c.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => R.intl.string(R.t.uancuJ),
        useSubtitle: () => R.intl.string(R.t.I1Eoqq),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getQoS());
        },
        setValue: function (e) {
            sG.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.QOS));
        },
    }),
    rf = (0, d.zD)(c.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => R.intl.string(R.t["4rsOPQ"]),
        useSubtitle: () => R.intl.string(R.t.jtiiCw),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            sG.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eQ.isPlatformEmbedded;
        },
    }),
    rI = (0, d.bd)(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.KHsSWK) : R.intl.string(R.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tA(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [ru, rT, rh, rf, rE, rS, rm, rp, rx],
    }),
    r_ = (0, d.zD)(c.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => R.intl.string(R.t.iWTwu6),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            sG.A.setEchoCancellation(e, { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, h.bG)([i1.Ay, ra.A], () => {
                let e = i1.Ay.getInputDeviceId();
                return ra.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom());
        },
    });
var rN = n(459838),
    rC = n(451988),
    rb = n(475883),
    ry = n(9761);
let rv = (0, tw.Ld)();
function rj(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, A.jsx)("div", {
        role: "meter",
        className: ir()(rb.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? R.intl.string(R.t.haLKZ0) : R.intl.string(R.t.X2hJL7),
        children: (0, A.jsx)("div", { className: ir()(rb.Jx, rb.NU, { [rb.zY]: t && !r, [rb.r9]: r }) }),
    });
}
function rO(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, h.cf)([i1.Ay], () => ({
            threshold: i1.Ay.getModeOptions().threshold,
            autoThreshold: i1.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, h.bG)([i1.Ay], () => i1.Ay.getMode());
    return (0, A.jsx)("section", {
        className: ir()(rb.Mo, rb.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, A.jsx)(Y.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void sG.A.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: nQ.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: nQ.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rv,
            disabled: s,
            children: (0, A.jsxs)("div", {
                className: ir()(rb.NU, rb.TL, rb.Jx, ry.bar),
                children: [
                    (0, A.jsx)("div", { className: ir()(rb.GS, rb.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, A.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rL = (0, d.E2)(c.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [R.intl.string(R.t["sqUm+k"]), R.intl.string(R.t.I1Zuq0), R.intl.string(R.t.nuFtHH)],
    usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, h.cf)([i1.Ay], () => ({
                autoThreshold: i1.Ay.getModeOptions().autoThreshold,
                disabled: i1.Ay.getMode() !== lM.TB.VOICE_ACTIVITY,
            })),
            n = E.useCallback((e) => {
                let t = i1.Ay.getMode(),
                    { threshold: n } = i1.Ay.getModeOptions();
                sG.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, h.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = E.useState(-100),
                    [n, i] = E.useState(!1);
                function l(e, n) {
                    (t(e), i((n & lM.ME.VOICE) === lM.ME.VOICE));
                }
                return (
                    E.useEffect(() => {
                        let e = new rC.Ep();
                        return (
                            e.start(1e3, () => {
                                (i1.Ay.getMediaEngine().on(rN.bg.VoiceActivity, l), e.stop());
                            }),
                            () => {
                                (i1.Ay.getMediaEngine().removeListener(rN.bg.VoiceActivity, l), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, h.bG)([i1.Ay], () => i1.Ay.isEnabled()),
            a = E.useMemo(
                () =>
                    !r &&
                    (0, A.jsx)("div", {
                        className: rb.B4,
                        children: (0, A.jsx)(iz.w, {
                            type: "warning",
                            children: R.intl.format(R.t["O13I+O"], { onEnableClick: () => sG.A.enable(!0) }),
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
                      (0, A.jsx)(ln.A, { tag: "legend", id: u, children: R.intl.string(R.t.GByLar) }),
                      (0, A.jsx)(ln.A, { id: d, children: o }),
                      (0, A.jsxs)(X.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, A.jsx)(tJ.d, {
                                  disabled: t,
                                  label: R.intl.string(R.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, A.jsx)(rj, {
                                        isSpeaking: s,
                                        className: rb.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rO, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, A.jsxs)(X.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, A.jsx)(tQ.D, {
                          label: R.intl.string(R.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, A.jsx)(rj, {
                                        isSpeaking: s,
                                        className: rb.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rO, {
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
var rR = n(366010);
let rD = n(993830),
    rP = n(413142),
    rG = { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO };
function rU() {
    let e = (0, h.bG)([nM.A], () => (0, rR.q)(nM.A.theme));
    return (0, A.jsx)("img", { src: e ? rD : rP, width: 48, height: 32, alt: "" });
}
let rM = (0, d.E2)(c.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.t8Qhib), R.intl.string(R.t.hmfkCi)],
    usePredicate: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom() && i1.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = E.useCallback((e) => {
                (sG.A.setNoiseCancellation("KRISP" === e, rG), sG.A.setNoiseSuppression("STANDARD" === e, rG));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, h.cf)([i1.Ay], () => ({
                noiseCancellation: i1.Ay.getNoiseCancellation(),
                noiseSuppression: i1.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: i1.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: i1.Ay.isNoiseCancellationSupported(),
            })),
            s = E.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: R.intl.string(R.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: R.intl.string(R.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: R.intl.string(R.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, i]),
            r = l
                ? R.intl.format(R.t["1q5aTp"], { helpArticle: ex.A.getArticleURL(S.MVz.NOISE_SUPPRESSION) })
                : R.intl.string(R.t.OWKjw5);
        return (0, A.jsxs)(X.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, A.jsx)(i7.l, {
                    label: R.intl.string(R.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, A.jsx)(rU, {}),
            ],
        });
    },
});
var rV = n(934729),
    rk = n(621380);
let rw = !nm.Av;
function rF() {
    return (0, h.bG)([i1.Ay], () => i1.Ay.getMode() === lM.TB.PUSH_TO_TALK);
}
let rB = (0, d.zD)(c.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nm.Av ? R.intl.string(R.t.tG4Np5) : R.intl.string(R.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.getMode());
        return E.useMemo(() => {
            if (!nm.Av && e === lM.TB.PUSH_TO_TALK)
                return R.intl.format(R.t["VHI4+Y"], { onDownloadClick: () => (0, rV._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.getActiveInputProfile() !== rk.m.STUDIO);
    },
    useValue: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.getMode() === lM.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? lM.TB.PUSH_TO_TALK : lM.TB.VOICE_ACTIVITY),
            (i = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lM.TB.PUSH_TO_TALK &&
                rw &&
                (0, la.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("844331"), n.e("410919")]).then(n.bind(n, 556506));
                    return (t) =>
                        (0, A.jsx)(e, {
                            title: R.intl.string(R.t.Kdt0Gb),
                            confirmText: R.intl.string(R.t["1WjMbC"]),
                            cancelText: R.intl.string(R.t.BddRzS),
                            onConfirm: () => (0, rV._)("PTT Limited Modal"),
                            body: R.intl.string(R.t.NIozvt),
                            ...t,
                        });
                }),
            sG.A.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
});
var rz = n(484599);
let rX = (0, d.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        usePredicate: rF,
        Component: function () {
            let e = (0, h.bG)([i1.Ay], () => {
                    let { shortcut: e } = i1.Ay.getModeOptions();
                    return e;
                }),
                t = R.intl.format(R.t.HVvn5T, {
                    onClick: () => (0, nl.openUserSettings)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: rz.e,
                    children: (0, A.jsx)(ll.A, {
                        defaultValue: e,
                        onChange: (e) => sG.A.setMode(S.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    rY = (0, d.sN)(c.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => R.intl.string(R.t.GCNMM8),
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        setValue: function (e) {
            sG.A.setMode(S.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: S.IjB,
        getInitialValue: function () {
            let { delay: e } = i1.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: rF,
    });
var rH = n(844981),
    rK = n(943679);
function rW() {
    return (0, rH.Ay)("VoiceSettings");
}
let rZ = (0, d.zD)(c.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => R.intl.string(rK.default.LGDPhA),
        useSubtitle: function () {
            let e = rW();
            if ((0, rH.Xt)(e))
                return e === rH.L3.BLOCKED_MONO_OUTPUT
                    ? R.intl.string(rK.default.rOXfEw)
                    : R.intl.string(rK.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            sG.A.setSpatialAudio(e, [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return rW() !== rH.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, rH.Xt)(rW());
        },
    }),
    rq = (0, d.Qx)(c.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => R.intl.string(R.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, ro._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH), R.intl.string(R.t.VZPR0R), R.intl.string(R.t.cjPbpT)],
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getActiveInputProfile() ?? rk.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sG.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, ro.d)({ location: "InputProfileCategory" });
            return [
                { value: rk.m.VOICE_ISOLATION, name: R.intl.string(R.t.cjPbpT), desc: R.intl.string(R.t.CzhvnE) },
                { value: rk.m.STUDIO, name: R.intl.string(R.t.VZPR0R), desc: R.intl.string(R.t.ZaJksS) },
                { value: rk.m.CUSTOM, name: R.intl.string(R.t["N/PQjv"]), desc: R.intl.string(R.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    rQ = (0, d.zZ)(c.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, h.bG)([ra.A, i1.Ay], () => {
                let e = i1.Ay.getInputDeviceId();
                return (
                    (ra.A.hasEchoCancellation(e) || ra.A.hasNoiseSuppression(e) || ra.A.hasAutomaticGainControl(e)) &&
                    i1.Ay.isInputProfileCustom()
                );
            });
            return E.useMemo(() => {
                if (e) return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [rq, rL, rM, r_, rZ, rB, rX, rY, rI],
    });
var rJ = n(403581),
    r$ = n(512950),
    r0 = n(983851),
    r1 = n(687021),
    r2 = n(128450),
    r3 = n(796774),
    r6 = n(209932),
    r5 = n(813564),
    r4 = n(984813),
    r8 = n(922016),
    r7 = n(305866),
    r9 = n(22231),
    ae = n(158045),
    at = n(792348),
    an = n(674168),
    ai = n(827059),
    al = n(805945),
    as = n(647451);
function ar(e) {
    let { onSelect: t } = e,
        [n, i] = E.useState(!1),
        l = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        s = ae.Ay.canUseCustomCallSounds(l),
        r = E.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, A.jsx)(r8.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, A.jsx)(r7.l, {
                children: (0, A.jsx)(ai.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, A.jsx)(an.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, A.jsx)(al.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: R.intl.string(R.t.uOe0Az),
                children: (0, A.jsx)(r9.PencilIcon, { size: "md", color: "currentColor", className: as.Wo }),
            }),
    });
}
function aa(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, at.A)(t, null),
        i =
            0 === (0, r5.wH)()
                ? R.intl.string(R.t.OASXjt)
                : R.intl.formatToPlainString(R.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, A.jsx)(al.dT, {
        onClick: n,
        text: i,
        children: (0, A.jsx)(r0.H, { size: "md", color: "currentColor", className: as.wg }),
    });
}
function ao(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s);
    return (0, A.jsxs)("div", {
        className: as.D6,
        children: [
            (0, A.jsxs)("div", {
                className: as.kL,
                children: [
                    a && (0, A.jsx)(ty.A, { emojiId: s, emojiName: r, className: as.Zg }),
                    (0, A.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: as.dj,
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
                    l
                        ? (0, A.jsx)(aa, { sound: t })
                        : (0, A.jsx)(r0.H, { size: "md", color: "currentColor", className: as.Gk }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: as.kL,
                children: [
                    (0, A.jsx)(ar, { onSelect: i }),
                    l &&
                        !n &&
                        (0, A.jsx)(al.dT, {
                            onClick: () => i(null),
                            text: R.intl.string(R.t.jmtcGA),
                            children: (0, A.jsx)(le.TrashIcon, {
                                size: "md",
                                color: nQ.A.unsafe_rawColors.RED_400.css,
                                className: as.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var au = n(617617);
n(980504);
var ad = n(806050);
function ac(e) {
    return (0, h.bG)([r6.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return r6.A.getSound("0" === t ? "0" : t, n);
    });
}
function ag(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([au.A], () => au.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = ac(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, A.jsxs)("div", {
        className: ad.Io,
        children: [
            r
                ? (0, A.jsx)(ty.A, { emojiId: l, emojiName: s, className: ad.nW })
                : (0, A.jsx)(r0.H, { size: "md", color: "currentColor", className: ad.nW }),
            (0, A.jsx)(H.E, { className: ad.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let am = (0, d.E2)(c.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eP.Ay)(),
            [t, n] = E.useState("0"),
            i = (0, r4.mz)(t),
            l = ac(i),
            s = i?.type === r4.PP.GLOBAL,
            r = (0, h.bG)([r6.A], () => r6.A.hasFetchedAllSounds()) && null != i && null == l;
        (E.useEffect(() => {
            r && (0, r5.ND)({ location: e });
        }, [r, e]),
            E.useEffect(() => {
                (0, r3.E7)();
            }, []));
        let a = E.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, A.jsx)(ag, { guildId: e.value }) : null;
        }, []);
        return (0, A.jsxs)(n$.n, {
            label: R.intl.string(R.t.nzUc3B),
            description: R.intl.format(R.t.u9RWmv, { helpdeskArticle: ex.A.getArticleURL(S.MVz.SOUNDBOARD) }),
            children: [
                (0, A.jsx)(r1.A, {
                    guildId: t,
                    className: ad.Dt,
                    globalOption: { label: R.intl.string(R.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, A.jsxs)(r2.A, {
                    title: R.intl.format(R.t.I2TsYN, {
                        nitroWheelHook: () => (0, A.jsx)(rJ.t, { size: "md", color: "currentColor", className: ad.ax }),
                    }),
                    children: [
                        (0, A.jsx)(ao, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, r5.Dv)(t, e) : (0, r5.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, A.jsx)(r$.p, {
                                className: ad.lm,
                                messageType: r$.Y.WARNING,
                                children: R.intl.string(R.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aA = n(824744);
let aE = (0, d.sN)(c.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => R.intl.string(R.t.kbFsAD),
    useSubtitle: () => R.intl.format(R.t.BPbGq7, { helpCenterArticle: ex.A.getArticleURL(S.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aA.w)(e);
        (0, r3.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, r5.wH)();
        return (0, aA.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var ah = n(864145);
let aS = (0, d.sN)(c.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t["2JbvKw"]),
        useSubtitle: () => R.intl.string(R.t.INenzY),
        setValue: function (e) {
            let t = (0, aA.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, aA.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, ah.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    aT = (0, d.zZ)(c.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ABjMWI),
        buildLayout: () => [aE, aS, am],
    });
var ap = n(803224),
    ax = n(552122);
let af = (0, d.E2)(c.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [R.intl.string(R.t.fgSHf8)],
        usePredicate: () => null != ax.A.useHolidaySoundpack(),
        Component: () =>
            (0, A.jsx)(H.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: R.intl.format(R.t.Eup6Wv, {
                    onClick: () => (0, nl.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aI = (0, d.AK)(c.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.eyGEE4),
        useSearchTerms: () => [R.intl.string(R.t.eyGEE4)],
        destinationKey: c.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    a_ = (0, d.gN)(c.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aI] });
var aN = n(264686);
let aC = (0, eT.D)(() => ({ currentPlayingSound: null }));
function ab() {
    let e = aC.getField("currentPlayingSound");
    (e?.stop(), aC.setState({ currentPlayingSound: null }));
}
function ay(e) {
    let t = aC.getField("currentPlayingSound");
    t?.stop();
    let n = (0, n5.Ak)(e);
    aC.setState({ currentPlayingSound: n });
}
function av(e) {
    return (0, d.zD)(`${c.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => ay(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, h.bG)([ap.A], () => ap.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = ap.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), aN.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, h.bG)([ap.A], () => ap.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aj = [
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
    aO = (0, d.D1)(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? R.intl.formatToPlainString(R.t["0JYT98"], { count: t })
                : R.intl.formatToPlainString(R.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tA(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                ab();
            };
        },
        buildLayout: () => aj.map((e) => av(e)),
    }),
    aL = (0, d.zZ)(c.X.SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, h.bG)([ap.A], () => ap.A.getDisableAllSounds());
            return E.useMemo(() => {
                if (e)
                    return {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: R.intl.format(R.t.fRvixS, {
                            onClick: () => (0, nl.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aO, af, a_],
    }),
    aR = (0, d.zD)(c.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => R.intl.string(R.t.e3Zz3F),
        useSubtitle: () => R.intl.string(R.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            ((0, s6.A)("stream_previews_disabled", !e, L.uh.getSetting(), [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e));
        },
    }),
    aD = (0, d.zD)(c.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => R.intl.string(R.t.GmWk2E),
        useSearchTerms: () => [R.intl.string(R.t["Fj/xn1"])],
        useSubtitle: () => R.intl.string(R.t["Fj/xn1"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getVideoHook());
        },
        setValue: sG.A.setVideoHook,
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.supportsVideoHook());
        },
    }),
    aP = (0, d.zD)(c.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => R.intl.string(R.t["4I0qzZ"]),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getExperimentalSoundshare());
        },
        setValue: sG.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => {
                let e = i1.Ay.supportsExperimentalSoundshare(),
                    t = i1.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    aG = (0, d.zD)(c.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => R.intl.string(R.t["/jwMtn"]),
        useSubtitle: () => R.intl.string(R.t.zlA23F),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sG.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i1.Ay.supports(lM.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    aU = (0, d.sN)(c.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => R.intl.string(R.t.fhEzfj),
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sG.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i1.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, h.bG)([i1.Ay], () => i1.Ay.getSidechainCompression());
            return i1.Ay.supports(lM.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    aM = (0, d.zD)(c.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => R.intl.string(R.t.lt8rRx),
        useSubtitle: () => R.intl.string(R.t.ie1mgY),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nm.cX)() && e
                ? (0, nJ.A)({
                      title: R.intl.string(R.t["9jf31O"]),
                      subtitle: R.intl.string(R.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (sG.A.setUseSystemScreensharePicker(e), nh.A.app.relaunch());
                      },
                      confirmText: R.intl.string(R.t.BddRzS),
                  })
                : sG.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.supportsSystemScreensharePicker() && (0, nm.cX)());
        },
    }),
    aV = (0, d.bd)(c.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t.qrMyvm) : R.intl.string(R.t.LEtTNl)),
        useCollapsedSubtitle: () => tA(c.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aG, aU, aM, aP, aD],
    }),
    ak = (0, d.zZ)(c.X.STREAMING_CATEGORY, { useTitle: () => R.intl.string(R.t.KDdjou), buildLayout: () => [aR, aV] });
var aw = n(106713);
let aF = (0, d.E2)(c.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aw.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, A.jsx)(sb.U, {
                label: R.intl.string(R.t.UTM8VP),
                deviceType: lM.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aB = (0, d.E2)(c.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aw.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, A.jsx)(sb.U, {
                label: R.intl.string(R.t.xuYQ0n),
                deviceType: lM.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    az = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [aF, aB] }),
    aX = (0, d.sN)(c.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i1.Ay.getInputVolume();
            return (0, aA.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aA.w)(e);
            sG.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    aY = (0, d.sN)(c.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i1.Ay.getOutputVolume();
            return (0, aA.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aA.w)(e);
            sG.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    aH = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [aX, aY] });
var aK = n(702841),
    aW = n(152567),
    aZ = n(804037);
let aq = `${ex.A.getArticleURL(S.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    aQ = (0, d.E2)(c.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH)],
        usePredicate: function () {
            return (0, aK.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.LOOPBACK));
        },
        Component: function () {
            return (0, aK.bG)([i1.Ay], () => i1.Ay.supports(lM.O5.LOOPBACK))
                ? (0, A.jsx)(aW.A, {
                      size: "md",
                      notchBackground: aW.V.GRAY,
                      captionVoice: R.intl.string(R.t.bp3JOV),
                      captionNoVoice: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t.bgn75v),
                              }),
                              R.intl.string(R.t["MA+OZh"]),
                              (0, A.jsx)(nn.Anchor, {
                                  className: aZ.X,
                                  href: ex.A.getArticleURL(S.MVz.NO_INPUT_DETECTED),
                                  children: R.intl.string(R.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: R.intl.format(R.t["V+B3FH"], { guideURL: aq }),
                      buttonTest: R.intl.string(R.t.gyljWE),
                      buttonStop: R.intl.string(R.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    aJ = eQ.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function a$(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, A.jsxs)(X.B, {
        children: [
            n && (0, A.jsx)(i4, { sourcePage: "voice" }),
            t && (0, A.jsx)(lW.A, { look: lW.k.WARNING, children: R.intl.string(R.t.Ioz3gx) }),
        ],
    });
}
let a0 = (0, d.zZ)(c.X.VOICE_CATEGORY, {
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
            let e = i5("voice"),
                t = (0, sy.x5)(lM.oh.AUDIO_INPUT),
                n = (0, sy.x5)(lM.oh.AUDIO_OUTPUT),
                i = E.useMemo(() => {
                    let e = aJ.some((e) => t?.hardwareId?.startsWith(e)),
                        i = aJ.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return E.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, A.jsx)(a$, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [az, aH, aQ],
    }),
    a1 = (0, d.t_)(c.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        buildLayout: () => [a0, rQ, sP, ak, aL, aT, rr, s9],
    }),
    a2 = (0, d.i4)(c.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        usePredicate: () => i1.Ay.isSupported(),
        icon: sh.MicrophoneIcon,
        useMenu: sS.A,
        buildLayout: () => [a1],
    }),
    a3 = (0, d.WI)(c.X.APP_SECTION, {
        useTitle: () => R.intl.string(R.t.gcyH1J),
        buildLayout: () => [a2, nY, e1, iw, sE, nZ],
    });
var a6 = n(360669),
    a5 = n(974544),
    a4 = n(423764),
    a8 = n(289873),
    a7 = n(132500),
    a9 = n(465323),
    oe = n(37766),
    ot = n(194261),
    on = n(391048),
    oi = n(277984),
    ol = n(99696),
    os = n(202613),
    or = n(615405),
    oa = n(83617),
    oo = n(935208),
    ou = n(607399),
    od = n(993077),
    oc = n(150934),
    og = n(256006),
    om = n(198970),
    oA = n(71532);
let oE = /[^0-9/]/g,
    oh = /[^0-9]/g;
class oS extends E.PureComponent {
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
                ((i = (n = e.replace(oE, "").split("/"))[0]),
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
            ? (u = u.replace(oh, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, A.jsx)(lo.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var oT = n(832208),
    op = n(782328);
let ox = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tw.Ld)(),
                        title: () => R.intl.string(R.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => R.intl.string(R.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => op.ep,
                        renderInput: (e) => (0, A.jsx)(oS, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    of = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = E.useState(!1),
            [a, o] = E.useState(null),
            [u, d] = E.useState(i);
        return (
            E.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, A.jsx)(oT.A, {
                className: n,
                form: ox,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    (s || "" === e || r(!0),
                        (s && "" === e) || !(0, oA.So)(e) ? o(R.intl.string(R.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oI = n(219887),
    o_ = n(292856);
let oN = "isDefault";
class oC extends E.PureComponent {
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
            expiresMonth: t instanceof os.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof os.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        e5.h.wait(() => {
            ((0, oi.ey)(), (0, oi.tc)());
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(ii.Vq).length))
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
                ? (0, A.jsx)("div", {
                      className: o_.zc,
                      children: (0, A.jsx)(iz.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, A.jsx)("div", {
                  className: o_.zc,
                  children: (0, A.jsx)(iz.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, og.g)(n);
        return (0, A.jsxs)("div", {
            className: o_.yV,
            children: [
                (0, A.jsx)(H.E, {
                    className: o_.bV,
                    variant: "text-sm/normal",
                    children: R.intl.string(R.t["50Auo2"]),
                }),
                (0, A.jsx)(om.Ay, {
                    ...e,
                    mode: om.Ay.Modes.EDIT,
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
            className: o_.yV,
            children: [
                (0, A.jsx)(H.E, { className: o_.bV, variant: "text-sm/normal", children: R.intl.string(R.t.Fo2YP7) }),
                (0, A.jsx)(of, {
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
        return (0, A.jsx)("div", {
            className: o_.AU,
            children: (0, A.jsxs)(X.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, A.jsx)(sF.e, {
                        children: (0, A.jsxs)("div", {
                            className: o_.lH,
                            children: [
                                n
                                    ? (0, A.jsx)(lt.m, {
                                          text: R.intl.string(R.t["v6/z28"]),
                                          children: (0, A.jsx)("div", { "aria-hidden": !0, className: o_.dm }),
                                      })
                                    : null,
                                (0, A.jsx)(_.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: ou.Fr ? "sm" : "md",
                                    text: ou.Fr ? R.intl.string(R.t.oyYWHE) : R.intl.string(R.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, A.jsxs)(sF.e, {
                        children: [
                            (0, A.jsx)(_.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: ou.Fr ? "sm" : "md",
                                text: R.intl.string(R.t["ETE/oC"]),
                            }),
                            (0, A.jsx)(_.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: ou.Fr ? "sm" : "md",
                                text: R.intl.string(R.t["R3BPH+"]),
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
            r = e instanceof os.SJ;
        return (0, A.jsx)(od.Z, {
            editable: !0,
            className: ir()(o_.Nr, i),
            children: (0, A.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, A.jsxs)("div", {
                        className: o_.__invalid_paymentSection,
                        children: [
                            (0, A.jsx)(oI.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, A.jsx)("div", { className: o_.Um, children: R.intl.string(R.t["3R0U0b"]) })
                                : null,
                            (0, A.jsx)("div", {
                                className: o_.Sv,
                                children: r
                                    ? R.intl.format(R.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : R.intl.string(R.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, A.jsx)("div", {
                        className: o_.D5,
                        children: (0, A.jsx)(oc.S, {
                            value: oN,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, oN),
                            label: R.intl.string(R.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, A.jsx)(i8.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let ob = h.Ay.connectStores([or.A], () => ({ updateError: or.A.editSourceError, removeError: or.A.removeSourceError }))(
    oC,
);
var oy = n(986485),
    ov = n(849405),
    oj = n(329693);
function oO() {
    (0, ol.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, a7.A)() });
}
class oL extends E.PureComponent {
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
            ? (0, A.jsx)(ob, {
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
            : (0, A.jsxs)(A.Fragment, {
                  children: [
                      i ? null : (0, A.jsx)(i8.c, { className: oj.__invalid_sourceDivider }),
                      (0, A.jsxs)("div", {
                          className: oj.Yb,
                          children: [
                              (0, A.jsx)(oI.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
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
let oR = E.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = E.useState(null),
        o = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, h.bG)([or.A], () => or.A.ipCountryCode),
        d = E.useMemo(() => (0, a9.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        E.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : oi.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, A.jsxs)(A.Fragment, {
            children: [
                n ? null : (0, A.jsx)(i8.c, { className: oj.__invalid_sourceDivider }),
                (0, A.jsxs)("div", {
                    className: oj.Yb,
                    children: [
                        void 0 !== t
                            ? (0, A.jsx)(oI.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, A.jsxs)(lg.A, {
                                  align: lg.A.Align.CENTER,
                                  children: [
                                      (0, A.jsx)(oe._, { size: "lg" }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/medium",
                                          className: ov.Wi,
                                          children: R.intl.string(oy.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, A.jsxs)("div", {
                            className: oj.zy,
                            children: [
                                (0, A.jsx)("div", {
                                    className: oj.Tq,
                                    children:
                                        null == r
                                            ? (0, A.jsx)(a8.y, { type: a8.y.Type.SPINNING_CIRCLE })
                                            : (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, a9.$g)(e ?? 0, n, l, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${String(n).toUpperCase()} ${i}`;
                                                  })(),
                                              }),
                                }),
                                (0, A.jsx)(_.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: R.intl.string(oy.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class oD extends E.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await oi.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await oi.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await oi.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, oa.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, la.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, A.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, on.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, A.jsxs)("div", {
            className: oj.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, A.jsxs)("div", {
                          className: oj.z8,
                          children: [
                              (0, A.jsx)(H.E, { variant: "text-sm/normal", children: R.intl.string(R.t.aRHpAB) }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: oj.Sv,
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
                locale: l,
                removing: s,
                submitting: r,
                premiumSubscriptionPaymentSourceId: a,
                showGiftCards: o,
            } = this.props,
            u = B()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oo.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof os.LQ)),
            c = u.filter((e) => e instanceof os.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            E = d.map((e, t) =>
                (0, A.jsx)(
                    oL,
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
                          (0, A.jsx)(
                              oR,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: oO,
                              },
                              e.id,
                          ),
                      )
                    : (0, A.jsx)(oR, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: oO,
                      })),
            (0, A.jsxs)(A.Fragment, {
                children: [
                    t
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsxs)(p.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, A.jsx)(ot.LockIcon, { size: "sm", className: oj.hz }),
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
                    m !== d.length - 1 || (o && c.length > 0) ? (0, A.jsx)(i8.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var oP = n(459357),
    oG = n(295405),
    oU = n(166403),
    oM = n(773669),
    oV = n(943009);
function ok() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, a4.Gw)(e.country) };
}
let ow = (0, d.E2)(c.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, h.bG)([or.A], () => or.A.isSyncing),
                i = (0, h.bG)([oG.A], () => oG.A.paymentSources),
                l = (0, h.bG)([oG.A], () => oG.A.defaultPaymentSourceId),
                s = (0, h.bG)([oM.default], () => oM.default.locale),
                r = (0, h.bG)([oU.A], () => oU.A.getPremiumTypeSubscription()),
                a = (0, h.bG)([or.A], () => or.A.isRemovingPaymentSource),
                o = (0, h.bG)([or.A], () => or.A.isUpdatingPaymentSource),
                { enabled: u } = (0, oP.c)({ location: "UserSettingsBilling" });
            return (E.useEffect(() => {
                (oi.$o(), oi.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, A.jsx)("div", { className: oV.o, children: (0, A.jsx)(a8.y, {}) })
                : (0, A.jsx)(oD, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== S.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: s,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.W26xGQ), R.intl.string(R.t["3pIjBH"])],
    }),
    oF = (0, d.zZ)(c.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.W26xGQ),
        useSubtitle: () => {
            let e = ok();
            return null != e ? R.intl.format(R.t.e2t1G5, { country: e.countryName }) : R.intl.string(R.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == ok()
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
        buildLayout: () => [ow],
    });
var oB = n(549363),
    oz = n(545075);
let oX = (0, d.E2)(c.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, h.bG)([oM.default], () => oM.default.locale);
            return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(oz.kb, {}), (0, A.jsx)(oB.A, { locale: e })] });
        },
        useSearchTerms: () => [R.intl.string(R.t.obLrcK)],
    }),
    oY = (0, d.zZ)(c.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.obLrcK),
        buildLayout: () => [oX],
    }),
    oH = (0, d.t_)(c.X.BILLING_PANEL, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [oF, oY],
        useObscuredNotice: a5.L,
    }),
    oK = (0, d.i4)(c.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        icon: a6.B,
        buildLayout: () => [oH],
    });
var oW = n(70283),
    oZ = n(597770),
    oq = n(682618),
    oQ = n(38423),
    oJ = n(962644),
    o$ = n(35587),
    o0 = n(86379);
let o1 = (0, d.E2)(c.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: oz.uK,
        usePredicate: () => (0, o0.Hp)(),
        useSearchTerms: () => [R.intl.string(R.t.vwMEHS)],
    }),
    o2 = (0, d.zZ)(c.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [o1] });
var o3 = n(982240),
    o6 = n(788833),
    o5 = n(914410),
    o4 = n(556427),
    o8 = n(573343);
let o7 = "UserSettingsGiftingBadgeProgress";
function o9(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, A.jsxs)("div", {
        className: ir()(o8.fO, { [o8.bF]: i }),
        children: [
            null != n && (0, A.jsx)("img", { src: n, alt: "", className: o8.si }),
            (0, A.jsxs)("div", {
                className: o8.tc,
                children: [
                    (0, A.jsx)(H.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, A.jsx)(H.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: R.intl.format(o4.default.qvx9E4, { count: (0, o3.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function ue(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, oQ.b9)(o7);
    return (0, A.jsx)("div", {
        className: o8.dw,
        children: t.map((e) => (0, A.jsx)(o9, { tier: e, iconUrl: (0, oQ.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function ut(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(tL.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, o6.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, A.jsx)("div", {
        className: o8.NG,
        children: (0, A.jsx)(_.$, {
            variant: "primary",
            icon: oZ.GiftIcon,
            text: R.intl.string(o4.default.DZnomS),
            onClick: l,
        }),
    });
}
function un(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, o3.rL)(i),
        a = (0, o3.rL)(l),
        o = (0, oQ.GZ)(n, i, l),
        u = (0, oQ.b9)(o7),
        d = (0, oQ.Se)(i, u),
        c = (0, oQ.Se)(l, u);
    return (
        (t =
            null != l
                ? R.intl.formatToPlainString(o4.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : R.intl.formatToPlainString(o4.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, A.jsxs)("div", {
            className: o8.mY,
            children: [
                null != d &&
                    (0, A.jsx)("div", {
                        className: o8.fC,
                        children: (0, A.jsx)("img", { src: d, alt: "", className: o8.qS }),
                    }),
                (0, A.jsxs)("div", {
                    className: o8.Qs,
                    children: [
                        (0, A.jsx)(H.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, A.jsx)(o5.Ay, { variant: o5.qP.BLUE, weight: o5.fh.MEDIUM, progress: o }),
                        (0, A.jsx)(H.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: o8.qg,
                            children: R.intl.format(o4.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, A.jsx)("div", {
                        className: o8.fC,
                        children: (0, A.jsx)("img", { src: c, alt: "", className: o8.qS }),
                    }),
            ],
        })
    );
}
function ui(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, h.cf)([o3.Ay], () => ({
            badgeProgress: o3.Ay.getSingleRequirementProgress(oW.$.GIFTING)?.current ?? 0,
            currentTier: o3.Ay.getCurrentTier(oW.$.GIFTING),
            nextTier: o3.Ay.getNextTier(oW.$.GIFTING),
            giftsRemaining: o3.Ay.getRemainingToNextTier(oW.$.GIFTING),
            tiers: o3.Ay.getBadgeById(oW.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, A.jsxs)("div", {
              className: o8.kL,
              children: [
                  (0, A.jsxs)("div", {
                      className: o8.Jo,
                      children: [
                          n > 0 &&
                              (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsx)(un, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, A.jsx)("div", { className: o8.yF }),
                                  ],
                              }),
                          (0, A.jsx)(ue, { tiers: r, currentTier: i }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: o8.PJ,
                              children: R.intl.string(o4.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, A.jsx)(ut, { analyticsLocation: t, location: o7 }),
              ],
          });
}
let ul = (0, d.zZ)(c.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => R.intl.string(o4.default.sFokBp),
        buildLayout: () => [us],
        usePredicate: () => {
            let e = (0, oQ.F5)("gift_inventory"),
                t = (0, h.bG)([o3.Ay], () => o3.Ay.getBadgeById(oW.$.GIFTING));
            return e && null != t;
        },
    }),
    us = (0, d.E2)(c.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [R.intl.string(o4.default.sFokBp)],
        Component: () => (0, A.jsx)(ui, {}),
    });
var ur = n(264779),
    ua = n(412260),
    uo = n(555393),
    uu = n(725807),
    ud = n(212168),
    uc = n(469778),
    ug = n(45938),
    um = n(109802),
    uA = n(869038),
    uE = n(380856);
function uh(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, A.jsxs)(lg.A, {
        className: ir()(uE.wx, n),
        align: lg.A.Align.CENTER,
        children: [
            (0, A.jsx)("div", { className: uE.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function uS(e) {
    let { children: t, className: n } = e;
    return (0, A.jsx)("div", { className: ir()(uE.rf, n), children: t });
}
class uT extends E.PureComponent {
    static Header = uh;
    static Body = uS;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, A.jsx)("div", { className: ir()(uE.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var up = n(165191),
    ux = n(871123),
    uf = n(366523),
    uI = n(280450),
    u_ = n(30793),
    uN = n(97352),
    uC = n(67480),
    ub = n(147925),
    uy = n(957565),
    uv = n(615396),
    uj = n(274904);
class uO extends E.PureComponent {
    _copyModeTimeout = new rC.Ep();
    state = { copyMode: um.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case um.q.SUCCESS:
                return R.intl.string(R.t.XVvPjU);
            case um.q.ERROR:
                return R.intl.string(R.t.i4GM3L);
            default:
                return R.intl.string(R.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        uA.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, ug.AK)(t, n),
            (0, uy.C)(
                e,
                () => this.setState({ copyMode: um.q.SUCCESS }),
                () => this.setState({ copyMode: um.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: um.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, A.jsxs)(lg.A, {
            direction: lg.A.Direction.VERTICAL,
            className: uj.Gj,
            children: [
                (0, A.jsx)(um.e, {
                    className: uj.ph,
                    value: (0, ug.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uy.p5,
                    hideMessage: e ? R.intl.string(R.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: sk.XD.BRAND,
                    buttonLook: sk.pR.FILLED,
                }),
                (0, A.jsxs)("div", {
                    className: uj.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, A.jsxs)(E.Fragment, {
                                  children: [
                                      R.intl.format(R.t.ltVZcJ, { hours: t.expiresAt.diff(io()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, A.jsx)(n0.D, {
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
class uL extends E.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await uA.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && uA.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, ux.bF)(e)
            ? (0, A.jsx)(uf.e, { shape: "square", sku: e, containerClassName: uj.ez })
            : null != t
              ? (0, A.jsx)(up.A, { giftStyle: t, className: uj.ez, shouldAnimate: this.state.isHovered })
              : (0, A.jsx)(i0.A, { game: n, size: i0.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, ux.bF)(e)
            ? (0, A.jsxs)("div", {
                  className: ir()(uj.Oc, uj.ic),
                  children: [
                      (0, A.jsx)(i0.A, { game: n, size: i0.M.XSMALL, skuId: e.id, className: uj._u }),
                      R.intl.format(R.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, A.jsx)("div", { className: uj.Oc, children: R.intl.format(R.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tX.FB
                    ? R.intl.string(R.t.odsU6W)
                    : i === tX.Bu && null != n
                      ? R.intl.formatToPlainString(n.interval === tX.WT.MONTH ? R.t.uZjpiJ : R.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : R.intl.formatToPlainString(n.interval === tX.WT.MONTH ? R.t.rCJvqo : R.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, A.jsx)("div", { className: uj.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, A.jsxs)(lg.A, {
            justify: lg.A.Justify.BETWEEN,
            align: lg.A.Align.CENTER,
            className: uj.pe,
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
                sku: l,
                isFetching: s,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, A.jsxs)(uT, {
            className: i,
            children: [
                (0, A.jsx)(n0.D, {
                    onClick: this.handleToggleOpen,
                    className: uj.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, A.jsx)(uT.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, A.jsxs)("div", {
                            className: uj.MY,
                            children: [
                                (0, A.jsxs)(lg.A, {
                                    align: lg.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, A.jsxs)("div", {
                                            className: uj.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, A.jsx)(ub.A, {
                                    direction: a ? ub.A.Directions.UP : ub.A.Directions.DOWN,
                                    className: uj.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, A.jsx)(uT.Body, {
                          children: s
                              ? (0, A.jsx)(a8.y, { className: uj.u1 })
                              : (0, A.jsxs)(E.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, A.jsx)(uO, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let uR = h.Ay.connectStores([uC.A, te.A, u_.A, iW.A, uN.A, uI.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = uC.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = u_.A.getForGifterSKUAndPlan(uI.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: te.A.enabled,
        isFetching: u_.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: u_.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: iW.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, uv.c9)(n) : null,
        giftCodes: s,
    };
})(uL);
var uD = n(725570),
    uP = n(736653),
    uG = n(46054);
let uU = io().duration(30, "days");
var uM = n(416052),
    uV = n(878309);
function uk(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, A.jsx)(lr.Modal, {
        title: "",
        size: "md",
        input: (0, A.jsx)("div", { className: uV.aR }),
        onClose: async () => await t(),
        actions: [{ text: R.intl.string(R.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, A.jsxs)("div", {
            className: uV.t4,
            children: [
                (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t.iufib1) }),
                (0, A.jsx)(H.E, { variant: "text-md/normal", className: uV.G3, children: R.intl.string(R.t.eAn6z2) }),
            ],
        }),
    });
}
let uw = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = E.useState(null),
        o = (0, tw.GV)(),
        { analyticsLocations: u } = (0, eP.Ay)(tL.A.USER_SETTINGS_GIFT_INVENTORY);
    return (E.useEffect(() => {
        null == i &&
            (0, ur.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, A.jsx)(uk, { onClose: t, transitionState: s })
        : null == i
          ? (0, A.jsx)(a8.y, { className: uV.Lq })
          : (0, A.jsx)(lr.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, A.jsxs)("div", {
                    className: uV.N1,
                    children: [
                        (0, A.jsx)("div", { className: uV.Qw }),
                        (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t["23BfZh"]) }),
                        (0, A.jsx)(H.E, {
                            variant: "text-md/normal",
                            className: uV.G3,
                            children: l.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: R.intl.string(R.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: R.intl.string(R.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, ur.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, A.jsxs)("div", {
                    children: [
                        (0, A.jsx)(i8.c, { className: uV.M5 }),
                        (0, A.jsx)(tQ.D, {
                            label: R.intl.string(R.t.s9LFQh),
                            helperText: R.intl.string(R.t["F+nFTZ"]),
                            children: (0, A.jsx)(uM.A, {
                                value: i,
                                buttonColor: sk.$n.Colors.BRAND,
                                buttonLook: sk.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uF = n(707554),
    uB = n(339048),
    uz = n(136380);
function uX() {
    let e = (0, h.yK)([uc.A], () => uc.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = B().groupBy(e, (e) => (0, ug.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = E.useState(!1);
    if (
        (E.useEffect(() => {
            e5.h.wait(() => {
                (0, uB.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, A.jsx)(a8.y, { className: uz.Lq });
    if (0 === Object.keys(t).length)
        return (0, A.jsxs)("div", {
            className: uz.p$,
            children: [
                (0, A.jsx)("div", { className: uz.QT }),
                (0, A.jsx)(uF.H, { className: uz.ks, children: R.intl.string(R.t.B1qgZn) }),
                (0, A.jsx)("p", {
                    className: uz.WO,
                    children: R.intl.format(R.t.HezvJ8, {
                        onClick: function () {
                            (0, nl.openUserSettings)(c.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let l = B()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: l } = (0, ug.X6)(e);
            return (0, A.jsx)(uR, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: l }, e);
        });
    return (0, A.jsx)(X.B, { gap: "lg", children: l });
}
function uY(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = E.useState(!1),
        [r, a] = E.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, uP.Ay)(),
        d = (0, ur.WD)(n.id, u),
        c = null != i,
        g = E.useMemo(
            () =>
                (0, iu.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? io()(n.outboundRedemptionEndDate)
                            : io()(n.endDate).add(uU)
                        : io()(n.endDate),
                    "LL",
                ),
            [n, c],
        );
    c && l
        ? (t = R.intl.format(R.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !l
          ? (t = R.intl.format(R.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && l
            ? (t = R.intl.format(R.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || l || (t = R.intl.format(R.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let m = c ? R.intl.string(R.t["2cHUti"]) : R.intl.string(R.t.O13yhz),
        h = (0, uo.N)()?.isEligible === !0,
        S = E.useCallback(() => a(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: x } = n;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)("div", {
                className: uz.AX,
                children: [
                    (0, A.jsxs)("div", {
                        className: uz.Pg,
                        children: [
                            (0, A.jsxs)("div", {
                                className: uz.At,
                                children: [
                                    (0, A.jsx)("div", {
                                        className: uz.$G,
                                        children: (0, A.jsx)("img", { alt: "", src: d, className: uz.IJ }),
                                    }),
                                    (0, A.jsxs)("div", {
                                        children: [
                                            (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: T }),
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
                    l &&
                        (0, A.jsx)(H.E, {
                            className: uz.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: uG.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, A.jsx)(uD.aF, {
                    renderModal: (e) =>
                        (0, A.jsx)(uw, {
                            ...e,
                            onClose: S,
                            onClaim: oJ.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: S,
                }),
        ],
    });
}
function uH(e) {
    let { redesign: t = !1 } = e,
        n = (0, h.yK)([uc.A], () => uc.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, uo.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, o$.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tX.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tX.Bu && !e.consumed) ?? [],
        [u, d] = B().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tX.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = l.length + s.length > 0,
        g =
            t || !c
                ? null
                : (0, A.jsxs)("div", {
                      className: uz.N1,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.wFsj3B) }),
                          (0, A.jsx)(i8.c, { className: uz.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, A.jsxs)("div", {
                      className: uz.uo,
                      children: [
                          (0, A.jsx)(rJ.t, {
                              size: "md",
                              color: nQ.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: uz.PC,
                          }),
                          (0, A.jsx)(H.E, {
                              variant: "text-md/normal",
                              className: uz.Qw,
                              children: R.intl.format(R.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tM.default)(), (0, t$.pX)(S.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, A.jsx)(uu.A, {
                              showGradient: !0,
                              className: uz.aA,
                              subscriptionTier: tX.pe.TIER_2,
                              textOptions: { textOverride: R.intl.string(R.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, A.jsxs)("div", {
        children: [
            g,
            (0, A.jsx)(ud.A, {
                className: uz.Yj,
                isShown: !1 === i && c,
                type: ud.i.PREMIUM,
                hasBackground: !0,
                children: (0, A.jsxs)("div", {
                    className: uz.DE,
                    children: [
                        m,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, A.jsx)(uY, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, A.jsx)(uY, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, A.jsx)(
                                  uR,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tX.FB,
                                  },
                                  (0, ug.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, A.jsx)(
                                  uR,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tX.Bu,
                                  },
                                  (0, ug.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, A.jsx)(
                                  uR,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tX.Bu,
                                  },
                                  (0, ug.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let uK = (0, d.zZ)(c.X.MY_GIFTS_CATEGORY, {
        useTitle: uZ,
        buildLayout: () => [uW],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, h.cf)(
                    [ua.A],
                    () => ({
                        claimedOutboundPromotionCodes: ua.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: ua.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, o$.T1)({ includeClaimedPromotions: !0 }),
                i = (0, ur.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    uW = (0, d.E2)(c.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [uZ()],
        Component: () => (0, A.jsx)(uH, { redesign: !0 }),
    });
function uZ() {
    return R.intl.string(R.t.YzjdWJ);
}
let uq = (0, d.zZ)(c.X.PURCHASED_GIFTS_CATEGORY, { useTitle: uJ, buildLayout: () => [uQ] }),
    uQ = (0, d.E2)(c.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [uJ()], Component: () => (0, A.jsx)(uX, {}) });
function uJ() {
    return R.intl.string(R.t.FWe6CP);
}
var u$ = n(532446),
    u0 = n(499454);
class u1 extends E.Component {
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
                    (await (0, ol.Qp)(n),
                        (0, ol.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, a7.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, ug.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await uA.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (tt.default.track(S.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: S.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: S.ZSU.BUTTON_CTA,
                },
            }),
                (0, u0.h)({ processedCode: e }),
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
            r = e ? R.intl.string(R.t["hVEn/j"]) : R.intl.string(R.t.SeKIoS),
            a = e ? R.intl.string(R.t.epHMtp) : void 0;
        return (0, A.jsx)(n$.n, {
            label: e ? void 0 : R.intl.string(R.t["il+VCo"]),
            children: (0, A.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, A.jsxs)(u$.M, {
                    children: [
                        (0, A.jsx)(lo.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !s && l ? R.intl.string(R.t.Y11a2u) : null,
                            helperText: s
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
function u2(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, oP.c)({ location: "UserSettingsBilling" }),
        i = E.useContext(tt.AnalyticsContext),
        l = (0, h.bG)([te.A], () => te.A.enabled);
    return (0, A.jsx)(u1, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let u3 = (0, d.zZ)(c.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["il+VCo"]),
        buildLayout: () => [u6],
        usePredicate: () => !(0, o0.Hp)(),
    }),
    u6 = (0, d.E2)(c.X.REDEEM_CODE_INPUT, {
        Component: () => (0, A.jsx)(u2, { redesign: !0 }),
        useSearchTerms: () => [R.intl.string(R.t["jcSP+g"]), R.intl.string(R.t["il+VCo"])],
    }),
    u5 = (0, d.t_)(c.X.GIFT_PANEL, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        buildLayout: () => [u3, uK, ul, uq, o2],
        initialize: () => {
            (oJ.Ay.fetchClaimedOutboundPromotionCodes(), (0, oQ.Ig)("gift_inventory") && (0, oq.o0)(oW.$.GIFTING));
        },
    }),
    u4 = (0, d.i4)(c.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        icon: oZ.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, o$.IO)().length;
            return E.useMemo(() => ({ badgeType: m.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [u5],
    });
var u8 = n(659758),
    u7 = n(829639),
    u9 = n(815846);
let de = (0, d.E2)(c.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return (0, ae.YE)(e, tX.PremiumTypes.TIER_2) ? (0, A.jsx)(u9.A, {}) : (0, A.jsx)(u7.A, {});
        },
        useSearchTerms: () => [R.intl.string(R.t.Ipxkog)],
    }),
    dt = (0, d.zZ)(c.X.NITRO_CATEGORY, { buildLayout: () => [de] }),
    dn = (0, d.t_)(c.X.NITRO_PANEL, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        useObscuredNotice: a5.L,
        buildLayout: () => [dt],
    }),
    di = (0, d.i4)(c.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        icon: rJ.t,
        usePersistentBadge: function (e) {
            let t = (0, u8.e)(e);
            return E.useMemo(() => ({ badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [dn],
    });
var dl = n(104510),
    ds = n(820739),
    dr = n(73825),
    da = n(160946),
    du = n(859241),
    dd = n(531260),
    dc = n(527113),
    dg = n(338548),
    dm = n(776096),
    dA = n(711014),
    dE = n(178368),
    dh = n(809545),
    dS = n(168482);
function dT() {
    return (0, A.jsxs)("div", {
        className: dh.iE,
        children: [
            (0, A.jsx)("img", { className: dh.Kk, alt: "", src: dS }),
            (0, A.jsxs)("div", {
                className: dh.pq,
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
                    ((0, t$.pX)(S.BVt.GUILD_DISCOVERY), (0, tM.default)());
                },
            }),
        ],
    });
}
var dp = n(365199),
    dx = n(878678),
    df = n(443865),
    dI = n(980707),
    d_ = n(473145);
function dN(e) {
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
                label: null != t.premiumGuildSubscription ? R.intl.string(R.t["PR0n//"]) : R.intl.string(R.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? R.intl.string(R.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: R.intl.string(R.t.twFU3R), subtext: l ? null : R.intl.string(R.t.oQ9lOh), disabled: !l },
            uncancel: { label: R.intl.string(R.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (s.status) {
        case S.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = R.intl.string(R.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case S.Dmq.PAUSE_PENDING:
        case S.Dmq.PAUSED:
            a === tX.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = R.intl.string(R.t.LiLRRT)),
                (o.cancel.subtext = R.intl.string(R.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = E.useMemo(
        () =>
            s.isPausedOrPausePending && a === tX.xc.NONE
                ? (0, A.jsx)(e3.Dr, {
                      id: "manage-subscription",
                      label: R.intl.string(R.t.obRG6Y),
                      action: () => (0, nl.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: df.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: df.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, A.jsxs)(dI.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": R.intl.string(R.t.ogxXGq),
        onClose: i,
        children: [
            (0, A.jsx)(e3.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, la.openModalLazy)(async () => {
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
            (0, d_.I5)(t)
                ? (0, A.jsx)(e3.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, la.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, A.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, A.jsx)(e3.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, la.openModalLazy)(async () => {
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
var dC = n(545934),
    db = n(548118),
    dy = n(987144),
    dv = n(864310),
    dj = n(290413);
function dO(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, dv.A)(t.id);
    return (0, A.jsxs)("div", {
        className: n ?? dj.OA,
        children: [
            (0, A.jsx)(db.Ay, { className: dj.$f, guild: t, size: db.Ay.Sizes.MEDIUM }),
            (0, A.jsxs)("div", {
                className: dj.gI,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, A.jsxs)("div", {
                        className: dj.ew,
                        children: [
                            (0, A.jsxs)("div", {
                                className: dj.QW,
                                children: [
                                    (0, A.jsx)(dl._, {
                                        className: dj.Wz,
                                        color: nQ.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
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
                                        (0, A.jsx)("div", { className: dj.zk }),
                                        (0, A.jsx)(H.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, d_.gb)(t.premiumTier, { useLevels: !1 }),
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
function dL(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([lh.A], () => lh.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: dj.Nr,
              children: [
                  (0, A.jsx)(dO, { guild: n }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: dl._,
                      text: R.intl.string(R.t.aBHecF),
                      onClick: () => {
                          (0, dy.g)({
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
var dR = n(747381);
let dD =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function dP(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = E.useRef(null),
        a = (0, d_.I5)(t),
        o = E.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, dd.A)(),
        c = E.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === S.TVA.NONE) return "";
                    let n = [
                        R.intl.formatToPlainString(R.t["dLlKX/"], { numEmojiSlots: tX.TG[e].limits.emoji }),
                        R.intl.formatToPlainString(R.t["+ANIfv"], { numStickerSlots: tX.TG[e].limits.stickers }),
                        R.intl.formatToPlainString(R.t["4gt60b"], {
                            numSoundboardSlots: tX.TG[e].limits.soundboardSounds,
                        }),
                        R.intl.formatToPlainString(R.t.XahSjZ, {
                            resolution: tX.TG[e].limits.screenShareQualityResolution,
                            framerate: tX.TG[e].limits.screenShareQualityFramerate,
                        }),
                        R.intl.formatToPlainString(R.t.NbNs7S, { bitrate: tX.TG[e].limits.bitrate / 1e3 }),
                        R.intl.formatToPlainString(R.t.VVKcpn, { filesize: tX.TG[e].limits.fileSize / 1024 / 1024 }),
                        R.intl.formatToPlainString(R.t.TbpCvv, { numVideoStageSeats: tX.TG[e].limits.stageVideoUsers }),
                        R.intl.string(R.t.LDyX3i),
                        R.intl.string(R.t.YtGlPW),
                    ];
                    (e >= S.TVA.TIER_2 && (n.push(R.intl.string(R.t.SztbtN)), n.push(R.intl.string(R.t["3GK91n"]))),
                        e >= S.TVA.TIER_3 && n.push(R.intl.string(R.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return R.intl.formatToPlainString(R.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        g = E.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? oo.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return R.intl.formatToPlainString(R.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = E.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        );
    return (0, A.jsxs)("div", {
        className: ir()(dR.iq, { [dR.Mt]: s }),
        children: [
            (0, A.jsxs)("div", {
                className: dR.kd,
                children: [
                    (0, A.jsx)("img", { alt: "", className: dR.bB, src: dD }),
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
                                              (0, A.jsx)("div", { className: dR.zk }),
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
                                              (0, A.jsx)("div", { className: dR.zk }),
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
            (0, A.jsx)(r8.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, A.jsx)(dN, {
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
                    (0, A.jsx)(n0.D, {
                        innerRef: r,
                        "aria-label": R.intl.string(R.t.PdRCRg),
                        className: dR.Mj,
                        ...e,
                        children: (0, A.jsx)(dp.MoreHorizontalIcon, {
                            size: "xs",
                            color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function dG(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, h.bG)([lh.A], () => lh.A.getGuild(t), [t]);
    return (0, A.jsxs)("div", {
        className: dR.Nr,
        children: [
            (0, A.jsx)("div", {
                className: dR.MY,
                children:
                    null != s
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(dO, { guild: s, className: dR.OA }),
                                  (0, A.jsx)(_.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(R.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tM.default)(),
                                              (0, dx.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: S.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, A.jsx)("div", {
                              className: dR.OA,
                              children: (0, A.jsx)(p.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, A.jsx)(
                    dP,
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
function dU(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = E.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                dC.A.createFromServer(
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
                if ((!(0, d_.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in s || (s[e] = []), s[e].push(i));
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > ae.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, A.jsx)("div", {
        className: dR.kR,
        children: oo.default
            .keys(s)
            .map((e) => (0, A.jsx)(dG, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var dM = n(502572),
    dV = n(983511),
    dk = n(342744),
    dw = n(496431);
let dF = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, dw.A)(n);
    return (0, A.jsx)(H.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iu.uN)(i, { days: R.t.WUTPDc, hours: R.t.c1qodV, minutes: R.t["2+A3dv"] }),
    });
};
var dB = n(731536);
function dz(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, h.bG)([oU.A], () => oU.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = E.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, d_.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? ae.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === tX.xc.NONE;
    return 0 === s.length
        ? null
        : (0, A.jsxs)("div", {
              className: dB.Nr,
              children: [
                  (0, A.jsxs)("div", {
                      className: dB.MY,
                      children: [
                          (0, A.jsxs)("div", {
                              className: dB._L,
                              children: [
                                  (0, A.jsxs)("div", {
                                      className: dB.MD,
                                      children: [
                                          (0, A.jsx)("img", { alt: "", className: dB.F8, src: dD }),
                                          (0, A.jsx)("div", {
                                              className: ir()(dB.qS, "theme-dark"),
                                              children: (0, A.jsx)("span", { className: dB.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsxs)("div", {
                                      className: dB.Qp,
                                      children: [
                                          (0, A.jsx)(H.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: R.intl.format(R.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, A.jsx)(H.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: R.intl.format(R.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, A.jsx)(dM.A, {
                              shouldShow: o,
                              text: R.intl.string(R.t.mOWsF1),
                              "aria-label": R.intl.string(R.t.mOWsF1),
                              children: (e) =>
                                  (0, A.jsx)(_.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: dl._,
                                      text: R.intl.string(R.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, la.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("677508"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, A.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, dy.g)({
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
                  s.map((e, t) =>
                      (0, A.jsx)(
                          dX,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, d_.I5)(e),
                              isCanceled: (0, d_.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function dX(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = E.useRef(null),
        u = E.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        s && null != r
            ? (0, A.jsx)(H.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: R.intl.format(R.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != u
              ? (0, A.jsx)(dF, { cooldown: u.getTime() })
              : (0, A.jsx)(H.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R.intl.string(R.t["2mcafz"]),
                });
    let d = l || s;
    return (0, A.jsxs)("div", {
        className: ir()(dB.iq, { [dB.Mt]: i }),
        children: [
            (0, A.jsxs)("div", {
                className: dB.kd,
                children: [(0, A.jsx)("img", { alt: "", className: dB.bB, src: dD }), t],
            }),
            d &&
                (0, A.jsx)(r8.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, A.jsxs)(dI.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": R.intl.string(R.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                l &&
                                    (0, A.jsx)(e3.Dr, {
                                        id: "cancel-boost",
                                        label: R.intl.string(R.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? R.intl.string(R.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, la.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(dV.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                s &&
                                    (0, A.jsx)(e3.Dr, {
                                        id: "uncancel-boost",
                                        label: R.intl.string(R.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? R.intl.string(R.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, la.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, A.jsx)(dk.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, A.jsx)(n0.D, {
                            innerRef: o,
                            "aria-label": R.intl.string(R.t["UKOtz+"]),
                            className: dB.Mj,
                            ...e,
                            children: (0, A.jsx)(dp.MoreHorizontalIcon, {
                                size: "xs",
                                color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var dY = n(834612);
function dH(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = ex.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && s !== tX.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, A.jsxs)("div", {
              className: dY.i,
              children: [
                  (0, A.jsxs)("div", {
                      className: dY.b,
                      children: [
                          (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.W5rDjW) }),
                          (0, A.jsx)(H.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: R.intl.format(R.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(dU, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, A.jsx)(dz, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var dK = n(333722),
    dW = n(9146);
function dZ() {
    return (0, A.jsxs)("div", {
        className: dW.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.IzKs3o) }),
            (0, A.jsx)("div", {
                className: dW.kR,
                children: dK.s.map((e, t) => {
                    let n = e.icon;
                    return (0, A.jsxs)(
                        "div",
                        {
                            className: dW.Nr,
                            children: [
                                (0, A.jsx)(n, { className: dW.Kk }),
                                (0, A.jsx)(H.E, {
                                    className: dW.h_,
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
var dq = n(847374),
    dQ = n(232122),
    dJ = n(665984);
function d$() {
    let [e, t] = E.useState(null),
        [n, i] = E.useState(null);
    return (0, A.jsxs)("div", {
        className: dJ.iE,
        children: [
            (0, A.jsx)(p.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.HPJ6Nj) }),
            (0, A.jsx)("ul", {
                className: dJ.p_,
                children: dQ.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, A.jsxs)(
                        n0.D,
                        {
                            tag: "li",
                            className: ir()(dJ.Aw, { [dJ.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, A.jsxs)("div", {
                                    className: dJ.k7,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            className: dJ.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, A.jsx)(dq.a, {
                                            size: "sm",
                                            color: nQ.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: dJ.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsx)(H.E, {
                                        className: dJ.ZF,
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
var d0 = n(182859),
    d1 = n(25525),
    d2 = n(416763);
function d3() {
    let e = ex.A.getArticleURL(S.MVz.GUILD_SUBSCRIPTIONS);
    return (0, A.jsxs)("div", {
        className: d2.wx,
        children: [
            (0, A.jsxs)("div", {
                className: d2.Qs,
                children: [
                    (0, A.jsxs)("div", {
                        className: d2.B5,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: d2.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(d1.default.hjvcLO),
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
            (0, A.jsx)(d0.A, {
                variant: "member",
                className: d2.iO,
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
var d6 = n(315629),
    d5 = n(87719),
    d4 = n(961085);
function d8() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
    if (null == e || ae.Ay.hasFreeBoosts(e)) return null;
    let t = ex.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(d6.h, {
        color: "nitro-pink",
        className: d4.vK,
        children: [
            (0, A.jsxs)("div", {
                className: d4.nw,
                children: [
                    (0, A.jsx)("img", { alt: "", className: d4.q3, src: dD }),
                    (0, A.jsxs)("div", {
                        className: d4.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.Idh1Vs, { count: tX.M4, boostCount: tX.M4 }),
                            }),
                            (0, A.jsxs)("div", {
                                className: d4.xv,
                                children: [
                                    (0, A.jsx)(rJ.t, { className: d4.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tX.M4,
                                            boostCount: tX.M4,
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
                icon: rJ.t,
                text: R.intl.string(R.t["8x0jKT"]),
                onClick: d5.e,
            }),
        ],
    });
}
var d7 = n(532991);
function d9() {
    let e = (0, h.bG)([dm.A], () => dm.A.affinities),
        t = (0, h.bG)([dA.Ay], () => dA.Ay.getFlattenedGuildIds()),
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
              className: d7.i,
              children: [
                  (0, A.jsx)(p.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.r90Wgo) }),
                  (0, A.jsx)("div", { className: d7.k, children: n.map((e) => (0, A.jsx)(dL, { guildId: e }, e)) }),
              ],
          });
}
var ce = n(967246);
function ct(e) {
    let { count: t, disabledReason: i } = e,
        l = ex.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(d6.h, {
        color: "nitro-pink",
        className: ce.vK,
        children: [
            (0, A.jsxs)("div", {
                className: ce.nw,
                children: [
                    (0, A.jsxs)("div", {
                        className: ce.MD,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: ce.F8, src: dD }),
                            (0, A.jsx)("div", {
                                className: ir()(ce.qS, "theme-dark"),
                                children: (0, A.jsx)("span", { className: ce.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: ce.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, A.jsxs)("div", {
                                className: ce.xv,
                                children: [
                                    (0, A.jsx)(rJ.t, { className: ce.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tX.M4,
                                            boostCount: tX.M4,
                                            helpdeskArticle: l,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)(dM.A, {
                shouldShow: null != i,
                text: i ?? "",
                "aria-label": i,
                children: (e) =>
                    (0, A.jsx)(_.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: dl._,
                        text: R.intl.string(R.t.BMx1iy),
                        disabled: null != i,
                        onClick: () => {
                            (0, la.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("677508"), n.e("418710")]).then(
                                    n.bind(n, 770101),
                                );
                                return (t) =>
                                    (0, A.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            (t.onClose(),
                                                (0, dy.g)({
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
var cn = n(89150);
function ci(e) {
    let { premiumSubscription: t } = e,
        n = (0, h.bG)([dE.A], () => dE.A.boostSlots),
        i = E.useMemo(() => Object.values(n), [n]),
        l = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        s = (0, h.bG)([dm.A], () => dm.A.affinities),
        r = (0, h.bG)([dA.Ay], () => dA.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = E.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]).length,
        u = (0, h.bG)([du.A], () => du.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, dd.A)({ forceFetch: !0 }),
        c = l?.isPremiumGroupMember(),
        g = t?.isPausedOrPausePending === !0 && d === tX.xc.NONE,
        m = E.useMemo(() => i.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [i]),
        S = g ? R.intl.string(R.t.mOWsF1) : m ? void 0 : R.intl.string(R.t.xr4m5B),
        T = E.useMemo(() => {
            if (null == t) return 0;
            let e = ae.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : Math.max(0, e - o);
        }, [t, i.length, o]);
    return (0, A.jsxs)("div", {
        className: cn.GO,
        children: [
            (0, A.jsx)(oz.kb, { className: cn.ek }),
            (0, A.jsx)(d3, {}),
            (0, A.jsx)(d8, {}),
            T > 0 && (0, A.jsx)(ct, { count: T, disabledReason: S }),
            c && (0, A.jsx)(dg.A, {}),
            !a && (0, A.jsx)(dT, {}),
            (0, A.jsxs)("div", {
                className: cn.C_,
                children: [
                    (0, A.jsx)(dH, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, A.jsx)(d9, {}),
                    (0, A.jsx)(dc.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, A.jsx)(dZ, {}),
                    (0, A.jsx)(d$, {}),
                ],
            }),
        ],
    });
}
var cl = n(819677);
let cs = (0, d.E2)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            E.useEffect(() => {
                e5.h.wait(() => {
                    (oi.hP(), oi.$o(), (0, ds.CD)(), (0, dr.zS)(null, null, S.tF5.DISCOVERY), (0, ds.tO)(!0));
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, h.cf)([oU.A], () => ({
                    hasFetchedSubscriptions: oU.A.hasFetchedSubscriptions(),
                    premiumSubscription: oU.A.getPremiumTypeSubscription(),
                })),
                n = (0, da.Y)(),
                i = (0, h.bG)([oG.A], () => oG.A.hasFetchedPaymentSources),
                l = (0, h.bG)([du.A], () => du.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = E.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, A.jsx)("div", { className: ir()(cl.kL, cl.Lq), children: (0, A.jsx)(a8.y, {}) })
                : (0, A.jsxs)("div", {
                      className: cl.kL,
                      children: [
                          (0, A.jsx)("div", { className: cl.Tp }),
                          (0, A.jsx)("div", { className: cl.Qs, children: (0, A.jsx)(ci, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t["+CbP2v"]), R.intl.string(R.t.Nn1lJy)],
    }),
    cr = (0, d.zZ)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [cs] }),
    ca = (0, d.t_)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        buildLayout: () => [cr],
    }),
    co = (0, d.i4)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        icon: dl._,
        buildLayout: () => [ca],
    });
var cu = n(153659),
    cd = n(155984),
    cc = n(357758),
    cg = n(262077),
    cm = n(281445),
    cA = n(933832),
    cE = n(624479),
    ch = n(626584),
    cS = n(131607),
    cT = n(95035),
    cp = n(580630),
    cx = n(196736),
    cf = n(685743),
    cI = n(349085),
    c_ = n(342942),
    cN = n(376205),
    cC = n(252589),
    cb = n(758836),
    cy = n(49999),
    cv = n(394107),
    cj = n(439050);
let cO = new ch.A("GameServerSubscriptionsSection");
function cL(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function cR(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let cD = E.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, cI.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, cS.kn)([eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = uI.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, cf.A)(c, t.id, tL.A.GAME_SERVER_PAGE, t.serverIp),
        T = E.useCallback(() => {
            (0, c_.A)({
                provider: cm.X.SHOCKBYTE,
                onAccept: () => {
                    (u(cy.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: p,
            priceLabel: x,
            dateLabel: f,
            isCanceled: I,
            isDanger: N,
        } = (0, h.bG)(
            [oU.A, uN.A],
            () => {
                let e = null != s ? oU.A.getSubscriptionById(s) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? uN.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? R.intl.formatToPlainString(R.t.AbOLNu, { price: (0, cp.$g)(u, o.priceCurrency) })
                            : null,
                    c = cL(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? R.intl.formatToPlainString(cv.default["3aEgK6"], { date: c })
                        : l
                          ? R.intl.formatToPlainString(cv.default.KFSA3M, { date: c })
                          : R.intl.formatToPlainString(cv.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, n, i],
            cR,
        ),
        C = E.useCallback(() => {
            if (null == s) return;
            let e = oU.A.getSubscriptionById(s),
                t = null != e ? cL(e.currentPeriodEnd) : "";
            (0, nJ.A)({
                title: R.intl.string(cv.default.TEYPNR),
                subtitle: R.intl.formatToPlainString(cv.default.XR1WrB, { date: t }),
                confirmText: R.intl.string(R.t["cY+Oob"]),
                cancelText: R.intl.string(cv.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await oi.M2(s, l), await oi.hP());
                    } catch (e) {
                        cO.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        b = E.useCallback(() => {
            if (null == s) return;
            let e = oU.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? uN.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, cp.$g)(u, o.priceCurrency) : "",
                c = cL(e.currentPeriodEnd);
            (0, nJ.A)({
                title: R.intl.string(cv.default.o96qbc),
                subtitle: R.intl.formatToPlainString(cv.default["7n6Qq+"], { price: d, date: c }),
                confirmText: R.intl.string(R.t.iIvF2z),
                cancelText: R.intl.string(R.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, dr.ur)(r);
                        let t = e.items;
                        (await oi.nV(
                            e,
                            { status: S.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, ae.UC)(t, e.currency),
                            l,
                        ),
                            await oi.hP());
                    } catch (e) {
                        cO.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, A.jsxs)("div", {
        className: cj.nM,
        children: [
            (0, A.jsxs)("div", {
                className: cj.M4,
                children: [
                    (0, A.jsxs)("div", {
                        className: cj.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, A.jsx)("img", { className: cj.uP, src: a, alt: "" }),
                            (0, A.jsx)("div", { className: cj.tw }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: cj.CR,
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
                                          className: cj.CQ,
                                          children: [
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, A.jsx)(n0.D, {
                                                  className: cj.cL,
                                                  onClick: g,
                                                  "aria-label": R.intl.string(R.t.OpuAlK),
                                                  children: m
                                                      ? (0, A.jsx)(cA.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, A.jsx)(cE.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, A.jsx)(cT.A, { onClick: T, children: R.intl.string(cv.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: cj.Rd,
                children: [
                    (0, A.jsxs)("div", {
                        className: cj.Ff,
                        children: [
                            null != x &&
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: x,
                                }),
                            null != f &&
                                (N
                                    ? (0, A.jsxs)("div", {
                                          className: cj.ez,
                                          children: [
                                              (0, A.jsx)(iY.E, { size: "xs", color: "text-feedback-critical" }),
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
function cP(e) {
    let { servers: t } = e,
        n = (0, cx.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, cC.Y)(),
        l = (0, h.bG)([si.default], () => ae.Ay.canUseShopDiscounts(si.default.getCurrentUser())),
        s = E.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, h.yK)([oU.A], () => (0, cN.HY)(t, i, (e) => oU.A.getSubscriptionById(e)), [t, i]);
    E.useEffect(() => {
        let e = r.filter((e) => !uN.A.isLoadedForSKU(e) && !uN.A.isFetchingForSKU(e));
        e.length > 0 && (0, dr.jv)(e).catch(() => {});
    }, [r]);
    let a = E.useCallback(() => {
        ((0, tM.default)(), (0, t$.pX)(S.BVt.COLLECTIBLES_SHOP_WITH_TAB(cb.G2.GAME_SERVERS)));
    }, []);
    return (0, A.jsxs)("div", {
        className: cj.uW,
        children: [
            (0, A.jsxs)("div", {
                className: cj.wx,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: R.intl.string(cv.default.vCzwM7),
                    }),
                    (0, A.jsxs)("div", {
                        className: cj.h_,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.string(cv.default.y85Eg9),
                            }),
                            n &&
                                (0, A.jsx)(cT.A, {
                                    onClick: a,
                                    children: (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: R.intl.string(cv.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", {
                className: cj.p_,
                children: t.map((e) =>
                    (0, A.jsx)(cD, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var cG = n(55766),
    cU = n(696986),
    cM = n(364036);
function cV(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["KzCF/6"]) }),
            (0, A.jsx)(cU.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: cM.yV, children: R.intl.string(R.t["3D7qCu"]) }),
            (0, A.jsx)(cU.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: cM.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: cM.RI }),
                    (0, A.jsxs)("div", {
                        className: cM.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: cM.wx,
                                children: R.intl.string(R.t["KzCF/6"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: cM.h_,
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
var ck = n(872351),
    cw = n(9113),
    cF = n(599941),
    cB = n(384684),
    cz = n(2242);
let cX = [];
var cY = n(885574),
    cH = n(912851),
    cK = n(182744);
let cW = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, A.jsx)(n0.D, {
        onClick: i ? void 0 : n,
        className: cK.x6,
        children: (0, A.jsxs)("div", {
            className: cK.hQ,
            children: [
                i
                    ? (0, A.jsx)(a8.y, { type: a8.y.Type.PULSING_ELLIPSIS, className: cK.__invalid_spinner })
                    : (0, A.jsx)(H.E, { variant: "text-md/medium", className: cK.Pf, children: t }),
                (0, A.jsx)(dq.a, { size: "md", color: "currentColor", className: cK.UE }),
            ],
        }),
    });
};
var cZ = n(465932),
    cq = n(543767),
    cQ = n(951555),
    cJ = n(790284),
    c$ = n(636194),
    c0 = n(624456),
    c1 = n(710144),
    c2 = n(815332),
    c3 = n(162093),
    c6 = n(557506);
function c5(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: l, onClose: s } = e,
        r = (0, tw.GV)(),
        { analyticsLocations: a } = (0, eP.Ay)(tL.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = E.useState(!1),
                [i, l] = E.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return (n(!0), await oi.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === cz.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === cz.bN.INTANGIBLE),
        h = io()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        S = R.intl.formatToPlainString(R.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: h,
        });
    return (0, A.jsx)(lr.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: R.intl.string(R.t.EP6EPb), variant: "secondary", onClick: s },
            { variant: "critical-primary", text: R.intl.string(R.t.F6lUDF), onClick: c, loading: d },
        ],
        title: R.intl.string(R.t.O6l5tM),
        subtitle: S,
        onClose: s,
        children: (0, A.jsxs)(X.B, {
            gap: 8,
            children: [
                null != u ? (0, A.jsx)(iz.w, { type: "critical", children: u.message }) : null,
                (0, A.jsx)(c3.x, { listingId: i.id, guildId: n.guild_id, className: c6.P }),
            ],
        }),
    });
}
var c4 = n(319225),
    c8 = n(746080),
    c7 = n(883616);
function c9(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, A.jsxs)("div", {
        className: c7.L0,
        children: [
            (0, A.jsxs)("div", {
                className: c7.a5,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-deprecated-12/semibold", className: c7.HU, children: t }),
                    i &&
                        (0, A.jsx)(lt.m, {
                            text: l,
                            children: (0, A.jsx)(cY.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: c7.Mo,
                            }),
                        }),
                ],
            }),
            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", className: c7.sx, children: n }),
        ],
    });
}
function ge(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eP.Ay)(),
        [i] = (0, cq.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tL.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [l, s] = (0, h.yK)([oG.A], () => [oG.A.hasFetchedPaymentSources, oG.A.paymentSourceFetchError]);
    return null != i && (l || s)
        ? (0, A.jsx)(cQ.A, { subscription: t, currentInvoicePreview: i })
        : (0, A.jsx)(a8.y, {});
}
function gt(e) {
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
        : (0, A.jsx)(tQ.D, {
              label: R.intl.string(R.t["4neDM+"]),
              children: (0, A.jsx)("div", {
                  className: c7.__invalid_rowButtons,
                  children: n
                      ? (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.y3mAE4), onClick: r, loading: i })
                      : (0, A.jsxs)(A.Fragment, {
                            children: [
                                !t && !l && (0, A.jsx)(cW, { label: R.intl.string(R.t.FRbWR8), onClick: a }),
                                (0, A.jsx)(cW, { label: R.intl.string(R.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let gn = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, c0.M)(e),
                n = (0, h.bG)([c$.A], () => c$.A.getSubscriptionListingForPlan(t)),
                i = (0, h.bG)([c$.A], () =>
                    null != n ? c$.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, h.bG)([lh.A], () => lh.A.getGuild(i?.guild_id)),
                [s, r] = E.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, cF.XE)();
            E.useEffect(() => {
                s && null != l && null == c$.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = io()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, cp.$g)(t.price, t.currency) : "",
                              l = io()(t.createdAt).format("M/D/YY"),
                              s = t.status === S.Dmq.CANCELED,
                              r = t.status === S.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: l,
                              nextRenewalDate: n,
                              nextRenewalLabel: s ? R.intl.string(R.t.UAfot2) : R.intl.string(R.t.CVjLcM),
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
        [o, u] = E.useState(!1),
        d = (0, tw.GV)(),
        { analyticsLocations: g } = (0, eP.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: m } = (0, cZ.MH)(l?.id),
        T = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function p() {
        try {
            (u(!0),
                await oi.QP(t, g),
                (0, c4.E)({ title: R.intl.string(R.t.oPV2cy), body: R.intl.string(R.t.DdRizV) }));
        } finally {
            u(!1);
        }
    }
    let {
            isCancelled: x,
            isPastDue: f,
            subscriptionPrice: I,
            memberSince: _,
            nextRenewalDate: N,
            nextRenewalLabel: C,
            isTrial: b,
        } = a,
        y = n.soft_deleted || null == l || T;
    return (0, A.jsxs)("div", {
        className: c7.kL,
        children: [
            (0, A.jsx)(c1.A, {
                onClick: r,
                className: c7.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [
                            null != l && (0, A.jsx)(db.Ay, { guild: l, active: !0, size: db.Ay.Sizes.MEDIUM }),
                            (0, A.jsxs)("div", {
                                className: c7.if,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        className: c7.J5,
                                        children: null != l ? l.name : R.intl.string(R.t["He+cmd"]),
                                    }),
                                    (0, A.jsxs)("div", {
                                        className: c7.xp,
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-sm/normal",
                                                className: c7.KR,
                                                children: n.name,
                                            }),
                                            x
                                                ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t["7uFZGt"]) })
                                                : b
                                                  ? (0, A.jsx)(tn.Lp, {
                                                        text: R.intl.string(R.t["6anton"]),
                                                        color: nQ.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : f
                                                    ? (0, A.jsx)(lt.m, {
                                                          text: R.intl.string(R.t.eSuJE2),
                                                          children: (0, A.jsx)("div", {
                                                              children: (0, A.jsx)(tn.Lp, {
                                                                  className: c7.qc,
                                                                  text: R.intl.string(R.t.NrRwIl),
                                                                  color: nQ.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            T
                                                ? (0, A.jsx)(lt.m, {
                                                      text: R.intl.string(R.t.nv1IqK),
                                                      children: (0, A.jsx)("div", {
                                                          children: (0, A.jsx)(tn.Lp, {
                                                              text: R.intl.string(R.t["sBl3X/"]),
                                                              color: nQ.A.colors.BACKGROUND_MOD_MUTED.css,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, A.jsx)(n0.D, {
                                onClick: i(r),
                                "aria-label": R.intl.string(R.t.e5eQOy),
                                "aria-controls": d,
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, A.jsx)(dq.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ir()(c7.D6, { [c7.S7]: s }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && s
                ? (0, A.jsxs)("div", {
                      id: d,
                      children: [
                          (0, A.jsx)("div", { className: c7.yF }),
                          (0, A.jsx)(c2.A, { groupListingId: i.id, subscription: t, className: c7.kE }),
                          (0, A.jsxs)("div", {
                              className: c7.Zx,
                              children: [
                                  (0, A.jsx)(c9, { label: C, value: N }),
                                  (0, A.jsx)(c9, {
                                      label: R.intl.string(R.t.dltUMH),
                                      value: I,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? R.intl.string(R.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, A.jsx)(c9, { label: R.intl.string(R.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, A.jsx)(cU.h, { size: 16 }),
                          !x &&
                              !T &&
                              (0, A.jsx)(tQ.D, {
                                  label: R.intl.string(R.t.wmMFvA),
                                  children: (0, A.jsx)(ge, { subscription: t }),
                              }),
                          !y &&
                              (0, A.jsx)(gt, {
                                  isTrial: b,
                                  isCancelled: x,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: m,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, la.openModal)((t) => (0, A.jsx)(c5, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, t$.pX)(S.BVt.CHANNEL(l.id, c8.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tM.default)(),
                                          cH.A.show(
                                              S.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              R.intl.string(R.t.DvbaM4),
                                              () => {
                                                  (cJ.A.setState({ subsection: eC.nR }),
                                                      (0, nl.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL));
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
var gi = n(661097);
let gl = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, h.bG)([cB.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [cB.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? cz.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? cz.M_.NONE
                                  : cz.M_.IN_SUBSCRIPTION_SERVER;
                        })([cB.A]),
                    ) === cz.M_.SUBSCRIBED,
                n = (0, h.bG)([oU.A], () => oU.A.getActiveGuildSubscriptions()),
                i = E.useRef(!1);
            return (
                E.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = oU.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !oU.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), oi.hP());
                }, [e, t]),
                n ?? cX
            );
        })(),
        { loading: i } = (0, cF.eb)(n);
    return ((0, cw.A)(ou.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, A.jsx)(a8.y, {})
        : 0 === n.length
          ? null
          : (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(_.$, { text: R.intl.string(R.t.hqyhKQ), icon: ck.z, variant: "secondary", onClick: t }),
                    (0, A.jsx)(cU.h, { size: 10 }),
                    (0, A.jsx)(n$.n, {
                        label: R.intl.string(R.t["KzCF/6"]),
                        description: R.intl.string(R.t["Y+ucR7"]),
                        children: (0, A.jsx)("div", {
                            className: gi.A,
                            children: n.map((e) => (0, A.jsx)(gn, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var gs = n(327479),
    gr = n(932012);
function ga(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(p.D, { variant: "heading-md/bold", children: R.intl.string(R.t["48ywCu"]) }),
            (0, A.jsx)(cU.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: gr.yV, children: R.intl.string(R.t.VWxmSo) }),
            (0, A.jsx)(cU.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: gr.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: gr._e }),
                    (0, A.jsxs)("div", {
                        className: gr.FS,
                        children: [
                            (0, A.jsx)(p.D, {
                                variant: "heading-xl/semibold",
                                className: gr.wx,
                                children: R.intl.string(R.t["48ywCu"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: gr.h_,
                                children: R.intl.format(R.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(gs.A, { onClick: t, text: R.intl.string(R.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var go = n(548411),
    gu = n(417098),
    gd = n(143582),
    gc = n(915043),
    gg = n(631466);
function gm(e) {
    let { className: t, header: n, headerClassName: i, children: l } = e,
        s = E.useMemo(() => {
            let e = !1;
            return (
                E.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, A.jsxs)("div", {
        className: ir()(gg.iE, t),
        children: [
            (0, A.jsx)("div", { className: ir()(gg.wx, i), children: n }),
            s && (0, A.jsx)("div", { className: gg.Qs, children: l }),
        ],
    });
}
var gA = n(885996),
    gE = n(144165),
    gh = n(664121),
    gS = n(950305),
    gT = n(943775),
    gp = n(123791),
    gx = n(900797),
    gf = n(611643);
let gI = E.createContext({ isOpen: !1, toggleOpen: () => {} });
function g_(e) {
    let { children: t } = e,
        [n, i] = E.useReducer((e) => !e, !1),
        l = E.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, A.jsx)(gI.Provider, { value: l, children: t(n) });
}
g_.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = E.useContext(gI),
        s = i ? gx.t : dq.a,
        r = null != n ? n : i ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.XJuakA);
    return (0, A.jsxs)(n0.D, {
        className: ir()(gf.L, t),
        onClick: l,
        children: [
            (0, A.jsx)(H.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, A.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var gN = n(627363),
    gC = n(243217),
    gb = n(328968),
    gy = n(163437),
    gv = n(3432);
function gj(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var gO = n(562312),
    gL = (((i = {})[(i.LOADING = 0)] = "LOADING"), (i[(i.DONE = 1)] = "DONE"), (i[(i.ERROR = 2)] = "ERROR"), i);
function gR(e) {
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
            isOrphanedGuildSubscription: T,
            renewalPlan: x,
        } = (0, h.cf)(
            [uN.A, uC.A, gb.A, lh.A],
            () => {
                let e,
                    n = uN.A.get(r),
                    i = null != n ? uC.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? gb.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, gy.PJ)(o.skuFlags),
                    d = u && null != l ? lh.A.getGuild(l) : void 0,
                    c = (0, gy.Uo)(t, i),
                    g = u && null != l && null == d;
                if (!1 === c && null != s && s.items.length > 0) {
                    let t = s.items[0];
                    e = uN.A.get(t.planId) ?? void 0;
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
        { data: f } = (0, gN.YY)(a),
        I = E.useMemo(() => (null != f ? (0, gT.A)(f, 100) : null), [f]),
        _ = g?.deleted ?? !1,
        N = null != g && (0, gy.Se)(g),
        C = t.status === S.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eP.Ay)(),
        [y] = (0, cq.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tL.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = gj(t.currentPeriodEnd),
        j = 0 === i;
    return (0, A.jsxs)(gm, {
        headerClassName: gO.dL,
        header:
            !1 === j
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsxs)("div", {
                              className: gO.VW,
                              children: [
                                  null != I &&
                                      (0, A.jsx)(gE._, { src: I.href, imageClassName: gO.Z2, width: 40, height: 40 }),
                                  (0, A.jsxs)("div", {
                                      className: gO.aF,
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
                              className: gO.Pz,
                              children:
                                  null != f &&
                                  null != u &&
                                  null != g &&
                                  (0, A.jsx)(gM, {
                                      subscription: t,
                                      app: f,
                                      guild: c,
                                      sku: g,
                                      storeListing: u,
                                      isCancelled: m,
                                      isOrphanedGuildSubscription: T,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: x?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, A.jsx)(a8.y, { type: a8.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, A.jsx)(gU, {
                    type: "warning",
                    title: N
                        ? R.intl.formatToPlainString(R.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : R.intl.formatToPlainString(R.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && T && (0, A.jsx)(gU, { type: "warning", title: R.intl.string(R.t.SmSP8Q) }),
            C && (0, A.jsx)(gU, { type: "danger", title: R.intl.string(R.t.fvOqBo) }),
            (0, A.jsxs)("div", {
                className: gO.zH,
                children: [
                    (0, A.jsx)(gG, {
                        title: R.intl.string(R.t["5D/KEH"]),
                        content: d
                            ? (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsxs)("span", {
                                          className: gO.yW,
                                          children: [(0, A.jsx)(gh.R, { size: "xs" }), R.intl.string(R.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, A.jsxs)("span", {
                                              className: gO._t,
                                              children: [
                                                  (0, A.jsx)(H.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: R.intl.format(R.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, A.jsx)(db.Ay, { guild: c, size: db.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, A.jsxs)("span", {
                                  className: gO.yW,
                                  children: [(0, A.jsx)(gS.UserIcon, { size: "xs" }), R.intl.string(R.t["6anEVv"])],
                              }),
                    }),
                    (0, A.jsx)(gD, { invoicePreview: y, subscriptionPlan: o }),
                    (0, A.jsx)(gG, {
                        title: R.intl.string(R.t.dnUzb6),
                        content: gj(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, A.jsx)(gP, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: x }),
                ],
            }),
            (0, A.jsx)(gk, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: _,
                isCancelled: m,
            }),
            null != f &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, A.jsx)(gV, { appId: f.id, listingBenefits: u.benefits }),
        ],
    });
}
function gD(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, A.jsx)(gG, { title: R.intl.string(R.t.KI7ERx), content: "" });
    let i = (0, cp.CE)((0, cp.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, A.jsx)(gG, { title: R.intl.string(R.t.KI7ERx), content: i });
    let s = (0, cp.CE)((0, cp.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, A.jsx)(gG, {
        title: R.intl.string(R.t.KI7ERx),
        content: (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: s }),
                s !== i &&
                    (0, A.jsx)(lt.m, {
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
function gP(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, cp.CE)((0, cp.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, A.jsx)(gG, {
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
    return (0, A.jsx)(gG, { title: t ? R.intl.string(R.t.enxcAl) : R.intl.string(R.t["Ms+6Zq"]), content: n });
}
function gG(e) {
    let { title: t, content: n } = e;
    return (0, A.jsxs)("div", {
        className: gO.nM,
        children: [
            (0, A.jsx)(H.E, { variant: "text-sm/medium", children: t }),
            (0, A.jsx)(H.E, { variant: "text-sm/medium", className: gO.u4, children: n }),
        ],
    });
}
function gU(e) {
    let { type: t, title: n } = e;
    return (0, A.jsx)(r$.p, {
        messageType: "warning" === t ? r$.Y.WARNING : r$.Y.ERROR,
        className: gO.Xm,
        children: (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
    });
}
function gM(e) {
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
        c = (0, gy.Se)(l),
        { analyticsLocations: g } = (0, eP.Ay)(),
        [m, S] = E.useState(!1),
        T = (0, gp.C)(t.id),
        p = (0, h.bG)([uC.A], () => uC.A.getParentSKU(i.skuId), [i.skuId]),
        x = E.useMemo(() => {
            var e, t;
            let n;
            return null == p
                ? []
                : ((e = i.id),
                  (t = T.subscriptions),
                  (n = new Set(p.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, T, p]),
        f = 0 !== x.length;
    async function I() {
        try {
            S(!0);
            let { subscription: e } = await (0, oi.QP)(s, g);
            if (null == e) return;
            (0, la.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, A.jsx)(t, { ...n, storeListing: i, subscription: gC.A.createFromServer(e) });
            });
        } finally {
            S(!1);
        }
    }
    return (0, A.jsxs)("div", {
        className: gO.fw,
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
                            (0, la.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, A.jsx)(e, { ...n, application: t, storeListing: i, subscription: s, guild: o });
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
                            currentSubscription: s,
                            alternativeListings: x,
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
function gV(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, A.jsx)(g_, {
        children: (e) =>
            (0, A.jsxs)("div", {
                className: gO.PX,
                children: [
                    (0, A.jsxs)("div", {
                        className: gO.wV,
                        children: [
                            e && (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: R.intl.string(R.t.mORL67) }),
                            (0, A.jsx)(g_.Toggle, {
                                className: gO.Bh,
                                text: e ? R.intl.string(R.t.gsbFAw) : R.intl.string(R.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, A.jsx)(gA.FY, { header: i, icon: (0, gv.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function gk(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, A.jsx)("div", {
                className: gO.Ji,
                children: (0, A.jsx)(tQ.D, {
                    label: R.intl.string(R.t.azZaZa),
                    children: (0, A.jsx)(a8.y, { type: a8.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, A.jsx)("div", {
                  className: gO.Ji,
                  children: (0, A.jsxs)(gu.$T, {
                      color: gu.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          R.intl.format(R.t.IIHUUF, { subscriptionId: t.id }),
                          (0, A.jsx)("br", {}),
                          R.intl.format(R.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, A.jsx)("div", {
                  className: gO.Ji,
                  children: (0, A.jsx)(tQ.D, {
                      label: R.intl.string(R.t.azZaZa),
                      children: (0, A.jsx)(cQ.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var gw = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
n(938796);
var gF = n(38405);
let gB = (0, h.UT)(uN.A, {
    getQueryId: S.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = uN.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && gF.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, dr.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var gz = n(240248),
    gX = n(237218),
    gY = n(763064);
function gH(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = E.useState(!1),
        [r, a] = E.useState(null),
        o =
            null != r &&
            (0, A.jsx)("button", {
                className: gY.x6,
                onClick: () => s((e) => !e),
                children: (0, A.jsxs)(H.E, {
                    className: gY.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? R.intl.string(R.t["JQX/Pb"]) : R.intl.string(R.t.Fbrd8J),
                        l
                            ? (0, A.jsx)(gx.t, { color: nQ.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, A.jsx)(dq.a, { color: nQ.A.colors.TEXT_BRAND, size: "xs" }),
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
        null != r && (g = l ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, A.jsxs)("div", {
            children: [
                (0, A.jsx)(H.E, {
                    ...i,
                    className: gY.Qs,
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
var gK = n(920352);
function gW(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = E.useMemo(() => (null == n.thumbnail ? null : (0, gX.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = gB(n.skuId),
        u = E.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, cp._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, A.jsxs)(gm, {
              className: ir()(gK.iE, i),
              header: (0, A.jsxs)(A.Fragment, {
                  children: [
                      (0, A.jsxs)("div", {
                          className: gK.qd,
                          children: [
                              null != a &&
                                  (0, A.jsx)(gE._, { src: a.href, imageClassName: gK.rW, width: 48, height: 48 }),
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
                  !(0, gz.uJ)(r) &&
                      (0, A.jsx)("div", {
                          className: gK.h_,
                          children: (0, A.jsx)(gH, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, A.jsx)("div", {
                          className: gK.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, A.jsx)(gA.FY, { header: n, icon: (0, gv.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var gZ = n(185438),
    gq = n(683380);
function gQ(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, gT.A)(t, 100),
        u = (0, gy.PJ)(r.flags),
        d = u ? gh.R : gS.UserIcon,
        c = u ? R.intl.string(R.t["46YF2D"]) : R.intl.string(R.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, h.bG)([lh.A], () => (u && null != g ? lh.A.getGuild(g) : void 0), [g, u]),
        E = (0, h.bG)(
            [uC.A],
            () => {
                if (null != a) return uC.A.get(a);
            },
            [a],
        ),
        S = gj(n.currentPeriodEnd);
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsxs)("div", {
                className: gq.wx,
                children: [
                    null != o && (0, A.jsx)(gE._, { src: o.href, imageClassName: gq.Z2, width: 48, height: 48 }),
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)(p.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, A.jsxs)("div", {
                                className: gq.p4,
                                children: [
                                    (0, A.jsxs)(p.D, {
                                        variant: "heading-md/normal",
                                        className: gq.N4,
                                        children: [(0, A.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, A.jsxs)(A.Fragment, {
                                            children: [
                                                (0, A.jsx)(H.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, A.jsxs)("span", {
                                                    className: gq.vP,
                                                    children: [
                                                        (0, A.jsx)(db.Ay, { guild: m, size: db.Ay.Sizes.SMOL }),
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
            (0, A.jsx)(g_, {
                children: (e) =>
                    (0, A.jsxs)("div", {
                        className: gq._B,
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
                            (0, A.jsx)(g_.Toggle, {
                                text: e ? R.intl.string(R.t["1Rkq/E"]) : R.intl.string(R.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, A.jsxs)("div", {
                className: gq.x0,
                children: [
                    (0, A.jsx)(gW, {
                        storeListing: i,
                        className: gq.o3,
                        cta: (0, A.jsxs)("div", {
                            className: gq.cJ,
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
                    l.map((e) =>
                        e.skuId === a
                            ? (0, A.jsx)(
                                  gW,
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
                            : (0, A.jsx)(gJ, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function gJ(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, gZ.A)({
            analyticsLocation: S.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, A.jsx)(gW, {
        storeListing: t,
        cta: (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(R.t["+KwmBt"]), onClick: l }),
    });
}
class g$ extends E.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, A.jsxs)(gu.$T, {
                  color: gu.Hv.DANGER,
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
function g0(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = E.useState({ route: gw.HOME }),
        { route: s } = i;
    function r() {
        l({ route: gw.HOME });
    }
    let a = (e) => {
            (l({ route: gw.SWITCH_APP_PLANS, ...e }), n(R.intl.string(R.t.VFqtkP), r));
        },
        [o, u] = E.useState({});
    E.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: gL.LOADING })),
                (0, gd._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: gL.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: gL.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, gc.E)(),
        c = d !== gc.mJ.LOADED;
    switch (s) {
        case gw.HOME:
            return (0, A.jsx)(A.Fragment, {
                children: t.map((e) =>
                    (0, A.jsx)(
                        g$,
                        {
                            subscription: e,
                            children: (0, A.jsx)(gR, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? gL.LOADING : (o[e.id] ?? gL.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case gw.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, A.jsx)(gQ, { ...m, navigateToHome: r });
        default:
            (0, ii.xb)(s);
    }
}
var g1 = n(707989);
function g2(e) {
    let { onGoBack: t } = e,
        n = (0, h.yK)(
            [oU.A],
            () =>
                oU.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = E.useState();
    return (
        null == i && (i = (0, A.jsx)(g3, { onBack: t, title: R.intl.string(R.t["DB/m9a"]) })),
        (0, A.jsxs)("div", {
            children: [
                i,
                (0, A.jsx)("div", {
                    className: g1.A,
                    children: (0, A.jsx)(g0, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, A.jsx)(g3, {
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
function g3(e) {
    let { onBack: t, title: n } = e;
    return (0, A.jsxs)("div", {
        className: g1.D,
        children: [
            (0, A.jsx)(i9.K, {
                "aria-label": R.intl.string(R.t["13/7kX"]),
                icon: () => (0, A.jsx)(go.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, A.jsx)(p.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var g6 = n(881489),
    g5 = n(366999),
    g4 = n(148155),
    g8 = n(391659);
function g7(e) {
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
        ? ((t = R.intl.string(g4.default["/S02sx"])), (n = R.intl.string(g4.default.OPJNST)))
        : i
          ? ((t = R.intl.string(R.t["hT6i/0"])),
            (n = null != a ? R.intl.format(R.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = R.intl.string(R.t["3G0CTC"])),
            (n = r === tX.xc.FP_SUB_PAUSED ? R.intl.format(R.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = ir()({ [g8.Hs]: i, [g8.mT]: !i }),
        d = ir()({ [g8.CQ]: i, [g8.ZM]: !i }),
        c = ir()({ [g8.EM]: !i });
    return (0, A.jsxs)("div", {
        className: g8.r6,
        children: [
            (0, A.jsxs)("div", {
                className: g8.Nv,
                children: [
                    (0, A.jsx)(p.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, A.jsx)("div", {
                    className: g8.ZS,
                    children: (0, A.jsx)("div", {
                        className: u,
                        children: (0, A.jsx)(H.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let g9 = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, ae.kX)(t),
        r = s.length > 0,
        a = (0, g5.Ay)(t.endsAt, g5.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, A.jsx)("div", {
        children: (0, A.jsxs)("div", {
            className: ir()(n, g8.f8),
            children: [
                (0, A.jsx)("div", {
                    className: g8.J_,
                    children: (0, A.jsxs)("div", {
                        className: g8.Bh,
                        children: [
                            (0, A.jsx)("div", {
                                className: g8.xt,
                                children: (0, A.jsx)(rJ.t, { size: "md", color: "white", className: g8.T8 }),
                            }),
                            (0, A.jsx)("div", {
                                className: g8.pt,
                                children: (0, A.jsx)(p.D, {
                                    variant: "heading-md/semibold",
                                    children: R.intl.string(R.t.DFMPWS),
                                }),
                            }),
                            (0, A.jsx)(H.E, {
                                className: g8.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : R.intl.string(R.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, A.jsx)(g7, {
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
var me = n(983048);
function mt(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, h.yK)([uN.A], () => [uN.A.get(i), null != s ? uN.A.get(s.planId) : null]);
    if (null == o || ae.Ay.getInterval(i).intervalType !== tX.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, ae.z4)(i),
        m = ae.Ay.getDisplayName(i);
    if (a) t = R.intl.string(g4.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === S.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, ae._e)(e, r);
        t = R.intl.formatToPlainString(R.t["5CNRRA"], { date: n ?? 0 });
    } else t = R.intl.formatToPlainString(R.t.eNXZ5O, { planName: m });
    let E = g || n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, A.jsxs)("div", {
        className: g8.Bh,
        children: [
            (0, A.jsx)("div", {
                className: ir()({
                    [g8.bY]: g,
                    [g8.sr]: o.skuId === tX.pe.TIER_0,
                    [g8.lP]: o.skuId === tX.pe.TIER_1,
                    [g8.eb]: o.skuId === tX.pe.TIER_2,
                }),
                children: g
                    ? (0, A.jsx)(dl._, { size: "md", color: "currentColor", className: g8.Kk })
                    : (0, A.jsx)(rJ.t, { size: "md", color: "currentColor", className: g8.Kk }),
            }),
            (0, A.jsxs)("div", {
                className: g8.pt,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        children: R.intl.format(R.t.LzobT9, { planName: m }),
                    }),
                    !E &&
                        (0, A.jsx)(p.D, {
                            className: g8.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, A.jsx)(H.E, {
                className: g8.PJ,
                variant: "text-md/semibold",
                children: R.intl.format(R.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let mn = function (e) {
    let { className: t, entitlements: n } = e,
        i = B()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, h.yK)([uc.A], () => uc.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, h.bG)([oU.A], () => oU.A.getPremiumSubscription()),
        r = (0, h.bG)([oU.A], () => null == oU.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tX.gD.PREMIUM_MONTH_TIER_1),
        o = (0, h.bG)([si.default], () => si.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)("div", {
                className: ir()(t, g8.xF, g8.J_),
                children: Object.keys(i).map((e) =>
                    (0, A.jsx)(
                        mt,
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
                (0, A.jsxs)("div", {
                    children: [
                        (0, A.jsx)(H.E, {
                            className: g8.eT,
                            variant: "text-md/normal",
                            children: R.intl.string(R.t["VNr4+O"]),
                        }),
                        (0, A.jsx)(me.i, {}),
                    ],
                }),
        ],
    });
};
var mi = n(902782);
function ml(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        [s] = (0, cq.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tL.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? mi.r : mi.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ae.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = uN.A.get(o);
    ta()(null != u, "Missing plan");
    let d = (0, cp.$g)(s.total, s.currency);
    return (
        u.interval === tX.WT.YEAR
            ? (t = R.intl.format(R.t["jPz/39"], {
                  price: d,
                  termsUrl: S.X7G.TERMS,
                  paidURL: S.X7G.PAID_TERMS,
                  privacyUrl: S.X7G.PRIVACY,
              }))
            : u.interval === tX.WT.MONTH &&
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
function ms(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === S.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, A.jsx)(ml, { subscription: t, withOverheadSeparator: n });
}
var mr = n(37397),
    ma = n(689255);
let mo = { [eC.nR]: "role_subscriptions_panel", [eC.PZ]: "application_subscriptions_panel" };
function mu() {
    return (0, A.jsx)(od.Z, {
        className: ma.wb,
        type: od.Z.Types.CUSTOM,
        children: (0, A.jsxs)(lg.A, {
            align: lg.A.Align.CENTER,
            children: [
                (0, A.jsx)(i0.A, { game: null, size: i0.M.SMALL, className: ma.pV }),
                (0, A.jsx)("span", { className: ma.O, children: R.intl.string(R.t["jy/hyj"]) }),
            ],
        }),
    });
}
function md(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, cc._)(e, t));
}
function mc() {
    let e = (0, h.bG)([uc.A], () => uc.A.getForApplication(tX.tv), [], md);
    return (
        E.useEffect(() => {
            (0, uB.LM)(tX.tv);
        }, []),
        (0, A.jsx)(n$.n, {
            label: R.intl.string(R.t["2GKrvn"]),
            description: R.intl.string(R.t.Z5b2Gf),
            children:
                null != e && ae.Ay.hasAccountCredit(e)
                    ? (0, A.jsx)(mn, { className: ma.fX, entitlements: e })
                    : (0, A.jsx)(mu, {}),
        })
    );
}
function mg() {
    return (0, A.jsx)("hr", { className: ma.hr });
}
let mm = function () {
        var e;
        let t = (0, h.bG)([oU.A], () => oU.A.getPremiumTypeSubscription()),
            n = (0, cg.A)({ subscriptionFilter: (e) => mr.Hy.has(e.status) }),
            i = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, h.bG)(
                [oG.A],
                () => (null != t && null != t.paymentSourceId ? oG.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, h.bG)([oU.A], () => oU.A.hasFetchedSubscriptions()),
            a = (0, h.bG)([or.A], () => or.A.isBusy),
            o = (0, da.Y)(),
            u = cJ.A.useField("subsection"),
            d = cJ.A.useField("scrollToGameServers"),
            g = E.useRef(null);
        E.useEffect(() => {
            (0, n4._)(null != u ? mo[u] : c.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let m = (0, h.bG)([oU.A], () => oU.A.getActiveApplicationSubscriptions()?.length ?? 0),
            T = (0, h.bG)(
                [oU.A],
                () =>
                    Object.values(oU.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === S.rzx.GUILD)
                        .filter((e) => e.status !== S.Dmq.ENDED).length,
            ),
            x = (0, h.bG)([oU.A], () =>
                Object.values(oU.A.getSubscriptions() ?? {}).some((e) => e.type === S.rzx.GAME_SERVER),
            ),
            { servers: f } = (0, cG.f)({ enabled: x }),
            I = (0, h.yK)([oU.A], () => (0, cN.eP)(f, (e) => oU.A.getSubscriptionById(e)), [f]),
            _ = (0, dd.A)({ forceFetch: !0 }),
            N = (0, g6.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            b =
                !(N && !(_.unactivatedUnits.length > 0)) &&
                (_.fractionalState !== tX.xc.NONE || _.unactivatedUnits.length > 0);
        return (E.useEffect(() => {
            d &&
                r &&
                o &&
                I.length > 0 &&
                (g.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                cJ.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, I.length]),
        E.useEffect(
            () => (
                e5.h.wait(() => {
                    ((0, dr.zS)(), oi.hP(), (0, ds.CD)(), oi.$o());
                }),
                function () {
                    cJ.A.resetState();
                }
            ),
            [],
        ),
        te.A.enabled)
            ? (0, A.jsx)(a5.A, {})
            : r && o
              ? u === eC.nR
                  ? (0, A.jsx)(gl, { onGoBack: () => cJ.A.setState({ subsection: null }) })
                  : u === eC.PZ
                    ? (0, A.jsx)(g2, { onGoBack: () => cJ.A.setState({ subsection: null }) })
                    : (0, A.jsx)("div", {
                          className: ma.kL,
                          children: (0, A.jsxs)("div", {
                              className: ma.Qs,
                              children: [
                                  l ? (0, A.jsx)(mr.Sb, {}) : null,
                                  null != t
                                      ? (0, A.jsx)(mr.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, A.jsx)(mr.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, A.jsxs)("section", {
                                          children: [
                                              (0, A.jsx)(p.D, {
                                                  variant: "heading-md/bold",
                                                  className: ma.HL,
                                                  children: R.intl.string(R.t.Obre8v),
                                              }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-md/normal",
                                                  className: ma.JU,
                                                  children: R.intl.format(R.t["7Zi06b"], {
                                                      helpCenterLink: ex.A.getArticleURL(
                                                          S.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, A.jsx)(g9, {
                                                  className: ma.fX,
                                                  fractionalPremiumInfo: _,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, A.jsx)(mc, {}),
                                  T > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(mg, {}),
                                              (0, A.jsx)(cV, {
                                                  count: T,
                                                  onClickManageSubscription: () => cJ.A.setState({ subsection: eC.nR }),
                                              }),
                                          ],
                                      }),
                                  m > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(mg, {}),
                                              (0, A.jsx)(ga, {
                                                  count: m,
                                                  onClickManageSubscription: () => {
                                                      (cJ.A.setState({ subsection: eC.PZ }),
                                                          tt.default.track(
                                                              S.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  I.length > 0 &&
                                      (0, A.jsxs)("div", {
                                          ref: g,
                                          children: [(0, A.jsx)(mg, {}), (0, A.jsx)(cP, { servers: I })],
                                      }),
                                  (0, A.jsx)(mg, {}),
                                  null != t ? (0, A.jsx)(ms, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, A.jsx)("div", { className: ir()(ma.kL, ma.Lq), children: (0, A.jsx)(a8.y, {}) });
    },
    mA = (0, d.E2)(c.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        Component: () => (0, A.jsx)(mm, {}),
    }),
    mE = (0, d.zZ)(c.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        buildLayout: () => [mA],
    }),
    mh = (0, d.t_)(c.X.SUBSCRIPTIONS_PANEL, { useTitle: () => R.intl.string(R.t.trSpHX), buildLayout: () => [mE] }),
    mS = (0, d.i4)(c.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.trSpHX),
        icon: cu.L,
        usePersistentBadge: function () {
            let e = (0, cd.l)();
            return E.useMemo(
                () => ({
                    badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, A.jsx)(iY.E, { size: "xs", color: nQ.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [mh],
    }),
    mT = (0, d.WI)(c.X.BILLING_SECTION, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [di, co, mS, u4, oK],
    });
var mp = n(540999),
    mx = n(306471),
    mf = n(964355),
    mI = n(172272);
let m_ = (0, d.zD)(c.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isAxeEnabled),
        setValue: (e) => (0, s2.x)({ axeEnabled: e }),
    }),
    mN = (0, d.zD)(c.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, s2.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var mC = n(276086),
    mb = n(354328);
let my = (0, d.zD)(c.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, mb.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, mC.L)("highlight_mana_components", e);
        },
    }),
    mv = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, mb.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, mC.L)("highlight_mana_text_overrides", e);
        },
    }),
    mj = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, mb.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, mC.L)("highlight_mana_text", e);
        },
    }),
    mO = (0, d.zD)(c.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, mb.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, mC.L)("highlight_void_toggleables", e);
        },
    }),
    mL = (0, d.sN)(c.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, h.bG)([s3.default], () => s3.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: mI.YR,
        markers: Array.from({ length: mI.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => mI.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            mI.Or.getState().setHorizontalSpacing(e);
        },
    }),
    mR = (0, d.zD)(c.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, s2.x)({ layoutDebuggingEnabled: e });
        },
    }),
    mD = (0, d.sN)(c.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, h.bG)([s3.default], () => s3.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: mI.YR,
        markers: Array.from({ length: mI.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => mI.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            mI.Or.getState().setVerticalSpacing(e);
        },
    }),
    mP = (0, d.zZ)(c.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [mN, mR, mL, mD, my, mj, mv, mO, m_],
    });
var mG = n(246605),
    mU = n(274184);
let mM = (0, d.E2)(c.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, h.bG)([mU.Ay], () => mU.Ay.getActionTriggeredSurveyOverride());
            return (0, A.jsx)(Aa, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => mG.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    mV = (0, d.zD)(c.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var mk = n(396478),
    mw = n(173936),
    mF = n(103557),
    mB = n(414079),
    mz = n(148810),
    mX = n(380610),
    mY = n(986238),
    mH = n(428524),
    mK = n(252149),
    mW = n(221851);
let mZ = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    mq = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function mQ(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class mJ extends E.Component {
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
        return (0, A.jsxs)(lg.A, {
            direction: lg.A.Direction.VERTICAL,
            className: ir()(mH.oS, mW.SX, mK.N, mH.nM),
            children: [
                (0, A.jsx)(mB.A, {
                    className: ir()(mH.lL, { [mH.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, A.jsxs)(lg.A, {
                    className: mW.QB,
                    children: [
                        (0, A.jsx)(lg.A.Child, {
                            basis: "50%",
                            children: (0, A.jsx)(i7.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: mq,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, A.jsx)(lg.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, A.jsx)(lo.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, A.jsxs)(lg.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, A.jsx)(H.E, {
                                className: mH.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, A.jsxs)(H.E, {
                            variant: "text-sm/normal",
                            className: mH.AS,
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
class m$ extends E.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, mX.bD)();
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
        return B().without(mZ, ...t);
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
        this.setState({ buildOverrides: B().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, mz.Zk)(e);
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
        (0, la.openModal)((t) => (0, A.jsx)(m0, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, A.jsx)(mk.pp, {
            theme: nM.A.theme,
            className: ir()(mW.eT, mW.SX),
            children: (0, A.jsx)(mk.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : B().map(e, (e, i) =>
                  (0, A.jsx)(
                      mJ,
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
            : (0, A.jsx)(lt.m, {
                  text: "Generate Public Link",
                  children: (0, A.jsx)(i9.K, {
                      variant: "secondary",
                      icon: mw.LinkIcon,
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
                    disabled: mQ(t ?? {}),
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
            ? (0, A.jsx)(a8.y, { className: mW.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                mQ(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, A.jsx)(H.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, A.jsx)(n$.n, {
            children: (0, A.jsxs)(X.B, {
                gap: 16,
                children: [
                    (0, A.jsx)(i7.l, {
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
                    (0, A.jsxs)(sF.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class m0 extends E.Component {
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
        e.key === ly.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, mz.SB)(e);
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
        return mQ(this.props.buildOverrides ?? {});
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
            d = mY.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, A.jsxs)(X.B, {
            gap: 20,
            children: [
                (0, A.jsx)(i7.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: mY.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, A.jsx)(i7.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: mY.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, A.jsxs)(X.B, {
                          gap: 20,
                          children: [
                              (0, A.jsx)(lo.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iF.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, A.jsx)(i7.l, {
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
                    : (0, A.jsx)(mF.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, A.jsx)(mF.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, A.jsx)(tJ.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, A.jsx)("div", {});
        let n = r$.Y.INFO;
        switch (t) {
            case 0:
                n = r$.Y.ERROR;
                break;
            case 1:
                n = r$.Y.WARNING;
        }
        return (0, A.jsx)(r$.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, A.jsx)(lr.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, A.jsx)(uM.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let m1 = (0, d.E2)(c.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: m$ });
var m2 = n(256311),
    m3 = n(883600);
let m6 = (0, d.E2)(c.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, h.bG)([m3.A], () => m3.A.overrideId());
        async function t(e) {
            let t = m3.A.getChangelog(e, "en-US");
            return null != t ? t : ((await m2.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, A.jsx)(Aa, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => m2.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var m5 = n(506774);
let m4 = new Date("2018-01-01"),
    m8 = (0, d.Tf)(c.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === oo.default.fromTimestamp(m4.getTime()),
        onClick: () => (m5.w.set("lastChangeLogDate", m4), L.pK.updateSetting(oo.default.fromTimestamp(m4.getTime()))),
    }),
    m7 = (0, d.zD)(c.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, h.bG)([s3.default], () => s3.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, h.bG)(
                [s3.default],
                () => s3.default.disableAppCollectionsCache || s3.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, s2.x)({ disableAppCollectionsCache: e }),
    }),
    m9 = (0, d.zD)(c.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isForcedCanary),
        setValue: (e) => {
            (0, s2.x)({ canary: e });
        },
    }),
    Ae = (0, d.zD)(c.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.sourceMapsEnabled),
        setValue: (e) => (0, s2.x)({ sourceMapsEnabled: e }),
    }),
    At = (0, d.zD)(c.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, s2.x)({ onlyShowPreviewAppCollections: e }),
    });
var An = n(10094),
    Ai = n(683760);
let Al = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tX.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tX.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tX.PremiumTypes.TIER_2 },
    ],
    As = (0, d.Hn)(c.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => Al,
        clearable: !0,
        useValue: () =>
            (0, h.bG)([Ai.A], () => {
                let e = Ai.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, An.O)(null, void 0)
                : null === e
                  ? (0, An.O)(void 0, void 0)
                  : (0, An.O)(0 === e ? null : e, void 0);
        },
    }),
    Ar = (0, d.E2)(c.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, h.bG)([mU.Ay], () => mU.Ay.getSurveyOverride());
            return (0, A.jsx)(Aa, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => mG.xr(e),
                fetchOverride: (e) => mG.BC(e, !0) ?? null,
            });
        },
    });
function Aa(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = E.useState(l ?? ""),
        u = E.useRef(null),
        [d, c] = E.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        E.useEffect(() => g, []),
        (0, A.jsx)(tQ.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, A.jsx)(lo.k, {
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
let Ao = (0, d.zZ)(c.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [As, Ar, mM, m6, m8, m9, mV, At, m7, Ae, m1],
        useInlineNotice: () => ({
            type: m.lT.INLINE_NOTICE,
            noticeType: "info",
            text: R.intl.format(R.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Au = (0, d.zD)(c.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, s2.x)({ logAnalyticsEvents: e }),
    }),
    Ad = (0, d.zD)(c.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingGatewayEvents),
        setValue: (e) => (0, s2.x)({ logGatewayEvents: e }),
    }),
    Ac = (0, d.zD)(c.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.preventPopoutClose),
        setValue: (e) => (0, s2.x)({ preventPopoutClose: e }),
    }),
    Ag = (0, d.zD)(c.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.logKeyboardMismatches),
        setValue: (e) => (0, s2.x)({ logKeyboardMismatches: e }),
    }),
    Am = (0, d.zD)(c.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingOverlayEvents),
        setValue: (e) => (0, s2.x)({ logOverlayEvents: e }),
    }),
    AA = (0, d.zD)(c.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingQuestEvents),
        setValue: (e) => (0, s2.x)({ logQuestEvents: e }),
    }),
    AE = (0, d.zD)(c.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isTracingRequests),
        setValue: (e) => (0, s2.x)({ trace: e }),
    }),
    Ah = (0, d.zZ)(c.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [Ad, Am, AE, Au, Ag, Ac, AA] }),
    AS = (0, d.t_)(c.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Ao, Ah, mP],
    }),
    AT = (0, d.i4)(c.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: mx.V,
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
                    isStaff: g,
                } = (0, h.cf)([s3.default, mp.A, si.default], () => ({
                    layoutDebuggingEnabled: s3.default.layoutDebuggingEnabled,
                    isDeveloper: mp.A.isDeveloper,
                    isLoggingGatewayEvents: s3.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: s3.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: s3.default.isLoggingAnalyticsEvents,
                    isTracingRequests: s3.default.isTracingRequests,
                    isForcedCanary: s3.default.isForcedCanary,
                    isSourceMapsEnabled: s3.default.sourceMapsEnabled,
                    isAxeEnabled: s3.default.isAxeEnabled,
                    preventPopoutClose: s3.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: s3.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: s3.default.disableAppCollectionsCache,
                    isStaff: si.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: m, verticalSpacing: E } = (0, mI.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = mI.Or.getState(),
                p = L.HZ.useSetting();
            return t
                ? [
                      (0, A.jsxs)(
                          e3.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, nl.openUserSettings)(c.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e3.sL,
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
                                      e3.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, s2.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, s2.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: d,
                                          action: () => {
                                              (0, s2.x)({ disableAppCollectionsCache: !d });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, A.jsxs)(
                          e3.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, nl.openUserSettings)(c.X.LOGGING);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, s2.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, s2.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, s2.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, s2.x)({ trace: !s });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, s2.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, A.jsxs)(
                          e3.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, nl.openUserSettings)(c.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, s2.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, A.jsx)(
                                      e3.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, s2.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(
                                                  e3.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, A.jsx)(mf.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: mI.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, A.jsx)(
                                                  e3.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, A.jsx)(mf.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: E,
                                                              minValue: 0,
                                                              maxValue: mI.YR,
                                                              onChange: (e) => T(e),
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
                                e3.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => sn() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [AS],
    });
var Ap = n(127062),
    Ax = n(25044),
    Af = n(80703),
    AI = n(123292),
    A_ = n(857250),
    AN = n(683438),
    AC = n(890856),
    Ab = n(100392),
    Ay = n(102609),
    Av = n(271478),
    Aj = n(710195),
    AO = n(386976),
    AL = n(257433),
    AR = n(32523),
    AD = n(96919),
    AP = n(688151),
    AG = n(863763);
function AU(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = E.useState(l),
        [a, o] = E.useState(!1),
        u = E.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, h.bG)([uI.default], () => uI.default.getId()),
        c = (0, h.bG)([uI.default], () => {
            let e = uI.default.getInstallationForTracking();
            return null == e ? null : (0, Af.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, AL.iN)(t, g),
        S = (0, AL.Fm)(t, g),
        T = (0, h.yK)([re.A], () =>
            B()
                .sortBy(re.A.getRecentExposures(AP.Vh.USER, n), (e) => {
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
                (0, uy.C)((0, Ab.yA)(n), () => {
                    ((0, l8.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: l7.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        x = (0, A.jsx)(AC.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: AG.DD,
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
                                    uy.p5 &&
                                        (0, A.jsx)(n0.D, {
                                            onClick: p,
                                            children: (0, A.jsx)(mw.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", {
                        className: AG.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, A.jsx)("div", { className: AG.Os, children: x });
    let f = "";
    return (
        (f =
            t.system === Ay.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? AP.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, A.jsxs)("div", {
            className: AG.Os,
            children: [
                x,
                (0, A.jsx)("div", {
                    children: (0, A.jsx)(Av.g, {
                        label: t.system === Ay.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, A.jsx)("div", {
                    className: AG.h_,
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
                                  className: AG.id,
                                  children: "Server Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AG.AS,
                                  children: null == S ? "None" : JSON.stringify(S, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: AG.id,
                                  children: "Override Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AG.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: AG.id,
                                  children: "Recent Exposures",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AG.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, A.jsx)("div", {
                          className: AG.id,
                          children: (0, A.jsx)(AI.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, A.jsx)(i8.c, { className: AG.yF }),
            ],
        })
    );
}
function AM(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = E.useState(null != i),
        [r, a] = E.useState(!1),
        o = E.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, h.bG)([re.A], () => re.A.getLoadedGuildExperiment(n)),
        d = (0, h.bG)([re.A, lh.A, Aj.A], () => {
            if (t.system === Ay.l5.LEGACY) return null == re.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lh.A.getGuildsArray().some((t) => null != Aj.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, h.yK)([re.A], () =>
            B()
                .sortBy(re.A.getRecentExposures(AP.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, h.yK)([uI.default, lh.A, re.A, Aj.A], () => {
            let e = t.system === Ay.l5.LEGACY,
                i = t.name,
                l = uI.default.getId(),
                s = B().sortBy(lh.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (re.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? AP.RE.NOT_ELIGIBLE)
                    : (Aj.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? AP.RE.NOT_ELIGIBLE);
                (s in r || (r[s] = 0), r[s]++, a.push(`${t.name}: ${s}`));
            }
            let o = B()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        S = t.system !== Ay.l5.LEGACY,
        T = (0, h.yK)([lh.A], () => B().sortBy(lh.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [p, x] = E.useState(() => lS.A.getGuildId() ?? lS.A.getLastSelectedGuildId()),
        f = T.find((e) => e.id === p)?.name,
        I = (0, h.bG)(
            [Aj.A],
            () => {
                if (S && null != p) return Aj.A.getServerAssignment("guild", p, t.name);
            },
            [S, p, t.name],
        ),
        _ = (0, h.bG)([Aj.A, uI.default], () => {
            if (!S) return;
            let e = uI.default.getId();
            return Aj.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, A.jsx)(n0.D, {
            onClick: o,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: AG.DD,
                children: [
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)("span", { children: t.title }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", { className: AG.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, A.jsxs)("div", {
              className: AG.Os,
              children: [
                  C,
                  (0, A.jsx)(Av.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  S &&
                      T.length > 0 &&
                      (0, A.jsx)("div", {
                          className: AG.h_,
                          children: (0, A.jsx)(i7.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: p ?? void 0,
                              options: T.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => x(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, A.jsx)("div", {
                      className: AG.h_,
                      children: d
                          ? (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Ay.l5.LEGACY
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
                                  className: AG.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AG.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: AG.id,
                                  children: "Client Eligibility",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: AG.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: AG.id,
                                    children: "Guild Assignments",
                                }),
                                (0, A.jsx)(H.E, { variant: "code", className: AG.AS, children: g }),
                                t.system === Ay.l5.LEGACY &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-lg/medium",
                                                className: AG.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, A.jsx)(H.E, {
                                                variant: "code",
                                                className: AG.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: AG.id,
                                    children: "Override Descriptor",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: AG.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: AG.id,
                                    children: "Recent Exposures",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: AG.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, A.jsx)("div", {
                            className: AG.id,
                            children: (0, A.jsx)(AI.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, A.jsx)(i8.c, { className: AG.yF }),
              ],
          })
        : (0, A.jsx)("div", { className: AG.Os, children: C });
}
let AV = (0, d.E2)(c.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, AO.op)(),
                { experiments: n, overridesInfo: i } = (0, AR.hI)(),
                l = E.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = E.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, h.bG)([uI.default], () => {
                    let e = uI.default.getInstallationForTracking();
                    return null == e ? null : (0, Af.v)(e);
                }),
                [a, o] = E.useState(""),
                u = (0, AD.oC)((0, AD.R3)((0, AD.Fm)(l), s), a);
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
                                uy.p5 &&
                                    (0, A.jsx)(AI.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uy.C)(r, () => {
                                                (0, l8.P0)((0, A_.o)("Installation ID copied!", l7.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, A.jsx)(AN.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? AM : AU;
                              return (0, A.jsx)(
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
                        : (0, A.jsx)("div", {
                              className: AG.p$,
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
    Ak = (0, d.zZ)(c.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [AV] }),
    Aw = (0, d.t_)(c.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Ak] }),
    AF = (0, d.i4)(c.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Ap.c,
        useMenu: Ax.A,
        buildLayout: () => [Aw],
    }),
    AB = (0, d.WI)(c.X.DEVELOPER_SECTION, {
        useTitle: () => R.intl.string(R.t["+gHUHA"]),
        usePredicate: () => mp.A.isDeveloper,
        buildLayout: () => [AF, AT],
    });
var Az = n(682348),
    AX = n(871633),
    AY = n(751075),
    AH = n(843402);
let AK = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function AW() {
    let e = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1)),
        t = (0, h.bG)([iQ.Ay], () => AK(...iQ.Ay.getOverrides()));
    E.useEffect(() => {
        if (eQ.isPlatformEmbedded) return ((0, AH.a2)(), AH.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = E.useMemo(
        () =>
            e.reduce((e, t) => ((0, AX.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function AZ(e) {
    let { gameHistory: t } = AW();
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
function Aq(e) {
    let { namedGames: t, totalCount: n } = AZ(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function AQ() {
    let { namedGames: e } = AZ(2),
        [t, n] = E.useMemo(() => e.map((e) => e.id), [e]);
    E.useEffect(() => {
        gN.Ay.fetchApplications([t, n].filter(ii.Vq));
    }, [t, n]);
    let [i, l] = (0, h.yK)([iW.A], () => [t, n].map(iW.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, A.jsx)(i0.A, { game: i, size: i0.M.MEDIUM_LARGE }), shape: AY.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, A.jsx)(i0.A, { game: l, size: i0.M.MEDIUM }), shape: AY.e0.ROUNDED } : null,
          };
}
let AJ = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = Aq(2);
            return R.intl.format(R.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = AQ();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, AX.n1)(e))) && (0, nm.xl)(),
    }),
    A$ = (0, d.gN)(c.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [AJ] });
var A0 = n(57129);
let A1 = (0, d.zD)(c.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => R.intl.string(A0.default.WhdCGP),
    useSubtitle: () => R.intl.string(A0.default.UQ9RHJ),
    useValue: L.tz.useSetting,
    setValue: L.tz.updateSetting,
});
var A2 = n(406535);
let A3 = (0, d.zD)(c.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => R.intl.string(A0.default.A0FVCV),
        useSubtitle: () => R.intl.string(A0.default.vHX6RG),
        useValue: L.hV.useSetting,
        setValue: function (e) {
            (L.hV.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A2.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    A6 = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => R.intl.string(R.t.WmsPis),
        useSearchTerms: () => [R.intl.string(R.t["8ka8li"])],
        buildLayout: () => [A1, A3, A$],
    });
var A5 = n(106531);
let A4 = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.J0SFL2),
        destinationKey: c.X.DATA_AND_PRIVACY_PANEL,
    }),
    A8 = (0, d.gN)(c.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, A5.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [A4],
    });
var A7 = n(945810);
let A9 = (0, A7.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
var Ee = n(365258);
let Et = (0, d.Qx)(c.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => R.intl.string(A0.default["/LHVbt"]),
    useSubtitle: () => R.intl.string(R.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eB.Qd.ACTIVITY_STATUS_OFF, name: R.intl.string(A0.default.m3oL7Q) },
            { value: eB.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: R.intl.string(A0.default["5+lnTA"]) },
            { value: eB.Qd.ACTIVITY_STATUS_ON, name: R.intl.string(A0.default["egr+VZ"]) },
        ];
    },
    useValue: L._Z.useSetting,
    setValue: function (e) {
        var t;
        let i = L._Z.getSetting();
        if (
            (L._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, A5.W1)(t) && !A9.getConfig({ location: t }).upsell)
        )
            return;
        let l = (0, Ee.g8)(i, e);
        if (null == l) return;
        let s = (0, Ee.Xc)(e);
        (0, la.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, A.jsx)(e, { ...t, direction: l.direction, affectedGuildIds: l.affectedGuildIds, settingName: s });
        });
    },
});
var En = n(498642),
    Ei = n(573435),
    El = n(260509),
    Es = n(771810);
function Er(e) {
    let { guild: t, size: n } = e,
        i = (0, El.Iv)(t, n, !1, !0),
        l = (0, El.Rb)(t);
    return null != i
        ? (0, A.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, A.jsx)("div", {
              className: Es.F,
              children: (0, A.jsx)(H.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
              }),
          });
}
function Ea(e) {
    let { guild: t, size: n } = e;
    return (0, A.jsx)(Ei.Ay, {
        className: Es.z,
        mask: Ei.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, A.jsx)(Er, { guild: t, size: n }),
    });
}
var Eo =
    (((s = {}).SERVER_ORDER = "server-order"),
    (s.RECENTLY_JOINED = "recently-joined"),
    (s.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (s.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    s);
let Eu = {
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
var Ed = n(618118);
function Ec(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, h.bG)([En.A], () => En.A.getMemberCount(t.id));
    return (0, A.jsxs)(X.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, A.jsx)("div", { className: Ed.FO, children: (0, A.jsx)(Ea, { guild: t, size: 48 }) }),
            (0, A.jsx)("div", {
                className: Ed.QH,
                children: (0, A.jsx)(tJ.d, {
                    label: t.name,
                    description: R.intl.format(R.t.zRl6XR, { count: l ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let Eg = function (e) {
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
            let [e, t] = (0, E.useState)(""),
                [n, i] = (0, E.useState)("server-order"),
                l = (0, h.bG)([dA.Ay], () => dA.Ay.getFlattenedGuildIds()),
                s = (0, h.bG)([lh.A], () => lh.A.getGuilds()),
                r = l.map((e) => s[e]).filter(Boolean),
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
                [g, m] = (0, E.useState)(() => Eu[n](r, a)),
                A = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(Eu[e](r, a)), i(e));
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
        m = (0, E.useId)(),
        T = (0, E.useRef)(null),
        p = (0, E.useMemo)(
            () => [
                { id: Eo.SERVER_ORDER, label: R.intl.string(R.t.STMPJ2), value: Eo.SERVER_ORDER },
                { id: Eo.RECENTLY_JOINED, label: R.intl.string(R.t.CbaapP), value: Eo.RECENTLY_JOINED },
                { id: Eo.ACTIVITY_SHARING_ON, label: R.intl.string(A0.default.ZI51JZ), value: Eo.ACTIVITY_SHARING_ON },
                {
                    id: Eo.ACTIVITY_SHARING_OFF,
                    label: R.intl.string(A0.default["+kxafn"]),
                    value: Eo.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        x = p.find((e) => e.value === s)?.label ?? "";
    return (0, A.jsxs)("div", {
        className: Ed.iE,
        children: [
            t,
            (0, A.jsxs)("div", {
                className: Ed.N1,
                children: [
                    (0, A.jsx)(AN.I, {
                        query: i,
                        onChange: l,
                        onClear: function () {
                            (tt.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                l(""));
                        },
                        onFocus: () =>
                            tt.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            tt.default.track(S.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        placeholder: R.intl.string(R.t["H+nRYw"]),
                        "aria-label": R.intl.string(R.t["5h0QOP"]),
                        inputProps: { "aria-controls": m, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, A.jsxs)("div", {
                            className: Ed.gO,
                            children: [
                                (0, A.jsx)(r8.Y, {
                                    targetElementRef: T,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, A.jsx)(dI.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": R.intl.string(R.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, A.jsx)(e3.rX, {
                                                children: p.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, A.jsx)(
                                                        e3.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: s === i,
                                                            action: () => {
                                                                (tt.default.track(
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
                                        (0, A.jsxs)(n0.D, {
                                            ...e,
                                            innerRef: T,
                                            className: Ed.Ku,
                                            children: [
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, A.jsx)(dq.a, { size: "xs", color: nQ.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, A.jsx)(AI.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? R.intl.string(R.t["7lxcLO"]) : R.intl.string(R.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, A.jsx)(ln.A, {
                "aria-live": "polite",
                role: "region",
                children: R.intl.format(A0.default.EvzDff, { count: n.length }),
            }),
            (0, A.jsxs)("ul", {
                className: Ed.X1,
                id: m,
                "aria-label": R.intl.string(R.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, A.jsx)("div", {
                            className: Ed.pb,
                            children: (0, A.jsx)(H.E, {
                                className: Ed.R$,
                                variant: "text-lg/medium",
                                children: R.intl.string(R.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, A.jsx)(
                            Ec,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var Em = n(68322);
let EA = (0, d.E2)(c.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [R.intl.string(A0.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, A.jsx)("div", {
                      className: Em.l,
                      children: (0, A.jsx)(iz.w, { type: "warning", children: R.intl.string(A0.default["xxI0/W"]) }),
                  });
            return (0, A.jsx)(Eg, { notice: e });
        },
    }),
    EE = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bwqjL9),
        buildLayout: () => [Et, EA, A8],
    }),
    Eh = (0, d.zD)(c.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => R.intl.string(A0.default.khuuzv),
        useSubtitle: () => R.intl.string(A0.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    ES = (0, d.E2)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    ET = (0, d.zD)(c.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => R.intl.string(A0.default.Uz5Ipi),
        useSubtitle: () => R.intl.string(A0.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    Ep = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => R.intl.string(A0.default["89YBr5"]),
        useSubtitle: () => R.intl.string(R.t.uGDpgH),
        buildLayout: () => [Eh, ET, ES],
        useSearchTerms: () => [R.intl.string(R.t.VOszPA)],
    }),
    Ex = (0, d.t_)(c.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        buildLayout: () => [A6, EE, Ep],
    }),
    Ef = (0, d.i4)(c.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        icon: Az._,
        buildLayout: () => [Ex],
    });
var EI = n(712440),
    E_ = n(370997);
let EN = (0, d.E2)(c.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: E_.Ay,
    useSearchTerms: () => [R.intl.string(R.t["f6kk+r"])],
});
var EC = n(462887),
    Eb = n(478016),
    Ey = n(789645),
    Ev = n(259678),
    Ej = n(77468),
    EO = n(289498),
    EL = n(573648),
    ER = n(874490),
    ED = n(370480),
    EP = n(968309);
let EG = new Set([S.fg2.XBOX, S.fg2.PLAYSTATION, S.fg2.PLAYSTATION_STAGING, S.fg2.CRUNCHYROLL]);
var EU = n(169869),
    EM = n(814925),
    EV = n(733110),
    Ek = n(479785),
    Ew = n(757036),
    EF = n(555837),
    EB = n(43990),
    Ez = n(241524),
    EX = n(51965),
    EY = n(377368),
    EH = n(631368),
    EK = n(212739),
    EW = n(30370),
    EZ = n(181666),
    Eq = n(553875),
    EQ = n(660594);
function EJ() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, EH.$)()),
            (t = (0, EK.O)()),
            (l = null != (i = (0, h.bG)([EW.A], () => EW.A.getAccount(null, S.fg2.XBOX))) && !i.revoked),
            e === EH.C.NONE || t
                ? { variant: EH.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === EH.C.NO_ACCESS && !l }),
        { analyticsLocations: a } = (0, eP.Ay)(tL.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, EY.yW)(a),
        u = (0, Ez.A)("(max-width: 485px)");
    if (s === EH.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (s) {
        case EH.C.HAS_ACCESS:
        case EH.C.BLOCK_CLAIM:
            ((c = R.intl.string(Eq.default["7PdsMK"])),
                (g = (0, A.jsx)(EX.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: R.intl.string(Eq.default.CubeLC),
                    onClick: () => {
                        (0, la.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, A.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case EH.C.NO_ACCESS:
            ((c = R.intl.string(Eq.default.NwkRTZ)),
                (g = (0, A.jsx)(tU.A, {
                    defaultTextOverride: R.intl.string(Eq.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tX.pe.TIER_2,
                })));
            break;
        default:
            (0, ii.xb)(s);
    }
    return (0, A.jsxs)(eP.f5, {
        value: a,
        children: [
            (0, A.jsxs)("div", {
                className: EQ.bV,
                children: [
                    (0, A.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: R.intl.string(R.t.NG1e6l),
                    }),
                    (0, A.jsx)(rJ.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, A.jsx)(EB.N, {
                theme: S.NJ8.DARK,
                children: (e) =>
                    (0, A.jsx)("div", {
                        className: e,
                        children: (0, A.jsxs)("div", {
                            className: EQ.Nr,
                            children: [
                                (0, A.jsxs)("div", {
                                    className: EQ.Tp,
                                    children: [
                                        (0, A.jsx)("div", {
                                            className: EQ.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, A.jsx)("div", { className: EQ.$h }),
                                        (0, A.jsx)("div", { className: EQ.Rv }),
                                        (0, A.jsx)("div", { className: EQ.Lw }),
                                    ],
                                }),
                                (0, A.jsxs)("div", {
                                    className: EQ.Mn,
                                    children: [
                                        (0, A.jsxs)("div", {
                                            className: EQ.mY,
                                            children: [
                                                (0, A.jsx)("img", {
                                                    className: EQ.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: EQ.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, A.jsx)("div", { className: EQ.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)("div", { className: EQ.yF }),
                                            (0, A.jsxs)("div", {
                                                className: EQ.sQ,
                                                children: [
                                                    (0, A.jsx)(oZ.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: nQ.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, A.jsx)(H.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: R.intl.format(EZ.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(EY.Hx.CONNECT),
                                                                    (0, EP.A)({
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
var E$ = n(201718),
    E0 = n(321078),
    E1 = n(672130),
    E2 = n(379848),
    E3 = n(688901);
function E6(e) {
    let { markAsDismissed: t } = e;
    return (
        E.useEffect(() => t(cy.i.UNKNOWN), [t]),
        (0, A.jsx)(tn.Lp, { className: E3.Ad, text: R.intl.string(R.t.y2b7CA) })
    );
}
function E5(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, A.jsxs)("div", {
        className: E3.kL,
        children: [
            i,
            (0, A.jsxs)("div", {
                className: E3.FS,
                children: [
                    (0, A.jsxs)("div", {
                        className: E3.TK,
                        children: [
                            (0, A.jsx)(E2.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, A.jsx)(E6, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, A.jsx)(H.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, A.jsx)(H.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, A.jsx)(_.$, { text: R.intl.string(R.t.vD60Pv), onClick: s }),
        ],
    });
}
function E4() {
    let e = ex.A.getArticleURL(S.MVz.PS_CONNECTION);
    return (0, A.jsx)(E5, {
        title: R.intl.string(R.t.v20wwm),
        body: R.intl.format(R.t.lTZBit, { help_article: e }),
        img: (0, A.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eu.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, EP.A)({ platformType: S.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let E8 = "/assets/9df988a227916145.png";
function E7() {
    return (0, A.jsx)(E5, {
        title: R.intl.string(EZ.default["9cLtDI"]),
        body: R.intl.format(EZ.default["D+kUbg"], { learnMoreLink: ex.A.getArticleURL(S.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, A.jsx)("img", { src: E8, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, EP.A)({ platformType: S.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function E9() {
    let e = ex.A.getArticleURL(S.MVz.XBOX_CONNECTION);
    return (0, A.jsx)(E5, {
        title: R.intl.string(R.t["2okkZV"]),
        body: R.intl.format(R.t.OnERSS, { help_article: e }),
        img: (0, A.jsx)("img", { src: E8, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, EP.A)({ platformType: S.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var he = n(783419),
    ht = n(534952),
    hn = n(211180),
    hi = n(247259);
function hl(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, h.cf)(
            [EW.A],
            () => ({
                isJoining: EW.A.isJoining(n.id),
                joinErrorMessage:
                    "" === EW.A.joinErrorMessage(n.id) ? R.intl.string(R.t.j2d6Km) : EW.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== EW.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, h.bG)([lh.A], () => lh.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, A.jsx)(_.$, {
                size: "sm",
                onClick: function () {
                    Ej.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? R.intl.string(R.t.RXvQQu) : R.intl.string(R.t.XpeFYr),
            })),
        (0, A.jsxs)("div", {
            className: hi.iA,
            children: [
                (0, A.jsxs)("div", {
                    className: hi.XX,
                    children: [
                        (0, A.jsx)(db.Ay, { size: db.Ay.Sizes.SMALL, guild: n.guild, className: hi.$f }),
                        (0, A.jsxs)("div", {
                            className: hi.Vn,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, A.jsx)(nn.Anchor, {
                                    href: EL.A.get(n.type)?.getPlatformUserUrl?.(n.account),
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
                s &&
                    (0, A.jsx)(H.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: hi.R,
                        children: l,
                    }),
            ],
        })
    );
}
function hs(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s =
            ((t = l.id),
            (n = (0, EF.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (i = (0, Ew.L)(tX.PremiumTypes.TIER_2)),
            !n && !i && !/^\d+$/.test(t));
    return l.type === S.fg2.XBOX && s
        ? (0, A.jsx)(E7, {})
        : l.twoWayLink
          ? null
          : l.type === S.fg2.XBOX
            ? (0, A.jsx)(E9, {})
            : l.type === S.fg2.PLAYSTATION
              ? (0, A.jsx)(E4, {})
              : null;
}
function hr(e) {
    let t,
        n,
        i,
        l,
        s,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = E.useState(u.friendSync),
        [h, T] = E.useState(u.visibility),
        [p, x] = E.useState(u.metadataVisibility),
        [f, I] = E.useState(u.showActivity),
        [N, C] = E.useState(null),
        [b, y] = E.useState(null),
        [v, j] = E.useState(!1),
        [O, L] = E.useState([]),
        D = (0, ER.ML)(u.type),
        P = EL.A.get(D);
    E.useEffect(() => {
        (m(u.friendSync), T(u.visibility), x(u.metadataVisibility), I(u.showActivity));
    }, [u]);
    let G = { inProgressVisibility: N, inProgressMetadataVisibility: b },
        U = E.useRef(G);
    return (
        E.useEffect(() => {
            U.current = G;
        }),
        E.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = U.current;
            (null != e && (T(e), Ej.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (x(t), Ej.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, A.jsxs)("div", {
            className: hi.FI,
            children: [
                ((t = EL.A.get(u.type)),
                (n = EL.A.get(D)),
                (i = "1" === (u.metadata ?? {})[he.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === S.fg2.TWITTER &&
                    i &&
                    (l = (0, A.jsx)(lt.m, {
                        text: R.intl.string(R.t.Jebrww),
                        children: (0, A.jsx)(EM.A, {
                            color: nQ.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, A.jsx)(Eb.U, { size: "xs", color: nQ.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, A.jsxs)("div", {
                    className: hi.Il,
                    children: [
                        (0, A.jsx)("img", {
                            alt: n.name,
                            className: hi.gj,
                            src: (0, EC.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsxs)("div", {
                                    className: hi.$p,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: hi.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, A.jsx)("div", { className: hi.cG, children: l }),
                                    ],
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: hi.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? R.intl.format(hn.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, A.jsx)(n0.D, {
                            className: hi.uH,
                            onClick: function () {
                                let e = EL.A.get(u.type);
                                (0, la.openModal)((t) =>
                                    (0, A.jsx)(lr.Modal, {
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
                                            EG.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, A.jsx)(lW.A, {
                                                children: R.intl.format(R.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": R.intl.string(R.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, A.jsx)(Ey.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, A.jsx)(hs, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, ED.An)(t[he.pK.CREATED_AT], c);
                    switch (e.type) {
                        case S.fg2.REDDIT:
                            n = (0, EU.xE)(t, hi.Nz);
                            break;
                        case S.fg2.STEAM:
                            n = (0, EU.dy)(t, hi.Nz);
                            break;
                        case S.fg2.BLUESKY:
                        case S.fg2.TWITTER:
                        case S.fg2.MASTODON:
                            n = (0, EU.ED)(t, hi.Nz);
                            break;
                        case S.fg2.EBAY:
                            n = (0, EU.ub)(t, hi.Nz);
                            break;
                        case S.fg2.PAYPAL:
                            n = (0, EU.gZ)(t, hi.Nz);
                            break;
                        case S.fg2.TIKTOK:
                            n = (0, EU.HU)(t, hi.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, A.jsx)(
                                H.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: hi.M4,
                                    children: R.intl.format(R.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = R.intl.string(R.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== EL.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, A.jsx)(tn.Lp, { className: hi.Z3, text: R.intl.string(R.t.y2b7CA) }, "badge"),
                                (0, A.jsx)(
                                    H.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: hi.vt,
                                        children: R.intl.format(R.t.Up2ni7, {
                                            helpdeskUrl: ex.A.getArticleURL(S.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = R.intl.string(R.t["LVh3/5"])));
                    return (
                        l && (s = R.intl.string(R.t.i4jeWR)),
                        n.push(
                            (0, A.jsx)(
                                "div",
                                {
                                    className: hi.jy,
                                    children: (0, A.jsx)(_.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: v,
                                        disabled: l,
                                        "aria-label": R.intl.string(R.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  (j(!0),
                                                      Ej.A.refresh(e.type, e.id).finally(() => {
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
                        (0, A.jsx)("div", { className: hi.tJ, children: n })
                    );
                })(u),
                (S.txh.has(u.type) &&
                    (s = (0, A.jsx)(tJ.d, {
                        label: R.intl.string(R.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), Ej.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                S.ewM.has(u.type) &&
                    (r = (0, A.jsx)(tJ.d, {
                        label: R.intl.format(R.t["6u6J0q"], { platform: P.name }),
                        checked: f,
                        onChange: function (e) {
                            (I(e), Ej.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                EL.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, A.jsx)(tJ.d, {
                        label: R.intl.string(R.t.FYKGsL),
                        checked: 1 === p,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, EP.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (x(n), Ej.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, A.jsxs)("div", {
                    className: hi.HZ,
                    children: [
                        (0, A.jsx)(tJ.d, {
                            label: R.intl.string(R.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (C(n), (0, EP.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (T(n), Ej.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, A.jsx)(i8.c, {});
                })(),
                u.revoked
                    ? (0, A.jsx)(r$.p, {
                          messageType: r$.Y.INFO,
                          children: R.intl.format(R.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, EP.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, A.jsx)(tQ.D, {
                            label: R.intl.string(R.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, A.jsx)(hl, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, A.jsx)(Ek.A, { partner: u.type }),
            ],
        })
    );
}
function ha(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: hi.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, A.jsxs)("div", {
                          className: hi.Il,
                          children: [
                              (0, A.jsx)("img", { alt: n.name, className: ir()(hi.gj, hi.sN), src: i }),
                              (0, A.jsxs)("div", {
                                  children: [
                                      (0, A.jsx)("div", {
                                          className: hi.$p,
                                          children: (0, A.jsx)(H.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: hi.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: hi.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, A.jsx)(n0.D, {
                                  className: hi.uH,
                                  onClick: () =>
                                      (0, E_.d1)(n, t.scopes, () => {
                                          EI.A.delete(t.id);
                                      }),
                                  "aria-label": R.intl.string(R.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, A.jsx)(Ey.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, A.jsx)("div", {
                      className: hi.HZ,
                      children: (0, A.jsx)(tJ.d, {
                          label: R.intl.string(R.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              E$.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function ho(e) {
    let t = EL.A.get(e);
    ((0, EP.A)({ platformType: t.type }),
        tt.default.track(S.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function hu() {
    let e = (0, ER.gn)(),
        t = (0, iZ.A)((0, ht.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, A.jsxs)("div", {
        className: hi.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, A.jsx)(
                        E1.A,
                        { application: e, className: hi.__invalid_accountButton, innerClassName: hi.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, A.jsx)(
                        EO.A,
                        { type: e.type, className: hi.__invalid_accountButton, innerClassName: hi.U$ },
                        e.type,
                    ),
                ),
            (0, A.jsx)(lt.m, {
                text: R.intl.string(R.t.QqTz8b),
                children: (0, A.jsx)("div", {
                    className: ir()(hi.ej, hi.__invalid_accountButton),
                    children: (0, A.jsx)(Ev.vN, {
                        children: (0, A.jsx)("button", {
                            className: ir()(hi.R8, hi.U$),
                            type: "button",
                            onClick: function () {
                                e5.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: ho });
                            },
                            "aria-label": R.intl.string(R.t.Zhcj9X),
                            children: (0, A.jsx)(n2._, {
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
function hd(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = E.useMemo(() => i.filter((e) => EL.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, A.jsx)(a8.y, { type: a8.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, A.jsx)(mk.pp, {
                    theme: r,
                    className: hi.p$,
                    children: (0, A.jsx)(mk.SG, {
                        note: R.intl.string(R.t.WenGZ2),
                        children: R.intl.string(R.t.aoLS84),
                    }),
                })
              : (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: R.intl.format(R.t.AioIGb, { count: l.length + o.length }),
                        }),
                        l.map((e, t) =>
                            (0, A.jsx)(
                                ha,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, A.jsx)(
                                hr,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            Ej.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, A.jsx)("div", { className: hi.V, children: t })
    );
}
let hc = (0, d.E2)(c.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, A.jsx)(tQ.D, { label: R.intl.string(R.t["t+aGse"]), children: (0, A.jsx)(hu, {}) });
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
    hg = (0, d.E2)(c.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
                t = (0, h.bG)([EW.A], () => EW.A.isFetching()),
                n = (0, h.bG)([EW.A], () => EW.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, h.cf)([EV.default], () => ({
                    authorizedAppsFetchState: EV.default.getFetchState(),
                    authorizedApps: EV.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, E0.A)(si.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, uP.Ay)(),
                o = (0, h.bG)([oM.default], () => oM.default.locale);
            return (E.useEffect(() => {
                i === EV.FetchState.NOT_FETCHED && EI.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(EJ, {}),
                          (0, A.jsx)(hd, {
                              fetching: t || s || (r.length > 0 && i !== EV.FetchState.FETCHED),
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
            Ej.A.fetch();
        },
        useSearchTerms: () => [
            R.intl.string(R.t["+/hZM/"]),
            R.intl.string(R.t.bsbMVz),
            R.intl.string(R.t.f7yOAX),
            R.intl.string(R.t.FYKGsL),
            R.intl.string(R.t["+KCMSi"]),
        ],
    });
var hm = n(206828);
let hA = (0, d.zZ)(c.X.CONNECTIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3fe7U5"]),
        useSubtitle: () => R.intl.string(R.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, h.bG)([EW.A], () => EW.A.getAccounts()),
                t = E.useMemo(
                    () =>
                        EL.A.filter(
                            (e) =>
                                e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") ===
                                !0,
                        ).filter((t) => e.some((e) => e.type === t.type)),
                    [e],
                ),
                [n, i] = E.useState(0),
                [l, s] = E.useState(t),
                r = t !== l;
            r && (s(t), i(0));
            let a = E.useMemo(() => t[n], [t, n]),
                o = (0, iZ.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, hm.RD)(o),
                g =
                    a?.type === S.fg2.RIOT_GAMES || a?.type === S.fg2.LEAGUE_OF_LEGENDS
                        ? R.intl.string(hn.default["1S6oAo"])
                        : o?.name,
                A = null != a && c,
                T = A && !d && u && o?.connectionEntrypointUrl != null;
            return (
                r || !A || T || i((e) => e + 1),
                E.useMemo(
                    () =>
                        T
                            ? {
                                  type: m.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: R.intl.format(hn.default.wUXupS, {
                                      connectionName: a.name,
                                      applicationName: g,
                                      connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                      helpCenterLink:
                                          a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                                  }),
                              }
                            : null,
                    [a, g, o, T],
                )
            );
        },
        buildLayout: () => [hc, hg],
    }),
    hE = (0, d.zZ)(c.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        useSubtitle: () => R.intl.string(R.t.G9JfLg),
        buildLayout: () => [EN],
        initialize: () => (
            EI.A.fetch(),
            () => {
                E_.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    hh = (0, d.t_)(c.X.CONNECTED_APPS_PANEL, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        useObscuredNotice: a5.L,
        buildLayout: () => [hA, hE],
    }),
    hS = (0, d.i4)(c.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        icon: mw.LinkIcon,
        buildLayout: () => [hh],
    });
var hT = n(625657),
    hp = n(592598),
    hx = n(773371),
    hf = n(184809),
    hI = n(672396);
let h_ = hC(null);
function hN() {
    var e;
    let t = hC(h_);
    ((e = h_),
        B().isEqual(B().omit(t, "old_enabled"), B().omit(e, "old_enabled")) ||
            (tt.default.track(S.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (h_ = t)));
}
function hC(e) {
    let t = hf.default.getNotificationPositionMode(),
        n = t !== S.G6Q.DISABLED,
        i = lU.Ay.getOverlayKeybind(),
        l = lU.Ay.getOverlayChatKeybind();
    return {
        enabled: hx.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: hp.A.isNotificationDisabled(hI.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ls.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, ls.dI)(l.shortcut) : null,
        text_opacity_slider: hf.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? hx.default.enabled,
    };
}
var hb = n(237984),
    hy = n(63035);
function hv(e) {
    (e.preventDefault(), e.stopPropagation());
}
function hj(e) {
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
    return (0, A.jsxs)("div", {
        className: ir()(hy.HS, d),
        children: [
            (0, A.jsxs)(AC.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, A.jsx)("div", { className: hy.x_, children: t }),
                    (0, A.jsxs)("div", {
                        className: hy.rN,
                        children: [
                            null != n && (0, A.jsx)("div", { className: hy.$t, children: n }),
                            (0, A.jsxs)("div", {
                                className: hy.c8,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: hy.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, A.jsx)(H.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, A.jsx)(H.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, A.jsx)("div", { className: hy.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", { className: hy.Om, children: a }),
        ],
    });
}
let hO = (0, d.E2)(c.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, A.jsx)(hj, {
            title: R.intl.string(R.t["z4/l+V"]),
            description: R.intl.string(R.t["3aZq/0"]),
            action: (0, A.jsx)(_.$, {
                variant: "primary",
                text: R.intl.string(R.t.s2nVhG),
                onClick: () => {
                    (0, hb.b)(tL.A.USER_SETTINGS, S.BRT.APP);
                },
            }),
            "aria-label": R.intl.string(R.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [R.intl.string(R.t["z4/l+V"])],
});
var hL = n(31300),
    hR = n(780907),
    hD = n(684013),
    hP = n(56562),
    hG = n(311043),
    hU = n(569926),
    hM = n(810412),
    hV = n(41984),
    hk = n(296027),
    hw = n(562519);
let hF = 5 * n(927813).A.Millis.DAY,
    hB = new hw.A("overlay_survey_timestamps");
function hz(e, t) {
    let i, l;
    ((i = Date.now()),
        (null != (l = Array.from(hB.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < hF) ||
            Array.from(hB.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, la.openModalLazy)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), hB.add(i), (n) => (0, A.jsx)(l, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function hX() {
    (0, i2.sL)("overlay-settings");
}
function hY(e) {
    let { className: t, game: n } = e;
    return (0, i2.NP)() && null != n && n.elevated
        ? (0, A.jsx)("div", {
              className: t,
              children: (0, A.jsx)(r$.p, {
                  messageType: r$.Y.WARNING,
                  action: (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      text: R.intl.string(R.t["1iI46O"]),
                      onClick: hX,
                  }),
                  children: R.intl.format(R.t["LJzl+0"], { helpCenterLink: ex.A.getArticleURL(S.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var hH = n(760751),
    hK = n(9302),
    hW = n(656513);
let hZ = new Set([
    hV.AR.INITIALIZING,
    hV.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    hV.AR.WAITING_FOR_MODULE_TRACKING,
    hV.AR.WAITING_FOR_OVERLAY_OPEN,
    hV.AR.WAITING_FOR_POPOUT_OPEN,
    hV.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    hV.AR.WAITING_FOR_REACT_INITIALIZATION,
    hV.AR.WAITING_FOR_PID_FOCUS,
    hV.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function hq(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = E.useState(!1);
    return (0, A.jsx)(hW.N, {
        className: hy.uR,
        collapsibleContent: (0, A.jsx)("div", { className: hy.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, A.jsx)(hj, {
                ...l,
                onClick: (e) => {
                    var n;
                    (r((n = !s)), i?.(n), t?.(e));
                },
                className: ir()(hy.AC, n),
                action: (0, A.jsxs)("div", {
                    className: hy.rc,
                    children: [
                        l.action,
                        s
                            ? (0, A.jsx)(dq.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, A.jsx)(n2._, {
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
let hQ = (0, d.E2)(c.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = i$();
        (0, hU.I)(e?.id);
        let n = e?.pid,
            i = (0, h.bG)(
                [hk.default],
                () => (null == e || null == n ? null : hk.default.getTrackedGameByPid(n)),
                [e, n],
                iK(),
            ),
            { data: l } = (0, hU.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, h.cf)(
                [hH.A, ti.A, hG.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, iQ.hw)(e, !1, [hH.A, ti.A, hG.A]),
                [e, i],
            ),
            a = (0, h.bG)(
                [iQ.Ay, hH.A, ti.A, hG.A],
                () => (null == e ? null : (0, iQ.xU)(e, iQ.Ay, hH.A, ti.A, hG.A)),
                [e],
                iK(),
            ),
            [o, u] = E.useState(r),
            [d, c] = E.useState(s),
            [g, m] = E.useState(!1);
        E.useEffect(() => {
            (u(r), c(s));
        }, [r, s]);
        let S = !(0, hK.supportsLegacy)(),
            T = !(0, hK.supportsOutOfProcess)(),
            { legacyEnabled: p, oopEnabled: x } = (0, h.cf)([hk.default], () => hk.default.getGlobalEnabledStatus());
        function f(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case hM.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), hR.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case hM.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), hR.Ay.toggleOverlay(e, d, t), (l = !t && o));
                    break;
                case hM.OverlayToggledClientSettingType.LEGACY:
                    (hD.A.setEnabled(t, x), (0, hM.Q3)(t, hM.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case hM.OverlayToggledClientSettingType.OOP:
                    (hD.A.setEnabled(p, t), (0, hM.Q3)(t, hM.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || l) &&
                hz(
                    i ? hM.OverlayToggledClientSettingType.LEGACY_GAME : hM.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = S && T,
            _ = !p && !x,
            N = !o && !p && d && !S,
            C = !d && !x && o && !T,
            b = i?.overlayMethod === hV.Ue.Disabled,
            y = i?.state === hV.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && hZ.has(i.state) && !b,
            j = i?.overlayMethod === hV.Ue.OutOfProcess,
            O = i?.overlayMethod === hV.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === hV.Ue.Hook,
            D = i?.state === hV.AR.OVERLAY_CRASHED || i?.state === hV.AR.OVERLAY_CRASHED_DISABLED,
            P = !o && !d,
            [G, U] = (function () {
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
                                    case i?.fullscreenType !== hP.aI.BORDERLESS_FULLSCREEN:
                                        return R.intl.string(R.t.mJmbeC);
                                    case T:
                                        return R.intl.string(R.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return R.intl.string(R.t.WiY24u);
                                    case !x:
                                        return R.intl.string(R.t.cAFVsL);
                                    case !(l?.supportsOutOfProcessOverlay ?? !0):
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
                        let e = i?.fullscreenType === hP.aI.FULLSCREEN ? R.intl.string(R.t.mJmbeC) : null;
                        return [R.intl.string(R.t.VPW4XY), e];
                    }
                    default:
                        return [R.intl.string(R.t.ONovP5), null];
                }
            })();
        (0, eS.Ay)(() => {
            hR.Ay.getDetectableGames();
        });
        let [M, V] = E.useMemo(
            () =>
                v
                    ? ["text-muted", nQ.A.colors.TEXT_MUTED.css]
                    : y && O
                      ? ["text-feedback-warning", nQ.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && j
                        ? ["text-feedback-positive", nQ.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && L
                          ? ["text-strong", nQ.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", nQ.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, O, j, L],
        );
        return null == e
            ? null
            : (0, A.jsxs)(hq, {
                  onExpand: m,
                  className: g ? hy.tx : void 0,
                  title: (0, A.jsxs)(A.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, A.jsx)(lt.m, {
                                    text: R.intl.string(R.t["4PJP5p"]),
                                    children: (0, A.jsx)(EM.A, {
                                        size: 16,
                                        color: nQ.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, A.jsx)(Eb.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: nQ.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: G,
                  hint: null != U ? U : void 0,
                  header: (0, A.jsxs)(A.Fragment, {
                      children: [
                          y || v
                              ? (0, A.jsx)(hL.k, { size: "xxs", color: V })
                              : (0, A.jsx)("div", { className: hy.W4 }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: R.intl.string(R.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, A.jsx)(i0.A, { game: t, pid: e?.pid, size: i0.M.MEDIUM }),
                  "aria-label": R.intl.string(R.t["87O5GC"]),
                  action: (0, A.jsx)(n0.D, {
                      onClick: (e) => hv(e),
                      children: (0, A.jsx)(tJ.d, {
                          checked: (o && x) || (d && p),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          (hR.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o));
                                          break;
                                      case "global":
                                          (hD.A.setEnabled(t, t), (i = !t && p), (l = !t && x));
                                          break;
                                      case "both":
                                          (hD.A.setEnabled(t, t),
                                              hR.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && p) || (!t && d)),
                                              (l = (!t && x) || (!t && o)));
                                  }
                                  let s = null;
                                  (i
                                      ? (s =
                                            "game" === n
                                                ? hM.OverlayToggledClientSettingType.LEGACY_GAME
                                                : hM.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? hM.OverlayToggledClientSettingType.OOP_GAME
                                                : hM.OverlayToggledClientSettingType.OOP),
                                      null != s && hz(s, e.id ?? null));
                              })(
                                  t,
                                  (function (e, t) {
                                      let n = !t && e,
                                          i = !x && o,
                                          l = !p && d,
                                          s = !o && x,
                                          r = !d && p;
                                      switch (!0) {
                                          case n && (i || l) && (s || r):
                                              return "both";
                                          case n && (i || l):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && x) || (d && p)),
                              );
                          },
                      }),
                  }),
                  warning: (0, A.jsx)(hY, { className: hy.Hh, game: e }),
                  children: [
                      (0, A.jsx)(hj, {
                          title: R.intl.string(R.t["7BlVIs"]),
                          description: R.intl.string(R.t.ndgADE),
                          hint: x ? void 0 : R.intl.string(R.t.cAFVsL),
                          "aria-label": R.intl.string(R.t["7BlVIs"]),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(tJ.d, {
                                      checked: o && x,
                                      disabled: T,
                                      onChange: (e) => {
                                          e && !x
                                              ? f(e, hM.OverlayToggledClientSettingType.OOP)
                                              : f(e, hM.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: hy.Kz }),
                              ],
                          }),
                      }),
                      (0, A.jsx)(hj, {
                          title: R.intl.string(R.t.BfFpW1),
                          description: R.intl.string(R.t.OzInYk),
                          hint: p ? void 0 : R.intl.string(R.t["3sYHXm"]),
                          "aria-label": R.intl.string(R.t.BfFpW1),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(tJ.d, {
                                      checked: d && p,
                                      disabled: S,
                                      onChange: (e) => {
                                          e && !p
                                              ? f(e, hM.OverlayToggledClientSettingType.LEGACY)
                                              : f(e, hM.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: hy.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = i$();
        return null != e;
    },
    useSearchTerms: () => [R.intl.string(R.t["9cb1Uz"])],
});
var hJ = n(206885);
function h$(e) {
    let { game: t, gameApplication: n } = e,
        i = E.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, h.bG)([iW.A], () => (null != n ? n : iW.A.getApplication(t?.id)), [n, t]);
    return (0, A.jsx)(i0.A, { game: l, pid: i, size: i0.M.SMALL });
}
function h0(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, hU.I)(t?.id);
    let o = (0, h.cf)([iQ.Ay, hH.A, ti.A, hG.A], () => (0, iQ.xU)(t, iQ.Ay, hH.A, ti.A, hG.A)),
        u = (0, h.cf)([hH.A, ti.A, hG.A], () => (0, iQ.hw)(t, !1, [hH.A, ti.A, hG.A]), [t]),
        d = l(u),
        [c, g] = E.useState(d);
    return (
        E.useEffect(() => {
            g(d);
        }, [d]),
        (0, A.jsx)(hj, {
            title: t.name,
            icon: (0, A.jsx)(h$, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(tJ.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), s(e, o, u), n && hz(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, A.jsx)("div", { className: hy.Kz }),
                ],
            }),
        })
    );
}
let h1 = (0, d.E2)(c.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, h.cf)([hk.default], () =>
                    hk.default.getGlobalEnabledStatus(),
                ),
                l = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!0)).filter((e) => !(0, AX.n1)(e)),
                s = (0, iZ.A)(l.map((e) => e.id)),
                r = !(0, hK.supportsLegacy)();
            function a(e) {
                hD.A.setEnabled(e, i);
                let t = iQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, hM.Q3)(e, hM.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && hz(hM.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                hR.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () =>
                    (0, hK.supportsLegacy)()
                        ? r
                            ? R.intl.string(R.t.r9jEVw)
                            : R.intl.string(R.t.OzInYk)
                        : R.intl.string(R.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, A.jsx)(hj, {
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      className: hy.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(tJ.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              hJ.O && (0, A.jsx)("div", { className: hy.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(hq, {
                      onExpand: t,
                      className: e ? hy.tx : void 0,
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      action: (0, A.jsx)(n0.D, {
                          onClick: (e) => hv(e),
                          children: (0, A.jsx)(tJ.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: hy.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(x.Ip, {
                              className: hy.XG,
                              children: l.map((e, t) =>
                                  (0, A.jsx)(
                                      h0,
                                      {
                                          rawGame: e,
                                          clientSettingType: hM.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: s[t],
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
    h2 = (0, d.E2)(c.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, h.cf)([hk.default], () =>
                    hk.default.getGlobalEnabledStatus(),
                ),
                l = !(0, hK.supportsOutOfProcess)(),
                s = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!0)).filter((e) => !(0, AX.n1)(e)),
                r = (0, iZ.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                hD.A.setEnabled(i, e);
                let l = iQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, hM.Q3)(e, hM.OverlayToggledClientSettingType.OOP, l),
                    t && hz(hM.OverlayToggledClientSettingType.OOP, l));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                hR.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () => (hJ.O ? (l ? R.intl.string(R.t.C7bLTQ) : R.intl.string(R.t.ndgADE)) : R.intl.string(R.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, A.jsx)(hj, {
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      className: hy.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(tJ.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              hJ.O && (0, A.jsx)("div", { className: hy.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(hq, {
                      onExpand: t,
                      className: e ? hy.tx : void 0,
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      action: (0, A.jsx)(n0.D, {
                          onClick: (e) => hv(e),
                          children: (0, A.jsx)(tJ.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: hy.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(x.Ip, {
                              className: hy.XG,
                              children: s.map((e, t) =>
                                  (0, A.jsx)(
                                      h0,
                                      {
                                          rawGame: e,
                                          clientSettingType: hM.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: l,
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
    h3 = (0, d.zZ)(c.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [hQ, h2, h1, hO],
    }),
    h6 = (0, d.zD)(c.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, h.bG)([hf.default], () => !hf.default.disableClickableRegions),
        setValue: (e) => {
            hD.A.setDisableClickableRegions(!e);
        },
        useTitle: () => R.intl.string(R.t["+eFXxq"]),
        useSubtitle: () => R.intl.string(R.t.kivMAp),
    }),
    h5 = (0, d.E2)(c.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, h.bG)([lU.Ay], () => lU.Ay.getOverlayKeybind()),
                t = !(0, hK.supportsLegacy)(),
                n = !(0, hK.supportsOutOfProcess)(),
                [i, l] = (0, h.yK)([iQ.Ay], () => [iQ.Ay.canShowAdminWarning, iQ.Ay.getVisibleGame()], []),
                s = (0, i2.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, lU.DV)(e?.shortcut ?? []);
            return (0, A.jsx)("div", {
                className: hy.hc,
                children: (0, A.jsxs)("div", {
                    className: hy.eH,
                    children: [
                        (0, A.jsxs)("div", {
                            className: hy.Bu,
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
                                        className: hy.y7,
                                        children: R.intl.string(R.t.NsowVa),
                                    }),
                                a &&
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: hy.y7,
                                        children: R.intl.string(R.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, A.jsx)("div", {
                            className: hy.IH,
                            children: (0, A.jsx)(ll.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (ta()(null != e, "Keybind should never be undefined"),
                                        iX.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.VsAZcC)],
    });
var h4 = n(515183),
    h8 = n(682763);
let h7 = (0, d.zD)(c.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = i$();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = i$();
            return null != e && (0, h4.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = i$(),
                n = t?.id,
                i = (0, h.bG)([hp.A], () => hp.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, h4.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = iq.A.getStreamerActiveStreamMetadata()),
                    (l = iJ(
                        t,
                        (i =
                            null != (n = iQ.Ay.getVisibleGame())
                                ? iQ.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: iW.A.getApplication(l) ?? void 0 });
            null != s && (0, h8.x8)(s.id, e);
        },
        useTitle: () => R.intl.string(R.t.wgVQND),
        useSubtitle: () => R.intl.string(R.t["5SsyF5"]),
    }),
    h9 = (0, d.zZ)(c.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [h5, h7, h6] });
var Se = n(93465);
let St = [
    {
        title: R.t.eVE4LX,
        description: R.t["72WNqk"],
        disabledSetting: Se.M.TEXT_CHAT,
        key: c.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: R.t.oifnSh,
        description: R.t.bgU5r0,
        disabledSetting: Se.M.WELCOME_GENERAL,
        key: c.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: R.t.hqsZJW,
        description: R.t.kHjdqc,
        disabledSetting: Se.M.GO_LIVE_NUDGE,
        key: c.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: R.t.sop3rn,
        description: R.t.pjgffc,
        disabledSetting: Se.M.GAME_ACTIVITY,
        key: c.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: R.t["2QVhbb"],
        description: R.t.wQ4ilB,
        disabledSetting: Se.M.NOW_PLAYING,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: R.t.giM9fA,
        description: R.t.EhAfWj,
        disabledSetting: Se.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nS.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, h.bG)([hp.A], () => hp.A.isNotificationDisabledBySetting(Se.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function Sn(e) {
    return (0, d.zD)(e.key, {
        useTitle: () => R.intl.string(e.title),
        useSubtitle: () => R.intl.string(e.description),
        useValue: () => !(0, h.bG)([hp.A], () => hp.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            hD.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let Si = (0, d.FW)(c.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => St.map(Sn),
    }),
    Sl = (0, d.zZ)(c.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.xOE5bA),
        buildLayout: () => [Si],
    }),
    Ss = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => R.intl.string(R.t.dnvZSg),
        useValue: () => (0, h.bG)([hf.default], () => hf.default.getAvatarSizeMode()),
        setValue: (e) => {
            hD.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: R.intl.string(R.t.YcOxtr), value: S.OSZ.LARGE },
            { id: "small", label: R.intl.string(R.t.BKIKqx), value: S.OSZ.SMALL },
        ],
    }),
    Sr = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => R.intl.string(R.t.J0dpcB),
        useValue: () => (0, h.bG)([hf.default], () => hf.default.getDisplayNameMode()),
        setValue: (e) => {
            hD.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.pwA.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: R.intl.string(R.t.ekjlPL), value: S.pwA.NEVER },
        ],
    }),
    Sa = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => R.intl.string(R.t.swsWWC),
        useValue: () => (0, h.bG)([hf.default], () => hf.default.getDisplayUserMode()),
        setValue: (e) => {
            hD.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.f5z.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var So = n(391973),
    Su = n(489277),
    Sd = n(897720),
    Sc = n(38502);
function Sg() {
    let e = Su.A.getWidgetByType(S.uss.VOICE_V3);
    if (null == e) return null;
    let t = Sc.A.getWidget(e.id);
    return null != t && (0, Sd.ZO)(t) ? t : null;
}
n(392164);
let Sm = (0, d.sN)(c.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => R.intl.string(R.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? R.intl.string(R.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = Sg();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? R.intl.string(R.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = Sg();
        null != t &&
            (e < 1
                ? (0, So.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, So.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var SA = n(450740),
    SE = n(968898),
    Sh = n(889227),
    SS = n(288737);
function ST(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new SS.A({
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
        user: new Sh.A({ id: l, username: e }),
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
let Sp = (0, d.E2)(c.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, h.cf)([hf.default], () => ({
                    avatarSizeMode: hf.default.getAvatarSizeMode(),
                    displayNameMode: hf.default.getDisplayNameMode(),
                    displayUserMode: hf.default.getDisplayUserMode(),
                })),
                [s] = E.useState(() => [
                    ST(R.intl.string(R.t.C0ZDvo), !0, !1),
                    ST(R.intl.string(R.t.iOtj8E), !1, !1, !0),
                    ST(R.intl.string(R.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, h.bG)([Su.A, Sc.A], () => {
                    let e = Su.A.getWidgetByType(S.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = Sc.A.getWidget(e.id);
                    return null != t && (0, Sd.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = ST(t.username)).user = t), e) : null, ...s].filter(ii.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, A.jsx)(EB.N, {
                    theme: S.NJ8.ONYX,
                    children: (e) =>
                        (0, A.jsxs)("div", {
                            className: ir()(hy.Y5, e),
                            children: [
                                (0, A.jsx)("div", {
                                    className: hy.kJ,
                                    children: (0, A.jsx)(SA.DH, {
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
                                        displayUserMode: l,
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
                                    className: hy.R$,
                                    children: [
                                        (0, A.jsx)(SE.Pl, { children: R.intl.string(R.t.KNJ6Vq) }),
                                        (0, A.jsx)(SE.CS, {}),
                                        (0, A.jsx)(SE.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, A.jsx)("div", { className: hy.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    Sx = (0, d.zZ)(c.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => R.intl.string(R.t.r1TZfh),
        buildLayout: () => [Sp, Ss, Sr, Sa, Sm],
    });
var Sf = n(54761);
function SI() {
    let [e, t] = (0, cS.kn)([eu.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, z.Ay)(() => () => {
        t(cy.i.AUTO_DISMISS);
    }),
    e !== eu.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsxs)("div", {
                      className: Sf.xC,
                      children: [
                          (0, A.jsx)("div", {
                              children: (0, A.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: R.intl.string(R.t.mdXZh1),
                                  className: Sf.tl,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              children: (0, A.jsxs)("div", {
                                  className: Sf.vJ,
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
                                  className: Sf.lh,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Sf.VV,
                              children: (0, A.jsx)(_.$, {
                                  variant: "primary",
                                  text: R.intl.string(R.t.Q26diF),
                                  onClick: () => void t(cy.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(i8.c, { className: Sf.yF }),
              ],
          });
}
function S_() {
    let e = (0, h.bG)([te.A], () => te.A.enabled),
        t = (0, nS.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsx)(iz.w, {
                      type: "warning",
                      children: R.intl.format(R.t.fuEX5B, {
                          onClick: function () {
                              return (0, nl.openUserSettings)(c.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, A.jsx)(i8.c, { className: Sf.yF }),
              ],
          })
        : null;
}
let SN = (0, d.t_)(c.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                hN(),
                lU.Ay.addChangeListener(hN),
                hp.A.addChangeListener(hN),
                hf.default.addChangeListener(hN),
                hx.default.addChangeListener(hN),
                eQ.isPlatformEmbedded && (0, AH.a2)(),
                () => {
                    (lU.Ay.removeChangeListener(hN),
                        hp.A.removeChangeListener(hN),
                        hf.default.removeChangeListener(hN),
                        hx.default.removeChangeListener(hN),
                        eQ.isPlatformEmbedded && (0, AH.e0)());
                }
            );
        },
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(SI, {}), (0, A.jsx)(S_, {})] });
            },
        },
        buildLayout: () => [h3, h9, Sx, Sl],
    }),
    SC = (0, d.i4)(c.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        icon: hT.l,
        usePredicate: np.b_,
        buildLayout: () => [SN],
    });
var Sb = n(687966);
let Sy = (0, d.AK)(c.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.OYYY6q),
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Sv = (0, d.gN)(c.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Sy] });
var Sj = n(227309),
    SO = n(29160),
    SL = n(552366),
    SR = n(938442);
function SD(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, hU.I)(t.id);
    let o = (0, h.cf)([iQ.Ay, hH.A, ti.A, hG.A], () => (0, iQ.xU)(t, iQ.Ay, hH.A, ti.A, hG.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, h.cf)([iQ.Ay], () => ({
            canToggleDetection: null == a || iQ.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: iQ.Ay.isDetectionEnabled(o),
        })),
        c = (0, h.bG)([iQ.Ay], () => iQ.Ay.getVisibleGame()),
        [g, m] = E.useState(!1),
        T = E.useRef(null),
        p = null != c && (0, iQ.Es)(o) === (0, iQ.Es)(c),
        x = !l && !g,
        f = !i && !p,
        I = x || f,
        _ = E.useMemo(
            () =>
                (0, AX.n1)(o)
                    ? r
                        ? o.gameName
                        : R.intl.formatToPlainString(R.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = E.useState(_ ?? "???"),
        b = ir()(SR.tR, {
            [SL.LO]: !i,
            [SL.Rw]: i,
            [SL.FB]: null != o && i,
            [SL.xL]: r,
            [SL.fG]: null != s && s.length > 0,
        });
    function y() {
        (hR.Ay.deleteEntry(o),
            s?.forEach((e) => {
                hR.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? hH.A.getDetectableGame(o.id) : null;
        (tt.default.track(S.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, AX.n1)(o) ? o.gameName : o.name,
        }),
            (0, la.openModalLazy)(async () => {
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
                        className: ir()(SL.$K, SR.Vd),
                        children: [
                            o.verified && !l
                                ? (0, A.jsxs)("div", {
                                      className: SL.HS,
                                      children: [
                                          (0, A.jsx)("div", { className: SL.mO, children: _ }),
                                          (0, A.jsx)(lt.m, {
                                              text: R.intl.string(R.t["4PJP5p"]),
                                              children: (0, A.jsx)(EM.A, {
                                                  className: SL.qf,
                                                  size: 18,
                                                  color: nQ.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, A.jsx)(Eb.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: nQ.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, A.jsx)("input", {
                                      className: ir()(SL.mO, SL.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && hR.Ay.editName(o, N);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === ly.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => C(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || p
                                        ? (e = R.intl.string(R.t.VbV5dv))
                                        : null != n && "" !== n && (e = R.intl.format(R.t["gGeOE+"], { when: n })),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: SL.GN,
                                        children: (0, A.jsx)(SO.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
                                                      (0, eQ.isWindows)() && (t = t.toUpperCase()),
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
                        (0, A.jsx)(r8.Y, {
                            targetElementRef: T,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, A.jsx)(dI.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": R.intl.string(R.t["UKOtz+"]),
                                    children: (0, A.jsxs)(e3.rX, {
                                        children: [
                                            x &&
                                                (0, A.jsx)(e3.Dr, {
                                                    id: "report",
                                                    label: R.intl.string(R.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            f &&
                                                (0, A.jsx)(e3.Dr, {
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
                                    className: ir()(SL._Q, { [SL.g9]: t.isShown }),
                                    children: (0, A.jsx)(lt.m, {
                                        text: R.intl.string(R.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, A.jsx)(i9.K, {
                                            ...e,
                                            buttonRef: T,
                                            icon: dp.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": R.intl.string(R.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, A.jsx)(lt.m, {
                        text: R.intl.string(R.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, A.jsx)(li.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != s && s.length > 0 && d
                                    ? (0, la.openModalLazy)(async () => {
                                          let { Modal: e } = await n.e("304823").then(n.bind(n, 158954));
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
                                                              (hR.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : hR.Ay.toggleDetection(o);
                            },
                            "aria-label": R.intl.string(R.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !i &&
                (0, A.jsx)("div", {
                    className: SL.AQ,
                    children: s.map((e, t) =>
                        (0, A.jsxs)(
                            E.Fragment,
                            {
                                children: [
                                    (0, A.jsx)(SD, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, A.jsx)("div", { className: SL.PQ }),
                                ],
                            },
                            (0, iQ.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function SP() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = AW();
    return 0 === e.length
        ? null
        : (0, A.jsx)(X.B, {
              padding: { bottom: 32 },
              children: (0, A.jsx)(n$.n, {
                  children: (0, A.jsx)("div", {
                      children: e.map((e) =>
                          (0, A.jsx)(
                              SD,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === Sj.a7 ? t : void 0 },
                              (0, iQ.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let SG = (0, d.E2)(c.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, A.jsx)(SP, {}),
});
var SU = n(424994);
let SM = (0, d.zZ)(c.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [SG, Sv],
    useTitle: () => R.intl.string(R.t.jCOdvx),
    useSubtitle: () =>
        (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, AX.n1)(e)))
            ? R.intl.format(R.t.KPA3m9, { igdbLink: SU.s8 })
            : R.intl.string(R.t["1yiJwn"]),
});
var SV = n(890497),
    Sk = n(853270),
    Sw = n(969426);
function SF(e) {
    let { onClose: t } = e,
        n = (0, h.bG)([iQ.Ay], () => iQ.Ay.getCandidateGames()),
        [i, l] = E.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, A.jsxs)(r7.l, {
        className: ir()(Sk.H, Sw.Y_),
        "aria-label": R.intl.string(R.t.GTCx0p),
        children: [
            (0, A.jsx)(SV.Z, {
                selectionMode: "single",
                placeholder: R.intl.string(R.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, A.jsxs)("div", {
                className: ir()(Sk.o, SR.xM),
                children: [
                    (0, A.jsx)(AI.Q, { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: t }),
                    (0, A.jsx)(_.$, {
                        variant: "primary",
                        text: R.intl.string(R.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (hR.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var SB = n(475007);
function Sz() {
    let e = E.useRef(null);
    return (0, A.jsxs)("div", {
        className: ir()(SB.a, mW.Gf),
        children: [
            (0, A.jsx)("span", { children: R.intl.string(R.t.xwhoqM) }),
            (0, A.jsx)(r8.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, A.jsx)(SF, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, A.jsx)(AI.Q, {
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
function SX() {
    return (0, A.jsx)("div", {
        className: ir()(SR.tR, SL.eS, SL.Rw),
        children: (0, A.jsxs)("div", {
            className: ir()(SL.$K, SR.Vd),
            children: [
                (0, A.jsx)("div", { className: SL.mO, children: R.intl.string(R.t.H68X9x) }),
                (0, A.jsx)(Sz, {}),
            ],
        }),
    });
}
let SY = (0, d.E2)(c.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = AW(),
                n = (0, h.bG)([iQ.Ay], () => iQ.Ay.getVisibleGame());
            return null == n
                ? (0, A.jsx)(SX, {})
                : (0, A.jsxs)("div", {
                      className: ir()(SR.Vd, SL.C2),
                      children: [
                          (0, A.jsx)(
                              SD,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === Sj.a7 ? e : void 0,
                              },
                              (0, iQ.Es)(n),
                          ),
                          (0, A.jsx)(Sz, {}),
                      ],
                  });
        },
    }),
    SH = (0, d.zZ)(c.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => R.intl.string(R.t["MY9/Oe"]),
        buildLayout: () => [SY],
    }),
    SK = (0, d.t_)(c.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        buildLayout: () => [SH, SM],
    }),
    SW = (0, d.i4)(c.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        icon: Sb.GameControllerIcon,
        usePredicate: np.Pi,
        buildLayout: () => [SK],
    }),
    SZ = (0, d.WI)(c.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => R.intl.string(R.t.BA9200),
        buildLayout: () => [SW, Ef, SC, hS],
    });
var Sq = n(631670),
    SQ = n(619499),
    SJ = n(836602),
    S$ = n(591179),
    S0 = n(854627),
    S1 = n(402860),
    S2 = n(761508),
    S3 = n(159001),
    S6 = n(344346),
    S5 = n(919395),
    S4 = n(68750);
function S8(e) {
    let { title: t, children: n } = e;
    return (0, A.jsxs)("div", {
        children: [(0, A.jsx)(p.D, { variant: "text-md/medium", className: S4.Vf, children: t }), n],
    });
}
function S7(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, A.jsx)("div", {
        className: ir()(S4.UA, n),
        children: (0, A.jsxs)("div", {
            className: ir()(S4.yt, i),
            children: [
                (0, A.jsx)("div", {
                    className: ir()(S4.Fp, a && S4.Oz),
                    children: (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)(S8, { title: s ?? R.intl.string(R.t.Zb06yP), children: l }),
                            null != r ? (0, A.jsx)(S8, { title: R.intl.string(R.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, A.jsx)("div", { className: S4.oB, children: t }),
            ],
        }),
    });
}
var S9 = n(986687),
    Te = n(101058),
    Tt = n(321191),
    Tn = n(696451),
    Ti = n(590941);
function Tl() {
    return (0, A.jsxs)("div", {
        className: Ti.p$,
        children: [
            (0, A.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Ti.Sl }),
            (0, A.jsx)(p.D, { className: Ti.h8, variant: "heading-lg/extrabold", children: R.intl.string(R.t.Z1OZCV) }),
            (0, A.jsx)(H.E, { className: Ti.h8, variant: "text-md/normal", children: R.intl.string(R.t.ZSt4Tt) }),
            (0, A.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Ti.h8,
                children: (0, A.jsx)(_.$, {
                    variant: "primary",
                    text: R.intl.string(R.t.jQ3pqt),
                    onClick: function () {
                        ((0, t$.pX)(S.BVt.GUILD_DISCOVERY), (0, tM.default)());
                    },
                }),
            }),
        ],
    });
}
var Ts = n(81400),
    Tr = n(450232),
    Ta = n(252732),
    To = n(355622),
    Tu = n(408018),
    Td = n(865107),
    Tc = n(290386),
    Tg = n(486264);
let Tm = (0, tw.Ld)(),
    TA = (0, j.createChannelRecord)({ id: "1", type: S.rbe.DM }),
    TE = (0, tw.Ld)();
function Th(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, Tc.U)({ location: "profile_customization_about_me" }),
        [u, d] = E.useState(l ?? r),
        [c, g] = E.useState((0, Tu.x7)(u)),
        m = E.useRef(r),
        h = E.useRef(!1);
    return (
        E.useEffect(() => {
            if (m.current !== r) {
                let e = (0, Tu.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        E.useEffect(() => {
            void 0 !== l || u === r || h.current || (d(r), g((0, Tu.x7)(r)));
        }, [l, r, u]),
        (0, A.jsxs)(r2.A, {
            title: t,
            titleId: Tm,
            description: R.intl.string(R.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, A.jsx)(Td.Ay, {
                    "aria-describedby": TE,
                    "aria-labelledby": Tm,
                    className: Tg.i,
                    innerClassName: Tg.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: TA,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: nl.USER_SETTINGS_MODAL_KEY,
                    type: To.oU.PROFILE_BIO_INPUT,
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
                (0, A.jsx)(ln.A, { id: TE, children: R.intl.format(R.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var TS = n(930861),
    TT = n(821956),
    Tp = n(562819),
    Tx = n(84540),
    Tf = n(467690);
function TI(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eP.Ay)(),
        o = (0, S5.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, S5.CP)(n?.id),
        c = r ? TS.wL : sk.$n;
    return (0, A.jsx)(r2.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, A.jsxs)("div", {
            className: Tf.NC,
            children: [
                (0, A.jsx)(c, {
                    size: sk.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Tp.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ir()({ [Tf.yj]: r }),
                    children: R.intl.string(R.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tf.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, TT.uZ)(t, n) ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.OrokWm),
                            onClick: function () {
                                (0, Tx.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T_ = n(339984),
    TN = n(942132);
let TC = [{ name: "gif", extensions: ["gif"] }];
function Tb(e) {
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
        { newestAnalyticsLocation: g } = (0, eP.Ay)(),
        m = c ? TS.wL : sk.$n,
        h = E.useCallback(() => {
            (0, Ta.XD)({
                uploadType: T_.HL.AVATAR,
                analyticsSource: g,
                filters: u ? TC : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, A.jsx)(r2.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, A.jsxs)("div", {
            className: TN.NC,
            children: [
                (0, A.jsx)(m, {
                    className: ir()({ [TN.yj]: c }),
                    size: sk.$n.Sizes.SMALL,
                    onClick: h,
                    children: s ?? R.intl.string(R.t["4OynCD"]),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TN.DT,
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
var Ty = n(248778),
    Tv = n(810188);
function Tj(e) {
    let { user: t, guildId: n, className: i } = e,
        l = ae.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, eP.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, S5.B0)(t, n),
        d = (0, Ty.ux)("DisplayNameStylesSection"),
        [c, g] = (0, cS.kn)(d ? [eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        h = (0, E.useCallback)(() => {
            (g(cy.i.TAKE_ACTION),
                tt.default.track(S.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eG.L)({ analyticsLocations: s, guildId: n }));
        }, [s, n, g]),
        T = (0, E.useCallback)(() => {
            ((0, Tx.p)({ displayNameStyles: null }), tt.default.track(S.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        p = (0, E.useCallback)(() => {
            (0, Tx.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, A.jsx)(r2.A, {
        title: R.intl.string(eU.default["86GtGH"]),
        titleBadge: m ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t.y2b7CA), className: Tv.A }) : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: Tv.N,
            children: [
                (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(eU.default.vJqrIg), onClick: h }),
                null == n &&
                    null != x &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eU.default.ymq8WQ),
                        onClick: T,
                    }),
                null != n &&
                    null != x &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eU.default["j/KRxc"]),
                        onClick: p,
                    }),
            ],
        }),
    });
}
var TO = n(637193),
    TL = n(622410);
function TR(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, S5.rv)(t, n?.id),
        d = E.useCallback(() => {
            (0, TO.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = E.useCallback(() => {
            (0, Tx.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, A.jsx)(r2.A, {
        title: R.intl.string(R.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: TL.u,
            children: [
                (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(R.t.BwdeM1), onClick: d }),
                (void 0 === o ? (s ? a : r) != null : null != o) &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var TD = n(88524);
function TP(e) {
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
        { newestAnalyticsLocation: c } = (0, eP.Ay)(),
        g = d ? TS.wL : sk.$n;
    return (0, A.jsx)(r2.A, {
        className: s,
        title: R.intl.string(R.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, A.jsxs)("div", {
            className: TD.NC,
            children: [
                (0, A.jsx)(g, {
                    className: ir()({ [TD.yj]: d }),
                    size: sk.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Ta.XD)({ uploadType: T_.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: R.intl.string(R.t.N0bC3P),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TD.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? R.intl.string(R.t.jHlJNS) : R.intl.string(R.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var TG = n(617061),
    TU = n(625613);
function TM(e) {
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
        { analyticsLocations: u } = (0, eP.Ay)(),
        d = ae.Ay.canUsePremiumProfileCustomization(t),
        c = (0, S5.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, S5.nZ)(n?.id);
    E.useEffect(() => {
        d &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tX.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tB.uq)(tX.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let h = a ? TS.wL : sk.$n;
    return (0, A.jsx)(r2.A, {
        forcedDivider: r,
        borderType: ud.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, A.jsxs)("div", {
            className: TU.NC,
            children: [
                (0, A.jsx)(h, {
                    size: sk.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TG.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ir()({ [TU.yj]: a }),
                    children: R.intl.string(R.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TU.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.uMuafO),
                            onClick: function () {
                                (0, Tx.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TV = n(515727),
    Tk = n(594401);
function Tw(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = (0, S5.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, S5.Tu)(n?.id),
        [o, u] = (0, cS.kn)([eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, A.jsx)(r2.A, {
        showBorder: d,
        borderType: d ? ud.i.NEW_UPSELL : ud.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t.y2b7CA), className: Tk.Ad }) : void 0,
        description: d ? R.intl.string(R.t.yMoMAt) : void 0,
        errors: a,
        children: (0, A.jsxs)("div", {
            className: Tk.NC,
            children: [
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t["9/hmle"]),
                    onClick: function () {
                        ((0, TV.w)({ analyticsLocations: l, guild: n }), u(cy.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != s : null != r) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tk.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.nQBruk),
                            onClick: function () {
                                (0, Tx.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TF = n(602853),
    TB = n(654107),
    Tz = n(999291),
    TX = n(101928),
    TY = n(819169),
    TH = n(317097),
    TK = n(508274),
    TW = n(379012);
function TZ(e) {
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
        d = E.useRef(null),
        c = (0, TF.r)(nQ.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = nQ.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, Ta.sN)(i),
        h = (0, TH.Hl)(i),
        T = h === c ? g : h,
        p = m ? nQ.A.unsafe_rawColors.WHITE.css : nQ.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, TY.A)(a),
        f = (0, TY.A)(o),
        [I, _] = E.useState((0, a7.A)());
    return (
        E.useEffect(() => {
            (x !== a || f !== o) && _((0, a7.A)());
        }, [o, a, f, x]),
        (0, A.jsx)(r8.Y, {
            targetElementRef: d,
            positionKey: I,
            renderPopout: (e) =>
                (0, A.jsx)(TK.VN, {
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
                return (0, A.jsxs)("div", {
                    ref: d,
                    className: ir()(TW.oP, { [TW.r9]: s }),
                    children: [
                        (0, A.jsx)(n0.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? S.tEg : t,
                            style: { backgroundColor: h, borderColor: T },
                            className: TW.nf,
                            "aria-label": R.intl.string(R.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, A.jsx)(r9.PencilIcon, {
                                size: "custom",
                                className: TW.BW,
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
var Tq = n(190377);
function TQ(e) {
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
        c = (0, Tz.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, TX.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        E = ae.Ay.canUsePremiumProfileCustomization(t),
        h = null != n ? n : t.getAvatarURL(r, 80),
        S = (0, TF.r)(nQ.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, TB.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, A.jsx)(r2.A, {
              title: R.intl.string(R.t.DMeO2X),
              disabled: !E && !s,
              className: ir()(Tq.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, A.jsxs)("div", {
                  className: Tq.hd,
                  children: [
                      (0, A.jsx)("div", {
                          className: Tq.YX,
                          children: (0, A.jsx)(TZ, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: Tq.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: R.intl.string(R.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, A.jsx)("div", {
                          className: Tq.YX,
                          children: (0, A.jsx)(TZ, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: Tq.yz,
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
                              className: Tq.WA,
                              children: (0, A.jsx)(_.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: R.intl.string(R.t["L+GmoR"]),
                                  onClick: () => l([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function TJ(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: l,
            placeholder: s,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tw.GV)();
    return (0, A.jsx)(r2.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, A.jsx)(lo.k, {
            "aria-labelledby": o,
            placeholder: s ?? R.intl.string(R.t.NPEUUu),
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
var T$ = n(427262),
    T0 = n(684732),
    T1 = n(576705),
    T2 = n(931175);
function T3(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, h.bG)([T1.A], () => T1.A.can(S.xBc.CHANGE_NICKNAME, r) || T1.A.can(S.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Ew.L)(tX.PremiumTypes.TIER_2);
    return (0, A.jsxs)(r2.A, {
        title: R.intl.string(R.t.me1lRk),
        errors: t,
        children: [
            (0, A.jsx)(lo.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: S.d0r,
                onChange: function (e) {
                    (0, Tx.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : R.intl.string(R.t.gzjxQi),
            }),
            o && (0, A.jsx)(Tj, { user: s, guildId: r.id, className: T2.F }),
        ],
    });
}
var T6 = n(233454);
let T5 = "/assets/b25da78aa7949feb.png";
function T4(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, uP.Ay)(),
        { analyticsLocations: s } = (0, eP.Ay)(tL.A.PREMIUM_UPSELL_OVERLAY);
    return (E.useEffect(() => {
        n &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: tX.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                (0, tB.uq)(tX.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, s]),
    n)
        ? (0, A.jsxs)("div", {
              className: T6.ry,
              children: [
                  (0, A.jsx)("div", { children: i }),
                  (0, A.jsxs)("div", {
                      className: T6.Wc,
                      children: [
                          (0, A.jsx)("img", {
                              className: T6.Tn,
                              alt: R.intl.string(R.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case S.NJ8.ASH:
                                      case S.NJ8.DARK:
                                      case S.NJ8.ONYX:
                                          return T5;
                                      case S.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return T5;
                                  }
                              })(l),
                          }),
                          (0, A.jsxs)("div", {
                              className: T6._9,
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
                          (0, A.jsx)(uu.A, {
                              size: sk.$n.Sizes.LARGE,
                              color: sk.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ae.Ay.isPremium(t)
                                      ? R.intl.string(R.t.AfRWI8)
                                      : R.intl.string(R.t.nkdUym),
                              },
                              subscriptionTier: tX.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var T8 = n(203164);
function T7() {
    let e = (0, h.bG)([si.default], () => {
            let e = si.default.getCurrentUser();
            return (ta()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, Ew.L)(tX.PremiumTypes.TIER_2),
        n = (0, h.bG)([SJ.A, lh.A], () => lh.A.getGuild(SJ.A.selectedGuildId));
    ta()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, h.cf)([SJ.A], () => ({ ...SJ.A.getPendingChanges(n.id), errors: SJ.A.getErrors(n.id) })),
        d = (0, Te.V7)({ userId: e.id, image: i }),
        c = (0, Ts.EC)(n.id),
        g = (0, h.bG)([Tn.Ay], () => (null == n.id ? null : Tn.Ay.getMember(n.id, e.id))),
        m = (0, h.bG)([Tt.A], () => Tt.A.getGuildMemberProfile(e.id, n.id)),
        E = ae.Ay.canUsePremiumProfileCustomization(e),
        S = (0, S5.z5)(i, g?.avatar),
        T = (0, S5.Ac)(s, m?.banner),
        p = (0, T0.l)(o, m?.themeColors),
        x = m?.bio ?? "",
        f = m?.pronouns ?? "";
    return (0, A.jsxs)("div", {
        className: T8.Q,
        children: [
            (0, A.jsx)(
                T3,
                {
                    errors: u?.nick ?? c?.nick,
                    username: T$.Ay.getName(e),
                    pendingNick: l,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, A.jsx)(
                TJ,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, Tx.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, A.jsxs)(T4, {
                user: e,
                showOverlay: !E,
                children: [
                    (0, A.jsx)(
                        Tb,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.lqaIxI), (0, A.jsx)(Tr.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, Ta.rM)(e, g?.avatar, (e) => (0, Tx.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, A.jsx)(
                        TI,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t["7v0T9P"]), (0, A.jsx)(Tr.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, A.jsx)(Tj, { user: e, guildId: n.id }),
                    (0, A.jsx)(
                        TR,
                        { user: e, guild: n, titleIcon: (0, A.jsx)(Tr.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, A.jsx)(
                        TM,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.wR5wOo), (0, A.jsx)(Tr.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, A.jsx)(
                        Tw,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.GWrZOd), (0, A.jsx)(Tr.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, A.jsx)(
                        TP,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, Ta.rM)(e, m?.banner, (e) => (0, Tx.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, A.jsx)(TQ, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, Tx.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: p,
                    }),
                    (0, A.jsx)(
                        Th,
                        {
                            placeholder: R.intl.string(R.t["/7NKgv"]),
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.ZzAR2Y), (0, A.jsx)(Tr.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, Tx.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: x,
                            disabled: !E,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var T9 = n(832131);
function pe(e) {
    (0, la.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, A.jsx)(t, { source: { ...e, page: S.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function pt(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(tL.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, h.bG)([si.default], () => {
            let e = si.default.getCurrentUser();
            return (ta()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        s = (0, h.bG)([Tn.Ay], () => (null != t ? Tn.Ay.getMember(t.id, l.id) : null)),
        r = (0, h.bG)([Tt.A], () => !Tt.A.isFetchingProfile(l.id, t?.id)),
        a = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, h.cf)([SJ.A], () => SJ.A.getPendingChanges(t?.id)),
        c = (0, Te.V7)({ userId: l.id, image: o }),
        g = (0, S5.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, S5.B0)(l, t?.id);
    return (E.useEffect(() => () => e5.h.wait(S3.IM), []), a)
        ? (0, A.jsx)(a5.A, {})
        : r
          ? (0, A.jsxs)(eP.f5, {
                value: i,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/normal",
                        children: R.intl.format(R.t["/PTB2E"], {
                            helpCenterLink: ex.A.getArticleURL(S.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(r1.A, { guildId: t.id, onChange: n }),
                                  (0, A.jsx)(S7, {
                                      profilePreviewTitle: (0, A.jsx)(p.D, {
                                          variant: "heading-md/medium",
                                          className: T9.YV,
                                          children: R.intl.formatToPlainString(R.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, A.jsx)(S9.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: ae.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: pe,
                                          containerClassName: T9.ti,
                                      }),
                                      nameplatePreview: (0, A.jsx)(S6.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? T9.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, A.jsx)(T7, {}),
                                  }),
                              ],
                          })
                        : (0, A.jsx)(Tl, {}),
                ],
            })
          : (0, A.jsx)(a8.y, {});
}
var pn = n(903209),
    pi = n(641130);
function pl(e) {
    let { children: t, notice: n } = e;
    return (0, A.jsxs)("div", { className: pi.r, children: [n, (0, A.jsx)("div", { children: t })] });
}
var ps = n(269115),
    pr = n(823092),
    pa = n(839534),
    po = n(379197),
    pu = n(488430),
    pd = n(457421),
    pc = n(940622),
    pg = n(25176),
    pm = n(757993);
let pA = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: l } = (0, eP.Ay)(tL.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = E.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, pc.mb)(pg.RN.UPSELL_BANNER)),
        (t = (0, pc.mb)(pg.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, h.bG)([pd.A], () => pd.A.getMarketingBySurface(po.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: pu.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, pr.L_)();
    return (
        E.useEffect(() => {
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tX.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            }),
                (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                    (0, tB.uq)(tX.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [l, d]),
        (0, A.jsxs)("div", {
            ref: s,
            className: pm.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, A.jsx)("div", {
                    className: pm.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, A.jsx)("img", { src: a, className: pm.Qw, alt: "" }),
                }),
                (0, A.jsxs)("div", {
                    className: pm.Em,
                    children: [
                        (0, A.jsx)(p.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: pm.DD,
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
                            (0, pa.Cz)({
                                analyticsLocations: l,
                                analyticsSource: tL.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
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
var pE = n(451909),
    ph = n(202639),
    pS = n(285373),
    pT = n(835071),
    pp = n(724651),
    px = n(732280),
    pf = n(590180),
    pI = n(898461),
    p_ = n(469054),
    pN = n(601298),
    pC = n(207803),
    pb = n(461797);
let py = Object.keys(pb.jB);
function pv(e) {
    let t = null == e ? py : py.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var pj = n(130490),
    pO = n(221650);
function pL(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        l = (0, pj.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = E.useMemo(() => {
            let e = (0, pb.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, A.jsxs)("div", {
        className: pO.kL,
        children: [
            (0, A.jsx)(n0.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                className: pO.x6,
                "aria-label": R.intl.string(R.t["44yJxh"]),
                children: l.render(),
            }),
            (0, A.jsxs)(n0.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                "aria-label": `${s}: ${R.intl.string(R.t["44yJxh"])}`,
                className: pO.Lt,
                children: [
                    (0, A.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: pO.L_ }),
                    (0, A.jsx)(H.E, {
                        className: pO._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var pR = n(511484),
    pD = n(811611),
    pP = n(206697),
    pG = n(507553);
function pU(e, t) {
    let n = pG.A.useField("scrollPosition"),
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion);
    (0, E.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            (l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), pG.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var pM = n(844222),
    pV = n(842092);
let pk = "/assets/d4955aabdcb5bdee.png",
    pw = { assetOrigin: p_.E.NEW_ASSET, imageUri: pk, staticImageUri: pk, description: "", originalAsset: void 0 };
function pF(e) {
    let { user: t } = e,
        { reducedMotion: n } = E.useContext(pM.C),
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
            tryItOutAvatarDecoration: S,
            tryItOutDisplayNameStyles: T,
        } = (0, h.cf)([SJ.A], () => {
            let e = SJ.A.getPendingChanges(),
                t = SJ.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, Te.V7)({ userId: t.id, image: g ?? i });
    return (0, A.jsx)(S9.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? l ?? pw,
        pendingDisplayNameStyles: T ?? a,
        pendingAvatar: p,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== S ? S : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : pV.WX,
        containerClassName: pV.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var pB = n(829497);
function pz(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = ae.Ay.isPremium(t),
        s = ae.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, h.cf)([SJ.A], () => {
            let e = SJ.A.getPendingChanges(),
                t = SJ.A.getErrors(),
                n = SJ.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, E.useState)(pv()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, E.useMemo)(() => {
                    let t = (0, pb.Wt)(e);
                    return {
                        banner: (0, pN.X)({
                            assetOrigin: p_.E.NEW_ASSET,
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
                r = (0, h.bG)([pf.A], () => {
                    let e = pf.A.getProduct(l);
                    return (0, pI.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, E.useEffect)(() => {
                (0, pC.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, E.useCallback)(() => {
                let n = pv(e);
                (t(n), tt.default.track(S.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = E.useRef(null);
    pU(m, eC._F.TRY_IT_OUT);
    let { analyticsLocations: T, sourceAnalyticsLocations: x } = (0, eP.Ay)(tL.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function f(e) {
        e && ((0, pP.T)(), tt.default.track(S.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    E.useEffect(() => {
        n &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tX.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: S.liQ.USER_SETTINGS },
                location_stack: x,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, x, () => (0, tB.uq)(tX.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [x, t, n]);
    let I = (0, px.V)()?.subscriptionTrial?.skuId === tX.pe.TIER_2,
        _ = (0, pp.O)(),
        N = (0, pR.U9)(_, tX.pe.TIER_2);
    return i
        ? (0, A.jsx)(eP.f5, {
              value: T,
              children: (0, A.jsxs)(ud.A, {
                  ref: m,
                  className: pB.MT,
                  type: ud.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, A.jsx)(S7, {
                          stickyPreview: !1,
                          layoutClassName: pB.th,
                          profilePreviewTitle: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(rJ.t, { size: "md", color: "currentColor", className: pB.PC }),
                                  R.intl.string(R.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, A.jsxs)(A.Fragment, {
                              children: [(0, A.jsx)(pL, { preset: c, onShuffle: g }), (0, A.jsx)(pF, { user: t })],
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
                                              className: pB.h_,
                                              variant: "text-sm/normal",
                                              children: R.intl.string(R.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsx)(TQ, {
                                      className: pB.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Te.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: pC.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, A.jsx)(TP, {
                                      className: pB.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: pC.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, A.jsx)(Tb, {
                                          className: pB.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: pC.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: R.intl.string(R.t["7z0D1c"]),
                                          sectionTitle: R.intl.string(R.t.vtFfPX),
                                      }),
                                  (0, A.jsx)(Tj, { user: t, className: pB.fz }),
                                  !I &&
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/normal",
                                          children: R.intl.string(R.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !I &&
                          (0, A.jsx)(ph.d, {
                              onSubscribeModalClose: f,
                              className: pB.Kv,
                              showUpsell: !0,
                              text: R.intl.format(R.t.TmfgI2, {
                                  onClick: () => {
                                      (0, pT.K)({ onSubscribeFinish: f });
                                  },
                              }),
                              button: l
                                  ? R.intl.string(R.t.AfRWI8)
                                  : N
                                    ? R.intl.formatToPlainString(R.t.bkQ4bH, { percent: _?.discount.amount })
                                    : R.intl.string(R.t.pj0XBN),
                              position: "inline",
                          }),
                      I &&
                          (0, A.jsxs)("div", {
                              children: [
                                  (0, A.jsx)("div", { className: pB.BU }),
                                  (0, A.jsx)(pD.Ay, {
                                      type: tX.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tX.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var pX = n(814390),
    pY = n(643056),
    pH = n(843282),
    pK = n(145497),
    pW = n(685073),
    pZ = n(534400),
    pq = n(581781),
    pQ = n(743981),
    pJ = n(195801);
let p$ = (0, tw.Ld)(),
    p0 = E.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, h.cf)([si.default], () => (0, pW.Zo)(si.default.getCurrentUser()?.primaryGuild)),
            s = void 0 !== n ? n : (l.guildId ?? null),
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
                let { guildId: n, tag: i, badge: r } = l;
                return (
                    null == n ||
                        null == i ||
                        n !== s ||
                        e.has(n) ||
                        e.set(n, { id: n, name: R.intl.string(R.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, l, s]),
            a = E.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = E.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, A.jsx)(pq.A, {
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
                        : (0, A.jsx)(pK.j, {
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
                        : (0, A.jsx)(pZ.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: pQ.Sl.SIZE_16,
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
            m = E.useCallback((e) => e === s, [s]),
            S = E.useCallback((e) => e, []),
            T = E.useCallback(() => {
                i?.(null);
            }, [i]),
            p = E.useRef(null);
        return (
            pU(p, eC._F.GUILD_TAG),
            (0, A.jsxs)(r2.A, {
                title: R.intl.string(R.t.Pdd1nd),
                titleId: p$,
                ref: p,
                children: [
                    (0, A.jsx)(H.E, {
                        className: pJ.VA,
                        variant: "text-sm/normal",
                        children: R.intl.string(R.t.mlZ6Jx),
                    }),
                    (0, A.jsx)(pH.Pw, {
                        className: pJ.Lt,
                        optionClassName: pJ.S0,
                        isSelected: m,
                        options: a,
                        select: g,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: S,
                        clear: T,
                        clearable: null != s,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var p1 = n(318785),
    p2 = n(992526),
    p3 = n(470739);
let p6 = function () {
    return (0, p2.J)({ location: "UserSettingsProfileCustomization" })
        ? (0, A.jsx)(r2.A, {
              title: R.intl.string(R.t.l6w3Vj),
              description: R.intl.string(R.t.joHqdj),
              children: (0, A.jsx)(_.$, {
                  text: R.intl.string(R.t.wRraFx),
                  onClick: () => {
                      (0, p3._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var p5 = n(953726);
let p4 = (0, tw.Ld)();
function p8(e) {
    let t = (0, Ew.L)(tX.PremiumTypes.TIER_2);
    return (0, A.jsxs)(r2.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: R.intl.string(R.t["9AjdkD"]),
        titleId: p4,
        children: [
            (0, A.jsx)("div", {
                children: (0, A.jsx)(lo.k, {
                    "aria-labelledby": p4,
                    placeholder: e.placeholder,
                    maxLength: S.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, A.jsx)(Tj, { user: e.user, className: p5.F }),
        ],
    });
}
var p7 = n(376626);
function p9(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = L.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, A.jsx)("div", {
        className: p7.u,
        children: (0, A.jsx)(tJ.d, {
            label: R.intl.string(R.t["3cWDuO"]),
            description: l ? null : R.intl.formatToPlainString(R.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, Sq._e)() : (0, Tx.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function xe(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, TF.r)(nQ.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TB.rh)(s, r, !1),
        o = (0, TH.LX)(a[0]);
    return (0, A.jsx)(r2.A, {
        title: R.intl.string(R.t["/X3fkf"]),
        children: (0, A.jsx)(TZ, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var xt = n(518477);
let xn = function () {
    let e = (0, h.bG)([uI.default], () => uI.default.getId());
    return (0, A.jsx)(r2.A, {
        title: R.intl.string(R.t.Jzj9q4),
        children: (0, A.jsx)(_.$, {
            text: R.intl.string(R.t.Geikwq),
            onClick: () => {
                (0, S1.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tL.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: xt.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var xi = n(654910);
function xl() {
    let e = (0, h.bG)([si.default], () => {
            let e = si.default.getCurrentUser();
            return (ta()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, h.bG)([Tt.A], () => Tt.A.getUserProfile(e.id)),
        n = (0, pY.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, h.cf)([SJ.A], () => {
            let e = SJ.A.getPendingChanges(),
                t = SJ.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Te.V7)({ userId: e.id, image: i }),
        E = (0, Ts.EC)(),
        S = ae.Ay.canUsePremiumProfileCustomization(e),
        T = (0, S5.z5)(i, e.avatar),
        p = (0, S5.Ac)(s, t?.banner),
        x = (0, Tz.Ay)(e.id),
        f = x?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (E?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (E?.bio ?? []),
        N = (0, p1.b)(),
        C = null != (0, pW.Zo)(e.primaryGuild).guildId;
    return (0, A.jsxs)("div", {
        className: xi.Q,
        children: [
            (0, A.jsx)(p8, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: l,
                onGlobalNameChange: (e) => (0, Tx.p)({ globalName: e }),
                user: e,
            }),
            (0, A.jsx)(
                TJ,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, Tx.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, A.jsx)(xn, {}),
            (0, A.jsx)(
                Tb,
                {
                    onAvatarChange: (e) => {
                        ((0, Tx.p)({ avatar: e }), (0, S5.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: T,
                    errors: g.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, A.jsx)(TI, { user: e, sectionTitle: R.intl.string(R.t["7v0T9P"]) }, "decoration"),
            (0, A.jsx)(TR, { user: e }),
            (0, A.jsx)(TM, { user: e, sectionTitle: R.intl.string(R.t.wR5wOo) }, "effect"),
            (0, A.jsx)(Tw, { user: e, sectionTitle: R.intl.string(R.t.GWrZOd) }, "frame"),
            S
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(
                              TP,
                              {
                                  showRemoveBannerButton: p,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, Tx.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, A.jsx)(TQ, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, Tx.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, A.jsx)(
                      xe,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, Tx.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, A.jsx)(
                Th,
                {
                    sectionTitle: R.intl.string(R.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, Tx.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, A.jsx)(p0, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, Tx.p)({ primaryGuildId: e }),
                }),
            null != f &&
                !n &&
                (0, A.jsx)(p9, { legacyUsername: f, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, A.jsx)(p6, {}, "badges"),
        ],
    });
}
function xs() {
    (0, la.openModalLazy)(async () => {
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
var xr = n(447080);
function xa() {
    let e = (0, h.bG)([si.default], () => {
            let e = si.default.getCurrentUser();
            return (ta()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, h.cf)([SJ.A], () => ({ ...SJ.A.getPendingChanges(), showNotice: SJ.A.showNotice() })),
        a = (0, Te.V7)({ userId: e.id, image: i }),
        o = (0, S5.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, pX.A)() && null != n ? pE.Ay.parse(void 0, n).content : n,
        d = ae.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eP.Ay)(tL.A.USER_SETTINGS_USER_PROFILE);
    E.useEffect(() => () => e5.h.wait(Sq.IM), []);
    let [g, m] = E.useState(!1),
        T = !d,
        p = E.useRef(null);
    return t
        ? (0, A.jsx)(a5.A, {})
        : (0, A.jsxs)(eP.f5, {
              value: c,
              children: [
                  (0, A.jsx)(pA, {}),
                  (0, A.jsx)(S7, {
                      profilePreview: (0, A.jsx)(S9.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: xs,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: xr.ti,
                      }),
                      nameplatePreview: (0, A.jsx)(S6.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? xr.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, A.jsx)(xl, {}),
                  }),
                  (0, A.jsx)(ps.L, {
                      innerRef: p,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, A.jsx)("div", {
                          ref: p,
                          children: (0, A.jsx)(pz, { user: e, shouldShow: T, isVisible: g }),
                      }),
                  }),
                  T &&
                      !s &&
                      (0, A.jsx)(ph.d, {
                          className: xr.EL,
                          showUpsell: !g,
                          text: R.intl.format(R.t.TmfgI2, { onClick: () => (0, pT.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, A.jsx)(pS.l, {
                              size: "md",
                              location: tL.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, A.jsx)("div", {
                              className: xr.Xl,
                              children: (0, A.jsx)(_.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (tt.default.track(S.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          p?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: R.intl.string(R.t.uw9zI7),
                                  icon: rJ.t,
                              }),
                          }),
                      }),
              ],
          });
}
var xo = n(625494);
n(46121);
var xu = n(944983);
let xd = { [eC.Eq.USER_PROFILE]: "main_profile_tab", [eC.Eq.GUILD]: "guild_profile_tab" },
    xc = (0, d.E2)(c.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, h.bG)([lS.A, dA.Ay, SJ.A], () => {
                    let e = SJ.A.selectedGuildId ?? lS.A.getGuildId();
                    return null == e || SJ._.has(e) ? dA.Ay.getFlattenedGuildIds().find((e) => !SJ._.has(e)) : e;
                }),
                t = (0, h.bG)([lh.A], () => lh.A.getGuild(e)),
                n = (0, h.bG)([SJ.A], () => SJ.A.showNotice()),
                i = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
                l = pG.A.useField("subsection");
            return (
                E.useEffect(() => {
                    (0, n4._)(xd[l]);
                }, [l]),
                E.useEffect(() => {
                    null != i && t?.id != null && (0, pn.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, A.jsx)(pl, {
                    children: (0, A.jsxs)(uF.F, {
                        component: (0, A.jsx)(ln.A, {
                            children: (0, A.jsx)(p.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(R.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, A.jsxs)(S2.V, {
                                className: xu.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            ((0, n8.fO)({ duration: 300, intensity: 1.4 }),
                                                xo._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eC.Eq.GUILD && null != t && (0, S3.V2)(t.id),
                                            pG.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, A.jsx)(
                                        S2.V.Item,
                                        {
                                            className: xu.YU,
                                            id: eC.Eq.USER_PROFILE,
                                            children: R.intl.string(R.t["2p07FR"]),
                                        },
                                        eC.Eq.USER_PROFILE,
                                    ),
                                    (0, A.jsx)(
                                        S2.V.Item,
                                        {
                                            className: ir()(xu.YU, xu.HY),
                                            "aria-label": R.intl.string(R.t.kPHroX),
                                            id: eC.Eq.GUILD,
                                            children: R.intl.string(R.t.kPHroX),
                                        },
                                        eC.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eC.Eq.GUILD
                                ? (0, A.jsx)(pt, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, n8.fO)({ duration: 300, intensity: 1.4 }),
                                                  xo._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, S3.JJ)(e.id);
                                      },
                                  })
                                : (0, A.jsx)(xa, {}),
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
    xg = (0, d.zZ)(c.X.PROFILE_CATEGORY, { buildLayout: () => [xc] });
var xm = n(379633);
function xA() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, S0.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return null == e
        ? null
        : (0, A.jsxs)("div", {
              className: xm.a5,
              children: [
                  (0, A.jsx)(f.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: I._3.SIZE_48,
                      "aria-label": R.intl.string(R.t.lqaIxI),
                  }),
                  (0, A.jsxs)("div", {
                      className: xm.FS,
                      children: [
                          (0, A.jsx)(H.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, A.jsxs)("div", {
                              className: xm.Fk,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: R.intl.string(R.t.Ip9nBS),
                                  }),
                                  (0, A.jsx)(r9.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let xE = (0, d.t_)(c.X.PROFILE_PANEL, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        notice: { stores: [SJ.A], element: SQ.A },
        initialize: () => () =>
            e5.h.wait(() => {
                (0, Sq.F7)();
            }),
        buildLayout: () => [xg],
    }),
    xh = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: xT,
        StronglyDiscouragedCustomComponent: xA,
        usePredicate: () => !(0, S$.X)("user_settings_sidebar"),
        buildLayout: () => [xE],
    }),
    xS = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: xT,
        StronglyDiscouragedCustomComponent: xA,
        usePredicate: () => (0, S$.X)("user_settings_sidebar"),
        onClick: () => {
            let e = uI.default.getId();
            (0, S1.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function xT() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, S0.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return (0, A.jsx)(f.eu, { src: t, avatarDecoration: n, size: I._3.SIZE_20, "aria-hidden": !0 });
}
let xp = (0, d.WI)(c.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [xh, xS] });
var xx = n(98207),
    xf = (n(204925), n(818348));
let xI = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, la.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 888363),
            );
            return (n) => (0, A.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? xf.tE : null, onCloseCallback: t },
    );
};
var x_ = n(940856),
    xN = n(379257),
    xC = n(847599),
    xb = n(36149),
    xy = (((r = {}).ADULT = "adult"), (r.TEEN = "teen"), (r.UNVERIFIED = "unverified"), r);
function xv() {
    let e = (0, xb.b8)();
    return (0, xb.yM)() ? "teen" : e ? "adult" : "unverified";
}
function xj() {
    xN.A.openUrl(ex.A.getArticleURL(S.MVz.TIGGER_PAWTECT_LEARN_MORE));
}
function xO() {
    switch (xv()) {
        case "adult":
            return R.intl.string(R.t.XxRj7f);
        case "teen":
            return R.intl.string(R.t.sK0dmH);
        case "unverified":
            return R.intl.string(R.t.lKDPGA);
    }
}
(0, A7.mj)({
    name: "2026-08-tiny-bronco",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let { createLoader: xL } = n(632296),
    xR = xL(
        {
            bg: () => n.e("695068").then(n.t.bind(n, 133975, 19)),
            cs: () => n.e("241483").then(n.t.bind(n, 663942, 19)),
            da: () => n.e("841356").then(n.t.bind(n, 137799, 19)),
            de: () => n.e("745176").then(n.t.bind(n, 12939, 19)),
            el: () => n.e("502078").then(n.t.bind(n, 658573, 19)),
            "en-GB": () => n.e("635638").then(n.t.bind(n, 198165, 19)),
            "es-419": () => n.e("708688").then(n.t.bind(n, 836307, 19)),
            "es-ES": () => n.e("102094").then(n.t.bind(n, 928029, 19)),
            fi: () => n.e("833302").then(n.t.bind(n, 843381, 19)),
            fr: () => n.e("169005").then(n.t.bind(n, 72380, 19)),
            hi: () => n.e("529360").then(n.t.bind(n, 328659, 19)),
            hr: () => n.e("484459").then(n.t.bind(n, 40614, 19)),
            hu: () => n.e("396124").then(n.t.bind(n, 455959, 19)),
            it: () => n.e("732090").then(n.t.bind(n, 909889, 19)),
            ja: () => n.e("229274").then(n.t.bind(n, 614945, 19)),
            ko: () => n.e("596223").then(n.t.bind(n, 89410, 19)),
            lt: () => n.e("916793").then(n.t.bind(n, 156768, 19)),
            nl: () => n.e("183283").then(n.t.bind(n, 131582, 19)),
            no: () => n.e("239024").then(n.t.bind(n, 36531, 19)),
            pl: () => n.e("441973").then(n.t.bind(n, 582804, 19)),
            "pt-BR": () => n.e("957942").then(n.t.bind(n, 373973, 19)),
            ro: () => n.e("659460").then(n.t.bind(n, 445807, 19)),
            ru: () => n.e("135846").then(n.t.bind(n, 582725, 19)),
            "sv-SE": () => n.e("613351").then(n.t.bind(n, 613658, 19)),
            th: () => n.e("318029").then(n.t.bind(n, 63388, 19)),
            tr: () => n.e("89999").then(n.t.bind(n, 35692, 19)),
            uk: () => n.e("723993").then(n.t.bind(n, 878848, 19)),
            vi: () => n.e("816134").then(n.t.bind(n, 454053, 19)),
            "zh-CN": () => n.e("447963").then(n.t.bind(n, 536342, 19)),
            "zh-TW": () => n.e("870727").then(n.t.bind(n, 647866, 19)),
            "en-US": () => n.e("101009").then(n.bind(n, 257320)),
        },
        "en-US",
    ),
    { makeMessagesProxy: xD } = n(632296),
    xP = xD(xR);
function xG() {
    return (xv(), null);
}
function xU() {
    let e = (xv(), null);
    return null != e ? { type: m.hp.ICON, ...e } : null;
}
(n(26137), n(957485));
var xM = n(513987);
let xV = [{ badgeType: m.Xi.NEW, dismissibleContent: eu.M.TINY_BRONCO_SETTINGS }],
    xk = [];
function xw() {
    return (0, xM.Wt)() ? xV : xk;
}
var xF = n(207560),
    xB = (((a = {}).LEGACY = "legacy"), (a.TINY_BRONCO = "tinyBronco"), a),
    xz = (((o = {}).VERIFY = "verify"), (o.EDIT = "edit"), (o.INFO = "info"), o);
function xX(e, t) {
    let n = (0, h.bG)([si.default], () => null != si.default.getCurrentUser()),
        i = (0, xF.fk)(),
        l = xv(),
        s = (0, xb.Y2)();
    if (!n || !i || "legacy" !== t) return !1;
    switch (l) {
        case xy.UNVERIFIED:
        case xy.TEEN:
            return "verify" === e;
        case xy.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var xY = n(841365);
function xH() {
    let e = xO();
    return (0, A.jsxs)(H.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, R.intl.format(xY.default.WM5adV, { handleOnHelpUrlHook: xj })],
    });
}
let xK = {
        useTitle: () => R.intl.string(R.t["/52UYy"]),
        useSubtitle: xG,
        useVariant: () => "secondary",
        useLeadingDecoration: xU,
        getDismissibleBadges: xw,
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: xH,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        onClick: function () {
            (0, la.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    },
    xW = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...xK, usePredicate: () => xX(xz.EDIT, xB.LEGACY) }),
    xZ = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...xK,
        usePredicate: () => xX(xz.EDIT, xB.TINY_BRONCO),
        useAriaLabel: () => R.intl.string(R.t.pBMSie),
    }),
    xq = {
        useTitle: () => R.intl.string(R.t["/52UYy"]),
        useSubtitle: xG,
        useLeadingDecoration: function () {
            let e = (xv(), null);
            return null != e ? { type: m.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: xw,
        useTrailingDecoration: () => ({ type: m.Ln.TEXT, text: xO() }),
    },
    xQ = (0, d.v_)(c.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...xq, usePredicate: () => xX(xz.INFO, xB.LEGACY) }),
    xJ = (0, d.v_)(c.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...xq,
        usePredicate: () => xX(xz.INFO, xB.TINY_BRONCO),
    }),
    x$ = {
        useTitle: () => R.intl.string(R.t["/52UYy"]),
        useSubtitle: xG,
        useVariant: () => "secondary",
        useLeadingDecoration: xU,
        getDismissibleBadges: xw,
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: xO() }),
        useLabel: function () {
            return (0, xb.yM)() ? R.intl.string(R.t["9KiIz6"]) : R.intl.string(R.t.DVywUB);
        },
        onClick: function () {
            xN.A.showAgeVerificationGetStartedModal({ entryPoint: xC.q1.ACCOUNT_AGE_GROUP });
        },
    },
    x0 = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...x$, usePredicate: () => xX(xz.VERIFY, xB.LEGACY) }),
    x1 = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...x$,
        usePredicate: () => xX(xz.VERIFY, xB.TINY_BRONCO),
    }),
    x2 = [x0, xW, xQ],
    x3 = [x1, xZ, xJ],
    x6 = (0, d.Tf)(c.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => R.intl.string(R.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: R.intl.string(R.t.qxk9zo) }),
        useLabel: () => R.intl.string(R.t.BleMPB),
        onClick: () => xI(),
    });
function x5(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function x4(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function x8(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = E.useState(!1),
        a = s ? t : n(t);
    return (0, A.jsxs)(X.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: a }),
            (0, A.jsx)(AI.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
            }),
        ],
    });
}
function x7() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.email);
    return null == e
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t["8SfTN/"]) })
        : (0, A.jsx)(x8, {
              text: e,
              censor: x4,
              revealLabel: R.intl.string(R.t["Zvx+yV"]),
              hideLabel: R.intl.string(R.t.nqTD4d),
          });
}
let x9 = (0, d.Tf)(c.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, h.bG)([si.default], () => si.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: x7 }),
    useLabel: function () {
        return null == (0, h.bG)([si.default], () => si.default.getCurrentUser()?.email)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, h.bG)([si.default], () => si.default.getCurrentUser()?.email)
            ? R.intl.string(R.t["pvBD+W"])
            : R.intl.string(R.t["8peUT0"]);
    },
    onClick: function () {
        (0, la.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, A.jsx)(e, { ...t });
        });
    },
});
var fe = n(557722),
    ft = n(53516);
function fn() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t.I5kDqj) })
        : (0, A.jsx)(X.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, A.jsx)(x8, {
                  text: t,
                  censor: x5,
                  revealLabel: R.intl.string(R.t.eY3xlT),
                  hideLabel: R.intl.string(R.t["jllbv+"]),
              }),
          });
}
let fi = (0, d.Tf)(c.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, h.bG)([si.default], () => si.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.kerONq),
    useAriaLabel: function () {
        return null == (0, h.bG)([si.default], () => si.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t["SfUuE+"])
            : R.intl.string(R.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fn }),
    useLabel: function () {
        return null == (0, h.bG)([si.default], () => si.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t.OYkgVk)
            : R.intl.string(R.t.bt75uw);
    },
    onClick: function () {
        null == si.default.getCurrentUser()?.phone
            ? (0, la.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, A.jsx)(e, { reason: fe.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: ft.V },
              )
            : (0, la.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, A.jsx)(e, { ...t });
              });
    },
});
function fl() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fs() {
    let e = (0, Ts.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, h.bG)([si.default], () => si.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, A.jsx)(lt.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, A.jsx)(iY.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: nQ.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let fr = (0, d.Tf)(c.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => R.intl.string(R.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fs,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        useAriaLabel: () => R.intl.string(R.t.JECa91),
        useSubtitle: () => (fl() ? R.intl.string(R.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fl,
        onClick: function () {
            (0, la.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    }),
    fa = (0, d.zZ)(c.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, h.bG)([si.default], () => null != si.default.getCurrentUser()),
        useTitle: () => R.intl.string(R.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
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
                            button: { text: R.intl.string(R.t.lm1UKt), onClick: () => (0, x_.S)(e) },
                        }
                  : {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: R.intl.string(R.t["/3qnL/"]),
                        text: R.intl.string(R.t.qKs3vg),
                        button: { text: R.intl.string(R.t["7psymi"]), onClick: () => xI() },
                    };
        },
        buildLayout: () => [fr, x6, x9, fi, ...x2],
    });
var fo = n(398177);
let fu = (0, d.Tf)(c.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => R.intl.string(R.t["CIGa+7"]),
    useLabel: () => R.intl.string(R.t.bt75uw),
    useAriaLabel: () => R.intl.string(R.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, la.openModal)((e) => (0, A.jsx)(fo.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fd = n(200921);
let fc = [];
function fg() {
    fc = [];
}
class fm extends h.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fc;
    }
}
let fA = new fm(e5.h, {
    LOGOUT: fg,
    LOGIN_SUCCESS: fg,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fc = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...fc],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        fc = n;
    },
});
function fE() {
    let e = (0, h.cf)([fA], () => fA.getSessions());
    return E.useMemo(() => {
        let t = [...e],
            n = null,
            i = uI.default.getAuthSessionIdHash();
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
function fh(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? R.intl.string(R.t.TXCmfL) : io()(e).fromNow();
}
var fS = n(176524),
    fT = n(646270),
    fp = n(738678),
    fx = n(489828);
function ff(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, A.jsxs)(X.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, A.jsx)(fS.A, { icon: t, color: r ? nQ.A.colors.ICON_MUTED : "currentColor" }),
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
                    (0, A.jsx)(H.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function fI(e) {
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
                            return { text: R.intl.string(R.t.cDHCNY), icon: hL.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: fT.u };
                        case "horizon os":
                            return { text: e, icon: fp.G };
                        default:
                            return { text: e, icon: hL.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : fh(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(ii.Vq);
    return (0, A.jsx)(ff, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, A.jsx)(n0.D, {
                className: fx.X,
                onClick: () => (0, fd.U0)(t.id_hash),
                "aria-label": R.intl.string(R.t.E4MJNt),
                children: (0, A.jsx)(Ey.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function f_(e) {
    let { title: t, children: n } = e,
        i = E.useId();
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
let fN = (0, d.E2)(c.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = fE();
            return null == e
                ? (0, A.jsx)(a8.y, {})
                : (0, A.jsx)(f_, {
                      title: R.intl.string(R.t.LLS19o),
                      children: (0, A.jsx)(fI, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fC = (0, d.E2)(c.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fE();
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.Vij32M),
                description: R.intl.string(R.t.OTXyaf),
                children: (0, A.jsx)(_.$, {
                    onClick: () => (0, fd.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: R.intl.string(R.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fE();
            return e.length > 0;
        },
    });
var fb = n(766928);
function fy() {
    return (0, A.jsx)(ff, {
        icon: fb.W,
        label: R.intl.string(R.t.iUa0sn),
        description: R.intl.format(R.t["044+8i"], {
            onClick: () =>
                (0, nl.openUserSettings)(c.X.ACCOUNT_PANEL, { analyticsLocations: [tL.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fv = (0, d.E2)(c.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fE(),
                t = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return (0, A.jsxs)(f_, {
                title: R.intl.string(R.t.xx1MWc),
                children: [
                    e.map((e) => (0, A.jsx)(fI, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, A.jsx)(fy, {}),
                ],
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fE(),
                t = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fj = (0, d.zZ)(c.X.SESSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useSubtitle: () => R.intl.string(R.t.b7ZpTM),
        initialize: () => {
            (0, fd.GY)();
        },
        buildLayout: () => [fN, fv, fC],
        useSearchTerms: () => [
            R.intl.string(R.t["+1h0k/"]),
            R.intl.string(R.t.LLS19o),
            R.intl.string(R.t.xx1MWc),
            R.intl.string(R.t.lSWsrd),
        ],
    }),
    fO = (0, d.t_)(c.X.SESSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useObscuredNotice: a5.L,
        buildLayout: () => [fj],
    }),
    fL = (0, d.t0)(c.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fO],
        initialize: () => {
            (0, fd.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = fE(),
                n = t.length + +(null != e);
            return {
                type: m.xn.TEXT,
                text: n > 0 ? R.intl.formatToPlainString(R.t.G7zwOk, { count: n }) : R.intl.string(R.t.MKDeyL),
            };
        },
    });
var fR = n(464477);
function fD(e) {
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
function fP() {
    return (0, aK.bG)([si.default], () => {
        let e = si.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fG =
    (((u = {}).AVAILABLE = "available"),
    (u.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (u.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    u);
function fU() {
    let e = (0, aK.bG)([si.default], () => si.default.getCurrentUser()?.verified);
    return fR.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fM() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, aK.bG)([lh.A, T1.A, si.default], () =>
        si.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? R.intl.string(R.t.hxf9fX)
                : R.intl.string(R.t["3iKih7"])
            : lh.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        T1.A.can(S.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? R.intl.string(R.t.OYTCUh)
                  : R.intl.string(R.t.HC8uSZ)
              : null,
    );
}
var fV = n(466034);
let fk = (0, d.Tf)(c.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: () => fM(!0),
        useDisabled: () => null !== fM(!0),
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, h.bG)([uI.default], () => uI.default.hasTOTPEnabled()),
                t = fU() === fG.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, nJ.A)({
                title: R.intl.string(R.t["D+aE7g"]),
                subtitle: R.intl.string(R.t.EA4ZEk),
                variant: "critical",
                confirmText: R.intl.string(R.t.N86XcP),
                onConfirm: () => xx.A.disable(),
            }),
    }),
    fw = (0, d.zZ)(c.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RumMFo),
        useSubtitle: () => R.intl.string(R.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, h.bG)([uI.default], () => uI.default.hasTOTPEnabled()),
                t = fU() === fG.AVAILABLE;
            if (!e && t)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: R.intl.string(R.t.cTNUeD),
                            onClick: fV.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fU()) {
                case fG.UNAVAILABLE_NO_CRYPTO:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.PhHhsj) };
                case fG.UNAVAILABLE_UNVERIFIED:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                case fG.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fk],
    });
var fF = n(670492),
    fB = n(32880),
    fz = n(663417),
    fX = n(658675),
    fY = n(900686);
function fH() {
    (0, la.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, A.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    xx.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, la.openModalLazy)(
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
var fK = n(858487);
function fW(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fZ() {
    let e = fF.A.getVerificationKey();
    try {
        await xx.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, l8.P0)({
            message: e.body?.message ?? R.intl.string(R.t.F8FvUy),
            type: l7.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fq(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = fW(t),
        l = E.useRef(null),
        s = (0, A.jsxs)(A.Fragment, {
            children: [(0, A.jsx)(fX.P, { checked: n }), (0, A.jsx)(H.E, { variant: "text-md/normal", children: i })],
        });
    return uy.p5
        ? (0, A.jsx)(n0.D, {
              tag: "li",
              className: ir()(fK.aY, fK.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uy.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  ((0, uy.C)(i),
                      (0, l8.P0)({
                          message: R.intl.string(R.t.mGZ66D),
                          type: l7.Ck.SUCCESS,
                          id: "backup-code-copied",
                      }));
              },
              children: s,
          })
        : (0, A.jsx)("li", { className: fK.aY, children: s });
}
let fQ = (0, d.zZ)(c.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.fC9qV0),
        useSubtitle: () =>
            (0, h.bG)([fF.A], () => fF.A.getBackupCodes().length > 0)
                ? R.intl.format(R.t.tp7zEK, {})
                : R.intl.string(R.t.LoOi4S),
        usePredicate: fP,
        buildLayout: () => [fJ],
    }),
    fJ = (0, d.E2)(c.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.fC9qV0)],
        Component: function () {
            let e = (0, h.bG)([fF.A], () => fF.A.getBackupCodes()),
                t = E.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${fW(t)}` + (n ? ` (${R.intl.string(R.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, A.jsx)(_.$, { text: R.intl.string(R.t.Jc2myK), size: "sm", variant: "secondary", onClick: fH })
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)("ul", {
                              className: fK.E5,
                              children: e.map((e) => (0, A.jsx)(fq, { code: e }, e.code)),
                          }),
                          (0, A.jsxs)(sF.e, {
                              size: "sm",
                              children: [
                                  (0, A.jsx)(fY.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, A.jsx)(_.$, {
                                          text: R.intl.string(R.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fB.DownloadIcon,
                                      }),
                                  }),
                                  (0, A.jsx)(_.$, {
                                      text: R.intl.string(R.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fz.RefreshIcon,
                                      onClick: fZ,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    f$ = (0, d.Tf)(c.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = E.useState(!1),
                n = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : R.intl.format(e ? R.t["xDBk/I"] : R.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, A.jsx)(AI.Q, {
                              text: e ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, h.bG)([si.default], () => si.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, la.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, A.jsx)(e, {
                        ...t,
                        handleSubmit: xx.A.disableSMS,
                        title: R.intl.string(R.t.KLWnit),
                        children: R.intl.string(R.t["W0/Duf"]),
                    });
            }),
    }),
    f0 = (0, d.zZ)(c.X.SMS_AUTH_CATEGORY, {
        useTitle: () => R.intl.string(R.t.wuHuI5),
        useSubtitle: () => (0, h.bG)([si.default], () => fD(si.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
                t = (0, h.bG)([si.default], () => null != fD(si.default.getCurrentUser()));
            if (!e)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "sms-setup-button",
                            text: R.intl.string(R.t.Age7yU),
                            onClick: f1,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fU(),
                t = fP(),
                n = (0, h.bG)([uI.default], () => uI.default.hasTOTPEnabled());
            return e === fG.AVAILABLE && t && n;
        },
        buildLayout: () => [f$],
    });
function f1() {
    let e = si.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: fe.d.USER_SETTINGS_UPDATE, onAddedPhone: xx.A.enableSMS }),
                (0, la.openModalLazy)(
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
                    { modalKey: ft.V },
                ));
        } else xx.A.enableSMS();
}
var f2 = n(665671),
    f3 = n(442433),
    f6 = n(917136),
    f5 = n(976910),
    f4 = n(267255);
function f8(e) {
    let { credential: t } = e;
    return (0, A.jsxs)("li", {
        className: f4.e,
        children: [
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: R.intl.format(R.t["7JgxF5"], { lastUsed: fh(t.last_used) }),
                        }),
                ],
            }),
            (0, A.jsx)(i9.K, {
                icon: dp.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": R.intl.string(R.t["+nrTbK"]),
                onClick: (e) => {
                    (0, f3.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, A.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let f7 = (0, d.zZ)(c.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.IBq4Y3),
        useSubtitle: () => R.intl.string(R.t.yK9edS),
        useHeaderDecoration: function () {
            if (fU() === fG.AVAILABLE)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "add-security-key-button",
                            text: R.intl.string(R.t["Tzs/fw"]),
                            icon: iF.j,
                            onClick: f2.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fU()) {
                    case fG.UNAVAILABLE_NO_CRYPTO:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.bWCGI9) };
                    case fG.UNAVAILABLE_UNVERIFIED:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                    case fG.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [f9],
    }),
    f9 = (0, d.E2)(c.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [R.intl.string(R.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, h.cf)([f5.A], () => ({
                hasFetchedCredentials: f5.A.hasFetchedCredentials(),
                credentials: f5.A.getCredentials(),
            }));
            return (E.useEffect(() => {
                t || f6.JQ();
            }, [t]),
            t)
                ? (0, A.jsx)(X.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, A.jsx)(f8, { credential: e }, e.id)),
                  })
                : (0, A.jsx)(a8.y, {});
        },
    }),
    Ie = (0, d.t_)(c.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => R.intl.string(R.t.m0FidJ),
        buildLayout: () => [f7, fw, f0, fQ],
    }),
    It = (0, d.t0)(c.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = fP();
            return { type: m.xn.TEXT, text: e ? R.intl.string(R.t.lQsY7B) : R.intl.string(R.t.WsUuTt) };
        },
        buildLayout: () => [Ie],
    }),
    In = (0, d.zZ)(c.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["0iH2vc"]),
        buildLayout: () => [fu, It, fL],
    }),
    Ii = { [xy.ADULT]: xP.PMznGO, [xy.TEEN]: xP.qSkhZH, [xy.UNVERIFIED]: xP.vGxRDB },
    Il = [eu.M.TINY_BRONCO_NOTICE],
    Is = [];
function Ir() {
    xN.A.openUrl("https://discord.com/blog/safer-for-teens-same-discord-for-adults");
}
var Ia = n(308645),
    Io = n(555725),
    Iu = n(855267);
let Id = (0, d.E2)(c.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["16r9jm"])],
        Component: Iu.A,
    }),
    Ic = (0, d.zZ)(c.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Id] }),
    Ig = (0, d.t_)(c.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        buildLayout: () => [Ic],
    }),
    Im = (0, d.t0)(c.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        useSubtitle: Io.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Io._k)();
            return { type: m.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: m.xn.TEXT, text: (0, Io.aO)() };
        },
        initialize: () => {
            Ia.Yn();
        },
        buildLayout: () => [Ig],
    }),
    IA = (0, d.zZ)(c.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return R.intl.string(R.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, xM.LH)(),
                t = xv(),
                [n, i] = (0, cS.kn)(e ? Il : Is);
            return e && null != n
                ? {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "start",
                      text: R.intl.format(Ii[t], { handleOnBlogHook: Ir }),
                      onDismiss: () => i(cy.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...x3, Im],
    });
var IE = n(738188),
    Ih = n(834981),
    IS = n(987197),
    IT = n(822585),
    Ip = n(840387),
    Ix = n(465558),
    If = n(513687);
let II = (0, d.E2)(c.X.FAMILY_CENTER_SETTING, {
        Component: Ix.p,
        useSearchTerms: () => [
            R.intl.string(If.default.RZqaJn),
            R.intl.string(If.default.bdBmqy),
            R.intl.string(If.default["gVWG+6"]),
            R.intl.string(If.default.ahKIJO),
            R.intl.string(If.default["8SLtqb"]),
        ],
    }),
    I_ = (0, d.zZ)(c.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [II] }),
    IN = (0, d.t_)(c.X.FAMILY_CENTER_PANEL, {
        useTitle: () => R.intl.string(If.default.RZqaJn),
        buildLayout: () => [I_],
    }),
    IC = (0, d.zZ)(c.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => R.intl.string(If.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, IS.f)(),
                t = (0, IT.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, Ih.VT)();
            return E.useMemo(() => (n ? { badgeType: m.Xi.WARNING } : { badgeType: m.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [Ib],
    }),
    Ib = (0, d.t0)(c.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Ih.Li)() ? R.intl.string(If.default.IcMQUP) : R.intl.string(If.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Ip.Z)(),
                t = (0, Ih.Li)();
            return e
                ? t
                    ? R.intl.string(If.default.G8lHFU)
                    : R.intl.string(If.default.uOLNEZ)
                : R.intl.string(If.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, IS.f)(),
                t = (0, IT.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: m.Xy.ICON,
                      icon: IE.WarningIcon,
                      color: nQ.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: nQ.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [IN],
    });
var Iy = n(425587),
    Iv = n(662758);
function Ij(e) {
    if (e.body.code === S.t02.INVALID_PASSWORD) throw e;
    (0, sV.A)({ title: R.intl.string(R.t.LX0nT8), subtitle: e.body.message });
}
async function IO() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = si.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await Iy.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, sV.A)({
              title: R.intl.string(R.t["Y++oNe"]),
              subtitle: R.intl.format(R.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : lh.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, sV.A)({ title: R.intl.string(R.t.vJiTOL), subtitle: R.intl.string(R.t.UyVVan) })
          : t.isClaimed()
            ? (0, la.openModal)((t) =>
                  (0, A.jsx)(Iv.default, {
                      ...t,
                      handleSubmit: (t) => (0, Sq.U_)(t, e).then(S.tEg, Ij),
                      title: e ? R.intl.string(R.t.xca2ts) : R.intl.string(R.t.goXv9g),
                      actionText: e ? R.intl.string(R.t["8lQ2rR"]) : R.intl.string(R.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? R.intl.string(R.t.FB4H1D) : R.intl.string(R.t.gk7h32),
                  }),
              )
            : (0, nJ.A)({
                  title: R.intl.string(R.t.xca2ts),
                  subtitle: R.intl.string(R.t.FB4H1D),
                  confirmText: R.intl.string(R.t["8lQ2rR"]),
                  onConfirm: () => (0, Sq.U_)("", !0),
              });
}
let IL = (0, d.Tf)(c.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => R.intl.string(R.t["gIpzR+"]),
        useSubtitle: () => R.intl.string(R.t.Bd6dOf),
        useLabel: () => R.intl.string(R.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => IO(!0),
    }),
    IR = (0, d.Tf)(c.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => R.intl.string(R.t["p/Tjtp"]),
        useSubtitle: () => R.intl.string(R.t.YvDmKb),
        useLabel: () => R.intl.string(R.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => IO(!1),
        usePredicate: () => {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    ID = (0, d.zZ)(c.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [IR, IL] }),
    IP = (0, d.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (xx.A.clearBackupCodes(), (0, Sq.Uo)());
            };
        },
        useObscuredNotice: a5.L,
        buildLayout: () => [fa, In, IA, IC, ID],
    }),
    IG = (0, d.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        icon: gS.UserIcon,
        buildLayout: () => [IP],
    });
var IU = n(176781),
    IM = n(341923),
    IV = n(572164),
    Ik = n(655180),
    Iw = n(915725),
    IF = n(268378);
let IB = (0, d.zD)(c.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => R.intl.string(IF.default.j29uJx),
        useSubtitle: () => R.intl.format(IF.default.UCzGcQ, { learnMoreLink: ex.A.getArticleURL(S.MVz.CLIPS) }),
        useValue: () => (0, h.bG)([Iw.Ay], () => Iw.Ay.getEnableAutoclipping()),
        setValue: Ik.uL,
        useDisabled: () => !(0, IV.E)(),
    }),
    Iz = (0, d.zY)(c.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [IB], headerSettingKey: IB.key }),
    IX = (0, d.zZ)(c.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => R.intl.string(IF.default.XWkJoi),
        useSubtitle: () => R.intl.string(IF.default["MJ/VsO"]),
        usePredicate: IM.HN,
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        useInlineNotice: () =>
            (0, IV.E)()
                ? null
                : {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: R.intl.string(IF.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: R.intl.string(IF.default.qGgW4M),
                          onClick: () => Ik.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [Iz],
    });
var IY = n(696016);
let IH = [IY.zq, 25, 50, IY.Y2, IY.rv],
    IK = (0, d.sN)(c.X.CLIPS_BITRATE, {
        useTitle: () => R.intl.string(R.t["8bZyov"]),
        useSubtitle: () => R.intl.string(R.t["h8DSx/"]),
        minValue: IY.zq,
        maxValue: IY.rv,
        useDefaultValue: () => IY.Y2,
        getInitialValue: () => Iw.Ay.getSettings().clipsQuality.bitratePercent ?? IY.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = Iw.Ay.getSettings();
            Ik.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: IH,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, IV.E)(),
    });
var IW = n(226640);
let IZ = (0, d.Hn)(c.X.CLIPS_FRAME_RATE, {
        useTitle: () => R.intl.string(R.t["2wScL1"]),
        useSubtitle: () => R.intl.string(R.t["Rf9+fy"]),
        useValue: () => (0, h.bG)([Iw.Ay], () => Iw.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = Iw.Ay.getSettings();
            Ik.GS({ ...t, frameRate: e });
        },
        useOptions: IW.Fz,
        useDisabled: () => !(0, IV.E)(),
    }),
    Iq = (0, d.E2)(c.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [R.intl.string(R.t.SIxrIF)],
        usePredicate: () => (0, h.bG)([Iw.Ay], () => Iw.Ay.getHardwareClassification()) === IY.k9.BELOW_MINIMUM,
        Component: () => (0, A.jsx)(lW.A, { look: lW.k.WARNING, children: R.intl.string(R.t.SIxrIF) }),
    }),
    IQ = (0, d.Hn)(c.X.CLIPS_LENGTH, {
        useTitle: () => R.intl.string(R.t.OgfUio),
        useSubtitle: () => R.intl.string(R.t.H7j4tY),
        useValue: () => (0, h.bG)([Iw.Ay], () => Iw.Ay.getSettings().clipsLength),
        setValue: (e) => Ik.h$(e),
        useOptions: IW.Qu,
        useDisabled: () => !(0, IV.E)(),
    }),
    IJ = (0, d.E2)(c.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [R.intl.string(R.t["Z+MfqT"])],
        Component: () => (0, A.jsx)(lW.A, { look: lW.k.INFO, children: R.intl.string(R.t["Z+MfqT"]) }),
    }),
    I$ = (0, d.Hn)(c.X.CLIPS_RESOLUTION, {
        useTitle: () => R.intl.string(R.t.aFudZJ),
        useSubtitle: () => R.intl.string(R.t.nIrkW5),
        useValue: () => (0, h.bG)([Iw.Ay], () => Iw.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Iw.Ay.getSettings();
            Ik.GS({ ...t, resolution: e });
        },
        useOptions: IW.gF,
        useDisabled: () => !(0, IV.E)(),
    }),
    I0 = (0, d.zD)(c.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => R.intl.string(R.t["3zwNf6"]),
        useSubtitle: () => R.intl.string(R.t.m4Cjj9),
        useValue: () => (0, h.bG)([Iw.Ay], () => Iw.Ay.getSettings().remindersEnabled),
        setValue: (e) => Ik.Mt(e),
        useDisabled: () => !(0, IV.E)(),
    }),
    I1 = (0, d.zZ)(c.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => R.intl.string(IF.default.TGwzMe),
        buildLayout: () => [Iq, IQ, IZ, I$, IK, IJ, I0],
    }),
    I2 = (0, d.zD)(c.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, h.bG)([Iw.Ay], () => Iw.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => Ik.YP(e),
    }),
    I3 = (0, d.zD)(c.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, h.bG)([Iw.Ay], () => Iw.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => Ik.Uh(e),
    }),
    I6 = (0, d.zZ)(c.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, h.bG)([si.default], () => {
                let e = si.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [I2, I3],
    });
var I5 = n(417270),
    I4 = n(847825);
let I8 = (0, d.E2)(c.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t.pf54EU), R.intl.string(R.t["QyB/jK"])],
        Component: () => {
            let e = (0, h.bG)([lU.Ay], () => lU.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0));
            ta()(null != e, "Save clip keybind unset");
            let t = !(0, IV.E)(),
                n = E.useRef(null),
                i = E.useCallback(
                    (t) => {
                        iX.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = E.useCallback(() => {
                    iX.A.setKeybind({ ...e, shortcut: (0, ls.OH)(IY.Ot) });
                }, [e]);
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.pf54EU),
                description: R.intl.string(R.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: I4.g,
                    children: (0, A.jsx)(ll.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, A.jsxs)(A.Fragment, {
                            children: [
                                (0, A.jsx)(lt.m, {
                                    text: R.intl.string(IF.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(i9.K, {
                                        icon: iB.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(IF.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, A.jsx)(lt.m, {
                                    text: R.intl.string(IF.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(i9.K, {
                                        icon: I5.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(IF.default.Kyk1Tp),
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
    I7 = (0, d.E2)(c.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t["0U/hj7"]), R.intl.string(R.t["5zxkdo"])],
        usePredicate: lD.BW,
        Component: () => {
            let e = (0, h.bG)([lU.Ay], () => lU.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0)),
                t = (0, h.bG)([lU.Ay], () => lU.Ay.getKeybindForAction(S.hCu.SAVE_SCREENSHOT, !0));
            (ta()(null != e, "Save clip keybind unset"), ta()(null != t, "Save screenshot keybind unset"));
            let n = E.useCallback(
                (e) => {
                    iX.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t["0U/hj7"]),
                description: R.intl.string(R.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, A.jsx)("div", {
                    className: I4.g,
                    children: (0, A.jsx)(ll.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    I9 = (0, d.zD)(c.X.CLIPS_ENABLE, {
        useTitle: () => R.intl.string(R.t.h8rgrK),
        useSubtitle: () => R.intl.string(R.t["4Qw3NO"]),
        useValue: () => (0, IV.E)(),
        setValue: (e) => Ik.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    _e = (0, d.zY)(c.X.CLIPS_GENERAL_CARD, { buildLayout: () => [I9, I8, I7], headerSettingKey: I9.key }),
    _t = (0, d.zZ)(c.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["rWKv+e"]),
        useSubtitle: () => R.intl.format(IF.default["dh7g+S"], { learnMoreLink: ex.A.getArticleURL(S.MVz.CLIPS) }),
        buildLayout: () => [_e],
    }),
    _n = (0, d.E2)(c.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [R.intl.string(R.t.s4773E), R.intl.string(R.t.svjwGh)],
        Component: () => {
            let e = (0, h.bG)([Iw.Ay], () => Iw.Ay.getSettings().storageLocation),
                t = !(0, IV.E)(),
                n = E.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nh.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && Ik.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.s4773E),
                description: R.intl.string(R.t.svjwGh),
                layout: "vertical",
                children: (0, A.jsxs)(X.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, A.jsx)(lo.k, {
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
                            text: R.intl.string(IF.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _i = (0, d.zZ)(c.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => R.intl.string(IF.default["0Q+pdZ"]),
        buildLayout: () => [_n],
    }),
    _l = (0, d.t_)(c.X.CLIPS_PANEL, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        usePredicate: lD.sw,
        buildLayout: () => [_t, IX, I1, _i, I6],
    }),
    _s = (0, d.i4)(c.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        icon: IU.x,
        buildLayout: () => [_l],
    });
var _r = n(254138),
    _a = n(290595),
    _o = n(153488),
    _u = n(308528),
    _d = n(171316),
    _c = n(558001);
n(866945);
var _g = n(835002);
function _m() {
    let e = (0, _d.uM)(),
        t = (0, Ih.vx)(),
        n = E.useCallback(() => {
            ((0, tM.default)(),
                _u.A.openPrivateChannel({ recipientIds: t }),
                (0, _c.N)(_g.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _g.YX.LEARN_MORE));
        }, [t]),
        i = E.useCallback(() => {
            (0, _c.N)(_g.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _g.YX.VIEWED);
        }, []);
    return E.useMemo(() => {
        if (e)
            return {
                type: m.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: R.intl.format(If.default.i284fU, {
                    hook: (e, t) => (0, A.jsx)(nn.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let _A = (0, d.zD)(c.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => R.intl.string(R.t.AGDDkH),
    useSubtitle: () => R.intl.string(R.t.kyo3dJ),
    useValue: () => L.Q$.useSetting(),
    setValue: (e) => Ik.eQ({ allowVoiceRecording: e }),
});
var _E = n(157559),
    _h = n(331887);
function _S() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        t = (0, h.bG)([_h.A], () => _h.A.harvestType),
        [n, i] = E.useState(() => Date.now()),
        l = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        s = E.useRef(null);
    return (E.useEffect(() => {
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
let _T = (0, d.Tf)(c.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => R.intl.string(R.t.qfFFos),
        useSubtitle: function () {
            let e = _S();
            if (e.allowed) return R.intl.format(R.t.NRI6vt, { article: ex.A.getArticleURL(S.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return R.intl.string(R.t.hIbRso);
                case "not_verified":
                    return R.intl.format(R.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, A.jsx)(
                                n0.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, nl.openUserSettings)(c.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = io()(e.nextAllowed).format("MMMM Do YYYY");
                    return R.intl.format(R.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (e5.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                e6.Bo.get({ url: S.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        e5.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        e5.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !_S().allowed,
        useLoading: () => (0, h.bG)([_h.A], () => _h.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => R.intl.string(R.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, la.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, A.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, Sq.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            e5.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? _E.A.show({
                                                  title: R.intl.string(R.t.i2iul5),
                                                  body: R.intl.string(R.t["6Nmv4i"]),
                                              })
                                            : _E.A.show({
                                                  title: R.intl.string(R.t.OjbtDm),
                                                  body: R.intl.string(R.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || R.intl.string(R.t["0F5Jyt"]);
                                        _E.A.show({ title: R.intl.string(R.t.OjbtDm), body: t });
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
    _p = (0, d.v_)(c.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => R.intl.string(R.t.D60Gfj),
        useSubtitle: () =>
            R.intl.format(R.t.dszICC, {
                onClickDisable: () => (0, nl.openUserSettings)(c.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, nl.openUserSettings)(c.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var _x = n(972737);
let _f = (0, d.zD)(c.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => R.intl.string(R.t.MNKzyg),
        useSubtitle: () =>
            R.intl.format(R.t["2SiYln"], { helpdeskArticle: ex.A.getArticleURL(S.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, h.bG)([_o.A], () => _o.A.hasConsented(S.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, _a.U)([S.YAq.PERSONALIZATION], []).catch(_x.i)
                : (0, _x.O)({
                      header: R.intl.string(R.t["9SNpzv"]),
                      confirmText: R.intl.string(R.t["9g5UGw"]),
                      cancelText: R.intl.string(R.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, _a.U)([], [S.YAq.PERSONALIZATION]).catch(_x.i);
                      },
                      body: R.intl.string(R.t.gJvDDh),
                  });
        },
        useDisabled: _d.uM,
    }),
    _I = (0, A7.mj)({
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
function __() {
    let { enabled: e } = _I.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var _N = n(884705);
function _C() {
    return (0, h.bG)([_N.A], () => _N.A.isTogglesDisabled());
}
function _b() {
    return !L.vf.useSetting();
}
function _y(e) {
    L.vf.updateSetting(!e);
}
function _v() {
    let e = _C(),
        t = L.H1.useSetting(),
        n = (0, _d.uM)();
    return e || t || n;
}
let _j = (0, d.zD)(c.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["md5l4/"], { helpdeskArticle: ex.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !__(),
        useValue: _b,
        setValue: _y,
        useDisabled: _v,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    }),
    _O = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["2QFDU/"], { helpdeskArticle: ex.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: __,
        useValue: _b,
        setValue: _y,
        useDisabled: _v,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    });
function _L() {
    return !L.H1.useSetting();
}
function _R(e) {
    L.H1.updateSetting(!e);
}
function _D() {
    let e = _C(),
        t = (0, _d.uM)();
    return e || t;
}
let _P = (0, d.zD)(c.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () => R.intl.string(R.t.w4fvxe),
        usePredicate: () => !__(),
        useValue: _L,
        setValue: _R,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: _D,
    }),
    _G = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () =>
            R.intl.format(R.t.cf9mvV, { helpdeskArticle: ex.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: __,
        useValue: _L,
        setValue: _R,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: _D,
    }),
    _U = (0, d.AK)(c.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = Aq(2);
            return R.intl.format(R.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = AQ();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, AX.n1)(e))) && (0, nm.xl)(),
    }),
    _M = (0, d.gN)(c.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [_U] }),
    _V = (0, d.zD)(c.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => R.intl.string(R.t.XuADY2),
        useSubtitle: () =>
            R.intl.format(R.t.FNqmmX, { helpdeskArticle: ex.A.getArticleURL(S.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, h.bG)([_o.A], () => _o.A.hasConsented(S.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, _a.U)([S.YAq.USAGE_STATISTICS], []).catch(_x.i)
                : (0, _x.O)({
                      header: R.intl.string(R.t.OdPCbN),
                      body: R.intl.string(R.t.MGWabA),
                      confirmText: R.intl.string(R.t["D3+rU4"]),
                      cancelText: R.intl.string(R.t.kYpG0u),
                      onConfirm: () => (0, _a.U)([], [S.YAq.USAGE_STATISTICS]).catch(_x.i),
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.XuADY2)],
        useDisabled: _d.uM,
    }),
    _k = (0, d.zZ)(c.X.DATA_USAGE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.QDAriI),
        useInlineNotice: _m,
        initialize: () => {
            _o.A.fetchedConsents || (0, _a.Q)();
        },
        buildLayout: () => [_p, _V, _f, _P, _j, _A, _T, _M],
    });
var _w = n(15762);
let _F = (0, d.zD)(c.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => R.intl.string(_w.default.F3llsQ),
    useSubtitle: () => R.intl.string(_w.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        (L.Sy.updateSetting(e),
            tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: A2.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function _B() {
    let e = L.JG.useSetting();
    return (0, h.yK)(
        [dA.Ay, lh.A],
        () => {
            let t = new Set(e);
            return dA.Ay.getFlattenedGuildIds().filter((e) => null != lh.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let _z = (0, d.AK)(c.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = _B();
            if (0 === e.length) return R.intl.format(R.t.QJIJ5p, {});
            let t = lh.A.getGuild(e[0]),
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
                    ((e = _B()),
                    0 ===
                    (t = (0, h.yK)(
                        [lh.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => lh.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, A.jsx)(Er, { guild: t[0], size: AY.CD }),
                                    shape: AY.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, A.jsx)(Er, { guild: t[1], size: AY.CD }), shape: AY.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, A.jsx)(Er, { guild: t[0], size: AY.CD }),
                                    shape: AY.e0.SQUIRCLE,
                                },
                            });
            return { type: m.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    _X = (0, d.gN)(c.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, A5.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [_z],
    }),
    _Y = (0, d.Qx)(c.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, A5.lX)("ProfilePrivacySetting"),
        useTitle: () => R.intl.string(R.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: R.intl.string(R.t.Boxc8R),
                    desc: R.intl.string(R.t["nLj+nc"]),
                    value: eB.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: R.intl.string(R.t.YOIKBt),
                    desc: R.intl.string(R.t.y0JZ4s),
                    value: eB.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: R.intl.string(R.t.u0nlJv), desc: R.intl.string(R.t["4jnKHu"]), value: eB.KP.FRIENDS_ONLY },
            ];
        },
        useValue: L.KP.useSetting,
        setValue: function (e) {
            let t = L.KP.getSetting();
            if ((L.KP.updateSetting(e), !(0, A5.W1)("ProfilePrivacySetting"))) return;
            let i = (0, Ee.gS)(t, e);
            null != i &&
                (0, la.openModalLazy)(async () => {
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
    _H = (0, d.zZ)(c.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ul884f),
        useSubtitle: () =>
            R.intl.format(R.t.N4jSgR, {
                learnMoreUrl: ex.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [_Y, _F, _X],
    });
var _K = n(952270),
    _W = n(678538);
let _Z = { [eB.tR.REAL_MONEY_GAMING]: _W.default.pmIitA },
    _q = Object.keys(_Z).map(Number),
    _Q = (0, d.E2)(c.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [R.intl.string(_W.default.foQaI1)],
        usePredicate: __,
        Component: function () {
            let e = E.useMemo(
                    () =>
                        _q.map((e) => ({
                            id: String(e),
                            value: e,
                            label: R.intl.string(_Z[e]),
                            leading: _K.EyeSlashIcon,
                        })),
                    [],
                ),
                t = L.XZ.useSetting();
            return (0, A.jsx)(SV.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(L.XZ.getSetting());
                    for (let e of _q) t.has(e) ? n.add(e) : n.delete(e);
                    L.XZ.updateSetting([...n]);
                },
                label: R.intl.string(_W.default.foQaI1),
                description: R.intl.format(_W.default["z/MfaY"], {
                    helpdeskArticle: ex.A.getArticleURL(S.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: R.intl.string(_W.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    _J = (0, d.zZ)(c.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => R.intl.string(_W.default.XUj46U),
        usePredicate: __,
        buildLayout: () => [_G, _O, _Q],
    });
var _$ = n(936388),
    _0 = n(714763),
    _1 = n(814278);
let _2 = (0, d.zD)(c.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => R.intl.string(R.t["opi/XK"]),
    useSubtitle: () => R.intl.format(R.t["/T+ZlP"], { helpArticle: (0, _1.Lu)() }),
    useValue: function () {
        return (0, h.bG)([_0.A], () => _0.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        _$.A.updatePersistentCodesEnabled(e);
    },
});
var _3 = n(787392);
function _6() {
    return (0, h.yK)([_3.A], () => _3.A.getUserIds());
}
var _5 = n(803306),
    _4 = n(966327),
    _8 = n(774156);
function _7(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(),
        l = (0, h.bG)([si.default], () => si.default.getUser(t)),
        s = T$.Ay.getFormattedName(l),
        r = E.useCallback(() => {
            (0, _1.kj)(t);
        }, [t]),
        a = E.useCallback(() => (0, S1.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        E.useEffect(() => {
            (0, _5.getUser)(t);
        }, [t]),
        (0, A.jsxs)("div", {
            className: _8.uW,
            children: [
                null != l && (0, A.jsx)(_4.A, { className: _8.my, user: l, size: I._3.SIZE_40 }),
                (0, A.jsxs)("div", {
                    className: _8.Qq,
                    children: [
                        (0, A.jsx)(n0.D, {
                            className: _8.Xh,
                            onClick: a,
                            children: (0, A.jsx)(H.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, A.jsx)(H.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: R.intl.format(R.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, A.jsx)(n0.D, { onClick: r, className: _8.Qz, children: (0, A.jsx)(le.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function _9(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, _1.tC)(i.timestamp),
        r = E.useCallback(() => {
            (0, _1.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, A.jsxs)("div", {
        className: t,
        children: [
            (0, A.jsxs)("div", {
                className: _8.Qq,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: R.intl.format(R.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, A.jsx)(H.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, A.jsx)(n0.D, {
                className: _8.Kk,
                onClick: r,
                children: (0, A.jsx)(Ey.P, { size: "md", color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Ne(e) {
    let { userId: t } = e,
        n = (0, h.yK)([_3.A], () =>
            B()(_3.A.getUserVerifiedKeys(t))
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
            (0, A.jsx)(_7, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, A.jsxs)(
                    E.Fragment,
                    {
                        children: [
                            (0, A.jsx)(_9, { className: _8.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, A.jsx)("div", { className: _8.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var Nt = n(464946),
    Nn = n(492422);
let Ni = (0, d.E2)(c.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["5b3FNI"])],
        usePredicate: function () {
            let e = _6();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = _6();
            return (0, A.jsxs)(Nt.h, {
                children: [
                    (0, A.jsx)(Nt._, {
                        header: R.intl.string(R.t["5b3FNI"]),
                        description: R.intl.format(R.t.jrTSWU, { helpArticle: (0, _1.dc)() }),
                    }),
                    e.map((e) => (0, A.jsx)("div", { className: Nn.A, children: (0, A.jsx)(Ne, { userId: e }) }, e)),
                ],
            });
        },
    }),
    Nl = (0, d.zZ)(c.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bTwjaz),
        usePredicate: () => (0, eQ.isDesktop)(),
        buildLayout: () => [_2, Ni],
    }),
    Ns = (0, d.t_)(c.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        buildLayout: () => [_k, _J, _H, Nl],
    }),
    Nr = (0, d.i4)(c.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        icon: _r.m,
        buildLayout: () => [Ns],
    });
var Na = n(476713);
let No = (0, d.AK)(c.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.O65dzZ),
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        destinationKey: c.X.AUTHORIZED_APPS_CATEGORY,
    }),
    Nu = (0, d.gN)(c.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [No] });
var Nd = n(875444);
function Nc(e, t) {
    let n = (0, h.bG)([EV.default], () => EV.default.getFetchState()),
        i = (0, h.bG)([EV.default], () =>
            e ? EV.default.getNewestTokensForNonChildrenApplications() : EV.default.getNewestTokens(),
        ),
        l = E.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, Nd.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        E.useEffect(() => {
            t || EI.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== EV.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var Ng = n(514479);
function Nm() {
    return (0, A.jsxs)("div", {
        className: Ng.d,
        children: [
            (0, A.jsx)(H.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: Ng.x,
                children: R.intl.string(R.t["+0U77d"]),
            }),
            (0, A.jsx)(H.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: R.intl.format(R.t.V8wClM, {
                    helpdeskArticle: ex.A.getArticleURL(S.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let NA = (0, d.E2)(c.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = Nc(!0, !0);
        return e ? (0, A.jsx)(a8.y, {}) : (0, A.jsx)(Nm, {});
    },
    useSearchTerms: () => [R.intl.string(R.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = Nc(!0, !0);
        return e || 0 === t.length;
    },
});
function NE() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = Nc(!0, !0);
    return !e && t.length > 0;
}
let Nh = (0, d.zD)(c.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => R.intl.string(R.t.W8JtfT),
        useSubtitle: () => R.intl.string(R.t.a99KKy),
        useSearchTerms: () => [R.intl.string(R.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: NE,
    }),
    NS = (0, d.Qx)(c.X.IN_GAME_DMS_SETTING, {
        useTitle: () => R.intl.string(R.t["ms+Tme"]),
        useSubtitle: () => R.intl.string(R.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.JIFnN9), value: eB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: R.intl.string(R.t.rRdsk1), value: eB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: R.intl.string(R.t.IVRPMX), value: eB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = L.TA.useSetting();
            return e === eB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? eB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => L.TA.updateSetting(e),
        usePredicate: NE,
    });
function NT() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = Nc(!0, !0);
    return {
        sortedGames: E.useMemo(() => e.toSorted((e, t) => oo.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var Np = n(687123),
    Nx = n(444802);
function Nf() {
    let e = (0, Nx.WX)();
    E.useEffect(() => {
        (0, _c.N)(_g.YA.AGE_CONFIRMATION_NOTICE, _g.YX.VIEWED);
    }, []);
    let t = E.useCallback(() => {
            (window.open(ex.A.getArticleURL(e), "_blank"), (0, _c.N)(_g.YA.AGE_CONFIRMATION_NOTICE, _g.YX.LEARN_MORE));
        }, [e]),
        n = E.useCallback(() => {
            (xN.A.showAgeVerificationGetStartedModal({ entryPoint: xC.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _c.N)(_g.YA.AGE_CONFIRMATION_NOTICE, _g.YX.CONFIRM_AGE));
        }, []);
    return (0, A.jsx)(r$.p, {
        messageType: r$.Y.INFO,
        action: (0, A.jsx)(AI.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: R.intl.string(R.t.FDSSia),
            onClick: n,
        }),
        children: R.intl.format(R.t.mFgsfg, { hook: (e, n) => (0, A.jsx)(nn.Anchor, { onClick: t, children: e }, n) }),
    });
}
function NI() {
    let e = (0, xF.aX)(Np.t.REACTIVE_CHECK),
        t = (0, xb.b8)();
    return E.useMemo(() => {
        if (e && !t) return { type: m.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: Nf };
    }, [e, t]);
}
var N_ = n(323073),
    NN = n(386171),
    NC = n(96607);
let Nb = (0, d.zD)(c.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => R.intl.string(R.t.gvC6q7),
        useSubtitle: () => R.intl.string(R.t.zirUC1),
        useValue: NN.hT,
        useDisabled: function () {
            let e = (0, NC.A)() ?? !0,
                t = (0, N_.sP)(),
                n = (0, xb.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, N_.p5)() && e
                ? xN.A.showAgeVerificationGetStartedModal({ entryPoint: xC.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    Ny = (0, d.zD)(c.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => R.intl.string(R.t["L+yTsa"]),
        useSubtitle: () => R.intl.string(R.t["t6i/jW"]),
        useValue: NN.tI,
        useDisabled: function () {
            let e = (0, NC.A)() ?? !0,
                t = (0, N_.sP)(),
                n = (0, xb.yM)();
            return E.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, N_.p5)() && e
                ? xN.A.showAgeVerificationGetStartedModal({ entryPoint: xC.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    Nv = (0, d.AK)(c.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.hOXd45),
        destinationKey: c.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    Nj = (0, d.gN)(c.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [Nv] });
n(667532);
var NO = n(390248),
    NL = n(632119),
    NR = n(945276),
    ND = n(389737),
    NP = n(566769);
function NG() {
    let e,
        t = (0, NR.A)() ?? !0,
        n = (0, _d.uM)(),
        i = (0, _d.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, aK.cf)([au.A], () => au.A.settings.textAndImages?.explicitContentSettings ?? (0, NL.C$)())),
        {
            explicitContentGuilds: (0, NL.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, NL.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, NL.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, NO.hK)() && t.includes(eB.TO.SHOW)
            ? xN.A.showAgeVerificationGetStartedModal({ entryPoint: xC.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, NL.Jz)(e);
    }
    let o = [
            { value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eB.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eB.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(If.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(ND.E, {
        description: R.intl.string(R.t.Wnojv1),
        children: [
            (0, A.jsx)(NP.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(NP.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(NP.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? R.intl.string(If.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function NU() {
    let e,
        t = (0, NR.A)() ?? !0,
        n = (0, _d.uM)(),
        i = (0, _d.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, aK.cf)([au.A], () => au.A.settings.textAndImages?.goreContentSettings ?? (0, Nx.T4)())),
        {
            goreContentGuilds: (0, Nx.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, Nx.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, Nx.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, NO.hK)() && t.includes(eB.TO.SHOW)
            ? xN.A.showAgeVerificationGetStartedModal({ entryPoint: xC.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, Nx.qY)(e);
    }
    let o = [
            { value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eB.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eB.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(If.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(ND.E, {
        description: R.intl.string(R.t.XgH9eh),
        children: [
            (0, A.jsx)(NP.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(NP.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(NP.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? R.intl.string(If.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var NM = n(875162),
    NV = n(636745);
let Nk = (0, d.E2)(c.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, Nx.WX)(),
            t = E.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: R.intl.string(R.t.GYpoAq),
                        component: NG,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: R.intl.string(R.t["16/3Bi"]),
                        component: NU,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, A.jsxs)(Nt.h, {
            children: [
                (0, A.jsx)(Nt._, {
                    header: R.intl.string(R.t["Hj/But"]),
                    description: R.intl.format(R.t.dliU4j, { learnMoreLink: ex.A.getArticleURL(e) }),
                }),
                (0, A.jsx)(NM.A, { tabs: t, orientation: "vertical", tabsClassName: NV.v }),
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
var Nw = n(639555),
    NF = n(617641),
    NB = n(546140),
    Nz = n(406935),
    NX = n(594061);
let NY = (0, d.zD)(c.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => R.intl.string(R.t.qFsx5q),
        useSubtitle: () => R.intl.format(R.t.lunaRv, { learnMoreLink: ex.A.getArticleURL(S.MVz.SAFETY_ALERTS) }),
        useValue: NB.L,
        setValue: function (e) {
            return NX.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = Nz._t.create({ value: e });
                },
                NX.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, NF.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, Nw.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, NR.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    NH = (0, d.zZ)(c.X.CONTENT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3upKU8"]),
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
                u = _m(),
                d =
                    ((e = (0, Ip.Z)()),
                    (t = (0, Nx.WX)()),
                    (n = E.useCallback(() => {
                        (window.open(ex.A.getArticleURL(t), "_blank"),
                            (0, _c.N)(_g.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _g.YX.LEARN_MORE));
                    }, [t])),
                    (i = E.useCallback(() => {
                        (0, _c.N)(_g.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _g.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (e)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                text: R.intl.format(R.t.EUo0yj, {
                                    hook: (e, t) => (0, A.jsx)(nn.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                c =
                    ((l = (0, xF.SJ)()),
                    (s = (0, xb.b8)()),
                    (r = l && !s),
                    (a = E.useCallback(() => {
                        (xN.A.showAgeVerificationGetStartedModal({ entryPoint: xC.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _c.N)(_g.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _g.YX.LEARN_MORE));
                    }, [])),
                    (o = E.useCallback(() => {
                        (0, _c.N)(_g.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _g.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (r)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                text: R.intl.format(R.t.OX4ybh, {
                                    hook: (e, t) => (0, A.jsx)(nn.Anchor, { onClick: a, children: e }, t),
                                }),
                            };
                    }, [a, r, o])),
                g = NI();
            return u ?? void 0 ?? g ?? c ?? d;
        },
        buildLayout: () => [Nk, NY, Nb, Ny, Nj],
    });
var NK = n(923457),
    NW = n(750714);
let NZ = (0, d.Qx)(c.X.DM_SPAM_SETTING, {
    useTitle: () => R.intl.string(R.t.puwSkY),
    useSubtitle: () => R.intl.string(R.t["+sXN3T"]),
    useValue: function () {
        let e = L.he.useSetting(),
            t = L.cj.useSetting(),
            n = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
            i = (0, xF.yv)(NK.p.SPAM_FILTERS);
        return e !== eB.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eB.he.FRIENDS_AND_NON_FRIENDS
              : (NW.xY.get(t) ?? eB.he.NON_FRIENDS);
    },
    setValue: (e) => L.he.updateSetting(e),
    useOptions: function () {
        return [
            { name: R.intl.string(R.t["+w5yKk"]), value: eB.he.FRIENDS_AND_NON_FRIENDS },
            { name: R.intl.string(R.t.yAPg6r), value: eB.he.NON_FRIENDS },
            { name: R.intl.string(R.t.FEXKsv), value: eB.he.DISABLED },
        ];
    },
    useSearchTerms: () => [R.intl.string(R.t.JzaP4h), R.intl.string(R.t.H9XOl3), R.intl.string(R.t.k4W40P)],
});
var Nq = n(189883);
let NQ = (0, d.zD)(c.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => R.intl.string(R.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return E.useMemo(() => (0, n8.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? S.yKI : S.yKI & ~S.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _d.uM)();
    },
});
var NJ = n(665260);
let N$ = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => R.intl.string(R.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n8.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? NJ.UI(t, S.dzt.MUTUAL_FRIENDS) : NJ.iE(t, S.dzt.MUTUAL_FRIENDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _d.uM)();
        },
    }),
    N0 = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => R.intl.string(R.t.qsMfsH),
        useSubtitle: () => R.intl.string(R.t["6DqAp0"]),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n8.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? NJ.UI(t, S.dzt.MUTUAL_GUILDS) : NJ.iE(t, S.dzt.MUTUAL_GUILDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _d.uM)();
        },
    }),
    N1 = (0, d.FW)(c.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => R.intl.string(R.t.wTdS6S),
        buildLayout: () => [NQ, N$, N0],
    });
var N2 = n(420825);
let N3 = (0, d.zD)(c.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => R.intl.string(R.t["jK+wdr"]),
        useSubtitle: () => R.intl.string(R.t["RYh/pW"]),
        useValue: () => !(0, N2.q)(),
        setValue: function (e) {
            L.Zd.updateSetting(!e);
        },
    }),
    N6 = (0, d.zZ)(c.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = Nq.A.useConfig({ location: "Friend Request Setting" });
            return e ? R.intl.string(R.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => R.intl.string(R.t.fyA115),
        useInlineNotice: _m,
        buildLayout: () => [N1, N3],
    });
var N5 = n(994500),
    N4 = n(428678),
    N8 = n(717398),
    N7 = n(730134),
    N9 = n(276573);
function Ce(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, A.jsxs)("div", {
        className: N9.wx,
        children: [
            (0, A.jsx)("div", {
                className: N9.zc,
                children: i ? (0, A.jsx)(N4.K, {}) : (0, A.jsx)(_K.EyeSlashIcon, {}),
            }),
            (0, A.jsxs)("div", {
                className: N9.Qq,
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
function Ct(e) {
    let { userId: t, last: n } = e,
        i = (0, h.bG)([N5.A], () => N5.A.isBlocked(t)),
        l = (0, h.bG)([si.default], () => si.default.getUser(t)),
        [s, r] = E.useState(!1),
        a = E.useCallback(() => {
            (r(!0),
                i
                    ? N8.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : N8.A.unignoreUser(t, tL.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == l
        ? null
        : (0, A.jsxs)("div", {
              className: ir()(N9.nM, { [N9.fW]: n }),
              children: [
                  (0, A.jsxs)("div", {
                      className: N9.eF,
                      children: [
                          (0, A.jsx)(N7.A, { user: l, size: I._3.SIZE_40 }),
                          (0, A.jsxs)("div", {
                              className: N9.Qq,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      text: R.intl.string(i ? R.t.XyHpKH : R.t["8wXU9B"]),
                      onClick: a,
                      loading: s,
                  }),
              ],
          });
}
function Cn(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = E.useState(5);
    return (0, A.jsx)(Nt.h, {
        children: (0, A.jsxs)("div", {
            className: N9.Nr,
            children: [
                (0, A.jsx)(Ce, { listType: n, numberOfUsers: t.length }),
                (0, A.jsx)("div", {
                    className: N9.jS,
                    children: t.slice(0, i).map((e, n) => (0, A.jsx)(Ct, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, A.jsx)("div", {
                          className: N9.vM,
                          children: (0, A.jsx)(n0.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: N9.Qf,
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
let Ci = (0, d.E2)(c.X.BLOCKED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t.PFOUKW)],
        usePredicate: () => (0, h.bG)([N5.A], () => N5.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([N5.A], () => N5.A.getBlockedIDs());
            return (0, A.jsx)(Cn, { userIds: e, listType: "blocked" });
        },
    }),
    Cl = (0, d.E2)(c.X.IGNORED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t["93ZDWE"])],
        usePredicate: () => (0, h.bG)([N5.A], () => N5.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([N5.A], () => N5.A.getIgnoredIDs());
            return (0, A.jsx)(Cn, { userIds: e, listType: "ignored" });
        },
    }),
    Cs = (0, d.zZ)(c.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+Iryf3"]),
        useSubtitle: () =>
            R.intl.format(R.t["0aNQo9"], { helpArticle: ex.A.getArticleURL(S.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Ci, Cl],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, h.cf)([N5.A], () => ({
                hasBlockedUsers: N5.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: N5.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var Cr = n(22385),
    Ca = n(556534),
    Co = n(111159),
    Cu = n(152056),
    Cd = n(978433);
let Cc = { label: () => R.intl.string(R.t["32u1Dx"]), value: Cr.YG };
var Cg = n(307863),
    Cm = n(428031),
    CA = n(954225);
function CE() {
    return (0, Cg.e)() ? R.intl.string(R.t.PMsfcH) : R.intl.string(R.t.RAQUSN);
}
function Ch(e, t) {
    tt.default.track(S.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let CS = (0, d.zD)(c.X.PERMISSIONS_DMS_SETTING, {
    useTitle: CE,
    useSubtitle: function () {
        let e = (0, Ca.Tx)(),
            t = (0, Ca.q9)(),
            n = (0, Cg.e)();
        return e === Cr.YG
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
        let e = (0, Ca.Tx)(),
            t = L.$s.useSetting().includes(e),
            n = (0, Cm.K)();
        return e === Cr.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, _d.uM)();
        return (0, Ca.Tx)() === Cr.YG && e;
    },
    setValue: function (e) {
        let t = Cr.xk.getState().selectedGuildId;
        if (t === Cr.YG) {
            var n;
            ((n = !e),
                (0, _x.O)({
                    header: R.intl.string(R.t["uUr+GR"]),
                    body: R.intl.string(R.t.hjGJBp),
                    confirmText: R.intl.string(R.t.gm1Vej),
                    cancelText: R.intl.string(R.t.p89ACt),
                    confirmButtonColor: sk.$n.Colors.BRAND,
                    onConfirm: function () {
                        (L.n6.updateSetting(n), Ch(n, !1));
                    },
                    onCancel: function () {
                        (L.n6.updateSetting(n), L.$s.updateSetting(n ? lh.A.getGuildIds() : []), Ch(n, !0));
                    },
                }));
        } else {
            let n = (0, n8.Tb)();
            (e ? n.delete(t) : n.add(t),
                L.$s.updateSetting(Array.from(n)),
                tt.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: CA.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var CT = n(953298);
function Cp(e, t) {
    tt.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function Cx() {
    return R.intl.string(R.t["3o2ojh"]);
}
let Cf = (0, d.zD)(c.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: Cx,
        useSubtitle: function () {
            let e = (0, Ca.q9)(),
                t = ex.A.getArticleURL(S.MVz.MESSAGE_REQUESTS);
            return e
                ? R.intl.format(R.t.WpnWLc, { helpdeskArticle: t })
                : R.intl.format(R.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, Ca.Tx)(),
                t = (0, Cm.K)(),
                n = L.$s.useSetting().includes(e),
                i = L.YX.useSetting(),
                l = L.Zr.useSetting().includes(e);
            return e === Cr.YG ? !t && !i : !n && !l;
        },
        useDisabled: function () {
            let e = (0, Ca.Tx)(),
                t = (0, _d.uM)(),
                n = (0, Cm.K)(),
                i = L.$s.useSetting().includes(e);
            return e === Cr.YG ? n || t : i;
        },
        setValue: function (e) {
            let t = Cr.xk.getState().selectedGuildId;
            if (!e && (0, CT.w)())
                return void xN.A.showAgeVerificationGetStartedModal({ entryPoint: xC.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === Cr.YG) {
                var n;
                ((n = !e),
                    (0, _x.O)({
                        header: R.intl.string(R.t.yAfu1p),
                        body: R.intl.string(R.t.Ry2z74),
                        confirmText: R.intl.string(R.t.gm1Vej),
                        cancelText: R.intl.string(R.t.p89ACt),
                        confirmButtonColor: sk.$n.Colors.BRAND,
                        onConfirm: function () {
                            (L.YX.updateSetting(n), Cp(n, !1));
                        },
                        onCancel: function () {
                            (L.YX.updateSetting(n), L.Zr.updateSetting(n ? lh.A.getGuildIds() : []), Cp(n, !0));
                        },
                    }));
            } else {
                let n = (0, n8.xo)();
                (e ? n.delete(t) : n.add(t),
                    L.Zr.updateSetting(Array.from(n)),
                    tt.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: CA.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    CI = (0, d.E2)(c.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [CE(), Cx()];
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, Cr.xk)(),
                n = (0, h.bG)([dA.Ay], () => dA.Ay.getFlattenedGuildIds()),
                i = (0, h.bG)([lh.A], () => lh.A.getGuilds()),
                l = n[0];
            E.useEffect(
                () =>
                    Cu.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, n) => {
                            let i = Cr.xk.getState().selectedGuildId;
                            "" === n && "" !== e && i === Cr.YG && null != l
                                ? t(l)
                                : "" === e && i !== Cr.YG && t(Cr.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [l, t],
            );
            let s = E.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...Cc,
                        id: Cc.value,
                        label: Cc.label(),
                        leading: (0, A.jsx)("div", {
                            className: Cd.KP,
                            children: (0, A.jsx)(Co.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: Cd.cl,
                            }),
                        }),
                    }),
                    n.forEach((t) => {
                        let n = i[t];
                        null != n &&
                            e.push({
                                id: n.id,
                                label: n.name,
                                value: n.id,
                                leading: (0, A.jsx)(db.Ay, {
                                    className: Cd.cl,
                                    guild: n,
                                    size: db.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [n, i]);
            return (0, A.jsx)(SV.Z, {
                selectionMode: "single",
                onSelectionChange: function (e) {
                    t(e);
                },
                value: e,
                options: s,
            });
        },
    }),
    C_ = (0, d.E2)(c.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            return (0, Ca.Tx)() === Cr.YG && false;
        },
        Component: function () {
            return null;
        },
    }),
    CN = (0, d.zZ)(c.X.PERMISSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Y5GYcX),
        useSubnavLabel: () => R.intl.string(R.t.YUU0RF),
        useInlineNotice: function () {
            let e = _m(),
                t = NI();
            if ((0, Ca.Tx)() === Cr.YG) return e ?? t;
        },
        buildLayout: () => [CI, CS, Cf, C_],
    }),
    CC = (0, d.zZ)(c.X.SPAM_FILTERS_CATEGORY, { useTitle: () => R.intl.string(R.t.Qwuoic), buildLayout: () => [NZ] }),
    Cb = (0, d.zZ)(c.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = NT();
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
                let { sortedGames: e } = NT();
                return E.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, A.jsx)("img", {
                                src: O.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: AY.CD,
                                height: AY.CD,
                            }),
                            shape: AY.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, A.jsx)("img", {
                                    src: O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: AY.YP,
                                    height: AY.YP,
                                }),
                                shape: AY.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: m.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [R.intl.string(R.t.YpCiMt)],
        initialize: () => {
            EI.A.fetch();
        },
        buildLayout: () => [Nh, NS, NA, Nu],
    }),
    Cy = (0, d.t_)(c.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        buildLayout: () => [NH, CC, CN, N6, Cb, Cs],
    }),
    Cv = (0, d.i4)(c.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        icon: Na.l,
        buildLayout: () => [Cy],
    });
var Cj = n(782603),
    CO = n(899847),
    CL = n(695515);
let CR = (0, d.Hn)(c.X.MOBILE_NOTIFICATION_DELAY, {
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
    CD = (0, d.zD)(c.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => R.intl.string(R.t["btbS+Z"]),
        useSubtitle: () =>
            R.intl.format(R.t.Q5crhR, { onClick: () => (0, nl.openUserSettings)(c.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    CP = (0, d.Qx)(c.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.JZxxGx),
        useSubtitle: () => R.intl.string(R.t.HDLtJl),
        useValue: () => (0, h.bG)([ap.A], () => ap.A.getTTSType()),
        setValue: (e) => aN.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.B1AGeJ), value: S.aVn.ALL_CHANNELS },
                { name: R.intl.string(R.t.uzZg9e), value: S.aVn.SELECTED_CHANNEL },
                { name: R.intl.string(R.t.DYO5Oi), value: S.aVn.NEVER },
            ];
        },
        usePredicate: () => w.$j,
    }),
    CG = c.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    CU = (0, d.bd)(CG, {
        useTitle: (e) => (e ? R.intl.string(R.t.RyimDk) : R.intl.string(R.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tA(CG, {
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
        buildLayout: () => [CR, CD, CP],
    }),
    CM = (0, d.zZ)(c.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["31DySj"]),
        buildLayout: () => [CU],
    }),
    CV = (0, d.zD)(c.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => R.intl.string(R.t.VH8AIJ),
        useSubtitle: () => R.intl.string(R.t["9K4qwX"]),
        useValue: function () {
            return (0, h.bG)([ap.A], () => !ap.A.getDisableUnreadBadge());
        },
        setValue: (e) => aN.default.setDisableUnreadBadge(!e),
    }),
    Ck = (0, d.zZ)(c.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.l6w3Vj),
        buildLayout: () => [CV],
    });
var Cw = n(840559),
    CF = n(997187),
    CB = n(723923);
let Cz = CB.px.map((e) =>
        (0, d.zD)(`${c.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, h.cf)([CF.A], () => CF.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, Cw.CA)(e.category, t),
        }),
    ),
    CX = (0, d.Tf)(c.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => R.intl.string(R.t.Ra9Pwk),
        useSubtitle: () => R.intl.string(R.t.iYjQ8X),
        useLabel: () => R.intl.string(R.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, h.cf)([CF.A], () => CF.A.getEmailSettings());
            return CB.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, Cw.NI)(),
        useVariant: () => "critical-secondary",
    }),
    CY = (0, d.zZ)(c.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = CF.A.getEmailSettings();
            e || (0, Cw.cR)();
        },
        buildLayout: () => [...Cz, CX],
    }),
    CH = (0, d.zD)(c.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["/0WCll"]),
        useSubtitle: () => R.intl.string(R.t.wF9ih3),
        useValue: function () {
            return (0, h.bG)([ap.A], () => ap.A.getDesktopType()) !== S.nRU.NEVER;
        },
        setValue: (e) => aN.default.setDesktopType(e ? S.nRU.ALL : S.nRU.NEVER),
    });
var CK = n(832712),
    CW = n(543465),
    CZ = n(790782);
let Cq = (0, d.zD)(c.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => R.intl.string(R.t["k6m/si"]),
    useSubtitle: () => R.intl.string(R.t.LGynPs),
    useValue: () => (0, h.bG)([CW.Ay], () => CW.Ay.useNewNotifications),
    setValue: function (e) {
        (CK.A.setAccountFlag(A2.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (m5.w.set("turnedOffNewNotifications", !0),
                tt.default.track(S.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lh.A.getGuildsArray().filter(
                        (e) => CW.Ay.resolveGuildUnreadSetting(e) === CZ.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, h.bG)(
            [si.default, CW.Ay],
            () =>
                si.default.getCurrentUser()?.isStaff() ||
                si.default.getCurrentUser()?.isStaffPersonal() ||
                CW.Ay.useNewNotifications,
        ),
});
var CQ = n(534654);
let CJ = (0, d.zD)(c.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => R.intl.string(R.t.z9h8Ym),
        useSubtitle: () => R.intl.string(R.t.TummoQ),
        useValue: () => (0, h.bG)([ap.A], () => ap.A.screenDowntimeReminder),
        setValue: (e) => aN.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, CQ.A)(),
                t = (0, Ih.Du)();
            return e && t;
        },
    }),
    C$ = (0, d.zD)(c.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => R.intl.string(R.t.onrAy7),
        useSubtitle: () => R.intl.string(R.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, CQ.A)(),
                t = (0, Ih.Du)();
            return e && t;
        },
    }),
    C0 = (0, d.zD)(c.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.NjOMvh),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            (L.oz.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A2.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [R.intl.string(R.t.hi4dSk)],
    }),
    C1 = (0, d.zD)(c.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            (L.NR.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A2.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    C2 = (0, d.zD)(c.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            (L.Yh.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A2.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    C3 = (0, d.zD)(c.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            (L.T3.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A2.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var C6 = n(815807);
let C5 = (0, d.Hn)(c.X.REACTION_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: R.intl.string(R.t["9x/RtT"]), value: eB.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: R.intl.string(R.t.fJAbQd), value: eB.Tz.ONLY_DMS },
            { id: "disabled", label: R.intl.string(R.t["xu+UDU"]), value: eB.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, C6.n4)(e, L.Zp.getSetting()),
    }),
    C4 = (0, d.zD)(c.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["k51K1+"]),
        useValue: L.Qr.useSetting,
        setValue: function (e) {
            (L.Qr.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A2.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    C8 = (0, A7.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    C7 = (0, d.zD)(c.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            (L.zS.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A2.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => C8.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    C9 = (0, d.FW)(c.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.FEVRDV),
        buildLayout: () => [C2, C0, C1, C4, C7, C3, C5],
    }),
    be = (0, d.zD)(c.X.TASK_BAR_FLASHING, {
        useTitle: () => R.intl.string(R.t.xSmFQG),
        useSubtitle: () => R.intl.string(R.t.bd4j4x),
        useValue: () => (0, h.bG)([ap.A], () => ap.A.taskbarFlash),
        setValue: (e) => aN.default.setTaskbarFlash(e),
        usePredicate: () => (0, nm.uF)(),
    }),
    bt = (0, d.zZ)(c.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [CH, be, C9, Cq, C$, CJ],
    });
var bn = n(965957),
    bi = n(312671),
    bl = n(235079);
let bs = (0, d.zD)(c.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = ax.A.useHolidaySoundpack();
        return null == e ? "" : R.intl.format(R.t["E/OyBr"], { soundpack: R.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, h.bG)([bi.A], () => bi.A.getSoundpack()),
            t = ax.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = ax.A.getHolidaySoundpack();
        (ta()(null != t, "predicate should fail if no soundpack is available"), (0, bn.p)(e ? t : bl.i.CLASSIC));
    },
    usePredicate: ax.A.useIsEligible,
});
var br = n(970931);
let ba = {
        useTitle: () => R.intl.string(R.t.jD1qzM),
        sound: "message1",
        useDisabled: br.kB,
        useDisabledMessage: () => ((0, br.kB)() ? R.intl.string(R.t.cIRG0s) : void 0),
    },
    bo = { useTitle: () => R.intl.string(R.t.XBrJT6), sound: "call_ringing" },
    bu = (0, d.zD)(c.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.TzjwV9),
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => ay("message3") }),
        useValue: () =>
            (0, h.bG)([ap.A], () => ap.A.getNotifyMessagesInSelectedChannel() && !ap.A.getDisableAllSounds()),
        setValue: (e) => aN.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, h.bG)([ap.A], () => ap.A.getDisableAllSounds()),
    }),
    bd = (0, d.zD)(c.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => R.intl.string(R.t["2ZhCOd"]),
        useSubtitle: () => R.intl.string(R.t.EAKdPr),
        useValue: () => (0, h.bG)([ap.A], () => ap.A.getDisableAllSounds()),
        setValue: (e) => aN.default.toggleDisableAllSounds(e),
    }),
    bc = (0, d.D1)(c.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                ab();
            };
        },
        buildLayout: () => [av(ba), bu, av(bo), bd],
    }),
    bg = (0, d.AK)(c.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t["MMy+lm"]),
        useSearchTerms: () => [R.intl.string(R.t["MMy+lm"])],
        destinationKey: c.X.SOUNDS_CATEGORY,
    }),
    bm = (0, d.gN)(c.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bg] }),
    bA = (0, d.zZ)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.LweOYy),
        buildLayout: () => [bs, bc, bm],
    }),
    bE = (0, d.t_)(c.X.NOTIFICATIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.HcoRu0),
        initialize: () => {
            null != CL.A.getAgeGroup() || CL.A.isLoading() || (CL.A.canRefetch() && CO.Ay.initialPageLoad());
        },
        buildLayout: () => [bt, bA, Ck, CY, CM],
    }),
    bh = (0, d.i4)(c.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.HcoRu0),
        icon: Cj.BellIcon,
        buildLayout: () => [bE],
    }),
    bS = (0, d.WI)(c.X.USER_SECTION, {
        useTitle: () => R.intl.string(R.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [IG, Nr, Cv, bh, _s],
    });
var bT = n(387758),
    bp = n(271866),
    bx = n(147964),
    bf = n(868511);
let bI = (0, d.zD)(c.X.APPLICATION_TEST_MODE, {
        useTitle: () => R.intl.string(R.t.erOqlh),
        useSubtitle: () => R.intl.string(R.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, h.bG)([bx.A], () => null != bx.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, la.openModal)((e) => (0, A.jsx)(bf.A, { ...e })) : bp.cL();
        },
    }),
    b_ = (0, d.zD)(c.X.DEVELOPER_MODE, {
        useTitle: () => R.intl.string(R.t.ObIb1Q),
        useSubtitle: () => R.intl.format(R.t["CY6q/Q"], { apiDocsUrl: S.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => uy.p5,
    }),
    bN = (0, d.zZ)(c.X.DEVELOPER_CATEGORY, { buildLayout: () => [b_, bI] }),
    bC = (0, d.t_)(c.X.DEVELOPER_PANEL, { useTitle: () => R.intl.string(R.t["0BRxRp"]), buildLayout: () => [bN] }),
    bb = (0, d.i4)(c.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: bT.G,
        useTitle: () => R.intl.string(R.t["0BRxRp"]),
        buildLayout: () => [bC],
    });
var by = n(70688),
    bv = n(830215);
let bj = (0, d.i4)(c.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => R.intl.string(R.t["2jxGer"]),
        icon: by.DoorExitIcon,
        onClick: () => {
            (0, nJ.A)({
                title: R.intl.string(R.t["2jxGer"]),
                subtitle: R.intl.string(R.t.SUnWBB),
                confirmText: R.intl.string(R.t["2jxGer"]),
                onConfirm: () => {
                    bv.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bO = (0, d.WI)(c.X.UTILITY_SECTION, {
        useTitle: () => R.intl.string(R.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [bb, bj],
    }),
    bL = (0, d.Hr)({ buildLayout: () => [xp, bS, mT, a3, SZ, AB, bO], analyticsKey: "user_settings" });
