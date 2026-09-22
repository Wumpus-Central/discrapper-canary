n.d(t, { D: () => yp });
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
    p = n(346055),
    x = n(297264),
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
    ep = n(839214),
    ex = n(502229),
    eT = n(975571);
let ef = (0, ep.D)(() => ({ syncEnabled: null, updateTimeout: null })),
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
                ((0, el.D3)(e), ef.setState({ updateTimeout: null }));
            }, 150);
            ef.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, ex.D)(),
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
        useSubtitle: () => R.intl.format(R.t.XqvxJc, { helpdeskArticle: eT.A.getArticleURL(S.MVz.REDUCED_MOTION) }),
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
    eM = n(701974);
let eU = (0, d.zD)(c.X.DISPLAY_NAME_STYLES, {
    useTitle: () => R.intl.string(eM.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eP.Ay)();
        return R.intl.format(eM.default.aEax6P, {
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
        buildLayout: () => [ek, ew, eU],
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
    eY = "cozy",
    eX = "compact",
    eH = (0, d.Qx)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => R.intl.string(R.t.nKRoPv),
        useSubtitle: () => R.intl.string(R.t.QntEEG),
        useSearchTerms: () => [R.intl.string(R.t.ZEoGMd)],
        useOptions: () => [
            { name: R.intl.string(R.t.Jqj4cZ), value: eY },
            { name: R.intl.string(R.t["1JNcPS"]), value: eX },
        ],
        useValue: () => (L.hH.useSetting() ? eX : eY),
        setValue: (e) => {
            (L.hH.updateSetting(e === eX), (0, el.AC)());
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
let e$ = (0, d.sN)(c.X.APPEARANCE_ZOOM, {
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
    eJ = (0, d.zZ)(c.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.VKYWk8),
        buildLayout: () => [ez, eH, eZ, e$],
    }),
    e0 = (0, d.t_)(c.X.ACCESSIBILITY_PANEL, {
        useTitle: () => R.intl.string(R.t.G0neg7),
        buildLayout: () => [eF, eJ, e_, eD, et],
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
                return (0, A.jsx)(p.M, {
                    children: (0, A.jsxs)("section", {
                        "aria-label": R.intl.string(R.t.RC22qg),
                        children: [
                            (0, A.jsx)(x.D, {
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
    e1 = (0, d.i4)(c.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.G0neg7),
        icon: g.c,
        useMenu: U.A,
        buildLayout: () => [e0],
    });
n(321073);
var e2 = n(650809),
    e3 = n(477782),
    e5 = n(636537),
    e4 = n(228366),
    e6 = n(74396),
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
    tp = (0, d.zD)(c.X.ENABLE_SEND_BUTTON, tS),
    tx = (0, d.zD)(c.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tS,
        usePredicate: () => !(0, tE.n)("EnableSendButtonOutsideExperiment"),
    }),
    tT = (0, d.zD)(c.X.CONDENSE_PICKER_WHEN_NARROW, {
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
        buildLayout: () => [tN, tT, tf, tI, t_],
    }),
    tb = (0, d.bd)(c.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.IwVGQs) : R.intl.string(R.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tA(c.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tE.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tp, th, tC],
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
        buildLayout: () => [tO, tv, tR, tj, tx, tb],
    });
var tP = n(526162),
    tG = n(793943),
    tM = n(792656),
    tU = n(830543),
    tV = n(785007),
    tk = n(806932),
    tw = n(915089),
    tF = n(10392),
    tB = n(82498),
    tz = n(174197),
    tY = n(202541);
let tX = (0, d.E2)(c.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [R.intl.string(R.t.gnwxvT)],
    Component: function () {
        let e = (0, tw.GV)(),
            { ref: t, ...n } = (0, tV._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, h.bG)([tP.A], () => tP.A.isUpsellPreview);
        return (
            (0, z.Ay)(() => {
                i &&
                    (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tY.e.APP_ICON_UPSELL,
                        location_stack: [tL.A.USER_SETTINGS],
                    }),
                    (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, [tL.A.USER_SETTINGS], () =>
                        (0, tB.uq)(tY.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, A.jsx)("div", {
                ...n,
                ref: t,
                children: (0, A.jsx)(Y.B, {
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
    ((0, tG.nf)(tG.HP.APP_ICON), (0, tU.default)());
}
function tK() {
    return (0, A.jsx)(tM.A, {
        subscriptionTier: tY.pe.TIER_2,
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
        buildLayout: () => [tX],
    }),
    tZ = (0, d.AK)(c.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.UDr3Iy),
        useSearchTerms: () => [R.intl.string(R.t.UDr3Iy)],
        destinationKey: c.X.ACCESSIBILITY_PANEL,
    }),
    tq = (0, d.gN)(c.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [tZ] });
var tQ = n(452027),
    t$ = n(193249),
    tJ = n(976860),
    t0 = n(16236),
    t1 = n(635233),
    t2 = n(749884),
    t3 = n(22277);
let t5 = eT.A.getArticleURL(S.MVz.FAVORITES_GUILD);
function t4() {
    let { analyticsLocations: e } = (0, eP.Ay)(tL.A.USER_SETTINGS_FAVORITES),
        t = E.useCallback(() => {
            ((0, t1.mv)("settings_page"), (0, tJ.uh)(S.YYv), (0, tU.default)());
        }, []);
    return (0, A.jsx)(eP.f5, {
        value: e,
        children: (0, A.jsx)(tQ.D, {
            label: R.intl.string(t3.default.OT1NK5),
            description: R.intl.format(t3.default.GR2KOG, { helpCenterLink: t5 }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, A.jsxs)(Y.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, A.jsx)(_.$, { variant: "secondary", text: R.intl.string(t3.default["7WwLnr"]), onClick: t }),
                    (0, A.jsx)(tM.A, {
                        subscriptionTier: tY.pe.TIER_2,
                        defaultTextOverride: R.intl.string(t3.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let t6 = (0, d.E2)(c.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, e8.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [R.intl.string(t3.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, e8.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, t2.A)(!1);
            return e
                ? (0, A.jsx)(t$.d, {
                      checked: t,
                      description: R.intl.format(t3.default.GR2KOG, { helpCenterLink: t5 }),
                      onChange: t0.kG,
                      label: R.intl.string(t3.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, A.jsx)(t4, {});
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
        buildLayout: () => [t9, ne, nt, nr, na, ns, t6, tq],
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
    np = n(588857),
    nx = n(999834);
let nT = [],
    nf = (0, d.Hn)(c.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => R.intl.string(R.t.VCDSLW),
        useSearchTerms: () => [R.intl.string(R.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nx.b_)(),
                t = (0, nS.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return E.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(np.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, h.bG)([te.A], () => te.A.getSettings().disabledOverlayWidgets ?? nT);
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
var nM = n(284016),
    nU = n(363195);
let nV = (0, d.zD)(c.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => R.intl.string(R.t["/B+kEV"]),
    useSearchTerms: () => [R.intl.string(R.t.Ksh3ik)],
    useValue: function () {
        return (0, h.bG)([nM.A], () => !1 !== nM.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, h.bG)([nU.A], () => nU.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nU.A.theme,
            i = nj.A.gradientPreset?.id ?? null,
            l = L.eh.getSetting()?.customUserThemeSettings != null;
        ((t = S.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            e4.h.dispatch({
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
                      text: (0, ex.D)()
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
            e6.A.isFetching() ||
                (e4.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                e5.Bo.get({ url: S.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        e4.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        e4.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => R.intl.string(R.t["iHH+ky"]),
        buildLayout: () => [nB, tW, no, tD, ng, nv, ts],
    }),
    nY = [
        { badgeType: m.Xi.NEW, dismissibleContent: eu.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eu.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, A.jsx)(tn.JI, { text: R.intl.string(R.t.y2b7CA) });
            },
        },
    ],
    nX = (0, d.i4)(c.X.APPEARANCE_SIDEBAR_ITEM, {
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
                ? nY.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== eu.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : nY,
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
    n$ = n(314116),
    nJ = n(270003),
    n0 = n(939249),
    n1 = n(369606),
    n2 = n(320448),
    n3 = n(604121),
    n5 = n(725951),
    n4 = n(400492),
    n6 = n(669067),
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
                            (0, A.jsx)(x.D, {
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
let ip = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    ix = (0, F.range)(0, 11),
    iT = (0, F.range)(0, 2.25, 0.25),
    iI = (0, F.range)(1, 11),
    i_ = (0, F.range)(1, 26),
    iN = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function iC(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, A.jsx)(
                t$.d,
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
    return (0, A.jsx)(nJ.n, { label: R.intl.string(R.t.bWVN1D), children: s });
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
    return (0, A.jsx)(t$.d, {
        label: R.intl.string(R.t.vuiXm9),
        description: R.intl.string(R.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            (e || (0, n7._)(n9.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, n$.A)({
                          title: l ? R.intl.string(R.t["FxT+p0"]) : R.intl.string(R.t.TAZ4F9),
                          subtitle: l ? R.intl.string(R.t.gmixrx) : R.intl.string(R.t.jN3t3K),
                          confirmText: R.intl.string(R.t.JFfins),
                          onConfirm: () => i(l ? ip : { enabled: !0, warningSeen: !0 }),
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
    return (0, A.jsxs)(nJ.n, {
        label: R.intl.string(R.t.mqxwJO),
        children: [
            (0, A.jsx)(t$.d, {
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
                    (0, A.jsx)(X.A, {
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
                    (0, A.jsx)(X.A, {
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
    return (0, A.jsxs)(nJ.n, {
        label: R.intl.string(R.t.Xz0ole),
        children: [
            (0, A.jsx)(t$.d, {
                label: R.intl.string(R.t.o3iV7B),
                description: R.intl.string(R.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, A.jsx)(t$.d, {
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
                    (0, A.jsx)(X.A, {
                        disabled: r,
                        markers: ix,
                        stickToMarkers: !0,
                        minValue: ix[0],
                        maxValue: ix[ix.length - 1],
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
    return (0, A.jsxs)(nJ.n, {
        label: R.intl.string(R.t.wVS5Sd),
        children: [
            (0, A.jsx)(t$.d, {
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
                    (0, A.jsx)(X.A, {
                        disabled: a,
                        markers: iT,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: iT[0],
                        maxValue: iT[iT.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            (null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, n7._)(n9.sn.MORE),
                                s(t, 1));
                        },
                        onMarkerRender: (e) => (e === iT[iT.length - 1] ? R.intl.string(R.t["4rbMWc"]) : `${100 * e}%`),
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
    return (0, A.jsx)(nJ.n, {
        label: R.intl.string(R.t.EuXv2q),
        children: (0, A.jsxs)(Y.B, {
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
                            (t({ enabled: !1, settingsVisible: !1 }), (0, tU.default)());
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
                    (0, A.jsx)(x.D, {
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
                (0, n4.Ak)("poggermode_enabled"),
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
        (0, A.jsxs)(Y.B, {
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
    return 0 === e ? n5.f.LEFT : n5.f.RIGHT;
}
let iM = (0, d.E2)(c.X.POGGERMODE_SETTING, {
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
                    (0, n6._)(iN[e]);
                }, [e]),
                E.useEffect(() => {
                    Math.random() > 0.99 && (0, n7._)(n9.sn.VISITOR_100);
                }, []),
                (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(n5.A, {
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
    iU = (0, d.zZ)(c.X.POGGERMODE_CATEGORY, { buildLayout: () => [iM] });
var iV = n(212043);
let ik = (0, d.t_)(c.X.POGGERMODE_PANEL, { useTitle: () => R.intl.string(R.t.AtCukI), buildLayout: () => [iU] }),
    iw = (0, d.i4)(c.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AtCukI),
        icon: () => (0, A.jsx)("img", { alt: "", src: n(724405), className: iV.$ }),
        usePredicate: () => (0, h.bG)([nq.A], () => nq.A.settingsVisible),
        buildLayout: () => [ik],
    });
var iF = n(307301),
    iB = n(410767),
    iz = n(683071),
    iY = n(97260),
    iX = n(695366),
    iH = n(812729),
    iK = n.n(iH),
    iW = n(587895),
    iZ = n(429913),
    iq = n(616356),
    iQ = n(952818);
function i$(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function iJ() {
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
        [n] = (0, iZ.A)([i$(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var i0 = n(769015),
    i1 = n(25578),
    i2 = n(935671),
    i3 = n(435075);
function i5(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, A.jsx)("div", {
              className: i3.zc,
              children: (0, A.jsx)(iX.E, { size: "sm", color: nQ.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, A.jsxs)("div", {
              className: i3.nt,
              children: [
                  (0, A.jsx)(i0.A, { game: n, pid: t.pid, size: i0.M.MEDIUM }),
                  (0, A.jsx)("div", {
                      className: i3.Am,
                      children: (0, A.jsx)(iX.E, { size: "sm", color: nQ.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function i4(e) {
    let t = (0, h.bG)([i1.Ay], () => i1.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = iJ();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, i2.NP)(),
        s = l && null != n && t === S.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function i6(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = i4(n);
    return i
        ? (0, A.jsxs)("div", {
              className: ir()(i3.kL, t),
              children: [
                  (0, A.jsx)(i5, { game: l, application: s }),
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
    lp = n(926140),
    lx = n(847893);
function lT() {}
let lf = [lp.rD.VOICE_CHANNEL];
function lI(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function l_() {
    return (0, A.jsx)("div", {
        className: lx.i1,
        children: (0, A.jsx)(H.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lx.GN,
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
                            (s(e), iY.A.setKeybind({ ...i.current, params: { channelId: e } }));
                        },
                    }),
            );
        }, []);
    return (0, A.jsx)("div", {
        className: ir()(lx.a8, n),
        children: (0, A.jsx)(tQ.D, {
            label: R.intl.string(R.t.q4JpM8),
            children: (0, A.jsxs)(lg.A, {
                align: lg.A.Align.STRETCH,
                children: [
                    (0, A.jsx)("div", { className: lx.$X, children: (0, A.jsx)(lb, { channelId: l }) }),
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
        p = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === lp.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        x =
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
                                  if (e?.type === lp.rD.VOICE_CHANNEL) return e.record;
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
                                      null != r ? (0, A.jsx)("div", { className: lx.J5, children: r.name }) : null,
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
                                if (e?.type === lp.rD.VOICE_CHANNEL) return e.record;
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
            "aria-activedescendant": S > 0 && null != p ? p : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: x,
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
              className: lx.GN,
              children: R.intl.string(R.t["/fYIK7"]),
          })
        : (0, A.jsx)(lm.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lT,
              onFocus: lT,
              onMouseEnter: lT,
              focused: !1,
              children: null != l ? (0, A.jsx)("div", { className: lx.J5, children: l.name }) : null,
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
                        keyboardNavArticle: eT.A.getArticleURL(S.MVz.KEYBOARD_NAVIGATION),
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
        l = E.useCallback((e) => iY.A.setKeybind({ ...t, action: e }), [t]),
        s = E.useCallback((e) => iY.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = E.useCallback(() => iY.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = E.useCallback(() => iY.A.deleteKeybind(t.id), [t.id]),
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
var lR = n(696760),
    lD = n(734066),
    lP = n(880144),
    lG = n(614455),
    lM = n(532624),
    lU = n(731854),
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
            } = ((e = (0, h.bG)([lM.Ay], () => lM.Ay.getState())),
            (t = (0, h.bG)([i1.Ay], () => (0, lP.A)(i1.Ay))),
            (n = (0, h.bG)([i1.Ay], () => i1.Ay.supports(lU.O5.VIDEO))),
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
function lY(e) {
    let { children: t } = e;
    return t([lR.Q_.MESSAGE, lR.Q_.NAVIGATION, lR.Q_.DND, lR.Q_.CHAT, lR.Q_.VOICE_AND_VIDEO, lR.Q_.MISCELLANEOUS]);
}
function lX(e) {
    let { showHeader: t = !0 } = e,
        n = B()((0, lR.Bx)())
            .filter((e) => e.description !== R.intl.string(R.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, A.jsxs)(Y.B, {
        gap: 48,
        children: [
            (0, A.jsx)(nJ.n, {
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
            (0, A.jsx)(lY, {
                children: (e) =>
                    (0, A.jsx)(A.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, lR.Gm)(e),
                                l = (0, lR.zF)(e),
                                s = n[e];
                            return (0, A.jsx)(
                                nJ.n,
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
    Component: () => (0, A.jsx)(lX, { showHeader: !1 }),
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
        return (0, A.jsxs)(Y.B, {
            children: [
                (0, A.jsx)(t$.d, { label: t, description: n, checked: e, onChange: lq }),
                !e && (0, A.jsx)(lW.A, { look: lW.k.WARNING, children: R.intl.string(R.t.j7S6IX) }),
            ],
        });
    },
});
function lq(e) {
    let t = e ? R.intl.format(R.t.LYXRxL, {}) : R.intl.format(R.t.uDP3Kz, {});
    (0, n$.A)({
        title: R.intl.string(R.t.aqpAvn),
        subtitle: t,
        confirmText: R.intl.string(R.t.vT7ckk),
        onConfirm: () => {
            lK.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let lQ = (0, ep.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function l$() {
    let e = await lK.Ay.getOpenOnStart(),
        t = await lK.Ay.getSetting("START_MINIMIZED", !1),
        n = await lK.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    lQ.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let lJ = (0, d.zD)(c.X.OS_OPEN_ON_STARTUP, {
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
    l5 = (0, d.E2)(c.X.OS_SYSTEM_SERVICE, {
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
                                    helpCenterLink: eT.A.getArticleURL(S.MVz.SYSTEM_SERVICE),
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
var l4 = n(687813),
    l6 = n(562708),
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
            ...(0, l6.getSuperProperties)(),
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
            "system_info.json": (0, l4._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, l4._u)(JSON.stringify(s, null, 2)),
        }),
        new Promise((t, n) => {
            (0, l4.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
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
        (0, n$.A)({
            title: R.intl.string(R.t.o6Qr6n),
            subtitle: R.intl.string(R.t.JEHHJ1),
            confirmText: R.intl.string(R.t.bm1WjO),
            onConfirm: () => {
                ((0, tU.default)(), l9());
            },
        });
    },
});
function sn() {
    e4.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
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
        buildLayout: () => [lJ, l1, l0, lZ],
        usePredicate: () => nm.Av && ((0, nm.uF)() || (0, nm.j9)()),
        initialize: () => {
            l$();
        },
    }),
    sc = (0, d.zZ)(c.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["069nVT"]),
        useSubtitle: () => R.intl.string(R.t.T4LZVL),
        buildLayout: () => [lw],
        initialize: () => (iY.A.enableAll(!1), () => iY.A.enableAll(!0)),
        useInlineNotice: function () {
            return nm.Av
                ? {
                      type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, A.jsxs)(Y.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, A.jsx)(iz.w, { type: "info", children: R.intl.string(R.t["5pkmHa"]) }),
                                  (0, A.jsx)(i6, { sourcePage: "keybinds" }),
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
                              onClick: () => iY.A.addKeybind(),
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
        buildLayout: () => [l5],
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
    sp = n(212245),
    sx = n(329551),
    sT = n(285918),
    sf = n(712711),
    sI = n(952572),
    s_ = n(382003);
let sN = (0, d.E2)(c.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.lZTUPs)],
        usePredicate: sI.A,
        Component: function () {
            let e = (0, sp.p)(),
                t = E.useRef(!1),
                n = (0, h.bG)([i1.Ay], () => i1.Ay.getVideoDeviceId()),
                [i, l] = E.useState((0, sx.i)(si.default.getCurrentUser())),
                s = E.useRef(i);
            return (
                E.useEffect(
                    () => () => {
                        t.current && (0, sT._C)(s.current);
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
let sj = (0, ep.D)(() => ({ previewEnabled: !1 })),
    sO = (0, d.E2)(c.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.FsQ3OR)],
        Component: function () {
            let e = (0, h.bG)([i1.Ay], () => i1.Ay.isVideoAvailable()),
                { id: t } = (0, sy.x5)(lU.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eP.Ay)();
            return (0, A.jsx)(sb.U, {
                label: R.intl.string(R.t.FsQ3OR),
                deviceType: lU.oh.VIDEO_INPUT,
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
        usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.supports(lU.O5.VIDEO)),
        buildLayout: () => [sD, sC, sO, sN],
    });
var sG = n(827343);
let sM = (0, d.zD)(c.X.VOICE_AND_VIDEO_OPENH264, {
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
                (0, n$.A)({
                    title: R.intl.string(R.t["9jf31O"]),
                    subtitle: R.intl.string(R.t["J2wg+X"]),
                    confirmText: R.intl.string(R.t.BddRzS),
                    onConfirm: () => nh.A.app.relaunch(),
                }));
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    sU = (0, d.zD)(c.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
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
    sY = n(353835);
let sX = (0, ep.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function sH() {
    let e = await nh.A.fileManager.getLogPath();
    nh.A.fileManager.showItemInFolder(e);
}
function sK(e) {
    (0, n$.A)({
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
            await sY.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
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
        onUploadStart: () => sX.setState({ isUploading: !0 }),
        onUploadFinish: () => sX.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let sq = (0, d.E2)(c.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [R.intl.string(R.t["726JHL"]), R.intl.string(R.t.EbwFfR), R.intl.string(R.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.supports(lU.O5.DEBUG_LOGGING));
        return nm.Av && e && null != nh.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.getDebugLogging()),
            t = sX.useField("isUploading"),
            n = sX.useField("isDisabled"),
            i = E.useId();
        return (0, A.jsxs)("fieldset", {
            children: [
                (0, A.jsx)(ln.A, { tag: "legend", id: i, children: R.intl.string(R.t["FjN+et"]) }),
                (0, A.jsxs)(Y.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, A.jsx)(t$.d, {
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
    s$ = n(412780);
function sJ() {
    return (0, h.bG)([si.default, i1.Ay], () => {
        let e = si.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === lK.Ay.releaseChannel || "development" === lK.Ay.releaseChannel,
            i = i1.Ay.supports(lU.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let s0 = (0, d.zD)(c.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.U4FgFK),
        useSubtitle: () => R.intl.string(R.t.Lm72RU),
        useValue: function () {
            return (0, h.bG)([s$.Ay], () => s$.Ay.shouldRecordNextConnection());
        },
        setValue: sQ.Et,
        usePredicate: sJ,
    }),
    s1 = (0, d.Tf)(c.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => R.intl.string(R.t.nJnOHO),
        useLabel: () => R.intl.string(R.t["3xjX0U"]),
        onClick: sQ.YW,
        usePredicate: sJ,
    });
var s2 = n(926919),
    s3 = n(111162),
    s5 = n(855302);
let s4 = (0, d.zD)(c.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => R.intl.string(R.t["0CEP6e"]),
        useSubtitle: () => R.intl.string(R.t["kBXuW+"]),
        useValue: function () {
            return (0, h.bG)([s3.default], () => s3.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = s3.default.isStreamInfoOverlayEnabled;
            ((0, s5.A)("stream_info_overlay_enabled", e, t), (0, s2.x)({ isStreamInfoOverlayEnabled: e }));
        },
        usePredicate: function () {
            return L.Q_.useSetting();
        },
    }),
    s6 = (0, d.bd)(c.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t["/B4I8H"]) : R.intl.string(R.t.BTlsWH)),
        useCollapsedSubtitle: () => R.intl.string(R.t.la1Ys4),
        buildLayout: () => [s4, sU, s0, s1, sq],
    });
function s8(e, t, n) {
    (0, n$.A)({ title: e, subtitle: t, confirmText: R.intl.string(R.t.BddRzS), onConfirm: n });
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
        buildLayout: () => [sM, s6, s7],
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
    ro = n(852712),
    ru = n(179172),
    rd = n(868162);
let rc = (0, d.zD)(c.X.VOICE_AUDIO_DEVICE_SUGGESTIONS_SETTING, {
        useTitle: () => R.intl.string(R.t.gF8HJo),
        useSubtitle: () => R.intl.string(R.t.cfrfyZ),
        useValue: function () {
            return (0, h.bG)([rd.A], () => !0 !== rd.A.getState().neverShowModal);
        },
        setValue: function (e) {
            ru.Bv(!e);
        },
        usePredicate: function () {
            return eQ.isPlatformEmbedded;
        },
    }),
    rg = (0, d.zD)(c.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
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
    rm = (0, d.sN)(c.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => R.intl.string(R.t.AlybXj),
        setValue: (e) =>
            sG.A.setAttenuation(e, i1.Ay.getAttenuateWhileSpeakingSelf(), i1.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => i1.Ay.getAttenuation(),
    }),
    rA = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => R.intl.string(R.t["9dHxRY"]),
        useValue: () => (0, h.bG)([i1.Ay], () => i1.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => sG.A.setAttenuation(i1.Ay.getAttenuation(), e, i1.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    rE = (0, d.zD)(c.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => R.intl.string(R.t.SMt0Gr),
        useValue: () => (0, h.bG)([i1.Ay], () => i1.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sG.A.setAttenuation(i1.Ay.getAttenuation(), i1.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    rh = (0, d.FW)(c.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.oSdBvW),
        useSubtitle: () => R.intl.string(R.t["0A/8Rt"]),
        usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.supports(lU.O5.ATTENUATION)),
        buildLayout: () => [rm, rA, rE],
    });
var rS = n(801644);
let rp = (0, d.zD)(c.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => R.intl.string(R.t.pZ0vr4),
        useSubtitle: () => R.intl.string(R.t.tVbzoZ),
        useValue: function () {
            return (0, h.bG)([eg.Ay], () => !eg.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            ((0, s5.A)("hardware_mute_silence_alert_enabled", e, !eg.Ay.disableHardwareMuteSilenceAlert),
                ni.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e }));
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = rS.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    rx = (0, d.zD)(c.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
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
    rT = (0, d.zD)(c.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => R.intl.string(R.t.jrWHD3),
        useSubtitle: () => R.intl.string(R.t.YCCMkJ),
        useValue: function () {
            return (0, h.bG)([eg.Ay], () => !eg.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            ((0, s5.A)("switch_channel_warning_enabled", e, !eg.Ay.disableVoiceChannelChangeAlert),
                ni.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e }));
        },
    }),
    rf = (0, d.zD)(c.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
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
    rI = (0, d.Hn)(c.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
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
                legacyAudioSubsystemSupported: i1.Ay.supports(lU.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: i1.Ay.supports(lU.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: i1.Ay.supports(lU.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return E.useMemo(() => {
                let i;
                return (
                    (i = [{ id: lU.rB.STANDARD, value: lU.rB.STANDARD, label: R.intl.string(R.t.dqb2JZ) }]),
                    e && i.push({ id: lU.rB.LEGACY, value: lU.rB.LEGACY, label: R.intl.string(R.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: lU.rB.EXPERIMENTAL, value: lU.rB.EXPERIMENTAL, label: R.intl.string(R.t.liQmtr) }),
                    n && i.push({ id: lU.rB.AUTOMATIC, value: lU.rB.AUTOMATIC, label: R.intl.string(R.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    r_ = (0, d.zD)(c.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => R.intl.string(R.t.uancuJ),
        useSubtitle: () => R.intl.string(R.t.I1Eoqq),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getQoS());
        },
        setValue: function (e) {
            sG.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.supports(lU.O5.QOS));
        },
    }),
    rN = (0, d.zD)(c.X.VOICE_SILENCE_WARNING_SETTING, {
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
    rC = (0, d.bd)(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? R.intl.string(R.t.KHsSWK) : R.intl.string(R.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tA(c.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rg, rf, rx, rc, rN, rp, rT, rh, rI, r_],
    }),
    rb = (0, d.zD)(c.X.VOICE_ECHO_CANCELLATION_SETTING, {
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
var ry = n(459838),
    rv = n(451988),
    rj = n(475883),
    rO = n(9761);
let rL = (0, tw.Ld)();
function rR(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, A.jsx)("div", {
        role: "meter",
        className: ir()(rj.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? R.intl.string(R.t.haLKZ0) : R.intl.string(R.t.X2hJL7),
        children: (0, A.jsx)("div", { className: ir()(rj.Jx, rj.NU, { [rj.zY]: t && !r, [rj.r9]: r }) }),
    });
}
function rD(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, h.cf)([i1.Ay], () => ({
            threshold: i1.Ay.getModeOptions().threshold,
            autoThreshold: i1.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, h.bG)([i1.Ay], () => i1.Ay.getMode());
    return (0, A.jsx)("section", {
        className: ir()(rj.Mo, rj.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, A.jsx)(X.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return ((t = -((100 - e) * 1)), void sG.A.setMode(o, { threshold: t, autoThreshold: a }));
            },
            barStyles: { background: nQ.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: nQ.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rL,
            disabled: s,
            children: (0, A.jsxs)("div", {
                className: ir()(rj.NU, rj.TL, rj.Jx, rO.bar),
                children: [
                    (0, A.jsx)("div", { className: ir()(rj.GS, rj.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, A.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let rP = (0, d.E2)(c.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [R.intl.string(R.t["sqUm+k"]), R.intl.string(R.t.I1Zuq0), R.intl.string(R.t.nuFtHH)],
    usePredicate: () => (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, h.cf)([i1.Ay], () => ({
                autoThreshold: i1.Ay.getModeOptions().autoThreshold,
                disabled: i1.Ay.getMode() !== lU.TB.VOICE_ACTIVITY,
            })),
            n = E.useCallback((e) => {
                let t = i1.Ay.getMode(),
                    { threshold: n } = i1.Ay.getModeOptions();
                sG.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, h.bG)([i1.Ay], () => i1.Ay.supports(lU.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = E.useState(-100),
                    [n, i] = E.useState(!1);
                function l(e, n) {
                    (t(e), i((n & lU.ME.VOICE) === lU.ME.VOICE));
                }
                return (
                    E.useEffect(() => {
                        let e = new rv.Ep();
                        return (
                            e.start(1e3, () => {
                                (i1.Ay.getMediaEngine().on(ry.bg.VoiceActivity, l), e.stop());
                            }),
                            () => {
                                (i1.Ay.getMediaEngine().removeListener(ry.bg.VoiceActivity, l), e.stop());
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
                        className: rj.B4,
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
                      (0, A.jsxs)(Y.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, A.jsx)(t$.d, {
                                  disabled: t,
                                  label: R.intl.string(R.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, A.jsx)(rR, {
                                        isSpeaking: s,
                                        className: rj.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rD, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, A.jsxs)(Y.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, A.jsx)(tQ.D, {
                          label: R.intl.string(R.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, A.jsx)(rR, {
                                        isSpeaking: s,
                                        className: rj.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, A.jsx)(rD, {
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
var rG = n(366010);
let rM = n(993830),
    rU = n(413142),
    rV = { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO };
function rk() {
    let e = (0, h.bG)([nU.A], () => (0, rG.q)(nU.A.theme));
    return (0, A.jsx)("img", { src: e ? rM : rU, width: 48, height: 32, alt: "" });
}
let rw = (0, d.E2)(c.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.t8Qhib), R.intl.string(R.t.hmfkCi)],
    usePredicate: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.isInputProfileCustom() && i1.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = E.useCallback((e) => {
                (sG.A.setNoiseCancellation("KRISP" === e, rV), sG.A.setNoiseSuppression("STANDARD" === e, rV));
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
                ? R.intl.format(R.t["1q5aTp"], { helpArticle: eT.A.getArticleURL(S.MVz.NOISE_SUPPRESSION) })
                : R.intl.string(R.t.OWKjw5);
        return (0, A.jsxs)(Y.B, {
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
                l && (0, A.jsx)(rk, {}),
            ],
        });
    },
});
var rF = n(934729),
    rB = n(621380);
let rz = !nm.Av;
function rY() {
    return (0, h.bG)([i1.Ay], () => i1.Ay.getMode() === lU.TB.PUSH_TO_TALK);
}
let rX = (0, d.zD)(c.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nm.Av ? R.intl.string(R.t.tG4Np5) : R.intl.string(R.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, h.bG)([i1.Ay], () => i1.Ay.getMode());
        return E.useMemo(() => {
            if (!nm.Av && e === lU.TB.PUSH_TO_TALK)
                return R.intl.format(R.t["VHI4+Y"], { onDownloadClick: () => (0, rF._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.getActiveInputProfile() !== rB.m.STUDIO);
    },
    useValue: function () {
        return (0, h.bG)([i1.Ay], () => i1.Ay.getMode() === lU.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        ((t = e ? lU.TB.PUSH_TO_TALK : lU.TB.VOICE_ACTIVITY),
            (i = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lU.TB.PUSH_TO_TALK &&
                rz &&
                (0, la.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("844331"), n.e("410919")]).then(n.bind(n, 556506));
                    return (t) =>
                        (0, A.jsx)(e, {
                            title: R.intl.string(R.t.Kdt0Gb),
                            confirmText: R.intl.string(R.t["1WjMbC"]),
                            cancelText: R.intl.string(R.t.BddRzS),
                            onConfirm: () => (0, rF._)("PTT Limited Modal"),
                            body: R.intl.string(R.t.NIozvt),
                            ...t,
                        });
                }),
            sG.A.setMode(t, void 0, void 0, { analyticsLocations: i }));
    },
    useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
});
var rH = n(484599);
let rK = (0, d.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["pS+K2L"]), R.intl.string(R.t.nuFtHH)],
        usePredicate: rY,
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
                    className: rH.e,
                    children: (0, A.jsx)(ll.A, {
                        defaultValue: e,
                        onChange: (e) => sG.A.setMode(S.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    rW = (0, d.sN)(c.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
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
        usePredicate: rY,
    });
var rZ = n(844981),
    rq = n(943679);
function rQ() {
    return (0, rZ.Ay)("VoiceSettings");
}
let r$ = (0, d.zD)(c.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => R.intl.string(rq.default.LGDPhA),
        useSubtitle: function () {
            let e = rQ();
            if ((0, rZ.Xt)(e))
                return e === rZ.L3.BLOCKED_MONO_OUTPUT
                    ? R.intl.string(rq.default.rOXfEw)
                    : R.intl.string(rq.default.O7Aa3Y);
        },
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            sG.A.setSpatialAudio(e, [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return rQ() !== rZ.L3.HIDDEN;
        },
        useDisabled: function () {
            return (0, rZ.Xt)(rQ());
        },
    }),
    rJ = (0, d.Qx)(c.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => R.intl.string(R.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, ro._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH), R.intl.string(R.t.VZPR0R), R.intl.string(R.t.cjPbpT)],
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getActiveInputProfile() ?? rB.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sG.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, ro.d)({ location: "InputProfileCategory" });
            return [
                { value: rB.m.VOICE_ISOLATION, name: R.intl.string(R.t.cjPbpT), desc: R.intl.string(R.t.CzhvnE) },
                { value: rB.m.STUDIO, name: R.intl.string(R.t.VZPR0R), desc: R.intl.string(R.t.ZaJksS) },
                { value: rB.m.CUSTOM, name: R.intl.string(R.t["N/PQjv"]), desc: R.intl.string(R.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    r0 = (0, d.zZ)(c.X.VOICE_INPUT_PROFILE_CATEGORY, {
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
        buildLayout: () => [rJ, rP, rw, rb, r$, rX, rK, rW, rC],
    });
var r1 = n(403581),
    r2 = n(512950),
    r3 = n(983851),
    r5 = n(687021),
    r4 = n(128450),
    r6 = n(796774),
    r8 = n(209932),
    r7 = n(813564),
    r9 = n(984813),
    ae = n(922016),
    at = n(305866),
    an = n(22231),
    ai = n(158045),
    al = n(792348),
    as = n(674168),
    ar = n(511558),
    aa = n(817232),
    ao = n(647451);
function au(e) {
    let { onSelect: t } = e,
        [n, i] = E.useState(!1),
        l = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        s = ai.Ay.canUseCustomCallSounds(l),
        r = E.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, A.jsx)(ae.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, A.jsx)(at.l, {
                children: (0, A.jsx)(ar.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, A.jsx)(as.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, A.jsx)(aa.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: R.intl.string(R.t.uOe0Az),
                children: (0, A.jsx)(an.PencilIcon, { size: "md", color: "currentColor", className: ao.Wo }),
            }),
    });
}
function ad(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, al.A)(t, null),
        i =
            0 === (0, r7.wH)()
                ? R.intl.string(R.t.OASXjt)
                : R.intl.formatToPlainString(R.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, A.jsx)(aa.dT, {
        onClick: n,
        text: i,
        children: (0, A.jsx)(r3.H, { size: "md", color: "currentColor", className: ao.wg }),
    });
}
function ac(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s);
    return (0, A.jsxs)("div", {
        className: ao.D6,
        children: [
            (0, A.jsxs)("div", {
                className: ao.kL,
                children: [
                    a && (0, A.jsx)(ty.A, { emojiId: s, emojiName: r, className: ao.Zg }),
                    (0, A.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: ao.dj,
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
                        ? (0, A.jsx)(ad, { sound: t })
                        : (0, A.jsx)(r3.H, { size: "md", color: "currentColor", className: ao.Gk }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: ao.kL,
                children: [
                    (0, A.jsx)(au, { onSelect: i }),
                    l &&
                        !n &&
                        (0, A.jsx)(aa.dT, {
                            onClick: () => i(null),
                            text: R.intl.string(R.t.jmtcGA),
                            children: (0, A.jsx)(le.TrashIcon, {
                                size: "md",
                                color: nQ.A.unsafe_rawColors.RED_400.css,
                                className: ao.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var ag = n(617617);
n(980504);
var am = n(806050);
function aA(e) {
    return (0, h.bG)([r8.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return r8.A.getSound("0" === t ? "0" : t, n);
    });
}
function aE(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([ag.A], () => ag.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = aA(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, A.jsxs)("div", {
        className: am.Io,
        children: [
            r
                ? (0, A.jsx)(ty.A, { emojiId: l, emojiName: s, className: am.nW })
                : (0, A.jsx)(r3.H, { size: "md", color: "currentColor", className: am.nW }),
            (0, A.jsx)(H.E, { className: am.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let ah = (0, d.E2)(c.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [R.intl.string(R.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eP.Ay)(),
            [t, n] = E.useState("0"),
            i = (0, r9.mz)(t),
            l = aA(i),
            s = i?.type === r9.PP.GLOBAL,
            r = (0, h.bG)([r8.A], () => r8.A.hasFetchedAllSounds()) && null != i && null == l;
        (E.useEffect(() => {
            r && (0, r7.ND)({ location: e });
        }, [r, e]),
            E.useEffect(() => {
                (0, r6.E7)();
            }, []));
        let a = E.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, A.jsx)(aE, { guildId: e.value }) : null;
        }, []);
        return (0, A.jsxs)(nJ.n, {
            label: R.intl.string(R.t.nzUc3B),
            description: R.intl.format(R.t.u9RWmv, { helpdeskArticle: eT.A.getArticleURL(S.MVz.SOUNDBOARD) }),
            children: [
                (0, A.jsx)(r5.A, {
                    guildId: t,
                    className: am.Dt,
                    globalOption: { label: R.intl.string(R.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, A.jsxs)(r4.A, {
                    title: R.intl.format(R.t.I2TsYN, {
                        nitroWheelHook: () => (0, A.jsx)(r1.t, { size: "md", color: "currentColor", className: am.ax }),
                    }),
                    children: [
                        (0, A.jsx)(ac, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, r7.Dv)(t, e) : (0, r7.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, A.jsx)(r2.p, {
                                className: am.lm,
                                messageType: r2.Y.WARNING,
                                children: R.intl.string(R.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var aS = n(824744);
let ap = (0, d.sN)(c.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => R.intl.string(R.t.kbFsAD),
    useSubtitle: () => R.intl.format(R.t.BPbGq7, { helpCenterArticle: eT.A.getArticleURL(S.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, aS.w)(e);
        (0, r6.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, r7.wH)();
        return (0, aS.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var ax = n(864145);
let aT = (0, d.sN)(c.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t["2JbvKw"]),
        useSubtitle: () => R.intl.string(R.t.INenzY),
        setValue: function (e) {
            let t = (0, aS.w)(e);
            L.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = L.HO.getSetting();
            return (0, aS.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, ax.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    af = (0, d.zZ)(c.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ABjMWI),
        buildLayout: () => [ap, aT, ah],
    });
var aI = n(803224),
    a_ = n(552122);
let aN = (0, d.E2)(c.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [R.intl.string(R.t.fgSHf8)],
        usePredicate: () => null != a_.A.useHolidaySoundpack(),
        Component: () =>
            (0, A.jsx)(H.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: R.intl.format(R.t.Eup6Wv, {
                    onClick: () => (0, nl.openUserSettings)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aC = (0, d.AK)(c.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.eyGEE4),
        useSearchTerms: () => [R.intl.string(R.t.eyGEE4)],
        destinationKey: c.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    ab = (0, d.gN)(c.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aC] });
var ay = n(264686);
let av = (0, ep.D)(() => ({ currentPlayingSound: null }));
function aj() {
    let e = av.getField("currentPlayingSound");
    (e?.stop(), av.setState({ currentPlayingSound: null }));
}
function aO(e) {
    let t = av.getField("currentPlayingSound");
    t?.stop();
    let n = (0, n4.Ak)(e);
    av.setState({ currentPlayingSound: n });
}
function aL(e) {
    return (0, d.zD)(`${c.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => aO(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, h.bG)([aI.A], () => aI.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aI.A.getDisabledSounds().filter((t) => t !== e.sound);
            (t || n.push(e.sound), ay.default.setDisabledSounds(n));
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, h.bG)([aI.A], () => aI.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aR = [
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
    aD = (0, d.D1)(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? R.intl.formatToPlainString(R.t["0JYT98"], { count: t })
                : R.intl.formatToPlainString(R.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tA(c.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                aj();
            };
        },
        buildLayout: () => aR.map((e) => aL(e)),
    }),
    aP = (0, d.zZ)(c.X.SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, h.bG)([aI.A], () => aI.A.getDisableAllSounds());
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
        buildLayout: () => [aD, aN, ab],
    }),
    aG = (0, d.zD)(c.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => R.intl.string(R.t.e3Zz3F),
        useSubtitle: () => R.intl.string(R.t.RztTjP),
        useValue: function () {
            return !L.uh.useSetting();
        },
        setValue: function (e) {
            ((0, s5.A)("stream_previews_disabled", !e, L.uh.getSetting(), [tL.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                L.uh.updateSetting(!e));
        },
    }),
    aM = (0, d.zD)(c.X.STREAMING_ADVANCED_SCREENSHARE, {
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
    aU = (0, d.zD)(c.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
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
    aV = (0, d.zD)(c.X.STREAMING_STREAM_ATTENUATION, {
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
            return i1.Ay.supports(lU.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    ak = (0, d.sN)(c.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
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
            return i1.Ay.supports(lU.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    aw = (0, d.zD)(c.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => R.intl.string(R.t.lt8rRx),
        useSubtitle: () => R.intl.string(R.t.ie1mgY),
        useValue: function () {
            return (0, h.bG)([i1.Ay], () => i1.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nm.cX)() && e
                ? (0, n$.A)({
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
    aF = (0, d.bd)(c.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? R.intl.string(R.t.qrMyvm) : R.intl.string(R.t.LEtTNl)),
        useCollapsedSubtitle: () => tA(c.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aV, ak, aw, aU, aM],
    }),
    aB = (0, d.zZ)(c.X.STREAMING_CATEGORY, { useTitle: () => R.intl.string(R.t.KDdjou), buildLayout: () => [aG, aF] });
var az = n(106713);
let aY = (0, d.E2)(c.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = az.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, A.jsx)(sb.U, {
                label: R.intl.string(R.t.UTM8VP),
                deviceType: lU.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aX = (0, d.E2)(c.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = az.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, A.jsx)(sb.U, {
                label: R.intl.string(R.t.xuYQ0n),
                deviceType: lU.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aH = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [aY, aX] }),
    aK = (0, d.sN)(c.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = i1.Ay.getInputVolume();
            return (0, aS.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aS.w)(e);
            sG.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    aW = (0, d.sN)(c.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => R.intl.string(R.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = i1.Ay.getOutputVolume();
            return (0, aS.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tL.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, aS.w)(e);
            sG.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    aZ = (0, d.zC)(c.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [aK, aW] });
var aq = n(702841),
    aQ = n(152567),
    a$ = n(804037);
let aJ = `${eT.A.getArticleURL(S.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    a0 = (0, d.E2)(c.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.nuFtHH)],
        usePredicate: function () {
            return (0, aq.bG)([i1.Ay], () => i1.Ay.supports(lU.O5.LOOPBACK));
        },
        Component: function () {
            return (0, aq.bG)([i1.Ay], () => i1.Ay.supports(lU.O5.LOOPBACK))
                ? (0, A.jsx)(aQ.A, {
                      size: "md",
                      notchBackground: aQ.V.GRAY,
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
                                  className: a$.X,
                                  href: eT.A.getArticleURL(S.MVz.NO_INPUT_DETECTED),
                                  children: R.intl.string(R.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: R.intl.format(R.t["V+B3FH"], { guideURL: aJ }),
                      buttonTest: R.intl.string(R.t.gyljWE),
                      buttonStop: R.intl.string(R.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: S.liQ.USER_SETTINGS, section: S.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    a1 = eQ.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function a2(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, A.jsxs)(Y.B, {
        children: [
            n && (0, A.jsx)(i6, { sourcePage: "voice" }),
            t && (0, A.jsx)(lW.A, { look: lW.k.WARNING, children: R.intl.string(R.t.Ioz3gx) }),
        ],
    });
}
let a3 = (0, d.zZ)(c.X.VOICE_CATEGORY, {
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
            let e = i4("voice"),
                t = (0, sy.x5)(lU.oh.AUDIO_INPUT),
                n = (0, sy.x5)(lU.oh.AUDIO_OUTPUT),
                i = E.useMemo(() => {
                    let e = a1.some((e) => t?.hardwareId?.startsWith(e)),
                        i = a1.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return E.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: m.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, A.jsx)(a2, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [aH, aZ, a0],
    }),
    a5 = (0, d.t_)(c.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        buildLayout: () => [a3, r0, sP, aB, aP, af, rr, s9],
    }),
    a4 = (0, d.i4)(c.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.B1fFpf),
        usePredicate: () => i1.Ay.isSupported(),
        icon: sh.MicrophoneIcon,
        useMenu: sS.A,
        buildLayout: () => [a5],
    }),
    a6 = (0, d.WI)(c.X.APP_SECTION, {
        useTitle: () => R.intl.string(R.t.gcyH1J),
        buildLayout: () => [a4, nX, e1, iw, sE, nZ],
    });
var a8 = n(360669),
    a7 = n(974544),
    a9 = n(423764),
    oe = n(289873),
    ot = n(132500),
    on = n(465323),
    oi = n(37766),
    ol = n(194261),
    os = n(391048),
    or = n(277984),
    oa = n(99696),
    oo = n(202613),
    ou = n(615405),
    od = n(83617),
    oc = n(935208),
    og = n(607399),
    om = n(993077),
    oA = n(150934),
    oE = n(256006),
    oh = n(198970),
    oS = n(71532);
let op = /[^0-9/]/g,
    ox = /[^0-9]/g;
class oT extends E.PureComponent {
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
                ((i = (n = e.replace(op, "").split("/"))[0]),
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
            ? (u = u.replace(ox, ""))
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
var of = n(832208),
    oI = n(782328);
let o_ = [
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
                        getClassNameForLayout: () => oI.ep,
                        renderInput: (e) => (0, A.jsx)(oT, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oN = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = E.useState(!1),
            [a, o] = E.useState(null),
            [u, d] = E.useState(i);
        return (
            E.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, A.jsx)(of.A, {
                className: n,
                form: o_,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    (s || "" === e || r(!0),
                        (s && "" === e) || !(0, oS.So)(e) ? o(R.intl.string(R.t["9/zZdl"])) : o(null),
                        d(e));
                },
            })
        );
    };
var oC = n(219887),
    ob = n(292856);
let oy = "isDefault";
class ov extends E.PureComponent {
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
            expiresMonth: t instanceof oo.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof oo.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        e4.h.wait(() => {
            ((0, or.ey)(), (0, or.tc)());
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
                      className: ob.zc,
                      children: (0, A.jsx)(iz.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, A.jsx)("div", {
                  className: ob.zc,
                  children: (0, A.jsx)(iz.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, oE.g)(n);
        return (0, A.jsxs)("div", {
            className: ob.yV,
            children: [
                (0, A.jsx)(H.E, {
                    className: ob.bV,
                    variant: "text-sm/normal",
                    children: R.intl.string(R.t["50Auo2"]),
                }),
                (0, A.jsx)(oh.Ay, {
                    ...e,
                    mode: oh.Ay.Modes.EDIT,
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
            className: ob.yV,
            children: [
                (0, A.jsx)(H.E, { className: ob.bV, variant: "text-sm/normal", children: R.intl.string(R.t.Fo2YP7) }),
                (0, A.jsx)(oN, {
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
            className: ob.AU,
            children: (0, A.jsxs)(Y.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, A.jsx)(sF.e, {
                        children: (0, A.jsxs)("div", {
                            className: ob.lH,
                            children: [
                                n
                                    ? (0, A.jsx)(lt.m, {
                                          text: R.intl.string(R.t["v6/z28"]),
                                          children: (0, A.jsx)("div", { "aria-hidden": !0, className: ob.dm }),
                                      })
                                    : null,
                                (0, A.jsx)(_.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: og.Fr ? "sm" : "md",
                                    text: og.Fr ? R.intl.string(R.t.oyYWHE) : R.intl.string(R.t.yk5qfb),
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
                                size: og.Fr ? "sm" : "md",
                                text: R.intl.string(R.t["ETE/oC"]),
                            }),
                            (0, A.jsx)(_.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: og.Fr ? "sm" : "md",
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
            r = e instanceof oo.SJ;
        return (0, A.jsx)(om.Z, {
            editable: !0,
            className: ir()(ob.Nr, i),
            children: (0, A.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, A.jsxs)("div", {
                        className: ob.__invalid_paymentSection,
                        children: [
                            (0, A.jsx)(oC.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, A.jsx)("div", { className: ob.Um, children: R.intl.string(R.t["3R0U0b"]) })
                                : null,
                            (0, A.jsx)("div", {
                                className: ob.Sv,
                                children: r
                                    ? R.intl.format(R.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : R.intl.string(R.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, A.jsx)("div", {
                        className: ob.D5,
                        children: (0, A.jsx)(oA.S, {
                            value: oy,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, oy),
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
let oj = h.Ay.connectStores([ou.A], () => ({ updateError: ou.A.editSourceError, removeError: ou.A.removeSourceError }))(
    ov,
);
var oO = n(986485),
    oL = n(849405),
    oR = n(329693);
function oD() {
    (0, oa.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, ot.A)() });
}
class oP extends E.PureComponent {
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
            ? (0, A.jsx)(oj, {
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
                      i ? null : (0, A.jsx)(i8.c, { className: oR.__invalid_sourceDivider }),
                      (0, A.jsxs)("div", {
                          className: oR.Yb,
                          children: [
                              (0, A.jsx)(oC.A, {
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
let oG = E.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = E.useState(null),
        o = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, h.bG)([ou.A], () => ou.A.ipCountryCode),
        d = E.useMemo(() => (0, on.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        E.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : or.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, A.jsxs)(A.Fragment, {
            children: [
                n ? null : (0, A.jsx)(i8.c, { className: oR.__invalid_sourceDivider }),
                (0, A.jsxs)("div", {
                    className: oR.Yb,
                    children: [
                        void 0 !== t
                            ? (0, A.jsx)(oC.A, {
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
                                      (0, A.jsx)(oi._, { size: "lg" }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/medium",
                                          className: oL.Wi,
                                          children: R.intl.string(oO.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, A.jsxs)("div", {
                            className: oR.zy,
                            children: [
                                (0, A.jsx)("div", {
                                    className: oR.Tq,
                                    children:
                                        null == r
                                            ? (0, A.jsx)(oe.y, { type: oe.y.Type.SPINNING_CIRCLE })
                                            : (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = (0, on.$g)(e ?? 0, n, l, {
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
                                    text: R.intl.string(oO.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class oM extends E.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            (await or.Gr(e), this.setState({ editingPayment: e }));
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            (await or.JQ(e), this.setState({ editingPayment: null }));
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                (await or.Ps(e, t), this.setState({ editingPayment: null }));
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, od.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, la.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, A.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, os.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, A.jsxs)("div", {
            className: oR.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, A.jsxs)("div", {
                          className: oR.z8,
                          children: [
                              (0, A.jsx)(H.E, { variant: "text-sm/normal", children: R.intl.string(R.t.aRHpAB) }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: oR.Sv,
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
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : oc.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof oo.LQ)),
            c = u.filter((e) => e instanceof oo.LQ),
            g = this.state.editingPayment,
            m = d.findIndex((e) => e.id === g),
            E = d.map((e, t) =>
                (0, A.jsx)(
                    oP,
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
                              oG,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || m === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: oD,
                              },
                              e.id,
                          ),
                      )
                    : (0, A.jsx)(oG, {
                          hideDivider: 0 === d.length || m === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: oD,
                      })),
            (0, A.jsxs)(A.Fragment, {
                children: [
                    t
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsxs)(x.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, A.jsx)(ol.LockIcon, { size: "sm", className: oR.hz }),
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
var oU = n(459357),
    oV = n(295405),
    ok = n(166403),
    ow = n(773669),
    oF = n(943009);
function oB() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, a9.Gw)(e.country) };
}
let oz = (0, d.E2)(c.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, h.bG)([ou.A], () => ou.A.isSyncing),
                i = (0, h.bG)([oV.A], () => oV.A.paymentSources),
                l = (0, h.bG)([oV.A], () => oV.A.defaultPaymentSourceId),
                s = (0, h.bG)([ow.default], () => ow.default.locale),
                r = (0, h.bG)([ok.A], () => ok.A.getPremiumTypeSubscription()),
                a = (0, h.bG)([ou.A], () => ou.A.isRemovingPaymentSource),
                o = (0, h.bG)([ou.A], () => ou.A.isUpdatingPaymentSource),
                { enabled: u } = (0, oU.c)({ location: "UserSettingsBilling" });
            return (E.useEffect(() => {
                (or.$o(), or.hP());
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, A.jsx)("div", { className: oF.o, children: (0, A.jsx)(oe.y, {}) })
                : (0, A.jsx)(oM, {
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
    oY = (0, d.zZ)(c.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.W26xGQ),
        useSubtitle: () => {
            let e = oB();
            return null != e ? R.intl.format(R.t.e2t1G5, { country: e.countryName }) : R.intl.string(R.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == oB()
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
        buildLayout: () => [oz],
    });
var oX = n(549363),
    oH = n(545075);
let oK = (0, d.E2)(c.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, h.bG)([ow.default], () => ow.default.locale);
            return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(oH.kb, {}), (0, A.jsx)(oX.A, { locale: e })] });
        },
        useSearchTerms: () => [R.intl.string(R.t.obLrcK)],
    }),
    oW = (0, d.zZ)(c.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.obLrcK),
        buildLayout: () => [oK],
    }),
    oZ = (0, d.t_)(c.X.BILLING_PANEL, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [oY, oW],
        useObscuredNotice: a7.L,
    }),
    oq = (0, d.i4)(c.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        icon: a8.B,
        buildLayout: () => [oZ],
    });
var oQ = n(70283),
    o$ = n(597770),
    oJ = n(682618),
    o0 = n(38423),
    o1 = n(962644),
    o2 = n(35587),
    o3 = n(86379);
let o5 = (0, d.E2)(c.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: oH.uK,
        usePredicate: () => (0, o3.Hp)(),
        useSearchTerms: () => [R.intl.string(R.t.vwMEHS)],
    }),
    o4 = (0, d.zZ)(c.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [o5] });
var o6 = n(982240),
    o8 = n(788833),
    o7 = n(914410),
    o9 = n(556427),
    ue = n(573343);
let ut = "UserSettingsGiftingBadgeProgress";
function un(e) {
    let { tier: t, iconUrl: n, active: i = !1 } = e;
    return (0, A.jsxs)("div", {
        className: ir()(ue.fO, { [ue.bF]: i }),
        children: [
            null != n && (0, A.jsx)("img", { src: n, alt: "", className: ue.si }),
            (0, A.jsxs)("div", {
                className: ue.tc,
                children: [
                    (0, A.jsx)(H.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, A.jsx)(H.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: R.intl.format(o9.default.qvx9E4, { count: (0, o6.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function ui(e) {
    let { tiers: t, currentTier: n } = e,
        i = (0, o0.b9)(ut);
    return (0, A.jsx)("div", {
        className: ue.dw,
        children: t.map((e) => (0, A.jsx)(un, { tier: e, iconUrl: (0, o0.Se)(e, i), active: e.key === n?.key }, e.key)),
    });
}
function ul(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(tL.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, o8.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: S.ZSU.BUTTON_CTA, objectType: S.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, A.jsx)("div", {
        className: ue.NG,
        children: (0, A.jsx)(_.$, {
            variant: "primary",
            icon: o$.GiftIcon,
            text: R.intl.string(o9.default.DZnomS),
            onClick: l,
        }),
    });
}
function us(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, o6.rL)(i),
        a = (0, o6.rL)(l),
        o = (0, o0.GZ)(n, i, l),
        u = (0, o0.b9)(ut),
        d = (0, o0.Se)(i, u),
        c = (0, o0.Se)(l, u);
    return (
        (t =
            null != l
                ? R.intl.formatToPlainString(o9.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : R.intl.formatToPlainString(o9.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, A.jsxs)("div", {
            className: ue.mY,
            children: [
                null != d &&
                    (0, A.jsx)("div", {
                        className: ue.fC,
                        children: (0, A.jsx)("img", { src: d, alt: "", className: ue.qS }),
                    }),
                (0, A.jsxs)("div", {
                    className: ue.Qs,
                    children: [
                        (0, A.jsx)(H.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, A.jsx)(o7.Ay, { variant: o7.qP.BLUE, weight: o7.fh.MEDIUM, progress: o }),
                        (0, A.jsx)(H.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: ue.qg,
                            children: R.intl.format(o9.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                null != c &&
                    (0, A.jsx)("div", {
                        className: ue.fC,
                        children: (0, A.jsx)("img", { src: c, alt: "", className: ue.qS }),
                    }),
            ],
        })
    );
}
function ur(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, h.cf)([o6.Ay], () => ({
            badgeProgress: o6.Ay.getSingleRequirementProgress(oQ.$.GIFTING)?.current ?? 0,
            currentTier: o6.Ay.getCurrentTier(oQ.$.GIFTING),
            nextTier: o6.Ay.getNextTier(oQ.$.GIFTING),
            giftsRemaining: o6.Ay.getRemainingToNextTier(oQ.$.GIFTING),
            tiers: o6.Ay.getBadgeById(oQ.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, A.jsxs)("div", {
              className: ue.kL,
              children: [
                  (0, A.jsxs)("div", {
                      className: ue.Jo,
                      children: [
                          n > 0 &&
                              (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsx)(us, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, A.jsx)("div", { className: ue.yF }),
                                  ],
                              }),
                          (0, A.jsx)(ui, { tiers: r, currentTier: i }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: ue.PJ,
                              children: R.intl.string(o9.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, A.jsx)(ul, { analyticsLocation: t, location: ut }),
              ],
          });
}
let ua = (0, d.zZ)(c.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => R.intl.string(o9.default.sFokBp),
        buildLayout: () => [uo],
        usePredicate: () => {
            let e = (0, o0.F5)("gift_inventory"),
                t = (0, h.bG)([o6.Ay], () => o6.Ay.getBadgeById(oQ.$.GIFTING));
            return e && null != t;
        },
    }),
    uo = (0, d.E2)(c.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [R.intl.string(o9.default.sFokBp)],
        Component: () => (0, A.jsx)(ur, {}),
    });
var uu = n(264779),
    ud = n(412260),
    uc = n(555393),
    ug = n(725807),
    um = n(212168),
    uA = n(469778),
    uE = n(45938),
    uh = n(109802),
    uS = n(869038),
    up = n(380856);
function ux(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, A.jsxs)(lg.A, {
        className: ir()(up.wx, n),
        align: lg.A.Align.CENTER,
        children: [
            (0, A.jsx)("div", { className: up.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function uT(e) {
    let { children: t, className: n } = e;
    return (0, A.jsx)("div", { className: ir()(up.rf, n), children: t });
}
class uf extends E.PureComponent {
    static Header = ux;
    static Body = uT;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, A.jsx)("div", { className: ir()(up.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var uI = n(165191),
    u_ = n(871123),
    uN = n(366523),
    uC = n(280450),
    ub = n(30793),
    uy = n(97352),
    uv = n(67480),
    uj = n(147925),
    uO = n(957565),
    uL = n(615396),
    uR = n(274904);
class uD extends E.PureComponent {
    _copyModeTimeout = new rv.Ep();
    state = { copyMode: uh.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case uh.q.SUCCESS:
                return R.intl.string(R.t.XVvPjU);
            case uh.q.ERROR:
                return R.intl.string(R.t.i4GM3L);
            default:
                return R.intl.string(R.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        uS.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        ((0, uE.AK)(t, n),
            (0, uO.C)(
                e,
                () => this.setState({ copyMode: uh.q.SUCCESS }),
                () => this.setState({ copyMode: uh.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: uh.q.DEFAULT });
            }));
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, A.jsxs)(lg.A, {
            direction: lg.A.Direction.VERTICAL,
            className: uR.Gj,
            children: [
                (0, A.jsx)(uh.e, {
                    className: uR.ph,
                    value: (0, uE.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: uO.p5,
                    hideMessage: e ? R.intl.string(R.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: sk.XD.BRAND,
                    buttonLook: sk.pR.FILLED,
                }),
                (0, A.jsxs)("div", {
                    className: uR.KB,
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
class uP extends E.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        (this.setState({ isCreating: !0 }),
            await uS.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 }));
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        ((null == n || null == this._loadedAt || n < this._loadedAt) && i && uS.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen }));
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, u_.bF)(e)
            ? (0, A.jsx)(uN.e, { shape: "square", sku: e, containerClassName: uR.ez })
            : null != t
              ? (0, A.jsx)(uI.A, { giftStyle: t, className: uR.ez, shouldAnimate: this.state.isHovered })
              : (0, A.jsx)(i0.A, { game: n, size: i0.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, u_.bF)(e)
            ? (0, A.jsxs)("div", {
                  className: ir()(uR.Oc, uR.ic),
                  children: [
                      (0, A.jsx)(i0.A, { game: n, size: i0.M.XSMALL, skuId: e.id, className: uR._u }),
                      R.intl.format(R.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, A.jsx)("div", { className: uR.Oc, children: R.intl.format(R.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tY.FB
                    ? R.intl.string(R.t.odsU6W)
                    : i === tY.Bu && null != n
                      ? R.intl.formatToPlainString(n.interval === tY.WT.MONTH ? R.t.uZjpiJ : R.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : R.intl.formatToPlainString(n.interval === tY.WT.MONTH ? R.t.rCJvqo : R.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, A.jsx)("div", { className: uR.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, A.jsxs)(lg.A, {
            justify: lg.A.Justify.BETWEEN,
            align: lg.A.Align.CENTER,
            className: uR.pe,
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
        return (0, A.jsxs)(uf, {
            className: i,
            children: [
                (0, A.jsx)(n0.D, {
                    onClick: this.handleToggleOpen,
                    className: uR.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, A.jsx)(uf.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, A.jsxs)("div", {
                            className: uR.MY,
                            children: [
                                (0, A.jsxs)(lg.A, {
                                    align: lg.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, A.jsxs)("div", {
                                            className: uR.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, A.jsx)(uj.A, {
                                    direction: a ? uj.A.Directions.UP : uj.A.Directions.DOWN,
                                    className: uR.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, A.jsx)(uf.Body, {
                          children: s
                              ? (0, A.jsx)(oe.y, { className: uR.u1 })
                              : (0, A.jsxs)(E.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, A.jsx)(uD, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let uG = h.Ay.connectStores([uv.A, te.A, ub.A, iW.A, uy.A, uC.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = uv.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = ub.A.getForGifterSKUAndPlan(uC.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: te.A.enabled,
        isFetching: ub.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: ub.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: iW.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, uL.c9)(n) : null,
        giftCodes: s,
    };
})(uP);
var uM = n(725570),
    uU = n(736653),
    uV = n(46054);
let uk = io().duration(30, "days");
var uw = n(416052),
    uF = n(878309);
function uB(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, A.jsx)(lr.Modal, {
        title: "",
        size: "md",
        input: (0, A.jsx)("div", { className: uF.aR }),
        onClose: async () => await t(),
        actions: [{ text: R.intl.string(R.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, A.jsxs)("div", {
            className: uF.t4,
            children: [
                (0, A.jsx)(x.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t.iufib1) }),
                (0, A.jsx)(H.E, { variant: "text-md/normal", className: uF.G3, children: R.intl.string(R.t.eAn6z2) }),
            ],
        }),
    });
}
let uz = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = E.useState(null),
        o = (0, tw.GV)(),
        { analyticsLocations: u } = (0, eP.Ay)(tL.A.USER_SETTINGS_GIFT_INVENTORY);
    return (E.useEffect(() => {
        null == i &&
            (0, uu.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, A.jsx)(uB, { onClose: t, transitionState: s })
        : null == i
          ? (0, A.jsx)(oe.y, { className: uF.Lq })
          : (0, A.jsx)(lr.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, A.jsxs)("div", {
                    className: uF.N1,
                    children: [
                        (0, A.jsx)("div", { className: uF.Qw }),
                        (0, A.jsx)(x.D, { variant: "heading-xl/semibold", children: R.intl.string(R.t["23BfZh"]) }),
                        (0, A.jsx)(H.E, {
                            variant: "text-md/normal",
                            className: uF.G3,
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
                            let e = (0, uu.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, A.jsxs)("div", {
                    children: [
                        (0, A.jsx)(i8.c, { className: uF.M5 }),
                        (0, A.jsx)(tQ.D, {
                            label: R.intl.string(R.t.s9LFQh),
                            helperText: R.intl.string(R.t["F+nFTZ"]),
                            children: (0, A.jsx)(uw.A, {
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
var uY = n(707554),
    uX = n(339048),
    uH = n(136380);
function uK() {
    let e = (0, h.yK)([uA.A], () => uA.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = B().groupBy(e, (e) => (0, uE.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = E.useState(!1);
    if (
        (E.useEffect(() => {
            e4.h.wait(() => {
                (0, uX.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, A.jsx)(oe.y, { className: uH.Lq });
    if (0 === Object.keys(t).length)
        return (0, A.jsxs)("div", {
            className: uH.p$,
            children: [
                (0, A.jsx)("div", { className: uH.QT }),
                (0, A.jsx)(uY.H, { className: uH.ks, children: R.intl.string(R.t.B1qgZn) }),
                (0, A.jsx)("p", {
                    className: uH.WO,
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
            let { skuId: n, subscriptionPlanId: i, giftStyle: l } = (0, uE.X6)(e);
            return (0, A.jsx)(uG, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: l }, e);
        });
    return (0, A.jsx)(Y.B, { gap: "lg", children: l });
}
function uW(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = E.useState(!1),
        [r, a] = E.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, uU.Ay)(),
        d = (0, uu.WD)(n.id, u),
        c = null != i,
        g = E.useMemo(
            () =>
                (0, iu.i$)(
                    c
                        ? null != n.outboundRedemptionEndDate
                            ? io()(n.outboundRedemptionEndDate)
                            : io()(n.endDate).add(uk)
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
        h = (0, uc.N)()?.isEligible === !0,
        S = E.useCallback(() => a(!1), []),
        { outboundTitle: p, outboundTermsAndConditions: T } = n;
    return (0, A.jsxs)(A.Fragment, {
        children: [
            (0, A.jsxs)("div", {
                className: uH.AX,
                children: [
                    (0, A.jsxs)("div", {
                        className: uH.Pg,
                        children: [
                            (0, A.jsxs)("div", {
                                className: uH.At,
                                children: [
                                    (0, A.jsx)("div", {
                                        className: uH.$G,
                                        children: (0, A.jsx)("img", { alt: "", src: d, className: uH.IJ }),
                                    }),
                                    (0, A.jsxs)("div", {
                                        children: [
                                            (0, A.jsx)(x.D, { variant: "heading-md/semibold", children: p }),
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
                            className: uH.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: uV.A.parse(T, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, A.jsx)(uM.aF, {
                    renderModal: (e) =>
                        (0, A.jsx)(uz, {
                            ...e,
                            onClose: S,
                            onClaim: o1.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: S,
                }),
        ],
    });
}
function uZ(e) {
    let { redesign: t = !1 } = e,
        n = (0, h.yK)([uA.A], () => uA.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, uc.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, o2.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tY.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tY.Bu && !e.consumed) ?? [],
        [u, d] = B().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tY.gD.PREMIUM_YEAR_TIER_2;
        }),
        c = l.length + s.length > 0,
        g =
            t || !c
                ? null
                : (0, A.jsxs)("div", {
                      className: uH.N1,
                      children: [
                          (0, A.jsx)(x.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.wFsj3B) }),
                          (0, A.jsx)(i8.c, { className: uH.yF }),
                      ],
                  }),
        m =
            !1 === i && c
                ? (0, A.jsxs)("div", {
                      className: uH.uo,
                      children: [
                          (0, A.jsx)(r1.t, {
                              size: "md",
                              color: nQ.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: uH.PC,
                          }),
                          (0, A.jsx)(H.E, {
                              variant: "text-md/normal",
                              className: uH.Qw,
                              children: R.intl.format(R.t.G4fwxK, {
                                  onClick: () => {
                                      ((0, tU.default)(), (0, tJ.pX)(S.BVt.APPLICATION_STORE));
                                  },
                              }),
                          }),
                          (0, A.jsx)(ug.A, {
                              showGradient: !0,
                              className: uH.aA,
                              subscriptionTier: tY.pe.TIER_2,
                              textOptions: { textOverride: R.intl.string(R.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, A.jsxs)("div", {
        children: [
            g,
            (0, A.jsx)(um.A, {
                className: uH.Yj,
                isShown: !1 === i && c,
                type: um.i.PREMIUM,
                hasBackground: !0,
                children: (0, A.jsxs)("div", {
                    className: uH.DE,
                    children: [
                        m,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, A.jsx)(uW, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, A.jsx)(uW, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, A.jsx)(
                                  uG,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tY.FB,
                                  },
                                  (0, uE.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, A.jsx)(
                                  uG,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tY.Bu,
                                  },
                                  (0, uE.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, A.jsx)(
                                  uG,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tY.Bu,
                                  },
                                  (0, uE.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let uq = (0, d.zZ)(c.X.MY_GIFTS_CATEGORY, {
        useTitle: u$,
        buildLayout: () => [uQ],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, h.cf)(
                    [ud.A],
                    () => ({
                        claimedOutboundPromotionCodes: ud.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: ud.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, o2.T1)({ includeClaimedPromotions: !0 }),
                i = (0, uu.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    uQ = (0, d.E2)(c.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [u$()],
        Component: () => (0, A.jsx)(uZ, { redesign: !0 }),
    });
function u$() {
    return R.intl.string(R.t.YzjdWJ);
}
let uJ = (0, d.zZ)(c.X.PURCHASED_GIFTS_CATEGORY, { useTitle: u1, buildLayout: () => [u0] }),
    u0 = (0, d.E2)(c.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [u1()], Component: () => (0, A.jsx)(uK, {}) });
function u1() {
    return R.intl.string(R.t.FWe6CP);
}
var u2 = n(532446),
    u3 = n(499454);
class u5 extends E.Component {
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
                    (await (0, oa.Qp)(n),
                        (0, oa.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, ot.A)(),
                        }),
                        this.setState({ codeInput: "" }));
                    return;
                } catch {}
            let e = (0, uE.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await uS.Ay.resolveGiftCode(e);
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
                (0, u3.h)({ processedCode: e }),
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
        return (0, A.jsx)(nJ.n, {
            label: e ? void 0 : R.intl.string(R.t["il+VCo"]),
            children: (0, A.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, A.jsxs)(u2.M, {
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
function u4(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, oU.c)({ location: "UserSettingsBilling" }),
        i = E.useContext(tt.AnalyticsContext),
        l = (0, h.bG)([te.A], () => te.A.enabled);
    return (0, A.jsx)(u5, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let u6 = (0, d.zZ)(c.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => R.intl.string(R.t["il+VCo"]),
        buildLayout: () => [u8],
        usePredicate: () => !(0, o3.Hp)(),
    }),
    u8 = (0, d.E2)(c.X.REDEEM_CODE_INPUT, {
        Component: () => (0, A.jsx)(u4, { redesign: !0 }),
        useSearchTerms: () => [R.intl.string(R.t["jcSP+g"]), R.intl.string(R.t["il+VCo"])],
    }),
    u7 = (0, d.t_)(c.X.GIFT_PANEL, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        buildLayout: () => [u6, uq, ua, uJ, o4],
        initialize: () => {
            (o1.Ay.fetchClaimedOutboundPromotionCodes(), (0, o0.Ig)("gift_inventory") && (0, oJ.o0)(oQ.$.GIFTING));
        },
    }),
    u9 = (0, d.i4)(c.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["jcSP+g"]),
        icon: o$.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, o2.IO)().length;
            return E.useMemo(() => ({ badgeType: m.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [u7],
    });
var de = n(659758),
    dt = n(408510),
    dn = n(877624),
    di = n(269115),
    dl = n(462887),
    ds = n(73825),
    dr = n(531260),
    da = n(160946),
    du = n(721668),
    dd = n(224016),
    dc = n(580630),
    dg = n(526292),
    dm = n(881489),
    dA = n(106512),
    dE = n(22118),
    dh = n(103411),
    dS = n(190187),
    dp = n(930861),
    dx = n(854627),
    dT = n(889227),
    df = n(326084),
    dI = n(851746),
    d_ = n(664654),
    dN = n(912140),
    dC = n(953727);
let db = (e) => {
        let { className: t, backgroundColor: n, backgroundCircleSize: i, ...l } = e;
        return (0, A.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            fill: "none",
            style: { overflow: "visible" },
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, dC.A)({ ...l }),
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
    dy = (e) => {
        let { ellipseOpacity: t, circleColor: n, ...i } = e,
            l = (0, uU.Ay)(),
            s = (0, dl.q)(l),
            r = null != n ? n : s ? "url(#paint0_linear_1055_83268)" : "url(#paint0_linear_1282_11557)";
        return (0, A.jsxs)("svg", {
            style: { overflow: "visible" },
            width: "80%",
            height: "80%",
            viewBox: "0 0 100 100",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...(0, dC.A)({ ...i }),
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
                            fillOpacity: null != t ? t : s ? 0.5 : 0.2,
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
                                    fillOpacity: s ? "0.6" : "0.4",
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
                    filter: s ? void 0 : "url(#filter0_d_1282_11577)",
                    transform: "translate(50, 50) scale(.8) translate(-44, -30)",
                    children: [
                        (0, A.jsx)("path", {
                            d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                            fill: s ? "url(#paint2_linear_1986_8686)" : "url(#paint0_linear_1282_11577)",
                        }),
                        (0, A.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                            fill: s ? "url(#paint1_linear_1986_8686)" : "url(#paint1_linear_1282_11577)",
                        }),
                        (0, A.jsx)("path", {
                            d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                            fill: s ? "url(#paint0_linear_1986_8686)" : "url(#paint2_linear_1282_11577)",
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
var dv = n(387316);
let dj = "url(#gradient)",
    dO = (e) => {
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
            [d, c] = E.useState(l);
        E.useEffect(() => {
            let e = setTimeout(() => {
                c(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let g = (0, uU.Ay)(),
            m = (0, dl.q)(g),
            h = (function (e) {
                switch (e) {
                    case dR.NITRO_GEM:
                    case dR.AVATAR_DECO:
                        return "var(--background-base-low)";
                    case dR.NITRO_LOGO:
                        return "var(--premium-tier-2-purple)";
                    default:
                        return;
                }
            })(r),
            S = (function (e, t) {
                switch (e) {
                    case dR.NITRO_LOGO:
                        return t ? "0.3" : "0.2";
                    case dR.NITRO_GEM:
                    case dR.AVATAR_DECO:
                    default:
                        return;
                }
            })(r, m),
            p =
                a ??
                (function (e, t) {
                    switch (t) {
                        case dR.NITRO_GEM:
                        case dR.AVATAR_DECO:
                            return dj;
                        case dR.NITRO_LOGO:
                            return e ? "url(#gradient_nitro_logo)" : dj;
                        default:
                            return;
                    }
                })(m, r);
        return (0, A.jsxs)("div", {
            className: dv.Ap,
            children: [
                (0, A.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: dv.fB,
                    children: [
                        (0, A.jsx)("circle", {
                            className: r === dR.NITRO_GEM || r === dR.AVATAR_DECO ? dv.F3 : void 0,
                            fill: "transparent",
                            strokeWidth: s,
                            r: `${o}`,
                            cx: "50%",
                            cy: "50%",
                            stroke: h,
                            strokeOpacity: S,
                        }),
                        (0, A.jsx)("circle", {
                            stroke: p,
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
                (0, A.jsx)("div", { className: dv.Vw, children: n }),
            ],
        });
    };
var dL = n(104773),
    dR =
        (((i = {})[(i.NITRO_GEM = 0)] = "NITRO_GEM"),
        (i[(i.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (i[(i.AVATAR_DECO = 2)] = "AVATAR_DECO"),
        i);
function dD(e) {
    let { avatarDecorationLegacyAssetId: t, avatarDecorationSkuId: n, avatarDecoAssetDescription: i } = e,
        l = E.useMemo(() => (0, dN.A)({ legacyAssetId: t, skuId: n, size: I._3.SIZE_120, canAnimate: !1 }), [t, n]);
    return (0, A.jsx)("div", {
        className: dL.Q7,
        children: (0, A.jsx)("div", {
            className: dL.Nk,
            children: null != l && (0, A.jsx)("img", { className: dL.CH, alt: i, src: l }),
        }),
    });
}
let dP = function (e) {
    let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: l,
            progressCircleStrokeSize: s,
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
            circleStroke: p,
        } = e,
        x = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        T = t && !x;
    return (0, A.jsx)("div", {
        className: ir()(dL.G3, n),
        children: (0, A.jsx)(dO, {
            animationClassName: ir()(dL._0, { [dL.uJ]: T, [E ?? ""]: T }),
            progressCircleStroke: p,
            progressCircleStrokeSize: s,
            percentage: i ?? a,
            initialPercentage: i ?? o,
            progressCircleVariation: u,
            children: (function () {
                switch (u) {
                    case 0:
                        return (0, A.jsx)(db, {
                            className: T ? dL.Ow : void 0,
                            backgroundColor: ir()(dL.vH, l),
                            backgroundCircleSize: r,
                        });
                    case 1:
                        return (0, A.jsx)(dy, { circleColor: S, ellipseOpacity: m });
                    case 2:
                        if (null != c)
                            return (0, A.jsx)(dD, {
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
var dG = n(14313);
function dM(e) {
    let { userRecord: t, placement: n } = e,
        { avatarSrc: i, eventHandlers: l } = (0, dx.A)({ userId: t?.id, size: I._3.SIZE_32, animateOnHover: !0 }),
        s = null != t,
        r = s
            ? (0, A.jsx)(f.eu, { src: i, "aria-label": t.username, size: I._3.SIZE_32, ...l })
            : (0, A.jsx)(x.D, { variant: "heading-md/semibold", className: dG.n5, children: n });
    return (0, A.jsx)(lt.m, {
        text: R.intl.string(R.t.UnKHdo),
        shouldShow: !s,
        children: (0, A.jsx)("div", { className: dG.Lg, children: r }),
    });
}
function dU(e) {
    let { numSentReferrals: t, placement: n } = e;
    return (0, A.jsxs)("div", {
        className: dG.Ip,
        children: [
            (0, A.jsx)("div", { className: dG.Ej }),
            (0, A.jsx)("div", { className: ir()({ [dG.ch]: t > n, [dG.q_]: t === n }) }),
        ],
    });
}
function dV(e) {
    let { userRecords: t } = e,
        n = t.length,
        i = n < 1 ? null : t[0],
        l = n < 2 ? null : t[1],
        s = n < 3 ? null : t[2];
    return (0, A.jsxs)("div", {
        className: dG.ZM,
        children: [
            (0, A.jsx)(dM, { userRecord: i, placement: 1 }),
            (0, A.jsx)(dU, { numSentReferrals: n, placement: 1 }),
            (0, A.jsx)(dM, { userRecord: l, placement: 2 }),
            (0, A.jsx)(dU, { numSentReferrals: n, placement: 2 }),
            (0, A.jsx)(dM, { userRecord: s, placement: 3 }),
        ],
    });
}
let dk = function () {
    let e = (0, h.bG)([dI.A], () => dI.A.getRecipientStatus()),
        { referralSentUsers: t } = (0, d_.J)(),
        i = E.useMemo(() => t.map((e) => new dT.A(e)), [t]),
        l = { redeemed: 0, converted: 0, sent: e.size };
    e.forEach((e) => {
        (e === df.aK.REDEEMED && l.redeemed++, e === df.aK.CONVERTED && (l.redeemed++, l.converted++));
    });
    let s = l.sent === d_.Z,
        r = eT.A.getArticleURL(S.MVz.REFERRAL_PROGRAM),
        { analyticsLocations: a } = (0, eP.Ay)(tL.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        o = E.useRef(null),
        u = (l.sent / d_.Z) * 100,
        d = (0, A.jsxs)("div", {
            className: dG.hE,
            children: [
                (0, A.jsx)(dP, { percentage: u, progressCircleVariation: dR.NITRO_LOGO, iconClassName: dG.ER }),
                (0, A.jsxs)("div", {
                    className: dG.Ns,
                    children: [
                        (0, A.jsx)(x.D, {
                            variant: "heading-xl/extrabold",
                            className: dG.R0,
                            children: (function (e) {
                                let { hasSentAll: t } = e;
                                return R.intl.string(R.t.USo4s7);
                            })({ hasSentAll: s }),
                        }),
                        (0, A.jsx)(dV, { userRecords: i }),
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            children: (function (e) {
                                let { helpdeskArticle: t, referralsStatuses: n } = e;
                                return (function (e) {
                                    let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
                                    return t
                                        ? R.intl.format(R.t["TYu+MH"], { helpdeskArticle: i })
                                        : R.intl.format(R.t["omMr+V"], { helpdeskArticle: i });
                                })({ hasSentAll: n.sent >= d_.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
                            })({ helpdeskArticle: r, referralsStatuses: l }),
                        }),
                        (0, A.jsx)("div", {
                            className: dG.Fb,
                            children: (0, A.jsx)(dp.wL, {
                                "data-migration-pending": !0,
                                className: dG.r$,
                                color: sk.XD.CUSTOM,
                                onClick: () =>
                                    (function (e) {
                                        let { analyticsLocations: t } = e;
                                        (tt.default.track(S.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                            location_stack: t,
                                        }),
                                            (0, la.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("647658"),
                                                    n.e("618589"),
                                                ]).then(n.bind(n, 168457));
                                                return (n) => (0, A.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                            }));
                                    })({ analyticsLocations: a }),
                                onlyShineOnHover: !0,
                                children: (0, A.jsxs)("div", {
                                    className: dG.Zn,
                                    children: [
                                        (0, A.jsx)("img", {
                                            src: "/assets/3b9b1649f78941df.svg",
                                            alt: "",
                                            className: dG.QH,
                                        }),
                                        s ? R.intl.string(R.t.SY9tyI) : R.intl.string(R.t.Lm2nFc),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
        c = l.redeemed === d_.Z;
    return (0, A.jsx)(eP.f5, {
        value: a,
        children: (0, A.jsx)("div", {
            className: ir()(dG.kL, { [dG.AP]: c }),
            children: (0, A.jsx)("div", { ref: o, className: ir()(dG.d_, { [dG.kS]: c }), children: d }),
        }),
    });
};
var dw = n(194509),
    dF = n(465794),
    dB = n(774774),
    dz = n(156601),
    dY = n(543213),
    dX = n(88001),
    dH = n(148155),
    dK = n(487518);
let dW = "to_premium_home_button",
    dZ = "premium home page";
function dq(e) {
    let { premiumSubscription: t, isDiscountApplied: n, activeDiscountInfo: i, theme: l } = e,
        s = t.hasActiveTrial,
        r = t.planIdFromItems === tY.gD.PREMIUM_YEAR_TIER_2,
        a = t.hasAnyPremiumGroup,
        o = (0, dr.A)(),
        u = null != t.trialEndsAt ? io()(t.trialEndsAt).diff(io()(), "d") : 0,
        d = tY.hd[t.planIdFromItems],
        c = ai.Ay.getDefaultPrice(d.id),
        g = ai.Ay.formatPriceString(c, d.interval);
    if (n || s) {
        let e = (0, dl.M)(l) ? dB.at.PREMIUM_TIER_2_WHITE_FILL : dB.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
        return (0, A.jsxs)(A.Fragment, {
            children: [
                !s && (r || a)
                    ? (0, A.jsx)(dB.e4, { text: R.intl.string(R.t.EyjDRE), className: dK.LW, colorOptions: e })
                    : (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(dB.HU, {
                                  text: s ? R.intl.string(R.t.qYKftX) : R.intl.string(R.t.EyjDRE),
                                  className: dK.uS,
                                  colorOptions: e,
                              }),
                              (0, A.jsx)("div", { className: dK.on }),
                          ],
                      }),
                (0, A.jsx)(x.D, {
                    variant: "heading-md/normal",
                    color: "text-overlay-light",
                    className: dK.KB,
                    children: (function () {
                        if (s) return R.intl.format(R.t["2CGBri"], { remainingTime: u, price: g });
                        if (a && null != i && t.metadata?.active_discount_expires_at != null) {
                            let e = (0, dc.$g)(c.amount, c.currency);
                            return R.intl.format(dH.default.FwjZzr, {
                                percent: i?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: e,
                            });
                        }
                        return r
                            ? R.intl.format(R.t.z2oQtA, {
                                  percent: i?.percentage ?? tY.Cq,
                                  regularPrice: g,
                                  renewalDate: ai.Ay.getExpectedRenewalDate(t, o),
                              })
                            : R.intl.formatToPlainString(R.t["3ZiutU"], {
                                  percent: i?.percentage ?? tY._$,
                                  regularPrice: g,
                                  numMonths: i?.duration ?? tY.OJ,
                              });
                    })(),
                }),
            ],
        });
    }
    return (0, A.jsx)(dz.A, { variant: void 0, subscriptionTier: tY.pe.TIER_2, interval: d.interval });
}
function dQ() {
    let e = (0, dg.k5)(),
        t = (0, dg.nf)(),
        n = (0, uU.Ay)(),
        i = (0, h.bG)([ok.A], () => ok.A.getPremiumTypeSubscription()),
        l = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        s = l?.isPremiumWithPremiumGroup(),
        r = (0, dr.A)(),
        a = (0, dm.ds)(),
        o = null !== i && null !== i.planIdFromItems;
    if (!o && !r.isFractionalPremiumActive && !s) return null;
    let u = r.isFractionalPremiumActive,
        d = null !== i && i.hasActiveTrial;
    return (0, A.jsxs)("div", {
        className: ir()(dK.$Y, { [dK.J5]: e || d }),
        children: [
            (0, A.jsxs)("div", {
                className: dK.jp,
                children: [
                    s
                        ? (0, A.jsx)(x.D, {
                              variant: "nitro-md",
                              color: "text-overlay-light",
                              className: dK._K,
                              children: (0, dX.DP)(),
                          })
                        : (0, A.jsx)(dd.A, { className: dK.TJ }),
                    s && !e
                        ? (0, A.jsx)("div", { style: { marginBottom: "6px" } })
                        : u && !a
                          ? (0, A.jsxs)(A.Fragment, {
                                children: [
                                    (0, A.jsx)(dB.e4, {
                                        text: R.intl.string(R.t.uXF4c4),
                                        className: dK.LW,
                                        colorOptions: dB.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                    }),
                                    (0, A.jsx)(x.D, {
                                        variant: "heading-md/normal",
                                        color: "text-overlay-light",
                                        className: dK.sQ,
                                        children: R.intl.format(R.t.sK7fGl, {
                                            helpCenterLink: eT.A.getArticleURL(S.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                        }),
                                    }),
                                ],
                            })
                          : o
                            ? (0, A.jsx)(dq, {
                                  premiumSubscription: i,
                                  isDiscountApplied: e,
                                  activeDiscountInfo: t,
                                  theme: n,
                              })
                            : a
                              ? (0, A.jsxs)(A.Fragment, {
                                    children: [
                                        (0, A.jsx)(dB.HU, {
                                            text: R.intl.string(R.t.qYKftX),
                                            className: dK.uS,
                                            colorOptions: (0, dl.M)(n)
                                                ? dB.at.PREMIUM_TIER_2_WHITE_FILL
                                                : dB.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL,
                                        }),
                                        (0, A.jsx)(x.D, {
                                            variant: "heading-md/normal",
                                            color: "text-overlay-light",
                                            className: dK.KB,
                                            children: R.intl.format(R.t["/SfHwl"], { weeks: 1 }),
                                        }),
                                    ],
                                })
                              : null,
                    (0, A.jsx)(dY.ZP, {
                        featureSet: l?.isPremiumGroupPrimary()
                            ? dY.Nz.PREMIUM_GROUP_PRIMARY
                            : l?.isPremiumGroupMember()
                              ? dY.Nz.PREMIUM_GROUP_MEMBER
                              : u
                                ? dY.Nz.FRACTIONAL_PREMIUM
                                : dY.Nz.DEFAULT,
                    }),
                    u && !o
                        ? (0, A.jsxs)(sF.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, A.jsx)(dF.A, {
                                      defaultTextOverride: a ? R.intl.string(R.t.YScQSF) : R.intl.string(R.t["0b3YRn"]),
                                  }),
                                  (0, A.jsx)(_.$, {
                                      onClick: () => {
                                          (tt.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: dW,
                                              target: dZ,
                                          }),
                                              (0, tU.default)(),
                                              (0, tJ.pX)(S.BVt.APPLICATION_STORE));
                                      },
                                      variant: "overlay-secondary",
                                      fullWidth: !0,
                                      size: "md",
                                      text: a ? R.intl.string(R.t.VR2iVB) : R.intl.string(R.t.T1aUAX),
                                  }),
                              ],
                          })
                        : (0, A.jsxs)(sF.e, {
                              fullWidth: !0,
                              direction: "vertical",
                              padding: { top: 16 },
                              children: [
                                  (0, A.jsx)(_.$, {
                                      variant: "overlay-primary",
                                      fullWidth: !0,
                                      onClick: () => {
                                          (tt.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: dW,
                                              target: dZ,
                                          }),
                                              (0, tU.default)(),
                                              (0, tJ.pX)(S.BVt.APPLICATION_STORE));
                                      },
                                      text: R.intl.string(R.t.VR2iVB),
                                      size: "md",
                                  }),
                                  (0, A.jsx)(_.$, {
                                      variant: "overlay-secondary",
                                      onClick: () => {
                                          (tt.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                              cta_type: "to_subscriptions_button",
                                              target: "subscriptions settings",
                                          }),
                                              (0, nl.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL));
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
                className: dK.ah,
                children: (0, A.jsx)("img", { className: dK.ah, alt: "", src: "/assets/3aaa2c2d1874c196.svg" }),
            }),
        ],
    });
}
function d$() {
    return (0, A.jsxs)("div", {
        className: dK.T1,
        children: [
            (0, A.jsx)("img", { className: dK.GY, alt: "", src: "/assets/9f5bdd034cc313ae.svg" }),
            (0, A.jsxs)("div", {
                className: dK.b4,
                children: [
                    (0, A.jsx)(x.D, {
                        className: dK.Vz,
                        variant: "heading-xl/extrabold",
                        children: R.intl.string(R.t["3KomGa"]),
                    }),
                    (0, A.jsx)(H.E, {
                        className: dK.Oi,
                        variant: "text-sm/normal",
                        children: R.intl.string(R.t.yQ06u1),
                    }),
                    (0, A.jsx)(dw.A, {
                        className: ir()(dK.Tp, dK._c),
                        textOptions: { textOverride: R.intl.string(R.t.Ve9Ge6), textClassName: dK.VV },
                        color: sk.$n.Colors.CUSTOM,
                        onClick: () => {
                            tt.default.track(S.HAw.PREMIUM_SETTINGS_INTERACTED, {
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
let dJ = function () {
        let e = (0, o3.Hp)(),
            { analyticsLocations: t } = (0, eP.Ay)(tL.A.PREMIUM_SETTINGS),
            n = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
            i = (0, h.bG)([ok.A], () => ok.A.getPremiumTypeSubscription()),
            l = (0, h.bG)([ok.A], () => ok.A.hasFetchedSubscriptions()),
            s = (0, da.Y)(tY.T7),
            [r, a] = E.useState(!0),
            o = (0, dr.A)({ forceFetch: !0 }),
            u = (0, h.bG)([ud.A], () => {
                let e = ud.A.getMarketingComponentByType(dn.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            d = !(og.Fr || og.v1) && null != u,
            c = E.useRef(null);
        (0, dS.i)();
        let g = (0, dh.m)();
        E.useEffect(() => {
            e4.h.wait(async () => {
                (e || (await Promise.all([or.hP(), or.$o(), (0, ds.zS)(null, null, S.tF5.DISCOVERY)])), a(!1));
            });
        }, [e]);
        let [m, p] = E.useState(!1);
        if (e) return (0, A.jsx)(oH.uK, {});
        let x = l && null !== i && s,
            T = o.fetched && o.isFractionalPremiumActive,
            f = n?.isPremiumWithPremiumGroup();
        if (!x && !T && !r && !f) return (0, A.jsx)(du.A, { title: R.intl.string(R.t.dyq9TR), note: null });
        if ((!x && !T && !f) || r) return (0, A.jsx)(oe.y, {});
        let I = !!i?.hasActiveTrial;
        return (0, A.jsx)(eP.f5, {
            value: t,
            children: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsxs)(Y.B, {
                        direction: "vertical",
                        gap: 40,
                        children: [
                            d && (0, A.jsx)(dA.m, { config: u }),
                            (0, A.jsx)(dQ, {}),
                            g && (0, A.jsx)(dk, {}),
                            !d && (0, A.jsx)(d$, {}),
                            (0, A.jsx)(dE.A, {
                                hideCTAs: !0,
                                headingOverride: R.intl.string(R.t.dnVvQS),
                                hidePill: !I,
                                selectedPlanColumnClassName: dK.JG,
                                selectedPlanTier: tY.PremiumTypes.TIER_2,
                            }),
                        ],
                    }),
                    (0, A.jsx)(di.L, {
                        innerRef: c,
                        onChange: (e) => {
                            e &&
                                !m &&
                                (tt.default.track(S.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: t,
                                }),
                                p(!0));
                        },
                        children: (0, A.jsx)("div", { ref: c, className: dK._Z }),
                    }),
                ],
            }),
        });
    },
    d0 = (0, d.E2)(c.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return (0, ai.YE)(e, tY.PremiumTypes.TIER_2) ? (0, A.jsx)(dJ, {}) : (0, A.jsx)(dt.A, {});
        },
        useSearchTerms: () => [R.intl.string(R.t.Ipxkog)],
    }),
    d1 = (0, d.zZ)(c.X.NITRO_CATEGORY, { buildLayout: () => [d0] }),
    d2 = (0, d.t_)(c.X.NITRO_PANEL, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        useObscuredNotice: a7.L,
        buildLayout: () => [d1],
    }),
    d3 = (0, d.i4)(c.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Ipxkog),
        icon: r1.t,
        usePersistentBadge: function (e) {
            let t = (0, de.e)(e);
            return E.useMemo(() => ({ badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [d2],
    });
var d5 = n(104510),
    d4 = n(820739),
    d6 = n(859241),
    d8 = n(527113),
    d7 = n(338548),
    d9 = n(776096),
    ce = n(711014),
    ct = n(178368),
    cn = n(809545),
    ci = n(168482);
function cl() {
    return (0, A.jsxs)("div", {
        className: cn.iE,
        children: [
            (0, A.jsx)("img", { className: cn.Kk, alt: "", src: ci }),
            (0, A.jsxs)("div", {
                className: cn.pq,
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
                    ((0, tJ.pX)(S.BVt.GUILD_DISCOVERY), (0, tU.default)());
                },
            }),
        ],
    });
}
var cs = n(365199),
    cr = n(878678),
    ca = n(443865),
    co = n(980707),
    cu = n(473145);
function cd(e) {
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
            a === tY.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = R.intl.string(R.t.LiLRRT)),
                (o.cancel.subtext = R.intl.string(R.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = E.useMemo(
        () =>
            s.isPausedOrPausePending && a === tY.xc.NONE
                ? (0, A.jsx)(e3.Dr, {
                      id: "manage-subscription",
                      label: R.intl.string(R.t.obRG6Y),
                      action: () => (0, nl.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: ca.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: ca.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, A.jsxs)(co.W, {
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
            (0, cu.I5)(t)
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
var cc = n(545934),
    cg = n(548118),
    cm = n(987144),
    cA = n(864310),
    cE = n(290413);
function ch(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, cA.A)(t.id);
    return (0, A.jsxs)("div", {
        className: n ?? cE.OA,
        children: [
            (0, A.jsx)(cg.Ay, { className: cE.$f, guild: t, size: cg.Ay.Sizes.MEDIUM }),
            (0, A.jsxs)("div", {
                className: cE.gI,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, A.jsxs)("div", {
                        className: cE.ew,
                        children: [
                            (0, A.jsxs)("div", {
                                className: cE.QW,
                                children: [
                                    (0, A.jsx)(d5._, {
                                        className: cE.Wz,
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
                                        (0, A.jsx)("div", { className: cE.zk }),
                                        (0, A.jsx)(H.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, cu.gb)(t.premiumTier, { useLevels: !1 }),
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
function cS(e) {
    let { guildId: t } = e,
        n = (0, h.bG)([lh.A], () => lh.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: cE.Nr,
              children: [
                  (0, A.jsx)(ch, { guild: n }),
                  (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: d5._,
                      text: R.intl.string(R.t.aBHecF),
                      onClick: () => {
                          (0, cm.g)({
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
var cp = n(747381);
let cx =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function cT(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = E.useRef(null),
        a = (0, cu.I5)(t),
        o = E.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, dr.A)(),
        c = E.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === S.TVA.NONE) return "";
                    let n = [
                        R.intl.formatToPlainString(R.t["dLlKX/"], { numEmojiSlots: tY.TG[e].limits.emoji }),
                        R.intl.formatToPlainString(R.t["+ANIfv"], { numStickerSlots: tY.TG[e].limits.stickers }),
                        R.intl.formatToPlainString(R.t["4gt60b"], {
                            numSoundboardSlots: tY.TG[e].limits.soundboardSounds,
                        }),
                        R.intl.formatToPlainString(R.t.XahSjZ, {
                            resolution: tY.TG[e].limits.screenShareQualityResolution,
                            framerate: tY.TG[e].limits.screenShareQualityFramerate,
                        }),
                        R.intl.formatToPlainString(R.t.NbNs7S, { bitrate: tY.TG[e].limits.bitrate / 1e3 }),
                        R.intl.formatToPlainString(R.t.VVKcpn, { filesize: tY.TG[e].limits.fileSize / 1024 / 1024 }),
                        R.intl.formatToPlainString(R.t.TbpCvv, { numVideoStageSeats: tY.TG[e].limits.stageVideoUsers }),
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
            let e = null != t.premiumGuildSubscription ? oc.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return R.intl.formatToPlainString(R.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = E.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        );
    return (0, A.jsxs)("div", {
        className: ir()(cp.iq, { [cp.Mt]: s }),
        children: [
            (0, A.jsxs)("div", {
                className: cp.kd,
                children: [
                    (0, A.jsx)("img", { alt: "", className: cp.bB, src: cx }),
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
                                              (0, A.jsx)("div", { className: cp.zk }),
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
                                              (0, A.jsx)("div", { className: cp.zk }),
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
            (0, A.jsx)(ae.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, A.jsx)(cd, {
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
                        className: cp.Mj,
                        ...e,
                        children: (0, A.jsx)(cs.MoreHorizontalIcon, {
                            size: "xs",
                            color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function cf(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, h.bG)([lh.A], () => lh.A.getGuild(t), [t]);
    return (0, A.jsxs)("div", {
        className: cp.Nr,
        children: [
            (0, A.jsx)("div", {
                className: cp.MY,
                children:
                    null != s
                        ? (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(ch, { guild: s, className: cp.OA }),
                                  (0, A.jsx)(_.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(R.t.KLOhbO),
                                      onClick: () => {
                                          ((0, tU.default)(),
                                              (0, cr.K4)({
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
                              className: cp.OA,
                              children: (0, A.jsx)(x.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: R.intl.string(R.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, A.jsx)(
                    cT,
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
function cI(e) {
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
                                cc.A.createFromServer(
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
                if ((!(0, cu.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    (e in s || (s[e] = []), s[e].push(i));
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > ai.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, A.jsx)("div", {
        className: cp.kR,
        children: oc.default
            .keys(s)
            .map((e) => (0, A.jsx)(cf, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var c_ = n(502572),
    cN = n(983511),
    cC = n(342744),
    cb = n(496431);
let cy = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, cb.A)(n);
    return (0, A.jsx)(H.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, iu.uN)(i, { days: R.t.WUTPDc, hours: R.t.c1qodV, minutes: R.t["2+A3dv"] }),
    });
};
var cv = n(731536);
function cj(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, h.bG)([ok.A], () => ok.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = E.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) (!(0, cu.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i));
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? ai.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === tY.xc.NONE;
    return 0 === s.length
        ? null
        : (0, A.jsxs)("div", {
              className: cv.Nr,
              children: [
                  (0, A.jsxs)("div", {
                      className: cv.MY,
                      children: [
                          (0, A.jsxs)("div", {
                              className: cv._L,
                              children: [
                                  (0, A.jsxs)("div", {
                                      className: cv.MD,
                                      children: [
                                          (0, A.jsx)("img", { alt: "", className: cv.F8, src: cx }),
                                          (0, A.jsx)("div", {
                                              className: ir()(cv.qS, "theme-dark"),
                                              children: (0, A.jsx)("span", { className: cv.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsxs)("div", {
                                      className: cv.Qp,
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
                          (0, A.jsx)(c_.A, {
                              shouldShow: o,
                              text: R.intl.string(R.t.mOWsF1),
                              "aria-label": R.intl.string(R.t.mOWsF1),
                              children: (e) =>
                                  (0, A.jsx)(_.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: d5._,
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
                                                              (0, cm.g)({
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
                          cO,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, cu.I5)(e),
                              isCanceled: (0, cu.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function cO(e) {
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
              ? (0, A.jsx)(cy, { cooldown: u.getTime() })
              : (0, A.jsx)(H.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R.intl.string(R.t["2mcafz"]),
                });
    let d = l || s;
    return (0, A.jsxs)("div", {
        className: ir()(cv.iq, { [cv.Mt]: i }),
        children: [
            (0, A.jsxs)("div", {
                className: cv.kd,
                children: [(0, A.jsx)("img", { alt: "", className: cv.bB, src: cx }), t],
            }),
            d &&
                (0, A.jsx)(ae.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, A.jsxs)(co.W, {
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
                                                        (0, A.jsx)(cN.default, { ...e, guildBoostSlot: n }),
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
                                                        (0, A.jsx)(cC.default, { ...e, guildBoostSlotId: n.id }),
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
                            className: cv.Mj,
                            ...e,
                            children: (0, A.jsx)(cs.MoreHorizontalIcon, {
                                size: "xs",
                                color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var cL = n(834612);
function cR(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && s !== tY.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, A.jsxs)("div", {
              className: cL.i,
              children: [
                  (0, A.jsxs)("div", {
                      className: cL.b,
                      children: [
                          (0, A.jsx)(x.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.W5rDjW) }),
                          (0, A.jsx)(H.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: R.intl.format(R.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(cI, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, A.jsx)(cj, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var cD = n(333722),
    cP = n(9146);
function cG() {
    return (0, A.jsxs)("div", {
        className: cP.iE,
        children: [
            (0, A.jsx)(x.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.IzKs3o) }),
            (0, A.jsx)("div", {
                className: cP.kR,
                children: cD.s.map((e, t) => {
                    let n = e.icon;
                    return (0, A.jsxs)(
                        "div",
                        {
                            className: cP.Nr,
                            children: [
                                (0, A.jsx)(n, { className: cP.Kk }),
                                (0, A.jsx)(H.E, {
                                    className: cP.h_,
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
var cM = n(847374),
    cU = n(232122),
    cV = n(665984);
function ck() {
    let [e, t] = E.useState(null),
        [n, i] = E.useState(null);
    return (0, A.jsxs)("div", {
        className: cV.iE,
        children: [
            (0, A.jsx)(x.D, { variant: "heading-xl/normal", children: R.intl.string(R.t.HPJ6Nj) }),
            (0, A.jsx)("ul", {
                className: cV.p_,
                children: cU.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, A.jsxs)(
                        n0.D,
                        {
                            tag: "li",
                            className: ir()(cV.Aw, { [cV.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, A.jsxs)("div", {
                                    className: cV.k7,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            className: cV.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, A.jsx)(cM.a, {
                                            size: "sm",
                                            color: nQ.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: cV.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsx)(H.E, {
                                        className: cV.ZF,
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
var cw = n(182859),
    cF = n(25525),
    cB = n(416763);
function cz() {
    let e = eT.A.getArticleURL(S.MVz.GUILD_SUBSCRIPTIONS);
    return (0, A.jsxs)("div", {
        className: cB.wx,
        children: [
            (0, A.jsxs)("div", {
                className: cB.Qs,
                children: [
                    (0, A.jsxs)("div", {
                        className: cB.B5,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: cB.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, A.jsx)(x.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(cF.default.hjvcLO),
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
            (0, A.jsx)(cw.A, {
                variant: "member",
                className: cB.iO,
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
var cY = n(315629),
    cX = n(87719),
    cH = n(961085);
function cK() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
    if (null == e || ai.Ay.hasFreeBoosts(e)) return null;
    let t = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(cY.h, {
        color: "nitro-pink",
        className: cH.vK,
        children: [
            (0, A.jsxs)("div", {
                className: cH.nw,
                children: [
                    (0, A.jsx)("img", { alt: "", className: cH.q3, src: cx }),
                    (0, A.jsxs)("div", {
                        className: cH.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.Idh1Vs, { count: tY.M4, boostCount: tY.M4 }),
                            }),
                            (0, A.jsxs)("div", {
                                className: cH.xv,
                                children: [
                                    (0, A.jsx)(r1.t, { className: cH.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tY.M4,
                                            boostCount: tY.M4,
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
                icon: r1.t,
                text: R.intl.string(R.t["8x0jKT"]),
                onClick: cX.e,
            }),
        ],
    });
}
var cW = n(532991);
function cZ() {
    let e = (0, h.bG)([d9.A], () => d9.A.affinities),
        t = (0, h.bG)([ce.Ay], () => ce.Ay.getFlattenedGuildIds()),
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
              className: cW.i,
              children: [
                  (0, A.jsx)(x.D, { variant: "heading-md/semibold", children: R.intl.string(R.t.r90Wgo) }),
                  (0, A.jsx)("div", { className: cW.k, children: n.map((e) => (0, A.jsx)(cS, { guildId: e }, e)) }),
              ],
          });
}
var cq = n(967246);
function cQ(e) {
    let { count: t, disabledReason: i } = e,
        l = eT.A.getArticleURL(S.MVz.GUILD_BOOSTING_FAQ);
    return (0, A.jsxs)(cY.h, {
        color: "nitro-pink",
        className: cq.vK,
        children: [
            (0, A.jsxs)("div", {
                className: cq.nw,
                children: [
                    (0, A.jsxs)("div", {
                        className: cq.MD,
                        children: [
                            (0, A.jsx)("img", { alt: "", className: cq.F8, src: cx }),
                            (0, A.jsx)("div", {
                                className: ir()(cq.qS, "theme-dark"),
                                children: (0, A.jsx)("span", { className: cq.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: cq.Tm,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.format(R.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, A.jsxs)("div", {
                                className: cq.xv,
                                children: [
                                    (0, A.jsx)(r1.t, { className: cq.nE }),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: R.intl.format(R.t["6UAu+f"], {
                                            count: tY.M4,
                                            boostCount: tY.M4,
                                            helpdeskArticle: l,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)(c_.A, {
                shouldShow: null != i,
                text: i ?? "",
                "aria-label": i,
                children: (e) =>
                    (0, A.jsx)(_.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: d5._,
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
                                                (0, cm.g)({
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
var c$ = n(89150);
function cJ(e) {
    let { premiumSubscription: t } = e,
        n = (0, h.bG)([ct.A], () => ct.A.boostSlots),
        i = E.useMemo(() => Object.values(n), [n]),
        l = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        s = (0, h.bG)([d9.A], () => d9.A.affinities),
        r = (0, h.bG)([ce.Ay], () => ce.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = E.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]).length,
        u = (0, h.bG)([d6.A], () => d6.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, dr.A)({ forceFetch: !0 }),
        c = l?.isPremiumGroupMember(),
        g = t?.isPausedOrPausePending === !0 && d === tY.xc.NONE,
        m = E.useMemo(() => i.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [i]),
        S = g ? R.intl.string(R.t.mOWsF1) : m ? void 0 : R.intl.string(R.t.xr4m5B),
        p = E.useMemo(() => {
            if (null == t) return 0;
            let e = ai.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : Math.max(0, e - o);
        }, [t, i.length, o]);
    return (0, A.jsxs)("div", {
        className: c$.GO,
        children: [
            (0, A.jsx)(oH.kb, { className: c$.ek }),
            (0, A.jsx)(cz, {}),
            (0, A.jsx)(cK, {}),
            p > 0 && (0, A.jsx)(cQ, { count: p, disabledReason: S }),
            c && (0, A.jsx)(d7.A, {}),
            !a && (0, A.jsx)(cl, {}),
            (0, A.jsxs)("div", {
                className: c$.C_,
                children: [
                    (0, A.jsx)(cR, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, A.jsx)(cZ, {}),
                    (0, A.jsx)(d8.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, A.jsx)(cG, {}),
                    (0, A.jsx)(ck, {}),
                ],
            }),
        ],
    });
}
var c0 = n(819677);
let c1 = (0, d.E2)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            E.useEffect(() => {
                e4.h.wait(() => {
                    (or.hP(), or.$o(), (0, d4.CD)(), (0, ds.zS)(null, null, S.tF5.DISCOVERY), (0, d4.tO)(!0));
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, h.cf)([ok.A], () => ({
                    hasFetchedSubscriptions: ok.A.hasFetchedSubscriptions(),
                    premiumSubscription: ok.A.getPremiumTypeSubscription(),
                })),
                n = (0, da.Y)(),
                i = (0, h.bG)([oV.A], () => oV.A.hasFetchedPaymentSources),
                l = (0, h.bG)([d6.A], () => d6.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = E.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, A.jsx)("div", { className: ir()(c0.kL, c0.Lq), children: (0, A.jsx)(oe.y, {}) })
                : (0, A.jsxs)("div", {
                      className: c0.kL,
                      children: [
                          (0, A.jsx)("div", { className: c0.Tp }),
                          (0, A.jsx)("div", { className: c0.Qs, children: (0, A.jsx)(cJ, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t["+CbP2v"]), R.intl.string(R.t.Nn1lJy)],
    }),
    c2 = (0, d.zZ)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [c1] }),
    c3 = (0, d.t_)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        buildLayout: () => [c2],
    }),
    c5 = (0, d.i4)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["+CbP2v"]),
        icon: d5._,
        buildLayout: () => [c3],
    });
var c4 = n(153659),
    c6 = n(155984),
    c8 = n(357758),
    c7 = n(262077),
    c9 = n(281445),
    ge = n(933832),
    gt = n(624479),
    gn = n(626584),
    gi = n(131607),
    gl = n(95035),
    gs = n(196736),
    gr = n(685743),
    ga = n(349085),
    go = n(342942),
    gu = n(376205),
    gd = n(252589),
    gc = n(758836),
    gg = n(49999),
    gm = n(394107),
    gA = n(439050);
let gE = new gn.A("GameServerSubscriptionsSection");
function gh(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function gS(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let gp = E.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, ga.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, gi.kn)([eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== eu.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        c = uC.default.getId() ?? "0",
        { handleCopyServerIp: g, animateCopyIcon: m } = (0, gr.A)(c, t.id, tL.A.GAME_SERVER_PAGE, t.serverIp),
        p = E.useCallback(() => {
            (0, go.A)({
                provider: c9.X.SHOCKBYTE,
                onAccept: () => {
                    (u(gg.i.TAKE_ACTION), g());
                },
            });
        }, [u, g]),
        {
            hasSubscription: x,
            priceLabel: T,
            dateLabel: f,
            isCanceled: I,
            isDanger: N,
        } = (0, h.bG)(
            [ok.A, uy.A],
            () => {
                let e = null != s ? ok.A.getSubscriptionById(s) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? uy.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? R.intl.formatToPlainString(R.t.AbOLNu, { price: (0, dc.$g)(u, o.priceCurrency) })
                            : null,
                    c = gh(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? R.intl.formatToPlainString(gm.default["3aEgK6"], { date: c })
                        : l
                          ? R.intl.formatToPlainString(gm.default.KFSA3M, { date: c })
                          : R.intl.formatToPlainString(gm.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, n, i],
            gS,
        ),
        C = E.useCallback(() => {
            if (null == s) return;
            let e = ok.A.getSubscriptionById(s),
                t = null != e ? gh(e.currentPeriodEnd) : "";
            (0, n$.A)({
                title: R.intl.string(gm.default.TEYPNR),
                subtitle: R.intl.formatToPlainString(gm.default.XR1WrB, { date: t }),
                confirmText: R.intl.string(R.t["cY+Oob"]),
                cancelText: R.intl.string(gm.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        (await or.M2(s, l), await or.hP());
                    } catch (e) {
                        gE.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        b = E.useCallback(() => {
            if (null == s) return;
            let e = ok.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? uy.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, dc.$g)(u, o.priceCurrency) : "",
                c = gh(e.currentPeriodEnd);
            (0, n$.A)({
                title: R.intl.string(gm.default.o96qbc),
                subtitle: R.intl.formatToPlainString(gm.default["7n6Qq+"], { price: d, date: c }),
                confirmText: R.intl.string(R.t.iIvF2z),
                cancelText: R.intl.string(R.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, ds.ur)(r);
                        let t = e.items;
                        (await or.nV(
                            e,
                            { status: S.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, ai.UC)(t, e.currency),
                            l,
                        ),
                            await or.hP());
                    } catch (e) {
                        gE.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, A.jsxs)("div", {
        className: gA.nM,
        children: [
            (0, A.jsxs)("div", {
                className: gA.M4,
                children: [
                    (0, A.jsxs)("div", {
                        className: gA.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, A.jsx)("img", { className: gA.uP, src: a, alt: "" }),
                            (0, A.jsx)("div", { className: gA.tw }),
                        ],
                    }),
                    (0, A.jsxs)("div", {
                        className: gA.CR,
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
                                          className: gA.CQ,
                                          children: [
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, A.jsx)(n0.D, {
                                                  className: gA.cL,
                                                  onClick: g,
                                                  "aria-label": R.intl.string(R.t.OpuAlK),
                                                  children: m
                                                      ? (0, A.jsx)(ge.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, A.jsx)(gt.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, A.jsx)(gl.A, { onClick: p, children: R.intl.string(gm.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, A.jsxs)("div", {
                className: gA.Rd,
                children: [
                    (0, A.jsxs)("div", {
                        className: gA.Ff,
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
                                          className: gA.ez,
                                          children: [
                                              (0, A.jsx)(iX.E, { size: "xs", color: "text-feedback-critical" }),
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
                    x &&
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
function gx(e) {
    let { servers: t } = e,
        n = (0, gs.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, gd.Y)(),
        l = (0, h.bG)([si.default], () => ai.Ay.canUseShopDiscounts(si.default.getCurrentUser())),
        s = E.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, h.yK)([ok.A], () => (0, gu.HY)(t, i, (e) => ok.A.getSubscriptionById(e)), [t, i]);
    E.useEffect(() => {
        let e = r.filter((e) => !uy.A.isLoadedForSKU(e) && !uy.A.isFetchingForSKU(e));
        e.length > 0 && (0, ds.jv)(e).catch(() => {});
    }, [r]);
    let a = E.useCallback(() => {
        ((0, tU.default)(), (0, tJ.pX)(S.BVt.COLLECTIBLES_SHOP_WITH_TAB(gc.G2.GAME_SERVERS)));
    }, []);
    return (0, A.jsxs)("div", {
        className: gA.uW,
        children: [
            (0, A.jsxs)("div", {
                className: gA.wx,
                children: [
                    (0, A.jsx)(H.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: R.intl.string(gm.default.vCzwM7),
                    }),
                    (0, A.jsxs)("div", {
                        className: gA.h_,
                        children: [
                            (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: R.intl.string(gm.default.y85Eg9),
                            }),
                            n &&
                                (0, A.jsx)(gl.A, {
                                    onClick: a,
                                    children: (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: R.intl.string(gm.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", {
                className: gA.p_,
                children: t.map((e) =>
                    (0, A.jsx)(gp, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var gT = n(55766),
    gf = n(696986),
    gI = n(364036);
function g_(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(x.D, { variant: "heading-md/bold", children: R.intl.string(R.t["KzCF/6"]) }),
            (0, A.jsx)(gf.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: gI.yV, children: R.intl.string(R.t["3D7qCu"]) }),
            (0, A.jsx)(gf.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: gI.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: gI.RI }),
                    (0, A.jsxs)("div", {
                        className: gI.FS,
                        children: [
                            (0, A.jsx)(x.D, {
                                variant: "heading-xl/semibold",
                                className: gI.wx,
                                children: R.intl.string(R.t["KzCF/6"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: gI.h_,
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
var gN = n(872351),
    gC = n(9113),
    gb = n(599941),
    gy = n(384684),
    gv = n(2242);
let gj = [];
var gO = n(885574),
    gL = n(912851),
    gR = n(182744);
let gD = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, A.jsx)(n0.D, {
        onClick: i ? void 0 : n,
        className: gR.x6,
        children: (0, A.jsxs)("div", {
            className: gR.hQ,
            children: [
                i
                    ? (0, A.jsx)(oe.y, { type: oe.y.Type.PULSING_ELLIPSIS, className: gR.__invalid_spinner })
                    : (0, A.jsx)(H.E, { variant: "text-md/medium", className: gR.Pf, children: t }),
                (0, A.jsx)(cM.a, { size: "md", color: "currentColor", className: gR.UE }),
            ],
        }),
    });
};
var gP = n(465932),
    gG = n(543767),
    gM = n(951555),
    gU = n(790284),
    gV = n(636194),
    gk = n(624456),
    gw = n(710144),
    gF = n(815332),
    gB = n(162093),
    gz = n(557506);
function gY(e) {
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
                        return (n(!0), await or.M2(t, e), !0);
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
    let g = i.role_benefits.benefits.filter((e) => e.ref_type === gv.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === gv.bN.INTANGIBLE),
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
        children: (0, A.jsxs)(Y.B, {
            gap: 8,
            children: [
                null != u ? (0, A.jsx)(iz.w, { type: "critical", children: u.message }) : null,
                (0, A.jsx)(gB.x, { listingId: i.id, guildId: n.guild_id, className: gz.P }),
            ],
        }),
    });
}
var gX = n(319225),
    gH = n(746080),
    gK = n(883616);
function gW(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, A.jsxs)("div", {
        className: gK.L0,
        children: [
            (0, A.jsxs)("div", {
                className: gK.a5,
                children: [
                    (0, A.jsx)(x.D, { variant: "heading-deprecated-12/semibold", className: gK.HU, children: t }),
                    i &&
                        (0, A.jsx)(lt.m, {
                            text: l,
                            children: (0, A.jsx)(gO.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: gK.Mo,
                            }),
                        }),
                ],
            }),
            (0, A.jsx)(x.D, { variant: "heading-xl/semibold", className: gK.sx, children: n }),
        ],
    });
}
function gZ(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eP.Ay)(),
        [i] = (0, gG.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tL.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        [l, s] = (0, h.yK)([oV.A], () => [oV.A.hasFetchedPaymentSources, oV.A.paymentSourceFetchError]);
    return null != i && (l || s)
        ? (0, A.jsx)(gM.A, { subscription: t, currentInvoicePreview: i })
        : (0, A.jsx)(oe.y, {});
}
function gq(e) {
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
                  className: gK.__invalid_rowButtons,
                  children: n
                      ? (0, A.jsx)(_.$, { variant: "primary", text: R.intl.string(R.t.y3mAE4), onClick: r, loading: i })
                      : (0, A.jsxs)(A.Fragment, {
                            children: [
                                !t && !l && (0, A.jsx)(gD, { label: R.intl.string(R.t.FRbWR8), onClick: a }),
                                (0, A.jsx)(gD, { label: R.intl.string(R.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let gQ = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, gk.M)(e),
                n = (0, h.bG)([gV.A], () => gV.A.getSubscriptionListingForPlan(t)),
                i = (0, h.bG)([gV.A], () =>
                    null != n ? gV.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, h.bG)([lh.A], () => lh.A.getGuild(i?.guild_id)),
                [s, r] = E.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, gb.XE)();
            E.useEffect(() => {
                s && null != l && null == gV.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = io()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, dc.$g)(t.price, t.currency) : "",
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
        { shouldHideGuildPurchaseEntryPoints: m } = (0, gP.MH)(l?.id),
        p = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function x() {
        try {
            (u(!0),
                await or.QP(t, g),
                (0, gX.E)({ title: R.intl.string(R.t.oPV2cy), body: R.intl.string(R.t.DdRizV) }));
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
        y = n.soft_deleted || null == l || p;
    return (0, A.jsxs)("div", {
        className: gK.kL,
        children: [
            (0, A.jsx)(gw.A, {
                onClick: r,
                className: gK.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, A.jsxs)(A.Fragment, {
                        children: [
                            null != l && (0, A.jsx)(cg.Ay, { guild: l, active: !0, size: cg.Ay.Sizes.MEDIUM }),
                            (0, A.jsxs)("div", {
                                className: gK.if,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        className: gK.J5,
                                        children: null != l ? l.name : R.intl.string(R.t["He+cmd"]),
                                    }),
                                    (0, A.jsxs)("div", {
                                        className: gK.xp,
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-sm/normal",
                                                className: gK.KR,
                                                children: n.name,
                                            }),
                                            T
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
                                                                  className: gK.qc,
                                                                  text: R.intl.string(R.t.NrRwIl),
                                                                  color: nQ.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            p
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
                                children: (0, A.jsx)(cM.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ir()(gK.D6, { [gK.S7]: s }),
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
                          (0, A.jsx)("div", { className: gK.yF }),
                          (0, A.jsx)(gF.A, { groupListingId: i.id, subscription: t, className: gK.kE }),
                          (0, A.jsxs)("div", {
                              className: gK.Zx,
                              children: [
                                  (0, A.jsx)(gW, { label: C, value: N }),
                                  (0, A.jsx)(gW, {
                                      label: R.intl.string(R.t.dltUMH),
                                      value: I,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? R.intl.string(R.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, A.jsx)(gW, { label: R.intl.string(R.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, A.jsx)(gf.h, { size: 16 }),
                          !T &&
                              !p &&
                              (0, A.jsx)(tQ.D, {
                                  label: R.intl.string(R.t.wmMFvA),
                                  children: (0, A.jsx)(gZ, { subscription: t }),
                              }),
                          !y &&
                              (0, A.jsx)(gq, {
                                  isTrial: b,
                                  isCancelled: T,
                                  isResubscribing: o,
                                  shouldHideRoleSubscriptionEntryPoints: m,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          ((e = { groupListing: i, listing: n, subscription: t }),
                                              (0, la.openModal)((t) => (0, A.jsx)(gY, { ...t, ...e })));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, tJ.pX)(S.BVt.CHANNEL(l.id, gH.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tU.default)(),
                                          gL.A.show(
                                              S.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              R.intl.string(R.t.DvbaM4),
                                              () => {
                                                  (gU.A.setState({ subsection: eC.nR }),
                                                      (0, nl.openUserSettings)(c.X.SUBSCRIPTIONS_PANEL));
                                              },
                                          ));
                                  },
                                  onResubscribeClick: x,
                              }),
                      ],
                  })
                : null,
        ],
    });
};
var g$ = n(661097);
let gJ = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, h.bG)([gy.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [gy.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? gv.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? gv.M_.NONE
                                  : gv.M_.IN_SUBSCRIPTION_SERVER;
                        })([gy.A]),
                    ) === gv.M_.SUBSCRIBED,
                n = (0, h.bG)([ok.A], () => ok.A.getActiveGuildSubscriptions()),
                i = E.useRef(!1);
            return (
                E.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = ok.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !ok.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), or.hP());
                }, [e, t]),
                n ?? gj
            );
        })(),
        { loading: i } = (0, gb.eb)(n);
    return ((0, gC.A)(og.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, A.jsx)(oe.y, {})
        : 0 === n.length
          ? null
          : (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(_.$, { text: R.intl.string(R.t.hqyhKQ), icon: gN.z, variant: "secondary", onClick: t }),
                    (0, A.jsx)(gf.h, { size: 10 }),
                    (0, A.jsx)(nJ.n, {
                        label: R.intl.string(R.t["KzCF/6"]),
                        description: R.intl.string(R.t["Y+ucR7"]),
                        children: (0, A.jsx)("div", {
                            className: g$.A,
                            children: n.map((e) => (0, A.jsx)(gQ, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var g0 = n(327479),
    g1 = n(932012);
function g2(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)(x.D, { variant: "heading-md/bold", children: R.intl.string(R.t["48ywCu"]) }),
            (0, A.jsx)(gf.h, { size: 4 }),
            (0, A.jsx)(H.E, { variant: "text-md/normal", className: g1.yV, children: R.intl.string(R.t.VWxmSo) }),
            (0, A.jsx)(gf.h, { size: 24 }),
            (0, A.jsxs)("div", {
                className: g1.Nr,
                children: [
                    (0, A.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: g1._e }),
                    (0, A.jsxs)("div", {
                        className: g1.FS,
                        children: [
                            (0, A.jsx)(x.D, {
                                variant: "heading-xl/semibold",
                                className: g1.wx,
                                children: R.intl.string(R.t["48ywCu"]),
                            }),
                            (0, A.jsx)(H.E, {
                                variant: "text-md/normal",
                                className: g1.h_,
                                children: R.intl.format(R.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(g0.A, { onClick: t, text: R.intl.string(R.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var g3 = n(548411),
    g5 = n(417098),
    g4 = n(143582),
    g6 = n(915043),
    g8 = n(631466);
function g7(e) {
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
        className: ir()(g8.iE, t),
        children: [
            (0, A.jsx)("div", { className: ir()(g8.wx, i), children: n }),
            s && (0, A.jsx)("div", { className: g8.Qs, children: l }),
        ],
    });
}
var g9 = n(885996),
    me = n(144165),
    mt = n(664121),
    mn = n(950305),
    mi = n(943775),
    ml = n(123791),
    ms = n(900797),
    mr = n(611643);
let ma = E.createContext({ isOpen: !1, toggleOpen: () => {} });
function mo(e) {
    let { children: t } = e,
        [n, i] = E.useReducer((e) => !e, !1),
        l = E.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, A.jsx)(ma.Provider, { value: l, children: t(n) });
}
mo.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = E.useContext(ma),
        s = i ? ms.t : cM.a,
        r = null != n ? n : i ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.XJuakA);
    return (0, A.jsxs)(n0.D, {
        className: ir()(mr.L, t),
        onClick: l,
        children: [
            (0, A.jsx)(H.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, A.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var mu = n(627363),
    md = n(243217),
    mc = n(328968),
    mg = n(163437),
    mm = n(3432);
function mA(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var mE = n(562312),
    mh = (((l = {})[(l.LOADING = 0)] = "LOADING"), (l[(l.DONE = 1)] = "DONE"), (l[(l.ERROR = 2)] = "ERROR"), l);
function mS(e) {
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
            isOrphanedGuildSubscription: p,
            renewalPlan: T,
        } = (0, h.cf)(
            [uy.A, uv.A, mc.A, lh.A],
            () => {
                let e,
                    n = uy.A.get(r),
                    i = null != n ? uv.A.get(n.skuId) : void 0,
                    a = i?.applicationId,
                    o = null != n ? mc.A.getForSKU(n.skuId) : null,
                    u = null != o && (0, mg.PJ)(o.skuFlags),
                    d = u && null != l ? lh.A.getGuild(l) : void 0,
                    c = (0, mg.Uo)(t, i),
                    g = u && null != l && null == d;
                if (!1 === c && null != s && s.items.length > 0) {
                    let t = s.items[0];
                    e = uy.A.get(t.planId) ?? void 0;
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
        { data: f } = (0, mu.YY)(a),
        I = E.useMemo(() => (null != f ? (0, mi.A)(f, 100) : null), [f]),
        _ = g?.deleted ?? !1,
        N = null != g && (0, mg.Se)(g),
        C = t.status === S.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eP.Ay)(),
        [y] = (0, gG.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tL.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = mA(t.currentPeriodEnd),
        j = 0 === i;
    return (0, A.jsxs)(g7, {
        headerClassName: mE.dL,
        header:
            !1 === j
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsxs)("div", {
                              className: mE.VW,
                              children: [
                                  null != I &&
                                      (0, A.jsx)(me._, { src: I.href, imageClassName: mE.Z2, width: 40, height: 40 }),
                                  (0, A.jsxs)("div", {
                                      className: mE.aF,
                                      children: [
                                          (0, A.jsx)(x.D, {
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
                              className: mE.Pz,
                              children:
                                  null != f &&
                                  null != u &&
                                  null != g &&
                                  (0, A.jsx)(mI, {
                                      subscription: t,
                                      app: f,
                                      guild: c,
                                      sku: g,
                                      storeListing: u,
                                      isCancelled: m,
                                      isOrphanedGuildSubscription: p,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: T?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, A.jsx)(oe.y, { type: oe.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, A.jsx)(mf, {
                    type: "warning",
                    title: N
                        ? R.intl.formatToPlainString(R.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : R.intl.formatToPlainString(R.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !m && p && (0, A.jsx)(mf, { type: "warning", title: R.intl.string(R.t.SmSP8Q) }),
            C && (0, A.jsx)(mf, { type: "danger", title: R.intl.string(R.t.fvOqBo) }),
            (0, A.jsxs)("div", {
                className: mE.zH,
                children: [
                    (0, A.jsx)(mT, {
                        title: R.intl.string(R.t["5D/KEH"]),
                        content: d
                            ? (0, A.jsxs)(A.Fragment, {
                                  children: [
                                      (0, A.jsxs)("span", {
                                          className: mE.yW,
                                          children: [(0, A.jsx)(mt.R, { size: "xs" }), R.intl.string(R.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, A.jsxs)("span", {
                                              className: mE._t,
                                              children: [
                                                  (0, A.jsx)(H.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: R.intl.format(R.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, A.jsx)(cg.Ay, { guild: c, size: cg.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, A.jsxs)("span", {
                                  className: mE.yW,
                                  children: [(0, A.jsx)(mn.UserIcon, { size: "xs" }), R.intl.string(R.t["6anEVv"])],
                              }),
                    }),
                    (0, A.jsx)(mp, { invoicePreview: y, subscriptionPlan: o }),
                    (0, A.jsx)(mT, {
                        title: R.intl.string(R.t.dnUzb6),
                        content: mA(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, A.jsx)(mx, { isCancelled: m, subscriptionPeriodEnd: v, renewalPlan: T }),
                ],
            }),
            (0, A.jsx)(mN, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: _,
                isCancelled: m,
            }),
            null != f &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, A.jsx)(m_, { appId: f.id, listingBenefits: u.benefits }),
        ],
    });
}
function mp(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, A.jsx)(mT, { title: R.intl.string(R.t.KI7ERx), content: "" });
    let i = (0, dc.CE)((0, dc.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, A.jsx)(mT, { title: R.intl.string(R.t.KI7ERx), content: i });
    let s = (0, dc.CE)((0, dc.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, A.jsx)(mT, {
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
function mx(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, dc.CE)((0, dc.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, A.jsx)(mT, {
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
    return (0, A.jsx)(mT, { title: t ? R.intl.string(R.t.enxcAl) : R.intl.string(R.t["Ms+6Zq"]), content: n });
}
function mT(e) {
    let { title: t, content: n } = e;
    return (0, A.jsxs)("div", {
        className: mE.nM,
        children: [
            (0, A.jsx)(H.E, { variant: "text-sm/medium", children: t }),
            (0, A.jsx)(H.E, { variant: "text-sm/medium", className: mE.u4, children: n }),
        ],
    });
}
function mf(e) {
    let { type: t, title: n } = e;
    return (0, A.jsx)(r2.p, {
        messageType: "warning" === t ? r2.Y.WARNING : r2.Y.ERROR,
        className: mE.Xm,
        children: (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
    });
}
function mI(e) {
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
        c = (0, mg.Se)(l),
        { analyticsLocations: g } = (0, eP.Ay)(),
        [m, S] = E.useState(!1),
        p = (0, ml.C)(t.id),
        x = (0, h.bG)([uv.A], () => uv.A.getParentSKU(i.skuId), [i.skuId]),
        T = E.useMemo(() => {
            var e, t;
            let n;
            return null == x
                ? []
                : ((e = i.id),
                  (t = p.subscriptions),
                  (n = new Set(x.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, p, x]),
        f = 0 !== T.length;
    async function I() {
        try {
            S(!0);
            let { subscription: e } = await (0, or.QP)(s, g);
            if (null == e) return;
            (0, la.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, A.jsx)(t, { ...n, storeListing: i, subscription: md.A.createFromServer(e) });
            });
        } finally {
            S(!1);
        }
    }
    return (0, A.jsxs)("div", {
        className: mE.fw,
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
                null != x &&
                !1 === r &&
                !1 === a &&
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: s,
                            alternativeListings: T,
                            app: t,
                            subscriptionGroup: x,
                            currentListing: i,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function m_(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, A.jsx)(mo, {
        children: (e) =>
            (0, A.jsxs)("div", {
                className: mE.PX,
                children: [
                    (0, A.jsxs)("div", {
                        className: mE.wV,
                        children: [
                            e && (0, A.jsx)(H.E, { variant: "text-sm/semibold", children: R.intl.string(R.t.mORL67) }),
                            (0, A.jsx)(mo.Toggle, {
                                className: mE.Bh,
                                text: e ? R.intl.string(R.t.gsbFAw) : R.intl.string(R.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, A.jsx)(g9.FY, { header: i, icon: (0, mm.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function mN(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, A.jsx)("div", {
                className: mE.Ji,
                children: (0, A.jsx)(tQ.D, {
                    label: R.intl.string(R.t.azZaZa),
                    children: (0, A.jsx)(oe.y, { type: oe.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, A.jsx)("div", {
                  className: mE.Ji,
                  children: (0, A.jsxs)(g5.$T, {
                      color: g5.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          R.intl.format(R.t.IIHUUF, { subscriptionId: t.id }),
                          (0, A.jsx)("br", {}),
                          R.intl.format(R.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, A.jsx)("div", {
                  className: mE.Ji,
                  children: (0, A.jsx)(tQ.D, {
                      label: R.intl.string(R.t.azZaZa),
                      children: (0, A.jsx)(gM.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var mC = (((s = {}).HOME = "HOME"), (s.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), s);
n(938796);
var mb = n(38405);
let my = (0, h.UT)(uy.A, {
    getQueryId: S.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = uy.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && mb.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, ds.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var mv = n(240248),
    mj = n(237218),
    mO = n(763064);
function mL(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = E.useState(!1),
        [r, a] = E.useState(null),
        o =
            null != r &&
            (0, A.jsx)("button", {
                className: mO.x6,
                onClick: () => s((e) => !e),
                children: (0, A.jsxs)(H.E, {
                    className: mO.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? R.intl.string(R.t["JQX/Pb"]) : R.intl.string(R.t.Fbrd8J),
                        l
                            ? (0, A.jsx)(ms.t, { color: nQ.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, A.jsx)(cM.a, { color: nQ.A.colors.TEXT_BRAND, size: "xs" }),
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
                    className: mO.Qs,
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
var mR = n(920352);
function mD(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = E.useMemo(() => (null == n.thumbnail ? null : (0, mj.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = my(n.skuId),
        u = E.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dc._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, A.jsxs)(g7, {
              className: ir()(mR.iE, i),
              header: (0, A.jsxs)(A.Fragment, {
                  children: [
                      (0, A.jsxs)("div", {
                          className: mR.qd,
                          children: [
                              null != a &&
                                  (0, A.jsx)(me._, { src: a.href, imageClassName: mR.rW, width: 48, height: 48 }),
                              (0, A.jsxs)("div", {
                                  children: [
                                      (0, A.jsx)(x.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, A.jsx)(H.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, mv.uJ)(r) &&
                      (0, A.jsx)("div", {
                          className: mR.h_,
                          children: (0, A.jsx)(mL, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, A.jsx)("div", {
                          className: mR.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, A.jsx)(g9.FY, { header: n, icon: (0, mm.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var mP = n(185438),
    mG = n(683380);
function mM(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, mi.A)(t, 100),
        u = (0, mg.PJ)(r.flags),
        d = u ? mt.R : mn.UserIcon,
        c = u ? R.intl.string(R.t["46YF2D"]) : R.intl.string(R.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, h.bG)([lh.A], () => (u && null != g ? lh.A.getGuild(g) : void 0), [g, u]),
        E = (0, h.bG)(
            [uv.A],
            () => {
                if (null != a) return uv.A.get(a);
            },
            [a],
        ),
        S = mA(n.currentPeriodEnd);
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsxs)("div", {
                className: mG.wx,
                children: [
                    null != o && (0, A.jsx)(me._, { src: o.href, imageClassName: mG.Z2, width: 48, height: 48 }),
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)(x.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, A.jsxs)("div", {
                                className: mG.p4,
                                children: [
                                    (0, A.jsxs)(x.D, {
                                        variant: "heading-md/normal",
                                        className: mG.N4,
                                        children: [(0, A.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, A.jsxs)(A.Fragment, {
                                            children: [
                                                (0, A.jsx)(H.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, A.jsxs)("span", {
                                                    className: mG.vP,
                                                    children: [
                                                        (0, A.jsx)(cg.Ay, { guild: m, size: cg.Ay.Sizes.SMOL }),
                                                        (0, A.jsx)(x.D, {
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
            (0, A.jsx)(mo, {
                children: (e) =>
                    (0, A.jsxs)("div", {
                        className: mG._B,
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
                            (0, A.jsx)(mo.Toggle, {
                                text: e ? R.intl.string(R.t["1Rkq/E"]) : R.intl.string(R.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, A.jsxs)("div", {
                className: mG.x0,
                children: [
                    (0, A.jsx)(mD, {
                        storeListing: i,
                        className: mG.o3,
                        cta: (0, A.jsxs)("div", {
                            className: mG.cJ,
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
                                  mD,
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
                            : (0, A.jsx)(mU, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function mU(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, mP.A)({
            analyticsLocation: S.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, A.jsx)(mD, {
        storeListing: t,
        cta: (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(R.t["+KwmBt"]), onClick: l }),
    });
}
class mV extends E.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, A.jsxs)(g5.$T, {
                  color: g5.Hv.DANGER,
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
function mk(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = E.useState({ route: mC.HOME }),
        { route: s } = i;
    function r() {
        l({ route: mC.HOME });
    }
    let a = (e) => {
            (l({ route: mC.SWITCH_APP_PLANS, ...e }), n(R.intl.string(R.t.VFqtkP), r));
        },
        [o, u] = E.useState({});
    E.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: mh.LOADING })),
                (0, g4._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: mh.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: mh.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, g6.E)(),
        c = d !== g6.mJ.LOADED;
    switch (s) {
        case mC.HOME:
            return (0, A.jsx)(A.Fragment, {
                children: t.map((e) =>
                    (0, A.jsx)(
                        mV,
                        {
                            subscription: e,
                            children: (0, A.jsx)(mS, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? mh.LOADING : (o[e.id] ?? mh.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case mC.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, A.jsx)(mM, { ...m, navigateToHome: r });
        default:
            (0, ii.xb)(s);
    }
}
var mw = n(707989);
function mF(e) {
    let { onGoBack: t } = e,
        n = (0, h.yK)(
            [ok.A],
            () =>
                ok.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = E.useState();
    return (
        null == i && (i = (0, A.jsx)(mB, { onBack: t, title: R.intl.string(R.t["DB/m9a"]) })),
        (0, A.jsxs)("div", {
            children: [
                i,
                (0, A.jsx)("div", {
                    className: mw.A,
                    children: (0, A.jsx)(mk, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, A.jsx)(mB, {
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
function mB(e) {
    let { onBack: t, title: n } = e;
    return (0, A.jsxs)("div", {
        className: mw.D,
        children: [
            (0, A.jsx)(i9.K, {
                "aria-label": R.intl.string(R.t["13/7kX"]),
                icon: () => (0, A.jsx)(g3.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, A.jsx)(x.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var mz = n(366999),
    mY = n(391659);
function mX(e) {
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
        ? ((t = R.intl.string(dH.default["/S02sx"])), (n = R.intl.string(dH.default.OPJNST)))
        : i
          ? ((t = R.intl.string(R.t["hT6i/0"])),
            (n = null != a ? R.intl.format(R.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = R.intl.string(R.t["3G0CTC"])),
            (n = r === tY.xc.FP_SUB_PAUSED ? R.intl.format(R.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = ir()({ [mY.Hs]: i, [mY.mT]: !i }),
        d = ir()({ [mY.CQ]: i, [mY.ZM]: !i }),
        c = ir()({ [mY.EM]: !i });
    return (0, A.jsxs)("div", {
        className: mY.r6,
        children: [
            (0, A.jsxs)("div", {
                className: mY.Nv,
                children: [
                    (0, A.jsx)(x.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, A.jsx)(H.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, A.jsx)("div", {
                    className: mY.ZS,
                    children: (0, A.jsx)("div", {
                        className: u,
                        children: (0, A.jsx)(H.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let mH = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, ai.kX)(t),
        r = s.length > 0,
        a = (0, mz.Ay)(t.endsAt, mz.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, A.jsx)("div", {
        children: (0, A.jsxs)("div", {
            className: ir()(n, mY.f8),
            children: [
                (0, A.jsx)("div", {
                    className: mY.J_,
                    children: (0, A.jsxs)("div", {
                        className: mY.Bh,
                        children: [
                            (0, A.jsx)("div", {
                                className: mY.xt,
                                children: (0, A.jsx)(r1.t, { size: "md", color: "white", className: mY.T8 }),
                            }),
                            (0, A.jsx)("div", {
                                className: mY.pt,
                                children: (0, A.jsx)(x.D, {
                                    variant: "heading-md/semibold",
                                    children: R.intl.string(R.t.DFMPWS),
                                }),
                            }),
                            (0, A.jsx)(H.E, {
                                className: mY.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : R.intl.string(R.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, A.jsx)(mX, {
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
var mK = n(983048);
function mW(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, h.yK)([uy.A], () => [uy.A.get(i), null != s ? uy.A.get(s.planId) : null]);
    if (null == o || ai.Ay.getInterval(i).intervalType !== tY.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = (0, ai.z4)(i),
        m = ai.Ay.getDisplayName(i);
    if (a) t = R.intl.string(dH.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === S.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, ai._e)(e, r);
        t = R.intl.formatToPlainString(R.t["5CNRRA"], { date: n ?? 0 });
    } else t = R.intl.formatToPlainString(R.t.eNXZ5O, { planName: m });
    let E = g || n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, A.jsxs)("div", {
        className: mY.Bh,
        children: [
            (0, A.jsx)("div", {
                className: ir()({
                    [mY.bY]: g,
                    [mY.sr]: o.skuId === tY.pe.TIER_0,
                    [mY.lP]: o.skuId === tY.pe.TIER_1,
                    [mY.eb]: o.skuId === tY.pe.TIER_2,
                }),
                children: g
                    ? (0, A.jsx)(d5._, { size: "md", color: "currentColor", className: mY.Kk })
                    : (0, A.jsx)(r1.t, { size: "md", color: "currentColor", className: mY.Kk }),
            }),
            (0, A.jsxs)("div", {
                className: mY.pt,
                children: [
                    (0, A.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        children: R.intl.format(R.t.LzobT9, { planName: m }),
                    }),
                    !E &&
                        (0, A.jsx)(x.D, {
                            className: mY.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, A.jsx)(H.E, {
                className: mY.PJ,
                variant: "text-md/semibold",
                children: R.intl.format(R.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let mZ = function (e) {
    let { className: t, entitlements: n } = e,
        i = B()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, h.yK)([uA.A], () => uA.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, h.bG)([ok.A], () => ok.A.getPremiumSubscription()),
        r = (0, h.bG)([ok.A], () => null == ok.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tY.gD.PREMIUM_MONTH_TIER_1),
        o = (0, h.bG)([si.default], () => si.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, A.jsxs)("div", {
        children: [
            (0, A.jsx)("div", {
                className: ir()(t, mY.xF, mY.J_),
                children: Object.keys(i).map((e) =>
                    (0, A.jsx)(
                        mW,
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
                            className: mY.eT,
                            variant: "text-md/normal",
                            children: R.intl.string(R.t["VNr4+O"]),
                        }),
                        (0, A.jsx)(mK.i, {}),
                    ],
                }),
        ],
    });
};
var mq = n(902782);
function mQ(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        [s] = (0, gG.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tL.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? mq.r : mq.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, ai.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = uy.A.get(o);
    ta()(null != u, "Missing plan");
    let d = (0, dc.$g)(s.total, s.currency);
    return (
        u.interval === tY.WT.YEAR
            ? (t = R.intl.format(R.t["jPz/39"], {
                  price: d,
                  termsUrl: S.X7G.TERMS,
                  paidURL: S.X7G.PAID_TERMS,
                  privacyUrl: S.X7G.PRIVACY,
              }))
            : u.interval === tY.WT.MONTH &&
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
function m$(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === S.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, A.jsx)(mQ, { subscription: t, withOverheadSeparator: n });
}
var mJ = n(963897),
    m0 = n(689255);
let m1 = { [eC.nR]: "role_subscriptions_panel", [eC.PZ]: "application_subscriptions_panel" };
function m2() {
    return (0, A.jsx)(om.Z, {
        className: m0.wb,
        type: om.Z.Types.CUSTOM,
        children: (0, A.jsxs)(lg.A, {
            align: lg.A.Align.CENTER,
            children: [
                (0, A.jsx)(i0.A, { game: null, size: i0.M.SMALL, className: m0.pV }),
                (0, A.jsx)("span", { className: m0.O, children: R.intl.string(R.t["jy/hyj"]) }),
            ],
        }),
    });
}
function m3(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, c8._)(e, t));
}
function m5() {
    let e = (0, h.bG)([uA.A], () => uA.A.getForApplication(tY.tv), [], m3);
    return (
        E.useEffect(() => {
            (0, uX.LM)(tY.tv);
        }, []),
        (0, A.jsx)(nJ.n, {
            label: R.intl.string(R.t["2GKrvn"]),
            description: R.intl.string(R.t.Z5b2Gf),
            children:
                null != e && ai.Ay.hasAccountCredit(e)
                    ? (0, A.jsx)(mZ, { className: m0.fX, entitlements: e })
                    : (0, A.jsx)(m2, {}),
        })
    );
}
function m4() {
    return (0, A.jsx)("hr", { className: m0.hr });
}
let m6 = function () {
        var e;
        let t = (0, h.bG)([ok.A], () => ok.A.getPremiumTypeSubscription()),
            n = (0, c7.A)({ subscriptionFilter: (e) => mJ.Hy.has(e.status) }),
            i = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, h.bG)(
                [oV.A],
                () => (null != t && null != t.paymentSourceId ? oV.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, h.bG)([ok.A], () => ok.A.hasFetchedSubscriptions()),
            a = (0, h.bG)([ou.A], () => ou.A.isBusy),
            o = (0, da.Y)(),
            u = gU.A.useField("subsection"),
            d = gU.A.useField("scrollToGameServers"),
            g = E.useRef(null);
        E.useEffect(() => {
            (0, n6._)(null != u ? m1[u] : c.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let m = (0, h.bG)([ok.A], () => ok.A.getActiveApplicationSubscriptions()?.length ?? 0),
            p = (0, h.bG)(
                [ok.A],
                () =>
                    Object.values(ok.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === S.rzx.GUILD)
                        .filter((e) => e.status !== S.Dmq.ENDED).length,
            ),
            T = (0, h.bG)([ok.A], () =>
                Object.values(ok.A.getSubscriptions() ?? {}).some((e) => e.type === S.rzx.GAME_SERVER),
            ),
            { servers: f } = (0, gT.f)({ enabled: T }),
            I = (0, h.yK)([ok.A], () => (0, gu.eP)(f, (e) => ok.A.getSubscriptionById(e)), [f]),
            _ = (0, dr.A)({ forceFetch: !0 }),
            N = (0, dm.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            b =
                !(N && !(_.unactivatedUnits.length > 0)) &&
                (_.fractionalState !== tY.xc.NONE || _.unactivatedUnits.length > 0);
        return (E.useEffect(() => {
            d &&
                r &&
                o &&
                I.length > 0 &&
                (g.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                gU.A.setState({ scrollToGameServers: !1 }));
        }, [d, r, o, I.length]),
        E.useEffect(
            () => (
                e4.h.wait(() => {
                    ((0, ds.zS)(), or.hP(), (0, d4.CD)(), or.$o());
                }),
                function () {
                    gU.A.resetState();
                }
            ),
            [],
        ),
        te.A.enabled)
            ? (0, A.jsx)(a7.A, {})
            : r && o
              ? u === eC.nR
                  ? (0, A.jsx)(gJ, { onGoBack: () => gU.A.setState({ subsection: null }) })
                  : u === eC.PZ
                    ? (0, A.jsx)(mF, { onGoBack: () => gU.A.setState({ subsection: null }) })
                    : (0, A.jsx)("div", {
                          className: m0.kL,
                          children: (0, A.jsxs)("div", {
                              className: m0.Qs,
                              children: [
                                  l ? (0, A.jsx)(mJ.Sb, {}) : null,
                                  null != t
                                      ? (0, A.jsx)(mJ.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, A.jsx)(mJ.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, A.jsxs)("section", {
                                          children: [
                                              (0, A.jsx)(x.D, {
                                                  variant: "heading-md/bold",
                                                  className: m0.HL,
                                                  children: R.intl.string(R.t.Obre8v),
                                              }),
                                              (0, A.jsx)(H.E, {
                                                  variant: "text-md/normal",
                                                  className: m0.JU,
                                                  children: R.intl.format(R.t["7Zi06b"], {
                                                      helpCenterLink: eT.A.getArticleURL(
                                                          S.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, A.jsx)(mH, {
                                                  className: m0.fX,
                                                  fractionalPremiumInfo: _,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, A.jsx)(m5, {}),
                                  p > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(m4, {}),
                                              (0, A.jsx)(g_, {
                                                  count: p,
                                                  onClickManageSubscription: () => gU.A.setState({ subsection: eC.nR }),
                                              }),
                                          ],
                                      }),
                                  m > 0 &&
                                      (0, A.jsxs)(A.Fragment, {
                                          children: [
                                              (0, A.jsx)(m4, {}),
                                              (0, A.jsx)(g2, {
                                                  count: m,
                                                  onClickManageSubscription: () => {
                                                      (gU.A.setState({ subsection: eC.PZ }),
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
                                          children: [(0, A.jsx)(m4, {}), (0, A.jsx)(gx, { servers: I })],
                                      }),
                                  (0, A.jsx)(m4, {}),
                                  null != t ? (0, A.jsx)(m$, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, A.jsx)("div", { className: ir()(m0.kL, m0.Lq), children: (0, A.jsx)(oe.y, {}) });
    },
    m8 = (0, d.E2)(c.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        Component: () => (0, A.jsx)(m6, {}),
    }),
    m7 = (0, d.zZ)(c.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [R.intl.string(R.t.trSpHX), R.intl.string(R.t["2GKrvn"])],
        buildLayout: () => [m8],
    }),
    m9 = (0, d.t_)(c.X.SUBSCRIPTIONS_PANEL, { useTitle: () => R.intl.string(R.t.trSpHX), buildLayout: () => [m7] }),
    Ae = (0, d.i4)(c.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.trSpHX),
        icon: c4.L,
        usePersistentBadge: function () {
            let e = (0, c6.l)();
            return E.useMemo(
                () => ({
                    badgeType: m.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, A.jsx)(iX.E, { size: "xs", color: nQ.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [m9],
    }),
    At = (0, d.WI)(c.X.BILLING_SECTION, {
        useTitle: () => R.intl.string(R.t.oeUm2s),
        buildLayout: () => [d3, c5, Ae, u9, oq],
    });
var An = n(540999),
    Ai = n(306471),
    Al = n(964355),
    As = n(172272);
let Ar = (0, d.zD)(c.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isAxeEnabled),
        setValue: (e) => (0, s2.x)({ axeEnabled: e }),
    }),
    Aa = (0, d.zD)(c.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, s2.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var Ao = n(276086),
    Au = n(354328);
let Ad = (0, d.zD)(c.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, Au.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, Ao.L)("highlight_mana_components", e);
        },
    }),
    Ac = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, Au.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, Ao.L)("highlight_mana_text_overrides", e);
        },
    }),
    Ag = (0, d.zD)(c.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, Au.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, Ao.L)("highlight_mana_text", e);
        },
    }),
    Am = (0, d.zD)(c.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, Au.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, Ao.L)("highlight_void_toggleables", e);
        },
    }),
    AA = (0, d.sN)(c.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, h.bG)([s3.default], () => s3.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: As.YR,
        markers: Array.from({ length: As.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => As.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            As.Or.getState().setHorizontalSpacing(e);
        },
    }),
    AE = (0, d.zD)(c.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, s2.x)({ layoutDebuggingEnabled: e });
        },
    }),
    Ah = (0, d.sN)(c.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, h.bG)([s3.default], () => s3.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: As.YR,
        markers: Array.from({ length: As.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => As.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            As.Or.getState().setVerticalSpacing(e);
        },
    }),
    AS = (0, d.zZ)(c.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [Aa, AE, AA, Ah, Ad, Ag, Ac, Am, Ar],
    });
var Ap = n(246605),
    Ax = n(274184);
let AT = (0, d.E2)(c.X.ACTION_TRIGGERED_SURVEY_OVERRIDE, {
        useSearchTerms: () => ["action-triggered survey override"],
        Component: function () {
            let e = (0, h.bG)([Ax.Ay], () => Ax.Ay.getActionTriggeredSurveyOverride());
            return (0, A.jsx)(A0, {
                label: "Action-triggered Survey Override",
                description: "Provide a action-triggered survey ID to test the action-triggered survey flow.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ap.xr(e, !0),
                fetchOverride: (e) => Promise.resolve(e),
            });
        },
    }),
    Af = (0, d.zD)(c.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => L.HZ.useSetting(),
        setValue: (e) => {
            L.HZ.updateSetting(e);
        },
    });
var AI = n(396478),
    A_ = n(173936),
    AN = n(103557),
    AC = n(414079),
    Ab = n(148810),
    Ay = n(380610),
    Av = n(986238),
    Aj = n(428524),
    AO = n(252149),
    AL = n(221851);
let AR = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    AD = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function AP(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class AG extends E.Component {
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
            className: ir()(Aj.oS, AL.SX, AO.N, Aj.nM),
            children: [
                (0, A.jsx)(AC.A, {
                    className: ir()(Aj.lL, { [Aj.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, A.jsxs)(lg.A, {
                    className: AL.QB,
                    children: [
                        (0, A.jsx)(lg.A.Child, {
                            basis: "50%",
                            children: (0, A.jsx)(i7.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: AD,
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
                                className: Aj.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, A.jsxs)(H.E, {
                            variant: "text-sm/normal",
                            className: Aj.AS,
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
class AM extends E.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, Ay.bD)();
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
        return B().without(AR, ...t);
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
        let t = await (0, Ab.Zk)(e);
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
        (0, la.openModal)((t) => (0, A.jsx)(AU, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, A.jsx)(AI.pp, {
            theme: nU.A.theme,
            className: ir()(AL.eT, AL.SX),
            children: (0, A.jsx)(AI.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : B().map(e, (e, i) =>
                  (0, A.jsx)(
                      AG,
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
                      icon: A_.LinkIcon,
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
                    disabled: AP(t ?? {}),
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
            ? (0, A.jsx)(oe.y, { className: AL.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                AP(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, A.jsx)(H.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, A.jsx)(nJ.n, {
            children: (0, A.jsxs)(Y.B, {
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
class AU extends E.Component {
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
            t = await (0, Ab.SB)(e);
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
        return AP(this.props.buildOverrides ?? {});
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
            d = Av.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, A.jsxs)(Y.B, {
            gap: 20,
            children: [
                (0, A.jsx)(i7.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Av.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, A.jsx)(i7.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Av.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, A.jsxs)(Y.B, {
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
                    : (0, A.jsx)(AN.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, A.jsx)(AN.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, A.jsx)(t$.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, A.jsx)("div", {});
        let n = r2.Y.INFO;
        switch (t) {
            case 0:
                n = r2.Y.ERROR;
                break;
            case 1:
                n = r2.Y.WARNING;
        }
        return (0, A.jsx)(r2.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, A.jsx)(lr.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, A.jsx)(uw.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let AV = (0, d.E2)(c.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: AM });
var Ak = n(256311),
    Aw = n(883600);
let AF = (0, d.E2)(c.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, h.bG)([Aw.A], () => Aw.A.overrideId());
        async function t(e) {
            let t = Aw.A.getChangelog(e, "en-US");
            return null != t ? t : ((await Ak.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, A.jsx)(A0, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => Ak.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var AB = n(506774);
let Az = new Date("2018-01-01"),
    AY = (0, d.Tf)(c.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => L.pK.useSetting() === oc.default.fromTimestamp(Az.getTime()),
        onClick: () => (AB.w.set("lastChangeLogDate", Az), L.pK.updateSetting(oc.default.fromTimestamp(Az.getTime()))),
    }),
    AX = (0, d.zD)(c.X.DISABLE_APP_COLLECTIONS_CACHE, {
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
    AH = (0, d.zD)(c.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isForcedCanary),
        setValue: (e) => {
            (0, s2.x)({ canary: e });
        },
    }),
    AK = (0, d.zD)(c.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.sourceMapsEnabled),
        setValue: (e) => (0, s2.x)({ sourceMapsEnabled: e }),
    }),
    AW = (0, d.zD)(c.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, s2.x)({ onlyShowPreviewAppCollections: e }),
    });
var AZ = n(10094),
    Aq = n(683760);
let AQ = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tY.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tY.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tY.PremiumTypes.TIER_2 },
    ],
    A$ = (0, d.Hn)(c.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => AQ,
        clearable: !0,
        useValue: () =>
            (0, h.bG)([Aq.A], () => {
                let e = Aq.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, AZ.O)(null, void 0)
                : null === e
                  ? (0, AZ.O)(void 0, void 0)
                  : (0, AZ.O)(0 === e ? null : e, void 0);
        },
    }),
    AJ = (0, d.E2)(c.X.SURVEY_OVERRIDE, {
        useSearchTerms: () => ["survey override"],
        Component: function () {
            let e = (0, h.bG)([Ax.Ay], () => Ax.Ay.getSurveyOverride());
            return (0, A.jsx)(A0, {
                label: "Survey Override",
                description: "Provide a survey ID to override the survey shown to this user.",
                placeholder: "Enter Survey ID...",
                overrideId: e ?? null,
                setOverride: (e) => Ap.xr(e),
                fetchOverride: (e) => Ap.BC(e, !0) ?? null,
            });
        },
    });
function A0(e) {
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
let A1 = (0, d.zZ)(c.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [A$, AJ, AT, AF, AY, AH, Af, AW, AX, AK, AV],
        useInlineNotice: () => ({
            type: m.lT.INLINE_NOTICE,
            noticeType: "info",
            text: R.intl.format(R.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    A2 = (0, d.zD)(c.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, s2.x)({ logAnalyticsEvents: e }),
    }),
    A3 = (0, d.zD)(c.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingGatewayEvents),
        setValue: (e) => (0, s2.x)({ logGatewayEvents: e }),
    }),
    A5 = (0, d.zD)(c.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.preventPopoutClose),
        setValue: (e) => (0, s2.x)({ preventPopoutClose: e }),
    }),
    A4 = (0, d.zD)(c.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.logKeyboardMismatches),
        setValue: (e) => (0, s2.x)({ logKeyboardMismatches: e }),
    }),
    A6 = (0, d.zD)(c.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingOverlayEvents),
        setValue: (e) => (0, s2.x)({ logOverlayEvents: e }),
    }),
    A8 = (0, d.zD)(c.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isLoggingQuestEvents),
        setValue: (e) => (0, s2.x)({ logQuestEvents: e }),
    }),
    A7 = (0, d.zD)(c.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, h.bG)([s3.default], () => s3.default.isTracingRequests),
        setValue: (e) => (0, s2.x)({ trace: e }),
    }),
    A9 = (0, d.zZ)(c.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [A3, A6, A7, A2, A4, A5, A8] }),
    Ee = (0, d.t_)(c.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [A1, A9, AS],
    }),
    Et = (0, d.i4)(c.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: Ai.V,
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
                } = (0, h.cf)([s3.default, An.A, si.default], () => ({
                    layoutDebuggingEnabled: s3.default.layoutDebuggingEnabled,
                    isDeveloper: An.A.isDeveloper,
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
                { horizontalSpacing: m, verticalSpacing: E } = (0, As.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: p } = As.Or.getState(),
                x = L.HZ.useSetting();
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
                                          checked: x,
                                          action: () => {
                                              L.HZ.updateSetting(!x);
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
                                                          (0, A.jsx)(Al.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: As.YR,
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
                                                          (0, A.jsx)(Al.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: E,
                                                              minValue: 0,
                                                              maxValue: As.YR,
                                                              onChange: (e) => p(e),
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
        buildLayout: () => [Ee],
    });
var En = n(127062),
    Ei = n(25044),
    El = n(80703),
    Es = n(123292),
    Er = n(857250),
    Ea = n(683438),
    Eo = n(890856),
    Eu = n(100392),
    Ed = n(102609),
    Ec = n(271478),
    Eg = n(710195),
    Em = n(386976),
    EA = n(257433),
    EE = n(32523),
    Eh = n(96919),
    ES = n(688151),
    Ep = n(863763);
function Ex(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = E.useState(l),
        [a, o] = E.useState(!1),
        u = E.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, h.bG)([uC.default], () => uC.default.getId()),
        c = (0, h.bG)([uC.default], () => {
            let e = uC.default.getInstallationForTracking();
            return null == e ? null : (0, El.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, EA.iN)(t, g),
        S = (0, EA.Fm)(t, g),
        p = (0, h.yK)([re.A], () =>
            B()
                .sortBy(re.A.getRecentExposures(ES.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        x = E.useCallback(
            (e) => {
                (0, uO.C)((0, Eu.yA)(n), () => {
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
        T = (0, A.jsx)(Eo.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: Ep.DD,
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
                                    uO.p5 &&
                                        (0, A.jsx)(n0.D, {
                                            onClick: x,
                                            children: (0, A.jsx)(A_.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", {
                        className: Ep.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, A.jsx)("div", { className: Ep.Os, children: T });
    let f = "";
    return (
        (f =
            t.system === Ed.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? ES.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, A.jsxs)("div", {
            className: Ep.Os,
            children: [
                T,
                (0, A.jsx)("div", {
                    children: (0, A.jsx)(Ec.g, {
                        label: t.system === Ed.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, A.jsx)("div", {
                    className: Ep.h_,
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
                                  className: Ep.id,
                                  children: "Server Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: Ep.AS,
                                  children: null == S ? "None" : JSON.stringify(S, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: Ep.id,
                                  children: "Override Descriptor",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: Ep.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: Ep.id,
                                  children: "Recent Exposures",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: Ep.AS,
                                  children: 0 === p.length ? "None" : p.join("\n"),
                              }),
                          ],
                      })
                    : (0, A.jsx)("div", {
                          className: Ep.id,
                          children: (0, A.jsx)(Es.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, A.jsx)(i8.c, { className: Ep.yF }),
            ],
        })
    );
}
function ET(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = E.useState(null != i),
        [r, a] = E.useState(!1),
        o = E.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, h.bG)([re.A], () => re.A.getLoadedGuildExperiment(n)),
        d = (0, h.bG)([re.A, lh.A, Eg.A], () => {
            if (t.system === Ed.l5.LEGACY) return null == re.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lh.A.getGuildsArray().some((t) => null != Eg.A.getServerAssignment("guild", t.id, e));
        }),
        c = (0, h.yK)([re.A], () =>
            B()
                .sortBy(re.A.getRecentExposures(ES.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [g, m] = (0, h.yK)([uC.default, lh.A, re.A, Eg.A], () => {
            let e = t.system === Ed.l5.LEGACY,
                i = t.name,
                l = uC.default.getId(),
                s = B().sortBy(lh.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (re.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? ES.RE.NOT_ELIGIBLE)
                    : (Eg.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? ES.RE.NOT_ELIGIBLE);
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
        S = t.system !== Ed.l5.LEGACY,
        p = (0, h.yK)([lh.A], () => B().sortBy(lh.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [x, T] = E.useState(() => lS.A.getGuildId() ?? lS.A.getLastSelectedGuildId()),
        f = p.find((e) => e.id === x)?.name,
        I = (0, h.bG)(
            [Eg.A],
            () => {
                if (S && null != x) return Eg.A.getServerAssignment("guild", x, t.name);
            },
            [S, x, t.name],
        ),
        _ = (0, h.bG)([Eg.A, uC.default], () => {
            if (!S) return;
            let e = uC.default.getId();
            return Eg.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, A.jsx)(n0.D, {
            onClick: o,
            children: (0, A.jsxs)(H.E, {
                variant: "text-md/medium",
                className: Ep.DD,
                children: [
                    (0, A.jsxs)("div", {
                        children: [
                            (0, A.jsx)("span", { children: t.title }),
                            (0, A.jsx)(H.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, A.jsx)("span", { className: Ep.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, A.jsxs)("div", {
              className: Ep.Os,
              children: [
                  C,
                  (0, A.jsx)(Ec.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${m}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  S &&
                      p.length > 0 &&
                      (0, A.jsx)("div", {
                          className: Ep.h_,
                          children: (0, A.jsx)(i7.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: x ?? void 0,
                              options: p.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => T(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, A.jsx)("div", {
                      className: Ep.h_,
                      children: d
                          ? (0, A.jsx)(H.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Ed.l5.LEGACY
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
                                  className: Ep.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: Ep.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-lg/medium",
                                  className: Ep.id,
                                  children: "Client Eligibility",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, A.jsx)(H.E, {
                                  variant: "code",
                                  className: Ep.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: Ep.id,
                                    children: "Guild Assignments",
                                }),
                                (0, A.jsx)(H.E, { variant: "code", className: Ep.AS, children: g }),
                                t.system === Ed.l5.LEGACY &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)(H.E, {
                                                variant: "text-lg/medium",
                                                className: Ep.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, A.jsx)(H.E, {
                                                variant: "code",
                                                className: Ep.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: Ep.id,
                                    children: "Override Descriptor",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: Ep.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-lg/medium",
                                    className: Ep.id,
                                    children: "Recent Exposures",
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "code",
                                    className: Ep.AS,
                                    children: 0 === c.length ? "None" : c.join("\n"),
                                }),
                            ],
                        })
                      : (0, A.jsx)("div", {
                            className: Ep.id,
                            children: (0, A.jsx)(Es.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, A.jsx)(i8.c, { className: Ep.yF }),
              ],
          })
        : (0, A.jsx)("div", { className: Ep.Os, children: C });
}
let Ef = (0, d.E2)(c.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Em.op)(),
                { experiments: n, overridesInfo: i } = (0, EE.hI)(),
                l = E.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = E.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, h.bG)([uC.default], () => {
                    let e = uC.default.getInstallationForTracking();
                    return null == e ? null : (0, El.v)(e);
                }),
                [a, o] = E.useState(""),
                u = (0, Eh.oC)((0, Eh.R3)((0, Eh.Fm)(l), s), a);
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
                                uO.p5 &&
                                    (0, A.jsx)(Es.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, uO.C)(r, () => {
                                                (0, l8.P0)((0, Er.o)("Installation ID copied!", l7.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, A.jsx)(Ea.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? ET : Ex;
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
                              className: Ep.p$,
                              children: (0, A.jsx)(x.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    EI = (0, d.zZ)(c.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Ef] }),
    E_ = (0, d.t_)(c.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [EI] }),
    EN = (0, d.i4)(c.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: En.c,
        useMenu: Ei.A,
        buildLayout: () => [E_],
    }),
    EC = (0, d.WI)(c.X.DEVELOPER_SECTION, {
        useTitle: () => R.intl.string(R.t["+gHUHA"]),
        usePredicate: () => An.A.isDeveloper,
        buildLayout: () => [EN, Et],
    });
var Eb = n(682348),
    Ey = n(871633),
    Ev = n(751075),
    Ej = n(843402);
let EO = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function EL() {
    let e = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1)),
        t = (0, h.bG)([iQ.Ay], () => EO(...iQ.Ay.getOverrides()));
    E.useEffect(() => {
        if (eQ.isPlatformEmbedded) return ((0, Ej.a2)(), Ej.e0);
    }, []);
    let { gameHistory: n, robloxSubgameHistory: i } = E.useMemo(
        () =>
            e.reduce((e, t) => ((0, Ey.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function ER(e) {
    let { gameHistory: t } = EL();
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
function ED(e) {
    let { namedGames: t, totalCount: n } = ER(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function EP() {
    let { namedGames: e } = ER(2),
        [t, n] = E.useMemo(() => e.map((e) => e.id), [e]);
    E.useEffect(() => {
        mu.Ay.fetchApplications([t, n].filter(ii.Vq));
    }, [t, n]);
    let [i, l] = (0, h.yK)([iW.A], () => [t, n].map(iW.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, A.jsx)(i0.A, { game: i, size: i0.M.MEDIUM_LARGE }), shape: Ev.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, A.jsx)(i0.A, { game: l, size: i0.M.MEDIUM }), shape: Ev.e0.ROUNDED } : null,
          };
}
let EG = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = ED(2);
            return R.intl.format(R.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = EP();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, Ey.n1)(e))) && (0, nm.xl)(),
    }),
    EM = (0, d.gN)(c.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [EG] });
var EU = n(57129);
let EV = (0, d.zD)(c.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => R.intl.string(EU.default.WhdCGP),
    useSubtitle: () => R.intl.string(EU.default.UQ9RHJ),
    useValue: L.tz.useSetting,
    setValue: L.tz.updateSetting,
});
var Ek = n(406535);
let Ew = (0, d.zD)(c.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => R.intl.string(EU.default.A0FVCV),
        useSubtitle: () => R.intl.string(EU.default.vHX6RG),
        useValue: L.hV.useSetting,
        setValue: function (e) {
            (L.hV.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ek.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                }));
        },
    }),
    EF = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => R.intl.string(R.t.WmsPis),
        useSearchTerms: () => [R.intl.string(R.t["8ka8li"])],
        buildLayout: () => [EV, Ew, EM],
    });
var EB = n(106531);
let Ez = (0, d.AK)(c.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.J0SFL2),
        destinationKey: c.X.DATA_AND_PRIVACY_PANEL,
    }),
    EY = (0, d.gN)(c.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, EB.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [Ez],
    });
var EX = n(945810);
let EH = (0, EX.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
var EK = n(365258);
let EW = (0, d.Qx)(c.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => R.intl.string(EU.default["/LHVbt"]),
    useSubtitle: () => R.intl.string(R.t.L5IdzV),
    useOptions: function () {
        return [
            { value: eB.Qd.ACTIVITY_STATUS_OFF, name: R.intl.string(EU.default.m3oL7Q) },
            { value: eB.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: R.intl.string(EU.default["5+lnTA"]) },
            { value: eB.Qd.ACTIVITY_STATUS_ON, name: R.intl.string(EU.default["egr+VZ"]) },
        ];
    },
    useValue: L._Z.useSetting,
    setValue: function (e) {
        var t;
        let i = L._Z.getSetting();
        if (
            (L._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, EB.W1)(t) && !EH.getConfig({ location: t }).upsell)
        )
            return;
        let l = (0, EK.g8)(i, e);
        if (null == l) return;
        let s = (0, EK.Xc)(e);
        (0, la.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, A.jsx)(e, { ...t, direction: l.direction, affectedGuildIds: l.affectedGuildIds, settingName: s });
        });
    },
});
var EZ = n(498642),
    Eq = n(573435),
    EQ = n(260509),
    E$ = n(771810);
function EJ(e) {
    let { guild: t, size: n } = e,
        i = (0, EQ.Iv)(t, n, !1, !0),
        l = (0, EQ.Rb)(t);
    return null != i
        ? (0, A.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, A.jsx)("div", {
              className: E$.F,
              children: (0, A.jsx)(H.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
              }),
          });
}
function E0(e) {
    let { guild: t, size: n } = e;
    return (0, A.jsx)(Eq.Ay, {
        className: E$.z,
        mask: Eq.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, A.jsx)(EJ, { guild: t, size: n }),
    });
}
var E1 =
    (((r = {}).SERVER_ORDER = "server-order"),
    (r.RECENTLY_JOINED = "recently-joined"),
    (r.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (r.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    r);
let E2 = {
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
var E3 = n(618118);
function E5(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, h.bG)([EZ.A], () => EZ.A.getMemberCount(t.id));
    return (0, A.jsxs)(Y.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, A.jsx)("div", { className: E3.FO, children: (0, A.jsx)(E0, { guild: t, size: 48 }) }),
            (0, A.jsx)("div", {
                className: E3.QH,
                children: (0, A.jsx)(t$.d, {
                    label: t.name,
                    description: R.intl.format(R.t.zRl6XR, { count: l ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let E4 = function (e) {
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
                l = (0, h.bG)([ce.Ay], () => ce.Ay.getFlattenedGuildIds()),
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
                [g, m] = (0, E.useState)(() => E2[n](r, a)),
                A = g.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    (m(E2[e](r, a)), i(e));
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
        p = (0, E.useRef)(null),
        x = (0, E.useMemo)(
            () => [
                { id: E1.SERVER_ORDER, label: R.intl.string(R.t.STMPJ2), value: E1.SERVER_ORDER },
                { id: E1.RECENTLY_JOINED, label: R.intl.string(R.t.CbaapP), value: E1.RECENTLY_JOINED },
                { id: E1.ACTIVITY_SHARING_ON, label: R.intl.string(EU.default.ZI51JZ), value: E1.ACTIVITY_SHARING_ON },
                {
                    id: E1.ACTIVITY_SHARING_OFF,
                    label: R.intl.string(EU.default["+kxafn"]),
                    value: E1.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        T = x.find((e) => e.value === s)?.label ?? "";
    return (0, A.jsxs)("div", {
        className: E3.iE,
        children: [
            t,
            (0, A.jsxs)("div", {
                className: E3.N1,
                children: [
                    (0, A.jsx)(Ea.I, {
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
                            className: E3.gO,
                            children: [
                                (0, A.jsx)(ae.Y, {
                                    targetElementRef: p,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, A.jsx)(co.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": R.intl.string(R.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, A.jsx)(e3.rX, {
                                                children: x.map((e) => {
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
                                            innerRef: p,
                                            className: E3.Ku,
                                            children: [
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: T,
                                                }),
                                                (0, A.jsx)(cM.a, { size: "xs", color: nQ.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, A.jsx)(Es.Q, {
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
                children: R.intl.format(EU.default.EvzDff, { count: n.length }),
            }),
            (0, A.jsxs)("ul", {
                className: E3.X1,
                id: m,
                "aria-label": R.intl.string(R.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, A.jsx)("div", {
                            className: E3.pb,
                            children: (0, A.jsx)(H.E, {
                                className: E3.R$,
                                variant: "text-lg/medium",
                                children: R.intl.string(R.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, A.jsx)(
                            E5,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var E6 = n(68322);
let E8 = (0, d.E2)(c.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [R.intl.string(EU.default["/LHVbt"])],
        Component: function () {
            let e = L.tz.useSetting()
                ? null
                : (0, A.jsx)("div", {
                      className: E6.l,
                      children: (0, A.jsx)(iz.w, { type: "warning", children: R.intl.string(EU.default["xxI0/W"]) }),
                  });
            return (0, A.jsx)(E4, { notice: e });
        },
    }),
    E7 = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bwqjL9),
        buildLayout: () => [EW, E8, EY],
    }),
    E9 = (0, d.zD)(c.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => R.intl.string(EU.default.khuuzv),
        useSubtitle: () => R.intl.string(EU.default["8EWsJ8"]),
        useValue: () => L.e.useSetting(),
        setValue: (e) => L.e.updateSetting(e),
    }),
    he = (0, d.E2)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    ht = (0, d.zD)(c.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => R.intl.string(EU.default.Uz5Ipi),
        useSubtitle: () => R.intl.string(EU.default.CZI2Gb),
        useValue: () => L.UM.useSetting(),
        setValue: (e) => L.UM.updateSetting(e),
    }),
    hn = (0, d.zZ)(c.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => R.intl.string(EU.default["89YBr5"]),
        useSubtitle: () => R.intl.string(R.t.uGDpgH),
        buildLayout: () => [E9, ht, he],
        useSearchTerms: () => [R.intl.string(R.t.VOszPA)],
    }),
    hi = (0, d.t_)(c.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        buildLayout: () => [EF, E7, hn],
    }),
    hl = (0, d.i4)(c.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cq98yL),
        icon: Eb._,
        buildLayout: () => [hi],
    });
var hs = n(712440),
    hr = n(370997);
let ha = (0, d.E2)(c.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: hr.Ay,
    useSearchTerms: () => [R.intl.string(R.t["f6kk+r"])],
});
var ho = n(478016),
    hu = n(789645),
    hd = n(559106),
    hc = n(77468),
    hg = n(289498),
    hm = n(573648),
    hA = n(874490),
    hE = n(370480),
    hh = n(968309);
let hS = new Set([S.fg2.XBOX, S.fg2.PLAYSTATION, S.fg2.PLAYSTATION_STAGING, S.fg2.CRUNCHYROLL]);
var hp = n(169869),
    hx = n(814925),
    hT = n(733110),
    hf = n(479785),
    hI = n(757036),
    h_ = n(555837),
    hN = n(43990),
    hC = n(241524),
    hb = n(51965),
    hy = n(377368),
    hv = n(631368),
    hj = n(212739),
    hO = n(30370),
    hL = n(181666),
    hR = n(553875),
    hD = n(660594);
function hP() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: r } =
            ((e = (0, hv.$)()),
            (t = (0, hj.O)()),
            (l = null != (i = (0, h.bG)([hO.A], () => hO.A.getAccount(null, S.fg2.XBOX))) && !i.revoked),
            e === hv.C.NONE || t
                ? { variant: hv.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: e === hv.C.NO_ACCESS && !l }),
        { analyticsLocations: a } = (0, eP.Ay)(tL.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        o = (0, hy.yW)(a),
        u = (0, hC.A)("(max-width: 485px)");
    if (s === hv.C.NONE) return null;
    let d = u ? "md" : "sm",
        c = "",
        g = null;
    switch (s) {
        case hv.C.HAS_ACCESS:
        case hv.C.BLOCK_CLAIM:
            ((c = R.intl.string(hR.default["7PdsMK"])),
                (g = (0, A.jsx)(hb.A, {
                    variant: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    text: R.intl.string(hR.default.CubeLC),
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
        case hv.C.NO_ACCESS:
            ((c = R.intl.string(hR.default.NwkRTZ)),
                (g = (0, A.jsx)(tM.A, {
                    defaultTextOverride: R.intl.string(hR.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: d,
                    fullWidth: u,
                    subscriptionTier: tY.pe.TIER_2,
                })));
            break;
        default:
            (0, ii.xb)(s);
    }
    return (0, A.jsxs)(eP.f5, {
        value: a,
        children: [
            (0, A.jsxs)("div", {
                className: hD.bV,
                children: [
                    (0, A.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: R.intl.string(R.t.NG1e6l),
                    }),
                    (0, A.jsx)(r1.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, A.jsx)(hN.N, {
                theme: S.NJ8.DARK,
                children: (e) =>
                    (0, A.jsx)("div", {
                        className: e,
                        children: (0, A.jsxs)("div", {
                            className: hD.Nr,
                            children: [
                                (0, A.jsxs)("div", {
                                    className: hD.Tp,
                                    children: [
                                        (0, A.jsx)("div", {
                                            className: hD.Qw,
                                            style: {
                                                backgroundImage: `url(${r ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, A.jsx)("div", { className: hD.$h }),
                                        (0, A.jsx)("div", { className: hD.Rv }),
                                        (0, A.jsx)("div", { className: hD.Lw }),
                                    ],
                                }),
                                (0, A.jsxs)("div", {
                                    className: hD.Mn,
                                    children: [
                                        (0, A.jsxs)("div", {
                                            className: hD.mY,
                                            children: [
                                                (0, A.jsx)("img", {
                                                    className: hD.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, A.jsx)(H.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: hD.DD,
                                                    children: c,
                                                }),
                                            ],
                                        }),
                                        (0, A.jsx)("div", { className: hD.lO, children: g }),
                                    ],
                                }),
                                r &&
                                    (0, A.jsxs)(A.Fragment, {
                                        children: [
                                            (0, A.jsx)("div", { className: hD.yF }),
                                            (0, A.jsxs)("div", {
                                                className: hD.sQ,
                                                children: [
                                                    (0, A.jsx)(o$.GiftIcon, {
                                                        size: u ? "md" : "sm",
                                                        color: nQ.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, A.jsx)(H.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: R.intl.format(hL.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                (o(hy.Hx.CONNECT),
                                                                    (0, hh.A)({
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
var hG = n(201718),
    hM = n(321078),
    hU = n(672130),
    hV = n(379848),
    hk = n(688901);
function hw(e) {
    let { markAsDismissed: t } = e;
    return (
        E.useEffect(() => t(gg.i.UNKNOWN), [t]),
        (0, A.jsx)(tn.Lp, { className: hk.Ad, text: R.intl.string(R.t.y2b7CA) })
    );
}
function hF(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, A.jsxs)("div", {
        className: hk.kL,
        children: [
            i,
            (0, A.jsxs)("div", {
                className: hk.FS,
                children: [
                    (0, A.jsxs)("div", {
                        className: hk.TK,
                        children: [
                            (0, A.jsx)(hV.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, A.jsx)(hw, { markAsDismissed: n }) : null;
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
function hB() {
    let e = eT.A.getArticleURL(S.MVz.PS_CONNECTION);
    return (0, A.jsx)(hF, {
        title: R.intl.string(R.t.v20wwm),
        body: R.intl.format(R.t.lTZBit, { help_article: e }),
        img: (0, A.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: eu.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, hh.A)({ platformType: S.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let hz = "/assets/9df988a227916145.png";
function hY() {
    return (0, A.jsx)(hF, {
        title: R.intl.string(hL.default["9cLtDI"]),
        body: R.intl.format(hL.default["D+kUbg"], { learnMoreLink: eT.A.getArticleURL(S.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, A.jsx)("img", { src: hz, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, hh.A)({ platformType: S.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function hX() {
    let e = eT.A.getArticleURL(S.MVz.XBOX_CONNECTION);
    return (0, A.jsx)(hF, {
        title: R.intl.string(R.t["2okkZV"]),
        body: R.intl.format(R.t.OnERSS, { help_article: e }),
        img: (0, A.jsx)("img", { src: hz, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: eu.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, hh.A)({ platformType: S.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var hH = n(783419),
    hK = n(534952),
    hW = n(211180),
    hZ = n(247259);
function hq(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, h.cf)(
            [hO.A],
            () => ({
                isJoining: hO.A.isJoining(n.id),
                joinErrorMessage:
                    "" === hO.A.joinErrorMessage(n.id) ? R.intl.string(R.t.j2d6Km) : hO.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== hO.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, h.bG)([lh.A], () => lh.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, A.jsx)(_.$, {
                size: "sm",
                onClick: function () {
                    hc.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? R.intl.string(R.t.RXvQQu) : R.intl.string(R.t.XpeFYr),
            })),
        (0, A.jsxs)("div", {
            className: hZ.iA,
            children: [
                (0, A.jsxs)("div", {
                    className: hZ.XX,
                    children: [
                        (0, A.jsx)(cg.Ay, { size: cg.Ay.Sizes.SMALL, guild: n.guild, className: hZ.$f }),
                        (0, A.jsxs)("div", {
                            className: hZ.Vn,
                            children: [
                                (0, A.jsx)(H.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, A.jsx)(nn.Anchor, {
                                    href: hm.A.get(n.type)?.getPlatformUserUrl?.(n.account),
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
                        className: hZ.R,
                        children: l,
                    }),
            ],
        })
    );
}
function hQ(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s =
            ((t = l.id),
            (n = (0, h_.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (i = (0, hI.L)(tY.PremiumTypes.TIER_2)),
            !n && !i && !/^\d+$/.test(t));
    return l.type === S.fg2.XBOX && s
        ? (0, A.jsx)(hY, {})
        : l.twoWayLink
          ? null
          : l.type === S.fg2.XBOX
            ? (0, A.jsx)(hX, {})
            : l.type === S.fg2.PLAYSTATION
              ? (0, A.jsx)(hB, {})
              : null;
}
function h$(e) {
    let t,
        n,
        i,
        l,
        s,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, m] = E.useState(u.friendSync),
        [h, p] = E.useState(u.visibility),
        [x, T] = E.useState(u.metadataVisibility),
        [f, I] = E.useState(u.showActivity),
        [N, C] = E.useState(null),
        [b, y] = E.useState(null),
        [v, j] = E.useState(!1),
        [O, L] = E.useState([]),
        D = (0, hA.ML)(u.type),
        P = hm.A.get(D);
    E.useEffect(() => {
        (m(u.friendSync), p(u.visibility), T(u.metadataVisibility), I(u.showActivity));
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
            (null != e && (p(e), hc.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (T(t), hc.A.setMetadataVisibility(u.type, u.id, t), y(null)));
        }, [u]),
        (0, A.jsxs)("div", {
            className: hZ.FI,
            children: [
                ((t = hm.A.get(u.type)),
                (n = hm.A.get(D)),
                (i = "1" === (u.metadata ?? {})[hH.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === S.fg2.TWITTER &&
                    i &&
                    (l = (0, A.jsx)(lt.m, {
                        text: R.intl.string(R.t.Jebrww),
                        children: (0, A.jsx)(hx.A, {
                            color: nQ.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, A.jsx)(ho.U, { size: "xs", color: nQ.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, A.jsxs)("div", {
                    className: hZ.Il,
                    children: [
                        (0, A.jsx)("img", {
                            alt: n.name,
                            className: hZ.gj,
                            src: (0, dl.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, A.jsxs)("div", {
                            children: [
                                (0, A.jsxs)("div", {
                                    className: hZ.$p,
                                    children: [
                                        (0, A.jsx)(H.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: hZ.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, A.jsx)("div", { className: hZ.cG, children: l }),
                                    ],
                                }),
                                (0, A.jsx)(H.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: hZ.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? R.intl.format(hW.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, A.jsx)(n0.D, {
                            className: hZ.uH,
                            onClick: function () {
                                let e = hm.A.get(u.type);
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
                                            hS.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, A.jsx)(lW.A, {
                                                children: R.intl.format(R.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": R.intl.string(R.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, A.jsx)(hu.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, A.jsx)(hQ, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, hE.An)(t[hH.pK.CREATED_AT], c);
                    switch (e.type) {
                        case S.fg2.REDDIT:
                            n = (0, hp.xE)(t, hZ.Nz);
                            break;
                        case S.fg2.STEAM:
                            n = (0, hp.dy)(t, hZ.Nz);
                            break;
                        case S.fg2.BLUESKY:
                        case S.fg2.TWITTER:
                        case S.fg2.MASTODON:
                            n = (0, hp.ED)(t, hZ.Nz);
                            break;
                        case S.fg2.EBAY:
                            n = (0, hp.ub)(t, hZ.Nz);
                            break;
                        case S.fg2.PAYPAL:
                            n = (0, hp.gZ)(t, hZ.Nz);
                            break;
                        case S.fg2.TIKTOK:
                            n = (0, hp.HU)(t, hZ.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, A.jsx)(
                                H.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: hZ.M4,
                                    children: R.intl.format(R.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = R.intl.string(R.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== hm.A.get(e.type).hasMetadata) return null;
                        else
                            ((n = [
                                (0, A.jsx)(tn.Lp, { className: hZ.Z3, text: R.intl.string(R.t.y2b7CA) }, "badge"),
                                (0, A.jsx)(
                                    H.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: hZ.vt,
                                        children: R.intl.format(R.t.Up2ni7, {
                                            helpdeskUrl: eT.A.getArticleURL(S.MVz.CONNECTION_DETAILS),
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
                                    className: hZ.jy,
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
                                                      hc.A.refresh(e.type, e.id).finally(() => {
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
                        (0, A.jsx)("div", { className: hZ.tJ, children: n })
                    );
                })(u),
                (S.txh.has(u.type) &&
                    (s = (0, A.jsx)(t$.d, {
                        label: R.intl.string(R.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            (m(e), hc.A.setFriendSync(u.type, u.id, e));
                        },
                    })),
                S.ewM.has(u.type) &&
                    (r = (0, A.jsx)(t$.d, {
                        label: R.intl.format(R.t["6u6J0q"], { platform: P.name }),
                        checked: f,
                        onChange: function (e) {
                            (I(e), hc.A.setShowActivity(u.type, u.id, e));
                        },
                    })),
                hm.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, A.jsx)(t$.d, {
                        label: R.intl.string(R.t.FYKGsL),
                        checked: 1 === x,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                (y(n), (0, hh.A)({ platformType: u.type, location: "User Settings" }));
                                return;
                            }
                            (T(n), hc.A.setMetadataVisibility(u.type, u.id, n));
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, A.jsxs)("div", {
                    className: hZ.HZ,
                    children: [
                        (0, A.jsx)(t$.d, {
                            label: R.intl.string(R.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    (C(n), (0, hh.A)({ platformType: u.type, location: "User Settings" }));
                                    return;
                                }
                                (p(n), hc.A.setVisibility(u.type, u.id, n));
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
                    ? (0, A.jsx)(r2.p, {
                          messageType: r2.Y.INFO,
                          children: R.intl.format(R.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, hh.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, A.jsx)(tQ.D, {
                            label: R.intl.string(R.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, A.jsx)(hq, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, A.jsx)(hf.A, { partner: u.type }),
            ],
        })
    );
}
function hJ(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, A.jsxs)("div", {
              className: hZ.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, A.jsxs)("div", {
                          className: hZ.Il,
                          children: [
                              (0, A.jsx)("img", { alt: n.name, className: ir()(hZ.gj, hZ.sN), src: i }),
                              (0, A.jsxs)("div", {
                                  children: [
                                      (0, A.jsx)("div", {
                                          className: hZ.$p,
                                          children: (0, A.jsx)(H.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: hZ.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, A.jsx)(H.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: hZ.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, A.jsx)(n0.D, {
                                  className: hZ.uH,
                                  onClick: () =>
                                      (0, hr.d1)(n, t.scopes, () => {
                                          hs.A.delete(t.id);
                                      }),
                                  "aria-label": R.intl.string(R.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, A.jsx)(hu.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, A.jsx)("div", {
                      className: hZ.HZ,
                      children: (0, A.jsx)(t$.d, {
                          label: R.intl.string(R.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              hG.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function h0(e) {
    let t = hm.A.get(e);
    ((0, hh.A)({ platformType: t.type }),
        tt.default.track(S.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function h1() {
    let e = (0, hA.gn)(),
        t = (0, iZ.A)((0, hK.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, A.jsxs)("div", {
        className: hZ.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, A.jsx)(
                        hU.A,
                        { application: e, className: hZ.__invalid_accountButton, innerClassName: hZ.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, A.jsx)(
                        hg.A,
                        { type: e.type, className: hZ.__invalid_accountButton, innerClassName: hZ.U$ },
                        e.type,
                    ),
                ),
            (0, A.jsx)(lt.m, {
                text: R.intl.string(R.t.QqTz8b),
                children: (0, A.jsx)("div", {
                    className: ir()(hZ.ej, hZ.__invalid_accountButton),
                    children: (0, A.jsx)(hd.vN, {
                        children: (0, A.jsx)("button", {
                            className: ir()(hZ.R8, hZ.U$),
                            type: "button",
                            onClick: function () {
                                e4.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: h0 });
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
function h2(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = E.useMemo(() => i.filter((e) => hm.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, A.jsx)(oe.y, { type: oe.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, A.jsx)(AI.pp, {
                    theme: r,
                    className: hZ.p$,
                    children: (0, A.jsx)(AI.SG, {
                        note: R.intl.string(R.t.WenGZ2),
                        children: R.intl.string(R.t.aoLS84),
                    }),
                })
              : (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(x.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: R.intl.format(R.t.AioIGb, { count: l.length + o.length }),
                        }),
                        l.map((e, t) =>
                            (0, A.jsx)(
                                hJ,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, A.jsx)(
                                h$,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            hc.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, A.jsx)("div", { className: hZ.V, children: t })
    );
}
let h3 = (0, d.E2)(c.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, A.jsx)(tQ.D, { label: R.intl.string(R.t["t+aGse"]), children: (0, A.jsx)(h1, {}) });
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
    h5 = (0, d.E2)(c.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
                t = (0, h.bG)([hO.A], () => hO.A.isFetching()),
                n = (0, h.bG)([hO.A], () => hO.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, h.cf)([hT.default], () => ({
                    authorizedAppsFetchState: hT.default.getFetchState(),
                    authorizedApps: hT.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, hM.A)(si.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, uU.Ay)(),
                o = (0, h.bG)([ow.default], () => ow.default.locale);
            return (E.useEffect(() => {
                i === hT.FetchState.NOT_FETCHED && hs.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(hP, {}),
                          (0, A.jsx)(h2, {
                              fetching: t || s || (r.length > 0 && i !== hT.FetchState.FETCHED),
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
            hc.A.fetch();
        },
        useSearchTerms: () => [
            R.intl.string(R.t["+/hZM/"]),
            R.intl.string(R.t.bsbMVz),
            R.intl.string(R.t.f7yOAX),
            R.intl.string(R.t.FYKGsL),
            R.intl.string(R.t["+KCMSi"]),
        ],
    });
var h4 = n(206828);
let h6 = (0, d.zZ)(c.X.CONNECTIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["3fe7U5"]),
        useSubtitle: () => R.intl.string(R.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, h.bG)([hO.A], () => hO.A.getAccounts()),
                t = E.useMemo(
                    () =>
                        hm.A.filter(
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
                { canStartAuthorization: u, hasAlreadyLinked: d, fetched: c } = (0, h4.RD)(o),
                g =
                    a?.type === S.fg2.RIOT_GAMES || a?.type === S.fg2.LEAGUE_OF_LEGENDS
                        ? R.intl.string(hW.default["1S6oAo"])
                        : o?.name,
                A = null != a && c,
                p = A && !d && u && o?.connectionEntrypointUrl != null;
            return (
                r || !A || p || i((e) => e + 1),
                E.useMemo(
                    () =>
                        p
                            ? {
                                  type: m.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: R.intl.format(hW.default.wUXupS, {
                                      connectionName: a.name,
                                      applicationName: g,
                                      connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                      helpCenterLink:
                                          a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                                  }),
                              }
                            : null,
                    [a, g, o, p],
                )
            );
        },
        buildLayout: () => [h3, h5],
    }),
    h8 = (0, d.zZ)(c.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        useSubtitle: () => R.intl.string(R.t.G9JfLg),
        buildLayout: () => [ha],
        initialize: () => (
            hs.A.fetch(),
            () => {
                hr.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    h7 = (0, d.t_)(c.X.CONNECTED_APPS_PANEL, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        useObscuredNotice: a7.L,
        buildLayout: () => [h6, h8],
    }),
    h9 = (0, d.i4)(c.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.lrVuZO),
        icon: A_.LinkIcon,
        buildLayout: () => [h7],
    });
var Se = n(625657),
    St = n(592598),
    Sn = n(773371),
    Si = n(184809),
    Sl = n(672396);
let Ss = Sa(null);
function Sr() {
    var e;
    let t = Sa(Ss);
    ((e = Ss),
        B().isEqual(B().omit(t, "old_enabled"), B().omit(e, "old_enabled")) ||
            (tt.default.track(S.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (Ss = t)));
}
function Sa(e) {
    let t = Si.default.getNotificationPositionMode(),
        n = t !== S.G6Q.DISABLED,
        i = lM.Ay.getOverlayKeybind(),
        l = lM.Ay.getOverlayChatKeybind();
    return {
        enabled: Sn.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: St.A.isNotificationDisabled(Sl.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ls.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, ls.dI)(l.shortcut) : null,
        text_opacity_slider: Si.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? Sn.default.enabled,
    };
}
var So = n(237984),
    Su = n(63035);
function Sd(e) {
    (e.preventDefault(), e.stopPropagation());
}
function Sc(e) {
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
        className: ir()(Su.HS, d),
        children: [
            (0, A.jsxs)(Eo.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, A.jsx)("div", { className: Su.x_, children: t }),
                    (0, A.jsxs)("div", {
                        className: Su.rN,
                        children: [
                            null != n && (0, A.jsx)("div", { className: Su.$t, children: n }),
                            (0, A.jsxs)("div", {
                                className: Su.c8,
                                children: [
                                    (0, A.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: Su.SZ,
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
                            (0, A.jsx)("div", { className: Su.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, A.jsx)("div", { className: Su.Om, children: a }),
        ],
    });
}
let Sg = (0, d.E2)(c.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, A.jsx)(Sc, {
            title: R.intl.string(R.t["z4/l+V"]),
            description: R.intl.string(R.t["3aZq/0"]),
            action: (0, A.jsx)(_.$, {
                variant: "primary",
                text: R.intl.string(R.t.s2nVhG),
                onClick: () => {
                    (0, So.b)(tL.A.USER_SETTINGS, S.BRT.APP);
                },
            }),
            "aria-label": R.intl.string(R.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [R.intl.string(R.t["z4/l+V"])],
});
var Sm = n(31300),
    SA = n(780907),
    SE = n(684013),
    Sh = n(56562),
    SS = n(311043),
    Sp = n(569926),
    Sx = n(810412),
    ST = n(41984),
    Sf = n(296027),
    SI = n(562519);
let S_ = 5 * n(927813).A.Millis.DAY,
    SN = new SI.A("overlay_survey_timestamps");
function SC(e, t) {
    let i, l;
    ((i = Date.now()),
        (null != (l = Array.from(SN.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < S_) ||
            Array.from(SN.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, la.openModalLazy)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return ((i = Date.now()), SN.add(i), (n) => (0, A.jsx)(l, { ...n, clientSettingType: e, gameId: t }));
            }));
}
function Sb() {
    (0, i2.sL)("overlay-settings");
}
function Sy(e) {
    let { className: t, game: n } = e;
    return (0, i2.NP)() && null != n && n.elevated
        ? (0, A.jsx)("div", {
              className: t,
              children: (0, A.jsx)(r2.p, {
                  messageType: r2.Y.WARNING,
                  action: (0, A.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      text: R.intl.string(R.t["1iI46O"]),
                      onClick: Sb,
                  }),
                  children: R.intl.format(R.t["LJzl+0"], { helpCenterLink: eT.A.getArticleURL(S.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var Sv = n(760751),
    Sj = n(9302),
    SO = n(656513);
let SL = new Set([
    ST.AR.INITIALIZING,
    ST.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    ST.AR.WAITING_FOR_MODULE_TRACKING,
    ST.AR.WAITING_FOR_OVERLAY_OPEN,
    ST.AR.WAITING_FOR_POPOUT_OPEN,
    ST.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    ST.AR.WAITING_FOR_REACT_INITIALIZATION,
    ST.AR.WAITING_FOR_PID_FOCUS,
    ST.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function SR(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = E.useState(!1);
    return (0, A.jsx)(SO.N, {
        className: Su.uR,
        collapsibleContent: (0, A.jsx)("div", { className: Su.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, A.jsx)(Sc, {
                ...l,
                onClick: (e) => {
                    var n;
                    (r((n = !s)), i?.(n), t?.(e));
                },
                className: ir()(Su.AC, n),
                action: (0, A.jsxs)("div", {
                    className: Su.rc,
                    children: [
                        l.action,
                        s
                            ? (0, A.jsx)(cM.a, {
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
let SD = (0, d.E2)(c.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = iJ();
        (0, Sp.I)(e?.id);
        let n = e?.pid,
            i = (0, h.bG)(
                [Sf.default],
                () => (null == e || null == n ? null : Sf.default.getTrackedGameByPid(n)),
                [e, n],
                iK(),
            ),
            { data: l } = (0, Sp.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, h.cf)(
                [Sv.A, ti.A, SS.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, iQ.hw)(e, !1, [Sv.A, ti.A, SS.A]),
                [e, i],
            ),
            a = (0, h.bG)(
                [iQ.Ay, Sv.A, ti.A, SS.A],
                () => (null == e ? null : (0, iQ.xU)(e, iQ.Ay, Sv.A, ti.A, SS.A)),
                [e],
                iK(),
            ),
            [o, u] = E.useState(r),
            [d, c] = E.useState(s),
            [g, m] = E.useState(!1);
        E.useEffect(() => {
            (u(r), c(s));
        }, [r, s]);
        let S = !(0, Sj.supportsLegacy)(),
            p = !(0, Sj.supportsOutOfProcess)(),
            { legacyEnabled: x, oopEnabled: T } = (0, h.cf)([Sf.default], () => Sf.default.getGlobalEnabledStatus());
        function f(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case Sx.OverlayToggledClientSettingType.LEGACY_GAME:
                    (c(t), SA.Ay.toggleOverlay(e, t, o), (i = !t && d));
                    break;
                case Sx.OverlayToggledClientSettingType.OOP_GAME:
                    (u(t), SA.Ay.toggleOverlay(e, d, t), (l = !t && o));
                    break;
                case Sx.OverlayToggledClientSettingType.LEGACY:
                    (SE.A.setEnabled(t, T), (0, Sx.Q3)(t, Sx.OverlayToggledClientSettingType.LEGACY, e.id ?? null));
                    break;
                case Sx.OverlayToggledClientSettingType.OOP:
                    (SE.A.setEnabled(x, t), (0, Sx.Q3)(t, Sx.OverlayToggledClientSettingType.OOP, e.id ?? null));
            }
            (i || l) &&
                SC(
                    i ? Sx.OverlayToggledClientSettingType.LEGACY_GAME : Sx.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = S && p,
            _ = !x && !T,
            N = !o && !x && d && !S,
            C = !d && !T && o && !p,
            b = i?.overlayMethod === ST.Ue.Disabled,
            y = i?.state === ST.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && SL.has(i.state) && !b,
            j = i?.overlayMethod === ST.Ue.OutOfProcess,
            O = i?.overlayMethod === ST.Ue.OutOfProcessLimitedInteraction,
            L = i?.overlayMethod === ST.Ue.Hook,
            D = i?.state === ST.AR.OVERLAY_CRASHED || i?.state === ST.AR.OVERLAY_CRASHED_DISABLED,
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
                                    case i?.fullscreenType !== Sh.aI.BORDERLESS_FULLSCREEN:
                                        return R.intl.string(R.t.mJmbeC);
                                    case p:
                                        return R.intl.string(R.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return R.intl.string(R.t.WiY24u);
                                    case !T:
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
                        let e = i?.fullscreenType === Sh.aI.FULLSCREEN ? R.intl.string(R.t.mJmbeC) : null;
                        return [R.intl.string(R.t.VPW4XY), e];
                    }
                    default:
                        return [R.intl.string(R.t.ONovP5), null];
                }
            })();
        (0, eS.Ay)(() => {
            SA.Ay.getDetectableGames();
        });
        let [U, V] = E.useMemo(
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
            : (0, A.jsxs)(SR, {
                  onExpand: m,
                  className: g ? Su.tx : void 0,
                  title: (0, A.jsxs)(A.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, A.jsx)(lt.m, {
                                    text: R.intl.string(R.t["4PJP5p"]),
                                    children: (0, A.jsx)(hx.A, {
                                        size: 16,
                                        color: nQ.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, A.jsx)(ho.U, {
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
                  hint: null != M ? M : void 0,
                  header: (0, A.jsxs)(A.Fragment, {
                      children: [
                          y || v
                              ? (0, A.jsx)(Sm.k, { size: "xxs", color: V })
                              : (0, A.jsx)("div", { className: Su.W4 }),
                          (0, A.jsx)(H.E, {
                              variant: "text-xs/semibold",
                              color: U,
                              children: R.intl.string(R.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, A.jsx)(i0.A, { game: t, pid: e?.pid, size: i0.M.MEDIUM }),
                  "aria-label": R.intl.string(R.t["87O5GC"]),
                  action: (0, A.jsx)(n0.D, {
                      onClick: (e) => Sd(e),
                      children: (0, A.jsx)(t$.d, {
                          checked: (o && T) || (d && x),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          (SA.Ay.toggleOverlay(e, t, t), c(t), u(t), (i = !t && d), (l = !t && o));
                                          break;
                                      case "global":
                                          (SE.A.setEnabled(t, t), (i = !t && x), (l = !t && T));
                                          break;
                                      case "both":
                                          (SE.A.setEnabled(t, t),
                                              SA.Ay.toggleOverlay(e, t, t),
                                              c(t),
                                              u(t),
                                              (i = (!t && x) || (!t && d)),
                                              (l = (!t && T) || (!t && o)));
                                  }
                                  let s = null;
                                  (i
                                      ? (s =
                                            "game" === n
                                                ? Sx.OverlayToggledClientSettingType.LEGACY_GAME
                                                : Sx.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? Sx.OverlayToggledClientSettingType.OOP_GAME
                                                : Sx.OverlayToggledClientSettingType.OOP),
                                      null != s && SC(s, e.id ?? null));
                              })(
                                  t,
                                  (function (e, t) {
                                      let n = !t && e,
                                          i = !T && o,
                                          l = !x && d,
                                          s = !o && T,
                                          r = !d && x;
                                      switch (!0) {
                                          case n && (i || l) && (s || r):
                                              return "both";
                                          case n && (i || l):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && T) || (d && x)),
                              );
                          },
                      }),
                  }),
                  warning: (0, A.jsx)(Sy, { className: Su.Hh, game: e }),
                  children: [
                      (0, A.jsx)(Sc, {
                          title: R.intl.string(R.t["7BlVIs"]),
                          description: R.intl.string(R.t.ndgADE),
                          hint: T ? void 0 : R.intl.string(R.t.cAFVsL),
                          "aria-label": R.intl.string(R.t["7BlVIs"]),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(t$.d, {
                                      checked: o && T,
                                      disabled: p,
                                      onChange: (e) => {
                                          e && !T
                                              ? f(e, Sx.OverlayToggledClientSettingType.OOP)
                                              : f(e, Sx.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: Su.Kz }),
                              ],
                          }),
                      }),
                      (0, A.jsx)(Sc, {
                          title: R.intl.string(R.t.BfFpW1),
                          description: R.intl.string(R.t.OzInYk),
                          hint: x ? void 0 : R.intl.string(R.t["3sYHXm"]),
                          "aria-label": R.intl.string(R.t.BfFpW1),
                          action: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(t$.d, {
                                      checked: d && x,
                                      disabled: S,
                                      onChange: (e) => {
                                          e && !x
                                              ? f(e, Sx.OverlayToggledClientSettingType.LEGACY)
                                              : f(e, Sx.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, A.jsx)("div", { className: Su.Kz }),
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
    useSearchTerms: () => [R.intl.string(R.t["9cb1Uz"])],
});
var SP = n(206885);
function SG(e) {
    let { game: t, gameApplication: n } = e,
        i = E.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, h.bG)([iW.A], () => (null != n ? n : iW.A.getApplication(t?.id)), [n, t]);
    return (0, A.jsx)(i0.A, { game: l, pid: i, size: i0.M.SMALL });
}
function SM(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, Sp.I)(t?.id);
    let o = (0, h.cf)([iQ.Ay, Sv.A, ti.A, SS.A], () => (0, iQ.xU)(t, iQ.Ay, Sv.A, ti.A, SS.A)),
        u = (0, h.cf)([Sv.A, ti.A, SS.A], () => (0, iQ.hw)(t, !1, [Sv.A, ti.A, SS.A]), [t]),
        d = l(u),
        [c, g] = E.useState(d);
    return (
        E.useEffect(() => {
            g(d);
        }, [d]),
        (0, A.jsx)(Sc, {
            title: t.name,
            icon: (0, A.jsx)(SG, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(t$.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return ((n = !e && c), void (g(e), s(e, o, u), n && SC(r, o.id ?? t?.id ?? null)));
                        },
                    }),
                    (0, A.jsx)("div", { className: Su.Kz }),
                ],
            }),
        })
    );
}
let SU = (0, d.E2)(c.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, h.cf)([Sf.default], () =>
                    Sf.default.getGlobalEnabledStatus(),
                ),
                l = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!0)).filter((e) => !(0, Ey.n1)(e)),
                s = (0, iZ.A)(l.map((e) => e.id)),
                r = !(0, Sj.supportsLegacy)();
            function a(e) {
                SE.A.setEnabled(e, i);
                let t = iQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, Sx.Q3)(e, Sx.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && SC(Sx.OverlayToggledClientSettingType.LEGACY, t));
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                SA.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () =>
                    (0, Sj.supportsLegacy)()
                        ? r
                            ? R.intl.string(R.t.r9jEVw)
                            : R.intl.string(R.t.OzInYk)
                        : R.intl.string(R.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, A.jsx)(Sc, {
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      className: Su.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(t$.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              SP.O && (0, A.jsx)("div", { className: Su.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(SR, {
                      onExpand: t,
                      className: e ? Su.tx : void 0,
                      title: R.intl.string(R.t.BfFpW1),
                      description: u,
                      "aria-label": R.intl.string(R.t.BfFpW1),
                      action: (0, A.jsx)(n0.D, {
                          onClick: (e) => Sd(e),
                          children: (0, A.jsx)(t$.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: Su.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(T.Ip, {
                              className: Su.XG,
                              children: l.map((e, t) =>
                                  (0, A.jsx)(
                                      SM,
                                      {
                                          rawGame: e,
                                          clientSettingType: Sx.OverlayToggledClientSettingType.LEGACY_GAME,
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
    SV = (0, d.E2)(c.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = E.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, h.cf)([Sf.default], () =>
                    Sf.default.getGlobalEnabledStatus(),
                ),
                l = !(0, Sj.supportsOutOfProcess)(),
                s = (0, h.yK)([iQ.Ay], () => iQ.Ay.getGamesSeen(!0)).filter((e) => !(0, Ey.n1)(e)),
                r = (0, iZ.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                SE.A.setEnabled(i, e);
                let l = iQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                ((0, Sx.Q3)(e, Sx.OverlayToggledClientSettingType.OOP, l),
                    t && SC(Sx.OverlayToggledClientSettingType.OOP, l));
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                SA.Ay.toggleOverlay(t, e, i);
            }
            let u = E.useMemo(
                () => (SP.O ? (l ? R.intl.string(R.t.C7bLTQ) : R.intl.string(R.t.ndgADE)) : R.intl.string(R.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, A.jsx)(Sc, {
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      className: Su.dA,
                      action: (0, A.jsxs)(A.Fragment, {
                          children: [
                              (0, A.jsx)(t$.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              SP.O && (0, A.jsx)("div", { className: Su.Kz }),
                          ],
                      }),
                  })
                : (0, A.jsxs)(SR, {
                      onExpand: t,
                      className: e ? Su.tx : void 0,
                      title: R.intl.string(R.t["7BlVIs"]),
                      description: u,
                      "aria-label": R.intl.string(R.t["7BlVIs"]),
                      action: (0, A.jsx)(n0.D, {
                          onClick: (e) => Sd(e),
                          children: (0, A.jsx)(t$.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, A.jsx)("div", {
                              className: Su.SC,
                              children: (0, A.jsx)(H.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.FzoWRo),
                              }),
                          }),
                          (0, A.jsx)(T.Ip, {
                              className: Su.XG,
                              children: s.map((e, t) =>
                                  (0, A.jsx)(
                                      SM,
                                      {
                                          rawGame: e,
                                          clientSettingType: Sx.OverlayToggledClientSettingType.OOP_GAME,
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
    Sk = (0, d.zZ)(c.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [SD, SV, SU, Sg],
    }),
    Sw = (0, d.zD)(c.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, h.bG)([Si.default], () => !Si.default.disableClickableRegions),
        setValue: (e) => {
            SE.A.setDisableClickableRegions(!e);
        },
        useTitle: () => R.intl.string(R.t["+eFXxq"]),
        useSubtitle: () => R.intl.string(R.t.kivMAp),
    }),
    SF = (0, d.E2)(c.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, h.bG)([lM.Ay], () => lM.Ay.getOverlayKeybind()),
                t = !(0, Sj.supportsLegacy)(),
                n = !(0, Sj.supportsOutOfProcess)(),
                [i, l] = (0, h.yK)([iQ.Ay], () => [iQ.Ay.canShowAdminWarning, iQ.Ay.getVisibleGame()], []),
                s = (0, i2.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, lM.DV)(e?.shortcut ?? []);
            return (0, A.jsx)("div", {
                className: Su.hc,
                children: (0, A.jsxs)("div", {
                    className: Su.eH,
                    children: [
                        (0, A.jsxs)("div", {
                            className: Su.Bu,
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
                                        className: Su.y7,
                                        children: R.intl.string(R.t.NsowVa),
                                    }),
                                a &&
                                    (0, A.jsx)(H.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: Su.y7,
                                        children: R.intl.string(R.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, A.jsx)("div", {
                            className: Su.IH,
                            children: (0, A.jsx)(ll.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    (ta()(null != e, "Keybind should never be undefined"),
                                        iY.A.setKeybind({ ...e, shortcut: t }));
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.VsAZcC)],
    });
var SB = n(515183),
    Sz = n(682763);
let SY = (0, d.zD)(c.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = iJ();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = iJ();
            return null != e && (0, SB.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = iJ(),
                n = t?.id,
                i = (0, h.bG)([St.A], () => St.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, SB.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = iq.A.getStreamerActiveStreamMetadata()),
                    (l = i$(
                        t,
                        (i =
                            null != (n = iQ.Ay.getVisibleGame())
                                ? iQ.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: iW.A.getApplication(l) ?? void 0 });
            null != s && (0, Sz.x8)(s.id, e);
        },
        useTitle: () => R.intl.string(R.t.wgVQND),
        useSubtitle: () => R.intl.string(R.t["5SsyF5"]),
    }),
    SX = (0, d.zZ)(c.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [SF, SY, Sw] });
var SH = n(93465);
let SK = [
    {
        title: R.t.eVE4LX,
        description: R.t["72WNqk"],
        disabledSetting: SH.M.TEXT_CHAT,
        key: c.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: R.t.oifnSh,
        description: R.t.bgU5r0,
        disabledSetting: SH.M.WELCOME_GENERAL,
        key: c.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: R.t.hqsZJW,
        description: R.t.kHjdqc,
        disabledSetting: SH.M.GO_LIVE_NUDGE,
        key: c.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: R.t.sop3rn,
        description: R.t.pjgffc,
        disabledSetting: SH.M.GAME_ACTIVITY,
        key: c.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: R.t["2QVhbb"],
        description: R.t.wQ4ilB,
        disabledSetting: SH.M.NOW_PLAYING,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: R.t.giM9fA,
        description: R.t.EhAfWj,
        disabledSetting: SH.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: c.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nS.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, h.bG)([St.A], () => St.A.isNotificationDisabledBySetting(SH.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function SW(e) {
    return (0, d.zD)(e.key, {
        useTitle: () => R.intl.string(e.title),
        useSubtitle: () => R.intl.string(e.description),
        useValue: () => !(0, h.bG)([St.A], () => St.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            SE.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let SZ = (0, d.FW)(c.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => SK.map(SW),
    }),
    Sq = (0, d.zZ)(c.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.xOE5bA),
        buildLayout: () => [SZ],
    }),
    SQ = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => R.intl.string(R.t.dnvZSg),
        useValue: () => (0, h.bG)([Si.default], () => Si.default.getAvatarSizeMode()),
        setValue: (e) => {
            SE.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: R.intl.string(R.t.YcOxtr), value: S.OSZ.LARGE },
            { id: "small", label: R.intl.string(R.t.BKIKqx), value: S.OSZ.SMALL },
        ],
    }),
    S$ = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => R.intl.string(R.t.J0dpcB),
        useValue: () => (0, h.bG)([Si.default], () => Si.default.getDisplayNameMode()),
        setValue: (e) => {
            SE.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.pwA.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: R.intl.string(R.t.ekjlPL), value: S.pwA.NEVER },
        ],
    }),
    SJ = (0, d.Hn)(c.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => R.intl.string(R.t.swsWWC),
        useValue: () => (0, h.bG)([Si.default], () => Si.default.getDisplayUserMode()),
        setValue: (e) => {
            SE.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: R.intl.string(R.t.nBmDrT), value: S.f5z.ALWAYS },
            { id: "speaking", label: R.intl.string(R.t["2OvIZY"]), value: S.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var S0 = n(391973),
    S1 = n(489277),
    S2 = n(897720),
    S3 = n(38502);
function S5() {
    let e = S1.A.getWidgetByType(S.uss.VOICE_V3);
    if (null == e) return null;
    let t = S3.A.getWidget(e.id);
    return null != t && (0, S2.ZO)(t) ? t : null;
}
n(392164);
let S4 = (0, d.sN)(c.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => R.intl.string(R.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? R.intl.string(R.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = S5();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? R.intl.string(R.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = S5();
        null != t &&
            (e < 1
                ? (0, S0.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, S0.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var S6 = n(450740),
    S8 = n(968898),
    S7 = n(288737);
function S9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new S7.A({
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
        user: new dT.A({ id: l, username: e }),
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
let pe = (0, d.E2)(c.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, h.cf)([Si.default], () => ({
                    avatarSizeMode: Si.default.getAvatarSizeMode(),
                    displayNameMode: Si.default.getDisplayNameMode(),
                    displayUserMode: Si.default.getDisplayUserMode(),
                })),
                [s] = E.useState(() => [
                    S9(R.intl.string(R.t.C0ZDvo), !0, !1),
                    S9(R.intl.string(R.t.iOtj8E), !1, !1, !0),
                    S9(R.intl.string(R.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, h.bG)([S1.A, S3.A], () => {
                    let e = S1.A.getWidgetByType(S.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = S3.A.getWidget(e.id);
                    return null != t && (0, S2.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = S9(t.username)).user = t), e) : null, ...s].filter(ii.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, A.jsx)(hN.N, {
                    theme: S.NJ8.ONYX,
                    children: (e) =>
                        (0, A.jsxs)("div", {
                            className: ir()(Su.Y5, e),
                            children: [
                                (0, A.jsx)("div", {
                                    className: Su.kJ,
                                    children: (0, A.jsx)(S6.DH, {
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
                                    className: Su.R$,
                                    children: [
                                        (0, A.jsx)(S8.Pl, { children: R.intl.string(R.t.KNJ6Vq) }),
                                        (0, A.jsx)(S8.CS, {}),
                                        (0, A.jsx)(S8.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, A.jsx)("div", { className: Su.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    pt = (0, d.zZ)(c.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => R.intl.string(R.t.r1TZfh),
        buildLayout: () => [pe, SQ, S$, SJ, S4],
    });
var pn = n(54761);
function pi() {
    let [e, t] = (0, gi.kn)([eu.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, z.Ay)(() => () => {
        t(gg.i.AUTO_DISMISS);
    }),
    e !== eu.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsxs)("div", {
                      className: pn.xC,
                      children: [
                          (0, A.jsx)("div", {
                              children: (0, A.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: R.intl.string(R.t.mdXZh1),
                                  className: pn.tl,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              children: (0, A.jsxs)("div", {
                                  className: pn.vJ,
                                  children: [
                                      (0, A.jsx)(x.D, {
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
                                  className: pn.lh,
                              }),
                          }),
                          (0, A.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pn.VV,
                              children: (0, A.jsx)(_.$, {
                                  variant: "primary",
                                  text: R.intl.string(R.t.Q26diF),
                                  onClick: () => void t(gg.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, A.jsx)(i8.c, { className: pn.yF }),
              ],
          });
}
function pl() {
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
                  (0, A.jsx)(i8.c, { className: pn.yF }),
              ],
          })
        : null;
}
let ps = (0, d.t_)(c.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                Sr(),
                lM.Ay.addChangeListener(Sr),
                St.A.addChangeListener(Sr),
                Si.default.addChangeListener(Sr),
                Sn.default.addChangeListener(Sr),
                eQ.isPlatformEmbedded && (0, Ej.a2)(),
                () => {
                    (lM.Ay.removeChangeListener(Sr),
                        St.A.removeChangeListener(Sr),
                        Si.default.removeChangeListener(Sr),
                        Sn.default.removeChangeListener(Sr),
                        eQ.isPlatformEmbedded && (0, Ej.e0)());
                }
            );
        },
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        decoration: {
            type: m.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(pi, {}), (0, A.jsx)(pl, {})] });
            },
        },
        buildLayout: () => [Sk, SX, pt, Sq],
    }),
    pr = (0, d.i4)(c.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        icon: Se.l,
        usePredicate: nx.b_,
        buildLayout: () => [ps],
    });
var pa = n(687966);
let po = (0, d.AK)(c.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.OYYY6q),
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    pu = (0, d.gN)(c.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [po] });
var pd = n(227309),
    pc = n(29160),
    pg = n(552366),
    pm = n(938442);
function pA(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, Sp.I)(t.id);
    let o = (0, h.cf)([iQ.Ay, Sv.A, ti.A, SS.A], () => (0, iQ.xU)(t, iQ.Ay, Sv.A, ti.A, SS.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, h.cf)([iQ.Ay], () => ({
            canToggleDetection: null == a || iQ.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: iQ.Ay.isDetectionEnabled(o),
        })),
        c = (0, h.bG)([iQ.Ay], () => iQ.Ay.getVisibleGame()),
        [g, m] = E.useState(!1),
        p = E.useRef(null),
        x = null != c && (0, iQ.Es)(o) === (0, iQ.Es)(c),
        T = !l && !g,
        f = !i && !x,
        I = T || f,
        _ = E.useMemo(
            () =>
                (0, Ey.n1)(o)
                    ? r
                        ? o.gameName
                        : R.intl.formatToPlainString(R.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [N, C] = E.useState(_ ?? "???"),
        b = ir()(pm.tR, {
            [pg.LO]: !i,
            [pg.Rw]: i,
            [pg.FB]: null != o && i,
            [pg.xL]: r,
            [pg.fG]: null != s && s.length > 0,
        });
    function y() {
        (SA.Ay.deleteEntry(o),
            s?.forEach((e) => {
                SA.Ay.deleteEntry(e);
            }));
    }
    function v() {
        if (g) return;
        let e = null != o.id ? Sv.A.getDetectableGame(o.id) : null;
        (tt.default.track(S.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: e?.id,
            game_name: (0, Ey.n1)(o) ? o.gameName : o.name,
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
                        className: ir()(pg.$K, pm.Vd),
                        children: [
                            o.verified && !l
                                ? (0, A.jsxs)("div", {
                                      className: pg.HS,
                                      children: [
                                          (0, A.jsx)("div", { className: pg.mO, children: _ }),
                                          (0, A.jsx)(lt.m, {
                                              text: R.intl.string(R.t["4PJP5p"]),
                                              children: (0, A.jsx)(hx.A, {
                                                  className: pg.qf,
                                                  size: 18,
                                                  color: nQ.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, A.jsx)(ho.U, {
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
                                      className: ir()(pg.mO, pg.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: N,
                                      onBlur: function () {
                                          o.name !== N && SA.Ay.editName(o, N);
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
                                    i || x
                                        ? (e = R.intl.string(R.t.VbV5dv))
                                        : null != n && "" !== n && (e = R.intl.format(R.t["gGeOE+"], { when: n })),
                                    (0, A.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: pg.GN,
                                        children: (0, A.jsx)(pc.A, {
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
                        (0, A.jsx)(ae.Y, {
                            targetElementRef: p,
                            position: "bottom",
                            align: "right",
                            spacing: 4,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, A.jsx)(co.W, {
                                    navId: "registered-game-overflow-menu",
                                    onSelect: void 0,
                                    onClose: t,
                                    "aria-label": R.intl.string(R.t["UKOtz+"]),
                                    children: (0, A.jsxs)(e3.rX, {
                                        children: [
                                            T &&
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
                                    className: ir()(pg._Q, { [pg.g9]: t.isShown }),
                                    children: (0, A.jsx)(lt.m, {
                                        text: R.intl.string(R.t["UKOtz+"]),
                                        asContainer: !0,
                                        ariaHidden: !0,
                                        children: (0, A.jsx)(i9.K, {
                                            ...e,
                                            buttonRef: p,
                                            icon: cs.MoreHorizontalIcon,
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
                                                              (SA.Ay.toggleDetection(o), t.onClose());
                                                          },
                                                          variant: "primary",
                                                      },
                                                  ],
                                              });
                                      })
                                    : SA.Ay.toggleDetection(o);
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
                    className: pg.AQ,
                    children: s.map((e, t) =>
                        (0, A.jsxs)(
                            E.Fragment,
                            {
                                children: [
                                    (0, A.jsx)(pA, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, A.jsx)("div", { className: pg.PQ }),
                                ],
                            },
                            (0, iQ.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function pE() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = EL();
    return 0 === e.length
        ? null
        : (0, A.jsx)(Y.B, {
              padding: { bottom: 32 },
              children: (0, A.jsx)(nJ.n, {
                  children: (0, A.jsx)("div", {
                      children: e.map((e) =>
                          (0, A.jsx)(
                              pA,
                              { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === pd.a7 ? t : void 0 },
                              (0, iQ.Es)(e),
                          ),
                      ),
                  }),
              }),
          });
}
let ph = (0, d.E2)(c.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, A.jsx)(pE, {}),
});
var pS = n(424994);
let pp = (0, d.zZ)(c.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [ph, pu],
    useTitle: () => R.intl.string(R.t.jCOdvx),
    useSubtitle: () =>
        (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, Ey.n1)(e)))
            ? R.intl.format(R.t.KPA3m9, { igdbLink: pS.s8 })
            : R.intl.string(R.t["1yiJwn"]),
});
var px = n(890497),
    pT = n(853270),
    pf = n(969426);
function pI(e) {
    let { onClose: t } = e,
        n = (0, h.bG)([iQ.Ay], () => iQ.Ay.getCandidateGames()),
        [i, l] = E.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, A.jsxs)(at.l, {
        className: ir()(pT.H, pf.Y_),
        "aria-label": R.intl.string(R.t.GTCx0p),
        children: [
            (0, A.jsx)(px.Z, {
                selectionMode: "single",
                placeholder: R.intl.string(R.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, A.jsxs)("div", {
                className: ir()(pT.o, pm.xM),
                children: [
                    (0, A.jsx)(Es.Q, { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: t }),
                    (0, A.jsx)(_.$, {
                        variant: "primary",
                        text: R.intl.string(R.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (SA.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var p_ = n(475007);
function pN() {
    let e = E.useRef(null);
    return (0, A.jsxs)("div", {
        className: ir()(p_.a, AL.Gf),
        children: [
            (0, A.jsx)("span", { children: R.intl.string(R.t.xwhoqM) }),
            (0, A.jsx)(ae.Y, {
                targetElementRef: e,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, A.jsx)(pI, { onClose: t });
                },
                align: "center",
                position: "bottom",
                children: (t) =>
                    (0, A.jsx)(Es.Q, {
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
function pC() {
    return (0, A.jsx)("div", {
        className: ir()(pm.tR, pg.eS, pg.Rw),
        children: (0, A.jsxs)("div", {
            className: ir()(pg.$K, pm.Vd),
            children: [
                (0, A.jsx)("div", { className: pg.mO, children: R.intl.string(R.t.H68X9x) }),
                (0, A.jsx)(pN, {}),
            ],
        }),
    });
}
let pb = (0, d.E2)(c.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = EL(),
                n = (0, h.bG)([iQ.Ay], () => iQ.Ay.getVisibleGame());
            return null == n
                ? (0, A.jsx)(pC, {})
                : (0, A.jsxs)("div", {
                      className: ir()(pm.Vd, pg.C2),
                      children: [
                          (0, A.jsx)(
                              pA,
                              {
                                  rawGame: n,
                                  isOverride: t.has(n.exePath),
                                  nowPlaying: !0,
                                  subgames: n.id === pd.a7 ? e : void 0,
                              },
                              (0, iQ.Es)(n),
                          ),
                          (0, A.jsx)(pN, {}),
                      ],
                  });
        },
    }),
    py = (0, d.zZ)(c.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => R.intl.string(R.t["MY9/Oe"]),
        buildLayout: () => [pb],
    }),
    pv = (0, d.t_)(c.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        buildLayout: () => [py, pp],
    }),
    pj = (0, d.i4)(c.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.AVDyEj),
        icon: pa.GameControllerIcon,
        usePredicate: nx.Pi,
        buildLayout: () => [pv],
    }),
    pO = (0, d.WI)(c.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => R.intl.string(R.t.BA9200),
        buildLayout: () => [pj, hl, pr, h9],
    });
var pL = n(631670),
    pR = n(619499),
    pD = n(836602),
    pP = n(591179),
    pG = n(402860),
    pM = n(761508),
    pU = n(159001),
    pV = n(344346),
    pk = n(919395),
    pw = n(68750);
function pF(e) {
    let { title: t, children: n } = e;
    return (0, A.jsxs)("div", {
        children: [(0, A.jsx)(x.D, { variant: "text-md/medium", className: pw.Vf, children: t }), n],
    });
}
function pB(e) {
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
        className: ir()(pw.UA, n),
        children: (0, A.jsxs)("div", {
            className: ir()(pw.yt, i),
            children: [
                (0, A.jsx)("div", {
                    className: ir()(pw.Fp, a && pw.Oz),
                    children: (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)(pF, { title: s ?? R.intl.string(R.t.Zb06yP), children: l }),
                            null != r ? (0, A.jsx)(pF, { title: R.intl.string(R.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, A.jsx)("div", { className: pw.oB, children: t }),
            ],
        }),
    });
}
var pz = n(986687),
    pY = n(101058),
    pX = n(321191),
    pH = n(696451),
    pK = n(590941);
function pW() {
    return (0, A.jsxs)("div", {
        className: pK.p$,
        children: [
            (0, A.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: pK.Sl }),
            (0, A.jsx)(x.D, { className: pK.h8, variant: "heading-lg/extrabold", children: R.intl.string(R.t.Z1OZCV) }),
            (0, A.jsx)(H.E, { className: pK.h8, variant: "text-md/normal", children: R.intl.string(R.t.ZSt4Tt) }),
            (0, A.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: pK.h8,
                children: (0, A.jsx)(_.$, {
                    variant: "primary",
                    text: R.intl.string(R.t.jQ3pqt),
                    onClick: function () {
                        ((0, tJ.pX)(S.BVt.GUILD_DISCOVERY), (0, tU.default)());
                    },
                }),
            }),
        ],
    });
}
var pZ = n(81400),
    pq = n(450232),
    pQ = n(252732),
    p$ = n(355622),
    pJ = n(408018),
    p0 = n(959070),
    p1 = n(290386),
    p2 = n(486264);
let p3 = (0, tw.Ld)(),
    p5 = (0, j.createChannelRecord)({ id: "1", type: S.rbe.DM }),
    p4 = (0, tw.Ld)();
function p6(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, p1.U)({ location: "profile_customization_about_me" }),
        [u, d] = E.useState(l ?? r),
        [c, g] = E.useState((0, pJ.x7)(u)),
        m = E.useRef(r),
        h = E.useRef(!1);
    return (
        E.useEffect(() => {
            if (m.current !== r) {
                let e = (0, pJ.x7)(r);
                (d(r), g(e));
            }
            m.current = r;
        }, [r]),
        E.useEffect(() => {
            void 0 !== l || u === r || h.current || (d(r), g((0, pJ.x7)(r)));
        }, [l, r, u]),
        (0, A.jsxs)(r4.A, {
            title: t,
            titleId: p3,
            description: R.intl.string(R.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, A.jsx)(p0.Ay, {
                    "aria-describedby": p4,
                    "aria-labelledby": p3,
                    className: p2.i,
                    innerClassName: p2.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), g(n), i(t));
                    },
                    placeholder: s,
                    channel: p5,
                    textValue: u,
                    richValue: c,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: nl.USER_SETTINGS_MODAL_KEY,
                    type: p$.oU.PROFILE_BIO_INPUT,
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
                (0, A.jsx)(ln.A, { id: p4, children: R.intl.format(R.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var p8 = n(821956),
    p7 = n(562819),
    p9 = n(84540),
    xe = n(467690);
function xt(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eP.Ay)(),
        o = (0, pk.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, pk.CP)(n?.id),
        c = r ? dp.wL : sk.$n;
    return (0, A.jsx)(r4.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, A.jsxs)("div", {
            className: xe.NC,
            children: [
                (0, A.jsx)(c, {
                    size: sk.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, p7.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ir()({ [xe.yj]: r }),
                    children: R.intl.string(R.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xe.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, p8.uZ)(t, n) ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.OrokWm),
                            onClick: function () {
                                (0, p9.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xn = n(339984),
    xi = n(942132);
let xl = [{ name: "gif", extensions: ["gif"] }];
function xs(e) {
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
        m = c ? dp.wL : sk.$n,
        h = E.useCallback(() => {
            (0, pQ.XD)({
                uploadType: xn.HL.AVATAR,
                analyticsSource: g,
                filters: u ? xl : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, A.jsx)(r4.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, A.jsxs)("div", {
            className: xi.NC,
            children: [
                (0, A.jsx)(m, {
                    className: ir()({ [xi.yj]: c }),
                    size: sk.$n.Sizes.SMALL,
                    onClick: h,
                    children: s ?? R.intl.string(R.t["4OynCD"]),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xi.DT,
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
var xr = n(248778),
    xa = n(810188);
function xo(e) {
    let { user: t, guildId: n, className: i } = e,
        l = ai.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, eP.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, pk.B0)(t, n),
        d = (0, xr.ux)("DisplayNameStylesSection"),
        [c, g] = (0, gi.kn)(d ? [eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        m = c === eu.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        h = (0, E.useCallback)(() => {
            (g(gg.i.TAKE_ACTION),
                tt.default.track(S.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eG.L)({ analyticsLocations: s, guildId: n }));
        }, [s, n, g]),
        p = (0, E.useCallback)(() => {
            ((0, p9.p)({ displayNameStyles: null }), tt.default.track(S.HAw.DISPLAY_NAME_STYLES_REMOVED));
        }, []),
        x = (0, E.useCallback)(() => {
            (0, p9.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        T = void 0 !== o ? o : null != n ? a : r;
    return (0, A.jsx)(r4.A, {
        title: R.intl.string(eM.default["86GtGH"]),
        titleBadge: m ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t.y2b7CA), className: xa.A }) : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: xa.N,
            children: [
                (0, A.jsx)(_.$, { variant: "primary", size: "sm", text: R.intl.string(eM.default.vJqrIg), onClick: h }),
                null == n &&
                    null != T &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eM.default.ymq8WQ),
                        onClick: p,
                    }),
                null != n &&
                    null != T &&
                    (0, A.jsx)(_.$, {
                        variant: "secondary",
                        size: "sm",
                        text: R.intl.string(eM.default["j/KRxc"]),
                        onClick: x,
                    }),
            ],
        }),
    });
}
var xu = n(637193),
    xd = n(622410);
function xc(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, pk.rv)(t, n?.id),
        d = E.useCallback(() => {
            (0, xu.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = E.useCallback(() => {
            (0, p9.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, A.jsx)(r4.A, {
        title: R.intl.string(R.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, A.jsxs)("div", {
            className: xd.u,
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
var xg = n(88524);
function xm(e) {
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
        g = d ? dp.wL : sk.$n;
    return (0, A.jsx)(r4.A, {
        className: s,
        title: R.intl.string(R.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, A.jsxs)("div", {
            className: xg.NC,
            children: [
                (0, A.jsx)(g, {
                    className: ir()({ [xg.yj]: d }),
                    size: sk.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, pQ.XD)({ uploadType: xn.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: R.intl.string(R.t.N0bC3P),
                }),
                t &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xg.DT,
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
var xA = n(617061),
    xE = n(625613);
function xh(e) {
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
        d = ai.Ay.canUsePremiumProfileCustomization(t),
        c = (0, pk.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, pk.nZ)(n?.id);
    E.useEffect(() => {
        d &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tY.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tB.uq)(tY.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let h = a ? dp.wL : sk.$n;
    return (0, A.jsx)(r4.A, {
        forcedDivider: r,
        borderType: um.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, A.jsxs)("div", {
            className: xE.NC,
            children: [
                (0, A.jsx)(h, {
                    size: sk.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, xA.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ir()({ [xE.yj]: a }),
                    children: R.intl.string(R.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xE.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.uMuafO),
                            onClick: function () {
                                (0, p9.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xS = n(515727),
    xp = n(594401);
function xx(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, eP.Ay)(),
        s = (0, pk.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: a } = (0, pk.Tu)(n?.id),
        [o, u] = (0, gi.kn)([eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        d = o === eu.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return (0, A.jsx)(r4.A, {
        showBorder: d,
        borderType: d ? um.i.NEW_UPSELL : um.i.PREMIUM,
        hasBackground: d,
        title: i,
        titleBadge: d ? (0, A.jsx)(tn.Lp, { text: R.intl.string(R.t.y2b7CA), className: xp.Ad }) : void 0,
        description: d ? R.intl.string(R.t.yMoMAt) : void 0,
        errors: a,
        children: (0, A.jsxs)("div", {
            className: xp.NC,
            children: [
                (0, A.jsx)(_.$, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t["9/hmle"]),
                    onClick: function () {
                        ((0, xS.w)({ analyticsLocations: l, guild: n }), u(gg.i.TAKE_ACTION));
                    },
                }),
                (void 0 === r ? null != s : null != r) &&
                    (0, A.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xp.DT,
                        children: (0, A.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? R.intl.string(R.t.CHf9iJ) : R.intl.string(R.t.nQBruk),
                            onClick: function () {
                                (0, p9.p)({ guildId: n?.id, profileFrame: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xT = n(602853),
    xf = n(654107),
    xI = n(999291),
    x_ = n(101928),
    xN = n(819169),
    xC = n(317097),
    xb = n(508274),
    xy = n(379012);
function xv(e) {
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
        c = (0, xT.r)(nQ.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = nQ.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, pQ.sN)(i),
        h = (0, xC.Hl)(i),
        p = h === c ? g : h,
        x = m ? nQ.A.unsafe_rawColors.WHITE.css : nQ.A.unsafe_rawColors.PRIMARY_530.css,
        T = (0, xN.A)(a),
        f = (0, xN.A)(o),
        [I, _] = E.useState((0, ot.A)());
    return (
        E.useEffect(() => {
            (T !== a || f !== o) && _((0, ot.A)());
        }, [o, a, f, T]),
        (0, A.jsx)(ae.Y, {
            targetElementRef: d,
            positionKey: I,
            renderPopout: (e) =>
                (0, A.jsx)(xb.VN, {
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
                    className: ir()(xy.oP, { [xy.r9]: s }),
                    children: [
                        (0, A.jsx)(n0.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? S.tEg : t,
                            style: { backgroundColor: h, borderColor: p },
                            className: xy.nf,
                            "aria-label": R.intl.string(R.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, A.jsx)(an.PencilIcon, {
                                size: "custom",
                                className: xy.BW,
                                width: 14,
                                height: 14,
                                color: x,
                            }),
                        }),
                        r,
                    ],
                });
            },
        })
    );
}
var xj = n(190377);
function xO(e) {
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
        c = (0, xI.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: m } = (0, x_.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        E = ai.Ay.canUsePremiumProfileCustomization(t),
        h = null != n ? n : t.getAvatarURL(r, 80),
        S = (0, xT.r)(nQ.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = (0, xf.rh)(h, S, !1);
    return null == g || null == m
        ? null
        : (0, A.jsx)(r4.A, {
              title: R.intl.string(R.t.DMeO2X),
              disabled: !E && !s,
              className: ir()(xj.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, A.jsxs)("div", {
                  className: xj.hd,
                  children: [
                      (0, A.jsx)("div", {
                          className: xj.YX,
                          children: (0, A.jsx)(xv, {
                              onChange: (e) => l([e, m]),
                              color: g,
                              suggestedColors: p,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: xj.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: R.intl.string(R.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, A.jsx)("div", {
                          className: xj.YX,
                          children: (0, A.jsx)(xv, {
                              onChange: (e) => l([g, e]),
                              color: m,
                              suggestedColors: p,
                              showEyeDropper: !0,
                              label: (0, A.jsx)(H.E, {
                                  className: xj.yz,
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
                              className: xj.WA,
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
function xL(e) {
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
    return (0, A.jsx)(r4.A, {
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
var xR = n(427262),
    xD = n(684732),
    xP = n(576705),
    xG = n(931175);
function xM(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, h.bG)([xP.A], () => xP.A.can(S.xBc.CHANGE_NICKNAME, r) || xP.A.can(S.xBc.MANAGE_NICKNAMES, r)),
        o = (0, hI.L)(tY.PremiumTypes.TIER_2);
    return (0, A.jsxs)(r4.A, {
        title: R.intl.string(R.t.me1lRk),
        errors: t,
        children: [
            (0, A.jsx)(lo.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: S.d0r,
                onChange: function (e) {
                    (0, p9.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : R.intl.string(R.t.gzjxQi),
            }),
            o && (0, A.jsx)(xo, { user: s, guildId: r.id, className: xG.F }),
        ],
    });
}
var xU = n(233454);
let xV = "/assets/b25da78aa7949feb.png";
function xk(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, uU.Ay)(),
        { analyticsLocations: s } = (0, eP.Ay)(tL.A.PREMIUM_UPSELL_OVERLAY);
    return (E.useEffect(() => {
        n &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: tY.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                (0, tB.uq)(tY.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, s]),
    n)
        ? (0, A.jsxs)("div", {
              className: xU.ry,
              children: [
                  (0, A.jsx)("div", { children: i }),
                  (0, A.jsxs)("div", {
                      className: xU.Wc,
                      children: [
                          (0, A.jsx)("img", {
                              className: xU.Tn,
                              alt: R.intl.string(R.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case S.NJ8.ASH:
                                      case S.NJ8.DARK:
                                      case S.NJ8.ONYX:
                                          return xV;
                                      case S.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xV;
                                  }
                              })(l),
                          }),
                          (0, A.jsxs)("div", {
                              className: xU._9,
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
                          (0, A.jsx)(ug.A, {
                              size: sk.$n.Sizes.LARGE,
                              color: sk.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: ai.Ay.isPremium(t)
                                      ? R.intl.string(R.t.AfRWI8)
                                      : R.intl.string(R.t.nkdUym),
                              },
                              subscriptionTier: tY.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var xw = n(203164);
function xF() {
    let e = (0, h.bG)([si.default], () => {
            let e = si.default.getCurrentUser();
            return (ta()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        t = (0, hI.L)(tY.PremiumTypes.TIER_2),
        n = (0, h.bG)([pD.A, lh.A], () => lh.A.getGuild(pD.A.selectedGuildId));
    ta()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, h.cf)([pD.A], () => ({ ...pD.A.getPendingChanges(n.id), errors: pD.A.getErrors(n.id) })),
        d = (0, pY.V7)({ userId: e.id, image: i }),
        c = (0, pZ.EC)(n.id),
        g = (0, h.bG)([pH.Ay], () => (null == n.id ? null : pH.Ay.getMember(n.id, e.id))),
        m = (0, h.bG)([pX.A], () => pX.A.getGuildMemberProfile(e.id, n.id)),
        E = ai.Ay.canUsePremiumProfileCustomization(e),
        S = (0, pk.z5)(i, g?.avatar),
        p = (0, pk.Ac)(s, m?.banner),
        x = (0, xD.l)(o, m?.themeColors),
        T = m?.bio ?? "",
        f = m?.pronouns ?? "";
    return (0, A.jsxs)("div", {
        className: xw.Q,
        children: [
            (0, A.jsx)(
                xM,
                {
                    errors: u?.nick ?? c?.nick,
                    username: xR.Ay.getName(e),
                    pendingNick: l,
                    currentNick: g?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, A.jsx)(
                xL,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, p9.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, A.jsxs)(xk, {
                user: e,
                showOverlay: !E,
                children: [
                    (0, A.jsx)(
                        xs,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.lqaIxI), (0, A.jsx)(pq.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, pQ.rM)(e, g?.avatar, (e) => (0, p9.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, A.jsx)(
                        xt,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t["7v0T9P"]), (0, A.jsx)(pq.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, A.jsx)(xo, { user: e, guildId: n.id }),
                    (0, A.jsx)(
                        xc,
                        { user: e, guild: n, titleIcon: (0, A.jsx)(pq.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, A.jsx)(
                        xh,
                        {
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.wR5wOo), (0, A.jsx)(pq.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, A.jsx)(
                        xx,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.GWrZOd), (0, A.jsx)(pq.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, A.jsx)(
                        xm,
                        {
                            showRemoveBannerButton: p,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, pQ.rM)(e, m?.banner, (e) => (0, p9.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, A.jsx)(xO, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, p9.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, A.jsx)(
                        p6,
                        {
                            placeholder: R.intl.string(R.t["/7NKgv"]),
                            sectionTitle: (0, A.jsxs)(A.Fragment, {
                                children: [R.intl.string(R.t.ZzAR2Y), (0, A.jsx)(pq.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, p9.p)({ guildId: n.id, bio: e }),
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
var xB = n(832131);
function xz(e) {
    (0, la.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, A.jsx)(t, { source: { ...e, page: S.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function xY(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(tL.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, h.bG)([si.default], () => {
            let e = si.default.getCurrentUser();
            return (ta()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e);
        }),
        s = (0, h.bG)([pH.Ay], () => (null != t ? pH.Ay.getMember(t.id, l.id) : null)),
        r = (0, h.bG)([pX.A], () => !pX.A.isFetchingProfile(l.id, t?.id)),
        a = (0, h.bG)([te.A], () => te.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, h.cf)([pD.A], () => pD.A.getPendingChanges(t?.id)),
        c = (0, pY.V7)({ userId: l.id, image: o }),
        g = (0, pk.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, pk.B0)(l, t?.id);
    return (E.useEffect(() => () => e4.h.wait(pU.IM), []), a)
        ? (0, A.jsx)(a7.A, {})
        : r
          ? (0, A.jsxs)(eP.f5, {
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
                                  (0, A.jsx)(r5.A, { guildId: t.id, onChange: n }),
                                  (0, A.jsx)(pB, {
                                      profilePreviewTitle: (0, A.jsx)(x.D, {
                                          variant: "heading-md/medium",
                                          className: xB.YV,
                                          children: R.intl.formatToPlainString(R.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, A.jsx)(pz.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: ai.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: xz,
                                          containerClassName: xB.ti,
                                      }),
                                      nameplatePreview: (0, A.jsx)(pV.A, {
                                          ...d,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? xB.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, A.jsx)(xF, {}),
                                  }),
                              ],
                          })
                        : (0, A.jsx)(pW, {}),
                ],
            })
          : (0, A.jsx)(oe.y, {});
}
var xX = n(903209),
    xH = n(641130);
function xK(e) {
    let { children: t, notice: n } = e;
    return (0, A.jsxs)("div", { className: xH.r, children: [n, (0, A.jsx)("div", { children: t })] });
}
var xW = n(823092),
    xZ = n(839534),
    xq = n(379197),
    xQ = n(488430),
    x$ = n(457421),
    xJ = n(940622),
    x0 = n(25176),
    x1 = n(757993);
let x2 = function () {
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
        } = ((e = (0, xJ.mb)(x0.RN.UPSELL_BANNER)),
        (t = (0, xJ.mb)(x0.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, h.bG)([x$.A], () => x$.A.getMarketingBySurface(xq.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...i, type: xQ.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, xW.L_)();
    return (
        E.useEffect(() => {
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tY.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            }),
                (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, l, () =>
                    (0, tB.uq)(tY.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
                ));
        }, [l, d]),
        (0, A.jsxs)("div", {
            ref: s,
            className: x1.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, A.jsx)("div", {
                    className: x1.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, A.jsx)("img", { src: a, className: x1.Qw, alt: "" }),
                }),
                (0, A.jsxs)("div", {
                    className: x1.Em,
                    children: [
                        (0, A.jsx)(x.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: x1.DD,
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
                            (0, xZ.Cz)({
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
var x3 = n(451909),
    x5 = n(202639),
    x4 = n(285373),
    x6 = n(835071),
    x8 = n(724651),
    x7 = n(732280),
    x9 = n(590180),
    Te = n(898461),
    Tt = n(469054),
    Tn = n(601298),
    Ti = n(207803),
    Tl = n(461797);
let Ts = Object.keys(Tl.jB);
function Tr(e) {
    let t = null == e ? Ts : Ts.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var Ta = n(201805),
    To = n(221650);
function Tu(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion),
        l = (0, Ta.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = E.useMemo(() => {
            let e = (0, Tl.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, A.jsxs)("div", {
        className: To.kL,
        children: [
            (0, A.jsx)(n0.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                className: To.x6,
                "aria-label": R.intl.string(R.t["44yJxh"]),
                children: l.render(),
            }),
            (0, A.jsxs)(n0.D, {
                onClick: () => {
                    (n(), l.startAnimation(!1));
                },
                "aria-label": `${s}: ${R.intl.string(R.t["44yJxh"])}`,
                className: To.Lt,
                children: [
                    (0, A.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: To.L_ }),
                    (0, A.jsx)(H.E, {
                        className: To._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var Td = n(511484),
    Tc = n(811611),
    Tg = n(206697),
    Tm = n(507553);
function TA(e, t) {
    let n = Tm.A.useField("scrollPosition"),
        i = (0, h.bG)([N.Ay], () => N.Ay.useReducedMotion);
    (0, E.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            (l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), Tm.A.setState({ scrollPosition: null }));
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var TE = n(844222),
    Th = n(842092);
let TS = "/assets/d4955aabdcb5bdee.png",
    Tp = { assetOrigin: Tt.E.NEW_ASSET, imageUri: TS, staticImageUri: TS, description: "", originalAsset: void 0 };
function Tx(e) {
    let { user: t } = e,
        { reducedMotion: n } = E.useContext(TE.C),
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
            tryItOutDisplayNameStyles: p,
        } = (0, h.cf)([pD.A], () => {
            let e = pD.A.getPendingChanges(),
                t = pD.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        x = (0, pY.V7)({ userId: t.id, image: g ?? i });
    return (0, A.jsx)(pz.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: m ?? l ?? Tp,
        pendingDisplayNameStyles: p ?? a,
        pendingAvatar: x,
        pendingThemeColors: c ?? o,
        pendingAvatarDecoration: void 0 !== S ? S : s,
        pendingProfileEffect: r,
        avatarClassName: null != g || null != i || n.enabled ? void 0 : Th.WX,
        containerClassName: Th.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var TT = n(829497);
function Tf(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = ai.Ay.isPremium(t),
        s = ai.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, h.cf)([pD.A], () => {
            let e = pD.A.getPendingChanges(),
                t = pD.A.getErrors(),
                n = pD.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let [e, t] = (0, E.useState)(Tr()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, E.useMemo)(() => {
                    let t = (0, Tl.Wt)(e);
                    return {
                        banner: (0, Tn.X)({
                            assetOrigin: Tt.E.NEW_ASSET,
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
                r = (0, h.bG)([x9.A], () => {
                    let e = x9.A.getProduct(l);
                    return (0, Te.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, E.useEffect)(() => {
                (0, Ti.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, E.useCallback)(() => {
                let n = Tr(e);
                (t(n), tt.default.track(S.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }));
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        m = E.useRef(null);
    TA(m, eC._F.TRY_IT_OUT);
    let { analyticsLocations: p, sourceAnalyticsLocations: T } = (0, eP.Ay)(tL.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function f(e) {
        e && ((0, Tg.T)(), tt.default.track(S.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
    }
    E.useEffect(() => {
        n &&
            (tt.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tY.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: S.liQ.USER_SETTINGS },
                location_stack: T,
            }),
            (0, tF.sq)(S.U7l.PREMIUM_UPSELL_VIEWED, T, () => (0, tB.uq)(tY.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [T, t, n]);
    let I = (0, x7.V)()?.subscriptionTrial?.skuId === tY.pe.TIER_2,
        _ = (0, x8.O)(),
        N = (0, Td.U9)(_, tY.pe.TIER_2);
    return i
        ? (0, A.jsx)(eP.f5, {
              value: p,
              children: (0, A.jsxs)(um.A, {
                  ref: m,
                  className: TT.MT,
                  type: um.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, A.jsx)(pB, {
                          stickyPreview: !1,
                          layoutClassName: TT.th,
                          profilePreviewTitle: (0, A.jsxs)(A.Fragment, {
                              children: [
                                  (0, A.jsx)(r1.t, { size: "md", color: "currentColor", className: TT.PC }),
                                  R.intl.string(R.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, A.jsxs)(A.Fragment, {
                              children: [(0, A.jsx)(Tu, { preset: c, onShuffle: g }), (0, A.jsx)(Tx, { user: t })],
                          }),
                          children: (0, A.jsxs)("div", {
                              children: [
                                  (0, A.jsxs)("div", {
                                      children: [
                                          (0, A.jsx)(x.D, {
                                              variant: "heading-xl/extrabold",
                                              children: R.intl.string(R.t["2zGdAW"]),
                                          }),
                                          (0, A.jsx)(H.E, {
                                              className: TT.h_,
                                              variant: "text-sm/normal",
                                              children: R.intl.string(R.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, A.jsx)(xO, {
                                      className: TT.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, pY.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: Ti.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, A.jsx)(xm, {
                                      className: TT.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: Ti.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, A.jsx)(xs, {
                                          className: TT.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: Ti.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: R.intl.string(R.t["7z0D1c"]),
                                          sectionTitle: R.intl.string(R.t.vtFfPX),
                                      }),
                                  (0, A.jsx)(xo, { user: t, className: TT.fz }),
                                  !I &&
                                      (0, A.jsx)(H.E, {
                                          variant: "text-sm/normal",
                                          children: R.intl.string(R.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !I &&
                          (0, A.jsx)(x5.d, {
                              onSubscribeModalClose: f,
                              className: TT.Kv,
                              showUpsell: !0,
                              text: R.intl.format(R.t.TmfgI2, {
                                  onClick: () => {
                                      (0, x6.K)({ onSubscribeFinish: f });
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
                                  (0, A.jsx)("div", { className: TT.BU }),
                                  (0, A.jsx)(Tc.Ay, {
                                      type: tY.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tY.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var TI = n(814390),
    T_ = n(643056),
    TN = n(843282),
    TC = n(145497),
    Tb = n(685073),
    Ty = n(534400),
    Tv = n(581781),
    Tj = n(743981),
    TO = n(195801);
let TL = (0, tw.Ld)(),
    TR = E.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, h.cf)([si.default], () => (0, Tb.Zo)(si.default.getCurrentUser()?.primaryGuild)),
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
                        : (0, A.jsx)(Tv.A, {
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
                        : (0, A.jsx)(TC.j, {
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
                        : (0, A.jsx)(Ty.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: Tj.Sl.SIZE_16,
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
            p = E.useCallback(() => {
                i?.(null);
            }, [i]),
            x = E.useRef(null);
        return (
            TA(x, eC._F.GUILD_TAG),
            (0, A.jsxs)(r4.A, {
                title: R.intl.string(R.t.Pdd1nd),
                titleId: TL,
                ref: x,
                children: [
                    (0, A.jsx)(H.E, {
                        className: TO.VA,
                        variant: "text-sm/normal",
                        children: R.intl.string(R.t.mlZ6Jx),
                    }),
                    (0, A.jsx)(TN.Pw, {
                        className: TO.Lt,
                        optionClassName: TO.S0,
                        isSelected: m,
                        options: a,
                        select: g,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: S,
                        clear: p,
                        clearable: null != s,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var TD = n(318785),
    TP = n(992526),
    TG = n(470739);
let TM = function () {
    return (0, TP.J)({ location: "UserSettingsProfileCustomization" })
        ? (0, A.jsx)(r4.A, {
              title: R.intl.string(R.t.l6w3Vj),
              description: R.intl.string(R.t.joHqdj),
              children: (0, A.jsx)(_.$, {
                  text: R.intl.string(R.t.wRraFx),
                  onClick: () => {
                      (0, TG._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var TU = n(953726);
let TV = (0, tw.Ld)();
function Tk(e) {
    let t = (0, hI.L)(tY.PremiumTypes.TIER_2);
    return (0, A.jsxs)(r4.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: R.intl.string(R.t["9AjdkD"]),
        titleId: TV,
        children: [
            (0, A.jsx)("div", {
                children: (0, A.jsx)(lo.k, {
                    "aria-labelledby": TV,
                    placeholder: e.placeholder,
                    maxLength: S.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, A.jsx)(xo, { user: e.user, className: TU.F }),
        ],
    });
}
var Tw = n(376626);
function TF(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = L.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, A.jsx)("div", {
        className: Tw.u,
        children: (0, A.jsx)(t$.d, {
            label: R.intl.string(R.t["3cWDuO"]),
            description: l ? null : R.intl.formatToPlainString(R.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, pL._e)() : (0, p9.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function TB(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, xT.r)(nQ.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, xf.rh)(s, r, !1),
        o = (0, xC.LX)(a[0]);
    return (0, A.jsx)(r4.A, {
        title: R.intl.string(R.t["/X3fkf"]),
        children: (0, A.jsx)(xv, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var Tz = n(518477);
let TY = function () {
    let e = (0, h.bG)([uC.default], () => uC.default.getId());
    return (0, A.jsx)(r4.A, {
        title: R.intl.string(R.t.Jzj9q4),
        children: (0, A.jsx)(_.$, {
            text: R.intl.string(R.t.Geikwq),
            onClick: () => {
                (0, pG.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tL.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: Tz.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var TX = n(654910);
function TH() {
    let e = (0, h.bG)([si.default], () => {
            let e = si.default.getCurrentUser();
            return (ta()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e);
        }),
        t = (0, h.bG)([pX.A], () => pX.A.getUserProfile(e.id)),
        n = (0, T_.d)({ location: "DefaultCustomizationSections" }),
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
        } = (0, h.cf)([pD.A], () => {
            let e = pD.A.getPendingChanges(),
                t = pD.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, pY.V7)({ userId: e.id, image: i }),
        E = (0, pZ.EC)(),
        S = ai.Ay.canUsePremiumProfileCustomization(e),
        p = (0, pk.z5)(i, e.avatar),
        x = (0, pk.Ac)(s, t?.banner),
        T = (0, xI.Ay)(e.id),
        f = T?.getLegacyUsername(),
        I = (g.global_name?.length ?? 0) > 0 ? g.global_name : (E?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (E?.bio ?? []),
        N = (0, TD.b)(),
        C = null != (0, Tb.Zo)(e.primaryGuild).guildId;
    return (0, A.jsxs)("div", {
        className: TX.Q,
        children: [
            (0, A.jsx)(Tk, {
                placeholder: e.username,
                errors: I,
                currentGlobalName: e.globalName,
                pendingGlobalName: l,
                onGlobalNameChange: (e) => (0, p9.p)({ globalName: e }),
                user: e,
            }),
            (0, A.jsx)(
                xL,
                {
                    sectionTitle: R.intl.string(R.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, p9.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, A.jsx)(TY, {}),
            (0, A.jsx)(
                xs,
                {
                    onAvatarChange: (e) => {
                        ((0, p9.p)({ avatar: e }), (0, pk.WU)(null == e ? "remove" : "set"));
                    },
                    showRemoveAvatarButton: p,
                    errors: g.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, A.jsx)(xt, { user: e, sectionTitle: R.intl.string(R.t["7v0T9P"]) }, "decoration"),
            (0, A.jsx)(xc, { user: e }),
            (0, A.jsx)(xh, { user: e, sectionTitle: R.intl.string(R.t.wR5wOo) }, "effect"),
            (0, A.jsx)(xx, { user: e, sectionTitle: R.intl.string(R.t.GWrZOd) }, "frame"),
            S
                ? (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)(
                              xm,
                              {
                                  showRemoveBannerButton: x,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, p9.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, A.jsx)(xO, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: u,
                              onThemeColorsChange: (e) => (0, p9.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, A.jsx)(
                      TB,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: o,
                          setPendingAccentColor: (e) => (0, p9.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, A.jsx)(
                p6,
                {
                    sectionTitle: R.intl.string(R.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, p9.p)({ bio: e }),
                    pendingBio: r,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (N.length > 0 || C) &&
                (0, A.jsx)(TR, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: c,
                    onChange: (e) => (0, p9.p)({ primaryGuildId: e }),
                }),
            null != f &&
                !n &&
                (0, A.jsx)(TF, { legacyUsername: f, pendingLegacyUsernameDisabled: d }, "legacy_username"),
            (0, A.jsx)(TM, {}, "badges"),
        ],
    });
}
function TK() {
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
var TW = n(447080);
function TZ() {
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
        } = (0, h.cf)([pD.A], () => ({ ...pD.A.getPendingChanges(), showNotice: pD.A.showNotice() })),
        a = (0, pY.V7)({ userId: e.id, image: i }),
        o = (0, pk.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, TI.A)() && null != n ? x3.Ay.parse(void 0, n).content : n,
        d = ai.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: c } = (0, eP.Ay)(tL.A.USER_SETTINGS_USER_PROFILE);
    E.useEffect(() => () => e4.h.wait(pL.IM), []);
    let [g, m] = E.useState(!1),
        p = !d,
        x = E.useRef(null);
    return t
        ? (0, A.jsx)(a7.A, {})
        : (0, A.jsxs)(eP.f5, {
              value: c,
              children: [
                  (0, A.jsx)(x2, {}),
                  (0, A.jsx)(pB, {
                      profilePreview: (0, A.jsx)(pz.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: TK,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: TW.ti,
                      }),
                      nameplatePreview: (0, A.jsx)(pV.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? TW.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, A.jsx)(TH, {}),
                  }),
                  (0, A.jsx)(di.L, {
                      innerRef: x,
                      onChange: (e) => m(e),
                      threshold: 0.25,
                      active: p,
                      children: (0, A.jsx)("div", {
                          ref: x,
                          children: (0, A.jsx)(Tf, { user: e, shouldShow: p, isVisible: g }),
                      }),
                  }),
                  p &&
                      !s &&
                      (0, A.jsx)(x5.d, {
                          className: TW.EL,
                          showUpsell: !g,
                          text: R.intl.format(R.t.TmfgI2, { onClick: () => (0, x6.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, A.jsx)(x4.l, {
                              size: "md",
                              location: tL.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, A.jsx)("div", {
                              className: TW.Xl,
                              children: (0, A.jsx)(_.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      (tt.default.track(S.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          x?.current?.scrollIntoView({ behavior: "smooth" }));
                                  },
                                  text: R.intl.string(R.t.uw9zI7),
                                  icon: r1.t,
                              }),
                          }),
                      }),
              ],
          });
}
var Tq = n(625494);
n(46121);
var TQ = n(944983);
let T$ = { [eC.Eq.USER_PROFILE]: "main_profile_tab", [eC.Eq.GUILD]: "guild_profile_tab" },
    TJ = (0, d.E2)(c.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, h.bG)([lS.A, ce.Ay, pD.A], () => {
                    let e = pD.A.selectedGuildId ?? lS.A.getGuildId();
                    return null == e || pD._.has(e) ? ce.Ay.getFlattenedGuildIds().find((e) => !pD._.has(e)) : e;
                }),
                t = (0, h.bG)([lh.A], () => lh.A.getGuild(e)),
                n = (0, h.bG)([pD.A], () => pD.A.showNotice()),
                i = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
                l = Tm.A.useField("subsection");
            return (
                E.useEffect(() => {
                    (0, n6._)(T$[l]);
                }, [l]),
                E.useEffect(() => {
                    null != i && t?.id != null && (0, xX.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, A.jsx)(xK, {
                    children: (0, A.jsxs)(uY.F, {
                        component: (0, A.jsx)(ln.A, {
                            children: (0, A.jsx)(x.D, {
                                variant: "heading-xl/normal",
                                children: R.intl.string(R.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, A.jsxs)(pM.V, {
                                className: TQ.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            ((0, n8.fO)({ duration: 300, intensity: 1.4 }),
                                                Tq._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                            return;
                                        }
                                        (e === eC.Eq.GUILD && null != t && (0, pU.V2)(t.id),
                                            Tm.A.setState({ subsection: e }));
                                    }
                                },
                                children: [
                                    (0, A.jsx)(
                                        pM.V.Item,
                                        {
                                            className: TQ.YU,
                                            id: eC.Eq.USER_PROFILE,
                                            children: R.intl.string(R.t["2p07FR"]),
                                        },
                                        eC.Eq.USER_PROFILE,
                                    ),
                                    (0, A.jsx)(
                                        pM.V.Item,
                                        {
                                            className: ir()(TQ.YU, TQ.HY),
                                            "aria-label": R.intl.string(R.t.kPHroX),
                                            id: eC.Eq.GUILD,
                                            children: R.intl.string(R.t.kPHroX),
                                        },
                                        eC.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eC.Eq.GUILD
                                ? (0, A.jsx)(xY, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              ((0, n8.fO)({ duration: 300, intensity: 1.4 }),
                                                  Tq._.dispatch(S.jej.EMPHASIZE_NOTICE));
                                              return;
                                          }
                                          null != e && (0, pU.JJ)(e.id);
                                      },
                                  })
                                : (0, A.jsx)(TZ, {}),
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
    T0 = (0, d.zZ)(c.X.PROFILE_CATEGORY, { buildLayout: () => [TJ] });
var T1 = n(379633);
function T2() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, dx.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return null == e
        ? null
        : (0, A.jsxs)("div", {
              className: T1.a5,
              children: [
                  (0, A.jsx)(f.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: I._3.SIZE_48,
                      "aria-label": R.intl.string(R.t.lqaIxI),
                  }),
                  (0, A.jsxs)("div", {
                      className: T1.FS,
                      children: [
                          (0, A.jsx)(H.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, A.jsxs)("div", {
                              className: T1.Fk,
                              children: [
                                  (0, A.jsx)(H.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: R.intl.string(R.t.Ip9nBS),
                                  }),
                                  (0, A.jsx)(an.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let T3 = (0, d.t_)(c.X.PROFILE_PANEL, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        notice: { stores: [pD.A], element: pR.A },
        initialize: () => () =>
            e4.h.wait(() => {
                (0, pL.F7)();
            }),
        buildLayout: () => [T0],
    }),
    T5 = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: T6,
        StronglyDiscouragedCustomComponent: T2,
        usePredicate: () => !(0, pP.X)("user_settings_sidebar"),
        buildLayout: () => [T3],
    }),
    T4 = (0, d.i4)(c.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        icon: T6,
        StronglyDiscouragedCustomComponent: T2,
        usePredicate: () => (0, pP.X)("user_settings_sidebar"),
        onClick: () => {
            let e = uC.default.getId();
            (0, pG.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function T6() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, dx.A)({ userId: e?.id, size: I._3.SIZE_48 });
    return (0, A.jsx)(f.eu, { src: t, avatarDecoration: n, size: I._3.SIZE_20, "aria-hidden": !0 });
}
let T8 = (0, d.WI)(c.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [T5, T4] });
var T7 = n(98207),
    T9 = (n(204925), n(818348));
let fe = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, la.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 888363),
            );
            return (n) => (0, A.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? T9.tE : null, onCloseCallback: t },
    );
};
var ft = n(940856),
    fn = n(506775),
    fi = n(379257),
    fl = n(121780),
    fs = n(666113);
function fr() {
    let e = fl.A.getCountryCode(),
        t = null != e ? fs.IN[e.alpha2] : void 0;
    fi.A.openUrl(eT.A.getArticleURL(t ?? fs.k9));
}
var fa = n(521169);
function fo() {
    return (0, fa.w)(fs.Vc);
}
var fu = n(680091);
function fd() {
    let e = fo(),
        t = (0, fn.ZP)();
    if (!e) return null;
    switch (t) {
        case fn.M$.ADULT:
            return R.intl.format(fu.default.gi4ulu, { handleOnAgeGatedContentHook: fn.M0 });
        case fn.M$.TEEN:
            return R.intl.format(fu.default["221iML"], {
                handleOnAgeGatedContentHook: fn.M0,
                handleOnConfirmAgeHook: fn.aP,
            });
        case fn.M$.UNVERIFIED:
            return R.intl.format(fu.default["W0/7DD"], {
                handleOnAgeGatedContentHook: fr,
                handleOnConfirmAgeHook: fn.aP,
            });
    }
}
var fc = n(26137),
    fg = n(957485);
function fm() {
    let e = fo(),
        t = (0, fn.ZP)();
    return e ? { icon: t === fn.M$.ADULT ? fc.r : fg.i, backgroundColor: nQ.A.colors.BACKGROUND_MOD_SUBTLE } : null;
}
function fA() {
    let e = fm();
    return null != e ? { type: m.hp.ICON, ...e } : null;
}
function fE() {
    return fo() ? R.intl.string(R.t.piqs0o) : null;
}
var fh = n(438140);
let fS = [{ badgeType: m.Xi.NEW, dismissibleContent: eu.M.TINY_BRONCO_SETTINGS }],
    fp = [];
function fx() {
    return (0, fh.Wt)() ? fS : fp;
}
var fT = n(36149),
    ff = n(207560),
    fI = (((a = {}).LEGACY = "legacy"), (a.TINY_BRONCO = "tinyBronco"), a),
    f_ = (((o = {}).VERIFY = "verify"), (o.EDIT = "edit"), (o.INFO = "info"), o);
function fN(e, t) {
    let n = (0, h.bG)([si.default], () => null != si.default.getCurrentUser()),
        i = (0, ff.fk)(),
        l = (0, fn.ZP)(),
        s = (0, fT.Y2)(),
        r = fo();
    if (!n || (!i && !r) || t !== (r ? "tinyBronco" : "legacy")) return !1;
    switch (l) {
        case fn.M$.UNVERIFIED:
            return "verify" === e;
        case fn.M$.TEEN:
            return e === (r ? "info" : "verify");
        case fn.M$.ADULT:
            return e === (s ? "edit" : "info");
    }
}
var fC = n(841365);
function fb() {
    let e = (0, fn.hD)();
    return (0, A.jsxs)(H.E, {
        variant: "text-md/medium",
        children: [`${e} \u{2022} `, R.intl.format(fC.default.WM5adV, { handleOnHelpUrlHook: fn.M0 })],
    });
}
let fy = {
        useTitle: () => fE() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fd,
        useVariant: () => "secondary",
        useLeadingDecoration: fA,
        getDismissibleBadges: fx,
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fb,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        onClick: function () {
            (0, la.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    },
    fv = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, { ...fy, usePredicate: () => fN(f_.EDIT, fI.LEGACY) }),
    fj = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_EDIT_SETTING, {
        ...fy,
        usePredicate: () => fN(f_.EDIT, fI.TINY_BRONCO),
        useAriaLabel: () => R.intl.string(R.t.pBMSie),
    }),
    fO = {
        useTitle: () => fE() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fd,
        useLeadingDecoration: function () {
            let e = fm();
            return null != e ? { type: m.$d.ICON, ...e } : null;
        },
        getDismissibleBadges: fx,
        useTrailingDecoration: () => ({ type: m.Ln.TEXT, text: (0, fn.hD)() }),
    },
    fL = (0, d.v_)(c.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, { ...fO, usePredicate: () => fN(f_.INFO, fI.LEGACY) }),
    fR = (0, d.v_)(c.X.ACCOUNT_STATUS_AGE_GROUP_INFO_SETTING, {
        ...fO,
        usePredicate: () => fN(f_.INFO, fI.TINY_BRONCO),
    }),
    fD = {
        useTitle: () => fE() ?? R.intl.string(R.t["/52UYy"]),
        useSubtitle: fd,
        useVariant: () => "secondary",
        useLeadingDecoration: fA,
        getDismissibleBadges: fx,
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: (0, fn.hD)() }),
        useLabel: function () {
            return (0, fT.yM)() ? R.intl.string(R.t["9KiIz6"]) : R.intl.string(R.t.DVywUB);
        },
        onClick: fn.aP,
    },
    fP = (0, d.Tf)(c.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, { ...fD, usePredicate: () => fN(f_.VERIFY, fI.LEGACY) }),
    fG = (0, d.Tf)(c.X.ACCOUNT_STATUS_AGE_GROUP_VERIFY_SETTING, {
        ...fD,
        usePredicate: () => fN(f_.VERIFY, fI.TINY_BRONCO),
    }),
    fM = [fP, fv, fL],
    fU = [fG, fj, fR],
    fV = (0, d.Tf)(c.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => R.intl.string(R.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: m.fq.TEXT, text: R.intl.string(R.t.qxk9zo) }),
        useLabel: () => R.intl.string(R.t.BleMPB),
        onClick: () => fe(),
    });
function fk(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fw(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function fF(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = E.useState(!1),
        a = s ? t : n(t);
    return (0, A.jsxs)(Y.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, A.jsx)(H.E, { variant: "text-md/medium", children: a }),
            (0, A.jsx)(Es.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? R.intl.string(R.t.fgq1gs) : R.intl.string(R.t.dcztdU),
            }),
        ],
    });
}
function fB() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.email);
    return null == e
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t["8SfTN/"]) })
        : (0, A.jsx)(fF, {
              text: e,
              censor: fw,
              revealLabel: R.intl.string(R.t["Zvx+yV"]),
              hideLabel: R.intl.string(R.t.nqTD4d),
          });
}
let fz = (0, d.Tf)(c.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, h.bG)([si.default], () => si.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fB }),
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
var fY = n(557722),
    fX = n(53516);
function fH() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, A.jsx)(H.E, { variant: "text-md/medium", children: R.intl.string(R.t.I5kDqj) })
        : (0, A.jsx)(Y.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, A.jsx)(fF, {
                  text: t,
                  censor: fk,
                  revealLabel: R.intl.string(R.t.eY3xlT),
                  hideLabel: R.intl.string(R.t["jllbv+"]),
              }),
          });
}
let fK = (0, d.Tf)(c.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, h.bG)([si.default], () => si.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => R.intl.string(R.t.kerONq),
    useAriaLabel: function () {
        return null == (0, h.bG)([si.default], () => si.default.getCurrentUser()?.phone)
            ? R.intl.string(R.t["SfUuE+"])
            : R.intl.string(R.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: m.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fH }),
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
                      return (t) => (0, A.jsx)(e, { reason: fY.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fX.V },
              )
            : (0, la.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, A.jsx)(e, { ...t });
              });
    },
});
function fW() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fZ() {
    let e = (0, pZ.EC)(),
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
                    children: (0, A.jsx)(iX.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: nQ.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let fq = (0, d.Tf)(c.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => R.intl.string(R.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: m.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fZ,
        }),
        useLabel: () => R.intl.string(R.t.bt75uw),
        useAriaLabel: () => R.intl.string(R.t.JECa91),
        useSubtitle: () => (fW() ? R.intl.string(R.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fW,
        onClick: function () {
            (0, la.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, A.jsx)(e, { ...t });
            });
        },
    }),
    fQ = (0, d.zZ)(c.X.ACCOUNT_INFO_CATEGORY, {
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
                            button: { text: R.intl.string(R.t.lm1UKt), onClick: () => (0, ft.S)(e) },
                        }
                  : {
                        type: m.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: R.intl.string(R.t["/3qnL/"]),
                        text: R.intl.string(R.t.qKs3vg),
                        button: { text: R.intl.string(R.t["7psymi"]), onClick: () => fe() },
                    };
        },
        buildLayout: () => [fq, fV, fz, fK, ...fM],
    });
var f$ = n(398177);
let fJ = (0, d.Tf)(c.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => R.intl.string(R.t["CIGa+7"]),
    useLabel: () => R.intl.string(R.t.bt75uw),
    useAriaLabel: () => R.intl.string(R.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, la.openModal)((e) => (0, A.jsx)(f$.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var f0 = n(200921);
let f1 = [];
function f2() {
    f1 = [];
}
class f3 extends h.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return f1;
    }
}
let f5 = new f3(e4.h, {
    LOGOUT: f2,
    LOGIN_SUCCESS: f2,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        f1 = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...f1],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        f1 = n;
    },
});
function f4() {
    let e = (0, h.cf)([f5], () => f5.getSessions());
    return E.useMemo(() => {
        let t = [...e],
            n = null,
            i = uC.default.getAuthSessionIdHash();
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
function f6(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? R.intl.string(R.t.TXCmfL) : io()(e).fromNow();
}
var f8 = n(176524),
    f7 = n(646270),
    f9 = n(738678),
    Ie = n(489828);
function It(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, A.jsxs)(Y.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, A.jsx)(f8.A, { icon: t, color: r ? nQ.A.colors.ICON_MUTED : "currentColor" }),
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
                    (0, A.jsx)(H.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function In(e) {
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
                            return { text: R.intl.string(R.t.cDHCNY), icon: Sm.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: f7.u };
                        case "horizon os":
                            return { text: e, icon: f9.G };
                        default:
                            return { text: e, icon: Sm.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : f6(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(ii.Vq);
    return (0, A.jsx)(It, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, A.jsx)(n0.D, {
                className: Ie.X,
                onClick: () => (0, f0.U0)(t.id_hash),
                "aria-label": R.intl.string(R.t.E4MJNt),
                children: (0, A.jsx)(hu.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function Ii(e) {
    let { title: t, children: n } = e,
        i = E.useId();
    return (0, A.jsxs)(Y.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, A.jsx)(x.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, A.jsx)(Y.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let Il = (0, d.E2)(c.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = f4();
            return null == e
                ? (0, A.jsx)(oe.y, {})
                : (0, A.jsx)(Ii, {
                      title: R.intl.string(R.t.LLS19o),
                      children: (0, A.jsx)(In, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    Is = (0, d.E2)(c.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = f4();
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.Vij32M),
                description: R.intl.string(R.t.OTXyaf),
                children: (0, A.jsx)(_.$, {
                    onClick: () => (0, f0.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: R.intl.string(R.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = f4();
            return e.length > 0;
        },
    });
var Ir = n(766928);
function Ia() {
    return (0, A.jsx)(It, {
        icon: Ir.W,
        label: R.intl.string(R.t.iUa0sn),
        description: R.intl.format(R.t["044+8i"], {
            onClick: () =>
                (0, nl.openUserSettings)(c.X.ACCOUNT_PANEL, { analyticsLocations: [tL.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let Io = (0, d.E2)(c.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = f4(),
                t = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return (0, A.jsxs)(Ii, {
                title: R.intl.string(R.t.xx1MWc),
                children: [
                    e.map((e) => (0, A.jsx)(In, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, A.jsx)(Ia, {}),
                ],
            });
        },
        useSearchTerms: () => [R.intl.string(R.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = f4(),
                t = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    Iu = (0, d.zZ)(c.X.SESSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useSubtitle: () => R.intl.string(R.t.b7ZpTM),
        initialize: () => {
            (0, f0.GY)();
        },
        buildLayout: () => [Il, Io, Is],
        useSearchTerms: () => [
            R.intl.string(R.t["+1h0k/"]),
            R.intl.string(R.t.LLS19o),
            R.intl.string(R.t.xx1MWc),
            R.intl.string(R.t.lSWsrd),
        ],
    }),
    Id = (0, d.t_)(c.X.SESSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.mEndXM),
        useObscuredNotice: a7.L,
        buildLayout: () => [Iu],
    }),
    Ic = (0, d.t0)(c.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [Id],
        initialize: () => {
            (0, f0.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = f4(),
                n = t.length + +(null != e);
            return {
                type: m.xn.TEXT,
                text: n > 0 ? R.intl.formatToPlainString(R.t.G7zwOk, { count: n }) : R.intl.string(R.t.MKDeyL),
            };
        },
    });
var Ig = n(464477);
function Im(e) {
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
function IA() {
    return (0, aq.bG)([si.default], () => {
        let e = si.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var IE =
    (((u = {}).AVAILABLE = "available"),
    (u.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (u.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    u);
function Ih() {
    let e = (0, aq.bG)([si.default], () => si.default.getCurrentUser()?.verified);
    return Ig.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function IS() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, aq.bG)([lh.A, xP.A, si.default], () =>
        si.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? R.intl.string(R.t.hxf9fX)
                : R.intl.string(R.t["3iKih7"])
            : lh.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xP.A.can(S.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? R.intl.string(R.t.OYTCUh)
                  : R.intl.string(R.t.HC8uSZ)
              : null,
    );
}
var Ip = n(466034);
let Ix = (0, d.Tf)(c.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: () => IS(!0),
        useDisabled: () => null !== IS(!0),
        useLabel: () => R.intl.string(R.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, h.bG)([uC.default], () => uC.default.hasTOTPEnabled()),
                t = Ih() === IE.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n$.A)({
                title: R.intl.string(R.t["D+aE7g"]),
                subtitle: R.intl.string(R.t.EA4ZEk),
                variant: "critical",
                confirmText: R.intl.string(R.t.N86XcP),
                onConfirm: () => T7.A.disable(),
            }),
    }),
    IT = (0, d.zZ)(c.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RumMFo),
        useSubtitle: () => R.intl.string(R.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, h.bG)([uC.default], () => uC.default.hasTOTPEnabled()),
                t = Ih() === IE.AVAILABLE;
            if (!e && t)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: R.intl.string(R.t.cTNUeD),
                            onClick: Ip.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (Ih()) {
                case IE.UNAVAILABLE_NO_CRYPTO:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.PhHhsj) };
                case IE.UNAVAILABLE_UNVERIFIED:
                    return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                case IE.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [Ix],
    });
var If = n(670492),
    II = n(32880),
    I_ = n(663417),
    IN = n(658675),
    IC = n(900686);
function Ib() {
    (0, la.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, A.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    T7.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
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
var Iy = n(858487);
function Iv(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function Ij() {
    let e = If.A.getVerificationKey();
    try {
        await T7.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, l8.P0)({
            message: e.body?.message ?? R.intl.string(R.t.F8FvUy),
            type: l7.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function IO(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = Iv(t),
        l = E.useRef(null),
        s = (0, A.jsxs)(A.Fragment, {
            children: [(0, A.jsx)(IN.P, { checked: n }), (0, A.jsx)(H.E, { variant: "text-md/normal", children: i })],
        });
    return uO.p5
        ? (0, A.jsx)(n0.D, {
              tag: "li",
              className: ir()(Iy.aY, Iy.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, uO.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  ((0, uO.C)(i),
                      (0, l8.P0)({
                          message: R.intl.string(R.t.mGZ66D),
                          type: l7.Ck.SUCCESS,
                          id: "backup-code-copied",
                      }));
              },
              children: s,
          })
        : (0, A.jsx)("li", { className: Iy.aY, children: s });
}
let IL = (0, d.zZ)(c.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.fC9qV0),
        useSubtitle: () =>
            (0, h.bG)([If.A], () => If.A.getBackupCodes().length > 0)
                ? R.intl.format(R.t.tp7zEK, {})
                : R.intl.string(R.t.LoOi4S),
        usePredicate: IA,
        buildLayout: () => [IR],
    }),
    IR = (0, d.E2)(c.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t.fC9qV0)],
        Component: function () {
            let e = (0, h.bG)([If.A], () => If.A.getBackupCodes()),
                t = E.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${Iv(t)}` + (n ? ` (${R.intl.string(R.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, A.jsx)(_.$, { text: R.intl.string(R.t.Jc2myK), size: "sm", variant: "secondary", onClick: Ib })
                : (0, A.jsxs)(A.Fragment, {
                      children: [
                          (0, A.jsx)("ul", {
                              className: Iy.E5,
                              children: e.map((e) => (0, A.jsx)(IO, { code: e }, e.code)),
                          }),
                          (0, A.jsxs)(sF.e, {
                              size: "sm",
                              children: [
                                  (0, A.jsx)(IC.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, A.jsx)(_.$, {
                                          text: R.intl.string(R.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: II.DownloadIcon,
                                      }),
                                  }),
                                  (0, A.jsx)(_.$, {
                                      text: R.intl.string(R.t["3x962E"]),
                                      variant: "secondary",
                                      icon: I_.RefreshIcon,
                                      onClick: Ij,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    ID = (0, d.Tf)(c.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => R.intl.string(R.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = E.useState(!1),
                n = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : R.intl.format(e ? R.t["xDBk/I"] : R.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, A.jsx)(Es.Q, {
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
                        handleSubmit: T7.A.disableSMS,
                        title: R.intl.string(R.t.KLWnit),
                        children: R.intl.string(R.t["W0/Duf"]),
                    });
            }),
    }),
    IP = (0, d.zZ)(c.X.SMS_AUTH_CATEGORY, {
        useTitle: () => R.intl.string(R.t.wuHuI5),
        useSubtitle: () => (0, h.bG)([si.default], () => Im(si.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()?.hasFlag(S.nhx.MFA_SMS) ?? !1),
                t = (0, h.bG)([si.default], () => null != Im(si.default.getCurrentUser()));
            if (!e)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "sms-setup-button",
                            text: R.intl.string(R.t.Age7yU),
                            onClick: IG,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = Ih(),
                t = IA(),
                n = (0, h.bG)([uC.default], () => uC.default.hasTOTPEnabled());
            return e === IE.AVAILABLE && t && n;
        },
        buildLayout: () => [ID],
    });
function IG() {
    let e = si.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            ((t = { reason: fY.d.USER_SETTINGS_UPDATE, onAddedPhone: T7.A.enableSMS }),
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
                    { modalKey: fX.V },
                ));
        } else T7.A.enableSMS();
}
var IM = n(665671),
    IU = n(442433),
    IV = n(917136),
    Ik = n(976910),
    Iw = n(267255);
function IF(e) {
    let { credential: t } = e;
    return (0, A.jsxs)("li", {
        className: Iw.e,
        children: [
            (0, A.jsxs)("div", {
                children: [
                    (0, A.jsx)(H.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, A.jsx)(H.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: R.intl.format(R.t["7JgxF5"], { lastUsed: f6(t.last_used) }),
                        }),
                ],
            }),
            (0, A.jsx)(i9.K, {
                icon: cs.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": R.intl.string(R.t["+nrTbK"]),
                onClick: (e) => {
                    (0, IU.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, A.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let IB = (0, d.zZ)(c.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.IBq4Y3),
        useSubtitle: () => R.intl.string(R.t.yK9edS),
        useHeaderDecoration: function () {
            if (Ih() === IE.AVAILABLE)
                return {
                    type: m.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: m.UV.BUTTON,
                            id: "add-security-key-button",
                            text: R.intl.string(R.t["Tzs/fw"]),
                            icon: iF.j,
                            onClick: IM.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (Ih()) {
                    case IE.UNAVAILABLE_NO_CRYPTO:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "info", text: R.intl.string(R.t.bWCGI9) };
                    case IE.UNAVAILABLE_UNVERIFIED:
                        return { type: m.lT.INLINE_NOTICE, noticeType: "warning", text: R.intl.string(R.t.uggF7o) };
                    case IE.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Iz],
    }),
    Iz = (0, d.E2)(c.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [R.intl.string(R.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, h.cf)([Ik.A], () => ({
                hasFetchedCredentials: Ik.A.hasFetchedCredentials(),
                credentials: Ik.A.getCredentials(),
            }));
            return (E.useEffect(() => {
                t || IV.JQ();
            }, [t]),
            t)
                ? (0, A.jsx)(Y.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, A.jsx)(IF, { credential: e }, e.id)),
                  })
                : (0, A.jsx)(oe.y, {});
        },
    }),
    IY = (0, d.t_)(c.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => R.intl.string(R.t.m0FidJ),
        buildLayout: () => [IB, IT, IP, IL],
    }),
    IX = (0, d.t0)(c.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = IA();
            return { type: m.xn.TEXT, text: e ? R.intl.string(R.t.lQsY7B) : R.intl.string(R.t.WsUuTt) };
        },
        buildLayout: () => [IY],
    }),
    IH = (0, d.zZ)(c.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t["0iH2vc"]),
        buildLayout: () => [fJ, IX, Ic],
    }),
    IK = { [fn.M$.ADULT]: fu.default.PMznGO, [fn.M$.TEEN]: fu.default.qSkhZH, [fn.M$.UNVERIFIED]: fu.default.vGxRDB },
    IW = [eu.M.TINY_BRONCO_NOTICE],
    IZ = [];
function Iq() {
    fi.A.openUrl(fs.m5);
}
var IQ = n(308645),
    I$ = n(555725),
    IJ = n(855267);
let I0 = (0, d.E2)(c.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["16r9jm"])],
        Component: IJ.A,
    }),
    I1 = (0, d.zZ)(c.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [I0] }),
    I2 = (0, d.t_)(c.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        buildLayout: () => [I1],
    }),
    I3 = (0, d.t0)(c.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: () => R.intl.string(R.t["16r9jm"]),
        useSubtitle: I$.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, I$._k)();
            return { type: m.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        useTrailingDecoration: function () {
            return { type: m.xn.TEXT, text: (0, I$.aO)() };
        },
        initialize: () => {
            IQ.Yn();
        },
        buildLayout: () => [I2],
    }),
    I5 = (0, d.zZ)(c.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: function () {
            return (fo() ? R.intl.string(R.t.GI2mea) : null) ?? R.intl.string(R.t["16r9jm"]);
        },
        useInlineNotice: function () {
            let e = (0, fh.LH)(),
                t = (0, fn.ZP)(),
                [n, i] = (0, gi.kn)(e ? IW : IZ);
            return e && null != n
                ? {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "start",
                      text: R.intl.format(IK[t], { handleOnBlogHook: Iq }),
                      onDismiss: () => i(gg.i.USER_DISMISS),
                  }
                : null;
        },
        buildLayout: () => [...fU, I3],
    });
var I4 = n(738188),
    I6 = n(834981),
    I8 = n(987197),
    I7 = n(822585),
    I9 = n(840387),
    _e = n(465558),
    _t = n(513687);
let _n = (0, d.E2)(c.X.FAMILY_CENTER_SETTING, {
        Component: _e.p,
        useSearchTerms: () => [
            R.intl.string(_t.default.RZqaJn),
            R.intl.string(_t.default.bdBmqy),
            R.intl.string(_t.default["gVWG+6"]),
            R.intl.string(_t.default.ahKIJO),
            R.intl.string(_t.default["8SLtqb"]),
        ],
    }),
    _i = (0, d.zZ)(c.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [_n] }),
    _l = (0, d.t_)(c.X.FAMILY_CENTER_PANEL, {
        useTitle: () => R.intl.string(_t.default.RZqaJn),
        buildLayout: () => [_i],
    }),
    _s = (0, d.zZ)(c.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => R.intl.string(_t.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, I8.f)(),
                t = (0, I7.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, I6.VT)();
            return E.useMemo(() => (n ? { badgeType: m.Xi.WARNING } : { badgeType: m.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [_r],
    }),
    _r = (0, d.t0)(c.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, I6.Li)() ? R.intl.string(_t.default.IcMQUP) : R.intl.string(_t.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, I9.Z)(),
                t = (0, I6.Li)();
            return e
                ? t
                    ? R.intl.string(_t.default.G8lHFU)
                    : R.intl.string(_t.default.uOLNEZ)
                : R.intl.string(_t.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, I8.f)(),
                t = (0, I7.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: m.Xy.ICON,
                      icon: I4.WarningIcon,
                      color: nQ.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: nQ.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [_l],
    });
var _a = n(425587),
    _o = n(662758);
function _u(e) {
    if (e.body.code === S.t02.INVALID_PASSWORD) throw e;
    (0, sV.A)({ title: R.intl.string(R.t.LX0nT8), subtitle: e.body.message });
}
async function _d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = si.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await _a.A.fetchTeams(!0)).body;
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
                  (0, A.jsx)(_o.default, {
                      ...t,
                      handleSubmit: (t) => (0, pL.U_)(t, e).then(S.tEg, _u),
                      title: e ? R.intl.string(R.t.xca2ts) : R.intl.string(R.t.goXv9g),
                      actionText: e ? R.intl.string(R.t["8lQ2rR"]) : R.intl.string(R.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? R.intl.string(R.t.FB4H1D) : R.intl.string(R.t.gk7h32),
                  }),
              )
            : (0, n$.A)({
                  title: R.intl.string(R.t.xca2ts),
                  subtitle: R.intl.string(R.t.FB4H1D),
                  confirmText: R.intl.string(R.t["8lQ2rR"]),
                  onConfirm: () => (0, pL.U_)("", !0),
              });
}
let _c = (0, d.Tf)(c.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => R.intl.string(R.t["gIpzR+"]),
        useSubtitle: () => R.intl.string(R.t.Bd6dOf),
        useLabel: () => R.intl.string(R.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => _d(!0),
    }),
    _g = (0, d.Tf)(c.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => R.intl.string(R.t["p/Tjtp"]),
        useSubtitle: () => R.intl.string(R.t.YvDmKb),
        useLabel: () => R.intl.string(R.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => _d(!1),
        usePredicate: () => {
            let e = (0, h.bG)([si.default], () => si.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    _m = (0, d.zZ)(c.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [_g, _c] }),
    _A = (0, d.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        initialize: function () {
            return () => {
                (T7.A.clearBackupCodes(), (0, pL.Uo)());
            };
        },
        useObscuredNotice: a7.L,
        buildLayout: () => [fQ, IH, I5, _s, _m],
    }),
    _E = (0, d.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["ldCE/p"]),
        icon: mn.UserIcon,
        buildLayout: () => [_A],
    });
var _h = n(176781),
    _S = n(341923),
    _p = n(572164),
    _x = n(614584),
    _T = n(915725),
    _f = n(268378);
let _I = (0, d.zD)(c.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => R.intl.string(_f.default.j29uJx),
        useSubtitle: () => R.intl.format(_f.default.UCzGcQ, { learnMoreLink: eT.A.getArticleURL(S.MVz.CLIPS) }),
        useValue: () => (0, h.bG)([_T.Ay], () => _T.Ay.getEnableAutoclipping()),
        setValue: _x.uL,
        useDisabled: () => !(0, _p.E)(),
    }),
    __ = (0, d.zY)(c.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [_I], headerSettingKey: _I.key }),
    _N = (0, d.zZ)(c.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => R.intl.string(_f.default.XWkJoi),
        useSubtitle: () => R.intl.string(_f.default["MJ/VsO"]),
        usePredicate: _S.HN,
        usePersistentBadge: () => ({ badgeType: m.Xi.BETA }),
        useInlineNotice: () =>
            (0, _p.E)()
                ? null
                : {
                      type: m.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: R.intl.string(_f.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: R.intl.string(_f.default.qGgW4M),
                          onClick: () => _x.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [__],
    });
var _C = n(696016);
let _b = [_C.zq, 25, 50, _C.Y2, _C.rv],
    _y = (0, d.sN)(c.X.CLIPS_BITRATE, {
        useTitle: () => R.intl.string(R.t["8bZyov"]),
        useSubtitle: () => R.intl.string(R.t["h8DSx/"]),
        minValue: _C.zq,
        maxValue: _C.rv,
        useDefaultValue: () => _C.Y2,
        getInitialValue: () => _T.Ay.getSettings().clipsQuality.bitratePercent ?? _C.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = _T.Ay.getSettings();
            _x.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: _b,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, _p.E)(),
    });
var _v = n(226640);
let _j = (0, d.Hn)(c.X.CLIPS_FRAME_RATE, {
        useTitle: () => R.intl.string(R.t["2wScL1"]),
        useSubtitle: () => R.intl.string(R.t["Rf9+fy"]),
        useValue: () => (0, h.bG)([_T.Ay], () => _T.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = _T.Ay.getSettings();
            _x.GS({ ...t, frameRate: e });
        },
        useOptions: _v.Fz,
        useDisabled: () => !(0, _p.E)(),
    }),
    _O = (0, d.E2)(c.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [R.intl.string(R.t.SIxrIF)],
        usePredicate: () => (0, h.bG)([_T.Ay], () => _T.Ay.getHardwareClassification()) === _C.k9.BELOW_MINIMUM,
        Component: () => (0, A.jsx)(lW.A, { look: lW.k.WARNING, children: R.intl.string(R.t.SIxrIF) }),
    }),
    _L = (0, d.Hn)(c.X.CLIPS_LENGTH, {
        useTitle: () => R.intl.string(R.t.OgfUio),
        useSubtitle: () => R.intl.string(R.t.H7j4tY),
        useValue: () => (0, h.bG)([_T.Ay], () => _T.Ay.getSettings().clipsLength),
        setValue: (e) => _x.h$(e),
        useOptions: _v.Qu,
        useDisabled: () => !(0, _p.E)(),
    }),
    _R = (0, d.E2)(c.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [R.intl.string(R.t["Z+MfqT"])],
        Component: () => (0, A.jsx)(lW.A, { look: lW.k.INFO, children: R.intl.string(R.t["Z+MfqT"]) }),
    }),
    _D = (0, d.Hn)(c.X.CLIPS_RESOLUTION, {
        useTitle: () => R.intl.string(R.t.aFudZJ),
        useSubtitle: () => R.intl.string(R.t.nIrkW5),
        useValue: () => (0, h.bG)([_T.Ay], () => _T.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = _T.Ay.getSettings();
            _x.GS({ ...t, resolution: e });
        },
        useOptions: _v.gF,
        useDisabled: () => !(0, _p.E)(),
    }),
    _P = (0, d.zD)(c.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => R.intl.string(R.t["3zwNf6"]),
        useSubtitle: () => R.intl.string(R.t.m4Cjj9),
        useValue: () => (0, h.bG)([_T.Ay], () => _T.Ay.getSettings().remindersEnabled),
        setValue: (e) => _x.Mt(e),
        useDisabled: () => !(0, _p.E)(),
    }),
    _G = (0, d.zZ)(c.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => R.intl.string(_f.default.TGwzMe),
        buildLayout: () => [_O, _L, _j, _D, _y, _R, _P],
    }),
    _M = (0, d.zD)(c.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, h.bG)([_T.Ay], () => _T.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => _x.YP(e),
    }),
    _U = (0, d.zD)(c.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, h.bG)([_T.Ay], () => _T.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => _x.Uh(e),
    }),
    _V = (0, d.zZ)(c.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, h.bG)([si.default], () => {
                let e = si.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [_M, _U],
    });
var _k = n(417270),
    _w = n(847825);
let _F = (0, d.E2)(c.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t.pf54EU), R.intl.string(R.t["QyB/jK"])],
        Component: () => {
            let e = (0, h.bG)([lM.Ay], () => lM.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0));
            ta()(null != e, "Save clip keybind unset");
            let t = !(0, _p.E)(),
                n = E.useRef(null),
                i = E.useCallback(
                    (t) => {
                        iY.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = E.useCallback(() => {
                    iY.A.setKeybind({ ...e, shortcut: (0, ls.OH)(_C.Ot) });
                }, [e]);
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.pf54EU),
                description: R.intl.string(R.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, A.jsx)("div", {
                    className: _w.g,
                    children: (0, A.jsx)(ll.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, A.jsxs)(A.Fragment, {
                            children: [
                                (0, A.jsx)(lt.m, {
                                    text: R.intl.string(_f.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(i9.K, {
                                        icon: iB.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(_f.default.bUtubv),
                                        onClick: (e) => {
                                            (e.stopPropagation(), n.current?.toggleRecordMode());
                                        },
                                    }),
                                }),
                                (0, A.jsx)(lt.m, {
                                    text: R.intl.string(_f.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, A.jsx)(i9.K, {
                                        icon: _k.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": R.intl.string(_f.default.Kyk1Tp),
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
    _B = (0, d.E2)(c.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [R.intl.string(R.t["0U/hj7"]), R.intl.string(R.t["5zxkdo"])],
        usePredicate: lD.BW,
        Component: () => {
            let e = (0, h.bG)([lM.Ay], () => lM.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0)),
                t = (0, h.bG)([lM.Ay], () => lM.Ay.getKeybindForAction(S.hCu.SAVE_SCREENSHOT, !0));
            (ta()(null != e, "Save clip keybind unset"), ta()(null != t, "Save screenshot keybind unset"));
            let n = E.useCallback(
                (e) => {
                    iY.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t["0U/hj7"]),
                description: R.intl.string(R.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, A.jsx)("div", {
                    className: _w.g,
                    children: (0, A.jsx)(ll.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    _z = (0, d.zD)(c.X.CLIPS_ENABLE, {
        useTitle: () => R.intl.string(R.t.h8rgrK),
        useSubtitle: () => R.intl.string(R.t["4Qw3NO"]),
        useValue: () => (0, _p.E)(),
        setValue: (e) => _x.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    _Y = (0, d.zY)(c.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_z, _F, _B], headerSettingKey: _z.key }),
    _X = (0, d.zZ)(c.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["rWKv+e"]),
        useSubtitle: () => R.intl.format(_f.default["dh7g+S"], { learnMoreLink: eT.A.getArticleURL(S.MVz.CLIPS) }),
        buildLayout: () => [_Y],
    }),
    _H = (0, d.E2)(c.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [R.intl.string(R.t.s4773E), R.intl.string(R.t.svjwGh)],
        Component: () => {
            let e = (0, h.bG)([_T.Ay], () => _T.Ay.getSettings().storageLocation),
                t = !(0, _p.E)(),
                n = E.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nh.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && _x.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, A.jsx)(tQ.D, {
                label: R.intl.string(R.t.s4773E),
                description: R.intl.string(R.t.svjwGh),
                layout: "vertical",
                children: (0, A.jsxs)(Y.B, {
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
                            text: R.intl.string(_f.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _K = (0, d.zZ)(c.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => R.intl.string(_f.default["0Q+pdZ"]),
        buildLayout: () => [_H],
    }),
    _W = (0, d.t_)(c.X.CLIPS_PANEL, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        usePredicate: lD.sw,
        buildLayout: () => [_X, _N, _G, _K, _V],
    }),
    _Z = (0, d.i4)(c.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.z2jK6X),
        icon: _h.x,
        buildLayout: () => [_W],
    });
var _q = n(254138),
    _Q = n(290595),
    _$ = n(153488),
    _J = n(308528),
    _0 = n(171316),
    _1 = n(558001);
n(866945);
var _2 = n(835002);
function _3() {
    let e = (0, _0.uM)(),
        t = (0, I6.vx)(),
        n = E.useCallback(() => {
            ((0, tU.default)(),
                _J.A.openPrivateChannel({ recipientIds: t }),
                (0, _1.N)(_2.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _2.YX.LEARN_MORE));
        }, [t]),
        i = E.useCallback(() => {
            (0, _1.N)(_2.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _2.YX.VIEWED);
        }, []);
    return E.useMemo(() => {
        if (e)
            return {
                type: m.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: R.intl.format(_t.default.i284fU, {
                    hook: (e, t) => (0, A.jsx)(nn.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let _5 = (0, d.zD)(c.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => R.intl.string(R.t.AGDDkH),
    useSubtitle: () => R.intl.string(R.t.kyo3dJ),
    useValue: () => L.Q$.useSetting(),
    setValue: (e) => _x.eQ({ allowVoiceRecording: e }),
});
var _4 = n(157559),
    _6 = n(331887);
function _8() {
    let e = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
        t = (0, h.bG)([_6.A], () => _6.A.harvestType),
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
let _7 = (0, d.Tf)(c.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => R.intl.string(R.t.qfFFos),
        useSubtitle: function () {
            let e = _8();
            if (e.allowed) return R.intl.format(R.t.NRI6vt, { article: eT.A.getArticleURL(S.MVz.GDPR_REQUEST_DATA) });
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
            (e4.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                e5.Bo.get({ url: S.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        e4.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        e4.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    }));
        },
        useDisabled: () => !_8().allowed,
        useLoading: () => (0, h.bG)([_6.A], () => _6.A.requestingHarvest),
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
                            (0, pL.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            e4.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? _4.A.show({
                                                  title: R.intl.string(R.t.i2iul5),
                                                  body: R.intl.string(R.t["6Nmv4i"]),
                                              })
                                            : _4.A.show({
                                                  title: R.intl.string(R.t.OjbtDm),
                                                  body: R.intl.string(R.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || R.intl.string(R.t["0F5Jyt"]);
                                        _4.A.show({ title: R.intl.string(R.t.OjbtDm), body: t });
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
    _9 = (0, d.v_)(c.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => R.intl.string(R.t.D60Gfj),
        useSubtitle: () =>
            R.intl.format(R.t.dszICC, {
                onClickDisable: () => (0, nl.openUserSettings)(c.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, nl.openUserSettings)(c.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var Ne = n(972737);
let Nt = (0, d.zD)(c.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => R.intl.string(R.t.MNKzyg),
        useSubtitle: () =>
            R.intl.format(R.t["2SiYln"], { helpdeskArticle: eT.A.getArticleURL(S.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, h.bG)([_$.A], () => _$.A.hasConsented(S.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, _Q.U)([S.YAq.PERSONALIZATION], []).catch(Ne.i)
                : (0, Ne.O)({
                      header: R.intl.string(R.t["9SNpzv"]),
                      confirmText: R.intl.string(R.t["9g5UGw"]),
                      cancelText: R.intl.string(R.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, _Q.U)([], [S.YAq.PERSONALIZATION]).catch(Ne.i);
                      },
                      body: R.intl.string(R.t.gJvDDh),
                  });
        },
        useDisabled: _0.uM,
    }),
    Nn = (0, EX.mj)({
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
function Ni() {
    let { enabled: e } = Nn.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var Nl = n(884705);
function Ns() {
    return (0, h.bG)([Nl.A], () => Nl.A.isTogglesDisabled());
}
function Nr() {
    return !L.vf.useSetting();
}
function Na(e) {
    L.vf.updateSetting(!e);
}
function No() {
    let e = Ns(),
        t = L.H1.useSetting(),
        n = (0, _0.uM)();
    return e || t || n;
}
let Nu = (0, d.zD)(c.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["md5l4/"], { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !Ni(),
        useValue: Nr,
        setValue: Na,
        useDisabled: No,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    }),
    Nd = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => R.intl.string(R.t.CyLYKZ),
        useSubtitle: () =>
            R.intl.format(R.t["2QFDU/"], { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Ni,
        useValue: Nr,
        setValue: Na,
        useDisabled: No,
        useSearchTerms: () => [R.intl.string(R.t.CyLYKZ)],
    });
function Nc() {
    return !L.H1.useSetting();
}
function Ng(e) {
    L.H1.updateSetting(!e);
}
function Nm() {
    let e = Ns(),
        t = (0, _0.uM)();
    return e || t;
}
let NA = (0, d.zD)(c.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () => R.intl.string(R.t.w4fvxe),
        usePredicate: () => !Ni(),
        useValue: Nc,
        setValue: Ng,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: Nm,
    }),
    NE = (0, d.zD)(c.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => R.intl.string(R.t.sJYh5t),
        useSubtitle: () =>
            R.intl.format(R.t.cf9mvV, { helpdeskArticle: eT.A.getArticleURL(S.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: Ni,
        useValue: Nc,
        setValue: Ng,
        useSearchTerms: () => [R.intl.string(R.t.VkS7Yd)],
        useDisabled: Nm,
    }),
    Nh = (0, d.AK)(c.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: c.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = ED(2);
            return R.intl.format(R.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = EP();
            return { type: m.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, h.bG)([iQ.Ay], () => iQ.Ay.getGamesSeen(!1).some((e) => !(0, Ey.n1)(e))) && (0, nm.xl)(),
    }),
    NS = (0, d.gN)(c.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Nh] }),
    Np = (0, d.zD)(c.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => R.intl.string(R.t.XuADY2),
        useSubtitle: () =>
            R.intl.format(R.t.FNqmmX, { helpdeskArticle: eT.A.getArticleURL(S.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, h.bG)([_$.A], () => _$.A.hasConsented(S.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, _Q.U)([S.YAq.USAGE_STATISTICS], []).catch(Ne.i)
                : (0, Ne.O)({
                      header: R.intl.string(R.t.OdPCbN),
                      body: R.intl.string(R.t.MGWabA),
                      confirmText: R.intl.string(R.t["D3+rU4"]),
                      cancelText: R.intl.string(R.t.kYpG0u),
                      onConfirm: () => (0, _Q.U)([], [S.YAq.USAGE_STATISTICS]).catch(Ne.i),
                  });
        },
        useSearchTerms: () => [R.intl.string(R.t.XuADY2)],
        useDisabled: _0.uM,
    }),
    Nx = (0, d.zZ)(c.X.DATA_USAGE_CATEGORY, {
        useTitle: () => R.intl.string(R.t.QDAriI),
        useInlineNotice: _3,
        initialize: () => {
            _$.A.fetchedConsents || (0, _Q.Q)();
        },
        buildLayout: () => [_9, Np, Nt, NA, Nu, _5, _7, NS],
    });
var NT = n(15762);
let Nf = (0, d.zD)(c.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => R.intl.string(NT.default.F3llsQ),
    useSubtitle: () => R.intl.string(NT.default["6goWcz"]),
    useValue: L.Sy.useSetting,
    setValue: function (e) {
        (L.Sy.updateSetting(e),
            tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: Ek.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            }));
    },
});
function NI() {
    let e = L.JG.useSetting();
    return (0, h.yK)(
        [ce.Ay, lh.A],
        () => {
            let t = new Set(e);
            return ce.Ay.getFlattenedGuildIds().filter((e) => null != lh.A.getGuild(e) && !t.has(e));
        },
        [e],
    );
}
let N_ = (0, d.AK)(c.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = NI();
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
                    ((e = NI()),
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
                                    icon: (0, A.jsx)(EJ, { guild: t[0], size: Ev.CD }),
                                    shape: Ev.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, A.jsx)(EJ, { guild: t[1], size: Ev.CD }), shape: Ev.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, A.jsx)(EJ, { guild: t[0], size: Ev.CD }),
                                    shape: Ev.e0.SQUIRCLE,
                                },
                            });
            return { type: m.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    NN = (0, d.gN)(c.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, EB.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [N_],
    }),
    NC = (0, d.Qx)(c.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, EB.lX)("ProfilePrivacySetting"),
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
            if ((L.KP.updateSetting(e), !(0, EB.W1)("ProfilePrivacySetting"))) return;
            let i = (0, EK.gS)(t, e);
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
    Nb = (0, d.zZ)(c.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.ul884f),
        useSubtitle: () =>
            R.intl.format(R.t.N4jSgR, {
                learnMoreUrl: eT.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [NC, Nf, NN],
    });
var Ny = n(952270),
    Nv = n(678538);
let Nj = { [eB.tR.REAL_MONEY_GAMING]: Nv.default.pmIitA },
    NO = Object.keys(Nj).map(Number),
    NL = (0, d.E2)(c.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [R.intl.string(Nv.default.foQaI1)],
        usePredicate: Ni,
        Component: function () {
            let e = E.useMemo(
                    () =>
                        NO.map((e) => ({
                            id: String(e),
                            value: e,
                            label: R.intl.string(Nj[e]),
                            leading: Ny.EyeSlashIcon,
                        })),
                    [],
                ),
                t = L.XZ.useSetting();
            return (0, A.jsx)(px.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(L.XZ.getSetting());
                    for (let e of NO) t.has(e) ? n.add(e) : n.delete(e);
                    L.XZ.updateSetting([...n]);
                },
                label: R.intl.string(Nv.default.foQaI1),
                description: R.intl.format(Nv.default["z/MfaY"], {
                    helpdeskArticle: eT.A.getArticleURL(S.MVz.MANAGE_SPONSORED_CONTENT),
                }),
                layout: "vertical",
                placeholder: R.intl.string(Nv.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    NR = (0, d.zZ)(c.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => R.intl.string(Nv.default.XUj46U),
        usePredicate: Ni,
        buildLayout: () => [NE, Nd, NL],
    });
var ND = n(936388),
    NP = n(714763),
    NG = n(814278);
let NM = (0, d.zD)(c.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => R.intl.string(R.t["opi/XK"]),
    useSubtitle: () => R.intl.format(R.t["/T+ZlP"], { helpArticle: (0, NG.Lu)() }),
    useValue: function () {
        return (0, h.bG)([NP.A], () => NP.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        ND.A.updatePersistentCodesEnabled(e);
    },
});
var NU = n(787392);
function NV() {
    return (0, h.yK)([NU.A], () => NU.A.getUserIds());
}
var Nk = n(803306),
    Nw = n(966327),
    NF = n(774156);
function NB(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eP.Ay)(),
        l = (0, h.bG)([si.default], () => si.default.getUser(t)),
        s = xR.Ay.getFormattedName(l),
        r = E.useCallback(() => {
            (0, NG.kj)(t);
        }, [t]),
        a = E.useCallback(() => (0, pG.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        E.useEffect(() => {
            (0, Nk.wz)(t);
        }, [t]),
        (0, A.jsxs)("div", {
            className: NF.uW,
            children: [
                null != l && (0, A.jsx)(Nw.A, { className: NF.my, user: l, size: I._3.SIZE_40 }),
                (0, A.jsxs)("div", {
                    className: NF.Qq,
                    children: [
                        (0, A.jsx)(n0.D, {
                            className: NF.Xh,
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
                (0, A.jsx)(n0.D, { onClick: r, className: NF.Qz, children: (0, A.jsx)(le.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function Nz(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, NG.tC)(i.timestamp),
        r = E.useCallback(() => {
            (0, NG.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, A.jsxs)("div", {
        className: t,
        children: [
            (0, A.jsxs)("div", {
                className: NF.Qq,
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
                className: NF.Kk,
                onClick: r,
                children: (0, A.jsx)(hu.P, { size: "md", color: nQ.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function NY(e) {
    let { userId: t } = e,
        n = (0, h.yK)([NU.A], () =>
            B()(NU.A.getUserVerifiedKeys(t))
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
            (0, A.jsx)(NB, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, A.jsxs)(
                    E.Fragment,
                    {
                        children: [
                            (0, A.jsx)(Nz, { className: NF.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, A.jsx)("div", { className: NF.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var NX = n(464946),
    NH = n(492422);
let NK = (0, d.E2)(c.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [R.intl.string(R.t["5b3FNI"])],
        usePredicate: function () {
            let e = NV();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = NV();
            return (0, A.jsxs)(NX.h, {
                children: [
                    (0, A.jsx)(NX._, {
                        header: R.intl.string(R.t["5b3FNI"]),
                        description: R.intl.format(R.t.jrTSWU, { helpArticle: (0, NG.dc)() }),
                    }),
                    e.map((e) => (0, A.jsx)("div", { className: NH.A, children: (0, A.jsx)(NY, { userId: e }) }, e)),
                ],
            });
        },
    }),
    NW = (0, d.zZ)(c.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => R.intl.string(R.t.bTwjaz),
        usePredicate: () => (0, eQ.isDesktop)(),
        buildLayout: () => [NM, NK],
    }),
    NZ = (0, d.t_)(c.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        buildLayout: () => [Nx, NR, Nb, NW],
    }),
    Nq = (0, d.i4)(c.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.OAuOHD),
        icon: _q.m,
        buildLayout: () => [NZ],
    });
var NQ = n(476713);
let N$ = (0, d.AK)(c.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.O65dzZ),
        useTitle: () => R.intl.string(R.t["f6kk+r"]),
        destinationKey: c.X.AUTHORIZED_APPS_CATEGORY,
    }),
    NJ = (0, d.gN)(c.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [N$] });
var N0 = n(875444);
function N1(e, t) {
    let n = (0, h.bG)([hT.default], () => hT.default.getFetchState()),
        i = (0, h.bG)([hT.default], () =>
            e ? hT.default.getNewestTokensForNonChildrenApplications() : hT.default.getNewestTokens(),
        ),
        l = E.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, N0.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        E.useEffect(() => {
            t || hs.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== hT.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var N2 = n(514479);
function N3() {
    return (0, A.jsxs)("div", {
        className: N2.d,
        children: [
            (0, A.jsx)(H.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: N2.x,
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
let N5 = (0, d.E2)(c.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = N1(!0, !0);
        return e ? (0, A.jsx)(oe.y, {}) : (0, A.jsx)(N3, {});
    },
    useSearchTerms: () => [R.intl.string(R.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = N1(!0, !0);
        return e || 0 === t.length;
    },
});
function N4() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = N1(!0, !0);
    return !e && t.length > 0;
}
let N6 = (0, d.zD)(c.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => R.intl.string(R.t.W8JtfT),
        useSubtitle: () => R.intl.string(R.t.a99KKy),
        useSearchTerms: () => [R.intl.string(R.t["Uv/eTx"])],
        useValue: () => L.Zk.useSetting(),
        setValue: (e) => L.Zk.updateSetting(e),
        usePredicate: N4,
    }),
    N8 = (0, d.Qx)(c.X.IN_GAME_DMS_SETTING, {
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
        usePredicate: N4,
    });
function N7() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = N1(!0, !0);
    return {
        sortedGames: E.useMemo(() => e.toSorted((e, t) => oc.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var N9 = n(306537),
    Ce = n(40957);
function Ct(e) {
    let { body: t, buttonText: n, onButtonClick: i, noticeType: l, iconAlign: s } = e;
    return (
        (0, eS.Ay)(() => {
            (0, _1.N)(l, _2.YX.VIEWED);
        }),
        (0, A.jsx)(iz.w, {
            type: "info",
            iconAlign: s,
            children: (0, A.jsxs)(Y.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: "xs",
                children: [
                    (0, A.jsx)("span", { className: Ce.r, children: t }),
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
function Cn(e, t) {
    return {
        handleLearnMore: E.useCallback(() => {
            (t(), (0, _1.N)(e, _2.YX.LEARN_MORE));
        }, [e, t]),
        handleConfirmAge: E.useCallback(() => {
            (fi.A.showAgeVerificationGetStartedModal({ entryPoint: N9.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _1.N)(e, _2.YX.CONFIRM_AGE));
        }, [e]),
    };
}
function Ci() {
    let e,
        t = (0, _0.uM)(),
        n = (0, ff.fk)(),
        i = (0, fT.b8)(),
        l = (0, I9.Z)();
    if (!t) {
        if ((n && !i ? (e = "unconfirmed") : l && (e = "teen"), null != e) && (0, fa.n)(fs.Vc)) return e;
    }
}
var Cl = n(687123),
    Cs = n(444802);
function Cr() {
    let e = (0, Cs.WX)();
    E.useEffect(() => {
        (0, _1.N)(_2.YA.AGE_CONFIRMATION_NOTICE, _2.YX.VIEWED);
    }, []);
    let t = E.useCallback(() => {
            (window.open(eT.A.getArticleURL(e), "_blank"), (0, _1.N)(_2.YA.AGE_CONFIRMATION_NOTICE, _2.YX.LEARN_MORE));
        }, [e]),
        n = E.useCallback(() => {
            (fi.A.showAgeVerificationGetStartedModal({ entryPoint: N9.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _1.N)(_2.YA.AGE_CONFIRMATION_NOTICE, _2.YX.CONFIRM_AGE));
        }, []);
    return (0, A.jsx)(r2.p, {
        messageType: r2.Y.INFO,
        action: (0, A.jsx)(Es.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: R.intl.string(R.t.FDSSia),
            onClick: n,
        }),
        children: R.intl.format(R.t.mFgsfg, { hook: (e, n) => (0, A.jsx)(nn.Anchor, { onClick: t, children: e }, n) }),
    });
}
function Ca() {
    let e = (0, ff.aX)(Cl.t.REACTIVE_CHECK),
        t = (0, fT.b8)();
    return E.useMemo(() => {
        if (e && !t) return { type: m.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: Cr };
    }, [e, t]);
}
var Co = n(323073),
    Cu = n(386171),
    Cd = n(96607);
let Cc = (0, d.zD)(c.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => R.intl.string(R.t.gvC6q7),
        useSubtitle: () => R.intl.string(R.t.zirUC1),
        useValue: Cu.hT,
        useDisabled: function () {
            let e = (0, Cd.A)() ?? !0,
                t = (0, Co.sP)(),
                n = (0, fT.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, Co.p5)() && e
                ? fi.A.showAgeVerificationGetStartedModal({ entryPoint: N9.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : L.Qe.updateSetting(e);
        },
    }),
    Cg = (0, d.zD)(c.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => R.intl.string(R.t["L+yTsa"]),
        useSubtitle: () => R.intl.string(R.t["t6i/jW"]),
        useValue: Cu.tI,
        useDisabled: function () {
            let e = (0, Cd.A)() ?? !0,
                t = (0, Co.sP)(),
                n = (0, fT.yM)();
            return E.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, Co.p5)() && e
                ? fi.A.showAgeVerificationGetStartedModal({ entryPoint: N9.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : L.Kg.updateSetting(e);
        },
    }),
    Cm = (0, d.AK)(c.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t.hOXd45),
        destinationKey: c.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    CA = (0, d.gN)(c.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [Cm] });
n(667532);
var CE = n(390248),
    Ch = n(632119),
    CS = n(945276),
    Cp = n(389737),
    Cx = n(566769);
function CT() {
    let e,
        t = (0, CS.A)() ?? !0,
        n = (0, _0.uM)(),
        i = (0, _0.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, aq.cf)([ag.A], () => ag.A.settings.textAndImages?.explicitContentSettings ?? (0, Ch.C$)())),
        {
            explicitContentGuilds: (0, Ch.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, Ch.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, Ch.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, CE.hK)() && t.includes(eB.TO.SHOW)
            ? fi.A.showAgeVerificationGetStartedModal({ entryPoint: N9.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, Ch.Jz)(e);
    }
    let o = [
            { value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eB.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eB.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(_t.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(Cp.E, {
        description: R.intl.string(R.t.Wnojv1),
        children: [
            (0, A.jsx)(Cx.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(Cx.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(Cx.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? R.intl.string(_t.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function Cf() {
    let e,
        t = (0, CS.A)() ?? !0,
        n = (0, _0.uM)(),
        i = (0, _0.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, aq.cf)([ag.A], () => ag.A.settings.textAndImages?.goreContentSettings ?? (0, Cs.T4)())),
        {
            goreContentGuilds: (0, Cs.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, Cs.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, Cs.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, CE.hK)() && t.includes(eB.TO.SHOW)
            ? fi.A.showAgeVerificationGetStartedModal({ entryPoint: N9.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, Cs.qY)(e);
    }
    let o = [
            { value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) },
            { value: eB.TO.BLOCK, label: R.intl.string(R.t["D/157Y"]) },
        ],
        u = [{ value: eB.TO.BLUR, label: R.intl.string(R.t.S49Uad) }],
        d = { value: eB.TO.SHOW, label: R.intl.string(R.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: i, tooltipText: n ? R.intl.string(_t.default["6Af/cw"]) : void 0 };
    return (0, A.jsxs)(Cp.E, {
        description: R.intl.string(R.t.XgH9eh),
        children: [
            (0, A.jsx)(Cx.A, {
                title: R.intl.string(R.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(Cx.A, {
                title: R.intl.string(R.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, A.jsx)(Cx.A, {
                title: R.intl.string(R.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? R.intl.string(_t.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var CI = n(875162),
    C_ = n(636745);
let CN = (0, d.E2)(c.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, Cs.WX)(),
            t = E.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: R.intl.string(R.t.GYpoAq),
                        component: CT,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: R.intl.string(R.t["16/3Bi"]),
                        component: Cf,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, A.jsxs)(NX.h, {
            children: [
                (0, A.jsx)(NX._, {
                    header: R.intl.string(R.t["Hj/But"]),
                    description: R.intl.format(R.t.dliU4j, { learnMoreLink: eT.A.getArticleURL(e) }),
                }),
                (0, A.jsx)(CI.A, { tabs: t, orientation: "vertical", tabsClassName: C_.v }),
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
var CC = n(639555),
    Cb = n(617641),
    Cy = n(546140),
    Cv = n(406935),
    Cj = n(594061);
let CO = (0, d.zD)(c.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => R.intl.string(R.t.qFsx5q),
        useSubtitle: () => R.intl.format(R.t.lunaRv, { learnMoreLink: eT.A.getArticleURL(S.MVz.SAFETY_ALERTS) }),
        useValue: Cy.L,
        setValue: function (e) {
            return Cj.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = Cv._t.create({ value: e });
                },
                Cj.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, Cb.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, CC.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, CS.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    CL = (0, d.zZ)(c.X.CONTENT_CATEGORY, {
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
                u,
                d,
                c,
                g,
                h,
                S,
                p,
                x,
                T = _3(),
                f =
                    ((l = (0, _0.uM)()),
                    (s = (0, ff.fk)()),
                    (r = (0, fT.b8)()),
                    (a = (0, I9.Z)()),
                    (o = Cn(_2.YA.AGE_CONFIRMATION_NOTICE, fr)),
                    (u = Cn(_2.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, fn.M0)),
                    (d = E.useCallback(() => {
                        (0, _1.N)(_2.YA.AGE_CONFIRMATION_NOTICE, _2.YX.VIEWED);
                    }, [])),
                    (c = E.useCallback(() => {
                        (0, _1.N)(_2.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _2.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (!l && (0, fa.n)(fs.Vc)) {
                            if (s && !r)
                                return {
                                    type: m.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "center",
                                    trackView: d,
                                    text: R.intl.format(fu.default.HGJo1F, {
                                        handleOnAgeGatedContentHook: o.handleLearnMore,
                                    }),
                                    button: {
                                        size: "sm",
                                        text: R.intl.string(fu.default["cI+bc/"]),
                                        onClick: o.handleConfirmAge,
                                    },
                                };
                            if (a)
                                return {
                                    type: m.lT.INLINE_NOTICE,
                                    noticeType: "info",
                                    iconAlign: "start",
                                    trackView: c,
                                    text: R.intl.format(fu.default.qbBkFI, {
                                        handleOnConfirmAgeHook: u.handleConfirmAge,
                                    }),
                                    button: { size: "sm", text: R.intl.string(R.t.hvVgAZ), onClick: u.handleLearnMore },
                                };
                        }
                    }, [s, l, a, r, u, c, d, o])),
                I =
                    ((e = (0, I9.Z)()),
                    (t = (0, Cs.WX)()),
                    (n = E.useCallback(() => {
                        (window.open(eT.A.getArticleURL(t), "_blank"),
                            (0, _1.N)(_2.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _2.YX.LEARN_MORE));
                    }, [t])),
                    (i = E.useCallback(() => {
                        (0, _1.N)(_2.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _2.YX.VIEWED);
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
                _ =
                    ((g = (0, ff.SJ)()),
                    (h = (0, fT.b8)()),
                    (S = g && !h),
                    (p = E.useCallback(() => {
                        (fi.A.showAgeVerificationGetStartedModal({ entryPoint: N9.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _1.N)(_2.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _2.YX.LEARN_MORE));
                    }, [])),
                    (x = E.useCallback(() => {
                        (0, _1.N)(_2.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _2.YX.VIEWED);
                    }, [])),
                    E.useMemo(() => {
                        if (S)
                            return {
                                type: m.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: x,
                                text: R.intl.format(R.t.OX4ybh, {
                                    hook: (e, t) => (0, A.jsx)(nn.Anchor, { onClick: p, children: e }, t),
                                }),
                            };
                    }, [p, S, x])),
                N = Ca();
            return T ?? f ?? N ?? _ ?? I;
        },
        buildLayout: () => [CN, CO, Cc, Cg, CA],
    });
var CR = n(923457),
    CD = n(750714);
let CP = (0, d.Qx)(c.X.DM_SPAM_SETTING, {
    useTitle: () => R.intl.string(R.t.puwSkY),
    useSubtitle: () => R.intl.string(R.t["+sXN3T"]),
    useValue: function () {
        let e = L.he.useSetting(),
            t = L.cj.useSetting(),
            n = (0, h.bG)([si.default], () => si.default.getCurrentUser()),
            i = (0, ff.yv)(CR.p.SPAM_FILTERS);
        return e !== eB.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? eB.he.FRIENDS_AND_NON_FRIENDS
              : (CD.xY.get(t) ?? eB.he.NON_FRIENDS);
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
var CG = n(189883);
let CM = (0, d.zD)(c.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => R.intl.string(R.t["7x9dyE"]),
    useValue: function () {
        let e = L.FA.useSetting();
        return E.useMemo(() => (0, n8.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        L.FA.updateSetting(e ? S.yKI : S.yKI & ~S.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _0.uM)();
    },
});
var CU = n(665260);
let CV = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => R.intl.string(R.t.NfeuZ3),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n8.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? CU.UI(t, S.dzt.MUTUAL_FRIENDS) : CU.iE(t, S.dzt.MUTUAL_FRIENDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _0.uM)();
        },
    }),
    Ck = (0, d.zD)(c.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => R.intl.string(R.t.qsMfsH),
        useSubtitle: () => R.intl.string(R.t["6DqAp0"]),
        useValue: function () {
            let e = L.FA.useSetting(),
                t = E.useMemo(() => (0, n8.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = L.FA.getSetting();
            L.FA.updateSetting(e ? CU.UI(t, S.dzt.MUTUAL_GUILDS) : CU.iE(t, S.dzt.MUTUAL_GUILDS, S.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _0.uM)();
        },
    }),
    Cw = (0, d.FW)(c.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => R.intl.string(R.t.wTdS6S),
        buildLayout: () => [CM, CV, Ck],
    });
var CF = n(420825);
let CB = (0, d.zD)(c.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => R.intl.string(R.t["jK+wdr"]),
        useSubtitle: () => R.intl.string(R.t["RYh/pW"]),
        useValue: () => !(0, CF.q)(),
        setValue: function (e) {
            L.Zd.updateSetting(!e);
        },
    }),
    Cz = (0, d.zZ)(c.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = CG.A.useConfig({ location: "Friend Request Setting" });
            return e ? R.intl.string(R.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => R.intl.string(R.t.fyA115),
        useInlineNotice: _3,
        buildLayout: () => [Cw, CB],
    });
var CY = n(994500),
    CX = n(428678),
    CH = n(717398),
    CK = n(730134),
    CW = n(276573);
function CZ(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, A.jsxs)("div", {
        className: CW.wx,
        children: [
            (0, A.jsx)("div", {
                className: CW.zc,
                children: i ? (0, A.jsx)(CX.K, {}) : (0, A.jsx)(Ny.EyeSlashIcon, {}),
            }),
            (0, A.jsxs)("div", {
                className: CW.Qq,
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
function Cq(e) {
    let { userId: t, last: n } = e,
        i = (0, h.bG)([CY.A], () => CY.A.isBlocked(t)),
        l = (0, h.bG)([si.default], () => si.default.getUser(t)),
        [s, r] = E.useState(!1),
        a = E.useCallback(() => {
            (r(!0),
                i
                    ? CH.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : CH.A.unignoreUser(t, tL.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      }));
        }, [i, t]);
    return null == l
        ? null
        : (0, A.jsxs)("div", {
              className: ir()(CW.nM, { [CW.fW]: n }),
              children: [
                  (0, A.jsxs)("div", {
                      className: CW.eF,
                      children: [
                          (0, A.jsx)(CK.A, { user: l, size: I._3.SIZE_40 }),
                          (0, A.jsxs)("div", {
                              className: CW.Qq,
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
function CQ(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = E.useState(5);
    return (0, A.jsx)(NX.h, {
        children: (0, A.jsxs)("div", {
            className: CW.Nr,
            children: [
                (0, A.jsx)(CZ, { listType: n, numberOfUsers: t.length }),
                (0, A.jsx)("div", {
                    className: CW.jS,
                    children: t.slice(0, i).map((e, n) => (0, A.jsx)(Cq, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, A.jsx)("div", {
                          className: CW.vM,
                          children: (0, A.jsx)(n0.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: CW.Qf,
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
let C$ = (0, d.E2)(c.X.BLOCKED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t.PFOUKW)],
        usePredicate: () => (0, h.bG)([CY.A], () => CY.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([CY.A], () => CY.A.getBlockedIDs());
            return (0, A.jsx)(CQ, { userIds: e, listType: "blocked" });
        },
    }),
    CJ = (0, d.E2)(c.X.IGNORED_USERS, {
        useSearchTerms: () => [R.intl.string(R.t["93ZDWE"])],
        usePredicate: () => (0, h.bG)([CY.A], () => CY.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, h.yK)([CY.A], () => CY.A.getIgnoredIDs());
            return (0, A.jsx)(CQ, { userIds: e, listType: "ignored" });
        },
    }),
    C0 = (0, d.zZ)(c.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => R.intl.string(R.t["+Iryf3"]),
        useSubtitle: () =>
            R.intl.format(R.t["0aNQo9"], { helpArticle: eT.A.getArticleURL(S.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [C$, CJ],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, h.cf)([CY.A], () => ({
                hasBlockedUsers: CY.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: CY.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var C1 = n(22385),
    C2 = n(556534),
    C3 = n(111159),
    C5 = n(152056),
    C4 = n(428031),
    C6 = n(978433);
let C8 = { label: () => R.intl.string(R.t["32u1Dx"]), value: C1.YG };
var C7 = n(307863),
    C9 = n(954225);
function be() {
    return (0, C7.e)() ? R.intl.string(R.t.PMsfcH) : R.intl.string(R.t.RAQUSN);
}
function bt(e, t) {
    tt.default.track(S.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let bn = (0, d.zD)(c.X.PERMISSIONS_DMS_SETTING, {
    useTitle: be,
    useSubtitle: function () {
        let e = (0, C2.Tx)(),
            t = (0, C2.q9)(),
            n = (0, C7.e)();
        return e === C1.YG
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
        let e = (0, C2.Tx)(),
            t = L.$s.useSetting().includes(e),
            n = (0, C4.K)();
        return e === C1.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, _0.uM)();
        return (0, C2.Tx)() === C1.YG && e;
    },
    setValue: function (e) {
        let t = C1.xk.getState().selectedGuildId;
        if (t === C1.YG) {
            var n;
            ((n = !e),
                (0, Ne.O)({
                    header: R.intl.string(R.t["uUr+GR"]),
                    body: R.intl.string(R.t.hjGJBp),
                    confirmText: R.intl.string(R.t.gm1Vej),
                    cancelText: R.intl.string(R.t.p89ACt),
                    confirmButtonColor: sk.$n.Colors.BRAND,
                    onConfirm: function () {
                        (L.n6.updateSetting(n), bt(n, !1));
                    },
                    onCancel: function () {
                        (L.n6.updateSetting(n), L.$s.updateSetting(n ? lh.A.getGuildIds() : []), bt(n, !0));
                    },
                }));
        } else {
            let n = (0, n8.Tb)();
            (e ? n.delete(t) : n.add(t),
                L.$s.updateSetting(Array.from(n)),
                tt.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: C9.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                }));
        }
    },
});
var bi = n(116774),
    bl = n(953298);
function bs(e, t) {
    tt.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function br() {
    return R.intl.string(R.t["3o2ojh"]);
}
let ba = (0, d.zD)(c.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: br,
        useSubtitle: function () {
            let e = (0, C2.q9)(),
                t = eT.A.getArticleURL(S.MVz.MESSAGE_REQUESTS);
            return e
                ? R.intl.format(R.t.WpnWLc, { helpdeskArticle: t })
                : R.intl.format(R.t.wkm9a3, { helpdeskArticle: t });
        },
        useValue: function () {
            let e = (0, C2.Tx)(),
                t = (0, C4.K)(),
                n = L.$s.useSetting().includes(e),
                i = (0, bi.s)(),
                l = (0, _0.uM)(),
                s = L.YX.useSetting(),
                r = L.Zr.useSetting().includes(e);
            return !!i || (e === C1.YG && l ? !s : e === C1.YG ? !t && !s : !n && !r);
        },
        useDisabled: function () {
            let e = (0, C2.Tx)(),
                t = (0, _0.uM)(),
                n = (0, C4.K)(),
                i = L.$s.useSetting().includes(e),
                l = (0, bi.s)();
            return e === C1.YG ? n || t || l : i || l;
        },
        setValue: function (e) {
            let t = C1.xk.getState().selectedGuildId;
            if (!e && (0, bl.w)())
                return void fi.A.showAgeVerificationGetStartedModal({ entryPoint: N9.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === C1.YG) {
                var n;
                ((n = !e),
                    (0, Ne.O)({
                        header: R.intl.string(R.t.yAfu1p),
                        body: R.intl.string(R.t.Ry2z74),
                        confirmText: R.intl.string(R.t.gm1Vej),
                        cancelText: R.intl.string(R.t.p89ACt),
                        confirmButtonColor: sk.$n.Colors.BRAND,
                        onConfirm: function () {
                            (L.YX.updateSetting(n), bs(n, !1));
                        },
                        onCancel: function () {
                            (L.YX.updateSetting(n), L.Zr.updateSetting(n ? lh.A.getGuildIds() : []), bs(n, !0));
                        },
                    }));
            } else {
                let n = (0, n8.xo)();
                (e ? n.delete(t) : n.add(t),
                    L.Zr.updateSetting(Array.from(n)),
                    tt.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: C9.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eC.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    }));
            }
        },
    }),
    bo = (0, d.E2)(c.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [be(), br()];
        },
        Component: function () {
            let e,
                t,
                { selectedGuildId: n, setSelectedGuildId: i } = (0, C1.xk)(),
                l = (0, h.bG)([ce.Ay], () => ce.Ay.getFlattenedGuildIds()),
                s = (0, h.bG)([lh.A], () => lh.A.getGuilds()),
                r =
                    ((e = L.$s.useSetting()),
                    (t = (0, C4.K)()),
                    (0, h.bG)(
                        [lh.A],
                        () => {
                            let n = new Set(e);
                            return lh.A.getGuildIds().filter((e) => n.has(e) !== t).length;
                        },
                        [e, t],
                    )),
                a = l[0];
            E.useEffect(
                () =>
                    C5.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, t) => {
                            let n = C1.xk.getState().selectedGuildId;
                            "" === t && "" !== e && n === C1.YG && null != a
                                ? i(a)
                                : "" === e && n !== C1.YG && i(C1.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [a, i],
            );
            let o = E.useMemo(() => {
                    let e = [];
                    return (
                        e.push({
                            ...C8,
                            id: C8.value,
                            label: C8.label(),
                            leading: (0, A.jsx)("div", {
                                className: C6.KP,
                                children: (0, A.jsx)(C3.p, {
                                    size: "sm",
                                    color: "white",
                                    "aria-hidden": !0,
                                    className: C6.cl,
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
                                    leading: (0, A.jsx)(cg.Ay, {
                                        className: C6.cl,
                                        guild: n,
                                        size: cg.Ay.Sizes.SMALLER,
                                        active: !0,
                                    }),
                                });
                        }),
                        e
                    );
                }, [l, s]),
                u = n === C1.YG && r > 0;
            return (0, A.jsxs)(A.Fragment, {
                children: [
                    (0, A.jsx)(px.Z, {
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
                            className: C6.h_,
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
    bu = (0, d.E2)(c.X.MESSAGE_REQUESTS_NOTICE_SETTING, {
        useSearchTerms: () => [],
        usePredicate: function () {
            let e = (0, C2.Tx)(),
                t = Ci();
            return e === C1.YG && null != t;
        },
        Component: function () {
            let e = Ci(),
                t = Cn(_2.YA.AGE_CONFIRMATION_NOTICE, fr),
                n = Cn(_2.YA.CONTENT_AND_SOCIAL_NOTICE, fn.M0);
            switch (e) {
                case "unconfirmed":
                    return (0, A.jsx)(Ct, {
                        noticeType: _2.YA.AGE_CONFIRMATION_NOTICE,
                        iconAlign: "center",
                        body: R.intl.format(fu.default.tGsCdS, { handleOnAgeGatedContentHook: t.handleLearnMore }),
                        buttonText: R.intl.string(fu.default["cI+bc/"]),
                        onButtonClick: t.handleConfirmAge,
                    });
                case "teen":
                    return (0, A.jsx)(Ct, {
                        noticeType: _2.YA.CONTENT_AND_SOCIAL_NOTICE,
                        iconAlign: "start",
                        body: R.intl.format(fu.default["l+jt8J"], { handleOnConfirmAgeHook: n.handleConfirmAge }),
                        buttonText: R.intl.string(R.t.hvVgAZ),
                        onButtonClick: n.handleLearnMore,
                    });
                case void 0:
                    return null;
            }
        },
    }),
    bd = (0, d.zZ)(c.X.PERMISSIONS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.Y5GYcX),
        useSubnavLabel: () => R.intl.string(R.t.YUU0RF),
        useInlineNotice: function () {
            let e = _3(),
                t = Ca();
            if ((0, C2.Tx)() === C1.YG) return e ?? t;
        },
        buildLayout: () => [bo, bn, ba, bu],
    }),
    bc = (0, d.zZ)(c.X.SPAM_FILTERS_CATEGORY, { useTitle: () => R.intl.string(R.t.Qwuoic), buildLayout: () => [CP] }),
    bg = (0, d.zZ)(c.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = N7();
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
                let { sortedGames: e } = N7();
                return E.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, A.jsx)("img", {
                                src: O.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: Ev.CD,
                                height: Ev.CD,
                            }),
                            shape: Ev.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, A.jsx)("img", {
                                    src: O.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: Ev.YP,
                                    height: Ev.YP,
                                }),
                                shape: Ev.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: m.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [R.intl.string(R.t.YpCiMt)],
        initialize: () => {
            hs.A.fetch();
        },
        buildLayout: () => [N6, N8, N5, NJ],
    }),
    bm = (0, d.t_)(c.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        buildLayout: () => [CL, bc, bd, Cz, bg, C0],
    }),
    bA = (0, d.i4)(c.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.Cz07t8),
        icon: NQ.l,
        buildLayout: () => [bm],
    });
var bE = n(782603),
    bh = n(899847),
    bS = n(695515);
let bp = (0, d.Hn)(c.X.MOBILE_NOTIFICATION_DELAY, {
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
    bx = (0, d.zD)(c.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => R.intl.string(R.t["btbS+Z"]),
        useSubtitle: () =>
            R.intl.format(R.t.Q5crhR, { onClick: () => (0, nl.openUserSettings)(c.X.TTS_PLAYBACK_RATE) }),
        useValue: L.on.useSetting,
        setValue: L.on.updateSetting,
    }),
    bT = (0, d.Qx)(c.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.JZxxGx),
        useSubtitle: () => R.intl.string(R.t.HDLtJl),
        useValue: () => (0, h.bG)([aI.A], () => aI.A.getTTSType()),
        setValue: (e) => ay.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: R.intl.string(R.t.B1AGeJ), value: S.aVn.ALL_CHANNELS },
                { name: R.intl.string(R.t.uzZg9e), value: S.aVn.SELECTED_CHANNEL },
                { name: R.intl.string(R.t.DYO5Oi), value: S.aVn.NEVER },
            ];
        },
        usePredicate: () => w.$j,
    }),
    bf = c.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    bI = (0, d.bd)(bf, {
        useTitle: (e) => (e ? R.intl.string(R.t.RyimDk) : R.intl.string(R.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tA(bf, {
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
        buildLayout: () => [bp, bx, bT],
    }),
    b_ = (0, d.zZ)(c.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => R.intl.string(R.t["31DySj"]),
        buildLayout: () => [bI],
    }),
    bN = (0, d.zD)(c.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => R.intl.string(R.t.VH8AIJ),
        useSubtitle: () => R.intl.string(R.t["9K4qwX"]),
        useValue: function () {
            return (0, h.bG)([aI.A], () => !aI.A.getDisableUnreadBadge());
        },
        setValue: (e) => ay.default.setDisableUnreadBadge(!e),
    }),
    bC = (0, d.zZ)(c.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => R.intl.string(R.t.l6w3Vj),
        buildLayout: () => [bN],
    });
var bb = n(840559),
    by = n(997187);
let bv = (0, EX.mj)({
    kind: "user",
    name: "2026-09-update-email-settings-copy-subtext",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var bj = n(723923);
let bO = bj.px.map((e) =>
        (0, d.zD)(`${c.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, h.cf)([by.A], () => by.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, bb.CA)(e.category, t),
        }),
    ),
    bL = (0, d.Tf)(c.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => R.intl.string(R.t.Ra9Pwk),
        useSubtitle: () => R.intl.string(R.t.iYjQ8X),
        useLabel: () => R.intl.string(R.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, h.cf)([by.A], () => by.A.getEmailSettings());
            return bj.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, bb.NI)(),
        useVariant: () => "critical-secondary",
    }),
    bR = (0, d.zZ)(c.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => R.intl.string(R.t["w/qqKK"]),
        useSubtitle: function () {
            let { enabled: e } = bv.useConfig({ location: "Email Settings Category" });
            return e ? R.intl.string(R.t.WViBDk) : void 0;
        },
        initialize: function () {
            let { initialized: e } = by.A.getEmailSettings();
            e || (0, bb.cR)();
        },
        buildLayout: () => [...bO, bL],
    }),
    bD = (0, d.zD)(c.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["/0WCll"]),
        useSubtitle: () => R.intl.string(R.t.wF9ih3),
        useValue: function () {
            return (0, h.bG)([aI.A], () => aI.A.getDesktopType()) !== S.nRU.NEVER;
        },
        setValue: (e) => ay.default.setDesktopType(e ? S.nRU.ALL : S.nRU.NEVER),
    });
var bP = n(832712),
    bG = n(543465),
    bM = n(790782);
let bU = (0, d.zD)(c.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => R.intl.string(R.t["k6m/si"]),
    useSubtitle: () => R.intl.string(R.t.LGynPs),
    useValue: () => (0, h.bG)([bG.Ay], () => bG.Ay.useNewNotifications),
    setValue: function (e) {
        (bP.A.setAccountFlag(Ek.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (AB.w.set("turnedOffNewNotifications", !0),
                tt.default.track(S.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lh.A.getGuildsArray().filter(
                        (e) => bG.Ay.resolveGuildUnreadSetting(e) === bM.e.ONLY_MENTIONS,
                    ).length,
                })));
    },
    usePredicate: () =>
        (0, h.bG)(
            [si.default, bG.Ay],
            () =>
                si.default.getCurrentUser()?.isStaff() ||
                si.default.getCurrentUser()?.isStaffPersonal() ||
                bG.Ay.useNewNotifications,
        ),
});
var bV = n(534654);
let bk = (0, d.zD)(c.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => R.intl.string(R.t.z9h8Ym),
        useSubtitle: () => R.intl.string(R.t.TummoQ),
        useValue: () => (0, h.bG)([aI.A], () => aI.A.screenDowntimeReminder),
        setValue: (e) => ay.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, bV.A)(),
                t = (0, I6.Du)();
            return e && t;
        },
    }),
    bw = (0, d.zD)(c.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => R.intl.string(R.t.onrAy7),
        useSubtitle: () => R.intl.string(R.t["/071J7"]),
        useValue: L.gY.useSetting,
        setValue: (e) => L.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, bV.A)(),
                t = (0, I6.Du)();
            return e && t;
        },
    }),
    bF = (0, d.zD)(c.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.NjOMvh),
        useValue: L.oz.useSetting,
        setValue: function (e) {
            (L.oz.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ek.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                }));
        },
        useSearchTerms: () => [R.intl.string(R.t.hi4dSk)],
    }),
    bB = (0, d.zD)(c.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.sQQgFj),
        useValue: L.NR.useSetting,
        setValue: function (e) {
            (L.NR.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ek.Y.ACCOUNT,
                    friend_online_notifications: e,
                }));
        },
    }),
    bz = (0, d.zD)(c.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.FSNIvs),
        useValue: L.Yh.useSetting,
        setValue: function (e) {
            (L.Yh.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ek.Y.ACCOUNT,
                    go_live_notifications: e,
                }));
        },
    }),
    bY = (0, d.zD)(c.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.xBLMhQ),
        useValue: L.T3.useSetting,
        setValue: function (e) {
            (L.T3.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ek.Y.ACCOUNT,
                    profile_updates_notifications: e,
                }));
        },
    });
var bX = n(815807);
let bH = (0, d.Hn)(c.X.REACTION_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: R.intl.string(R.t["9x/RtT"]), value: eB.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: R.intl.string(R.t.fJAbQd), value: eB.Tz.ONLY_DMS },
            { id: "disabled", label: R.intl.string(R.t["xu+UDU"]), value: eB.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: L.Zp.useSetting,
        setValue: (e) => (0, bX.n4)(e, L.Zp.getSetting()),
    }),
    bK = (0, d.zD)(c.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t["k51K1+"]),
        useValue: L.Qr.useSetting,
        setValue: function (e) {
            (L.Qr.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ek.Y.ACCOUNT,
                    server_trending_notifications: e,
                }));
        },
        usePredicate: () => !1,
    }),
    bW = (0, EX.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bZ = (0, d.zD)(c.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.G8NPz6),
        useValue: L.zS.useSetting,
        setValue: function (e) {
            (L.zS.updateSetting(e),
                tt.default.track(S.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ek.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                }));
        },
        usePredicate: () => bW.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bq = (0, d.FW)(c.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => R.intl.string(R.t.FEVRDV),
        buildLayout: () => [bz, bF, bB, bK, bZ, bY, bH],
    }),
    bQ = (0, d.zD)(c.X.TASK_BAR_FLASHING, {
        useTitle: () => R.intl.string(R.t.xSmFQG),
        useSubtitle: () => R.intl.string(R.t.bd4j4x),
        useValue: () => (0, h.bG)([aI.A], () => aI.A.taskbarFlash),
        setValue: (e) => ay.default.setTaskbarFlash(e),
        usePredicate: () => (0, nm.uF)(),
    }),
    b$ = (0, d.zZ)(c.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => R.intl.string(R.t["/dp6yY"]),
        buildLayout: () => [bD, bQ, bq, bU, bw, bk],
    });
var bJ = n(965957),
    b0 = n(312671),
    b1 = n(235079);
let b2 = (0, d.zD)(c.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = a_.A.useHolidaySoundpack();
        return null == e ? "" : R.intl.format(R.t["E/OyBr"], { soundpack: R.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, h.bG)([b0.A], () => b0.A.getSoundpack()),
            t = a_.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = a_.A.getHolidaySoundpack();
        (ta()(null != t, "predicate should fail if no soundpack is available"), (0, bJ.p)(e ? t : b1.i.CLASSIC));
    },
    usePredicate: a_.A.useIsEligible,
});
var b3 = n(970931);
let b5 = {
        useTitle: () => R.intl.string(R.t.jD1qzM),
        sound: "message1",
        useDisabled: b3.kB,
        useDisabledMessage: () => ((0, b3.kB)() ? R.intl.string(R.t.cIRG0s) : void 0),
    },
    b4 = { useTitle: () => R.intl.string(R.t.XBrJT6), sound: "call_ringing" },
    b6 = (0, d.zD)(c.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => R.intl.string(R.t.TzjwV9),
        useSubtitle: () => R.intl.format(R.t.OOiGCM, { onClick: () => aO("message3") }),
        useValue: () =>
            (0, h.bG)([aI.A], () => aI.A.getNotifyMessagesInSelectedChannel() && !aI.A.getDisableAllSounds()),
        setValue: (e) => ay.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, h.bG)([aI.A], () => aI.A.getDisableAllSounds()),
    }),
    b8 = (0, d.zD)(c.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => R.intl.string(R.t["2ZhCOd"]),
        useSubtitle: () => R.intl.string(R.t.EAKdPr),
        useValue: () => (0, h.bG)([aI.A], () => aI.A.getDisableAllSounds()),
        setValue: (e) => ay.default.toggleDisableAllSounds(e),
    }),
    b7 = (0, d.D1)(c.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                aj();
            };
        },
        buildLayout: () => [aL(b5), b6, aL(b4), b8],
    }),
    b9 = (0, d.AK)(c.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => R.intl.string(R.t["MMy+lm"]),
        useSearchTerms: () => [R.intl.string(R.t["MMy+lm"])],
        destinationKey: c.X.SOUNDS_CATEGORY,
    }),
    ye = (0, d.gN)(c.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [b9] }),
    yt = (0, d.zZ)(c.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => R.intl.string(R.t.LweOYy),
        buildLayout: () => [b2, b7, ye],
    }),
    yn = (0, d.t_)(c.X.NOTIFICATIONS_PANEL, {
        useTitle: () => R.intl.string(R.t.HcoRu0),
        initialize: () => {
            null != bS.A.getAgeGroup() || bS.A.isLoading() || (bS.A.canRefetch() && bh.Ay.initialPageLoad());
        },
        buildLayout: () => [b$, yt, bC, bR, b_],
    }),
    yi = (0, d.i4)(c.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t.HcoRu0),
        icon: bE.BellIcon,
        buildLayout: () => [yn],
    }),
    yl = (0, d.WI)(c.X.USER_SECTION, {
        useTitle: () => R.intl.string(R.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [_E, Nq, bA, yi, _Z],
    });
var ys = n(387758),
    yr = n(271866),
    ya = n(147964),
    yo = n(868511);
let yu = (0, d.zD)(c.X.APPLICATION_TEST_MODE, {
        useTitle: () => R.intl.string(R.t.erOqlh),
        useSubtitle: () => R.intl.string(R.t["52hMnD"]),
        usePredicate: L.Q_.useSetting,
        useValue: () => (0, h.bG)([ya.A], () => null != ya.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, la.openModal)((e) => (0, A.jsx)(yo.A, { ...e })) : yr.cL();
        },
    }),
    yd = (0, d.zD)(c.X.DEVELOPER_MODE, {
        useTitle: () => R.intl.string(R.t.ObIb1Q),
        useSubtitle: () => R.intl.format(R.t["CY6q/Q"], { apiDocsUrl: S.X7G.API_DOCS }),
        useValue: L.Q_.useSetting,
        setValue: L.Q_.updateSetting,
        usePredicate: () => uO.p5,
    }),
    yc = (0, d.zZ)(c.X.DEVELOPER_CATEGORY, { buildLayout: () => [yd, yu] }),
    yg = (0, d.t_)(c.X.DEVELOPER_PANEL, { useTitle: () => R.intl.string(R.t["0BRxRp"]), buildLayout: () => [yc] }),
    ym = (0, d.i4)(c.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: ys.G,
        useTitle: () => R.intl.string(R.t["0BRxRp"]),
        buildLayout: () => [yg],
    });
var yA = n(70688),
    yE = n(830215);
let yh = (0, d.i4)(c.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => R.intl.string(R.t["2jxGer"]),
        icon: yA.DoorExitIcon,
        onClick: () => {
            (0, n$.A)({
                title: R.intl.string(R.t["2jxGer"]),
                subtitle: R.intl.string(R.t.SUnWBB),
                confirmText: R.intl.string(R.t["2jxGer"]),
                onConfirm: () => {
                    yE.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    yS = (0, d.WI)(c.X.UTILITY_SECTION, {
        useTitle: () => R.intl.string(R.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [ym, yh],
    }),
    yp = (0, d.Hr)({ buildLayout: () => [T8, yl, At, a6, pO, EC, yS], analyticsKey: "user_settings" });
