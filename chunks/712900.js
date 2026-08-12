i.d(t, { D: () => bJ });
var n,
    s,
    l,
    r,
    a = i(419954),
    o = i(780964),
    u = i(550640),
    d = i(107384),
    c = i(477900),
    g = i(582128),
    m = i(17928),
    A = i(652215),
    h = i(346055),
    E = i(297264),
    S = i(364522),
    T = i(97808),
    x = i(778712),
    p = i(821609),
    f = i(775602),
    N = i(320095),
    _ = i(963852),
    I = i(763754),
    C = i(20851),
    b = i(95701),
    v = i(486020),
    y = i(885386),
    j = i(375708),
    O = i(827053);
let R = new b.nA({ id: "1337", guild_id: "1337", type: A.rbe.GUILD_TEXT, name: "preview" }),
    D = [
        { status: A.clD.IDLE, discriminator: "2" },
        { status: A.clD.DND, discriminator: "3" },
        { status: A.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, N.rh)({ ...(0, _.Ay)({ channelId: R.id, content: e }), state: A.cmJ.SENT, reactions: t });
}
var P = i(856488);
let G = (0, a.zD)(o.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => j.intl.string(j.t.TZ2hZH),
        useSubtitle: () => j.intl.string(j.t.Q7wgHc),
        useValue: () => y.D_.useSetting(),
        setValue: (e) => y.D_.updateSetting(e),
    }),
    M = (0, a.zD)(o.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => j.intl.string(j.t.XYvMIX),
        useSubtitle: () => j.intl.string(j.t.T0rbtM),
        useValue: y._z.useSetting,
        setValue: y._z.updateSetting,
    });
var U = i(100767),
    V = i(435558),
    k = i.n(V),
    w = i(935399),
    F = i(331322),
    B = i(106236),
    z = i(834730),
    X = i(113494),
    Y = i(782134),
    H = i(54570),
    K = i(8880),
    W = i(75804);
let Z = k().debounce((e) => {
    (0, H.zU)(e);
}, 250);
function q() {
    let [e, t] = g.useState(!1);
    return (
        (0, w.l0)(() => (0, H.pr)()),
        (0, c.jsx)(p.$, {
            text: j.intl.string(j.t.SKNnqq),
            icon: e ? X.E : Y.u,
            size: "sm",
            onClick: function () {
                if (e) {
                    (0, H.pr)(), t(!1);
                    return;
                }
                (0, H.AU)(
                    j.intl.string(j.t.PKaNJL),
                    !0,
                    void 0,
                    function () {
                        return t(!0);
                    },
                    function () {
                        return t(!1);
                    },
                ),
                    t(!0);
            },
        })
    );
}
let Q = (0, a.E2)(o.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [j.intl.string(j.t.lsW5Ev)],
        Component: function () {
            let e = (0, m.bG)([K.A], () => K.A.speechRate);
            return (0, c.jsxs)(F.B, {
                gap: 16,
                children: [
                    (0, c.jsx)(B.A, {
                        label: j.intl.string(j.t.lsW5Ev),
                        description: j.intl.string(j.t.Ci4wMS),
                        markers: W.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: Z,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, c.jsx)(z.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, c.jsx)(z.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: j.intl.string(j.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, c.jsx)(z.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, c.jsx)(q, {}),
                ],
            });
        },
        usePredicate: () => U.$j,
    }),
    J = (0, a.zZ)(o.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => j.intl.string(j.t.XVR0Rb),
        buildLayout: () => [Q, M, G],
    }),
    $ = (0, a.AK)(o.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.aTfeGK),
        destinationKey: o.X.APPEARANCE_PANEL,
    }),
    ee = (0, a.gN)(o.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [$] });
var et = i(955572);
let ei = (0, a.zD)(o.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => j.intl.string(j.t.OCJg5f),
    useSubtitle: () => j.intl.string(j.t.HEO0s3),
    useValue: () => (0, m.bG)([f.Ay], () => f.Ay.desaturateUserColors),
    setValue: () => (0, et.YV)(),
});
var en = i(652525);
let es = (0, a.zD)(o.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => j.intl.string(j.t["+Isihb"]),
        useSubtitle: () => j.intl.string(j.t.nNZ1Tz),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.enableCustomCursor),
        setValue: (e) => (0, et.ts)(e),
        usePredicate: () => (0, en.t)("EnableCustomCursorSetting"),
    }),
    el = (0, a.zD)(o.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => j.intl.string(j.t["S3z+pV"]),
        useSubtitle: () => j.intl.string(j.t["3QuI9+"]),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, et.Gm)(e),
        hasIcon: !0,
    });
var er = i(554146);
let ea = (0, a.zD)(o.X.HIGH_CONTRAST_MODE, {
    useTitle: () => j.intl.string(j.t.aZlePv),
    useSubtitle: () => j.intl.string(j.t["v2qF8+"]),
    useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, et.uh)(e ? f._1.HIGH : f._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: d.Xi.NEW, dismissibleContent: er.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var eo = i(406360),
    eu = i(742023);
let ed = (0, a.Qx)(o.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => j.intl.string(j.t.nemtgW),
        useSubtitle: () => j.intl.string(j.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: d.Xi.BETA }),
        useOptions: function () {
            return g.useMemo(
                () => [
                    { name: j.intl.string(j.t.D5Fma9), desc: j.intl.string(j.t.Qj75ck), value: "no-limit" },
                    { name: j.intl.string(j.t.ldcGIH), desc: j.intl.string(j.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, eo.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, et.FU)(e);
        },
        useValue: function () {
            return (0, m.bG)([eu.Ay], () => eu.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", j.intl.string(j.t["O/Gjvn"])],
    }),
    ec = (0, a.Hn)(o.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => j.intl.string(j.t.nC2XBl),
        useSubtitle: () => j.intl.string(j.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: j.intl.string(j.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: j.intl.string(j.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: j.intl.string(j.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: j.intl.string(j.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.officialMessageStyle),
        setValue: (e) => (0, et.w_)(e),
    }),
    eg = (0, a.Hn)(o.X.ROLE_STYLE, {
        useTitle: () => j.intl.string(j.t.uSOPWm),
        useSubtitle: () => j.intl.string(j.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: j.intl.string(j.t.eDdMzJ), value: "username" },
            { id: "dot", label: j.intl.string(j.t.rdmJp0), value: "dot" },
            { id: "hidden", label: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.roleStyle),
        setValue: (e) => (0, et.IX)(e),
    });
(0, a.Qx)(o.X.ROLE_STYLE, {
    useTitle: () => j.intl.string(j.t.uSOPWm),
    useSubtitle: () => j.intl.string(j.t["86hjzQ"]),
    useOptions: () => [
        { name: j.intl.string(j.t.YEOEi6), value: "username" },
        { name: j.intl.string(j.t.mQaro3), value: "dot" },
        { name: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, m.bG)([f.Ay], () => f.Ay.roleStyle),
    setValue: (e) => (0, et.IX)(e),
});
let em = (0, a.sN)(o.X.SATURATION, {
    useTitle: () => j.intl.string(j.t["5PWWCY"]),
    useSubtitle: () => j.intl.string(j.t.xf5S6P),
    markers: A.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => f.Ay.saturation,
    asValueChanges: (e) => (0, et.HU)(e),
});
var eA = i(964486),
    eh = i(839214),
    eE = i(502229),
    eS = i(975571);
let eT = (0, eh.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    ex = (0, a.zD)(o.X.SYNC_FORCED_COLORS, {
        useTitle: () => j.intl.string(j.t.cguiec),
        useSubtitle: () => j.intl.format(j.t.GwEVE2, { learnMoreLink: eS.A.getArticleURL(A.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, m.bG)([f.Ay], () => f.Ay.syncForcedColors);
            return (
                (0, eA.Ay)(() => {
                    eT.setState({ syncEnabled: f.Ay.syncForcedColors });
                }),
                eT.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = eT.getState();
            if (null != t) {
                clearTimeout(t), eT.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === f.Ay.syncForcedColors) return void eT.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, et.D3)(e), eT.setState({ updateTimeout: null });
            }, 150);
            eT.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, eE.D)(),
    }),
    ep = (0, a.zZ)(o.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.JqvyiY),
        buildLayout: () => [em, ei, ea, es, ex, ed, eg, ec, el, ee],
    });
var ef = i(397438),
    eN = i(355097);
function e_(e) {
    return (0, m.bG)([ef.A], () =>
        (function (e) {
            switch (e) {
                case eN._A.REDUCED_MOTION:
                    return j.intl.format(j.t["1dT9V4"], {});
                case eN._A.REDUCED_MOTION_STICKERS:
                    return j.intl.string(j.t["2ExvRu"]);
                default:
                    return;
            }
        })(ef.A.getAppliedOverrideReasonKey(e)),
    );
}
let eI = (0, a.zD)(o.X.ANIMATE_EMOJIS, {
        useTitle: () => j.intl.string(j.t.iIaOlc),
        useSubtitle: () => e_("animateEmoji"),
        useValue: () => y.Sf.useSetting(),
        setValue: (e) => y.Sf.updateSetting(e),
    }),
    eC = (0, a.zD)(o.X.ANIMATE_GIFS, {
        useTitle: () => j.intl.string(j.t.wqsK7q),
        useSubtitle: () => e_("gifAutoPlay"),
        useValue: () => y.kt.useSetting(),
        setValue: (e) => y.kt.updateSetting(e),
    });
var eb = i(823894);
let ev = (0, a.Qx)(o.X.ANIMATE_STICKERS, {
        useTitle: () => j.intl.string(j.t.sBHIh0),
        useSubtitle: () => e_("animateStickers"),
        useOptions: () => [
            { name: j.intl.string(j.t["Xp+X2U"]), value: eb.BJ.ALWAYS_ANIMATE },
            { name: j.intl.string(j.t.IlLT7e), desc: j.intl.string(j.t.bIW9Tl), value: eb.BJ.ANIMATE_ON_INTERACTION },
            { name: j.intl.string(j.t.IGu8x3), value: eb.BJ.NEVER_ANIMATE },
        ],
        useValue: () => y.S0.useSetting(),
        setValue: (e) => y.S0.updateSetting(e),
    }),
    ey = (0, a.zD)(o.X.REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.b3XBzg),
        useSubtitle: () => j.intl.format(j.t.XqvxJc, { helpdeskArticle: eS.A.getArticleURL(A.MVz.REDUCED_MOTION) }),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
        setValue: (e) => (0, et.qz)(e ? "reduce" : "no-preference"),
    }),
    ej = (0, a.zD)(o.X.SYNC_REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.oL55A6),
        useValue: () => (0, m.bG)([f.Ay], () => "auto" === f.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, et.qz)(e ? "auto" : f.Ay.systemPrefersReducedMotion),
    }),
    eO = (0, a.zZ)(o.X.MOTION_CATEGORY, {
        useTitle: () => j.intl.string(j.t.e3TR1b),
        buildLayout: () => [ey, ej, eC, eI, ev],
    });
var eR = i(688810),
    eD = i(259065),
    eL = i(864386);
let eP = (0, a.zD)(o.X.DISPLAY_NAME_STYLES, {
    useTitle: () => j.intl.string(eL.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eR.Ay)();
        return j.intl.format(eL.default.aEax6P, {
            onClickOpenModal() {
                (0, eD.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, m.bG)([f.Ay], () => f.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, et.Dm)(e),
});
function eG(e) {
    return `${e.toFixed(0)}px`;
}
let eM = (0, a.sN)(o.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => j.intl.string(j.t.rT3Pq5),
        useSubtitle: () => j.intl.string(j.t.LXUhen),
        markers: A.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: A.hH7.FONT_SIZES["0"],
        maxValue: A.hH7.FONT_SIZES[A.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => A.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => f.Ay.fontSize,
        onValueRender: eG,
        onMarkerRender: eG,
        asValueChanges: (e) => (0, et.XS)(e),
    }),
    eU = (0, a.zD)(o.X.UNDERLINE_LINKS, {
        useTitle: () => j.intl.string(j.t.OLZFB8),
        useSubtitle: () => j.intl.string(j.t.DIX3ke),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, et.kI)(e),
    }),
    eV = (0, a.zZ)(o.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["bxh/R7"]),
        buildLayout: () => [eM, eU, eP],
    });
var ek = i(873298);
let ew = (0, a.Qx)(o.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => j.intl.string(j.t["C/5V0A"]),
        useSubtitle: () => j.intl.string(j.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: j.intl.string(j.t["7iegX4"]), value: ek.NS.COMPACT },
            { name: j.intl.string(j.t.bBvAEH), value: ek.NS.DEFAULT },
            { name: j.intl.string(j.t["4cuYHx"]), value: ek.NS.COZY },
        ],
        useValue: () => y.Xi.useSetting(),
        setValue: (e) => {
            e !== ek.NS.UNSET_UI_DENSITY && y.Xi.updateSetting(e);
        },
    }),
    eF = "cozy",
    eB = "compact",
    ez = (0, a.Qx)(o.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => j.intl.string(j.t.nKRoPv),
        useSubtitle: () => j.intl.string(j.t.QntEEG),
        useSearchTerms: () => [j.intl.string(j.t.ZEoGMd)],
        useOptions: () => [
            { name: j.intl.string(j.t.Jqj4cZ), value: eF },
            { name: j.intl.string(j.t["1JNcPS"]), value: eB },
        ],
        useValue: () => (y.hH.useSetting() ? eB : eF),
        setValue: (e) => {
            y.hH.updateSetting(e === eB), (0, et.AC)();
        },
    });
var eX = i(381941);
function eY(e) {
    return `${e.toFixed(0)}px`;
}
let eH = (0, a.sN)(o.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => j.intl.string(j.t.Q6lKkg),
    useSubtitle: () => j.intl.string(j.t.p7eUrb),
    markers: eX.qh,
    stickToMarkers: !0,
    minValue: eX.qh["0"],
    maxValue: eX.qh[eX.qh.length - 1],
    useDefaultValue: () => (y.hH.useSetting() ? eX.y5 : eX.ES),
    useExternalValue: () => (0, m.bG)([f.Ay], () => f.Ay.messageGroupSpacing),
    getInitialValue: () => f.Ay.messageGroupSpacing,
    onValueRender: eY,
    onMarkerRender: eY,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, et.AC)(e);
        }
    },
});
var eK = i(775121),
    eW = i(723702);
let eZ = (0, a.sN)(o.X.APPEARANCE_ZOOM, {
        usePredicate: () => eW.isPlatformEmbedded,
        useTitle: () => j.intl.string(j.t.i19n5L),
        useSubtitle: () => j.intl.format(j.t["x9PK/3"], { modKey: eK.A.modKey }),
        markers: A.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: A.hH7.ZOOM_SCALES["0"],
        maxValue: A.hH7.ZOOM_SCALES[A.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => A.hH7.ZOOM_DEFAULT,
        getInitialValue: () => f.Ay.zoom,
        useExternalValue: () => (0, m.bG)([f.Ay], () => f.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, et.Qp)(e),
        useSearchTerms: () => [j.intl.string(j.t.ip0uSf)],
    }),
    eq = (0, a.zZ)(o.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VKYWk8),
        buildLayout: () => [ew, ez, eH, eZ],
    }),
    eQ = (0, a.t_)(o.X.ACCESSIBILITY_PANEL, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        buildLayout: () => [eV, eq, ep, eO, J],
        decoration: {
            type: d.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = y.hH.useSetting(),
                    t = y.jW.useSetting(),
                    i = g.useMemo(
                        () => [
                            L(
                                j.intl.formatToPlainString(j.t.BknJRT, {}),
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
                            L(j.intl.formatToPlainString(j.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    n = (0, m.bG)([f.Ay], () => f.Ay.messageGroupSpacing);
                return (0, c.jsx)(h.M, {
                    children: (0, c.jsxs)("section", {
                        "aria-label": j.intl.string(j.t.RC22qg),
                        children: [
                            (0, c.jsx)(E.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: O.Vf,
                                children: j.intl.string(j.t.RC22qg),
                            }),
                            (0, c.jsxs)(S.Ip, {
                                className: O.VH,
                                children: [
                                    (0, c.jsx)("ol", {
                                        className: O.DZ,
                                        style: { gap: n },
                                        "aria-label": j.intl.string(j.t.xfjsEV),
                                        children: i.map((t) =>
                                            (0, c.jsx)(
                                                "li",
                                                {
                                                    children: (0, c.jsx)(C.A, {
                                                        message: t,
                                                        channel: R,
                                                        compact: e,
                                                        author: { ...(0, I.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, c.jsxs)("div", {
                                        className: O.Jb,
                                        children: [
                                            (0, c.jsx)("div", {
                                                className: O.HD,
                                                children: D.map((e) => {
                                                    let { status: t, discriminator: i, mobile: n = !1 } = e;
                                                    return (0, c.jsx)(
                                                        T.eu,
                                                        {
                                                            status: t,
                                                            isMobile: n,
                                                            size: x._3.SIZE_32,
                                                            src: v.Ay.getDefaultAvatarURL(void 0, i),
                                                            "aria-label": j.intl.string(j.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, c.jsx)(p.$, {
                                                text: j.intl.string(j.t["2RHHgz"]),
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
    eJ = (0, a.i4)(o.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        icon: u.c,
        useMenu: P.A,
        buildLayout: () => [eQ],
    });
i(321073);
var e$ = i(650809),
    e0 = i(477782),
    e1 = i(562465),
    e2 = i(228366),
    e3 = i(74396),
    e5 = i(93055),
    e4 = i(269880),
    e6 = i(55619),
    e8 = i(351906),
    e7 = i(174459),
    e9 = i(812993),
    te = i(189081);
let tt = (0, a.zD)(o.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, m.bG)([te.A], () => te.A.hasLibraryApplication()),
        useTitle: () => j.intl.string(j.t.fi3UQN),
        useSubtitle: () => j.intl.string(j.t["8mYp37"]),
        useValue: () => !y.l_.useSetting(),
        setValue: (e) => y.l_.updateSetting(!e),
    }),
    ti = (0, a.zZ)(o.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [tt],
    });
var tn = i(284009),
    ts = i.n(tn),
    tl = i(199966),
    tr = i(963935);
function ta(e) {
    let { title: t } = e;
    return t;
}
function to(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function tu(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, c.jsx)(to, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function td(e) {
    return e.type === tr.Z6.LIST;
}
function tc(e, t) {
    let { limit: i = 2, formatter: n = ta } = t ?? {};
    ts()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, tl._)(),
        r = s.get(e) ?? l.get(e);
    ts()(
        null != r && (r.type === tr.Z6.ACCORDION || td(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = td(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return g.useMemo(() => {
        let e = a,
            t = [];
        for (let i of o)
            if ("useTitle" in i && null != i.useTitle) {
                if (e > 0) {
                    e--;
                    continue;
                }
                t.push({ key: i.key, useTitle: i.useTitle });
            }
        if (0 === t.length) return "";
        let s = Math.min(i, 3);
        if (t.length <= s)
            if (1 === t.length)
                return j.intl.format(j.t["3H9tCW"], { settingOneHook: tu({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return j.intl.format(j.t.MWryo6, {
                    settingOneHook: tu({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return j.intl.format(j.t.a00b5G, {
                    settingOneHook: tu({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: tu({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? j.intl.format(j.t.O8vNbS, { settingOneHook: tu({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? j.intl.format(j.t["acXG/W"], {
                    settingOneHook: tu({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: n, index: 1 }),
                })
              : j.intl.format(j.t["5+ldWc"], {
                    settingOneHook: tu({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: tu({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
var tg = i(951260);
let tm = (0, a.zD)(o.X.ENABLE_APPS_BUTTON, {
        useTitle: () => j.intl.string(j.t.ZTH4j4),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, et.n8)({ appsButtonEnabled: e }),
    }),
    tA = {
        useTitle: () => j.intl.string(j.t["I/5LyL"]),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isSubmitButtonEnabled),
        setValue: () => (0, et.Xt)(),
    },
    th = (0, a.zD)(o.X.ENABLE_SEND_BUTTON, tA),
    tE = (0, a.zD)(o.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tA,
        usePredicate: () => !(0, tg.n)("EnableSendButtonOutsideExperiment"),
    }),
    tS = (0, a.zD)(o.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => j.intl.string(j.t.WggFoO),
        useSubtitle: () => j.intl.string(j.t.XpErGj),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, et.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, m.bG)([f.Ay], () => f.Ay.expressionPickerFormat === f.IG.FLEXIBLE),
    }),
    tT = (0, a.zD)(o.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => j.intl.string(j.t.YErWkD),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, et.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, m.bG)([f.Ay], () => f.Ay.expressionPickerFormat === f.IG.FLEXIBLE),
    }),
    tx = (0, a.zD)(o.X.ENABLE_GIF_BUTTON, {
        useTitle: () => j.intl.string(j.t.k7oNEz),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isGifButtonEnabled),
        setValue: (e) => (0, et.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, m.bG)([f.Ay], () => f.Ay.expressionPickerFormat === f.IG.FLEXIBLE),
    }),
    tp = (0, a.zD)(o.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => j.intl.string(j.t.Ar0krj),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, et.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, m.bG)([f.Ay], () => f.Ay.expressionPickerFormat === f.IG.FLEXIBLE),
    }),
    tf = (0, a.Qx)(o.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => j.intl.string(j.t.AxRAWt),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.expressionPickerFormat),
        setValue: (e) => (0, et.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.k86Soy), desc: j.intl.string(j.t.bSGTTZ), value: f.IG.FLEXIBLE },
                { name: j.intl.string(j.t.bjwSOn), desc: j.intl.string(j.t.We36HX), value: f.IG.CONDENSED },
                { name: j.intl.string(j.t.FDIKss), desc: j.intl.string(j.t["rclZL/"]), value: f.IG.HIDDEN },
            ];
        },
    }),
    tN = (0, a.FW)(o.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => j.intl.string(j.t["V9/cNN"]),
        buildLayout: () => [tf, tS, tT, tx, tp],
    }),
    t_ = (0, a.bd)(o.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.IwVGQs) : j.intl.string(j.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tc(o.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tg.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [th, tm, tN],
    });
var tI = i(565645);
let tC = (0, a.zD)(o.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => j.intl.string(j.t["79qal8"]),
        useSubtitle: () =>
            j.intl.format(j.t.GejoQK, { emojiHook: (e, t) => (0, c.jsx)(tI.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: y.j7.useSetting,
        setValue: y.j7.updateSetting,
    }),
    tb = (0, a.zD)(o.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t.c0oFDw),
        useValue: y.BQ.useSetting,
        setValue: y.BQ.updateSetting,
    }),
    tv = (0, a.zD)(o.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.AqGrEI),
        useValue: y.SI.useSetting,
        setValue: (e) => {
            e7.default.track(A.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: A.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                y.SI.updateSetting(e);
        },
    });
var ty = i(793574);
let tj = (0, a.zD)(o.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t["d+It2U"]),
        useValue: y.ML.useSetting,
        setValue: (e) => {
            e7.default.track(A.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: A.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [ty.A.TEXT_AND_IMAGES],
            }),
                y.ML.updateSetting(e);
        },
    }),
    tO = (0, a.zZ)(o.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [tv, tC, tj, tb, tE, t_],
    });
var tR = i(526162),
    tD = i(793943),
    tL = i(792656),
    tP = i(830543),
    tG = i(785007),
    tM = i(806932),
    tU = i(915089),
    tV = i(174197),
    tk = i(202541);
let tw = (0, a.E2)(o.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [j.intl.string(j.t.gnwxvT)],
    Component: function () {
        let e = (0, tU.GV)(),
            { ref: t, ...i } = (0, tG._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, m.bG)([tR.A], () => tR.A.isUpsellPreview);
        return (
            (0, w.Ay)(() => {
                n &&
                    e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tk.e.APP_ICON_UPSELL,
                        location_stack: [ty.A.USER_SETTINGS],
                    });
            }),
            (0, c.jsx)("div", {
                ...i,
                ref: t,
                children: (0, c.jsx)(F.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, c.jsx)(tM.m, { disabled: n, size: tV.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function tF() {
    (0, tD.nf)(tD.HP.APP_ICON), (0, tP.default)();
}
function tB() {
    return (0, c.jsx)(tL.A, {
        subscriptionTier: tk.pe.TIER_2,
        defaultTextOverride: j.intl.string(j.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: A.ZSU.BUTTON_CTA, objectType: A.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let tz = (0, a.zZ)(o.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RPh2ou),
        useSubtitle: () => j.intl.string(j.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, m.bG)([tR.A], () => tR.A.isUpsellPreview);
            return g.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: d.UV.BUTTON,
                        text: j.intl.string(j.t["6acvnZ"]),
                        onClick: tF,
                    }),
                    e && t.push({ id: "upsell-button", type: d.UV.STRONGLY_DISCOURAGED_CUSTOM, button: tB }),
                    { type: d.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [tw],
    }),
    tX = (0, a.AK)(o.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.UDr3Iy),
        useSearchTerms: () => [j.intl.string(j.t.UDr3Iy)],
        destinationKey: o.X.ACCESSIBILITY_PANEL,
    }),
    tY = (0, a.gN)(o.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [tX] });
var tH = i(452027),
    tK = i(243721),
    tW = i(976860),
    tZ = i(16236),
    tq = i(635233),
    tQ = i(551289),
    tJ = i(449817);
let t$ = eS.A.getArticleURL(A.MVz.FAVORITES_GUILD);
function t0() {
    let { analyticsLocations: e } = (0, eR.Ay)(ty.A.USER_SETTINGS_FAVORITES),
        t = g.useCallback(() => {
            (0, tq.mv)("settings_page"), (0, tW.uh)(A.YYv), (0, tP.default)();
        }, []);
    return (0, c.jsx)(eR.f5, {
        value: e,
        children: (0, c.jsx)(tH.D, {
            label: j.intl.string(tJ.default.OT1NK5),
            description: j.intl.format(tJ.default.GR2KOG, { helpCenterLink: t$ }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, c.jsxs)(F.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, c.jsx)(p.$, { variant: "secondary", text: j.intl.string(tJ.default["7WwLnr"]), onClick: t }),
                    (0, c.jsx)(tL.A, {
                        subscriptionTier: tk.pe.TIER_2,
                        defaultTextOverride: j.intl.string(tJ.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let t1 = (0, a.E2)(o.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, e5.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [j.intl.string(tJ.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, e5.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, tQ.dM)();
            return e
                ? (0, c.jsx)(tK.d, {
                      checked: t,
                      description: j.intl.format(tJ.default.GR2KOG, { helpCenterLink: t$ }),
                      onChange: tZ.kG,
                      label: j.intl.string(tJ.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, c.jsx)(t0, {});
        },
    }),
    t2 = (0, a.zD)(o.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => j.intl.string(j.t.U47N1p),
        useValue: y.hD.useSetting,
        setValue: y.hD.updateSetting,
    }),
    t3 = (0, a.zD)(o.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => j.intl.string(j.t.VP11No),
        useValue: y.X6.useSetting,
        setValue: y.X6.updateSetting,
    }),
    t5 = (0, a.FW)(o.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => j.intl.string(j.t["9nyle0"]),
        buildLayout: () => [t2, t3],
    }),
    t4 = (0, a.zD)(o.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => j.intl.string(j.t["5bK9vw"]),
        useValue: y.rs.useSetting,
        setValue: y.rs.updateSetting,
    }),
    t6 = (0, a.zD)(o.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => j.intl.string(j.t["zge/fP"]),
        useValue: y.jW.useSetting,
        setValue: y.jW.updateSetting,
    });
var t8 = i(939249),
    t7 = i(817281),
    t9 = i(766075);
let ie = (0, a.zD)(o.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => j.intl.string(j.t.JgjNG3),
        useSubtitle: () => {
            if (!y.hH.useSetting())
                return j.intl.format(j.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, c.jsx)(
                            t8.D,
                            {
                                tag: "a",
                                onClick: () => (0, t9.openUserSettings)(o.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !y.hH.useSetting(),
        useValue: () => {
            let e = (0, m.bG)([eu.Ay], () => eu.Ay.displayCompactAvatars);
            return !y.hH.useSetting() || e;
        },
        setValue: (e) => {
            t7.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    it = (0, a.Hn)(o.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => j.intl.string(j.t.QgwmVz),
        useOptions: () => [
            { value: A.P6Q.ON_CLICK, id: A.P6Q.ON_CLICK, label: j.intl.string(j.t["KFH/me"]) },
            { value: A.P6Q.ALWAYS, id: A.P6Q.ALWAYS, label: j.intl.string(j.t.Pe1RbL) },
            { value: A.P6Q.IF_MODERATOR, id: A.P6Q.IF_MODERATOR, label: j.intl.string(j.t.K5VTBE) },
        ],
        useValue: y.gs.useSetting,
        setValue: y.gs.updateSetting,
    }),
    ii = (0, a.zD)(o.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => j.intl.string(j.t.AInv5m),
        useValue: y.SY.useSetting,
        setValue: y.SY.updateSetting,
    }),
    is = (0, a.zZ)(o.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.OIgYlQ),
        useSearchTerms: () => [j.intl.string(j.t["/VQax8"])],
        buildLayout: () => [t5, t4, t6, it, ii, ie, t1, tY],
    });
var il = i(753806),
    ir = i(145331);
let ia = (0, a.Qx)(o.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => j.intl.string(j.t.VkoLsy),
        useSearchTerms: () => [j.intl.string(j.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.E9JM4J), value: 0 },
                { name: j.intl.string(j.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!y.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? il.A.cleanUpPrivateChannelSearchState() : il.A.cleanUpSearchState({ type: A.I4_.DMS }),
                (0, ir._k)({
                    prevIsCrossDMSettingEnabled: y.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: ir.vy.USER_SETTINGS,
                }),
                y.Hu.updateSetting(t);
        },
    }),
    io = (0, a.zZ)(o.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5h0QOP"]),
        buildLayout: () => [ia],
    });
var iu = i(574381);
let id = (0, a.zD)(o.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.IxjaoF),
        useValue: function () {
            return (0, m.bG)([e8.A], () => {
                let { autoToggle: e } = e8.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e6.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return iu.Av;
        },
    }),
    ic = (0, a.zD)(o.X.STREAMING_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.TGNg6T),
        useSubtitle: () => j.intl.string(j.t["4nXLnE"]),
        useValue: function () {
            return (0, m.bG)([e8.A], () => {
                let { enabled: e } = e8.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e6.A.update({ enabled: e });
        },
    });
var ig = i(77729),
    im = i(589051),
    iA = i(588857),
    ih = i(999834);
let iE = [],
    iS = (0, a.Hn)(o.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => j.intl.string(j.t.VCDSLW),
        useSearchTerms: () => [j.intl.string(j.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, ih.b_)(),
                t = (0, im.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return g.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(iA.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, m.bG)([e8.A], () => e8.A.getSettings().disabledOverlayWidgets ?? iE);
        },
        setValue: (e) => e6.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    iT = (0, a.zD)(o.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { hidePersonalInformation: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e6.A.update({ hidePersonalInformation: e }),
    }),
    ix = (0, a.zD)(o.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { hideInstantInvites: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e6.A.update({ hideInstantInvites: e }),
    }),
    ip = (0, a.zD)(o.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { disableSounds: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e6.A.update({ disableSounds: e }),
    }),
    iN = (0, a.zD)(o.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { disableNotifications: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e6.A.update({ disableNotifications: e }),
    }),
    i_ = (0, a.zD)(o.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { enableContentProtection: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e6.A.update({ enableContentProtection: e }),
        usePredicate: () => ig.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    iI = (0, a.FW)(o.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.xYhOEh),
        buildLayout: () => [iT, ix, ip, iN, i_, iS],
    }),
    iC = (0, a.zZ)(o.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.S5GfOW),
        buildLayout: () => [ic, id, iI],
    });
var ib = i(147248),
    iv = i(141343),
    iy = i(665267),
    ij = i(414133),
    iO = i(412848);
let iR = (0, a.Hn)(o.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(iO.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: ek.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: ek.tI.PERSONAL },
        ],
        useValue: () => y.zY.useSetting(),
        setValue: y.zY.updateSetting,
        usePredicate: () => (0, ij.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    iD = (0, a.zD)(o.X.SYNC_PROFILE_THEMES, {
        useTitle: () => j.intl.string(j.t.C00w4l),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, et.M1)(),
    });
var iL = i(458024),
    iP = i(284016),
    iG = i(363195);
let iM = (0, a.zD)(o.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => j.intl.string(j.t["/B+kEV"]),
    useSearchTerms: () => [j.intl.string(j.t.Ksh3ik)],
    useValue: function () {
        return (0, m.bG)([iP.A], () => !1 !== iP.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        let e = (0, iL.Ay)("SyncThemeSetting"),
            t = (0, m.bG)([iG.A], () => iG.A.isSameAsDeviceThemeEnabled());
        return e && t;
    },
    setValue: function (e) {
        var t;
        let i = iG.A.theme,
            n = ib.A.gradientPreset?.id ?? null,
            s = y.eh.getSetting()?.customUserThemeSettings != null;
        (t = A.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            e2.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            t7.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var iU = i(393284);
let iV = (0, a.AK)(o.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: o.X.ACCESSIBILITY_PANEL,
    }),
    ik = (0, a.gN)(o.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [iV] }),
    iw = (0, a.zZ)(o.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, m.bG)([f.Ay], () => f.Ay.useForcedColors)
                ? {
                      type: d.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: (0, eE.D)()
                          ? j.intl.format(j.t.Jae48E, {
                                onClick: () => {
                                    (0, t9.openUserSettings)(o.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : j.intl.string(j.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, m.bG)([ib.A, f.Ay], () => f.Ay.useForcedColors || ib.A.isPreview),
                t = (0, iv.V)();
            return e || t
                ? null
                : {
                      type: d.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: d.UV.BUTTON,
                              text: j.intl.string(j.t["E+COuA"]),
                              onClick: iy.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [iU.k, iM, iD, iR, ik],
    }),
    iF = (0, a.t_)(o.X.APPEARANCE_PANEL, {
        initialize: function () {
            e3.A.isFetching() ||
                (e2.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                e1.Bo.get({ url: A.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        e2.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        e2.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        buildLayout: () => [iw, tz, is, tO, io, iC, ti],
    }),
    iB = [
        { badgeType: d.Xi.NEW, dismissibleContent: er.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: er.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, c.jsx)(e9.JI, { text: j.intl.string(j.t.y2b7CA) });
            },
        },
    ],
    iz = (0, a.i4)(o.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        icon: e$.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, e4.A)(),
                s =
                    ((e = y.D_.useSetting()),
                    (t = y.SI.useSetting()),
                    e
                        ? null
                        : (0, c.jsx)(e0.sL, {
                              id: "preview-markdown-toggle",
                              label: j.intl.string(j.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  e7.default.track(A.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: A.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      y.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                l =
                    ((i = (0, m.bG)([e8.A], () => e8.A.enabled, [])),
                    (0, c.jsx)(e0.sL, {
                        id: "streamer-mode-toggle",
                        label: j.intl.string(j.t.p9ZAJZ),
                        action: () => {
                            e6.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return g.useMemo(() => {
                let e = [...n];
                return (
                    null != s &&
                        e.push((0, c.jsx)(e0.rX, { label: j.intl.string(j.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, c.jsx)(e0.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [n, s, l]);
        },
        getDismissibleBadges: () =>
            (0, e5.ad)().isFreemium
                ? iB.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== er.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : iB,
        buildLayout: () => [iF],
    });
var iX = i(37646),
    iY = i(434404);
let iH = (0, a.t_)(o.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [iY.F],
    }),
    iK = (0, a.i4)(o.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: iX.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [iH],
    });
var iW = i(3137),
    iZ = i(661531),
    iq = i(314116),
    iQ = i(270003),
    iJ = i(369606),
    i$ = i(320448),
    i0 = i(604121),
    i1 = i(725951),
    i2 = i(400492),
    i3 = i(669067),
    i5 = i(115063),
    i4 = i(754692),
    i6 = i(927018),
    i8 = i(512599),
    i7 = i(532197),
    i9 = i(403362),
    ne = i(874486),
    nt = i(503698),
    ni = i.n(nt),
    nn = i(989349),
    ns = i.n(nn),
    nl = i(58703),
    nr = i(906688),
    na = i(892208);
function no(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, i6.vM)(t);
    if (null == n) return null;
    let s = null != i,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        g = s ? "text-default" : "text-muted",
        m = ns()(i),
        A = null != o && s,
        h = A ? t8.D : "div";
    return (0, c.jsxs)(h, {
        className: ni()(na.kL, A && na.b),
        onClick: function () {
            A && o();
        },
        children: [
            (0, c.jsx)("div", {
                className: na.zc,
                children: (0, c.jsx)(nr.A, { achievementId: t, size: nr.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, c.jsxs)("div", {
                className: na.VW,
                children: [
                    null != i &&
                        (0, c.jsx)(z.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: na.YR,
                            children: (0, nl.mk)(m),
                        }),
                    (0, c.jsx)(z.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, c.jsx)(z.E, { variant: "text-xs/normal", color: g, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var nu = i(776351);
function nd(e) {
    let { onBackClick: t } = e,
        i = (0, m.bG)([ne.A], () => ne.A.getAllUnlockedAchievements()),
        n = g.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = g.useMemo(
            () =>
                Object.values(i6.l0)
                    .filter(i9.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)(t8.D, {
                onClick: t,
                className: nu.vv,
                children: [
                    (0, c.jsx)(i7.A, { direction: i7.A.Directions.LEFT, className: nu.Kk }),
                    (0, c.jsx)(z.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
            (0, c.jsxs)("div", {
                className: nu.N1,
                children: [
                    (0, c.jsxs)("div", {
                        className: nu.if,
                        children: [
                            (0, c.jsx)(E.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: j.intl.string(j.t["6jI0hd"]),
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: j.intl.string(j.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, c.jsx)("div", {
                        className: nu.nr,
                        children: (0, c.jsx)(iJ.O, {
                            size: "custom",
                            color: iZ.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            n.length > 0 &&
                (0, c.jsx)("div", {
                    className: nu.yF,
                    children: (0, c.jsx)("div", {
                        className: nu.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, c.jsx)(no, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, c.jsxs)("div", {
                    className: nu.yF,
                    children: [
                        (0, c.jsx)("div", {
                            className: nu.if,
                            children: (0, c.jsx)(z.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.GFyMg1),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: nu.Eh,
                            children: s.map((e) => (0, c.jsx)(no, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, c.jsx)("div", { className: nu.yF, children: (0, c.jsx)("div", { className: nu.F3 }) }),
        ],
    });
}
var nc = i(224964),
    ng = i(31408),
    nm = i(381579);
let nA = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    nh = (0, V.range)(0, 11),
    nE = (0, V.range)(0, 2.25, 0.25),
    nS = (0, V.range)(1, 11),
    nT = (0, V.range)(1, 26),
    nx = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function np(e) {
    let { disabled: t, locations: i, settingsLocations: n, onChange: s } = e,
        l = i.map((e) =>
            (0, c.jsx)(
                tK.d,
                {
                    label: e.title,
                    description: e.description,
                    checked: n[e.location],
                    disabled: t,
                    onChange: (t) => s({ ...n, [e.location]: t }),
                },
                e.location,
            ),
        );
    return (0, c.jsx)(iQ.n, { label: j.intl.string(j.t.bWVN1D), children: l });
}
function nf(e) {
    let { children: t } = e;
    return (0, c.jsx)(z.E, { className: nm.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function nN(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        s = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion);
    return (0, c.jsx)(tK.d, {
        label: j.intl.string(j.t.vuiXm9),
        description: j.intl.string(j.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            e || (0, i4._)(i6.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, iq.A)({
                          title: s ? j.intl.string(j.t["FxT+p0"]) : j.intl.string(j.t.TAZ4F9),
                          subtitle: s ? j.intl.string(j.t.gmixrx) : j.intl.string(j.t.jN3t3K),
                          confirmText: j.intl.string(j.t.JFfins),
                          onConfirm: () => n(s ? nA : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function n_(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: i,
                confettiCount: n,
                confettiSize: s,
                confettiEnabledLocations: l,
            },
            updateSettings: r,
        } = e,
        a = !t || !i;
    return (0, c.jsxs)(iQ.n, {
        label: j.intl.string(j.t.mqxwJO),
        children: [
            (0, c.jsx)(tK.d, {
                label: j.intl.string(j.t.s0KCgF),
                description: j.intl.string(j.t.O1Vflg),
                checked: i,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: nm.KF,
                        children: j.intl.string(j.t.vd0D81),
                    }),
                    (0, c.jsx)(nf, { children: j.intl.string(j.t.a18Sug) }),
                    (0, c.jsx)(B.A, {
                        disabled: a,
                        markers: nS,
                        stickToMarkers: !0,
                        minValue: nS[0],
                        maxValue: nS[nS.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: nm.KF,
                        children: j.intl.string(j.t.sPO3ij),
                    }),
                    (0, c.jsx)(nf, { children: j.intl.string(j.t.xoldVn) }),
                    (0, c.jsx)(B.A, {
                        disabled: a,
                        markers: nT,
                        stickToMarkers: !0,
                        minValue: nT[0],
                        maxValue: nT[nT.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, c.jsx)(np, {
                disabled: a,
                locations: [
                    {
                        location: ng.k.CHAT_INPUT,
                        title: j.intl.string(j.t.elTtyz),
                        description: j.intl.string(j.t.HtKfMi),
                    },
                    {
                        location: ng.k.REACTION,
                        title: j.intl.string(j.t.Ik4VIa),
                        description: j.intl.string(j.t.y4rqK0),
                    },
                    {
                        location: ng.k.MEMBER_USER,
                        title: j.intl.string(j.t.ZXBlAn),
                        description: j.intl.string(j.t["m9RD+c"]),
                    },
                    {
                        location: ng.k.CALL_TILE,
                        title: j.intl.string(j.t.V66giQ),
                        description: j.intl.string(j.t.fiHV7u),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function nI(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !i;
    return (0, c.jsxs)(iQ.n, {
        label: j.intl.string(j.t.Xz0ole),
        children: [
            (0, c.jsx)(tK.d, {
                label: j.intl.string(j.t.o3iV7B),
                description: j.intl.string(j.t["31Z8Ee"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, c.jsx)(tK.d, {
                label: j.intl.string(j.t["Ax+IoW"]),
                description: j.intl.string(j.t["9rgQEr"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: nm.KF,
                        children: j.intl.string(j.t.L0oQuh),
                    }),
                    (0, c.jsx)(nf, { children: j.intl.string(j.t["/OOFpL"]) }),
                    (0, c.jsx)(B.A, {
                        disabled: r,
                        markers: nh,
                        stickToMarkers: !0,
                        minValue: nh[0],
                        maxValue: nh[nh.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function nC(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
        a = !t || !i || r;
    return (0, c.jsxs)(iQ.n, {
        label: j.intl.string(j.t.wVS5Sd),
        children: [
            (0, c.jsx)(tK.d, {
                label: j.intl.string(j.t.N004zO),
                description: r ? j.intl.string(j.t.GckHGw) : j.intl.string(j.t.Qq5W3v),
                checked: i && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: nm.KF,
                        children: j.intl.string(j.t.UxnnC4),
                    }),
                    (0, c.jsx)(nf, { children: j.intl.string(j.t.CEOEOb) }),
                    (0, c.jsx)(B.A, {
                        disabled: a,
                        markers: nE,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: nE[0],
                        maxValue: nE[nE.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, i4._)(i6.sn.MORE),
                                l(t, 1);
                        },
                        onMarkerRender: (e) => (e === nE[nE.length - 1] ? j.intl.string(j.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, c.jsx)(np, {
                disabled: a,
                locations: [
                    {
                        location: ng.uD.CHAT_INPUT,
                        title: j.intl.string(j.t.vUcvPP),
                        description: j.intl.string(j.t.y00OrF),
                    },
                    {
                        location: ng.uD.VOICE_USER,
                        title: j.intl.string(j.t.TcRO54),
                        description: j.intl.string(j.t.YJCxVY),
                    },
                    {
                        location: ng.uD.MENTION,
                        title: j.intl.string(j.t.oW4shO),
                        description: j.intl.string(j.t["mqfw/H"]),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => l({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function nb(e) {
    let { updateSettings: t } = e;
    return (0, c.jsx)(iQ.n, {
        label: j.intl.string(j.t.EuXv2q),
        children: (0, c.jsxs)(F.B, {
            gap: 16,
            children: [
                (0, c.jsx)("div", { children: j.intl.string(j.t["1SLnki"]) }),
                (0, c.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: nm.hw,
                    children: (0, c.jsx)(p.$, {
                        variant: "primary",
                        size: "sm",
                        text: j.intl.string(j.t.qz65yY),
                        onClick: function () {
                            t({ enabled: !1, settingsVisible: !1 }), (0, tP.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function nv(e) {
    let { onChangePage: t } = e;
    return (0, c.jsxs)(t8.D, {
        onClick: function () {
            return t(1);
        },
        className: nm.Tq,
        children: [
            (0, c.jsx)("div", {
                className: nm.w1,
                children: (0, c.jsx)(iJ.O, { size: "md", color: iZ.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, c.jsxs)("div", {
                className: nm.qL,
                children: [
                    (0, c.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t["6jI0hd"]),
                    }),
                    (0, c.jsx)(z.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: j.intl.string(j.t.GuUItX),
                    }),
                ],
            }),
            (0, c.jsx)(i$._, { size: "custom", color: "currentColor", width: 16, className: nm.nT }),
        ],
    });
}
function ny() {
    return i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function nj(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, m.cf)([iW.A], () => iW.A.getState()),
        [s, l] = g.useState({ x: 0, y: 0 }),
        r = (0, nc.A)();
    function a(e, t) {
        var l, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === n.enabled &&
                (i(!0),
                (0, i2.Ak)("poggermode_enabled"),
                (0, i5.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
            (0, i8.O9)(e),
            null == t)
        )
            return;
        let A =
            ((l = n.confettiEnabled), (a = e.confettiEnabled), (o = n.enabled), (u = e.enabled), (a ?? l) && (u ?? o));
        0 === t && A && r.fire(s.x, s.y, { settings: e });
        let h =
            ((d = n.screenshakeEnabled),
            (c = e.screenshakeEnabled),
            (g = n.enabled),
            (m = e.enabled),
            (c ?? d) && (m ?? g));
        1 === t && h && (0, i5.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
    }
    function o(e) {
        l({ x: e.clientX, y: e.clientY });
    }
    return (
        g.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, c.jsxs)(F.B, {
            gap: 24,
            children: [
                (0, c.jsx)(nN, { settings: n, updateSettings: a }),
                (0, c.jsx)(nv, { onChangePage: t }),
                (0, c.jsx)(nI, { settings: n, updateSettings: a }),
                (0, c.jsx)(nC, { settings: n, updateSettings: a }),
                (0, c.jsx)(n_, { settings: n, updateSettings: a }),
                (0, c.jsx)(nb, { updateSettings: a }),
            ],
        })
    );
}
function nO(e) {
    return 0 === e ? i1.f.LEFT : i1.f.RIGHT;
}
let nR = (0, a.E2)(o.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = g.useState(0),
                [i, n] = g.useState(nO(e)),
                [s, l] = g.useState(!1),
                r = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
                a = s && !r;
            return (
                g.useEffect(() => {
                    let t = setTimeout(() => {
                        n(nO(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                g.useEffect(() => {
                    (0, i3._)(nx[e]);
                }, [e]),
                g.useEffect(() => {
                    Math.random() > 0.99 && (0, i4._)(i6.sn.VISITOR_100);
                }, []),
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)(i1.A, {
                            className: nm.l3,
                            step: e,
                            direction: i,
                            children: (function (e, t, i) {
                                function n(e) {
                                    return () => {
                                        t(e);
                                    };
                                }
                                switch (e) {
                                    case 0:
                                        return (0, c.jsx)(nj, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, c.jsx)(nd, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, c.jsx)("div", {
                            className: a ? nm.Sr : nm.IP,
                            children: (0, c.jsx)(i0.a, {
                                className: nm.gT,
                                importData: ny,
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
            j.intl.string(j.t.AtCukI),
            j.intl.string(j.t.mqxwJO),
            j.intl.string(j.t.wVS5Sd),
            j.intl.string(j.t.Xz0ole),
            j.intl.string(j.t["Ax+IoW"]),
            j.intl.string(j.t["6jI0hd"]),
            j.intl.string(j.t.s0KCgF),
        ],
    }),
    nD = (0, a.zZ)(o.X.POGGERMODE_CATEGORY, { buildLayout: () => [nR] });
var nL = i(231570);
let nP = (0, a.t_)(o.X.POGGERMODE_PANEL, { useTitle: () => j.intl.string(j.t.AtCukI), buildLayout: () => [nD] }),
    nG = (0, a.i4)(o.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AtCukI),
        icon: () => (0, c.jsx)("img", { alt: "", src: i(724405), className: nL.$ }),
        usePredicate: () => (0, m.bG)([iW.A], () => iW.A.settingsVisible),
        buildLayout: () => [nP],
    });
var nM = i(307301),
    nU = i(410767),
    nV = i(683071),
    nk = i(97260),
    nw = i(695366),
    nF = i(812729),
    nB = i.n(nF),
    nz = i(587895),
    nX = i(429913),
    nY = i(616356),
    nH = i(952818);
function nK(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function nW() {
    let e = (0, m.bG)([nY.A], () => nY.A.getStreamerActiveStreamMetadata()),
        t = (0, m.bG)(
            [nH.Ay],
            () => {
                let e = nH.Ay.getVisibleGame();
                return null != e ? nH.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            nB(),
        ),
        [i] = (0, nX.A)([nK(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: i ?? void 0 };
}
var nZ = i(769015),
    nq = i(749983),
    nQ = i(935671),
    nJ = i(868886);
function n$(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, c.jsx)("div", {
              className: nJ.zc,
              children: (0, c.jsx)(nw.E, { size: "sm", color: iZ.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, c.jsxs)("div", {
              className: nJ.nt,
              children: [
                  (0, c.jsx)(nZ.A, { game: i, pid: t.pid, size: nZ.M.MEDIUM }),
                  (0, c.jsx)("div", {
                      className: nJ.Am,
                      children: (0, c.jsx)(nw.E, { size: "sm", color: iZ.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function n0(e) {
    let t = (0, m.bG)([nq.Ay], () => nq.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = nW();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, nQ.NP)(),
        l = s && null != i && t === A.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function n1(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = n0(i);
    return n
        ? (0, c.jsxs)("div", {
              className: ni()(nJ.kL, t),
              children: [
                  (0, c.jsx)(n$, { game: s, application: l }),
                  (0, c.jsxs)("div", {
                      className: nJ.FS,
                      children: [
                          (0, c.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === i
                                      ? j.intl.string(j.t.vxfv7v)
                                      : null != s
                                        ? j.intl.string(j.t.fAYU2G)
                                        : j.intl.string(j.t["9V4X/c"]),
                          }),
                          (0, c.jsx)(z.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: j.intl.format(j.t["/y6htt"], {
                                  helpCenterLink: eS.A.getArticleURL(A.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, c.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: function () {
                          (0, nQ.sL)(i + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var n2 = i(404778),
    n3 = i(691885),
    n5 = i(408278),
    n4 = i(241326),
    n6 = i(866665),
    n8 = i(140735),
    n7 = i(489718),
    n9 = i(635242),
    se = i(350535),
    st = i(189213),
    si = i(192308),
    sn = i(95477),
    ss = i(320989),
    sl = i(978263);
let sr = [];
var sa = i(235986),
    so = i(820785),
    su = i(734057),
    sd = i(808728),
    sc = i(71393),
    sg = i(967198),
    sm = i(926140),
    sA = i(387722);
function sh() {}
let sE = [sm.rD.VOICE_CHANNEL];
function sS(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function sT() {
    return (0, c.jsx)("div", {
        className: sA.i1,
        children: (0, c.jsx)(z.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sA.GN,
            children: j.intl.string(j.t.zHjCd1),
        }),
    });
}
function sx(e) {
    let { keybind: t, className: i } = e,
        n = g.useRef(t);
    g.useEffect(() => {
        n.current = t;
    });
    let [s, l] = g.useState(t.params?.channelId ?? void 0),
        r = g.useCallback(() => {
            (0, si.openModalLazy)(
                async () => (e) =>
                    (0, c.jsx)(sp, {
                        ...e,
                        onSelect: (e) => {
                            l(e), nk.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, c.jsx)("div", {
        className: ni()(sA.a8, i),
        children: (0, c.jsx)(tH.D, {
            label: j.intl.string(j.t.q4JpM8),
            children: (0, c.jsxs)(sa.A, {
                align: sa.A.Align.STRETCH,
                children: [
                    (0, c.jsx)("div", { className: sA.$X, children: (0, c.jsx)(sf, { channelId: s }) }),
                    (0, c.jsx)(sa.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, c.jsx)(p.$, { variant: "primary", text: j.intl.string(j.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function sp(e) {
    let t,
        i,
        { transitionState: n, onClose: s, onSelect: l } = e,
        r = g.useId(),
        a = g.useRef(null),
        {
            query: o,
            updateQuery: u,
            queryResults: d,
        } = (function (e) {
            let {
                    visible: t,
                    autocompleterResultTypes: i,
                    autocompleterOptions: n,
                    autocompleterBeforeCreateSearchContext: s,
                } = e,
                [l, r] = g.useState(""),
                [a, o] = g.useState(sr),
                u = g.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(sr) : o(e);
                }, []);
            g.useEffect(
                () =>
                    ss.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = g.useState(() => new sl.A(u, i, void 0, n));
            return (
                g.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: g.useCallback(
                        (e) => {
                            r(e), d.search(e);
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: sE, autocompleterBeforeCreateSearchContext: sS }),
        A =
            ((t = "" !== o),
            (i = (0, m.yK)([sd.Ay, su.A, sg.A], () => {
                let e = sg.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of sd.Ay.getVocalChannelIds(e)) {
                    let e = su.A.getChannel(t);
                    null != e && i.push(e);
                }
                return i;
            }, [t])),
            t ? null : i),
        { focusedIndex: h, setFocusedIndex: E } = (function (e) {
            let [t, i] = g.useState(0),
                n = g.useRef(e);
            return (
                e !== n.current && 0 !== t && i(0),
                g.useEffect(() => {
                    n.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: i }
            );
        })(o);
    g.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, h, !0) || e.scrollToIndex({ section: 0, row: h });
    }, [h]);
    let S = null != A ? A.length : d.length,
        T = (() => {
            if (null != A) return A[h]?.id;
            let e = d[h];
            if (e?.type === sm.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        x =
            S > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: j.intl.string(j.t["+N3fW7"]),
                      ref: a,
                      sections: [S],
                      renderRow: function (e) {
                          let { row: t } = e,
                              i = (() => {
                                  if (null != A) return A[t];
                                  let e = d[t];
                                  if (e?.type === sm.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? su.A.getChannel(i.parent_id) : void 0,
                              r = sc.A.getGuild(i.guild_id);
                          return (0, c.jsx)(
                              so.c3,
                              {
                                  id: i.id,
                                  channel: i,
                                  category: n,
                                  focused: h === t,
                                  onMouseEnter: () => E(t),
                                  onClick: () => {
                                      l(i.id), s();
                                  },
                                  onFocus: () => E(t),
                                  children:
                                      null != r ? (0, c.jsx)("div", { className: sA.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, c.jsx)(sT, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, c.jsx)(st.Modal, {
        transitionState: n,
        onClose: s,
        title: j.intl.string(j.t.Dm8O4e),
        subtitle: j.intl.string(j.t.q4JpM8),
        actions: void 0,
        input: (0, c.jsx)(sn.k, {
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
                                if (null != A) return A[h];
                                let e = d[h];
                                if (e?.type === sm.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? l(void 0) : l(e.id), s();
                            break;
                        }
                        case "arrowup":
                            0 === h ? E(S - 1) : E(h - 1);
                            break;
                        case "arrowdown":
                            h >= S - 1 ? E(0) : E(h + 1);
                    }
            },
            placeholder: j.intl.string(j.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": S > 0,
            "aria-activedescendant": S > 0 && null != T ? T : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: x,
    });
}
function sf(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, m.cf)([su.A, sc.A], () => {
            let e = null != t ? su.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? su.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? sc.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, c.jsx)(z.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sA.GN,
              children: j.intl.string(j.t["/fYIK7"]),
          })
        : (0, c.jsx)(so.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: sh,
              onFocus: sh,
              onMouseEnter: sh,
              focused: !1,
              children: null != s ? (0, c.jsx)("div", { className: sA.J5, children: s.name }) : null,
          });
}
var sN = i(650583),
    s_ = i(492064);
function sI(e) {
    let { keybind: t } = e,
        i = se.dI(t.shortcut);
    return eK.A.hasBind(i)
        ? (0, c.jsx)("div", {
              className: s_.$e,
              children: (0, c.jsx)(nV.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : sN.Yy.has(i)
          ? (0, c.jsx)("div", {
                className: s_.$e,
                children: (0, c.jsx)(nV.w, {
                    type: "warning",
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: eS.A.getArticleURL(A.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function sC(e) {
    let { keybind: t } = e;
    return t.action === A.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, c.jsx)(sx, { keybind: t, className: s_._M }) : null;
}
let sb = g.memo(function (e) {
    let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
        s = g.useCallback((e) => nk.A.setKeybind({ ...t, action: e }), [t]),
        l = g.useCallback((e) => nk.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = g.useCallback(() => nk.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = g.useCallback(() => nk.A.deleteKeybind(t.id), [t.id]),
        o = g.useId(),
        u = g.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
    return (0, c.jsxs)("div", {
        className: s_.f_,
        children: [
            (0, c.jsx)(sI, { keybind: t }),
            (0, c.jsx)("div", {
                className: s_.XI,
                children: (0, c.jsx)(n3.l, {
                    selectionMode: "single",
                    label: j.intl.string(j.t.XH5b12),
                    value: t.action,
                    options: n,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, c.jsx)("div", {
                className: s_.LE,
                children: (0, c.jsx)(tH.D, {
                    label: j.intl.string(j.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, c.jsx)(n9.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, c.jsxs)("div", {
                className: s_.ne,
                children: [
                    !t.managed &&
                        (0, c.jsx)(n5.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: n4.u,
                            "aria-label": j.intl.string(j.t.qEHmmB),
                        }),
                    (0, c.jsx)(n6.m, {
                        text: j.intl.string(t.enabled ? j.t.pNYGbx : j.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, c.jsxs)("div", {
                            children: [
                                (0, c.jsx)(n8.A, {
                                    id: o,
                                    children: j.intl.format(t.enabled ? j.t["myr/Y0"] : j.t.lYhtPO, { actionName: u }),
                                }),
                                (0, c.jsx)(n7.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, c.jsx)(z.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: s_.h_,
                children: i[t.action],
            }),
            (0, c.jsx)(sC, { keybind: t }),
        ],
    });
});
var sv = i(549406),
    sy = i(734066),
    sj = i(880144),
    sO = i(614455),
    sR = i(532624),
    sD = i(487866);
let sL = function () {
        let e,
            t,
            i,
            n,
            s,
            l,
            {
                customizableKeybinds: r,
                keybindDescriptions: a,
                keybindActionTypes: o,
            } = ((e = (0, m.bG)([sR.Ay], () => sR.Ay.getState())),
            (t = (0, m.bG)([nq.Ay], () => (0, sj.A)(nq.Ay))),
            (i = (0, m.bG)([sO.A], () => sO.A.isSupported)),
            (n = (0, sy.sw)()),
            (s = (0, sy.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: i, enableScreenshotKeybind: n, allowSoundboard: s } = e;
                    return k()(t)
                        .reject(
                            (e) =>
                                e.managed &&
                                ![
                                    A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                    A.hCu.SAVE_CLIP,
                                    A.hCu.SAVE_SCREENSHOT,
                                ].includes(e.action),
                        )
                        .reject((e) => !i && (e.action === A.hCu.SAVE_CLIP || e.action === A.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !n && e.action === A.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !s && (e.action === A.hCu.SOUNDBOARD || e.action === A.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: n,
                    enableScreenshotKeybind: s,
                    allowSoundboard: (l = (0, eW.isWindows)()),
                }),
                keybindActionTypes: (function (e) {
                    let {
                            overlaySupported: t,
                            canGoLive: i,
                            allowSoundboard: n,
                            enableClips: s,
                            enableScreenshotKeybind: l,
                        } = e,
                        r = [
                            { id: "unassigned", value: A.hCu.UNASSIGNED, label: j.intl.string(j.t["0Uh579"]) },
                            { id: "push-to-talk", value: A.hCu.PUSH_TO_TALK, label: j.intl.string(j.t.Y5lgTP) },
                            {
                                id: "push-to-talk-priority",
                                value: A.hCu.PUSH_TO_TALK_PRIORITY,
                                label: j.intl.string(j.t.DkSwJ2),
                            },
                            { id: "push-to-mute", value: A.hCu.PUSH_TO_MUTE, label: j.intl.string(j.t.hSCRqd) },
                            { id: "vad-priority", value: A.hCu.VAD_PRIORITY, label: j.intl.string(j.t["49d6Nd"]) },
                            { id: "toggle-mute", value: A.hCu.TOGGLE_MUTE, label: j.intl.string(j.t.PlkYKD) },
                            { id: "toggle-deafen", value: A.hCu.TOGGLE_DEAFEN, label: j.intl.string(j.t.NvGq1K) },
                            {
                                id: "toggle-voice-mode",
                                value: A.hCu.TOGGLE_VOICE_MODE,
                                label: j.intl.string(j.t.Wa5H9S),
                            },
                            {
                                id: "toggle-streamer-mode",
                                value: A.hCu.TOGGLE_STREAMER_MODE,
                                label: j.intl.string(j.t.BK0Ncc),
                            },
                            { id: "toggle-camera", value: A.hCu.TOGGLE_CAMERA, label: j.intl.string(j.t.hf8JVT) },
                            {
                                id: "toggle-voice-channel-chat",
                                value: A.hCu.TOGGLE_VOICE_CHANNEL_CHAT,
                                label: j.intl.string(j.t.YeqEjm),
                            },
                        ];
                    return (
                        t &&
                            (r.push({
                                id: "toggle-overlay-input-lock",
                                value: A.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                                label: j.intl.string(j.t.VsAZcC),
                            }),
                            r.push({
                                id: "activate-overlay-region-text-widget",
                                value: A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                label: j.intl.string(j.t.hurHWo),
                            })),
                        i &&
                            ((0, eW.isWindows)() || nq.Ay.getUseSystemScreensharePicker()) &&
                            r.push({
                                id: "toggle-go-live-streaming",
                                value: A.hCu.TOGGLE_GO_LIVE_STREAMING,
                                label: j.intl.string(j.t.ybdjJD),
                            }),
                        (0, eW.isDesktop)() &&
                            (r.push(
                                { id: "navigate-back", value: A.hCu.NAVIGATE_BACK, label: j.intl.string(j.t.gRSaOa) },
                                {
                                    id: "navigate-forward",
                                    value: A.hCu.NAVIGATE_FORWARD,
                                    label: j.intl.string(j.t.zOXpjU),
                                },
                                {
                                    id: "switch-to-voice-channel",
                                    value: A.hCu.SWITCH_TO_VOICE_CHANNEL,
                                    label: j.intl.string(j.t.ty7Lxy),
                                },
                                {
                                    id: "disconnect-from-voice-channel",
                                    value: A.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                                    label: j.intl.string(j.t.CV7mT7),
                                },
                            ),
                            n &&
                                r.push(
                                    { id: "soundboard", value: A.hCu.SOUNDBOARD, label: j.intl.string(j.t.yPH4xm) },
                                    {
                                        id: "soundboard-hold",
                                        value: A.hCu.SOUNDBOARD_HOLD,
                                        label: j.intl.string(j.t["1xFbP/"]),
                                    },
                                ),
                            s &&
                                (r.push({ id: "save-clip", value: A.hCu.SAVE_CLIP, label: j.intl.string(j.t.U4URzP) }),
                                l &&
                                    r.push({
                                        id: "save-screenshot",
                                        value: A.hCu.SAVE_SCREENSHOT,
                                        label: j.intl.string(j.t["+WloFH"]),
                                    }))),
                        r
                    );
                })({
                    overlaySupported: i,
                    canGoLive: t,
                    allowSoundboard: l,
                    enableClips: n,
                    enableScreenshotKeybind: s,
                }),
                keybindDescriptions: (function (e) {
                    let { overlaySupported: t, canGoLive: i, enableClips: n, enableScreenshotKeybind: s } = e,
                        l = {
                            [A.hCu.UNASSIGNED]: j.intl.string(j.t.rvlNLv),
                            [A.hCu.PUSH_TO_MUTE]: j.intl.string(j.t.xtESim),
                            [A.hCu.PUSH_TO_TALK]: j.intl.string(j.t.wTcBSy),
                            [A.hCu.PUSH_TO_TALK_PRIORITY]: j.intl.string(j.t.FhHvWH),
                            [A.hCu.TOGGLE_MUTE]: j.intl.string(j.t.X2fbUm),
                            [A.hCu.TOGGLE_DEAFEN]: j.intl.string(j.t.MjREZV),
                            [A.hCu.TOGGLE_VOICE_MODE]: j.intl.string(j.t.snm5YW),
                            [A.hCu.TOGGLE_STREAMER_MODE]: j.intl.string(j.t.YszLLx),
                            [A.hCu.VAD_PRIORITY]: j.intl.string(j.t.rSe8IZ),
                            [A.hCu.TOGGLE_CAMERA]: j.intl.string(j.t.v1JBtL),
                            [A.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: j.intl.string(j.t.desfB4),
                        };
                    return (
                        t && (l[A.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
                        i && (0, eW.isWindows)() && (l[A.hCu.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
                        (0, eW.isDesktop)() &&
                            ((l[A.hCu.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                            (l[A.hCu.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                            (l[A.hCu.SOUNDBOARD] = (0, eW.isWindows)()
                                ? j.intl.string(j.t["5wJefL"])
                                : j.intl.string(j.t.gzjsSP)),
                            (l[A.hCu.SOUNDBOARD_HOLD] = (0, eW.isWindows)()
                                ? j.intl.string(j.t.RRkZc9)
                                : j.intl.string(j.t.laNlTl)),
                            n &&
                                ((l[A.hCu.SAVE_CLIP] = j.intl.string(j.t.z3Wbam)),
                                s && (l[A.hCu.SAVE_SCREENSHOT] = j.intl.string(j.t.m0zd57)))),
                        l
                    );
                })({ overlaySupported: i, canGoLive: t, enableClips: n, enableScreenshotKeybind: s }),
            });
        return 0 === r.length
            ? (0, c.jsx)(z.E, { variant: "text-sm/normal", color: "text-subtle", children: j.intl.string(j.t.vyYgWp) })
            : (0, c.jsx)("div", {
                  className: sD.A,
                  children: r.map((e, t) =>
                      (0, c.jsxs)(
                          g.Fragment,
                          {
                              children: [
                                  (0, c.jsx)(sb, { keybind: e, keybindDescriptions: a, keybindActionTypes: o }),
                                  t < r.length - 1 ? (0, c.jsx)(n2.c, { className: sD.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    sP = (0, a.E2)(o.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return iu.Av
                ? (0, c.jsx)(sL, {})
                : (0, c.jsx)(nV.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: A.X7G.DOWNLOAD }),
                  });
        },
    });
var sG = i(475358),
    sM = i(28647),
    sU = i(760677);
function sV(e) {
    let { children: t } = e;
    return t([sv.Q_.MESSAGE, sv.Q_.NAVIGATION, sv.Q_.DND, sv.Q_.CHAT, sv.Q_.VOICE_AND_VIDEO, sv.Q_.MISCELLANEOUS]);
}
function sk(e) {
    let { showHeader: t = !0 } = e,
        i = k()((0, sv.Bx)())
            .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, c.jsxs)(F.B, {
        gap: 48,
        children: [
            (0, c.jsx)(iQ.n, {
                label: t ? j.intl.string(j.t.Lz5KHI) : void 0,
                children: (0, c.jsx)("div", {
                    className: sU.jh,
                    children: (0, c.jsxs)("div", {
                        className: sU.yZ,
                        children: [
                            (0, c.jsx)(z.E, { variant: "text-md/normal", children: j.intl.string(j.t.sMWLBj) }),
                            (0, c.jsx)("div", {
                                className: sU.DM,
                                children: (0, c.jsx)(sG.e, { shortcut: sM.z.binds["0"], className: sU.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, c.jsx)(sV, {
                children: (e) =>
                    (0, c.jsx)(c.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, sv.Gm)(e),
                                s = (0, sv.zF)(e),
                                l = i[e];
                            return (0, c.jsx)(
                                iQ.n,
                                {
                                    label: n,
                                    description: s,
                                    children: (0, c.jsx)("div", {
                                        className: sU.jh,
                                        children: l.map((e, t) =>
                                            (0, c.jsxs)(
                                                g.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, c.jsx)(n2.c, {}),
                                                        (0, c.jsxs)("div", {
                                                            className: sU.yZ,
                                                            children: [
                                                                (0, c.jsx)(z.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, c.jsx)("div", {
                                                                    className: sU.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, c.jsx)(
                                                                            sG.e,
                                                                            { shortcut: e, className: sU.LE },
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
let sw = (0, a.E2)(o.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.Lz5KHI)],
    Component: () => (0, c.jsx)(sk, { showHeader: !1 }),
});
var sF = i(19575),
    sB = i(546385);
let sz = (0, a.E2)(o.X.HARDWARE_ACCELERATION, {
    usePredicate: () => iu.Av && !(0, iu.cX)(),
    useSearchTerms: () => [j.intl.string(j.t["/HIxyY"]), j.intl.string(j.t.B0hqpb)],
    Component: function () {
        let [e] = g.useState(() => sF.Ay.getEnableHardwareAcceleration()),
            t = j.intl.string(j.t["/HIxyY"]),
            i = j.intl.string(j.t.B0hqpb);
        return (0, c.jsxs)(F.B, {
            children: [
                (0, c.jsx)(tK.d, { label: t, description: i, checked: e, onChange: sX }),
                !e && (0, c.jsx)(sB.A, { look: sB.k.WARNING, children: j.intl.string(j.t.j7S6IX) }),
            ],
        });
    },
});
function sX(e) {
    let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
    (0, iq.A)({
        title: j.intl.string(j.t.aqpAvn),
        subtitle: t,
        confirmText: j.intl.string(j.t.vT7ckk),
        onConfirm: () => {
            sF.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sY = (0, eh.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function sH() {
    let e = await sF.Ay.getOpenOnStart(),
        t = await sF.Ay.getSetting("START_MINIMIZED", !1),
        i = await sF.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    sY.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let sK = (0, a.zD)(o.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => j.intl.string(j.t["3BeZti"]),
        usePredicate: () => iu.Av && !(0, iu.cX)(),
        useValue: () => sY.useState((e) => e.openOnStartup),
        setValue: function (e) {
            sY.setState({ openOnStartup: e }), sF.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            sF.Ay.getOpenOnStart().then((e) => sY.setState({ openOnStartup: e }));
        },
    }),
    sW = (0, a.zD)(o.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => j.intl.string(j.t.dJ5MUh),
        useSubtitle: () => j.intl.string(j.t.nQavHr),
        usePredicate: () => iu.Av && !(0, iu.cX)(),
        useValue: () => sY.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            sY.setState({ minimizeToTray: e }), sF.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            sF.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => sY.setState({ minimizeToTray: e }));
        },
    }),
    sZ = (0, a.zD)(o.X.OS_START_MINIMIZED, {
        useTitle: () => j.intl.string(j.t.GfBL83),
        useSubtitle: () => j.intl.string(j.t.XGyhhc),
        usePredicate: () => (0, iu.uF)(),
        useValue: () => sY.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            sY.setState({ startMinimized: e }), sF.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !sY.useState((e) => e.openOnStartup),
        initialize: () => {
            sF.Ay.getSetting("START_MINIMIZED", !1).then((e) => sY.setState({ startMinimized: e }));
        },
    });
var sq = i(314647);
let sQ = new Set(["failure", "unknown"]),
    sJ = (0, a.E2)(o.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [j.intl.string(j.t.roHq80)],
        Component: function () {
            let [e, t] = g.useState(!1),
                [i, n] = g.useState(() => (0, nQ.TC)()),
                s = (0, m.bG)([nH.Ay], () => nH.Ay.getSystemServiceStatus("input-service")),
                l = g.useCallback(async () => {
                    t(!0),
                        i ? await (0, nQ.z8)("windows-settings") : await (0, nQ.sL)("windows-settings"),
                        t(!1),
                        n((0, nQ.TC)());
                }, [i]);
            return (0, c.jsxs)("div", {
                className: sq.q,
                children: [
                    (0, c.jsxs)("div", {
                        className: sq.L,
                        children: [
                            (0, c.jsxs)(F.B, {
                                direction: "horizontal",
                                children: [
                                    (0, c.jsx)(z.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: j.intl.string(j.t.roHq80),
                                    }),
                                    i &&
                                        (0, c.jsxs)(c.Fragment, {
                                            children: [
                                                (0, c.jsx)(z.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, c.jsx)(z.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === s.state
                                                            ? "text-feedback-positive"
                                                            : sQ.has(s.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: (function (e) {
                                                        switch (e.state) {
                                                            case "unknown":
                                                                return j.intl.string(j.t["KW+nqT"]);
                                                            case "disabled":
                                                                return j.intl.string(j.t["Q/wAF7"]);
                                                            case "disconnected":
                                                                return j.intl.string(j.t.Xvs9IM);
                                                            case "initializing":
                                                                return j.intl.string(j.t.h4qz8W);
                                                            case "connecting":
                                                                return j.intl.string(j.t.fSu9XF);
                                                            case "handshaking":
                                                                return j.intl.string(j.t["00aYLJ"]);
                                                            case "running":
                                                                return j.intl.string(j.t["54TB7Z"]);
                                                            case "waiting-for-retry":
                                                                return j.intl.string(j.t["0FONwi"]);
                                                            case "failure":
                                                                return j.intl.string(j.t.Ic0nkd);
                                                            default:
                                                                (0, i9.xb)(e.state);
                                                        }
                                                    })(s),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: j.intl.format(j.t["8CAL+D"], {
                                    helpCenterLink: eS.A.getArticleURL(A.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, c.jsx)(p.$, {
                        variant: i ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: l,
                        text: i ? j.intl.string(j.t.pAwbdL) : j.intl.string(j.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: nQ.XQ,
    });
function s$() {
    e2.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var s0 = i(287809);
let s1 = (0, a.Tf)(o.X.DISCORD_STATS_POPOUT, {
        useTitle: () => "Discord Stats",
        useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
        useLabel: () => "Open",
        usePredicate: () => (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.isStaff() ?? !1),
        onClick: () => {
            s$();
        },
    }),
    s2 = (0, a.zZ)(o.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [s1],
    }),
    s3 = (0, a.zZ)(o.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [sK, sZ, sW, sz],
        usePredicate: () => iu.Av && ((0, iu.uF)() || (0, iu.j9)()),
        initialize: () => {
            sH();
        },
    }),
    s5 = (0, a.zZ)(o.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [sP],
        initialize: () => (nk.A.enableAll(!1), () => nk.A.enableAll(!0)),
        useInlineNotice: function () {
            return iu.Av
                ? {
                      type: d.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, c.jsxs)(F.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, c.jsx)(nV.w, { type: "info", children: j.intl.string(j.t["5pkmHa"]) }),
                                  (0, c.jsx)(n1, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            iu.Av
                ? {
                      type: d.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: d.UV.BUTTON,
                              text: j.intl.string(j.t.zk6Xbs),
                              variant: "secondary",
                              icon: nM.j,
                              onClick: () => nk.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    s4 = (0, a.zZ)(o.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Lz5KHI),
        buildLayout: () => [sw],
    }),
    s6 = (0, a.zZ)(o.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => iu.Av && ((0, iu.uF)() || (0, iu.j9)()),
        buildLayout: () => [sJ],
    }),
    s8 = (0, a.t_)(o.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [s3, s5, s4, s6, s2],
    }),
    s7 = (0, a.i4)(o.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: nU.F,
        buildLayout: () => [s8],
    });
var s9 = i(831544),
    le = i(922795),
    lt = i(212245),
    li = i(329551),
    ln = i(285918),
    ls = i(413339),
    ll = i(952572),
    lr = i(382003);
let la = (0, a.E2)(o.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.lZTUPs)],
        usePredicate: ll.A,
        Component: function () {
            let e = (0, lt.p)(),
                t = g.useRef(!1),
                i = (0, m.bG)([nq.Ay], () => nq.Ay.getVideoDeviceId()),
                [n, s] = g.useState((0, li.i)(s0.default.getCurrentUser())),
                l = g.useRef(n);
            return (
                g.useEffect(
                    () => () => {
                        t.current && (0, ln._C)(l.current);
                    },
                    [],
                ),
                (0, c.jsx)(lr.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: function (i) {
                        (t.current = !0), (l.current = i), s(i), (0, ls.gB)(i, { location: e.location }).catch(A.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    lo = (0, a.zD)(o.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: y.bm.useSetting,
        setValue: (e) => {
            y.bm.updateSetting(e), e7.default.track(A.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var lu = i(625841),
    ld = i(74848),
    lc = i(204050);
let lg = (0, eh.D)(() => ({ previewEnabled: !1 }));
var lm = i(731854);
let lA = (0, a.E2)(o.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.FsQ3OR)],
    Component: function () {
        let e = (0, m.bG)([nq.Ay], () => nq.Ay.isVideoAvailable()),
            { id: t } = (0, ld.x5)(lm.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, eR.Ay)();
        return (0, c.jsx)(lu.U, {
            label: j.intl.string(j.t.FsQ3OR),
            deviceType: lm.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, lc.p)()
                ? j.intl.format(j.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          lg.setState({ previewEnabled: !1 }),
                              window.open((0, lc.i)(t)),
                              e7.default.track(A.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var lh = i(745317),
    lE = i(514956);
let lS = (0, a.E2)(o.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [j.intl.string(j.t.JIf4v7)],
        Component: function () {
            let e = nq.Ay.getCameraComponent(),
                t = (0, m.bG)([nq.Ay], () => nq.Ay.getVideoDeviceId()),
                i = lg.useField("previewEnabled"),
                n = (0, m.bG)([nq.Ay], () => nq.Ay.isVideoAvailable());
            return ((0, eA.l0)(() => {
                lg.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, c.jsx)("div", {
                      className: lE.T9,
                      children: (0, c.jsxs)("div", {
                          className: lE.Xi,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: lE.UI,
                                  children: [
                                      (0, c.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                                      (0, c.jsx)(lh.kE, {}),
                                  ],
                              }),
                              (0, c.jsx)(lh.eK, {}),
                          ],
                      }),
                  })
                : (0, c.jsx)("div", {
                      className: lE.T9,
                      children: (0, c.jsx)(n6.m, {
                          text: n ? null : j.intl.string(j.t["8jSzSe"]),
                          children: (0, c.jsx)(p.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.JIf4v7),
                              onClick: () => lg.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    lT = (0, a.zZ)(o.X.CAMERA_CATEGORY, {
        useTitle: () => j.intl.string(j.t.uje3P9),
        usePredicate: () => (0, m.bG)([nq.Ay], () => nq.Ay.supports(lm.O5.VIDEO)),
        buildLayout: () => [lS, lo, lA, la],
    });
var lx = i(827343);
let lp = (0, a.zD)(o.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => j.intl.string(j.t.qFphsa),
        useSubtitle: () => j.intl.string(j.t.cQfwyY),
        usePredicate: function () {
            return (0, iu.j9)();
        },
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            lx.A.setOpenH264Enabled(e),
                (0, iq.A)({
                    title: j.intl.string(j.t["9jf31O"]),
                    subtitle: j.intl.string(j.t["J2wg+X"]),
                    confirmText: j.intl.string(j.t.BddRzS),
                    onConfirm: () => ig.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    lf = (0, a.zD)(o.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => j.intl.string(j.t["r6K+TL"]),
        useSubtitle: () => j.intl.string(j.t["xl9+I6"]),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getAecDump());
        },
        setValue: lx.A.setAecDump,
        usePredicate: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.isAecDumpSupported());
        },
    });
var lN = i(139033),
    l_ = i(862482),
    lI = i(640238),
    lC = i(825484),
    lb = i(77138),
    lv = i(487329),
    ly = i(353835);
let lj = (0, eh.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function lO() {
    let e = await ig.A.fileManager.getLogPath();
    ig.A.fileManager.showItemInFolder(e);
}
function lR(e) {
    (0, iq.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => lx.A.setDebugLogging(e),
    });
}
async function lD(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await nq.Ay.getMediaEngine().writeAudioDebugState(),
            await ly.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, lb.a)(A.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, lN.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = n ?? j.intl.string(j.t.VzHcSm)),
            (i = (0, lv.B1)(lv.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: i })),
            (0, si.openModal)((i) =>
                (0, c.jsx)(lI.a, {
                    header: e,
                    confirmButtonColor: l_.$n.Colors.BRAND,
                    confirmText: j.intl.string(j.t.BddRzS),
                    ...i,
                    children: (0, c.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, c.jsx)(z.E, { variant: "text-md/normal", children: t }),
                            (0, c.jsx)(z.E, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: s,
                            }),
                        ],
                    }),
                }),
            );
    } finally {
        i?.();
    }
}
async function lL() {
    await lD({
        onUploadStart: () => lj.setState({ isUploading: !0 }),
        onUploadFinish: () => lj.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let lP = (0, a.E2)(o.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, m.bG)([nq.Ay], () => nq.Ay.supports(lm.O5.DEBUG_LOGGING));
        return iu.Av && e && null != ig.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, m.bG)([nq.Ay], () => nq.Ay.getDebugLogging()),
            t = lj.useField("isUploading"),
            i = lj.useField("isDisabled"),
            n = g.useId();
        return (0, c.jsxs)("fieldset", {
            children: [
                (0, c.jsx)(n8.A, { tag: "legend", id: n, children: j.intl.string(j.t["FjN+et"]) }),
                (0, c.jsxs)(F.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, c.jsx)(tK.d, {
                            label: j.intl.string(j.t["726JHL"]),
                            description: j.intl.string(j.t["/7ak9Q"]),
                            checked: e,
                            onChange: lR,
                        }),
                        (0, c.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, c.jsxs)(lC.e, {
                                children: [
                                    (0, c.jsx)(p.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: lL,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, c.jsx)(p.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: lO,
                                        "aria-label": j.intl.string(j.t["L/hFOe"]),
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
var lG = i(233545),
    lM = i(412780);
function lU() {
    return (0, m.bG)([s0.default, nq.Ay], () => {
        let e = s0.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === sF.Ay.releaseChannel || "development" === sF.Ay.releaseChannel,
            n = nq.Ay.supports(lm.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let lV = (0, a.zD)(o.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.U4FgFK),
        useSubtitle: () => j.intl.string(j.t.Lm72RU),
        useValue: function () {
            return (0, m.bG)([lM.Ay], () => lM.Ay.shouldRecordNextConnection());
        },
        setValue: lG.Et,
        usePredicate: lU,
    }),
    lk = (0, a.Tf)(o.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.nJnOHO),
        useLabel: () => j.intl.string(j.t["3xjX0U"]),
        onClick: lG.YW,
        usePredicate: lU,
    });
var lw = i(926919),
    lF = i(111162),
    lB = i(855302);
let lz = (0, a.zD)(o.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => j.intl.string(j.t["0CEP6e"]),
        useSubtitle: () => j.intl.string(j.t["kBXuW+"]),
        useValue: function () {
            return (0, m.bG)([lF.default], () => lF.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = lF.default.isStreamInfoOverlayEnabled;
            (0, lB.A)("stream_info_overlay_enabled", e, t), (0, lw.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return y.Q_.useSetting();
        },
    }),
    lX = (0, a.bd)(o.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t["/B4I8H"]) : j.intl.string(j.t.BTlsWH)),
        useCollapsedSubtitle: () => j.intl.string(j.t.la1Ys4),
        buildLayout: () => [lz, lf, lV, lk, lP],
    });
function lY(e, t, i) {
    (0, iq.A)({ title: e, subtitle: t, confirmText: j.intl.string(j.t.BddRzS), onConfirm: i });
}
let lH = (0, a.Tf)(o.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => j.intl.string(j.t.SXfv1v),
        useSubtitle: () => j.intl.string(j.t["buA5/q"]),
        useLabel: () => j.intl.string(j.t.yBZMsQ),
        onClick: function () {
            lY(j.intl.string(j.t["4iKQ/3"]), j.intl.string(j.t.sQ42iT), lx.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    lK = (0, a.zZ)(o.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.UDAU9K),
        buildLayout: () => [lp, lX, lH],
    });
var lW = i(347481),
    lZ = i(852712);
let lq = (0, a.zD)(o.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            lx.A.setAutomaticGainControl(e, { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, m.bG)([nq.Ay, lW.A], () => {
                let e = nq.Ay.getInputDeviceId();
                return lW.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.isAutomaticGainControlSupported() && nq.Ay.isInputProfileCustom());
        },
    }),
    lQ = (0, a.sN)(o.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => j.intl.string(j.t.AlybXj),
        setValue: (e) =>
            lx.A.setAttenuation(e, nq.Ay.getAttenuateWhileSpeakingSelf(), nq.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => nq.Ay.getAttenuation(),
    }),
    lJ = (0, a.zD)(o.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, m.bG)([nq.Ay], () => nq.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => lx.A.setAttenuation(nq.Ay.getAttenuation(), e, nq.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    l$ = (0, a.zD)(o.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, m.bG)([nq.Ay], () => nq.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => lx.A.setAttenuation(nq.Ay.getAttenuation(), nq.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    l0 = (0, a.FW)(o.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, m.bG)([nq.Ay], () => nq.Ay.supports(lm.O5.ATTENUATION)),
        buildLayout: () => [lQ, lJ, l$],
    });
var l1 = i(801644);
let l2 = (0, a.zD)(o.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.pZ0vr4),
        useSubtitle: () => j.intl.string(j.t.tVbzoZ),
        useValue: function () {
            return (0, m.bG)([eu.Ay], () => !eu.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, lB.A)("hardware_mute_silence_alert_enabled", e, !eu.Ay.disableHardwareMuteSilenceAlert),
                t7.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = l1.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    l3 = (0, a.zD)(o.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.DFPXIG),
        useSubtitle: () => j.intl.string(j.t["UyRX+C"]),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            lx.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.showBypassSystemInputProcessing() && nq.Ay.isInputProfileCustom());
        },
    }),
    l5 = (0, a.zD)(o.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.jrWHD3),
        useSubtitle: () => j.intl.string(j.t.YCCMkJ),
        useValue: function () {
            return (0, m.bG)([eu.Ay], () => !eu.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, lB.A)("switch_channel_warning_enabled", e, !eu.Ay.disableVoiceChannelChangeAlert),
                t7.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    l4 = (0, a.zD)(o.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.BbESsg),
        useSubtitle: () => j.intl.string(j.t.LoOB1F),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => {
                let { vadUseKrisp: e } = nq.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = nq.Ay.getMode();
            lx.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, m.bG)(
                [nq.Ay],
                () => nq.Ay.getMode() !== A.TBI.VOICE_ACTIVITY || !nq.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.isAdvancedVoiceActivitySupported() && nq.Ay.isInputProfileCustom());
        },
    }),
    l6 = (0, a.Hn)(o.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => j.intl.string(j.t.wVBHr0),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            lY(j.intl.string(j.t.uY7AcQ), j.intl.string(j.t.gBqik6), () => lx.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, m.cf)([nq.Ay], () => ({
                legacyAudioSubsystemSupported: nq.Ay.supports(lm.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: nq.Ay.supports(lm.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: nq.Ay.supports(lm.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return g.useMemo(() => {
                let n;
                return (
                    (n = [{ id: lm.rB.STANDARD, value: lm.rB.STANDARD, label: j.intl.string(j.t.dqb2JZ) }]),
                    e && n.push({ id: lm.rB.LEGACY, value: lm.rB.LEGACY, label: j.intl.string(j.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: lm.rB.EXPERIMENTAL, value: lm.rB.EXPERIMENTAL, label: j.intl.string(j.t.liQmtr) }),
                    i && n.push({ id: lm.rB.AUTOMATIC, value: lm.rB.AUTOMATIC, label: j.intl.string(j.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    l8 = (0, a.zD)(o.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => j.intl.string(j.t.uancuJ),
        useSubtitle: () => j.intl.string(j.t.I1Eoqq),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getQoS());
        },
        setValue: function (e) {
            lx.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.supports(lm.O5.QOS));
        },
    }),
    l7 = (0, a.zD)(o.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => j.intl.string(j.t["4rsOPQ"]),
        useSubtitle: () => j.intl.string(j.t.jtiiCw),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            lx.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eW.isPlatformEmbedded;
        },
    }),
    l9 = (0, a.bd)(o.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.KHsSWK) : j.intl.string(j.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tc(o.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, m.bG)([nq.Ay], () => nq.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [lq, l4, l3, l7, l2, l5, l0, l6, l8],
    }),
    re = (0, a.zD)(o.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            lx.A.setEchoCancellation(e, { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, m.bG)([nq.Ay, lW.A], () => {
                let e = nq.Ay.getInputDeviceId();
                return lW.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.isInputProfileCustom());
        },
    });
var rt = i(459838),
    ri = i(451988),
    rn = i(934246),
    rs = i(300839);
let rl = (0, tU.Ld)();
function rr(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, c.jsx)("div", {
        role: "meter",
        className: ni()(rn.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, c.jsx)("div", { className: ni()(rn.Jx, rn.NU, { [rn.zY]: t && !r, [rn.r9]: r }) }),
    });
}
function ra(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, m.cf)([nq.Ay], () => ({
            threshold: nq.Ay.getModeOptions().threshold,
            autoThreshold: nq.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, m.bG)([nq.Ay], () => nq.Ay.getMode());
    return (0, c.jsx)("section", {
        className: ni()(rn.Mo, rn.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, c.jsx)(B.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void lx.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: iZ.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: iZ.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rl,
            disabled: l,
            children: (0, c.jsxs)("div", {
                className: ni()(rn.NU, rn.TL, rn.Jx, rs.bar),
                children: [
                    (0, c.jsx)("div", { className: ni()(rn.GS, rn.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, c.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let ro = (0, a.E2)(o.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [j.intl.string(j.t["sqUm+k"]), j.intl.string(j.t.I1Zuq0), j.intl.string(j.t.nuFtHH)],
    usePredicate: () => (0, m.bG)([nq.Ay], () => nq.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, m.cf)([nq.Ay], () => ({
                autoThreshold: nq.Ay.getModeOptions().autoThreshold,
                disabled: nq.Ay.getMode() !== lm.TB.VOICE_ACTIVITY,
            })),
            i = g.useCallback((e) => {
                let t = nq.Ay.getMode(),
                    { threshold: i } = nq.Ay.getModeOptions();
                lx.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, m.bG)([nq.Ay], () => nq.Ay.supports(lm.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = g.useState(-100),
                    [i, n] = g.useState(!1);
                function s(e, i) {
                    t(e), n((i & lm.ME.VOICE) === lm.ME.VOICE);
                }
                return (
                    g.useEffect(() => {
                        let e = new ri.Ep();
                        return (
                            e.start(1e3, () => {
                                nq.Ay.getMediaEngine().on(rt.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                nq.Ay.getMediaEngine().removeListener(rt.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, m.bG)([nq.Ay], () => nq.Ay.isEnabled()),
            a = g.useMemo(
                () =>
                    !r &&
                    (0, c.jsx)("div", {
                        className: rn.B4,
                        children: (0, c.jsx)(nV.w, {
                            type: "warning",
                            children: j.intl.format(j.t["O13I+O"], { onEnableClick: () => lx.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = g.useMemo(() => (e ? j.intl.string(j.t.JsbzjA) : j.intl.string(j.t.MLmyMY)), [e]),
            u = g.useId(),
            d = g.useId();
        return n
            ? (0, c.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, c.jsx)(n8.A, { tag: "legend", id: u, children: j.intl.string(j.t.GByLar) }),
                      (0, c.jsx)(n8.A, { id: d, children: o }),
                      (0, c.jsxs)(F.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, c.jsx)(tK.d, {
                                  disabled: t,
                                  label: j.intl.string(j.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: i,
                              }),
                              e
                                  ? (0, c.jsx)(rr, {
                                        isSpeaking: l,
                                        className: rn.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, c.jsx)(ra, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, c.jsxs)(F.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, c.jsx)(tH.D, {
                          label: j.intl.string(j.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, c.jsx)(rr, {
                                        isSpeaking: l,
                                        className: rn.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, c.jsx)(ra, {
                                        volume: s,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    }),
                      }),
                      a,
                  ],
              });
    },
});
var ru = i(366010);
let rd = i(993830),
    rc = i(413142),
    rg = { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO };
function rm() {
    let e = (0, m.bG)([iG.A], () => (0, ru.q)(iG.A.theme));
    return (0, c.jsx)("img", { src: e ? rd : rc, width: 48, height: 32, alt: "" });
}
let rA = (0, a.E2)(o.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.t8Qhib), j.intl.string(j.t.hmfkCi)],
    usePredicate: function () {
        return (0, m.bG)([nq.Ay], () => nq.Ay.isInputProfileCustom() && nq.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = g.useCallback((e) => {
                lx.A.setNoiseCancellation("KRISP" === e, rg), lx.A.setNoiseSuppression("STANDARD" === e, rg);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, m.cf)([nq.Ay], () => ({
                noiseCancellation: nq.Ay.getNoiseCancellation(),
                noiseSuppression: nq.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: nq.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: nq.Ay.isNoiseCancellationSupported(),
            })),
            l = g.useMemo(() => {
                let e = [];
                return (
                    s && e.push({ id: "krisp", label: j.intl.string(j.t.rdoNzt), value: "KRISP" }),
                    n && e.push({ id: "standard", label: j.intl.string(j.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: j.intl.string(j.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [s, n]),
            r = s
                ? j.intl.format(j.t["1q5aTp"], { helpArticle: eS.A.getArticleURL(A.MVz.NOISE_SUPPRESSION) })
                : j.intl.string(j.t.OWKjw5);
        return (0, c.jsxs)(F.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, c.jsx)(n3.l, {
                    label: j.intl.string(j.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, c.jsx)(rm, {}),
            ],
        });
    },
});
var rh = i(934729),
    rE = i(621380);
let rS = !iu.Av;
function rT() {
    return (0, m.bG)([nq.Ay], () => nq.Ay.getMode() === lm.TB.PUSH_TO_TALK);
}
let rx = (0, a.zD)(o.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return iu.Av ? j.intl.string(j.t.tG4Np5) : j.intl.string(j.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, m.bG)([nq.Ay], () => nq.Ay.getMode());
        return g.useMemo(() => {
            if (!iu.Av && e === lm.TB.PUSH_TO_TALK)
                return j.intl.format(j.t["VHI4+Y"], { onDownloadClick: () => (0, rh._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, m.bG)([nq.Ay], () => nq.Ay.getActiveInputProfile() !== rE.m.STUDIO);
    },
    useValue: function () {
        return (0, m.bG)([nq.Ay], () => nq.Ay.getMode() === lm.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? lm.TB.PUSH_TO_TALK : lm.TB.VOICE_ACTIVITY),
            (n = [ty.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lm.TB.PUSH_TO_TALK &&
                rS &&
                (0, si.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("74558"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, c.jsx)(e, {
                            title: j.intl.string(j.t.Kdt0Gb),
                            confirmText: j.intl.string(j.t["1WjMbC"]),
                            cancelText: j.intl.string(j.t.BddRzS),
                            onConfirm: () => (0, rh._)("PTT Limited Modal"),
                            body: j.intl.string(j.t.NIozvt),
                            ...t,
                        });
                }),
            lx.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
});
var rp = i(297932);
let rf = (0, a.E2)(o.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        usePredicate: rT,
        Component: function () {
            let e = (0, m.bG)([nq.Ay], () => {
                    let { shortcut: e } = nq.Ay.getModeOptions();
                    return e;
                }),
                t = j.intl.format(j.t.HVvn5T, {
                    onClick: () => (0, t9.openUserSettings)(o.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, c.jsx)("div", {
                    className: rp.e,
                    children: (0, c.jsx)(n9.A, {
                        defaultValue: e,
                        onChange: (e) => lx.A.setMode(A.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    rN = (0, a.sN)(o.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            lx.A.setMode(A.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: A.IjB,
        getInitialValue: function () {
            let { delay: e } = nq.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: rT,
    });
var r_ = i(957658),
    rI = i(329139);
let rC = (0, a.zD)(o.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => j.intl.string(rI.default.LGDPhA),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            lx.A.setSpatialAudio(e, [ty.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return (0, r_.A)("VoiceSettings");
        },
    }),
    rb = (0, a.Qx)(o.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => j.intl.string(j.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, lZ._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH), j.intl.string(j.t.VZPR0R), j.intl.string(j.t.cjPbpT)],
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getActiveInputProfile() ?? rE.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [ty.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lx.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, lZ.d)({ location: "InputProfileCategory" });
            return [
                { value: rE.m.VOICE_ISOLATION, name: j.intl.string(j.t.cjPbpT), desc: j.intl.string(j.t.CzhvnE) },
                { value: rE.m.STUDIO, name: j.intl.string(j.t.VZPR0R), desc: j.intl.string(j.t.ZaJksS) },
                { value: rE.m.CUSTOM, name: j.intl.string(j.t["N/PQjv"]), desc: j.intl.string(j.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    rv = (0, a.zZ)(o.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, m.bG)([lW.A, nq.Ay], () => {
                let e = nq.Ay.getInputDeviceId();
                return (
                    (lW.A.hasEchoCancellation(e) || lW.A.hasNoiseSuppression(e) || lW.A.hasAutomaticGainControl(e)) &&
                    nq.Ay.isInputProfileCustom()
                );
            });
            return g.useMemo(() => {
                if (e) return { type: d.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [rb, ro, rA, re, rC, rx, rf, rN, l9],
    });
var ry = i(403581),
    rj = i(512950),
    rO = i(983851),
    rR = i(687021),
    rD = i(128450),
    rL = i(796774),
    rP = i(209932),
    rG = i(813564),
    rM = i(984813),
    rU = i(922016),
    rV = i(305866),
    rk = i(22231),
    rw = i(158045),
    rF = i(792348),
    rB = i(674168),
    rz = i(484036),
    rX = i(805945),
    rY = i(199300);
function rH(e) {
    let { onSelect: t } = e,
        [i, n] = g.useState(!1),
        s = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
        l = rw.Ay.canUseCustomCallSounds(s),
        r = g.useRef(null);
    function a(e) {
        l && (n(!1), t?.(e));
    }
    return (0, c.jsx)(rU.Y, {
        targetElementRef: r,
        shouldShow: i,
        position: "left",
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, c.jsx)(rV.l, {
                children: (0, c.jsx)(rz.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, c.jsx)(rB.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, c.jsx)(rX.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: j.intl.string(j.t.uOe0Az),
                children: (0, c.jsx)(rk.R, { size: "md", color: "currentColor", className: rY.Wo }),
            }),
    });
}
function rK(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, rF.A)(t, null),
        n =
            0 === (0, rG.wH)()
                ? j.intl.string(j.t.OASXjt)
                : j.intl.formatToPlainString(j.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, c.jsx)(rX.dT, {
        onClick: i,
        text: n,
        children: (0, c.jsx)(rO.H, { size: "md", color: "currentColor", className: rY.wg }),
    });
}
function rW(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, c.jsxs)("div", {
        className: rY.D6,
        children: [
            (0, c.jsxs)("div", {
                className: rY.kL,
                children: [
                    a && (0, c.jsx)(tI.A, { emojiId: l, emojiName: r, className: rY.Zg }),
                    (0, c.jsx)(z.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: rY.dj,
                        children:
                            null == t
                                ? j.intl.string(j.t.PoWNfe)
                                : i
                                  ? j.intl.format(j.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, c.jsx)(z.E, {
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
                        ? (0, c.jsx)(rK, { sound: t })
                        : (0, c.jsx)(rO.H, { size: "md", color: "currentColor", className: rY.Gk }),
                ],
            }),
            (0, c.jsxs)("div", {
                className: rY.kL,
                children: [
                    (0, c.jsx)(rH, { onSelect: n }),
                    s &&
                        !i &&
                        (0, c.jsx)(rX.dT, {
                            onClick: () => n(null),
                            text: j.intl.string(j.t.jmtcGA),
                            children: (0, c.jsx)(n4.u, {
                                size: "md",
                                color: iZ.A.unsafe_rawColors.RED_400.css,
                                className: rY.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var rZ = i(617617);
i(980504);
var rq = i(907895);
function rQ(e) {
    return (0, m.bG)([rP.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return rP.A.getSound("0" === t ? "0" : t, i);
    });
}
function rJ(e) {
    let { guildId: t } = e,
        i = (0, m.bG)([rZ.A], () => rZ.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = rQ(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, c.jsxs)("div", {
        className: rq.Io,
        children: [
            r
                ? (0, c.jsx)(tI.A, { emojiId: s, emojiName: l, className: rq.nW })
                : (0, c.jsx)(rO.H, { size: "md", color: "currentColor", className: rq.nW }),
            (0, c.jsx)(z.E, { className: rq.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let r$ = (0, a.E2)(o.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eR.Ay)(),
            [t, i] = g.useState("0"),
            n = (0, rM.mz)(t),
            s = rQ(n),
            l = n?.type === rM.PP.GLOBAL,
            r = (0, m.bG)([rP.A], () => rP.A.hasFetchedAllSounds()) && null != n && null == s;
        g.useEffect(() => {
            r && (0, rG.ND)({ location: e });
        }, [r, e]),
            g.useEffect(() => {
                (0, rL.E7)();
            }, []);
        let a = g.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, c.jsx)(rJ, { guildId: e.value }) : null;
        }, []);
        return (0, c.jsxs)(iQ.n, {
            label: j.intl.string(j.t.nzUc3B),
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: eS.A.getArticleURL(A.MVz.SOUNDBOARD) }),
            children: [
                (0, c.jsx)(rR.A, {
                    guildId: t,
                    className: rq.Dt,
                    globalOption: { label: j.intl.string(j.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, c.jsxs)(rD.A, {
                    title: j.intl.format(j.t.I2TsYN, {
                        nitroWheelHook: () => (0, c.jsx)(ry.t, { size: "md", color: "currentColor", className: rq.ax }),
                    }),
                    children: [
                        (0, c.jsx)(rW, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, rG.Dv)(t, e) : (0, rG.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, c.jsx)(rj.p, {
                                className: rq.lm,
                                messageType: rj.Y.WARNING,
                                children: j.intl.string(j.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var r0 = i(824744);
let r1 = (0, a.sN)(o.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: eS.A.getArticleURL(A.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [ty.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, r0.w)(e);
        (0, rL.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, rG.wH)();
        return (0, r0.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var r2 = i(864145);
let r3 = (0, a.sN)(o.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t["2JbvKw"]),
        useSubtitle: () => j.intl.string(j.t.INenzY),
        setValue: function (e) {
            let t = (0, r0.w)(e);
            y.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = y.HO.getSetting();
            return (0, r0.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, r2.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    r5 = (0, a.zZ)(o.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [r1, r3, r$],
    });
var r4 = i(803224),
    r6 = i(552122);
let r8 = (0, a.E2)(o.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [j.intl.string(j.t.fgSHf8)],
        usePredicate: () => null != r6.A.useHolidaySoundpack(),
        Component: () =>
            (0, c.jsx)(z.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: j.intl.format(j.t.Eup6Wv, {
                    onClick: () => (0, t9.openUserSettings)(o.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    r7 = (0, a.AK)(o.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.eyGEE4),
        useSearchTerms: () => [j.intl.string(j.t.eyGEE4)],
        destinationKey: o.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    r9 = (0, a.gN)(o.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [r7] });
var ae = i(264686);
let at = (0, eh.D)(() => ({ currentPlayingSound: null }));
function ai() {
    let e = at.getField("currentPlayingSound");
    e?.stop(), at.setState({ currentPlayingSound: null });
}
function an(e) {
    let t = at.getField("currentPlayingSound");
    t?.stop();
    let i = (0, i2.Ak)(e);
    at.setState({ currentPlayingSound: i });
}
function as(e) {
    return (0, a.zD)(`${o.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => an(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, m.bG)([r4.A], () => r4.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = r4.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), ae.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, m.bG)([r4.A], () => r4.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let al = [
        { useTitle: () => j.intl.string(j.t.hK51Yg), sound: "deafen" },
        { useTitle: () => j.intl.string(j.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => j.intl.string(j.t.w4m945), sound: "mute" },
        { useTitle: () => j.intl.string(j.t.YqAjXy), sound: "unmute" },
        { useTitle: () => j.intl.string(j.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => j.intl.string(j.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => j.intl.string(j.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => j.intl.string(j.t.x98vQq),
            useSearchTerms: () => [j.intl.string(j.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => j.intl.string(j.t["1HjRqC"]),
            useSearchTerms: () => [j.intl.string(j.t.Q8gkVL)],
            sound: "ptt_stop",
        },
        { useTitle: () => j.intl.string(j.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => j.intl.string(j.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => j.intl.string(j.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => j.intl.string(j.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => j.intl.string(j.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => j.intl.string(j.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => j.intl.string(j.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => j.intl.string(j.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => j.intl.string(j.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => j.intl.string(j.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => j.intl.string(j.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => j.intl.string(j.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => j.intl.string(j.t.CP3DC3), sound: "reconnect" },
    ],
    ar = (0, a.D1)(o.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? j.intl.formatToPlainString(j.t["0JYT98"], { count: t })
                : j.intl.formatToPlainString(j.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tc(o.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                ai();
            };
        },
        buildLayout: () => al.map((e) => as(e)),
    }),
    aa = (0, a.zZ)(o.X.SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, m.bG)([r4.A], () => r4.A.getDisableAllSounds());
            return g.useMemo(() => {
                if (e)
                    return {
                        type: d.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: j.intl.format(j.t.fRvixS, {
                            onClick: () => (0, t9.openUserSettings)(o.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [ar, r8, r9],
    }),
    ao = (0, a.zD)(o.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !y.uh.useSetting();
        },
        setValue: function (e) {
            (0, lB.A)("stream_previews_disabled", !e, y.uh.getSetting(), [ty.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                y.uh.updateSetting(!e);
        },
    }),
    au = (0, a.zD)(o.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => j.intl.string(j.t.GmWk2E),
        useSearchTerms: () => [j.intl.string(j.t["Fj/xn1"])],
        useSubtitle: () => j.intl.string(j.t["Fj/xn1"]),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getVideoHook());
        },
        setValue: lx.A.setVideoHook,
        usePredicate: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.supportsVideoHook());
        },
    }),
    ad = (0, a.zD)(o.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => j.intl.string(j.t["4I0qzZ"]),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getExperimentalSoundshare());
        },
        setValue: lx.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, m.bG)([nq.Ay], () => {
                let e = nq.Ay.supportsExperimentalSoundshare(),
                    t = nq.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    ac = (0, a.zD)(o.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => j.intl.string(j.t["/jwMtn"]),
        useSubtitle: () => j.intl.string(j.t.zlA23F),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [ty.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lx.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return nq.Ay.supports(lm.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    ag = (0, a.sN)(o.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => j.intl.string(j.t.fhEzfj),
        setValue: function (e) {
            let t = [ty.A.USER_SETTINGS_VOICE_AND_VIDEO];
            lx.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: nq.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, m.bG)([nq.Ay], () => nq.Ay.getSidechainCompression());
            return nq.Ay.supports(lm.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    am = (0, a.zD)(o.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t.lt8rRx),
        useSubtitle: () => j.intl.string(j.t.ie1mgY),
        useValue: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, iu.cX)() && e
                ? (0, iq.A)({
                      title: j.intl.string(j.t["9jf31O"]),
                      subtitle: j.intl.string(j.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          lx.A.setUseSystemScreensharePicker(e), ig.A.app.relaunch();
                      },
                      confirmText: j.intl.string(j.t.BddRzS),
                  })
                : lx.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, m.bG)([nq.Ay], () => nq.Ay.supportsSystemScreensharePicker() && (0, iu.cX)());
        },
    }),
    aA = (0, a.bd)(o.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t.qrMyvm) : j.intl.string(j.t.LEtTNl)),
        useCollapsedSubtitle: () => tc(o.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [ac, ag, am, ad, au],
    }),
    ah = (0, a.zZ)(o.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [ao, aA] });
var aE = i(106713);
let aS = (0, a.E2)(o.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aE.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, c.jsx)(lu.U, {
                label: j.intl.string(j.t.UTM8VP),
                deviceType: lm.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aT = (0, a.E2)(o.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aE.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, c.jsx)(lu.U, {
                label: j.intl.string(j.t.xuYQ0n),
                deviceType: lm.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    ax = (0, a.zC)(o.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [aS, aT] }),
    ap = (0, a.sN)(o.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = nq.Ay.getInputVolume();
            return (0, r0.M)(e);
        },
        asValueChanges: function (e) {
            let t = [ty.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, r0.w)(e);
            lx.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    af = (0, a.sN)(o.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = nq.Ay.getOutputVolume();
            return (0, r0.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [ty.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, r0.w)(e);
            lx.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    aN = (0, a.zC)(o.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [ap, af] });
var a_ = i(702841),
    aI = i(349288),
    aC = i(152567),
    ab = i(141218);
let av = `${eS.A.getArticleURL(A.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    ay = (0, a.E2)(o.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH)],
        usePredicate: function () {
            return (0, a_.bG)([nq.Ay], () => nq.Ay.supports(lm.O5.LOOPBACK));
        },
        Component: function () {
            return (0, a_.bG)([nq.Ay], () => nq.Ay.supports(lm.O5.LOOPBACK))
                ? (0, c.jsx)(aC.A, {
                      size: "md",
                      notchBackground: aC.V.GRAY,
                      captionVoice: j.intl.string(j.t.bp3JOV),
                      captionNoVoice: (0, c.jsxs)(c.Fragment, {
                          children: [
                              (0, c.jsx)(z.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t.bgn75v),
                              }),
                              j.intl.string(j.t["MA+OZh"]),
                              (0, c.jsx)(aI.Anchor, {
                                  className: ab.X,
                                  href: eS.A.getArticleURL(A.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: av }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    aj = eW.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function aO(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, c.jsxs)(F.B, {
        children: [
            i && (0, c.jsx)(n1, { sourcePage: "voice" }),
            t && (0, c.jsx)(sB.A, { look: sB.k.WARNING, children: j.intl.string(j.t.Ioz3gx) }),
        ],
    });
}
let aR = (0, a.zZ)(o.X.VOICE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.K3lovD),
        useSearchTerms: () => [
            j.intl.string(j.t.hHMYbb),
            j.intl.string(j.t.nuFtHH),
            j.intl.string(j.t.dl18zb),
            j.intl.string(j.t["3182VD"]),
            j.intl.string(j.t["DGq/PR"]),
            j.intl.string(j.t.eATD2B),
            j.intl.string(j.t.Rtsr6w),
            j.intl.string(j.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = n0("voice"),
                t = (0, ld.x5)(lm.oh.AUDIO_INPUT),
                i = (0, ld.x5)(lm.oh.AUDIO_OUTPUT),
                n = g.useMemo(() => {
                    let e = aj.some((e) => t?.hardwareId?.startsWith(e)),
                        n = aj.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return g.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: d.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, c.jsx)(aO, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [ax, aN, ay],
    }),
    aD = (0, a.t_)(o.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        buildLayout: () => [aR, rv, lT, ah, aa, r5, lK],
    }),
    aL = (0, a.i4)(o.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => nq.Ay.isSupported(),
        icon: s9.c,
        useMenu: le.A,
        buildLayout: () => [aD],
    }),
    aP = (0, a.WI)(o.X.APP_SECTION, {
        useTitle: () => j.intl.string(j.t.gcyH1J),
        buildLayout: () => [aL, iz, eJ, nG, s7, iK],
    });
var aG = i(360669),
    aM = i(974544),
    aU = i(423764),
    aV = i(289873),
    ak = i(132500),
    aw = i(465323),
    aF = i(37766),
    aB = i(194261),
    az = i(391048),
    aX = i(277984),
    aY = i(99696),
    aH = i(202613),
    aK = i(615405),
    aW = i(580630),
    aZ = i(83617),
    aq = i(935208),
    aQ = i(607399),
    aJ = i(993077),
    a$ = i(150934),
    a0 = i(256006),
    a1 = i(198970),
    a2 = i(71532);
let a3 = /[^0-9/]/g,
    a5 = /[^0-9]/g;
class a4 extends g.PureComponent {
    _inputRef;
    selectionStart = 0;
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart);
    }
    setRef = (e) => {
        let { inputRef: t } = this.props;
        (this._inputRef = e), null != t && t(e);
    };
    handleChange = (e, t) => {
        let i,
            n,
            s,
            l,
            { value: r, onChange: a } = this.props,
            o = this._inputRef;
        if (e === r || null == o || null == r) return;
        let u =
                ((n = (i = e.replace(a3, "").split("/"))[0]),
                (s = i[1]),
                (l = []),
                parseInt(n, 10) > 12 && (n = n.substring(0, 1)),
                l.push(n),
                (parseInt(n, 10) > 1 || 2 === n.length || (null != s && "" !== s)) && l.push("/"),
                null != s && "" !== s && parseInt(s, 10) > 99 && (s = (s + "").substring(0, 2)),
                l.push(s),
                l.join("")),
            d = o.selectionStart;
        u === r && u.length <= 3 && r.includes("/") && !e.includes("/")
            ? (u = u.replace(a5, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, c.jsx)(sn.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var a6 = i(832208),
    a8 = i(729919);
let a7 = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tU.Ld)(),
                        title: () => j.intl.string(j.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => j.intl.string(j.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => a8.ep,
                        renderInput: (e) => (0, c.jsx)(a4, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    a9 = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = g.useState(!1),
            [a, o] = g.useState(null),
            [u, d] = g.useState(n);
        return (
            g.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, c.jsx)(a6.A, {
                className: i,
                form: a7,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: function (e) {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, a2.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var oe = i(219887),
    ot = i(520229);
let oi = "isDefault";
class on extends g.PureComponent {
    static defaultProps = { onDelete: () => {}, onSubmit: () => {}, onCancel: () => {} };
    constructor(e) {
        super(e);
        const { paymentSource: t, isDefault: i } = e,
            n = t.billingAddress;
        this.state = {
            billingAddress: {
                name: n.name ?? "",
                line1: n.line1 ?? "",
                line2: n.line2 ?? "",
                country: n.country ?? "",
                state: n.state ?? "",
                city: n.city ?? "",
                postalCode: n.postalCode ?? "",
            },
            expiresMonth: t instanceof aH.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof aH.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        e2.h.wait(() => {
            (0, aX.ey)(), (0, aX.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(i9.Vq).length))
            this.props.onCancel();
        else {
            let { billingAddress: e, isDefault: t, expiresMonth: i, expiresYear: n } = this.state;
            this.props.onSubmit(this.props.paymentSource.id, {
                billingAddress: e,
                expiresMonth: i,
                expiresYear: n,
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
    handleAddressUpdate = (e, t, i) => {
        this.setState({
            billingAddress: e,
            billingAddressValid: t,
            dirtyFields: { ...this.state.dirtyFields, billingAddress: i },
        });
    };
    handleExpirationDateUpdate = (e, t) => {
        let { expirationDate: i } = e;
        if ((this.setState({ expirationValid: t }), null == i || "" === i)) return;
        let [n, s] = i.split("/");
        this.handleFieldChange(Number(n), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${s}`), "expiresYear");
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, c.jsx)("div", {
                      className: ot.zc,
                      children: (0, c.jsx)(nV.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, c.jsx)("div", {
                  className: ot.zc,
                  children: (0, c.jsx)(nV.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, a0.g)(i);
        return (0, c.jsxs)("div", {
            className: ot.yV,
            children: [
                (0, c.jsx)(z.E, {
                    className: ot.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, c.jsx)(a1.Ay, {
                    ...e,
                    mode: a1.Ay.Modes.EDIT,
                    layout: n,
                    onBillingAddressChange: this.handleAddressUpdate,
                    error: t,
                }),
            ],
        });
    }
    renderCardExpirationSection() {
        let { expiresMonth: e, expiresYear: t } = this.state;
        if (null == e || null == t) return null;
        let i = `${e.toString().padStart(2, "0")}/${t.toString().padStart(2, "0").slice(-2)}`;
        return (0, c.jsxs)("div", {
            className: ot.yV,
            children: [
                (0, c.jsx)(z.E, { className: ot.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, c.jsx)(a9, {
                    expirationDate: i,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: i } = this.props,
            { billingAddressValid: n, expirationValid: s } = this.state;
        return (0, c.jsx)("div", {
            className: ot.AU,
            children: (0, c.jsxs)(F.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, c.jsx)(lC.e, {
                        children: (0, c.jsxs)("div", {
                            className: ot.lH,
                            children: [
                                i
                                    ? (0, c.jsx)(n6.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, c.jsx)("div", { "aria-hidden": !0, className: ot.dm }),
                                      })
                                    : null,
                                (0, c.jsx)(p.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: aQ.Fr ? "sm" : "md",
                                    text: aQ.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, c.jsxs)(lC.e, {
                        children: [
                            (0, c.jsx)(p.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: aQ.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, c.jsx)(p.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: aQ.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: i, className: n, isForSubscription: s } = this.props,
            { isDefault: l } = this.state,
            r = e instanceof aH.SJ;
        return (0, c.jsx)(aJ.Z, {
            editable: !0,
            className: ni()(ot.Nr, n),
            children: (0, c.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, c.jsxs)("div", {
                        className: ot.__invalid_paymentSection,
                        children: [
                            (0, c.jsx)(oe.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, c.jsx)("div", { className: ot.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, c.jsx)("div", {
                                className: ot.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, c.jsx)("div", {
                        className: ot.D5,
                        children: (0, c.jsx)(a$.S, {
                            value: oi,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, oi),
                            label: j.intl.string(j.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, c.jsx)(n2.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let os = m.Ay.connectStores([aK.A], () => ({ updateError: aK.A.editSourceError, removeError: aK.A.removeSourceError }))(
    on,
);
var ol = i(776409),
    or = i(743526),
    oa = i(455218);
function oo() {
    (0, aY.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, ak.A)() });
}
class ou extends g.PureComponent {
    static defaultProps = { isEditing: !1, hideDivider: !1, onEditClick: () => {} };
    handleEditClick = () => {
        this.props.onEditClick(this.props.paymentSource.id);
    };
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: i,
            hideDivider: n,
            isForSubscription: s,
            locale: l,
            removing: r,
            submitting: a,
            onSubmit: o,
            onCancel: u,
            onDelete: d,
        } = this.props;
        return i
            ? (0, c.jsx)(os, {
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
            : (0, c.jsxs)(c.Fragment, {
                  children: [
                      n ? null : (0, c.jsx)(n2.c, { className: oa.__invalid_sourceDivider }),
                      (0, c.jsxs)("div", {
                          className: oa.Yb,
                          children: [
                              (0, c.jsx)(oe.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, c.jsx)(p.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: j.intl.string(j.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let od = g.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = g.useState(null),
        o = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, m.bG)([aK.A], () => aK.A.ipCountryCode),
        d = g.useMemo(() => (0, aw.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        g.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : aX.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, c.jsxs)(c.Fragment, {
            children: [
                i ? null : (0, c.jsx)(n2.c, { className: oa.__invalid_sourceDivider }),
                (0, c.jsxs)("div", {
                    className: oa.Yb,
                    children: [
                        void 0 !== t
                            ? (0, c.jsx)(oe.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, c.jsxs)(sa.A, {
                                  align: sa.A.Align.CENTER,
                                  children: [
                                      (0, c.jsx)(aF._, { size: "lg" }),
                                      (0, c.jsx)(z.E, {
                                          variant: "text-sm/medium",
                                          className: or.Wi,
                                          children: j.intl.string(ol.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, c.jsxs)("div", {
                            className: oa.zy,
                            children: [
                                (0, c.jsx)("div", {
                                    className: oa.Tq,
                                    children:
                                        null == r
                                            ? (0, c.jsx)(aV.y, { type: aV.y.Type.SPINNING_CIRCLE })
                                            : (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, aW.$g)(e ?? 0, i, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${n} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, c.jsx)(p.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: j.intl.string(ol.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class oc extends g.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await aX.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await aX.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await aX.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, aZ.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, si.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, c.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, az.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, c.jsxs)("div", {
            className: oa.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, c.jsxs)("div", {
                          className: oa.z8,
                          children: [
                              (0, c.jsx)(z.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: oa.Sv,
                                  children: j.intl.string(j.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, c.jsx)(p.$, { onClick: this.handleAddPaymentMethod, text: j.intl.string(j.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let e,
            {
                showHeader: t,
                defaultPaymentSourceId: i,
                paymentSources: n,
                locale: s,
                removing: l,
                submitting: r,
                premiumSubscriptionPaymentSourceId: a,
                showGiftCards: o,
            } = this.props,
            u = k()
                .values(n)
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : aq.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof aH.LQ)),
            g = u.filter((e) => e instanceof aH.LQ),
            m = this.state.editingPayment,
            A = d.findIndex((e) => e.id === m),
            h = d.map((e, t) =>
                (0, c.jsx)(
                    ou,
                    {
                        locale: s,
                        paymentSource: e,
                        isDefault: i === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || A === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: r,
                        removing: l,
                        isEditing: m === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                g.length > 0
                    ? g.map((e, t) =>
                          (0, c.jsx)(
                              od,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || A === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: oo,
                              },
                              e.id,
                          ),
                      )
                    : (0, c.jsx)(od, {
                          hideDivider: 0 === d.length || A === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: oo,
                      })),
            (0, c.jsxs)(c.Fragment, {
                children: [
                    t
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsxs)(E.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, c.jsx)(aB.X, { size: "sm", className: oa.hz }),
                                          " ",
                                          j.intl.string(j.t.W26xGQ),
                                      ],
                                  }),
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    h,
                    o && e,
                    A !== d.length - 1 || (o && g.length > 0) ? (0, c.jsx)(n2.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var og = i(459357),
    om = i(295405),
    oA = i(166403),
    oh = i(773669),
    oE = i(844828);
function oS() {
    let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, aU.Gw)(e.country) };
}
let oT = (0, a.E2)(o.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, m.bG)([aK.A], () => aK.A.isSyncing),
                n = (0, m.bG)([om.A], () => om.A.paymentSources),
                s = (0, m.bG)([om.A], () => om.A.defaultPaymentSourceId),
                l = (0, m.bG)([oh.default], () => oh.default.locale),
                r = (0, m.bG)([oA.A], () => oA.A.getPremiumTypeSubscription()),
                a = (0, m.bG)([aK.A], () => aK.A.isRemovingPaymentSource),
                o = (0, m.bG)([aK.A], () => aK.A.isUpdatingPaymentSource),
                { enabled: u } = (0, og.c)({ location: "UserSettingsBilling" });
            return (g.useEffect(() => {
                aX.$o(), aX.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, c.jsx)("div", { className: oE.o, children: (0, c.jsx)(aV.y, {}) })
                : (0, c.jsx)(oc, {
                      showHeader: t,
                      paymentSources: n,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== A.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.W26xGQ), j.intl.string(j.t["3pIjBH"])],
    }),
    ox = (0, a.zZ)(o.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = oS();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == oS()
                ? null
                : {
                      type: d.p3.INFO_POPOVER,
                      ariaLabel: j.intl.string(j.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: j.intl.string(j.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: j.intl.string(j.t.PuB1W7),
                                  variant: "primary",
                                  onClick: () => {
                                      window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"),
                                          e();
                                  },
                              },
                          ],
                      },
                  };
        },
        buildLayout: () => [oT],
    });
var op = i(549363),
    of = i(545075);
let oN = (0, a.E2)(o.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, m.bG)([oh.default], () => oh.default.locale);
            return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(of.kb, {}), (0, c.jsx)(op.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    o_ = (0, a.zZ)(o.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [oN],
    }),
    oI = (0, a.t_)(o.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [ox, o_],
        useObscuredNotice: aM.L,
    }),
    oC = (0, a.i4)(o.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: aG.B,
        buildLayout: () => [oI],
    });
var ob = i(70283),
    ov = i(597770),
    oy = i(682618),
    oj = i(611881),
    oO = i(962644),
    oR = i(35587),
    oD = i(86379);
let oL = (0, a.E2)(o.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: of.uK,
        usePredicate: () => (0, oD.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    oP = (0, a.zZ)(o.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [oL] });
var oG = i(982240),
    oM = i(788833),
    oU = i(914410),
    oV = i(360615),
    ok = i(215082);
function ow(e) {
    let { tier: t, active: i = !1 } = e;
    return (0, c.jsxs)("div", {
        className: ni()(ok.fO, { [ok.bF]: i }),
        children: [
            null != t.simple_icon_url && (0, c.jsx)("img", { src: t.simple_icon_url, alt: "", className: ok.si }),
            (0, c.jsxs)("div", {
                className: ok.tc,
                children: [
                    (0, c.jsx)(z.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, c.jsx)(z.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: j.intl.format(oV.default.qvx9E4, { count: (0, oG.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function oF(e) {
    let { tiers: t, currentTier: i } = e;
    return (0, c.jsx)("div", {
        className: ok.dw,
        children: t.map((e) => (0, c.jsx)(ow, { tier: e, active: e.key === i?.key }, e.key)),
    });
}
function oB(e) {
    let { analyticsLocation: t, location: i } = e,
        { analyticsLocations: n } = (0, eR.Ay)(ty.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: s } = (0, oM.$)({
            giftRecipient: void 0,
            analyticsLocations: n,
            analyticsObject: { object: A.ZSU.BUTTON_CTA, objectType: A.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: i,
        });
    return (0, c.jsx)("div", {
        className: ok.NG,
        children: (0, c.jsx)(p.$, {
            variant: "primary",
            icon: ov.o,
            text: j.intl.string(oV.default.DZnomS),
            onClick: s,
        }),
    });
}
function oz(e) {
    let t,
        { badgeProgress: i, currentTier: n, nextTier: s, giftsRemaining: l } = e,
        r = (0, oG.rL)(n),
        a = (0, oG.rL)(s),
        o = (0, oj.GZ)(i, n, s);
    return (
        (t =
            null != s
                ? j.intl.formatToPlainString(oV.default.XTX3OO, { count: l, nextTier: s?.name ?? "" })
                : j.intl.formatToPlainString(oV.default.LnsdbK, { currentTier: n?.name ?? "" })),
        (0, c.jsxs)("div", {
            className: ok.mY,
            children: [
                n?.simple_icon_url != null &&
                    (0, c.jsx)("div", {
                        className: ok.fC,
                        children: (0, c.jsx)("img", { src: n.simple_icon_url, alt: "", className: ok.qS }),
                    }),
                (0, c.jsxs)("div", {
                    className: ok.Qs,
                    children: [
                        (0, c.jsx)(z.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, c.jsx)(oU.Ay, { variant: oU.qP.BLUE, weight: oU.fh.MEDIUM, progress: o }),
                        (0, c.jsx)(z.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: ok.qg,
                            children: j.intl.format(oV.default.iIpfQe, {
                                threshold: null != s ? a : r,
                                count: null != s ? i : r,
                            }),
                        }),
                    ],
                }),
                s?.simple_icon_url != null &&
                    (0, c.jsx)("div", {
                        className: ok.fC,
                        children: (0, c.jsx)("img", { src: s.simple_icon_url, alt: "", className: ok.qS }),
                    }),
            ],
        })
    );
}
function oX(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: i,
            currentTier: n,
            nextTier: s,
            giftsRemaining: l,
            tiers: r,
        } = (0, m.cf)([oG.Ay], () => ({
            badgeProgress: oG.Ay.getSingleRequirementProgress(ob.$.GIFTING)?.current ?? 0,
            currentTier: oG.Ay.getCurrentTier(ob.$.GIFTING),
            nextTier: oG.Ay.getNextTier(ob.$.GIFTING),
            giftsRemaining: oG.Ay.getRemainingToNextTier(ob.$.GIFTING),
            tiers: oG.Ay.getBadgeById(ob.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, c.jsxs)("div", {
              className: ok.kL,
              children: [
                  (0, c.jsxs)("div", {
                      className: ok.Jo,
                      children: [
                          i > 0 &&
                              (0, c.jsxs)(c.Fragment, {
                                  children: [
                                      (0, c.jsx)(oz, {
                                          badgeProgress: i,
                                          currentTier: n,
                                          nextTier: s,
                                          giftsRemaining: l,
                                      }),
                                      (0, c.jsx)("div", { className: ok.yF }),
                                  ],
                              }),
                          (0, c.jsx)(oF, { tiers: r, currentTier: n }),
                          (0, c.jsx)(z.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: ok.PJ,
                              children: j.intl.string(oV.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, c.jsx)(oB, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let oY = (0, a.zZ)(o.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => j.intl.string(oV.default.sFokBp),
        buildLayout: () => [oH],
        usePredicate: () => {
            let e = (0, oj.F5)("gift_inventory"),
                t = (0, m.bG)([oG.Ay], () => oG.Ay.getBadgeById(ob.$.GIFTING));
            return e && null != t;
        },
    }),
    oH = (0, a.E2)(o.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [j.intl.string(oV.default.sFokBp)],
        Component: () => (0, c.jsx)(oX, {}),
    });
var oK = i(264779),
    oW = i(528464),
    oZ = i(555393),
    oq = i(725807),
    oQ = i(212168),
    oJ = i(469778),
    o$ = i(45938),
    o0 = i(109802),
    o1 = i(869038),
    o2 = i(221347);
function o3(e) {
    let { children: t, className: i, splashArtURL: n } = e;
    return (0, c.jsxs)(sa.A, {
        className: ni()(o2.wx, i),
        align: sa.A.Align.CENTER,
        children: [
            (0, c.jsx)("div", { className: o2.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
            t,
        ],
    });
}
function o5(e) {
    let { children: t, className: i } = e;
    return (0, c.jsx)("div", { className: ni()(o2.rf, i), children: t });
}
class o4 extends g.PureComponent {
    static Header = o3;
    static Body = o5;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, c.jsx)("div", { className: ni()(o2.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var o6 = i(165191),
    o8 = i(871123),
    o7 = i(366523),
    o9 = i(280450),
    ue = i(30793),
    ut = i(97352),
    ui = i(67480),
    un = i(147925),
    us = i(957565),
    ul = i(615396),
    ur = i(990125);
class ua extends g.PureComponent {
    _copyModeTimeout = new ri.Ep();
    state = { copyMode: o0.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case o0.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case o0.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        o1.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, o$.AK)(t, i),
            (0, us.C)(
                e,
                () => this.setState({ copyMode: o0.q.SUCCESS }),
                () => this.setState({ copyMode: o0.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: o0.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, c.jsxs)(sa.A, {
            direction: sa.A.Direction.VERTICAL,
            className: ur.Gj,
            children: [
                (0, c.jsx)(o0.e, {
                    className: ur.ph,
                    value: (0, o$.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: us.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: l_.XD.BRAND,
                    buttonLook: l_.pR.FILLED,
                }),
                (0, c.jsxs)("div", {
                    className: ur.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, c.jsxs)(g.Fragment, {
                                  children: [
                                      j.intl.format(j.t.ltVZcJ, { hours: t.expiresAt.diff(ns()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, c.jsx)(t8.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: j.intl.string(j.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class uo extends g.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await o1.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && o1.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, o8.bF)(e)
            ? (0, c.jsx)(o7.e, { shape: "square", sku: e, containerClassName: ur.ez })
            : null != t
              ? (0, c.jsx)(o6.A, { giftStyle: t, className: ur.ez, shouldAnimate: this.state.isHovered })
              : (0, c.jsx)(nZ.A, { game: i, size: nZ.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, o8.bF)(e)
            ? (0, c.jsxs)("div", {
                  className: ni()(ur.Oc, ur.ic),
                  children: [
                      (0, c.jsx)(nZ.A, { game: i, size: nZ.M.XSMALL, skuId: e.id, className: ur._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, c.jsx)("div", { className: ur.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === tk.FB
                    ? j.intl.string(j.t.odsU6W)
                    : n === tk.Bu && null != i
                      ? j.intl.formatToPlainString(i.interval === tk.WT.MONTH ? j.t.uZjpiJ : j.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : j.intl.formatToPlainString(i.interval === tk.WT.MONTH ? j.t.rCJvqo : j.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, c.jsx)("div", { className: ur.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, c.jsxs)(sa.A, {
            justify: sa.A.Justify.BETWEEN,
            align: sa.A.Align.CENTER,
            className: ur.pe,
            children: [
                (0, c.jsx)(z.E, { variant: "text-md/normal", children: j.intl.string(j.t.lELyPj) }),
                (0, c.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(j.t.Q3Qguo),
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
                giftCodes: i,
                className: n,
                sku: s,
                isFetching: l,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, c.jsxs)(o4, {
            className: n,
            children: [
                (0, c.jsx)(t8.D, {
                    onClick: this.handleToggleOpen,
                    className: ur.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, c.jsx)(o4.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, c.jsxs)("div", {
                            className: ur.MY,
                            children: [
                                (0, c.jsxs)(sa.A, {
                                    align: sa.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, c.jsxs)("div", {
                                            className: ur.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, c.jsx)(un.A, {
                                    direction: a ? un.A.Directions.UP : un.A.Directions.DOWN,
                                    className: ur.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, c.jsx)(o4.Body, {
                          children: l
                              ? (0, c.jsx)(aV.y, { className: ur.u1 })
                              : (0, c.jsxs)(g.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, c.jsx)(ua, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let uu = m.Ay.connectStores([ui.A, e8.A, ue.A, nz.A, ut.A, o9.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = ui.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = ue.A.getForGifterSKUAndPlan(o9.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: e8.A.enabled,
        isFetching: ue.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: ue.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: nz.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, ul.c9)(i) : null,
        giftCodes: l,
    };
})(uo);
var ud = i(725570),
    uc = i(736653),
    ug = i(46054);
let um = ns().duration(30, "days");
var uA = i(416052),
    uh = i(53070);
function uE(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, c.jsx)(st.Modal, {
        title: "",
        size: "md",
        input: (0, c.jsx)("div", { className: uh.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, c.jsxs)("div", {
            className: uh.t4,
            children: [
                (0, c.jsx)(E.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, c.jsx)(z.E, { variant: "text-md/normal", className: uh.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let uS = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = g.useState(null),
        o = (0, tU.GV)(),
        { analyticsLocations: u } = (0, eR.Ay)(ty.A.USER_SETTINGS_GIFT_INVENTORY);
    return (g.useEffect(() => {
        null == n &&
            (0, oK.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, c.jsx)(uE, { onClose: t, transitionState: l })
        : null == n
          ? (0, c.jsx)(aV.y, { className: uh.Lq })
          : (0, c.jsx)(st.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, c.jsxs)("div", {
                    className: uh.N1,
                    children: [
                        (0, c.jsx)("div", { className: uh.Qw }),
                        (0, c.jsx)(E.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, c.jsx)(z.E, {
                            variant: "text-md/normal",
                            className: uh.G3,
                            children: s.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: j.intl.string(j.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: j.intl.string(j.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, oK.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsx)(n2.c, { className: uh.M5 }),
                        (0, c.jsx)(tH.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, c.jsx)(uA.A, {
                                value: n,
                                buttonColor: l_.$n.Colors.BRAND,
                                buttonLook: l_.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uT = i(707554),
    ux = i(339048),
    up = i(104589);
function uf() {
    let e = (0, m.yK)([oJ.A], () => oJ.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = k().groupBy(e, (e) => (0, o$.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = g.useState(!1);
    if (
        (g.useEffect(() => {
            e2.h.wait(() => {
                (0, ux.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, c.jsx)(aV.y, { className: up.Lq });
    if (0 === Object.keys(t).length)
        return (0, c.jsxs)("div", {
            className: up.p$,
            children: [
                (0, c.jsx)("div", { className: up.QT }),
                (0, c.jsx)(uT.H, { className: up.ks, children: j.intl.string(j.t.B1qgZn) }),
                (0, c.jsx)("p", {
                    className: up.WO,
                    children: j.intl.format(j.t.HezvJ8, {
                        onClick: function () {
                            (0, t9.openUserSettings)(o.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = k()
        .keys(t)
        .map((e) => {
            let { skuId: i, subscriptionPlanId: n, giftStyle: s } = (0, o$.X6)(e);
            return (0, c.jsx)(uu, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, c.jsx)(F.B, { gap: "lg", children: s });
}
function uN(e) {
    let t,
        { outboundPromotion: i, code: n } = e,
        [s, l] = g.useState(!1),
        [r, a] = g.useState(!1);
    function o() {
        return l((e) => !e);
    }
    let u = (0, uc.Ay)(),
        d = (0, oK.WD)(i.id, u),
        m = null != n,
        A = g.useMemo(
            () =>
                (0, nl.i$)(
                    m
                        ? null != i.outboundRedemptionEndDate
                            ? ns()(i.outboundRedemptionEndDate)
                            : ns()(i.endDate).add(um)
                        : ns()(i.endDate),
                    "LL",
                ),
            [i, m],
        );
    m && s
        ? (t = j.intl.format(j.t.pkxVx6, { endDate: A, onClickDetails: o }))
        : m && !s
          ? (t = j.intl.format(j.t["4sFeob"], { endDate: A, onClickDetails: o }))
          : !m && s
            ? (t = j.intl.format(j.t["RBnE+l"], { endDate: A, onClickDetails: o }))
            : m || s || (t = j.intl.format(j.t["57+7Qn"], { endDate: A, onClickDetails: o }));
    let h = m ? j.intl.string(j.t["2cHUti"]) : j.intl.string(j.t.O13yhz),
        S = (0, oZ.N)()?.isEligible === !0,
        T = g.useCallback(() => a(!1), []),
        { outboundTitle: x, outboundTermsAndConditions: f } = i;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: up.AX,
                children: [
                    (0, c.jsxs)("div", {
                        className: up.Pg,
                        children: [
                            (0, c.jsxs)("div", {
                                className: up.At,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: up.$G,
                                        children: (0, c.jsx)("img", { alt: "", src: d, className: up.IJ }),
                                    }),
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(E.D, { variant: "heading-md/semibold", children: x }),
                                            (0, c.jsx)(z.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (m || S) && (0, c.jsx)(p.$, { text: h, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    s &&
                        (0, c.jsx)(z.E, {
                            className: up.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: ug.A.parse(f, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, c.jsx)(ud.aF, {
                    renderModal: (e) =>
                        (0, c.jsx)(uS, {
                            ...e,
                            onClose: T,
                            onClaim: oO.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: T,
                }),
        ],
    });
}
function u_(e) {
    let { redesign: t = !1 } = e,
        i = (0, m.yK)([oJ.A], () => oJ.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, oZ.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: s,
            claimedEndedOutboundPromotions: l,
            claimedOutboundPromotionCodeMap: r,
        } = (0, oR.y7)(),
        a = i.find((e) => e.giftCodeBatchId === tk.FB && !e.consumed),
        o = i.filter((e) => e.giftCodeBatchId === tk.Bu && !e.consumed) ?? [],
        [u, d] = k().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tk.gD.PREMIUM_YEAR_TIER_2;
        }),
        g = s.length + l.length > 0,
        h =
            t || !g
                ? null
                : (0, c.jsxs)("div", {
                      className: up.N1,
                      children: [
                          (0, c.jsx)(E.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, c.jsx)(n2.c, { className: up.yF }),
                      ],
                  }),
        S =
            !1 === n && g
                ? (0, c.jsxs)("div", {
                      className: up.uo,
                      children: [
                          (0, c.jsx)(ry.t, {
                              size: "md",
                              color: iZ.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: up.PC,
                          }),
                          (0, c.jsx)(z.E, {
                              variant: "text-md/normal",
                              className: up.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, tP.default)(), (0, tW.pX)(A.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, c.jsx)(oq.A, {
                              showGradient: !0,
                              className: up.aA,
                              subscriptionTier: tk.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, c.jsxs)("div", {
        children: [
            h,
            (0, c.jsx)(oQ.A, {
                className: up.Yj,
                isShown: !1 === n && g,
                type: oQ.i.PREMIUM,
                hasBackground: !0,
                children: (0, c.jsxs)("div", {
                    className: up.DE,
                    children: [
                        S,
                        l.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, c.jsx)(uN, { outboundPromotion: i, code: t }, i.id);
                        }),
                        s.map((e) => (0, c.jsx)(uN, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, c.jsx)(
                                  uu,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tk.FB,
                                  },
                                  (0, o$.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, c.jsx)(
                                  uu,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tk.Bu,
                                  },
                                  (0, o$.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, c.jsx)(
                                  uu,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tk.Bu,
                                  },
                                  (0, o$.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let uI = (0, a.zZ)(o.X.MY_GIFTS_CATEGORY, {
        useTitle: ub,
        buildLayout: () => [uC],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, m.cf)(
                    [oW.A],
                    () => ({
                        claimedOutboundPromotionCodes: oW.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: oW.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                i = (0, oR.T1)({ includeClaimedPromotions: !0 }),
                n = (0, oK.Wl)(e, i).length;
            return t && i.length + n > 0;
        },
    }),
    uC = (0, a.E2)(o.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [ub()],
        Component: () => (0, c.jsx)(u_, { redesign: !0 }),
    });
function ub() {
    return j.intl.string(j.t.YzjdWJ);
}
let uv = (0, a.zZ)(o.X.PURCHASED_GIFTS_CATEGORY, { useTitle: uj, buildLayout: () => [uy] }),
    uy = (0, a.E2)(o.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [uj()], Component: () => (0, c.jsx)(uf, {}) });
function uj() {
    return j.intl.string(j.t.FWe6CP);
}
var uO = i(532446),
    uR = i(499454);
class uD extends g.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: A.ZSU.BUTTON_CTA };
    }
    handleChange = (e) => {
        this.setState({ codeInput: e, hasError: !1 });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        let { codeInput: t } = this.state;
        if ("" === t) return;
        let i = t.trim();
        this.setState({ submitting: !0 });
        try {
            if (this.props.acceptGiftCardRedemption)
                try {
                    await (0, aY.Qp)(i),
                        (0, aY.HF)({
                            initialCode: i,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, ak.A)(),
                        }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, o$.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await o1.A.resolveGiftCode(e);
            if (null != n && null != n.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            e7.default.track(A.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: A.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: A.ZSU.BUTTON_CTA,
                },
            }),
                (0, uR.h)({ processedCode: e }),
                this.setState({ codeInput: "" });
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { redesign: e, obscureInput: t } = this.props,
            { codeInput: i, submitting: n, hasError: s, isPromoCode: l } = this.state,
            r = e ? j.intl.string(j.t["hVEn/j"]) : j.intl.string(j.t.SeKIoS),
            a = e ? j.intl.string(j.t.epHMtp) : void 0;
        return (0, c.jsx)(iQ.n, {
            label: e ? void 0 : j.intl.string(j.t["il+VCo"]),
            children: (0, c.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, c.jsxs)(uO.M, {
                    children: [
                        (0, c.jsx)(sn.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: i,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && s ? j.intl.string(j.t.Y11a2u) : null,
                            helperText: l
                                ? j.intl.format(j.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${i}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, c.jsx)(p.$, {
                            variant: "primary",
                            text: j.intl.string(j.t.KIpp7M),
                            type: "submit",
                            loading: n,
                            disabled: e && 0 === i.length,
                        }),
                    ],
                }),
            }),
        });
    }
}
function uL(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, og.c)({ location: "UserSettingsBilling" }),
        n = g.useContext(e7.AnalyticsContext),
        s = (0, m.bG)([e8.A], () => e8.A.enabled);
    return (0, c.jsx)(uD, { analyticsContext: n, obscureInput: s, acceptGiftCardRedemption: i, redesign: t });
}
let uP = (0, a.zZ)(o.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [uG],
        usePredicate: () => !(0, oD.Hp)(),
    }),
    uG = (0, a.E2)(o.X.REDEEM_CODE_INPUT, {
        Component: () => (0, c.jsx)(uL, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    uM = (0, a.t_)(o.X.GIFT_PANEL, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        buildLayout: () => [uP, uI, oY, uv, oP],
        initialize: () => {
            oO.Ay.fetchClaimedOutboundPromotionCodes(), (0, oj.Ig)("gift_inventory") && (0, oy.o0)(ob.$.GIFTING);
        },
    }),
    uU = (0, a.i4)(o.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        icon: ov.o,
        usePersistentBadge: function () {
            let e = (0, oR.IO)().length;
            return g.useMemo(() => ({ badgeType: d.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [uM],
    });
var uV = i(659758),
    uk = i(103531),
    uw = i(815846);
let uF = (0, a.E2)(o.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser());
            return (0, rw.YE)(e, tk.PremiumTypes.TIER_2) ? (0, c.jsx)(uw.A, {}) : (0, c.jsx)(uk.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    uB = (0, a.zZ)(o.X.NITRO_CATEGORY, { buildLayout: () => [uF] }),
    uz = (0, a.t_)(o.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: aM.L,
        buildLayout: () => [uB],
    }),
    uX = (0, a.i4)(o.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: ry.t,
        usePersistentBadge: function (e) {
            let t = (0, uV.e)(e);
            return g.useMemo(() => ({ badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [uz],
    });
var uY = i(104510),
    uH = i(820739),
    uK = i(73825),
    uW = i(160946);
let uZ = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var uq = i(859241),
    uQ = i(531260),
    uJ = i(369163),
    u$ = i(957485),
    u0 = i(926268),
    u1 = i(253449),
    u2 = i(93364);
function u3(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, c.jsxs)("li", {
        className: ni()(u1.Nr, t),
        children: [
            (0, c.jsx)(i, { className: u1.Kk }),
            (0, c.jsx)(z.E, { className: u1.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let u5 = function (e) {
    let { cardClassName: t } = e;
    return (0, c.jsxs)("div", {
        className: u1.iE,
        children: [
            (0, c.jsxs)("div", {
                className: u1.Qs,
                children: [
                    (0, c.jsx)(E.D, {
                        className: u1.R_,
                        color: "text-overlay-light",
                        variant: "heading-xxl/bold",
                        children: j.intl.string(j.t.IzKs3o),
                    }),
                    (0, c.jsxs)("ul", {
                        className: u1.kR,
                        children: [
                            (0, c.jsx)(u3, { className: t, icon: uJ.v, children: j.intl.string(j.t.TZigSO) }),
                            (0, c.jsx)(u3, {
                                className: t,
                                icon: (e) =>
                                    (0, c.jsx)("img", { className: ni()(e.className, u1.Dp), src: u2, alt: "" }),
                                children: j.intl.string(j.t.hjQuV2),
                            }),
                            (0, c.jsx)(u3, { className: t, icon: u$.i, children: j.intl.string(j.t["2RUcaM"]) }),
                            (0, c.jsx)(u3, { className: t, icon: u0.C, children: j.intl.string(j.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)("div", { className: u1.JP }),
        ],
    });
};
var u4 = i(834040),
    u6 = i(999747);
let u8 = [
        { getQuestion: () => j.intl.string(j.t.C4J8UB), getAnswer: () => j.intl.string(j.t.nhkk6k) },
        {
            getQuestion: () => j.intl.string(j.t.ai4ym2),
            getAnswer: () =>
                j.intl.format(j.t["8zlqlD"], { helpCenterUrl: eS.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => j.intl.string(j.t.kMVGsC), getAnswer: () => j.intl.string(j.t["Vz/SCQ"]) },
        { getQuestion: () => j.intl.string(j.t.kYmXWF), getAnswer: () => j.intl.string(j.t["+OURPp"]) },
        { getQuestion: () => j.intl.string(j.t["LsX/vb"]), getAnswer: () => j.intl.string(j.t["3TeauK"]) },
        { getQuestion: () => j.intl.string(j.t.fRlnXU), getAnswer: () => j.intl.string(j.t.bTRacj) },
        { getQuestion: () => j.intl.string(j.t["8Mu5Q9"]), getAnswer: () => j.intl.string(j.t["2T5iPo"]) },
        { getQuestion: () => j.intl.string(j.t["6EN+TZ"]), getAnswer: () => j.intl.string(j.t.NZax1u) },
        { getQuestion: () => j.intl.string(j.t.f5B4EW), getAnswer: () => j.intl.string(j.t.Aje8Pb) },
    ],
    u7 = function (e) {
        let { className: t } = e,
            [i, n] = g.useState(null);
        return (0, c.jsxs)("div", {
            className: ni()(u6.iE, t),
            children: [
                (0, c.jsx)(E.D, { className: u6.R_, variant: "heading-xxl/bold", children: j.intl.string(j.t.HPJ6Nj) }),
                (0, c.jsx)("ul", {
                    className: u6.p_,
                    children: u8.map((e, t) => {
                        let s = i === t;
                        return (0, c.jsxs)(
                            "div",
                            {
                                className: u6.Aw,
                                children: [
                                    (0, c.jsxs)(t8.D, {
                                        className: ni()(u6.k7, { [u6.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, c.jsx)(z.E, {
                                                className: u6.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, c.jsx)(u4.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: u6.q4,
                                                  })
                                                : (0, c.jsx)(nM.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: u6.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, c.jsx)(z.E, {
                                            className: u6.ZF,
                                            color: "text-default",
                                            variant: "text-md/normal",
                                            children: e.getAnswer(),
                                        }),
                                ],
                            },
                            t,
                        );
                    }),
                }),
            ],
        });
    };
var u9 = i(462887),
    de = i(933832),
    dt = i(789645),
    di = i(116891),
    dn = i(537532);
let ds = [
    {
        getPerkHeading: () => j.intl.string(j.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => tk.TG[A.TVA.NONE].limits.emoji,
        getTier1Value: () => tk.TG[A.TVA.TIER_1].limits.emoji,
        getTier2Value: () => tk.TG[A.TVA.TIER_2].limits.emoji,
        getTier3Value: () => tk.TG[A.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => tk.TG[A.TVA.NONE].limits.stickers,
        getTier1Value: () => tk.TG[A.TVA.TIER_1].limits.stickers,
        getTier2Value: () => tk.TG[A.TVA.TIER_2].limits.stickers,
        getTier3Value: () => tk.TG[A.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => tk.TG[A.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => tk.TG[A.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => tk.TG[A.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => tk.TG[A.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: tk.TG[A.TVA.NONE].limits.screenShareQualityResolution,
                framerate: tk.TG[A.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: tk.TG[A.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: tk.TG[A.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, di.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: tk.TG[A.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.zZ6Rdi, {
                resolution: (0, di.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: tk.TG[A.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: tk.TG[A.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: tk.TG[A.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: tk.TG[A.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.w1gmLt, { bitrate: tk.TG[A.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: tk.TG[A.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: tk.TG[A.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: tk.TG[A.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            j.intl.formatToPlainString(j.t.pIn7Af, { size: tk.TG[A.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => j.intl.string(j.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => tk.TG[A.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => tk.TG[A.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => tk.TG[A.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => tk.TG[A.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.qDqUME),
        getPerkPreviewLightTheme: () => i(970770),
        getPerkPreviewDarkTheme: () => i(416378),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.uwqgbu),
        getPerkPreviewLightTheme: () => i(243580),
        getPerkPreviewDarkTheme: () => i(975940),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.zxsDxc),
        getPerkPreviewLightTheme: () => i(435748),
        getPerkPreviewDarkTheme: () => i(978380),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => j.intl.string(j.t["2TNS3n"]),
        getTier3Value: () => j.intl.string(j.t["l+S46U"]),
    },
    {
        getPerkHeading: () => j.intl.string(j.t["bHa+Ee"]),
        getPerkPreviewLightTheme: () => i(329312),
        getPerkPreviewDarkTheme: () => i(800120),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => j.intl.string(j.t.QV6MZQ),
        getPerkPreviewLightTheme: () => i(463384),
        getPerkPreviewDarkTheme: () => i(481344),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function dl(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === A.TVA.NONE ? "text-muted" : "text-strong",
        l = n === A.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, c.jsxs)("th", {
        className: ni()(dn.PG, i),
        scope: "col",
        children: [
            (0, c.jsx)(E.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, c.jsx)(z.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: j.intl.format(j.t["pob/cL"], { subscriptions: A.M2T[n] }),
                }),
        ],
    });
}
function dr(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = ni()(dn.Jk, { [dn.I$]: s });
        t = s
            ? (0, c.jsx)(de.A, { size: "md", color: "currentColor", className: e })
            : (0, c.jsx)(dt.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, c.jsx)(z.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, c.jsx)("td", { className: ni()(dn.xR, i), children: t });
}
function da(e) {
    let { currentTier: t } = e,
        i = (function (e) {
            switch (e) {
                case A.TVA.NONE:
                case A.TVA.TIER_1:
                    return A.TVA.TIER_2;
                case A.TVA.TIER_2:
                case A.TVA.TIER_3:
                    return A.TVA.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == i
        ? null
        : (0, c.jsx)("div", {
              className: ni()(dn.ER, { [dn.GH]: i === A.TVA.TIER_2, [dn.z5]: i === A.TVA.TIER_3 }),
              children: (0, c.jsx)(z.E, {
                  className: dn.uQ,
                  color: "text-overlay-light",
                  variant: "text-xs/bold",
                  children: t === A.TVA.TIER_3 ? j.intl.string(j.t.d849Up) : j.intl.string(j.t.dZeX1z),
              }),
          });
}
function du(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = g.useRef(null);
    return (0, c.jsxs)("tr", {
        className: dn.__invalid_tableRow,
        children: [
            (0, c.jsx)("th", {
                className: ni()(dn.xR, dn.uB),
                scope: "row",
                children: (0, c.jsx)(t8.D, {
                    className: ni()(dn.VC, dn.xR, dn.Rk),
                    onFocus: i,
                    onBlur: n,
                    onMouseEnter: i,
                    onMouseLeave: n,
                    children: (0, c.jsx)(rU.Y, {
                        targetElementRef: a,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, c.jsx)("img", {
                                className: dn.Mz,
                                src: (0, u9.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, c.jsx)(z.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, c.jsx)(dr, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, c.jsx)(dr, { value: l.getTier1Value() }),
            (0, c.jsx)(dr, { value: l.getTier2Value() }),
            (0, c.jsx)(dr, { value: l.getTier3Value() }),
        ],
    });
}
let dd = function (e) {
    let t = (0, uc.Ay)(),
        [i, n] = g.useState(null),
        { className: s, guild: l, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, c.jsxs)("div", {
        className: s,
        children: [
            !r &&
                (0, c.jsx)(E.D, {
                    className: dn.R_,
                    variant: "heading-xxl/extrabold",
                    children: j.intl.string(j.t["9GGb9k"]),
                }),
            (0, c.jsxs)("div", {
                className: dn.wY,
                children: [
                    null != l && (0, c.jsx)(da, { currentTier: l.premiumTier }),
                    (0, c.jsxs)("table", {
                        className: dn.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, c.jsx)("thead", {
                                children: (0, c.jsxs)("tr", {
                                    className: dn.__invalid_tableRow,
                                    children: [
                                        (0, c.jsx)(dl, { className: dn.VC, children: j.intl.string(j.t.F5MY0k) }),
                                        !a && (0, c.jsx)(dl, { tier: A.TVA.NONE, children: j.intl.string(j.t.mx8j2m) }),
                                        (0, c.jsx)(dl, { tier: A.TVA.TIER_1, children: j.intl.string(j.t.nzXtaS) }),
                                        (0, c.jsx)(dl, { tier: A.TVA.TIER_2, children: j.intl.string(j.t["h33/uW"]) }),
                                        (0, c.jsx)(dl, { tier: A.TVA.TIER_3, children: j.intl.string(j.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, c.jsx)("tbody", {
                                className: dn.__invalid_tableBody,
                                children: ds.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, c.jsx)(
                                              du,
                                              {
                                                  isFocused: l,
                                                  handleFocus: function () {
                                                      n(s);
                                                  },
                                                  handleRowBlur: o,
                                                  theme: t,
                                                  row: e,
                                                  hideTier0: a,
                                              },
                                              s,
                                          )
                                        : null;
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var dc = i(338548),
    dg = i(776096),
    dm = i(711014),
    dA = i(178368),
    dh = i(682577),
    dE = i(866323),
    dS = i(530005),
    dT = i(443865),
    dx = i(980707),
    dp = i(473145);
function df(e) {
    let {
            guildBoostSlot: t,
            onClose: n,
            hasCancelableGuildBoostSlot: s,
            premiumSubscription: l,
            onSelect: r,
            fractionalState: a,
        } = e,
        u = {
            transfer: {
                label: null != t.premiumGuildSubscription ? j.intl.string(j.t["PR0n//"]) : j.intl.string(j.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? j.intl.string(j.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: j.intl.string(j.t.twFU3R), subtext: s ? null : j.intl.string(j.t.oQ9lOh), disabled: !s },
            uncancel: { label: j.intl.string(j.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (l.status) {
        case A.Dmq.PAST_DUE:
            (u.cancel.disabled = !0), (u.cancel.subtext = j.intl.string(j.t.WnL6DV)), (u.uncancel.disabled = !0);
            break;
        case A.Dmq.PAUSE_PENDING:
        case A.Dmq.PAUSED:
            a === tk.xc.NONE &&
                ((u.transfer.disabled = !0),
                (u.transfer.subtext = j.intl.string(j.t.LiLRRT)),
                (u.cancel.subtext = j.intl.string(j.t["1ywaWL"])),
                (u.cancel.disabled = !0),
                (u.uncancel.disabled = !0));
    }
    let d = g.useMemo(
        () =>
            l.isPausedOrPausePending && a === tk.xc.NONE
                ? (0, c.jsx)(e0.Dr, {
                      id: "manage-subscription",
                      label: j.intl.string(j.t.obRG6Y),
                      action: () => (0, t9.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: dT.x,
                      leadingAccessory: { type: "icon", icon: dT.x },
                  })
                : null,
        [a, l],
    );
    return (0, c.jsxs)(dx.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": j.intl.string(j.t.ogxXGq),
        onClose: n,
        children: [
            (0, c.jsx)(e0.Dr, {
                id: "apply",
                label: u.transfer.label,
                subtext: u.transfer.subtext,
                action: function () {
                    (0, si.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 724624));
                        return (i) =>
                            (0, c.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: A.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: u.transfer.disabled,
            }),
            (0, dp.I5)(t)
                ? (0, c.jsx)(e0.Dr, {
                      id: "uncancel",
                      label: u.uncancel.label,
                      subtext: u.uncancel.subtext,
                      action: function () {
                          (0, si.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 342744));
                              return (i) => (0, c.jsx)(e, { ...i, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: u.uncancel.disabled,
                  })
                : (0, c.jsx)(e0.Dr, {
                      id: "cancel",
                      label: u.cancel.label,
                      subtext: u.cancel.subtext,
                      action: function () {
                          (0, si.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 983511));
                              return (i) => (0, c.jsx)(e, { ...i, guildBoostSlot: t });
                          });
                      },
                      disabled: u.cancel.disabled,
                      color: "danger",
                  }),
            d,
        ],
    });
}
var dN = i(545934),
    d_ = i(496431);
let dI = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, d_.A)(i);
    return (0, c.jsx)(z.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, nl.uN)(n, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var dC = i(759692);
let db = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, c.jsx)("div", {
        className: ni()(dC.h4, t, { [dC.K2]: s }),
        children: (0, c.jsx)("img", {
            className: ni()(dC.Sl, n, { [dC.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var dv = i(743552);
let dy = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, c.jsxs)("div", {
        className: ni()(dv.sn, t),
        children: [
            s
                ? (0, c.jsx)("img", { className: ni()(dv.$J, dv.qX), src: i(728707), alt: "" })
                : (0, c.jsx)(db, { className: dv.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, c.jsx)("img", { className: dv.De, src: i(438807), alt: "" }),
        ],
    });
};
var dj = i(548118),
    dO = i(906199),
    dR = i(944304),
    dD = i(864310),
    dL = i(310918);
let dP = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, a_.bG)([sc.A], () => sc.A.getGuild(i), [i]),
        l = (0, dD.A)(s?.id).total;
    return null == s
        ? (0, c.jsx)("div", {
              className: ni()(t, dL.bo),
              children: (0, c.jsx)("div", {
                  className: dL.$g,
                  children: (0, c.jsx)(z.E, { variant: "text-lg/bold", children: j.intl.string(j.t["6Kwwuo"]) }),
              }),
          })
        : (0, c.jsxs)("div", {
              className: ni()(t, dL.bo),
              children: [
                  (0, c.jsx)(dj.Ay, { className: dL.__invalid_guildIcon, guild: s, size: dj.Ay.Sizes.LARGER }),
                  (0, c.jsxs)("div", {
                      className: dL.$g,
                      children: [
                          (0, c.jsx)(z.E, { variant: "text-lg/bold", children: s.name }),
                          (0, c.jsxs)("div", {
                              className: dL.TZ,
                              children: [
                                  (0, c.jsx)(uY._, {
                                      color: iZ.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: dL.Me,
                                  }),
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: j.intl.format(j.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, c.jsx)("div", { className: dL.me }),
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, dp.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, c.jsx)(dR.A, {
                            guild: s,
                            analyticsLocation: {
                                page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: A.ZSU.BUTTON_CTA,
                                objectType: A.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: l_.$n.Sizes.MEDIUM,
                            color: l_.$n.Colors.PRIMARY,
                            buttonText: j.intl.string(j.t.aBHecF),
                        })
                      : (0, c.jsx)(p.$, {
                            variant: "secondary",
                            text: j.intl.string(j.t.KLOhbO),
                            onClick: () => {
                                (0, tP.default)(),
                                    (0, dO.K4)({
                                        guildId: s.id,
                                        location: { section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var dG = i(20230);
function dM(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            showAltText: n,
            isCanceled: s,
            premiumSubscription: l,
            fractionalPremiumInfo: r,
        } = e,
        a = g.useMemo(() => {
            if (s) {
                let e = l.currentPeriodEnd;
                return (
                    l.isPausedForFractionalPremium && (e = r.endsAt.toDate()), j.intl.format(j.t.Z4ULRD, { date: e })
                );
            }
            let e = null != i.premiumGuildSubscription ? aq.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = g.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === A.TVA.NONE) return "";
                    let t = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: tk.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: tk.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: tk.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: tk.TG[e].limits.screenShareQualityResolution,
                            framerate: tk.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: tk.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: tk.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: tk.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= A.TVA.TIER_2 && (t.push(j.intl.string(j.t.SztbtN)), t.push(j.intl.string(j.t["3GK91n"]))),
                        e >= A.TVA.TIER_3 && t.push(j.intl.string(j.t["XUUJd+"]));
                    let i = t[Math.floor(Math.random() * t.length)];
                    return j.intl.format(j.t["/dOAmQ"], { perk: i });
                })(t),
            [t],
        ),
        u = (0, dE.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === A.TVA.NONE
        ? (0, c.jsx)("div", {
              className: dG.xm,
              children: (0, c.jsx)(z.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, c.jsx)(dh.animated.div, {
                  style: e,
                  className: dG.xm,
                  children: (0, c.jsx)(z.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function dU(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, a_.bG)([f.Ay], () => f.Ay.useReducedMotion),
        o = g.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = g.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, dp.I5)(i),
        m = (0, uQ.A)(),
        A = g.useRef(null);
    return (0, c.jsxs)("div", {
        className: dG.PW,
        children: [
            (0, c.jsxs)("div", {
                className: dG.$U,
                children: [
                    (0, c.jsx)(dy, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, c.jsx)("div", {
                        className: dG.vh,
                        children:
                            null != o && u && !d
                                ? (0, c.jsx)(dI, { className: dG.xm, cooldown: o.getTime() })
                                : (0, c.jsx)(dM, {
                                      guildTier: t,
                                      guildBoostSlot: i,
                                      showAltText: l,
                                      isCanceled: d,
                                      premiumSubscription: n,
                                      fractionalPremiumInfo: m,
                                  }),
                    }),
                    (0, c.jsx)(rU.Y, {
                        targetElementRef: A,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, c.jsx)(df, {
                                onClose: t,
                                guildBoostSlot: i,
                                premiumSubscription: n,
                                hasCancelableGuildBoostSlot: s,
                                fractionalState: m.fractionalState,
                            });
                        },
                        position: "right",
                        align: "center",
                        children: (e) =>
                            (0, c.jsx)(t8.D, {
                                ...e,
                                innerRef: A,
                                "aria-label": j.intl.string(j.t.PdRCRg),
                                className: dG.oU,
                                children: (0, c.jsx)(dS.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, c.jsx)("div", { className: dG.eX }),
        ],
    });
}
function dV(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, a_.bG)([sc.A], () => sc.A.getGuild(t), [t]);
    return (0, c.jsxs)("div", {
        className: dG.ag,
        children: [
            (0, c.jsx)(dP, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, c.jsx)(
                    dU,
                    {
                        guildTier: r?.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: n,
                        hasCancelableGuildBoostSlot: s,
                        showAltText: l,
                        isLastGuildBoostSlot: t === i.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function dk(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, a_.bG)([sc.A], () => sc.A.getGuild(t), [t]),
        l = aq.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > aq.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = dN.A.createFromServer(
        {
            id: aq.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, c.jsxs)("div", {
        className: dG.ag,
        children: [
            (0, c.jsx)(dP, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, c.jsx)(
                    dU,
                    {
                        guildTier: s?.premiumTier,
                        guildBoostSlot: r,
                        premiumSubscription: n,
                        hasCancelableGuildBoostSlot: !1,
                        showAltText: !1,
                        isLastGuildBoostSlot: t === i.length - 1,
                    },
                    t,
                ),
            ),
        ],
    });
}
function dw(e) {
    let { appliedGuildBoosts: t, premiumSubscription: i } = e,
        n = g.useMemo(() => {
            let e = {};
            return (
                t.forEach((t) => {
                    let i = t.guildId;
                    i in e || (e[i] = []), e[i].push(t);
                }),
                e
            );
        }, [t]);
    return null == i || 0 === t.length
        ? null
        : (0, c.jsxs)("div", {
              className: dG.iE,
              children: [
                  (0, c.jsx)("div", {
                      className: dG.kL,
                      children: aq.default
                          .keys(n)
                          .map((e) =>
                              (0, c.jsx)(dk, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, c.jsx)("div", { className: dG.vK }),
              ],
          });
}
function dF(e) {
    let { guildBoostSlots: t, premiumSubscription: i } = e,
        [n, s] = g.useState(!1);
    g.useEffect(() => {
        let e = -1;
        return (
            null != i &&
                (e = setInterval(() => {
                    s((e) => !e);
                }, 3e3)),
            () => {
                clearInterval(e);
            }
        );
    }, [i]);
    let { boostsByGuildId: l, numActiveGuildBoostSlots: r } = g.useMemo(() => {
        let e = 0,
            i = {};
        return (
            Object.keys(t).forEach((n) => {
                let s = t[n];
                if ((!(0, dp.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > rw.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, c.jsxs)("div", {
        className: dG.iE,
        children: [
            (0, c.jsx)("div", {
                className: dG.kL,
                children: aq.default
                    .keys(l)
                    .map((e) =>
                        (0, c.jsx)(
                            dV,
                            {
                                guildId: e,
                                guildBoostSlotRecords: l[e],
                                premiumSubscription: i,
                                hasCancelableGuildBoostSlot: a,
                                showAltText: n,
                            },
                            e,
                        ),
                    ),
            }),
            (0, c.jsx)("div", { className: dG.vK }),
        ],
    });
}
var dB = i(461546);
let dz = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, c.jsxs)("div", {
        className: dB.iE,
        children: [
            (0, c.jsx)("div", {
                className: dB.bj,
                children: (0, c.jsx)("img", { alt: "", className: dB.KV, src: i(742885) }),
            }),
            (0, c.jsxs)("div", {
                className: dB.D7,
                children: [
                    (0, c.jsx)(E.D, {
                        variant: "display-md",
                        className: dB.R_,
                        children: (function (e) {
                            let {
                                hasGuildBoostSlots: t,
                                hasAppliedGuildBoosts: i,
                                hasBoostPerk: n,
                                canAddBoosts: s,
                            } = e;
                            return s
                                ? t
                                    ? n && !i
                                        ? j.intl.format(j.t.s9zQyG, {})
                                        : j.intl.format(j.t.Rb8Jhs, {})
                                    : j.intl.string(j.t["2rh0by"])
                                : j.intl.format(j.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: s, hasAppliedGuildBoosts: n, canAddBoosts: l }),
                    }),
                    (0, c.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: dB.Mz,
                        children: (0, c.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var dX = i(725538),
    dY = i(168482);
function dH() {
    return (0, c.jsxs)("div", {
        className: dX.iE,
        children: [
            (0, c.jsx)("img", { className: dX.Kk, alt: "", src: dY }),
            (0, c.jsxs)("div", {
                className: dX.pq,
                children: [
                    (0, c.jsx)(z.E, { variant: "text-lg/bold", children: j.intl.string(j.t.ZHNSYf) }),
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: j.intl.string(j.t.kCj5ps),
                    }),
                ],
            }),
            (0, c.jsx)(p.$, {
                variant: "secondary",
                text: j.intl.string(j.t.JFlifp),
                onClick: function () {
                    (0, tW.pX)(A.BVt.GUILD_DISCOVERY), (0, tP.default)();
                },
            }),
        ],
    });
}
var dK = i(502572),
    dW = i(123292),
    dZ = i(614820),
    dq = i(987144),
    dQ = i(178015);
let dJ = function () {
    let e = g.useRef(null),
        { analyticsLocations: t } = (0, eR.Ay)(),
        { fractionalState: n } = (0, uQ.A)();
    function s(i) {
        null != e.current && (0, si.closeModal)(e.current),
            (0, dq.g)({
                analyticsLocation: {
                    page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: A.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: A.ZSU.BUTTON_CTA,
                    objectType: A.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: i,
            });
    }
    async function l() {
        e.current = await (0, si.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, c.jsx)(e, { ...t, onSelectGuild: s });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, si.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, dp.Nc)({ fractionalState: n });
    return (0, c.jsxs)("div", {
        className: dQ.iE,
        children: [
            (0, c.jsx)(uY._, { color: iZ.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: dQ.$J }),
            (0, c.jsx)(z.E, {
                className: dQ.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: j.intl.format(j.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, dZ.O)(e),
                            s = (0, c.jsx)("div", {
                                className: dQ.lO,
                                children: (0, c.jsx)(
                                    dW.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, c.jsx)(
                                  dK.A,
                                  {
                                      text: r,
                                      "aria-label": r.toString(),
                                      children: (e) => (0, c.jsx)("span", { ...e, children: s }),
                                  },
                                  t,
                              )
                            : s;
                    },
                }),
            }),
        ],
    });
};
var d$ = i(735310);
let d0 = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, m.bG)([dg.A], () => dg.A.affinities),
        s = (0, m.bG)([dm.Ay], () => dm.Ay.getFlattenedGuildIds()),
        l = g.useMemo(() => {
            let e = n.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < s.length && !(e.length >= 3); t++) {
                let i = s[t];
                e.includes(i) || e.push(i);
            }
            return e;
        }, [n, s]);
    return 0 === l.length
        ? null
        : (0, c.jsxs)("div", {
              className: d$.iE,
              children: [
                  t &&
                      (0, c.jsx)(E.D, {
                          variant: "heading-lg/semibold",
                          className: d$.wx,
                          children: j.intl.string(j.t.r90Wgo),
                      }),
                  l.map((e) => (0, c.jsx)(dP, { className: d$.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, c.jsx)(dJ, {}),
              ],
          });
};
var d1 = i(773447);
let d2 = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: s,
        } = e,
        { subtitle: l, flavor: r } = (function (e) {
            let {
                hasAppliedGuildBoosts: t,
                hasBoostPerk: i,
                hasGuildAffinitiesOrInGuild: n,
                subscriptionIsPausedOrPausePending: s,
            } = e;
            if (s)
                return {
                    flavor: j.intl.format(j.t.doslJu, {
                        onClick: () => (0, t9.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!n) return { subtitle: j.intl.string(j.t.oiWYAc) };
            if (t)
                return {
                    subtitle: j.intl.string(j.t.W5rDjW),
                    flavor: j.intl.format(j.t.cUHcaQ, {
                        helpdeskArticle: eS.A.getArticleURL(A.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = tk.hd[tk.gD.PREMIUM_MONTH_GUILD],
                r = rw.Ay.getDefaultPrice(l.id, i),
                a = (0, aW.CE)((0, aW.$g)(r.amount, r.currency), l.interval, l.intervalCount);
            return {
                subtitle: i ? j.intl.string(j.t.bhPzXR) : j.intl.string(j.t.Zs9h9Z),
                flavor: j.intl.formatToPlainString(j.t.PGgTdA, { monthlyGuildBoostPrice: a }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: s,
        });
    return (0, c.jsxs)("div", {
        className: d1.i,
        children: [
            (0, c.jsx)(E.D, { variant: "heading-lg/bold", className: d1.V, children: l }),
            null != r && (0, c.jsx)(z.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var d3 = i(724624),
    d5 = i(983511),
    d4 = i(342744),
    d6 = i(87719),
    d8 = i(439312);
function d7(e) {
    let {
            guildBoostSlot: t,
            isCancellable: i,
            onCancel: n,
            onUncancel: s,
            premiumSubscription: l,
            useReducedMotion: r,
            fractionalState: a,
        } = e,
        o = g.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, dp.I5)(t),
        d = l?.isPaused === !0 && a === tk.xc.NONE,
        m = j.intl.string(j.t.mOWsF1);
    return (0, c.jsxs)(
        "li",
        {
            className: d8.Hp,
            children: [
                (0, c.jsxs)("div", {
                    className: d8.YL,
                    children: [
                        (0, c.jsx)(dy, {
                            className: d8.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: r,
                        }),
                        u && null != l
                            ? (0, c.jsx)(z.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: j.intl.format(j.t.Z4ULRD, { date: l.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, c.jsx)(dI, { cooldown: o.getTime() })
                              : (0, c.jsx)(z.E, {
                                    className: d8.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: j.intl.string(j.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, c.jsxs)("div", {
                    className: d8.E7,
                    children: [
                        i &&
                            !u &&
                            (0, c.jsx)(dK.A, {
                                shouldShow: d,
                                text: m,
                                "aria-label": m.toString(),
                                children: (e) =>
                                    (0, c.jsx)("div", {
                                        className: d8.LB,
                                        children: (0, c.jsx)(dW.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: j.intl.string(j.t.twFU3R),
                                            onClick: () => n(t),
                                            disabled: d,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        u &&
                            (0, c.jsx)(dK.A, {
                                shouldShow: d,
                                text: m,
                                "aria-label": m.toString(),
                                children: (e) =>
                                    (0, c.jsx)("div", {
                                        className: d8.LB,
                                        children: (0, c.jsx)(dW.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: j.intl.string(j.t["2glQNp"]),
                                            onClick: () => s(t),
                                            disabled: d,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                    ],
                }),
            ],
        },
        t.id,
    );
}
function d9(e) {
    (0, si.openModalLazy)(async () => (t) => (0, c.jsx)(d5.default, { ...t, guildBoostSlot: e }));
}
function ce(e) {
    (0, si.openModalLazy)(async () => (t) => (0, c.jsx)(d4.default, { ...t, guildBoostSlotId: e.id }));
}
let ct = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, m.bG)([oA.A], () => oA.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, uQ.A)(),
        o = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
        u = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
        d = a === tk.xc.FP_SUB_PAUSED,
        h = r && !d,
        {
            appliedGuildBoostSlots: S,
            unappliedGuildBoostSlots: T,
            numActiveGuildBoostSlots: x,
            hasCooldownBoosts: N,
            allGuildBoostsAreOnCooldown: _,
        } = g.useMemo(() => {
            let e = [],
                t = [],
                i = 0,
                n = !1,
                l = !0;
            return (
                s.forEach((s) => {
                    !(0, dp.I5)(s) && i++,
                        s.isOnCooldown() ? (n = !0) : (l = !1),
                        null != s.premiumGuildSubscription ? e.push(s) : t.push(s);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: i,
                    hasCooldownBoosts: n,
                    allGuildBoostsAreOnCooldown: l,
                }
            );
        }, [s]),
        I = null != l ? rw.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        C = Math.max(0, I - S.length),
        b = x > I,
        v = I === s.length,
        y = v ? C : 1,
        O = g.useMemo(() => {
            let e = [];
            for (let t = 0; t < y; t++) e.push((0, c.jsx)(db, { className: d8.YA, useReducedMotion: o }, t));
            return e;
        }, [y, o]),
        R = g.useMemo(() => T.find((e) => e.isAvailable()), [T]);
    if (0 === T.length) return null;
    let D = T.length;
    if (
        ((t = v
            ? j.intl.formatToPlainString(_ ? j.t["3DW6Dc"] : j.t["/u15Qc"], { numUnappliedGuildBoostSlots: D })
            : j.intl.formatToPlainString(_ ? j.t["3DW6Dc"] : j.t.BPadnO, { numUnappliedGuildBoostSlots: D })),
        rw.Ay.isPremium(u))
    ) {
        function L(e, t) {
            return (0, c.jsx)(
                t8.D,
                {
                    className: d8.nw,
                    tag: "span",
                    onClick: () => {
                        (0, d6.e)();
                    },
                    children: e,
                },
                t,
            );
        }
        i = _
            ? j.intl.format(j.t.omcpSE, { learnMoreHook: L })
            : j.intl.format(j.t["5mAkVi"], { numUnappliedGuildBoostSlots: D, learnMoreHook: L });
    } else
        i = _
            ? j.intl.string(j.t["8pcUZi"])
            : j.intl.formatToPlainString(j.t.Kaw82o, { numUnappliedGuildBoostSlots: D });
    return (
        (n = r && a === tk.xc.NONE ? j.intl.string(j.t.mOWsF1) : j.intl.string(j.t.xr4m5B)),
        (0, c.jsx)("div", {
            className: d8.iE,
            children: (0, c.jsxs)("div", {
                className: ni()(d8.Qs, [d8.Yq]),
                children: [
                    (0, c.jsxs)("div", {
                        className: d8.wx,
                        children: [
                            (0, c.jsxs)("div", {
                                className: d8.RW,
                                children: [
                                    (0, c.jsx)("div", { className: d8.PS, children: O }),
                                    (0, c.jsxs)("div", {
                                        className: d8.__invalid_headerCopy,
                                        children: [
                                            (0, c.jsx)(E.D, {
                                                className: d8.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, c.jsx)(z.E, {
                                                className: d8.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsx)("div", {
                                className: d8.di,
                                children: (0, c.jsx)(dK.A, {
                                    shouldShow: null == R || h,
                                    text: n,
                                    "aria-label": n.toString(),
                                    children: (e) =>
                                        (0, c.jsx)(p.$, {
                                            variant: "primary",
                                            text: j.intl.string(j.t.BMx1iy),
                                            ...e,
                                            disabled: null == R || h,
                                            onClick:
                                                null != R
                                                    ? () => {
                                                          (0, si.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, c.jsx)(d3.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [R],
                                                                      locationSection: A.JJy.SETTINGS_PREMIUM,
                                                                  }),
                                                          );
                                                      }
                                                    : void 0,
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (!v || N) &&
                        (0, c.jsx)("ul", {
                            className: d8.LU,
                            children: T.map((e) =>
                                (0, c.jsx)(
                                    d7,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: b,
                                        onCancel: d9,
                                        onUncancel: ce,
                                        premiumSubscription: l,
                                        useReducedMotion: o,
                                        fractionalState: a,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                ],
            }),
        })
    );
};
var ci = i(561835);
function cn(e) {
    let { premiumSubscription: t } = e,
        i = (0, m.bG)([dA.A], () => dA.A.boostSlots),
        n = g.useMemo(() => Object.values(i), [i]),
        s = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
        l = rw.Ay.isPremium(s, tk.PremiumTypes.TIER_2),
        r = (0, m.bG)([dg.A], () => dg.A.affinities),
        a = (0, m.bG)([dm.Ay], () => dm.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = g.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        A = d.length > 0,
        h = n.length > d.length,
        E = (0, m.bG)([uq.A], () => uq.A.getCurrentUserAppliedBoosts()),
        { fractionalState: S } = (0, uQ.A)({ forceFetch: !0 }),
        T = s?.isPremiumGroupMember(),
        x = t?.isPausedOrPausePending === !0 && S === tk.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && S === tk.xc.NONE && !T,
        f = l && S === tk.xc.FP_SUB_PAUSED,
        N = S === tk.xc.NONE && !T;
    return (0, c.jsxs)("div", {
        className: ci.GO,
        children: [
            (0, c.jsx)(of.kb, { className: ci.ek }),
            (0, c.jsx)(dz, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: A, hasBoostPerk: f, canAddBoosts: p }),
            N &&
                (0, c.jsx)(d2, {
                    hasAppliedGuildBoosts: A,
                    hasBoostPerk: f,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: x,
                }),
            T && (0, c.jsx)(dc.A, {}),
            !o && (0, c.jsx)(dH, {}),
            t?.isPaused && S !== tk.xc.FP_SUB_PAUSED
                ? (0, c.jsx)(dw, { appliedGuildBoosts: E, premiumSubscription: t })
                : (0, c.jsx)(dF, { guildBoostSlots: i, premiumSubscription: t }),
            (0, c.jsx)(ct, { guildBoostSlots: n, fractionalPremiumState: S }),
            (0, c.jsx)(d0, { canAddBoosts: A && p, canApplyBoosts: h }),
            (0, c.jsx)(dd, { className: ci.e4, hideHeading: !0, hideTier0: !0 }),
            (0, c.jsx)(u5, { cardClassName: ci.KW }),
            (0, c.jsx)(u7, { className: ci.JL }),
        ],
    });
}
var cs = i(527113),
    cl = i(365199),
    cr = i(378102);
function ca(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, dD.A)(t.id);
    return (0, c.jsxs)("div", {
        className: i ?? cr.OA,
        children: [
            (0, c.jsx)(dj.Ay, { className: cr.$f, guild: t, size: dj.Ay.Sizes.MEDIUM }),
            (0, c.jsxs)("div", {
                className: cr.gI,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, c.jsxs)("div", {
                        className: cr.ew,
                        children: [
                            (0, c.jsxs)("div", {
                                className: cr.QW,
                                children: [
                                    (0, c.jsx)(uY._, {
                                        className: cr.Wz,
                                        color: iZ.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== A.TVA.NONE &&
                                (0, c.jsxs)(c.Fragment, {
                                    children: [
                                        (0, c.jsx)("div", { className: cr.zk }),
                                        (0, c.jsx)(z.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, dp.gb)(t.premiumTier, { useLevels: !1 }),
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
function co(e) {
    let { guildId: t } = e,
        i = (0, m.bG)([sc.A], () => sc.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, c.jsxs)("div", {
              className: cr.Nr,
              children: [
                  (0, c.jsx)(ca, { guild: i }),
                  (0, c.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: uY._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, dq.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: A.ZSU.BUTTON_CTA,
                                  objectType: A.AnalyticsObjectTypes.BUY,
                              },
                              guild: i,
                          });
                      },
                  }),
              ],
          });
}
var cu = i(512062);
let cd =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function cc(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = g.useRef(null),
        a = (0, dp.I5)(t),
        o = g.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, uQ.A)(),
        m = g.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === A.TVA.NONE) return "";
                    let i = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: tk.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: tk.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: tk.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: tk.TG[e].limits.screenShareQualityResolution,
                            framerate: tk.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: tk.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: tk.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: tk.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= A.TVA.TIER_2 && (i.push(j.intl.string(j.t.SztbtN)), i.push(j.intl.string(j.t["3GK91n"]))),
                        e >= A.TVA.TIER_3 && i.push(j.intl.string(j.t["XUUJd+"]));
                    let n = 0;
                    for (let e = 0; e < t.length; e++) n = (31 * n + t.charCodeAt(e)) | 0;
                    let s = i[Math.abs(n) % i.length];
                    return j.intl.formatToPlainString(j.t["/dOAmQ"], { perk: s });
                })(i, t.id),
            [i, t.id],
        ),
        h = g.useMemo(() => {
            if ("" !== m) return m;
            let e = null != t.premiumGuildSubscription ? aq.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [m, t.premiumGuildSubscription]),
        E = g.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, c.jsxs)("div", {
        className: ni()(cu.iq, { [cu.Mt]: l }),
        children: [
            (0, c.jsxs)("div", {
                className: cu.kd,
                children: [
                    (0, c.jsx)("img", { alt: "", className: cu.bB, src: cd }),
                    a && null != E
                        ? (0, c.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.Z4ULRD, { date: E }),
                          })
                        : (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(z.E, { variant: "text-sm/medium", color: "text-subtle", children: h }),
                                  u &&
                                      null != o &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)("div", { className: cu.zk }),
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: j.intl.formatToPlainString(j.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != n.trialEndsAt &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)("div", { className: cu.zk }),
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: j.intl.formatToPlainString(j.t.OdPSpk, {
                                                      date: new Date(n.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, c.jsx)(rU.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, c.jsx)(df, {
                        onClose: i,
                        guildBoostSlot: t,
                        premiumSubscription: n,
                        hasCancelableGuildBoostSlot: s,
                        fractionalState: d.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, c.jsx)(t8.D, {
                        innerRef: r,
                        "aria-label": j.intl.string(j.t.PdRCRg),
                        className: cu.Mj,
                        ...e,
                        children: (0, c.jsx)(cl.j, { size: "xs", color: iZ.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function cg(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, m.bG)([sc.A], () => sc.A.getGuild(t), [t]);
    return (0, c.jsxs)("div", {
        className: cu.Nr,
        children: [
            (0, c.jsx)("div", {
                className: cu.MY,
                children:
                    null != l
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(ca, { guild: l, className: cu.OA }),
                                  (0, c.jsx)(p.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, tP.default)(),
                                              (0, dO.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, c.jsx)("div", {
                              className: cu.OA,
                              children: (0, c.jsx)(E.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, c.jsx)(
                    cc,
                    {
                        slot: e,
                        guildTier: l?.premiumTier,
                        premiumSubscription: n,
                        hasCancelableSlots: s,
                        isLast: t === i.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function cm(e) {
    let { guildBoostSlots: t, premiumSubscription: i, pausedAppliedGuildBoosts: n, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = g.useMemo(() => {
            if (s && null != i)
                return {
                    boostsByGuildId: (function (e, t) {
                        let i = {};
                        for (let t of e) t.guildId in i || (i[t.guildId] = []), i[t.guildId].push(t);
                        let n = {};
                        for (let e of Object.keys(i)) {
                            let s = i[e];
                            n[e] = s.map((i) =>
                                dN.A.createFromServer(
                                    {
                                        id: i.id,
                                        subscription_id: t.id,
                                        canceled: !1,
                                        premium_guild_subscription: { id: i.id, guild_id: e },
                                        cooldown_ends_at: null,
                                    },
                                    t,
                                ),
                            );
                        }
                        return n;
                    })(n, i),
                    numActiveSlots: 0,
                };
            let e = 0,
                l = {};
            for (let i of Object.keys(t)) {
                let n = t[i];
                if ((!(0, dp.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > rw.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, c.jsx)("div", {
        className: cu.kR,
        children: aq.default
            .keys(l)
            .map((e) => (0, c.jsx)(cg, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var cA = i(928171);
function ch(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, m.bG)([oA.A], () => oA.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = g.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, dp.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? rw.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === tk.xc.NONE;
    return 0 === l.length
        ? null
        : (0, c.jsxs)("div", {
              className: cA.Nr,
              children: [
                  (0, c.jsxs)("div", {
                      className: cA.MY,
                      children: [
                          (0, c.jsxs)("div", {
                              className: cA._L,
                              children: [
                                  (0, c.jsxs)("div", {
                                      className: cA.MD,
                                      children: [
                                          (0, c.jsx)("img", { alt: "", className: cA.F8, src: cd }),
                                          (0, c.jsx)("div", {
                                              className: ni()(cA.qS, "theme-dark"),
                                              children: (0, c.jsx)("span", { className: cA.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsxs)("div", {
                                      className: cA.Qp,
                                      children: [
                                          (0, c.jsx)(z.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: j.intl.format(j.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, c.jsx)(z.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: j.intl.format(j.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, c.jsx)(dK.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, c.jsx)(p.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: uY._,
                                      text: j.intl.string(j.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, si.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                              return (t) =>
                                                  (0, c.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, dq.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: A.JJy.SETTINGS_PREMIUM,
                                                                      object: A.ZSU.BUTTON_CTA,
                                                                      objectType: A.AnalyticsObjectTypes.BUY,
                                                                  },
                                                                  guild: e,
                                                              });
                                                      },
                                                  });
                                          });
                                      },
                                  }),
                          }),
                      ],
                  }),
                  l.map((e, t) =>
                      (0, c.jsx)(
                          cE,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, dp.I5)(e),
                              isCanceled: (0, dp.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function cE(e) {
    let t,
        { slot: i, isLast: n, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = g.useRef(null),
        u = g.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, c.jsx)(z.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: j.intl.format(j.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, c.jsx)(dI, { cooldown: u.getTime() })
              : (0, c.jsx)(z.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = s || l;
    return (0, c.jsxs)("div", {
        className: ni()(cA.iq, { [cA.Mt]: n }),
        children: [
            (0, c.jsxs)("div", {
                className: cA.kd,
                children: [(0, c.jsx)("img", { alt: "", className: cA.bB, src: cd }), t],
            }),
            d &&
                (0, c.jsx)(rU.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, c.jsxs)(dx.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": j.intl.string(j.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, c.jsx)(e0.Dr, {
                                        id: "cancel-boost",
                                        label: j.intl.string(j.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, si.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, c.jsx)(d5.default, { ...e, guildBoostSlot: i }),
                                                );
                                        },
                                    }),
                                l &&
                                    (0, c.jsx)(e0.Dr, {
                                        id: "uncancel-boost",
                                        label: j.intl.string(j.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, si.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, c.jsx)(d4.default, { ...e, guildBoostSlotId: i.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, c.jsx)(t8.D, {
                            innerRef: o,
                            "aria-label": j.intl.string(j.t["UKOtz+"]),
                            className: cA.Mj,
                            ...e,
                            children: (0, c.jsx)(cl.j, { size: "xs", color: iZ.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var cS = i(942053);
function cT(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = eS.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== tk.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, c.jsxs)("div", {
              className: cS.i,
              children: [
                  (0, c.jsxs)("div", {
                      className: cS.b,
                      children: [
                          (0, c.jsx)(E.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, c.jsx)(z.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, c.jsx)(cm, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, c.jsx)(ch, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var cx = i(917064),
    cp = i(401721);
function cf() {
    return (0, c.jsxs)("div", {
        className: cp.iE,
        children: [
            (0, c.jsx)(E.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, c.jsx)("div", {
                className: cp.kR,
                children: cx.s.map((e, t) => {
                    let i = e.icon;
                    return (0, c.jsxs)(
                        "div",
                        {
                            className: cp.Nr,
                            children: [
                                (0, c.jsx)(i, { className: cp.Kk }),
                                (0, c.jsx)(z.E, {
                                    className: cp.h_,
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
var cN = i(847374),
    c_ = i(232122),
    cI = i(630579);
function cC() {
    let [e, t] = g.useState(null),
        [i, n] = g.useState(null);
    return (0, c.jsxs)("div", {
        className: cI.iE,
        children: [
            (0, c.jsx)(E.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, c.jsx)("ul", {
                className: cI.p_,
                children: c_.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, c.jsxs)(
                        t8.D,
                        {
                            tag: "li",
                            className: ni()(cI.Aw, { [cI.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, c.jsxs)("div", {
                                    className: cI.k7,
                                    children: [
                                        (0, c.jsx)(z.E, {
                                            className: cI.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, c.jsx)(cN.a, {
                                            size: "sm",
                                            color: iZ.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: cI.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, c.jsx)(z.E, {
                                        className: cI.ZF,
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
var cb = i(182859),
    cv = i(853513),
    cy = i(880482);
function cj() {
    let e = eS.A.getArticleURL(A.MVz.GUILD_SUBSCRIPTIONS);
    return (0, c.jsxs)("div", {
        className: cy.wx,
        children: [
            (0, c.jsxs)("div", {
                className: cy.Qs,
                children: [
                    (0, c.jsxs)("div", {
                        className: cy.B5,
                        children: [
                            (0, c.jsx)("img", { alt: "", className: cy.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, c.jsx)(E.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(cv.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, c.jsx)(cb.A, {
                variant: "member",
                className: cy.iO,
                analyticsLocation: {
                    page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: A.JJy.HERO,
                    object: A.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var cO = i(315629),
    cR = i(524170);
function cD() {
    let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser());
    if (null == e || rw.Ay.hasFreeBoosts(e)) return null;
    let t = eS.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ);
    return (0, c.jsxs)(cO.h, {
        color: "nitro-pink",
        className: cR.vK,
        children: [
            (0, c.jsxs)("div", {
                className: cR.nw,
                children: [
                    (0, c.jsx)("img", { alt: "", className: cR.q3, src: cd }),
                    (0, c.jsxs)("div", {
                        className: cR.Tm,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: tk.M4, boostCount: tk.M4 }),
                            }),
                            (0, c.jsxs)("div", {
                                className: cR.xv,
                                children: [
                                    (0, c.jsx)(ry.t, { className: cR.nE }),
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: tk.M4,
                                            boostCount: tk.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)(p.$, {
                variant: "expressive",
                size: "sm",
                icon: ry.t,
                text: j.intl.string(j.t["8x0jKT"]),
                onClick: d6.e,
            }),
        ],
    });
}
var cL = i(738262);
function cP() {
    let e = (0, m.bG)([dg.A], () => dg.A.affinities),
        t = (0, m.bG)([dm.Ay], () => dm.Ay.getFlattenedGuildIds()),
        i = g.useMemo(() => {
            let i = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && i.length < 3; e++) {
                let n = t[e];
                i.includes(n) || i.push(n);
            }
            return i;
        }, [e, t]);
    return 0 === i.length
        ? null
        : (0, c.jsxs)("div", {
              className: cL.i,
              children: [
                  (0, c.jsx)(E.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, c.jsx)("div", { className: cL.k, children: i.map((e) => (0, c.jsx)(co, { guildId: e }, e)) }),
              ],
          });
}
var cG = i(553429);
function cM(e) {
    let { count: t, disabledReason: n } = e,
        s = eS.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ);
    return (0, c.jsxs)(cO.h, {
        color: "nitro-pink",
        className: cG.vK,
        children: [
            (0, c.jsxs)("div", {
                className: cG.nw,
                children: [
                    (0, c.jsxs)("div", {
                        className: cG.MD,
                        children: [
                            (0, c.jsx)("img", { alt: "", className: cG.F8, src: cd }),
                            (0, c.jsx)("div", {
                                className: ni()(cG.qS, "theme-dark"),
                                children: (0, c.jsx)("span", { className: cG.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: cG.Tm,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, c.jsxs)("div", {
                                className: cG.xv,
                                children: [
                                    (0, c.jsx)(ry.t, { className: cG.nE }),
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: tk.M4,
                                            boostCount: tk.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)(dK.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, c.jsx)(p.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: uY._,
                        text: j.intl.string(j.t.BMx1iy),
                        disabled: null != n,
                        onClick: () => {
                            (0, si.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                return (t) =>
                                    (0, c.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, dq.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: A.JJy.SETTINGS_PREMIUM,
                                                        object: A.ZSU.BUTTON_CTA,
                                                        objectType: A.AnalyticsObjectTypes.BUY,
                                                    },
                                                    guild: e,
                                                });
                                        },
                                    });
                            });
                        },
                    }),
            }),
        ],
    });
}
function cU(e) {
    let { premiumSubscription: t } = e,
        i = (0, m.bG)([dA.A], () => dA.A.boostSlots),
        n = g.useMemo(() => Object.values(i), [i]),
        s = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
        l = (0, m.bG)([dg.A], () => dg.A.affinities),
        r = (0, m.bG)([dm.Ay], () => dm.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = g.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, m.bG)([uq.A], () => uq.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, uQ.A)({ forceFetch: !0 }),
        A = s?.isPremiumGroupMember(),
        h = t?.isPausedOrPausePending === !0 && d === tk.xc.NONE,
        E = g.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        S = h ? j.intl.string(j.t.mOWsF1) : E ? void 0 : j.intl.string(j.t.xr4m5B),
        T = g.useMemo(() => {
            if (null == t) return 0;
            let e = rw.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, c.jsxs)("div", {
        className: ci.GO,
        children: [
            (0, c.jsx)(of.kb, { className: ci.ek }),
            (0, c.jsx)(cj, {}),
            (0, c.jsx)(cD, {}),
            T > 0 && (0, c.jsx)(cM, { count: T, disabledReason: S }),
            A && (0, c.jsx)(dc.A, {}),
            !a && (0, c.jsx)(dH, {}),
            (0, c.jsxs)("div", {
                className: ci.C_,
                children: [
                    (0, c.jsx)(cT, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, c.jsx)(cP, {}),
                    (0, c.jsx)(cs.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, c.jsx)(cf, {}),
                    (0, c.jsx)(cC, {}),
                ],
            }),
        ],
    });
}
var cV = i(672140);
let ck = (0, a.E2)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = uZ.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            g.useEffect(() => {
                e2.h.wait(() => {
                    aX.hP(), aX.$o(), (0, uH.CD)(), (0, uK.zS)(null, null, A.tF5.DISCOVERY), (0, uH.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, m.cf)([oA.A], () => ({
                    hasFetchedSubscriptions: oA.A.hasFetchedSubscriptions(),
                    premiumSubscription: oA.A.getPremiumTypeSubscription(),
                })),
                n = (0, uW.Y)(),
                s = (0, m.bG)([om.A], () => om.A.hasFetchedPaymentSources),
                l = (0, m.bG)([uq.A], () => uq.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = g.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, c.jsx)("div", { className: ni()(cV.kL, cV.Lq), children: (0, c.jsx)(aV.y, {}) })
                : (0, c.jsxs)("div", {
                      className: cV.kL,
                      children: [
                          (0, c.jsx)("div", { className: cV.Tp }),
                          (0, c.jsx)("div", {
                              className: cV.Qs,
                              children: e
                                  ? (0, c.jsx)(cU, { premiumSubscription: i })
                                  : (0, c.jsx)(cn, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    cw = (0, a.zZ)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [ck] }),
    cF = (0, a.t_)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [cw],
    }),
    cB = (0, a.i4)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: uY._,
        buildLayout: () => [cF],
    });
var cz = i(153659),
    cX = i(155984),
    cY = i(357758),
    cH = i(262077),
    cK = i(281445),
    cW = i(624479),
    cZ = i(626584),
    cq = i(131607),
    cQ = i(95035),
    cJ = i(196736),
    c$ = i(685743),
    c0 = i(349085),
    c1 = i(342942),
    c2 = i(252589),
    c3 = i(758836),
    c5 = i(49999),
    c4 = i(275695),
    c6 = i(356061);
let c8 = new cZ.A("GameServerSubscriptionsSection");
function c7(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function c9(e, t) {
    return (
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let ge = g.memo(function (e) {
    let { server: t, planOptionBySkuId: i, canUseShopDiscount: n } = e,
        { analyticsLocations: s } = (0, eR.Ay)(),
        l = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, c0.A)(t.gameId, "cover") ?? t.coverUrl;
    g.useEffect(() => {
        (0, uK.ur)(r).catch(() => {});
    }, [r]);
    let [o, u] = (0, cq.kn)([er.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== er.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        h = o9.default.getId() ?? "0",
        { handleCopyServerIp: E, animateCopyIcon: S } = (0, c$.A)(h, t.id, ty.A.GAME_SERVER_PAGE, t.serverIp),
        T = g.useCallback(() => {
            (0, c1.A)({
                provider: cK.X.SHOCKBYTE,
                onAccept: () => {
                    u(c5.i.TAKE_ACTION), E();
                },
            });
        }, [u, E]),
        {
            priceLabel: x,
            dateLabel: f,
            isCanceled: N,
            isDanger: _,
        } = (0, m.bG)(
            [oA.A, ut.A],
            () => {
                let e = null != l ? oA.A.getSubscriptionById(l) : null;
                if (null == e) return { priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    s = !t && null != e.renewalMutations,
                    r = s ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? ut.A.get(r) : null,
                    o = null != a ? i.get(a.skuId) : null,
                    u = n && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? j.intl.formatToPlainString(j.t.AbOLNu, { price: (0, aW.$g)(u, o.priceCurrency) })
                            : null,
                    c = c7(e.currentPeriodEnd);
                return {
                    priceLabel: d,
                    dateLabel: t
                        ? j.intl.formatToPlainString(c4.default["3aEgK6"], { date: c })
                        : s
                          ? j.intl.formatToPlainString(c4.default.KFSA3M, { date: c })
                          : j.intl.formatToPlainString(c4.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || s,
                };
            },
            [l, i, n],
            c9,
        ),
        I = g.useCallback(() => {
            if (null == l) return;
            let e = oA.A.getSubscriptionById(l),
                t = null != e ? c7(e.currentPeriodEnd) : "";
            (0, iq.A)({
                title: j.intl.string(c4.default.TEYPNR),
                subtitle: j.intl.formatToPlainString(c4.default.XR1WrB, { date: t }),
                confirmText: j.intl.string(j.t["cY+Oob"]),
                cancelText: j.intl.string(c4.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        await aX.M2(l, s), await aX.hP();
                    } catch (e) {
                        c8.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [l, s]),
        C = g.useCallback(() => {
            if (null == l) return;
            let e = oA.A.getSubscriptionById(l);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? ut.A.get(t) : null,
                o = null != a ? i.get(a.skuId) : null,
                u = n && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, aW.$g)(u, o.priceCurrency) : "",
                c = c7(e.currentPeriodEnd);
            (0, iq.A)({
                title: j.intl.string(c4.default.o96qbc),
                subtitle: j.intl.formatToPlainString(c4.default["7n6Qq+"], { price: d, date: c }),
                confirmText: j.intl.string(j.t.iIvF2z),
                cancelText: j.intl.string(j.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, uK.ur)(r);
                        let t = e.items;
                        await aX.nV(
                            e,
                            { status: A.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, rw.UC)(t, e.currency),
                            s,
                        ),
                            await aX.hP();
                    } catch (e) {
                        c8.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [l, r, s, i, n]),
        b = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, c.jsxs)("div", {
        className: c6.nM,
        children: [
            (0, c.jsxs)("div", {
                className: c6.M4,
                children: [
                    (0, c.jsxs)("div", {
                        className: c6.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, c.jsx)("img", { className: c6.uP, src: a, alt: "" }),
                            (0, c.jsx)("div", { className: c6.tw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: c6.CR,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            b &&
                                (d
                                    ? (0, c.jsxs)("div", {
                                          className: c6.CQ,
                                          children: [
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, c.jsx)(t8.D, {
                                                  className: c6.cL,
                                                  onClick: E,
                                                  "aria-label": j.intl.string(j.t.OpuAlK),
                                                  children: S
                                                      ? (0, c.jsx)(de.A, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, c.jsx)(cW.T, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, c.jsx)(cQ.A, { onClick: T, children: j.intl.string(c4.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, c.jsxs)("div", {
                className: c6.Rd,
                children: [
                    (0, c.jsxs)("div", {
                        className: c6.Ff,
                        children: [
                            null != x &&
                                (0, c.jsx)(z.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: x,
                                }),
                            null != f &&
                                (_
                                    ? (0, c.jsxs)("div", {
                                          className: c6.ez,
                                          children: [
                                              (0, c.jsx)(nw.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: f,
                                              }),
                                          ],
                                      })
                                    : (0, c.jsx)(z.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: f,
                                      })),
                        ],
                    }),
                    N
                        ? (0, c.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: j.intl.string(j.t.iIvF2z),
                              onClick: C,
                          })
                        : (0, c.jsx)(p.$, {
                              variant: "secondary",
                              size: "sm",
                              text: j.intl.string(j.t["ETE/oC"]),
                              onClick: I,
                          }),
                ],
            }),
        ],
    });
});
function gt(e) {
    let { servers: t } = e,
        i = (0, cJ.H)({ location: "user_settings_subscriptions" }),
        { games: n } = (0, c2.Y)(),
        s = (0, m.bG)([s0.default], () => rw.Ay.canUseShopDiscounts(s0.default.getCurrentUser())),
        l = g.useMemo(() => {
            let e = new Map();
            for (let t of n) for (let i of t.plans ?? []) e.set(i.id, i);
            return e;
        }, [n]);
    g.useEffect(() => {
        let e = [...l.keys()];
        e.length > 0 && (0, uK.jv)(e).catch(() => {});
    }, [l]);
    let r = g.useCallback(() => {
        (0, tP.default)(), (0, tW.pX)(A.BVt.COLLECTIBLES_SHOP_WITH_TAB(c3.G2.GAME_SERVERS));
    }, []);
    return (0, c.jsxs)("div", {
        className: c6.uW,
        children: [
            (0, c.jsxs)("div", {
                className: c6.wx,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: j.intl.string(c4.default.vCzwM7),
                    }),
                    (0, c.jsxs)("div", {
                        className: c6.h_,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.string(c4.default.y85Eg9),
                            }),
                            i &&
                                (0, c.jsx)(cQ.A, {
                                    onClick: r,
                                    children: (0, c.jsx)(z.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: j.intl.string(c4.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)("div", {
                className: c6.p_,
                children: t.map((e) =>
                    (0, c.jsx)(ge, { server: e, planOptionBySkuId: l, canUseShopDiscount: s }, e.id),
                ),
            }),
        ],
    });
}
var gi = i(55766),
    gn = i(696986),
    gs = i(898555);
function gl(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)(E.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, c.jsx)(gn.h, { size: 4 }),
            (0, c.jsx)(z.E, { variant: "text-md/normal", className: gs.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, c.jsx)(gn.h, { size: 24 }),
            (0, c.jsxs)("div", {
                className: gs.Nr,
                children: [
                    (0, c.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: gs.RI }),
                    (0, c.jsxs)("div", {
                        className: gs.FS,
                        children: [
                            (0, c.jsx)(E.D, {
                                variant: "heading-xl/semibold",
                                className: gs.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-md/normal",
                                className: gs.h_,
                                children: j.intl.format(j.t["m+pcOO"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, c.jsx)(p.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: j.intl.string(j.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var gr = i(872351),
    ga = i(9113),
    go = i(599941),
    gu = i(384684),
    gd = i(2242);
let gc = [];
var gg = i(885574),
    gm = i(912851),
    gA = i(497267);
let gh = function (e) {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, c.jsx)(t8.D, {
        onClick: n ? void 0 : i,
        className: gA.x6,
        children: (0, c.jsxs)("div", {
            className: gA.hQ,
            children: [
                n
                    ? (0, c.jsx)(aV.y, { type: aV.y.Type.PULSING_ELLIPSIS, className: gA.__invalid_spinner })
                    : (0, c.jsx)(z.E, { variant: "text-md/medium", className: gA.Pf, children: t }),
                (0, c.jsx)(cN.a, { size: "md", color: "currentColor", className: gA.UE }),
            ],
        }),
    });
};
var gE = i(465932),
    gS = i(543767),
    gT = i(951555),
    gx = i(790284),
    gp = i(636194),
    gf = i(624456),
    gN = i(710144),
    g_ = i(815332),
    gI = i(162093),
    gC = i(960309);
function gb(e) {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, tU.GV)(),
        { analyticsLocations: a } = (0, eR.Ay)(ty.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, i] = g.useState(!1),
                [n, s] = g.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return i(!0), await aX.M2(t, e), !0;
                    } catch (e) {
                        s(e);
                    } finally {
                        i(!1);
                    }
                },
                error: n,
                submitting: t,
            };
        })(a);
    async function m() {
        (await o(s.id)) && l();
    }
    let A = n.role_benefits.benefits.filter((e) => e.ref_type === gd.bN.CHANNEL),
        h = n.role_benefits.benefits.filter((e) => e.ref_type === gd.bN.INTANGIBLE),
        E = ns()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        S = j.intl.formatToPlainString(j.t.KsMRP5, {
            numChannels: A.length,
            numAdditionalBenefits: h.length,
            subscriptionEndDate: E,
        });
    return (0, c.jsx)(st.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: j.intl.string(j.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: j.intl.string(j.t.F6lUDF), onClick: m, loading: d },
        ],
        title: j.intl.string(j.t.O6l5tM),
        subtitle: S,
        onClose: l,
        children: (0, c.jsxs)(F.B, {
            gap: 8,
            children: [
                null != u ? (0, c.jsx)(nV.w, { type: "critical", children: u.message }) : null,
                (0, c.jsx)(gI.x, { listingId: n.id, guildId: i.guild_id, className: gC.P }),
            ],
        }),
    });
}
var gv = i(319225),
    gy = i(746080),
    gj = i(74669);
function gO(e) {
    let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
    return (0, c.jsxs)("div", {
        className: gj.L0,
        children: [
            (0, c.jsxs)("div", {
                className: gj.a5,
                children: [
                    (0, c.jsx)(E.D, { variant: "heading-deprecated-12/semibold", className: gj.HU, children: t }),
                    n &&
                        (0, c.jsx)(n6.m, {
                            text: s,
                            children: (0, c.jsx)(gg.m, { size: "xs", color: "currentColor", className: gj.Mo }),
                        }),
                ],
            }),
            (0, c.jsx)(E.D, { variant: "heading-xl/semibold", className: gj.sx, children: i }),
        ],
    });
}
function gR(e) {
    let { subscription: t } = e,
        { analyticsLocations: i } = (0, eR.Ay)(),
        [n] = (0, gS.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: i,
            analyticsLocation: ty.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        s = (0, m.bG)([om.A], () => om.A.hasFetchedPaymentSources);
    return null != n && s ? (0, c.jsx)(gT.A, { subscription: t, currentInvoicePreview: n }) : (0, c.jsx)(aV.y, {});
}
function gD(e) {
    let {
        isTrial: t,
        isCancelled: i,
        isResubscribing: n,
        shouldHideRoleSubscriptionEntryPoints: s,
        onCancelSubscriptionClick: l,
        onResubscribeClick: r,
        onChangePlanClick: a,
    } = e;
    return i && (t || s)
        ? null
        : (0, c.jsx)(tH.D, {
              label: j.intl.string(j.t["4neDM+"]),
              children: (0, c.jsx)("div", {
                  className: gj.__invalid_rowButtons,
                  children: i
                      ? (0, c.jsx)(p.$, { variant: "primary", text: j.intl.string(j.t.y3mAE4), onClick: r, loading: n })
                      : (0, c.jsxs)(c.Fragment, {
                            children: [
                                !t && !s && (0, c.jsx)(gh, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                (0, c.jsx)(gh, { label: j.intl.string(j.t.Dx0lF7), onClick: l }),
                            ],
                        }),
              }),
          });
}
let gL = function (e) {
    let { subscription: t } = e,
        {
            listing: i,
            groupListing: n,
            guild: s,
            expanded: l,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, gf.M)(e),
                i = (0, m.bG)([gp.A], () => gp.A.getSubscriptionListingForPlan(t)),
                n = (0, m.bG)([gp.A], () =>
                    null != i ? gp.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                ),
                s = (0, m.bG)([sc.A], () => sc.A.getGuild(n?.guild_id)),
                [l, r] = g.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, go.XE)();
            g.useEffect(() => {
                l && null != s && null == gp.A.getSubscriptionSettings(s.id) && a(s.id);
            }, [l, s, a]);
            let o =
                null == i
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              i = ns()(t.currentPeriodEnd).format("M/D/YY"),
                              n = null != t.price ? (0, aW.$g)(t.price, t.currency) : "",
                              s = ns()(t.createdAt).format("M/D/YY"),
                              l = t.status === A.Dmq.CANCELED,
                              r = t.status === A.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: s,
                              nextRenewalDate: i,
                              nextRenewalLabel: l ? j.intl.string(j.t.UAfot2) : j.intl.string(j.t.CVjLcM),
                              subscriptionPrice: n,
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
                listing: i,
                groupListing: n,
                subscriptionInfo: o,
            };
        })(t),
        [u, d] = g.useState(!1),
        h = (0, tU.GV)(),
        { analyticsLocations: E } = (0, eR.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: S } = (0, gE.MH)(s?.id),
        T = t?.isPurchasedViaAppleGeneric;
    if (null == n || null == i || null == a) return null;
    async function x() {
        try {
            d(!0), await aX.QP(t, E), (0, gv.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
        } finally {
            d(!1);
        }
    }
    let {
            isCancelled: p,
            isPastDue: f,
            subscriptionPrice: N,
            memberSince: _,
            nextRenewalDate: I,
            nextRenewalLabel: C,
            isTrial: b,
        } = a,
        v = i.soft_deleted || null == s || T;
    return (0, c.jsxs)("div", {
        className: gj.kL,
        children: [
            (0, c.jsx)(gN.A, {
                onClick: r,
                className: gj.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: n } = e;
                    return (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != s && (0, c.jsx)(dj.Ay, { guild: s, active: !0, size: dj.Ay.Sizes.MEDIUM }),
                            (0, c.jsxs)("div", {
                                className: gj.if,
                                children: [
                                    (0, c.jsx)(z.E, {
                                        variant: "text-md/medium",
                                        className: gj.J5,
                                        children: null != s ? s.name : j.intl.string(j.t["He+cmd"]),
                                    }),
                                    (0, c.jsxs)("div", {
                                        className: gj.xp,
                                        children: [
                                            (0, c.jsx)(z.E, {
                                                variant: "text-sm/normal",
                                                className: gj.KR,
                                                children: i.name,
                                            }),
                                            p
                                                ? (0, c.jsx)(e9.Lp, { text: j.intl.string(j.t["7uFZGt"]) })
                                                : b
                                                  ? (0, c.jsx)(e9.Lp, {
                                                        text: j.intl.string(j.t["6anton"]),
                                                        color: iZ.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : f
                                                    ? (0, c.jsx)(n6.m, {
                                                          text: j.intl.string(j.t.eSuJE2),
                                                          children: (0, c.jsx)("div", {
                                                              children: (0, c.jsx)(e9.Lp, {
                                                                  className: gj.qc,
                                                                  text: j.intl.string(j.t.NrRwIl),
                                                                  color: iZ.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            T
                                                ? (0, c.jsx)(n6.m, {
                                                      text: j.intl.string(j.t.nv1IqK),
                                                      children: (0, c.jsx)("div", {
                                                          children: (0, c.jsx)(e9.Lp, {
                                                              text: j.intl.string(j.t["sBl3X/"]),
                                                              color: iZ.A.colors.BACKGROUND_MOD_MUTED.css,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsx)(t8.D, {
                                onClick: n(r),
                                "aria-label": j.intl.string(j.t.e5eQOy),
                                "aria-controls": h,
                                "aria-expanded": l,
                                focusProps: { ringTarget: t },
                                children: (0, c.jsx)(cN.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ni()(gj.D6, { [gj.S7]: l }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != n && l
                ? (0, c.jsxs)("div", {
                      id: h,
                      children: [
                          (0, c.jsx)("div", { className: gj.yF }),
                          (0, c.jsx)(g_.A, { groupListingId: n.id, subscription: t, className: gj.kE }),
                          (0, c.jsxs)("div", {
                              className: gj.Zx,
                              children: [
                                  (0, c.jsx)(gO, { label: C, value: I }),
                                  (0, c.jsx)(gO, {
                                      label: j.intl.string(j.t.dltUMH),
                                      value: N,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, c.jsx)(gO, { label: j.intl.string(j.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, c.jsx)(gn.h, { size: 16 }),
                          !p &&
                              !T &&
                              (0, c.jsx)(tH.D, {
                                  label: j.intl.string(j.t.wmMFvA),
                                  children: (0, c.jsx)(gR, { subscription: t }),
                              }),
                          !v &&
                              (0, c.jsx)(gD, {
                                  isTrial: b,
                                  isCancelled: p,
                                  isResubscribing: u,
                                  shouldHideRoleSubscriptionEntryPoints: S,
                                  onCancelSubscriptionClick: function () {
                                      if (null != s && null != n && null != i) {
                                          var e;
                                          (e = { groupListing: n, listing: i, subscription: t }),
                                              (0, si.openModal)((t) => (0, c.jsx)(gb, { ...t, ...e }));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != s &&
                                          ((0, tW.pX)(A.BVt.CHANNEL(s.id, gy.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tP.default)(),
                                          gm.A.show(
                                              A.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              j.intl.string(j.t.DvbaM4),
                                              () => {
                                                  gx.A.setState({ subsection: eN.nR }),
                                                      (0, t9.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL);
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
var gP = i(175880);
let gG = function (e) {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, m.bG)([gu.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [gu.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? gd.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? gd.M_.NONE
                                  : gd.M_.IN_SUBSCRIPTION_SERVER;
                        })([gu.A]),
                    ) === gd.M_.SUBSCRIBED,
                i = (0, m.bG)([oA.A], () => oA.A.getActiveGuildSubscriptions()),
                n = g.useRef(!1);
            return (
                g.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = oA.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !oA.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), aX.hP());
                }, [e, t]),
                i ?? gc
            );
        })(),
        { loading: n } = (0, go.eb)(i);
    return ((0, ga.A)(aQ.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, c.jsx)(aV.y, {})
        : 0 === i.length
          ? null
          : (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(p.$, { text: j.intl.string(j.t.hqyhKQ), icon: gr.z, variant: "secondary", onClick: t }),
                    (0, c.jsx)(gn.h, { size: 10 }),
                    (0, c.jsx)(iQ.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, c.jsx)("div", {
                            className: gP.A,
                            children: i.map((e) => (0, c.jsx)(gL, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var gM = i(327479),
    gU = i(388567);
function gV(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)(E.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, c.jsx)(gn.h, { size: 4 }),
            (0, c.jsx)(z.E, { variant: "text-md/normal", className: gU.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, c.jsx)(gn.h, { size: 24 }),
            (0, c.jsxs)("div", {
                className: gU.Nr,
                children: [
                    (0, c.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: gU._e }),
                    (0, c.jsxs)("div", {
                        className: gU.FS,
                        children: [
                            (0, c.jsx)(E.D, {
                                variant: "heading-xl/semibold",
                                className: gU.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-md/normal",
                                className: gU.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, c.jsx)(gM.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var gk = i(548411),
    gw = i(417098),
    gF = i(143582),
    gB = i(915043),
    gz = i(46367);
function gX(e) {
    let { className: t, header: i, headerClassName: n, children: s } = e,
        l = g.useMemo(() => {
            let e = !1;
            return (
                g.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, c.jsxs)("div", {
        className: ni()(gz.iE, t),
        children: [
            (0, c.jsx)("div", { className: ni()(gz.wx, n), children: i }),
            l && (0, c.jsx)("div", { className: gz.Qs, children: s }),
        ],
    });
}
var gY = i(885996),
    gH = i(144165),
    gK = i(664121),
    gW = i(950305),
    gZ = i(943775),
    gq = i(123791),
    gQ = i(900797),
    gJ = i(300118);
let g$ = g.createContext({ isOpen: !1, toggleOpen: () => {} });
function g0(e) {
    let { children: t } = e,
        [i, n] = g.useReducer((e) => !e, !1),
        s = g.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, c.jsx)(g$.Provider, { value: s, children: t(i) });
}
g0.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = g.useContext(g$),
        l = n ? gQ.t : cN.a,
        r = null != i ? i : n ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, c.jsxs)(t8.D, {
        className: ni()(gJ.L, t),
        onClick: s,
        children: [
            (0, c.jsx)(z.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, c.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var g1 = i(627363),
    g2 = i(243217),
    g3 = i(328968),
    g5 = i(163437),
    g4 = i(3432);
function g6(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var g8 = i(583995),
    g7 = (((n = {})[(n.LOADING = 0)] = "LOADING"), (n[(n.DONE = 1)] = "DONE"), (n[(n.ERROR = 2)] = "ERROR"), n);
function g9(e) {
    let { subscription: t, navigateToSwitchPlan: i, loadingState: n } = e,
        s = t.metadata?.application_subscription_guild_id,
        { renewalMutations: l, planId: r } = t,
        {
            appId: a,
            plan: o,
            storeListing: u,
            isGuildSubscription: d,
            subscriptionForGuild: h,
            sku: S,
            isCancelled: T,
            isOrphanedGuildSubscription: x,
            renewalPlan: p,
        } = (0, m.cf)([ut.A, ui.A, g3.A, sc.A], () => {
            let e,
                i = ut.A.get(r),
                n = null != i ? ui.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? g3.A.getForSKU(i.skuId) : null,
                u = null != o && (0, g5.PJ)(o.skuFlags),
                d = u && null != s ? sc.A.getGuild(s) : void 0,
                c = (0, g5.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = ut.A.get(t.planId) ?? void 0;
            }
            return {
                appId: a,
                isGuildSubscription: u,
                isOrphanedGuildSubscription: g,
                plan: i,
                sku: n,
                storeListing: o,
                subscriptionForGuild: d,
                isCancelled: c,
                renewalPlan: e,
            };
        }, [s, r, l, t]),
        { data: f } = (0, g1.YY)(a),
        N = g.useMemo(() => (null != f ? (0, gZ.A)(f, 100) : null), [f]),
        _ = S?.deleted ?? !1,
        I = null != S && (0, g5.Se)(S),
        C = t.status === A.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eR.Ay)(),
        [v] = (0, gS.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: ty.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        y = g6(t.currentPeriodEnd),
        O = 0 === n;
    return (0, c.jsxs)(gX, {
        headerClassName: g8.dL,
        header:
            !1 === O
                ? (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsxs)("div", {
                              className: g8.VW,
                              children: [
                                  null != N &&
                                      (0, c.jsx)(gH._, { src: N.href, imageClassName: g8.Z2, width: 40, height: 40 }),
                                  (0, c.jsxs)("div", {
                                      className: g8.aF,
                                      children: [
                                          (0, c.jsx)(E.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: f?.name ?? j.intl.string(j.t["7kqy7W"]),
                                          }),
                                          (0, c.jsx)(z.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? j.intl.string(j.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, c.jsx)("div", {
                              className: g8.Pz,
                              children:
                                  null != f &&
                                  null != u &&
                                  null != S &&
                                  (0, c.jsx)(ms, {
                                      subscription: t,
                                      app: f,
                                      guild: h,
                                      sku: S,
                                      storeListing: u,
                                      isCancelled: T,
                                      isOrphanedGuildSubscription: x,
                                      navigateToSwitchPlan: i,
                                      renewalSkuId: p?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, c.jsx)(aV.y, { type: aV.t.PULSING_ELLIPSIS }),
        children: [
            T &&
                (0, c.jsx)(mn, {
                    type: "warning",
                    title: I
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: y })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: y }),
                }),
            !T && x && (0, c.jsx)(mn, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            C && (0, c.jsx)(mn, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, c.jsxs)("div", {
                className: g8.zH,
                children: [
                    (0, c.jsx)(mi, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, c.jsxs)(c.Fragment, {
                                  children: [
                                      (0, c.jsxs)("span", {
                                          className: g8.yW,
                                          children: [(0, c.jsx)(gK.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != h &&
                                          (0, c.jsxs)("span", {
                                              className: g8._t,
                                              children: [
                                                  (0, c.jsx)(z.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: h.name }),
                                                  }),
                                                  (0, c.jsx)(dj.Ay, { guild: h, size: dj.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, c.jsxs)("span", {
                                  className: g8.yW,
                                  children: [(0, c.jsx)(gW.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, c.jsx)(me, { invoicePreview: v, subscriptionPlan: o }),
                    (0, c.jsx)(mi, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: g6(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, c.jsx)(mt, { isCancelled: T, subscriptionPeriodEnd: y, renewalPlan: p }),
                ],
            }),
            (0, c.jsx)(mr, {
                subscription: t,
                currentInvoicePreview: v,
                loadingState: n,
                isDeleted: _,
                isCancelled: T,
            }),
            null != f &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, c.jsx)(ml, { appId: f.id, listingBenefits: u.benefits }),
        ],
    });
}
function me(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, c.jsx)(mi, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let n = (0, aW.CE)((0, aW.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, c.jsx)(mi, { title: j.intl.string(j.t.KI7ERx), content: n });
    let l = (0, aW.CE)((0, aW.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, c.jsx)(mi, {
        title: j.intl.string(j.t.KI7ERx),
        content: (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(z.E, { variant: "text-sm/semibold", children: l }),
                l !== n &&
                    (0, c.jsx)(n6.m, {
                        text: j.intl.format(j.t["6DoE57"], { listPrice: n }),
                        position: "bottom",
                        children: (0, c.jsx)(z.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, c.jsx)("s", { children: n }),
                        }),
                    }),
            ],
        }),
    });
}
function mt(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, aW.CE)((0, aW.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, c.jsx)(mi, {
            title: j.intl.string(j.t.hIhAM3),
            content: (0, c.jsxs)(c.Fragment, {
                children: [
                    (0, c.jsx)(z.E, { variant: "text-sm/medium", children: i }),
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t.MCLbvj, { planName: n.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, c.jsx)(mi, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: i });
}
function mi(e) {
    let { title: t, content: i } = e;
    return (0, c.jsxs)("div", {
        className: g8.nM,
        children: [
            (0, c.jsx)(z.E, { variant: "text-sm/medium", children: t }),
            (0, c.jsx)(z.E, { variant: "text-sm/medium", className: g8.u4, children: i }),
        ],
    });
}
function mn(e) {
    let { type: t, title: i } = e;
    return (0, c.jsx)(rj.p, {
        messageType: "warning" === t ? rj.Y.WARNING : rj.Y.ERROR,
        className: g8.Xm,
        children: (0, c.jsx)(z.E, { variant: "text-sm/normal", children: i }),
    });
}
function ms(e) {
    let {
            app: t,
            storeListing: n,
            sku: s,
            subscription: l,
            isCancelled: r,
            isOrphanedGuildSubscription: a,
            guild: o,
            renewalSkuId: u,
            navigateToSwitchPlan: d,
        } = e,
        A = (0, g5.Se)(s),
        { analyticsLocations: h } = (0, eR.Ay)(),
        [E, S] = g.useState(!1),
        T = (0, gq.C)(t.id),
        x = (0, m.bG)([ui.A], () => ui.A.getParentSKU(n.skuId), [n.skuId]),
        f = g.useMemo(() => {
            var e, t;
            let i;
            return null == x
                ? []
                : ((e = n.id),
                  (t = T.subscriptions),
                  (i = new Set(x.bundledSkuIds)),
                  t.filter((t) => t.id !== e && i.has(t.skuId)));
        }, [n.id, T, x]),
        N = 0 !== f.length;
    async function _() {
        try {
            S(!0);
            let { subscription: e } = await (0, aX.QP)(l, h);
            if (null == e) return;
            (0, si.openModalLazy)(async () => {
                let { default: t } = await Promise.all([i.e("76229"), i.e("52396")]).then(i.bind(i, 115623));
                return (i) => (0, c.jsx)(t, { ...i, storeListing: n, subscription: g2.A.createFromServer(e) });
            });
        } finally {
            S(!1);
        }
    }
    return (0, c.jsxs)("div", {
        className: g8.fw,
        children: [
            A || (r && a)
                ? null
                : r
                  ? (0, c.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t.QtMnkW),
                        onClick: _,
                        loading: E,
                    })
                  : (0, c.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t["E8G/tr"]),
                        onClick: function () {
                            (0, si.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("52266"), i.e("22800")]).then(
                                    i.bind(i, 301139),
                                );
                                return (i) =>
                                    (0, c.jsx)(e, { ...i, application: t, storeListing: n, subscription: l, guild: o });
                            });
                        },
                    }),
            N &&
                null != x &&
                !1 === r &&
                !1 === a &&
                (0, c.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(j.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: l,
                            alternativeListings: f,
                            app: t,
                            subscriptionGroup: x,
                            currentListing: n,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function ml(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, c.jsx)(g0, {
        children: (e) =>
            (0, c.jsxs)("div", {
                className: g8.PX,
                children: [
                    (0, c.jsxs)("div", {
                        className: g8.wV,
                        children: [
                            e && (0, c.jsx)(z.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, c.jsx)(g0.Toggle, {
                                className: g8.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, c.jsx)(gY.FY, { header: n, icon: (0, g4.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function mr(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, c.jsx)("div", {
                className: g8.Ji,
                children: (0, c.jsx)(tH.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, c.jsx)(aV.y, { type: aV.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, c.jsx)("div", {
                  className: g8.Ji,
                  children: (0, c.jsxs)(gw.$T, {
                      color: gw.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, c.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, c.jsx)("div", {
                  className: g8.Ji,
                  children: (0, c.jsx)(tH.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, c.jsx)(gT.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var ma = (((s = {}).HOME = "HOME"), (s.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), s);
i(938796);
var mo = i(38405);
let mu = (0, m.UT)(ut.A, {
    getQueryId: A.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = ut.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && mo.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, uK.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var md = i(240248),
    mc = i(237218),
    mg = i(242653);
function mm(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = g.useState(!1),
        [r, a] = g.useState(null),
        o =
            null != r &&
            (0, c.jsx)("button", {
                className: mg.x6,
                onClick: () => l((e) => !e),
                children: (0, c.jsxs)(z.E, {
                    className: mg.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        s
                            ? (0, c.jsx)(gQ.t, { color: iZ.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, c.jsx)(cN.a, { color: iZ.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = g.useState(null),
        m = g.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    g.useEffect(() => {
        requestAnimationFrame(m);
    }, [m, t, i]);
    let A = "auto";
    return (
        null != r && (A = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, c.jsxs)("div", {
            children: [
                (0, c.jsx)(z.E, {
                    ...n,
                    className: mg.Qs,
                    lineClamp: s ? void 0 : i,
                    ref: d,
                    style: { height: A },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var mA = i(386447);
function mh(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = g.useMemo(() => (null == i.thumbnail ? null : (0, mc.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = mu(i.skuId),
        u = g.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, aW._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, c.jsxs)(gX, {
              className: ni()(mA.iE, n),
              header: (0, c.jsxs)(c.Fragment, {
                  children: [
                      (0, c.jsxs)("div", {
                          className: mA.qd,
                          children: [
                              null != a &&
                                  (0, c.jsx)(gH._, { src: a.href, imageClassName: mA.rW, width: 48, height: 48 }),
                              (0, c.jsxs)("div", {
                                  children: [
                                      (0, c.jsx)(E.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, c.jsx)(z.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, md.uJ)(r) &&
                      (0, c.jsx)("div", {
                          className: mA.h_,
                          children: (0, c.jsx)(mm, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, c.jsx)("div", {
                          className: mA.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, c.jsx)(gY.FY, { header: i, icon: (0, g4.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var mE = i(185438),
    mS = i(711171);
function mT(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, gZ.A)(t, 100),
        u = (0, g5.PJ)(r.flags),
        d = u ? gK.R : gW.n,
        g = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        A = i.metadata?.application_subscription_guild_id,
        h = (0, m.bG)([sc.A], () => (u && null != A ? sc.A.getGuild(A) : void 0), [A, u]),
        S = (0, m.bG)([ui.A], () => {
            if (null != a) return ui.A.get(a);
        }, [a]),
        T = g6(i.currentPeriodEnd);
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsxs)("div", {
                className: mS.wx,
                children: [
                    null != o && (0, c.jsx)(gH._, { src: o.href, imageClassName: mS.Z2, width: 48, height: 48 }),
                    (0, c.jsxs)("div", {
                        children: [
                            (0, c.jsx)(E.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, c.jsxs)("div", {
                                className: mS.p4,
                                children: [
                                    (0, c.jsxs)(E.D, {
                                        variant: "heading-md/normal",
                                        className: mS.N4,
                                        children: [(0, c.jsx)(d, { size: "xs", color: "currentColor" }), " ", g],
                                    }),
                                    null != h &&
                                        (0, c.jsxs)(c.Fragment, {
                                            children: [
                                                (0, c.jsx)(z.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, c.jsxs)("span", {
                                                    className: mS.vP,
                                                    children: [
                                                        (0, c.jsx)(dj.Ay, { guild: h, size: dj.Ay.Sizes.SMOL }),
                                                        (0, c.jsx)(E.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: j.intl.format(j.t["7ZD8p1"], {
                                                                guildName: h.name,
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
            (0, c.jsx)(g0, {
                children: (e) =>
                    (0, c.jsxs)("div", {
                        className: mS._B,
                        children: [
                            (0, c.jsx)(z.E, { variant: "text-md/normal", children: j.intl.string(j.t["goe+hk"]) }),
                            e &&
                                (0, c.jsxs)(c.Fragment, {
                                    children: [
                                        (0, c.jsx)(z.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t["Q8qJ+5"], {}),
                                        }),
                                        (0, c.jsx)(z.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, c.jsx)(g0.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, c.jsxs)("div", {
                className: mS.x0,
                children: [
                    (0, c.jsx)(mh, {
                        storeListing: n,
                        className: mS.o3,
                        cta: (0, c.jsxs)("div", {
                            className: mS.cJ,
                            children: [
                                (0, c.jsx)(z.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: j.intl.string(j.t.fHIpOY),
                                }),
                                null != S &&
                                    (0, c.jsx)(z.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["OQk+jr"], { endDate: T }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, c.jsx)(
                                  mh,
                                  {
                                      storeListing: e,
                                      cta: (0, c.jsx)(z.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: j.intl.format(j.t.nn88hB, { startDate: T }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, c.jsx)(mx, { storeListing: e, guildId: A, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function mx(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, mE.A)({
            analyticsLocation: A.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, c.jsx)(mh, {
        storeListing: t,
        cta: (0, c.jsx)(p.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: s }),
    });
}
class mp extends g.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, c.jsxs)(gw.$T, {
                  color: gw.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      j.intl.format(j.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function mf(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = g.useState({ route: ma.HOME }),
        { route: l } = n;
    function r() {
        s({ route: ma.HOME });
    }
    let a = (e) => {
            s({ route: ma.SWITCH_APP_PLANS, ...e }), i(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = g.useState({});
    g.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: g7.LOADING })),
                (0, gF._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: g7.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: g7.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, gB.E)(),
        m = d !== gB.mJ.LOADED;
    switch (l) {
        case ma.HOME:
            return (0, c.jsx)(c.Fragment, {
                children: t.map((e) =>
                    (0, c.jsx)(
                        mp,
                        {
                            subscription: e,
                            children: (0, c.jsx)(g9, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: m ? g7.LOADING : (o[e.id] ?? g7.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case ma.SWITCH_APP_PLANS:
            let { route: A, ...h } = n;
            return (0, c.jsx)(mT, { ...h, navigateToHome: r });
        default:
            (0, i9.xb)(l);
    }
}
var mN = i(131352);
function m_(e) {
    let { onGoBack: t } = e,
        i = (0, m.yK)(
            [oA.A],
            () =>
                oA.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = g.useState();
    return (
        null == n && (n = (0, c.jsx)(mI, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, c.jsxs)("div", {
            children: [
                n,
                (0, c.jsx)("div", {
                    className: mN.A,
                    children: (0, c.jsx)(mf, {
                        subscriptions: i,
                        updateHeader: function (e, t) {
                            s(
                                (0, c.jsx)(mI, {
                                    title: e,
                                    onBack: () => {
                                        t(), s(void 0);
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
function mI(e) {
    let { onBack: t, title: i } = e;
    return (0, c.jsxs)("div", {
        className: mN.D,
        children: [
            (0, c.jsx)(n5.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, c.jsx)(gk.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, c.jsx)(E.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var mC = i(881489),
    mb = i(366999),
    mv = i(466919),
    my = i(406252);
function mj(e) {
    let t,
        i,
        {
            showChargingUpState: n,
            rowValueText: s,
            endsAt: l,
            fractionalState: r,
            activationDate: a,
            hasPremiumGroup: o,
        } = e;
    o
        ? ((t = j.intl.string(mv.default["/S02sx"])), (i = j.intl.string(mv.default.OPJNST)))
        : n
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (i = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (i = r === tk.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ni()({ [my.Hs]: n, [my.mT]: !n }),
        d = ni()({ [my.CQ]: n, [my.ZM]: !n }),
        g = ni()({ [my.EM]: !n });
    return (0, c.jsxs)("div", {
        className: my.r6,
        children: [
            (0, c.jsxs)("div", {
                className: my.Nv,
                children: [
                    (0, c.jsx)(E.D, { variant: "heading-md/semibold", className: g, children: t }),
                    null !== i && (0, c.jsx)(z.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, c.jsx)("div", {
                    className: my.ZS,
                    children: (0, c.jsx)("div", {
                        className: u,
                        children: (0, c.jsx)(z.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let mO = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, rw.kX)(t),
        r = l.length > 0,
        a = (0, mb.Ay)(t.endsAt, mb.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, c.jsx)("div", {
        children: (0, c.jsxs)("div", {
            className: ni()(i, my.f8),
            children: [
                (0, c.jsx)("div", {
                    className: my.J_,
                    children: (0, c.jsxs)("div", {
                        className: my.Bh,
                        children: [
                            (0, c.jsx)("div", {
                                className: my.xt,
                                children: (0, c.jsx)(ry.t, { size: "md", color: "white", className: my.T8 }),
                            }),
                            (0, c.jsx)("div", {
                                className: my.pt,
                                children: (0, c.jsx)(E.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, c.jsx)(z.E, {
                                className: my.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, c.jsx)(mj, {
                    showChargingUpState: r,
                    rowValueText: o,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: n,
                    hasPremiumGroup: s,
                }),
            ],
        }),
    });
};
var mR = i(983048);
function mD(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, m.yK)([ut.A], () => [ut.A.get(n), null != l ? ut.A.get(l.planId) : null]);
    if (null == o || rw.Ay.getInterval(n).intervalType !== tk.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        g = o.skuId === d,
        h = rw.Ay.getDisplayName(n);
    if (a) t = j.intl.string(mv.default["5asczk"]);
    else if (g && null != l) {
        let e;
        e = new Date(l.status === A.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, rw._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: i ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: h });
    let S = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, c.jsxs)("div", {
        className: my.Bh,
        children: [
            (0, c.jsx)("div", {
                className: ni()({
                    [my.sr]: o.skuId === tk.pe.TIER_0,
                    [my.lP]: o.skuId === tk.pe.TIER_1,
                    [my.eb]: o.skuId === tk.pe.TIER_2,
                }),
                children: (0, c.jsx)(ry.t, { size: "md", color: "currentColor", className: my.Kk }),
            }),
            (0, c.jsxs)("div", {
                className: my.pt,
                children: [
                    (0, c.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: h }),
                    }),
                    !S &&
                        (0, c.jsx)(E.D, {
                            className: my.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, c.jsx)(z.E, {
                className: my.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let mL = function (e) {
    let { className: t, entitlements: i } = e,
        n = k()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, m.yK)([oJ.A], () => oJ.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, m.bG)([oA.A], () => oA.A.getPremiumSubscription()),
        r = (0, m.bG)([oA.A], () => null == oA.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === tk.gD.PREMIUM_MONTH_TIER_1),
        o = (0, m.bG)([s0.default], () => s0.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)("div", {
                className: ni()(t, my.xF, my.J_),
                children: Object.keys(n).map((e) =>
                    (0, c.jsx)(
                        mD,
                        {
                            planId: e,
                            count: n[e].length,
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
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsx)(z.E, {
                            className: my.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, c.jsx)(mR.i, {}),
                    ],
                }),
        ],
    });
};
var mP = i(830991);
function mG(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, eR.Ay)(),
        [l] = (0, gS.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: ty.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? mP.r : mP.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, rw.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = ut.A.get(o);
    ts()(null != u, "Missing plan");
    let d = (0, aW.$g)(l.total, l.currency);
    return (
        u.interval === tk.WT.YEAR
            ? (t = j.intl.format(j.t["jPz/39"], {
                  price: d,
                  termsUrl: A.X7G.TERMS,
                  paidURL: A.X7G.PAID_TERMS,
                  privacyUrl: A.X7G.PRIVACY,
              }))
            : u.interval === tk.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? j.intl.format(j.t.m27GpI, {
                            price: d,
                            termsUrl: A.X7G.TERMS,
                            paidURL: A.X7G.PAID_TERMS,
                            privacyUrl: A.X7G.PRIVACY,
                        })
                      : j.intl.format(j.t["9xf5Vx"], {
                            price: d,
                            termsUrl: A.X7G.TERMS,
                            paidURL: A.X7G.PAID_TERMS,
                            privacyUrl: A.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, c.jsx)(z.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function mM(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === A.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, c.jsx)(mG, { subscription: t, withOverheadSeparator: i });
}
var mU = i(37397),
    mV = i(533792);
let mk = { [eN.nR]: "role_subscriptions_panel", [eN.PZ]: "application_subscriptions_panel" };
function mw() {
    return (0, c.jsx)(aJ.Z, {
        className: mV.wb,
        type: aJ.Z.Types.CUSTOM,
        children: (0, c.jsxs)(sa.A, {
            align: sa.A.Align.CENTER,
            children: [
                (0, c.jsx)(nZ.A, { game: null, size: nZ.M.SMALL, className: mV.pV }),
                (0, c.jsx)("span", { className: mV.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function mF(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, cY._)(e, t));
}
function mB() {
    let e = (0, m.bG)([oJ.A], () => oJ.A.getForApplication(tk.tv), [], mF);
    return (
        g.useEffect(() => {
            (0, ux.LM)(tk.tv);
        }, []),
        (0, c.jsx)(iQ.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && rw.Ay.hasAccountCredit(e)
                    ? (0, c.jsx)(mL, { className: mV.fX, entitlements: e })
                    : (0, c.jsx)(mw, {}),
        })
    );
}
function mz() {
    return (0, c.jsx)("hr", { className: mV.hr });
}
let mX = function () {
        var e;
        let t = (0, m.bG)([oA.A], () => oA.A.getPremiumTypeSubscription()),
            i = (0, cH.A)({ subscriptionFilter: (e) => mU.Hy.has(e.status) }),
            n = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, m.bG)(
                [om.A],
                () => (null != t && null != t.paymentSourceId ? om.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, m.bG)([oA.A], () => oA.A.hasFetchedSubscriptions()),
            a = (0, m.bG)([aK.A], () => aK.A.isBusy),
            u = (0, uW.Y)(),
            d = gx.A.useField("subsection"),
            h = gx.A.useField("scrollToGameServers"),
            S = g.useRef(null);
        g.useEffect(() => {
            (0, i3._)(null != d ? mk[d] : o.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let T = (0, m.bG)([oA.A], () => oA.A.getActiveApplicationSubscriptions()?.length ?? 0),
            x = (0, m.bG)(
                [oA.A],
                () =>
                    Object.values(oA.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === A.rzx.GUILD)
                        .filter((e) => e.status !== A.Dmq.ENDED).length,
            ),
            p = (0, m.bG)([oA.A], () =>
                Object.values(oA.A.getSubscriptions() ?? {}).some((e) => e.type === A.rzx.GAME_SERVER),
            ),
            { servers: f } = (0, gi.f)({ enabled: p }),
            N = (0, uQ.A)({ forceFetch: !0 }),
            _ = (0, mC.ds)(),
            I = null !== t ? t.currentPeriodEnd : void 0,
            C =
                !(_ && !(N.unactivatedUnits.length > 0)) &&
                (N.fractionalState !== tk.xc.NONE || N.unactivatedUnits.length > 0);
        return (g.useEffect(() => {
            h &&
                r &&
                u &&
                f.length > 0 &&
                (S.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                gx.A.setState({ scrollToGameServers: !1 }));
        }, [h, r, u, f.length]),
        g.useEffect(
            () => (
                e2.h.wait(() => {
                    (0, uK.zS)(), aX.hP(), (0, uH.CD)(), aX.$o();
                }),
                function () {
                    gx.A.resetState();
                }
            ),
            [],
        ),
        e8.A.enabled)
            ? (0, c.jsx)(aM.A, {})
            : r && u
              ? d === eN.nR
                  ? (0, c.jsx)(gG, { onGoBack: () => gx.A.setState({ subsection: null }) })
                  : d === eN.PZ
                    ? (0, c.jsx)(m_, { onGoBack: () => gx.A.setState({ subsection: null }) })
                    : (0, c.jsx)("div", {
                          className: mV.kL,
                          children: (0, c.jsxs)("div", {
                              className: mV.Qs,
                              children: [
                                  s ? (0, c.jsx)(mU.Sb, {}) : null,
                                  null != t
                                      ? (0, c.jsx)(mU.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, c.jsx)(mU.TC, {}),
                                  C &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, c.jsxs)("section", {
                                          children: [
                                              (0, c.jsx)(E.D, {
                                                  variant: "heading-md/bold",
                                                  className: mV.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-md/normal",
                                                  className: mV.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: eS.A.getArticleURL(
                                                          A.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, c.jsx)(mO, {
                                                  className: mV.fX,
                                                  fractionalPremiumInfo: N,
                                                  activationDate: I,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, c.jsx)(mB, {}),
                                  x > 0 &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)(mz, {}),
                                              (0, c.jsx)(gl, {
                                                  count: x,
                                                  onClickManageSubscription: () => gx.A.setState({ subsection: eN.nR }),
                                              }),
                                          ],
                                      }),
                                  T > 0 &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)(mz, {}),
                                              (0, c.jsx)(gV, {
                                                  count: T,
                                                  onClickManageSubscription: () => {
                                                      gx.A.setState({ subsection: eN.PZ }),
                                                          e7.default.track(
                                                              A.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  f.length > 0 &&
                                      (0, c.jsxs)("div", {
                                          ref: S,
                                          children: [(0, c.jsx)(mz, {}), (0, c.jsx)(gt, { servers: f })],
                                      }),
                                  (0, c.jsx)(mz, {}),
                                  null != t ? (0, c.jsx)(mM, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, c.jsx)("div", { className: ni()(mV.kL, mV.Lq), children: (0, c.jsx)(aV.y, {}) });
    },
    mY = (0, a.E2)(o.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, c.jsx)(mX, {}),
    }),
    mH = (0, a.zZ)(o.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [mY],
    }),
    mK = (0, a.t_)(o.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [mH] }),
    mW = (0, a.i4)(o.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: cz.L,
        usePersistentBadge: function () {
            let e = (0, cX.l)();
            return g.useMemo(
                () => ({
                    badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, c.jsx)(nw.E, { size: "xs", color: iZ.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [mK],
    }),
    mZ = (0, a.WI)(o.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [uX, cB, mW, uU, oC],
    });
var mq = i(540999),
    mQ = i(306471),
    mJ = i(964355),
    m$ = i(172272);
let m0 = (0, a.zD)(o.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, m.bG)([lF.default], () => lF.default.isAxeEnabled),
        setValue: (e) => (0, lw.x)({ axeEnabled: e }),
    }),
    m1 = (0, a.zD)(o.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, lw.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var m2 = i(276086),
    m3 = i(354328);
let m5 = (0, a.zD)(o.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, m3.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, m2.L)("highlight_mana_components", e);
        },
    }),
    m4 = (0, a.zD)(o.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, m3.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, m2.L)("highlight_mana_text_overrides", e);
        },
    }),
    m6 = (0, a.zD)(o.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, m3.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, m2.L)("highlight_mana_text", e);
        },
    }),
    m8 = (0, a.zD)(o.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, m3.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, m2.L)("highlight_void_toggleables", e);
        },
    }),
    m7 = (0, a.sN)(o.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, m.bG)([lF.default], () => lF.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: m$.YR,
        markers: Array.from({ length: m$.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => m$.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            m$.Or.getState().setHorizontalSpacing(e);
        },
    }),
    m9 = (0, a.zD)(o.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, lw.x)({ layoutDebuggingEnabled: e });
        },
    }),
    Ae = (0, a.sN)(o.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, m.bG)([lF.default], () => lF.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: m$.YR,
        markers: Array.from({ length: m$.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => m$.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            m$.Or.getState().setVerticalSpacing(e);
        },
    }),
    At = (0, a.zZ)(o.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [m1, m9, m7, Ae, m5, m6, m4, m8, m0],
    }),
    Ai = (0, a.zD)(o.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => y.HZ.useSetting(),
        setValue: (e) => {
            y.HZ.updateSetting(e);
        },
    });
var An = i(396478),
    As = i(173936),
    Al = i(260598),
    Ar = i(414079),
    Aa = i(148810),
    Ao = i(380610),
    Au = i(986238),
    Ad = i(281161),
    Ac = i(663894),
    Ag = i(522826);
let Am = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    AA = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function Ah(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class AE extends g.Component {
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
        let { project: e, overrideType: t, overrideId: i, disabled: n, error: s } = this.props;
        return (0, c.jsxs)(sa.A, {
            direction: sa.A.Direction.VERTICAL,
            className: ni()(Ad.oS, Ag.SX, Ac.N, Ad.nM),
            children: [
                (0, c.jsx)(Ar.A, {
                    className: ni()(Ad.lL, { [Ad.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, c.jsxs)(sa.A, {
                    className: Ag.QB,
                    children: [
                        (0, c.jsx)(sa.A.Child, {
                            basis: "50%",
                            children: (0, c.jsx)(n3.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: AA,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, c.jsx)(sa.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, c.jsx)(sn.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)(sa.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, c.jsx)(z.E, {
                                className: Ad.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, c.jsxs)(z.E, {
                            variant: "text-sm/normal",
                            className: Ad.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, c.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class AS extends g.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, Ao.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: k().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !k().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return k().without(Am, ...t);
    }
    handleAddBuildOverride = (e) => {
        if (null == e) return;
        let t = { ...this.state.buildOverrides, [e]: { type: "branch", id: "" } };
        this.setState({ buildOverrides: t });
    };
    handleBuildOverrideUpdated = (e, t) => {
        let { buildOverrides: i } = this.state,
            n = { ...(null != i ? i[e] : {}), ...t },
            s = { ...this.state.buildOverrides, [e]: n };
        this.setState({ buildOverrides: s });
    };
    handleBuildOverrideRemoved = (e) => {
        let t = { ...this.state.buildOverrides };
        delete t[e], this.setState({ buildOverrides: t });
    };
    handleDiscardChanges = () => {
        this.setState({ buildOverrides: k().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, Aa.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: k().cloneDeep(e),
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
        (0, si.openModal)((t) => (0, c.jsx)(AT, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, c.jsx)(An.pp, {
            theme: iG.A.theme,
            className: ni()(Ag.eT, Ag.SX),
            children: (0, c.jsx)(An.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : k().map(e, (e, n) =>
                  (0, c.jsx)(
                      AE,
                      {
                          project: n,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: i[n],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved,
                      },
                      n,
                  ),
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, c.jsx)(p.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, c.jsx)(n6.m, {
                  text: "Generate Public Link",
                  children: (0, c.jsx)(n5.K, {
                      variant: "secondary",
                      icon: As.q,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(p.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, c.jsx)(p.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: Ah(t ?? {}),
                    onClick: this.handleSaveChanges,
                    loading: e,
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: i, buildOverrides: n } = this.state;
        e = t
            ? (0, c.jsx)(aV.y, { className: Ag.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                Ah(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, c.jsx)(z.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, c.jsx)(iQ.n, {
            children: (0, c.jsxs)(F.B, {
                gap: 16,
                children: [
                    (0, c.jsx)(n3.l, {
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
                    (0, c.jsxs)(lC.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class AT extends g.Component {
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
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            e.setState({ statusText: t, status: i });
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
        e.key === sN.dh.ENTER && this.handleAddAllowedVersion();
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
        (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
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
            t = await (0, Aa.SB)(e);
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
        return Ah(this.props.buildOverrides ?? {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: i,
                userIdEntryError: n,
                allowedVersions: s,
                allowedVersionEntry: l,
                allowedVersionEntryError: r,
                allowLoggedOut: a,
                experiments: o,
                experimentsError: u,
            } = this.state,
            d = Au.fL.find((t) => t.value === e),
            g = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, c.jsxs)(F.B, {
            gap: 20,
            children: [
                (0, c.jsx)(n3.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Au.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, c.jsx)(n3.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Au.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, c.jsxs)(F.B, {
                          gap: 20,
                          children: [
                              (0, c.jsx)(sn.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: nM.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, c.jsx)(n3.l, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: g,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === s.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, c.jsx)(Al.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, c.jsx)(Al.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, c.jsx)(tK.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, c.jsx)("div", {});
        let i = rj.Y.INFO;
        switch (t) {
            case 0:
                i = rj.Y.ERROR;
                break;
            case 1:
                i = rj.Y.WARNING;
        }
        return (0, c.jsx)(rj.p, { messageType: i, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: i } = this.state;
        return (0, c.jsx)(st.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, c.jsx)(uA.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let Ax = (0, a.E2)(o.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: AS });
var Ap = i(256311),
    Af = i(883600);
let AN = (0, a.E2)(o.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, m.bG)([Af.A], () => Af.A.overrideId());
        async function t(e) {
            let t = Af.A.getChangelog(e, "en-US");
            return null != t ? t : ((await Ap.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, c.jsx)(AU, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => Ap.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var A_ = i(506774);
let AI = new Date("2018-01-01"),
    AC = (0, a.Tf)(o.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => y.pK.useSetting() === aq.default.fromTimestamp(AI.getTime()),
        onClick: () => (A_.w.set("lastChangeLogDate", AI), y.pK.updateSetting(aq.default.fromTimestamp(AI.getTime()))),
    }),
    Ab = (0, a.zD)(o.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, m.bG)([lF.default], () => lF.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, m.bG)(
                [lF.default],
                () => lF.default.disableAppCollectionsCache || lF.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, lw.x)({ disableAppCollectionsCache: e }),
    }),
    Av = (0, a.zD)(o.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.isForcedCanary),
        setValue: (e) => {
            (0, lw.x)({ canary: e });
        },
    }),
    Ay = (0, a.zD)(o.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.sourceMapsEnabled),
        setValue: (e) => (0, lw.x)({ sourceMapsEnabled: e }),
    }),
    Aj = (0, a.zD)(o.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, lw.x)({ onlyShowPreviewAppCollections: e }),
    });
var AO = i(10094),
    AR = i(683760);
let AD = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tk.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tk.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tk.PremiumTypes.TIER_2 },
    ],
    AL = (0, a.Hn)(o.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => AD,
        clearable: !0,
        useValue: () =>
            (0, m.bG)([AR.A], () => {
                let e = AR.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, AO.O)(null, void 0)
                : null === e
                  ? (0, AO.O)(void 0, void 0)
                  : (0, AO.O)(0 === e ? null : e, void 0);
        },
    });
var AP = i(246605),
    AG = i(274184);
let AM = (0, a.E2)(o.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, m.bG)([AG.Ay], () => AG.Ay.getSurveyOverride());
        return (0, c.jsx)(AU, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => AP.xr(e),
            fetchOverride: (e) => AP.BC(e, !0) ?? null,
        });
    },
});
function AU(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = g.useState(s ?? ""),
        u = g.useRef(null),
        [d, m] = g.useState(0);
    function A() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        g.useEffect(() => A, []),
        (0, c.jsx)(tH.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, c.jsx)(sn.k, {
                placeholder: n,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: function (e) {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), A(), 0 === e.length)) {
                            m(0), l(null);
                            return;
                        }
                        u.current = setTimeout(() => {
                            m(1),
                                r(e).then((t) => {
                                    m(null == t ? 2 : 3), null != t && l(e);
                                });
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let AV = (0, a.zZ)(o.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [AL, AM, AN, AC, Av, Ai, Aj, Ab, Ay, Ax],
        useInlineNotice: () => ({
            type: d.lT.INLINE_NOTICE,
            noticeType: "info",
            text: j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Ak = (0, a.zD)(o.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, lw.x)({ logAnalyticsEvents: e }),
    }),
    Aw = (0, a.zD)(o.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.isLoggingGatewayEvents),
        setValue: (e) => (0, lw.x)({ logGatewayEvents: e }),
    }),
    AF = (0, a.zD)(o.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.preventPopoutClose),
        setValue: (e) => (0, lw.x)({ preventPopoutClose: e }),
    }),
    AB = (0, a.zD)(o.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.logKeyboardMismatches),
        setValue: (e) => (0, lw.x)({ logKeyboardMismatches: e }),
    }),
    Az = (0, a.zD)(o.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.isLoggingOverlayEvents),
        setValue: (e) => (0, lw.x)({ logOverlayEvents: e }),
    }),
    AX = (0, a.zD)(o.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.isLoggingQuestEvents),
        setValue: (e) => (0, lw.x)({ logQuestEvents: e }),
    }),
    AY = (0, a.zD)(o.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, m.bG)([lF.default], () => lF.default.isTracingRequests),
        setValue: (e) => (0, lw.x)({ trace: e }),
    }),
    AH = (0, a.zZ)(o.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [Aw, Az, AY, Ak, AB, AF, AX] }),
    AK = (0, a.t_)(o.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [AV, AH, At],
    }),
    AW = (0, a.i4)(o.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: mQ.V,
        useMenu: function () {
            let {
                    layoutDebuggingEnabled: e,
                    isDeveloper: t,
                    isLoggingGatewayEvents: i,
                    isLoggingOverlayEvents: n,
                    isLoggingAnalyticsEvents: s,
                    isTracingRequests: l,
                    isForcedCanary: r,
                    isAxeEnabled: a,
                    preventPopoutClose: u,
                    onlyShowPreviewAppCollections: d,
                    disableAppCollectionsCache: g,
                    isStaff: A,
                } = (0, m.cf)([lF.default, mq.A, s0.default], () => ({
                    layoutDebuggingEnabled: lF.default.layoutDebuggingEnabled,
                    isDeveloper: mq.A.isDeveloper,
                    isLoggingGatewayEvents: lF.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: lF.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: lF.default.isLoggingAnalyticsEvents,
                    isTracingRequests: lF.default.isTracingRequests,
                    isForcedCanary: lF.default.isForcedCanary,
                    isSourceMapsEnabled: lF.default.sourceMapsEnabled,
                    isAxeEnabled: lF.default.isAxeEnabled,
                    preventPopoutClose: lF.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: lF.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: lF.default.disableAppCollectionsCache,
                    isStaff: s0.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: h, verticalSpacing: E } = (0, m$.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = m$.Or.getState(),
                x = y.HZ.useSetting();
            return t
                ? [
                      (0, c.jsxs)(
                          e0.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, t9.openUserSettings)(o.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: x,
                                          action: () => {
                                              y.HZ.updateSetting(!x);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, lw.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: d,
                                          action: () => {
                                              (0, lw.x)({ onlyShowPreviewAppCollections: !d });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: g,
                                          action: () => {
                                              (0, lw.x)({ disableAppCollectionsCache: !g });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, c.jsxs)(
                          e0.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, t9.openUserSettings)(o.X.LOGGING);
                              },
                              children: [
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: i,
                                          action: () => {
                                              (0, lw.x)({ logGatewayEvents: !i });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: n,
                                          action: () => {
                                              (0, lw.x)({ logOverlayEvents: !n });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, lw.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, lw.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: u,
                                          action: () => {
                                              (0, lw.x)({ preventPopoutClose: !u });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, c.jsxs)(
                          e0.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, t9.openUserSettings)(o.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, lw.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, lw.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)(
                                                  e0.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, c.jsx)(mJ.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: m$.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, c.jsx)(
                                                  e0.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, c.jsx)(mJ.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: E,
                                                              minValue: 0,
                                                              maxValue: m$.YR,
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
                      A
                          ? (0, c.jsx)(
                                e0.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => s$() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [AK],
    });
var AZ = i(127062),
    Aq = i(25044),
    AQ = i(80703),
    AJ = i(691540),
    A$ = i(857250),
    A0 = i(97483),
    A1 = i(892547),
    A2 = i(890856),
    A3 = i(100392),
    A5 = i(102609),
    A4 = i(271478),
    A6 = i(736056),
    A8 = i(710195),
    A7 = i(386976),
    A9 = i(257433),
    he = i(32523),
    ht = i(96919),
    hi = i(688151),
    hn = i(142862);
function hs(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = g.useState(s),
        [a, o] = g.useState(!1),
        u = g.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, m.bG)([o9.default], () => o9.default.getId()),
        A = (0, m.bG)([o9.default], () => {
            let e = o9.default.getInstallationForTracking();
            return null == e ? null : (0, AQ.v)(e);
        }),
        h = "installation" === t.kind && null != A ? A : d,
        E = (0, A9.iN)(t, h),
        S = (0, A9.Fm)(t, h),
        T = (0, m.yK)([A6.A], () =>
            k()
                .sortBy(A6.A.getRecentExposures(hi.Vh.USER, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        x = g.useCallback(
            (e) => {
                (0, us.C)((0, A3.yA)(i), () => {
                    (0, AJ.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: A0.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        p = (0, c.jsx)(A2.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, c.jsxs)(z.E, {
                variant: "text-md/medium",
                className: hn.DD,
                children: [
                    (0, c.jsxs)("div", {
                        children: [
                            (0, c.jsxs)(F.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    us.p5 &&
                                        (0, c.jsx)(t8.D, { onClick: x, children: (0, c.jsx)(As.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, c.jsx)(z.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, c.jsx)("span", {
                        className: hn.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, c.jsx)("div", { className: hn.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === A5.l5.LEGACY
                ? `Currently assigned to bucket ${E ?? hi.RE.NOT_ELIGIBLE}`
                : null != E
                  ? `Currently assigned to variant ${E}`
                  : "Currently unassigned"),
        (0, c.jsxs)("div", {
            className: hn.Os,
            children: [
                p,
                (0, c.jsx)("div", {
                    children: (0, c.jsx)(A4.g, {
                        label: t.system === A5.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, c.jsx)("div", {
                    className: hn.h_,
                    children:
                        null == S
                            ? (0, c.jsx)(z.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, c.jsxs)("div", {
                          children: [
                              (0, c.jsx)(z.E, {
                                  variant: "text-lg/medium",
                                  className: hn.id,
                                  children: "Server Descriptor",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: hn.AS,
                                  children: null == S ? "None" : JSON.stringify(S, void 0, 2),
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-lg/medium",
                                  className: hn.id,
                                  children: "Override Descriptor",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: hn.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-lg/medium",
                                  className: hn.id,
                                  children: "Recent Exposures",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: hn.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, c.jsx)("div", {
                          className: hn.id,
                          children: (0, c.jsx)(dW.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, c.jsx)(n2.c, { className: hn.yF }),
            ],
        })
    );
}
function hl(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = g.useState(null != n),
        [r, a] = g.useState(!1),
        o = g.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, m.bG)([A6.A], () => A6.A.getLoadedGuildExperiment(i)),
        d = (0, m.bG)([A6.A, sc.A, A8.A], () => {
            if (t.system === A5.l5.LEGACY) return null == A6.A.getLoadedGuildExperiment(i);
            let e = t.name;
            return !sc.A.getGuildsArray().some((t) => null != A8.A.getServerAssignment("guild", t.id, e));
        }),
        A = (0, m.yK)([A6.A], () =>
            k()
                .sortBy(A6.A.getRecentExposures(hi.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [h, E] = (0, m.yK)([o9.default, sc.A, A6.A, A8.A], () => {
            let e = t.system === A5.l5.LEGACY,
                n = t.name,
                s = o9.default.getId(),
                l = k().sortBy(sc.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of l) {
                let l = e
                    ? (A6.A.getGuildExperimentDescriptor(i, t.id)?.bucket ?? hi.RE.NOT_ELIGIBLE)
                    : (A8.A.getEvaluationAndAssignment("guild", t.id, n, s)[1]?.variantId ?? hi.RE.NOT_ELIGIBLE);
                l in r || (r[l] = 0), r[l]++, a.push(`${t.name}: ${l}`);
            }
            let o = k()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        S = t.system !== A5.l5.LEGACY,
        T = (0, m.yK)([sc.A], () => k().sortBy(sc.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [x, p] = g.useState(() => sg.A.getGuildId() ?? sg.A.getLastSelectedGuildId()),
        f = T.find((e) => e.id === x)?.name,
        N = (0, m.bG)([A8.A], () => {
            if (S && null != x) return A8.A.getServerAssignment("guild", x, t.name);
        }, [S, x, t.name]),
        _ = (0, m.bG)([A8.A, o9.default], () => {
            if (!S) return;
            let e = o9.default.getId();
            return A8.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        I = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, c.jsx)(t8.D, {
            onClick: o,
            children: (0, c.jsxs)(z.E, {
                variant: "text-md/medium",
                className: hn.DD,
                children: [
                    (0, c.jsxs)("div", {
                        children: [
                            (0, c.jsx)("span", { children: t.title }),
                            (0, c.jsx)(z.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, c.jsx)("span", { className: hn.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, c.jsxs)("div", {
              className: hn.Os,
              children: [
                  C,
                  (0, c.jsx)(A4.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${E}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  S &&
                      T.length > 0 &&
                      (0, c.jsx)("div", {
                          className: hn.h_,
                          children: (0, c.jsx)(n3.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: x ?? void 0,
                              options: T.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => p(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, c.jsx)("div", {
                      className: hn.h_,
                      children: d
                          ? (0, c.jsx)(z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === A5.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  S &&
                      (0, c.jsxs)("div", {
                          children: [
                              (0, c.jsxs)(z.E, {
                                  variant: "text-lg/medium",
                                  className: hn.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: hn.AS,
                                  children: null == N ? "None" : JSON.stringify(N, void 0, 2),
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-lg/medium",
                                  className: hn.id,
                                  children: "Client Eligibility",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: I ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: hn.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, c.jsxs)("div", {
                            children: [
                                (0, c.jsx)(z.E, {
                                    variant: "text-lg/medium",
                                    className: hn.id,
                                    children: "Guild Assignments",
                                }),
                                (0, c.jsx)(z.E, { variant: "code", className: hn.AS, children: h }),
                                t.system === A5.l5.LEGACY &&
                                    (0, c.jsxs)(c.Fragment, {
                                        children: [
                                            (0, c.jsx)(z.E, {
                                                variant: "text-lg/medium",
                                                className: hn.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, c.jsx)(z.E, {
                                                variant: "code",
                                                className: hn.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, c.jsx)(z.E, {
                                    variant: "text-lg/medium",
                                    className: hn.id,
                                    children: "Override Descriptor",
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "code",
                                    className: hn.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "text-lg/medium",
                                    className: hn.id,
                                    children: "Recent Exposures",
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "code",
                                    className: hn.AS,
                                    children: 0 === A.length ? "None" : A.join("\n"),
                                }),
                            ],
                        })
                      : (0, c.jsx)("div", {
                            className: hn.id,
                            children: (0, c.jsx)(dW.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, c.jsx)(n2.c, { className: hn.yF }),
              ],
          })
        : (0, c.jsx)("div", { className: hn.Os, children: C });
}
let hr = (0, a.E2)(o.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, A7.op)(),
                { experiments: i, overridesInfo: n } = (0, he.hI)(),
                s = g.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = g.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, m.bG)([o9.default], () => {
                    let e = o9.default.getInstallationForTracking();
                    return null == e ? null : (0, AQ.v)(e);
                }),
                [a, o] = g.useState(""),
                u = (0, ht.oC)((0, ht.R3)((0, ht.Fm)(s), l), a);
            return (0, c.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, c.jsxs)(F.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, c.jsxs)(z.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                us.p5 &&
                                    (0, c.jsx)(dW.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, us.C)(r, () => {
                                                (0, AJ.P0)((0, A$.o)("Installation ID copied!", A0.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, c.jsx)(A1.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? hl : hs;
                              return (0, c.jsx)(
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
                        : (0, c.jsx)("div", {
                              className: hn.p$,
                              children: (0, c.jsx)(E.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    ha = (0, a.zZ)(o.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [hr] }),
    ho = (0, a.t_)(o.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [ha] }),
    hu = (0, a.i4)(o.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: AZ.c,
        useMenu: Aq.A,
        buildLayout: () => [ho],
    }),
    hd = (0, a.WI)(o.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => mq.A.isDeveloper,
        buildLayout: () => [hu, AW],
    });
var hc = i(682348),
    hg = i(871633),
    hm = i(751075),
    hA = i(843402);
let hh = (0, i(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return new Set(t.map((e) => e.exePath));
});
function hE() {
    let e = (0, m.yK)([nH.Ay], () => nH.Ay.getGamesSeen(!1)),
        t = (0, m.bG)([nH.Ay], () => hh(...nH.Ay.getOverrides()));
    g.useEffect(() => ((0, hA.a2)(), hA.e0), []);
    let { gameHistory: i, robloxSubgameHistory: n } = g.useMemo(
        () =>
            e.reduce((e, t) => ((0, hg.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: i, robloxSubgameHistory: n, overrideExePaths: t };
}
function hS(e) {
    let { gameHistory: t } = hE();
    return {
        namedGames: g.useMemo(
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
function hT(e) {
    let { namedGames: t, totalCount: i } = hS(e);
    return { names: t.map((e) => e.name), totalCount: i };
}
function hx() {
    let { namedGames: e } = hS(2),
        [t, i] = g.useMemo(() => e.map((e) => e.id), [e]);
    g.useEffect(() => {
        g1.Ay.fetchApplications([t, i].filter(i9.Vq));
    }, [t, i]);
    let [n, s] = (0, m.yK)([nz.A], () => [t, i].map(nz.A.getApplication), [t, i]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, c.jsx)(nZ.A, { game: n, size: nZ.M.MEDIUM_LARGE }), shape: hm.e0.ROUNDED },
              backIcon:
                  null != i ? { icon: (0, c.jsx)(nZ.A, { game: s, size: nZ.M.MEDIUM }), shape: hm.e0.ROUNDED } : null,
          };
}
let hp = (0, a.AK)(o.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = hT(2);
            return j.intl.format(j.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = hx();
            return { type: d.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: o.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, m.bG)([nH.Ay], () => nH.Ay.getGamesSeen(!1).some((e) => !(0, hg.n1)(e))) && (0, iu.xl)(),
    }),
    hf = (0, a.gN)(o.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [hp] });
var hN = i(395277);
let h_ = (0, a.zD)(o.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => j.intl.string(hN.default.WhdCGP),
    useSubtitle: () => j.intl.string(hN.default.UQ9RHJ),
    useValue: y.tz.useSetting,
    setValue: y.tz.updateSetting,
});
var hI = i(406535);
let hC = (0, a.zD)(o.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => j.intl.string(hN.default.A0FVCV),
        useSubtitle: () => j.intl.string(hN.default.vHX6RG),
        useValue: y.hV.useSetting,
        setValue: function (e) {
            y.hV.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hI.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                });
        },
    }),
    hb = (0, a.zZ)(o.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.WmsPis),
        useSearchTerms: () => [j.intl.string(j.t["8ka8li"])],
        buildLayout: () => [h_, hC, hf],
    });
var hv = i(106531);
let hy = (0, a.AK)(o.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        destinationKey: o.X.DATA_AND_PRIVACY_PANEL,
    }),
    hj = (0, a.gN)(o.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, hv.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [hy],
    });
var hO = i(945810);
let hR = (0, hO.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
var hD = i(365258);
let hL = (0, a.Qx)(o.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => j.intl.string(hN.default["/LHVbt"]),
    useSubtitle: () => j.intl.string(j.t.L5IdzV),
    useOptions: function () {
        return [
            { value: ek.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(hN.default.m3oL7Q) },
            { value: ek.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: j.intl.string(hN.default["5+lnTA"]) },
            { value: ek.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(hN.default["egr+VZ"]) },
        ];
    },
    useValue: y._Z.useSetting,
    setValue: function (e) {
        var t;
        let n = y._Z.getSetting();
        if (
            (y._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, hv.W1)(t) && !hR.getConfig({ location: t }).upsell)
        )
            return;
        let s = (0, hD.g8)(n, e);
        if (null == s) return;
        let l = (0, hD.Xc)(e);
        (0, si.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("81849"), i.e("62041"), i.e("41996")]).then(i.bind(i, 32167));
            return (t) =>
                (0, c.jsx)(e, { ...t, direction: s.direction, affectedGuildIds: s.affectedGuildIds, settingName: l });
        });
    },
});
var hP = i(498642),
    hG = i(573435),
    hM = i(260509),
    hU = i(876399);
function hV(e) {
    let { guild: t, size: i } = e,
        n = (0, hM.Iv)(t, i, !1, !0),
        s = (0, hM.Rb)(t);
    return null != n
        ? (0, c.jsx)("img", { src: n, alt: t.name, height: i, width: i })
        : (0, c.jsx)("div", {
              className: hU.F,
              children: (0, c.jsx)(z.E, {
                  color: "text-subtle",
                  variant: 48 === i ? "text-md/semibold" : "text-xxs/semibold",
                  children: s,
              }),
          });
}
function hk(e) {
    let { guild: t, size: i } = e;
    return (0, c.jsx)(hG.Ay, {
        className: hU.z,
        mask: hG.Ay.Masks.SQUIRCLE,
        width: i,
        height: i,
        children: (0, c.jsx)(hV, { guild: t, size: i }),
    });
}
var hw =
    (((l = {}).SERVER_ORDER = "server-order"),
    (l.RECENTLY_JOINED = "recently-joined"),
    (l.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (l.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    l);
let hF = {
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
        e.concat().sort((e, i) => {
            let n = t.includes(e.id),
                s = t.includes(i.id);
            return !n && s ? -1 : n && !s ? 1 : 0;
        }),
    "activity-sharing-off": (e, t) =>
        e.concat().sort((e, i) => {
            let n = t.includes(e.id),
                s = t.includes(i.id);
            return n && !s ? -1 : !n && s ? 1 : 0;
        }),
    "server-order": (e) => e,
};
var hB = i(775657);
function hz(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        s = (0, m.bG)([hP.A], () => hP.A.getMemberCount(t.id));
    return (0, c.jsxs)(F.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, c.jsx)("div", { className: hB.FO, children: (0, c.jsx)(hk, { guild: t, size: 48 }) }),
            (0, c.jsx)("div", {
                className: hB.QH,
                children: (0, c.jsx)(tK.d, {
                    label: t.name,
                    description: j.intl.format(j.t.zRl6XR, { count: s ?? 0 }),
                    checked: !i,
                    onChange: (e) => n({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let hX = function (e) {
    let { notice: t } = e,
        {
            guilds: i,
            searchQuery: n,
            setSearchQuery: s,
            sortOrder: l,
            setSortOrder: r,
            hasActivityRestrictedGuilds: a,
            onToggleAllActivityRestrictedGuilds: o,
            onToggleActivityRestrictedGuild: u,
            isActivityRestricted: d,
            numActivityRestrictedGuilds: h,
            numTotalGuilds: E,
        } = (function () {
            let [e, t] = (0, g.useState)(""),
                [i, n] = (0, g.useState)("server-order"),
                s = (0, m.bG)([dm.Ay], () => dm.Ay.getFlattenedGuildIds()),
                l = (0, m.bG)([sc.A], () => sc.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = y.Pw.useSetting(),
                [o, u] = (0, g.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await y.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, g.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [A, h] = (0, g.useState)(() => hF[i](r, a)),
                E = A.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? E : E.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: i,
                searchQuery: e,
                setSortOrder: (e) => {
                    h(hF[e](r, a)), n(e);
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: function (e) {
                    let { checked: t, guildId: i } = e,
                        n = new Set(o);
                    t ? n.delete(i) : n.add(i), d([...n]);
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
        S = (0, g.useId)(),
        T = (0, g.useRef)(null),
        x = (0, g.useMemo)(
            () => [
                { id: hw.SERVER_ORDER, label: j.intl.string(j.t.STMPJ2), value: hw.SERVER_ORDER },
                { id: hw.RECENTLY_JOINED, label: j.intl.string(j.t.CbaapP), value: hw.RECENTLY_JOINED },
                { id: hw.ACTIVITY_SHARING_ON, label: j.intl.string(hN.default.ZI51JZ), value: hw.ACTIVITY_SHARING_ON },
                {
                    id: hw.ACTIVITY_SHARING_OFF,
                    label: j.intl.string(hN.default["+kxafn"]),
                    value: hw.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        p = x.find((e) => e.value === l)?.label ?? "";
    return (0, c.jsxs)("div", {
        className: hB.iE,
        children: [
            t,
            (0, c.jsxs)("div", {
                className: hB.N1,
                children: [
                    (0, c.jsx)(A1.I, {
                        query: n,
                        onChange: s,
                        onClear: function () {
                            e7.default.track(A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: h,
                                total_guild_count: E,
                            }),
                                s("");
                        },
                        onFocus: () =>
                            e7.default.track(A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: h,
                                total_guild_count: E,
                            }),
                        onBlur: () =>
                            e7.default.track(A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: h,
                                total_guild_count: E,
                            }),
                        placeholder: j.intl.string(j.t["H+nRYw"]),
                        "aria-label": j.intl.string(j.t["5h0QOP"]),
                        inputProps: { "aria-controls": S, "aria-expanded": !0 },
                    }),
                    i.length > 0 &&
                        (0, c.jsxs)("div", {
                            className: hB.gO,
                            children: [
                                (0, c.jsx)(rU.Y, {
                                    targetElementRef: T,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, c.jsx)(dx.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": j.intl.string(j.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, c.jsx)(e0.rX, {
                                                children: x.map((e) => {
                                                    let { id: t, label: i, value: n } = e;
                                                    return (0, c.jsx)(
                                                        e0.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: i,
                                                            checked: l === n,
                                                            action: () => {
                                                                e7.default.track(
                                                                    A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: n,
                                                                        activity_restricted_guild_count: h,
                                                                        total_guild_count: E,
                                                                    },
                                                                ),
                                                                    r(n);
                                                            },
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                        });
                                    },
                                    children: (e) =>
                                        (0, c.jsxs)(t8.D, {
                                            ...e,
                                            innerRef: T,
                                            className: hB.Ku,
                                            children: [
                                                (0, c.jsx)(z.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: p,
                                                }),
                                                (0, c.jsx)(cN.a, { size: "xs", color: iZ.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, c.jsx)(dW.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? j.intl.string(j.t["7lxcLO"]) : j.intl.string(j.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, c.jsx)(n8.A, {
                "aria-live": "polite",
                role: "region",
                children: j.intl.format(hN.default.EvzDff, { count: i.length }),
            }),
            (0, c.jsxs)("ul", {
                className: hB.X1,
                id: S,
                "aria-label": j.intl.string(j.t["7hB4kg"]),
                children: [
                    0 === i.length &&
                        (0, c.jsx)("div", {
                            className: hB.pb,
                            children: (0, c.jsx)(z.E, {
                                className: hB.R$,
                                variant: "text-lg/medium",
                                children: j.intl.string(j.t["Xe+fJM"]),
                            }),
                        }),
                    i.map((e) =>
                        (0, c.jsx)(
                            hz,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var hY = i(155957);
let hH = (0, a.E2)(o.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [j.intl.string(hN.default["/LHVbt"])],
        Component: function () {
            let e = y.tz.useSetting()
                ? null
                : (0, c.jsx)("div", {
                      className: hY.l,
                      children: (0, c.jsx)(nV.w, { type: "warning", children: j.intl.string(hN.default["xxI0/W"]) }),
                  });
            return (0, c.jsx)(hX, { notice: e });
        },
    }),
    hK = (0, a.zZ)(o.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.bwqjL9),
        buildLayout: () => [hL, hH, hj],
    }),
    hW = (0, a.zD)(o.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => j.intl.string(hN.default.khuuzv),
        useSubtitle: () => j.intl.string(hN.default["8EWsJ8"]),
        useValue: () => y.e.useSetting(),
        setValue: (e) => y.e.updateSetting(e),
    }),
    hZ = (0, a.E2)(o.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, c.jsx)(z.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, c.jsx)(
                            z.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    hq = (0, a.zD)(o.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => j.intl.string(hN.default.Uz5Ipi),
        useSubtitle: () => j.intl.string(hN.default.CZI2Gb),
        useValue: () => y.UM.useSetting(),
        setValue: (e) => y.UM.updateSetting(e),
    }),
    hQ = (0, a.zZ)(o.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => j.intl.string(hN.default["89YBr5"]),
        useSubtitle: () => j.intl.string(j.t.uGDpgH),
        buildLayout: () => [hW, hq, hZ],
        useSearchTerms: () => [j.intl.string(j.t.VOszPA)],
    }),
    hJ = (0, a.t_)(o.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        buildLayout: () => [hb, hK, hQ],
    }),
    h$ = (0, a.i4)(o.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        icon: hc._,
        buildLayout: () => [hJ],
    });
var h0 = i(712440),
    h1 = i(370997);
let h2 = (0, a.E2)(o.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: h1.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var h3 = i(478016),
    h5 = i(259678),
    h4 = i(77468),
    h6 = i(289498),
    h8 = i(573648),
    h7 = i(874490),
    h9 = i(370480),
    Ee = i(968309);
let Et = new Set([A.fg2.XBOX, A.fg2.PLAYSTATION, A.fg2.PLAYSTATION_STAGING, A.fg2.CRUNCHYROLL]);
var Ei = i(169869),
    En = i(235693),
    Es = i(757036),
    El = i(555837),
    Er = i(814925),
    Ea = i(733110),
    Eo = i(43990),
    Eu = i(241524),
    Ed = i(346017),
    Ec = i(51965),
    Eg = i(631368),
    Em = i(968671),
    EA = i(212739),
    Eh = i(30370),
    EE = i(933287),
    ES = i(594387),
    ET = i(651439);
function Ex() {
    let e,
        t,
        n,
        s,
        l,
        { variant: r, showFooter: a } =
            ((e = (0, Eg.$)()),
            (t = (0, Em.GM)("connectedAccountsBannerFooter")),
            (n = (0, EA.O)()),
            (l = null != (s = (0, m.bG)([Eh.A], () => Eh.A.getAccount(null, A.fg2.XBOX))) && !s.revoked),
            e === Eg.C.NONE || n
                ? { variant: Eg.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === Eg.C.NO_ACCESS && !l }),
        { analyticsLocations: o } = (0, eR.Ay)(ty.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, Ed.yW)(o),
        d = (0, Eu.A)("(max-width: 485px)");
    if (r === Eg.C.NONE) return null;
    let g = d ? "md" : "sm",
        h = "",
        S = null;
    switch (r) {
        case Eg.C.HAS_ACCESS:
        case Eg.C.BLOCK_CLAIM:
            (h = j.intl.string(EE.default["7PdsMK"])),
                (S = (0, c.jsx)(Ec.A, {
                    variant: "overlay-primary",
                    size: g,
                    fullWidth: d,
                    text: j.intl.string(EE.default.CubeLC),
                    onClick: () => {
                        (0, si.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([i.e("52283"), i.e("13088")]).then(
                                i.bind(i, 347171),
                            );
                            return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case Eg.C.NO_ACCESS:
            (h = j.intl.string(EE.default.NwkRTZ)),
                (S = (0, c.jsx)(tL.A, {
                    defaultTextOverride: j.intl.string(EE.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: g,
                    fullWidth: d,
                    subscriptionTier: tk.pe.TIER_2,
                }));
            break;
        default:
            (0, i9.xb)(r);
    }
    return (0, c.jsxs)(eR.f5, {
        value: o,
        children: [
            (0, c.jsxs)("div", {
                className: ET.bV,
                children: [
                    (0, c.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.NG1e6l),
                    }),
                    (0, c.jsx)(ry.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, c.jsx)(Eo.N, {
                theme: "dark",
                children: (e) =>
                    (0, c.jsx)("div", {
                        className: e,
                        children: (0, c.jsxs)("div", {
                            className: ET.Nr,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: ET.Tp,
                                    children: [
                                        (0, c.jsx)("div", {
                                            className: ET.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, c.jsx)("div", { className: ET.$h }),
                                        (0, c.jsx)("div", { className: ET.Rv }),
                                        (0, c.jsx)("div", { className: ET.Lw }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: ET.Mn,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: ET.mY,
                                            children: [
                                                (0, c.jsx)("img", {
                                                    className: ET.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, c.jsx)(z.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: ET.DD,
                                                    children: h,
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", { className: ET.lO, children: S }),
                                    ],
                                }),
                                a &&
                                    (0, c.jsxs)(c.Fragment, {
                                        children: [
                                            (0, c.jsx)("div", { className: ET.yF }),
                                            (0, c.jsxs)("div", {
                                                className: ET.sQ,
                                                children: [
                                                    (0, c.jsx)(ov.o, {
                                                        size: d ? "md" : "sm",
                                                        color: iZ.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, c.jsx)(z.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(ES.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(Ed.Hx.CONNECT),
                                                                    (0, Ee.A)({
                                                                        platformType: A.fg2.XBOX,
                                                                        location: "Connected Accounts Banner",
                                                                    });
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
var Ep = i(201718),
    Ef = i(321078),
    EN = i(672130),
    E_ = i(358776),
    EI = i(379848),
    EC = i(567910);
function Eb(e) {
    let { markAsDismissed: t } = e;
    return (
        g.useEffect(() => t(c5.i.UNKNOWN), [t]),
        (0, c.jsx)(e9.Lp, { className: EC.Ad, text: j.intl.string(j.t.y2b7CA) })
    );
}
function Ev(e) {
    let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
    return (0, c.jsxs)("div", {
        className: EC.kL,
        children: [
            n,
            (0, c.jsxs)("div", {
                className: EC.FS,
                children: [
                    (0, c.jsxs)("div", {
                        className: EC.TK,
                        children: [
                            (0, c.jsx)(EI.Ay, {
                                contentTypes: [s],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: i } = e;
                                    return t === s ? (0, c.jsx)(Eb, { markAsDismissed: i }) : null;
                                },
                            }),
                            (0, c.jsx)(z.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, c.jsx)(z.E, { variant: "text-xs/normal", children: i }),
                ],
            }),
            (0, c.jsx)(p.$, { text: j.intl.string(j.t.vD60Pv), onClick: l }),
        ],
    });
}
function Ey() {
    let e = eS.A.getArticleURL(A.MVz.PS_CONNECTION);
    return (0, c.jsx)(Ev, {
        title: j.intl.string(j.t.v20wwm),
        body: j.intl.format(j.t.lTZBit, { help_article: e }),
        img: (0, c.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: er.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, Ee.A)({ platformType: A.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let Ej = "/assets/9df988a227916145.png";
function EO() {
    return (0, c.jsx)(Ev, {
        title: j.intl.string(ES.default["9cLtDI"]),
        body: j.intl.format(ES.default["D+kUbg"], { learnMoreLink: eS.A.getArticleURL(A.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, c.jsx)("img", { src: Ej, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: er.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, Ee.A)({ platformType: A.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function ER() {
    let e = eS.A.getArticleURL(A.MVz.XBOX_CONNECTION);
    return (0, c.jsx)(Ev, {
        title: j.intl.string(j.t["2okkZV"]),
        body: j.intl.format(j.t.OnERSS, { help_article: e }),
        img: (0, c.jsx)("img", { src: Ej, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: er.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, Ee.A)({ platformType: A.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var ED = i(783419),
    EL = i(360308),
    EP = i(230451),
    EG = i(113463);
function EM(e) {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, m.cf)(
            [Eh.A],
            () => ({
                isJoining: Eh.A.isJoining(i.id),
                joinErrorMessage:
                    "" === Eh.A.joinErrorMessage(i.id) ? j.intl.string(j.t.j2d6Km) : Eh.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== Eh.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, m.bG)([sc.A], () => sc.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, c.jsx)(p.$, {
                size: "sm",
                onClick: function () {
                    h4.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, c.jsxs)("div", {
            className: EG.iA,
            children: [
                (0, c.jsxs)("div", {
                    className: EG.XX,
                    children: [
                        (0, c.jsx)(dj.Ay, { size: dj.Ay.Sizes.SMALL, guild: i.guild, className: EG.$f }),
                        (0, c.jsxs)("div", {
                            className: EG.Vn,
                            children: [
                                (0, c.jsx)(z.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, c.jsx)(aI.Anchor, {
                                    href: h8.A.get(i.type)?.getPlatformUserUrl?.(i.account),
                                    children: (0, c.jsx)(z.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: i.account.name,
                                    }),
                                }),
                            ],
                        }),
                        t,
                    ],
                }),
                l &&
                    (0, c.jsx)(z.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: EG.R,
                        children: s,
                    }),
            ],
        })
    );
}
function EU(e) {
    var t;
    let i,
        n,
        { account: s } = e,
        l =
            ((t = s.id),
            (i = (0, El.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, Es.L)(tk.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return s.type === A.fg2.XBOX && l
        ? (0, c.jsx)(EO, {})
        : s.twoWayLink
          ? null
          : s.type === A.fg2.XBOX
            ? (0, c.jsx)(ER, {})
            : s.type === A.fg2.PLAYSTATION
              ? (0, c.jsx)(Ey, {})
              : null;
}
function EV(e) {
    let t,
        i,
        n,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: m } = e,
        [h, E] = g.useState(u.friendSync),
        [S, T] = g.useState(u.visibility),
        [x, f] = g.useState(u.metadataVisibility),
        [N, _] = g.useState(u.showActivity),
        [I, C] = g.useState(null),
        [b, v] = g.useState(null),
        [y, O] = g.useState(!1),
        [R, D] = g.useState([]),
        L = (0, h7.ML)(u.type),
        P = h8.A.get(L);
    g.useEffect(() => {
        E(u.friendSync), T(u.visibility), f(u.metadataVisibility), _(u.showActivity);
    }, [u]);
    let G = { inProgressVisibility: I, inProgressMetadataVisibility: b },
        M = g.useRef(G);
    return (
        g.useEffect(() => {
            M.current = G;
        }),
        g.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = M.current;
            null != e && (T(e), h4.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (f(t), h4.A.setMetadataVisibility(u.type, u.id, t), v(null));
        }, [u]),
        (0, c.jsxs)("div", {
            className: EG.FI,
            children: [
                ((t = h8.A.get(u.type)),
                (i = h8.A.get(L)),
                (n = "1" === (u.metadata ?? {})[ED.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === A.fg2.TWITTER &&
                    n &&
                    (s = (0, c.jsx)(n6.m, {
                        text: j.intl.string(j.t.Jebrww),
                        children: (0, c.jsx)(Er.A, {
                            color: iZ.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, c.jsx)(h3.U, { size: "xs", color: iZ.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, c.jsxs)("div", {
                    className: EG.Il,
                    children: [
                        (0, c.jsx)("img", {
                            alt: i.name,
                            className: EG.gj,
                            src: (0, u9.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, c.jsxs)("div", {
                            children: [
                                (0, c.jsxs)("div", {
                                    className: EG.$p,
                                    children: [
                                        (0, c.jsx)(z.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: EG.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, c.jsx)("div", { className: EG.cG, children: s }),
                                    ],
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: EG.Au,
                                    children: i.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? j.intl.format(EP.default.Glhokn, { platformName: i.name })
                                        : i.name,
                                }),
                            ],
                        }),
                        (0, c.jsx)(t8.D, {
                            className: EG.uH,
                            onClick: function () {
                                let e = h8.A.get(u.type);
                                (0, si.openModal)((t) =>
                                    (0, c.jsx)(st.Modal, {
                                        title: j.intl.formatToPlainString(j.t.U5x12f, { name: e.name }),
                                        subtitle: j.intl.format(j.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: j.intl.string(j.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: j.intl.string(j.t.bsbMVz),
                                                onClick: () => {
                                                    o(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            Et.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, c.jsx)(sB.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, c.jsx)(dt.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, c.jsx)(EU, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, h9.An)(t[ED.pK.CREATED_AT], m);
                    switch (e.type) {
                        case A.fg2.REDDIT:
                            i = (0, Ei.xE)(t, EG.Nz);
                            break;
                        case A.fg2.STEAM:
                            i = (0, Ei.dy)(t, EG.Nz);
                            break;
                        case A.fg2.BLUESKY:
                        case A.fg2.TWITTER:
                        case A.fg2.MASTODON:
                            i = (0, Ei.ED)(t, EG.Nz);
                            break;
                        case A.fg2.EBAY:
                            i = (0, Ei.ub)(t, EG.Nz);
                            break;
                        case A.fg2.PAYPAL:
                            i = (0, Ei.gZ)(t, EG.Nz);
                            break;
                        case A.fg2.TIKTOK:
                            i = (0, Ei.HU)(t, EG.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, c.jsx)(
                                z.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: EG.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = R.includes(e.id),
                        l = j.intl.string(j.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== h8.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, c.jsx)(e9.Lp, { className: EG.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, c.jsx)(
                                    z.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: EG.vt,
                                        children: j.intl.format(j.t.Up2ni7, {
                                            helpdeskUrl: eS.A.getArticleURL(A.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = j.intl.string(j.t["LVh3/5"]));
                    return (
                        s && (l = j.intl.string(j.t.i4jeWR)),
                        i.push(
                            (0, c.jsx)(
                                "div",
                                {
                                    className: EG.jy,
                                    children: (0, c.jsx)(p.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: y,
                                        disabled: s,
                                        "aria-label": j.intl.string(j.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  O(!0),
                                                      h4.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              R.push(e.id), D(R), O(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, c.jsx)("div", { className: EG.tJ, children: i })
                    );
                })(u),
                (A.txh.has(u.type) &&
                    (l = (0, c.jsx)(tK.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: h,
                        onChange: function (e) {
                            E(e), h4.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                A.ewM.has(u.type) &&
                    (r = (0, c.jsx)(tK.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: P.name }),
                        checked: N,
                        onChange: function (e) {
                            _(e), h4.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                h8.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, c.jsx)(tK.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === x,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                v(i), (0, Ee.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            f(i), h4.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== S || null == u.metadata,
                    })),
                (0, c.jsxs)("div", {
                    className: EG.HZ,
                    children: [
                        (0, c.jsx)(tK.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === S,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    C(i), (0, Ee.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                T(i), h4.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, c.jsx)(n2.c, {});
                })(),
                u.revoked
                    ? (0, c.jsx)(rj.p, {
                          messageType: rj.Y.INFO,
                          children: j.intl.format(j.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, Ee.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, c.jsx)(tH.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, c.jsx)(EM, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, c.jsx)(En.A, { partner: u.type }),
            ],
        })
    );
}
function Ek(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, c.jsxs)("div", {
              className: EG.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = v.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, c.jsxs)("div", {
                          className: EG.Il,
                          children: [
                              (0, c.jsx)("img", { alt: i.name, className: ni()(EG.gj, EG.sN), src: n }),
                              (0, c.jsxs)("div", {
                                  children: [
                                      (0, c.jsx)("div", {
                                          className: EG.$p,
                                          children: (0, c.jsx)(z.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: EG.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, c.jsx)(z.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: EG.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, c.jsx)(t8.D, {
                                  className: EG.uH,
                                  onClick: () =>
                                      (0, h1.d1)(i, t.scopes, () => {
                                          h0.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, c.jsx)(dt.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, c.jsx)("div", {
                      className: EG.HZ,
                      children: (0, c.jsx)(tK.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              Ep.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function Ew(e) {
    let t = h8.A.get(e);
    (0, Ee.A)({ platformType: t.type }),
        e7.default.track(A.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function EF() {
    let e = (0, h7.gn)(),
        t = (0, nX.A)((0, EL.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, c.jsxs)("div", {
        className: EG.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, c.jsx)(
                        EN.A,
                        { application: e, className: EG.__invalid_accountButton, innerClassName: EG.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, c.jsx)(
                        h6.A,
                        { type: e.type, className: EG.__invalid_accountButton, innerClassName: EG.U$ },
                        e.type,
                    ),
                ),
            (0, c.jsx)(n6.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, c.jsx)("div", {
                    className: ni()(EG.ej, EG.__invalid_accountButton),
                    children: (0, c.jsx)(h5.vN, {
                        children: (0, c.jsx)("button", {
                            className: ni()(EG.R8, EG.U$),
                            type: "button",
                            onClick: function () {
                                e2.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: Ew });
                            },
                            "aria-label": j.intl.string(j.t.Zhcj9X),
                            children: (0, c.jsx)(i$._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": j.intl.string(j.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function EB(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        o = (0, E_.SV)("ConnectionsList"),
        u = g.useMemo(() => n.filter((e) => h8.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, c.jsx)(aV.y, { type: aV.y.Type.SPINNING_CIRCLE })
            : 0 === u.length && 0 === s.length
              ? (0, c.jsx)(An.pp, {
                    theme: r,
                    className: o ? EG.p$ : void 0,
                    children: (0, c.jsx)(An.SG, {
                        note: j.intl.string(j.t.WenGZ2),
                        children: j.intl.string(j.t.aoLS84),
                    }),
                })
              : (0, c.jsxs)(c.Fragment, {
                    children: [
                        o &&
                            (0, c.jsx)(E.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: j.intl.format(j.t.AioIGb, { count: s.length + u.length }),
                            }),
                        s.map((e, t) =>
                            (0, c.jsx)(
                                Ek,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        u.map((e, t) =>
                            (0, c.jsx)(
                                EV,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            h4.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, c.jsx)("div", { className: EG.V, children: t })
    );
}
let Ez = (0, a.E2)(o.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, E_.SV)("NewConnectSection");
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: A.X7G.PRIVACY }),
                children: (0, c.jsx)(EF, {}),
            });
        },
        useSearchTerms: () => [
            j.intl.string(j.t.ZeDrUf),
            j.intl.string(j.t.Zhcj9X),
            j.intl.string(j.t.QqTz8b),
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    }),
    EX = (0, a.E2)(o.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, m.bG)([e8.A], () => e8.A.hidePersonalInformation),
                t = (0, m.bG)([Eh.A], () => Eh.A.isFetching()),
                i = (0, m.bG)([Eh.A], () => Eh.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, m.cf)([Ea.default], () => ({
                    authorizedAppsFetchState: Ea.default.getFetchState(),
                    authorizedApps: Ea.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, Ef.A)(s0.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, uc.Ay)(),
                o = (0, m.bG)([oh.default], () => oh.default.locale);
            return (g.useEffect(() => {
                n === Ea.FetchState.NOT_FETCHED && h0.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)(Ex, {}),
                          (0, c.jsx)(EB, {
                              fetching: t || l || (r.length > 0 && n !== Ea.FetchState.FETCHED),
                              accounts: i,
                              appIdentities: r,
                              authorizedApps: s,
                              theme: a,
                              locale: o,
                          }),
                      ],
                  });
        },
        initialize: () => {
            h4.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var EY = i(206828);
let EH = (0, a.zZ)(o.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, m.bG)([Eh.A], () => Eh.A.getAccounts()),
                t = g.useMemo(
                    () =>
                        h8.A.filter(
                            (e) =>
                                e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") ===
                                !0,
                        ).filter((t) => e.some((e) => e.type === t.type)),
                    [e],
                ),
                [i, n] = g.useState(0),
                [s, l] = g.useState(t),
                r = t !== s;
            r && (l(t), n(0));
            let a = g.useMemo(() => t[i], [t, i]),
                o = (0, nX.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: c, fetched: h } = (0, EY.RD)(o),
                E =
                    a?.type === A.fg2.RIOT_GAMES || a?.type === A.fg2.LEAGUE_OF_LEGENDS
                        ? j.intl.string(EP.default["1S6oAo"])
                        : o?.name,
                S = null != a && h,
                T = S && !c && u && o?.connectionEntrypointUrl != null;
            return (
                r || !S || T || n((e) => e + 1),
                g.useMemo(
                    () =>
                        T
                            ? {
                                  type: d.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: j.intl.format(EP.default.wUXupS, {
                                      connectionName: a.name,
                                      applicationName: E,
                                      connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                      helpCenterLink:
                                          a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                                  }),
                              }
                            : null,
                    [a, E, o, T],
                )
            );
        },
        buildLayout: () => [Ez, EX],
    }),
    EK = (0, a.zZ)(o.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [h2],
        initialize: () => (
            h0.A.fetch(),
            () => {
                h1.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    EW = (0, a.t_)(o.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: aM.L,
        buildLayout: () => [EH, EK],
    }),
    EZ = (0, a.i4)(o.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: As.q,
        buildLayout: () => [EW],
    });
var Eq = i(625657),
    EQ = i(592598),
    EJ = i(773371),
    E$ = i(184809),
    E0 = i(672396);
let E1 = E3(null);
function E2() {
    var e;
    let t = E3(E1);
    (e = E1),
        k().isEqual(k().omit(t, "old_enabled"), k().omit(e, "old_enabled")) ||
            (e7.default.track(A.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (E1 = t));
}
function E3(e) {
    let t = E$.default.getNotificationPositionMode(),
        i = t !== A.G6Q.DISABLED,
        n = sR.Ay.getOverlayKeybind(),
        s = sR.Ay.getOverlayChatKeybind();
    return {
        enabled: EJ.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: EQ.A.isNotificationDisabled(E0.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, se.dI)(n.shortcut) : null,
        text_activation_hotkey: null != s ? (0, se.dI)(s.shortcut) : null,
        text_opacity_slider: E$.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? EJ.default.enabled,
    };
}
var E5 = i(237984),
    E4 = i(295648);
function E6(e) {
    e.preventDefault(), e.stopPropagation();
}
function E8(e) {
    let {
        header: t,
        icon: i,
        title: n,
        description: s,
        action: l,
        hint: r,
        warning: a,
        onClick: o,
        "aria-label": u,
        className: d,
    } = e;
    return (0, c.jsxs)("div", {
        className: ni()(E4.HS, d),
        children: [
            (0, c.jsxs)(A2.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, c.jsx)("div", { className: E4.x_, children: t }),
                    (0, c.jsxs)("div", {
                        className: E4.rN,
                        children: [
                            null != i && (0, c.jsx)("div", { className: E4.$t, children: i }),
                            (0, c.jsxs)("div", {
                                className: E4.c8,
                                children: [
                                    (0, c.jsx)(z.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: E4.SZ,
                                        children: n,
                                    }),
                                    null != s &&
                                        (0, c.jsx)(z.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, c.jsx)(z.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, c.jsx)("div", { className: E4.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)("div", { className: E4.Om, children: a }),
        ],
    });
}
let E7 = (0, a.E2)(o.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, c.jsx)(E8, {
            title: j.intl.string(j.t["z4/l+V"]),
            description: j.intl.string(j.t["3aZq/0"]),
            action: (0, c.jsx)(p.$, {
                variant: "primary",
                text: j.intl.string(j.t.s2nVhG),
                onClick: () => {
                    (0, E5.b)(ty.A.USER_SETTINGS, A.BRT.APP);
                },
            }),
            "aria-label": j.intl.string(j.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t["z4/l+V"])],
});
var E9 = i(31300),
    Se = i(780907),
    St = i(684013),
    Si = i(56562),
    Sn = i(311043),
    Ss = i(569926),
    Sl = i(810412),
    Sr = i(41984),
    Sa = i(296027),
    So = i(562519);
let Su = 5 * i(927813).A.Millis.DAY,
    Sd = new So.A("overlay_survey_timestamps");
function Sc(e, t) {
    let n, s;
    (n = Date.now()),
        (null != (s = Array.from(Sd.values()).reduce((e, t) => Math.max(e, t), 0)) && n - s < Su) ||
            Array.from(Sd.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, si.openModalLazy)(async () => {
                let n,
                    { default: s } = await Promise.all([i.e("79969"), i.e("82318")]).then(i.bind(i, 387101));
                return (n = Date.now()), Sd.add(n), (i) => (0, c.jsx)(s, { ...i, clientSettingType: e, gameId: t });
            });
}
function Sg() {
    (0, nQ.sL)("overlay-settings");
}
function Sm(e) {
    let { className: t, game: i } = e;
    return (0, nQ.NP)() && null != i && i.elevated
        ? (0, c.jsx)("div", {
              className: t,
              children: (0, c.jsx)(rj.p, {
                  messageType: rj.Y.WARNING,
                  action: (0, c.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: Sg,
                  }),
                  children: j.intl.format(j.t["LJzl+0"], { helpCenterLink: eS.A.getArticleURL(A.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var SA = i(760751),
    Sh = i(9302),
    SE = i(656513);
let SS = new Set([
    Sr.AR.INITIALIZING,
    Sr.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    Sr.AR.WAITING_FOR_MODULE_TRACKING,
    Sr.AR.WAITING_FOR_OVERLAY_OPEN,
    Sr.AR.WAITING_FOR_POPOUT_OPEN,
    Sr.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    Sr.AR.WAITING_FOR_REACT_INITIALIZATION,
    Sr.AR.WAITING_FOR_PID_FOCUS,
    Sr.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function ST(e) {
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = g.useState(!1);
    return (0, c.jsx)(SE.N, {
        className: E4.uR,
        collapsibleContent: (0, c.jsx)("div", { className: E4.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(E8, {
                ...s,
                onClick: (e) => {
                    var i;
                    r((i = !l)), n?.(i), t?.(e);
                },
                className: ni()(E4.AC, i),
                action: (0, c.jsxs)("div", {
                    className: E4.rc,
                    children: [
                        s.action,
                        l
                            ? (0, c.jsx)(cN.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, c.jsx)(i$._, {
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
let Sx = (0, a.E2)(o.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = nW();
        (0, Ss.I)(e?.id);
        let i = e?.pid,
            n = (0, m.bG)(
                [Sa.default],
                () => (null == e || null == i ? null : Sa.default.getTrackedGameByPid(i)),
                [e, i],
                nB(),
            ),
            { data: s } = (0, Ss.I)(n?.gameId),
            { enabledLegacy: l, enabledOOP: r } = (0, m.cf)(
                [SA.A, te.A, Sn.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, nH.hw)(e, !1, [SA.A, te.A, Sn.A]),
                [e, n],
            ),
            a = (0, m.bG)(
                [nH.Ay, SA.A, te.A, Sn.A],
                () => (null == e ? null : (0, nH.xU)(e, nH.Ay, SA.A, te.A, Sn.A)),
                [e],
                nB(),
            ),
            [o, u] = g.useState(r),
            [d, A] = g.useState(l),
            [h, E] = g.useState(!1);
        g.useEffect(() => {
            u(r), A(l);
        }, [r, l]);
        let S = !(0, Sh.supportsLegacy)(),
            T = !(0, Sh.supportsOutOfProcess)(),
            { legacyEnabled: x, oopEnabled: p } = (0, m.cf)([Sa.default], () => Sa.default.getGlobalEnabledStatus());
        function f(t, i) {
            if (null == e) return;
            let n = !1,
                s = !1;
            switch (i) {
                case Sl.OverlayToggledClientSettingType.LEGACY_GAME:
                    A(t), Se.Ay.toggleOverlay(e, t, o), (n = !t && d);
                    break;
                case Sl.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), Se.Ay.toggleOverlay(e, d, t), (s = !t && o);
                    break;
                case Sl.OverlayToggledClientSettingType.LEGACY:
                    St.A.setEnabled(t, p), (0, Sl.Q3)(t, Sl.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case Sl.OverlayToggledClientSettingType.OOP:
                    St.A.setEnabled(x, t), (0, Sl.Q3)(t, Sl.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (n || s) &&
                Sc(
                    n ? Sl.OverlayToggledClientSettingType.LEGACY_GAME : Sl.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let N = S && T,
            _ = !x && !p,
            I = !o && !x && d && !S,
            C = !d && !p && o && !T,
            b = n?.overlayMethod === Sr.Ue.Disabled,
            v = n?.state === Sr.AR.OVERLAY_RENDERING && !b,
            y = n?.state != null && SS.has(n.state) && !b,
            O = n?.overlayMethod === Sr.Ue.OutOfProcess,
            R = n?.overlayMethod === Sr.Ue.OutOfProcessLimitedInteraction,
            D = n?.overlayMethod === Sr.Ue.Hook,
            L = n?.state === Sr.AR.OVERLAY_CRASHED || n?.state === Sr.AR.OVERLAY_CRASHED_DISABLED,
            P = !o && !d,
            [G, M] = (function () {
                switch (!0) {
                    case v && O:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, c.jsx)(
                                        z.E,
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
                    case v && R:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, c.jsx)(
                                        z.E,
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
                    case v && D:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, c.jsx)(
                                        z.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case n?.fullscreenType !== Si.aI.BORDERLESS_FULLSCREEN:
                                        return j.intl.string(j.t.mJmbeC);
                                    case T:
                                        return j.intl.string(j.t.C7bLTQ);
                                    case !n?.oopEnabled:
                                        return j.intl.string(j.t.WiY24u);
                                    case !p:
                                        return j.intl.string(j.t.cAFVsL);
                                    case !(s?.supportsOutOfProcessOverlay ?? !0):
                                        return j.intl.string(j.t.XcGEcs);
                                    default:
                                        return j.intl.string(j.t.bJXH2v);
                                }
                            })(),
                        ];
                    case L:
                        return [j.intl.string(j.t.OFC2aw), null];
                    case N:
                        return [j.intl.string(j.t.m7X4az), null];
                    case _:
                        return [j.intl.string(j.t["9DUS5l"]), null];
                    case P:
                        return [j.intl.string(j.t.nQ9EdJ), null];
                    case I:
                    case C:
                        return [j.intl.string(j.t.VWUn0a), null];
                    case y:
                        if (O) return [j.intl.string(j.t["s8+CFq"]), null];
                        if (D) return [j.intl.string(j.t.JEEdqt), null];
                        if (R) return [j.intl.string(j.t.pzBMwY), null];
                        return [j.intl.string(j.t["2Xhy9k"]), null];
                    case null == n:
                        return [j.intl.string(j.t.vwHPRi), null];
                    case b: {
                        let e = n?.fullscreenType === Si.aI.FULLSCREEN ? j.intl.string(j.t.mJmbeC) : null;
                        return [j.intl.string(j.t.VPW4XY), e];
                    }
                    default:
                        return [j.intl.string(j.t.ONovP5), null];
                }
            })();
        (0, eA.Ay)(() => {
            Se.Ay.getDetectableGames();
        });
        let [U, V] = g.useMemo(
            () =>
                y
                    ? ["text-muted", iZ.A.colors.TEXT_MUTED.css]
                    : v && R
                      ? ["text-feedback-warning", iZ.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : v && O
                        ? ["text-feedback-positive", iZ.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : v && D
                          ? ["text-strong", iZ.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", iZ.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [y, v, R, O, D],
        );
        return null == e
            ? null
            : (0, c.jsxs)(ST, {
                  onExpand: E,
                  className: h ? E4.tx : void 0,
                  title: (0, c.jsxs)(c.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, c.jsx)(n6.m, {
                                    text: j.intl.string(j.t["4PJP5p"]),
                                    children: (0, c.jsx)(Er.A, {
                                        size: 16,
                                        color: iZ.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, c.jsx)(h3.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: iZ.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: G,
                  hint: null != M ? M : void 0,
                  header: (0, c.jsxs)(c.Fragment, {
                      children: [
                          v || y
                              ? (0, c.jsx)(E9.k, { size: "xxs", color: V })
                              : (0, c.jsx)("div", { className: E4.W4 }),
                          (0, c.jsx)(z.E, {
                              variant: "text-xs/semibold",
                              color: U,
                              children: j.intl.string(j.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, c.jsx)(nZ.A, { game: t, pid: e?.pid, size: nZ.M.MEDIUM }),
                  "aria-label": j.intl.string(j.t["87O5GC"]),
                  action: (0, c.jsx)(t8.D, {
                      onClick: (e) => E6(e),
                      children: (0, c.jsx)(tK.d, {
                          checked: (o && p) || (d && x),
                          disabled: N,
                          onChange: (t) => {
                              !(function (t, i) {
                                  if (null == e) return;
                                  let n = !1,
                                      s = !1;
                                  switch (i) {
                                      case "game":
                                          Se.Ay.toggleOverlay(e, t, t), A(t), u(t), (n = !t && d), (s = !t && o);
                                          break;
                                      case "global":
                                          St.A.setEnabled(t, t), (n = !t && x), (s = !t && p);
                                          break;
                                      case "both":
                                          St.A.setEnabled(t, t),
                                              Se.Ay.toggleOverlay(e, t, t),
                                              A(t),
                                              u(t),
                                              (n = (!t && x) || (!t && d)),
                                              (s = (!t && p) || (!t && o));
                                  }
                                  let l = null;
                                  n
                                      ? (l =
                                            "game" === i
                                                ? Sl.OverlayToggledClientSettingType.LEGACY_GAME
                                                : Sl.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === i
                                                ? Sl.OverlayToggledClientSettingType.OOP_GAME
                                                : Sl.OverlayToggledClientSettingType.OOP),
                                      null != l && Sc(l, e.id ?? null);
                              })(
                                  t,
                                  (function (e, t) {
                                      let i = !t && e,
                                          n = !p && o,
                                          s = !x && d,
                                          l = !o && p,
                                          r = !d && x;
                                      switch (!0) {
                                          case i && (n || s) && (l || r):
                                              return "both";
                                          case i && (n || s):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && p) || (d && x)),
                              );
                          },
                      }),
                  }),
                  warning: (0, c.jsx)(Sm, { className: E4.Hh, game: e }),
                  children: [
                      (0, c.jsx)(E8, {
                          title: j.intl.string(j.t["7BlVIs"]),
                          description: j.intl.string(j.t.ndgADE),
                          hint: p ? void 0 : j.intl.string(j.t.cAFVsL),
                          "aria-label": j.intl.string(j.t["7BlVIs"]),
                          action: (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(tK.d, {
                                      checked: o && p,
                                      disabled: T,
                                      onChange: (e) => {
                                          e && !p
                                              ? f(e, Sl.OverlayToggledClientSettingType.OOP)
                                              : f(e, Sl.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, c.jsx)("div", { className: E4.Kz }),
                              ],
                          }),
                      }),
                      (0, c.jsx)(E8, {
                          title: j.intl.string(j.t.BfFpW1),
                          description: j.intl.string(j.t.OzInYk),
                          hint: x ? void 0 : j.intl.string(j.t["3sYHXm"]),
                          "aria-label": j.intl.string(j.t.BfFpW1),
                          action: (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(tK.d, {
                                      checked: d && x,
                                      disabled: S,
                                      onChange: (e) => {
                                          e && !x
                                              ? f(e, Sl.OverlayToggledClientSettingType.LEGACY)
                                              : f(e, Sl.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, c.jsx)("div", { className: E4.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = nW();
        return null != e;
    },
    useSearchTerms: () => [j.intl.string(j.t["9cb1Uz"])],
});
var Sp = i(206885);
function Sf(e) {
    let { game: t, gameApplication: i } = e,
        n = g.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, m.bG)([nz.A], () => (null != i ? i : nz.A.getApplication(t?.id)), [i, t]);
    return (0, c.jsx)(nZ.A, { game: s, pid: n, size: nZ.M.SMALL });
}
function SN(e) {
    let {
        rawGame: t,
        gameApplication: i,
        supportDisabled: n,
        getEnabledFromStatus: s,
        onChange: l,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, Ss.I)(t?.id);
    let o = (0, m.cf)([nH.Ay, SA.A, te.A, Sn.A], () => (0, nH.xU)(t, nH.Ay, SA.A, te.A, Sn.A)),
        u = (0, m.cf)([SA.A, te.A, Sn.A], () => (0, nH.hw)(t, !1, [SA.A, te.A, Sn.A]), [t]),
        d = s(u),
        [A, h] = g.useState(d);
    return (
        g.useEffect(() => {
            h(d);
        }, [d]),
        (0, c.jsx)(E8, {
            title: t.name,
            icon: (0, c.jsx)(Sf, { game: o, gameApplication: i }),
            "aria-label": a,
            action: (0, c.jsxs)(c.Fragment, {
                children: [
                    (0, c.jsx)(tK.d, {
                        checked: A,
                        disabled: n,
                        onChange: (e) => {
                            let i;
                            return (i = !e && A), void (h(e), l(e, o, u), i && Sc(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, c.jsx)("div", { className: E4.Kz }),
                ],
            }),
        })
    );
}
let S_ = (0, a.E2)(o.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = g.useState(!1),
                { legacyEnabled: i, oopEnabled: n } = (0, m.cf)([Sa.default], () =>
                    Sa.default.getGlobalEnabledStatus(),
                ),
                s = (0, m.yK)([nH.Ay], () => nH.Ay.getGamesSeen(!0)).filter((e) => !(0, hg.n1)(e)),
                l = (0, nX.A)(s.map((e) => e.id)),
                r = !(0, Sh.supportsLegacy)();
            function a(e) {
                St.A.setEnabled(e, n);
                let t = nH.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, Sl.Q3)(e, Sl.OverlayToggledClientSettingType.LEGACY, t),
                    !e && i && Sc(Sl.OverlayToggledClientSettingType.LEGACY, t);
            }
            function o(e, t, i) {
                let { enabledOOP: n } = i;
                Se.Ay.toggleOverlay(t, e, n);
            }
            let u = g.useMemo(
                () =>
                    (0, Sh.supportsLegacy)()
                        ? r
                            ? j.intl.string(j.t.r9jEVw)
                            : j.intl.string(j.t.OzInYk)
                        : j.intl.string(j.t["8Ox6/E"]),
                [r],
            );
            return 0 === s.length
                ? (0, c.jsx)(E8, {
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      className: E4.dA,
                      action: (0, c.jsxs)(c.Fragment, {
                          children: [
                              (0, c.jsx)(tK.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              Sp.O && (0, c.jsx)("div", { className: E4.Kz }),
                          ],
                      }),
                  })
                : (0, c.jsxs)(ST, {
                      onExpand: t,
                      className: e ? E4.tx : void 0,
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      action: (0, c.jsx)(t8.D, {
                          onClick: (e) => E6(e),
                          children: (0, c.jsx)(tK.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, c.jsx)("div", {
                              className: E4.SC,
                              children: (0, c.jsx)(z.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, c.jsx)(S.Ip, {
                              className: E4.XG,
                              children: s.map((e, t) =>
                                  (0, c.jsx)(
                                      SN,
                                      {
                                          rawGame: e,
                                          clientSettingType: Sl.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: l[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: j.intl.format(j.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.BfFpW1)],
    }),
    SI = (0, a.E2)(o.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = g.useState(!1),
                { oopEnabled: i, legacyEnabled: n } = (0, m.cf)([Sa.default], () =>
                    Sa.default.getGlobalEnabledStatus(),
                ),
                s = !(0, Sh.supportsOutOfProcess)(),
                l = (0, m.yK)([nH.Ay], () => nH.Ay.getGamesSeen(!0)).filter((e) => !(0, hg.n1)(e)),
                r = (0, nX.A)(l.map((e) => e.id));
            function a(e) {
                let t = !e && i;
                St.A.setEnabled(n, e);
                let s = nH.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, Sl.Q3)(e, Sl.OverlayToggledClientSettingType.OOP, s),
                    t && Sc(Sl.OverlayToggledClientSettingType.OOP, s);
            }
            function o(e, t, i) {
                let { enabledLegacy: n } = i;
                Se.Ay.toggleOverlay(t, e, n);
            }
            let u = g.useMemo(
                () => (Sp.O ? (s ? j.intl.string(j.t.C7bLTQ) : j.intl.string(j.t.ndgADE)) : j.intl.string(j.t.m7X4az)),
                [s],
            );
            return 0 === l.length
                ? (0, c.jsx)(E8, {
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      className: E4.dA,
                      action: (0, c.jsxs)(c.Fragment, {
                          children: [
                              (0, c.jsx)(tK.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              Sp.O && (0, c.jsx)("div", { className: E4.Kz }),
                          ],
                      }),
                  })
                : (0, c.jsxs)(ST, {
                      onExpand: t,
                      className: e ? E4.tx : void 0,
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      action: (0, c.jsx)(t8.D, {
                          onClick: (e) => E6(e),
                          children: (0, c.jsx)(tK.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, c.jsx)("div", {
                              className: E4.SC,
                              children: (0, c.jsx)(z.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, c.jsx)(S.Ip, {
                              className: E4.XG,
                              children: l.map((e, t) =>
                                  (0, c.jsx)(
                                      SN,
                                      {
                                          rawGame: e,
                                          clientSettingType: Sl.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: s,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: j.intl.format(j.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["7BlVIs"])],
    }),
    SC = (0, a.zZ)(o.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [Sx, SI, S_, E7],
    }),
    Sb = (0, a.zD)(o.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, m.bG)([E$.default], () => !E$.default.disableClickableRegions),
        setValue: (e) => {
            St.A.setDisableClickableRegions(!e);
        },
        useTitle: () => j.intl.string(j.t["+eFXxq"]),
        useSubtitle: () => j.intl.string(j.t.kivMAp),
    }),
    Sv = (0, a.E2)(o.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, m.bG)([sR.Ay], () => sR.Ay.getOverlayKeybind()),
                t = !(0, Sh.supportsLegacy)(),
                i = !(0, Sh.supportsOutOfProcess)(),
                [n, s] = (0, m.yK)([nH.Ay], () => [nH.Ay.canShowAdminWarning, nH.Ay.getVisibleGame()], []),
                l = (0, nQ.NP)(),
                r = null != s && s.elevated && n && !l,
                a = !(0, sR.DV)(e?.shortcut ?? []);
            return (0, c.jsx)("div", {
                className: E4.hc,
                children: (0, c.jsxs)("div", {
                    className: E4.eH,
                    children: [
                        (0, c.jsxs)("div", {
                            className: E4.Bu,
                            children: [
                                (0, c.jsx)(z.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: j.intl.string(j.t.VsAZcC),
                                }),
                                r &&
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: E4.y7,
                                        children: j.intl.string(j.t.NsowVa),
                                    }),
                                a &&
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: E4.y7,
                                        children: j.intl.string(j.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, c.jsx)("div", {
                            className: E4.IH,
                            children: (0, c.jsx)(n9.A, {
                                disabled: t && i,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    ts()(null != e, "Keybind should never be undefined"),
                                        nk.A.setKeybind({ ...e, shortcut: t });
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.VsAZcC)],
    });
var Sy = i(515183),
    Sj = i(682763);
let SO = (0, a.zD)(o.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = nW();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = nW();
            return null != e && (0, Sy.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = nW(),
                i = t?.id,
                n = (0, m.bG)([EQ.A], () => EQ.A.isLimitedInteractionOverrideEnabled(i)),
                s = null != e && (0, Sy.qJ)(e.pid);
            return n || s;
        },
        setValue: (e) => {
            let t,
                i,
                n,
                s,
                { runningGameApplication: l } =
                    ((t = nY.A.getStreamerActiveStreamMetadata()),
                    (s = nK(
                        t,
                        (n =
                            null != (i = nH.Ay.getVisibleGame())
                                ? nH.Ay.getGameOrTransformedSubgameForPID(i.pid)
                                : null),
                    )),
                    { runningGame: n ?? void 0, runningGameApplication: nz.A.getApplication(s) ?? void 0 });
            null != l && (0, Sj.x8)(l.id, e);
        },
        useTitle: () => j.intl.string(j.t.wgVQND),
        useSubtitle: () => j.intl.string(j.t["5SsyF5"]),
    }),
    SR = (0, a.zZ)(o.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [Sv, SO, Sb] });
var SD = i(93465);
let SL = [
    {
        title: j.t.eVE4LX,
        description: j.t["72WNqk"],
        disabledSetting: SD.M.TEXT_CHAT,
        key: o.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: j.t.oifnSh,
        description: j.t.bgU5r0,
        disabledSetting: SD.M.WELCOME_GENERAL,
        key: o.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: j.t.hqsZJW,
        description: j.t.kHjdqc,
        disabledSetting: SD.M.GO_LIVE_NUDGE,
        key: o.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: j.t.sop3rn,
        description: j.t.pjgffc,
        disabledSetting: SD.M.GAME_ACTIVITY,
        key: o.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: j.t["2QVhbb"],
        description: j.t.wQ4ilB,
        disabledSetting: SD.M.NOW_PLAYING,
        key: o.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: j.t.giM9fA,
        description: j.t.EhAfWj,
        disabledSetting: SD.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: o.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, im.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, m.bG)([EQ.A], () => EQ.A.isNotificationDisabledBySetting(SD.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function SP(e) {
    return (0, a.zD)(e.key, {
        useTitle: () => j.intl.string(e.title),
        useSubtitle: () => j.intl.string(e.description),
        useValue: () => !(0, m.bG)([EQ.A], () => EQ.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            St.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let SG = (0, a.FW)(o.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => SL.map(SP),
    }),
    SM = (0, a.zZ)(o.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.xOE5bA),
        buildLayout: () => [SG],
    }),
    SU = (0, a.Hn)(o.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => j.intl.string(j.t.dnvZSg),
        useValue: () => (0, m.bG)([E$.default], () => E$.default.getAvatarSizeMode()),
        setValue: (e) => {
            St.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: j.intl.string(j.t.YcOxtr), value: A.OSZ.LARGE },
            { id: "small", label: j.intl.string(j.t.BKIKqx), value: A.OSZ.SMALL },
        ],
    }),
    SV = (0, a.Hn)(o.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => j.intl.string(j.t.J0dpcB),
        useValue: () => (0, m.bG)([E$.default], () => E$.default.getDisplayNameMode()),
        setValue: (e) => {
            St.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: A.pwA.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: A.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: j.intl.string(j.t.ekjlPL), value: A.pwA.NEVER },
        ],
    }),
    Sk = (0, a.Hn)(o.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => j.intl.string(j.t.swsWWC),
        useValue: () => (0, m.bG)([E$.default], () => E$.default.getDisplayUserMode()),
        setValue: (e) => {
            St.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: A.f5z.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: A.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var Sw = i(391973),
    SF = i(489277),
    SB = i(897720),
    Sz = i(38502);
function SX() {
    let e = SF.A.getWidgetByType(A.uss.VOICE_V3);
    if (null == e) return null;
    let t = Sz.A.getWidget(e.id);
    return null != t && (0, SB.ZO)(t) ? t : null;
}
i(392164);
let SY = (0, a.sN)(o.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => j.intl.string(j.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? j.intl.string(j.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = SX();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? j.intl.string(j.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = SX();
        null != t &&
            (e < 1
                ? (0, Sw.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, Sw.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var SH = i(450740),
    SK = i(968898),
    SW = i(889227),
    SZ = i(288737);
function Sq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new SZ.A({
            channelId: "123",
            userId: s,
            sessionId: "789",
            mute: t,
            deaf: i,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: n,
        }),
        user: new SW.A({ id: s, username: e }),
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
let SQ = (0, a.E2)(o.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
                {
                    avatarSizeMode: i,
                    displayNameMode: n,
                    displayUserMode: s,
                } = (0, m.cf)([E$.default], () => ({
                    avatarSizeMode: E$.default.getAvatarSizeMode(),
                    displayNameMode: E$.default.getDisplayNameMode(),
                    displayUserMode: E$.default.getDisplayUserMode(),
                })),
                [l] = g.useState(() => [
                    Sq(j.intl.string(j.t.C0ZDvo), !0, !1),
                    Sq(j.intl.string(j.t.iOtj8E), !1, !1, !0),
                    Sq(j.intl.string(j.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, m.bG)([SF.A, Sz.A], () => {
                    let e = SF.A.getWidgetByType(A.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = Sz.A.getWidget(e.id);
                    return null != t && (0, SB.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = Sq(t.username)).user = t), e) : null, ...l].filter(i9.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, c.jsx)(Eo.N, {
                    theme: A.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, c.jsxs)("div", {
                            className: ni()(E4.Y5, e),
                            children: [
                                (0, c.jsx)("div", {
                                    className: E4.kJ,
                                    children: (0, c.jsx)(SH.DH, {
                                        id: "voice-widget",
                                        title: j.intl.string(j.t.KNJ6Vq),
                                        channel: (0, b.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: A.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: n,
                                        displayUserMode: s,
                                        avatarSizeMode: i,
                                        widget: A.uss.VOICE,
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
                                (0, c.jsxs)("div", {
                                    className: E4.R$,
                                    children: [
                                        (0, c.jsx)(SK.Pl, { children: j.intl.string(j.t.KNJ6Vq) }),
                                        (0, c.jsx)(SK.CS, {}),
                                        (0, c.jsx)(SK.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, c.jsx)("div", { className: E4.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    SJ = (0, a.zZ)(o.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => j.intl.string(j.t.r1TZfh),
        buildLayout: () => [SQ, SU, SV, Sk, SY],
    });
var S$ = i(432816);
function S0() {
    let [e, t] = (0, cq.kn)([er.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, w.Ay)(() => () => {
        t(c5.i.AUTO_DISMISS);
    }),
    e !== er.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsxs)("div", {
                      className: S$.xC,
                      children: [
                          (0, c.jsx)("div", {
                              children: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: S$.tl,
                              }),
                          }),
                          (0, c.jsx)("div", {
                              children: (0, c.jsxs)("div", {
                                  className: S$.vJ,
                                  children: [
                                      (0, c.jsx)(E.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: j.intl.string(j.t.jzjJQg),
                                      }),
                                      (0, c.jsx)(z.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: j.intl.string(j.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, c.jsx)("div", {
                              children: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: S$.lh,
                              }),
                          }),
                          (0, c.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: S$.VV,
                              children: (0, c.jsx)(p.$, {
                                  variant: "primary",
                                  text: j.intl.string(j.t.Q26diF),
                                  onClick: () => void t(c5.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, c.jsx)(n2.c, { className: S$.yF }),
              ],
          });
}
function S1() {
    let e = (0, m.bG)([e8.A], () => e8.A.enabled),
        t = (0, im.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(nV.w, {
                      type: "warning",
                      children: j.intl.format(j.t.fuEX5B, {
                          onClick: function () {
                              return (0, t9.openUserSettings)(o.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, c.jsx)(n2.c, { className: S$.yF }),
              ],
          })
        : null;
}
let S2 = (0, a.t_)(o.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                E2(),
                sR.Ay.addChangeListener(E2),
                EQ.A.addChangeListener(E2),
                E$.default.addChangeListener(E2),
                EJ.default.addChangeListener(E2),
                eW.isPlatformEmbedded && (0, hA.a2)(),
                () => {
                    sR.Ay.removeChangeListener(E2),
                        EQ.A.removeChangeListener(E2),
                        E$.default.removeChangeListener(E2),
                        EJ.default.removeChangeListener(E2),
                        eW.isPlatformEmbedded && (0, hA.e0)();
                }
            );
        },
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        decoration: {
            type: d.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(S0, {}), (0, c.jsx)(S1, {})] });
            },
        },
        buildLayout: () => [SC, SR, SJ, SM],
    }),
    S3 = (0, a.i4)(o.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        icon: Eq.l,
        usePredicate: ih.b_,
        buildLayout: () => [S2],
    });
var S5 = i(687966);
let S4 = (0, a.AK)(o.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.OYYY6q),
        destinationKey: o.X.ACTIVITY_PRIVACY_PANEL,
    }),
    S6 = (0, a.gN)(o.X.REGISTERED_GAMES_RELATED_SETTINGS, {
        usePredicate: () => (0, E_.SV)("RegisteredGamesRelatedSettings"),
        buildLayout: () => [S4],
    });
var S8 = i(227309),
    S7 = i(1215),
    S9 = i(39623),
    Te = i(952270),
    Tt = i(138134),
    Ti = i(29160),
    Tn = i(18293),
    Ts = i(582835);
let Tl = (0, eW.isWindows)();
function Tr(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e;
    (0, Ss.I)(t.id);
    let o = (0, m.cf)([nH.Ay, SA.A, te.A, Sn.A], () => (0, nH.xU)(t, nH.Ay, SA.A, te.A, Sn.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, m.cf)([nH.Ay], () => ({
            canToggleDetection: null == a || nH.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: nH.Ay.isDetectionEnabled(o),
        })),
        h = (0, m.bG)([nH.Ay], () => nH.Ay.getVisibleGame()),
        [E, S] = g.useState(!1),
        T = g.useMemo(
            () =>
                (0, hg.n1)(o)
                    ? r
                        ? o.gameName
                        : j.intl.formatToPlainString(j.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [x, p] = g.useState(T ?? "???"),
        f = ni()(Ts.tR, {
            [Tn.LO]: !n,
            [Tn.Rw]: n,
            [Tn.FB]: null != o && n,
            [Tn.xL]: r,
            [Tn.fG]: null != l && l.length > 0,
        });
    function N() {
        null != l && l.length > 0 && d
            ? (0, si.openModalLazy)(async () => {
                  let { Modal: e } = await i.e("4823").then(i.bind(i, 158954));
                  return (t) =>
                      (0, c.jsx)(e, {
                          ...t,
                          title: j.intl.formatToPlainString(j.t.PZ4fKc, { platform: T }),
                          subtitle: j.intl.formatToPlainString(j.t.ZIQbfb, { platform: T }),
                          actions: [
                              { text: j.intl.string(j.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: j.intl.string(j.t.Fmjztz),
                                  onClick: () => {
                                      Se.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : Se.Ay.toggleDetection(o);
    }
    let _ = null != h && (0, nH.Es)(o) === (0, nH.Es)(h),
        I = (null != a && a.id === h?.id) || _ || (null != l && l.some((e) => e.id === h?.id));
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: f,
                children: [
                    (0, c.jsxs)("div", {
                        className: ni()(Tn.$K, Ts.Vd),
                        children: [
                            o.verified && !s
                                ? (0, c.jsxs)("div", {
                                      className: Tn.HS,
                                      children: [
                                          (0, c.jsx)("div", { className: Tn.mO, children: T }),
                                          (0, c.jsx)(n6.m, {
                                              text: j.intl.string(j.t["4PJP5p"]),
                                              children: (0, c.jsx)(Er.A, {
                                                  className: Tn.qf,
                                                  size: 18,
                                                  color: iZ.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, c.jsx)(h3.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: iZ.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, c.jsx)("input", {
                                      className: ni()(Tn.mO, Tn.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: x,
                                      onBlur: function () {
                                          o.name !== x && Se.Ay.editName(o, x);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === sN.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => p(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: i, exePath: s } = o;
                                return (
                                    n || _
                                        ? (e = j.intl.string(j.t.VbV5dv))
                                        : null != i && "" !== i && (e = j.intl.format(j.t["gGeOE+"], { when: i })),
                                    (0, c.jsx)("div", {
                                        className: Tn.GN,
                                        children: (0, c.jsx)(Ti.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, eW.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    s || E
                        ? null
                        : (0, c.jsx)("div", {
                              className: ni()(Ts.tR, Ts.oA, Ts.LT, Tn.E3),
                              children: (0, c.jsx)(n6.m, {
                                  text: j.intl.string(j.t["y0B+lo"]),
                                  children: (0, c.jsx)(t8.D, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: Tn.ym,
                                      onClick: function () {
                                          if (E) return;
                                          let e = null != o.id ? SA.A.getDetectableGame(o.id) : null;
                                          e7.default.track(A.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, hg.n1)(o) ? o.gameName : o.name,
                                          }),
                                              S(!0),
                                              (0, si.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      i.e("21072"),
                                                      i.e("27495"),
                                                  ]).then(i.bind(i, 651930));
                                                  return (i) =>
                                                      (0, c.jsx)(t, {
                                                          ...i,
                                                          detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                                                      });
                                              });
                                      },
                                      children: (0, c.jsx)(Tt.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: Tn.Lj,
                                          colorClass: Tn.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, c.jsx)(S9.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: Tn.Lj,
                                          colorClass: Tn.GS,
                                      })
                                    : (0, c.jsx)(Te.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? Tn.$V : Tn.zN,
                                          colorClass: Tn.GS,
                                      });
                        return (0, c.jsx)("div", {
                            className: ni()(Ts.tR, Ts.oA, Ts.LT, Tn.E3),
                            children: (0, c.jsx)(n6.m, {
                                text: j.intl.string(j.t.QmitzM),
                                children: u
                                    ? (0, c.jsx)(t8.D, {
                                          "aria-label": j.intl.string(j.t.QmitzM),
                                          className: Tn.ym,
                                          onClick: N,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!Tl || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            i = e
                                ? (0, c.jsx)(E9.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: Tn.Lj,
                                      colorClass: Tn.GS,
                                  })
                                : (0, c.jsx)(S7.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: Tn.$V,
                                      colorClass: Tn.GS,
                                  }),
                            n = t
                                ? (0, c.jsx)(n6.m, {
                                      text: j.intl.string(j.t.Vfw2L5),
                                      children: (0, c.jsx)("i", { className: Tn.kb }),
                                  })
                                : null;
                        return (0, c.jsxs)("div", {
                            className: ni()(Ts.tR, Ts.oA, Ts.LT, Tn.E3),
                            children: [
                                n,
                                (0, c.jsx)(n6.m, {
                                    text: j.intl.string(j.t["1+O+Tu"]),
                                    children: (0, c.jsx)(t8.D, {
                                        "aria-label": j.intl.string(j.t["1+O+Tu"]),
                                        className: Tn.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void Se.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: i,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (n && !s) || I
                        ? null
                        : (0, c.jsx)(Ar.A, {
                              className: Tn.LS,
                              onClick: function () {
                                  Se.Ay.deleteEntry(o),
                                      l?.forEach((e) => {
                                          Se.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !n &&
                (0, c.jsx)("div", {
                    className: Tn.AQ,
                    children: l.map((e, t) =>
                        (0, c.jsxs)(
                            g.Fragment,
                            {
                                children: [
                                    (0, c.jsx)(Tr, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, c.jsx)("div", { className: Tn.PQ }),
                                ],
                            },
                            (0, nH.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function Ta() {
    let e = (0, m.bG)([iG.A], () => iG.A.theme);
    return (0, c.jsxs)(An.pp, {
        theme: e,
        className: Ag.eT,
        children: [
            (0, c.jsx)(An.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, c.jsx)(An.SG, { children: j.intl.string(j.t["1yiJwn"]) }),
        ],
    });
}
function To() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = hE();
    return 0 === e.length
        ? (0, c.jsx)(Ta, {})
        : (0, c.jsx)(iQ.n, {
              children: (0, c.jsx)("div", {
                  children: e.map((e) =>
                      (0, c.jsx)(
                          Tr,
                          { rawGame: e, isOverride: i.has(e.exePath), subgames: e.id === S8.a7 ? t : void 0 },
                          (0, nH.Es)(e),
                      ),
                  ),
              }),
          });
}
let Tu = (0, a.E2)(o.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, c.jsx)(To, {}),
});
var Td = i(424994);
let Tc = (0, a.zZ)(o.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [Tu, S6],
    useTitle: () => j.intl.string(j.t.jCOdvx),
    useSubtitle: () => j.intl.format(j.t.KPA3m9, { igdbLink: Td.s8 }),
});
var Tg = i(783878),
    Tm = i(930863),
    TA = i(997213);
function Th(e) {
    let { onClose: t } = e,
        i = (0, m.bG)([nH.Ay], () => nH.Ay.getCandidateGames()),
        [n, s] = g.useState(null),
        l = i.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, c.jsxs)(rV.l, {
        className: ni()(Tm.H, TA.Y_),
        "aria-label": j.intl.string(j.t.GTCx0p),
        children: [
            (0, c.jsx)(Tg.Z, {
                selectionMode: "single",
                placeholder: j.intl.string(j.t.XqMe3N),
                value: n,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, c.jsx)(n2.c, { className: ni()(Ag.Ot, Ag.QB) }),
            (0, c.jsxs)("div", {
                className: ni()(Tm.o, Ts.xM),
                children: [
                    (0, c.jsx)(dW.Q, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: t }),
                    (0, c.jsx)(p.$, {
                        variant: "primary",
                        text: j.intl.string(j.t.GTCx0p),
                        disabled: null == n,
                        onClick: function () {
                            null != n && (Se.Ay.addGame(n.pid, n.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var TE = i(347990);
let TS = (0, a.E2)(o.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.GTCx0p)],
    Component: function () {
        let e = g.useRef(null);
        return (0, c.jsxs)("div", {
            className: ni()(TE.a, Ag.Gf),
            children: [
                (0, c.jsx)("span", { children: j.intl.string(j.t.xwhoqM) }),
                (0, c.jsx)(rU.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, c.jsx)(Th, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, c.jsx)(dW.Q, {
                            ...t,
                            buttonRef: e,
                            variant: "primary",
                            textVariant: "text-sm/medium",
                            text: j.intl.string(j.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
});
function TT() {
    return (0, c.jsx)("div", {
        className: ni()(Ts.tR, Tn.eS, Tn.Rw),
        children: (0, c.jsxs)("div", {
            className: ni()(Tn.$K, Ts.Vd),
            children: [
                (0, c.jsx)("div", { className: Tn.mO, children: j.intl.string(j.t.H68X9x) }),
                (0, c.jsx)("div", { className: Tn.GN, children: j.intl.string(j.t.T5Ilmw) }),
            ],
        }),
    });
}
let Tx = (0, a.E2)(o.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = hE(),
                i = (0, m.bG)([nH.Ay], () => nH.Ay.getVisibleGame());
            return null != i
                ? (0, c.jsx)(
                      Tr,
                      {
                          rawGame: i,
                          isOverride: t.has(i.exePath),
                          nowPlaying: !0,
                          subgames: i.id === S8.a7 ? e : void 0,
                      },
                      (0, nH.Es)(i),
                  )
                : (0, c.jsx)(TT, {});
        },
    }),
    Tp = (0, a.zZ)(o.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => j.intl.string(j.t["MY9/Oe"]),
        buildLayout: () => [Tx, TS],
    }),
    Tf = (0, a.t_)(o.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        buildLayout: () => [Tp, Tc],
    }),
    TN = (0, a.i4)(o.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        icon: S5._,
        usePredicate: ih.Pi,
        buildLayout: () => [Tf],
    }),
    T_ = (0, a.WI)(o.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [TN, h$, S3, EZ],
    });
var TI = i(631670),
    TC = i(619499),
    Tb = i(836602),
    Tv = i(591179),
    Ty = i(854627),
    Tj = i(975732),
    TO = i(761508),
    TR = i(159001),
    TD = i(344346),
    TL = i(919395),
    TP = i(699217);
function TG(e) {
    let { title: t, children: i } = e;
    return (0, c.jsxs)("div", {
        children: [(0, c.jsx)(E.D, { variant: "text-md/medium", className: TP.Vf, children: t }), i],
    });
}
function TM(e) {
    let {
        children: t,
        className: i,
        layoutClassName: n,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, c.jsx)("div", {
        className: ni()(TP.UA, i),
        children: (0, c.jsxs)("div", {
            className: ni()(TP.yt, n),
            children: [
                (0, c.jsx)("div", {
                    className: ni()(TP.Fp, a && TP.Oz),
                    children: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(TG, { title: l ?? j.intl.string(j.t.Zb06yP), children: s }),
                            null != r ? (0, c.jsx)(TG, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, c.jsx)("div", { className: TP.oB, children: t }),
            ],
        }),
    });
}
var TU = i(986687),
    TV = i(101058),
    Tk = i(321191),
    Tw = i(696451),
    TF = i(271078);
function TB() {
    return (0, c.jsxs)("div", {
        className: TF.p$,
        children: [
            (0, c.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: TF.Sl }),
            (0, c.jsx)(E.D, { className: TF.h8, variant: "heading-lg/extrabold", children: j.intl.string(j.t.Z1OZCV) }),
            (0, c.jsx)(z.E, { className: TF.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, c.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: TF.h8,
                children: (0, c.jsx)(p.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: function () {
                        (0, tW.pX)(A.BVt.GUILD_DISCOVERY), (0, tP.default)();
                    },
                }),
            }),
        ],
    });
}
var Tz = i(81400),
    TX = i(252732),
    TY = i(355622),
    TH = i(408018),
    TK = i(138617),
    TW = i(290386),
    TZ = i(594943);
let Tq = (0, tU.Ld)(),
    TQ = (0, b.createChannelRecord)({ id: "1", type: A.rbe.DM }),
    TJ = (0, tU.Ld)();
function T$(e) {
    let {
            sectionTitle: t,
            errors: i,
            onBioChange: n,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, TW.U)({ location: "profile_customization_about_me" }),
        [u, d] = g.useState(s ?? r),
        [m, A] = g.useState((0, TH.x7)(u)),
        h = g.useRef(r),
        E = g.useRef(!1);
    return (
        g.useEffect(() => {
            if (h.current !== r) {
                let e = (0, TH.x7)(r);
                d(r), A(e);
            }
            h.current = r;
        }, [r]),
        g.useEffect(() => {
            void 0 !== s || u === r || E.current || (d(r), A((0, TH.x7)(r)));
        }, [s, r, u]),
        (0, c.jsxs)(rD.A, {
            title: t,
            titleId: Tq,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, c.jsx)(TK.Ay, {
                    "aria-describedby": TJ,
                    "aria-labelledby": Tq,
                    className: TZ.i,
                    innerClassName: TZ.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, i) {
                        t !== u && (d(t), A(i), n(t));
                    },
                    placeholder: l,
                    channel: TQ,
                    textValue: u,
                    richValue: m,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: t9.USER_SETTINGS_MODAL_KEY,
                    type: TY.oU.PROFILE_BIO_INPUT,
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
                (0, c.jsx)(n8.A, { id: TJ, children: j.intl.format(j.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var T0 = i(930861),
    T1 = i(821956),
    T2 = i(562819),
    T3 = i(84540),
    T5 = i(848575);
function T4(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eR.Ay)(),
        o = (0, TL.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, TL.CP)(i?.id),
        g = r ? T0.wL : l_.$n;
    return (0, c.jsx)(rD.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, c.jsxs)("div", {
            className: T5.NC,
            children: [
                (0, c.jsx)(g, {
                    size: l_.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, T2.L)({ analyticsLocations: a, guild: i });
                    },
                    className: ni()({ [T5.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T5.DT,
                        children: (0, c.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, T1.uZ)(t, i) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: function () {
                                (0, T3.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T6 = i(339984),
    T8 = i(831653);
let T7 = [{ name: "gif", extensions: ["gif"] }];
function T9(e) {
    let {
            showRemoveAvatarButton: t,
            errors: i,
            onAvatarChange: n,
            sectionTitle: s,
            changeAvatarButtonText: l,
            guildId: r,
            className: a,
            disabled: o = !1,
            isTryItOut: u = !1,
            forcedDivider: d,
            withHighlight: m = !1,
        } = e,
        { newestAnalyticsLocation: A } = (0, eR.Ay)(),
        h = m ? T0.wL : l_.$n,
        E = g.useCallback(() => {
            (0, TX.XD)({
                uploadType: T6.HL.AVATAR,
                analyticsSource: A,
                filters: u ? T7 : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, A, u]);
    return (0, c.jsx)(rD.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, c.jsxs)("div", {
            className: T8.NC,
            children: [
                (0, c.jsx)(h, {
                    className: ni()({ [T8.yj]: m }),
                    size: l_.$n.Sizes.SMALL,
                    onClick: E,
                    children: l ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: T8.DT,
                        children: (0, c.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? j.intl.string(j.t.TDjKDm) : j.intl.string(j.t.twB3fz),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var xe = i(248778),
    xt = i(479183);
function xi(e) {
    let { user: t, guildId: i, className: n } = e,
        s = rw.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, eR.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, TL.B0)(t, i),
        d = (0, xe.ux)("DisplayNameStylesSection"),
        [m, h] = (0, cq.kn)(d ? [er.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        E = m === er.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        S = (0, g.useCallback)(() => {
            h(c5.i.TAKE_ACTION),
                e7.default.track(A.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eD.L)({ analyticsLocations: l, guildId: i });
        }, [l, i, h]),
        T = (0, g.useCallback)(() => {
            (0, T3.p)({ displayNameStyles: null }), e7.default.track(A.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        x = (0, g.useCallback)(() => {
            (0, T3.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        f = void 0 !== o ? o : null != i ? a : r;
    return (0, c.jsx)(rD.A, {
        title: j.intl.string(eL.default["86GtGH"]),
        titleBadge: E ? (0, c.jsx)(e9.Lp, { text: j.intl.string(j.t.y2b7CA), className: xt.A }) : void 0,
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, c.jsxs)("div", {
            className: xt.N,
            children: [
                (0, c.jsx)(p.$, { variant: "primary", size: "sm", text: j.intl.string(eL.default.vJqrIg), onClick: S }),
                null == i &&
                    null != f &&
                    (0, c.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(eL.default.ymq8WQ),
                        onClick: T,
                    }),
                null != i &&
                    null != f &&
                    (0, c.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(eL.default["j/KRxc"]),
                        onClick: x,
                    }),
            ],
        }),
    });
}
var xn = i(637193),
    xs = i(946801);
function xl(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, eR.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, TL.rv)(t, i?.id),
        d = g.useCallback(() => {
            (0, xn.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        m = g.useCallback(() => {
            (0, T3.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, c.jsx)(rD.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, c.jsxs)("div", {
            className: xs.u,
            children: [
                (0, c.jsx)(p.$, { variant: "primary", size: "sm", text: j.intl.string(j.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, c.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t["9zwziY"]),
                        onClick: m,
                    }),
            ],
        }),
    });
}
var xr = i(617255);
function xa(e) {
    let {
            showRemoveBannerButton: t,
            errors: i,
            onBannerChange: n,
            guildId: s,
            className: l,
            disabled: r = !1,
            showPremiumIcon: a = !0,
            isTryItOut: o = !1,
            forcedDivider: u,
            withHighlight: d = !1,
        } = e,
        { newestAnalyticsLocation: g } = (0, eR.Ay)(),
        m = d ? T0.wL : l_.$n;
    return (0, c.jsx)(rD.A, {
        className: l,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, c.jsxs)("div", {
            className: xr.NC,
            children: [
                (0, c.jsx)(m, {
                    className: ni()({ [xr.yj]: d }),
                    size: l_.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, TX.XD)({ uploadType: T6.HL.BANNER, analyticsSource: g, guildId: s, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xr.DT,
                        children: (0, c.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != s ? j.intl.string(j.t.jHlJNS) : j.intl.string(j.t.tT9n7D),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var xo = i(617061),
    xu = i(869438);
function xd(e) {
    let {
            user: t,
            guild: i,
            initialSelectedEffect: n,
            className: s,
            sectionTitle: l,
            forcedDivider: r = !1,
            withTutorial: a = !1,
            showBorder: o = !1,
        } = e,
        { analyticsLocations: u } = (0, eR.Ay)(),
        d = rw.Ay.canUsePremiumProfileCustomization(t),
        m = (0, TL.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: h, errors: E } = (0, TL.nZ)(i?.id);
    g.useEffect(() => {
        d &&
            e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tk.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let S = a ? T0.wL : l_.$n;
    return (0, c.jsx)(rD.A, {
        forcedDivider: r,
        borderType: oQ.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: E,
        className: s,
        children: (0, c.jsxs)("div", {
            className: xu.NC,
            children: [
                (0, c.jsx)(S, {
                    size: l_.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, xo.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: ni()({ [xu.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === h ? null != m : null != h) &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xu.DT,
                        children: (0, c.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: function () {
                                (0, T3.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xc = i(13875),
    xg = i(515727),
    xm = i(566935);
function xA(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, eR.Ay)(),
        l = (0, xc.sk)("ProfileFrameSection"),
        r = (0, TL.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, TL.Tu)(i?.id),
        [u, d] = (0, cq.kn)([er.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        g = u === er.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, c.jsx)(rD.A, {
              showBorder: g,
              borderType: g ? oQ.i.NEW_UPSELL : oQ.i.PREMIUM,
              hasBackground: g,
              title: n,
              titleBadge: g ? (0, c.jsx)(e9.Lp, { text: j.intl.string(j.t.y2b7CA), className: xm.Ad }) : void 0,
              description: g ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, c.jsxs)("div", {
                  className: xm.NC,
                  children: [
                      (0, c.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: function () {
                              (0, xg.w)({ analyticsLocations: s, guild: i }), d(c5.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, c.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xm.DT,
                              children: (0, c.jsx)(p.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: function () {
                                      (0, T3.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var xh = i(602853),
    xE = i(654107),
    xS = i(999291),
    xT = i(101928),
    xx = i(819169),
    xp = i(317097),
    xf = i(508274),
    xN = i(426399);
function x_(e) {
    let {
            onChange: t,
            onClose: i,
            color: n,
            suggestedColors: s,
            disabled: l,
            label: r,
            colorPickerMiddle: a,
            colorPickerFooter: o,
            showEyeDropper: u,
        } = e,
        d = g.useRef(null),
        m = (0, xh.r)(iZ.A.colors.BACKGROUND_BASE_LOW).hex(),
        h = iZ.A.colors.BACKGROUND_MOD_MUTED.css,
        E = (0, TX.sN)(n),
        S = (0, xp.Hl)(n),
        T = S === m ? h : S,
        x = E ? iZ.A.unsafe_rawColors.WHITE.css : iZ.A.unsafe_rawColors.PRIMARY_530.css,
        p = (0, xx.A)(a),
        f = (0, xx.A)(o),
        [N, _] = g.useState((0, ak.A)());
    return (
        g.useEffect(() => {
            (p !== a || f !== o) && _((0, ak.A)());
        }, [o, a, f, p]),
        (0, c.jsx)(rU.Y, {
            targetElementRef: d,
            positionKey: N,
            renderPopout: (e) =>
                (0, c.jsx)(xf.VN, {
                    ...e,
                    value: n,
                    onChange: t,
                    suggestedColors: s,
                    middle: a,
                    footer: o,
                    showEyeDropper: u,
                }),
            onRequestClose: i,
            children: (e) => {
                let { onClick: t, ...i } = e;
                return (0, c.jsxs)("div", {
                    ref: d,
                    className: ni()(xN.oP, { [xN.r9]: l }),
                    children: [
                        (0, c.jsx)(t8.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? A.tEg : t,
                            style: { backgroundColor: S, borderColor: T },
                            className: xN.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, c.jsx)(rk.R, {
                                size: "custom",
                                className: xN.BW,
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
var xI = i(811160);
function xC(e) {
    let {
            user: t,
            pendingAvatarSrc: i,
            pendingColors: n,
            onThemeColorsChange: s,
            preventDisabled: l,
            guildId: r,
            className: a,
            showPremiumIcon: o = !0,
            showResetThemeButton: u = !1,
            forcedDivider: d,
        } = e,
        g = (0, xS.Ay)(t.id, r),
        { primaryColor: m, secondaryColor: A } = (0, xT.A)({
            user: t,
            displayProfile: g,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        h = rw.Ay.canUsePremiumProfileCustomization(t),
        E = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, xh.r)(iZ.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, xE.rh)(E, S, !1);
    return null == m || null == A
        ? null
        : (0, c.jsx)(rD.A, {
              title: j.intl.string(j.t.DMeO2X),
              disabled: !h && !l,
              className: ni()(xI.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, c.jsxs)("div", {
                  className: xI.hd,
                  children: [
                      (0, c.jsx)("div", {
                          className: xI.YX,
                          children: (0, c.jsx)(x_, {
                              onChange: (e) => s([e, A]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, c.jsx)(z.E, {
                                  className: xI.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, c.jsx)("div", {
                          className: xI.YX,
                          children: (0, c.jsx)(x_, {
                              onChange: (e) => s([m, e]),
                              color: A,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, c.jsx)(z.E, {
                                  className: xI.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, c.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xI.WA,
                              children: (0, c.jsx)(p.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: j.intl.string(j.t["L+GmoR"]),
                                  onClick: () => s([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function xb(e) {
    let {
            sectionTitle: t,
            errors: i,
            onPronounsChange: n,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tU.GV)();
    return (0, c.jsx)(rD.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, c.jsx)(sn.k, {
            "aria-labelledby": o,
            placeholder: l ?? j.intl.string(j.t.NPEUUu),
            maxLength: 40,
            value: s ?? r,
            onChange: function (e) {
                n(e === r ? void 0 : e);
            },
            disabled: a,
        }),
    });
}
var xv = i(427262),
    xy = i(684732),
    xj = i(576705),
    xO = i(522334);
function xR(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, m.bG)([xj.A], () => xj.A.can(A.xBc.CHANGE_NICKNAME, r) || xj.A.can(A.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Es.L)(tk.PremiumTypes.TIER_2);
    return (0, c.jsxs)(rD.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, c.jsx)(sn.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: A.d0r,
                onChange: function (e) {
                    (0, T3.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, c.jsx)(xi, { user: l, guildId: r.id, className: xO.F }),
        ],
    });
}
var xD = i(816453);
let xL = "/assets/b25da78aa7949feb.png";
function xP(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, uc.Ay)(),
        { analyticsLocations: l } = (0, eR.Ay)(ty.A.PREMIUM_UPSELL_OVERLAY);
    return (g.useEffect(() => {
        i &&
            e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: tk.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, c.jsxs)("div", {
              className: xD.ry,
              children: [
                  (0, c.jsx)("div", { children: n }),
                  (0, c.jsxs)("div", {
                      className: xD.Wc,
                      children: [
                          (0, c.jsx)("img", {
                              className: xD.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case A.NJ8.DARK:
                                      case A.NJ8.DARKER:
                                      case A.NJ8.MIDNIGHT:
                                          return xL;
                                      case A.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xL;
                                  }
                              })(s),
                          }),
                          (0, c.jsxs)("div", {
                              className: xD._9,
                              children: [
                                  (0, c.jsx)(z.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: j.intl.string(j.t.dMaDFX),
                                  }),
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: j.intl.string(j.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, c.jsx)(oq.A, {
                              size: l_.$n.Sizes.LARGE,
                              color: l_.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: rw.Ay.isPremium(t)
                                      ? j.intl.string(j.t.AfRWI8)
                                      : j.intl.string(j.t.nkdUym),
                              },
                              subscriptionTier: tk.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var xG = i(784075);
function xM() {
    let e = (0, m.bG)([s0.default], () => {
            let e = s0.default.getCurrentUser();
            return ts()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, Es.L)(tk.PremiumTypes.TIER_2),
        i = (0, m.bG)([Tb.A, sc.A], () => sc.A.getGuild(Tb.A.selectedGuildId));
    ts()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, m.cf)([Tb.A], () => ({ ...Tb.A.getPendingChanges(i.id), errors: Tb.A.getErrors(i.id) })),
        d = (0, TV.V7)({ userId: e.id, image: n }),
        g = (0, Tz.EC)(i.id),
        A = (0, m.bG)([Tw.Ay], () => (null == i.id ? null : Tw.Ay.getMember(i.id, e.id))),
        h = (0, m.bG)([Tk.A], () => Tk.A.getGuildMemberProfile(e.id, i.id)),
        E = rw.Ay.canUsePremiumProfileCustomization(e),
        S = (0, TL.z5)(n, A?.avatar),
        T = (0, TL.Ac)(l, h?.banner),
        x = (0, xy.l)(o, h?.themeColors),
        p = h?.bio ?? "",
        f = h?.pronouns ?? "";
    return (0, c.jsxs)("div", {
        className: xG.Q,
        children: [
            (0, c.jsx)(
                xR,
                {
                    errors: u?.nick ?? g?.nick,
                    username: xv.Ay.getName(e),
                    pendingNick: s,
                    currentNick: A?.nick,
                    user: e,
                    guild: i,
                },
                "nick",
            ),
            (0, c.jsx)(
                xb,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, T3.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, c.jsxs)(xP, {
                user: e,
                showOverlay: !E,
                children: [
                    (0, c.jsx)(
                        T9,
                        {
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, c.jsx)(n6.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, c.jsx)(ry.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xG.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != i)
                                    return (0, TX.rM)(e, A?.avatar, (e) => (0, T3.p)({ guildId: i.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, c.jsx)(
                        T4,
                        {
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, c.jsx)(n6.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, c.jsx)(ry.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xG.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, c.jsx)(xi, { user: e, guildId: i.id }),
                    (0, c.jsx)(
                        xl,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, c.jsx)(n6.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, c.jsx)(ry.t, { size: "md", color: "currentColor", className: xG.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, c.jsx)(
                        xd,
                        {
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, c.jsx)(n6.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, c.jsx)(ry.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xG.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "effect",
                    ),
                    (0, c.jsx)(
                        xA,
                        {
                            user: e,
                            guild: i,
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [
                                    j.intl.string(j.t.GWrZOd),
                                    (0, c.jsx)(n6.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, c.jsx)(ry.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xG.a,
                                        }),
                                    }),
                                ],
                            }),
                        },
                        "frame",
                    ),
                    (0, c.jsx)(
                        xa,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != i)
                                    return (0, TX.rM)(e, h?.banner, (e) => (0, T3.p)({ guildId: i.id, banner: e }));
                            },
                            guildId: i.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, c.jsx)(xC, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, T3.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: x,
                    }),
                    (0, c.jsx)(
                        T$,
                        {
                            placeholder: j.intl.string(j.t["/7NKgv"]),
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [
                                    j.intl.string(j.t.ZzAR2Y),
                                    (0, c.jsx)(n6.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, c.jsx)(ry.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xG.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, T3.p)({ guildId: i.id, bio: e }),
                            errors: u?.bio ?? g?.bio,
                            pendingBio: r,
                            currentBio: p,
                            disabled: !E,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var xU = i(379550);
function xV(e) {
    (0, si.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("41509"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, c.jsx)(t, { source: { ...e, page: A.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xk(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, eR.Ay)(ty.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, m.bG)([s0.default], () => {
            let e = s0.default.getCurrentUser();
            return ts()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, m.bG)([Tw.Ay], () => (null != t ? Tw.Ay.getMember(t.id, s.id) : null)),
        r = (0, m.bG)([Tk.A], () => !Tk.A.isFetchingProfile(s.id, t?.id)),
        a = (0, m.bG)([e8.A], () => e8.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, m.cf)([Tb.A], () => Tb.A.getPendingChanges(t?.id)),
        h = (0, TV.V7)({ userId: s.id, image: o }),
        S = (0, TL.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: T } = (0, TL.B0)(s, t?.id);
    return (g.useEffect(() => () => e2.h.wait(TR.IM), []), a)
        ? (0, c.jsx)(aM.A, {})
        : r
          ? (0, c.jsxs)(eR.f5, {
                value: n,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t["/PTB2E"], {
                            helpCenterLink: eS.A.getArticleURL(A.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(rR.A, { guildId: t.id, onChange: i }),
                                  (0, c.jsx)(TM, {
                                      profilePreviewTitle: (0, c.jsx)(E.D, {
                                          variant: "heading-md/medium",
                                          className: xU.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, c.jsx)(TU.A, {
                                          ...d,
                                          pendingAvatar: h,
                                          pendingDisplayNameStyles: T,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: rw.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: xV,
                                          containerClassName: xU.ti,
                                      }),
                                      nameplatePreview: (0, c.jsx)(TD.A, {
                                          ...d,
                                          pendingDisplayNameStyles: T,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: S,
                                          className: null == S ? xU.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, c.jsx)(xM, {}),
                                  }),
                              ],
                          })
                        : (0, c.jsx)(TB, {}),
                ],
            })
          : (0, c.jsx)(aV.y, {});
}
var xw = i(903209),
    xF = i(834297);
function xB(e) {
    let { children: t, notice: i } = e;
    return (0, c.jsxs)("div", { className: xF.r, children: [i, (0, c.jsx)("div", { children: t })] });
}
var xz = i(269115),
    xX = i(823092),
    xY = i(839534),
    xH = i(379197),
    xK = i(488430),
    xW = i(457421),
    xZ = i(940622),
    xq = i(25176),
    xQ = i(341206);
let xJ = function () {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, eR.Ay)(ty.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = g.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: h,
        } = ((e = (0, xZ.mb)(xq.RN.UPSELL_BANNER)),
        (t = (0, xZ.mb)(xq.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, m.bG)([xW.A], () => xW.A.getMarketingBySurface(xH.R.EDIT_PROFILE_SETTINGS))),
        (n = g.useMemo(
            () =>
                null != i
                    ? i
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: j.intl.string(j.t.QZVVBh),
                          body: j.intl.string(j.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [i],
        )),
        g.useMemo(
            () => ({ ...n, type: xK.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: S } = (0, xX.L_)();
    return (
        g.useEffect(() => {
            e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tk.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, c.jsxs)("div", {
            ref: l,
            className: xQ.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, c.jsx)("div", {
                    className: xQ.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, c.jsx)("img", { src: a, className: xQ.Qw, alt: "" }),
                }),
                (0, c.jsxs)("div", {
                    className: xQ.Em,
                    children: [
                        (0, c.jsx)(E.D, {
                            variant: "heading-lg/extrabold",
                            color: h ? "text-overlay-dark" : "currentColor",
                            className: xQ.DD,
                            children: o,
                        }),
                        (0, c.jsx)(z.E, {
                            variant: "text-sm/normal",
                            color: h ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, c.jsx)(p.$, {
                    onClick: function () {
                        S(() =>
                            (0, xY.Cz)({
                                analyticsLocations: s,
                                analyticsSource: ty.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: j.intl.string(j.t.fYfGgK),
                }),
            ],
        })
    );
};
var x$ = i(451909),
    x0 = i(202639),
    x1 = i(400669),
    x2 = i(835071),
    x3 = i(724651),
    x5 = i(732280),
    x4 = i(590180),
    x6 = i(898461),
    x8 = i(469054),
    x7 = i(601298),
    x9 = i(207803),
    pe = i(461797);
let pt = Object.keys(pe.jB);
function pi(e) {
    let t = null == e ? pt : pt.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var pn = i(764336),
    ps = i(461893);
function pl(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
        s = (0, pn.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = g.useMemo(() => {
            let e = (0, pe.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, c.jsxs)("div", {
        className: ps.kL,
        children: [
            (0, c.jsx)(t8.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: ps.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: s.render(),
            }),
            (0, c.jsxs)(t8.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${j.intl.string(j.t["44yJxh"])}`,
                className: ps.Lt,
                children: [
                    (0, c.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: ps.L_ }),
                    (0, c.jsx)(z.E, {
                        className: ps._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: l,
                    }),
                ],
            }),
        ],
    });
}
var pr = i(511484),
    pa = i(811611),
    po = i(515718),
    pu = i(507553);
function pd(e, t) {
    let i = pu.A.useField("scrollPosition"),
        n = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion);
    (0, g.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), pu.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var pc = i(844222),
    pg = i(4542);
let pm = "/assets/d4955aabdcb5bdee.png",
    pA = { assetOrigin: x8.E.NEW_ASSET, imageUri: pm, staticImageUri: pm, description: "", originalAsset: void 0 };
function ph(e) {
    let { user: t } = e,
        { reducedMotion: i } = g.useContext(pc.C),
        {
            pendingAvatar: n,
            pendingBanner: s,
            pendingAvatarDecoration: l,
            pendingProfileEffect: r,
            pendingDisplayNameStyles: a,
            pendingThemeColors: o,
            pendingPronouns: u,
            pendingBio: d,
            tryItOutThemeColors: A,
            tryItOutAvatar: h,
            tryItOutBanner: E,
            tryItOutAvatarDecoration: S,
            tryItOutDisplayNameStyles: T,
        } = (0, m.cf)([Tb.A], () => {
            let e = Tb.A.getPendingChanges(),
                t = Tb.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        x = (0, TV.V7)({ userId: t.id, image: h ?? n });
    return (0, c.jsx)(TU.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: E ?? s ?? pA,
        pendingDisplayNameStyles: T ?? a,
        pendingAvatar: x,
        pendingThemeColors: A ?? o,
        pendingAvatarDecoration: void 0 !== S ? S : l,
        pendingProfileEffect: r,
        avatarClassName: null != h || null != n || i.enabled ? void 0 : pg.WX,
        containerClassName: pg.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var pE = i(530702);
function pS(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = rw.Ay.isPremium(t),
        l = rw.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, m.cf)([Tb.A], () => {
            let e = Tb.A.getPendingChanges(),
                t = Tb.A.getErrors(),
                i = Tb.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: h, onShuffle: S } = (function () {
            let [e, t] = (0, g.useState)(pi()),
                {
                    banner: i,
                    themeColors: n,
                    avatarDecorationSkuId: s,
                    displayNameStyles: l,
                } = (0, g.useMemo)(() => {
                    let t = (0, pe.Wt)(e);
                    return {
                        banner: (0, x7.X)({
                            assetOrigin: x8.E.NEW_ASSET,
                            imageUri: t.getBannerSrc(!1),
                            staticImageUri: t.getBannerSrc(!0),
                            description: t.getBannerAltText(),
                            originalAsset: void 0,
                        }),
                        themeColors: t.themeColors,
                        avatarDecorationSkuId: t.avatarDecorationSkuId,
                        displayNameStyles: t.displayNameStyles,
                    };
                }, [e]),
                r = (0, m.bG)([x4.A], () => {
                    let e = x4.A.getProduct(s);
                    return (0, x6.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, g.useEffect)(() => {
                (0, x9.w5)({ banner: i, themeColors: n, avatarDecoration: r, displayNameStyles: l });
            }, [i, n, r, l]);
            let a = (0, g.useCallback)(() => {
                let i = pi(e);
                t(i), e7.default.track(A.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: i });
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        T = g.useRef(null);
    pd(T, eN._F.TRY_IT_OUT);
    let { analyticsLocations: x, sourceAnalyticsLocations: p } = (0, eR.Ay)(ty.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function f(e) {
        e &&
            (d?.imageUri.startsWith("https:") === !0
                ? fetch(d.imageUri)
                      .then((e) => e.blob())
                      .then((e) => (0, po.We)(e))
                      .then((e) => {
                          (0, T3.p)({ avatar: u, themeColors: o, banner: { ...d, imageUri: e } });
                      })
                      .catch(() => {
                          (0, T3.p)({ avatar: u, themeColors: o });
                      })
                : null != d
                  ? (0, T3.p)({ avatar: u, themeColors: o, banner: d })
                  : (0, T3.p)({ avatar: u, themeColors: o }),
            e7.default.track(A.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: h }));
    }
    g.useEffect(() => {
        i &&
            e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tk.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: A.liQ.USER_SETTINGS },
                location_stack: p,
            });
    }, [p, t, i]);
    let N = (0, x5.V)()?.subscription_trial?.sku_id === tk.pe.TIER_2,
        _ = (0, x3.O)(),
        I = (0, pr.U9)(_, tk.pe.TIER_2);
    return n
        ? (0, c.jsx)(eR.f5, {
              value: x,
              children: (0, c.jsxs)(oQ.A, {
                  ref: T,
                  className: pE.MT,
                  type: oQ.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, c.jsx)(TM, {
                          stickyPreview: !1,
                          layoutClassName: pE.th,
                          profilePreviewTitle: (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(ry.t, { size: "md", color: "currentColor", className: pE.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, c.jsxs)(c.Fragment, {
                              children: [(0, c.jsx)(pl, { preset: h, onShuffle: S }), (0, c.jsx)(ph, { user: t })],
                          }),
                          children: (0, c.jsxs)("div", {
                              children: [
                                  (0, c.jsxs)("div", {
                                      children: [
                                          (0, c.jsx)(E.D, {
                                              variant: "heading-xl/extrabold",
                                              children: j.intl.string(j.t["2zGdAW"]),
                                          }),
                                          (0, c.jsx)(z.E, {
                                              className: pE.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsx)(xC, {
                                      className: pE.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, TV.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: x9.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, c.jsx)(xa, {
                                      className: pE.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: x9.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, c.jsx)(T9, {
                                          className: pE.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: x9.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, c.jsx)(xi, { user: t, className: pE.fz }),
                                  !N &&
                                      (0, c.jsx)(z.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !N &&
                          (0, c.jsx)(x0.d, {
                              onSubscribeModalClose: f,
                              className: pE.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, x2.K)({ onSubscribeFinish: f });
                                  },
                              }),
                              button: s
                                  ? j.intl.string(j.t.AfRWI8)
                                  : I
                                    ? j.intl.formatToPlainString(j.t.bkQ4bH, { percent: _?.discount.amount })
                                    : j.intl.string(j.t.pj0XBN),
                              position: "inline",
                          }),
                      N &&
                          (0, c.jsxs)("div", {
                              children: [
                                  (0, c.jsx)("div", { className: pE.BU }),
                                  (0, c.jsx)(pa.Ay, {
                                      type: tk.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tk.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var pT = i(814390),
    px = i(909536),
    pp = i(843282),
    pf = i(145497),
    pN = i(685073),
    p_ = i(534400),
    pI = i(581781),
    pC = i(743981),
    pb = i(217510);
let pv = (0, tU.Ld)(),
    py = g.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = g.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, m.bG)([s0.default], () => (0, pN.Zo)(s0.default.getCurrentUser()?.primaryGuild).guildId),
            r = void 0 !== i ? i : l,
            a = g.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            o = g.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, c.jsx)(pI.A, {
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              guildId: t.id,
                              guildName: e.label,
                              guildIcon: t.icon,
                              guildIconSize: 32,
                          });
                },
                [s],
            ),
            u = g.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, c.jsx)(pf.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [s],
            ),
            d = g.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, c.jsx)(p_.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: pC.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [s],
            ),
            A = g.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, c.jsx)(c.Fragment, { children: o(t) });
                },
                [o],
            ),
            h = g.useCallback(
                (e) => {
                    n?.(e);
                },
                [n],
            ),
            E = g.useCallback((e) => e === r, [r]),
            S = g.useCallback((e) => e, []),
            T = g.useCallback(() => {
                n?.(null);
            }, [n]),
            x = g.useRef(null);
        return (
            pd(x, eN._F.GUILD_TAG),
            (0, c.jsxs)(rD.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: pv,
                ref: x,
                children: [
                    (0, c.jsx)(z.E, {
                        className: pb.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, c.jsx)(pp.Pw, {
                        className: pb.Lt,
                        optionClassName: pb.S0,
                        isSelected: E,
                        options: a,
                        select: h,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: A,
                        serialize: S,
                        clear: T,
                        clearable: null != r,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var pj = i(318785),
    pO = i(992526),
    pR = i(470739);
let pD = function () {
    return (0, pO.J9)({ location: "UserSettingsProfileCustomization" })
        ? (0, c.jsx)(rD.A, {
              title: j.intl.string(j.t.l6w3Vj),
              description: j.intl.string(j.t.joHqdj),
              children: (0, c.jsx)(p.$, {
                  text: j.intl.string(j.t.wRraFx),
                  onClick: () => {
                      (0, pR._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var pL = i(182817);
let pP = (0, tU.Ld)();
function pG(e) {
    let t = (0, Es.L)(tk.PremiumTypes.TIER_2);
    return (0, c.jsxs)(rD.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: pP,
        children: [
            (0, c.jsx)("div", {
                children: (0, c.jsx)(sn.k, {
                    "aria-labelledby": pP,
                    placeholder: e.placeholder,
                    maxLength: A.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, c.jsx)(xi, { user: e.user, className: pL.F }),
        ],
    });
}
var pM = i(273151);
function pU(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = y.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, c.jsx)("div", {
        className: pM.u,
        children: (0, c.jsx)(tK.d, {
            label: j.intl.string(j.t["3cWDuO"]),
            description: s ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
            checked: !s,
            onChange: (e) => {
                !e === n ? (0, TI._e)() : (0, T3.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function pV(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, xh.r)(iZ.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, xE.rh)(l, r, !1),
        o = (0, xp.LX)(a[0]);
    return (0, c.jsx)(rD.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, c.jsx)(x_, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var pk = i(518477);
let pw = function () {
    let e = (0, m.bG)([o9.default], () => o9.default.getId());
    return (0, c.jsx)(rD.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, c.jsx)(p.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, Tj.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [ty.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: pk.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var pF = i(577997);
function pB() {
    let e = (0, m.bG)([s0.default], () => {
            let e = s0.default.getCurrentUser();
            return ts()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, m.bG)([Tk.A], () => Tk.A.getUserProfile(e.id)),
        {
            pendingAvatar: i,
            pendingGlobalName: n,
            pendingBanner: s,
            pendingBio: l,
            pendingPronouns: r,
            pendingAccentColor: a,
            pendingThemeColors: o,
            pendingLegacyUsernameDisabled: u,
            pendingPrimaryGuildId: d,
            errors: g,
        } = (0, m.cf)([Tb.A], () => {
            let e = Tb.A.getPendingChanges(),
                t = Tb.A.getErrors();
            return { ...e, errors: t };
        }),
        A = (0, TV.V7)({ userId: e.id, image: i }),
        h = (0, Tz.EC)(),
        E = rw.Ay.canUsePremiumProfileCustomization(e),
        S = (0, TL.z5)(i, e.avatar),
        T = (0, TL.Ac)(s, t?.banner),
        x = (0, xS.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (g.global_name?.length ?? 0) > 0 ? g.global_name : (h?.nick ?? []),
        N = (g.bio?.length ?? 0) > 0 ? g.bio : (h?.bio ?? []),
        _ = (0, pj.b)();
    return (0, c.jsxs)("div", {
        className: pF.Q,
        children: [
            (0, c.jsx)(pG, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, T3.p)({ globalName: e }),
                user: e,
            }),
            (0, c.jsx)(
                xb,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, T3.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, c.jsx)(pw, {}),
            (0, c.jsx)(
                T9,
                {
                    onAvatarChange: (e) => {
                        (0, T3.p)({ avatar: e }), (0, TL.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: g.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, c.jsx)(T4, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, c.jsx)(xl, { user: e }),
            (0, c.jsx)(xd, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, c.jsx)(xA, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            E
                ? (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)(
                              xa,
                              {
                                  showRemoveBannerButton: T,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, T3.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, c.jsx)(xC, {
                              user: e,
                              pendingAvatarSrc: A,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, T3.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, c.jsx)(
                      pV,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, T3.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, c.jsx)(
                T$,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, T3.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, c.jsx)(py, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, T3.p)({ primaryGuildId: e }),
                }),
            null != p && (0, c.jsx)(pU, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
            (0, c.jsx)(pD, {}, "badges"),
        ],
    });
}
function pz() {
    (0, si.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("41509"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
        return (t) =>
            (0, c.jsx)(e, {
                ...t,
                source: {
                    page: A.liQ.USER_SETTINGS,
                    section: A.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: A.ZSU.BUTTON_CTA,
                    type: A.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var pX = i(157723);
function pY() {
    let e = (0, m.bG)([s0.default], () => {
            let e = s0.default.getCurrentUser();
            return ts()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, m.bG)([e8.A], () => e8.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, m.cf)([Tb.A], () => ({ ...Tb.A.getPendingChanges(), showNotice: Tb.A.showNotice() })),
        a = (0, TV.V7)({ userId: e.id, image: n }),
        o = (0, TL.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, pT.A)() && null != i ? x$.Ay.parse(void 0, i).content : i,
        d = rw.Ay.canUsePremiumProfileCustomization(e),
        h = (0, px.St)("edit-profile-upsell"),
        { analyticsLocations: E } = (0, eR.Ay)(ty.A.USER_SETTINGS_USER_PROFILE);
    g.useEffect(() => () => e2.h.wait(TI.IM), []);
    let [S, T] = g.useState(!1),
        x = !d,
        f = g.useRef(null);
    return t
        ? (0, c.jsx)(aM.A, {})
        : (0, c.jsxs)(eR.f5, {
              value: E,
              children: [
                  (0, c.jsx)(xJ, {}),
                  (0, c.jsx)(TM, {
                      profilePreview: (0, c.jsx)(TU.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: pz,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: pX.ti,
                      }),
                      nameplatePreview: (0, c.jsx)(TD.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? pX.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, c.jsx)(pB, {}),
                  }),
                  (0, c.jsx)(xz.L, {
                      innerRef: f,
                      onChange: (e) => T(e),
                      threshold: 0.25,
                      active: x,
                      children: (0, c.jsx)("div", {
                          ref: f,
                          children: (0, c.jsx)(pS, { user: e, shouldShow: x, isVisible: S }),
                      }),
                  }),
                  x &&
                      !l &&
                      (0, c.jsx)(x0.d, {
                          className: pX.EL,
                          showUpsell: !S,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, x2.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: h
                              ? (0, c.jsx)(x1.l, { size: "md", location: ty.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, c.jsx)("div", {
                              className: pX.Xl,
                              children: (0, c.jsx)(p.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      e7.default.track(A.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          f?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: j.intl.string(j.t.uw9zI7),
                                  icon: ry.t,
                              }),
                          }),
                      }),
              ],
          });
}
var pH = i(625494);
i(46121);
var pK = i(521078);
let pW = { [eN.Eq.USER_PROFILE]: "main_profile_tab", [eN.Eq.GUILD]: "guild_profile_tab" },
    pZ = (0, a.E2)(o.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, m.bG)([sg.A, dm.Ay, Tb.A], () => {
                    let e = Tb.A.selectedGuildId ?? sg.A.getGuildId();
                    return null == e || Tb._.has(e) ? dm.Ay.getFlattenedGuildIds().find((e) => !Tb._.has(e)) : e;
                }),
                t = (0, m.bG)([sc.A], () => sc.A.getGuild(e)),
                i = (0, m.bG)([Tb.A], () => Tb.A.showNotice()),
                n = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
                s = pu.A.useField("subsection");
            return (
                g.useEffect(() => {
                    (0, i3._)(pW[s]);
                }, [s]),
                g.useEffect(() => {
                    null != n && t?.id != null && (0, xw.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, c.jsx)(xB, {
                    children: (0, c.jsxs)(uT.F, {
                        component: (0, c.jsx)(n8.A, {
                            children: (0, c.jsx)(E.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, c.jsxs)(TO.V, {
                                className: pK.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, i5.fO)({ duration: 300, intensity: 1.4 }),
                                                pH._.dispatch(A.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === eN.Eq.GUILD && null != t && (0, TR.V2)(t.id),
                                            pu.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, c.jsx)(
                                        TO.V.Item,
                                        {
                                            className: pK.YU,
                                            id: eN.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        eN.Eq.USER_PROFILE,
                                    ),
                                    (0, c.jsx)(
                                        TO.V.Item,
                                        {
                                            className: ni()(pK.YU, pK.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: eN.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        eN.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === eN.Eq.GUILD
                                ? (0, c.jsx)(xk, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, i5.fO)({ duration: 300, intensity: 1.4 }),
                                                  pH._.dispatch(A.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, TR.JJ)(e.id);
                                      },
                                  })
                                : (0, c.jsx)(pY, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            j.intl.string(j.t["vi7f+q"]),
            j.intl.string(j.t.Ip9nBS),
            j.intl.string(j.t["2p07FR"]),
            j.intl.string(j.t["7vhiqk"]),
            j.intl.string(j.t.kPHroX),
            j.intl.string(j.t.lqaIxI),
            j.intl.string(j.t.Vgdusv),
            j.intl.string(j.t.DMeO2X),
        ],
    }),
    pq = (0, a.zZ)(o.X.PROFILE_CATEGORY, { buildLayout: () => [pZ] });
var pQ = i(938706);
function pJ() {
    let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, Ty.A)({ userId: e?.id, size: x._3.SIZE_48 });
    return null == e
        ? null
        : (0, c.jsxs)("div", {
              className: pQ.a5,
              children: [
                  (0, c.jsx)(T.eu, {
                      src: t,
                      avatarDecoration: i,
                      size: x._3.SIZE_48,
                      "aria-label": j.intl.string(j.t.lqaIxI),
                  }),
                  (0, c.jsxs)("div", {
                      className: pQ.FS,
                      children: [
                          (0, c.jsx)(z.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, c.jsxs)("div", {
                              className: pQ.Fk,
                              children: [
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: j.intl.string(j.t.Ip9nBS),
                                  }),
                                  (0, c.jsx)(rk.R, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let p$ = (0, a.t_)(o.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [Tb.A], element: TC.A },
        initialize: () => () =>
            e2.h.wait(() => {
                (0, TI.F7)();
            }),
        buildLayout: () => [pq],
    }),
    p0 = (0, a.i4)(o.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: p2,
        StronglyDiscouragedCustomComponent: pJ,
        usePredicate: () => !(0, Tv.X)("user_settings_sidebar"),
        buildLayout: () => [p$],
    }),
    p1 = (0, a.i4)(o.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: p2,
        StronglyDiscouragedCustomComponent: pJ,
        usePredicate: () => (0, Tv.X)("user_settings_sidebar"),
        onClick: () => {
            let e = o9.default.getId();
            (0, Tj.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function p2() {
    let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, Ty.A)({ userId: e?.id, size: x._3.SIZE_48 });
    return (0, c.jsx)(T.eu, { src: t, avatarDecoration: i, size: x._3.SIZE_20, "aria-hidden": !0 });
}
let p3 = (0, a.WI)(o.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [p0, p1] });
var p5 = i(98207),
    p4 = (i(204925), i(818348));
let p6 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, si.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("69757"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, c.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? p4.tE : null, onCloseCallback: t },
    );
};
var p8 = i(940856),
    p7 = i(36149),
    p9 = i(207560);
function fe(e) {
    let t = (0, p9.fk)(),
        i = (0, p7.b8)(),
        n = (0, p7.yM)(),
        s = (0, p7.Y2)();
    if (!t) return !1;
    let l = !i || n;
    switch (e) {
        case "verify":
            return l;
        case "edit":
            return !l && s;
        case "info":
            return !l && !s;
        default:
            return !1;
    }
}
var ft = i(516761);
function fi() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, c.jsxs)(z.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(ft.default.WM5adV, {
                handleOnHelpUrlHook: function () {
                    return window.open(eS.A.getArticleURL(A.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
                },
            }),
        ],
    });
}
let fn = (0, a.Tf)(o.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => fe("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: d.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fi,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, si.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, c.jsx)(e, { ...t });
            });
        },
    }),
    fs = (0, a.E2)(o.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => fe("info"),
        useSearchTerms: () => [j.intl.string(j.t["/52UYy"])],
        Component: function () {
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t["/52UYy"]),
                layout: "horizontal",
                children: (0, c.jsxs)(F.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, c.jsx)(z.E, { variant: "text-md/medium", children: j.intl.string(j.t.XxRj7f) }),
                        (0, c.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, c.jsx)(p.$, {
                                onClick: p4.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var fl = i(31720),
    fr = i(847599);
let fa = (0, a.Tf)(o.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => fe("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: d.fq.TEXT,
            text: (0, p7.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA),
        }),
        useLabel: function () {
            return (0, p7.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => fl.A.showAgeVerificationGetStartedModal({ entryPoint: fr.q1.ACCOUNT_AGE_GROUP }),
    }),
    fo = (0, a.Tf)(o.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: d.fq.TEXT, text: j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => p6(),
    });
function fu(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fd(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function fc(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: s } = e,
        [l, r] = g.useState(!1),
        a = l ? t : i(t);
    return (0, c.jsxs)(F.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, c.jsx)(z.E, { variant: "text-md/medium", children: a }),
            (0, c.jsx)(dW.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": l ? s : n,
                onClick: () => r(!l),
                text: l ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
            }),
        ],
    });
}
function fg() {
    let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.email);
    return null == e
        ? (0, c.jsx)(z.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, c.jsx)(fc, {
              text: e,
              censor: fd,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
          });
}
let fm = (0, a.Tf)(o.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: d.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fg }),
    useLabel: function () {
        return null == (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.email)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.email)
            ? j.intl.string(j.t["pvBD+W"])
            : j.intl.string(j.t["8peUT0"]);
    },
    onClick: function () {
        (0, si.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("11322"), i.e("20577"), i.e("65861")]).then(i.bind(i, 97060));
            return (t) => (0, c.jsx)(e, { ...t });
        });
    },
});
var fA = i(557722),
    fh = i(53516);
function fE() {
    let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, c.jsx)(z.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, c.jsx)(F.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, c.jsx)(fc, {
                  text: t,
                  censor: fu,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
              }),
          });
}
let fS = (0, a.Tf)(o.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: d.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fE }),
    useLabel: function () {
        return null == (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    onClick: function () {
        null == s0.default.getCurrentUser()?.phone
            ? (0, si.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          i.e("49747"),
                          i.e("72712"),
                          i.e("89545"),
                          i.e("11493"),
                          i.e("84704"),
                          i.e("86197"),
                      ]).then(i.bind(i, 615715));
                      return (t) => (0, c.jsx)(e, { reason: fA.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: fh.V },
              )
            : (0, si.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("55682"), i.e("40933")]).then(i.bind(i, 660740));
                  return (t) => (0, c.jsx)(e, { ...t });
              });
    },
});
function fT() {
    let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fx() {
    let e = (0, Tz.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, m.bG)([s0.default], () => s0.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(z.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, c.jsx)(n6.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, c.jsx)(nw.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: iZ.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let fp = (0, a.Tf)(o.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: d.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: fx,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (fT() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fT,
        onClick: function () {
            (0, si.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("80032"), i.e("20429"), i.e("43350")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, c.jsx)(e, { ...t });
            });
        },
    }),
    ff = (0, a.zZ)(o.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, m.bG)([s0.default], () => null != s0.default.getCurrentUser()),
        useTitle: () => j.intl.string(j.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: d.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            title: j.intl.string(j.t.tuGzBT),
                            text: j.intl.string(j.t.NAzplE),
                            button: { text: j.intl.string(j.t.lm1UKt), onClick: () => (0, p8.S)(e) },
                        }
                  : {
                        type: d.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: j.intl.string(j.t["/3qnL/"]),
                        text: j.intl.string(j.t.qKs3vg),
                        button: { text: j.intl.string(j.t["7psymi"]), onClick: () => p6() },
                    };
        },
        buildLayout: () => [fp, fo, fm, fS, fa, fn, fs],
    });
var fN = i(398177);
let f_ = (0, a.Tf)(o.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, si.openModal)((e) => (0, c.jsx)(fN.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var fI = i(200921);
let fC = [];
function fb() {
    fC = [];
}
class fv extends m.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return fC;
    }
}
let fy = new fv(e2.h, {
    LOGOUT: fb,
    LOGIN_SUCCESS: fb,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        fC = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...fC],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        fC = i;
    },
});
function fj() {
    let e = (0, m.cf)([fy], () => fy.getSessions());
    return g.useMemo(() => {
        let t = [...e],
            i = null,
            n = o9.default.getAuthSessionIdHash();
        if (null != n) {
            let e = t.findIndex((e) => e.id_hash === n);
            e >= 0 && (i = t.splice(e, 1)[0]);
        }
        return (
            t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()),
            { currentSession: i, otherSessions: t }
        );
    }, [e]);
}
function fO(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : ns()(e).fromNow();
}
var fR = i(176524),
    fD = i(646270),
    fL = i(738678),
    fP = i(53061);
function fG(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, c.jsxs)(F.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, c.jsx)(fR.A, { icon: t, color: r ? iZ.A.colors.ICON_MUTED : "currentColor" }),
            (0, c.jsxs)(F.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, c.jsxs)(F.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, c.jsx)(z.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                            null != i &&
                                null != n &&
                                (0, c.jsx)(z.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != n &&
                                (0, c.jsx)(z.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                        ],
                    }),
                    (0, c.jsx)(z.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function fM(e) {
    let { session: t, current: i } = e,
        {
            location: n,
            platform: s,
            os: l,
            Icon: r,
            lastActive: a,
        } = (function (e, t) {
            let i = e.client_info?.location ?? e.client_info?.ip,
                n = e.client_info?.platform,
                { text: s, icon: l } = (function (e) {
                    switch (e?.toLowerCase().trim()) {
                        case null:
                        case void 0:
                        case "":
                            return { text: j.intl.string(j.t.cDHCNY), icon: E9.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: fD.u };
                        case "horizon os":
                            return { text: e, icon: fL.G };
                        default:
                            return { text: e, icon: E9.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : fO(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(i9.Vq);
    return (0, c.jsx)(fG, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, c.jsx)(t8.D, {
                className: fP.X,
                onClick: () => (0, fI.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, c.jsx)(dt.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fU(e) {
    let { title: t, children: i } = e,
        n = g.useId();
    return (0, c.jsxs)(F.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, c.jsx)(E.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, c.jsx)(F.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
let fV = (0, a.E2)(o.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = fj();
            return null == e
                ? (0, c.jsx)(aV.y, {})
                : (0, c.jsx)(fU, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, c.jsx)(fM, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fk = (0, a.E2)(o.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fj();
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, c.jsx)(p.$, {
                    onClick: () => (0, fI.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fj();
            return e.length > 0;
        },
    });
var fw = i(766928);
function fF() {
    return (0, c.jsx)(fG, {
        icon: fw.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, t9.openUserSettings)(o.X.ACCOUNT_PANEL, { analyticsLocations: [ty.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fB = (0, a.E2)(o.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = fj(),
                t = (0, m.bG)([s0.default], () => s0.default.getCurrentUser());
            return (0, c.jsxs)(fU, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, c.jsx)(fM, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, c.jsx)(fF, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = fj(),
                t = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fz = (0, a.zZ)(o.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, fI.GY)();
        },
        buildLayout: () => [fV, fB, fk],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    fX = (0, a.t_)(o.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: aM.L,
        buildLayout: () => [fz],
    }),
    fY = (0, a.t0)(o.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fX],
        initialize: () => {
            (0, fI.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = fj(),
                i = t.length + +(null != e);
            return {
                type: d.xn.TEXT,
                text: i > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: i }) : j.intl.string(j.t.MKDeyL),
            };
        },
    });
var fH = i(464477);
function fK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? j.intl.string(j.t.YJGvuD)
              : j.intl.string(j.t["3iKih7"])
          : e.hasFlag(A.nhx.PARTNER)
            ? t
                ? j.intl.string(j.t["9UucjT"])
                : j.intl.string(j.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? j.intl.string(j.t["9VWpT9"])
                  : j.intl.string(j.t.LfCBZG)
              : null;
}
function fW() {
    return (0, a_.bG)([s0.default], () => {
        let e = s0.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fZ =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fq() {
    let e = (0, a_.bG)([s0.default], () => s0.default.getCurrentUser()?.verified);
    return fH.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fQ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, a_.bG)([sc.A, xj.A, s0.default], () =>
        s0.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : sc.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(A.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xj.A.can(A.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var fJ = i(466034);
let f$ = (0, a.Tf)(o.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => fQ(!0),
        useDisabled: () => null !== fQ(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, m.bG)([o9.default], () => o9.default.hasTOTPEnabled()),
                t = fq() === fZ.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, iq.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => p5.A.disable(),
            }),
    }),
    f0 = (0, a.zZ)(o.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, m.bG)([o9.default], () => o9.default.hasTOTPEnabled()),
                t = fq() === fZ.AVAILABLE;
            if (!e && t)
                return {
                    type: d.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: d.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: fJ.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fq()) {
                case fZ.UNAVAILABLE_NO_CRYPTO:
                    return { type: d.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.PhHhsj) };
                case fZ.UNAVAILABLE_UNVERIFIED:
                    return { type: d.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                case fZ.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [f$],
    });
var f1 = i(670492),
    f2 = i(32880),
    f3 = i(663417),
    f5 = i(658675),
    f4 = i(900686);
function f6() {
    (0, si.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, c.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    p5.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, si.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([i.e("12536"), i.e("96179")]).then(
                                        i.bind(i, 518142),
                                    );
                                    return (i) => (0, c.jsx)(e, { ...i, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: j.intl.string(j.t.PsQmzU),
                actionText: j.intl.string(j.t.ajkYcF),
            });
    });
}
var f8 = i(808658);
function f7(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function f9() {
    let e = f1.A.getVerificationKey();
    try {
        await p5.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, AJ.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: A0.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function Ne(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = f7(t),
        s = g.useRef(null),
        l = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(f5.P, { checked: i }), (0, c.jsx)(z.E, { variant: "text-md/normal", children: n })],
        });
    return us.p5
        ? (0, c.jsx)(t8.D, {
              tag: "li",
              className: ni()(f8.aY, f8.vk),
              innerRef: s,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, us.C)(n), s?.current?.focus());
              },
              onClick: function () {
                  (0, us.C)(n),
                      (0, AJ.P0)({ message: j.intl.string(j.t.mGZ66D), type: A0.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, c.jsx)("li", { className: f8.aY, children: l });
}
let Nt = (0, a.zZ)(o.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, m.bG)([f1.A], () => f1.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fW,
        buildLayout: () => [Ni],
    }),
    Ni = (0, a.E2)(o.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, m.bG)([f1.A], () => f1.A.getBackupCodes()),
                t = g.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${f7(t)}` + (i ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, c.jsx)(p.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: f6 })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)("ul", {
                              className: f8.E5,
                              children: e.map((e) => (0, c.jsx)(Ne, { code: e }, e.code)),
                          }),
                          (0, c.jsxs)(lC.e, {
                              size: "sm",
                              children: [
                                  (0, c.jsx)(f4.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, c.jsx)(p.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: f2.s,
                                      }),
                                  }),
                                  (0, c.jsx)(p.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: f3.f,
                                      onClick: f9,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    Nn = (0, a.Tf)(o.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = g.useState(!1),
                i = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.phone);
            return null == i
                ? null
                : j.intl.format(e ? j.t["xDBk/I"] : j.t.bnKdnl, {
                      phone: e ? i : i.slice(-4),
                      toggleButton: () =>
                          (0, c.jsx)(dW.Q, {
                              text: e ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.hasFlag(A.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, si.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, c.jsx)(e, {
                        ...t,
                        handleSubmit: p5.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    Ns = (0, a.zZ)(o.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, m.bG)([s0.default], () => fK(s0.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()?.hasFlag(A.nhx.MFA_SMS) ?? !1),
                t = (0, m.bG)([s0.default], () => null != fK(s0.default.getCurrentUser()));
            if (!e)
                return {
                    type: d.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: d.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: Nl,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fq(),
                t = fW(),
                i = (0, m.bG)([o9.default], () => o9.default.hasTOTPEnabled());
            return e === fZ.AVAILABLE && t && i;
        },
        buildLayout: () => [Nn],
    });
function Nl() {
    let e = s0.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: fA.d.USER_SETTINGS_UPDATE, onAddedPhone: p5.A.enableSMS }),
                (0, si.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            i.e("49747"),
                            i.e("72712"),
                            i.e("89545"),
                            i.e("11493"),
                            i.e("84704"),
                            i.e("86197"),
                        ]).then(i.bind(i, 615715));
                        return (i) => (0, c.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: fh.V },
                );
        } else p5.A.enableSMS();
}
var Nr = i(665671),
    Na = i(442433),
    No = i(917136),
    Nu = i(976910),
    Nd = i(303778);
function Nc(e) {
    let { credential: t } = e;
    return (0, c.jsxs)("li", {
        className: Nd.e,
        children: [
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, c.jsx)(z.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: fO(t.last_used) }),
                        }),
                ],
            }),
            (0, c.jsx)(n5.K, {
                icon: cl.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, Na.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, c.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let Ng = (0, a.zZ)(o.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (fq() === fZ.AVAILABLE)
                return {
                    type: d.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: d.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: nM.j,
                            onClick: Nr.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fq()) {
                    case fZ.UNAVAILABLE_NO_CRYPTO:
                        return { type: d.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.bWCGI9) };
                    case fZ.UNAVAILABLE_UNVERIFIED:
                        return { type: d.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                    case fZ.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Nm],
    }),
    Nm = (0, a.E2)(o.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, m.cf)([Nu.A], () => ({
                hasFetchedCredentials: Nu.A.hasFetchedCredentials(),
                credentials: Nu.A.getCredentials(),
            }));
            return (g.useEffect(() => {
                t || No.JQ();
            }, [t]),
            t)
                ? (0, c.jsx)(F.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, c.jsx)(Nc, { credential: e }, e.id)),
                  })
                : (0, c.jsx)(aV.y, {});
        },
    }),
    NA = (0, a.t_)(o.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [Ng, f0, Ns, Nt],
    }),
    Nh = (0, a.t0)(o.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = fW();
            return { type: d.xn.TEXT, text: e ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt) };
        },
        buildLayout: () => [NA],
    }),
    NE = (0, a.zZ)(o.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [f_, Nh, fY],
    });
var NS = i(308645),
    NT = i(271995),
    Nx = i(855267);
let Np = (0, a.E2)(o.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: Nx.A,
    }),
    Nf = (0, a.zZ)(o.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Np] }),
    NN = (0, a.t_)(o.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [Nf],
    }),
    N_ = (0, a.zZ)(o.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [NI],
    }),
    NI = (0, a.t0)(o.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: NT.$b,
        useSubtitle: NT.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, NT._k)();
            return { type: d.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            NS.Yn();
        },
        buildLayout: () => [NN],
    });
var NC = i(738188),
    Nb = i(834981),
    Nv = i(987197),
    Ny = i(822585),
    Nj = i(840387),
    NO = i(465558),
    NR = i(602339);
let ND = (0, a.E2)(o.X.FAMILY_CENTER_SETTING, {
        Component: NO.p,
        useSearchTerms: () => [
            j.intl.string(NR.default.RZqaJn),
            j.intl.string(NR.default.bdBmqy),
            j.intl.string(NR.default["gVWG+6"]),
            j.intl.string(NR.default.ahKIJO),
            j.intl.string(NR.default["8SLtqb"]),
        ],
    }),
    NL = (0, a.zZ)(o.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [ND] }),
    NP = (0, a.t_)(o.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(NR.default.RZqaJn),
        buildLayout: () => [NL],
    }),
    NG = (0, a.zZ)(o.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(NR.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, Nv.f)(),
                t = (0, Ny.L)()?.daysRemaining ?? null,
                i = e && null != t && t >= 0,
                n = (0, Nb.VT)();
            return g.useMemo(() => (i ? { badgeType: d.Xi.WARNING } : { badgeType: d.Xi.COUNT, count: n }), [i, n]);
        },
        buildLayout: () => [NM],
    }),
    NM = (0, a.t0)(o.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nb.Li)() ? j.intl.string(NR.default.IcMQUP) : j.intl.string(NR.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Nj.Z)(),
                t = (0, Nb.Li)();
            return e
                ? t
                    ? j.intl.string(NR.default.G8lHFU)
                    : j.intl.string(NR.default.uOLNEZ)
                : j.intl.string(NR.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, Nv.f)(),
                t = (0, Ny.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: d.Xy.ICON,
                      icon: NC.i,
                      color: iZ.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: iZ.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [NP],
    });
var NU = i(425587),
    NV = i(662758);
function Nk(e) {
    if (e.body.code === A.t02.INVALID_PASSWORD) throw e;
    (0, lN.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function Nw() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = s0.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await NU.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, lN.A)({
              title: j.intl.string(j.t["Y++oNe"]),
              subtitle: j.intl.format(j.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : sc.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, lN.A)({ title: j.intl.string(j.t.vJiTOL), subtitle: j.intl.string(j.t.UyVVan) })
          : t.isClaimed()
            ? (0, si.openModal)((t) =>
                  (0, c.jsx)(NV.default, {
                      ...t,
                      handleSubmit: (t) => (0, TI.U_)(t, e).then(A.tEg, Nk),
                      title: e ? j.intl.string(j.t.xca2ts) : j.intl.string(j.t.goXv9g),
                      actionText: e ? j.intl.string(j.t["8lQ2rR"]) : j.intl.string(j.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? j.intl.string(j.t.FB4H1D) : j.intl.string(j.t.gk7h32),
                  }),
              )
            : (0, iq.A)({
                  title: j.intl.string(j.t.xca2ts),
                  subtitle: j.intl.string(j.t.FB4H1D),
                  confirmText: j.intl.string(j.t["8lQ2rR"]),
                  onConfirm: () => (0, TI.U_)("", !0),
              });
}
let NF = (0, a.Tf)(o.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Nw(!0),
    }),
    NB = (0, a.Tf)(o.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Nw(!1),
        usePredicate: () => {
            let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Nz = (0, a.zZ)(o.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [NB, NF] }),
    NX = (0, a.t_)(o.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                p5.A.clearBackupCodes(), (0, TI.Uo)();
            };
        },
        useObscuredNotice: aM.L,
        buildLayout: () => [ff, NE, N_, NG, Nz],
    }),
    NY = (0, a.i4)(o.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: gW.n,
        buildLayout: () => [NX],
    });
var NH = i(176781),
    NK = i(341923),
    NW = i(572164),
    NZ = i(539572),
    Nq = i(915725),
    NQ = i(16590);
let NJ = (0, a.zD)(o.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => j.intl.string(NQ.default.j29uJx),
        useSubtitle: () => j.intl.format(NQ.default.UCzGcQ, { learnMoreLink: eS.A.getArticleURL(A.MVz.CLIPS) }),
        useValue: () => (0, m.bG)([Nq.Ay], () => Nq.Ay.getEnableAutoclipping()),
        setValue: NZ.uL,
        useDisabled: () => !(0, NW.Et)(),
    }),
    N$ = (0, a.zY)(o.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [NJ], headerSettingKey: NJ.key }),
    N0 = (0, a.zZ)(o.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(NQ.default.XWkJoi),
        useSubtitle: () => j.intl.string(NQ.default["MJ/VsO"]),
        usePredicate: NK.H,
        usePersistentBadge: () => ({ badgeType: d.Xi.BETA }),
        useInlineNotice: () =>
            (0, NW.Et)()
                ? null
                : {
                      type: d.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: j.intl.string(NQ.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(NQ.default.qGgW4M),
                          onClick: () => NZ.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [N$],
    });
var N1 = i(974293),
    N2 = i(696016);
let N3 = [N2.zq, 25, 50, N2.Y2, N2.rv],
    N5 = (0, a.sN)(o.X.CLIPS_BITRATE, {
        usePredicate: () => (0, N1.V0)("ClipsBitrateSetting"),
        useTitle: () => j.intl.string(j.t["8bZyov"]),
        useSubtitle: () => j.intl.string(j.t["h8DSx/"]),
        minValue: N2.zq,
        maxValue: N2.rv,
        useDefaultValue: () => N2.Y2,
        getInitialValue: () => Nq.Ay.getSettings().clipsQuality.bitratePercent ?? N2.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = Nq.Ay.getSettings();
            NZ.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: N3,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, NW.Et)(),
    });
var N4 = i(226640);
let N6 = (0, a.Hn)(o.X.CLIPS_FRAME_RATE, {
        useTitle: () => j.intl.string(j.t["2wScL1"]),
        useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
        useValue: () => (0, m.bG)([Nq.Ay], () => Nq.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = Nq.Ay.getSettings();
            NZ.GS({ ...t, frameRate: e });
        },
        useOptions: N4.Fz,
        useDisabled: () => !(0, NW.Et)(),
    }),
    N8 = (0, a.E2)(o.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
        usePredicate: () => (0, m.bG)([Nq.Ay], () => Nq.Ay.getHardwareClassification()) === N2.k9.BELOW_MINIMUM,
        Component: () => (0, c.jsx)(sB.A, { look: sB.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
    }),
    N7 = (0, a.Hn)(o.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, m.bG)([Nq.Ay], () => Nq.Ay.getSettings().clipsLength),
        setValue: (e) => NZ.h$(e),
        useOptions: N4.Qu,
        useDisabled: () => !(0, NW.Et)(),
    }),
    N9 = (0, a.E2)(o.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, c.jsx)(sB.A, { look: sB.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    _e = (0, a.Hn)(o.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, m.bG)([Nq.Ay], () => Nq.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Nq.Ay.getSettings();
            NZ.GS({ ...t, resolution: e });
        },
        useOptions: N4.gF,
        useDisabled: () => !(0, NW.Et)(),
    }),
    _t = (0, a.zD)(o.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, m.bG)([Nq.Ay], () => Nq.Ay.getSettings().remindersEnabled),
        setValue: (e) => NZ.Mt(e),
        useDisabled: () => !(0, NW.Et)(),
    }),
    _i = (0, a.zZ)(o.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => j.intl.string(NQ.default.TGwzMe),
        buildLayout: () => [N8, N7, N6, _e, N5, N9, _t],
    }),
    _n = (0, a.zD)(o.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, m.bG)([Nq.Ay], () => Nq.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => NZ.YP(e),
    }),
    _s = (0, a.zD)(o.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, m.bG)([Nq.Ay], () => Nq.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => NZ.Uh(e),
    }),
    _l = (0, a.zZ)(o.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, m.bG)([s0.default], () => {
                let e = s0.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [_n, _s],
    });
var _r = i(417270),
    _a = i(645886);
let _o = (0, a.E2)(o.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, m.bG)([sR.Ay], () => sR.Ay.getKeybindForAction(A.hCu.SAVE_CLIP, !0));
            ts()(null != e, "Save clip keybind unset");
            let t = !(0, NW.Et)(),
                i = g.useRef(null),
                n = g.useCallback(
                    (t) => {
                        nk.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                s = g.useCallback(() => {
                    nk.A.setKeybind({ ...e, shortcut: (0, se.OH)(N2.Ot) });
                }, [e]);
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, c.jsx)("div", {
                    className: _a.g,
                    children: (0, c.jsx)(n9.A, {
                        ref: i,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: n,
                        trailingActions: (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsx)(n6.m, {
                                    text: j.intl.string(NQ.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, c.jsx)(n5.K, {
                                        icon: nU.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": j.intl.string(NQ.default.bUtubv),
                                        onClick: (e) => {
                                            e.stopPropagation(), i.current?.toggleRecordMode();
                                        },
                                    }),
                                }),
                                (0, c.jsx)(n6.m, {
                                    text: j.intl.string(NQ.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, c.jsx)(n5.K, {
                                        icon: _r.m,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": j.intl.string(NQ.default.Kyk1Tp),
                                        onClick: (e) => {
                                            e.stopPropagation(), s();
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
    _u = (0, a.E2)(o.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: sy.BW,
        Component: () => {
            let e = (0, m.bG)([sR.Ay], () => sR.Ay.getKeybindForAction(A.hCu.SAVE_CLIP, !0)),
                t = (0, m.bG)([sR.Ay], () => sR.Ay.getKeybindForAction(A.hCu.SAVE_SCREENSHOT, !0));
            ts()(null != e, "Save clip keybind unset"), ts()(null != t, "Save screenshot keybind unset");
            let i = g.useCallback(
                (e) => {
                    nk.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t["0U/hj7"]),
                description: j.intl.string(j.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, c.jsx)("div", {
                    className: _a.g,
                    children: (0, c.jsx)(n9.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    _d = (0, a.zD)(o.X.CLIPS_ENABLE, {
        useTitle: () => j.intl.string(j.t.h8rgrK),
        useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
        useValue: () => (0, NW.Et)(),
        setValue: (e) => NZ.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    _c = (0, a.zY)(o.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_d, _o, _u], headerSettingKey: _d.key }),
    _g = (0, a.zZ)(o.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["rWKv+e"]),
        useSubtitle: () => j.intl.format(NQ.default["dh7g+S"], { learnMoreLink: eS.A.getArticleURL(A.MVz.CLIPS) }),
        buildLayout: () => [_c],
    }),
    _m = (0, a.E2)(o.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, m.bG)([Nq.Ay], () => Nq.Ay.getSettings().storageLocation),
                t = !(0, NW.Et)(),
                i = g.useRef(!1);
            async function n() {
                if (!t && !i.current) {
                    i.current = !0;
                    try {
                        let e = await ig.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && NZ.HU(e[0]);
                    } finally {
                        i.current = !1;
                    }
                }
            }
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t.s4773E),
                description: j.intl.string(j.t.svjwGh),
                layout: "vertical",
                children: (0, c.jsxs)(F.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, c.jsx)(sn.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": j.intl.formatToPlainString(j.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, c.jsx)(p.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: n,
                            text: j.intl.string(NQ.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _A = (0, a.zZ)(o.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => j.intl.string(NQ.default["0Q+pdZ"]),
        buildLayout: () => [_m],
    }),
    _h = (0, a.t_)(o.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePredicate: sy.sw,
        buildLayout: () => [_g, N0, _i, _A, _l],
    }),
    _E = (0, a.i4)(o.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: NH.x,
        buildLayout: () => [_h],
    });
var _S = i(875444);
function _T(e, t) {
    let i = (0, m.bG)([Ea.default], () => Ea.default.getFetchState()),
        n = (0, m.bG)([Ea.default], () =>
            e ? Ea.default.getNewestTokensForNonChildrenApplications() : Ea.default.getNewestTokens(),
        ),
        s = g.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _S.O)(e.application, e.scopes)).map((e) => e.application)),
            [n],
        );
    return (
        g.useEffect(() => {
            t || h0.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== Ea.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
var _x = i(390646);
function _p(e) {
    let { applications: t } = e,
        i = g.useMemo(() => t.sort((e, t) => aq.default.compare(t.id, e.id)), [t]),
        n = g.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                e.push(n.name);
            }
            let t = e.join(", "),
                n = i.length - 3;
            return n > 0
                ? j.intl.format(j.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, c.jsx)(
                              z.E,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: j.intl.format(j.t["EADv+4"], { count: n }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [i]),
        s = g.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                let { icon: s, name: l, id: r } = n,
                    a = v.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, c.jsx)(
                        n6.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, c.jsx)("img", { src: a, "aria-label": l, className: _x.Kk }),
                        },
                        r,
                    ),
                );
            }
            let t = i.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, c.jsx)(
                            "div",
                            {
                                className: _x.lK,
                                children: (0, c.jsx)(z.E, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: `+${t}`,
                                }),
                            },
                            "omitted",
                        ),
                    ),
                e
            );
        }, [i]);
    return (0, c.jsxs)("div", {
        className: _x.wx,
        children: [
            (0, c.jsxs)("div", {
                className: _x.kX,
                children: [
                    (0, c.jsx)(z.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, c.jsxs)(t8.D, {
                        onClick: function () {
                            (0, t9.openUserSettings)(o.X.AUTHORIZED_APPS_CATEGORY);
                        },
                        className: _x.bJ,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, c.jsx)(i$._, {
                                size: "xxs",
                                color: iZ.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _x.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)("div", { className: _x.yF }),
            (0, c.jsx)("div", { className: _x.lJ, children: s }),
        ],
    });
}
function _f() {
    return (0, c.jsxs)("div", {
        className: _x.do,
        children: [
            (0, c.jsx)(z.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _x.xV,
                children: j.intl.string(j.t["+0U77d"]),
            }),
            (0, c.jsx)(z.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.V8wClM, {
                    helpdeskArticle: eS.A.getArticleURL(A.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function _N(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, c.jsx)(_p, { applications: t }) : (0, c.jsx)(_f, {});
}
let __ = (0, a.E2)(o.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _T(!0);
        return e ? (0, c.jsx)(aV.y, {}) : (0, c.jsx)(_N, { applications: t });
    },
});
function _I() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _T(!0, !0);
    return !e && t.length > 0;
}
let _C = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => ((0, E_.SV)("GameFriendDMSetting") ? j.intl.string(j.t.W8JtfT) : j.intl.string(j.t.XpBObB)),
        useSubtitle: () =>
            (0, E_.SV)("GameFriendDMSetting")
                ? j.intl.string(j.t.a99KKy)
                : j.intl.format(j.t.oZsHTD, { helpdeskArticle: eS.A.getArticleURL(A.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => y.Zk.useSetting(),
        setValue: (e) => y.Zk.updateSetting(e),
        usePredicate: _I,
    }),
    _b = (0, a.Qx)(o.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => j.intl.string(j.t["ms+Tme"]),
        useSubtitle: () =>
            (0, E_.SV)("InGameDMsSetting") ? j.intl.string(j.t["0ryspy"]) : j.intl.string(j.t["4NN4+/"]),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.JIFnN9), value: ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: j.intl.string(j.t.rRdsk1), value: ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                {
                    name: (0, E_.SV)("InGameDMsSetting") ? j.intl.string(j.t.IVRPMX) : j.intl.string(j.t.AolKwN),
                    value: ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
                },
            ];
        },
        useValue: function () {
            let e = y.TA.useSetting();
            return e === ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => y.TA.updateSetting(e),
        usePredicate: _I,
    }),
    _v = (0, a.zZ)(o.X.CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [__, _C, _b],
    });
var _y = i(687123),
    _j = i(444802),
    _O = i(558001);
i(866945);
var _R = i(835002);
function _D() {
    let e = (0, _j.WX)();
    g.useEffect(() => {
        (0, _O.N)(_R.YA.AGE_CONFIRMATION_NOTICE, _R.YX.VIEWED);
    }, []);
    let t = g.useCallback(() => {
            window.open(eS.A.getArticleURL(e), "_blank"), (0, _O.N)(_R.YA.AGE_CONFIRMATION_NOTICE, _R.YX.LEARN_MORE);
        }, [e]),
        i = g.useCallback(() => {
            fl.A.showAgeVerificationGetStartedModal({ entryPoint: fr.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _O.N)(_R.YA.AGE_CONFIRMATION_NOTICE, _R.YX.CONFIRM_AGE);
        }, []);
    return (0, c.jsx)(rj.p, {
        messageType: rj.Y.INFO,
        action: (0, c.jsx)(dW.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: j.intl.string(j.t.FDSSia),
            onClick: i,
        }),
        children: j.intl.format(j.t.mFgsfg, { hook: (e, i) => (0, c.jsx)(aI.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _L() {
    let e = (0, p9.aX)(_y.t.REACTIVE_CHECK),
        t = (0, p7.b8)();
    return g.useMemo(() => {
        if (e && !t) return { type: d.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _D };
    }, [e, t]);
}
var _P = i(308528),
    _G = i(171316);
function _M() {
    let e = (0, _G.uM)(),
        t = (0, Nb.vx)(),
        i = g.useCallback(() => {
            (0, tP.default)(),
                _P.A.openPrivateChannel({ recipientIds: t }),
                (0, _O.N)(_R.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _R.YX.LEARN_MORE);
        }, [t]),
        n = g.useCallback(() => {
            (0, _O.N)(_R.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _R.YX.VIEWED);
        }, []);
    return g.useMemo(() => {
        if (e)
            return {
                type: d.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                text: j.intl.format(NR.default.i284fU, {
                    hook: (e, t) => (0, c.jsx)(aI.Anchor, { onClick: i, children: e }, t),
                    count: t.length,
                }),
            };
    }, [i, e, t.length, n]);
}
var _U = i(323073),
    _V = i(386171),
    _k = i(96607);
let _w = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () =>
            (0, E_.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.gvC6q7) : j.intl.string(j.t.XahVjj),
        useSubtitle: () =>
            (0, E_.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.zirUC1) : j.intl.string(j.t.R9fXyS),
        useValue: _V.hT,
        useDisabled: function () {
            let e = (0, _k.A)() ?? !0,
                t = (0, _U.sP)(),
                i = (0, p7.yM)();
            return (!t || !!i) && !e;
        },
        setValue: function (e) {
            (0, _U.p5)() && e
                ? fl.A.showAgeVerificationGetStartedModal({ entryPoint: fr.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : y.Qe.updateSetting(e);
        },
    }),
    _F = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () =>
            (0, E_.SV)("AgeRestrictediOSSetting") ? j.intl.string(j.t["t6i/jW"]) : j.intl.string(j.t.hiM8pU),
        useValue: _V.tI,
        useDisabled: function () {
            let e = (0, _k.A)() ?? !0,
                t = (0, _U.sP)(),
                i = (0, p7.yM)();
            return g.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: function (e) {
            (0, _U.p5)() && e
                ? fl.A.showAgeVerificationGetStartedModal({ entryPoint: fr.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : y.Kg.updateSetting(e);
        },
    }),
    _B = (0, a.AK)(o.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: o.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    _z = (0, a.gN)(o.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_B] });
i(667532);
var _X = i(390248),
    _Y = i(632119),
    _H = i(945276),
    _K = i(389737),
    _W = i(566769);
function _Z() {
    let e,
        t = (0, _H.A)() ?? !0,
        i = (0, _G.uM)(),
        n = (0, _G.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, a_.cf)([rZ.A], () => rZ.A.settings.textAndImages?.explicitContentSettings ?? (0, _Y.C$)())),
        {
            explicitContentGuilds: (0, _Y.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _Y.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _Y.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _X.hK)() && t.includes(ek.TO.SHOW)
            ? fl.A.showAgeVerificationGetStartedModal({ entryPoint: fr.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _Y.Jz)(e);
    }
    let o = [
            { value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: ek.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: ek.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let g = { isDisabled: n, tooltipText: i ? j.intl.string(NR.default["6Af/cw"]) : void 0 };
    return (0, c.jsxs)(_K.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, c.jsx)(_W.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(_W.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(_W.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? j.intl.string(NR.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _q() {
    let e,
        t = (0, _H.A)() ?? !0,
        i = (0, _G.uM)(),
        n = (0, _G.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, a_.cf)([rZ.A], () => rZ.A.settings.textAndImages?.goreContentSettings ?? (0, _j.T4)())),
        {
            goreContentGuilds: (0, _j.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _j.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _j.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _X.hK)() && t.includes(ek.TO.SHOW)
            ? fl.A.showAgeVerificationGetStartedModal({ entryPoint: fr.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _j.qY)(e);
    }
    let o = [
            { value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: ek.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: ek.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let g = { isDisabled: n, tooltipText: i ? j.intl.string(NR.default["6Af/cw"]) : void 0 };
    return (0, c.jsxs)(_K.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, c.jsx)(_W.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(_W.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(_W.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? j.intl.string(NR.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _Q = i(464946),
    _J = i(875162),
    _$ = i(428275);
let _0 = (0, a.E2)(o.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _j.WX)(),
            t = g.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: _Z,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: _q,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, c.jsxs)(_Q.h, {
            children: [
                (0, c.jsx)(_Q._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: eS.A.getArticleURL(e) }),
                }),
                (0, c.jsx)(_J.A, { tabs: t, orientation: "vertical", tabsClassName: _$.v }),
            ],
        });
    },
    useSearchTerms: () => [
        j.intl.string(j.t["Hj/But"]),
        j.intl.string(j.t["N/oRI+"]),
        j.intl.string(j.t.QVdYsK),
        j.intl.string(j.t["aWD+tu"]),
        j.intl.string(j.t["5mnTa7"]),
        j.intl.string(j.t["K0OWP+"]),
    ],
});
var _1 = i(639555),
    _2 = i(617641),
    _3 = i(546140),
    _5 = i(406935),
    _4 = i(594061);
let _6 = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: eS.A.getArticleURL(A.MVz.SAFETY_ALERTS) }),
    useValue: _3.L,
    setValue: function (e) {
        return _4.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = _5._t.create({ value: e });
            },
            _4.Sb.INFREQUENT_USER_ACTION,
        );
    },
    usePredicate: function () {
        let e = (0, _2.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _1.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _H.A)() ?? !0;
        return e && !i && !t;
    },
});
var _8 = i(809505),
    _7 = i(923457),
    _9 = i(750714);
let Ie = (0, a.Qx)(o.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => ((0, E_.SV)("DMSpamSetting") ? j.intl.string(j.t.puwSkY) : j.intl.string(j.t.tiCXaH)),
        useSubtitle: () =>
            (0, E_.SV)("DMSpamSetting")
                ? j.intl.string(j.t["+sXN3T"])
                : j.intl.format(j.t.RvjRRI, { appealLink: eS.A.getArticleURL(A.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = y.he.useSetting(),
                t = y.cj.useSetting(),
                i = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
                n = (0, p9.yv)(_7.p.SPAM_FILTERS);
            return e !== ek.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? ek.he.FRIENDS_AND_NON_FRIENDS
                  : (_9.xY.get(t) ?? ek.he.NON_FRIENDS);
        },
        setValue: (e) => y.he.updateSetting(e),
        useOptions: function () {
            let e = (0, E_.SV)("DMSpamSetting");
            return g.useMemo(
                () =>
                    e
                        ? [
                              { name: j.intl.string(j.t["+w5yKk"]), value: ek.he.FRIENDS_AND_NON_FRIENDS },
                              { name: j.intl.string(j.t.yAPg6r), value: ek.he.NON_FRIENDS },
                              { name: j.intl.string(j.t.FEXKsv), value: ek.he.DISABLED },
                          ]
                        : (0, _8.YS)(),
                [e],
            );
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    It = (0, a.zZ)(o.X.CONTENT_CATEGORY, {
        useTitle: () => ((0, E_.SV)("ContentCategory") ? j.intl.string(j.t["3upKU8"]) : j.intl.string(j.t.xVRG4P)),
        useInlineNotice: function () {
            let e,
                t,
                i,
                n,
                s,
                l,
                r,
                a,
                o,
                u = _M(),
                m =
                    ((e = (0, Nj.Z)()),
                    (t = (0, _j.WX)()),
                    (i = g.useCallback(() => {
                        window.open(eS.A.getArticleURL(t), "_blank"),
                            (0, _O.N)(_R.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _R.YX.LEARN_MORE);
                    }, [t])),
                    (n = g.useCallback(() => {
                        (0, _O.N)(_R.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _R.YX.VIEWED);
                    }, [])),
                    g.useMemo(() => {
                        if (e)
                            return {
                                type: d.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                text: j.intl.format(j.t.EUo0yj, {
                                    hook: (e, t) => (0, c.jsx)(aI.Anchor, { onClick: i, children: e }, t),
                                }),
                            };
                    }, [i, e, n])),
                A =
                    ((s = (0, p9.SJ)()),
                    (l = (0, p7.b8)()),
                    (r = s && !l),
                    (a = g.useCallback(() => {
                        fl.A.showAgeVerificationGetStartedModal({ entryPoint: fr.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _O.N)(_R.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _R.YX.LEARN_MORE);
                    }, [])),
                    (o = g.useCallback(() => {
                        (0, _O.N)(_R.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _R.YX.VIEWED);
                    }, [])),
                    g.useMemo(() => {
                        if (r)
                            return {
                                type: d.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                text: j.intl.format(j.t.OX4ybh, {
                                    hook: (e, t) => (0, c.jsx)(aI.Anchor, { onClick: a, children: e }, t),
                                }),
                            };
                    }, [a, r, o])),
                h = _L();
            return u ?? h ?? A ?? m;
        },
        buildLayout: () => ((0, E_.Bv)("ContentCategory") ? [_0, _6, _w, _F, _z] : [_0, Ie, _6, _w, _F]),
    });
var Ii = i(189883);
let In = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: function () {
        let e = y.FA.useSetting();
        return g.useMemo(() => (0, i5.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        y.FA.updateSetting(e ? A.yKI : A.yKI & ~A.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _G.uM)();
    },
});
var Is = i(665260);
let Il = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: function () {
            let e = y.FA.useSetting(),
                t = g.useMemo(() => (0, i5.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = y.FA.getSetting();
            y.FA.updateSetting(e ? Is.UI(t, A.dzt.MUTUAL_FRIENDS) : Is.iE(t, A.dzt.MUTUAL_FRIENDS, A.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _G.uM)();
        },
    }),
    Ir = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useSubtitle: () => ((0, E_.SV)("FriendRequestsMutualGuildsSetting") ? j.intl.string(j.t["6DqAp0"]) : void 0),
        useValue: function () {
            let e = y.FA.useSetting(),
                t = g.useMemo(() => (0, i5.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = y.FA.getSetting();
            y.FA.updateSetting(e ? Is.UI(t, A.dzt.MUTUAL_GUILDS) : Is.iE(t, A.dzt.MUTUAL_GUILDS, A.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _G.uM)();
        },
    }),
    Ia = (0, a.FW)(o.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [In, Il, Ir],
    }),
    Io = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !y.Zd.useSetting(),
        setValue: function (e) {
            y.Zd.updateSetting(!e);
        },
        usePredicate: () => Ii.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: d.Xi.BETA }),
    });
function Iu() {
    let { enabled: e } = Ii.A.useConfig({ location: "Friend Request Setting" });
    return e ? j.intl.string(j.t.QVbF3l) : void 0;
}
let Id = (0, a.zZ)(o.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5gxWrt"]),
        useSubtitle: Iu,
        useSubnavLabel: () => j.intl.string(j.t.fyA115),
        useInlineNotice: _M,
        buildLayout: () => [Ia, Io],
    }),
    Ic = (0, a.zZ)(o.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MNaVwq),
        useSubtitle: Iu,
        useInlineNotice: _M,
        buildLayout: () => [In, Il, Ir, Io],
    });
var Ig = i(994500),
    Im = i(428678),
    IA = i(717398),
    Ih = i(730134),
    IE = i(943646);
function IS(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, c.jsxs)("div", {
        className: IE.wx,
        children: [
            (0, c.jsx)("div", { className: IE.zc, children: n ? (0, c.jsx)(Im.K, {}) : (0, c.jsx)(Te.G, {}) }),
            (0, c.jsxs)("div", {
                className: IE.Qq,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: j.intl.string(n ? j.t.PFOUKW : j.t["93ZDWE"]),
                    }),
                    (0, c.jsx)(z.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: n
                            ? j.intl.format(j.t["r91W/h"], { numberOfBlockedUsers: i })
                            : j.intl.format(j.t.rXUeOl, { numberOfIgnoredUsers: i }),
                    }),
                ],
            }),
        ],
    });
}
function IT(e) {
    let { userId: t, last: i } = e,
        n = (0, m.bG)([Ig.A], () => Ig.A.isBlocked(t)),
        s = (0, m.bG)([s0.default], () => s0.default.getUser(t)),
        [l, r] = g.useState(!1),
        a = g.useCallback(() => {
            r(!0),
                n
                    ? IA.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : IA.A.unignoreUser(t, ty.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, c.jsxs)("div", {
              className: ni()(IE.nM, { [IE.fW]: i }),
              children: [
                  (0, c.jsxs)("div", {
                      className: IE.eF,
                      children: [
                          (0, c.jsx)(Ih.A, { user: s, size: x._3.SIZE_40 }),
                          (0, c.jsxs)("div", {
                              className: IE.Qq,
                              children: [
                                  (0, c.jsx)(z.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, c.jsx)(p.$, {
                      variant: "secondary",
                      text: j.intl.string(n ? j.t.XyHpKH : j.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function Ix(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = g.useState(5);
    return (0, c.jsx)(_Q.h, {
        children: (0, c.jsxs)("div", {
            className: IE.Nr,
            children: [
                (0, c.jsx)(IS, { listType: i, numberOfUsers: t.length }),
                (0, c.jsx)("div", {
                    className: IE.jS,
                    children: t.slice(0, n).map((e, i) => (0, c.jsx)(IT, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, c.jsx)("div", {
                          className: IE.vM,
                          children: (0, c.jsx)(t8.D, {
                              onClick: function () {
                                  s((e) => e + 5);
                              },
                              className: IE.Qf,
                              children: (0, c.jsx)(z.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: j.intl.format(j.t.jULEDr, {
                                      numberOfUsers: n + 5 < t.length ? 5 : t.length - n,
                                  }),
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
let Ip = (0, a.E2)(o.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, m.bG)([Ig.A], () => Ig.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, m.yK)([Ig.A], () => Ig.A.getBlockedIDs());
            return (0, c.jsx)(Ix, { userIds: e, listType: "blocked" });
        },
    }),
    If = (0, a.E2)(o.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, m.bG)([Ig.A], () => Ig.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, m.yK)([Ig.A], () => Ig.A.getIgnoredIDs());
            return (0, c.jsx)(Ix, { userIds: e, listType: "ignored" });
        },
    }),
    IN = (0, a.zZ)(o.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () =>
            (0, E_.SV)("RestrictedUsersCategory") ? j.intl.string(j.t["+Iryf3"]) : j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: eS.A.getArticleURL(A.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Ip, If],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, m.cf)([Ig.A], () => ({
                hasBlockedUsers: Ig.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: Ig.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var I_ = i(22385),
    II = i(556534),
    IC = i(111159),
    Ib = i(152056),
    Iv = i(467962);
let Iy = { label: () => j.intl.string(j.t["32u1Dx"]), value: I_.YG };
var Ij = i(954225);
function IO() {
    return (0, II.Tx)() !== I_.YG;
}
function IR() {
    return j.intl.string(j.t["T+nevN"]);
}
let ID = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: IR,
    useSubtitle: () =>
        j.intl.format(j.t.jXKQCu, { helpdeskArticle: eS.A.getArticleURL(A.MVz.ACTIVITY_STATUS_SETTINGS) }),
    useValue: function () {
        let e = (0, II.Tx)();
        return !y.pE.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = I_.xk.getState().selectedGuildId,
            i = (0, i5.CN)();
        e ? i.delete(t) : i.add(t),
            y.pE.updateSetting([...i]),
            e7.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: Ij.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: eN.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: IO,
});
function IL() {
    return (0, II.Tx)() !== I_.YG;
}
function IP() {
    return j.intl.string(hN.default.WhdCGP);
}
let IG = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: IP,
    useSubtitle: () => j.intl.string(hN.default.UQ9RHJ),
    useValue: function () {
        let e = (0, II.Tx)();
        return !y.JG.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = I_.xk.getState().selectedGuildId,
            i = (0, i5.Kk)();
        e ? i.delete(t) : i.add(t),
            y.JG.updateSetting([...i]),
            e7.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: Ij.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: eN.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: IL,
});
var IM = i(307863),
    IU = i(428031),
    IV = i(972737);
function Ik() {
    return (0, IM.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN);
}
function Iw() {
    let e = (0, II.Tx)(),
        t = (0, II.q9)(),
        i = (0, IM.e)();
    return e === I_.YG
        ? i
            ? j.intl.string(j.t.XXGmuB)
            : j.intl.string(j.t.wbYDfT)
        : t
          ? j.intl.string(j.t.V0ka0Q)
          : i
            ? j.intl.string(j.t.F9WY3f)
            : j.intl.string(j.t.G7c3Xo);
}
function IF() {
    let e = (0, II.Tx)(),
        t = y.$s.useSetting().includes(e),
        i = (0, IU.K)();
    return e === I_.YG ? !i : !t;
}
function IB() {
    let e = (0, _G.uM)();
    return (0, II.Tx)() === I_.YG && e;
}
function Iz(e, t) {
    e7.default.track(A.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
function IX(e) {
    let t = I_.xk.getState().selectedGuildId;
    if (t === I_.YG) {
        var i;
        (i = !e),
            (0, IV.O)({
                header: j.intl.string(j.t["uUr+GR"]),
                body: j.intl.string(j.t.hjGJBp),
                confirmText: j.intl.string(j.t.gm1Vej),
                cancelText: j.intl.string(j.t.p89ACt),
                confirmButtonColor: l_.$n.Colors.BRAND,
                onConfirm: function () {
                    y.n6.updateSetting(i), Iz(i, !1);
                },
                onCancel: function () {
                    y.n6.updateSetting(i), y.$s.updateSetting(i ? sc.A.getGuildIds() : []), Iz(i, !0);
                },
            });
    } else {
        let i = (0, i5.Tb)();
        e ? i.delete(t) : i.add(t),
            y.$s.updateSetting(Array.from(i)),
            e7.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: Ij.m.DIRECT_MESSAGES_TOGGLE,
                ingress: eN.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    }
}
let IY = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: Iw,
        useValue: IF,
        useDisabled: IB,
        setValue: IX,
    }),
    IH = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: Ik,
        useSubtitle: Iw,
        useValue: IF,
        useDisabled: IB,
        setValue: IX,
    });
var IK = i(953298);
function IW(e, t) {
    e7.default.track(A.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function IZ() {
    let e = (0, E_.SV)("PermissionsMessageRequestsSetting"),
        t = (0, II.q9)();
    if (e)
        if (t) return j.intl.string(j.t["982I7+"]);
        else return j.intl.string(j.t["3yHM5i"]);
    return j.intl.string(j.t["3o2ojh"]);
}
let Iq = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: IZ,
        useSubtitle: function () {
            let e = (0, E_.SV)("PermissionsMessageRequestsSetting"),
                t = (0, II.q9)();
            return e
                ? j.intl.format(j.t.BoCjTy, { learnMoreUrl: eS.A.getArticleURL(A.MVz.MESSAGE_REQUESTS) })
                : t
                  ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: eS.A.getArticleURL(A.MVz.MESSAGE_REQUESTS) })
                  : j.intl.format(j.t.wkm9a3, { helpdeskArticle: eS.A.getArticleURL(A.MVz.MESSAGE_REQUESTS) });
        },
        useValue: function () {
            let e = (0, II.Tx)(),
                t = (0, IU.K)(),
                i = y.$s.useSetting().includes(e),
                n = y.YX.useSetting(),
                s = y.Zr.useSetting().includes(e);
            return e === I_.YG ? !t && !n : !i && !s;
        },
        useDisabled: function () {
            let e = (0, II.Tx)(),
                t = (0, _G.uM)(),
                i = (0, IU.K)(),
                n = y.$s.useSetting().includes(e);
            return e === I_.YG ? i || t : n;
        },
        setValue: function (e) {
            let t = I_.xk.getState().selectedGuildId;
            if (!e && (0, IK.w)())
                return void fl.A.showAgeVerificationGetStartedModal({ entryPoint: fr.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === I_.YG) {
                var i;
                (i = !e),
                    (0, IV.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: l_.$n.Colors.BRAND,
                        onConfirm: function () {
                            y.YX.updateSetting(i), IW(i, !1);
                        },
                        onCancel: function () {
                            y.YX.updateSetting(i), y.Zr.updateSetting(i ? sc.A.getGuildIds() : []), IW(i, !0);
                        },
                    });
            } else {
                let i = (0, i5.xo)();
                e ? i.delete(t) : i.add(t),
                    y.Zr.updateSetting(Array.from(i)),
                    e7.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: Ij.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eN.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    IQ = (0, a.E2)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = (0, E_.SV)("GuildSelect"),
                t = [Ik(), IZ()],
                i = IP(),
                n = IL();
            !e && n && t.push(i);
            let s = IR(),
                l = IO();
            return !e && l && t.push(s), t;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, I_.xk)(),
                i = (0, m.bG)([dm.Ay], () => dm.Ay.getFlattenedGuildIds()),
                n = (0, m.bG)([sc.A], () => sc.A.getGuilds()),
                s = i[0];
            g.useEffect(
                () =>
                    Ib.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = I_.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === I_.YG && null != s
                                ? t(s)
                                : "" === e && n !== I_.YG && t(I_.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = g.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...Iy,
                        id: Iy.value,
                        label: Iy.label(),
                        leading: (0, c.jsx)("div", {
                            className: Iv.KP,
                            children: (0, c.jsx)(IC.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: Iv.cl,
                            }),
                        }),
                    }),
                    i.forEach((t) => {
                        let i = n[t];
                        null != i &&
                            e.push({
                                id: i.id,
                                label: i.name,
                                value: i.id,
                                leading: (0, c.jsx)(dj.Ay, {
                                    className: Iv.cl,
                                    guild: i,
                                    size: dj.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [i, n]);
            return (0, c.jsx)(Tg.Z, {
                selectionMode: "single",
                onSelectionChange: function (e) {
                    t(e);
                },
                value: e,
                options: l,
            });
        },
    });
function IJ() {
    let e = _M(),
        t = _L();
    if ((0, II.Tx)() === I_.YG) return e ?? t;
}
let I$ = (0, a.zZ)(o.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Y5GYcX),
        useSubnavLabel: () => j.intl.string(j.t.YUU0RF),
        useInlineNotice: IJ,
        buildLayout: () => [IQ, IY, Iq],
    }),
    I0 = (0, a.zZ)(o.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.eYaT7L),
        useInlineNotice: IJ,
        buildLayout: () => [IQ, IH, Iq, IG, ID],
    }),
    I1 = (0, a.dT)(o.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [It, I0, Ic, IN],
    }),
    I2 = (0, a.dT)(o.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            h0.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [_v],
    }),
    I3 = (0, a.t_)(o.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [I1, I2],
    }),
    I5 = (0, a.i4)(o.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: u$.i,
        buildLayout: () => [I3],
    });
var I4 = i(254138),
    I6 = i(290595),
    I8 = i(153488);
let I7 = (0, a.zD)(o.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => j.intl.string(j.t.AGDDkH),
    useSubtitle: () => j.intl.string(j.t.kyo3dJ),
    useValue: () => y.Q$.useSetting(),
    setValue: (e) => NZ.eQ({ allowVoiceRecording: e }),
});
var I9 = i(157559),
    Ce = i(331887);
function Ct() {
    let e = (0, m.bG)([s0.default], () => s0.default.getCurrentUser()),
        t = (0, m.bG)([Ce.A], () => Ce.A.harvestType),
        [i, n] = g.useState(() => Date.now()),
        s = null == t ? i : new Date(t.created_at).getTime() + 2592e6,
        l = g.useRef(null);
    return (g.useEffect(() => {
        let e = s - Date.now();
        if (e > 0) {
            let t = setTimeout(() => n(Date.now()), e);
            clearTimeout(l.current), (l.current = t);
        }
        return () => clearTimeout(l.current);
    }, [s]),
    e?.verified)
        ? e.isStaff()
            ? { allowed: !1, reason: "staff" }
            : null == t
              ? { allowed: !0 }
              : s > i
                ? { allowed: !1, reason: "rate_limited", nextAllowed: new Date(s) }
                : { allowed: !0 }
        : { allowed: !1, reason: "not_verified" };
}
let Ci = (0, a.Tf)(o.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = Ct();
            if (e.allowed) return j.intl.format(j.t.NRI6vt, { article: eS.A.getArticleURL(A.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return j.intl.string(j.t.hIbRso);
                case "not_verified":
                    return j.intl.format(j.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, c.jsx)(
                                t8.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, t9.openUserSettings)(o.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = ns()(e.nextAllowed).format("MMMM Do YYYY");
                    return j.intl.format(j.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            e2.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                e1.Bo.get({ url: A.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        e2.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        e2.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    });
        },
        useDisabled: () => !Ct().allowed,
        useLoading: () => (0, m.bG)([Ce.A], () => Ce.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => j.intl.string(j.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...n } = e;
                    (0, si.openModalLazy)(async () => {
                        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
                        return (i) => (0, c.jsx)(e, { modalProps: i, onConfirm: t });
                    }, n);
                })({
                    onConfirm: (i) => {
                        (t = !1),
                            (0, TI.$I)(i)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            e2.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? I9.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : I9.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        I9.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
                                    },
                                )
                                .finally(e);
                    },
                    onCloseCallback: () => {
                        t && e();
                    },
                });
            });
        },
    }),
    Cn = (0, a.v_)(o.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            j.intl.format(j.t.dszICC, {
                onClickDisable: () => (0, t9.openUserSettings)(o.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, t9.openUserSettings)(o.X.ACCOUNT_DELETE_SETTING),
            }),
    }),
    Cs = (0, a.zD)(o.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () =>
            j.intl.format(j.t["2SiYln"], { helpdeskArticle: eS.A.getArticleURL(A.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, m.bG)([I8.A], () => I8.A.hasConsented(A.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, I6.U)([A.YAq.PERSONALIZATION], []).catch(IV.i)
                : (0, IV.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, I6.U)([], [A.YAq.PERSONALIZATION]).catch(IV.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _G.uM,
    });
var Cl = i(884705);
function Cr() {
    return (0, m.bG)([Cl.A], () => Cl.A.isTogglesDisabled());
}
let Ca = (0, a.zD)(o.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => j.intl.string(j.t.CyLYKZ),
        useSubtitle: () =>
            j.intl.format(j.t["md5l4/"], { helpdeskArticle: eS.A.getArticleURL(A.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !y.vf.useSetting();
        },
        setValue: function (e) {
            y.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = Cr(),
                t = y.H1.useSetting(),
                i = (0, _G.uM)();
            return e || t || i;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    Co = (0, a.zD)(o.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () => j.intl.string(j.t.w4fvxe),
        useValue: function () {
            return !y.H1.useSetting();
        },
        setValue: function (e) {
            y.H1.updateSetting(!e);
        },
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: function () {
            let e = Cr(),
                t = (0, _G.uM)();
            return e || t;
        },
    }),
    Cu = (0, a.AK)(o.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: o.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = hT(2);
            return j.intl.format(j.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = hx();
            return { type: d.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, m.bG)([nH.Ay], () => nH.Ay.getGamesSeen(!1).some((e) => !(0, hg.n1)(e))) && (0, iu.xl)(),
    }),
    Cd = (0, a.gN)(o.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Cu] }),
    Cc = (0, a.zD)(o.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () =>
            j.intl.format(j.t.FNqmmX, { helpdeskArticle: eS.A.getArticleURL(A.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, m.bG)([I8.A], () => I8.A.hasConsented(A.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, I6.U)([A.YAq.USAGE_STATISTICS], []).catch(IV.i)
                : (0, IV.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, I6.U)([], [A.YAq.USAGE_STATISTICS]).catch(IV.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _G.uM,
    }),
    Cg = (0, a.zZ)(o.X.DATA_USAGE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.QDAriI),
        useInlineNotice: _M,
        initialize: () => {
            I8.A.fetchedConsents || (0, I6.Q)();
        },
        buildLayout: () => [Cn, Cc, Cs, Co, Ca, I7, Ci, Cd],
    });
var Cm = i(567926);
let CA = (0, a.zD)(o.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => j.intl.string(Cm.default.F3llsQ),
    useSubtitle: () => j.intl.string(Cm.default["6goWcz"]),
    useValue: y.Sy.useSetting,
    setValue: function (e) {
        y.Sy.updateSetting(e),
            e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: hI.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            });
    },
});
function Ch() {
    let e = y.JG.useSetting();
    return (0, m.yK)([dm.Ay, sc.A], () => {
        let t = new Set(e);
        return dm.Ay.getFlattenedGuildIds().filter((e) => null != sc.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let CE = (0, a.AK)(o.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Ch();
            if (0 === e.length) return j.intl.format(j.t.QJIJ5p, {});
            let t = sc.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? j.intl.format(j.t["T+8J4A"], { guildName: i })
                : j.intl.format(j.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                i =
                    ((e = Ch()),
                    0 ===
                    (t = (0, m.yK)(
                        [sc.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => sc.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, c.jsx)(hV, { guild: t[0], size: hm.CD }),
                                    shape: hm.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, c.jsx)(hV, { guild: t[1], size: hm.CD }), shape: hm.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, c.jsx)(hV, { guild: t[0], size: hm.CD }),
                                    shape: hm.e0.SQUIRCLE,
                                },
                            });
            return { type: d.wF.STACKED_ICONS, icons: i };
        },
        destinationKey: o.X.ACTIVITY_PRIVACY_PANEL,
    }),
    CS = (0, a.gN)(o.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, hv.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [CE],
    }),
    CT = (0, a.Qx)(o.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, hv.lX)("ProfilePrivacySetting"),
        useTitle: () => j.intl.string(j.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: j.intl.string(j.t.Boxc8R),
                    desc: j.intl.string(j.t["nLj+nc"]),
                    value: ek.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: j.intl.string(j.t.YOIKBt),
                    desc: j.intl.string(j.t.y0JZ4s),
                    value: ek.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: j.intl.string(j.t.u0nlJv), desc: j.intl.string(j.t["4jnKHu"]), value: ek.KP.FRIENDS_ONLY },
            ];
        },
        useValue: y.KP.useSetting,
        setValue: function (e) {
            let t = y.KP.getSetting();
            if ((y.KP.updateSetting(e), !(0, hv.W1)("ProfilePrivacySetting"))) return;
            let n = (0, hD.gS)(t, e);
            null != n &&
                (0, si.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("81849"), i.e("62041"), i.e("63786")]).then(
                        i.bind(i, 413201),
                    );
                    return (t) =>
                        (0, c.jsx)(e, {
                            ...t,
                            direction: n.direction,
                            affectedGuildIds: n.affectedGuildIds,
                            settingName: n.settingName,
                            mappedActivityValue: n.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.Qnf32C)],
    }),
    Cx = (0, a.zZ)(o.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () =>
            j.intl.format(j.t.N4jSgR, {
                learnMoreUrl: eS.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [CT, CA, CS],
    });
var Cp = i(936388),
    Cf = i(714763),
    CN = i(814278);
let C_ = (0, a.zD)(o.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, CN.Lu)() }),
    useValue: function () {
        return (0, m.bG)([Cf.A], () => Cf.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        Cp.A.updatePersistentCodesEnabled(e);
    },
});
var CI = i(787392);
function CC() {
    return (0, m.yK)([CI.A], () => CI.A.getUserIds());
}
var Cb = i(803306),
    Cv = i(966327),
    Cy = i(509531);
function Cj(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, eR.Ay)(),
        s = (0, m.bG)([s0.default], () => s0.default.getUser(t)),
        l = xv.Ay.getFormattedName(s),
        r = g.useCallback(() => {
            (0, CN.kj)(t);
        }, [t]),
        a = g.useCallback(() => (0, Tj.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        g.useEffect(() => {
            (0, Cb.getUser)(t);
        }, [t]),
        (0, c.jsxs)("div", {
            className: Cy.uW,
            children: [
                null != s && (0, c.jsx)(Cv.A, { className: Cy.my, user: s, size: x._3.SIZE_40 }),
                (0, c.jsxs)("div", {
                    className: Cy.Qq,
                    children: [
                        (0, c.jsx)(t8.D, {
                            className: Cy.Xh,
                            onClick: a,
                            children: (0, c.jsx)(z.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, c.jsx)(z.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/MBjYF"], { count: i }),
                        }),
                    ],
                }),
                (0, c.jsx)(t8.D, { onClick: r, className: Cy.Qz, children: (0, c.jsx)(n4.u, { size: "xs" }) }),
            ],
        })
    );
}
function CO(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, CN.tC)(n.timestamp),
        r = g.useCallback(() => {
            (0, CN.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, c.jsxs)("div", {
        className: t,
        children: [
            (0, c.jsxs)("div", {
                className: Cy.Qq,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: j.intl.format(j.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, c.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, c.jsx)(t8.D, {
                className: Cy.Kk,
                onClick: r,
                children: (0, c.jsx)(dt.P, { size: "md", color: iZ.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function CR(e) {
    let { userId: t } = e,
        i = (0, m.yK)([CI.A], () =>
            k()(CI.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, i] = e;
                    return { verifiedKey: t, timestamp: i };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(Cj, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, c.jsxs)(
                    g.Fragment,
                    {
                        children: [
                            (0, c.jsx)(CO, { className: Cy.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, c.jsx)("div", { className: Cy.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var CD = i(756625);
let CL = (0, a.E2)(o.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = CC();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = CC();
            return (0, c.jsxs)(_Q.h, {
                children: [
                    (0, c.jsx)(_Q._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, CN.dc)() }),
                    }),
                    e.map((e) => (0, c.jsx)("div", { className: CD.A, children: (0, c.jsx)(CR, { userId: e }) }, e)),
                ],
            });
        },
    }),
    CP = (0, a.zZ)(o.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.bTwjaz),
        usePredicate: () => (0, eW.isDesktop)(),
        buildLayout: () => [C_, CL],
    }),
    CG = (0, a.t_)(o.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => [Cg, Cx, CP],
    }),
    CM = (0, a.i4)(o.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: I4.m,
        buildLayout: () => [CG],
    });
var CU = i(476713);
let CV = (0, a.AK)(o.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.O65dzZ),
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        destinationKey: o.X.AUTHORIZED_APPS_CATEGORY,
    }),
    Ck = (0, a.gN)(o.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [CV] }),
    Cw = (0, a.E2)(o.X.CONNECTED_GAMES_UNAVAILABLE, {
        Component: function () {
            let { showLoadingIndicator: e } = _T(!0, !0);
            return e ? (0, c.jsx)(aV.y, {}) : (0, c.jsx)(_f, {});
        },
        useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
        usePredicate: () => {
            let { showLoadingIndicator: e, slayerSdkApplications: t } = _T(!0, !0);
            return e || 0 === t.length;
        },
    });
function CF() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = _T(!0, !0);
    return {
        sortedGames: g.useMemo(() => e.toSorted((e, t) => aq.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
i(839272);
let CB = (0, a.zZ)(o.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [Ie] }),
    Cz = (0, a.zZ)(o.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = CF();
            function t(e, t) {
                return (0, c.jsx)(
                    z.E,
                    { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? j.intl.string(j.t.Amr1IZ)
                : 1 === e.length
                  ? j.intl.format(j.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? j.intl.format(j.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : j.intl.format(j.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => j.intl.string(j.t.YpCiMt),
        useHeaderDecoration: () => {
            let e = (function () {
                let { sortedGames: e } = CF();
                return g.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let i = e[1];
                    return {
                        frontIcon: {
                            icon: (0, c.jsx)("img", {
                                src: v.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: hm.CD,
                                height: hm.CD,
                            }),
                            shape: hm.e0.ROUNDED,
                        },
                        ...(null != i && {
                            backIcon: {
                                icon: (0, c.jsx)("img", {
                                    src: v.Ay.getApplicationIconURL({ id: i.id, icon: i.icon }),
                                    alt: i.name,
                                    width: hm.YP,
                                    height: hm.YP,
                                }),
                                shape: hm.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: d.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        initialize: () => {
            h0.A.fetch();
        },
        buildLayout: () => [_C, _b, Cw, Ck],
    }),
    CX = (0, a.t_)(o.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [It, CB, I$, Id, Cz, IN],
    }),
    CY = (0, a.i4)(o.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: CU.l,
        buildLayout: () => [CX],
    });
var CH = i(782603),
    CK = i(899847),
    CW = i(695515),
    CZ = i(936926);
let Cq = (0, a.Hn)(o.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => j.intl.string(j.t["8rHeOr"]),
        useSubtitle: () => j.intl.string(j.t["eJE6+J"]),
        useValue: y.cU.useSetting,
        setValue: y.cU.updateSetting,
        useOptions: () =>
            V.range(1, 11).map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: j.intl.formatToPlainString(j.t.iXLF9W, { minutes: e }),
            })),
    }),
    CQ = (0, a.zD)(o.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, t9.openUserSettings)(o.X.TTS_PLAYBACK_RATE) }),
        useValue: y.on.useSetting,
        setValue: y.on.updateSetting,
    }),
    CJ = (0, a.Qx)(o.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, m.bG)([r4.A], () => r4.A.getTTSType()),
        setValue: (e) => ae.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.B1AGeJ), value: A.aVn.ALL_CHANNELS },
                { name: j.intl.string(j.t.uzZg9e), value: A.aVn.SELECTED_CHANNEL },
                { name: j.intl.string(j.t.DYO5Oi), value: A.aVn.NEVER },
            ];
        },
        usePredicate: () => U.$j,
    }),
    C$ = o.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    C0 = (0, a.bd)(C$, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tc(C$, {
                formatter: (e) => {
                    let { title: t, index: i } = e;
                    return "string" != typeof t
                        ? t
                        : 0 === i
                          ? `${t.charAt(0).toLocaleUpperCase()}${t.slice(1).toLocaleLowerCase()}`
                          : t.toLocaleLowerCase();
                },
            });
        },
        buildLayout: () => [Cq, CQ, CJ],
    }),
    C1 = (0, a.zZ)(o.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [C0],
    }),
    C2 = (0, a.zD)(o.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: function () {
            return (0, m.bG)([r4.A], () => !r4.A.getDisableUnreadBadge());
        },
        setValue: (e) => ae.default.setDisableUnreadBadge(!e),
    }),
    C3 = (0, a.zZ)(o.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [C2],
    });
var C5 = i(840559),
    C4 = i(997187),
    C6 = i(723923);
let C8 = C6.px.map((e) =>
        (0, a.zD)(`${o.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, m.cf)([C4.A], () => C4.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, C5.CA)(e.category, t),
        }),
    ),
    C7 = (0, a.Tf)(o.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, m.cf)([C4.A], () => C4.A.getEmailSettings());
            return C6.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, C5.NI)(),
        useVariant: () => "critical-secondary",
    }),
    C9 = (0, a.zZ)(o.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = C4.A.getEmailSettings();
            e || (0, C5.cR)();
        },
        buildLayout: () => [...C8, C7],
    }),
    be = (0, a.zD)(o.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: function () {
            return (0, m.bG)([r4.A], () => r4.A.getDesktopType()) !== A.nRU.NEVER;
        },
        setValue: (e) => ae.default.setDesktopType(e ? A.nRU.ALL : A.nRU.NEVER),
    });
var bt = i(832712),
    bi = i(543465),
    bn = i(790782);
let bs = (0, a.zD)(o.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, m.bG)([bi.Ay], () => bi.Ay.useNewNotifications),
    setValue: function (e) {
        bt.A.setAccountFlag(hI.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (A_.w.set("turnedOffNewNotifications", !0),
                e7.default.track(A.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: sc.A.getGuildsArray().filter(
                        (e) => bi.Ay.resolveGuildUnreadSetting(e) === bn.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, m.bG)(
            [s0.default, bi.Ay],
            () =>
                s0.default.getCurrentUser()?.isStaff() ||
                s0.default.getCurrentUser()?.isStaffPersonal() ||
                bi.Ay.useNewNotifications,
        ),
});
var bl = i(534654);
let br = (0, a.zD)(o.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, m.bG)([r4.A], () => r4.A.screenDowntimeReminder),
        setValue: (e) => ae.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, CZ.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, bl.A)(),
                i = (0, Nb.Du)();
            return e && t && i;
        },
    }),
    ba = (0, a.zD)(o.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: y.gY.useSetting,
        setValue: (e) => y.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, CZ.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, bl.A)(),
                i = (0, Nb.Du)();
            return e && t && i;
        },
    });
var bo = i(70730);
let bu = (0, a.zD)(o.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.NjOMvh),
        useValue: y.oz.useSetting,
        setValue: function (e) {
            y.oz.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hI.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e } = bo.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e;
        },
    }),
    bd = (0, hO.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bc = (0, a.zD)(o.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: y.NR.useSetting,
        setValue: function (e) {
            y.NR.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hI.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => bd.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    bg = (0, a.zD)(o.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.FSNIvs),
        useValue: y.Yh.useSetting,
        setValue: function (e) {
            y.Yh.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hI.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    bm = (0, hO.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bA = (0, a.zD)(o.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: y.T3.useSetting,
        setValue: function (e) {
            y.T3.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hI.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => bm.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var bh = i(815807);
let bE = (0, a.Hn)(o.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: ek.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: ek.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: ek.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: y.Zp.useSetting,
        setValue: (e) => (0, bh.n4)(e, y.Zp.getSetting()),
    }),
    bS = (0, a.zD)(o.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["k51K1+"]),
        useValue: y.Qr.useSetting,
        setValue: function (e) {
            y.Qr.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hI.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    bT = (0, hO.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bx = (0, a.zD)(o.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: y.zS.useSetting,
        setValue: function (e) {
            y.zS.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: hI.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => bT.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bp = (0, a.FW)(o.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [bg, bu, bc, bS, bx, bA, bE],
    }),
    bf = (0, a.zD)(o.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, m.bG)([r4.A], () => r4.A.taskbarFlash),
        setValue: (e) => ae.default.setTaskbarFlash(e),
        usePredicate: () => (0, iu.uF)(),
    }),
    bN = (0, a.zZ)(o.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [be, bf, bp, bs, ba, br],
    });
var b_ = i(965957),
    bI = i(312671),
    bC = i(235079);
let bb = (0, a.zD)(o.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = r6.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, m.bG)([bI.A], () => bI.A.getSoundpack()),
            t = r6.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = r6.A.getHolidaySoundpack();
        ts()(null != t, "predicate should fail if no soundpack is available"), (0, b_.p)(e ? t : bC.i.CLASSIC);
    },
    usePredicate: r6.A.useIsEligible,
});
var bv = i(970931);
let by = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: bv.kB,
        useDisabledMessage: () => ((0, bv.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    bj = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    bO = (0, a.zD)(o.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => an("message3") }),
        useValue: () =>
            (0, m.bG)([r4.A], () => r4.A.getNotifyMessagesInSelectedChannel() && !r4.A.getDisableAllSounds()),
        setValue: (e) => ae.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, m.bG)([r4.A], () => r4.A.getDisableAllSounds()),
    }),
    bR = (0, a.zD)(o.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, m.bG)([r4.A], () => r4.A.getDisableAllSounds()),
        setValue: (e) => ae.default.toggleDisableAllSounds(e),
    }),
    bD = (0, a.D1)(o.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                ai();
            };
        },
        buildLayout: () => [as(by), bO, as(bj), bR],
    }),
    bL = (0, a.AK)(o.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: o.X.SOUNDS_CATEGORY,
    }),
    bP = (0, a.gN)(o.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bL] }),
    bG = (0, a.zZ)(o.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [bb, bD, bP],
    }),
    bM = (0, a.t_)(o.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, CZ.Eq)({ location: "NotificationsPanel" }) ||
                null != CW.A.getAgeGroup() ||
                CW.A.isLoading() ||
                (CW.A.canRefetch() && CK.Ay.initialPageLoad());
        },
        buildLayout: () => [bN, bG, C3, C9, C1],
    }),
    bU = (0, a.i4)(o.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: CH.X,
        buildLayout: () => [bM],
    }),
    bV = (0, a.WI)(o.X.USER_SECTION, {
        useTitle: () => j.intl.string(j.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => {
            let e = (0, E_.Bv)("UserSection");
            return [NY, ...(e ? [] : [I5]), CM, ...(e ? [CY] : []), bU, _E];
        },
    });
var bk = i(387758),
    bw = i(271866),
    bF = i(147964),
    bB = i(868511);
let bz = (0, a.zD)(o.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: y.Q_.useSetting,
        useValue: () => (0, m.bG)([bF.A], () => null != bF.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, si.openModal)((e) => (0, c.jsx)(bB.A, { ...e })) : bw.cL();
        },
    }),
    bX = (0, a.zD)(o.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: A.X7G.API_DOCS }),
        useValue: y.Q_.useSetting,
        setValue: y.Q_.updateSetting,
        usePredicate: () => us.p5,
    }),
    bY = (0, a.zZ)(o.X.DEVELOPER_CATEGORY, { buildLayout: () => [bX, bz] }),
    bH = (0, a.t_)(o.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [bY] }),
    bK = (0, a.i4)(o.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: bk.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [bH],
    });
var bW = i(70688),
    bZ = i(830215);
let bq = (0, a.i4)(o.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: bW.o,
        onClick: () => {
            (0, iq.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    bZ.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bQ = (0, a.WI)(o.X.UTILITY_SECTION, {
        useTitle: () => j.intl.string(j.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [bK, bq],
    }),
    bJ = (0, a.Hr)({ buildLayout: () => [p3, bV, mZ, aP, T_, hd, bQ], analyticsKey: "user_settings" });
