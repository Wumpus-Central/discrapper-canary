n.d(t, { D: () => bs });
var i,
    l,
    s,
    r,
    a = n(419954),
    o = n(780964),
    u = n(550640),
    d = n(107384),
    c = n(477900),
    g = n(582128),
    m = n(17928),
    A = n(652215),
    E = n(346055),
    h = n(297264),
    S = n(364522),
    T = n(97808),
    p = n(778712),
    x = n(821609),
    f = n(775602),
    I = n(320095),
    _ = n(963852),
    N = n(763754),
    C = n(20851),
    b = n(95701),
    y = n(486020),
    v = n(885386),
    j = n(375708),
    O = n(345016);
let L = new b.nA({ id: "1337", guild_id: "1337", type: A.rbe.GUILD_TEXT, name: "preview" }),
    R = [
        { status: A.clD.IDLE, discriminator: "2" },
        { status: A.clD.DND, discriminator: "3" },
        { status: A.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, I.rh)({ ...(0, _.Ay)({ channelId: L.id, content: e }), state: A.cmJ.SENT, reactions: t });
}
var P = n(856488);
let G = (0, a.zD)(o.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => j.intl.string(j.t.TZ2hZH),
        useSubtitle: () => j.intl.string(j.t.Q7wgHc),
        useValue: () => v.D_.useSetting(),
        setValue: (e) => v.D_.updateSetting(e),
    }),
    M = (0, a.zD)(o.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => j.intl.string(j.t.XYvMIX),
        useSubtitle: () => j.intl.string(j.t.T0rbtM),
        useValue: v._z.useSetting,
        setValue: v._z.updateSetting,
    });
var U = n(100767),
    V = n(435558),
    k = n.n(V),
    w = n(935399),
    F = n(331322),
    B = n(106236),
    z = n(834730),
    X = n(113494),
    Y = n(782134),
    H = n(54570),
    K = n(8880),
    W = n(75804);
let Z = k().debounce((e) => {
    (0, H.zU)(e);
}, 250);
function q() {
    let [e, t] = g.useState(!1);
    return (
        (0, w.l0)(() => (0, H.pr)()),
        (0, c.jsx)(x.$, {
            text: j.intl.string(j.t.SKNnqq),
            icon: e ? X.PauseIcon : Y.PlayIcon,
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
var et = n(955572);
let en = (0, a.zD)(o.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => j.intl.string(j.t.OCJg5f),
    useSubtitle: () => j.intl.string(j.t.HEO0s3),
    useValue: () => (0, m.bG)([f.Ay], () => f.Ay.desaturateUserColors),
    setValue: () => (0, et.YV)(),
});
var ei = n(652525);
let el = (0, a.zD)(o.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => j.intl.string(j.t["+Isihb"]),
        useSubtitle: () => j.intl.string(j.t.nNZ1Tz),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.enableCustomCursor),
        setValue: (e) => (0, et.ts)(e),
        usePredicate: () => (0, ei.t)("EnableCustomCursorSetting"),
    }),
    es = (0, a.zD)(o.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => j.intl.string(j.t["S3z+pV"]),
        useSubtitle: () => j.intl.string(j.t["3QuI9+"]),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, et.Gm)(e),
        hasIcon: !0,
    });
var er = n(554146);
let ea = (0, a.zD)(o.X.HIGH_CONTRAST_MODE, {
    useTitle: () => j.intl.string(j.t.aZlePv),
    useSubtitle: () => j.intl.string(j.t["v2qF8+"]),
    useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, et.uh)(e ? f._1.HIGH : f._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: d.Xi.NEW, dismissibleContent: er.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var eo = n(406360),
    eu = n(742023);
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
var eA = n(964486),
    eE = n(839214),
    eh = n(502229),
    eS = n(975571);
let eT = (0, eE.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    ep = (0, a.zD)(o.X.SYNC_FORCED_COLORS, {
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
            let n = setTimeout(() => {
                (0, et.D3)(e), eT.setState({ updateTimeout: null });
            }, 150);
            eT.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, eh.D)(),
    }),
    ex = (0, a.zZ)(o.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.JqvyiY),
        buildLayout: () => [em, en, ea, el, ep, ed, eg, ec, es, ee],
    });
var ef = n(397438),
    eI = n(355097);
function e_(e) {
    return (0, m.bG)([ef.A], () =>
        (function (e) {
            switch (e) {
                case eI._A.REDUCED_MOTION:
                    return j.intl.format(j.t["1dT9V4"], {});
                case eI._A.REDUCED_MOTION_STICKERS:
                    return j.intl.string(j.t["2ExvRu"]);
                default:
                    return;
            }
        })(ef.A.getAppliedOverrideReasonKey(e)),
    );
}
let eN = (0, a.zD)(o.X.ANIMATE_EMOJIS, {
        useTitle: () => j.intl.string(j.t.iIaOlc),
        useSubtitle: () => e_("animateEmoji"),
        useValue: () => v.Sf.useSetting(),
        setValue: (e) => v.Sf.updateSetting(e),
    }),
    eC = (0, a.zD)(o.X.ANIMATE_GIFS, {
        useTitle: () => j.intl.string(j.t.wqsK7q),
        useSubtitle: () => e_("gifAutoPlay"),
        useValue: () => v.kt.useSetting(),
        setValue: (e) => v.kt.updateSetting(e),
    });
var eb = n(823894);
let ey = (0, a.Qx)(o.X.ANIMATE_STICKERS, {
        useTitle: () => j.intl.string(j.t.sBHIh0),
        useSubtitle: () => e_("animateStickers"),
        useOptions: () => [
            { name: j.intl.string(j.t["Xp+X2U"]), value: eb.BJ.ALWAYS_ANIMATE },
            { name: j.intl.string(j.t.IlLT7e), desc: j.intl.string(j.t.bIW9Tl), value: eb.BJ.ANIMATE_ON_INTERACTION },
            { name: j.intl.string(j.t.IGu8x3), value: eb.BJ.NEVER_ANIMATE },
        ],
        useValue: () => v.S0.useSetting(),
        setValue: (e) => v.S0.updateSetting(e),
    }),
    ev = (0, a.zD)(o.X.REDUCED_MOTION, {
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
        buildLayout: () => [ev, ej, eC, eN, ey],
    });
var eL = n(688810),
    eR = n(259065),
    eD = n(955298);
let eP = (0, a.zD)(o.X.DISPLAY_NAME_STYLES, {
    useTitle: () => j.intl.string(eD.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eL.Ay)();
        return j.intl.format(eD.default.aEax6P, {
            onClickOpenModal() {
                (0, eR.L)({ analyticsLocations: e });
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
var ek = n(873298);
let ew = (0, a.Qx)(o.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => j.intl.string(j.t["C/5V0A"]),
        useSubtitle: () => j.intl.string(j.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: j.intl.string(j.t["7iegX4"]), value: ek.NS.COMPACT },
            { name: j.intl.string(j.t.bBvAEH), value: ek.NS.DEFAULT },
            { name: j.intl.string(j.t["4cuYHx"]), value: ek.NS.COZY },
        ],
        useValue: () => v.Xi.useSetting(),
        setValue: (e) => {
            e !== ek.NS.UNSET_UI_DENSITY && v.Xi.updateSetting(e);
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
        useValue: () => (v.hH.useSetting() ? eB : eF),
        setValue: (e) => {
            v.hH.updateSetting(e === eB), (0, et.AC)();
        },
    });
var eX = n(381941);
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
    useDefaultValue: () => (v.hH.useSetting() ? eX.y5 : eX.ES),
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
var eK = n(775121),
    eW = n(723702);
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
        buildLayout: () => [eV, eq, ex, eO, J],
        decoration: {
            type: d.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = v.hH.useSetting(),
                    t = v.jW.useSetting(),
                    n = g.useMemo(
                        () => [
                            D(
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
                            D(j.intl.formatToPlainString(j.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, m.bG)([f.Ay], () => f.Ay.messageGroupSpacing);
                return (0, c.jsx)(E.M, {
                    children: (0, c.jsxs)("section", {
                        "aria-label": j.intl.string(j.t.RC22qg),
                        children: [
                            (0, c.jsx)(h.D, {
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
                                        style: { gap: i },
                                        "aria-label": j.intl.string(j.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, c.jsx)(
                                                "li",
                                                {
                                                    children: (0, c.jsx)(C.A, {
                                                        message: t,
                                                        channel: L,
                                                        compact: e,
                                                        author: { ...(0, N.p_)(t), colorString: "#dd80f4" },
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
                                                children: R.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, c.jsx)(
                                                        T.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: p._3.SIZE_32,
                                                            src: y.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": j.intl.string(j.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, c.jsx)(x.$, {
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
n(321073);
var e$ = n(650809),
    e0 = n(477782),
    e1 = n(636537),
    e2 = n(228366),
    e3 = n(74396),
    e6 = n(93055),
    e5 = n(269880),
    e4 = n(55619),
    e8 = n(351906),
    e7 = n(174459),
    e9 = n(812993),
    te = n(189081);
let tt = (0, a.zD)(o.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, m.bG)([te.A], () => te.A.hasLibraryApplication()),
        useTitle: () => j.intl.string(j.t.fi3UQN),
        useSubtitle: () => j.intl.string(j.t["8mYp37"]),
        useValue: () => !v.l_.useSetting(),
        setValue: (e) => v.l_.updateSetting(!e),
    }),
    tn = (0, a.zZ)(o.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [tt],
    });
var ti = n(284009),
    tl = n.n(ti),
    ts = n(199966),
    tr = n(963935);
function ta(e) {
    let { title: t } = e;
    return t;
}
function to(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: l } = e,
        s = t();
    return "string" == typeof s ? i({ title: s, index: l, key: n }) : s;
}
function tu(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, c.jsx)(to, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function td(e) {
    return e.type === tr.Z6.LIST;
}
function tc(e, t) {
    let { limit: n = 2, formatter: i = ta } = t ?? {};
    tl()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, ts._)(),
        r = l.get(e) ?? s.get(e);
    tl()(
        null != r && (r.type === tr.Z6.ACCORDION || td(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = td(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return g.useMemo(() => {
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
                return j.intl.format(j.t["3H9tCW"], { settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return j.intl.format(j.t.MWryo6, {
                    settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return j.intl.format(j.t.a00b5G, {
                    settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tu({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === l
            ? j.intl.format(j.t.O8vNbS, { settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === l
              ? j.intl.format(j.t["acXG/W"], {
                    settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: i, index: 1 }),
                })
              : j.intl.format(j.t["5+ldWc"], {
                    settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tu({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tg = n(951260);
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
    tE = (0, a.zD)(o.X.ENABLE_SEND_BUTTON, tA),
    th = (0, a.zD)(o.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
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
    tp = (0, a.zD)(o.X.ENABLE_GIF_BUTTON, {
        useTitle: () => j.intl.string(j.t.k7oNEz),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isGifButtonEnabled),
        setValue: (e) => (0, et.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, m.bG)([f.Ay], () => f.Ay.expressionPickerFormat === f.IG.FLEXIBLE),
    }),
    tx = (0, a.zD)(o.X.ENABLE_STICKER_BUTTON, {
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
    tI = (0, a.FW)(o.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => j.intl.string(j.t["V9/cNN"]),
        buildLayout: () => [tf, tS, tT, tp, tx],
    }),
    t_ = (0, a.bd)(o.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.IwVGQs) : j.intl.string(j.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tc(o.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tg.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tE, tm, tI],
    });
var tN = n(565645);
let tC = (0, a.zD)(o.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => j.intl.string(j.t["79qal8"]),
        useSubtitle: () =>
            j.intl.format(j.t.GejoQK, { emojiHook: (e, t) => (0, c.jsx)(tN.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: v.j7.useSetting,
        setValue: v.j7.updateSetting,
    }),
    tb = (0, a.zD)(o.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t.c0oFDw),
        useValue: v.BQ.useSetting,
        setValue: v.BQ.updateSetting,
    }),
    ty = (0, a.zD)(o.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.AqGrEI),
        useValue: v.SI.useSetting,
        setValue: (e) => {
            e7.default.track(A.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: A.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                v.SI.updateSetting(e);
        },
    });
var tv = n(793574);
let tj = (0, a.zD)(o.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t["d+It2U"]),
        useValue: v.ML.useSetting,
        setValue: (e) => {
            e7.default.track(A.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: A.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tv.A.TEXT_AND_IMAGES],
            }),
                v.ML.updateSetting(e);
        },
    }),
    tO = (0, a.zZ)(o.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [ty, tC, tj, tb, th, t_],
    });
var tL = n(526162),
    tR = n(793943),
    tD = n(792656),
    tP = n(830543),
    tG = n(785007),
    tM = n(806932),
    tU = n(915089),
    tV = n(10392),
    tk = n(82498),
    tw = n(174197),
    tF = n(202541);
let tB = (0, a.E2)(o.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [j.intl.string(j.t.gnwxvT)],
    Component: function () {
        let e = (0, tU.GV)(),
            { ref: t, ...n } = (0, tG._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, m.bG)([tL.A], () => tL.A.isUpsellPreview);
        return (
            (0, w.Ay)(() => {
                i &&
                    (e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tF.e.APP_ICON_UPSELL,
                        location_stack: [tv.A.USER_SETTINGS],
                    }),
                    (0, tV.sq)(A.U7l.PREMIUM_UPSELL_VIEWED, [tv.A.USER_SETTINGS], () =>
                        (0, tk.uq)(tF.e.APP_ICON_UPSELL),
                    ));
            }),
            (0, c.jsx)("div", {
                ...n,
                ref: t,
                children: (0, c.jsx)(F.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, c.jsx)(tM.m, { disabled: i, size: tw.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function tz() {
    (0, tR.nf)(tR.HP.APP_ICON), (0, tP.default)();
}
function tX() {
    return (0, c.jsx)(tD.A, {
        subscriptionTier: tF.pe.TIER_2,
        defaultTextOverride: j.intl.string(j.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: A.ZSU.BUTTON_CTA, objectType: A.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let tY = (0, a.zZ)(o.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RPh2ou),
        useSubtitle: () => j.intl.string(j.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, m.bG)([tL.A], () => tL.A.isUpsellPreview);
            return g.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: d.UV.BUTTON,
                        text: j.intl.string(j.t["6acvnZ"]),
                        onClick: tz,
                    }),
                    e && t.push({ id: "upsell-button", type: d.UV.STRONGLY_DISCOURAGED_CUSTOM, button: tX }),
                    { type: d.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [tB],
    }),
    tH = (0, a.AK)(o.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.UDr3Iy),
        useSearchTerms: () => [j.intl.string(j.t.UDr3Iy)],
        destinationKey: o.X.ACCESSIBILITY_PANEL,
    }),
    tK = (0, a.gN)(o.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [tH] });
var tW = n(452027),
    tZ = n(243721),
    tq = n(976860),
    tQ = n(16236),
    tJ = n(635233),
    t$ = n(749884),
    t0 = n(266361);
let t1 = eS.A.getArticleURL(A.MVz.FAVORITES_GUILD);
function t2() {
    let { analyticsLocations: e } = (0, eL.Ay)(tv.A.USER_SETTINGS_FAVORITES),
        t = g.useCallback(() => {
            (0, tJ.mv)("settings_page"), (0, tq.uh)(A.YYv), (0, tP.default)();
        }, []);
    return (0, c.jsx)(eL.f5, {
        value: e,
        children: (0, c.jsx)(tW.D, {
            label: j.intl.string(t0.default.OT1NK5),
            description: j.intl.format(t0.default.GR2KOG, { helpCenterLink: t1 }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, c.jsxs)(F.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, c.jsx)(x.$, { variant: "secondary", text: j.intl.string(t0.default["7WwLnr"]), onClick: t }),
                    (0, c.jsx)(tD.A, {
                        subscriptionTier: tF.pe.TIER_2,
                        defaultTextOverride: j.intl.string(t0.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let t3 = (0, a.E2)(o.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, e6.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [j.intl.string(t0.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, e6.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, t$.A)(!1);
            return e
                ? (0, c.jsx)(tZ.d, {
                      checked: t,
                      description: j.intl.format(t0.default.GR2KOG, { helpCenterLink: t1 }),
                      onChange: tQ.kG,
                      label: j.intl.string(t0.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, c.jsx)(t2, {});
        },
    }),
    t6 = (0, a.zD)(o.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => j.intl.string(j.t.U47N1p),
        useValue: v.hD.useSetting,
        setValue: v.hD.updateSetting,
    }),
    t5 = (0, a.zD)(o.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => j.intl.string(j.t.VP11No),
        useValue: v.X6.useSetting,
        setValue: v.X6.updateSetting,
    }),
    t4 = (0, a.FW)(o.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => j.intl.string(j.t["9nyle0"]),
        buildLayout: () => [t6, t5],
    }),
    t8 = (0, a.zD)(o.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => j.intl.string(j.t["5bK9vw"]),
        useValue: v.rs.useSetting,
        setValue: v.rs.updateSetting,
    }),
    t7 = (0, a.zD)(o.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => j.intl.string(j.t["zge/fP"]),
        useValue: v.jW.useSetting,
        setValue: v.jW.updateSetting,
    });
var t9 = n(939249),
    ne = n(817281),
    nt = n(766075);
let nn = (0, a.zD)(o.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => j.intl.string(j.t.JgjNG3),
        useSubtitle: () => {
            if (!v.hH.useSetting())
                return j.intl.format(j.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, c.jsx)(
                            t9.D,
                            {
                                tag: "a",
                                onClick: () => (0, nt.openUserSettings)(o.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !v.hH.useSetting(),
        useValue: () => {
            let e = (0, m.bG)([eu.Ay], () => eu.Ay.displayCompactAvatars);
            return !v.hH.useSetting() || e;
        },
        setValue: (e) => {
            ne.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    ni = (0, a.Hn)(o.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => j.intl.string(j.t.QgwmVz),
        useOptions: () => [
            { value: A.P6Q.ON_CLICK, id: A.P6Q.ON_CLICK, label: j.intl.string(j.t["KFH/me"]) },
            { value: A.P6Q.ALWAYS, id: A.P6Q.ALWAYS, label: j.intl.string(j.t.Pe1RbL) },
            { value: A.P6Q.IF_MODERATOR, id: A.P6Q.IF_MODERATOR, label: j.intl.string(j.t.K5VTBE) },
        ],
        useValue: v.gs.useSetting,
        setValue: v.gs.updateSetting,
    }),
    nl = (0, a.zD)(o.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => j.intl.string(j.t.AInv5m),
        useValue: v.SY.useSetting,
        setValue: v.SY.updateSetting,
    }),
    ns = (0, a.zZ)(o.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.OIgYlQ),
        useSearchTerms: () => [j.intl.string(j.t["/VQax8"])],
        buildLayout: () => [t4, t8, t7, ni, nl, nn, t3, tK],
    });
var nr = n(753806),
    na = n(145331);
let no = (0, a.Qx)(o.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => j.intl.string(j.t.VkoLsy),
        useSearchTerms: () => [j.intl.string(j.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.E9JM4J), value: 0 },
                { name: j.intl.string(j.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!v.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? nr.A.cleanUpPrivateChannelSearchState() : nr.A.cleanUpSearchState({ type: A.I4_.DMS }),
                (0, na._k)({
                    prevIsCrossDMSettingEnabled: v.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: na.vy.USER_SETTINGS,
                }),
                v.Hu.updateSetting(t);
        },
    }),
    nu = (0, a.zZ)(o.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5h0QOP"]),
        buildLayout: () => [no],
    });
var nd = n(574381);
let nc = (0, a.zD)(o.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.IxjaoF),
        useValue: function () {
            return (0, m.bG)([e8.A], () => {
                let { autoToggle: e } = e8.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e4.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return nd.Av;
        },
    }),
    ng = (0, a.zD)(o.X.STREAMING_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.TGNg6T),
        useSubtitle: () => j.intl.string(j.t["4nXLnE"]),
        useValue: function () {
            return (0, m.bG)([e8.A], () => {
                let { enabled: e } = e8.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e4.A.update({ enabled: e });
        },
    });
var nm = n(77729),
    nA = n(589051),
    nE = n(588857),
    nh = n(999834);
let nS = [],
    nT = (0, a.Hn)(o.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => j.intl.string(j.t.VCDSLW),
        useSearchTerms: () => [j.intl.string(j.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nh.b_)(),
                t = (0, nA.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return g.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(nE.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, m.bG)([e8.A], () => e8.A.getSettings().disabledOverlayWidgets ?? nS);
        },
        setValue: (e) => e4.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    np = (0, a.zD)(o.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { hidePersonalInformation: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e4.A.update({ hidePersonalInformation: e }),
    }),
    nx = (0, a.zD)(o.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { hideInstantInvites: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e4.A.update({ hideInstantInvites: e }),
    }),
    nf = (0, a.zD)(o.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { disableSounds: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e4.A.update({ disableSounds: e }),
    }),
    nI = (0, a.zD)(o.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { disableNotifications: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e4.A.update({ disableNotifications: e }),
    }),
    n_ = (0, a.zD)(o.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { enableContentProtection: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e4.A.update({ enableContentProtection: e }),
        usePredicate: () => nm.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    nN = (0, a.FW)(o.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.xYhOEh),
        buildLayout: () => [np, nx, nf, nI, n_, nT],
    }),
    nC = (0, a.zZ)(o.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.S5GfOW),
        buildLayout: () => [ng, nc, nN],
    });
var nb = n(147248),
    ny = n(141343),
    nv = n(665267),
    nj = n(414133),
    nO = n(56400);
let nL = (0, a.Hn)(o.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(nO.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: ek.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: ek.tI.PERSONAL },
        ],
        useValue: () => v.zY.useSetting(),
        setValue: v.zY.updateSetting,
        usePredicate: () => (0, nj.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nR = (0, a.zD)(o.X.SYNC_PROFILE_THEMES, {
        useTitle: () => j.intl.string(j.t.C00w4l),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, et.M1)(),
    });
var nD = n(284016),
    nP = n(363195);
let nG = (0, a.zD)(o.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => j.intl.string(j.t["/B+kEV"]),
    useSearchTerms: () => [j.intl.string(j.t.Ksh3ik)],
    useValue: function () {
        return (0, m.bG)([nD.A], () => !1 !== nD.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        return (0, m.bG)([nP.A], () => nP.A.isSameAsDeviceThemeEnabled());
    },
    setValue: function (e) {
        var t;
        let n = nP.A.theme,
            i = nb.A.gradientPreset?.id ?? null,
            l = v.eh.getSetting()?.customUserThemeSettings != null;
        (t = A.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            e2.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            ne.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var nM = n(393284);
let nU = (0, a.AK)(o.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: o.X.ACCESSIBILITY_PANEL,
    }),
    nV = (0, a.gN)(o.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nU] }),
    nk = (0, a.zZ)(o.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, m.bG)([f.Ay], () => f.Ay.useForcedColors)
                ? {
                      type: d.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: (0, eh.D)()
                          ? j.intl.format(j.t.Jae48E, {
                                onClick: () => {
                                    (0, nt.openUserSettings)(o.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : j.intl.string(j.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, m.bG)([nb.A, f.Ay], () => f.Ay.useForcedColors || nb.A.isPreview),
                t = (0, ny.V)();
            return e || t
                ? null
                : {
                      type: d.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: d.UV.BUTTON,
                              text: j.intl.string(j.t["E+COuA"]),
                              onClick: nv.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nM.k, nG, nR, nL, nV],
    }),
    nw = (0, a.t_)(o.X.APPEARANCE_PANEL, {
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
        buildLayout: () => [nk, tY, ns, tO, nu, nC, tn],
    }),
    nF = [
        { badgeType: d.Xi.NEW, dismissibleContent: er.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: er.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, c.jsx)(e9.JI, { text: j.intl.string(j.t.y2b7CA) });
            },
        },
    ],
    nB = (0, a.i4)(o.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        icon: e$.PaintPaletteIcon,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, e5.A)(),
                l =
                    ((e = v.D_.useSetting()),
                    (t = v.SI.useSetting()),
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
                                      v.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                s =
                    ((n = (0, m.bG)([e8.A], () => e8.A.enabled, [])),
                    (0, c.jsx)(e0.sL, {
                        id: "streamer-mode-toggle",
                        label: j.intl.string(j.t.p9ZAJZ),
                        action: () => {
                            e4.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return g.useMemo(() => {
                let e = [...i];
                return (
                    null != l &&
                        e.push((0, c.jsx)(e0.rX, { label: j.intl.string(j.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, c.jsx)(e0.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [i, l, s]);
        },
        getDismissibleBadges: () =>
            (0, e6.ad)().isFreemium
                ? nF.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== er.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : nF,
        buildLayout: () => [nw],
    });
var nz = n(37646),
    nX = n(434404);
let nY = (0, a.t_)(o.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [nX.F],
    }),
    nH = (0, a.i4)(o.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: nz.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [nY],
    });
var nK = n(3137),
    nW = n(661531),
    nZ = n(314116),
    nq = n(270003),
    nQ = n(369606),
    nJ = n(320448),
    n$ = n(604121),
    n0 = n(725951),
    n1 = n(400492),
    n2 = n(669067),
    n3 = n(115063),
    n6 = n(754692),
    n5 = n(927018),
    n4 = n(512599),
    n8 = n(532197),
    n7 = n(403362),
    n9 = n(874486),
    ie = n(503698),
    it = n.n(ie),
    ii = n(536637),
    il = n.n(ii),
    is = n(58703),
    ir = n(906688),
    ia = n(98705);
function io(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, n5.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        g = l ? "text-default" : "text-muted",
        m = il()(n),
        A = null != o && l,
        E = A ? t9.D : "div";
    return (0, c.jsxs)(E, {
        className: it()(ia.kL, A && ia.b),
        onClick: function () {
            A && o();
        },
        children: [
            (0, c.jsx)("div", {
                className: ia.zc,
                children: (0, c.jsx)(ir.A, { achievementId: t, size: ir.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, c.jsxs)("div", {
                className: ia.VW,
                children: [
                    null != n &&
                        (0, c.jsx)(z.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ia.YR,
                            children: (0, is.mk)(m),
                        }),
                    (0, c.jsx)(z.E, { variant: "text-md/medium", color: d, children: s() }),
                    (0, c.jsx)(z.E, { variant: "text-xs/normal", color: g, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var iu = n(545744);
function id(e) {
    let { onBackClick: t } = e,
        n = (0, m.bG)([n9.A], () => n9.A.getAllUnlockedAchievements()),
        i = g.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = g.useMemo(
            () =>
                Object.values(n5.l0)
                    .filter(n7.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)(t9.D, {
                onClick: t,
                className: iu.vv,
                children: [
                    (0, c.jsx)(n8.A, { direction: n8.A.Directions.LEFT, className: iu.Kk }),
                    (0, c.jsx)(z.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
            (0, c.jsxs)("div", {
                className: iu.N1,
                children: [
                    (0, c.jsxs)("div", {
                        className: iu.if,
                        children: [
                            (0, c.jsx)(h.D, {
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
                        className: iu.nr,
                        children: (0, c.jsx)(nQ.TrophyIcon, {
                            size: "custom",
                            color: nW.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, c.jsx)("div", {
                    className: iu.yF,
                    children: (0, c.jsx)("div", {
                        className: iu.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, c.jsx)(io, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, c.jsxs)("div", {
                    className: iu.yF,
                    children: [
                        (0, c.jsx)("div", {
                            className: iu.if,
                            children: (0, c.jsx)(z.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.GFyMg1),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: iu.Eh,
                            children: l.map((e) => (0, c.jsx)(io, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, c.jsx)("div", { className: iu.yF, children: (0, c.jsx)("div", { className: iu.F3 }) }),
        ],
    });
}
var ic = n(224964),
    ig = n(31408),
    im = n(368588);
let iA = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iE = (0, V.range)(0, 11),
    ih = (0, V.range)(0, 2.25, 0.25),
    iS = (0, V.range)(1, 11),
    iT = (0, V.range)(1, 26),
    ip = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function ix(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, c.jsx)(
                tZ.d,
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
    return (0, c.jsx)(nq.n, { label: j.intl.string(j.t.bWVN1D), children: s });
}
function iI(e) {
    let { children: t } = e;
    return (0, c.jsx)(z.E, { className: im.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function i_(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        l = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion);
    return (0, c.jsx)(tZ.d, {
        label: j.intl.string(j.t.vuiXm9),
        description: j.intl.string(j.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            e || (0, n6._)(n5.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, nZ.A)({
                          title: l ? j.intl.string(j.t["FxT+p0"]) : j.intl.string(j.t.TAZ4F9),
                          subtitle: l ? j.intl.string(j.t.gmixrx) : j.intl.string(j.t.jN3t3K),
                          confirmText: j.intl.string(j.t.JFfins),
                          onConfirm: () => i(l ? iA : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e });
        },
    });
}
function iN(e) {
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
    return (0, c.jsxs)(nq.n, {
        label: j.intl.string(j.t.mqxwJO),
        children: [
            (0, c.jsx)(tZ.d, {
                label: j.intl.string(j.t.s0KCgF),
                description: j.intl.string(j.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: im.KF,
                        children: j.intl.string(j.t.vd0D81),
                    }),
                    (0, c.jsx)(iI, { children: j.intl.string(j.t.a18Sug) }),
                    (0, c.jsx)(B.A, {
                        disabled: a,
                        markers: iS,
                        stickToMarkers: !0,
                        minValue: iS[0],
                        maxValue: iS[iS.length - 1],
                        initialValue: i,
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
                        className: im.KF,
                        children: j.intl.string(j.t.sPO3ij),
                    }),
                    (0, c.jsx)(iI, { children: j.intl.string(j.t.xoldVn) }),
                    (0, c.jsx)(B.A, {
                        disabled: a,
                        markers: iT,
                        stickToMarkers: !0,
                        minValue: iT[0],
                        maxValue: iT[iT.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, c.jsx)(ix, {
                disabled: a,
                locations: [
                    {
                        location: ig.k.CHAT_INPUT,
                        title: j.intl.string(j.t.elTtyz),
                        description: j.intl.string(j.t.HtKfMi),
                    },
                    {
                        location: ig.k.REACTION,
                        title: j.intl.string(j.t.Ik4VIa),
                        description: j.intl.string(j.t.y4rqK0),
                    },
                    {
                        location: ig.k.MEMBER_USER,
                        title: j.intl.string(j.t.ZXBlAn),
                        description: j.intl.string(j.t["m9RD+c"]),
                    },
                    {
                        location: ig.k.CALL_TILE,
                        title: j.intl.string(j.t.V66giQ),
                        description: j.intl.string(j.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function iC(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        r = !t || !n;
    return (0, c.jsxs)(nq.n, {
        label: j.intl.string(j.t.Xz0ole),
        children: [
            (0, c.jsx)(tZ.d, {
                label: j.intl.string(j.t.o3iV7B),
                description: j.intl.string(j.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, c.jsx)(tZ.d, {
                label: j.intl.string(j.t["Ax+IoW"]),
                description: j.intl.string(j.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: im.KF,
                        children: j.intl.string(j.t.L0oQuh),
                    }),
                    (0, c.jsx)(iI, { children: j.intl.string(j.t["/OOFpL"]) }),
                    (0, c.jsx)(B.A, {
                        disabled: r,
                        markers: iE,
                        stickToMarkers: !0,
                        minValue: iE[0],
                        maxValue: iE[iE.length - 1],
                        initialValue: l,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function ib(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        r = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, c.jsxs)(nq.n, {
        label: j.intl.string(j.t.wVS5Sd),
        children: [
            (0, c.jsx)(tZ.d, {
                label: j.intl.string(j.t.N004zO),
                description: r ? j.intl.string(j.t.GckHGw) : j.intl.string(j.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: im.KF,
                        children: j.intl.string(j.t.UxnnC4),
                    }),
                    (0, c.jsx)(iI, { children: j.intl.string(j.t.CEOEOb) }),
                    (0, c.jsx)(B.A, {
                        disabled: a,
                        markers: ih,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: ih[0],
                        maxValue: ih[ih.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, n6._)(n5.sn.MORE),
                                s(t, 1);
                        },
                        onMarkerRender: (e) => (e === ih[ih.length - 1] ? j.intl.string(j.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, c.jsx)(ix, {
                disabled: a,
                locations: [
                    {
                        location: ig.uD.CHAT_INPUT,
                        title: j.intl.string(j.t.vUcvPP),
                        description: j.intl.string(j.t.y00OrF),
                    },
                    {
                        location: ig.uD.VOICE_USER,
                        title: j.intl.string(j.t.TcRO54),
                        description: j.intl.string(j.t.YJCxVY),
                    },
                    {
                        location: ig.uD.MENTION,
                        title: j.intl.string(j.t.oW4shO),
                        description: j.intl.string(j.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function iy(e) {
    let { updateSettings: t } = e;
    return (0, c.jsx)(nq.n, {
        label: j.intl.string(j.t.EuXv2q),
        children: (0, c.jsxs)(F.B, {
            gap: 16,
            children: [
                (0, c.jsx)("div", { children: j.intl.string(j.t["1SLnki"]) }),
                (0, c.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: im.hw,
                    children: (0, c.jsx)(x.$, {
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
function iv(e) {
    let { onChangePage: t } = e;
    return (0, c.jsxs)(t9.D, {
        onClick: function () {
            return t(1);
        },
        className: im.Tq,
        children: [
            (0, c.jsx)("div", {
                className: im.w1,
                children: (0, c.jsx)(nQ.TrophyIcon, { size: "md", color: nW.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, c.jsxs)("div", {
                className: im.qL,
                children: [
                    (0, c.jsx)(h.D, {
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
            (0, c.jsx)(nJ._, { size: "custom", color: "currentColor", width: 16, className: im.nT }),
        ],
    });
}
function ij() {
    return n
        .e("504660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function iO(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, m.cf)([nK.A], () => nK.A.getState()),
        [l, s] = g.useState({ x: 0, y: 0 }),
        r = (0, ic.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, n1.Ak)("poggermode_enabled"),
                (0, n3.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, n4.O9)(e),
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
        1 === t && E && (0, n3.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        s({ x: e.clientX, y: e.clientY });
    }
    return (
        g.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, c.jsxs)(F.B, {
            gap: 24,
            children: [
                (0, c.jsx)(i_, { settings: i, updateSettings: a }),
                (0, c.jsx)(iv, { onChangePage: t }),
                (0, c.jsx)(iC, { settings: i, updateSettings: a }),
                (0, c.jsx)(ib, { settings: i, updateSettings: a }),
                (0, c.jsx)(iN, { settings: i, updateSettings: a }),
                (0, c.jsx)(iy, { updateSettings: a }),
            ],
        })
    );
}
function iL(e) {
    return 0 === e ? n0.f.LEFT : n0.f.RIGHT;
}
let iR = (0, a.E2)(o.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = g.useState(0),
                [n, i] = g.useState(iL(e)),
                [l, s] = g.useState(!1),
                r = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
                a = l && !r;
            return (
                g.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iL(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                g.useEffect(() => {
                    (0, n2._)(ip[e]);
                }, [e]),
                g.useEffect(() => {
                    Math.random() > 0.99 && (0, n6._)(n5.sn.VISITOR_100);
                }, []),
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)(n0.A, {
                            className: im.l3,
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
                                        return (0, c.jsx)(iO, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, c.jsx)(id, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, c.jsx)("div", {
                            className: a ? im.Sr : im.IP,
                            children: (0, c.jsx)(n$.a, {
                                className: im.gT,
                                importData: ij,
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
            j.intl.string(j.t.AtCukI),
            j.intl.string(j.t.mqxwJO),
            j.intl.string(j.t.wVS5Sd),
            j.intl.string(j.t.Xz0ole),
            j.intl.string(j.t["Ax+IoW"]),
            j.intl.string(j.t["6jI0hd"]),
            j.intl.string(j.t.s0KCgF),
        ],
    }),
    iD = (0, a.zZ)(o.X.POGGERMODE_CATEGORY, { buildLayout: () => [iR] });
var iP = n(212043);
let iG = (0, a.t_)(o.X.POGGERMODE_PANEL, { useTitle: () => j.intl.string(j.t.AtCukI), buildLayout: () => [iD] }),
    iM = (0, a.i4)(o.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AtCukI),
        icon: () => (0, c.jsx)("img", { alt: "", src: n(724405), className: iP.$ }),
        usePredicate: () => (0, m.bG)([nK.A], () => nK.A.settingsVisible),
        buildLayout: () => [iG],
    });
var iU = n(307301),
    iV = n(410767),
    ik = n(683071),
    iw = n(97260),
    iF = n(695366),
    iB = n(812729),
    iz = n.n(iB),
    iX = n(587895),
    iY = n(429913),
    iH = n(616356),
    iK = n(952818);
function iW(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function iZ() {
    let e = (0, m.bG)([iH.A], () => iH.A.getStreamerActiveStreamMetadata()),
        t = (0, m.bG)(
            [iK.Ay],
            () => {
                let e = iK.Ay.getVisibleGame();
                return null != e ? iK.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            iz(),
        ),
        [n] = (0, iY.A)([iW(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var iq = n(769015),
    iQ = n(453028),
    iJ = n(935671),
    i$ = n(435075);
function i0(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, c.jsx)("div", {
              className: i$.zc,
              children: (0, c.jsx)(iF.E, { size: "sm", color: nW.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, c.jsxs)("div", {
              className: i$.nt,
              children: [
                  (0, c.jsx)(iq.A, { game: n, pid: t.pid, size: iq.M.MEDIUM }),
                  (0, c.jsx)("div", {
                      className: i$.Am,
                      children: (0, c.jsx)(iF.E, { size: "sm", color: nW.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function i1(e) {
    let t = (0, m.bG)([iQ.Ay], () => iQ.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = iZ();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, iJ.NP)(),
        s = l && null != n && t === A.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function i2(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = i1(n);
    return i
        ? (0, c.jsxs)("div", {
              className: it()(i$.kL, t),
              children: [
                  (0, c.jsx)(i0, { game: l, application: s }),
                  (0, c.jsxs)("div", {
                      className: i$.FS,
                      children: [
                          (0, c.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? j.intl.string(j.t.vxfv7v)
                                      : null != l
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
                  (0, c.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: function () {
                          (0, iJ.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var i3 = n(404778),
    i6 = n(691885),
    i5 = n(408278),
    i4 = n(241326),
    i8 = n(866665),
    i7 = n(140735),
    i9 = n(489718),
    le = n(635242),
    lt = n(350535),
    ln = n(189213),
    li = n(192308),
    ll = n(95477),
    ls = n(320989),
    lr = n(978263);
let la = [];
var lo = n(235986),
    lu = n(820785),
    ld = n(734057),
    lc = n(808728),
    lg = n(71393),
    lm = n(967198),
    lA = n(926140),
    lE = n(847893);
function lh() {}
let lS = [lA.rD.VOICE_CHANNEL];
function lT(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function lp() {
    return (0, c.jsx)("div", {
        className: lE.i1,
        children: (0, c.jsx)(z.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lE.GN,
            children: j.intl.string(j.t.zHjCd1),
        }),
    });
}
function lx(e) {
    let { keybind: t, className: n } = e,
        i = g.useRef(t);
    g.useEffect(() => {
        i.current = t;
    });
    let [l, s] = g.useState(t.params?.channelId ?? void 0),
        r = g.useCallback(() => {
            (0, li.openModalLazy)(
                async () => (e) =>
                    (0, c.jsx)(lf, {
                        ...e,
                        onSelect: (e) => {
                            s(e), iw.A.setKeybind({ ...i.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, c.jsx)("div", {
        className: it()(lE.a8, n),
        children: (0, c.jsx)(tW.D, {
            label: j.intl.string(j.t.q4JpM8),
            children: (0, c.jsxs)(lo.A, {
                align: lo.A.Align.STRETCH,
                children: [
                    (0, c.jsx)("div", { className: lE.$X, children: (0, c.jsx)(lI, { channelId: l }) }),
                    (0, c.jsx)(lo.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, c.jsx)(x.$, { variant: "primary", text: j.intl.string(j.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lf(e) {
    let t,
        n,
        { transitionState: i, onClose: l, onSelect: s } = e,
        r = g.useId(),
        a = g.useRef(null),
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
                [s, r] = g.useState(""),
                [a, o] = g.useState(la),
                u = g.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(la) : o(e);
                }, []);
            g.useEffect(
                () =>
                    ls.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = g.useState(() => new lr.A(u, n, void 0, i));
            return (
                g.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: g.useCallback(
                        (e) => {
                            r(e), d.search(e);
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lS, autocompleterBeforeCreateSearchContext: lT }),
        A =
            ((t = "" !== o),
            (n = (0, m.yK)([lc.Ay, ld.A, lm.A], () => {
                let e = lm.A.getGuildId();
                if (t || null == e) return [];
                let n = [];
                for (let t of lc.Ay.getVocalChannelIds(e)) {
                    let e = ld.A.getChannel(t);
                    null != e && n.push(e);
                }
                return n;
            }, [t])),
            t ? null : n),
        { focusedIndex: E, setFocusedIndex: h } = (function (e) {
            let [t, n] = g.useState(0),
                i = g.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                g.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    g.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, E, !0) || e.scrollToIndex({ section: 0, row: E });
    }, [E]);
    let S = null != A ? A.length : d.length,
        T = (() => {
            if (null != A) return A[E]?.id;
            let e = d[E];
            if (e?.type === lA.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        p =
            S > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: j.intl.string(j.t["+N3fW7"]),
                      ref: a,
                      sections: [S],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != A) return A[t];
                                  let e = d[t];
                                  if (e?.type === lA.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? ld.A.getChannel(n.parent_id) : void 0,
                              r = lg.A.getGuild(n.guild_id);
                          return (0, c.jsx)(
                              lu.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: i,
                                  focused: E === t,
                                  onMouseEnter: () => h(t),
                                  onClick: () => {
                                      s(n.id), l();
                                  },
                                  onFocus: () => h(t),
                                  children:
                                      null != r ? (0, c.jsx)("div", { className: lE.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, c.jsx)(lp, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, c.jsx)(ln.Modal, {
        transitionState: i,
        onClose: l,
        title: j.intl.string(j.t.Dm8O4e),
        subtitle: j.intl.string(j.t.q4JpM8),
        actions: void 0,
        input: (0, c.jsx)(ll.k, {
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
                                if (null != A) return A[E];
                                let e = d[E];
                                if (e?.type === lA.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? s(void 0) : s(e.id), l();
                            break;
                        }
                        case "arrowup":
                            0 === E ? h(S - 1) : h(E - 1);
                            break;
                        case "arrowdown":
                            E >= S - 1 ? h(0) : h(E + 1);
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
        listProps: p,
    });
}
function lI(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, m.cf)([ld.A, lg.A], () => {
            let e = null != t ? ld.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? ld.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? lg.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, c.jsx)(z.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lE.GN,
              children: j.intl.string(j.t["/fYIK7"]),
          })
        : (0, c.jsx)(lu.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lh,
              onFocus: lh,
              onMouseEnter: lh,
              focused: !1,
              children: null != l ? (0, c.jsx)("div", { className: lE.J5, children: l.name }) : null,
          });
}
var l_ = n(650583),
    lN = n(94451);
function lC(e) {
    let { keybind: t } = e,
        n = lt.dI(t.shortcut);
    return eK.A.hasBind(n)
        ? (0, c.jsx)("div", {
              className: lN.$e,
              children: (0, c.jsx)(ik.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : l_.Yy.has(n)
          ? (0, c.jsx)("div", {
                className: lN.$e,
                children: (0, c.jsx)(ik.w, {
                    type: "warning",
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: eS.A.getArticleURL(A.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function lb(e) {
    let { keybind: t } = e;
    return t.action === A.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, c.jsx)(lx, { keybind: t, className: lN._M }) : null;
}
let ly = g.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        l = g.useCallback((e) => iw.A.setKeybind({ ...t, action: e }), [t]),
        s = g.useCallback((e) => iw.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = g.useCallback(() => iw.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = g.useCallback(() => iw.A.deleteKeybind(t.id), [t.id]),
        o = g.useId(),
        u = g.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, c.jsxs)("div", {
        className: lN.f_,
        children: [
            (0, c.jsx)(lC, { keybind: t }),
            (0, c.jsx)("div", {
                className: lN.XI,
                children: (0, c.jsx)(i6.l, {
                    selectionMode: "single",
                    label: j.intl.string(j.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, c.jsx)("div", {
                className: lN.LE,
                children: (0, c.jsx)(tW.D, {
                    label: j.intl.string(j.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, c.jsx)(le.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, c.jsxs)("div", {
                className: lN.ne,
                children: [
                    !t.managed &&
                        (0, c.jsx)(i5.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: i4.TrashIcon,
                            "aria-label": j.intl.string(j.t.qEHmmB),
                        }),
                    (0, c.jsx)(i8.m, {
                        text: j.intl.string(t.enabled ? j.t.pNYGbx : j.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, c.jsxs)("div", {
                            children: [
                                (0, c.jsx)(i7.A, {
                                    id: o,
                                    children: j.intl.format(t.enabled ? j.t["myr/Y0"] : j.t.lYhtPO, { actionName: u }),
                                }),
                                (0, c.jsx)(i9.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, c.jsx)(z.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: lN.h_,
                children: n[t.action],
            }),
            (0, c.jsx)(lb, { keybind: t }),
        ],
    });
});
var lv = n(367385),
    lj = n(734066),
    lO = n(880144),
    lL = n(614455),
    lR = n(532624),
    lD = n(731854),
    lP = n(603933);
let lG = function () {
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
            } = ((e = (0, m.bG)([lR.Ay], () => lR.Ay.getState())),
            (t = (0, m.bG)([iQ.Ay], () => (0, lO.A)(iQ.Ay))),
            (n = (0, m.bG)([iQ.Ay], () => iQ.Ay.supports(lD.O5.VIDEO))),
            (i = (0, m.bG)([lL.A], () => lL.A.isSupported)),
            (l = (0, lj.sw)()),
            (s = (0, lj.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: l } = e;
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
                        .reject((e) => !n && (e.action === A.hCu.SAVE_CLIP || e.action === A.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !i && e.action === A.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !l && (e.action === A.hCu.SOUNDBOARD || e.action === A.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: l,
                    enableScreenshotKeybind: s,
                    allowSoundboard: (r = (0, eW.isWindows)()),
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
                            {
                                id: "toggle-voice-channel-chat",
                                value: A.hCu.TOGGLE_VOICE_CHANNEL_CHAT,
                                label: j.intl.string(j.t.YeqEjm),
                            },
                        ];
                    return (
                        i &&
                            a.push({
                                id: "toggle-camera",
                                value: A.hCu.TOGGLE_CAMERA,
                                label: j.intl.string(j.t.hf8JVT),
                            }),
                        t &&
                            (a.push({
                                id: "toggle-overlay-input-lock",
                                value: A.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                                label: j.intl.string(j.t.VsAZcC),
                            }),
                            a.push({
                                id: "activate-overlay-region-text-widget",
                                value: A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                label: j.intl.string(j.t.hurHWo),
                            })),
                        n &&
                            ((0, eW.isWindows)() || iQ.Ay.getUseSystemScreensharePicker()) &&
                            a.push({
                                id: "toggle-go-live-streaming",
                                value: A.hCu.TOGGLE_GO_LIVE_STREAMING,
                                label: j.intl.string(j.t.ybdjJD),
                            }),
                        (0, eW.isDesktop)() &&
                            (a.push(
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
                            l &&
                                a.push(
                                    { id: "soundboard", value: A.hCu.SOUNDBOARD, label: j.intl.string(j.t.yPH4xm) },
                                    {
                                        id: "soundboard-hold",
                                        value: A.hCu.SOUNDBOARD_HOLD,
                                        label: j.intl.string(j.t["1xFbP/"]),
                                    },
                                ),
                            s &&
                                (a.push({ id: "save-clip", value: A.hCu.SAVE_CLIP, label: j.intl.string(j.t.U4URzP) }),
                                r &&
                                    a.push({
                                        id: "save-screenshot",
                                        value: A.hCu.SAVE_SCREENSHOT,
                                        label: j.intl.string(j.t["+WloFH"]),
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
                            [A.hCu.UNASSIGNED]: j.intl.string(j.t.rvlNLv),
                            [A.hCu.PUSH_TO_MUTE]: j.intl.string(j.t.xtESim),
                            [A.hCu.PUSH_TO_TALK]: j.intl.string(j.t.wTcBSy),
                            [A.hCu.PUSH_TO_TALK_PRIORITY]: j.intl.string(j.t.FhHvWH),
                            [A.hCu.TOGGLE_MUTE]: j.intl.string(j.t.X2fbUm),
                            [A.hCu.TOGGLE_DEAFEN]: j.intl.string(j.t.MjREZV),
                            [A.hCu.TOGGLE_VOICE_MODE]: j.intl.string(j.t.snm5YW),
                            [A.hCu.TOGGLE_STREAMER_MODE]: j.intl.string(j.t.YszLLx),
                            [A.hCu.VAD_PRIORITY]: j.intl.string(j.t.rSe8IZ),
                            [A.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: j.intl.string(j.t.desfB4),
                        };
                    return (
                        i && (r[A.hCu.TOGGLE_CAMERA] = j.intl.string(j.t.v1JBtL)),
                        t && (r[A.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
                        n && (0, eW.isWindows)() && (r[A.hCu.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
                        (0, eW.isDesktop)() &&
                            ((r[A.hCu.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                            (r[A.hCu.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                            (r[A.hCu.SOUNDBOARD] = (0, eW.isWindows)()
                                ? j.intl.string(j.t["5wJefL"])
                                : j.intl.string(j.t.gzjsSP)),
                            (r[A.hCu.SOUNDBOARD_HOLD] = (0, eW.isWindows)()
                                ? j.intl.string(j.t.RRkZc9)
                                : j.intl.string(j.t.laNlTl)),
                            l &&
                                ((r[A.hCu.SAVE_CLIP] = j.intl.string(j.t.z3Wbam)),
                                s && (r[A.hCu.SAVE_SCREENSHOT] = j.intl.string(j.t.m0zd57)))),
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
            ? (0, c.jsx)(z.E, { variant: "text-sm/normal", color: "text-subtle", children: j.intl.string(j.t.vyYgWp) })
            : (0, c.jsx)("div", {
                  className: lP.A,
                  children: a.map((e, t) =>
                      (0, c.jsxs)(
                          g.Fragment,
                          {
                              children: [
                                  (0, c.jsx)(ly, { keybind: e, keybindDescriptions: o, keybindActionTypes: u }),
                                  t < a.length - 1 ? (0, c.jsx)(i3.c, { className: lP.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    lM = (0, a.E2)(o.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return nd.Av
                ? (0, c.jsx)(lG, {})
                : (0, c.jsx)(ik.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: A.X7G.DOWNLOAD }),
                  });
        },
    });
var lU = n(475358),
    lV = n(28647),
    lk = n(793650);
function lw(e) {
    let { children: t } = e;
    return t([lv.Q_.MESSAGE, lv.Q_.NAVIGATION, lv.Q_.DND, lv.Q_.CHAT, lv.Q_.VOICE_AND_VIDEO, lv.Q_.MISCELLANEOUS]);
}
function lF(e) {
    let { showHeader: t = !0 } = e,
        n = k()((0, lv.Bx)())
            .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, c.jsxs)(F.B, {
        gap: 48,
        children: [
            (0, c.jsx)(nq.n, {
                label: t ? j.intl.string(j.t.Lz5KHI) : void 0,
                children: (0, c.jsx)("div", {
                    className: lk.jh,
                    children: (0, c.jsxs)("div", {
                        className: lk.yZ,
                        children: [
                            (0, c.jsx)(z.E, { variant: "text-md/normal", children: j.intl.string(j.t.sMWLBj) }),
                            (0, c.jsx)("div", {
                                className: lk.DM,
                                children: (0, c.jsx)(lU.e, { shortcut: lV.z.binds["0"], className: lk.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, c.jsx)(lw, {
                children: (e) =>
                    (0, c.jsx)(c.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, lv.Gm)(e),
                                l = (0, lv.zF)(e),
                                s = n[e];
                            return (0, c.jsx)(
                                nq.n,
                                {
                                    label: i,
                                    description: l,
                                    children: (0, c.jsx)("div", {
                                        className: lk.jh,
                                        children: s.map((e, t) =>
                                            (0, c.jsxs)(
                                                g.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, c.jsx)(i3.c, {}),
                                                        (0, c.jsxs)("div", {
                                                            className: lk.yZ,
                                                            children: [
                                                                (0, c.jsx)(z.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, c.jsx)("div", {
                                                                    className: lk.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, c.jsx)(
                                                                            lU.e,
                                                                            { shortcut: e, className: lk.LE },
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
let lB = (0, a.E2)(o.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.Lz5KHI)],
    Component: () => (0, c.jsx)(lF, { showHeader: !1 }),
});
var lz = n(19575),
    lX = n(546385);
let lY = (0, a.E2)(o.X.HARDWARE_ACCELERATION, {
    usePredicate: () => nd.Av && !(0, nd.cX)(),
    useSearchTerms: () => [j.intl.string(j.t["/HIxyY"]), j.intl.string(j.t.B0hqpb)],
    Component: function () {
        let [e] = g.useState(() => lz.Ay.getEnableHardwareAcceleration()),
            t = j.intl.string(j.t["/HIxyY"]),
            n = j.intl.string(j.t.B0hqpb);
        return (0, c.jsxs)(F.B, {
            children: [
                (0, c.jsx)(tZ.d, { label: t, description: n, checked: e, onChange: lH }),
                !e && (0, c.jsx)(lX.A, { look: lX.k.WARNING, children: j.intl.string(j.t.j7S6IX) }),
            ],
        });
    },
});
function lH(e) {
    let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
    (0, nZ.A)({
        title: j.intl.string(j.t.aqpAvn),
        subtitle: t,
        confirmText: j.intl.string(j.t.vT7ckk),
        onConfirm: () => {
            lz.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let lK = (0, eE.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function lW() {
    let e = await lz.Ay.getOpenOnStart(),
        t = await lz.Ay.getSetting("START_MINIMIZED", !1),
        n = await lz.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    lK.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let lZ = (0, a.zD)(o.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => j.intl.string(j.t["3BeZti"]),
        usePredicate: () => nd.Av && !(0, nd.cX)(),
        useValue: () => lK.useState((e) => e.openOnStartup),
        setValue: function (e) {
            lK.setState({ openOnStartup: e }), lz.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            lz.Ay.getOpenOnStart().then((e) => lK.setState({ openOnStartup: e }));
        },
    }),
    lq = (0, a.zD)(o.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => j.intl.string(j.t.dJ5MUh),
        useSubtitle: () => j.intl.string(j.t.nQavHr),
        usePredicate: () => nd.Av && !(0, nd.cX)(),
        useValue: () => lK.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            lK.setState({ minimizeToTray: e }), lz.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            lz.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => lK.setState({ minimizeToTray: e }));
        },
    }),
    lQ = (0, a.zD)(o.X.OS_START_MINIMIZED, {
        useTitle: () => j.intl.string(j.t.GfBL83),
        useSubtitle: () => j.intl.string(j.t.XGyhhc),
        usePredicate: () => (0, nd.uF)(),
        useValue: () => lK.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            lK.setState({ startMinimized: e }), lz.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !lK.useState((e) => e.openOnStartup),
        initialize: () => {
            lz.Ay.getSetting("START_MINIMIZED", !1).then((e) => lK.setState({ startMinimized: e }));
        },
    });
var lJ = n(61628);
let l$ = new Set(["failure", "unknown"]),
    l0 = (0, a.E2)(o.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [j.intl.string(j.t.roHq80)],
        Component: function () {
            let [e, t] = g.useState(!1),
                [n, i] = g.useState(() => (0, iJ.TC)()),
                l = (0, m.bG)([iK.Ay], () => iK.Ay.getSystemServiceStatus("input-service")),
                s = g.useCallback(async () => {
                    t(!0),
                        n ? await (0, iJ.z8)("windows-settings") : await (0, iJ.sL)("windows-settings"),
                        t(!1),
                        i((0, iJ.TC)());
                }, [n]);
            return (0, c.jsxs)("div", {
                className: lJ.q,
                children: [
                    (0, c.jsxs)("div", {
                        className: lJ.L,
                        children: [
                            (0, c.jsxs)(F.B, {
                                direction: "horizontal",
                                children: [
                                    (0, c.jsx)(z.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: j.intl.string(j.t.roHq80),
                                    }),
                                    n &&
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
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : l$.has(l.state)
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
                                                                (0, n7.xb)(e.state);
                                                        }
                                                    })(l),
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
                    (0, c.jsx)(x.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: s,
                        text: n ? j.intl.string(j.t.pAwbdL) : j.intl.string(j.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: iJ.XQ,
    });
var l1 = n(687813),
    l2 = n(562708),
    l3 = n(691540),
    l6 = n(97483);
async function l5() {
    try {
        await l4();
    } catch {
        (0, l3.P0)({ id: "performance-trace-failed", type: l6.Ck.FAILURE, message: j.intl.string(j.t["8ihs9i"]) });
    }
}
async function l4() {
    var e;
    let t = nm.A.tracing;
    if (null == t) return;
    (0, l3.P0)({ id: "performance-trace-capturing", type: l6.Ck.MESSAGE, message: j.intl.string(j.t.qGRW8d) });
    let [n, i, l] = await Promise.all([
            t.capturePerformanceTrace({ durationMs: 3e4 }),
            nm.A.processUtils.getSystemInfo(),
            nm.A.processUtils.getSystemMetrics(),
        ]),
        s = {
            captured_at: n.startedAtISO,
            duration_ms: n.durationMs,
            categories: n.categories,
            ...(0, l2.getSuperProperties)(),
            native_build_number: nm.A.app.getBuildNumber(),
        },
        r = {
            systemInfo: i,
            systemMetrics: l,
            cumulativeCpuUsage: nm.A.processUtils.getCumulativeCPUUsage() ?? null,
            processTypeCpuUsage: nm.A.processUtils.getCpuUsageElectronProcessTypeDetails() ?? null,
        },
        a = await ((e = {
            "trace.json": n.traceBytes,
            "system_info.json": (0, l1._u)(JSON.stringify(r, null, 2)),
            "metadata.json": (0, l1._u)(JSON.stringify(s, null, 2)),
        }),
        new Promise((t, n) => {
            (0, l1.yU)(e, { level: 6 }, (e, i) => (null != e ? n(e) : t(i)));
        })),
        o = `Discord-Trace-${n.startedAtISO.replace(/:/g, "-").replace(/\..*$/, "")}.zip`,
        { filePath: u } = await t.saveTraceToDownloads(a, o);
    nm.A.fileManager.showItemInFolder(u),
        (0, l3.P0)({ id: "performance-trace-saved", type: l6.Ck.SUCCESS, message: j.intl.string(j.t.gpCRFS) });
}
let l8 = (0, a.Tf)(o.X.CAPTURE_PERFORMANCE_TRACE, {
    useTitle: () => j.intl.string(j.t.o6Qr6n),
    useSubtitle: () => j.intl.string(j.t.OuGtH8),
    useLabel: () => j.intl.string(j.t.bm1WjO),
    usePredicate: () => nd.Av && nm.A?.tracing?.capturePerformanceTrace != null,
    onClick: () => {
        (0, nZ.A)({
            title: j.intl.string(j.t.o6Qr6n),
            subtitle: j.intl.string(j.t.JEHHJ1),
            confirmText: j.intl.string(j.t.bm1WjO),
            onConfirm: () => {
                (0, tP.default)(), l5();
            },
        });
    },
});
function l7() {
    e2.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var l9 = n(287809);
let se = (0, a.Tf)(o.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        l7();
    },
});
var st = n(114129),
    sn = n(442325),
    si = n(858760);
let sl = (0, a.zD)(o.X.ENABLE_TABS_EXPERIENCE, {
        useTitle: () => "Enable tabs experience",
        useSubtitle: () =>
            "Open channels as browser-style tabs in the title bar, each with its own back/forward history.",
        usePersistentBadge: () => ({ badgeType: d.Xi.BETA }),
        usePredicate: () => si.A.useConfig({ location: "EnableTabsExperienceSetting" }).enabled && (0, nd.xl)(),
        useValue: () => (0, m.bG)([sn.A], () => sn.A.isUserOptedIn()),
        setValue: st.lj,
    }),
    ss = (0, a.zZ)(o.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [se, l8, sl],
    }),
    sr = (0, a.zZ)(o.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [lZ, lQ, lq, lY],
        usePredicate: () => nd.Av && ((0, nd.uF)() || (0, nd.j9)()),
        initialize: () => {
            lW();
        },
    }),
    sa = (0, a.zZ)(o.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [lM],
        initialize: () => (iw.A.enableAll(!1), () => iw.A.enableAll(!0)),
        useInlineNotice: function () {
            return nd.Av
                ? {
                      type: d.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, c.jsxs)(F.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, c.jsx)(ik.w, { type: "info", children: j.intl.string(j.t["5pkmHa"]) }),
                                  (0, c.jsx)(i2, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            nd.Av
                ? {
                      type: d.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: d.UV.BUTTON,
                              text: j.intl.string(j.t.zk6Xbs),
                              variant: "secondary",
                              icon: iU.j,
                              onClick: () => iw.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    so = (0, a.zZ)(o.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Lz5KHI),
        buildLayout: () => [lB],
    }),
    su = (0, a.zZ)(o.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => nd.Av && ((0, nd.uF)() || (0, nd.j9)()),
        buildLayout: () => [l0],
    }),
    sd = (0, a.t_)(o.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [sr, sa, so, su, ss],
    }),
    sc = (0, a.i4)(o.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: iV.F,
        buildLayout: () => [sd],
    });
var sg = n(831544),
    sm = n(922795),
    sA = n(212245),
    sE = n(329551),
    sh = n(285918),
    sS = n(712711),
    sT = n(952572),
    sp = n(382003);
let sx = (0, a.E2)(o.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.lZTUPs)],
        usePredicate: sT.A,
        Component: function () {
            let e = (0, sA.p)(),
                t = g.useRef(!1),
                n = (0, m.bG)([iQ.Ay], () => iQ.Ay.getVideoDeviceId()),
                [i, l] = g.useState((0, sE.i)(l9.default.getCurrentUser())),
                s = g.useRef(i);
            return (
                g.useEffect(
                    () => () => {
                        t.current && (0, sh._C)(s.current);
                    },
                    [],
                ),
                (0, c.jsx)(sp.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        (t.current = !0), (s.current = n), l(n), (0, sS.gB)(n, { location: e.location }).catch(A.tEg);
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    sf = (0, a.zD)(o.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: v.bm.useSetting,
        setValue: (e) => {
            v.bm.updateSetting(e), e7.default.track(A.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var sI = n(625841),
    s_ = n(74848),
    sN = n(204050);
let sC = (0, eE.D)(() => ({ previewEnabled: !1 })),
    sb = (0, a.E2)(o.X.CAMERA_SELECTION_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.FsQ3OR)],
        Component: function () {
            let e = (0, m.bG)([iQ.Ay], () => iQ.Ay.isVideoAvailable()),
                { id: t } = (0, s_.x5)(lD.oh.VIDEO_INPUT),
                { analyticsLocations: n } = (0, eL.Ay)();
            return (0, c.jsx)(sI.U, {
                label: j.intl.string(j.t.FsQ3OR),
                deviceType: lD.oh.VIDEO_INPUT,
                location: "UserSettingsCameraSelect",
                isDisabled: !e,
                helperText: (0, sN.p)()
                    ? j.intl.format(j.t.aJYgRt, {
                          onCameraSettingsClick: () => {
                              sC.setState({ previewEnabled: !1 }),
                                  window.open((0, sN.i)(t)),
                                  e7.default.track(A.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n });
                          },
                      })
                    : void 0,
            });
        },
    });
var sy = n(745317),
    sv = n(9219);
let sj = (0, a.E2)(o.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [j.intl.string(j.t.JIf4v7)],
        Component: function () {
            let e = iQ.Ay.getCameraComponent(),
                t = (0, m.bG)([iQ.Ay], () => iQ.Ay.getVideoDeviceId()),
                n = sC.useField("previewEnabled"),
                i = (0, m.bG)([iQ.Ay], () => iQ.Ay.isVideoAvailable());
            return ((0, eA.l0)(() => {
                sC.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, c.jsx)("div", {
                      className: sv.T9,
                      children: (0, c.jsxs)("div", {
                          className: sv.Xi,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: sv.UI,
                                  children: [
                                      (0, c.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, c.jsx)(sy.kE, {}),
                                  ],
                              }),
                              (0, c.jsx)(sy.eK, {}),
                          ],
                      }),
                  })
                : (0, c.jsx)("div", {
                      className: sv.T9,
                      children: (0, c.jsx)(i8.m, {
                          text: i ? null : j.intl.string(j.t["8jSzSe"]),
                          children: (0, c.jsx)(x.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.JIf4v7),
                              onClick: () => sC.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    sO = (0, a.zZ)(o.X.CAMERA_CATEGORY, {
        useTitle: () => j.intl.string(j.t.uje3P9),
        usePredicate: () => (0, m.bG)([iQ.Ay], () => iQ.Ay.supports(lD.O5.VIDEO)),
        buildLayout: () => [sj, sf, sb, sx],
    });
var sL = n(827343);
let sR = (0, a.zD)(o.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => j.intl.string(j.t.qFphsa),
        useSubtitle: () => j.intl.string(j.t.cQfwyY),
        usePredicate: function () {
            return (0, nd.j9)();
        },
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            sL.A.setOpenH264Enabled(e),
                (0, nZ.A)({
                    title: j.intl.string(j.t["9jf31O"]),
                    subtitle: j.intl.string(j.t["J2wg+X"]),
                    confirmText: j.intl.string(j.t.BddRzS),
                    onConfirm: () => nm.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    sD = (0, a.zD)(o.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => j.intl.string(j.t["r6K+TL"]),
        useSubtitle: () => j.intl.string(j.t["xl9+I6"]),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getAecDump());
        },
        setValue: sL.A.setAecDump,
        usePredicate: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.isAecDumpSupported());
        },
    });
var sP = n(139033),
    sG = n(862482),
    sM = n(640238),
    sU = n(825484),
    sV = n(135286),
    sk = n(487329),
    sw = n(353835);
let sF = (0, eE.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function sB() {
    let e = await nm.A.fileManager.getLogPath();
    nm.A.fileManager.showItemInFolder(e);
}
function sz(e) {
    (0, nZ.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => sL.A.setDebugLogging(e),
    });
}
async function sX(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        await iQ.Ay.getMediaEngine().writeAudioDebugState(),
            await sw.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, sV.a)(A.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, sP.A)({ title: e, subtitle: t });
    } catch (s) {
        var i;
        let e, t, n, l;
        (i = s.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = i ?? j.intl.string(j.t.VzHcSm)),
            (n = (0, sk.B1)(sk.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: n })),
            (0, li.openModal)((n) =>
                (0, c.jsx)(sM.a, {
                    header: e,
                    confirmButtonColor: sG.$n.Colors.BRAND,
                    confirmText: j.intl.string(j.t.BddRzS),
                    ...n,
                    children: (0, c.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, c.jsx)(z.E, { variant: "text-md/normal", children: t }),
                            (0, c.jsx)(z.E, {
                                variant: "text-sm/semibold",
                                selectable: !0,
                                style: { marginTop: "auto" },
                                children: l,
                            }),
                        ],
                    }),
                }),
            );
    } finally {
        n?.();
    }
}
async function sY() {
    await sX({
        onUploadStart: () => sF.setState({ isUploading: !0 }),
        onUploadFinish: () => sF.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let sH = (0, a.E2)(o.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, m.bG)([iQ.Ay], () => iQ.Ay.supports(lD.O5.DEBUG_LOGGING));
        return nd.Av && e && null != nm.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, m.bG)([iQ.Ay], () => iQ.Ay.getDebugLogging()),
            t = sF.useField("isUploading"),
            n = sF.useField("isDisabled"),
            i = g.useId();
        return (0, c.jsxs)("fieldset", {
            children: [
                (0, c.jsx)(i7.A, { tag: "legend", id: i, children: j.intl.string(j.t["FjN+et"]) }),
                (0, c.jsxs)(F.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, c.jsx)(tZ.d, {
                            label: j.intl.string(j.t["726JHL"]),
                            description: j.intl.string(j.t["/7ak9Q"]),
                            checked: e,
                            onChange: sz,
                        }),
                        (0, c.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, c.jsxs)(sU.e, {
                                children: [
                                    (0, c.jsx)(x.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: sY,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, c.jsx)(x.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: sB,
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
var sK = n(233545),
    sW = n(412780);
function sZ() {
    return (0, m.bG)([l9.default, iQ.Ay], () => {
        let e = l9.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === lz.Ay.releaseChannel || "development" === lz.Ay.releaseChannel,
            i = iQ.Ay.supports(lD.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let sq = (0, a.zD)(o.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.U4FgFK),
        useSubtitle: () => j.intl.string(j.t.Lm72RU),
        useValue: function () {
            return (0, m.bG)([sW.Ay], () => sW.Ay.shouldRecordNextConnection());
        },
        setValue: sK.Et,
        usePredicate: sZ,
    }),
    sQ = (0, a.Tf)(o.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.nJnOHO),
        useLabel: () => j.intl.string(j.t["3xjX0U"]),
        onClick: sK.YW,
        usePredicate: sZ,
    });
var sJ = n(926919),
    s$ = n(111162),
    s0 = n(855302);
let s1 = (0, a.zD)(o.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => j.intl.string(j.t["0CEP6e"]),
        useSubtitle: () => j.intl.string(j.t["kBXuW+"]),
        useValue: function () {
            return (0, m.bG)([s$.default], () => s$.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = s$.default.isStreamInfoOverlayEnabled;
            (0, s0.A)("stream_info_overlay_enabled", e, t), (0, sJ.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return v.Q_.useSetting();
        },
    }),
    s2 = (0, a.bd)(o.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t["/B4I8H"]) : j.intl.string(j.t.BTlsWH)),
        useCollapsedSubtitle: () => j.intl.string(j.t.la1Ys4),
        buildLayout: () => [s1, sD, sq, sQ, sH],
    });
function s3(e, t, n) {
    (0, nZ.A)({ title: e, subtitle: t, confirmText: j.intl.string(j.t.BddRzS), onConfirm: n });
}
let s6 = (0, a.Tf)(o.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => j.intl.string(j.t.SXfv1v),
        useSubtitle: () => j.intl.string(j.t["buA5/q"]),
        useLabel: () => j.intl.string(j.t.yBZMsQ),
        onClick: function () {
            s3(j.intl.string(j.t["4iKQ/3"]), j.intl.string(j.t.sQ42iT), sL.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    s5 = (0, a.zZ)(o.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.UDAU9K),
        buildLayout: () => [sR, s2, s6],
    });
var s4 = n(736056),
    s8 = n(360729),
    s7 = n(446243),
    s9 = n(558076),
    re = n(1195);
let rt = (0, a.zD)(o.X.GUILD_ROOMS_REMEMBER_LAST_VIEW_SETTING, {
        useTitle: () => j.intl.string(re.default.qYzpsI),
        useSubtitle: () => j.intl.string(re.default["+vMoL1"]),
        useValue: () => (0, m.bG)([s9.A], () => s9.A.getRememberVideoOverlayVisibility()),
        setValue: (e) => (0, s7.Ft)(e),
    }),
    rn = (0, a.zZ)(o.X.GUILD_ROOMS_CATEGORY, {
        useTitle: () => j.intl.string(re.default.wRLmM0),
        usePredicate: function () {
            let e = (0, m.yK)([lg.A], () => lg.A.getGuildIds()),
                { loaded: t, override: n } = (0, m.cf)([s4.A], () => ({
                    loaded: s4.A.getLoadedGuildExperiment(s8.vJ),
                    override: s4.A.getExperimentOverrideDescriptor(s8.vJ),
                }));
            return (0, g.useMemo)(
                () =>
                    (null != t || null != n) &&
                    e.some(
                        (e) =>
                            (0, s8.W8)(
                                { guildId: e, location: "useHasGuildRoomsEligibleGuild" },
                                { autoTrackExposure: !1 },
                            ).enabled,
                    ),
                [e, t, n],
            );
        },
        buildLayout: () => [rt],
    });
var ri = n(347481),
    rl = n(852712);
let rs = (0, a.zD)(o.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            sL.A.setAutomaticGainControl(e, { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, m.bG)([iQ.Ay, ri.A], () => {
                let e = iQ.Ay.getInputDeviceId();
                return ri.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.isAutomaticGainControlSupported() && iQ.Ay.isInputProfileCustom());
        },
    }),
    rr = (0, a.sN)(o.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => j.intl.string(j.t.AlybXj),
        setValue: (e) =>
            sL.A.setAttenuation(e, iQ.Ay.getAttenuateWhileSpeakingSelf(), iQ.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => iQ.Ay.getAttenuation(),
    }),
    ra = (0, a.zD)(o.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, m.bG)([iQ.Ay], () => iQ.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => sL.A.setAttenuation(iQ.Ay.getAttenuation(), e, iQ.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    ro = (0, a.zD)(o.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, m.bG)([iQ.Ay], () => iQ.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sL.A.setAttenuation(iQ.Ay.getAttenuation(), iQ.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    ru = (0, a.FW)(o.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, m.bG)([iQ.Ay], () => iQ.Ay.supports(lD.O5.ATTENUATION)),
        buildLayout: () => [rr, ra, ro],
    });
var rd = n(801644);
let rc = (0, a.zD)(o.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.pZ0vr4),
        useSubtitle: () => j.intl.string(j.t.tVbzoZ),
        useValue: function () {
            return (0, m.bG)([eu.Ay], () => !eu.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, s0.A)("hardware_mute_silence_alert_enabled", e, !eu.Ay.disableHardwareMuteSilenceAlert),
                ne.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = rd.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    rg = (0, a.zD)(o.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.DFPXIG),
        useSubtitle: () => j.intl.string(j.t["UyRX+C"]),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            sL.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.showBypassSystemInputProcessing() && iQ.Ay.isInputProfileCustom());
        },
    }),
    rm = (0, a.zD)(o.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.jrWHD3),
        useSubtitle: () => j.intl.string(j.t.YCCMkJ),
        useValue: function () {
            return (0, m.bG)([eu.Ay], () => !eu.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, s0.A)("switch_channel_warning_enabled", e, !eu.Ay.disableVoiceChannelChangeAlert),
                ne.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    rA = (0, a.zD)(o.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.BbESsg),
        useSubtitle: () => j.intl.string(j.t.LoOB1F),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => {
                let { vadUseKrisp: e } = iQ.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = iQ.Ay.getMode();
            sL.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, m.bG)(
                [iQ.Ay],
                () => iQ.Ay.getMode() !== A.TBI.VOICE_ACTIVITY || !iQ.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.isAdvancedVoiceActivitySupported() && iQ.Ay.isInputProfileCustom());
        },
    }),
    rE = (0, a.Hn)(o.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => j.intl.string(j.t.wVBHr0),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            s3(j.intl.string(j.t.uY7AcQ), j.intl.string(j.t.gBqik6), () => sL.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, m.cf)([iQ.Ay], () => ({
                legacyAudioSubsystemSupported: iQ.Ay.supports(lD.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: iQ.Ay.supports(lD.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: iQ.Ay.supports(lD.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return g.useMemo(() => {
                let i;
                return (
                    (i = [{ id: lD.rB.STANDARD, value: lD.rB.STANDARD, label: j.intl.string(j.t.dqb2JZ) }]),
                    e && i.push({ id: lD.rB.LEGACY, value: lD.rB.LEGACY, label: j.intl.string(j.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: lD.rB.EXPERIMENTAL, value: lD.rB.EXPERIMENTAL, label: j.intl.string(j.t.liQmtr) }),
                    n && i.push({ id: lD.rB.AUTOMATIC, value: lD.rB.AUTOMATIC, label: j.intl.string(j.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    rh = (0, a.zD)(o.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => j.intl.string(j.t.uancuJ),
        useSubtitle: () => j.intl.string(j.t.I1Eoqq),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getQoS());
        },
        setValue: function (e) {
            sL.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.supports(lD.O5.QOS));
        },
    }),
    rS = (0, a.zD)(o.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => j.intl.string(j.t["4rsOPQ"]),
        useSubtitle: () => j.intl.string(j.t.jtiiCw),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            sL.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eW.isPlatformEmbedded;
        },
    }),
    rT = (0, a.bd)(o.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.KHsSWK) : j.intl.string(j.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tc(o.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, m.bG)([iQ.Ay], () => iQ.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rs, rA, rg, rS, rc, rm, ru, rE, rh],
    }),
    rp = (0, a.zD)(o.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            sL.A.setEchoCancellation(e, { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, m.bG)([iQ.Ay, ri.A], () => {
                let e = iQ.Ay.getInputDeviceId();
                return ri.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.isInputProfileCustom());
        },
    });
var rx = n(459838),
    rf = n(451988),
    rI = n(475883),
    r_ = n(192204);
let rN = (0, tU.Ld)();
function rC(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, c.jsx)("div", {
        role: "meter",
        className: it()(rI.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, c.jsx)("div", { className: it()(rI.Jx, rI.NU, { [rI.zY]: t && !r, [rI.r9]: r }) }),
    });
}
function rb(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, m.cf)([iQ.Ay], () => ({
            threshold: iQ.Ay.getModeOptions().threshold,
            autoThreshold: iQ.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, m.bG)([iQ.Ay], () => iQ.Ay.getMode());
    return (0, c.jsx)("section", {
        className: it()(rI.Mo, rI.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, c.jsx)(B.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void sL.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: nW.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: nW.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rN,
            disabled: s,
            children: (0, c.jsxs)("div", {
                className: it()(rI.NU, rI.TL, rI.Jx, r_.bar),
                children: [
                    (0, c.jsx)("div", { className: it()(rI.GS, rI.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, c.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let ry = (0, a.E2)(o.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [j.intl.string(j.t["sqUm+k"]), j.intl.string(j.t.I1Zuq0), j.intl.string(j.t.nuFtHH)],
    usePredicate: () => (0, m.bG)([iQ.Ay], () => iQ.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, m.cf)([iQ.Ay], () => ({
                autoThreshold: iQ.Ay.getModeOptions().autoThreshold,
                disabled: iQ.Ay.getMode() !== lD.TB.VOICE_ACTIVITY,
            })),
            n = g.useCallback((e) => {
                let t = iQ.Ay.getMode(),
                    { threshold: n } = iQ.Ay.getModeOptions();
                sL.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, m.bG)([iQ.Ay], () => iQ.Ay.supports(lD.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = g.useState(-100),
                    [n, i] = g.useState(!1);
                function l(e, n) {
                    t(e), i((n & lD.ME.VOICE) === lD.ME.VOICE);
                }
                return (
                    g.useEffect(() => {
                        let e = new rf.Ep();
                        return (
                            e.start(1e3, () => {
                                iQ.Ay.getMediaEngine().on(rx.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                iQ.Ay.getMediaEngine().removeListener(rx.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, m.bG)([iQ.Ay], () => iQ.Ay.isEnabled()),
            a = g.useMemo(
                () =>
                    !r &&
                    (0, c.jsx)("div", {
                        className: rI.B4,
                        children: (0, c.jsx)(ik.w, {
                            type: "warning",
                            children: j.intl.format(j.t["O13I+O"], { onEnableClick: () => sL.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = g.useMemo(() => (e ? j.intl.string(j.t.JsbzjA) : j.intl.string(j.t.MLmyMY)), [e]),
            u = g.useId(),
            d = g.useId();
        return i
            ? (0, c.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, c.jsx)(i7.A, { tag: "legend", id: u, children: j.intl.string(j.t.GByLar) }),
                      (0, c.jsx)(i7.A, { id: d, children: o }),
                      (0, c.jsxs)(F.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, c.jsx)(tZ.d, {
                                  disabled: t,
                                  label: j.intl.string(j.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, c.jsx)(rC, {
                                        isSpeaking: s,
                                        className: rI.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, c.jsx)(rb, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, c.jsxs)(F.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, c.jsx)(tW.D, {
                          label: j.intl.string(j.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, c.jsx)(rC, {
                                        isSpeaking: s,
                                        className: rI.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, c.jsx)(rb, {
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
var rv = n(366010);
let rj = n(993830),
    rO = n(413142),
    rL = { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO };
function rR() {
    let e = (0, m.bG)([nP.A], () => (0, rv.q)(nP.A.theme));
    return (0, c.jsx)("img", { src: e ? rj : rO, width: 48, height: 32, alt: "" });
}
let rD = (0, a.E2)(o.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.t8Qhib), j.intl.string(j.t.hmfkCi)],
    usePredicate: function () {
        return (0, m.bG)([iQ.Ay], () => iQ.Ay.isInputProfileCustom() && iQ.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = g.useCallback((e) => {
                sL.A.setNoiseCancellation("KRISP" === e, rL), sL.A.setNoiseSuppression("STANDARD" === e, rL);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, m.cf)([iQ.Ay], () => ({
                noiseCancellation: iQ.Ay.getNoiseCancellation(),
                noiseSuppression: iQ.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: iQ.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: iQ.Ay.isNoiseCancellationSupported(),
            })),
            s = g.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: j.intl.string(j.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: j.intl.string(j.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: j.intl.string(j.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, i]),
            r = l
                ? j.intl.format(j.t["1q5aTp"], { helpArticle: eS.A.getArticleURL(A.MVz.NOISE_SUPPRESSION) })
                : j.intl.string(j.t.OWKjw5);
        return (0, c.jsxs)(F.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, c.jsx)(i6.l, {
                    label: j.intl.string(j.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, c.jsx)(rR, {}),
            ],
        });
    },
});
var rP = n(934729),
    rG = n(621380);
let rM = !nd.Av;
function rU() {
    return (0, m.bG)([iQ.Ay], () => iQ.Ay.getMode() === lD.TB.PUSH_TO_TALK);
}
let rV = (0, a.zD)(o.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return nd.Av ? j.intl.string(j.t.tG4Np5) : j.intl.string(j.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, m.bG)([iQ.Ay], () => iQ.Ay.getMode());
        return g.useMemo(() => {
            if (!nd.Av && e === lD.TB.PUSH_TO_TALK)
                return j.intl.format(j.t["VHI4+Y"], { onDownloadClick: () => (0, rP._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, m.bG)([iQ.Ay], () => iQ.Ay.getActiveInputProfile() !== rG.m.STUDIO);
    },
    useValue: function () {
        return (0, m.bG)([iQ.Ay], () => iQ.Ay.getMode() === lD.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        (t = e ? lD.TB.PUSH_TO_TALK : lD.TB.VOICE_ACTIVITY),
            (i = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === lD.TB.PUSH_TO_TALK &&
                rM &&
                (0, li.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("844331"), n.e("410919")]).then(n.bind(n, 556506));
                    return (t) =>
                        (0, c.jsx)(e, {
                            title: j.intl.string(j.t.Kdt0Gb),
                            confirmText: j.intl.string(j.t["1WjMbC"]),
                            cancelText: j.intl.string(j.t.BddRzS),
                            onConfirm: () => (0, rP._)("PTT Limited Modal"),
                            body: j.intl.string(j.t.NIozvt),
                            ...t,
                        });
                }),
            sL.A.setMode(t, void 0, void 0, { analyticsLocations: i });
    },
    useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
});
var rk = n(484599);
let rw = (0, a.E2)(o.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        usePredicate: rU,
        Component: function () {
            let e = (0, m.bG)([iQ.Ay], () => {
                    let { shortcut: e } = iQ.Ay.getModeOptions();
                    return e;
                }),
                t = j.intl.format(j.t.HVvn5T, {
                    onClick: () => (0, nt.openUserSettings)(o.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, c.jsx)(tW.D, {
                label: j.intl.string(j.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, c.jsx)("div", {
                    className: rk.e,
                    children: (0, c.jsx)(le.A, {
                        defaultValue: e,
                        onChange: (e) => sL.A.setMode(A.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    rF = (0, a.sN)(o.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            sL.A.setMode(A.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: A.IjB,
        getInitialValue: function () {
            let { delay: e } = iQ.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: rU,
    });
var rB = n(957658),
    rz = n(463123);
let rX = (0, a.zD)(o.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => j.intl.string(rz.default.LGDPhA),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            sL.A.setSpatialAudio(e, [tv.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return (0, rB.A)("VoiceSettings");
        },
    }),
    rY = (0, a.Qx)(o.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => j.intl.string(j.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rl._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH), j.intl.string(j.t.VZPR0R), j.intl.string(j.t.cjPbpT)],
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getActiveInputProfile() ?? rG.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sL.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rl.d)({ location: "InputProfileCategory" });
            return [
                { value: rG.m.VOICE_ISOLATION, name: j.intl.string(j.t.cjPbpT), desc: j.intl.string(j.t.CzhvnE) },
                { value: rG.m.STUDIO, name: j.intl.string(j.t.VZPR0R), desc: j.intl.string(j.t.ZaJksS) },
                { value: rG.m.CUSTOM, name: j.intl.string(j.t["N/PQjv"]), desc: j.intl.string(j.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    rH = (0, a.zZ)(o.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, m.bG)([ri.A, iQ.Ay], () => {
                let e = iQ.Ay.getInputDeviceId();
                return (
                    (ri.A.hasEchoCancellation(e) || ri.A.hasNoiseSuppression(e) || ri.A.hasAutomaticGainControl(e)) &&
                    iQ.Ay.isInputProfileCustom()
                );
            });
            return g.useMemo(() => {
                if (e) return { type: d.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [rY, ry, rD, rp, rX, rV, rw, rF, rT],
    });
var rK = n(403581),
    rW = n(512950),
    rZ = n(983851),
    rq = n(687021),
    rQ = n(128450),
    rJ = n(796774),
    r$ = n(209932),
    r0 = n(813564),
    r1 = n(984813),
    r2 = n(922016),
    r3 = n(305866),
    r6 = n(22231),
    r5 = n(158045),
    r4 = n(792348),
    r8 = n(674168),
    r7 = n(930946),
    r9 = n(805945),
    ae = n(647451);
function at(e) {
    let { onSelect: t } = e,
        [n, i] = g.useState(!1),
        l = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()),
        s = r5.Ay.canUseCustomCallSounds(l),
        r = g.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, c.jsx)(r2.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, c.jsx)(r3.l, {
                children: (0, c.jsx)(r7.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, c.jsx)(r8.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, c.jsx)(r9.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: j.intl.string(j.t.uOe0Az),
                children: (0, c.jsx)(r6.PencilIcon, { size: "md", color: "currentColor", className: ae.Wo }),
            }),
    });
}
function an(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, r4.A)(t, null),
        i =
            0 === (0, r0.wH)()
                ? j.intl.string(j.t.OASXjt)
                : j.intl.formatToPlainString(j.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, c.jsx)(r9.dT, {
        onClick: n,
        text: i,
        children: (0, c.jsx)(rZ.H, { size: "md", color: "currentColor", className: ae.wg }),
    });
}
function ai(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s);
    return (0, c.jsxs)("div", {
        className: ae.D6,
        children: [
            (0, c.jsxs)("div", {
                className: ae.kL,
                children: [
                    a && (0, c.jsx)(tN.A, { emojiId: s, emojiName: r, className: ae.Zg }),
                    (0, c.jsx)(z.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: ae.dj,
                        children:
                            null == t
                                ? j.intl.string(j.t.PoWNfe)
                                : n
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
                    l
                        ? (0, c.jsx)(an, { sound: t })
                        : (0, c.jsx)(rZ.H, { size: "md", color: "currentColor", className: ae.Gk }),
                ],
            }),
            (0, c.jsxs)("div", {
                className: ae.kL,
                children: [
                    (0, c.jsx)(at, { onSelect: i }),
                    l &&
                        !n &&
                        (0, c.jsx)(r9.dT, {
                            onClick: () => i(null),
                            text: j.intl.string(j.t.jmtcGA),
                            children: (0, c.jsx)(i4.TrashIcon, {
                                size: "md",
                                color: nW.A.unsafe_rawColors.RED_400.css,
                                className: ae.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var al = n(617617);
n(980504);
var as = n(806050);
function ar(e) {
    return (0, m.bG)([r$.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return r$.A.getSound("0" === t ? "0" : t, n);
    });
}
function aa(e) {
    let { guildId: t } = e,
        n = (0, m.bG)([al.A], () => al.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = ar(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, c.jsxs)("div", {
        className: as.Io,
        children: [
            r
                ? (0, c.jsx)(tN.A, { emojiId: l, emojiName: s, className: as.nW })
                : (0, c.jsx)(rZ.H, { size: "md", color: "currentColor", className: as.nW }),
            (0, c.jsx)(z.E, { className: as.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let ao = (0, a.E2)(o.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eL.Ay)(),
            [t, n] = g.useState("0"),
            i = (0, r1.mz)(t),
            l = ar(i),
            s = i?.type === r1.PP.GLOBAL,
            r = (0, m.bG)([r$.A], () => r$.A.hasFetchedAllSounds()) && null != i && null == l;
        g.useEffect(() => {
            r && (0, r0.ND)({ location: e });
        }, [r, e]),
            g.useEffect(() => {
                (0, rJ.E7)();
            }, []);
        let a = g.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, c.jsx)(aa, { guildId: e.value }) : null;
        }, []);
        return (0, c.jsxs)(nq.n, {
            label: j.intl.string(j.t.nzUc3B),
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: eS.A.getArticleURL(A.MVz.SOUNDBOARD) }),
            children: [
                (0, c.jsx)(rq.A, {
                    guildId: t,
                    className: as.Dt,
                    globalOption: { label: j.intl.string(j.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, c.jsxs)(rQ.A, {
                    title: j.intl.format(j.t.I2TsYN, {
                        nitroWheelHook: () => (0, c.jsx)(rK.t, { size: "md", color: "currentColor", className: as.ax }),
                    }),
                    children: [
                        (0, c.jsx)(ai, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, r0.Dv)(t, e) : (0, r0.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, c.jsx)(rW.p, {
                                className: as.lm,
                                messageType: rW.Y.WARNING,
                                children: j.intl.string(j.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var au = n(824744);
let ad = (0, a.sN)(o.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: eS.A.getArticleURL(A.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, au.w)(e);
        (0, rJ.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, r0.wH)();
        return (0, au.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var ac = n(864145);
let ag = (0, a.sN)(o.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t["2JbvKw"]),
        useSubtitle: () => j.intl.string(j.t.INenzY),
        setValue: function (e) {
            let t = (0, au.w)(e);
            v.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = v.HO.getSetting();
            return (0, au.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, ac.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    am = (0, a.zZ)(o.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [ad, ag, ao],
    });
var aA = n(803224),
    aE = n(552122);
let ah = (0, a.E2)(o.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [j.intl.string(j.t.fgSHf8)],
        usePredicate: () => null != aE.A.useHolidaySoundpack(),
        Component: () =>
            (0, c.jsx)(z.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: j.intl.format(j.t.Eup6Wv, {
                    onClick: () => (0, nt.openUserSettings)(o.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    aS = (0, a.AK)(o.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.eyGEE4),
        useSearchTerms: () => [j.intl.string(j.t.eyGEE4)],
        destinationKey: o.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    aT = (0, a.gN)(o.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [aS] });
var ap = n(264686);
let ax = (0, eE.D)(() => ({ currentPlayingSound: null }));
function af() {
    let e = ax.getField("currentPlayingSound");
    e?.stop(), ax.setState({ currentPlayingSound: null });
}
function aI(e) {
    let t = ax.getField("currentPlayingSound");
    t?.stop();
    let n = (0, n1.Ak)(e);
    ax.setState({ currentPlayingSound: n });
}
function a_(e) {
    return (0, a.zD)(`${o.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => aI(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, m.bG)([aA.A], () => aA.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = aA.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || n.push(e.sound), ap.default.setDisabledSounds(n);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, m.bG)([aA.A], () => aA.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let aN = [
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
    aC = (0, a.D1)(o.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? j.intl.formatToPlainString(j.t["0JYT98"], { count: t })
                : j.intl.formatToPlainString(j.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tc(o.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                af();
            };
        },
        buildLayout: () => aN.map((e) => a_(e)),
    }),
    ab = (0, a.zZ)(o.X.SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, m.bG)([aA.A], () => aA.A.getDisableAllSounds());
            return g.useMemo(() => {
                if (e)
                    return {
                        type: d.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: j.intl.format(j.t.fRvixS, {
                            onClick: () => (0, nt.openUserSettings)(o.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [aC, ah, aT],
    }),
    ay = (0, a.zD)(o.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !v.uh.useSetting();
        },
        setValue: function (e) {
            (0, s0.A)("stream_previews_disabled", !e, v.uh.getSetting(), [tv.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                v.uh.updateSetting(!e);
        },
    }),
    av = (0, a.zD)(o.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => j.intl.string(j.t.GmWk2E),
        useSearchTerms: () => [j.intl.string(j.t["Fj/xn1"])],
        useSubtitle: () => j.intl.string(j.t["Fj/xn1"]),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getVideoHook());
        },
        setValue: sL.A.setVideoHook,
        usePredicate: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.supportsVideoHook());
        },
    }),
    aj = (0, a.zD)(o.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => j.intl.string(j.t["4I0qzZ"]),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getExperimentalSoundshare());
        },
        setValue: sL.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, m.bG)([iQ.Ay], () => {
                let e = iQ.Ay.supportsExperimentalSoundshare(),
                    t = iQ.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    aO = (0, a.zD)(o.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => j.intl.string(j.t["/jwMtn"]),
        useSubtitle: () => j.intl.string(j.t.zlA23F),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sL.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return iQ.Ay.supports(lD.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    aL = (0, a.sN)(o.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => j.intl.string(j.t.fhEzfj),
        setValue: function (e) {
            let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sL.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: iQ.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, m.bG)([iQ.Ay], () => iQ.Ay.getSidechainCompression());
            return iQ.Ay.supports(lD.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    aR = (0, a.zD)(o.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t.lt8rRx),
        useSubtitle: () => j.intl.string(j.t.ie1mgY),
        useValue: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, nd.cX)() && e
                ? (0, nZ.A)({
                      title: j.intl.string(j.t["9jf31O"]),
                      subtitle: j.intl.string(j.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          sL.A.setUseSystemScreensharePicker(e), nm.A.app.relaunch();
                      },
                      confirmText: j.intl.string(j.t.BddRzS),
                  })
                : sL.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, m.bG)([iQ.Ay], () => iQ.Ay.supportsSystemScreensharePicker() && (0, nd.cX)());
        },
    }),
    aD = (0, a.bd)(o.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t.qrMyvm) : j.intl.string(j.t.LEtTNl)),
        useCollapsedSubtitle: () => tc(o.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [aO, aL, aR, aj, av],
    }),
    aP = (0, a.zZ)(o.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [ay, aD] });
var aG = n(106713);
let aM = (0, a.E2)(o.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aG.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, c.jsx)(sI.U, {
                label: j.intl.string(j.t.UTM8VP),
                deviceType: lD.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aU = (0, a.E2)(o.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = aG.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, c.jsx)(sI.U, {
                label: j.intl.string(j.t.xuYQ0n),
                deviceType: lD.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aV = (0, a.zC)(o.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [aM, aU] }),
    ak = (0, a.sN)(o.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = iQ.Ay.getInputVolume();
            return (0, au.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, au.w)(e);
            sL.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    aw = (0, a.sN)(o.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = iQ.Ay.getOutputVolume();
            return (0, au.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, au.w)(e);
            sL.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    aF = (0, a.zC)(o.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [ak, aw] });
var aB = n(702841),
    az = n(28863),
    aX = n(152567),
    aY = n(804037);
let aH = `${eS.A.getArticleURL(A.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    aK = (0, a.E2)(o.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH)],
        usePredicate: function () {
            return (0, aB.bG)([iQ.Ay], () => iQ.Ay.supports(lD.O5.LOOPBACK));
        },
        Component: function () {
            return (0, aB.bG)([iQ.Ay], () => iQ.Ay.supports(lD.O5.LOOPBACK))
                ? (0, c.jsx)(aX.A, {
                      size: "md",
                      notchBackground: aX.V.GRAY,
                      captionVoice: j.intl.string(j.t.bp3JOV),
                      captionNoVoice: (0, c.jsxs)(c.Fragment, {
                          children: [
                              (0, c.jsx)(z.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t.bgn75v),
                              }),
                              j.intl.string(j.t["MA+OZh"]),
                              (0, c.jsx)(az.Anchor, {
                                  className: aY.X,
                                  href: eS.A.getArticleURL(A.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: aH }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    aW = eW.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function aZ(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, c.jsxs)(F.B, {
        children: [
            n && (0, c.jsx)(i2, { sourcePage: "voice" }),
            t && (0, c.jsx)(lX.A, { look: lX.k.WARNING, children: j.intl.string(j.t.Ioz3gx) }),
        ],
    });
}
let aq = (0, a.zZ)(o.X.VOICE_CATEGORY, {
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
            let e = i1("voice"),
                t = (0, s_.x5)(lD.oh.AUDIO_INPUT),
                n = (0, s_.x5)(lD.oh.AUDIO_OUTPUT),
                i = g.useMemo(() => {
                    let e = aW.some((e) => t?.hardwareId?.startsWith(e)),
                        i = aW.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return g.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: d.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, c.jsx)(aZ, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [aV, aF, aK],
    }),
    aQ = (0, a.t_)(o.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        buildLayout: () => [aq, rH, sO, aP, ab, am, rn, s5],
    }),
    aJ = (0, a.i4)(o.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => iQ.Ay.isSupported(),
        icon: sg.MicrophoneIcon,
        useMenu: sm.A,
        buildLayout: () => [aQ],
    }),
    a$ = (0, a.WI)(o.X.APP_SECTION, {
        useTitle: () => j.intl.string(j.t.gcyH1J),
        buildLayout: () => [aJ, nB, eJ, iM, sc, nH],
    });
var a0 = n(360669),
    a1 = n(974544),
    a2 = n(423764),
    a3 = n(289873),
    a6 = n(132500),
    a5 = n(465323),
    a4 = n(37766),
    a8 = n(194261),
    a7 = n(391048),
    a9 = n(277984),
    oe = n(99696),
    ot = n(202613),
    on = n(615405),
    oi = n(580630),
    ol = n(83617),
    os = n(935208),
    or = n(607399),
    oa = n(993077),
    oo = n(150934),
    ou = n(256006),
    od = n(198970),
    oc = n(71532);
let og = /[^0-9/]/g,
    om = /[^0-9]/g;
class oA extends g.PureComponent {
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
        let n,
            i,
            l,
            s,
            { value: r, onChange: a } = this.props,
            o = this._inputRef;
        if (e === r || null == o || null == r) return;
        let u =
                ((i = (n = e.replace(og, "").split("/"))[0]),
                (l = n[1]),
                (s = []),
                parseInt(i, 10) > 12 && (i = i.substring(0, 1)),
                s.push(i),
                (parseInt(i, 10) > 1 || 2 === i.length || (null != l && "" !== l)) && s.push("/"),
                null != l && "" !== l && parseInt(l, 10) > 99 && (l = (l + "").substring(0, 2)),
                s.push(l),
                s.join("")),
            d = o.selectionStart;
        u === r && u.length <= 3 && r.includes("/") && !e.includes("/")
            ? (u = u.replace(om, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, c.jsx)(ll.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var oE = n(832208),
    oh = n(782328);
let oS = [
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
                        getClassNameForLayout: () => oh.ep,
                        renderInput: (e) => (0, c.jsx)(oA, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    oT = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = g.useState(!1),
            [a, o] = g.useState(null),
            [u, d] = g.useState(i);
        return (
            g.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, c.jsx)(oE.A, {
                className: n,
                form: oS,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    s || "" === e || r(!0),
                        (s && "" === e) || !(0, oc.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var op = n(219887),
    ox = n(292856);
let of = "isDefault";
class oI extends g.PureComponent {
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
            expiresMonth: t instanceof ot.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof ot.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        e2.h.wait(() => {
            (0, a9.ey)(), (0, a9.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(n7.Vq).length))
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
        this.handleFieldChange(Number(i), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${l}`), "expiresYear");
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, c.jsx)("div", {
                      className: ox.zc,
                      children: (0, c.jsx)(ik.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, c.jsx)("div", {
                  className: ox.zc,
                  children: (0, c.jsx)(ik.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, ou.g)(n);
        return (0, c.jsxs)("div", {
            className: ox.yV,
            children: [
                (0, c.jsx)(z.E, {
                    className: ox.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, c.jsx)(od.Ay, {
                    ...e,
                    mode: od.Ay.Modes.EDIT,
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
        return (0, c.jsxs)("div", {
            className: ox.yV,
            children: [
                (0, c.jsx)(z.E, { className: ox.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, c.jsx)(oT, {
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
        return (0, c.jsx)("div", {
            className: ox.AU,
            children: (0, c.jsxs)(F.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, c.jsx)(sU.e, {
                        children: (0, c.jsxs)("div", {
                            className: ox.lH,
                            children: [
                                n
                                    ? (0, c.jsx)(i8.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, c.jsx)("div", { "aria-hidden": !0, className: ox.dm }),
                                      })
                                    : null,
                                (0, c.jsx)(x.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: or.Fr ? "sm" : "md",
                                    text: or.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, c.jsxs)(sU.e, {
                        children: [
                            (0, c.jsx)(x.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: or.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, c.jsx)(x.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: or.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["R3BPH+"]),
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
            r = e instanceof ot.SJ;
        return (0, c.jsx)(oa.Z, {
            editable: !0,
            className: it()(ox.Nr, i),
            children: (0, c.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, c.jsxs)("div", {
                        className: ox.__invalid_paymentSection,
                        children: [
                            (0, c.jsx)(op.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, c.jsx)("div", { className: ox.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, c.jsx)("div", {
                                className: ox.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, c.jsx)("div", {
                        className: ox.D5,
                        children: (0, c.jsx)(oo.S, {
                            value: of,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, of),
                            label: j.intl.string(j.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, c.jsx)(i3.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let o_ = m.Ay.connectStores([on.A], () => ({ updateError: on.A.editSourceError, removeError: on.A.removeSourceError }))(
    oI,
);
var oN = n(832505),
    oC = n(849405),
    ob = n(329693);
function oy() {
    (0, oe.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, a6.A)() });
}
class ov extends g.PureComponent {
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
            ? (0, c.jsx)(o_, {
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
            : (0, c.jsxs)(c.Fragment, {
                  children: [
                      i ? null : (0, c.jsx)(i3.c, { className: ob.__invalid_sourceDivider }),
                      (0, c.jsxs)("div", {
                          className: ob.Yb,
                          children: [
                              (0, c.jsx)(op.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, c.jsx)(x.$, {
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
let oj = g.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = g.useState(null),
        o = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, m.bG)([on.A], () => on.A.ipCountryCode),
        d = g.useMemo(() => (0, a5.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        g.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : a9.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, c.jsxs)(c.Fragment, {
            children: [
                n ? null : (0, c.jsx)(i3.c, { className: ob.__invalid_sourceDivider }),
                (0, c.jsxs)("div", {
                    className: ob.Yb,
                    children: [
                        void 0 !== t
                            ? (0, c.jsx)(op.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, c.jsxs)(lo.A, {
                                  align: lo.A.Align.CENTER,
                                  children: [
                                      (0, c.jsx)(a4._, { size: "lg" }),
                                      (0, c.jsx)(z.E, {
                                          variant: "text-sm/medium",
                                          className: oC.Wi,
                                          children: j.intl.string(oN.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, c.jsxs)("div", {
                            className: ob.zy,
                            children: [
                                (0, c.jsx)("div", {
                                    className: ob.Tq,
                                    children:
                                        null == r
                                            ? (0, c.jsx)(a3.y, { type: a3.y.Type.SPINNING_CIRCLE })
                                            : (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = String(n).toUpperCase(),
                                                          l = (0, oi.$g)(e ?? 0, n, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${i} ${l}`;
                                                  })(),
                                              }),
                                }),
                                (0, c.jsx)(x.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: j.intl.string(oN.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class oO extends g.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await a9.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await a9.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await a9.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, ol.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, li.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, c.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, a7.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, c.jsxs)("div", {
            className: ob.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, c.jsxs)("div", {
                          className: ob.z8,
                          children: [
                              (0, c.jsx)(z.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: ob.Sv,
                                  children: j.intl.string(j.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, c.jsx)(x.$, { onClick: this.handleAddPaymentMethod, text: j.intl.string(j.t.CpOiEO) }),
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
            u = k()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : os.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof ot.LQ)),
            g = u.filter((e) => e instanceof ot.LQ),
            m = this.state.editingPayment,
            A = d.findIndex((e) => e.id === m),
            E = d.map((e, t) =>
                (0, c.jsx)(
                    ov,
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
                              oj,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || A === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: oy,
                              },
                              e.id,
                          ),
                      )
                    : (0, c.jsx)(oj, {
                          hideDivider: 0 === d.length || A === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: oy,
                      })),
            (0, c.jsxs)(c.Fragment, {
                children: [
                    t
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsxs)(h.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, c.jsx)(a8.LockIcon, { size: "sm", className: ob.hz }),
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
                    E,
                    o && e,
                    A !== d.length - 1 || (o && g.length > 0) ? (0, c.jsx)(i3.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var oL = n(459357),
    oR = n(295405),
    oD = n(166403),
    oP = n(773669),
    oG = n(943009);
function oM() {
    let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, a2.Gw)(e.country) };
}
let oU = (0, a.E2)(o.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, m.bG)([on.A], () => on.A.isSyncing),
                i = (0, m.bG)([oR.A], () => oR.A.paymentSources),
                l = (0, m.bG)([oR.A], () => oR.A.defaultPaymentSourceId),
                s = (0, m.bG)([oP.default], () => oP.default.locale),
                r = (0, m.bG)([oD.A], () => oD.A.getPremiumTypeSubscription()),
                a = (0, m.bG)([on.A], () => on.A.isRemovingPaymentSource),
                o = (0, m.bG)([on.A], () => on.A.isUpdatingPaymentSource),
                { enabled: u } = (0, oL.c)({ location: "UserSettingsBilling" });
            return (g.useEffect(() => {
                a9.$o(), a9.hP();
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, c.jsx)("div", { className: oG.o, children: (0, c.jsx)(a3.y, {}) })
                : (0, c.jsx)(oO, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== A.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: s,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.W26xGQ), j.intl.string(j.t["3pIjBH"])],
    }),
    oV = (0, a.zZ)(o.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = oM();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == oM()
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
        buildLayout: () => [oU],
    });
var ok = n(549363),
    ow = n(545075);
let oF = (0, a.E2)(o.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, m.bG)([oP.default], () => oP.default.locale);
            return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(ow.kb, {}), (0, c.jsx)(ok.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    oB = (0, a.zZ)(o.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [oF],
    }),
    oz = (0, a.t_)(o.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [oV, oB],
        useObscuredNotice: a1.L,
    }),
    oX = (0, a.i4)(o.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: a0.B,
        buildLayout: () => [oz],
    });
var oY = n(70283),
    oH = n(597770),
    oK = n(682618),
    oW = n(611881),
    oZ = n(962644),
    oq = n(35587),
    oQ = n(86379);
let oJ = (0, a.E2)(o.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: ow.uK,
        usePredicate: () => (0, oQ.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    o$ = (0, a.zZ)(o.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [oJ] });
var o0 = n(982240),
    o1 = n(788833),
    o2 = n(914410),
    o3 = n(216583),
    o6 = n(573343);
function o5(e) {
    let { tier: t, active: n = !1 } = e;
    return (0, c.jsxs)("div", {
        className: it()(o6.fO, { [o6.bF]: n }),
        children: [
            null != t.simple_icon_url && (0, c.jsx)("img", { src: t.simple_icon_url, alt: "", className: o6.si }),
            (0, c.jsxs)("div", {
                className: o6.tc,
                children: [
                    (0, c.jsx)(z.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, c.jsx)(z.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: j.intl.format(o3.default.qvx9E4, { count: (0, o0.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function o4(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, c.jsx)("div", {
        className: o6.dw,
        children: t.map((e) => (0, c.jsx)(o5, { tier: e, active: e.key === n?.key }, e.key)),
    });
}
function o8(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eL.Ay)(tv.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, o1.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: A.ZSU.BUTTON_CTA, objectType: A.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, c.jsx)("div", {
        className: o6.NG,
        children: (0, c.jsx)(x.$, {
            variant: "primary",
            icon: oH.GiftIcon,
            text: j.intl.string(o3.default.DZnomS),
            onClick: l,
        }),
    });
}
function o7(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, o0.rL)(i),
        a = (0, o0.rL)(l),
        o = (0, oW.GZ)(n, i, l);
    return (
        (t =
            null != l
                ? j.intl.formatToPlainString(o3.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : j.intl.formatToPlainString(o3.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, c.jsxs)("div", {
            className: o6.mY,
            children: [
                i?.simple_icon_url != null &&
                    (0, c.jsx)("div", {
                        className: o6.fC,
                        children: (0, c.jsx)("img", { src: i.simple_icon_url, alt: "", className: o6.qS }),
                    }),
                (0, c.jsxs)("div", {
                    className: o6.Qs,
                    children: [
                        (0, c.jsx)(z.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, c.jsx)(o2.Ay, { variant: o2.qP.BLUE, weight: o2.fh.MEDIUM, progress: o }),
                        (0, c.jsx)(z.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: o6.qg,
                            children: j.intl.format(o3.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                l?.simple_icon_url != null &&
                    (0, c.jsx)("div", {
                        className: o6.fC,
                        children: (0, c.jsx)("img", { src: l.simple_icon_url, alt: "", className: o6.qS }),
                    }),
            ],
        })
    );
}
function o9(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, m.cf)([o0.Ay], () => ({
            badgeProgress: o0.Ay.getSingleRequirementProgress(oY.$.GIFTING)?.current ?? 0,
            currentTier: o0.Ay.getCurrentTier(oY.$.GIFTING),
            nextTier: o0.Ay.getNextTier(oY.$.GIFTING),
            giftsRemaining: o0.Ay.getRemainingToNextTier(oY.$.GIFTING),
            tiers: o0.Ay.getBadgeById(oY.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, c.jsxs)("div", {
              className: o6.kL,
              children: [
                  (0, c.jsxs)("div", {
                      className: o6.Jo,
                      children: [
                          n > 0 &&
                              (0, c.jsxs)(c.Fragment, {
                                  children: [
                                      (0, c.jsx)(o7, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, c.jsx)("div", { className: o6.yF }),
                                  ],
                              }),
                          (0, c.jsx)(o4, { tiers: r, currentTier: i }),
                          (0, c.jsx)(z.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: o6.PJ,
                              children: j.intl.string(o3.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, c.jsx)(o8, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let ue = (0, a.zZ)(o.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => j.intl.string(o3.default.sFokBp),
        buildLayout: () => [ut],
        usePredicate: () => {
            let e = (0, oW.F5)("gift_inventory"),
                t = (0, m.bG)([o0.Ay], () => o0.Ay.getBadgeById(oY.$.GIFTING));
            return e && null != t;
        },
    }),
    ut = (0, a.E2)(o.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [j.intl.string(o3.default.sFokBp)],
        Component: () => (0, c.jsx)(o9, {}),
    });
var un = n(264779),
    ui = n(412260),
    ul = n(555393),
    us = n(725807),
    ur = n(212168),
    ua = n(469778),
    uo = n(45938),
    uu = n(109802),
    ud = n(869038),
    uc = n(380856);
function ug(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, c.jsxs)(lo.A, {
        className: it()(uc.wx, n),
        align: lo.A.Align.CENTER,
        children: [
            (0, c.jsx)("div", { className: uc.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function um(e) {
    let { children: t, className: n } = e;
    return (0, c.jsx)("div", { className: it()(uc.rf, n), children: t });
}
class uA extends g.PureComponent {
    static Header = ug;
    static Body = um;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, c.jsx)("div", { className: it()(uc.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var uE = n(165191),
    uh = n(871123),
    uS = n(366523),
    uT = n(280450),
    up = n(30793),
    ux = n(97352),
    uf = n(67480),
    uI = n(147925),
    u_ = n(957565),
    uN = n(615396),
    uC = n(274904);
class ub extends g.PureComponent {
    _copyModeTimeout = new rf.Ep();
    state = { copyMode: uu.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case uu.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case uu.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        ud.Ay.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        (0, uo.AK)(t, n),
            (0, u_.C)(
                e,
                () => this.setState({ copyMode: uu.q.SUCCESS }),
                () => this.setState({ copyMode: uu.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: uu.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, c.jsxs)(lo.A, {
            direction: lo.A.Direction.VERTICAL,
            className: uC.Gj,
            children: [
                (0, c.jsx)(uu.e, {
                    className: uC.ph,
                    value: (0, uo.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: u_.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: sG.XD.BRAND,
                    buttonLook: sG.pR.FILLED,
                }),
                (0, c.jsxs)("div", {
                    className: uC.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, c.jsxs)(g.Fragment, {
                                  children: [
                                      j.intl.format(j.t.ltVZcJ, { hours: t.expiresAt.diff(il()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, c.jsx)(t9.D, {
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
class uy extends g.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        this.setState({ isCreating: !0 }),
            await ud.Ay.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        (null == n || null == this._loadedAt || n < this._loadedAt) && i && ud.Ay.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, uh.bF)(e)
            ? (0, c.jsx)(uS.e, { shape: "square", sku: e, containerClassName: uC.ez })
            : null != t
              ? (0, c.jsx)(uE.A, { giftStyle: t, className: uC.ez, shouldAnimate: this.state.isHovered })
              : (0, c.jsx)(iq.A, { game: n, size: iq.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, uh.bF)(e)
            ? (0, c.jsxs)("div", {
                  className: it()(uC.Oc, uC.ic),
                  children: [
                      (0, c.jsx)(iq.A, { game: n, size: iq.M.XSMALL, skuId: e.id, className: uC._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, c.jsx)("div", { className: uC.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tF.FB
                    ? j.intl.string(j.t.odsU6W)
                    : i === tF.Bu && null != n
                      ? j.intl.formatToPlainString(n.interval === tF.WT.MONTH ? j.t.uZjpiJ : j.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : j.intl.formatToPlainString(n.interval === tF.WT.MONTH ? j.t.rCJvqo : j.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, c.jsx)("div", { className: uC.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, c.jsxs)(lo.A, {
            justify: lo.A.Justify.BETWEEN,
            align: lo.A.Align.CENTER,
            className: uC.pe,
            children: [
                (0, c.jsx)(z.E, { variant: "text-md/normal", children: j.intl.string(j.t.lELyPj) }),
                (0, c.jsx)(x.$, {
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
                giftCodes: n,
                className: i,
                sku: l,
                isFetching: s,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, c.jsxs)(uA, {
            className: i,
            children: [
                (0, c.jsx)(t9.D, {
                    onClick: this.handleToggleOpen,
                    className: uC.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, c.jsx)(uA.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, c.jsxs)("div", {
                            className: uC.MY,
                            children: [
                                (0, c.jsxs)(lo.A, {
                                    align: lo.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, c.jsxs)("div", {
                                            className: uC.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, c.jsx)(uI.A, {
                                    direction: a ? uI.A.Directions.UP : uI.A.Directions.DOWN,
                                    className: uC.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, c.jsx)(uA.Body, {
                          children: s
                              ? (0, c.jsx)(a3.y, { className: uC.u1 })
                              : (0, c.jsxs)(g.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, c.jsx)(ub, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let uv = m.Ay.connectStores([uf.A, e8.A, up.A, iX.A, ux.A, uT.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = uf.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = up.A.getForGifterSKUAndPlan(uT.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: e8.A.enabled,
        isFetching: up.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: up.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: iX.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, uN.c9)(n) : null,
        giftCodes: s,
    };
})(uy);
var uj = n(725570),
    uO = n(736653),
    uL = n(46054);
let uR = il().duration(30, "days");
var uD = n(416052),
    uP = n(878309);
function uG(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, c.jsx)(ln.Modal, {
        title: "",
        size: "md",
        input: (0, c.jsx)("div", { className: uP.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, c.jsxs)("div", {
            className: uP.t4,
            children: [
                (0, c.jsx)(h.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, c.jsx)(z.E, { variant: "text-md/normal", className: uP.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let uM = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = g.useState(null),
        o = (0, tU.GV)(),
        { analyticsLocations: u } = (0, eL.Ay)(tv.A.USER_SETTINGS_GIFT_INVENTORY);
    return (g.useEffect(() => {
        null == i &&
            (0, un.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, c.jsx)(uG, { onClose: t, transitionState: s })
        : null == i
          ? (0, c.jsx)(a3.y, { className: uP.Lq })
          : (0, c.jsx)(ln.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, c.jsxs)("div", {
                    className: uP.N1,
                    children: [
                        (0, c.jsx)("div", { className: uP.Qw }),
                        (0, c.jsx)(h.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, c.jsx)(z.E, {
                            variant: "text-md/normal",
                            className: uP.G3,
                            children: l.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: j.intl.string(j.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: j.intl.string(j.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, un.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsx)(i3.c, { className: uP.M5 }),
                        (0, c.jsx)(tW.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, c.jsx)(uD.A, {
                                value: i,
                                buttonColor: sG.$n.Colors.BRAND,
                                buttonLook: sG.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uU = n(707554),
    uV = n(339048),
    uk = n(136380);
function uw() {
    let e = (0, m.yK)([ua.A], () => ua.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = k().groupBy(e, (e) => (0, uo.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = g.useState(!1);
    if (
        (g.useEffect(() => {
            e2.h.wait(() => {
                (0, uV.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, c.jsx)(a3.y, { className: uk.Lq });
    if (0 === Object.keys(t).length)
        return (0, c.jsxs)("div", {
            className: uk.p$,
            children: [
                (0, c.jsx)("div", { className: uk.QT }),
                (0, c.jsx)(uU.H, { className: uk.ks, children: j.intl.string(j.t.B1qgZn) }),
                (0, c.jsx)("p", {
                    className: uk.WO,
                    children: j.intl.format(j.t.HezvJ8, {
                        onClick: function () {
                            (0, nt.openUserSettings)(o.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let l = k()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: l } = (0, uo.X6)(e);
            return (0, c.jsx)(uv, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: l }, e);
        });
    return (0, c.jsx)(F.B, { gap: "lg", children: l });
}
function uF(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = g.useState(!1),
        [r, a] = g.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, uO.Ay)(),
        d = (0, un.WD)(n.id, u),
        m = null != i,
        A = g.useMemo(
            () =>
                (0, is.i$)(
                    m
                        ? null != n.outboundRedemptionEndDate
                            ? il()(n.outboundRedemptionEndDate)
                            : il()(n.endDate).add(uR)
                        : il()(n.endDate),
                    "LL",
                ),
            [n, m],
        );
    m && l
        ? (t = j.intl.format(j.t.pkxVx6, { endDate: A, onClickDetails: o }))
        : m && !l
          ? (t = j.intl.format(j.t["4sFeob"], { endDate: A, onClickDetails: o }))
          : !m && l
            ? (t = j.intl.format(j.t["RBnE+l"], { endDate: A, onClickDetails: o }))
            : m || l || (t = j.intl.format(j.t["57+7Qn"], { endDate: A, onClickDetails: o }));
    let E = m ? j.intl.string(j.t["2cHUti"]) : j.intl.string(j.t.O13yhz),
        S = (0, ul.N)()?.isEligible === !0,
        T = g.useCallback(() => a(!1), []),
        { outboundTitle: p, outboundTermsAndConditions: f } = n;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: uk.AX,
                children: [
                    (0, c.jsxs)("div", {
                        className: uk.Pg,
                        children: [
                            (0, c.jsxs)("div", {
                                className: uk.At,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: uk.$G,
                                        children: (0, c.jsx)("img", { alt: "", src: d, className: uk.IJ }),
                                    }),
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(h.D, { variant: "heading-md/semibold", children: p }),
                                            (0, c.jsx)(z.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (m || S) && (0, c.jsx)(x.$, { text: E, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, c.jsx)(z.E, {
                            className: uk.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: uL.A.parse(f, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, c.jsx)(uj.aF, {
                    renderModal: (e) =>
                        (0, c.jsx)(uM, {
                            ...e,
                            onClose: T,
                            onClaim: oZ.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: T,
                }),
        ],
    });
}
function uB(e) {
    let { redesign: t = !1 } = e,
        n = (0, m.yK)([ua.A], () => ua.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, ul.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, oq.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tF.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tF.Bu && !e.consumed) ?? [],
        [u, d] = k().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tF.gD.PREMIUM_YEAR_TIER_2;
        }),
        g = l.length + s.length > 0,
        E =
            t || !g
                ? null
                : (0, c.jsxs)("div", {
                      className: uk.N1,
                      children: [
                          (0, c.jsx)(h.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, c.jsx)(i3.c, { className: uk.yF }),
                      ],
                  }),
        S =
            !1 === i && g
                ? (0, c.jsxs)("div", {
                      className: uk.uo,
                      children: [
                          (0, c.jsx)(rK.t, {
                              size: "md",
                              color: nW.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: uk.PC,
                          }),
                          (0, c.jsx)(z.E, {
                              variant: "text-md/normal",
                              className: uk.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, tP.default)(), (0, tq.pX)(A.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, c.jsx)(us.A, {
                              showGradient: !0,
                              className: uk.aA,
                              subscriptionTier: tF.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, c.jsxs)("div", {
        children: [
            E,
            (0, c.jsx)(ur.A, {
                className: uk.Yj,
                isShown: !1 === i && g,
                type: ur.i.PREMIUM,
                hasBackground: !0,
                children: (0, c.jsxs)("div", {
                    className: uk.DE,
                    children: [
                        S,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, c.jsx)(uF, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, c.jsx)(uF, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, c.jsx)(
                                  uv,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tF.FB,
                                  },
                                  (0, uo.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, c.jsx)(
                                  uv,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tF.Bu,
                                  },
                                  (0, uo.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, c.jsx)(
                                  uv,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tF.Bu,
                                  },
                                  (0, uo.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let uz = (0, a.zZ)(o.X.MY_GIFTS_CATEGORY, {
        useTitle: uY,
        buildLayout: () => [uX],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, m.cf)(
                    [ui.A],
                    () => ({
                        claimedOutboundPromotionCodes: ui.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: ui.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, oq.T1)({ includeClaimedPromotions: !0 }),
                i = (0, un.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    uX = (0, a.E2)(o.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [uY()],
        Component: () => (0, c.jsx)(uB, { redesign: !0 }),
    });
function uY() {
    return j.intl.string(j.t.YzjdWJ);
}
let uH = (0, a.zZ)(o.X.PURCHASED_GIFTS_CATEGORY, { useTitle: uW, buildLayout: () => [uK] }),
    uK = (0, a.E2)(o.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [uW()], Component: () => (0, c.jsx)(uw, {}) });
function uW() {
    return j.intl.string(j.t.FWe6CP);
}
var uZ = n(532446),
    uq = n(499454);
class uQ extends g.Component {
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
        let n = t.trim();
        this.setState({ submitting: !0 });
        try {
            if (this.props.acceptGiftCardRedemption)
                try {
                    await (0, oe.Qp)(n),
                        (0, oe.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, a6.A)(),
                        }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, uo.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await ud.Ay.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            e7.default.track(A.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: A.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: A.ZSU.BUTTON_CTA,
                },
            }),
                (0, uq.h)({ processedCode: e }),
                this.setState({ codeInput: "" });
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { redesign: e, obscureInput: t } = this.props,
            { codeInput: n, submitting: i, hasError: l, isPromoCode: s } = this.state,
            r = e ? j.intl.string(j.t["hVEn/j"]) : j.intl.string(j.t.SeKIoS),
            a = e ? j.intl.string(j.t.epHMtp) : void 0;
        return (0, c.jsx)(nq.n, {
            label: e ? void 0 : j.intl.string(j.t["il+VCo"]),
            children: (0, c.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, c.jsxs)(uZ.M, {
                    children: [
                        (0, c.jsx)(ll.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !s && l ? j.intl.string(j.t.Y11a2u) : null,
                            helperText: s
                                ? j.intl.format(j.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${n}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, c.jsx)(x.$, {
                            variant: "primary",
                            text: j.intl.string(j.t.KIpp7M),
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
function uJ(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, oL.c)({ location: "UserSettingsBilling" }),
        i = g.useContext(e7.AnalyticsContext),
        l = (0, m.bG)([e8.A], () => e8.A.enabled);
    return (0, c.jsx)(uQ, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let u$ = (0, a.zZ)(o.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [u0],
        usePredicate: () => !(0, oQ.Hp)(),
    }),
    u0 = (0, a.E2)(o.X.REDEEM_CODE_INPUT, {
        Component: () => (0, c.jsx)(uJ, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    u1 = (0, a.t_)(o.X.GIFT_PANEL, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        buildLayout: () => [u$, uz, ue, uH, o$],
        initialize: () => {
            oZ.Ay.fetchClaimedOutboundPromotionCodes(), (0, oW.Ig)("gift_inventory") && (0, oK.o0)(oY.$.GIFTING);
        },
    }),
    u2 = (0, a.i4)(o.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        icon: oH.GiftIcon,
        usePersistentBadge: function () {
            let e = (0, oq.IO)().length;
            return g.useMemo(() => ({ badgeType: d.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [u1],
    });
var u3 = n(659758),
    u6 = n(279694),
    u5 = n(815846);
let u4 = (0, a.E2)(o.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser());
            return (0, r5.YE)(e, tF.PremiumTypes.TIER_2) ? (0, c.jsx)(u5.A, {}) : (0, c.jsx)(u6.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    u8 = (0, a.zZ)(o.X.NITRO_CATEGORY, { buildLayout: () => [u4] }),
    u7 = (0, a.t_)(o.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: a1.L,
        buildLayout: () => [u8],
    }),
    u9 = (0, a.i4)(o.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: rK.t,
        usePersistentBadge: function (e) {
            let t = (0, u3.e)(e);
            return g.useMemo(() => ({ badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [u7],
    });
var de = n(104510),
    dt = n(820739),
    dn = n(73825),
    di = n(160946),
    dl = n(859241),
    ds = n(531260),
    dr = n(527113),
    da = n(338548),
    du = n(776096),
    dd = n(711014),
    dc = n(178368),
    dg = n(809545),
    dm = n(168482);
function dA() {
    return (0, c.jsxs)("div", {
        className: dg.iE,
        children: [
            (0, c.jsx)("img", { className: dg.Kk, alt: "", src: dm }),
            (0, c.jsxs)("div", {
                className: dg.pq,
                children: [
                    (0, c.jsx)(z.E, { variant: "text-lg/bold", children: j.intl.string(j.t.ZHNSYf) }),
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: j.intl.string(j.t.kCj5ps),
                    }),
                ],
            }),
            (0, c.jsx)(x.$, {
                variant: "secondary",
                text: j.intl.string(j.t.JFlifp),
                onClick: function () {
                    (0, tq.pX)(A.BVt.GUILD_DISCOVERY), (0, tP.default)();
                },
            }),
        ],
    });
}
var dE = n(365199),
    dh = n(906199),
    dS = n(443865),
    dT = n(980707),
    dp = n(473145);
function dx(e) {
    let {
            guildBoostSlot: t,
            onClose: i,
            hasCancelableGuildBoostSlot: l,
            premiumSubscription: s,
            onSelect: r,
            fractionalState: a,
        } = e,
        u = {
            transfer: {
                label: null != t.premiumGuildSubscription ? j.intl.string(j.t["PR0n//"]) : j.intl.string(j.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? j.intl.string(j.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: j.intl.string(j.t.twFU3R), subtext: l ? null : j.intl.string(j.t.oQ9lOh), disabled: !l },
            uncancel: { label: j.intl.string(j.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (s.status) {
        case A.Dmq.PAST_DUE:
            (u.cancel.disabled = !0), (u.cancel.subtext = j.intl.string(j.t.WnL6DV)), (u.uncancel.disabled = !0);
            break;
        case A.Dmq.PAUSE_PENDING:
        case A.Dmq.PAUSED:
            a === tF.xc.NONE &&
                ((u.transfer.disabled = !0),
                (u.transfer.subtext = j.intl.string(j.t.LiLRRT)),
                (u.cancel.subtext = j.intl.string(j.t["1ywaWL"])),
                (u.cancel.disabled = !0),
                (u.uncancel.disabled = !0));
    }
    let d = g.useMemo(
        () =>
            s.isPausedOrPausePending && a === tF.xc.NONE
                ? (0, c.jsx)(e0.Dr, {
                      id: "manage-subscription",
                      label: j.intl.string(j.t.obRG6Y),
                      action: () => (0, nt.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: dS.LightbulbIcon,
                      leadingAccessory: { type: "icon", icon: dS.LightbulbIcon },
                  })
                : null,
        [a, s],
    );
    return (0, c.jsxs)(dT.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": j.intl.string(j.t.ogxXGq),
        onClose: i,
        children: [
            (0, c.jsx)(e0.Dr, {
                id: "apply",
                label: u.transfer.label,
                subtext: u.transfer.subtext,
                action: function () {
                    (0, li.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("866676"),
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
                            (0, c.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: A.JJy.SETTINGS_PREMIUM });
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
                          (0, li.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, c.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: u.uncancel.disabled,
                  })
                : (0, c.jsx)(e0.Dr, {
                      id: "cancel",
                      label: u.cancel.label,
                      subtext: u.cancel.subtext,
                      action: function () {
                          (0, li.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, c.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: u.cancel.disabled,
                      color: "danger",
                  }),
            d,
        ],
    });
}
var df = n(545934),
    dI = n(548118),
    d_ = n(987144),
    dN = n(864310),
    dC = n(290413);
function db(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, dN.A)(t.id);
    return (0, c.jsxs)("div", {
        className: n ?? dC.OA,
        children: [
            (0, c.jsx)(dI.Ay, { className: dC.$f, guild: t, size: dI.Ay.Sizes.MEDIUM }),
            (0, c.jsxs)("div", {
                className: dC.gI,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, c.jsxs)("div", {
                        className: dC.ew,
                        children: [
                            (0, c.jsxs)("div", {
                                className: dC.QW,
                                children: [
                                    (0, c.jsx)(de._, {
                                        className: dC.Wz,
                                        color: nW.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== A.TVA.NONE &&
                                (0, c.jsxs)(c.Fragment, {
                                    children: [
                                        (0, c.jsx)("div", { className: dC.zk }),
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
function dy(e) {
    let { guildId: t } = e,
        n = (0, m.bG)([lg.A], () => lg.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, c.jsxs)("div", {
              className: dC.Nr,
              children: [
                  (0, c.jsx)(db, { guild: n }),
                  (0, c.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: de._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, d_.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: A.ZSU.BUTTON_CTA,
                                  objectType: A.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var dv = n(747381);
let dj =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function dO(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = g.useRef(null),
        a = (0, dp.I5)(t),
        o = g.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, ds.A)(),
        m = g.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === A.TVA.NONE) return "";
                    let n = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: tF.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: tF.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: tF.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: tF.TG[e].limits.screenShareQualityResolution,
                            framerate: tF.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: tF.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: tF.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: tF.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= A.TVA.TIER_2 && (n.push(j.intl.string(j.t.SztbtN)), n.push(j.intl.string(j.t["3GK91n"]))),
                        e >= A.TVA.TIER_3 && n.push(j.intl.string(j.t["XUUJd+"]));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return j.intl.formatToPlainString(j.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        E = g.useMemo(() => {
            if ("" !== m) return m;
            let e = null != t.premiumGuildSubscription ? os.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [m, t.premiumGuildSubscription]),
        h = g.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        );
    return (0, c.jsxs)("div", {
        className: it()(dv.iq, { [dv.Mt]: s }),
        children: [
            (0, c.jsxs)("div", {
                className: dv.kd,
                children: [
                    (0, c.jsx)("img", { alt: "", className: dv.bB, src: dj }),
                    a && null != h
                        ? (0, c.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.Z4ULRD, { date: h }),
                          })
                        : (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(z.E, { variant: "text-sm/medium", color: "text-subtle", children: E }),
                                  u &&
                                      null != o &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)("div", { className: dv.zk }),
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
                                      null != i.trialEndsAt &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)("div", { className: dv.zk }),
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: j.intl.formatToPlainString(j.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, c.jsx)(r2.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, c.jsx)(dx, {
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
                    (0, c.jsx)(t9.D, {
                        innerRef: r,
                        "aria-label": j.intl.string(j.t.PdRCRg),
                        className: dv.Mj,
                        ...e,
                        children: (0, c.jsx)(dE.MoreHorizontalIcon, {
                            size: "xs",
                            color: nW.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        }),
                    }),
            }),
        ],
    });
}
function dL(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, m.bG)([lg.A], () => lg.A.getGuild(t), [t]);
    return (0, c.jsxs)("div", {
        className: dv.Nr,
        children: [
            (0, c.jsx)("div", {
                className: dv.MY,
                children:
                    null != s
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(db, { guild: s, className: dv.OA }),
                                  (0, c.jsx)(x.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, tP.default)(),
                                              (0, dh.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, c.jsx)("div", {
                              className: dv.OA,
                              children: (0, c.jsx)(h.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, c.jsx)(
                    dO,
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
function dR(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = g.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t);
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                df.A.createFromServer(
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
                if ((!(0, dp.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    e in s || (s[e] = []), s[e].push(i);
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > r5.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, c.jsx)("div", {
        className: dv.kR,
        children: os.default
            .keys(s)
            .map((e) => (0, c.jsx)(dL, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var dD = n(502572),
    dP = n(983511),
    dG = n(342744),
    dM = n(496431);
let dU = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, dM.A)(n);
    return (0, c.jsx)(z.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, is.uN)(i, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var dV = n(731536);
function dk(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, m.bG)([oD.A], () => oD.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = g.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) !(0, dp.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i);
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? r5.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === tF.xc.NONE;
    return 0 === s.length
        ? null
        : (0, c.jsxs)("div", {
              className: dV.Nr,
              children: [
                  (0, c.jsxs)("div", {
                      className: dV.MY,
                      children: [
                          (0, c.jsxs)("div", {
                              className: dV._L,
                              children: [
                                  (0, c.jsxs)("div", {
                                      className: dV.MD,
                                      children: [
                                          (0, c.jsx)("img", { alt: "", className: dV.F8, src: dj }),
                                          (0, c.jsx)("div", {
                                              className: it()(dV.qS, "theme-dark"),
                                              children: (0, c.jsx)("span", { className: dV.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsxs)("div", {
                                      className: dV.Qp,
                                      children: [
                                          (0, c.jsx)(z.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: j.intl.format(j.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, c.jsx)(z.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: j.intl.format(j.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, c.jsx)(dD.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, c.jsx)(x.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: de._,
                                      text: j.intl.string(j.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, li.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("677508"),
                                                  n.e("418710"),
                                              ]).then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, c.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, d_.g)({
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
                  s.map((e, t) =>
                      (0, c.jsx)(
                          dw,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, dp.I5)(e),
                              isCanceled: (0, dp.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function dw(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = g.useRef(null),
        u = g.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        s && null != r
            ? (0, c.jsx)(z.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: j.intl.format(j.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != u
              ? (0, c.jsx)(dU, { cooldown: u.getTime() })
              : (0, c.jsx)(z.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = l || s;
    return (0, c.jsxs)("div", {
        className: it()(dV.iq, { [dV.Mt]: i }),
        children: [
            (0, c.jsxs)("div", {
                className: dV.kd,
                children: [(0, c.jsx)("img", { alt: "", className: dV.bB, src: dj }), t],
            }),
            d &&
                (0, c.jsx)(r2.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, c.jsxs)(dT.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": j.intl.string(j.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                l &&
                                    (0, c.jsx)(e0.Dr, {
                                        id: "cancel-boost",
                                        label: j.intl.string(j.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, li.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, c.jsx)(dP.default, { ...e, guildBoostSlot: n }),
                                                );
                                        },
                                    }),
                                s &&
                                    (0, c.jsx)(e0.Dr, {
                                        id: "uncancel-boost",
                                        label: j.intl.string(j.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, li.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, c.jsx)(dG.default, { ...e, guildBoostSlotId: n.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, c.jsx)(t9.D, {
                            innerRef: o,
                            "aria-label": j.intl.string(j.t["UKOtz+"]),
                            className: dV.Mj,
                            ...e,
                            children: (0, c.jsx)(dE.MoreHorizontalIcon, {
                                size: "xs",
                                color: nW.A.colors.INTERACTIVE_TEXT_DEFAULT,
                            }),
                        }),
                }),
        ],
    });
}
var dF = n(834612);
function dB(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = eS.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && s !== tF.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, c.jsxs)("div", {
              className: dF.i,
              children: [
                  (0, c.jsxs)("div", {
                      className: dF.b,
                      children: [
                          (0, c.jsx)(h.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, c.jsx)(z.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, c.jsx)(dR, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, c.jsx)(dk, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var dz = n(333722),
    dX = n(9146);
function dY() {
    return (0, c.jsxs)("div", {
        className: dX.iE,
        children: [
            (0, c.jsx)(h.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, c.jsx)("div", {
                className: dX.kR,
                children: dz.s.map((e, t) => {
                    let n = e.icon;
                    return (0, c.jsxs)(
                        "div",
                        {
                            className: dX.Nr,
                            children: [
                                (0, c.jsx)(n, { className: dX.Kk }),
                                (0, c.jsx)(z.E, {
                                    className: dX.h_,
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
var dH = n(847374),
    dK = n(232122),
    dW = n(665984);
function dZ() {
    let [e, t] = g.useState(null),
        [n, i] = g.useState(null);
    return (0, c.jsxs)("div", {
        className: dW.iE,
        children: [
            (0, c.jsx)(h.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, c.jsx)("ul", {
                className: dW.p_,
                children: dK.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, c.jsxs)(
                        t9.D,
                        {
                            tag: "li",
                            className: it()(dW.Aw, { [dW.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, c.jsxs)("div", {
                                    className: dW.k7,
                                    children: [
                                        (0, c.jsx)(z.E, {
                                            className: dW.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, c.jsx)(dH.a, {
                                            size: "sm",
                                            color: nW.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: dW.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, c.jsx)(z.E, {
                                        className: dW.ZF,
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
var dq = n(182859),
    dQ = n(641641),
    dJ = n(416763);
function d$() {
    let e = eS.A.getArticleURL(A.MVz.GUILD_SUBSCRIPTIONS);
    return (0, c.jsxs)("div", {
        className: dJ.wx,
        children: [
            (0, c.jsxs)("div", {
                className: dJ.Qs,
                children: [
                    (0, c.jsxs)("div", {
                        className: dJ.B5,
                        children: [
                            (0, c.jsx)("img", { alt: "", className: dJ.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, c.jsx)(h.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(dQ.default.hjvcLO),
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
            (0, c.jsx)(dq.A, {
                variant: "member",
                className: dJ.iO,
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
var d0 = n(315629),
    d1 = n(87719),
    d2 = n(961085);
function d3() {
    let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser());
    if (null == e || r5.Ay.hasFreeBoosts(e)) return null;
    let t = eS.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ);
    return (0, c.jsxs)(d0.h, {
        color: "nitro-pink",
        className: d2.vK,
        children: [
            (0, c.jsxs)("div", {
                className: d2.nw,
                children: [
                    (0, c.jsx)("img", { alt: "", className: d2.q3, src: dj }),
                    (0, c.jsxs)("div", {
                        className: d2.Tm,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: tF.M4, boostCount: tF.M4 }),
                            }),
                            (0, c.jsxs)("div", {
                                className: d2.xv,
                                children: [
                                    (0, c.jsx)(rK.t, { className: d2.nE }),
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: tF.M4,
                                            boostCount: tF.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)(x.$, {
                variant: "expressive",
                size: "sm",
                icon: rK.t,
                text: j.intl.string(j.t["8x0jKT"]),
                onClick: d1.e,
            }),
        ],
    });
}
var d6 = n(532991);
function d5() {
    let e = (0, m.bG)([du.A], () => du.A.affinities),
        t = (0, m.bG)([dd.Ay], () => dd.Ay.getFlattenedGuildIds()),
        n = g.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, c.jsxs)("div", {
              className: d6.i,
              children: [
                  (0, c.jsx)(h.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, c.jsx)("div", { className: d6.k, children: n.map((e) => (0, c.jsx)(dy, { guildId: e }, e)) }),
              ],
          });
}
var d4 = n(967246);
function d8(e) {
    let { count: t, disabledReason: i } = e,
        l = eS.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ);
    return (0, c.jsxs)(d0.h, {
        color: "nitro-pink",
        className: d4.vK,
        children: [
            (0, c.jsxs)("div", {
                className: d4.nw,
                children: [
                    (0, c.jsxs)("div", {
                        className: d4.MD,
                        children: [
                            (0, c.jsx)("img", { alt: "", className: d4.F8, src: dj }),
                            (0, c.jsx)("div", {
                                className: it()(d4.qS, "theme-dark"),
                                children: (0, c.jsx)("span", { className: d4.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: d4.Tm,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, c.jsxs)("div", {
                                className: d4.xv,
                                children: [
                                    (0, c.jsx)(rK.t, { className: d4.nE }),
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: tF.M4,
                                            boostCount: tF.M4,
                                            helpdeskArticle: l,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)(dD.A, {
                shouldShow: null != i,
                text: i ?? "",
                "aria-label": i,
                children: (e) =>
                    (0, c.jsx)(x.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: de._,
                        text: j.intl.string(j.t.BMx1iy),
                        disabled: null != i,
                        onClick: () => {
                            (0, li.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("677508"), n.e("418710")]).then(
                                    n.bind(n, 770101),
                                );
                                return (t) =>
                                    (0, c.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, d_.g)({
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
var d7 = n(89150);
function d9(e) {
    let { premiumSubscription: t } = e,
        n = (0, m.bG)([dc.A], () => dc.A.boostSlots),
        i = g.useMemo(() => Object.values(n), [n]),
        l = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()),
        s = (0, m.bG)([du.A], () => du.A.affinities),
        r = (0, m.bG)([dd.Ay], () => dd.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = g.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]).length,
        u = (0, m.bG)([dl.A], () => dl.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, ds.A)({ forceFetch: !0 }),
        A = l?.isPremiumGroupMember(),
        E = t?.isPausedOrPausePending === !0 && d === tF.xc.NONE,
        h = g.useMemo(() => i.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [i]),
        S = E ? j.intl.string(j.t.mOWsF1) : h ? void 0 : j.intl.string(j.t.xr4m5B),
        T = g.useMemo(() => {
            if (null == t) return 0;
            let e = r5.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : Math.max(0, e - o);
        }, [t, i.length, o]);
    return (0, c.jsxs)("div", {
        className: d7.GO,
        children: [
            (0, c.jsx)(ow.kb, { className: d7.ek }),
            (0, c.jsx)(d$, {}),
            (0, c.jsx)(d3, {}),
            T > 0 && (0, c.jsx)(d8, { count: T, disabledReason: S }),
            A && (0, c.jsx)(da.A, {}),
            !a && (0, c.jsx)(dA, {}),
            (0, c.jsxs)("div", {
                className: d7.C_,
                children: [
                    (0, c.jsx)(dB, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, c.jsx)(d5, {}),
                    (0, c.jsx)(dr.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, c.jsx)(dY, {}),
                    (0, c.jsx)(dZ, {}),
                ],
            }),
        ],
    });
}
var ce = n(819677);
let ct = (0, a.E2)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            g.useEffect(() => {
                e2.h.wait(() => {
                    a9.hP(), a9.$o(), (0, dt.CD)(), (0, dn.zS)(null, null, A.tF5.DISCOVERY), (0, dt.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, m.cf)([oD.A], () => ({
                    hasFetchedSubscriptions: oD.A.hasFetchedSubscriptions(),
                    premiumSubscription: oD.A.getPremiumTypeSubscription(),
                })),
                n = (0, di.Y)(),
                i = (0, m.bG)([oR.A], () => oR.A.hasFetchedPaymentSources),
                l = (0, m.bG)([dl.A], () => dl.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = g.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, c.jsx)("div", { className: it()(ce.kL, ce.Lq), children: (0, c.jsx)(a3.y, {}) })
                : (0, c.jsxs)("div", {
                      className: ce.kL,
                      children: [
                          (0, c.jsx)("div", { className: ce.Tp }),
                          (0, c.jsx)("div", { className: ce.Qs, children: (0, c.jsx)(d9, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    cn = (0, a.zZ)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [ct] }),
    ci = (0, a.t_)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [cn],
    }),
    cl = (0, a.i4)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: de._,
        buildLayout: () => [ci],
    });
var cs = n(153659),
    cr = n(155984),
    ca = n(357758),
    co = n(262077),
    cu = n(281445),
    cd = n(933832),
    cc = n(624479),
    cg = n(626584),
    cm = n(131607),
    cA = n(95035),
    cE = n(196736),
    ch = n(685743),
    cS = n(349085),
    cT = n(342942),
    cp = n(376205),
    cx = n(252589),
    cf = n(758836),
    cI = n(49999),
    c_ = n(632847),
    cN = n(439050);
let cC = new cg.A("GameServerSubscriptionsSection");
function cb(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function cy(e, t) {
    return (
        e.hasSubscription === t.hasSubscription &&
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let cv = g.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: l } = (0, eL.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, cS.A)(t.gameId, "cover") ?? t.coverUrl,
        [o, u] = (0, cm.kn)([er.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== er.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        E = uT.default.getId() ?? "0",
        { handleCopyServerIp: h, animateCopyIcon: S } = (0, ch.A)(E, t.id, tv.A.GAME_SERVER_PAGE, t.serverIp),
        T = g.useCallback(() => {
            (0, cT.A)({
                provider: cu.X.SHOCKBYTE,
                onAccept: () => {
                    u(cI.i.TAKE_ACTION), h();
                },
            });
        }, [u, h]),
        {
            hasSubscription: p,
            priceLabel: f,
            dateLabel: I,
            isCanceled: _,
            isDanger: N,
        } = (0, m.bG)(
            [oD.A, ux.A],
            () => {
                let e = null != s ? oD.A.getSubscriptionById(s) : null;
                if (null == e)
                    return { hasSubscription: !1, priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? ux.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? j.intl.formatToPlainString(j.t.AbOLNu, { price: (0, oi.$g)(u, o.priceCurrency) })
                            : null,
                    c = cb(e.currentPeriodEnd);
                return {
                    hasSubscription: !0,
                    priceLabel: d,
                    dateLabel: t
                        ? j.intl.formatToPlainString(c_.default["3aEgK6"], { date: c })
                        : l
                          ? j.intl.formatToPlainString(c_.default.KFSA3M, { date: c })
                          : j.intl.formatToPlainString(c_.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, n, i],
            cy,
        ),
        C = g.useCallback(() => {
            if (null == s) return;
            let e = oD.A.getSubscriptionById(s),
                t = null != e ? cb(e.currentPeriodEnd) : "";
            (0, nZ.A)({
                title: j.intl.string(c_.default.TEYPNR),
                subtitle: j.intl.formatToPlainString(c_.default.XR1WrB, { date: t }),
                confirmText: j.intl.string(j.t["cY+Oob"]),
                cancelText: j.intl.string(c_.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        await a9.M2(s, l), await a9.hP();
                    } catch (e) {
                        cC.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        b = g.useCallback(() => {
            if (null == s) return;
            let e = oD.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? ux.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, oi.$g)(u, o.priceCurrency) : "",
                c = cb(e.currentPeriodEnd);
            (0, nZ.A)({
                title: j.intl.string(c_.default.o96qbc),
                subtitle: j.intl.formatToPlainString(c_.default["7n6Qq+"], { price: d, date: c }),
                confirmText: j.intl.string(j.t.iIvF2z),
                cancelText: j.intl.string(j.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, dn.ur)(r);
                        let t = e.items;
                        await a9.nV(
                            e,
                            { status: A.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, r5.UC)(t, e.currency),
                            l,
                        ),
                            await a9.hP();
                    } catch (e) {
                        cC.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, n, i]),
        y = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, c.jsxs)("div", {
        className: cN.nM,
        children: [
            (0, c.jsxs)("div", {
                className: cN.M4,
                children: [
                    (0, c.jsxs)("div", {
                        className: cN.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, c.jsx)("img", { className: cN.uP, src: a, alt: "" }),
                            (0, c.jsx)("div", { className: cN.tw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: cN.CR,
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
                            y &&
                                (d
                                    ? (0, c.jsxs)("div", {
                                          className: cN.CQ,
                                          children: [
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, c.jsx)(t9.D, {
                                                  className: cN.cL,
                                                  onClick: h,
                                                  "aria-label": j.intl.string(j.t.OpuAlK),
                                                  children: S
                                                      ? (0, c.jsx)(cd.CheckmarkLargeIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, c.jsx)(cc.CopyIcon, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, c.jsx)(cA.A, { onClick: T, children: j.intl.string(c_.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, c.jsxs)("div", {
                className: cN.Rd,
                children: [
                    (0, c.jsxs)("div", {
                        className: cN.Ff,
                        children: [
                            null != f &&
                                (0, c.jsx)(z.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: f,
                                }),
                            null != I &&
                                (N
                                    ? (0, c.jsxs)("div", {
                                          className: cN.ez,
                                          children: [
                                              (0, c.jsx)(iF.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: I,
                                              }),
                                          ],
                                      })
                                    : (0, c.jsx)(z.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: I,
                                      })),
                        ],
                    }),
                    p &&
                        (_
                            ? (0, c.jsx)(x.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: j.intl.string(j.t.iIvF2z),
                                  onClick: b,
                              })
                            : (0, c.jsx)(x.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: j.intl.string(j.t["ETE/oC"]),
                                  onClick: C,
                              })),
                ],
            }),
        ],
    });
});
function cj(e) {
    let { servers: t } = e,
        n = (0, cE.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, cx.Y)(),
        l = (0, m.bG)([l9.default], () => r5.Ay.canUseShopDiscounts(l9.default.getCurrentUser())),
        s = g.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]),
        r = (0, m.yK)([oD.A], () => (0, cp.HY)(t, i, (e) => oD.A.getSubscriptionById(e)), [t, i]);
    g.useEffect(() => {
        let e = r.filter((e) => !ux.A.isLoadedForSKU(e) && !ux.A.isFetchingForSKU(e));
        e.length > 0 && (0, dn.jv)(e).catch(() => {});
    }, [r]);
    let a = g.useCallback(() => {
        (0, tP.default)(), (0, tq.pX)(A.BVt.COLLECTIBLES_SHOP_WITH_TAB(cf.G2.GAME_SERVERS));
    }, []);
    return (0, c.jsxs)("div", {
        className: cN.uW,
        children: [
            (0, c.jsxs)("div", {
                className: cN.wx,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: j.intl.string(c_.default.vCzwM7),
                    }),
                    (0, c.jsxs)("div", {
                        className: cN.h_,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.string(c_.default.y85Eg9),
                            }),
                            n &&
                                (0, c.jsx)(cA.A, {
                                    onClick: a,
                                    children: (0, c.jsx)(z.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: j.intl.string(c_.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)("div", {
                className: cN.p_,
                children: t.map((e) =>
                    (0, c.jsx)(cv, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var cO = n(55766),
    cL = n(696986),
    cR = n(364036);
function cD(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)(h.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, c.jsx)(cL.h, { size: 4 }),
            (0, c.jsx)(z.E, { variant: "text-md/normal", className: cR.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, c.jsx)(cL.h, { size: 24 }),
            (0, c.jsxs)("div", {
                className: cR.Nr,
                children: [
                    (0, c.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: cR.RI }),
                    (0, c.jsxs)("div", {
                        className: cR.FS,
                        children: [
                            (0, c.jsx)(h.D, {
                                variant: "heading-xl/semibold",
                                className: cR.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-md/normal",
                                className: cR.h_,
                                children: j.intl.format(j.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, c.jsx)(x.$, {
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
var cP = n(872351),
    cG = n(9113),
    cM = n(599941),
    cU = n(384684),
    cV = n(2242);
let ck = [];
var cw = n(885574),
    cF = n(912851),
    cB = n(182744);
let cz = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, c.jsx)(t9.D, {
        onClick: i ? void 0 : n,
        className: cB.x6,
        children: (0, c.jsxs)("div", {
            className: cB.hQ,
            children: [
                i
                    ? (0, c.jsx)(a3.y, { type: a3.y.Type.PULSING_ELLIPSIS, className: cB.__invalid_spinner })
                    : (0, c.jsx)(z.E, { variant: "text-md/medium", className: cB.Pf, children: t }),
                (0, c.jsx)(dH.a, { size: "md", color: "currentColor", className: cB.UE }),
            ],
        }),
    });
};
var cX = n(465932),
    cY = n(543767),
    cH = n(951555),
    cK = n(790284),
    cW = n(636194),
    cZ = n(624456),
    cq = n(710144),
    cQ = n(815332),
    cJ = n(162093),
    c$ = n(557506);
function c0(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: l, onClose: s } = e,
        r = (0, tU.GV)(),
        { analyticsLocations: a } = (0, eL.Ay)(tv.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = g.useState(!1),
                [i, l] = g.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return n(!0), await a9.M2(t, e), !0;
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
    async function m() {
        (await o(l.id)) && s();
    }
    let A = i.role_benefits.benefits.filter((e) => e.ref_type === cV.bN.CHANNEL),
        E = i.role_benefits.benefits.filter((e) => e.ref_type === cV.bN.INTANGIBLE),
        h = il()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        S = j.intl.formatToPlainString(j.t.KsMRP5, {
            numChannels: A.length,
            numAdditionalBenefits: E.length,
            subscriptionEndDate: h,
        });
    return (0, c.jsx)(ln.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: j.intl.string(j.t.EP6EPb), variant: "secondary", onClick: s },
            { variant: "critical-primary", text: j.intl.string(j.t.F6lUDF), onClick: m, loading: d },
        ],
        title: j.intl.string(j.t.O6l5tM),
        subtitle: S,
        onClose: s,
        children: (0, c.jsxs)(F.B, {
            gap: 8,
            children: [
                null != u ? (0, c.jsx)(ik.w, { type: "critical", children: u.message }) : null,
                (0, c.jsx)(cJ.x, { listingId: i.id, guildId: n.guild_id, className: c$.P }),
            ],
        }),
    });
}
var c1 = n(319225),
    c2 = n(746080),
    c3 = n(883616);
function c6(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, c.jsxs)("div", {
        className: c3.L0,
        children: [
            (0, c.jsxs)("div", {
                className: c3.a5,
                children: [
                    (0, c.jsx)(h.D, { variant: "heading-deprecated-12/semibold", className: c3.HU, children: t }),
                    i &&
                        (0, c.jsx)(i8.m, {
                            text: l,
                            children: (0, c.jsx)(cw.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: c3.Mo,
                            }),
                        }),
                ],
            }),
            (0, c.jsx)(h.D, { variant: "heading-xl/semibold", className: c3.sx, children: n }),
        ],
    });
}
function c5(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eL.Ay)(),
        [i] = (0, cY.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tv.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        l = (0, m.bG)([oR.A], () => oR.A.hasFetchedPaymentSources);
    return null != i && l ? (0, c.jsx)(cH.A, { subscription: t, currentInvoicePreview: i }) : (0, c.jsx)(a3.y, {});
}
function c4(e) {
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
        : (0, c.jsx)(tW.D, {
              label: j.intl.string(j.t["4neDM+"]),
              children: (0, c.jsx)("div", {
                  className: c3.__invalid_rowButtons,
                  children: n
                      ? (0, c.jsx)(x.$, { variant: "primary", text: j.intl.string(j.t.y3mAE4), onClick: r, loading: i })
                      : (0, c.jsxs)(c.Fragment, {
                            children: [
                                !t && !l && (0, c.jsx)(cz, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                (0, c.jsx)(cz, { label: j.intl.string(j.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let c8 = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, cZ.M)(e),
                n = (0, m.bG)([cW.A], () => cW.A.getSubscriptionListingForPlan(t)),
                i = (0, m.bG)([cW.A], () =>
                    null != n ? cW.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, m.bG)([lg.A], () => lg.A.getGuild(i?.guild_id)),
                [s, r] = g.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, cM.XE)();
            g.useEffect(() => {
                s && null != l && null == cW.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = il()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, oi.$g)(t.price, t.currency) : "",
                              l = il()(t.createdAt).format("M/D/YY"),
                              s = t.status === A.Dmq.CANCELED,
                              r = t.status === A.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: l,
                              nextRenewalDate: n,
                              nextRenewalLabel: s ? j.intl.string(j.t.UAfot2) : j.intl.string(j.t.CVjLcM),
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
        [u, d] = g.useState(!1),
        E = (0, tU.GV)(),
        { analyticsLocations: h } = (0, eL.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: S } = (0, cX.MH)(l?.id),
        T = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function p() {
        try {
            d(!0), await a9.QP(t, h), (0, c1.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
        } finally {
            d(!1);
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
    return (0, c.jsxs)("div", {
        className: c3.kL,
        children: [
            (0, c.jsx)(cq.A, {
                onClick: r,
                className: c3.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != l && (0, c.jsx)(dI.Ay, { guild: l, active: !0, size: dI.Ay.Sizes.MEDIUM }),
                            (0, c.jsxs)("div", {
                                className: c3.if,
                                children: [
                                    (0, c.jsx)(z.E, {
                                        variant: "text-md/medium",
                                        className: c3.J5,
                                        children: null != l ? l.name : j.intl.string(j.t["He+cmd"]),
                                    }),
                                    (0, c.jsxs)("div", {
                                        className: c3.xp,
                                        children: [
                                            (0, c.jsx)(z.E, {
                                                variant: "text-sm/normal",
                                                className: c3.KR,
                                                children: n.name,
                                            }),
                                            x
                                                ? (0, c.jsx)(e9.Lp, { text: j.intl.string(j.t["7uFZGt"]) })
                                                : b
                                                  ? (0, c.jsx)(e9.Lp, {
                                                        text: j.intl.string(j.t["6anton"]),
                                                        color: nW.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : f
                                                    ? (0, c.jsx)(i8.m, {
                                                          text: j.intl.string(j.t.eSuJE2),
                                                          children: (0, c.jsx)("div", {
                                                              children: (0, c.jsx)(e9.Lp, {
                                                                  className: c3.qc,
                                                                  text: j.intl.string(j.t.NrRwIl),
                                                                  color: nW.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            T
                                                ? (0, c.jsx)(i8.m, {
                                                      text: j.intl.string(j.t.nv1IqK),
                                                      children: (0, c.jsx)("div", {
                                                          children: (0, c.jsx)(e9.Lp, {
                                                              text: j.intl.string(j.t["sBl3X/"]),
                                                              color: nW.A.colors.BACKGROUND_MOD_MUTED.css,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsx)(t9.D, {
                                onClick: i(r),
                                "aria-label": j.intl.string(j.t.e5eQOy),
                                "aria-controls": E,
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, c.jsx)(dH.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: it()(c3.D6, { [c3.S7]: s }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && s
                ? (0, c.jsxs)("div", {
                      id: E,
                      children: [
                          (0, c.jsx)("div", { className: c3.yF }),
                          (0, c.jsx)(cQ.A, { groupListingId: i.id, subscription: t, className: c3.kE }),
                          (0, c.jsxs)("div", {
                              className: c3.Zx,
                              children: [
                                  (0, c.jsx)(c6, { label: C, value: N }),
                                  (0, c.jsx)(c6, {
                                      label: j.intl.string(j.t.dltUMH),
                                      value: I,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, c.jsx)(c6, { label: j.intl.string(j.t.AOcwWB), value: _ }),
                              ],
                          }),
                          (0, c.jsx)(cL.h, { size: 16 }),
                          !x &&
                              !T &&
                              (0, c.jsx)(tW.D, {
                                  label: j.intl.string(j.t.wmMFvA),
                                  children: (0, c.jsx)(c5, { subscription: t }),
                              }),
                          !y &&
                              (0, c.jsx)(c4, {
                                  isTrial: b,
                                  isCancelled: x,
                                  isResubscribing: u,
                                  shouldHideRoleSubscriptionEntryPoints: S,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          (e = { groupListing: i, listing: n, subscription: t }),
                                              (0, li.openModal)((t) => (0, c.jsx)(c0, { ...t, ...e }));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, tq.pX)(A.BVt.CHANNEL(l.id, c2.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tP.default)(),
                                          cF.A.show(
                                              A.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              j.intl.string(j.t.DvbaM4),
                                              () => {
                                                  cK.A.setState({ subsection: eI.nR }),
                                                      (0, nt.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL);
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
var c7 = n(661097);
let c9 = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, m.bG)([cU.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [cU.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? cV.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? cV.M_.NONE
                                  : cV.M_.IN_SUBSCRIPTION_SERVER;
                        })([cU.A]),
                    ) === cV.M_.SUBSCRIBED,
                n = (0, m.bG)([oD.A], () => oD.A.getActiveGuildSubscriptions()),
                i = g.useRef(!1);
            return (
                g.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = oD.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !oD.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), a9.hP());
                }, [e, t]),
                n ?? ck
            );
        })(),
        { loading: i } = (0, cM.eb)(n);
    return ((0, cG.A)(or.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, c.jsx)(a3.y, {})
        : 0 === n.length
          ? null
          : (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(x.$, { text: j.intl.string(j.t.hqyhKQ), icon: cP.z, variant: "secondary", onClick: t }),
                    (0, c.jsx)(cL.h, { size: 10 }),
                    (0, c.jsx)(nq.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, c.jsx)("div", {
                            className: c7.A,
                            children: n.map((e) => (0, c.jsx)(c8, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var ge = n(327479),
    gt = n(932012);
function gn(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)(h.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, c.jsx)(cL.h, { size: 4 }),
            (0, c.jsx)(z.E, { variant: "text-md/normal", className: gt.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, c.jsx)(cL.h, { size: 24 }),
            (0, c.jsxs)("div", {
                className: gt.Nr,
                children: [
                    (0, c.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: gt._e }),
                    (0, c.jsxs)("div", {
                        className: gt.FS,
                        children: [
                            (0, c.jsx)(h.D, {
                                variant: "heading-xl/semibold",
                                className: gt.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-md/normal",
                                className: gt.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, c.jsx)(ge.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var gi = n(548411),
    gl = n(417098),
    gs = n(143582),
    gr = n(915043),
    ga = n(631466);
function go(e) {
    let { className: t, header: n, headerClassName: i, children: l } = e,
        s = g.useMemo(() => {
            let e = !1;
            return (
                g.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, c.jsxs)("div", {
        className: it()(ga.iE, t),
        children: [
            (0, c.jsx)("div", { className: it()(ga.wx, i), children: n }),
            s && (0, c.jsx)("div", { className: ga.Qs, children: l }),
        ],
    });
}
var gu = n(885996),
    gd = n(144165),
    gc = n(664121),
    gg = n(950305),
    gm = n(943775),
    gA = n(123791),
    gE = n(900797),
    gh = n(611643);
let gS = g.createContext({ isOpen: !1, toggleOpen: () => {} });
function gT(e) {
    let { children: t } = e,
        [n, i] = g.useReducer((e) => !e, !1),
        l = g.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, c.jsx)(gS.Provider, { value: l, children: t(n) });
}
gT.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = g.useContext(gS),
        s = i ? gE.t : dH.a,
        r = null != n ? n : i ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, c.jsxs)(t9.D, {
        className: it()(gh.L, t),
        onClick: l,
        children: [
            (0, c.jsx)(z.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, c.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var gp = n(627363),
    gx = n(243217),
    gf = n(328968),
    gI = n(163437),
    g_ = n(3432);
function gN(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var gC = n(562312),
    gb = (((i = {})[(i.LOADING = 0)] = "LOADING"), (i[(i.DONE = 1)] = "DONE"), (i[(i.ERROR = 2)] = "ERROR"), i);
function gy(e) {
    let { subscription: t, navigateToSwitchPlan: n, loadingState: i } = e,
        l = t.metadata?.application_subscription_guild_id,
        { renewalMutations: s, planId: r } = t,
        {
            appId: a,
            plan: o,
            storeListing: u,
            isGuildSubscription: d,
            subscriptionForGuild: E,
            sku: S,
            isCancelled: T,
            isOrphanedGuildSubscription: p,
            renewalPlan: x,
        } = (0, m.cf)([ux.A, uf.A, gf.A, lg.A], () => {
            let e,
                n = ux.A.get(r),
                i = null != n ? uf.A.get(n.skuId) : void 0,
                a = i?.applicationId,
                o = null != n ? gf.A.getForSKU(n.skuId) : null,
                u = null != o && (0, gI.PJ)(o.skuFlags),
                d = u && null != l ? lg.A.getGuild(l) : void 0,
                c = (0, gI.Uo)(t, i),
                g = u && null != l && null == d;
            if (!1 === c && null != s && s.items.length > 0) {
                let t = s.items[0];
                e = ux.A.get(t.planId) ?? void 0;
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
        }, [l, r, s, t]),
        { data: f } = (0, gp.YY)(a),
        I = g.useMemo(() => (null != f ? (0, gm.A)(f, 100) : null), [f]),
        _ = S?.deleted ?? !1,
        N = null != S && (0, gI.Se)(S),
        C = t.status === A.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eL.Ay)(),
        [y] = (0, cY.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tv.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = gN(t.currentPeriodEnd),
        O = 0 === i;
    return (0, c.jsxs)(go, {
        headerClassName: gC.dL,
        header:
            !1 === O
                ? (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsxs)("div", {
                              className: gC.VW,
                              children: [
                                  null != I &&
                                      (0, c.jsx)(gd._, { src: I.href, imageClassName: gC.Z2, width: 40, height: 40 }),
                                  (0, c.jsxs)("div", {
                                      className: gC.aF,
                                      children: [
                                          (0, c.jsx)(h.D, {
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
                              className: gC.Pz,
                              children:
                                  null != f &&
                                  null != u &&
                                  null != S &&
                                  (0, c.jsx)(gR, {
                                      subscription: t,
                                      app: f,
                                      guild: E,
                                      sku: S,
                                      storeListing: u,
                                      isCancelled: T,
                                      isOrphanedGuildSubscription: p,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: x?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, c.jsx)(a3.y, { type: a3.t.PULSING_ELLIPSIS }),
        children: [
            T &&
                (0, c.jsx)(gL, {
                    type: "warning",
                    title: N
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !T && p && (0, c.jsx)(gL, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            C && (0, c.jsx)(gL, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, c.jsxs)("div", {
                className: gC.zH,
                children: [
                    (0, c.jsx)(gO, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, c.jsxs)(c.Fragment, {
                                  children: [
                                      (0, c.jsxs)("span", {
                                          className: gC.yW,
                                          children: [(0, c.jsx)(gc.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != E &&
                                          (0, c.jsxs)("span", {
                                              className: gC._t,
                                              children: [
                                                  (0, c.jsx)(z.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: E.name }),
                                                  }),
                                                  (0, c.jsx)(dI.Ay, { guild: E, size: dI.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, c.jsxs)("span", {
                                  className: gC.yW,
                                  children: [(0, c.jsx)(gg.UserIcon, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, c.jsx)(gv, { invoicePreview: y, subscriptionPlan: o }),
                    (0, c.jsx)(gO, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: gN(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, c.jsx)(gj, { isCancelled: T, subscriptionPeriodEnd: v, renewalPlan: x }),
                ],
            }),
            (0, c.jsx)(gP, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: _,
                isCancelled: T,
            }),
            null != f &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, c.jsx)(gD, { appId: f.id, listingBenefits: u.benefits }),
        ],
    });
}
function gv(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, c.jsx)(gO, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let i = (0, oi.CE)((0, oi.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, c.jsx)(gO, { title: j.intl.string(j.t.KI7ERx), content: i });
    let s = (0, oi.CE)((0, oi.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, c.jsx)(gO, {
        title: j.intl.string(j.t.KI7ERx),
        content: (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(z.E, { variant: "text-sm/semibold", children: s }),
                s !== i &&
                    (0, c.jsx)(i8.m, {
                        text: j.intl.format(j.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, c.jsx)(z.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, c.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function gj(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, oi.CE)((0, oi.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, c.jsx)(gO, {
            title: j.intl.string(j.t.hIhAM3),
            content: (0, c.jsxs)(c.Fragment, {
                children: [
                    (0, c.jsx)(z.E, { variant: "text-sm/medium", children: n }),
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, c.jsx)(gO, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: n });
}
function gO(e) {
    let { title: t, content: n } = e;
    return (0, c.jsxs)("div", {
        className: gC.nM,
        children: [
            (0, c.jsx)(z.E, { variant: "text-sm/medium", children: t }),
            (0, c.jsx)(z.E, { variant: "text-sm/medium", className: gC.u4, children: n }),
        ],
    });
}
function gL(e) {
    let { type: t, title: n } = e;
    return (0, c.jsx)(rW.p, {
        messageType: "warning" === t ? rW.Y.WARNING : rW.Y.ERROR,
        className: gC.Xm,
        children: (0, c.jsx)(z.E, { variant: "text-sm/normal", children: n }),
    });
}
function gR(e) {
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
        A = (0, gI.Se)(l),
        { analyticsLocations: E } = (0, eL.Ay)(),
        [h, S] = g.useState(!1),
        T = (0, gA.C)(t.id),
        p = (0, m.bG)([uf.A], () => uf.A.getParentSKU(i.skuId), [i.skuId]),
        f = g.useMemo(() => {
            var e, t;
            let n;
            return null == p
                ? []
                : ((e = i.id),
                  (t = T.subscriptions),
                  (n = new Set(p.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, T, p]),
        I = 0 !== f.length;
    async function _() {
        try {
            S(!0);
            let { subscription: e } = await (0, a9.QP)(s, E);
            if (null == e) return;
            (0, li.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("888454"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, c.jsx)(t, { ...n, storeListing: i, subscription: gx.A.createFromServer(e) });
            });
        } finally {
            S(!1);
        }
    }
    return (0, c.jsxs)("div", {
        className: gC.fw,
        children: [
            A || (r && a)
                ? null
                : r
                  ? (0, c.jsx)(x.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t.QtMnkW),
                        onClick: _,
                        loading: h,
                    })
                  : (0, c.jsx)(x.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t["E8G/tr"]),
                        onClick: function () {
                            (0, li.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("509032"), n.e("622800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, c.jsx)(e, { ...n, application: t, storeListing: i, subscription: s, guild: o });
                            });
                        },
                    }),
            I &&
                null != p &&
                !1 === r &&
                !1 === a &&
                (0, c.jsx)(x.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(j.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: s,
                            alternativeListings: f,
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
function gD(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, c.jsx)(gT, {
        children: (e) =>
            (0, c.jsxs)("div", {
                className: gC.PX,
                children: [
                    (0, c.jsxs)("div", {
                        className: gC.wV,
                        children: [
                            e && (0, c.jsx)(z.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, c.jsx)(gT.Toggle, {
                                className: gC.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, c.jsx)(gu.FY, { header: i, icon: (0, g_.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function gP(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, c.jsx)("div", {
                className: gC.Ji,
                children: (0, c.jsx)(tW.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, c.jsx)(a3.y, { type: a3.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, c.jsx)("div", {
                  className: gC.Ji,
                  children: (0, c.jsxs)(gl.$T, {
                      color: gl.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, c.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, c.jsx)("div", {
                  className: gC.Ji,
                  children: (0, c.jsx)(tW.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, c.jsx)(cH.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var gG = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
n(938796);
var gM = n(38405);
let gU = (0, m.UT)(ux.A, {
    getQueryId: A.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = ux.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && gM.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, dn.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var gV = n(240248),
    gk = n(237218),
    gw = n(763064);
function gF(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = g.useState(!1),
        [r, a] = g.useState(null),
        o =
            null != r &&
            (0, c.jsx)("button", {
                className: gw.x6,
                onClick: () => s((e) => !e),
                children: (0, c.jsxs)(z.E, {
                    className: gw.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        l
                            ? (0, c.jsx)(gE.t, { color: nW.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, c.jsx)(dH.a, { color: nW.A.colors.TEXT_BRAND, size: "xs" }),
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
    }, [m, t, n]);
    let A = "auto";
    return (
        null != r && (A = l ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, c.jsxs)("div", {
            children: [
                (0, c.jsx)(z.E, {
                    ...i,
                    className: gw.Qs,
                    lineClamp: l ? void 0 : n,
                    ref: d,
                    style: { height: A },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var gB = n(920352);
function gz(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = g.useMemo(() => (null == n.thumbnail ? null : (0, gk.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = gU(n.skuId),
        u = g.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, oi._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, c.jsxs)(go, {
              className: it()(gB.iE, i),
              header: (0, c.jsxs)(c.Fragment, {
                  children: [
                      (0, c.jsxs)("div", {
                          className: gB.qd,
                          children: [
                              null != a &&
                                  (0, c.jsx)(gd._, { src: a.href, imageClassName: gB.rW, width: 48, height: 48 }),
                              (0, c.jsxs)("div", {
                                  children: [
                                      (0, c.jsx)(h.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, c.jsx)(z.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, gV.uJ)(r) &&
                      (0, c.jsx)("div", {
                          className: gB.h_,
                          children: (0, c.jsx)(gF, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, c.jsx)("div", {
                          className: gB.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, c.jsx)(gu.FY, { header: n, icon: (0, g_.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var gX = n(185438),
    gY = n(683380);
function gH(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, gm.A)(t, 100),
        u = (0, gI.PJ)(r.flags),
        d = u ? gc.R : gg.UserIcon,
        g = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        A = n.metadata?.application_subscription_guild_id,
        E = (0, m.bG)([lg.A], () => (u && null != A ? lg.A.getGuild(A) : void 0), [A, u]),
        S = (0, m.bG)([uf.A], () => {
            if (null != a) return uf.A.get(a);
        }, [a]),
        T = gN(n.currentPeriodEnd);
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsxs)("div", {
                className: gY.wx,
                children: [
                    null != o && (0, c.jsx)(gd._, { src: o.href, imageClassName: gY.Z2, width: 48, height: 48 }),
                    (0, c.jsxs)("div", {
                        children: [
                            (0, c.jsx)(h.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, c.jsxs)("div", {
                                className: gY.p4,
                                children: [
                                    (0, c.jsxs)(h.D, {
                                        variant: "heading-md/normal",
                                        className: gY.N4,
                                        children: [(0, c.jsx)(d, { size: "xs", color: "currentColor" }), " ", g],
                                    }),
                                    null != E &&
                                        (0, c.jsxs)(c.Fragment, {
                                            children: [
                                                (0, c.jsx)(z.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, c.jsxs)("span", {
                                                    className: gY.vP,
                                                    children: [
                                                        (0, c.jsx)(dI.Ay, { guild: E, size: dI.Ay.Sizes.SMOL }),
                                                        (0, c.jsx)(h.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: j.intl.format(j.t["7ZD8p1"], {
                                                                guildName: E.name,
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
            (0, c.jsx)(gT, {
                children: (e) =>
                    (0, c.jsxs)("div", {
                        className: gY._B,
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
                            (0, c.jsx)(gT.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, c.jsxs)("div", {
                className: gY.x0,
                children: [
                    (0, c.jsx)(gz, {
                        storeListing: i,
                        className: gY.o3,
                        cta: (0, c.jsxs)("div", {
                            className: gY.cJ,
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
                    l.map((e) =>
                        e.skuId === a
                            ? (0, c.jsx)(
                                  gz,
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
                            : (0, c.jsx)(gK, { storeListing: e, guildId: A, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function gK(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, gX.A)({
            analyticsLocation: A.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, c.jsx)(gz, {
        storeListing: t,
        cta: (0, c.jsx)(x.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: l }),
    });
}
class gW extends g.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, c.jsxs)(gl.$T, {
                  color: gl.Hv.DANGER,
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
function gZ(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = g.useState({ route: gG.HOME }),
        { route: s } = i;
    function r() {
        l({ route: gG.HOME });
    }
    let a = (e) => {
            l({ route: gG.SWITCH_APP_PLANS, ...e }), n(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = g.useState({});
    g.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: gb.LOADING })),
                (0, gs._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: gb.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: gb.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, gr.E)(),
        m = d !== gr.mJ.LOADED;
    switch (s) {
        case gG.HOME:
            return (0, c.jsx)(c.Fragment, {
                children: t.map((e) =>
                    (0, c.jsx)(
                        gW,
                        {
                            subscription: e,
                            children: (0, c.jsx)(gy, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: m ? gb.LOADING : (o[e.id] ?? gb.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case gG.SWITCH_APP_PLANS:
            let { route: A, ...E } = i;
            return (0, c.jsx)(gH, { ...E, navigateToHome: r });
        default:
            (0, n7.xb)(s);
    }
}
var gq = n(707989);
function gQ(e) {
    let { onGoBack: t } = e,
        n = (0, m.yK)(
            [oD.A],
            () =>
                oD.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = g.useState();
    return (
        null == i && (i = (0, c.jsx)(gJ, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, c.jsxs)("div", {
            children: [
                i,
                (0, c.jsx)("div", {
                    className: gq.A,
                    children: (0, c.jsx)(gZ, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, c.jsx)(gJ, {
                                    title: e,
                                    onBack: () => {
                                        t(), l(void 0);
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
function gJ(e) {
    let { onBack: t, title: n } = e;
    return (0, c.jsxs)("div", {
        className: gq.D,
        children: [
            (0, c.jsx)(i5.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, c.jsx)(gi.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, c.jsx)(h.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var g$ = n(881489),
    g0 = n(366999),
    g1 = n(109447),
    g2 = n(391659);
function g3(e) {
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
        ? ((t = j.intl.string(g1.default["/S02sx"])), (n = j.intl.string(g1.default.OPJNST)))
        : i
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (n = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (n = r === tF.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = it()({ [g2.Hs]: i, [g2.mT]: !i }),
        d = it()({ [g2.CQ]: i, [g2.ZM]: !i }),
        g = it()({ [g2.EM]: !i });
    return (0, c.jsxs)("div", {
        className: g2.r6,
        children: [
            (0, c.jsxs)("div", {
                className: g2.Nv,
                children: [
                    (0, c.jsx)(h.D, { variant: "heading-md/semibold", className: g, children: t }),
                    null !== n && (0, c.jsx)(z.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, c.jsx)("div", {
                    className: g2.ZS,
                    children: (0, c.jsx)("div", {
                        className: u,
                        children: (0, c.jsx)(z.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let g6 = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, r5.kX)(t),
        r = s.length > 0,
        a = (0, g0.Ay)(t.endsAt, g0.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, c.jsx)("div", {
        children: (0, c.jsxs)("div", {
            className: it()(n, g2.f8),
            children: [
                (0, c.jsx)("div", {
                    className: g2.J_,
                    children: (0, c.jsxs)("div", {
                        className: g2.Bh,
                        children: [
                            (0, c.jsx)("div", {
                                className: g2.xt,
                                children: (0, c.jsx)(rK.t, { size: "md", color: "white", className: g2.T8 }),
                            }),
                            (0, c.jsx)("div", {
                                className: g2.pt,
                                children: (0, c.jsx)(h.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, c.jsx)(z.E, {
                                className: g2.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, c.jsx)(g3, {
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
var g5 = n(983048);
function g4(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, m.yK)([ux.A], () => [ux.A.get(i), null != s ? ux.A.get(s.planId) : null]);
    if (null == o || r5.Ay.getInterval(i).intervalType !== tF.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        g = o.skuId === d,
        E = r5.Ay.getDisplayName(i);
    if (a) t = j.intl.string(g1.default["5asczk"]);
    else if (g && null != s) {
        let e;
        e = new Date(s.status === A.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, r5._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: n ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: E });
    let S = n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, c.jsxs)("div", {
        className: g2.Bh,
        children: [
            (0, c.jsx)("div", {
                className: it()({
                    [g2.sr]: o.skuId === tF.pe.TIER_0,
                    [g2.lP]: o.skuId === tF.pe.TIER_1,
                    [g2.eb]: o.skuId === tF.pe.TIER_2,
                }),
                children: (0, c.jsx)(rK.t, { size: "md", color: "currentColor", className: g2.Kk }),
            }),
            (0, c.jsxs)("div", {
                className: g2.pt,
                children: [
                    (0, c.jsx)(h.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: E }),
                    }),
                    !S &&
                        (0, c.jsx)(h.D, {
                            className: g2.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, c.jsx)(z.E, {
                className: g2.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let g8 = function (e) {
    let { className: t, entitlements: n } = e,
        i = k()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, m.yK)([ua.A], () => ua.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, m.bG)([oD.A], () => oD.A.getPremiumSubscription()),
        r = (0, m.bG)([oD.A], () => null == oD.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tF.gD.PREMIUM_MONTH_TIER_1),
        o = (0, m.bG)([l9.default], () => l9.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)("div", {
                className: it()(t, g2.xF, g2.J_),
                children: Object.keys(i).map((e) =>
                    (0, c.jsx)(
                        g4,
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
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsx)(z.E, {
                            className: g2.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, c.jsx)(g5.i, {}),
                    ],
                }),
        ],
    });
};
var g7 = n(902782);
function g9(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, eL.Ay)(),
        [s] = (0, cY.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tv.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? g7.r : g7.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, r5.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = ux.A.get(o);
    tl()(null != u, "Missing plan");
    let d = (0, oi.$g)(s.total, s.currency);
    return (
        u.interval === tF.WT.YEAR
            ? (t = j.intl.format(j.t["jPz/39"], {
                  price: d,
                  termsUrl: A.X7G.TERMS,
                  paidURL: A.X7G.PAID_TERMS,
                  privacyUrl: A.X7G.PRIVACY,
              }))
            : u.interval === tF.WT.MONTH &&
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
function me(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === A.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, c.jsx)(g9, { subscription: t, withOverheadSeparator: n });
}
var mt = n(37397),
    mn = n(689255);
let mi = { [eI.nR]: "role_subscriptions_panel", [eI.PZ]: "application_subscriptions_panel" };
function ml() {
    return (0, c.jsx)(oa.Z, {
        className: mn.wb,
        type: oa.Z.Types.CUSTOM,
        children: (0, c.jsxs)(lo.A, {
            align: lo.A.Align.CENTER,
            children: [
                (0, c.jsx)(iq.A, { game: null, size: iq.M.SMALL, className: mn.pV }),
                (0, c.jsx)("span", { className: mn.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function ms(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, ca._)(e, t));
}
function mr() {
    let e = (0, m.bG)([ua.A], () => ua.A.getForApplication(tF.tv), [], ms);
    return (
        g.useEffect(() => {
            (0, uV.LM)(tF.tv);
        }, []),
        (0, c.jsx)(nq.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && r5.Ay.hasAccountCredit(e)
                    ? (0, c.jsx)(g8, { className: mn.fX, entitlements: e })
                    : (0, c.jsx)(ml, {}),
        })
    );
}
function ma() {
    return (0, c.jsx)("hr", { className: mn.hr });
}
let mo = function () {
        var e;
        let t = (0, m.bG)([oD.A], () => oD.A.getPremiumTypeSubscription()),
            n = (0, co.A)({ subscriptionFilter: (e) => mt.Hy.has(e.status) }),
            i = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, m.bG)(
                [oR.A],
                () => (null != t && null != t.paymentSourceId ? oR.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, m.bG)([oD.A], () => oD.A.hasFetchedSubscriptions()),
            a = (0, m.bG)([on.A], () => on.A.isBusy),
            u = (0, di.Y)(),
            d = cK.A.useField("subsection"),
            E = cK.A.useField("scrollToGameServers"),
            S = g.useRef(null);
        g.useEffect(() => {
            (0, n2._)(null != d ? mi[d] : o.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let T = (0, m.bG)([oD.A], () => oD.A.getActiveApplicationSubscriptions()?.length ?? 0),
            p = (0, m.bG)(
                [oD.A],
                () =>
                    Object.values(oD.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === A.rzx.GUILD)
                        .filter((e) => e.status !== A.Dmq.ENDED).length,
            ),
            x = (0, m.bG)([oD.A], () =>
                Object.values(oD.A.getSubscriptions() ?? {}).some((e) => e.type === A.rzx.GAME_SERVER),
            ),
            { servers: f } = (0, cO.f)({ enabled: x }),
            I = (0, m.yK)([oD.A], () => (0, cp.eP)(f, (e) => oD.A.getSubscriptionById(e)), [f]),
            _ = (0, ds.A)({ forceFetch: !0 }),
            N = (0, g$.ds)(),
            C = null !== t ? t.currentPeriodEnd : void 0,
            b =
                !(N && !(_.unactivatedUnits.length > 0)) &&
                (_.fractionalState !== tF.xc.NONE || _.unactivatedUnits.length > 0);
        return (g.useEffect(() => {
            E &&
                r &&
                u &&
                I.length > 0 &&
                (S.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                cK.A.setState({ scrollToGameServers: !1 }));
        }, [E, r, u, I.length]),
        g.useEffect(
            () => (
                e2.h.wait(() => {
                    (0, dn.zS)(), a9.hP(), (0, dt.CD)(), a9.$o();
                }),
                function () {
                    cK.A.resetState();
                }
            ),
            [],
        ),
        e8.A.enabled)
            ? (0, c.jsx)(a1.A, {})
            : r && u
              ? d === eI.nR
                  ? (0, c.jsx)(c9, { onGoBack: () => cK.A.setState({ subsection: null }) })
                  : d === eI.PZ
                    ? (0, c.jsx)(gQ, { onGoBack: () => cK.A.setState({ subsection: null }) })
                    : (0, c.jsx)("div", {
                          className: mn.kL,
                          children: (0, c.jsxs)("div", {
                              className: mn.Qs,
                              children: [
                                  l ? (0, c.jsx)(mt.Sb, {}) : null,
                                  null != t
                                      ? (0, c.jsx)(mt.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, c.jsx)(mt.TC, {}),
                                  b &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, c.jsxs)("section", {
                                          children: [
                                              (0, c.jsx)(h.D, {
                                                  variant: "heading-md/bold",
                                                  className: mn.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-md/normal",
                                                  className: mn.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: eS.A.getArticleURL(
                                                          A.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, c.jsx)(g6, {
                                                  className: mn.fX,
                                                  fractionalPremiumInfo: _,
                                                  activationDate: C,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, c.jsx)(mr, {}),
                                  p > 0 &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)(ma, {}),
                                              (0, c.jsx)(cD, {
                                                  count: p,
                                                  onClickManageSubscription: () => cK.A.setState({ subsection: eI.nR }),
                                              }),
                                          ],
                                      }),
                                  T > 0 &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)(ma, {}),
                                              (0, c.jsx)(gn, {
                                                  count: T,
                                                  onClickManageSubscription: () => {
                                                      cK.A.setState({ subsection: eI.PZ }),
                                                          e7.default.track(
                                                              A.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  I.length > 0 &&
                                      (0, c.jsxs)("div", {
                                          ref: S,
                                          children: [(0, c.jsx)(ma, {}), (0, c.jsx)(cj, { servers: I })],
                                      }),
                                  (0, c.jsx)(ma, {}),
                                  null != t ? (0, c.jsx)(me, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, c.jsx)("div", { className: it()(mn.kL, mn.Lq), children: (0, c.jsx)(a3.y, {}) });
    },
    mu = (0, a.E2)(o.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, c.jsx)(mo, {}),
    }),
    md = (0, a.zZ)(o.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [mu],
    }),
    mc = (0, a.t_)(o.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [md] }),
    mg = (0, a.i4)(o.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: cs.L,
        usePersistentBadge: function () {
            let e = (0, cr.l)();
            return g.useMemo(
                () => ({
                    badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, c.jsx)(iF.E, { size: "xs", color: nW.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [mc],
    }),
    mm = (0, a.WI)(o.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [u9, cl, mg, u2, oX],
    });
var mA = n(540999),
    mE = n(306471),
    mh = n(964355),
    mS = n(172272);
let mT = (0, a.zD)(o.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, m.bG)([s$.default], () => s$.default.isAxeEnabled),
        setValue: (e) => (0, sJ.x)({ axeEnabled: e }),
    }),
    mp = (0, a.zD)(o.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, sJ.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var mx = n(276086),
    mf = n(354328);
let mI = (0, a.zD)(o.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, mf.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, mx.L)("highlight_mana_components", e);
        },
    }),
    m_ = (0, a.zD)(o.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, mf.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, mx.L)("highlight_mana_text_overrides", e);
        },
    }),
    mN = (0, a.zD)(o.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, mf.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, mx.L)("highlight_mana_text", e);
        },
    }),
    mC = (0, a.zD)(o.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, mf.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, mx.L)("highlight_void_toggleables", e);
        },
    }),
    mb = (0, a.sN)(o.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, m.bG)([s$.default], () => s$.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: mS.YR,
        markers: Array.from({ length: mS.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => mS.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            mS.Or.getState().setHorizontalSpacing(e);
        },
    }),
    my = (0, a.zD)(o.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, sJ.x)({ layoutDebuggingEnabled: e });
        },
    }),
    mv = (0, a.sN)(o.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, m.bG)([s$.default], () => s$.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: mS.YR,
        markers: Array.from({ length: mS.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => mS.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            mS.Or.getState().setVerticalSpacing(e);
        },
    }),
    mj = (0, a.zZ)(o.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [mp, my, mb, mv, mI, mN, m_, mC, mT],
    }),
    mO = (0, a.zD)(o.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => v.HZ.useSetting(),
        setValue: (e) => {
            v.HZ.updateSetting(e);
        },
    });
var mL = n(396478),
    mR = n(173936),
    mD = n(103557),
    mP = n(414079),
    mG = n(148810),
    mM = n(380610),
    mU = n(986238),
    mV = n(428524),
    mk = n(252149),
    mw = n(221851);
let mF = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    mB = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function mz(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class mX extends g.Component {
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
        return (0, c.jsxs)(lo.A, {
            direction: lo.A.Direction.VERTICAL,
            className: it()(mV.oS, mw.SX, mk.N, mV.nM),
            children: [
                (0, c.jsx)(mP.A, {
                    className: it()(mV.lL, { [mV.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, c.jsxs)(lo.A, {
                    className: mw.QB,
                    children: [
                        (0, c.jsx)(lo.A.Child, {
                            basis: "50%",
                            children: (0, c.jsx)(i6.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: mB,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, c.jsx)(lo.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, c.jsx)(ll.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)(lo.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, c.jsx)(z.E, {
                                className: mV.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, c.jsxs)(z.E, {
                            variant: "text-sm/normal",
                            className: mV.AS,
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
class mY extends g.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, mM.bD)();
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
        return k().without(mF, ...t);
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
        delete t[e], this.setState({ buildOverrides: t });
    };
    handleDiscardChanges = () => {
        this.setState({ buildOverrides: k().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, mG.Zk)(e);
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
        (0, li.openModal)((t) => (0, c.jsx)(mH, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, c.jsx)(mL.pp, {
            theme: nP.A.theme,
            className: it()(mw.eT, mw.SX),
            children: (0, c.jsx)(mL.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : k().map(e, (e, i) =>
                  (0, c.jsx)(
                      mX,
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
            : (0, c.jsx)(x.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, c.jsx)(i8.m, {
                  text: "Generate Public Link",
                  children: (0, c.jsx)(i5.K, {
                      variant: "secondary",
                      icon: mR.LinkIcon,
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
                (0, c.jsx)(x.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, c.jsx)(x.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: mz(t ?? {}),
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
            ? (0, c.jsx)(a3.y, { className: mw.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                mz(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, c.jsx)(z.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, c.jsx)(nq.n, {
            children: (0, c.jsxs)(F.B, {
                gap: 16,
                children: [
                    (0, c.jsx)(i6.l, {
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
                    (0, c.jsxs)(sU.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class mH extends g.Component {
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
        e.key === l_.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, mG.SB)(e);
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
        return mz(this.props.buildOverrides ?? {});
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
            d = mU.fL.find((t) => t.value === e),
            g = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, c.jsxs)(F.B, {
            gap: 20,
            children: [
                (0, c.jsx)(i6.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: mU.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, c.jsx)(i6.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: mU.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, c.jsxs)(F.B, {
                          gap: 20,
                          children: [
                              (0, c.jsx)(ll.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iU.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, c.jsx)(i6.l, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: g,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === l.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, c.jsx)(mD.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, c.jsx)(mD.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, c.jsx)(tZ.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, c.jsx)("div", {});
        let n = rW.Y.INFO;
        switch (t) {
            case 0:
                n = rW.Y.ERROR;
                break;
            case 1:
                n = rW.Y.WARNING;
        }
        return (0, c.jsx)(rW.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, c.jsx)(ln.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, c.jsx)(uD.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let mK = (0, a.E2)(o.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: mY });
var mW = n(256311),
    mZ = n(883600);
let mq = (0, a.E2)(o.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, m.bG)([mZ.A], () => mZ.A.overrideId());
        async function t(e) {
            let t = mZ.A.getChangelog(e, "en-US");
            return null != t ? t : ((await mW.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, c.jsx)(At, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => mW.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var mQ = n(506774);
let mJ = new Date("2018-01-01"),
    m$ = (0, a.Tf)(o.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => v.pK.useSetting() === os.default.fromTimestamp(mJ.getTime()),
        onClick: () => (mQ.w.set("lastChangeLogDate", mJ), v.pK.updateSetting(os.default.fromTimestamp(mJ.getTime()))),
    }),
    m0 = (0, a.zD)(o.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, m.bG)([s$.default], () => s$.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, m.bG)(
                [s$.default],
                () => s$.default.disableAppCollectionsCache || s$.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, sJ.x)({ disableAppCollectionsCache: e }),
    }),
    m1 = (0, a.zD)(o.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.isForcedCanary),
        setValue: (e) => {
            (0, sJ.x)({ canary: e });
        },
    }),
    m2 = (0, a.zD)(o.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.sourceMapsEnabled),
        setValue: (e) => (0, sJ.x)({ sourceMapsEnabled: e }),
    }),
    m3 = (0, a.zD)(o.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, sJ.x)({ onlyShowPreviewAppCollections: e }),
    });
var m6 = n(10094),
    m5 = n(683760);
let m4 = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tF.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tF.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tF.PremiumTypes.TIER_2 },
    ],
    m8 = (0, a.Hn)(o.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => m4,
        clearable: !0,
        useValue: () =>
            (0, m.bG)([m5.A], () => {
                let e = m5.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, m6.O)(null, void 0)
                : null === e
                  ? (0, m6.O)(void 0, void 0)
                  : (0, m6.O)(0 === e ? null : e, void 0);
        },
    });
var m7 = n(246605),
    m9 = n(274184);
let Ae = (0, a.E2)(o.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, m.bG)([m9.Ay], () => m9.Ay.getSurveyOverride());
        return (0, c.jsx)(At, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => m7.xr(e),
            fetchOverride: (e) => m7.BC(e, !0) ?? null,
        });
    },
});
function At(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = g.useState(l ?? ""),
        u = g.useRef(null),
        [d, m] = g.useState(0);
    function A() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        g.useEffect(() => A, []),
        (0, c.jsx)(tW.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, c.jsx)(ll.k, {
                placeholder: i,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: function (e) {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), A(), 0 === e.length)) {
                            m(0), s(null);
                            return;
                        }
                        u.current = setTimeout(() => {
                            m(1),
                                r(e).then((t) => {
                                    m(null == t ? 2 : 3), null != t && s(e);
                                });
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let An = (0, a.zZ)(o.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [m8, Ae, mq, m$, m1, mO, m3, m0, m2, mK],
        useInlineNotice: () => ({
            type: d.lT.INLINE_NOTICE,
            noticeType: "info",
            text: j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Ai = (0, a.zD)(o.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, sJ.x)({ logAnalyticsEvents: e }),
    }),
    Al = (0, a.zD)(o.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.isLoggingGatewayEvents),
        setValue: (e) => (0, sJ.x)({ logGatewayEvents: e }),
    }),
    As = (0, a.zD)(o.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.preventPopoutClose),
        setValue: (e) => (0, sJ.x)({ preventPopoutClose: e }),
    }),
    Ar = (0, a.zD)(o.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.logKeyboardMismatches),
        setValue: (e) => (0, sJ.x)({ logKeyboardMismatches: e }),
    }),
    Aa = (0, a.zD)(o.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.isLoggingOverlayEvents),
        setValue: (e) => (0, sJ.x)({ logOverlayEvents: e }),
    }),
    Ao = (0, a.zD)(o.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.isLoggingQuestEvents),
        setValue: (e) => (0, sJ.x)({ logQuestEvents: e }),
    }),
    Au = (0, a.zD)(o.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, m.bG)([s$.default], () => s$.default.isTracingRequests),
        setValue: (e) => (0, sJ.x)({ trace: e }),
    }),
    Ad = (0, a.zZ)(o.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [Al, Aa, Au, Ai, Ar, As, Ao] }),
    Ac = (0, a.t_)(o.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [An, Ad, mj],
    }),
    Ag = (0, a.i4)(o.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: mE.V,
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
                    preventPopoutClose: u,
                    onlyShowPreviewAppCollections: d,
                    disableAppCollectionsCache: g,
                    isStaff: A,
                } = (0, m.cf)([s$.default, mA.A, l9.default], () => ({
                    layoutDebuggingEnabled: s$.default.layoutDebuggingEnabled,
                    isDeveloper: mA.A.isDeveloper,
                    isLoggingGatewayEvents: s$.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: s$.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: s$.default.isLoggingAnalyticsEvents,
                    isTracingRequests: s$.default.isTracingRequests,
                    isForcedCanary: s$.default.isForcedCanary,
                    isSourceMapsEnabled: s$.default.sourceMapsEnabled,
                    isAxeEnabled: s$.default.isAxeEnabled,
                    preventPopoutClose: s$.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: s$.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: s$.default.disableAppCollectionsCache,
                    isStaff: l9.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: E, verticalSpacing: h } = (0, mS.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = mS.Or.getState(),
                p = v.HZ.useSetting();
            return t
                ? [
                      (0, c.jsxs)(
                          e0.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, nt.openUserSettings)(o.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: p,
                                          action: () => {
                                              v.HZ.updateSetting(!p);
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
                                              (0, sJ.x)({ canary: !r });
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
                                              (0, sJ.x)({ onlyShowPreviewAppCollections: !d });
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
                                              (0, sJ.x)({ disableAppCollectionsCache: !g });
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
                                  (0, nt.openUserSettings)(o.X.LOGGING);
                              },
                              children: [
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, sJ.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, sJ.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, sJ.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, sJ.x)({ trace: !s });
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
                                              (0, sJ.x)({ preventPopoutClose: !u });
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
                                  (0, nt.openUserSettings)(o.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, sJ.x)({ axeEnabled: !a });
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
                                              (0, sJ.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, c.jsx)(mh.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: E,
                                                              minValue: 0,
                                                              maxValue: mS.YR,
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
                                                          (0, c.jsx)(mh.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: mS.YR,
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
                                { id: "discord-stats", label: "Discord Stats", action: () => l7() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [Ac],
    });
var Am = n(127062),
    AA = n(25044),
    AE = n(80703),
    Ah = n(123292),
    AS = n(857250),
    AT = n(683438),
    Ap = n(890856),
    Ax = n(100392),
    Af = n(102609),
    AI = n(271478),
    A_ = n(710195),
    AN = n(386976),
    AC = n(257433),
    Ab = n(32523),
    Ay = n(96919),
    Av = n(688151),
    Aj = n(863763);
function AO(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = g.useState(l),
        [a, o] = g.useState(!1),
        u = g.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, m.bG)([uT.default], () => uT.default.getId()),
        A = (0, m.bG)([uT.default], () => {
            let e = uT.default.getInstallationForTracking();
            return null == e ? null : (0, AE.v)(e);
        }),
        E = "installation" === t.kind && null != A ? A : d,
        h = (0, AC.iN)(t, E),
        S = (0, AC.Fm)(t, E),
        T = (0, m.yK)([s4.A], () =>
            k()
                .sortBy(s4.A.getRecentExposures(Av.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        p = g.useCallback(
            (e) => {
                (0, u_.C)((0, Ax.yA)(n), () => {
                    (0, l3.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: l6.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [n],
        ),
        x = (0, c.jsx)(Ap.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, c.jsxs)(z.E, {
                variant: "text-md/medium",
                className: Aj.DD,
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
                                    u_.p5 &&
                                        (0, c.jsx)(t9.D, {
                                            onClick: p,
                                            children: (0, c.jsx)(mR.LinkIcon, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, c.jsx)(z.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, c.jsx)("span", {
                        className: Aj.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, c.jsx)("div", { className: Aj.Os, children: x });
    let f = "";
    return (
        (f =
            t.system === Af.l5.LEGACY
                ? `Currently assigned to bucket ${h ?? Av.RE.NOT_ELIGIBLE}`
                : null != h
                  ? `Currently assigned to variant ${h}`
                  : "Currently unassigned"),
        (0, c.jsxs)("div", {
            className: Aj.Os,
            children: [
                x,
                (0, c.jsx)("div", {
                    children: (0, c.jsx)(AI.g, {
                        label: t.system === Af.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, c.jsx)("div", {
                    className: Aj.h_,
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
                                  className: Aj.id,
                                  children: "Server Descriptor",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: Aj.AS,
                                  children: null == S ? "None" : JSON.stringify(S, void 0, 2),
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-lg/medium",
                                  className: Aj.id,
                                  children: "Override Descriptor",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: Aj.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-lg/medium",
                                  className: Aj.id,
                                  children: "Recent Exposures",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: Aj.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, c.jsx)("div", {
                          className: Aj.id,
                          children: (0, c.jsx)(Ah.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, c.jsx)(i3.c, { className: Aj.yF }),
            ],
        })
    );
}
function AL(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = g.useState(null != i),
        [r, a] = g.useState(!1),
        o = g.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, m.bG)([s4.A], () => s4.A.getLoadedGuildExperiment(n)),
        d = (0, m.bG)([s4.A, lg.A, A_.A], () => {
            if (t.system === Af.l5.LEGACY) return null == s4.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lg.A.getGuildsArray().some((t) => null != A_.A.getServerAssignment("guild", t.id, e));
        }),
        A = (0, m.yK)([s4.A], () =>
            k()
                .sortBy(s4.A.getRecentExposures(Av.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [E, h] = (0, m.yK)([uT.default, lg.A, s4.A, A_.A], () => {
            let e = t.system === Af.l5.LEGACY,
                i = t.name,
                l = uT.default.getId(),
                s = k().sortBy(lg.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (s4.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? Av.RE.NOT_ELIGIBLE)
                    : (A_.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? Av.RE.NOT_ELIGIBLE);
                s in r || (r[s] = 0), r[s]++, a.push(`${t.name}: ${s}`);
            }
            let o = k()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        S = t.system !== Af.l5.LEGACY,
        T = (0, m.yK)([lg.A], () => k().sortBy(lg.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [p, x] = g.useState(() => lm.A.getGuildId() ?? lm.A.getLastSelectedGuildId()),
        f = T.find((e) => e.id === p)?.name,
        I = (0, m.bG)([A_.A], () => {
            if (S && null != p) return A_.A.getServerAssignment("guild", p, t.name);
        }, [S, p, t.name]),
        _ = (0, m.bG)([A_.A, uT.default], () => {
            if (!S) return;
            let e = uT.default.getId();
            return A_.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        N = null != _ && (_.isOverride || _.useAsEligibility),
        C = (0, c.jsx)(t9.D, {
            onClick: o,
            children: (0, c.jsxs)(z.E, {
                variant: "text-md/medium",
                className: Aj.DD,
                children: [
                    (0, c.jsxs)("div", {
                        children: [
                            (0, c.jsx)("span", { children: t.title }),
                            (0, c.jsx)(z.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, c.jsx)("span", { className: Aj.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, c.jsxs)("div", {
              className: Aj.Os,
              children: [
                  C,
                  (0, c.jsx)(AI.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${h}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  S &&
                      T.length > 0 &&
                      (0, c.jsx)("div", {
                          className: Aj.h_,
                          children: (0, c.jsx)(i6.l, {
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
                  (0, c.jsx)("div", {
                      className: Aj.h_,
                      children: d
                          ? (0, c.jsx)(z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Af.l5.LEGACY
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
                                  className: Aj.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: Aj.AS,
                                  children: null == I ? "None" : JSON.stringify(I, void 0, 2),
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-lg/medium",
                                  className: Aj.id,
                                  children: "Client Eligibility",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: Aj.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, c.jsxs)("div", {
                            children: [
                                (0, c.jsx)(z.E, {
                                    variant: "text-lg/medium",
                                    className: Aj.id,
                                    children: "Guild Assignments",
                                }),
                                (0, c.jsx)(z.E, { variant: "code", className: Aj.AS, children: E }),
                                t.system === Af.l5.LEGACY &&
                                    (0, c.jsxs)(c.Fragment, {
                                        children: [
                                            (0, c.jsx)(z.E, {
                                                variant: "text-lg/medium",
                                                className: Aj.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, c.jsx)(z.E, {
                                                variant: "code",
                                                className: Aj.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, c.jsx)(z.E, {
                                    variant: "text-lg/medium",
                                    className: Aj.id,
                                    children: "Override Descriptor",
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "code",
                                    className: Aj.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "text-lg/medium",
                                    className: Aj.id,
                                    children: "Recent Exposures",
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "code",
                                    className: Aj.AS,
                                    children: 0 === A.length ? "None" : A.join("\n"),
                                }),
                            ],
                        })
                      : (0, c.jsx)("div", {
                            className: Aj.id,
                            children: (0, c.jsx)(Ah.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, c.jsx)(i3.c, { className: Aj.yF }),
              ],
          })
        : (0, c.jsx)("div", { className: Aj.Os, children: C });
}
let AR = (0, a.E2)(o.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, AN.op)(),
                { experiments: n, overridesInfo: i } = (0, Ab.hI)(),
                l = g.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = g.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, m.bG)([uT.default], () => {
                    let e = uT.default.getInstallationForTracking();
                    return null == e ? null : (0, AE.v)(e);
                }),
                [a, o] = g.useState(""),
                u = (0, Ay.oC)((0, Ay.R3)((0, Ay.Fm)(l), s), a);
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
                                u_.p5 &&
                                    (0, c.jsx)(Ah.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, u_.C)(r, () => {
                                                (0, l3.P0)((0, AS.o)("Installation ID copied!", l6.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, c.jsx)(AT.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? AL : AO;
                              return (0, c.jsx)(
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
                        : (0, c.jsx)("div", {
                              className: Aj.p$,
                              children: (0, c.jsx)(h.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    AD = (0, a.zZ)(o.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [AR] }),
    AP = (0, a.t_)(o.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [AD] }),
    AG = (0, a.i4)(o.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Am.c,
        useMenu: AA.A,
        buildLayout: () => [AP],
    }),
    AM = (0, a.WI)(o.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => mA.A.isDeveloper,
        buildLayout: () => [AG, Ag],
    });
var AU = n(682348),
    AV = n(871633),
    Ak = n(751075),
    Aw = n(843402);
let AF = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function AB() {
    let e = (0, m.yK)([iK.Ay], () => iK.Ay.getGamesSeen(!1)),
        t = (0, m.bG)([iK.Ay], () => AF(...iK.Ay.getOverrides()));
    g.useEffect(() => ((0, Aw.a2)(), Aw.e0), []);
    let { gameHistory: n, robloxSubgameHistory: i } = g.useMemo(
        () =>
            e.reduce((e, t) => ((0, AV.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function Az(e) {
    let { gameHistory: t } = AB();
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
function AX(e) {
    let { namedGames: t, totalCount: n } = Az(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function AY() {
    let { namedGames: e } = Az(2),
        [t, n] = g.useMemo(() => e.map((e) => e.id), [e]);
    g.useEffect(() => {
        gp.Ay.fetchApplications([t, n].filter(n7.Vq));
    }, [t, n]);
    let [i, l] = (0, m.yK)([iX.A], () => [t, n].map(iX.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, c.jsx)(iq.A, { game: i, size: iq.M.MEDIUM_LARGE }), shape: Ak.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, c.jsx)(iq.A, { game: l, size: iq.M.MEDIUM }), shape: Ak.e0.ROUNDED } : null,
          };
}
let AH = (0, a.AK)(o.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = AX(2);
            return j.intl.format(j.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = AY();
            return { type: d.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: o.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, m.bG)([iK.Ay], () => iK.Ay.getGamesSeen(!1).some((e) => !(0, AV.n1)(e))) && (0, nd.xl)(),
    }),
    AK = (0, a.gN)(o.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [AH] });
var AW = n(527533);
let AZ = (0, a.zD)(o.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => j.intl.string(AW.default.WhdCGP),
    useSubtitle: () => j.intl.string(AW.default.UQ9RHJ),
    useValue: v.tz.useSetting,
    setValue: v.tz.updateSetting,
});
var Aq = n(406535);
let AQ = (0, a.zD)(o.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => j.intl.string(AW.default.A0FVCV),
        useSubtitle: () => j.intl.string(AW.default.vHX6RG),
        useValue: v.hV.useSetting,
        setValue: function (e) {
            v.hV.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Aq.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                });
        },
    }),
    AJ = (0, a.zZ)(o.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.WmsPis),
        useSearchTerms: () => [j.intl.string(j.t["8ka8li"])],
        buildLayout: () => [AZ, AQ, AK],
    });
var A$ = n(106531);
let A0 = (0, a.AK)(o.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        destinationKey: o.X.DATA_AND_PRIVACY_PANEL,
    }),
    A1 = (0, a.gN)(o.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, A$.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [A0],
    });
var A2 = n(945810);
let A3 = (0, A2.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
var A6 = n(365258);
let A5 = (0, a.Qx)(o.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => j.intl.string(AW.default["/LHVbt"]),
    useSubtitle: () => j.intl.string(j.t.L5IdzV),
    useOptions: function () {
        return [
            { value: ek.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(AW.default.m3oL7Q) },
            { value: ek.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: j.intl.string(AW.default["5+lnTA"]) },
            { value: ek.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(AW.default["egr+VZ"]) },
        ];
    },
    useValue: v._Z.useSetting,
    setValue: function (e) {
        var t;
        let i = v._Z.getSetting();
        if (
            (v._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, A$.W1)(t) && !A3.getConfig({ location: t }).upsell)
        )
            return;
        let l = (0, A6.g8)(i, e);
        if (null == l) return;
        let s = (0, A6.Xc)(e);
        (0, li.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("341996")]).then(
                n.bind(n, 32167),
            );
            return (t) =>
                (0, c.jsx)(e, { ...t, direction: l.direction, affectedGuildIds: l.affectedGuildIds, settingName: s });
        });
    },
});
var A4 = n(498642),
    A8 = n(573435),
    A7 = n(260509),
    A9 = n(771810);
function Ee(e) {
    let { guild: t, size: n } = e,
        i = (0, A7.Iv)(t, n, !1, !0),
        l = (0, A7.Rb)(t);
    return null != i
        ? (0, c.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, c.jsx)("div", {
              className: A9.F,
              children: (0, c.jsx)(z.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
              }),
          });
}
function Et(e) {
    let { guild: t, size: n } = e;
    return (0, c.jsx)(A8.Ay, {
        className: A9.z,
        mask: A8.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, c.jsx)(Ee, { guild: t, size: n }),
    });
}
var En =
    (((s = {}).SERVER_ORDER = "server-order"),
    (s.RECENTLY_JOINED = "recently-joined"),
    (s.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (s.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    s);
let Ei = {
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
var El = n(618118);
function Es(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, m.bG)([A4.A], () => A4.A.getMemberCount(t.id));
    return (0, c.jsxs)(F.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, c.jsx)("div", { className: El.FO, children: (0, c.jsx)(Et, { guild: t, size: 48 }) }),
            (0, c.jsx)("div", {
                className: El.QH,
                children: (0, c.jsx)(tZ.d, {
                    label: t.name,
                    description: j.intl.format(j.t.zRl6XR, { count: l ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let Er = function (e) {
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
            numActivityRestrictedGuilds: E,
            numTotalGuilds: h,
        } = (function () {
            let [e, t] = (0, g.useState)(""),
                [n, i] = (0, g.useState)("server-order"),
                l = (0, m.bG)([dd.Ay], () => dd.Ay.getFlattenedGuildIds()),
                s = (0, m.bG)([lg.A], () => lg.A.getGuilds()),
                r = l.map((e) => s[e]).filter(Boolean),
                a = v.Pw.useSetting(),
                [o, u] = (0, g.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await v.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, g.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [A, E] = (0, g.useState)(() => Ei[n](r, a)),
                h = A.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    E(Ei[e](r, a)), i(e);
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: function (e) {
                    let { checked: t, guildId: n } = e,
                        i = new Set(o);
                    t ? i.delete(n) : i.add(n), d([...i]);
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
        S = (0, g.useId)(),
        T = (0, g.useRef)(null),
        p = (0, g.useMemo)(
            () => [
                { id: En.SERVER_ORDER, label: j.intl.string(j.t.STMPJ2), value: En.SERVER_ORDER },
                { id: En.RECENTLY_JOINED, label: j.intl.string(j.t.CbaapP), value: En.RECENTLY_JOINED },
                { id: En.ACTIVITY_SHARING_ON, label: j.intl.string(AW.default.ZI51JZ), value: En.ACTIVITY_SHARING_ON },
                {
                    id: En.ACTIVITY_SHARING_OFF,
                    label: j.intl.string(AW.default["+kxafn"]),
                    value: En.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        x = p.find((e) => e.value === s)?.label ?? "";
    return (0, c.jsxs)("div", {
        className: El.iE,
        children: [
            t,
            (0, c.jsxs)("div", {
                className: El.N1,
                children: [
                    (0, c.jsx)(AT.I, {
                        query: i,
                        onChange: l,
                        onClear: function () {
                            e7.default.track(A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: E,
                                total_guild_count: h,
                            }),
                                l("");
                        },
                        onFocus: () =>
                            e7.default.track(A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: E,
                                total_guild_count: h,
                            }),
                        onBlur: () =>
                            e7.default.track(A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
                                activity_restricted_guild_count: E,
                                total_guild_count: h,
                            }),
                        placeholder: j.intl.string(j.t["H+nRYw"]),
                        "aria-label": j.intl.string(j.t["5h0QOP"]),
                        inputProps: { "aria-controls": S, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, c.jsxs)("div", {
                            className: El.gO,
                            children: [
                                (0, c.jsx)(r2.Y, {
                                    targetElementRef: T,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, c.jsx)(dT.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": j.intl.string(j.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, c.jsx)(e0.rX, {
                                                children: p.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, c.jsx)(
                                                        e0.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: s === i,
                                                            action: () => {
                                                                e7.default.track(
                                                                    A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: i,
                                                                        activity_restricted_guild_count: E,
                                                                        total_guild_count: h,
                                                                    },
                                                                ),
                                                                    r(i);
                                                            },
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                        });
                                    },
                                    children: (e) =>
                                        (0, c.jsxs)(t9.D, {
                                            ...e,
                                            innerRef: T,
                                            className: El.Ku,
                                            children: [
                                                (0, c.jsx)(z.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: x,
                                                }),
                                                (0, c.jsx)(dH.a, { size: "xs", color: nW.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, c.jsx)(Ah.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? j.intl.string(j.t["7lxcLO"]) : j.intl.string(j.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, c.jsx)(i7.A, {
                "aria-live": "polite",
                role: "region",
                children: j.intl.format(AW.default.EvzDff, { count: n.length }),
            }),
            (0, c.jsxs)("ul", {
                className: El.X1,
                id: S,
                "aria-label": j.intl.string(j.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, c.jsx)("div", {
                            className: El.pb,
                            children: (0, c.jsx)(z.E, {
                                className: El.R$,
                                variant: "text-lg/medium",
                                children: j.intl.string(j.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, c.jsx)(
                            Es,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var Ea = n(68322);
let Eo = (0, a.E2)(o.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [j.intl.string(AW.default["/LHVbt"])],
        Component: function () {
            let e = v.tz.useSetting()
                ? null
                : (0, c.jsx)("div", {
                      className: Ea.l,
                      children: (0, c.jsx)(ik.w, { type: "warning", children: j.intl.string(AW.default["xxI0/W"]) }),
                  });
            return (0, c.jsx)(Er, { notice: e });
        },
    }),
    Eu = (0, a.zZ)(o.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.bwqjL9),
        buildLayout: () => [A5, Eo, A1],
    }),
    Ed = (0, a.zD)(o.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => j.intl.string(AW.default.khuuzv),
        useSubtitle: () => j.intl.string(AW.default["8EWsJ8"]),
        useValue: () => v.e.useSetting(),
        setValue: (e) => v.e.updateSetting(e),
    }),
    Ec = (0, a.E2)(o.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
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
    Eg = (0, a.zD)(o.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => j.intl.string(AW.default.Uz5Ipi),
        useSubtitle: () => j.intl.string(AW.default.CZI2Gb),
        useValue: () => v.UM.useSetting(),
        setValue: (e) => v.UM.updateSetting(e),
    }),
    Em = (0, a.zZ)(o.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => j.intl.string(AW.default["89YBr5"]),
        useSubtitle: () => j.intl.string(j.t.uGDpgH),
        buildLayout: () => [Ed, Eg, Ec],
        useSearchTerms: () => [j.intl.string(j.t.VOszPA)],
    }),
    EA = (0, a.t_)(o.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        buildLayout: () => [AJ, Eu, Em],
    }),
    EE = (0, a.i4)(o.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        icon: AU._,
        buildLayout: () => [EA],
    });
var Eh = n(712440),
    ES = n(370997);
let ET = (0, a.E2)(o.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: ES.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var Ep = n(462887),
    Ex = n(478016),
    Ef = n(789645),
    EI = n(259678),
    E_ = n(77468),
    EN = n(289498),
    EC = n(573648),
    Eb = n(874490),
    Ey = n(370480),
    Ev = n(968309);
let Ej = new Set([A.fg2.XBOX, A.fg2.PLAYSTATION, A.fg2.PLAYSTATION_STAGING, A.fg2.CRUNCHYROLL]);
var EO = n(169869),
    EL = n(814925),
    ER = n(733110),
    ED = n(479785),
    EP = n(757036),
    EG = n(555837),
    EM = n(43990),
    EU = n(241524),
    EV = n(51965),
    Ek = n(377368),
    Ew = n(631368),
    EF = n(212739),
    EB = n(30370),
    Ez = n(114516),
    EX = n(763430),
    EY = n(477767),
    EH = n(660594);
function EK() {
    let e,
        t,
        i,
        l,
        s,
        { variant: r, showFooter: a } =
            ((e = (0, Ew.$)()),
            (t = (0, Ez.mO)("connectedAccountsBannerFooter")),
            (i = (0, EF.O)()),
            (s = null != (l = (0, m.bG)([EB.A], () => EB.A.getAccount(null, A.fg2.XBOX))) && !l.revoked),
            e === Ew.C.NONE || i
                ? { variant: Ew.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === Ew.C.NO_ACCESS && !s }),
        { analyticsLocations: o } = (0, eL.Ay)(tv.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, Ek.yW)(o),
        d = (0, EU.A)("(max-width: 485px)");
    if (r === Ew.C.NONE) return null;
    let g = d ? "md" : "sm",
        E = "",
        S = null;
    switch (r) {
        case Ew.C.HAS_ACCESS:
        case Ew.C.BLOCK_CLAIM:
            (E = j.intl.string(EY.default["7PdsMK"])),
                (S = (0, c.jsx)(EV.A, {
                    variant: "overlay-primary",
                    size: g,
                    fullWidth: d,
                    text: j.intl.string(EY.default.CubeLC),
                    onClick: () => {
                        (0, li.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("878140"), n.e("813088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case Ew.C.NO_ACCESS:
            (E = j.intl.string(EY.default.NwkRTZ)),
                (S = (0, c.jsx)(tD.A, {
                    defaultTextOverride: j.intl.string(EY.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: g,
                    fullWidth: d,
                    subscriptionTier: tF.pe.TIER_2,
                }));
            break;
        default:
            (0, n7.xb)(r);
    }
    return (0, c.jsxs)(eL.f5, {
        value: o,
        children: [
            (0, c.jsxs)("div", {
                className: EH.bV,
                children: [
                    (0, c.jsx)(h.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.NG1e6l),
                    }),
                    (0, c.jsx)(rK.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, c.jsx)(EM.N, {
                theme: "dark",
                children: (e) =>
                    (0, c.jsx)("div", {
                        className: e,
                        children: (0, c.jsxs)("div", {
                            className: EH.Nr,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: EH.Tp,
                                    children: [
                                        (0, c.jsx)("div", {
                                            className: EH.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, c.jsx)("div", { className: EH.$h }),
                                        (0, c.jsx)("div", { className: EH.Rv }),
                                        (0, c.jsx)("div", { className: EH.Lw }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: EH.Mn,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: EH.mY,
                                            children: [
                                                (0, c.jsx)("img", {
                                                    className: EH.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, c.jsx)(z.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: EH.DD,
                                                    children: E,
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", { className: EH.lO, children: S }),
                                    ],
                                }),
                                a &&
                                    (0, c.jsxs)(c.Fragment, {
                                        children: [
                                            (0, c.jsx)("div", { className: EH.yF }),
                                            (0, c.jsxs)("div", {
                                                className: EH.sQ,
                                                children: [
                                                    (0, c.jsx)(oH.GiftIcon, {
                                                        size: d ? "md" : "sm",
                                                        color: nW.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, c.jsx)(z.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(EX.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(Ek.Hx.CONNECT),
                                                                    (0, Ev.A)({
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
var EW = n(201718),
    EZ = n(321078),
    Eq = n(672130),
    EQ = n(379848),
    EJ = n(688901);
function E$(e) {
    let { markAsDismissed: t } = e;
    return (
        g.useEffect(() => t(cI.i.UNKNOWN), [t]),
        (0, c.jsx)(e9.Lp, { className: EJ.Ad, text: j.intl.string(j.t.y2b7CA) })
    );
}
function E0(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, c.jsxs)("div", {
        className: EJ.kL,
        children: [
            i,
            (0, c.jsxs)("div", {
                className: EJ.FS,
                children: [
                    (0, c.jsxs)("div", {
                        className: EJ.TK,
                        children: [
                            (0, c.jsx)(EQ.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, c.jsx)(E$, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, c.jsx)(z.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, c.jsx)(z.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, c.jsx)(x.$, { text: j.intl.string(j.t.vD60Pv), onClick: s }),
        ],
    });
}
function E1() {
    let e = eS.A.getArticleURL(A.MVz.PS_CONNECTION);
    return (0, c.jsx)(E0, {
        title: j.intl.string(j.t.v20wwm),
        body: j.intl.format(j.t.lTZBit, { help_article: e }),
        img: (0, c.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: er.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, Ev.A)({ platformType: A.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let E2 = "/assets/9df988a227916145.png";
function E3() {
    return (0, c.jsx)(E0, {
        title: j.intl.string(EX.default["9cLtDI"]),
        body: j.intl.format(EX.default["D+kUbg"], { learnMoreLink: eS.A.getArticleURL(A.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, c.jsx)("img", { src: E2, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: er.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, Ev.A)({ platformType: A.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function E6() {
    let e = eS.A.getArticleURL(A.MVz.XBOX_CONNECTION);
    return (0, c.jsx)(E0, {
        title: j.intl.string(j.t["2okkZV"]),
        body: j.intl.format(j.t.OnERSS, { help_article: e }),
        img: (0, c.jsx)("img", { src: E2, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: er.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, Ev.A)({ platformType: A.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var E5 = n(783419),
    E4 = n(534952),
    E8 = n(254656),
    E7 = n(247259);
function E9(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, m.cf)(
            [EB.A],
            () => ({
                isJoining: EB.A.isJoining(n.id),
                joinErrorMessage:
                    "" === EB.A.joinErrorMessage(n.id) ? j.intl.string(j.t.j2d6Km) : EB.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== EB.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, m.bG)([lg.A], () => lg.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, c.jsx)(x.$, {
                size: "sm",
                onClick: function () {
                    E_.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, c.jsxs)("div", {
            className: E7.iA,
            children: [
                (0, c.jsxs)("div", {
                    className: E7.XX,
                    children: [
                        (0, c.jsx)(dI.Ay, { size: dI.Ay.Sizes.SMALL, guild: n.guild, className: E7.$f }),
                        (0, c.jsxs)("div", {
                            className: E7.Vn,
                            children: [
                                (0, c.jsx)(z.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, c.jsx)(az.Anchor, {
                                    href: EC.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, c.jsx)(z.E, {
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
                    (0, c.jsx)(z.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: E7.R,
                        children: l,
                    }),
            ],
        })
    );
}
function he(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s =
            ((t = l.id),
            (n = (0, EG.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (i = (0, EP.L)(tF.PremiumTypes.TIER_2)),
            !n && !i && !/^\d+$/.test(t));
    return l.type === A.fg2.XBOX && s
        ? (0, c.jsx)(E3, {})
        : l.twoWayLink
          ? null
          : l.type === A.fg2.XBOX
            ? (0, c.jsx)(E6, {})
            : l.type === A.fg2.PLAYSTATION
              ? (0, c.jsx)(E1, {})
              : null;
}
function ht(e) {
    let t,
        n,
        i,
        l,
        s,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: m } = e,
        [E, h] = g.useState(u.friendSync),
        [S, T] = g.useState(u.visibility),
        [p, f] = g.useState(u.metadataVisibility),
        [I, _] = g.useState(u.showActivity),
        [N, C] = g.useState(null),
        [b, y] = g.useState(null),
        [v, O] = g.useState(!1),
        [L, R] = g.useState([]),
        D = (0, Eb.ML)(u.type),
        P = EC.A.get(D);
    g.useEffect(() => {
        h(u.friendSync), T(u.visibility), f(u.metadataVisibility), _(u.showActivity);
    }, [u]);
    let G = { inProgressVisibility: N, inProgressMetadataVisibility: b },
        M = g.useRef(G);
    return (
        g.useEffect(() => {
            M.current = G;
        }),
        g.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = M.current;
            null != e && (T(e), E_.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (f(t), E_.A.setMetadataVisibility(u.type, u.id, t), y(null));
        }, [u]),
        (0, c.jsxs)("div", {
            className: E7.FI,
            children: [
                ((t = EC.A.get(u.type)),
                (n = EC.A.get(D)),
                (i = "1" === (u.metadata ?? {})[E5.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === A.fg2.TWITTER &&
                    i &&
                    (l = (0, c.jsx)(i8.m, {
                        text: j.intl.string(j.t.Jebrww),
                        children: (0, c.jsx)(EL.A, {
                            color: nW.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, c.jsx)(Ex.U, { size: "xs", color: nW.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, c.jsxs)("div", {
                    className: E7.Il,
                    children: [
                        (0, c.jsx)("img", {
                            alt: n.name,
                            className: E7.gj,
                            src: (0, Ep.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, c.jsxs)("div", {
                            children: [
                                (0, c.jsxs)("div", {
                                    className: E7.$p,
                                    children: [
                                        (0, c.jsx)(z.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: E7.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, c.jsx)("div", { className: E7.cG, children: l }),
                                    ],
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: E7.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? j.intl.format(E8.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, c.jsx)(t9.D, {
                            className: E7.uH,
                            onClick: function () {
                                let e = EC.A.get(u.type);
                                (0, li.openModal)((t) =>
                                    (0, c.jsx)(ln.Modal, {
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
                                            Ej.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, c.jsx)(lX.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, c.jsx)(Ef.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, c.jsx)(he, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, Ey.An)(t[E5.pK.CREATED_AT], m);
                    switch (e.type) {
                        case A.fg2.REDDIT:
                            n = (0, EO.xE)(t, E7.Nz);
                            break;
                        case A.fg2.STEAM:
                            n = (0, EO.dy)(t, E7.Nz);
                            break;
                        case A.fg2.BLUESKY:
                        case A.fg2.TWITTER:
                        case A.fg2.MASTODON:
                            n = (0, EO.ED)(t, E7.Nz);
                            break;
                        case A.fg2.EBAY:
                            n = (0, EO.ub)(t, E7.Nz);
                            break;
                        case A.fg2.PAYPAL:
                            n = (0, EO.gZ)(t, E7.Nz);
                            break;
                        case A.fg2.TIKTOK:
                            n = (0, EO.HU)(t, E7.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, c.jsx)(
                                z.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: E7.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = L.includes(e.id),
                        s = j.intl.string(j.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== EC.A.get(e.type).hasMetadata) return null;
                        else
                            (n = [
                                (0, c.jsx)(e9.Lp, { className: E7.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, c.jsx)(
                                    z.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: E7.vt,
                                        children: j.intl.format(j.t.Up2ni7, {
                                            helpdeskUrl: eS.A.getArticleURL(A.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = j.intl.string(j.t["LVh3/5"]));
                    return (
                        l && (s = j.intl.string(j.t.i4jeWR)),
                        n.push(
                            (0, c.jsx)(
                                "div",
                                {
                                    className: E7.jy,
                                    children: (0, c.jsx)(x.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: v,
                                        disabled: l,
                                        "aria-label": j.intl.string(j.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  O(!0),
                                                      E_.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              L.push(e.id), R(L), O(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, c.jsx)("div", { className: E7.tJ, children: n })
                    );
                })(u),
                (A.txh.has(u.type) &&
                    (s = (0, c.jsx)(tZ.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: E,
                        onChange: function (e) {
                            h(e), E_.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                A.ewM.has(u.type) &&
                    (r = (0, c.jsx)(tZ.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: P.name }),
                        checked: I,
                        onChange: function (e) {
                            _(e), E_.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                EC.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, c.jsx)(tZ.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === p,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                y(n), (0, Ev.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            f(n), E_.A.setMetadataVisibility(u.type, u.id, n);
                        },
                        disabled: 1 !== S || null == u.metadata,
                    })),
                (0, c.jsxs)("div", {
                    className: E7.HZ,
                    children: [
                        (0, c.jsx)(tZ.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === S,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    C(n), (0, Ev.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                T(n), E_.A.setVisibility(u.type, u.id, n);
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, c.jsx)(i3.c, {});
                })(),
                u.revoked
                    ? (0, c.jsx)(rW.p, {
                          messageType: rW.Y.INFO,
                          children: j.intl.format(j.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, Ev.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, c.jsx)(tW.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, c.jsx)(E9, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, c.jsx)(ED.A, { partner: u.type }),
            ],
        })
    );
}
function hn(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, c.jsxs)("div", {
              className: E7.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = y.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, c.jsxs)("div", {
                          className: E7.Il,
                          children: [
                              (0, c.jsx)("img", { alt: n.name, className: it()(E7.gj, E7.sN), src: i }),
                              (0, c.jsxs)("div", {
                                  children: [
                                      (0, c.jsx)("div", {
                                          className: E7.$p,
                                          children: (0, c.jsx)(z.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: E7.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, c.jsx)(z.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: E7.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, c.jsx)(t9.D, {
                                  className: E7.uH,
                                  onClick: () =>
                                      (0, ES.d1)(n, t.scopes, () => {
                                          Eh.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, c.jsx)(Ef.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, c.jsx)("div", {
                      className: E7.HZ,
                      children: (0, c.jsx)(tZ.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              EW.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function hi(e) {
    let t = EC.A.get(e);
    (0, Ev.A)({ platformType: t.type }),
        e7.default.track(A.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function hl() {
    let e = (0, Eb.gn)(),
        t = (0, iY.A)((0, E4.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, c.jsxs)("div", {
        className: E7.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, c.jsx)(
                        Eq.A,
                        { application: e, className: E7.__invalid_accountButton, innerClassName: E7.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, c.jsx)(
                        EN.A,
                        { type: e.type, className: E7.__invalid_accountButton, innerClassName: E7.U$ },
                        e.type,
                    ),
                ),
            (0, c.jsx)(i8.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, c.jsx)("div", {
                    className: it()(E7.ej, E7.__invalid_accountButton),
                    children: (0, c.jsx)(EI.vN, {
                        children: (0, c.jsx)("button", {
                            className: it()(E7.R8, E7.U$),
                            type: "button",
                            onClick: function () {
                                e2.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: hi });
                            },
                            "aria-label": j.intl.string(j.t.Zhcj9X),
                            children: (0, c.jsx)(nJ._, {
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
function hs(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = g.useMemo(() => i.filter((e) => EC.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, c.jsx)(a3.y, { type: a3.y.Type.SPINNING_CIRCLE })
            : 0 === o.length && 0 === l.length
              ? (0, c.jsx)(mL.pp, {
                    theme: r,
                    className: E7.p$,
                    children: (0, c.jsx)(mL.SG, {
                        note: j.intl.string(j.t.WenGZ2),
                        children: j.intl.string(j.t.aoLS84),
                    }),
                })
              : (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)(h.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: j.intl.format(j.t.AioIGb, { count: l.length + o.length }),
                        }),
                        l.map((e, t) =>
                            (0, c.jsx)(
                                hn,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        o.map((e, t) =>
                            (0, c.jsx)(
                                ht,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            E_.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, c.jsx)("div", { className: E7.V, children: t })
    );
}
let hr = (0, a.E2)(o.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, c.jsx)(tW.D, { label: j.intl.string(j.t["t+aGse"]), children: (0, c.jsx)(hl, {}) });
        },
        useSearchTerms: () => [
            j.intl.string(j.t.Zhcj9X),
            j.intl.string(j.t.QqTz8b),
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    }),
    ha = (0, a.E2)(o.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, m.bG)([e8.A], () => e8.A.hidePersonalInformation),
                t = (0, m.bG)([EB.A], () => EB.A.isFetching()),
                n = (0, m.bG)([EB.A], () => EB.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, m.cf)([ER.default], () => ({
                    authorizedAppsFetchState: ER.default.getFetchState(),
                    authorizedApps: ER.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, EZ.A)(l9.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, uO.Ay)(),
                o = (0, m.bG)([oP.default], () => oP.default.locale);
            return (g.useEffect(() => {
                i === ER.FetchState.NOT_FETCHED && Eh.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)(EK, {}),
                          (0, c.jsx)(hs, {
                              fetching: t || s || (r.length > 0 && i !== ER.FetchState.FETCHED),
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
            E_.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var ho = n(206828);
let hu = (0, a.zZ)(o.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, m.bG)([EB.A], () => EB.A.getAccounts()),
                t = g.useMemo(
                    () =>
                        EC.A.filter(
                            (e) =>
                                e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") ===
                                !0,
                        ).filter((t) => e.some((e) => e.type === t.type)),
                    [e],
                ),
                [n, i] = g.useState(0),
                [l, s] = g.useState(t),
                r = t !== l;
            r && (s(t), i(0));
            let a = g.useMemo(() => t[n], [t, n]),
                o = (0, iY.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: c, fetched: E } = (0, ho.RD)(o),
                h =
                    a?.type === A.fg2.RIOT_GAMES || a?.type === A.fg2.LEAGUE_OF_LEGENDS
                        ? j.intl.string(E8.default["1S6oAo"])
                        : o?.name,
                S = null != a && E,
                T = S && !c && u && o?.connectionEntrypointUrl != null;
            return (
                r || !S || T || i((e) => e + 1),
                g.useMemo(
                    () =>
                        T
                            ? {
                                  type: d.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: j.intl.format(E8.default.wUXupS, {
                                      connectionName: a.name,
                                      applicationName: h,
                                      connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                      helpCenterLink:
                                          a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                                  }),
                              }
                            : null,
                    [a, h, o, T],
                )
            );
        },
        buildLayout: () => [hr, ha],
    }),
    hd = (0, a.zZ)(o.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [ET],
        initialize: () => (
            Eh.A.fetch(),
            () => {
                ES.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    hc = (0, a.t_)(o.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: a1.L,
        buildLayout: () => [hu, hd],
    }),
    hg = (0, a.i4)(o.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: mR.LinkIcon,
        buildLayout: () => [hc],
    });
var hm = n(625657),
    hA = n(592598),
    hE = n(773371),
    hh = n(184809),
    hS = n(672396);
let hT = hx(null);
function hp() {
    var e;
    let t = hx(hT);
    (e = hT),
        k().isEqual(k().omit(t, "old_enabled"), k().omit(e, "old_enabled")) ||
            (e7.default.track(A.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (hT = t));
}
function hx(e) {
    let t = hh.default.getNotificationPositionMode(),
        n = t !== A.G6Q.DISABLED,
        i = lR.Ay.getOverlayKeybind(),
        l = lR.Ay.getOverlayChatKeybind();
    return {
        enabled: hE.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: hA.A.isNotificationDisabled(hS.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, lt.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, lt.dI)(l.shortcut) : null,
        text_opacity_slider: hh.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? hE.default.enabled,
    };
}
var hf = n(237984),
    hI = n(63035);
function h_(e) {
    e.preventDefault(), e.stopPropagation();
}
function hN(e) {
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
    return (0, c.jsxs)("div", {
        className: it()(hI.HS, d),
        children: [
            (0, c.jsxs)(Ap.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, c.jsx)("div", { className: hI.x_, children: t }),
                    (0, c.jsxs)("div", {
                        className: hI.rN,
                        children: [
                            null != n && (0, c.jsx)("div", { className: hI.$t, children: n }),
                            (0, c.jsxs)("div", {
                                className: hI.c8,
                                children: [
                                    (0, c.jsx)(z.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: hI.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, c.jsx)(z.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, c.jsx)(z.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, c.jsx)("div", { className: hI.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)("div", { className: hI.Om, children: a }),
        ],
    });
}
let hC = (0, a.E2)(o.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, c.jsx)(hN, {
            title: j.intl.string(j.t["z4/l+V"]),
            description: j.intl.string(j.t["3aZq/0"]),
            action: (0, c.jsx)(x.$, {
                variant: "primary",
                text: j.intl.string(j.t.s2nVhG),
                onClick: () => {
                    (0, hf.b)(tv.A.USER_SETTINGS, A.BRT.APP);
                },
            }),
            "aria-label": j.intl.string(j.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t["z4/l+V"])],
});
var hb = n(31300),
    hy = n(183208),
    hv = n(684013),
    hj = n(56562),
    hO = n(311043),
    hL = n(569926),
    hR = n(810412),
    hD = n(41984),
    hP = n(296027),
    hG = n(562519);
let hM = 5 * n(927813).A.Millis.DAY,
    hU = new hG.A("overlay_survey_timestamps");
function hV(e, t) {
    let i, l;
    (i = Date.now()),
        (null != (l = Array.from(hU.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < hM) ||
            Array.from(hU.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, li.openModalLazy)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e("914052"), n.e("82318")]).then(n.bind(n, 387101));
                return (i = Date.now()), hU.add(i), (n) => (0, c.jsx)(l, { ...n, clientSettingType: e, gameId: t });
            });
}
function hk() {
    (0, iJ.sL)("overlay-settings");
}
function hw(e) {
    let { className: t, game: n } = e;
    return (0, iJ.NP)() && null != n && n.elevated
        ? (0, c.jsx)("div", {
              className: t,
              children: (0, c.jsx)(rW.p, {
                  messageType: rW.Y.WARNING,
                  action: (0, c.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: hk,
                  }),
                  children: j.intl.format(j.t["LJzl+0"], { helpCenterLink: eS.A.getArticleURL(A.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var hF = n(760751),
    hB = n(9302),
    hz = n(656513);
let hX = new Set([
    hD.AR.INITIALIZING,
    hD.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    hD.AR.WAITING_FOR_MODULE_TRACKING,
    hD.AR.WAITING_FOR_OVERLAY_OPEN,
    hD.AR.WAITING_FOR_POPOUT_OPEN,
    hD.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    hD.AR.WAITING_FOR_REACT_INITIALIZATION,
    hD.AR.WAITING_FOR_PID_FOCUS,
    hD.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function hY(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = g.useState(!1);
    return (0, c.jsx)(hz.N, {
        className: hI.uR,
        collapsibleContent: (0, c.jsx)("div", { className: hI.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(hN, {
                ...l,
                onClick: (e) => {
                    var n;
                    r((n = !s)), i?.(n), t?.(e);
                },
                className: it()(hI.AC, n),
                action: (0, c.jsxs)("div", {
                    className: hI.rc,
                    children: [
                        l.action,
                        s
                            ? (0, c.jsx)(dH.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, c.jsx)(nJ._, {
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
let hH = (0, a.E2)(o.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = iZ();
        (0, hL.I)(e?.id);
        let n = e?.pid,
            i = (0, m.bG)(
                [hP.default],
                () => (null == e || null == n ? null : hP.default.getTrackedGameByPid(n)),
                [e, n],
                iz(),
            ),
            { data: l } = (0, hL.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, m.cf)(
                [hF.A, te.A, hO.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, iK.hw)(e, !1, [hF.A, te.A, hO.A]),
                [e, i],
            ),
            a = (0, m.bG)(
                [iK.Ay, hF.A, te.A, hO.A],
                () => (null == e ? null : (0, iK.xU)(e, iK.Ay, hF.A, te.A, hO.A)),
                [e],
                iz(),
            ),
            [o, u] = g.useState(r),
            [d, A] = g.useState(s),
            [E, h] = g.useState(!1);
        g.useEffect(() => {
            u(r), A(s);
        }, [r, s]);
        let S = !(0, hB.supportsLegacy)(),
            T = !(0, hB.supportsOutOfProcess)(),
            { legacyEnabled: p, oopEnabled: x } = (0, m.cf)([hP.default], () => hP.default.getGlobalEnabledStatus());
        function f(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case hR.OverlayToggledClientSettingType.LEGACY_GAME:
                    A(t), hy.Ay.toggleOverlay(e, t, o), (i = !t && d);
                    break;
                case hR.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), hy.Ay.toggleOverlay(e, d, t), (l = !t && o);
                    break;
                case hR.OverlayToggledClientSettingType.LEGACY:
                    hv.A.setEnabled(t, x), (0, hR.Q3)(t, hR.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case hR.OverlayToggledClientSettingType.OOP:
                    hv.A.setEnabled(p, t), (0, hR.Q3)(t, hR.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (i || l) &&
                hV(
                    i ? hR.OverlayToggledClientSettingType.LEGACY_GAME : hR.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let I = S && T,
            _ = !p && !x,
            N = !o && !p && d && !S,
            C = !d && !x && o && !T,
            b = i?.overlayMethod === hD.Ue.Disabled,
            y = i?.state === hD.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && hX.has(i.state) && !b,
            O = i?.overlayMethod === hD.Ue.OutOfProcess,
            L = i?.overlayMethod === hD.Ue.OutOfProcessLimitedInteraction,
            R = i?.overlayMethod === hD.Ue.Hook,
            D = i?.state === hD.AR.OVERLAY_CRASHED || i?.state === hD.AR.OVERLAY_CRASHED_DISABLED,
            P = !o && !d,
            [G, M] = (function () {
                switch (!0) {
                    case y && O:
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
                    case y && L:
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
                    case y && R:
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
                                    case i?.fullscreenType !== hj.aI.BORDERLESS_FULLSCREEN:
                                        return j.intl.string(j.t.mJmbeC);
                                    case T:
                                        return j.intl.string(j.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return j.intl.string(j.t.WiY24u);
                                    case !x:
                                        return j.intl.string(j.t.cAFVsL);
                                    case !(l?.supportsOutOfProcessOverlay ?? !0):
                                        return j.intl.string(j.t.XcGEcs);
                                    default:
                                        return j.intl.string(j.t.bJXH2v);
                                }
                            })(),
                        ];
                    case D:
                        return [j.intl.string(j.t.OFC2aw), null];
                    case I:
                        return [j.intl.string(j.t.m7X4az), null];
                    case _:
                        return [j.intl.string(j.t["9DUS5l"]), null];
                    case P:
                        return [j.intl.string(j.t.nQ9EdJ), null];
                    case N:
                    case C:
                        return [j.intl.string(j.t.VWUn0a), null];
                    case v:
                        if (O) return [j.intl.string(j.t["s8+CFq"]), null];
                        if (R) return [j.intl.string(j.t.JEEdqt), null];
                        if (L) return [j.intl.string(j.t.pzBMwY), null];
                        return [j.intl.string(j.t["2Xhy9k"]), null];
                    case null == i:
                        return [j.intl.string(j.t.vwHPRi), null];
                    case b: {
                        let e = i?.fullscreenType === hj.aI.FULLSCREEN ? j.intl.string(j.t.mJmbeC) : null;
                        return [j.intl.string(j.t.VPW4XY), e];
                    }
                    default:
                        return [j.intl.string(j.t.ONovP5), null];
                }
            })();
        (0, eA.Ay)(() => {
            hy.Ay.getDetectableGames();
        });
        let [U, V] = g.useMemo(
            () =>
                v
                    ? ["text-muted", nW.A.colors.TEXT_MUTED.css]
                    : y && L
                      ? ["text-feedback-warning", nW.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && O
                        ? ["text-feedback-positive", nW.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && R
                          ? ["text-strong", nW.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", nW.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, L, O, R],
        );
        return null == e
            ? null
            : (0, c.jsxs)(hY, {
                  onExpand: h,
                  className: E ? hI.tx : void 0,
                  title: (0, c.jsxs)(c.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, c.jsx)(i8.m, {
                                    text: j.intl.string(j.t["4PJP5p"]),
                                    children: (0, c.jsx)(EL.A, {
                                        size: 16,
                                        color: nW.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, c.jsx)(Ex.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: nW.A.colors.WHITE.css,
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
                          y || v
                              ? (0, c.jsx)(hb.k, { size: "xxs", color: V })
                              : (0, c.jsx)("div", { className: hI.W4 }),
                          (0, c.jsx)(z.E, {
                              variant: "text-xs/semibold",
                              color: U,
                              children: j.intl.string(j.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, c.jsx)(iq.A, { game: t, pid: e?.pid, size: iq.M.MEDIUM }),
                  "aria-label": j.intl.string(j.t["87O5GC"]),
                  action: (0, c.jsx)(t9.D, {
                      onClick: (e) => h_(e),
                      children: (0, c.jsx)(tZ.d, {
                          checked: (o && x) || (d && p),
                          disabled: I,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          hy.Ay.toggleOverlay(e, t, t), A(t), u(t), (i = !t && d), (l = !t && o);
                                          break;
                                      case "global":
                                          hv.A.setEnabled(t, t), (i = !t && p), (l = !t && x);
                                          break;
                                      case "both":
                                          hv.A.setEnabled(t, t),
                                              hy.Ay.toggleOverlay(e, t, t),
                                              A(t),
                                              u(t),
                                              (i = (!t && p) || (!t && d)),
                                              (l = (!t && x) || (!t && o));
                                  }
                                  let s = null;
                                  i
                                      ? (s =
                                            "game" === n
                                                ? hR.OverlayToggledClientSettingType.LEGACY_GAME
                                                : hR.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? hR.OverlayToggledClientSettingType.OOP_GAME
                                                : hR.OverlayToggledClientSettingType.OOP),
                                      null != s && hV(s, e.id ?? null);
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
                  warning: (0, c.jsx)(hw, { className: hI.Hh, game: e }),
                  children: [
                      (0, c.jsx)(hN, {
                          title: j.intl.string(j.t["7BlVIs"]),
                          description: j.intl.string(j.t.ndgADE),
                          hint: x ? void 0 : j.intl.string(j.t.cAFVsL),
                          "aria-label": j.intl.string(j.t["7BlVIs"]),
                          action: (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(tZ.d, {
                                      checked: o && x,
                                      disabled: T,
                                      onChange: (e) => {
                                          e && !x
                                              ? f(e, hR.OverlayToggledClientSettingType.OOP)
                                              : f(e, hR.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, c.jsx)("div", { className: hI.Kz }),
                              ],
                          }),
                      }),
                      (0, c.jsx)(hN, {
                          title: j.intl.string(j.t.BfFpW1),
                          description: j.intl.string(j.t.OzInYk),
                          hint: p ? void 0 : j.intl.string(j.t["3sYHXm"]),
                          "aria-label": j.intl.string(j.t.BfFpW1),
                          action: (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(tZ.d, {
                                      checked: d && p,
                                      disabled: S,
                                      onChange: (e) => {
                                          e && !p
                                              ? f(e, hR.OverlayToggledClientSettingType.LEGACY)
                                              : f(e, hR.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, c.jsx)("div", { className: hI.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = iZ();
        return null != e;
    },
    useSearchTerms: () => [j.intl.string(j.t["9cb1Uz"])],
});
var hK = n(206885);
function hW(e) {
    let { game: t, gameApplication: n } = e,
        i = g.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, m.bG)([iX.A], () => (null != n ? n : iX.A.getApplication(t?.id)), [n, t]);
    return (0, c.jsx)(iq.A, { game: l, pid: i, size: iq.M.SMALL });
}
function hZ(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, hL.I)(t?.id);
    let o = (0, m.cf)([iK.Ay, hF.A, te.A, hO.A], () => (0, iK.xU)(t, iK.Ay, hF.A, te.A, hO.A)),
        u = (0, m.cf)([hF.A, te.A, hO.A], () => (0, iK.hw)(t, !1, [hF.A, te.A, hO.A]), [t]),
        d = l(u),
        [A, E] = g.useState(d);
    return (
        g.useEffect(() => {
            E(d);
        }, [d]),
        (0, c.jsx)(hN, {
            title: t.name,
            icon: (0, c.jsx)(hW, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, c.jsxs)(c.Fragment, {
                children: [
                    (0, c.jsx)(tZ.d, {
                        checked: A,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return (n = !e && A), void (E(e), s(e, o, u), n && hV(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, c.jsx)("div", { className: hI.Kz }),
                ],
            }),
        })
    );
}
let hq = (0, a.E2)(o.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = g.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, m.cf)([hP.default], () =>
                    hP.default.getGlobalEnabledStatus(),
                ),
                l = (0, m.yK)([iK.Ay], () => iK.Ay.getGamesSeen(!0)).filter((e) => !(0, AV.n1)(e)),
                s = (0, iY.A)(l.map((e) => e.id)),
                r = !(0, hB.supportsLegacy)();
            function a(e) {
                hv.A.setEnabled(e, i);
                let t = iK.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, hR.Q3)(e, hR.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && hV(hR.OverlayToggledClientSettingType.LEGACY, t);
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                hy.Ay.toggleOverlay(t, e, i);
            }
            let u = g.useMemo(
                () =>
                    (0, hB.supportsLegacy)()
                        ? r
                            ? j.intl.string(j.t.r9jEVw)
                            : j.intl.string(j.t.OzInYk)
                        : j.intl.string(j.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, c.jsx)(hN, {
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      className: hI.dA,
                      action: (0, c.jsxs)(c.Fragment, {
                          children: [
                              (0, c.jsx)(tZ.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              hK.O && (0, c.jsx)("div", { className: hI.Kz }),
                          ],
                      }),
                  })
                : (0, c.jsxs)(hY, {
                      onExpand: t,
                      className: e ? hI.tx : void 0,
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      action: (0, c.jsx)(t9.D, {
                          onClick: (e) => h_(e),
                          children: (0, c.jsx)(tZ.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, c.jsx)("div", {
                              className: hI.SC,
                              children: (0, c.jsx)(z.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, c.jsx)(S.Ip, {
                              className: hI.XG,
                              children: l.map((e, t) =>
                                  (0, c.jsx)(
                                      hZ,
                                      {
                                          rawGame: e,
                                          clientSettingType: hR.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: s[t],
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
    hQ = (0, a.E2)(o.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = g.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, m.cf)([hP.default], () =>
                    hP.default.getGlobalEnabledStatus(),
                ),
                l = !(0, hB.supportsOutOfProcess)(),
                s = (0, m.yK)([iK.Ay], () => iK.Ay.getGamesSeen(!0)).filter((e) => !(0, AV.n1)(e)),
                r = (0, iY.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                hv.A.setEnabled(i, e);
                let l = iK.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, hR.Q3)(e, hR.OverlayToggledClientSettingType.OOP, l),
                    t && hV(hR.OverlayToggledClientSettingType.OOP, l);
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                hy.Ay.toggleOverlay(t, e, i);
            }
            let u = g.useMemo(
                () => (hK.O ? (l ? j.intl.string(j.t.C7bLTQ) : j.intl.string(j.t.ndgADE)) : j.intl.string(j.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, c.jsx)(hN, {
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      className: hI.dA,
                      action: (0, c.jsxs)(c.Fragment, {
                          children: [
                              (0, c.jsx)(tZ.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              hK.O && (0, c.jsx)("div", { className: hI.Kz }),
                          ],
                      }),
                  })
                : (0, c.jsxs)(hY, {
                      onExpand: t,
                      className: e ? hI.tx : void 0,
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      action: (0, c.jsx)(t9.D, {
                          onClick: (e) => h_(e),
                          children: (0, c.jsx)(tZ.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, c.jsx)("div", {
                              className: hI.SC,
                              children: (0, c.jsx)(z.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, c.jsx)(S.Ip, {
                              className: hI.XG,
                              children: s.map((e, t) =>
                                  (0, c.jsx)(
                                      hZ,
                                      {
                                          rawGame: e,
                                          clientSettingType: hR.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: l,
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
    hJ = (0, a.zZ)(o.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [hH, hQ, hq, hC],
    }),
    h$ = (0, a.zD)(o.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, m.bG)([hh.default], () => !hh.default.disableClickableRegions),
        setValue: (e) => {
            hv.A.setDisableClickableRegions(!e);
        },
        useTitle: () => j.intl.string(j.t["+eFXxq"]),
        useSubtitle: () => j.intl.string(j.t.kivMAp),
    }),
    h0 = (0, a.E2)(o.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, m.bG)([lR.Ay], () => lR.Ay.getOverlayKeybind()),
                t = !(0, hB.supportsLegacy)(),
                n = !(0, hB.supportsOutOfProcess)(),
                [i, l] = (0, m.yK)([iK.Ay], () => [iK.Ay.canShowAdminWarning, iK.Ay.getVisibleGame()], []),
                s = (0, iJ.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, lR.DV)(e?.shortcut ?? []);
            return (0, c.jsx)("div", {
                className: hI.hc,
                children: (0, c.jsxs)("div", {
                    className: hI.eH,
                    children: [
                        (0, c.jsxs)("div", {
                            className: hI.Bu,
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
                                        className: hI.y7,
                                        children: j.intl.string(j.t.NsowVa),
                                    }),
                                a &&
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: hI.y7,
                                        children: j.intl.string(j.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, c.jsx)("div", {
                            className: hI.IH,
                            children: (0, c.jsx)(le.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    tl()(null != e, "Keybind should never be undefined"),
                                        iw.A.setKeybind({ ...e, shortcut: t });
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.VsAZcC)],
    });
var h1 = n(515183),
    h2 = n(682763);
let h3 = (0, a.zD)(o.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = iZ();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = iZ();
            return null != e && (0, h1.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = iZ(),
                n = t?.id,
                i = (0, m.bG)([hA.A], () => hA.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, h1.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = iH.A.getStreamerActiveStreamMetadata()),
                    (l = iW(
                        t,
                        (i =
                            null != (n = iK.Ay.getVisibleGame())
                                ? iK.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: iX.A.getApplication(l) ?? void 0 });
            null != s && (0, h2.x8)(s.id, e);
        },
        useTitle: () => j.intl.string(j.t.wgVQND),
        useSubtitle: () => j.intl.string(j.t["5SsyF5"]),
    }),
    h6 = (0, a.zZ)(o.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [h0, h3, h$] });
var h5 = n(93465);
let h4 = [
    {
        title: j.t.eVE4LX,
        description: j.t["72WNqk"],
        disabledSetting: h5.M.TEXT_CHAT,
        key: o.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: j.t.oifnSh,
        description: j.t.bgU5r0,
        disabledSetting: h5.M.WELCOME_GENERAL,
        key: o.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: j.t.hqsZJW,
        description: j.t.kHjdqc,
        disabledSetting: h5.M.GO_LIVE_NUDGE,
        key: o.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: j.t.sop3rn,
        description: j.t.pjgffc,
        disabledSetting: h5.M.GAME_ACTIVITY,
        key: o.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: j.t["2QVhbb"],
        description: j.t.wQ4ilB,
        disabledSetting: h5.M.NOW_PLAYING,
        key: o.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: j.t.giM9fA,
        description: j.t.EhAfWj,
        disabledSetting: h5.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: o.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, nA.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, m.bG)([hA.A], () => hA.A.isNotificationDisabledBySetting(h5.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function h8(e) {
    return (0, a.zD)(e.key, {
        useTitle: () => j.intl.string(e.title),
        useSubtitle: () => j.intl.string(e.description),
        useValue: () => !(0, m.bG)([hA.A], () => hA.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            hv.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let h7 = (0, a.FW)(o.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => h4.map(h8),
    }),
    h9 = (0, a.zZ)(o.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.xOE5bA),
        buildLayout: () => [h7],
    }),
    Se = (0, a.Hn)(o.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => j.intl.string(j.t.dnvZSg),
        useValue: () => (0, m.bG)([hh.default], () => hh.default.getAvatarSizeMode()),
        setValue: (e) => {
            hv.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: j.intl.string(j.t.YcOxtr), value: A.OSZ.LARGE },
            { id: "small", label: j.intl.string(j.t.BKIKqx), value: A.OSZ.SMALL },
        ],
    }),
    St = (0, a.Hn)(o.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => j.intl.string(j.t.J0dpcB),
        useValue: () => (0, m.bG)([hh.default], () => hh.default.getDisplayNameMode()),
        setValue: (e) => {
            hv.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: A.pwA.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: A.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: j.intl.string(j.t.ekjlPL), value: A.pwA.NEVER },
        ],
    }),
    Sn = (0, a.Hn)(o.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => j.intl.string(j.t.swsWWC),
        useValue: () => (0, m.bG)([hh.default], () => hh.default.getDisplayUserMode()),
        setValue: (e) => {
            hv.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: A.f5z.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: A.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var Si = n(391973),
    Sl = n(489277),
    Ss = n(897720),
    Sr = n(38502);
function Sa() {
    let e = Sl.A.getWidgetByType(A.uss.VOICE_V3);
    if (null == e) return null;
    let t = Sr.A.getWidget(e.id);
    return null != t && (0, Ss.ZO)(t) ? t : null;
}
n(392164);
let So = (0, a.sN)(o.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => j.intl.string(j.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? j.intl.string(j.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = Sa();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? j.intl.string(j.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = Sa();
        null != t &&
            (e < 1
                ? (0, Si.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, Si.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var Su = n(450740),
    Sd = n(968898),
    Sc = n(889227),
    Sg = n(288737);
function Sm(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new Sg.A({
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
        user: new Sc.A({ id: l, username: e }),
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
let SA = (0, a.E2)(o.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, m.cf)([hh.default], () => ({
                    avatarSizeMode: hh.default.getAvatarSizeMode(),
                    displayNameMode: hh.default.getDisplayNameMode(),
                    displayUserMode: hh.default.getDisplayUserMode(),
                })),
                [s] = g.useState(() => [
                    Sm(j.intl.string(j.t.C0ZDvo), !0, !1),
                    Sm(j.intl.string(j.t.iOtj8E), !1, !1, !0),
                    Sm(j.intl.string(j.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, m.bG)([Sl.A, Sr.A], () => {
                    let e = Sl.A.getWidgetByType(A.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = Sr.A.getWidget(e.id);
                    return null != t && (0, Ss.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = Sm(t.username)).user = t), e) : null, ...s].filter(n7.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, c.jsx)(EM.N, {
                    theme: A.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, c.jsxs)("div", {
                            className: it()(hI.Y5, e),
                            children: [
                                (0, c.jsx)("div", {
                                    className: hI.kJ,
                                    children: (0, c.jsx)(Su.DH, {
                                        id: "voice-widget",
                                        title: j.intl.string(j.t.KNJ6Vq),
                                        channel: (0, b.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: A.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: i,
                                        displayUserMode: l,
                                        avatarSizeMode: n,
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
                                    className: hI.R$,
                                    children: [
                                        (0, c.jsx)(Sd.Pl, { children: j.intl.string(j.t.KNJ6Vq) }),
                                        (0, c.jsx)(Sd.CS, {}),
                                        (0, c.jsx)(Sd.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, c.jsx)("div", { className: hI.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    SE = (0, a.zZ)(o.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => j.intl.string(j.t.r1TZfh),
        buildLayout: () => [SA, Se, St, Sn, So],
    });
var Sh = n(54761);
function SS() {
    let [e, t] = (0, cm.kn)([er.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, w.Ay)(() => () => {
        t(cI.i.AUTO_DISMISS);
    }),
    e !== er.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsxs)("div", {
                      className: Sh.xC,
                      children: [
                          (0, c.jsx)("div", {
                              children: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: Sh.tl,
                              }),
                          }),
                          (0, c.jsx)("div", {
                              children: (0, c.jsxs)("div", {
                                  className: Sh.vJ,
                                  children: [
                                      (0, c.jsx)(h.D, {
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
                                  className: Sh.lh,
                              }),
                          }),
                          (0, c.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Sh.VV,
                              children: (0, c.jsx)(x.$, {
                                  variant: "primary",
                                  text: j.intl.string(j.t.Q26diF),
                                  onClick: () => void t(cI.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, c.jsx)(i3.c, { className: Sh.yF }),
              ],
          });
}
function ST() {
    let e = (0, m.bG)([e8.A], () => e8.A.enabled),
        t = (0, nA.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(ik.w, {
                      type: "warning",
                      children: j.intl.format(j.t.fuEX5B, {
                          onClick: function () {
                              return (0, nt.openUserSettings)(o.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, c.jsx)(i3.c, { className: Sh.yF }),
              ],
          })
        : null;
}
let Sp = (0, a.t_)(o.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                hp(),
                lR.Ay.addChangeListener(hp),
                hA.A.addChangeListener(hp),
                hh.default.addChangeListener(hp),
                hE.default.addChangeListener(hp),
                eW.isPlatformEmbedded && (0, Aw.a2)(),
                () => {
                    lR.Ay.removeChangeListener(hp),
                        hA.A.removeChangeListener(hp),
                        hh.default.removeChangeListener(hp),
                        hE.default.removeChangeListener(hp),
                        eW.isPlatformEmbedded && (0, Aw.e0)();
                }
            );
        },
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        decoration: {
            type: d.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(SS, {}), (0, c.jsx)(ST, {})] });
            },
        },
        buildLayout: () => [hJ, h6, SE, h9],
    }),
    Sx = (0, a.i4)(o.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        icon: hm.l,
        usePredicate: nh.b_,
        buildLayout: () => [Sp],
    });
var Sf = n(687966);
let SI = (0, a.AK)(o.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.OYYY6q),
        destinationKey: o.X.ACTIVITY_PRIVACY_PANEL,
    }),
    S_ = (0, a.gN)(o.X.REGISTERED_GAMES_RELATED_SETTINGS, { buildLayout: () => [SI] });
var SN = n(227309),
    SC = n(1215),
    Sb = n(39623),
    Sy = n(952270),
    Sv = n(138134),
    Sj = n(29160),
    SO = n(552366),
    SL = n(938442);
let SR = (0, eW.isWindows)();
function SD(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, hL.I)(t.id);
    let o = (0, m.cf)([iK.Ay, hF.A, te.A, hO.A], () => (0, iK.xU)(t, iK.Ay, hF.A, te.A, hO.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, m.cf)([iK.Ay], () => ({
            canToggleDetection: null == a || iK.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: iK.Ay.isDetectionEnabled(o),
        })),
        E = (0, m.bG)([iK.Ay], () => iK.Ay.getVisibleGame()),
        [h, S] = g.useState(!1),
        T = g.useMemo(
            () =>
                (0, AV.n1)(o)
                    ? r
                        ? o.gameName
                        : j.intl.formatToPlainString(j.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [p, x] = g.useState(T ?? "???"),
        f = it()(SL.tR, {
            [SO.LO]: !i,
            [SO.Rw]: i,
            [SO.FB]: null != o && i,
            [SO.xL]: r,
            [SO.fG]: null != s && s.length > 0,
        });
    function I() {
        null != s && s.length > 0 && d
            ? (0, li.openModalLazy)(async () => {
                  let { Modal: e } = await n.e("304823").then(n.bind(n, 158954));
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
                                      hy.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : hy.Ay.toggleDetection(o);
    }
    let _ = null != E && (0, iK.Es)(o) === (0, iK.Es)(E),
        N = (null != a && a.id === E?.id) || _ || (null != s && s.some((e) => e.id === E?.id));
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: f,
                children: [
                    (0, c.jsxs)("div", {
                        className: it()(SO.$K, SL.Vd),
                        children: [
                            o.verified && !l
                                ? (0, c.jsxs)("div", {
                                      className: SO.HS,
                                      children: [
                                          (0, c.jsx)("div", { className: SO.mO, children: T }),
                                          (0, c.jsx)(i8.m, {
                                              text: j.intl.string(j.t["4PJP5p"]),
                                              children: (0, c.jsx)(EL.A, {
                                                  className: SO.qf,
                                                  size: 18,
                                                  color: nW.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, c.jsx)(Ex.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: nW.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, c.jsx)("input", {
                                      className: it()(SO.mO, SO.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: p,
                                      onBlur: function () {
                                          o.name !== p && hy.Ay.editName(o, p);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === l_.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => x(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || _
                                        ? (e = j.intl.string(j.t.VbV5dv))
                                        : null != n && "" !== n && (e = j.intl.format(j.t["gGeOE+"], { when: n })),
                                    (0, c.jsx)("div", {
                                        className: SO.GN,
                                        children: (0, c.jsx)(Sj.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
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
                    l || h
                        ? null
                        : (0, c.jsx)("div", {
                              className: it()(SL.tR, SL.oA, SL.LT, SO.E3),
                              children: (0, c.jsx)(i8.m, {
                                  text: j.intl.string(j.t["y0B+lo"]),
                                  children: (0, c.jsx)(t9.D, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: SO.ym,
                                      onClick: function () {
                                          if (h) return;
                                          let e = null != o.id ? hF.A.getDetectableGame(o.id) : null;
                                          e7.default.track(A.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, AV.n1)(o) ? o.gameName : o.name,
                                          }),
                                              S(!0),
                                              (0, li.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      n.e("568035"),
                                                      n.e("627495"),
                                                  ]).then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, c.jsx)(t, {
                                                          ...n,
                                                          detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                                                      });
                                              });
                                      },
                                      children: (0, c.jsx)(Sv.FlagIcon, {
                                          size: "md",
                                          color: "currentColor",
                                          className: SO.Lj,
                                          colorClass: SO.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, c.jsx)(Sb.EyeIcon, {
                                          size: "md",
                                          color: "currentColor",
                                          className: SO.Lj,
                                          colorClass: SO.GS,
                                      })
                                    : (0, c.jsx)(Sy.EyeSlashIcon, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? SO.$V : SO.zN,
                                          colorClass: SO.GS,
                                      });
                        return (0, c.jsx)("div", {
                            className: it()(SL.tR, SL.oA, SL.LT, SO.E3),
                            children: (0, c.jsx)(i8.m, {
                                text: j.intl.string(j.t.QmitzM),
                                children: u
                                    ? (0, c.jsx)(t9.D, {
                                          "aria-label": j.intl.string(j.t.QmitzM),
                                          className: SO.ym,
                                          onClick: I,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!SR || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            n = e
                                ? (0, c.jsx)(hb.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: SO.Lj,
                                      colorClass: SO.GS,
                                  })
                                : (0, c.jsx)(SC.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: SO.$V,
                                      colorClass: SO.GS,
                                  }),
                            i = t
                                ? (0, c.jsx)(i8.m, {
                                      text: j.intl.string(j.t.Vfw2L5),
                                      children: (0, c.jsx)("i", { className: SO.kb }),
                                  })
                                : null;
                        return (0, c.jsxs)("div", {
                            className: it()(SL.tR, SL.oA, SL.LT, SO.E3),
                            children: [
                                i,
                                (0, c.jsx)(i8.m, {
                                    text: j.intl.string(j.t["1+O+Tu"]),
                                    children: (0, c.jsx)(t9.D, {
                                        "aria-label": j.intl.string(j.t["1+O+Tu"]),
                                        className: SO.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void hy.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (i && !l) || N
                        ? null
                        : (0, c.jsx)(mP.A, {
                              className: SO.LS,
                              onClick: function () {
                                  hy.Ay.deleteEntry(o),
                                      s?.forEach((e) => {
                                          hy.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !i &&
                (0, c.jsx)("div", {
                    className: SO.AQ,
                    children: s.map((e, t) =>
                        (0, c.jsxs)(
                            g.Fragment,
                            {
                                children: [
                                    (0, c.jsx)(SD, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, c.jsx)("div", { className: SO.PQ }),
                                ],
                            },
                            (0, iK.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function SP() {
    let e = (0, m.bG)([nP.A], () => nP.A.theme);
    return (0, c.jsxs)(mL.pp, {
        theme: e,
        className: mw.eT,
        children: [
            (0, c.jsx)(mL.G8, { darkSrc: n(839628), lightSrc: n(446404), width: 430, height: 250 }),
            (0, c.jsx)(mL.SG, { children: j.intl.string(j.t["1yiJwn"]) }),
        ],
    });
}
function SG() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = AB();
    return 0 === e.length
        ? (0, c.jsx)(SP, {})
        : (0, c.jsx)(nq.n, {
              children: (0, c.jsx)("div", {
                  children: e.map((e) =>
                      (0, c.jsx)(
                          SD,
                          { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === SN.a7 ? t : void 0 },
                          (0, iK.Es)(e),
                      ),
                  ),
              }),
          });
}
let SM = (0, a.E2)(o.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, c.jsx)(SG, {}),
});
var SU = n(424994);
let SV = (0, a.zZ)(o.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [SM, S_],
    useTitle: () => j.intl.string(j.t.jCOdvx),
    useSubtitle: () => j.intl.format(j.t.KPA3m9, { igdbLink: SU.s8 }),
});
var Sk = n(890497),
    Sw = n(853270),
    SF = n(969426);
function SB(e) {
    let { onClose: t } = e,
        n = (0, m.bG)([iK.Ay], () => iK.Ay.getCandidateGames()),
        [i, l] = g.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, c.jsxs)(r3.l, {
        className: it()(Sw.H, SF.Y_),
        "aria-label": j.intl.string(j.t.GTCx0p),
        children: [
            (0, c.jsx)(Sk.Z, {
                selectionMode: "single",
                placeholder: j.intl.string(j.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, c.jsx)(i3.c, { className: it()(mw.Ot, mw.QB) }),
            (0, c.jsxs)("div", {
                className: it()(Sw.o, SL.xM),
                children: [
                    (0, c.jsx)(Ah.Q, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: t }),
                    (0, c.jsx)(x.$, {
                        variant: "primary",
                        text: j.intl.string(j.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (hy.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var Sz = n(475007);
let SX = (0, a.E2)(o.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.GTCx0p)],
    Component: function () {
        let e = g.useRef(null);
        return (0, c.jsxs)("div", {
            className: it()(Sz.a, mw.Gf),
            children: [
                (0, c.jsx)("span", { children: j.intl.string(j.t.xwhoqM) }),
                (0, c.jsx)(r2.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, c.jsx)(SB, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, c.jsx)(Ah.Q, {
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
function SY() {
    return (0, c.jsx)("div", {
        className: it()(SL.tR, SO.eS, SO.Rw),
        children: (0, c.jsxs)("div", {
            className: it()(SO.$K, SL.Vd),
            children: [
                (0, c.jsx)("div", { className: SO.mO, children: j.intl.string(j.t.H68X9x) }),
                (0, c.jsx)("div", { className: SO.GN, children: j.intl.string(j.t.T5Ilmw) }),
            ],
        }),
    });
}
let SH = (0, a.E2)(o.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = AB(),
                n = (0, m.bG)([iK.Ay], () => iK.Ay.getVisibleGame());
            return null != n
                ? (0, c.jsx)(
                      SD,
                      {
                          rawGame: n,
                          isOverride: t.has(n.exePath),
                          nowPlaying: !0,
                          subgames: n.id === SN.a7 ? e : void 0,
                      },
                      (0, iK.Es)(n),
                  )
                : (0, c.jsx)(SY, {});
        },
    }),
    SK = (0, a.zZ)(o.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => j.intl.string(j.t["MY9/Oe"]),
        buildLayout: () => [SH, SX],
    }),
    SW = (0, a.t_)(o.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        buildLayout: () => [SK, SV],
    }),
    SZ = (0, a.i4)(o.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        icon: Sf.GameControllerIcon,
        usePredicate: nh.Pi,
        buildLayout: () => [SW],
    }),
    Sq = (0, a.WI)(o.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [SZ, EE, Sx, hg],
    });
var SQ = n(631670),
    SJ = n(619499),
    S$ = n(836602),
    S0 = n(591179),
    S1 = n(854627),
    S2 = n(975732),
    S3 = n(761508),
    S6 = n(159001),
    S5 = n(344346),
    S4 = n(919395),
    S8 = n(68750);
function S7(e) {
    let { title: t, children: n } = e;
    return (0, c.jsxs)("div", {
        children: [(0, c.jsx)(h.D, { variant: "text-md/medium", className: S8.Vf, children: t }), n],
    });
}
function S9(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, c.jsx)("div", {
        className: it()(S8.UA, n),
        children: (0, c.jsxs)("div", {
            className: it()(S8.yt, i),
            children: [
                (0, c.jsx)("div", {
                    className: it()(S8.Fp, a && S8.Oz),
                    children: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(S7, { title: s ?? j.intl.string(j.t.Zb06yP), children: l }),
                            null != r ? (0, c.jsx)(S7, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, c.jsx)("div", { className: S8.oB, children: t }),
            ],
        }),
    });
}
var Te = n(986687),
    Tt = n(101058),
    Tn = n(321191),
    Ti = n(696451),
    Tl = n(590941);
function Ts() {
    return (0, c.jsxs)("div", {
        className: Tl.p$,
        children: [
            (0, c.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Tl.Sl }),
            (0, c.jsx)(h.D, { className: Tl.h8, variant: "heading-lg/extrabold", children: j.intl.string(j.t.Z1OZCV) }),
            (0, c.jsx)(z.E, { className: Tl.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, c.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Tl.h8,
                children: (0, c.jsx)(x.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: function () {
                        (0, tq.pX)(A.BVt.GUILD_DISCOVERY), (0, tP.default)();
                    },
                }),
            }),
        ],
    });
}
var Tr = n(81400),
    Ta = n(450232),
    To = n(252732),
    Tu = n(355622),
    Td = n(408018),
    Tc = n(273754),
    Tg = n(290386),
    Tm = n(486264);
let TA = (0, tU.Ld)(),
    TE = (0, b.createChannelRecord)({ id: "1", type: A.rbe.DM }),
    Th = (0, tU.Ld)();
function TS(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, Tg.U)({ location: "profile_customization_about_me" }),
        [u, d] = g.useState(l ?? r),
        [m, A] = g.useState((0, Td.x7)(u)),
        E = g.useRef(r),
        h = g.useRef(!1);
    return (
        g.useEffect(() => {
            if (E.current !== r) {
                let e = (0, Td.x7)(r);
                d(r), A(e);
            }
            E.current = r;
        }, [r]),
        g.useEffect(() => {
            void 0 !== l || u === r || h.current || (d(r), A((0, Td.x7)(r)));
        }, [l, r, u]),
        (0, c.jsxs)(rQ.A, {
            title: t,
            titleId: TA,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, c.jsx)(Tc.Ay, {
                    "aria-describedby": Th,
                    "aria-labelledby": TA,
                    className: Tm.i,
                    innerClassName: Tm.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), A(n), i(t));
                    },
                    placeholder: s,
                    channel: TE,
                    textValue: u,
                    richValue: m,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: nt.USER_SETTINGS_MODAL_KEY,
                    type: Tu.oU.PROFILE_BIO_INPUT,
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
                (0, c.jsx)(i7.A, { id: Th, children: j.intl.format(j.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var TT = n(930861),
    Tp = n(821956),
    Tx = n(562819),
    Tf = n(84540),
    TI = n(467690);
function T_(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eL.Ay)(),
        o = (0, S4.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, S4.CP)(n?.id),
        g = r ? TT.wL : sG.$n;
    return (0, c.jsx)(rQ.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, c.jsxs)("div", {
            className: TI.NC,
            children: [
                (0, c.jsx)(g, {
                    size: sG.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Tx.L)({ analyticsLocations: a, guild: n });
                    },
                    className: it()({ [TI.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TI.DT,
                        children: (0, c.jsx)(x.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, Tp.uZ)(t, n) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: function () {
                                (0, Tf.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TN = n(339984),
    TC = n(942132);
let Tb = [{ name: "gif", extensions: ["gif"] }];
function Ty(e) {
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
            withHighlight: m = !1,
        } = e,
        { newestAnalyticsLocation: A } = (0, eL.Ay)(),
        E = m ? TT.wL : sG.$n,
        h = g.useCallback(() => {
            (0, To.XD)({
                uploadType: TN.HL.AVATAR,
                analyticsSource: A,
                filters: u ? Tb : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, A, u]);
    return (0, c.jsx)(rQ.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, c.jsxs)("div", {
            className: TC.NC,
            children: [
                (0, c.jsx)(E, {
                    className: it()({ [TC.yj]: m }),
                    size: sG.$n.Sizes.SMALL,
                    onClick: h,
                    children: s ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TC.DT,
                        children: (0, c.jsx)(x.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? j.intl.string(j.t.TDjKDm) : j.intl.string(j.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var Tv = n(248778),
    Tj = n(810188);
function TO(e) {
    let { user: t, guildId: n, className: i } = e,
        l = r5.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, eL.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, S4.B0)(t, n),
        d = (0, Tv.ux)("DisplayNameStylesSection"),
        [m, E] = (0, cm.kn)(d ? [er.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        h = m === er.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        S = (0, g.useCallback)(() => {
            E(cI.i.TAKE_ACTION),
                e7.default.track(A.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eR.L)({ analyticsLocations: s, guildId: n });
        }, [s, n, E]),
        T = (0, g.useCallback)(() => {
            (0, Tf.p)({ displayNameStyles: null }), e7.default.track(A.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        p = (0, g.useCallback)(() => {
            (0, Tf.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        f = void 0 !== o ? o : null != n ? a : r;
    return (0, c.jsx)(rQ.A, {
        title: j.intl.string(eD.default["86GtGH"]),
        titleBadge: h ? (0, c.jsx)(e9.Lp, { text: j.intl.string(j.t.y2b7CA), className: Tj.A }) : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, c.jsxs)("div", {
            className: Tj.N,
            children: [
                (0, c.jsx)(x.$, { variant: "primary", size: "sm", text: j.intl.string(eD.default.vJqrIg), onClick: S }),
                null == n &&
                    null != f &&
                    (0, c.jsx)(x.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(eD.default.ymq8WQ),
                        onClick: T,
                    }),
                null != n &&
                    null != f &&
                    (0, c.jsx)(x.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(eD.default["j/KRxc"]),
                        onClick: p,
                    }),
            ],
        }),
    });
}
var TL = n(637193),
    TR = n(622410);
function TD(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, eL.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, S4.rv)(t, n?.id),
        d = g.useCallback(() => {
            (0, TL.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        m = g.useCallback(() => {
            (0, Tf.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, c.jsx)(rQ.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, c.jsxs)("div", {
            className: TR.u,
            children: [
                (0, c.jsx)(x.$, { variant: "primary", size: "sm", text: j.intl.string(j.t.BwdeM1), onClick: d }),
                (void 0 === o ? (s ? a : r) != null : null != o) &&
                    (0, c.jsx)(x.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t["9zwziY"]),
                        onClick: m,
                    }),
            ],
        }),
    });
}
var TP = n(88524);
function TG(e) {
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
        { newestAnalyticsLocation: g } = (0, eL.Ay)(),
        m = d ? TT.wL : sG.$n;
    return (0, c.jsx)(rQ.A, {
        className: s,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, c.jsxs)("div", {
            className: TP.NC,
            children: [
                (0, c.jsx)(m, {
                    className: it()({ [TP.yj]: d }),
                    size: sG.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, To.XD)({ uploadType: TN.HL.BANNER, analyticsSource: g, guildId: l, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TP.DT,
                        children: (0, c.jsx)(x.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? j.intl.string(j.t.jHlJNS) : j.intl.string(j.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var TM = n(617061),
    TU = n(625613);
function TV(e) {
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
        { analyticsLocations: u } = (0, eL.Ay)(),
        d = r5.Ay.canUsePremiumProfileCustomization(t),
        m = (0, S4.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: E, errors: h } = (0, S4.nZ)(n?.id);
    g.useEffect(() => {
        d &&
            (e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tF.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            }),
            (0, tV.sq)(A.U7l.PREMIUM_UPSELL_VIEWED, u, () => (0, tk.uq)(tF.e.PROFILE_EFFECTS_INLINE_SETTINGS)));
    }, [d, u]);
    let S = a ? TT.wL : sG.$n;
    return (0, c.jsx)(rQ.A, {
        forcedDivider: r,
        borderType: ur.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: h,
        className: l,
        children: (0, c.jsxs)("div", {
            className: TU.NC,
            children: [
                (0, c.jsx)(S, {
                    size: sG.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, TM.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: it()({ [TU.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === E ? null != m : null != E) &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TU.DT,
                        children: (0, c.jsx)(x.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: function () {
                                (0, Tf.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tk = n(13875),
    Tw = n(515727),
    TF = n(594401);
function TB(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, eL.Ay)(),
        s = (0, Tk.sk)("ProfileFrameSection"),
        r = (0, S4.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: a, errors: o } = (0, S4.Tu)(n?.id),
        [u, d] = (0, cm.kn)([er.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        g = u === er.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return s
        ? (0, c.jsx)(rQ.A, {
              showBorder: g,
              borderType: g ? ur.i.NEW_UPSELL : ur.i.PREMIUM,
              hasBackground: g,
              title: i,
              titleBadge: g ? (0, c.jsx)(e9.Lp, { text: j.intl.string(j.t.y2b7CA), className: TF.Ad }) : void 0,
              description: g ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, c.jsxs)("div", {
                  className: TF.NC,
                  children: [
                      (0, c.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: function () {
                              (0, Tw.w)({ analyticsLocations: l, guild: n }), d(cI.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, c.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: TF.DT,
                              children: (0, c.jsx)(x.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != n ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: function () {
                                      (0, Tf.p)({ guildId: n?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
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
        d = g.useRef(null),
        m = (0, Tz.r)(nW.A.colors.BACKGROUND_BASE_LOW).hex(),
        E = nW.A.colors.BACKGROUND_MOD_MUTED.css,
        h = (0, To.sN)(i),
        S = (0, TW.Hl)(i),
        T = S === m ? E : S,
        p = h ? nW.A.unsafe_rawColors.WHITE.css : nW.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, TK.A)(a),
        f = (0, TK.A)(o),
        [I, _] = g.useState((0, a6.A)());
    return (
        g.useEffect(() => {
            (x !== a || f !== o) && _((0, a6.A)());
        }, [o, a, f, x]),
        (0, c.jsx)(r2.Y, {
            targetElementRef: d,
            positionKey: I,
            renderPopout: (e) =>
                (0, c.jsx)(TZ.VN, {
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
                return (0, c.jsxs)("div", {
                    ref: d,
                    className: it()(Tq.oP, { [Tq.r9]: s }),
                    children: [
                        (0, c.jsx)(t9.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? A.tEg : t,
                            style: { backgroundColor: S, borderColor: T },
                            className: Tq.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, c.jsx)(r6.PencilIcon, {
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
        g = (0, TY.Ay)(t.id, r),
        { primaryColor: m, secondaryColor: A } = (0, TH.A)({
            user: t,
            displayProfile: g,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        E = r5.Ay.canUsePremiumProfileCustomization(t),
        h = null != n ? n : t.getAvatarURL(r, 80),
        S = (0, Tz.r)(nW.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, TX.rh)(h, S, !1);
    return null == m || null == A
        ? null
        : (0, c.jsx)(rQ.A, {
              title: j.intl.string(j.t.DMeO2X),
              disabled: !E && !s,
              className: it()(TJ.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, c.jsxs)("div", {
                  className: TJ.hd,
                  children: [
                      (0, c.jsx)("div", {
                          className: TJ.YX,
                          children: (0, c.jsx)(TQ, {
                              onChange: (e) => l([e, A]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, c.jsx)(z.E, {
                                  className: TJ.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, c.jsx)("div", {
                          className: TJ.YX,
                          children: (0, c.jsx)(TQ, {
                              onChange: (e) => l([m, e]),
                              color: A,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, c.jsx)(z.E, {
                                  className: TJ.yz,
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
                              className: TJ.WA,
                              children: (0, c.jsx)(x.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: j.intl.string(j.t["L+GmoR"]),
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
        o = (0, tU.GV)();
    return (0, c.jsx)(rQ.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, c.jsx)(ll.k, {
            "aria-labelledby": o,
            placeholder: s ?? j.intl.string(j.t.NPEUUu),
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
        a = (0, m.bG)([T3.A], () => T3.A.can(A.xBc.CHANGE_NICKNAME, r) || T3.A.can(A.xBc.MANAGE_NICKNAMES, r)),
        o = (0, EP.L)(tF.PremiumTypes.TIER_2);
    return (0, c.jsxs)(rQ.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, c.jsx)(ll.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: A.d0r,
                onChange: function (e) {
                    (0, Tf.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, c.jsx)(TO, { user: s, guildId: r.id, className: T6.F }),
        ],
    });
}
var T4 = n(233454);
let T8 = "/assets/b25da78aa7949feb.png";
function T7(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, uO.Ay)(),
        { analyticsLocations: s } = (0, eL.Ay)(tv.A.PREMIUM_UPSELL_OVERLAY);
    return (g.useEffect(() => {
        n &&
            (e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: tF.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            }),
            (0, tV.sq)(A.U7l.PREMIUM_UPSELL_VIEWED, s, () =>
                (0, tk.uq)(tF.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE),
            ));
    }, [n, s]),
    n)
        ? (0, c.jsxs)("div", {
              className: T4.ry,
              children: [
                  (0, c.jsx)("div", { children: i }),
                  (0, c.jsxs)("div", {
                      className: T4.Wc,
                      children: [
                          (0, c.jsx)("img", {
                              className: T4.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case A.NJ8.DARK:
                                      case A.NJ8.DARKER:
                                      case A.NJ8.MIDNIGHT:
                                          return T8;
                                      case A.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return T8;
                                  }
                              })(l),
                          }),
                          (0, c.jsxs)("div", {
                              className: T4._9,
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
                          (0, c.jsx)(us.A, {
                              size: sG.$n.Sizes.LARGE,
                              color: sG.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: r5.Ay.isPremium(t)
                                      ? j.intl.string(j.t.AfRWI8)
                                      : j.intl.string(j.t.nkdUym),
                              },
                              subscriptionTier: tF.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var T9 = n(203164);
function pe() {
    let e = (0, m.bG)([l9.default], () => {
            let e = l9.default.getCurrentUser();
            return tl()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, EP.L)(tF.PremiumTypes.TIER_2),
        n = (0, m.bG)([S$.A, lg.A], () => lg.A.getGuild(S$.A.selectedGuildId));
    tl()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, m.cf)([S$.A], () => ({ ...S$.A.getPendingChanges(n.id), errors: S$.A.getErrors(n.id) })),
        d = (0, Tt.V7)({ userId: e.id, image: i }),
        g = (0, Tr.EC)(n.id),
        A = (0, m.bG)([Ti.Ay], () => (null == n.id ? null : Ti.Ay.getMember(n.id, e.id))),
        E = (0, m.bG)([Tn.A], () => Tn.A.getGuildMemberProfile(e.id, n.id)),
        h = r5.Ay.canUsePremiumProfileCustomization(e),
        S = (0, S4.z5)(i, A?.avatar),
        T = (0, S4.Ac)(s, E?.banner),
        p = (0, T2.l)(o, E?.themeColors),
        x = E?.bio ?? "",
        f = E?.pronouns ?? "";
    return (0, c.jsxs)("div", {
        className: T9.Q,
        children: [
            (0, c.jsx)(
                T5,
                {
                    errors: u?.nick ?? g?.nick,
                    username: T1.Ay.getName(e),
                    pendingNick: l,
                    currentNick: A?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, c.jsx)(
                T0,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, Tf.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, c.jsxs)(T7, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, c.jsx)(
                        Ty,
                        {
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [j.intl.string(j.t.lqaIxI), (0, c.jsx)(Ta.A, { size: "xs", inline: !0 })],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, To.rM)(e, A?.avatar, (e) => (0, Tf.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, c.jsx)(
                        T_,
                        {
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [j.intl.string(j.t["7v0T9P"]), (0, c.jsx)(Ta.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, c.jsx)(TO, { user: e, guildId: n.id }),
                    (0, c.jsx)(
                        TD,
                        { user: e, guild: n, titleIcon: (0, c.jsx)(Ta.A, { size: "xs", inline: !0 }) },
                        "nameplate",
                    ),
                    (0, c.jsx)(
                        TV,
                        {
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [j.intl.string(j.t.wR5wOo), (0, c.jsx)(Ta.A, { size: "xs", inline: !0 })],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, c.jsx)(
                        TB,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [j.intl.string(j.t.GWrZOd), (0, c.jsx)(Ta.A, { size: "xs", inline: !0 })],
                            }),
                        },
                        "frame",
                    ),
                    (0, c.jsx)(
                        TG,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, To.rM)(e, E?.banner, (e) => (0, Tf.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, c.jsx)(T$, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, Tf.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: p,
                    }),
                    (0, c.jsx)(
                        TS,
                        {
                            placeholder: j.intl.string(j.t["/7NKgv"]),
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [j.intl.string(j.t.ZzAR2Y), (0, c.jsx)(Ta.A, { size: "xs", inline: !0 })],
                            }),
                            onBioChange: (e) => (0, Tf.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? g?.bio,
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
    (0, li.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("935205"), n.e("766901"), n.e("661129")]).then(n.bind(n, 475312));
        return (n) => (0, c.jsx)(t, { source: { ...e, page: A.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function pi(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eL.Ay)(tv.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, m.bG)([l9.default], () => {
            let e = l9.default.getCurrentUser();
            return tl()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        s = (0, m.bG)([Ti.Ay], () => (null != t ? Ti.Ay.getMember(t.id, l.id) : null)),
        r = (0, m.bG)([Tn.A], () => !Tn.A.isFetchingProfile(l.id, t?.id)),
        a = (0, m.bG)([e8.A], () => e8.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, m.cf)([S$.A], () => S$.A.getPendingChanges(t?.id)),
        E = (0, Tt.V7)({ userId: l.id, image: o }),
        S = (0, S4.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: T } = (0, S4.B0)(l, t?.id);
    return (g.useEffect(() => () => e2.h.wait(S6.IM), []), a)
        ? (0, c.jsx)(a1.A, {})
        : r
          ? (0, c.jsxs)(eL.f5, {
                value: i,
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
                                  (0, c.jsx)(rq.A, { guildId: t.id, onChange: n }),
                                  (0, c.jsx)(S9, {
                                      profilePreviewTitle: (0, c.jsx)(h.D, {
                                          variant: "heading-md/medium",
                                          className: pt.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, c.jsx)(Te.A, {
                                          ...d,
                                          pendingAvatar: E,
                                          pendingDisplayNameStyles: T,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: r5.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: pn,
                                          containerClassName: pt.ti,
                                      }),
                                      nameplatePreview: (0, c.jsx)(S5.A, {
                                          ...d,
                                          pendingDisplayNameStyles: T,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: S,
                                          className: null == S ? pt.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, c.jsx)(pe, {}),
                                  }),
                              ],
                          })
                        : (0, c.jsx)(Ts, {}),
                ],
            })
          : (0, c.jsx)(a3.y, {});
}
var pl = n(903209),
    ps = n(641130);
function pr(e) {
    let { children: t, notice: n } = e;
    return (0, c.jsxs)("div", { className: ps.r, children: [n, (0, c.jsx)("div", { children: t })] });
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
        { analyticsLocations: l } = (0, eL.Ay)(tv.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = g.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: E,
        } = ((e = (0, pm.mb)(pA.RN.UPSELL_BANNER)),
        (t = (0, pm.mb)(pA.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, m.bG)([pg.A], () => pg.A.getMarketingBySurface(pd.R.EDIT_PROFILE_SETTINGS))),
        (i = g.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: j.intl.string(j.t.QZVVBh),
                          body: j.intl.string(j.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        g.useMemo(
            () => ({ ...i, type: pc.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: S } = (0, po.L_)();
    return (
        g.useEffect(() => {
            e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tF.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            }),
                (0, tV.sq)(A.U7l.PREMIUM_UPSELL_VIEWED, l, () => (0, tk.uq)(tF.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL));
        }, [l, d]),
        (0, c.jsxs)("div", {
            ref: s,
            className: pE.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, c.jsx)("div", {
                    className: pE.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, c.jsx)("img", { src: a, className: pE.Qw, alt: "" }),
                }),
                (0, c.jsxs)("div", {
                    className: pE.Em,
                    children: [
                        (0, c.jsx)(h.D, {
                            variant: "heading-lg/extrabold",
                            color: E ? "text-overlay-dark" : "currentColor",
                            className: pE.DD,
                            children: o,
                        }),
                        (0, c.jsx)(z.E, {
                            variant: "text-sm/normal",
                            color: E ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, c.jsx)(x.$, {
                    onClick: function () {
                        S(() =>
                            (0, pu.Cz)({
                                analyticsLocations: l,
                                analyticsSource: tv.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
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
var pS = n(451909),
    pT = n(202639),
    pp = n(285373),
    px = n(835071),
    pf = n(724651),
    pI = n(732280),
    p_ = n(590180),
    pN = n(898461),
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
    pR = n(221650);
function pD(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
        l = (0, pL.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = g.useMemo(() => {
            let e = (0, pv.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, c.jsxs)("div", {
        className: pR.kL,
        children: [
            (0, c.jsx)(t9.D, {
                onClick: () => {
                    n(), l.startAnimation(!1);
                },
                className: pR.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: l.render(),
            }),
            (0, c.jsxs)(t9.D, {
                onClick: () => {
                    n(), l.startAnimation(!1);
                },
                "aria-label": `${s}: ${j.intl.string(j.t["44yJxh"])}`,
                className: pR.Lt,
                children: [
                    (0, c.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: pR.L_ }),
                    (0, c.jsx)(z.E, {
                        className: pR._e,
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
        i = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion);
    (0, g.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), pU.A.setState({ scrollPosition: null });
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
        { reducedMotion: n } = g.useContext(pk.C),
        {
            pendingAvatar: i,
            pendingBanner: l,
            pendingAvatarDecoration: s,
            pendingProfileEffect: r,
            pendingDisplayNameStyles: a,
            pendingThemeColors: o,
            pendingPronouns: u,
            pendingBio: d,
            tryItOutThemeColors: A,
            tryItOutAvatar: E,
            tryItOutBanner: h,
            tryItOutAvatarDecoration: S,
            tryItOutDisplayNameStyles: T,
        } = (0, m.cf)([S$.A], () => {
            let e = S$.A.getPendingChanges(),
                t = S$.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        p = (0, Tt.V7)({ userId: t.id, image: E ?? i });
    return (0, c.jsx)(Te.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: h ?? l ?? pB,
        pendingDisplayNameStyles: T ?? a,
        pendingAvatar: p,
        pendingThemeColors: A ?? o,
        pendingAvatarDecoration: void 0 !== S ? S : s,
        pendingProfileEffect: r,
        avatarClassName: null != E || null != i || n.enabled ? void 0 : pw.WX,
        containerClassName: pw.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var pX = n(829497);
function pY(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = r5.Ay.isPremium(t),
        s = r5.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, m.cf)([S$.A], () => {
            let e = S$.A.getPendingChanges(),
                t = S$.A.getErrors(),
                n = S$.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: E, onShuffle: S } = (function () {
            let [e, t] = (0, g.useState)(pO()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, g.useMemo)(() => {
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
                r = (0, m.bG)([p_.A], () => {
                    let e = p_.A.getProduct(l);
                    return (0, pN.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, g.useEffect)(() => {
                (0, py.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, g.useCallback)(() => {
                let n = pO(e);
                t(n), e7.default.track(A.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n });
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        T = g.useRef(null);
    pV(T, eI._F.TRY_IT_OUT);
    let { analyticsLocations: p, sourceAnalyticsLocations: x } = (0, eL.Ay)(tv.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function f(e) {
        e && ((0, pM.T)(), e7.default.track(A.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: E }));
    }
    g.useEffect(() => {
        n &&
            (e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tF.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: A.liQ.USER_SETTINGS },
                location_stack: x,
            }),
            (0, tV.sq)(A.U7l.PREMIUM_UPSELL_VIEWED, x, () => (0, tk.uq)(tF.e.PREMIUM_PROFILE_TRY_IT_OUT)));
    }, [x, t, n]);
    let I = (0, pI.V)()?.subscriptionTrial?.skuId === tF.pe.TIER_2,
        _ = (0, pf.O)(),
        N = (0, pP.U9)(_, tF.pe.TIER_2);
    return i
        ? (0, c.jsx)(eL.f5, {
              value: p,
              children: (0, c.jsxs)(ur.A, {
                  ref: T,
                  className: pX.MT,
                  type: ur.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, c.jsx)(S9, {
                          stickyPreview: !1,
                          layoutClassName: pX.th,
                          profilePreviewTitle: (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(rK.t, { size: "md", color: "currentColor", className: pX.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, c.jsxs)(c.Fragment, {
                              children: [(0, c.jsx)(pD, { preset: E, onShuffle: S }), (0, c.jsx)(pz, { user: t })],
                          }),
                          children: (0, c.jsxs)("div", {
                              children: [
                                  (0, c.jsxs)("div", {
                                      children: [
                                          (0, c.jsx)(h.D, {
                                              variant: "heading-xl/extrabold",
                                              children: j.intl.string(j.t["2zGdAW"]),
                                          }),
                                          (0, c.jsx)(z.E, {
                                              className: pX.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsx)(T$, {
                                      className: pX.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Tt.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: py.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, c.jsx)(TG, {
                                      className: pX.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: py.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, c.jsx)(Ty, {
                                          className: pX.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: py.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, c.jsx)(TO, { user: t, className: pX.fz }),
                                  !I &&
                                      (0, c.jsx)(z.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !I &&
                          (0, c.jsx)(pT.d, {
                              onSubscribeModalClose: f,
                              className: pX.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, px.K)({ onSubscribeFinish: f });
                                  },
                              }),
                              button: l
                                  ? j.intl.string(j.t.AfRWI8)
                                  : N
                                    ? j.intl.formatToPlainString(j.t.bkQ4bH, { percent: _?.discount.amount })
                                    : j.intl.string(j.t.pj0XBN),
                              position: "inline",
                          }),
                      I &&
                          (0, c.jsxs)("div", {
                              children: [
                                  (0, c.jsx)("div", { className: pX.BU }),
                                  (0, c.jsx)(pG.Ay, {
                                      type: tF.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tF.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var pH = n(814390),
    pK = n(843282),
    pW = n(145497),
    pZ = n(685073),
    pq = n(534400),
    pQ = n(581781),
    pJ = n(743981),
    p$ = n(195801);
let p0 = (0, tU.Ld)(),
    p1 = g.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = (0, m.cf)([l9.default], () => (0, pZ.Zo)(l9.default.getCurrentUser()?.primaryGuild)),
            s = void 0 !== n ? n : (l.guildId ?? null),
            r = g.useMemo(() => {
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
                        e.set(n, { id: n, name: j.intl.string(j.t.dtwqPR), icon: null, tag: i, badge: r }),
                    e
                );
            }, [t, l, s]),
            a = g.useMemo(() => Array.from(r.values(), (e) => ({ label: e.name, value: e.id })), [r]),
            o = g.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, c.jsx)(pQ.A, {
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
            u = g.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, c.jsx)(pW.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [r],
            ),
            d = g.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = r.get(e.value);
                    return null == t
                        ? null
                        : (0, c.jsx)(pq.o9, {
                              guildId: t.id,
                              guildTag: t.tag,
                              guildBadge: t.badge,
                              badgeSize: pJ.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [r],
            ),
            A = g.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, c.jsx)(c.Fragment, { children: o(t) });
                },
                [o],
            ),
            E = g.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            h = g.useCallback((e) => e === s, [s]),
            S = g.useCallback((e) => e, []),
            T = g.useCallback(() => {
                i?.(null);
            }, [i]),
            p = g.useRef(null);
        return (
            pV(p, eI._F.GUILD_TAG),
            (0, c.jsxs)(rQ.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: p0,
                ref: p,
                children: [
                    (0, c.jsx)(z.E, {
                        className: p$.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, c.jsx)(pK.Pw, {
                        className: p$.Lt,
                        optionClassName: p$.S0,
                        isSelected: h,
                        options: a,
                        select: E,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: A,
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
var p2 = n(318785),
    p3 = n(992526),
    p6 = n(470739);
let p5 = function () {
    return (0, p3.J9)({ location: "UserSettingsProfileCustomization" })
        ? (0, c.jsx)(rQ.A, {
              title: j.intl.string(j.t.l6w3Vj),
              description: j.intl.string(j.t.joHqdj),
              children: (0, c.jsx)(x.$, {
                  text: j.intl.string(j.t.wRraFx),
                  onClick: () => {
                      (0, p6._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var p4 = n(953726);
let p8 = (0, tU.Ld)();
function p7(e) {
    let t = (0, EP.L)(tF.PremiumTypes.TIER_2);
    return (0, c.jsxs)(rQ.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: p8,
        children: [
            (0, c.jsx)("div", {
                children: (0, c.jsx)(ll.k, {
                    "aria-labelledby": p8,
                    placeholder: e.placeholder,
                    maxLength: A.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, c.jsx)(TO, { user: e.user, className: p4.F }),
        ],
    });
}
var p9 = n(376626);
function xe(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = v.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, c.jsx)("div", {
        className: p9.u,
        children: (0, c.jsx)(tZ.d, {
            label: j.intl.string(j.t["3cWDuO"]),
            description: l ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, SQ._e)() : (0, Tf.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function xt(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, Tz.r)(nW.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TX.rh)(s, r, !1),
        o = (0, TW.LX)(a[0]);
    return (0, c.jsx)(rQ.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, c.jsx)(TQ, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var xn = n(518477);
let xi = function () {
    let e = (0, m.bG)([uT.default], () => uT.default.getId());
    return (0, c.jsx)(rQ.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, c.jsx)(x.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, S2.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tv.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: xn.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var xl = n(654910);
function xs() {
    let e = (0, m.bG)([l9.default], () => {
            let e = l9.default.getCurrentUser();
            return tl()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, m.bG)([Tn.A], () => Tn.A.getUserProfile(e.id)),
        {
            pendingAvatar: n,
            pendingGlobalName: i,
            pendingBanner: l,
            pendingBio: s,
            pendingPronouns: r,
            pendingAccentColor: a,
            pendingThemeColors: o,
            pendingLegacyUsernameDisabled: u,
            pendingPrimaryGuildId: d,
            errors: g,
        } = (0, m.cf)([S$.A], () => {
            let e = S$.A.getPendingChanges(),
                t = S$.A.getErrors();
            return { ...e, errors: t };
        }),
        A = (0, Tt.V7)({ userId: e.id, image: n }),
        E = (0, Tr.EC)(),
        h = r5.Ay.canUsePremiumProfileCustomization(e),
        S = (0, S4.z5)(n, e.avatar),
        T = (0, S4.Ac)(l, t?.banner),
        p = (0, TY.Ay)(e.id),
        x = p?.getLegacyUsername(),
        f = (g.global_name?.length ?? 0) > 0 ? g.global_name : (E?.nick ?? []),
        I = (g.bio?.length ?? 0) > 0 ? g.bio : (E?.bio ?? []),
        _ = (0, p2.b)(),
        N = null != (0, pZ.Zo)(e.primaryGuild).guildId;
    return (0, c.jsxs)("div", {
        className: xl.Q,
        children: [
            (0, c.jsx)(p7, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: i,
                onGlobalNameChange: (e) => (0, Tf.p)({ globalName: e }),
                user: e,
            }),
            (0, c.jsx)(
                T0,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, Tf.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, c.jsx)(xi, {}),
            (0, c.jsx)(
                Ty,
                {
                    onAvatarChange: (e) => {
                        (0, Tf.p)({ avatar: e }), (0, S4.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: g.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, c.jsx)(T_, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, c.jsx)(TD, { user: e }),
            (0, c.jsx)(TV, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, c.jsx)(TB, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)(
                              TG,
                              {
                                  showRemoveBannerButton: T,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, Tf.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, c.jsx)(T$, {
                              user: e,
                              pendingAvatarSrc: A,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, Tf.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, c.jsx)(
                      xt,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, Tf.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, c.jsx)(
                TS,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: I,
                    onBioChange: (e) => (0, Tf.p)({ bio: e }),
                    pendingBio: s,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            (_.length > 0 || N) &&
                (0, c.jsx)(p1, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, Tf.p)({ primaryGuildId: e }),
                }),
            null != x && (0, c.jsx)(xe, { legacyUsername: x, pendingLegacyUsernameDisabled: u }, "legacy_username"),
            (0, c.jsx)(p5, {}, "badges"),
        ],
    });
}
function xr() {
    (0, li.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("935205"), n.e("766901"), n.e("641704")]).then(n.bind(n, 562011));
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
var xa = n(447080);
function xo() {
    let e = (0, m.bG)([l9.default], () => {
            let e = l9.default.getCurrentUser();
            return tl()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, m.bG)([e8.A], () => e8.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, m.cf)([S$.A], () => ({ ...S$.A.getPendingChanges(), showNotice: S$.A.showNotice() })),
        a = (0, Tt.V7)({ userId: e.id, image: i }),
        o = (0, S4.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, pH.A)() && null != n ? pS.Ay.parse(void 0, n).content : n,
        d = r5.Ay.canUsePremiumProfileCustomization(e),
        { analyticsLocations: E } = (0, eL.Ay)(tv.A.USER_SETTINGS_USER_PROFILE);
    g.useEffect(() => () => e2.h.wait(SQ.IM), []);
    let [h, S] = g.useState(!1),
        T = !d,
        p = g.useRef(null);
    return t
        ? (0, c.jsx)(a1.A, {})
        : (0, c.jsxs)(eL.f5, {
              value: E,
              children: [
                  (0, c.jsx)(ph, {}),
                  (0, c.jsx)(S9, {
                      profilePreview: (0, c.jsx)(Te.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: xr,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: xa.ti,
                      }),
                      nameplatePreview: (0, c.jsx)(S5.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? xa.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, c.jsx)(xs, {}),
                  }),
                  (0, c.jsx)(pa.L, {
                      innerRef: p,
                      onChange: (e) => S(e),
                      threshold: 0.25,
                      active: T,
                      children: (0, c.jsx)("div", {
                          ref: p,
                          children: (0, c.jsx)(pY, { user: e, shouldShow: T, isVisible: h }),
                      }),
                  }),
                  T &&
                      !s &&
                      (0, c.jsx)(pT.d, {
                          className: xa.EL,
                          showUpsell: !h,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, px.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: (0, c.jsx)(pp.l, {
                              size: "md",
                              location: tv.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL,
                          }),
                          button: (0, c.jsx)("div", {
                              className: xa.Xl,
                              children: (0, c.jsx)(x.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      e7.default.track(A.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          p?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: j.intl.string(j.t.uw9zI7),
                                  icon: rK.t,
                              }),
                          }),
                      }),
              ],
          });
}
var xu = n(625494);
n(46121);
var xd = n(944983);
let xc = { [eI.Eq.USER_PROFILE]: "main_profile_tab", [eI.Eq.GUILD]: "guild_profile_tab" },
    xg = (0, a.E2)(o.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, m.bG)([lm.A, dd.Ay, S$.A], () => {
                    let e = S$.A.selectedGuildId ?? lm.A.getGuildId();
                    return null == e || S$._.has(e) ? dd.Ay.getFlattenedGuildIds().find((e) => !S$._.has(e)) : e;
                }),
                t = (0, m.bG)([lg.A], () => lg.A.getGuild(e)),
                n = (0, m.bG)([S$.A], () => S$.A.showNotice()),
                i = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()),
                l = pU.A.useField("subsection");
            return (
                g.useEffect(() => {
                    (0, n2._)(xc[l]);
                }, [l]),
                g.useEffect(() => {
                    null != i && t?.id != null && (0, pl.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, c.jsx)(pr, {
                    children: (0, c.jsxs)(uU.F, {
                        component: (0, c.jsx)(i7.A, {
                            children: (0, c.jsx)(h.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, c.jsxs)(S3.V, {
                                className: xd.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            (0, n3.fO)({ duration: 300, intensity: 1.4 }),
                                                xu._.dispatch(A.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === eI.Eq.GUILD && null != t && (0, S6.V2)(t.id),
                                            pU.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, c.jsx)(
                                        S3.V.Item,
                                        {
                                            className: xd.YU,
                                            id: eI.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        eI.Eq.USER_PROFILE,
                                    ),
                                    (0, c.jsx)(
                                        S3.V.Item,
                                        {
                                            className: it()(xd.YU, xd.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: eI.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        eI.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === eI.Eq.GUILD
                                ? (0, c.jsx)(pi, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              (0, n3.fO)({ duration: 300, intensity: 1.4 }),
                                                  xu._.dispatch(A.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, S6.JJ)(e.id);
                                      },
                                  })
                                : (0, c.jsx)(xo, {}),
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
    xm = (0, a.zZ)(o.X.PROFILE_CATEGORY, { buildLayout: () => [xg] });
var xA = n(379633);
function xE() {
    let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, S1.A)({ userId: e?.id, size: p._3.SIZE_48 });
    return null == e
        ? null
        : (0, c.jsxs)("div", {
              className: xA.a5,
              children: [
                  (0, c.jsx)(T.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: p._3.SIZE_48,
                      "aria-label": j.intl.string(j.t.lqaIxI),
                  }),
                  (0, c.jsxs)("div", {
                      className: xA.FS,
                      children: [
                          (0, c.jsx)(z.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, c.jsxs)("div", {
                              className: xA.Fk,
                              children: [
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: j.intl.string(j.t.Ip9nBS),
                                  }),
                                  (0, c.jsx)(r6.PencilIcon, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let xh = (0, a.t_)(o.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [S$.A], element: SJ.A },
        initialize: () => () =>
            e2.h.wait(() => {
                (0, SQ.F7)();
            }),
        buildLayout: () => [xm],
    }),
    xS = (0, a.i4)(o.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: xp,
        StronglyDiscouragedCustomComponent: xE,
        usePredicate: () => !(0, S0.X)("user_settings_sidebar"),
        buildLayout: () => [xh],
    }),
    xT = (0, a.i4)(o.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: xp,
        StronglyDiscouragedCustomComponent: xE,
        usePredicate: () => (0, S0.X)("user_settings_sidebar"),
        onClick: () => {
            let e = uT.default.getId();
            (0, S2.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function xp() {
    let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, S1.A)({ userId: e?.id, size: p._3.SIZE_48 });
    return (0, c.jsx)(T.eu, { src: t, avatarDecoration: n, size: p._3.SIZE_20, "aria-hidden": !0 });
}
let xx = (0, a.WI)(o.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [xS, xT] });
var xf = n(98207),
    xI = (n(204925), n(818348));
let x_ = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, li.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("213042"), n.e("319623"), n.e("121007")]).then(
                n.bind(n, 888363),
            );
            return (n) => (0, c.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? xI.tE : null, onCloseCallback: t },
    );
};
var xN = n(940856),
    xC = n(931374),
    xb = n(207560);
function xy(e) {
    let t = (0, xb.fk)(),
        n = (0, xC.b8)(),
        i = (0, xC.yM)(),
        l = (0, xC.Y2)();
    if (!t) return !1;
    let s = !n || i;
    switch (e) {
        case "verify":
            return s;
        case "edit":
            return !s && l;
        case "info":
            return !s && !l;
        default:
            return !1;
    }
}
var xv = n(800121);
function xj() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, c.jsxs)(z.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(xv.default.WM5adV, {
                handleOnHelpUrlHook: function () {
                    return window.open(eS.A.getArticleURL(A.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
                },
            }),
        ],
    });
}
let xO = (0, a.Tf)(o.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => xy("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: d.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: xj,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, li.openModalLazy)(async () => {
                let { default: e } = await n.e("145361").then(n.bind(n, 151080));
                return (t) => (0, c.jsx)(e, { ...t });
            });
        },
    }),
    xL = (0, a.E2)(o.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => xy("info"),
        useSearchTerms: () => [j.intl.string(j.t["/52UYy"])],
        Component: function () {
            return (0, c.jsx)(tW.D, {
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
                            children: (0, c.jsx)(x.$, {
                                onClick: xI.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var xR = n(31720),
    xD = n(847599);
let xP = (0, a.Tf)(o.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => xy("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: d.fq.TEXT,
            text: (0, xC.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA),
        }),
        useLabel: function () {
            return (0, xC.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => xR.A.showAgeVerificationGetStartedModal({ entryPoint: xD.q1.ACCOUNT_AGE_GROUP }),
    }),
    xG = (0, a.Tf)(o.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: d.fq.TEXT, text: j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => x_(),
    });
function xM(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function xU(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function xV(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = g.useState(!1),
        a = s ? t : n(t);
    return (0, c.jsxs)(F.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, c.jsx)(z.E, { variant: "text-md/medium", children: a }),
            (0, c.jsx)(Ah.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
            }),
        ],
    });
}
function xk() {
    let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.email);
    return null == e
        ? (0, c.jsx)(z.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, c.jsx)(xV, {
              text: e,
              censor: xU,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
          });
}
let xw = (0, a.Tf)(o.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: d.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: xk }),
    useLabel: function () {
        return null == (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.email)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.email)
            ? j.intl.string(j.t["pvBD+W"])
            : j.intl.string(j.t["8peUT0"]);
    },
    onClick: function () {
        (0, li.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("279385"), n.e("420577"), n.e("465861")]).then(
                n.bind(n, 97060),
            );
            return (t) => (0, c.jsx)(e, { ...t });
        });
    },
});
var xF = n(557722),
    xB = n(53516);
function xz() {
    let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, c.jsx)(z.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, c.jsx)(F.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, c.jsx)(xV, {
                  text: t,
                  censor: xM,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
              }),
          });
}
let xX = (0, a.Tf)(o.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: d.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: xz }),
    useLabel: function () {
        return null == (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    onClick: function () {
        null == l9.default.getCurrentUser()?.phone
            ? (0, li.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("590275"),
                          n.e("334179"),
                          n.e("989545"),
                          n.e("311493"),
                          n.e("84704"),
                          n.e("286197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, c.jsx)(e, { reason: xF.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: xB.V },
              )
            : (0, li.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("911837"), n.e("840933")]).then(n.bind(n, 660740));
                  return (t) => (0, c.jsx)(e, { ...t });
              });
    },
});
function xY() {
    let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function xH() {
    let e = (0, Tr.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, m.bG)([l9.default], () => l9.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(z.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, c.jsx)(i8.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, c.jsx)(iF.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: nW.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let xK = (0, a.Tf)(o.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: d.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: xH,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (xY() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: xY,
        onClick: function () {
            (0, li.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("745281"), n.e("920429"), n.e("820969")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, c.jsx)(e, { ...t });
            });
        },
    }),
    xW = (0, a.zZ)(o.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, m.bG)([l9.default], () => null != l9.default.getCurrentUser()),
        useTitle: () => j.intl.string(j.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser());
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
                            button: { text: j.intl.string(j.t.lm1UKt), onClick: () => (0, xN.S)(e) },
                        }
                  : {
                        type: d.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: j.intl.string(j.t["/3qnL/"]),
                        text: j.intl.string(j.t.qKs3vg),
                        button: { text: j.intl.string(j.t["7psymi"]), onClick: () => x_() },
                    };
        },
        buildLayout: () => [xK, xG, xw, xX, xP, xO, xL],
    });
var xZ = n(398177);
let xq = (0, a.Tf)(o.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, li.openModal)((e) => (0, c.jsx)(xZ.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var xQ = n(200921);
let xJ = [];
function x$() {
    xJ = [];
}
class x0 extends m.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return xJ;
    }
}
let x1 = new x0(e2.h, {
    LOGOUT: x$,
    LOGIN_SUCCESS: x$,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        xJ = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...xJ],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        xJ = n;
    },
});
function x2() {
    let e = (0, m.cf)([x1], () => x1.getSessions());
    return g.useMemo(() => {
        let t = [...e],
            n = null,
            i = uT.default.getAuthSessionIdHash();
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
function x3(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : il()(e).fromNow();
}
var x6 = n(176524),
    x5 = n(646270),
    x4 = n(738678),
    x8 = n(489828);
function x7(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, c.jsxs)(F.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, c.jsx)(x6.A, { icon: t, color: r ? nW.A.colors.ICON_MUTED : "currentColor" }),
            (0, c.jsxs)(F.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, c.jsxs)(F.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, c.jsx)(z.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, c.jsx)(z.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, c.jsx)(z.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, c.jsx)(z.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function x9(e) {
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
                            return { text: j.intl.string(j.t.cDHCNY), icon: hb.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: x5.u };
                        case "horizon os":
                            return { text: e, icon: x4.G };
                        default:
                            return { text: e, icon: hb.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : x3(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(n7.Vq);
    return (0, c.jsx)(x7, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, c.jsx)(t9.D, {
                className: x8.X,
                onClick: () => (0, xQ.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, c.jsx)(Ef.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function fe(e) {
    let { title: t, children: n } = e,
        i = g.useId();
    return (0, c.jsxs)(F.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, c.jsx)(h.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, c.jsx)(F.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let ft = (0, a.E2)(o.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = x2();
            return null == e
                ? (0, c.jsx)(a3.y, {})
                : (0, c.jsx)(fe, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, c.jsx)(x9, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    fn = (0, a.E2)(o.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = x2();
            return (0, c.jsx)(tW.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, c.jsx)(x.$, {
                    onClick: () => (0, xQ.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = x2();
            return e.length > 0;
        },
    });
var fi = n(766928);
function fl() {
    return (0, c.jsx)(x7, {
        icon: fi.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, nt.openUserSettings)(o.X.ACCOUNT_PANEL, { analyticsLocations: [tv.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let fs = (0, a.E2)(o.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = x2(),
                t = (0, m.bG)([l9.default], () => l9.default.getCurrentUser());
            return (0, c.jsxs)(fe, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, c.jsx)(x9, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, c.jsx)(fl, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = x2(),
                t = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fr = (0, a.zZ)(o.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, xQ.GY)();
        },
        buildLayout: () => [ft, fs, fn],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    fa = (0, a.t_)(o.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: a1.L,
        buildLayout: () => [fr],
    }),
    fo = (0, a.t0)(o.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fa],
        initialize: () => {
            (0, xQ.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = x2(),
                n = t.length + +(null != e);
            return {
                type: d.xn.TEXT,
                text: n > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: n }) : j.intl.string(j.t.MKDeyL),
            };
        },
    });
var fu = n(464477);
function fd(e) {
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
function fc() {
    return (0, aB.bG)([l9.default], () => {
        let e = l9.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fg =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fm() {
    let e = (0, aB.bG)([l9.default], () => l9.default.getCurrentUser()?.verified);
    return fu.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fA() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, aB.bG)([lg.A, T3.A, l9.default], () =>
        l9.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : lg.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(A.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        T3.A.can(A.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var fE = n(466034);
let fh = (0, a.Tf)(o.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => fA(!0),
        useDisabled: () => null !== fA(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, m.bG)([uT.default], () => uT.default.hasTOTPEnabled()),
                t = fm() === fg.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, nZ.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => xf.A.disable(),
            }),
    }),
    fS = (0, a.zZ)(o.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, m.bG)([uT.default], () => uT.default.hasTOTPEnabled()),
                t = fm() === fg.AVAILABLE;
            if (!e && t)
                return {
                    type: d.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: d.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: fE.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fm()) {
                case fg.UNAVAILABLE_NO_CRYPTO:
                    return { type: d.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.PhHhsj) };
                case fg.UNAVAILABLE_UNVERIFIED:
                    return { type: d.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                case fg.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fh],
    });
var fT = n(670492),
    fp = n(32880),
    fx = n(663417),
    ff = n(658675),
    fI = n(900686);
function f_() {
    (0, li.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, c.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    xf.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, li.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e("514567"), n.e("96179")]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, c.jsx)(e, { ...n, password: t });
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
var fN = n(858487);
function fC(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fb() {
    let e = fT.A.getVerificationKey();
    try {
        await xf.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, l3.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: l6.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fy(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = fC(t),
        l = g.useRef(null),
        s = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(ff.P, { checked: n }), (0, c.jsx)(z.E, { variant: "text-md/normal", children: i })],
        });
    return u_.p5
        ? (0, c.jsx)(t9.D, {
              tag: "li",
              className: it()(fN.aY, fN.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, u_.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  (0, u_.C)(i),
                      (0, l3.P0)({ message: j.intl.string(j.t.mGZ66D), type: l6.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: s,
          })
        : (0, c.jsx)("li", { className: fN.aY, children: s });
}
let fv = (0, a.zZ)(o.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, m.bG)([fT.A], () => fT.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: fc,
        buildLayout: () => [fj],
    }),
    fj = (0, a.E2)(o.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, m.bG)([fT.A], () => fT.A.getBackupCodes()),
                t = g.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${fC(t)}` + (n ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, c.jsx)(x.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: f_ })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)("ul", {
                              className: fN.E5,
                              children: e.map((e) => (0, c.jsx)(fy, { code: e }, e.code)),
                          }),
                          (0, c.jsxs)(sU.e, {
                              size: "sm",
                              children: [
                                  (0, c.jsx)(fI.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, c.jsx)(x.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fp.DownloadIcon,
                                      }),
                                  }),
                                  (0, c.jsx)(x.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fx.RefreshIcon,
                                      onClick: fb,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    fO = (0, a.Tf)(o.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = g.useState(!1),
                n = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : j.intl.format(e ? j.t["xDBk/I"] : j.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, c.jsx)(Ah.Q, {
                              text: e ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.hasFlag(A.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, li.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, c.jsx)(e, {
                        ...t,
                        handleSubmit: xf.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    fL = (0, a.zZ)(o.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, m.bG)([l9.default], () => fd(l9.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()?.hasFlag(A.nhx.MFA_SMS) ?? !1),
                t = (0, m.bG)([l9.default], () => null != fd(l9.default.getCurrentUser()));
            if (!e)
                return {
                    type: d.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: d.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: fR,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fm(),
                t = fc(),
                n = (0, m.bG)([uT.default], () => uT.default.hasTOTPEnabled());
            return e === fg.AVAILABLE && t && n;
        },
        buildLayout: () => [fO],
    });
function fR() {
    let e = l9.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: xF.d.USER_SETTINGS_UPDATE, onAddedPhone: xf.A.enableSMS }),
                (0, li.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("590275"),
                            n.e("334179"),
                            n.e("989545"),
                            n.e("311493"),
                            n.e("84704"),
                            n.e("286197"),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, c.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: xB.V },
                );
        } else xf.A.enableSMS();
}
var fD = n(665671),
    fP = n(442433),
    fG = n(917136),
    fM = n(976910),
    fU = n(267255);
function fV(e) {
    let { credential: t } = e;
    return (0, c.jsxs)("li", {
        className: fU.e,
        children: [
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, c.jsx)(z.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: x3(t.last_used) }),
                        }),
                ],
            }),
            (0, c.jsx)(i5.K, {
                icon: dE.MoreHorizontalIcon,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, fP.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, c.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let fk = (0, a.zZ)(o.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (fm() === fg.AVAILABLE)
                return {
                    type: d.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: d.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: iU.j,
                            onClick: fD.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fm()) {
                    case fg.UNAVAILABLE_NO_CRYPTO:
                        return { type: d.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.bWCGI9) };
                    case fg.UNAVAILABLE_UNVERIFIED:
                        return { type: d.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                    case fg.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [fw],
    }),
    fw = (0, a.E2)(o.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, m.cf)([fM.A], () => ({
                hasFetchedCredentials: fM.A.hasFetchedCredentials(),
                credentials: fM.A.getCredentials(),
            }));
            return (g.useEffect(() => {
                t || fG.JQ();
            }, [t]),
            t)
                ? (0, c.jsx)(F.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, c.jsx)(fV, { credential: e }, e.id)),
                  })
                : (0, c.jsx)(a3.y, {});
        },
    }),
    fF = (0, a.t_)(o.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [fk, fS, fL, fv],
    }),
    fB = (0, a.t0)(o.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = fc();
            return { type: d.xn.TEXT, text: e ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt) };
        },
        buildLayout: () => [fF],
    }),
    fz = (0, a.zZ)(o.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [xq, fB, fo],
    });
var fX = n(308645),
    fY = n(271995),
    fH = n(855267);
let fK = (0, a.E2)(o.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: fH.A,
    }),
    fW = (0, a.zZ)(o.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [fK] }),
    fZ = (0, a.t_)(o.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [fW],
    }),
    fq = (0, a.zZ)(o.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [fQ],
    }),
    fQ = (0, a.t0)(o.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: fY.$b,
        useSubtitle: fY.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, fY._k)();
            return { type: d.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        initialize: () => {
            fX.Yn();
        },
        buildLayout: () => [fZ],
    });
var fJ = n(738188),
    f$ = n(834981),
    f0 = n(987197),
    f1 = n(822585),
    f2 = n(840387),
    f3 = n(465558),
    f6 = n(670595);
let f5 = (0, a.E2)(o.X.FAMILY_CENTER_SETTING, {
        Component: f3.p,
        useSearchTerms: () => [
            j.intl.string(f6.default.RZqaJn),
            j.intl.string(f6.default.bdBmqy),
            j.intl.string(f6.default["gVWG+6"]),
            j.intl.string(f6.default.ahKIJO),
            j.intl.string(f6.default["8SLtqb"]),
        ],
    }),
    f4 = (0, a.zZ)(o.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [f5] }),
    f8 = (0, a.t_)(o.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(f6.default.RZqaJn),
        buildLayout: () => [f4],
    }),
    f7 = (0, a.zZ)(o.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(f6.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, f0.f)(),
                t = (0, f1.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, f$.VT)();
            return g.useMemo(() => (n ? { badgeType: d.Xi.WARNING } : { badgeType: d.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [f9],
    }),
    f9 = (0, a.t0)(o.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, f$.Li)() ? j.intl.string(f6.default.IcMQUP) : j.intl.string(f6.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, f2.Z)(),
                t = (0, f$.Li)();
            return e
                ? t
                    ? j.intl.string(f6.default.G8lHFU)
                    : j.intl.string(f6.default.uOLNEZ)
                : j.intl.string(f6.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, f0.f)(),
                t = (0, f1.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: d.Xy.ICON,
                      icon: fJ.WarningIcon,
                      color: nW.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: nW.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [f8],
    });
var Ie = n(425587),
    It = n(662758);
function In(e) {
    if (e.body.code === A.t02.INVALID_PASSWORD) throw e;
    (0, sP.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function Ii() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = l9.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await Ie.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, sP.A)({
              title: j.intl.string(j.t["Y++oNe"]),
              subtitle: j.intl.format(j.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : lg.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, sP.A)({ title: j.intl.string(j.t.vJiTOL), subtitle: j.intl.string(j.t.UyVVan) })
          : t.isClaimed()
            ? (0, li.openModal)((t) =>
                  (0, c.jsx)(It.default, {
                      ...t,
                      handleSubmit: (t) => (0, SQ.U_)(t, e).then(A.tEg, In),
                      title: e ? j.intl.string(j.t.xca2ts) : j.intl.string(j.t.goXv9g),
                      actionText: e ? j.intl.string(j.t["8lQ2rR"]) : j.intl.string(j.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? j.intl.string(j.t.FB4H1D) : j.intl.string(j.t.gk7h32),
                  }),
              )
            : (0, nZ.A)({
                  title: j.intl.string(j.t.xca2ts),
                  subtitle: j.intl.string(j.t.FB4H1D),
                  confirmText: j.intl.string(j.t["8lQ2rR"]),
                  onConfirm: () => (0, SQ.U_)("", !0),
              });
}
let Il = (0, a.Tf)(o.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Ii(!0),
    }),
    Is = (0, a.Tf)(o.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Ii(!1),
        usePredicate: () => {
            let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Ir = (0, a.zZ)(o.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Is, Il] }),
    Ia = (0, a.t_)(o.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                xf.A.clearBackupCodes(), (0, SQ.Uo)();
            };
        },
        useObscuredNotice: a1.L,
        buildLayout: () => [xW, fz, fq, f7, Ir],
    }),
    Io = (0, a.i4)(o.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: gg.UserIcon,
        buildLayout: () => [Ia],
    });
var Iu = n(176781),
    Id = n(341923),
    Ic = n(572164),
    Ig = n(539572),
    Im = n(915725),
    IA = n(711918);
let IE = (0, a.zD)(o.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => j.intl.string(IA.default.j29uJx),
        useSubtitle: () => j.intl.format(IA.default.UCzGcQ, { learnMoreLink: eS.A.getArticleURL(A.MVz.CLIPS) }),
        useValue: () => (0, m.bG)([Im.Ay], () => Im.Ay.getEnableAutoclipping()),
        setValue: Ig.uL,
        useDisabled: () => !(0, Ic.E)(),
    }),
    Ih = (0, a.zY)(o.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [IE], headerSettingKey: IE.key }),
    IS = (0, a.zZ)(o.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(IA.default.XWkJoi),
        useSubtitle: () => j.intl.string(IA.default["MJ/VsO"]),
        usePredicate: Id.H,
        usePersistentBadge: () => ({ badgeType: d.Xi.BETA }),
        useInlineNotice: () =>
            (0, Ic.E)()
                ? null
                : {
                      type: d.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: j.intl.string(IA.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(IA.default.qGgW4M),
                          onClick: () => Ig.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [Ih],
    });
var IT = n(974293),
    Ip = n(696016);
let Ix = [Ip.zq, 25, 50, Ip.Y2, Ip.rv],
    If = (0, a.sN)(o.X.CLIPS_BITRATE, {
        usePredicate: () => (0, IT.V0)("ClipsBitrateSetting"),
        useTitle: () => j.intl.string(j.t["8bZyov"]),
        useSubtitle: () => j.intl.string(j.t["h8DSx/"]),
        minValue: Ip.zq,
        maxValue: Ip.rv,
        useDefaultValue: () => Ip.Y2,
        getInitialValue: () => Im.Ay.getSettings().clipsQuality.bitratePercent ?? Ip.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = Im.Ay.getSettings();
            Ig.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: Ix,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, Ic.E)(),
    });
var II = n(226640);
let I_ = (0, a.Hn)(o.X.CLIPS_FRAME_RATE, {
        useTitle: () => j.intl.string(j.t["2wScL1"]),
        useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
        useValue: () => (0, m.bG)([Im.Ay], () => Im.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = Im.Ay.getSettings();
            Ig.GS({ ...t, frameRate: e });
        },
        useOptions: II.Fz,
        useDisabled: () => !(0, Ic.E)(),
    }),
    IN = (0, a.E2)(o.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
        usePredicate: () => (0, m.bG)([Im.Ay], () => Im.Ay.getHardwareClassification()) === Ip.k9.BELOW_MINIMUM,
        Component: () => (0, c.jsx)(lX.A, { look: lX.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
    }),
    IC = (0, a.Hn)(o.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, m.bG)([Im.Ay], () => Im.Ay.getSettings().clipsLength),
        setValue: (e) => Ig.h$(e),
        useOptions: II.Qu,
        useDisabled: () => !(0, Ic.E)(),
    }),
    Ib = (0, a.E2)(o.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, c.jsx)(lX.A, { look: lX.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    Iy = (0, a.Hn)(o.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, m.bG)([Im.Ay], () => Im.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Im.Ay.getSettings();
            Ig.GS({ ...t, resolution: e });
        },
        useOptions: II.gF,
        useDisabled: () => !(0, Ic.E)(),
    }),
    Iv = (0, a.zD)(o.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, m.bG)([Im.Ay], () => Im.Ay.getSettings().remindersEnabled),
        setValue: (e) => Ig.Mt(e),
        useDisabled: () => !(0, Ic.E)(),
    }),
    Ij = (0, a.zZ)(o.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => j.intl.string(IA.default.TGwzMe),
        buildLayout: () => [IN, IC, I_, Iy, If, Ib, Iv],
    }),
    IO = (0, a.zD)(o.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, m.bG)([Im.Ay], () => Im.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => Ig.YP(e),
    }),
    IL = (0, a.zD)(o.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, m.bG)([Im.Ay], () => Im.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => Ig.Uh(e),
    }),
    IR = (0, a.zZ)(o.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, m.bG)([l9.default], () => {
                let e = l9.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [IO, IL],
    });
var ID = n(417270),
    IP = n(847825);
let IG = (0, a.E2)(o.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, m.bG)([lR.Ay], () => lR.Ay.getKeybindForAction(A.hCu.SAVE_CLIP, !0));
            tl()(null != e, "Save clip keybind unset");
            let t = !(0, Ic.E)(),
                n = g.useRef(null),
                i = g.useCallback(
                    (t) => {
                        iw.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = g.useCallback(() => {
                    iw.A.setKeybind({ ...e, shortcut: (0, lt.OH)(Ip.Ot) });
                }, [e]);
            return (0, c.jsx)(tW.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, c.jsx)("div", {
                    className: IP.g,
                    children: (0, c.jsx)(le.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsx)(i8.m, {
                                    text: j.intl.string(IA.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, c.jsx)(i5.K, {
                                        icon: iV.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": j.intl.string(IA.default.bUtubv),
                                        onClick: (e) => {
                                            e.stopPropagation(), n.current?.toggleRecordMode();
                                        },
                                    }),
                                }),
                                (0, c.jsx)(i8.m, {
                                    text: j.intl.string(IA.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, c.jsx)(i5.K, {
                                        icon: ID.RetryIcon,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": j.intl.string(IA.default.Kyk1Tp),
                                        onClick: (e) => {
                                            e.stopPropagation(), l();
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
    IM = (0, a.E2)(o.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: lj.BW,
        Component: () => {
            let e = (0, m.bG)([lR.Ay], () => lR.Ay.getKeybindForAction(A.hCu.SAVE_CLIP, !0)),
                t = (0, m.bG)([lR.Ay], () => lR.Ay.getKeybindForAction(A.hCu.SAVE_SCREENSHOT, !0));
            tl()(null != e, "Save clip keybind unset"), tl()(null != t, "Save screenshot keybind unset");
            let n = g.useCallback(
                (e) => {
                    iw.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, c.jsx)(tW.D, {
                label: j.intl.string(j.t["0U/hj7"]),
                description: j.intl.string(j.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, c.jsx)("div", {
                    className: IP.g,
                    children: (0, c.jsx)(le.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    IU = (0, a.zD)(o.X.CLIPS_ENABLE, {
        useTitle: () => j.intl.string(j.t.h8rgrK),
        useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
        useValue: () => (0, Ic.E)(),
        setValue: (e) => Ig.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    IV = (0, a.zY)(o.X.CLIPS_GENERAL_CARD, { buildLayout: () => [IU, IG, IM], headerSettingKey: IU.key }),
    Ik = (0, a.zZ)(o.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["rWKv+e"]),
        useSubtitle: () => j.intl.format(IA.default["dh7g+S"], { learnMoreLink: eS.A.getArticleURL(A.MVz.CLIPS) }),
        buildLayout: () => [IV],
    }),
    Iw = (0, a.E2)(o.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, m.bG)([Im.Ay], () => Im.Ay.getSettings().storageLocation),
                t = !(0, Ic.E)(),
                n = g.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nm.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && Ig.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, c.jsx)(tW.D, {
                label: j.intl.string(j.t.s4773E),
                description: j.intl.string(j.t.svjwGh),
                layout: "vertical",
                children: (0, c.jsxs)(F.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, c.jsx)(ll.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": j.intl.formatToPlainString(j.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, c.jsx)(x.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: i,
                            text: j.intl.string(IA.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    IF = (0, a.zZ)(o.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => j.intl.string(IA.default["0Q+pdZ"]),
        buildLayout: () => [Iw],
    }),
    IB = (0, a.t_)(o.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePredicate: lj.sw,
        buildLayout: () => [Ik, IS, Ij, IF, IR],
    }),
    Iz = (0, a.i4)(o.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: Iu.x,
        buildLayout: () => [IB],
    });
var IX = n(254138),
    IY = n(290595),
    IH = n(153488),
    IK = n(308528),
    IW = n(171316),
    IZ = n(558001);
n(866945);
var Iq = n(835002);
function IQ() {
    let e = (0, IW.uM)(),
        t = (0, f$.vx)(),
        n = g.useCallback(() => {
            (0, tP.default)(),
                IK.A.openPrivateChannel({ recipientIds: t }),
                (0, IZ.N)(Iq.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Iq.YX.LEARN_MORE);
        }, [t]),
        i = g.useCallback(() => {
            (0, IZ.N)(Iq.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, Iq.YX.VIEWED);
        }, []);
    return g.useMemo(() => {
        if (e)
            return {
                type: d.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: j.intl.format(f6.default.i284fU, {
                    hook: (e, t) => (0, c.jsx)(az.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
let IJ = (0, a.zD)(o.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => j.intl.string(j.t.AGDDkH),
    useSubtitle: () => j.intl.string(j.t.kyo3dJ),
    useValue: () => v.Q$.useSetting(),
    setValue: (e) => Ig.eQ({ allowVoiceRecording: e }),
});
var I$ = n(157559),
    I0 = n(331887);
function I1() {
    let e = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()),
        t = (0, m.bG)([I0.A], () => I0.A.harvestType),
        [n, i] = g.useState(() => Date.now()),
        l = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        s = g.useRef(null);
    return (g.useEffect(() => {
        let e = l - Date.now();
        if (e > 0) {
            let t = setTimeout(() => i(Date.now()), e);
            clearTimeout(s.current), (s.current = t);
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
let I2 = (0, a.Tf)(o.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = I1();
            if (e.allowed) return j.intl.format(j.t.NRI6vt, { article: eS.A.getArticleURL(A.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return j.intl.string(j.t.hIbRso);
                case "not_verified":
                    return j.intl.format(j.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, c.jsx)(
                                t9.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, nt.openUserSettings)(o.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = il()(e.nextAllowed).format("MMMM Do YYYY");
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
        useDisabled: () => !I1().allowed,
        useLoading: () => (0, m.bG)([I0.A], () => I0.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => j.intl.string(j.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, li.openModalLazy)(async () => {
                        let { default: e } = await n.e("292063").then(n.bind(n, 970018));
                        return (n) => (0, c.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        (t = !1),
                            (0, SQ.$I)(n)
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
                                            ? I$.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : I$.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        I$.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
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
    I3 = (0, a.v_)(o.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            j.intl.format(j.t.dszICC, {
                onClickDisable: () => (0, nt.openUserSettings)(o.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, nt.openUserSettings)(o.X.ACCOUNT_DELETE_SETTING),
            }),
    });
var I6 = n(972737);
let I5 = (0, a.zD)(o.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () =>
            j.intl.format(j.t["2SiYln"], { helpdeskArticle: eS.A.getArticleURL(A.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, m.bG)([IH.A], () => IH.A.hasConsented(A.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, IY.U)([A.YAq.PERSONALIZATION], []).catch(I6.i)
                : (0, I6.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, IY.U)([], [A.YAq.PERSONALIZATION]).catch(I6.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: IW.uM,
    }),
    I4 = (0, A2.mj)({
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
function I8() {
    let { enabled: e } = I4.useConfig({ location: "useIsAdTopicOptOutClientEnabled" });
    return e;
}
var I7 = n(884705);
function I9() {
    return (0, m.bG)([I7.A], () => I7.A.isTogglesDisabled());
}
function _e() {
    return !v.vf.useSetting();
}
function _t(e) {
    v.vf.updateSetting(!e);
}
function _n() {
    let e = I9(),
        t = v.H1.useSetting(),
        n = (0, IW.uM)();
    return e || t || n;
}
let _i = (0, a.zD)(o.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => j.intl.string(j.t.CyLYKZ),
        useSubtitle: () =>
            j.intl.format(j.t["md5l4/"], { helpdeskArticle: eS.A.getArticleURL(A.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: () => !I8(),
        useValue: _e,
        setValue: _t,
        useDisabled: _n,
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    _l = (0, a.zD)(o.X.SPONSORED_CONTENT_QUESTS_3P_SETTING, {
        useTitle: () => j.intl.string(j.t.CyLYKZ),
        useSubtitle: () =>
            j.intl.format(j.t["2QFDU/"], { helpdeskArticle: eS.A.getArticleURL(A.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: I8,
        useValue: _e,
        setValue: _t,
        useDisabled: _n,
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    });
function _s() {
    return !v.H1.useSetting();
}
function _r(e) {
    v.H1.updateSetting(!e);
}
function _a() {
    let e = I9(),
        t = (0, IW.uM)();
    return e || t;
}
let _o = (0, a.zD)(o.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () => j.intl.string(j.t.w4fvxe),
        usePredicate: () => !I8(),
        useValue: _s,
        setValue: _r,
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: _a,
    }),
    _u = (0, a.zD)(o.X.SPONSORED_CONTENT_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () =>
            j.intl.format(j.t.cf9mvV, { helpdeskArticle: eS.A.getArticleURL(A.MVz.QUESTS_PRIVACY_CONTROLS) }),
        usePredicate: I8,
        useValue: _s,
        setValue: _r,
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: _a,
    }),
    _d = (0, a.AK)(o.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: o.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = AX(2);
            return j.intl.format(j.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = AY();
            return { type: d.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, m.bG)([iK.Ay], () => iK.Ay.getGamesSeen(!1).some((e) => !(0, AV.n1)(e))) && (0, nd.xl)(),
    }),
    _c = (0, a.gN)(o.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [_d] }),
    _g = (0, a.zD)(o.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () =>
            j.intl.format(j.t.FNqmmX, { helpdeskArticle: eS.A.getArticleURL(A.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, m.bG)([IH.A], () => IH.A.hasConsented(A.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, IY.U)([A.YAq.USAGE_STATISTICS], []).catch(I6.i)
                : (0, I6.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, IY.U)([], [A.YAq.USAGE_STATISTICS]).catch(I6.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: IW.uM,
    }),
    _m = (0, a.zZ)(o.X.DATA_USAGE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.QDAriI),
        useInlineNotice: IQ,
        initialize: () => {
            IH.A.fetchedConsents || (0, IY.Q)();
        },
        buildLayout: () => [I3, _g, I5, _o, _i, IJ, I2, _c],
    });
var _A = n(621590);
let _E = (0, a.zD)(o.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => j.intl.string(_A.default.F3llsQ),
    useSubtitle: () => j.intl.string(_A.default["6goWcz"]),
    useValue: v.Sy.useSetting,
    setValue: function (e) {
        v.Sy.updateSetting(e),
            e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: Aq.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            });
    },
});
function _h() {
    let e = v.JG.useSetting();
    return (0, m.yK)([dd.Ay, lg.A], () => {
        let t = new Set(e);
        return dd.Ay.getFlattenedGuildIds().filter((e) => null != lg.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let _S = (0, a.AK)(o.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = _h();
            if (0 === e.length) return j.intl.format(j.t.QJIJ5p, {});
            let t = lg.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? j.intl.format(j.t["T+8J4A"], { guildName: n })
                : j.intl.format(j.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                n =
                    ((e = _h()),
                    0 ===
                    (t = (0, m.yK)(
                        [lg.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => lg.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, c.jsx)(Ee, { guild: t[0], size: Ak.CD }),
                                    shape: Ak.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, c.jsx)(Ee, { guild: t[1], size: Ak.CD }), shape: Ak.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, c.jsx)(Ee, { guild: t[0], size: Ak.CD }),
                                    shape: Ak.e0.SQUIRCLE,
                                },
                            });
            return { type: d.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: o.X.ACTIVITY_PRIVACY_PANEL,
    }),
    _T = (0, a.gN)(o.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, A$.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [_S],
    }),
    _p = (0, a.Qx)(o.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, A$.lX)("ProfilePrivacySetting"),
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
        useValue: v.KP.useSetting,
        setValue: function (e) {
            let t = v.KP.getSetting();
            if ((v.KP.updateSetting(e), !(0, A$.W1)("ProfilePrivacySetting"))) return;
            let i = (0, A6.gS)(t, e);
            null != i &&
                (0, li.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("576854"), n.e("562041"), n.e("763786")]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, c.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.Qnf32C)],
    }),
    _x = (0, a.zZ)(o.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () =>
            j.intl.format(j.t.N4jSgR, {
                learnMoreUrl: eS.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [_p, _E, _T],
    });
var _f = n(401262);
let _I = { [ek.tR.REAL_MONEY_GAMING]: _f.default.pmIitA },
    __ = Object.keys(_I).map(Number),
    _N = (0, a.E2)(o.X.MANAGE_SPONSORED_CONTENT_TOPICS_SETTING, {
        useSearchTerms: () => [j.intl.string(_f.default.foQaI1)],
        usePredicate: I8,
        Component: function () {
            let e = g.useMemo(
                    () =>
                        __.map((e) => ({
                            id: String(e),
                            value: e,
                            label: j.intl.string(_I[e]),
                            leading: Sy.EyeSlashIcon,
                        })),
                    [],
                ),
                t = v.XZ.useSetting();
            return (0, c.jsx)(Sk.Z, {
                selectionMode: "multiple",
                options: e,
                value: t,
                onSelectionChange: function (e) {
                    let t = new Set(e),
                        n = new Set(v.XZ.getSetting());
                    for (let e of __) t.has(e) ? n.add(e) : n.delete(e);
                    v.XZ.updateSetting([...n]);
                },
                label: j.intl.string(_f.default.foQaI1),
                description: j.intl.format(_f.default["z/MfaY"], {
                    helpdeskArticle: eS.A.getArticleURL(A.MVz.QUESTS_PRIVACY_CONTROLS),
                }),
                layout: "vertical",
                placeholder: j.intl.string(_f.default.bnxyEL),
                wrapTags: !0,
            });
        },
    }),
    _C = (0, a.zZ)(o.X.SPONSORED_CONTENT_CATEGORY, {
        useTitle: () => j.intl.string(_f.default.XUj46U),
        usePredicate: I8,
        buildLayout: () => [_u, _l, _N],
    });
var _b = n(936388),
    _y = n(714763),
    _v = n(814278);
let _j = (0, a.zD)(o.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, _v.Lu)() }),
    useValue: function () {
        return (0, m.bG)([_y.A], () => _y.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        _b.A.updatePersistentCodesEnabled(e);
    },
});
var _O = n(787392);
function _L() {
    return (0, m.yK)([_O.A], () => _O.A.getUserIds());
}
var _R = n(803306),
    _D = n(966327),
    _P = n(774156);
function _G(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eL.Ay)(),
        l = (0, m.bG)([l9.default], () => l9.default.getUser(t)),
        s = T1.Ay.getFormattedName(l),
        r = g.useCallback(() => {
            (0, _v.kj)(t);
        }, [t]),
        a = g.useCallback(() => (0, S2.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        g.useEffect(() => {
            (0, _R.getUser)(t);
        }, [t]),
        (0, c.jsxs)("div", {
            className: _P.uW,
            children: [
                null != l && (0, c.jsx)(_D.A, { className: _P.my, user: l, size: p._3.SIZE_40 }),
                (0, c.jsxs)("div", {
                    className: _P.Qq,
                    children: [
                        (0, c.jsx)(t9.D, {
                            className: _P.Xh,
                            onClick: a,
                            children: (0, c.jsx)(z.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, c.jsx)(z.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, c.jsx)(t9.D, { onClick: r, className: _P.Qz, children: (0, c.jsx)(i4.TrashIcon, { size: "xs" }) }),
            ],
        })
    );
}
function _M(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, _v.tC)(i.timestamp),
        r = g.useCallback(() => {
            (0, _v.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, c.jsxs)("div", {
        className: t,
        children: [
            (0, c.jsxs)("div", {
                className: _P.Qq,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: j.intl.format(j.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, c.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, c.jsx)(t9.D, {
                className: _P.Kk,
                onClick: r,
                children: (0, c.jsx)(Ef.P, { size: "md", color: nW.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function _U(e) {
    let { userId: t } = e,
        n = (0, m.yK)([_O.A], () =>
            k()(_O.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(_G, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, c.jsxs)(
                    g.Fragment,
                    {
                        children: [
                            (0, c.jsx)(_M, { className: _P.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, c.jsx)("div", { className: _P.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var _V = n(464946),
    _k = n(492422);
let _w = (0, a.E2)(o.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = _L();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = _L();
            return (0, c.jsxs)(_V.h, {
                children: [
                    (0, c.jsx)(_V._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, _v.dc)() }),
                    }),
                    e.map((e) => (0, c.jsx)("div", { className: _k.A, children: (0, c.jsx)(_U, { userId: e }) }, e)),
                ],
            });
        },
    }),
    _F = (0, a.zZ)(o.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.bTwjaz),
        usePredicate: () => (0, eW.isDesktop)(),
        buildLayout: () => [_j, _w],
    }),
    _B = (0, a.t_)(o.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => [_m, _C, _x, _F],
    }),
    _z = (0, a.i4)(o.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: IX.m,
        buildLayout: () => [_B],
    });
var _X = n(476713);
let _Y = (0, a.AK)(o.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.O65dzZ),
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        destinationKey: o.X.AUTHORIZED_APPS_CATEGORY,
    }),
    _H = (0, a.gN)(o.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [_Y] });
var _K = n(875444);
function _W(e, t) {
    let n = (0, m.bG)([ER.default], () => ER.default.getFetchState()),
        i = (0, m.bG)([ER.default], () =>
            e ? ER.default.getNewestTokensForNonChildrenApplications() : ER.default.getNewestTokens(),
        ),
        l = g.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, _K.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        g.useEffect(() => {
            t || Eh.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== ER.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var _Z = n(514479);
function _q() {
    return (0, c.jsxs)("div", {
        className: _Z.d,
        children: [
            (0, c.jsx)(z.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _Z.x,
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
let _Q = (0, a.E2)(o.X.CONNECTED_GAMES_UNAVAILABLE, {
    Component: function () {
        let { showLoadingIndicator: e } = _W(!0, !0);
        return e ? (0, c.jsx)(a3.y, {}) : (0, c.jsx)(_q, {});
    },
    useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
    usePredicate: () => {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _W(!0, !0);
        return e || 0 === t.length;
    },
});
function _J() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _W(!0, !0);
    return !e && t.length > 0;
}
let _$ = (0, a.zD)(o.X.ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => j.intl.string(j.t.W8JtfT),
        useSubtitle: () => j.intl.string(j.t.a99KKy),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => v.Zk.useSetting(),
        setValue: (e) => v.Zk.updateSetting(e),
        usePredicate: _J,
    }),
    _0 = (0, a.Qx)(o.X.IN_GAME_DMS_SETTING, {
        useTitle: () => j.intl.string(j.t["ms+Tme"]),
        useSubtitle: () => j.intl.string(j.t["0ryspy"]),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.JIFnN9), value: ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: j.intl.string(j.t.rRdsk1), value: ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                { name: j.intl.string(j.t.IVRPMX), value: ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
            ];
        },
        useValue: function () {
            let e = v.TA.useSetting();
            return e === ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => v.TA.updateSetting(e),
        usePredicate: _J,
    });
function _1() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = _W(!0, !0);
    return {
        sortedGames: g.useMemo(() => e.toSorted((e, t) => os.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
var _2 = n(687123),
    _3 = n(444802);
function _6() {
    let e = (0, _3.WX)();
    g.useEffect(() => {
        (0, IZ.N)(Iq.YA.AGE_CONFIRMATION_NOTICE, Iq.YX.VIEWED);
    }, []);
    let t = g.useCallback(() => {
            window.open(eS.A.getArticleURL(e), "_blank"), (0, IZ.N)(Iq.YA.AGE_CONFIRMATION_NOTICE, Iq.YX.LEARN_MORE);
        }, [e]),
        n = g.useCallback(() => {
            xR.A.showAgeVerificationGetStartedModal({ entryPoint: xD.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, IZ.N)(Iq.YA.AGE_CONFIRMATION_NOTICE, Iq.YX.CONFIRM_AGE);
        }, []);
    return (0, c.jsx)(rW.p, {
        messageType: rW.Y.INFO,
        action: (0, c.jsx)(Ah.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: j.intl.string(j.t.FDSSia),
            onClick: n,
        }),
        children: j.intl.format(j.t.mFgsfg, { hook: (e, n) => (0, c.jsx)(az.Anchor, { onClick: t, children: e }, n) }),
    });
}
function _5() {
    let e = (0, xb.aX)(_2.t.REACTIVE_CHECK),
        t = (0, xC.b8)();
    return g.useMemo(() => {
        if (e && !t) return { type: d.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _6 };
    }, [e, t]);
}
var _4 = n(323073),
    _8 = n(386171),
    _7 = n(96607);
let _9 = (0, a.zD)(o.X.AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => j.intl.string(j.t.gvC6q7),
        useSubtitle: () => j.intl.string(j.t.zirUC1),
        useValue: _8.hT,
        useDisabled: function () {
            let e = (0, _7.A)() ?? !0,
                t = (0, _4.sP)(),
                n = (0, xC.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, _4.p5)() && e
                ? xR.A.showAgeVerificationGetStartedModal({ entryPoint: xD.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : v.Qe.updateSetting(e);
        },
    }),
    Ne = (0, a.zD)(o.X.AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () => j.intl.string(j.t["t6i/jW"]),
        useValue: _8.tI,
        useDisabled: function () {
            let e = (0, _7.A)() ?? !0,
                t = (0, _4.sP)(),
                n = (0, xC.yM)();
            return g.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, _4.p5)() && e
                ? xR.A.showAgeVerificationGetStartedModal({ entryPoint: xD.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : v.Kg.updateSetting(e);
        },
    }),
    Nt = (0, a.AK)(o.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: o.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    Nn = (0, a.gN)(o.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [Nt] });
n(667532);
var Ni = n(390248),
    Nl = n(632119),
    Ns = n(945276),
    Nr = n(389737),
    Na = n(566769);
function No() {
    let e,
        t = (0, Ns.A)() ?? !0,
        n = (0, IW.uM)(),
        i = (0, IW.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, aB.cf)([al.A], () => al.A.settings.textAndImages?.explicitContentSettings ?? (0, Nl.C$)())),
        {
            explicitContentGuilds: (0, Nl.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, Nl.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, Nl.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, Ni.hK)() && t.includes(ek.TO.SHOW)
            ? xR.A.showAgeVerificationGetStartedModal({ entryPoint: xD.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, Nl.Jz)(e);
    }
    let o = [
            { value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: ek.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: ek.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let g = { isDisabled: i, tooltipText: n ? j.intl.string(f6.default["6Af/cw"]) : void 0 };
    return (0, c.jsxs)(Nr.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, c.jsx)(Na.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(Na.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(Na.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? j.intl.string(f6.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function Nu() {
    let e,
        t = (0, Ns.A)() ?? !0,
        n = (0, IW.uM)(),
        i = (0, IW.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, aB.cf)([al.A], () => al.A.settings.textAndImages?.goreContentSettings ?? (0, _3.T4)())),
        {
            goreContentGuilds: (0, _3.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _3.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _3.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, Ni.hK)() && t.includes(ek.TO.SHOW)
            ? xR.A.showAgeVerificationGetStartedModal({ entryPoint: xD.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _3.qY)(e);
    }
    let o = [
            { value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: ek.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: ek.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let g = { isDisabled: i, tooltipText: n ? j.intl.string(f6.default["6Af/cw"]) : void 0 };
    return (0, c.jsxs)(Nr.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, c.jsx)(Na.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(Na.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(Na.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? j.intl.string(f6.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var Nd = n(875162),
    Nc = n(636745);
let Ng = (0, a.E2)(o.X.CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _3.WX)(),
            t = g.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: No,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: Nu,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, c.jsxs)(_V.h, {
            children: [
                (0, c.jsx)(_V._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: eS.A.getArticleURL(e) }),
                }),
                (0, c.jsx)(Nd.A, { tabs: t, orientation: "vertical", tabsClassName: Nc.v }),
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
var Nm = n(639555),
    NA = n(617641),
    NE = n(546140),
    Nh = n(406935),
    NS = n(594061);
let NT = (0, a.zD)(o.X.DM_SAFETY_ALERTS_SETTING, {
        useTitle: () => j.intl.string(j.t.qFsx5q),
        useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: eS.A.getArticleURL(A.MVz.SAFETY_ALERTS) }),
        useValue: NE.L,
        setValue: function (e) {
            return NS.wc.updateAsync(
                "privacy",
                (t) => {
                    t.inappropriateConversationWarnings = Nh._t.create({ value: e });
                },
                NS.Sb.INFREQUENT_USER_ACTION,
            );
        },
        usePredicate: function () {
            let e = (0, NA.Lc)({ location: "DMSafetyAlertsSetting" }),
                t = (0, Nm.Rv)({ location: "DMSafetyAlertsSetting" }),
                n = (0, Ns.A)() ?? !0;
            return e && !n && !t;
        },
    }),
    Np = (0, a.zZ)(o.X.CONTENT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3upKU8"]),
        useInlineNotice: function () {
            let e,
                t,
                n,
                i,
                l,
                s,
                r,
                a,
                o,
                u = IQ(),
                m =
                    ((e = (0, f2.Z)()),
                    (t = (0, _3.WX)()),
                    (n = g.useCallback(() => {
                        window.open(eS.A.getArticleURL(t), "_blank"),
                            (0, IZ.N)(Iq.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Iq.YX.LEARN_MORE);
                    }, [t])),
                    (i = g.useCallback(() => {
                        (0, IZ.N)(Iq.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, Iq.YX.VIEWED);
                    }, [])),
                    g.useMemo(() => {
                        if (e)
                            return {
                                type: d.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                text: j.intl.format(j.t.EUo0yj, {
                                    hook: (e, t) => (0, c.jsx)(az.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                A =
                    ((l = (0, xb.SJ)()),
                    (s = (0, xC.b8)()),
                    (r = l && !s),
                    (a = g.useCallback(() => {
                        xR.A.showAgeVerificationGetStartedModal({ entryPoint: xD.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, IZ.N)(Iq.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Iq.YX.LEARN_MORE);
                    }, [])),
                    (o = g.useCallback(() => {
                        (0, IZ.N)(Iq.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, Iq.YX.VIEWED);
                    }, [])),
                    g.useMemo(() => {
                        if (r)
                            return {
                                type: d.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                text: j.intl.format(j.t.OX4ybh, {
                                    hook: (e, t) => (0, c.jsx)(az.Anchor, { onClick: a, children: e }, t),
                                }),
                            };
                    }, [a, r, o])),
                E = _5();
            return u ?? E ?? A ?? m;
        },
        buildLayout: () => [Ng, NT, _9, Ne, Nn],
    });
var Nx = n(923457),
    Nf = n(750714);
let NI = (0, a.Qx)(o.X.DM_SPAM_SETTING, {
    useTitle: () => j.intl.string(j.t.puwSkY),
    useSubtitle: () => j.intl.string(j.t["+sXN3T"]),
    useValue: function () {
        let e = v.he.useSetting(),
            t = v.cj.useSetting(),
            n = (0, m.bG)([l9.default], () => l9.default.getCurrentUser()),
            i = (0, xb.yv)(Nx.p.SPAM_FILTERS);
        return e !== ek.he.DEFAULT_UNSET
            ? e
            : n?.nsfwAllowed === !1 && i
              ? ek.he.FRIENDS_AND_NON_FRIENDS
              : (Nf.xY.get(t) ?? ek.he.NON_FRIENDS);
    },
    setValue: (e) => v.he.updateSetting(e),
    useOptions: function () {
        return [
            { name: j.intl.string(j.t["+w5yKk"]), value: ek.he.FRIENDS_AND_NON_FRIENDS },
            { name: j.intl.string(j.t.yAPg6r), value: ek.he.NON_FRIENDS },
            { name: j.intl.string(j.t.FEXKsv), value: ek.he.DISABLED },
        ];
    },
    useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
});
var N_ = n(189883);
let NN = (0, a.zD)(o.X.FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: function () {
        let e = v.FA.useSetting();
        return g.useMemo(() => (0, n3.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        v.FA.updateSetting(e ? A.yKI : A.yKI & ~A.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, IW.uM)();
    },
});
var NC = n(665260);
let Nb = (0, a.zD)(o.X.FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: function () {
            let e = v.FA.useSetting(),
                t = g.useMemo(() => (0, n3.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = v.FA.getSetting();
            v.FA.updateSetting(e ? NC.UI(t, A.dzt.MUTUAL_FRIENDS) : NC.iE(t, A.dzt.MUTUAL_FRIENDS, A.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, IW.uM)();
        },
    }),
    Ny = (0, a.zD)(o.X.FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useSubtitle: () => j.intl.string(j.t["6DqAp0"]),
        useValue: function () {
            let e = v.FA.useSetting(),
                t = g.useMemo(() => (0, n3.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = v.FA.getSetting();
            v.FA.updateSetting(e ? NC.UI(t, A.dzt.MUTUAL_GUILDS) : NC.iE(t, A.dzt.MUTUAL_GUILDS, A.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, IW.uM)();
        },
    }),
    Nv = (0, a.FW)(o.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [NN, Nb, Ny],
    });
var Nj = n(420825);
let NO = (0, a.zD)(o.X.FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !(0, Nj.q)(),
        setValue: function (e) {
            v.Zd.updateSetting(!e);
        },
        usePersistentBadge: () => ({ badgeType: d.Xi.BETA }),
    }),
    NL = (0, a.zZ)(o.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5gxWrt"]),
        useSubtitle: function () {
            let { enabled: e } = N_.A.useConfig({ location: "Friend Request Setting" });
            return e ? j.intl.string(j.t.QVbF3l) : void 0;
        },
        useSubnavLabel: () => j.intl.string(j.t.fyA115),
        useInlineNotice: IQ,
        buildLayout: () => [Nv, NO],
    });
var NR = n(994500),
    ND = n(428678),
    NP = n(717398),
    NG = n(730134),
    NM = n(276573);
function NU(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, c.jsxs)("div", {
        className: NM.wx,
        children: [
            (0, c.jsx)("div", {
                className: NM.zc,
                children: i ? (0, c.jsx)(ND.K, {}) : (0, c.jsx)(Sy.EyeSlashIcon, {}),
            }),
            (0, c.jsxs)("div", {
                className: NM.Qq,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: j.intl.string(i ? j.t.PFOUKW : j.t["93ZDWE"]),
                    }),
                    (0, c.jsx)(z.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: i
                            ? j.intl.format(j.t["r91W/h"], { numberOfBlockedUsers: n })
                            : j.intl.format(j.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function NV(e) {
    let { userId: t, last: n } = e,
        i = (0, m.bG)([NR.A], () => NR.A.isBlocked(t)),
        l = (0, m.bG)([l9.default], () => l9.default.getUser(t)),
        [s, r] = g.useState(!1),
        a = g.useCallback(() => {
            r(!0),
                i
                    ? NP.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : NP.A.unignoreUser(t, tv.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [i, t]);
    return null == l
        ? null
        : (0, c.jsxs)("div", {
              className: it()(NM.nM, { [NM.fW]: n }),
              children: [
                  (0, c.jsxs)("div", {
                      className: NM.eF,
                      children: [
                          (0, c.jsx)(NG.A, { user: l, size: p._3.SIZE_40 }),
                          (0, c.jsxs)("div", {
                              className: NM.Qq,
                              children: [
                                  (0, c.jsx)(z.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, c.jsx)(x.$, {
                      variant: "secondary",
                      text: j.intl.string(i ? j.t.XyHpKH : j.t["8wXU9B"]),
                      onClick: a,
                      loading: s,
                  }),
              ],
          });
}
function Nk(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = g.useState(5);
    return (0, c.jsx)(_V.h, {
        children: (0, c.jsxs)("div", {
            className: NM.Nr,
            children: [
                (0, c.jsx)(NU, { listType: n, numberOfUsers: t.length }),
                (0, c.jsx)("div", {
                    className: NM.jS,
                    children: t.slice(0, i).map((e, n) => (0, c.jsx)(NV, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, c.jsx)("div", {
                          className: NM.vM,
                          children: (0, c.jsx)(t9.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: NM.Qf,
                              children: (0, c.jsx)(z.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: j.intl.format(j.t.jULEDr, {
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
let Nw = (0, a.E2)(o.X.BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, m.bG)([NR.A], () => NR.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, m.yK)([NR.A], () => NR.A.getBlockedIDs());
            return (0, c.jsx)(Nk, { userIds: e, listType: "blocked" });
        },
    }),
    NF = (0, a.E2)(o.X.IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, m.bG)([NR.A], () => NR.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, m.yK)([NR.A], () => NR.A.getIgnoredIDs());
            return (0, c.jsx)(Nk, { userIds: e, listType: "ignored" });
        },
    }),
    NB = (0, a.zZ)(o.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+Iryf3"]),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: eS.A.getArticleURL(A.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Nw, NF],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, m.cf)([NR.A], () => ({
                hasBlockedUsers: NR.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: NR.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var Nz = n(22385),
    NX = n(556534),
    NY = n(111159),
    NH = n(152056),
    NK = n(978433);
let NW = { label: () => j.intl.string(j.t["32u1Dx"]), value: Nz.YG };
var NZ = n(307863),
    Nq = n(428031),
    NQ = n(954225);
function NJ() {
    let e = (0, NX.Tx)(),
        t = (0, NX.q9)(),
        n = (0, NZ.e)();
    return e === Nz.YG
        ? n
            ? j.intl.string(j.t.XXGmuB)
            : j.intl.string(j.t.wbYDfT)
        : t
          ? j.intl.string(j.t.V0ka0Q)
          : n
            ? j.intl.string(j.t.F9WY3f)
            : j.intl.string(j.t.G7c3Xo);
}
function N$(e, t) {
    e7.default.track(A.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
let N0 = (0, a.zD)(o.X.PERMISSIONS_DMS_SETTING, {
    useTitle: NJ,
    useValue: function () {
        let e = (0, NX.Tx)(),
            t = v.$s.useSetting().includes(e),
            n = (0, Nq.K)();
        return e === Nz.YG ? !n : !t;
    },
    useDisabled: function () {
        let e = (0, IW.uM)();
        return (0, NX.Tx)() === Nz.YG && e;
    },
    setValue: function (e) {
        let t = Nz.xk.getState().selectedGuildId;
        if (t === Nz.YG) {
            var n;
            (n = !e),
                (0, I6.O)({
                    header: j.intl.string(j.t["uUr+GR"]),
                    body: j.intl.string(j.t.hjGJBp),
                    confirmText: j.intl.string(j.t.gm1Vej),
                    cancelText: j.intl.string(j.t.p89ACt),
                    confirmButtonColor: sG.$n.Colors.BRAND,
                    onConfirm: function () {
                        v.n6.updateSetting(n), N$(n, !1);
                    },
                    onCancel: function () {
                        v.n6.updateSetting(n), v.$s.updateSetting(n ? lg.A.getGuildIds() : []), N$(n, !0);
                    },
                });
        } else {
            let n = (0, n3.Tb)();
            e ? n.delete(t) : n.add(t),
                v.$s.updateSetting(Array.from(n)),
                e7.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: NQ.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: eI.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        }
    },
});
var N1 = n(953298);
function N2(e, t) {
    e7.default.track(A.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function N3() {
    return (0, NX.q9)() ? j.intl.string(j.t["982I7+"]) : j.intl.string(j.t["3yHM5i"]);
}
let N6 = (0, a.zD)(o.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: N3,
        useSubtitle: () => j.intl.format(j.t.BoCjTy, { learnMoreUrl: eS.A.getArticleURL(A.MVz.MESSAGE_REQUESTS) }),
        useValue: function () {
            let e = (0, NX.Tx)(),
                t = (0, Nq.K)(),
                n = v.$s.useSetting().includes(e),
                i = v.YX.useSetting(),
                l = v.Zr.useSetting().includes(e);
            return e === Nz.YG ? !t && !i : !n && !l;
        },
        useDisabled: function () {
            let e = (0, NX.Tx)(),
                t = (0, IW.uM)(),
                n = (0, Nq.K)(),
                i = v.$s.useSetting().includes(e);
            return e === Nz.YG ? n || t : i;
        },
        setValue: function (e) {
            let t = Nz.xk.getState().selectedGuildId;
            if (!e && (0, N1.w)())
                return void xR.A.showAgeVerificationGetStartedModal({ entryPoint: xD.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === Nz.YG) {
                var n;
                (n = !e),
                    (0, I6.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: sG.$n.Colors.BRAND,
                        onConfirm: function () {
                            v.YX.updateSetting(n), N2(n, !1);
                        },
                        onCancel: function () {
                            v.YX.updateSetting(n), v.Zr.updateSetting(n ? lg.A.getGuildIds() : []), N2(n, !0);
                        },
                    });
            } else {
                let n = (0, n3.xo)();
                e ? n.delete(t) : n.add(t),
                    v.Zr.updateSetting(Array.from(n)),
                    e7.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: NQ.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: eI.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    N5 = (0, a.E2)(o.X.PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            return [NJ(), N3()];
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, Nz.xk)(),
                n = (0, m.bG)([dd.Ay], () => dd.Ay.getFlattenedGuildIds()),
                i = (0, m.bG)([lg.A], () => lg.A.getGuilds()),
                l = n[0];
            g.useEffect(
                () =>
                    NH.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, n) => {
                            let i = Nz.xk.getState().selectedGuildId;
                            "" === n && "" !== e && i === Nz.YG && null != l
                                ? t(l)
                                : "" === e && i !== Nz.YG && t(Nz.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [l, t],
            );
            let s = g.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...NW,
                        id: NW.value,
                        label: NW.label(),
                        leading: (0, c.jsx)("div", {
                            className: NK.KP,
                            children: (0, c.jsx)(NY.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: NK.cl,
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
                                leading: (0, c.jsx)(dI.Ay, {
                                    className: NK.cl,
                                    guild: n,
                                    size: dI.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [n, i]);
            return (0, c.jsx)(Sk.Z, {
                selectionMode: "single",
                onSelectionChange: function (e) {
                    t(e);
                },
                value: e,
                options: s,
            });
        },
    }),
    N4 = (0, a.zZ)(o.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Y5GYcX),
        useSubnavLabel: () => j.intl.string(j.t.YUU0RF),
        useInlineNotice: function () {
            let e = IQ(),
                t = _5();
            if ((0, NX.Tx)() === Nz.YG) return e ?? t;
        },
        buildLayout: () => [N5, N0, N6],
    }),
    N8 = (0, a.zZ)(o.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [NI] }),
    N7 = (0, a.zZ)(o.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = _1();
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
                let { sortedGames: e } = _1();
                return g.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, c.jsx)("img", {
                                src: y.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: Ak.CD,
                                height: Ak.CD,
                            }),
                            shape: Ak.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, c.jsx)("img", {
                                    src: y.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: Ak.YP,
                                    height: Ak.YP,
                                }),
                                shape: Ak.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: d.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        initialize: () => {
            Eh.A.fetch();
        },
        buildLayout: () => [_$, _0, _Q, _H],
    }),
    N9 = (0, a.t_)(o.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [Np, N8, N4, NL, N7, NB],
    }),
    Ce = (0, a.i4)(o.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: _X.l,
        buildLayout: () => [N9],
    });
var Ct = n(782603),
    Cn = n(899847),
    Ci = n(695515),
    Cl = n(936926);
let Cs = (0, a.Hn)(o.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => j.intl.string(j.t["8rHeOr"]),
        useSubtitle: () => j.intl.string(j.t["eJE6+J"]),
        useValue: v.cU.useSetting,
        setValue: v.cU.updateSetting,
        useOptions: () =>
            V.range(1, 11).map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: j.intl.formatToPlainString(j.t.iXLF9W, { minutes: e }),
            })),
    }),
    Cr = (0, a.zD)(o.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, nt.openUserSettings)(o.X.TTS_PLAYBACK_RATE) }),
        useValue: v.on.useSetting,
        setValue: v.on.updateSetting,
    }),
    Ca = (0, a.Qx)(o.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, m.bG)([aA.A], () => aA.A.getTTSType()),
        setValue: (e) => ap.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.B1AGeJ), value: A.aVn.ALL_CHANNELS },
                { name: j.intl.string(j.t.uzZg9e), value: A.aVn.SELECTED_CHANNEL },
                { name: j.intl.string(j.t.DYO5Oi), value: A.aVn.NEVER },
            ];
        },
        usePredicate: () => U.$j,
    }),
    Co = o.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    Cu = (0, a.bd)(Co, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tc(Co, {
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
        buildLayout: () => [Cs, Cr, Ca],
    }),
    Cd = (0, a.zZ)(o.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [Cu],
    }),
    Cc = (0, a.zD)(o.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: function () {
            return (0, m.bG)([aA.A], () => !aA.A.getDisableUnreadBadge());
        },
        setValue: (e) => ap.default.setDisableUnreadBadge(!e),
    }),
    Cg = (0, a.zZ)(o.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [Cc],
    });
var Cm = n(840559),
    CA = n(997187),
    CE = n(723923);
let Ch = CE.px.map((e) =>
        (0, a.zD)(`${o.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, m.cf)([CA.A], () => CA.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, Cm.CA)(e.category, t),
        }),
    ),
    CS = (0, a.Tf)(o.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, m.cf)([CA.A], () => CA.A.getEmailSettings());
            return CE.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, Cm.NI)(),
        useVariant: () => "critical-secondary",
    }),
    CT = (0, a.zZ)(o.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = CA.A.getEmailSettings();
            e || (0, Cm.cR)();
        },
        buildLayout: () => [...Ch, CS],
    }),
    Cp = (0, a.zD)(o.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: function () {
            return (0, m.bG)([aA.A], () => aA.A.getDesktopType()) !== A.nRU.NEVER;
        },
        setValue: (e) => ap.default.setDesktopType(e ? A.nRU.ALL : A.nRU.NEVER),
    });
var Cx = n(832712),
    Cf = n(543465),
    CI = n(790782);
let C_ = (0, a.zD)(o.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, m.bG)([Cf.Ay], () => Cf.Ay.useNewNotifications),
    setValue: function (e) {
        Cx.A.setAccountFlag(Aq.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (mQ.w.set("turnedOffNewNotifications", !0),
                e7.default.track(A.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lg.A.getGuildsArray().filter(
                        (e) => Cf.Ay.resolveGuildUnreadSetting(e) === CI.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, m.bG)(
            [l9.default, Cf.Ay],
            () =>
                l9.default.getCurrentUser()?.isStaff() ||
                l9.default.getCurrentUser()?.isStaffPersonal() ||
                Cf.Ay.useNewNotifications,
        ),
});
var CN = n(534654);
let CC = (0, a.zD)(o.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, m.bG)([aA.A], () => aA.A.screenDowntimeReminder),
        setValue: (e) => ap.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, Cl.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, CN.A)(),
                n = (0, f$.Du)();
            return e && t && n;
        },
    }),
    Cb = (0, a.zD)(o.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: v.gY.useSetting,
        setValue: (e) => v.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, Cl.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, CN.A)(),
                n = (0, f$.Du)();
            return e && t && n;
        },
    }),
    Cy = (0, a.zD)(o.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.NjOMvh),
        useValue: v.oz.useSetting,
        setValue: function (e) {
            v.oz.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Aq.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.hi4dSk)],
    }),
    Cv = (0, a.zD)(o.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: v.NR.useSetting,
        setValue: function (e) {
            v.NR.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Aq.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
    }),
    Cj = (0, a.zD)(o.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.FSNIvs),
        useValue: v.Yh.useSetting,
        setValue: function (e) {
            v.Yh.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Aq.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    CO = (0, A2.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    CL = (0, a.zD)(o.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: v.T3.useSetting,
        setValue: function (e) {
            v.T3.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Aq.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => CO.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var CR = n(815807);
let CD = (0, a.Hn)(o.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: ek.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: ek.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: ek.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: v.Zp.useSetting,
        setValue: (e) => (0, CR.n4)(e, v.Zp.getSetting()),
    }),
    CP = (0, a.zD)(o.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["k51K1+"]),
        useValue: v.Qr.useSetting,
        setValue: function (e) {
            v.Qr.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Aq.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    CG = (0, A2.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    CM = (0, a.zD)(o.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: v.zS.useSetting,
        setValue: function (e) {
            v.zS.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Aq.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => CG.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    CU = (0, a.FW)(o.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [Cj, Cy, Cv, CP, CM, CL, CD],
    }),
    CV = (0, a.zD)(o.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, m.bG)([aA.A], () => aA.A.taskbarFlash),
        setValue: (e) => ap.default.setTaskbarFlash(e),
        usePredicate: () => (0, nd.uF)(),
    }),
    Ck = (0, a.zZ)(o.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [Cp, CV, CU, C_, Cb, CC],
    });
var Cw = n(965957),
    CF = n(312671),
    CB = n(235079);
let Cz = (0, a.zD)(o.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = aE.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, m.bG)([CF.A], () => CF.A.getSoundpack()),
            t = aE.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = aE.A.getHolidaySoundpack();
        tl()(null != t, "predicate should fail if no soundpack is available"), (0, Cw.p)(e ? t : CB.i.CLASSIC);
    },
    usePredicate: aE.A.useIsEligible,
});
var CX = n(970931);
let CY = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: CX.kB,
        useDisabledMessage: () => ((0, CX.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    CH = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    CK = (0, a.zD)(o.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => aI("message3") }),
        useValue: () =>
            (0, m.bG)([aA.A], () => aA.A.getNotifyMessagesInSelectedChannel() && !aA.A.getDisableAllSounds()),
        setValue: (e) => ap.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, m.bG)([aA.A], () => aA.A.getDisableAllSounds()),
    }),
    CW = (0, a.zD)(o.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, m.bG)([aA.A], () => aA.A.getDisableAllSounds()),
        setValue: (e) => ap.default.toggleDisableAllSounds(e),
    }),
    CZ = (0, a.D1)(o.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                af();
            };
        },
        buildLayout: () => [a_(CY), CK, a_(CH), CW],
    }),
    Cq = (0, a.AK)(o.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: o.X.SOUNDS_CATEGORY,
    }),
    CQ = (0, a.gN)(o.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [Cq] }),
    CJ = (0, a.zZ)(o.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [Cz, CZ, CQ],
    }),
    C$ = (0, a.t_)(o.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, Cl.Eq)({ location: "NotificationsPanel" }) ||
                null != Ci.A.getAgeGroup() ||
                Ci.A.isLoading() ||
                (Ci.A.canRefetch() && Cn.Ay.initialPageLoad());
        },
        buildLayout: () => [Ck, CJ, Cg, CT, Cd],
    }),
    C0 = (0, a.i4)(o.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: Ct.BellIcon,
        buildLayout: () => [C$],
    }),
    C1 = (0, a.WI)(o.X.USER_SECTION, {
        useTitle: () => j.intl.string(j.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => [Io, _z, Ce, C0, Iz],
    });
var C2 = n(387758),
    C3 = n(271866),
    C6 = n(147964),
    C5 = n(868511);
let C4 = (0, a.zD)(o.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: v.Q_.useSetting,
        useValue: () => (0, m.bG)([C6.A], () => null != C6.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, li.openModal)((e) => (0, c.jsx)(C5.A, { ...e })) : C3.cL();
        },
    }),
    C8 = (0, a.zD)(o.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: A.X7G.API_DOCS }),
        useValue: v.Q_.useSetting,
        setValue: v.Q_.updateSetting,
        usePredicate: () => u_.p5,
    }),
    C7 = (0, a.zZ)(o.X.DEVELOPER_CATEGORY, { buildLayout: () => [C8, C4] }),
    C9 = (0, a.t_)(o.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [C7] }),
    be = (0, a.i4)(o.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: C2.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [C9],
    });
var bt = n(70688),
    bn = n(830215);
let bi = (0, a.i4)(o.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: bt.DoorExitIcon,
        onClick: () => {
            (0, nZ.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    bn.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bl = (0, a.WI)(o.X.UTILITY_SECTION, {
        useTitle: () => j.intl.string(j.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [be, bi],
    }),
    bs = (0, a.Hr)({ buildLayout: () => [xx, C1, mm, a$, Sq, AM, bl], analyticsKey: "user_settings" });
