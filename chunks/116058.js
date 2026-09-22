n.d(t, { D: () => bB });
var i,
    l,
    s,
    r,
    a,
    o,
    u = n(419954),
    d = n(780964),
    c = n(550640),
    g = n(107384),
    m = n(477900),
    A = n(582128),
    E = n(17928),
    h = n(652215),
    S = n(346055),
    T = n(297264),
    p = n(364522),
    x = n(97808),
    f = n(778712),
    I = n(821609),
    N = n(775602),
    _ = n(320095),
    C = n(963852),
    b = n(763754),
    y = n(20851),
    v = n(95701),
    j = n(486020),
    O = n(885386),
    L = n(375708),
    D = n(345016);
let R = new v.nA({ id: "1337", guild_id: "1337", type: h.rbe.GUILD_TEXT, name: "preview" }),
    P = [
        { status: h.clD.IDLE, discriminator: "2" },
        { status: h.clD.DND, discriminator: "3" },
        { status: h.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, _.rh)({ ...(0, C.Ay)({ channelId: R.id, content: e }), state: h.cmJ.SENT, reactions: t });
}
var M = n(856488);
let U = (0, u.zD)(d.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => L.intl.string(L.t.TZ2hZH),
        useSubtitle: () => L.intl.string(L.t.Q7wgHc),
        useValue: () => O.D_.useSetting(),
        setValue: (e) => O.D_.updateSetting(e),
    }),
    V = (0, u.zD)(d.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => L.intl.string(L.t.XYvMIX),
        useSubtitle: () => L.intl.string(L.t.T0rbtM),
        useValue: O._z.useSetting,
        setValue: O._z.updateSetting,
    });
var k = n(100767),
    w = n(435558),
    F = n.n(w),
    B = n(935399),
    z = n(331322),
    X = n(299163),
    Y = n(834730),
    H = n(113494),
    K = n(782134),
    W = n(54570),
    Z = n(8880),
    q = n(75804);
let Q = F().debounce((e) => {
    (0, W.zU)(e);
}, 250);
function J() {
    let [e, t] = A.useState(!1);
    return (
        (0, B.l0)(() => (0, W.pr)()),
        (0, m.jsx)(I.$, {
            text: L.intl.string(L.t.SKNnqq),
            icon: e ? H.PauseIcon : K.PlayIcon,
            size: "sm",
            onClick: function () {
                if (e) {
                    ((0, W.pr)(), t(!1));
                    return;
                }
                ((0, W.AU)(
                    L.intl.string(L.t.PKaNJL),
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
let $ = (0, u.E2)(d.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [L.intl.string(L.t.lsW5Ev)],
        Component: function () {
            let e = (0, E.bG)([Z.A], () => Z.A.speechRate);
            return (0, m.jsxs)(z.B, {
                gap: 16,
                children: [
                    (0, m.jsx)(X.A, {
                        label: L.intl.string(L.t.lsW5Ev),
                        description: L.intl.string(L.t.Ci4wMS),
                        markers: q.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: Q,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, m.jsx)(Y.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: L.intl.string(L.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, m.jsx)(Y.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: L.intl.string(L.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, m.jsx)(Y.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, m.jsx)(J, {}),
                ],
            });
        },
        usePredicate: () => k.$j,
    }),
    ee = (0, u.zZ)(d.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => L.intl.string(L.t.XVR0Rb),
        buildLayout: () => [$, V, U],
    }),
    et = (0, u.AK)(d.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => L.intl.string(L.t.aTfeGK),
        destinationKey: d.X.APPEARANCE_PANEL,
    }),
    en = (0, u.gN)(d.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [et] });
var ei = n(955572);
let el = (0, u.zD)(d.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => L.intl.string(L.t.OCJg5f),
    useSubtitle: () => L.intl.string(L.t.HEO0s3),
    useValue: () => (0, E.bG)([N.Ay], () => N.Ay.desaturateUserColors),
    setValue: () => (0, ei.YV)(),
});
var es = n(652525);
let er = (0, u.zD)(d.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => L.intl.string(L.t["+Isihb"]),
        useSubtitle: () => L.intl.string(L.t.nNZ1Tz),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.enableCustomCursor),
        setValue: (e) => (0, ei.ts)(e),
        usePredicate: () => (0, es.t)("EnableCustomCursorSetting"),
    }),
    ea = (0, u.zD)(d.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => L.intl.string(L.t["S3z+pV"]),
        useSubtitle: () => L.intl.string(L.t["3QuI9+"]),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, ei.Gm)(e),
        hasIcon: !0,
    });
var eo = n(554146);
let eu = (0, u.zD)(d.X.HIGH_CONTRAST_MODE, {
    useTitle: () => L.intl.string(L.t.aZlePv),
    useSubtitle: () => L.intl.string(L.t["v2qF8+"]),
    useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, ei.uh)(e ? N._1.HIGH : N._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: g.Xi.NEW, dismissibleContent: eo.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var ed = n(406360),
    ec = n(742023);
let eg = (0, u.Qx)(d.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => L.intl.string(L.t.nemtgW),
        useSubtitle: () => L.intl.string(L.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: g.Xi.BETA }),
        useOptions: function () {
            return A.useMemo(
                () => [
                    { name: L.intl.string(L.t.D5Fma9), desc: L.intl.string(L.t.Qj75ck), value: "no-limit" },
                    { name: L.intl.string(L.t.ldcGIH), desc: L.intl.string(L.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, ed.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, ei.FU)(e);
        },
        useValue: function () {
            return (0, E.bG)([ec.Ay], () => ec.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", L.intl.string(L.t["O/Gjvn"])],
    }),
    em = (0, u.Hn)(d.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => L.intl.string(L.t.nC2XBl),
        useSubtitle: () => L.intl.string(L.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: L.intl.string(L.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: L.intl.string(L.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: L.intl.string(L.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: L.intl.string(L.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.officialMessageStyle),
        setValue: (e) => (0, ei.w_)(e),
    }),
    eA = (0, u.Hn)(d.X.ROLE_STYLE, {
        useTitle: () => L.intl.string(L.t.uSOPWm),
        useSubtitle: () => L.intl.string(L.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: L.intl.string(L.t.eDdMzJ), value: "username" },
            { id: "dot", label: L.intl.string(L.t.rdmJp0), value: "dot" },
            { id: "hidden", label: L.intl.string(L.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.roleStyle),
        setValue: (e) => (0, ei.IX)(e),
    });
(0, u.Qx)(d.X.ROLE_STYLE, {
    useTitle: () => L.intl.string(L.t.uSOPWm),
    useSubtitle: () => L.intl.string(L.t["86hjzQ"]),
    useOptions: () => [
        { name: L.intl.string(L.t.YEOEi6), value: "username" },
        { name: L.intl.string(L.t.mQaro3), value: "dot" },
        { name: L.intl.string(L.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, E.bG)([N.Ay], () => N.Ay.roleStyle),
    setValue: (e) => (0, ei.IX)(e),
});
let eE = (0, u.sN)(d.X.SATURATION, {
    useTitle: () => L.intl.string(L.t["5PWWCY"]),
    useSubtitle: () => L.intl.string(L.t.xf5S6P),
    markers: h.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => N.Ay.saturation,
    asValueChanges: (e) => (0, ei.HU)(e),
});
var eh = n(964486),
    eS = n(839214),
    eT = n(502229),
    ep = n(975571);
let ex = (0, eS.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    ef = (0, u.zD)(d.X.SYNC_FORCED_COLORS, {
        useTitle: () => L.intl.string(L.t.cguiec),
        useSubtitle: () => L.intl.format(L.t.GwEVE2, { learnMoreLink: ep.A.getArticleURL(h.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, E.bG)([N.Ay], () => N.Ay.syncForcedColors);
            return (
                (0, eh.Ay)(() => {
                    ex.setState({ syncEnabled: N.Ay.syncForcedColors });
                }),
                ex.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = ex.getState();
            if (null != t) {
                (clearTimeout(t), ex.setState({ syncEnabled: e, updateTimeout: null }));
                return;
            }
            if (e === N.Ay.syncForcedColors) return void ex.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                ((0, ei.D3)(e), ex.setState({ updateTimeout: null }));
            }, 150);
            ex.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, eT.D)(),
    }),
    eI = (0, u.zZ)(d.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => L.intl.string(L.t.JqvyiY),
        buildLayout: () => [eE, el, eu, er, ef, eg, eA, em, ea, en],
    });
var eN = n(397438),
    e_ = n(355097);
function eC(e) {
    return (0, E.bG)([eN.A], () =>
        (function (e) {
            switch (e) {
                case e_._A.REDUCED_MOTION:
                    return L.intl.format(L.t["1dT9V4"], {});
                case e_._A.REDUCED_MOTION_STICKERS:
                    return L.intl.string(L.t["2ExvRu"]);
                default:
                    return;
            }
        })(eN.A.getAppliedOverrideReasonKey(e)),
    );
}
let eb = (0, u.zD)(d.X.ANIMATE_EMOJIS, {
        useTitle: () => L.intl.string(L.t.iIaOlc),
        useSubtitle: () => eC("animateEmoji"),
        useValue: () => O.Sf.useSetting(),
        setValue: (e) => O.Sf.updateSetting(e),
    }),
    ey = (0, u.zD)(d.X.ANIMATE_GIFS, {
        useTitle: () => L.intl.string(L.t.wqsK7q),
        useSubtitle: () => eC("gifAutoPlay"),
        useValue: () => O.kt.useSetting(),
        setValue: (e) => O.kt.updateSetting(e),
    });
var ev = n(823894);
let ej = (0, u.Qx)(d.X.ANIMATE_STICKERS, {
        useTitle: () => L.intl.string(L.t.sBHIh0),
        useSubtitle: () => eC("animateStickers"),
        useOptions: () => [
            { name: L.intl.string(L.t["Xp+X2U"]), value: ev.BJ.ALWAYS_ANIMATE },
            { name: L.intl.string(L.t.IlLT7e), desc: L.intl.string(L.t.bIW9Tl), value: ev.BJ.ANIMATE_ON_INTERACTION },
            { name: L.intl.string(L.t.IGu8x3), value: ev.BJ.NEVER_ANIMATE },
        ],
        useValue: () => O.S0.useSetting(),
        setValue: (e) => O.S0.updateSetting(e),
    }),
    eO = (0, u.zD)(d.X.REDUCED_MOTION, {
        useTitle: () => L.intl.string(L.t.b3XBzg),
        useSubtitle: () => L.intl.format(L.t.XqvxJc, { helpdeskArticle: ep.A.getArticleURL(h.MVz.REDUCED_MOTION) }),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion),
        setValue: (e) => (0, ei.qz)(e ? "reduce" : "no-preference"),
    }),
    eL = (0, u.zD)(d.X.SYNC_REDUCED_MOTION, {
        useTitle: () => L.intl.string(L.t.oL55A6),
        useValue: () => (0, E.bG)([N.Ay], () => "auto" === N.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, ei.qz)(e ? "auto" : N.Ay.systemPrefersReducedMotion),
    }),
    eD = (0, u.zZ)(d.X.MOTION_CATEGORY, {
        useTitle: () => L.intl.string(L.t.e3TR1b),
        buildLayout: () => [eO, eL, ey, eb, ej],
    });
var eR = n(688810),
    eP = n(259065),
    eG = n(701974);
let eM = (0, u.zD)(d.X.DISPLAY_NAME_STYLES, {
    useTitle: () => L.intl.string(eG.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eR.Ay)();
        return L.intl.format(eG.default.aEax6P, {
            onClickOpenModal() {
                (0, eP.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, E.bG)([N.Ay], () => N.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, ei.Dm)(e),
});
function eU(e) {
    return `${e.toFixed(0)}px`;
}
let eV = (0, u.sN)(d.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => L.intl.string(L.t.rT3Pq5),
        useSubtitle: () => L.intl.string(L.t.LXUhen),
        markers: h.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: h.hH7.FONT_SIZES["0"],
        maxValue: h.hH7.FONT_SIZES[h.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => h.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => N.Ay.fontSize,
        onValueRender: eU,
        onMarkerRender: eU,
        asValueChanges: (e) => (0, ei.XS)(e),
    }),
    ek = (0, u.zD)(d.X.UNDERLINE_LINKS, {
        useTitle: () => L.intl.string(L.t.OLZFB8),
        useSubtitle: () => L.intl.string(L.t.DIX3ke),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, ei.kI)(e),
    }),
    ew = (0, u.zZ)(d.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => L.intl.string(L.t["bxh/R7"]),
        buildLayout: () => [eV, ek, eM],
    });
var eF = n(873298);
let eB = (0, u.Qx)(d.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => L.intl.string(L.t["C/5V0A"]),
        useSubtitle: () => L.intl.string(L.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: L.intl.string(L.t["7iegX4"]), value: eF.NS.COMPACT },
            { name: L.intl.string(L.t.bBvAEH), value: eF.NS.DEFAULT },
            { name: L.intl.string(L.t["4cuYHx"]), value: eF.NS.COZY },
        ],
        useValue: () => O.Xi.useSetting(),
        setValue: (e) => {
            e !== eF.NS.UNSET_UI_DENSITY && O.Xi.updateSetting(e);
        },
    }),
    ez = "cozy",
    eX = "compact",
    eY = (0, u.Qx)(d.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => L.intl.string(L.t.nKRoPv),
        useSubtitle: () => L.intl.string(L.t.QntEEG),
        useSearchTerms: () => [L.intl.string(L.t.ZEoGMd)],
        useOptions: () => [
            { name: L.intl.string(L.t.Jqj4cZ), value: ez },
            { name: L.intl.string(L.t["1JNcPS"]), value: eX },
        ],
        useValue: () => (O.hH.useSetting() ? eX : ez),
        setValue: (e) => {
            (O.hH.updateSetting(e === eX), (0, ei.AC)());
        },
    });
var eH = n(381941);
function eK(e) {
    return `${e.toFixed(0)}px`;
}
let eW = (0, u.sN)(d.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => L.intl.string(L.t.Q6lKkg),
    useSubtitle: () => L.intl.string(L.t.p7eUrb),
    markers: eH.qh,
    stickToMarkers: !0,
    minValue: eH.qh["0"],
    maxValue: eH.qh[eH.qh.length - 1],
    useDefaultValue: () => (O.hH.useSetting() ? eH.y5 : eH.ES),
    useExternalValue: () => (0, E.bG)([N.Ay], () => N.Ay.messageGroupSpacing),
    getInitialValue: () => N.Ay.messageGroupSpacing,
    onValueRender: eK,
    onMarkerRender: eK,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, ei.AC)(e);
        }
    },
});
var eZ = n(775121),
    eq = n(723702);
let eQ = (0, u.sN)(d.X.APPEARANCE_ZOOM, {
        usePredicate: () => eq.isPlatformEmbedded,
        useTitle: () => L.intl.string(L.t.i19n5L),
        useSubtitle: () => L.intl.format(L.t["x9PK/3"], { modKey: eZ.A.modKey }),
        markers: h.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: h.hH7.ZOOM_SCALES["0"],
        maxValue: h.hH7.ZOOM_SCALES[h.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => h.hH7.ZOOM_DEFAULT,
        getInitialValue: () => N.Ay.zoom,
        useExternalValue: () => (0, E.bG)([N.Ay], () => N.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, ei.Qp)(e),
        useSearchTerms: () => [L.intl.string(L.t.ip0uSf)],
    }),
    eJ = (0, u.zZ)(d.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => L.intl.string(L.t.VKYWk8),
        buildLayout: () => [eB, eY, eW, eQ],
    }),
    e$ = (0, u.t_)(d.X.ACCESSIBILITY_PANEL, {
        useTitle: () => L.intl.string(L.t.G0neg7),
        buildLayout: () => [ew, eJ, eI, eD, ee],
        decoration: {
            type: g.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = O.hH.useSetting(),
                    t = O.jW.useSetting(),
                    n = A.useMemo(
                        () => [
                            G(
                                L.intl.formatToPlainString(L.t.BknJRT, {}),
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
                            G(L.intl.formatToPlainString(L.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, E.bG)([N.Ay], () => N.Ay.messageGroupSpacing);
                return (0, m.jsx)(S.M, {
                    children: (0, m.jsxs)("section", {
                        "aria-label": L.intl.string(L.t.RC22qg),
                        children: [
                            (0, m.jsx)(T.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: D.Vf,
                                children: L.intl.string(L.t.RC22qg),
                            }),
                            (0, m.jsxs)(p.Ip, {
                                className: D.VH,
                                children: [
                                    (0, m.jsx)("ol", {
                                        className: D.DZ,
                                        style: { gap: i },
                                        "aria-label": L.intl.string(L.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, m.jsx)(
                                                "li",
                                                {
                                                    children: (0, m.jsx)(y.A, {
                                                        message: t,
                                                        channel: R,
                                                        compact: e,
                                                        author: { ...(0, b.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, m.jsxs)("div", {
                                        className: D.Jb,
                                        children: [
                                            (0, m.jsx)("div", {
                                                className: D.HD,
                                                children: P.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, m.jsx)(
                                                        x.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: f._3.SIZE_32,
                                                            src: j.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": L.intl.string(L.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, m.jsx)(I.$, {
                                                text: L.intl.string(L.t["2RHHgz"]),
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
    e0 = (0, u.i4)(d.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.G0neg7),
        icon: c.c,
        useMenu: M.A,
        buildLayout: () => [e$],
    });
n(321073);
var e1 = n(650809),
    e2 = n(477782),
    e3 = n(636537),
    e6 = n(228366),
    e5 = n(74396),
    e4 = n(93055),
    e8 = n(269880),
    e7 = n(55619),
    e9 = n(351906),
    te = n(174459),
    tt = n(812993),
    tn = n(189081);
let ti = (0, u.zD)(d.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, E.bG)([tn.A], () => tn.A.hasLibraryApplication()),
        useTitle: () => L.intl.string(L.t.fi3UQN),
        useSubtitle: () => L.intl.string(L.t["8mYp37"]),
        useValue: () => !O.l_.useSetting(),
        setValue: (e) => O.l_.updateSetting(!e),
    }),
    tl = (0, u.zZ)(d.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => L.intl.string(L.t["8/udY0"]),
        buildLayout: () => [ti],
    });
var ts = n(284009),
    tr = n.n(ts),
    ta = n(199966),
    to = n(963935);
function tu(e) {
    let { title: t } = e;
    return t;
}
function td(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: l } = e,
        s = t();
    return "string" == typeof s ? i({ title: s, index: l, key: n }) : s;
}
function tc(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, m.jsx)(td, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function tg(e) {
    return e.type === to.Z6.LIST;
}
function tm(e, t) {
    let { limit: n = 2, formatter: i = tu } = t ?? {};
    tr()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, ta._)(),
        r = l.get(e) ?? s.get(e);
    tr()(
        null != r && (r.type === to.Z6.ACCORDION || tg(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = tg(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return A.useMemo(() => {
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
                return L.intl.format(L.t["3H9tCW"], { settingOneHook: tc({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return L.intl.format(L.t.MWryo6, {
                    settingOneHook: tc({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tc({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return L.intl.format(L.t.a00b5G, {
                    settingOneHook: tc({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tc({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tc({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === l
            ? L.intl.format(L.t.O8vNbS, { settingOneHook: tc({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === l
              ? L.intl.format(L.t["acXG/W"], {
                    settingOneHook: tc({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tc({ setting: t[1], formatter: i, index: 1 }),
                })
              : L.intl.format(L.t["5+ldWc"], {
                    settingOneHook: tc({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tc({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tc({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tA = n(951260);
let tE = (0, u.zD)(d.X.ENABLE_APPS_BUTTON, {
        useTitle: () => L.intl.string(L.t.ZTH4j4),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, ei.n8)({ appsButtonEnabled: e }),
    }),
    th = {
        useTitle: () => L.intl.string(L.t["I/5LyL"]),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isSubmitButtonEnabled),
        setValue: () => (0, ei.Xt)(),
    },
    tS = (0, u.zD)(d.X.ENABLE_SEND_BUTTON, th),
    tT = (0, u.zD)(d.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...th,
        usePredicate: () => !(0, tA.n)("EnableSendButtonOutsideExperiment"),
    }),
    tp = (0, u.zD)(d.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => L.intl.string(L.t.WggFoO),
        useSubtitle: () => L.intl.string(L.t.XpErGj),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, ei.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, E.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tx = (0, u.zD)(d.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => L.intl.string(L.t.YErWkD),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, ei.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, E.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tf = (0, u.zD)(d.X.ENABLE_GIF_BUTTON, {
        useTitle: () => L.intl.string(L.t.k7oNEz),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isGifButtonEnabled),
        setValue: (e) => (0, ei.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, E.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tI = (0, u.zD)(d.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => L.intl.string(L.t.Ar0krj),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, ei.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, E.bG)([N.Ay], () => N.Ay.expressionPickerFormat === N.IG.FLEXIBLE),
    }),
    tN = (0, u.Qx)(d.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => L.intl.string(L.t.AxRAWt),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.expressionPickerFormat),
        setValue: (e) => (0, ei.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: L.intl.string(L.t.k86Soy), desc: L.intl.string(L.t.bSGTTZ), value: N.IG.FLEXIBLE },
                { name: L.intl.string(L.t.bjwSOn), desc: L.intl.string(L.t.We36HX), value: N.IG.CONDENSED },
                { name: L.intl.string(L.t.FDIKss), desc: L.intl.string(L.t["rclZL/"]), value: N.IG.HIDDEN },
            ];
        },
    }),
    t_ = (0, u.FW)(d.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => L.intl.string(L.t["V9/cNN"]),
        buildLayout: () => [tN, tp, tx, tf, tI],
    }),
    tC = (0, u.bd)(d.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? L.intl.string(L.t.IwVGQs) : L.intl.string(L.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tm(d.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tA.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tS, tE, t_],
    });
var tb = n(565645);
let ty = (0, u.zD)(d.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => L.intl.string(L.t["79qal8"]),
        useSubtitle: () =>
            L.intl.format(L.t.GejoQK, { emojiHook: (e, t) => (0, m.jsx)(tb.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: O.j7.useSetting,
        setValue: O.j7.updateSetting,
    }),
    tv = (0, u.zD)(d.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => L.intl.string(L.t.c0oFDw),
        useValue: O.BQ.useSetting,
        setValue: O.BQ.updateSetting,
    }),
    tj = (0, u.zD)(d.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => L.intl.string(L.t.AqGrEI),
        useValue: O.SI.useSetting,
        setValue: (e) => {
            (te.default.track(h.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: h.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                O.SI.updateSetting(e));
        },
    });
var tO = n(793574);
let tL = (0, u.zD)(d.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => L.intl.string(L.t["d+It2U"]),
        useValue: O.ML.useSetting,
        setValue: (e) => {
            (te.default.track(h.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: h.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tO.A.TEXT_AND_IMAGES],
            }),
                O.ML.updateSetting(e));
        },
    }),
    tD = (0, u.zZ)(d.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => L.intl.string(L.t.Ob7VMB),
        useSearchTerms: () => [L.intl.string(L.t.onqU6o)],
        buildLayout: () => [tj, ty, tL, tv, tT, tC],
    });
var tR = n(526162),
    tP = n(793943),
    tG = n(792656),
    tM = n(830543),
    tU = n(785007),
    tV = n(806932),
    tk = n(915089),
    tw = n(10392),
    tF = n(82498),
    tB = n(174197),
    tz = n(202541);
let tX = (0, u.E2)(d.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [L.intl.string(L.t.gnwxvT)],
    Component: function () {
        let e = (0, tk.GV)(),
            { ref: t, ...n } = (0, tU._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, E.bG)([tR.A], () => tR.A.isUpsellPreview);
        return (
            (0, B.Ay)(() => {
                i &&
                    (te.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tz.e.APP_ICON_UPSELL,
                        location_stack: [tO.A.USER_SETTINGS],
                    }),
                    (0, tw.sq)(h.U7l.PREMIUM_UPSELL_VIEWED, [tO.A.USER_SETTINGS], () =>
                        (0, tF.uq)(tz.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, m.jsx)("div", {
                ...n,
                ref: t,
                children: (0, m.jsx)(z.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, m.jsx)(tV.m, { disabled: i, size: tB.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function tY() {
    ((0, tP.nf)(tP.HP.APP_ICON), (0, tM.default)());
}
function tH() {
    return (0, m.jsx)(tG.A, {
        subscriptionTier: tz.pe.TIER_2,
        defaultTextOverride: L.intl.string(L.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: h.ZSU.BUTTON_CTA, objectType: h.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let tK = (0, u.zZ)(d.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => L.intl.string(L.t.RPh2ou),
        useSubtitle: () => L.intl.string(L.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, E.bG)([tR.A], () => tR.A.isUpsellPreview);
            return A.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: g.UV.BUTTON,
                        text: L.intl.string(L.t["6acvnZ"]),
                        onClick: tY,
                    }),
                    e && t.push({ id: "upsell-button", type: g.UV.STRONGLY_DISCOURAGED_CUSTOM, button: tH }),
                    { type: g.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [tX],
    }),
    tW = (0, u.AK)(d.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => L.intl.string(L.t.UDr3Iy),
        useSearchTerms: () => [L.intl.string(L.t.UDr3Iy)],
        destinationKey: d.X.ACCESSIBILITY_PANEL,
    }),
    tZ = (0, u.gN)(d.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [tW] });
var tq = n(452027),
    tQ = n(193249),
    tJ = n(976860),
    t$ = n(16236),
    t0 = n(635233),
    t1 = n(749884),
    t2 = n(22277);
let t3 = ep.A.getArticleURL(h.MVz.FAVORITES_GUILD);
function t6() {
    let { analyticsLocations: e } = (0, eR.Ay)(tO.A.USER_SETTINGS_FAVORITES),
        t = A.useCallback(() => {
            ((0, t0.mv)("settings_page"), (0, tJ.uh)(h.YYv), (0, tM.default)());
        }, []);
    return (0, m.jsx)(eR.f5, {
        value: e,
        children: (0, m.jsx)(tq.D, {
            label: L.intl.string(t2.default.OT1NK5),
            description: L.intl.format(t2.default.GR2KOG, { helpCenterLink: t3 }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, m.jsxs)(z.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, m.jsx)(I.$, { variant: "secondary", text: L.intl.string(t2.default["7WwLnr"]), onClick: t }),
                    (0, m.jsx)(tG.A, {
                        subscriptionTier: tz.pe.TIER_2,
                        defaultTextOverride: L.intl.string(t2.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let t5 = (0, u.E2)(d.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, e4.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [L.intl.string(t2.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, e4.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, t1.A)(!1);
            return e
                ? (0, m.jsx)(tQ.d, {
                      checked: t,
                      description: L.intl.format(t2.default.GR2KOG, { helpCenterLink: t3 }),
                      onChange: t$.kG,
                      label: L.intl.string(t2.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, m.jsx)(t6, {});
        },
    }),
    t4 = (0, u.zD)(d.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => L.intl.string(L.t.U47N1p),
        useValue: O.hD.useSetting,
        setValue: O.hD.updateSetting,
    }),
    t8 = (0, u.zD)(d.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => L.intl.string(L.t.VP11No),
        useValue: O.X6.useSetting,
        setValue: O.X6.updateSetting,
    }),
    t7 = (0, u.FW)(d.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => L.intl.string(L.t["9nyle0"]),
        buildLayout: () => [t4, t8],
    }),
    t9 = (0, u.zD)(d.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => L.intl.string(L.t["5bK9vw"]),
        useValue: O.rs.useSetting,
        setValue: O.rs.updateSetting,
    }),
    ne = (0, u.zD)(d.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => L.intl.string(L.t["zge/fP"]),
        useValue: O.jW.useSetting,
        setValue: O.jW.updateSetting,
    });
var nt = n(28863),
    nn = n(817281),
    ni = n(766075);
let nl = (0, u.zD)(d.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => L.intl.string(L.t.JgjNG3),
        useSubtitle: () => {
            if (!O.hH.useSetting())
                return L.intl.format(L.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, m.jsx)(
                            nt.Anchor,
                            {
                                onClick: () => (0, ni.openUserSettings)(d.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !O.hH.useSetting(),
        useValue: () => {
            let e = (0, E.bG)([ec.Ay], () => ec.Ay.displayCompactAvatars);
            return !O.hH.useSetting() || e;
        },
        setValue: (e) => {
            nn.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    ns = (0, u.Hn)(d.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => L.intl.string(L.t.QgwmVz),
        useOptions: () => [
            { value: h.P6Q.ON_CLICK, id: h.P6Q.ON_CLICK, label: L.intl.string(L.t["KFH/me"]) },
            { value: h.P6Q.ALWAYS, id: h.P6Q.ALWAYS, label: L.intl.string(L.t.Pe1RbL) },
            { value: h.P6Q.IF_MODERATOR, id: h.P6Q.IF_MODERATOR, label: L.intl.string(L.t.K5VTBE) },
        ],
        useValue: O.gs.useSetting,
        setValue: O.gs.updateSetting,
    }),
    nr = (0, u.zD)(d.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => L.intl.string(L.t.AInv5m),
        useValue: O.SY.useSetting,
        setValue: O.SY.updateSetting,
    }),
    na = (0, u.zZ)(d.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => L.intl.string(L.t.OIgYlQ),
        useSearchTerms: () => [L.intl.string(L.t["/VQax8"])],
        buildLayout: () => [t7, t9, ne, ns, nr, nl, t5, tZ],
    });
var no = n(753806),
    nu = n(145331);
let nd = (0, u.Qx)(d.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => L.intl.string(L.t.VkoLsy),
        useSearchTerms: () => [L.intl.string(L.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: L.intl.string(L.t.E9JM4J), value: 0 },
                { name: L.intl.string(L.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!O.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            (t ? no.A.cleanUpPrivateChannelSearchState() : no.A.cleanUpSearchState({ type: h.I4_.DMS }),
                (0, nu._k)({
                    prevIsCrossDMSettingEnabled: O.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: nu.vy.USER_SETTINGS,
                }),
                O.Hu.updateSetting(t));
        },
    }),
    nc = (0, u.zZ)(d.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => L.intl.string(L.t["5h0QOP"]),
        buildLayout: () => [nd],
    });
var ng = n(574381);
let nm = (0, u.zD)(d.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => L.intl.string(L.t.IxjaoF),
        useValue: function () {
            return (0, E.bG)([e9.A], () => {
                let { autoToggle: e } = e9.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e7.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return ng.Av;
        },
    }),
    nA = (0, u.zD)(d.X.STREAMING_STREAMER_MODE, {
        useTitle: () => L.intl.string(L.t.TGNg6T),
        useSubtitle: () => L.intl.string(L.t["4nXLnE"]),
        useValue: function () {
            return (0, E.bG)([e9.A], () => {
                let { enabled: e } = e9.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e7.A.update({ enabled: e });
        },
    });
var nE = n(77729),
    nh = n(589051),
    nS = n(588857),
    nT = n(999834);
let np = [],
    nx = (0, u.Hn)(d.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => L.intl.string(L.t.VCDSLW),
        useSearchTerms: () => [L.intl.string(L.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nT.b_)(),
                t = (0, nh.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return A.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(nS.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, E.bG)([e9.A], () => e9.A.getSettings().disabledOverlayWidgets ?? np);
        },
        setValue: (e) => e7.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nf = (0, u.zD)(d.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => L.intl.string(L.t.LSBUGR),
        useValue: () =>
            (0, E.bG)([e9.A], () => {
                let { hidePersonalInformation: e } = e9.A.getSettings();
                return e;
            }),
        setValue: (e) => e7.A.update({ hidePersonalInformation: e }),
    }),
    nI = (0, u.zD)(d.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => L.intl.string(L.t.uWBOri),
        useValue: () =>
            (0, E.bG)([e9.A], () => {
                let { hideInstantInvites: e } = e9.A.getSettings();
                return e;
            }),
        setValue: (e) => e7.A.update({ hideInstantInvites: e }),
    }),
    nN = (0, u.zD)(d.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => L.intl.string(L.t.OrqYDP),
        useValue: () =>
            (0, E.bG)([e9.A], () => {
                let { disableSounds: e } = e9.A.getSettings();
                return e;
            }),
        setValue: (e) => e7.A.update({ disableSounds: e }),
    }),
    n_ = (0, u.zD)(d.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => L.intl.string(L.t.sUAbLd),
        useValue: () =>
            (0, E.bG)([e9.A], () => {
                let { disableNotifications: e } = e9.A.getSettings();
                return e;
            }),
        setValue: (e) => e7.A.update({ disableNotifications: e }),
    }),
    nC = (0, u.zD)(d.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => L.intl.string(L.t["iA81+a"]),
        useSubtitle: () => L.intl.string(L.t.P4vj0h),
        useValue: () =>
            (0, E.bG)([e9.A], () => {
                let { enableContentProtection: e } = e9.A.getSettings();
                return e;
            }),
        setValue: (e) => e7.A.update({ enableContentProtection: e }),
        usePredicate: () => nE.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nb = (0, u.FW)(d.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => L.intl.string(L.t.xYhOEh),
        buildLayout: () => [nf, nI, nN, n_, nC, nx],
    }),
    ny = (0, u.zZ)(d.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => L.intl.string(L.t.S5GfOW),
        buildLayout: () => [nA, nm, nb],
    });
var nv = n(147248),
    nj = n(141343),
    nO = n(665267),
    nL = n(414133),
    nD = n(98908);
let nR = (0, u.Hn)(d.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => L.intl.string(L.t.Q7mm4g),
        useSearchTerms: () => [L.intl.string(nD.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: L.intl.string(L.t["hrS/Pc"]), value: eF.tI.GUILD },
            { id: "personal", label: L.intl.string(L.t.mlvXIq), value: eF.tI.PERSONAL },
        ],
        useValue: () => O.zY.useSetting(),
        setValue: O.zY.updateSetting,
        usePredicate: () => (0, nL.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nP = (0, u.zD)(d.X.SYNC_PROFILE_THEMES, {
        useTitle: () => L.intl.string(L.t.C00w4l),
        useValue: () => (0, E.bG)([N.Ay], () => N.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, ei.M1)(),
    });
var nG = n(284016),
    nM = n(363195);
let nU = (0, u.zD)(d.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => L.intl.string(L.t["/B+kEV"]),
    useSearchTerms: () => [L.intl.string(L.t.Ksh3ik)],
    useValue: function () {
        return (0, E.bG)([nG.A], () => !1 !== nG.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, E.bG)([nM.A], () => nM.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nM.A.theme,
            i = nv.A.gradientPreset?.id ?? null,
            l = O.eh.getSetting()?.customUserThemeSettings != null;
        ((t = h.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            e6.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            nn.Ay.setShouldSyncAppearanceSettings(e));
    },
});
var nV = n(393284);
let nk = (0, u.AK)(d.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => L.intl.string(L.t.nhVQDJ),
        useSearchTerms: () => [L.intl.string(L.t.nhVQDJ)],
        destinationKey: d.X.ACCESSIBILITY_PANEL,
    }),
    nw = (0, u.gN)(d.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nk] }),
    nF = (0, u.zZ)(d.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => L.intl.string(L.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, E.bG)([N.Ay], () => N.Ay.useForcedColors)
                ? {
                      type: g.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: (0, eT.D)()
                          ? L.intl.format(L.t.Jae48E, {
                                onClick: () => {
                                    (0, ni.openUserSettings)(d.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : L.intl.string(L.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, E.bG)([nv.A, N.Ay], () => N.Ay.useForcedColors || nv.A.isPreview),
                t = (0, nj.V)();
            return e || t
                ? null
                : {
                      type: g.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: g.UV.BUTTON,
                              text: L.intl.string(L.t["E+COuA"]),
                              onClick: nO.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nV.k, nU, nP, nR, nw],
    }),
    nB = (0, u.t_)(d.X.APPEARANCE_PANEL, {
        initialize: function () {
            e5.A.isFetching() ||
                (e6.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                e3.Bo.get({ url: h.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        e6.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        e6.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => L.intl.string(L.t["iHH+ky"]),
        buildLayout: () => [nF, tK, na, tD, nc, ny, tl],
    }),
    nz = [
        { badgeType: g.Xi.NEW, dismissibleContent: eo.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: g.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eo.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, m.jsx)(tt.JI, { text: L.intl.string(L.t.y2b7CA) });
            },
        },
    ],
    nX = (0, u.i4)(d.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t["iHH+ky"]),
        icon: e1.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, e8.A)(),
                l =
                    ((e = O.D_.useSetting()),
                    (t = O.SI.useSetting()),
                    e
                        ? null
                        : (0, m.jsx)(e2.sL, {
                              id: "preview-markdown-toggle",
                              label: L.intl.string(L.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  (te.default.track(h.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: h.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      O.SI.updateSetting(e));
                              },
                              checked: t,
                          })),
                s =
                    ((n = (0, E.bG)([e9.A], () => e9.A.enabled, [])),
                    (0, m.jsx)(e2.sL, {
                        id: "streamer-mode-toggle",
                        label: L.intl.string(L.t.p9ZAJZ),
                        action: () => {
                            e7.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return A.useMemo(() => {
                let e = [...i];
                return (
                    null != l &&
                        e.push((0, m.jsx)(e2.rX, { label: L.intl.string(L.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, m.jsx)(e2.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [i, l, s]);
        },
        getDismissibleBadges: () =>
            (0, e4.ad)().isFreemium
                ? nz.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eo.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : nz,
        buildLayout: () => [nB],
    });
var nY = n(37646),
    nH = n(434404);
let nK = (0, u.t_)(d.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => L.intl.string(L.t.KyFVyi),
        buildLayout: () => [nH.F],
    }),
    nW = (0, u.i4)(d.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: nY.U,
        useTitle: () => L.intl.string(L.t.KyFVyi),
        buildLayout: () => [nK],
    });
var nZ = n(3137),
    nq = n(661531),
    nQ = n(314116),
    nJ = n(270003),
    n$ = n(939249),
    n0 = n(369606),
    n1 = n(320448),
    n2 = n(604121),
    n3 = n(725951),
    n6 = n(400492),
    n5 = n(669067),
    n4 = n(115063),
    n8 = n(754692),
    n7 = n(927018),
    n9 = n(512599),
    ie = n(532197),
    it = n(403362),
    ii = n(874486),
    il = n(503698),
    is = n.n(il),
    ir = n(536637),
    ia = n.n(ir),
    io = n(58703),
    iu = n(906688),
    id = n(98705);
function ic(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, n7.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = ia()(n),
        A = null != o && l,
        E = A ? n$.D : "div";
    return (0, m.jsxs)(E, {
        className: is()(id.kL, A && id.b),
        onClick: function () {
            A && o();
        },
        children: [
            (0, m.jsx)("div", {
                className: id.zc,
                children: (0, m.jsx)(iu.A, { achievementId: t, size: iu.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, m.jsxs)("div", {
                className: id.VW,
                children: [
                    null != n &&
                        (0, m.jsx)(Y.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: id.YR,
                            children: (0, io.mk)(g),
                        }),
                    (0, m.jsx)(Y.E, { variant: "text-md/medium", color: d, children: s() }),
                    (0, m.jsx)(Y.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var ig = n(545744);
function im(e) {
    let { onBackClick: t } = e,
        n = (0, E.bG)([ii.A], () => ii.A.getAllUnlockedAchievements()),
        i = A.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = A.useMemo(
            () =>
                Object.values(n7.l0)
                    .filter(it.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, m.jsxs)(m.Fragment, {
        children: [
            (0, m.jsxs)(n$.D, {
                onClick: t,
                className: ig.vv,
                children: [
                    (0, m.jsx)(ie.A, { direction: ie.A.Directions.LEFT, className: ig.Kk }),
                    (0, m.jsx)(Y.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: L.intl.string(L.t["13/7kX"]),
                    }),
                ],
            }),
            (0, m.jsxs)("div", {
                className: ig.N1,
                children: [
                    (0, m.jsxs)("div", {
                        className: ig.if,
                        children: [
                            (0, m.jsx)(T.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: L.intl.string(L.t["6jI0hd"]),
                            }),
                            (0, m.jsx)(Y.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: L.intl.string(L.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, m.jsx)("div", {
                        className: ig.nr,
                        children: (0, m.jsx)(n0.TrophyIcon, {
                            size: "custom",
                            color: nq.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, m.jsx)("div", {
                    className: ig.yF,
                    children: (0, m.jsx)("div", {
                        className: ig.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, m.jsx)(ic, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, m.jsxs)("div", {
                    className: ig.yF,
                    children: [
                        (0, m.jsx)("div", {
                            className: ig.if,
                            children: (0, m.jsx)(Y.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: L.intl.string(L.t.GFyMg1),
                            }),
                        }),
                        (0, m.jsx)("div", {
                            className: ig.Eh,
                            children: l.map((e) => (0, m.jsx)(ic, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, m.jsx)("div", { className: ig.yF, children: (0, m.jsx)("div", { className: ig.F3 }) }),
        ],
    });
}
var iA = n(224964),
    iE = n(31408),
    ih = n(368588);
let iS = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iT = (0, w.range)(0, 11),
    ip = (0, w.range)(0, 2.25, 0.25),
    ix = (0, w.range)(1, 11),
    iI = (0, w.range)(1, 26),
    iN = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function i_(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, m.jsx)(
                tQ.d,
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
    return (0, m.jsx)(nJ.n, { label: L.intl.string(L.t.bWVN1D), children: s });
}
function iC(e) {
    let { children: t } = e;
    return (0, m.jsx)(Y.E, { className: ih.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function ib(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        l = (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion);
    return (0, m.jsx)(tQ.d, {
        label: L.intl.string(L.t.vuiXm9),
        description: L.intl.string(L.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, n8._)(n7.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, nQ.A)({
                          title: l ? L.intl.string(L.t["FxT+p0"]) : L.intl.string(L.t.TAZ4F9),
                          subtitle: l ? L.intl.string(L.t.gmixrx) : L.intl.string(L.t.jN3t3K),
                          confirmText: L.intl.string(L.t.JFfins),
                          onConfirm: () => i(l ? iS : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e }));
        },
    });
}
function iy(e) {
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
    return (0, m.jsxs)(nJ.n, {
        label: L.intl.string(L.t.mqxwJO),
        children: [
            (0, m.jsx)(tQ.d, {
                label: L.intl.string(L.t.s0KCgF),
                description: L.intl.string(L.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, m.jsxs)("div", {
                children: [
                    (0, m.jsx)(Y.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ih.KF,
                        children: L.intl.string(L.t.vd0D81),
                    }),
                    (0, m.jsx)(iC, { children: L.intl.string(L.t.a18Sug) }),
                    (0, m.jsx)(X.A, {
                        disabled: a,
                        markers: ix,
                        stickToMarkers: !0,
                        minValue: ix[0],
                        maxValue: ix[ix.length - 1],
                        initialValue: i,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, m.jsxs)("div", {
                children: [
                    (0, m.jsx)(Y.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ih.KF,
                        children: L.intl.string(L.t.sPO3ij),
                    }),
                    (0, m.jsx)(iC, { children: L.intl.string(L.t.xoldVn) }),
                    (0, m.jsx)(X.A, {
                        disabled: a,
                        markers: iI,
                        stickToMarkers: !0,
                        minValue: iI[0],
                        maxValue: iI[iI.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, m.jsx)(i_, {
                disabled: a,
                locations: [
                    {
                        location: iE.k.CHAT_INPUT,
                        title: L.intl.string(L.t.elTtyz),
                        description: L.intl.string(L.t.HtKfMi),
                    },
                    {
                        location: iE.k.REACTION,
                        title: L.intl.string(L.t.Ik4VIa),
                        description: L.intl.string(L.t.y4rqK0),
                    },
                    {
                        location: iE.k.MEMBER_USER,
                        title: L.intl.string(L.t.ZXBlAn),
                        description: L.intl.string(L.t["m9RD+c"]),
                    },
                    {
                        location: iE.k.CALL_TILE,
                        title: L.intl.string(L.t.V66giQ),
                        description: L.intl.string(L.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function iv(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        r = !t || !n;
    return (0, m.jsxs)(nJ.n, {
        label: L.intl.string(L.t.Xz0ole),
        children: [
            (0, m.jsx)(tQ.d, {
                label: L.intl.string(L.t.o3iV7B),
                description: L.intl.string(L.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, m.jsx)(tQ.d, {
                label: L.intl.string(L.t["Ax+IoW"]),
                description: L.intl.string(L.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, m.jsxs)("div", {
                children: [
                    (0, m.jsx)(Y.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: ih.KF,
                        children: L.intl.string(L.t.L0oQuh),
                    }),
                    (0, m.jsx)(iC, { children: L.intl.string(L.t["/OOFpL"]) }),
                    (0, m.jsx)(X.A, {
                        disabled: r,
                        markers: iT,
                        stickToMarkers: !0,
                        minValue: iT[0],
                        maxValue: iT[iT.length - 1],
                        initialValue: l,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function ij(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        r = (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, m.jsxs)(nJ.n, {
        label: L.intl.string(L.t.wVS5Sd),
        children: [
            (0, m.jsx)(tQ.d, {
                label: L.intl.string(L.t.N004zO),
                description: r ? L.intl.string(L.t.GckHGw) : L.intl.string(L.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, m.jsxs)("div", {
                children: [
                    (0, m.jsx)(Y.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ih.KF,
                        children: L.intl.string(L.t.UxnnC4),
                    }),
                    (0, m.jsx)(iC, { children: L.intl.string(L.t.CEOEOb) }),
                    (0, m.jsx)(X.A, {
                        disabled: a,
                        markers: ip,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: ip[0],
                        maxValue: ip[ip.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, n8._)(n7.sn.MORE),
                                s(t, 1));
                        },
                        onMarkerRender: (e) => (e === ip[ip.length - 1] ? L.intl.string(L.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, m.jsx)(i_, {
                disabled: a,
                locations: [
                    {
                        location: iE.uD.CHAT_INPUT,
                        title: L.intl.string(L.t.vUcvPP),
                        description: L.intl.string(L.t.y00OrF),
                    },
                    {
                        location: iE.uD.VOICE_USER,
                        title: L.intl.string(L.t.TcRO54),
                        description: L.intl.string(L.t.YJCxVY),
                    },
                    {
                        location: iE.uD.MENTION,
                        title: L.intl.string(L.t.oW4shO),
                        description: L.intl.string(L.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function iO(e) {
    let { updateSettings: t } = e;
    return (0, m.jsx)(nJ.n, {
        label: L.intl.string(L.t.EuXv2q),
        children: (0, m.jsxs)(z.B, {
            gap: 16,
            children: [
                (0, m.jsx)("div", { children: L.intl.string(L.t["1SLnki"]) }),
                (0, m.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: ih.hw,
                    children: (0, m.jsx)(I.$, {
                        variant: "primary",
                        size: "sm",
                        text: L.intl.string(L.t.qz65yY),
                        onClick: function () {
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tM.default)());
                        },
                    }),
                }),
            ],
        }),
    });
}
function iL(e) {
    let { onChangePage: t } = e;
    return (0, m.jsxs)(n$.D, {
        onClick: function () {
            return t(1);
        },
        className: ih.Tq,
        children: [
            (0, m.jsx)("div", {
                className: ih.w1,
                children: (0, m.jsx)(n0.TrophyIcon, { size: "md", color: nq.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, m.jsxs)("div", {
                className: ih.qL,
                children: [
                    (0, m.jsx)(T.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: L.intl.string(L.t["6jI0hd"]),
                    }),
                    (0, m.jsx)(Y.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: L.intl.string(L.t.GuUItX),
                    }),
                ],
            }),
            (0, m.jsx)(n1._, { size: "custom", color: "currentColor", width: 16, className: ih.nT }),
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
function iR(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, E.cf)([nZ.A], () => nZ.A.getState()),
        [l, s] = A.useState({ x: 0, y: 0 }),
        r = (0, iA.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, n6.Ak)("poggermode_enabled"),
                (0, n4.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, n9.O9)(e),
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
        1 === t && E && (0, n4.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        s({ x: e.clientX, y: e.clientY });
    }
    return (
        A.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, m.jsxs)(z.B, {
            gap: 24,
            children: [
                (0, m.jsx)(ib, { settings: i, updateSettings: a }),
                (0, m.jsx)(iL, { onChangePage: t }),
                (0, m.jsx)(iv, { settings: i, updateSettings: a }),
                (0, m.jsx)(ij, { settings: i, updateSettings: a }),
                (0, m.jsx)(iy, { settings: i, updateSettings: a }),
                (0, m.jsx)(iO, { updateSettings: a }),
            ],
        })
    );
}
function iP(e) {
    return 0 === e ? n3.f.LEFT : n3.f.RIGHT;
}
let iG = (0, u.E2)(d.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = A.useState(0),
                [n, i] = A.useState(iP(e)),
                [l, s] = A.useState(!1),
                r = (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion),
                a = l && !r;
            return (
                A.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iP(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                A.useEffect(() => {
                    (0, n5._)(iN[e]);
                }, [e]),
                A.useEffect(() => {
                    Math.random() > 0.99 && (0, n8._)(n7.sn.VISITOR_100);
                }, []),
                (0, m.jsxs)(m.Fragment, {
                    children: [
                        (0, m.jsx)(n3.A, {
                            className: ih.l3,
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
                                        return (0, m.jsx)(iR, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, m.jsx)(im, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, m.jsx)("div", {
                            className: a ? ih.Sr : ih.IP,
                            children: (0, m.jsx)(n2.a, {
                                className: ih.gT,
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
            L.intl.string(L.t.AtCukI),
            L.intl.string(L.t.mqxwJO),
            L.intl.string(L.t.wVS5Sd),
            L.intl.string(L.t.Xz0ole),
            L.intl.string(L.t["Ax+IoW"]),
            L.intl.string(L.t["6jI0hd"]),
            L.intl.string(L.t.s0KCgF),
        ],
    }),
    iM = (0, u.zZ)(d.X.POGGERMODE_CATEGORY, { buildLayout: () => [iG] });
var iU = n(212043);
let iV = (0, u.t_)(d.X.POGGERMODE_PANEL, { useTitle: () => L.intl.string(L.t.AtCukI), buildLayout: () => [iM] }),
    ik = (0, u.i4)(d.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.AtCukI),
        icon: () => (0, m.jsx)("img", { alt: "", src: n(724405), className: iU.$ }),
        usePredicate: () => (0, E.bG)([nZ.A], () => nZ.A.settingsVisible),
        buildLayout: () => [iV],
    });
var iw = n(307301),
    iF = n(410767),
    iB = n(683071),
    iz = n(97260),
    iX = n(695366),
    iY = n(812729),
    iH = n.n(iY),
    iK = n(587895),
    iW = n(429913),
    iZ = n(616356),
    iq = n(952818);
function iQ(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function iJ() {
    let e = (0, E.bG)([iZ.A], () => iZ.A.getStreamerActiveStreamMetadata()),
        t = (0, E.bG)(
            [iq.Ay],
            () => {
                let e = iq.Ay.getVisibleGame();
                return null != e ? iq.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            iH(),
        ),
        [n] = (0, iW.A)([iQ(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i$ = n(769015),
    i0 = n(544576),
    i1 = n(935671),
    i2 = n(435075);
function i3(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, m.jsx)("div", {
              className: i2.zc,
              children: (0, m.jsx)(iX.E, { size: "sm", color: nq.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, m.jsxs)("div", {
              className: i2.nt,
              children: [
                  (0, m.jsx)(i$.A, { game: n, pid: t.pid, size: i$.M.MEDIUM }),
                  (0, m.jsx)("div", {
                      className: i2.Am,
                      children: (0, m.jsx)(iX.E, { size: "sm", color: nq.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function i6(e) {
    let t = (0, E.bG)([i0.Ay], () => i0.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = iJ();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, i1.NP)(),
        s = l && null != n && t === h.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function i5(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = i6(n);
    return i
        ? (0, m.jsxs)("div", {
              className: is()(i2.kL, t),
              children: [
                  (0, m.jsx)(i3, { game: l, application: s }),
                  (0, m.jsxs)("div", {
                      className: i2.FS,
                      children: [
                          (0, m.jsx)(Y.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? L.intl.string(L.t.vxfv7v)
                                      : null != l
                                        ? L.intl.string(L.t.fAYU2G)
                                        : L.intl.string(L.t["9V4X/c"]),
                          }),
                          (0, m.jsx)(Y.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: L.intl.format(L.t["/y6htt"], {
                                  helpCenterLink: ep.A.getArticleURL(h.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, m.jsx)(I.$, {
                      variant: "secondary",
                      size: "sm",
                      text: L.intl.string(L.t["1iI46O"]),
                      onClick: function () {
                          (0, i1.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var i4 = n(404778),
    i8 = n(691885),
    i7 = n(408278),
    i9 = n(241326),
    le = n(866665),
    lt = n(140735),
    ln = n(489718),
    li = n(635242),
    ll = n(350535),
    ls = n(189213),
    lr = n(192308),
    la = n(95477),
    lo = n(320989),
    lu = n(978263);
let ld = [];
var lc = n(235986),
    lg = n(484734),
    lm = n(734057),
    lA = n(808728),
    lE = n(71393),
    lh = n(967198),
    lS = n(926140),
    lT = n(847893);
function lp() {}
let lx = [lS.rD.VOICE_CHANNEL];
function lf(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function lI() {
    return (0, m.jsx)("div", {
        className: lT.i1,
        children: (0, m.jsx)(Y.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lT.GN,
            children: L.intl.string(L.t.zHjCd1),
        }),
    });
}
function lN(e) {
    let { keybind: t, className: n } = e,
        i = A.useRef(t);
    A.useEffect(() => {
        i.current = t;
    });
    let [l, s] = A.useState(t.params?.channelId ?? void 0),
        r = A.useCallback(() => {
            (0, lr.openModalLazy)(
                async () => (e) =>
                    (0, m.jsx)(l_, {
                        ...e,
                        onSelect: (e) => {
                            (s(e), iz.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, m.jsx)("div", {
        className: is()(lT.a8, n),
        children: (0, m.jsx)(tq.D, {
            label: L.intl.string(L.t.q4JpM8),
            children: (0, m.jsxs)(lc.A, {
                align: lc.A.Align.STRETCH,
                children: [
                    (0, m.jsx)("div", { className: lT.$X, children: (0, m.jsx)(lC, { channelId: l }) }),
                    (0, m.jsx)(lc.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, m.jsx)(I.$, { variant: "primary", text: L.intl.string(L.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function l_(e) {
    let t,
        n,
        { transitionState: i, onClose: l, onSelect: s } = e,
        r = A.useId(),
        a = A.useRef(null),
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
                [s, r] = A.useState(""),
                [a, o] = A.useState(ld),
                u = A.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(ld) : o(e);
                }, []);
            A.useEffect(
                () =>
                    lo.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = A.useState(() => new lu.A(u, n, void 0, i));
            return (
                A.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: A.useCallback(
                        (e) => {
                            (r(e), d.search(e));
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lx, autocompleterBeforeCreateSearchContext: lf }),
        c =
            ((t = "" !== o),
            (n = (0, E.yK)(
                [lA.Ay, lm.A, lh.A],
                () => {
                    let e = lh.A.getGuildId();
                    if (t || null == e) return [];
                    let n = [];
                    for (let t of lA.Ay.getVocalChannelIds(e)) {
                        let e = lm.A.getChannel(t);
                        null != e && n.push(e);
                    }
                    return n;
                },
                [t],
            )),
            t ? null : n),
        { focusedIndex: g, setFocusedIndex: h } = (function (e) {
            let [t, n] = A.useState(0),
                i = A.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                A.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    A.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let S = null != c ? c.length : d.length,
        T = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === lS.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        p =
            S > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: L.intl.string(L.t["+N3fW7"]),
                      ref: a,
                      sections: [S],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === lS.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? lm.A.getChannel(n.parent_id) : void 0,
                              r = lE.A.getGuild(n.guild_id);
                          return (0, m.jsx)(
                              lg.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: i,
                                  focused: g === t,
                                  onMouseEnter: () => h(t),
                                  onClick: () => {
                                      (s(n.id), l());
                                  },
                                  onFocus: () => h(t),
                                  children:
                                      null != r ? (0, m.jsx)("div", { className: lT.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, m.jsx)(lI, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, m.jsx)(ls.Modal, {
        transitionState: i,
        onClose: l,
        title: L.intl.string(L.t.Dm8O4e),
        subtitle: L.intl.string(L.t.q4JpM8),
        actions: void 0,
        input: (0, m.jsx)(la.k, {
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
                                if (e?.type === lS.rD.VOICE_CHANNEL) return e.record;
                            })();
                            (null == e ? s(void 0) : s(e.id), l());
                            break;
                        }
                        case "arrowup":
                            0 === g ? h(S - 1) : h(g - 1);
                            break;
                        case "arrowdown":
                            g >= S - 1 ? h(0) : h(g + 1);
                    }
            },
            placeholder: L.intl.string(L.t.tG0r7g),
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
function lC(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, E.cf)([lm.A, lE.A], () => {
            let e = null != t ? lm.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lm.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? lE.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, m.jsx)(Y.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lT.GN,
              children: L.intl.string(L.t["/fYIK7"]),
          })
        : (0, m.jsx)(lg.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lp,
              onFocus: lp,
              onMouseEnter: lp,
              focused: !1,
              children: null != l ? (0, m.jsx)("div", { className: lT.J5, children: l.name }) : null,
          });
}
var lb = n(650583),
    ly = n(94451);
function lv(e) {
    let { keybind: t } = e,
        n = ll.dI(t.shortcut);
    return eZ.A.hasBind(n)
        ? (0, m.jsx)("div", {
              className: ly.$e,
              children: (0, m.jsx)(iB.w, { type: "warning", children: L.intl.string(L.t["7lQlw3"]) }),
          })
        : lb.Yy.has(n)
          ? (0, m.jsx)("div", {
                className: ly.$e,
                children: (0, m.jsx)(iB.w, {
                    type: "warning",
                    children: L.intl.format(L.t.MOIaNd, {
                        keyboardNavArticle: ep.A.getArticleURL(h.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function lj(e) {
    let { keybind: t } = e;
    return t.action === h.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, m.jsx)(lN, { keybind: t, className: ly._M }) : null;
}
let lO = A.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        l = A.useCallback((e) => iz.A.setKeybind({ ...t, action: e }), [t]),
        s = A.useCallback((e) => iz.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = A.useCallback(() => iz.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = A.useCallback(() => iz.A.deleteKeybind(t.id), [t.id]),
        o = A.useId(),
        u = A.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, m.jsxs)("div", {
        className: ly.f_,
        children: [
            (0, m.jsx)(lv, { keybind: t }),
            (0, m.jsx)("div", {
                className: ly.XI,
                children: (0, m.jsx)(i8.l, {
                    selectionMode: "single",
                    label: L.intl.string(L.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, m.jsx)("div", {
                className: ly.LE,
                children: (0, m.jsx)(tq.D, {
                    label: L.intl.string(L.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, m.jsx)(li.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, m.jsxs)("div", {
                className: ly.ne,
                children: [
                    !t.managed &&
                        (0, m.jsx)(i7.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: i9.TrashIcon,
                            "aria-label": L.intl.string(L.t.qEHmmB),
                        }),
                    (0, m.jsx)(le.m, {
                        text: L.intl.string(t.enabled ? L.t.pNYGbx : L.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, m.jsxs)("div", {
                            children: [
                                (0, m.jsx)(lt.A, {
                                    id: o,
                                    children: L.intl.format(t.enabled ? L.t["myr/Y0"] : L.t.lYhtPO, { actionName: u }),
                                }),
                                (0, m.jsx)(ln.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, m.jsx)(Y.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ly.h_,
                children: n[t.action],
            }),
            (0, m.jsx)(lj, { keybind: t }),
        ],
    });
});
var lL = n(696760),
    lD = n(734066),
    lR = n(880144),
    lP = n(614455),
    lG = n(532624),
    lM = n(731854),
    lU = n(603933);
let lV = function () {
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
            } = ((e = (0, E.bG)([lG.Ay], () => lG.Ay.getState())),
            (t = (0, E.bG)([i0.Ay], () => (0, lR.A)(i0.Ay))),
            (n = (0, E.bG)([i0.Ay], () => i0.Ay.supports(lM.O5.VIDEO))),
            (i = (0, E.bG)([lP.A], () => lP.A.isSupported)),
            (l = (0, lD.sw)()),
            (s = (0, lD.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: l } = e;
                    return F()(t)
                        .reject(
                            (e) =>
                                e.managed &&
                                ![
                                    h.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                    h.hCu.SAVE_CLIP,
                                    h.hCu.SAVE_SCREENSHOT,
                                ].includes(e.action),
                        )
                        .reject((e) => !n && (e.action === h.hCu.SAVE_CLIP || e.action === h.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !i && e.action === h.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !l && (e.action === h.hCu.SOUNDBOARD || e.action === h.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: l,
                    enableScreenshotKeybind: s,
                    allowSoundboard: (r = (0, eq.isWindows)()),
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
                            { id: "unassigned", value: h.hCu.UNASSIGNED, label: L.intl.string(L.t["0Uh579"]) },
                            { id: "push-to-talk", value: h.hCu.PUSH_TO_TALK, label: L.intl.string(L.t.Y5lgTP) },
                            {
                                id: "push-to-talk-priority",
                                value: h.hCu.PUSH_TO_TALK_PRIORITY,
                                label: L.intl.string(L.t.DkSwJ2),
                            },
                            { id: "push-to-mute", value: h.hCu.PUSH_TO_MUTE, label: L.intl.string(L.t.hSCRqd) },
                            { id: "vad-priority", value: h.hCu.VAD_PRIORITY, label: L.intl.string(L.t["49d6Nd"]) },
                            { id: "toggle-mute", value: h.hCu.TOGGLE_MUTE, label: L.intl.string(L.t.PlkYKD) },
                            { id: "toggle-deafen", value: h.hCu.TOGGLE_DEAFEN, label: L.intl.string(L.t.NvGq1K) },
                            {
                                id: "toggle-voice-mode",
                                value: h.hCu.TOGGLE_VOICE_MODE,
                                label: L.intl.string(L.t.Wa5H9S),
                            },
                            {
                                id: "toggle-streamer-mode",
                                value: h.hCu.TOGGLE_STREAMER_MODE,
                                label: L.intl.string(L.t.BK0Ncc),
                            },
                            {
                                id: "toggle-voice-channel-chat",
                                value: h.hCu.TOGGLE_VOICE_CHANNEL_CHAT,
                                label: L.intl.string(L.t.YeqEjm),
                            },
                        ];
                    return (
                        i &&
                            a.push({
                                id: "toggle-camera",
                                value: h.hCu.TOGGLE_CAMERA,
                                label: L.intl.string(L.t.hf8JVT),
                            }),
                        t &&
                            (a.push({
                                id: "toggle-overlay-input-lock",
                                value: h.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                                label: L.intl.string(L.t.VsAZcC),
                            }),
                            a.push({
                                id: "activate-overlay-region-text-widget",
                                value: h.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                label: L.intl.string(L.t.hurHWo),
                            })),
                        n &&
                            ((0, eq.isWindows)() || i0.Ay.getUseSystemScreensharePicker()) &&
                            a.push({
                                id: "toggle-go-live-streaming",
                                value: h.hCu.TOGGLE_GO_LIVE_STREAMING,
                                label: L.intl.string(L.t.ybdjJD),
                            }),
                        (0, eq.isDesktop)() &&
                            (a.push(
                                { id: "navigate-back", value: h.hCu.NAVIGATE_BACK, label: L.intl.string(L.t.gRSaOa) },
                                {
                                    id: "navigate-forward",
                                    value: h.hCu.NAVIGATE_FORWARD,
                                    label: L.intl.string(L.t.zOXpjU),
                                },
                                {
                                    id: "switch-to-voice-channel",
                                    value: h.hCu.SWITCH_TO_VOICE_CHANNEL,
                                    label: L.intl.string(L.t.ty7Lxy),
                                },
                                {
                                    id: "disconnect-from-voice-channel",
                                    value: h.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                                    label: L.intl.string(L.t.CV7mT7),
                                },
                            ),
                            l &&
                                a.push(
                                    { id: "soundboard", value: h.hCu.SOUNDBOARD, label: L.intl.string(L.t.yPH4xm) },
                                    {
                                        id: "soundboard-hold",
                                        value: h.hCu.SOUNDBOARD_HOLD,
                                        label: L.intl.string(L.t["1xFbP/"]),
                                    },
                                ),
                            s &&
                                (a.push({ id: "save-clip", value: h.hCu.SAVE_CLIP, label: L.intl.string(L.t.U4URzP) }),
                                r &&
                                    a.push({
                                        id: "save-screenshot",
                                        value: h.hCu.SAVE_SCREENSHOT,
                                        label: L.intl.string(L.t["+WloFH"]),
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
                            [h.hCu.UNASSIGNED]: L.intl.string(L.t.rvlNLv),
                            [h.hCu.PUSH_TO_MUTE]: L.intl.string(L.t.xtESim),
                            [h.hCu.PUSH_TO_TALK]: L.intl.string(L.t.wTcBSy),
                            [h.hCu.PUSH_TO_TALK_PRIORITY]: L.intl.string(L.t.FhHvWH),
                            [h.hCu.TOGGLE_MUTE]: L.intl.string(L.t.X2fbUm),
                            [h.hCu.TOGGLE_DEAFEN]: L.intl.string(L.t.MjREZV),
                            [h.hCu.TOGGLE_VOICE_MODE]: L.intl.string(L.t.snm5YW),
                            [h.hCu.TOGGLE_STREAMER_MODE]: L.intl.string(L.t.YszLLx),
                            [h.hCu.VAD_PRIORITY]: L.intl.string(L.t.rSe8IZ),
                            [h.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: L.intl.string(L.t.desfB4),
                        };
                    return (
                        i && (r[h.hCu.TOGGLE_CAMERA] = L.intl.string(L.t.v1JBtL)),
                        t && (r[h.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = L.intl.string(L.t.IoP5vc)),
                        n && (0, eq.isWindows)() && (r[h.hCu.TOGGLE_GO_LIVE_STREAMING] = L.intl.string(L.t.s4C238)),
                        (0, eq.isDesktop)() &&
                            ((r[h.hCu.NAVIGATE_BACK] = L.intl.string(L.t.nKDlEt)),
                            (r[h.hCu.NAVIGATE_FORWARD] = L.intl.string(L.t.DK0FFk)),
                            (r[h.hCu.SOUNDBOARD] = (0, eq.isWindows)()
                                ? L.intl.string(L.t["5wJefL"])
                                : L.intl.string(L.t.gzjsSP)),
                            (r[h.hCu.SOUNDBOARD_HOLD] = (0, eq.isWindows)()
                                ? L.intl.string(L.t.RRkZc9)
                                : L.intl.string(L.t.laNlTl)),
                            l &&
                                ((r[h.hCu.SAVE_CLIP] = L.intl.string(L.t.z3Wbam)),
                                s && (r[h.hCu.SAVE_SCREENSHOT] = L.intl.string(L.t.m0zd57)))),
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
            ? (0, m.jsx)(Y.E, { variant: "text-sm/normal", color: "text-subtle", children: L.intl.string(L.t.vyYgWp) })
            : (0, m.jsx)("div", {
                  className: lU.A,
                  children: a.map((e, t) =>
                      (0, m.jsxs)(
                          A.Fragment,
                          {
                              children: [
                                  (0, m.jsx)(lO, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                  t < a.length - 1 ? (0, m.jsx)(i4.c, { className: lU.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    lk = (0, u.E2)(d.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [L.intl.string(L.t["069nVT"])],
        Component: function () {
            return ng.Av
                ? (0, m.jsx)(lV, {})
                : (0, m.jsx)(iB.w, {
                      type: "info",
                      children: L.intl.format(L.t.mPi3F3, { downloadLink: h.X7G.DOWNLOAD }),
                  });
        },
    });
var lw = n(475358),
    lF = n(28647),
    lB = n(793650);
function lz(e) {
    let { children: t } = e;
    return t([lL.Q_.MESSAGE, lL.Q_.NAVIGATION, lL.Q_.DND, lL.Q_.CHAT, lL.Q_.VOICE_AND_VIDEO, lL.Q_.MISCELLANEOUS]);
}
function lX(e) {
    let { showHeader: t = !0 } = e,
        n = F()((0, lL.Bx)())
            .filter((e) => e.description !== L.intl.string(L.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, m.jsxs)(z.B, {
        gap: 48,
        children: [
            (0, m.jsx)(nJ.n, {
                label: t ? L.intl.string(L.t.Lz5KHI) : void 0,
                children: (0, m.jsx)("div", {
                    className: lB.jh,
                    children: (0, m.jsxs)("div", {
                        className: lB.yZ,
                        children: [
                            (0, m.jsx)(Y.E, { variant: "text-md/normal", children: L.intl.string(L.t.sMWLBj) }),
                            (0, m.jsx)("div", {
                                className: lB.DM,
                                children: (0, m.jsx)(lw.e, { shortcut: lF.z.binds["0"], className: lB.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, m.jsx)(lz, {
                children: (e) =>
                    (0, m.jsx)(m.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, lL.Gm)(e),
                                l = (0, lL.zF)(e),
                                s = n[e];
                            return (0, m.jsx)(
                                nJ.n,
                                {
                                    label: i,
                                    description: l,
                                    children: (0, m.jsx)("div", {
                                        className: lB.jh,
                                        children: s.map((e, t) =>
                                            (0, m.jsxs)(
                                                A.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, m.jsx)(i4.c, {}),
                                                        (0, m.jsxs)("div", {
                                                            className: lB.yZ,
                                                            children: [
                                                                (0, m.jsx)(Y.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, m.jsx)("div", {
                                                                    className: lB.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, m.jsx)(
                                                                            lw.e,
                                                                            { shortcut: e, className: lB.LE },
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
let lY = (0, u.E2)(d.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [L.intl.string(L.t.Lz5KHI)],
    Component: () => (0, m.jsx)(lX, { showHeader: !1 }),
});
var lH = n(19575),
    lK = n(546385);
let lW = (0, u.E2)(d.X.HARDWARE_ACCELERATION, {
    usePredicate: () => ng.Av && !(0, ng.cX)(),
    useSearchTerms: () => [L.intl.string(L.t["/HIxyY"]), L.intl.string(L.t.B0hqpb)],
    Component: function () {
        let [e] = A.useState(() => lH.Ay.getEnableHardwareAcceleration()),
            t = L.intl.string(L.t["/HIxyY"]),
            n = L.intl.string(L.t.B0hqpb);
        return (0, m.jsxs)(z.B, {
            children: [
                (0, m.jsx)(tQ.d, { label: t, description: n, checked: e, onChange: lZ }),
                !e && (0, m.jsx)(lK.A, { look: lK.k.WARNING, children: L.intl.string(L.t.j7S6IX) }),
            ],
        });
    },
});
function lZ(e) {
    let t = e ? L.intl.format(L.t.LYXRxL, {}) : L.intl.format(L.t.uDP3Kz, {});
    (0, nQ.A)({
        title: L.intl.string(L.t.aqpAvn),
        subtitle: t,
        confirmText: L.intl.string(L.t.vT7ckk),
        onConfirm: () => {
            lH.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let lq = (0, eS.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function lQ() {
    let e = await lH.Ay.getOpenOnStart(),
        t = await lH.Ay.getSetting("START_MINIMIZED", !1),
        n = await lH.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    lq.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let lJ = (0, u.zD)(d.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => L.intl.string(L.t["3BeZti"]),
        usePredicate: () => ng.Av && !(0, ng.cX)(),
        useValue: () => lq.useState((e) => e.openOnStartup),
        setValue: function (e) {
            (lq.setState({ openOnStartup: e }), lH.Ay.send("TOGGLE_OPEN_ON_STARTUP", e));
        },
        initialize: () => {
            lH.Ay.getOpenOnStart().then((e) => lq.setState({ openOnStartup: e }));
        },
    }),
    l$ = (0, u.zD)(d.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => L.intl.string(L.t.dJ5MUh),
        useSubtitle: () => L.intl.string(L.t.nQavHr),
        usePredicate: () => ng.Av && !(0, ng.cX)(),
        useValue: () => lq.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            (lq.setState({ minimizeToTray: e }), lH.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e));
        },
        initialize: () => {
            lH.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => lq.setState({ minimizeToTray: e }));
        },
    }),
    l0 = (0, u.zD)(d.X.OS_START_MINIMIZED, {
        useTitle: () => L.intl.string(L.t.GfBL83),
        useSubtitle: () => L.intl.string(L.t.XGyhhc),
        usePredicate: () => (0, ng.uF)(),
        useValue: () => lq.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            (lq.setState({ startMinimized: e }), lH.Ay.send("TOGGLE_START_MINIMIZED", e));
        },
        useDisabled: () => !lq.useState((e) => e.openOnStartup),
        initialize: () => {
            lH.Ay.getSetting("START_MINIMIZED", !1).then((e) => lq.setState({ startMinimized: e }));
        },
    });
var l1 = n(61628);
let l2 = new Set(["failure", "unknown"]),
    l3 = (0, u.E2)(d.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [L.intl.string(L.t.roHq80)],
        Component: function () {
            let [e, t] = A.useState(!1),
                [n, i] = A.useState(() => (0, i1.TC)()),
                l = (0, E.bG)([iq.Ay], () => iq.Ay.getSystemServiceStatus("input-service")),
                s = A.useCallback(async () => {
                    (t(!0),
                        n ? await (0, i1.z8)("windows-settings") : await (0, i1.sL)("windows-settings"),
                        t(!1),
                        i((0, i1.TC)()));
                }, [n]);
            return (0, m.jsxs)("div", {
                className: l1.q,
                children: [
                    (0, m.jsxs)("div", {
                        className: l1.L,
                        children: [
                            (0, m.jsxs)(z.B, {
                                direction: "horizontal",
                                children: [
                                    (0, m.jsx)(Y.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: L.intl.string(L.t.roHq80),
                                    }),
                                    n &&
                                        (0, m.jsxs)(m.Fragment, {
                                            children: [
                                                (0, m.jsx)(Y.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, m.jsx)(Y.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : l2.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: (function (e) {
                                                        switch (e.state) {
                                                            case "unknown":
                                                                return L.intl.string(L.t["KW+nqT"]);
                                                            case "disabled":
                                                                return L.intl.string(L.t["Q/wAF7"]);
                                                            case "disconnected":
                                                                return L.intl.string(L.t.Xvs9IM);
                                                            case "initializing":
                                                                return L.intl.string(L.t.h4qz8W);
                                                            case "connecting":
                                                                return L.intl.string(L.t.fSu9XF);
                                                            case "handshaking":
                                                                return L.intl.string(L.t["00aYLJ"]);
                                                            case "running":
                                                                return L.intl.string(L.t["54TB7Z"]);
                                                            case "waiting-for-retry":
                                                                return L.intl.string(L.t["0FONwi"]);
                                                            case "failure":
                                                                return L.intl.string(L.t.Ic0nkd);
                                                            default:
                                                                (0, it.xb)(e.state);
                                                        }
                                                    })(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, m.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: L.intl.format(L.t["8CAL+D"], {
                                    helpCenterLink: ep.A.getArticleURL(h.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, m.jsx)(I.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: s,
                        text: n ? L.intl.string(L.t.pAwbdL) : L.intl.string(L.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: i1.XQ,
    });
var l6 = n(687813),
    l5 = n(562708),
    l4 = n(691540),
    l8 = n(97483);
async function l7() {
    try {
        await l9();
    } catch {
        (0, l4.P0)({ id: "performance-trace-failed", type: l8.Ck.FAILURE, message: L.intl.string(L.t["8ihs9i"]) });
    }
}
async function l9() {
    var e;
    let t = nE.A.tracing;
    if (null == t) return;
    (0, l4.P0)({ id: "performance-trace-capturing", type: l8.Ck.MESSAGE, message: L.intl.string(L.t.qGRW8d) });
    let [n, i, l] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nE.A.processUtils.getSystemInfo(),
            nE.A.processUtils.getSystemMetrics(),
        ]),
        s = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, l5.getSuperProperties)(),
            native_build_number: nE.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: l,
            cumulativeCpuUsage: nE.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nE.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, l6._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, l6._u)(JSON.stringify(s, null, 2)),
        }),
        new Promise((t, n) => {
            (0, l6.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    (nE.A.fileManager.showItemInFolder(u),
        (0, l4.P0)({ id: "performance-trace-saved", type: l8.Ck.SUCCESS, message: L.intl.string(L.t.gpCRFS) }));
}
let se = (0, u.Tf)(d.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => L.intl.string(L.t.o6Qr6n),
    useSubtitle: () => L.intl.string(L.t.OuGtH8),
    useLabel: () => L.intl.string(L.t.bm1WjO),
    usePredicate: () => ng.Av && nE.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, nQ.A)({
            title: L.intl.string(L.t.o6Qr6n),
            subtitle: L.intl.string(L.t.JEHHJ1),
            confirmText: L.intl.string(L.t.bm1WjO),
            onConfirm: () => {
                ((0, tM.default)(), l7());
            },
        });
    },
});
function st() {
    e6.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var sn = n(287809);
let si = (0, u.Tf)(d.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        st();
    },
});
var sl = n(114129),
    ss = n(442325),
    sr = n(858760);
let sa = (0, u.zD)(d.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: g.Xi.BETA }),
        usePredicate: () => sr.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, ng.xl)(),
        useValue: () => (0, E.bG)([ss.A], () => ss.A.isUserOptedIn()),
        setValue: sl.lj,
    }),
    so = (0, u.zZ)(d.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => L.intl.string(L.t["8/udY0"]),
        buildLayout: () => [si, se, sa],
    }),
    su = (0, u.zZ)(d.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => L.intl.string(L.t.cg6ltt),
        buildLayout: () => [lJ, l0, l$, lW],
        usePredicate: () => ng.Av && ((0, ng.uF)() || (0, ng.j9)()),
        initialize: () => {
            lQ();
        },
    }),
    sd = (0, u.zZ)(d.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => L.intl.string(L.t["069nVT"]),
        useSubtitle: () => L.intl.string(L.t.T4LZVL),
        buildLayout: () => [lk],
        initialize: () => (iz.A.enableAll(!1), () => iz.A.enableAll(!0)),
        useInlineNotice: function () {
            return ng.Av
                ? {
                      type: g.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, m.jsxs)(z.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, m.jsx)(iB.w, { type: "info", children: L.intl.string(L.t["5pkmHa"]) }),
                                  (0, m.jsx)(i5, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            ng.Av
                ? {
                      type: g.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: g.UV.BUTTON,
                              text: L.intl.string(L.t.zk6Xbs),
                              variant: "secondary",
                              icon: iw.j,
                              onClick: () => iz.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    sc = (0, u.zZ)(d.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => L.intl.string(L.t.Lz5KHI),
        buildLayout: () => [lY],
    }),
    sg = (0, u.zZ)(d.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => L.intl.string(L.t["+XZgmA"]),
        usePredicate: () => ng.Av && ((0, ng.uF)() || (0, ng.j9)()),
        buildLayout: () => [l3],
    }),
    sm = (0, u.t_)(d.X.SYSTEM_PANEL, {
        useTitle: () => L.intl.string(L.t["VJ/qKo"]),
        buildLayout: () => [su, sd, sc, sg, so],
    }),
    sA = (0, u.i4)(d.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t["VJ/qKo"]),
        icon: iF.F,
        buildLayout: () => [sm],
    });
var sE = n(831544),
    sh = n(922795),
    sS = n(212245),
    sT = n(329551),
    sp = n(285918),
    sx = n(712711),
    sf = n(952572),
    sI = n(382003);
let sN = (0, u.E2)(d.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [L.intl.string(L.t.lZTUPs)],
        usePredicate: sf.A,
        Component: function () {
            let e = (0, sS.p)(),
                t = A.useRef(!1),
                n = (0, E.bG)([i0.Ay], () => i0.Ay.getVideoDeviceId()),
                [i, l] = A.useState((0, sT.i)(sn.default.getCurrentUser())),
                s = A.useRef(i);
            return (
                A.useEffect(
                    () => () => {
                        t.current && (0, sp._C)(s.current);
                    },
                    [],
                ),
                (0, m.jsx)(sI.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        ((t.current = !0), (s.current = n), l(n), (0, sx.gB)(n, { location: e.location }).catch(h.tEg));
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    s_ = (0, u.zD)(d.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => L.intl.string(L.t["3Ppr1h"]),
        useSubtitle: () => L.intl.string(L.t.WNbX4O),
        useValue: O.bm.useSetting,
        setValue: (e) => {
            (O.bm.updateSetting(e), te.default.track(h.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e }));
        },
    });
var sC = n(625841),
    sb = n(74848),
    sy = n(204050);
let sv = (0, eS.D)(() => ({ previewEnabled: !1 })),
    sj = (0, u.E2)(d.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [L.intl.string(L.t.FsQ3OR)],
        Component: function () {
            let e = (0, E.bG)([i0.Ay], () => i0.Ay.isVideoAvailable()),
                { id: t } = (0, sb.x5)(lM.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eR.Ay)();
            return (0, m.jsx)(sC.U, {
                label: L.intl.string(L.t.FsQ3OR),
                deviceType: lM.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, sy.p)()
                    ? L.intl.format(L.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              (sv.setState({ previewEnabled: !1 }),
                                  window.open((0, sy.i)(t)),
                                  te.default.track(h.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n }));
                          },
                      })
                    : void 0,
            });
        },
    });
var sO = n(745317),
    sL = n(9219);
let sD = (0, u.E2)(d.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [L.intl.string(L.t.JIf4v7)],
        Component: function () {
            let e = i0.Ay.getCameraComponent(),
                t = (0, E.bG)([i0.Ay], () => i0.Ay.getVideoDeviceId()),
                n = sv.useField("previewEnabled"),
                i = (0, E.bG)([i0.Ay], () => i0.Ay.isVideoAvailable());
            return ((0, eh.l0)(() => {
                sv.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, m.jsx)("div", {
                      className: sL.T9,
                      children: (0, m.jsxs)("div", {
                          className: sL.Xi,
                          children: [
                              (0, m.jsxs)("div", {
                                  className: sL.UI,
                                  children: [
                                      (0, m.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, m.jsx)(sO.kE, {}),
                                  ],
                              }),
                              (0, m.jsx)(sO.eK, {}),
                          ],
                      }),
                  })
                : (0, m.jsx)("div", {
                      className: sL.T9,
                      children: (0, m.jsx)(le.m, {
                          text: i ? null : L.intl.string(L.t["8jSzSe"]),
                          children: (0, m.jsx)(I.$, {
                              variant: "primary",
                              text: L.intl.string(L.t.JIf4v7),
                              onClick: () => sv.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    sR = (0, u.zZ)(d.X.CAMERA_CATEGORY, {
        useTitle: () => L.intl.string(L.t.uje3P9),
        usePredicate: () => (0, E.bG)([i0.Ay], () => i0.Ay.supports(lM.O5.VIDEO)),
        buildLayout: () => [sD, s_, sj, sN],
    });
var sP = n(827343);
let sG = (0, u.zD)(d.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => L.intl.string(L.t.qFphsa),
        useSubtitle: () => L.intl.string(L.t.cQfwyY),
        usePredicate: function () {
            return (0, ng.j9)();
        },
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            (sP.A.setOpenH264Enabled(e),
                (0, nQ.A)({
                    title: L.intl.string(L.t["9jf31O"]),
                    subtitle: L.intl.string(L.t["J2wg+X"]),
                    confirmText: L.intl.string(L.t.BddRzS),
                    onConfirm: () => nE.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    sM = (0, u.zD)(d.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => L.intl.string(L.t["r6K+TL"]),
        useSubtitle: () => L.intl.string(L.t["xl9+I6"]),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getAecDump());
        },
        setValue: sP.A.setAecDump,
        usePredicate: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.isAecDumpSupported());
        },
    });
var sU = n(139033),
    sV = n(862482),
    sk = n(640238),
    sw = n(825484),
    sF = n(144009),
    sB = n(487329),
    sz = n(353835);
let sX = (0, eS.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function sY() {
    let e = await nE.A.fileManager.getLogPath();
    nE.A.fileManager.showItemInFolder(e);
}
function sH(e) {
    (0, nQ.A)({
        title: L.intl.string(L.t["7UXEF2"]),
        subtitle: L.intl.string(L.t.IYPrRl),
        confirmText: L.intl.string(L.t.BddRzS),
        onConfirm: () => sP.A.setDebugLogging(e),
    });
}
async function sK(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        (await i0.Ay.getMediaEngine().writeAudioDebugState(),
            await sz.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, sF.a)(h.Umv.RTC),
            (e = L.intl.string(L.t["fKBB8+"])),
            (t = L.intl.string(L.t.BvyxE7)),
            (0, sU.A)({ title: e, subtitle: t }));
    } catch (s) {
        var i;
        let e, t, n, l;
        ((i = s.displayMessage),
            (e = L.intl.string(L.t.QZg0J7)),
            (t = i ?? L.intl.string(L.t.VzHcSm)),
            (n = (0, sB.B1)(sB.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = L.intl.formatToPlainString(L.t.ejOT95, { errorCode: n })),
            (0, lr.openModal)((n) =>
                (0, m.jsx)(sk.a, {
                    header: e,
                    confirmButtonColor: sV.$n.Colors.BRAND,
                    confirmText: L.intl.string(L.t.BddRzS),
                    ...n,
                    children: (0, m.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, m.jsx)(Y.E, { variant: "text-md/normal", children: t }),
                            (0, m.jsx)(Y.E, {
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
async function sW() {
    await sK({
        onUploadStart: () => sX.setState({ isUploading: !0 }),
        onUploadFinish: () => sX.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let sZ = (0, u.E2)(d.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [L.intl.string(L.t["726JHL"]), L.intl.string(L.t.EbwFfR), L.intl.string(L.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, E.bG)([i0.Ay], () => i0.Ay.supports(lM.O5.DEBUG_LOGGING));
        return ng.Av && e && null != nE.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, E.bG)([i0.Ay], () => i0.Ay.getDebugLogging()),
            t = sX.useField("isUploading"),
            n = sX.useField("isDisabled"),
            i = A.useId();
        return (0, m.jsxs)("fieldset", {
            children: [
                (0, m.jsx)(lt.A, { tag: "legend", id: i, children: L.intl.string(L.t["FjN+et"]) }),
                (0, m.jsxs)(z.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, m.jsx)(tQ.d, {
                            label: L.intl.string(L.t["726JHL"]),
                            description: L.intl.string(L.t["/7ak9Q"]),
                            checked: e,
                            onChange: sH,
                        }),
                        (0, m.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, m.jsxs)(sw.e, {
                                children: [
                                    (0, m.jsx)(I.$, {
                                        variant: "secondary",
                                        text: L.intl.string(L.t.EbwFfR),
                                        onClick: sW,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": L.intl.string(L.t.aY1OH2),
                                    }),
                                    (0, m.jsx)(I.$, {
                                        variant: "secondary",
                                        text: L.intl.string(L.t.nuPtYi),
                                        onClick: sY,
                                        "aria-label": L.intl.string(L.t["L/hFOe"]),
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
var sq = n(233545),
    sQ = n(412780);
function sJ() {
    return (0, E.bG)([sn.default, i0.Ay], () => {
        let e = sn.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === lH.Ay.releaseChannel || "development" === lH.Ay.releaseChannel,
            i = i0.Ay.supports(lM.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let s$ = (0, u.zD)(d.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => L.intl.string(L.t.U4FgFK),
        useSubtitle: () => L.intl.string(L.t.Lm72RU),
        useValue: function () {
            return (0, E.bG)([sQ.Ay], () => sQ.Ay.shouldRecordNextConnection());
        },
        setValue: sq.Et,
        usePredicate: sJ,
    }),
    s0 = (0, u.Tf)(d.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => L.intl.string(L.t.nJnOHO),
        useLabel: () => L.intl.string(L.t["3xjX0U"]),
        onClick: sq.YW,
        usePredicate: sJ,
    });
var s1 = n(926919),
    s2 = n(111162),
    s3 = n(855302);
let s6 = (0, u.zD)(d.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => L.intl.string(L.t["0CEP6e"]),
        useSubtitle: () => L.intl.string(L.t["kBXuW+"]),
        useValue: function () {
            return (0, E.bG)([s2.default], () => s2.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = s2.default.isStreamInfoOverlayEnabled;
            ((0, s3.A)("stream_info_overlay_enabled", e, t), (0, s1.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return O.Q_.useSetting();
        },
    }),
    s5 = (0, u.bd)(d.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? L.intl.string(L.t["/B4I8H"]) : L.intl.string(L.t.BTlsWH)),
        useCollapsedSubtitle: () => L.intl.string(L.t.la1Ys4),
        buildLayout: () => [s6, sM, s$, s0, sZ],
    });
function s4(e, t, n) {
    (0, nQ.A)({ title: e, subtitle: t, confirmText: L.intl.string(L.t.BddRzS), onConfirm: n });
}
let s8 = (0, u.Tf)(d.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => L.intl.string(L.t.SXfv1v),
        useSubtitle: () => L.intl.string(L.t["buA5/q"]),
        useLabel: () => L.intl.string(L.t.yBZMsQ),
        onClick: function () {
            s4(L.intl.string(L.t["4iKQ/3"]), L.intl.string(L.t.sQ42iT), sP.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    s7 = (0, u.zZ)(d.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => L.intl.string(L.t.UDAU9K),
        buildLayout: () => [sG, s5, s8],
    });
var s9 = n(736056),
    re = n(360729),
    rt = n(446243),
    rn = n(558076),
    ri = n(270103);
let rl = (0, u.zD)(d.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => L.intl.string(ri.default.qYzpsI),
        useSubtitle: () => L.intl.string(ri.default["+vMoL1"]),
        useValue: () => (0, E.bG)([rn.A], () => rn.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, rt.Ft)(e),
    }),
    rs = (0, u.zZ)(d.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => L.intl.string(ri.default.wRLmM0),
        usePredicate: function () {
            let e = (0, E.yK)([lE.A], () => lE.A.getGuildIds()),
                { loaded: t, override: n } = (0, E.cf)([s9.A], () => ({
                    loaded: s9.A.getLoadedGuildExperiment(re.vJ),
                    override: s9.A.getExperimentOverrideDescriptor(re.vJ),
                }));
            return (0, A.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, re.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rl],
    });
var rr = n(347481),
    ra = n(852712),
    ro = n(179172),
    ru = n(868162);
let rd = (0, u.zD)(d.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => L.intl.string(L.t.gF8HJo),
        useSubtitle: () => L.intl.string(L.t.cfrfyZ),
        useValue: function () {
            return (0, E.bG)([ru.A], () => !0 !== ru.A.getState().neverShowModal);
        },
        setValue: function (e) {
            ro.Bv(!e);
        },
        usePredicate: function () {
            return eq.isPlatformEmbedded;
        },
    }),
    rc = (0, u.zD)(d.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => L.intl.string(L.t.cUMdH0),
        useSubtitle: () => L.intl.string(L.t["6EjbvA"]),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            sP.A.setAutomaticGainControl(e, { page: h.liQ.USER_SETTINGS, section: h.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, E.bG)([i0.Ay, rr.A], () => {
                let e = i0.Ay.getInputDeviceId();
                return rr.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.isAutomaticGainControlSupported() && i0.Ay.isInputProfileCustom());
        },
    }),
    rg = (0, u.sN)(d.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => L.intl.string(L.t.AlybXj),
        setValue: (e) =>
            sP.A.setAttenuation(e, i0.Ay.getAttenuateWhileSpeakingSelf(), i0.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i0.Ay.getAttenuation(),
    }),
    rm = (0, u.zD)(d.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => L.intl.string(L.t["9dHxRY"]),
        useValue: () => (0, E.bG)([i0.Ay], () => i0.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => sP.A.setAttenuation(i0.Ay.getAttenuation(), e, i0.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rA = (0, u.zD)(d.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => L.intl.string(L.t.SMt0Gr),
        useValue: () => (0, E.bG)([i0.Ay], () => i0.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sP.A.setAttenuation(i0.Ay.getAttenuation(), i0.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rE = (0, u.FW)(d.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => L.intl.string(L.t.oSdBvW),
        useSubtitle: () => L.intl.string(L.t["0A/8Rt"]),
        usePredicate: () => (0, E.bG)([i0.Ay], () => i0.Ay.supports(lM.O5.ATTENUATION)),
        buildLayout: () => [rg, rm, rA],
    });
var rh = n(801644);
let rS = (0, u.zD)(d.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => L.intl.string(L.t.pZ0vr4),
        useSubtitle: () => L.intl.string(L.t.tVbzoZ),
        useValue: function () {
            return (0, E.bG)([ec.Ay], () => !ec.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            ((0, s3.A)("hardware_mute_silence_alert_enabled", e, !ec.Ay.disableHardwareMuteSilenceAlert),
                nn.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e }));
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = rh.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    rT = (0, u.zD)(d.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => L.intl.string(L.t.DFPXIG),
        useSubtitle: () => L.intl.string(L.t["UyRX+C"]),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            sP.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.showBypassSystemInputProcessing() && i0.Ay.isInputProfileCustom());
        },
    }),
    rp = (0, u.zD)(d.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => L.intl.string(L.t.jrWHD3),
        useSubtitle: () => L.intl.string(L.t.YCCMkJ),
        useValue: function () {
            return (0, E.bG)([ec.Ay], () => !ec.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, s3.A)("switch_channel_warning_enabled", e, !ec.Ay.disableVoiceChannelChangeAlert),
                nn.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rx = (0, u.zD)(d.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => L.intl.string(L.t.BbESsg),
        useSubtitle: () => L.intl.string(L.t.LoOB1F),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => {
                let { vadUseKrisp: e } = i0.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = i0.Ay.getMode();
            sP.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, E.bG)(
                [i0.Ay],
                () => i0.Ay.getMode() !== h.TBI.VOICE_ACTIVITY || !i0.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.isAdvancedVoiceActivitySupported() && i0.Ay.isInputProfileCustom());
        },
    }),
    rf = (0, u.Hn)(d.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => L.intl.string(L.t.wVBHr0),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            s4(L.intl.string(L.t.uY7AcQ), L.intl.string(L.t.gBqik6), () => sP.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, E.cf)([i0.Ay], () => ({
                legacyAudioSubsystemSupported: i0.Ay.supports(lM.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i0.Ay.supports(lM.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i0.Ay.supports(lM.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return A.useMemo(() => {
                let i;
                return (
                    (i = [{ id: lM.rB.STANDARD, value: lM.rB.STANDARD, label: L.intl.string(L.t.dqb2JZ) }]),
                    e && i.push({ id: lM.rB.LEGACY, value: lM.rB.LEGACY, label: L.intl.string(L.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: lM.rB.EXPERIMENTAL, value: lM.rB.EXPERIMENTAL, label: L.intl.string(L.t.liQmtr) }),
                    n && i.push({ id: lM.rB.AUTOMATIC, value: lM.rB.AUTOMATIC, label: L.intl.string(L.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rI = (0, u.zD)(d.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => L.intl.string(L.t.uancuJ),
        useSubtitle: () => L.intl.string(L.t.I1Eoqq),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getQoS());
        },
        setValue: function (e) {
            sP.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.supports(lM.O5.QOS));
        },
    }),
    rN = (0, u.zD)(d.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => L.intl.string(L.t["4rsOPQ"]),
        useSubtitle: () => L.intl.string(L.t.jtiiCw),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            sP.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eq.isPlatformEmbedded;
        },
    }),
    r_ = (0, u.bd)(d.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? L.intl.string(L.t.KHsSWK) : L.intl.string(L.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tm(d.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, E.bG)([i0.Ay], () => i0.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rc, rx, rT, rd, rN, rS, rp, rE, rf, rI],
    }),
    rC = (0, u.zD)(d.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => L.intl.string(L.t.iWTwu6),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            sP.A.setEchoCancellation(e, { page: h.liQ.USER_SETTINGS, section: h.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, E.bG)([i0.Ay, rr.A], () => {
                let e = i0.Ay.getInputDeviceId();
                return rr.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.isInputProfileCustom());
        },
    });
var rb = n(459838),
    ry = n(451988),
    rv = n(475883),
    rj = n(9761);
let rO = (0, tk.Ld)();
function rL(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, m.jsx)("div", {
        role: "meter",
        className: is()(rv.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? L.intl.string(L.t.haLKZ0) : L.intl.string(L.t.X2hJL7),
        children: (0, m.jsx)("div", { className: is()(rv.Jx, rv.NU, { [rv.zY]: t && !r, [rv.r9]: r }) }),
    });
}
function rD(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, E.cf)([i0.Ay], () => ({
            threshold: i0.Ay.getModeOptions().threshold,
            autoThreshold: i0.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, E.bG)([i0.Ay], () => i0.Ay.getMode());
    return (0, m.jsx)("section", {
        className: is()(rv.Mo, rv.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, m.jsx)(X.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void sP.A.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: nq.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: nq.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rO,
            disabled: s,
            children: (0, m.jsxs)("div", {
                className: is()(rv.NU, rv.TL, rv.Jx, rj.bar),
                children: [
                    (0, m.jsx)("div", { className: is()(rv.GS, rv.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, m.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rR = (0, u.E2)(d.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [L.intl.string(L.t["sqUm+k"]), L.intl.string(L.t.I1Zuq0), L.intl.string(L.t.nuFtHH)],
    usePredicate: () => (0, E.bG)([i0.Ay], () => i0.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, E.cf)([i0.Ay], () => ({
                autoThreshold: i0.Ay.getModeOptions().autoThreshold,
                disabled: i0.Ay.getMode() !== lM.TB.VOICE_ACTIVITY,
            })),
            n = A.useCallback((e) => {
                let t = i0.Ay.getMode(),
                    { threshold: n } = i0.Ay.getModeOptions();
                sP.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, E.bG)([i0.Ay], () => i0.Ay.supports(lM.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = A.useState(-100),
                    [n, i] = A.useState(!1);
                function l(e, n) {
                    (t(e), i((n & lM.ME.VOICE) === lM.ME.VOICE));
                }
                return (
                    A.useEffect(() => {
                        let e = new ry.Ep();
                        return (
                            e.start(1e3, () => {
                                (i0.Ay.getMediaEngine().on(rb.bg.VoiceActivity, l), e.stop());
                            }),
                            () => {
                                (i0.Ay.getMediaEngine().removeListener(rb.bg.VoiceActivity, l), e.stop());
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, E.bG)([i0.Ay], () => i0.Ay.isEnabled()),
            a = A.useMemo(
                () =>
                    !r &&
                    (0, m.jsx)("div", {
                        className: rv.B4,
                        children: (0, m.jsx)(iB.w, {
                            type: "warning",
                            children: L.intl.format(L.t["O13I+O"], { onEnableClick: () => sP.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = A.useMemo(() => (e ? L.intl.string(L.t.JsbzjA) : L.intl.string(L.t.MLmyMY)), [e]),
            u = A.useId(),
            d = A.useId();
        return i
            ? (0, m.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, m.jsx)(lt.A, { tag: "legend", id: u, children: L.intl.string(L.t.GByLar) }),
                      (0, m.jsx)(lt.A, { id: d, children: o }),
                      (0, m.jsxs)(z.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, m.jsx)(tQ.d, {
                                  disabled: t,
                                  label: L.intl.string(L.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, m.jsx)(rL, {
                                        isSpeaking: s,
                                        className: rv.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, m.jsx)(rD, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, m.jsxs)(z.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, m.jsx)(tq.D, {
                          label: L.intl.string(L.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, m.jsx)(rL, {
                                        isSpeaking: s,
                                        className: rv.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, m.jsx)(rD, {
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
var rP = n(366010);
let rG = n(993830),
    rM = n(413142),
    rU = { page: h.liQ.USER_SETTINGS, section: h.JJy.SETTINGS_VOICE_AND_VIDEO };
function rV() {
    let e = (0, E.bG)([nM.A], () => (0, rP.q)(nM.A.theme));
    return (0, m.jsx)("img", { src: e ? rG : rM, width: 48, height: 32, alt: "" });
}
let rk = (0, u.E2)(d.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [L.intl.string(L.t.t8Qhib), L.intl.string(L.t.hmfkCi)],
    usePredicate: function () {
        return (0, E.bG)([i0.Ay], () => i0.Ay.isInputProfileCustom() && i0.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = A.useCallback((e) => {
                (sP.A.setNoiseCancellation("KRISP" === e, rU), sP.A.setNoiseSuppression("STANDARD" === e, rU));
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, E.cf)([i0.Ay], () => ({
                noiseCancellation: i0.Ay.getNoiseCancellation(),
                noiseSuppression: i0.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: i0.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: i0.Ay.isNoiseCancellationSupported(),
            })),
            s = A.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: L.intl.string(L.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: L.intl.string(L.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: L.intl.string(L.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, i]),
            r = l
                ? L.intl.format(L.t["1q5aTp"], { helpArticle: ep.A.getArticleURL(h.MVz.NOISE_SUPPRESSION) })
                : L.intl.string(L.t.OWKjw5);
        return (0, m.jsxs)(z.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, m.jsx)(i8.l, {
                    label: L.intl.string(L.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, m.jsx)(rV, {}),
            ],
        });
    },
});
var rw = n(934729),
    rF = n(621380);
let rB = !ng.Av;
function rz() {
    return (0, E.bG)([i0.Ay], () => i0.Ay.getMode() === lM.TB.PUSH_TO_TALK);
}
let rX = (0, u.zD)(d.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return ng.Av ? L.intl.string(L.t.tG4Np5) : L.intl.string(L.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, E.bG)([i0.Ay], () => i0.Ay.getMode());
        return A.useMemo(() => {
            if (!ng.Av && e === lM.TB.PUSH_TO_TALK)
                return L.intl.format(L.t["VHI4+Y"], { onDownloadClick: () => (0, rw._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, E.bG)([i0.Ay], () => i0.Ay.getActiveInputProfile() !== rF.m.STUDIO);
    },
    useValue: function () {
        return (0, E.bG)([i0.Ay], () => i0.Ay.getMode() === lM.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? lM.TB.PUSH_TO_TALK : lM.TB.VOICE_ACTIVITY),
            (i = [tO.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lM.TB.PUSH_TO_TALK &&
                rB &&
                (0, lr.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("844331"), n.e("410919")]).then(n.bind(n, 556506));
                    return (t) =>
                        (0, m.jsx)(e, {
                            title: L.intl.string(L.t.Kdt0Gb),
                            confirmText: L.intl.string(L.t["1WjMbC"]),
                            cancelText: L.intl.string(L.t.BddRzS),
                            onConfirm: () => (0, rw._)("PTT Limited Modal"),
                            body: L.intl.string(L.t.NIozvt),
                            ...t,
                        });
                }),
            sP.A.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [L.intl.string(L.t["pS+K2L"]), L.intl.string(L.t.nuFtHH)],
});
var rY = n(484599);
let rH = (0, u.E2)(d.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [L.intl.string(L.t["pS+K2L"]), L.intl.string(L.t.nuFtHH)],
        usePredicate: rz,
        Component: function () {
            let e = (0, E.bG)([i0.Ay], () => {
                    let { shortcut: e } = i0.Ay.getModeOptions();
                    return e;
                }),
                t = L.intl.format(L.t.HVvn5T, {
                    onClick: () => (0, ni.openUserSettings)(d.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, m.jsx)(tq.D, {
                label: L.intl.string(L.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, m.jsx)("div", {
                    className: rY.e,
                    children: (0, m.jsx)(li.A, {
                        defaultValue: e,
                        onChange: (e) => sP.A.setMode(h.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    rK = (0, u.sN)(d.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => L.intl.string(L.t.GCNMM8),
        useSearchTerms: () => [L.intl.string(L.t["pS+K2L"]), L.intl.string(L.t.nuFtHH)],
        setValue: function (e) {
            sP.A.setMode(h.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: h.IjB,
        getInitialValue: function () {
            let { delay: e } = i0.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: rz,
    });
var rW = n(844981),
    rZ = n(943679);
function rq() {
    return (0, rW.Ay)("VoiceSettings");
}
let rQ = (0, u.zD)(d.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => L.intl.string(rZ.default.LGDPhA),
        useSubtitle: function () {
            let e = rq();
            if ((0, rW.Xt)(e))
                return e === rW.L3.BLOCKED_MONO_OUTPUT
                    ? L.intl.string(rZ.default.rOXfEw)
                    : L.intl.string(rZ.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            sP.A.setSpatialAudio(e, [tO.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return rq() !== rW.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, rW.Xt)(rq());
        },
    }),
    rJ = (0, u.Qx)(d.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => L.intl.string(L.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, ra._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [L.intl.string(L.t.nuFtHH), L.intl.string(L.t.VZPR0R), L.intl.string(L.t.cjPbpT)],
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getActiveInputProfile() ?? rF.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tO.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sP.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, ra.d)({ location: "InputProfileCategory" });
            return [
                { value: rF.m.VOICE_ISOLATION, name: L.intl.string(L.t.cjPbpT), desc: L.intl.string(L.t.CzhvnE) },
                { value: rF.m.STUDIO, name: L.intl.string(L.t.VZPR0R), desc: L.intl.string(L.t.ZaJksS) },
                { value: rF.m.CUSTOM, name: L.intl.string(L.t["N/PQjv"]), desc: L.intl.string(L.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    r$ = (0, u.zZ)(d.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, E.bG)([rr.A, i0.Ay], () => {
                let e = i0.Ay.getInputDeviceId();
                return (
                    (rr.A.hasEchoCancellation(e) || rr.A.hasNoiseSuppression(e) || rr.A.hasAutomaticGainControl(e)) &&
                    i0.Ay.isInputProfileCustom()
                );
            });
            return A.useMemo(() => {
                if (e) return { type: g.lT.INLINE_NOTICE, noticeType: "info", text: L.intl.string(L.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [rJ, rR, rk, rC, rQ, rX, rH, rK, r_],
    });
var r0 = n(403581),
    r1 = n(512950),
    r2 = n(983851),
    r3 = n(687021),
    r6 = n(128450),
    r5 = n(796774),
    r4 = n(209932),
    r8 = n(813564),
    r7 = n(984813),
    r9 = n(922016),
    ae = n(305866),
    at = n(22231),
    an = n(158045),
    ai = n(792348),
    al = n(674168),
    as = n(511558),
    ar = n(817232),
    aa = n(647451);
function ao(e) {
    let { onSelect: t } = e,
        [n, i] = A.useState(!1),
        l = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()),
        s = an.Ay.canUseCustomCallSounds(l),
        r = A.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, m.jsx)(r9.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, m.jsx)(ae.l, {
                children: (0, m.jsx)(as.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, m.jsx)(al.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, m.jsx)(ar.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: L.intl.string(L.t.uOe0Az),
                children: (0, m.jsx)(at.PencilIcon, { size: "md", color: "currentColor", className: aa.Wo }),
            }),
    });
}
function au(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, ai.A)(t, null),
        i =
            0 === (0, r8.wH)()
                ? L.intl.string(L.t.OASXjt)
                : L.intl.formatToPlainString(L.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, m.jsx)(ar.dT, {
        onClick: n,
        text: i,
        children: (0, m.jsx)(r2.H, { size: "md", color: "currentColor", className: aa.wg }),
    });
}
function ad(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s);
    return (0, m.jsxs)("div", {
        className: aa.D6,
        children: [
            (0, m.jsxs)("div", {
                className: aa.kL,
                children: [
                    a && (0, m.jsx)(tb.A, { emojiId: s, emojiName: r, className: aa.Zg }),
                    (0, m.jsx)(Y.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: aa.dj,
                        children:
                            null == t
                                ? L.intl.string(L.t.PoWNfe)
                                : n
                                  ? L.intl.format(L.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, m.jsx)(Y.E, {
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
                        ? (0, m.jsx)(au, { sound: t })
                        : (0, m.jsx)(r2.H, { size: "md", color: "currentColor", className: aa.Gk }),
                ],
            }),
            (0, m.jsxs)("div", {
                className: aa.kL,
                children: [
                    (0, m.jsx)(ao, { onSelect: i }),
                    l &&
                        !n &&
                        (0, m.jsx)(ar.dT, {
                            onClick: () => i(null),
                            text: L.intl.string(L.t.jmtcGA),
                            children: (0, m.jsx)(i9.TrashIcon, {
                                size: "md",
                                color: nq.A.unsafe_rawColors.RED_400.css,
                                className: aa.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var ac = n(617617);
n(980504);
var ag = n(806050);
function am(e) {
    return (0, E.bG)([r4.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return r4.A.getSound("0" === t ? "0" : t, n);
    });
}
function aA(e) {
    let { guildId: t } = e,
        n = (0, E.bG)([ac.A], () => ac.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = am(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, m.jsxs)("div", {
        className: ag.Io,
        children: [
            r
                ? (0, m.jsx)(tb.A, { emojiId: l, emojiName: s, className: ag.nW })
                : (0, m.jsx)(r2.H, { size: "md", color: "currentColor", className: ag.nW }),
            (0, m.jsx)(Y.E, { className: ag.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let aE = (0, u.E2)(d.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [L.intl.string(L.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eR.Ay)(),
            [t, n] = A.useState("0"),
            i = (0, r7.mz)(t),
            l = am(i),
            s = i?.type === r7.PP.GLOBAL,
            r = (0, E.bG)([r4.A], () => r4.A.hasFetchedAllSounds()) && null != i && null == l;
        (A.useEffect(() => {
            r && (0, r8.ND)({ location: e });
        }, [r, e]),
            A.useEffect(() => {
                (0, r5.E7)();
            }, []));
        let a = A.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, m.jsx)(aA, { guildId: e.value }) : null;
        }, []);
        return (0, m.jsxs)(nJ.n, {
            label: L.intl.string(L.t.nzUc3B),
            description: L.intl.format(L.t.u9RWmv, { helpdeskArticle: ep.A.getArticleURL(h.MVz.SOUNDBOARD) }),
            children: [
                (0, m.jsx)(r3.A, {
                    guildId: t,
                    className: ag.Dt,
                    globalOption: { label: L.intl.string(L.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, m.jsxs)(r6.A, {
                    title: L.intl.format(L.t.I2TsYN, {
                        nitroWheelHook: () => (0, m.jsx)(r0.t, { size: "md", color: "currentColor", className: ag.ax }),
                    }),
                    children: [
                        (0, m.jsx)(ad, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, r8.Dv)(t, e) : (0, r8.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, m.jsx)(r1.p, {
                                className: ag.lm,
                                messageType: r1.Y.WARNING,
                                children: L.intl.string(L.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var ah = n(824744);
let aS = (0, u.sN)(d.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => L.intl.string(L.t.kbFsAD),
    useSubtitle: () => L.intl.format(L.t.BPbGq7, { helpCenterArticle: ep.A.getArticleURL(h.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tO.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, ah.w)(e);
        (0, r5.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, r8.wH)();
        return (0, ah.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var aT = n(864145);
let ap = (0, u.sN)(d.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => L.intl.string(L.t["2JbvKw"]),
        useSubtitle: () => L.intl.string(L.t.INenzY),
        setValue: function (e) {
            let t = (0, ah.w)(e);
            O.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = O.HO.getSetting();
            return (0, ah.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, aT.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    ax = (0, u.zZ)(d.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => L.intl.string(L.t.ABjMWI),
        buildLayout: () => [aS, ap, aE],
    });
var af = n(803224),
    aI = n(552122);
let aN = (0, u.E2)(d.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [L.intl.string(L.t.fgSHf8)],
        usePredicate: () => null != aI.A.useHolidaySoundpack(),
        Component: () =>
            (0, m.jsx)(Y.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: L.intl.format(L.t.Eup6Wv, {
                    onClick: () => (0, ni.openUserSettings)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    a_ = (0, u.AK)(d.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => L.intl.string(L.t.eyGEE4),
        useSearchTerms: () => [L.intl.string(L.t.eyGEE4)],
        destinationKey: d.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aC = (0, u.gN)(d.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [a_] });
var ab = n(264686);
let ay = (0, eS.D)(() => ({ currentPlayingSound: null }));
function av() {
    let e = ay.getField("currentPlayingSound");
    (e?.stop(), ay.setState({ currentPlayingSound: null }));
}
function aj(e) {
    let t = ay.getField("currentPlayingSound");
    t?.stop();
    let n = (0, n6.Ak)(e);
    ay.setState({ currentPlayingSound: n });
}
function aO(e) {
    return (0, u.zD)(`${d.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => L.intl.format(L.t.OOiGCM, { onClick: () => aj(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, E.bG)([af.A], () => af.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = af.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), ab.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, E.bG)([af.A], () => af.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aL = [
        { useTitle: () => L.intl.string(L.t.hK51Yg), sound: "deafen" },
        { useTitle: () => L.intl.string(L.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => L.intl.string(L.t.w4m945), sound: "mute" },
        { useTitle: () => L.intl.string(L.t.YqAjXy), sound: "unmute" },
        { useTitle: () => L.intl.string(L.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => L.intl.string(L.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => L.intl.string(L.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => L.intl.string(L.t.x98vQq),
            useSearchTerms: () => [L.intl.string(L.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => L.intl.string(L.t["1HjRqC"]),
            useSearchTerms: () => [L.intl.string(L.t.Q8gkVL)],
            sound: "ptt_stop",
        },
        { useTitle: () => L.intl.string(L.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => L.intl.string(L.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => L.intl.string(L.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => L.intl.string(L.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => L.intl.string(L.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => L.intl.string(L.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => L.intl.string(L.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => L.intl.string(L.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => L.intl.string(L.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => L.intl.string(L.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => L.intl.string(L.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => L.intl.string(L.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => L.intl.string(L.t.CP3DC3), sound: "reconnect" },
    ],
    aD = (0, u.D1)(d.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? L.intl.formatToPlainString(L.t["0JYT98"], { count: t })
                : L.intl.formatToPlainString(L.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tm(d.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                av();
            };
        },
        buildLayout: () => aL.map((e) => aO(e)),
    }),
    aR = (0, u.zZ)(d.X.SOUNDS_CATEGORY, {
        useTitle: () => L.intl.string(L.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, E.bG)([af.A], () => af.A.getDisableAllSounds());
            return A.useMemo(() => {
                if (e)
                    return {
                        type: g.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: L.intl.format(L.t.fRvixS, {
                            onClick: () => (0, ni.openUserSettings)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aD, aN, aC],
    }),
    aP = (0, u.zD)(d.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => L.intl.string(L.t.e3Zz3F),
        useSubtitle: () => L.intl.string(L.t.RztTjP),
        useValue: function () {
            return !O.uh.useSetting();
        },
        setValue: function (e) {
            ((0, s3.A)("stream_previews_disabled", !e, O.uh.getSetting(), [tO.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                O.uh.updateSetting(!e));
        },
    }),
    aG = (0, u.zD)(d.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => L.intl.string(L.t.GmWk2E),
        useSearchTerms: () => [L.intl.string(L.t["Fj/xn1"])],
        useSubtitle: () => L.intl.string(L.t["Fj/xn1"]),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getVideoHook());
        },
        setValue: sP.A.setVideoHook,
        usePredicate: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.supportsVideoHook());
        },
    }),
    aM = (0, u.zD)(d.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => L.intl.string(L.t["4I0qzZ"]),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getExperimentalSoundshare());
        },
        setValue: sP.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, E.bG)([i0.Ay], () => {
                let e = i0.Ay.supportsExperimentalSoundshare(),
                    t = i0.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    aU = (0, u.zD)(d.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => L.intl.string(L.t["/jwMtn"]),
        useSubtitle: () => L.intl.string(L.t.zlA23F),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tO.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sP.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return i0.Ay.supports(lM.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    aV = (0, u.sN)(d.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => L.intl.string(L.t.fhEzfj),
        setValue: function (e) {
            let t = [tO.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sP.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: i0.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, E.bG)([i0.Ay], () => i0.Ay.getSidechainCompression());
            return i0.Ay.supports(lM.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    ak = (0, u.zD)(d.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => L.intl.string(L.t.lt8rRx),
        useSubtitle: () => L.intl.string(L.t.ie1mgY),
        useValue: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, ng.cX)() && e
                ? (0, nQ.A)({
                      title: L.intl.string(L.t["9jf31O"]),
                      subtitle: L.intl.string(L.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          (sP.A.setUseSystemScreensharePicker(e), nE.A.app.relaunch());
                      },
                      confirmText: L.intl.string(L.t.BddRzS),
                  })
                : sP.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, E.bG)([i0.Ay], () => i0.Ay.supportsSystemScreensharePicker() && (0, ng.cX)());
        },
    }),
    aw = (0, u.bd)(d.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? L.intl.string(L.t.qrMyvm) : L.intl.string(L.t.LEtTNl)),
        useCollapsedSubtitle: () => tm(d.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aU, aV, ak, aM, aG],
    }),
    aF = (0, u.zZ)(d.X.STREAMING_CATEGORY, { useTitle: () => L.intl.string(L.t.KDdjou), buildLayout: () => [aP, aw] });
var aB = n(106713);
let az = (0, u.E2)(d.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aB.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, m.jsx)(sC.U, {
                label: L.intl.string(L.t.UTM8VP),
                deviceType: lM.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aX = (0, u.E2)(d.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aB.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, m.jsx)(sC.U, {
                label: L.intl.string(L.t.xuYQ0n),
                deviceType: lM.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aY = (0, u.zC)(d.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [az, aX] }),
    aH = (0, u.sN)(d.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => L.intl.string(L.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i0.Ay.getInputVolume();
            return (0, ah.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tO.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, ah.w)(e);
            sP.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    aK = (0, u.sN)(d.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => L.intl.string(L.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i0.Ay.getOutputVolume();
            return (0, ah.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tO.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, ah.w)(e);
            sP.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    aW = (0, u.zC)(d.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [aH, aK] });
var aZ = n(702841),
    aq = n(152567),
    aQ = n(804037);
let aJ = `${ep.A.getArticleURL(h.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    a$ = (0, u.E2)(d.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [L.intl.string(L.t.nuFtHH)],
        usePredicate: function () {
            return (0, aZ.bG)([i0.Ay], () => i0.Ay.supports(lM.O5.LOOPBACK));
        },
        Component: function () {
            return (0, aZ.bG)([i0.Ay], () => i0.Ay.supports(lM.O5.LOOPBACK))
                ? (0, m.jsx)(aq.A, {
                      size: "md",
                      notchBackground: aq.V.GRAY,
                      captionVoice: L.intl.string(L.t.bp3JOV),
                      captionNoVoice: (0, m.jsxs)(m.Fragment, {
                          children: [
                              (0, m.jsx)(Y.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: L.intl.string(L.t.bgn75v),
                              }),
                              L.intl.string(L.t["MA+OZh"]),
                              (0, m.jsx)(nt.Anchor, {
                                  className: aQ.X,
                                  href: ep.A.getArticleURL(h.MVz.NO_INPUT_DETECTED),
                                  children: L.intl.string(L.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: L.intl.format(L.t["V+B3FH"], { guideURL: aJ }),
                      buttonTest: L.intl.string(L.t.gyljWE),
                      buttonStop: L.intl.string(L.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: h.liQ.USER_SETTINGS, section: h.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    a0 = eq.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function a1(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, m.jsxs)(z.B, {
        children: [
            n && (0, m.jsx)(i5, { sourcePage: "voice" }),
            t && (0, m.jsx)(lK.A, { look: lK.k.WARNING, children: L.intl.string(L.t.Ioz3gx) }),
        ],
    });
}
let a2 = (0, u.zZ)(d.X.VOICE_CATEGORY, {
        useTitle: () => L.intl.string(L.t.K3lovD),
        useSearchTerms: () => [
            L.intl.string(L.t.hHMYbb),
            L.intl.string(L.t.nuFtHH),
            L.intl.string(L.t.dl18zb),
            L.intl.string(L.t["3182VD"]),
            L.intl.string(L.t["DGq/PR"]),
            L.intl.string(L.t.eATD2B),
            L.intl.string(L.t.Rtsr6w),
            L.intl.string(L.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = i6("voice"),
                t = (0, sb.x5)(lM.oh.AUDIO_INPUT),
                n = (0, sb.x5)(lM.oh.AUDIO_OUTPUT),
                i = A.useMemo(() => {
                    let e = a0.some((e) => t?.hardwareId?.startsWith(e)),
                        i = a0.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return A.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: g.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, m.jsx)(a1, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [aY, aW, a$],
    }),
    a3 = (0, u.t_)(d.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => L.intl.string(L.t.B1fFpf),
        buildLayout: () => [a2, r$, sR, aF, aR, ax, rs, s7],
    }),
    a6 = (0, u.i4)(d.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.B1fFpf),
        usePredicate: () => i0.Ay.isSupported(),
        icon: sE.MicrophoneIcon,
        useMenu: sh.A,
        buildLayout: () => [a3],
    }),
    a5 = (0, u.WI)(d.X.APP_SECTION, {
        useTitle: () => L.intl.string(L.t.gcyH1J),
        buildLayout: () => [a6, nX, e0, ik, sA, nW],
    });
var a4 = n(360669),
    a8 = n(974544),
    a7 = n(423764),
    a9 = n(289873),
    oe = n(132500),
    ot = n(465323),
    on = n(37766),
    oi = n(194261),
    ol = n(391048),
    os = n(277984),
    or = n(99696),
    oa = n(202613),
    oo = n(615405),
    ou = n(83617),
    od = n(935208),
    oc = n(607399),
    og = n(993077),
    om = n(150934),
    oA = n(256006),
    oE = n(198970),
    oh = n(71532);
let oS = /[^0-9/]/g,
    oT = /[^0-9]/g;
class op extends A.PureComponent {
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
                ((i = (n = e.replace(oS, "").split("/"))[0]),
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
            ? (u = u.replace(oT, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t));
    };
    render() {
        return (0, m.jsx)(la.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var ox = n(832208),
    of = n(782328);
let oI = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tk.Ld)(),
                        title: () => L.intl.string(L.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => L.intl.string(L.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => of.ep,
                        renderInput: (e) => (0, m.jsx)(op, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oN = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = A.useState(!1),
            [a, o] = A.useState(null),
            [u, d] = A.useState(i);
        return (
            A.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, m.jsx)(ox.A, {
                className: n,
                form: oI,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    (s || "" === e || r(!0),
                        (s && "" === e) || !(0, oh.So)(e) ? o(L.intl.string(L.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var o_ = n(219887),
    oC = n(292856);
let ob = "isDefault";
class oy extends A.PureComponent {
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
            expiresMonth: t instanceof oa.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oa.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        e6.h.wait(() => {
            ((0, os.ey)(), (0, os.tc)());
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(it.Vq).length))
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
                ? (0, m.jsx)("div", {
                      className: oC.zc,
                      children: (0, m.jsx)(iB.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, m.jsx)("div", {
                  className: oC.zc,
                  children: (0, m.jsx)(iB.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oA.g)(n);
        return (0, m.jsxs)("div", {
            className: oC.yV,
            children: [
                (0, m.jsx)(Y.E, {
                    className: oC.bV,
                    variant: "text-sm/normal",
                    children: L.intl.string(L.t["50Auo2"]),
                }),
                (0, m.jsx)(oE.Ay, {
                    ...e,
                    mode: oE.Ay.Modes.EDIT,
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
        return (0, m.jsxs)("div", {
            className: oC.yV,
            children: [
                (0, m.jsx)(Y.E, { className: oC.bV, variant: "text-sm/normal", children: L.intl.string(L.t.Fo2YP7) }),
                (0, m.jsx)(oN, {
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
        return (0, m.jsx)("div", {
            className: oC.AU,
            children: (0, m.jsxs)(z.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, m.jsx)(sw.e, {
                        children: (0, m.jsxs)("div", {
                            className: oC.lH,
                            children: [
                                n
                                    ? (0, m.jsx)(le.m, {
                                          text: L.intl.string(L.t["v6/z28"]),
                                          children: (0, m.jsx)("div", { "aria-hidden": !0, className: oC.dm }),
                                      })
                                    : null,
                                (0, m.jsx)(I.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: oc.Fr ? "sm" : "md",
                                    text: oc.Fr ? L.intl.string(L.t.oyYWHE) : L.intl.string(L.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, m.jsxs)(sw.e, {
                        children: [
                            (0, m.jsx)(I.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: oc.Fr ? "sm" : "md",
                                text: L.intl.string(L.t["ETE/oC"]),
                            }),
                            (0, m.jsx)(I.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: oc.Fr ? "sm" : "md",
                                text: L.intl.string(L.t["R3BPH+"]),
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
            r = e instanceof oa.SJ;
        return (0, m.jsx)(og.Z, {
            editable: !0,
            className: is()(oC.Nr, i),
            children: (0, m.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, m.jsxs)("div", {
                        className: oC.__invalid_paymentSection,
                        children: [
                            (0, m.jsx)(o_.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, m.jsx)("div", { className: oC.Um, children: L.intl.string(L.t["3R0U0b"]) })
                                : null,
                            (0, m.jsx)("div", {
                                className: oC.Sv,
                                children: r
                                    ? L.intl.format(L.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : L.intl.string(L.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, m.jsx)("div", {
                        className: oC.D5,
                        children: (0, m.jsx)(om.S, {
                            value: ob,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, ob),
                            label: L.intl.string(L.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, m.jsx)(i4.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let ov = E.Ay.connectStores([oo.A], () => ({ updateError: oo.A.editSourceError, removeError: oo.A.removeSourceError }))(
    oy,
);
var oj = n(986485),
    oO = n(849405),
    oL = n(329693);
function oD() {
    (0, or.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, oe.A)() });
}
class oR extends A.PureComponent {
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
            ? (0, m.jsx)(ov, {
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
            : (0, m.jsxs)(m.Fragment, {
                  children: [
                      i ? null : (0, m.jsx)(i4.c, { className: oL.__invalid_sourceDivider }),
                      (0, m.jsxs)("div", {
                          className: oL.Yb,
                          children: [
                              (0, m.jsx)(o_.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, m.jsx)(I.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: L.intl.string(L.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let oP = A.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = A.useState(null),
        o = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, E.bG)([oo.A], () => oo.A.ipCountryCode),
        d = A.useMemo(() => (0, ot.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        A.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : os.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, m.jsxs)(m.Fragment, {
            children: [
                n ? null : (0, m.jsx)(i4.c, { className: oL.__invalid_sourceDivider }),
                (0, m.jsxs)("div", {
                    className: oL.Yb,
                    children: [
                        void 0 !== t
                            ? (0, m.jsx)(o_.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, m.jsxs)(lc.A, {
                                  align: lc.A.Align.CENTER,
                                  children: [
                                      (0, m.jsx)(on._, { size: "lg" }),
                                      (0, m.jsx)(Y.E, {
                                          variant: "text-sm/medium",
                                          className: oO.Wi,
                                          children: L.intl.string(oj.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, m.jsxs)("div", {
                            className: oL.zy,
                            children: [
                                (0, m.jsx)("div", {
                                    className: oL.Tq,
                                    children:
                                        null == r
                                            ? (0, m.jsx)(a9.y, { type: a9.y.Type.SPINNING_CIRCLE })
                                            : (0, m.jsx)(Y.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, ot.$g)(e ?? 0, n, l, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${String(n).toUpperCase()} ${i}`;
                                                  })(),
                                              }),
                                }),
                                (0, m.jsx)(I.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: L.intl.string(oj.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class oG extends A.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await os.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await os.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await os.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, ou.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, lr.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, m.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, ol.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, m.jsxs)("div", {
            className: oL.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, m.jsxs)("div", {
                          className: oL.z8,
                          children: [
                              (0, m.jsx)(Y.E, { variant: "text-sm/normal", children: L.intl.string(L.t.aRHpAB) }),
                              (0, m.jsx)(Y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: oL.Sv,
                                  children: L.intl.string(L.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, m.jsx)(I.$, { onClick: this.handleAddPaymentMethod, text: L.intl.string(L.t.CpOiEO) }),
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
            u = F()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : od.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oa.LQ)),
            c = u.filter((e) => e instanceof oa.LQ),
            g = this.state.editingPayment,
            A = d.findIndex((e) => e.id === g),
            E = d.map((e, t) =>
                (0, m.jsx)(
                    oR,
                    {
                        locale: l,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || A === t - 1,
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
                          (0, m.jsx)(
                              oP,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || A === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: oD,
                              },
                              e.id,
                          ),
                      )
                    : (0, m.jsx)(oP, {
                          hideDivider: 0 === d.length || A === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: oD,
                      })),
            (0, m.jsxs)(m.Fragment, {
                children: [
                    t
                        ? (0, m.jsxs)(m.Fragment, {
                              children: [
                                  (0, m.jsxs)(T.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, m.jsx)(oi.LockIcon, { size: "sm", className: oL.hz }),
                                          " ",
                                          L.intl.string(L.t.W26xGQ),
                                      ],
                                  }),
                                  (0, m.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: L.intl.string(L.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    E,
                    o && e,
                    A !== d.length - 1 || (o && c.length > 0) ? (0, m.jsx)(i4.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var oM = n(459357),
    oU = n(295405),
    oV = n(166403),
    ok = n(773669),
    ow = n(943009);
function oF() {
    let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, a7.Gw)(e.country) };
}
let oB = (0, u.E2)(d.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, E.bG)([oo.A], () => oo.A.isSyncing),
                i = (0, E.bG)([oU.A], () => oU.A.paymentSources),
                l = (0, E.bG)([oU.A], () => oU.A.defaultPaymentSourceId),
                s = (0, E.bG)([ok.default], () => ok.default.locale),
                r = (0, E.bG)([oV.A], () => oV.A.getPremiumTypeSubscription()),
                a = (0, E.bG)([oo.A], () => oo.A.isRemovingPaymentSource),
                o = (0, E.bG)([oo.A], () => oo.A.isUpdatingPaymentSource),
                { enabled: u } = (0, oM.c)({ location: "UserSettingsBilling" });
            return (A.useEffect(() => {
                (os.$o(), os.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, m.jsx)("div", { className: ow.o, children: (0, m.jsx)(a9.y, {}) })
                : (0, m.jsx)(oG, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== h.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: s,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [L.intl.string(L.t.W26xGQ), L.intl.string(L.t["3pIjBH"])],
    }),
    oz = (0, u.zZ)(d.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => L.intl.string(L.t.W26xGQ),
        useSubtitle: () => {
            let e = oF();
            return null != e ? L.intl.format(L.t.e2t1G5, { country: e.countryName }) : L.intl.string(L.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == oF()
                ? null
                : {
                      type: g.p3.INFO_POPOVER,
                      ariaLabel: L.intl.string(L.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: L.intl.string(L.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: L.intl.string(L.t.PuB1W7),
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
        buildLayout: () => [oB],
    });
var oX = n(549363),
    oY = n(545075);
let oH = (0, u.E2)(d.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, E.bG)([ok.default], () => ok.default.locale);
            return (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(oY.kb, {}), (0, m.jsx)(oX.A, { locale: e })] });
        },
        useSearchTerms: () => [L.intl.string(L.t.obLrcK)],
    }),
    oK = (0, u.zZ)(d.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => L.intl.string(L.t.obLrcK),
        buildLayout: () => [oH],
    }),
    oW = (0, u.t_)(d.X.BILLING_PANEL, {
        useTitle: () => L.intl.string(L.t.oeUm2s),
        buildLayout: () => [oz, oK],
        useObscuredNotice: a8.L,
    }),
    oZ = (0, u.i4)(d.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.oeUm2s),
        icon: a4.B,
        buildLayout: () => [oW],
    });
var oq = n(70283),
    oQ = n(597770),
    oJ = n(682618),
    o$ = n(38423),
    o0 = n(962644),
    o1 = n(35587),
    o2 = n(86379);
let o3 = (0, u.E2)(d.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: oY.uK,
        usePredicate: () => (0, o2.Hp)(),
        useSearchTerms: () => [L.intl.string(L.t.vwMEHS)],
    }),
    o6 = (0, u.zZ)(d.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [o3] });
var o5 = n(982240),
    o4 = n(788833),
    o8 = n(914410),
    o7 = n(556427),
    o9 = n(573343);
let ue = "UserSettingsGiftingBadgeProgress";
function ut(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, m.jsxs)("div", {
        className: is()(o9.fO, { [o9.bF]: i }),
        children: [
            null != n && (0, m.jsx)("img", { src: n, alt: "", className: o9.si }),
            (0, m.jsxs)("div", {
                className: o9.tc,
                children: [
                    (0, m.jsx)(Y.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, m.jsx)(Y.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: L.intl.format(o7.default.qvx9E4, { count: (0, o5.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function un(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, o$.b9)(ue);
    return (0, m.jsx)("div", {
        className: o9.dw,
        children: t.map((e) => (0, m.jsx)(ut, { tier: e, iconUrl: (0, o$.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function ui(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eR.Ay)(tO.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, o4.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: h.ZSU.BUTTON_CTA, objectType: h.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, m.jsx)("div", {
        className: o9.NG,
        children: (0, m.jsx)(I.$, {
            variant: "primary",
            icon: oQ.GiftIcon,
            text: L.intl.string(o7.default.DZnomS),
            onClick: l,
        }),
    });
}
function ul(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, o5.rL)(i),
        a = (0, o5.rL)(l),
        o = (0, o$.GZ)(n, i, l),
        u = (0, o$.b9)(ue),
        d = (0, o$.Se)(i, u),
        c = (0, o$.Se)(l, u);
    return (
        (t =
            null != l
                ? L.intl.formatToPlainString(o7.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : L.intl.formatToPlainString(o7.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, m.jsxs)("div", {
            className: o9.mY,
            children: [
                null != d &&
                    (0, m.jsx)("div", {
                        className: o9.fC,
                        children: (0, m.jsx)("img", { src: d, alt: "", className: o9.qS }),
                    }),
                (0, m.jsxs)("div", {
                    className: o9.Qs,
                    children: [
                        (0, m.jsx)(Y.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, m.jsx)(o8.Ay, { variant: o8.qP.BLUE, weight: o8.fh.MEDIUM, progress: o }),
                        (0, m.jsx)(Y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: o9.qg,
                            children: L.intl.format(o7.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, m.jsx)("div", {
                        className: o9.fC,
                        children: (0, m.jsx)("img", { src: c, alt: "", className: o9.qS }),
                    }),
            ],
        })
    );
}
function us(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, E.cf)([o5.Ay], () => ({
            badgeProgress: o5.Ay.getSingleRequirementProgress(oq.$.GIFTING)?.current ?? 0,
            currentTier: o5.Ay.getCurrentTier(oq.$.GIFTING),
            nextTier: o5.Ay.getNextTier(oq.$.GIFTING),
            giftsRemaining: o5.Ay.getRemainingToNextTier(oq.$.GIFTING),
            tiers: o5.Ay.getBadgeById(oq.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, m.jsxs)("div", {
              className: o9.kL,
              children: [
                  (0, m.jsxs)("div", {
                      className: o9.Jo,
                      children: [
                          n > 0 &&
                              (0, m.jsxs)(m.Fragment, {
                                  children: [
                                      (0, m.jsx)(ul, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, m.jsx)("div", { className: o9.yF }),
                                  ],
                              }),
                          (0, m.jsx)(un, { tiers: r, currentTier: i }),
                          (0, m.jsx)(Y.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: o9.PJ,
                              children: L.intl.string(o7.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, m.jsx)(ui, { analyticsLocation: t, location: ue }),
              ],
          });
}
let ur = (0, u.zZ)(d.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => L.intl.string(o7.default.sFokBp),
        buildLayout: () => [ua],
        usePredicate: () => {
            let e = (0, o$.F5)("gift_inventory"),
                t = (0, E.bG)([o5.Ay], () => o5.Ay.getBadgeById(oq.$.GIFTING));
            return e && null != t;
        },
    }),
    ua = (0, u.E2)(d.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [L.intl.string(o7.default.sFokBp)],
        Component: () => (0, m.jsx)(us, {}),
    });
var uo = n(264779),
    uu = n(412260),
    ud = n(555393),
    uc = n(725807),
    ug = n(212168),
    um = n(469778),
    uA = n(45938),
    uE = n(109802),
    uh = n(869038),
    uS = n(380856);
function uT(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, m.jsxs)(lc.A, {
        className: is()(uS.wx, n),
        align: lc.A.Align.CENTER,
        children: [
            (0, m.jsx)("div", { className: uS.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function up(e) {
    let { children: t, className: n } = e;
    return (0, m.jsx)("div", { className: is()(uS.rf, n), children: t });
}
class ux extends A.PureComponent {
    static Header = uT;
    static Body = up;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, m.jsx)("div", { className: is()(uS.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var uf = n(165191),
    uI = n(871123),
    uN = n(366523),
    u_ = n(280450),
    uC = n(30793),
    ub = n(97352),
    uy = n(67480),
    uv = n(147925),
    uj = n(957565),
    uO = n(615396),
    uL = n(274904);
class uD extends A.PureComponent {
    _copyModeTimeout = new ry.Ep();
    state = { copyMode: uE.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case uE.q.SUCCESS:
                return L.intl.string(L.t.XVvPjU);
            case uE.q.ERROR:
                return L.intl.string(L.t.i4GM3L);
            default:
                return L.intl.string(L.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        uh.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, uA.AK)(t, n),
            (0, uj.C)(
                e,
                () => this.setState({ copyMode: uE.q.SUCCESS }),
                () => this.setState({ copyMode: uE.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: uE.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, m.jsxs)(lc.A, {
            direction: lc.A.Direction.VERTICAL,
            className: uL.Gj,
            children: [
                (0, m.jsx)(uE.e, {
                    className: uL.ph,
                    value: (0, uA.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uj.p5,
                    hideMessage: e ? L.intl.string(L.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: sV.XD.BRAND,
                    buttonLook: sV.pR.FILLED,
                }),
                (0, m.jsxs)("div", {
                    className: uL.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, m.jsxs)(A.Fragment, {
                                  children: [
                                      L.intl.format(L.t.ltVZcJ, { hours: t.expiresAt.diff(ia()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, m.jsx)(n$.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: L.intl.string(L.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class uR extends A.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await uh.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && uh.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, uI.bF)(e)
            ? (0, m.jsx)(uN.e, { shape: "square", sku: e, containerClassName: uL.ez })
            : null != t
              ? (0, m.jsx)(uf.A, { giftStyle: t, className: uL.ez, shouldAnimate: this.state.isHovered })
              : (0, m.jsx)(i$.A, { game: n, size: i$.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, uI.bF)(e)
            ? (0, m.jsxs)("div", {
                  className: is()(uL.Oc, uL.ic),
                  children: [
                      (0, m.jsx)(i$.A, { game: n, size: i$.M.XSMALL, skuId: e.id, className: uL._u }),
                      L.intl.format(L.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, m.jsx)("div", { className: uL.Oc, children: L.intl.format(L.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tz.FB
                    ? L.intl.string(L.t.odsU6W)
                    : i === tz.Bu && null != n
                      ? L.intl.formatToPlainString(n.interval === tz.WT.MONTH ? L.t.uZjpiJ : L.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : L.intl.formatToPlainString(n.interval === tz.WT.MONTH ? L.t.rCJvqo : L.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, m.jsx)("div", { className: uL.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, m.jsxs)(lc.A, {
            justify: lc.A.Justify.BETWEEN,
            align: lc.A.Align.CENTER,
            className: uL.pe,
            children: [
                (0, m.jsx)(Y.E, { variant: "text-md/normal", children: L.intl.string(L.t.lELyPj) }),
                (0, m.jsx)(I.$, {
                    variant: "primary",
                    size: "sm",
                    text: L.intl.string(L.t.Q3Qguo),
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
        return (0, m.jsxs)(ux, {
            className: i,
            children: [
                (0, m.jsx)(n$.D, {
                    onClick: this.handleToggleOpen,
                    className: uL.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, m.jsx)(ux.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, m.jsxs)("div", {
                            className: uL.MY,
                            children: [
                                (0, m.jsxs)(lc.A, {
                                    align: lc.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, m.jsxs)("div", {
                                            className: uL.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, m.jsx)(uv.A, {
                                    direction: a ? uv.A.Directions.UP : uv.A.Directions.DOWN,
                                    className: uL.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, m.jsx)(ux.Body, {
                          children: s
                              ? (0, m.jsx)(a9.y, { className: uL.u1 })
                              : (0, m.jsxs)(A.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, m.jsx)(uD, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let uP = E.Ay.connectStores([uy.A, e9.A, uC.A, iK.A, ub.A, u_.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = uy.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = uC.A.getForGifterSKUAndPlan(u_.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: e9.A.enabled,
        isFetching: uC.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: uC.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: iK.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, uO.c9)(n) : null,
        giftCodes: s,
    };
})(uR);
var uG = n(725570),
    uM = n(736653),
    uU = n(46054);
let uV = ia().duration(30, "days");
var uk = n(416052),
    uw = n(878309);
function uF(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, m.jsx)(ls.Modal, {
        title: "",
        size: "md",
        input: (0, m.jsx)("div", { className: uw.aR }),
        onClose: async () => await t(),
        actions: [{ text: L.intl.string(L.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, m.jsxs)("div", {
            className: uw.t4,
            children: [
                (0, m.jsx)(T.D, { variant: "heading-xl/semibold", children: L.intl.string(L.t.iufib1) }),
                (0, m.jsx)(Y.E, { variant: "text-md/normal", className: uw.G3, children: L.intl.string(L.t.eAn6z2) }),
            ],
        }),
    });
}
let uB = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = A.useState(null),
        o = (0, tk.GV)(),
        { analyticsLocations: u } = (0, eR.Ay)(tO.A.USER_SETTINGS_GIFT_INVENTORY);
    return (A.useEffect(() => {
        null == i &&
            (0, uo.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, m.jsx)(uF, { onClose: t, transitionState: s })
        : null == i
          ? (0, m.jsx)(a9.y, { className: uw.Lq })
          : (0, m.jsx)(ls.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, m.jsxs)("div", {
                    className: uw.N1,
                    children: [
                        (0, m.jsx)("div", { className: uw.Qw }),
                        (0, m.jsx)(T.D, { variant: "heading-xl/semibold", children: L.intl.string(L.t["23BfZh"]) }),
                        (0, m.jsx)(Y.E, {
                            variant: "text-md/normal",
                            className: uw.G3,
                            children: l.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: L.intl.string(L.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: L.intl.string(L.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, uo.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, m.jsxs)("div", {
                    children: [
                        (0, m.jsx)(i4.c, { className: uw.M5 }),
                        (0, m.jsx)(tq.D, {
                            label: L.intl.string(L.t.s9LFQh),
                            helperText: L.intl.string(L.t["F+nFTZ"]),
                            children: (0, m.jsx)(uk.A, {
                                value: i,
                                buttonColor: sV.$n.Colors.BRAND,
                                buttonLook: sV.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uz = n(707554),
    uX = n(339048),
    uY = n(136380);
function uH() {
    let e = (0, E.yK)([um.A], () => um.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = F().groupBy(e, (e) => (0, uA.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = A.useState(!1);
    if (
        (A.useEffect(() => {
            e6.h.wait(() => {
                (0, uX.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, m.jsx)(a9.y, { className: uY.Lq });
    if (0 === Object.keys(t).length)
        return (0, m.jsxs)("div", {
            className: uY.p$,
            children: [
                (0, m.jsx)("div", { className: uY.QT }),
                (0, m.jsx)(uz.H, { className: uY.ks, children: L.intl.string(L.t.B1qgZn) }),
                (0, m.jsx)("p", {
                    className: uY.WO,
                    children: L.intl.format(L.t.HezvJ8, {
                        onClick: function () {
                            (0, ni.openUserSettings)(d.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let l = F()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: l } = (0, uA.X6)(e);
            return (0, m.jsx)(uP, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: l }, e);
        });
    return (0, m.jsx)(z.B, { gap: "lg", children: l });
}
function uK(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = A.useState(!1),
        [r, a] = A.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, uM.Ay)(),
        d = (0, uo.WD)(n.id, u),
        c = null != i,
        g = A.useMemo(
            () =>
                (0, io.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? ia()(n.outboundRedemptionEndDate)
                            : ia()(n.endDate).add(uV)
                        : ia()(n.endDate),
                    "LL",
                ),
            [n, c],
        );
    c && l
        ? (t = L.intl.format(L.t.pkxVx6, { endDate: g, onClickDetails: o }))
        : c && !l
          ? (t = L.intl.format(L.t["4sFeob"], { endDate: g, onClickDetails: o }))
          : !c && l
            ? (t = L.intl.format(L.t["RBnE+l"], { endDate: g, onClickDetails: o }))
            : c || l || (t = L.intl.format(L.t["57+7Qn"], { endDate: g, onClickDetails: o }));
    let E = c ? L.intl.string(L.t["2cHUti"]) : L.intl.string(L.t.O13yhz),
        h = (0, ud.N)()?.isEligible === !0,
        S = A.useCallback(() => a(!1), []),
        { outboundTitle: p, outboundTermsAndConditions: x } = n;
    return (0, m.jsxs)(m.Fragment, {
        children: [
            (0, m.jsxs)("div", {
                className: uY.AX,
                children: [
                    (0, m.jsxs)("div", {
                        className: uY.Pg,
                        children: [
                            (0, m.jsxs)("div", {
                                className: uY.At,
                                children: [
                                    (0, m.jsx)("div", {
                                        className: uY.$G,
                                        children: (0, m.jsx)("img", { alt: "", src: d, className: uY.IJ }),
                                    }),
                                    (0, m.jsxs)("div", {
                                        children: [
                                            (0, m.jsx)(T.D, { variant: "heading-md/semibold", children: p }),
                                            (0, m.jsx)(Y.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (c || h) && (0, m.jsx)(I.$, { text: E, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, m.jsx)(Y.E, {
                            className: uY.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: uU.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, m.jsx)(uG.aF, {
                    renderModal: (e) =>
                        (0, m.jsx)(uB, {
                            ...e,
                            onClose: S,
                            onClaim: o0.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: S,
                }),
        ],
    });
}
function uW(e) {
    let { redesign: t = !1 } = e,
        n = (0, E.yK)([um.A], () => um.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, ud.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, o1.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tz.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tz.Bu && !e.consumed) ?? [],
        [u, d] = F().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tz.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = l.length + s.length > 0,
        g =
            t || !c
                ? null
                : (0, m.jsxs)("div", {
                      className: uY.N1,
                      children: [
                          (0, m.jsx)(T.D, { variant: "heading-md/semibold", children: L.intl.string(L.t.wFsj3B) }),
                          (0, m.jsx)(i4.c, { className: uY.yF }),
                      ],
                  }),
        A =
            !1 === i && c
                ? (0, m.jsxs)("div", {
                      className: uY.uo,
                      children: [
                          (0, m.jsx)(r0.t, {
                              size: "md",
                              color: nq.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: uY.PC,
                          }),
                          (0, m.jsx)(Y.E, {
                              variant: "text-md/normal",
                              className: uY.Qw,
                              children: L.intl.format(L.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tM.default)(), (0, tJ.pX)(h.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, m.jsx)(uc.A, {
                              showGradient: !0,
                              className: uY.aA,
                              subscriptionTier: tz.pe.TIER_2,
                              textOptions: { textOverride: L.intl.string(L.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, m.jsxs)("div", {
        children: [
            g,
            (0, m.jsx)(ug.A, {
                className: uY.Yj,
                isShown: !1 === i && c,
                type: ug.i.PREMIUM,
                hasBackground: !0,
                children: (0, m.jsxs)("div", {
                    className: uY.DE,
                    children: [
                        A,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, m.jsx)(uK, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, m.jsx)(uK, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, m.jsx)(
                                  uP,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tz.FB,
                                  },
                                  (0, uA.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, m.jsx)(
                                  uP,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tz.Bu,
                                  },
                                  (0, uA.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, m.jsx)(
                                  uP,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tz.Bu,
                                  },
                                  (0, uA.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let uZ = (0, u.zZ)(d.X.MY_GIFTS_CATEGORY, {
        useTitle: uQ,
        buildLayout: () => [uq],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, E.cf)(
                    [uu.A],
                    () => ({
                        claimedOutboundPromotionCodes: uu.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: uu.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, o1.T1)({ includeClaimedPromotions: !0 }),
                i = (0, uo.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    uq = (0, u.E2)(d.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [uQ()],
        Component: () => (0, m.jsx)(uW, { redesign: !0 }),
    });
function uQ() {
    return L.intl.string(L.t.YzjdWJ);
}
let uJ = (0, u.zZ)(d.X.PURCHASED_GIFTS_CATEGORY, { useTitle: u0, buildLayout: () => [u$] }),
    u$ = (0, u.E2)(d.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [u0()], Component: () => (0, m.jsx)(uH, {}) });
function u0() {
    return L.intl.string(L.t.FWe6CP);
}
var u1 = n(532446),
    u2 = n(499454);
class u3 extends A.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: h.ZSU.BUTTON_CTA };
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
                    (await (0, or.Qp)(n),
                        (0, or.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, oe.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, uA.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await uh.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            (te.default.track(h.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: h.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: h.ZSU.BUTTON_CTA,
                },
            }),
                (0, u2.h)({ processedCode: e }),
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
            r = e ? L.intl.string(L.t["hVEn/j"]) : L.intl.string(L.t.SeKIoS),
            a = e ? L.intl.string(L.t.epHMtp) : void 0;
        return (0, m.jsx)(nJ.n, {
            label: e ? void 0 : L.intl.string(L.t["il+VCo"]),
            children: (0, m.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, m.jsxs)(u1.M, {
                    children: [
                        (0, m.jsx)(la.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !s && l ? L.intl.string(L.t.Y11a2u) : null,
                            helperText: s
                                ? L.intl.format(L.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${n}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, m.jsx)(I.$, {
                            variant: "primary",
                            text: L.intl.string(L.t.KIpp7M),
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
function u6(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, oM.c)({ location: "UserSettingsBilling" }),
        i = A.useContext(te.AnalyticsContext),
        l = (0, E.bG)([e9.A], () => e9.A.enabled);
    return (0, m.jsx)(u3, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let u5 = (0, u.zZ)(d.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => L.intl.string(L.t["il+VCo"]),
        buildLayout: () => [u4],
        usePredicate: () => !(0, o2.Hp)(),
    }),
    u4 = (0, u.E2)(d.X.REDEEM_CODE_INPUT, {
        Component: () => (0, m.jsx)(u6, { redesign: !0 }),
        useSearchTerms: () => [L.intl.string(L.t["jcSP+g"]), L.intl.string(L.t["il+VCo"])],
    }),
    u8 = (0, u.t_)(d.X.GIFT_PANEL, {
        useTitle: () => L.intl.string(L.t["jcSP+g"]),
        buildLayout: () => [u5, uZ, ur, uJ, o6],
        initialize: () => {
            (o0.Ay.fetchClaimedOutboundPromotionCodes(), (0, o$.Ig)("gift_inventory") && (0, oJ.o0)(oq.$.GIFTING));
        },
    }),
    u7 = (0, u.i4)(d.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t["jcSP+g"]),
        icon: oQ.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, o1.IO)().length;
            return A.useMemo(() => ({ badgeType: g.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [u8],
    });
var u9 = n(659758),
    de = n(408510),
    dt = n(815846);
let dn = (0, u.E2)(d.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser());
            return (0, an.YE)(e, tz.PremiumTypes.TIER_2) ? (0, m.jsx)(dt.A, {}) : (0, m.jsx)(de.A, {});
        },
        useSearchTerms: () => [L.intl.string(L.t.Ipxkog)],
    }),
    di = (0, u.zZ)(d.X.NITRO_CATEGORY, { buildLayout: () => [dn] }),
    dl = (0, u.t_)(d.X.NITRO_PANEL, {
        useTitle: () => L.intl.string(L.t.Ipxkog),
        useObscuredNotice: a8.L,
        buildLayout: () => [di],
    }),
    ds = (0, u.i4)(d.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.Ipxkog),
        icon: r0.t,
        usePersistentBadge: function (e) {
            let t = (0, u9.e)(e);
            return A.useMemo(() => ({ badgeType: g.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [dl],
    });
var dr = n(104510),
    da = n(820739),
    du = n(73825),
    dd = n(160946),
    dc = n(859241),
    dg = n(531260),
    dm = n(527113),
    dA = n(338548),
    dE = n(776096),
    dh = n(711014),
    dS = n(178368),
    dT = n(809545),
    dp = n(168482);
function dx() {
    return (0, m.jsxs)("div", {
        className: dT.iE,
        children: [
            (0, m.jsx)("img", { className: dT.Kk, alt: "", src: dp }),
            (0, m.jsxs)("div", {
                className: dT.pq,
                children: [
                    (0, m.jsx)(Y.E, { variant: "text-lg/bold", children: L.intl.string(L.t.ZHNSYf) }),
                    (0, m.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: L.intl.string(L.t.kCj5ps),
                    }),
                ],
            }),
            (0, m.jsx)(I.$, {
                variant: "secondary",
                text: L.intl.string(L.t.JFlifp),
                onClick: function () {
                    ((0, tJ.pX)(h.BVt.GUILD_DISCOVERY), (0, tM.default)());
                },
            }),
        ],
    });
}
var df = n(365199),
    dI = n(878678),
    dN = n(443865),
    d_ = n(980707),
    dC = n(473145);
function db(e) {
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
                label: null != t.premiumGuildSubscription ? L.intl.string(L.t["PR0n//"]) : L.intl.string(L.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? L.intl.string(L.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: L.intl.string(L.t.twFU3R), subtext: l ? null : L.intl.string(L.t.oQ9lOh), disabled: !l },
            uncancel: { label: L.intl.string(L.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (s.status) {
        case h.Dmq.PAST_DUE:
            ((o.cancel.disabled = !0), (o.cancel.subtext = L.intl.string(L.t.WnL6DV)), (o.uncancel.disabled = !0));
            break;
        case h.Dmq.PAUSE_PENDING:
        case h.Dmq.PAUSED:
            a === tz.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = L.intl.string(L.t.LiLRRT)),
                (o.cancel.subtext = L.intl.string(L.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = A.useMemo(
        () =>
            s.isPausedOrPausePending && a === tz.xc.NONE
                ? (0, m.jsx)(e2.Dr, {
                      id: "manage-subscription",
                      label: L.intl.string(L.t.obRG6Y),
                      action: () => (0, ni.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: dN.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: dN.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, m.jsxs)(d_.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": L.intl.string(L.t.ogxXGq),
        onClose: i,
        children: [
            (0, m.jsx)(e2.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, lr.openModalLazy)(async () => {
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
                            (0, m.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: h.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, dC.I5)(t)
                ? (0, m.jsx)(e2.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, lr.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, m.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, m.jsx)(e2.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, lr.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, m.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var dy = n(545934),
    dv = n(548118),
    dj = n(987144),
    dO = n(864310),
    dL = n(290413);
function dD(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, dO.A)(t.id);
    return (0, m.jsxs)("div", {
        className: n ?? dL.OA,
        children: [
            (0, m.jsx)(dv.Ay, { className: dL.$f, guild: t, size: dv.Ay.Sizes.MEDIUM }),
            (0, m.jsxs)("div", {
                className: dL.gI,
                children: [
                    (0, m.jsx)(Y.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, m.jsxs)("div", {
                        className: dL.ew,
                        children: [
                            (0, m.jsxs)("div", {
                                className: dL.QW,
                                children: [
                                    (0, m.jsx)(dr._, {
                                        className: dL.Wz,
                                        color: nq.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, m.jsx)(Y.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: L.intl.format(L.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== h.TVA.NONE &&
                                (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        (0, m.jsx)("div", { className: dL.zk }),
                                        (0, m.jsx)(Y.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, dC.gb)(t.premiumTier, { useLevels: !1 }),
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
function dR(e) {
    let { guildId: t } = e,
        n = (0, E.bG)([lE.A], () => lE.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, m.jsxs)("div", {
              className: dL.Nr,
              children: [
                  (0, m.jsx)(dD, { guild: n }),
                  (0, m.jsx)(I.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: dr._,
                      text: L.intl.string(L.t.aBHecF),
                      onClick: () => {
                          (0, dj.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: h.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: h.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: h.ZSU.BUTTON_CTA,
                                  objectType: h.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var dP = n(747381);
let dG =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function dM(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = A.useRef(null),
        a = (0, dC.I5)(t),
        o = A.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, dg.A)(),
        c = A.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === h.TVA.NONE) return "";
                    let n = [
                        L.intl.formatToPlainString(L.t["dLlKX/"], { numEmojiSlots: tz.TG[e].limits.emoji }),
                        L.intl.formatToPlainString(L.t["+ANIfv"], { numStickerSlots: tz.TG[e].limits.stickers }),
                        L.intl.formatToPlainString(L.t["4gt60b"], {
                            numSoundboardSlots: tz.TG[e].limits.soundboardSounds,
                        }),
                        L.intl.formatToPlainString(L.t.XahSjZ, {
                            resolution: tz.TG[e].limits.screenShareQualityResolution,
                            framerate: tz.TG[e].limits.screenShareQualityFramerate,
                        }),
                        L.intl.formatToPlainString(L.t.NbNs7S, { bitrate: tz.TG[e].limits.bitrate / 1e3 }),
                        L.intl.formatToPlainString(L.t.VVKcpn, { filesize: tz.TG[e].limits.fileSize / 1024 / 1024 }),
                        L.intl.formatToPlainString(L.t.TbpCvv, { numVideoStageSeats: tz.TG[e].limits.stageVideoUsers }),
                        L.intl.string(L.t.LDyX3i),
                        L.intl.string(L.t.YtGlPW),
                    ];
                    (e >= h.TVA.TIER_2 && (n.push(L.intl.string(L.t.SztbtN)), n.push(L.intl.string(L.t["3GK91n"]))),
                        e >= h.TVA.TIER_3 && n.push(L.intl.string(L.t["XUUJd+"])));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return L.intl.formatToPlainString(L.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        g = A.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? od.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return L.intl.formatToPlainString(L.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        E = A.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        );
    return (0, m.jsxs)("div", {
        className: is()(dP.iq, { [dP.Mt]: s }),
        children: [
            (0, m.jsxs)("div", {
                className: dP.kd,
                children: [
                    (0, m.jsx)("img", { alt: "", className: dP.bB, src: dG }),
                    a && null != E
                        ? (0, m.jsx)(Y.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: L.intl.format(L.t.Z4ULRD, { date: E }),
                          })
                        : (0, m.jsxs)(m.Fragment, {
                              children: [
                                  (0, m.jsx)(Y.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, m.jsxs)(m.Fragment, {
                                          children: [
                                              (0, m.jsx)("div", { className: dP.zk }),
                                              (0, m.jsx)(Y.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: L.intl.formatToPlainString(L.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != i.trialEndsAt &&
                                      (0, m.jsxs)(m.Fragment, {
                                          children: [
                                              (0, m.jsx)("div", { className: dP.zk }),
                                              (0, m.jsx)(Y.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: L.intl.formatToPlainString(L.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, m.jsx)(r9.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, m.jsx)(db, {
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
                    (0, m.jsx)(n$.D, {
                        innerRef: r,
                        "aria-label": L.intl.string(L.t.PdRCRg),
                        className: dP.Mj,
                        ...e,
                        children: (0, m.jsx)(df.MoreHorizontalIcon, {
                            size: "xs",
                            color: nq.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function dU(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, E.bG)([lE.A], () => lE.A.getGuild(t), [t]);
    return (0, m.jsxs)("div", {
        className: dP.Nr,
        children: [
            (0, m.jsx)("div", {
                className: dP.MY,
                children:
                    null != s
                        ? (0, m.jsxs)(m.Fragment, {
                              children: [
                                  (0, m.jsx)(dD, { guild: s, className: dP.OA }),
                                  (0, m.jsx)(I.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: L.intl.string(L.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tM.default)(),
                                              (0, dI.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: h.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              }));
                                      },
                                  }),
                              ],
                          })
                        : (0, m.jsx)("div", {
                              className: dP.OA,
                              children: (0, m.jsx)(T.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: L.intl.string(L.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, m.jsx)(
                    dM,
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
function dV(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = A.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) (t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t));
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                dy.A.createFromServer(
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
                if ((!(0, dC.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in s || (s[e] = []), s[e].push(i));
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > an.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, m.jsx)("div", {
        className: dP.kR,
        children: od.default
            .keys(s)
            .map((e) => (0, m.jsx)(dU, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var dk = n(502572),
    dw = n(983511),
    dF = n(342744),
    dB = n(496431);
let dz = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, dB.A)(n);
    return (0, m.jsx)(Y.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, io.uN)(i, { days: L.t.WUTPDc, hours: L.t.c1qodV, minutes: L.t["2+A3dv"] }),
    });
};
var dX = n(731536);
function dY(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, E.bG)([oV.A], () => oV.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = A.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, dC.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? an.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === tz.xc.NONE;
    return 0 === s.length
        ? null
        : (0, m.jsxs)("div", {
              className: dX.Nr,
              children: [
                  (0, m.jsxs)("div", {
                      className: dX.MY,
                      children: [
                          (0, m.jsxs)("div", {
                              className: dX._L,
                              children: [
                                  (0, m.jsxs)("div", {
                                      className: dX.MD,
                                      children: [
                                          (0, m.jsx)("img", { alt: "", className: dX.F8, src: dG }),
                                          (0, m.jsx)("div", {
                                              className: is()(dX.qS, "theme-dark"),
                                              children: (0, m.jsx)("span", { className: dX.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, m.jsxs)("div", {
                                      className: dX.Qp,
                                      children: [
                                          (0, m.jsx)(Y.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: L.intl.format(L.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, m.jsx)(Y.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: L.intl.format(L.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, m.jsx)(dk.A, {
                              shouldShow: o,
                              text: L.intl.string(L.t.mOWsF1),
                              "aria-label": L.intl.string(L.t.mOWsF1),
                              children: (e) =>
                                  (0, m.jsx)(I.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: dr._,
                                      text: L.intl.string(L.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, lr.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("677508"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, m.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          (t.onClose(),
                                                              (0, dj.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: h.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: h.JJy.SETTINGS_PREMIUM,
                                                                      object: h.ZSU.BUTTON_CTA,
                                                                      objectType: h.AnalyticsObjectTypes.BUY,
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
                      (0, m.jsx)(
                          dH,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, dC.I5)(e),
                              isCanceled: (0, dC.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function dH(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = A.useRef(null),
        u = A.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        s && null != r
            ? (0, m.jsx)(Y.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: L.intl.format(L.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != u
              ? (0, m.jsx)(dz, { cooldown: u.getTime() })
              : (0, m.jsx)(Y.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: L.intl.string(L.t["2mcafz"]),
                });
    let d = l || s;
    return (0, m.jsxs)("div", {
        className: is()(dX.iq, { [dX.Mt]: i }),
        children: [
            (0, m.jsxs)("div", {
                className: dX.kd,
                children: [(0, m.jsx)("img", { alt: "", className: dX.bB, src: dG }), t],
            }),
            d &&
                (0, m.jsx)(r9.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, m.jsxs)(d_.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": L.intl.string(L.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                l &&
                                    (0, m.jsx)(e2.Dr, {
                                        id: "cancel-boost",
                                        label: L.intl.string(L.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? L.intl.string(L.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, lr.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, m.jsx)(dw.default, { ...e, guildBoostSlot: n }),
                                                ));
                                        },
                                    }),
                                s &&
                                    (0, m.jsx)(e2.Dr, {
                                        id: "uncancel-boost",
                                        label: L.intl.string(L.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? L.intl.string(L.t.mOWsF1) : void 0,
                                        action: () => {
                                            (t(),
                                                (0, lr.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, m.jsx)(dF.default, { ...e, guildBoostSlotId: n.id }),
                                                ));
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, m.jsx)(n$.D, {
                            innerRef: o,
                            "aria-label": L.intl.string(L.t["UKOtz+"]),
                            className: dX.Mj,
                            ...e,
                            children: (0, m.jsx)(df.MoreHorizontalIcon, {
                                size: "xs",
                                color: nq.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var dK = n(834612);
function dW(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = ep.A.getArticleURL(h.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && s !== tz.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, m.jsxs)("div", {
              className: dK.i,
              children: [
                  (0, m.jsxs)("div", {
                      className: dK.b,
                      children: [
                          (0, m.jsx)(T.D, { variant: "heading-md/semibold", children: L.intl.string(L.t.W5rDjW) }),
                          (0, m.jsx)(Y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: L.intl.format(L.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, m.jsx)(dV, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, m.jsx)(dY, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var dZ = n(333722),
    dq = n(9146);
function dQ() {
    return (0, m.jsxs)("div", {
        className: dq.iE,
        children: [
            (0, m.jsx)(T.D, { variant: "heading-xl/normal", children: L.intl.string(L.t.IzKs3o) }),
            (0, m.jsx)("div", {
                className: dq.kR,
                children: dZ.s.map((e, t) => {
                    let n = e.icon;
                    return (0, m.jsxs)(
                        "div",
                        {
                            className: dq.Nr,
                            children: [
                                (0, m.jsx)(n, { className: dq.Kk }),
                                (0, m.jsx)(Y.E, {
                                    className: dq.h_,
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
var dJ = n(847374),
    d$ = n(232122),
    d0 = n(665984);
function d1() {
    let [e, t] = A.useState(null),
        [n, i] = A.useState(null);
    return (0, m.jsxs)("div", {
        className: d0.iE,
        children: [
            (0, m.jsx)(T.D, { variant: "heading-xl/normal", children: L.intl.string(L.t.HPJ6Nj) }),
            (0, m.jsx)("ul", {
                className: d0.p_,
                children: d$.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, m.jsxs)(
                        n$.D,
                        {
                            tag: "li",
                            className: is()(d0.Aw, { [d0.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, m.jsxs)("div", {
                                    className: d0.k7,
                                    children: [
                                        (0, m.jsx)(Y.E, {
                                            className: d0.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, m.jsx)(dJ.a, {
                                            size: "sm",
                                            color: nq.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: d0.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, m.jsx)(Y.E, {
                                        className: d0.ZF,
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
var d2 = n(182859),
    d3 = n(25525),
    d6 = n(416763);
function d5() {
    let e = ep.A.getArticleURL(h.MVz.GUILD_SUBSCRIPTIONS);
    return (0, m.jsxs)("div", {
        className: d6.wx,
        children: [
            (0, m.jsxs)("div", {
                className: d6.Qs,
                children: [
                    (0, m.jsxs)("div", {
                        className: d6.B5,
                        children: [
                            (0, m.jsx)("img", { alt: "", className: d6.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, m.jsx)(T.D, {
                                variant: "heading-xl/normal",
                                children: L.intl.string(d3.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, m.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: L.intl.format(L.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, m.jsx)(d2.A, {
                variant: "member",
                className: d6.iO,
                analyticsLocation: {
                    page: h.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: h.JJy.HERO,
                    object: h.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var d4 = n(315629),
    d8 = n(87719),
    d7 = n(961085);
function d9() {
    let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser());
    if (null == e || an.Ay.hasFreeBoosts(e)) return null;
    let t = ep.A.getArticleURL(h.MVz.GUILD_BOOSTING_FAQ);
    return (0, m.jsxs)(d4.h, {
        color: "nitro-pink",
        className: d7.vK,
        children: [
            (0, m.jsxs)("div", {
                className: d7.nw,
                children: [
                    (0, m.jsx)("img", { alt: "", className: d7.q3, src: dG }),
                    (0, m.jsxs)("div", {
                        className: d7.Tm,
                        children: [
                            (0, m.jsx)(Y.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: L.intl.format(L.t.Idh1Vs, { count: tz.M4, boostCount: tz.M4 }),
                            }),
                            (0, m.jsxs)("div", {
                                className: d7.xv,
                                children: [
                                    (0, m.jsx)(r0.t, { className: d7.nE }),
                                    (0, m.jsx)(Y.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: L.intl.format(L.t["6UAu+f"], {
                                            count: tz.M4,
                                            boostCount: tz.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, m.jsx)(I.$, {
                variant: "expressive",
                size: "sm",
                icon: r0.t,
                text: L.intl.string(L.t["8x0jKT"]),
                onClick: d8.e,
            }),
        ],
    });
}
var ce = n(532991);
function ct() {
    let e = (0, E.bG)([dE.A], () => dE.A.affinities),
        t = (0, E.bG)([dh.Ay], () => dh.Ay.getFlattenedGuildIds()),
        n = A.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, m.jsxs)("div", {
              className: ce.i,
              children: [
                  (0, m.jsx)(T.D, { variant: "heading-md/semibold", children: L.intl.string(L.t.r90Wgo) }),
                  (0, m.jsx)("div", { className: ce.k, children: n.map((e) => (0, m.jsx)(dR, { guildId: e }, e)) }),
              ],
          });
}
var cn = n(967246);
function ci(e) {
    let { count: t, disabledReason: i } = e,
        l = ep.A.getArticleURL(h.MVz.GUILD_BOOSTING_FAQ);
    return (0, m.jsxs)(d4.h, {
        color: "nitro-pink",
        className: cn.vK,
        children: [
            (0, m.jsxs)("div", {
                className: cn.nw,
                children: [
                    (0, m.jsxs)("div", {
                        className: cn.MD,
                        children: [
                            (0, m.jsx)("img", { alt: "", className: cn.F8, src: dG }),
                            (0, m.jsx)("div", {
                                className: is()(cn.qS, "theme-dark"),
                                children: (0, m.jsx)("span", { className: cn.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, m.jsxs)("div", {
                        className: cn.Tm,
                        children: [
                            (0, m.jsx)(Y.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: L.intl.format(L.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, m.jsxs)("div", {
                                className: cn.xv,
                                children: [
                                    (0, m.jsx)(r0.t, { className: cn.nE }),
                                    (0, m.jsx)(Y.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: L.intl.format(L.t["6UAu+f"], {
                                            count: tz.M4,
                                            boostCount: tz.M4,
                                            helpdeskArticle: l,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, m.jsx)(dk.A, {
                shouldShow: null != i,
                text: i ?? "",
                "aria-label": i,
                children: (e) =>
                    (0, m.jsx)(I.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: dr._,
                        text: L.intl.string(L.t.BMx1iy),
                        disabled: null != i,
                        onClick: () => {
                            (0, lr.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("677508"), n.e("418710")]).then(
                                    n.bind(n, 770101),
                                );
                                return (t) =>
                                    (0, m.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            (t.onClose(),
                                                (0, dj.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: h.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: h.JJy.SETTINGS_PREMIUM,
                                                        object: h.ZSU.BUTTON_CTA,
                                                        objectType: h.AnalyticsObjectTypes.BUY,
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
var cl = n(89150);
function cs(e) {
    let { premiumSubscription: t } = e,
        n = (0, E.bG)([dS.A], () => dS.A.boostSlots),
        i = A.useMemo(() => Object.values(n), [n]),
        l = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()),
        s = (0, E.bG)([dE.A], () => dE.A.affinities),
        r = (0, E.bG)([dh.Ay], () => dh.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = A.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]).length,
        u = (0, E.bG)([dc.A], () => dc.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, dg.A)({ forceFetch: !0 }),
        c = l?.isPremiumGroupMember(),
        g = t?.isPausedOrPausePending === !0 && d === tz.xc.NONE,
        h = A.useMemo(() => i.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [i]),
        S = g ? L.intl.string(L.t.mOWsF1) : h ? void 0 : L.intl.string(L.t.xr4m5B),
        T = A.useMemo(() => {
            if (null == t) return 0;
            let e = an.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : Math.max(0, e - o);
        }, [t, i.length, o]);
    return (0, m.jsxs)("div", {
        className: cl.GO,
        children: [
            (0, m.jsx)(oY.kb, { className: cl.ek }),
            (0, m.jsx)(d5, {}),
            (0, m.jsx)(d9, {}),
            T > 0 && (0, m.jsx)(ci, { count: T, disabledReason: S }),
            c && (0, m.jsx)(dA.A, {}),
            !a && (0, m.jsx)(dx, {}),
            (0, m.jsxs)("div", {
                className: cl.C_,
                children: [
                    (0, m.jsx)(dW, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, m.jsx)(ct, {}),
                    (0, m.jsx)(dm.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, m.jsx)(dQ, {}),
                    (0, m.jsx)(d1, {}),
                ],
            }),
        ],
    });
}
var cr = n(819677);
let ca = (0, u.E2)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            A.useEffect(() => {
                e6.h.wait(() => {
                    (os.hP(), os.$o(), (0, da.CD)(), (0, du.zS)(null, null, h.tF5.DISCOVERY), (0, da.tO)(!0));
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, E.cf)([oV.A], () => ({
                    hasFetchedSubscriptions: oV.A.hasFetchedSubscriptions(),
                    premiumSubscription: oV.A.getPremiumTypeSubscription(),
                })),
                n = (0, dd.Y)(),
                i = (0, E.bG)([oU.A], () => oU.A.hasFetchedPaymentSources),
                l = (0, E.bG)([dc.A], () => dc.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = A.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, m.jsx)("div", { className: is()(cr.kL, cr.Lq), children: (0, m.jsx)(a9.y, {}) })
                : (0, m.jsxs)("div", {
                      className: cr.kL,
                      children: [
                          (0, m.jsx)("div", { className: cr.Tp }),
                          (0, m.jsx)("div", { className: cr.Qs, children: (0, m.jsx)(cs, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [L.intl.string(L.t["+CbP2v"]), L.intl.string(L.t.Nn1lJy)],
    }),
    co = (0, u.zZ)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [ca] }),
    cu = (0, u.t_)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => L.intl.string(L.t["+CbP2v"]),
        buildLayout: () => [co],
    }),
    cd = (0, u.i4)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t["+CbP2v"]),
        icon: dr._,
        buildLayout: () => [cu],
    });
var cc = n(153659),
    cg = n(155984),
    cm = n(357758),
    cA = n(262077),
    cE = n(281445),
    ch = n(933832),
    cS = n(624479),
    cT = n(626584),
    cp = n(131607),
    cx = n(95035),
    cf = n(580630),
    cI = n(196736),
    cN = n(685743),
    c_ = n(349085),
    cC = n(342942),
    cb = n(376205),
    cy = n(252589),
    cv = n(758836),
    cj = n(49999),
    cO = n(394107),
    cL = n(439050);
let cD = new cT.A("GameServerSubscriptionsSection");
function cR(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function cP(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let cG = A.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: l } = (0, eR.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, c_.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, cp.kn)([eo.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eo.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = u_.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: S } = (0, cN.A)(c, t.id, tO.A.GAME_SERVER_PAGE, t.serverIp),
        T = A.useCallback(() => {
            (0, cC.A)({
                provider: cE.X.SHOCKBYTE,
                onAccept: () => {
                    (u(cj.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: p,
            priceLabel: x,
            dateLabel: f,
            isCanceled: N,
            isDanger: _,
        } = (0, E.bG)(
            [oV.A, ub.A],
            () => {
                let e = null != s ? oV.A.getSubscriptionById(s) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? ub.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? L.intl.formatToPlainString(L.t.AbOLNu, { price: (0, cf.$g)(u, o.priceCurrency) })
                            : null,
                    c = cR(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? L.intl.formatToPlainString(cO.default["3aEgK6"], { date: c })
                        : l
                          ? L.intl.formatToPlainString(cO.default.KFSA3M, { date: c })
                          : L.intl.formatToPlainString(cO.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, n, i],
            cP,
        ),
        C = A.useCallback(() => {
            if (null == s) return;
            let e = oV.A.getSubscriptionById(s),
                t = null != e ? cR(e.currentPeriodEnd) : "";
            (0, nQ.A)({
                title: L.intl.string(cO.default.TEYPNR),
                subtitle: L.intl.formatToPlainString(cO.default.XR1WrB, { date: t }),
                confirmText: L.intl.string(L.t["cY+Oob"]),
                cancelText: L.intl.string(cO.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await os.M2(s, l), await os.hP());
                    } catch (e) {
                        cD.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        b = A.useCallback(() => {
            if (null == s) return;
            let e = oV.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? ub.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, cf.$g)(u, o.priceCurrency) : "",
                c = cR(e.currentPeriodEnd);
            (0, nQ.A)({
                title: L.intl.string(cO.default.o96qbc),
                subtitle: L.intl.formatToPlainString(cO.default["7n6Qq+"], { price: d, date: c }),
                confirmText: L.intl.string(L.t.iIvF2z),
                cancelText: L.intl.string(L.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, du.ur)(r);
                        let t = e.items;
                        (await os.nV(
                            e,
                            { status: h.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, an.UC)(t, e.currency),
                            l,
                        ),
                            await os.hP());
                    } catch (e) {
                        cD.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, m.jsxs)("div", {
        className: cL.nM,
        children: [
            (0, m.jsxs)("div", {
                className: cL.M4,
                children: [
                    (0, m.jsxs)("div", {
                        className: cL.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, m.jsx)("img", { className: cL.uP, src: a, alt: "" }),
                            (0, m.jsx)("div", { className: cL.tw }),
                        ],
                    }),
                    (0, m.jsxs)("div", {
                        className: cL.CR,
                        children: [
                            (0, m.jsx)(Y.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, m.jsx)(Y.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            y &&
                                (d
                                    ? (0, m.jsxs)("div", {
                                          className: cL.CQ,
                                          children: [
                                              (0, m.jsx)(Y.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, m.jsx)(n$.D, {
                                                  className: cL.cL,
                                                  onClick: g,
                                                  "aria-label": L.intl.string(L.t.OpuAlK),
                                                  children: S
                                                      ? (0, m.jsx)(ch.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, m.jsx)(cS.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, m.jsx)(cx.A, { onClick: T, children: L.intl.string(cO.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, m.jsxs)("div", {
                className: cL.Rd,
                children: [
                    (0, m.jsxs)("div", {
                        className: cL.Ff,
                        children: [
                            null != x &&
                                (0, m.jsx)(Y.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: x,
                                }),
                            null != f &&
                                (_
                                    ? (0, m.jsxs)("div", {
                                          className: cL.ez,
                                          children: [
                                              (0, m.jsx)(iX.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, m.jsx)(Y.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: f,
                                              }),
                                          ],
                                      })
                                    : (0, m.jsx)(Y.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: f,
                                      })),
                        ],
                    }),
                    p &&
                        (N
                            ? (0, m.jsx)(I.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: L.intl.string(L.t.iIvF2z),
                                  onClick: b,
                              })
                            : (0, m.jsx)(I.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: L.intl.string(L.t["ETE/oC"]),
                                  onClick: C,
                              })),
                ],
            }),
        ],
    });
});
function cM(e) {
    let { servers: t } = e,
        n = (0, cI.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, cy.Y)(),
        l = (0, E.bG)([sn.default], () => an.Ay.canUseShopDiscounts(sn.default.getCurrentUser())),
        s = A.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, E.yK)([oV.A], () => (0, cb.HY)(t, i, (e) => oV.A.getSubscriptionById(e)), [t, i]);
    A.useEffect(() => {
        let e = r.filter((e) => !ub.A.isLoadedForSKU(e) && !ub.A.isFetchingForSKU(e));
        e.length > 0 && (0, du.jv)(e).catch(() => {});
    }, [r]);
    let a = A.useCallback(() => {
        ((0, tM.default)(), (0, tJ.pX)(h.BVt.COLLECTIBLES_SHOP_WITH_TAB(cv.G2.GAME_SERVERS)));
    }, []);
    return (0, m.jsxs)("div", {
        className: cL.uW,
        children: [
            (0, m.jsxs)("div", {
                className: cL.wx,
                children: [
                    (0, m.jsx)(Y.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: L.intl.string(cO.default.vCzwM7),
                    }),
                    (0, m.jsxs)("div", {
                        className: cL.h_,
                        children: [
                            (0, m.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: L.intl.string(cO.default.y85Eg9),
                            }),
                            n &&
                                (0, m.jsx)(cx.A, {
                                    onClick: a,
                                    children: (0, m.jsx)(Y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: L.intl.string(cO.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, m.jsx)("div", {
                className: cL.p_,
                children: t.map((e) =>
                    (0, m.jsx)(cG, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var cU = n(55766),
    cV = n(696986),
    ck = n(364036);
function cw(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, m.jsxs)("div", {
        children: [
            (0, m.jsx)(T.D, { variant: "heading-md/bold", children: L.intl.string(L.t["KzCF/6"]) }),
            (0, m.jsx)(cV.h, { size: 4 }),
            (0, m.jsx)(Y.E, { variant: "text-md/normal", className: ck.yV, children: L.intl.string(L.t["3D7qCu"]) }),
            (0, m.jsx)(cV.h, { size: 24 }),
            (0, m.jsxs)("div", {
                className: ck.Nr,
                children: [
                    (0, m.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: ck.RI }),
                    (0, m.jsxs)("div", {
                        className: ck.FS,
                        children: [
                            (0, m.jsx)(T.D, {
                                variant: "heading-xl/semibold",
                                className: ck.wx,
                                children: L.intl.string(L.t["KzCF/6"]),
                            }),
                            (0, m.jsx)(Y.E, {
                                variant: "text-md/normal",
                                className: ck.h_,
                                children: L.intl.format(L.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, m.jsx)(I.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: L.intl.string(L.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var cF = n(872351),
    cB = n(9113),
    cz = n(599941),
    cX = n(384684),
    cY = n(2242);
let cH = [];
var cK = n(885574),
    cW = n(912851),
    cZ = n(182744);
let cq = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, m.jsx)(n$.D, {
        onClick: i ? void 0 : n,
        className: cZ.x6,
        children: (0, m.jsxs)("div", {
            className: cZ.hQ,
            children: [
                i
                    ? (0, m.jsx)(a9.y, { type: a9.y.Type.PULSING_ELLIPSIS, className: cZ.__invalid_spinner })
                    : (0, m.jsx)(Y.E, { variant: "text-md/medium", className: cZ.Pf, children: t }),
                (0, m.jsx)(dJ.a, { size: "md", color: "currentColor", className: cZ.UE }),
            ],
        }),
    });
};
var cQ = n(465932),
    cJ = n(543767),
    c$ = n(951555),
    c0 = n(790284),
    c1 = n(636194),
    c2 = n(624456),
    c3 = n(710144),
    c6 = n(815332),
    c5 = n(162093),
    c4 = n(557506);
function c8(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: l, onClose: s } = e,
        r = (0, tk.GV)(),
        { analyticsLocations: a } = (0, eR.Ay)(tO.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = A.useState(!1),
                [i, l] = A.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return (n(!0), await os.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === cY.bN.CHANNEL),
        E = i.role_benefits.benefits.filter((e) => e.ref_type === cY.bN.INTANGIBLE),
        h = ia()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        S = L.intl.formatToPlainString(L.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: E.length,
            subscriptionEndDate: h,
        });
    return (0, m.jsx)(ls.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: L.intl.string(L.t.EP6EPb), variant: "secondary", onClick: s },
            { variant: "critical-primary", text: L.intl.string(L.t.F6lUDF), onClick: c, loading: d },
        ],
        title: L.intl.string(L.t.O6l5tM),
        subtitle: S,
        onClose: s,
        children: (0, m.jsxs)(z.B, {
            gap: 8,
            children: [
                null != u ? (0, m.jsx)(iB.w, { type: "critical", children: u.message }) : null,
                (0, m.jsx)(c5.x, { listingId: i.id, guildId: n.guild_id, className: c4.P }),
            ],
        }),
    });
}
var c7 = n(319225),
    c9 = n(746080),
    ge = n(883616);
function gt(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, m.jsxs)("div", {
        className: ge.L0,
        children: [
            (0, m.jsxs)("div", {
                className: ge.a5,
                children: [
                    (0, m.jsx)(T.D, { variant: "heading-deprecated-12/semibold", className: ge.HU, children: t }),
                    i &&
                        (0, m.jsx)(le.m, {
                            text: l,
                            children: (0, m.jsx)(cK.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: ge.Mo,
                            }),
                        }),
                ],
            }),
            (0, m.jsx)(T.D, { variant: "heading-xl/semibold", className: ge.sx, children: n }),
        ],
    });
}
function gn(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eR.Ay)(),
        [i] = (0, cJ.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tO.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [l, s] = (0, E.yK)([oU.A], () => [oU.A.hasFetchedPaymentSources, oU.A.paymentSourceFetchError]);
    return null != i && (l || s)
        ? (0, m.jsx)(c$.A, { subscription: t, currentInvoicePreview: i })
        : (0, m.jsx)(a9.y, {});
}
function gi(e) {
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
        : (0, m.jsx)(tq.D, {
              label: L.intl.string(L.t["4neDM+"]),
              children: (0, m.jsx)("div", {
                  className: ge.__invalid_rowButtons,
                  children: n
                      ? (0, m.jsx)(I.$, { variant: "primary", text: L.intl.string(L.t.y3mAE4), onClick: r, loading: i })
                      : (0, m.jsxs)(m.Fragment, {
                            children: [
                                !t && !l && (0, m.jsx)(cq, { label: L.intl.string(L.t.FRbWR8), onClick: a }),
                                (0, m.jsx)(cq, { label: L.intl.string(L.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let gl = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, c2.M)(e),
                n = (0, E.bG)([c1.A], () => c1.A.getSubscriptionListingForPlan(t)),
                i = (0, E.bG)([c1.A], () =>
                    null != n ? c1.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, E.bG)([lE.A], () => lE.A.getGuild(i?.guild_id)),
                [s, r] = A.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, cz.XE)();
            A.useEffect(() => {
                s && null != l && null == c1.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = ia()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, cf.$g)(t.price, t.currency) : "",
                              l = ia()(t.createdAt).format("M/D/YY"),
                              s = t.status === h.Dmq.CANCELED,
                              r = t.status === h.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: l,
                              nextRenewalDate: n,
                              nextRenewalLabel: s ? L.intl.string(L.t.UAfot2) : L.intl.string(L.t.CVjLcM),
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
        [o, u] = A.useState(!1),
        c = (0, tk.GV)(),
        { analyticsLocations: g } = (0, eR.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: S } = (0, cQ.MH)(l?.id),
        T = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function p() {
        try {
            (u(!0),
                await os.QP(t, g),
                (0, c7.E)({ title: L.intl.string(L.t.oPV2cy), body: L.intl.string(L.t.DdRizV) }));
        } finally {
            u(!1);
        }
    }
    let {
            isCancelled: x,
            isPastDue: f,
            subscriptionPrice: I,
            memberSince: N,
            nextRenewalDate: _,
            nextRenewalLabel: C,
            isTrial: b,
        } = a,
        y = n.soft_deleted || null == l || T;
    return (0, m.jsxs)("div", {
        className: ge.kL,
        children: [
            (0, m.jsx)(c3.A, {
                onClick: r,
                className: ge.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            null != l && (0, m.jsx)(dv.Ay, { guild: l, active: !0, size: dv.Ay.Sizes.MEDIUM }),
                            (0, m.jsxs)("div", {
                                className: ge.if,
                                children: [
                                    (0, m.jsx)(Y.E, {
                                        variant: "text-md/medium",
                                        className: ge.J5,
                                        children: null != l ? l.name : L.intl.string(L.t["He+cmd"]),
                                    }),
                                    (0, m.jsxs)("div", {
                                        className: ge.xp,
                                        children: [
                                            (0, m.jsx)(Y.E, {
                                                variant: "text-sm/normal",
                                                className: ge.KR,
                                                children: n.name,
                                            }),
                                            x
                                                ? (0, m.jsx)(tt.Lp, { text: L.intl.string(L.t["7uFZGt"]) })
                                                : b
                                                  ? (0, m.jsx)(tt.Lp, {
                                                        text: L.intl.string(L.t["6anton"]),
                                                        color: nq.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : f
                                                    ? (0, m.jsx)(le.m, {
                                                          text: L.intl.string(L.t.eSuJE2),
                                                          children: (0, m.jsx)("div", {
                                                              children: (0, m.jsx)(tt.Lp, {
                                                                  className: ge.qc,
                                                                  text: L.intl.string(L.t.NrRwIl),
                                                                  color: nq.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            T
                                                ? (0, m.jsx)(le.m, {
                                                      text: L.intl.string(L.t.nv1IqK),
                                                      children: (0, m.jsx)("div", {
                                                          children: (0, m.jsx)(tt.Lp, {
                                                              text: L.intl.string(L.t["sBl3X/"]),
                                                              color: nq.A.colors.BACKGROUND_MOD_MUTED.css,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, m.jsx)(n$.D, {
                                onClick: i(r),
                                "aria-label": L.intl.string(L.t.e5eQOy),
                                "aria-controls": c,
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, m.jsx)(dJ.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: is()(ge.D6, { [ge.S7]: s }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && s
                ? (0, m.jsxs)("div", {
                      id: c,
                      children: [
                          (0, m.jsx)("div", { className: ge.yF }),
                          (0, m.jsx)(c6.A, { groupListingId: i.id, subscription: t, className: ge.kE }),
                          (0, m.jsxs)("div", {
                              className: ge.Zx,
                              children: [
                                  (0, m.jsx)(gt, { label: C, value: _ }),
                                  (0, m.jsx)(gt, {
                                      label: L.intl.string(L.t.dltUMH),
                                      value: I,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? L.intl.string(L.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, m.jsx)(gt, { label: L.intl.string(L.t.AOcwWB), value: N }),
                              ],
                          }),
                          (0, m.jsx)(cV.h, { size: 16 }),
                          !x &&
                              !T &&
                              (0, m.jsx)(tq.D, {
                                  label: L.intl.string(L.t.wmMFvA),
                                  children: (0, m.jsx)(gn, { subscription: t }),
                              }),
                          !y &&
                              (0, m.jsx)(gi, {
                                  isTrial: b,
                                  isCancelled: x,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: S,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, lr.openModal)((t) => (0, m.jsx)(c8, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, tJ.pX)(h.BVt.CHANNEL(l.id, c9.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tM.default)(),
                                          cW.A.show(
                                              h.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              L.intl.string(L.t.DvbaM4),
                                              () => {
                                                  (c0.A.setState({ subsection: e_.nR }),
                                                      (0, ni.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL));
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
var gs = n(661097);
let gr = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, E.bG)([cX.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [cX.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? cY.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? cY.M_.NONE
                                  : cY.M_.IN_SUBSCRIPTION_SERVER;
                        })([cX.A]),
                    ) === cY.M_.SUBSCRIBED,
                n = (0, E.bG)([oV.A], () => oV.A.getActiveGuildSubscriptions()),
                i = A.useRef(!1);
            return (
                A.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = oV.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !oV.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), os.hP());
                }, [e, t]),
                n ?? cH
            );
        })(),
        { loading: i } = (0, cz.eb)(n);
    return ((0, cB.A)(oc.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, m.jsx)(a9.y, {})
        : 0 === n.length
          ? null
          : (0, m.jsxs)("div", {
                children: [
                    (0, m.jsx)(I.$, { text: L.intl.string(L.t.hqyhKQ), icon: cF.z, variant: "secondary", onClick: t }),
                    (0, m.jsx)(cV.h, { size: 10 }),
                    (0, m.jsx)(nJ.n, {
                        label: L.intl.string(L.t["KzCF/6"]),
                        description: L.intl.string(L.t["Y+ucR7"]),
                        children: (0, m.jsx)("div", {
                            className: gs.A,
                            children: n.map((e) => (0, m.jsx)(gl, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var ga = n(327479),
    go = n(932012);
function gu(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, m.jsxs)("div", {
        children: [
            (0, m.jsx)(T.D, { variant: "heading-md/bold", children: L.intl.string(L.t["48ywCu"]) }),
            (0, m.jsx)(cV.h, { size: 4 }),
            (0, m.jsx)(Y.E, { variant: "text-md/normal", className: go.yV, children: L.intl.string(L.t.VWxmSo) }),
            (0, m.jsx)(cV.h, { size: 24 }),
            (0, m.jsxs)("div", {
                className: go.Nr,
                children: [
                    (0, m.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: go._e }),
                    (0, m.jsxs)("div", {
                        className: go.FS,
                        children: [
                            (0, m.jsx)(T.D, {
                                variant: "heading-xl/semibold",
                                className: go.wx,
                                children: L.intl.string(L.t["48ywCu"]),
                            }),
                            (0, m.jsx)(Y.E, {
                                variant: "text-md/normal",
                                className: go.h_,
                                children: L.intl.format(L.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, m.jsx)(ga.A, { onClick: t, text: L.intl.string(L.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var gd = n(548411),
    gc = n(417098),
    gg = n(143582),
    gm = n(915043),
    gA = n(631466);
function gE(e) {
    let { className: t, header: n, headerClassName: i, children: l } = e,
        s = A.useMemo(() => {
            let e = !1;
            return (
                A.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, m.jsxs)("div", {
        className: is()(gA.iE, t),
        children: [
            (0, m.jsx)("div", { className: is()(gA.wx, i), children: n }),
            s && (0, m.jsx)("div", { className: gA.Qs, children: l }),
        ],
    });
}
var gh = n(885996),
    gS = n(144165),
    gT = n(664121),
    gp = n(950305),
    gx = n(943775),
    gf = n(123791),
    gI = n(900797),
    gN = n(611643);
let g_ = A.createContext({ isOpen: !1, toggleOpen: () => {} });
function gC(e) {
    let { children: t } = e,
        [n, i] = A.useReducer((e) => !e, !1),
        l = A.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, m.jsx)(g_.Provider, { value: l, children: t(n) });
}
gC.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = A.useContext(g_),
        s = i ? gI.t : dJ.a,
        r = null != n ? n : i ? L.intl.string(L.t.fgq1gs) : L.intl.string(L.t.XJuakA);
    return (0, m.jsxs)(n$.D, {
        className: is()(gN.L, t),
        onClick: l,
        children: [
            (0, m.jsx)(Y.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, m.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var gb = n(627363),
    gy = n(243217),
    gv = n(328968),
    gj = n(163437),
    gO = n(3432);
function gL(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var gD = n(562312),
    gR = (((i = {})[(i.LOADING = 0)] = "LOADING"), (i[(i.DONE = 1)] = "DONE"), (i[(i.ERROR = 2)] = "ERROR"), i);
function gP(e) {
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
            isCancelled: S,
            isOrphanedGuildSubscription: p,
            renewalPlan: x,
        } = (0, E.cf)(
            [ub.A, uy.A, gv.A, lE.A],
            () => {
                let e,
                    n = ub.A.get(r),
                    i = null != n ? uy.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? gv.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, gj.PJ)(o.skuFlags),
                    d = u && null != l ? lE.A.getGuild(l) : void 0,
                    c = (0, gj.Uo)(t, i),
                    g = u && null != l && null == d;
                if (!1 === c && null != s && s.items.length > 0) {
                    let t = s.items[0];
                    e = ub.A.get(t.planId) ?? void 0;
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
        { data: f } = (0, gb.YY)(a),
        I = A.useMemo(() => (null != f ? (0, gx.A)(f, 100) : null), [f]),
        N = g?.deleted ?? !1,
        _ = null != g && (0, gj.Se)(g),
        C = t.status === h.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eR.Ay)(),
        [y] = (0, cJ.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tO.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = gL(t.currentPeriodEnd),
        j = 0 === i;
    return (0, m.jsxs)(gE, {
        headerClassName: gD.dL,
        header:
            !1 === j
                ? (0, m.jsxs)(m.Fragment, {
                      children: [
                          (0, m.jsxs)("div", {
                              className: gD.VW,
                              children: [
                                  null != I &&
                                      (0, m.jsx)(gS._, { src: I.href, imageClassName: gD.Z2, width: 40, height: 40 }),
                                  (0, m.jsxs)("div", {
                                      className: gD.aF,
                                      children: [
                                          (0, m.jsx)(T.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: f?.name ?? L.intl.string(L.t["7kqy7W"]),
                                          }),
                                          (0, m.jsx)(Y.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? L.intl.string(L.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, m.jsx)("div", {
                              className: gD.Pz,
                              children:
                                  null != f &&
                                  null != u &&
                                  null != g &&
                                  (0, m.jsx)(gk, {
                                      subscription: t,
                                      app: f,
                                      guild: c,
                                      sku: g,
                                      storeListing: u,
                                      isCancelled: S,
                                      isOrphanedGuildSubscription: p,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: x?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, m.jsx)(a9.y, { type: a9.t.PULSING_ELLIPSIS }),
        children: [
            S &&
                (0, m.jsx)(gV, {
                    type: "warning",
                    title: _
                        ? L.intl.formatToPlainString(L.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : L.intl.formatToPlainString(L.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !S && p && (0, m.jsx)(gV, { type: "warning", title: L.intl.string(L.t.SmSP8Q) }),
            C && (0, m.jsx)(gV, { type: "danger", title: L.intl.string(L.t.fvOqBo) }),
            (0, m.jsxs)("div", {
                className: gD.zH,
                children: [
                    (0, m.jsx)(gU, {
                        title: L.intl.string(L.t["5D/KEH"]),
                        content: d
                            ? (0, m.jsxs)(m.Fragment, {
                                  children: [
                                      (0, m.jsxs)("span", {
                                          className: gD.yW,
                                          children: [(0, m.jsx)(gT.R, { size: "xs" }), L.intl.string(L.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, m.jsxs)("span", {
                                              className: gD._t,
                                              children: [
                                                  (0, m.jsx)(Y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: L.intl.format(L.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, m.jsx)(dv.Ay, { guild: c, size: dv.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, m.jsxs)("span", {
                                  className: gD.yW,
                                  children: [(0, m.jsx)(gp.UserIcon, { size: "xs" }), L.intl.string(L.t["6anEVv"])],
                              }),
                    }),
                    (0, m.jsx)(gG, { invoicePreview: y, subscriptionPlan: o }),
                    (0, m.jsx)(gU, {
                        title: L.intl.string(L.t.dnUzb6),
                        content: gL(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, m.jsx)(gM, { isCancelled: S, subscriptionPeriodEnd: v, renewalPlan: x }),
                ],
            }),
            (0, m.jsx)(gF, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: N,
                isCancelled: S,
            }),
            null != f &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, m.jsx)(gw, { appId: f.id, listingBenefits: u.benefits }),
        ],
    });
}
function gG(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, m.jsx)(gU, { title: L.intl.string(L.t.KI7ERx), content: "" });
    let i = (0, cf.CE)((0, cf.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, m.jsx)(gU, { title: L.intl.string(L.t.KI7ERx), content: i });
    let s = (0, cf.CE)((0, cf.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, m.jsx)(gU, {
        title: L.intl.string(L.t.KI7ERx),
        content: (0, m.jsxs)(m.Fragment, {
            children: [
                (0, m.jsx)(Y.E, { variant: "text-sm/semibold", children: s }),
                s !== i &&
                    (0, m.jsx)(le.m, {
                        text: L.intl.format(L.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, m.jsx)(Y.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, m.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function gM(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, cf.CE)((0, cf.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, m.jsx)(gU, {
            title: L.intl.string(L.t.hIhAM3),
            content: (0, m.jsxs)(m.Fragment, {
                children: [
                    (0, m.jsx)(Y.E, { variant: "text-sm/medium", children: n }),
                    (0, m.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        children: L.intl.format(L.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, m.jsx)(gU, { title: t ? L.intl.string(L.t.enxcAl) : L.intl.string(L.t["Ms+6Zq"]), content: n });
}
function gU(e) {
    let { title: t, content: n } = e;
    return (0, m.jsxs)("div", {
        className: gD.nM,
        children: [
            (0, m.jsx)(Y.E, { variant: "text-sm/medium", children: t }),
            (0, m.jsx)(Y.E, { variant: "text-sm/medium", className: gD.u4, children: n }),
        ],
    });
}
function gV(e) {
    let { type: t, title: n } = e;
    return (0, m.jsx)(r1.p, {
        messageType: "warning" === t ? r1.Y.WARNING : r1.Y.ERROR,
        className: gD.Xm,
        children: (0, m.jsx)(Y.E, { variant: "text-sm/normal", children: n }),
    });
}
function gk(e) {
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
        c = (0, gj.Se)(l),
        { analyticsLocations: g } = (0, eR.Ay)(),
        [h, S] = A.useState(!1),
        T = (0, gf.C)(t.id),
        p = (0, E.bG)([uy.A], () => uy.A.getParentSKU(i.skuId), [i.skuId]),
        x = A.useMemo(() => {
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
    async function N() {
        try {
            S(!0);
            let { subscription: e } = await (0, os.QP)(s, g);
            if (null == e) return;
            (0, lr.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, m.jsx)(t, { ...n, storeListing: i, subscription: gy.A.createFromServer(e) });
            });
        } finally {
            S(!1);
        }
    }
    return (0, m.jsxs)("div", {
        className: gD.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, m.jsx)(I.$, {
                        variant: "secondary",
                        size: "sm",
                        text: L.intl.string(L.t.QtMnkW),
                        onClick: N,
                        loading: h,
                    })
                  : (0, m.jsx)(I.$, {
                        variant: "secondary",
                        size: "sm",
                        text: L.intl.string(L.t["E8G/tr"]),
                        onClick: function () {
                            (0, lr.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, m.jsx)(e, { ...n, application: t, storeListing: i, subscription: s, guild: o });
                            });
                        },
                    }),
            f &&
                null != p &&
                !1 === r &&
                !1 === a &&
                (0, m.jsx)(I.$, {
                    variant: "primary",
                    size: "sm",
                    text: L.intl.string(L.t.R74ZBR),
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
function gw(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, m.jsx)(gC, {
        children: (e) =>
            (0, m.jsxs)("div", {
                className: gD.PX,
                children: [
                    (0, m.jsxs)("div", {
                        className: gD.wV,
                        children: [
                            e && (0, m.jsx)(Y.E, { variant: "text-sm/semibold", children: L.intl.string(L.t.mORL67) }),
                            (0, m.jsx)(gC.Toggle, {
                                className: gD.Bh,
                                text: e ? L.intl.string(L.t.gsbFAw) : L.intl.string(L.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, m.jsx)(gh.FY, { header: i, icon: (0, gO.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function gF(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, m.jsx)("div", {
                className: gD.Ji,
                children: (0, m.jsx)(tq.D, {
                    label: L.intl.string(L.t.azZaZa),
                    children: (0, m.jsx)(a9.y, { type: a9.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, m.jsx)("div", {
                  className: gD.Ji,
                  children: (0, m.jsxs)(gc.$T, {
                      color: gc.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          L.intl.format(L.t.IIHUUF, { subscriptionId: t.id }),
                          (0, m.jsx)("br", {}),
                          L.intl.format(L.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, m.jsx)("div", {
                  className: gD.Ji,
                  children: (0, m.jsx)(tq.D, {
                      label: L.intl.string(L.t.azZaZa),
                      children: (0, m.jsx)(c$.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var gB = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
n(938796);
var gz = n(38405);
let gX = (0, E.UT)(ub.A, {
    getQueryId: h.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = ub.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && gz.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, du.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var gY = n(240248),
    gH = n(237218),
    gK = n(763064);
function gW(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = A.useState(!1),
        [r, a] = A.useState(null),
        o =
            null != r &&
            (0, m.jsx)("button", {
                className: gK.x6,
                onClick: () => s((e) => !e),
                children: (0, m.jsxs)(Y.E, {
                    className: gK.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? L.intl.string(L.t["JQX/Pb"]) : L.intl.string(L.t.Fbrd8J),
                        l
                            ? (0, m.jsx)(gI.t, { color: nq.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, m.jsx)(dJ.a, { color: nq.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = A.useState(null),
        c = A.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    A.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let g = "auto";
    return (
        null != r && (g = l ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, m.jsxs)("div", {
            children: [
                (0, m.jsx)(Y.E, {
                    ...i,
                    className: gK.Qs,
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
var gZ = n(920352);
function gq(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = A.useMemo(() => (null == n.thumbnail ? null : (0, gH.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = gX(n.skuId),
        u = A.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, cf._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, m.jsxs)(gE, {
              className: is()(gZ.iE, i),
              header: (0, m.jsxs)(m.Fragment, {
                  children: [
                      (0, m.jsxs)("div", {
                          className: gZ.qd,
                          children: [
                              null != a &&
                                  (0, m.jsx)(gS._, { src: a.href, imageClassName: gZ.rW, width: 48, height: 48 }),
                              (0, m.jsxs)("div", {
                                  children: [
                                      (0, m.jsx)(T.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, m.jsx)(Y.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, gY.uJ)(r) &&
                      (0, m.jsx)("div", {
                          className: gZ.h_,
                          children: (0, m.jsx)(gW, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, m.jsx)("div", {
                          className: gZ.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, m.jsx)(gh.FY, { header: n, icon: (0, gO.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var gQ = n(185438),
    gJ = n(683380);
function g$(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, gx.A)(t, 100),
        u = (0, gj.PJ)(r.flags),
        d = u ? gT.R : gp.UserIcon,
        c = u ? L.intl.string(L.t["46YF2D"]) : L.intl.string(L.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        A = (0, E.bG)([lE.A], () => (u && null != g ? lE.A.getGuild(g) : void 0), [g, u]),
        h = (0, E.bG)(
            [uy.A],
            () => {
                if (null != a) return uy.A.get(a);
            },
            [a],
        ),
        S = gL(n.currentPeriodEnd);
    return (0, m.jsxs)("div", {
        children: [
            (0, m.jsxs)("div", {
                className: gJ.wx,
                children: [
                    null != o && (0, m.jsx)(gS._, { src: o.href, imageClassName: gJ.Z2, width: 48, height: 48 }),
                    (0, m.jsxs)("div", {
                        children: [
                            (0, m.jsx)(T.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, m.jsxs)("div", {
                                className: gJ.p4,
                                children: [
                                    (0, m.jsxs)(T.D, {
                                        variant: "heading-md/normal",
                                        className: gJ.N4,
                                        children: [(0, m.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, m.jsxs)(m.Fragment, {
                                            children: [
                                                (0, m.jsx)(Y.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, m.jsxs)("span", {
                                                    className: gJ.vP,
                                                    children: [
                                                        (0, m.jsx)(dv.Ay, { guild: A, size: dv.Ay.Sizes.SMOL }),
                                                        (0, m.jsx)(T.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: L.intl.format(L.t["7ZD8p1"], {
                                                                guildName: A.name,
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
            (0, m.jsx)(gC, {
                children: (e) =>
                    (0, m.jsxs)("div", {
                        className: gJ._B,
                        children: [
                            (0, m.jsx)(Y.E, { variant: "text-md/normal", children: L.intl.string(L.t["goe+hk"]) }),
                            e &&
                                (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        (0, m.jsx)(Y.E, {
                                            variant: "text-md/normal",
                                            children: L.intl.format(L.t["Q8qJ+5"], {}),
                                        }),
                                        (0, m.jsx)(Y.E, {
                                            variant: "text-md/normal",
                                            children: L.intl.format(L.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, m.jsx)(gC.Toggle, {
                                text: e ? L.intl.string(L.t["1Rkq/E"]) : L.intl.string(L.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, m.jsxs)("div", {
                className: gJ.x0,
                children: [
                    (0, m.jsx)(gq, {
                        storeListing: i,
                        className: gJ.o3,
                        cta: (0, m.jsxs)("div", {
                            className: gJ.cJ,
                            children: [
                                (0, m.jsx)(Y.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: L.intl.string(L.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, m.jsx)(Y.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: L.intl.format(L.t["OQk+jr"], { endDate: S }),
                                    }),
                            ],
                        }),
                    }),
                    l.map((e) =>
                        e.skuId === a
                            ? (0, m.jsx)(
                                  gq,
                                  {
                                      storeListing: e,
                                      cta: (0, m.jsx)(Y.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: L.intl.format(L.t.nn88hB, { startDate: S }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, m.jsx)(g0, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function g0(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, gQ.A)({
            analyticsLocation: h.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, m.jsx)(gq, {
        storeListing: t,
        cta: (0, m.jsx)(I.$, { variant: "primary", size: "sm", text: L.intl.string(L.t["+KwmBt"]), onClick: l }),
    });
}
class g1 extends A.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, m.jsxs)(gc.$T, {
                  color: gc.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      L.intl.format(L.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      L.intl.format(L.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function g2(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = A.useState({ route: gB.HOME }),
        { route: s } = i;
    function r() {
        l({ route: gB.HOME });
    }
    let a = (e) => {
            (l({ route: gB.SWITCH_APP_PLANS, ...e }), n(L.intl.string(L.t.VFqtkP), r));
        },
        [o, u] = A.useState({});
    A.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: gR.LOADING })),
                (0, gg._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: gR.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: gR.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, gm.E)(),
        c = d !== gm.mJ.LOADED;
    switch (s) {
        case gB.HOME:
            return (0, m.jsx)(m.Fragment, {
                children: t.map((e) =>
                    (0, m.jsx)(
                        g1,
                        {
                            subscription: e,
                            children: (0, m.jsx)(gP, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? gR.LOADING : (o[e.id] ?? gR.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case gB.SWITCH_APP_PLANS:
            let { route: g, ...E } = i;
            return (0, m.jsx)(g$, { ...E, navigateToHome: r });
        default:
            (0, it.xb)(s);
    }
}
var g3 = n(707989);
function g6(e) {
    let { onGoBack: t } = e,
        n = (0, E.yK)(
            [oV.A],
            () =>
                oV.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = A.useState();
    return (
        null == i && (i = (0, m.jsx)(g5, { onBack: t, title: L.intl.string(L.t["DB/m9a"]) })),
        (0, m.jsxs)("div", {
            children: [
                i,
                (0, m.jsx)("div", {
                    className: g3.A,
                    children: (0, m.jsx)(g2, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, m.jsx)(g5, {
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
function g5(e) {
    let { onBack: t, title: n } = e;
    return (0, m.jsxs)("div", {
        className: g3.D,
        children: [
            (0, m.jsx)(i7.K, {
                "aria-label": L.intl.string(L.t["13/7kX"]),
                icon: () => (0, m.jsx)(gd.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, m.jsx)(T.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var g4 = n(881489),
    g8 = n(366999),
    g7 = n(148155),
    g9 = n(391659);
function me(e) {
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
        ? ((t = L.intl.string(g7.default["/S02sx"])), (n = L.intl.string(g7.default.OPJNST)))
        : i
          ? ((t = L.intl.string(L.t["hT6i/0"])),
            (n = null != a ? L.intl.format(L.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = L.intl.string(L.t["3G0CTC"])),
            (n = r === tz.xc.FP_SUB_PAUSED ? L.intl.format(L.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = is()({ [g9.Hs]: i, [g9.mT]: !i }),
        d = is()({ [g9.CQ]: i, [g9.ZM]: !i }),
        c = is()({ [g9.EM]: !i });
    return (0, m.jsxs)("div", {
        className: g9.r6,
        children: [
            (0, m.jsxs)("div", {
                className: g9.Nv,
                children: [
                    (0, m.jsx)(T.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, m.jsx)(Y.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, m.jsx)("div", {
                    className: g9.ZS,
                    children: (0, m.jsx)("div", {
                        className: u,
                        children: (0, m.jsx)(Y.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let mt = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, an.kX)(t),
        r = s.length > 0,
        a = (0, g8.Ay)(t.endsAt, g8.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, m.jsx)("div", {
        children: (0, m.jsxs)("div", {
            className: is()(n, g9.f8),
            children: [
                (0, m.jsx)("div", {
                    className: g9.J_,
                    children: (0, m.jsxs)("div", {
                        className: g9.Bh,
                        children: [
                            (0, m.jsx)("div", {
                                className: g9.xt,
                                children: (0, m.jsx)(r0.t, { size: "md", color: "white", className: g9.T8 }),
                            }),
                            (0, m.jsx)("div", {
                                className: g9.pt,
                                children: (0, m.jsx)(T.D, {
                                    variant: "heading-md/semibold",
                                    children: L.intl.string(L.t.DFMPWS),
                                }),
                            }),
                            (0, m.jsx)(Y.E, {
                                className: g9.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : L.intl.string(L.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, m.jsx)(me, {
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
var mn = n(983048);
function mi(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, E.yK)([ub.A], () => [ub.A.get(i), null != s ? ub.A.get(s.planId) : null]);
    if (null == o || an.Ay.getInterval(i).intervalType !== tz.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, an.z4)(i),
        A = an.Ay.getDisplayName(i);
    if (a) t = L.intl.string(g7.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === h.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, an._e)(e, r);
        t = L.intl.formatToPlainString(L.t["5CNRRA"], { date: n ?? 0 });
    } else t = L.intl.formatToPlainString(L.t.eNXZ5O, { planName: A });
    let S = g || n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, m.jsxs)("div", {
        className: g9.Bh,
        children: [
            (0, m.jsx)("div", {
                className: is()({
                    [g9.bY]: g,
                    [g9.sr]: o.skuId === tz.pe.TIER_0,
                    [g9.lP]: o.skuId === tz.pe.TIER_1,
                    [g9.eb]: o.skuId === tz.pe.TIER_2,
                }),
                children: g
                    ? (0, m.jsx)(dr._, { size: "md", color: "currentColor", className: g9.Kk })
                    : (0, m.jsx)(r0.t, { size: "md", color: "currentColor", className: g9.Kk }),
            }),
            (0, m.jsxs)("div", {
                className: g9.pt,
                children: [
                    (0, m.jsx)(T.D, {
                        variant: "heading-md/semibold",
                        children: L.intl.format(L.t.LzobT9, { planName: A }),
                    }),
                    !S &&
                        (0, m.jsx)(T.D, {
                            className: g9.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, m.jsx)(Y.E, {
                className: g9.PJ,
                variant: "text-md/semibold",
                children: L.intl.format(L.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let ml = function (e) {
    let { className: t, entitlements: n } = e,
        i = F()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, E.yK)([um.A], () => um.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, E.bG)([oV.A], () => oV.A.getPremiumSubscription()),
        r = (0, E.bG)([oV.A], () => null == oV.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tz.gD.PREMIUM_MONTH_TIER_1),
        o = (0, E.bG)([sn.default], () => sn.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, m.jsxs)("div", {
        children: [
            (0, m.jsx)("div", {
                className: is()(t, g9.xF, g9.J_),
                children: Object.keys(i).map((e) =>
                    (0, m.jsx)(
                        mi,
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
                (0, m.jsxs)("div", {
                    children: [
                        (0, m.jsx)(Y.E, {
                            className: g9.eT,
                            variant: "text-md/normal",
                            children: L.intl.string(L.t["VNr4+O"]),
                        }),
                        (0, m.jsx)(mn.i, {}),
                    ],
                }),
        ],
    });
};
var ms = n(902782);
function mr(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, eR.Ay)(),
        [s] = (0, cJ.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tO.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? ms.r : ms.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, an.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = ub.A.get(o);
    tr()(null != u, "Missing plan");
    let d = (0, cf.$g)(s.total, s.currency);
    return (
        u.interval === tz.WT.YEAR
            ? (t = L.intl.format(L.t["jPz/39"], {
                  price: d,
                  termsUrl: h.X7G.TERMS,
                  paidURL: h.X7G.PAID_TERMS,
                  privacyUrl: h.X7G.PRIVACY,
              }))
            : u.interval === tz.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? L.intl.format(L.t.m27GpI, {
                            price: d,
                            termsUrl: h.X7G.TERMS,
                            paidURL: h.X7G.PAID_TERMS,
                            privacyUrl: h.X7G.PRIVACY,
                        })
                      : L.intl.format(L.t["9xf5Vx"], {
                            price: d,
                            termsUrl: h.X7G.TERMS,
                            paidURL: h.X7G.PAID_TERMS,
                            privacyUrl: h.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, m.jsx)(Y.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function ma(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === h.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, m.jsx)(mr, { subscription: t, withOverheadSeparator: n });
}
var mo = n(963897),
    mu = n(689255);
let md = { [e_.nR]: "role_subscriptions_panel", [e_.PZ]: "application_subscriptions_panel" };
function mc() {
    return (0, m.jsx)(og.Z, {
        className: mu.wb,
        type: og.Z.Types.CUSTOM,
        children: (0, m.jsxs)(lc.A, {
            align: lc.A.Align.CENTER,
            children: [
                (0, m.jsx)(i$.A, { game: null, size: i$.M.SMALL, className: mu.pV }),
                (0, m.jsx)("span", { className: mu.O, children: L.intl.string(L.t["jy/hyj"]) }),
            ],
        }),
    });
}
function mg(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, cm._)(e, t));
}
function mm() {
    let e = (0, E.bG)([um.A], () => um.A.getForApplication(tz.tv), [], mg);
    return (
        A.useEffect(() => {
            (0, uX.LM)(tz.tv);
        }, []),
        (0, m.jsx)(nJ.n, {
            label: L.intl.string(L.t["2GKrvn"]),
            description: L.intl.string(L.t.Z5b2Gf),
            children:
                null != e && an.Ay.hasAccountCredit(e)
                    ? (0, m.jsx)(ml, { className: mu.fX, entitlements: e })
                    : (0, m.jsx)(mc, {}),
        })
    );
}
function mA() {
    return (0, m.jsx)("hr", { className: mu.hr });
}
let mE = function () {
        var e;
        let t = (0, E.bG)([oV.A], () => oV.A.getPremiumTypeSubscription()),
            n = (0, cA.A)({ subscriptionFilter: (e) => mo.Hy.has(e.status) }),
            i = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, E.bG)(
                [oU.A],
                () => (null != t && null != t.paymentSourceId ? oU.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, E.bG)([oV.A], () => oV.A.hasFetchedSubscriptions()),
            a = (0, E.bG)([oo.A], () => oo.A.isBusy),
            o = (0, dd.Y)(),
            u = c0.A.useField("subsection"),
            c = c0.A.useField("scrollToGameServers"),
            g = A.useRef(null);
        A.useEffect(() => {
            (0, n5._)(null != u ? md[u] : d.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let S = (0, E.bG)([oV.A], () => oV.A.getActiveApplicationSubscriptions()?.length ?? 0),
            p = (0, E.bG)(
                [oV.A],
                () =>
                    Object.values(oV.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === h.rzx.GUILD)
                        .filter((e) => e.status !== h.Dmq.ENDED).length,
            ),
            x = (0, E.bG)([oV.A], () =>
                Object.values(oV.A.getSubscriptions() ?? {}).some((e) => e.type === h.rzx.GAME_SERVER),
            ),
            { servers: f } = (0, cU.f)({ enabled: x }),
            I = (0, E.yK)([oV.A], () => (0, cb.eP)(f, (e) => oV.A.getSubscriptionById(e)), [f]),
            N = (0, dg.A)({ forceFetch: !0 }),
            _ = (0, g4.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            b =
                !(_ && !(N.unactivatedUnits.length > 0)) &&
                (N.fractionalState !== tz.xc.NONE || N.unactivatedUnits.length > 0);
        return (A.useEffect(() => {
            c &&
                r &&
                o &&
                I.length > 0 &&
                (g.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                c0.A.setState({ scrollToGameServers: !1 }));
        }, [c, r, o, I.length]),
        A.useEffect(
            () => (
                e6.h.wait(() => {
                    ((0, du.zS)(), os.hP(), (0, da.CD)(), os.$o());
                }),
                function () {
                    c0.A.resetState();
                }
            ),
            [],
        ),
        e9.A.enabled)
            ? (0, m.jsx)(a8.A, {})
            : r && o
              ? u === e_.nR
                  ? (0, m.jsx)(gr, { onGoBack: () => c0.A.setState({ subsection: null }) })
                  : u === e_.PZ
                    ? (0, m.jsx)(g6, { onGoBack: () => c0.A.setState({ subsection: null }) })
                    : (0, m.jsx)("div", {
                          className: mu.kL,
                          children: (0, m.jsxs)("div", {
                              className: mu.Qs,
                              children: [
                                  l ? (0, m.jsx)(mo.Sb, {}) : null,
                                  null != t
                                      ? (0, m.jsx)(mo.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, m.jsx)(mo.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, m.jsxs)("section", {
                                          children: [
                                              (0, m.jsx)(T.D, {
                                                  variant: "heading-md/bold",
                                                  className: mu.HL,
                                                  children: L.intl.string(L.t.Obre8v),
                                              }),
                                              (0, m.jsx)(Y.E, {
                                                  variant: "text-md/normal",
                                                  className: mu.JU,
                                                  children: L.intl.format(L.t["7Zi06b"], {
                                                      helpCenterLink: ep.A.getArticleURL(
                                                          h.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, m.jsx)(mt, {
                                                  className: mu.fX,
                                                  fractionalPremiumInfo: N,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, m.jsx)(mm, {}),
                                  p > 0 &&
                                      (0, m.jsxs)(m.Fragment, {
                                          children: [
                                              (0, m.jsx)(mA, {}),
                                              (0, m.jsx)(cw, {
                                                  count: p,
                                                  onClickManageSubscription: () => c0.A.setState({ subsection: e_.nR }),
                                              }),
                                          ],
                                      }),
                                  S > 0 &&
                                      (0, m.jsxs)(m.Fragment, {
                                          children: [
                                              (0, m.jsx)(mA, {}),
                                              (0, m.jsx)(gu, {
                                                  count: S,
                                                  onClickManageSubscription: () => {
                                                      (c0.A.setState({ subsection: e_.PZ }),
                                                          te.default.track(
                                                              h.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          ));
                                                  },
                                              }),
                                          ],
                                      }),
                                  I.length > 0 &&
                                      (0, m.jsxs)("div", {
                                          ref: g,
                                          children: [(0, m.jsx)(mA, {}), (0, m.jsx)(cM, { servers: I })],
                                      }),
                                  (0, m.jsx)(mA, {}),
                                  null != t ? (0, m.jsx)(ma, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, m.jsx)("div", { className: is()(mu.kL, mu.Lq), children: (0, m.jsx)(a9.y, {}) });
    },
    mh = (0, u.E2)(d.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [L.intl.string(L.t.trSpHX), L.intl.string(L.t["2GKrvn"])],
        Component: () => (0, m.jsx)(mE, {}),
    }),
    mS = (0, u.zZ)(d.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [L.intl.string(L.t.trSpHX), L.intl.string(L.t["2GKrvn"])],
        buildLayout: () => [mh],
    }),
    mT = (0, u.t_)(d.X.SUBSCRIPTIONS_PANEL, { useTitle: () => L.intl.string(L.t.trSpHX), buildLayout: () => [mS] }),
    mp = (0, u.i4)(d.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.trSpHX),
        icon: cc.L,
        usePersistentBadge: function () {
            let e = (0, cg.l)();
            return A.useMemo(
                () => ({
                    badgeType: g.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, m.jsx)(iX.E, { size: "xs", color: nq.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [mT],
    }),
    mx = (0, u.WI)(d.X.BILLING_SECTION, {
        useTitle: () => L.intl.string(L.t.oeUm2s),
        buildLayout: () => [ds, cd, mp, u7, oZ],
    });
var mf = n(540999),
    mI = n(306471),
    mN = n(964355),
    m_ = n(172272);
let mC = (0, u.zD)(d.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, E.bG)([s2.default], () => s2.default.isAxeEnabled),
        setValue: (e) => (0, s1.x)({ axeEnabled: e }),
    }),
    mb = (0, u.zD)(d.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, s1.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var my = n(276086),
    mv = n(354328);
let mj = (0, u.zD)(d.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, mv.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, my.L)("highlight_mana_components", e);
        },
    }),
    mO = (0, u.zD)(d.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, mv.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, my.L)("highlight_mana_text_overrides", e);
        },
    }),
    mL = (0, u.zD)(d.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, mv.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, my.L)("highlight_mana_text", e);
        },
    }),
    mD = (0, u.zD)(d.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, mv.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, my.L)("highlight_void_toggleables", e);
        },
    }),
    mR = (0, u.sN)(d.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, E.bG)([s2.default], () => s2.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: m_.YR,
        markers: Array.from({ length: m_.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => m_.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            m_.Or.getState().setHorizontalSpacing(e);
        },
    }),
    mP = (0, u.zD)(d.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, s1.x)({ layoutDebuggingEnabled: e });
        },
    }),
    mG = (0, u.sN)(d.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, E.bG)([s2.default], () => s2.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: m_.YR,
        markers: Array.from({ length: m_.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => m_.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            m_.Or.getState().setVerticalSpacing(e);
        },
    }),
    mM = (0, u.zZ)(d.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [mb, mP, mR, mG, mj, mL, mO, mD, mC],
    });
var mU = n(246605),
    mV = n(274184);
let mk = (0, u.E2)(d.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, E.bG)([mV.Ay], () => mV.Ay.getActionTriggeredSurveyOverride());
            return (0, m.jsx)(Au, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => mU.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    mw = (0, u.zD)(d.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => O.HZ.useSetting(),
        setValue: (e) => {
            O.HZ.updateSetting(e);
        },
    });
var mF = n(396478),
    mB = n(173936),
    mz = n(103557),
    mX = n(414079),
    mY = n(148810),
    mH = n(380610),
    mK = n(986238),
    mW = n(428524),
    mZ = n(252149),
    mq = n(221851);
let mQ = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    mJ = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function m$(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class m0 extends A.Component {
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
        return (0, m.jsxs)(lc.A, {
            direction: lc.A.Direction.VERTICAL,
            className: is()(mW.oS, mq.SX, mZ.N, mW.nM),
            children: [
                (0, m.jsx)(mX.A, {
                    className: is()(mW.lL, { [mW.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, m.jsxs)(lc.A, {
                    className: mq.QB,
                    children: [
                        (0, m.jsx)(lc.A.Child, {
                            basis: "50%",
                            children: (0, m.jsx)(i8.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: mJ,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, m.jsx)(lc.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, m.jsx)(la.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, m.jsxs)(lc.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, m.jsx)(Y.E, {
                                className: mW.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, m.jsxs)(Y.E, {
                            variant: "text-sm/normal",
                            className: mW.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, m.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class m1 extends A.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, mH.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: F().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !F().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return F().without(mQ, ...t);
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
        this.setState({ buildOverrides: F().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, mY.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: F().cloneDeep(e),
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
        (0, lr.openModal)((t) => (0, m.jsx)(m2, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, m.jsx)(mF.pp, {
            theme: nM.A.theme,
            className: is()(mq.eT, mq.SX),
            children: (0, m.jsx)(mF.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : F().map(e, (e, i) =>
                  (0, m.jsx)(
                      m0,
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
            : (0, m.jsx)(I.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, m.jsx)(le.m, {
                  text: "Generate Public Link",
                  children: (0, m.jsx)(i7.K, {
                      variant: "secondary",
                      icon: mB.LinkIcon,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, m.jsxs)(m.Fragment, {
            children: [
                (0, m.jsx)(I.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, m.jsx)(I.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: m$(t ?? {}),
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
            ? (0, m.jsx)(a9.y, { className: mq.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                m$(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, m.jsx)(Y.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, m.jsx)(nJ.n, {
            children: (0, m.jsxs)(z.B, {
                gap: 16,
                children: [
                    (0, m.jsx)(i8.l, {
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
                    (0, m.jsxs)(sw.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class m2 extends A.Component {
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
        e.key === lb.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, mY.SB)(e);
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
        return m$(this.props.buildOverrides ?? {});
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
            d = mK.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, m.jsxs)(z.B, {
            gap: 20,
            children: [
                (0, m.jsx)(i8.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: mK.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, m.jsx)(i8.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: mK.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, m.jsxs)(z.B, {
                          gap: 20,
                          children: [
                              (0, m.jsx)(la.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iw.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, m.jsx)(i8.l, {
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
                    : (0, m.jsx)(mz.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, m.jsx)(mz.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, m.jsx)(tQ.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, m.jsx)("div", {});
        let n = r1.Y.INFO;
        switch (t) {
            case 0:
                n = r1.Y.ERROR;
                break;
            case 1:
                n = r1.Y.WARNING;
        }
        return (0, m.jsx)(r1.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, m.jsx)(ls.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, m.jsx)(uk.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let m3 = (0, u.E2)(d.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: m1 });
var m6 = n(256311),
    m5 = n(883600);
let m4 = (0, u.E2)(d.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, E.bG)([m5.A], () => m5.A.overrideId());
        async function t(e) {
            let t = m5.A.getChangelog(e, "en-US");
            return null != t ? t : ((await m6.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, m.jsx)(Au, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => m6.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var m8 = n(506774);
let m7 = new Date("2018-01-01"),
    m9 = (0, u.Tf)(d.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => O.pK.useSetting() === od.default.fromTimestamp(m7.getTime()),
        onClick: () => (m8.w.set("lastChangeLogDate", m7), O.pK.updateSetting(od.default.fromTimestamp(m7.getTime()))),
    }),
    Ae = (0, u.zD)(d.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, E.bG)([s2.default], () => s2.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, E.bG)(
                [s2.default],
                () => s2.default.disableAppCollectionsCache || s2.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, s1.x)({ disableAppCollectionsCache: e }),
    }),
    At = (0, u.zD)(d.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.isForcedCanary),
        setValue: (e) => {
            (0, s1.x)({ canary: e });
        },
    }),
    An = (0, u.zD)(d.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.sourceMapsEnabled),
        setValue: (e) => (0, s1.x)({ sourceMapsEnabled: e }),
    }),
    Ai = (0, u.zD)(d.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, s1.x)({ onlyShowPreviewAppCollections: e }),
    });
var Al = n(10094),
    As = n(683760);
let Ar = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tz.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tz.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tz.PremiumTypes.TIER_2 },
    ],
    Aa = (0, u.Hn)(d.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => Ar,
        clearable: !0,
        useValue: () =>
            (0, E.bG)([As.A], () => {
                let e = As.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, Al.O)(null, void 0)
                : null === e
                  ? (0, Al.O)(void 0, void 0)
                  : (0, Al.O)(0 === e ? null : e, void 0);
        },
    }),
    Ao = (0, u.E2)(d.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, E.bG)([mV.Ay], () => mV.Ay.getSurveyOverride());
            return (0, m.jsx)(Au, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => mU.xr(e),
                fetchOverride: (e) => mU.BC(e, !0) ?? null,
            });
        },
    });
function Au(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = A.useState(l ?? ""),
        u = A.useRef(null),
        [d, c] = A.useState(0);
    function g() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        A.useEffect(() => g, []),
        (0, m.jsx)(tq.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, m.jsx)(la.k, {
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
let Ad = (0, u.zZ)(d.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [Aa, Ao, mk, m4, m9, At, mw, Ai, Ae, An, m3],
        useInlineNotice: () => ({
            type: g.lT.INLINE_NOTICE,
            noticeType: "info",
            text: L.intl.format(L.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Ac = (0, u.zD)(d.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, s1.x)({ logAnalyticsEvents: e }),
    }),
    Ag = (0, u.zD)(d.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.isLoggingGatewayEvents),
        setValue: (e) => (0, s1.x)({ logGatewayEvents: e }),
    }),
    Am = (0, u.zD)(d.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.preventPopoutClose),
        setValue: (e) => (0, s1.x)({ preventPopoutClose: e }),
    }),
    AA = (0, u.zD)(d.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.logKeyboardMismatches),
        setValue: (e) => (0, s1.x)({ logKeyboardMismatches: e }),
    }),
    AE = (0, u.zD)(d.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.isLoggingOverlayEvents),
        setValue: (e) => (0, s1.x)({ logOverlayEvents: e }),
    }),
    Ah = (0, u.zD)(d.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.isLoggingQuestEvents),
        setValue: (e) => (0, s1.x)({ logQuestEvents: e }),
    }),
    AS = (0, u.zD)(d.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, E.bG)([s2.default], () => s2.default.isTracingRequests),
        setValue: (e) => (0, s1.x)({ trace: e }),
    }),
    AT = (0, u.zZ)(d.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [Ag, AE, AS, Ac, AA, Am, Ah] }),
    Ap = (0, u.t_)(d.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Ad, AT, mM],
    }),
    Ax = (0, u.i4)(d.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: mI.V,
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
                    disableAppCollectionsCache: c,
                    isStaff: g,
                } = (0, E.cf)([s2.default, mf.A, sn.default], () => ({
                    layoutDebuggingEnabled: s2.default.layoutDebuggingEnabled,
                    isDeveloper: mf.A.isDeveloper,
                    isLoggingGatewayEvents: s2.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: s2.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: s2.default.isLoggingAnalyticsEvents,
                    isTracingRequests: s2.default.isTracingRequests,
                    isForcedCanary: s2.default.isForcedCanary,
                    isSourceMapsEnabled: s2.default.sourceMapsEnabled,
                    isAxeEnabled: s2.default.isAxeEnabled,
                    preventPopoutClose: s2.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: s2.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: s2.default.disableAppCollectionsCache,
                    isStaff: sn.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, m_.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = m_.Or.getState(),
                p = O.HZ.useSetting();
            return t
                ? [
                      (0, m.jsxs)(
                          e2.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ni.openUserSettings)(d.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, m.jsx)(
                                      e2.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: p,
                                          action: () => {
                                              O.HZ.updateSetting(!p);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, m.jsx)(
                                      e2.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, s1.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, m.jsx)(
                                      e2.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, s1.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, m.jsx)(
                                      e2.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: c,
                                          action: () => {
                                              (0, s1.x)({ disableAppCollectionsCache: !c });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, m.jsxs)(
                          e2.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, ni.openUserSettings)(d.X.LOGGING);
                              },
                              children: [
                                  (0, m.jsx)(
                                      e2.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, s1.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, m.jsx)(
                                      e2.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, s1.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, m.jsx)(
                                      e2.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, s1.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, m.jsx)(
                                      e2.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, s1.x)({ trace: !s });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, m.jsx)(
                                      e2.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, s1.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, m.jsxs)(
                          e2.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, ni.openUserSettings)(d.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, m.jsx)(
                                      e2.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, s1.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, m.jsx)(
                                      e2.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, s1.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, m.jsxs)(m.Fragment, {
                                          children: [
                                              (0, m.jsx)(
                                                  e2.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, m.jsx)(mN.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: m_.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, m.jsx)(
                                                  e2.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, m.jsx)(mN.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: m_.YR,
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
                          ? (0, m.jsx)(
                                e2.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => st() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [Ap],
    });
var Af = n(127062),
    AI = n(25044),
    AN = n(80703),
    A_ = n(123292),
    AC = n(857250),
    Ab = n(683438),
    Ay = n(890856),
    Av = n(100392),
    Aj = n(102609),
    AO = n(271478),
    AL = n(710195),
    AD = n(386976),
    AR = n(257433),
    AP = n(32523),
    AG = n(96919),
    AM = n(688151),
    AU = n(863763);
function AV(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = A.useState(l),
        [a, o] = A.useState(!1),
        u = A.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, E.bG)([u_.default], () => u_.default.getId()),
        c = (0, E.bG)([u_.default], () => {
            let e = u_.default.getInstallationForTracking();
            return null == e ? null : (0, AN.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        h = (0, AR.iN)(t, g),
        S = (0, AR.Fm)(t, g),
        T = (0, E.yK)([s9.A], () =>
            F()
                .sortBy(s9.A.getRecentExposures(AM.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        p = A.useCallback(
            (e) => {
                (0, uj.C)((0, Av.yA)(n), () => {
                    ((0, l4.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: l8.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n],
        ),
        x = (0, m.jsx)(Ay.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, m.jsxs)(Y.E, {
                variant: "text-md/medium",
                className: AU.DD,
                children: [
                    (0, m.jsxs)("div", {
                        children: [
                            (0, m.jsxs)(z.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    uj.p5 &&
                                        (0, m.jsx)(n$.D, {
                                            onClick: p,
                                            children: (0, m.jsx)(mB.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, m.jsx)(Y.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, m.jsx)("span", {
                        className: AU.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, m.jsx)("div", { className: AU.Os, children: x });
    let f = "";
    return (
        (f =
            t.system === Aj.l5.LEGACY
                ? `Currently assigned to bucket ${h ?? AM.RE.NOT_ELIGIBLE}`
                : null != h
                  ? `Currently assigned to variant ${h}`
                  : "Currently unassigned"),
        (0, m.jsxs)("div", {
            className: AU.Os,
            children: [
                x,
                (0, m.jsx)("div", {
                    children: (0, m.jsx)(AO.g, {
                        label: t.system === Aj.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, m.jsx)("div", {
                    className: AU.h_,
                    children:
                        null == S
                            ? (0, m.jsx)(Y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, m.jsxs)("div", {
                          children: [
                              (0, m.jsx)(Y.E, {
                                  variant: "text-lg/medium",
                                  className: AU.id,
                                  children: "Server Descriptor",
                              }),
                              (0, m.jsx)(Y.E, {
                                  variant: "code",
                                  className: AU.AS,
                                  children: null == S ? "None" : JSON.stringify(S, void 0, 2),
                              }),
                              (0, m.jsx)(Y.E, {
                                  variant: "text-lg/medium",
                                  className: AU.id,
                                  children: "Override Descriptor",
                              }),
                              (0, m.jsx)(Y.E, {
                                  variant: "code",
                                  className: AU.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, m.jsx)(Y.E, {
                                  variant: "text-lg/medium",
                                  className: AU.id,
                                  children: "Recent Exposures",
                              }),
                              (0, m.jsx)(Y.E, {
                                  variant: "code",
                                  className: AU.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, m.jsx)("div", {
                          className: AU.id,
                          children: (0, m.jsx)(A_.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, m.jsx)(i4.c, { className: AU.yF }),
            ],
        })
    );
}
function Ak(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = A.useState(null != i),
        [r, a] = A.useState(!1),
        o = A.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, E.bG)([s9.A], () => s9.A.getLoadedGuildExperiment(n)),
        d = (0, E.bG)([s9.A, lE.A, AL.A], () => {
            if (t.system === Aj.l5.LEGACY) return null == s9.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lE.A.getGuildsArray().some((t) => null != AL.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, E.yK)([s9.A], () =>
            F()
                .sortBy(s9.A.getRecentExposures(AM.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, h] = (0, E.yK)([u_.default, lE.A, s9.A, AL.A], () => {
            let e = t.system === Aj.l5.LEGACY,
                i = t.name,
                l = u_.default.getId(),
                s = F().sortBy(lE.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (s9.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? AM.RE.NOT_ELIGIBLE)
                    : (AL.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? AM.RE.NOT_ELIGIBLE);
                (s in r || (r[s] = 0), r[s]++, a.push(`${t.name}: ${s}`));
            }
            let o = F()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        S = t.system !== Aj.l5.LEGACY,
        T = (0, E.yK)([lE.A], () => F().sortBy(lE.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [p, x] = A.useState(() => lh.A.getGuildId() ?? lh.A.getLastSelectedGuildId()),
        f = T.find((e) => e.id === p)?.name,
        I = (0, E.bG)(
            [AL.A],
            () => {
                if (S && null != p) return AL.A.getServerAssignment("guild", p, t.name);
            },
            [S, p, t.name],
        ),
        N = (0, E.bG)([AL.A, u_.default], () => {
            if (!S) return;
            let e = u_.default.getId();
            return AL.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        _ = null != N && (N.isOverride || N.useAsEligibility),
        C = (0, m.jsx)(n$.D, {
            onClick: o,
            children: (0, m.jsxs)(Y.E, {
                variant: "text-md/medium",
                className: AU.DD,
                children: [
                    (0, m.jsxs)("div", {
                        children: [
                            (0, m.jsx)("span", { children: t.title }),
                            (0, m.jsx)(Y.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, m.jsx)("span", { className: AU.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, m.jsxs)("div", {
              className: AU.Os,
              children: [
                  C,
                  (0, m.jsx)(AO.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${h}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  S &&
                      T.length > 0 &&
                      (0, m.jsx)("div", {
                          className: AU.h_,
                          children: (0, m.jsx)(i8.l, {
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
                  (0, m.jsx)("div", {
                      className: AU.h_,
                      children: d
                          ? (0, m.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Aj.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  S &&
                      (0, m.jsxs)("div", {
                          children: [
                              (0, m.jsxs)(Y.E, {
                                  variant: "text-lg/medium",
                                  className: AU.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, m.jsx)(Y.E, {
                                  variant: "code",
                                  className: AU.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, m.jsx)(Y.E, {
                                  variant: "text-lg/medium",
                                  className: AU.id,
                                  children: "Client Eligibility",
                              }),
                              (0, m.jsx)(Y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: _ ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, m.jsx)(Y.E, {
                                  variant: "code",
                                  className: AU.AS,
                                  children: null == N ? "None" : JSON.stringify(N, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, m.jsxs)("div", {
                            children: [
                                (0, m.jsx)(Y.E, {
                                    variant: "text-lg/medium",
                                    className: AU.id,
                                    children: "Guild Assignments",
                                }),
                                (0, m.jsx)(Y.E, { variant: "code", className: AU.AS, children: g }),
                                t.system === Aj.l5.LEGACY &&
                                    (0, m.jsxs)(m.Fragment, {
                                        children: [
                                            (0, m.jsx)(Y.E, {
                                                variant: "text-lg/medium",
                                                className: AU.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, m.jsx)(Y.E, {
                                                variant: "code",
                                                className: AU.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, m.jsx)(Y.E, {
                                    variant: "text-lg/medium",
                                    className: AU.id,
                                    children: "Override Descriptor",
                                }),
                                (0, m.jsx)(Y.E, {
                                    variant: "code",
                                    className: AU.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, m.jsx)(Y.E, {
                                    variant: "text-lg/medium",
                                    className: AU.id,
                                    children: "Recent Exposures",
                                }),
                                (0, m.jsx)(Y.E, {
                                    variant: "code",
                                    className: AU.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, m.jsx)("div", {
                            className: AU.id,
                            children: (0, m.jsx)(A_.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, m.jsx)(i4.c, { className: AU.yF }),
              ],
          })
        : (0, m.jsx)("div", { className: AU.Os, children: C });
}
let Aw = (0, u.E2)(d.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, AD.op)(),
                { experiments: n, overridesInfo: i } = (0, AP.hI)(),
                l = A.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = A.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, E.bG)([u_.default], () => {
                    let e = u_.default.getInstallationForTracking();
                    return null == e ? null : (0, AN.v)(e);
                }),
                [a, o] = A.useState(""),
                u = (0, AG.oC)((0, AG.R3)((0, AG.Fm)(l), s), a);
            return (0, m.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, m.jsxs)(z.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, m.jsxs)(Y.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                uj.p5 &&
                                    (0, m.jsx)(A_.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uj.C)(r, () => {
                                                (0, l4.P0)((0, AC.o)("Installation ID copied!", l8.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, m.jsx)(Ab.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Ak : AV;
                              return (0, m.jsx)(
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
                        : (0, m.jsx)("div", {
                              className: AU.p$,
                              children: (0, m.jsx)(T.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    AF = (0, u.zZ)(d.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Aw] }),
    AB = (0, u.t_)(d.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [AF] }),
    Az = (0, u.i4)(d.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Af.c,
        useMenu: AI.A,
        buildLayout: () => [AB],
    }),
    AX = (0, u.WI)(d.X.DEVELOPER_SECTION, {
        useTitle: () => L.intl.string(L.t["+gHUHA"]),
        usePredicate: () => mf.A.isDeveloper,
        buildLayout: () => [Az, Ax],
    });
var AY = n(682348),
    AH = n(871633),
    AK = n(751075),
    AW = n(843402);
let AZ = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function Aq() {
    let e = (0, E.yK)([iq.Ay], () => iq.Ay.getGamesSeen(!1)),
        t = (0, E.bG)([iq.Ay], () => AZ(...iq.Ay.getOverrides()));
    A.useEffect(() => {
        if (eq.isPlatformEmbedded) return ((0, AW.a2)(), AW.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = A.useMemo(
        () =>
            e.reduce((e, t) => ((0, AH.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function AQ(e) {
    let { gameHistory: t } = Aq();
    return {
        namedGames: A.useMemo(
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
function AJ(e) {
    let { namedGames: t, totalCount: n } = AQ(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function A$() {
    let { namedGames: e } = AQ(2),
        [t, n] = A.useMemo(() => e.map((e) => e.id), [e]);
    A.useEffect(() => {
        gb.Ay.fetchApplications([t, n].filter(it.Vq));
    }, [t, n]);
    let [i, l] = (0, E.yK)([iK.A], () => [t, n].map(iK.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, m.jsx)(i$.A, { game: i, size: i$.M.MEDIUM_LARGE }), shape: AK.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, m.jsx)(i$.A, { game: l, size: i$.M.MEDIUM }), shape: AK.e0.ROUNDED } : null,
          };
}
let A0 = (0, u.AK)(d.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = AJ(2);
            return L.intl.format(L.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = A$();
            return { type: g.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: d.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, E.bG)([iq.Ay], () => iq.Ay.getGamesSeen(!1).some((e) => !(0, AH.n1)(e))) && (0, ng.xl)(),
    }),
    A1 = (0, u.gN)(d.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [A0] });
var A2 = n(57129);
let A3 = (0, u.zD)(d.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => L.intl.string(A2.default.WhdCGP),
    useSubtitle: () => L.intl.string(A2.default.UQ9RHJ),
    useValue: O.tz.useSetting,
    setValue: O.tz.updateSetting,
});
var A6 = n(406535);
let A5 = (0, u.zD)(d.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => L.intl.string(A2.default.A0FVCV),
        useSubtitle: () => L.intl.string(A2.default.vHX6RG),
        useValue: O.hV.useSetting,
        setValue: function (e) {
            (O.hV.updateSetting(e),
                te.default.track(h.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A6.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    A4 = (0, u.zZ)(d.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => L.intl.string(L.t.WmsPis),
        useSearchTerms: () => [L.intl.string(L.t["8ka8li"])],
        buildLayout: () => [A3, A5, A1],
    });
var A8 = n(106531);
let A7 = (0, u.AK)(d.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => L.intl.string(L.t.J0SFL2),
        destinationKey: d.X.DATA_AND_PRIVACY_PANEL,
    }),
    A9 = (0, u.gN)(d.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, A8.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [A7],
    });
var Ee = n(945810);
let Et = (0, Ee.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
var En = n(365258);
let Ei = (0, u.Qx)(d.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => L.intl.string(A2.default["/LHVbt"]),
    useSubtitle: () => L.intl.string(L.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eF.Qd.ACTIVITY_STATUS_OFF, name: L.intl.string(A2.default.m3oL7Q) },
            { value: eF.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: L.intl.string(A2.default["5+lnTA"]) },
            { value: eF.Qd.ACTIVITY_STATUS_ON, name: L.intl.string(A2.default["egr+VZ"]) },
        ];
    },
    useValue: O._Z.useSetting,
    setValue: function (e) {
        var t;
        let i = O._Z.getSetting();
        if (
            (O._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, A8.W1)(t) && !Et.getConfig({ location: t }).upsell)
        )
            return;
        let l = (0, En.g8)(i, e);
        if (null == l) return;
        let s = (0, En.Xc)(e);
        (0, lr.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, m.jsx)(e, { ...t, direction: l.direction, affectedGuildIds: l.affectedGuildIds, settingName: s });
        });
    },
});
var El = n(498642),
    Es = n(573435),
    Er = n(260509),
    Ea = n(771810);
function Eo(e) {
    let { guild: t, size: n } = e,
        i = (0, Er.Iv)(t, n, !1, !0),
        l = (0, Er.Rb)(t);
    return null != i
        ? (0, m.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, m.jsx)("div", {
              className: Ea.F,
              children: (0, m.jsx)(Y.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
              }),
          });
}
function Eu(e) {
    let { guild: t, size: n } = e;
    return (0, m.jsx)(Es.Ay, {
        className: Ea.z,
        mask: Es.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, m.jsx)(Eo, { guild: t, size: n }),
    });
}
var Ed =
    (((s = {}).SERVER_ORDER = "server-order"),
    (s.RECENTLY_JOINED = "recently-joined"),
    (s.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (s.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    s);
let Ec = {
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
var Eg = n(618118);
function Em(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, E.bG)([El.A], () => El.A.getMemberCount(t.id));
    return (0, m.jsxs)(z.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, m.jsx)("div", { className: Eg.FO, children: (0, m.jsx)(Eu, { guild: t, size: 48 }) }),
            (0, m.jsx)("div", {
                className: Eg.QH,
                children: (0, m.jsx)(tQ.d, {
                    label: t.name,
                    description: L.intl.format(L.t.zRl6XR, { count: l ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let EA = function (e) {
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
            let [e, t] = (0, A.useState)(""),
                [n, i] = (0, A.useState)("server-order"),
                l = (0, E.bG)([dh.Ay], () => dh.Ay.getFlattenedGuildIds()),
                s = (0, E.bG)([lE.A], () => lE.A.getGuilds()),
                r = l.map((e) => s[e]).filter(Boolean),
                a = O.Pw.useSetting(),
                [o, u] = (0, A.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await O.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, A.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [g, m] = (0, A.useState)(() => Ec[n](r, a)),
                h = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(Ec[e](r, a)), i(e));
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
        S = (0, A.useId)(),
        T = (0, A.useRef)(null),
        p = (0, A.useMemo)(
            () => [
                { id: Ed.SERVER_ORDER, label: L.intl.string(L.t.STMPJ2), value: Ed.SERVER_ORDER },
                { id: Ed.RECENTLY_JOINED, label: L.intl.string(L.t.CbaapP), value: Ed.RECENTLY_JOINED },
                { id: Ed.ACTIVITY_SHARING_ON, label: L.intl.string(A2.default.ZI51JZ), value: Ed.ACTIVITY_SHARING_ON },
                {
                    id: Ed.ACTIVITY_SHARING_OFF,
                    label: L.intl.string(A2.default["+kxafn"]),
                    value: Ed.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        x = p.find((e) => e.value === s)?.label ?? "";
    return (0, m.jsxs)("div", {
        className: Eg.iE,
        children: [
            t,
            (0, m.jsxs)("div", {
                className: Eg.N1,
                children: [
                    (0, m.jsx)(Ab.I, {
                        query: i,
                        onChange: l,
                        onClear: function () {
                            (te.default.track(h.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                                l(""));
                        },
                        onFocus: () =>
                            te.default.track(h.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        onBlur: () =>
                            te.default.track(h.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: g,
                            }),
                        placeholder: L.intl.string(L.t["H+nRYw"]),
                        "aria-label": L.intl.string(L.t["5h0QOP"]),
                        inputProps: { "aria-controls": S, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, m.jsxs)("div", {
                            className: Eg.gO,
                            children: [
                                (0, m.jsx)(r9.Y, {
                                    targetElementRef: T,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, m.jsx)(d_.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": L.intl.string(L.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, m.jsx)(e2.rX, {
                                                children: p.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, m.jsx)(
                                                        e2.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: s === i,
                                                            action: () => {
                                                                (te.default.track(
                                                                    h.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
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
                                        (0, m.jsxs)(n$.D, {
                                            ...e,
                                            innerRef: T,
                                            className: Eg.Ku,
                                            children: [
                                                (0, m.jsx)(Y.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, m.jsx)(dJ.a, { size: "xs", color: nq.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, m.jsx)(A_.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? L.intl.string(L.t["7lxcLO"]) : L.intl.string(L.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, m.jsx)(lt.A, {
                "aria-live": "polite",
                role: "region",
                children: L.intl.format(A2.default.EvzDff, { count: n.length }),
            }),
            (0, m.jsxs)("ul", {
                className: Eg.X1,
                id: S,
                "aria-label": L.intl.string(L.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, m.jsx)("div", {
                            className: Eg.pb,
                            children: (0, m.jsx)(Y.E, {
                                className: Eg.R$,
                                variant: "text-lg/medium",
                                children: L.intl.string(L.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, m.jsx)(
                            Em,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var EE = n(68322);
let Eh = (0, u.E2)(d.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [L.intl.string(A2.default["/LHVbt"])],
        Component: function () {
            let e = O.tz.useSetting()
                ? null
                : (0, m.jsx)("div", {
                      className: EE.l,
                      children: (0, m.jsx)(iB.w, { type: "warning", children: L.intl.string(A2.default["xxI0/W"]) }),
                  });
            return (0, m.jsx)(EA, { notice: e });
        },
    }),
    ES = (0, u.zZ)(d.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => L.intl.string(L.t.bwqjL9),
        buildLayout: () => [Ei, Eh, A9],
    }),
    ET = (0, u.zD)(d.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => L.intl.string(A2.default.khuuzv),
        useSubtitle: () => L.intl.string(A2.default["8EWsJ8"]),
        useValue: () => O.e.useSetting(),
        setValue: (e) => O.e.updateSetting(e),
    }),
    Ep = (0, u.E2)(d.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, m.jsx)(Y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: L.intl.format(L.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, m.jsx)(
                            Y.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    Ex = (0, u.zD)(d.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => L.intl.string(A2.default.Uz5Ipi),
        useSubtitle: () => L.intl.string(A2.default.CZI2Gb),
        useValue: () => O.UM.useSetting(),
        setValue: (e) => O.UM.updateSetting(e),
    }),
    Ef = (0, u.zZ)(d.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => L.intl.string(A2.default["89YBr5"]),
        useSubtitle: () => L.intl.string(L.t.uGDpgH),
        buildLayout: () => [ET, Ex, Ep],
        useSearchTerms: () => [L.intl.string(L.t.VOszPA)],
    }),
    EI = (0, u.t_)(d.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => L.intl.string(L.t.Cq98yL),
        buildLayout: () => [A4, ES, Ef],
    }),
    EN = (0, u.i4)(d.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.Cq98yL),
        icon: AY._,
        buildLayout: () => [EI],
    });
var E_ = n(712440),
    EC = n(370997);
let Eb = (0, u.E2)(d.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: EC.Ay,
    useSearchTerms: () => [L.intl.string(L.t["f6kk+r"])],
});
var Ey = n(462887),
    Ev = n(478016),
    Ej = n(789645),
    EO = n(559106),
    EL = n(77468),
    ED = n(289498),
    ER = n(573648),
    EP = n(874490),
    EG = n(370480),
    EM = n(968309);
let EU = new Set([h.fg2.XBOX, h.fg2.PLAYSTATION, h.fg2.PLAYSTATION_STAGING, h.fg2.CRUNCHYROLL]);
var EV = n(169869),
    Ek = n(814925),
    Ew = n(733110),
    EF = n(479785),
    EB = n(757036),
    Ez = n(555837),
    EX = n(43990),
    EY = n(241524),
    EH = n(51965),
    EK = n(377368),
    EW = n(631368),
    EZ = n(212739),
    Eq = n(30370),
    EQ = n(181666),
    EJ = n(553875),
    E$ = n(660594);
function E0() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, EW.$)()),
            (t = (0, EZ.O)()),
            (l = null != (i = (0, E.bG)([Eq.A], () => Eq.A.getAccount(null, h.fg2.XBOX))) && !i.revoked),
            e === EW.C.NONE || t
                ? { variant: EW.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === EW.C.NO_ACCESS && !l }),
        { analyticsLocations: a } = (0, eR.Ay)(tO.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, EK.yW)(a),
        u = (0, EY.A)("(max-width: 485px)");
    if (s === EW.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (s) {
        case EW.C.HAS_ACCESS:
        case EW.C.BLOCK_CLAIM:
            ((c = L.intl.string(EJ.default["7PdsMK"])),
                (g = (0, m.jsx)(EH.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: L.intl.string(EJ.default.CubeLC),
                    onClick: () => {
                        (0, lr.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, m.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                        });
                    },
                })));
            break;
        case EW.C.NO_ACCESS:
            ((c = L.intl.string(EJ.default.NwkRTZ)),
                (g = (0, m.jsx)(tG.A, {
                    defaultTextOverride: L.intl.string(EJ.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tz.pe.TIER_2,
                })));
            break;
        default:
            (0, it.xb)(s);
    }
    return (0, m.jsxs)(eR.f5, {
        value: a,
        children: [
            (0, m.jsxs)("div", {
                className: E$.bV,
                children: [
                    (0, m.jsx)(T.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: L.intl.string(L.t.NG1e6l),
                    }),
                    (0, m.jsx)(r0.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, m.jsx)(EX.N, {
                theme: h.NJ8.DARK,
                children: (e) =>
                    (0, m.jsx)("div", {
                        className: e,
                        children: (0, m.jsxs)("div", {
                            className: E$.Nr,
                            children: [
                                (0, m.jsxs)("div", {
                                    className: E$.Tp,
                                    children: [
                                        (0, m.jsx)("div", {
                                            className: E$.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, m.jsx)("div", { className: E$.$h }),
                                        (0, m.jsx)("div", { className: E$.Rv }),
                                        (0, m.jsx)("div", { className: E$.Lw }),
                                    ],
                                }),
                                (0, m.jsxs)("div", {
                                    className: E$.Mn,
                                    children: [
                                        (0, m.jsxs)("div", {
                                            className: E$.mY,
                                            children: [
                                                (0, m.jsx)("img", {
                                                    className: E$.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, m.jsx)(Y.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: E$.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, m.jsx)("div", { className: E$.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, m.jsxs)(m.Fragment, {
                                        children: [
                                            (0, m.jsx)("div", { className: E$.yF }),
                                            (0, m.jsxs)("div", {
                                                className: E$.sQ,
                                                children: [
                                                    (0, m.jsx)(oQ.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: nq.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, m.jsx)(Y.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: L.intl.format(EQ.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(EK.Hx.CONNECT),
                                                                    (0, EM.A)({
                                                                        platformType: h.fg2.XBOX,
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
var E1 = n(201718),
    E2 = n(321078),
    E3 = n(672130),
    E6 = n(379848),
    E5 = n(688901);
function E4(e) {
    let { markAsDismissed: t } = e;
    return (
        A.useEffect(() => t(cj.i.UNKNOWN), [t]),
        (0, m.jsx)(tt.Lp, { className: E5.Ad, text: L.intl.string(L.t.y2b7CA) })
    );
}
function E8(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, m.jsxs)("div", {
        className: E5.kL,
        children: [
            i,
            (0, m.jsxs)("div", {
                className: E5.FS,
                children: [
                    (0, m.jsxs)("div", {
                        className: E5.TK,
                        children: [
                            (0, m.jsx)(E6.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, m.jsx)(E4, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, m.jsx)(Y.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, m.jsx)(Y.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, m.jsx)(I.$, { text: L.intl.string(L.t.vD60Pv), onClick: s }),
        ],
    });
}
function E7() {
    let e = ep.A.getArticleURL(h.MVz.PS_CONNECTION);
    return (0, m.jsx)(E8, {
        title: L.intl.string(L.t.v20wwm),
        body: L.intl.format(L.t.lTZBit, { help_article: e }),
        img: (0, m.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eo.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, EM.A)({ platformType: h.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let E9 = "/assets/9df988a227916145.png";
function he() {
    return (0, m.jsx)(E8, {
        title: L.intl.string(EQ.default["9cLtDI"]),
        body: L.intl.format(EQ.default["D+kUbg"], { learnMoreLink: ep.A.getArticleURL(h.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, m.jsx)("img", { src: E9, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eo.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, EM.A)({ platformType: h.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function ht() {
    let e = ep.A.getArticleURL(h.MVz.XBOX_CONNECTION);
    return (0, m.jsx)(E8, {
        title: L.intl.string(L.t["2okkZV"]),
        body: L.intl.format(L.t.OnERSS, { help_article: e }),
        img: (0, m.jsx)("img", { src: E9, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eo.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, EM.A)({ platformType: h.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var hn = n(783419),
    hi = n(534952),
    hl = n(211180),
    hs = n(247259);
function hr(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, E.cf)(
            [Eq.A],
            () => ({
                isJoining: Eq.A.isJoining(n.id),
                joinErrorMessage:
                    "" === Eq.A.joinErrorMessage(n.id) ? L.intl.string(L.t.j2d6Km) : Eq.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== Eq.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, E.bG)([lE.A], () => lE.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, m.jsx)(I.$, {
                size: "sm",
                onClick: function () {
                    EL.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? L.intl.string(L.t.RXvQQu) : L.intl.string(L.t.XpeFYr),
            })),
        (0, m.jsxs)("div", {
            className: hs.iA,
            children: [
                (0, m.jsxs)("div", {
                    className: hs.XX,
                    children: [
                        (0, m.jsx)(dv.Ay, { size: dv.Ay.Sizes.SMALL, guild: n.guild, className: hs.$f }),
                        (0, m.jsxs)("div", {
                            className: hs.Vn,
                            children: [
                                (0, m.jsx)(Y.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, m.jsx)(nt.Anchor, {
                                    href: ER.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, m.jsx)(Y.E, {
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
                    (0, m.jsx)(Y.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: hs.R,
                        children: l,
                    }),
            ],
        })
    );
}
function ha(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s =
            ((t = l.id),
            (n = (0, Ez.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (i = (0, EB.L)(tz.PremiumTypes.TIER_2)),
            !n && !i && !/^\d+$/.test(t));
    return l.type === h.fg2.XBOX && s
        ? (0, m.jsx)(he, {})
        : l.twoWayLink
          ? null
          : l.type === h.fg2.XBOX
            ? (0, m.jsx)(ht, {})
            : l.type === h.fg2.PLAYSTATION
              ? (0, m.jsx)(E7, {})
              : null;
}
function ho(e) {
    let t,
        n,
        i,
        l,
        s,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, E] = A.useState(u.friendSync),
        [S, T] = A.useState(u.visibility),
        [p, x] = A.useState(u.metadataVisibility),
        [f, N] = A.useState(u.showActivity),
        [_, C] = A.useState(null),
        [b, y] = A.useState(null),
        [v, j] = A.useState(!1),
        [O, D] = A.useState([]),
        R = (0, EP.ML)(u.type),
        P = ER.A.get(R);
    A.useEffect(() => {
        (E(u.friendSync), T(u.visibility), x(u.metadataVisibility), N(u.showActivity));
    }, [u]);
    let G = { inProgressVisibility: _, inProgressMetadataVisibility: b },
        M = A.useRef(G);
    return (
        A.useEffect(() => {
            M.current = G;
        }),
        A.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = M.current;
            (null != e && (T(e), EL.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (x(t), EL.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, m.jsxs)("div", {
            className: hs.FI,
            children: [
                ((t = ER.A.get(u.type)),
                (n = ER.A.get(R)),
                (i = "1" === (u.metadata ?? {})[hn.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === h.fg2.TWITTER &&
                    i &&
                    (l = (0, m.jsx)(le.m, {
                        text: L.intl.string(L.t.Jebrww),
                        children: (0, m.jsx)(Ek.A, {
                            color: nq.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, m.jsx)(Ev.U, { size: "xs", color: nq.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, m.jsxs)("div", {
                    className: hs.Il,
                    children: [
                        (0, m.jsx)("img", {
                            alt: n.name,
                            className: hs.gj,
                            src: (0, Ey.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, m.jsxs)("div", {
                            children: [
                                (0, m.jsxs)("div", {
                                    className: hs.$p,
                                    children: [
                                        (0, m.jsx)(Y.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: hs.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, m.jsx)("div", { className: hs.cG, children: l }),
                                    ],
                                }),
                                (0, m.jsx)(Y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: hs.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? L.intl.format(hl.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, m.jsx)(n$.D, {
                            className: hs.uH,
                            onClick: function () {
                                let e = ER.A.get(u.type);
                                (0, lr.openModal)((t) =>
                                    (0, m.jsx)(ls.Modal, {
                                        title: L.intl.formatToPlainString(L.t.U5x12f, { name: e.name }),
                                        subtitle: L.intl.format(L.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: L.intl.string(L.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: L.intl.string(L.t.bsbMVz),
                                                onClick: () => {
                                                    (o(), t.onClose());
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            EU.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, m.jsx)(lK.A, {
                                                children: L.intl.format(L.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": L.intl.string(L.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, m.jsx)(Ej.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, m.jsx)(ha, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, EG.An)(t[hn.pK.CREATED_AT], c);
                    switch (e.type) {
                        case h.fg2.REDDIT:
                            n = (0, EV.xE)(t, hs.Nz);
                            break;
                        case h.fg2.STEAM:
                            n = (0, EV.dy)(t, hs.Nz);
                            break;
                        case h.fg2.BLUESKY:
                        case h.fg2.TWITTER:
                        case h.fg2.MASTODON:
                            n = (0, EV.ED)(t, hs.Nz);
                            break;
                        case h.fg2.EBAY:
                            n = (0, EV.ub)(t, hs.Nz);
                            break;
                        case h.fg2.PAYPAL:
                            n = (0, EV.gZ)(t, hs.Nz);
                            break;
                        case h.fg2.TIKTOK:
                            n = (0, EV.HU)(t, hs.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, m.jsx)(
                                Y.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: hs.M4,
                                    children: L.intl.format(L.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = L.intl.string(L.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== ER.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, m.jsx)(tt.Lp, { className: hs.Z3, text: L.intl.string(L.t.y2b7CA) }, "badge"),
                                (0, m.jsx)(
                                    Y.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: hs.vt,
                                        children: L.intl.format(L.t.Up2ni7, {
                                            helpdeskUrl: ep.A.getArticleURL(h.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = L.intl.string(L.t["LVh3/5"])));
                    return (
                        l && (s = L.intl.string(L.t.i4jeWR)),
                        n.push(
                            (0, m.jsx)(
                                "div",
                                {
                                    className: hs.jy,
                                    children: (0, m.jsx)(I.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: v,
                                        disabled: l,
                                        "aria-label": L.intl.string(L.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  (j(!0),
                                                      EL.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              (O.push(e.id), D(O), j(!1));
                                                          }, 2e3);
                                                      }));
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, m.jsx)("div", { className: hs.tJ, children: n })
                    );
                })(u),
                (h.txh.has(u.type) &&
                    (s = (0, m.jsx)(tQ.d, {
                        label: L.intl.string(L.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (E(e), EL.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                h.ewM.has(u.type) &&
                    (r = (0, m.jsx)(tQ.d, {
                        label: L.intl.format(L.t["6u6J0q"], { platform: P.name }),
                        checked: f,
                        onChange: function (e) {
                            (N(e), EL.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                ER.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, m.jsx)(tQ.d, {
                        label: L.intl.string(L.t.FYKGsL),
                        checked: 1 === p,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, EM.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (x(n), EL.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== S || null == u.metadata,
                    })),
                (0, m.jsxs)("div", {
                    className: hs.HZ,
                    children: [
                        (0, m.jsx)(tQ.d, {
                            label: L.intl.string(L.t.f7yOAX),
                            checked: 1 === S,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (C(n), (0, EM.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (T(n), EL.A.setVisibility(u.type, u.id, n));
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, m.jsx)(i4.c, {});
                })(),
                u.revoked
                    ? (0, m.jsx)(r1.p, {
                          messageType: r1.Y.INFO,
                          children: L.intl.format(L.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, EM.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, m.jsx)(tq.D, {
                            label: L.intl.string(L.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, m.jsx)(hr, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, m.jsx)(EF.A, { partner: u.type }),
            ],
        })
    );
}
function hu(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, m.jsxs)("div", {
              className: hs.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = j.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, m.jsxs)("div", {
                          className: hs.Il,
                          children: [
                              (0, m.jsx)("img", { alt: n.name, className: is()(hs.gj, hs.sN), src: i }),
                              (0, m.jsxs)("div", {
                                  children: [
                                      (0, m.jsx)("div", {
                                          className: hs.$p,
                                          children: (0, m.jsx)(Y.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: hs.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, m.jsx)(Y.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: hs.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, m.jsx)(n$.D, {
                                  className: hs.uH,
                                  onClick: () =>
                                      (0, EC.d1)(n, t.scopes, () => {
                                          E_.A.delete(t.id);
                                      }),
                                  "aria-label": L.intl.string(L.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, m.jsx)(Ej.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, m.jsx)("div", {
                      className: hs.HZ,
                      children: (0, m.jsx)(tQ.d, {
                          label: L.intl.string(L.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              E1.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function hd(e) {
    let t = ER.A.get(e);
    ((0, EM.A)({ platformType: t.type }),
        te.default.track(h.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function hc() {
    let e = (0, EP.gn)(),
        t = (0, iW.A)((0, hi.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, m.jsxs)("div", {
        className: hs.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, m.jsx)(
                        E3.A,
                        { application: e, className: hs.__invalid_accountButton, innerClassName: hs.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, m.jsx)(
                        ED.A,
                        { type: e.type, className: hs.__invalid_accountButton, innerClassName: hs.U$ },
                        e.type,
                    ),
                ),
            (0, m.jsx)(le.m, {
                text: L.intl.string(L.t.QqTz8b),
                children: (0, m.jsx)("div", {
                    className: is()(hs.ej, hs.__invalid_accountButton),
                    children: (0, m.jsx)(EO.vN, {
                        children: (0, m.jsx)("button", {
                            className: is()(hs.R8, hs.U$),
                            type: "button",
                            onClick: function () {
                                e6.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: hd });
                            },
                            "aria-label": L.intl.string(L.t.Zhcj9X),
                            children: (0, m.jsx)(n1._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": L.intl.string(L.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function hg(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = A.useMemo(() => i.filter((e) => ER.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, m.jsx)(a9.y, { type: a9.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, m.jsx)(mF.pp, {
                    theme: r,
                    className: hs.p$,
                    children: (0, m.jsx)(mF.SG, {
                        note: L.intl.string(L.t.WenGZ2),
                        children: L.intl.string(L.t.aoLS84),
                    }),
                })
              : (0, m.jsxs)(m.Fragment, {
                    children: [
                        (0, m.jsx)(T.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: L.intl.format(L.t.AioIGb, { count: l.length + o.length }),
                        }),
                        l.map((e, t) =>
                            (0, m.jsx)(
                                hu,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, m.jsx)(
                                ho,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            EL.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, m.jsx)("div", { className: hs.V, children: t })
    );
}
let hm = (0, u.E2)(d.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, m.jsx)(tq.D, { label: L.intl.string(L.t["t+aGse"]), children: (0, m.jsx)(hc, {}) });
        },
        useSearchTerms: () => [
            L.intl.string(L.t.Zhcj9X),
            L.intl.string(L.t.QqTz8b),
            L.intl.string(L.t["+/hZM/"]),
            L.intl.string(L.t.bsbMVz),
            L.intl.string(L.t.f7yOAX),
            L.intl.string(L.t.FYKGsL),
            L.intl.string(L.t["+KCMSi"]),
        ],
    }),
    hA = (0, u.E2)(d.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, E.bG)([e9.A], () => e9.A.hidePersonalInformation),
                t = (0, E.bG)([Eq.A], () => Eq.A.isFetching()),
                n = (0, E.bG)([Eq.A], () => Eq.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, E.cf)([Ew.default], () => ({
                    authorizedAppsFetchState: Ew.default.getFetchState(),
                    authorizedApps: Ew.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, E2.A)(sn.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, uM.Ay)(),
                o = (0, E.bG)([ok.default], () => ok.default.locale);
            return (A.useEffect(() => {
                i === Ew.FetchState.NOT_FETCHED && E_.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, m.jsxs)(m.Fragment, {
                      children: [
                          (0, m.jsx)(E0, {}),
                          (0, m.jsx)(hg, {
                              fetching: t || s || (r.length > 0 && i !== Ew.FetchState.FETCHED),
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
            EL.A.fetch();
        },
        useSearchTerms: () => [
            L.intl.string(L.t["+/hZM/"]),
            L.intl.string(L.t.bsbMVz),
            L.intl.string(L.t.f7yOAX),
            L.intl.string(L.t.FYKGsL),
            L.intl.string(L.t["+KCMSi"]),
        ],
    });
var hE = n(206828);
let hh = (0, u.zZ)(d.X.CONNECTIONS_CATEGORY, {
        useTitle: () => L.intl.string(L.t["3fe7U5"]),
        useSubtitle: () => L.intl.string(L.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, E.bG)([Eq.A], () => Eq.A.getAccounts()),
                t = A.useMemo(
                    () =>
                        ER.A.filter(
                            (e) =>
                                e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") ===
                                !0,
                        ).filter((t) => e.some((e) => e.type === t.type)),
                    [e],
                ),
                [n, i] = A.useState(0),
                [l, s] = A.useState(t),
                r = t !== l;
            r && (s(t), i(0));
            let a = A.useMemo(() => t[n], [t, n]),
                o = (0, iW.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, hE.RD)(o),
                m =
                    a?.type === h.fg2.RIOT_GAMES || a?.type === h.fg2.LEAGUE_OF_LEGENDS
                        ? L.intl.string(hl.default["1S6oAo"])
                        : o?.name,
                S = null != a && c,
                T = S && !d && u && o?.connectionEntrypointUrl != null;
            return (
                r || !S || T || i((e) => e + 1),
                A.useMemo(
                    () =>
                        T
                            ? {
                                  type: g.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: L.intl.format(hl.default.wUXupS, {
                                      connectionName: a.name,
                                      applicationName: m,
                                      connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                      helpCenterLink:
                                          a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                                  }),
                              }
                            : null,
                    [a, m, o, T],
                )
            );
        },
        buildLayout: () => [hm, hA],
    }),
    hS = (0, u.zZ)(d.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => L.intl.string(L.t["f6kk+r"]),
        useSubtitle: () => L.intl.string(L.t.G9JfLg),
        buildLayout: () => [Eb],
        initialize: () => (
            E_.A.fetch(),
            () => {
                EC.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    hT = (0, u.t_)(d.X.CONNECTED_APPS_PANEL, {
        useTitle: () => L.intl.string(L.t.lrVuZO),
        useObscuredNotice: a8.L,
        buildLayout: () => [hh, hS],
    }),
    hp = (0, u.i4)(d.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.lrVuZO),
        icon: mB.LinkIcon,
        buildLayout: () => [hT],
    });
var hx = n(625657),
    hf = n(592598),
    hI = n(773371),
    hN = n(184809),
    h_ = n(672396);
let hC = hy(null);
function hb() {
    var e;
    let t = hy(hC);
    ((e = hC),
        F().isEqual(F().omit(t, "old_enabled"), F().omit(e, "old_enabled")) ||
            (te.default.track(h.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (hC = t)));
}
function hy(e) {
    let t = hN.default.getNotificationPositionMode(),
        n = t !== h.G6Q.DISABLED,
        i = lG.Ay.getOverlayKeybind(),
        l = lG.Ay.getOverlayChatKeybind();
    return {
        enabled: hI.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: hf.A.isNotificationDisabled(h_.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ll.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, ll.dI)(l.shortcut) : null,
        text_opacity_slider: hN.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? hI.default.enabled,
    };
}
var hv = n(237984),
    hj = n(63035);
function hO(e) {
    (e.preventDefault(), e.stopPropagation());
}
function hL(e) {
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
    return (0, m.jsxs)("div", {
        className: is()(hj.HS, d),
        children: [
            (0, m.jsxs)(Ay.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, m.jsx)("div", { className: hj.x_, children: t }),
                    (0, m.jsxs)("div", {
                        className: hj.rN,
                        children: [
                            null != n && (0, m.jsx)("div", { className: hj.$t, children: n }),
                            (0, m.jsxs)("div", {
                                className: hj.c8,
                                children: [
                                    (0, m.jsx)(Y.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: hj.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, m.jsx)(Y.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, m.jsx)(Y.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, m.jsx)("div", { className: hj.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, m.jsx)("div", { className: hj.Om, children: a }),
        ],
    });
}
let hD = (0, u.E2)(d.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, m.jsx)(hL, {
            title: L.intl.string(L.t["z4/l+V"]),
            description: L.intl.string(L.t["3aZq/0"]),
            action: (0, m.jsx)(I.$, {
                variant: "primary",
                text: L.intl.string(L.t.s2nVhG),
                onClick: () => {
                    (0, hv.b)(tO.A.USER_SETTINGS, h.BRT.APP);
                },
            }),
            "aria-label": L.intl.string(L.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [L.intl.string(L.t["z4/l+V"])],
});
var hR = n(31300),
    hP = n(780907),
    hG = n(684013),
    hM = n(56562),
    hU = n(311043),
    hV = n(569926),
    hk = n(810412),
    hw = n(41984),
    hF = n(296027),
    hB = n(562519);
let hz = 5 * n(927813).A.Millis.DAY,
    hX = new hB.A("overlay_survey_timestamps");
function hY(e, t) {
    let i, l;
    ((i = Date.now()),
        (null != (l = Array.from(hX.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < hz) ||
            Array.from(hX.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, lr.openModalLazy)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), hX.add(i), (n) => (0, m.jsx)(l, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function hH() {
    (0, i1.sL)("overlay-settings");
}
function hK(e) {
    let { className: t, game: n } = e;
    return (0, i1.NP)() && null != n && n.elevated
        ? (0, m.jsx)("div", {
              className: t,
              children: (0, m.jsx)(r1.p, {
                  messageType: r1.Y.WARNING,
                  action: (0, m.jsx)(I.$, {
                      variant: "secondary",
                      size: "sm",
                      text: L.intl.string(L.t["1iI46O"]),
                      onClick: hH,
                  }),
                  children: L.intl.format(L.t["LJzl+0"], { helpCenterLink: ep.A.getArticleURL(h.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var hW = n(760751),
    hZ = n(9302),
    hq = n(656513);
let hQ = new Set([
    hw.AR.INITIALIZING,
    hw.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    hw.AR.WAITING_FOR_MODULE_TRACKING,
    hw.AR.WAITING_FOR_OVERLAY_OPEN,
    hw.AR.WAITING_FOR_POPOUT_OPEN,
    hw.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    hw.AR.WAITING_FOR_REACT_INITIALIZATION,
    hw.AR.WAITING_FOR_PID_FOCUS,
    hw.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function hJ(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = A.useState(!1);
    return (0, m.jsx)(hq.N, {
        className: hj.uR,
        collapsibleContent: (0, m.jsx)("div", { className: hj.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, m.jsx)(hL, {
                ...l,
                onClick: (e) => {
                    var n;
                    (r((n = !s)), i?.(n), t?.(e));
                },
                className: is()(hj.AC, n),
                action: (0, m.jsxs)("div", {
                    className: hj.rc,
                    children: [
                        l.action,
                        s
                            ? (0, m.jsx)(dJ.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, m.jsx)(n1._, {
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
let h$ = (0, u.E2)(d.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = iJ();
        (0, hV.I)(e?.id);
        let n = e?.pid,
            i = (0, E.bG)(
                [hF.default],
                () => (null == e || null == n ? null : hF.default.getTrackedGameByPid(n)),
                [e, n],
                iH(),
            ),
            { data: l } = (0, hV.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, E.cf)(
                [hW.A, tn.A, hU.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, iq.hw)(e, !1, [hW.A, tn.A, hU.A]),
                [e, i],
            ),
            a = (0, E.bG)(
                [iq.Ay, hW.A, tn.A, hU.A],
                () => (null == e ? null : (0, iq.xU)(e, iq.Ay, hW.A, tn.A, hU.A)),
                [e],
                iH(),
            ),
            [o, u] = A.useState(r),
            [d, c] = A.useState(s),
            [g, h] = A.useState(!1);
        A.useEffect(() => {
            (u(r), c(s));
        }, [r, s]);
        let S = !(0, hZ.supportsLegacy)(),
            T = !(0, hZ.supportsOutOfProcess)(),
            { legacyEnabled: p, oopEnabled: x } = (0, E.cf)([hF.default], () => hF.default.getGlobalEnabledStatus());
        function f(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case hk.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), hP.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case hk.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), hP.Ay.toggleOverlay(e, d, t), (l = !t && o));
                    break;
                case hk.OverlayToggledClientSettingType.LEGACY:
                    (hG.A.setEnabled(t, x), (0, hk.Q3)(t, hk.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case hk.OverlayToggledClientSettingType.OOP:
                    (hG.A.setEnabled(p, t), (0, hk.Q3)(t, hk.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || l) &&
                hY(
                    i ? hk.OverlayToggledClientSettingType.LEGACY_GAME : hk.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = S && T,
            N = !p && !x,
            _ = !o && !p && d && !S,
            C = !d && !x && o && !T,
            b = i?.overlayMethod === hw.Ue.Disabled,
            y = i?.state === hw.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && hQ.has(i.state) && !b,
            j = i?.overlayMethod === hw.Ue.OutOfProcess,
            O = i?.overlayMethod === hw.Ue.OutOfProcessLimitedInteraction,
            D = i?.overlayMethod === hw.Ue.Hook,
            R = i?.state === hw.AR.OVERLAY_CRASHED || i?.state === hw.AR.OVERLAY_CRASHED_DISABLED,
            P = !o && !d,
            [G, M] = (function () {
                switch (!0) {
                    case y && j:
                        return [
                            L.intl.format(L.t.hFVBIg, {
                                overlayMethod: L.intl.string(L.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, m.jsx)(
                                        Y.E,
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
                            L.intl.format(L.t.hFVBIg, {
                                overlayMethod: L.intl.string(L.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, m.jsx)(
                                        Y.E,
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
                    case y && D:
                        return [
                            L.intl.format(L.t.hFVBIg, {
                                overlayMethod: L.intl.string(L.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, m.jsx)(
                                        Y.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== hM.aI.BORDERLESS_FULLSCREEN:
                                        return L.intl.string(L.t.mJmbeC);
                                    case T:
                                        return L.intl.string(L.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return L.intl.string(L.t.WiY24u);
                                    case !x:
                                        return L.intl.string(L.t.cAFVsL);
                                    case !(l?.supportsOutOfProcessOverlay ?? !0):
                                        return L.intl.string(L.t.XcGEcs);
                                    default:
                                        return L.intl.string(L.t.bJXH2v);
                                }
                            })(),
                        ];
                    case R:
                        return [L.intl.string(L.t.OFC2aw), null];
                    case I:
                        return [L.intl.string(L.t.m7X4az), null];
                    case N:
                        return [L.intl.string(L.t["9DUS5l"]), null];
                    case P:
                        return [L.intl.string(L.t.nQ9EdJ), null];
                    case _:
                    case C:
                        return [L.intl.string(L.t.VWUn0a), null];
                    case v:
                        if (j) return [L.intl.string(L.t["s8+CFq"]), null];
                        if (D) return [L.intl.string(L.t.JEEdqt), null];
                        if (O) return [L.intl.string(L.t.pzBMwY), null];
                        return [L.intl.string(L.t["2Xhy9k"]), null];
                    case null == i:
                        return [L.intl.string(L.t.vwHPRi), null];
                    case b: {
                        let e = i?.fullscreenType === hM.aI.FULLSCREEN ? L.intl.string(L.t.mJmbeC) : null;
                        return [L.intl.string(L.t.VPW4XY), e];
                    }
                    default:
                        return [L.intl.string(L.t.ONovP5), null];
                }
            })();
        (0, eh.Ay)(() => {
            hP.Ay.getDetectableGames();
        });
        let [U, V] = A.useMemo(
            () =>
                v
                    ? ["text-muted", nq.A.colors.TEXT_MUTED.css]
                    : y && O
                      ? ["text-feedback-warning", nq.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && j
                        ? ["text-feedback-positive", nq.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && D
                          ? ["text-strong", nq.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", nq.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, O, j, D],
        );
        return null == e
            ? null
            : (0, m.jsxs)(hJ, {
                  onExpand: h,
                  className: g ? hj.tx : void 0,
                  title: (0, m.jsxs)(m.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, m.jsx)(le.m, {
                                    text: L.intl.string(L.t["4PJP5p"]),
                                    children: (0, m.jsx)(Ek.A, {
                                        size: 16,
                                        color: nq.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, m.jsx)(Ev.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: nq.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: G,
                  hint: null != M ? M : void 0,
                  header: (0, m.jsxs)(m.Fragment, {
                      children: [
                          y || v
                              ? (0, m.jsx)(hR.k, { size: "xxs", color: V })
                              : (0, m.jsx)("div", { className: hj.W4 }),
                          (0, m.jsx)(Y.E, {
                              variant: "text-xs/semibold",
                              color: U,
                              children: L.intl.string(L.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, m.jsx)(i$.A, { game: t, pid: e?.pid, size: i$.M.MEDIUM }),
                  "aria-label": L.intl.string(L.t["87O5GC"]),
                  action: (0, m.jsx)(n$.D, {
                      onClick: (e) => hO(e),
                      children: (0, m.jsx)(tQ.d, {
                          checked: (o && x) || (d && p),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          (hP.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o));
                                          break;
                                      case "global":
                                          (hG.A.setEnabled(t, t), (i = !t && p), (l = !t && x));
                                          break;
                                      case "both":
                                          (hG.A.setEnabled(t, t),
                                              hP.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && p) || (!t && d)),
                                              (l = (!t && x) || (!t && o)));
                                  }
                                  let s = null;
                                  (i
                                      ? (s =
                                            "game" === n
                                                ? hk.OverlayToggledClientSettingType.LEGACY_GAME
                                                : hk.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? hk.OverlayToggledClientSettingType.OOP_GAME
                                                : hk.OverlayToggledClientSettingType.OOP),
                                      null != s && hY(s, e.id ?? null));
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
                  warning: (0, m.jsx)(hK, { className: hj.Hh, game: e }),
                  children: [
                      (0, m.jsx)(hL, {
                          title: L.intl.string(L.t["7BlVIs"]),
                          description: L.intl.string(L.t.ndgADE),
                          hint: x ? void 0 : L.intl.string(L.t.cAFVsL),
                          "aria-label": L.intl.string(L.t["7BlVIs"]),
                          action: (0, m.jsxs)(m.Fragment, {
                              children: [
                                  (0, m.jsx)(tQ.d, {
                                      checked: o && x,
                                      disabled: T,
                                      onChange: (e) => {
                                          e && !x
                                              ? f(e, hk.OverlayToggledClientSettingType.OOP)
                                              : f(e, hk.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, m.jsx)("div", { className: hj.Kz }),
                              ],
                          }),
                      }),
                      (0, m.jsx)(hL, {
                          title: L.intl.string(L.t.BfFpW1),
                          description: L.intl.string(L.t.OzInYk),
                          hint: p ? void 0 : L.intl.string(L.t["3sYHXm"]),
                          "aria-label": L.intl.string(L.t.BfFpW1),
                          action: (0, m.jsxs)(m.Fragment, {
                              children: [
                                  (0, m.jsx)(tQ.d, {
                                      checked: d && p,
                                      disabled: S,
                                      onChange: (e) => {
                                          e && !p
                                              ? f(e, hk.OverlayToggledClientSettingType.LEGACY)
                                              : f(e, hk.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, m.jsx)("div", { className: hj.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = iJ();
        return null != e;
    },
    useSearchTerms: () => [L.intl.string(L.t["9cb1Uz"])],
});
var h0 = n(206885);
function h1(e) {
    let { game: t, gameApplication: n } = e,
        i = A.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, E.bG)([iK.A], () => (null != n ? n : iK.A.getApplication(t?.id)), [n, t]);
    return (0, m.jsx)(i$.A, { game: l, pid: i, size: i$.M.SMALL });
}
function h2(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, hV.I)(t?.id);
    let o = (0, E.cf)([iq.Ay, hW.A, tn.A, hU.A], () => (0, iq.xU)(t, iq.Ay, hW.A, tn.A, hU.A)),
        u = (0, E.cf)([hW.A, tn.A, hU.A], () => (0, iq.hw)(t, !1, [hW.A, tn.A, hU.A]), [t]),
        d = l(u),
        [c, g] = A.useState(d);
    return (
        A.useEffect(() => {
            g(d);
        }, [d]),
        (0, m.jsx)(hL, {
            title: t.name,
            icon: (0, m.jsx)(h1, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, m.jsxs)(m.Fragment, {
                children: [
                    (0, m.jsx)(tQ.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), s(e, o, u), n && hY(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, m.jsx)("div", { className: hj.Kz }),
                ],
            }),
        })
    );
}
let h3 = (0, u.E2)(d.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = A.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, E.cf)([hF.default], () =>
                    hF.default.getGlobalEnabledStatus(),
                ),
                l = (0, E.yK)([iq.Ay], () => iq.Ay.getGamesSeen(!0)).filter((e) => !(0, AH.n1)(e)),
                s = (0, iW.A)(l.map((e) => e.id)),
                r = !(0, hZ.supportsLegacy)();
            function a(e) {
                hG.A.setEnabled(e, i);
                let t = iq.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, hk.Q3)(e, hk.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && hY(hk.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                hP.Ay.toggleOverlay(t, e, i);
            }
            let u = A.useMemo(
                () =>
                    (0, hZ.supportsLegacy)()
                        ? r
                            ? L.intl.string(L.t.r9jEVw)
                            : L.intl.string(L.t.OzInYk)
                        : L.intl.string(L.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, m.jsx)(hL, {
                      title: L.intl.string(L.t.BfFpW1),
                      description: u,
                      "aria-label": L.intl.string(L.t.BfFpW1),
                      className: hj.dA,
                      action: (0, m.jsxs)(m.Fragment, {
                          children: [
                              (0, m.jsx)(tQ.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              h0.O && (0, m.jsx)("div", { className: hj.Kz }),
                          ],
                      }),
                  })
                : (0, m.jsxs)(hJ, {
                      onExpand: t,
                      className: e ? hj.tx : void 0,
                      title: L.intl.string(L.t.BfFpW1),
                      description: u,
                      "aria-label": L.intl.string(L.t.BfFpW1),
                      action: (0, m.jsx)(n$.D, {
                          onClick: (e) => hO(e),
                          children: (0, m.jsx)(tQ.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, m.jsx)("div", {
                              className: hj.SC,
                              children: (0, m.jsx)(Y.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: L.intl.string(L.t.FzoWRo),
                              }),
                          }),
                          (0, m.jsx)(p.Ip, {
                              className: hj.XG,
                              children: l.map((e, t) =>
                                  (0, m.jsx)(
                                      h2,
                                      {
                                          rawGame: e,
                                          clientSettingType: hk.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: s[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: L.intl.format(L.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [L.intl.string(L.t.BfFpW1)],
    }),
    h6 = (0, u.E2)(d.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = A.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, E.cf)([hF.default], () =>
                    hF.default.getGlobalEnabledStatus(),
                ),
                l = !(0, hZ.supportsOutOfProcess)(),
                s = (0, E.yK)([iq.Ay], () => iq.Ay.getGamesSeen(!0)).filter((e) => !(0, AH.n1)(e)),
                r = (0, iW.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                hG.A.setEnabled(i, e);
                let l = iq.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, hk.Q3)(e, hk.OverlayToggledClientSettingType.OOP, l),
                    t && hY(hk.OverlayToggledClientSettingType.OOP, l));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                hP.Ay.toggleOverlay(t, e, i);
            }
            let u = A.useMemo(
                () => (h0.O ? (l ? L.intl.string(L.t.C7bLTQ) : L.intl.string(L.t.ndgADE)) : L.intl.string(L.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, m.jsx)(hL, {
                      title: L.intl.string(L.t["7BlVIs"]),
                      description: u,
                      "aria-label": L.intl.string(L.t["7BlVIs"]),
                      className: hj.dA,
                      action: (0, m.jsxs)(m.Fragment, {
                          children: [
                              (0, m.jsx)(tQ.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              h0.O && (0, m.jsx)("div", { className: hj.Kz }),
                          ],
                      }),
                  })
                : (0, m.jsxs)(hJ, {
                      onExpand: t,
                      className: e ? hj.tx : void 0,
                      title: L.intl.string(L.t["7BlVIs"]),
                      description: u,
                      "aria-label": L.intl.string(L.t["7BlVIs"]),
                      action: (0, m.jsx)(n$.D, {
                          onClick: (e) => hO(e),
                          children: (0, m.jsx)(tQ.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, m.jsx)("div", {
                              className: hj.SC,
                              children: (0, m.jsx)(Y.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: L.intl.string(L.t.FzoWRo),
                              }),
                          }),
                          (0, m.jsx)(p.Ip, {
                              className: hj.XG,
                              children: s.map((e, t) =>
                                  (0, m.jsx)(
                                      h2,
                                      {
                                          rawGame: e,
                                          clientSettingType: hk.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: l,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: L.intl.format(L.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [L.intl.string(L.t["7BlVIs"])],
    }),
    h5 = (0, u.zZ)(d.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => L.intl.string(L.t["/dp6yY"]),
        buildLayout: () => [h$, h6, h3, hD],
    }),
    h4 = (0, u.zD)(d.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, E.bG)([hN.default], () => !hN.default.disableClickableRegions),
        setValue: (e) => {
            hG.A.setDisableClickableRegions(!e);
        },
        useTitle: () => L.intl.string(L.t["+eFXxq"]),
        useSubtitle: () => L.intl.string(L.t.kivMAp),
    }),
    h8 = (0, u.E2)(d.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, E.bG)([lG.Ay], () => lG.Ay.getOverlayKeybind()),
                t = !(0, hZ.supportsLegacy)(),
                n = !(0, hZ.supportsOutOfProcess)(),
                [i, l] = (0, E.yK)([iq.Ay], () => [iq.Ay.canShowAdminWarning, iq.Ay.getVisibleGame()], []),
                s = (0, i1.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, lG.DV)(e?.shortcut ?? []);
            return (0, m.jsx)("div", {
                className: hj.hc,
                children: (0, m.jsxs)("div", {
                    className: hj.eH,
                    children: [
                        (0, m.jsxs)("div", {
                            className: hj.Bu,
                            children: [
                                (0, m.jsx)(Y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: L.intl.string(L.t.VsAZcC),
                                }),
                                r &&
                                    (0, m.jsx)(Y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: hj.y7,
                                        children: L.intl.string(L.t.NsowVa),
                                    }),
                                a &&
                                    (0, m.jsx)(Y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: hj.y7,
                                        children: L.intl.string(L.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, m.jsx)("div", {
                            className: hj.IH,
                            children: (0, m.jsx)(li.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (tr()(null != e, "Keybind should never be undefined"),
                                        iz.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [L.intl.string(L.t.VsAZcC)],
    });
var h7 = n(515183),
    h9 = n(682763);
let Se = (0, u.zD)(d.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = iJ();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = iJ();
            return null != e && (0, h7.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = iJ(),
                n = t?.id,
                i = (0, E.bG)([hf.A], () => hf.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, h7.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = iZ.A.getStreamerActiveStreamMetadata()),
                    (l = iQ(
                        t,
                        (i =
                            null != (n = iq.Ay.getVisibleGame())
                                ? iq.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: iK.A.getApplication(l) ?? void 0 });
            null != s && (0, h9.x8)(s.id, e);
        },
        useTitle: () => L.intl.string(L.t.wgVQND),
        useSubtitle: () => L.intl.string(L.t["5SsyF5"]),
    }),
    St = (0, u.zZ)(d.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [h8, Se, h4] });
var Sn = n(93465);
let Si = [
    {
        title: L.t.eVE4LX,
        description: L.t["72WNqk"],
        disabledSetting: Sn.M.TEXT_CHAT,
        key: d.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: L.t.oifnSh,
        description: L.t.bgU5r0,
        disabledSetting: Sn.M.WELCOME_GENERAL,
        key: d.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: L.t.hqsZJW,
        description: L.t.kHjdqc,
        disabledSetting: Sn.M.GO_LIVE_NUDGE,
        key: d.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: L.t.sop3rn,
        description: L.t.pjgffc,
        disabledSetting: Sn.M.GAME_ACTIVITY,
        key: d.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: L.t["2QVhbb"],
        description: L.t.wQ4ilB,
        disabledSetting: Sn.M.NOW_PLAYING,
        key: d.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: L.t.giM9fA,
        description: L.t.EhAfWj,
        disabledSetting: Sn.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: d.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nh.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, E.bG)([hf.A], () => hf.A.isNotificationDisabledBySetting(Sn.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function Sl(e) {
    return (0, u.zD)(e.key, {
        useTitle: () => L.intl.string(e.title),
        useSubtitle: () => L.intl.string(e.description),
        useValue: () => !(0, E.bG)([hf.A], () => hf.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            hG.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let Ss = (0, u.FW)(d.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => L.intl.string(L.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => Si.map(Sl),
    }),
    Sr = (0, u.zZ)(d.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => L.intl.string(L.t.xOE5bA),
        buildLayout: () => [Ss],
    }),
    Sa = (0, u.Hn)(d.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => L.intl.string(L.t.dnvZSg),
        useValue: () => (0, E.bG)([hN.default], () => hN.default.getAvatarSizeMode()),
        setValue: (e) => {
            hG.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: L.intl.string(L.t.YcOxtr), value: h.OSZ.LARGE },
            { id: "small", label: L.intl.string(L.t.BKIKqx), value: h.OSZ.SMALL },
        ],
    }),
    So = (0, u.Hn)(d.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => L.intl.string(L.t.J0dpcB),
        useValue: () => (0, E.bG)([hN.default], () => hN.default.getDisplayNameMode()),
        setValue: (e) => {
            hG.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: L.intl.string(L.t.nBmDrT), value: h.pwA.ALWAYS },
            { id: "speaking", label: L.intl.string(L.t["2OvIZY"]), value: h.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: L.intl.string(L.t.ekjlPL), value: h.pwA.NEVER },
        ],
    }),
    Su = (0, u.Hn)(d.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => L.intl.string(L.t.swsWWC),
        useValue: () => (0, E.bG)([hN.default], () => hN.default.getDisplayUserMode()),
        setValue: (e) => {
            hG.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: L.intl.string(L.t.nBmDrT), value: h.f5z.ALWAYS },
            { id: "speaking", label: L.intl.string(L.t["2OvIZY"]), value: h.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var Sd = n(391973),
    Sc = n(489277),
    Sg = n(897720),
    Sm = n(38502);
function SA() {
    let e = Sc.A.getWidgetByType(h.uss.VOICE_V3);
    if (null == e) return null;
    let t = Sm.A.getWidget(e.id);
    return null != t && (0, Sg.ZO)(t) ? t : null;
}
n(392164);
let SE = (0, u.sN)(d.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => L.intl.string(L.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? L.intl.string(L.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = SA();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? L.intl.string(L.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = SA();
        null != t &&
            (e < 1
                ? (0, Sd.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, Sd.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var Sh = n(450740),
    SS = n(968898),
    ST = n(889227),
    Sp = n(288737);
function Sx(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new Sp.A({
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
        user: new ST.A({ id: l, username: e }),
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
let Sf = (0, u.E2)(d.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, E.cf)([hN.default], () => ({
                    avatarSizeMode: hN.default.getAvatarSizeMode(),
                    displayNameMode: hN.default.getDisplayNameMode(),
                    displayUserMode: hN.default.getDisplayUserMode(),
                })),
                [s] = A.useState(() => [
                    Sx(L.intl.string(L.t.C0ZDvo), !0, !1),
                    Sx(L.intl.string(L.t.iOtj8E), !1, !1, !0),
                    Sx(L.intl.string(L.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, E.bG)([Sc.A, Sm.A], () => {
                    let e = Sc.A.getWidgetByType(h.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = Sm.A.getWidget(e.id);
                    return null != t && (0, Sg.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = Sx(t.username)).user = t), e) : null, ...s].filter(it.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, m.jsx)(EX.N, {
                    theme: h.NJ8.ONYX,
                    children: (e) =>
                        (0, m.jsxs)("div", {
                            className: is()(hj.Y5, e),
                            children: [
                                (0, m.jsx)("div", {
                                    className: hj.kJ,
                                    children: (0, m.jsx)(Sh.DH, {
                                        id: "voice-widget",
                                        title: L.intl.string(L.t.KNJ6Vq),
                                        channel: (0, v.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: h.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: i,
                                        displayUserMode: l,
                                        avatarSizeMode: n,
                                        widget: h.uss.VOICE,
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
                                (0, m.jsxs)("div", {
                                    className: hj.R$,
                                    children: [
                                        (0, m.jsx)(SS.Pl, { children: L.intl.string(L.t.KNJ6Vq) }),
                                        (0, m.jsx)(SS.CS, {}),
                                        (0, m.jsx)(SS.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, m.jsx)("div", { className: hj.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    SI = (0, u.zZ)(d.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => L.intl.string(L.t.r1TZfh),
        buildLayout: () => [Sf, Sa, So, Su, SE],
    });
var SN = n(54761);
function S_() {
    let [e, t] = (0, cp.kn)([eo.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, B.Ay)(() => () => {
        t(cj.i.AUTO_DISMISS);
    }),
    e !== eo.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, m.jsxs)(m.Fragment, {
              children: [
                  (0, m.jsxs)("div", {
                      className: SN.xC,
                      children: [
                          (0, m.jsx)("div", {
                              children: (0, m.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: L.intl.string(L.t.mdXZh1),
                                  className: SN.tl,
                              }),
                          }),
                          (0, m.jsx)("div", {
                              children: (0, m.jsxs)("div", {
                                  className: SN.vJ,
                                  children: [
                                      (0, m.jsx)(T.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: L.intl.string(L.t.jzjJQg),
                                      }),
                                      (0, m.jsx)(Y.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: L.intl.string(L.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, m.jsx)("div", {
                              children: (0, m.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: L.intl.string(L.t.mdXZh1),
                                  className: SN.lh,
                              }),
                          }),
                          (0, m.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: SN.VV,
                              children: (0, m.jsx)(I.$, {
                                  variant: "primary",
                                  text: L.intl.string(L.t.Q26diF),
                                  onClick: () => void t(cj.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, m.jsx)(i4.c, { className: SN.yF }),
              ],
          });
}
function SC() {
    let e = (0, E.bG)([e9.A], () => e9.A.enabled),
        t = (0, nh.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, m.jsxs)(m.Fragment, {
              children: [
                  (0, m.jsx)(iB.w, {
                      type: "warning",
                      children: L.intl.format(L.t.fuEX5B, {
                          onClick: function () {
                              return (0, ni.openUserSettings)(d.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, m.jsx)(i4.c, { className: SN.yF }),
              ],
          })
        : null;
}
let Sb = (0, u.t_)(d.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                hb(),
                lG.Ay.addChangeListener(hb),
                hf.A.addChangeListener(hb),
                hN.default.addChangeListener(hb),
                hI.default.addChangeListener(hb),
                eq.isPlatformEmbedded && (0, AW.a2)(),
                () => {
                    (lG.Ay.removeChangeListener(hb),
                        hf.A.removeChangeListener(hb),
                        hN.default.removeChangeListener(hb),
                        hI.default.removeChangeListener(hb),
                        eq.isPlatformEmbedded && (0, AW.e0)());
                }
            );
        },
        useTitle: () => L.intl.string(L.t["9cb1Uz"]),
        decoration: {
            type: g.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(S_, {}), (0, m.jsx)(SC, {})] });
            },
        },
        buildLayout: () => [h5, St, SI, Sr],
    }),
    Sy = (0, u.i4)(d.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t["9cb1Uz"]),
        icon: hx.l,
        usePredicate: nT.b_,
        buildLayout: () => [Sb],
    });
var Sv = n(687966);
let Sj = (0, u.AK)(d.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => L.intl.string(L.t.OYYY6q),
        destinationKey: d.X.ACTIVITY_PRIVACY_PANEL,
    }),
    SO = (0, u.gN)(d.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Sj] });
var SL = n(227309),
    SD = n(29160),
    SR = n(552366),
    SP = n(938442);
function SG(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, hV.I)(t.id);
    let o = (0, E.cf)([iq.Ay, hW.A, tn.A, hU.A], () => (0, iq.xU)(t, iq.Ay, hW.A, tn.A, hU.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, E.cf)([iq.Ay], () => ({
            canToggleDetection: null == a || iq.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: iq.Ay.isDetectionEnabled(o),
        })),
        c = (0, E.bG)([iq.Ay], () => iq.Ay.getVisibleGame()),
        [g, S] = A.useState(!1),
        T = A.useRef(null),
        p = null != c && (0, iq.Es)(o) === (0, iq.Es)(c),
        x = !l && !g,
        f = !i && !p,
        I = x || f,
        N = A.useMemo(
            () =>
                (0, AH.n1)(o)
                    ? r
                        ? o.gameName
                        : L.intl.formatToPlainString(L.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [_, C] = A.useState(N ?? "???"),
        b = is()(SP.tR, {
            [SR.LO]: !i,
            [SR.Rw]: i,
            [SR.FB]: null != o && i,
            [SR.xL]: r,
            [SR.fG]: null != s && s.length > 0,
        });
    function y() {
        (hP.Ay.deleteEntry(o),
            s?.forEach((e) => {
                hP.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? hW.A.getDetectableGame(o.id) : null;
        (te.default.track(h.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, AH.n1)(o) ? o.gameName : o.name,
        }),
            (0, lr.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("568035"), n.e("627495")]).then(n.bind(n, 651930));
                return (n) =>
                    (0, m.jsx)(t, {
                        ...n,
                        detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                        onSubmitted: () => S(!0),
                    });
            }));
    }
    return (0, m.jsxs)(m.Fragment, {
        children: [
            (0, m.jsxs)("div", {
                className: b,
                children: [
                    (0, m.jsxs)("div", {
                        className: is()(SR.$K, SP.Vd),
                        children: [
                            o.verified && !l
                                ? (0, m.jsxs)("div", {
                                      className: SR.HS,
                                      children: [
                                          (0, m.jsx)("div", { className: SR.mO, children: N }),
                                          (0, m.jsx)(le.m, {
                                              text: L.intl.string(L.t["4PJP5p"]),
                                              children: (0, m.jsx)(Ek.A, {
                                                  className: SR.qf,
                                                  size: 18,
                                                  color: nq.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, m.jsx)(Ev.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: nq.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, m.jsx)("input", {
                                      className: is()(SR.mO, SR.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: _,
                                      onBlur: function () {
                                          o.name !== _ && hP.Ay.editName(o, _);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === lb.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => C(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || p
                                        ? (e = L.intl.string(L.t.VbV5dv))
                                        : null != n && "" !== n && (e = L.intl.format(L.t["gGeOE+"], { when: n })),
                                    (0, m.jsx)(Y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: SR.GN,
                                        children: (0, m.jsx)(SD.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
                                                      (0, eq.isWindows)() && (t = t.toUpperCase()),
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
                        (0, m.jsx)(r9.Y, {
                            targetElementRef: T,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, m.jsx)(d_.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": L.intl.string(L.t["UKOtz+"]),
                                    children: (0, m.jsxs)(e2.rX, {
                                        children: [
                                            x &&
                                                (0, m.jsx)(e2.Dr, {
                                                    id: "report",
                                                    label: L.intl.string(L.t["+78Pfm"]),
                                                    action: v,
                                                }),
                                            f &&
                                                (0, m.jsx)(e2.Dr, {
                                                    id: "remove",
                                                    label: L.intl.string(L.t.N86XcP),
                                                    color: "danger",
                                                    action: y,
                                                }),
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) =>
                                (0, m.jsx)("div", {
                                    className: is()(SR._Q, { [SR.g9]: t.isShown }),
                                    children: (0, m.jsx)(le.m, {
                                        text: L.intl.string(L.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, m.jsx)(i7.K, {
                                            ...e,
                                            buttonRef: T,
                                            icon: df.MoreHorizontalIcon,
                                            variant: "icon-only",
                                            size: "sm",
                                            "aria-label": L.intl.string(L.t["UKOtz+"]),
                                        }),
                                    }),
                                }),
                        }),
                    (0, m.jsx)(le.m, {
                        text: L.intl.string(L.t.QmitzM),
                        asContainer: !0,
                        ariaHidden: !0,
                        children: (0, m.jsx)(ln.I, {
                            checked: o.detectable && u,
                            disabled: !u,
                            onChange: function () {
                                null != s && s.length > 0 && d
                                    ? (0, lr.openModalLazy)(async () => {
                                          let { Modal: e } = await n.e("304823").then(n.bind(n, 158954));
                                          return (t) =>
                                              (0, m.jsx)(e, {
                                                  ...t,
                                                  title: L.intl.formatToPlainString(L.t.PZ4fKc, { platform: N }),
                                                  subtitle: L.intl.formatToPlainString(L.t.ZIQbfb, { platform: N }),
                                                  actions: [
                                                      {
                                                          text: L.intl.string(L.t["ETE/oC"]),
                                                          onClick: () => t.onClose(),
                                                          variant: "secondary",
                                                      },
                                                      {
                                                          text: L.intl.string(L.t.Fmjztz),
                                                          onClick: () => {
                                                              (hP.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : hP.Ay.toggleDetection(o);
                            },
                            "aria-label": L.intl.string(L.t.QmitzM),
                        }),
                    }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !i &&
                (0, m.jsx)("div", {
                    className: SR.AQ,
                    children: s.map((e, t) =>
                        (0, m.jsxs)(
                            A.Fragment,
                            {
                                children: [
                                    (0, m.jsx)(SG, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, m.jsx)("div", { className: SR.PQ }),
                                ],
                            },
                            (0, iq.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function SM() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = Aq();
    return 0 === e.length
        ? null
        : (0, m.jsx)(z.B, {
              padding: { bottom: 32 },
              children: (0, m.jsx)(nJ.n, {
                  children: (0, m.jsx)("div", {
                      children: e.map((e) =>
                          (0, m.jsx)(
                              SG,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === SL.a7 ? t : void 0 },
                              (0, iq.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let SU = (0, u.E2)(d.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, m.jsx)(SM, {}),
});
var SV = n(424994);
let Sk = (0, u.zZ)(d.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [SU, SO],
    useTitle: () => L.intl.string(L.t.jCOdvx),
    useSubtitle: () =>
        (0, E.bG)([iq.Ay], () => iq.Ay.getGamesSeen(!1).some((e) => !(0, AH.n1)(e)))
            ? L.intl.format(L.t.KPA3m9, { igdbLink: SV.s8 })
            : L.intl.string(L.t["1yiJwn"]),
});
var Sw = n(890497),
    SF = n(853270),
    SB = n(969426);
function Sz(e) {
    let { onClose: t } = e,
        n = (0, E.bG)([iq.Ay], () => iq.Ay.getCandidateGames()),
        [i, l] = A.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, m.jsxs)(ae.l, {
        className: is()(SF.H, SB.Y_),
        "aria-label": L.intl.string(L.t.GTCx0p),
        children: [
            (0, m.jsx)(Sw.Z, {
                selectionMode: "single",
                placeholder: L.intl.string(L.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, m.jsxs)("div", {
                className: is()(SF.o, SP.xM),
                children: [
                    (0, m.jsx)(A_.Q, { variant: "secondary", text: L.intl.string(L.t["ETE/oC"]), onClick: t }),
                    (0, m.jsx)(I.$, {
                        variant: "primary",
                        text: L.intl.string(L.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (hP.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var SX = n(475007);
function SY() {
    let e = A.useRef(null);
    return (0, m.jsxs)("div", {
        className: is()(SX.a, mq.Gf),
        children: [
            (0, m.jsx)("span", { children: L.intl.string(L.t.xwhoqM) }),
            (0, m.jsx)(r9.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, m.jsx)(Sz, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, m.jsx)(A_.Q, {
                        ...t,
                        buttonRef: e,
                        variant: "primary",
                        textVariant: "text-sm/medium",
                        text: L.intl.string(L.t.GjgdXe),
                    }),
            }),
        ],
    });
}
function SH() {
    return (0, m.jsx)("div", {
        className: is()(SP.tR, SR.eS, SR.Rw),
        children: (0, m.jsxs)("div", {
            className: is()(SR.$K, SP.Vd),
            children: [
                (0, m.jsx)("div", { className: SR.mO, children: L.intl.string(L.t.H68X9x) }),
                (0, m.jsx)(SY, {}),
            ],
        }),
    });
}
let SK = (0, u.E2)(d.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [L.intl.string(L.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = Aq(),
                n = (0, E.bG)([iq.Ay], () => iq.Ay.getVisibleGame());
            return null == n
                ? (0, m.jsx)(SH, {})
                : (0, m.jsxs)("div", {
                      className: is()(SP.Vd, SR.C2),
                      children: [
                          (0, m.jsx)(
                              SG,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === SL.a7 ? e : void 0,
                              },
                              (0, iq.Es)(n),
                          ),
                          (0, m.jsx)(SY, {}),
                      ],
                  });
        },
    }),
    SW = (0, u.zZ)(d.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => L.intl.string(L.t["MY9/Oe"]),
        buildLayout: () => [SK],
    }),
    SZ = (0, u.t_)(d.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => L.intl.string(L.t.AVDyEj),
        buildLayout: () => [SW, Sk],
    }),
    Sq = (0, u.i4)(d.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.AVDyEj),
        icon: Sv.GameControllerIcon,
        usePredicate: nT.Pi,
        buildLayout: () => [SZ],
    }),
    SQ = (0, u.WI)(d.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => L.intl.string(L.t.BA9200),
        buildLayout: () => [Sq, EN, Sy, hp],
    });
var SJ = n(631670),
    S$ = n(619499),
    S0 = n(836602),
    S1 = n(591179),
    S2 = n(854627),
    S3 = n(402860),
    S6 = n(761508),
    S5 = n(159001),
    S4 = n(344346),
    S8 = n(919395),
    S7 = n(68750);
function S9(e) {
    let { title: t, children: n } = e;
    return (0, m.jsxs)("div", {
        children: [(0, m.jsx)(T.D, { variant: "text-md/medium", className: S7.Vf, children: t }), n],
    });
}
function Te(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, m.jsx)("div", {
        className: is()(S7.UA, n),
        children: (0, m.jsxs)("div", {
            className: is()(S7.yt, i),
            children: [
                (0, m.jsx)("div", {
                    className: is()(S7.Fp, a && S7.Oz),
                    children: (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(S9, { title: s ?? L.intl.string(L.t.Zb06yP), children: l }),
                            null != r ? (0, m.jsx)(S9, { title: L.intl.string(L.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, m.jsx)("div", { className: S7.oB, children: t }),
            ],
        }),
    });
}
var Tt = n(986687),
    Tn = n(101058),
    Ti = n(321191),
    Tl = n(696451),
    Ts = n(590941);
function Tr() {
    return (0, m.jsxs)("div", {
        className: Ts.p$,
        children: [
            (0, m.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Ts.Sl }),
            (0, m.jsx)(T.D, { className: Ts.h8, variant: "heading-lg/extrabold", children: L.intl.string(L.t.Z1OZCV) }),
            (0, m.jsx)(Y.E, { className: Ts.h8, variant: "text-md/normal", children: L.intl.string(L.t.ZSt4Tt) }),
            (0, m.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Ts.h8,
                children: (0, m.jsx)(I.$, {
                    variant: "primary",
                    text: L.intl.string(L.t.jQ3pqt),
                    onClick: function () {
                        ((0, tJ.pX)(h.BVt.GUILD_DISCOVERY), (0, tM.default)());
                    },
                }),
            }),
        ],
    });
}
var Ta = n(81400),
    To = n(450232),
    Tu = n(252732),
    Td = n(355622),
    Tc = n(408018),
    Tg = n(959070),
    Tm = n(290386),
    TA = n(486264);
let TE = (0, tk.Ld)(),
    Th = (0, v.createChannelRecord)({ id: "1", type: h.rbe.DM }),
    TS = (0, tk.Ld)();
function TT(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, Tm.U)({ location: "profile_customization_about_me" }),
        [u, d] = A.useState(l ?? r),
        [c, g] = A.useState((0, Tc.x7)(u)),
        E = A.useRef(r),
        h = A.useRef(!1);
    return (
        A.useEffect(() => {
            if (E.current !== r) {
                let e = (0, Tc.x7)(r);
                (d(r), g(e));
            }
            E.current = r;
        }, [r]),
        A.useEffect(() => {
            void 0 !== l || u === r || h.current || (d(r), g((0, Tc.x7)(r)));
        }, [l, r, u]),
        (0, m.jsxs)(r6.A, {
            title: t,
            titleId: TE,
            description: L.intl.string(L.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, m.jsx)(Tg.Ay, {
                    "aria-describedby": TS,
                    "aria-labelledby": TE,
                    className: TA.i,
                    innerClassName: TA.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: Th,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: ni.USER_SETTINGS_MODAL_KEY,
                    type: Td.oU.PROFILE_BIO_INPUT,
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
                (0, m.jsx)(lt.A, { id: TS, children: L.intl.format(L.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var Tp = n(930861),
    Tx = n(821956),
    Tf = n(562819),
    TI = n(84540),
    TN = n(467690);
function T_(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eR.Ay)(),
        o = (0, S8.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, S8.CP)(n?.id),
        c = r ? Tp.wL : sV.$n;
    return (0, m.jsx)(r6.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, m.jsxs)("div", {
            className: TN.NC,
            children: [
                (0, m.jsx)(c, {
                    size: sV.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Tf.L)({ analyticsLocations: a, guild: n });
                    },
                    className: is()({ [TN.yj]: r }),
                    children: L.intl.string(L.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, m.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TN.DT,
                        children: (0, m.jsx)(I.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, Tx.uZ)(t, n) ? L.intl.string(L.t.CHf9iJ) : L.intl.string(L.t.OrokWm),
                            onClick: function () {
                                (0, TI.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TC = n(339984),
    Tb = n(942132);
let Ty = [{ name: "gif", extensions: ["gif"] }];
function Tv(e) {
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
        { newestAnalyticsLocation: g } = (0, eR.Ay)(),
        E = c ? Tp.wL : sV.$n,
        h = A.useCallback(() => {
            (0, Tu.XD)({
                uploadType: TC.HL.AVATAR,
                analyticsSource: g,
                filters: u ? Ty : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, m.jsx)(r6.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, m.jsxs)("div", {
            className: Tb.NC,
            children: [
                (0, m.jsx)(E, {
                    className: is()({ [Tb.yj]: c }),
                    size: sV.$n.Sizes.SMALL,
                    onClick: h,
                    children: s ?? L.intl.string(L.t["4OynCD"]),
                }),
                t &&
                    (0, m.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tb.DT,
                        children: (0, m.jsx)(I.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? L.intl.string(L.t.TDjKDm) : L.intl.string(L.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var Tj = n(248778),
    TO = n(810188);
function TL(e) {
    let { user: t, guildId: n, className: i } = e,
        l = an.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, eR.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, S8.B0)(t, n),
        d = (0, Tj.ux)("DisplayNameStylesSection"),
        [c, g] = (0, cp.kn)(d ? [eo.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        E = c === eo.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        S = (0, A.useCallback)(() => {
            (g(cj.i.TAKE_ACTION),
                te.default.track(h.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eP.L)({ analyticsLocations: s, guildId: n }));
        }, [s, n, g]),
        T = (0, A.useCallback)(() => {
            ((0, TI.p)({ displayNameStyles: null }), te.default.track(h.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        p = (0, A.useCallback)(() => {
            (0, TI.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        x = void 0 !== o ? o : null != n ? a : r;
    return (0, m.jsx)(r6.A, {
        title: L.intl.string(eG.default["86GtGH"]),
        titleBadge: E ? (0, m.jsx)(tt.Lp, { text: L.intl.string(L.t.y2b7CA), className: TO.A }) : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, m.jsxs)("div", {
            className: TO.N,
            children: [
                (0, m.jsx)(I.$, { variant: "primary", size: "sm", text: L.intl.string(eG.default.vJqrIg), onClick: S }),
                null == n &&
                    null != x &&
                    (0, m.jsx)(I.$, {
                        variant: "secondary",
                        size: "sm",
                        text: L.intl.string(eG.default.ymq8WQ),
                        onClick: T,
                    }),
                null != n &&
                    null != x &&
                    (0, m.jsx)(I.$, {
                        variant: "secondary",
                        size: "sm",
                        text: L.intl.string(eG.default["j/KRxc"]),
                        onClick: p,
                    }),
            ],
        }),
    });
}
var TD = n(637193),
    TR = n(622410);
function TP(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, eR.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, S8.rv)(t, n?.id),
        d = A.useCallback(() => {
            (0, TD.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = A.useCallback(() => {
            (0, TI.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, m.jsx)(r6.A, {
        title: L.intl.string(L.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, m.jsxs)("div", {
            className: TR.u,
            children: [
                (0, m.jsx)(I.$, { variant: "primary", size: "sm", text: L.intl.string(L.t.BwdeM1), onClick: d }),
                (void 0 === o ? (s ? a : r) != null : null != o) &&
                    (0, m.jsx)(I.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? L.intl.string(L.t.CHf9iJ) : L.intl.string(L.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var TG = n(88524);
function TM(e) {
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
        { newestAnalyticsLocation: c } = (0, eR.Ay)(),
        g = d ? Tp.wL : sV.$n;
    return (0, m.jsx)(r6.A, {
        className: s,
        title: L.intl.string(L.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, m.jsxs)("div", {
            className: TG.NC,
            children: [
                (0, m.jsx)(g, {
                    className: is()({ [TG.yj]: d }),
                    size: sV.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Tu.XD)({ uploadType: TC.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: L.intl.string(L.t.N0bC3P),
                }),
                t &&
                    (0, m.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TG.DT,
                        children: (0, m.jsx)(I.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? L.intl.string(L.t.jHlJNS) : L.intl.string(L.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var TU = n(617061),
    TV = n(625613);
function Tk(e) {
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
        { analyticsLocations: u } = (0, eR.Ay)(),
        d = an.Ay.canUsePremiumProfileCustomization(t),
        c = (0, S8.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: E } = (0, S8.nZ)(n?.id);
    A.useEffect(() => {
        d &&
            (te.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tz.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tw.sq)(h.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tF.uq)(tz.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let S = a ? Tp.wL : sV.$n;
    return (0, m.jsx)(r6.A, {
        forcedDivider: r,
        borderType: ug.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: E,
        className: l,
        children: (0, m.jsxs)("div", {
            className: TV.NC,
            children: [
                (0, m.jsx)(S, {
                    size: sV.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TU.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: is()({ [TV.yj]: a }),
                    children: L.intl.string(L.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, m.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TV.DT,
                        children: (0, m.jsx)(I.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? L.intl.string(L.t.CHf9iJ) : L.intl.string(L.t.uMuafO),
                            onClick: function () {
                                (0, TI.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tw = n(515727),
    TF = n(594401);
function TB(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, eR.Ay)(),
        s = (0, S8.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, S8.Tu)(n?.id),
        [o, u] = (0, cp.kn)([eo.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eo.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, m.jsx)(r6.A, {
        showBorder: d,
        borderType: d ? ug.i.NEW_UPSELL : ug.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d ? (0, m.jsx)(tt.Lp, { text: L.intl.string(L.t.y2b7CA), className: TF.Ad }) : void 0,
        description: d ? L.intl.string(L.t.yMoMAt) : void 0,
        errors: a,
        children: (0, m.jsxs)("div", {
            className: TF.NC,
            children: [
                (0, m.jsx)(I.$, {
                    variant: "primary",
                    size: "sm",
                    text: L.intl.string(L.t["9/hmle"]),
                    onClick: function () {
                        ((0, Tw.w)({ analyticsLocations: l, guild: n }), u(cj.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != s : null != r) &&
                    (0, m.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TF.DT,
                        children: (0, m.jsx)(I.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? L.intl.string(L.t.CHf9iJ) : L.intl.string(L.t.nQBruk),
                            onClick: function () {
                                (0, TI.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tz = n(602853),
    TX = n(654107),
    TY = n(999291),
    TH = n(101928),
    TK = n(819169),
    TW = n(317097),
    TZ = n(508274),
    Tq = n(379012);
function TQ(e) {
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
        d = A.useRef(null),
        c = (0, Tz.r)(nq.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = nq.A.colors.BACKGROUND_MOD_MUTED.css,
        E = (0, Tu.sN)(i),
        S = (0, TW.Hl)(i),
        T = S === c ? g : S,
        p = E ? nq.A.unsafe_rawColors.WHITE.css : nq.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, TK.A)(a),
        f = (0, TK.A)(o),
        [I, N] = A.useState((0, oe.A)());
    return (
        A.useEffect(() => {
            (x !== a || f !== o) && N((0, oe.A)());
        }, [o, a, f, x]),
        (0, m.jsx)(r9.Y, {
            targetElementRef: d,
            positionKey: I,
            renderPopout: (e) =>
                (0, m.jsx)(TZ.VN, {
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
                return (0, m.jsxs)("div", {
                    ref: d,
                    className: is()(Tq.oP, { [Tq.r9]: s }),
                    children: [
                        (0, m.jsx)(n$.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? h.tEg : t,
                            style: { backgroundColor: S, borderColor: T },
                            className: Tq.nf,
                            "aria-label": L.intl.string(L.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, m.jsx)(at.PencilIcon, {
                                size: "custom",
                                className: Tq.BW,
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
var TJ = n(190377);
function T$(e) {
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
        c = (0, TY.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: A } = (0, TH.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        E = an.Ay.canUsePremiumProfileCustomization(t),
        h = null != n ? n : t.getAvatarURL(r, 80),
        S = (0, Tz.r)(nq.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, TX.rh)(h, S, !1);
    return null == g || null == A
        ? null
        : (0, m.jsx)(r6.A, {
              title: L.intl.string(L.t.DMeO2X),
              disabled: !E && !s,
              className: is()(TJ.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, m.jsxs)("div", {
                  className: TJ.hd,
                  children: [
                      (0, m.jsx)("div", {
                          className: TJ.YX,
                          children: (0, m.jsx)(TQ, {
                              onChange: (e) => l([e, A]),
                              color: g,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, m.jsx)(Y.E, {
                                  className: TJ.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: L.intl.string(L.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, m.jsx)("div", {
                          className: TJ.YX,
                          children: (0, m.jsx)(TQ, {
                              onChange: (e) => l([g, e]),
                              color: A,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, m.jsx)(Y.E, {
                                  className: TJ.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: L.intl.string(L.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, m.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: TJ.WA,
                              children: (0, m.jsx)(I.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: L.intl.string(L.t["L+GmoR"]),
                                  onClick: () => l([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function T0(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: l,
            placeholder: s,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tk.GV)();
    return (0, m.jsx)(r6.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, m.jsx)(la.k, {
            "aria-labelledby": o,
            placeholder: s ?? L.intl.string(L.t.NPEUUu),
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
var T1 = n(427262),
    T2 = n(684732),
    T3 = n(576705),
    T6 = n(931175);
function T5(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, E.bG)([T3.A], () => T3.A.can(h.xBc.CHANGE_NICKNAME, r) || T3.A.can(h.xBc.MANAGE_NICKNAMES, r)),
        o = (0, EB.L)(tz.PremiumTypes.TIER_2);
    return (0, m.jsxs)(r6.A, {
        title: L.intl.string(L.t.me1lRk),
        errors: t,
        children: [
            (0, m.jsx)(la.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: h.d0r,
                onChange: function (e) {
                    (0, TI.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : L.intl.string(L.t.gzjxQi),
            }),
            o && (0, m.jsx)(TL, { user: s, guildId: r.id, className: T6.F }),
        ],
    });
}
var T4 = n(233454);
let T8 = "/assets/b25da78aa7949feb.png";
function T7(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, uM.Ay)(),
        { analyticsLocations: s } = (0, eR.Ay)(tO.A.PREMIUM_UPSELL_OVERLAY);
    return (A.useEffect(() => {
        n &&
            (te.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: tz.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tw.sq)(h.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                (0, tF.uq)(tz.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, s]),
    n)
        ? (0, m.jsxs)("div", {
              className: T4.ry,
              children: [
                  (0, m.jsx)("div", { children: i }),
                  (0, m.jsxs)("div", {
                      className: T4.Wc,
                      children: [
                          (0, m.jsx)("img", {
                              className: T4.Tn,
                              alt: L.intl.string(L.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case h.NJ8.ASH:
                                      case h.NJ8.DARK:
                                      case h.NJ8.ONYX:
                                          return T8;
                                      case h.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return T8;
                                  }
                              })(l),
                          }),
                          (0, m.jsxs)("div", {
                              className: T4._9,
                              children: [
                                  (0, m.jsx)(Y.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: L.intl.string(L.t.dMaDFX),
                                  }),
                                  (0, m.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: L.intl.string(L.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, m.jsx)(uc.A, {
                              size: sV.$n.Sizes.LARGE,
                              color: sV.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: an.Ay.isPremium(t)
                                      ? L.intl.string(L.t.AfRWI8)
                                      : L.intl.string(L.t.nkdUym),
                              },
                              subscriptionTier: tz.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var T9 = n(203164);
function pe() {
    let e = (0, E.bG)([sn.default], () => {
            let e = sn.default.getCurrentUser();
            return (tr()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, EB.L)(tz.PremiumTypes.TIER_2),
        n = (0, E.bG)([S0.A, lE.A], () => lE.A.getGuild(S0.A.selectedGuildId));
    tr()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, E.cf)([S0.A], () => ({ ...S0.A.getPendingChanges(n.id), errors: S0.A.getErrors(n.id) })),
        d = (0, Tn.V7)({ userId: e.id, image: i }),
        c = (0, Ta.EC)(n.id),
        g = (0, E.bG)([Tl.Ay], () => (null == n.id ? null : Tl.Ay.getMember(n.id, e.id))),
        A = (0, E.bG)([Ti.A], () => Ti.A.getGuildMemberProfile(e.id, n.id)),
        h = an.Ay.canUsePremiumProfileCustomization(e),
        S = (0, S8.z5)(i, g?.avatar),
        T = (0, S8.Ac)(s, A?.banner),
        p = (0, T2.l)(o, A?.themeColors),
        x = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, m.jsxs)("div", {
        className: T9.Q,
        children: [
            (0, m.jsx)(
                T5,
                {
                    errors: u?.nick ?? c?.nick,
                    username: T1.Ay.getName(e),
                    pendingNick: l,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, m.jsx)(
                T0,
                {
                    sectionTitle: L.intl.string(L.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, TI.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, m.jsxs)(T7, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, m.jsx)(
                        Tv,
                        {
                            sectionTitle: (0, m.jsxs)(m.Fragment, {
                                children: [L.intl.string(L.t.lqaIxI), (0, m.jsx)(To.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, Tu.rM)(e, g?.avatar, (e) => (0, TI.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, m.jsx)(
                        T_,
                        {
                            sectionTitle: (0, m.jsxs)(m.Fragment, {
                                children: [L.intl.string(L.t["7v0T9P"]), (0, m.jsx)(To.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, m.jsx)(TL, { user: e, guildId: n.id }),
                    (0, m.jsx)(
                        TP,
                        { user: e, guild: n, titleIcon: (0, m.jsx)(To.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, m.jsx)(
                        Tk,
                        {
                            sectionTitle: (0, m.jsxs)(m.Fragment, {
                                children: [L.intl.string(L.t.wR5wOo), (0, m.jsx)(To.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, m.jsx)(
                        TB,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, m.jsxs)(m.Fragment, {
                                children: [L.intl.string(L.t.GWrZOd), (0, m.jsx)(To.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, m.jsx)(
                        TM,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, Tu.rM)(e, A?.banner, (e) => (0, TI.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, m.jsx)(T$, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, TI.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: p,
                    }),
                    (0, m.jsx)(
                        TT,
                        {
                            placeholder: L.intl.string(L.t["/7NKgv"]),
                            sectionTitle: (0, m.jsxs)(m.Fragment, {
                                children: [L.intl.string(L.t.ZzAR2Y), (0, m.jsx)(To.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, TI.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: x,
                            disabled: !h,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var pt = n(832131);
function pn(e) {
    (0, lr.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, m.jsx)(t, { source: { ...e, page: h.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function pi(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eR.Ay)(tO.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, E.bG)([sn.default], () => {
            let e = sn.default.getCurrentUser();
            return (tr()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        s = (0, E.bG)([Tl.Ay], () => (null != t ? Tl.Ay.getMember(t.id, l.id) : null)),
        r = (0, E.bG)([Ti.A], () => !Ti.A.isFetchingProfile(l.id, t?.id)),
        a = (0, E.bG)([e9.A], () => e9.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, E.cf)([S0.A], () => S0.A.getPendingChanges(t?.id)),
        c = (0, Tn.V7)({ userId: l.id, image: o }),
        g = (0, S8.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: S } = (0, S8.B0)(l, t?.id);
    return (A.useEffect(() => () => e6.h.wait(S5.IM), []), a)
        ? (0, m.jsx)(a8.A, {})
        : r
          ? (0, m.jsxs)(eR.f5, {
                value: i,
                children: [
                    (0, m.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        children: L.intl.format(L.t["/PTB2E"], {
                            helpCenterLink: ep.A.getArticleURL(h.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, m.jsxs)(m.Fragment, {
                              children: [
                                  (0, m.jsx)(r3.A, { guildId: t.id, onChange: n }),
                                  (0, m.jsx)(Te, {
                                      profilePreviewTitle: (0, m.jsx)(T.D, {
                                          variant: "heading-md/medium",
                                          className: pt.YV,
                                          children: L.intl.formatToPlainString(L.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, m.jsx)(Tt.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: S,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: an.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: pn,
                                          containerClassName: pt.ti,
                                      }),
                                      nameplatePreview: (0, m.jsx)(S4.A, {
                                          ...d,
                                          pendingDisplayNameStyles: S,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? pt.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, m.jsx)(pe, {}),
                                  }),
                              ],
                          })
                        : (0, m.jsx)(Tr, {}),
                ],
            })
          : (0, m.jsx)(a9.y, {});
}
var pl = n(903209),
    ps = n(641130);
function pr(e) {
    let { children: t, notice: n } = e;
    return (0, m.jsxs)("div", { className: ps.r, children: [n, (0, m.jsx)("div", { children: t })] });
}
var pa = n(269115),
    po = n(823092),
    pu = n(839534),
    pd = n(379197),
    pc = n(488430),
    pg = n(457421),
    pm = n(940622),
    pA = n(25176),
    pE = n(757993);
let ph = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: l } = (0, eR.Ay)(tO.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = A.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, pm.mb)(pA.RN.UPSELL_BANNER)),
        (t = (0, pm.mb)(pA.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, E.bG)([pg.A], () => pg.A.getMarketingBySurface(pd.R.EDIT_PROFILE_SETTINGS))),
        (i = A.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: L.intl.string(L.t.QZVVBh),
                          body: L.intl.string(L.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        A.useMemo(
            () => ({ ...i, type: pc.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, po.L_)();
    return (
        A.useEffect(() => {
            (te.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tz.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            }),
                (0, tw.sq)(h.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                    (0, tF.uq)(tz.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [l, d]),
        (0, m.jsxs)("div", {
            ref: s,
            className: pE.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, m.jsx)("div", {
                    className: pE.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, m.jsx)("img", { src: a, className: pE.Qw, alt: "" }),
                }),
                (0, m.jsxs)("div", {
                    className: pE.Em,
                    children: [
                        (0, m.jsx)(T.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: pE.DD,
                            children: o,
                        }),
                        (0, m.jsx)(Y.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, m.jsx)(I.$, {
                    onClick: function () {
                        g(() =>
                            (0, pu.Cz)({
                                analyticsLocations: l,
                                analyticsSource: tO.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: L.intl.string(L.t.fYfGgK),
                }),
            ],
        })
    );
};
var pS = n(451909),
    pT = n(202639),
    pp = n(285373),
    px = n(835071),
    pf = n(724651),
    pI = n(732280),
    pN = n(590180),
    p_ = n(898461),
    pC = n(469054),
    pb = n(601298),
    py = n(207803),
    pv = n(461797);
let pj = Object.keys(pv.jB);
function pO(e) {
    let t = null == e ? pj : pj.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var pL = n(201805),
    pD = n(221650);
function pR(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion),
        l = (0, pL.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = A.useMemo(() => {
            let e = (0, pv.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, m.jsxs)("div", {
        className: pD.kL,
        children: [
            (0, m.jsx)(n$.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                className: pD.x6,
                "aria-label": L.intl.string(L.t["44yJxh"]),
                children: l.render(),
            }),
            (0, m.jsxs)(n$.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                "aria-label": `${s}: ${L.intl.string(L.t["44yJxh"])}`,
                className: pD.Lt,
                children: [
                    (0, m.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: pD.L_ }),
                    (0, m.jsx)(Y.E, {
                        className: pD._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var pP = n(511484),
    pG = n(811611),
    pM = n(206697),
    pU = n(507553);
function pV(e, t) {
    let n = pU.A.useField("scrollPosition"),
        i = (0, E.bG)([N.Ay], () => N.Ay.useReducedMotion);
    (0, A.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            (l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), pU.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var pk = n(844222),
    pw = n(842092);
let pF = "/assets/d4955aabdcb5bdee.png",
    pB = { assetOrigin: pC.E.NEW_ASSET, imageUri: pF, staticImageUri: pF, description: "", originalAsset: void 0 };
function pz(e) {
    let { user: t } = e,
        { reducedMotion: n } = A.useContext(pk.C),
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
            tryItOutBanner: h,
            tryItOutAvatarDecoration: S,
            tryItOutDisplayNameStyles: T,
        } = (0, E.cf)([S0.A], () => {
            let e = S0.A.getPendingChanges(),
                t = S0.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, Tn.V7)({ userId: t.id, image: g ?? i });
    return (0, m.jsx)(Tt.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: h ?? l ?? pB,
        pendingDisplayNameStyles: T ?? a,
        pendingAvatar: p,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== S ? S : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : pw.WX,
        containerClassName: pw.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var pX = n(829497);
function pY(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = an.Ay.isPremium(t),
        s = an.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, E.cf)([S0.A], () => {
            let e = S0.A.getPendingChanges(),
                t = S0.A.getErrors(),
                n = S0.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, A.useState)(pO()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, A.useMemo)(() => {
                    let t = (0, pv.Wt)(e);
                    return {
                        banner: (0, pb.X)({
                            assetOrigin: pC.E.NEW_ASSET,
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
                r = (0, E.bG)([pN.A], () => {
                    let e = pN.A.getProduct(l);
                    return (0, p_.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, A.useEffect)(() => {
                (0, py.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, A.useCallback)(() => {
                let n = pO(e);
                (t(n), te.default.track(h.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        S = A.useRef(null);
    pV(S, e_._F.TRY_IT_OUT);
    let { analyticsLocations: p, sourceAnalyticsLocations: x } = (0, eR.Ay)(tO.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function f(e) {
        e && ((0, pM.T)(), te.default.track(h.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    A.useEffect(() => {
        n &&
            (te.default.track(h.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tz.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: h.liQ.USER_SETTINGS },
                location_stack: x,
            }),
            (0, tw.sq)(h.U7l.PREMIUM_UPSELL_VIEWED, x, () => (0, tF.uq)(tz.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [x, t, n]);
    let I = (0, pI.V)()?.subscriptionTrial?.skuId === tz.pe.TIER_2,
        N = (0, pf.O)(),
        _ = (0, pP.U9)(N, tz.pe.TIER_2);
    return i
        ? (0, m.jsx)(eR.f5, {
              value: p,
              children: (0, m.jsxs)(ug.A, {
                  ref: S,
                  className: pX.MT,
                  type: ug.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, m.jsx)(Te, {
                          stickyPreview: !1,
                          layoutClassName: pX.th,
                          profilePreviewTitle: (0, m.jsxs)(m.Fragment, {
                              children: [
                                  (0, m.jsx)(r0.t, { size: "md", color: "currentColor", className: pX.PC }),
                                  L.intl.string(L.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, m.jsxs)(m.Fragment, {
                              children: [(0, m.jsx)(pR, { preset: c, onShuffle: g }), (0, m.jsx)(pz, { user: t })],
                          }),
                          children: (0, m.jsxs)("div", {
                              children: [
                                  (0, m.jsxs)("div", {
                                      children: [
                                          (0, m.jsx)(T.D, {
                                              variant: "heading-xl/extrabold",
                                              children: L.intl.string(L.t["2zGdAW"]),
                                          }),
                                          (0, m.jsx)(Y.E, {
                                              className: pX.h_,
                                              variant: "text-sm/normal",
                                              children: L.intl.string(L.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, m.jsx)(T$, {
                                      className: pX.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Tn.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: py.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, m.jsx)(TM, {
                                      className: pX.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: py.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, m.jsx)(Tv, {
                                          className: pX.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: py.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: L.intl.string(L.t["7z0D1c"]),
                                          sectionTitle: L.intl.string(L.t.vtFfPX),
                                      }),
                                  (0, m.jsx)(TL, { user: t, className: pX.fz }),
                                  !I &&
                                      (0, m.jsx)(Y.E, {
                                          variant: "text-sm/normal",
                                          children: L.intl.string(L.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !I &&
                          (0, m.jsx)(pT.d, {
                              onSubscribeModalClose: f,
                              className: pX.Kv,
                              showUpsell: !0,
                              text: L.intl.format(L.t.TmfgI2, {
                                  onClick: () => {
                                      (0, px.K)({ onSubscribeFinish: f });
                                  },
                              }),
                              button: l
                                  ? L.intl.string(L.t.AfRWI8)
                                  : _
                                    ? L.intl.formatToPlainString(L.t.bkQ4bH, { percent: N?.discount.amount })
                                    : L.intl.string(L.t.pj0XBN),
                              position: "inline",
                          }),
                      I &&
                          (0, m.jsxs)("div", {
                              children: [
                                  (0, m.jsx)("div", { className: pX.BU }),
                                  (0, m.jsx)(pG.Ay, {
                                      type: tz.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tz.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var pH = n(814390),
    pK = n(643056),
    pW = n(843282),
    pZ = n(145497),
    pq = n(685073),
    pQ = n(534400),
    pJ = n(581781),
    p$ = n(743981),
    p0 = n(195801);
let p1 = (0, tk.Ld)(),
    p2 = A.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, E.cf)([sn.default], () => (0, pq.Zo)(sn.default.getCurrentUser()?.primaryGuild)),
            s = void 0 !== n ? n : (l.guildId ?? null),
            r = A.useMemo(() => {
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
                        e.set(n, { id: n, name: L.intl.string(L.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, l, s]),
            a = A.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = A.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, m.jsx)(pJ.A, {
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
            u = A.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, m.jsx)(pZ.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [r],
            ),
            d = A.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, m.jsx)(pQ.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: p$.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [r],
            ),
            c = A.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, m.jsx)(m.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = A.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            h = A.useCallback((e) => e === s, [s]),
            S = A.useCallback((e) => e, []),
            T = A.useCallback(() => {
                i?.(null);
            }, [i]),
            p = A.useRef(null);
        return (
            pV(p, e_._F.GUILD_TAG),
            (0, m.jsxs)(r6.A, {
                title: L.intl.string(L.t.Pdd1nd),
                titleId: p1,
                ref: p,
                children: [
                    (0, m.jsx)(Y.E, {
                        className: p0.VA,
                        variant: "text-sm/normal",
                        children: L.intl.string(L.t.mlZ6Jx),
                    }),
                    (0, m.jsx)(pW.Pw, {
                        className: p0.Lt,
                        optionClassName: p0.S0,
                        isSelected: h,
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
var p3 = n(318785),
    p6 = n(992526),
    p5 = n(470739);
let p4 = function () {
    return (0, p6.J)({ location: "UserSettingsProfileCustomization" })
        ? (0, m.jsx)(r6.A, {
              title: L.intl.string(L.t.l6w3Vj),
              description: L.intl.string(L.t.joHqdj),
              children: (0, m.jsx)(I.$, {
                  text: L.intl.string(L.t.wRraFx),
                  onClick: () => {
                      (0, p5._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var p8 = n(953726);
let p7 = (0, tk.Ld)();
function p9(e) {
    let t = (0, EB.L)(tz.PremiumTypes.TIER_2);
    return (0, m.jsxs)(r6.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: L.intl.string(L.t["9AjdkD"]),
        titleId: p7,
        children: [
            (0, m.jsx)("div", {
                children: (0, m.jsx)(la.k, {
                    "aria-labelledby": p7,
                    placeholder: e.placeholder,
                    maxLength: h.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, m.jsx)(TL, { user: e.user, className: p8.F }),
        ],
    });
}
var xe = n(376626);
function xt(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = O.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, m.jsx)("div", {
        className: xe.u,
        children: (0, m.jsx)(tQ.d, {
            label: L.intl.string(L.t["3cWDuO"]),
            description: l ? null : L.intl.formatToPlainString(L.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, SJ._e)() : (0, TI.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function xn(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, Tz.r)(nq.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TX.rh)(s, r, !1),
        o = (0, TW.LX)(a[0]);
    return (0, m.jsx)(r6.A, {
        title: L.intl.string(L.t["/X3fkf"]),
        children: (0, m.jsx)(TQ, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var xi = n(518477);
let xl = function () {
    let e = (0, E.bG)([u_.default], () => u_.default.getId());
    return (0, m.jsx)(r6.A, {
        title: L.intl.string(L.t.Jzj9q4),
        children: (0, m.jsx)(I.$, {
            text: L.intl.string(L.t.Geikwq),
            onClick: () => {
                (0, S3.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tO.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: xi.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var xs = n(654910);
function xr() {
    let e = (0, E.bG)([sn.default], () => {
            let e = sn.default.getCurrentUser();
            return (tr()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, E.bG)([Ti.A], () => Ti.A.getUserProfile(e.id)),
        n = (0, pK.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, E.cf)([S0.A], () => {
            let e = S0.A.getPendingChanges(),
                t = S0.A.getErrors();
            return { ...e, errors: t };
        }),
        A = (0, Tn.V7)({ userId: e.id, image: i }),
        h = (0, Ta.EC)(),
        S = an.Ay.canUsePremiumProfileCustomization(e),
        T = (0, S8.z5)(i, e.avatar),
        p = (0, S8.Ac)(s, t?.banner),
        x = (0, TY.Ay)(e.id),
        f = x?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (h?.nick ?? []),
        N = (g.bio?.length ?? 0) > 0 ? g.bio : (h?.bio ?? []),
        _ = (0, p3.b)(),
        C = null != (0, pq.Zo)(e.primaryGuild).guildId;
    return (0, m.jsxs)("div", {
        className: xs.Q,
        children: [
            (0, m.jsx)(p9, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: l,
                onGlobalNameChange: (e) => (0, TI.p)({ globalName: e }),
                user: e,
            }),
            (0, m.jsx)(
                T0,
                {
                    sectionTitle: L.intl.string(L.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, TI.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, m.jsx)(xl, {}),
            (0, m.jsx)(
                Tv,
                {
                    onAvatarChange: (e) => {
                        ((0, TI.p)({ avatar: e }), (0, S8.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: T,
                    errors: g.avatar,
                    sectionTitle: L.intl.string(L.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, m.jsx)(T_, { user: e, sectionTitle: L.intl.string(L.t["7v0T9P"]) }, "decoration"),
            (0, m.jsx)(TP, { user: e }),
            (0, m.jsx)(Tk, { user: e, sectionTitle: L.intl.string(L.t.wR5wOo) }, "effect"),
            (0, m.jsx)(TB, { user: e, sectionTitle: L.intl.string(L.t.GWrZOd) }, "frame"),
            S
                ? (0, m.jsxs)(m.Fragment, {
                      children: [
                          (0, m.jsx)(
                              TM,
                              {
                                  showRemoveBannerButton: p,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, TI.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, m.jsx)(T$, {
                              user: e,
                              pendingAvatarSrc: A,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, TI.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, m.jsx)(
                      xn,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, TI.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, m.jsx)(
                TT,
                {
                    sectionTitle: L.intl.string(L.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, TI.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (_.length > 0 || C) &&
                (0, m.jsx)(p2, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, TI.p)({ primaryGuildId: e }),
                }),
            null != f &&
                !n &&
                (0, m.jsx)(xt, { legacyUsername: f, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, m.jsx)(p4, {}, "badges"),
        ],
    });
}
function xa() {
    (0, lr.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("935205"), n.e("766901"), n.e("641704")]).then(n.bind(n, 562011));
        return (t) =>
            (0, m.jsx)(e, {
                ...t,
                source: {
                    page: h.liQ.USER_SETTINGS,
                    section: h.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: h.ZSU.BUTTON_CTA,
                    type: h.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var xo = n(447080);
function xu() {
    let e = (0, E.bG)([sn.default], () => {
            let e = sn.default.getCurrentUser();
            return (tr()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e);
        }),
        t = (0, E.bG)([e9.A], () => e9.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, E.cf)([S0.A], () => ({ ...S0.A.getPendingChanges(), showNotice: S0.A.showNotice() })),
        a = (0, Tn.V7)({ userId: e.id, image: i }),
        o = (0, S8.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, pH.A)() && null != n ? pS.Ay.parse(void 0, n).content : n,
        d = an.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eR.Ay)(tO.A.USER_SETTINGS_USER_PROFILE);
    A.useEffect(() => () => e6.h.wait(SJ.IM), []);
    let [g, S] = A.useState(!1),
        T = !d,
        p = A.useRef(null);
    return t
        ? (0, m.jsx)(a8.A, {})
        : (0, m.jsxs)(eR.f5, {
              value: c,
              children: [
                  (0, m.jsx)(ph, {}),
                  (0, m.jsx)(Te, {
                      profilePreview: (0, m.jsx)(Tt.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: xa,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: xo.ti,
                      }),
                      nameplatePreview: (0, m.jsx)(S4.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? xo.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, m.jsx)(xr, {}),
                  }),
                  (0, m.jsx)(pa.L, {
                      innerRef: p,
                      onChange: (e) => S(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, m.jsx)("div", {
                          ref: p,
                          children: (0, m.jsx)(pY, { user: e, shouldShow: T, isVisible: g }),
                      }),
                  }),
                  T &&
                      !s &&
                      (0, m.jsx)(pT.d, {
                          className: xo.EL,
                          showUpsell: !g,
                          text: L.intl.format(L.t.TmfgI2, { onClick: () => (0, px.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, m.jsx)(pp.l, {
                              size: "md",
                              location: tO.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, m.jsx)("div", {
                              className: xo.Xl,
                              children: (0, m.jsx)(I.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (te.default.track(h.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          p?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: L.intl.string(L.t.uw9zI7),
                                  icon: r0.t,
                              }),
                          }),
                      }),
              ],
          });
}
var xd = n(625494);
n(46121);
var xc = n(944983);
let xg = { [e_.Eq.USER_PROFILE]: "main_profile_tab", [e_.Eq.GUILD]: "guild_profile_tab" },
    xm = (0, u.E2)(d.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, E.bG)([lh.A, dh.Ay, S0.A], () => {
                    let e = S0.A.selectedGuildId ?? lh.A.getGuildId();
                    return null == e || S0._.has(e) ? dh.Ay.getFlattenedGuildIds().find((e) => !S0._.has(e)) : e;
                }),
                t = (0, E.bG)([lE.A], () => lE.A.getGuild(e)),
                n = (0, E.bG)([S0.A], () => S0.A.showNotice()),
                i = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()),
                l = pU.A.useField("subsection");
            return (
                A.useEffect(() => {
                    (0, n5._)(xg[l]);
                }, [l]),
                A.useEffect(() => {
                    null != i && t?.id != null && (0, pl.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, m.jsx)(pr, {
                    children: (0, m.jsxs)(uz.F, {
                        component: (0, m.jsx)(lt.A, {
                            children: (0, m.jsx)(T.D, {
                                variant: "heading-xl/normal",
                                children: L.intl.string(L.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, m.jsxs)(S6.V, {
                                className: xc.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            ((0, n4.fO)({ duration: 300, intensity: 1.4 }),
                                                xd._.dispatch(h.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === e_.Eq.GUILD && null != t && (0, S5.V2)(t.id),
                                            pU.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, m.jsx)(
                                        S6.V.Item,
                                        {
                                            className: xc.YU,
                                            id: e_.Eq.USER_PROFILE,
                                            children: L.intl.string(L.t["2p07FR"]),
                                        },
                                        e_.Eq.USER_PROFILE,
                                    ),
                                    (0, m.jsx)(
                                        S6.V.Item,
                                        {
                                            className: is()(xc.YU, xc.HY),
                                            "aria-label": L.intl.string(L.t.kPHroX),
                                            id: e_.Eq.GUILD,
                                            children: L.intl.string(L.t.kPHroX),
                                        },
                                        e_.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === e_.Eq.GUILD
                                ? (0, m.jsx)(pi, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, n4.fO)({ duration: 300, intensity: 1.4 }),
                                                  xd._.dispatch(h.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, S5.JJ)(e.id);
                                      },
                                  })
                                : (0, m.jsx)(xu, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            L.intl.string(L.t["vi7f+q"]),
            L.intl.string(L.t.Ip9nBS),
            L.intl.string(L.t["2p07FR"]),
            L.intl.string(L.t["7vhiqk"]),
            L.intl.string(L.t.kPHroX),
            L.intl.string(L.t.lqaIxI),
            L.intl.string(L.t.Vgdusv),
            L.intl.string(L.t.DMeO2X),
        ],
    }),
    xA = (0, u.zZ)(d.X.PROFILE_CATEGORY, { buildLayout: () => [xm] });
var xE = n(379633);
function xh() {
    let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, S2.A)({ userId: e?.id, size: f._3.SIZE_48 });
    return null == e
        ? null
        : (0, m.jsxs)("div", {
              className: xE.a5,
              children: [
                  (0, m.jsx)(x.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: f._3.SIZE_48,
                      "aria-label": L.intl.string(L.t.lqaIxI),
                  }),
                  (0, m.jsxs)("div", {
                      className: xE.FS,
                      children: [
                          (0, m.jsx)(Y.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, m.jsxs)("div", {
                              className: xE.Fk,
                              children: [
                                  (0, m.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: L.intl.string(L.t.Ip9nBS),
                                  }),
                                  (0, m.jsx)(at.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let xS = (0, u.t_)(d.X.PROFILE_PANEL, {
        useTitle: () => L.intl.string(L.t["vi7f+q"]),
        notice: { stores: [S0.A], element: S$.A },
        initialize: () => () =>
            e6.h.wait(() => {
                (0, SJ.F7)();
            }),
        buildLayout: () => [xA],
    }),
    xT = (0, u.i4)(d.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t["vi7f+q"]),
        icon: xx,
        StronglyDiscouragedCustomComponent: xh,
        usePredicate: () => !(0, S1.X)("user_settings_sidebar"),
        buildLayout: () => [xS],
    }),
    xp = (0, u.i4)(d.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => L.intl.string(L.t["vi7f+q"]),
        icon: xx,
        StronglyDiscouragedCustomComponent: xh,
        usePredicate: () => (0, S1.X)("user_settings_sidebar"),
        onClick: () => {
            let e = u_.default.getId();
            (0, S3.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function xx() {
    let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, S2.A)({ userId: e?.id, size: f._3.SIZE_48 });
    return (0, m.jsx)(x.eu, { src: t, avatarDecoration: n, size: f._3.SIZE_20, "aria-hidden": !0 });
}
let xf = (0, u.WI)(d.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [xT, xp] });
var xI = n(98207),
    xN = (n(204925), n(818348));
let x_ = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, lr.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 888363),
            );
            return (n) => (0, m.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? xN.tE : null, onCloseCallback: t },
    );
};
var xC = n(940856),
    xb = n(506775),
    xy = n(379257),
    xv = n(121780),
    xj = n(666113);
function xO() {
    let e = xv.A.getCountryCode(),
        t = null != e ? xj.IN[e.alpha2] : void 0;
    xy.A.openUrl(ep.A.getArticleURL(t ?? xj.k9));
}
var xL = n(521169);
function xD() {
    return (0, xL.w)(xj.Vc);
}
var xR = n(680091);
function xP() {
    let e = xD(),
        t = (0, xb.ZP)();
    if (!e) return null;
    switch (t) {
        case xb.M$.ADULT:
            return L.intl.format(xR.default.gi4ulu, { handleOnAgeGatedContentHook: xb.M0 });
        case xb.M$.TEEN:
            return L.intl.format(xR.default["221iML"], {
                handleOnAgeGatedContentHook: xb.M0,
                handleOnConfirmAgeHook: xb.aP,
            });
        case xb.M$.UNVERIFIED:
            return L.intl.format(xR.default["W0/7DD"], {
                handleOnAgeGatedContentHook: xO,
                handleOnConfirmAgeHook: xb.aP,
            });
    }
}
var xG = n(26137),
    xM = n(957485);
function xU() {
    let e = xD(),
        t = (0, xb.ZP)();
    return e ? { icon: t === xb.M$.ADULT ? xG.r : xM.i, backgroundColor: nq.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function xV() {
    let e = xU();
    return null != e ? { type: g.hp.ICON, ...e } : null;
}
function xk() {
    return xD() ? L.intl.string(L.t.piqs0o) : null;
}
var xw = n(438140);
let xF = [{ badgeType: g.Xi.NEW, dismissibleContent: eo.M.TINY_BRONCO_SETTINGS }],
    xB = [];
function xz() {
    return (0, xw.Wt)() ? xF : xB;
}
var xX = n(36149),
    xY = n(207560),
    xH = (((r = {}).LEGACY = "legacy"), (r.TINY_BRONCO = "tinyBronco"), r),
    xK = (((a = {}).VERIFY = "verify"), (a.EDIT = "edit"), (a.INFO = "info"), a);
function xW(e, t) {
    let n = (0, E.bG)([sn.default], () => null != sn.default.getCurrentUser()),
        i = (0, xY.fk)(),
        l = (0, xb.ZP)(),
        s = (0, xX.Y2)(),
        r = xD();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (l) {
        case xb.M$.UNVERIFIED:
            return "verify" === e;
        case xb.M$.TEEN:
            return e === (r ? "info" : "verify");
        case xb.M$.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var xZ = n(841365);
function xq() {
    let e = (0, xb.hD)();
    return (0, m.jsxs)(Y.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, L.intl.format(xZ.default.WM5adV, { handleOnHelpUrlHook: xb.M0 })],
    });
}
let xQ = {
        useTitle: () => xk() ?? L.intl.string(L.t["/52UYy"]),
        useSubtitle: xP,
        useVariant: () => "secondary",
        useLeadingDecoration: xV,
        getDismissibleBadges: xz,
        useTrailingDecoration: () => ({
            type: g.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: xq,
        }),
        useLabel: () => L.intl.string(L.t.bt75uw),
        onClick: function () {
            (0, lr.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, m.jsx)(e, { ...t });
            });
        },
    },
    xJ = (0, u.Tf)(d.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...xQ, usePredicate: () => xW(xK.EDIT, xH.LEGACY) }),
    x$ = (0, u.Tf)(d.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...xQ,
        usePredicate: () => xW(xK.EDIT, xH.TINY_BRONCO),
        useAriaLabel: () => L.intl.string(L.t.pBMSie),
    }),
    x0 = {
        useTitle: () => xk() ?? L.intl.string(L.t["/52UYy"]),
        useSubtitle: xP,
        useLeadingDecoration: function () {
            let e = xU();
            return null != e ? { type: g.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: xz,
        useTrailingDecoration: () => ({ type: g.Ln.TEXT, text: (0, xb.hD)() }),
    },
    x1 = (0, u.v_)(d.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...x0, usePredicate: () => xW(xK.INFO, xH.LEGACY) }),
    x2 = (0, u.v_)(d.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...x0,
        usePredicate: () => xW(xK.INFO, xH.TINY_BRONCO),
    }),
    x3 = {
        useTitle: () => xk() ?? L.intl.string(L.t["/52UYy"]),
        useSubtitle: xP,
        useVariant: () => "secondary",
        useLeadingDecoration: xV,
        getDismissibleBadges: xz,
        useTrailingDecoration: () => ({ type: g.fq.TEXT, text: (0, xb.hD)() }),
        useLabel: function () {
            return (0, xX.yM)() ? L.intl.string(L.t["9KiIz6"]) : L.intl.string(L.t.DVywUB);
        },
        onClick: xb.aP,
    },
    x6 = (0, u.Tf)(d.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...x3, usePredicate: () => xW(xK.VERIFY, xH.LEGACY) }),
    x5 = (0, u.Tf)(d.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...x3,
        usePredicate: () => xW(xK.VERIFY, xH.TINY_BRONCO),
    }),
    x4 = [x6, xJ, x1],
    x8 = [x5, x$, x2],
    x7 = (0, u.Tf)(d.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => L.intl.string(L.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: g.fq.TEXT, text: L.intl.string(L.t.qxk9zo) }),
        useLabel: () => L.intl.string(L.t.BleMPB),
        onClick: () => x_(),
    });
function x9(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fe(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function ft(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = A.useState(!1),
        a = s ? t : n(t);
    return (0, m.jsxs)(z.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, m.jsx)(Y.E, { variant: "text-md/medium", children: a }),
            (0, m.jsx)(A_.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? L.intl.string(L.t.fgq1gs) : L.intl.string(L.t.dcztdU),
            }),
        ],
    });
}
function fn() {
    let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.email);
    return null == e
        ? (0, m.jsx)(Y.E, { variant: "text-md/medium", children: L.intl.string(L.t["8SfTN/"]) })
        : (0, m.jsx)(ft, {
              text: e,
              censor: fe,
              revealLabel: L.intl.string(L.t["Zvx+yV"]),
              hideLabel: L.intl.string(L.t.nqTD4d),
          });
}
let fi = (0, u.Tf)(d.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => L.intl.string(L.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: g.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fn }),
    useLabel: function () {
        return null == (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.email)
            ? L.intl.string(L.t.OYkgVk)
            : L.intl.string(L.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.email)
            ? L.intl.string(L.t["pvBD+W"])
            : L.intl.string(L.t["8peUT0"]);
    },
    onClick: function () {
        (0, lr.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, m.jsx)(e, { ...t });
        });
    },
});
var fl = n(557722),
    fs = n(53516);
function fr() {
    let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, m.jsx)(Y.E, { variant: "text-md/medium", children: L.intl.string(L.t.I5kDqj) })
        : (0, m.jsx)(z.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, m.jsx)(ft, {
                  text: t,
                  censor: x9,
                  revealLabel: L.intl.string(L.t.eY3xlT),
                  hideLabel: L.intl.string(L.t["jllbv+"]),
              }),
          });
}
let fa = (0, u.Tf)(d.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => L.intl.string(L.t.kerONq),
    useAriaLabel: function () {
        return null == (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.phone)
            ? L.intl.string(L.t["SfUuE+"])
            : L.intl.string(L.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: g.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fr }),
    useLabel: function () {
        return null == (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.phone)
            ? L.intl.string(L.t.OYkgVk)
            : L.intl.string(L.t.bt75uw);
    },
    onClick: function () {
        null == sn.default.getCurrentUser()?.phone
            ? (0, lr.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("766806"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, m.jsx)(e, { reason: fl.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fs.V },
              )
            : (0, lr.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, m.jsx)(e, { ...t });
              });
    },
});
function fo() {
    let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fu() {
    let e = (0, Ta.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, E.bG)([sn.default], () => sn.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, m.jsxs)(m.Fragment, {
        children: [
            (0, m.jsx)(Y.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, m.jsx)(le.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, m.jsx)(iX.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: nq.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let fd = (0, u.Tf)(d.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => L.intl.string(L.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: g.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fu,
        }),
        useLabel: () => L.intl.string(L.t.bt75uw),
        useAriaLabel: () => L.intl.string(L.t.JECa91),
        useSubtitle: () => (fo() ? L.intl.string(L.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fo,
        onClick: function () {
            (0, lr.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, m.jsx)(e, { ...t });
            });
        },
    }),
    fc = (0, u.zZ)(d.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, E.bG)([sn.default], () => null != sn.default.getCurrentUser()),
        useTitle: () => L.intl.string(L.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: g.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            title: L.intl.string(L.t.tuGzBT),
                            text: L.intl.string(L.t.NAzplE),
                            button: { text: L.intl.string(L.t.lm1UKt), onClick: () => (0, xC.S)(e) },
                        }
                  : {
                        type: g.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: L.intl.string(L.t["/3qnL/"]),
                        text: L.intl.string(L.t.qKs3vg),
                        button: { text: L.intl.string(L.t["7psymi"]), onClick: () => x_() },
                    };
        },
        buildLayout: () => [fd, x7, fi, fa, ...x4],
    });
var fg = n(398177);
let fm = (0, u.Tf)(d.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => L.intl.string(L.t["CIGa+7"]),
    useLabel: () => L.intl.string(L.t.bt75uw),
    useAriaLabel: () => L.intl.string(L.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, lr.openModal)((e) => (0, m.jsx)(fg.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fA = n(200921);
let fE = [];
function fh() {
    fE = [];
}
class fS extends E.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fE;
    }
}
let fT = new fS(e6.h, {
    LOGOUT: fh,
    LOGIN_SUCCESS: fh,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fE = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...fE],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        fE = n;
    },
});
function fp() {
    let e = (0, E.cf)([fT], () => fT.getSessions());
    return A.useMemo(() => {
        let t = [...e],
            n = null,
            i = u_.default.getAuthSessionIdHash();
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
function fx(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? L.intl.string(L.t.TXCmfL) : ia()(e).fromNow();
}
var ff = n(176524),
    fI = n(646270),
    fN = n(738678),
    f_ = n(489828);
function fC(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, m.jsxs)(z.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, m.jsx)(ff.A, { icon: t, color: r ? nq.A.colors.ICON_MUTED : "currentColor" }),
            (0, m.jsxs)(z.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, m.jsxs)(z.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, m.jsx)(Y.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, m.jsx)(Y.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, m.jsx)(Y.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, m.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function fb(e) {
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
                            return { text: L.intl.string(L.t.cDHCNY), icon: hR.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: fI.u };
                        case "horizon os":
                            return { text: e, icon: fN.G };
                        default:
                            return { text: e, icon: hR.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : fx(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(it.Vq);
    return (0, m.jsx)(fC, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, m.jsx)(n$.D, {
                className: f_.X,
                onClick: () => (0, fA.U0)(t.id_hash),
                "aria-label": L.intl.string(L.t.E4MJNt),
                children: (0, m.jsx)(Ej.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fy(e) {
    let { title: t, children: n } = e,
        i = A.useId();
    return (0, m.jsxs)(z.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, m.jsx)(T.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, m.jsx)(z.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let fv = (0, u.E2)(d.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = fp();
            return null == e
                ? (0, m.jsx)(a9.y, {})
                : (0, m.jsx)(fy, {
                      title: L.intl.string(L.t.LLS19o),
                      children: (0, m.jsx)(fb, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fj = (0, u.E2)(d.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fp();
            return (0, m.jsx)(tq.D, {
                label: L.intl.string(L.t.Vij32M),
                description: L.intl.string(L.t.OTXyaf),
                children: (0, m.jsx)(I.$, {
                    onClick: () => (0, fA.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: L.intl.string(L.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [L.intl.string(L.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fp();
            return e.length > 0;
        },
    });
var fO = n(766928);
function fL() {
    return (0, m.jsx)(fC, {
        icon: fO.W,
        label: L.intl.string(L.t.iUa0sn),
        description: L.intl.format(L.t["044+8i"], {
            onClick: () =>
                (0, ni.openUserSettings)(d.X.ACCOUNT_PANEL, { analyticsLocations: [tO.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fD = (0, u.E2)(d.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fp(),
                t = (0, E.bG)([sn.default], () => sn.default.getCurrentUser());
            return (0, m.jsxs)(fy, {
                title: L.intl.string(L.t.xx1MWc),
                children: [
                    e.map((e) => (0, m.jsx)(fb, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, m.jsx)(fL, {}),
                ],
            });
        },
        useSearchTerms: () => [L.intl.string(L.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fp(),
                t = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fR = (0, u.zZ)(d.X.SESSIONS_CATEGORY, {
        useTitle: () => L.intl.string(L.t.mEndXM),
        useSubtitle: () => L.intl.string(L.t.b7ZpTM),
        initialize: () => {
            (0, fA.GY)();
        },
        buildLayout: () => [fv, fD, fj],
        useSearchTerms: () => [
            L.intl.string(L.t["+1h0k/"]),
            L.intl.string(L.t.LLS19o),
            L.intl.string(L.t.xx1MWc),
            L.intl.string(L.t.lSWsrd),
        ],
    }),
    fP = (0, u.t_)(d.X.SESSIONS_PANEL, {
        useTitle: () => L.intl.string(L.t.mEndXM),
        useObscuredNotice: a8.L,
        buildLayout: () => [fR],
    }),
    fG = (0, u.t0)(d.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fP],
        initialize: () => {
            (0, fA.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = fp(),
                n = t.length + +(null != e);
            return {
                type: g.xn.TEXT,
                text: n > 0 ? L.intl.formatToPlainString(L.t.G7zwOk, { count: n }) : L.intl.string(L.t.MKDeyL),
            };
        },
    });
var fM = n(464477);
function fU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? L.intl.string(L.t.YJGvuD)
              : L.intl.string(L.t["3iKih7"])
          : e.hasFlag(h.nhx.PARTNER)
            ? t
                ? L.intl.string(L.t["9UucjT"])
                : L.intl.string(L.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? L.intl.string(L.t["9VWpT9"])
                  : L.intl.string(L.t.LfCBZG)
              : null;
}
function fV() {
    return (0, aZ.bG)([sn.default], () => {
        let e = sn.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fk =
    (((o = {}).AVAILABLE = "available"),
    (o.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (o.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    o);
function fw() {
    let e = (0, aZ.bG)([sn.default], () => sn.default.getCurrentUser()?.verified);
    return fM.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fF() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, aZ.bG)([lE.A, T3.A, sn.default], () =>
        sn.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? L.intl.string(L.t.hxf9fX)
                : L.intl.string(L.t["3iKih7"])
            : lE.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        T3.A.can(h.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? L.intl.string(L.t.OYTCUh)
                  : L.intl.string(L.t.HC8uSZ)
              : null,
    );
}
var fB = n(466034);
let fz = (0, u.Tf)(d.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => L.intl.string(L.t.lQsY7B),
        useSubtitle: () => fF(!0),
        useDisabled: () => null !== fF(!0),
        useLabel: () => L.intl.string(L.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, E.bG)([u_.default], () => u_.default.hasTOTPEnabled()),
                t = fw() === fk.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, nQ.A)({
                title: L.intl.string(L.t["D+aE7g"]),
                subtitle: L.intl.string(L.t.EA4ZEk),
                variant: "critical",
                confirmText: L.intl.string(L.t.N86XcP),
                onConfirm: () => xI.A.disable(),
            }),
    }),
    fX = (0, u.zZ)(d.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => L.intl.string(L.t.RumMFo),
        useSubtitle: () => L.intl.string(L.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, E.bG)([u_.default], () => u_.default.hasTOTPEnabled()),
                t = fw() === fk.AVAILABLE;
            if (!e && t)
                return {
                    type: g.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: g.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: L.intl.string(L.t.cTNUeD),
                            onClick: fB.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fw()) {
                case fk.UNAVAILABLE_NO_CRYPTO:
                    return { type: g.lT.INLINE_NOTICE, noticeType: "info", text: L.intl.string(L.t.PhHhsj) };
                case fk.UNAVAILABLE_UNVERIFIED:
                    return { type: g.lT.INLINE_NOTICE, noticeType: "warning", text: L.intl.string(L.t.uggF7o) };
                case fk.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fz],
    });
var fY = n(670492),
    fH = n(32880),
    fK = n(663417),
    fW = n(658675),
    fZ = n(900686);
function fq() {
    (0, lr.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, m.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    xI.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, lr.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e("514567"), n.e("96179")]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, m.jsx)(e, { ...n, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: L.intl.string(L.t.PsQmzU),
                actionText: L.intl.string(L.t.ajkYcF),
            });
    });
}
var fQ = n(858487);
function fJ(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function f$() {
    let e = fY.A.getVerificationKey();
    try {
        await xI.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, l4.P0)({
            message: e.body?.message ?? L.intl.string(L.t.F8FvUy),
            type: l8.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function f0(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = fJ(t),
        l = A.useRef(null),
        s = (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)(fW.P, { checked: n }), (0, m.jsx)(Y.E, { variant: "text-md/normal", children: i })],
        });
    return uj.p5
        ? (0, m.jsx)(n$.D, {
              tag: "li",
              className: is()(fQ.aY, fQ.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uj.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  ((0, uj.C)(i),
                      (0, l4.P0)({
                          message: L.intl.string(L.t.mGZ66D),
                          type: l8.Ck.SUCCESS,
                          id: "backup-code-copied",
                      }));
              },
              children: s,
          })
        : (0, m.jsx)("li", { className: fQ.aY, children: s });
}
let f1 = (0, u.zZ)(d.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => L.intl.string(L.t.fC9qV0),
        useSubtitle: () =>
            (0, E.bG)([fY.A], () => fY.A.getBackupCodes().length > 0)
                ? L.intl.format(L.t.tp7zEK, {})
                : L.intl.string(L.t.LoOi4S),
        usePredicate: fV,
        buildLayout: () => [f2],
    }),
    f2 = (0, u.E2)(d.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [L.intl.string(L.t.fC9qV0)],
        Component: function () {
            let e = (0, E.bG)([fY.A], () => fY.A.getBackupCodes()),
                t = A.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${fJ(t)}` + (n ? ` (${L.intl.string(L.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, m.jsx)(I.$, { text: L.intl.string(L.t.Jc2myK), size: "sm", variant: "secondary", onClick: fq })
                : (0, m.jsxs)(m.Fragment, {
                      children: [
                          (0, m.jsx)("ul", {
                              className: fQ.E5,
                              children: e.map((e) => (0, m.jsx)(f0, { code: e }, e.code)),
                          }),
                          (0, m.jsxs)(sw.e, {
                              size: "sm",
                              children: [
                                  (0, m.jsx)(fZ.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, m.jsx)(I.$, {
                                          text: L.intl.string(L.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fH.DownloadIcon,
                                      }),
                                  }),
                                  (0, m.jsx)(I.$, {
                                      text: L.intl.string(L.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fK.RefreshIcon,
                                      onClick: f$,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    f3 = (0, u.Tf)(d.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => L.intl.string(L.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = A.useState(!1),
                n = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : L.intl.format(e ? L.t["xDBk/I"] : L.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, m.jsx)(A_.Q, {
                              text: e ? L.intl.string(L.t.fgq1gs) : L.intl.string(L.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => L.intl.string(L.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.hasFlag(h.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, lr.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, m.jsx)(e, {
                        ...t,
                        handleSubmit: xI.A.disableSMS,
                        title: L.intl.string(L.t.KLWnit),
                        children: L.intl.string(L.t["W0/Duf"]),
                    });
            }),
    }),
    f6 = (0, u.zZ)(d.X.SMS_AUTH_CATEGORY, {
        useTitle: () => L.intl.string(L.t.wuHuI5),
        useSubtitle: () => (0, E.bG)([sn.default], () => fU(sn.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()?.hasFlag(h.nhx.MFA_SMS) ?? !1),
                t = (0, E.bG)([sn.default], () => null != fU(sn.default.getCurrentUser()));
            if (!e)
                return {
                    type: g.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: g.UV.BUTTON,
                            id: "sms-setup-button",
                            text: L.intl.string(L.t.Age7yU),
                            onClick: f5,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fw(),
                t = fV(),
                n = (0, E.bG)([u_.default], () => u_.default.hasTOTPEnabled());
            return e === fk.AVAILABLE && t && n;
        },
        buildLayout: () => [f3],
    });
function f5() {
    let e = sn.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: fl.d.USER_SETTINGS_UPDATE, onAddedPhone: xI.A.enableSMS }),
                (0, lr.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("590275"),
                            n.e("766806"),
                            n.e("989545"),
                            n.e("311493"),
                            n.e("84704"),
                            n.e("286197"),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, m.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: fs.V },
                ));
        } else xI.A.enableSMS();
}
var f4 = n(665671),
    f8 = n(442433),
    f7 = n(917136),
    f9 = n(976910),
    Ie = n(267255);
function It(e) {
    let { credential: t } = e;
    return (0, m.jsxs)("li", {
        className: Ie.e,
        children: [
            (0, m.jsxs)("div", {
                children: [
                    (0, m.jsx)(Y.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, m.jsx)(Y.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: L.intl.format(L.t["7JgxF5"], { lastUsed: fx(t.last_used) }),
                        }),
                ],
            }),
            (0, m.jsx)(i7.K, {
                icon: df.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": L.intl.string(L.t["+nrTbK"]),
                onClick: (e) => {
                    (0, f8.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, m.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let In = (0, u.zZ)(d.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => L.intl.string(L.t.IBq4Y3),
        useSubtitle: () => L.intl.string(L.t.yK9edS),
        useHeaderDecoration: function () {
            if (fw() === fk.AVAILABLE)
                return {
                    type: g.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: g.UV.BUTTON,
                            id: "add-security-key-button",
                            text: L.intl.string(L.t["Tzs/fw"]),
                            icon: iw.j,
                            onClick: f4.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fw()) {
                    case fk.UNAVAILABLE_NO_CRYPTO:
                        return { type: g.lT.INLINE_NOTICE, noticeType: "info", text: L.intl.string(L.t.bWCGI9) };
                    case fk.UNAVAILABLE_UNVERIFIED:
                        return { type: g.lT.INLINE_NOTICE, noticeType: "warning", text: L.intl.string(L.t.uggF7o) };
                    case fk.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Ii],
    }),
    Ii = (0, u.E2)(d.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [L.intl.string(L.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, E.cf)([f9.A], () => ({
                hasFetchedCredentials: f9.A.hasFetchedCredentials(),
                credentials: f9.A.getCredentials(),
            }));
            return (A.useEffect(() => {
                t || f7.JQ();
            }, [t]),
            t)
                ? (0, m.jsx)(z.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, m.jsx)(It, { credential: e }, e.id)),
                  })
                : (0, m.jsx)(a9.y, {});
        },
    }),
    Il = (0, u.t_)(d.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => L.intl.string(L.t.m0FidJ),
        buildLayout: () => [In, fX, f6, f1],
    }),
    Is = (0, u.t0)(d.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = fV();
            return { type: g.xn.TEXT, text: e ? L.intl.string(L.t.lQsY7B) : L.intl.string(L.t.WsUuTt) };
        },
        buildLayout: () => [Il],
    }),
    Ir = (0, u.zZ)(d.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => L.intl.string(L.t["0iH2vc"]),
        buildLayout: () => [fm, Is, fG],
    }),
    Ia = { [xb.M$.ADULT]: xR.default.PMznGO, [xb.M$.TEEN]: xR.default.qSkhZH, [xb.M$.UNVERIFIED]: xR.default.vGxRDB },
    Io = [eo.M.TINY_BRONCO_NOTICE],
    Iu = [];
function Id() {
    xy.A.openUrl(xj.m5);
}
var Ic = n(308645),
    Ig = n(555725),
    Im = n(855267);
let IA = (0, u.E2)(d.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [L.intl.string(L.t["16r9jm"])],
        Component: Im.A,
    }),
    IE = (0, u.zZ)(d.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [IA] }),
    Ih = (0, u.t_)(d.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => L.intl.string(L.t["16r9jm"]),
        buildLayout: () => [IE],
    }),
    IS = (0, u.t0)(d.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => L.intl.string(L.t["16r9jm"]),
        useSubtitle: Ig.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, Ig._k)();
            return { type: g.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: g.xn.TEXT, text: (0, Ig.aO)() };
        },
        initialize: () => {
            Ic.Yn();
        },
        buildLayout: () => [Ih],
    }),
    IT = (0, u.zZ)(d.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (xD() ? L.intl.string(L.t.GI2mea) : null) ?? L.intl.string(L.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, xw.LH)(),
                t = (0, xb.ZP)(),
                [n, i] = (0, cp.kn)(e ? Io : Iu);
            return e && null != n
                ? {
                      type: g.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "start",
                      text: L.intl.format(Ia[t], { handleOnBlogHook: Id }),
                      onDismiss: () => i(cj.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...x8, IS],
    });
var Ip = n(738188),
    Ix = n(834981),
    If = n(987197),
    II = n(822585),
    IN = n(840387),
    I_ = n(465558),
    IC = n(513687);
let Ib = (0, u.E2)(d.X.FAMILY_CENTER_SETTING, {
        Component: I_.p,
        useSearchTerms: () => [
            L.intl.string(IC.default.RZqaJn),
            L.intl.string(IC.default.bdBmqy),
            L.intl.string(IC.default["gVWG+6"]),
            L.intl.string(IC.default.ahKIJO),
            L.intl.string(IC.default["8SLtqb"]),
        ],
    }),
    Iy = (0, u.zZ)(d.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [Ib] }),
    Iv = (0, u.t_)(d.X.FAMILY_CENTER_PANEL, {
        useTitle: () => L.intl.string(IC.default.RZqaJn),
        buildLayout: () => [Iy],
    }),
    Ij = (0, u.zZ)(d.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => L.intl.string(IC.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, If.f)(),
                t = (0, II.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, Ix.VT)();
            return A.useMemo(() => (n ? { badgeType: g.Xi.WARNING } : { badgeType: g.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [IO],
    }),
    IO = (0, u.t0)(d.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Ix.Li)() ? L.intl.string(IC.default.IcMQUP) : L.intl.string(IC.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, IN.Z)(),
                t = (0, Ix.Li)();
            return e
                ? t
                    ? L.intl.string(IC.default.G8lHFU)
                    : L.intl.string(IC.default.uOLNEZ)
                : L.intl.string(IC.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, If.f)(),
                t = (0, II.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: g.Xy.ICON,
                      icon: Ip.WarningIcon,
                      color: nq.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: nq.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [Iv],
    });
var IL = n(425587),
    ID = n(662758);
function IR(e) {
    if (e.body.code === h.t02.INVALID_PASSWORD) throw e;
    (0, sU.A)({ title: L.intl.string(L.t.LX0nT8), subtitle: e.body.message });
}
async function IP() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = sn.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await IL.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, sU.A)({
              title: L.intl.string(L.t["Y++oNe"]),
              subtitle: L.intl.format(L.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : lE.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, sU.A)({ title: L.intl.string(L.t.vJiTOL), subtitle: L.intl.string(L.t.UyVVan) })
          : t.isClaimed()
            ? (0, lr.openModal)((t) =>
                  (0, m.jsx)(ID.default, {
                      ...t,
                      handleSubmit: (t) => (0, SJ.U_)(t, e).then(h.tEg, IR),
                      title: e ? L.intl.string(L.t.xca2ts) : L.intl.string(L.t.goXv9g),
                      actionText: e ? L.intl.string(L.t["8lQ2rR"]) : L.intl.string(L.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? L.intl.string(L.t.FB4H1D) : L.intl.string(L.t.gk7h32),
                  }),
              )
            : (0, nQ.A)({
                  title: L.intl.string(L.t.xca2ts),
                  subtitle: L.intl.string(L.t.FB4H1D),
                  confirmText: L.intl.string(L.t["8lQ2rR"]),
                  onConfirm: () => (0, SJ.U_)("", !0),
              });
}
let IG = (0, u.Tf)(d.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => L.intl.string(L.t["gIpzR+"]),
        useSubtitle: () => L.intl.string(L.t.Bd6dOf),
        useLabel: () => L.intl.string(L.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => IP(!0),
    }),
    IM = (0, u.Tf)(d.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => L.intl.string(L.t["p/Tjtp"]),
        useSubtitle: () => L.intl.string(L.t.YvDmKb),
        useLabel: () => L.intl.string(L.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => IP(!1),
        usePredicate: () => {
            let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    IU = (0, u.zZ)(d.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [IM, IG] }),
    IV = (0, u.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => L.intl.string(L.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (xI.A.clearBackupCodes(), (0, SJ.Uo)());
            };
        },
        useObscuredNotice: a8.L,
        buildLayout: () => [fc, Ir, IT, Ij, IU],
    }),
    Ik = (0, u.i4)(d.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t["ldCE/p"]),
        icon: gp.UserIcon,
        buildLayout: () => [IV],
    });
var Iw = n(176781),
    IF = n(341923),
    IB = n(572164),
    Iz = n(614584),
    IX = n(915725),
    IY = n(268378);
let IH = (0, u.zD)(d.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => L.intl.string(IY.default.j29uJx),
        useSubtitle: () => L.intl.format(IY.default.UCzGcQ, { learnMoreLink: ep.A.getArticleURL(h.MVz.CLIPS) }),
        useValue: () => (0, E.bG)([IX.Ay], () => IX.Ay.getEnableAutoclipping()),
        setValue: Iz.uL,
        useDisabled: () => !(0, IB.E)(),
    }),
    IK = (0, u.zY)(d.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [IH], headerSettingKey: IH.key }),
    IW = (0, u.zZ)(d.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => L.intl.string(IY.default.XWkJoi),
        useSubtitle: () => L.intl.string(IY.default["MJ/VsO"]),
        usePredicate: IF.HN,
        usePersistentBadge: () => ({ badgeType: g.Xi.BETA }),
        useInlineNotice: () =>
            (0, IB.E)()
                ? null
                : {
                      type: g.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: L.intl.string(IY.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: L.intl.string(IY.default.qGgW4M),
                          onClick: () => Iz.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [IK],
    });
var IZ = n(696016);
let Iq = [IZ.zq, 25, 50, IZ.Y2, IZ.rv],
    IQ = (0, u.sN)(d.X.CLIPS_BITRATE, {
        useTitle: () => L.intl.string(L.t["8bZyov"]),
        useSubtitle: () => L.intl.string(L.t["h8DSx/"]),
        minValue: IZ.zq,
        maxValue: IZ.rv,
        useDefaultValue: () => IZ.Y2,
        getInitialValue: () => IX.Ay.getSettings().clipsQuality.bitratePercent ?? IZ.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = IX.Ay.getSettings();
            Iz.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: Iq,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, IB.E)(),
    });
var IJ = n(226640);
let I$ = (0, u.Hn)(d.X.CLIPS_FRAME_RATE, {
        useTitle: () => L.intl.string(L.t["2wScL1"]),
        useSubtitle: () => L.intl.string(L.t["Rf9+fy"]),
        useValue: () => (0, E.bG)([IX.Ay], () => IX.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = IX.Ay.getSettings();
            Iz.GS({ ...t, frameRate: e });
        },
        useOptions: IJ.Fz,
        useDisabled: () => !(0, IB.E)(),
    }),
    I0 = (0, u.E2)(d.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [L.intl.string(L.t.SIxrIF)],
        usePredicate: () => (0, E.bG)([IX.Ay], () => IX.Ay.getHardwareClassification()) === IZ.k9.BELOW_MINIMUM,
        Component: () => (0, m.jsx)(lK.A, { look: lK.k.WARNING, children: L.intl.string(L.t.SIxrIF) }),
    }),
    I1 = (0, u.Hn)(d.X.CLIPS_LENGTH, {
        useTitle: () => L.intl.string(L.t.OgfUio),
        useSubtitle: () => L.intl.string(L.t.H7j4tY),
        useValue: () => (0, E.bG)([IX.Ay], () => IX.Ay.getSettings().clipsLength),
        setValue: (e) => Iz.h$(e),
        useOptions: IJ.Qu,
        useDisabled: () => !(0, IB.E)(),
    }),
    I2 = (0, u.E2)(d.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [L.intl.string(L.t["Z+MfqT"])],
        Component: () => (0, m.jsx)(lK.A, { look: lK.k.INFO, children: L.intl.string(L.t["Z+MfqT"]) }),
    }),
    I3 = (0, u.Hn)(d.X.CLIPS_RESOLUTION, {
        useTitle: () => L.intl.string(L.t.aFudZJ),
        useSubtitle: () => L.intl.string(L.t.nIrkW5),
        useValue: () => (0, E.bG)([IX.Ay], () => IX.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = IX.Ay.getSettings();
            Iz.GS({ ...t, resolution: e });
        },
        useOptions: IJ.gF,
        useDisabled: () => !(0, IB.E)(),
    }),
    I6 = (0, u.zD)(d.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => L.intl.string(L.t["3zwNf6"]),
        useSubtitle: () => L.intl.string(L.t.m4Cjj9),
        useValue: () => (0, E.bG)([IX.Ay], () => IX.Ay.getSettings().remindersEnabled),
        setValue: (e) => Iz.Mt(e),
        useDisabled: () => !(0, IB.E)(),
    }),
    I5 = (0, u.zZ)(d.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => L.intl.string(IY.default.TGwzMe),
        buildLayout: () => [I0, I1, I$, I3, IQ, I2, I6],
    }),
    I4 = (0, u.zD)(d.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, E.bG)([IX.Ay], () => IX.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => Iz.YP(e),
    }),
    I8 = (0, u.zD)(d.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, E.bG)([IX.Ay], () => IX.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => Iz.Uh(e),
    }),
    I7 = (0, u.zZ)(d.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, E.bG)([sn.default], () => {
                let e = sn.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [I4, I8],
    });
var I9 = n(417270),
    Ne = n(847825);
let Nt = (0, u.E2)(d.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [L.intl.string(L.t.pf54EU), L.intl.string(L.t["QyB/jK"])],
        Component: () => {
            let e = (0, E.bG)([lG.Ay], () => lG.Ay.getKeybindForAction(h.hCu.SAVE_CLIP, !0));
            tr()(null != e, "Save clip keybind unset");
            let t = !(0, IB.E)(),
                n = A.useRef(null),
                i = A.useCallback(
                    (t) => {
                        iz.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = A.useCallback(() => {
                    iz.A.setKeybind({ ...e, shortcut: (0, ll.OH)(IZ.Ot) });
                }, [e]);
            return (0, m.jsx)(tq.D, {
                label: L.intl.string(L.t.pf54EU),
                description: L.intl.string(L.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, m.jsx)("div", {
                    className: Ne.g,
                    children: (0, m.jsx)(li.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, m.jsxs)(m.Fragment, {
                            children: [
                                (0, m.jsx)(le.m, {
                                    text: L.intl.string(IY.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, m.jsx)(i7.K, {
                                        icon: iF.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": L.intl.string(IY.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, m.jsx)(le.m, {
                                    text: L.intl.string(IY.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, m.jsx)(i7.K, {
                                        icon: I9.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": L.intl.string(IY.default.Kyk1Tp),
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
    Nn = (0, u.E2)(d.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [L.intl.string(L.t["0U/hj7"]), L.intl.string(L.t["5zxkdo"])],
        usePredicate: lD.BW,
        Component: () => {
            let e = (0, E.bG)([lG.Ay], () => lG.Ay.getKeybindForAction(h.hCu.SAVE_CLIP, !0)),
                t = (0, E.bG)([lG.Ay], () => lG.Ay.getKeybindForAction(h.hCu.SAVE_SCREENSHOT, !0));
            (tr()(null != e, "Save clip keybind unset"), tr()(null != t, "Save screenshot keybind unset"));
            let n = A.useCallback(
                (e) => {
                    iz.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, m.jsx)(tq.D, {
                label: L.intl.string(L.t["0U/hj7"]),
                description: L.intl.string(L.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, m.jsx)("div", {
                    className: Ne.g,
                    children: (0, m.jsx)(li.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    Ni = (0, u.zD)(d.X.CLIPS_ENABLE, {
        useTitle: () => L.intl.string(L.t.h8rgrK),
        useSubtitle: () => L.intl.string(L.t["4Qw3NO"]),
        useValue: () => (0, IB.E)(),
        setValue: (e) => Iz.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    Nl = (0, u.zY)(d.X.CLIPS_GENERAL_CARD, { buildLayout: () => [Ni, Nt, Nn], headerSettingKey: Ni.key }),
    Ns = (0, u.zZ)(d.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => L.intl.string(L.t["rWKv+e"]),
        useSubtitle: () => L.intl.format(IY.default["dh7g+S"], { learnMoreLink: ep.A.getArticleURL(h.MVz.CLIPS) }),
        buildLayout: () => [Nl],
    }),
    Nr = (0, u.E2)(d.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [L.intl.string(L.t.s4773E), L.intl.string(L.t.svjwGh)],
        Component: () => {
            let e = (0, E.bG)([IX.Ay], () => IX.Ay.getSettings().storageLocation),
                t = !(0, IB.E)(),
                n = A.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nE.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && Iz.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, m.jsx)(tq.D, {
                label: L.intl.string(L.t.s4773E),
                description: L.intl.string(L.t.svjwGh),
                layout: "vertical",
                children: (0, m.jsxs)(z.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, m.jsx)(la.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": L.intl.formatToPlainString(L.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, m.jsx)(I.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: i,
                            text: L.intl.string(IY.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    Na = (0, u.zZ)(d.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => L.intl.string(IY.default["0Q+pdZ"]),
        buildLayout: () => [Nr],
    }),
    No = (0, u.t_)(d.X.CLIPS_PANEL, {
        useTitle: () => L.intl.string(L.t.z2jK6X),
        usePredicate: lD.sw,
        buildLayout: () => [Ns, IW, I5, Na, I7],
    }),
    Nu = (0, u.i4)(d.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.z2jK6X),
        icon: Iw.x,
        buildLayout: () => [No],
    });
var Nd = n(254138),
    Nc = n(290595),
    Ng = n(153488),
    Nm = n(308528),
    NA = n(171316),
    NE = n(558001);
n(866945);
var Nh = n(835002);
function NS() {
    let e = (0, NA.uM)(),
        t = (0, Ix.vx)(),
        n = A.useCallback(() => {
            ((0, tM.default)(),
                Nm.A.openPrivateChannel({ recipientIds: t }),
                (0, NE.N)(Nh.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Nh.YX.LEARN_MORE));
        }, [t]),
        i = A.useCallback(() => {
            (0, NE.N)(Nh.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Nh.YX.VIEWED);
        }, []);
    return A.useMemo(() => {
        if (e)
            return {
                type: g.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: L.intl.format(IC.default.i284fU, {
                    hook: (e, t) => (0, m.jsx)(nt.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let NT = (0, u.zD)(d.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => L.intl.string(L.t.AGDDkH),
    useSubtitle: () => L.intl.string(L.t.kyo3dJ),
    useValue: () => O.Q$.useSetting(),
    setValue: (e) => Iz.eQ({ allowVoiceRecording: e }),
});
var Np = n(157559),
    Nx = n(331887);
function Nf() {
    let e = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()),
        t = (0, E.bG)([Nx.A], () => Nx.A.harvestType),
        [n, i] = A.useState(() => Date.now()),
        l = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        s = A.useRef(null);
    return (A.useEffect(() => {
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
let NI = (0, u.Tf)(d.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => L.intl.string(L.t.qfFFos),
        useSubtitle: function () {
            let e = Nf();
            if (e.allowed) return L.intl.format(L.t.NRI6vt, { article: ep.A.getArticleURL(h.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return L.intl.string(L.t.hIbRso);
                case "not_verified":
                    return L.intl.format(L.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, m.jsx)(
                                n$.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, ni.openUserSettings)(d.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = ia()(e.nextAllowed).format("MMMM Do YYYY");
                    return L.intl.format(L.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            (e6.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                e3.Bo.get({ url: h.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        e6.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        e6.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !Nf().allowed,
        useLoading: () => (0, E.bG)([Nx.A], () => Nx.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => L.intl.string(L.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, lr.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, m.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        ((t = !1),
                            (0, SJ.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            e6.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? Np.A.show({
                                                  title: L.intl.string(L.t.i2iul5),
                                                  body: L.intl.string(L.t["6Nmv4i"]),
                                              })
                                            : Np.A.show({
                                                  title: L.intl.string(L.t.OjbtDm),
                                                  body: L.intl.string(L.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || L.intl.string(L.t["0F5Jyt"]);
                                        Np.A.show({ title: L.intl.string(L.t.OjbtDm), body: t });
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
    NN = (0, u.v_)(d.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => L.intl.string(L.t.D60Gfj),
        useSubtitle: () =>
            L.intl.format(L.t.dszICC, {
                onClickDisable: () => (0, ni.openUserSettings)(d.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, ni.openUserSettings)(d.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var N_ = n(972737);
let NC = (0, u.zD)(d.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => L.intl.string(L.t.MNKzyg),
        useSubtitle: () =>
            L.intl.format(L.t["2SiYln"], { helpdeskArticle: ep.A.getArticleURL(h.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, E.bG)([Ng.A], () => Ng.A.hasConsented(h.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, Nc.U)([h.YAq.PERSONALIZATION], []).catch(N_.i)
                : (0, N_.O)({
                      header: L.intl.string(L.t["9SNpzv"]),
                      confirmText: L.intl.string(L.t["9g5UGw"]),
                      cancelText: L.intl.string(L.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, Nc.U)([], [h.YAq.PERSONALIZATION]).catch(N_.i);
                      },
                      body: L.intl.string(L.t.gJvDDh),
                  });
        },
        useDisabled: NA.uM,
    }),
    Nb = (0, Ee.mj)({
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
function Ny() {
    let { enabled: e } = Nb.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var Nv = n(884705);
function Nj() {
    return (0, E.bG)([Nv.A], () => Nv.A.isTogglesDisabled());
}
function NO() {
    return !O.vf.useSetting();
}
function NL(e) {
    O.vf.updateSetting(!e);
}
function ND() {
    let e = Nj(),
        t = O.H1.useSetting(),
        n = (0, NA.uM)();
    return e || t || n;
}
let NR = (0, u.zD)(d.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => L.intl.string(L.t.CyLYKZ),
        useSubtitle: () =>
            L.intl.format(L.t["md5l4/"], { helpdeskArticle: ep.A.getArticleURL(h.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !Ny(),
        useValue: NO,
        setValue: NL,
        useDisabled: ND,
        useSearchTerms: () => [L.intl.string(L.t.CyLYKZ)],
    }),
    NP = (0, u.zD)(d.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => L.intl.string(L.t.CyLYKZ),
        useSubtitle: () =>
            L.intl.format(L.t["2QFDU/"], { helpdeskArticle: ep.A.getArticleURL(h.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Ny,
        useValue: NO,
        setValue: NL,
        useDisabled: ND,
        useSearchTerms: () => [L.intl.string(L.t.CyLYKZ)],
    });
function NG() {
    return !O.H1.useSetting();
}
function NM(e) {
    O.H1.updateSetting(!e);
}
function NU() {
    let e = Nj(),
        t = (0, NA.uM)();
    return e || t;
}
let NV = (0, u.zD)(d.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => L.intl.string(L.t.sJYh5t),
        useSubtitle: () => L.intl.string(L.t.w4fvxe),
        usePredicate: () => !Ny(),
        useValue: NG,
        setValue: NM,
        useSearchTerms: () => [L.intl.string(L.t.VkS7Yd)],
        useDisabled: NU,
    }),
    Nk = (0, u.zD)(d.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => L.intl.string(L.t.sJYh5t),
        useSubtitle: () =>
            L.intl.format(L.t.cf9mvV, { helpdeskArticle: ep.A.getArticleURL(h.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Ny,
        useValue: NG,
        setValue: NM,
        useSearchTerms: () => [L.intl.string(L.t.VkS7Yd)],
        useDisabled: NU,
    }),
    Nw = (0, u.AK)(d.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: d.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = AJ(2);
            return L.intl.format(L.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = A$();
            return { type: g.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, E.bG)([iq.Ay], () => iq.Ay.getGamesSeen(!1).some((e) => !(0, AH.n1)(e))) && (0, ng.xl)(),
    }),
    NF = (0, u.gN)(d.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Nw] }),
    NB = (0, u.zD)(d.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => L.intl.string(L.t.XuADY2),
        useSubtitle: () =>
            L.intl.format(L.t.FNqmmX, { helpdeskArticle: ep.A.getArticleURL(h.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, E.bG)([Ng.A], () => Ng.A.hasConsented(h.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Nc.U)([h.YAq.USAGE_STATISTICS], []).catch(N_.i)
                : (0, N_.O)({
                      header: L.intl.string(L.t.OdPCbN),
                      body: L.intl.string(L.t.MGWabA),
                      confirmText: L.intl.string(L.t["D3+rU4"]),
                      cancelText: L.intl.string(L.t.kYpG0u),
                      onConfirm: () => (0, Nc.U)([], [h.YAq.USAGE_STATISTICS]).catch(N_.i),
                  });
        },
        useSearchTerms: () => [L.intl.string(L.t.XuADY2)],
        useDisabled: NA.uM,
    }),
    Nz = (0, u.zZ)(d.X.DATA_USAGE_CATEGORY, {
        useTitle: () => L.intl.string(L.t.QDAriI),
        useInlineNotice: NS,
        initialize: () => {
            Ng.A.fetchedConsents || (0, Nc.Q)();
        },
        buildLayout: () => [NN, NB, NC, NV, NR, NT, NI, NF],
    });
var NX = n(15762);
let NY = (0, u.zD)(d.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => L.intl.string(NX.default.F3llsQ),
    useSubtitle: () => L.intl.string(NX.default["6goWcz"]),
    useValue: O.Sy.useSetting,
    setValue: function (e) {
        (O.Sy.updateSetting(e),
            te.default.track(h.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: A6.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function NH() {
    let e = O.JG.useSetting();
    return (0, E.yK)(
        [dh.Ay, lE.A],
        () => {
            let t = new Set(e);
            return dh.Ay.getFlattenedGuildIds().filter((e) => null != lE.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let NK = (0, u.AK)(d.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = NH();
            if (0 === e.length) return L.intl.format(L.t.QJIJ5p, {});
            let t = lE.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? L.intl.format(L.t["T+8J4A"], { guildName: n })
                : L.intl.format(L.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                n =
                    ((e = NH()),
                    0 ===
                    (t = (0, E.yK)(
                        [lE.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => lE.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, m.jsx)(Eo, { guild: t[0], size: AK.CD }),
                                    shape: AK.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, m.jsx)(Eo, { guild: t[1], size: AK.CD }), shape: AK.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, m.jsx)(Eo, { guild: t[0], size: AK.CD }),
                                    shape: AK.e0.SQUIRCLE,
                                },
                            });
            return { type: g.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: d.X.ACTIVITY_PRIVACY_PANEL,
    }),
    NW = (0, u.gN)(d.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, A8.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [NK],
    }),
    NZ = (0, u.Qx)(d.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, A8.lX)("ProfilePrivacySetting"),
        useTitle: () => L.intl.string(L.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: L.intl.string(L.t.Boxc8R),
                    desc: L.intl.string(L.t["nLj+nc"]),
                    value: eF.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: L.intl.string(L.t.YOIKBt),
                    desc: L.intl.string(L.t.y0JZ4s),
                    value: eF.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: L.intl.string(L.t.u0nlJv), desc: L.intl.string(L.t["4jnKHu"]), value: eF.KP.FRIENDS_ONLY },
            ];
        },
        useValue: O.KP.useSetting,
        setValue: function (e) {
            let t = O.KP.getSetting();
            if ((O.KP.updateSetting(e), !(0, A8.W1)("ProfilePrivacySetting"))) return;
            let i = (0, En.gS)(t, e);
            null != i &&
                (0, lr.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("763786")]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, m.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [L.intl.string(L.t.Qnf32C)],
    }),
    Nq = (0, u.zZ)(d.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => L.intl.string(L.t.ul884f),
        useSubtitle: () =>
            L.intl.format(L.t.N4jSgR, {
                learnMoreUrl: ep.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [NZ, NY, NW],
    });
var NQ = n(952270),
    NJ = n(678538);
let N$ = { [eF.tR.REAL_MONEY_GAMING]: NJ.default.pmIitA },
    N0 = Object.keys(N$).map(Number),
    N1 = (0, u.E2)(d.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [L.intl.string(NJ.default.foQaI1)],
        usePredicate: Ny,
        Component: function () {
            let e = A.useMemo(
                    () =>
                        N0.map((e) => ({
                            id: String(e),
                            value: e,
                            label: L.intl.string(N$[e]),
                            leading: NQ.EyeSlashIcon,
                        })),
                    [],
                ),
                t = O.XZ.useSetting();
            return (0, m.jsx)(Sw.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(O.XZ.getSetting());
                    for (let e of N0) t.has(e) ? n.add(e) : n.delete(e);
                    O.XZ.updateSetting([...n]);
                },
                label: L.intl.string(NJ.default.foQaI1),
                description: L.intl.format(NJ.default["z/MfaY"], {
                    helpdeskArticle: ep.A.getArticleURL(h.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: L.intl.string(NJ.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    N2 = (0, u.zZ)(d.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => L.intl.string(NJ.default.XUj46U),
        usePredicate: Ny,
        buildLayout: () => [Nk, NP, N1],
    });
var N3 = n(936388),
    N6 = n(714763),
    N5 = n(814278);
let N4 = (0, u.zD)(d.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => L.intl.string(L.t["opi/XK"]),
    useSubtitle: () => L.intl.format(L.t["/T+ZlP"], { helpArticle: (0, N5.Lu)() }),
    useValue: function () {
        return (0, E.bG)([N6.A], () => N6.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        N3.A.updatePersistentCodesEnabled(e);
    },
});
var N8 = n(787392);
function N7() {
    return (0, E.yK)([N8.A], () => N8.A.getUserIds());
}
var N9 = n(803306),
    _e = n(966327),
    _t = n(774156);
function _n(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eR.Ay)(),
        l = (0, E.bG)([sn.default], () => sn.default.getUser(t)),
        s = T1.Ay.getFormattedName(l),
        r = A.useCallback(() => {
            (0, N5.kj)(t);
        }, [t]),
        a = A.useCallback(() => (0, S3.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        A.useEffect(() => {
            (0, N9.wz)(t);
        }, [t]),
        (0, m.jsxs)("div", {
            className: _t.uW,
            children: [
                null != l && (0, m.jsx)(_e.A, { className: _t.my, user: l, size: f._3.SIZE_40 }),
                (0, m.jsxs)("div", {
                    className: _t.Qq,
                    children: [
                        (0, m.jsx)(n$.D, {
                            className: _t.Xh,
                            onClick: a,
                            children: (0, m.jsx)(Y.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, m.jsx)(Y.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: L.intl.format(L.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, m.jsx)(n$.D, { onClick: r, className: _t.Qz, children: (0, m.jsx)(i9.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function _i(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, N5.tC)(i.timestamp),
        r = A.useCallback(() => {
            (0, N5.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, m.jsxs)("div", {
        className: t,
        children: [
            (0, m.jsxs)("div", {
                className: _t.Qq,
                children: [
                    (0, m.jsx)(Y.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: L.intl.format(L.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, m.jsx)(Y.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, m.jsx)(n$.D, {
                className: _t.Kk,
                onClick: r,
                children: (0, m.jsx)(Ej.P, { size: "md", color: nq.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function _l(e) {
    let { userId: t } = e,
        n = (0, E.yK)([N8.A], () =>
            F()(N8.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, m.jsxs)(m.Fragment, {
        children: [
            (0, m.jsx)(_n, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, m.jsxs)(
                    A.Fragment,
                    {
                        children: [
                            (0, m.jsx)(_i, { className: _t.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, m.jsx)("div", { className: _t.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var _s = n(464946),
    _r = n(492422);
let _a = (0, u.E2)(d.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [L.intl.string(L.t["5b3FNI"])],
        usePredicate: function () {
            let e = N7();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = N7();
            return (0, m.jsxs)(_s.h, {
                children: [
                    (0, m.jsx)(_s._, {
                        header: L.intl.string(L.t["5b3FNI"]),
                        description: L.intl.format(L.t.jrTSWU, { helpArticle: (0, N5.dc)() }),
                    }),
                    e.map((e) => (0, m.jsx)("div", { className: _r.A, children: (0, m.jsx)(_l, { userId: e }) }, e)),
                ],
            });
        },
    }),
    _o = (0, u.zZ)(d.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => L.intl.string(L.t.bTwjaz),
        usePredicate: () => (0, eq.isDesktop)(),
        buildLayout: () => [N4, _a],
    }),
    _u = (0, u.t_)(d.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => L.intl.string(L.t.OAuOHD),
        buildLayout: () => [Nz, N2, Nq, _o],
    }),
    _d = (0, u.i4)(d.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.OAuOHD),
        icon: Nd.m,
        buildLayout: () => [_u],
    });
var _c = n(476713);
let _g = (0, u.AK)(d.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => L.intl.string(L.t.O65dzZ),
        useTitle: () => L.intl.string(L.t["f6kk+r"]),
        destinationKey: d.X.AUTHORIZED_APPS_CATEGORY,
    }),
    _m = (0, u.gN)(d.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [_g] });
var _A = n(875444);
function _E(e, t) {
    let n = (0, E.bG)([Ew.default], () => Ew.default.getFetchState()),
        i = (0, E.bG)([Ew.default], () =>
            e ? Ew.default.getNewestTokensForNonChildrenApplications() : Ew.default.getNewestTokens(),
        ),
        l = A.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, _A.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        A.useEffect(() => {
            t || E_.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== Ew.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var _h = n(514479);
function _S() {
    return (0, m.jsxs)("div", {
        className: _h.d,
        children: [
            (0, m.jsx)(Y.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _h.x,
                children: L.intl.string(L.t["+0U77d"]),
            }),
            (0, m.jsx)(Y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: L.intl.format(L.t.V8wClM, {
                    helpdeskArticle: ep.A.getArticleURL(h.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
let _T = (0, u.E2)(d.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = _E(!0, !0);
        return e ? (0, m.jsx)(a9.y, {}) : (0, m.jsx)(_S, {});
    },
    useSearchTerms: () => [L.intl.string(L.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _E(!0, !0);
        return e || 0 === t.length;
    },
});
function _p() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _E(!0, !0);
    return !e && t.length > 0;
}
let _x = (0, u.zD)(d.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => L.intl.string(L.t.W8JtfT),
        useSubtitle: () => L.intl.string(L.t.a99KKy),
        useSearchTerms: () => [L.intl.string(L.t["Uv/eTx"])],
        useValue: () => O.Zk.useSetting(),
        setValue: (e) => O.Zk.updateSetting(e),
        usePredicate: _p,
    }),
    _f = (0, u.Qx)(d.X.IN_GAME_DMS_SETTING, {
        useTitle: () => L.intl.string(L.t["ms+Tme"]),
        useSubtitle: () => L.intl.string(L.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: L.intl.string(L.t.JIFnN9), value: eF.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: L.intl.string(L.t.rRdsk1), value: eF.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: L.intl.string(L.t.IVRPMX), value: eF.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = O.TA.useSetting();
            return e === eF.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? eF.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => O.TA.updateSetting(e),
        usePredicate: _p,
    });
function _I() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = _E(!0, !0);
    return {
        sortedGames: A.useMemo(() => e.toSorted((e, t) => od.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var _N = n(306537),
    __ = n(40957);
function _C(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: l, iconAlign: s } = e;
    return (
        (0, eh.Ay)(() => {
            (0, NE.N)(l, Nh.YX.VIEWED);
        }),
        (0, m.jsx)(iB.w, {
            type: "info",
            iconAlign: s,
            children: (0, m.jsxs)(z.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: "xs",
                children: [
                    (0, m.jsx)("span", { className: __.r, children: t }),
                    (0, m.jsx)(z.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: "xs",
                        fullWidth: !1,
                        children: (0, m.jsx)(I.$, { variant: "secondary", size: "sm", text: n, onClick: i }),
                    }),
                ],
            }),
        })
    );
}
function _b(e, t) {
    return {
        handleLearnMore: A.useCallback(() => {
            (t(), (0, NE.N)(e, Nh.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: A.useCallback(() => {
            (xy.A.showAgeVerificationGetStartedModal({ entryPoint: _N.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, NE.N)(e, Nh.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function _y() {
    let e,
        t = (0, NA.uM)(),
        n = (0, xY.fk)(),
        i = (0, xX.b8)(),
        l = (0, IN.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : l && (e = "teen"), null != e) && (0, xL.n)(xj.Vc)) return e;
    }
}
var _v = n(687123),
    _j = n(444802);
function _O() {
    let e = (0, _j.WX)();
    A.useEffect(() => {
        (0, NE.N)(Nh.YA.AGE_CONFIRMATION_NOTICE, Nh.YX.VIEWED);
    }, []);
    let t = A.useCallback(() => {
            (window.open(ep.A.getArticleURL(e), "_blank"), (0, NE.N)(Nh.YA.AGE_CONFIRMATION_NOTICE, Nh.YX.LEARN_MORE));
        }, [e]),
        n = A.useCallback(() => {
            (xy.A.showAgeVerificationGetStartedModal({ entryPoint: _N.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, NE.N)(Nh.YA.AGE_CONFIRMATION_NOTICE, Nh.YX.CONFIRM_AGE));
        }, []);
    return (0, m.jsx)(r1.p, {
        messageType: r1.Y.INFO,
        action: (0, m.jsx)(A_.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: L.intl.string(L.t.FDSSia),
            onClick: n,
        }),
        children: L.intl.format(L.t.mFgsfg, { hook: (e, n) => (0, m.jsx)(nt.Anchor, { onClick: t, children: e }, n) }),
    });
}
function _L() {
    let e = (0, xY.aX)(_v.t.REACTIVE_CHECK),
        t = (0, xX.b8)();
    return A.useMemo(() => {
        if (e && !t) return { type: g.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _O };
    }, [e, t]);
}
var _D = n(323073),
    _R = n(386171),
    _P = n(96607);
let _G = (0, u.zD)(d.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => L.intl.string(L.t.gvC6q7),
        useSubtitle: () => L.intl.string(L.t.zirUC1),
        useValue: _R.hT,
        useDisabled: function () {
            let e = (0, _P.A)() ?? !0,
                t = (0, _D.sP)(),
                n = (0, xX.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, _D.p5)() && e
                ? xy.A.showAgeVerificationGetStartedModal({ entryPoint: _N.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : O.Qe.updateSetting(e);
        },
    }),
    _M = (0, u.zD)(d.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => L.intl.string(L.t["L+yTsa"]),
        useSubtitle: () => L.intl.string(L.t["t6i/jW"]),
        useValue: _R.tI,
        useDisabled: function () {
            let e = (0, _P.A)() ?? !0,
                t = (0, _D.sP)(),
                n = (0, xX.yM)();
            return A.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, _D.p5)() && e
                ? xy.A.showAgeVerificationGetStartedModal({ entryPoint: _N.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : O.Kg.updateSetting(e);
        },
    }),
    _U = (0, u.AK)(d.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => L.intl.string(L.t.hOXd45),
        destinationKey: d.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    _V = (0, u.gN)(d.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_U] });
n(667532);
var _k = n(390248),
    _w = n(632119),
    _F = n(945276),
    _B = n(389737),
    _z = n(566769);
function _X() {
    let e,
        t = (0, _F.A)() ?? !0,
        n = (0, NA.uM)(),
        i = (0, NA.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, aZ.cf)([ac.A], () => ac.A.settings.textAndImages?.explicitContentSettings ?? (0, _w.C$)())),
        {
            explicitContentGuilds: (0, _w.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _w.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _w.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _k.hK)() && t.includes(eF.TO.SHOW)
            ? xy.A.showAgeVerificationGetStartedModal({ entryPoint: _N.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _w.Jz)(e);
    }
    let o = [
            { value: eF.TO.BLUR, label: L.intl.string(L.t.S49Uad) },
            { value: eF.TO.BLOCK, label: L.intl.string(L.t["D/157Y"]) },
        ],
        u = [{ value: eF.TO.BLUR, label: L.intl.string(L.t.S49Uad) }],
        d = { value: eF.TO.SHOW, label: L.intl.string(L.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? L.intl.string(IC.default["6Af/cw"]) : void 0 };
    return (0, m.jsxs)(_B.E, {
        description: L.intl.string(L.t.Wnojv1),
        children: [
            (0, m.jsx)(_z.A, {
                title: L.intl.string(L.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, m.jsx)(_z.A, {
                title: L.intl.string(L.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, m.jsx)(_z.A, {
                title: L.intl.string(L.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? L.intl.string(IC.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _Y() {
    let e,
        t = (0, _F.A)() ?? !0,
        n = (0, NA.uM)(),
        i = (0, NA.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, aZ.cf)([ac.A], () => ac.A.settings.textAndImages?.goreContentSettings ?? (0, _j.T4)())),
        {
            goreContentGuilds: (0, _j.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _j.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _j.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _k.hK)() && t.includes(eF.TO.SHOW)
            ? xy.A.showAgeVerificationGetStartedModal({ entryPoint: _N.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _j.qY)(e);
    }
    let o = [
            { value: eF.TO.BLUR, label: L.intl.string(L.t.S49Uad) },
            { value: eF.TO.BLOCK, label: L.intl.string(L.t["D/157Y"]) },
        ],
        u = [{ value: eF.TO.BLUR, label: L.intl.string(L.t.S49Uad) }],
        d = { value: eF.TO.SHOW, label: L.intl.string(L.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? L.intl.string(IC.default["6Af/cw"]) : void 0 };
    return (0, m.jsxs)(_B.E, {
        description: L.intl.string(L.t.XgH9eh),
        children: [
            (0, m.jsx)(_z.A, {
                title: L.intl.string(L.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, m.jsx)(_z.A, {
                title: L.intl.string(L.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, m.jsx)(_z.A, {
                title: L.intl.string(L.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? L.intl.string(IC.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _H = n(875162),
    _K = n(636745);
let _W = (0, u.E2)(d.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _j.WX)(),
            t = A.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: L.intl.string(L.t.GYpoAq),
                        component: _X,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: L.intl.string(L.t["16/3Bi"]),
                        component: _Y,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, m.jsxs)(_s.h, {
            children: [
                (0, m.jsx)(_s._, {
                    header: L.intl.string(L.t["Hj/But"]),
                    description: L.intl.format(L.t.dliU4j, { learnMoreLink: ep.A.getArticleURL(e) }),
                }),
                (0, m.jsx)(_H.A, { tabs: t, orientation: "vertical", tabsClassName: _K.v }),
            ],
        });
    },
    useSearchTerms: () => [
        L.intl.string(L.t["Hj/But"]),
        L.intl.string(L.t["N/oRI+"]),
        L.intl.string(L.t.QVdYsK),
        L.intl.string(L.t["aWD+tu"]),
        L.intl.string(L.t["5mnTa7"]),
        L.intl.string(L.t["K0OWP+"]),
    ],
});
var _Z = n(639555),
    _q = n(617641),
    _Q = n(546140),
    _J = n(406935),
    _$ = n(594061);
let _0 = (0, u.zD)(d.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => L.intl.string(L.t.qFsx5q),
        useSubtitle: () => L.intl.format(L.t.lunaRv, { learnMoreLink: ep.A.getArticleURL(h.MVz.SAFETY_ALERTS) }),
        useValue: _Q.L,
        setValue: function (e) {
            return _$.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = _J._t.create({ value: e });
                },
                _$.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, _q.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, _Z.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, _F.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    _1 = (0, u.zZ)(d.X.CONTENT_CATEGORY, {
        useTitle: () => L.intl.string(L.t["3upKU8"]),
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
                E,
                h,
                S,
                T,
                p,
                x = NS(),
                f =
                    ((l = (0, NA.uM)()),
                    (s = (0, xY.fk)()),
                    (r = (0, xX.b8)()),
                    (a = (0, IN.Z)()),
                    (o = _b(Nh.YA.AGE_CONFIRMATION_NOTICE, xO)),
                    (u = _b(Nh.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, xb.M0)),
                    (d = A.useCallback(() => {
                        (0, NE.N)(Nh.YA.AGE_CONFIRMATION_NOTICE, Nh.YX.VIEWED);
                    }, [])),
                    (c = A.useCallback(() => {
                        (0, NE.N)(Nh.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Nh.YX.VIEWED);
                    }, [])),
                    A.useMemo(() => {
                        if (!l && (0, xL.n)(xj.Vc)) {
                            if (s && !r)
                                return {
                                    type: g.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "center",
                                    trackView: d,
                                    text: L.intl.format(xR.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: {
                                        size: "sm",
                                        text: L.intl.string(xR.default["cI+bc/"]),
                                        onClick: o.handleConfirmAge,
                                    },
                                };
                            if (a)
                                return {
                                    type: g.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "start",
                                    trackView: c,
                                    text: L.intl.format(xR.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { size: "sm", text: L.intl.string(L.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [s, l, a, r, u, c, d, o])),
                I =
                    ((e = (0, IN.Z)()),
                    (t = (0, _j.WX)()),
                    (n = A.useCallback(() => {
                        (window.open(ep.A.getArticleURL(t), "_blank"),
                            (0, NE.N)(Nh.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Nh.YX.LEARN_MORE));
                    }, [t])),
                    (i = A.useCallback(() => {
                        (0, NE.N)(Nh.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Nh.YX.VIEWED);
                    }, [])),
                    A.useMemo(() => {
                        if (e)
                            return {
                                type: g.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                text: L.intl.format(L.t.EUo0yj, {
                                    hook: (e, t) => (0, m.jsx)(nt.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                N =
                    ((E = (0, xY.SJ)()),
                    (h = (0, xX.b8)()),
                    (S = E && !h),
                    (T = A.useCallback(() => {
                        (xy.A.showAgeVerificationGetStartedModal({ entryPoint: _N.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, NE.N)(Nh.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Nh.YX.LEARN_MORE));
                    }, [])),
                    (p = A.useCallback(() => {
                        (0, NE.N)(Nh.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Nh.YX.VIEWED);
                    }, [])),
                    A.useMemo(() => {
                        if (S)
                            return {
                                type: g.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: p,
                                text: L.intl.format(L.t.OX4ybh, {
                                    hook: (e, t) => (0, m.jsx)(nt.Anchor, { onClick: T, children: e }, t),
                                }),
                            };
                    }, [T, S, p])),
                _ = _L();
            return x ?? f ?? _ ?? N ?? I;
        },
        buildLayout: () => [_W, _0, _G, _M, _V],
    });
var _2 = n(923457),
    _3 = n(750714);
let _6 = (0, u.Qx)(d.X.DM_SPAM_SETTING, {
    useTitle: () => L.intl.string(L.t.puwSkY),
    useSubtitle: () => L.intl.string(L.t["+sXN3T"]),
    useValue: function () {
        let e = O.he.useSetting(),
            t = O.cj.useSetting(),
            n = (0, E.bG)([sn.default], () => sn.default.getCurrentUser()),
            i = (0, xY.yv)(_2.p.SPAM_FILTERS);
        return e !== eF.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eF.he.FRIENDS_AND_NON_FRIENDS
              : (_3.xY.get(t) ?? eF.he.NON_FRIENDS);
    },
    setValue: (e) => O.he.updateSetting(e),
    useOptions: function () {
        return [
            { name: L.intl.string(L.t["+w5yKk"]), value: eF.he.FRIENDS_AND_NON_FRIENDS },
            { name: L.intl.string(L.t.yAPg6r), value: eF.he.NON_FRIENDS },
            { name: L.intl.string(L.t.FEXKsv), value: eF.he.DISABLED },
        ];
    },
    useSearchTerms: () => [L.intl.string(L.t.JzaP4h), L.intl.string(L.t.H9XOl3), L.intl.string(L.t.k4W40P)],
});
var _5 = n(189883);
let _4 = (0, u.zD)(d.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => L.intl.string(L.t["7x9dyE"]),
    useValue: function () {
        let e = O.FA.useSetting();
        return A.useMemo(() => (0, n4.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        O.FA.updateSetting(e ? h.yKI : h.yKI & ~h.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, NA.uM)();
    },
});
var _8 = n(665260);
let _7 = (0, u.zD)(d.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => L.intl.string(L.t.NfeuZ3),
        useValue: function () {
            let e = O.FA.useSetting(),
                t = A.useMemo(() => (0, n4.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = O.FA.getSetting();
            O.FA.updateSetting(e ? _8.UI(t, h.dzt.MUTUAL_FRIENDS) : _8.iE(t, h.dzt.MUTUAL_FRIENDS, h.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, NA.uM)();
        },
    }),
    _9 = (0, u.zD)(d.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => L.intl.string(L.t.qsMfsH),
        useSubtitle: () => L.intl.string(L.t["6DqAp0"]),
        useValue: function () {
            let e = O.FA.useSetting(),
                t = A.useMemo(() => (0, n4.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = O.FA.getSetting();
            O.FA.updateSetting(e ? _8.UI(t, h.dzt.MUTUAL_GUILDS) : _8.iE(t, h.dzt.MUTUAL_GUILDS, h.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, NA.uM)();
        },
    }),
    Ce = (0, u.FW)(d.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => L.intl.string(L.t.wTdS6S),
        buildLayout: () => [_4, _7, _9],
    });
var Ct = n(420825);
let Cn = (0, u.zD)(d.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => L.intl.string(L.t["jK+wdr"]),
        useSubtitle: () => L.intl.string(L.t["RYh/pW"]),
        useValue: () => !(0, Ct.q)(),
        setValue: function (e) {
            O.Zd.updateSetting(!e);
        },
    }),
    Ci = (0, u.zZ)(d.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => L.intl.string(L.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = _5.A.useConfig({ location: "Friend Request Setting" });
            return e ? L.intl.string(L.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => L.intl.string(L.t.fyA115),
        useInlineNotice: NS,
        buildLayout: () => [Ce, Cn],
    });
var Cl = n(994500),
    Cs = n(428678),
    Cr = n(717398),
    Ca = n(730134),
    Co = n(276573);
function Cu(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, m.jsxs)("div", {
        className: Co.wx,
        children: [
            (0, m.jsx)("div", {
                className: Co.zc,
                children: i ? (0, m.jsx)(Cs.K, {}) : (0, m.jsx)(NQ.EyeSlashIcon, {}),
            }),
            (0, m.jsxs)("div", {
                className: Co.Qq,
                children: [
                    (0, m.jsx)(Y.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: L.intl.string(i ? L.t.PFOUKW : L.t["93ZDWE"]),
                    }),
                    (0, m.jsx)(Y.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: i
                            ? L.intl.format(L.t["r91W/h"], { numberOfBlockedUsers: n })
                            : L.intl.format(L.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function Cd(e) {
    let { userId: t, last: n } = e,
        i = (0, E.bG)([Cl.A], () => Cl.A.isBlocked(t)),
        l = (0, E.bG)([sn.default], () => sn.default.getUser(t)),
        [s, r] = A.useState(!1),
        a = A.useCallback(() => {
            (r(!0),
                i
                    ? Cr.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : Cr.A.unignoreUser(t, tO.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == l
        ? null
        : (0, m.jsxs)("div", {
              className: is()(Co.nM, { [Co.fW]: n }),
              children: [
                  (0, m.jsxs)("div", {
                      className: Co.eF,
                      children: [
                          (0, m.jsx)(Ca.A, { user: l, size: f._3.SIZE_40 }),
                          (0, m.jsxs)("div", {
                              className: Co.Qq,
                              children: [
                                  (0, m.jsx)(Y.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, m.jsx)(Y.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, m.jsx)(I.$, {
                      variant: "secondary",
                      text: L.intl.string(i ? L.t.XyHpKH : L.t["8wXU9B"]),
                      onClick: a,
                      loading: s,
                  }),
              ],
          });
}
function Cc(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = A.useState(5);
    return (0, m.jsx)(_s.h, {
        children: (0, m.jsxs)("div", {
            className: Co.Nr,
            children: [
                (0, m.jsx)(Cu, { listType: n, numberOfUsers: t.length }),
                (0, m.jsx)("div", {
                    className: Co.jS,
                    children: t.slice(0, i).map((e, n) => (0, m.jsx)(Cd, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, m.jsx)("div", {
                          className: Co.vM,
                          children: (0, m.jsx)(n$.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: Co.Qf,
                              children: (0, m.jsx)(Y.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: L.intl.format(L.t.jULEDr, {
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
let Cg = (0, u.E2)(d.X.BLOCKED_USERS, {
        useSearchTerms: () => [L.intl.string(L.t.PFOUKW)],
        usePredicate: () => (0, E.bG)([Cl.A], () => Cl.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, E.yK)([Cl.A], () => Cl.A.getBlockedIDs());
            return (0, m.jsx)(Cc, { userIds: e, listType: "blocked" });
        },
    }),
    Cm = (0, u.E2)(d.X.IGNORED_USERS, {
        useSearchTerms: () => [L.intl.string(L.t["93ZDWE"])],
        usePredicate: () => (0, E.bG)([Cl.A], () => Cl.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, E.yK)([Cl.A], () => Cl.A.getIgnoredIDs());
            return (0, m.jsx)(Cc, { userIds: e, listType: "ignored" });
        },
    }),
    CA = (0, u.zZ)(d.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => L.intl.string(L.t["+Iryf3"]),
        useSubtitle: () =>
            L.intl.format(L.t["0aNQo9"], { helpArticle: ep.A.getArticleURL(h.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Cg, Cm],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, E.cf)([Cl.A], () => ({
                hasBlockedUsers: Cl.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: Cl.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var CE = n(22385),
    Ch = n(556534),
    CS = n(111159),
    CT = n(152056),
    Cp = n(428031),
    Cx = n(978433);
let Cf = { label: () => L.intl.string(L.t["32u1Dx"]), value: CE.YG };
var CI = n(307863),
    CN = n(954225);
function C_() {
    return (0, CI.e)() ? L.intl.string(L.t.PMsfcH) : L.intl.string(L.t.RAQUSN);
}
function CC(e, t) {
    te.default.track(h.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let Cb = (0, u.zD)(d.X.PERMISSIONS_DMS_SETTING, {
    useTitle: C_,
    useSubtitle: function () {
        let e = (0, Ch.Tx)(),
            t = (0, Ch.q9)(),
            n = (0, CI.e)();
        return e === CE.YG
            ? n
                ? L.intl.string(L.t.XXGmuB)
                : L.intl.string(L.t.wbYDfT)
            : t
              ? L.intl.string(L.t.V0ka0Q)
              : n
                ? L.intl.string(L.t.F9WY3f)
                : L.intl.string(L.t.G7c3Xo);
    },
    useValue: function () {
        let e = (0, Ch.Tx)(),
            t = O.$s.useSetting().includes(e),
            n = (0, Cp.K)();
        return e === CE.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, NA.uM)();
        return (0, Ch.Tx)() === CE.YG && e;
    },
    setValue: function (e) {
        let t = CE.xk.getState().selectedGuildId;
        if (t === CE.YG) {
            var n;
            ((n = !e),
                (0, N_.O)({
                    header: L.intl.string(L.t["uUr+GR"]),
                    body: L.intl.string(L.t.hjGJBp),
                    confirmText: L.intl.string(L.t.gm1Vej),
                    cancelText: L.intl.string(L.t.p89ACt),
                    confirmButtonColor: sV.$n.Colors.BRAND,
                    onConfirm: function () {
                        (O.n6.updateSetting(n), CC(n, !1));
                    },
                    onCancel: function () {
                        (O.n6.updateSetting(n), O.$s.updateSetting(n ? lE.A.getGuildIds() : []), CC(n, !0));
                    },
                }));
        } else {
            let n = (0, n4.Tb)();
            (e ? n.delete(t) : n.add(t),
                O.$s.updateSetting(Array.from(n)),
                te.default.track(h.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: CN.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: e_.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var Cy = n(116774),
    Cv = n(953298);
function Cj(e, t) {
    te.default.track(h.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function CO() {
    return L.intl.string(L.t["3o2ojh"]);
}
let CL = (0, u.zD)(d.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: CO,
        useSubtitle: function () {
            let e = (0, Ch.q9)(),
                t = ep.A.getArticleURL(h.MVz.MESSAGE_REQUESTS);
            return e
                ? L.intl.format(L.t.WpnWLc, { helpdeskArticle: t })
                : L.intl.format(L.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, Ch.Tx)(),
                t = (0, Cp.K)(),
                n = O.$s.useSetting().includes(e),
                i = (0, Cy.s)(),
                l = (0, NA.uM)(),
                s = O.YX.useSetting(),
                r = O.Zr.useSetting().includes(e);
            return !!i || (e === CE.YG && l ? !s : e === CE.YG ? !t && !s : !n && !r);
        },
        useDisabled: function () {
            let e = (0, Ch.Tx)(),
                t = (0, NA.uM)(),
                n = (0, Cp.K)(),
                i = O.$s.useSetting().includes(e),
                l = (0, Cy.s)();
            return e === CE.YG ? n || t || l : i || l;
        },
        setValue: function (e) {
            let t = CE.xk.getState().selectedGuildId;
            if (!e && (0, Cv.w)())
                return void xy.A.showAgeVerificationGetStartedModal({ entryPoint: _N.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === CE.YG) {
                var n;
                ((n = !e),
                    (0, N_.O)({
                        header: L.intl.string(L.t.yAfu1p),
                        body: L.intl.string(L.t.Ry2z74),
                        confirmText: L.intl.string(L.t.gm1Vej),
                        cancelText: L.intl.string(L.t.p89ACt),
                        confirmButtonColor: sV.$n.Colors.BRAND,
                        onConfirm: function () {
                            (O.YX.updateSetting(n), Cj(n, !1));
                        },
                        onCancel: function () {
                            (O.YX.updateSetting(n), O.Zr.updateSetting(n ? lE.A.getGuildIds() : []), Cj(n, !0));
                        },
                    }));
            } else {
                let n = (0, n4.xo)();
                (e ? n.delete(t) : n.add(t),
                    O.Zr.updateSetting(Array.from(n)),
                    te.default.track(h.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: CN.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: e_.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    CD = (0, u.E2)(d.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [C_(), CO()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, CE.xk)(),
                l = (0, E.bG)([dh.Ay], () => dh.Ay.getFlattenedGuildIds()),
                s = (0, E.bG)([lE.A], () => lE.A.getGuilds()),
                r =
                    ((e = O.$s.useSetting()),
                    (t = (0, Cp.K)()),
                    (0, E.bG)(
                        [lE.A],
                        () => {
                            let n = new Set(e);
                            return lE.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = l[0];
            A.useEffect(
                () =>
                    CT.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = CE.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === CE.YG && null != a
                                ? i(a)
                                : "" === e && n !== CE.YG && i(CE.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = A.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...Cf,
                            id: Cf.value,
                            label: Cf.label(),
                            leading: (0, m.jsx)("div", {
                                className: Cx.KP,
                                children: (0, m.jsx)(CS.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: Cx.cl,
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
                                    leading: (0, m.jsx)(dv.Ay, {
                                        className: Cx.cl,
                                        guild: n,
                                        size: dv.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [l, s]),
                u = n === CE.YG && r > 0;
            return (0, m.jsxs)(m.Fragment, {
                children: [
                    (0, m.jsx)(Sw.Z, {
                        selectionMode: "single",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        value: n,
                        options: o,
                    }),
                    u &&
                        (0, m.jsx)(Y.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: Cx.h_,
                            children: L.intl.format(L.t.uyBKps, {
                                count: r,
                                countHook: (e, t) =>
                                    (0, m.jsx)(
                                        Y.E,
                                        { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                                        t,
                                    ),
                            }),
                        }),
                ],
            });
        },
    }),
    CR = (0, u.E2)(d.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, Ch.Tx)(),
                t = _y();
            return e === CE.YG && null != t;
        },
        Component: function () {
            let e = _y(),
                t = _b(Nh.YA.AGE_CONFIRMATION_NOTICE, xO),
                n = _b(Nh.YA.CONTENT_AND_SOCIAL_NOTICE, xb.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, m.jsx)(_C, {
                        noticeType: Nh.YA.AGE_CONFIRMATION_NOTICE,
                        iconAlign: "center",
                        body: L.intl.format(xR.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: L.intl.string(xR.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, m.jsx)(_C, {
                        noticeType: Nh.YA.CONTENT_AND_SOCIAL_NOTICE,
                        iconAlign: "start",
                        body: L.intl.format(xR.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: L.intl.string(L.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    CP = (0, u.zZ)(d.X.PERMISSIONS_CATEGORY, {
        useTitle: () => L.intl.string(L.t.Y5GYcX),
        useSubnavLabel: () => L.intl.string(L.t.YUU0RF),
        useInlineNotice: function () {
            let e = NS(),
                t = _L();
            if ((0, Ch.Tx)() === CE.YG) return e ?? t;
        },
        buildLayout: () => [CD, Cb, CL, CR],
    }),
    CG = (0, u.zZ)(d.X.SPAM_FILTERS_CATEGORY, { useTitle: () => L.intl.string(L.t.Qwuoic), buildLayout: () => [_6] }),
    CM = (0, u.zZ)(d.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => L.intl.string(L.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = _I();
            function t(e, t) {
                return (0, m.jsx)(
                    Y.E,
                    { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? L.intl.string(L.t.Amr1IZ)
                : 1 === e.length
                  ? L.intl.format(L.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? L.intl.format(L.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : L.intl.format(L.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => L.intl.string(L.t.YpCiMt),
        useHeaderDecoration: () => {
            let e = (function () {
                let { sortedGames: e } = _I();
                return A.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, m.jsx)("img", {
                                src: j.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: AK.CD,
                                height: AK.CD,
                            }),
                            shape: AK.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, m.jsx)("img", {
                                    src: j.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: AK.YP,
                                    height: AK.YP,
                                }),
                                shape: AK.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: g.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [L.intl.string(L.t.YpCiMt)],
        initialize: () => {
            E_.A.fetch();
        },
        buildLayout: () => [_x, _f, _T, _m],
    }),
    CU = (0, u.t_)(d.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => L.intl.string(L.t.Cz07t8),
        buildLayout: () => [_1, CG, CP, Ci, CM, CA],
    }),
    CV = (0, u.i4)(d.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.Cz07t8),
        icon: _c.l,
        buildLayout: () => [CU],
    });
var Ck = n(782603),
    Cw = n(899847),
    CF = n(695515);
let CB = (0, u.Hn)(d.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => L.intl.string(L.t["8rHeOr"]),
        useSubtitle: () => L.intl.string(L.t["eJE6+J"]),
        useValue: O.cU.useSetting,
        setValue: O.cU.updateSetting,
        useOptions: () =>
            w
                .range(1, 11)
                .map((e) => ({
                    id: e.toString(),
                    value: 60 * e,
                    label: L.intl.formatToPlainString(L.t.iXLF9W, { minutes: e }),
                })),
    }),
    Cz = (0, u.zD)(d.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => L.intl.string(L.t["btbS+Z"]),
        useSubtitle: () =>
            L.intl.format(L.t.Q5crhR, { onClick: () => (0, ni.openUserSettings)(d.X.TTS_PLAYBACK_RATE) }),
        useValue: O.on.useSetting,
        setValue: O.on.updateSetting,
    }),
    CX = (0, u.Qx)(d.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => L.intl.string(L.t.JZxxGx),
        useSubtitle: () => L.intl.string(L.t.HDLtJl),
        useValue: () => (0, E.bG)([af.A], () => af.A.getTTSType()),
        setValue: (e) => ab.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: L.intl.string(L.t.B1AGeJ), value: h.aVn.ALL_CHANNELS },
                { name: L.intl.string(L.t.uzZg9e), value: h.aVn.SELECTED_CHANNEL },
                { name: L.intl.string(L.t.DYO5Oi), value: h.aVn.NEVER },
            ];
        },
        usePredicate: () => k.$j,
    }),
    CY = d.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    CH = (0, u.bd)(CY, {
        useTitle: (e) => (e ? L.intl.string(L.t.RyimDk) : L.intl.string(L.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tm(CY, {
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
        buildLayout: () => [CB, Cz, CX],
    }),
    CK = (0, u.zZ)(d.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => L.intl.string(L.t["31DySj"]),
        buildLayout: () => [CH],
    }),
    CW = (0, u.zD)(d.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => L.intl.string(L.t.VH8AIJ),
        useSubtitle: () => L.intl.string(L.t["9K4qwX"]),
        useValue: function () {
            return (0, E.bG)([af.A], () => !af.A.getDisableUnreadBadge());
        },
        setValue: (e) => ab.default.setDisableUnreadBadge(!e),
    }),
    CZ = (0, u.zZ)(d.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => L.intl.string(L.t.l6w3Vj),
        buildLayout: () => [CW],
    });
var Cq = n(840559),
    CQ = n(997187);
let CJ = (0, Ee.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var C$ = n(723923);
let C0 = C$.px.map((e) =>
        (0, u.zD)(`${d.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, E.cf)([CQ.A], () => CQ.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, Cq.CA)(e.category, t),
        }),
    ),
    C1 = (0, u.Tf)(d.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => L.intl.string(L.t.Ra9Pwk),
        useSubtitle: () => L.intl.string(L.t.iYjQ8X),
        useLabel: () => L.intl.string(L.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, E.cf)([CQ.A], () => CQ.A.getEmailSettings());
            return C$.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, Cq.NI)(),
        useVariant: () => "critical-secondary",
    }),
    C2 = (0, u.zZ)(d.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => L.intl.string(L.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = CJ.useConfig({ location: "Email Settings Category" });
            return e ? L.intl.string(L.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = CQ.A.getEmailSettings();
            e || (0, Cq.cR)();
        },
        buildLayout: () => [...C0, C1],
    }),
    C3 = (0, u.zD)(d.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => L.intl.string(L.t["/0WCll"]),
        useSubtitle: () => L.intl.string(L.t.wF9ih3),
        useValue: function () {
            return (0, E.bG)([af.A], () => af.A.getDesktopType()) !== h.nRU.NEVER;
        },
        setValue: (e) => ab.default.setDesktopType(e ? h.nRU.ALL : h.nRU.NEVER),
    });
var C6 = n(832712),
    C5 = n(543465),
    C4 = n(790782);
let C8 = (0, u.zD)(d.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => L.intl.string(L.t["k6m/si"]),
    useSubtitle: () => L.intl.string(L.t.LGynPs),
    useValue: () => (0, E.bG)([C5.Ay], () => C5.Ay.useNewNotifications),
    setValue: function (e) {
        (C6.A.setAccountFlag(A6.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (m8.w.set("turnedOffNewNotifications", !0),
                te.default.track(h.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lE.A.getGuildsArray().filter(
                        (e) => C5.Ay.resolveGuildUnreadSetting(e) === C4.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, E.bG)(
            [sn.default, C5.Ay],
            () =>
                sn.default.getCurrentUser()?.isStaff() ||
                sn.default.getCurrentUser()?.isStaffPersonal() ||
                C5.Ay.useNewNotifications,
        ),
});
var C7 = n(534654);
let C9 = (0, u.zD)(d.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => L.intl.string(L.t.z9h8Ym),
        useSubtitle: () => L.intl.string(L.t.TummoQ),
        useValue: () => (0, E.bG)([af.A], () => af.A.screenDowntimeReminder),
        setValue: (e) => ab.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, C7.A)(),
                t = (0, Ix.Du)();
            return e && t;
        },
    }),
    be = (0, u.zD)(d.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => L.intl.string(L.t.onrAy7),
        useSubtitle: () => L.intl.string(L.t["/071J7"]),
        useValue: O.gY.useSetting,
        setValue: (e) => O.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, C7.A)(),
                t = (0, Ix.Du)();
            return e && t;
        },
    }),
    bt = (0, u.zD)(d.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => L.intl.string(L.t.NjOMvh),
        useValue: O.oz.useSetting,
        setValue: function (e) {
            (O.oz.updateSetting(e),
                te.default.track(h.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A6.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [L.intl.string(L.t.hi4dSk)],
    }),
    bn = (0, u.zD)(d.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => L.intl.string(L.t.sQQgFj),
        useValue: O.NR.useSetting,
        setValue: function (e) {
            (O.NR.updateSetting(e),
                te.default.track(h.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A6.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    bi = (0, u.zD)(d.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => L.intl.string(L.t.FSNIvs),
        useValue: O.Yh.useSetting,
        setValue: function (e) {
            (O.Yh.updateSetting(e),
                te.default.track(h.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A6.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    bl = (0, u.zD)(d.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => L.intl.string(L.t.xBLMhQ),
        useValue: O.T3.useSetting,
        setValue: function (e) {
            (O.T3.updateSetting(e),
                te.default.track(h.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A6.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var bs = n(815807);
let br = (0, u.Hn)(d.X.REACTION_NOTIFICATIONS, {
        useTitle: () => L.intl.string(L.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: L.intl.string(L.t["9x/RtT"]), value: eF.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: L.intl.string(L.t.fJAbQd), value: eF.Tz.ONLY_DMS },
            { id: "disabled", label: L.intl.string(L.t["xu+UDU"]), value: eF.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: O.Zp.useSetting,
        setValue: (e) => (0, bs.n4)(e, O.Zp.getSetting()),
    }),
    ba = (0, u.zD)(d.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => L.intl.string(L.t["k51K1+"]),
        useValue: O.Qr.useSetting,
        setValue: function (e) {
            (O.Qr.updateSetting(e),
                te.default.track(h.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A6.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    bo = (0, Ee.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bu = (0, u.zD)(d.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => L.intl.string(L.t.G8NPz6),
        useValue: O.zS.useSetting,
        setValue: function (e) {
            (O.zS.updateSetting(e),
                te.default.track(h.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: A6.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => bo.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bd = (0, u.FW)(d.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => L.intl.string(L.t.FEVRDV),
        buildLayout: () => [bi, bt, bn, ba, bu, bl, br],
    }),
    bc = (0, u.zD)(d.X.TASK_BAR_FLASHING, {
        useTitle: () => L.intl.string(L.t.xSmFQG),
        useSubtitle: () => L.intl.string(L.t.bd4j4x),
        useValue: () => (0, E.bG)([af.A], () => af.A.taskbarFlash),
        setValue: (e) => ab.default.setTaskbarFlash(e),
        usePredicate: () => (0, ng.uF)(),
    }),
    bg = (0, u.zZ)(d.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => L.intl.string(L.t["/dp6yY"]),
        buildLayout: () => [C3, bc, bd, C8, be, C9],
    });
var bm = n(965957),
    bA = n(312671),
    bE = n(235079);
let bh = (0, u.zD)(d.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aI.A.useHolidaySoundpack();
        return null == e ? "" : L.intl.format(L.t["E/OyBr"], { soundpack: L.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, E.bG)([bA.A], () => bA.A.getSoundpack()),
            t = aI.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aI.A.getHolidaySoundpack();
        (tr()(null != t, "predicate should fail if no soundpack is available"), (0, bm.p)(e ? t : bE.i.CLASSIC));
    },
    usePredicate: aI.A.useIsEligible,
});
var bS = n(970931);
let bT = {
        useTitle: () => L.intl.string(L.t.jD1qzM),
        sound: "message1",
        useDisabled: bS.kB,
        useDisabledMessage: () => ((0, bS.kB)() ? L.intl.string(L.t.cIRG0s) : void 0),
    },
    bp = { useTitle: () => L.intl.string(L.t.XBrJT6), sound: "call_ringing" },
    bx = (0, u.zD)(d.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => L.intl.string(L.t.TzjwV9),
        useSubtitle: () => L.intl.format(L.t.OOiGCM, { onClick: () => aj("message3") }),
        useValue: () =>
            (0, E.bG)([af.A], () => af.A.getNotifyMessagesInSelectedChannel() && !af.A.getDisableAllSounds()),
        setValue: (e) => ab.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, E.bG)([af.A], () => af.A.getDisableAllSounds()),
    }),
    bf = (0, u.zD)(d.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => L.intl.string(L.t["2ZhCOd"]),
        useSubtitle: () => L.intl.string(L.t.EAKdPr),
        useValue: () => (0, E.bG)([af.A], () => af.A.getDisableAllSounds()),
        setValue: (e) => ab.default.toggleDisableAllSounds(e),
    }),
    bI = (0, u.D1)(d.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                av();
            };
        },
        buildLayout: () => [aO(bT), bx, aO(bp), bf],
    }),
    bN = (0, u.AK)(d.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => L.intl.string(L.t["MMy+lm"]),
        useSearchTerms: () => [L.intl.string(L.t["MMy+lm"])],
        destinationKey: d.X.SOUNDS_CATEGORY,
    }),
    b_ = (0, u.gN)(d.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bN] }),
    bC = (0, u.zZ)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => L.intl.string(L.t.LweOYy),
        buildLayout: () => [bh, bI, b_],
    }),
    bb = (0, u.t_)(d.X.NOTIFICATIONS_PANEL, {
        useTitle: () => L.intl.string(L.t.HcoRu0),
        initialize: () => {
            null != CF.A.getAgeGroup() || CF.A.isLoading() || (CF.A.canRefetch() && Cw.Ay.initialPageLoad());
        },
        buildLayout: () => [bg, bC, CZ, C2, CK],
    }),
    by = (0, u.i4)(d.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t.HcoRu0),
        icon: Ck.BellIcon,
        buildLayout: () => [bb],
    }),
    bv = (0, u.WI)(d.X.USER_SECTION, {
        useTitle: () => L.intl.string(L.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Ik, _d, CV, by, Nu],
    });
var bj = n(387758),
    bO = n(271866),
    bL = n(147964),
    bD = n(868511);
let bR = (0, u.zD)(d.X.APPLICATION_TEST_MODE, {
        useTitle: () => L.intl.string(L.t.erOqlh),
        useSubtitle: () => L.intl.string(L.t["52hMnD"]),
        usePredicate: O.Q_.useSetting,
        useValue: () => (0, E.bG)([bL.A], () => null != bL.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, lr.openModal)((e) => (0, m.jsx)(bD.A, { ...e })) : bO.cL();
        },
    }),
    bP = (0, u.zD)(d.X.DEVELOPER_MODE, {
        useTitle: () => L.intl.string(L.t.ObIb1Q),
        useSubtitle: () => L.intl.format(L.t["CY6q/Q"], { apiDocsUrl: h.X7G.API_DOCS }),
        useValue: O.Q_.useSetting,
        setValue: O.Q_.updateSetting,
        usePredicate: () => uj.p5,
    }),
    bG = (0, u.zZ)(d.X.DEVELOPER_CATEGORY, { buildLayout: () => [bP, bR] }),
    bM = (0, u.t_)(d.X.DEVELOPER_PANEL, { useTitle: () => L.intl.string(L.t["0BRxRp"]), buildLayout: () => [bG] }),
    bU = (0, u.i4)(d.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: bj.G,
        useTitle: () => L.intl.string(L.t["0BRxRp"]),
        buildLayout: () => [bM],
    });
var bV = n(70688),
    bk = n(830215);
let bw = (0, u.i4)(d.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => L.intl.string(L.t["2jxGer"]),
        icon: bV.DoorExitIcon,
        onClick: () => {
            (0, nQ.A)({
                title: L.intl.string(L.t["2jxGer"]),
                subtitle: L.intl.string(L.t.SUnWBB),
                confirmText: L.intl.string(L.t["2jxGer"]),
                onConfirm: () => {
                    bk.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bF = (0, u.WI)(d.X.UTILITY_SECTION, {
        useTitle: () => L.intl.string(L.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [bU, bw],
    }),
    bB = (0, u.Hr)({ buildLayout: () => [xf, bv, mx, a5, SQ, AX, bF], analyticsKey: "user_settings" });
